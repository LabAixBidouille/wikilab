#!/usr/bin/env node
// Passe rétroactive d'optimisation des images de site/static/img/.
//
// Le workflow optimize-images.yml ne compresse que les images modifiées dans
// une PR. Ce script-là cible le legacy : photos jamais redimensionnées (4000+
// px), icônes PNG surdimensionnées (2000×2000 alors qu'elles s'affichent en
// 225×225), planches haute résolution.
//
// Stratégies appliquées :
//   - PNG : si plus grande dimension > MAX_PNG, resize lanczos3 vers MAX_PNG
//     (côté long), puis recompression palette (effort=10, compressionLevel=9,
//     palette=true). Idempotent : on relit la sortie pour comparer la taille,
//     on n'écrit que si on gagne au moins MIN_GAIN_RATIO.
//   - JPEG : si plus grande dimension > MAX_JPG, resize vers MAX_JPG, encodage
//     mozjpeg Q82. Même garde-fou idempotent.
//   - SVG, GIF, WebP : ignorés.
//
// Usage :
//   node site/scripts/optimize-images-batch.mjs --dry-run     # rapport seul
//   node site/scripts/optimize-images-batch.mjs --apply       # applique
//   node site/scripts/optimize-images-batch.mjs --apply --filter icone
//
// Filtres :
//   --filter <substring>     n'agit que sur les chemins contenant <substring>
//   --min-bytes <N>          ignore les fichiers < N octets (défaut 500 Ko)
//   --max-png <px>           taille cible côté long pour PNG (défaut 1600)
//   --max-jpg <px>           taille cible côté long pour JPEG (défaut 1600)
//   --max-icon <px>          surcharge spécifique pour les `icone.*` (défaut 512)
//   --limit <N>              ne traite que les N premiers fichiers triés par taille

import { readdir, stat, readFile, writeFile, rename } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join, basename, extname, relative } from 'node:path';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..', '..');
const IMG_ROOT = join(REPO_ROOT, 'site', 'static', 'img');

const args = parseArgs(process.argv.slice(2));
const DRY_RUN = !args.apply;
const FILTER = args.filter ?? null;
const MIN_BYTES = Number(args['min-bytes'] ?? 500 * 1024);
const MAX_PNG = Number(args['max-png'] ?? 1600);
const MAX_JPG = Number(args['max-jpg'] ?? 1600);
const MAX_ICON = Number(args['max-icon'] ?? 512);
const LIMIT = args.limit ? Number(args.limit) : null;
const MIN_GAIN_RATIO = 0.1; // n'écrit que si on gagne >= 10 %

const fmt = (b) => (b / 1024 / 1024).toFixed(2) + ' Mo';
const pct = (a, b) => ((1 - a / b) * 100).toFixed(1) + ' %';

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith('--')) continue;
    const key = a.slice(2);
    const next = argv[i + 1];
    if (next === undefined || next.startsWith('--')) {
      out[key] = true;
    } else {
      out[key] = next;
      i++;
    }
  }
  return out;
}

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (entry.isFile()) yield full;
  }
}

function targetSize(file) {
  const ext = extname(file).toLowerCase();
  const isIcon = basename(file).toLowerCase().startsWith('icone.');
  if (ext === '.png') return isIcon ? MAX_ICON : MAX_PNG;
  if (ext === '.jpg' || ext === '.jpeg') return isIcon ? MAX_ICON : MAX_JPG;
  return null;
}

async function processFile(file, originalSize) {
  const ext = extname(file).toLowerCase();
  const cible = targetSize(file);
  if (cible === null) return null;

  const img = sharp(file, { failOn: 'truncated' });
  const meta = await img.metadata();
  const longSide = Math.max(meta.width ?? 0, meta.height ?? 0);
  const resize = longSide > cible;

  let pipeline = sharp(file, { failOn: 'truncated' });
  if (resize) {
    pipeline = pipeline.resize({
      width: meta.width >= meta.height ? cible : null,
      height: meta.height > meta.width ? cible : null,
      fit: 'inside',
      withoutEnlargement: true,
      kernel: 'lanczos3',
    });
  }

  if (ext === '.png') {
    // palette=true active pngquant interne (imagequant). effort=10 = max.
    pipeline = pipeline.png({
      compressionLevel: 9,
      palette: true,
      effort: 10,
    });
  } else {
    pipeline = pipeline.jpeg({
      quality: 82,
      mozjpeg: true,
    });
  }

  const buf = await pipeline.toBuffer();
  return { buf, resize, meta, longSide, originalSize };
}

function shouldKeep(originalSize, newSize) {
  if (newSize >= originalSize) return false;
  const gain = (originalSize - newSize) / originalSize;
  return gain >= MIN_GAIN_RATIO;
}

async function main() {
  const candidates = [];
  for await (const file of walk(IMG_ROOT)) {
    const ext = extname(file).toLowerCase();
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;
    if (FILTER && !file.includes(FILTER)) continue;
    const st = await stat(file);
    if (st.size < MIN_BYTES) continue;
    candidates.push({ file, size: st.size });
  }
  candidates.sort((a, b) => b.size - a.size);
  const work = LIMIT ? candidates.slice(0, LIMIT) : candidates;

  console.log(
    `Mode : ${DRY_RUN ? 'DRY-RUN' : 'APPLY'}\n` +
      `Cibles : PNG ≤ ${MAX_PNG}px, JPG ≤ ${MAX_JPG}px, icone.* ≤ ${MAX_ICON}px\n` +
      `Seuil de traitement : ${(MIN_BYTES / 1024).toFixed(0)} Ko\n` +
      `Gain minimum pour écrire : ${(MIN_GAIN_RATIO * 100).toFixed(0)} %\n` +
      `Candidats : ${work.length} fichier(s)\n` +
      '─'.repeat(80),
  );

  let totalOrig = 0;
  let totalNew = 0;
  let skipped = 0;
  let written = 0;
  let errored = 0;

  for (const { file, size } of work) {
    try {
      const result = await processFile(file, size);
      if (!result) continue;
      const rel = relative(REPO_ROOT, file);
      totalOrig += size;
      if (!shouldKeep(size, result.buf.length)) {
        skipped++;
        totalNew += size;
        console.log(
          `  skip   ${rel}  (${fmt(size)} → ${fmt(result.buf.length)}, gain insuffisant)`,
        );
        continue;
      }
      written++;
      totalNew += result.buf.length;
      const tag = result.resize
        ? `resize ${result.meta.width}×${result.meta.height}→${result.longSide > targetSize(file) ? targetSize(file) : result.longSide}px + recomp`
        : 'recomp';
      console.log(
        `  ${DRY_RUN ? 'WOULD' : 'WRITE'}  ${rel}  ${fmt(size)} → ${fmt(result.buf.length)}  (-${pct(result.buf.length, size)}, ${tag})`,
      );
      if (!DRY_RUN) {
        const tmp = file + '.tmp-optim';
        await writeFile(tmp, result.buf);
        await rename(tmp, file);
      }
    } catch (err) {
      errored++;
      console.error(`  ERROR  ${relative(REPO_ROOT, file)} : ${err.message}`);
    }
  }

  console.log(
    '─'.repeat(80) +
      `\nRécap :\n` +
      `  Traités : ${work.length}\n` +
      `  Écrits  : ${written}\n` +
      `  Sautés  : ${skipped} (gain insuffisant ou déjà optimisé)\n` +
      `  Erreurs : ${errored}\n` +
      `  Avant   : ${fmt(totalOrig)}\n` +
      `  Après   : ${fmt(totalNew)}\n` +
      `  Gain    : ${fmt(totalOrig - totalNew)} (-${pct(totalNew, totalOrig)})\n` +
      (DRY_RUN ? '\nDry-run terminé. Relancez avec --apply pour écrire.\n' : ''),
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

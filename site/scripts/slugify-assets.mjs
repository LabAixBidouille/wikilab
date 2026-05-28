#!/usr/bin/env node
// De-fragilise les noms d'images de site/static/img : retire espaces, accents
// et autres caractères non-ASCII fragiles des noms de fichiers ET de dossiers,
// puis met à jour les références dans site/docs + site/src (fiches, pages,
// resources.ts/projects.ts). Voir #206.
//
// Pourquoi : un nom à espace/accent doit être URL-encodé (%20/%C3%A9) dans
// chaque référence, ce qui est fragile (source de 404 silencieux, cf. #216) et
// peu portable (collisions de casse). On force des noms ASCII propres.
//
// Usage :
//   node site/scripts/slugify-assets.mjs [--apply] [--filter <substr>]
//   --apply           écrit les changements (sinon dry-run)
//   --filter <substr> limite aux chemins contenant <substr> (ex. un projet)
//
// Idempotent : un fichier déjà ASCII-propre n'est pas touché.

import {
  readFileSync,
  writeFileSync,
  readdirSync,
  renameSync,
  existsSync,
  statSync,
  mkdirSync,
} from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const IMG_ROOT = join(REPO_ROOT, 'site', 'static', 'img');
const REF_DIRS = [join(REPO_ROOT, 'site', 'docs'), join(REPO_ROOT, 'site', 'src')];

const args = process.argv.slice(2);
const APPLY = args.includes('--apply');
const filterIdx = args.indexOf('--filter');
const FILTER = filterIdx >= 0 ? args[filterIdx + 1] : null;

// Un segment est « fragile » s'il contient autre chose que [A-Za-z0-9._-].
const FRAGILE = /[^A-Za-z0-9._-]/;
// On ne traite QUE les fichiers image : un .pdf/.svg accolé aux mêmes noms
// (ex. plans de découpe borne-arcade) n'est pas couvert par l'update de réfs
// ci-dessous, donc on le laisse tel quel pour éviter des liens cassés.
const IMG_EXT = /\.(png|jpe?g|svg|webp|gif|avif)$/i;

const stripAccents = (s) => s.normalize('NFD').replace(/\p{Mn}/gu, '');

function slugSegment(seg) {
  // Conserve l'extension du dernier segment.
  const dot = seg.lastIndexOf('.');
  const hasExt = dot > 0 && dot > seg.length - 8;
  const base = hasExt ? seg.slice(0, dot) : seg;
  const ext = hasExt ? seg.slice(dot).toLowerCase() : '';
  const slug = stripAccents(base)
    .replace(/[^A-Za-z0-9._-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
  return (slug || 'asset') + ext;
}

function walkFiles(dir, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const f = join(dir, e.name);
    if (e.isDirectory()) walkFiles(f, acc);
    else if (e.isFile()) acc.push(f);
  }
  return acc;
}

function walkRefFiles(dir, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const f = join(dir, e.name);
    if (e.isDirectory()) walkRefFiles(f, acc);
    else if (/\.(mdx?|tsx?|jsx?)$/.test(e.name)) acc.push(f);
  }
  return acc;
}

// 1. Construire le mapping ancien -> nouveau (chemins web /img/...).
const WEB = (abs) => '/img' + abs.slice(IMG_ROOT.length);
const mapping = [];
for (const abs of walkFiles(IMG_ROOT)) {
  const rel = abs.slice(IMG_ROOT.length + 1); // sous img/
  if (FILTER && !abs.includes(FILTER)) continue;
  if (!IMG_EXT.test(abs)) continue; // images seulement (cf. note plus haut)
  const segs = rel.split('/');
  if (!segs.some((s) => FRAGILE.test(s))) continue;
  const newSegs = segs.map((s) => (FRAGILE.test(s) ? slugSegment(s) : s));
  const newAbs = join(IMG_ROOT, ...newSegs);
  if (newAbs === abs) continue;
  mapping.push({ oldAbs: abs, newAbs, oldWeb: WEB(abs), newWeb: WEB(newAbs) });
}

console.log(`Mode : ${APPLY ? 'APPLY' : 'DRY-RUN'}${FILTER ? ` (filtre: ${FILTER})` : ''}`);
console.log(`Fichiers à de-fragiliser : ${mapping.length}`);
for (const m of mapping.slice(0, 40)) {
  console.log(`  ${m.oldWeb}\n    -> ${m.newWeb}`);
}
if (mapping.length > 40) console.log(`  … (+${mapping.length - 40})`);

if (mapping.length === 0) process.exit(0);

// Détecte les collisions de cible.
const targets = new Map();
for (const m of mapping) {
  if (targets.has(m.newAbs)) {
    console.error(`\n✖ COLLISION : ${m.newAbs}\n   ${targets.get(m.newAbs)}\n   ${m.oldAbs}`);
    process.exit(2);
  }
  if (existsSync(m.newAbs)) {
    console.error(`\n✖ La cible existe déjà : ${m.newAbs}`);
    process.exit(2);
  }
  targets.set(m.newAbs, m.oldAbs);
}

if (!APPLY) {
  console.log('\nDry-run terminé. Relancez avec --apply pour écrire.');
  process.exit(0);
}

// 2. Renommer les fichiers.
for (const m of mapping) {
  mkdirSync(dirname(m.newAbs), { recursive: true });
  renameSync(m.oldAbs, m.newAbs);
}

// 3. Mettre à jour les références (comparaison DÉCODÉE, robuste à l'encodage).
// Capture le contenu COMPLET entre délimiteurs (tolère espaces/parenthèses/
// accents littéraux — l'angle mort `[^\s)]` est ce qui a causé #216).
const byOldWeb = new Map(mapping.map((m) => [m.oldWeb, m.newWeb]));
const EXT = String.raw`\.(?:png|jpe?g|svg|webp|gif|avif)`;
const remap = (ref, counter) => {
  let dec;
  try {
    dec = decodeURIComponent(ref);
  } catch {
    dec = ref;
  }
  const hit = byOldWeb.get(dec);
  if (hit) {
    counter.n++;
    return hit;
  }
  return ref;
};
let refCount = 0;
for (const dir of REF_DIRS) {
  for (const file of walkRefFiles(dir)) {
    let txt = readFileSync(file, 'utf8');
    const counter = { n: 0 };
    txt = txt.replace(
      new RegExp(`(src=")(/img/[^"]+?${EXT})(")`, 'gi'),
      (_m, a, ref, b) => a + remap(ref, counter) + b,
    );
    txt = txt.replace(
      // markdown : l'URL peut contenir des parenthèses équilibrées (ex. (2))
      new RegExp(`(!\\[[^\\]]*\\]\\()(/img/(?:[^()\\s]|\\([^()]*\\))*?${EXT})(\\))`, 'gi'),
      (_m, a, ref, b) => a + remap(ref, counter) + b,
    );
    txt = txt.replace(
      // toute chaîne simple-quote '/img/…' : couvre image/thumbnail/icon ET
      // les tableaux `photos: ['/img/…', …]` de projects.ts (cf. revue #221).
      new RegExp(`(')(/img/[^']+?${EXT})(')`, 'gi'),
      (_m, a, ref, b) => a + remap(ref, counter) + b,
    );
    if (counter.n > 0) {
      writeFileSync(file, txt);
      refCount += counter.n;
    }
  }
}
console.log(`\n${mapping.length} fichier(s) renommé(s), ${refCount} référence(s) mise(s) à jour.`);
console.log(
  'Vérifiez ensuite avec : npm run site:build (et `npm run lint:assets` une fois #220 mergé).',
);

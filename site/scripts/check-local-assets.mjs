#!/usr/bin/env node
// Valide les références d'images locales vers site/static.
//
// Le build Docusaurus ne vérifie QUE les images markdown `![](...)` (via
// onBrokenMarkdownImages) et les liens de routes internes (onBrokenLinks).
// Les `<img src="/img/...">` (JSX/HTML) vers des fichiers statiques ne sont
// PAS validés → une image renommée/supprimée donne un 404 silencieux en prod
// (cf. #205, #216). Ce script comble ce trou : il scanne site/src ET site/docs
// (le script de #204 ne couvrait que site/docs, d'où la régression #216).
//
// Usage : node site/scripts/check-local-assets.mjs  (ou `npm run lint:assets`)
// Exit 1 si au moins une référence non-exceptée pointe vers un fichier absent.

import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const STATIC_ROOT = join(REPO_ROOT, 'site', 'static');
const SCAN_DIRS = [join(REPO_ROOT, 'site', 'src'), join(REPO_ROOT, 'site', 'docs')];

// Références cassées connues et tracées ailleurs, tolérées pour ne pas
// bloquer la CI. Retirer une entrée dès que l'issue liée est résolue.
const KNOWN_MISSING = new Set([
  // Icônes des 7 fiches Youth AI Lab ajoutées par #264. Les fiches et le
  // catalogue référencent déjà `icone.png` ; les visuels restent à produire
  // (flat-illustration Flaticon, choix humain). Suivi dans #265.
  '/img/ressources/youth-ai-lab/enqueter-machines-apprennent/icone.png',
  '/img/ressources/youth-ai-lab/entrainer-cerveau-machine/icone.png',
  '/img/ressources/youth-ai-lab/concevoir-ia-avec-robot/icone.png',
  '/img/ressources/youth-ai-lab/traquer-biais-genre/icone.png',
  '/img/ressources/youth-ai-lab/pirater-prompts-biaises/icone.png',
  '/img/ressources/youth-ai-lab/rendre-ville-vivable/icone.png',
  '/img/ressources/youth-ai-lab/wikiyouthbot/icone.png',
]);

const IMG_EXT = String.raw`\.(?:png|jpe?g|svg|webp|gif|avif)`;
// Capture le contenu COMPLET entre délimiteurs (tolère parenthèses, espaces,
// accents — le piège récurrent est un regex `[^)]` qui rate `… (2).png`).
const PATTERNS = [
  new RegExp(`src="(/img/[^"]+?${IMG_EXT})"`, 'gi'), // <img src="…"> JSX/HTML
  // markdown ![](…) : l'URL peut contenir des parenthèses équilibrées
  // (ex. `…image_(2).png`) — un simple `[^)]` les raterait (cf. #216).
  new RegExp(`!\\[[^\\]]*\\]\\((/img/(?:[^()\\s]|\\([^()]*\\))*?${IMG_EXT})\\)`, 'gi'),
  new RegExp(`(?:image|thumbnail|icon):\\s*'(/img/[^']+?${IMG_EXT})'`, 'gi'), // data files
];

function walk(dir, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const f = join(dir, e.name);
    if (e.isDirectory()) walk(f, acc);
    else if (/\.(mdx?|tsx?|jsx?)$/.test(e.name)) acc.push(f);
  }
  return acc;
}

let checked = 0;
const broken = [];
const knownHit = new Set();

for (const root of SCAN_DIRS) {
  for (const file of walk(root)) {
    const txt = readFileSync(file, 'utf8');
    for (const re of PATTERNS) {
      for (const m of txt.matchAll(re)) {
        const ref = m[1];
        checked++;
        let decoded;
        try {
          decoded = decodeURIComponent(ref);
        } catch {
          decoded = ref;
        }
        // Placeholders du template (<id-fiche>, <svg>…) : on ignore.
        if (decoded.includes('<')) continue;
        // `decoded` commence par "/img/…" ; on retire le slash de tête pour
        // joindre sous STATIC_ROOT sans ambiguïté (path.join le gère déjà,
        // mais on est explicite).
        const fsPath = join(STATIC_ROOT, decoded.replace(/^\//, ''));
        if (existsSync(fsPath) && statSync(fsPath).isFile()) continue;
        if (KNOWN_MISSING.has(decoded)) {
          knownHit.add(decoded);
          continue;
        }
        broken.push({ file: file.replace(REPO_ROOT + '/', ''), ref });
      }
    }
  }
}

console.log(`Références d'images vérifiées : ${checked}`);
if (knownHit.size) {
  console.log(`Exceptions connues tolérées : ${knownHit.size} (cf. KNOWN_MISSING)`);
}

if (broken.length === 0) {
  console.log("✓ Aucune référence d'image cassée.");
  process.exit(0);
}

console.error(`\n✖ ${broken.length} référence(s) d'image cassée(s) :`);
for (const b of broken) console.error(`  ${b.file}  →  ${b.ref}`);
console.error(
  '\nVérifiez le nom/chemin du fichier sous site/static, ou ajoutez une ' +
    'exception tracée dans KNOWN_MISSING si une issue couvre déjà le cas.',
);
process.exit(1);

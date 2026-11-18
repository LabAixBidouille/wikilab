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
// Il vérifie aussi que chaque image du dépôt porte l'extension de son contenu
// (#279). Un PNG nommé `.svg` est traité comme du texte par
// .gitattributes : git convertit le CRLF de sa signature et l'image se corrompt
// au prochain `git add`. Un PNG nommé `.jpg` ou `.webp` s'affiche, mais trompe
// quiconque le reprend.
//
// Usage : node site/scripts/check-local-assets.mjs  (ou `npm run lint:assets`)
// Exit 1 si au moins une référence non-exceptée pointe vers un fichier absent,
// ou si une image ne porte pas l'extension de son contenu.

import {
  readFileSync,
  existsSync,
  readdirSync,
  statSync,
  lstatSync,
  openSync,
  readSync,
  closeSync,
} from 'node:fs';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const STATIC_ROOT = join(REPO_ROOT, 'site', 'static');
const SCAN_DIRS = [join(REPO_ROOT, 'site', 'src'), join(REPO_ROOT, 'site', 'docs')];

// Références cassées connues et tracées ailleurs, tolérées pour ne pas
// bloquer la CI. Retirer une entrée dès que l'issue liée est résolue.
// Vignettes des trois fiches Projets du LAB ajoutées par #309, en attente (suivi dans #309).
const KNOWN_MISSING = new Set([
  '/img/ressources/projets-du-lab/lab-saveur-algorithmes/icone.png',
  '/img/ressources/projets-du-lab/lab-cartes-storytelling/icone.png',
  '/img/ressources/projets-du-lab/lab-livre-laser/icone.png',
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

let failed = false;

if (broken.length === 0) {
  console.log("✓ Aucune référence d'image cassée.");
} else {
  failed = true;
  console.error(`\n✖ ${broken.length} référence(s) d'image cassée(s) :`);
  for (const b of broken) console.error(`  ${b.file}  →  ${b.ref}`);
  console.error(
    '\nVérifiez le nom/chemin du fichier sous site/static, ou ajoutez une ' +
      'exception tracée dans KNOWN_MISSING si une issue couvre déjà le cas.',
  );
}

// --- Le contenu de chaque image correspond à son extension (#279) ---
//
// La règle `*.svg text` de .gitattributes vaut pour tout le dépôt : on vérifie
// donc chaque image suivie ou à suivre (`git ls-files`), pas seulement
// site/static. Sans git (archive), on se rabat sur site/static.

const startsWith = (buf, bytes, offset = 0) =>
  buf.length >= offset + bytes.length && bytes.every((b, i) => buf[offset + i] === b);
const ascii = (s) => [...Buffer.from(s, 'latin1')];

// Lit les `n` premiers octets d'un fichier, sans charger le reste.
function head(path, n) {
  const fd = openSync(path, 'r');
  try {
    const buf = Buffer.alloc(n);
    const read = readSync(fd, buf, 0, n, 0);
    return buf.subarray(0, read);
  } finally {
    closeSync(fd);
  }
}

// Marques d'une boîte ftyp ISO-BMFF : la majeure (octet 8) puis les
// compatibles (de l'octet 16 à la fin de la boîte). Un AVIF doit déclarer
// `avif` ou `avis` parmi elles, pas forcément en marque majeure.
function ftypBrands(buf) {
  if (!startsWith(buf, ascii('ftyp'), 4)) return [];
  const end = Math.min(buf.readUInt32BE(0), buf.length);
  const brands = [buf.toString('latin1', 8, 12)];
  for (let i = 16; i + 4 <= end; i += 4) brands.push(buf.toString('latin1', i, i + 4));
  return brands;
}

// Texte d'un SVG : UTF-16 quand un BOM l'annonce, UTF-8 sinon. Un octet nul
// hors UTF-16 signale un binaire : ce n'est pas un SVG.
function svgText(buf) {
  const utf16 = (b) => b.subarray(0, b.length - (b.length % 2));
  if (startsWith(buf, [0xff, 0xfe])) return utf16(buf.subarray(2)).toString('utf16le');
  if (startsWith(buf, [0xfe, 0xff]))
    return Buffer.from(utf16(buf.subarray(2)))
      .swap16()
      .toString('utf16le');
  if (buf.includes(0)) return null;
  return buf.toString('utf8').replace(/^﻿/, '');
}

// Un SVG a `svg` pour élément racine. Seuls le précèdent la déclaration XML,
// des instructions de traitement, des commentaires et un DOCTYPE (sous-ensemble
// interne compris).
const SVG_ROOT =
  /^\s*(?:(?:<\?[\s\S]*?\?>|<!--[\s\S]*?-->|<!DOCTYPE[^[>]*(?:\[[\s\S]*?\])?\s*>)\s*)*<(?:[\w.-]+:)?svg[\s/>]/i;

// Reconnaît le format d'un fichier. Renvoie null si inconnu.
function sniff(path, ext) {
  if (ext === 'svg') {
    const text = svgText(readFileSync(path));
    if (text !== null && SVG_ROOT.test(text)) return 'svg';
  }
  // 512 octets couvrent les signatures et une boîte ftyp ordinaire.
  const buf = head(path, 512);
  if (startsWith(buf, [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])) return 'png';
  if (startsWith(buf, [0xff, 0xd8, 0xff])) return 'jpeg';
  if (startsWith(buf, ascii('GIF8'))) return 'gif';
  if (startsWith(buf, ascii('RIFF')) && startsWith(buf, ascii('WEBP'), 8)) return 'webp';
  if (ftypBrands(buf).some((b) => b === 'avif' || b === 'avis')) return 'avif';
  if (startsWith(buf, [0x00, 0x00, 0x01, 0x00])) return 'ico';
  if (startsWith(buf, ascii('%PDF-'))) return 'pdf';
  return null;
}

const EXPECTED = {
  png: 'png',
  jpg: 'jpeg',
  jpeg: 'jpeg',
  gif: 'gif',
  webp: 'webp',
  avif: 'avif',
  ico: 'ico',
  pdf: 'pdf',
  svg: 'svg',
};

const extOf = (name) => name.split('.').pop().toLowerCase();

function walkStatic(dir, acc = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const f = join(dir, e.name);
    if (e.isDirectory()) walkStatic(f, acc);
    else acc.push(f);
  }
  return acc;
}

// Fichiers suivis et nouveaux fichiers non ignorés (node_modules, build exclus).
function listFiles() {
  try {
    const out = execFileSync('git', ['ls-files', '-z', '-c', '-o', '--exclude-standard'], {
      cwd: REPO_ROOT,
      encoding: 'utf8',
      maxBuffer: 64 * 1024 * 1024,
    });
    return [...new Set(out.split('\0').filter(Boolean))].map((f) => join(REPO_ROOT, f));
  } catch {
    console.log('git indisponible : signatures vérifiées sous site/static seulement.');
    return walkStatic(STATIC_ROOT);
  }
}

const mismatched = [];
const images = listFiles().filter((f) => extOf(f) in EXPECTED);
let verified = 0;
for (const path of images) {
  const ext = extOf(path);
  // Un fichier suivi mais supprimé de la copie de travail n'a rien à vérifier.
  try {
    lstatSync(path);
  } catch {
    continue;
  }
  let found;
  try {
    found = sniff(path, ext) ?? 'format inconnu';
  } catch (err) {
    found = `illisible (${err.code ?? err.message})`;
  }
  verified++;
  if (found !== EXPECTED[ext]) {
    mismatched.push({ file: path.replace(REPO_ROOT + '/', ''), ext, found });
  }
}

console.log(`Images dont la signature est vérifiée : ${verified}`);
if (mismatched.length === 0) {
  console.log("✓ Chaque image porte l'extension de son contenu.");
} else {
  failed = true;
  console.error(
    `\n✖ ${mismatched.length} image(s) dont le contenu ne correspond pas à l'extension :`,
  );
  for (const m of mismatched)
    console.error(`  ${m.file}  →  contenu ${m.found}, extension .${m.ext}`);
  console.error(
    '\nRenommez le fichier selon son contenu et mettez à jour ses références. Un faux .svg ' +
      'est corrompu par la conversion de fin de ligne que .gitattributes impose au texte.',
  );
}

process.exit(failed ? 1 : 0);

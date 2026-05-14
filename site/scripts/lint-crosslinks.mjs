#!/usr/bin/env node
// Vérifie l'intégrité des liens croisés Let's STEAM ↔ I-NOVMICRO.
//
// Source de vérité pour "telle fiche I-NOVMICRO est une adaptation de telle
// fiche Let's STEAM" : le footer documenté dans CONVENTIONS.md §Fiches
// indépendantes de l'éditeur :
//
//   _Cette fiche fait partie du projet [I-Novmicro #2 : Action EXAO]
//   (/projets/inovmicro-exao). Adaptée du projet [Let's STEAM]
//   (/projets/lets-steam) (fiche [`r1asXX-nom`](/ressources/lets-steam/r1asXX-nom))
//   sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._
//
// Sens inverse Let's STEAM -> I-NOVMICRO : tout lien
// vers `/ressources/inovmicro-exao/<slug>` dans la fiche Let's STEAM
// (callout `:::info[Version STeaMi / MicroPython]` recommandé en haut
// de la fiche).
//
// Exécution : `node site/scripts/lint-crosslinks.mjs` depuis la racine
// du repo, ou via `npm run lint:crosslinks`.
//
// Sort en code 1 si une désynchronisation est détectée (cible inexistante
// ou lien réciproque manquant).

import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join, basename, extname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DOCS_ROOT = join(__dirname, '..', 'docs');
const INOVMICRO_DIR = join(DOCS_ROOT, 'inovmicro-exao');
const LETSSTEAM_DIR = join(DOCS_ROOT, 'lets-steam');

// Capture le slug Let's STEAM cité par le footer "Adaptée du projet [Let's STEAM]
// (...) (fiche [`r1asXX-nom`](/ressources/lets-steam/r1asXX-nom))". Restreint au
// footer pour ne pas confondre avec d'autres mentions en "voir aussi".
const ADAPTED_FROM_RE =
  /Adaptée du projet \[Let's STEAM\]\([^)]+\) \(fiche \[`[^`]+`\]\(\/ressources\/lets-steam\/([a-z0-9][a-z0-9-]*)\)/;

// Capture les liens I-NOVMICRO uniquement à l'intérieur d'un callout
// `:::info[Version STeaMi / MicroPython] ... :::`. La convention impose ce
// callout (cf. CONVENTIONS.md §Lien croisé réciproque côté Let's STEAM) :
// une mention de l'URL en passant dans le corps ne suffit pas, on veut le
// callout dédié pour la visibilité côté lecteur.
const VERSION_STEAMI_CALLOUT_RE =
  /:::info\[Version STeaMi \/ MicroPython\]\s*([\s\S]*?):::/g;
const INOVMICRO_LINK_RE = /\/ressources\/inovmicro-exao\/([a-z0-9][a-z0-9-]*)/g;

async function listFiches(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile() && e.name.endsWith('.md') && !e.name.startsWith('_'))
    .map((e) => join(dir, e.name));
}

const slugOf = (file) => basename(file, extname(file));

async function main() {
  const errors = [];
  const [inovFiles, letsFiles] = await Promise.all([
    listFiches(INOVMICRO_DIR),
    listFiches(LETSSTEAM_DIR),
  ]);
  const letsSlugs = new Set(letsFiles.map(slugOf));
  const inovSlugs = new Set(inovFiles.map(slugOf));

  // Map: slug I-NOVMICRO -> slug Let's STEAM source (depuis le footer "Adaptée du projet").
  // Une fiche I-NOVMICRO sans match n'est pas un port (ex. decouverte-steami, depannage).
  const portToSource = new Map();
  for (const f of inovFiles) {
    const text = await readFile(f, 'utf8');
    const m = text.match(ADAPTED_FROM_RE);
    if (m) portToSource.set(slugOf(f), m[1]);
  }

  // Map: slug Let's STEAM -> set de slugs I-NOVMICRO référencés à l'intérieur
  // du callout `:::info[Version STeaMi / MicroPython] ... :::`.
  const letsToInov = new Map();
  for (const f of letsFiles) {
    const text = await readFile(f, 'utf8');
    const refs = new Set();
    for (const callout of text.matchAll(VERSION_STEAMI_CALLOUT_RE)) {
      for (const link of callout[1].matchAll(INOVMICRO_LINK_RE)) {
        refs.add(link[1]);
      }
    }
    letsToInov.set(slugOf(f), refs);
  }

  // Check 1 : la source Let's STEAM citée par chaque port existe.
  for (const [inovSlug, letsTarget] of portToSource) {
    if (!letsSlugs.has(letsTarget)) {
      errors.push(
        `${inovSlug}.md : footer pointe vers /ressources/lets-steam/${letsTarget} qui n'existe pas`,
      );
    }
  }

  // Check 2 : chaque cible I-NOVMICRO citée par une fiche Let's STEAM existe.
  for (const [letsSlug, refs] of letsToInov) {
    for (const target of refs) {
      if (!inovSlugs.has(target)) {
        errors.push(
          `${letsSlug}.md : lien vers /ressources/inovmicro-exao/${target} qui n'existe pas`,
        );
      }
    }
  }

  // Check 3 : tout port a son lien réciproque côté Let's STEAM.
  for (const [inovSlug, letsTarget] of portToSource) {
    const reverse = letsToInov.get(letsTarget) ?? new Set();
    if (!reverse.has(inovSlug)) {
      errors.push(
        `lien réciproque manquant : ${letsTarget}.md (Let's STEAM) devrait pointer vers /ressources/inovmicro-exao/${inovSlug}`,
      );
    }
  }

  // Check 4 : tout lien Let's STEAM -> I-NOVMICRO a son footer "Adaptée du projet" côté I-NOVMICRO.
  for (const [letsSlug, inovRefs] of letsToInov) {
    for (const inovTarget of inovRefs) {
      const expectedSource = portToSource.get(inovTarget);
      if (expectedSource !== letsSlug) {
        errors.push(
          `lien réciproque orphelin : ${letsSlug}.md (Let's STEAM) pointe vers ${inovTarget} mais ${inovTarget}.md ne le déclare pas comme source dans son footer "Adaptée du projet"`,
        );
      }
    }
  }

  if (errors.length > 0) {
    console.error(`Crosslinks Let's STEAM <-> I-NOVMICRO : ${errors.length} problème(s)`);
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }

  console.log(
    `Crosslinks Let's STEAM <-> I-NOVMICRO : ${portToSource.size} port(s), ${inovFiles.length} fiches I-NOVMICRO, ${letsFiles.length} fiches Let's STEAM. OK.`,
  );
}

main().catch((err) => {
  console.error('Erreur inattendue :', err);
  process.exit(1);
});

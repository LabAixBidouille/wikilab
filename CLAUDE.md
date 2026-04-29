# CLAUDE.md — instructions pour les assistants IA

> Ce fichier est destiné aux **assistants IA** (Claude Code, etc.) qui interviennent sur ce repo. Il décrit l'architecture du projet et renvoie vers les documents qui font autorité pour les humains.
>
> **Pour les contributeurs humains** :
>
> - Conventions de contenu et de formatage des fiches → [`CONVENTIONS.md`](CONVENTIONS.md)
> - Workflow git, PR, CI, hooks → [`CONTRIBUTING.md`](CONTRIBUTING.md)
> - Tests et vérifications → [`TESTING.md`](TESTING.md)
> - Présentation du projet → [`README.md`](README.md)

## Architecture

### Site Docusaurus (`site/`)

- **Framework** : Docusaurus v3.10 (TypeScript, mode strict ; flag `future.v4: true` activé pour préparer la migration v4). Le tsconfig parent `@docusaurus/tsconfig` impose `noEmit: true`, donc `tsc` ne génère pas de `.js` à côté des sources.
- **Config** : `site/docusaurus.config.ts` (`onBrokenLinks: 'throw'`, `markdown.hooks.onBrokenMarkdownLinks: 'throw'`)
- **CSS custom** : `site/src/css/custom.css`
- **Données catalogue** : `site/src/data/resources.ts` (types stricts : `Discipline`, `Tool`, `Software`, `Project`, `Format`, `Category`)
- **Données projets** : `site/src/data/projects.ts`
- **Pages** : `site/src/pages/` (catalogue.tsx, index.tsx, projets/, machines.tsx, about.md)
- **Theme custom** : `site/src/theme/Admonition/` (composants pour `:::question` et `:::hypothese`)
- **Types globaux** : `site/src/types/css.d.ts` (extension de `React.CSSProperties` pour les CSS variables `--*`)
- **Docs (fiches)** : `site/docs/` (un sous-dossier par projet)
- **Images** : `site/static/img/ressources/<projet>/<fiche-id>/` — un sous-dossier par fiche (`.gitkeep` pour celles en attente)
- **PDFs** : `site/static/pdf/<projet>/`
- **Sources markdown brutes** : `markdown/` (originaux pré-conversion)

### Outillage qualité (racine)

- **`package.json` racine** : Prettier, markdownlint, cspell, husky, commitlint, lint-staged, validate-branch-name, lychee
- **Hooks Git** : `.husky/pre-commit` (validate-branch-name + git-precommit-checks + lint-staged), `.husky/commit-msg` (commitlint)
- **CI** : `.github/workflows/build.yml` (lint + typecheck + build sur PR), `deploy.yml` (Pages), `links.yml` (cron Lychee), `auto-assign.yml`

## Projets intégrés

| Projet           | Fiches                | Catalogue | Images      | PDFs                      | Couleur   |
| ---------------- | --------------------- | --------- | ----------- | ------------------------- | --------- |
| Let's STEAM      | 15                    | OK        | OK          | OK                        | `#140e4e` |
| Mimesis          | 8                     | OK        | OK          | OK                        | `#09246C` |
| Unplugged        | 24                    | OK        | OK          | Partiels (3 >50MB exclus) | `#0081A7` |
| JediTrack        | 14 + 8 borne arcade   | OK        | OK          | Non                       | `#1198f0` |
| Robots Meet Arts | 29                    | OK        | OK          | OK                        | `#169da7` |
| SteamCity        | 25 + 9 fiches prog    | OK        | OK          | OK                        | `#DD5350` |
| The Dexter Lab   | 20 + 13 fiches prog   | OK        | OK (icônes) | OK (feuilles travail)     | `#1a4a48` |
| Youth AI Lab     | 6                     | OK        | OK          | OK                        | `#b34520` |
| I-Novmicro #2    | 1 (Découverte STeaMi) | OK        | -           | -                         | `#8a6e18` |
| Projets du LAB   | 20                    | OK        | Partiels    | -                         | -         |

> **Initiative en cours** : I-Novmicro #2 va recevoir 22+ fiches dans le cadre de l'intégration STeaMi/MicroPython (15 fiches portées de Let's STEAM + 7 fiches enseignants). Voir EPIC [#2](https://github.com/LabAixBidouille/wikilab/issues/2) (phase 1) et [#30](https://github.com/LabAixBidouille/wikilab/issues/30) (phase 2 — autres projets).

## Conventions de formatage des fiches

**→ Voir [`CONVENTIONS.md`](CONVENTIONS.md)** pour le détail complet (header, structure, callouts, images, texte, catalogue, sous-pages, fiches programmation extraites, couleurs).

Toute modification de ces conventions doit se faire dans `CONVENTIONS.md` (qui fait autorité), pas ici.

## Build et commandes locales

Prérequis : Node.js 20+. Voir [`CONTRIBUTING.md`](CONTRIBUTING.md) pour l'installation complète.

Raccourcis utiles depuis la racine :

```bash
npm run site:start       # serveur de dev
npm run site:build       # build statique
npm run site:typecheck   # tsc (noEmit hérité de @docusaurus/tsconfig)
npm run site:clean       # nettoie build/, .docusaurus/, et artefacts .js dans src/
```

## Git

- Remote : `https://github.com/LabAixBidouille/wikilab.git`
- Branche par défaut : `main` — **protégée**, modifications via PR uniquement
- Conventional Commits + validate-branch-name (voir [`CONTRIBUTING.md`](CONTRIBUTING.md))
- Auth : `gh auth login` (GitHub CLI)
- 3 PDFs exclus (`.gitignore`) car >50MB : Vivre en harmonie, Potluck March, Equal

## Travaux en cours

Le suivi détaillé est sur GitHub : [issues](https://github.com/LabAixBidouille/wikilab/issues), [milestones](https://github.com/LabAixBidouille/wikilab/milestones), [project board](https://github.com/orgs/LabAixBidouille/projects/1).

Chantiers ouverts notables :

- Adapter la couleur du tableau header de fiche par projet (actuellement codée en dur `#09246C`)
- Git LFS pour les 3 PDFs Unplugged >50MB
- Refonte wiki similaire à SteamCity pour les autres projets (style hérité PDF→wiki à uniformiser)
- Vérifier images d'illustration manquantes sur TheDexterLab (20 fiches avec uniquement l'icône)
- **Intégration STeaMi/MicroPython** — voir EPIC [#2](https://github.com/LabAixBidouille/wikilab/issues/2) (phase 1, 22+ fiches) et [#30](https://github.com/LabAixBidouille/wikilab/issues/30) (phase 2)
- **Dette DX** — voir [#39](https://github.com/LabAixBidouille/wikilab/issues/39) (couverture cspell sur fiches, passe Prettier sur fiches après refactor MDX)

# CLAUDE.md — instructions pour les assistants IA

> Ce fichier est destiné aux **assistants IA** (Claude Code, etc.) qui interviennent sur ce repo. Il décrit l'architecture du projet et renvoie vers les documents qui font autorité pour les humains.
>
> **Pour les contributeurs humains** :
>
> - Conventions de contenu et de formatage des fiches → [`CONVENTIONS.md`](CONVENTIONS.md)
> - Workflow git, PR, CI, hooks → [`CONTRIBUTING.md`](CONTRIBUTING.md)
> - Tests et vérifications → [`TESTING.md`](TESTING.md)
> - Présentation du projet → [`README.md`](README.md)

## ⚠️ Workflow obligatoire — toute modification passe par une issue + une PR

**Cette règle est absolue, sans exception, y compris pour les corrections triviales.** La branche `main` est protégée côté GitHub : un push direct sera rejeté par le serveur. N'essaie pas de contourner cette protection.

Pour toute modification, **avant** de modifier le code :

1. **S'assurer qu'une issue existe** pour décrire le travail. Si elle n'existe pas, l'ouvrir (`gh issue create`) avec le bon template (bug / fiche / illustration), label, milestone et type. Référencer cette issue dans le commit et la PR (`Refs #N` ou `Closes #N`).
2. **Créer une branche dédiée** depuis `main` à jour. Le format est validé automatiquement par `validate-branch-name` (hook pre-commit) : `feat/<kebab>`, `fix/<kebab>`, `docs/<kebab>`, `ci/<kebab>`, `chore/<kebab>`, `refactor/<kebab>`, `content/<kebab>`, ou `release/vX.Y.Z`.
3. **Commiter** avec des messages aux **Conventional Commits** (validés par `commitlint`, hook commit-msg) : `<type>(<scope>): <description>`.
4. **Faire passer les checks locaux** (voir [`TESTING.md`](TESTING.md)) : `format:check`, `lint:md`, `lint:spell`, `site:typecheck`, `site:build`.
5. **Pousser la branche** et **ouvrir une Pull Request** vers `main` (`gh pr create`). La PR doit suivre le template ([`.github/PULL_REQUEST_TEMPLATE.md`](.github/PULL_REQUEST_TEMPLATE.md)).
6. **Attendre la CI** (workflow `build.yml` : lint + typecheck + build) et **au moins une approbation humaine** avant tout merge.
7. **Ne jamais merger soi-même sans accord humain.** L'humain pilote, l'IA propose.

Détails complets du workflow et des conventions : [`CONTRIBUTING.md`](CONTRIBUTING.md).

### Si tu détectes une dette ou un correctif rapide

Même flux : issue → branche → PR. Pas de raccourci, même pour un typo. Le prix d'une PR de 2 minutes est dérisoire face à la traçabilité gagnée.

### Si l'humain te demande de pousser direct

Refuser et expliquer la règle. Proposer le flux PR. Si l'humain insiste explicitement et est admin du repo, c'est sa responsabilité — mais alerter d'abord, et privilégier la PR même expéditive (auto-merge possible une fois la CI verte).

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

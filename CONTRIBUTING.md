# Contribuer au Wiki@LAB

Merci de l'intérêt que tu portes au projet ! Ce document décrit le workflow et les conventions pour contribuer.

Pour les **conventions de contenu et de formatage des fiches** (header, callouts, images, footer, catalogue), voir [`CONVENTIONS.md`](CONVENTIONS.md) qui fait autorité. Pour les **vérifications et tests**, voir [`TESTING.md`](TESTING.md).

## À qui s'adresse ce document

- **Contributeurs pédagogiques** : ajout/modification de fiches, illustrations, PDFs.
- **Contributeurs techniques** : code du site Docusaurus, scripts d'outillage, CI.

## Avant de commencer

### Prérequis

- **Node.js 20+** (vérifier avec `node --version`)
- **Git** + un compte GitHub avec accès au repo `LabAixBidouille/wikilab`
- Un éditeur Markdown (VSCode recommandé, MDX support)
- **Docker** (optionnel, pour vérifier les liens externes en local avec `lint:links`)

### Installation

```bash
git clone https://github.com/LabAixBidouille/wikilab.git
cd wikilab
npm ci          # installe l'outillage racine (linters, hooks Git)
cd site
npm ci          # installe Docusaurus
npm start       # serveur de dev sur http://localhost:3000
```

Le `npm ci` à la racine installe automatiquement les **hooks Git** (husky) qui valideront tes commits.

## Structure des dépendances

| Niveau | Fichier                                  | Rôle                                                                  |
| ------ | ---------------------------------------- | --------------------------------------------------------------------- |
| Racine | [`package.json`](package.json)           | Outillage qualité (Prettier, markdownlint, cspell, husky, commitlint) |
| Site   | [`site/package.json`](site/package.json) | Docusaurus, plugins, build, typecheck                                 |

## Commandes utiles

Depuis la racine du repo :

| Commande                 | Description                                                            |
| ------------------------ | ---------------------------------------------------------------------- |
| `npm run format`         | Formate tous les fichiers (Prettier)                                   |
| `npm run format:check`   | Vérifie le formatage                                                   |
| `npm run lint:md`        | Vérifie le Markdown (markdownlint)                                     |
| `npm run lint:md:fix`    | Corrige automatiquement le Markdown                                    |
| `npm run lint:spell`     | Vérifie l'orthographe (cspell, FR + EN)                                |
| `npm run lint:links`     | Vérifie les liens externes (Docker requis, lent)                       |
| `npm run site:start`     | Raccourci vers `npm start` dans `site/`                                |
| `npm run site:build`     | Raccourci vers `npm run build` dans `site/`                            |
| `npm run site:typecheck` | Raccourci vers `npm run typecheck` dans `site/`                        |
| `npm run site:clean`     | Nettoie `site/build`, `site/.docusaurus`, et artefacts `*.js` dans src |

## Workflow de contribution

1. **Créer une issue** décrivant le changement (sauf typo trivial).
2. **Créer une branche** depuis `main` au format conventionnel (voir ci-dessous).
3. **Développer** en commitant régulièrement avec des messages aux Conventional Commits.
4. **Vérifier localement** :

   ```bash
   npm run format:check
   npm run lint:md
   npm run lint:spell
   npm run site:typecheck
   npm run site:build
   ```

5. **Ouvrir une Pull Request** vers `main` avec une description claire.
6. **Attendre la CI** (build + lint + spell + commitlint).
7. **Attendre la review** : au moins 1 approbation requise.
8. **Merge** : squash merge sur `main`.

## Convention de nommage des branches

Le format des branches est validé automatiquement au commit (`validate-branch-name`).

| Format                   | Exemple                            |
| ------------------------ | ---------------------------------- |
| `feat/<description>`     | `feat/portage-r1as01-led-steami`   |
| `fix/<description>`      | `fix/lien-casse-decouverte-steami` |
| `docs/<description>`     | `docs/mise-a-jour-claude-md`       |
| `ci/<description>`       | `ci/audit-firmware`                |
| `chore/<description>`    | `chore/cleanup-vieux-pdfs`         |
| `refactor/<description>` | `refactor/types-catalogue`         |
| `content/<description>`  | `content/nouvelle-fiche-rma`       |
| `release/vX.Y.Z`         | `release/v1.0.0`                   |

La description est en **kebab-case** (minuscules, mots séparés par des tirets).

## Convention de commits

Les messages de commit suivent les [Conventional Commits](https://www.conventionalcommits.org/) et sont validés automatiquement par `commitlint` (hook `commit-msg`).

### Format

```text
<type>(<scope>): <description>

<body optionnel>
```

### Types

| Type       | Usage                                            |
| ---------- | ------------------------------------------------ |
| `feat`     | Nouvelle fonctionnalité, nouveau contenu, fiche  |
| `fix`      | Correction de bug, lien cassé, erreur de contenu |
| `docs`     | Documentation uniquement (README, CONTRIBUTING)  |
| `ci`       | Configuration CI/CD, workflows, hooks            |
| `chore`    | Maintenance, nettoyage, dépendances              |
| `refactor` | Réorganisation sans changement fonctionnel       |
| `style`    | Formatage, espaces, points-virgules              |

### Scopes (optionnels)

`wip`, `configs`, `formatting`, `code`, `ci`, `docs`, `catalogue`, `machines`, ou un projet : `lets-steam`, `mimesis`, `unplugged`, `jeditrack`, `robots-meet-arts`, `steamcity`, `thedexterlab`, `youth-ai-lab`, `inovmicro-exao`, `projets-du-lab`.

### Exemples

```text
feat(steamcity): insertion images programmation (9 fiches)
feat(catalogue): déplace le filtre Projet juste avant Âge
ci: ajoute le workflow GitHub Pages avec CNAME
fix(lets-steam): corrige le chemin d'image de r1as04-capteur-lumiere
docs: ajoute CONTRIBUTING.md et TESTING.md
```

### Règles

- Sujet en **minuscules** (lower-case)
- Pas de point à la fin du sujet
- Body limité à 100 caractères par ligne (warning)

## Hooks Git automatiques

Installés via `npm ci` à la racine. Ils s'exécutent à chaque commit sans action manuelle.

### `pre-commit` (`.husky/pre-commit`)

1. **validate-branch-name** — vérifie le nom de la branche
2. **git-precommit-checks** — détecte les marqueurs de conflit, `console.log` oubliés, FIXME/TODO (warning)
3. **lint-staged** — sur les fichiers stagés uniquement :
   - `*.md` : `prettier --check` + `markdownlint` + `cspell`
   - `*.{js,jsx,ts,tsx}` : `prettier --check`
   - `*.{json,css,yml,yaml}` : `prettier --check`

### `commit-msg` (`.husky/commit-msg`)

1. **commitlint** — valide le message de commit (Conventional Commits)

## Types de contributions

### Ajouter une nouvelle fiche

1. Créer une issue avec le template **Nouvelle fiche** ([.github/ISSUE_TEMPLATE/fiche.md](.github/ISSUE_TEMPLATE/fiche.md)).
2. Créer une branche `content/<id-de-la-fiche>` ou `feat/<projet>-<id>`.
3. Créer le fichier markdown dans `site/docs/<projet>/<id-fiche>.md` en suivant les règles de [`CONVENTIONS.md`](CONVENTIONS.md) (header flex, badges, tableau, callouts, footer).
4. Créer le dossier d'images correspondant : `site/static/img/ressources/<projet>/<id-fiche>/` (avec au minimum `icone.png` ou `icone.svg`).
5. Si un PDF accompagne la fiche : `site/static/pdf/<projet>/<nom>.pdf`.
6. Ajouter une entrée dans le catalogue [`site/src/data/resources.ts`](site/src/data/resources.ts) avec tous les champs requis (`id`, `title`, `slug`, `project`, `summary`, `disciplines`, `tools`, `software`, `ageMin`, `ageMax`, `durationMinutes`, `difficulty`, `formats`, `categories`, `keywords`, `pdf?`, `thumbnail?`).
7. Vérifier la position dans la sidebar (`sidebar_position` dans le frontmatter du `.md`).

### Modifier une fiche existante

- Conserver le format défini dans [`CONVENTIONS.md`](CONVENTIONS.md).
- Si le sujet/durée/difficulté change, mettre à jour aussi l'entrée dans `resources.ts`.
- Pour les changements importants, mentionner dans la PR si une re-validation pédagogique est nécessaire.

### Ajouter un nouveau projet

Plus rare et plus structurant. Préalable : ouvrir une issue pour discuter du périmètre. Voir comment les projets existants sont structurés (`site/data/projects.ts`, `site/docs/<projet>/`, page projet dans `site/src/pages/projets/`).

### Modifier le code du site

- Code TypeScript dans `site/src/` (composants React, pages, types catalogue).
- CSS custom : `site/src/css/custom.css`.
- Faire passer `npm run site:typecheck` et `npm run site:build` avant de pousser.

### Demander une illustration

Issue avec le template **Illustration / image** ([.github/ISSUE_TEMPLATE/illustration.md](.github/ISSUE_TEMPLATE/illustration.md)).

### Signaler un bug

Issue avec le template **Bug** ([.github/ISSUE_TEMPLATE/bug.md](.github/ISSUE_TEMPLATE/bug.md)).

## Conventions de contenu (fiches)

→ Voir [`CONVENTIONS.md`](CONVENTIONS.md) en détail. Points clés :

- Header flex : titre + icône SVG + badges + tableau + matériel + bouton PDF (selon disponibilité)
- Callouts : `:::tip` réservé aux ressources imprimables, `:::info` pour les conseils, `:::caution` pour les phases d'activité
- Images : alignées à gauche par défaut, centrées avec `<figure>` quand légende
- Texte justifié, titres numérotés homogènes, footer Erasmus+ en bas

## Convention de PR

- **Titre** : court (≤ 70 caractères), précise le scope, suit Conventional Commits.
- **Description** : suit le template [.github/PULL_REQUEST_TEMPLATE.md](.github/PULL_REQUEST_TEMPLATE.md).
- **Linked issues** : référencer `Closes #N` ou `Refs #N` quand applicable, pour synchroniser les checklists des EPICs.

## Convention de nommage des assets

- **IDs de fiches** : kebab-case, courts (ex. `r1as01-led`, `decouverte-steami`)
- **Slugs catalogue** : `/ressources/<projet>/<id-fiche>` (chemin URL)
- **Dossiers images** : `site/static/img/ressources/<projet>/<id-fiche>/`
- **PDFs** : `site/static/pdf/<projet>/<nom>.pdf`

## Checklist avant de soumettre une PR

- [ ] La branche est à jour avec `main` et son nom respecte le format
- [ ] `npm run format:check` passe
- [ ] `npm run lint:md` passe
- [ ] `npm run lint:spell` passe
- [ ] `npm run site:typecheck` passe
- [ ] `npm run site:build` passe sans nouveau warning
- [ ] Si fiche modifiée/ajoutée : entrée à jour dans `resources.ts`
- [ ] Si fiche modifiée/ajoutée : vérification visuelle dans le navigateur
- [ ] Si images ajoutées : tailles raisonnables (compression si > 500 KB par image)
- [ ] Pas de fichier sensible (`.env`, credentials) ni binaire de plus de 50 MB

## Process de revue

- Une PR doit être validée par **au moins un autre membre de l'équipe Wiki** avant merge.
- Les revues portent sur le contenu pédagogique (fiches), le formatage (conventions `CONVENTIONS.md`), et la qualité technique (code).
- En cas de désaccord sur le contenu pédagogique, le mainteneur du projet concerné tranche.

## Protection de la branche `main`

- Push direct interdit — toute modification passe par une PR
- La CI doit passer (build + lint + spell + commitlint)
- 1 approbation de review requise
- Squash merge (historique linéaire)

## Suivi du projet

- **Issues** : <https://github.com/LabAixBidouille/wikilab/issues>
- **Milestones** : 7 jalons structurants de l'initiative STeaMi/MicroPython (Bootstrap, Fiches enseignants, Portage Let's STEAM, Outillage CI, Harmonisation P1, Audit phase 2, Portage phase 2). Voir <https://github.com/LabAixBidouille/wikilab/milestones>.
- **Project board** : <https://github.com/orgs/LabAixBidouille/projects/1>
- **Issue types** (de l'org `LabAixBidouille`) : `Task` pour les tâches concrètes, `Feature` pour les EPICs et grandes initiatives, `Bug` pour les défauts. Le type est posé sur l'issue (champ GitHub natif), au-delà des labels.
- **Labels usuels** : `epic`, `phase-1`, `phase-2`, `prepa`, `steami`, `micropython`, `fiche-portage`, `fiche-enseignant`, `outillage`, `audit`, `bug`, `documentation`.

## Ressources et contact

- **Repo** : <https://github.com/LabAixBidouille/wikilab>
- **Site en prod** : <https://wiki.labaixbidouille.com>
- **Conventions de contenu et de fiches** : [`CONVENTIONS.md`](CONVENTIONS.md)
- **Tests et vérifications** : [`TESTING.md`](TESTING.md)
- **Contact** : <contact@labaixbidouille.com>

## Licence

En contribuant, tu acceptes que ta contribution soit publiée sous **Creative Commons BY-SA 4.0** (contenu) et la licence du repo (code).

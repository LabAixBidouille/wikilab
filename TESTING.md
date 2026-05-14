# Tests et vérifications

Ce projet est principalement un **site de contenu** (Docusaurus). Il n'y a pas de tests unitaires classiques au sens applicatif, mais plusieurs niveaux de vérification garantissent la qualité du site, des fiches et de la cohérence éditoriale.

## Vue d'ensemble

| Niveau                          | Quand                            | Outil                                |
| ------------------------------- | -------------------------------- | ------------------------------------ |
| Validation du nom de branche    | À chaque commit (hook)           | `validate-branch-name`               |
| Détection FIXME/TODO/conflits   | À chaque commit (hook)           | `git-precommit-checks`               |
| Lint des fichiers stagés        | À chaque commit (hook)           | `lint-staged`                        |
| Validation du message de commit | À chaque commit (hook)           | `commitlint`                         |
| Formatage                       | Avant push, en CI                | `npm run format:check` (Prettier)    |
| Lint Markdown                   | Avant push, en CI                | `npm run lint:md` (markdownlint)     |
| Lint orthographique             | Avant push, en CI                | `npm run lint:spell` (cspell)        |
| Type-checking                   | Avant push, en CI                | `npm run site:typecheck`             |
| Build                           | Avant push, en CI                | `npm run site:build`                 |
| Liens cassés (internes)         | À chaque build (Docusaurus)      | Sortie du build                      |
| Liens cassés (externes)         | Cron hebdomadaire (lundi 8h UTC) | `links.yml` (Lychee + Playwright)    |
| Vérification visuelle           | Avant PR                         | Navigateur sur `npm run site:start`  |
| Lint des liens croisés          | À venir (issue #26)              | `npm run lint:crosslinks`            |
| Audit firmware STeaMi           | À venir (issue #27)              | Workflow GitHub Actions hebdomadaire |
| Déploiement Pages               | Auto sur push `main`             | `.github/workflows/deploy.yml`       |

## Vérifications côté contributeur

### À chaque commit (automatique via hooks)

Les hooks Git (installés par `npm ci` à la racine via husky) tournent automatiquement.

**`pre-commit`** :

1. `validate-branch-name` — bloque si le nom de branche ne respecte pas le format
2. `git-precommit-checks` — alerte sur `FIXME`/`TODO` (warning), bloque sur marqueurs de conflit
3. `lint-staged` — applique sur les fichiers stagés :
   - `*.md` → `prettier --check` + `markdownlint` + `cspell`
   - `*.{js,jsx,ts,tsx}` → `prettier --check`
   - `*.{json,css,yml,yaml}` → `prettier --check`

**`commit-msg`** :

1. `commitlint` — valide le message (Conventional Commits, scopes connus)

Si un hook échoue : corriger, `git add`, ré-essayer le commit.

### Avant de pousser

Faire passer la batterie complète depuis la racine :

```bash
npm run format:check
npm run lint:md
npm run lint:spell
npm run site:typecheck
npm run site:build
```

Astuce : utiliser `npm run format` et `npm run lint:md:fix` pour corriger automatiquement la majorité des problèmes.

## Détail des outils

### Type-checking (`npm run site:typecheck`)

Le catalogue (`site/src/data/resources.ts`) et les types associés sont typés strictement. Doit passer sans aucune erreur.

En cas d'erreur, c'est presque toujours :

- Un champ manquant dans une entrée `resources.ts`
- Une valeur en dehors des unions de types (`Discipline`, `Tool`, `Software`, `Project`, `Format`, `Category`)
- Un import cassé après refactor

### Build complet (`npm run site:build`)

Le build Docusaurus :

- Compile toutes les pages
- Vérifie la cohérence des liens internes (`onBrokenLinks: 'warn'` actuellement, à passer à `throw` à terme)
- Génère les pages de catégories
- Optimise les assets

**Vérifications dans la sortie du build** :

- [ ] Aucun nouveau warning « Docusaurus found broken links »
- [ ] Aucune erreur TypeScript
- [ ] Toutes les pages référencées dans `resources.ts` sont bien générées

### Vérification visuelle (golden path)

```bash
npm run site:start
# ouvre http://localhost:3000
```

Pour toute fiche modifiée ou ajoutée :

- [ ] **Header** : flex layout, icône à droite, badges visibles, tableau aligné, bouton PDF si applicable
- [ ] **Callouts** rendus correctement :
  - `:::tip` (vert, icône imprimante) → ressources imprimables uniquement
  - `:::info` (bleu) → conseils, notes
  - `:::caution` (rose) → phases d'activité
  - `:::note` (gris) → notes diverses
  - `:::question` / `:::hypothese` (custom, voir `custom.css`)
- [ ] **Images** :
  - Alignées à gauche par défaut
  - Centrées + légende italique si `<figure>` avec `<figcaption>`
  - Tailles préservées en flex côte à côte
- [ ] **Catalogue** (`/catalogue`) : la fiche apparaît avec ses filtres correctement appliqués
- [ ] **Sidebar** : ordre cohérent (`sidebar_position`), label correct
- [ ] **Page projet** correspondante : la nouvelle fiche apparaît
- [ ] **Recherche** : la fiche est indexée et trouvable

### Cas particuliers

- **Liens externes** : ouvrir au moins un par fiche pour vérifier qu'il n'est pas mort.
- **PDF** : si présent, le bouton télécharge bien le fichier et il s'ouvre.
- **Sous-pages** (ex. `borne-arcade`, `programmation/`) : `_category_.json` correctement configuré, label et collapse cohérents.
- **Footer Erasmus+** : présent en bas de chaque fiche concernée.

## Vérifications en CI

### Workflow `build.yml` (sur push et PR)

Sur chaque push `main` et chaque pull request :

1. Lint des messages de commit (commitlint, sur PR uniquement)
2. `npm run format:check` (Prettier)
3. `npm run lint:md` (markdownlint)
4. `npm run lint:spell` (cspell)
5. `npm run site:typecheck` (TypeScript)
6. `npm run site:build` (Docusaurus)

**Si la CI échoue** : ne pas merger avant correction. Logs dans l'onglet Actions.

### Workflow `deploy.yml` (sur push `main`)

Build + déploiement vers GitHub Pages → <https://wiki.labaixbidouille.com>.

### Workflow `links.yml` (cron hebdomadaire, lundi 8h UTC)

Vérification des liens externes en deux étapes. Lançable manuellement via `workflow_dispatch`. Le workflow ouvre (ou met à jour, cf. #91) une issue intitulée « Liens externes cassés détectés » uniquement si des cassures sont **confirmées** par les deux étapes.

#### Pipeline

1. **[Lychee](https://github.com/lycheeverse/lychee)** balaye les fiches et sort un JSON des erreurs (~3 min). Rapide mais incapable de distinguer une vraie 404 d'un blocage anti-bot (Cloudflare Turnstile, WAF, JA3 fingerprint, IP du runner CI sur Azure pénalisée par les CDN).
2. **[`site/scripts/verify-broken-links.mjs`](site/scripts/verify-broken-links.mjs)** rejoue chaque erreur via Chromium headless avec [`puppeteer-extra-plugin-stealth`](https://github.com/berstend/puppeteer-extra/tree/master/packages/puppeteer-extra-plugin-stealth). Seules les URLs où lychee **et** Playwright échouent sont conservées dans le rapport final (concurrency 1, ~10 min sur ~100 erreurs lychee).

Codes de sortie du script :

- `0` — aucune cassure confirmée (toutes les erreurs lychee étaient des faux positifs anti-bot). L'issue existante n'est pas modifiée.
- `1` — cassures confirmées, le rapport est posté sur l'issue.
- `2+` — erreur inattendue, le workflow remonte l'échec.

Pour préserver le quota d'exécution CI, Node + Chromium ne sont installés que si lychee remonte des erreurs (cas le plus fréquent : tout est propre, on s'arrête après l'étape 1).

#### Reproduire localement

```bash
# 1. Lychee en mode JSON. Soit avec le binaire natif :
lychee --config .lychee.toml --format json --output /tmp/lychee.json site/docs/**/*.md

# Soit via Docker (cf. `npm run lint:links` plus haut) :
docker run --rm -v "$PWD:/input" lycheeverse/lychee \
  --config /input/.lychee.toml --format json --output /input/lychee.json \
  '/input/site/docs/**/*.md'

# 2. Filtrage navigateur (+ option curl-fallback recommandée en local)
npm run verify-broken-links -- /tmp/lychee.json --report=/tmp/report.md --curl-fallback
```

Pré-requis :

- Lychee installé en binaire (`cargo install lychee` ou `brew install lychee`) OU Docker (la commande `lint:links` du `package.json` utilise déjà Docker).
- Chromium pour Playwright : `npx playwright install chromium` (~150 Mo, à faire une fois). Le binaire n'est pas tiré par `npm ci` ; il faut le télécharger explicitement. Le workflow CI fait pareil et le met en cache (cf. [`.github/workflows/links.yml`](.github/workflows/links.yml)).

#### Option `--curl-fallback`

Quand Playwright échoue toujours sur une URL (par exemple parce que le site bloque les User-Agents headless mais répond à un `curl` standard), `--curl-fallback` ajoute une 3e tentative via `fetch` avec en-têtes navigateur. Utile :

- **En local** : oui, l'IP résidentielle est généralement bien notée par les CDN. Permet d'écarter plus de faux positifs.
- **En CI** : peu utile. Les runners GitHub Actions sont sur Azure et de nombreux CDN (Cloudflare en tête) bloquent ces plages d'IP indépendamment du User-Agent. L'option est passée dans le workflow par cohérence, mais on n'attend pas qu'elle change beaucoup l'issue.

#### Faux positifs reconnus (mai 2026)

Quelques liens restent classés "cassés" par Playwright sur le runner CI alors qu'ils sont vivants depuis un navigateur ordinaire. Ces résidus sont identifiables visuellement dans le rapport hebdomadaire :

- `geoconfluences.ens-lyon.fr/*` — Cloudflare bloque l'IP du runner Azure quel que soit le UA.
- `roobopoli.org/*` — idem (3 occurrences).

Ne pas les "corriger" en supprimant le lien : ils sont valides. Si la liste s'allonge ou qu'un nouveau pattern apparaît, ouvrir une issue dédiée.

#### Triage d'une cassure réelle

Quand le rapport remonte une URL qui est vraiment morte, l'ordre de préférence pour la correction est :

1. **URL alternative officielle** — le contenu a peut-être bougé chez le même éditeur. Chercher avec le titre de la page.
2. **Archive.org (Wayback Machine)** — `https://web.archive.org/web/<date>/<url>`. Indiquer dans le texte « la page d'origine n'est plus en ligne, snapshot archivé » pour rester transparent.
3. **Reformulation textuelle** — mentionner la source par son nom + domaine sans lien (ex. « atelier _Animate a Shape_ de l'Exploratorium (exploratorium.edu) »). Préférable quand le lien était purement illustratif.
4. **Suppression** — seulement si le contenu n'apporte rien d'essentiel à la fiche.

Une PR par projet (cf. l'historique des PR #115-#125) garde la revue lisible et le diff serré.

### Workflow `auto-assign.yml`

À l'ouverture d'une issue ou PR, assigne automatiquement un mainteneur.

## Vérifications à venir

### Lint des liens croisés (issue #26)

Script TypeScript prévu dans `site/scripts/lint-crosslinks.ts` qui :

- Vérifie que chaque fiche I-NOVMICRO portée pointe vers sa source Let's STEAM
- Vérifie que chaque fiche Let's STEAM ayant une version portée pointe vers I-NOVMICRO
- Détecte les liens cassés (cibles inexistantes)

Sera intégré dans la CI : `npm run lint:crosslinks` avant `npm run site:build`.

### Audit firmware STeaMi (issue #27)

Workflow GitHub Actions séparé `firmware-audit.yml` qui :

- Tourne en cron hebdomadaire ou mensuel
- Compare la dernière release du firmware STeaMi avec les versions mentionnées dans les fiches I-NOVMICRO
- Ouvre une issue automatique si désynchronisation détectée

## Audit périodique manuel

En plus des vérifications automatiques, prévoir une revue manuelle régulière :

| Cadence                 | Action                                                                           |
| ----------------------- | -------------------------------------------------------------------------------- |
| À chaque PR             | Revue par un autre membre de l'équipe Wiki                                       |
| Mensuel                 | Vérification d'un échantillon de fiches en prod                                  |
| Trimestriel             | Audit du catalogue (entrées orphelines, métadonnées obsolètes, PDFs trop lourds) |
| Avant releases majeures | Test complet du parcours catalogue + une fiche de chaque projet                  |

## Dictionnaire d'orthographe (cspell)

Les termes techniques et noms propres du projet sont dans [`.cspell/wikilab.txt`](.cspell/wikilab.txt). Ajouter un nouveau terme : éditer ce fichier puis re-tester avec `npm run lint:spell`.

Mots à éviter (équivalents accentués préférés) listés dans `cspell.json` (`flagWords`) — ex. les termes sans accent doivent être remplacés par leur version correctement accentuée (`développement`, `mémoire`, `système`, etc.).

## En cas de problème

- **Le build échoue en local** : `rm -rf node_modules .docusaurus && npm ci && npm run site:build`
- **Le hook pre-commit bloque inutilement** : ne **pas** utiliser `--no-verify` ; corriger le souci, ou poser la question dans une issue si la règle pose un problème.
- **Le build échoue en CI mais marche en local** : vérifier la version Node (`node --version` doit être ≥ 20), refaire `npm ci` propre.
- **Le build affiche `Duplicate routes found` en local** : c'est typiquement dû à des artefacts `.js` laissés par un IDE/`tsc` à côté des `.tsx` source dans `site/src/`. Lancer `npm run site:clean` à la racine pour les nettoyer (le build CI n'est pas affecté car ces fichiers ne sont pas commités).
- **Une fiche n'apparaît pas dans le catalogue** : vérifier l'entrée dans `resources.ts` (id unique, slug correct), redémarrer `npm run site:start`.
- **Un lien interne casse** : vérifier la sortie du build, mettre à jour les références.

## Ressources

- [Documentation Docusaurus v3](https://docusaurus.io/docs)
- [Conventions de contenu](CONVENTIONS.md)
- [Workflow de contribution](CONTRIBUTING.md)
- [Issues outillage CI](https://github.com/LabAixBidouille/wikilab/issues?q=is%3Aissue+label%3Aoutillage)

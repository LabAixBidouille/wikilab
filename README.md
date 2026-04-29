# Wiki@LAB

Wiki des ressources pédagogiques du **L.A.B — Laboratoire d'Aix-périmentation et de Bidouille**.

Catalogue de 185 fiches issues de projets éducatifs, créatifs et makers (programmation, robotique, IA, fabrication numérique, débranché, théâtre des sciences…), publiées sous **Creative Commons BY-SA 4.0**.

🌐 **Site en ligne** : <https://wiki.labaixbidouille.com>

## Projets intégrés

| Projet           |              Fiches | Couleur   |
| ---------------- | ------------------: | --------- |
| Let's STEAM      |                  15 | `#140e4e` |
| Mimesis          |                   8 | `#09246C` |
| Unplugged        |                  24 | `#0081A7` |
| JediTrack        | 15 (+ borne arcade) | `#1198f0` |
| Robots Meet Arts |                  29 | `#169da7` |
| SteamCity        |         25 + 9 prog | `#DD5350` |
| The Dexter Lab   |        20 + 13 prog | `#1a4a48` |
| Youth AI Lab     |                   6 | `#b34520` |
| I-Novmicro #2    |                   1 | `#8a6e18` |
| Projets du LAB   |                  20 | —         |

## Architecture

### Site Docusaurus (`site/`)

- **Framework** : [Docusaurus v3.10](https://docusaurus.io/) (TypeScript, mode strict ; flag `future.v4: true` activé pour préparer la migration v4)
- **Config** : [`site/docusaurus.config.ts`](site/docusaurus.config.ts)
- **Catalogue typé** : [`site/src/data/resources.ts`](site/src/data/resources.ts)
- **Données projets** : [`site/src/data/projects.ts`](site/src/data/projects.ts)
- **Pages custom** : [`site/src/pages/`](site/src/pages/) (catalogue, projets, machines, index)
- **Theme custom** : [`site/src/theme/`](site/src/theme/) (admonitions custom `:::question`, `:::hypothese`)
- **Types globaux** : [`site/src/types/`](site/src/types/) (extension `React.CSSProperties` pour les CSS variables)
- **Fiches** : [`site/docs/<projet>/`](site/docs/)
- **Images** : [`site/static/img/ressources/<projet>/<fiche-id>/`](site/static/img/ressources/)
- **PDFs** : [`site/static/pdf/<projet>/`](site/static/pdf/)
- **Sources markdown brutes** : [`markdown/`](markdown/) (originaux pré-conversion)

### Outillage qualité (racine)

- **`package.json` racine** : Prettier, markdownlint, cspell, husky, commitlint, lint-staged, validate-branch-name, lychee
- **Hooks Git** : [`.husky/pre-commit`](.husky/pre-commit), [`.husky/commit-msg`](.husky/commit-msg)
- **CI/CD** : [`.github/workflows/`](.github/workflows/) (build, deploy, links cron, auto-assign)
- **Templates** : [`.github/ISSUE_TEMPLATE/`](.github/ISSUE_TEMPLATE/), [`.github/PULL_REQUEST_TEMPLATE.md`](.github/PULL_REQUEST_TEMPLATE.md)

Pour les **conventions de contenu et de formatage des fiches**, voir [`CONVENTIONS.md`](CONVENTIONS.md).

## Développement local

Prérequis : Node.js 20+.

```bash
git clone https://github.com/LabAixBidouille/wikilab.git
cd wikilab
npm ci                # outillage racine (linters, hooks Git)
cd site
npm ci                # Docusaurus
npm start             # serveur de dev sur http://localhost:3000
npm run build         # build statique dans site/build/
npm run serve         # sert le build localement
```

Le `npm ci` racine installe les hooks Git automatiquement (Conventional Commits, validation de branche, lint). Voir [`CONTRIBUTING.md`](CONTRIBUTING.md) pour les commandes complètes.

## Déploiement

Le site est déployé automatiquement sur **GitHub Pages** via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) à chaque push sur `main`.

- Domaine custom : `wiki.labaixbidouille.com` (CNAME dans [`site/static/CNAME`](site/static/CNAME))
- Source : GitHub Actions (Settings → Pages → Source = GitHub Actions)

## Contribution

- **Comment contribuer** (workflow, branches, PR, checklists) : voir [`CONTRIBUTING.md`](CONTRIBUTING.md)
- **Conventions de contenu et formatage des fiches** : voir [`CONVENTIONS.md`](CONVENTIONS.md)
- **Tests et vérifications** (build, typecheck, lint, CI) : voir [`TESTING.md`](TESTING.md)
- **Notes pour assistants IA** (architecture, contexte projet) : voir [`CLAUDE.md`](CLAUDE.md)

## Suivi du projet

- **Issues** : <https://github.com/LabAixBidouille/wikilab/issues>
- **Milestones** : structuration en 7 jalons (Bootstrap, Fiches enseignants, Portage Let's STEAM, Outillage CI, Harmonisation P1, Audit phase 2, Portage phase 2) — voir <https://github.com/LabAixBidouille/wikilab/milestones>
- **Project board** : <https://github.com/orgs/LabAixBidouille/projects/1>
- **Initiative en cours** : intégration de la carte STeaMi + MicroPython dans l'écosystème (38 issues, EPICs #2 phase 1 et #30 phase 2)

## Licence

Contenu : **Creative Commons BY-SA 4.0** — <https://creativecommons.org/licenses/by-sa/4.0/deed.fr>

Code du site : voir le repo.

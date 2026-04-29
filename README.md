# Wiki@LAB

Wiki des ressources pédagogiques du **L.A.B — Laboratoire d'Aix-périmentation et de Bidouille**.

Catalogue de 184 fiches issues de projets éducatifs, créatifs et makers (programmation, robotique, IA, fabrication numérique, débranché, théâtre des sciences…), publiées sous **Creative Commons BY-SA 4.0**.

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
| Youth AI Lab     |                   5 | `#b34520` |
| I-Novmicro #2    |                   1 | `#8a6e18` |
| Projets du LAB   |                  20 | —         |

## Architecture

- **Framework** : [Docusaurus v4](https://docusaurus.io/) (TypeScript)
- **Site** : [`site/`](site/)
- **Config** : [`site/docusaurus.config.ts`](site/docusaurus.config.ts)
- **Catalogue** : [`site/src/data/resources.ts`](site/src/data/resources.ts)
- **Fiches** : [`site/docs/<projet>/`](site/docs/)
- **Images** : [`site/static/img/ressources/<projet>/<fiche-id>/`](site/static/img/ressources/)
- **PDFs** : [`site/static/pdf/<projet>/`](site/static/pdf/)
- **Sources markdown brutes** : [`markdown/`](markdown/)

Voir [`CLAUDE.md`](CLAUDE.md) pour les conventions de formatage, la structure des fiches et les règles de contribution détaillées.

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
- **Tests et vérifications** (build, typecheck, lint, CI) : voir [`TESTING.md`](TESTING.md)
- **Conventions de formatage des fiches** (header, callouts, images, footer) : voir [`CLAUDE.md`](CLAUDE.md)

## Licence

Contenu : **Creative Commons BY-SA 4.0** — <https://creativecommons.org/licenses/by-sa/4.0/deed.fr>

Code du site : voir le repo.

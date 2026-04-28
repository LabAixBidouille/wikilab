# Wiki@LAB

Wiki des ressources pédagogiques du **L.A.B — Laboratoire d'Aix-périmentation et de Bidouille**.

Catalogue de 184 fiches issues de projets éducatifs, créatifs et makers (programmation, robotique, IA, fabrication numérique, débranché, théâtre des sciences…), publiées sous **Creative Commons BY-SA 4.0**.

🌐 **Site en ligne** : <https://wiki.labaixbidouille.com>

## Projets intégrés

| Projet | Fiches | Couleur |
|---|---:|---|
| Let's STEAM | 15 | `#140e4e` |
| Mimesis | 8 | `#09246C` |
| Unplugged | 24 | `#0081A7` |
| JediTrack | 15 (+ borne arcade) | `#1198f0` |
| Robots Meet Arts | 29 | `#169da7` |
| SteamCity | 25 + 9 prog | `#DD5350` |
| The Dexter Lab | 20 + 13 prog | `#1a4a48` |
| Youth AI Lab | 5 | `#b34520` |
| I-Novmicro #2 | 1 | `#8a6e18` |
| Projets du LAB | 20 | — |

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
cd site
npm ci
npm start              # serveur de dev sur http://localhost:3000
npm run build          # build statique dans site/build/
npm run serve          # sert le build localement
```

## Déploiement

Le site est déployé automatiquement sur **GitHub Pages** via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) à chaque push sur `main`.

- Domaine custom : `wiki.labaixbidouille.com` (CNAME dans [`site/static/CNAME`](site/static/CNAME))
- Source : GitHub Actions (Settings → Pages → Source = GitHub Actions)

## Contribution

Les conventions complètes sont dans [`CLAUDE.md`](CLAUDE.md) (rédigé pour l'assistant IA Claude Code mais lisible pour tout contributeur). Points clés :

- **Header de fiche** : flex layout avec icône SVG, badges, tableau, callout
- **Callouts** : `:::tip` réservé aux ressources imprimables, `:::info` pour les conseils, `:::caution` pour les phases d'activité
- **Images** : alignées à gauche par défaut, centrées si légende
- **Catalogue** : chaque fiche a une entrée dans `site/src/data/resources.ts` avec disciplines, outils, âge, durée, catégories pédagogiques

## Licence

Contenu : **Creative Commons BY-SA 4.0** — <https://creativecommons.org/licenses/by-sa/4.0/deed.fr>

Code du site : voir le repo.

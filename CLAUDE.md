# Wiki@LAB — Guide de développement

## Architecture

- **Framework** : Docusaurus v4 (TypeScript)
- **Dossier site** : `site/`
- **Config** : `site/docusaurus.config.ts`
- **CSS custom** : `site/src/css/custom.css`
- **Données catalogue** : `site/src/data/resources.ts`
- **Données projets** : `site/src/data/projects.ts`
- **Pages** : `site/src/pages/` (catalogue.tsx, index.tsx, projets/, machines/, about.tsx)
- **Docs (fiches)** : `site/docs/` (lets-steam/, mimesis/, unplugged/, jeditrack/, robots-meet-arts/)
- **Images** : `site/static/img/ressources/<projet-slug>/`
- **PDFs** : `site/static/pdf/<projet>/`
- **Sources markdown brutes** : `markdown/` (fichiers originaux avant conversion)

## Projets intégrés

| Projet | Fiches | Catalogue | Images | PDFs | Couleur |
|---|---|---|---|---|---|
| Let's STEAM | 15 | OK | OK | OK | `#140e4e` |
| Mimesis | 8 | OK | OK | OK | `#09246C` |
| Unplugged | 24 | OK | OK | Partiels (3 >50MB exclus) | `#0081A7` |
| JediTrack | 14 + 8 borne arcade | OK | Partiels (pas d'icônes) | Non | `#1198f0` |
| Robots Meet Arts | 29 | OK | Non (pas d'icônes ni photos) | Non | `#169da7` |
| SteamCity | Non intégré | - | - | - | `#6c9e23` |
| The Dexter Lab | Non intégré | - | - | - | - |
| Youth AI Lab | Non intégré | - | - | - | - |
| I-Novmicro #2 | Non intégré | - | - | - | - |
| Projets du LAB | Non intégré | - | - | - | - |

## Conventions de formatage des fiches

### Header (en-tête)
- Flex layout : titre + badges + tableau + matériel + PDF + callout à gauche, icône 225px à droite
- Titre H1 avec icône SVG flat design inline (couleur du projet, opacités 0.1/0.25/1.0)
- Badges : disciplines (primary), outils (info), logiciels (warning/secondary)
- Tableau : colonnes égales, en-tête fond `#09246C` + texte blanc (CSS global — TODO adapter par projet)
- Bouton PDF rose (`#e83e8c`) si PDF disponible
- Callout `:::tip[**Ressources imprimables incluses dans le PDF.**]` avec liste si applicable
- Espacement `<div style={{marginTop: "1.5rem"}}/>` avant le callout

### Callouts
- `:::tip` (vert, icône imprimante) : ressources imprimables uniquement
- `:::info` (bleu, icône info) : remarques, conseils, notes techniques
- `:::caution` (rose `#e83e8c`, icône ▶) : phases d'activité (placées après métadonnées de chaque acte)
- `:::note` (gris) : notes diverses
- Ne JAMAIS utiliser `:::tip` pour du contenu non-imprimable

### Images
- En bloc, alignées à gauche (CSS global `display: block`)
- Après le texte descriptif qu'elles illustrent
- Côte à côte avec `display: flex` quand pertinent
- Légendes avec `<figure>` + `<figcaption>` (margin: 0)
- Pas de float right sauf cas exceptionnel (ex: brainstorming fiche élève)

### Texte
- Justifié (CSS global)
- Titres numérotés de manière homogène (Partie 1, 2, 3...)
- Pas de bold dans les headings
- `--` dans les titres → ` : ` + minuscule après
- Footer Erasmus+ en bas de chaque fiche

### Catalogue (`resources.ts`)
- Chaque fiche = une entrée avec id, title, slug, project, summary, disciplines, tools, software, ageMin, ageMax, durationMinutes, difficulty, formats, keywords, pdf?, thumbnail?
- maxDuration filtre par défaut = 240 min (attention aux fiches longues)

## Build

```bash
export PATH="/home/manon/.nvm/versions/node/v20.20.2/bin:$PATH"
cd site
npx docusaurus build
npx docusaurus start --port 3333
```

## Git

- Remote : `https://github.com/LabAixBidouille/wikilab.git`
- Branche : `main`
- Auth : `gh auth login` (GitHub CLI)
- 3 PDFs exclus (.gitignore) car >50MB : Vivre en harmonie, Potluck March, Equal

## TODO

- [ ] Icônes projet (icone.png) pour JediTrack et Robots Meet Arts
- [ ] PDFs pour JediTrack et Robots Meet Arts
- [ ] Adapter la couleur du tableau par projet (actuellement hardcodé #09246C)
- [ ] Intégrer SteamCity, The Dexter Lab, Youth AI Lab, I-Novmicro, Projets du LAB
- [ ] Git LFS pour les 3 PDFs Unplugged >50MB
- [ ] Photos pour les fiches JediTrack et Robots Meet Arts

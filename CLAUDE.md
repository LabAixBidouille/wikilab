# Wiki@LAB — Guide de développement

## Architecture

- **Framework** : Docusaurus v4 (TypeScript)
- **Dossier site** : `site/`
- **Config** : `site/docusaurus.config.ts`
- **CSS custom** : `site/src/css/custom.css`
- **Données catalogue** : `site/src/data/resources.ts`
- **Données projets** : `site/src/data/projects.ts`
- **Pages** : `site/src/pages/` (catalogue.tsx, index.tsx, projets/, machines/, about.tsx)
- **Docs (fiches)** : `site/docs/` (lets-steam/, mimesis/, unplugged/, jeditrack/, robots-meet-arts/, steamcity/)
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
| Robots Meet Arts | 29 | OK | Non | OK | `#169da7` |
| SteamCity | 25 + 9 fiches prog | OK | Non | OK | `#DD5350` |
| The Dexter Lab | 20 | OK | Non | OK (feuilles travail) | `#1a4a48` |
| Youth AI Lab | Non intégré | - | - | - | - |
| I-Novmicro #2 | Non intégré | - | - | - | - |
| Projets du LAB | Non intégré | - | - | - | - |

## Conventions de formatage des fiches

### Header (en-tête)
- Flex layout : titre + badges + tableau + matériel + PDF + callout à gauche, icône 225px à droite
- Titre H1 avec icône SVG flat design inline (couleur du projet, opacités 0.1/0.25/1.0)
- Badges : disciplines (primary), outils (info), logiciels (warning/secondary)
- Tableau : colonnes égales, en-tête fond `#09246C` + texte blanc
- Bouton PDF rose (`#e83e8c`) si PDF disponible
- Callout `:::tip[**Ressources imprimables incluses dans le PDF.**]` avec liste si applicable

### Structure des fiches (règles SteamCity)
- **Introduction** (H2) contient : texte d'intro, Structure du protocole (H3), tableau durée/matériel sans titre "Pour bien démarrer", Glossaire (H3) en liste à puces
- **Pas de titre "## Protocole"** : les phases sont directement H2
- **Phases** : `## Phase 1 : compréhension...` (minuscule après `:`)
- **Sous-sections des phases** : Conceptualisation, Investigation, Analyse en H3
- **Fiches programmation** : extraites dans `steamcity/programmation/` avec lien dans la fiche principale

### Callouts
- `:::tip` (vert, icône imprimante) : ressources imprimables UNIQUEMENT
- `:::info` (bleu, icône info/ampoule) : conseils, remarques, notes techniques
- `:::caution` (rose, icône ▶) : phases d'activité
- `:::note` (gris) : notes diverses
- Ne JAMAIS utiliser `:::tip` pour des conseils non-imprimables

### Images
- En bloc, alignées à gauche (CSS global `display: block`)
- Après le texte descriptif qu'elles illustrent
- Côte à côte avec `display: flex` quand pertinent
- Légendes avec `<figure>` + `<figcaption>` (margin: 0)

### Texte
- Justifié (CSS global)
- Titres numérotés de manière homogène (Partie 1, 2, 3...)
- Pas de bold dans les headings
- `--` dans les titres → ` : ` + minuscule après
- Listes avec `: ` → premier élément en gras : `- **Label** : description`
- Footer Erasmus+ en bas de chaque fiche
- Gras : "Contexte de la séquence" et "Objectifs d'apprentissage"

### Contenu à supprimer
- Mentions italiques de phase (Découverte et échauffement, Fin de la séquence...)
- Blockquotes citations en début de page → texte normal
- Doubles `---` en fin de fiche
- Mentions "Une activité développée par..."
- Références QR code → "disponible dans le PDF"
- Glossaires en tableau → listes à puces

### Notes enseignants
- Format : `:::info[Notes pour l'enseignant·e]` (bleu, pas gris)
- Convertir tous les blockquotes `> **Notes pour l'enseignant·e**` en callouts info

### Catalogue (`resources.ts`)
- Chaque fiche = une entrée avec id, title, slug, project, summary, disciplines, tools, software, ageMin, ageMax, durationMinutes, difficulty, formats, keywords, pdf?, thumbnail?
- maxDuration filtre par défaut = 240 min (attention aux fiches longues, utiliser 240 max)

### Sous-pages (ex: borne-arcade, programmation)
- Dossier dans `docs/PROJET/SOUSPROJET/`
- Fichier `_category_.json` avec label, position, collapsed
- Ajouter une entrée au catalogue qui pointe vers la page d'introduction/première page

### Fiches de programmation extraites
- Les fiches longues (SteamCity, TheDexterLab) qui contiennent des sections de programmation doivent avoir ces sections EXTRAITES dans `docs/PROJET/programmation/`
- **Format obligatoire** : même format que les fiches Let's STEAM (voir `docs/lets-steam/r1as01-led.md` comme référence)
  - Flex header complet avec SVG icône couleur projet, badges (discipline, carte, logiciel), tableau Projet/Durée/Difficulté/Âge
  - Section "## Matériel"
  - Bouton PDF si disponible
  - Section "## De quoi parle-t-on ?" avec intro sur le concept/hardware
  - Section "## Objectifs d'apprentissage" en liste à puces
  - Contenu de programmation (étapes, code, câblage)
  - Footer Erasmus+
- Dans la fiche principale, remplacer la section extraite par un lien `## Programmation` pointant vers la fiche technique
- Les tableaux vides (exemples à remplir) doivent avoir des lignes de taille égale (même nombre de cellules)

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
- [ ] Adapter la couleur du tableau par projet (actuellement hardcodé #09246C)
- [ ] Intégrer Youth AI Lab, I-Novmicro, Projets du LAB
- [ ] Git LFS pour les 3 PDFs Unplugged >50MB
- [ ] Photos pour les fiches JediTrack et Robots Meet Arts

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
- **Images** : `site/static/img/ressources/<projet>/<fiche-id>/` — un sous-dossier par fiche, avec `icone.png`/`icone.svg` + photos additionnelles. Les dossiers sont créés pour les 184 fiches (`.gitkeep` pour celles en attente d'images).
- **PDFs** : `site/static/pdf/<projet>/`
- **Sources markdown brutes** : `markdown/` (fichiers originaux avant conversion)

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
| Youth AI Lab     | 5                     | OK        | OK          | OK                        | `#b34520` |
| I-Novmicro #2    | 1 + 22 prévues   | OK        | Dossiers .gitkeep          | -                         | `#8a6e18` |
| Projets du LAB   | 20                    | OK        | Partiels    | -                         | -         |

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
- **Phases** : `## Phase 1 : Compréhension...` (majuscule après `:`)
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
- Légendes UNIQUEMENT si demandé explicitement (style global déjà appliqué : italique, 0.9em, gris foncé, **centré** via `.markdown figcaption`)
- **RÈGLE STRICTE** : dès qu'une `<figcaption>` est présente, l'image ET la légende DOIVENT être centrées. Le CSS global `.markdown figure:has(figcaption)` applique le centrage automatiquement, mais il faut quand même appliquer le pattern :

  ```jsx
  <figure style={{ margin: '1rem auto', textAlign: 'center' }}>
    <img src="..." style={{ maxWidth: '100%', height: 'auto', margin: '0 auto' }} />
    <figcaption style={{ margin: 0 }}>...</figcaption>
  </figure>
  ```

  NE JAMAIS laisser une image avec figcaption alignée à gauche.

- **Images côte à côte sans étirement** : flex container avec `alignItems: 'flex-start'` et chaque image en `maxWidth: 'calc(50% - 1rem)'` + `height: 'auto'` + `alignSelf: 'flex-start'` (préserve les proportions naturelles, espace vide sous la plus petite si tailles différentes — c'est OK)

  ```jsx
  <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
    <img
      src="..."
      style={{ maxWidth: 'calc(50% - 1rem)', height: 'auto', alignSelf: 'flex-start' }}
    />
    <img
      src="..."
      style={{ maxWidth: 'calc(50% - 1rem)', height: 'auto', alignSelf: 'flex-start' }}
    />
  </div>
  ```

- Centrage figure + image : `<figure style={{width: 'X%', margin: '1rem auto'}}><img style={{width: '100%'}}/></figure>`

### Texte

- Justifié (CSS global)
- Titres numérotés de manière homogène (Partie 1, 2, 3...)
- Pas de bold dans les headings
- `--` dans les titres → `:` + majuscule après (règle wiki globale)
- Listes avec `:` → premier élément en gras : `- **Label** : description`
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

- Chaque fiche = une entrée avec id, title, slug, project, summary, disciplines, tools, software, ageMin, ageMax, durationMinutes, difficulty, formats, categories, keywords, pdf?, thumbnail?
- `categories` : 11 approches pédagogiques (`programmation`, `exploration-scientifique`, `robotique-ludique`, `animation-jeunesse`, `citoyennete-territoire`, `ia-esprit-critique`, `sequences-debranchees`, `theatre-sciences`, `arts-creativite`, `environnement-nature`, `makers-fabrication`). Multi-catégories autorisées.
- `thumbnail` optionnel : pointe vers `/img/ressources/<projet>/<fiche-id>/icone.png` (ou `.svg`)
- maxDuration filtre par défaut = 240 min (attention aux fiches longues, utiliser 240 max)

### Suivi photos

- Page interactive : `/photos-suivi` (cases à cocher avec persistance localStorage)
- Convention : un sous-dossier par fiche sous `site/static/img/ressources/<projet>/<fiche-id>/`
- Le dossier de chaque fiche doit contenir `icone.png`/`icone.svg` + photos additionnelles
- Exception : `projets-du-lab/` racine contient le dump d'images historique (référencé dans les MD), plus les sous-dossiers `lab-<id>/` pour les icônes

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

### Fiches MicroPython I-NOVMICRO

Les fiches du projet **I-Novmicro #2 — Action EXAO** suivent des conventions spécifiques pour la programmation MicroPython sur la carte STeaMi.

#### Convention de nommage

- Format : `iXX-slug-court.md` (préfixe `i` + numéro 2 chiffres + slug court)
- Exemples : `i01-editeur-web-steami`, `i08-clignoter-led`, `i22-collecter-donnees`
- Numérotation continue : i01-i07 = fiches enseignants (prise en main), i08-i22 = fiches élèves (apprentissage)

#### Type `Format` à utiliser dans `resources.ts`

- `tutoriel` : pour les fiches enseignants (prise en main d'un éditeur, bases du langage, présentation des capteurs). Peut être combiné avec d'autres formats.
- `programmation` : pour les fiches élèves (activités d'apprentissage par la pratique).
- `experimentation` : à ajouter quand la fiche implique mesure, capteurs, démarche scientifique.
- Exemple fiche enseignante : `formats: ['tutoriel']` ou `formats: ['tutoriel', 'experimentation']`
- Exemple fiche élève : `formats: ['programmation']` ou `formats: ['programmation', 'projet-maker']`

#### Blocs Python — version firmware testée

Chaque bloc de code MicroPython doit commencer par un commentaire indiquant la version du firmware avec laquelle il a été testé :

```python
# Testée avec firmware STeaMi v1.2.0
from steami import display
import time

display.show("Hello !")
```

- La version doit être au format `vX.Y.Z` (ex: `v1.2.0`)
- Cette ligne se trouve **toujours** en première ligne du bloc, avant les imports
- Si la fiche utilise plusieurs blocs Python, la mention apparaît dans le premier bloc uniquement

#### Schémas de câblage STeaMi

- Pour les connexions GPIO simples : utiliser des images dans `site/static/img/ressources/inovmicro-exao/<fiche-id>/cablage-*.png`
- Pour les capteurs Qwiic : préciser le port (Qwiic gauche/droite) en commentaire dans le code
- Pour les capteurs externes via breadboard : fournir un schéma type Fritzing en `cablage.png` et un tableau des connexions

Exemple de tableau de câblage :

```md
| STeaMi   | Composant       |
| -------- | --------------- |
| GPIO 13  | LED (anode +)   |
| GND      | LED (cathode -) |
| 3.3V     | Bouton (entrée) |
```

#### Footer crédits — fiches portées de Let's STEAM

Les fiches `i08-i22` sont des portages de fiches Let's STEAM existantes. Leur footer doit conserver la traçabilité et la licence d'origine :

```md
---

_Cette fiche fait partie du projet [I-Novmicro #2 — Action EXAO](/projets/inovmicro-exao). Adaptée du projet [Let's STEAM](https://lets-steam.eu) (fiche `r1asXX-nom`) sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._
```

Pour les fiches originales (i01-i07, fiches enseignants non issues de Let's STEAM), footer simplifié :

```md
---

_Cette fiche fait partie du projet [I-Novmicro #2 — Action EXAO](/projets/inovmicro-exao). Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._
```

#### Sous-sections du projet (sidebar / page projet)

Le projet est organisé en 4 sous-sections affichées sur la page `/projets/inovmicro-exao` :

1. **Découverte** : `decouverte-steami` (existant)
2. **Prise en main** : 7 fiches enseignants (i01-i07) — éditeurs, bases du langage, capteurs
3. **Apprentissage de la programmation** : 15 fiches élèves (i08-i22) portées de Let's STEAM
4. **(Réservé) Projets et expérimentations** : à remplir ultérieurement

#### Photos communes mutualisées

Les photos communes à plusieurs fiches (carte STeaMi vue d'ensemble, branchement USB-C, écran OLED, capteurs intégrés) sont placées dans : site/static/img/ressources/inovmicro-exao/_commun/

Le préfixe `_` empêche la confusion avec les dossiers de fiches `iXX-...`.

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

- [x] Icônes projet (icone.png) pour JediTrack et Robots Meet Arts
- [ ] Adapter la couleur du tableau par projet (actuellement codée en dur `#09246C`)
- [x] Tous les projets intégrés !
- [ ] Git LFS pour les 3 PDFs Unplugged >50MB
- [x] Photos pour les fiches JediTrack et Robots Meet Arts
- [x] Refonte wiki SteamCity (24 fiches + 9 prog, callouts, annexes imprimables)
- [ ] Refonte wiki similaire pour les autres projets (style hérité PDF→wiki à uniformiser)
- [ ] Vérifier images d'illustration manquantes sur thedexterlab (20 fiches avec uniquement l'icône)

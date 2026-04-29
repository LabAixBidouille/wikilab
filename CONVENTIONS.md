# Conventions de contenu — Wiki@LAB

Ce document fait autorité pour le **formatage des fiches pédagogiques** et leur intégration au catalogue. Tout contributeur de contenu doit s'y référer.

> Pour le **workflow git/PR/CI** : voir [`CONTRIBUTING.md`](CONTRIBUTING.md).
> Pour les **vérifications et tests** : voir [`TESTING.md`](TESTING.md).

## Sommaire

1. [Header (en-tête de fiche)](#header-en-tête-de-fiche)
2. [Structure des fiches](#structure-des-fiches)
3. [Callouts](#callouts)
4. [Images](#images)
5. [Texte](#texte)
6. [Contenu à supprimer](#contenu-à-supprimer)
7. [Notes enseignants](#notes-enseignants)
8. [Catalogue (`resources.ts`)](#catalogue-resourcests)
9. [Suivi photos](#suivi-photos)
10. [Sous-pages (borne-arcade, programmation)](#sous-pages-borne-arcade-programmation)
11. [Fiches de programmation extraites](#fiches-de-programmation-extraites)
12. [Couleurs des projets](#couleurs-des-projets)

## Header (en-tête de fiche)

- Flex layout : titre + badges + tableau + matériel + PDF + callout à gauche, icône 225px à droite
- Titre H1 avec icône SVG flat design inline (couleur du projet, opacités 0.1/0.25/1.0)
- Badges : disciplines (primary), outils (info), logiciels (warning/secondary)
- Tableau : colonnes égales, en-tête fond `#09246C` + texte blanc (sera adapté par projet, [TODO ouvert](https://github.com/LabAixBidouille/wikilab/issues))
- Bouton PDF rose (`#e83e8c`) si PDF disponible
- Callout `:::tip[**Ressources imprimables incluses dans le PDF.**]` avec liste si applicable

## Structure des fiches

Règles consolidées (héritées de la refonte SteamCity) :

- **Introduction** (H2) contient : texte d'intro, Structure du protocole (H3), tableau durée/matériel sans titre "Pour bien démarrer", Glossaire (H3) en liste à puces
- **Pas de titre `## Protocole`** : les phases sont directement H2
- **Phases** : `## Phase 1 : Compréhension...` (majuscule après `:`)
- **Sous-sections des phases** : Conceptualisation, Investigation, Analyse en H3
- **Fiches programmation** : extraites dans `site/docs/<projet>/programmation/` avec lien dans la fiche principale (voir [Fiches de programmation extraites](#fiches-de-programmation-extraites))

## Callouts

### Standard Docusaurus

- `:::tip` (vert, icône imprimante) : ressources imprimables UNIQUEMENT
- `:::info` (bleu, icône info/ampoule) : conseils, remarques, notes techniques
- `:::caution` (rose, icône ▶) : phases d'activité
- `:::note` (gris) : notes diverses

### Custom (Wiki@LAB)

Déclarés dans [`site/docusaurus.config.ts`](site/docusaurus.config.ts) (`admonitions.keywords`) et implémentés dans [`site/src/theme/Admonition/Type/`](site/src/theme/Admonition/Type/).

- `:::question` (violet, icône `?`) : question de recherche scientifique
- `:::hypothese` (sarcelle/teal, icône ampoule) : hypothèse à vérifier

Couleurs et icônes : voir [`site/src/css/custom.css`](site/src/css/custom.css) (sections `theme-admonition-question` et `theme-admonition-hypothese`).

### Règles

- Ne JAMAIS utiliser `:::tip` pour des conseils non-imprimables
- Le titre par défaut est posé par le composant — surcharger avec `:::question[Mon titre]` si besoin
- Pour ajouter un nouveau type custom : 1) déclarer le keyword dans `docusaurus.config.ts`, 2) créer le composant dans `site/src/theme/Admonition/Type/`, 3) référencer dans `site/src/theme/Admonition/Types.tsx`, 4) ajouter le CSS dans `custom.css`

## Images

- En bloc, alignées à gauche par défaut (CSS global `display: block`)
- Placées **après** le texte descriptif qu'elles illustrent
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

## Texte

- Justifié (CSS global)
- Titres numérotés de manière homogène (Partie 1, 2, 3...)
- Pas de bold dans les headings
- `--` dans les titres → `:` + majuscule après (règle wiki globale)
- Listes avec deux-points → premier élément en gras : `- **Label** : description`
- Footer Erasmus+ en bas de chaque fiche concernée
- Gras pour : "Contexte de la séquence" et "Objectifs d'apprentissage"

## Contenu à supprimer

Lors de la conversion d'un PDF/source vers une fiche wiki :

- Mentions italiques de phase (Découverte et échauffement, Fin de la séquence...)
- Blockquotes citations en début de page → texte normal
- Doubles `---` en fin de fiche
- Mentions "Une activité développée par..."
- Références QR code → "disponible dans le PDF"
- Glossaires en tableau → listes à puces

## Notes enseignants

- Format : `:::info[Notes pour l'enseignant·e]` (bleu, pas gris)
- Convertir tous les blockquotes `> **Notes pour l'enseignant·e**` en callouts info

## Catalogue (`resources.ts`)

Source : [`site/src/data/resources.ts`](site/src/data/resources.ts).

Chaque fiche est une entrée avec :

- `id` (kebab-case, unique)
- `title`, `slug` (chemin URL `/ressources/<projet>/<id>`)
- `project` (un de `lets-steam`, `mimesis`, `unplugged`, `jeditrack`, `robots-meet-arts`, `steamcity`, `thedexterlab`, `youth-ai-lab`, `inovmicro-exao`, `projets-du-lab`)
- `summary` (1-2 phrases)
- `disciplines`, `tools`, `software` (unions de types stricts)
- `ageMin`, `ageMax` (entiers)
- `durationMinutes` (max 240 — au-delà la fiche est trop longue)
- `difficulty` (`debutant` | `intermediaire` | `avance`)
- `formats` (un ou plusieurs parmi `debranchee`, `programmation`, `experimentation`, `jeu-de-role`, `bricolage`, `enquete`, `projet-maker`)
- `categories` : 11 approches pédagogiques, multi-catégories autorisées :
  - `programmation`, `exploration-scientifique`, `robotique-ludique`, `animation-jeunesse`
  - `citoyennete-territoire`, `ia-esprit-critique`, `sequences-debranchees`
  - `theatre-sciences`, `arts-creativite`, `environnement-nature`, `makers-fabrication`
- `keywords` (mots-clés pour la recherche)
- `pdf?` (chemin optionnel vers le PDF)
- `thumbnail?` (chemin optionnel vers `/img/ressources/<projet>/<id>/icone.png` ou `.svg`)

Les types sont stricts : ajouter une nouvelle valeur impose d'éditer le type au début du fichier.

## Suivi photos

- Page interactive : `/photos-suivi` (cases à cocher avec persistance localStorage)
- Convention : un sous-dossier par fiche sous `site/static/img/ressources/<projet>/<fiche-id>/`
- Le dossier de chaque fiche doit contenir `icone.png`/`icone.svg` + photos additionnelles
- Exception : `projets-du-lab/` racine contient le dump d'images historique (référencé dans les MD), plus les sous-dossiers `lab-<id>/` pour les icônes

## Sous-pages (borne-arcade, programmation)

- Dossier dans `site/docs/<projet>/<sous-projet>/`
- Fichier `_category_.json` avec `label`, `position`, `collapsed`
- Ajouter une entrée au catalogue pointant vers la page d'introduction/première page

## Fiches de programmation extraites

Les fiches longues (SteamCity, TheDexterLab) qui contiennent des sections de programmation doivent avoir ces sections **extraites** dans `site/docs/<projet>/programmation/`.

**Format obligatoire** : même format qu'une fiche Let's STEAM (référence : [`site/docs/lets-steam/r1as01-led.md`](site/docs/lets-steam/r1as01-led.md)) :

- Flex header complet avec SVG icône couleur projet, badges (discipline, carte, logiciel), tableau Projet/Durée/Difficulté/Âge
- Section `## Matériel`
- Bouton PDF si disponible
- Section `## De quoi parle-t-on ?` avec intro sur le concept/hardware
- Section `## Objectifs d'apprentissage` en liste à puces
- Contenu de programmation (étapes, code, câblage)
- Footer Erasmus+

Dans la fiche principale, remplacer la section extraite par un lien `## Programmation` pointant vers la fiche technique.

Les tableaux vides (exemples à remplir) doivent avoir des lignes de taille égale (même nombre de cellules).

## Couleurs des projets

| Projet           | Couleur principale |
| ---------------- | ------------------ |
| Let's STEAM      | `#140e4e`          |
| Mimesis          | `#09246C`          |
| Unplugged        | `#0081A7`          |
| JediTrack        | `#1198f0`          |
| Robots Meet Arts | `#169da7`          |
| SteamCity        | `#DD5350`          |
| The Dexter Lab   | `#1a4a48`          |
| Youth AI Lab     | `#b34520`          |
| I-Novmicro #2    | `#8a6e18`          |
| Projets du LAB   | (variable)         |

À utiliser pour : icône SVG inline du header (avec opacités 0.1/0.25/1.0), code couleur de l'entrée projet dans [`site/src/data/projects.ts`](site/src/data/projects.ts).

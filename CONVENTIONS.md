# Conventions de contenu Wiki@LAB

Ce document fait autorité pour le **formatage des fiches pédagogiques** et leur intégration au catalogue. Tout contributeur de contenu doit s'y référer.

> Pour le **workflow git/PR/CI** : voir [`CONTRIBUTING.md`](CONTRIBUTING.md).
> Pour les **vérifications et tests** : voir [`TESTING.md`](TESTING.md).

## Sommaire

1. [Header (en-tête de fiche)](#header-en-tête-de-fiche)
2. [Structure des fiches](#structure-des-fiches)
3. [Callouts](#callouts) — incluant les [encarts récurrents pour les fiches I-NOVMICRO](#encarts-récurrents-pour-les-fiches-i-novmicro)
4. [Images](#images) — incluant l'[icône PNG (vignette)](#icône-png-vignette-du-header)
5. [Texte](#texte) — incluant le [style pédagogique](#style-pédagogique--écrire-pour-des-élèves-pas-des-ingénieurs), les [objectifs d'apprentissage](#objectifs-dapprentissage), la [section Aller plus loin](#section-aller-plus-loin--pour-comprendre--pour-sinspirer)
6. [Contenu à supprimer](#contenu-à-supprimer)
7. [Notes enseignants](#notes-enseignants)
8. [Catalogue (`resources.ts`)](#catalogue-resourcests)
9. [Suivi photos](#suivi-photos)
10. [Sous-pages (borne-arcade, programmation)](#sous-pages-borne-arcade-programmation)
11. [Fiches de programmation extraites](#fiches-de-programmation-extraites)
12. [Code MicroPython sur STeaMi](#code-micropython-sur-steami) — incluant les [identifiants Python en français](#identifiants-python-en-français)
13. [Fiches indépendantes de l'éditeur](#fiches-indépendantes-de-léditeur)
14. [Captures vidéo / GIFs](#captures-vidéo--gifs)
15. [Couleurs des projets](#couleurs-des-projets)

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
- Le titre par défaut est posé par le composant : surcharger avec `:::question[Mon titre]` si besoin
- Pour ajouter un nouveau type custom : 1) déclarer le keyword dans `docusaurus.config.ts`, 2) créer le composant dans `site/src/theme/Admonition/Type/`, 3) référencer dans `site/src/theme/Admonition/Types.tsx`, 4) ajouter le CSS dans `custom.css`

### Encarts récurrents pour les fiches I-NOVMICRO

Plusieurs encarts récurrents structurent les fiches portées. Ils sont à reprendre à l'identique pour rester cohérent d'une fiche à l'autre.

#### `:::info[Capteurs intégrés, rien à câbler]`

À placer dans la section « De quoi parle-t-on ? » dès qu'on utilise un ou plusieurs capteurs internes :

```md
:::info[Capteurs intégrés, rien à câbler]
[Liste des capteurs / actionneurs internes utilisés] sont déjà soudés à la STeaMi. Aucun montage à faire : on plonge directement dans le code.
:::
```

#### `:::info[Première fois avec l'écran OLED ?]`

À placer dans la section qui introduit `steami_screen`, juste avant le premier appel `ecran.show()` :

```md
:::info[Première fois avec l'écran OLED ?]
Si tu n'as encore jamais piloté l'écran, la fiche [Afficher du texte sur l'écran OLED](/ressources/inovmicro-exao/i10-texte-oled) explique en détail le fonctionnement de la librairie `steami_screen`. Tu peux la consulter en parallèle si certaines lignes te paraissent obscures.
:::
```

#### `:::info[Mesure vs réalité : ne pas conclure trop vite]`

À placer dans toute fiche capteur qui présente une mesure absolue (température, pression, distance...). Encart de **rigueur scientifique** qui rappelle les biais possibles (auto-échauffement, emplacement, calibration) et renvoie vers `set_temp_offset()` ou équivalent. Phrase clé : _« notre mesure est utile pour explorer, pas pour certifier »_.

#### `:::info[Conditions matérielles pour une mesure longue]`

À placer dès qu'une fiche propose une expérience de plusieurs heures (datalogger, suivi nuit, etc.). Lister les options d'alimentation (USB ordi, chargeur secteur, batterie LiPo) et avertir des risques spécifiques (condensation en environnement froid, autonomie batterie limitée).

#### `:::info[Comment lire la fiche en N minutes]`

Quand une fiche dépasse une heure de matière, ajouter en haut d'Étape 2 un encart qui distingue la **séance** (Étapes 1-3 : construire, programmer, tester) du **prolongement** (Étape 4 : vraie expérience longue, calibration, transfert vers d'autres usages). Permet au prof de planifier son créneau.

#### Encarts de curiosité

Les encarts qui développent un concept au-delà du strict besoin du programme (par exemple « Le tampon d'affichage », « Pourquoi écrire une fonction ? », « Pythagore en 3D », « Aux origines de la musique électronique ») sont à encourager. Ils transforment la fiche en lecture qu'on peut traverser sans coder, ce qui élargit la cible.

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

- **Images côte à côte sans étirement** : flex container avec `alignItems: 'flex-start'` et chaque image en `maxWidth: 'calc(50% - 1rem)'` + `height: 'auto'` + `alignSelf: 'flex-start'` (préserve les proportions naturelles, espace vide sous la plus petite si tailles différentes, c'est OK)

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

### Icône PNG (vignette du header)

La vignette `icone.png` qui s'affiche à droite du header (225×225 px) est une **flat-illustration** qui représente le **sujet** de la fiche (l'objet, le concept, ou le résultat), pas la STeaMi ni le matériel.

Critères :

- **Style flat-illustration** vectoriel à plat, sans dégradés réalistes ni ombrage 3D. La banque [Flaticon](https://www.flaticon.com/) (catégorie « free icons ») est la source de référence du wiki ; toutes les fiches I-NOVMICRO partagent cette esthétique.
- **Multicolore** dans la palette douce des autres fiches (jaune / rouge / vert / bleu, pas de noir massif).
- **Représente le sujet** : une LED qui éclaire (i01), une note de musique (i07), un thérémine (i08), 3 axes pour l'accéléromètre (i09), un thermomètre (i11), un œuf au plat pour le minuteur à œufs (i14), un dashboard d'analyse de données pour le datalogger (i15).
- **Pas de carte STeaMi dessinée** dessus, pas de texte dessiné dessus (le titre est déjà à côté).
- **Pas d'image générée par IA** : ces images sont reconnaissables (effet « rendu 3D kitsch », polices typographiques génératives, faux composants électroniques) et créent une rupture visuelle avec le reste du wiki.

Pour une nouvelle fiche, télécharger l'icône depuis Flaticon en PNG 512×512 (compte gratuit suffisant ; l'attribution Flaticon n'est requise que dans certains cas, voir [les conditions Flaticon](https://www.flaticon.com/legal/12)), placer dans `site/static/img/ressources/<projet>/<fiche-id>/icone.png`.

## Texte

### Style pédagogique : écrire pour des élèves, pas des ingénieurs

Le wiki s'adresse en priorité à des **élèves de collège et lycée**, dont seule une fraction a déjà la fibre programmation. La fiche doit accrocher tout le monde, et pas seulement ceux qui aiment déjà ça. Deux questions à se poser à chaque section :

1. **Un élève qui n'aime pas le code, qui est là par obligation, va-t-il trouver une raison de continuer après ce paragraphe ?**
2. **L'élément technique présenté répond-il à une question que l'élève s'est déjà posée, ou est-ce moi qui décide qu'il devrait se la poser ?**

Si la réponse à la première est « non » ou si la réponse à la seconde est « c'est moi qui décide », il faut reformuler.

**Principe directeur** : la technique pour la technique n'est jamais une fin en soi, c'est un moyen pour arriver à un résultat dont l'intérêt ne se mesure que par son utilité pour autrui. Une boucle non bloquante n'a aucune valeur en soi ; elle prend sa valeur dès qu'elle permet de cuisiner un œuf, de chronométrer un sprint ou de jouer à Time's Up.

#### Ouverture concrète avant concept abstrait

La section « De quoi parle-t-on ? » d'une fiche commence par **deux à quatre situations concrètes** que l'élève reconnaît dans sa vie quotidienne, avant d'introduire le concept central :

| À éviter                                                                                                                                                             | À préférer                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _« Un minuteur cache trois questions de programmation : comment mesurer du temps précisément ? comment afficher une progression ? comment déclencher une alarme ? »_ | _« Tu connais ces petits minuteurs en plastique en forme d'œuf qu'on trouve dans certaines cuisines ? Sans lui le drame est garanti : œuf trop cuit, blanc caoutchouteux, jaune sec et farineux. »_ |
| _« Un capteur mesure une grandeur physique et la convertit en valeur numérique. »_                                                                                   | _« Tu veux savoir comment évolue la température de ton frigo entre deux ouvertures de porte ? Si la classe est plus chaude le matin ou l'après-midi ? »_                                            |

#### Référencer la culture pop, la cuisine, la vie courante

Quand on illustre un concept ou qu'on liste des « usages », piocher dans **les références qui parlent aux ados** plutôt que dans la doc technique. La section « Pour s'inspirer » d'un Aller plus loin peut citer cuisine (Top Chef), espace (SpaceX), cinéma (Mission Impossible), gaming (speedrun Mario), jeu de société (Time's Up), productivité (Pomodoro), inclusion (Time Timer). Un élève doit pouvoir trouver au moins un angle qui le branche dans chaque liste.

### Mise en forme

- Justifié (CSS global)
- Titres numérotés de manière homogène (Partie 1, 2, 3...)
- Pas de bold dans les headings
- `--` dans les titres → `:` + majuscule après (règle wiki globale)
- Listes avec deux-points → premier élément en gras : `- **Label** : description`
- Footer Erasmus+ en bas de chaque fiche concernée
- Gras pour : "Contexte de la séquence" et "Objectifs d'apprentissage"

### URLs affichées telles quelles : laisser nues

Pour afficher une URL en clair (sans texte de remplacement), l'écrire **nue** plutôt que de la doubler en `[url](url)`. Docusaurus 3 (via GFM, cf. [guide de migration v3](https://docusaurus.io/fr/docs/migration/v3)) détecte automatiquement les URLs nues et les transforme en liens cliquables ; le rendu HTML est identique à `[url](url)`.

Avantages :

- URL écrite une seule fois (pas de risque de divergence entre texte affiché et cible),
- source plus lisible,
- lychee (le vérificateur de liens) ne risque plus de compter la même URL deux fois.

| À éviter                                       | À préférer             |
| ---------------------------------------------- | ---------------------- |
| `[https://example.com](https://example.com)`   | `https://example.com`  |
| `[https://example.com/](https://example.com/)` | `https://example.com/` |

**Ne pas utiliser** la syntaxe CommonMark `<https://example.com>` : elle casse la compilation MDX dès que l'URL contient un chemin (Docusaurus 3 lit le `<` comme début de balise JSX).

Quand l'URL a un **texte de remplacement** (lien hypertexte classique), la forme `[texte](url)` reste évidemment la bonne : `[la documentation officielle](https://example.com)`.

Détection des occurrences à corriger :

```bash
grep -rE '\[https?://[^\]]+\]\(https?://[^)]+\)' site/docs/
```

### Registre

**Vouvoiement** (_« vous »_) dans toute la fiche, pas de tutoiement. Ce choix laisse à l'enseignant·e le choix du registre à utiliser avec sa classe : une fiche tutoyante imposerait le tutoiement à toute la classe ; une fiche vouvoyante peut être lue puis reformulée par l'enseignant·e.

Préférer aussi l'infinitif ou les tournures impersonnelles quand le contexte s'y prête (instructions techniques, étapes à suivre), ce qui évite la question du registre :

- _« Brancher la carte à l'ordinateur. »_ (infinitif)
- _« On peut vérifier dans le REPL que... »_ (impersonnel)
- _« Si vous utilisez Linux... »_ (vouvoiement quand on s'adresse directement)

### Vocabulaire

**Principe général** : vocabulaire le moins technique possible. Chaque terme technique conservé est glosé à sa première mention, par exemple _« MicroPython, une version de Python adaptée aux cartes électroniques »_ à la première occurrence dans la fiche.

**À éviter** :

- _« firmware »_ : utiliser _« MicroPython »_ directement, ou _« le programme installé sur la carte »_, ou _« le logiciel embarqué »_.
- Les superlatifs vides (_« très puissant »_, _« atout fort »_, _« simplifie radicalement »_) : remplacer par une description factuelle de ce que la fonctionnalité fait.
- Le registre familier (_« beaucoup de soucis »_, _« toute seule »_) : neutraliser.
- _« chaîne de compilation »_, _« liaison série »_ : préférer respectivement _« plusieurs logiciels à installer »_ et _« communication entre l'éditeur et la carte »_.

### Métaphores plutôt que jargon

Quand un concept technique est central mais opaque pour la cible, introduire une **métaphore** avant le terme technique, jamais l'inverse. Exemples installés dans le wiki :

- **Framebuffer** : _« On peut imaginer l'écran de la STeaMi comme un tableau noir caché derrière un voile. Les fonctions text(), clear()... dessinent sur le tableau, mais le voile reste en place tant qu'on n'a pas appelé `screen.show()`. À ce moment-là, le voile tombe et tout ce qu'on a dessiné apparaît d'un coup. »_
- **REPL** : _« une fenêtre de dialogue où l'on tape une instruction et la carte y répond immédiatement »_
- **DAPLink** : _« la STeaMi est livrée avec un mode "clé USB" préinstallé »_ (le nom DAPLink lui-même n'a pas besoin d'apparaître).

Le principe : **on part de ce que voit l'élève, on introduit le mot technique après pour le nommer**, jamais avant.

### Objectifs d'apprentissage

Format obligatoire : **« À la fin de cette activité, l'élève sera capable de... »** suivi d'une liste de 4 à 6 puces, chacune commençant par un **verbe d'action observable** au début (en gras), et orientée **usage** plutôt que **technique**.

Verbes d'action recommandés, par registre :

| Registre                   | Verbes                                                                    |
| -------------------------- | ------------------------------------------------------------------------- |
| Connaissance / restitution | **Citer**, **Définir**, **Décrire**, **Expliquer**                        |
| Compréhension / lien       | **Faire le lien**, **Établir une relation**, **Comparer**, **Distinguer** |
| Application                | **Construire**, **Faire dialoguer**, **Lire**, **Mesurer**, **Détecter**  |
| Analyse                    | **Interpréter**, **Reconnaître**, **Identifier une variation**            |
| Création / transfert       | **Détourner**, **Imaginer**, **Inventer**, **Adapter**                    |

Comparatif de formulation :

| À éviter                                                                                      | À préférer                                                                                                                                                                                          |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _« Comprendre la différence entre une temporisation bloquante et une boucle non bloquante. »_ | _« Faire tourner un programme qui reste vivant pendant l'attente, plutôt qu'un programme endormi qui ne se réveille qu'à la fin. »_                                                                 |
| _« Lire plusieurs capteurs environnementaux en MicroPython. »_                                | _« Mener une vraie expérience scientifique du début à la fin : choisir une question, enregistrer les données, ouvrir le fichier sur l'ordinateur, et tirer une conclusion à partir d'une courbe. »_ |

Au moins un objectif doit ouvrir sur la **transposition à d'autres usages** (« imaginer », « détourner »), pour signaler à l'élève qu'on n'apprend pas une technique isolée mais un patron adaptable.

### Section Aller plus loin : Pour comprendre / Pour s'inspirer

Toute fiche se termine par une section **`## Aller plus loin`** structurée en deux sous-sections obligatoires :

```md
## Aller plus loin

### Pour comprendre

- Liens qui nourrissent la curiosité sur le **sujet de fond** (histoire, physique, biologie, psychologie...).
  Pas de documentation technique d'implémentation ici.

### Pour s'inspirer

- Projets, références culturelles, démarches citoyennes qui illustrent le concept appliqué « en vrai ».
  Couvrir plusieurs angles (culture pop, sciences, art, sport, métiers) pour que chaque élève trouve un point d'entrée.
```

Règles :

- **« Pour comprendre »** est non-technique. Pas de doc MicroPython, pas de doc librairie. Privilégier Wikipédia, CNRS Journal, articles de vulgarisation, sites de musées scientifiques. Pour un sujet « datalogger », mieux vaut citer _l'histoire des marins du 19e siècle qui notaient température et pression à la main_ que la doc `time.ticks_ms()`.
- **« Pour s'inspirer »** mélange pop culture et démarche citoyenne. Cible explicite : un élève doit trouver au moins un lien qui le branche, peu importe ses centres d'intérêt. Citer 4 à 8 entrées.
- **Crosslinks internes** : citer largement les autres fiches du wiki (`/ressources/...`) qui couvrent un angle complémentaire. Une fiche datalogger renvoie vers les fiches SteamCity (qualité de l'air, bruit, isolation) ; une fiche musique renvoie vers les fiches d'autres instruments ; etc.

### Caractères à éviter

**Ne pas utiliser de caractères de ponctuation typographique** (em-dash, en-dash, ellipsis Unicode). Ces caractères créent une friction d'édition (impossibles à taper directement sur AZERTY standard) et, dans le cas du _em-dash_ notamment, sont aujourd'hui perçus comme un signal de texte généré par IA, ce qu'on veut explicitement éviter sur un wiki pédagogique.

| À éviter     | Pourquoi                         | À utiliser à la place                  |
| ------------ | -------------------------------- | -------------------------------------- |
| em-dash `—`  | non accessible clavier, perçu IA | `:`, `.`, `-` ou `,` selon le contexte |
| en-dash `–`  | idem                             | tiret simple `-`                       |
| ellipses `…` | idem                             | `...` (trois points)                   |

Pour repérer les occurrences dans une fiche :

```bash
grep -n "—\|–\|…" site/docs/<projet>/<fiche>.md
```

**Autorisés** : les **symboles scientifiques et techniques** (`Ω` pour les Ohms, `°C` pour les degrés, `≈` pour les approximations, `∥` pour le parallèle en électricité, `µ` pour micro), les **flèches** (`→`, `↑`, `↓`, `←`) quand elles structurent visuellement une explication, les **icônes UI** quand elles reproduisent un bouton de l'interface (`▶` pour Run, etc.), le **point médian `·`** de l'écriture inclusive (`enseignant·e`, `élève·s`), et les **émojis** avec parcimonie. Ces caractères apportent une valeur sémantique ou pédagogique qui justifie le copier-coller au moment où on en a besoin.

**Apostrophes typographiques** : tolérées. La plupart des éditeurs font l'auto-substitution `'` (ASCII U+0027) en `’` (typographique U+2019) sans intervention. Si vous préférez forcer l'apostrophe droite ASCII, c'est aussi accepté ; la cohérence à l'intérieur d'une fiche compte plus que le choix.

**Exception temporaire** : le nom du projet `I-Novmicro #2 — Action EXAO` contient un em-dash et est référencé tel quel dans les footers des fiches portées et dans `site/src/data/projects.ts`. Le renommage est tracé dans l'[issue #84](https://github.com/LabAixBidouille/wikilab/issues/84) et sera propagé partout en une seule fois.

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
- `durationMinutes` (max 240, au-delà la fiche est trop longue)
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

## Code MicroPython sur STeaMi

Conventions stabilisées au fil des premières fiches du projet [I-Novmicro #2 — Action EXAO](https://github.com/LabAixBidouille/wikilab/issues/2). À appliquer à toutes les fiches qui contiennent du code MicroPython pour la carte STeaMi.

### Tableau du header

Cinq colonnes : `| Projet | Durée | Difficulté | Âge | Logiciel STeaMi testé |`.

```md
| Projet        | Durée  | Difficulté | Âge       | Logiciel STeaMi testé |
| ------------- | ------ | ---------- | --------- | --------------------- |
| I-Novmicro #2 | 35 min | Débutant   | 11-99 ans | 0.23.1                |
```

La colonne _Logiciel STeaMi testé_ contient le numéro de version du fichier `steami-micropython-firmware-vX.Y.Z.hex` téléchargé depuis [les releases du firmware](https://github.com/steamicc/micropython-steami-lib/releases). Le label _« Logiciel STeaMi »_ évite _« firmware »_ (banni du vocabulaire des fiches, cf. [Vocabulaire](#vocabulaire)), _« MicroPython »_ (qui prêterait à confusion avec le `v1.XX.X` upstream affiché dans le prompt du REPL), et _« Version STeaMi »_ (qui prêterait à confusion avec la version matérielle V1 micro-USB / V2 USB-C).

### Câble USB dans la liste matériel

Deux versions de la carte cohabitent dans les classes (V1 micro-USB, V2 USB-C). Couvrir les deux :

```md
- 1 câble USB de données (micro-USB pour la STeaMi V1, USB-C pour la STeaMi V2). Attention : un câble qui ne sert qu'à charger un téléphone ne fonctionnera pas.
```

### Version du firmware en commentaire du code

Chaque bloc de code MicroPython commence par un commentaire qui annonce la version du logiciel STeaMi avec laquelle le code a été testé :

```python
# Testée avec firmware STeaMi 0.23.1
#
from machine import Pin
# ...
```

(Le mot _firmware_ est toléré ici dans un commentaire de code parce qu'il s'adresse aux personnes qui modifient le code, pas à celles qui lisent la fiche.)

### Noms de broches parlants

Utiliser les alias exposés par le firmware MicroPython STeaMi, pas la nomenclature interne STMicroelectronics (`PC12`, `PA7`...). Référence : [wiki STeaMi, page signals](https://wiki.steami.cc/docs/hardware/pin-mapping/signals).

Quelques noms parlants courants :

| Composant            | Alias                                               |
| -------------------- | --------------------------------------------------- |
| LED RGB utilisateur  | `LED_RED`, `LED_GREEN`, `LED_BLUE`                  |
| Boutons GPIO directs | `A_BUTTON`, `B_BUTTON`, `MENU_BUTTON`               |
| Écran OLED (SPI)     | `DATA_COMMAND_DISPLAY`, `RST_DISPLAY`, `CS_DISPLAY` |
| Buzzer / Speaker     | `SPEAKER`                                           |

Pour les **boutons directionnels** (`UP_BUTTON`, `DOWN_BUTTON`, `LEFT_BUTTON`, `RIGHT_BUTTON`), attention : ils passent par un expandeur GPIO (`MCP23009`) sur le bus I2C interne, **pas** par des broches directes. Ils ne se lisent donc pas avec `Pin('UP_BUTTON', Pin.IN)` mais via le driver `mcp23009e` du repo `micropython-steami-lib`.

### Boutons : pas de `Pin.PULL_UP`

Les boutons utilisateurs ont des **résistances pull-up externes** (4,7 kΩ) câblées sur la carte. Ne pas activer la pull-up interne dans le code :

```python
btn_a = Pin('A_BUTTON', Pin.IN)              # ← correct
btn_a = Pin('A_BUTTON', Pin.IN, Pin.PULL_UP) # ← redondant, à éviter
```

Activer la pull-up interne en plus est inutile électriquement (40 kΩ ∥ 4,7 kΩ ≈ 4,2 kΩ, négligeable) et pédagogiquement contre-productif : ça suggère qu'il faut la pull-up dans le code alors que la pull-up est physique.

### Logique LED : normale

Les LEDs utilisateurs (RGB sur PC10/PC11/PC12) sont en logique **normale** : `value(1)` allume, `value(0)` éteint, `.on()` et `.off()` font ce qu'on attend. **Ne pas écrire** _« active basse »_, c'est faux selon les tests officiels du firmware.

### `sleep_ms` plutôt que `sleep()`

Utiliser `sleep_ms` (millisecondes entières) plutôt que `sleep` (secondes flottantes) :

```python
from time import sleep_ms
sleep_ms(100)    # idiome MicroPython, économe en RAM
```

Plutôt que :

```python
from time import sleep
sleep(0.1)       # style CPython, à éviter
```

### Bloc d'initialisation factorisé

Quand plusieurs blocs de code se suivent dans une même fiche (par exemple un programme principal en Étape 2 puis plusieurs défis en Étape 3), factoriser le bloc d'initialisation en début de section et y faire référence depuis les suivants. Exemple sur la fiche écran OLED ([i17-texte-oled](site/docs/inovmicro-exao/i17-texte-oled.md)) :

```python
# Bloc d'initialisation commun à tous les défis ci-dessous.
import ssd1327
from machine import SPI, Pin
from steami_screen import Screen, SSD1327Display

spi = SPI(1)
dc  = Pin("DATA_COMMAND_DISPLAY")
res = Pin("RST_DISPLAY")
cs  = Pin("CS_DISPLAY")
raw     = ssd1327.WS_OLED_128X128_SPI(spi, dc, res, cs)
display = SSD1327Display(raw)
screen  = Screen(display)
```

### Identifiants Python en français

Les identifiants Python (variables, fonctions, paramètres) sont en **français ASCII** : pas d'accent (les identifiants Python ne supportent les accents que depuis 3.0, et la portabilité est meilleure sans), mais en français explicite plutôt qu'en anglais ou en abréviation.

Tableau de renommage standard appliqué dans toutes les fiches I-NOVMICRO :

| Domaine                        | Anglais / abrégé                                  | Français explicite                                                                |
| ------------------------------ | ------------------------------------------------- | --------------------------------------------------------------------------------- |
| Écran OLED                     | `screen`                                          | `ecran`                                                                           |
| Écran OLED (driver bas niveau) | `raw_display`                                     | `oled_brut`                                                                       |
| Écran OLED (adaptateur)        | `display`                                         | `pilote_oled`                                                                     |
| Buzzer (variable)              | `SPEAKER` (variable, distinct du nom de broche)   | `buzzer`                                                                          |
| Capteurs                       | `pads`, `hts`, `tof`, `imu`                       | `capteur_pads`, `capteur_hts`, `capteur_distance`, `accelerometre`                |
| Boutons (variables)            | `A_BUTTON`, `B_BUTTON`, `MENU_BUTTON` (variables) | `bouton_a`, `bouton_b`, `bouton_menu`                                             |
| Broches d'initialisation       | `dc`, `res`, `cs`                                 | `broche_dc`, `broche_reset`, `broche_cs`                                          |
| Fonction de son                | `tone(pin, freq, duration_ms)`                    | `jouer_note(broche, frequence, duree_ms)`                                         |
| Variables son                  | `period_us`, `half_period`, `end_time`            | `periode_us`, `demi_periode`, `fin`                                               |
| Mesures                        | `ax, ay, az`                                      | `acceleration_x, acceleration_y, acceleration_z`                                  |
| Mesures (état précédent)       | `prev_ax, prev_ay, prev_az`                       | `acceleration_x_precedente, acceleration_y_precedente, acceleration_z_precedente` |
| Norme vectorielle              | `magnitude`                                       | `intensite`                                                                       |
| Fichier ouvert                 | `f` (dans `with open`)                            | `fichier`                                                                         |
| Pourcentage                    | `pct`                                             | `pourcent`                                                                        |
| Anglicismes divers             | `clamp`, `is_active`                              | `valeur_bornee`, `alarme_armee` (préfixer par le sujet, pas par `is_`)            |

**Constantes en majuscules** restent dans le même style : `DO_4 = 262`, `NOIRE = 500`, `SEUIL_MOUVEMENT = 0.3`, `DISTANCE_ALERTE = 200`, `INTERVALLE_MS = 10_000`, etc.

**Noms de broches firmware** (`"A_BUTTON"`, `"SPEAKER"`, `"MENU_BUTTON"`, `"DATA_COMMAND_DISPLAY"`, etc.) restent en anglais : ce sont des constantes du firmware STeaMi, on ne les renomme pas. On renomme seulement la **variable Python** qui contient l'objet `Pin` correspondant.

**Affichage écran OLED** : la police embarquée ne supporte pas tous les caractères accentués ni le symbole `°`. Pour les chaînes affichées sur l'écran (`ecran.value(...)`, `ecran.title(...)`, etc.), utiliser de l'**ASCII pur** (`"Temperature"`, `"C"`, `"PAUSE"`), avec si besoin un callout `:::tip` expliquant le choix.

**Cspell** : les identifiants ASCII français peuvent être flaggés comme « unknown words ». Quand un nouvel identifiant apparaît dans une fiche (par exemple `intensite`, `armee`, `decompte`), l'ajouter au dictionnaire `.cspell/wikilab.txt`. Si l'identifiant existe **aussi** comme `flagWord` (par exemple `accelerometre`, `ecran`), retirer cette entrée des `flagWords` dans `cspell.json` pour permettre l'usage en code Python.

### Bloc REPL avec avertissement sur `>>>`

Les sessions REPL avec prompts `>>>` doivent être précédées d'un avertissement explicite pour la cible élève, qui sinon recopie les chevrons dans l'éditeur :

> _« Les `>>>` ci-dessous sont le prompt affiché par MicroPython dans la console pour indiquer qu'il attend une commande, ne les tapez pas, écrivez seulement ce qui suit. »_

Garder la fence ` ```python ` (pas `pycon`, qui n'est pas dans les `additionalLanguages` de la config Prism du site).

## Fiches indépendantes de l'éditeur

### Convention de nommage des fiches I-NOVMICRO

Deux préfixes pour distinguer les deux audiences :

- **`tNN-`** (`t` comme _tutoriel_) : fiches enseignant·es. `t01-t05` couvrent les éditeurs (éditeur web STeaMi, Mu, Thonny, VS Code, Vittascience), `t06` les bases du langage, `t07` les capteurs intégrés.
- **`iNN-`** : fiches élèves portées de Let's STEAM. **Le numéro `iNN` colle au numéro `r1asNN` de la fiche Let's STEAM source**, ce qui rend la correspondance immédiate (`i04-capteur-lumiere` ↔ `r1as04-capteur-lumiere`, `i10-texte-oled` ↔ `r1as10-ecran-oled`, etc.). 15 fiches portées au total (`i01` à `i15`).

Le slug après le numéro est adapté au contenu I-NOVMICRO (qui peut différer du nom Let's STEAM si la pédagogie a évolué).

### Fiches de capteur / actionneur / activité : pas d'éditeur imposé

Les fiches de **capteur / actionneur / activité** (slugs `iNN-`) ne doivent pas être liées à un éditeur Python spécifique. Seules les fiches enseignant·es `t01-t05` (prise en main des éditeurs eux-mêmes) sont éditeur-spécifiques. Toutes les autres fiches sont écrites de façon à fonctionner avec n'importe quel IDE compatible MicroPython.

Patterns à adopter :

| À éviter                                     | À préférer                                                                                                                                                                                                                    |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _« Thonny installé »_ dans la liste matériel | _« Un IDE MicroPython installé. Voir la fiche [Thonny : prise en main de MicroPython](/ressources/inovmicro-exao/t03-decouverte-thonny) pour la mise en place, tout autre éditeur compatible MicroPython fonctionne aussi. »_ |
| _« le panneau Shell de Thonny »_             | _« la console MicroPython »_                                                                                                                                                                                                  |
| _« bouton Run (▶) ou F5 »_ (sans précision)  | _« lancer le programme depuis votre IDE (typiquement bouton Run ▶ ou F5) »_                                                                                                                                                   |

Si une fonctionnalité spécifique à un éditeur mérite d'être mentionnée (par exemple le Plotter de Thonny dans la fiche capteur de lumière), l'encadrer dans un callout dont le titre dit explicitement _« (spécifique à Thonny) »_.

### Une fiche STeaMi se suffit à elle-même

Pour les fiches portées depuis Let's STEAM (slugs `i01` à `i15`), **rédiger la fiche STeaMi comme si Let's STEAM n'existait pas** :

- Pas de comparaison à la fiche d'origine dans le corps (_« contrairement à la fiche Let's STEAM qui demandait... »_, _« on passe des blocs MakeCode à des fonctions Python »_, etc.).
- Pas de mention de l'éditeur d'origine (MakeCode) ni du matériel d'origine (Adafruit, breadboard externe...).
- La personne qui lit la fiche n'a pas besoin de connaître la fiche d'origine pour comprendre.

L'**attribution CC BY-SA 4.0** reste obligatoire **dans le footer** :

```md
_Cette fiche fait partie du projet [I-Novmicro #2 — Action EXAO](/projets/inovmicro-exao). Adaptée du projet [Let's STEAM](/projets/lets-steam) (fiche [`r1asNN-nom`](/ressources/lets-steam/r1asNN-nom)) sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._
```

### Lien croisé réciproque côté Let's STEAM

Toute fiche Let's STEAM qui a une version portée dans I-NOVMICRO doit pointer vers son port via un callout `:::info[Version STeaMi / MicroPython]` placé juste après le séparateur `---` de fin de header, avant la première section de contenu :

```md
:::info[Version STeaMi / MicroPython]

Cette activité existe aussi adaptée pour la carte STeaMi en MicroPython : [Titre lisible (I-Novmicro)](/ressources/inovmicro-exao/iNN-slug).

:::
```

La réciprocité (footer côté I-NOVMICRO + callout côté Let's STEAM) est vérifiée par `npm run lint:crosslinks` (script [`site/scripts/lint-crosslinks.mjs`](site/scripts/lint-crosslinks.mjs)), bloquant en CI.

## Captures vidéo / GIFs

Une capture animée est parfois plus parlante qu'une suite d'images statiques, notamment pour les fiches éditeurs (glisser-déposer du firmware sur la clé USB, séquence dans un IDE, animation d'un programme sur la carte).

### Quand utiliser un GIF

- Manipulation continue qui s'enchaîne (drag-and-drop, ouverture menu → sélection → résultat).
- Phénomène temporel (LED qui clignote, animation OLED).

Préférer des captures statiques quand l'étape est ponctuelle (un seul clic, un seul écran).

### Format : WebM par défaut, GIF en repli

**Préférer le WebM** (codec VP9 ou AV1) au GIF :

- Compression 5 à 10× supérieure à GIF pour une qualité visuelle équivalente.
- Couleurs 24 bits (vs. 256 indexées pour GIF), pas de banding dans les gradients.
- Lecture native dans tous les navigateurs modernes. Docusaurus 3 (MDX) supporte la balise `<video>` JSX inline.

**GIF en repli** quand :

- L'outil de capture ne sort que du GIF et qu'on n'a pas envie de passer par `ffmpeg` pour la conversion.
- On veut un aperçu qui marche aussi dans la prévisualisation Markdown de GitHub (qui ne lit pas les `<video>` JSX).
- Le clip est très court et la différence de taille est négligeable.

| Critère    | Cible                                                                |
| ---------- | -------------------------------------------------------------------- |
| Dimensions | 1200 px de large maximum                                             |
| Durée      | 5–15 secondes                                                        |
| Frame rate | 10–15 fps (captures d'écran) ; 30 fps réservé aux animations fluides |
| Taille     | viser < 500 ko en WebM, < 2 Mo en GIF                                |
| Format     | WebM (par défaut), GIF (repli)                                       |

### Intégration dans une fiche

**WebM** : balise `<video>` JSX, auto-play silencieux en boucle pour un comportement proche d'un GIF :

```jsx
<video
  src="/img/ressources/inovmicro-exao/t01-editeur-web-steami/01-flash-firmware.webm"
  autoPlay
  loop
  muted
  playsInline
  style={{ maxWidth: '100%', height: 'auto' }}
/>
```

**GIF** : syntaxe Markdown standard.

```md
![Flash du firmware par glisser-déposer](/img/ressources/inovmicro-exao/t01-editeur-web-steami/01-flash-firmware.gif)
```

### Outils recommandés par OS

- **Linux** : [Peek](https://github.com/phw/peek) — open source, sortie GIF ou WebM, sans inscription. Installation `sudo apt install peek` ou via Flatpak.
- **Windows** : [ShareX](https://getsharex.com/) — open source, supporte WebM directement (via ffmpeg embarqué) en plus de GIF/MP4. Capture région ou fenêtre via raccourci clavier, sortie WebM en un clic. Alternative pour les flux GIF-centrés (éditeur de frames, optimisation gifsicle native) : [ScreenToGif](https://www.screentogif.com/) — la conversion en WebM se fait alors via `ffmpeg` après coup.
- **macOS** : capture native via `Cmd+Shift+5` → _Enregistrer une partie de l'écran_ (produit un `.mov`) puis conversion avec `ffmpeg`. Alternative : [Kap](https://getkap.co/) — open source, export direct en GIF, MP4 ou WebM.
- **Terminal uniquement** : [asciinema](https://asciinema.org/) — capture du texte (pas des pixels), beaucoup plus léger qu'un GIF ou un WebM. Idéal pour un REPL ou un workflow `mpremote`. Conversion en GIF possible via [agg](https://github.com/asciinema/agg).

### Post-traitement

Convertir un MOV/MP4 en WebM optimisé (codec VP9, CRF 35) :

```bash
ffmpeg -i input.mov -c:v libvpx-vp9 -crf 35 -b:v 0 -an \
  -vf "fps=12,scale=1200:-1:flags=lanczos" output.webm
```

Convertir un MOV/MP4 en GIF (repli) :

```bash
ffmpeg -i input.mov -vf "fps=12,scale=1200:-1:flags=lanczos" -loop 0 output.gif
```

Réduire un GIF existant :

```bash
gifsicle -O3 --colors 128 --lossy=80 input.gif -o output.gif
```

Note : le workflow [`optimize-images.yml`](.github/workflows/optimize-images.yml) recompresse automatiquement les GIFs ajoutés en PR (gifsicle niveau 3). Pas de traitement automatique pour les WebM, qui doivent donc être exportés correctement dès la capture.

### Exemple de référence

La fiche [Thonny : prise en main de MicroPython](site/docs/inovmicro-exao/t03-decouverte-thonny.md) intègre un GIF (`02-drag-drop-firmware.gif`, 334 ko, 1920×1080, ~6 s) qui montre la séquence de flash du firmware par glisser-déposer. C'est un exemple **historique** (avant cette convention) ; pour les prochaines fiches éditeurs (t01, t02, t04, t05), produire du WebM via `<video>`.

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
| Magnetics        | `#094869`          |
| I-Novmicro #2    | `#8a6e18`          |
| Projets du LAB   | (variable)         |

À utiliser pour : icône SVG inline du header (avec opacités 0.1/0.25/1.0), code couleur de l'entrée projet dans [`site/src/data/projects.ts`](site/src/data/projects.ts).

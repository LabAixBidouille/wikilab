# Conventions de contenu Wiki@LAB

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
12. [Code MicroPython sur STeaMi](#code-micropython-sur-steami)
13. [Fiches éditeur-agnostiques](#fiches-éditeur-agnostiques)
14. [Couleurs des projets](#couleurs-des-projets)

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

## Texte

### Mise en forme

- Justifié (CSS global)
- Titres numérotés de manière homogène (Partie 1, 2, 3...)
- Pas de bold dans les headings
- `--` dans les titres → `:` + majuscule après (règle wiki globale)
- Listes avec deux-points → premier élément en gras : `- **Label** : description`
- Footer Erasmus+ en bas de chaque fiche concernée
- Gras pour : "Contexte de la séquence" et "Objectifs d'apprentissage"

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

**Autorisés** : les **symboles scientifiques et techniques** (`Ω` pour les Ohms, `°C` pour les degrés, `≈` pour les approximations, `∥` pour le parallèle en électricité, `µ` pour micro), les **flèches** (`→`, `↑`, `↓`, `←`) quand elles structurent visuellement une explication, et les **émojis** avec parcimonie. Ces caractères apportent une valeur sémantique ou pédagogique qui justifie le copier-coller au moment où on en a besoin.

**Apostrophes typographiques** : tolérées. La plupart des éditeurs font l'auto-substitution `'` (ASCII U+0027) en `'` (typographique U+2019) sans intervention. Si vous préférez forcer l'apostrophe droite ASCII, c'est aussi accepté ; la cohérence à l'intérieur d'une fiche compte plus que le choix.

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

(Le mot _firmware_ est toléré ici dans un commentaire de code parce qu'il s'adresse au·à la contributeur·rice qui modifie le code, pas au lecteur·rice de la fiche.)

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

### Bloc REPL avec avertissement sur `>>>`

Les sessions REPL avec prompts `>>>` doivent être précédées d'un avertissement explicite pour la cible élève, qui sinon recopie les chevrons dans l'éditeur :

> _« Les `>>>` ci-dessous sont le prompt affiché par MicroPython dans la console pour indiquer qu'il attend une commande, ne les tapez pas, écrivez seulement ce qui suit. »_

Garder la fence ` ```python ` (pas `pycon`, qui n'est pas dans les `additionalLanguages` de la config Prism du site).

## Fiches éditeur-agnostiques

Les fiches de **capteur / actionneur / activité** ne doivent pas être liées à un éditeur Python spécifique. Seules les fiches de prise en main des éditeurs eux-mêmes (i01 à i05 du projet I-Novmicro #2 : éditeur web STeaMi, Mu, Thonny, VS Code, Vittascience) sont éditeur-spécifiques. Toutes les autres fiches sont écrites de façon à fonctionner avec n'importe quel IDE compatible MicroPython.

Patterns à adopter :

| À éviter                                     | À préférer                                                                                                                                                                                                                    |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _« Thonny installé »_ dans la liste matériel | _« Un IDE MicroPython installé. Voir la fiche [Thonny : prise en main de MicroPython](/ressources/inovmicro-exao/i03-decouverte-thonny) pour la mise en place, tout autre éditeur compatible MicroPython fonctionne aussi. »_ |
| _« le panneau Shell de Thonny »_             | _« la console MicroPython »_                                                                                                                                                                                                  |
| _« bouton Run (▶) ou F5 »_ (sans précision)  | _« lancer le programme depuis votre IDE (typiquement bouton Run ▶ ou F5) »_                                                                                                                                                   |

Si une fonctionnalité spécifique à un éditeur mérite d'être mentionnée (par exemple le Plotter de Thonny dans la fiche capteur de lumière), l'encadrer dans un callout dont le titre dit explicitement _« (spécifique à Thonny) »_.

### Une fiche STeaMi se suffit à elle-même

Pour les fiches portées depuis Let's STEAM (slugs `i08` à `i22`), **rédiger la fiche STeaMi comme si Let's STEAM n'existait pas** :

- Pas de comparaison à la fiche d'origine dans le corps (_« contrairement à la fiche Let's STEAM qui demandait... »_, _« on passe des blocs MakeCode à des fonctions Python »_, etc.).
- Pas de mention de l'éditeur d'origine (MakeCode) ni du matériel d'origine (Adafruit, breadboard externe...).
- Le lecteur·rice n'a pas besoin de connaître la fiche d'origine pour comprendre.

L'**attribution CC BY-SA 4.0** reste obligatoire **dans le footer** :

```md
_Cette fiche fait partie du projet [I-Novmicro #2 — Action EXAO](/projets/inovmicro-exao). Adaptée du projet [Let's STEAM](/projets/lets-steam) (fiche [`r1asXX-nom`](/ressources/lets-steam/r1asXX-nom)) sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._
```

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

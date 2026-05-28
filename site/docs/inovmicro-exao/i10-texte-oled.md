---
id: i10-texte-oled
title: Afficher du texte sur l'écran OLED
sidebar_label: "Écran OLED"
sidebar_position: 17
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>
<div style={{flex: 1}}>
# Afficher du texte sur l'écran OLED

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">SteaMi</span>
  <span className="badge badge--warning">MicroPython</span>
</div>

| Projet        | Durée  | Difficulté | Âge       | Logiciel STeaMi testé |
| ------------- | ------ | ---------- | --------- | -------------------------- |
| I-Novmicro #2 | 60 min | Intermédiaire   | 11-15 ans | 0.23.1                     |

## Matériel et Montage

- 1 carte STeaMi
- 1 câble USB de données (micro-USB pour la STeaMi V1, USB-C pour la STeaMi V2).
- 1 ordinateur sous Windows, macOS ou Linux
- Un IDE compatible MicroPython : Thonny (voir la fiche [Thonny : Prise en main de MicroPython](/ressources/inovmicro-exao/t03-decouverte-thonny)) ou tout autre éditeur compatible (Mu, VS Code, Vittascience, `mpremote`...).

<PdfLink href="/pdf/inovmicro-exao/STeaMi_Ecran.pdf">Télécharger en PDF</PdfLink>

</div>
<img src="/img/ressources/inovmicro-exao/i10-texte-oled/icone.png" alt="Écran OLED de la STeaMi affichant du texte" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />
</div>

---

## De quoi parle-t-on ?

Programmer une carte électronique n'est pas toujours simple, car son fonctionnement reste invisible : contrairement à un programme exécuté sur ordinateur, les **variables** de votre code restent souvent inaccessibles à l'œil. L'écran intégré à la STeaMi permet justement d'**afficher les informations utiles** pour suivre l'état du programme : la valeur d'un capteur, le résultat d'un calcul, l'évolution d'une variable dans le temps.

Cette fiche met en pratique l'affichage de texte sur l'écran OLED 128×128 de la STeaMi, en MicroPython, à l'aide de la bibliothèque haut niveau `steami_screen`.

---

## Objectifs d'apprentissage

- Comprendre comment l'écran s'actualise (notion de **framebuffer**)
- Composer un affichage à l'écran en plaçant texte et symboles aux **points cardinaux** (`N`, `S`, `CENTER`, etc.) ou à des coordonnées précises
- Hiérarchiser l'information affichée avec les raccourcis `screen.title()` et `screen.subtitle()`
- Faire vivre l'écran au rythme du programme pour suivre l'état d'une variable

---

## Étape 1 : Construire

Sur la STeaMi, l'écran est déjà câblé en interne, il n'y a aucun montage externe à réaliser. Le travail de préparation tient en quatre étapes.

### 1. Connecter la carte à l'ordinateur

Brancher la STeaMi avec son câble USB (micro-USB sur la STeaMi V1, USB-C sur la STeaMi V2). Un nouveau lecteur appelé `STEAMI` apparaît sur l'ordinateur. Si l'IDE est déjà configuré (voir la fiche [Thonny : Prise en main de MicroPython](/ressources/inovmicro-exao/t03-decouverte-thonny) si vous démarrez), la console MicroPython doit afficher `>>>`. C'est **l'invite** (parfois appelée « prompt » en anglais) : un signe qui apparaît en début de ligne pour vous dire que la console est prête à recevoir une commande.

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/i10-texte-oled/01-steami-oled-vide.jpeg"
    alt="Carte STeaMi connectée en USB, écran OLED encore éteint"
    style={{maxWidth: '450px', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    La STeaMi prête à recevoir un programme : l'écran OLED est intégré, aucun câblage externe nécessaire.
  </figcaption>
</figure>

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/i10-texte-oled/02-lecteur-steami.png"
    alt="Le lecteur STEAMI apparaît dans l'explorateur de fichiers"
    style={{maxWidth: '100%', height: 'auto'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    Une fois la carte branchée, le lecteur STEAMI apparaît comme un disque amovible.
  </figcaption>
</figure>

### 2. Bibliothèques déjà incluses

Les bibliothèques `ssd1327` (bas niveau) et `steami_screen` (haut niveau) sont déjà incluses dans MicroPython sur la STeaMi : il suffit de les importer, aucune installation préalable.

### 3. Repérer la géométrie de l'écran

L'écran de la STeaMi mesure **128 × 128 pixels**. L'origine `(0, 0)` se situe en haut à gauche, l'axe horizontal va vers la droite, l'axe vertical vers le bas. Tout pixel peut donc être désigné par un couple de coordonnées comprises entre `(0, 0)` et `(127, 127)`.

Pour éviter de calculer chaque coordonnée à la main, la bibliothèque `steami_screen` introduit **neuf ancres** réparties sur l'écran : les quatre points cardinaux (`N`, `S`, `E`, `W`), les quatre diagonales (`NE`, `NW`, `SE`, `SW`) et le centre (`CENTER`). Chaque ancre sert de point de référence autour duquel le texte est aligné.

<figure style={{textAlign: 'center', margin: '1.5rem auto'}}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="280" height="280" role="img" aria-label="Schéma des points cardinaux sur l'écran 128x128">
    <rect x="10" y="10" width="180" height="180" rx="4" fill="none" stroke="#8a6e18" strokeWidth="1.5"/>
    <line x1="10" y1="100" x2="190" y2="100" stroke="#8a6e18" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.4"/>
    <line x1="100" y1="10" x2="100" y2="190" stroke="#8a6e18" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.4"/>
    <text x="100" y="25" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="bold" fill="#8a6e18">"N"</text>
    <text x="100" y="183" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="bold" fill="#8a6e18">"S"</text>
    <text x="22" y="104" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="bold" fill="#8a6e18">"W"</text>
    <text x="178" y="104" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="bold" fill="#8a6e18">"E"</text>
    <text x="28" y="25" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#8a6e18">"NW"</text>
    <text x="172" y="25" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#8a6e18">"NE"</text>
    <text x="28" y="183" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#8a6e18">"SW"</text>
    <text x="172" y="183" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#8a6e18">"SE"</text>
    <text x="100" y="104" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="bold" fill="#8a6e18">"CENTER"</text>
    <text x="100" y="200" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#8a6e18" opacity="0.7">Écran 128 × 128 pixels, origine (0,0) en haut à gauche</text>
  </svg>
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    Les neuf ancres utilisables avec `screen.text(texte, at=...)`.
  </figcaption>
</figure>

| Ancre | Effet |
|---|---|
| `"N"` / `"S"` | Haut / bas de l'écran, centré horizontalement |
| `"E"` / `"W"` | Droite / gauche, centré verticalement |
| `"NE"`, `"NW"`, `"SE"`, `"SW"` | Coins |
| `"CENTER"` | Centre de l'écran |
| `(x, y)` | Coordonnées explicites en pixels (origine en haut à gauche) |

Avec `at="N"`, le texte est aligné en haut et centré horizontalement ; avec `at="E"`, il est aligné à droite et centré verticalement ; avec `at="CENTER"`, il est centré dans les deux directions. Cette logique évite d'avoir à mesurer la largeur d'une chaîne pour la placer correctement.

### 4. Lancer le programme

Le programme principal est donné à l'[Étape 2 : Programmer](#étape-2--programmer) ci-dessous. Copiez-le dans votre IDE.

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/i10-texte-oled/03-ide-micropython-main-py.png"
    alt="IDE MicroPython avec le fichier main.py ouvert, prêt à être téléversé"
    style={{maxWidth: '100%', height: 'auto'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    Le fichier `main.py` prêt à être téléversé sur la carte depuis l'IDE.
  </figcaption>
</figure>

Une fois le code en place, deux manières de le lancer :

- **Test rapide** : lancer le programme depuis l'IDE (typiquement bouton **Run** ▶ ou `F5`). L'écran de la STeaMi affiche « Hello World » en haut, un cœur au centre et une ligne de tirets en bas.
- **Programme persistant** : enregistrer le fichier sous le nom **`main.py`** sur la carte, puis redémarrer (bouton RESET, ou `Ctrl+D` dans la console MicroPython qui réinitialise l'interpréteur). Le programme sera relancé à chaque démarrage de la carte.

Une fois le résultat à l'écran, vous pouvez ensuite faire évoluer le code : modifier le texte affiché, changer la position d'ancrage du cœur, jouer sur les couleurs ou afficher la valeur d'une variable qui évolue dans le temps.

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/i10-texte-oled/04-steami-hello-world.jpeg"
    alt="STeaMi affichant Hello World en haut, un cœur au centre et une ligne de tirets en bas"
    style={{maxWidth: '450px', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    Résultat attendu : titre en haut, cœur au centre, tirets en bas.
  </figcaption>
</figure>

---

## Étape 2 : Programmer

### Code

```python
# Testée avec firmware STeaMi 0.23.1
#
# Affichage de texte sur l'écran OLED 128x128 (SSD1327) intégré à la STeaMi.
# Hello World en haut, cœur au centre, ligne décorative en bas.

import ssd1327
from machine import SPI, Pin
from steami_screen import Screen, SSD1327Display

# Initialisation de l'écran intégré (SSD1327, 128x128)
spi = SPI(1)
dc  = Pin("DATA_COMMAND_DISPLAY")
res = Pin("RST_DISPLAY")
cs  = Pin("CS_DISPLAY")
raw     = ssd1327.WS_OLED_128X128_SPI(spi, dc, res, cs)
display = SSD1327Display(raw)
screen  = Screen(display)

# Affichage
screen.clear()                          # efface l'écran (noir)
screen.title("Hello World")             # texte en haut, centré
screen.text("<3", at="CENTER")          # cœur au centre de l'écran
screen.text("------------", at="S")     # ligne de tirets en bas
screen.show()                           # affiche enfin ce qu'on a préparé sur l'écran
```

### Comment ça fonctionne ?

La fonction **`screen.text(texte, at=..., color=..., scale=...)`** permet d'afficher du texte sans calculer de coordonnées en pixels : il suffit d'indiquer une **ancre cardinale** parmi celles décrites à l'[étape 1, section « Repérer la géométrie de l'écran »](#3-repérer-la-géométrie-de-lécran), ou un couple de coordonnées explicites.

Deux raccourcis pratiques structurent l'affichage : `screen.title()` place un texte en haut en `GRAY`, `screen.subtitle()` un texte en bas en `DARK`. Pas besoin de préciser position ni couleur.

Couleurs disponibles dans `steami_screen` : `BLACK`, `DARK`, `GRAY`, `LIGHT`, `WHITE` (5 niveaux de gris du SSD1327), plus `RED`, `GREEN`, `BLUE`, `YELLOW` (qui dégradent automatiquement en niveaux de gris sur l'écran monochrome).

:::info[Étape importante : `screen.show()`]

On peut imaginer l'écran de la STeaMi comme un tableau noir caché derrière un voile. Les fonctions `text()`, `clear()`, `pixel()`, etc. dessinent sur le tableau, mais le voile reste en place tant qu'on n'a pas appelé `screen.show()`. À ce moment-là, le voile tombe et tout ce qu'on a dessiné apparaît d'un coup.

Techniquement, ce « tableau caché » s'appelle un **framebuffer** : une zone de mémoire dans laquelle on prépare l'image, avant de la transférer vers l'écran.
:::

:::info[API bas niveau]

Si vous avez besoin de coordonnées exactes (par exemple pour une animation pixel par pixel), `steami_screen` expose aussi `screen.pixel()`, `screen.line()`, `screen.rect()` et `screen.circle()`.
:::

---

## Étape 3 : Améliorer

Quatre défis dans l'esprit de la fiche d'origine, à faire dans l'ordre. Chaque défi part du même bloc d'initialisation que l'étape 2, on le rappelle ici une fois pour gagner de la place :

```python
# Bloc d'initialisation commun à tous les défis ci-dessous.
# À placer en haut de chaque main.py.

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

### Défi 1 : Afficher le cœur en grand

<img src="/img/ressources/inovmicro-exao/i10-texte-oled/08-icone-defi-1-coeur.png" alt="Icône agrandissement" style={{float: 'right', width: '80px', height: '80px', marginLeft: '1rem', marginBottom: '0.5rem'}} />

`screen.text()` accepte un paramètre `scale` qui agrandit le texte. Essayer `screen.text("<3", at="CENTER", scale=3)`. Quelle est la limite avant que le texte ne sorte de l'écran ?

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/i10-texte-oled/05-steami-coeur-grand.jpeg"
    alt="STeaMi affichant un cœur agrandi avec scale=3"
    style={{maxWidth: '450px', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    Le cœur agrandi avec scale=3 : chaque pixel du caractère devient un carré de 3×3 pixels.
  </figcaption>
</figure>

### Défi 2 : Animation à La Linea

<img src="/img/ressources/inovmicro-exao/i10-texte-oled/09-icone-defi-2-linea.png" alt="Icône La Linea" style={{float: 'right', width: '80px', height: '80px', marginLeft: '1rem', marginBottom: '0.5rem'}} />

Avec une boucle `while`, créer une animation simple qui fait avancer un personnage minimaliste fait des symboles `|` et `_`. Utiliser `sleep_ms(100)` pour ralentir le mouvement et ne pas oublier d'appeler `screen.clear()` au début de chaque image pour effacer l'écran.

```python
# Testée avec firmware STeaMi 0.23.1
# Le bloc d'initialisation ci-dessus doit précéder ce code.

from time import sleep_ms

x = 0
while True:
    screen.clear()
    screen.text("|_", at=(x, 60))
    screen.show()
    x = (x + 4) % 128
    sleep_ms(100)
```

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/i10-texte-oled/06-steami-animation-linea.gif"
    alt="Animation : un petit personnage |_ traverse l'écran de gauche à droite"
    style={{maxWidth: '450px', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    Le personnage |_ qui traverse l'écran : effacer, dessiner, afficher, attendre, puis recommencer.
  </figcaption>
</figure>

### Défi 3 : État du bouton USER

<img src="/img/ressources/inovmicro-exao/i10-texte-oled/10-icone-defi-3-bouton.png" alt="Icône bouton" style={{float: 'right', width: '80px', height: '80px', marginLeft: '1rem', marginBottom: '0.5rem'}} />

Afficher en temps réel si le bouton A de la STeaMi est pressé ou non, par exemple avec `screen.title("A: ON")` ou `screen.title("A: OFF")`. Que se passe-t-il avec un `sleep_ms(1000)` long dans la boucle ? Comment améliorer la réactivité ? *(Indice : raccourcir le délai. Pour aller plus loin (terminale informatique), explorer la programmation asynchrone avec `uasyncio`.)*

### Défi 4 : Tableau de bord capteurs

<img src="/img/ressources/inovmicro-exao/i10-texte-oled/11-icone-defi-4-dashboard.png" alt="Icône tableau de bord" style={{float: 'right', width: '80px', height: '80px', marginLeft: '1rem', marginBottom: '0.5rem'}} />

Afficher simultanément plusieurs valeurs en utilisant les positions cardinales pour répartir l'information sur l'écran. Voici un squelette qui anime des valeurs simulées, l'objectif ici est de maîtriser la **mise en page**, pas la lecture des capteurs.

```python
# Testée avec firmware STeaMi 0.23.1
# Le bloc d'initialisation ci-dessus doit précéder ce code.

from time import sleep_ms
from math import sin

t = 0
while True:
    # Valeurs simulées, à remplacer par la lecture réelle des capteurs.
    temp = 22 + 3 * sin(t / 5)
    humi = 50 + 10 * sin(t / 7)
    accel_z = sin(t / 3)

    screen.clear()
    screen.title("Capteurs")                     # bandeau haut
    screen.text(f"T:{temp:.1f}", at=(4, 40))     # ligne 1, colonne gauche
    screen.text(f"H:{humi:.0f}%", at=(70, 40))   # ligne 1, colonne droite
    screen.text(f"Z:{accel_z:+.2f}", at=(4, 70)) # ligne 2
    screen.show()

    t += 1
    sleep_ms(500)
```

Une fois la mise en page maîtrisée, brancher de vraies valeurs en lisant les capteurs intégrés (HTS221 pour la température/humidité, ISM330DL pour l'accélération).

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/i10-texte-oled/07-steami-tableau-bord.jpeg"
    alt="STeaMi affichant un tableau de bord avec température, humidité et accélération"
    style={{maxWidth: '450px', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    Tableau de bord : titre en haut, température à gauche, humidité à droite, accélération en bas.
  </figcaption>
</figure>

---

## Aller plus loin

### Pour comprendre

- **[OLED (Wikipedia)](https://fr.wikipedia.org/wiki/Diode_%C3%A9lectroluminescente_organique)** : la technologie d'écran utilisée par la STeaMi. Contrairement à un LCD, chaque pixel émet sa propre lumière (pas de rétro-éclairage), ce qui permet des noirs profonds et une consommation très basse quand peu de pixels sont allumés.
- **[Pixel art (Wikipedia)](https://fr.wikipedia.org/wiki/Pixel_art)** : histoire et esthétique du dessin en pixels, des premiers jeux vidéo aux installations contemporaines. Quand chaque pixel compte, la contrainte devient un style.
- **[Framebuffer (Wikipedia)](https://fr.wikipedia.org/wiki/Tampon_d%27image)** : le « tableau caché » qu'on prépare avant de l'envoyer à l'écran. Concept fondateur du graphisme moderne, présent depuis les GPU jusqu'aux navigateurs web.

### Pour s'inspirer

- **[Jenny Holzer, Survival Series (Centre Pompidou)](https://www.centrepompidou.fr/fr/ressources/oeuvre/c888Bex)** : depuis Times Square en 1982, l'artiste a fait du panneau LED un médium à part entière. Des messages diffusés en lumière, programmés pour défiler, qui interrogent la société.
- **[Pixel Revival : quand l'esthétique 8-bit redéfinit les codes du design graphique (Étapes)](https://www.etapes.com/2025/04/18/pixel-revival-quand-lesthetique-8-bit-redefinit-les-codes-du-design-graphique/)** : comment la contrainte du pixel, autrefois subie, est devenue une esthétique revendiquée dans le design contemporain.
- **[Susan Kare et les icônes du Macintosh](https://fr.wikipedia.org/wiki/Susan_Kare)** : la designer qui a dessiné les premières icônes du Mac en 1984 sur une grille de 16 × 16 pixels. Une démonstration magistrale de ce qu'on peut exprimer avec très peu de pixels.

---

_Cette fiche fait partie du projet [I-Novmicro #2 : Action EXAO](/projets/inovmicro-exao). Adaptée du projet [Let's STEAM](/projets/lets-steam) (fiche [`r1as10-ecran-oled`](/ressources/lets-steam/r1as10-ecran-oled)) sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr). Informations basées sur la [documentation officielle STeaMi](https://wiki.steami.cc/)._


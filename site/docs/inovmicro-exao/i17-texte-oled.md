---
id: i17-texte-oled
title: Afficher du texte sur l'écran OLED
sidebar_label: "Écran OLED"
sidebar_position: 17
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>
<div style={{flex: 1}}>
# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="2" y="5" width="20" height="14" rx="1.5" fill="#8a6e18" opacity="0.1"/><rect x="3.5" y="6.5" width="17" height="11" rx="0.5" fill="#8a6e18" opacity="0.25"/><rect x="5" y="8" width="9" height="1.5" rx="0.2" fill="#8a6e18"/><rect x="5" y="10.5" width="6" height="1.2" rx="0.2" fill="#8a6e18" opacity="0.7"/><rect x="5" y="12.5" width="11" height="1.2" rx="0.2" fill="#8a6e18" opacity="0.7"/><rect x="5" y="14.5" width="5" height="1.2" rx="0.2" fill="#8a6e18" opacity="0.7"/><circle cx="17" cy="11" r="0.6" fill="#8a6e18"/><circle cx="17" cy="13" r="0.6" fill="#8a6e18" opacity="0.6"/><circle cx="17" cy="15" r="0.6" fill="#8a6e18" opacity="0.3"/></svg> AFFICHER DU TEXTE SUR L'ÉCRAN OLED

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">SteaMi</span>
  <span className="badge badge--warning">MicroPython</span>
</div>

| Projet        | Durée  | Difficulté | Âge       | Version MicroPython testée |
| ------------- | ------ | ---------- | --------- | -------------------------- |
| I-Novmicro #2 | 60 min | Intermédiaire   | 11-15 ans | 0.23.1                     |

## Matériel et Montage

- 1 carte STeaMi
- 1 câble USB-C
- 1 ordinateur avec un IDE MicroPython (Thonny, VS Code, `mpremote`…)
- L'écran OLED 128×128 (SSD1327) est **intégré à la carte STeaMi** : aucun câblage n'est nécessaire, contrairement à la fiche Let's STEAM d'origine qui demandait un écran externe Adafruit relié en I²C via un câble QWIIC/STEMMA.

</div>
<img src="/img/ressources/inovmicro-exao/i17-texte-oled/icone.png" alt="Écran OLED de la STeaMi affichant du texte" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />
</div>

---

## De quoi parle-t-on ?

Programmer une carte électronique, c'est parfois travailler dans une « boîte noire » : on ne voit pas ce qui s'y passe. L'écran OLED de la STeaMi permet d'**afficher des informations issues du programme** — un message d'accueil, l'état d'un capteur, la valeur d'une variable — pour rendre visible le comportement de la carte.

Cette fiche reprend l'activité Let's STEAM [R1AS10 — Affichage de texte avec un écran OLED](/ressources/lets-steam/r1as10-ecran-oled) et la porte sur la carte STeaMi en MicroPython, en utilisant la bibliothèque haut niveau `steami_screen`. Côté matériel, on passe d'un écran externe à un écran intégré ; côté logiciel, on passe des blocs MakeCode à des fonctions Python.

---

## Objectifs d'apprentissage

- Connecter la STeaMi à l'ordinateur et y déposer un programme MicroPython
- Comprendre la notion de **framebuffer** et le rôle de `screen.show()` pour transférer le buffer vers l'écran
- Afficher du texte avec `screen.text()` aux **points cardinaux** (`N`, `S`, `CENTER`…) ou à des coordonnées précises
- Utiliser les raccourcis `screen.title()` et `screen.subtitle()` pour structurer l'affichage
- Faire évoluer l'affichage dans le temps pour suivre l'état d'une variable du programme
---

## Étape 1 — Construire

Sur la STeaMi, l'écran est déjà câblé en interne. Il ne reste que deux choses à faire avant de programmer.

**1. Connecter la carte à l'ordinateur.** Brancher la STeaMi avec un câble USB-C. Un nouveau lecteur appelé `STEAMI` apparaît sur l'ordinateur — c'est l'équivalent du lecteur `DIS_L4IOT` mentionné dans la fiche Let's STEAM d'origine.

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/i17-texte-oled/01-steami-oled-vide.jpeg"
    alt="Carte STeaMi connectée en USB, écran OLED encore éteint"
    style={{maxWidth: '450px', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    La STeaMi prête à recevoir un programme : l'écran OLED est intégré, aucun câblage externe nécessaire.
  </figcaption>
</figure>
<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/i17-texte-oled/02-lecteur-steami.png"
    alt="Le lecteur STEAMI apparaît dans l'explorateur de fichiers"
    style={{maxWidth: '100%', height: 'auto'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    Une fois la carte branchée, le lecteur STEAMI apparaît comme un disque amovible.
  </figcaption>
</figure>
**2. Ouvrir un IDE MicroPython.** Reportez-vous à la fiche **Thonny** si vous démarrez. Tout autre IDE compatible MicroPython (extension VS Code, `mpremote`…) fonctionne aussi.

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/i17-texte-oled/03-ide-micropython-main-py.png"
    alt="IDE MicroPython avec le fichier main.py ouvert, prêt à être téléversé"
    style={{maxWidth: '100%', height: 'auto'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    Le fichier main.py prêt à être téléversé sur la carte.
  </figcaption>
</figure>
**3. Pas d'extension à installer.** Contrairement à MakeCode où il fallait ajouter l'extension `oled` depuis le menu **AVANCÉ → EXTENSIONS**, les bibliothèques `ssd1327` (bas niveau) et `steami_screen` (haut niveau) sont déjà incluses dans le firmware MicroPython de la STeaMi. Il suffit de les importer.

---

## Étape 2 — Programmer

### Code

```python
# Testée avec firmware STeaMi 0.23.1
#
# Affichage de texte sur l'écran OLED 128x128 (SSD1327) intégré à la STeaMi.
# Hello World en haut, cœur au centre, ligne décorative en bas.

import ssd1327
from machine import SPI, Pin
from steami_screen import Screen, SSD1327Display, WHITE, GRAY

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
screen.show()                           # envoi du framebuffer à l'écran
```

Copier ce code sur la carte sous le nom `main.py` à l'aide de votre IDE MicroPython, puis redémarrer la carte (bouton RESET, ou `Ctrl+D` dans le REPL). Le titre apparaît en haut, le cœur au centre et les tirets en bas.

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/i17-texte-oled/04-steami-hello-world.jpeg"
    alt="STeaMi affichant Hello World en haut, un cœur au centre et une ligne de tirets en bas"
    style={{maxWidth: '450px', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    Résultat attendu : titre en haut, cœur au centre, tirets en bas.
  </figcaption>
</figure>

### Comment ça fonctionne ?

La fonction MakeCode `oled.printString(texte, couleur, x, y)` est remplacée en MicroPython par **`screen.text(texte, at=..., color=..., scale=...)`**. Plutôt que de calculer des coordonnées en pixels, on indique une **position cardinale**.

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
    <text x="100" y="200" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#8a6e18" opacity="0.7">Écran 128 × 128 pixels — origine (0,0) en haut à gauche</text>
  </svg>
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    Les neuf positions cardinales utilisables avec `screen.text(texte, at=...)`.
  </figcaption>
</figure>

| Position | Effet |
|---|---|
| `"N"` / `"S"` | Haut / bas de l'écran, centré horizontalement |
| `"E"` / `"W"` | Droite / gauche, centré verticalement |
| `"NE"`, `"NW"`, `"SE"`, `"SW"` | Coins |
| `"CENTER"` | Centre de l'écran |
| `(x, y)` | Coordonnées explicites en pixels (origine en haut à gauche) |

`screen.title()` et `screen.subtitle()` sont des raccourcis pour le haut (en `GRAY`) et le bas (en `DARK`) de l'écran.

Couleurs disponibles dans `steami_screen` : `BLACK`, `DARK`, `GRAY`, `LIGHT`, `WHITE` (5 niveaux de gris du SSD1327), plus `RED`, `GREEN`, `BLUE`, `YELLOW` (qui dégradent automatiquement en niveaux de gris sur l'écran monochrome).

:::warning Étape importante : `screen.show()`
Sur MakeCode, l'affichage était immédiat. En MicroPython, les fonctions `text()`, `clear()`, `pixel()`… écrivent dans un **framebuffer en mémoire**. Rien n'apparaît à l'écran tant que `screen.show()` n'a pas été appelé. C'est cet appel qui transfère effectivement le buffer via SPI vers le contrôleur SSD1327.
:::

:::tip API bas niveau
Si vous avez besoin de coordonnées exactes (par exemple pour une animation pixel par pixel), `steami_screen` expose aussi `screen.pixel()`, `screen.line()`, `screen.rect()` et `screen.circle()`.
:::

---

## Étape 3 — Améliorer

Quatre défis dans l'esprit de la fiche d'origine, à faire dans l'ordre. Chaque défi part du même bloc d'initialisation que l'étape 2 — on le rappelle ici une fois pour gagner de la place :

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

### Défi 1 — Afficher le cœur en grand

`screen.text()` accepte un paramètre `scale` qui agrandit le texte. Essayer `screen.text("<3", at="CENTER", scale=3)`. Quelle est la limite avant que le texte ne sorte de l'écran ?

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/i17-texte-oled/05-steami-coeur-grand.jpeg"
    alt="STeaMi affichant un cœur agrandi avec scale=3"
    style={{maxWidth: '450px', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    Le cœur agrandi avec scale=3 : chaque pixel du caractère devient un carré de 3×3 pixels.
  </figcaption>
</figure>

### Défi 2 — Animation à La Linea

Avec une boucle `while`, créer une animation simple qui fait avancer un personnage minimaliste fait des symboles `|` et `_`. Utiliser `sleep(0.1)` pour ralentir le mouvement et ne pas oublier d'appeler `screen.clear()` au début de chaque image pour effacer l'écran.

```python
# Testée avec firmware STeaMi 0.23.1
# Le bloc d'initialisation ci-dessus doit précéder ce code.

from time import sleep

x = 0
while True:
    screen.clear()
    screen.text("|_", at=(x, 60))
    screen.show()
    x = (x + 4) % 128
    sleep(0.1)
```

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/i17-texte-oled/06-steami-animation-linea.gif"
    alt="Animation : un petit personnage |_ traverse l'écran de gauche à droite"
    style={{maxWidth: '450px', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    Le personnage |_ qui traverse l'écran : effacer → dessiner → afficher → attendre.
  </figcaption>
</figure>

### Défi 3 — État du bouton USER

Afficher en temps réel si le bouton A de la STeaMi est pressé ou non, par exemple avec `screen.title("A: ON")` ou `screen.title("A: OFF")`. Que se passe-t-il avec un `sleep(1)` long dans la boucle ? Comment améliorer la réactivité ? *(Indice : raccourcir le délai, ou utiliser `uasyncio` pour faire la lecture du bouton en parallèle de l'affichage.)*

### Défi 4 — Tableau de bord capteurs

Afficher simultanément plusieurs valeurs en utilisant les positions cardinales pour répartir l'information sur l'écran. Voici un squelette qui anime des valeurs simulées — l'objectif ici est de maîtriser la **mise en page**, pas la lecture des capteurs (sujet de la une fiche dédiée à venir).

```python
# Testée avec firmware STeaMi 0.23.1
# Le bloc d'initialisation ci-dessus doit précéder ce code.

from time import sleep
from math import sin

t = 0
while True:
    # Valeurs simulées — à remplacer par la lecture réelle des capteurs
    # (voir la fiche "Capteurs intégrés" pour HTS221, ISM330DL, etc.)
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
    sleep(0.5)
```

Une fois la mise en page maîtrisée, brancher de vraies valeurs en lisant les capteurs intégrés (HTS221 pour la température/humidité, ISM330DL pour l'accélération). Les imports et l'API précise des capteurs sont détaillés dans la une fiche dédiée à venir.

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/i17-texte-oled/07-steami-tableau-bord.jpeg"
    alt="STeaMi affichant un tableau de bord avec température, humidité et accélération"
    style={{maxWidth: '450px', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    Tableau de bord : titre en haut, température à gauche, humidité à droite, accélération en bas.
  </figcaption>
</figure>

---

## Ressources et liens utiles

- [Fiche Let's STEAM source — R1AS10 Écran OLED](/ressources/lets-steam/r1as10-ecran-oled) (version originale MakeCode + STM32 IOT Node)
- [Wiki STeaMi — Hardware](https://wiki.steami.cc/docs/hardware/) (pinout détaillé, écran OLED)
- [Drivers MicroPython STeaMi](https://github.com/steamicc/micropython-steami-lib) — code source de `steami_screen` et `ssd1327`
- [Documentation `framebuf`](https://docs.micropython.org/en/latest/library/framebuf.html) — API bas niveau de dessin sur framebuffer
- [Documentation MicroPython](https://docs.micropython.org/)
- **Widgets de `steami_screen`** : `title()`, `subtitle()`, `value()`, `bar()`, `gauge()`, `graph()`, `menu()`, `compass()`, `watch()`, `face()` — pour transformer rapidement la STeaMi en tableau de bord ou en jouet interactif.
---

_Cette fiche fait partie du projet [I-Novmicro #2 — Action EXAO](/projets/inovmicro-exao). Adaptée du projet [Let's STEAM](/projets/lets-steam) (fiche [`r1as10-ecran-oled`](/ressources/lets-steam/r1as10-ecran-oled)) sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr). Informations basées sur la [documentation officielle STeaMi](https://wiki.steami.cc/)._


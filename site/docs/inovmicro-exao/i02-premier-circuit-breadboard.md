---
id: i02-premier-circuit-breadboard
title: Premier circuit sur breadboard
sidebar_label: "Premier circuit sur breadboard"
sidebar_position: 2
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>
<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="2" y="4" width="20" height="16" rx="2" fill="#8a6e18" opacity="0.1"/><rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="#8a6e18" strokeWidth="1.5" opacity="1.0"/><line x1="2" y1="8" x2="22" y2="8" stroke="#8a6e18" strokeWidth="0.75" opacity="0.25"/><line x1="2" y1="16" x2="22" y2="16" stroke="#8a6e18" strokeWidth="0.75" opacity="0.25"/><circle cx="6" cy="6" r="0.7" fill="#8a6e18"/><circle cx="9" cy="6" r="0.7" fill="#8a6e18"/><circle cx="12" cy="6" r="0.7" fill="#8a6e18"/><circle cx="15" cy="6" r="0.7" fill="#8a6e18"/><circle cx="18" cy="6" r="0.7" fill="#8a6e18"/><circle cx="6" cy="10" r="0.7" fill="#8a6e18" opacity="0.25"/><circle cx="9" cy="10" r="0.7" fill="#8a6e18" opacity="0.25"/><circle cx="12" cy="10" r="0.7" fill="#8a6e18" opacity="0.25"/><circle cx="15" cy="10" r="0.7" fill="#8a6e18" opacity="0.25"/><circle cx="18" cy="10" r="0.7" fill="#8a6e18" opacity="0.25"/><circle cx="6" cy="12" r="0.7" fill="#8a6e18" opacity="0.25"/><circle cx="9" cy="12" r="0.7" fill="#8a6e18" opacity="0.25"/><circle cx="12" cy="12" r="0.7" fill="#8a6e18" opacity="0.25"/><circle cx="15" cy="12" r="0.7" fill="#8a6e18" opacity="0.25"/><circle cx="18" cy="12" r="0.7" fill="#8a6e18" opacity="0.25"/><circle cx="6" cy="14" r="0.7" fill="#8a6e18" opacity="0.25"/><circle cx="9" cy="14" r="0.7" fill="#8a6e18" opacity="0.25"/><circle cx="12" cy="14" r="0.7" fill="#8a6e18" opacity="0.25"/><circle cx="15" cy="14" r="0.7" fill="#8a6e18" opacity="0.25"/><circle cx="18" cy="14" r="0.7" fill="#8a6e18" opacity="0.25"/><circle cx="6" cy="18" r="0.7" fill="#8a6e18"/><circle cx="9" cy="18" r="0.7" fill="#8a6e18"/><circle cx="12" cy="18" r="0.7" fill="#8a6e18"/><circle cx="15" cy="18" r="0.7" fill="#8a6e18"/><circle cx="18" cy="18" r="0.7" fill="#8a6e18"/></svg> Premier circuit sur breadboard

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--info">SteaMi</span>
  <span className="badge badge--warning">MicroPython</span>
</div>

| Projet        | Durée  | Difficulté | Âge       | Logiciel STeaMi testé |
| ------------- | ------ | ---------- | --------- | --------------------- |
| I-Novmicro #2 | 30 min | Débutant   | 11-99 ans | 0.23.1                |

## Matériel et Montage

- 1 carte STeaMi
- 1 câble USB de données (micro-USB pour la STeaMi V1, USB-C pour la STeaMi V2). Attention : un câble qui ne sert qu'à charger un téléphone ne fonctionnera pas.
- 1 ordinateur sous Windows, macOS ou Linux
- Un IDE compatible MicroPython : [Thonny](/ressources/inovmicro-exao/t03-decouverte-thonny), Mu, [VS Code](/ressources/inovmicro-exao/t04-vscode), Vittascience, ou tout autre éditeur capable d'ouvrir une console série.
- **1 breadboard** (« planche à pain », plaque de prototypage sans soudure)
- **3 LED** (couleurs au choix : rouge, jaune, verte forment un beau feu tricolore)
- **3 résistances 330 Ω** (pour limiter le courant à travers chaque LED)
- **Câbles de connexion** (« fils dupont »), idéalement mâle-mâle pour relier breadboard à breadboard, mâle-femelle ou pinces crocodile pour relier la STeaMi à la breadboard

:::info[Comment relier la STeaMi à une breadboard ?]
La STeaMi expose deux familles de broches utilisables avec une breadboard :

- Le **connecteur Edge** (compatible micro:bit) en bas de la carte expose une vingtaine de broches GPIO, ADC et bus série. Pour s'y brancher facilement, il existe des **adaptateurs « Edge connector breakout »** (carte intermédiaire avec rangée de pins mâles) qu'on peut clipser sur la STeaMi puis brancher sur la breadboard avec des fils dupont.
- À défaut d'adaptateur, **trois pads dorés en forme de bandes** au bas de la carte (notées `P0`, `P1`, `P2`) acceptent directement des **pinces crocodile**. Plus rudimentaire mais sans matériel additionnel, et amplement suffisant pour cette première fiche.
:::

</div>

<img src="/img/ressources/inovmicro-exao/i02-premier-circuit-breadboard/icone.png" alt="Breadboard avec LED et résistances" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Quand vous appuyez sur un interrupteur dans une pièce, démarrez une console de jeu, ou allumez le moteur d'une voiture, vous fermez un **circuit électrique**. Sans même y penser, vous reliez une source d'énergie (pile, prise) à un composant (ampoule, moteur, écran) via des câbles. Tous les appareils électroniques sont nés de la même expérience initiale : assembler des composants et faire passer du courant à travers eux selon un chemin précis.

Les fiches I-Novmicro précédentes utilisaient les composants déjà soudés à la STeaMi (LED RGB, écran, accéléromètre...). On change de logique ici : on va monter **un circuit de toutes pièces** sur une **breadboard** (planche à essais), brancher des **LED externes** à la STeaMi via son connecteur Edge, et apprendre à les piloter depuis MicroPython. C'est la base de tous les projets makers : dès qu'on veut piloter quelque chose qui n'est pas déjà sur la carte (relais, capteur exotique, ruban LED, mini-moteur), il faut savoir le câbler.

:::info[Pourquoi quitter les composants intégrés ?]
La STeaMi est volontairement équipée d'un connecteur Edge et de pads externes pour qu'on puisse y brancher des composants supplémentaires. C'est ce qui permet d'élargir les expériences au-delà de ce que la carte sait faire seule. Cette fiche pose les bases, les fiches suivantes (potentiomètre, servomoteur) s'en serviront.
:::

---

## Objectifs d'apprentissage

À la fin de cette activité, l'élève sera capable de :

- **Décrire** ce qu'est une breadboard et comment elle est organisée (rangées de bus pour l'alimentation, rangées de raccordement pour les composants).
- **Reconnaître** l'orientation d'une LED (anode plus longue = +, cathode plus courte = -) et **expliquer** pourquoi il faut une résistance en série pour la protéger.
- **Câbler** une ou plusieurs LED externes au connecteur Edge ou aux pads de la STeaMi, avec leur résistance de protection.
- **Écrire** un programme MicroPython qui allume et éteint plusieurs LED branchées sur des broches GPIO différentes.
- **Faire le lien** entre le pin physique de la STeaMi (`P6`, `P7`, `P8`...) et la variable Python qui le manipule.
- **Adapter** ce flux pour créer des animations simples (clignotement séquentiel, feu de signalisation, compteur binaire) et **transposer** ces briques aux fiches suivantes qui utilisent du matériel externe (potentiomètre, servomoteur).

---

## Étape 1 : Construire

### Comprendre la breadboard

Une **breadboard** (de l'anglais _bread board_, « planche à pain ») est une plaque de plastique percée de petits trous. Sous chaque trou, un ressort métallique mord la patte qu'on y insère, créant une connexion électrique sans soudure. C'est l'outil de prototypage le plus utilisé en électronique : on monte, on teste, on démonte, on remonte autrement.

Les trous d'une breadboard ne sont pas tous indépendants. Ils sont **regroupés en bandes connectées** :

- Les **rangées de bus** (deux longues bandes horizontales en haut et en bas, souvent marquées `+` et `−`) servent à distribuer l'**alimentation** sur toute la longueur de la breadboard. Tous les trous d'une même bande sont reliés entre eux.
- Les **rangées de raccordement** (les colonnes au centre, séparées par un sillon) servent à connecter les composants. Sur chaque ligne, les **cinq trous d'un côté du sillon sont reliés entre eux** (et indépendants des cinq trous de l'autre côté). Le sillon central permet de placer à cheval les composants qui ont des pattes de chaque côté (typiquement les circuits intégrés type DIP).

Pour visualiser, un dessin rapide :

```text
+ - - - - - - - - - - - - - - - - +     ← bus du +
- - - - - - - - - - - - - - - - - -     ← bus du −
. . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . .     ← rangées de raccordement (5 trous reliés)
. . . . . . . . . . . . . . . . . .       chaque colonne est indépendante
. . . . . . . . . . . . . . . . . .       de sa voisine
. . . . . . . . . . . . . . . . . .
+----------- sillon ---------------+     ← séparation entre les deux moitiés
. . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . .
+ - - - - - - - - - - - - - - - - +
- - - - - - - - - - - - - - - - - -
```

### Préparer l'alimentation

Avant de câbler les composants, on relie la STeaMi à la breadboard pour distribuer l'alimentation :

1. Brancher un fil entre une broche **GND** de la STeaMi (côté Edge ou pad `GND`) et la **bande − (bleue ou noire)** de la breadboard.
2. Brancher un autre fil entre une broche **3V3** (3,3 volts) de la STeaMi et la **bande + (rouge)** de la breadboard.

Désormais, **chaque trou de la bande + est relié à 3,3 V**, et chaque trou de la bande − est relié à GND. On peut tirer du courant depuis n'importe où sur ces bandes pour alimenter les composants.

### Câbler la première LED

Une **LED** (Light Emitting Diode, _diode électroluminescente_) ne s'allume que dans un sens. Il faut respecter son **orientation** :

- L'**anode** (la patte longue, le `+`) reçoit le courant.
- La **cathode** (la patte courte, le `−`) le renvoie vers la masse.

Branchée à l'envers, la LED ne s'allume pas (et risque d'être détruite si la tension est trop élevée). Pour la protéger d'un courant trop fort, on met une **résistance** en série, typiquement **330 Ω** pour une LED standard alimentée en 3,3 V.

Câblage pour cette première LED :

1. Insérer la **LED** dans deux trous d'une rangée de raccordement (anode à gauche par exemple, cathode à droite, sur deux rangées différentes pour éviter le court-circuit).
2. Insérer une **résistance 330 Ω** entre la cathode de la LED et la **bande −** de la breadboard.
3. Relier l'**anode** de la LED à une broche de sortie de la STeaMi :
   - **Avec adaptateur Edge breakout** : à la broche **P6** (signal `GPIO2_EDGE`) du connecteur Edge, via un fil dupont.
   - **Sans adaptateur Edge** : au pad **P0** (broche du bas, accessible par pince crocodile).

Quand la STeaMi écrira `1` sur cette broche, le courant ira de la broche → anode → cathode → résistance → GND, et la LED s'allumera.

### Câbler les deux autres LED

Sur le même principe, brancher :

- **Avec adaptateur Edge** : une deuxième LED sur **P7** (signal `GPIO3_EDGE`) et une troisième sur **P8** (signal `GPIO4_EDGE`), chacune avec sa résistance vers GND.
- **Sans adaptateur Edge** : une deuxième LED sur le pad **P1** et une troisième sur le pad **P2** (toujours via pinces crocodile).

On a maintenant trois LED indépendamment pilotables par trois broches différentes.

:::info[Quel parcours choisir ?]
Les deux variantes mènent au même résultat. Les **pads P0/P1/P2** sont parfaits pour démarrer : pas d'adaptateur à acheter, branchement direct par pinces crocodile. Le **connecteur Edge** offre en revanche une vingtaine de broches utilisables et reste indispensable pour les fiches qui demandent plusieurs entrées/sorties simultanées (potentiomètre + LED, plusieurs capteurs, etc.).

Dans la suite de la fiche, le code et le tableau sont présentés pour les deux variantes : choisissez la ligne qui correspond à votre montage.
:::

### Connecter la STeaMi à l'ordinateur

Brancher la STeaMi en USB. La carte apparaît comme un disque amovible `STEAMI` et le port série devient disponible dans l'IDE choisi.

---

## Étape 2 : Programmer

### Broches utilisées

Selon le montage choisi à l'étape précédente, les LED sont branchées soit sur le **connecteur Edge** (P6/P7/P8), soit sur les **pads crocodile** (P0/P1/P2).

| Composant | Avec adaptateur Edge       | Sans adaptateur (pads) | Variable Python | Comportement             |
| --------- | -------------------------- | ---------------------- | --------------- | ------------------------ |
| LED 1     | `P6` (signal `GPIO2_EDGE`) | `P0`                   | `led_1`         | 1 = allumée, 0 = éteinte |
| LED 2     | `P7` (signal `GPIO3_EDGE`) | `P1`                   | `led_2`         | 1 = allumée, 0 = éteinte |
| LED 3     | `P8` (signal `GPIO4_EDGE`) | `P2`                   | `led_3`         | 1 = allumée, 0 = éteinte |

:::info[Nom court `P6` ou nom de signal `GPIO2_EDGE` ?]
Les broches du connecteur Edge ont deux noms : un **nom court** style micro:bit (`P6`, `P7`, `P8`...) et un **nom de signal** explicite documenté côté STeaMi (`GPIO2_EDGE`, `GPIO3_EDGE`, etc., cf. [wiki.steami.cc → Pin Mapping → Signaux](https://wiki.steami.cc/docs/hardware/pin-mapping/signals)). Selon la version du firmware MicroPython STeaMi, les deux notations peuvent être acceptées par `Pin(...)`, ou seulement l'une des deux.

Le code de cette fiche utilise la forme courte `Pin('P6')`. Si vous obtenez `ValueError: invalid pin name`, essayez `Pin('GPIO2_EDGE')` (et `'GPIO3_EDGE'`, `'GPIO4_EDGE'` pour les deux autres).
:::

### Programme

Le programme principal est identique pour les deux variantes. **Seules les trois lignes d'initialisation des broches changent** selon votre montage.

```python
# Testée avec firmware STeaMi 0.23.1
#
# Premier circuit sur breadboard : trois LED externes connectées
# à la STeaMi. Le programme allume chaque LED à tour de rôle
# pendant une seconde, puis recommence.

from machine import Pin
from time import sleep_ms

# --- Variante AVEC adaptateur Edge breakout ---
led_1 = Pin('P6', Pin.OUT)
led_2 = Pin('P7', Pin.OUT)
led_3 = Pin('P8', Pin.OUT)

# --- Variante SANS adaptateur (pads crocodile) ---
# Commentez les trois lignes ci-dessus et décommentez
# celles ci-dessous si vous utilisez les pads P0/P1/P2.
# led_1 = Pin('P0', Pin.OUT)
# led_2 = Pin('P1', Pin.OUT)
# led_3 = Pin('P2', Pin.OUT)

while True:
    led_1.value(1)   # allume LED 1
    sleep_ms(1000)
    led_1.value(0)   # éteint LED 1

    led_2.value(1)
    sleep_ms(1000)
    led_2.value(0)

    led_3.value(1)
    sleep_ms(1000)
    led_3.value(0)
```

### Comment ça fonctionne ?

1. **Imports** : `Pin` pour piloter les broches GPIO, `sleep_ms` pour les pauses entre les changements d'état.
2. **Initialisation** : trois broches du connecteur Edge sont configurées en sortie (`Pin.OUT`). À partir de ce moment, écrire `1` sur la broche y impose 3,3 V, écrire `0` la met à 0 V.
3. **Boucle principale** : pour chaque LED, on l'allume (`value(1)`), on attend 1 seconde, on l'éteint (`value(0)`), et on enchaîne sur la suivante.

Une LED qui ne s'allume pas ? Trois suspects à vérifier dans l'ordre :

- **Polarité inversée** : la LED a été branchée cathode en haut. La désinsérer et la remettre dans l'autre sens.
- **Résistance absente ou mauvaise valeur** : sans résistance, la LED peut griller en quelques secondes. Mauvaise valeur (trop forte) : la LED est très faible. Vérifier le marquage des bandes de couleur (orange-orange-marron-or pour 330 Ω).
- **Mauvaise broche** : le fil va sur la voisine plutôt que celle attendue (P5 au lieu de P6, ou un pad voisin de P0) ? Recompter sur la STeaMi en s'aidant du [pin mapping officiel](https://wiki.steami.cc/docs/hardware/pin-mapping/signals).
- **Variante choisie ≠ code** : LED branchées sur les pads P0/P1/P2 mais code laissé sur P6/P7/P8 (ou inversement). Vérifier que le code initialise bien les broches que vous avez réellement câblées.

### Exécution

- **Test rapide** : lancer le programme depuis l'IDE (typiquement bouton **Run** ▶ ou `F5`). Les trois LED clignotent l'une après l'autre.
- **Programme persistant** : enregistrer le fichier sous le nom **`main.py`** sur la carte. Le programme se relance à chaque démarrage de la STeaMi, sans ordinateur.

---

## Étape 3 : Améliorer

Quatre défis dans l'ordre, du plus simple au plus stimulant. Le bloc d'initialisation reste le même que ci-dessus, on ne réécrit ici que la boucle principale.

### Défi 1 : Animation en chenille

Faire défiler une « vague » de LED qui s'allument l'une après l'autre, puis qui s'éteignent toutes ensemble.

```python
while True:
    led_1.value(1)
    sleep_ms(150)
    led_2.value(1)
    sleep_ms(150)
    led_3.value(1)
    sleep_ms(500)
    led_1.value(0)
    led_2.value(0)
    led_3.value(0)
    sleep_ms(500)
```

### Défi 2 : Feu de signalisation tricolore

Avec une LED rouge, une jaune et une verte, simuler un feu de signalisation : vert pendant quelques secondes, puis jaune court, puis rouge longtemps, puis on recommence. Vérifier que la durée du jaune est plus courte que celles du vert et du rouge.

### Défi 3 : Compteur binaire de 0 à 7

Trois LED, c'est aussi **trois bits**, donc de quoi représenter les huit nombres de 0 à 7 en binaire. Allumer/éteindre les LED selon le code binaire du nombre courant, incrémenter d'un toutes les secondes, et boucler à 0 après 7.

| Nombre décimal | Bits (LED3-LED2-LED1) | LED 3 | LED 2 | LED 1 |
| -------------- | --------------------- | ----- | ----- | ----- |
| 0              | 000                   | ⚫    | ⚫    | ⚫    |
| 1              | 001                   | ⚫    | ⚫    | 🟢    |
| 2              | 010                   | ⚫    | 🟢    | ⚫    |
| 3              | 011                   | ⚫    | 🟢    | 🟢    |
| 4              | 100                   | 🟢    | ⚫    | ⚫    |
| 5              | 101                   | 🟢    | ⚫    | 🟢    |
| 6              | 110                   | 🟢    | 🟢    | ⚫    |
| 7              | 111                   | 🟢    | 🟢    | 🟢    |

Indice : pour extraire le bit de poids `i` d'un nombre `n`, utiliser `(n >> i) & 1`.

### Défi 4 : Détourner

Imaginer un autre usage des trois LED, sans contrainte. Quelques pistes :

- Un **indicateur d'humeur** que vous changez avec un appui sur les boutons A/B intégrés de la STeaMi (rouge = pas le moral, jaune = ça va, vert = au top).
- Un **chronomètre visuel** où chaque LED représente un tiers du temps écoulé.
- Un **dé électronique** qui s'allume une fraction de seconde sur une LED choisie au hasard à chaque appui sur le bouton A.

---

## Aller plus loin

### Pour comprendre

- **[Breadboard (Wikipédia)](https://fr.wikipedia.org/wiki/Platine_d%27essais)** : histoire et anatomie de la plaque d'essai. Le nom « breadboard » (planche à pain) vient des prototypes du début du XXᵉ siècle, où les amateurs vissaient leurs composants sur de vraies planches en bois.
- **[Diode électroluminescente (Wikipédia)](https://fr.wikipedia.org/wiki/Diode_%C3%A9lectroluminescente)** : comment une LED transforme un courant en lumière, à la rencontre de la physique des semi-conducteurs. Inventée en 1962, généralisée dans nos téléphones et nos plafonds à partir des années 2000.
- **[Loi d'Ohm (Wikipédia)](https://fr.wikipedia.org/wiki/Loi_d%27Ohm)** : la formule `U = R × I` qui explique pourquoi on met une résistance en série de la LED. Avec une LED de 2 V et une alimentation de 3,3 V, on dissipe 1,3 V dans la résistance ; pour limiter le courant à 4 mA, il faut `1,3 / 0,004 = 325 Ω`, d'où le standard 330 Ω.
- **[Système binaire (Wikipédia)](https://fr.wikipedia.org/wiki/Syst%C3%A8me_binaire)** : pour le défi 3, comprendre pourquoi tout ordinateur représente les nombres en base 2.

### Pour s'inspirer

- **[Adafruit Industries](https://www.adafruit.com/)** : entreprise américaine fondée par Limor Fried qui a popularisé l'électronique loisir grâce à des kits débutants extrêmement bien documentés. Aller voir leurs tutoriels « learn » est une mine pour des idées de projets STeaMi.
- **[Lumière artistique de Leo Villareal](https://villareal.net/)** : l'artiste a installé en 2013 plus de 25 000 LED sous le Bay Bridge de San Francisco pour créer une œuvre lumineuse animée, _The Bay Lights_. Toutes les LED de la planète n'ont pas vocation à clignoter dans un projet STEM ; certaines participent à des œuvres d'art à l'échelle d'une ville.
- **[Concours de la Maison Hantée Open Source](https://www.instructables.com/contest/halloween2024/)** : tous les ans, le site Instructables organise un concours de bricolages Halloween. Les meilleurs projets utilisent justement breadboards + LED + microcontrôleur pour animer des décorations qui réagissent au mouvement, à la voix ou à la pression. Bon exemple de transposition du circuit appris ici à un objet sensoriel complet.
- **[Project Blinkenlights (Wikipédia anglais)](https://en.wikipedia.org/wiki/Project_Blinkenlights)** : en 2001, le Chaos Computer Club a transformé la façade de la Haus des Lehrers à Berlin en écran géant 18×8 pixels en allumant et éteignant les lampes de chaque fenêtre depuis un ordinateur. Le public pouvait y jouer à Pong par téléphone. Une version XXL du circuit que vous venez de monter, avec 144 LED « fenêtres » à la place de 3 LED « breadboard ». (Page Wikipédia anglais uniquement.)

---

_Cette fiche fait partie du projet [I-Novmicro #2 — Action EXAO](/projets/inovmicro-exao). Adaptée du projet [Let's STEAM](/projets/lets-steam) (fiche [`r1as02-breadboard`](/ressources/lets-steam/r1as02-breadboard)) sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._

---
id: i05-potentiometre
title: Contrôler avec un potentiomètre
sidebar_label: "Contrôler avec un potentiomètre"
sidebar_position: 5
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>
<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><circle cx="12" cy="12" r="10" fill="#8a6e18" opacity="0.1"/><circle cx="12" cy="12" r="10" fill="none" stroke="#8a6e18" strokeWidth="1.5" opacity="1.0"/><circle cx="12" cy="12" r="3" fill="#8a6e18" opacity="0.25"/><line x1="12" y1="12" x2="7" y2="5" stroke="#8a6e18" strokeWidth="2" strokeLinecap="round" opacity="1.0"/><circle cx="12" cy="12" r="1" fill="#8a6e18" opacity="1.0"/><path d="M6 19.5a10 10 0 0 1-1.5-2" stroke="#8a6e18" strokeWidth="1" strokeLinecap="round" opacity="0.25"/><path d="M18 19.5a10 10 0 0 0 1.5-2" stroke="#8a6e18" strokeWidth="1" strokeLinecap="round" opacity="0.25"/></svg> Contrôler avec un potentiomètre

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--info">SteaMi</span>
  <span className="badge badge--warning">MicroPython</span>
</div>

| Projet        | Durée  | Difficulté    | Âge       | Logiciel STeaMi testé |
| ------------- | ------ | ------------- | --------- | --------------------- |
| I-Novmicro #2 | 30 min | Intermédiaire | 11-99 ans | 0.23.1                |

## Matériel et Montage

- 1 carte STeaMi
- 1 câble USB de données (micro-USB pour la STeaMi V1, USB-C pour la STeaMi V2). Attention : un câble qui ne sert qu'à charger un téléphone ne fonctionnera pas.
- 1 ordinateur sous Windows, macOS ou Linux
- Un IDE compatible MicroPython : [Thonny](/ressources/inovmicro-exao/t03-decouverte-thonny), Mu, [VS Code](/ressources/inovmicro-exao/t04-vscode), Vittascience, ou tout autre éditeur capable d'ouvrir une console série.
- **1 breadboard**
- **1 potentiomètre rotatif** (typiquement 10 kΩ, 3 broches)
- **1 LED** (couleur libre)
- **1 résistance 330 Ω**
- **Câbles de connexion** (fils dupont ou pinces crocodile)

:::info[Prérequis : la breadboard]
Si vous découvrez la breadboard et le connecteur Edge de la STeaMi, jetez d'abord un œil à la fiche « Premier circuit sur breadboard » qui pose les bases du câblage externe (en cours d'intégration au wiki).
:::

</div>

<img src="/img/ressources/inovmicro-exao/i05-potentiometre/icone.png" alt="Potentiomètre rotatif" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Vous avez probablement déjà tourné le **bouton du volume** d'une chaîne hi-fi ou d'une enceinte, fait varier l'intensité d'un **éclairage à variateur**, ou poussé un **slider** dans un logiciel audio pour ajuster une voix. Tous ces dispositifs reposent sur le même composant : un **potentiomètre**. Ce qu'il fait au fond, c'est traduire une **position physique** (l'angle du bouton, la position du slider) en une **tension électrique** que le reste du circuit peut mesurer.

Dans cette fiche, vous allez câbler un potentiomètre rotatif à la STeaMi via son connecteur Edge, lire sa valeur dans le code, et l'utiliser pour faire varier en temps réel la **luminosité d'une LED**. C'est l'occasion d'introduire deux concepts qui reviennent dans la plupart des projets matériels : l'**ADC** (conversion analogique vers numérique, pour lire le pot) et le **PWM** (modulation de largeur d'impulsion, pour piloter la LED en intensité variable).

:::info[Composants externes, câbles à brancher]
Cette fiche utilise du matériel additionnel. Les LED RGB intégrées de la STeaMi pourraient suffire à voir un effet, mais le potentiomètre, lui, doit forcément être ajouté de l'extérieur via le connecteur Edge ou les pads crocodile.
:::

---

## Objectifs d'apprentissage

À la fin de cette activité, l'élève sera capable de :

- **Expliquer** ce qu'est un potentiomètre et comment il fonctionne comme un **diviseur de tension** réglable (deux résistances en série dont on déplace le point de mesure).
- **Câbler** un potentiomètre à trois broches à la STeaMi (GND, 3,3 V, broche analogique) et une LED externe sur une broche PWM, avec sa résistance de protection.
- **Lire** une entrée analogique en MicroPython avec `machine.ADC` et `read_u16()`, et **écrire** une sortie analogique avec `machine.PWM` et `duty_u16()`.
- **Faire le lien** entre la position du bouton (continue), la tension lue par l'ADC (discrétisée), et le rapport cyclique du PWM (équivalent d'une tension moyenne).
- **Inventer** d'autres usages d'une commande analogique : contrôler le volume d'un buzzer, piloter la position d'un servomoteur, jouer le rôle de manette dans un mini-jeu, **adapter** ce flux à un capteur (lumière, distance) à la place du potentiomètre.

---

## Étape 1 : Construire

### Comprendre le potentiomètre

Un **potentiomètre** est une résistance à **trois broches** dont la valeur change quand on tourne un bouton (modèle rotatif) ou qu'on déplace une tige (modèle linéaire dit _slider_). Concrètement :

- Les deux broches d'extrémité sont reliées à une piste résistive **complète**.
- La broche du milieu est connectée à un **curseur** qui glisse le long de cette piste à mesure qu'on tourne le bouton.

Si on alimente les deux extrémités (par exemple GND d'un côté, 3,3 V de l'autre), la tension présente sur la broche du milieu varie linéairement entre 0 V et 3,3 V selon la position du curseur. **C'est un diviseur de tension réglable manuellement**. C'est cette tension du milieu qu'on va lire avec la STeaMi.

:::info[Pourquoi 3 broches ?]
Si on n'utilise que deux des trois broches (le curseur et **une** extrémité), le potentiomètre se comporte comme une simple **résistance variable** (un _rhéostat_). Cette configuration sert à limiter un courant. Avec les trois broches, on a un **diviseur de tension** qui nous donne une mesure absolue de la position, indépendante du courant : c'est ce qu'il nous faut ici.
:::

### Câbler le potentiomètre

Placer le potentiomètre sur la breadboard de manière à ce que ses trois broches soient sur trois rangées différentes (pas dans la même colonne, sinon court-circuit). Ensuite :

1. Brancher la **broche gauche** du potentiomètre à la rangée **GND** de la breadboard.
2. Brancher la **broche droite** à la rangée **3V3**.
3. Brancher la **broche du milieu** (curseur) à la broche **P3** de la STeaMi (signal `ANALOG01_EDGE`, entrée analogique).

Vérifier que GND et 3V3 de la breadboard sont bien reliés à la STeaMi.

### Câbler la LED

Sur le même principe que la fiche breadboard :

1. Insérer la **LED** dans deux rangées différentes en respectant la polarité (anode patte longue à gauche, cathode patte courte à droite).
2. Insérer une **résistance 330 Ω** entre la cathode et la rangée **GND**.
3. Brancher l'**anode** à la broche **P7** de la STeaMi (signal `GPIO3_EDGE`, supporte le PWM).

(Si ce câblage LED + résistance vous est totalement étranger, voir la fiche « Premier circuit sur breadboard » en cours d'intégration au wiki, qui pose ces bases en détail.)

### Connecter la STeaMi à l'ordinateur

Brancher la STeaMi en USB. La carte apparaît comme disque amovible `STEAMI` et le port série devient disponible dans l'IDE.

---

## Étape 2 : Programmer

### Broches utilisées

| Composant         | Signal STeaMi (Edge) | Broche | Variable Python  | Comportement                                |
| ----------------- | -------------------- | ------ | ---------------- | ------------------------------------------- |
| Potentiomètre     | `ANALOG01_EDGE`      | `P3`   | `potentiometre`  | Lecture ADC : 0 (bouton à fond à gauche) à 65535 (à fond à droite) |
| LED               | `GPIO3_EDGE`         | `P7`   | `led`            | Sortie PWM : 0 (éteinte) à 65535 (à fond)   |

### Programme

```python
# Testée avec firmware STeaMi 0.23.1
#
# Régler la luminosité d'une LED externe avec un potentiomètre.
# Le potentiomètre est lu via l'ADC sur P3, la LED est pilotée
# en PWM sur P7. La même échelle 0-65535 est utilisée des deux
# côtés, donc pas de conversion à faire.

from machine import ADC, PWM, Pin
from time import sleep_ms

potentiometre = ADC(Pin('P3'))         # ANALOG01_EDGE, entrée analogique
led = PWM(Pin('P7'))                   # GPIO3_EDGE, sortie PWM
led.freq(1000)                         # fréquence PWM : 1 kHz, invisible à l'œil

while True:
    valeur = potentiometre.read_u16()  # 0..65535 (16 bits)
    led.duty_u16(valeur)               # même échelle, transfert direct
    sleep_ms(20)                       # ~50 mises à jour par seconde, fluide
```

### Comment ça fonctionne ?

1. **Imports** : `ADC` et `PWM` viennent de `machine`. Ces deux classes encapsulent le matériel : on n'a pas à manipuler de registres, juste à appeler des méthodes.
2. **Initialisation** : `ADC(Pin('P3'))` configure la broche P3 en entrée analogique. `PWM(Pin('P7'))` configure P7 en sortie modulée. `led.freq(1000)` fixe la fréquence à 1 kHz : la LED s'allume et s'éteint 1 000 fois par seconde, ce qui paraît continu à l'œil humain (effet stroboscopique invisible).
3. **`read_u16()`** : lit la tension sur P3 et la convertit en un entier sur **16 bits**, donc entre `0` (0 V) et `65535` (3,3 V). C'est ce que fait l'**ADC** (Analog-to-Digital Converter) du microcontrôleur, transformant un signal continu en valeur discrète.
4. **`duty_u16(valeur)`** : règle le rapport cyclique du PWM avec la même résolution. `0` = LED éteinte, `65535` = LED au maximum. Tout ce qui est entre alterne rapidement entre 0 V et 3,3 V dans une proportion qui simule une tension moyenne intermédiaire.
5. **`sleep_ms(20)`** : pause de 20 ms entre deux lectures. À 50 Hz, le mouvement du bouton est suivi de manière fluide à l'œil.

:::info[Pourquoi cette échelle 0-65535 ?]
MicroPython utilise par convention une résolution **16 bits** pour les API `read_u16()` / `duty_u16()`, quelle que soit la résolution réelle du matériel sous-jacent. Cela rend le code portable : le même programme tourne identique sur STeaMi (ADC 12 bits réels), Raspberry Pi Pico (ADC 12 bits), ESP32 (ADC 12 bits), Pyboard (ADC 12 bits)... MicroPython remplit les bits manquants par 0 ou par duplication des bits hauts, sans qu'on s'en préoccupe.
:::

### Exécution

- **Test rapide** : lancer le programme depuis l'IDE (typiquement bouton **Run** ▶ ou `F5`). Tourner le bouton du potentiomètre, la LED change d'intensité en temps réel.
- **Programme persistant** : enregistrer le fichier sous le nom **`main.py`** sur la carte. Le programme se relance à chaque démarrage.

---

## Étape 3 : Améliorer

Quatre défis dans l'esprit progressif. Chacun part du programme principal de l'étape 2, on indique juste ce qui change.

### Défi 1 : Indicateur de niveau dans la console

Afficher en plus dans la console MicroPython un indicateur visuel ASCII du niveau, à raison d'une ligne toutes les 200 ms.

```python
from time import sleep_ms

while True:
    valeur = potentiometre.read_u16()
    led.duty_u16(valeur)
    # Barre visuelle : un caractère par tranche de ~10 %
    barre = '█' * (valeur * 20 // 65535)
    print(f"{valeur:5d}  {barre}")
    sleep_ms(200)
```

Ce défi sert à voir que `read_u16()` ne couvre pas forcément `0` à `65535` strict : les vrais minimums et maximums sont souvent un peu plus bas que 0 et un peu plus haut que 65535, parce que les composants ne sont jamais parfaits.

### Défi 2 : Deux LED inversées

Brancher une **deuxième LED** sur la broche **P11** (signal `GPIO6_EDGE_BOUTON_B`, supporte aussi le PWM). Faire en sorte que cette LED s'**éteigne** quand la première s'**allume**, et vice versa.

Indice : `65535 - valeur` retourne la valeur miroir.

### Défi 3 : Buzzer en volume variable

Remplacer la LED par un **buzzer piézo** (ou ajouter un buzzer en plus). Le buzzer fonctionne aussi en PWM : la fréquence définit la hauteur du son, le rapport cyclique définit le volume. Faire varier le volume avec le potentiomètre tout en gardant une fréquence fixe (par exemple 440 Hz, le _la_ standard).

### Défi 4 : Détourner

Imaginer un usage qui sorte du « variateur de lumière ». Pistes :

- Un **contrôleur de température cible** d'un thermostat (la position du bouton fixe une consigne, comparée à la température lue sur le HTS221 intégré à la STeaMi).
- Un **manette analogique** pour un mini-jeu sur l'écran OLED : la position du curseur déplace un sprite horizontalement.
- Un **prototype de jauge** où le potentiomètre simule le niveau d'essence d'une voiture et la LED s'allume rouge quand on passe en réserve.
- Un **doseur** virtuel : on tourne le bouton pour fixer une durée (entre 1 et 10 minutes), un buzzer sonne à la fin (en combinaison avec la fiche [Minuteur électronique](/ressources/inovmicro-exao/i14-minuteur-electronique)).

---

## Aller plus loin

### Pour comprendre

- **[Potentiomètre (Wikipédia)](https://fr.wikipedia.org/wiki/Potentiom%C3%A8tre)** : composant qu'on trouve dans toutes les tables de mixage audio, les amplificateurs anciens, les manettes de jeux analogiques. La forme rotative qu'on utilise ici est la plus courante, mais il existe aussi des sliders linéaires (mixers DJ) et des trimmers (petites molettes à ajuster avec un tournevis dans les circuits).
- **[Diviseur de tension (Wikipédia)](https://fr.wikipedia.org/wiki/Pont_diviseur_de_tension)** : le principe physique derrière le potentiomètre. Deux résistances en série partagent une tension d'entrée selon leur rapport. Très utile pour adapter le signal d'un capteur à la plage d'entrée d'un microcontrôleur.
- **[Convertisseur analogique-numérique (Wikipédia)](https://fr.wikipedia.org/wiki/Convertisseur_analogique-num%C3%A9rique)** : comment un microcontrôleur transforme une tension continue en nombre. Sujet riche (résolution, vitesse d'échantillonnage, bruit, théorème de Nyquist) qui ouvre sur tout le traitement du signal.
- **[Modulation de largeur d'impulsion (Wikipédia)](https://fr.wikipedia.org/wiki/Modulation_de_largeur_d%27impulsions)** : pourquoi un signal qui alterne très vite entre 0 V et 3,3 V est perçu comme une tension intermédiaire. Technique utilisée pour piloter des moteurs (vitesse), des LED (luminosité), des servomoteurs (position), des chauffages, et bien d'autres.

### Pour s'inspirer

- **[Le synthé Moog original (1964)](https://fr.wikipedia.org/wiki/Robert_Moog)** : Robert Moog a démocratisé les synthétiseurs en remplaçant les énormes consoles de studio par des modules pilotés par... des potentiomètres rotatifs. Sans eux, pas de synthés modernes, pas de musique électronique.
- **[Les tables de mixage des concerts](https://fr.wikipedia.org/wiki/Console_de_mixage)** : un ingénieur du son devant une grande console pousse des dizaines de sliders et tourne des dizaines de boutons, qui sont tous des potentiomètres reliés à un circuit électronique. C'est exactement ce que vous venez d'expérimenter, à plus grande échelle.
- **[Le joystick analogique (Wikipédia)](https://fr.wikipedia.org/wiki/Joystick)** : sur les manettes de console depuis la Nintendo 64, les deux mini-sticks comportent chacun deux potentiomètres (un pour l'axe X, un pour l'axe Y). C'est la même technologie que la vôtre, miniaturisée.
- **[Le radio-réveil de votre grand-mère](https://fr.wikipedia.org/wiki/Radio)** : la mollette qui ajuste la station radio est un potentiomètre relié à un circuit accordé. Un objet du quotidien qui vous donne directement à manipuler le composant que vous venez de programmer.

---

_Cette fiche fait partie du projet [I-Novmicro #2 — Action EXAO](/projets/inovmicro-exao). Adaptée du projet [Let's STEAM](/projets/lets-steam) (fiche [`r1as05-potentiometre`](/ressources/lets-steam/r1as05-potentiometre)) sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._

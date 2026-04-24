---
id: decouverte-steami
title: Découvrir la carte STeaMi
sidebar_label: "Découvrir la carte STeaMi"
sidebar_position: 1
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="3" y="5" width="18" height="14" rx="2" fill="#8a6e18" opacity="0.1"/><rect x="5" y="7" width="14" height="10" rx="1" fill="#8a6e18" opacity="0.25"/><rect x="8" y="9" width="8" height="6" rx="0.5" fill="#8a6e18"/><circle cx="6" cy="8" r="0.5" fill="#8a6e18"/><circle cx="18" cy="8" r="0.5" fill="#8a6e18"/><circle cx="6" cy="16" r="0.5" fill="#8a6e18"/><circle cx="18" cy="16" r="0.5" fill="#8a6e18"/><line x1="3" y1="11" x2="1" y2="11" stroke="#8a6e18" strokeWidth="1"/><line x1="3" y1="14" x2="1" y2="14" stroke="#8a6e18" strokeWidth="1"/><line x1="21" y1="11" x2="23" y2="11" stroke="#8a6e18" strokeWidth="1"/><line x1="21" y1="14" x2="23" y2="14" stroke="#8a6e18" strokeWidth="1"/><line x1="10" y1="21" x2="14" y2="21" stroke="#8a6e18" strokeWidth="1"/><line x1="12" y1="19" x2="12" y2="21" stroke="#8a6e18" strokeWidth="1"/></svg> Découvrir la carte STeaMi

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--info">SteaMi</span>
  <span className="badge badge--warning">MicroPython</span>
  <span className="badge badge--secondary">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| I-Novmicro #2 | 1h30 | Débutant | 11-99 ans |

## Matériel

- 1 carte STeaMi
- 1 câble USB-C
- 1 ordinateur avec navigateur web
- Accès internet pour la documentation en ligne

</div>

</div>

---

## De quoi parle-t-on ?

La **STeaMi** est une carte électronique éducative conçue en France pour l'apprentissage de l'informatique embarquée, de l'IoT (Internet des Objets) et de la mesure scientifique. Elle se distingue par sa richesse en capteurs intégrés et sa connectivité sans fil, qui en font un outil polyvalent pour les projets pédagogiques du collège au lycée.

Cette fiche propose une première prise en main de la carte : découverte du hardware, premiers programmes et exploration des possibilités.

Pour aller plus loin, consultez la [documentation officielle](https://wiki.steami.cc/).

## Objectifs d'apprentissage

- Identifier les principaux composants de la carte STeaMi
- Comprendre le rôle de chaque capteur intégré
- Écrire un premier programme en MicroPython ou MakeCode
- Transférer un programme vers la carte
- Utiliser l'écran OLED et les capteurs pour une mesure simple

---

## Présentation de la carte

### Caractéristiques principales

La STeaMi est bâtie autour d'un **microcontrôleur STM32WB55RG** (Cortex-M4 à 64 MHz) qui intègre une radio multi-protocoles :

- **Bluetooth Low Energy 5.2** pour la communication sans fil
- **OpenThread** et **ZigBee** pour les réseaux maillés IoT
- **DAPLink** pour la programmation drag-and-drop par USB

La carte embarque aussi une batterie LiPo rechargeable de 1600 mAh offrant une autonomie confortable pour les projets nomades.

### Les 7 capteurs internes

La STeaMi intègre nativement plusieurs capteurs qui permettent une grande variété d'expérimentations sans matériel externe :

- **Accéléromètre** : mesure les accélérations sur 3 axes (mouvement, chocs, orientation)
- **Gyroscope** : mesure les rotations (vitesse angulaire)
- **Magnétomètre** : boussole numérique, détection de champs magnétiques
- **Capteur de température** : mesure de la température ambiante
- **Capteur d'humidité** : mesure du taux d'humidité relative
- **Capteur de pression** : mesure de la pression atmosphérique (altimètre)
- **Capteur de luminosité** : mesure de l'intensité lumineuse

### L'écran OLED 128×128

L'écran OLED intégré permet d'afficher du texte, des graphiques, des images ou des animations directement sur la carte. Idéal pour afficher les valeurs des capteurs en temps réel sans avoir besoin d'un ordinateur.

### Connecteurs d'extension

La STeaMi dispose de deux types de connecteurs pour étendre ses fonctionnalités :

- **Edge compatible micro:bit** : permet d'utiliser de nombreux accessoires conçus pour les cartes micro:bit
- **Connecteur Qwiic** : branchement plug-and-play à de nombreux capteurs et modules Sparkfun/Adafruit sans soudure

---

## Premier contact avec la carte

### Étape 1 : allumer la carte

- Connecte la carte STeaMi à ton ordinateur avec un câble USB-C
- La carte s'allume et apparaît comme une clé USB nommée **STEAMI** sur ton ordinateur
- L'écran OLED affiche un message de démarrage

:::info[Conseil]

Si la carte est équipée d'une batterie, tu peux aussi l'allumer sans ordinateur en utilisant l'interrupteur latéral.

:::

### Étape 2 : choisir un environnement de programmation

Trois environnements sont supportés pour programmer la STeaMi :

- **MicroPython** : langage Python adapté aux microcontrôleurs, recommandé pour les lycéens
- **MakeCode** : programmation par blocs visuels, idéal pour débuter
- **Arduino / CODAL** : programmation C++ pour les utilisateurs avancés

Pour commencer, nous recommandons **MicroPython** ou **MakeCode** selon le niveau des élèves.

### Étape 3 : écrire un premier programme

**En MicroPython** — affiche "Hello !" sur l'écran :

```python
from steami import display

display.show("Hello !")
```

**En MakeCode** — utilise le bloc `afficher du texte` avec "Hello !" comme paramètre.

### Étape 4 : téléverser le programme

- **Drag and drop** : glisse simplement le fichier `.hex` (MakeCode) ou `.py` (MicroPython) sur le lecteur USB **STEAMI**
- La LED orange clignote pendant le transfert
- La carte redémarre automatiquement et exécute ton programme

:::info[Conseil pour l'enseignant]

L'approche drag-and-drop rend la STeaMi très accessible aux débutants : pas besoin d'installer un IDE complexe. Les élèves peuvent développer directement dans leur navigateur et téléverser leur code en un clic.

:::

---

## Premières expérimentations

### Lire la température

Utilise le capteur de température intégré pour afficher la température ambiante sur l'écran :

```python
from steami import display, temperature

while True:
    t = temperature.read()
    display.show(f"{t:.1f} °C")
```

### Détecter un mouvement

L'accéléromètre permet de détecter quand la carte est secouée, penchée ou retournée :

```python
from steami import display, accelerometer

while True:
    if accelerometer.is_shaken():
        display.show("Secouée !")
```

### Afficher une boussole

Le magnétomètre peut être utilisé comme une boussole numérique :

```python
from steami import display, compass

while True:
    angle = compass.heading()
    display.show(f"{angle}°")
```

---

## Idées de projets pour aller plus loin

La STeaMi permet de réaliser de nombreux projets pédagogiques :

- **Station météo** : enregistrer température, humidité et pression sur plusieurs jours
- **Altimètre** : mesurer une altitude à partir de la pression atmosphérique
- **Podomètre** : compter les pas à l'aide de l'accéléromètre
- **Niveau à bulle numérique** : afficher l'inclinaison de la carte
- **Détecteur de luminosité** : allumer un buzzer en cas d'obscurité
- **Jeu de réflexes** : utiliser boutons et écran pour mesurer les temps de réaction
- **Transmission sans fil** : envoyer des données de capteur en Bluetooth vers un smartphone

---

## Ressources pour approfondir

- **Documentation officielle** : [wiki.steami.cc](https://wiki.steami.cc/)
- **Site STeaMi** : [steami.cc](https://steami.cc)
- **Drivers MicroPython** : [github.com/steamicc/micropython-steami-lib](https://github.com/steamicc/micropython-steami-lib)
- **Design de référence** : [github.com/steamicc/steami-reference-design](https://github.com/steamicc/steami-reference-design)
- **Documentation MicroPython** : [docs.micropython.org](https://docs.micropython.org/en/latest/)
- **STM32Python** : [stm32python.gitlab.io](https://stm32python.gitlab.io/fr/)

---

*Cette fiche fait partie du projet [I-Novmicro #2 — Action EXAO](/projets/inovmicro-exao). Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr). Informations basées sur la [documentation officielle STeaMi](https://wiki.steami.cc/).*

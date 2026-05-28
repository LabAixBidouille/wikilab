---
id: decouverte-steami
title: Découvrir la carte STeaMi
sidebar_label: 'Découvrir la carte STeaMi'
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Découvrir la carte STeaMi

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--info">SteaMi</span>
  <span className="badge badge--warning">MicroPython</span>
  <span className="badge badge--secondary">MakeCode</span>
</div>

| Projet        | Durée | Difficulté | Âge       | Logiciel STeaMi testé |
| ------------- | ----- | ---------- | --------- | --------------------- |
| I-Novmicro #2 | 1h30  | Débutant   | 11-99 ans | 0.23.1                |

## Matériel

- 1 carte STeaMi
- 1 câble USB de données (micro-USB pour la STeaMi V1, USB-C pour la STeaMi V2). Attention : un câble qui ne sert qu'à charger un téléphone ne fonctionnera pas.
- 1 ordinateur avec navigateur web
- Accès internet pour la documentation en ligne

</div>

<img src="/img/ressources/inovmicro-exao/decouverte-steami/icone.png" alt="Découvrir la carte STeaMi" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

La **STeaMi** est une carte électronique éducative conçue en France pour l'apprentissage de l'informatique embarquée, de l'IoT (Internet des Objets) et de la mesure scientifique. Elle se distingue par sa richesse en capteurs intégrés et sa connectivité sans fil, qui en font un outil polyvalent pour les projets pédagogiques du collège au lycée.

Cette fiche propose une première prise en main de la carte : découverte du hardware, premiers programmes et exploration des possibilités.

Pour aller plus loin, consultez la [documentation officielle](https://wiki.steami.cc/).

<img src="/img/ressources/inovmicro-exao/decouverte-steami/16159881_5700395_edited.png" alt="Carte STeaMi" style={{width: '70%', display: 'block', marginLeft: 0, marginRight: 'auto'}} />

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
- **Mode clé USB** (DAPLink) pour copier un programme sur la carte par simple glisser-déposer

La carte embarque aussi une batterie LiPo rechargeable de 1600 mAh offrant une autonomie confortable pour les projets nomades.

<div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem'}}>
  <figure style={{flex: '1 1 300px', margin: 0}}>
    <img src="/img/ressources/inovmicro-exao/decouverte-steami/steami-front.png" alt="STeaMi face avant" style={{width: '100%', height: 'auto'}} />
    <figcaption style={{margin: 0, textAlign: 'center'}}>Face avant</figcaption>
  </figure>
  <figure style={{flex: '1 1 300px', margin: 0}}>
    <img src="/img/ressources/inovmicro-exao/decouverte-steami/steami-back.png" alt="STeaMi face arrière" style={{width: '100%', height: 'auto'}} />
    <figcaption style={{margin: 0, textAlign: 'center'}}>Face arrière</figcaption>
  </figure>
</div>

### Les 7 capteurs internes

La STeaMi intègre nativement plusieurs capteurs qui permettent une grande variété d'expérimentations sans matériel externe :

- **Accéléromètre** : mesure les accélérations sur 3 axes (mouvement, chocs, orientation)
- **Gyroscope** : mesure les rotations (vitesse angulaire)
- **Magnétomètre** : boussole numérique, détection de champs magnétiques
- **Capteur de température** : mesure de la température ambiante
- **Capteur d'humidité** : mesure du taux d'humidité relative
- **Capteur de pression** : mesure de la pression atmosphérique (altimètre)
- **Capteur de luminosité** : mesure de l'intensité lumineuse

<figure style={{margin: '1rem auto', textAlign: 'center'}}>
  <img src="/img/ressources/inovmicro-exao/decouverte-steami/block-diagram-4b6b854ea5393525647af2f27d97ee4c.svg" alt="Diagramme bloc de la STeaMi" style={{maxWidth: '100%', height: 'auto', margin: '0 auto'}} />
  <figcaption style={{margin: 0}}>Diagramme fonctionnel de la STeaMi</figcaption>
</figure>

### L'écran OLED 128×128

L'écran OLED intégré permet d'afficher du texte, des graphiques, des images ou des animations directement sur la carte. Idéal pour afficher les valeurs des capteurs en temps réel sans avoir besoin d'un ordinateur.

### Connecteurs d'extension

La STeaMi dispose de deux types de connecteurs pour étendre ses fonctionnalités :

- **Edge compatible micro:bit** : permet d'utiliser de nombreux accessoires conçus pour les cartes micro:bit
- **Connecteur Qwiic** : branchement plug-and-play à de nombreux capteurs et modules Sparkfun/Adafruit sans soudure

---

## Premier contact avec la carte

### Étape 1 : Allumer la carte

- Connectez la carte STeaMi à votre ordinateur avec son câble USB (micro-USB sur la STeaMi V1, USB-C sur la STeaMi V2)
- La carte s'allume et apparaît comme une clé USB nommée **STEAMI** sur l'ordinateur
- L'écran OLED affiche un message de démarrage

### Étape 2 : Choisir un environnement de programmation

Trois environnements sont supportés pour programmer la STeaMi :

- **MicroPython** : langage Python adapté aux microcontrôleurs, recommandé pour les lycéens
- **MakeCode** : programmation par blocs visuels, idéal pour débuter
- **Arduino / CODAL** : programmation C++ pour les utilisateurs avancés

Pour commencer, nous recommandons **MicroPython** ou **MakeCode** selon le niveau des élèves.

### Étape 3 : Écrire un premier programme

Le programme le plus simple : faire clignoter la LED rouge.

```python
# Testée avec firmware STeaMi 0.23.1
from machine import Pin
from time import sleep_ms

led = Pin('LED_RED', Pin.OUT)

while True:
    led.on()
    sleep_ms(500)
    led.off()
    sleep_ms(500)
```

Pour les éditeurs MakeCode, l'équivalent passe par le bloc _allumer la LED_ + une pause de 500 ms, en boucle.

### Étape 4 : Téléverser le programme

- **Glisser-déposer** : depuis l'ordinateur, glisser le fichier `.hex` (MakeCode) ou `.py` (MicroPython) sur la clé USB **STEAMI**.
- La LED orange clignote pendant le transfert.
- La carte redémarre automatiquement et exécute le programme.

:::info[Notes pour l'enseignant·e]

Le glisser-déposer rend la STeaMi accessible aux débutant·es : pas besoin d'installer un IDE complexe pour le tout premier programme. Les élèves peuvent développer dans l'éditeur web puis copier le fichier en un clic. Pour aller plus loin et bénéficier d'une console interactive, voir la fiche [Thonny : prise en main de MicroPython](/ressources/inovmicro-exao/t03-decouverte-thonny).

:::

---

## Premières expérimentations

Une fois la LED qui clignote validée, plusieurs pistes permettent d'explorer les capteurs et l'écran de la carte. Chacune fait l'objet d'une fiche dédiée :

- **Allumer la LED selon la luminosité ambiante** : voir la fiche [Capteur de lumière en MicroPython](/ressources/inovmicro-exao/i04-capteur-lumiere).
- **Faire sonner le buzzer en code Morse** : voir la fiche [Code Morse avec le buzzer](/ressources/inovmicro-exao/i06-code-morse).
- **Afficher du texte et des graphismes sur l'écran OLED** : voir la fiche [Texte sur l'écran OLED](/ressources/inovmicro-exao/i10-texte-oled).

Pour les autres capteurs (température et humidité via le HTS221, accélération via l'ISM330DL, pression atmosphérique, magnétomètre), des fiches dédiées sont en préparation dans le cadre du projet I-Novmicro #2.

En cas de problème (carte qui n'apparaît pas, port série introuvable, console qui reste muette), consulter la fiche [Dépanner la STeaMi](/ressources/inovmicro-exao/depannage) avant de creuser plus loin.

---

## Aller plus loin

### Pour s'inspirer

La STeaMi permet de réaliser de nombreux projets pédagogiques. Quelques pistes pour amorcer une séquence :

- **Station météo** : enregistrer température, humidité et pression sur plusieurs jours
- **Altimètre** : mesurer une altitude à partir de la pression atmosphérique
- **Podomètre** : compter les pas à l'aide de l'accéléromètre
- **Niveau à bulle numérique** : afficher l'inclinaison de la carte
- **Détecteur de luminosité** : allumer un buzzer en cas d'obscurité
- **Jeu de réflexes** : utiliser boutons et écran pour mesurer les temps de réaction
- **Transmission sans fil** : envoyer des données de capteur en Bluetooth vers un smartphone

### Pour approfondir

Documentation technique pour préparer une séquence ou répondre aux questions des élèves les plus avancé·es :

- **Documentation officielle** : [wiki.steami.cc](https://wiki.steami.cc/)
- **Site STeaMi** : [steami.cc](https://steami.cc)
- **Drivers MicroPython** : [github.com/steamicc/micropython-steami-lib](https://github.com/steamicc/micropython-steami-lib)
- **Design de référence** : [github.com/steamicc/steami-reference-design](https://github.com/steamicc/steami-reference-design)
- **Documentation MicroPython** : [docs.micropython.org](https://docs.micropython.org/en/latest/)
- **STM32Python** : [stm32python.gitlab.io](https://stm32python.gitlab.io/fr/)

---

*Cette fiche fait partie du projet [I-Novmicro #2 : Action EXAO](/projets/inovmicro-exao). Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr). Informations basées sur la [documentation officielle STeaMi](https://wiki.steami.cc/).*

# RESSOURCES - PROGRAMMATION - FICHE D'ACTIVITÉ 4

# CAPTEURS DE LUMIÈRE

## Découverte et première utilisation

**#R1AS04**

---

## De quoi parle-t-on ?

Cette fiche d'activité aborde les résistances. Une photorésistance (*Light Dependent Resistor* - LDR) est un composant utilisé pour mesurer l'intensité de la lumière.

---

## Informations générales

| | |
|---|---|
| **Durée** | 25 minutes |
| **Niveau de difficulté** | Intermédiaire |

### Prérequis

- R1AS02 - Breadboard
- R1AS03 - Boutons et affichage LED

### Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 1 câble USB Micro-B
- 1 set de résistances
- 1 photorésistance (LDR)
- 1 breadboard
- Câbles de connexion

### Objectifs d'apprentissage

- Créer un détecteur de lumière basique avec quelques composants électroniques sur une breadboard et le connecter à la carte
- Créer un programme dans MakeCode qui est capable de mesurer une quantité physique au moyen d'un capteur analogique
- Produire un graphique qui montre comment une valeur mesurée varie dans le temps

---

## Étape 1 - Construire

Cette activité illustre une caractéristique clé du *Physical Computing* : la possibilité de mesurer une quantité physique à l'aide d'un capteur et de représenter graphiquement la façon dont cette quantité varie dans le temps. Nous allons connecter une **photorésistance** (LDR) à la carte pour mesurer l'intensité de lumière. Ce type de capteur est appelé un **capteur analogique** car il présente une caractéristique analogique du circuit (tension) pour représenter la valeur physique réelle.

**Ressource :** [https://www.watelectrical.com/what-are-analog-sensors-types-and-their-characteristics/](https://www.watelectrical.com/what-are-analog-sensors-types-and-their-characteristics/)

### 1. Câbler la cellule photoélectrique

Le circuit que nous devons assembler se compose de deux éléments : une **résistance de 4,7 kohms** et une **cellule photoélectrique**.

> **Info :** La couleur des trois premières bandes indique la valeur de résistance du composant, selon un code connu sous le nom de "code couleur des résistances". La quatrième bande indique que la valeur de résistance est sujette à une tolérance (incertitude) qui peut être de 5 % (si la bande est dorée) ou de 10 % (si la bande est argentée) de la valeur de résistance nominale.

> **Info :** Les **photorésistances** (alias LDR, cellule photoélectrique, ou cellule photoconductrice) sont des composants dont la résistance électrique varie en fonction de l'intensité de la lumière à laquelle ils sont exposés.

La manière la plus simple de mesurer un capteur résistif est de connecter une extrémité à l'alimentation et l'autre à une résistance de rappel (*pull-down*) à la masse. Ensuite, le point situé entre la résistance de rappel et la cellule photoélectrique est connecté à l'entrée analogique d'un microcontrôleur. Un tel montage constitue ce que nous appelons un **capteur analogique**. Ce terme signifie que **ce circuit est capable de capter une grandeur physique** (à savoir l'intensité lumineuse) et de la transformer en une **grandeur électrique proportionnelle** (à savoir une tension dont la valeur est comprise entre 0 V et 3,3 V). Ces deux composants doivent être assemblés sur une breadboard.

### 2. Câbler la breadboard à la carte STM32 IoT Node Board

Une fois que la breadboard a été assemblée, il faut la connecter à la carte. La carte possède quatre blocs de broches, nommés respectivement **CN1**, **CN2**, **CN3** et **CN4**. Comme les quatre blocs ont des fonctions différentes, utilisez le bouton bleu situé à l'un des quatre coins de la carte comme point de repère pour identifier correctement les quatre blocs.

Le fil rouge doit être connecté à la **broche 4** du bloc **CN2**, qui est connectée en interne à un potentiel de 3,3 V. Le fil noir doit être connecté à la **broche 6** du bloc **CN2**, qui est connectée en interne au potentiel de masse (**GND**). Enfin, le fil jaune doit être connecté à la **broche 1** du bloc **CN4**. Cette broche est connectée en interne à la broche d'entrée analogique nommée **A0**.

### 3. Connecter la carte à l'ordinateur

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur **micro-USB ST-LINK** (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé **DIS_L4IOT**. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

### 4. Ouvrir MakeCode

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur.

**Ressource :** [makecode.lets-steam.eu](https://makecode.lets-steam.eu)

### 5. Programmer la carte

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton **"Télécharger"**. Copiez le fichier binaire sur le lecteur **DIS_L4IOT** et attendez que la carte finisse de clignoter — votre programme est prêt !

### 6. Connecter la console de la carte

Dans l'éditeur MakeCode, cliquez sur le bouton "Show console Simulator" sur le côté gauche, en dessous de la représentation de la carte. Le terminal montre alors les valeurs de lumière lues périodiquement par le programme. Ces valeurs peuvent être exportées sous forme de fichier CSV en cliquant sur le bouton "Export data" dans le coin supérieur droit de la console.

### 7. Exécuter, modifier, jouer

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé **RESET**). Essayez de comprendre l'exemple et commencez à le modifier en changeant la période entre deux sessions de mesure. Vous pouvez cacher la cellule photoélectrique avec votre main pour observer directement le changement de valeur.

---

## Étape 2 - Programmer

```javascript
let lightSensorValue = 0
forever(function () {
    lightSensorValue = pins.A0.analogRead()
    console.logValue("light", lightSensorValue)
    pause(500)
})
```

### Comment cela fonctionne-t-il ?

Le code se compose de :

- un bloc de boucle infinie (`forever`) ;
- un bloc d'enregistrement de la console (`console.log`) ;
- un bloc de `pause`.

Le bloc `forever` implémente "une boucle", qui continue à exécuter trois instructions de base jusqu'à ce que la carte soit éteinte.

Le premier bloc lit la valeur de la broche d'entrée analogique **A0** et la stocke dans une variable appelée `lightSensorValue`. Cette valeur est un nombre entier compris entre **0** et **1023**.

> **Info :** Une **broche d'entrée analogique** peut être utilisée pour lire une valeur comprise entre 0 et 1023. Cette valeur est proportionnelle à la tension appliquée à la broche, qui DOIT être comprise entre 0 V et 3,3 V (par rapport à GND).

Le deuxième bloc écrit sur la console de la carte ce qui a été obtenu par la lecture de la valeur du capteur. Dès que cette instruction a été exécutée, la carte suspend son activité (`pause`) pendant 500 millisecondes, c'est-à-dire une demi-seconde.

**Des questions se posent alors naturellement : qu'est-ce que la console de la carte ? Comment est-il possible de lire ce qui est écrit sur la console ? La console de la carte permet à la carte d'interagir simplement avec le PC qui lui est connecté via le câble USB.**

---

## Étape 3 - Améliorer

1. Utilisez votre détecteur dans de nombreuses conditions de lumière (lumière ambiante, nuit au clair de lune, ...). Comment pouvons-nous calibrer notre détecteur pour qu'il soit bien adapté à la condition de détection ? Essayez plusieurs valeurs de la résistance de rappel pour voir l'impact.

2. Ajoutez une LED et transformez ce circuit en un variateur de lumière contrôlable à la main.

3. La valeur réelle du capteur est une valeur comprise entre 0 et 1023. Relevez la valeur de la lumière la plus sombre et la valeur de la lumière la plus claire, et transformez la valeur originale en une valeur en pourcentage, plus explicite.

---

## Aller plus loin

- **Photorésistance** - En savoir plus sur les photorésistances, leurs applications et leur conception.
  [https://en.wikipedia.org/wiki/Photoresistor](https://en.wikipedia.org/wiki/Photoresistor)

- **Guide de branchement des cellules photoélectriques** - Introduction rapide aux cellules photoélectriques résistives, et démonstration de leur branchement et de leur utilisation.
  [https://learn.sparkfun.com/tutorials/photocell-hookup-guide/all](https://learn.sparkfun.com/tutorials/photocell-hookup-guide/all)

- **Cellules photoélectriques** - Découvrez les cellules photoélectriques, une résistance qui change de valeur résistive en fonction de la quantité de lumière qui éclaire la face avec un circuit ondulé.
  [https://learn.adafruit.com/photocells](https://learn.adafruit.com/photocells)

- **Lecture analogique d'une broche** - Choisissez une broche et lisez un signal analogique (0-1023) à partir de celle-ci.
  [https://makecode.microbit.org/reference/pins/analog-read-pin](https://makecode.microbit.org/reference/pins/analog-read-pin)

### Explorer d'autres fiches d'activité

- **R1AS11** - Fabriquer un thermomètre... très, très lisible
- **R1AS15** - Collecter des données

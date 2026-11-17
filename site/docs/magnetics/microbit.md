---
id: microbit
title: Créer des projets multicartes sur micro:bit
sidebar_label: 'micro:bit'
sidebar_position: 1
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Créer des projets multicartes sur micro:bit

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">micro:bit v2</span>
  <span className="badge badge--warning">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| Magnetics | 50 minutes | Avancé | 13-18 ans |

## Matériel

- 4 cartes programmables _micro:bit v2_
- 1 câble USB Micro-B

<PdfLink href="/pdf/magnetics/Magnetics_Microbit.pdf">Télécharger en PDF</PdfLink>

</div>

<img src="/img/ressources/magnetics/microbit/icone.png" alt="Créer des projets multicartes sur micro:bit" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Dans cette activité, on programme plusieurs cartes électroniques et on échange des données de capteurs à l'aide de l'extension Magnetics, qui permet une communication maillée sans fil.

:::info

Cette fiche d'activité propose de créer des projets plus complexes avec plusieurs cartes électroniques non connectées entre elles. Une fois les capteurs maîtrisés, on peut monter des expériences qui demandent plusieurs cartes. Pour collecter les données, les cartes doivent alors pouvoir communiquer entre elles par les airs. Le projet Magnetics est une brique logicielle implantée directement dans MakeCode. Il utilise la technologie de réseau maillé Bluetooth Low Energy Mesh (BLE Mesh), compatible avec toutes les cartes programmables qui ont un module Bluetooth Low Energy.

**Ressources :**

- [magnetics.edu-up.fr (archive.org, 2025-12-06)](https://web.archive.org/web/20251206204723/https://magnetics.edu-up.fr/)
- [blog.rtone.fr/bluetooth-mesh](https://blog.rtone.fr/bluetooth-mesh)
- [Bluetooth basse consommation (Wikipédia)](https://fr.wikipedia.org/wiki/Bluetooth_%C3%A0_basse_consommation)

:::

## Objectifs d'apprentissage

- Utiliser l'extension Magnetics pour construire des projets multicartes
- Appréhender le fonctionnement des modules Bluetooth BLE Mesh

---

## Étape 1 - Construire

Pour cette activité, il faut quatre cartes micro:bit v2. Trois d'entre elles seront **émettrices** de données de capteurs (température, niveau sonore, intensité lumineuse), et la dernière sera **collectrice** des données qu'elle affichera sur ses LEDs. Seuls les capteurs internes sont utilisés. Commencer par câbler et programmer la carte collectrice, puis programmer individuellement chaque carte émettrice pour construire votre projet.

### Activité 1 - Préparer, câbler et programmer la carte collectrice

#### 1. Connecter la carte à l'ordinateur

Avec votre câble USB, connectez la carte collectrice à votre ordinateur en utilisant le connecteur micro-USB. Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur.

#### 2. Ouvrir MakeCode

Allez dans l'éditeur MakeCode pour micro:bit. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "**Nouveau projet**". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur.

**Ressource :** [makecode.microbit.org](https://makecode.microbit.org/)

#### 3. Installer l'extension

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut « prêt à l'emploi » et vous devrez installer une extension.

:::info

Les extensions de MakeCode sont des groupes de blocs de code qui ne font pas partie des blocs de base. Elles ajoutent des blocs pour des fonctionnalités précises : manette de jeu, clavier, souris, servomoteurs, robotique, entre autres.

:::

Cliquez sur le bloc "**EXTENSIONS**" pour installer les nouveaux blocs dont vous allez avoir besoin. Pour accéder à Magnetics, vous devrez copier/coller l'URL suivante dans la barre de recherche : [github.com/letssteam/pxt-magnetics](https://github.com/letssteam/pxt-magnetics).

<img src="/img/ressources/magnetics/microbit/extensionsmagneticssurmicrobit.png" alt="Extension Magnetics dans MakeCode pour micro:bit" style={{maxWidth: '70%', height: 'auto', margin: '0.75rem 0'}} />

**Magnetics utilisant le Bluetooth, MakeCode vous demandera de supprimer l'extension "RADIO" de votre projet.**

#### 4. Programmer la carte

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "**Programmer**" ci-dessous. Cliquez sur le bouton "**Télécharger**" et attendez que la carte finisse de clignoter.

### Activité 2 - Programmer chaque carte émettrice individuellement

Une fois la carte collectrice programmée, préparer les trois cartes émettrices en suivant les mêmes étapes de programmation que lors de l'étape 1. Pour chaque carte, effectuer les tâches suivantes :

#### 1. Connecter la carte à l'ordinateur

Avec votre câble USB, connectez la carte émettrice que vous souhaitez programmer à votre ordinateur en utilisant le connecteur micro-USB. Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

#### 2. Ouvrir MakeCode

Allez dans l'éditeur MakeCode pour micro:bit. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur.

**Ressource :** [makecode.microbit.org](https://makecode.microbit.org/)

#### 3. Installer l'extension

De la même manière qu'à l'étape 1, ajoutez l'extension **Magnetics** à la liste de bloc via le menu "**EXTENSIONS**".

#### 4. Programmer la carte

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "**Programmer**" ci-dessous relatif à la carte émettrice que vous êtes en train de programmer. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "**Télécharger**" et attendez que la carte finisse de clignoter.

<img src="/img/ressources/magnetics/microbit/exemple-editeur-bloc-emettrice-temperature.png" alt="Exemple de l'éditeur en mode bloc pour le code de la carte émettrice de la température" style={{maxWidth: '90%', height: 'auto', margin: '0.75rem 0'}} />

### Activité 3 - Exécuter, modifier, jouer

Une fois votre carte collectrice reliée à votre écran, et vos quatre cartes programmées, votre programme est prêt à être utilisé. Votre programme s'exécutera automatiquement chaque fois que vous les mettrez sous tension ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET). Essayez de comprendre le fonctionnement de votre code et commencez à le modifier en créant vos propres projets.

---

## Étape 2 - Programmer

### Code de la carte collectrice

```javascript
let temperature = "...";
let lightLevel = "...";
let sound = "...";
let lastShow = 0;

magnetics.startScanning()
forever(function () {

    if (magnetics.availableDataFromName("DeviceTemp")) {
        temperature = magnetics.readDataFromName("DeviceTemp")
    }
    if (magnetics.availableDataFromName("DeviceLight")) {
        lightLevel = magnetics.readDataFromName("DeviceLight")
    }
    if (magnetics.availableDataFromName("DeviceSound")) {
        sound = magnetics.readDataFromName("DeviceSound")
    }

    if ( control.millis() - lastShow >= 2000 ){
        basic.showString("Capteurs:")
        basic.showString(temperature)
        basic.showString(lightLevel)
        basic.showString(sound)

        lastShow = control.millis();
    }
})
```

### Code de la carte émettrice de la température

```javascript
magnetics.setLocalName("DeviceTemp")
magnetics.startEmitting()
basic.forever(function () {
magnetics.setAdvertisingKeyValueData("Temp (°C)", input.temperature())
    pause(500)
})
```

<img src="/img/ressources/magnetics/microbit/blocs-emettrice-temperature.png" alt="Blocs pour le code de la carte émettrice de la température" style={{maxWidth: '70%', height: 'auto', margin: '0.75rem 0'}} />

### Code de la carte émettrice de l'intensité lumineuse

```javascript
magnetics.setLocalName("DeviceLight")
magnetics.startEmitting()
forever(function () {
magnetics.setAdvertisingKeyValueData("Light ()", input.lightLevel())
    pause(500)
})
```

### Code de la carte émettrice du niveau sonore

```javascript
magnetics.setLocalName("DeviceSound")
magnetics.startEmitting()
forever(function () {
magnetics.setAdvertisingKeyValueData("Sound ()", input.soundLevel())
    pause(500)
})
```

### Fonctionnement du programme : Initialiser la collecte de données

Le code des trois cartes émettrices est quasiment identique (seul le capteur change) et reste simple à comprendre.

Pour commencer, la fonction `setLocalName` donne un nom à la carte, ce qui permettra au collecteur de reconnaître la donnée envoyée. Pour que la carte puisse émettre des données, il faut lui préciser son rôle : c'est ce que fait la fonction `startEmitting`. Enfin, le programme envoie la donnée du capteur avec la fonction `setAdvertisingKeyValueData` toutes les 500 millisecondes (c'est-à-dire deux fois par seconde).

Le code du collecteur déclare d'abord 4 variables :

- `temperature`, `light` et `sound` qui contiendront les données émises par les émetteurs (respectivement pour la température, l'intensité lumineuse et le niveau sonore)
- `lastShow` qui enregistre le moment du dernier affichage des données (en millisecondes).

Une fois les variables initialisées, le programme appelle `startScanning` pour rechercher les cartes émettrices à proximité. Le reste du code se trouve dans la fonction `forever` : il se répète donc indéfiniment. Les trois premiers `if(...)` vérifient si des données sont arrivées des émetteurs (grâce à la fonction `availableDataFromName`). Si c'est le cas, le programme enregistre la donnée dans la variable associée (avec `readDataFromName`).

Il reste à afficher les données sur l'écran de LEDs. La dernière condition `if` met à jour l'écran avec les nouvelles données, seulement si cela fait plus de deux secondes qu'il n'a pas été rafraîchi.

---

## Étape 3 - Améliorer

- Cette activité ne fait qu'afficher les informations sur un écran, mais il est possible d'utiliser le datalogger pour enregistrer les données et les analyser.
- Utiliser une boîte étanche et faire une station météo : comme la connexion est sans fil, un écran à l'intérieur pourrait afficher les données environnementales de l'extérieur.

---

## Aller plus loin

- **Bluetooth** : découvrir plus d'informations sur cette norme de télécommunication si présente dans la vie quotidienne.
  [fr.wikipedia.org/wiki/Bluetooth](https://fr.wikipedia.org/wiki/Bluetooth)

- **CircuitPython BLE Libraries on Any Computer** : utilisez le code BLE de CircuitPython sur les ordinateurs de bureau, les ordinateurs portables et les Raspberry Pi grâce aux bibliothèques Adafruit.
  [learn.adafruit.com/circuitpython-ble-libraries-on-any-computer](https://learn.adafruit.com/circuitpython-ble-libraries-on-any-computer)

- **Bouton de volume BLE avec CircuitPython** : transformez votre Bluefruit de Circuit Playground en bouton de volume BLE sans fil.
  [learn.adafruit.com/bluetooth-le-hid-volume-knob-with-circuitpython](https://learn.adafruit.com/bluetooth-le-hid-volume-knob-with-circuitpython)

---

_Cette fiche fait partie du projet [Magnetics](/projets/magnetics), financé par le dispositif Edu-up. Elle complète le travail réalisé dans le cadre du projet [Let's STEAM](/projets/lets-steam). Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._

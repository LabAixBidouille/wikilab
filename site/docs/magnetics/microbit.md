---
id: microbit
title: Magnetics — Créer des projets multicartes (micro:bit)
sidebar_label: 'Magnetics — micro:bit'
sidebar_position: 1
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><circle cx="12" cy="12" r="10" fill="#094869" opacity="0.1"/><circle cx="12" cy="12" r="2.5" fill="#094869" opacity="1.0"/><circle cx="4" cy="6" r="2" fill="#094869" opacity="0.6"/><circle cx="20" cy="6" r="2" fill="#094869" opacity="0.6"/><circle cx="4" cy="18" r="2" fill="#094869" opacity="0.6"/><circle cx="20" cy="18" r="2" fill="#094869" opacity="0.6"/><line x1="12" y1="12" x2="4" y2="6" stroke="#094869" strokeWidth="1" opacity="0.5"/><line x1="12" y1="12" x2="20" y2="6" stroke="#094869" strokeWidth="1" opacity="0.5"/><line x1="12" y1="12" x2="4" y2="18" stroke="#094869" strokeWidth="1" opacity="0.5"/><line x1="12" y1="12" x2="20" y2="18" stroke="#094869" strokeWidth="1" opacity="0.5"/></svg> Magnetics — Créer des projets multicartes (micro:bit)

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

<a href="/pdf/magnetics/Magnetics_Microbit.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger en PDF</a>

</div>

<img src="/img/ressources/magnetics/microbit/icone.png" alt="Magnetics — micro:bit" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Dans cette activité, nous allons programmer plusieurs cartes électroniques et échanger des données de capteurs à l'aide de l'extension Magnetics, qui permet une communication maillée sans fil.

:::info

Cette fiche d'activité propose de créer des projets plus complexes en utilisant plusieurs cartes électroniques non connectées entre elles. Une fois les capteurs maîtrisés, nous pouvons en effet mettre en place des expériences nécessitant l'utilisation de plusieurs cartes. Afin de réaliser la collecte des données, il faut pouvoir faire communiquer les cartes entre elles par les airs. Dans cette activité nous allons programmer plusieurs cartes électroniques et échanger des données de capteurs à l'aide de l'extension **Magnetics** que permet de mettre en œuvre une communication sans fil maillée. Le projet Magnetics prend la forme d'une brique technique logicielle implantée directement dans MakeCode. Ce développement est basé sur l'utilisation de la technologie de réseau maillé **Bluetooth Low Energy Mesh** (BLE Mesh) compatible avec toutes les cartes programmables disposant d'un module **Bluetooth Low Energy**.

**Ressources :**

- [magnetics.edu-up.fr](https://www.magnetics.edu-up.fr/)
- [blog.rtone.fr/bluetooth-mesh](https://blog.rtone.fr/bluetooth-mesh)
- [Bluetooth basse consommation (Wikipédia)](https://fr.wikipedia.org/wiki/Bluetooth_%C3%A0_basse_consommation)

:::

## Objectifs d'apprentissage

- Utiliser l'extension Magnetics pour construire des projets multicartes
- Appréhender le fonctionnement des modules Bluetooth BLE Mesh

---

## Étape 1 - Construire

Pour réaliser cette activité nous avons besoin de **quatre cartes micro:bit v2**. Trois d'entre elles seront **émettrices** de données de capteurs (température, niveau sonore, intensité lumineuse), et la dernière sera **collectrice** des données qu'elle affichera sur ses LEDs. Nous utiliserons uniquement les capteurs internes. Nous allons donc vous donner la marche à suivre pour câbler et programmer en premier lieu la carte collectrice puis dans un second temps, programmer individuellement chaque carte émettrice afin de pouvoir construire votre projet.

### Activité 1 - Préparer, câbler et programmer la carte collectrice

#### 1. Connecter la carte à l'ordinateur

Avec votre câble USB, connectez la carte collectrice à votre ordinateur en utilisant le connecteur micro-USB. Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur.

#### 2. Ouvrir MakeCode

Allez dans **l'éditeur MakeCode pour micro:bit**. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "**Nouveau projet**". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur.

**Ressource :** [makecode.microbit.org](https://makecode.microbit.org/)

#### 3. Installer l'extension

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut "prêt à l'emploi" et vous devrez installer une extension.

:::info

Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de la robotique et bien plus encore.

:::

Cliquez sur le bloc "**EXTENSIONS**" pour installer les nouveaux blocs dont vous allez avoir besoin. Pour accéder à Magnetics, vous devrez copier/coller l'URL suivante dans la barre de recherche : [github.com/letssteam/pxt-magnetics](https://github.com/letssteam/pxt-magnetics).

<img src="/img/ressources/magnetics/microbit/extensionsmagneticssurmicrobit.png" alt="Extension Magnetics dans MakeCode pour micro:bit" style={{maxWidth: '70%', height: 'auto', margin: '0.75rem 0'}} />

**Magnetics utilisant le Bluetooth, MakeCode vous demandera de supprimer l'extension "RADIO" de votre projet.**

#### 4. Programmer la carte

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "**Programmer**" ci-dessous. Cliquez sur le bouton "**Télécharger**" et attendez que la carte finisse de clignoter.

### Activité 2 - Programmer chaque carte émettrice individuellement

Une fois la carte collectrice programmée, nous pouvons préparer les trois cartes émettrices en suivant les mêmes étapes de programmation que lors de l'étape 1. Pour chaque carte, il faudra donc effectuer les tâches suivantes :

#### 1. Connecter la carte à l'ordinateur

Avec votre câble USB, connectez la carte émettrice que vous souhaitez programmer à votre ordinateur en utilisant le **connecteur micro-USB**. Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

#### 2. Ouvrir MakeCode

Allez dans **l'éditeur MakeCode pour micro:bit**. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur.

**Ressource :** [makecode.microbit.org](https://makecode.microbit.org/)

#### 3. Installer l'extension

De la même manière qu'à l'étape 1, ajoutez l'extension **Magnetics** à la liste de bloc via le menu "**EXTENSIONS**".

#### 4. Programmer la carte

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "**Programmer**" ci-dessous relatif à la carte émettrice que vous êtes en train de programmer. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "**Télécharger**" et attendez que la carte finisse de clignoter.

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

<div style={{display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap', margin: '0.75rem 0'}}>
  <img src="/img/ressources/magnetics/microbit/blocs-emettrice-temperature.png" alt="Blocs pour le code de la carte émettrice de la température" style={{maxWidth: 'calc(50% - 0.75rem)', height: 'auto', alignSelf: 'flex-start'}} />
  <img src="/img/ressources/magnetics/microbit/exemple-editeur-bloc-emettrice-temperature.png" alt="Exemple de l'éditeur en mode bloc pour le code de la carte émettrice de la température" style={{maxWidth: 'calc(50% - 0.75rem)', height: 'auto', alignSelf: 'flex-start'}} />
</div>

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

### Comment cela fonctionne-t-il ? Initialiser la collecte de données

Cela fait beaucoup de code, mais rien de très complexe, puisque le code des **cartes émettrices** est quasiment identique (il n'y a que le capteur qui change) et reste simple à comprendre.

Pour commencer, on donne un nom à notre carte à l'aide de la fonction `setLocalName`, ce qui permettra au collecteur de reconnaître la donnée envoyée. Pour que la carte puisse émettre des données, il faut lui préciser son rôle, c'est ce que fait la fonction `startEmitting`. Enfin, via la fonction `setAdvertisingKeyValueData`, nous envoyons la donnée du capteur toutes les 500 millisecondes (c'est-à-dire deux fois par seconde).

Enfin, intéressons-nous au code du collecteur. Au début, nous déclarons 4 variables :

- `temperature`, `light` et `sound` qui contiendront les données émises par les émetteurs (respectivement pour la température, l'intensité lumineuse et le niveau sonore)
- `lastShow` qui permet de savoir à quand remonte le dernier affichage des données (en millisecondes).

Une fois les variables initialisées, nous faisons appel à `startScanning`, pour rechercher les cartes émettrices qui sont à proximité. Le reste du code se trouve dans la fonction `forever` ce qui implique, que nous allons répéter indéfiniment le code suivant. Les trois premiers `if(...)` permettent de savoir si nous avons reçu des données de la part des émetteurs (grâce à la fonction `availableDataFromName`), si tel est le cas, alors on enregistre cette donnée dans la variable associée (en utilisant `readDataFromName`).

Maintenant que nous avons les données, il faut les afficher sur notre écran de LEDs, c'est le rôle de la dernière condition `if`, qui nous permet de mettre à jour notre écran avec les nouvelles données, seulement si cela fait plus de deux secondes qu'il n'a pas été rafraîchi.

---

## Étape 3 - Améliorer

- Cette activité ne fait qu'afficher les informations sur un écran, mais il est possible d'utiliser le datalogger, pour enregistrer nos données et les analyser.
- Utiliser une boîte étanche et faire une station météo : la connexion étant sans fil, on pourrait avoir un écran en intérieur nous affichant les données environnementales de l'extérieur.

---

## Aller plus loin

- **Bluetooth** — Découvrir plus d'informations sur cette norme de télécommunication si présente dans notre vie quotidienne.
  [fr.wikipedia.org/wiki/Bluetooth](https://fr.wikipedia.org/wiki/Bluetooth)

- **CircuitPython BLE Libraries on Any Computer** — Utilisez le code BLE de CircuitPython sur les ordinateurs de bureau, les ordinateurs portables et les Raspberry Pi grâce aux bibliothèques Adafruit.
  [learn.adafruit.com/circuitpython-ble-libraries-on-any-computer](https://learn.adafruit.com/circuitpython-ble-libraries-on-any-computer)

- **Bouton de volume BLE avec CircuitPython** — Transformez votre Bluefruit de Circuit Playground en bouton de volume BLE sans fil.
  [learn.adafruit.com/bluetooth-le-hid-volume-knob-with-circuitpython](https://learn.adafruit.com/bluetooth-le-hid-volume-knob-with-circuitpython)

---

_Cette fiche fait partie du projet [Magnetics](/projets/magnetics), financé par le dispositif Edu-up. Elle complète le travail réalisé dans le cadre du projet [Let's STEAM](/projets/lets-steam). Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._

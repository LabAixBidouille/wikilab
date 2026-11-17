---
id: makecode-stm32
title: Créer des projets multicartes sur MakeCode (STM32)
sidebar_label: 'MakeCode STM32'
sidebar_position: 2
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Créer des projets multicartes sur MakeCode (STM32)

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--warning">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| Magnetics | 50 minutes | Avancé | 13-18 ans |

## Matériel

- 4 cartes programmables _STM32 IoT Node Board_
- 1 câble USB Micro-B
- 1 écran OLED Monochrome 1.3" 128x64 OLED de Adafruit
- 1 câble QT pour connecter l'écran à la carte

<PdfLink href="/pdf/magnetics/Magnetics_MakeCode_STM32.pdf">Télécharger en PDF</PdfLink>

</div>

<img src="/img/ressources/magnetics/makecode-stm32/icone.png" alt="Magnetics — MakeCode STM32" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Dans cette activité, on programme plusieurs cartes électroniques et on échange des données de capteurs à l'aide de l'extension Magnetics, qui permet une communication maillée sans fil.

:::info

Cette fiche d'activité propose de créer des projets plus complexes en utilisant plusieurs cartes électroniques non connectées entre elles. Une fois les capteurs maîtrisés, on peut mener des expériences qui demandent plusieurs cartes. Pour collecter les données, les cartes doivent communiquer entre elles par les airs. Le projet Magnetics est une brique logicielle implantée directement dans MakeCode. Il utilise la technologie de réseau maillé Bluetooth Low Energy Mesh (BLE Mesh), compatible avec toutes les cartes programmables qui ont un module Bluetooth Low Energy.

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

Pour réaliser cette activité, il faut quatre cartes STM32 IoT Nodes. Trois d'entre elles seront **émettrices** de données de capteurs (température, humidité, pression), et la dernière sera **collectrice** des données qu'elle affichera sur un écran OLED. Mis à part l'écran de la dernière, il n'y a pas de câblage car l'activité utilise uniquement les capteurs internes. Commencer par câbler et programmer la carte collectrice, puis programmer individuellement chaque carte émettrice.

### Activité 1 - Préparer, câbler et programmer la carte collectrice

#### 1. Câbler l'écran OLED

<div style={{display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap', margin: '0.75rem 0'}}>
<div style={{flex: '1 1 320px', minWidth: '280px'}}>

Câbler d'abord l'écran OLED directement à la carte collectrice. Il y a deux façons de câbler l'écran OLED SSD1306 à une carte : une connexion I2C ou SPI. Ici, l'écran est relié en I2C par le câble QWIIC/STEMMA, avec la convention suivante :

- **Noir** pour GND
- **Rouge** pour V+ (3V3)
- **Bleu** pour SDA (D14)
- **Jaune** pour SCL (D15)

</div>
<img src="/img/ressources/magnetics/makecode-stm32/oled.png" alt="Câblage de l'écran OLED sur la carte collectrice" style={{flex: '0 1 280px', maxWidth: '280px', height: 'auto', alignSelf: 'flex-start'}} />
</div>

#### 2. Connecter la carte à l'ordinateur

Avec votre câble USB, connectez la carte collectrice à votre ordinateur en utilisant le connecteur micro-USB. Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur.

#### 3. Ouvrir MakeCode

Allez dans **l'éditeur MakeCode de Let's STEAM**. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "**Nouveau projet**". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur.

**Ressource :** [makecode.lets-steam.eu](https://makecode.lets-steam.eu)

#### 4. Installer les extensions

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut et vous devrez installer deux extensions pour ce projet spécifique : "**magnetics**" et "**oled**".

:::info

Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas inclus dans les blocs de base de MakeCode. Elles ajoutent des blocs pour des fonctionnalités spécifiques, par exemple pour une manette de jeu, un clavier, une souris, des servomoteurs ou la robotique.

:::

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. En cliquant sur ce bouton, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton.

Dans la liste des extensions disponibles, vous pouvez trouver l'extension **Magnetics** qui sera utilisée pour cette activité. Si elle n'est pas directement disponible sur votre écran, vous pouvez la rechercher en utilisant la barre de recherche. Cliquez sur l'extension et un nouveau groupe de blocs apparaîtra sur l'écran principal. Réitérez cette action pour installer l'extension **OLED** également disponible. Vous pouvez commencer à programmer.

<img src="/img/ressources/magnetics/makecode-stm32/blocmagneticsextension.png" alt="Blocs associés à l'extension Magnetics" style={{maxWidth: '70%', height: 'auto', margin: '0.75rem 0'}} />

#### 5. Programmer la carte

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "**Programmer**" ci-dessous. Cliquez sur le bouton "**Télécharger**" et attendez que la carte finisse de clignoter.

### Activité 2 - Programmer chaque carte émettrice individuellement

Une fois la carte collectrice câblée avec l'écran OLED et programmée, préparer les trois cartes émettrices en suivant les mêmes étapes de programmation que lors de l'étape 1. Pour chaque carte, effectuer les tâches suivantes :

#### 1. Connecter la carte à l'ordinateur

Avec votre câble USB, connectez la carte émettrice que vous souhaitez programmer à votre ordinateur en utilisant le connecteur micro-USB. Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

#### 2. Ouvrir MakeCode

Allez dans **l'éditeur MakeCode de Let's STEAM**. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur.

**Ressource :** [makecode.lets-steam.eu](https://makecode.lets-steam.eu)

#### 3. Installer l'extension

De la même manière qu'à l'étape 1, ajoutez l'extension **Magnetics** à la liste de bloc via le menu "**AVANCÉ**" puis "**EXTENSIONS**".

#### 4. Programmer la carte

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "**Programmer**" ci-dessous relatif à la carte émettrice que vous êtes en train de programmer. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "**Télécharger**" et attendez que la carte finisse de clignoter.

### Activité 3 - Exécuter, modifier, jouer

Une fois votre carte collectrice reliée à votre écran, et vos quatre cartes programmées, votre programme est prêt à être utilisé. Votre programme s'exécutera automatiquement chaque fois que vous les mettrez sous tension ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET). Essayez de comprendre le fonctionnement de votre code et commencez à le modifier en créant vos propres projets.

---

## Étape 2 - Programmer

### Code de la carte collectrice

```javascript
let temperature = "...";
let humidity = "...";
let pressure = "...";
let lastShow = 0;

magnetics.startScanning()
forever(function () {

    if (magnetics.availableDataFromName("DeviceTemp")) {
        temperature = magnetics.readDataFromName("DeviceTemp")
    }
    if (magnetics.availableDataFromName("DeviceHum")) {
        humidity = magnetics.readDataFromName("DeviceHum")
    }
    if (magnetics.availableDataFromName("DevicePres")) {
        pressure = magnetics.readDataFromName("DevicePres")
    }

    if ( control.millis() - lastShow >= 2000 ){
        oled.clear()
        oled.showString("Données des capteurs:", 1)
        oled.showString(temperature, 3)
        oled.showString(humidity, 4)
        oled.showString(pressure, 5)

        lastShow = control.millis();
    }
})
```

<img src="/img/ressources/magnetics/makecode-stm32/blocspourlecollecteur.png" alt="Blocs pour le code du collecteur" style={{maxWidth: '90%', height: 'auto', margin: '0.75rem 0'}} />

### Code de la carte émettrice de la température

```javascript
magnetics.setLocalName("DeviceTemp")
magnetics.startEmitting()
forever(function () {
magnetics.setAdvertisingKeyValueData("Temp (°C)", input.temperature(TemperatureUnit.Celsius))
    pause(500)
})
```

<img src="/img/ressources/magnetics/makecode-stm32/exemple-programmation-bloc-emettrice-temperature.png" alt="Exemple de la programmation par bloc relative à la carte émettrice collectant les données de température" style={{maxWidth: '70%', height: 'auto', margin: '0.75rem 0'}} />

### Code de la carte émettrice de l'humidité

```javascript
magnetics.setLocalName("DeviceHum")
magnetics.startEmitting()
forever(function () {
magnetics.setAdvertisingKeyValueData("Hum (%)", input.humidity())
    pause(500)
})
```

### Code de la carte émettrice de la pression

```javascript
magnetics.setLocalName("DevicePres")
magnetics.startEmitting()
forever(function () {
magnetics.setAdvertisingKeyValueData("Pres (hPa)", input.pressure(PressureUnit.HectoPascal))
    pause(500)
})
```

### Comment cela fonctionne-t-il ? Initialiser la collecte de données

Le code des cartes émettrices est quasiment identique d'une carte à l'autre (seul le capteur change) et reste simple à comprendre.

Pour commencer, la fonction `setLocalName` donne un nom à la carte, ce qui permettra au collecteur de reconnaître la donnée envoyée. Pour que la carte puisse émettre des données, il faut lui préciser son rôle : c'est ce que fait la fonction `startEmitting`. Enfin, la fonction `setAdvertisingKeyValueData` envoie la donnée du capteur toutes les 500 millisecondes (c'est-à-dire deux fois par seconde).

Le code du collecteur déclare d'abord 4 variables :

- `temperature`, `humidity` et `pressure` qui contiendront les données émises par les émetteurs (respectivement pour la température, l'humidité et la pression atmosphérique)
- `lastShow`, qui garde le moment du dernier affichage des données (en millisecondes).

Une fois les variables initialisées, le programme appelle `startScanning` pour rechercher les cartes émettrices qui sont à proximité. Le reste du code se trouve dans la fonction `forever` : il se répète donc indéfiniment. Les trois premiers `if(...)` vérifient si des données sont arrivées des émetteurs (grâce à la fonction `availableDataFromName`). Si c'est le cas, le programme enregistre cette donnée dans la variable associée (avec `readDataFromName`).

Il reste à afficher les données sur l'écran OLED : c'est le rôle de la dernière condition `if`, qui met à jour l'écran avec les nouvelles données, seulement si cela fait plus de deux secondes qu'il n'a pas été rafraîchi.

---

## Étape 3 - Améliorer

- Cette activité ne fait qu'afficher les informations sur un écran, mais il est possible d'utiliser le datalogger pour enregistrer les données et les analyser.
- Utiliser une boîte étanche et faire une station météo : comme la connexion est sans fil, un écran placé en intérieur pourrait afficher les données environnementales de l'extérieur.

---

## Aller plus loin

- **Bluetooth** : découvrir plus d'informations sur cette norme de télécommunication si présente dans notre vie quotidienne.
  [fr.wikipedia.org/wiki/Bluetooth](https://fr.wikipedia.org/wiki/Bluetooth)

- **CircuitPython BLE Libraries on Any Computer** : utilisez le code BLE de CircuitPython sur les ordinateurs de bureau, les ordinateurs portables et les Raspberry Pi grâce aux bibliothèques Adafruit.
  [learn.adafruit.com/circuitpython-ble-libraries-on-any-computer](https://learn.adafruit.com/circuitpython-ble-libraries-on-any-computer)

- **Bouton de volume BLE avec CircuitPython** : transformez votre Bluefruit de Circuit Playground en bouton de volume BLE sans fil.
  [learn.adafruit.com/bluetooth-le-hid-volume-knob-with-circuitpython](https://learn.adafruit.com/bluetooth-le-hid-volume-knob-with-circuitpython)

- **Explorer d'autres fiches d'activité du projet Let's STEAM** : notamment les fiches R1AS15 (Collecter les données) et R1AS11 (Fabriquer un thermomètre) qui complètent cette activité.
  [Catalogue Let's STEAM](/projets/lets-steam)

---

_Cette fiche fait partie du projet [Magnetics](/projets/magnetics), financé par le dispositif Edu-up. Elle complète le travail réalisé dans le cadre du projet [Let's STEAM](/projets/lets-steam). Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._

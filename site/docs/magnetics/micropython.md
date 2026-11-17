---
id: micropython
title: Créer des projets multicartes en MicroPython
sidebar_label: 'MicroPython'
sidebar_position: 3
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Créer des projets multicartes en MicroPython

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--warning">MicroPython</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| Magnetics | 50 minutes | Avancé | 13-18 ans |

## Matériel

- 4 cartes programmables _STM32 IoT Node Board_
- 1 câble USB Micro-B
- 1 écran OLED Monochrome 1.3" 128x64 OLED de Adafruit
- 1 câble QT pour connecter l'écran à la carte

<PdfLink href="/pdf/magnetics/Magnetics_MicroPython.pdf">Télécharger en PDF</PdfLink>

</div>

<img src="/img/ressources/magnetics/micropython/icone.png" alt="Magnetics — MicroPython" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Dans cette activité, vous allez programmer plusieurs cartes électroniques et échanger des données de capteurs à l'aide de l'extension Magnetics, qui permet une communication maillée sans fil.

:::info

Cette fiche d'activité propose de créer des projets plus complexes avec plusieurs cartes électroniques non connectées entre elles. Une fois les capteurs maîtrisés, on peut mener des expériences qui demandent plusieurs cartes. Pour collecter les données, il faut faire communiquer les cartes entre elles par les airs. Le projet Magnetics est une brique logicielle implantée directement dans MakeCode. Il utilise la technologie de réseau maillé Bluetooth Low Energy Mesh (BLE Mesh), compatible avec toutes les cartes programmables qui ont un module Bluetooth Low Energy.

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

Cette activité demande quatre cartes STM32 IoT Nodes. Trois d'entre elles seront **émettrices** de données de capteurs (température, humidité, pression), et la dernière sera **collectrice** des données qu'elle affichera sur un écran OLED. Mis à part l'écran de la dernière, il n'y a pas de câblage, car l'activité utilise uniquement les capteurs internes. Commencer par câbler et programmer la carte collectrice, puis programmer individuellement chaque carte émettrice.

### Activité 1 - Préparer, câbler et programmer la carte collectrice

#### 1. Câbler l'écran OLED

<div style={{display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap', margin: '0.75rem 0'}}>
<div style={{flex: '1 1 320px', minWidth: '280px'}}>

Câbler d'abord l'écran OLED directement à la carte collectrice. L'écran OLED SSD1306 se câble à une carte de deux façons, avec une connexion I2C ou SPI. Ici, l'écran utilise la connexion I2C par le câble QWIIC/STEMMA, avec la convention suivante :

- **Noir** pour GND
- **Rouge** pour V+ (3V3)
- **Bleu** pour SDA (D14)
- **Jaune** pour SCL (D15)

</div>
<img src="/img/ressources/magnetics/micropython/oled.png" alt="Câblage de l'écran OLED sur la carte collectrice" style={{flex: '0 1 280px', maxWidth: '280px', height: 'auto', alignSelf: 'flex-start'}} />
</div>

#### 2. Connecter la carte à l'ordinateur

Avec votre câble USB, connectez la carte collectrice à votre ordinateur en utilisant le connecteur micro-USB. Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur.

#### 3. Ouvrir l'éditeur MicroPython

Allez dans l'éditeur MicroPython : [python.lets-steam.eu](https://python.lets-steam.eu/). Depuis cet éditeur, vous pourrez directement copier/coller votre code.

<img src="/img/ressources/magnetics/micropython/editeurmicropython.png" alt="Éditeur MicroPython" style={{maxWidth: '70%', height: 'auto', margin: '0.75rem 0'}} />

#### 4. Programmer la carte

Dans l'éditeur, copiez/collez le code disponible dans la section "**Programmer**" ci-dessous. Cliquez sur le bouton "**flash or download**" et attendez que la carte finisse de clignoter.

### Activité 2 - Programmer chaque carte émettrice individuellement

Une fois la carte collectrice câblée avec l'écran OLED et programmée, préparer les trois cartes émettrices en suivant les mêmes étapes de programmation que lors de l'étape 1. Pour chaque carte :

#### 1. Connecter la carte à l'ordinateur

Avec votre câble USB, connectez la carte émettrice que vous souhaitez programmer à votre ordinateur en utilisant le connecteur micro-USB. Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

#### 2. Ouvrir l'éditeur MicroPython

Allez dans l'éditeur MicroPython : [python.lets-steam.eu](https://python.lets-steam.eu/). Depuis cet éditeur, vous pourrez directement copier/coller votre code.

#### 3. Programmer la carte

Dans l'éditeur, copiez/collez le code disponible dans la section "**Programmer**" ci-dessous. Cliquez sur le bouton "**flash or download**" et attendez que la carte finisse de clignoter.

### Activité 3 - Exécuter, modifier, jouer

Une fois votre carte collectrice reliée à votre écran, et vos quatre cartes programmées, votre programme est prêt à être utilisé. Votre programme s'exécutera automatiquement chaque fois que vous les mettrez sous tension ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET). Essayez de comprendre le fonctionnement de votre code et commencez à le modifier en créant vos propres projets.

---

## Étape 2 - Programmer

### Code de la carte collectrice

```python
from machine import Pin, I2C
import ssd1306
import magnetics
import time

oled = ssd1306.SSD1306_I2C(I2C(1))
mag = magnetics.Magnetics(I2C(2))

lastShow = 0
temperature = "..."
humidity = "..."
pressure = "..."
mag.start_scanning()

while True:  # Création d'une boucle "infinie" (pas de clause de sortie)
    if mag.available_data_from_name("DeviceTemp"):
        temperature = mag.read_data_from_name("DeviceTemp")

    if mag.available_data_from_name("DeviceHum"):
        humidity = mag.read_data_from_name("DeviceHum")

    if mag.available_data_from_name("DevicePres"):
        pressure = mag.read_data_from_name("DevicePres")

    if time.ticks_ms() - lastShow >= 2000:
        oled.clear()
        oled.text("Données des capteurs:", 0, 0)
        oled.text(temperature, 0, 16)
        oled.text(humidity, 0, 24)
        oled.text(pressure, 0, 32)
        oled.show()
        lastShow = time.ticks_ms()
```

### Code de la carte émettrice de la température

```python
from machine import Pin, I2C
import magnetics
import time

mag = magnetics.Magnetics(I2C(2))
mag.setLocalName("DeviceTemp")
mag.startEmitting()

while True:  # Création d'une boucle "infinie" (pas de clause de sortie)
    magnetics.setAdvertisingKeyValueData("Temp (°C)", input.temperature(TemperatureUnit.Celsius))
pause(500)
```

### Code de la carte émettrice de l'humidité

```python
from machine import Pin, I2C
import magnetics
import time

mag = magnetics.Magnetics(I2C(2))
mag.setLocalName("DeviceHum")
mag.startEmitting()

while True:  # Création d'une boucle "infinie" (pas de clause de sortie)
    magnetics.setAdvertisingKeyValueData("Hum (%)", input.temperature(TemperatureUnit.Celsius))
pause(500)
```

### Code de la carte émettrice de la pression

```python
from machine import Pin, I2C
import magnetics
import time

mag = magnetics.Magnetics(I2C(2))
mag.setLocalName("DevicePres")
mag.startEmitting()

while True:  # Création d'une boucle "infinie" (pas de clause de sortie)
    magnetics.setAdvertisingKeyValueData("Pres (hPa)", input.temperature(TemperatureUnit.Celsius))
pause(500)
```

### Comment cela fonctionne-t-il ? Initialiser la collecte de données

Le code des cartes émettrices est quasiment identique d'une carte à l'autre (seul le capteur change) et reste simple à comprendre.

La fonction `setLocalName` donne d'abord un nom à la carte, ce qui permet au collecteur de reconnaître la donnée envoyée. Pour que la carte puisse émettre des données, il faut lui préciser son rôle : c'est ce que fait la fonction `startEmitting`. Enfin, la fonction `setAdvertisingKeyValueData` envoie la donnée du capteur toutes les 500 millisecondes (c'est-à-dire deux fois par seconde).

Le code du collecteur déclare d'abord 4 variables :

- `temperature`, `humidity` et `pressure` qui contiendront les données émises par les émetteurs (respectivement pour la température, l'humidité et la pression atmosphérique)
- `lastShow`, qui garde le moment du dernier affichage des données (en millisecondes).

Une fois les variables initialisées, le programme appelle `startScanning` pour rechercher les cartes émettrices à proximité.

Le reste du code se trouve dans la boucle principale, qui le répète indéfiniment. Les trois premiers `if(...)` vérifient si des données sont arrivées des émetteurs (avec la fonction `availableDataFromName`). Si c'est le cas, le programme enregistre la donnée dans la variable associée (avec `readDataFromName`).

Il reste à afficher les données sur l'écran OLED : c'est le rôle de la dernière condition `if`, qui met à jour l'écran avec les nouvelles données seulement s'il n'a pas été rafraîchi depuis plus de deux secondes.

---

## Étape 3 - Améliorer

- Cette activité ne fait qu'afficher les informations sur un écran, mais il est possible d'utiliser le datalogger pour enregistrer les données et les analyser.
- Utiliser une boîte étanche et faire une station météo : comme la connexion est sans fil, un écran placé à l'intérieur pourrait afficher les données environnementales de l'extérieur.

---

## Aller plus loin

- **Bluetooth** : découvrir plus d'informations sur cette norme de télécommunication si présente dans notre vie quotidienne.
  [fr.wikipedia.org/wiki/Bluetooth](https://fr.wikipedia.org/wiki/Bluetooth)

- **CircuitPython BLE Libraries on Any Computer** : utilisez le code BLE de CircuitPython sur les ordinateurs de bureau, les ordinateurs portables et les Raspberry Pi grâce aux bibliothèques Adafruit.
  [learn.adafruit.com/circuitpython-ble-libraries-on-any-computer](https://learn.adafruit.com/circuitpython-ble-libraries-on-any-computer)

- **Bouton de volume BLE avec CircuitPython** : transformez votre Bluefruit de Circuit Playground en bouton de volume BLE sans fil.
  [learn.adafruit.com/bluetooth-le-hid-volume-knob-with-circuitpython](https://learn.adafruit.com/bluetooth-le-hid-volume-knob-with-circuitpython)

---

_Cette fiche fait partie du projet [Magnetics](/projets/magnetics), financé par le dispositif Edu-up. Elle complète le travail réalisé dans le cadre du projet [Let's STEAM](/projets/lets-steam). Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._

---
id: decouverte-bus-can
title: Découverte du bus CAN
sidebar_label: "Découverte du bus CAN"
sidebar_position: 7
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Découverte du bus CAN

### Présentation

Ce projet vise à découvrir par la pratique le fonctionnement du [bus CAN](https://fr.wikipedia.org/wiki/Controller_Area_Network). Sur cette page sont regroupés les liens vers les différentes expérimentations conduites par les membres du LAB.

</div>

<img src="/img/ressources/projets-du-lab/lab-bus-can/icone.png" alt="Découverte du bus CAN" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

### Matériel

Matériel nécessaire :

- 2 Arduino Uno

- 2 [shield CAN-BUS Sparkfun](https://www.sparkfun.com/products/10039) ou un [shield Seeduino](https://www.seeedstudio.com/CAN-BUS-Shield-V1.2-p-2256.html) ou un [breakout](https://www.botshop.co.za/product/can-bus-module-arduino-mcp2515/)

- 2 Résistances de 120 Ohms (terminaison de bus, une à chaque extrémité)

- Straps ou fils de liaison

### Logiciel

Logiciels utilisés :

- IDE Arduino [Arduino](https://www.arduino.cc/)

- Bibliothèque CAN-BUS Shield [GitHub](https://github.com/Seeed-Studio/CAN_BUS_Shield)

### Principe

Ces informations sont principalement issues de la page Wikipédia ["Bus CAN"](https://fr.wikipedia.org/wiki/Controller_Area_Network).

Le bus CAN (Controller Area Network) est un bus système série très répandu dans beaucoup d'industries, notamment l'automobile. Développé à l'origine par Bosch dans les années 1980, il est aujourd'hui le standard de communication dans les véhicules modernes, où il relie les dizaines de calculateurs embarqués (moteur, ABS, airbags, tableau de bord, etc.).

Il met en application une approche connue sous le nom de multiplexage, qui consiste à raccorder à un même câble (un bus) un grand nombre de calculateurs qui communiqueront à tour de rôle. Cette technique élimine le besoin de câbler des lignes dédiées pour chaque information à faire transiter (connexion point-à-point).

**Caractéristiques principales :**

- **Bus différentiel** : le signal est transmis sur deux fils (CAN_H et CAN_L). La différence de tension entre les deux détermine l'état logique, ce qui rend le bus très résistant aux perturbations électromagnétiques.
- **Multi-maître** : n'importe quel nœud peut émettre à tout moment. En cas de collision, un mécanisme d'arbitrage bit à bit assure que le message de plus haute priorité (identifiant le plus bas) est transmis sans perte.
- **Trames** : chaque message contient un identifiant (11 ou 29 bits), un champ de données (0 à 8 octets) et un CRC de contrôle d'erreur.
- **Terminaison** : le bus doit être terminé par une résistance de 120 Ω à chaque extrémité pour éviter les réflexions de signal.

### Expérimentations

#### 1. Émission/Réception simple

Le cas le plus basique : un Arduino envoie une trame CAN contenant quelques octets, l'autre Arduino la reçoit et l'affiche sur le moniteur série. Cela permet de vérifier le câblage, la configuration des shields et le bon fonctionnement de la bibliothèque CAN-BUS Shield.

#### 2. Émission de données RTC / Réception et affichage

L'Arduino émetteur lit l'heure depuis un module RTC (Real Time Clock) et l'envoie sous forme de trame CAN. L'Arduino récepteur décode la trame et affiche l'heure. Cela introduit la notion d'encodage de données structurées dans les 8 octets d'une trame CAN.

#### 3. Émission RTC / Réception multi-shields avec adressage

Extension de l'expérimentation précédente avec plusieurs nœuds récepteurs sur le même bus. Chaque récepteur filtre les trames par identifiant CAN pour ne traiter que celles qui lui sont destinées. Cela illustre le fonctionnement multi-nœuds du bus et le mécanisme de filtrage par identifiant.

### Bibliographie

- [https://fr.wikipedia.org/wiki/Controller_Area_Network](https://fr.wikipedia.org/wiki/Controller_Area_Network)

- [http://modelrail.otenko.com/arduino/arduino-controller-area-network-can](http://modelrail.otenko.com/arduino/arduino-controller-area-network-can)

- [http://www.seeedstudio.com/wiki/CAN-BUS_Shield](http://www.seeedstudio.com/wiki/CAN-BUS_Shield)

- [http://skpang.co.uk/blog/archives/55](http://skpang.co.uk/blog/archives/55)

- [https://www.sparkfun.com/products/10039](https://www.sparkfun.com/products/10039)

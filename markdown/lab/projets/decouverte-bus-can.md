# Découverte du Bus CAN

[Canbus.jpg]
### Présentation

Ce projet vise à découvrir par la pratique le fonctionnement du [bus CAN](https://fr.wikipedia.org/wiki/Controller_Area_Network). Sur cette page regroupe les liens vers les différentes expérimentations conduites par les membres du LAB.

### Matériel

Matériel nécessaire :

- 2 Arduino Uno

- 2 [shield CAN-BUS Sparkfun](https://www.sparkfun.com/products/10039)ou un [shield Seeduino](https://www.seeedstudio.com/CAN-BUS-Shield-V1.2-p-2256.html) ou un [breakout](https://www.botshop.co.za/product/can-bus-module-arduino-mcp2515/)

- 2 Résistances de 120 Ohms

- Straps ou fils de liaison

### Logiciel

Logiciels utilisés :

- IDE Arduino [[1]](https://www.arduino.cc/)

- Bibliothèque CAN-BUS Shield [[2]](https://github.com/Seeed-Studio/CAN_BUS_Shield)

### Principe

Ces informations sont principalement issues de la page Wikipédia ["Bus CAN"](https://fr.wikipedia.org/wiki/Controller_Area_Network)

Le bus CAN (Controller Area Network) est un bus système série très répandu dans beaucoup d'industries, notamment l'automobile.

Il met en application une approche connue sous le nom de multiplexage, et qui consiste à raccorder à un même câble (un bus) un grand nombre de calculateurs qui communiqueront donc à tour de rôle. Cette technique élimine le besoin de câbler des lignes dédiées pour chaque information à faire transiter (connexion point-à-point).

### Expérimentations

- Émission/Réception simple

- Émission de données (RTC)/Réception et affichage des données

- Émission de données (RTC)/Réception, adressage et affichage des données sur plusieurs shields

### Bilbiographie

- [https://fr.wikipedia.org/wiki/Controller_Area_Network](https://fr.wikipedia.org/wiki/Controller_Area_Network)

- [http://modelrail.otenko.com/arduino/arduino-controller-area-network-can](http://modelrail.otenko.com/arduino/arduino-controller-area-network-can)

- [http://www.seeedstudio.com/wiki/CAN-BUS_Shield](http://www.seeedstudio.com/wiki/CAN-BUS_Shield)

- [http://skpang.co.uk/blog/archives/55](http://skpang.co.uk/blog/archives/55)

- [https://www.sparkfun.com/products/10039](https://www.sparkfun.com/products/10039)

---
id: harpe-laser
title: "Harpe Laser MIDI"
sidebar_label: "Harpe Laser"
sidebar_position: 11
---

# Harpe Laser MIDI

### Présentation

Ce projet vise à construire une harpe laser fonctionnant comme un clavier MIDI. Il a été développé en vue d'une démonstration lors de la conférence [Devoxx](http://www.devoxx.fr/) à Paris, du 16 au 18 avril 2014.

L'inspiration : la performance de [Greig Stewart](http://www.thereminhero.com/), dont le niveau reste un objectif à atteindre.

Le premier prototype est une version monocorde (une seule corde laser).

### Principe de fonctionnement

Des faisceaux laser matérialisent les « cordes » de la harpe. En face de chaque laser, une photorésistance (LDR) capte la lumière. Quand le musicien passe la main à travers un faisceau, la photorésistance détecte la chute de luminosité et l'Arduino envoie une note MIDI correspondante.

Le shield MIDI convertit les commandes de l'Arduino en messages MIDI standard (Note On / Note Off), transmis à un synthétiseur, un logiciel ou un instrument virtuel.

Le shield Motor Stepper contrôle l'orientation des lasers pour aligner chaque faisceau avec sa photorésistance.

### Matériel

- Arduino Uno
- Shield Sparkfun MIDI
- Shield Motor Stepper
- Résistance de 10 kΩ et photorésistance (LDR) pour le capteur
- Diode laser verte 532 nm, 5 mW

### Logiciels

- **IDE Arduino** : programmation du microcontrôleur
- **Langage** : C/C++ Arduino
- **Bibliothèque MIDI** : envoi des messages MIDI depuis l'Arduino

#### Architecture

L'Arduino lit en boucle l'état de chaque photorésistance. Quand la valeur descend sous un seuil (faisceau coupé), il envoie un message « Note On » via le shield MIDI. Quand la lumière revient (main retirée), il envoie un « Note Off ». Chaque capteur est associé à une note différente.

### Évolutions possibles

- Paramétrage des notes via un écran LCD
- Passage à plusieurs cordes (multiplexage des capteurs et lasers)
- Contrôle de vélocité (en mesurant la vitesse de coupure du faisceau)
- Lasers RGB pour un rendu visuel plus spectaculaire

### Bibliographie

- [Greig Stewart — The Theremin Hero](http://www.thereminhero.com/)
- [Devoxx France](http://www.devoxx.fr/)
- [Sparkfun MIDI Shield](https://www.sparkfun.com/products/12898)

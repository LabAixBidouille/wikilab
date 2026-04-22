---
id: xylorobot
title: "XyloRobot"
sidebar_label: "XyloRobot"
sidebar_position: 10
---

# XyloRobot

### Présentation

XyloRobot est un glockenspiel à commande numérique, construit à partir du [Kit Music Robot v2.0](http://www.makeblock.cc/music-robot-kit-v2-0-with-electronics/) de [MakeBlock](http://www.makeblock.cc/). Le projet a été présenté lors de la conférence [Devoxx](http://www.devoxx.fr/) à Paris du 16 au 18 avril 2014. La démonstration a été un succès ; le projet se poursuit pour corriger les défauts du système d'origine.

### Matériel

- Kit Music Robot v2.0 de MakeBlock (châssis aluminium, servomoteurs, glockenspiel, carte de contrôle)

### Logiciels

- **Music Robot 2.0** : logiciel PC fourni avec le kit, permettant de programmer des séquences de notes et de les envoyer au robot via liaison série
- **XyloRobot** : programme embarqué de remplacement développé au LAB, corrigeant les problèmes de timing — [dépôt GitHub](https://github.com/FraDiavolo7/XyloRobot)

#### Architecture

Le système comporte deux parties :
- **Logiciel PC** : interface de saisie d'une partition (notes et durées), envoyée au robot via USB/série.
- **Programme embarqué** (Arduino/MakeBlock) : réception des commandes et pilotage des servomoteurs pour positionner le marteau sur la bonne lame et frapper.

#### Langage

- C/C++ Arduino pour le programme embarqué

### Problèmes connus

L'instrument fonctionne correctement pour des morceaux simples, mais montre ses limites sur des partitions complexes. Causes identifiées :

- Pas de gestion du temps dans le programme embarqué d'origine : chaque note prend un temps variable selon la distance de déplacement du marteau
- Interface PC partiellement en japonais
- Le programme embarqué dépend entièrement du logiciel PC (aucune autonomie)

### Évolutions en cours

Le programme embarqué d'origine (MusicRobot) est en cours de remplacement par XyloRobot, qui gère le timing de manière autonome : chaque note prend le même temps, quelle que soit la distance de déplacement du marteau.

### Évolutions possibles

- Adaptation au protocole MIDI standard (en remplacement du protocole propriétaire MakeBlock)
- Multiplication des marteaux pour jouer des accords ou des trilles rapides

### Bibliographie

- [Kit Music Robot — MakeBlock](http://www.makeblock.cc/music-robot-kit-v2-0-with-electronics/)
- [Dépôt GitHub XyloRobot](https://github.com/FraDiavolo7/XyloRobot)
- [Devoxx France](http://www.devoxx.fr/)

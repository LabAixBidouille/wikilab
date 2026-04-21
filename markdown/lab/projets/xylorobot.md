# XyloRobot

[XyloRobot.jpg]
### Présentation

Ce projet a pour but de créer un glockenspiel à commande numérique, en partant du [Kit](http://www.makeblock.cc/music-robot-kit-v2-0-with-electronics/) de [MakeBlock](http://www.makeblock.cc/). L'objectif final était
de faire une démonstration lors de la conférence [Devoxx](http://www.devoxx.fr/) qui a eu lieu à Paris du 16
au 18 Avril 2014. La démonstration a été un succès, il se poursuit dans une évolution pour corriger les défaut du système d'origine.

### Matériel

- Kit Music Robot

### Logiciels

Logiciel Music Robot 2.0

#### Architecture

#### Languages

### Problèmes connus

L'instrument se comporte assez bien tant qu'il ne s'agit pas de jouer une musique trop complexe. Les causes en sont :

```
- Pas de gestion de temps dans le programme embarqué
- Clavier partiellement en japonais sur le logiciel sur PC.
- Programme embarqué intégralement commandé par le logiciel sur PC.

```

### Évolutions en cours

L'évolution en cours est pour améliorer le programme embarqué pour faire en sorte que chaque note prenne le même temps à être jouée (durée entre le début de la sélection de la note et la fin de la frappe)

#### Travaux en cours

Remplacement du programme embarqué standard (MusicRobot sur git) par XyloRobot

### Évolutions possibles

Transformation pour adapter à du MIDI.
Multiplication des marteaux

### Bilbiographie

- pourquoi pas

- une liste

- de liens

### Liens externes

[Kit Music Robot chez MakeBlock](http://www.makeblock.cc/music-robot-kit-v2-0-with-electronics/)
[Dépôt GitHub](https://github.com/FraDiavolo7/XyloRobot)

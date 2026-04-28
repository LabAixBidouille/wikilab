---
id: ampli-audio-tas3251
title: Ampli HiFi numérique
sidebar_label: "Ampli HiFi numérique"
sidebar_position: 2
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Ampli HiFi numérique

### Présentation

Ce projet s'inscrit dans la continuité du projet Audio HiFi Full numérique ([voir fiche dédiée](./audio-hifi)). L'objectif est de remplacer les amplificateurs précédents, dont la puissance était insuffisante, par de nouveaux amplis répondant à trois critères :

- puissance nettement supérieure,
- entrée numérique I2S (le mode le plus performant),
- traitement du signal (DSP) intégré.

</div>

<img src="/img/ressources/projets-du-lab/lab-ampli-tas3251/icone.png" alt="Ampli HiFi numérique" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

Le composant central est le TAS3251 de Texas Instruments : un amplificateur classe D 2x175W qui concentre le meilleur de l'audio TI dans un seul chip, avec un potentiel de performance supérieur à 95-99 % des produits du marché.

On trouve sur le marché des cartes d'ampli chinoises à très bas prix. Beaucoup sont de bonne facture, mais font des compromis sur certains composants pour réduire les coûts. Les passionnés les remplacent ensuite par de meilleurs, ce qui est parfois acrobatique. Ici, le choix a été fait de cibler la performance dès la conception, sans compromis sur les composants.

Le PCB a été conçu avec KiCAD et fabriqué chez JLCPCB, qui a également réalisé un assemblage partiel.

L'historique complet du projet est documenté sur [DIYAudio](https://www.diyaudio.com/forums/class-d/325826-design-log-neat-2x170w-i2s-i2c-controlled-integrated-dsp-amp-tas3251-14.html). La partie logicielle est développée sur [GitHub](https://github.com/jmf13/NeatAmpTAS3251/wiki).

### Photos

Rendu 3D de la carte :

![Rendu 3D de la carte TAS3251](/img/ressources/projets-du-lab/TAS3251_Neat_Amp.jpg)

![Rendu 3D TAS3251 Neat Amp](/img/ressources/projets-du-lab/TAS3251_Neat_Amp.jpg)

### Matériel

- Chip amplificateur TI TAS3251 (package HSSOP-56)
- PCB conçu sous KiCAD, fabriqué et partiellement assemblé par JLCPCB
- Feuille de Mylar (transparent pour rétroprojecteur) pour la fabrication du mini stencil
- Pâte à souder
- Station de soudage à air chaud

### Fabrication de stencils avec la découpe laser du LAB

JLCPCB assemble environ 80 % des composants de surface. Il reste cependant à souder le TAS3251 (package HSSOP-56) au centre de la carte. En temps normal, on utiliserait un stencil pleine carte avec pâte à souder et reflow à air chaud. Mais les composants déjà soudés empêchent de poser un stencil standard.

La solution retenue est de fabriquer un mini stencil ne comportant que l'empreinte du TAS3251, découpé dans une feuille de Mylar à l'aide de la Trotec 400 du LAB. Réglages utilisés :

- Pads : gravure laser CO2, P:40, V:8, Freq:1000 (variante : P:20, V:4 ou 5, Freq:1000)
- Découpe extérieure : Cut CO2, P:11, V:6, Freq:1000 (légèrement insuffisant, à finir à la main si nécessaire)

### Logiciels

- **KiCAD** : conception du schéma électronique et routage du PCB
- **GitHub** : documentation et développement logiciel sur [NeatAmpTAS3251/wiki](https://github.com/jmf13/NeatAmpTAS3251/wiki)

### Évolutions possibles

- Documentation de la partie logicielle (configuration DSP, paramétrage I2C)
- Remplacement des derniers composants par des versions audiophiles
- Intégration dans le système Audio HiFi Full numérique

### Bibliographie

- [Design log : Neat 2x170W TAS3251 (DIYAudio)](https://www.diyaudio.com/forums/class-d/325826-design-log-neat-2x170w-i2s-i2c-controlled-integrated-dsp-amp-tas3251-14.html)
- [GitHub NeatAmpTAS3251/wiki](https://github.com/jmf13/NeatAmpTAS3251/wiki)

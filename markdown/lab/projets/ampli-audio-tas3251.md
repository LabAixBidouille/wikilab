# Ampli audio 2x170W TAS3251

[TAS3251 Neat Amp.jpg]
### Présentation

Poursuite des recherches pour un système Hifi de très haute qualité, sans compromis, reposant sur la bidouille, c'est possible!

C'est la suite de Audio HiFi Full numérique

L'objectif est de remplacer les amplis prcédents, pas assez puissants, par des amplis:

- plus puissants,

- toujours avec une entrée numérique I2S (le plus performant),

- avec traitement du signal intégré.

A la base: le chip TI TAS3251: le meilleur de l'audio TI dans un seul chip, mis en oeuvre par les ingénieurs de TI. Ca a le potentiel à être meilleur que 95 à 99% des produits sur le marché.

On trouve des cartes d'ampli en provenance de Chine, à des prix très bas. De nombreux produits sont très valables, mais comportent des "raccourcis" ou des composants de qualité moindre pour réduire les coûts. Ces composants sont ensuite changés par les passionnés pour pour de meilleurs, ce qui est parfois acrobatique. Dans ce projet, tous les composants ciblent la performance dès la conception.

L'historique du projet est tracé sur [Neat 2x170W I2S in, I2C controlled, integrated DSP amp (TAS3251)](https://www.diyaudio.com/forums/class-d/325826-design-log-neat-2x170w-i2s-i2c-controlled-integrated-dsp-amp-tas3251-14.html).

Un certain nombre d'explications et la partie soft seront développés sur [GitHub NeatAmpTAS3251/wiki](https://github.com/jmf13/NeatAmpTAS3251/wiki).

Le PCB a été dessiné avec le freeware KiCAD: un excellent produit avec une grosse communauté.

Le PCB, et un assemblage partiel ont été réalisés chez JLCPCB.

### Photos

Rendu 3D de la carte:

[TAS3251 Neat Amp.jpg]

### Matériel

Décrivez le matériel nécessaire :

### Fabrication de stencils avec la Laser du LAB

La carte est partiellement assemblée par le fabriquant de PCB: JLCPCB. 80% des composants soudés de surface seraont déjà posées. Mais reste à souder le TAS3251, un package HSSOP(56), au milieu de la carte. Le processus normal si la carte n'était pas déjà assemblée serait d'utiliser un stencil / pâte à souder / soudage air chaud. A cause des composants déjà soudés cela n'est pas possible. Du coups j'essaie de faire un mini stencil, avec juste l'empreinte du TAS3251. Mylar de "transparents laser printer" (un souvenir du passé, pour ceux qui ont utilisé des rétro-projecteurs), et les bons réglages sur la Trotec 400 du Lab:

- pour les pads: gravure laser CO2, P:40, V:8, Freq:1000 (autres valeurs qui marchent: gravure CO2 P:20, V:4 ou 5, Freq:1000)

- pour la découpe extérieure: Ci=ut CO2, P:11, V:6, Freq 1000 (un tout petit peu faible, mais on peut finir à la main)

### Logiciels

### Évolutions possibles

### Bilbiographie

[Neat 2x170W I2S in, I2C controlled, integrated DSP amp (TAS3251)](https://www.diyaudio.com/forums/class-d/325826-design-log-neat-2x170w-i2s-i2c-controlled-integrated-dsp-amp-tas3251-14.html)

[GitHub NeatAmpTAS3251/wiki](https://github.com/jmf13/NeatAmpTAS3251/wiki)

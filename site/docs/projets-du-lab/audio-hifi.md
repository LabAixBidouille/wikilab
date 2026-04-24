---
id: audio-hifi
title: Chaîne HiFi 100% numérique
sidebar_label: "Chaîne HiFi 100% numérique"
sidebar_position: 1
---

# Chaîne HiFi 100% numérique

### Présentation

Ce projet vise à construire un système HiFi de très haute qualité, entièrement en DIY, avec une chaîne 100 % numérique du serveur de musique jusqu'aux amplificateurs.

Le point de départ est la convergence de trois découvertes :

- Les enceintes **LXmini**, conçues par Siegfried Linkwitz (inventeur des filtres Linkwitz-Riley). Elles promettent une restitution exceptionnelle de la scène sonore et sont réalisables soi-même. Le [site de Linkwitz](http://www.linkwitzlab.com/LXmini/Introduction.htm) est une mine de connaissances sur les principes acoustiques. Le dossier de réalisation est payant mais en vaut le prix.

- La possibilité de remplacer les filtres passifs des enceintes par du **traitement numérique du signal** (filtrage, égalisation, retards). Plus besoin de composants ésotériques ni de discussions sans fin sur les condensateurs. Le tout peut tourner sur une Raspberry Pi avec des outils open source ([HOWTO](http://rtaylor.sites.tru.ca/2013/06/25/digital-crossovereq-with-open-source-software-howto/)).

- Les amplificateurs **classe D Full Digital** (FDA), qui atteignent des niveaux de performance remarquables pour un coût modeste ([Derrière le micro exactement](http://audiolalies.blogspot.fr/2015/03/derriere-le-micro-exactement.html#!/2015/03/derriere-le-micro-exactement.html), [FX Audio D802](http://www.audiophile-magazine.com/autour-des-1000-et-moins/fx-audio-d802/)).

Le fil rouge du projet : [David 3, Goliath 0](http://audiolalies.blogspot.fr/2016/03/tribune-libre.html#!/2016/03/tribune-libre.html).

### Architecture du système

- **Serveur de musique** : un OrangePi SBC sous Linux avec MPD (Music Player Daemon), un disque dur externe et une sortie audio USB. La commande se fait depuis un client MPD sur téléphone, tablette ou PC.

- **Carte Nucleo STM32F746** : cœur du système.
  - Réception du flux audio en USB asynchrone. La carte Nucleo impose son horloge, ce qui limite le jitter habituellement lié aux SBC.
  - Traitement DSP : filtrage, égalisation et séparation en 4 voies à partir du flux stéréo.
  - Sortie des 4 flux en SPDIF (l'I2S serait préférable, mais les amplis actuels ne l'acceptent pas).

- **Amplification** : deux amplis FX-Audio D802.

- **Enceintes** : LXmini de Siegfried Linkwitz.

### Photos

Vue d'ensemble des enceintes LXmini :

![Enceintes LXmini vue de dessus](/img/ressources/projets-du-lab/LXminiTop.JPG)

Les enceintes :

![Enceintes LXmini](/img/ressources/projets-du-lab/LXmini.JPG)

![Enceintes LXmini vue latérale](/img/ressources/projets-du-lab/LXminiLateral.JPG)

La carte Nucleo STM32 avec les sorties SPDIF :

![Carte Nucleo STM32F7](/img/ressources/projets-du-lab/NucleoStm32F7.JPG)

Les amplis :

![Amplis FX Audio D802 et OrangePi](/img/ressources/projets-du-lab/FXAudioD802OrangePi.JPG)

### Matériel

- Matériels et plans pour la construction des enceintes LXmini
- Carte Nucleo STM32F746
- Deux amplis FX-Audio D802

### Logiciels

- Serveur musique : Linux/Armbian + MPD
- DSP : code C embarqué sur la carte Nucleo

Le code source est sur GitHub : [F7USBAudio](https://github.com/jmf13/F7USBAudio)

Un wiki rassemble les informations de développement : [Wiki](https://github.com/jmf13/Const_DSP_I2S_DAC/wiki)

### Évolutions possibles

- Mise en boîtier intégrant le serveur OrangePi et le disque dur
- Horloge dédiée pour la partie audio du STM32 (meilleure précision, support des familles 48k et 44.1k)
- Ampli sur base STA326 alimenté directement en I2S pour supprimer la conversion SPDIF

### Bibliographie

- [Wiki du projet](https://github.com/jmf13/Const_DSP_I2S_DAC/wiki)

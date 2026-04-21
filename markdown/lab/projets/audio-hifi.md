# Audio HiFi Full numérique

[LXminiTop.JPG]
### Présentation

Un système Hifi de très haute qualité, sans compromis, reposant sur la bidouille, c'est possible!

J'ai toujours été intéressé par la Hifi. J'ai construit quelques enceintes, amplis, monté un DAC. J'aime les solutions décalées, qui explorent des voies non conventionnelles pour de très hautes performances dans un domaine précis. J'ai essayé de me soigner, mais j'ai replongé cette année.

Ma rechute a été déclenchée par le découverte de trois trucs:

- des enceintes conçues par un grand nom de l'acoustique, possibles à construire soi-même, et promettant une excellente restitution de la scène sonore. Un truc que je recherche depuis longtemps sans avoir réussi à l'atteindre. Le designer: Siegfried Linkwitz (les filtres Linkwitz Riley; LR). Les enceintes: les LXmini [LXmini](http://www.linkwitzlab.com/LXmini/Introduction.htm). Le site internet est une mine de connaissances et Siegfried développe tant les bases pour la restitution sonore que les principes du design de chacune de ces enceintes. Ce n'est pas de l'open source car il faut acheter le dossier de réalisation, mais je pense que ça vaut le prix demandé.

- plus besoin de filtres passifs dans les enceintes! On peut remplacer par du traitement du signal: filtre, égalisation, retards... Plus de composants ésotériques (condensateurs NOS papier/bain d'huile ou pire) et de discussions sans fin à leur sujet... Et ça peut même se faire avec des outils open source sur une Raspberry Pi ou équivalent comme ici [Digital Crossover/EQ with Open-Source Software: HOWTO](http://rtaylor.sites.tru.ca/2013/06/25/digital-crossovereq-with-open-source-software-howto/)

- une "nouvelle" génération d'amplificateurs Classe D Full Digital Amplifiers (FDA), qui semble atteindre des niveaux de performances inédits pour le coût et font beaucoup discuter: [Derrière le micro exactement ](http://audiolalies.blogspot.fr/2015/03/derriere-le-micro-exactement.html#!/2015/03/derriere-le-micro-exactement.html), [FX Audio D802](http://www.audiophile-magazine.com/autour-des-1000-et-moins/fx-audio-d802/)

Un fil rouge: l'idée développée ici [David 3, Goliath 0](http://audiolalies.blogspot.fr/2016/03/tribune-libre.html#!/2016/03/tribune-libre.html)

Donc, voici le projet:

- une chaine 100% digitale du serveur de musique jusqu'à l'ampli,

- le serveur de musique: un OrangePi SBC sous Linux avec MPD (Music Player Daemon) sur le réseau, avec un HDD externe et sortie audio en USB. On commande MPD à partir d'un client MPD sur téléphone/tablette Android ou iOS, ou sur PC fixe,

- une carte Nucleo Stm32 est le coeur du système:
- réception du flux Audio en USB, avec un feedback sur le flux requis du fait de la différence d'horloge entre le PC et le stm32 (USB Asynchrone). De ce fait, la carte Nucleo est ma maîtresse du temps et permet de limiter le jitter souvent lié aux horloges moins précises des SBC,

- traitement DSP pour le filtrage, l'égalisation et la préparation des 4 voies à partir du flux stéréo,

- sortie synchronisée des 4 flux vers en signal digital SPDIF (I2S serait mieux, mais pas accepté par mes amplis),

- les enceintes LXmini.

### Photos

Les enceintes:

[LXmini.JPG]

[LXminiLateral.JPG]

La carte Nucleo Stm32 avec les sorties SPDIF:

[NucleoStm32F7.JPG]

Les amplis:

[FXAudioD802OrangePi.JPG]

La carte Nucleo Stm32F746 avec les sorties SPDIF provisoires:

=> Ajouter photo

### Matériel

Décrivez le matériel nécessaire :

- Matériels et plans pour construire les enceintes LXmini

- Carte Nucleo stm32F746

- Deux amplis FX-Audio D802

### Logiciels

Serveur musique: Linux/Armbian + MPD

DSP: C

Le code est sur Github: [F7USBAudio](https://github.com/jmf13/F7USBAudio)

Et un wiki pour collecter les informations au cours du développement sur la carte Nucleo:  [Wiki](https://github.com/jmf13/Const_DSP_I2S_DAC/wiki)

### Évolutions possibles

- mise en boite avec le serveur sur OrangePi et le disque dur

- horloge dédiée pour la partie audio du Stm32 (amélioration de la précision + familles 48k et 44.1k)

- ampli "dépouillé"sur base STA326 alimenté en I2S au lieu de passer par SPDIF

### Bilbiographie

Voir [Wiki](https://github.com/jmf13/Const_DSP_I2S_DAC/wiki)

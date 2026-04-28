---
id: kit-pedagogique-stm32
title: Kit pédagogique STM32
sidebar_label: "Kit pédagogique STM32"
sidebar_position: 14
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Kit pédagogique STM32

### Présentation

À partir d'une carte STM32 IoT Node et de composants Grove Seeed, nous avons conçu un kit pédagogique destiné à faciliter l'utilisation et la compréhension de la carte lors de travaux pratiques.

Il s'agit d'un coffret permettant la disposition fixe de composants électroniques, pensé pour préparer des TP autour de la carte STM32 IoT Node dans un contexte scolaire.

</div>

<img src="/img/ressources/projets-du-lab/lab-kit-stm32/icone.png" alt="Kit pédagogique STM32" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

![Kit STM32 IoT Node](/img/ressources/projets-du-lab/BoxST2.png)

### Description

Le kit est divisé en plusieurs compartiments : un emplacement pour l'ensemble carte/shield, un autre pour la breadboard, un espace dédié à un écran LCD Grove, une zone de rangement des composants, ainsi qu'une surface de manipulation personnalisable selon les besoins de chaque TP. Cette dernière repose sur un motif prédéfini compatible avec la grande majorité des composants Grove.

![Dessus du kit](/img/ressources/projets-du-lab/DessusST.png)

### Matériel

#### Machines nécessaires

- Une découpeuse laser
- Une imprimante 3D
- Une découpeuse vinyle

#### Fournitures

- Plaque de 3 mm d'épaisseur (PMMA, PVC, MDF, bois, etc.)
- Feuilles vinyle autocollantes (pour les stickers)
- Kit de visserie M2 et M3 (pour la fixation de la carte uniquement)

#### Composants électroniques

- Une carte STM32 IoT Node
- Un shield Grove
- Une breadboard
- Des câbles Grove
- Des composants Grove adaptés au TP
- Des petits composants électroniques (résistances, DEL, câbles, etc.)

### Logiciels

- Un logiciel de création graphique (Illustrator, Inkscape, etc.)
- Un logiciel capable d'éditer des fichiers .STL pour imprimante 3D

### Fabrication

#### Découpe

Commencez par découper la plaque de 3 mm d'épaisseur à la découpeuse laser en utilisant le fichier .SVG fourni.

La plateforme de manipulation peut être adaptée selon les besoins de votre TP grâce au motif fourni précédemment.

![Découpe laser du kit](/img/ressources/projets-du-lab/DécoupeST.jpg)

#### Montage

Collez ensuite les différentes parties du kit en suivant la notice de montage.

![Montage du kit](/img/ressources/projets-du-lab/MontageST2.jpg)

Photo du montage du kit en MDF :

![Collage du kit](/img/ressources/projets-du-lab/CollageST.jpg)

#### Impression 3D

Les boutons de commande de la carte n'étant plus accessibles une fois le kit assemblé, il est nécessaire d'imprimer des rallonges à l'aide de l'imprimante 3D. Le fichier correspondant est disponible sous l'appellation "bouton" dans le dépôt suivant : [https://github.com/LabAixBidouille/Kit_STM32](https://github.com/LabAixBidouille/Kit_STM32)

#### Stickers

Pour réaliser les stickers, découpez les motifs dans des feuilles autocollantes de couleur à l'aide de la découpeuse vinyle, en utilisant le fichier SVG fourni.

![Stickers STM32](/img/ressources/projets-du-lab/STMstick.svg)

#### Assemblage

Assemblez les différents composants nécessaires au fonctionnement du kit à l'aide des vis et écrous M2. N'oubliez pas de monter la carte STM32 sur les entretoises découpées précédemment au laser, afin de la surélever.

![Assemblage du kit](/img/ressources/projets-du-lab/Assemblage3ST.jpg)

#### Câblage

Pour faciliter l'utilisation du kit et le changement de plaques de TP, le câblage doit suivre les inscriptions gravées sur la plaque prévue pour le passage des câbles Grove 4 broches. Les emplacements prédéfinis assurent une disposition optimale qui ne gêne pas l'accès aux différentes fonctions de la carte. Chaque câble restant branché sur le shield, il suffit de remplacer le composant sur la sortie souhaitée pour configurer un nouveau TP.

### Perspectives

- Proposer différentes dimensions de kit en fonction des besoins des enseignants.
- Préparer des plaques de TP prêtes à l'emploi afin de simplifier le travail de préparation des enseignants.

### Liens

#### Composants

[http://wiki.seeedstudio.com/Grove_System/](http://wiki.seeedstudio.com/Grove_System/)

#### Fichiers

[https://github.com/LabAixBidouille/Kit_STM32](https://github.com/LabAixBidouille/Kit_STM32)

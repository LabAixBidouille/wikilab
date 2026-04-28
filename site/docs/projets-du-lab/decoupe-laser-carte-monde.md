---
id: decoupe-laser-carte-monde
title: Carte du monde en liège
sidebar_label: "Carte du monde en liège"
sidebar_position: 15
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Carte du monde en liège

### Présentation

L'objectif est de réaliser une carte du monde en liège à fixer au mur, sur laquelle on peut punaiser des photos et des centres d'intérêt. La découpe est réalisée au laser au LAB, dans des plaques de liège du commerce.

</div>

<img src="/img/ressources/projets-du-lab/lab-carte-monde/icone.png" alt="Carte du monde en liège" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

### Matériel

- Deux plaques de liège carrées de 50 cm de côté et 1 cm d'épaisseur (juxtaposées pour obtenir un cadre de 50 cm x 1 m). Ce matériau n'est pas idéal pour la découpe laser, comme la suite le montrera.
- Scotch double-face pour la fixation murale
- Découpeuse laser du LAB

### Logiciel

- Inkscape pour la préparation et la mise au point du contour de découpe

### Première étape : Trouver un tracé vectoriel

Une simple image ne suffit pas : il faut récupérer un contour vectoriel au format SVG. Le choix de la projection cartographique est important : la projection de Mercator conserve les angles mais déforme les surfaces aux pôles. Le choix s'est porté sur une **projection de Mollweide**, plus compacte, en supprimant l'Antarctique : [BlankMap-World6.svg](https://commons.wikimedia.org/wiki/File:BlankMap-World6.svg)

### Deuxième étape : Préparer le contour de découpe

Le tracé récupéré inclut les frontières des pays. Il ne s'agit pas de découper un puzzle : seul le contour des côtes est nécessaire. Séparer les frontières du contour côtier dans Inkscape peut être fastidieux.

Zoom sur le nord du Canada : la carte est très précise, et une découpe de tous les détails prendrait plus d'une demi-heure.
![Zoom nord du Canada](/img/ressources/projets-du-lab/ZoomNordCanada.png)

L'astuce consiste à extraire le contour des **mers** plutôt que des terres, en utilisant l'outil de remplissage d'Inkscape. On remplit les océans, les mers et les lacs avec une couleur : le contour des zones remplies correspond au contour de découpe.
<img src="/img/ressources/projets-du-lab/FillCommand.png" alt="Outil de remplissage Inkscape" style={{width: "250px"}} />

La précision du remplissage dépend du niveau de zoom au moment du clic. Le contour de la Méditerranée, remplie avec un zoom serré, est plus précis que celui de l'Atlantique, rempli avec un zoom plus large. À l'échelle de la carte, ces écarts restent acceptables.

![Terres et mers dans Inkscape](/img/ressources/projets-du-lab/TerresEtMersDansInkscape.png)
![Mers dans Inkscape](/img/ressources/projets-du-lab/MersDansInkscape.png)

### Mise en pratique

Un premier essai de découpe d'un cercle dans le liège confirme que les paramètres par défaut (« Cork ») conviennent.

**Premier problème** : la découpeuse refuse le fichier de la carte. Après plusieurs tentatives, la cause est identifiée : le fichier est trop volumineux. Le contour comporte trop de détails et trop d'îles générant des découpes inutiles. Il faut les supprimer avant le remplissage. (Cuba et les Antilles y sont passées aussi — un peu radical.)

![Îles d'Océanie](/img/ressources/projets-du-lab/IlesOceanie.png)
![Suppression des îles](/img/ressources/projets-du-lab/SuppressionIles.png)

Après simplification, le contour ne prend plus que 8 minutes de découpe.

Fichier SVG réutilisable dans Inkscape :
![Terre et mers SVG](/img/ressources/projets-du-lab/TerreEtMers.svg)

**Deuxième problème** : le liège brûle pendant la découpe.
![Flamme pendant la découpe](/img/ressources/projets-du-lab/Flamme.png)

La chaleur du laser ne s'évacue pas assez vite : le liège est trop isolant et trop épais. Augmenter la vitesse et multiplier les passes ne résout rien — les passes suivantes brûlent encore plus.

### L'astuce de Sébastien

Recouvrir la plaque de sopalin mouillé : l'eau évacue la chaleur par évaporation. La découpe doit être interrompue régulièrement pour ré-humidifier le sopalin.
![Mouillage du sopalin](/img/ressources/projets-du-lab/Mouillage.png)

Avec cette méthode sur de nouvelles plaques, le résultat est concluant :
![Découpe avec papier mouillé](/img/ressources/projets-du-lab/DecoupeAvecPapierMouille.png)
![Séparation de la découpe](/img/ressources/projets-du-lab/SeparationDecoupe.png)

### Finalisation

Pose de scotch double-face sur les « terres » et collage au mur. Les « mers » découpées servent de gabarit de positionnement.
![Carte du monde en liège](/img/ressources/projets-du-lab/CarteMondeEnLiege.png)

### Retour d'expérience

La mise au point a demandé du temps. Pour refaire cette carte, il serait préférable d'utiliser un liège plus fin (6 à 8 mm maximum), si possible en plaques adhésives — ou bien coller le scotch double-face sur toute la surface avant la découpe, pour qu'il soit découpé en même temps. Éviter le liège en rouleau : il est difficile à poser bien à plat dans la machine, ce qui peut provoquer des problèmes de focalisation du laser.

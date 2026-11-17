---
id: panneau-solaire-journee
title: Étudier un panneau solaire sur une journée
sidebar_label: "Étudier un panneau solaire sur une journée"
sidebar_position: 6
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Étudier un panneau solaire sur une journée

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Physique</span>
  <span className="badge badge--primary">Mathématiques</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--info">Capteur INA219</span>
  <span className="badge badge--info">Panneau solaire</span>
  <span className="badge badge--secondary">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| The Dexter Lab | 3-4 heures | Intermédiaire | 13-18 ans |

**Problématique :** Comment maximiser l'apport en énergie solaire ?

## Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 1 capteur de tension INA219
- 1 écran OLED (SSD1306)
- 1 panneau solaire
- 1 lampe
- 1 breadboard
- Des câbles de connexion
- 1 câble USB - micro B

<PdfLink href="/pdf/thedexterlab/PR6-TDL_Feuille_Travail_Vierge_A3.pdf">Télécharger la feuille de travail</PdfLink>

</div>

<img src="/img/ressources/thedexterlab/panneau-solaire-journee/icone.png" alt="Panneau solaire sur une journée" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

:::info
Un panneau solaire fonctionne en convertissant l'énergie solaire en électricité. Il est composé de cellules photovoltaïques qui capturent la lumière du soleil et la convertissent en électricité à l'aide d'un processus appelé effet photovoltaïque. L'électricité produite par les cellules est ensuite envoyée à un onduleur, qui la convertit en tension alternative utilisable pour alimenter les appareils électriques. Les panneaux solaires sont durables et produisent une énergie propre : c'est pourquoi on les considère comme une forme importante d'énergie renouvelable.
:::

## Déroulé de l'activité

Au travers de cette activité, l'objectif est de comprendre et calculer le rendement maximal d'un panneau solaire durant la journée, car l'ensoleillement du panneau varie en fonction de la position et de l'intensité du soleil. Les élèves devront :

- Identifier différentes ressources en énergie et connaître quelques conversions d'énergie
- Pratiquer des démarches scientifiques et technologiques
- Mesurer des grandeurs de manière directe ou indirecte
- Identifier le(s) matériau(x), les flux d'énergie et d'information dans le cadre d'une production technique sur un objet et décrire les transformations qui s'opèrent.

<figure style={{margin: '1rem auto', textAlign: 'center'}}>
  <img src="/img/ressources/thedexterlab/panneau-solaire-journee/DATA6_TDL.webp" alt="Schéma synthétique du protocole" style={{maxWidth: '100%', height: 'auto', margin: '0 auto'}} />
  <figcaption style={{margin: 0}}>Schéma synthétique du protocole</figcaption>
</figure>

## Compétences mobilisées

Ce protocole fait travailler les compétences suivantes :

- En sciences physiques : la capacité à réaliser une expérience scientifique pour résoudre un problème technique, à collecter des données quantitatives, à interpréter des résultats expérimentaux et à comprendre les phénomènes physiques impliqués dans la production d'énergie solaire.
- En mathématiques : la capacité à utiliser les données collectées pour calculer des grandeurs physiques comme la tension, l'intensité et la puissance, à tracer des graphiques pour visualiser les résultats et à interpréter les résultats numériques.
- En technologie : programmer un capteur de tension pour collecter des données, utiliser un afficheur pour visualiser les résultats, créer un système d'alerte pour prévenir l'utilisateur des conditions optimales d'utilisation de l'énergie solaire et concevoir un système d'orientation automatique pour maximiser la production d'énergie solaire.

## Étape 1 : Collecter des données

### Orientation

**Contexte :** la nuit, le panneau solaire de notre maison ne produit pas d'électricité. Je ne peux donc pas faire tourner une machine à laver car elle consommerait trop d'électricité. À quel moment de la journée mon panneau fournira-t-il le plus d'énergie ? L'énergie fournie par le panneau est-elle toujours la même dans la journée ?

**Objectif :** mesurer une grandeur de manière directe, la tension, en sortie du panneau solaire sur un capteur. Calculer la puissance disponible en fonction de l'angle d'éclairage.

### Conceptualisation

Le soleil se lève à l'est et se couche à l'ouest. L'expérience se fait sur une maquette qui reproduit la course du soleil : un panneau solaire fixe et une lampe, qui représente le soleil et suit un arc de cercle.

### Investigation

Pour réaliser la maquette :

1. Placer le panneau solaire et la lampe.
2. Tracer un arc de cercle, autour du panneau solaire pour reproduire la course du soleil.
3. Placer un récepteur.
4. Connecter les capteurs de tension.
5. Brancher une carte programmable.
6. Réaliser le programme pour collecter les données.

Les données sont collectées directement sur l'interface de programmation, dans la console disponible sous le simulateur.

Pour vous aider dans votre enquête, remplir le tableau suivant :

| Heure | Position de la lampe sur le cercle (en °) | Tension à la sortie (en V) | Intensité en sortie (en A) | Puissance en sortie (en W) | Observation / Commentaire |
|---|---|---|---|---|---|
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |

### Débriefing

Cette étape a consisté à monter une expérience qui suit la production d'énergie d'un panneau solaire en fonction de la position du soleil. L'enquête a montré que cette production varie nettement avec l'angle d'incidence.

## Étape 2 : Afficher les données collectées

### Orientation

**Contexte :** l'étape précédente a montré comment demander à un capteur d'obtenir des informations. Il serait utile maintenant de faire connaître ces informations à l'utilisateur.

**Objectifs :** choisir le matériel adapté parmi des actionneurs mis à disposition.

### Conceptualisation

Afin d'informer l'utilisateur de la tension mesurée, la première solution qui vient à l'esprit est d'utiliser un **écran externe**.

### Investigation

1. Choisir l'actionneur adéquat dans une boîte d'actionneur.
2. Positionner l'actionneur choisi.
3. Brancher et réaliser le programme d'affichage des données.

### Débriefing

Cette étape donne une vision directe des données mesurées pendant l'expérience. L'investigation a ainsi pu vérifier directement les hypothèses émises à l'étape précédente.

## Étape 3 : Analyser les données

### Orientation

**Contexte :** les données s'affichent instantanément et montrent les variations de puissance. Il reste à créer un système d'alerte pour prévenir l'utilisateur du meilleur moment pour utiliser les appareils énergivores.

**Objectifs :** trouver des solutions en réponse à un besoin.

### Conceptualisation

Pour utiliser au mieux son panneau solaire, l'utilisateur doit pouvoir être averti quand les meilleures conditions sont réunies pour faire fonctionner du matériel électrique.

### Investigation

1. Faire pivoter la lampe, varier son intensité.
2. Réaliser le programme de récupération des données.
3. Calculer la puissance.
4. Choisir les valeurs d'alerte.
5. Choisir des solutions d'alerte (information afficheur, programme de communication en wifi à une application, déclenchement automatique d'appareil).

### Débriefing

Cette étape ajoute à l'affichage des données la possibilité de prévenir l'utilisateur en cas d'anomalie. L'utilisateur peut alors corriger manuellement l'orientation du panneau solaire quand les rendements ne sont pas suffisants.

Pour aller plus loin, le protocole "Comment maximiser l'apport en énergie solaire et créer des panneaux auto-orientables ?" propose une solution d'automatisation pour que l'orientation reste toujours optimale.

## Programmation

Les fiches techniques de programmation (câblage, code, extensions MakeCode) sont regroupées dans une fiche dédiée : [Programmation : Panneau solaire sur une journée](/ressources/thedexterlab/programmation/programmation-panneau-solaire-journee).


---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

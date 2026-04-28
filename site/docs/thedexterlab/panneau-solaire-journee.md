---
id: panneau-solaire-journee
title: Panneau solaire sur une journée
sidebar_label: "Panneau solaire sur une journée"
sidebar_position: 6
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="4" y="10" width="16" height="10" fill="#1a4a48" opacity="0.25" transform="skewX(-8)"/><line x1="8" y1="10" x2="7" y2="20" stroke="#1a4a48" strokeWidth="0.8" opacity="1.0"/><line x1="12" y1="10" x2="11" y2="20" stroke="#1a4a48" strokeWidth="0.8" opacity="1.0"/><line x1="16" y1="10" x2="15" y2="20" stroke="#1a4a48" strokeWidth="0.8" opacity="1.0"/><line x1="4" y1="15" x2="20" y2="15" stroke="#1a4a48" strokeWidth="0.8" opacity="1.0"/><circle cx="19" cy="5" r="2.5" fill="#1a4a48" opacity="1.0"/><line x1="19" y1="1" x2="19" y2="2.5" stroke="#1a4a48" strokeWidth="1" opacity="0.1"/><line x1="15" y1="5" x2="16.5" y2="5" stroke="#1a4a48" strokeWidth="1" opacity="0.1"/></svg> Panneau solaire sur une journée

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

<a href="/pdf/thedexterlab/PR6-TDL_Feuille_Travail_Vierge_A3.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger la feuille de travail</a>

</div>

<img src="/img/ressources/thedexterlab/panneau-solaire-journee/icone.png" alt="Panneau solaire sur une journée" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

:::info
Un panneau solaire fonctionne en convertissant l'énergie solaire en électricité. Il est composé de cellules photovoltaïques qui capturent la lumière du soleil et la convertissent en électricité à l'aide d'un processus appelé effet photovoltaïque. L'électricité produite par les cellules est ensuite envoyée à un onduleur, qui la convertit en tension alternative utilisable pour alimenter les appareils électriques. En raison de leur durabilité et de leur capacité à produire de l'énergie propre, les panneaux solaires sont considérés comme une forme importante d'énergie renouvelable.
:::

## Déroulé de l'activité

Au travers de cette activité, l'objectif est de comprendre et calculer le rendement maximal d'un panneau solaire durant la journée. En effet, l'ensoleillement du panneau varie en fonction de la position et de l'intensité du soleil. Ainsi, les élèves devront :

- Identifier différentes ressources en énergie et connaître quelques conversions d'énergie
- Pratiquer des démarches scientifiques et technologiques
- Mesurer des grandeurs de manière directe ou indirecte
- Identifier le(s) matériau(x), les flux d'énergie et d'information dans le cadre d'une production technique sur un objet et décrire les transformations qui s'opèrent.

<figure style={{margin: '1rem auto', textAlign: 'center'}}>
  <img src="/img/ressources/thedexterlab/panneau-solaire-journee/DATA6_TDL.webp" alt="Schéma synthétique du protocole" style={{maxWidth: '100%', height: 'auto', margin: '0 auto'}} />
  <figcaption style={{margin: 0}}>Schéma synthétique du protocole</figcaption>
</figure>

## Compétences mobilisées

Ce protocole mobilise plusieurs compétences qui sont pertinentes pour l'apprentissage des sciences et de la technologie. Plus spécifiquement, il permet de développer les compétences suivantes :

- En sciences physiques : la capacité à réaliser une expérience scientifique pour résoudre un problème technique, à collecter des données quantitatives, à interpréter des résultats expérimentaux et à comprendre les phénomènes physiques impliqués dans la production d'énergie solaire.
- En mathématiques : la capacité à utiliser les données collectées pour calculer des grandeurs physiques comme la tension, l'intensité et la puissance, à tracer des graphiques pour visualiser les résultats et à interpréter les résultats numériques.
- En technologie : habiliter la programmation d'un capteur de tension pour collecter des données, utiliser un afficheur pour visualiser les résultats, créer un système d'alerte pour prévenir l'utilisateur des conditions optimales d'utilisation de l'énergie solaire et concevoir un système d'orientation automatique pour maximiser la production d'énergie solaire.

## Étape 1 : Collecter des données

### Orientation

**Contexte :** la nuit, le panneau solaire de notre maison ne produit pas d'électricité. Je ne peux donc pas faire tourner une machine à laver car elle consommerait trop d'électricité. À quel moment de la journée mon panneau fournira-t-il le plus d'énergie ? L'énergie fournie par le panneau est-elle toujours la même dans la journée ?

**Objectif :** mesurer une grandeur de manière directe, la tension, en sortie du panneau solaire sur un capteur. Calculer la puissance disponible en fonction de l'angle d'éclairage.

### Conceptualisation

Le soleil se lève à l'est et se couche à l'ouest. Nous réaliserons une expérience avec une maquette où nous reproduirons la course du soleil. Un panneau solaire fixe et une lampe, représentant le soleil, qui suivra un arc de cercle reproduisant la course du soleil.

### Investigation

Voici les différentes étapes à mettre en œuvre afin d'implémenter notre maquette :

1. Mise en place du panneau solaire + lampe
2. Tracer un arc de cercle, autour du panneau solaire pour reproduire la course du soleil.
3. Placer un récepteur.
4. Connecter les capteurs de tension.
5. Brancher une carte programmable.
6. Réaliser le programme pour collecter les données.

Les données seront collectées directement sur l'interface de programmation grâce à la mise en place de la console, disponible sous le simulateur.

Pour vous aider dans votre enquête, remplir le tableau suivant :

| Heure | Position de la lampe sur le cercle (en °) | Tension à la sortie (en V) | Intensité en sortie (en A) | Puissance en sortie (en W) | Observation / Commentaire |
|---|---|---|---|---|---|
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |

### Débriefing

Lors de cette étape, nous avons mis en place une expérience permettant de suivre la production d'énergie d'un panneau solaire en fonction de la position du soleil. L'enquête a permis de découvrir que cette production évolue de manière significative en fonction de l'angle d'incidence.

## Étape 2 : Afficher les données collectées

### Orientation

**Contexte :** nous avons pu voir dans la partie précédente comment demander à un capteur d'obtenir des informations. Il serait utile maintenant de pouvoir faire connaître ces informations à l'utilisateur.

**Objectifs :** choisir le matériel adapté parmi des actionneurs mis à disposition.

### Conceptualisation

Afin d'informer l'utilisateur de la tension mesurée, la première solution qui vient à l'esprit est d'utiliser un **écran externe**.

### Investigation

1. Choisir l'actionneur adéquat dans une boîte d'actionneur.
2. Positionner l'actionneur choisi.
3. Brancher et réaliser le programme d'affichage des données.

### Débriefing

Dans cette étape, nous avons permis d'avoir une vision directe des données mesurées pendant l'expérience. Grâce à cela, l'investigation a pu vérifier directement les hypothèses émises à l'étape précédente.

## Étape 3 : Analyser les données

### Orientation

**Contexte :** nous avons pu afficher les données instantanément. Nous avons pu observer les variations de puissance. Nous devons mettre en place un système d'alerte pour prévenir l'utilisateur du meilleur moment d'utilisation des appareils énergivores.

**Objectifs :** trouver des solutions en réponse à un besoin.

### Conceptualisation

Afin de répondre à une utilisation optimale de son panneau solaire, l'utilisateur doit pouvoir être averti quand les meilleures conditions sont réunies pour utiliser du matériel électrique.

### Investigation

1. Faire pivoter la lampe, varier son intensité.
2. Mise en œuvre du programme de récupération des données.
3. Calculer la puissance.
4. Choisir les valeurs d'alerte.
5. Choisir des solutions d'alerte (information afficheur, programme de communication en wifi à une application, déclenchement automatique d'appareil).

### Débriefing

En plus de l'affichage des données à l'utilisateur, lors de cette étape, nous avons rajouté la possibilité de prévenir l'utilisateur en cas d'anomalie. Cela permet de corriger manuellement l'orientation du panneau solaire quand les rendements ne sont pas suffisants.

Le protocole "Comment maximiser l'apport en énergie solaire et créer des panneaux auto-orientables ?" permet d'aller plus loin dans cette activité en proposant une solution d'automatisation permettant de toujours avoir une orientation optimale.

## Programmation

Les fiches techniques de programmation (câblage, code, extensions MakeCode) sont regroupées dans une fiche dédiée : [Programmation : Panneau solaire sur une journée](/ressources/thedexterlab/programmation/programmation-panneau-solaire-journee).


---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

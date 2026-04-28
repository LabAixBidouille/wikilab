---
id: plante-co2
title: CO2 et photosynthèse
sidebar_label: "CO2 et photosynthèse"
sidebar_position: 8
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><path d="M6 20 Q6 15 10 14 Q10 10 14 10 Q18 10 18 14 Q20 15 20 20 Z" fill="#1a4a48" opacity="0.1"/><path d="M12 20 L12 10" stroke="#1a4a48" strokeWidth="1.5" opacity="1.0"/><ellipse cx="9" cy="12" rx="3" ry="1.8" fill="#1a4a48" opacity="0.25" transform="rotate(-30 9 12)"/><ellipse cx="15" cy="11" rx="3" ry="1.8" fill="#1a4a48" opacity="0.25" transform="rotate(30 15 11)"/><ellipse cx="12" cy="8" rx="2.5" ry="1.5" fill="#1a4a48" opacity="0.25"/><text x="5" y="6" fontSize="3.5" fontWeight="bold" fill="#1a4a48" opacity="1.0">CO₂</text></svg> CO2 et photosynthèse

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Biologie</span>
  <span className="badge badge--primary">Chimie</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--info">Capteur CO2 MH-Z19B</span>
  <span className="badge badge--info">Écran OLED</span>
  <span className="badge badge--secondary">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| The Dexter Lab | 4-6 heures (plusieurs jours) | Avancé | 13-18 ans |

**Problématique :** Comment améliorer la qualité de l'air ?

## Matériel

- 1 cloche en verre
- 1 lampe
- 1 drap noir
- 1 carte programmable (STM32)
- 1 câble USB pour alimenter la carte
- 1 capteur de CO2 (mh-z19b)
- 1 écran OLED (ssd1306)
- 1 breadboard
- Câbles dupont

<a href="/pdf/thedexterlab/PR8-TDL_Feuille_Travail_Vierge_A3.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger la feuille de travail</a>

</div>

<img src="/img/ressources/thedexterlab/plante-co2/icone.png" alt="CO2 et photosynthèse" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

:::info
L'absorption du dioxyde de carbone par les plantes est un processus connu. Les plantes absorbent le dioxyde de carbone de l'air à travers leurs feuilles et le convertissent en sucres et en d'autres molécules organiques grâce à l'énergie provenant de la lumière du soleil. Ce processus produit également de l'oxygène, qui est libéré dans l'air. Les plantes peuvent alors stocker le carbone sous forme de matière végétale, ce qui peut aider à réduire la quantité de gaz à effet de serre dans l'atmosphère. En effet, lorsque les plantes meurent et se décomposent, le carbone qu'elles ont stocké est libéré lentement dans le sol et peut être stocké sous forme de matière organique pour des périodes plus longues. C'est pourquoi les forêts et d'autres types d'espaces verts sont souvent considérés comme des "puits de carbone" importants pour lutter contre le changement climatique.
:::

## Déroulé de l'activité

Ce projet consiste à sensibiliser les jeunes sur les enjeux climatiques. Protéger et augmenter nos espaces verts doit être une préoccupation. Nous mènerons des expériences pour observer que les plantes vertes produisent du dioxygène à la lumière alors qu'elles le consomment dans l'obscurité. Nous proposerons de poursuivre les expériences dans des conditions différentes.

Les objectifs d'apprentissage de cette activité seront donc les suivants :

- Comprendre que les plantes absorbent le dioxyde de carbone et produisent de l'oxygène grâce à la photosynthèse.
- Savoir que les plantes ont besoin de lumière pour produire de l'oxygène.
- Comprendre que les plantes consomment de l'oxygène dans l'obscurité.
- Prendre conscience de l'importance de protéger et augmenter les espaces verts pour lutter contre le changement climatique.
- Savoir comment mener des expériences pour observer les processus de photosynthèse des plantes.

## Compétences mobilisées

Les sujets abordés au niveau des programmes comprennent :

- La biologie végétale : la photosynthèse, la respiration des plantes
- La chimie : le dioxyde de carbone, l'oxygène
- L'éducation environnementale : l'importance de protéger et augmenter les espaces verts pour lutter contre le changement climatique
- La méthode scientifique : comment mener des expériences pour observer les processus de photosynthèse des plantes

## Étape 1 : Collecter des données

### Orientation

**Contexte :** la concentration de CO2 dans l'atmosphère a atteint son point le plus haut depuis que celle-ci est mesurée en 1958. Selon l'Agence Nationale Océanique et Atmosphérique américaine (NOAA), le seuil des 419 parties par million (ppm), unité de mesure utilisée pour quantifier la pollution dans l'air, a été franchi en mai 2021, comparé à 315 ppm en 1958. Ne pourrait-on pas nous protéger davantage en augmentant nos espaces verts ? Comment mesurer la consommation de CO2 d'une plante verte ?

**Objectif :** mesurer une grandeur de manière directe, le taux de CO2 en ppm.

### Conceptualisation

La photosynthèse des végétaux chlorophylliens est responsable de la fixation et de la réduction de CO2, ainsi que de la libération d'O2. Comment mesurer ce phénomène ? La solution qui semble la plus simple est d'utiliser une plante sous cloche hermétique et un capteur de CO2 branché sur une carte programmable.

### Investigation

La phase d'investigation consistera à mettre en place l'expérience et à collecter les données sur le taux de CO2 consommé par la plante. Vous pouvez suivre les étapes suivantes :

1. Mise en place de la cloche avec une plante.
2. Placer une lampe.
3. Positionner le capteur CO2 dans la cloche.
4. Brancher le capteur sur la carte programmable.
5. Réaliser le programme pour collecter les données.

Les données seront collectées directement sur l'interface de programmation grâce à la mise en place de la console, disponible sous le simulateur.

### Débriefing

Durant cette expérimentation, nous avons pu observer qu'une plante consomme du CO2 quand elle est éclairée correctement. Cette diminution du taux de CO2 est liée à l'activité photosynthétique de la plante. Le CO2 absorbé par la plante lui permet d'alimenter les différents processus biochimiques permettant l'assimilation des glucides nécessaire à la croissance de la plante. Le CO2 n'est pas le seul élément nécessaire à la photosynthèse, il faut aussi l'eau et la lumière pour qu'elle se produise. Si la plante n'est pas assez arrosée ou pas assez éclairée, on ne peut pas observer la variation de la concentration de CO2 attendue.

## Étape 2 : Afficher les données collectées

### Orientation

**Contexte :** nous avons pu voir dans la partie précédente comment demander à un capteur d'obtenir des informations. Il serait utile maintenant de pouvoir faire connaître ces informations à l'utilisateur.

**Objectifs :** choisir le matériel adapté parmi des actionneurs mis à disposition.

### Conceptualisation

Afin d'informer l'utilisateur du taux de CO2 mesuré, la première solution qui vient à l'esprit est d'utiliser un afficheur externe de type écran.

### Investigation

Pour réaliser cette phase, voici les différentes étapes de la phase d'investigation :

1. Choisir l'actionneur adéquat dans une boîte d'actionneur.
2. Positionner l'actionneur choisi.
3. Brancher et réaliser le programme d'affichage des données.
4. Mesurer le taux de CO2 dans la cloche (avec une lampe et sous un drap noir).

À l'aide des données produites par la carte programmable, remplir le tableau suivant :

| Heure | Humidité du sol | Éclairage | Taux de CO2 (en ppm) | Observations/Commentaires |
|---|---|---|---|---|
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |

Investiguez pour comprendre quel est le processus responsable de la variation du taux de CO2.

Pour mener l'enquête sur les causes de la variation de CO2 observée, refaites l'expérience sans allumer la lumière. Que se passe-t-il ? Pourquoi ?

De même, si la terre du pot est bien sèche ?

### Débriefing

L'ajout d'un écran permet de faire plus de tests et de mieux comprendre les phénomènes observés lors de la première étape. Ces expérimentations viennent pour vérifier ce qui a été appris sur la photosynthèse.

## Étape 3 : Analyser les données

### Orientation

**Contexte :** nous avons pu afficher les données instantanément. Nous avons pu observer les variations du taux de CO2. Il serait peut-être pertinent de mesurer sur une période plus longue.

**Objectifs :** analyser les données mesurées et les extraire sur un fichier.

### Conceptualisation

Afin d'analyser les données du capteur de CO2 sur une longue période, l'utilisation d'un tableur semble être une solution simple. Pour cela, il est nécessaire de pouvoir récupérer les données de la carte programmable. La solution à mettre en place sera d'écrire via le port série les données au format CSV (comma separated value), format de données exploitable par un tableur.

### Investigation

1. Définir deux périodes de mesures (jour et nuit)
2. Mise en œuvre du programme de récupération des données.
3. Récupérer les données dans des tableurs.

Conduire l'expérience avec plusieurs plantes pour observer ce qui se passe sur plusieurs jours. Avec les données produites, essayez de comparer les différentes expériences et formuler des hypothèses par rapport à ce que vous observez. Remplir le tableau suivant chaque jour :

| Jour | Plante | Quantité d'eau apportée | Temps d'éclairage | Variation du Taux de CO2 (en ppm) | Croissance visible ? | Observations/Commentaires |
|---|---|---|---|---|---|---|
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |

### Débriefing

Les données produites permettent de commencer à modéliser la variation du CO2 et son impact sur la croissance de la plante. La comparaison avec des plantes avec des vitesses de croissance différentes permet d'observer que plus une plante grandit vite plus elle va consommer de CO2 chaque jour. La quantité de CO2 disponible est un facteur limitant pour certaines plantes et une complémentation peut permettre à ces plantes d'avoir une croissance optimisée.

## Étape 4 : Utiliser les données de température et d'humidité pour observer leurs influences

### Orientation

**Contexte :** nous allons faire varier la température et le taux d'humidité sous la cloche. Est-ce que le changement de ces paramètres exerce une influence sur les échanges gazeux ?

**Objectifs :** analyser les données mesurées et apporter une conclusion sur notre écosystème.

### Conceptualisation

Afin d'analyser les données des différents capteurs sur une longue période et dans des conditions différentes, l'utilisation d'un tableur est nécessaire. La solution mise en place sera d'écrire via le port série les données au format CSV (comma separated value), format exploitable par un tableur. L'analyse de ces données permettra de conclure sur les hypothèses de départ.

### Investigation

1. Définir une période de mesure (1 heure)
2. Mise en œuvre du programme de récupération des données.
3. Récupérer les données dans un tableur.
4. Analyser les données collectées.
5. Faire une conclusion avec des recherches sur Internet.

En ajoutant la température et l'humidité à nos données, on peut voir si cela a un impact sur l'activité observable de nos plantes. En remplissant le tableau suivant, formulez des hypothèses quant aux besoins environnementaux de chaque plante :

| Jour | Plante | Température | Taux d'humidité | Quantité d'eau | Éclairage | CO2 (ppm) | Croissance ? | Observations |
|---|---|---|---|---|---|---|---|---|
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |

Pour valider que la température a un impact, essayez de mettre des plantes dans un réfrigérateur ou à proximité d'un chauffage. Avec les données recueillies, formulez des hypothèses pour guider votre enquête.

### Débriefing

Comme on l'a vu précédemment, la lumière, l'eau et le CO2 sont les éléments principaux nécessaires à l'activité photosynthétique de la plante. Une plante a d'autres besoins qui peuvent causer l'arrêt de son activité. L'humidité et la température sont aussi des paramètres importants pour permettre à une plante de se développer.

Les plantes peuvent capturer du CO2, ce qui peut aider à compenser la production humaine de CO2. Cependant, si les conditions ne sont pas bonnes, les plantes ne peuvent pas stocker autant de carbone, et il est donc difficile de créer des puits de carbone verts. En France par exemple, avec les conditions climatiques plus extrêmes de ces dernières années, les forêts ont perdu près de la moitié de leur capacité de stockage de carbone en 10 ans.

Cette activité, au-delà de proposer une découverte de la photosynthèse, est aussi une opportunité de discuter de la captation du carbone et des puits de carbone pour réduire les émissions de gaz à effet de serre.

## Programmation

Les fiches techniques de programmation (câblage, code, extensions MakeCode) sont regroupées dans une fiche dédiée : [Programmation : Plantes et CO2](/ressources/thedexterlab/programmation/programmation-plante-co2).


---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

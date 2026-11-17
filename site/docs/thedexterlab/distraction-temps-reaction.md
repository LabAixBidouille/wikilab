---
id: distraction-temps-reaction
title: Mesurer l'effet des distractions sur le temps de réaction
sidebar_label: "Mesurer l'effet des distractions sur le temps de réaction"
sidebar_position: 14
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Mesurer l'effet des distractions sur le temps de réaction

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Physique</span>
  <span className="badge badge--primary">Mathématiques</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--info">LED / buzzer</span>
  <span className="badge badge--secondary">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| The Dexter Lab | 2-3 heures | Intermédiaire | 12-18 ans |

**Problématique :** Comment évaluer le temps de réaction d'un cycliste ?

## Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 1 bouton-poussoir
- 1 buzzer piézoélectrique
- 1 LED
- 1 résistance de 330Ω
- 1 écran OLED (SSD1306)
- 1 breadboard
- Des câbles de connexion
- 1 câble USB - micro B

<PdfLink href="/pdf/thedexterlab/PR14-TDL_Feuille_Travail_Vierge_A3.pdf">Télécharger la feuille de travail</PdfLink>

</div>

<img src="/img/ressources/thedexterlab/distraction-temps-reaction/icone.png" alt="Distractions et temps de réaction" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

:::info
Le temps de réaction est la durée entre le moment où un stimulus est présenté à un individu et le moment où il produit une réponse. Cette mesure est utilisée pour évaluer les performances de la réaction humaine à des stimuli visuels, auditifs ou tactiles. Le temps de réaction peut varier en fonction de plusieurs facteurs, tels que l'âge, l'état de veille, l'attention et la motivation. Il est important pour la sécurité dans les situations qui nécessitent une réponse rapide, telles que la conduite de véhicules, les sports de haut niveau et les activités professionnelles.
:::

## Déroulé de l'activité

Ce projet prolonge le projet "Votre temps de réaction est-il inférieur à une demi-seconde ?". L'objectif est de mener une expérience scientifique pour mesurer son temps de réaction à un signal audio ou visuel dans un environnement avec distraction, par exemple le bruit d'une musique forte ou une personne qui détourne l'attention.

Pour cela, on fabrique un appareil expérimental en connectant différents composants électroniques à une carte programmable, et on le fait fonctionner avec un programme approprié. On collecte ensuite des données et on les analyse pour mesurer le temps de réaction dans différents cas de distraction.

<figure style={{margin: '1rem auto', textAlign: 'center'}}>
  <img src="/img/ressources/thedexterlab/distraction-temps-reaction/DATA14_TDL.webp" alt="Schéma synthétique du protocole" style={{maxWidth: '100%', height: 'auto', margin: '0 auto'}} />
  <figcaption style={{margin: 0}}>Schéma synthétique du protocole</figcaption>
</figure>

## Compétences mobilisées

Cette expérimentation aborde différentes notions du cursus de manière interdisciplinaire. En physique, les élèves peuvent apprendre à mesurer le temps de réaction à différents stimuli, comme des signaux audio ou visuels, et à comprendre comment ce temps peut varier selon différents facteurs, comme la distraction, la fatigue, l'âge ou la motivation.

Côté programmation et électronique, les élèves apprennent à programmer une carte comme la STM32 IoT Node Board pour contrôler des composants électroniques tels que le bouton-poussoir, le buzzer et la LED. Ils peuvent y acquérir des compétences utiles dans de nombreux domaines, comme l'informatique, l'ingénierie et la robotique.

Enfin, les élèves mettent en pratique la méthode scientifique : formuler une question scientifique pertinente, concevoir une expérience pour y répondre, collecter des données de manière rigoureuse et les analyser pour en tirer des conclusions.

## Étape 1 : Collecter des données

### Orientation

Pour répondre à la question de recherche, il faut trouver un moyen de mesurer son temps de réaction quand on perçoit un signal, comme un son ou un flash lumineux. Comment y parvenir ?

### Conceptualisation

Le temps de réaction est le temps écoulé entre l'apparition d'un stimulus externe, tel qu'un son ou un clignement de lumière, et la réponse spontanée à ce stimulus. En moyenne, chez l'être humain, il est de l'ordre de 200 à 250 millisecondes, mais il varie selon les conditions, l'âge, le sexe et le type de stimulus. Toute distraction peut aussi le modifier nettement.

On peut utiliser une carte programmable comme Arduino, micro:bit ou STM32, et y connecter un buzzer pour produire un son ou une LED pour un stimulus visuel.

### Investigation

Commencer par se familiariser avec le matériel électronique, comme la carte, les fils, les résistances, la breadboard, les LED et le buzzer. Pour créer un circuit correct, il faut d'abord identifier chaque élément.

Si le circuit est correct, le dispositif expérimental est prêt à être contrôlé par un programme. Quand le programme s'exécute, il émet un signal aléatoire qui allume la LED ou le buzzer. Un appui sur le bouton éteint ensuite la LED ou le buzzer. Le programme stocke le temps écoulé dans une variable, puis l'affiche à l'écran.

### Débriefing

Dans cette phase, on a appris à collecter des données en mesurant son temps de réaction à un stimulus sonore ou visuel, à l'aide de l'appareil expérimental qu'on a construit.

## Étape 2 : Afficher les données collectées

### Orientation

Si l'on n'a que la carte, par exemple la carte STM32, et qu'on veut l'utiliser de manière autonome pour plus de flexibilité, comment afficher les valeurs mesurées ?

### Conceptualisation

Une carte fournit une unité de traitement et un espace mémoire pour stocker et exécuter un programme. Elle fournit aussi des interfaces pour se connecter et communiquer avec d'autres appareils. Ici, il faut connecter et utiliser un petit écran pour afficher en texte les valeurs des mesures.

### Investigation

Utiliser le petit écran pour afficher en texte les valeurs des mesures. Faire ensuite une feuille de calcul ou un tableau des mesures en deux colonnes : la première pour le temps de réaction au signal sonore, la deuxième pour le temps mesuré en réaction au signal LED.

Ces données correspondent au cas où il n'y a pas de source de distraction. Il faut étudier les mêmes cas en présence d'une distraction. Imaginer divers scénarios susceptibles de détourner l'attention et donc d'affecter le temps de réaction : par exemple une musique forte, un ami qui essaie de déranger, un téléphone portable qui sonne, un téléphone portable qui parle ou envoie des messages, etc.

**Exemple de tableau pour l'étude sans distraction :**

| Distraction | Aucune distraction |
|---|---|
| Âge |  |
| Genre |  |
| Mesures du temps de réaction au stimulus sonore (buzzer) | Mesures du temps de réaction au stimulus visuel |
|  |  |
|  |  |
| Moyenne : | Moyenne : |

**Exemple avec musique forte :**

| Distraction | Musique forte |
|---|---|
| Âge |  |
| Genre |  |
| Mesures du temps de réaction au stimulus sonore (buzzer) | Mesures du temps de réaction au stimulus visuel |
|  |  |
|  |  |
| Moyenne : | Moyenne : |

### Débriefing

Dans cette phase, il s'agissait de :

- Comprendre les éléments de base et les fonctionnalités d'une carte.
- Se familiariser avec la connexion et l'utilisation de périphériques externes pour réaliser des expériences.
- Utiliser un programme pour afficher des données sur un écran.

## Étape 3 : Analyser les données

### Orientation

À l'étape précédente, on a rempli la feuille de calcul ou les tableaux de mesures. On s'en sert ici pour connaître le temps de réaction au son ou à la lumière dans chaque cas et scénario de distraction.

### Conceptualisation

Il faut maintenant analyser les données collectées avec l'appareil pour en extraire des informations pertinentes. Cette étape introduit le concept de moyenne, issu des statistiques de base.

### Investigation

Parcourir le tableau de données et calculer le temps de réaction correspondant à chaque colonne de mesures. À la fin, calculer la valeur moyenne et l'exprimer en secondes et en millisecondes.

Répéter ensuite le même processus pour la série de mesures prise dans différentes conditions (scénarios de distraction), afin de déterminer si celles-ci ont une incidence sur les résultats. Il est aussi utile de représenter les résultats sur un graphique pour mieux les visualiser.

Réfléchir à ce qu'on a trouvé du point de vue d'un piéton, d'un cycliste ou d'un conducteur de voiture, et discuter de la manière dont la distraction peut affecter le comportement sur la route et sa propre sécurité, ainsi que celle des autres.

### Débriefing

Au cours de cette phase, il s'agissait de :

- Collecter des données pour différents cas, comme des personnes de différents âges et sexes, ainsi que des scénarios de distraction.
- Enregistrer les données dans une feuille de calcul.
- Analyser les données en prenant les valeurs moyennes et en les affichant sur un graphique.
- Extraire les informations pertinentes et conclure.

## Programmation

Les fiches techniques de programmation (câblage, code, extensions MakeCode) sont regroupées dans une fiche dédiée : [Programmation : Distractions et temps de réaction](/ressources/thedexterlab/programmation/programmation-distraction-temps-reaction).


---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

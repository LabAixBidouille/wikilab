---
id: distraction-temps-reaction
title: Distractions et temps de réaction
sidebar_label: "Distractions et temps de réaction"
sidebar_position: 14
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><circle cx="12" cy="12" r="10" fill="#1a4a48" opacity="0.1"/><path d="M8 9a4 4 0 1 1 8 0c0 2-1 3-2 4l0 2h-4l0-2c-1-1-2-2-2-4z" fill="#1a4a48" opacity="0.25"/><rect x="9.5" y="17" width="5" height="1.5" rx="0.5" fill="#1a4a48" opacity="1.0"/><rect x="10" y="19" width="4" height="1" rx="0.5" fill="#1a4a48" opacity="1.0"/><line x1="3" y1="6" x2="6" y2="6" stroke="#1a4a48" strokeWidth="1.5" opacity="1.0" strokeLinecap="round"/><line x1="18" y1="6" x2="21" y2="6" stroke="#1a4a48" strokeWidth="1.5" opacity="1.0" strokeLinecap="round"/></svg> Distractions et temps de réaction

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

<a href="/pdf/thedexterlab/PR14-TDL_Feuille_Travail_Vierge_A3.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger la feuille de travail</a>

</div>

<img src="/img/ressources/thedexterlab/distraction-temps-reaction/icone.png" alt="Distractions et temps de réaction" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

:::info
Le temps de réaction est la durée entre le moment où un stimulus est présenté à un individu et le moment où il produit une réponse. Cette mesure est utilisée pour évaluer les performances de la réaction humaine à des stimuli visuels, auditifs ou tactiles. Le temps de réaction peut varier en fonction de plusieurs facteurs, tels que l'âge, l'état de veille, l'attention et la motivation. Il est important pour la sécurité dans les situations qui nécessitent une réponse rapide, telles que la conduite de véhicules, les sports de haut niveau et les activités professionnelles.
:::

## Déroulé de l'activité

Ce projet est une activité de suivi du projet "Votre temps de réaction est-il inférieur à une demi-seconde ?". Dans ce projet, notre objectif est de mener une expérience scientifique pour mesurer notre temps de réaction à un signal audio ou visuel dans un environnement avec distraction, par exemple le bruit d'une musique forte ou une personne qui détourne notre attention.

Pour cela, nous allons fabriquer un appareil expérimental en connectant différents composants électroniques à une carte programmable et le faire fonctionner par un programme approprié. Ensuite, nous collecterons des données et les analyserons pour mesurer notre temps de réaction pour différents cas de distraction.

<figure style={{margin: '1rem auto', textAlign: 'center'}}>
  <img src="/img/ressources/thedexterlab/distraction-temps-reaction/DATA14_TDL.webp" alt="Schéma synthétique du protocole" style={{maxWidth: '100%', height: 'auto', margin: '0 auto'}} />
  <figcaption style={{margin: 0}}>Schéma synthétique du protocole</figcaption>
</figure>

## Compétences mobilisées

Cette expérimentation permet d'aborder différentes notions du cursus de manière interdisciplinaire. Elle permet d'explorer, dans les apprentissages de physique, la mesure du temps de réaction, qui est une notion importante en sciences ainsi que dans la vie quotidienne. Les élèves peuvent apprendre à mesurer le temps de réaction à différents stimuli, tels que des signaux audio ou visuels, et à comprendre comment ce temps peut être influencé par différentes variables, telles que la distraction, la fatigue, l'âge ou la motivation.

Ce projet permet aussi d'aborder des notions de programmation et d'électronique. Les élèves apprendront à programmer une carte programmable telle que la carte STM32 IoT Node Board pour contrôler différents composants électroniques tels que le bouton-poussoir, le buzzer et la LED. En apprenant à programmer et à utiliser des composants électroniques, les élèves peuvent acquérir des compétences utiles dans de nombreux domaines, tels que l'informatique, l'ingénierie et la robotique.

Enfin, ce projet permet de mettre en pratique la méthode scientifique. Les élèves apprendront à formuler une question scientifique pertinente, à concevoir une expérience pour y répondre, à collecter des données de manière rigoureuse et à les analyser pour en tirer des conclusions.

## Étape 1 : Collecter des données

### Orientation

Pour répondre à notre question de recherche, nous devons trouver un moyen de mesurer notre temps de réaction lorsque nous percevons un signal comme un son ou un flash lumineux. Comment pouvons-nous y parvenir ?

### Conceptualisation

Le temps de réaction est le temps écoulé entre l'apparition d'un stimulus externe, tel qu'un son ou un clignement de lumière, et notre réponse spontanée à ce stimulus. En moyenne, chez l'être humain, il est de l'ordre de 200 à 250 millisecondes, mais il varie selon les conditions, l'âge, le sexe et le type de stimulus. De plus, toute distraction peut modifier significativement notre temps de réaction.

Nous pouvons utiliser une carte programmable telle qu'Arduino, micro:bit ou STM32. Nous pouvons connecter un buzzer pour produire un son ou une LED pour un stimulus visuel.

### Investigation

Nous commençons par nous familiariser avec notre ensemble d'appareils électroniques tels que la carte, les fils, les résistances, la breadboard, les LED et le buzzer. Pour créer un circuit correct, nous devons d'abord identifier chaque élément.

Si le circuit est correct, nous avons notre dispositif expérimental prêt à être contrôlé par un programme. Lorsque le programme s'exécute, il émet un signal aléatoire qui allume la LED ou le buzzer. Ensuite, lorsque nous appuyons sur le bouton, la LED ou le buzzer s'éteint. Le temps écoulé est conservé par le programme dans une variable qui est ensuite imprimée à l'écran.

### Débriefing

Dans cette phase, nous avons appris à collecter des données en mesurant notre temps de réaction à un stimulus sonore ou visuel à l'aide d'un appareil expérimental que nous avons construit.

## Étape 2 : Afficher les données collectées

### Orientation

Considérons le cas où nous n'avons que la carte, par exemple la carte STM32, et que nous voulons l'utiliser de manière autonome pour plus de flexibilité. Comment pouvons-nous afficher nos valeurs mesurées ?

### Conceptualisation

Une carte fournit une unité de traitement et un espace mémoire pour stocker et exécuter un programme. Elle fournit également des interfaces pour se connecter et communiquer avec d'autres appareils. Dans ce cas particulier, nous devons connecter et utiliser un petit écran pour afficher en texte les valeurs de nos mesures.

### Investigation

Dans cette étape, nous souhaitons utiliser le petit écran et afficher les valeurs de nos mesures en texte. Ensuite, nous faisons une feuille de calcul ou un tableau des mesures divisé en deux colonnes. La première colonne est le temps de réaction au signal sonore. La deuxième colonne est le temps mesuré pour la réaction au signal LED.

Ce sont nos données pour l'étude de cas où il n'y a pas de source de distraction. Nous devons étudier les mêmes cas lorsque la distraction est présente. Nous pouvons penser à divers scénarios susceptibles de détourner notre attention et donc d'affecter notre temps de réaction. Il peut s'agir, par exemple, d'une musique forte, d'un ami qui essaie de nous déranger, d'un téléphone portable qui sonne, d'un téléphone portable qui parle ou envoie des messages, etc.

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

Dans cette phase, nous avons réalisé ce qui suit :

- Comprendre les éléments de base et les fonctionnalités d'une carte.
- Se familiariser avec la connexion et l'utilisation de périphériques externes pour réaliser des expériences.
- Utiliser un programme pour afficher des données sur un écran.

## Étape 3 : Analyser les données

### Orientation

À l'étape précédente, nous avons rempli notre feuille de calcul ou nos tableaux de mesures. En les utilisant, nous voulons apprendre le temps de réaction au son ou à la lumière dans chaque cas et scénario de distraction.

### Conceptualisation

Nous avons collecté des données à l'aide de notre appareil et nous devons maintenant les analyser pour en extraire des informations pertinentes. Dans cette étape, nous introduisons le concept de moyenne à partir des statistiques de base.

### Investigation

Nous parcourons notre tableau de données et calculons le temps de réaction correspondant à chaque colonne de mesures. À la fin, nous calculons la valeur moyenne et l'exprimons en secondes et en millisecondes.

Nous répétons ensuite le même processus pour la série de mesures que nous avons prises dans différentes conditions (scénarios de distraction) afin de déterminer si celles-ci ont une incidence sur nos résultats. Il est également utile de présenter nos résultats sous forme de graphique pour mieux les visualiser.

Nous réfléchissons également à ce que nous avons trouvé dans le contexte d'un piéton, d'un cycliste ou d'un conducteur de voiture, et discutons de la manière dont la distraction peut affecter notre comportement sur la route et notre propre sécurité, ainsi que celle des autres.

### Débriefing

Au cours de cette phase, nous avons effectué et réalisé les activités suivantes :

- Collecte de données pour différents cas, tels que des personnes de différents âges et sexes, ainsi que des scénarios de distraction.
- Enregistrement des données dans une feuille de calcul.
- Analyse des données en prenant les valeurs moyennes et en les affichant graphiquement.
- Extraction des informations pertinentes et conclusion.

## Programmation

Les fiches techniques de programmation (câblage, code, extensions MakeCode) sont regroupées dans une fiche dédiée : [Programmation : Distractions et temps de réaction](/ressources/thedexterlab/programmation/programmation-distraction-temps-reaction).


---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

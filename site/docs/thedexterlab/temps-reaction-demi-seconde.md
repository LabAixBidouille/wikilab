---
id: temps-reaction-demi-seconde
title: "Votre temps de réaction est-il inférieur à une demi-seconde ?"
sidebar_label: "Temps de réaction"
sidebar_position: 13
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><circle cx="12" cy="12" r="10" fill="#1a4a48" opacity="0.1"/><circle cx="12" cy="12" r="7" fill="#1a4a48" opacity="0.25"/><line x1="12" y1="12" x2="12" y2="7" stroke="#1a4a48" strokeWidth="2" opacity="1.0" strokeLinecap="round"/><line x1="12" y1="12" x2="15" y2="14" stroke="#1a4a48" strokeWidth="2" opacity="1.0" strokeLinecap="round"/><circle cx="12" cy="12" r="1" fill="#1a4a48" opacity="1.0"/></svg> Votre temps de réaction est-il inférieur à une demi-seconde ?

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

<a href="/pdf/thedexterlab/PR13-TDL_Feuille_Travail_Vierge_A3.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger la feuille de travail</a>

</div>

</div>

---

:::info
Le temps de réaction est la durée entre le moment où un stimulus est présenté à un individu et le moment où il produit une réponse. Cette mesure est utilisée pour évaluer les performances de la réaction humaine à des stimuli visuels, auditifs ou tactiles. Le temps de réaction peut varier en fonction de plusieurs facteurs, tels que l'âge, l'état de veille, l'attention et la motivation. Le temps de réaction est important pour la sécurité dans les situations qui nécessitent une réponse rapide, telles que la conduite de véhicules, les sports de haut niveau et les activités professionnelles.
:::

## Déroulé de l'activité

Dans ce projet, notre objectif est de réaliser une expérience scientifique pour mesurer notre temps de réaction à un signal sonore ou visuel. Pour cela, nous allons fabriquer un appareil expérimental en connectant différents composants électroniques à une carte programmable et le faire fonctionner par un programme approprié. Ensuite, nous collecterons des données et les analyserons pour mesurer notre temps de réaction dans différents cas.

Voici les étapes d'expérimentation proposées :

1. Formuler des hypothèses sur la question du temps de réaction.
2. Construire un dispositif simple avec une carte, un bouton-poussoir et un buzzer ou une LED.
3. Connecter les différents composants électroniques.
4. Programmer le dispositif à l'aide d'un programme approprié.
5. Collecter des données en exécutant le programme et en appuyant sur le bouton-poussoir.
6. Analyser les données collectées pour mesurer le temps de réaction à un stimulus sonore ou visuel.

## Compétences mobilisées

Grâce à la mise en œuvre de ce projet, les élèves pourront aborder plusieurs thématiques transdisciplinaires incluant :

- Physique : le temps de réaction, les signaux sonores et visuels, la vitesse de réaction
- Technologie : la fabrication de dispositifs électroniques, la programmation de cartes programmables
- Mathématiques : la collecte et l'analyse de données, la mesure de temps
- Sciences : la méthode scientifique, la formulation d'hypothèses, la collecte de données, l'analyse de résultats

## Étape 1 : collecter des données

### Orientation

Pour répondre à notre question de recherche, nous devons trouver un moyen de mesurer notre temps de réaction lorsque nous percevons un signal, comme un son ou un flash lumineux. Comment pouvons-nous y parvenir ?

### Conceptualisation

Le temps de réaction est le temps écoulé entre l'apparition d'un stimulus externe, comme un son ou un clignement de lumière, et notre réponse spontanée à ce stimulus, telle que bouger, courir ou appuyer sur un bouton. En moyenne, chez l'être humain, il est de l'ordre de 200 à 250 millisecondes, mais il varie selon les conditions, l'âge, le sexe et le type de stimulus.

Dans notre cas, nous devons trouver un moyen de produire un signal aléatoire de son ou de lumière, qui sera le stimulus, et qui continuera jusqu'à ce que nous appuyions sur un bouton. Le temps écoulé entre ces deux événements sera notre temps de réaction, que nous enregistrerons à l'aide d'un programme approprié.

Nous pouvons utiliser une carte programmable telle que l'Arduino, la micro:bit ou la STM32. Nous pouvons connecter un buzzer pour produire un son ou une LED pour un stimulus visuel. Nous devons également connecter un bouton-poussoir ou utiliser l'un des boutons intégrés.

### Investigation

Nous commençons par nous familiariser avec notre ensemble d'appareils électroniques, tels que la carte, les fils, les résistances, la breadboard, les LED et le buzzer. Pour créer un circuit correct, nous devons d'abord identifier chaque composant. Ensuite, nous devons les connecter correctement.

Si le circuit est correct, nous avons notre dispositif expérimental prêt à être contrôlé par un programme. Lorsque le programme s'exécute, il émet un signal aléatoire qui allume la LED (dans le cas où nous voulons mesurer notre réaction à un stimulus visuel) ou le buzzer (dans le cas où nous voulons mesurer notre temps de réaction à un stimulus audio). Ensuite, lorsque nous appuyons sur le bouton, la LED ou le buzzer s'éteint. Le temps écoulé est enregistré par le programme dans une variable qui est imprimée à l'écran.

Afin de programmer votre carte et votre expérimentation, vous pouvez réaliser les deux circuits sur deux cartes distinctes : l'une pour les stimuli visuels (LED) et l'autre pour les stimuli sonores (buzzer).

### Débriefing

Dans cette phase, nous avons appris à collecter des données en mesurant notre temps de réaction à un stimulus sonore ou visuel à l'aide d'un appareil expérimental que nous avons construit. Nous avons également appris à programmer le dispositif expérimental à l'aide d'une carte programmable pour produire un signal aléatoire de son ou de lumière et à enregistrer le temps de réaction.

## Étape 2 : afficher les données collectées

### Orientation

Considérons le cas où nous n'avons que la carte, par exemple la carte STM32, et que nous voulons l'utiliser de manière autonome pour plus de flexibilité. Comment pourrions-nous afficher nos valeurs mesurées ?

### Conceptualisation

Une carte fournit une unité de traitement et un espace mémoire pour stocker et exécuter un programme. Elle peut également fournir des LED, des boutons et des capteurs intégrés pour mesurer divers paramètres. De plus, elle fournit des interfaces pour se connecter et communiquer avec d'autres appareils. Dans ce cas particulier, nous devons connecter et utiliser un petit écran pour afficher en texte les valeurs de nos mesures.

### Investigation

Dans cette étape, nous souhaitons utiliser le petit écran et afficher les valeurs de nos mesures en texte. De cette façon, nous disposons d'un appareil très portable pour nos recherches.

Ensuite, nous créons une feuille de calcul ou un tableau des mesures divisé en deux colonnes. La première colonne représente le temps de réaction au signal sonore, tandis que la deuxième colonne représente le temps mesuré pour la réaction au signal LED. Nous prenons plusieurs mesures pour chaque cas. Nous pouvons répéter cette opération pour différents cas afin de comparer les résultats, par exemple en effectuant la même enquête le matin, l'après-midi ou le soir, ou avec des amis ou des parents de sexe et d'âge différents.

| Condition (individu, âge, moment...) | Temps de réaction - signal sonore (buzzer) | Temps de réaction - stimulus visuel (LED) |
|---|---|---|
|  |  |  |
|  |  |  |

### Débriefing

Dans cette phase, nous avons réalisé les actions suivantes :

- Comprendre les éléments de base et les fonctionnalités d'une carte.
- Se familiariser avec la connexion et l'utilisation de périphériques externes pour réaliser des expériences.
- Utiliser un programme pour afficher des données sur un écran.

## Étape 3 : analyser les données

### Orientation

Dans l'étape précédente, nous avons rempli notre feuille de calcul ou nos tableaux de mesures. En les utilisant, nous voulons apprendre le temps de réaction au son ou à la lumière dans chaque cas, et ainsi répondre à notre question initiale.

### Conceptualisation

Nous avons collecté nos données à l'aide de notre appareil et nous devons maintenant les analyser pour en extraire des informations pertinentes. Dans cette étape, nous introduisons le concept de moyenne ou de valeur moyenne à partir des statistiques de base. En général, lors d'enquêtes et d'expériences scientifiques, nous effectuons plusieurs mesures, puis nous concluons à une valeur finale en calculant la moyenne.

### Investigation

Nous parcourons notre tableau de données de mesures enregistrées et calculons le temps de réaction correspondant à chaque colonne de mesures. Nous pouvons utiliser un tableur numérique comme Excel ou Open/Libre Office. À la fin, nous calculons la moyenne et l'exprimons en secondes et en millisecondes. Pour déterminer si d'autres conditions ont une incidence sur les résultats obtenus, nous pouvons répéter notre série de mesures dans des conditions différentes (voir aussi le projet "La distraction peut-elle modifier votre temps de réaction ?").

### Débriefing

Au cours de cette phase, nous avons effectué les étapes suivantes :

- Collecter des données pour différents cas (par exemple avec des personnes d'âge et de sexe différents).
- Enregistrer les données dans une feuille de calcul
- Analyser les données en prenant les valeurs moyennes et en les affichant graphiquement.
- Extraire les informations pertinentes et conclure.

## Programmation

Les fiches techniques de programmation (câblage, code, extensions MakeCode) sont regroupées dans une fiche dédiée : [Programmation : Temps de réaction en une demi-seconde](/ressources/thedexterlab/programmation/programmation-temps-reaction-demi-seconde).


---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

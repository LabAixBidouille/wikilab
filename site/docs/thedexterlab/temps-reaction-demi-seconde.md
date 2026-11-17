---
id: temps-reaction-demi-seconde
title: Mesurer le temps de réaction
sidebar_label: "Mesurer le temps de réaction"
sidebar_position: 13
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Mesurer le temps de réaction

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

<PdfLink href="/pdf/thedexterlab/PR13-TDL_Feuille_Travail_Vierge_A3.pdf">Télécharger la feuille de travail</PdfLink>

</div>

<img src="/img/ressources/thedexterlab/temps-reaction-demi-seconde/icone.png" alt="Temps de réaction" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

:::info
Le temps de réaction est la durée entre le moment où un stimulus est présenté à un individu et le moment où il produit une réponse. Cette mesure est utilisée pour évaluer les performances de la réaction humaine à des stimuli visuels, auditifs ou tactiles. Le temps de réaction peut varier selon plusieurs facteurs (par exemple âge, état de veille, attention, motivation) et il est important pour la sécurité dès qu'il faut réagir vite, comme dans la conduite de véhicules, les sports de haut niveau et les activités professionnelles.
:::

## Déroulé de l'activité

Ce projet consiste à réaliser une expérience scientifique pour mesurer son temps de réaction à un signal sonore ou visuel. Pour cela, on fabrique un appareil expérimental en connectant différents composants électroniques à une carte programmable, et on le fait fonctionner avec un programme approprié. On collecte ensuite des données, puis on les analyse pour mesurer le temps de réaction dans différents cas.

Voici les étapes d'expérimentation proposées :

1. Formuler des hypothèses sur la question du temps de réaction.
2. Construire un dispositif simple avec une carte, un bouton-poussoir et un buzzer ou une LED.
3. Connecter les différents composants électroniques.
4. Programmer le dispositif à l'aide d'un programme approprié.
5. Collecter des données en exécutant le programme et en appuyant sur le bouton-poussoir.
6. Analyser les données collectées pour mesurer le temps de réaction à un stimulus sonore ou visuel.

<figure style={{margin: '1rem auto', textAlign: 'center'}}>
  <img src="/img/ressources/thedexterlab/temps-reaction-demi-seconde/DATA13_TDL.webp" alt="Schéma synthétique du protocole" style={{maxWidth: '100%', height: 'auto', margin: '0 auto'}} />
  <figcaption style={{margin: 0}}>Schéma synthétique du protocole</figcaption>
</figure>

## Compétences mobilisées

Avec ce projet, les élèves peuvent aborder plusieurs thématiques transdisciplinaires, notamment :

- Physique : le temps de réaction, les signaux sonores et visuels, la vitesse de réaction
- Technologie : la fabrication de dispositifs électroniques, la programmation de cartes programmables
- Mathématiques : la collecte et l'analyse de données, la mesure de temps
- Sciences : la méthode scientifique, la formulation d'hypothèses, la collecte de données, l'analyse de résultats

## Étape 1 : Collecter des données

### Orientation

Pour répondre à la question de recherche, il faut trouver un moyen de mesurer son temps de réaction quand on perçoit un signal, comme un son ou un flash lumineux. Comment y parvenir ?

### Conceptualisation

Le temps de réaction est le temps écoulé entre l'apparition d'un stimulus externe, comme un son ou un clignement de lumière, et la réponse spontanée à ce stimulus, telle que bouger, courir ou appuyer sur un bouton. En moyenne, chez l'être humain, il est de l'ordre de 200 à 250 millisecondes, mais il varie selon les conditions, l'âge, le sexe et le type de stimulus.

Dans cette expérience, il faut trouver un moyen de produire un signal aléatoire de son ou de lumière, qui sert de stimulus et dure jusqu'à l'appui sur un bouton. Le temps écoulé entre ces deux événements est le temps de réaction, qu'un programme approprié enregistre.

On peut utiliser une carte programmable comme l'Arduino, la micro:bit ou la STM32, et y connecter un buzzer pour produire un son ou une LED pour un stimulus visuel. Il faut aussi connecter un bouton-poussoir, ou utiliser l'un des boutons intégrés.

### Investigation

Commencer par se familiariser avec le matériel électronique, comme la carte, les fils, les résistances, la breadboard, les LED et le buzzer. Pour créer un circuit correct, identifier d'abord chaque composant, puis connecter les composants correctement.

Si le circuit est correct, le dispositif expérimental est prêt à être contrôlé par un programme. Lorsque le programme s'exécute, il émet un signal aléatoire qui allume la LED (pour mesurer la réaction à un stimulus visuel) ou le buzzer (pour mesurer le temps de réaction à un stimulus audio). Un appui sur le bouton éteint ensuite la LED ou le buzzer. Le programme enregistre le temps écoulé dans une variable affichée à l'écran.

Afin de programmer votre carte et votre expérimentation, vous pouvez réaliser les deux circuits sur deux cartes distinctes : l'une pour les stimuli visuels (LED) et l'autre pour les stimuli sonores (buzzer).

### Débriefing

Dans cette phase, les élèves ont appris à collecter des données en mesurant leur temps de réaction à un stimulus sonore ou visuel avec un appareil expérimental qu'ils ont construit. Ils ont aussi appris à programmer ce dispositif à l'aide d'une carte programmable pour produire un signal aléatoire de son ou de lumière, et à enregistrer le temps de réaction.

## Étape 2 : Afficher les données collectées

### Orientation

Si l'on n'a que la carte, par exemple la carte STM32, et qu'on veut l'utiliser de manière autonome pour plus de flexibilité, comment afficher les valeurs mesurées ?

### Conceptualisation

Une carte contient une unité de traitement et un espace mémoire pour stocker et exécuter un programme, ainsi que des interfaces pour se connecter et communiquer avec d'autres appareils. Elle peut aussi porter des LED, des boutons et des capteurs intégrés pour mesurer divers paramètres. Ici, il faut connecter et utiliser un petit écran pour afficher en texte les valeurs des mesures.

### Investigation

Dans cette étape, utiliser le petit écran pour afficher en texte les valeurs des mesures. L'appareil devient ainsi très portable pour les recherches.

Créer ensuite une feuille de calcul ou un tableau des mesures en deux colonnes : la première contient le temps de réaction au signal sonore, la deuxième le temps de réaction au signal LED. Prendre plusieurs mesures pour chaque cas. On peut répéter l'opération pour différents cas afin de comparer les résultats, par exemple en menant la même enquête le matin, l'après-midi ou le soir, ou avec des amis ou des parents de sexe et d'âge différents.

| Condition (individu, âge, moment...) | Temps de réaction - signal sonore (buzzer) | Temps de réaction - stimulus visuel (LED) |
|---|---|---|
|  |  |  |
|  |  |  |

### Débriefing

Dans cette phase, les élèves ont réalisé les actions suivantes :

- Comprendre les éléments de base et les fonctionnalités d'une carte.
- Se familiariser avec la connexion et l'utilisation de périphériques externes pour réaliser des expériences.
- Utiliser un programme pour afficher des données sur un écran.

## Étape 3 : Analyser les données

### Orientation

La feuille de calcul ou les tableaux de mesures ont été remplis à l'étape précédente. Il s'agit maintenant de s'en servir pour connaître le temps de réaction au son ou à la lumière dans chaque cas, et répondre ainsi à la question initiale.

### Conceptualisation

Il reste à analyser les données collectées avec l'appareil pour en extraire des informations pertinentes. Cette étape introduit le concept de moyenne, ou valeur moyenne, issu des statistiques de base. Lors d'enquêtes et d'expériences scientifiques, on effectue en général plusieurs mesures, puis on conclut à une valeur finale en calculant la moyenne.

### Investigation

Parcourir le tableau des mesures enregistrées et calculer le temps de réaction correspondant à chaque colonne de mesures. On peut utiliser un tableur numérique comme Excel ou Open/Libre Office. Calculer enfin la moyenne et l'exprimer en secondes et en millisecondes. Pour savoir si d'autres conditions ont une incidence sur les résultats obtenus, on peut répéter la série de mesures dans des conditions différentes (voir aussi le projet "La distraction peut-elle modifier votre temps de réaction ?").

### Débriefing

Au cours de cette phase, les élèves ont effectué les étapes suivantes :

- Collecter des données pour différents cas (par exemple avec des personnes d'âge et de sexe différents).
- Enregistrer les données dans une feuille de calcul
- Analyser les données en prenant les valeurs moyennes et en les affichant graphiquement.
- Extraire les informations pertinentes et conclure.

## Programmation

Les fiches techniques de programmation (câblage, code, extensions MakeCode) sont regroupées dans une fiche dédiée : [Programmation : Temps de réaction en une demi-seconde](/ressources/thedexterlab/programmation/programmation-temps-reaction-demi-seconde).


---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

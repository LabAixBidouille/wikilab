---
id: son-100-metres-seconde
title: Vitesse du son
sidebar_label: "Vitesse du son"
sidebar_position: 12
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><circle cx="6" cy="12" r="2.5" fill="#1a4a48" opacity="1.0"/><path d="M9 10c1.5 0.5 2.5 1.5 2.5 2s-1 1.5-2.5 2" fill="none" stroke="#1a4a48" strokeWidth="1.5" opacity="0.25"/><path d="M12 8c2.5 1 4 2.5 4 4s-1.5 3-4 4" fill="none" stroke="#1a4a48" strokeWidth="1.5" opacity="0.25"/><path d="M15 6c4 1.5 6 3.5 6 6s-2 4.5-6 6" fill="none" stroke="#1a4a48" strokeWidth="1.5" opacity="0.1"/></svg> Vitesse du son

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Physique</span>
  <span className="badge badge--primary">Mathématiques</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--info">Capteur ultrason HC-SR04</span>
  <span className="badge badge--secondary">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| The Dexter Lab | 2-3 heures | Intermédiaire | 12-16 ans |

**Problématique :** À quelle vitesse le son voyage-t-il ?

## Matériel

- 1 ordinateur / écran LCD
- 1 carte programmable "STM32 IoT Node Board"
- 1 breadboard et fils de raccordement
- 1 bouton-poussoir
- 1 buzzer
- 1 capteur de distance à ultrasons HC-SR04

<a href="/pdf/thedexterlab/PR12-TDL_Feuille_Travail_Vierge_A3.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger la feuille de travail</a>

</div>

</div>

---

:::info
La vitesse du son est la vitesse à laquelle les ondes sonores se propagent à travers un milieu donné. C'est une mesure fondamentale de la transmission du son dans les gaz, les liquides et les solides. La vitesse du son dépend de la composition, de la structure et des conditions environnementales du milieu dans lequel il se propage. Elle peut varier en fonction de la température, de la pression, de l'humidité et de la présence de particules en suspension. La vitesse du son est utilisée dans de nombreuses applications, telles que la communication acoustique, la météorologie, l'acoustique et la géophysique.
:::

## Déroulé de l'activité

Dans ce projet, notre objectif est de réaliser une expérience scientifique pour mesurer la vitesse du son. Pour ce faire, nous allons fabriquer un appareil expérimental en connectant différents composants électroniques et le faire fonctionner à l'aide d'un programme approprié. Ensuite, nous collecterons des données et les analyserons pour mesurer la vitesse du son, tout comme le font les vrais scientifiques et chercheurs !

Dans ce cas particulier, nous allons étudier la question scientifique suivante : "Le son se déplace-t-il à plus de 100 mètres en 1 seconde ?". Pour y répondre, nous devons construire un dispositif simple avec une carte et un capteur, appelé HC-SR04 Ultrasonic Distance Sensor, pour collecter des données et les analyser.

**Le point de départ de l'activité est donc la formation de l'hypothèse suivante : Le son se déplace-t-il de plus de 100 mètres en 1 seconde ?**

Afin de valider ou d'invalider cette hypothèse, les élèves devront suivre les étapes de l'investigation scientifique en gardant à l'esprit les 4 phases suivantes :

- **Créer un modèle qui permettra de valider ou non l'hypothèse** : définir les données à collecter selon l'identification de variables mesurables pertinentes pour mener cette expérimentation.
- **Construire un outil de collecte de données** permettant d'analyser les variables définies
- **Mesurer et analyser les données**
- **Valider ou invalider l'hypothèse et conclure**

## Compétences mobilisées

Cette activité vise à aborder la question de la vitesse du son sous plusieurs angles, de manière transdisciplinaire.

Au cœur de cette activité, les élèves pourront aborder la compréhension de phénomènes les entourant, ici en particulier, la vitesse de propagation du son, au programme de physique.

En mettant en œuvre une expérience par eux-mêmes, les élèves devront mobiliser d'autres compétences :

- Technologie : utiliser une carte programmable et des capteurs afin de collecter des données numériques
- Mathématiques : analyser des données de manière statistique
- Technologie ou ingénierie, mathématiques : utiliser une feuille de calcul, analyser des données, réaliser des graphiques et des diagrammes afin de visualiser les données et de décrire ces conclusions
- Transdisciplinaire : savoir modéliser, comprendre, formaliser, partager, construire, investiguer, prouver son hypothèse
- Physique : formuler une hypothèse et conduire une expérimentation basée sur la méthode scientifique pour conclure si elle est correcte ou non.

## Étape 1 : collecter des données

### Orientation

Pour répondre à notre question de recherche, nous devons trouver un moyen de mesurer la vitesse à laquelle le son se déplace dans l'air. Il existe plusieurs façons de le faire. Pouvons-nous en imaginer une ou en avons-nous entendu parler ? Tout le monde doit se sentir libre d'y réfléchir et d'essayer de proposer quelque chose. Toutes les idées sont les bienvenues à ce stade.

### Conceptualisation

Le son est une vibration qui se propage sous la forme d'une onde de pression audible, à travers un milieu de transmission tel qu'un gaz, un liquide ou un solide. La vitesse du son est la distance parcourue par unité de temps d'une onde sonore lorsqu'elle se propage dans un milieu. Dans le langage courant, la vitesse du son fait référence à la vitesse des ondes sonores dans l'air. Cependant, la vitesse du son varie d'une substance à l'autre : le son se propage plus lentement dans les gaz, plus rapidement dans les liquides et encore plus rapidement dans les solides. L'homme ne peut entendre les ondes sonores que lorsque leur fréquence se situe entre 20 Hz et 20 kHz environ. Les ondes sonores supérieures à 20 kHz sont appelées ultrasons et ne sont pas perceptibles par l'homme. Les ondes sonores inférieures à 20 Hz sont appelées infrasons.

Dans notre cas, nous allons mesurer la vitesse du son dans l'air à l'aide d'un dispositif, à savoir un capteur de distance à ultrasons HC-SR04, qui émet et reçoit/détecte des ultrasons. Les ultrasons sont des ondes sonores dont la fréquence est supérieure à 20 000 Hz (ou 20 kHz). Les ultrasons ne sont pas différents du son "normal" (audible) dans leurs propriétés physiques, sauf que les humains ne peuvent pas les entendre.

Le capteur de distance à ultrasons HC-SR04 se compose de deux transducteurs à ultrasons. L'un agit comme un émetteur qui convertit le signal électrique en impulsions sonores ultrasoniques de 40 kHz. Le récepteur écoute les impulsions transmises. S'il les reçoit, il produit une impulsion de sortie dont la largeur peut être utilisée pour déterminer la distance parcourue par l'impulsion.

Ainsi, nous pouvons mesurer la vitesse du son si nous plaçons un objet à une distance connue du capteur et enregistrer le temps que met l'impulsion ultrasonore pour parcourir deux fois cette distance. Notez deux fois, car elle voyage de l'émetteur à l'objet de l'obstacle, puis est réfléchie et elle revient vers le récepteur pour être détectée.

### Investigation

Nous commençons par nous familiariser ou par jouer avec notre ensemble d'appareils électroniques comme la carte, le capteur, les fils, les résistances, la breadboard. Nous devons créer un circuit adéquat, donc nous devons d'abord identifier ce qui est quoi. Ensuite, nous devons les connecter correctement selon le schéma.

Si le circuit est correct, alors notre dispositif expérimental fonctionnera dès lors que le programme adéquat sera envoyé sur la carte. Une fois que le programme est envoyé, lorsque nous appuyons sur le bouton, l'émetteur du capteur émet une impulsion d'ultrasons, qui se propage dans l'air, rebondit sur un obstacle pour enfin être détectée par le récepteur du capteur. Nous devons donc placer l'obstacle devant le capteur et, à l'aide d'une règle ou d'un mètre, mesurer la distance et l'enregistrer dans un tableau. Pour chaque distance testée, nous appuyons sur le bouton et enregistrons dans le tableau la mesure du temps qui s'affiche sur l'écran de l'ordinateur.

### Débriefing

Dans cette phase, nous avons fait et réalisé ce qui suit :

- Comprendre comment mesurer la vitesse à laquelle le son se déplace dans l'air,
- Utiliser un dispositif qui émet et reçoit des ultrasons grâce à un capteur de distance à ultrasons tel que le HC-SR04,
- Mesurer la vitesse du son en plaçant un objet à une distance connue du capteur et enregistrer le temps que met l'impulsion ultrasonore pour parcourir deux fois cette distance.

## Étape 2 : afficher les données collectées

### Orientation

Dans l'étape précédente, nous avons construit un appareil expérimental simple avec une carte et un capteur pour mesurer le temps que met un son à parcourir la distance jusqu'à un obstacle et à rebondir. Nous avons supposé que la mesure du temps est affichée sur l'écran de notre ordinateur par le programme. Considérons le cas où nous n'avons que la carte, par exemple la carte STM32. Comment pourrions-nous afficher nos valeurs mesurées ?

### Conceptualisation

Une carte fournit une unité de traitement et un espace mémoire pour stocker et exécuter un programme, elle peut fournir des capteurs embarqués pour mesurer divers paramètres comme la température, la pression, l'humidité, l'accélération, la rotation, etc. Elle fournit également des interfaces pour se connecter et communiquer avec d'autres appareils. Dans ce cas particulier, nous devons connecter et utiliser un petit écran pour afficher en texte les valeurs de nos mesures.

### Investigation

Dans cette étape, nous utilisons un petit écran (OLED ou LCD) pour afficher les valeurs mesurées. Nous établissons un tableau des mesures divisé en trois colonnes :

- La distance entre le capteur et l'obstacle (en cm)
- La valeur affichée sur l'écran (temps mesuré, en secondes)
- La vitesse calculée : Vitesse = 2 × Distance / Temps mesuré (en cm/s)

| Distance capteur-obstacle | Valeur affichée | Vitesse = 2 × Distance / Temps (cm/s) |
|---|---|---|
|  |  |  |
|  |  |  |

### Débriefing

Dans cette phase, nous avons réalisé ce qui suit :

- Comprendre les éléments de base et les fonctionnalités d'une carte.
- Se familiariser avec la connexion et l'utilisation de périphériques externes pour réaliser des expériences.
- Utiliser un programme pour afficher des données sur un écran LCD.

## Étape 3 : analyser les données

### Orientation

Dans l'étape précédente, nous avons rempli un tableau de mesures, ce sont nos données. En les utilisant, nous voulons apprendre la vitesse du son dans l'air et donner une réponse à notre question de départ "le son voyage-t-il plus de 100 mètres en 1 seconde ?".

### Conceptualisation

Nous avons collecté nos données avec notre appareil et nous devons maintenant les analyser afin d'en extraire des informations pertinentes. Dans cette étape, nous introduisons le concept de moyenne ou de valeur moyenne à partir des statistiques de base. En général, dans les enquêtes et les expériences scientifiques, nous prenons plusieurs mesures, puis nous concluons à une valeur finale en calculant la moyenne.

### Investigation

Nous parcourons notre tableau de données enregistrées de mesures de distance et de temps et nous calculons la vitesse du son qui correspond à chaque paire de mesures. Pour cette tâche, nous pouvons utiliser une feuille de calcul numérique comme Excel ou Open/Libre Office ou bien continuer avec la feuille de calcul/tableau papier. À la fin, nous calculons la valeur moyenne et l'exprimons en cm/s, en m/s et en km/h.

Nous vérifions si ce que nous avons trouvé est proche ou non de la valeur indiquée dans la bibliographie (à 20 °C, la vitesse du son dans l'air est d'environ 343 mètres par seconde ou 1 235 km/h). Nous pouvons répéter notre série de mesures avec des distances et des obstacles différents, ou même dans des conditions de température différentes.

### Débriefing

Dans cette phase, nous avons réalisé ce qui suit :

- Collecter des données pour différentes distances.
- Enregistrer les données dans une feuille de calcul
- Analyser les données en prenant les valeurs moyennes.
- Extraire les informations pertinentes (par exemple, la valeur mesurée de la vitesse du son) et conclure.

## Programmation

Les fiches techniques de programmation (câblage, code, extensions MakeCode) sont regroupées dans une fiche dédiée : [Programmation : Le son et les 100 mètres en 1 seconde](/ressources/thedexterlab/programmation/programmation-son-100-metres-seconde).


---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

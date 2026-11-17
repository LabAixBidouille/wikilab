---
id: son-100-metres-seconde
title: Mesurer la vitesse du son
sidebar_label: "Mesurer la vitesse du son"
sidebar_position: 12
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Mesurer la vitesse du son

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

<PdfLink href="/pdf/thedexterlab/PR12-TDL_Feuille_Travail_Vierge_A3.pdf">Télécharger la feuille de travail</PdfLink>

</div>

<img src="/img/ressources/thedexterlab/son-100-metres-seconde/icone.png" alt="Vitesse du son" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

:::info
La vitesse du son est la vitesse à laquelle les ondes sonores se propagent à travers un milieu donné. Le son se propage dans les gaz, les liquides et les solides. La vitesse du son dépend de la composition, de la structure et des conditions environnementales du milieu dans lequel il se propage. Elle peut varier en fonction de la température, de la pression, de l'humidité et de la présence de particules en suspension. La vitesse du son sert dans de nombreux domaines, comme la communication acoustique, la météorologie, l'acoustique et la géophysique.
:::

## Déroulé de l'activité

Ce projet a pour objectif de réaliser une expérience scientifique pour mesurer la vitesse du son. Pour cela, on fabrique un appareil expérimental en connectant différents composants électroniques, et on le fait fonctionner à l'aide d'un programme approprié. On collecte ensuite des données et on les analyse pour mesurer la vitesse du son, tout comme le font les vrais scientifiques et chercheurs !

Dans ce cas particulier, l'activité part de la question scientifique suivante, posée comme hypothèse : "Le son se déplace-t-il à plus de 100 mètres en 1 seconde ?". Pour y répondre, on construit un dispositif simple avec une carte et un capteur, appelé HC-SR04 Ultrasonic Distance Sensor, pour collecter des données et les analyser.

Afin de valider ou d'invalider cette hypothèse, les élèves devront suivre les étapes de l'investigation scientifique en gardant à l'esprit les 4 phases suivantes :

- **Créer un modèle qui permettra de valider ou non l'hypothèse** : définir les données à collecter selon l'identification de variables mesurables pertinentes pour mener cette expérimentation.
- **Construire un outil de collecte de données** permettant d'analyser les variables définies
- **Mesurer et analyser les données**
- **Valider ou invalider l'hypothèse et conclure**

<figure style={{margin: '1rem auto', textAlign: 'center'}}>
  <img src="/img/ressources/thedexterlab/son-100-metres-seconde/DATA12_TDL.webp" alt="Schéma synthétique du protocole" style={{maxWidth: '100%', height: 'auto', margin: '0 auto'}} />
  <figcaption style={{margin: 0}}>Schéma synthétique du protocole</figcaption>
</figure>

## Compétences mobilisées

Au cœur de l'activité, les élèves peuvent aborder la compréhension de phénomènes qui les entourent, ici en particulier la vitesse de propagation du son, au programme de physique.

En mettant en œuvre une expérience par eux-mêmes, les élèves devront mobiliser d'autres compétences :

- Technologie : utiliser une carte programmable et des capteurs afin de collecter des données numériques
- Mathématiques : analyser des données de manière statistique
- Technologie ou ingénierie, mathématiques : utiliser une feuille de calcul, analyser des données, réaliser des graphiques et des diagrammes afin de visualiser les données et de décrire ces conclusions
- Transdisciplinaire : savoir modéliser, comprendre, formaliser, partager, construire, investiguer, prouver son hypothèse
- Physique : formuler une hypothèse et conduire une expérimentation basée sur la méthode scientifique pour conclure si elle est correcte ou non.

## Étape 1 : Collecter des données

### Orientation

Pour répondre à la question de recherche, il faut trouver un moyen de mesurer la vitesse à laquelle le son se déplace dans l'air. Il existe plusieurs façons de le faire. Pouvons-nous en imaginer une ou en avons-nous entendu parler ? Tout le monde doit se sentir libre d'y réfléchir et d'essayer de proposer quelque chose. Toutes les idées sont les bienvenues à ce stade.

### Conceptualisation

Le son est une vibration qui se propage sous la forme d'une onde de pression audible, à travers un milieu de transmission tel qu'un gaz, un liquide ou un solide. La vitesse du son est la distance parcourue par unité de temps d'une onde sonore lorsqu'elle se propage dans un milieu. Dans le langage courant, la vitesse du son fait référence à la vitesse des ondes sonores dans l'air. Cependant, la vitesse du son varie d'une substance à l'autre : le son se propage plus lentement dans les gaz, plus rapidement dans les liquides et encore plus rapidement dans les solides. L'homme ne peut entendre les ondes sonores que lorsque leur fréquence se situe entre 20 Hz et 20 kHz environ. Les ondes sonores supérieures à 20 kHz sont appelées ultrasons et ne sont pas perceptibles par l'homme. Les ondes sonores inférieures à 20 Hz sont appelées infrasons.

Ici, on mesure la vitesse du son dans l'air à l'aide d'un capteur de distance à ultrasons HC-SR04, qui émet et reçoit/détecte des ultrasons. Les ultrasons sont des ondes sonores dont la fréquence est supérieure à 20 000 Hz (ou 20 kHz). Les ultrasons ne sont pas différents du son "normal" (audible) dans leurs propriétés physiques, sauf que les humains ne peuvent pas les entendre.

Le capteur de distance à ultrasons HC-SR04 se compose de deux transducteurs à ultrasons. L'un agit comme un émetteur qui convertit le signal électrique en impulsions sonores ultrasoniques de 40 kHz. Le récepteur écoute les impulsions transmises. S'il les reçoit, il produit une impulsion de sortie dont la largeur peut être utilisée pour déterminer la distance parcourue par l'impulsion.

On peut donc mesurer la vitesse du son en plaçant un objet à une distance connue du capteur et en enregistrant le temps que met l'impulsion ultrasonore pour parcourir deux fois cette distance. Notez deux fois, car elle voyage de l'émetteur à l'objet de l'obstacle, puis est réfléchie et elle revient vers le récepteur pour être détectée.

### Investigation

Commencer par se familiariser ou par jouer avec l'ensemble des appareils électroniques, comme la carte, le capteur, les fils, les résistances, la breadboard. Pour créer un circuit adéquat, identifier d'abord chaque composant, puis les connecter correctement selon le schéma.

Si le circuit est correct, le dispositif expérimental fonctionne dès que le programme adéquat est envoyé sur la carte. Une fois le programme envoyé, quand on appuie sur le bouton, l'émetteur du capteur émet une impulsion d'ultrasons, qui se propage dans l'air, rebondit sur un obstacle et est enfin détectée par le récepteur du capteur. Placer l'obstacle devant le capteur et, à l'aide d'une règle ou d'un mètre, mesurer la distance et l'enregistrer dans un tableau. Pour chaque distance testée, appuyer sur le bouton et enregistrer dans le tableau la mesure du temps qui s'affiche sur l'écran de l'ordinateur.

### Débriefing

Ce qui a été fait dans cette phase :

- Comprendre comment mesurer la vitesse à laquelle le son se déplace dans l'air,
- Utiliser un dispositif qui émet et reçoit des ultrasons grâce à un capteur de distance à ultrasons tel que le HC-SR04,
- Mesurer la vitesse du son en plaçant un objet à une distance connue du capteur et enregistrer le temps que met l'impulsion ultrasonore pour parcourir deux fois cette distance.

## Étape 2 : Afficher les données collectées

### Orientation

À l'étape précédente, on a construit un appareil expérimental simple avec une carte et un capteur pour mesurer le temps que met un son à parcourir la distance jusqu'à un obstacle et à rebondir. On supposait que le programme affichait la mesure du temps sur l'écran de l'ordinateur. Si l'on n'a que la carte, par exemple la carte STM32, comment afficher les valeurs mesurées ?

### Conceptualisation

Une carte contient une unité de traitement et un espace mémoire pour stocker et exécuter un programme. Elle peut aussi porter des capteurs embarqués pour mesurer divers paramètres comme la température, la pression, l'humidité, l'accélération, la rotation, etc., et elle a des interfaces pour se connecter et communiquer avec d'autres appareils. Ici, il faut connecter et utiliser un petit écran pour afficher en texte les valeurs des mesures.

### Investigation

Dans cette étape, on utilise un petit écran (OLED ou LCD) pour afficher les valeurs mesurées, et on établit un tableau des mesures divisé en trois colonnes :

- La distance entre le capteur et l'obstacle (en cm)
- La valeur affichée sur l'écran (temps mesuré, en secondes)
- La vitesse calculée : Vitesse = 2 × Distance / Temps mesuré (en cm/s)

| Distance capteur-obstacle | Valeur affichée | Vitesse = 2 × Distance / Temps (cm/s) |
|---|---|---|
|  |  |  |
|  |  |  |

### Débriefing

Ce qui a été fait dans cette phase :

- Comprendre les éléments de base et les fonctionnalités d'une carte.
- Se familiariser avec la connexion et l'utilisation de périphériques externes pour réaliser des expériences.
- Utiliser un programme pour afficher des données sur un écran LCD.

## Étape 3 : Analyser les données

### Orientation

À l'étape précédente, on a rempli un tableau de mesures : ce sont les données. Elles servent maintenant à connaître la vitesse du son dans l'air et à répondre à la question de départ "le son voyage-t-il plus de 100 mètres en 1 seconde ?".

### Conceptualisation

Il reste à analyser les données collectées avec l'appareil afin d'en extraire des informations pertinentes. Cette étape introduit le concept de moyenne, ou de valeur moyenne, issu des statistiques de base. Dans les enquêtes et les expériences scientifiques, on prend en général plusieurs mesures, puis on conclut à une valeur finale en calculant la moyenne.

### Investigation

Parcourir le tableau des mesures de distance et de temps enregistrées, et calculer la vitesse du son qui correspond à chaque paire de mesures. Pour cette tâche, on peut utiliser une feuille de calcul numérique comme Excel ou Open/Libre Office, ou bien continuer avec la feuille de calcul/tableau papier. À la fin, calculer la valeur moyenne et l'exprimer en cm/s, en m/s et en km/h.

Vérifier si le résultat trouvé est proche ou non de la valeur indiquée dans la bibliographie (à 20 °C, la vitesse du son dans l'air est d'environ 343 mètres par seconde ou 1 235 km/h). On peut répéter la série de mesures avec des distances et des obstacles différents, ou même dans des conditions de température différentes.

### Débriefing

Ce qui a été fait dans cette phase :

- Collecter des données pour différentes distances.
- Enregistrer les données dans une feuille de calcul
- Analyser les données en prenant les valeurs moyennes.
- Extraire les informations pertinentes (par exemple, la valeur mesurée de la vitesse du son) et conclure.

## Programmation

Les fiches techniques de programmation (câblage, code, extensions MakeCode) sont regroupées dans une fiche dédiée : [Programmation : Le son et les 100 mètres en 1 seconde](/ressources/thedexterlab/programmation/programmation-son-100-metres-seconde).


---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

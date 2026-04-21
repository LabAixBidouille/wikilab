# Protocole PR6-TDL - Étapes d'expérimentation

### Étape 1 - Collecter des données

🧭**Orientation**

**Contexte :** La nuit, le panneau solaire de notre maison ne produit pas d’électricité. Je ne peux donc pas faire tourner une machine à laver car elle consommerait trop d’électricité. À quel moment de la journée mon panneau fournira-t-il le plus d’énergie ? L’énergie fournie par le panneau est-elle toujours la même dans la journée ?

**Objectif :** Mesurer une grandeur de manière directe, la tension, en sortie du panneau solaire sur un capteur. Calculer la puissance disponible en fonction de l’angle d’éclairage.

💡**Conceptualisation**

Le soleil se lève à l’est et se couche à l’ouest. Nous réaliserons une expérience avec une maquette où nous reproduirons la course du soleil. Un panneau solaire fixe et une lampe, représentant le soleil, qui suivra un arc de cercle reproduisant la course du soleil.

🔎**Investigation**

Voici les différentes étapes à mettre en œuvre afin d’implémenter notre maquette : 

1. Mise en place du panneau solaire + lampe
2. Tracer un arc de cercle, autour du panneau solaire pour reproduire la course du soleil.
3. Placer un récepteur.
4. Connecter les capteurs de tension.
5. Brancher une carte programmable.
6. Réaliser le programme pour collecter les données.

**Les données seront collectées directement sur l’interface de programmation grâce à la mise en place de la console, disponible sous le simulateur.**

<aside>
🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 1 - Collecter les données grâce au capteur de tension.**

[PROG6-TDL-1](https://www.notion.so/PROG6-TDL-1-9d790c9c00cf4fe3938bc88b296f6aca?pvs=21)

</aside>

Pour vous aider dans votre enquête, remplir le tableau suivant :

| Heure | Position de la lampe sur le cercle (en °) | Tension à la sortie (en V) | Intensité en sortie (en A) | Puissance en sortie (en W) | Observation / Commentaire |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |

💬 **Débriefing**

Lors de cette étape, nous avons mis en place une expérience permettant de suivre la production d’énergie d’un panneau solaire en fonction de la position du soleil. L’enquête a permis de découvrir que cette production évolue de manière significative en fonction de l’angle d’incidence.

### Étape 2 - Afficher les données collectées

🧭**Orientation**

**Contexte :** Nous avons pu voir dans la partie précédente comment demander à un capteur d'obtenir des informations. Il serait utile maintenant de pouvoir faire connaître ces informations à l'utilisateur.

**Objectifs :** Choisir le matériel adapté parmi des actionneurs mis à disposition.

💡**Conceptualisation**

Afin d'informer l'utilisateur de la tension mesurée, la première solution qui vient à l'esprit est d'utiliser un **écran externe**.

🔎**Investigation**

1. Choisir l’actionneur adéquat dans une boîte d’actionneur.
2. Positionner l’actionneur choisi.
3. Brancher et réaliser le programme d’affichage des données.

<aside>
🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 2 - Afficher les données sur un écran.**

[PROG6-TDL-2](https://www.notion.so/PROG6-TDL-2-4bbeed85569f41fda9b7ff7f9c23b22f?pvs=21)

</aside>

💬 **Débriefing**

Dans cette étape, nous avons permis d’avoir une vision directe des données mesurées pendant l’expérience. Grâce à cela, l’investigation a pu vérifier directement les hypothèses émises à l’étape précédente. 

### Étape 3 - Analyser les données

🧭 **Orientation**

**Contexte :** Nous avons pu afficher les données instantanément. Nous avons pu observer les variations de puissance. Nous devons mettre en place un système d’alerte pour prévenir l’utilisateur du meilleur moment d’utilisation des appareils énergivores.

**Objectifs :** Trouver des solutions en réponse à un besoin.

💡**Conceptualisation**

Afin de répondre à une utilisation optimale de son panneau solaire, l’utilisateur doit pouvoir être averti quand les meilleures conditions sont réunies pour utiliser du matériel électrique.

🔎**Investigation**

1. Faire pivoter la lampe, varier son intensité.
2. Mise en œuvre du programme de récupération des données.
3. Calculer la puissance.
4. Choisir les valeurs d’alerte.
5. Choisir des solutions d’alerte (information afficheur, programme de communication en wifi à une application, déclenchement automatique d’appareil).

<aside>
🧑‍💻 Pour vous aider à programmer le système d’alerte, consultez la **Fiche 3 - Créer un système d’alarme.**

[PROG6-TDL-**3**](https://www.notion.so/PROG6-TDL-3-ba62af7a82094c7c8f67748cd23f14e0?pvs=21)

</aside>

💬 **Débriefing**

En plus de l’affichage des données à l’utilisateur, lors de cette étape, nous avons rajouté la possibilité de prévenir l’utilisateur en cas d’anomalie. Cela permet de corriger manuellement l’orientation du panneau solaire quand les rendements ne sont pas suffisants.

Le protocole “Comment maximiser l’apport en énergie solaire et créer des panneaux auto-orientables ?” permet d’aller plus loin dans cette activité en proposant une solution d’automatisation permettant de toujours avoir une orientation optimale.
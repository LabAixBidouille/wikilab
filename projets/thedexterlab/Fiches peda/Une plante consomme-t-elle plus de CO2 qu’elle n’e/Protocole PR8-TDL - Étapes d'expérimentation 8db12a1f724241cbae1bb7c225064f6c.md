# Protocole PR8-TDL - Étapes d'expérimentation

### Étape 1 - Collecter des données

🧭**Orientation**

**Contexte :** La concentration de CO2 dans l'atmosphère a atteint son point le plus haut depuis que celle-ci est mesurée en 1958. Selon l'Agence Nationale Océanique et Atmosphérique américaine (NOAA), le seuil des 419 parties par million (ppm), unité de mesure utilisée pour quantifier la pollution dans l'air, a été franchi en mai 2021, comparé à 315 ppm en 1958. Ne pourrait-on pas nous protéger davantage en augmentant nos espaces verts ? Comment mesurer la consommation de CO2 d’une plante verte ?

**Objectif :** Mesurer une grandeur de manière directe, le taux de CO2 en ppm.

💡**Conceptualisation**

La photosynthèse des végétaux chlorophylliens est responsable de la fixation et de la réduction de CO2, ainsi que de la libération d’O2. Comment mesurer ce phénomène ? La solution qui semble la plus simple est d'utiliser une plante sous cloche hermétique et un capteur de CO2 branché sur une carte programmable.

🔎**Investigation**

La phase d’investigation consistera à mettre en place l’expérience et à collecter les données sur le taux de CO2 consommé par la plante. Vous pouvez suivre les étapes suivantes :

1. Mise en place de la cloche avec une plante.
2. Placer une lampe.
3. Positionner le capteur CO2 dans la cloche.
4. Brancher le capteur sur la carte programmable.
5. Réaliser le programme pour collecter les données.

**Les données seront collectées directement sur l’interface de programmation grâce à la mise en place de la console, disponible sous le simulateur.**

<aside>
🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 1 - Mesurer le taux de CO2 dans l’air.**

[PROG8-TDL-1](https://www.notion.so/PROG8-TDL-1-83f8b3769c1c418581626b6d4b7a85cf?pvs=21)

</aside>

💬**Débriefing**

Durant cette expérimentation, nous avons pu observer qu’une plante consomme du CO2 quand elle est éclairée correctement. Cette diminution du taux de CO2 est liée à l’activité photosynthétique de la plante. Le CO2 absorbé par la plante lui permet d’alimenter les différents processus biochimiques permettant l’assimilation des glucides nécessaire à la croissance de la plante. Le CO2 n’est pas le seul élément nécessaire à la photosynthèse, il faut aussi l’eau et la lumière pour qu’elle se produise. Si la plante n’est pas assez arrosée ou pas assez éclairée, on ne peut pas observer la variation de la concentration de CO2 attendue.

### Étape 2 - Afficher les données collectées

🧭**Orientation**

**Contexte :** Nous avons pu voir dans la partie précédente comment demander à un capteur d'obtenir des informations. Il serait utile maintenant de pouvoir faire connaître ces informations à l'utilisateur.

**Objectifs :** Choisir le matériel adapté parmi des actionneurs mis à disposition.

💡**Conceptualisation**

Afin d'informer l'utilisateur du taux de CO2 mesurée, la première solution qui vient à l'esprit est d'utiliser un afficheur externe de type écran.

🔎**Investigation**

Pour réaliser cette phase, voici les différentes étapes de la phase d’investigation :

1. Choisir l’actionneur adéquat dans une boîte d’actionneur.
2. Positionner l’actionneur choisi.
3. Brancher et réaliser le programme pour d’affichage des données.
4. Mesurer le taux de CO2 dans la cloche. (Avec une lampe et sous un drap noir)

<aside>
🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 2 - Afficher les données collectées sur un écran.**

[PROG8-TDL-2](https://www.notion.so/PROG8-TDL-2-dda8bb5612a748e3871a752ed35929f6?pvs=21)

</aside>

À l’aide des données produites par la carte programmable, remplir le tableau suivant :

| Heure | Humidité du sol | Éclairage | Taux de CO2 (en ppm) | Observations/Commentaires |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |

Investiguez pour comprendre quel est le processus responsable de la variation du taux de CO2 ?

Pour mener l’enquête sur les causes de la variation de CO2 observée, refaites l’expérience sans allumer la lumière. Que se passe-t-il ? Pourquoi ?

De même, si la terre du pot est bien sèche ?

💬**Débriefing**

L’ajout d’un écran permet de faire plus de tests et de mieux comprendre les phénomènes observés lors de la première étape. Ces expérimentations viennent pour vérifier ce qui a été appris sur la photosynthèse.

### Étape 3 - Analyser les données

🧭**Orientation**

**Contexte :** Nous avons pu afficher les données instantanément. Nous avons pu observer les variations du taux de CO2. Il serait peut-être pertinent de mesurer sur une période plus longue.

**Objectifs :** Analyser les données mesurées et les extraire sur un fichier.

💡**Conceptualisation**

Afin d’analyser les données du capteur de CO2 sur une longue période, l'utilisation d'un tableur semble être une solution simple. Pour cela, il est nécessaire de pouvoir récupérer les données de la carte programmable. La solution à mettre en place sera d'écrire via le port série les données au format CSV (comma separated value), format de données exploitable par un tableur.

🔎**Investigation**

1. Définir deux périodes de mesures (jour et nuit)
2. Mise en œuvre du programme de récupération des données.
3. Récupérer les données dans des tableurs.

<aside>
🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 3 - Exporter les données du capteur de CO2 au format CSV**.

[PROG8-TDL-3](https://www.notion.so/PROG8-TDL-3-305423156c8644a190a5488548c6b301?pvs=21)

</aside>

Conduire l’expérience avec plusieurs plantes pour observer ce qui se passe sur plusieurs jours. Avec les données produites, essayez de comparer les différentes expériences et formuler des hypothèses par rapport à ce que vous observez. Remplir le tableau suivant chaque jour :

| Jour | Plante | Quantité d’eau apportée | Temps d’éclairage | Variation du Taux de CO2 (en ppm) | Croissance visible ? | Observations/Commentaires |
| --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |

💬**Débriefing**

Les données produites permettent de commencer à modéliser la variation du CO2 et son impact sur la croissance de la plante. La comparaison avec des plantes avec des vitesses de croissance différentes permet d’observer que plus une plante grandit vite plus elle va consommer de CO2 chaque jour. La quantité de CO2 disponible est un facteur limitant pour certaines plantes et une complémentation peut permettre à ces plantes d’avoir une croissance optimisée.

### Étape 4 - **Utilisez les données de température et d’humidité pour observer leurs influences**

🧭**Orientation**

**Contexte :** Nous allons faire varier la température et le taux d’humidité sous la cloche. Est-ce que le changement de ces paramètres exerce une influence sur les échanges gazeux ?

**Objectifs :** Analyser les données mesurées et d’apporter une conclusion sur notre écosystème.

💡**Conceptualisation**

Afin d’analyser les données des différents capteurs sur une longue période et dans des conditions différentes, l’utilisation d’un tableur est nécessaire. La solution mise en place sera d'écrire via le port série les données au format CSV (comma separated value), format exploitable par un tableur. L’analyse de ces données permettra de conclure sur les hypothèses de départ.

🔎**Investigation**

1. Définir une période de mesure (1 heure)
2. Mise en œuvre du programme de récupération des données.
3. Récupérer les données dans un tableur.
4. Analyser les données collectées.
5. Faire une conclusion avec des recherches sur Internet.

<aside>
🧑‍💻 Pour vous aider à programmer les capteurs appropriés, consultez la **Fiche 4 - Exporter les données des capteurs de CO2, de température et d’humidité au format CSV**.

[PROG8-TDL-**4**](https://www.notion.so/PROG8-TDL-4-b13304c94aa14ccfb19add65b99a6c8e?pvs=21)

</aside>

En ajoutant la température et l’humidité à nos données, on peut voir si cela à un impact sur l’activité observable de nos plantes. En remplissant le tableau suivant, formulez des hypothèses quant aux besoins environnementaux de chaque plante :

| Jour | Plante | Température | Taux d’humidité | Quantité d’eau apportée | Temps d’éclairage | Variation du Taux de CO2 (en ppm) | Croissance visible ? | Observations/Commentaires |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |

Pour valider que la température a un impact, essayez de mettre des plantes dans un réfrigérateur ou à proximité d’un chauffage. Avec les données recueillies, formulez des hypothèses pour guider votre enquête.

💬 **Débriefing**

Comme on l’a vu précédemment, la lumière, l’eau et le CO2 sont les éléments principaux nécessaires à l’activité photosynthétique de la plante. Une plante à d’autres besoins qui peuvent causer l’arrêt de son activité. L’humidité et la température sont aussi des paramètres importants pour permettre à une plante de se développer.

Les plantes peuvent capturer du CO2, ce qui peut aider à compenser la production humaine de CO2. Cependant, si les conditions ne sont pas bonnes, les plantes ne peuvent pas stocker autant de carbone, et il est donc difficile de créer des puits de carbone verts. En France par exemple, avec les conditions climatiques plus extrêmes de ses dernières années, [les forêts ont perdu près de la moitié de leur capacité de stockage de carbone en 10 ans](https://www.lemonde.fr/planete/article/2023/06/06/la-foret-francaise-un-puits-de-carbone-en-peril_6176474_3244.html).

Cette activité au-delà de proposer une découverte de la photosynthèse est aussi une opportunité de discuter de la captation du carbone et des puits de carbone pour réduire les émissions de gaz à effet de serre.
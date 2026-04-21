# Protocole PR9-TDL - Étapes d'expérimentation

### Étape 1 - Collecter des données

🧭**Orientation**

Afin de répondre à notre question de recherche, nous devons trouver un moyen de mesurer la concentration de CO2 dans l'air ambiant dans différentes conditions. Il existe plusieurs façons de faire, la plus simple étant de programmer un capteur facile à utiliser et de le connecter à une carte programmable. La mesure de la concentration de CO2 dans l'air est la méthode la plus courante pour contrôler la qualité de l'air dans les espaces intérieurs ou extérieurs. Dans les bâtiments, les capteurs de CO2 peuvent également automatiser leur système de contrôle de la ventilation ou fournir des signaux d'alerte ou d'avertissement.

💡**Conceptualisation et investigation**

Dans notre projet, nous allons mesurer la concentration de CO2 dans l'air à l'aide d'un dispositif électronique dont le nom technique est **MH-Z19B NDIR**. Il s'agit d'un petit capteur commun, peu coûteux et facile à utiliser qui utilise le principe dit de **l'infrarouge non dispersif**. Nous n'avons pas besoin de comprendre le fonctionnement en détail, mais nous les avons mentionnés pour que l'on puisse chercher plus d'informations si cela nous intéresse. Notre objectif est surtout d'apprendre à utiliser ce capteur.

Chaque capteur, et en général tout dispositif, a des exigences spécifiques, c'est-à-dire des spécifications pour fonctionner correctement. Notre capteur a une **tension de fonctionnement de 4.5 - 5.5 Volts**, un **courant moyen de moins de 60 milliampères**, il peut fonctionner dans un environnement dont la **température et l’humidité relative de respectivement 0 à 50°C et 0 à 90%RH**. Sa plage de mesure est de **0 à 5 000 ppm (particules par million)**.

Maintenant que nous avons acquis quelques connaissances de base, nous pouvons commencer à préparer notre propre enquête scientifique.

<aside>
🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 1 - Mesurer la concentration de CO2.**

[PROG9-TDL-1](https://www.notion.so/PROG9-TDL-1-be4a219741e04dc599de367283452d48?pvs=21)

</aside>

💬 **Débriefing**

Dans cette étape, nous avons décidé de collecter les données nécessaires à notre enquête en mesurant la concentration de CO2 dans différentes conditions à l'aide d'un capteur électronique appelé MH-Z19B NDIR. Nous avons également acquis des connaissances de base sur le fonctionnement du capteur et ses spécifications, telles que la plage de mesure et les exigences de fonctionnement. Nous avons également fourni une ressource supplémentaire pour aider à programmer le capteur.

### Étape 2 - Afficher les données collectées

🧭**Orientation**

Dans l'étape précédente, nous avons construit un appareil expérimental simple avec un capteur pour mesurer la concentration de CO2 dans l'air. Nous avons supposé que la mesure est affichée sur notre écran d'ordinateur par le programme. Mais comment pouvons-nous afficher nos valeurs mesurées sur un outil externe ?

💡**Conceptualisation**

Une carte fournit une unité de traitement et un espace mémoire pour stocker et exécuter un programme, elle peut fournir des capteurs embarqués pour mesurer divers paramètres comme la température, la pression, l'humidité, l'accélération, la rotation, etc. Elle fournit également des interfaces pour se connecter et communiquer avec d'autres appareils. Dans ce cas particulier, nous devons connecter et utiliser un petit écran pour afficher en texte les valeurs de nos mesures.

🔎**Investigation**

Dans cette étape, nous utilisons un petit écran pour afficher les valeurs de nos mesures. Ensuite, nous établissons un tableau des mesures sur papier ou sur une feuille de calcul numérique, divisé en plusieurs colonnes. Chaque colonne correspond à une étude de cas. Nous pouvons collecter un ensemble de mesures (par exemple, 20 mesures par minute) pour différents cas de configuration de la pièce. Il peut s'agir :

1. D’une pièce avec des fenêtres ouvertes.
2. D’une pièce avec des fenêtres fermées.
3. D’une pièce comme dans le cas 1 et avec de nombreuses personnes/étudiants à l'intérieur.
4. D’une pièce comme dans le cas 2 et de nombreuses personnes/étudiants à l'intérieur.
5. D’une zone en plein air/extérieur.

| Pièce avec fenêtres ouvertes, peu/pas de personnes à l’intérieur | Pièce avec fenêtres fermées, peu/pas de personnes à l’intérieur | Pièce avec fenêtres ouvertes et de nombreuses personnes à l’intérieur | Pièce avec fenêtres fermées et de nombreuses personnes à l’intérieur | Zone de plein air / Extérieur |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |

Maintenant que nous avons préparé et mis en place notre appareil de mesure et notre plan d'investigation, nous pouvons commencer à enregistrer les données pour chaque cas.

<aside>
🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 2 - Afficher les données collectées sur un écran.**

[PROG9-TDL-2](https://www.notion.so/PROG9-TDL-2-af91bb61c7d34b33adfc4ac8b0769575?pvs=21)

</aside>

💬 **Débriefing**

Dans cette phase, nous avons fait et réalisé ce qui suit :

- Comprendre les éléments de base et les fonctionnalités d'une carte.
- Se familiariser avec la connexion et l'utilisation de périphériques externes pour réaliser des expériences.
- Utiliser un programme pour afficher des données sur un écran.

### Étape 3 - Analyser les données

🧭**Orientation**

Dans l'étape précédente, nous avons rempli notre tableau/feuille de calcul avec nos mesures qui représentent donc nos données. Nous voulons en tirer des enseignements et répondre à notre question de départ.

💡**Conceptualisation**

Nous avons collecté nos données avec notre appareil et nous devons maintenant les analyser afin d'en extraire des informations pertinentes. Dans cette étape, nous introduisons le concept de moyenne ou de valeur moyenne à partir des statistiques de base. En général, dans les enquêtes et les expériences scientifiques, nous prenons plusieurs mesures, puis nous concluons à une valeur finale en calculant la moyenne. C'est la meilleure estimation que nous pouvons obtenir de la valeur réelle.

🔎**Investigation**

Nous passons en revue notre tableau des données. Pour cette tâche, nous pouvons utiliser une feuille de calcul numérique comme Excel ou Open/Libre Office ou bien continuer avec notre tableau sur une feuille de papier. Nous **calculons la valeur moyenne et l'inscrivons à la fin de chaque colonne qui correspond à chaque étude de cas**. Nous comparons ce que nous avons trouvé dans chaque cas et nous concluons en ce qui concerne la qualité de l'air dans une pièce avec des personnes et **comment la ventilation peut la modifier**.

Nous pouvons répéter notre série de mesures avec les mêmes paramètres de la pièce, mais **à des moments différents de la journée**, c'est-à-dire dans des **conditions de température, de pression et d'humidité différentes**, afin de déterminer si ces conditions influencent les résultats. Pour cela, nous pouvons utiliser les capteurs de la STM32.

| Pièce avec fenêtres ouvertes, peu/pas de personnes à l’intérieur | Pièce avec fenêtres fermées, peu/pas de personnes à l’intérieur | Pièce avec fenêtres ouvertes et de nombreuses personnes à l’intérieur | Pièce avec fenêtres fermées et de nombreuses personnes à l’intérieur | Zone de plein air / Extérieur | Commentaires sur les conditions de température, pression et humidité |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
| **Moyenne :** | **Moyenne :** | **Moyenne :** | **Moyenne :** | **Moyenne :** | **Moyenne :** |

Enfin, nous discutons de nos résultats en classe. Nous réfléchissons également à l'ensemble du processus, du début du projet jusqu’à la fin. Il est important de comprendre que c'est de cette manière que les scientifiques et les chercheurs mènent des expériences et des recherches scientifiques pour essayer de comprendre la nature et ses phénomènes.

Nous pouvons éventuellement commencer à réfléchir à un éventuel projet de suivi où nous pourrons comparer les résultats des mesures effectuées à la maison ou dans d'autres bâtiments, consulter la littérature sur le sujet de la qualité de l'air et fixer des limites. Nous pourrons ensuite concevoir notre propre appareil de surveillance portable afin qu'il fonctionne comme un système d'alarme/alerte de bonne/mauvaise ventilation !

💬 **Débriefing**

Dans cette phase, nous avons fait et réalisé ce qui suit :

- Collecter des données pour différents cas.
- Analyser les données en prenant des valeurs moyennes et les comparer pour chaque cas.
- Extraire les informations pertinentes et conclure.
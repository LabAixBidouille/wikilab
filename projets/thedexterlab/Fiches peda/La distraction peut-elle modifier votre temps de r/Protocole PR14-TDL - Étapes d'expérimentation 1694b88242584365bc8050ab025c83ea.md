# Protocole PR14-TDL - Étapes d'expérimentation

### Étape 1 - Collecter des données

🧭**Orientation**

Pour répondre à notre question de recherche, nous devons trouver un moyen de mesurer notre temps de réaction lorsque nous percevons un signal comme un son ou un flash lumineux. Comment pouvons-nous y parvenir ? Tout le monde est libre de réfléchir et de proposer quelque chose. Toutes les idées sont les bienvenues à ce stade.

💡**Conceptualisation**

Le temps de réaction est le temps écoulé entre l'apparition d'un stimulus externe, tel qu'un son ou un clignement de lumière, et notre réponse spontanée à ce stimulus, comme bouger, courir ou appuyer sur un bouton à la main. En moyenne, chez l’être humain, il est de l'ordre de 200 à 250 millisecondes, mais il varie selon les conditions, l'âge, le sexe et le type de stimulus. De plus, toute distraction peut modifier significativement notre temps de réaction.

Dans notre cas, nous devons donc trouver un moyen de produire un signal aléatoire de son ou de lumière, qui sera le stimulus, et qui continuera jusqu'à ce que nous appuyions sur un bouton. Le temps écoulé entre ces deux événements sera notre temps de réaction. Nous devons donc l'enregistrer à l'aide d'un programme approprié.

Nous pouvons utiliser une carte programmable telle qu'Arduino, micro : bit ou STM32. Nous pouvons connecter un buzzer pour produire un son ou une LED pour un stimulus visuel. Nous devons également connecter un bouton-poussoir ou utiliser l'un des boutons intégrés. Un exemple de circuit est présenté dans le schéma ci-dessous.

Maintenant que nous avons acquis les connaissances de base de ce que nous voulons faire et construire, nous pouvons commencer à préparer notre recherche scientifique.

🔎**Investigation**

Nous commençons par nous familiariser avec notre ensemble d'appareils électroniques tels que la carte, les fils, les résistances, la planche à pain, les LED et le buzzer. Pour créer un circuit correct, nous devons d'abord identifier chaque élément. Ensuite, nous devons les connecter correctement en suivant le schéma de principe.

Si le circuit est correct, nous avons notre dispositif expérimental prêt à être contrôlé par un programme. Lorsque le programme s'exécute, il émet un signal aléatoire qui allume la LED (dans le cas où nous voulons mesurer notre réaction à un stimulus visuel) ou le buzzer (dans le cas où nous voulons mesurer notre temps de réaction à un stimulus audio). Ensuite, lorsque nous appuyons sur le bouton, la LED ou le buzzer s'éteint. Le temps écoulé est conservé par le programme dans une variable qui est ensuite imprimée à l'écran.

Afin de programmer votre carte et votre expérimentation, vous pouvez réaliser les deux circuits sur deux cartes distinctes : l’une pour les stimuli visuels (LED) et l’autre pour les stimuli sonores (buzzer).

<aside>
🧑‍💻 Pour vous aider à programmer les stimuli visuels, consultez la **Fiche 1 - Mesurer le temps de réaction grâce à un stimulus visuel (LED).**

[PROG14-TDL-1](https://www.notion.so/PROG14-TDL-1-b8009965f9774c5e9e5dc946a13b250c?pvs=21)

</aside>

<aside>
🧑‍💻 Pour vous aider à programmer les stimuli sonores, consultez la **Fiche 2 - Mesurer le temps de réaction grâce à un stimulus sonore (buzzer).**

[PROG14-TDL-2](https://www.notion.so/PROG14-TDL-2-7fdf8ce4b30d4325850b9eb9f31dbe33?pvs=21)

</aside>

💬 **Débriefing**

Dans cette phase, nous avons appris à collecter des données en mesurant notre temps de réaction à un stimulus sonore ou visuel à l'aide d'un appareil expérimental que nous avons construit. Nous avons également appris à programmer le dispositif expérimental à l'aide d'une carte programmable telle qu'Arduino, micro : bit ou STM32 pour produire un signal aléatoire de son ou de lumière et à enregistrer le temps de réaction.

### Étape 2 - Afficher les données collectées

🧭**Orientation**

Dans la précédente étape, nous avons construit un appareil expérimental simple avec un tableau pour mesurer notre temps de réaction. Nous avons supposé que la valeur mesurée est affichée sur notre écran d'ordinateur par le programme. Maintenant, considérons le cas où nous n'avons que la carte, par exemple la carte STM32, et que nous voulons l'utiliser de manière autonome pour plus de flexibilité. Comment pouvons-nous afficher nos valeurs mesurées ?

💡**Conceptualisation**

Une carte fournit une unité de traitement et un espace mémoire pour stocker et exécuter un programme. Elle peut également fournir des LED, des boutons et des capteurs intégrés pour mesurer divers paramètres tels que la température, la pression, l'humidité, l'accélération, la rotation, etc. En outre, elle fournit des interfaces pour se connecter et communiquer avec d'autres appareils.

Dans ce cas particulier, nous devons connecter et utiliser un petit écran pour afficher en texte les valeurs de nos mesures.

🔎**Investigation**

Dans cette étape, nous souhaitons utiliser le petit écran et afficher les valeurs de nos mesures en texte. De cette façon, nous disposons d'un appareil très portable pour nos recherches.

<aside>
🧑‍💻 Pour vous aider à programmer l’écran OLED, consultez la **Fiche 3 - Afficher les données collectées sur un écran.**

[PROG14-TDL-3](https://www.notion.so/PROG14-TDL-3-2714acb7895f43e88f2fa709d64c7b55?pvs=21)

</aside>

Ensuite, nous faisons une feuille de calcul ou un tableau des mesures divisé en deux colonnes. La première colonne est le temps de réaction au signal sonore. La deuxième colonne est le temps mesuré pour la réaction au signal LED. Nous prenons plusieurs mesures pour chaque cas. Nous pouvons répéter l'opération pour différents cas afin de comparer les résultats, par exemple en effectuant la même enquête le matin, l'après-midi ou le soir, ou avec des amis et des parents d'âge et de sexe différents.

Ce sont nos données pour l'étude de cas où il n'y a pas de source de distraction. Nous devons étudier les mêmes cas lorsque la distraction est présente. **Nous pouvons penser à divers scénarios susceptibles de détourner notre attention et donc d'affecter notre temps de réaction. Il peut s'agir, par exemple, d'une musique forte, d'un ami qui essaie de nous déranger, d'un téléphone portable qui sonne, d'un téléphone portable qui parle ou envoie des messages, etc. Pour chaque scénario, nous créons une nouvelle série de tableaux pour enregistrer nos mesures. Nous n'oublions pas de mettre des étiquettes claires en haut de chaque tableau ou feuille de calcul afin de ne pas mélanger nos données pendant l'analyse.** Voici un exemple de feuille de calcul que nous pouvons utiliser.

| **Distraction** | **Aucune distraction** |
| --- | --- |
| **Age** |  |
| **Genre** |  |
| **Mesures du temps de réaction au stimulus sonore (buzzer)** | **Mesures du temps de réaction au stimulus visuel** |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
| **Moyenne :** | **Moyenne :** |

| **Distraction** | **Musique forte** |
| --- | --- |
| **Age** |  |
| **Genre** |  |
| **Mesures du temps de réaction au stimulus sonore (buzzer)** | **Mesures du temps de réaction au stimulus visuel** |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
| **Moyenne :** | **Moyenne :** |

| **Distraction** | **Personne agaçante** |
| --- | --- |
| **Age** |  |
| **Genre** |  |
| **Mesures du temps de réaction au stimulus sonore (buzzer)** | **Mesures du temps de réaction au stimulus visuel** |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
| **Moyenne :** | **Moyenne :** |

💬 **Débriefing**

Dans cette phase, nous avons fait et réalisé ce qui suit :

- Comprendre les éléments de base et les fonctionnalités d'une carte.
- Se familiariser avec la connexion et l'utilisation de périphériques externes pour réaliser des expériences.
- Utiliser un programme pour afficher des données sur un écran.

### Étape 3 - Analyser les données

🧭**Orientation**

À l'étape précédente, nous avons rempli notre feuille de calcul ou nos tableaux de mesures, ce qui constitue nos données. En les utilisant, nous voulons apprendre le temps de réaction au son ou à la lumière dans chaque cas et scénario de distraction, et donner une réponse à notre question de départ.

💡 **Conceptualisation**

Nous avons collecté des données à l'aide de notre appareil et nous devons maintenant les analyser pour en extraire des informations pertinentes. Dans cette étape, nous introduisons le concept de moyenne ou de valeur moyenne en utilisant des statistiques de base. En général, lors d'enquêtes et d'expériences scientifiques, nous effectuons plusieurs mesures, puis nous concluons à une valeur finale en calculant la moyenne. C'est la meilleure estimation que nous pouvons obtenir de la valeur réelle.

🔎**Investigation**

Nous parcourons notre tableau de données de mesures enregistrées et calculons le temps de réaction correspondant à chaque colonne de mesures. Nous pouvons utiliser un tableur numérique comme Excel ou Open/Libre Office pour cette tâche, ou bien continuer avec un tableau papier. À la fin, nous calculons la valeur moyenne et l'exprimons en secondes et en millisecondes. Nous pouvons également vérifier si ce que nous avons trouvé est proche ou non de la valeur mentionnée dans la bibliographie.

Nous répétons ensuite le même processus pour la série de mesures que nous avons prises dans différentes conditions (scénarios de distraction) afin de déterminer si celles-ci ont une incidence sur nos résultats. Il est également utile de présenter nos résultats sous forme de graphique pour mieux les visualiser. Cela nous aidera également à présenter et à communiquer nos résultats et nos conclusions. Nous réfléchissons également à ce que nous avons trouvé dans le contexte d'un piéton, d'un cycliste ou d'un conducteur de voiture, et discutons de la manière dont la distraction peut affecter notre comportement sur la route et notre propre sécurité, ainsi que celle des autres.

Enfin, nous discutons de nos conclusions en classe. Nous réfléchissons également à l'ensemble du processus, depuis le début du projet jusqu'à sa fin. Il est important de comprendre que c'est ainsi que les scientifiques, les ingénieurs et les chercheurs mènent des expériences et des enquêtes scientifiques pour essayer de comprendre des phénomènes, acquérir des connaissances et développer des applications technologiques.

💬 **Débriefing**

Au cours de cette phase, nous avons effectué et réalisé les activités suivantes :

- Collecte de données pour différents cas, tels que des personnes de différents âges et sexes, ainsi que des scénarios de distraction.
- Enregistrement des données dans une feuille de calcul.
- Analyse des données en prenant les valeurs moyennes et en les affichant graphiquement.
- Extraction des informations pertinentes et conclusion.
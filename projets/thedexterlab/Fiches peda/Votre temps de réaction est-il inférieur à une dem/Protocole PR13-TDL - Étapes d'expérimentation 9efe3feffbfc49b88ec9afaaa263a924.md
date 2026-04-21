# Protocole PR13-TDL - Étapes d'expérimentation

### Étape 1 - Collecter des données

🧭**Orientation**

Pour répondre à notre question de recherche, nous devons trouver un moyen de mesurer notre temps de réaction lorsque nous percevons un signal, comme un son ou un flash lumineux. Comment pouvons-nous y parvenir ? Tout le monde est libre de réfléchir et de proposer des idées. Toutes les idées sont les bienvenues à ce stade.

💡**Conceptualisation**

Le temps de réaction est le temps écoulé entre l'apparition d'un stimulus externe, comme un son ou un clignement de lumière, et notre réponse spontanée à ce stimulus, telle que bouger, courir ou appuyer sur un bouton. En moyenne, chez l’être humain, il est de l'ordre de 200 à 250 millisecondes, mais il varie selon les conditions, l'âge, le sexe et le type de stimulus.

Dans notre cas, nous devons trouver un moyen de produire un signal aléatoire de son ou de lumière, qui sera le stimulus, et qui continuera jusqu'à ce que nous appuyions sur un bouton. Le temps écoulé entre ces deux événements sera notre temps de réaction, que nous enregistrerons à l'aide d'un programme approprié.

Nous pouvons utiliser une carte programmable telle que l'Arduino, la micro : bit ou la STM32. Nous pouvons connecter un buzzer pour produire un son ou une LED pour un stimulus visuel. Nous devons également connecter un bouton-poussoir ou utiliser l'un des boutons intégrés.

Maintenant que nous avons acquis les connaissances de base de ce que nous voulons faire et construire, nous pouvons commencer à préparer notre recherche scientifique.

🔎**Investigation**

Nous commençons par nous familiariser avec notre ensemble d'appareils électroniques, tels que la carte, les fils, les résistances, la breadboard, les LED et le buzzer. Pour créer un circuit correct, nous devons d'abord identifier chaque composant. Ensuite, nous devons les connecter correctement.

Si le circuit est correct, nous avons notre dispositif expérimental prêt à être contrôlé par un programme. **Lorsque le programme s'exécute, il émet un signal aléatoire qui allume la LED (dans le cas où nous voulons mesurer notre réaction à un stimulus visuel) ou le buzzer (dans le cas où nous voulons mesurer notre temps de réaction à un stimulus audio). Ensuite, lorsque nous appuyons sur le bouton, la LED ou le buzzer s'éteint. Le temps écoulé est enregistré par le programme dans une variable qui est imprimée à l'écran.**

Afin de programmer votre carte et votre expérimentation, vous pouvez réaliser les deux circuits sur deux cartes distinctes : l’une pour les stimuli visuels (LED) et l’autre pour les stimuli sonores (buzzer).

<aside>
🧑‍💻 Pour vous aider à programmer les stimuli visuels, consultez la **Fiche 1 - Mesurer le temps de réaction grâce à un stimulus visuel (LED).**

[PROG13-TDL-1](https://www.notion.so/PROG13-TDL-1-07db653a93d542799aa60a6a892f18f5?pvs=21)

</aside>

<aside>
🧑‍💻 Pour vous aider à programmer les stimuli sonores, consultez la **Fiche 2 - Mesurer le temps de réaction grâce à un stimulus sonore (buzzer).**

[PROG13-TDL-2](https://www.notion.so/PROG13-TDL-2-df8479655d6e4005834df111569dde25?pvs=21)

</aside>

💬 **Débriefing**

Dans cette phase, nous avons appris à collecter des données en mesurant notre temps de réaction à un stimulus sonore ou visuel à l'aide d'un appareil expérimental que nous avons construit. Nous avons également appris à programmer le dispositif expérimental à l'aide d'une carte programmable telle qu'Arduino, micro : bit ou STM32 pour produire un signal aléatoire de son ou de lumière et à enregistrer le temps de réaction.

### Étape 2 - Afficher les données collectées

🧭**Orientation**

Dans l'étape précédente, nous avons construit un appareil expérimental simple avec un tableau pour mesurer notre temps de réaction. Nous avons supposé que la valeur mesurée est affichée sur notre écran d'ordinateur par le programme. Considérons le cas où nous n'avons que la carte, par exemple la carte STM32, et que nous voulons l'utiliser de manière autonome pour plus de flexibilité. Comment pourrions-nous afficher nos valeurs mesurées ?

💡**Conceptualisation**

Une carte fournit une unité de traitement et un espace mémoire pour stocker et exécuter un programme. Elle peut également fournir des LED, des boutons et des capteurs intégrés pour mesurer divers paramètres tels que la température, la pression, l'humidité, l'accélération, la rotation, etc. De plus, elle fournit des interfaces pour se connecter et communiquer avec d'autres appareils. Dans ce cas particulier, nous devons connecter et utiliser un petit écran pour afficher en texte les valeurs de nos mesures.

🔎 **Investigation**

Dans cette étape, nous souhaitons utiliser le petit écran et afficher les valeurs de nos mesures en texte. De cette façon, nous disposons d'un appareil très portable pour nos recherches.

<aside>
🧑‍💻 Pour vous aider à programmer l’écran OLED, consultez la **Fiche 3 - Afficher les données collectées sur un écran.**

[PROG13-TDL-3](https://www.notion.so/PROG13-TDL-3-b91855439d974519b841bfc3dad101fc?pvs=21)

</aside>

Ensuite, nous créons une feuille de calcul ou un tableau des mesures divisé en deux colonnes. La première colonne représente le temps de réaction au signal sonore, tandis que la deuxième colonne représente le temps mesuré pour la réaction au signal LED. Nous prenons plusieurs mesures pour chaque cas. Nous pouvons répéter cette opération pour différents cas afin de comparer les résultats, par exemple en effectuant la même enquête le matin, l'après-midi ou le soir, ou avec des amis ou des parents de sexe et d'âge différents.

| Condition de l’expérimentation (individu, âge, moment du relevé dans la journée…) | Temps de réaction - Signal sonore (utilisation du buzzer) | Temps de réaction - Stimulus visuel (utilisation de la LED) |
| --- | --- | --- |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |

💬 **Débriefing**

Dans cette phase, nous avons réalisé les actions suivantes :

- Comprendre les éléments de base et les fonctionnalités d'une carte.
- Se familiariser avec la connexion et l'utilisation de périphériques externes pour réaliser des expériences.
- Utiliser un programme pour afficher des données sur un écran.

### Étape 3 - Analyser les données

🧭**Orientation**

Dans l'étape précédente, nous avons rempli notre feuille de calcul ou nos tableaux de mesures. Ce sont nos données. En les utilisant, nous voulons apprendre le temps de réaction au son ou à la lumière dans chaque cas, et ainsi répondre à notre question initiale.

💡**Conceptualisation**

Nous avons collecté nos données à l'aide de notre appareil et nous devons maintenant les analyser pour en extraire des informations pertinentes. Dans cette étape, nous introduisons le concept de moyenne ou de valeur moyenne à partir des statistiques de base. En général, dans les enquêtes et les expériences scientifiques, nous effectuons plusieurs mesures, puis nous concluons à une valeur finale en calculant la moyenne. C'est la meilleure estimation que nous pouvons obtenir de la valeur réelle.

🔎**Investigation**

Nous parcourons notre tableau de données de mesures enregistrées et calculons le temps de réaction correspondant à chaque colonne de mesures. Nous pouvons utiliser un tableur numérique comme Excel ou Open/Libre Office pour cette tâche, ou continuer avec un tableur/tableau papier. À la fin, nous calculons la moyenne et l'exprimons en secondes et en millisecondes. Nous pouvons également vérifier si notre résultat est proche de la valeur mentionnée dans la bibliographie. Pour déterminer si d'autres conditions ont une incidence sur les résultats obtenus, nous pouvons répéter notre série de mesures dans des conditions différentes (voir également le projet de suivi intitulé "La distraction peut-elle modifier votre temps de réaction ?").

Enfin, nous discutons de nos résultats en classe. Nous réfléchissons également à l'ensemble du processus, du début à la fin du projet. Il est important de comprendre que c'est de cette manière que les scientifiques et les chercheurs mènent des expériences et des enquêtes scientifiques pour tenter de comprendre la nature et ses phénomènes.

💬 **Débriefing**

Au cours de cette phase, nous avons effectué et réalisé les étapes suivantes :

- Collecter des données pour différents cas (par exemple avec des personnes d'âge et de sexe différents).
- Enregistrer les données dans une feuille de calcul
- Analyser les données, en prenant les valeurs moyennes, les afficher graphiquement.
- Extraire les informations pertinentes et conclure.
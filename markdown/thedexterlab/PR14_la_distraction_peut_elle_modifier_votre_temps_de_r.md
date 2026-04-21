# La distraction peut-elle modifier votre temps de réaction ?

**Problématique :** Comment évaluer le temps de réaction d'un cycliste ?

> ℹ️ **Le temps de réaction est la durée entre le moment où un stimulus est présenté à un individu et le moment où il produit une réponse. Cette mesure est utilisée pour évaluer les performances de la réaction humaine à des stimuli visuels, auditifs ou tactiles. Le temps de réaction peut varier en fonction de plusieurs facteurs, tels que l'âge, l'état de veille, l'attention et la motivation. La vitesse de réaction peut être mesurée pour des réponses simples telles que la détection visuelle ou le mouvement de la main, mais également pour des réponses plus complexes, telles que la prise de décision ou la résolution de problèmes. Le temps de réaction est important pour la sécurité dans les situations qui nécessitent une réponse rapide, telles que la conduite de véhicules, les sports de haut niveau et les activités professionnelles. En comprenant le temps de réaction, on peut améliorer les performances humaines dans divers domaines.**

![DATA14_TDL.jpg](images/DATA14_TDL.jpg)

### Déroulé de l’activité

Ce projet est une activité de suivi du projet "Votre temps de réaction est-il inférieur à une demi-seconde ?". Il comporte initialement les mêmes étapes qui sont incluses ici par souci d'exhaustivité. Dans ce projet, notre objectif est de mener une expérience scientifique pour mesurer notre temps de réaction à un signal audio ou visuel dans un environnement avec distraction, par exemple le bruit d'une musique forte ou une personne qui détourne notre attention. Pour cela, nous allons fabriquer un appareil expérimental en connectant différents composants électroniques à une carte programmable et le faire fonctionner par un programme approprié. Ensuite, nous collecterons des données et les analyserons pour mesurer notre temps de réaction pour différents cas de distraction. Tout comme le font les vrais scientifiques et chercheurs ! Dans ce cas particulier, nous voulons étudier la question scientifique suivante : "La distraction peut-elle modifier votre temps de réaction ?". Pour y répondre, nous devons d'abord construire un dispositif simple avec un tableau, un bouton-poussoir et un buzzer ou une LED.

### Compétences Mobilisées

Cette expérimentation permet d’aborder différentes notions du cursus de manière interdisciplinaire. Tout d'abord, elle permet d'explorer, dans les apprentissages de physique, la mesure du temps de réaction, qui est une notion importante en sciences ainsi que dans la vie quotidienne. Les élèves peuvent apprendre à mesurer le temps de réaction à différents stimuli, tels que des signaux audio ou visuels, et à comprendre comment ce temps peut être influencé par différentes variables, telles que la distraction, la fatigue, l'âge ou la motivation. Ils peuvent également apprendre à utiliser des capteurs pour mesurer le temps de réaction avec précision.

Ensuite, ce projet permet d'aborder des notions de programmation et d'électronique. Les élèves apprendront à programmer une carte programmable telle que la carte STM32 IoT Node Board pour contrôler différents composants électroniques tels que le bouton-poussoir, le buzzer et la LED. Cela comprend notamment la création de circuits électroniques et l’utilisation d’une breadboard pour connecter les différents composants et à utiliser des câbles de connexion pour les relier à la carte programmable. En apprenant à programmer et à utiliser des composants électroniques, les élèves peuvent acquérir des compétences utiles dans de nombreux domaines, tels que l'informatique, l'ingénierie et la robotique.

Enfin, ce projet permet de mettre en pratique la méthode scientifique. Les élèves apprendront à formuler une question scientifique pertinente, à concevoir une expérience pour y répondre, à collecter des données de manière rigoureuse et à les analyser pour en tirer des conclusions. Ils peuvent également apprendre à communiquer leurs résultats sous forme de rapport ou de présentation, en utilisant des graphiques ou des tableaux pour illustrer leurs résultats. 

### Matériel

Afin de réaliser cette activité, vous aurez besoin du matériel suivant :

- 1 carte programmable “STM32 IoT Node Board”
- 1 bouton-poussoir
- 1 buzzer piézoélectrique
- 1 LED
- 1 résistance de 330Ω
- 1 écran OLED (SSD1306)
- 1 breadboard
- Des câbles de connexion
- 1 câble USB - micro B

# LES RESSOURCES

### Expérimentation scientifique

[Protocole PR14-TDL - Étapes d'expérimentation](La%20distraction%20peut-elle%20modifier%20votre%20temps%20de%20r/Protocole%20PR14-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation%201694b88242584365bc8050ab025c83ea.md)

### Fiches de programmation

[Sans titre](La%20distraction%20peut-elle%20modifier%20votre%20temps%20de%20r/Sans%20titre%20b23bb022dc00412487eeb1b1affbed40.csv)


---

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

> 🧑‍💻 Pour vous aider à programmer les stimuli visuels, consultez la **Fiche 1 - Mesurer le temps de réaction grâce à un stimulus visuel (LED).**
>
> [PROG14-TDL-1](https://www.notion.so/PROG14-TDL-1-b8009965f9774c5e9e5dc946a13b250c?pvs=21)

> 🧑‍💻 Pour vous aider à programmer les stimuli sonores, consultez la **Fiche 2 - Mesurer le temps de réaction grâce à un stimulus sonore (buzzer).**
>
> [PROG14-TDL-2](https://www.notion.so/PROG14-TDL-2-7fdf8ce4b30d4325850b9eb9f31dbe33?pvs=21)

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

> 🧑‍💻 Pour vous aider à programmer l’écran OLED, consultez la **Fiche 3 - Afficher les données collectées sur un écran.**
>
> [PROG14-TDL-3](https://www.notion.so/PROG14-TDL-3-2714acb7895f43e88f2fa709d64c7b55?pvs=21)

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


---

## Fiches programmation

### PROG14-TDL-1 — Mesurer le temps de réaction grâce à un stimulus visuel (LED)



🛠 **Construire**

**Câbler le bouton-poussoir**

Connectez une patte du bouton à la broche **GND** de la carte. Connectez ensuite l'autre patte sur la broche **D2**. 

**Câbler la LED** 

Connectez l'anode de la LED sur la broche **D4**. Connectez la cathode de la LED à une **résistance (330 ohms).** Branchez ensuite la patte non connectée de la résistance sur la broche **GND**.

> 💡 **La LED a une orientation. Pour désigner l'orientation correcte, chaque branche a un nom. Voici comment trouver la différence entre l'anode et la cathode : Anode : C'est le '+' de la LED. La branche anodique est plus longue que la branche cathodique. Cathode : C'est le '-' de la LED. La branche de la cathode est plus courte que le fil de l'anode.**

**Connecter la carte à l'ordinateur**

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur micro-USB ST-LINK (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé DIS_L4IOT. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

![Untitled](images/Untitled.png)

**Ouvrir MakeCode**

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur. *Ressource : [makecode.lets-steam.eu](http://makecode.lets-steam.eu/)*

**Installer l’extension Serial**

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut "prêt à l'emploi" et vous devrez installer une extension.

> ℹ️ **Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de la robotique et bien plus encore.**

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. Si vous cliquez sur **AVANCÉ**, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton.

Dans la liste des extensions disponibles, vous pouvez facilement trouver l’extension **Serial** qui sera utilisée pour cette activité. L’extension Serial vous permettra de collecter les données de temps de réaction et de les afficher dans la console. Si elle n’est pas directement disponible sur votre écran, vous pouvez la rechercher à l'aide de l'outil de recherche. Cliquez sur l’extension que vous souhaitez utiliser et un nouveau groupe de blocs apparaîtra sur l'écran principal. 

**Programmer la carte**

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur DIS_L4IOT et attendez que la carte finisse de clignoter.

**Exécuter, modifier, jouer**

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET). Pour observer les différents temps de réaction collectés par le programme, ouvrez la console (bouton disponible en dessous du simulateur).

![Untitled](images/Untitled 1.png)

**🧑‍💻 Programmer**

```jsx
input.buttonD2.onEvent(ButtonEvent.Down, function () {
		Serial.writeValue("Reaction time (ms)", (control.millis() - timeTurnOn));
    newGame()
})
function newGame () {
    pins.D4.digitalWrite(false)
    pause(randint(1000, 5000))
    timeTurnOn = control.millis()
    pins.D4.digitalWrite(true)
}
let timeTurnOn = 0
Serial.attachToConsole()
newGame()
```

### PROG14-TDL-2 — Mesurer le temps de réaction grâce à un stimulus sonore (buzzer)



🛠 **Construire**

**Câbler le bouton-poussoir**

Connectez une patte du bouton à la broche **GND** de la carte. Connectez ensuite l'autre patte sur la broche **D2**. 

**Câbler le buzzer**

En théorie, un buzzer n'est pas polarisé (cela signifie qu'il n'y a pas de "+" ni de "-"), mais il y a souvent une paire de fils noir/rouge ou des signes ("+" et/ou "-") sur l'appareil. Si vous êtes dans cette configuration, attachez le fil du côté "+" du buzzer à la *pin* **D3** et l'autre à la *pin* **GND**. S'il n'y a pas de couleur ou d'indication, branchez simplement un fil sur la *pin* **D3** et l'autre sur la *pin* **GND**.

**Connecter la carte à l'ordinateur**

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur micro-USB ST-LINK (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé DIS_L4IOT. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

![Untitled](images/Untitled.png)

**Ouvrir MakeCode**

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur. *Ressource : [makecode.lets-steam.eu](http://makecode.lets-steam.eu/)*

**Installer les extensions**

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut "prêt à l'emploi" et vous devrez installer deux extensions.

> ℹ️ **Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de la robotique et bien plus encore.**

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. Si vous cliquez sur **AVANCÉ**, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton.

Dans la liste des extensions disponibles, vous pouvez facilement trouver les extensions **Music et Serial** qui seront utilisées pour cette activité. L’extension Music vous permettra d’émettre un son grâce au buzzer. L’extension Serial vous permettra de collecter les données de temps de réaction et de les afficher dans la console. Si elles ne sont pas directement disponibles sur votre écran, vous pouvez les rechercher à l'aide de l'outil de recherche. Cliquez sur l’extension que vous souhaitez utiliser (par exemple **Music**) et un nouveau groupe de blocs apparaîtra sur l'écran principal. Réitérez la démarche pour installer **Serial**.

**Programmer la carte**

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur DIS_L4IOT et attendez que la carte finisse de clignoter.

**Exécuter, modifier, jouer**

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET). Pour observer les différents temps de réaction collectés par le programme, ouvrez la console (bouton disponible en dessous du simulateur).

![Untitled](images/Untitled 1.png)

**🧑‍💻 Programmer**

```jsx
input.buttonD2.onEvent(ButtonEvent.Down, function () {
    Serial.writeValue("Reaction time (ms)", (control.millis() - timeTurnOn));
    newGame()
})
function newGame () {
    music.stopAllSounds()
    pause(randint(1000, 5000))
    timeTurnOn = control.millis()
    music.ringTone(262)
}
let timeTurnOn = 0
Serial.attachToConsole()
newGame()
```

### PROG14-TDL-3 — Afficher les données collectées sur un écran



🛠**Construire**

**Réaliser les câblages**

Pour démarrer cette étape, vous devez avoir réalisé les fiches 1 ou/et 2 afin d’avoir votre LED, votre buzzer et votre bouton-poussoir prêt à l’emploi. Reprenez les branchements afin de préparer votre circuit initial et pensez à installer les extensions, notamment Music, pour pouvoir utiliser correctement le buzzer.

**Connecter l'écran**

Il y a deux façons de câbler l'écran OLED SSD1306 à une carte, soit avec une connexion I2C ou SPI. Pour notre écran, nous utilisons la connexion I2C :

- Bleu pour GND
- Rouge pour V+ (3V3)
- Orange pour SDA (D14)
- Jaune pour SCL (D15)

*Ressources : [https://en.wikipedia.org/wiki/I2C](https://en.wikipedia.org/wiki/I2C), [https://en.wikipedia.org/wiki/Serial_Peripheral_Interface](https://en.wikipedia.org/wiki/Serial_Peripheral_Interface), [https://www.sparkfun.com/qwiic](https://www.sparkfun.com/qwiic), [https://learn.adafruit.com/introducing-adafruit-stemmaqt/what-is-stemma-qt](https://learn.adafruit.com/introducing-adafruit-stemmaqt/what-is-stemma-qt)*

![Untitled](images/Untitled.png)

**Connecter la carte à l'ordinateur**

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur micro-USB ST-LINK (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé DIS_L4IOT. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

**Ouvrir MakeCode**

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur. *Ressource : [makecode.lets-steam.eu](http://makecode.lets-steam.eu/)*

**Ajouter une extension**

Pour utiliser cet écran, il est nécessaire d’installer l’extension nommée “**oled**”. Pour l’installer, cliquez sur l’icône en forme d’engrenage en haut à gauche de MakeCode, puis sélectionnez “Extensions”. Une nouvelle fenêtre s’ouvre dans laquelle vous choisissez l’extension dont vous avez besoin en cliquant dessus, si vous ne la trouvez pas, vous pouvez utiliser la barre de recherche en haut de l’écran.

**Programmer la carte**

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur DIS_L4IOT et attendez que la carte finisse de clignoter.

**Exécuter, modifier, jouer**

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET).

**🧑‍💻 Programmer**

***Avec un stimulus visuel - LED***

```jsx
function newGame () {
    pins.D4.digitalWrite(false)
    pause(randint(1000, 5000))
    timeTurnOn = control.millis()
    pins.D4.digitalWrite(true)
}
input.buttonD2.onEvent(ButtonEvent.Down, function () {
    reaction = control.millis() - timeTurnOn
    oled.clear()
    oled.showString("Reaction time:", 1)
    oled.showString("" + reaction + "ms", 2)
    newGame()
})
let reaction = 0
let timeTurnOn = 0
Serial.attachToConsole()
newGame()
```

***Avec un stimulus sonore - Buzzer***

```jsx
function newGame () {
    music.stopAllSounds()
    pause(randint(1000, 5000))
    timeTurnOn = control.millis()
    music.ringTone(262)
}
input.buttonD2.onEvent(ButtonEvent.Down, function () {
    reaction = control.millis() - timeTurnOn
    oled.clear()
    oled.showString("Reaction time:", 1)
    oled.showString("" + reaction + "ms", 2)
    newGame()
})
let reaction = 0
let timeTurnOn = 0
Serial.attachToConsole()
newGame()
```

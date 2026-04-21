# Votre temps de réaction est-il inférieur à une demi-seconde ?

**Problématique :** Comment évaluer le temps de réaction d'un cycliste ?

> ℹ️ **Le temps de réaction est la durée entre le moment où un stimulus est présenté à un individu et le moment où il produit une réponse. Cette mesure est utilisée pour évaluer les performances de la réaction humaine à des stimuli visuels, auditifs ou tactiles. Le temps de réaction peut varier en fonction de plusieurs facteurs, tels que l'âge, l'état de veille, l'attention et la motivation. La vitesse de réaction peut être mesurée pour des réponses simples telles que la détection visuelle ou le mouvement de la main, mais également pour des réponses plus complexes, telles que la prise de décision ou la résolution de problèmes. Le temps de réaction est important pour la sécurité dans les situations qui nécessitent une réponse rapide, telles que la conduite de véhicules, les sports de haut niveau et les activités professionnelles. En comprenant le temps de réaction, on peut améliorer les performances humaines dans divers domaines.**

![DATA13_TDL.jpg](images/DATA13_TDL.jpg)

### Déroulé de l’activité

Dans ce projet, notre objectif est de réaliser une expérience scientifique pour mesurer notre temps de réaction à un signal sonore ou visuel. Pour cela, nous allons fabriquer un appareil expérimental en connectant différents composants électroniques à une carte programmable et le faire fonctionner par un programme approprié. Ensuite, nous collecterons des données et les analyserons pour mesurer notre temps de réaction dans différents cas. Tout comme le font les vrais scientifiques et chercheurs ! Dans ce cas particulier, nous allons étudier la question scientifique suivante : "Votre temps de réaction est-il inférieur à une demi-seconde ?". Voici les étapes d’expérimentation proposées :

1. Formuler des hypothèses sur la question du temps de réaction.
2. Construire un dispositif simple avec une carte, un bouton-poussoir et un buzzer ou une LED.
3. Connecter les différents composants électroniques.
4. Programmer le dispositif à l'aide d'un programme approprié.
5. Collecter des données en exécutant le programme et en appuyant sur le bouton-poussoir.
6. Analyser les données collectées pour mesurer le temps de réaction à un stimulus sonore ou visuel.

### Compétences Mobilisées

Grâce à la mise en œuvre de ce projet, les élèves pourront aborder plusieurs thématiques transdisciplinaires incluant :

- Physique : le temps de réaction, les signaux sonores et visuels, la vitesse de réaction
- Technologie : la fabrication de dispositifs électroniques, la programmation de cartes programmables
- Mathématiques : la collecte et l'analyse de données, la mesure de temps
- Sciences : la méthode scientifique, la formulation d'hypothèses, la collecte de données, l'analyse de résultats

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

[Protocole PR13-TDL - Étapes d'expérimentation](Votre%20temps%20de%20r%C3%A9action%20est-il%20inf%C3%A9rieur%20%C3%A0%20une%20dem/Protocole%20PR13-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation%209efe3feffbfc49b88ec9afaaa263a924.md)

### Fiches de programmation

[Sans titre](Votre%20temps%20de%20r%C3%A9action%20est-il%20inf%C3%A9rieur%20%C3%A0%20une%20dem/Sans%20titre%20bfd0ee3f076445a8b2c0175e1898f00e.csv)


---

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

> 🧑‍💻 Pour vous aider à programmer les stimuli visuels, consultez la **Fiche 1 - Mesurer le temps de réaction grâce à un stimulus visuel (LED).**
>
> [PROG13-TDL-1](https://www.notion.so/PROG13-TDL-1-07db653a93d542799aa60a6a892f18f5?pvs=21)

> 🧑‍💻 Pour vous aider à programmer les stimuli sonores, consultez la **Fiche 2 - Mesurer le temps de réaction grâce à un stimulus sonore (buzzer).**
>
> [PROG13-TDL-2](https://www.notion.so/PROG13-TDL-2-df8479655d6e4005834df111569dde25?pvs=21)

💬 **Débriefing**

Dans cette phase, nous avons appris à collecter des données en mesurant notre temps de réaction à un stimulus sonore ou visuel à l'aide d'un appareil expérimental que nous avons construit. Nous avons également appris à programmer le dispositif expérimental à l'aide d'une carte programmable telle qu'Arduino, micro : bit ou STM32 pour produire un signal aléatoire de son ou de lumière et à enregistrer le temps de réaction.

### Étape 2 - Afficher les données collectées

🧭**Orientation**

Dans l'étape précédente, nous avons construit un appareil expérimental simple avec un tableau pour mesurer notre temps de réaction. Nous avons supposé que la valeur mesurée est affichée sur notre écran d'ordinateur par le programme. Considérons le cas où nous n'avons que la carte, par exemple la carte STM32, et que nous voulons l'utiliser de manière autonome pour plus de flexibilité. Comment pourrions-nous afficher nos valeurs mesurées ?

💡**Conceptualisation**

Une carte fournit une unité de traitement et un espace mémoire pour stocker et exécuter un programme. Elle peut également fournir des LED, des boutons et des capteurs intégrés pour mesurer divers paramètres tels que la température, la pression, l'humidité, l'accélération, la rotation, etc. De plus, elle fournit des interfaces pour se connecter et communiquer avec d'autres appareils. Dans ce cas particulier, nous devons connecter et utiliser un petit écran pour afficher en texte les valeurs de nos mesures.

🔎 **Investigation**

Dans cette étape, nous souhaitons utiliser le petit écran et afficher les valeurs de nos mesures en texte. De cette façon, nous disposons d'un appareil très portable pour nos recherches.

> 🧑‍💻 Pour vous aider à programmer l’écran OLED, consultez la **Fiche 3 - Afficher les données collectées sur un écran.**
>
> [PROG13-TDL-3](https://www.notion.so/PROG13-TDL-3-b91855439d974519b841bfc3dad101fc?pvs=21)

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


---

## Fiches programmation

### PROG13-TDL-1 — Mesurer le temps de réaction grâce à un stimulus visuel (LED)



🛠**Construire**

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

**🧑‍💻Programmer**

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

### PROG13-TDL-2 — Mesurer le temps de réaction grâce à un stimulus sonore (buzzer)



🛠**Construire**

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

> ℹ️
>
> **Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de la robotique et bien plus encore.**

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. Si vous cliquez sur **AVANCÉ**, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton.

Dans la liste des extensions disponibles, vous pouvez facilement trouver les extensions **Music et Serial** qui seront utilisées pour cette activité. L’extension Music vous permettra d’émettre un son grâce au buzzer. L’extension Serial vous permettra de collecter les données de temps de réaction et de les afficher dans la console. Si elles ne sont pas directement disponibles sur votre écran, vous pouvez les rechercher à l'aide de l'outil de recherche. Cliquez sur l’extension que vous souhaitez utiliser (par exemple **Music**) et un nouveau groupe de blocs apparaîtra sur l'écran principal. Réitérez la démarche pour installer **Serial**.

**Programmer la carte**

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur DIS_L4IOT et attendez que la carte finisse de clignoter.

**Exécuter, modifier, jouer**

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET). Pour observer les différents temps de réaction collectés par le programme, ouvrez la console (bouton disponible en dessous du simulateur).

![Untitled](images/Untitled 1.png)

**🧑‍💻Programmer**

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

### PROG13-TDL-3 — Afficher les données collectées sur un écran



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

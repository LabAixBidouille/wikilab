# Une plante consomme-t-elle plus de CO2 qu’elle n’en rejette ?

**Problématique :** Comment améliorer la qualité de l'air ?

> ℹ️ **L'absorption du dioxyde de carbone par les plantes est un processus connu. Les plantes absorbent le dioxyde de carbone de l'air à travers leurs feuilles et le convertissent en sucres et en d'autres molécules organiques grâce à l'énergie provenant de la lumière du soleil. Ce processus produit également de l'oxygène, qui est libéré dans l'air. Les plantes peuvent alors stocker le carbone sous forme de matière végétale, ce qui peut aider à réduire la quantité de gaz à effet de serre dans l'atmosphère. En effet, lorsque les plantes meurent et se décomposent, le carbone qu'elles ont stocké est libéré lentement dans le sol et peut être stocké sous forme de matière organique pour des périodes plus longues. C'est pourquoi les forêts et d'autres types d'espaces verts sont souvent considérés comme des "puits de carbone" importants pour lutter contre le changement climatique.**

![DATA8_TDL.jpg](images/DATA8_TDL.jpg)

### Déroulé de l’activité

Ce projet consiste à sensibiliser les jeunes sur les enjeux climatiques. Protéger et augmenter nos espaces verts doit être une préoccupation. Nous mènerons des expériences pour observer que les plantes vertes produisent du dioxygène à la lumière alors qu’elles le consomment dans l’obscurité. Nous proposerons de poursuivre les expériences dans des conditions différentes.

Les objectifs d’apprentissage de cette activité seront donc les suivants :

- Comprendre que les plantes absorbent le dioxyde de carbone et produisent de l'oxygène grâce à la photosynthèse.
- Savoir que les plantes ont besoin de lumière pour produire de l'oxygène.
- Comprendre que les plantes consomment de l'oxygène dans l'obscurité.
- Prendre conscience de l'importance de protéger et augmenter les espaces verts pour lutter contre le changement climatique.
- Savoir comment mener des expériences pour observer les processus de photosynthèse des plantes.

### Compétences Mobilisées

Les sujets abordés au niveau des programmes comprennent :

- La biologie végétale : la photosynthèse, la respiration des plantes
- La chimie : le dioxyde de carbone, l'oxygène
- L'éducation environnementale : l'importance de protéger et augmenter les espaces verts pour lutter contre le changement climatique
- La méthode scientifique : comment mener des expériences pour observer les processus de photosynthèse des plantes

### Matériel

Afin de réaliser cette activité, vous aurez besoin du matériel suivant :

- 1 cloche en verre
- 1 lampe
- 1 drap noir
- 1 carte programmable (STM32)
- 1 câble USB pour alimenter la carte
- 1 capteur de C02 (mh-z19b)
- 1 écran OLED (ssd1306)
- 1 breadboard
- Câbles dupont

# LES RESSOURCES

### Expérimentation scientifique

[Protocole PR8-TDL - Étapes d'expérimentation](Une%20plante%20consomme-t-elle%20plus%20de%20CO2%20qu%E2%80%99elle%20n%E2%80%99e/Protocole%20PR8-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation%208db12a1f724241cbae1bb7c225064f6c.md)

### Fiches de programmation

[Sans titre](Une%20plante%20consomme-t-elle%20plus%20de%20CO2%20qu%E2%80%99elle%20n%E2%80%99e/Sans%20titre%20abbd2241db0941fe9f76429cab1fa155.csv)


---

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

> 🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 1 - Mesurer le taux de CO2 dans l’air.**
>
> [PROG8-TDL-1](https://www.notion.so/PROG8-TDL-1-83f8b3769c1c418581626b6d4b7a85cf?pvs=21)

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

> 🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 2 - Afficher les données collectées sur un écran.**
>
> [PROG8-TDL-2](https://www.notion.so/PROG8-TDL-2-dda8bb5612a748e3871a752ed35929f6?pvs=21)

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

> 🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 3 - Exporter les données du capteur de CO2 au format CSV**.
>
> [PROG8-TDL-3](https://www.notion.so/PROG8-TDL-3-305423156c8644a190a5488548c6b301?pvs=21)

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

> 🧑‍💻 Pour vous aider à programmer les capteurs appropriés, consultez la **Fiche 4 - Exporter les données des capteurs de CO2, de température et d’humidité au format CSV**.
>
> [PROG8-TDL-**4**](https://www.notion.so/PROG8-TDL-4-b13304c94aa14ccfb19add65b99a6c8e?pvs=21)

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


---

## Fiches programmation

### PROG8-TDL-1 — Mesurer le taux de CO2 dans l’air



🛠**Construire**

**Câbler le capteur de CO2**

Le capteur **mh-z19b** possède deux rangées de broches de part et d’autre du capteur : une de quatre broches, et une de cinq broches. Sur la rangée de quatre broches, 3 broches portent respectivement les mentions **PWM**, **GND** et **Vin**.

Vous allez devoir connecter les broches du capteur de la manière suivante :

- La broche **GND** du capteur sur la broche **GND** de la carte
- La broche **Vin** du capteur sur la broche **5V** de la carte
- La broche **PWM** du capteur sur la broche **A0** de la carte

**Connecter la carte à l'ordinateur**

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur micro-USB ST-LINK (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé DIS_L4IOT. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

![Untitled](images/Untitled.png)

**Ouvrir MakeCode**

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur. *Ressource : [makecode.lets-steam.eu](http://makecode.lets-steam.eu/)*

**Installer les extensions Serial et mh-z19b**

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut "prêt à l'emploi" et vous devrez installer deux extensions.

> ℹ️ **Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de la robotique et bien plus encore.**

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. Si vous cliquez sur **AVANCÉ**, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton.

Dans la liste des extensions disponibles, vous pouvez facilement trouver les extensions **Serial** ainsi que **mh-z19b** qui seront utilisées pour cette activité. L’extension **Serial** vous permettra de collecter les données de temps de réaction et de les afficher dans la console tandis que l’extension **mh-z19b** vous permettra d’interagir avec le capteur. Si elles ne sont pas directement disponibles sur votre écran, vous pouvez les rechercher à l'aide de l'outil de recherche. Cliquez sur l’extension que vous souhaitez utiliser et un nouveau groupe de blocs apparaîtra sur l'écran principal.

**Programmer la carte**

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur DIS_L4IOT et attendez que la carte finisse de clignoter.

**Exécuter, modifier, jouer**

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET). Pour observer la concentration de CO2 dans l’air, ouvrez la console (bouton disponible en dessous du simulateur).

![Untitled](images/Untitled.png)

**🧑‍💻Programmer**

```jsx
Serial.attachToConsole()
forever(function () {
    Serial.writeValue("co2 level", input.getCO2Concentration(pins.A0))
    pause(500)
})
```

### PROG8-TDL-2 — Afficher les données collectées sur un écran



🛠️**Construire**

**Connecter le capteur**

Pour ce montage, vous aurez besoin d’une breadboard.

Le capteur **mh-z19b** possède deux rangées de broches de part et d’autre du capteur : une de quatre broches, et une de cinq broches. Sur la rangée de quatre broches, 3 broches portent respectivement les mentions **PWM**, **GND** et **Vin**.

Vous allez devoir connecter les broches du capteur de la manière suivante :

- La broche **GND** du capteur à la bande d’alimentation '-' de la breadboard
- La broche **GND** de la carte à la bande d’alimentation '-' de la breadboard
- La broche **Vin** du capteur sur la broche **5V** de la carte
- La broche **PWM** du capteur sur la broche **A0** de la carte

> 💡 **Les bandes de connexion '+' et '-' de la breadboard permettent de démultiplier le nombre de connexion simultanées aux broches d’alimentation de la carte. En effet, tous les trous de contact des bandes d’alimentation sont reliés, ce qui permet à plusieurs composants d’être alimentés en même temps en se branchant sur ces bandes.**

**Connecter l’écran**

L’écran que vous allez utiliser est un écran OLED nommé **SSD1306**. Il peut être connecté soit en **SPI**, soit en **I2C**. Comme nous allons utiliser la communication **I2C**, vous allez devoir connecter l’écran de la manière suivante :

- La broche **GND** de l’écran à la bande d’alimentation '-' de la breadboard
- La broche **VCC** de l’écran sur la broche **3.3V** de la carte
- La broche **SDA** de l’écran sur la broche **D14** de la carte
- La broche **SCL** de l’écran sur la broche **D15** de la carte

*Ressources : [https://en.wikipedia.org/wiki/I2C](https://en.wikipedia.org/wiki/I2C), [https://en.wikipedia.org/wiki/Serial_Peripheral_Interface](https://en.wikipedia.org/wiki/Serial_Peripheral_Interface), [https://www.sparkfun.com/qwiic](https://www.sparkfun.com/qwiic), [https://learn.adafruit.com/introducing-adafruit-stemmaqt/what-is-stemma-qt](https://learn.adafruit.com/introducing-adafruit-stemmaqt/what-is-stemma-qt)*

![Untitled](images/Untitled.png)

**Connecter la carte à l'ordinateur**

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur micro-USB ST-LINK (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé DIS_L4IOT. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

**Ouvrir MakeCode**

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur. *Ressource : [makecode.lets-steam.eu](http://makecode.lets-steam.eu/)*

**Installer les extensions mh-z19b et OLED**

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut "prêt à l'emploi" et vous devrez installer deux extensions.

> ℹ️ **Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de la robotique et bien plus encore.**

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. Si vous cliquez sur **AVANCÉ**, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton.

Dans la liste des extensions disponibles, vous pouvez facilement trouver les extensions **mh-z19b** et **oled** qui seront utilisées pour cette activité. L’extension mh-z19b vous permettra d’interagir avec le capteur tandis que l’extension OLED vous permettra d’interagir avec l’écran. Si elles ne sont pas directement disponibles sur votre écran, vous pouvez les rechercher à l'aide de l'outil de recherche. Cliquez sur l’extension que vous souhaitez utiliser et un nouveau groupe de blocs apparaîtra sur l'écran principal. 

**Programmer la carte**

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur DIS_L4IOT et attendez que la carte finisse de clignoter.

**Exécuter, modifier, jouer**

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET). Pour observer la concentration de CO2 dans l’air, regardez l’écran OLED qui devrait afficher la valeur en ppm.

**🧑‍💻Programmer**

```jsx
forever(function () {
    oled.clear()
    oled.showString("CO2 level", 1)
    oled.showNumber(input.getCO2Concentration(pins.A0), 2)
		pause(500)
})
```

### PROG8-TDL-3 — Exporter les données de la carte au format CSV



🛠️**Construire**

**Câbler le capteur de CO2**

Le capteur **mh-z19b** possède deux rangées de broches de part et d’autre du capteur : une de quatre broches, et une de cinq broches. Sur la rangée de quatre broches, 3 broches portent respectivement les mentions **PWM**, **GND** et **Vin**.

Vous allez devoir connecter les broches du capteur de la manière suivante :

- La broche **GND** du capteur sur la broche **GND** de la carte
- La broche **Vin** du capteur sur la broche **5V** de la carte
- La broche **PWM** du capteur sur la broche **A0** de la carte

![Untitled](images/Untitled.png)

**Connecter la carte à l'ordinateur**

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur micro-USB ST-LINK (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé DIS_L4IOT. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

**Ouvrir MakeCode**

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur. *Ressource : [makecode.lets-steam.eu](http://makecode.lets-steam.eu/)*

**Installer les extensions mh-z19b et datalogger**

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut "prêt à l'emploi" et vous devrez installer deux extensions.

> ℹ️ **Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de la robotique et bien plus encore.**

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. Si vous cliquez sur **AVANCÉ**, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton.

Dans la liste des extensions disponibles, vous pouvez facilement trouver les extensions nommées **mh-z19b** et **datalogger**. L’extension mh-z19b vous permettra d’interagir avec le capteur, tandis que l’extension datalogger ****vous permettra de récupérer les données récoltées par la carte au format CSV. Si les extensions ne sont pas directement disponibles sur votre écran, vous pouvez les rechercher à l'aide de l'outil de recherche. Cliquez sur l’extension que vous souhaitez utiliser et un nouveau groupe de blocs apparaîtra sur l'écran principal.

**Programmer la carte**

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur DIS_L4IOT et attendez que la carte finisse de clignoter.

**Exécuter, modifier, jouer**

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET). Le programme va, tous les jours, ajouter une ligne qui va contenir la valeur de CO2 mesurée la journée puis attendre 12 heures avant de faire une nouvelle mesure pour la nuit. Il est donc conseillé de lancer le programme vers midi, car ainsi il est assuré qu’il y ait une alternance de jour et de nuit entre les différentes mesures.

**🧑‍💻Programmer**

```jsx
datalogger.setEnabled(true)
forever(function () {
    datalogger.addValue("jour", input.getCO2Concentration(pins.A0))
    pause(43200000)
    datalogger.addValue("nuit", input.getCO2Concentration(pins.A0))
    datalogger.addRow()
    pause(43200000)
})
```

> 💡 **La fonction pause demande un temps d’attente exprimé en millisecondes. Comme nous faisons un relevé toutes les douze heures, il faut convertir 12 heures en millisecondes, soit 12 x 60 x 60 x 1 000 = 43200000 ms.**

### PROG8-TDL-4 — Exporter les données des capteurs de CO2, de température et d’humidité au format CSV



🛠️**Construire**

Les capteurs d'humidité et de température sont intégrés à la carte, il n'est donc pas nécessaire de les brancher.

**Raccordement du capteur de CO2**

Le capteur **mh-z19b** possède deux rangées de broches de chaque côté du capteur : l'une avec quatre broches et l'autre avec cinq broches. Dans la rangée de quatre broches, 3 broches sont étiquetées **PWM**, **GND** et **Vin** respectivement.

Vous devez connecter les bornes du capteur comme suit :

- La broche **GND** du capteur sur la broche **GND** de la carte
- La broche **Vin** du capteur sur la broche **5V** de la carte
- La broche **PWM** du capteur sur la broche **A0** de la carte

**Connecter la carte à l'ordinateur**

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur micro-USB ST-LINK (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé DIS_L4IOT. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

**Ouvrir MakeCode**

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur. *Ressource : [makecode.lets-steam.eu](http://makecode.lets-steam.eu/)*

**Installer les extensions mh-z19b et datalogger**

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut "prêt à l'emploi" et vous devrez installer deux extensions.

> ℹ️ **Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de la robotique et bien plus encore.**

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. Si vous cliquez sur **AVANCÉ**, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton.

Dans la liste des extensions disponibles, vous pouvez facilement trouver les extensions nommées **mh-z19b** et **datalogger**. L’extension **mh-z19b** vous permettra d’interagir avec le capteur, tandis que l’extension **datalogger** vous permettra de récupérer les données récoltées par la carte au format CSV. Si les extensions ne sont pas directement disponibles sur votre écran, vous pouvez les rechercher à l'aide de l'outil de recherche. Cliquez sur l’extension que vous souhaitez utiliser et un nouveau groupe de blocs apparaîtra sur l'écran principal.

![Untitled](images/Untitled.png)

**Programmer la carte**

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur DIS_L4IOT et attendez que la carte finisse de clignoter.

**Exécuter, modifier, jouer**

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET). Le programme va, toutes les heures, ajouter une ligne qui va contenir les valeurs relevées par les capteurs de CO2 (en ppm), d’humidité (en pourcentage d’humidité) et de température (en degrés Celsius).

**🧑‍💻Programmer**

```jsx
datalogger.setEnabled(true)
forever(function () {
    datalogger.addValue("CO2", input.getCO2Concentration(pins.A0))
    datalogger.addValue("humidity", input.humidity())
    datalogger.addValue("temperature", input.temperature(TemperatureUnit.Celsius))
    datalogger.addRow()
    pause(3600000)
})
```

> 💡 **La fonction pause demande un temps d’attente exprimé en millisecondes. Comme nous faisons un relevé toutes les heures, il faut convertir 1 heure en millisecondes, soit 60 x 60 x 1 000 = 3 600 000 ms.**

# Est-ce que notre corps ou ses parties sont accélérés de plus de 1 g même si nous dansons comme des fous ?

**Problématique :** Quelle force notre corps ou ses parties subissent-ils lorsque nous bougeons, courons ou dansons ?

> ℹ️ **L'accélération est un concept fondamental en physique qui désigne le taux de changement de la vitesse d'un objet au cours du temps. Elle peut être positive ou négative et est mesurée en mètres par seconde carrée (m/s²). En mécanique, l'accélération est utilisée pour décrire les mouvements des corps dans l'espace. Elle peut également être utilisée pour décrire les changements dans d'autres grandeurs, telles que la position, la vitesse et la vitesse angulaire. De manière plus générale, l'accélération est un indicateur du taux de changement des conditions d'un système, que ce soit en termes de mouvement physique, de croissance économique, de réaction chimique, ou d'autres phénomènes. Elle est donc un concept important dans de nombreuses disciplines scientifiques. En physique, l'accélération est souvent considérée en relation avec la force, puisque la force appliquée à un objet peut entraîner une accélération. Par exemple, lorsqu'un objet est soumis à une force constante, il subit une accélération constante. La deuxième loi de Newton établit une relation mathématique entre la force F et l'accélération a : F = ma, où m est la masse de l'objet. Enfin, l'accélération peut avoir des effets importants dans notre vie quotidienne, comme lors d'une accélération brutale en voiture ou dans les manèges d'attractions. Elle peut également être mesurée pour comprendre les mouvements du corps lors d'activités physiques telles que la danse, le sport ou la course.**

![DATA10_TDL.jpg](images/DATA10_TDL.jpg)

### Déroulé de l’activité

Dans ce projet, notre objectif est de mener une enquête scientifique sur la mesure de l'accélération ou de la décélération que subit notre corps ou ses différentes parties lorsque nous bougeons, que ce soit en courant, en dansant ou en exécutant toute autre activité physique. La question de recherche proposée aux élèves est donc de savoir si notre corps ou ses différentes parties sont accélérés de plus d'un gramme lorsque nous dansons avec enthousiasme et passion.

Pour répondre à cette question, nous allons construire un dispositif expérimental simple, en utilisant une carte électronique STM32, ainsi qu'un capteur intégré : l'accéléromètre. Un accéléromètre est un capteur qui permet de mesurer l'accélération d'un corps ou de sa structure. Il est utilisé pour détecter les mouvements, les vibrations et les chocs, et est couramment utilisé dans les appareils électroniques tels que les smartphones, les consoles de jeux, les drones, les voitures, les avions et les satellites. L'accéléromètre mesure l'accélération en utilisant l'effet d'un objet en mouvement sur une masse inertielle, qui se déplace en réponse à l'accélération. La quantité de mouvement de la masse est mesurée et convertie en une tension électrique, qui est ensuite lue par un microcontrôleur ou un circuit électronique similaire. L'accéléromètre peut mesurer l'accélération dans une ou plusieurs dimensions, selon le nombre de capteurs utilisés, et peut être utilisé pour détecter l'orientation, le mouvement linéaire et angulaire, la gravité et la force de vibration.

Avec cet outil de mesure, conçu pour répondre aux besoins des élèves et programmé en utilisant des blocs de programmation, nous allons collecter des données. Ensuite, nous les analyserons pour obtenir des informations importantes. Ces informations seront utilisées pour étudier et comparer les résultats, de manière rigoureuse et scientifique, tout comme les vrais scientifiques et chercheurs le font dans leurs travaux de recherche.

### Compétences Mobilisées

Le projet aborde les sujets suivants :

- L'accélération et la décélération en physique
- L'utilisation des capteurs électroniques pour mesurer l'accélération
- La programmation de cartes électroniques pour lire les données des capteurs
- L'analyse de données et l'extraction d'informations pertinentes
- La rigueur scientifique dans la collecte et l'interprétation de données
- L'expérimentation scientifique en général

### Matériel

Afin de réaliser cette activité, vous aurez besoin du matériel suivant :

- 1 carte programmable “STM32 IoT Node Board”
- 1 écran LCD
- Des câbles de connexion
- 1 câble USB - micro B

# LES RESSOURCES

### Expérimentation scientifique

[Protocole PR10-TDL - Étapes d'expérimentation](Est-ce%20que%20notre%20corps%20ou%20ses%20parties%20sont%20acc%C3%A9l%C3%A9r/Protocole%20PR10-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation%2040272c1c9d4a43978ff81283bac51d00.md)

### Fiches de programmation

[Sans titre](Est-ce%20que%20notre%20corps%20ou%20ses%20parties%20sont%20acc%C3%A9l%C3%A9r/Sans%20titre%20fe04f4ccfe6a469b877708605b6b3b5d.csv)


---

# Protocole PR10-TDL - Étapes d'expérimentation

### Étape 1 - Collecter des données

🧭**Orientation**

Pour répondre à notre question de recherche, il est nécessaire de trouver un moyen de mesurer l'accélération. La méthode la plus courante consiste à utiliser un capteur spécialement conçu pour cette tâche, appelé accéléromètre. Grâce à la technologie de la microélectronique, ce minuscule dispositif est aujourd'hui présent dans presque tous les gadgets tels que les smartphones, les smartwatches, les joysticks, les télécommandes, les jouets, etc.

Nous pouvons utiliser un capteur autonome et le connecter à une carte programmable pour lire ses valeurs, ou utiliser une carte intégrant déjà de tels capteurs. Nous allons opter pour cette dernière solution et utiliser la carte STM32. Cependant, il est important de bien comprendre comment le capteur fonctionne et comment le programmer, ainsi que de comprendre le mode d'alimentation de la carte et les options pour la rendre mobile. Cela est nécessaire car la collecte de données se fait dans la vie réelle et est liée aux mouvements effectués par les étudiants. Il est donc essentiel de porter une attention particulière à ce point.

💡**Conceptualisation**

Dans notre projet, nous devons mesurer une grandeur physique : l'accélération. La première étape de la phase de collecte des données consiste à comprendre ce qui sera mesuré, et comment.

**Spécification de la mesure** : L'accélération est généralement exprimée en unités de m/s². La valeur d'accélération la plus connue est 1g, équivalant à 9,8 m/s² en raison de la force gravitationnelle à la surface de la Terre. Cette valeur est une référence typique, c'est pourquoi la plupart des accéléromètres sont conçus pour exprimer la valeur qu'ils mesurent en ‘g’. Notre carte STM32 intègre trois accéléromètres pour mesurer l'accélération sur trois axes (x, y et z). Chaque capteur, ainsi que tout dispositif en général, est caractérisé par certaines spécifications techniques qui indiquent comment il fonctionne correctement ou pour quel but il est conçu. Les accéléromètres du STM32 ont une plage de mesure de -8g à +8g, ce qui est adéquat pour les besoins de notre projet.

**Rendre la carte STM32 compatible avec une expérience en mouvement** : L'expérimentation proposée suppose la mobilité de la carte dans différentes situations mettant en scène les mouvements du corps afin d'en comprendre l'accélération. La STM32 ne possède pas d'autonomie propre (il n’y a pas de batterie), ce qui limite son utilisation mobile car elle doit être connectée à une source d'énergie pour fonctionner. Cette source prend généralement la forme d'une connexion USB entre la carte et l'ordinateur, mais il est également possible de relier la carte à une power bank afin de la mettre sous tension et la rendre transportable.

🔎**Investigation**

**Comprendre comment programmer l’accéléromètre sur la carte STM32** : Comme les trois capteurs accéléromètres sont intégrés à la carte, nous n'avons pas besoin de connecter un capteur externe. La première étape consiste donc à comprendre et à programmer l’utilisation de cet accéléromètre grâce à l’outil MakeCode. Pour ce faire, vous pouvez suivre les étapes décrites dans la fiche de programmation 1.

> 🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 1 - Collecter des données à l’aide de l’accéléromètre.**
>
> [PROG10-TDL-1](https://www.notion.so/PROG10-TDL-1-7b20b8b986dc4b4d9a1e381313fdfc7e?pvs=21)

![Untitled](images/Untitled.png)

**Rendre la carte mobile** : Une fois le capteur programmé, la question de l'alimentation de la carte STM32 pour cette activité spécifique se pose. Si elle doit être transportée sur les élèves pour enregistrer l'accélération de leurs corps et de leurs mouvements, il est nécessaire de s'assurer que la connexion à la source d'énergie permettra de réaliser l'expérience correctement. Nous proposons deux solutions :

- La première solution la plus simple consiste à garder la carte STM32 connectée à un ordinateur avec un câble USB suffisamment long pour permettre aux élèves de garder leur liberté de mouvement. La carte reste alimentée par le PC mais il faudra faire attention au câble qui restera relié aux élèves.
- La seconde solution consiste à relier la carte à une power bank qui assurera sa mise sous tension. Après avoir programmé votre carte sur PC, vous pouvez relier la carte à cette source d'énergie. Cette solution a l'avantage de rendre le dispositif autonome, sous réserve d'avoir accès au matériel, qui est aujourd'hui assez courant.

![Untitled](images/Untitled 1.png)

Une fois le branchement et la programmation du capteur accéléromètre réalisés, la prochaine étape consistera à apprendre comment interagir avec les capteurs afin de lire leurs valeurs.

### Étape 2 - Afficher les données collectées

🧭**Orientation**

Dans l'étape précédente, nous nous sommes familiarisés avec un dispositif expérimental simple composé d'une carte et d'un capteur intégré pour mesurer l'accélération. Nous souhaitons maintenant faire en sorte d’afficher les données sur un dispositif adapté et non sur l’ordinateur.

💡 **Conceptualisation**

La carte STM32 fournit une unité de traitement et de l'espace mémoire pour stocker et exécuter un programme. Elle est équipée de capteurs embarqués pour mesurer divers paramètres tels que la température, la pression, l'humidité, l'accélération, la rotation, etc. Elle dispose également d'interfaces pour se connecter et communiquer avec d'autres appareils. Dans ce cas particulier, nous devons connecter et utiliser un petit écran pour afficher en texte les valeurs de nos mesures.

🔎 **Investigation**

À cette étape, nous suivons les instructions détaillées de la Fiche de programmation 2 pour utiliser l’écran et afficher les valeurs de nos mesures. Nous vérifions si les valeurs sont correctement affichées. Puis, nous effectuons quelques tests en fixant l'appareil sur notre bras, notre jambe, notre corps, etc. Nous faisons des sauts ou des mouvements rapides pour voir ce qui est enregistré.

> 🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 2 - Afficher les données sur un écran.**
>
> [PROG10-TDL-2](https://www.notion.so/PROG10-TDL-2-aeac86e3d21947189dcc23bc6944fe70?pvs=21)

Nous élaborons un plan d'étude de cas. Nous pouvons d'abord décider sur quelles parties de notre corps nous voulons fixer notre appareil et collecter des données. Il peut s'agir de la tête, de la main, du bras, de la taille ou de la jambe. Ensuite, nous pouvons décider de certains mouvements standards tels que la marche, le saut ou la course. Nous préparons également un tableau de mesures sur papier ou sur une feuille de calcul numérique, divisé en plusieurs colonnes (parties du corps) et lignes (mouvements). Dans chaque cellule du tableau, nous écrirons la valeur d'accélération correspondante que nous mesurons. Voici un exemple de tableau :

| Mesures relevées par l’accéléromètre | Tête | Bras | Taille | Jambes |
| --- | --- | --- | --- | --- |
| Marche |  |  |  |  |
| Saut |  |  |  |  |
| Course |  |  |  |  |
| Crazy Dance ! |  |  |  |  |

Maintenant que nous avons préparé et installé notre appareil de mesure ainsi que notre plan d'enquête, nous pouvons commencer à enregistrer les données pour chaque cas.

💬 **Débriefing**

Au cours de cette phase, nous avons accompli les tâches suivantes :

- Comprendre les éléments de base et les fonctionnalités d'une carte.
- Se familiariser avec l'utilisation d'un capteur embarqué.
- Utiliser un programme pour afficher des données sur un écran.

### Étape 3 - Analyser les données

🧭**Orientation**

Dans l'étape précédente, nous avons rempli notre tableau/feuille de mesures, ce qui nous a donné nos données. À partir de celles-ci, nous souhaitons tirer des enseignements et répondre à notre question de départ.

💡**Conceptualisation**

Nous avons collecté nos données à l'aide de notre appareil et il est maintenant temps de les analyser afin d'en extraire des informations pertinentes. Pendant cette étape, si nous avons enregistré plusieurs valeurs pour un même cas, nous pouvons introduire le concept de moyenne ou de valeur moyenne issue des statistiques de base. En général, dans les enquêtes scientifiques et les expériences, nous effectuons plusieurs mesures et concluons à une valeur finale en calculant une moyenne comme meilleure estimation.

🔎**Investigation**

Nous parcourons notre tableau de données enregistrées des mesures. Nous comparons les résultats pour chaque cas et essayons de déterminer la combinaison de partie du corps et de mouvement qui produit la valeur la plus élevée. Nous pouvons également trier les valeurs de la plus faible à la plus forte et les représenter graphiquement. Pour cela, nous pouvons utiliser un tableur numérique tel qu'Excel ou Open/Libre Office et établir une série de graphiques de manière systématique, par exemple les valeurs pour le bras en fonction des mouvements ou les valeurs pour un mouvement particulier en fonction des différentes parties du corps.

Nous pouvons répéter notre série de mesures avec le même ensemble de mouvements et de parties ou en choisir de nouveaux pour vérifier si nous obtenons des résultats similaires aux précédents. Nous pouvons même organiser un concours amusant, par exemple pour savoir qui obtiendra la valeur la plus élevée en dansant comme un fou !

Enfin, nous discutons de nos résultats en classe et réfléchissons à l'ensemble du processus, depuis le début du projet jusqu'à sa fin. Il est important de comprendre que c'est ainsi que les scientifiques et les chercheurs mènent des expériences et des enquêtes scientifiques pour essayer de comprendre la nature et ses phénomènes.

💬 **Débriefing**

Au cours de cette phase, nous avons effectué et réalisé les actions suivantes :

- Collecter des données pour différents cas.
- Analyser et comparer les données pour chaque cas.
- Extraire les informations pertinentes et en tirer des conclusions.


---

## Fiches programmation

### PROG10-TDL-1 — Collecter des données à l’aide de l’accéléromètre



🛠**Construire**

**Utiliser l'accéléromètre**

Nous allons utiliser l'accéléromètre présent sur la STM32 IoT Node Discovery, il n'y a donc pas de branchement à faire.

**Connecter la carte à l'ordinateur**

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur micro-USB ST-LINK (se trouvant dans le coin supérieur droit de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé DIS_L4IOT. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

**Ouvrir MakeCode**

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur.
*Ressource : [makecode.lets-steam.eu](http://makecode.lets-steam.eu/)*

**Installer l’extension serial**

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut "prêt à l'emploi" et vous devrez installer deux extensions.

> ℹ️ **Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de la robotique et bien plus encore.**

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. Si vous cliquez sur **AVANCÉ**, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton.

Dans la liste des extensions disponibles, vous pouvez facilement trouver l’extension **serial**, ****qui vous permettra d’afficher la valeur de l’accélération dans la console. Si elle n’est pas directement disponible sur votre écran, vous pouvez la rechercher à l'aide de l'outil de recherche. Cliquez sur l’extension que vous souhaitez utiliser et un nouveau groupe de blocs apparaîtra sur l'écran principal.

**Programmer la carte**

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmation" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur DIS_L4IOT et attendez que la carte finisse de clignoter.

**Exécuter, modifier, jouer**

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton RESET).

**🧑‍💻Programmer**

```jsx
let max = 0
let data = 0

Serial.attachToConsole()
input.setAccelerometerRange(AcceleratorRange.EightG)

forever(function () {
    data = input.acceleration(Dimension.Strength)
    if (data > max) {
        max = data

				Serial.writeValue("Max acceleration", max)
    }
})
```

### PROG10-TDL-2 — Afficher les données sur un écran



🛠**Construire**

**Connecter l'écran à la carte**

Pour connecter l'écran LCD, nous allons utiliser le bus I2C avec la convention suivante :

- Noir pour GND (GND)
- Rouge pour VCC (5V)
- Violet pour SDA (D14)
- Vert pour SCL (D15)

**Connecter la carte à l'ordinateur**

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur micro-USB ST-LINK (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé DIS_L4IOT. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

**Ouvrir MakeCode**

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur.

*Ressource : [makecode.lets-steam.eu](http://makecode.lets-steam.eu/)*

![Untitled](images/Untitled.png)

**Ajouter une extension**

> ℹ️ **Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de la robotique et bien plus encore.**

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. Si vous cliquez sur **AVANCÉ**, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton. Une nouvelle fenêtre s’ouvre dans laquelle vous choisissez l’extension dont vous avez besoin en cliquant dessus, si vous ne la trouvez pas, vous pouvez utiliser la barre de recherche en haut de l’écran.

Dans la liste des extensions disponibles, vous pouvez facilement trouver l’extension **lcd_i2c** qui sera utilisée pour cette activité. L’extension **lcd_i2c** vous permettra d’afficher les données sur un écran. Si elle n’est pas directement disponible sur votre écran, vous pouvez les rechercher à l'aide de l'outil de recherche. Cliquez sur l’extension que vous souhaitez utiliser et un nouveau groupe de blocs apparaîtra sur l'écran principal.

**Programmer la carte**

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur DIS_L4IOT et attendez que la carte finisse de clignoter.

**Exécuter, modifier, jouer**

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET).

**🧑‍💻Programmer**

```jsx
let max = 0
let data = 0

input.setAccelerometerRange(AcceleratorRange.EightG)
lcd_i2c.initScreen()

forever(function () {
    data = input.acceleration(Dimension.Strength)
    if (data > max) {
        max = data
		    lcd_i2c.setCursor(0, 0)
		    lcd_i2c.ShowValue("x", max)
    }
})
```

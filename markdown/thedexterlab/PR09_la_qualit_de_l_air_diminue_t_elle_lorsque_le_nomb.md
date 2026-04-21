# La qualité de l’air diminue-t-elle lorsque le nombre de personnes présentes dans une pièce augmente ?

**Problématique :** Comment améliorer la qualité de l'air en milieu fermé ?

> ℹ️ **La qualité de l'air intérieur est cruciale pour la santé et le bien-être des personnes. En effet, les gens passent environ 90% de leur temps à l'intérieur, ce qui signifie que la qualité de l'air intérieur peut avoir un impact significatif sur la santé. La qualité de l'air peut être affectée par plusieurs facteurs, notamment les produits d'entretien ménager, les moisissures, les acariens, les pollens, etc. Ces contaminants peuvent provoquer des effets négatifs tels que des maux de tête, des irritations des yeux, des voies respiratoires et de la peau, ainsi que des symptômes d'allergie, d'asthme et de bronchite. Dans ce projet, nous cherchons à étudier si et pourquoi le nombre de personnes présentes dans une pièce peut avoir également un impact sur la qualité de l'air intérieur. Quelle variable doit être considérée ?**

![DATA9_TDL.jpg](images/DATA9_TDL.jpg)

### Déroulé de l’activité

Dans ce projet, notre objectif est de mener une enquête scientifique liée à la qualité de l'air dans une pièce. Pour ce faire, nous allons fabriquer un appareil expérimental en connectant différents composants électroniques, puis le faire fonctionner à l'aide d'un programme approprié. Ensuite, nous collecterons des données et les analyserons pour mesurer la concentration de gaz CO2 dans l'air. Nous pourrons étudier et comparer les résultats obtenus dans différentes conditions, comme dans le cas d'une pièce dont les fenêtres/portes sont ouvertes ou fermées, avec ou sans présence de nombreuses personnes, etc. Tout comme le font les vrais scientifiques et chercheurs ! Dans ce cas particulier, nous voulons étudier la question de recherche suivante : La qualité de l'air diminue-t-elle lorsque le nombre de personnes présentes dans une pièce augmente ? Pour répondre à cette question, nous devons construire un dispositif simple avec un tableau et un capteur pour collecter des données et les analyser.

Ce projet aborde plusieurs concepts scolaires tels que la qualité de l'air intérieur, les effets de la pollution de l'air sur la santé, la création d'un dispositif expérimental, l'analyse de données, la compréhension des gaz, la programmation de capteurs, la présentation de résultats et leur interprétation. Le but est de sensibiliser les élèves à ces concepts importants et de les aider à mieux comprendre les enjeux liés à la qualité de l'air. Les différents concepts liés à ces notions peuvent être adaptés à différents niveaux scolaires, en fonction des connaissances préalables des élèves. Par exemple, les élèves plus jeunes pourraient se concentrer sur la conception du dispositif, tandis que les élèves plus âgés pourraient explorer plus en profondeur les concepts scientifiques sous-jacents.

### Compétences Mobilisées

Ce protocole mobilise plusieurs compétences indispensables pour mener une expérience scientifique. Tout d'abord, il est nécessaire de collecter et d'analyser les données obtenues à partir du capteur électronique utilisé pour mesurer la concentration de CO2 dans l'air ambiant. Cette étape permet de vérifier la qualité de l'air dans différents environnements et de répondre à la question de recherche posée.

Ensuite, il est important de maîtriser les outils de programmation pour connecter le capteur électronique à une carte programmable et à un écran. Cette compétence permet de visualiser les mesures de CO2 en temps réel et de les stocker pour une analyse ultérieure.

L'expérience nécessite également une compréhension des spécifications techniques du capteur électronique utilisé, notamment en ce qui concerne sa plage de mesure, sa tension et son courant de fonctionnement, ainsi que les conditions environnementales dans lesquelles il peut être utilisé.

La conceptualisation et l'investigation font également partie des compétences requises pour mener cette expérience. Il est important de comprendre le fonctionnement du capteur électronique et d'identifier les différents paramètres environnementaux qui peuvent affecter la qualité de l'air dans une pièce.

Enfin, la communication scientifique est une compétence clé pour partager les résultats de l'expérience avec les autres membres de l'équipe et en discuter en classe. Cette étape permet aux participants de réfléchir à l'ensemble du processus, de la collecte des données à l'analyse des résultats.

Les disciplines associées à cette expérience sont la physique, les sciences de l'environnement, l'informatique et les statistiques. Cette expérience permet d'appliquer les concepts de ces disciplines à un contexte pratique, et de mieux comprendre les phénomènes environnementaux et les technologies qui peuvent être utilisées pour les mesurer et les surveiller.

En somme, ce protocole est une excellente façon de développer des compétences scientifiques et techniques, ainsi que des compétences de communication et de collaboration, en travaillant en équipe pour répondre à une question de recherche scientifique.

### Matériel

Afin de réaliser cette activité, vous aurez besoin du matériel suivant :

- 1 carte programmable (STM32)
- 1 câble USB pour alimenter la carte
- 1 capteur de CO2 (mh-z19b)
- 1 écran OLED (ssd1306)
- 1 breadboard
- Câbles dupont

# LES RESSOURCES

### Expérimentation scientifique

[Protocole PR9-TDL - Étapes d'expérimentation](La%20qualit%C3%A9%20de%20l%E2%80%99air%20diminue-t-elle%20lorsque%20le%20nomb/Protocole%20PR9-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation%20422e9480cee64a8b82c99b7762c5926d.md)

### Fiches de programmation

[Sans titre](La%20qualit%C3%A9%20de%20l%E2%80%99air%20diminue-t-elle%20lorsque%20le%20nomb/Sans%20titre%20ab1221b0d3d541649fea3202b3c3f920.csv)


---

# Protocole PR9-TDL - Étapes d'expérimentation

### Étape 1 - Collecter des données

🧭**Orientation**

Afin de répondre à notre question de recherche, nous devons trouver un moyen de mesurer la concentration de CO2 dans l'air ambiant dans différentes conditions. Il existe plusieurs façons de faire, la plus simple étant de programmer un capteur facile à utiliser et de le connecter à une carte programmable. La mesure de la concentration de CO2 dans l'air est la méthode la plus courante pour contrôler la qualité de l'air dans les espaces intérieurs ou extérieurs. Dans les bâtiments, les capteurs de CO2 peuvent également automatiser leur système de contrôle de la ventilation ou fournir des signaux d'alerte ou d'avertissement.

💡**Conceptualisation et investigation**

Dans notre projet, nous allons mesurer la concentration de CO2 dans l'air à l'aide d'un dispositif électronique dont le nom technique est **MH-Z19B NDIR**. Il s'agit d'un petit capteur commun, peu coûteux et facile à utiliser qui utilise le principe dit de **l'infrarouge non dispersif**. Nous n'avons pas besoin de comprendre le fonctionnement en détail, mais nous les avons mentionnés pour que l'on puisse chercher plus d'informations si cela nous intéresse. Notre objectif est surtout d'apprendre à utiliser ce capteur.

Chaque capteur, et en général tout dispositif, a des exigences spécifiques, c'est-à-dire des spécifications pour fonctionner correctement. Notre capteur a une **tension de fonctionnement de 4.5 - 5.5 Volts**, un **courant moyen de moins de 60 milliampères**, il peut fonctionner dans un environnement dont la **température et l’humidité relative de respectivement 0 à 50°C et 0 à 90%RH**. Sa plage de mesure est de **0 à 5 000 ppm (particules par million)**.

Maintenant que nous avons acquis quelques connaissances de base, nous pouvons commencer à préparer notre propre enquête scientifique.

> 🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 1 - Mesurer la concentration de CO2.**
>
> [PROG9-TDL-1](https://www.notion.so/PROG9-TDL-1-be4a219741e04dc599de367283452d48?pvs=21)

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

> 🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 2 - Afficher les données collectées sur un écran.**
>
> [PROG9-TDL-2](https://www.notion.so/PROG9-TDL-2-af91bb61c7d34b33adfc4ac8b0769575?pvs=21)

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


---

## Fiches programmation

### PROG9-TDL-1 — Mesurer la concentration de CO2



🛠**Construire**

**Câbler le capteur de CO2**
Nous allons utiliser l’interface “PWM” du capteur de CO2 (MH-Z19B). Le branchement est le suivant :

- Orange pour Vin (5V)
- Bleu pour GND
- Violet pour PWM (D7)

**Connecter la carte à l'ordinateur**
Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur micro-USB ST-LINK (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé DIS_L4IOT. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

**Ouvrir MakeCode**
Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur.
Ressource : [makecode.lets-steam.eu](http://makecode.lets-steam.eu/)

**Installer les extensions MH_Z19B et serial**

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut "prêt à l'emploi" et vous devrez installer une extension.

> ℹ️ **Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de la robotique et bien plus encore.**

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. Si vous cliquez sur **AVANCÉ**, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton.

Dans la liste des extensions disponibles, vous pouvez facilement trouver les extensions **mh_z19b** et **serial** qui seront utilisées pour cette activité. L’extension mh_z19b vous permettra de collecter les données du capteur tandis que l’extension serial vous permettra d’afficher les données relevées par le capteur dans la console. Si elle n’est pas directement disponible sur votre écran, vous pouvez la rechercher à l'aide de l'outil de recherche. Cliquez sur l’extension que vous souhaitez utiliser et un nouveau groupe de blocs apparaîtra sur l'écran principal.

**Programmer la carte**
Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur DIS_L4IOT et attendez que la carte finisse de clignoter.

**Exécuter, modifier, jouer**
Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET).

![Untitled](images/Untitled.png)

**🧑‍💻 Programmer**

```jsx
Serial.attachToConsole()

forever(function () {
	Serial.writeValue("co2", input.getCO2Concentration(pins.D7))
	pause(1000)
})
```

### PROG9-TDL-2 — Afficher les données collectées sur un écran



🛠**Construire**

**Câbler le capteur de CO2**
Nous allons utiliser l’interface “PWM” du capteur de CO2 (MH-Z19B). Le branchement est le suivant :

- Orange pour Vin (5V)
- Bleu pour GND
- Violet pour PWM (D7)

**Connecter la carte à l'écran**
Il y a deux façons de câbler l'écran OLED SSD1306 à une carte, soit avec une connexion I2C ou SPI. Pour notre écran, nous utilisons la connexion I2C :

- Bleu pour GND
- Rouge pour V+ (3V3)
- Jaune pour SDA (D14)
- Vert pour SCL (D15)

*Ressources : [https://en.wikipedia.org/wiki/I2C](https://en.wikipedia.org/wiki/I2C),
[https://en.wikipedia.org/wiki/Serial_Peripheral_Interface](https://en.wikipedia.org/wiki/Serial_Peripheral_Interface),
[https://www.sparkfun.com/qwiic](https://www.sparkfun.com/qwiic),
[https://learn.adafruit.com/introducing-adafruit-stemmaqt/what-is-stemma-qt](https://learn.adafruit.com/introducing-adafruit-stemmaqt/what-is-stemma-qt)*

**Connecter la carte à l'ordinateur**
Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur micro-USB ST-LINK (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé DIS_L4IOT. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

**Ouvrir MakeCode**
Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur.
*Ressource : [makecode.lets-steam.eu](http://makecode.lets-steam.eu/)*

![Untitled](images/Untitled.png)

**Installer les extensions**

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut "prêt à l'emploi" et vous devrez installer une extension.

> ℹ️ **Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de la robotique et bien plus encore.**

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. Si vous cliquez sur **AVANCÉ**, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton.

Dans la liste des extensions disponibles, vous pouvez facilement trouver les extensions **OLED** et **mh_z19b** qui sera utilisée pour cette activité. L’extension **mh_z19b** vous permettra de collecter les données du capteur. Quant à l’extension **OLED**, elle sera utilisée pour afficher nos données sur l’écran. Si elles ne sont pas directement disponibles sur votre écran, vous pouvez les rechercher à l'aide de l'outil de recherche. Cliquez sur l’extension que vous souhaitez utiliser et un nouveau groupe de blocs apparaîtra sur l'écran principal.

**Programmer la carte**
Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur DIS_L4IOT et attendez que la carte finisse de clignoter.

**Exécuter, modifier, jouer**
Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET).

**🧑‍💻 Programmer**

```jsx
forever(function () {
    oled.clear()
		oled.showValue("CO2", input.getCO2Concentration(pins.D7), 1);
    pause(1000)
})
```

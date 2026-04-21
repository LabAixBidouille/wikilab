# L’énergie fournie par un panneau solaire est-elle toujours la même tout au long de la journée ?

**Problématique :** Comment maximiser l'apport en énergie solaire ?

> ℹ️ **Un panneau solaire fonctionne en convertissant l'énergie solaire en électricité. Il est composé de cellules photovoltaïques qui capturent la lumière du soleil et la convertissent en électricité à l'aide d'un processus appelé effet photovoltaïque. L'électricité produite par les cellules est ensuite envoyée à un onduleur, qui la convertit en tension alternative utilisable pour alimenter les appareils électriques. En raison de leur durabilité et de leur capacité à produire de l'énergie propre, les panneaux solaires sont considérés comme une forme importante d'énergie renouvelable.**

![DATA6_TDL.jpg](images/DATA6_TDL.jpg)

### Déroulé de l’activité

Au travers de cette activité, l’objectif est de comprendre et calculer le rendement maximal d’un panneau solaire durant la journée. En effet, l’ensoleillement du panneau varie en fonction de la position et de l’intensité du soleil. Ainsi, les élèves devront :

- Identifier différentes ressources en énergie et connaître quelques conversions d’énergie
- Pratiquer des démarches scientifiques et technologiques
- Mesurer des grandeurs de manière directe ou indirecte.
- Identifier le(s) matériau (x), les flux d’énergie et d’information dans le cadre d’une production technique sur un objet et décrire les transformations qui s’opèrent.

### Compétences Mobilisées

Ce protocole mobilise plusieurs compétences qui sont pertinentes pour l'apprentissage des sciences et de la technologie. Plus spécifiquement, il permet de développer les compétences suivantes :

- En sciences physiques : la capacité à réaliser une expérience scientifique pour résoudre un problème technique, à collecter des données quantitatives, à interpréter des résultats expérimentaux et à comprendre les phénomènes physiques impliqués dans la production d'énergie solaire.
- En mathématiques : la capacité à utiliser les données collectées pour calculer des grandeurs physiques comme la tension, l'intensité et la puissance, à tracer des graphiques pour visualiser les résultats et à interpréter les résultats numériques.
- En technologie: habiliter la programmation d'un capteur de tension pour collecter des données, utiliser un afficheur pour visualiser les résultats, créer un système d'alerte pour prévenir l'utilisateur des conditions optimales d'utilisation de l'énergie solaire et concevoir un système d'orientation automatique pour maximiser la production d'énergie solaire.

### Matériel

Afin de réaliser cette activité, vous aurez besoin du matériel suivant : 

- 1 carte programmable “STM32 IoT Node Board”
- 1 capteur de tension INA219
- 1 écran OLED (SSD1306)
- 1 panneau solaire
- 1 lampe
- 1 breadboard
- Des câbles de connexion
- 1 câble USB - micro B

# LES RESSOURCES

### Expérimentation scientifique

[Protocole PR6-TDL - Étapes d'expérimentation](L%E2%80%99%C3%A9nergie%20fournie%20par%20un%20panneau%20solaire%20est-elle%20/Protocole%20PR6-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation%2002a83f6a0490417d8fc3355239fa3c8d.md)

### Fiches de programmation

[Sans titre](L%E2%80%99%C3%A9nergie%20fournie%20par%20un%20panneau%20solaire%20est-elle%20/Sans%20titre%209527a5c9ec84448eb69bbd5f1d920a2f.csv)


---

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

> 🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 1 - Collecter les données grâce au capteur de tension.**
>
> [PROG6-TDL-1](https://www.notion.so/PROG6-TDL-1-9d790c9c00cf4fe3938bc88b296f6aca?pvs=21)

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

> 🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 2 - Afficher les données sur un écran.**
>
> [PROG6-TDL-2](https://www.notion.so/PROG6-TDL-2-4bbeed85569f41fda9b7ff7f9c23b22f?pvs=21)

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

> 🧑‍💻 Pour vous aider à programmer le système d’alerte, consultez la **Fiche 3 - Créer un système d’alarme.**
>
> [PROG6-TDL-**3**](https://www.notion.so/PROG6-TDL-3-ba62af7a82094c7c8f67748cd23f14e0?pvs=21)

💬 **Débriefing**

En plus de l’affichage des données à l’utilisateur, lors de cette étape, nous avons rajouté la possibilité de prévenir l’utilisateur en cas d’anomalie. Cela permet de corriger manuellement l’orientation du panneau solaire quand les rendements ne sont pas suffisants.

Le protocole “Comment maximiser l’apport en énergie solaire et créer des panneaux auto-orientables ?” permet d’aller plus loin dans cette activité en proposant une solution d’automatisation permettant de toujours avoir une orientation optimale.


---

## Fiches programmation

### PROG6-TDL-1 — Collecter les données grâce au capteur de tension



🛠️**Construire**

**Câbler le capteur de tension**

Le capteur de tension utilise un protocole de communication appelé I2C, cela signifie que nous avons besoin de 2 fils pour communiquer avec lui. En plus, il nous faudra deux fils supplémentaires pour l’alimenter. Les branchements sont donc les suivants :

- Violet pour SDA
- Vert pour SCL
- Bleu pour GND
- Rouge pour VCC (3.3V)

*Ressources : [https://en.wikipedia.org/wiki/I2C](https://en.wikipedia.org/wiki/I2C)*

**Câbler le panneau solaire**

Le panneau solaire doit comporter deux fils : 

- Le fil rouge (ou le fil indiqué comme “positif”) sur le bornier à vis Vin +
- Le fil noir (ou le fil indique comme “négatif”) connecté d’une part sur le GND de la carte, et d’autre part sur une résistance de 100 ohms elle-même branché sur le bornier à vis Vin -

**Connecter la carte à l'ordinateur**

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur micro-USB ST-LINK (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé DIS_L4IOT. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

**Ouvrir MakeCode**

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur. *Ressource : [makecode.lets-steam.eu](http://makecode.lets-steam.eu/)*

![montage_solaire.png](images/montage_solaire.png)

**Installer les extensions**

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut "prêt à l'emploi" et vous devrez installer deux extensions.

> ℹ️ **Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de la robotique et bien plus encore.**

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. Si vous cliquez sur **AVANCÉ**, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton.

Dans la liste des extensions disponibles, vous pouvez facilement trouver les extensions **SERIAL** et **INA219** qui seront utilisées pour cette activité. L’extension **SERIAL** permettra d’échanger des informations entre ordinateur la carte électronique. Quant à l’extension **INA219**, elle permettra l’ajout des blocs pour interagir avec le capteur de tension. Si elle n’est pas directement disponible sur votre écran, vous pouvez les rechercher à l'aide de l'outil de recherche. Cliquez sur l’extension que vous souhaitez utiliser et un nouveau groupe de blocs apparaîtra sur l'écran principal.

**Programmer la carte**

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur DIS_L4IOT et attendez que la carte finisse de clignoter.

**Exécuter, modifier, jouer**

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET). 

**🧑‍💻Programmer**

```jsx
Serial.attachToConsole()

forever(function () {
    Serial.writeValue("Voltage", input.getINA219Voltage())
    pause(5000)
})
```

### PROG6-TDL-2 — Afficher les données sur un écran



🛠️**Construire**

**Connecter l'écran**

Il y a deux façons de câbler l'écran OLED SSD1306 à une carte, soit avec une connexion I2C ou SPI. Pour notre écran, nous utilisons la connexion I2C :

- Bleu pour GND
- Rouge pour V + (3V3)
- Orange pour SDA (D14)
- Jaune pour SCL (D15)

*Ressources : [https://en.wikipedia.org/wiki/I2C](https://en.wikipedia.org/wiki/I2C), [https://en.wikipedia.org/wiki/Serial_Peripheral_Interface](https://en.wikipedia.org/wiki/Serial_Peripheral_Interface), [https://www.sparkfun.com/qwiic](https://www.sparkfun.com/qwiic), [https://learn.adafruit.com/introducing-adafruit-stemmaqt/what-is-stemma-qt](https://learn.adafruit.com/introducing-adafruit-stemmaqt/what-is-stemma-qt)*

**Câbler le capteur de tension**

Le capteur de tension utilise un protocole de communication appelé I2C, cela signifie que nous avons besoin de 2 fils pour communiquer avec lui. En plus, il nous faudra deux fils pour supplémentaire pour l’alimenter. Les branchements sont donc les suivants :

- Violet pour SDA
- Vert pour SCL
- Bleu pour GND
- Rouge pour VCC (3.3V)

![Untitled](images/Untitled.png)

> ⚠️ **L’écran et le capteur de tension, utilisent tous les deux l’I2C, cela ne pose pas de problème sauf pour le câblage. En effet les deux câbles “SCL” et “SDA” doivent être branchés aux mêmes endroits. Pour faciliter les branchements utilisez la breadboard.**

**Câbler le panneau solaire**

Le panneau solaire doit comporter deux fils :

- Le fil rouge (ou le fil indiqué comme “positif”) sur le bornier à vis Vin +,
- L’autre fil (le noir, ou indique comme “négatif”) sur le bornier à vis Vin -.

**Connecter la carte à l'ordinateur**

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur micro-USB ST-LINK (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé DIS_L4IOT. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

**Ouvrir MakeCode**

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur. *Ressource : [makecode.lets-steam.eu](http://makecode.lets-steam.eu/)*

**Installer les extensions**

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut "prêt à l'emploi" et vous devrez installer deux extensions.

> ℹ️ **Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de la robotique et bien plus encore.**

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. Si vous cliquez sur **AVANCÉ**, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton.

Dans la liste des extensions disponibles, vous pouvez facilement trouver les extensions **OLED** et **INA219** qui seront utilisées pour cette activité. L’extension **OLED** vous permettra d’afficher les données sur un écran. **INA219** est utilisée pour communiquer avec le capteur de tension. Si elles ne sont pas directement disponibles sur votre écran, vous pouvez les rechercher à l'aide de l'outil de recherche. Cliquez sur l’extension que vous souhaitez utiliser et un nouveau groupe de blocs apparaîtra sur l'écran principal.

**Programmer la carte**

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur DIS_L4IOT et attendez que la carte finisse de clignoter.

**Exécuter, modifier, jouer**

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET). 

**🧑‍💻 Programmer**

```jsx
forever(function () {
    oled.clear()
    oled.showValue("Voltage (V)", input.getINA219Voltage(), 1)
    pause(1000);
})
```

### PROG6-TDL-3 — Créer un système d’alarme



🛠️**Construire**

**Connecter l'écran**

Il y a deux façons de câbler l'écran OLED SSD1306 à une carte, soit avec une connexion I2C ou SPI. Pour notre écran, nous utilisons la connexion I2C :

- Bleu pour GND
- Rouge pour V + (3V3)
- Orange pour SDA (D14)
- Jaune pour SCL (D15)

*Ressources : [https://en.wikipedia.org/wiki/I2C](https://en.wikipedia.org/wiki/I2C), [https://en.wikipedia.org/wiki/Serial_Peripheral_Interface](https://en.wikipedia.org/wiki/Serial_Peripheral_Interface), [https://www.sparkfun.com/qwiic](https://www.sparkfun.com/qwiic), [https://learn.adafruit.com/introducing-adafruit-stemmaqt/what-is-stemma-qt](https://learn.adafruit.com/introducing-adafruit-stemmaqt/what-is-stemma-qt)*

**Câbler le capteur de tension**

Le capteur de tension utilise un protocole de communication appelé I2C, cela signifie que nous avons besoin de 2 fils pour communiquer avec lui. En plus, il nous faudra deux fils pour supplémentaire pour l’alimenter. Les branchements sont donc les suivants :

- Violet pour SDA
- Vert pour SCL
- Bleu pour GND
- Rouge pour VCC (3.3V)

![Untitled](images/Untitled.png)

> ⚠️ **L’écran et le capteur de tension, utilisent tous les deux l’I2C, cela ne pose pas de problème sauf pour le câblage. En effet les deux câbles “SCL” et “SDA” doivent être branchés aux mêmes endroits. Pour faciliter les branchements utilisez la breadboard.**

**Câbler le panneau solaire**

Le panneau solaire doit comporter deux fils :

- Le fil rouge (ou le fil indiqué comme “positif”) sur le bornier à vis “Vin +”,
- L’autre fil (le noir, ou indique comme “négatif”) sur le bornier à vis “Vin -”.

**Connecter la carte à l'ordinateur**

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur micro-USB ST-LINK (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé DIS_L4IOT. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

**Ouvrir MakeCode**

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur. *Ressource : [makecode.lets-steam.eu](http://makecode.lets-steam.eu/)*

**Installer les extensions**

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut "prêt à l'emploi" et vous devrez installer deux extensions.

> ℹ️ **Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de la robotique et bien plus encore.**

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. Si vous cliquez sur **AVANCÉ**, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton.

Dans la liste des extensions disponibles, vous pouvez facilement trouver les extensions **OLED** et **INA219** qui seront utilisées pour cette activité. L’extension **OLED** vous permettra d’afficher les données sur un écran. **INA219** est utilisée pour communiquer avec le capteur de tension. Si elles ne sont pas directement disponibles sur votre écran, vous pouvez les rechercher à l'aide de l'outil de recherche. Cliquez sur l’extension que vous souhaitez utiliser et un nouveau groupe de blocs apparaîtra sur l'écran principal.

**Programmer la carte**

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur DIS_L4IOT et attendez que la carte finisse de clignoter.

**Exécuter, modifier, jouer**

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET). 

**🧑‍💻Programmer**

```jsx
forever(function () {
    oled.clear()
    oled.showValue("Voltage (V)", input.getINA219Voltage(), 1)
		if(input.getINA219Voltage() < 2){
			oled.clear()
			oled.showString("ALARME", 1)
			oled.showString("Rendement trop bas !", 2)
			oled.showString("Le panneau doit être orienté", 3)
		}
    pause(1000);
})
```

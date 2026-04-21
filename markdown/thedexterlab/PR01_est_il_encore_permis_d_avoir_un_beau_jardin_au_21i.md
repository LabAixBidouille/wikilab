# Est-il encore permis d'avoir un beau jardin au 21ième siècle ?

**Problématique :** Comment irriguer automatiquement une plante ?

> ℹ️ **Avec les enjeux actuels liés au changement climatique, entraînant des vagues de chaleur asséchant le sol et épuisant les nappes souterraines, l'eau devient une denrée rare, faisant l'objet de mesures de restriction de plus en plus régulières. L'arrosage du jardin ou des plantes d'intérieur, en période de restriction d'eau doit donc se faire de manière rationnelle afin de ne pas gaspiller une ressource sur laquelle repose d'ores et déjà beaucoup de pression.**

![image (28).png](images/image_(28).png)

### Déroulé de l’activité

Le projet consiste à **construire un système d'arrosage autonome** pour les plantes d'intérieur. La donnée décisive pour choisir d’arroser une plante est **l'humidité du sol, qui est liée à une quantité physique facile à mesurer : la conductivité électrique du sol**. Nous allons donc construire un dispositif qui mesure la **conductivité** du sol et mettra en fonction un système d'arrosage distribuant la juste quantité d’eau à chaque plante. 
Une fois que l'on connaît la conductivité du sol, la détermination de la **quantité d'eau nécessaire** à la plante dépend de plusieurs facteurs : **le type de plante, la température de l'air, la qualité du sol, la période de l'année, etc.**  Nous devrons donc collecter des données et mener plusieurs expériences pour **calibrer au mieux** notre système d’arrosage économe en eau.

**Cette activité vise à questionner les élèves sur les variables à prendre en considération dans l'arrosage des plantes.**

Avec les enjeux actuels liés au changement climatique, entraînant des vagues de chaleur asséchant le sol et épuisant les nappes souterraines, [l'eau devient une denrée rare](https://jardinage.lemonde.fr/dossier-2986-eau-ressource-fragile.html), faisant l'objet de mesures de restriction lorsque les épisodes de canicule s'intensifient. [L'arrosage du jardin ou des plantes d'intérieur, en période de restriction d'eau](https://jardinage.lemonde.fr/dossier-4584-comment-arroser-jardin-periode-restriction-eau.html) doit donc se faire de manière rationnelle afin de ne pas gaspiller une ressource sur laquelle repose d'ores et déjà beaucoup de pression.

### Compétences Mobilisées

En mettant en œuvre une expérience par eux-mêmes, les élèves mobiliseront plusieurs compétences :

- Biologie : définir et analyser scientifiquement le **concept de développement durable** afin d'apprécier son importance, comprendre l'importance d'une **utilisation rationnelle des ressources naturelles**, proposer des solutions diverses à des **problématiques environnementales**
- Biologie : aborder les concepts de **conductivité du sol**
- Technologie : utiliser une **carte programmable** et des capteurs afin de collecter des **données numériques,** approcher les **technologies d'automatisation**
- Mathématiques : Analyser des données de manière **statistique**
- Technologie ou ingénierie, mathématiques : Utiliser une **feuille de calcul**, analyser des données, réaliser des **graphiques** et des **diagrammes** afin de visualiser les données et de décrire ces conclusions
- Transdisciplinaire : **Savoir modéliser, comprendre, formaliser, partager, construire, investiguer, prouver son hypothèse**
- Physique : Formuler une hypothèse et conduire une **expérimentation basée sur la méthode scientifique** pour conclure si elle est correcte ou non.

Afin de comprendre le fonctionnement de l'irrigation et de l'arrosage des plantes, les élèves devront suivre les étapes de l'investigation scientifique en gardant à l'esprit les 4 phases suivantes :

- **Définir les variables permettant de mesurer l'humidité** - Définir les données à collecter selon l'identification de variables mesurables pertinentes pour mener cette expérimentation.
- **Construire un outil de collecte de données** permettant d'analyser les variables définies
- Construire un **outil d'arrosage automatique**
- **Mesurer et analyser les données**
- **Conclure**

### Matériel

- 1 carte programmable “STM32 IoT Node Board”
- 1 écran OLED (SSD1306)
- 1 Plante
- 1 Paille
- 1 Capteur d’humidité du sol
- 1 Servomoteur
- 1 Breadboard
- Des câbles de connexion
- 1 câble USB - micro B

# LES RESSOURCES

### Expérimentation scientifique

[Protocole PR1-TDL - Étapes d'expérimentation](Est-il%20encore%20permis%20d'avoir%20un%20beau%20jardin%20au%2021i/Protocole%20PR1-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation%208a9c293605c9497598fe362f45841216.md)

### Fiches de programmation

[Sans titre](Est-il%20encore%20permis%20d'avoir%20un%20beau%20jardin%20au%2021i/Sans%20titre%20bfbdffceff67431cb42c7b7649724853.csv)


---

# Protocole PR1-TDL - Étapes d'expérimentation

### Étape 1 - Collecter des données

🧭**Orientation**

La croissance optimale d'une plante dépend de plusieurs paramètres tels que la lumière, la température, les nutriments à disposition et l'eau. Quelles sont les mesures essentielles que nous devons effectuer pour assurer une bonne croissance ? 

Pour comprendre les phénomènes et apporter une réponse même partielle à la question précédente, il faut étudier un paramètre à la fois. Celui qui choisit est la quantité d'eau distribuée à la plante. Comment déterminer que la plante a besoin d'eau ? Et surtout, comment un système automatique peut-il s’en servir pour distribuer de l’eau si nécessaire ?

💡**Conceptualisation**

Pour vivre, une plante a besoin d'eau. La grande majorité de cette eau est absorbée par ses racines. La quantité d’eau disponible dans le sol est donc celle que la plante va absorber pour répondre à ses besoins. Pour savoir si la plante dispose d’eau, il faudra donc mesurer si le sol autour de notre plante est plus ou moins [humide](https://fr.wikipedia.org/wiki/Humidit%C3%A9). Certaines plantes ont besoin de très peu d'eau (par exemple, les cactus), d'autres doivent être immergées presque en permanence (par exemple, les papyrus) et d'autres encore ont besoin d'une quantité intermédiaire pour que le sol ne soit ni trop sec ni trop humide (par exemple, les impatiens). Pour savoir si la quantité d’eau disponible dans le sol est adaptée au besoin de la plante choisie, l’humidité va être mesurée à l'aide d'un capteur spécifique à l’humidité du sol.

> ℹ️ La photosynthèse est un processus de [**biosynthèse**](https://www.aquaportail.com/definition-1808-biosynthese.html) qui exploite l'énergie du soleil avec des substances organiques ([eau](https://www.aquaportail.com/definition-1075-eau-h2o.html), [CO2](https://www.aquaportail.com/definition-7547-dioxyde-de-carbone.html), [oxygène](https://www.aquaportail.com/definition-3882-oxygene.html)) pour la **transformer en énergie chimique**. Elle est utilisée par les plantes, [algues](https://www.aquaportail.com/definition-429-algue.html), [cyanobactéries](https://www.aquaportail.com/definition-2113-cyanobacterie.html) et certaines [bactéries](https://www.aquaportail.com/definition-435-bacterie.html).
>
> La photosynthèse **absorbe le [dioxyde](https://www.aquaportail.com/definition-4040-dioxyde.html) de [carbone](https://www.aquaportail.com/definition-981-carbone.html) produit par les organismes photosynthétiques** et réintroduit de l'oxygène dans l'[atmosphère](https://www.aquaportail.com/definition-578-atmosphere.html).

🔎**Investigation**

Un capteur d'humidité du sol fonctionne en mesurant la conductivité, c'est-à-dire la capacité à conduire un courant. L’eau étant un conducteur, plus un sol va être humide (*i.e* plus la quantité d’eau augmente), plus sa conductivité sera grande. Inversement, plus un sol sera sec (*i.e* moins il contiendra d’eau), plus la conductivité sera petite. 

Le sol contient une grande quantité de sels (utilisés par la plante en tant que nutriments) qui, en présence d'eau, se dissolvent et libère les ions dont il est composé. Les ions sont des particules chargées (positivement ou négativement) qui peuvent être mises en mouvement lorsqu'elles sont soumises à une différence de potentiel, ce qui crée un courant électrique. La dissolution des sels dans l’eau va donc modifier la conductivité de l’eau en l’augmentant. Plus il y a d'eau, plus les nutriments peuvent se dissoudre (et donc plus d'ions libres dans l’eau), plus la conductivité augmente. Ainsi, même en arrosant un sol avec une eau pure non conductrice, on peut mesurer l’évolution de l’humidité du sol grâce à la conductivité. 

Concrètement, le capteur ressemble à une fourche que l'on plante dans le sol. 

![Untitled](images/Untitled.png)

> 🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 1 - Mesurer la conductivité du sol.**
>
> [PROG1-TDL-1](https://www.notion.so/PROG1-TDL-1-533615e542ab4d75bb6ba010d915310d?pvs=21)

💬 **Débriefing**

Avec le programme de la fiche précédent, il est possible de relever les valeurs de la conductivité (entre 0 et 1023) pour estimer l’humidité du sol d’une plante en pot.

La mesure de la conductivité est très sensible aux contacts. Ainsi, la profondeur de la fourche dans le sol va modifier la mesure, et si le sol est plus ou moins compacté, la mesure va également changer. Pour ces raisons, le capteur d'humidité du sol ne donne pas une mesure très précise mais il est suffisant pour connaître l’évolution de l’humidité.

Nous pouvons déjà mesurer l'humidité de différentes plantes pour obtenir des valeurs de référence pour caractériser l'humidité du sol d’une plante (très sec, sec, légèrement humide, humide, très humide, mouillé).

### É**tape 2 -** Transformer les mesures en informations utiles pour l’arrosage

🧭**Orientation**

Nous avons vu comment effectuer une mesure analogique par le capteur d'humidité. Il faut maintenant mettre en relation cette valeur (entre 0 et 1023) avec le taux d'humidité. La relation n’est pas directe, puisque la conductivité dépend de plusieurs paramètres. Nous devons aussi qualifier l’état du sol en fonction de la plante : le même sol au même taux d’humidité sera peut-être à considérer comme trop humide pour un cactus mais trop sec pour un papyrus.

💡**Conceptualisation**

Nous devons étalonner notre appareil de mesure, c’est-à-dire surveiller la conductivité sur plusieurs cycles d'arrosage “manuels” afin de décider quelles valeurs de conductivité devront par la suite déclencher un arrosage automatique. Afin d’identifier les besoins en eau de la plante, nous devons arroser la plante “normalement” pendant plusieurs cycles, en notant bien la valeur mesurée de la conductivité avant et après chaque arrosage.

🔎**Investigation**

Dans le cadre de ce projet, nous voulons pouvoir arroser une plante pour qu'elle ne se fane pas, nous n'utiliserons donc pas de valeurs en tant que telles (qui ne sont de toute façon pas très précises), mais plutôt des intervalles de valeurs. Il semble raisonnable de définir trois intervalles distincts :

- Sec (il faut arroser)
- Moite (tout va bien)
- Humide (on vient d’arroser)

Pour rappel, plus la valeur est faible, plus le sol est sec. Pour information, voici les mesures obtenues avec ces trois situations extrêmes :

- Sol très sec (adapté à un cactus) : environ 20
- Sol moite (adapté à un iris) : environ 550
- Sol très humide (adapté à un papyrus) : environ 700

Comme la mesure de la conductivité dépend de la quantité d'eau mais aussi de la quantité d'ions disponibles, la valeur peut changer en fonction du sol, c'est-à-dire qu'à humidité égale, le milieu plus riche en ions donnera une valeur plus élevée.

Le programme résultant pour un iris est écrit comme suit et l’écran affiche (selon les 3 cas) si le sol est trop sec, correct ou trop humide :

> 🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 2 - Afficher les données collectées sur un écran.**
>
> [PROG1-TDL-2](https://www.notion.so/PROG1-TDL-2-99d9fccef28140a99ed8f30e612f6b06?pvs=21)

💬 **Débriefing**

Grâce à un capteur bon marché et simple d'utilisation, nous pouvons obtenir l'état d'humidité du sol au pied d'une plante. Bien que la mesure ne soit pas précise et assez relative, elle est suffisante pour le cas qui nous intéresse ici. De plus, il permet de bien comprendre le concept d'étalonnage de la mesure (même très simplifié) et l'importance d'une valeur de référence.

### É**tape 3 -** Commander un servomoteur

🧭**Orientation**

Maintenant que notre appareil nous dit quand l’arrosage devrait se déclencher, il faut construire le système d’arrosage lui-même. Notre solution utilisera un servomoteur (un moteur qui peut déplacer son axe dans une position angulaire déterminée), et nous allons donc voir comment contrôler le servomoteur.

🔎**Investigation**

Afin d'utiliser le servomoteur, il est indispensable de se familiariser avec son fonctionnement. Nous vous proposons comme activité simple : de réaliser un circuit avec le servomoteur et de le programmer pour qu'il se positionne à différents angles. 

> 🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 3 - Programmation d’un servomoteur.**
>
> [PROG1-TDL-3](https://www.notion.so/PROG1-TDL-3-3283692f11404c3a8ca5502378fcab7d?pvs=21)

💬 **Débriefing**

Les élèves sont maintenant capables d'utiliser et de commander un servomoteur, qu'ils utiliseront dans la prochaine étape du système d'irrigation. Le choix du servomoteur n'a pas été fait au hasard. En effet, le servomoteur ne nécessite pas d'autres accessoires (alimentation externe, transistor de puissance, relais…) et son utilisation est très simple. Il est candidat pour de nombreuses applications nécessitant de mettre des objets en mouvement et son utilisation se retrouve dans de nombreux autres projets amateurs.

### É**tape 4 - Créer un système d’arrosage autonome**

🧭**Orientation**

Comment votre dispositif va-t-il **amener l'eau à une installation domestique** ? Les solutions techniques sont nombreuses et variées, par exemple avec une **pompe, une électrovanne ou une vis d'Archimède construite en 3D**. Le dispositif proposé va **écoper l’eau d’un récipient en utilisant une paille** qui sera actionnée par le servomoteur.

💡**Conceptualisation**

Le servomoteur fait **tourner la paille par sa partie centrale** : d'un côté, la paille est **pliée en forme de cuillère** et **recueille un peu d'eau**, et de l'autre côté, **elle verse cette eau dans le bac à plantes**. **Quelle quantité d'eau recueille-t-elle à chaque mouvement de rotation ?** Nous devrons **ajuster le programme** pour que la quantité d'eau soit correcte en fonction de notre étalonnage.

🔎**Investigation**

Maintenant, nous pouvons assembler les deux parties pour mettre en place le système d'arrosage automatique : Il suffit de couper la paille à la bonne longueur, de lui donner la forme d'un "L" avec le joint et de l'attacher au servomoteur avec un trombone ou un fil. Le capteur d'humidité est enfoncé dans le sol.

![image (35).png](images/image_(35).png)

> 🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 4 - Créer un système d’arrosage automatique.**
>
> [PROG1-TDL-4](https://www.notion.so/PROG1-TDL-4-873cd6e316174e30bceb4501f3e5a7f0?pvs=21)

💬**Débriefing**

Partant que pour avoir un jardin économe en eau, il fallait être capable de déterminer les besoins hydriques de la plante, nous avons un **système d'arrosage automatique**. Ce système est constitué de deux parties distinctes. La première dédiée à déterminer “si la plante a soif” en utilisant la conductivité pour estimer l’humidité du sol. La seconde s’occupe de satisfaire au besoin de la plante en apportant “la juste quantité d’eau”. Un autre système d’apport d’eau aurait pu être créé avec une pompe et un relais par exemple. **Celui que nous avons choisi, a l'avantage de n'utiliser qu'un simple servomoteur**, ce qui le rend très bon marché et facile à mettre en œuvre. Les étudiants peuvent mesurer la quantité d'eau absorbée à chaque coup de paille pour suivre les besoins en eau de différentes plantes ou pour observer l'impact des conditions environnementales telles que la lumière, la température et l'humidité de l'air sur la consommation d'eau. Ils peuvent également formuler de nouvelles hypothèses pour réaliser de nouveaux protocoles en se servant de celui-ci comme base.


---

## Fiches programmation

### PROG1-TDL-1 — Mesurer la conductivité du sol



🛠️**Construire**

**Câbler / Utiliser le capteur d’humidité**

Le capteur d’humidité que nous utilisons possède trois broches : deux broches d’alimentation (+ et -) ainsi qu’une broche de signal. 

Vous allez devoir connecter les broches du capteur de la manière suivante : 

- La broche **+** du capteur sur la broche 5V de la carte
- La broche **-** du capteur sur la broche GND de la carte
- La broche **S** du capteur sur la broche A0 de la carte

**Connecter la carte à l'ordinateur**

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur micro-USB ST-LINK (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé DIS_L4IOT. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

**Ouvrir MakeCode**

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur. *Ressource : [makecode.lets-steam.eu](http://makecode.lets-steam.eu/)*

**Installer les extensions serial et soil-hygrometer**

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut "prêt à l'emploi" et vous devrez installer deux extensions.

> ℹ️ **Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de la robotique et bien plus encore.**

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. Si vous cliquez sur **AVANCÉ**, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton.

Dans la liste des extensions disponibles, vous pouvez facilement trouver les extensions **serial** et **soil-hygrometer**, ****qui seront utilisées pour cette activité. L’extension serial vous permettra de collecter les données d’humidité du sol et de les afficher dans la console tandis que l’extension soil-hygrometer vous permettra d’interagir avec le capteur. Si elles ne sont pas directement disponibles sur votre écran, vous pouvez les rechercher à l'aide de l'outil de recherche. Cliquez sur l’extension que vous souhaitez utiliser et un nouveau groupe de blocs apparaîtra sur l'écran principal.

![Untitled](images/Untitled.png)

**Programmer la carte**

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur DIS_L4IOT et attendez que la carte finisse de clignoter.

**Exécuter, modifier, jouer**

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET). Pour observer l’humidité du sol, ouvrez la console (bouton disponible en dessous du simulateur).

![Untitled](images/Untitled 1.png)

**🧑‍💻Programmer**

```jsx
Serial.attachToConsole()
forever(function () {
    Serial.writeValue("soil humidity", input.getSoilHumidity(pins.A0))
    pause(500)
})
```

### PROG1-TDL-2 — Afficher les données collectées sur un écran



🛠️**Construire**

**Câbler / Utiliser le capteur d’humidité**

Pour ce montage, vous aurez besoin d’une breadboard.

Le capteur d’humidité que nous utilisons possède trois broches : deux broches d’alimentation (+ et -) ainsi qu’une broche de signal. 

Vous allez devoir connecter les broches du capteur de la manière suivante : 

- La broche **+** du capteur sur la broche 5V de la carte
- La broche **-** du capteur sur la bande d’alimentation **-** de la breadboard
- La broche **S** du capteur sur la broche A0 de la carte
- La bande d’alimentation **-** de la breadboard sur la broche **GND** de la carte

**Connecter l’écran**

L’écran que vous allez utiliser est un écran OLED nommé **SSD1306**. Il peut être connecté soit en **SPI**, soit en **I2C**. Comme nous allons utiliser la communication **I2C**, vous allez devoir connecter l’écran de la manière suivante :

- La broche **GND** de l’écran à la bande d’alimentation **-** de la breadboard
- La broche **VCC** de l’écran sur la broche **3.3V** de la carte
- La broche **SDA** de l’écran sur la broche **D14** de la carte
- La broche **SCL** de l’écran sur la broche **D15** de la carte

*Ressources : [https://en.wikipedia.org/wiki/I2C](https://en.wikipedia.org/wiki/I2C), [https://en.wikipedia.org/wiki/Serial_Peripheral_Interface](https://en.wikipedia.org/wiki/Serial_Peripheral_Interface), [https://www.sparkfun.com/qwiic](https://www.sparkfun.com/qwiic), [https://learn.adafruit.com/introducing-adafruit-stemmaqt/what-is-stemma-qt](https://learn.adafruit.com/introducing-adafruit-stemmaqt/what-is-stemma-qt)*

![Untitled](images/Untitled.png)

**Connecter la carte à l'ordinateur**

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur micro-USB ST-LINK (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé DIS_L4IOT. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

**Ouvrir MakeCode**

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur. *Ressource : [makecode.lets-steam.eu](http://makecode.lets-steam.eu/)*

**Installer les extensions soil-hygrometer et OLED**

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut "prêt à l'emploi" et vous devrez installer deux extensions.

> ℹ️ **Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de la robotique et bien plus encore.**

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. Si vous cliquez sur **AVANCÉ**, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton.

Dans la liste des extensions disponibles, vous pouvez facilement trouver les extensions **soil-hygrometer** et **OLED,** qui seront utilisées pour cette activité. L’extension soil-hygrometer ****vous permettra d’interagir avec le capteur, tandis que l’extension OLED vous permettra d’interagir avec l’écran. Si elles ne sont pas directement disponibles sur votre écran, vous pouvez les rechercher à l'aide de l'outil de recherche. Cliquez sur l’extension que vous souhaitez utiliser et un nouveau groupe de blocs apparaîtra sur l'écran principal.

**Programmer la carte**

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur DIS_L4IOT et attendez que la carte finisse de clignoter.

**Exécuter, modifier, jouer**

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET). Pour observer l’humidité du sol, regardez l’écran OLED qui devrait afficher “Too dry !”, “All ok!” ou “Too wet” selon si la valeur renvoyée par le capteur est inférieure à 450, comprise entre 450 et 700, ou supérieure à 700.

**🧑‍💻Programmer**

```jsx
let humidity = 0
forever(function () {
    humidity = input.getSoilHumidity(pins.A0)

    oled.clear()
    oled.showValue("humidity", humidity, 1)

    if (humidity <= 450) {
        oled.showString("Too dry!", 2)
    } else if (humidity >= 450 && humidity < 700) {
        oled.showString("All ok! I'm fine :)", 2)
    } else {
        oled.showString("Too wet!", 2)
    }
    
    pause(500)
})
```

### PROG1-TDL-3 — Programmation d’un servomoteur



🛠️**Construire**

**Câbler le servomoteur**

Le servomoteur se commande à l’aide de trois fils. Deux pour l’alimentation, et un fil de commande. Pour le câbler, suivez le branchement suivant :

- **Marron** (ou violet) sur le GND
- **Rouge** sur le 5V
- **Orange** sur la broche 9

**Connecter la carte à l'ordinateur**

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur micro-USB ST-LINK (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé DIS_L4IOT. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

**Ouvrir MakeCode**

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur. *Ressource : [makecode.lets-steam.eu](http://makecode.lets-steam.eu/)*

**Installer l’extension serial**

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut "prêt à l'emploi" et vous devrez installer une extension.

> ℹ️ **Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de la robotique et bien plus encore.**

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. Si vous cliquez sur **AVANCÉ**, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton.

Dans la liste des extensions disponibles, vous pouvez facilement trouver l’extension **Serial** qui sera utilisée pour cette activité. Cette extension sera utile pour échanger des données entre la carte électronique et votre ordinateur (dans le cas présent, l’ange du servomoteur). Si elle n’est pas directement disponible sur votre écran, vous pouvez les rechercher à l'aide de l'outil de recherche. Cliquez sur l’extension que vous souhaitez utiliser et un nouveau groupe de blocs apparaîtra sur l'écran principal.

**Programmer la carte**

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur DIS_L4IOT et attendez que la carte finisse de clignoter.

**Exécuter, modifier, jouer**

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET). 

![Untitled](images/Untitled.png)

**🧑‍💻Programmer**

```jsx
forever(function () {
    Serial.writeValue("Angle", 0)
    pins.D9.servoWrite(0)
    loops.pause(1000)

    Serial.writeValue("Angle", 90)
    pins.D9.servoWrite(90)
    loops.pause(1000)
})
```

### PROG1-TDL-4 — Créer un système d’arrosage automatique



🛠️**Construire**

**Câbler le capteur d’humidité**

Le capteur d’humidité que nous utilisons possède trois broches : deux broches d’alimentation (+ et -) ainsi qu’une broche de signal. 

Vous allez devoir connecter les broches du capteur de la manière suivante : 

- La broche **+** du capteur sur 5V
- La broche **-** du capteur sur GND
- La broche **S** du capteur sur A0

> 🧑‍💻 Pour vous aider à brancher l’écran, consultez la **Fiche 2 - Afficher les données collectées sur un écran.**

**Connecter la carte à l'ordinateur**

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur micro-USB ST-LINK (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé DIS_L4IOT. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

**Ouvrir MakeCode**

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur. *Ressource : [makecode.lets-steam.eu](http://makecode.lets-steam.eu/)*

**Installer les extensions**

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut "prêt à l'emploi" et vous devrez installer deux extensions.

> ℹ️ **Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de la robotique et bien plus encore.**

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. Si vous cliquez sur **AVANCÉ**, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton.

Dans la liste des extensions disponibles, vous pouvez facilement trouver l’extension **OLED** qui sera utilisée pour cette activité. Cette extension sera utile pour afficher des données tel que le taux d’humidité. Si elle n’est pas directement disponible sur votre écran, vous pouvez les rechercher à l'aide de l'outil de recherche. Cliquez sur l’extension que vous souhaitez utiliser et un nouveau groupe de blocs apparaîtra sur l'écran principal.

**Programmer la carte**

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur DIS_L4IOT et attendez que la carte finisse de clignoter.

**Exécuter, modifier, jouer**

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET). 

![Untitled](images/Untitled.png)

**🧑‍💻Programmer**

```jsx
let humidity = 0
pins.D9.servoWrite(0)

forever(function () {
    oled.clear()
    humidity = input.getSoilHumidity(pins.A0)

    oled.showValue("humidity", humidity, 1);

    if (humidity <= 450) {
        oled.showString("Too dry :(", 2);

        pins.D9.servoWrite(90)
        loops.pause(2000)
        pins.D9.servoWrite(0)
        loops.pause(3000)

    } else if (humidity >= 450 && humidity < 700) {
        oled.showString("I'm fine :)", 2);
    } else {
        oled.showString("Too wet!! :(", 2);
    }

    pause(500)
})
```

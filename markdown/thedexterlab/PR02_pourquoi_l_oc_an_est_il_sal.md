# Pourquoi l’océan est-il salé ?

**Problématique :** Comment séparer le sel et l'eau et contrôler le résultat ?

> ℹ️ **Dans ce projet nous découvrirons que les rivières créent les mers. Nous découvrirons que les océans commencent dans les montagnes. Tout ce qui se passe sur terre même loin des côtes exerce une influence sur l'océan. L'eau de pluie qui mouille les terres est pure. Pendant le voyage qui permet à cette eau de retourner à l'océan, sa composition va changer. Cependant, elle ne devient pas salée. La question est donc : d'où vient le sel de l'eau de mer ? Pour trouver l'origine du sel de mer, nous devons commencer par nous équiper d'un détecteur de sel qui fonctionne dans l'eau. La deuxième étape consistera à faire une série de mesures pour découvrir où est-ce que le sel peut apparaître, et cela nous permettra de découvrir la source.**

![DATA_2_TDL.jpg](images/DATA_2_TDL.jpg)

### Déroulé de l’activité

Ce protocole aborde la question de la présence de sel dans l'eau de mer et propose des expériences simples pour comprendre son origine. Il commence par expliquer comment utiliser un détecteur de sel pour mesurer la conductivité de l'eau salée. Pour obtenir des mesures précises, la méthode de mesure de la conductivité est décrite en détail. 

La deuxième expérience aborde la question de savoir comment l'eau de mer devient de plus en plus salée. Pour répondre à cette question, une expérience en classe est proposée. Cette expérience consiste à faire s'évaporer de l'eau dans un récipient fermé, puis à récupérer les condensats dans un verre. La surface de condensation est déformée ponctuellement avec une masse telle qu'une bille en métal pour constituer un cône d'écoulement permettant à l'eau de condensation de retomber dans le verre situé sous le poids. L'eau qui retombe dans le verre devrait être similaire à l'eau de pluie en termes de conductivité. L'eau en dehors du verre devient de plus en plus salée, la conductivité augmente avec le temps et par extension comment les océans sont devenus salés comme nous les connaissons. 

### Compétences Mobilisées

En mettant en œuvre une expérience par eux-mêmes, les élèves mobiliseront plusieurs compétences :

- **Connaissance de la méthode scientifique :**
    - Sciences de la Vie et de la Terre (SVT) : Utilisation de la démarche scientifique pour formuler et valider des hypothèses, concevoir et réaliser des expériences, interpréter des résultats expérimentaux.
    - Physique Chimie : Utilisation de la démarche scientifique pour formuler et valider des hypothèses, concevoir et réaliser des expériences, interpréter des résultats expérimentaux.
- **Capacité à concevoir une expérience :**
    - Sciences de la Vie et de la Terre (SVT) : Conception d'une expérience pour répondre à une question scientifique, choix des variables à étudier, identification et gestion des sources d'erreur.
    - Physique Chimie : Conception d'une expérience pour répondre à une question scientifique, choix des variables à étudier, identification et gestion des sources d'erreur.
- **Capacité à mesurer la conductivité de l'eau :**
    - Physique Chimie : Mesure de grandeurs physiques, en particulier la conductivité électrique, et utilisation d'instruments de mesure.
- **Capacité à analyser des données et à en tirer des conclusions :**
    - Mathématiques : Analyse de données, représentation graphique, interprétation des résultats.
    - Sciences de la Vie et de la Terre (SVT) : Analyse des résultats expérimentaux, interprétation des données, formulation d'une conclusion.
    - Physique Chimie : Analyse des résultats expérimentaux, interprétation des données, formulation d'une conclusion.
- **Capacité à communiquer des résultats scientifiques :**
    - Français : Rédaction d'un compte rendu scientifique clair et précis, utilisation d'un vocabulaire scientifique adapté.
    - Sciences de la Vie et de la Terre (SVT) : Communication des résultats scientifiques à l'oral et à l'écrit.
    - Physique Chimie : Communication des résultats scientifiques à l'oral et à l'écrit.

### Matériel

Afin de réaliser cette activité, vous aurez besoin du matériel suivant : 

- 1 carte programmable “STM32 IoT Node Board”
- 1 Conductimètre SEN0244
- 1 câble USB - micro B
- 1.5 litres d’eau pure
- 1 bouteille de 1l
- Du sel de table
- 11 flacons de 100 ml
- 1 saladier
- 1 verre
- Film plastique étirable
- Poids de quelques grammes

# LES RESSOURCES

### Expérimentation scientifique

[Protocole PR2-TDL - Étapes d'expérimentation](Pourquoi%20l%E2%80%99oc%C3%A9an%20est-il%20sal%C3%A9/Protocole%20PR2-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation%2006efe39a18a44348abca886906e35ab9.md)

### Fiches de programmation

[Sans titre](Pourquoi%20l%E2%80%99oc%C3%A9an%20est-il%20sal%C3%A9/Sans%20titre%20b78806e5053143e8b86a7cdfc6cc55a9.csv)


---

# Protocole PR2-TDL - Étapes d'expérimentation

### Le détecteur de sel

🧭**Orientation**

Pour partir à la recherche de l’origine du sel dans l’eau, il nous faut un détecteur de sel.

Les papilles de la langue sont des bons détecteurs de sel mais ne peuvent nous donner une mesure précise.

Pour avoir une mesure précise, nous allons utiliser une propriété de l’eau salée : la conductivité. La conductivité mesure la facilité avec laquelle l’électricité circule dans l’eau. Plus l’eau est salée, plus elle est conductrice du courant électrique. L’eau pure ne laisse pas passer le courant tandis que l’eau de mer est très conductrice.

La conductivité est généralement mesurée en microsiemens par centimètre (µS/cm). L’eau de mer a une concentration en sel moyenne de 35 g/l et une conductivité de 50 000 µS/cm.

💡**Conceptualisation**

Pour utiliser un détecteur de sel nous devons d’abord régler notre instrument. Nous allons calibrer le capteur en utilisant 1 litre d’eau de mer diluée que nous fabriquerons avec du sel vendu en magasin : 2 g de sel par litre correspondent à une conductivité de 4073 µS/cm. Nous préparerons 11 flacons de 100 ml avec de 0 à 10 doses de 10 ml d’eau salé auxquels nous rajouterons de l’eau pure pour compléter jusqu’à 100 ml.

🔎**Investigation**

- Préparation d’une solution de 2 mg de sel par litre d’eau.
- Dilution selon les proportions suivantes.
- Ajustement de la programmation du conductimètre pour faire des séries de mesure.

| Eau de mer | 0 ml | 10 ml | 20 ml | 30 ml | 40 ml | 50 ml | 60 ml | 70 ml | 80 ml | 90 ml | 100 ml |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Eau pure | 100 ml | 90 ml | 80 ml | 70 ml | 60 ml | 50 ml | 40 ml | 30 ml | 20 ml | 10 ml | 0 ml |
| Mesures théoriques en µS/cm | 0 | 407 | 814 | 1221. | 1628 | 2035 | 2442 | 2848 | 3258 | 3663 | 4073 |
| Mesures réelles en µS/cm |  |  |  |  |  |  |  |  |  |  |  |

> 🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 1 - Mesurer la conductivité de l’eau grâce à un conductimètre.**
>
> [PROG2-TDL-1](https://www.notion.so/PROG2-TDL-1-f28256d9a4ac4decb7a81cc199db794a?pvs=21)

💬 **Débriefing**

- La conductivité de l’eau pure est nulle.
- La conductivité augmente avec la concentration en sel.
- Cette augmentation est régulière, elle est de 407 µS/cm tous les 200 mg/l

### Expérimentation 1

🧭 **Orientation**

Dans cette partie nous allons montrer l’origine du sel dans l’eau. L’eau de pluie est pure, ensuite elle circule dans le sol pour rejoindre le point le plus bas. Quand elle arrive à la rivière elle n’est plus pure. Elle se mélange avec de nombreux sels qui se dissolvent et augmentent sa conductivité.

💡**Conceptualisation**

Pour montrer ce phénomène nous allons réaliser une expérience avec de l’eau pure et du sol pris à proximité de l’école.

🔎**Investigation**

Mesure 1, eau de pluie : ________ µS/cm

Mesure 2, eau de rivière : ________ µS/cm

💬 **Débriefing**

L’eau récoltée après son passage dans le sol a une plus grande conductivité qu’au départ. Nous pouvons en conclure qu’une partie des sels minéraux du sol s’est dissoute dans l’eau et a augmenté la conductivité de l’eau.

### Expérimentation 2

🧭**Orientation**

L’eau des rivières est chargée de sels minéraux des terres traversées, et se déverse dans la mer. Ensuite, le cycle de l’eau continue : l’eau de mer s’évapore et forme les nuages. Les sels eux, restent dans l’eau de mer. C’est pour cela que la mer est salée.

💡**Conceptualisation**

Il est possible de faire une expérience en classe pour montrer le phénomène, voici un montage facile à réaliser.

L’idée est de faire s’évaporer de l’eau dans un récipient fermé et de récupérer les condensats dans un verre. La surface de condensation étant un film étirable, elle peut être déformée ponctuellement avec une masse telle qu’une bille en métal pour constituer un cône d’écoulement permettant à l’eau de condensation de retomber dans le verre situé sous le poids.

L’eau qui retombe dans le verre devrait être similaire à l’eau de pluie en termes de conductivité. Que va-t-il se passer pour l’eau en dehors du verre ? Sa conductivité va-t-elle évoluer et de quelle manière ?

![Untitled](images/Untitled.png)

🔎**Investigation**

| Conductivité | Jour 1 | Jour 2 | Jour 3 | Jour 4 | Jour 5 |
| --- | --- | --- | --- | --- | --- |
| Eau en dehors du verre |  |  |  |  |  |
| Eau dans le verre |  |  |  |  |  |

💬 **Débriefing**

L'eau dans le verre est de l'eau pure avec une conductivité nulle. L'eau dans le verre est le résultat de la condensation de l’eau qui s’est évaporée si notre système sert à modéliser les océans, elle représente l'eau de pluie. L'eau hors du verre devient de plus en plus salée, la conductivité augmente avec le temps. Cette eau représente l'eau de mer. Dans le monde réel, depuis le début de la planète Terre, l'eau de mer est progressivement devenue de plus en plus salée. Aujourd'hui et depuis plusieurs milliards d’années, la concentration en sel est en équilibre. Les nouveaux sels apportés par les eaux des rivières compensent les sels qui disparaissent par la sédimentation et la tectonique des plaques.


---

## Fiches programmation

### PROG2-TDL-1 — Mesurer la conductivité de l’eau grâce à un conductimètre



🛠️**Construire**

**Câbler le conductimètre**

Le conductimètre est composé de deux éléments :

1. La sonde (élément terminé par deux électrodes, qui sera plongé dans l’eau)
2. La carte d’acquisition (facilite la communication entre la STM32 et la sonde de mesure)

Le branchement de la sonde sur la carte d’acquisition se fait via le connecteur correspondant à la fiche de la sonde, qui ne comporte que deux broches.

Le lien avec la STM32 se fait via l’autre connecteur (avec trois broches), comme suit :

- Rouge sur 5V
- Noir sur GND
- Bleu sur A0

**Connecter la carte à l'ordinateur**

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur micro-USB ST-LINK (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé DIS_L4IOT. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

**Ouvrir MakeCode**

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur. *Ressource : [makecode.lets-steam.eu](http://makecode.lets-steam.eu/)*

![full_montage.svg](images/full_montage.svg)

**Installer les extensions**

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut "prêt à l'emploi" et vous devrez installer une extension.

> ℹ️ **Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de la robotique et bien plus encore.**

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. Si vous cliquez sur **AVANCÉ**, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton.

Dans la liste des extensions disponibles, vous pouvez trouver l’extension **ECMeter_SEN0244** qui sera utilisée pour cette activité. L’extension **ECMeter_SEN0244** vous permet de faire les mesures de conductivité de l’eau. Si elle n’est pas directement disponible sur votre écran, vous pouvez les rechercher à l'aide de l'outil de recherche. Cliquez sur l’extension que vous souhaitez utiliser et un nouveau groupe de blocs apparaîtra sur l'écran principal.

**Programmer la carte**

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur DIS_L4IOT et attendez que la carte finisse de clignoter.

**Exécuter, modifier, jouer**

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET). 

**🧑‍💻 Programmer**

```jsx
Serial.attachToConsole()

forever(function () {
    Serial.writeValue("EC", input.getECValue(pins.A0, ECUnit.US_CM))
    loops.pause(1000);
})
```

---
id: etude-confort-thermique
title: Confort thermique urbain
sidebar_label: "Confort thermique urbain"
sidebar_position: 8
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><circle cx="12" cy="12" r="10" fill="#1198f0" opacity="0.1"/><rect x="10.5" y="3" width="3" height="14" rx="1.5" fill="#1198f0" opacity="0.25"/><circle cx="12" cy="18.5" r="3" fill="#1198f0"/><circle cx="12" cy="18.5" r="1.5" fill="#1198f0" opacity="0.1"/><rect x="11" y="9" width="2" height="8" rx="1" fill="#1198f0"/><line x1="15" y1="7" x2="17" y2="7" stroke="#1198f0" strokeWidth="1" opacity="0.25"/><line x1="15" y1="9" x2="16.5" y2="9" stroke="#1198f0" strokeWidth="1" opacity="0.25"/><line x1="15" y1="11" x2="17" y2="11" stroke="#1198f0" strokeWidth="1" opacity="0.25"/><line x1="15" y1="13" x2="16.5" y2="13" stroke="#1198f0" strokeWidth="1" opacity="0.25"/></svg> Confort thermique urbain

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--primary">Technologie</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| JediTrack | ~3h | Intermédiaire | 12-18 ans |

## Matériel

**Option 1 : Micro:bit + capteur DHT22** (~25 EUR par kit)
- Carte Micro:bit V2
- Capteur DHT22
- Breadboard (plaque d'essai)
- Fils de connexion mâle-mâle
- Câbles micro-USB
- Batterie externe (en option)
- Ordinateur ou tablette

**Option 2 : Capteurs Xiaomi** (~10 EUR par capteur)
- Capteurs Xiaomi Mi Temperature and Humidity Monitor 2
- Pile CR2032

**Option avancée :**
- Caméra thermique (Infiray P2 Pro ou emprunt)

</div>


<img src="/img/ressources/jeditrack/etude-confort-thermique/icone.png" alt="Confort thermique urbain" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## Mener une campagne thermique avec les jeunes : appréhender le confort par la mesure

Une campagne thermique permet aux jeunes de **comprendre concrètement les enjeux énergétiques** de leur quotidien. En mesurant température et humidité dans différents espaces, ils développent une **approche scientifique** des questions environnementales tout en acquérant des **compétences techniques** transférables.

Le confort thermique et la consommation énergétique des bâtiments représentent des enjeux majeurs de notre époque. Selon l'ADEME, **le chauffage représente 66% de la consommation énergétique des logements français**. Les **inégalités de confort thermique** touchent particulièrement les jeunes : **3,5 millions de ménages** souffrent de précarité énergétique, et **20% des 18-29 ans** déclarent avoir froid chez eux en hiver faute de moyens financiers. Les **pertes thermiques** dues à une mauvaise isolation peuvent représenter jusqu'à **30% des dépenses de chauffage** d'un foyer. Une sensibilisation précoce aux enjeux thermiques permet de former des citoyens conscients des liens entre habitat, énergie et climat, tout en développant des compétences techniques transférables.

La température et l'humidité sont des **paramètres physiques fondamentaux** qui influencent notre confort quotidien. Bien que souvent perçues comme des données évidentes, elles révèlent en réalité des phénomènes complexes liés à l'isolation, à la ventilation et à l'efficacité énergétique des bâtiments.

La température se mesure en **degrés Celsius (°C)** et l'humidité en **pourcentage (%)**, avec des seuils de confort qui varient selon les situations :

- **18-22°C et 40-60% d'humidité** : zone de confort optimal pour l'habitat
- **16-18°C** : température acceptable pour les chambres la nuit
- **20-24°C** : idéal pour les espaces de vie et de travail
- **Plus de 25°C ou moins de 16°C** : inconfort thermique notable
- **Humidité &gt;70% ou &lt;30%** : problèmes de condensation ou sécheresse

Les **variations thermiques** dans un bâtiment révèlent souvent des défauts d'isolation, des ponts thermiques ou des problèmes de ventilation qui impactent à la fois le confort des occupants et leur facture énergétique.

Les **déséquilibres thermiques chroniques** peuvent avoir des effets sur la santé et le bien-être :

- **Inconfort et fatigue** liés aux écarts de température trop importants
- **Problèmes respiratoires** causés par une humidité inadaptée
- **Difficultés de concentration** dans des espaces trop chauds ou trop froids
- **Stress économique** lié aux factures de chauffage excessives

:::note[Pourquoi cibler cette thématique auprès des jeunes ?]
- **Développer l'esprit critique** des jeunes face aux enjeux énergétiques de leur quotidien
- **Favoriser l'engagement citoyen** en leur donnant les outils pour comprendre et agir sur leur environnement thermique
- **Créer du lien social** autour d'un projet collectif de mesure et d'analyse
- **Valoriser les compétences techniques** tout en sensibilisant aux enjeux de transition énergétique
- **Démocratiser l'accès aux sciences et technologies** tout en ancrant l'apprentissage dans le territoire vécu par les jeunes
- Développer l'**autonomie** dans la démarche d'investigation, **la coopération** entre pairs pour mener un projet collectif, l'**appropriation citoyenne** des outils numériques et scientifiques et la **capacité d'action** des jeunes sur leur environnement immédiat
:::

## Réaliser des mesures avec des capteurs de température et humidité

Pour réaliser une étude autour du confort thermique, nous vous proposons plusieurs outils pratiques faisant appel soit à la programmation informatique d'une carte Micro:bit, soit à l'utilisation de capteurs simples tout-en-un. Ces solutions sont particulièrement faciles d'accès et ne demandent que très peu de compétences préalables. Même si en tant qu'animateur, vous n'avez jamais utilisé la programmation par bloc, cette activité reste accessible. Réalisez-la en amont avec vos collègues pour tester et comprendre l'utilisation des outils ! Vous pourrez facilement la transposer au sein de votre structure d'animation.

### Options matérielles adaptées à votre budget

- **Option 1 : Micro:bit + capteur DHT22 (précise mais technique)**

    **Budget** : ~25 EUR par kit

    - **Carte Micro:bit V2** : 19 EUR ([consultez les prix ici](https://www.kubii.com/fr/cartes-micro-controleurs/3091-carte-microbit-bbc-v2-5051259252585.html))
    - **Capteur DHT22** : 6 EUR
    - **Avantages** : Programmation personnalisable, données horodatées, format pédagogique complet
    - **Inconvénients** : Câblage nécessaire, apprentissage de la programmation requis

    Vous pouvez acheter le kit Micro:bit V2 comprenant le câble USB et le boîtier de piles pour 21 EUR par kit ([ici](https://www.kubii.com/fr/kits-micro-controleurs/3092-kit-microbit-go-v2-5051259252592.html)), ou 177 EUR pour 10 kits ([ici](https://www.kubii.com/fr/kits-micro-controleurs/3093-kit-microbit-club-v2-5051259252615.html)).

- **Option 2 : Capteurs Xiaomi Mi Temperature and Humidity Monitor 2 (simple et efficace)**

    **Budget** : ~10 EUR par capteur

    - Capteur tout-en-un avec écran LCD
    - Connexion Bluetooth optionnelle
    - Autonomie 1 an sur pile CR2032
    - **Avantages** : Utilisation immédiate, très abordable, robuste, lecture directe
    - **Inconvénients** : Pas d'enregistrement automatique, relevés manuels nécessaires

### Mesures avec Micro:bit

#### Étape 1 : Programmer

Ouvrez l'éditeur en ligne MakeCode pour micro:bit : [https://makecode.microbit.org/#editor](https://makecode.microbit.org/#editor). Cet outil propose aux utilisateurs de programmer par bloc.

:::info[Conseil : Trente secondes pour comprendre la programmation par blocs]
La programmation "**par blocs**" est une méthode simple et visuelle pour créer des projets numériques sans avoir besoin de connaître un langage de programmation complexe. Au lieu d'écrire du code avec du texte, les jeunes utilisent des blocs de couleurs, qui ressemblent à des pièces de puzzle, pour construire des actions et des séquences logiques. Chaque bloc représente une commande ou une action, comme "faire bouger un personnage", "jouer un son" ou "compter jusqu'à 10". En les assemblant, on crée un programme qui fonctionne de manière fluide et intuitive. Cette approche permet de comprendre les bases de la programmation en manipulant des concepts de manière concrète et ludique.

La programmation par blocs est particulièrement adaptée aux débutants, car elle réduit les erreurs et les frustrations liées à l'écriture de code. Elle permet de se concentrer sur la logique et la créativité, rendant la technologie accessible et amusante, même pour ceux qui n'ont jamais programmé auparavant.

Pour un animateur, c'est une excellente façon d'introduire les jeunes à la programmation tout en les engageant dans des activités ludiques et créatives, comme créer des jeux, des animations ou raconter des histoires interactives.
:::

Pour réaliser ce programme i.e. utiliser une carte programmable pour relever la température et l'humidité dans une pièce ou un lieu donné, nous utiliserons les blocs suivants :

- Un **bloc de base "Au démarrage"** qui permet d'initialiser le programme.
- Nous souhaitons que le programme nous indique si la relève a démarré ou non (identifié par une coche si le programme fonctionne ou une croix si le programme ne tourne pas). Au démarrage, nous aurons donc une croix visible sur la carte, indiquant que le code a bien été téléchargé mais que la relève n'a pas démarré et quand nous démarreront la relève, une coche s'affichera. Pour ce faire, nous utiliserons deux **blocs de base : "montrer l'icône"**.
- Un bloc d'entrée "**Lorsque le bouton ... est pressé**" permet de déclencher une action. Ici lorsque le bouton A est cliqué, la relève démarre.
- Une boucle "**tant que (vrai ou faux) faire**" permet d'exécuter la même séquence d'action tant qu'une condition est vraie.
- Le bloc de l'**extension DHT11_DHT22 "Query data from DHT**" pour collecter les variables que nous souhaitons : la **température** et l'**humidité** via le capteur connecté à la carte. Ce bloc permet de sélectionner le type de module et lire les données.
- Le bloc de **l'extension DHT11_DHT22 "Read data"** pour lire le niveau d'humidité (en %), et la température (en Celsius).
- Un bloc "**Log data**" qui permet d'enregistrer les données dans un fichier.

Ces trois blocs (query data from DHT, read data et Datalogger) ne sont accessibles que par l'installation d'une extension. Les **extensions** dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans MakeCode. Elles ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des **extensions** pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteur et de robotique et bien plus encore. Dans les colonnes d'affichage des blocs, cliquez sur le bouton **EXTENSIONS**. Dans la liste des extensions disponibles, recherchez **l'extension Datalogger** et **DHT11_DHT22** qui seront utilisées pour cette activité. Cliquez sur l'extension que vous souhaitez utiliser et un nouveau groupe de blocs apparaîtra sur l'écran principal.

- Nous utiliserons également des blocs simples tels que **pause** et **effacer l'écran** pour s'assurer du déroulé logique du programme.

Une fois ces blocs identifiés, vous pouvez commencer à organiser vos blocs pour permettre à la carte de collecter la température et l'humidité. Testez des configurations selon ce qui vous semble logique et **utilisez le simulateur pour vérifier que votre code fait ce que vous attendez de lui**.

<img src="/img/ressources/jeditrack/etude-confort-thermique/Journe_Dcouverte_et_Exprimentation_SteamCity.png" alt="Journée Découverte et Expérimentation SteamCity - Vue des blocs disponibles" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

:::info[Ce que doit faire le code]
Voici ce que doit faire notre code : quand j'allume ma carte, une croix m'indique que le programme attend d'être lancé. J'appuie sur le bouton A. La carte m'indique qu'elle est prête à collecter des données. Après une courte pause, la coche s'efface de l'écran et la carte commence sa collecte jusqu'à ce que je l'éteigne. Durant tout ce temps, elle collecte la température et l'humidité toutes les minutes, avec un horodatage précis.
:::

***Solution à base de blocs***

<img src="/img/ressources/jeditrack/etude-confort-thermique/image.png" alt="Solution en blocs pour le programme de mesure thermique" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

***Javascript***

```javascript
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    basic.pause(200)
    basic.clearScreen()
    while (true) {
        dht11_dht22.queryData(
        DHTtype.DHT22,
        DigitalPin.P0,
        true,
        false,
        false
        )
        datalogger.log(
        datalogger.createCV("temperature", dht11_dht22.readData(dataType.temperature)),
        datalogger.createCV("humidite", dht11_dht22.readData(dataType.humidity))
        )
        basic.pause(60000)
    }
})
basic.showIcon(IconNames.No)
datalogger.includeTimestamp(FlashLogTimeStampFormat.Minutes)
```

Vous pouvez directement coller ce code dans l'espace dédié :

<img src="/img/ressources/jeditrack/etude-confort-thermique/image_1.png" alt="Espace de saisie du code Javascript dans MakeCode" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

#### Étape 2 : Câbler et connecter le capteur DHT22

Avant de programmer, il faut connecter physiquement le capteur DHT22 à la carte Micro:bit. **Nous recommandons fortement d'utiliser un capteur DHT22 avec carte PCB (3 broches)** car il est beaucoup plus simple à connecter.

**Matériel de câblage nécessaire**

- 1 capteur DHT22 avec carte PCB (3 broches) : ~6 EUR
- 1 breadboard (petite plaque d'essai) : ~2 EUR
- 3 fils de connexion mâle-mâle : ~1 EUR les 10

**Identifier les composants**

- **Micro:bit** : la carte rectangulaire avec l'écran LED
- **DHT22** : le petit capteur blanc avec 3 broches qui dépassent
- **Breadboard** : la plaque avec plein de petits trous alignés
- **Fils de connexion** : petits câbles avec des embouts métalliques aux extrémités

**Identifier les broches du capteur DHT22**

Sur votre capteur, vous verrez 3 broches avec des inscriptions :

- **VCC** ou **+** : alimentation (généralement à droite)
- **GND** ou **-** : masse (généralement à gauche)
- **DATA** ou **OUT** ou **S** : signal (généralement au centre)

**Identifier les broches de la Micro:bit**

Sur le bord inférieur de la Micro:bit, cherchez :

- **3V** : pour alimenter le capteur
- **GND** : pour la masse (il y en a plusieurs, prenez n'importe laquelle)
- **P0** : broche de signal (première broche numérotée)

**Préparation du montage**

- Posez la breadboard devant vous, trous alignés horizontalement
- Insérez délicatement le capteur DHT22 dans la breadboard (les broches doivent rentrer dans les trous). Ne forcez pas, les broches sont fragiles

**Connexions**

Prenez 3 fils de couleurs différentes si possible (pour éviter les confusions) :

- **Fil 1 - Alimentation (rouge conseillé) :**
    - Une extrémité dans le trou de la breadboard connecté à **VCC** du capteur
    - Autre extrémité dans la broche **3V** de la Micro:bit
- **Fil 2 - Masse (noir conseillé) :**
    - Une extrémité dans le trou connecté à **GND** du capteur
    - Autre extrémité dans une broche **GND** de la Micro:bit
- **Fil 3 - Signal (jaune/vert conseillé) :**
    - Une extrémité dans le trou connecté à **DATA** du capteur
    - Autre extrémité dans la broche **P0** de la Micro:bit
- **Vérifications**
    - Les 3 fils sont bien enfoncés (connexion ferme)
    - Aucun fil ne touche un autre fil
    - Le capteur est bien inséré dans la breadboard
    - Les connexions correspondent bien : VCC->3V, GND->GND, DATA->P0

:::info[Conseils pour éviter les erreurs courantes]
- **Ne pas forcer** lors de l'insertion des composants
- **Vérifier deux fois** avant de brancher l'alimentation
- **Garder les fils courts** pour éviter les emmêlements
- **Noter les couleurs utilisées** pour chaque connexion
:::

#### Étape 3 : Télécharger le code sur la carte

Une fois que votre programme fonctionne correctement sur le simulateur et que le câblage a été correctement réalisé, transférez le code sur votre carte Micro:bit :

- Connectez la carte micro:bit à l'ordinateur sur lequel vous avez réalisé le programme grâce à l'éditeur MakeCode. Une fois connectée, la carte micro:bit apparaîtra sur l'ordinateur comme un disque amovible (ex. : "MICROBIT").
- Cliquez sur « **Télécharger** » dans MakeCode pour générer un fichier .hex. Ce fichier contient le programme compilé qui permettra à la carte de fonctionner.
- Copiez le fichier .hex de votre dossier de téléchargement sur le lecteur amovible « **MICROBIT** ».
- Une fois le fichier copié, la carte redémarre automatiquement et exécute le code.

#### Étape 4 : Enregistrer et récupérer les données

Une fois programmé, placez la carte micro:bit pour collecter les données dans l'espace que vous avez choisi (une habitation par exemple). Utilisez une batterie externe pour vous assurer que votre carte collectera des données au cours d'une semaine entière par exemple - vous pouvez utiliser la batterie à piles fournie par micro:bit.

Une fois positionné, appuyez sur le bouton « A » de la carte Micro:Bit pour démarrer l'enregistrement des données via le programme.

Ce programme mesure la température et l'humidité toutes les minutes (l'intervalle peut être modifiée pour correspondre à 5 minutes, 2 fois par heure...) et compile les informations dans un "**datalogger**" depuis lequel nous pouvons télécharger un fichier .csv.

:::info[Le format CSV]
Un fichier **.csv** (Comma-Separated Values, ou valeurs séparées par des virgules) est un format de fichier texte utilisé pour stocker des données tabulaires (comme dans un tableau ou une feuille de calcul). Chaque ligne du fichier représente une ligne de données, et chaque valeur dans une ligne est séparée par un délimiteur (souvent une virgule, mais parfois un point-virgule ou une tabulation). Il est possible de récupérer les données d'un fichier .csv dans un tableur type Excel ou LibreOffice Calc. Dans Excel, ouvrez le logiciel, cliquez sur **Fichier > Ouvrir**, sélectionnez le fichier .csv, et configurez les délimiteurs si nécessaire via l'outil d'importation. Dans LibreOffice Calc, suivez un processus similaire : cliquez sur **Fichier > Ouvrir**, sélectionnez le fichier, et utilisez l'assistant d'importation pour choisir le délimiteur (par exemple, virgule ou point-virgule). Dans les deux cas, les données s'affichent sous forme de tableau, prêtes à être analysées.
:::

Une fois la période de collecte terminée, vous pouvez récupérer vos données à partir du fichier **appelé « MY_DATA.HTM », disponible sur le lecteur micro:bit** (comme si vous récupériez un fichier sur une clé USB). Copiez-le sur votre ordinateur et renommez-le pour bien identifier les données qui ont été collectées.

Après avoir copié et renommé le fichier, **supprimez le fichier MY_DATA.HTM de la Micro:Bit** pour libérer de l'espace et permettre un nouvel enregistrement de données. Une fois ouvert, les fichiers de données seront accessibles au format HTML. Ils fourniront toutes les données collectées et vous permettront de les télécharger au format .csv.

### Utilisation simplifiée des capteurs Xiaomi

#### Fonctionnalités du capteur

Le capteur fonctionne de manière autonome avec une pile CR2032 qui assure une autonomie d'environ un an. L'écran LCD affiche simultanément la température actuelle en degrés Celsius et l'humidité relative en pourcentage. Le dispositif mémorise automatiquement les valeurs minimales et maximales depuis sa dernière remise à zéro.

#### Récupération des données

Pour accéder aux données, connectez-vous sur [**heatbuster.lesemulsionneurs.fr**](https://heatbuster.lesemulsionneurs.fr/). Cliquez sur "**Associer**" et sélectionnez le nom de votre capteur dont le format sera similaire à "LYWSD03,ATC". La connexion s'établit via Bluetooth entre le capteur et votre appareil, permettant de synchroniser automatiquement les données historiques stockées dans la mémoire du capteur.

Cette plateforme permet de visualiser les tendances thermiques, de comparer les mesures entre différents capteurs et de choisir des périodes d'analyse spécifiques selon les besoins du projet pédagogique.

#### Avantages pour l'animation

Cette simplicité d'utilisation permet une appropriation immédiate par tous les participants, quel que soit leur niveau technique. Les jeunes peuvent consulter les données en temps réel et observer directement l'impact de leurs actions (ouverture d'une fenêtre, allumage du chauffage) sur les mesures affichées. L'absence de programmation ou de câblage élimine les obstacles techniques et permet de se concentrer directement sur l'observation et l'analyse des phénomènes thermiques.

Le format compact et la robustesse du dispositif facilitent son transport et son utilisation dans différents environnements sans risque de détérioration du matériel pédagogique.

:::info[Quelques conseils pour comprendre les mesures thermiques]
- **Températures idéales selon les pièces** : Pièces à vivre (salon, bureau) 19-21°C, chambres 16-19°C pour un bon sommeil, pièces humides (salle de bain, cuisine) 20-22°C.
- **Humidité optimale** : Entre 40 et 60% dans toutes les pièces.
- **Ce qui est normal** : de petites différences entre pièces (1-2°C).
- **Ce qui doit alerter** : de gros écarts (plus de 5°C) ou une humidité très élevée (plus de 70%).
:::

## Aller plus loin - Analyser avec une caméra thermique

Pour compléter l'approche quantitative des capteurs, les caméras thermiques offrent une dimension visuelle qui permet d'identifier immédiatement les zones de pertes thermiques. Cette technologie, autrefois réservée aux professionnels, devient accessible grâce aux solutions smartphone et constitue un excellent outil de sensibilisation et d'analyse pour les jeunes.

### Pourquoi utiliser une caméra thermique ?

Une **caméra thermique** est un outil utile pour repérer les zones de **perte de chaleur** dans les bâtiments. En capturant des **images infrarouges**, elle met en évidence les différences de température à la surface des murs, des fenêtres ou des toitures. Ces informations permettent d'**identifier les points faibles de l'isolation**, comme les ponts thermiques, les infiltrations d'air ou les matériaux dégradés, qui sont souvent invisibles à l'oeil nu.

### Comment fonctionne une caméra thermique ?

Les **caméras thermiques** détectent le **rayonnement infrarouge** émis par les objets en fonction de leur température. Elles traduisent ce rayonnement en une **image en fausses couleurs**, où chaque teinte correspond à une plage de température donnée : **Rouge / Jaune** : indiquent des zones plus chaudes, souvent associées à des pertes de chaleur - **Bleu / Violet** : signalent des zones plus froides, pouvant révéler des infiltrations d'air ou une isolation insuffisante.

Les utilisateurs peuvent analyser ces images pour **interpréter les variations thermiques** observées et **identifier les zones nécessitant des améliorations**.

### Étapes pour une utilisation efficace d'une caméra thermique

- **Préparation :** Vérifiez que la caméra thermique est bien calibrée. Choisissez un moment où la différence de température entre l'intérieur et l'extérieur est marquée, comme un matin froid d'hiver ou un après-midi chaud d'été.
- **Capture d'images :** Scannez les murs, les fenêtres, les portes et les toits. Maintenez la caméra de manière stable et conservez une distance constante par rapport aux surfaces observées.
- Évitez de diriger la caméra directement vers des sources de chaleur (radiateurs, appareils électroniques), car cela peut perturber les relevés.
- **Analyse des images :** Repérez les zones rouges ou jaunes sur les murs extérieurs, souvent associées à des pertes de chaleur. Identifiez les zones bleues à proximité des fenêtres ou des portes, qui peuvent indiquer des infiltrations d'air.
- **Documentation des observations :** Notez, pour chaque image, le lieu, les conditions environnementales (température extérieure, météo) et les remarques pertinentes. Si des améliorations ont été apportées, comparez les images avant et après pour observer les changements.

:::caution[Conseils et précautions]
Les conditions météorologiques influencent fortement la qualité des relevés. Il est préférable d'éviter de capturer des images en plein soleil ou par vent fort, car ces facteurs peuvent fausser les mesures. Lors de la prise de vue, il est recommandé de garder la caméra perpendiculaire à la surface observée afin de limiter les distorsions. À l'intérieur, il convient de réduire les sources de lumière chaude susceptibles d'interférer avec les relevés infrarouges. Concernant la précision des températures affichées, il faut garder à l'esprit qu'une caméra thermique est surtout conçue pour détecter les différences de température (points chauds ou froids), mais qu'elle ne fournit pas une mesure absolue fiable. Plusieurs facteurs peuvent influencer la précision : le réglage de l'émissivité (le coefficient d'émission doit correspondre à la nature de la surface mesurée), la distance entre l'objet et la caméra, la température ambiante et la différence thermique entre l'environnement et l'appareil lui-même, la qualité de l'objectif utilisé, ainsi que la plage de mesure sélectionnée (large plage ou haute résolution).
:::

### Choisir la bonne caméra thermique

Le choix d'une caméra thermique pour cette activité dépend des ressources disponibles. Les caméras thermiques présentent une grande diversité en termes de coût, de fonctionnalités et de portabilité. Il est recommandé d'explorer les solutions locales, telles que l'emprunt d'appareils auprès des collectivités territoriales, d'organisations environnementales ou d'universités. Dans de nombreuses villes, des programmes de prêt d'équipements d'imagerie thermique existent, permettant ainsi de limiter les dépenses tout en accédant à des outils performants.

Pour les structures à la recherche d'options à la fois abordables et accessibles, les caméras thermiques compatibles avec les smartphones, comme l'**Infiray P2 Pro**, constituent une solution pratique. Ces dispositifs compacts se connectent directement à un smartphone Android et permettent de transformer celui-ci en outil d'imagerie thermique. Leur utilisation est simple et leur format portable les rend adaptés aux contextes éducatifs. Bien qu'ils ne disposent pas des fonctionnalités avancées des caméras thermiques autonomes, ces appareils répondent efficacement aux besoins d'activités pédagogiques où la facilité d'utilisation et la mobilité sont des critères importants.

## Idées de projets d'animation

| **Format "Découverte" (3 séances de 2h) - 8-12 ans** | **Format "Enquête habitat" (1 semaine) - 13-17 ans** | **Format "Animation ponctuelle" (1 séance de 3h) - 10-16 ans** | **Format "Imagerie thermique" (2 séances de 2h) - 12-17 ans** |
| --- | --- | --- | --- |
| **"Thermomètres détectives"** | **"Analystes énergétiques"** | **"Confort et capteurs"** | **"Chasseurs de chaleur"** |
| **Séance 1** : Manipulation libre des capteurs + comparaisons intérieur/extérieur **Séance 2** : Installation des capteurs chez 5-6 participants volontaires + formation au relevé quotidien **Séance 3** : Collecte des données + création d'une "carte thermique" de leurs lieux de vie | **Jour 1** : Formation technique + apprentissage du câblage et programmation + tests personnalisés **Jour 2-3-4** : Déploiement terrain chez les participants + suivi quotidien **Jour 5** : Récupération et traitement des fichiers .csv + analyse graphique + conclusions | **1h** : Découverte température/humidité + programmation guidée ou utilisation capteurs Xiaomi **1h** : Tests temps réel dans différents espaces + session caméra thermique **1h** : Analyse immédiate + réflexions sur confort et économies d'énergie | **Séance 1** : Formation à l'utilisation de la caméra thermique + démonstration sur différentes surfaces (métal, bois, isolation) + capture d'images test sur le bâtiment d'accueil **Séance 2** : Enquête thermique complète de la structure d'animation + analyse des images + identification des zones de déperdition + propositions d'amélioration à présenter à l'équipe de direction |

### Checklist pour les animateurs

#### En amont
**Préparation du matériel technique**
- Capteurs choisis selon budget et âge du public (Xiaomi ou Micro:bit + DHT22)
- Piles de rechange pour capteurs Xiaomi (CR2032)
- Caméra thermique réservée/empruntée si prévue dans le projet
- Ordinateurs/tablettes pour exploitation données Micro:bit
- Câbles USB si utilisation Micro:bit
- Test préalable de tout le matériel (impératif !)

**Préparation pédagogique :**
- Supports visuels sur température/humidité/confort/isolation
- Tableurs préparés pour saisie données
- Carnets de bord personnalisés selon l'âge
- Exemples d'images thermiques pour expliquer la démarche
- Graphiques d'exemples pour guider l'analyse

**Autorisations :**
- Accord familial pour installation capteurs à domicile
- Autorisation pour prise d'images thermiques (respect vie privée)
- Contact services techniques locaux (comparaison données)
- Partenariat possible avec Point Info Énergie local

#### Pendant l'animation
**Gestion pédagogique :**
- Groupes maximum 4 personnes par capteur/micro:bit
- Alternance manipulation/analyse toutes les 30 min
- Rotation pour l'utilisation de la caméra thermique si une seule disponible
- Valorisation systématique des hypothèses avant vérification
- Lien constant avec le vécu des participants

**Accompagnement technique :**
- Vérification placement capteurs (éviter biais)
- Formation rapide à l'utilisation caméra thermique
- Support individuel pour lecture/interprétation données
- Encouragement à la formulation d'hypothèses personnelles

#### En aval
**Récupération des données :**
- Récupération systématique fichiers .csv (Micro:bit)
- Saisie données capteurs Xiaomi sur tableur collectif
- Sauvegarde des images thermiques avec annotations
- Sauvegarde sécurisée (double stockage)

**Exploitation pédagogique :**
- Création graphiques simples et lisibles
- Corrélation données capteurs/images thermiques
- Comparaison avec seuils de confort (18-22°C, 40-60% humidité)
- Identification des zones problématiques via caméra thermique
- Formulation conclusions partagées et propositions d'amélioration

#### Dépannage express
**Capteurs Xiaomi :**
- Pile faible : remplacement pile CR2032
- Affichage flou : nettoyage écran avec chiffon sec
- Valeurs aberrantes : éloigner sources chaleur/humidité

**Micro:bit + DHT22 :**
- Pas de données : vérifier connexions câblage
- Valeurs -999 : repositionner capteur, relancer programme
- Fichier .csv illisible : re-télécharger depuis MY_DATA.HTM

**Caméra thermique :**
- Image floue : recalibrage selon instructions fabricant
- Couleurs incohérentes : ajuster plage températures et palette
- Application plante : redémarrage smartphone
- Reflets parasites : éviter surfaces métalliques brillantes

## Références

- [**ADEME - Maîtrise de l'énergie dans le bâtiment**](https://www.ademe.fr/expertises/batiment) - Données officielles sur la consommation énergétique des logements français
- [**ADEME - Guide de l'isolation**](https://www.ademe.fr/particuliers-eco-citoyens/habitation/bien-choisir-equipements/isolation) - Comprendre les enjeux de l'isolation thermique
- [**Observatoire National de la Précarité Énergétique**](https://onpe.org/) - Statistiques et analyses sur les inégalités de confort thermique
- [**Micro:bit Educational Foundation**](https://microbit.org/fr/) - Ressources pédagogiques pour l'utilisation de micro:bit dans des projets environnementaux
- [**Point Info Énergie**](https://www.faire.gouv.fr/trouver-un-conseiller) - Réseau de conseillers pour accompagner les projets d'efficacité énergétique
- [**Thermographie.fr**](https://www.thermographie.fr/) - Ressources techniques sur l'imagerie thermique dans le bâtiment

---

*Cette fiche fait partie du projet [JediTrack](/projets/jeditrack), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

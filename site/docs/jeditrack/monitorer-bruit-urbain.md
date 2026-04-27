---
id: monitorer-bruit-urbain
title: Mesurer le bruit urbain
sidebar_label: "Mesurer le bruit urbain"
sidebar_position: 7
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><circle cx="12" cy="12" r="10" fill="#1198f0" opacity="0.1"/><circle cx="8" cy="12" r="3" fill="#1198f0" opacity="0.25"/><path d="M11 12 Q14 6 17 12 Q14 18 11 12Z" fill="#1198f0" opacity="0.25"/><path d="M14 12 Q18 4 22 12 Q18 20 14 12Z" fill="none" stroke="#1198f0" strokeWidth="1.2"/><line x1="3" y1="12" x2="5" y2="12" stroke="#1198f0" strokeWidth="1.5"/><line x1="3" y1="9" x2="5" y2="9" stroke="#1198f0" strokeWidth="1" opacity="0.25"/><line x1="3" y1="15" x2="5" y2="15" stroke="#1198f0" strokeWidth="1" opacity="0.25"/></svg> Mesurer le bruit urbain

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--primary">Technologie</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| JediTrack | ~3h | Intermédiaire | 12-18 ans |

## Matériel

- Cartes Micro:bit V2 (avec capteur de niveau sonore intégré)
- Câbles micro-USB
- Batterie externe (boîtier de piles micro:bit, en option)
- Ordinateur ou tablette avec accès internet
- Environnement de programmation : [MakeCode](https://makecode.microbit.org/#editor)

</div>


<img src="/img/ressources/jeditrack/monitorer-bruit-urbain/icone.png" alt="Mesurer le bruit urbain" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## Le bruit environnemental et l'animation jeunesse : sensibiliser par la pratique

Le bruit, défini comme une sensation auditive désagréable ou dérangeante, est omniprésent dans notre quotidien et constitue une source importante de pollution environnementale. Selon l'Agence européenne pour l'environnement, environ **95 millions de personnes** sont exposées à des niveaux nocifs de bruit du trafic routier. Au **moins 20 % de la population urbaine** est exposée à des niveaux considérés comme nocifs pour la santé. Dans de nombreuses villes, ce pourcentage peut atteindre 50 % de la population urbaine. On estime qu'au moins **18 millions de personnes** sont fortement gênées et 5 millions souffrent de troubles du sommeil dus à une exposition à long terme au bruit des transports dans l'UE. En outre, on estime que l'exposition à long terme au bruit des transports provoque environ 11 000 décès prématurés et 40 000 nouveaux cas de cardiopathie ischémique.

Le bruit est une **vibration sonore** perçue par l'oreille humaine. Bien que certains sons soient perçus comme agréables ou neutres, le bruit devient nuisible lorsqu'il est ressenti comme **désagréable**, **imprévisible** ou **incontrôlable**. Ces caractéristiques peuvent transformer le bruit en facteur de **stress** et d'**insatisfaction** dans le cadre de vie ou de travail.

Il est mesuré en **décibels (dB)**, une unité qui indique l'intensité du son, et cette dernière varie selon les situations :

- **30 dB** : endroit calme (chambre, salle de repos).
- **65 dB** : rue animée ou salle de classe.
- **85 dB** : seuil de danger pour l'oreille (aboiements, bébé qui pleure).
- **100 dB et plus** : concerts, marteau-piqueur, sirène d'ambulance.

Un **niveau sonore acceptable pour un travail nécessitant une attention soutenue** se situe entre **45 et 55 dB**.

Le bruit, particulièrement lorsqu'il est **chronique**, peut avoir de nombreux effets néfastes sur la santé :

- **Stress, irritabilité et anxiété**, pouvant parfois mener à l'**agressivité** ou la **dépression**.
- Altération de la **concentration**, de la **mémorisation** et de la **compréhension** du langage parlé ou écrit.
- Entrave à la **communication** et perturbation des **tâches cognitives**, notamment celles faisant appel à la **mémoire à court terme**.

Ces impacts sont particulièrement notables dans les environnements d'apprentissage et de travail, où le bruit peut **compromettre la qualité de l'éducation** et **réduire la productivité** des employés.

Le bruit **excessif et prolongé** affecte négativement la santé physique et mentale. Il peut engendrer des **troubles du sommeil**, une **gêne chronique**, et des problèmes **cardiovasculaires**. Selon l'Agence Européenne pour l'Environnement (AEE), **le bruit ambiant dû au trafic routier** est l'une des principales sources de pollution sonore. Environ 20 % de la population européenne -- plus de 100 millions de personnes -- est exposée à des niveaux sonores jugés dangereux pour la santé. L'AEE estime que chaque année, l'exposition prolongée au bruit contribue à environ **48 000 nouveaux cas de cardiopathies** et **12 000 décès prématurés**. De plus, **22 millions de personnes** subissent une gêne chronique importante, et **6,5 millions** souffrent de graves troubles du sommeil.

Le bruit affecte également la santé cognitive, surtout chez les enfants. Par exemple, le bruit des avions a été associé à des **troubles de la lecture chez environ 12 500 écoliers**. Bien que la pollution atmosphérique cause davantage de décès, le bruit a un impact plus immédiat sur la **qualité de vie** et le **bien-être mental**, d'après des études de l'OMS.

:::note[Pourquoi cibler cette thématique auprès des jeunes ?]
- **Développer l'esprit critique** des jeunes face aux problématiques environnementales de leur quotidien
- **Favoriser l'engagement citoyen** en leur donnant les outils pour comprendre et agir sur leur environnement
- **Créer du lien social** autour d'un projet collectif de mesure et d'analyse
- **Valoriser les compétences techniques** tout en sensibilisant aux enjeux de santé publique
- **Démocratiser l'accès aux sciences et technologies** tout en ancrant l'apprentissage dans le territoire vécu par les jeunes.
- Développer l'**autonomie** dans la démarche d'investigation, **la coopération** entre pairs pour mener un projet collectif, l'**appropriation citoyenne** des outils numériques et scientifiques et la **capacité d'action** des jeunes sur leur environnement immédiat
:::

## Programmer une carte Micro:bit pour mesurer le niveau sonore

Pour réaliser une étude autour du bruit, nous vous proposons un outil pratique faisant appel à la programmation informatique d'une carte Micro:bit. Cette carte est particulièrement facile d'accès et ne demande que très peu de compétences préalables. Même si en tant qu'animateur, vous n'avez jamais utilisé la programmation par bloc, cette activité reste accessible. Réalisez la en amont avec vos collègues pour tester et comprendre l'utilisation des outils ! Vous pourrez facilement la transposer au sein de votre structure d'animation.

### Matériel et outils nécessaires

Pour programmer une carte micro:bit pour mesurer le niveau sonore, vous aurez besoin de :

- **Cartes Micro:bit V2 et ses capteurs intégrés :** La carte programmable principale incluant un capteur de niveau sonore intégré - Environ 19 EUR par micro:bit ([consultez les prix ici](https://www.kubii.com/fr/cartes-micro-controleurs/3091-carte-microbit-bbc-v2-5051259252585.html)). Vous pouvez acheter le kit Micro:bit V2 comprenant le câble USB et le boîtier de piles pour 21 EUR par kit ([ici](https://www.kubii.com/fr/kits-micro-controleurs/3092-kit-microbit-go-v2-5051259252592.html)), ou 177 EUR pour 10 kits ([ici](https://www.kubii.com/fr/kits-micro-controleurs/3093-kit-microbit-club-v2-5051259252615.html)).
- **Câbles micro-USB :** pour alimenter et programmer le micro:bit
- **Batterie externe (en option) :** Pour un fonctionnement portable si la micro:bit doit être détachée, vous pouvez trouver le boitier de piles officielle de micro:bit disponible à l'achat pour environ 2,20 EUR par pack [ici](https://www.kubii.com/fr/alimentations/4237-1913-support-de-pile-officiel-pour-microbit-3272496317253.html)
- **Ordinateur ou tablette :** pour écrire et télécharger le code.
- **Environnement de programmation :** [Éditeur en ligne MakeCode](https://makecode.microbit.org/#editor)

### Programmation et utilisation de la carte

#### Étape 1 : Programmer

Ouvrez l'éditeur en ligne MakeCode pour micro:bit : [https://makecode.microbit.org/#editor](https://makecode.microbit.org/#editor). Cet outil propose aux utilisateurs de programmer par bloc.

:::info[Conseil : Trente secondes pour comprendre la programmation par blocs]
La programmation "**par blocs**" est une méthode simple et visuelle pour créer des projets numériques sans avoir besoin de connaître un langage de programmation complexe. Au lieu d'écrire du code avec du texte, les jeunes utilisent des blocs de couleurs, qui ressemblent à des pièces de puzzle, pour construire des actions et des séquences logiques. Chaque bloc représente une commande ou une action, comme "faire bouger un personnage", "jouer un son" ou "compter jusqu'à 10". En les assemblant, on crée un programme qui fonctionne de manière fluide et intuitive. Cette approche permet de comprendre les bases de la programmation en manipulant des concepts de manière concrète et ludique.

La programmation par blocs est particulièrement adaptée aux débutants, car elle réduit les erreurs et les frustrations liées à l'écriture de code. Elle permet de se concentrer sur la logique et la créativité, rendant la technologie accessible et amusante, même pour ceux qui n'ont jamais programmé auparavant.

Pour un animateur, c'est une excellente façon d'introduire les jeunes à la programmation tout en les engageant dans des activités ludiques et créatives, comme créer des jeux, des animations ou raconter des histoires interactives.
:::

Pour réaliser ce programme i.e. utiliser une carte programmable pour relever les niveaux de décibel dans une pièce ou un lieu donné, nous utiliserons les blocs suivants :

- Un **bloc de base "Au démarrage"** qui permet d'initialiser le programme.
- Nous souhaitons que le programme nous indique si la relève a démarré ou non (identifié par une coche si le programme fonctionne ou une croix si le programme ne tourne pas). Au démarrage, nous aurons donc une croix visible sur la carte, indiquant que le code a bien été téléchargé mais que la relève n'a pas démarré et quand nous démarreront la relève, une coche s'affichera. Pour ce faire, nous utiliserons deux **blocs de base : "montrer l'icône"**.
- Un bloc d'entrée "**Lorsque le bouton ... est pressé**" permet de déclencher une action. Ici lorsque le bouton A est cliqué, la relève démarre.
- Une boucle "**tant que (vrai ou faux) faire**" permet d'exécuter la même séquence d'action tant qu'une condition est vraie.
- Un bloc d'entrée "**Niveau sonore**" pour collecter la variable que nous souhaitons, ici l'intensité du son via le microphone.
- Un bloc "**Log data**" qui permet d'enregistrer les données dans un fichier. Ce bloc n'est accessible que par l'installation d'une extension. Les **extensions** dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans MakeCode. Elles ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des **extensions** pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteur et de robotique et bien plus encore. Dans les colonnes d'affichage des blocs, cliquez sur le bouton **EXTENSIONS**. Dans la liste des extensions disponibles, recherchez **l'extension Datalogger** qui sera utilisée pour cette activité. Cliquez sur l'extension que vous souhaitez utiliser et un nouveau groupe de blocs apparaîtra sur l'écran principal.
- Nous utiliserons également des blocs simples tels que **pause** et **effacer l'écran** pour s'assurer du déroulé logique du programme.

<img src="/img/ressources/jeditrack/monitorer-bruit-urbain/Journe_Dcouverte_et_Exprimentation_SteamCity.png" alt="Journée Découverte et Expérimentation SteamCity - Vue des blocs disponibles" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

Une fois ces blocs identifiés, vous pouvez commencer à organiser vos blocs pour permettre à la carte de collecter le niveau sonore. Testez des configurations selon ce qui vous semble logique et **utilisez le simulateur pour vérifier que votre code fait ce que vous attendez de lui**.

:::info[Ce que doit faire le code]
Voici ce que doit dire notre code : quand j'allume ma carte, une croix m'indique que le programme attend d'être lancé. J'appuie sur le bouton A. La carte m'indique qu'elle est prête à collecter des données. Après une courte pause, la coche s'efface de l'écran et la carte commence sa collecte jusqu'à ce que j'appuie sur un autre bouton que le bouton A. Durant tout ce temps, elle collecte le niveau sonore, dans un tableau qui me donnera les informations suivantes : toutes les 5 000 secondes, exprimées en minutes, la carte fournira le "niveau sonore".
:::

***Solution à base de blocs***

<img src="/img/ressources/jeditrack/monitorer-bruit-urbain/image.png" alt="Solution en blocs pour le programme de mesure sonore" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

***Javascript***

```javascript
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    basic.pause(200)
    basic.clearScreen()
    while (true) {
        datalogger.log(datalogger.createCV("niveau sonore", input.soundLevel()))
        basic.pause(5000)
    }
})
basic.showIcon(IconNames.No)
datalogger.includeTimestamp(FlashLogTimeStampFormat.Minutes)
```

Vous pouvez directement coller ce code dans l'espace dédié :

<img src="/img/ressources/jeditrack/monitorer-bruit-urbain/image_1.png" alt="Espace de saisie du code Javascript dans MakeCode" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

#### Étape 2 : Télécharger le code sur la carte

Une fois que votre programme fonctionne correctement sur le simulateur, transférez-le sur votre carte Micro:bit :

- Connectez la carte micro:bit à l'ordinateur sur lequel vous avez réalisé le programme grâce à l'éditeur MakeCode. Une fois connectée, la carte micro:bit apparaîtra sur l'ordinateur comme un disque amovible (ex. : "MICROBIT").
- Cliquez sur « **Télécharger** » dans MakeCode pour générer un fichier .hex. Ce fichier contient le programme compilé qui permettra à la carte de fonctionner.
- Copiez le fichier .hex de votre dossier de téléchargement sur le lecteur amovible « **MICROBIT** ».
- Une fois le fichier copié, la carte redémarre automatiquement et exécute le code.

#### Étape 3 : Enregistrer et récupérer les données

Une fois programmé, placez la carte micro:bit pour collecter les données dans l'espace que vous avez choisi (habitation, rue, quartier, lieu de vie...). Utilisez une batterie externe pour vous assurer que votre carte collectera des données au cours de la semaine par exemple - vous pouvez utiliser la batterie à piles fournie par micro:bit.

Une fois positionné, appuyez sur le bouton « A » de la carte Micro:Bit pour démarrer l'enregistrement des données via le programme.

Ce programme mesure le niveau sonore ambiant (en décibels) toutes les 5 secondes (l'intervalle peut être modifiée pour correspondre à 1 minute, 5 minutes, 2 fois par heure...) et compile les informations dans un "**datalogger**" depuis lequel nous pouvons télécharger un fichier .csv.

:::info[Le format CSV]
Un fichier **.csv** (Comma-Separated Values, ou valeurs séparées par des virgules) est un format de fichier texte utilisé pour stocker des données tabulaires (comme dans un tableau ou une feuille de calcul). Chaque ligne du fichier représente une ligne de données, et chaque valeur dans une ligne est séparée par un délimiteur (souvent une virgule, mais parfois un point-virgule ou une tabulation). Il est possible de récupérer les données d'un fichier .csv dans un tableur type Excel ou LibreOffice Calc. Dans Excel, ouvrez le logiciel, cliquez sur **Fichier > Ouvrir**, sélectionnez le fichier .csv, et configurez les délimiteurs si nécessaire via l'outil d'importation. Dans LibreOffice Calc, suivez un processus similaire : cliquez sur **Fichier > Ouvrir**, sélectionnez le fichier, et utilisez l'assistant d'importation pour choisir le délimiteur (par exemple, virgule ou point-virgule). Dans les deux cas, les données s'affichent sous forme de tableau, prêtes à être analysées.
:::

Une fois la période de collecte terminée, vous pouvez récupérer vos données à partir du fichier **appelé « MY_DATA.HTM », disponible sur le lecteur micro:bit** (comme si vous récupériez un fichier sur une clé USB). Copiez-le sur votre ordinateur et renommez-le pour bien identifier les données qui ont été collectées.

Après avoir copié et renommé le fichier, **supprimez le fichier MY_DATA.HTM de la Micro:Bit** pour libérer de l'espace et permettre un nouvel enregistrement de données. Une fois ouvert, les fichiers de données seront accessibles au format HTML. Ils fourniront toutes les données collectées et vous permettront de les télécharger au format .csv.

## Idées de projets d'animation

| **Format "Découverte" (2-3 séances de 2h) - 8-12 ans** | **Format "Enquête de quartier" (1 semaine - idéal projet de vacances, 1 à 2h par jour) - 13-17 ans** | **Format "Projet long terme" (1 mois) - Tous âges** | **Format "Animation ponctuelle" (1 séance de 3h) - 10-16 ans** |
| --- | --- | --- | --- |
| **"Les petits détectives du bruit"** | **"Cartographes du silence"** | **"Observatoire citoyen du bruit"** | **"Micro:bit et décibels"** |
| **Séance 1** : Sensibilisation au bruit + première programmation collective **Séance 2** : Déploiement de la mesure dans différents lieux de la structure **Séance 3** : Récupération des données + création d'une "carte du bruit" de l'établissement | **Jour 1** : Formation technique + programmation personnalisée **Jour 2-3** : Collecte de données chez les participants (domicile, trajets, lieux de vie) **Jour 4** : Compilation et analyse collective **Jour 5 - Restitution** : Présentation aux familles/élus locaux | **Semaine 1** : Formation et sensibilisation **Semaine 2-3** : Collecte de données sur plusieurs sites **Semaine 4** : Analyse, comparaison avec données officielles, propositions d'actions | **1h** : Découverte du bruit et de ses effets + programmation guidée **1h** : Tests en temps réel dans différents espaces **1h** : Analyse immédiate des résultats + conclusions collectives |

### Checklist pour les animateurs

#### En amont
**Préparation du matériel technique**
- Micro:bit V2 (1 par groupe de 3-4 ou 1 pour tous selon le format)
- Câbles micro-USB
- Ordinateur/tablette avec accès internet
- Batteries/piles de rechange
- Testez le matériel au préalable !

**Préparation pédagogique :**
- Appropriez-vous le programme en amont (30 min de test personnel)
- Préparez des supports visuels sur les effets du bruit
- Identifiez les lieux de mesure possibles dans votre structure
- Prévoyez des activités "de secours" si problème technique

**Autorisations :**
- Accord de direction pour déployer le matériel
- Autorisation parentale si collecte à domicile
- Contact avec services techniques locaux si mesures extérieures

#### Pendant l'animation
**Gestion de groupe :**
- Groupes de 3-4 maximum par micro:bit
- Alternance théorie/pratique toutes les 20-30 min
- Valorisez les hypothèses des jeunes avant de donner les "bonnes" réponses

**Accompagnement technique :**
- Faites tester le simulateur avant le vrai matériel
- Encouragez les erreurs et ajustements
- Prévoyez un "expert" par groupe pour aider les autres

**Sécurité :**
- Manipulation douce du matériel (coût !)
- Pas de mesures dans des lieux dangereux
- Respect des espaces privés/publics

#### En aval
**Récupération des données :**
- Sauvegarde systématique des fichiers MY_DATA.HTM
- Renommage clair (lieu_date_heure.htm)
- Suppression des fichiers de la carte pour prochaine utilisation

**Exploitation pédagogique :**
- Conversion en fichiers .csv pour analyse
- Création de graphiques simples
- Comparaison avec les seuils officiels (30-100 dB)
- Lien avec le ressenti des participants

**Valorisation :**
- Photos/vidéos du projet (avec autorisations)
- Restitution prévue (parents, partenaires, réseaux sociaux)
- Bilan avec les participants
- Conservation d'une trace du projet

#### Dépannage express
**Si la carte ne répond pas :**
- Vérifier la connexion USB
- Redémarrer la micro:bit (bouton reset)
- Re-télécharger le fichier .hex

**Si les mesures semblent aberrantes :**
- Expliquer que le capteur mesure une valeur relative (0-255), pas des dB réels
- Utiliser les variations plutôt que les valeurs absolues
- Comparer les environnements entre eux

**Si les jeunes décrochent :**
- Recentrer sur leur vécu ("où avez-vous mal aux oreilles ?")
- Proposer des défis ("trouvez le lieu le plus silencieux")
- Lier à l'actualité (nuisances sonores locales)

## Références

- [Environmental Noise in Europe -- 2020](https://www.eea.europa.eu/publications/environmental-noise-in-europe) - Un rapport complet de l'Agence européenne pour l'environnement sur les tendances, les sources et les impacts de la pollution sonore en Europe.
- [Noise](https://www.eea.europa.eu/en/topics/in-depth/noise?activeTab=fa515f0c-9ab0-493c-b4cd-58a32dfaae0a) - Explore le bruit en tant que problème environnemental, ses effets sur la santé et les stratégies d'atténuation.
- [NoiseCapture Interactive Community Map](https://noise-planet.org/map_noisecapture/index.html#3/30.30/9.84) - Une initiative scientifique citoyenne permettant aux utilisateurs de contribuer à une carte mondiale de la pollution sonore en enregistrant les niveaux de bruit locaux.
- [EUR-Lex - Directive 2002/49/EC on Environmental Noise](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32002L0049) - La directive européenne établissant un cadre pour l'évaluation et la gestion du bruit ambiant.
- [Micro:bit Educational Foundation](https://microbit.org/fr/) - Fournit des ressources et des idées de projets pour l'utilisation de micro:bit dans des contextes éducatifs, y compris des projets de surveillance environnementale.

---

*Cette fiche fait partie du projet [JediTrack](/projets/jeditrack), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

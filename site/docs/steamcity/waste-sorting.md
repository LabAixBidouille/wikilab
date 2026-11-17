---
id: waste-sorting
title: Trier les déchets grâce à la reconnaissance visuelle
sidebar_label: "Trier les déchets grâce à la reconnaissance visuelle"
sidebar_position: 22
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Trier les déchets grâce à la reconnaissance visuelle

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Biologie</span>
  <span className="badge badge--info">Intelligence artificielle et nouvelles technologies</span>
  <span className="badge badge--secondary">Environnement, bien-être et santé publique</span>
</div>

| Projet | Durée | Difficulté |
|---|---|---|
| SteamCity | 180 min ou 3 séances | Facile (du primaire au lycée) |

## Matériel

- Ordinateur avec webcam (ou caméra HUE HD)
- Micro:bit
- Grove Shield pour micro:bit
- Servomoteur
- Accès à [Vittascience](https://fr.vittascience.com/) et [Adacraft](https://www.adacraft.org/)

<PdfLink href="/pdf/steamcity/Protocol_WasteSorting_FR.pdf">Télécharger en PDF</PdfLink>

</div>


<img src="/img/ressources/steamcity/waste-sorting/icone.png" alt="Tri des déchets par IA" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## Introduction

Ce protocole guide les élèves dans le choix des données d'entraînement appropriées et la compréhension des biais cognitifs, pour comprendre comment l'intelligence artificielle (IA) apprend et produit des prédictions.

Ce projet de tri des déchets par reconnaissance d'images relie l'intelligence artificielle à l'éducation au développement durable. Il met la vision par ordinateur à la portée des élèves : ils verront comment l'IA peut analyser et classer différents types de déchets. Les élèves apprendront la collecte de données, l'entraînement de modèles et leur mise en œuvre concrète, et exerceront leur esprit critique sur le rôle de l'IA face aux défis environnementaux.

L'utilisation de l'IA dans le tri des déchets a considérablement évolué depuis le début des années 2010. En 2016, l'entreprise finlandaise ZenRobotics a été pionnière dans l'utilisation de bras robotisés alimentés par l'IA pour trier les déchets de construction. En 2018, AMP Robotics a développé des systèmes d'apprentissage automatique capables d'identifier et de trier les matières recyclables à une vitesse allant jusqu'à 80 articles par minute, bien supérieure à celle d'un humain. Plus récemment, en 2022, l'entreprise britannique Recycleye a mis en place des systèmes de vision par ordinateur capables de reconnaître plus de 500 catégories différentes de déchets avec une précision de plus de 99 %.

### Structure du protocole

Dans ce protocole, les élèves développeront un système de tri des déchets qui utilise l'IA et la vision par ordinateur. Par l'expérimentation et l'apprentissage, ils créeront un programme capable d'identifier différents types de matériaux recyclables à l'aide d'une caméra. Le projet se déroule en quatre phases : collecte de données, apprentissage du modèle, tests et mise en œuvre. Au cours de ces phases, les élèves collecteront et organiseront des images de déchets, entraîneront un modèle d'IA à reconnaître différents matériaux, testeront sa précision et enfin le connecteront à du matériel physique. Cette progression leur permettra de comprendre les fondements théoriques et les applications pratiques des systèmes d'IA, et de travailler deux notions :

- Comprendre que les systèmes d'IA utilisent des statistiques et des algorithmes pour traiter (analyser) les données et générer des résultats (par exemple, prédire quelle vidéo l'utilisateur pourrait aimer regarder).
- Savoir que l'IA désigne aujourd'hui généralement l'apprentissage automatique, qui n'en est qu'un exemple. Ce qui distingue l'apprentissage automatique des autres types d'IA (par exemple, l'IA à base de règles et les réseaux bayésiens) est qu'il nécessite d'énormes quantités de données.

| Durée | Niveau | Matériel |
|---|---|---|
| 180 minutes ou 3 séances | Facile (du primaire au lycée) | Ordinateur + webcam (ou caméra HUE HD), micro:bit, Grove Shield, servomoteur |

Découpage suggéré sur 3 séances : la première couvre la phase 1 et la première activité de la phase 2 ; la deuxième les dernières activités de la phase 2 et la phase 3 ; la troisième la phase 4.


<figure style={{margin: '1rem auto', textAlign: 'center'}}>
  <img src="/img/ressources/steamcity/waste-sorting/StructureSchema.png" alt="Structure du protocole" style={{maxWidth: '100%', height: 'auto', margin: '0 auto'}} />
  <figcaption style={{margin: 0}}>Structure du protocole</figcaption>
</figure>

### Glossaire

- **Intelligence artificielle (IA)** : Un ensemble de théories et de techniques utilisées pour créer des machines capables de simuler l'intelligence humaine.
- **Apprentissage automatique (Machine Learning)** : Une branche de l'IA où les ordinateurs apprennent à partir de données pour faire des prédictions ou prendre des décisions sans programmation explicite.
- **Réseau neuronal** : Un modèle informatique avec des couches de nœuds interconnectés qui traitent les informations de manière similaire aux réseaux neuronaux biologiques.
- **Traitement du langage naturel** : Un domaine de l'IA visant à permettre aux machines de comprendre, d'interpréter et de générer le langage humain.
- **Reconnaissance d'images** : Une technologie qui permet aux machines d'identifier des objets, des lieux et des personnes dans des images numériques.
- **Ensemble de données** : Un ensemble de données utilisées pour entraîner des modèles d'IA, tels que des images étiquetées ou des exemples de texte.
- **Entraînement** : Le processus par lequel un modèle d'IA apprend des motifs à partir de données d'entrée pour effectuer des tâches spécifiques.
- **Apprentissage supervisé** : Une méthode d'apprentissage dans laquelle les modèles d'IA sont entraînés à l'aide de données étiquetées pour reconnaître des motifs.
- **Big Data** : De grands volumes de données utilisés pour entraîner les systèmes d'IA et améliorer leur précision.
- **Biais** : Erreurs systématiques dans les systèmes d'IA causées par des limitations ou des déséquilibres dans les données d'entraînement.
- **Pixel** : L'unité de base d'une image numérique, contenant des informations sur la couleur et la luminosité.
- **Solutions fondées sur l'IA** : Systèmes qui utilisent l'IA pour résoudre des problèmes pratiques et améliorer des processus.
- **Microcontrôleur** : Un petit ordinateur sur une puce qui contrôle les composants physiques des applications d'IA.
- **Arduino** : Une plate-forme matérielle open source qui connecte les systèmes d'IA aux composants physiques.
- **Servomoteur** : Un moteur dont la position se règle avec précision selon les sorties du système d'IA.
- **Recyclage** : Le processus de conversion des déchets en ressources réutilisables.
- **Durabilité** : La pratique consistant à utiliser les ressources de manière à préserver leur disponibilité pour les besoins futurs.

---

## Phase 1 : Création d'une base de données d'images pour la classification des déchets

### Contexte de la séquence

Cette première phase présente aux élèves la reconnaissance d'images par IA, notamment la collecte de données, l'entraînement des modèles et la prise en compte des biais. Elle peut être réalisée en classe ou à domicile. Les élèves créeront une base de données adaptée à l'entraînement de l'intelligence artificielle.

### Objectifs d'apprentissage

  - **Comprendre les bases de l'IA** : Les élèves explorent le fonctionnement de l'IA de reconnaissance d'images, ses principes et ses méthodes de traitement des données visuelles.
  - **Développer les compétences de collecte de données** : les élèves apprennent à collecter des données pertinentes et de haute qualité, et découvrent les principes et les exigences d'une bonne collecte.

### Conceptualisation

Avant de commencer, vous devez évaluer le niveau de connaissances des élèves et les amener à réfléchir aux concepts clés. Pour vous y aider, voici quelques questions à travailler avec eux, qui les aideront à trouver des réponses pour les activités futures.

#### Qu'est-ce que l'intelligence artificielle ou IA ?

Définir l'intelligence artificielle est un défi en raison de la nature controversée du concept et de son évolution récente et rapide.

Plusieurs chercheurs éminents ont proposé des définitions différentes.

- **Arthur Samuel (1959)** l'a décrite comme « une science qui donne à notre ordinateur les éléments pour apprendre sans être explicitement programmé ».
- **Marvin Lee Minsky (1956)** l'a définie comme « la construction de programmes informatiques qui s'engagent dans des tâches qui sont, pour le moment, exécutées de manière plus satisfaisante par les êtres humains, car elles nécessitent des processus mentaux de haut niveau ».
- **Yann LeCun (Alan Turing Award, 2019)** l'a appelée « un ensemble de techniques permettant aux machines d'effectuer des tâches normalement réservées aux humains ».
- **Luc Julia**, le créateur de Siri remet même en question le terme « intelligence artificielle ». Il prône plutôt l'« intelligence augmentée », affirmant que « l'IA devrait aider les êtres intelligents à améliorer leurs capacités et à exceller dans des tâches spécifiques ».

Nous vous recommandons d'utiliser la définition du dictionnaire Larousse : « Ensemble de théories et de techniques utilisées pour créer des machines capables de simuler l'intelligence humaine. »

Cette définition insiste sur la simulation. Il faut rappeler que les humains programment ces machines pour simuler leurs capacités. Bien qu'elles excellent dans des tâches spécifiques programmées (où elles surpassent souvent les performances humaines), elles restent des outils conçus pour des objectifs précis.

#### Une brève histoire de l'IA

- **1950** : Alan Turing présente le « test de Turing » pour évaluer l'intelligence artificielle en testant si elle peut imiter la conversation humaine.
- **1955** : Marvin Minsky et Dean Edmonds construisent SNARC (Stochastic Neural Analog Reinforcement Calculator), l'un des premiers réseaux neuronaux réalisés en matériel.
- **1956** : La conférence de Dartmouth réunit des chercheurs de premier plan pour établir l'IA comme discipline académique, inventant le terme « intelligence artificielle ».
- **1957** : Frank Rosenblatt développe le perceptron, un algorithme qui apprend à classer des motifs simples et pose les bases des réseaux neuronaux modernes.
- **1964** : Joseph Weizenbaum crée ELIZA, le premier chatbot capable de simuler un psychothérapeute par correspondance et substitution de motifs.
- **1974-1980** : Le premier hiver de l'IA survient en raison des limites des approches d'IA existantes et d'un financement réduit, ce qui suscite un scepticisme quant au potentiel de l'IA.
- **1979** : Le programme Gammonoid de Hans Berliner bat le champion du monde de backgammon, première grande victoire de l'IA sur les humains.
- **1980-1987** : L'apprentissage profond émerge avec des architectures de réseaux neuronaux et des méthodes d'entraînement améliorées, et relance la recherche en IA.
- **2010** : Siri, développé par Luc Julia et son équipe chez Apple, fait connaître au grand public l'assistant IA à commande vocale.
- **Fin 2022** : OpenAI publie ChatGPT, un grand modèle de langage dont les capacités de compréhension et de génération de langage naturel dépassent celles des modèles précédents.

<figure style={{margin: '1rem auto', textAlign: 'center'}}>
  <img src="/img/ressources/steamcity/waste-sorting/histoireIA.png" alt="Frise chronologique de l'IA" style={{maxWidth: '100%', height: 'auto', margin: '0 auto'}} />
  <figcaption style={{margin: 0}}>Frise chronologique de l'intelligence artificielle</figcaption>
</figure>

#### Comment les IA apprennent-elles à reconnaître des images ?

Que voit une IA ? La machine utilise des capteurs pour déchiffrer son environnement et collecter des données.

Pour un ordinateur, une image est constituée d'un ensemble de petits carrés appelés pixels. Chaque pixel est composé de 3 canaux (Rouge/Vert/Bleu). La valeur de ces canaux est codée par un octet. Un octet est une séquence de 8 bits. Un bit est un nombre binaire : 0 ou 1. Exemple : 10010001 est un octet. Il existe 256 possibilités en tout (2 exposant 8). Un pixel est donc codé par un triplet de valeurs, qui peuvent varier de 0 à 255, selon son intensité lumineuse en rouge, vert et bleu.

### Investigation par les élèves

L'activité est lancée par l'enseignant à l'aide des interfaces Vittascience et d'une caméra. Elle peut être réalisée en groupe ou avec toute la classe. **Durée** : 20 minutes.

**Consignes aux élèves** : La première étape consiste à créer une base de données photographiques des déchets que vous souhaitez faire trier par les élèves. Deux options s'offrent à vous :

- Trouvez les images correspondantes dans une banque d'images libres de droits.
- Photographier les déchets à recycler. Cette option présente un intérêt pédagogique accru.

Vous devez donc créer 3 dossiers : « Verre », « Emballage » et « Papier » dans lesquels placer les images que vous allez capturer.

:::info[Important]
Vous pourriez demander aux élèves de prendre des photos des déchets qu'ils recyclent à la maison et de les partager avec un environnement de travail numérique ou via une clé USB. Nous vous suggérons également de demander aux élèves de placer une feuille de papier vierge sur une table, d'y déposer les déchets, puis de prendre la photo. Cette astuce permettra de « polluer » le moins possible le modèle. Pour la classe « verre », nous recommandons également d'éviter le verre transparent. Privilégiez les bouteilles de bière brunes ou les bouteilles de vin vertes, par exemple. Le verre transparent est difficile à détecter, car il ressemble souvent à une bouteille en plastique. Cependant, il pourrait être utile de repenser les concepts de biais et de big data à partir de cette observation.
:::

### Restitution et réflexion

- **Connaissances mobilisées** : Comprendre les concepts de base de l'IA, la reconnaissance d'images et la collecte de données. Reconnaître la nécessité de données structurées et étiquetées en IA.
- **Réflexion sur la mise en œuvre en classe** : Les élèves collectent des images de déchets, à la maison ou en classe, et les classent par catégories. Les enseignants animent des discussions sur la qualité des images et l'organisation des données.
- **Résultats d'apprentissage généraux** : Les élèves apprennent le rôle des données dans l'entraînement d'une IA et comprennent comment les machines interprètent les images différemment des humains.

Pour relier la vision artificielle et la vision humaine, puis aborder les capacités et les limites de l'IA, les enseignants peuvent guider les élèves autour de trois questions :

1. **Comment l'IA interprète-t-elle les images capturées ?** La machine traite des pixels et des motifs, là où l'humain perçoit l'image dans son ensemble. La « vision » de l'IA est donc différente par nature de la vision humaine, même quand les résultats se ressemblent.
2. **Quelles sont les similitudes et les différences entre l'IA et la vision humaine ?** L'IA « voit » par reconnaissance de formes et analyse statistique, alors que les humains s'appuient sur des réseaux neuronaux complexes développés au fil de l'évolution. La comparaison démystifie l'IA et montre ses capacités et ses limites propres.
3. **En quoi l'approche de l'IA en matière d'apprentissage diffère-t-elle de l'intelligence humaine ?** Cette question porte sur la nature même de l'intelligence. L'IA apprend à partir de données structurées et d'algorithmes ; l'apprentissage humain fait appel à la créativité, à l'intuition et au raisonnement complexe, que les systèmes d'IA actuels ne peuvent pas vraiment reproduire.

---

## Phase 2 : Création d'un modèle de reconnaissance des déchets

### Contexte de la séquence

Cette deuxième phase permet aux élèves d'apprendre à entraîner une intelligence artificielle à partir des données collectées. L'enseignant guide les élèves en classe à travers l'interface Vittascience AI.

### Objectifs d'apprentissage

Cette phase familiarise les élèves avec l'entraînement et la création d'une intelligence artificielle, et les aide à mieux comprendre comment elle apprend.

### Conceptualisation

Avant de commencer, vous devez évaluer le niveau de connaissances des élèves et les amener à réfléchir aux concepts clés. Pour vous y aider, voici une activité à réaliser avec eux.

Pour aborder les biais et la diversité des données d'entraînement, demander aux élèves d'analyser différents ensembles de données. L'exercice montre pourquoi un modèle d'IA impartial a besoin de données variées et représentatives.

Les élèves examineront et compareront les données collectées avec celles de leurs camarades de classe, en notant les différences dans les données présentes ou manquantes.

Cette comparaison les aide à comprendre comment les perspectives et les biais individuels influencent la collecte de données. Une IA doit être aussi impartiale que possible : les données d'entraînement qu'on lui fournit demandent donc une attention particulière.

Les résultats de l'IA peuvent refléter les préjugés ou hypothèses inconscients du programmeur. Par exemple, si une IA est entraînée exclusivement sur des images de papier blanc, comment interpréterait-elle un magazine rempli d'images diverses ? L'exemple montre le poids de la qualité et de la diversité des données dans le développement de l'IA. Pour minimiser les biais et améliorer les performances, les systèmes d'IA ont besoin de grandes quantités de données d'entraînement variées, ce que l'on appelle le « Big Data ».

### Investigation par les élèves

#### Activité 1 : Entraînement à la reconnaissance des déchets (20 minutes)

Animée par l'enseignant sur l'interface Vittascience, cette activité initie les élèves à la pratique de l'IA. À l'aide d'objets du quotidien comme des bouteilles en verre, des boîtes en carton et du papier, les élèves pourront :

- Apprendre les bases de l'entraînement d'une IA par l'expérience directe.
- Développer une pensée critique sur la collecte et la classification des données.
- Comprendre comment les systèmes d'IA apprennent à partir d'exemples.
- Pratiquer la résolution collaborative de problèmes en groupe.

L'activité peut être menée en petits groupes ou en classe entière, avec des temps d'apprentissage autonome et de discussion collective. Les exemples concrets aident les élèves à saisir les concepts abstraits de l'IA.

**Consignes aux élèves** :

1. Sur l'interface Vittascience, allez dans « Formation IA ».
2. Créez 3 catégories dans la section « données » : « Verre », « Emballage » et « Papier ».
3. Faites glisser et déposez les images collectées.
4. Une fois le jeu de données créé, cliquez sur « Entraîner ».
5. Testez le modèle avec différents objets (une bouteille en plastique, une bouteille de bière en verre, un vieux journal, etc.). Vous pouvez le tester soit en glissant-déposant un fichier, soit en allumant la webcam. La phase de test est importante en IA ; prenez donc le temps de vérifier que le modèle est bien entraîné. Le modèle doit être testé avec des objets fournis en entrée et d'autres objets pour lesquels il n'a pas été entraîné.
6. Pensez à activer les zones d'interaction pour comprendre sur quel élément votre modèle se base pour prédire un résultat. En cliquant sur « Zones d'interaction », vous pouvez visualiser les zones les plus pertinentes de l'image qui ont permis à la machine de fournir sa prédiction. L'activation de cette zone peut vous aider à mieux expliquer les résultats fournis par la machine.
7. Remettez en question votre modèle : l'IA a-t-elle reconnu tous les objets 100 % du temps ? D'où viennent les erreurs ? Qu'est-ce qui caractérise le verre ? L'emballage ? Le papier ? L'échantillon représente-t-il la majorité des déchets ?

<figure style={{margin: '1rem auto', textAlign: 'center'}}>
  <img src="/img/ressources/steamcity/waste-sorting/exempleclassement.png" alt="Exemple de classement par l'IA Vittascience" style={{maxWidth: '100%', height: 'auto', margin: '0 auto'}} />
  <figcaption style={{margin: 0}}>Exemple de classement obtenu après entraînement</figcaption>
</figure>

:::info[Important]
Une fois que vous avez testé votre modèle, si les résultats ne sont pas satisfaisants, ajoutez plus d'images et entraînez-le à nouveau pour l'améliorer.
:::

Le modèle reconnaît maintenant différents types de déchets : reste à agir en fonction du résultat de la détection.

#### Activité 2 : Connecter l'IA au matériel (20 minutes)

Cette activité associe des compétences techniques à des objectifs pédagogiques. Elle aide les élèves à :

- Comprendre le lien entre les logiciels d'IA et les composants matériels physiques.
- Résoudre des problèmes en expérimentant.
- Apprendre les principes de base de la robotique et de l'automatisation.

L'activité est animée par l'enseignant à l'aide de l'interface Vittascience et d'un microcontrôleur. Elle peut être réalisée en groupe ou avec toute la classe, et mobilise la compréhension technique comme le travail en équipe.

**Consignes aux élèves** : Utilisez Adacraft pour connecter la sortie de votre modèle à l'entrée d'un microcontrôleur tel qu'un Arduino ou une carte de programmation micro:bit.

La carte pourra effectuer des actions (déplacer un servomoteur, allumer/éteindre une LED) à chaque fois qu'une nouvelle détection est effectuée. Pour ce faire, cliquez sur l'icône Adacraft en haut à droite de l'interface. Vous devrez choisir d'enregistrer le modèle localement ou dans le navigateur. Pour créer un programme, ajoutez les blocs permettant de communiquer avec une carte. Cliquez sur « Extensions » en bas à droite de l'écran pour sélectionner la carte à utiliser :

Une fenêtre contextuelle apparaîtra pour télécharger un programme. Glissez-déposez ce programme sur votre carte : elle pourra alors « parler » à Adacraft.

<figure style={{margin: '1rem auto', textAlign: 'center'}}>
  <img src="/img/ressources/steamcity/waste-sorting/extensionsvittascience.png" alt="Extensions Vittascience pour connecter une carte" style={{maxWidth: '100%', height: 'auto', margin: '0 auto'}} />
  <figcaption style={{margin: 0}}>Extensions Vittascience pour la connexion d'un microcontrôleur</figcaption>
</figure>

Une fois cela fait, appuyez sur « Connecter » pour créer la connexion série avec la carte

Vous avez maintenant un modèle de reconnaissance prêt à détecter des objets, et des blocs pour communiquer avec la carte.

<figure style={{margin: '1rem auto', textAlign: 'center'}}>
  <img src="/img/ressources/steamcity/waste-sorting/code.png" alt="Programme de connexion entre l'IA et le microcontrôleur" style={{maxWidth: '100%', height: 'auto', margin: '0 auto'}} />
  <figcaption style={{margin: 0}}>Programme reliant la sortie du modèle au microcontrôleur</figcaption>
</figure>

#### Activité 3 : Créer des commentaires interactifs sur l'IA (20 minutes)

Cette activité relie les concepts d'IA à leurs applications concrètes. Grâce à une exploration guidée de l'interface Vittascience et de la programmation de microcontrôleurs, les élèves pourront :

- Connecter un système d'IA à des composants matériels.
- Apprendre les principes des relations entrée/sortie dans les systèmes qui utilisent l'IA.
- Résoudre des problèmes en groupe.

L'activité peut être réalisée en groupe ou avec toute la classe, en veillant à ce que chaque élève manipule.

**Consignes aux élèves** : Créez un programme sur Adacraft pour que le personnage Vittabot dise la classe détectée.

1. Initialisez le modèle.
2. Lancez la détection sur un fichier disponible sur Internet via une URL ou directement via la webcam. Des blocs utiles sont disponibles dans « IA Image ».
3. Affichez ensuite un texte sur la matrice LED du micro:bit en fonction de la détection.

La réponse de détection est enregistrée dans le bloc « meilleure classe de détection ». L'ordre d'étiquetage des jeux de données lors de l'entraînement est important et sera disponible dans le bloc « Nom de la classe numéro (1) ». Soyez vigilant et mémorisez l'ordre des noms de classes attribués lors de l'entraînement IA.

:::info[Notes pour l'enseignant·e]
Le tri des déchets varie d'un pays à l'autre, voire localement. Par exemple, en Allemagne et en Suisse, les poubelles de tri sont de différentes couleurs (jaune, bleu et rouge), chaque couleur correspondant à un type de déchet spécifique. Il est donc conseillé de vérifier les consignes de tri en vigueur dans votre région avant de procéder à l'activité proposée.
:::

Pour aller plus loin, vous pouvez imaginer une flèche commandée par un servomoteur qui indiquerait quelle poubelle utiliser en fonction des déchets captés par la webcam.

### Restitution et réflexion

- **Connaissances mobilisées** : Bases de l'entraînement et des tests de modèles d'IA. Prise de conscience de l'impact des biais dans les données sur les performances de l'IA.
- **Réflexion sur la mise en œuvre en classe** : Grâce à une interface d'IA, les élèves entraînent un modèle avec leurs images et testent sa capacité de reconnaissance. Les enseignants encouragent les élèves à discuter des erreurs et à affiner l'ensemble de données.
- **Résultats d'apprentissage généraux** : Les élèves comprennent comment l'IA apprend, le rôle de la qualité des données et comment tester et améliorer les modèles d'IA.

En examinant chaque étape de l'entraînement de l'IA, les élèves ont exercé leurs compétences d'analyse sur trois points :

1. **Analyse de la collecte de données** : les élèves apprennent à évaluer de manière critique les données collectées et sélectionnées pour l'entraînement, et voient l'effet direct de leur qualité et de leur diversité sur les performances de l'IA. En remettant en question leurs méthodes de collecte, ils prennent conscience des biais d'échantillonnage possibles.
2. **Évaluation du processus d'apprentissage** : les élèves examinent l'effet de leurs choix de données d'entraînement sur l'apprentissage de l'IA. Ils comprennent mieux comment les systèmes d'IA apprennent des motifs et font des prédictions, et pourquoi les ensembles de données d'entraînement doivent être représentatifs.
3. **Interprétation des résultats** : en analysant les résultats de l'IA, les élèves apprennent à identifier et à corriger les biais potentiels. Ils exercent leur esprit critique et font le lien entre la qualité des données d'entrée et l'exactitude des résultats.

L'apprentissage de l'IA se compare au développement du cerveau humain : comme un enfant apprend en étant exposé à des expériences variées, un système d'IA a besoin de données variées et de qualité pour reconnaître avec précision. Ce parallèle aide les élèves à saisir le potentiel et les limites des systèmes d'IA, et les prépare aux notions plus avancées de la phase suivante.

---

## Phase 3 : Analyser les données et en tirer des enseignements

### Contexte de la séquence

Une fois que les élèves ont appris à entraîner une IA et à l'utiliser, l'enseignant les guide en classe pour visualiser l'algorithme d'IA résultant de la phase d'entraînement. L'interface « Entraînement IA » permet de visualiser le réseau neuronal.

### Objectifs d'apprentissage

Ouvrir la « boîte noire » et comprendre comment fonctionne un réseau neuronal.

### Conceptualisation

Avant de commencer, vous devez évaluer le niveau de connaissances des élèves et les amener à réfléchir aux concepts clés. Pour vous y aider, voici une question à travailler avec eux, qui les aidera à trouver des réponses pour les activités futures.

#### Qu'est-ce que l'apprentissage supervisé ?

En fournissant à l'ordinateur plusieurs images et le nom de la classe associée, l'IA perfectionne son processus d'apprentissage. C'est ce qu'on appelle un jeu de données. L'algorithme construit en amont déterminera les différents paramètres (poids et biais) de chaque couche de neurones afin qu'à la fin du processus, le neurone de sortie corresponde à la classe du jeu de données présenté. La manière dont ces changements se produisent est parfois difficile à expliquer et à interpréter, et est appelée « boîte noire ».

À chaque nouvelle image, le réseau neuronal gagne en efficacité. Les pondérations et les biais sont affinés, et on parle d'entraînement. Cette phase d'apprentissage, appelée apprentissage automatique, crée un modèle de reconnaissance d'images. On peut utiliser plusieurs couches de neurones, ce qu'on appelle l'apprentissage profond.

### Investigation par les élèves

Cette investigation (environ 15 minutes) fait travailler la compréhension des systèmes d'IA et des compétences pratiques. Grâce à une exploration guidée avec les interfaces Vittascience, les élèves pourront :

- Apprendre à analyser et à interpréter le comportement des modèles d'IA.
- Développer une pensée critique sur les réseaux neuronaux.
- Prendre confiance dans l'utilisation des outils d'IA.

L'activité peut être réalisée en petits groupes ou sous forme de discussion avec toute la classe, et mêle apprentissage collaboratif et engagement individuel autour des concepts. Les enseignants peuvent accompagner l'utilisation des interfaces Vittascience et encourager les élèves à faire leurs propres découvertes et observations.

**Consignes aux élèves** : Observez les différentes interactions entre les neurones des différentes couches lors d'un test avec une image d'un fichier ou une capture d'écran via la caméra.

1. Cliquez sur le bouton « Afficher le réseau neuronal ».
2. Demandez aux élèves « que voyez-vous ? »
3. En fonction de leurs réponses, fournissez des explications supplémentaires.

**Vue simplifiée** : présente le réseau neuronal de manière schématique, chaque forme représentant une couche, et la taille de ces couches évoluant. Au début, les images sont grandes et peu nombreuses, puis elles deviennent petites et très nombreuses.

**Vue détaillée** : permet de visualiser tous les neurones du réseau (plus d'un million). La première couche applique un filtre de couleur rouge, bleu et vert : il ne conserve que les valeurs R, V ou B des pixels de l'image test.

**Naviguer dans le réseau** :

- Zoomer avec la souris ou via les boutons en bas à droite.
- Bouton d'information « i » : affiche la taille et le nombre de neurones de chaque couche.
- Survol d'un neurone : visualise les liens avec la couche précédente (figés en cliquant).
- Bouton « Ouvrir les informations » : affiche le nombre d'images et leur taille en pixels par couche.
- Clic sur un pixel : explication des calculs effectués par l'IA sur les couches.

**Lecture des couches** : dans les couches de convolution, un carré de 9 pixels (3x3) est balayé sur les images filtrées. Plusieurs couches se succèdent pour identifier des « motifs », c'est-à-dire les caractéristiques de l'objet. Les neurones sont activés si certaines caractéristiques sont identifiées (alignement de pixels donnant naissance à des formes, etc.) en corrélation avec les données d'apprentissage. L'information est ensuite propagée à la couche de sortie, qui fournit une prédiction.

### Restitution et réflexion

- **Connaissances mobilisées** : Fonctionnement des réseaux neuronaux, notamment les couches, les pondérations et les biais. Réflexion critique sur la nature « boîte noire » des systèmes d'IA.
- **Réflexion sur la mise en œuvre en classe** : Les élèves visualisent le réseau neuronal entraîné et explorent son traitement des données. Les enseignants guident les discussions sur les tendances observées et la prise de décision en IA.
- **Résultats d'apprentissage généraux** : Les élèves voient comment les systèmes d'IA traitent les informations et font des prédictions, et relient ces processus à des applications du monde réel.

Les élèves ont maintenant compris les bases de l'apprentissage et du fonctionnement des systèmes d'IA. Pour approfondir, l'enseignant peut mener une discussion autour des questions suivantes :

1. **« Qu'avez-vous appris ? »** Les élèves formulent ce qu'ils ont compris de l'apprentissage de l'IA, consolident leurs connaissances et repèrent ce qui leur échappe encore.
2. **« À quel point l'IA est-elle intelligente ? »** La question amène à comparer l'intelligence artificielle et l'intelligence humaine, à discuter des capacités et des limites de l'IA, et à préciser ce que signifie « intelligence » selon le contexte.
3. **« Comment les données d'entrée affectent-elles les résultats de l'IA ? »** Les performances de l'IA dépendent de la qualité des données d'entraînement : un système d'IA efficace demande des ensembles de données diversifiés et impartiaux.

---

## Phase 4 : Utiliser l'IA pour réduire l'empreinte environnementale

### Contexte de la séquence

Cette dernière phase permet aux élèves d'approfondir leurs compétences en programmation grâce à des outils (interfaces et matériel). Elle peut être réalisée en classe. Créez un programme qui exécute une action chaque fois que le modèle d'IA entraîné effectue une prédiction.

### Objectifs d'apprentissage

Cette phase vise à apprendre à utiliser l'intelligence artificielle en lien avec un besoin quotidien. Les élèves apprennent à reconnaître l'utilité de ces outils pour réduire leur empreinte environnementale, et à repérer quand ils ont affaire à l'un d'eux.

### Conceptualisation

Avant de commencer, vous devez évaluer le niveau de connaissances des élèves et les amener à réfléchir aux concepts clés. Pour vous y aider, voici une question à travailler avec eux, qui les aidera à trouver des réponses pour les activités futures.

#### Comprendre l'IA dans la vie quotidienne

L'intelligence artificielle fait partie du quotidien, sous diverses formes avec lesquelles on interagit constamment. Dès le réveil, on la croise dans la reconnaissance faciale du téléphone, les recommandations de contenu personnalisées sur les réseaux sociaux et les systèmes de navigation intelligents qui optimisent les itinéraires. Les assistants numériques comme Siri, Google Home et Alexa traitent le langage naturel, et les services de streaming utilisent des algorithmes pour analyser et prédire les préférences de chacun en matière de divertissement.

Créez une carte mentale collective avec les élèves, documentant toutes les interactions avec l'IA qu'ils rencontrent au cours d'une journée type. Cette représentation visuelle aide les élèves à prendre conscience de la présence de l'IA dans leur vie.

#### Impact environnemental des systèmes d'IA

Certains de ces systèmes d'IA contribuent au développement durable. Les systèmes de navigation aident à réduire les émissions de carbone en optimisant les itinéraires et en limitant les embouteillages. À la maison, des systèmes pilotés par l'IA peuvent améliorer considérablement l'efficacité énergétique en réglant la température et en gérant les ressources.

Analysez : lesquelles de ces technologies d'IA utilisées au quotidien contribuent à réduire votre impact environnemental ? Pensez aux applications de navigation optimisant les itinéraires, aux systèmes de maison intelligente gérant l'énergie ou aux solutions de recyclage qui utilisent l'IA.

#### Étendre l'apprentissage grâce à AI Odyssey - Datawalk

Pour mieux comprendre la présence de l'IA autour des élèves, pensez à suivre le protocole SteamCity intitulé « Odyssée de l'IA - Organiser une datawalk ». Dans cette activité complémentaire, menée en dehors des cours, les élèves repèrent et documentent sur place l'IA et les systèmes de collecte de données de leur environnement urbain. En observant et en photographiant divers capteurs, caméras et appareils intelligents dans leur ville, ils voient concrètement comment les systèmes d'IA collectent et traitent les données en contexte réel.

### Investigation par les élèves

#### Activité 1 : Test sur le terrain de détection des déchets par l'IA (20 minutes)

Les élèves appliquent ici leurs connaissances en IA dans un contexte environnemental réel. En combinant collecte des déchets et validation de l'IA, ils acquièrent une expérience pratique et évaluent de manière critique les performances de l'IA sur le terrain. L'activité sensibilise à l'environnement et montre comment la technologie peut servir à relever les défis quotidiens du développement durable.

L'activité est lancée par l'enseignant à l'aide de l'interface Vittascience et d'un microcontrôleur. Elle peut être réalisée en groupe.

**Consignes aux élèves** : Pour cette activité, vous utiliserez le modèle d'IA créé aux phases précédentes pour l'appliquer en conditions réelles. Suivez les étapes ci-dessous :

1. **Rassemblez le matériel** : un sac poubelle, des gants et un téléphone.
2. **Divisez les élèves en petits groupes** et attribuez-leur une zone à explorer (terrain d'école, bâtiment ou place publique).
3. **Recueillez les informations** en répartissant les rôles :
   - Un élève ramasse tous les déchets trouvés.
   - Un élève utilise le téléphone avec le modèle d'IA créé en classe pour vérifier le tri correct des déchets pour chaque article collecté.
   - Un élève enregistre les données : types et quantités de poubelles rencontrées (déchets généraux, papier, verre, etc.), types spécifiques de déchets collectés (articles en papier, déchets alimentaires, etc.) et toute erreur de détection de l'IA.

#### Activité 2 : Défi de classification intelligente des déchets (25 minutes)

Cette activité finale renforce la compréhension du fonctionnement de l'IA en situation réelle, la conscience environnementale et les compétences collaboratives des élèves. L'enseignant guide les groupes d'élèves à travers des exercices pratiques.

**Consignes aux élèves** : Pour cette activité, vous utiliserez le modèle d'IA que vous avez créé dans les phases précédentes pour l'appliquer dans des conditions réelles, ainsi que les résultats de l'activité 1. De retour en classe, l'enseignant demande aux élèves de réfléchir aux questions suivantes :

- L'IA peut-elle trier tous les déchets ?
- Que faudrait-il pour les trier tous ?
- Est-ce que toutes les poubelles nécessaires au recyclage des déchets retrouvés sur le site étudié ? Dans le cas contraire, rédigez un compte rendu à destination de la mairie ou au directeur de l'école de l'activité et de la possibilité d'améliorer le tri des déchets sur le site étudié.

### Restitution et réflexion

- **Connaissances mobilisées** : Application pratique de modèles d'IA dans des scénarios réels. Sensibilisation aux pratiques de développement durable et de gestion des déchets.
- **Réflexion sur la mise en œuvre en classe** : Les élèves utilisent le modèle d'IA entraîné pour trier les déchets dans leur environnement et analyser les résultats. Les enseignants suscitent des discussions sur le rôle de l'IA dans la résolution des problèmes environnementaux.
- **Résultats d'apprentissage généraux** : Les élèves apprennent comment l'IA peut résoudre des problèmes pratiques, et réfléchissent de manière critique à l'impact de la technologie sur l'environnement et la société.

Pour conclure ce protocole, menez avec les élèves une dernière discussion qui fait le bilan de leur expérience. Voici les principaux points de discussion :

- **« Comment votre compréhension de l'IA a-t-elle évolué ? »** Les élèves comparent leurs perceptions de départ à ce qu'ils comprennent maintenant des capacités et des limites de l'IA dans les applications concrètes.
- **« Quel rôle l'IA peut-elle jouer dans la durabilité environnementale ? »** La discussion relie leur expérience pratique à des défis environnementaux plus vastes et montre comment les outils d'IA peuvent aider à résoudre des problèmes concrets.
- **« Quelles sont les applications pratiques et les limites de l'IA au quotidien ? »** Le but est une vision équilibrée de l'IA, qui tient compte de son potentiel comme de ses contraintes face aux défis du quotidien.

---

## Pour aller plus loin

### Adaptation pédagogique

Ce protocole s'adapte à différents niveaux d'enseignement : de la maternelle au lycée, les enseignants peuvent ajuster la complexité aux capacités de leurs élèves. Au primaire, les élèves peuvent se concentrer sur l'identification et le tri des déchets à l'aide d'outils visuels simples. Les collégiens peuvent s'initier à la programmation par blocs, tandis que les lycéens peuvent se plonger dans la programmation Python et créer des outils d'analyse de données. Cette progression permet aux élèves de comprendre les concepts de l'IA et de développer des compétences pratiques en gestion et visualisation des données environnementales.

### Parcours de carrière en science des données

Pour découvrir les métiers de la science des données, les élèves peuvent explorer le quotidien des data scientists par des stages virtuels d'observation, des entretiens avec des professionnels et des exercices d'analyse de données. Ils peuvent s'exercer aux compétences du métier (analyse statistique, programmation, visualisation de données) et travailler sur des projets d'IA de reconnaissance d'images, de détection de formes ou de modélisation prédictive. Ces projets montrent les aspects techniques de la science des données et ses applications dans différents domaines, notamment la protection de l'environnement et le développement durable.

---

## Bibliographie

**L'IA dans le tri et le recyclage des déchets**

- [ZenRobotics](https://zenrobotics.com/) : pionnier dans l'utilisation de bras robotisés alimentés par l'IA pour trier les déchets de construction.
- [AMP Robotics](https://www.amprobotics.com/) : systèmes d'IA capables de trier les matières recyclables à grande vitesse, bien plus vite qu'un humain.
- [Recycleye](https://recycleye.com/) : systèmes d'IA qui reconnaissent plus de 500 catégories de déchets avec une précision de plus de 99 %.

**Bases de l'IA et apprentissage automatique**

- [Machine Learning Mastery](https://machinelearningmastery.com/) : tutoriels pratiques d'apprentissage automatique.
- [Towards Data Science](https://towardsdatascience.com/) : publication en ligne sur l'apprentissage automatique, l'IA et la science des données.
- [Kaggle](https://www.kaggle.com/) : plateforme pour les concours et les ensembles de données en science des données.
- [Google AI Blog](https://ai.googleblog.com) : recherches, avancées et actualités en IA et apprentissage automatique.
- [Coursera : Machine Learning by Andrew Ng](https://www.coursera.org/learn/machine-learning) : cours d'introduction à l'apprentissage automatique.

**Outils et plateformes d'IA pour les enseignants et les élèves du secondaire**

- [Guide Vittascience : IA version micro:bit](https://fr.vittascience.com/learn/tutorial.php?id=403/guide-d-utilisation-intelligence-artificielle-version-micro-bit)
- [Teachable Machine (Google)](https://teachablemachine.withgoogle.com/) : outil convivial d'initiation à l'apprentissage automatique.
- [TensorFlow](https://www.tensorflow.org/learn) : outils d'IA et d'apprentissage automatique adaptés aux débutants.
- [ML4K (Machine Learning for Kids)](https://machinelearningforkids.co.uk/) : plateforme d'initiation à l'apprentissage automatique pour les jeunes élèves.

---

*Cette fiche fait partie du projet [SteamCity](/projets/steamcity), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

---
id: waste-sorting
title: Tri des déchets par IA
sidebar_label: "Tri des déchets par IA"
sidebar_position: 22
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><path d="M6 6 L18 6 L16 20 L8 20 Z" fill="#DD5350" opacity="0.1"/><path d="M8 8 L16 8 L15 18 L9 18 Z" fill="#DD5350" opacity="0.25"/><line x1="4" y1="6" x2="20" y2="6" stroke="#DD5350" strokeWidth="1.5" opacity="1.0"/><path d="M10 3 L14 3 L14 6 L10 6 Z" fill="none" stroke="#DD5350" strokeWidth="1" opacity="1.0"/><line x1="12" y1="10" x2="12" y2="16" stroke="#DD5350" strokeWidth="1.5" opacity="1.0"/></svg> Tri des déchets par IA

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

<a href="/pdf/steamcity/Protocol_WasteSorting_FR.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#DD5350', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger en PDF</a>

</div>


<img src="/img/ressources/steamcity/waste-sorting/icone.png" alt="Tri des déchets par IA" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## Introduction

Comprendre comment l'intelligence artificielle (IA) apprend et produit des prédictions est essentiel pour une formation efficace en IA. Ce protocole guide les élèves dans la sélection des données d'entraînement appropriées et la compréhension des biais cognitifs, éléments clés pour appréhender les fonctionnalités de l'IA.

En mettant en œuvre un projet de tri des déchets utilisant la technologie de reconnaissance d'images, nous établissons un lien entre l'intelligence artificielle et l'éducation au développement durable. Ce projet démontre comment l'IA peut analyser et catégoriser différents types de déchets grâce à la vision par ordinateur, rendant cette technologie accessible aux élèves. Cette approche pratique illustre l'impact de l'IA sur notre quotidien et ses applications en matière de durabilité environnementale. Les élèves apprendront la collecte de données, l'entraînement de modèles et leur mise en œuvre concrète, tout en développant leur esprit critique quant au rôle de l'IA dans la résolution des défis environnementaux.

L'utilisation de l'IA dans le tri des déchets a considérablement évolué depuis le début des années 2010. En 2016, l'entreprise finlandaise ZenRobotics a été pionnière dans l'utilisation de bras robotisés alimentés par l'IA pour trier les déchets de construction. En 2018, AMP Robotics a développé des systèmes sophistiqués d'apprentissage automatique capables d'identifier et de trier les matières recyclables à une vitesse allant jusqu'à 80 articles par minute, dépassant largement les capacités humaines. Plus récemment, en 2022, l'entreprise britannique Recycleye a mis en place des systèmes de vision par ordinateur capables de reconnaître plus de 500 catégories différentes de déchets avec une précision de plus de 99 %.

Le protocole combine la compréhension théorique avec l'expérience pratique, permettant aux élèves de voir comment l'IA peut être utilisée comme un outil pour un impact environnemental positif.


### Structure du protocole

Dans ce protocole, les élèves développeront un système de tri des déchets basé sur l'IA et utilisant la vision par ordinateur. Par l'expérimentation et l'apprentissage, ils créeront un programme capable d'identifier différents types de matériaux recyclables à l'aide d'une caméra. Le projet se déroule en quatre étapes : collecte de données, apprentissage du modèle, tests et mise en œuvre. Au cours de ces étapes, les élèves collecteront et organiseront des images de déchets, entraîneront un modèle d'IA à reconnaître différents matériaux, testeront sa précision et enfin le connecteront à du matériel physique. Cette progression leur permettra de comprendre les fondements théoriques et les applications pratiques des systèmes d'IA. Cette approche pratique aide les élèves à développer des connaissances clés dans deux domaines cruciaux :

- Comprendre que les systèmes d'IA utilisent des statistiques et des algorithmes pour traiter (analyser) les données et générer des résultats (par exemple, prédire quelle vidéo l'utilisateur pourrait aimer regarder).
- Savoir que l'IA désigne aujourd'hui généralement l'apprentissage automatique, qui n'en est qu'un exemple. Ce qui distingue l'apprentissage automatique des autres types d'IA (par exemple, l'IA basée sur des règles et les réseaux bayésiens) est qu'il nécessite d'énormes quantités de données.

- **Durée** : 180 minutes ou 3 leçons (une première pour l'étape 1 et la première activité de l'étape 2, une deuxième pour les dernières activités de l'étape 2 et l'étape 3, une troisième pour l'étape 4).
- **Niveau de difficulté** : Facile (du primaire au lycée).
- **Matériel nécessaire** : Ordinateur avec webcam (ou caméra HUE HD) ; Micro:bit ; Grove Shield pour micro:bit ; Servomoteur.


### Glossaire

- **Intelligence artificielle (IA)** : Un ensemble de théories et de techniques utilisées pour créer des machines capables de simuler l'intelligence humaine.
- **Apprentissage automatique (Machine Learning)** : Une branche de l'IA où les ordinateurs apprennent à partir de données pour faire des prédictions ou prendre des décisions sans programmation explicite.
- **Réseau neuronal** : Un modèle informatique avec des couches de nœuds interconnectés qui traitent les informations de manière similaire aux réseaux neuronaux biologiques.
- **Traitement du langage naturel** : Un domaine de l'IA visant à permettre aux machines de comprendre, d'interpréter et de générer le langage humain.
- **Reconnaissance d'images** : Une technologie qui permet aux machines d'identifier des objets, des lieux et des personnes dans des images numériques.
- **Ensemble de données** : Un ensemble de données utilisées pour former des modèles d'IA, tels que des images étiquetées ou des exemples de texte.
- **Entraînement** : Le processus par lequel un modèle d'IA apprend des modèles à partir de données d'entrée pour effectuer des tâches spécifiques.
- **Apprentissage supervisé** : Une méthode d'apprentissage dans laquelle les modèles d'IA sont formés à l'aide de données étiquetées pour reconnaître des modèles.
- **Big Data** : De grands volumes de données utilisés pour former les systèmes d'IA et améliorer leur précision.
- **Biais** : Erreurs systématiques dans les systèmes d'IA causées par des limitations ou des déséquilibres dans les données de formation.
- **Pixel** : L'unité de base d'une image numérique, contenant des informations sur la couleur et la luminosité.
- **Solutions basées sur l'IA** : Systèmes qui utilisent les capacités de l'IA pour relever des défis pratiques et améliorer les processus.
- **Microcontrôleur** : Un petit ordinateur sur une puce qui contrôle les composants physiques des applications d'IA.
- **Arduino** : Une plate-forme matérielle open source qui connecte les systèmes d'IA aux composants physiques.
- **Servomoteur** : Un moteur qui permet un contrôle de position précis basé sur les sorties du système d'IA.
- **Recyclage** : Le processus de conversion des déchets en ressources réutilisables.
- **Durabilité** : La pratique consistant à utiliser les ressources de manière à préserver leur disponibilité pour les besoins futurs.

---

## Étape 1 : création d'une base de données d'images pour la classification des déchets

### Contexte de la séquence

Cette première étape présente aux élèves les concepts clés de la reconnaissance d'images par IA, notamment la collecte de données, l'entraînement des modèles et la prise en compte des biais. Elle peut être réalisée en classe ou à domicile. Les élèves créeront une base de données adaptée à l'entraînement de l'intelligence artificielle.

### Objectifs d'apprentissage

  - **Comprendre les fondamentaux de l'IA** : Les élèves explorent le fonctionnement de l'IA de reconnaissance d'images, ses principes fondamentaux et ses méthodes de traitement des données visuelles.
  - **Développer les compétences de collecte de données** : les élèves apprennent à collecter des données pertinentes et de haute qualité tout en comprenant les principes fondamentaux et les exigences optimales de collecte de données.

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

Cette définition met en lumière le concept de simulation. Il est essentiel de rappeler que les humains programment ces machines pour simuler leurs capacités. Bien qu'elles excellent dans des tâches spécifiques programmées – surpassant souvent les performances humaines –, elles restent des outils conçus pour des objectifs précis.

#### Une brève histoire de l'IA

- **1950** : Alan Turing présente le « test de Turing » pour évaluer l'intelligence artificielle en testant si elle peut imiter la conversation humaine.
- **1955** : Marvin Minsky et Dean Edmonds construisent SNARC (Stochastic Neural Analog Reinforcement Calculator), un matériel de réseau neuronal pionnier.
- **1956** : La conférence de Dartmouth réunit des chercheurs de premier plan pour établir l'IA comme discipline académique, inventant le terme « intelligence artificielle ».
- **1957** : Frank Rosenblatt développe le perceptron, un algorithme révolutionnaire qui pourrait apprendre à classer des modèles simples, jetant ainsi les bases des réseaux neuronaux modernes.
- **1964** : Joseph Weizenbaum crée ELIZA, le premier chatbot capable de simuler un psychothérapeute par correspondance et substitution de modèles.
- **1974-1980** : Le premier hiver de l'IA survient en raison des limites des approches d'IA existantes et d'un financement réduit, ce qui suscite un scepticisme quant au potentiel de l'IA.
- **1979** : Le programme Gammonoid de Hans Berliner bat le champion du monde de backgammon, marquant la première victoire significative de l'IA sur les humains.
- **1980-1987** : L'apprentissage profond émerge avec des architectures de réseaux neuronaux et des méthodes de formation améliorées, revitalisant la recherche en IA.
- **2010** : Siri, développé par Luc Julia et son équipe chez Apple, présente des assistants IA à commande vocale aux consommateurs grand public.
- **Fin 2022** : OpenAI publie ChatGPT, un grand modèle de langage qui démontre des capacités sans précédent de compréhension et de génération de langage naturel.

#### Comment les IA apprennent-elles à reconnaître des images ?

Que voit une IA ? La machine utilise des capteurs pour déchiffrer son environnement et collecter des données.

Pour un ordinateur, une image est constituée d'un ensemble de petits carrés appelés pixels. Chaque pixel est composé de 3 canaux (Rouge/Vert/Bleu). La valeur de ces canaux est codée par un octet. Un octet est une séquence de 8 bits. Un bit est un nombre binaire : 0 ou 1. Exemple : 10010001 est un octet. Il existe 256 possibilités en tout (2 exposant 8). Un pixel est donc codé par un triplet de valeurs, qui peuvent varier de 0 à 255, selon son intensité lumineuse en rouge, vert et bleu.

### Investigation par les élèves

L'activité est lancée par l'enseignant à l'aide des interfaces Vittascience et d'une caméra. Elle peut être réalisée en groupe ou avec toute la classe.

- **Durée** : 20 minutes.

**Consignes aux élèves** : La première étape consiste à créer une base de données photographiques des déchets que vous souhaitez faire trier par les élèves. Deux options s'offrent à vous :

- Trouvez les images correspondantes dans une banque d'images libres de droits.
- Photographier les déchets à recycler. Cette option présente un intérêt pédagogique accru.

Vous devez donc créer 3 dossiers : « Verre », « Emballage » et « Papier » dans lesquels placer les images que vous allez capturer.

:::info[Important]
Vous pourriez demander aux élèves de prendre des photos des déchets qu'ils recyclent à la maison et de les partager avec un environnement de travail numérique ou via une clé USB. Nous vous suggérons également de demander aux élèves de placer une feuille de papier vierge sur une table, d'y déposer les déchets, puis de prendre la photo. Cette astuce permettra de « polluer » le moins possible le modèle. Pour la classe « verre », nous recommandons également d'éviter le verre transparent. Privilégiez les bouteilles de bière brunes ou les bouteilles de vin vertes, par exemple. Le verre transparent est difficile à détecter, car il ressemble souvent à une bouteille en plastique. Cependant, il pourrait être utile de repenser les concepts de biais et de big data à partir de cette observation.
:::

### Restitution et réflexion

- **Connaissances mobilisées** : Comprendre les concepts fondamentaux de l'IA, la reconnaissance d'images et la collecte de données. Reconnaître la nécessité de données structurées et étiquetées en IA.
- **Réflexion sur la mise en œuvre en classe** : Les élèves collectent des images de déchets, à la maison ou en classe, et les classent par catégories. Les enseignants animent des discussions sur la qualité des images et l'organisation des données.
- **Résultats d'apprentissage généraux** : Les élèves apprennent l'importance des données dans la formation à l'IA et comprennent comment les machines interprètent les images différemment des humains.

Après avoir exploré les fondamentaux de l'IA, les élèves peuvent désormais établir des liens significatifs entre les systèmes de vision artificielle et humaine. Cette compréhension constitue un pont essentiel vers un apprentissage plus approfondi des capacités et des limites de l'IA.

Pour renforcer cet apprentissage, les enseignants peuvent guider les élèves à travers trois questions clés :

1. Comment l'IA interprète-t-elle les images capturées ? Cette question aide les élèves à comprendre les aspects techniques de la vision par ordinateur, en comparant le traitement des pixels et des motifs par les machines à la perception globale des images par les humains. Elle démontre que la « vision » de l'IA est fondamentalement différente de la vision humaine, malgré des résultats similaires.
2. Quelles sont les similitudes et les différences entre l'IA et la vision humaine ? En explorant cette question, les élèves peuvent comprendre comment l'IA utilise la reconnaissance de formes et l'analyse statistique pour « voir », tandis que les humains s'appuient sur des réseaux neuronaux complexes développés au fil de l'évolution. Cette comparaison permet de démystifier l'IA tout en soulignant ses capacités et ses limites uniques.
3. En quoi l'approche de l'IA en matière d'apprentissage diffère-t-elle de l'intelligence humaine ? Cette dernière question encourage les élèves à réfléchir de manière critique à la nature même de l'intelligence. Ils peuvent explorer comment l'IA apprend grâce à des données structurées et des algorithmes, tandis que l'apprentissage humain fait appel à la créativité, à l'intuition et au raisonnement complexe – des capacités que les systèmes d'IA actuels ne peuvent pas véritablement reproduire.

---

## Étape 2 : création d'un modèle de reconnaissance des déchets

### Contexte de la séquence

Cette deuxième étape permet aux élèves d'apprendre à entraîner une intelligence artificielle à partir des données collectées. L'enseignant guide les élèves en classe à travers l'interface Vittascience AI.

### Objectifs d'apprentissage

L'objectif de cette étape est de familiariser les élèves avec la formation d'une intelligence artificielle, sa création et une meilleure compréhension de son apprentissage.

### Conceptualisation

Avant de commencer, vous devez évaluer le niveau de connaissances des élèves et les amener à réfléchir aux concepts clés. Pour vous y aider, voici une activité à réaliser avec eux.

Explorons les concepts de biais et de diversité des données dans la formation en IA en demandant aux élèves d'analyser différents ensembles de données. Cet exercice permettra de comprendre pourquoi des données variées et représentatives sont essentielles à la création de modèles d'IA impartiaux.

Les élèves examineront et compareront les données collectées avec celles de leurs camarades de classe, en notant les différences dans les données présentes ou manquantes.

Cette comparaison les aide à comprendre comment les perspectives et les biais individuels influencent la collecte de données. L'IA devant s'efforcer d'être impartiale, il est essentiel d'accorder une attention particulière aux données d'entraînement fournies.

Les résultats de l'IA peuvent refléter les préjugés ou hypothèses inconscients du programmeur. Par exemple, si une IA est entraînée exclusivement sur des images de papier blanc, comment interpréterait-elle un magazine rempli d'images diverses ? Cela illustre l'importance cruciale de la qualité et de la diversité des données dans le développement de l'IA. Pour minimiser les biais et améliorer les performances, les systèmes d'IA nécessitent de grandes quantités de données d'entraînement variées, ce que l'on appelle le « Big Data ».

### Investigation par les élèves

#### Activité 1 : Entraînement à la reconnaissance des déchets (20 minutes)

Cette activité pratique, animée par l'enseignant via l'interface Vittascience, initie les élèves à la pratique de l'IA. À l'aide d'objets du quotidien comme des bouteilles en verre, des boîtes en carton et du papier, les élèves pourront :

- Apprendre les fondamentaux de la formation en IA grâce à l'expérience directe.
- Développer une pensée critique sur la collecte et la classification des données.
- Comprendre comment les systèmes d'IA apprennent à partir d'exemples.
- Pratiquer la résolution collaborative de problèmes en groupe.

L'activité peut être menée en petits groupes ou en classe entière, favorisant l'apprentissage autonome et la discussion collective. Cette approche aide les élèves à appréhender les concepts abstraits de l'IA grâce à des exemples concrets et pertinents.

**Consignes aux élèves** :

1. Sur l'interface Vittascience, allez dans « Formation IA ».
2. Créez 3 catégories dans la section « données » : « Verre », « Emballage » et « Papier ».
3. Faites glisser et déposez les images collectées.
4. Une fois le jeu de données créé, cliquez sur « Entrainer ».
5. Testez le modèle avec différents objets (une bouteille en plastique, une bouteille de bière en verre, un vieux journal, etc.). Vous pouvez le tester soit en glissant-déposant un fichier, soit en allumant la webcam. La phase de test est importante en IA ; prenez donc le temps de vérifier que le modèle est bien entraîné. Le modèle doit être testé avec des objets fournis en entrée et d'autres objets pour lesquels il n'a pas été entraîné.
6. Pensez à activer les zones d'interaction pour comprendre sur quel élément votre modèle se base pour prédire un résultat. En cliquant sur « Zones d'interaction », vous pouvez visualiser les zones les plus pertinentes de l'image qui ont permis à la machine de fournir sa prédiction. L'activation de cette zone peut vous aider à mieux expliquer les résultats fournis par la machine.
7. Remettez en question votre modèle : l'IA a-t-elle reconnu tous les objets 100 % du temps ? D'où viennent les erreurs ? Qu'est-ce qui caractérise le verre ? L'emballage ? Le papier ? L'échantillon représente-t-il la majorité des déchets ?

:::info[Important]
Une fois que vous avez testé votre modèle, si les résultats ne sont pas satisfaisants, ajoutez plus d'images et entraînez-le à nouveau pour l'améliorer.
:::

Nous disposons d'un modèle capable de reconnaître différents types de déchets et nous souhaitons désormais agir en fonction du résultat de la détection.

#### Activité 2 : Connecter l'IA au matériel (20 minutes)

Cette activité pratique intègre des compétences techniques à des objectifs pédagogiques, aidant les élèves à :

- Comprendre le lien entre les logiciels d'IA et les composants matériels physiques.
- Développer des compétences en résolution de problèmes grâce à l'expérimentation pratique.
- Apprendre les principes de base de la robotique et de l'automatisation.
- Pratiquer l'apprentissage collaboratif dans un environnement basé sur des projets.

L'activité est animée par l'enseignant à l'aide de l'interface Vittascience et d'un microcontrôleur. Elle peut être réalisée en groupe ou avec toute la classe, favorisant ainsi la compréhension technique et le travail en équipe.

**Consignes aux élèves** : Utilisez Adacraft pour connecter la sortie de notre modèle à l'entrée d'un microcontrôleur tel qu'un Arduino ou une carte de programmation micro:bit.

La carte pourra effectuer des actions (déplacer un servomoteur, allumer/éteindre une LED) à chaque fois qu'une nouvelle détection est effectuée. Pour ce faire, cliquez sur l'icône Adacraft en haut à droite de l'interface. Vous devrez choisir d'enregistrer le modèle localement ou dans le navigateur. Pour créer un programme, ajoutez les blocs permettant de communiquer avec une carte. Cliquez sur « Extensions » en bas à droite de l'écran pour sélectionner la carte à utiliser :

Une fenêtre contextuelle apparaîtra, vous permettant de télécharger un programme que vous pouvez glisser-déposer sur votre carte, lui permettant de « parler » à Adacraft.

Une fois cela fait, appuyez sur « Connecter » pour créer la connexion série avec la carte

Vous disposez désormais d'un modèle de reconnaissance prêt à détecter des objets et des blocs vous permettant de communiquer avec un tableau physique.

#### Activité 3 : Créer des commentaires interactifs sur l'IA (20 minutes)

Cette activité pratique vise à combler le fossé entre les concepts d'IA et leurs applications concrètes. Grâce à une exploration guidée de l'interface Vittascience et de la programmation de microcontrôleurs, les élèves pourront :

- Développer des compétences pratiques pour connecter les systèmes d'IA aux composants matériels.
- Comprendre comment l'IA peut être intégrée dans des appareils physiques pour des applications du monde réel.
- Apprendre les principes des relations entrée/sortie dans les systèmes alimentés par l'IA.
- Pratiquer la résolution de problèmes dans un environnement collaboratif.

L'activité peut être réalisée en groupe ou avec toute la classe, favorisant à la fois la compréhension technique et les compétences de travail en équipe tout en garantissant une expérience pratique à tous les participants.

**Consignes aux élèves** : Créez un programme sur Adacraft pour que le personnage Vittabot dise la classe détectée. Initialisez le modèle. Lancez la détection. Choisissez de lancer une détection sur un fichier disponible sur Internet via une URL ou directement via la webcam. Des blocs utiles sont disponibles dans « IA Image ». Affichez ensuite un texte sur la matrice LED du micro:bit en fonction de la détection.

La réponse de détection est enregistrée dans le bloc : « meilleure classe de détection ». L'ordre d'étiquetage des jeux de données lors de l'entraînement est important et sera disponible dans le bloc « Nom de la classe numéro (1) ». Soyez vigilant et mémorisez l'ordre des noms de classes attribués lors de l'entraînement IA. Il est important de noter que le tri des déchets varie d'un pays à l'autre, voire localement. Par exemple, en Allemagne et en Suisse, les poubelles de tri sont de différentes couleurs (jaune, bleu et rouge), chaque couleur correspondant à un type de déchet spécifique. Il est donc conseillé de vérifier les consignes de tri en vigueur dans votre région avant de procéder à l'activité proposée. Pour aller plus loin, vous pouvez imaginer une flèche commandée par un servomoteur qui indiquerait quelle poubelle utiliser en fonction des déchets captés par la webcam.

### Restitution et réflexion

- **Connaissances mobilisées** : Bases de l'entraînement et des tests de modèles d'IA. Prise de conscience de l'impact des biais dans les données sur les performances de l'IA.
- **Réflexion sur la mise en œuvre en classe** : Grâce à une interface d'IA, les élèves entraînent un modèle avec leurs images et testent sa capacité de reconnaissance. Les enseignants encouragent les élèves à discuter des erreurs et à affiner l'ensemble de données.
- **Résultats d'apprentissage généraux** : Les élèves comprennent comment l'IA apprend, le rôle de la qualité des données et comment tester et améliorer les modèles d'IA.

Grâce à ces activités, les élèves ont développé des compétences analytiques critiques en examinant chaque phase de la formation en IA. Explorons les principaux objectifs d'apprentissage :

1. Analyse de la collecte de données : Les élèves apprennent à évaluer de manière critique les données collectées et sélectionnées pour la formation en IA. Cela les aide à comprendre l'impact direct de la qualité et de la diversité des données initiales sur les performances de l'IA. En remettant en question leurs méthodes de collecte de données, les élèves prennent conscience des biais d'échantillonnage potentiels.
2. Évaluation du processus d'apprentissage : Les élèves examinent l'impact de leurs choix en matière de données d'apprentissage sur le processus d'apprentissage de l'IA. Cela leur permet de mieux comprendre comment les systèmes d'IA apprennent des modèles et réalisent des prédictions, tout en soulignant l'importance de disposer d'ensembles de données d'apprentissage représentatifs.
3. Interprétation des résultats : En analysant les résultats de l'IA, les élèves apprennent à identifier et à corriger les biais potentiels. Cela développe leur esprit critique et les aide à comprendre le lien entre la qualité des données d'entrée et l'exactitude des résultats.

L'analogie entre l'apprentissage de l'IA et le développement du cerveau humain s'avère particulièrement pertinente. Tout comme un enfant apprend en étant exposé à diverses expériences, un système d'IA a besoin de données diversifiées et de qualité pour développer des capacités de reconnaissance précises. Ce parallèle aide les élèves à saisir le potentiel et les limites des systèmes d'IA, les préparant ainsi à des concepts plus avancés lors de l'étape suivante.

---

## Étape 3 : analyser les données et en tirer des enseignements

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

Cette activité d'investigation pratique (environ 15 minutes) vise à développer la compréhension des systèmes d'IA tout en développant des compétences pratiques. Grâce à une exploration guidée avec les interfaces Vittascience, les élèves pourront :

- Apprendre à analyser et à interpréter le comportement des modèles d'IA.
- Développer une pensée critique sur les réseaux neuronaux.
- Développer la confiance dans l'utilisation des outils d'IA.

L'activité peut être réalisée en petits groupes ou sous forme de discussion avec toute la classe, favorisant ainsi l'apprentissage collaboratif et l'engagement individuel autour des concepts. Les enseignants peuvent faciliter l'utilisation des interfaces Vittascience tout en encourageant les élèves à faire leurs propres découvertes et observations.

**Consignes aux élèves** : Observez les différentes interactions entre les neurones des différentes couches lors d'un test avec une image d'un fichier ou une capture d'écran via la caméra.

1. Cliquez sur le bouton suivant, « Afficher le réseau neuronal ».
2. Demandez aux élèves « que voyez-vous ? »
3. En fonction de leurs réponses, fournissez des explications supplémentaires : La « Vue simplifiée » présente le réseau neuronal de manière schématique, chaque forme représentant une couche, et la taille de ces couches évoluant. Au début, les images sont grandes et peu nombreuses, puis elles deviennent petites et très nombreuses. Cliquez sur « Vue détaillée ». Cette vue vous permet de visualiser tous les neurones du réseau : il y en a plus d'un million ! La première couche consiste à appliquer un filtre de couleur rouge, bleu et vert. Ce filtre ne conserve que les valeurs rouge, verte ou bleue des pixels de l'image test. Vous pouvez naviguer dans le réseau neuronal en zoomant avec la souris ou en utilisant les boutons en bas à droite. En cliquant sur le bouton d'information « i », vous pouvez afficher la taille et le nombre de neurones de chaque couche. En survolant les neurones, vous pouvez visualiser les liens avec la couche précédente, qui se figent en cliquant sur le neurone. Le bouton « Ouvrir les informations » affiche le nombre d'images et leur taille en pixels dans chaque couche. En cliquant sur les pixels, vous pouvez obtenir des explications sur les calculs effectués par l'IA sur les couches. Dans les couches de convolution, un carré de 9 pixels (3x3) est balayé sur les images filtrées. Plusieurs couches se succèdent pour identifier des « motifs », c'est-à-dire les caractéristiques de l'objet à identifier dans l'image. Les neurones sont activés si certaines caractéristiques sont identifiées (alignement des pixels donnant naissance à des formes, etc.) en corrélation avec les données d'apprentissage. L'information est ensuite propagée à la couche de sortie, qui fournit une prédiction.

### Restitution et réflexion

- **Connaissances mobilisées** : Fonctionnement des réseaux neuronaux, notamment les couches, les pondérations et les biais. Réflexion critique sur la nature « boîte noire » des systèmes d'IA.
- **Réflexion sur la mise en œuvre en classe** : Les élèves visualisent le réseau neuronal formé et explorent son traitement des données. Les enseignants guident les discussions sur les tendances observées et la prise de décision en IA.
- **Résultats d'apprentissage généraux** : Les élèves acquièrent un aperçu de la manière dont les systèmes d'IA traitent les informations et font des prédictions, en reliant ces processus à des applications du monde réel.

Grâce à cette expérience pratique, les élèves ont acquis une compréhension fondamentale de l'apprentissage et du fonctionnement des systèmes d'IA. Pour approfondir leur compréhension, l'enseignant peut mener une discussion réflexive autour des questions clés suivantes :

1. « Qu'avez-vous appris ? » - Cette question encourage les élèves à articuler leur compréhension du processus d'apprentissage de l'IA, les aidant à consolider leurs connaissances et à identifier les lacunes dans leur compréhension.
2. « À quel point l'IA est-elle intelligente ? » – Cette question de pensée critique incite les élèves à réfléchir à la nature de l'intelligence artificielle par rapport à l'intelligence humaine, ce qui conduit à des discussions sur les capacités et les limites de l'IA et les aide à développer une compréhension plus nuancée de ce que signifie « intelligence » dans différents contextes.
3. « Comment les données d'entrée affectent-elles les résultats de l'IA ? » - Cette question analytique aide les élèves à comprendre la relation cruciale entre la qualité des données de formation et les performances de l'IA, en soulignant l'importance d'ensembles de données diversifiés et impartiaux dans le développement de systèmes d'IA efficaces.

---

## Étape 4 : utiliser l'IA pour améliorer l'empreinte environnementale

### Contexte de la séquence

Cette dernière étape permet aux élèves d'approfondir leurs compétences en programmation grâce à des outils (interfaces et matériel). Elle peut être réalisée en classe. Créez un programme qui exécute une action chaque fois que le modèle d'IA entraîné effectue une prédiction.

### Objectifs d'apprentissage

Cette étape vise à apprendre à utiliser l'intelligence artificielle en lien avec un besoin quotidien. Les élèves apprennent à reconnaître l'utilité de ces outils en améliorant leur empreinte environnementale et à reconnaître lorsqu'ils sont confrontés à l'un d'eux.

### Conceptualisation

Avant de commencer, vous devez évaluer le niveau de connaissances des élèves et les amener à réfléchir aux concepts clés. Pour vous y aider, voici une question à travailler avec eux, qui les aidera à trouver des réponses pour les activités futures.

#### Comprendre l'IA dans la vie quotidienne

L'intelligence artificielle est profondément ancrée dans notre quotidien, se manifestant sous diverses formes avec lesquelles nous interagissons constamment. Dès notre réveil, nous sommes confrontés à l'IA via les systèmes de reconnaissance faciale de nos téléphones, les recommandations de contenu personnalisées sur les réseaux sociaux et les systèmes de navigation intelligents qui optimisent nos itinéraires. Les assistants numériques comme Siri, Google Home et Alexa affichent des capacités avancées de traitement du langage naturel, tandis que les services de streaming utilisent des algorithmes sophistiqués pour analyser et prédire nos préférences en matière de divertissement.

Créez une carte mentale collective avec les élèves, documentant toutes les interactions avec l'IA qu'ils rencontrent au cours d'une journée type. Cette représentation visuelle aide les élèves à prendre conscience de la présence de l'IA dans leur vie.

#### Impact environnemental des systèmes d'IA

L'examen des implications environnementales de ces systèmes d'IA révèle plusieurs façons dont ils contribuent aux efforts de développement durable. Les systèmes de navigation intelligents contribuent à réduire les émissions de carbone en optimisant les itinéraires et en réduisant les embouteillages. Les systèmes domestiques intelligents alimentés par l'IA peuvent améliorer considérablement l'efficacité énergétique grâce à un contrôle intelligent de la température et à une gestion intelligente des ressources. Ces applications démontrent comment l'IA peut être mise à profit pour soutenir les efforts de préservation de l'environnement tout en offrant des avantages pratiques au quotidien.

Analysez : lesquelles de ces technologies d'IA utilisées au quotidien contribuent à réduire votre impact environnemental ? Pensez aux applications de navigation optimisant les itinéraires, aux systèmes de maison intelligente gérant l'énergie ou aux solutions de recyclage basées sur l'IA.

#### Étendre l'apprentissage grâce à AI Odyssey - Datawalk

Pour mieux comprendre la présence de l'IA dans notre environnement, pensez à suivre le protocole SteamCity intitulé « Odyssée de l'IA - Organiser une datawalk ». Cette activité complémentaire permet aux élèves d'apprendre en dehors des cours, en permettant d'identifier et de documenter physiquement l'IA et les systèmes de collecte de données dans leur environnement urbain. En observant et en photographiant divers capteurs, caméras et appareils intelligents dans leur ville, les élèves acquièrent une compréhension concrète de la manière dont les systèmes d'IA collectent et traitent les données en contexte réel.

### Investigation par les élèves

#### Activité 1 : Test sur le terrain de détection des déchets par l'IA (20 minutes)

Cette activité pratique encourage les élèves à appliquer leurs connaissances en IA dans un contexte environnemental réel. En combinant collecte des déchets et validation de l'IA, les élèves acquerront une expérience pratique tout en évaluant de manière critique les performances de l'IA en conditions réelles de terrain. Cette activité favorise la sensibilisation à l'environnement tout en démontrant comment la technologie peut être utilisée pour relever les défis quotidiens du développement durable.

L'activité est lancée par l'enseignant à l'aide de l'interface Vittascience et d'un microcontrôleur. Elle peut être réalisée en groupe.

**Consignes aux élèves** : Pour cette activité, vous utiliserez le modèle d'IA créé aux étapes précédentes pour l'appliquer en conditions réelles. Suivez les étapes ci-dessous :

1. Rassemblez le matériel : un sac poubelle, des gants et un téléphone.
2. Divisez les élèves en petits groupes et attribuez-leur une zone à explorer (terrain d'école, bâtiment ou place publique).
3. Recueillir des informations : a. Un élève ramasse tous les déchets trouvés. b. Un élève utilise le téléphone avec le modèle d'IA créé en classe pour vérifier le tri correct des déchets pour chaque article collecté. c. Un élève enregistre les données : types et quantités de poubelles rencontrées (déchets généraux, papier, verre, etc.), types spécifiques de déchets collectés (articles en papier, déchets alimentaires, etc.) et toute erreur de détection de l'IA.

#### Activité 2 : Défi de classification intelligente des déchets (25 minutes)

Cette activité finale vise à renforcer la compréhension des applications de l'IA par les élèves tout en développant leur conscience environnementale et leurs compétences collaboratives. Elle les aide à comprendre le fonctionnement de l'IA en situation réelle tout en les sensibilisant à l'environnement. L'enseignant guide les groupes d'élèves à travers des exercices pratiques qui rendent l'apprentissage à la fois ludique et enrichissant.

**Instructions pour les élèves** : Pour cette activité, vous utiliserez le modèle d'IA que vous avez créé dans les étapes précédentes pour l'appliquer dans des conditions réelles et les résultats de l'activité 1. De retour en classe, l'enseignant demande aux élèves de réfléchir aux questions suivantes :

- L'IA peut-elle trier tous les déchets ?
- Que faudrait-il pour les trier tous ?
- Est-ce que toutes les poubelles nécessaires au recyclage des déchets retrouvés sur le site étudié ? Dans le cas contraire, rédigez un compte rendu à destination de la mairie ou au directeur de l'école de l'activité et de la possibilité d'améliorer le tri des déchets sur le site étudié.

### Restitution et réflexion

- **Connaissances mobilisées** : Application pratique de modèles d'IA dans des scénarios réels. Sensibilisation aux pratiques de développement durable et de gestion des déchets.
- **Réflexion sur la mise en œuvre en classe** : Les élèves utilisent le modèle d'IA entraîné pour trier les déchets dans leur environnement et analyser les résultats. Les enseignants suscitent des discussions sur le rôle de l'IA dans la résolution des problèmes environnementaux.
- **Résultats d'apprentissage généraux** : Les élèves apprennent comment l'IA peut résoudre des problèmes pratiques, favorisant ainsi la réflexion critique sur l'impact de la technologie sur l'environnement et la société.

Pour conclure ce protocole, engagez les élèves dans une discussion réflexive finale synthétisant leur expérience d'apprentissage. Voici les principaux points de discussion à explorer :

« Comment votre compréhension de l'IA a-t-elle évolué ? » Cette question permet aux élèves de réfléchir à leur parcours d'apprentissage, depuis leurs perceptions initiales jusqu'à leur compréhension actuelle des capacités et des limites de l'IA dans les applications concrètes.

« Quel rôle l'IA peut-elle jouer dans la durabilité environnementale ? » Grâce à cette discussion, les élèves pourront relier leur expérience pratique à des défis environnementaux plus vastes et comprendre comment les outils d'IA peuvent contribuer à résoudre des problèmes concrets.

« Quelles sont les applications pratiques et les limites de l'IA au quotidien ? » Cette réflexion aide les élèves à développer une perspective équilibrée sur l'IA, en reconnaissant à la fois son potentiel et ses contraintes face aux défis du quotidien.

Le protocole démontre comment l'IA peut être un puissant outil d'amélioration environnementale lorsqu'elle est correctement comprise et appliquée. Les élèves repartent avec une expérience pratique de la mise en œuvre de l'IA, une compréhension approfondie de la responsabilité environnementale et un esprit critique sur le rôle de la technologie dans la résolution de problèmes concrets.

---

## Pour aller plus loin

### Adaptation pédagogique

Ce protocole offre une flexibilité de mise en œuvre à différents niveaux d'enseignement. De la maternelle au lycée, les enseignants peuvent adapter la complexité aux capacités de leurs élèves. Au primaire, les élèves peuvent se concentrer sur l'identification et le tri des déchets à l'aide d'outils visuels simples. Les collégiens peuvent s'initier à la programmation par blocs, tandis que les lycéens peuvent se plonger dans la programmation Python et créer des outils d'analyse de données sophistiqués. Cette progression permet aux élèves non seulement de comprendre les concepts de l'IA, mais aussi de développer des compétences pratiques en gestion et visualisation des données environnementales.

### Parcours de carrière en science des données

Pour initier les élèves aux carrières en science des données, ils peuvent explorer le quotidien des data scientists grâce à des stages virtuels d'observation, des entretiens avec des professionnels et des exercices pratiques d'analyse de données. Les élèves peuvent acquérir les compétences essentielles requises, telles que l'analyse statistique, la programmation et la visualisation de données. Ils peuvent travailler sur divers projets d'IA impliquant la reconnaissance d'images, la détection de formes et la modélisation prédictive. Cette approche pratique permet aux élèves de comprendre les aspects techniques de la science des données et ses applications dans différents domaines, notamment la protection de l'environnement et le développement durable.

---

## Bibliographie

L'IA dans le tri et le recyclage des déchets :
- **IA et tri des déchets** : les efforts pionniers de ZenRobotics. Source: ZenRobotics URL: https://zenrobotics.com/ Pionnier dans l'utilisation de bras robotisés alimentés par l'IA pour trier les déchets de construction, jetant les bases de l'IA dans la gestion des déchets.
- **Apprentissage automatique avancé pour le recyclage** : la vision d'AMP Robotics. Source: AMP Robotics URL: https://www.amprobotics.com/ Développer des systèmes d'IA qui trient les matières recyclables à grande vitesse, dépassant de loin les capacités humaines.
- **IA et vision par ordinateur dans le recyclage** : la percée de Recycleye. Source: Recycleye URL: https://recycleye.com/ Des systèmes basés sur l'IA capables de reconnaître plus de 500 catégories de déchets avec une précision quasi parfaite, faisant progresser l'avenir du recyclage.

Fondamentaux de l'IA et apprentissage automatique :
- **Machine Learning Mastery URL**: https://machinelearningmastery.com/ Un site Web populaire pour les didacticiels pratiques d'apprentissage automatique.
- **Towards Data Science URL**: https://towardsdatascience.com/ Une publication en ligne contenant de nombreux articles sur l'apprentissage automatique, l'intelligence artificielle et la science des données.
- **Kaggle URL**: https://www.kaggle.com/ Une plateforme pour les concours et les ensembles de données en science des données.
- **Google AI Blog URL**: https://ai.googleblog.com Le blog IA de Google présente les dernières recherches, avancées et actualités dans le domaine de l'IA et de l'apprentissage automatique.
- **Coursera**: Machine Learning by Andrew Ng URL: https://www.coursera.org/learn/machine-learning Un cours en ligne fondamental d'Andrew Ng qui présente les bases de l'apprentissage automatique.

Outils et plateformes d'IA pour les enseignants et les élèves du secondaire :
- **Guide d'utilisation sur l'intelligence artificielle** : version Micro:bit. Source: Vittascience URL: https://fr.vittascience.com/learn/tutorial.php?id=403/guide-d-utilisation-intelligence-artificielle-version-micro-bit
- **Teachable Machine by Google URL**: https://teachablemachine.withgoogle.com/ Un outil convivial qui aide les élèves à comprendre le fonctionnement de l'apprentissage automatique.
- **TensorFlow for Kids URL**: https://www.tensorflow.org/learn TensorFlow fournit des outils d'IA et d'apprentissage automatique adaptés aux débutants.
- **ML4K- Machine Learning for Kids URL**: https://machinelearningforkids.co.uk/ Une plateforme d'IA conçue pour permettre aux jeunes élèves de s'initier à l'apprentissage automatique grâce à des projets ludiques.

---

> Ce protocole fait partie du curriculum STEAMCITY. Ce travail est sous licence Creative Commons Attribution-ShareAlike 4.0 International License et a été réalisé avec le soutien de la Commission européenne. Son contenu n'engage que son auteur et la Commission ne peut être tenue responsable de l'usage qui pourrait être fait des informations qu'il contient.

---

*Cette fiche fait partie du projet [SteamCity](/projets/steamcity), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

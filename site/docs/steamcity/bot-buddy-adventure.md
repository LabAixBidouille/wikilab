---
id: bot-buddy-adventure
title: "Créer un chatbot d'accessibilité urbaine"
sidebar_label: "Créer un chatbot d'accessibilité urbaine"
sidebar_position: 20
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Créer un chatbot d'accessibilité urbaine

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Technologie et ingénierie</span>
  <span className="badge badge--primary">Art et design</span>
  <span className="badge badge--primary">Physique et chimie</span>
  <span className="badge badge--info">Intelligence artificielle et nouvelles technologies</span>
  <span className="badge badge--secondary">Engagement citoyen, gouvernance et données</span>
</div>

| Projet | Durée | Difficulté |
|---|---|---|
| SteamCity | 4 séances de 30 à 60 minutes | Modéré |

## Matériel

- Ordinateur et appareil mobile (smartphone)
- Accès à [CodeSkool](https://ide.codeskool.cc/)

**Ressources en ligne :**
- **Introduction au prompting** : https://www.youtube.com/watch?v=8IQ9i_QoA3A
- **Introduction aux modèles de langage** : https://youtu.be/K8gOvC8gvB4

<PdfLink href="/pdf/steamcity/Protocol_BotBuddyAdventure_FR.pdf">Télécharger en PDF</PdfLink>

</div>


<img src="/img/ressources/steamcity/bot-buddy-adventure/icone.png" alt="Chatbot d'accessibilité urbaine" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>


---

## Introduction

Un agent conversationnel, souvent appelé chatbot ou assistant virtuel, est un programme informatique conçu pour converser en langage naturel avec les utilisateurs. Il utilise divers algorithmes et techniques de traitement du langage pour comprendre et répondre aux requêtes ou commandes des utilisateurs, en fournissant des informations, de l'assistance, ou en effectuant des tâches telles que la reconnaissance vocale pour convertir les mots parlés en texte, le traitement du langage naturel pour comprendre l'intention de l'utilisateur, l'analyse sémantique pour extraire le sens du texte, la gestion du dialogue pour maintenir le flux de conversation ou la synthèse vocale pour les réponses orales.

Pour développer un agent conversationnel autonome, il faut comprendre les fonctions techniques requises et concevoir une solution pour chacune. Une bonne combinaison de reconnaissance vocale, de traitement du langage naturel et de synthèse vocale permet aux utilisateurs d'interagir avec l'agent de manière naturelle et intuitive.

Dans ce protocole « Bot Buddy Adventure », les élèves exploreront le développement d'un agent conversationnel en identifiant et en implémentant ses fonctions techniques clés. Ils apprendront à utiliser la reconnaissance vocale pour convertir la voix en texte, le traitement du langage naturel pour comprendre l'intention de l'utilisateur, et la synthèse vocale pour produire les réponses. En manipulant ces technologies, ils verront concrètement comment l'intelligence artificielle permet une interaction naturelle entre l'humain et l'ordinateur.


Le protocole Bot Buddy Adventure guide les élèves dans la création d'un agent conversationnel qui utilise le GPS, la reconnaissance vocale et l'IA pour faciliter l'accès aux services essentiels, aux transports publics et aux ressources communautaires. Grâce à son interface vocale, cette technologie aide à réduire la fracture numérique : les informations urbaines deviennent accessibles à tous, y compris aux personnes qui ont des difficultés avec les interfaces textuelles. Le protocole ouvre aussi des discussions sur l'accessibilité urbaine et l'inclusion, par exemple sur la façon dont l'IA peut aider des personnes malvoyantes ou âgées à se déplacer dans leur environnement.

### Étape 1 : Fondamentaux du système et précision

Cette première phase porte sur les limites de précision des technologies sur lesquelles reposent les agents conversationnels. Les élèves comparent les systèmes de géolocalisation et de reconnaissance vocale sur différentes plateformes et dans différents environnements. Ils notent systématiquement les écarts de performance, et ces contraintes réelles guideront ensuite leurs choix de conception.

#### Étape 2 : Collecte de données et gestion de l'information

À partir des limites observées, les élèves réalisent un premier prototype fonctionnel. Cette phase introduit les variables, la « mémoire » du programme : les élèves apprennent à capturer et à stocker les coordonnées GPS et les entrées vocales. En programmant dans CodeSkool, ils créent la couche de collecte de données de leur agent conversationnel.

#### Étape 3 : Traitement des données dans un système fondé sur l'IA

Cette phase transforme les données brutes en informations utiles grâce à l'IA. Les élèves découvrent les modèles de langage et l'ingénierie des prompts : ils apprennent à rédiger des instructions qui guident les réponses de l'IA. En testant et en corrigeant leurs prompts, ils convertissent les coordonnées en noms de lieux lisibles et apprennent à écrire des prompts adaptés au contexte. Ils comprennent ainsi les capacités et les limites des modèles de langage.

#### Étape 4 : Diffusion d'informations accessibles aux utilisateurs finaux

La dernière phase achève l'agent conversationnel en ajoutant la sortie vocale et la conception du dialogue. Les élèves règlent les paramètres de synthèse vocale, construisent des dialogues logiques et écrivent des prompts qui donnent des informations pertinentes sur la ville. Cette activité réunit tous les composants précédents en un assistant entièrement vocal, capable d'avoir une conversation naturelle.

Au fil de ces quatre étapes, les élèves développent à la fois des compétences techniques et une réflexion critique sur les systèmes d'IA.

### Structure de l'activité

Le protocole compte quatre étapes, qui s'appuient chacune sur la précédente. Le schéma ci-dessous les résume.


<figure style={{margin: '1rem auto', textAlign: 'center'}}>
  <img src="/img/ressources/steamcity/bot-buddy-adventure/StructureSchema.png" alt="Structure du protocole" style={{maxWidth: '100%', height: 'auto', margin: '0 auto'}} />
  <figcaption style={{margin: 0}}>Structure du protocole</figcaption>
</figure>

### Glossaire

- **Agent conversationnel** : Également connu sous le nom de chatbot, un agent conversationnel intelligent est un programme logiciel robotisé qui utilise une base de données pour communiquer avec un humain en langage naturel, soit verbalement soit par écrit.
- **Analyse sémantique** : L'analyse sémantique permet aux ordinateurs d'interpréter le contexte correct des mots ou expressions ayant plusieurs significations, ce qui rend plus précises les applications de traitement du langage naturel qui portent sur du texte. Elle identifie aussi les relations entre les éléments de données.
- **Traitement du langage naturel** : Le traitement automatique du langage naturel est un domaine multidisciplinaire impliquant la linguistique, l'informatique et l'intelligence artificielle. Il vise à créer des outils capables d'interpréter et de synthétiser du texte pour diverses applications.
- **Modèle de langage** : Un système d'IA entraîné sur de grandes quantités de données textuelles pour comprendre et générer un langage similaire à celui des humains, capable d'effectuer des tâches comme la complétion de texte, la traduction et la réponse à des questions.
- **Ingénierie des prompts** : La pratique consistant à élaborer des instructions d'entrée efficaces pour les modèles de langage afin d'obtenir les résultats souhaités, nécessitant une attention particulière au contexte, à la clarté et aux contraintes.
- **Synthèse vocale** : Technologie qui convertit le texte écrit en mots parlés, utilisant l'intelligence artificielle pour générer une parole au son naturel avec un rythme et une intonation appropriés.

---

## Étape 1 : Fondamentaux du système et précision

### Contexte de la séquence

Dans le protocole Bot Buddy Adventure, les élèves développent une application avec un agent conversationnel autonome pour aider à découvrir des activités locales. Lors de la première étape, « Fondamentaux du système et précision », ils analyseront les limites de précision des systèmes de positionnement géographique et de reconnaissance vocale. Les élèves apprendront à déterminer la localisation avec précision et à évaluer la fiabilité de l'interaction vocale par rapport à la saisie de texte.

### Objectifs d'apprentissage

Comprendre le fonctionnement de la géolocalisation et du GPS, et les limites de leur précision. Évaluer la fiabilité des solutions de reconnaissance vocale dans différents environnements et conditions d'utilisation. Développer des compétences de résolution de problèmes sur des projets qui font appel à la géolocalisation et à la reconnaissance vocale. Apprendre à repérer les problèmes possibles et à reprendre la conception pour améliorer les performances et l'efficacité d'un système.


### Conceptualisation


Dans cette première étape, les élèves explorent le fonctionnement des services géolocalisés et des interfaces vocales, qui forment ensemble les entrées d'un assistant de navigation urbaine accessible. Le projet vise à aider tous les utilisateurs à se déplacer en ville, avec une attention particulière aux besoins d'accessibilité. L'assistant doit savoir où se trouve l'utilisateur et comprendre ce qu'il demande : toutes les fonctionnalités suivantes s'appuient sur ces deux entrées.

:::question[Question de recherche 1 : Conscience de la localisation]
Comment peut-on déterminer avec précision la position physique d'un utilisateur dans un environnement urbain pour fournir des informations localisées et pertinentes ?
:::

:::hypothese[Hypothèse]
En utilisant la technologie GPS, nous pouvons créer un système qui détermine de manière fiable la localisation de l'utilisateur dans les environnements urbains avec une précision suffisante pour fournir des informations locales pertinentes.
:::

**Concepts clés :**

- **Fondamentaux du GPS** : Le GPS fonctionne grâce à un réseau de satellites qui transmettent des signaux contenant des informations temporelles précises. Les récepteurs calculent leur position en mesurant le temps que mettent les signaux à arriver de plusieurs satellites (triangulation).
- **Facteurs de précision du GPS** : La qualité du signal varie en fonction des conditions atmosphériques, des bâtiments environnants et de la qualité du récepteur, avec une précision typique des smartphones allant de plusieurs mètres dans des conditions optimales à des mesures moins précises dans des environnements urbains difficiles.
- **Contexte géospatial** : Comprendre comment les coordonnées brutes se rapportent à des lieux concrets comme les rues, les quartiers et les points d'intérêt dans une ville.

:::question[Question de recherche 2 : Accessibilité vocale]
Comment peut-on s'assurer que notre interface accepte les commandes vocales et les convertit efficacement en requêtes qu'un système peut traiter ?
:::

:::hypothese[Hypothèse]
En implémentant des directives robustes pour notre système de reconnaissance vocale, nous pouvons créer une interface vocale qui comprend de manière fiable les demandes des utilisateurs, quels que soient leur façon de parler, leur accent et les conditions environnementales.
:::

**Concepts clés :**

- **Traitement de la reconnaissance vocale** : L'entrée vocale passe par quatre étapes clés : capture audio, extraction de caractéristiques (identification des phonèmes), modélisation acoustique (association des sons aux mots) et modélisation linguistique (détermination des séquences de mots probables).
- **Considérations d'accessibilité** : Comment les interfaces vocales suppriment les barrières pour les utilisateurs ayant différentes capacités et besoins, y compris les déficiences visuelles ou motrices et les difficultés de lecture.
- **Défis environnementaux** : Comprendre comment le bruit de fond, les accents et les façons de parler affectent la précision de reconnaissance et développer des stratégies pour améliorer la fiabilité.

Explorer les deux questions en parallèle montre aux élèves comment GPS et reconnaissance vocale se complètent pour offrir un service accessible et géolocalisé. Les activités d'investigation permettront aux élèves de tester leurs hypothèses en manipulant des services de localisation et de reconnaissance vocale.

### Investigation par les élèves

#### Explorer les capacités du GPS

Dans cette première activité, les élèves exploreront comment intégrer la fonctionnalité GPS dans leur assistant virtuel en comparant différentes méthodes de géolocalisation et en considérant le niveau de précision nécessaire pour leur projet. Faites tester aux élèves plusieurs solutions GPS pour comprendre les capacités et les limites des services de localisation, indépendamment de la méthode d'implémentation spécifique.

Faites-leur accéder au GPS intégré de leur appareil via leur application de cartes (Google Maps, Apple Maps) pour comprendre comment fonctionnent les coordonnées géographiques en pratique. Demandez-leur d'enregistrer leur latitude et longitude actuelles pendant qu'ils sont en classe. Lorsque les élèves compareront leurs résultats, ils remarqueront de petites variations alors qu'ils se trouvent au même endroit.


Faites-leur expérimenter des méthodes GPS alternatives comme les services de cartographie en ligne, les applications GPS dédiées et les applications web qui utilisent l'API de géolocalisation du navigateur. Demandez-leur de comparer les résultats de localisation qu'ils obtiennent sur différents appareils.

Les élèves peuvent remplir le tableau suivant avec leurs mesures et observer comment la précision de localisation varie selon les différents appareils et technologies.

| Type d'appareil | Latitude | Longitude | Variation par rapport à la référence |
|---|---|---|---|
| GPS pour smartphone |  |  |  |
| GPS pour tablette |  |  |  |
| Localisation navigateur portable |  |  |  |
| Appareil GPS dédié |  |  |  |

Pour la colonne « Variation par rapport à la référence », les élèves peuvent choisir une mesure comme point de référence (peut-être l'appareil le plus précis disponible) et calculer à quel point les autres mesures en diffèrent.

Animez une discussion sur ces variations, en vous concentrant sur leurs implications pour un agent conversationnel qui s'appuie sur la localisation :

- Un assistant virtuel aidant les gens à découvrir des activités locales a-t-il besoin d'une précision millimétrique (à 1-2 mètres près) ou juste d'une conscience générale du quartier ?
- Comment la précision requise dépend-elle du cas d'usage spécifique ? Par exemple, trouver le restaurant le plus proche pourrait ne nécessiter qu'une localisation approximative, tandis que fournir des directions étape par étape nécessite une plus grande précision.
- Quels facteurs environnementaux semblent affecter la précision du GPS ? (Matériaux de construction, météo, densité urbaine)
- Comment ces limites de précision pourraient-elles influencer la conception de votre assistant virtuel ?

Faites conclure les élèves en déterminant le niveau de précision nécessaire pour leur assistant local et en notant les difficultés à prévoir.

#### Explorer les limites de la reconnaissance vocale

De même, pour la reconnaissance vocale, les élèves peuvent expérimenter avec différents assistants vocaux (Siri, Google Assistant, Alexa...), la reconnaissance vocale dans le navigateur, des logiciels de dictée dédiés, ou même les fonctionnalités de saisie vocale dans les traitements de texte. Ce qui compte est d'observer comment ces systèmes se comportent selon les conditions, quel que soit l'environnement de programmation utilisé.

Pour effectuer leur test, faites-leur créer un ensemble de phrases de test liées à la navigation urbaine que leur assistant pourrait avoir besoin de comprendre, telles que : « Où est le parc le plus proche ? », « Comment puis-je aller au musée ? », « Y a-t-il des cafés dans les environs ? », « À quelle heure ferme le cinéma ? ».

Expérimentez avec différentes conditions d'élocution : parler clairement versus naturellement, différentes distances du microphone, avec et sans bruit de fond, avec différents locuteurs (camarades de classe avec des voix/accents variés).

Analysez les résultats pour identifier des régularités : Quels types de phrases sont reconnus le plus précisément, quels mots ou sons sont fréquemment mal interprétés, quelles conditions d'élocution produisent les meilleurs résultats ? Enregistrez les résultats dans un tableau simple montrant :

Phrase reconnue par Appareil                Phrase prononcée                  Ton utilisé                                             Précision le système Notez si vous avez parlé Précisez le système utilisé   Entrez la phrase exacte que                             Écrivez ce que le système a     Évaluez la précision lentement, rapidement, avec pour le test              vous avez prononcée                                            entendu             (Bon/Correct/Médiocre) un accent Siri Hé Google Alexa Cortana Logiciel de dictée

Après avoir collecté les données, guidez les élèves dans l'analyse des résultats pour identifier des régularités :

- Quels types de phrases sont reconnus le plus précisément sur tous les systèmes ?
- Quels mots ou sons sont fréquemment mal interprétés ?
- Quelles conditions d'élocution produisent les meilleurs et les pires résultats ?
- Certains systèmes fonctionnent-ils mieux pour des types spécifiques de phrases ?
- Comment les accents ou les façons de parler affectent-ils la précision de reconnaissance ?

Animez une discussion sur les implications de ces découvertes pour concevoir des interfaces vocales :

- Comment pourriez-vous concevoir votre assistant pour minimiser les malentendus ?
- Quelles stratégies pourraient aider les utilisateurs à parler de manière que le système puisse comprendre ?
- Comment pourriez-vous gérer les résultats de reconnaissance incertains ?
- Quelles méthodes de secours pourraient aider lorsque la reconnaissance vocale échoue ?

En identifiant les erreurs de reconnaissance communes sur toutes les plateformes, les élèves peuvent développer des stratégies pour améliorer la fiabilité, comme concevoir des étapes de confirmation pour les commandes ambiguës ou fournir un retour visuel sur ce que le système a compris.


### Restitution et réflexion


- **Connaissances mobilisées** : Dans la première étape de l'aventure Bot Buddy, les élèves ont établi les bases de leur agent conversationnel en analysant la précision et les limites des technologies GPS et de reconnaissance vocale. Ils ont testé diverses technologies sur le terrain, découvrant que la précision géographique varie selon les appareils et l'environnement. Ils ont réalisé que des facteurs comme les matériaux de construction affectent la fiabilité du positionnement. De plus, leurs essais sur la reconnaissance vocale ont révélé l'impact de la diction, des bruits environnants et des accents sur la qualité de reconnaissance. En identifiant les erreurs d'interprétation, ils ont mieux compris les défis à relever pour concevoir des interfaces vocales efficaces, ce qui a guidé des choix de conception fondés sur l'expérience pratique.
- **Réflexion sur la mise en œuvre en classe** : Cette étape associe exploration concrète et analyse comparative. Tester le GPS dans divers environnements rend les notions abstraites concrètes et fait pratiquer l'investigation scientifique. La collecte de données favorise l'apprentissage entre pairs, et les tests comparatifs font réfléchir aux limites des technologies. Pour l'évaluation, regardez si les élèves tirent de leurs mesures des conclusions étayées et s'ils expliquent comment ces découvertes influent sur leurs choix de conception.
- **Résultats d'apprentissage généraux** : Les élèves ont appris à concevoir des protocoles de test pour repérer les forces et les faiblesses des technologies, et à analyser leurs résultats avec un regard critique. Ils savent que la précision des données d'entrée compte, et cherchent des solutions pour leur agent conversationnel en tenant compte des contraintes.


Questions pour une discussion ou un écrit de réflexion :

1. Comment l'environnement physique affecte-t-il la précision du GPS, et quelles sont les implications pour les services géolocalisés ?
2. Quels schémas émergent dans les performances de reconnaissance vocale selon différentes conditions ? Considérez des facteurs comme le bruit de fond, les accents et les façons de parler, et discutez des solutions de conception potentielles pour améliorer l'accessibilité.
3. Comment les technologies GPS et de reconnaissance vocale peuvent-elles fonctionner ensemble efficacement tout en préservant la vie privée des utilisateurs ? Quelles considérations de sécurité doivent être prises en compte lors de la collecte et du stockage de ces données sensibles ?
4. Qui bénéficie le plus de la combinaison du GPS et des interfaces vocales, et comment pouvons-nous nous assurer que ces technologies restent accessibles à des groupes d'utilisateurs diversifiés ?

---

## Étape 2 : Collecte de données et gestion de l'information

### Contexte de la séquence

Grâce à l'étape 1, les élèves comprennent les limites de précision des technologies GPS et de reconnaissance vocale. Dans l'étape 2, ils vont implémenter un système de base pour collecter ces deux données d'entrée. Ils vont créer dans CodeSkool un prototype fonctionnel qui capture la localisation et les entrées vocales, en tenant compte des limites réelles qu'ils ont identifiées. Ce prototype est la couche de collecte de données de leur Bot Buddy Assistant Urbain : il stocke les informations que les étapes suivantes traiteront.

### Objectifs d'apprentissage

Implémenter une fonctionnalité GPS de base pour récupérer et stocker les coordonnées de localisation de l'utilisateur. Créer une interface de reconnaissance vocale simple qui convertit la parole en texte. Comprendre les types de variables et leur rôle dans le stockage d'informations. Implémenter des flux de traitement de données qui relient la conscience de localisation aux requêtes des utilisateurs. Développer des compétences techniques pour travailler avec les capteurs d'appareils et les API externes.


### Conceptualisation


:::question[Question de recherche 1 : Collecte de données de localisation]
Comment peut-on implémenter un système qui capture et stocke efficacement la position physique d'un utilisateur pour des usages ultérieurs ?
:::

:::hypothese[Hypothèse]
En utilisant l'extension Capteurs de Téléphone de CodeSkool et en implémentant des variables appropriées, les élèves peuvent créer un système qui capture et stocke les coordonnées de localisation avec une fiabilité suffisante pour un assistant de navigation urbaine.
:::

**Concepts clés :**

- **Variables** : Constructions de programmation qui servent de conteneurs pour le stockage de données, similaires à des boîtes étiquetées dans la mémoire de l'ordinateur. Les variables permettent aux programmes de stocker temporairement et de rappeler des informations comme les coordonnées, les mesures ou le texte dans la RAM (Mémoire Vive). Tout comme la mémoire à court terme humaine retient temporairement les informations, la RAM stocke les données des variables uniquement pendant que l'ordinateur est allumé, contrairement au stockage permanent sur un disque dur.
- **Accès aux capteurs** : Méthodes pour accéder aux capacités GPS d'un appareil via des interfaces de programmation, y compris la gestion de la possible indisponibilité.
- **Retour utilisateur** : Techniques pour communiquer aux utilisateurs les données de localisation et leur fiabilité, pour qu'ils en comprennent les limites possibles.

:::question[Question de recherche 2 : Collecte d'entrées vocales]
Comment peut-on implémenter un système qui capture efficacement les entrées vocales et les convertit en texte tout en tenant compte des limites de la reconnaissance ?
:::

:::hypothese[Hypothèse]
En utilisant l'extension Parole vers Texte de CodeSkool et en implémentant des mécanismes de retour appropriés, les élèves peuvent créer un système qui capture et stocke de manière fiable les requêtes des utilisateurs dans un format adapté au traitement ultérieur.
:::

**Concepts clés :**

- **Capture de parole** : Méthodes pour activer et traiter les entrées vocales via des interfaces de programmation, incluant la reconnaissance de commandes vocales et la transcription.
- **Stockage et analyse de texte** : Approches pour stocker la parole transcrite dans des variables et identifier les mots-clés ou phrases pour déterminer l'intention de l'utilisateur. Par exemple, rechercher des termes spécifiques comme « où », « comment » ou « quoi » peut aider à catégoriser le type de demande.
- **Traitement des requêtes utilisateur** : Techniques pour analyser et catégoriser les requêtes des utilisateurs en identifiant les types de commandes (par exemple, demandes de localisation, requêtes d'information) et en extrayant les mots-clés pertinents pour générer des réponses appropriées.
- **Retour de reconnaissance** : Techniques pour confirmer la compréhension, stocker les informations pertinentes dans des variables pour un usage futur, et gérer les erreurs potentielles de reconnaissance par des invites de vérification.


### Investigation par les élèves


L'exemple de cette fiche utilise le logiciel de programmation par blocs CodeSkool (https://ide.codeskool.cc/). CodeSkool convient bien à ce projet car il combine l'intégration d'Open AI, des extensions de capteurs de téléphone et la synthèse vocale.


Plusieurs alternatives existent à CodeSkool. Scratch propose des extensions de géolocalisation qui fournissent des fonctionnalités similaires dans un environnement par blocs. MIT App Inventor inclut des composants de localisation intégrés spécialement conçus pour le développement d'applications mobiles. Pour les classes ayant une expérience de programmation plus avancée, les bibliothèques Python comme geocoder ou geopy offrent des services de localisation sophistiqués qui peuvent être intégrés dans des applications plus larges.


#### Entrer dans CodeSkool et stocker les informations GPS à l'aide de variables

Les variables sont la « mémoire » de votre programme : elles retiennent des données, comme la localisation de l'utilisateur, qui peuvent servir dans différentes parties de votre application.

Dans cette première activité, les élèves apprendront à créer des variables pour stocker les coordonnées GPS de l'utilisateur.

Pour implémenter la fonctionnalité GPS, les élèves doivent commencer par créer un nouveau projet et accéder à l'éditeur dans CodeSkool.

Avant d'accéder à toute donnée GPS, ils doivent établir des emplacements mémoire dans leur programme où cette information sera stockée. Ils doivent commencer par aller dans la section **« Variables »** de la palette de blocs et cliquer sur **« Créer une variable »**.

Les élèves doivent créer une variable nommée **« Latitude »** pour stocker la position nord-sud de l'utilisateur.

Puis, ils doivent retourner dans la section **« Variables »** et créer une seconde variable nommée **« Longitude »** pour stocker la position est-ouest. Ensemble, ces deux variables donnent la position géographique complète.

Maintenant que les élèves ont créé les conteneurs mémoire pour leurs données de localisation, ils doivent accéder aux capacités GPS de l'appareil pour remplir ces variables avec de vraies coordonnées. Depuis l'interface principale, ils doivent accéder au bouton **« Extensions »** situé tout à la fin de la barre d'outils. Dans la bibliothèque d'extensions, rechercher **« Phone sensors »** et ajouter cette extension à leur projet pour accéder à la fonctionnalité GPS.

Après avoir ajouté l'extension, ils peuvent trouver des blocs liés au GPS dans la nouvelle catégorie qui apparaît dans leur palette de blocs. Ils peuvent rechercher la sous-catégorie de blocs appelée « GPS location » dans laquelle ils devraient trouver le bloc « current location » pour la longitude et la latitude.

Les élèves ont maintenant tous les blocs et variables nécessaires. Pour assembler le programme :

1. Pour déclencher le processus de collecte de données, ajouter un bloc d'événement **« Quand le bouton est cliqué »** à votre espace de travail. Ceci servira de point de départ pour capturer la localisation de l'utilisateur.
2. Depuis la section **« Variables »**, faire glisser deux blocs **« mettre [variable] à [valeur] »** et les connecter à votre événement bouton.
3. Configurer le premier bloc pour définir **« Latitude »** et le second pour définir **« Longitude »**.
4. Connecter les blocs **« position actuelle »** appropriés de l'extension Capteurs de Téléphone à chaque valeur de variable. Sélectionner **« latitude »** pour la première variable et **« longitude »** pour la seconde.
5. Cliquer sur le drapeau vert dans le panneau de test pour vérifier que vos variables stockent bien l'information.

<img src="/img/ressources/steamcity/bot-buddy-adventure/code/cliquer-sur-le-drapeau-vert-dans-le-panneau-de-test-pour-ver.png" alt="Code" style={{maxWidth: '100%', height: 'auto'}} />


Ce programme fonctionnera soit sur l'ordinateur en utilisant la localisation de la machine, soit via un appareil mobile grâce à l'extension Capteurs de Téléphone.

#### Implémenter et tester la reconnaissance vocale

<img src="/img/ressources/steamcity/bot-buddy-adventure/code/implementer-et-tester-la-reconnaissance-vocale.png" alt="Code" style={{maxWidth: '100%', height: 'auto'}} />

En s'appuyant sur le programme créé, les élèves devront implémenter la seconde fonctionnalité pour la reconnaissance vocale. Sur le même éditeur, les élèves doivent retourner au bouton « Extensions » à la fin de la barre d'outils et chercher « Speech to Text » dans la bibliothèque d'extensions pour l'ajouter au projet.


Après avoir ajouté l'extension, ils peuvent trouver des blocs liés à la reconnaissance vocale dans la nouvelle catégorie qui apparaît dans leur palette de blocs. Ils doivent chercher le bloc « Écouter et attendre ». Pour plus de clarté dans les blocs, faire ajouter aux élèves un second bloc « Quand le bouton est cliqué » pour identifier les deux fonctionnalités de base du système.

Une fois que les élèves ont implémenté la fonctionnalité de reconnaissance vocale de base, ils peuvent réutiliser la même méthode de test qu'à l'étape 1 pour évaluer systématiquement sa précision afin de comprendre ses capacités et ses limites. Ils peuvent réutiliser les phrases de test et compléter leur tableau avec les capacités de leur propre système :

Phrase prononcée                    Reconnaissance du système                                Précision La phrase formulée par les élèves   Ce que le système transcrit de votre discours   Évaluation de la compréhension (Bonne / Passable / Mauvaise)

« Où est le parc le plus proche ? » « Emmène-moi au musée » « Y a-t-il un café à proximité? » « À quelle heure est-il pour le cinéma ? »

### Restitution et réflexion


- **Connaissances mobilisées** : Dans cette deuxième étape du protocole Bot Buddy Adventure, les élèves ont créé un prototype fonctionnel qui collecte les deux entrées de leur agent conversationnel : les données de localisation et les requêtes vocales. Ils ont appris à accéder aux capteurs de l'appareil par les extensions de CodeSkool, à stocker les informations dans des variables, et à faire une analyse de base des demandes des utilisateurs. Ils comprennent comment les variables permettent à un programme de se souvenir des saisies de l'utilisateur et des relevés de capteurs, ce qui servira de base à une gestion de données plus complexe dans les étapes suivantes.
- **Réflexion sur la mise en œuvre en classe** : Cette étape d'implémentation fonctionne mieux avec une approche pratique et exploratoire où les élèves peuvent tester leur code fréquemment. Envisagez de faire travailler les élèves en binômes, avec un élève qui énonce des requêtes pendant que l'autre observe comment le système répond. Pour résoudre les problèmes techniques courants, vous pouvez créer un document partagé où les élèves peuvent noter les difficultés qu'ils rencontrent et les solutions qu'ils découvrent. Ce document peut aussi servir pour les étapes suivantes du protocole.
- **Résultats d'apprentissage** : Les élèves ont appris à accéder par programmation aux capteurs de l'appareil pour capturer des données réelles, comme la localisation et les entrées vocales. Ils savent stocker différents types d'informations dans des variables, que le programme peut ensuite utiliser dans différentes fonctions.


Questions pour une discussion ou un écrit de réflexion :

1. Comment les variables permettent-elles à votre programme de « se souvenir » d'informations, et quelles données supplémentaires pourriez-vous avoir besoin de stocker pour rendre votre agent conversationnel plus utile et sensible au contexte ?
2. Quels défis avez-vous rencontrés lors de l'implémentation du GPS et de la reconnaissance vocale, et comment votre compréhension de l'étape 1 vous a-t-elle aidé à relever ces défis ?
3. Comment votre analyse des requêtes pourrait-elle être améliorée pour mieux comprendre les intentions des utilisateurs et gérer les situations où le GPS ou la reconnaissance vocale fonctionnent mal ?
4. Comment la capacité à stocker des informations dans des variables crée-t-elle de nouvelles possibilités pour les types d'assistance que votre agent conversationnel pourrait fournir ?

---

## Étape 3 : Traitement des données dans un système fondé sur l'IA

### Contexte de la séquence

Grâce aux étapes 1 et 2, les élèves ont déjà exploré les limites de précision des technologies de localisation et vocales, et implémenté un système de base qui collecte et stocke ces données à l'aide de variables. À l'étape 3, ils doivent traiter ces données brutes pour produire des réponses utiles. Des coordonnées de latitude et longitude et des requêtes vocales transcrites ne fournissent pas, seules, les informations contextuelles dont les utilisateurs ont besoin. Dans cette étape, les élèves exploreront comment l'intelligence artificielle, plus précisément les modèles de langage, peut transformer ces données brutes en informations personnalisées, localisées et actualisées.

### Objectifs d'apprentissage

Comprendre le fonctionnement des modèles de langage et la façon dont ils traitent l'information. Apprendre les bases de l'ingénierie des prompts pour communiquer efficacement avec les systèmes d'IA. Développer des compétences pour intégrer les données de géolocalisation et les requêtes utilisateur dans des prompts bien structurés. Implémenter un système qui relie leur code de collecte de données aux capacités d'IA. Évaluer de manière critique les réponses d'IA pour leur précision et leur pertinence par rapport aux besoins des utilisateurs.


### Conceptualisation


Dans cette troisième étape, les élèves passent de la collecte des données à leur analyse. Leur assistant capture déjà la localisation et la voix ; ils explorent maintenant comment l'intelligence artificielle peut transformer ces données brutes en réponses pertinentes et utiles. Le modèle de langage est le « cerveau » de l'assistant : il traite les entrées et génère les réponses.

:::question[Question de recherche 1 : Intégration de l'IA]
Comment peut-on utiliser les modèles de langage pour transformer les données brutes de localisation et de requête en informations personnalisées et contextuellement pertinentes sur les environnements urbains ?
:::

:::hypothese[Hypothèse]
En élaborant des prompts bien structurés qui incorporent à la fois le contexte de localisation de l'utilisateur et les spécificités de sa requête, nous pouvons exploiter les modèles de langage pour générer des réponses pertinentes et précises sur les activités locales et les points d'intérêt. À partir de l'analyse de données historiques et des retours des utilisateurs, l'agent conversationnel peut également personnaliser ses recommandations au fil du temps.
:::

**Concepts clés :**

- **Modèles de langage** : Systèmes d'IA entraînés sur de vastes ensembles de données textuelles qui peuvent comprendre et générer du texte similaire à celui des humains à partir des entrées qu'ils reçoivent.
- **Ingénierie des prompts** : La pratique d'élaborer des textes d'entrée (prompts) qui guident efficacement les modèles de langage pour produire les sorties désirées.
- **Compréhension contextuelle** : Comment les modèles de langage interprètent l'information en fonction du contexte fourni dans le prompt.

:::question[Question de recherche 2 : Conception de prompts]
Comment peut-on formuler des prompts efficaces qui communiquent clairement à la fois le contexte de localisation et l'intention de l'utilisateur aux modèles de langage ?
:::

:::hypothese[Hypothèse]
En développant un format de prompt structuré qui inclut systématiquement des informations spécifiques, nous pouvons créer des prompts qui produisent de manière cohérente des réponses pertinentes et géolocalisées de la part des modèles de langage.
:::

**Concepts clés :**

- **Structure de prompt** : Organiser l'information dans les prompts selon un format clair et cohérent que les modèles de langage peuvent interpréter de manière fiable.
- **Intégration du contexte géographique** : Méthodes pour incorporer l'information de localisation d'une manière qui aide l'IA à comprendre les relations spatiales.
- **Clarification d'intention** : S'assurer que l'IA interprète correctement la demande de l'utilisateur dans le contexte géographique.


### Investigation par les élèves


Les élèves ajoutent au système de collecte de l'étape 2 une couche d'IA qui traite ces informations pour générer des réponses pertinentes.

#### Comprendre les grands modèles de langage

Avant d'implémenter l'intégration d'IA, les élèves doivent comprendre les bases du fonctionnement des modèles de langage. Commencez par une brève introduction aux modèles de langage comme systèmes d'IA entraînés sur de vastes ensembles de données textuelles qui peuvent comprendre et générer du texte similaire à celui des humains. Faites mener aux élèves une recherche rapide sur les modèles de langage en leur fournissant des ressources recommandées telles qu'une vidéo suggérée (par exemple Comment fonctionnent les modèles de langage), des articles simples expliquant les principes des modèles de langage ou des exemples d'interactions avec des modèles de langage. Cette base aidera les élèves à comprendre pourquoi l'ingénierie des prompts est importante et comment elle influence la qualité des réponses d'IA.

#### Première intégration d'IA : Conversion de localisation en ville

Dans cette étape, les élèves vont implémenter leur première intégration d'IA : transformer des coordonnées GPS brutes en nom de ville. Contrairement aux coordonnées numériques, un nom de ville se lit sans effort, et il est plus utile pour le système comme pour ses utilisateurs. Il servira aussi dans les prompts plus complexes des activités suivantes, où il aidera l'IA à fournir des informations adaptées au contexte.

**1. Préparer les variables**

Pour implémenter cette conversion des coordonnées en ville dans CodeSkool, encouragez les élèves à préparer leur programme avec plusieurs variables qu'ils pourront activer quand ils en auront besoin. Ils peuvent d'abord créer une nouvelle variable appelée **« Location »** qui va stocker le nom de ville correspondant aux coordonnées GPS et une seconde appelée **« Prompt_Location »**, qui contiendra la structure de la question à poser au modèle d'IA.

**2. Créer la structure du prompt**

La variable **« Prompt_Location »** devrait permettre de transformer les variables latitude et longitude déjà collectées par le programme en nom de ville. Pour structurer clairement ce prompt :


Dans le même bloc d'événement **« Quand le bouton est cliqué »** où ils récupèrent les coordonnées GPS, les élèves doivent ajouter un bloc **« mettre [LocationPrompt] à [valeur] »** qui sera utilisé pour définir la structure du prompt.

<img src="/img/ressources/steamcity/bot-buddy-adventure/code/dans-le-meme-bloc-d-evenement-quand-le-bouton-est-clique.png" alt="Code" style={{maxWidth: '60%', height: 'auto'}} />

Ils doivent ensuite définir dans la zone [valeur], la structure du prompt.

<img src="/img/ressources/steamcity/bot-buddy-adventure/code/ils-doivent-ensuite-definir-dans-la-zone-valeur.png" alt="Code" style={{maxWidth: '60%', height: 'auto'}} />

Commencez par demander aux élèves comment ils formuleraient naturellement leur demande en proposant des prompts à voix haute. Cela peut être par exemple « Dites-moi quelle ville se trouve à cette latitude et longitude ». Une fois qu'ils ont plusieurs idées, faites-les tester dans le programme.

Pour combiner texte et variables en un prompt complet, les élèves auront besoin d'utiliser les blocs **« joindre [valeur] [valeur] »** de la section **« Opérateurs »**. Comme le prompt intègre deux variables (latitude et longitude) avec du texte, ils auront besoin de blocs de jointure imbriqués :

[Dis-moi quelle ville se trouve à cette latitude] + [variable « Latitude »] + [et longitude] + [variable « Longitude »]

Cela nécessite trois blocs « regrouper [valeur] [valeur] » imbriqués ensemble. Cette structure d'imbrication est nécessaire car les blocs de jointure ne peuvent combiner que deux éléments à la fois. En les imbriquant, on construit une phrase complète qui incorpore plusieurs variables et segments de texte :

<img src="/img/ressources/steamcity/bot-buddy-adventure/code/Cela-necessite-trois-blocs-regrouper-valeur-valeur-imbriques-ensemble..png" alt="Code" style={{maxWidth: '100%', height: 'auto'}} />

- **Premier bloc de jointure** : Valeur 1 : Le texte « Dis-moi quelle ville se trouve à la latitude » (notez l'espace à la fin) / Valeur 2 : Le deuxième bloc de jointure
- **Deuxième bloc de jointure** : Valeur 1 : La variable « Latitude » / Valeur 2 : Le troisième bloc de jointure
- **Troisième bloc de jointure** : Valeur 1 : Le texte « et longitude » (notez les espaces avant et après) / Valeur 2 : La variable « Longitude »


**3. Implémenter l'intégration d'IA**

Laissez les élèves tester leur prompt. Ils doivent d'abord créer un nouveau bloc **« Quand le bouton est cliqué »** pour plus de clarté et d'organisation dans leur programme. Cela sépare la fonctionnalité de collecte de données du traitement d'IA. Dans ce bloc, ils doivent :

- Ajouter un bloc **« mettre [variable] à [valeur] »**
- Définir la variable à **« Location »**
- Retourner à l'onglet **« Extensions »** et ajouter l'extension **« Open AI »** à leur projet
- Trouver le bloc **« compléter prompt : [prompt] »** dans l'extension Open AI
- Placer ce bloc comme valeur pour **« mettre Location à [valeur] »**
- Remplacer la valeur **« prompt »** par défaut par leur variable **« Prompt_Location »**

Faites cliquer les élèves sur le drapeau vert pour tester leur programme.

<img src="/img/ressources/steamcity/bot-buddy-adventure/code/Faites-cliquer-les-eleves-sur-le-drapeau-vert-pour-tester-leur-programme.png" alt="Code" style={{maxWidth: '70%', height: 'auto'}} />

Ils observeront que l'IA fournit en général des réponses verbeuses comme « La ville située à la latitude 48,8566 et longitude 2,3522 est Paris, France. Paris est la capitale et la ville la plus peuplée de France. » Cette réponse est informative, mais pour les prompts suivants l'agent conversationnel n'a besoin que du nom de la ville.

<img src="/img/ressources/steamcity/bot-buddy-adventure/code/nom-de-ville-comme-composant-pour-les-prompts-suivant.png" alt="Code" style={{maxWidth: '100%', height: 'auto'}} />

Les élèves doivent maintenant affiner leur prompt pour demander seulement l'information spécifique nécessaire. Ils peuvent modifier Prompt_Location pour être plus précis : « Dis-moi en un mot quelle ville se trouve à la latitude [variable Latitude] et longitude [variable Longitude] ».

<img src="/img/ressources/steamcity/bot-buddy-adventure/code/Lavariable-Longitude.png" alt="Code" style={{maxWidth: '100%', height: 'auto'}} />


En testant et affinant leur prompt, les élèves apprennent un principe important de l'ingénierie des prompts : être spécifique à la fois sur l'information demandée et le format de réponse désiré. Il faut souvent plusieurs essais pour obtenir le résultat souhaité.

<img src="/img/ressources/steamcity/bot-buddy-adventure/code/etre-specifique-a-la-fois-sur-l-information-demandee-et-le-f.png" alt="Code" style={{maxWidth: '100%', height: 'auto'}} />


#### Comprendre les limites de l'IA dans l'identification de localisation

Lors des tests sur ordinateurs plutôt que sur appareils mobiles, les élèves pourraient remarquer que les localisations retournées ne sont pas toujours précises ou exactes. On peut en profiter pour parler des limites de l'IA et de la géolocalisation.

Les navigateurs de bureau fournissent souvent des localisations approximatives, déduites des adresses IP ou des informations réseau plutôt que du GPS, et donc des coordonnées moins précises. Le modèle d'IA pourrait alors identifier des villes proches ou des zones métropolitaines plutôt que des localisations exactes.

De plus, certaines coordonnées peuvent tomber dans des zones entre villes ou dans des régions où le modèle d'IA a moins de données d'entraînement. Dans ces cas, le modèle pourrait fournir la localisation reconnue la plus proche, un nom de région au lieu d'une ville, ou occasionnellement même faire une détermination incorrecte.

Faites comparer aux élèves les résultats des tests sur ordinateur et sur mobile pour comprendre ces différences. Ils voient ainsi à la fois les limites technologiques (géolocalisation du navigateur face au GPS) et les limites de l'IA (couverture des données d'entraînement, granularité géographique). Ces observations montrent qu'il faut garder un regard critique sur les systèmes d'IA et vérifier les informations importantes, surtout quand l'application dépend d'une localisation précise.

### Restitution et réflexion


- **Connaissances mobilisées** : Dans cette troisième étape, les élèves sont passés de la collecte de données au traitement des données par l'IA. Ils ont appris à transformer des coordonnées brutes en noms de lieux grâce aux modèles de langage, et ont constaté les forces et les limites de ces systèmes. Ils ont découvert les atouts des modèles de langage : analyser le contexte, s'appuyer sur des données d'entraînement variées, produire un raisonnement simple et proposer des solutions créatives aux problèmes. Ils en ont aussi rencontré les limites : biais possibles, besoins en calcul, « hallucinations » ou inexactitudes occasionnelles. En ingénierie des prompts, les élèves ont appris que communiquer avec l'IA demande précision, clarté et structure, et que des formulations différentes donnent des résultats très différents.
- **Réflexion sur la mise en œuvre en classe** : Cette étape peut se mener comme une exploration progressive, des interactions simples avec l'IA vers des implémentations plus complexes. Affiner les prompts par essais successifs encourage l'expérimentation et l'esprit critique. Vous pouvez faire comparer en groupe plusieurs formulations de prompts et leurs résultats. Pour l'évaluation, regardez comment les élèves justifient leurs choix de prompts plutôt que le seul fonctionnement du programme : ce raisonnement montre mieux leur compréhension des concepts.
- **Résultats d'apprentissage** : Les élèves ont appris que communiquer avec un système d'IA demande une approche structurée, même en langage naturel. Ils ont révisé leurs prompts pour améliorer les réponses et ont commencé à évaluer de façon critique ce que produit l'IA.


Questions pour une discussion ou un écrit de réflexion :

1. Évolution de la conception des prompts : En quoi votre prompt initial différait-il de votre prompt final optimisé ? Quels changements spécifiques avez-vous apportés, et comment chaque changement a-t-il affecté la réponse de l'IA ? Si vous conceviez un prompt pour obtenir des informations sur les attractions locales près de la ville identifiée, comment le structureriez-vous pour vous assurer de recevoir des recommandations utiles et spécifiques ?
2. Avantages de l'intégration d'IA : De quelles manières l'ajout de capacités d'IA transforme-t-il ce que votre Bot Buddy peut faire par rapport aux approches de programmation traditionnelles seules ? Quels types de questions votre assistant peut-il maintenant répondre qui auraient été difficiles ou impossibles à programmer manuellement ? Comment cette combinaison de données GPS et de réponse d'IA pourrait-elle changer la façon dont les utilisateurs interagissent avec les services géolocalisés ?
3. Considérations éthiques : Quelles préoccupations de confidentialité pourraient surgir lorsqu'une application collecte des données de localisation et les traite via des systèmes d'IA ? Comment les services de localisation alimentés par l'IA pourraient-ils affecter différemment diverses communautés ou quartiers ? Quelles responsabilités ont les développeurs lors de la création de systèmes qui fournissent des recommandations sur les lieux à visiter ou à éviter dans une ville ?
4. Limitations techniques et solutions : Quels défis avez-vous observés lors du test de votre conversion localisation-vers-ville ? Comment votre agent conversationnel pourrait-il gérer les situations où les signaux GPS sont faibles, les coordonnées imprécises, ou l'IA fournit des informations de localisation incorrectes ? Quels systèmes de secours ou méthodes de vérification pourraient rendre votre assistant plus fiable dans des conditions réelles ?

---

## Étape 4 : Diffusion d'informations accessibles aux utilisateurs finaux

### Contexte de la séquence

Dans les étapes précédentes, les élèves ont construit une solution qui peut déterminer automatiquement la localisation de l'utilisateur grâce aux requêtes vocales et générer des réponses pertinentes avec l'IA. Ils peuvent réutiliser ce code pour créer un agent conversationnel qui donne ses réponses par la voix, et plus seulement par écrit. De plus en plus de personnes utilisent des assistants vocaux pour interagir avec des appareils et obtenir des informations : applications d'assistance à la conduite, systèmes de réponse téléphonique, assistants personnels tels que Siri ou Google Assistant, et bien d'autres. L'une des principales difficultés de ces systèmes est d'offrir une expérience utilisateur fluide et naturelle grâce à une synthèse vocale de haute qualité. Cette dernière étape ajoute la synthèse vocale, qui ferme la boucle d'interaction du Bot Buddy Assistant Urbain.

### Objectifs d'apprentissage

Comprendre le fonctionnement de la synthèse vocale, y compris les techniques et modèles utilisés pour générer la parole artificielle. Apprendre comment implémenter la fonctionnalité de synthèse vocale dans CodeSkool. Explorer les défis et enjeux liés à la qualité de la synthèse vocale, tels que le naturel, l'intelligibilité, l'adaptabilité et la personnalisation. Développer des compétences pour configurer les paramètres vocaux afin d'optimiser l'expérience utilisateur. Créer un agent conversationnel complet qui collecte, traite et diffuse les informations par la parole.


### Conceptualisation


Dans cette quatrième et dernière étape, les élèves achèvent leur agent conversationnel en ajoutant la sortie vocale et des prompts supplémentaires pour offrir un service aux utilisateurs. L'assistant, jusque-là fondé sur le texte, devient une application entièrement vocale : il écoute l'utilisateur et lui répond à voix haute.

:::question[Question de recherche 1 : Implémentation de la synthèse vocale]
Comment peut-on convertir efficacement les réponses textuelles de l'IA en sortie vocale qui sonne naturelle et est facilement comprise par les utilisateurs ?
:::

:::hypothese[Hypothèse]
En implémentant la fonctionnalité de synthèse vocale avec une configuration appropriée des paramètres vocaux, les élèves peuvent créer un système vocal qui communique efficacement les informations générées par l'IA avec naturel.
:::

**Concepts clés :**

- **Synthèse vocale** : Technologie qui convertit le texte écrit en sortie vocale parlée en utilisant des algorithmes qui génèrent la parole artificielle.
- **Paramètres vocaux** : Aspects configurables de la parole synthétisée incluant la sélection de voix, le débit de parole, la hauteur et le volume.
- **Naturel de la parole** : Facteurs qui influencent à quel point la parole synthétique sonne humaine pour les auditeurs.

:::question[Question de recherche 2 : Créer une expérience vocale interactive cohérente]
Comment peut-on intégrer l'entrée vocale, le traitement d'IA et la sortie vocale pour créer un agent conversationnel cohérent et fiable qui fournit des informations géolocalisées utiles ?
:::

:::hypothese[Hypothèse]
En concevant des flux de conversation structurés et des prompts sensibles au contexte, les élèves peuvent créer un système vocal interactif cohérent qui fournit de manière fiable des informations pertinentes sur les environnements urbains par une conversation naturelle.
:::

**Concepts clés :**

- **Conception de conversation** : Principes pour créer des flux de dialogue logiques et intuitifs qui guident les utilisateurs au fil des interactions.
- **Préservation du contexte** : Méthodes pour maintenir la conscience de localisation et l'historique de conversation tout au long des interactions.
- **Diffusion d'information** : Techniques pour présenter des informations complexes par la voix de manière accessible.

Les élèves créeront ainsi un agent conversationnel accessible qui parcourt tout le cycle entrée-traitement-sortie par la voix.


### Investigation par les élèves


#### Créer un agent conversationnel activé par la voix

Les élèves vont mettre en place la structure de base de leur assistant activé par la voix en implémentant une phrase déclencheur et un message d'accueil.

Pour implémenter cela dans CodeSkool, les élèves doivent s'assurer que les extensions « Text to speech » et « Synthèse vocale » sont ajoutées au projet. Dans les blocs « Synthèse vocale », ils peuvent sélectionner le bloc déclencheur « Quand j'entends [valeur] » pour activer l'agent conversationnel. Ainsi, chaque fois que le drapeau vert sera cliqué, grâce au bloc « Écouter et attendre » ajouté au début du protocole, l'agent conversationnel réagira automatiquement s'il entend la phrase déclencheur (dans l'exemple « Bonjour Buddy »).

<img src="/img/ressources/steamcity/bot-buddy-adventure/code/Text-to-speech-et-Synthese-vocale.png" alt="Code" style={{maxWidth: '50%', height: 'auto'}} />

Une fois cela fait, les élèves doivent configurer les paramètres vocaux pour l'agent conversationnel. La vitesse et le type de voix influent sur la façon dont les utilisateurs comprennent l'agent conversationnel et interagissent avec lui. Ces paramètres se définissent avec deux blocs, disponibles directement dans la section « Text to Speech », dans la catégorie réglages :

- **« set playback speed to [valeur] »** : Ce bloc contrôle à quelle vitesse la voix synthétique parle. La valeur va en général de 0 (très lent) à 2 (très rapide), et 1 correspond à la vitesse normale

<img src="/img/ressources/steamcity/bot-buddy-adventure/code/set-playback-speed-to-valeur.png" alt="Code" style={{maxWidth: '70%', height: 'auto'}} />

- **« choisir la voix [valeur] »** : Ce bloc vous permet de sélectionner différentes options de voix pour la sortie de synthèse vocale. Différentes voix peuvent varier en genre, âge ou caractéristiques d'accent

<img src="/img/ressources/steamcity/bot-buddy-adventure/code/choisir-la-voix-valeur.png" alt="Code" style={{maxWidth: '70%', height: 'auto'}} />


#### Concevoir des flux de conversation avec des prompts

Après avoir configuré la voix, les élèves créent des flux de conversation structurés pour guider les interactions des utilisateurs avec leur assistant. Les conseils qui suivent proposent une structure de blocs logique, qui n'est qu'un exemple. Les élèves peuvent essayer d'autres organisations et ajuster leur code et leurs prompts selon les réponses de l'assistant.

Exemple - Bonjour Buddy ! Créer des variables pour stocker différents prompts d'IA pour des sujets spécifiques, comme fait précédemment pour la localisation. L'agent de l'exemple doit :

- **Proposer des activités à proximité** : l'exemple crée la variable **« Prompt_Activity »** avec 3 blocs de jointure, sous la forme : « Considérant que ma localisation actuelle est [variable Location], je veux [speech] »
- **Fournir des informations historiques sur la ville actuelle** : l'exemple crée la variable **« Prompt_History »** avec 2 blocs de jointure, sous la forme : « Considérant que ma localisation actuelle est [variable Location], raconte-moi un peu l'histoire de la ville »

<img src="/img/ressources/steamcity/bot-buddy-adventure/code/raconte-moi-un-peu-l-histoire-de-la-ville.png" alt="Code" style={{maxWidth: '100%', height: 'auto'}} />


#### Implémenter un arbre de dialogue simple qui répond aux entrées vocales

Une fois que l'utilisateur dit la phrase déclencheur « Bonjour Buddy », Buddy répond avec une première proposition sur les activités à proximité en utilisant le message suivant (avec un bloc synthèse vocale) : « Bonjour, je m'appelle Buddy. Je suis là pour vous aider à vous déplacer dans la ville. Je peux vous fournir des informations sur les activités disponibles autour de vous. Que voulez-vous faire ? »


Quand Buddy a fini de parler, un bloc **« écouter et attendre »** permet à l'utilisateur de préciser l'activité désirée, reprise dans le bloc **« définir Prompt_Activity »**. Selon la réponse de l'utilisateur, par exemple « manger une pizza », Buddy utilise une combinaison de blocs **« parler »** et Open AI **« compléter prompt »** pour fournir une réponse détaillée à la demande.

Après la fin de cette discussion, Buddy passe à proposer des informations sur l'histoire de la ville. Il demande : « Je peux aussi vous raconter un peu l'histoire de votre ville. Êtes-vous intéressé ? ». Contrairement à l'interaction d'activité, qui utilisait une question ouverte, c'est ici une question fermée, qui nécessite un bloc de contrôle **« si [ ] alors »**. L'utilisateur ne peut répondre que par oui ou non, et le bot réagit différemment selon le cas.

- Si l'utilisateur dit oui, Buddy présente l'histoire de la ville.
- Si l'utilisateur dit non, Buddy termine poliment la conversation : « D'accord. Je reste disponible si besoin »

L'exemple complet, qui reprend toutes les activités de programmation réalisées dans les étapes précédentes, n'est plus accessible publiquement (lien de partage expiré).

Avec les bons outils et la bonne approche, créer un agent conversationnel de base est relativement simple. Le plus difficile est de concevoir un flux de conversation logique et engageant, utile aux utilisateurs. L'exemple suit une structure simple et linéaire, avec des réponses prédéterminées, mais d'autres implémentations sont possibles.

Les élèves peuvent exercer leur créativité en concevant des interactions plus élaborées qui :

- Gèrent plusieurs variations d'entrée utilisateur grâce à une logique conditionnelle étendue
- Implémentent des chemins de conversation ramifiés selon les préférences des utilisateurs
- Créent des flux de dialogue plus naturels avec des questions de suivi
- Incluent la gestion d'erreurs pour des réponses utilisateur inattendues

### Restitution et réflexion


- **Connaissances mobilisées** : Dans la dernière étape du Bot Buddy Adventure, les élèves ont créé un agent conversationnel interactif vocalement, intégrant la reconnaissance vocale et la synthèse vocale. Ils ont appris à ajuster le débit de parole et la voix pour améliorer l'expérience utilisateur. En mettant en œuvre des phrases déclencheurs et des flux conversationnels, ils ont développé des compétences en conception conversationnelle, en offrant des choix et des informations contextuelles pour rendre l'assistant plus naturel et utile. L'intégration de la synthèse vocale a permis d'explorer divers domaines de connaissance.
  - **Technologie de synthèse vocale** : Comprendre comment le texte écrit est converti en langage parlé et comment différents paramètres affectent la qualité de sortie.
  - **Traitement du langage naturel** : Explorer comment les ordinateurs peuvent comprendre et répondre au langage humain dans des contextes conversationnels.
  - **Conception d'accessibilité** : Apprendre comment les interfaces vocales rendent la technologie plus accessible à des utilisateurs diversifiés et comment les choix de conception peuvent améliorer ou entraver l'accessibilité.
- **Réflexion sur la mise en œuvre en classe** : Cette étape fonctionne mieux lorsque les élèves peuvent tester et affiner leurs implémentations à plusieurs reprises : la qualité de l'interaction vocale s'améliore souvent beaucoup d'un essai à l'autre. Les tests entre pairs sont précieux : des voix, des accents et des styles d'élocution différents peuvent révéler des forces et des faiblesses de la reconnaissance vocale qu'un seul testeur ne verrait pas. De même, plusieurs auditeurs peuvent donner des avis différents sur la qualité de la voix et sur sa clarté. Pour l'évaluation, envisagez de faire présenter les agents conversationnels à la classe, en montrant à la fois l'implémentation technique et l'expérience utilisateur, et de leur faire expliquer leurs choix de conception.
- **Résultats d'apprentissage** : Les élèves savent implémenter des déclencheurs vocaux et des flux de conversation qui guident les utilisateurs au fil des interactions. Ils ont configuré les paramètres vocaux pour améliorer l'écoute et conçu des structures de conversation qui semblent naturelles et utiles. Ils ont constaté qu'une interface vocale se met au point par des tests et des ajustements successifs, et que de petits détails de l'implémentation (la vitesse de la voix, la formulation des phrases) peuvent changer nettement la façon dont les utilisateurs perçoivent un système vocal et interagissent avec lui.


Questions pour une discussion ou un écrit de réflexion :

1. Comment une interface vocale change-t-elle la façon dont les utilisateurs interagissent avec la technologie par rapport aux interfaces traditionnelles à écran ?
2. Quels défis peuvent surgir lors de la conception de flux de conversation, et comment peut-on les surmonter ?
3. Comment les assistants vocaux pourraient-ils être davantage personnalisés pour répondre aux besoins de différents utilisateurs ?
4. Quelles considérations éthiques émergent lors de la création de systèmes qui utilisent des voix au son de plus en plus naturel ?

---

*Cette fiche fait partie du projet [SteamCity](/projets/steamcity), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

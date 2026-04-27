---
id: plants-city
title: Végétalisation urbaine par IA
sidebar_label: "Végétalisation urbaine par IA"
sidebar_position: 6
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="2" y="2" width="20" height="20" rx="3" fill="#DD5350" opacity="0.1"/><path d="M12 20V12" stroke="#DD5350" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 12c0-4 3-6 6-6-1 3-3 5-6 6z" fill="#DD5350"/><path d="M12 14c0-4-3-7-6-7 1 3 3 6 6 7z" fill="#DD5350" opacity="0.25"/><path d="M8 20h8" stroke="#DD5350" strokeWidth="1" opacity="0.25"/></svg> Végétalisation urbaine par IA

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Biologie / SVT</span>
  <span className="badge badge--info">Technologie et ingénierie</span>
  <span className="badge badge--info">Intelligence artificielle</span>
  <span className="badge badge--secondary">Environnement</span>
  <span className="badge badge--secondary">Bien-être et santé publique</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| SteamCity | 4 heures | Intermédiaire | 10-14 ans |

## Matériel

Par groupe :
- 1 carte Micro:bit
- 1 capteur DHT-11
- 1 Micro:bit Grove Shield
- 3 câbles Grove + 1 câble adaptateur Grove Dupont
- 4 câbles Dupont Femelle-Femelle
- 1 câble micro USB
- 1 lecteur de carte OpenLog micro-SD + 1 carte micro-SD
- 1 batterie 5V (batterie externe)

<a href="/pdf/steamcity/Protocol_PlantsCity_FR.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger en PDF</a>

</div>


<img src="/img/ressources/steamcity/plants-city/icone.png" alt="Végétalisation urbaine par IA" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## Introduction

Dans un contexte où les villes cherchent à devenir plus durables, la végétalisation urbaine joue un rôle crucial. Selon l'Agence américaine de protection de l'environnement (EPA), les espaces verts en ville apportent de multiples bénéfices : ils régulent la température, améliorent la qualité de l'air et de l'eau, enrichissent la biodiversité et contribuent à une meilleure gestion des eaux pluviales.

Ce protocole pédagogique invite les élèves à créer leur propre mur végétal, alliant apprentissages environnementaux et technologiques. Cette expérience concrète leur permettra de découvrir les enjeux de la végétalisation urbaine tout en développant leurs compétences en sciences expérimentales.

Ils apprendront à utiliser des microcontrôleurs pour mesurer les conditions environnementales et s'initieront aux nouveaux outils de recherche basés sur l'intelligence artificielle (comme Copilot, ChatGPT, Gemini) pour sélectionner les plantes les mieux adaptées à leur environnement.

### Étape 1 : collecter les données

Cette première étape du protocole vise à mettre en place une station de mesure environnementale pour caractériser l'habitat du futur mur végétal. Les élèves apprennent à identifier les paramètres essentiels qui influencent la croissance des plantes (température, humidité, luminosité), à assembler et programmer une station de mesure équipée de capteurs et d'une carte Micro:bit, et à comprendre l'importance de la calibration pour obtenir des mesures fiables. Cette approche scientifique et technique permet aux élèves de développer leurs compétences en mesure environnementale tout en préparant le choix éclairé des espèces végétales adaptées à leur environnement.

### Étape 2 : affichez les données pour obtenir les informations nécessaires

L'objectif de l'étape 2 est de mettre en place un système de stockage des données environnementales collectées par les capteurs. Cette étape fait suite à la mise en place des capteurs de l'étape 1, en ajoutant la capacité d'enregistrer les mesures dans le temps plutôt que de n'avoir que des valeurs instantanées. Les élèves doivent choisir et implémenter une solution de stockage adaptée à leur contexte, comme un système avec carte micro-SD ou un relevé manuel. Les données ainsi collectées sur une période prolongée serviront de base pour la sélection des plantes lors des étapes suivantes, permettant d'assurer la viabilité du mur végétal.

### Étape 3 : analyser les données et en tirer des leçons

L'étape 3 du protocole est centrée sur la sélection des plantes les plus adaptées pour notre mur végétal, en s'appuyant sur une étude documentaire rigoureuse. En s'appuyant sur les données environnementales précises collectées dans les phases précédentes (luminosité, température, humidité), les élèves peuvent identifier les espèces végétales qui s'épanouiront dans ces conditions spécifiques. Pour garantir des choix éclairés, la classe explore trois démarches de recherche différentes : les méthodes traditionnelles avec des ouvrages botaniques et des bases de données spécialisées, la recherche web classique via les sites horticoles, et l'utilisation d'outils d'Intelligence Artificielle. Cette diversité d'approches permet à la fois d'obtenir des informations complètes sur les plantes candidates et de développer l'esprit critique des élèves vis-à-vis des différentes sources d'information. L'analyse comparative des résultats permet d'identifier les espèces végétales les plus prometteuses pour le mur, en considérant leur adaptation aux conditions mesurées, leurs besoins en maintenance, et leur compatibilité entre elles. Les élèves apprennent à croiser les informations obtenues par différentes méthodes, assurant ainsi la fiabilité de leurs choix pour une installation durable.

### Étape 4 : utilisez les données pour créer un mur végétal

L'étape finale de mise en place du mur végétal constitue l'aboutissement concret du protocole. Elle permet la réalisation physique du mur selon les plans élaborés précédemment, accompagnée de l'installation d'un système de monitoring connecté pour suivre la santé des plantes. Cette phase met en application l'ensemble des connaissances botaniques et technologiques acquises pour développer une solution durable et intelligente de végétalisation. Cette phase conclusive permet de concrétiser l'ensemble des apprentissages théoriques et techniques des étapes précédentes. Elle transforme les analyses environnementales, les études botaniques et les compétences technologiques en une réalisation tangible qui améliore concrètement l'environnement urbain. La réussite de cette étape démontre la capacité des élèves à mener un projet environnemental complet, de sa conception à sa réalisation, tout en intégrant des solutions technologiques innovantes pour assurer sa pérennité.

### Structure de l'activité

- **Durée** : 4h
- **Niveau de difficulté** : intermédiaire (10-14 ans)
- **Matériel nécessaire par groupe** : 1 carte Micro:bit, 1 capteur DHT-11, 1 Micro:bit Grove Shield, 3 câbles Grove, 1 câble micro USB, 1 câble adaptateur Grove Dupont, 4 câble Dupont Femelle-Femelle, 1 lecteur de carte OpenLog micro-SD, 1 carte micro-SD, 1 Batterie 5V (par exemple, batterie externe)


### Glossaire

- **Végétalisation urbaine** : Pratique consistant à introduire et à entretenir de la végétation dans les zones urbaines pour améliorer la biodiversité, l'esthétique et la qualité de l'environnement.
- **Mur végétal** : Une structure verticale recouverte de plantes, utilisée pour améliorer la qualité de l'air, réguler la température et améliorer l'esthétique urbaine.
- **Variables environnementales** : Des facteurs tels que la température, l'humidité, la lumière et la composition du sol influencent la santé et la croissance des plantes.
- **Adaptation des plantes** : Le processus par lequel les plantes s'adaptent à leur environnement, comme le climat ou les conditions du sol, pour une croissance optimale.
- **Intensité lumineuse** : Quantité de lumière visible reçue à un endroit, mesurée en lux. Un facteur crucial pour la croissance des plantes.
- **Microcontrôleur** : Circuit intégré compact conçu pour contrôler une opération spécifique dans un système embarqué. Exemple : Micro:bit utilisé pour les mesures environnementales.
- **Capteur DHT11** : Un capteur de température et d'humidité qui fournit des lectures précises pour surveiller les conditions environnementales.
- **OpenLog** : Un enregistreur de données basé sur une carte micro-SD utilisé pour stocker les données environnementales collectées par les capteurs.
- **Format CSV** : Un format de fichier texte simple utilisé pour stocker des données sous forme de tableau, séparées par des virgules, pour une importation facile dans un logiciel de tableur.
- **Hallucination de l'IA** : Un phénomène dans lequel l'IA génère des informations incorrectes ou dénuées de sens en raison d'un contexte limité ou d'une désinformation.

## Étape 1 : collecter les données

### Contexte de la séquence

Pour créer un mur végétal réussi, il est crucial de bien comprendre l'environnement dans lequel il sera installé. Plusieurs paramètres influencent directement la croissance et la résistance des plantes, notamment le climat, l'exposition à la lumière, la composition du sol, les précipitations, la circulation de l'air et les caractéristiques microclimatiques. En milieu urbain, ces contraintes peuvent être renforcées par des facteurs comme la présence d'îlots de chaleur, la pollution ou un espace racinaire limité. Afin de choisir des plantes adaptées à ces conditions spécifiques, cette première étape permet aux élèves d'évaluer attentivement les conditions environnementales auxquelles elles seront exposées.

### Objectifs d'apprentissage

Identifier les principales variables environnementales qui influencent la croissance et la santé des plantes, à savoir température, humidité, luminosité, vent et composition du sol. Se familiariser avec l'usage des microcontrôleurs pour réaliser des mesures.

### Conceptualisation

Comment identifier et mesurer les différents paramètres environnementaux qui détermineront le succès de la végétalisation de notre mur ?

Pour explorer ce postulat de manière scientifique, les élèves se concentreront sur deux questions directrices :

- **Quelles sont les variables environnementales cruciales pour la vie des plantes ?** afin d'identifier les paramètres à mesurer et comprendre leur impact sur la croissance végétale.
- **Comment mettre en place un système de mesure des conditions environnementales automatisé et fiable ?** afin de développer une méthodologie rigoureuse pour collecter des données exploitables.

Les élèves seront amenés à aborder les concepts suivants, qui serviront à leur démarche scientifique :

- **Comprendre le concept de variable** : Les variables environnementales jouent un rôle crucial dans la croissance des plantes. La température influence directement la photosynthèse et le métabolisme, tandis que l'humidité est essentielle pour la transpiration et l'absorption des nutriments. La luminosité détermine la croissance et la floraison, et la qualité du sol, notamment son pH et sa teneur en nutriments, impacte la santé globale de la plante.
- **Identifier les techniques de mesure pertinentes et rigoureuses** : Concernant les techniques de mesure, il convient de comprendre le fonctionnement des différents capteurs utilisés. Chaque variable requiert un protocole de mesure spécifique, et il est nécessaire de déterminer la fréquence et la durée optimales des relevés pour obtenir des données exploitables.
- **Aborder les enjeux de calibration** : Enfin, la calibration des instruments est une étape fondamentale pour garantir la fiabilité des mesures. Cela implique des méthodes rigoureuses de vérification et d'étalonnage, la capacité à identifier et corriger les erreurs de mesure, ainsi que la validation des résultats par comparaison avec des instruments professionnels.

Cette approche méthodique permettra aux élèves de comprendre les interactions complexes entre l'environnement et le développement des plantes, tout en développant leur esprit critique et leurs compétences techniques. Ces connaissances seront directement appliquées pour sélectionner les espèces végétales les plus adaptées à leur projet de mur végétal.

### Investigation par les élèves

#### Définir les paramètres permettant de garantir une croissance optimale des plantes

Dans un premier temps, les élèves détermineront en classe entière quels sont les paramètres importants de la vie des plantes, en puisant dans leurs connaissances actuelles et dans la littérature. L'enseignant pourra animer, orienter et compléter leurs conclusions pour créer un socle de connaissance solide autour des variables liées à la croissance des plantes.

#### Créer une station de mesure adaptée aux paramètres identifiés

Les élèves seront répartis en groupes (selon le nombre de cartes programmables disponibles). L'enseignant distribuera à chaque groupe un set de capteurs et une carte programmable.

Les élèves devront identifier, avec l'aide de la documentation et de l'enseignant, parmi les paramètres de croissance définis lors de la discussion de classe, les variables qu'il est possible de mesurer avec ces outils.

Une fois les variables mesurables et les capteurs associés identifiés, les élèves effectueront le montage de la station de mesure et créeront le programme permettant de réaliser les mesures.

Pour réaliser cette activité, nous vous conseillons d'utiliser la carte Micro:bit et le capteur DHT11 car ils sont peu coûteux, faciles à programmer et suffisamment précis pour ce type d'expérimentation. Grâce à ces outils, les élèves pourront mesurer la température, l'humidité de l'air et l'intensité lumineuse.

La température et l'humidité de l'air sont mesurées grâce au capteur DHT11, qui fournit des données précises sur ces deux variables cruciales pour la croissance des plantes.

L'intensité lumineuse peut être mesurée directement par la matrice de LED de la carte Micro:bit. Cette fonctionnalité repose sur une propriété intéressante des LED : si elles émettent de la lumière lorsqu'on leur applique du courant, elles peuvent également générer un très faible courant lorsqu'elles reçoivent de la lumière. En mesurant ce courant, on peut estimer la quantité de lumière reçue.

Il sera important d'expliquer aux élèves ce double fonctionnement de la matrice de LED pour qu'ils comprennent comment la carte peut mesurer la luminosité sans capteur supplémentaire.

Vous avez accès à la fin de ce protocole à une section "Mise en pratique" qui vous présente une solution de programmation de la station de mesure sur la carte Micro:bit.

#### Aborder la question de la calibration

La question de la calibration est importante à aborder avec les élèves à ce stade du protocole. En effet, les capteurs utilisés fournissent des mesures relatives qui peuvent varier d'une station à l'autre, qui permettent d'observer des tendances et des variations dans le temps (par exemple, l'évolution de la luminosité au cours d'une journée), mais qui ne sont pas aussi précises que des mesures quantitatives calibrées.

Pour comprendre cette notion, voici quelques points clés à discuter avec la classe :

- **Qu'est-ce que la calibration ?** Il s'agit du processus qui permet de s'assurer qu'un instrument de mesure fournit des résultats fiables et comparables.
- **Pourquoi calibrer ?** Afin de pouvoir comparer les mesures entre différentes stations et obtenir des valeurs absolues plutôt que relatives.
- **Comment calibrer ?** En accédant notamment à des appareils de mesure professionnels (comme un luxmètre).

Si vous disposez de ce type d'équipement, nous vous encourageons à réaliser une phase de calibration, ce qui permettra aux élèves de convertir leurs mesures relatives en mesures quantitatives (par exemple, associer un niveau de luminosité à une valeur en lux).

### Restitution et réflexion

**Connaissances mobilisées** : À la fin de cette phase, les élèves auront une compréhension détaillée des facteurs environnementaux essentiels comme la température, l'humidité et la luminosité, ainsi que leurs impacts sur la croissance des plantes. Ils maîtriseront également les bases de l'assemblage et de la programmation des capteurs et microcontrôleurs, tout en comprenant l'importance d'une démarche scientifique rigoureuse.

**Réflexion sur la mise en œuvre en classe** : Les élèves auront développé des compétences pratiques en travaillant en groupes pour assembler leur station de mesure, en manipulant des instruments techniques, et en participant à des discussions collaboratives. Cette approche met en évidence l'importance du travail d'équipe et de l'apprentissage par la pratique.

**Résultats d'apprentissage généraux** : Les élèves auront acquis des compétences techniques en mesure environnementale et en utilisation d'outils numériques. Ils auront appris à identifier les variables clés influençant la croissance des plantes et à mettre en place un protocole de mesure adapté, tout en développant leur esprit critique dans l'évaluation des différentes variables environnementales.

Cette première étape pose les bases pour l'exploration du protocole autour du mur végétal en permettant de caractériser scientifiquement l'environnement d'installation. Grâce aux mesures précises des conditions environnementales (température, humidité, luminosité), nous pourrons sélectionner des espèces végétales parfaitement adaptées à leur futur habitat. Cette approche rigoureuse et basée sur les données maximise les chances de réussite du projet en assurant une croissance optimale des plantes choisies.

Afin d'approfondir cette phase, vous pouvez également ouvrir des discussions en utilisant les questionnements suivants :

- **Comment les données collectées peuvent-elles influencer le choix des plantes ?** Amenez les élèves à réfléchir sur la relation entre les mesures environnementales et les besoins spécifiques des plantes.
- **Quelles autres variables environnementales pourraient être pertinentes à mesurer ?** Au-delà des variables déjà mesurées (température, humidité, luminosité), encouragez les élèves à réfléchir à d'autres facteurs comme la qualité du sol, le pH, la circulation de l'air, ou l'exposition au vent.
- **Comment pourrait-on améliorer la précision et la fiabilité des mesures ?** Orientez la réflexion vers les questions de calibration, la fréquence des mesures, et la comparaison avec des appareils professionnels.
- **Quels sont les avantages et limites des capteurs utilisés dans un environnement urbain ?** Encouragez les élèves à réfléchir sur les limites techniques actuelles de leur station et les possibilités d'amélioration.

---

## Étape 2 : affichez les données pour obtenir les informations nécessaires

### Contexte de la séquence

Lors de la première étape, les élèves ont construit une station de mesure équipée de plusieurs capteurs qui mesurent diverses variables environnementales (température, luminosité, etc.). Ces stations ne peuvent cependant fournir que des mesures instantanées, sans capacité de stockage pour une analyse ultérieure. Il est donc nécessaire d'ajouter un système d'enregistrement des données, tel qu'une carte micro-SD, pour sauvegarder les mesures effectuées.

### Objectifs d'apprentissage

Réfléchir à la manière dont un système peut être amélioré pour répondre à une problématique technique.

### Conceptualisation

Comment mettre en place un système de stockage de données permettant de conserver et d'analyser efficacement les mesures environnementales sur une période prolongée ?

Pour guider les élèves dans leur démarche d'investigation, ils pourront explorer les questionnements suivants :

- **Comment stocker les données de manière fiable et accessible ?** Quels dispositifs peuvent être utilisés pour enregistrer les données collectées ? Cette question encourage une réflexion sur les outils disponibles en classe (ex. carte micro-SD, stockage en ligne, enregistrement manuel) et leurs avantages respectifs afin d'assurer la pérennité et l'exploitabilité des mesures environnementales collectées.
- **Quelle méthode de sauvegarde est la plus adaptée à notre contexte ?** Cette réflexion permet d'identifier la solution technique la plus pertinente en fonction des contraintes matérielles et pratiques, tout en comprenant l'importance d'observer des tendances sur une longue période pour une analyse précise.
- **Pourquoi est-il important de capturer des données sur une longue période ?** Cette question aide les élèves à comprendre la nécessité d'observer des tendances ou variations temporelles pour une analyse précise et fiable des conditions environnementales.

Les élèves seront amenés à aborder les concepts suivants :

- **Comprendre les systèmes de stockage de données** : Les différentes solutions de stockage (carte SD, base de données, relevés manuels) présentent chacune leurs avantages et limitations. Le choix d'une solution adaptée dépend de facteurs comme l'autonomie nécessaire, la fréquence des relevés et l'accessibilité des données.
- **Maîtriser les formats et la structure des données** : L'organisation des données collectées doit permettre leur exploitation future. Cela implique de définir un format cohérent, d'établir une nomenclature claire et de garantir la traçabilité des mesures.
- **Appréhender les enjeux de fiabilité** : La fiabilité du système de stockage est cruciale pour éviter la perte de données. Les élèves devront réfléchir aux risques potentiels (panne de batterie, erreur de sauvegarde) et aux moyens de les prévenir.

Cette approche permettra de mettre en place un système robuste de collecte et de stockage des données environnementales, essentiel pour le suivi scientifique de leur mur végétal. Les compétences techniques acquises leur serviront également dans d'autres contextes nécessitant la gestion de données.

### Investigation par les élèves

#### Phase de réflexion collective

Dans un premier temps, les élèves sont invités à ouvrir une discussion sur les différentes méthodes possibles pour sauvegarder des données collectées par capteurs. Cette réflexion permet d'explorer toutes les possibilités plus ou moins techniques, des plus simples aux plus complexes, de manière libre (envoyer les données en utilisant le Wifi, prendre des photos d'un écran qui affiche les données, etc...).

Suite à cet échange, une analyse collective permettra d'identifier les solutions réalisables avec les ressources disponibles en classe et l'outil de programmation utilisé lors de l'étape 1 (plateforme Vittascience pour micro:bit). L'enseignant pourra orienter la discussion et fournir aux élèves la documentation technique qui pourrait leur permettre d'identifier les solutions réalisables.

#### Implémentation technique

La mise en œuvre technique peut s'effectuer selon deux approches.

La première consiste à utiliser un lecteur OpenLog avec une carte micro-SD, permettant un enregistrement automatique et continu des données. La seconde approche utilise un écran d'affichage nécessitant des relevés manuels réguliers tout au long de la journée.

Dans la section "Mise en pratique", nous avons choisi de documenter l'utilisation du lecteur OpenLog, qui est la solution que nous recommandons, bien que d'autres options comme l'écran soient également réalisables avec l'interface de programmation standard.

Pour les classes disposant des compétences techniques nécessaires, une solution plus avancée utilisant une connexion WiFi peut être envisagée, sous réserve de disposer d'une connexion internet sur le lieu d'installation.

#### Collecte des données

La dernière étape consiste à déployer la station de mesure créée dans l'étape 1 et améliorée grâce à la solution de sauvegarde des données, sur le site d'étude pour une période prolongée. L'acquisition des données sur plusieurs jours permet d'obtenir un aperçu plus fidèle et représentatif des conditions climatiques réelles du site. Cette durée étendue est essentielle pour garantir la pertinence des données collectées.

### Restitution et réflexion

**Connaissances mobilisées** : À la fin de cette phase, les élèves auront développé une compréhension initiale et appliquée des systèmes de stockage de données et de leur importance. Ils auront aborder les concepts de sauvegarde de données, de fiabilité des mesures, et comprendront l'importance d'une collecte systématique pour une analyse pertinente.

**Réflexion sur la mise en œuvre en classe** : Les élèves auront développé leur capacité d'analyse et de résolution de problèmes techniques en évaluant différentes solutions de stockage de données. Le travail collectif leur aura permis de développer leurs compétences en communication et en prise de décision.

**Résultats d'apprentissage généraux** : Les élèves auront acquis des compétences techniques en gestion et stockage de données, ainsi qu'en analyse critique des solutions techniques. Ils auront appris à évaluer différentes options technologiques et à choisir la plus adaptée à leurs besoins, tout en prenant en compte les contraintes pratiques et matérielles.

Cette deuxième étape est cruciale car elle permet de passer d'une simple collection de mesures instantanées à un véritable suivi de paramètres sur la durée. Les élèves ont pu raisonner et choisir de manière logique quelle était la solution la plus adaptée à la problématique posée, puis l'implémenter.

La capacité à stocker et analyser les données dans le temps est essentielle pour comprendre les variations environnementales et leur impact potentiel sur le mur végétal.

Pour approfondir cette phase, plusieurs questions peuvent être explorées avec les élèves :

- **Quelle fréquence de mesure est la plus pertinente ?** Encouragez les élèves à réfléchir sur l'équilibre entre la précision des données et la gestion de l'espace de stockage.
- **Comment organiser les données de manière efficace ?** Amenez les élèves à réfléchir sur la structure des données (format, organisation) pour faciliter leur analyse future.
- **Comment visualiser et interpréter les données collectées ?** Encouragez les élèves à réfléchir aux différentes manières de représenter les données (graphiques, tableaux) pour en faciliter l'analyse et la compréhension.

---

## Étape 3 : analyser les données et en tirer des leçons

### Contexte de la séquence

Maintenant que les élèves disposent de données qualitatives et quantitatives sur les conditions environnementales dans lesquelles les plantes vont vivre, ils doivent réaliser un travail de recherche documentaire pour découvrir quelles plantes s'épanouiront le mieux dans ces conditions. Au cours de cette étape, ils seront amenés à utiliser des outils de recherche assistée par intelligence artificielle (Gemini, Copilot) et à explorer les enjeux liés à la fiabilité des sources.

### Objectifs d'apprentissage

Se familiariser avec les outils de génération de texte (ChatGPT, Microsoft Copilot, Google Gemini) et maîtriser les bases de la formulation de prompts. Comprendre les spécificités de chaque outil pour identifier les plus pertinents pour la recherche documentaire. Reconnaître les limites des modèles de génération de texte, notamment les hallucinations. Analyser et exploiter les données collectées à l'aide d'un tableur pour en tirer des connaissances utiles.

### Conceptualisation

Comment utiliser les données environnementales collectées pour déterminer les plantes les plus adaptées à notre mur végétal grâce à une recherche documentaire ?

Pour guider les élèves dans leur démarche d'investigation, ils pourront explorer les questionnements suivants :

- **Comment interpréter les données environnementales collectées ?** Cette question encourage les élèves à analyser les mesures de température, d'humidité et de luminosité pour comprendre les conditions du site.
- **Comment identifier les plantes adaptées à ces conditions ?** Cette réflexion amène les élèves à faire le lien entre les données environnementales et les besoins des plantes.
- **Comment formuler des prompts efficaces** pour obtenir des informations fiables sur les besoins des plantes en utilisant différents outils d'IA (Copilot, Gemini, etc.), tout en sachant vérifier et croiser les sources des informations obtenues ?
- **Comment vérifier la fiabilité des informations trouvées ?** Cette question sensibilise les élèves à l'importance de la validation des sources, particulièrement lors de l'utilisation d'outils d'IA.

Cela leur permettra d'aborder les concepts suivants :

- **Maîtriser l'analyse de données** : Comprendre comment transformer des données brutes en informations exploitables à travers des calculs de moyennes, la création de graphiques et l'identification de tendances.
- **Comprendre les besoins des plantes** : Identifier les facteurs environnementaux critiques pour la croissance des plantes (luminosité, température, humidité) et leur importance relative.
- **Développer un esprit critique** : Apprendre à évaluer la fiabilité des sources d'information, notamment lors de l'utilisation d'outils d'IA, et comprendre l'importance de la vérification des données.

### Investigation par les élèves

#### Analyse des données collectées

Les élèves devront effectuer une analyse approfondie des données collectées. Cette analyse comprendra le calcul des moyennes et la création de graphiques montrant l'évolution des variables environnementales au fil du temps. Le niveau d'analyse sera adapté aux compétences des élèves. Si vous avez réalisé des mesures manuelles, une première étape consistera à transférer les données vers un format numérique exploitable type tableur. En revanche, les données issues du lecteur de carte micro-SD seront directement exploitables.

A partir de cette analyse de données, les élèves devront déterminer plusieurs facteurs clés permettant de caractériser l'environnement du futur mur végétal par exemple le niveau d'ensoleillement (plein soleil, mi-ombre, ombre), ou le type de climat (continental, océanique, méditerranéen).

Pour faciliter l'analyse des données, les élèves créeront un tableau structuré permettant de synthétiser les mesures. Ce tableau comprendra les facteurs clés comme la luminosité, la température et l'humidité, avec leurs valeurs mesurées, leur classification et leur impact sur le choix des plantes.

| Facteur environnemental | Valeurs mesurées | Classification | Impact pour le choix des plantes |
|---|---|---|---|
| Luminosité | [min-max] | Plein soleil / Mi-ombre / Ombre | Notes sur les types de plantes adaptées |
| Température | [min-max] Moyenne: | Chaud / Tempéré / Frais | Résistance nécessaire au chaud / froid |
| Humidité | [min-max] Moyenne: | Sec / Normal / Humide | Besoins en arrosage correspondants |

Cette approche structurée permettra aux élèves d'organiser efficacement leurs données, d'établir une classification standardisée des conditions environnementales, d'identifier les corrélations entre les mesures et les besoins des plantes, et de préparer une base solide pour la recherche documentaire.

Ces informations serviront de fondement pour la phase suivante de recherche documentaire sur les plantes adaptées.

#### Recherche documentaire : une approche comparative pour comprendre l'apport des nouvelles technologies et de l'IA

L'analyse des données environnementales réalisée précédemment a fourni aux élèves des informations précises sur les conditions dans lesquelles le mur végétal devra vivre : niveaux de luminosité, variations de température, taux d'humidité.

Ces données constituent la base pour identifier les espèces végétales les plus adaptées à notre environnement spécifique.

Sur la base de ces informations, les élèves devront réaliser une recherche documentaire permettant : d'identifier les plantes capables de s'épanouir dans les conditions mesurées, de comprendre les besoins spécifiques de chaque espèce végétale, d'anticiper les éventuels défis de maintenance du mur végétal, d'assurer la durabilité du projet en sélectionnant des espèces compatibles.

Pour mener à bien cette recherche, les élèves exploreront et compareront différentes approches méthodologiques, en combinant méthodes traditionnelles et outils modernes avec pour objectif de découvrir la valeur ajoutée des technologies assistées par l'intelligence artificielle et les différents outils de génération de texte et d'image.

Pour développer l'esprit critique des élèves face aux méthodes de recherche documentaire et comprendre la place des nouvelles technologies dans ce processus, la classe sera divisée en trois groupes. Chaque groupe explorera une approche différente pour identifier les plantes adaptées aux conditions environnementales mesurées :

- **Groupe 1 : méthodes traditionnelles** — Utilisation d'ouvrages de référence en botanique et jardinage. Consultation de bases de données spécialisées (Flora Data, Tela Botanica). Analyse de revues horticoles et publications scientifiques.
- **Groupe 2 : recherche web classique** — Exploitation des moteurs de recherche (Google, Bing). Navigation sur des sites spécialisés en horticulture. Participation à des forums et communautés de jardiniers en ligne.
- **Groupe 3 : outils d'intelligence artificielle** — par exemple ChatGPT (OpenAI) : chat.openai.com, Microsoft Copilot : https://copilot.microsoft.com/, Google Gemini : https://gemini.google.com/, Llama2 (Meta) : https://www.llama2.ai/, Mixtral (MistralAI) : https://chat.mistral.ai/, Plateforme Vittascience : https://vittascience.com/ia/text.php

Chaque groupe documentera son expérience selon les critères suivants :

- **Temps et efficacité** : Durée nécessaire pour trouver les informations pertinentes, facilité d'accès aux ressources, quantité d'informations obtenues.
- **Qualité et fiabilité** : Précision des informations trouvées, possibilité de vérifier les sources, cohérence entre les différentes sources consultées.
- **Avantages et limites** : Points forts spécifiques à chaque méthode, difficultés rencontrées, suggestions d'amélioration du processus de recherche.

#### Synthèse et évaluation critique des outils d'IA

Une fois le travail de groupe réalisé, les élèves mettront en commun leurs conclusions et se concentreront sur la comparaison de chaque méthode avec l'utilisation des modèles d'IA. La mise en commun permettra d'analyser collectivement les différentes approches de recherche. Les élèves compareront leurs expériences, identifieront les points forts de chaque méthode et réfléchiront à une approche optimale combinant outils traditionnels et nouvelles technologies. Cette réflexion collective les amènera à développer un regard nuancé sur l'intégration des technologies dans leur processus de recherche, tout en cultivant leur esprit critique face aux différentes sources d'information. La discussion portera sur la manière dont ces outils citent leurs sources et sur la cohérence des informations fournies. Les élèves partageront leurs observations sur la pertinence des réponses obtenues par rapport aux conditions environnementales spécifiques de leur projet.

Un point crucial de cette discussion sera l'exploration du phénomène d'hallucination des IA. À travers des exemples concrets, comme la description erronée des pattes des poules d'eau supposément palmées, les élèves comprendront l'importance de la vérification des sources.

Il est important de noter que les modèles d'IA sont en constante évolution et s'améliorent rapidement. Les exemples d'hallucinations ou d'erreurs identifiés à un moment donné peuvent ne plus être valables quelques mois plus tard, car les modèles sont régulièrement mis à jour et entraînés avec de nouvelles données. C'est pourquoi il est crucial de développer une méthodologie de vérification des informations plutôt que de se fier à une liste d'erreurs connues. Cette nature évolutive des IA renforce d'autant plus l'importance d'adopter une approche critique systématique, indépendamment de la "réputation" ou de la version du modèle utilisé.

### Restitution et réflexion

**Connaissances mobilisées** : À l'issue de cette phase d'investigation, les élèves auront développé une compréhension approfondie des méthodes de recherche documentaire, en comparant approches traditionnelles et outils d'IA. Ils auront acquis des compétences essentielles en matière de validation des sources et d'analyse critique de l'information.

**Réflexion sur la mise en œuvre en classe** : Les élèves auront expérimenté différentes méthodes de recherche à travers un travail collaboratif en groupes. Cette approche comparative leur aura permis de développer leur esprit critique et d'évaluer concrètement les avantages et limites de chaque méthode.

**Résultats d'apprentissage généraux** : Les élèves auront acquis des compétences en recherche documentaire et en utilisation raisonnée des outils d'IA. Ils sauront formuler des requêtes précises, évaluer la fiabilité des sources et croiser les informations obtenues pour faire des choix éclairés.

Cette phase d'investigation comparative est essentielle car elle permet aux élèves de développer une approche méthodologique rigoureuse tout en découvrant les potentialités et les limites des différents outils à leur disposition. Cette méthodologie sera directement applicable à la conception du mur végétal, où chaque décision doit être basée sur des données fiables et vérifiées.

L'utilisation encadrée des outils d'IA permet aux élèves de découvrir ces technologies de manière critique et réfléchie. Si l'IA facilite l'accès à l'information et l'analyse de données complexes, les élèves apprennent également l'importance de la vérification systématique des sources et de la confrontation des résultats obtenus. Cette approche critique est particulièrement importante pour le projet de mur végétal, où le choix des plantes doit être basé sur des informations précises et fiables pour garantir la viabilité à long terme de l'installation.

Pour approfondir cette démarche d'investigation, plusieurs axes de réflexion sont proposés aux élèves :

- **Comment optimiser ses recherches ?** Les élèves apprennent à formuler des requêtes précises et pertinentes, que ce soit pour les moteurs de recherche traditionnels ou les outils d'IA.
- **Comment évaluer la fiabilité des sources ?** Développement de critères d'évaluation et de méthodes de validation des informations.
- **Comment repérer les erreurs potentielles ?** Sensibilisation aux limites des différents outils et à l'importance de la vérification croisée.
- **Comment synthétiser l'information ?** Apprentissage des techniques de synthèse et d'organisation des données collectées pour une prise de décision éclairée.

---

## Étape 4 : utilisez les données pour créer un mur végétal

### Contexte de la séquence

Maintenant que les élèves ont déterminé les plantes adaptées grâce à leur recherche documentaire comparative, il est temps de passer à la phase pratique de mise en place du mur végétal. Cette étape cruciale va permettre aux élèves de mettre en application leurs connaissances théoriques tout en développant des compétences pratiques en jardinage et en gestion de projet. La réussite de cette phase dépendra directement de la qualité des recherches effectuées précédemment et de leur capacité à transformer ces informations en actions concrètes.

### Objectifs d'apprentissage

Mettre en pratique les connaissances acquises lors de la phase de recherche documentaire pour la sélection des plantes. Apprendre les bases du jardinage et les techniques de plantation adaptées aux murs végétaux. Développer des compétences en gestion de projet et travail collaboratif (répartition des tâches, communication, résolution de problèmes). Appliquer les données environnementales collectées pour optimiser l'installation des plantes.

### Conceptualisation

Comment mettre en place et maintenir un mur végétal en milieu urbain ?

La végétalisation urbaine vise à intégrer des éléments végétaux dans l'environnement bâti afin de créer des villes plus durables. Cette approche apporte de nombreux bénéfices environnementaux essentiels : régulation de la température urbaine, amélioration de la qualité de l'air et de l'eau, enrichissement de la biodiversité et meilleure gestion des eaux pluviales. Dans le cas des murs végétaux, cela suppose la création d'écosystèmes verticaux. Le projet demande de comprendre des aspects essentiels qui ont été traités dans les étapes précédentes : les conditions environnementales (luminosité, température, humidité) mesurées dans l'étape 1 et 2, et les besoins des plantes choisies analysés dans l'étape 3. Il reste maintenant à mettre en pratique ces connaissances pour assurer une installation réussie du mur végétal grâce à un système d'installation adapté (structure, substrat, irrigation). Il est essentiel de comprendre que tout système, aussi bien conçu soit-il, présente des limites et des contraintes. Dans le cas de la végétalisation urbaine, ces limites peuvent être liées aux ressources disponibles (eau, nutriments), aux conditions environnementales (température, luminosité), ou aux capacités d'adaptation des plantes. La reconnaissance de ces limites n'est pas un frein au projet, mais plutôt une opportunité d'anticiper les difficultés potentielles et de développer des solutions adaptées. Cette approche réaliste permet de concevoir des systèmes plus résilients et durables, en tenant compte des contraintes tout en maximisant les bénéfices attendus.

La méthode d'implantation comprend plusieurs étapes. D'abord, l'analyse du site d'installation : étude de l'orientation, de l'exposition aux éléments, et des contraintes structurelles. Ensuite, la sélection des végétaux adaptés, basée sur les données environnementales collectées et la recherche documentaire réalisée. Enfin, la mise en place d'un système de suivi, permettant d'observer les paramètres et de gérer les ressources, notamment l'eau.

### Investigation par les élèves

Durant cette étape, les élèves vont être amenés à assembler le mur végétal, en se basant sur les analyses, les mesures, les compétences et connaissances acquises dans les étapes précédentes. Cette phase se veut plus "libre", dans le sens où les élèves pourront déterminer, avec l'aide de leur enseignant, ce à quoi leur projet de mur végétal ressemblera et la répartition des tâches. Voici cependant quelques conseils pour mettre en pratique cette étape.

#### Comprendre les enjeux de la végétalisation urbaine

Pour débuter cette étape, nous recommandons aux enseignants d'initier une discussion en classe sur les enjeux de la végétalisation urbaine, afin de donner du sens au projet et de le contextualiser. Cette discussion abordera les défis environnementaux urbains actuels (îlots de chaleur, pollution, gestion des eaux) et les solutions apportées par la végétalisation. Après cette introduction, répartissez la classe en petits groupes thématiques, chacun explorant un aspect spécifique : impact environnemental, bénéfices sociaux ou innovations techniques. Planifiez des échanges réguliers entre les groupes pour faciliter le partage des découvertes. Encouragez les élèves à diversifier leurs sources d'information (documents scientifiques, vidéos, interviews d'experts) et à partager leurs découvertes à travers des mini-exposés. Cette démarche permet à chaque élève de développer son expertise tout en participant à la construction d'une compréhension collective du projet.

#### Construction collective du projet

Une fois l'ensemble des éléments contextuels bien analysé, et en s'appuyant sur les données environnementales collectées et leurs recherches, il est nécessaire que les élèves développent un plan d'action pour la mise en place de leur projet, en explorant différentes dimensions du projet : l'optimisation scientifique des conditions de croissance, la sélection raisonnée des espèces végétales, la conception technique du système d'irrigation et les enjeux socio-environnementaux de la végétalisation. Cette approche méthodologique leur permettra d'appliquer concrètement leurs connaissances scientifiques tout en développant leur autonomie.

L'organisation du travail doit refléter la dimension collaborative du projet. Les élèves peuvent naturellement se répartir les responsabilités en fonction de leurs affinités et compétences : certains pourront se concentrer sur la coordination d'ensemble, d'autres sur les aspects techniques de l'installation, ou encore sur la documentation et le suivi du projet. Cette dynamique de groupe favorisera l'émergence des talents individuels tout en renforçant la cohésion collective autour d'un objectif commun.

En complément de la création du mur végétal (création du système de plantation, sélection et ajout des plantes), il est intéressant de réutiliser les compétences acquises en programmation et électronique dans ce protocole afin de développer un système de monitoring connecté reprenant les pratiques et compétences acquises lors des phases précédentes.

La carte micro:bit, déjà utilisée pour nos premières mesures environnementales, peut être adaptée pour créer un système de surveillance de notre mur végétal. Le capteur DHT11 nous permettra de suivre la température et l'humidité de l'air, deux paramètres essentiels pour la santé des plantes. Le capteur de luminosité intégré à la carte nous donnera des informations précieuses sur l'exposition lumineuse, nous permettant d'ajuster le positionnement des plantes ou d'envisager un éclairage d'appoint si nécessaire.

En ajoutant des capteurs d'humidité du sol directement dans le substrat, nous pourrons surveiller précisément les besoins en eau de chaque section du mur. Ces données, combinées avec celles de la température et de l'humidité ambiante, nous permettront de développer un système d'arrosage intelligent qui s'adapte aux conditions réelles et aux besoins spécifiques de nos plantes.

L'ensemble des données collectées sera affiché sur une interface simple que nous programmerons, permettant un suivi en temps réel de notre mur végétal. Cette approche technologique nous permet non seulement d'assurer la bonne santé de nos plantes, mais aussi d'approfondir nos compétences en programmation à travers un projet concret et utile.

#### Réflexion et perspectives

Une fois le projet mis en oeuvre, les élèves pourront réfléchir à l'impact de leur projet sur leur environnement immédiat et plus largement sur leur ville.

Encouragez les à documenter leur démarche, créer des supports de communication, ou organiser des événements de sensibilisation. Cette dimension citoyenne du projet leur permet de se positionner comme acteurs du changement dans leur communauté.

Ils évalueront leur projet selon leurs propres critères de réussite. Ils pourront proposer des améliorations, imaginer des extensions du projet, ou réfléchir à de nouvelles initiatives. Cette phase de réflexion valorisera leur capacité d'analyse critique et leur vision à long terme.

#### Aller plus loin : l'Intelligence Artificielle comme outil créatif et pédagogique dans la conception de murs végétaux

Les outils d'Intelligence Artificielle générative, tels que DALL·E, ChatGPT ou Midjourney, peuvent être intégrés de manière innovante dans le processus de conception et de réalisation du mur végétal. Cette approche permet non seulement d'enrichir le projet pédagogique mais aussi d'initier les élèves à l'utilisation réfléchie et critique des technologies émergentes.

1. **Conception assistée par l'IA** : Les élèves peuvent utiliser DALL·E pour générer des visualisations détaillées de leur projet en spécifiant les caractéristiques environnementales précises de leur site d'implantation. Par exemple, ils peuvent demander : "Générer un mur végétal pour une façade nord avec une exposition limitée au soleil dans un climat méditerranéen". L'IA produira plusieurs propositions d'aménagement tenant compte de ces contraintes spécifiques.
2. **Validation et analyse critique** : Les visualisations générées par l'IA doivent être systématiquement confrontées aux données botaniques et techniques issues de sources scientifiques fiables. Cette démarche comparative permet aux élèves d'identifier les incohérences potentielles entre les propositions de l'IA et les contraintes réelles. Ils affinent ainsi leur compréhension des besoins spécifiques des différentes espèces végétales tout en développant leur esprit critique face aux solutions générées automatiquement.
3. **Alternative virtuelle et sensibilisation** : Dans les cas où l'implantation physique d'un mur végétal n'est pas possible, l'IA peut être utilisée pour créer des supports de sensibilisation innovants. Les élèves peuvent travailler sur la création de séries de posters montrant l'évolution possible des espaces urbains avec différents scénarios de végétalisation. Ils peuvent également développer des projections en mapping vidéo simulant la transformation végétale des façades, ou réaliser des supports pédagogiques illustrant les bénéfices environnementaux de la végétalisation urbaine.
4. **Processus itératif et apprentissage** : L'utilisation de l'IA permet un processus de conception itératif où les élèves peuvent rapidement tester différentes compositions végétales et évaluer leur impact visuel. Ils peuvent ajuster leurs propositions en fonction des retours et des contraintes identifiées, tout en explorant diverses solutions d'aménagement sans contraintes matérielles.
5. **Développement des compétences numériques** : Cette approche permet aux élèves de développer des compétences essentielles dans l'utilisation des technologies émergentes. Ils apprennent à maîtriser les prompts et le dialogue avec les IA génératives, à évaluer et valider les propositions générées automatiquement, et à comprendre les potentialités et les limites des outils d'IA.

Voici par exemple, deux générations réalisées grâce à DALL·E sur la création d'un mur végétal dans deux contextes climatiques et urbains différents :

##### Prompt 1 : créer le plan d'implantation d'un mur végétal dans la ville de Marseille

Créer un plan d'implantation des espèces pour un mur végétal à Marseille nécessite une sélection adaptée aux conditions locales : un climat méditerranéen caractérisé par des étés chauds et secs, des hivers doux, une luminosité intense, et une humidité modérée.

Caractéristiques du mur végétal :

- **Exposition solaire** : Vérifiez l'orientation pour ajuster la répartition des plantes. Marseille reçoit beaucoup de soleil, donc une orientation sud demandera des plantes résistantes à la chaleur.
- **Arrosage** : Un système d'irrigation goutte à goutte est conseillé pour une humidité maîtrisée.
- **Substrat** : Substrat léger et bien drainé, enrichi en matière organique.

Sélection des plantes adaptées à Marseille :

- **Plantes vivaces résistantes au soleil (haut du mur)** : Sedum spectabile (orpin), Euphorbia characias (euphorbe méditerranéenne), Lavandula angustifolia (lavande), Phormium tenax (lin de Nouvelle-Zélande).
- **Plantes retombantes (milieu et bas du mur)** : Helichrysum italicum (immortelle), Lonicera nitida (chevrefeuille nain), Erigeron karvinskianus (vergerette), Rosmarinus officinalis 'Prostratus' (romarin rampant).
- **Plantes en treillis (encadrant le mur)** : Trachelospermum jasminoides (jasmin étoilé), Bougainvillea glabra, Passiflora caerulea (fleur de la passion).
- **Plantes d'ombre partielle (côté ombragé)** : Asplenium scolopendrium (fougère langue de cerf), Heuchera spp. (heuchère), Carex oshimensis 'Evergold' (laîche).

Plan d'implantation :

- **Zone supérieure (plantes résistantes au soleil)** : Installez les plantes comme le sedum et l'euphorbe sur la rangée la plus haute.
- **Zone médiane (plantes décoratives et retombantes)** : Helichrysum et le Lonicera pour un effet de cascade. Touches florales e.g. l'erigeron.
- **Zone inférieure** : Alternez le romarin rampant et la vergerette pour couvrir la base.
- **Encadrement** : Jasmins étoilés ou bougainvilliers sur les côtés du mur, attachés à un treillis.

##### Prompt 2 : créer le plan d'implantation d'un mur végétal dans la ville de Brest

La ville de Brest, située en Bretagne, présente un climat océanique. Cela signifie des températures modérées toute l'année, une forte humidité, des précipitations fréquentes, et une luminosité parfois réduite.

Caractéristiques du mur végétal :

- **Climat et exposition** : Plus frais et humide que Marseille, avec moins de sécheresse. Exposition variable, avec des zones souvent exposées à un ensoleillement diffus.
- **Arrosage** : La forte humidité ambiante réduit la fréquence des arrosages nécessaires.
- **Substrat** : Substrat drainant, enrichi en matière organique, adapté à une humidité constante.

Sélection des plantes adaptées à Brest :

- **Plantes vivaces et résistantes à l'humidité (haut du mur)** : Fatsia japonica (aralia), Dryopteris spp. (fougères), Alchemilla mollis (alchémille), Heuchera spp. (heuchère).
- **Plantes retombantes (milieu du mur)** : Lonicera nitida (chèvrefeuille nain), Vinca minor (pervenche), Campanula portenschlagiana (campanule), Hedera helix 'Miniature' (lierre nain).
- **Plantes pour la base du mur (zone inférieure)** : Ajuga reptans (bugle rampante), Primula vulgaris (primevère), Hosta spp. (hosta).
- **Plantes grimpantes (encadrant le mur)** : Hydrangea petiolaris (hortensia grimpant), Clematis montana (clématite), Parthenocissus tricuspidata (vigne vierge).

Plan d'implantation général :

- **Zone supérieure** : Plantes résistantes à l'humidité et adaptées à l'ombre partielle. Exemples : Fatsia, fougères, alchémille.
- **Zone médiane** : Plantes retombantes, créant un effet de cascade, comme le chèvrefeuille nain, la pervenche et la campanule.
- **Zone inférieure** : Plantes rampantes et prostrées, telles que le carex, l'ajuga et les hostas.
- **Encadrement** : Hydrangea petiolaris ou clématites pour ajouter du volume et de la verticalité.

### Restitution et réflexion

**Connaissances mobilisées** : Pour la mise en place du mur végétal, les élèves ont mobilisé leurs compétences en analyse environnementale, leurs connaissances botaniques et leur maîtrise des outils technologiques. Ils ont également développé des capacités pratiques en jardinage et en gestion de systèmes d'irrigation.

**Réflexion sur la mise en œuvre en classe** : Cette phase finale a permis de concrétiser les apprentissages théoriques en une réalisation tangible. Les élèves ont dû faire preuve d'adaptation et de créativité pour surmonter les défis pratiques, tout en appliquant rigoureusement leurs connaissances scientifiques.

**Résultats d'apprentissage généraux** : Les élèves ont développé leur capacité à appliquer concrètement leurs connaissances en botanique dans un contexte réel. Ils ont acquis une expertise dans la mise en place et l'utilisation des systèmes de monitoring environnemental. Le projet leur a permis de développer des compétences en gestion collaborative et en résolution de problèmes techniques. Enfin, ils ont amélioré leurs capacités de communication et appris à documenter efficacement un processus scientifique.

**Bilan global du protocole** : Ce projet pédagogique a permis aux élèves de développer une expertise combinant sciences, technologie et conscience environnementale. La progression à travers les phases de mesure, analyse, conception et réalisation a construit leur compréhension des enjeux de la végétalisation urbaine. Les élèves ont travaillé sur la collecte et l'analyse des données environnementales, la conception d'un système de monitoring, l'application des principes botaniques et écologiques, la gestion de projet et la documentation du processus scientifique.

Cette expérience a renforcé leur rôle dans le changement environnemental au sein de leur communauté scolaire. En utilisant des outils technologiques pour développer des solutions écologiques concrètes, ils ont montré comment l'innovation peut servir le développement durable. Cette approche pédagogique constitue un modèle pour l'enseignement des sciences et de la technologie au service des enjeux environnementaux actuels.

A partir de ce travail, il est possible d'ouvrir de nouveaux axes d'étude et de questionnements collectifs :

- **Comment adapter ce système pour d'autres contextes urbains ?** Exploration des possibilités d'adaptation du système pour différents environnements urbains, en tenant compte des contraintes spécifiques à chaque situation.
- **Quelles améliorations technologiques pourraient optimiser le système ?** Identification des innovations techniques possibles pour améliorer l'efficacité et la performance du système de végétalisation.
- **Comment mesurer l'impact environnemental réel du mur végétal ?** Développement de méthodologies pour quantifier les bénéfices environnementaux concrets du projet, notamment en termes de qualité de l'air et de biodiversité.
- **Comment partager cette expérience avec d'autres établissements ?** Élaboration de stratégies de diffusion et de partage des connaissances acquises pour permettre la reproduction du projet dans d'autres contextes éducatifs.

---

## Mise en pratique

### Créer et programmer notre station de mesure

Dans notre exemple, la station de mesure a été programmée sur la plateforme Vittascience : Vittascience — Micro:bit

### Collecter des données : montage et programmation de la station de mesure

#### Assemblage de la station

La carte micro:bit doit être connectée au Grove Shield. Le capteur de température/humidité peut être placé sur les broches P1/P15 ou P2/P16 du blindage Grove.

#### Programmation de la station

Le code de cette partie peut être trouvé en suivant ce lien : Vittascience — Micro:bit

L'objectif de cette station va être de mesurer la température, l'humidité relative et la luminosité ambiante, et de les afficher à intervalles réguliers sur l'ordinateur. Pour effectuer les mesures, nous aurons besoin des blocs suivants, disponible dans la catégorie capteurs. Pour afficher les blocs dans la console de l'ordinateur, le bloc à utiliser est celui-ci, présent dans la catégorie communication.

Pour faciliter l'affichage dans la console, il est possible d'utiliser le bloc suivant, présent dans la catégorie texte.

Enfin, pour éviter d'inonder la console de mesures, il convient de ralentir le programme. Pour cela, le bloc suivant présent dans la catégorie entrées/sorties doit utilisé.

#### Programme final

Le programme ne fonctionne que si vous avez connecté le DHT11 à la broche P1/P15 du shield grove. Si vous avez connecté le DHT11 sur une autre broche, il vous faudra modifier le programme en conséquence. Également, si vous possédez des micro:bit V1 et non V2 (pour vérifier, vérifiez l'inscription au dos de la carte en bas à droite), il vous faudra modifier le programme en conséquence.

#### Test du programme

Pour téléverser le programme sur la carte micro:bit, il faut tout d'abord connecter celle-ci à l'ordinateur via USB.

Il faut connecter le câble USB au port micro USB de la carte, et non pas du shield grove, ce dernier n'étant capable que d'alimenter la micro:bit.

Ensuite, il faut cliquer sur le bouton téléverser présent en haut au centre de l'interface de programmation, sélectionner la carte, puis valider. Une seconde fenêtre va alors apparaître, vous demandant d'appairer un port série. Sélectionnez le premier (et normalement seul) port de la liste, puis cliquez sur valider. La carte devrait maintenant envoyer les données toutes les 5 secondes à l'ordinateur, qui devraient s'afficher sur la console de l'interface située en bas de l'écran.

Il est normal que le capteur DHT11 renvoie 0 pour la température et l'humidité au début du programme, car ce dernier s'initialise. Après quelques dizaines de secondes, les mesures de température et d'humidité devraient apparaître correctement.

### Affichage des données : montage et programmation de l'OpenLog

#### Montage

Le lecteur OpenLog doit être connectée au port P0/P14 du shield grove, grâce à l'adaptateur Dupont / Grove, de telle sorte que les broches GND, VCC, TXO et RXI de l'OpenLog soient respectivement connectés aux fils noir, rouge, blanc et jaune du câble grove.

#### Programmation

Le code de cette partie peut être trouvé en suivant ce lien : Vittascience — Micro:bit

L'enjeu va être ici d'enregistrer les données collectées sur une carte micro-sd, dans un format exploitable par un tableur, afin de pouvoir analyser les résultats obtenus. Pour cela, les données vont être enregistrées au format CSV. Ce format texte très simple permet de simuler un tableur en séparant les colonnes par une virgule, un point-virgule ou un espace, et les lignes par un retour à la ligne. Voici un exemple de fichier au format CSV : name;first name;birth date / Bocuse;Arnaud;30/03/1997 / Leloup;Davy;14/02/1968 / Neri;Régis;07/09/1990

Dans le programme, il va donc falloir écrire sur la carte sd les en-tête de colonnes, puis les données. Écrire les données se fait au moyen du bloc suivant, présent dans la catégorie communication.

En plus de la température, de l'humidité et de la luminosité, il peut être intéressant de noter le temps correspondant à chaque mesure. Pour cela, les blocs suivants permettront de respectivement démarrer un chronomètre et de récupérer sa valeur.

Le programme final est le suivant. De la même façon que pour la partie précédente, ce programme ne fonctionne que si le DHT11 est connecté à la broche P1/P15 et l'OpenLog à la broche P0/P14.

#### Tester le programme

De la même manière que pour la partie précédente, il vous faut connecter la carte à l'ordinateur via USB, et téléverser le programme. N'oubliez pas d'insérer une carte micro-sd dans le lecteur OpenLog. Si tout fonctionne correctement, la led bleue devrait clignoter chaque fois que des données sont envoyées sur la carte sd (ici toutes les 30 secondes). Si quelque chose ne va pas avec vote montage (ou si vous oubliez de mettre la carte dans l'OpenLog), il est possible que celui-ci clignote bleu 3 fois de suite à intervalles réguliers pour signaler que quelque chose ne va pas.

Une fois les mesures terminées, vous pourrez récupérer la carte micro-sd et l'insérer dans un ordinateur. Un fichier nommé logXXXXX.TXT (avec les X étant des chiffres) devrait alors être apparu, et les données devraient y être stockées. Vous pourrez ensuite importer ces données dans le tableur de votre choix.

#### Faire les mesures sur le terrain

Une fois la station assemblée et programmée, il est recommandé de créer un boîtier pour contenir la carte et la batterie externe, afin de pouvoir installer la station de mesure sur le site d'étude sans risquer de détérioration due aux intempéries.

---

## Aller plus loin

Exploration de la problématique au travers d'autres initiatives

### Surveillance de la santé des plantes

Une amélioration simple de ce protocole serait d'ajouter un capteur d'humidité du sol capacitif (comme le Grove Moisture Sensor v1.4) pour mesurer le niveau d'humidité du substrat. Ce capteur, facile à intégrer avec la micro:bit via le shield Grove, permet de détecter quand les plantes ont besoin d'être arrosées. Il suffit de le connecter à un port analogique et d'utiliser le bloc "lire la valeur analogique" pour obtenir une mesure entre 0 (très sec) et 1023 (très humide). Pour aller plus loin, les élèves pourraient s'inspirer des systèmes utilisés dans l'agriculture urbaine comme Farmbot qui intègrent des capteurs plus sophistiqués : conductivité électrique (EC) pour mesurer la concentration en nutriments et pH-mètre pour surveiller l'acidité du substrat. Ces données supplémentaires permettent un suivi plus précis de la santé des plantes.

### Timelapse de croissance des plantes

La mise en place d'un système de timelapse, similaire au projet GrowLapse de Raspberry Pi, permettrait de documenter visuellement l'évolution du mur. Les élèves pourraient utiliser une caméra Raspberry Pi programmée pour prendre des photos à intervalles réguliers (par exemple toutes les 12 heures) et créer une vidéo accélérée montrant la croissance des plantes sur plusieurs semaines ou mois. Cette vidéo pourrait être partagée sur les réseaux sociaux de l'établissement, présentée lors d'expositions dans le hall de l'école, ou même projetée lors d'événements de quartier pour sensibiliser la communauté aux enjeux de la végétalisation urbaine.

### Conception assistée par IA

Il peut être intéressant de faire découvrir aux élèves d'autres types d'IA générative comme la génération d'image, en leur faisant générer des images de murs végétaux en prenant comme base une image du lieu à végétaliser, et en la modifiant avec le modèle d'IA. L'utilisation d'outils comme Midjourney ou DALL-E (https://openai.com/dall-e-3) pourrait aider à visualiser le résultat final avant l'installation. Ces visualisations pourraient être exposées dans les espaces publics du quartier (bibliothèques, mairies de quartier, centres sociaux) pour sensibiliser les habitants aux possibilités de végétalisation urbaine. Par exemple, les élèves pourraient utiliser des prompts spécifiques comme "mur végétal vertical dans une cour d'école avec des plantes méditerranéennes" pour générer différentes propositions d'aménagement, les présenter lors d'une exposition publique, et permettre aux habitants de voter pour leurs concepts préférés.

---

*Cette fiche fait partie du projet [SteamCity](/projets/steamcity), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

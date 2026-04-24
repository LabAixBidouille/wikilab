---
id: outdoor-air-quality
title: "Qualité de l'air extérieur et impact de la météo"
sidebar_label: "Qualité de l'air extérieur"
sidebar_position: 4
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="2" y="2" width="20" height="20" rx="3" fill="#DD5350" opacity="0.1"/><circle cx="9" cy="8" r="3" fill="#DD5350" opacity="0.25"/><circle cx="15" cy="8" r="2" fill="#DD5350" opacity="0.25"/><circle cx="12" cy="6" r="2.5" fill="#DD5350" opacity="0.25"/><path d="M5 18l2-4 3 2 4-6 3 4 2-1" stroke="#DD5350" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg> Qualité de l'air extérieur et impact de la météo

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Biologie</span>
  <span className="badge badge--primary">Chimie / Physique</span>
  <span className="badge badge--info">Technologie</span>
  <span className="badge badge--secondary">Environnement</span>
  <span className="badge badge--secondary">Bien-être et santé publique</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| SteamCity | 3 heures (3 séances) | Facile | 10-15 ans |

## Matériel

- 1 carte programmable (NUCLEO-L476RG, Arduino ou Micro:bit)
- 1 shield Grove
- 1 LED RGB Neopixel
- 1 écran LCD
- 1 capteur SCD30 Sensirion
- 1 capteur de gaz multicanal MICS6814
- 1 capteur de particules HM3301
- 1 capteur DHT11 (température et humidité)
- 1 module Bluetooth HM10 BLE
- 1 module OpenLog pour enregistrement sur carte SD
- 1 batterie et connecteur
- 1 câble USB

<a href="/pdf/steamcity/Protocol_OutdoorAirQuality_FR.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger en PDF</a>

</div>

</div>

---

## Introduction

Le protocole « Qualité de l'air extérieur et impact de la météo » vise à guider la création d'une station de surveillance fonctionnelle de la qualité de l'air en classe. La pollution atmosphérique est un défi environnemental qui affecte les écosystèmes, les infrastructures et la santé publique. Les polluants issus des procédés industriels, des transports et d'autres activités humaines ajoutent des particules fines, des oxydes d'azote, des composés organiques volatils et d'autres substances à l'atmosphère. Ces polluants peuvent contribuer aux problèmes respiratoires, à la réduction de la visibilité, à la dégradation des bâtiments et à la modification des cycles environnementaux.

La surveillance environnementale contribue à la sensibilisation à l'environnement. En comprenant les sources, les schémas et les effets de la pollution atmosphérique, chacun peut contribuer à des solutions fondées sur des données probantes.

D'un point de vue technique, ce projet présente l'Internet des objets (IoT), la technologie des capteurs et la visualisation de données, composantes des systèmes modernes de surveillance environnementale. Grâce à une expérience pratique avec des cartes programmables, des capteurs et des équipements d'enregistrement de données, les étudiants acquerront des compétences pratiques utiles dans les domaines des STEAM.

La dimension scientifique du projet permet aux apprenants d'aborder des concepts de chimie, de physique et de sciences de l'environnement. Ils explorent la composition chimique des polluants atmosphériques, les principes de détection des particules et les facteurs environnementaux influençant la qualité de l'air. En effectuant des mesures et en comparant les résultats aux normes établies, les participants appliquent la démarche scientifique et comprennent ses applications pratiques.


### Étape 1 : collecter des données : construction et déploiement de capteurs

Les élèves construisent leur station de surveillance de la qualité de l'air et apprennent à collecter des mesures à l'aide de capteurs. Cette première étape présente les composants et concepts techniques tout en générant les données brutes nécessaires à l'analyse ultérieure.

### Étape 2 : afficher les données : techniques de visualisation et de représentation des données

En s'appuyant sur la collecte de données, les élèves apprennent à visualiser leurs mesures à l'aide de graphiques et d'affichages de données. Cette étape développe les compétences en littératie des données et aide les élèves à identifier des tendances qui ne sont pas évidentes sous forme numérique brute.

### Étape 3 : analyser les données : identifier les tendances et les corrélations environnementales

À partir des données visualisées, les élèves effectuent une analyse pour identifier les corrélations, comprendre les facteurs d'influence et tirer des conclusions fondées sur des données probantes. Cette étape analytique transforme les mesures brutes en informations.

### Étape 4 : utiliser les données pour agir : élaboration de recommandations environnementales

La dernière étape encourage les élèves à appliquer leurs conclusions à des situations concrètes, en les comparant à d'autres données et en formulant des recommandations pour améliorer la qualité de l'air. Cela relie la recherche scientifique à l'action citoyenne et à la sensibilisation à l'environnement.

Chaque étape s'appuie sur la précédente, créant une progression d'apprentissage qui débute par des mesures concrètes et progresse vers l'analyse et les applications pratiques. Ensemble, elles représentent le processus scientifique, de l'observation à la communication des résultats.

### Structure du protocole

Le protocole fonctionne comme un parcours d'apprentissage à travers quatre étapes :

Durée : 180 minutes ou 3 séances (1 pour l'étape 1, 1 pour l'étape 2 et le début de l'étape 3, et 1 pour la fin de l'étape 3 et l'étape 4)

Niveau de difficulté : Facile (du collège au lycée)

Matériel nécessaire : 1 carte programmable (NUCLEO-L476RG ; Arduino ; micro:bit) ; 1 shield Grove ; 1 led RGB Neopixel ; 1 écran LCD ; 1 capteur SCD30 Sensirion ; 1 module Bluetooth HM10 BLE ; 1 batterie ; 1 connecteur de batterie ; 1 câble USB

Ressources : Guide d'utilisation de Vittascience : https://fr.vittascience.com/learn/tutorial.php?id=330/guide-d-utilisation-qualite-d-air, CNES : https://cnes.fr/fr, Calisph'air : https://enseignants-mediateurs.cnes.fr/fr/projets/calisphair


### Glossaire

- **Particules fines (PM10 et PM2,5)** : Les particules fines (PM) sont constituées d'un mélange complexe de particules solides et liquides, de substances organiques et minérales en suspension dans l'air. Elles peuvent être d'origine naturelle (volcanisme, érosion...) ou générées par les activités humaines (chauffage, transport routier, industrie...). Elles sont classées selon leur taille : PM 2,5 (particules de diamètre inférieur ou égal à 2,5 µm), PM 10 (particules de diamètre inférieur ou égal à 10 µm). À titre de comparaison, un cheveu humain a un diamètre de 50 à 70 µm.
- **Dioxyde d'azote (NO2)** : Les émissions de dioxyde d'azote (NO2) proviennent principalement de la combustion de combustibles fossiles (chauffage, production d'électricité, moteurs de voitures et de bateaux).
- **Monoxyde de carbone (CO)** : Le monoxyde de carbone (CO) résulte d'une combustion incomplète (bois, butane, charbon…) due à des installations (chauffage) mal contrôlées ou aux gaz d'échappement des véhicules. De nombreux accidents domestiques surviennent chaque année en hiver en raison d'une intoxication au monoxyde de carbone à l'intérieur des habitations.
- **Composés organiques volatils (COV)** : Les composés organiques volatils (COV) sont principalement des polluants secondaires créés par des réactions chimiques à partir d'autres polluants, mais ils peuvent être de différentes natures. On en trouve plus de 400 dans l'air, dont les hydrocarbures, le benzène et les aldéhydes. Ils sont principalement émis par les véhicules, les solvants et l'industrie.
- **Ozone (O3)** : Une première couche d'ozone dans la haute atmosphère est appelée « bon ozone », car elle agit comme une couche protectrice contre les rayons ultraviolets du soleil. Une autre, présente au niveau du sol, est appelée « mauvais ozone ». Selon l'Organisation mondiale de la santé, « dans ce dernier cas, l'ozone est un polluant secondaire, formé par des réactions photochimiques entre divers polluants tels que les oxydes d'azote (NOx) émis par les véhicules et l'industrie, et les composés organiques volatils (COV), émis par les véhicules, les solvants et l'industrie. »
- **Dioxyde de carbone (CO2)** : Le dioxyde de carbone (CO2) est un gaz incolore et inodore, responsable de 77 % des émissions de gaz à effet de serre (GES) d'origine humaine. Naturellement présent en faibles quantités dans l'atmosphère, il se forme lors de certains processus naturels (cycle du carbone) et surtout lors de la combustion de substances carbonées. Il peut être nocif pour l'environnement et la santé humaine. Il peut provenir du secteur des transports, de l'industrie (utilisation de combustibles fossiles) et de l'habitat (chauffage, éclairage, etc.).
- **Indice de qualité de l'air** : L'indice de qualité de l'air est une valeur utilisée pour synthétiser les différentes mesures de la qualité de l'air. En France, Atmo France, la fédération des associations de surveillance de la qualité de l'air, publie un indice destiné au public. Il synthétise la surveillance de cinq polluants : le dioxyde de soufre SO2, le dioxyde d'azote NO2, l'ozone O3 et les particules fines (PM10 et PM2,5). Cet indice est publié quotidiennement pour une agglomération (de plus de 100 000 habitants) ou une région. Il comprend six niveaux colorés, allant de bon à extrêmement mauvais.

### Glossaire technique

- **Capteur de gaz multicanal MICS6814** : Ce capteur de gaz multicanal (capable de mesurer plusieurs gaz simultanément) doit être connecté au port I2C du shield. Il dispose de 4 éléments de mesure. Il peut détecter les gaz suivants : monoxyde de carbone (CO) : 1 - 1 000 ppm, dioxyde d'azote (NO₂) : 0,05 - 10 ppm, éthanol (C₂H₇OH) : 10 - 500 ppm et composés organiques volatils (COV) : 1 - 500 ppm.
- **Capteur HM3301** : Le HM3301 est un capteur laser pour la détection de particules fines. Il détecte la poussière dans l'air en continu et en temps réel. Il doit être connecté au port I2C du shield. Des pales de ventilateur aspirent l'air à travers une chambre de détection. La lumière laser se diffuse sur les particules de poussière et est captée par une photodiode. Après amplification dans le circuit électronique, ce capteur fournit la concentration massique des particules ainsi que leur nombre.
- **DHT11** : Le DHT11 est un capteur numérique de température et d'humidité. Il doit être connecté à un port numérique du shield (D0 à D13 sur Arduino et P0 à P20 sur micro:bit). Ce module utilise des composants d'humidité capacitifs.
- **LoRa** : La technologie LoRaWan est un protocole de communication radio (fréquence 868 MHz en France) permettant l'échange de données entre objets connectés. Le signal est émis sur une large plage spectrale, limitant les risques d'interférences et permettant l'envoi de données depuis l'extérieur ou l'intérieur sur de longues distances (1 km en zone urbaine – jusqu'à 20 km en zone rurale). L'envoi de messages est illimité. Cependant, contrairement aux réseaux 4G et 5G, les débits LoRaWan sont très faibles, de l'ordre de quelques kilobits par seconde. Ce type de réseau est donc utilisé pour l'Internet des objets (IoT), c'est-à-dire les capteurs fixes (par exemple, température, humidité, etc.).

## Étape 1 : collecter des données : construction et déploiement d'équipements de capteurs

**Contexte et description du problème à résoudre à cette étape** : Cette première étape familiarise les élèves avec les concepts clés de la pollution atmosphérique et les outils (interfaces et matériel) utilisés pour la mesurer. En classe, les élèves se familiariseront avec différents capteurs et leurs interfaces tout en commençant à collecter des données sur différents polluants.

**Objectifs d'apprentissage**: Comprendre les principaux types de polluants atmosphériques et leurs sources. Apprendre à assembler et configurer des capteurs pour la surveillance environnementale. Acquérir des compétences de base en programmation pour la collecte de données à partir de différents types de capteurs. Développer une compréhension des unités de mesure et des principes d'étalonnage. Appliquer des méthodes de mesure scientifiques à un défi environnemental concret.

### Conceptualisation

Avant de commencer, vous devez évaluer le niveau de connaissances des élèves et les amener à réfléchir aux concepts clés.

Pour vous aider à le faire, voici quelques questions sur lesquelles travailler avec eux.

L'air que nous respirons est composé de divers éléments chimiques, sous forme gazeuse, liquide ou solide, qui, à des niveaux variables, peuvent avoir des répercussions néfastes sur notre santé, l'environnement et l'économie.

« Chaque année, 7 millions de décès prématurés sont liés à la pollution de l'air dans le monde » (OMS, 2014).

Les polluants tels que les aérosols, les oxydes d'azote, les métaux lourds, le monoxyde de carbone, les composés organiques volatils, etc. sont considérés comme des indicateurs de la pollution atmosphérique. Ils sont donc étroitement surveillés par divers organismes de contrôle (nationaux, comme les agences ATMO https://atmo-france.org/la-carte-des-aasqa/, ou internationaux, comme l'OMS).

Question de recherche 1 : Que sont les polluants environnementaux ? Hypothèse : Les polluants atmosphériques d'origine naturelle et anthropique s'accumulent à des concentrations différentes selon le lieu, le moment et les conditions météorologiques.

Concepts clés :

Polluants primaires : Substances chimiques émises directement par une source, comme le monoxyde de carbone provenant des gaz d'échappement des véhicules ou le dioxyde de soufre provenant des processus industriels. Polluants secondaires : Composés formés par des réactions chimiques dans l'atmosphère lorsque des polluants primaires interagissent entre eux ou avec des composants atmosphériques naturels, tels que l'ozone formé à partir d'oxydes d'azote et de composés organiques volatils en présence de lumière solaire. Santé environnementale : Domaine qui étudie l'impact des facteurs environnementaux, notamment la qualité de l'air, sur la santé humaine et les schémas de maladies au sein des populations. Vous trouverez en annexe un glossaire complet des polluants.

Question de recherche 2 : Comment pouvons-nous quantifier différents types de polluants atmosphériques ? Hypothèse : Les capteurs électroniques peuvent détecter et mesurer des polluants spécifiques grâce à différents principes de détection physiques et chimiques.

Concepts clés :

1. Technologie des capteurs : Dispositifs qui détectent et répondent aux entrées de l'environnement physique, convertissant les paramètres physiques en signaux pouvant être mesurés et analysés.
2. Parties par million (PPM) : Unité de mesure utilisée pour quantifier les faibles concentrations de polluants dans l'air, représentant le nombre de particules polluantes trouvées parmi un million de particules d'air.
3. Étalonnage : Processus de configuration d'un capteur ou d'un outil de mesure en comparant ses lectures avec une norme connue pour garantir l'exactitude de la collecte de données.

Question de recherche 3 : Où la qualité de l'air est-elle un problème important ? Hypothèse : Les zones à forte densité de population, à activité industrielle et à forte concentration de trafic connaissent des problèmes de qualité de l'air plus importants que les zones rurales ou moins développées.

Concepts clés :

1. Points chauds urbains : Emplacements spécifiques dans les villes où la pollution de l'air a tendance à se concentrer en raison des schémas de circulation, de la configuration des bâtiments et des activités humaines.
2. Populations vulnérables : Groupes particulièrement touchés par la pollution de l'air, notamment les enfants, les personnes âgées et les personnes souffrant de problèmes respiratoires préexistants.
3. Facteurs géographiques : Caractéristiques naturelles et construites qui influencent la qualité de l'air dans un endroit spécifique, telles que la topographie, les régimes de vent et la densité des bâtiments.

Activité d'introduction : Identifiez avec les élèves les endroits où mesurer la qualité de l'air et où celle-ci constitue un enjeu important (par exemple, devant les écoles, les habitations proches des zones industrielles, les zones plus ou moins boisées). Demandez ensuite aux élèves, par groupes, de choisir des zones géographiques où ils analyseront les données afin de répondre à la question : Quel est l'impact des pollutions urbaines sur la qualité de vie des citoyens ?

Durée : 25 minutes

### Investigation par les élèves

Maintenant que nous en savons plus sur ces différents polluants, voyons comment les mesurer en assemblant les capteurs et en programmant la carte électronique. Commencez par tester ces activités en classe, puis demandez aux élèves, en groupes, de les placer dans les différents lieux/zones géographiques choisis précédemment.

N'oubliez pas de collecter des données sur le site d'étude (ex. : trafic routier, heures de pointe, présence d'arbres, etc.).

#### Activité 1 : Mesure des COV (10 minutes)

L'activité est lancée par l'enseignant à l'aide des interfaces Vittascience et du capteur MICS6814, d'un écran d'affichage et d'un module Openlog pour l'enregistrement des données sur carte SD. Elle peut être réalisée en groupe ou avec toute la classe.

**Consignes aux élèves** : Créez un programme de mesure de COV, puis enregistrez-le sur une carte microSD ou affichez-le sur un écran LCD. Utilisez les interfaces Vittascience pour le réaliser, assemblez les composants (NUCLEO-L476RG ; carte programmable micro:bit ou Arduino, capteur MICS6814, écran d'affichage, module Openlog pour l'enregistrement des données sur carte SD, câble USB, compteur), vérifiez l'absence d'erreurs de syntaxe dans le programme, puis cliquez sur « Envoyer » pour télécharger le programme directement sur la carte programmable micro:bit ou Arduino NUCLEO-L476RG. Les connexions se font avec des câbles Grove (4 fils en 1 avec codage).

Bon à savoir : Les composants électroniques sont sensibles à l'eau et à l'humidité : veillez à les protéger avec une housse semi-étanche (ouverture par le bas) lors de leur utilisation en extérieur.

Programmation à cette étape : Vous trouverez le code complet et les instructions d'assemblage pour cette activité dans la section « Fiche pratique 1 : Système de surveillance des COV avec écran LCD ».

#### Activité 2 : Surveillance multiparamétrique (15 minutes)

L'activité est lancée par l'enseignant à l'aide des interfaces Vittascience et des capteur HM3301, MICS6814, DHT11, d'un écran d'affichage et du module Openlog pour l'enregistrement des données sur carte SD. Elle peut être réalisée en groupe ou avec toute la classe.

**Consignes aux élèves** : Créez un programme pour mesurer divers paramètres environnementaux, puis enregistrez-les sur une carte microSD ou affichez-les sur un écran LCD. Utilisez les interfaces Vittascience pour le réaliser, assemblez les composants (carte programmable, capteur HM3301, capteur MICS6814, capteur d'humidité DHT11, écran d'affichage, module Openlog pour l'enregistrement des données sur carte SD, câble USB, compteur), vérifiez l'absence d'erreurs de syntaxe dans le programme, puis cliquez sur « Envoyer » pour télécharger le programme directement sur la carte programmable NUCLEO-L476RG (micro:bit ou Arduino). Les connexions se font avec des câbles Grove (4 fils en 1 avec codage).

Bon à savoir : Les composants électroniques sont sensibles à l'eau et à l'humidité : veillez à les protéger avec une housse semi-étanche (ouverture par le bas) lors de leur utilisation en extérieur.

Programmation à cette étape : Vous trouverez le code complet et les instructions d'assemblage pour cette activité dans la section « Fiche pratique 2 : Collecte de données environnementales multi-capteurs ».

### Restitution et réflexion

L'enseignant peut terminer l'activité en demandant aux élèves de réexpliquer les concepts clés appris : que sont les polluants environnementaux et comment les mesurer ? Ces deux concepts permettront aux élèves d'étudier les résultats de leurs mesures.

Connaissances mobilisées : Les élèves ont appris à connaître les polluants primaires et secondaires, leurs sources et les méthodes de mesure à l'aide de capteurs. Réflexion sur la mise en œuvre en classe : Cette étape peut être mise en œuvre dans une salle de classe standard avec accès à des ordinateurs pour la programmation. Envisagez de diviser les élèves en petits groupes, chacun étant responsable d'une configuration de capteurs différente. Objectifs d'apprentissage : Les élèves devraient désormais être capables d'identifier les polluants atmosphériques, de comprendre leurs unités de mesure et d'utiliser la programmation de base pour collecter des données environnementales. Ces bases les préparent à la visualisation et à l'analyse de données.

## Étape 2 : afficher les données : techniques de visualisation et de représentation des données

**Contexte et description du problème à résoudre à cette étape** : Après avoir connecté des capteurs et programmé la carte électronique pour générer des données sur la qualité de l'air à l'étape précédente, les élèves apprennent maintenant à afficher et à visualiser ces informations. Les valeurs des capteurs peuvent être visualisées sur l'écran LCD ou enregistrées pour une analyse plus approfondie. Cette étape de visualisation transforme les valeurs brutes en modèles reconnaissables et permet aux élèves d'identifier des tendances qui pourraient ne pas être apparentes dans les données numériques.

**Objectifs d'apprentissage**: Comprendre les différentes méthodes de visualisation des données environnementales. Apprendre à utiliser des interfaces graphiques pour créer des affichages de données en temps réel. Développer des compétences en matière d'exportation et de stockage de données pour une analyse ultérieure. Comprendre comment différentes techniques de visualisation mettent en évidence divers aspects d'un même ensemble de données. Appliquer des méthodes de visualisation adaptées au type de données et aux besoins d'analyse.

### Conceptualisation

Avant de commencer, vous devez évaluer le niveau de connaissances des élèves et les amener à réfléchir aux concepts clés. Pour vous y aider, voici une question à travailler avec eux, qui les aidera à trouver des réponses pour les activités futures.

Question de recherche : Quelles méthodes permettent de visualiser efficacement les données environnementales ? Hypothèse : Les graphiques de séries chronologiques révèlent des modèles temporels dans les niveaux de pollution qui ne sont pas apparents dans les données numériques brutes.

Concepts clés :

1. Visualisation des données : Représentation d'informations et de données à l'aide d'éléments visuels tels que des graphiques, des diagrammes et des cartes pour communiquer les relations entre les données.
2. Surveillance en temps réel : Collecte et affichage continus des données au fur et à mesure qu'elles se produisent, permettant une observation immédiate des changements et des tendances.
3. Enregistrement différé : Collecte et stockage de données en vue d'une récupération et d'une analyse ultérieures, permettant l'examen des modèles historiques et des tendances à long terme.

Activité d'introduction : Demandez aux élèves comment afficher les valeurs des capteurs. Deux solutions s'offrent à eux : soit de manière synchrone, avec affichage en direct sur l'ordinateur, soit de manière asynchrone, avec enregistrement des données sur la carte microSD fournie dans le kit.

Durée : 10 minutes

### Investigation par les élèves

#### Activité 1 : Graphiques en temps réel (20 minutes)

L'activité est lancée par l'enseignant à l'aide des interfaces Vittascience. Elle peut être réalisée en groupe ou avec toute la classe.

**Consignes aux étudiants** : Créez un graphique en temps réel grâce au mode graphique des interfaces Vittascience. Voici la procédure pour récupérer les données depuis la console :
1. Tout d'abord, la carte programmable doit être connectée à l'ordinateur via le câble USB. Cliquez ensuite sur le bouton « Connecter » dans la barre d'outils.
2. Dans la fenêtre qui s'ouvre, sélectionnez votre carte programmable, puis cliquez sur le bouton "Connexion".
3. La console affiche ensuite les données.
4. Pour visualiser l'évolution des données sous forme graphique, cliquez sur le bouton « mode graphique » dans la console de droite.
5. Un graphique avec les données apparaîtra.
6. Il ne reste plus qu'à régler les paramètres de la console graphique en cliquant sur l'icône de configuration à gauche de la console.
7. Les étudiants peuvent choisir les données à afficher et le nombre de valeurs à afficher sur la largeur de la console.
8. Pour récupérer les données chiffrées, cliquez sur le bouton « exporter » dans le coin inférieur droit de la console.

Bon à savoir : À tout moment, vous pouvez effacer les données pour reprendre l'acquisition grâce au bouton « Effacer les données » dans les paramètres de la console. Placez votre curseur sur la courbe pour afficher la valeur. Le format CSV est requis pour traiter ces informations dans une feuille de calcul.

#### Activité 2 : Enregistrement des données (20 minutes)

L'activité est lancée par l'enseignant à l'aide des interfaces Vittascience. Elle peut être réalisée en groupe ou avec toute la classe.

**Consignes aux étudiants** : Créez un programme pour enregistrer des données sur une carte SD à l'aide d'un module d'enregistrement OpenLog avec le support des interfaces Vittascience.

Une fois l'enregistrement terminé, retirez la carte microSD du lecteur. Insérez-la dans l'adaptateur microSD/USB, puis branchez ce dernier sur l'ordinateur.

Programmation à cette étape : Vous trouverez le code complet et les instructions d'assemblage pour cette activité dans la section « Fiche pratique 3 : Enregistrement automatisé des données sur carte SD pour les mesures de la qualité de l'air ».

### Restitution et réflexion

L'enseignant peut conclure l'activité en montrant aux élèves qu'ils ont appris à utiliser différentes méthodes pour comprendre l'importance de la représentation des données. Chacune de ces méthodes peut ensuite être utilisée pour analyser les données et comprendre leur influence sur le résultat.

Connaissances mobilisées : Les étudiants ont appris des méthodes pour visualiser les données environnementales grâce à des graphiques en temps réel et à l'enregistrement de données pour une analyse asynchrone. Réflexion sur la mise en œuvre en classe : Cette activité fonctionne parfaitement en salle informatique, où les élèves peuvent connecter leurs appareils et expérimenter différentes techniques de visualisation. Partagez des exemples de visualisations efficaces avant que les élèves ne créent les leurs. Résultats d'apprentissage : Les élèves devraient maintenant comprendre comment différentes méthodes de visualisation révèlent des aspects distincts des mêmes données et être capables de choisir des techniques de visualisation appropriées pour des types spécifiques de données environnementales.

## Étape 3 : analyser les données : identifier les modèles et les corrélations environnementales

**Contexte et description du problème à résoudre à cette étape** : En s'appuyant sur la collecte et la visualisation des données des étapes précédentes, les élèves procèdent maintenant à des analyses pour en extraire des informations utiles. Cette étape transforme les mesures brutes en connaissances pratiques en identifiant des tendances, des corrélations et des relations potentielles. Les élèves apprennent à examiner les aspects temporels et spatiaux des données sur la qualité de l'air et à les relier aux facteurs environnementaux.

**Objectifs d'apprentissage**: Développer des compétences analytiques pour interpréter les données environnementales. Apprendre à identifier les tendances et les corrélations dans les mesures de la qualité de l'air. Comprendre l'influence des facteurs environnementaux sur les concentrations de polluants. Appliquer les concepts statistiques de base à l'analyse des données environnementales. Tirer des conclusions fondées sur des données probantes à partir des mesures recueillies.

### Conceptualisation

Avant de commencer, vous devez évaluer le niveau de connaissances des élèves et les amener à réfléchir aux concepts clés. Pour vous y aider, voici une question à travailler avec eux, qui les aidera à trouver des réponses pour les activités futures.

Question de recherche 1 : Quels facteurs influencent la variation des niveaux de polluants atmosphériques ? Hypothèse : Les niveaux de polluants sont corrélés à des activités humaines et à des périodes spécifiques, comme le trafic aux heures de pointe qui augmente les concentrations de NO2 et de CO.

Concepts clés :

1. Modèles temporels : Cycles récurrents dans les mesures de données au fil du temps, y compris les fluctuations quotidiennes, les modèles hebdomadaires et les variations saisonnières.
2. Répartition spatiale : La répartition des concentrations de polluants dans différents lieux géographiques, révélant les points chauds et les zones propres.
3. Variables confondantes : Facteurs qui peuvent influencer les variables dépendantes et indépendantes dans une analyse, créant potentiellement des corrélations trompeuses.

Activité introductive : Demandez aux élèves quels facteurs prendre en compte lors de l'analyse des données. Par exemple, il est possible d'enregistrer les heures de la journée, les heures de travail et de déjeuner, le trafic routier, la population et la taille de la ville. Comparez ces moments clés avec leurs conséquences sur l'évolution des différents niveaux mesurés par les capteurs.

Durée : 10 minutes

### Investigation par les élèves

#### Activité 1 : Traitement des données (10 minutes)

L'activité est lancée par l'enseignant à l'aide des interfaces Vittascience. Elle peut être réalisée en groupe ou avec toute la classe.

**Consignes aux élèves** : Exploitation des données. Retirez la carte microSD du lecteur. Insérez-la dans l'adaptateur microSD/USB, puis branchez ce dernier sur l'ordinateur. Pour ouvrir le fichier « LOG00002.txt » sur la carte microSD, procédez comme suit :

Avec Microsoft Excel

Créez un fichier Microsoft Excel sur la carte microSD, faites un clic droit → « nouveau » → « Feuille de calcul Microsoft Excel » Nommez le fichier Excel, puis ouvrez-le. Allez dans « Fichier » → « Ouvrir » → « Parcourir ». Sélectionnez le type de fichier « Fichiers texte ». Ouvrez « LOG00002.txt » sur la carte microSD. Un assistant d'importation s'ouvre, cliquez sur « Suivant » sans modifier chaque étape, puis cliquez sur « Terminer ». Insérez une ligne au-dessus des cinq colonnes et nommez-les comme suit :

| Temps (sec) | Température (°C) | Pression (Pa) | Altitude (m) |
|---|---|---|---|
| 0 | 17.48 | 99813.49 | 124.54 |
| 0 | 17.49 | 99814.79 | 124.23 |
| 1 | 17.49 | 99814.96 | 124.41 |

| Particules - PM (µm) | Dioxyde d'azote - NO2 (ppm) | Monoxyde de carbone - CO (ppm) | Composés organiques volatils - COV (ppm) |
|---|---|---|---|
| 2,5 | 42 | 27 | 100 |
| 2,7 | 46 | 26 | 110 |
| 2,8 | 48 | 26 | 115 |

Dessiner des courbes : Sélectionner les données avec le titre, puis « Insérer » → « Nuage de points ». Répétez l'opération pour chaque quantité mesurée.

Avec Libre Office

Création d'un fichier LibreOffice Calc. Ouvrez le fichier Libre Office. Allez dans l'onglet « Fichier » → « Ouvrir » et sélectionnez le fichier « LOG00002.txt ». Une fenêtre s'ouvre : Importer : Ne rien modifier. Options de séparation : choisissez Tabulation uniquement. Vérifiez que l'aperçu en bas de la page est cohérent. Les données sont affichées dans l'ordre suivant : Heure (s), Température (°C), Pression (Pa°), Altitude (m), Matières particulaires - PM (µm), Dioxyde d'azote - NO2 (ppm), Monoxyde de carbone - CO (ppm), Composés organiques volatils - COV (ppm). Création de diagrammes : Ajoutez une ligne pour indiquer à quoi correspondent les données comme suit :

| Temps (sec) | Température (°C) | Pression (Pa) | Altitude (m) |
|---|---|---|---|
| 0 | 17.48 | 99813.49 | 124.54 |
| 0 | 17.49 | 99814.79 | 124.23 |
| 1 | 17.49 | 99814.96 | 124.41 |

| Particules - PM (µm) | Dioxyde d'azote - NO2 (ppm) | Monoxyde de carbone - CO (ppm) | Composés organiques volatils - COV (ppm) |
|---|---|---|---|
| 2,5 | 42 | 27 | 100 |
| 2,7 | 46 | 26 | 110 |
| 2,8 | 48 | 26 | 115 |

Sélectionnez la colonne Heure et la deuxième colonne correspondant aux données que vous souhaitez afficher (en maintenant la touche \[ctrl\] enfoncée). Cliquez sur « Insérer » → « Diagramme » À l'étape \{1. choisir un type de diagramme\} : choisissez « ligne » et cliquez sur Suivant. À l'étape \{2. choisissez une plage de données\} : cochez la case « Première colonne comme étiquette », laissez le reste intact, cliquez sur Suivant. L'étape 3 apparaît, cliquez sur Suivant sans rien modifier. Si vous le souhaitez, ajoutez un titre, un sous-titre et les unités des quantités affichées. Cliquez sur Terminer.

#### Activité 2 : Analyse des modèles (10 minutes)

L'activité est lancée par l'enseignant à l'aide des interfaces Vittascience. Elle peut être réalisée en groupe ou avec toute la classe.

**Consignes aux élèves** : Analyser les données. Trouver les causes des variations du monoxyde de carbone dans l'air.

### Restitution et réflexion

L'analyse des données est une étape essentielle pour transformer les données brutes en informations, permettant aux étudiants d'apprendre à tirer des conclusions.

Connaissances mobilisées : Les élèves ont développé des compétences analytiques pour identifier les modèles temporels, les distributions spatiales et les corrélations entre les niveaux de polluants et les facteurs environnementaux. Réflexion sur la mise en œuvre en classe : Ce travail d'analyse peut être mené en binôme ou en petits groupes pour favoriser la discussion. Fournir des fiches de travail structurées pour guider les élèves dans leur première expérience d'analyse de données. Résultats d'apprentissage : Les élèves devraient désormais être capables d'interpréter les données environnementales, de reconnaître des modèles significatifs et de comprendre comment les facteurs externes influencent les mesures de la qualité de l'air.

## Étape 4 : utiliser les données pour agir : élaboration de recommandations environnementales

**Contexte et description du problème à résoudre à cette étape** : La dernière étape relie la recherche scientifique à la pratique concrète. Les élèves comparent leurs résultats à d'autres données et formulent des recommandations fondées sur des données probantes pour améliorer la qualité de l'air. Ce projet, qui n'était qu'un exercice académique, devient ainsi une opportunité d'engagement environnemental, permettant aux élèves de comprendre comment les données scientifiques peuvent éclairer les politiques et les décisions personnelles.

**Objectifs d'apprentissage**: Développer des compétences en analyse comparative de données provenant de différents sites. Apprendre à formuler des recommandations fondées sur des données probantes. Comprendre comment les données scientifiques peuvent éclairer les politiques et actions environnementales. Communiquer les résultats scientifiques à divers publics. Appliquer ses connaissances en matière de qualité de l'air pour proposer des stratégies d'amélioration concrètes.

### Conceptualisation

Avant de commencer, l'enseignant encourage les élèves à prendre en compte les facteurs en jeu.

Question de recherche 1 : Comment nos mesures locales se comparent-elles aux données d'autres régions ? Hypothèse : Les zones présentant des caractéristiques similaires présentent des schémas de pollution comparables malgré leur séparation géographique.

Concepts clés :

1. Analyse comparative : Étude des similitudes et des différences entre des ensembles de données provenant de différents lieux ou périodes afin d'obtenir un contexte pour les résultats locaux.
2. Modèles mondiaux : Tendances généralisées de la pollution atmosphérique qui transcendent les conditions locales, souvent liées aux étapes d'industrialisation, d'urbanisation et de développement économique.
3. Variabilité régionale : Différences dans les mesures de la qualité de l'air entre les zones géographiques en raison de facteurs locaux tels que la topographie, le climat, la densité de population et l'activité industrielle.

Question de recherche 2 : Quelles actions pourraient améliorer la qualité de l'air sur la base de nos résultats ? Hypothèse : Des interventions ciblées sur les sources de pollution identifiées peuvent améliorer la qualité de l'air local.

Concepts clés :

1. Stratégies d'atténuation : Approches et techniques conçues pour réduire les émissions de polluants ou leur concentration dans l'air ambiant.
2. Contrôle à la source : Méthodes visant à réduire la pollution à son origine, telles que les normes d'émission pour les véhicules ou les processus industriels.
3. Cadre politique : Système de réglementations, d'incitations et de lignes directrices établi par les autorités pour gérer la qualité de l'air et réduire la pollution.

Question de recherche 3 : Comment les données scientifiques peuvent-elles éclairer la prise de décision environnementale ? Hypothèse : Les recommandations fondées sur les données conduisent à des interventions environnementales plus efficaces que les approches basées sur l'intuition.

Concepts clés :

1. Prise de décision fondée sur des données probantes : Utilisation de données empiriques pour guider les actions et les politiques plutôt que de s'appuyer uniquement sur l'intuition ou la tradition.
2. Engagement des parties prenantes : Implication de diverses parties intéressées (membres de la communauté, entreprises, gouvernement) dans l'interprétation des données et l'élaboration de stratégies de réponse.
3. Justice environnementale : Traitement équitable et la participation significative de toutes les personnes, quelle que soit leur origine, en ce qui concerne les réglementations environnementales et leur mise en œuvre.

Activité d'introduction – Aider les élèves à explorer la corrélation entre les activités humaines et urbaines et les variables temporelles. Formuler des hypothèses sur les facteurs potentiels influençant les tendances observées. Où trouverait-on la qualité de l'air la plus mauvaise et la plus favorable dans une ville et dans le monde ?

Durée : 10 minutes

### Investigation par les élèves

L'activité finale (10 minutes) est lancée par l'enseignant, elle peut être réalisée en groupe ou avec toute la classe.

Consignes aux élèves : Maintenant que les données ont été enregistrées, il peut être intéressant de les comparer avec d'autres données mondiales grâce à la technologie LoRa. Importez les données collectées (avec la technologie LoRa ; pour plus d'informations sur LoRa, consultez les « Lignes directrices de Vittascience sur LoRA avec le matériel actuellement disponible ») et publiez-les sur le site web de l'école ou sur celui de Vittascience. Vous pouvez publier les données collectées en temps réel sur Internet via un serveur. Par exemple, la qualité de l'air locale peut être affichée sur un site web ou un réseau social. Veuillez noter, cependant, que la mise en place d'un tel projet est réservée aux utilisateurs expérimentés !

Connectez-vous sur le site Vittascience et accédez à la carte Vittamap : vittascience.com/vittamap. Cliquez sur le bouton « + » → « Ajouter une expérience ». Sur le formulaire, remplissez les informations suivantes : Nom du projet ; Type de kit : kit station de mesure ; Comment s'est déroulé le projet ? (décrivez ici votre protocole de mesure) ; Lieu ; Dates de mesure ; Données (pour ajouter des données, vous pouvez inclure plusieurs séries de mesures. Vous pouvez saisir des données directement dans le tableau "Champ de données", et/ou ajouter votre propre fichier .csv depuis votre carte SD) ; Photos/Vidéos ; Langue. Une fois tous les champs remplis, il ne vous reste plus qu'à cliquer sur le bouton "Ajouter une expérience". Vos données sont désormais disponibles pour la communauté d'utilisateurs de Vittascience sur la carte Vittamap. Les élèves peuvent ensuite les comparer avec d'autres expériences similaires. Filtrez les expériences par type de "Kit station de mesure". Cliquez ensuite sur une expérience et sur le bouton "comparer". Cliquez à nouveau sur une autre expérience et sur le bouton "comparer avec l'expérience sélectionnée".

### Restitution et réflexion

L'enseignant encourage les élèves à partager leurs idées pour améliorer la qualité de l'air dans le monde. Résumez ces idées sous forme de synthèse des meilleures pratiques à mettre en œuvre.

Connaissances mobilisées : Les étudiants ont appris à comparer les résultats locaux avec des données externes et à élaborer des recommandations fondées sur des données probantes pour améliorer la qualité de l'air. Réflexion sur la mise en œuvre en classe : Cette étape bénéficie d'un format d'atelier où les groupes d'élèves peuvent présenter et discuter de leurs conclusions et recommandations. Si possible, envisagez d'inviter des experts environnementaux locaux. Résultats d'apprentissage : Les élèves devraient maintenant comprendre comment les données scientifiques peuvent éclairer les actions environnementales pratiques et être en mesure de communiquer leurs résultats d'une manière qui soutient la prise de décision fondée sur des preuves.

---

## Fiche pratique

Consultez la fiche technique détaillée pour programmer votre carte : [Programmation : Outdoor Air Quality](/ressources/steamcity/programmation/programmation-outdoor-air-quality).

---

## Aller plus loin

Idées de projets complémentaires En s'appuyant sur les connaissances et les compétences développées en classe, les étudiants peuvent approfondir leur compréhension de la qualité de l'air extérieur en appliquant ce qu'ils ont appris dans divers nouveaux projets tels que :

- **Idée 1** : Construire un abri solaire pour votre station de qualité de l'air. Un abri protège et soutient vos capteurs. Équipez-le d'un module d'alimentation alimenté par batterie et d'un panneau solaire. Connectez-le simplement à votre microcontrôleur.
- **Idée 2** : Ajouter un anémomètre à votre station météo. Cela vous permettra d'enregistrer la vitesse du vent. En complément de l'anémomètre ou séparément, vous pouvez ajouter un pluviomètre. Celui-ci mesure la quantité d'eau de pluie tombée.
- **Idée 3** : Transmettre les données mesurées de l'extérieur vers l'intérieur. Il vous faut deux cartes : une avec les capteurs, l'autre avec un écran d'affichage.
- **Idée 4** : Recevoir les informations de votre station sur votre smartphone. Un module Bluetooth rend cela possible ! D'une portée d'environ 10 m, il se branche sur le shield de la carte, comme les autres capteurs.

---

## Documentation : glossaire des polluants

| Polluants | Effets sur la santé | Effets sur l'environnement (climatique et local) | Valeurs maximales recommandées par l'OMS |
|---|---|---|---|
| Particules fines PM10 / PM2,5 | Plus la particule est fine, plus elle est nocive pour l'organisme : PM10 retenu dans le nez et les voies respiratoires profondes, PM2,5 pénètre profondément, traverse la barrière pulmonaire et pénètre dans la circulation sanguine | Effet diffusant ou absorbant, augmentant l'effet de serre. Dégâts aux bâtiments et monuments : formation d'une couche noire, salissures | Pour les PM2,5 : 10 μg/m3 en moyenne annuelle, 25 μg/m3 en moyenne sur 24 heures. Pour PM10 : 20 μg/m3 en moyenne annuelle, 50 μg/m3 en moyenne sur 24 heures |
| Dioxyde d'azote (NO2) | Des concentrations élevées peuvent être toxiques et provoquer une grave inflammation des voies respiratoires | Contribue aux pluies acides, affectant les plantes et les sols. Responsable de la formation d'aérosols de nitrate et de leur accumulation dans le sol | 40 μg/m3 en moyenne annuelle, 200 μg/m3 en moyenne horaire |
| Monoxyde de carbone (CO) | Intoxication à haut niveau : si pollution intérieure, risque d'intoxication. Affecte le système nerveux central et les organes sensoriels en se liant à l'hémoglobine sanguine au lieu de l'oxygène | Participe au mécanisme de formation de l'ozone. Transformation en CO2, contribuant à l'effet de serre | 10 mg.m-3 en moyenne sur 8 h, 30 mg.m-3 en moyenne sur 1 h |
| Composés organiques volatils (COV) | Différents effets sur la santé selon le composé spécifique | Précurseur de la formation d'ozone | Varie selon le composé |
| Ozone (O3) | Gaz irritant pour les voies respiratoires. À des concentrations excessivement élevées, il peut provoquer des problèmes respiratoires, de l'asthme, une diminution de la fonction pulmonaire et l'apparition de maladies respiratoires | Contribue à l'effet de serre. Perturbe la photosynthèse, entraînant une baisse des rendements des cultures. Oxydation des matériaux | 100 μg/m3 en moyenne sur 8 heures |

---

> Ce protocole fait partie du curriculum STEAMCITY. Ce travail est sous licence Creative Commons Attribution-ShareAlike 4.0 International License et a été réalisé avec le soutien de la Commission européenne. Son contenu n'engage que son auteur et la Commission ne peut être tenue responsable de l'usage qui pourrait être fait des informations qu'il contient.

---

*Cette fiche fait partie du projet [SteamCity](/projets/steamcity), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

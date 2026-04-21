# Pouvons-nous construire une solution pour accéder aux informations météorologiques ?

Id: PR16-TDL
Feuille de travail vierge: PR16-TDL_Feuille_Travail_Vierge_A3.pdf
Problématique abordée: Peut-on construire une station météorologique mesurant la température, l'humidité, la pression, le vent, la pluie ?
Thématiques - L'univers des sciences: Prévisions météorologiques et climat (https://www.notion.so/Pr-visions-m-t-orologiques-et-climat-4c4e7eda65ea4e4fbc68b5d490575913?pvs=21)
Fiches programmation: PROG16-TDL-1 (../Bienvenue%20dans%20le%20laboratoire%20de%20Dexter/Simuler%20vos%20exp%C3%A9riences%20TheDexterLab%20dans%20MakeCode/PROG16-TDL-1%20e8bece48622740bab0057b0851cd5106.md), PROG16-TDL-2 (../Bienvenue%20dans%20le%20laboratoire%20de%20Dexter/Simuler%20vos%20exp%C3%A9riences%20TheDexterLab%20dans%20MakeCode/PROG16-TDL-2%2001fc0dc14341496da5bfa06b8a725078.md), PROG16-TDL-3 (../Bienvenue%20dans%20le%20laboratoire%20de%20Dexter/Simuler%20vos%20exp%C3%A9riences%20TheDexterLab%20dans%20MakeCode/PROG16-TDL-3%20fad7c2c4bd7f45f2bd84c5b7f6a6c757.md), PROG16-TDL-4 (../Bienvenue%20dans%20le%20laboratoire%20de%20Dexter/Simuler%20vos%20exp%C3%A9riences%20TheDexterLab%20dans%20MakeCode/PROG16-TDL-4%20e4e4a6e38b3d49b0bcddece805e8b948.md), PROG16-TDL-5 (../Bienvenue%20dans%20le%20laboratoire%20de%20Dexter/Simuler%20vos%20exp%C3%A9riences%20TheDexterLab%20dans%20MakeCode/PROG16-TDL-5%20aef569a9d16b47c78cbfc8fe4741755e.md), PROG16-TDL-6 (../Bienvenue%20dans%20le%20laboratoire%20de%20Dexter/Simuler%20vos%20exp%C3%A9riences%20TheDexterLab%20dans%20MakeCode/PROG16-TDL-6%20c94fae72095946d8b7bd9ff400e24af4.md)
Activités low-tech & DIY: DIY-TDL-16 (https://www.notion.so/DIY-TDL-16-a63114109c1e4d21a23d8b44a7269afd?pvs=21)
Nos stations de labo: Station environnementale (https://www.notion.so/Station-environnementale-d340a9e0df6b4506bcab77693f890033?pvs=21)
Lié à Nos stations de labo (1) (Protocoles): Sans titre (https://www.notion.so/38e30ae054c24822b7ab19fa59d79e87?pvs=21)
Lié à Observer les phénomènes et développer des activités DIY (1) (Protocole lié): Sans titre (https://www.notion.so/e0a84510abc246ad845edfce28f5b55a?pvs=21)
⚒️ Nos instruments de mesure: DATA16-TDL (https://www.notion.so/DATA16-TDL-6e2673b209cc4da9ac382f7c3da81458?pvs=21)

<aside>
ℹ️ **Le temps qu’il fait ou fera suscite un vif intérêt auprès de la population et ce depuis toujours. La météo joue un rôle important sur notre humeur et parfois sur nos comportements (au niveau des choix vestimentaires par exemple). L’accès aux informations météorologiques est omniprésent dans les médias (avant ou après le JT, à la radio, etc.). Sur smartphone, il existe une multitude d’applications mobiles dédiées à la météo, dont certaines sont installées par défaut sur le système d’exploitation. L’accès aux informations météorologiques est tellement important pour certains qu’il est impensable pour eux de mettre le nez dehors sans connaître les prévisions de la journée. Martin De La Soudière (ethnologue et sociologue) cite à propos de la météo dans un de ces ouvrages : "*C'est quelque chose qui est omniprésent. Le rapport à l'extérieur passe par le rapport à l'air, au vent, à l'atmosphère. Donc c'est quelque chose de très intime.*" Cependant il y a parfois une confusion entre climat et météo, qui se différencie notamment par l’échelle de temps auxquelles elles s’appliquent. Le climat désigne l’ensemble des facteurs météorologiques comme la température, les précipitations ou le vent qui caractérisent un endroit donné, pendant une période donnée. C’est une présentation synthétique du comportement de l’atmosphère au-dessus d’une région donnée, qui s’appuie sur des statistiques à long terme (30 ans en principe, d’après la définition de l'Organisation météorologique mondiale). La météo est l’évaluation du temps qu’il fait ou qu’il va faire à très court terme. Elle se définit par des valeurs instantanées et locales de la température, des précipitations, de la pression, de la nébulosité etc. La météorologie, qui a pour objet l'étude des phénomènes atmosphériques (vent, pluie, nuages,) est une science extrêmement complexe qui nécessite la mesure de nombreux paramètres tels que la température, la pression atmosphérique, l’humidité, etc. Elle permet de réaliser des prévisions en faisant intervenir des phénomènes compliqués, gouvernés par les lois de la thermodynamique et la mécanique des fluides en faisant appel à différentes branches de la physique et la chimie. Sa compréhension passe par l’utilisation de modèles mathématiques très complexes et généralement insolubles par les méthodes traditionnelles d’analyse de données qui nécessitent le recours à des simulations informatiques. Ces simulations requièrent beaucoup de puissance de calcul, et nécessitent des machines puissantes pour s’exécuter dans de bonnes conditions. Grâce aux progrès informatiques fulgurants de ces dernières années, la météo devient de plus en plus fiable à court terme (2 ou 3 jours, voire 5), mais plus on essaie de prédire la météo loin dans le futur, plus il y a de chance que ces prévisions soient erronées. Il est très difficile, voire impossible de prévoir précisément le temps qu’il fera sur des échéances supérieures à 10 jours, au vu de la complexité des phénomènes en jeu et de leur caractère aléatoire.**

</aside>

![DATA16_TDL.jpg](Pouvons-nous%20construire%20une%20solution%20pour%20acc%C3%A9der%20/DATA16_TDL.jpg)

### Déroulé de l’activité

Dans cette activité, il ne s’agit pas de faire des prévisions météorologiques, mais plutôt de mieux comprendre les concepts sous-jacents qui permettent de faire de telles prévisions. Une manière efficace de pouvoir se les approprier est de passer par la mesure des variables influant sur la météo. Nous proposons donc dans cette activité la réalisation d’une mini-station météo basée sur un microcontrôleur.
Nous y présenterons comment effectuer la mesure de température, de pression atmosphérique et d’humidité grâce aux instruments inclus dans la carte proposée (STM32), ainsi que la vitesse du vent avec la construction d’un anémomètre rudimentaire. La STM32 a l’avantage de posséder plusieurs capteurs intégrés nous permettant de nous passer de capteurs externes et de leur câblage. Avec des mesures réparties sur plusieurs semaines (voire plusieurs mois), il est possible d’obtenir des résultats significatifs pour la compréhension des phénomènes météorologiques. Les mesures peuvent également être mises en lien avec l’observation de phénomènes naturels (par exemple le bourgeonnement, l’apparition du givre et des premières gelées, l’apparition du brouillard, la migration des oiseaux...).

Cette activité poursuit l’objectif d’identifier et de mesurer les paramètres principaux qui influencent la météo : température, pression, humidité et vitesse du vent. Les relations et influences de ces variables entre elles peuvent vite devenir compliquées (par exemple, le vent dépend des différences de pression atmosphérique, étant elles-mêmes liées à la température). Sans trop rentrer dans le détail des rapports entre tous ces phénomènes, nous proposons dans le cadre de cette activité de simplement de mesurer ces derniers.

### Compétences Mobilisées

En réalisant des mesures et de par la mise en œuvre de la station météo, les élèves mobiliseront plusieurs compétences dans les domaines suivants :

- Technologie : utiliser une carte programmable pour collecter des données numériques ;
- Mathématiques : utiliser une feuille de calcul, comprendre la notion de variable, analyser des données, réaliser un graphique et pouvoir l’interpréter, effectuer des moyennes, etc.
- Physique : appréhender des grandeurs physiques (température, humidité, pression, vitesse) et leurs mesures, et ce par l’expérimentation. Se familiariser avec le mouvement circulaire uniforme (vitesse angulaire, période, vitesse tangentielle)
- Ingénierie : conception et construction (anémomètre) avec des contraintes d’équilibre et de minimisation de frottements
- Technologique et numérique : utiliser et programmer un microcontrôleur, utiliser des logiciels de construction 3d
- Transdisciplinaire : Savoir modéliser, comprendre, formaliser, partager, investiguer, mettre en lien mesure et observation
- Biologie : établir des liens entre grandeurs mesurées (par exemple effet du gel sur certaines plantes).

Afin de réaliser la station météo finale, les élèves devront suivre les 3 phases suivantes :

- Réaliser des mesures (température, pression, humidité) ;
- Construire un anémomètre et réaliser des mesures de vitesses du vent ;
- Utiliser un afficheur LCD permettant une lecture pratique des données ;

### Matériel nécessaire

- 1 carte programmable “STM32 IoT Node Board”
- 1 breadboard
- 1 ensemble de fils de raccordement
- 3 LED
- 3 résistances
- 1 Interrupteur à lame souple (interrupteur reed)
- 1 Aimant de petite taille
- Matériel pour construire l’anémomètre : pics à brochette, paille en plastique, bouchon en liège, deux balles de Ping-Pong. Ou anémomètre (imprimable en 3d), et des pics à brochette, pastille adhésive, morceau de bois
- Un support stable pour l’axe de rotation

# LES RESSOURCES

### Expérimentation scientifique

[Protocole PR16-TDL - Étapes d'expérimentation](Pouvons-nous%20construire%20une%20solution%20pour%20acc%C3%A9der%20/Protocole%20PR16-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation%20a85c29de0287487589e2ed94470a06c0.md)

### Fiches de programmation

[Sans titre](Pouvons-nous%20construire%20une%20solution%20pour%20acc%C3%A9der%20/Sans%20titre%20b33847d0265144aa90de979d6c84ed7a.csv)
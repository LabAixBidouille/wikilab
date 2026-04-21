# Pouvons-nous construire une solution pour accéder aux informations météorologiques ?

**Problématique :** Peut-on construire une station météorologique mesurant la température, l'humidité, la pression, le vent, la pluie ?

> ℹ️ **Le temps qu’il fait ou fera suscite un vif intérêt auprès de la population et ce depuis toujours. La météo joue un rôle important sur notre humeur et parfois sur nos comportements (au niveau des choix vestimentaires par exemple). L’accès aux informations météorologiques est omniprésent dans les médias (avant ou après le JT, à la radio, etc.). Sur smartphone, il existe une multitude d’applications mobiles dédiées à la météo, dont certaines sont installées par défaut sur le système d’exploitation. L’accès aux informations météorologiques est tellement important pour certains qu’il est impensable pour eux de mettre le nez dehors sans connaître les prévisions de la journée. Martin De La Soudière (ethnologue et sociologue) cite à propos de la météo dans un de ces ouvrages : "*C'est quelque chose qui est omniprésent. Le rapport à l'extérieur passe par le rapport à l'air, au vent, à l'atmosphère. Donc c'est quelque chose de très intime.*" Cependant il y a parfois une confusion entre climat et météo, qui se différencie notamment par l’échelle de temps auxquelles elles s’appliquent. Le climat désigne l’ensemble des facteurs météorologiques comme la température, les précipitations ou le vent qui caractérisent un endroit donné, pendant une période donnée. C’est une présentation synthétique du comportement de l’atmosphère au-dessus d’une région donnée, qui s’appuie sur des statistiques à long terme (30 ans en principe, d’après la définition de l'Organisation météorologique mondiale). La météo est l’évaluation du temps qu’il fait ou qu’il va faire à très court terme. Elle se définit par des valeurs instantanées et locales de la température, des précipitations, de la pression, de la nébulosité etc. La météorologie, qui a pour objet l'étude des phénomènes atmosphériques (vent, pluie, nuages,) est une science extrêmement complexe qui nécessite la mesure de nombreux paramètres tels que la température, la pression atmosphérique, l’humidité, etc. Elle permet de réaliser des prévisions en faisant intervenir des phénomènes compliqués, gouvernés par les lois de la thermodynamique et la mécanique des fluides en faisant appel à différentes branches de la physique et la chimie. Sa compréhension passe par l’utilisation de modèles mathématiques très complexes et généralement insolubles par les méthodes traditionnelles d’analyse de données qui nécessitent le recours à des simulations informatiques. Ces simulations requièrent beaucoup de puissance de calcul, et nécessitent des machines puissantes pour s’exécuter dans de bonnes conditions. Grâce aux progrès informatiques fulgurants de ces dernières années, la météo devient de plus en plus fiable à court terme (2 ou 3 jours, voire 5), mais plus on essaie de prédire la météo loin dans le futur, plus il y a de chance que ces prévisions soient erronées. Il est très difficile, voire impossible de prévoir précisément le temps qu’il fera sur des échéances supérieures à 10 jours, au vu de la complexité des phénomènes en jeu et de leur caractère aléatoire.**

![DATA16_TDL.jpg](images/DATA16_TDL.jpg)

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


---

# Protocole PR16-TDL - Étapes d'expérimentation

## Étape 1 - Collecter des données

> ℹ️ La première étape de l’expérimentation est sous-divisée en 4 phases permettant de collecter les données relatives aux diverses variables nécessaires à la complétion de ce protocole : température, pression atmosphérique, humidité et vitesse de vent.

### Étape 1.1 - Collecter des données - Température

🧭**Orientation**

La notion de température est accessible et palpable dès le plus jeune âge. Cependant la définition physique est moins accessible. En effet la température est une manifestation macroscopique d’une grandeur physique microscopique : l’agitation thermique de chaque molécule.

La perception humaine qu’on a de la température n’est pas toujours le bon reflet de la température réelle telle qu’on pourrait la mesurer avec un thermomètre. En réalité, le corps humain est **sensible aux transferts de chaleur** avec son environnement et non directement à la température. Quoi qu’il en soit elle joue un rôle crucial sur la météo et sur l’environnement des êtres vivants de manière générale et conditionnera leur(s) comportement(s), leur(s) habitat(s) ...

💡 **Conceptualisation**

Pour mesurer la température, il nous faut un thermomètre, qui généralement se base sur le phénomène de dilatation des corps. Lorsqu’on chauffe un corps, l’agitation thermique augmente causant (pour les liquides et les solides) une augmentation de volume. La dilatation est directement proportionnelle à l’augmentation de température. Celle-ci est généralement quasi imperceptible à l’œil nu, c’est pourquoi le traditionnel thermomètre à liquide (généralement alcool ou mercure) se fait à l’aide d’un capillaire (tube très fin) pour augmenter la visibilité et la précision. Pour une même élévation de température, diminuer la section du tube augmentera l’élévation du liquide dans celui-ci (la dilatation étant volumique). Notons qu’il existe d’autres thermomètres comme le thermomètre à ressort (bilame), à gaz (plus complexe dans leur fonctionnement), à cristaux liquides, à semi-conducteur…

> 🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 2 - Mesurer la température ambiante.**
>
> [PROG16-TDL-2](https://www.notion.so/PROG16-TDL-2-01fc0dc14341496da5bfa06b8a725078?pvs=21)

💬 **Débriefing**

Après avoir abordé le concept de température et les différents moyens de la mesurer, nous pouvons afficher dans la console, la valeur de la température lue par le microcontrôleur.

### Étape 1.2 - Collecter des données - Pression atmosphérique

🧭**Orientation**

Le concept de pression atmosphérique est moins abordable que celui de la température pour le grand public. Directement liée à la gravité et au poids du fluide à une certaine profondeur, la pression est d’autant plus grande que la profondeur est grande mais ne dépend en aucun cas de l’étendue du fluide. Elle dépend de la nature du fluide (par le biais de la masse volumique).

Nous pouvons sentir les effets de la pression dans un liquide quand nous allons dans la grande profondeur à la piscine, en particulier au niveau de l’oreille car le tympan est une membrane sensible à la pression (le son finalement, n’est jamais qu’une onde de pression variable !). La pression s‘exerce aussi avec les gaz et en particulier avec l’air atmosphérique. Torricelli, au milieu du XVIIe siècle, disait déjà que nous vivions submergés au fond d’un océan d’air. Aujourd’hui Nous savons par des expériences indubitables que l’air est bien pesant et donc exerce une pression exactement comme au fond d’une piscine.

Cette pression atmosphérique est énorme (1 kg par cm2, soit 10tonnes par m2 !), mais nous ne la ressentons pas car nous sommes toujours « baignés » dans cet océan à la même « profondeur », nous y sommes tout simplement habitués.

Plusieurs unités peuvent être utilisées pour la pression (le bar, l’atmosphère, le psi, …). Nous utiliserons ici l’unité internationale : le Pascal (symbole Pa). Une pression normale (pression de référence) est de 101 325 Pa.

À l’instar de la piscine, si nous montons en altitude, la pression diminue (c’est pourquoi l’opercule des pots de yaourt ou les paquets de chips sont gonflés à la montagne). Attention cependant il y a une différence fondamentale entre les gaz et les liquides : le gaz est compressible alors que les liquides ne le sont pas. Par cette (in) compressibilité, la variation de la pression avec l’altitude est linéaire pour les liquides et exponentielle négative pour l’atmosphère.

Les masses d'air s'écoulent toujours des zones de haute pression atmosphérique, appelées anticyclones, vers les zones de basse pression atmosphérique, appelées cyclone ou dépression.

Les anticyclones sont principalement caractérisés par un mouvement descendant de l’air, qui augmente la pression de l'air sur le sol et qui a un effet dissipatif de la couverture nuageuse et des précipitations associées, garantissant ainsi du temps sec et ensoleillé. En effet, la haute pression comprime l’air, augmentant ainsi sa température et favorisant l’évaporation et donc la dissipation des nuages ainsi que la limitation des précipitations. Les anticyclones se déplacent souvent lentement, ainsi le beau temps peut perdurer plusieurs jours.

Les dépressions quant à elles, sont caractérisées par une pression en dessous de la normale et sont associées à une ascension de l’air. Du fait de cette pression plus basse, l’air se détend et donc refroidit. Si l’air est chargé d’humidité, il sera le siège de [condensation](https://fr.wikipedia.org/wiki/Condensation) d'une partie de plus en plus grande de la [vapeur d'eau](https://fr.wikipedia.org/wiki/Vapeur_d%27eau) présente dans la zone ce qui forme un nuage. Si le mouvement vertical se poursuit, les gouttelettes de nuages formeront des gouttes de pluie ou des flocons, selon la température ambiante.

💡**Conceptualisation**

Pour mesurer la pression atmosphérique nous utilisons un baromètre (pour rappel 1 bar = 105 Pa 1atm). Torricelli utilisait des baromètres à mercure qui consistaient en de longs tubes de verre remplis de mercure, retournés dans un bain de mercure. Le niveau de mercure dans le tube permet de mesurer la pression. Le mercure était choisi car c’est le liquide le plus dense (environ 14 fois plus dense que l’eau), ce qui permet d’utiliser un tube plus court pour observer les variations. C’est avec ce matériel que Blaise Pascal réalisa sa célèbre expérience au Puy-de-Dôme pour montrer que la pression atmosphérique diminue avec l’altitude. D’autres systèmes plus ou moins sophistiqués ont été inventés par la suite. Le baromètre est très vite devenu un objet de mesure pour la météo (et probablement le premier à prévoir le temps), mais également un objet esthétique qui ornait un grand nombre de foyers. Aujourd’hui les baromètres n’utilisent pas de mercure mais sont basés sur la comparaison entre la pression de l’air dans une capsule (vide partiel) et la pression atmosphérique. Il existe également des modules électroniques basés sur la piezzoresisitivité (résistance variant à une contrainte mécanique).

> 🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 3 - Mesurer la pression atmosphérique.**
>
> [PROG16-TDL-3](https://www.notion.so/PROG16-TDL-3-fad7c2c4bd7f45f2bd84c5b7f6a6c757?pvs=21)

💬 **Débriefing**

Après avoir abordé le concept de pression atmosphérique et les différents moyens de la mesurer, nous pouvons afficher dans la console la valeur de la pression lue par le microcontrôleur. Vous pouvez imaginer d’utiliser ce capteur à d’autre fin, par exemple monter dans un bâtiment (idéalement une dizaine d’étages) et voir la différence de pression, ou encore si vos dispose d’une cloche à vide met le microcontrôleur à l’intérieur…

### Étape 1.3 - Collecter des données - Humidité

🧭**Orientation**

L’humidité désigne la quantité de vapeur d'eau contenue dans l'air. Cette dernière est l’une des 3 formes que peut prendre l’eau, les 2 autres étant la forme solide (glace, neige, etc.) et la plus évidente, la forme liquide (pluie, lac, etc.).

La vapeur d'eau est absolument transparente et invisible, et sa proportion dans l’air varie de 0,1 % à tout au plus 5 % ! Pourtant c'est sa présence dans l'atmosphère qui conditionne la présence ou non de nuages, de précipitations, de brouillard.

L'air contient, selon sa température, une quantité maximale variable de vapeur d'eau. Plus la température descend, plus la quantité possible de vapeur d’eau dans l’air, aussi appelé taux de saturation, diminue. Lorsque la quantité de vapeur d’eau dépasse le taux de saturation, la vapeur se condense : elle passe de l’état gazeux à liquide, en se regroupant sous forme de gouttelettes sur les supports environnants, c’est la saturation ! Au-delà de la saturation, les molécules d'eau, jusque-là indépendantes, se déposent sur tout support (la vitre, la végétation, ou des poussières en altitude) et forment des gouttelettes visibles à l'œil nu. C'est la condensation. En altitude, ces gouttelettes formeront les nuages. Au sol, on observera de la rosée (ou de la gelée blanche en cas de température négative) ou s'il y a un peu de vent de la brume voire du brouillard.

On quantifie l'humidité de l'air de deux manières : l'humidité absolue et l'humidité relative.

L’humidité absolue désigne la quantité de vapeur d'eau contenue dans l’air. Elle n’est pas sensible à la température et n’est généralement pas ou peu utilisée dans le cadre de la météorologie.

L'humidité relative est le rapport de la quantité de vapeur d'eau contenue dans l'air sur la quantité de vapeur d'eau maximale possible. C'est cette donnée que mesurent les météorologues. L'humidité relative s'exprime en pourcentage. 100 % correspondent à un air saturé en vapeur d'eau (risque de nuage, pluie, brouillard, rosée ou givre), 0 % à un air parfaitement sec (cette valeur d'humidité relative n'est jamais atteinte dans la nature, pas même dans les déserts !). Plus l'air est chaud, plus il peut contenir d'eau sous forme de vapeur. Inversement, quand l'air se refroidit la vapeur se condense et forme des gouttelettes d'eau liquide : on dit que le seuil de la saturation augmente avec la température.

L'humidité relative d'une masse d'air varie donc avec la température de l'air. Lorsque la température augmente, en journée, l'humidité relative diminue, alors que le contenu en eau de la masse d'air – l'humidité absolue – reste inchangé.

Un taux d'humidité de 10 à 20 % correspond à un air très sec, trop sec pour le confort de l'organisme. Inversement, lorsque les températures chutent, en cours de nuit, l'humidité relative augmente et peut atteindre la saturation soit une humidité relative de 100 %.

À 30 °C, l'air peut contenir jusqu'à 30 g d'eau par m3 d’air sous forme de vapeur, soit 10 fois plus qu'à -5 °C. Voilà qui explique en partie pourquoi les pluies sont bien plus abondantes dans les régions tropicales que dans les régions tempérées et qu'au cœur de l'Antarctique, les chutes de neige sont rares et peu intenses.

Les régions côtières, surtout si la mer est froide et que les vents du large dominent, sont plus humides que les régions continentales.

À l'intérieur des terres, il est plus difficile de définir des zones sèches et humides. La nature du sol et donc sa capacité à retenir les eaux de pluie, l'exposition au vent et au soleil pour les régions montagneuses, vont beaucoup influencer l'humidité de l'air.

En décembre, l'humidité est en moyenne plus élevée, et en juillet août plus faible.

Plus il fait humide, moins l'air peut recevoir de vapeur d'eau supplémentaire. Ainsi par forte chaleur et forte humidité, le corps humain se refroidit avec difficulté : la transpiration ne peut pas s'évaporer, on dit alors qu’il fait « lourd ».

*Source : [https://meteofrance.com/actualites-et-dossiers-0/comprendre-la-meteo/quest-ce-que-lhumidite](https://meteofrance.com/actualites-et-dossiers-0/comprendre-la-meteo/quest-ce-que-lhumidite)*

💡**Conceptualisation**

Apparus au milieu du XVe siècle, les premiers hygromètres utilisaient les propriétés de certaines substances organiques (laine, corde, éponge, barbe d'avoine, cheveu, cuir…) qui en absorbant de la vapeur d'eau, changent de masse, de forme, de longueur ou de couleur. En 1781, Horace Bénédict de Saussure met au point le premier hygromètre à cheveu de l'histoire. Simple, peu coûteux et relativement précis, il restera très utilisé jusqu'au XXe siècle. La longueur des cheveux varie en fonction de l'humidité relative de l'air et fait bouger la plume qui inscrit l'humidité sur le papier millimétré autour d’un cylindre. Cet instrument a été utilisé dans les stations météorologiques de la fin du XIXe siècle jusque dans les années 1970. Il a ensuite été conservé en secours dans les stations de mesure jusque dans les années 1980-1990. Aujourd’hui, pour mesurer l'humidité de l'air, ou l’hygrométrie, on utilise des sondes électroniques dotées d'un condensateur dont la capacité varie en fonction de l'humidité relative de l'air ambiant.

> 🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 4 - Mesurer l’humidité relative de l’air.**
>
> [PROG16-TDL-4](https://www.notion.so/PROG16-TDL-4-e4e4a6e38b3d49b0bcddece805e8b948?pvs=21)

💬 **Débriefing**

Après avoir abordé le concept d’humidité, nous pouvons afficher dans la console, la valeur de la température lue par le microcontrôleur.

### Étape 1.4 - Collecter des données - Vitesse du vent - Anémomètre

🧭**Orientation**

Le vent est un phénomène météorologique produit par des mouvements de masses d’air. Ce phénomène météorologique a des rôles essentiels dans la nature. Il agit sur la température, le cycle de l’eau, l’oxygénation des océans, l’érosion, ainsi que la faune et la flore.

Le vent se caractérise par une direction et une vitesse. La vitesse est modifiée par les reliefs comme les montagnes, les vallées ou les forêts. On utilise une girouette pour connaître la direction du vent et un anémomètre pour en mesurer la vitesse.

💡**Conceptualisation**

Le projet consiste à construire un anémomètre pour mesurer la vitesse du vent. Cette donnée étant difficile à acquérir de façon précise avec du matériel non professionnel, nous allons d’abord calculer la vitesse tangentielle des coupelles. Ensuite, nous utiliserons la mesure de la station météo avoisinante ou d’un anémomètre professionnel pour faire l’étalonnage de notre appareil.

Pour réaliser cette activité et mesurer la vitesse du vent à l’aide d’un anémomètre nous aurons besoin de comprendre le **mouvement circulaire uniforme**.

> 🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 1 - Fabriquer un anémomètre.**
>
> [PROG16-TDL-1](https://www.notion.so/PROG16-TDL-1-e8bece48622740bab0057b0851cd5106?pvs=21)

> 🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 5 - Mesurer la vitesse du vent.**
>
> [PROG16-TDL-5](https://www.notion.so/PROG16-TDL-5-aef569a9d16b47c78cbfc8fe4741755e?pvs=21)

💬 **Débriefing**

Nous pouvons maintenant nous installer à l’extérieur avec notre montage (anémomètre, carte programmable et un ordinateur), dans un endroit dégagé (loin de bâtiments, arbres ou autres obstacles) et lancer notre programme.
Nous obtenons enfin la vitesse de rotation de l’anémomètre. Mais s’agit-il vraiment de la vitesse du vent ? Malheureusement ce n’est pas le cas comme nous l’avons précisé au début de l’activité. Le résultat affiché par le programme nous permet néanmoins de déduire que le vent va au moins aussi vite que les coupelles de notre anémomètre bricolé.

Pour améliorer la précision de cette mesure, nous devons l’étalonner grâce à un anémomètre de référence en mettant devant une soufflerie à différentes distances ou à différentes intensités et établir le lien entre la vitesse donnée par notre anémomètre et celui de référence considérée comme « juste ». Si la relation n’est pas simplement proportionnelle ou décalée, nous pouvons envisager de faire un abaque (tableau de conversion pour plusieurs valeurs). Une autre solution consiste à se baser sur les données de la station météo la plus proche de notre localisation.

## Étape 2 - Afficher les données collectées

🧭**Orientation**

Les données ont été à présent affichées sur la console de l’ordinateur, afin d’avoir une station météo plus autonome dans l’ordinateur, nous proposons de l’afficher sur un écran qui sera relié directement au microcontrôleur.

💡**Conceptualisation**

> 🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 6 - Afficher les données collectées sur un écran.**
>
> [PROG16-TDL-6](https://www.notion.so/PROG16-TDL-6-c94fae72095946d8b7bd9ff400e24af4?pvs=21)

🔎**Investigation**

Au vu des activités précédentes nous pouvons d’une part effectuer plusieurs mesures directement liées à la météo et d’autre part, afficher un texte sur un écran LCD.

Dès lors nous sommes en mesure maintenant de pouvoir afficher nos mesures sur l’écran LCD (température, pression, vitesse du vent, humidité).

💬 **Débriefing**

Nous avons à présent un outil permettant d’avoir des données météo (journalière ou hebdomadaire). Il nous suffit de brancher le microcontrôleur. Le programme se lance automatiquement et il ne nous reste plus qu’à lire les mesures.

## Étape 3 - Analyser les données

🧭**Orientation**

Les mesures réalisées par notre mini-station météo peuvent nous donner une information ponctuelle « du temps qu’il fait », et c’est cet aspect qui intéresse généralement le grand public. Une autre approche (plus scientifique) consiste à analyser et comparer les données. Par cette démarche nous pouvons corréler des grandeurs mesurables à des observations et faire des liens entre grandeurs. Par exemple, nous pouvons nous poser des questions telles que :

- Y a-t-il une dépendance entre vitesse du vent et une zone de haute ou de basse pression ?
- Que signifie le concept de température ressentie ?
- Dans quelles conditions observe-t-on du brouillard ou un pic d’ozone ?
- 

💡 **Conceptualisation**

Pour pouvoir déterminer les paramètres influant le temps ou la météo, il est nécessaire de collecter plusieurs mesures, de regarder leur évolution au fil du temps pour éventuellement montrer leur influence sur les observations extérieures.

Afin de comparer et analyser les données, nous proposons de réaliser une collecte de données sous forme d’un tableau.

*Remarque : Nous avons décidé de faire des mesures journalières, il s’agit d’un choix de notre part*

🔎**Investigation**

Nous avons vu dans les points précédents, comment mesurer la température, la pression, l’humidité et la vitesse du vent. Nous avons également développé la façon d’afficher des données sur un écran LCD.

Pour des raisons de lisibilité et de facilité, nous réalisons un programme pour l’affichage de la température, la pression et l’humidité et un autre pour la vitesse du vent.

- ***Température humidité et pression***

*Le programme en bloc :*

![Untitled](images/Untitled.png)

En *javascript :*

```jsx
lcd_i2c. initScreen()
lcd_i2c. clear()
forever(function () {
    lcd_i2c. ShowValue("temperature", input. temperature(TemperatureUnit. Celsius))
    pause(1000)
    lcd_i2c. clear()
    lcd_i2c. ShowValue("humidity", input. humidity())
    pause(1000)
    lcd_i2c. clear()
    lcd_i2c. ShowValue("pressure", input. pressure(PressureUnit. HectoPascal))
    pause(1000)
    lcd_i2c. clear()
})
```

*Le résultat :*

![Untitled](images/Untitled 1.png)

- ***Anémomètre***

*Le programme en bloc :*

![Untitled](images/Untitled 2.png)

*Le câblage :*

![Untitled](images/Untitled 3.png)

*Le résultat :*

![Untitled](images/Untitled 4.png)

Notons que notre anémomètre mesure la vitesse des coupelles qui n’est pas la vitesse du vent (suite aux frottements, et la partie arrondie est à l’encontre du mouvement). Afin de calibrer notre anémomètre nous avons utilisé un ventilateur (pas trop près pour éviter les fortes fluctuations) :

| Speed anomemeter cm/s | speed référence cm/s |
| --- | --- |
| 0 | 0 |
| 106 | 352,7777778 |
| 112 | 383,3333333 |
| 119 | 413,8888889 |
| 126 | 422,2222222 |
| 134 | 466,6666667 |
| 144 | 491,6666667 |
| 155 | 511,1111111 |
| 167 | 561,1111111 |
| 183 | 588,8888889 |
| 201 | 627,7777778 |
| 223 | 716,6666667 |
| 250 | 730,5555556 |

Le graphique de la vitesse mesurée par notre anémomètre en fonction de celle de référence (supposée « exacte ») est le suivant :

![Untitled](images/Untitled 5.png)

Nous constatons que le rapport est en très bonne approximation constant et vaut dans notre cas 3. Cela signifie que lorsque nous mesurons la vitesse avec notre anémomètre nous devons la multiplier par 3 pour avoir la vitesse du vent.

![Untitled](images/Untitled 6.png)

Les autres mesures (pression, température et humidité) peuvent être représentées sous forme de données ou de graphiques.

Il est intéressant de pouvoir identifier certaines valeurs particulières comme les valeurs extrêmes, calculer la moyenne ou encore l’écart à la moyenne.

Ces données peuvent également être comparées à des mesures prises par les instituts météorologiques comme la température journalière par exemple :

*Exemple de relevé de températures du 12 novembre au 12 décembre 2022 ([https://www.meteo.be/resources/climatology/uccle_month/Uccle_observations.txt](https://eur01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.meteo.be%2Fresources%2Fclimatology%2Fuccle_month%2FUccle_observations.txt&data=05%7C01%7Cemmanuel.beeckmans%40ulb.be%7Ce3a200f2a495446d05cd08dadd11034d%7C30a5145e75bd4212bb028ff9c0ea4ae9%7C0%7C0%7C638065362707496120%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=84%2BcOTt%2FQQBS8uuBZIrSfptVykhW5jxaEcC2Qgs%2F6xA%3D&reserved=0), https://www.meteo.be/fr/climat/climat-de-la-belgique/observations-uccle)*

Certaines observations extérieures peuvent être directement reliées aux mesures (comme la disparition des certaines plantes dès les premières gelées ou la corrélation entre la nébulosité et la pression atmosphérique, différence entre température « réelle » et ressentie…).

💬 **Débriefing**

Dans cette activité, nous proposons l’élaboration d’une mini-station météo avec un microcontrôleur et la construction d’un anémomètre, permettant de faire des mesures météorologiques de bases avec l’objectif de se familiariser avec celles-ci. Ces instruments peuvent être utilisés dans d’autres cadres :

- Par exemple une démarche purement expérimentale et observationnelle. Cela consiste à mesurer la température toutes les heures et déterminer l’heure la plus chaude.
- Nous pourrions également mesurer la température et l’humidité à l’extérieur ou dans une serre et les comparer à différents moments de la journée.
- Comparer la vitesse du vent à différents endroits (dégagés ou entourés de bâtiments ou à différentes hauteurs).
- Tester l’efficacité de l’isolation d’un bâtiment.

La liste des possibilités est non exhaustive, à vous d’imaginer des expériences mettant en œuvre ces différents capteurs.


---

## Fiches programmation

### PROG16-TDL-1 — Fabriquer un anémomètre



🛠️ **Construire**

**Construire l’anémomètre** 

Pour réaliser cette activité et mesurer la vitesse du vent à l’aide d’un anémomètre nous aurons besoin de comprendre le mouvement circulaire uniforme.

La première chose à faire est de construire un anémomètre. Nous avons choisi un anémomètre à 3 coupelles dont le principe est assez simple :

Pour optimiser l’efficacité de l’anémomètre il est important que celui-ci soit bien équilibré (pas de coupelle plus lourde que les autres et frottements les plus faibles possibles).

Pour obtenir un fichier 3D permettant d’imprimer les coupelles, il suffit de suivre ce lien : [https://www.tinkercad.com/things/2CLLBRxu49Z](https://www.tinkercad.com/things/2CLLBRxu49Z)

![anenometre.png](images/anenometre.png)

Nous utilisons également une tige métallique de 2 mm de diamètre pour l’axe que nous avons limée en pointe pour minimiser le contact avec la table sur laquelle elle est posée. Nous avons soudé le contact reed (qui est fragile) avec des fils d’une longueur de 30 cm environ pour avoir de la manœuvre et pris un aimant néodyme plat (10 mm de diamètre) :

![Untitled](images/Untitled.png)

![Untitled](images/Untitled 1.png)

Nous assemblons les coupelles avec l’articulation centrale :

En prenant 3 pics à brochettes coupés à bonne dimension (environs 10 cm), nous assemblons l’anémomètre en trépied. Nous avons également fixé l’aimant sur un des bras de l’anémomètre (à 3,5 cm du centre). Le contact reed est fixé sur un cube en bois avec du papier collant et ajusté à la bonne hauteur (maximum 5 mm de l’aimant). Une fois le montage terminé, nous fixons l’anémomètre et le cube de bois pour que le tout soit bien fixe.

Le contact reed en gros plan :

![Untitled](images/Untitled 2.png)

![Untitled](images/Untitled 3.png)

![Untitled](images/Untitled 4.png)

*Remarque : Ne négligez pas l’étape de montage qui est délicate mais essentielle au bon fonctionnement de l’anémomètre !!!*

Il existe plusieurs types d’anémomètres et de systèmes pour calculer la vitesse du vent. Nous avons pris le parti d’un anémomètre à coupelle que nous avons imprimé en 3d. Il est également possible de construire un anémomètre à coupelle avec des balles de Ping-Pong coupées en deux, des pics à brochette et un gobelet. Vous pouvez améliorer le système en mettant un roulement à billes (au niveau de l’articulation) pour diminuer les frottements.

- *Tutoriel anémomètre BEE-A-MAKER sur YouTube : [https://www.youtube.com/watch?v=LRwWcOVqflc](https://www.youtube.com/watch?v=LRwWcOVqflc)*
- *Autre anémomètre à imprimer en 3d : [https://www.thingiverse.com/thing:2771387/files](https://www.thingiverse.com/thing:4061735/files)*

Pour commencer, nous allons faire tourner l’anémomètre grâce au vent ou de façon manuelle et observer son comportement. Tourne-t-il à la même vitesse à l’intérieur ? A l’extérieur ? Vous pouvez souffler, pousser l’une des coupelles, ou encore courir avec l’anémomètre.

> ℹ️ Pour mesurer la période il nous faut un détecteur de passage. Nous avons choisi d’utiliser un détecteur à contact reed. Nous aurions pu également utiliser une barrière lumineuse ou autre. Un **interrupteur Reed** est un petit capteur constitué de deux lames conductrices sensibles à la présence d’un champ magnétique. À proximité d’un aimant, l’interrupteur se ferme et permet au courant électrique de passer.
>
> En pratique, l’interrupteur est attaché à la partie fixe de l’anémomètre et reste donc immobile, alors que l’aimant est fixé sur l’une des tiges de l’anémomètre.
>
> Pour assembler tous les éléments, nous commençons par mettre la partie mobile de l’anémomètre (rotor) sur un support stable (stator). Nous pouvons ensuite choisir une tige et y fixer un petit aimant grâce à une pastille adhésive. Enfin, pour connecter l’anémomètre, il nous faut installer le système Interrupteur Reed/Breadbord/carte programmable à proximité de l’aimant.

![Untitled](images/Untitled 5.png)

**Câbler l’anémomètre**

Lorsque l’anémomètre effectue un tour, la tige portant l’aimant passe par-dessus l’interrupteur Reed alimenté par deux fils : le fil rouge (pôle positif) et le fil noir (pôle négatif ou GND). Le signal perçu alors par le microcontrôleur est un **niveau logique** prenant la valeur de **HAUT** ou **1** (5 Volt) lorsque l’interrupteur est fermé et de **BAS** ou **0** (0 Volt) lorsque l’interrupteur est ouvert. Ce dispositif nous permettra de définir le début et la fin d’un tour d’anémomètre.

Maintenant que nous connaissons le fonctionnement de **l’interrupteur** **Reed** et comment connaître son **état (Fermé/Ouvert)**, nous utiliserons tout d’abord cette information pour vérifier le bon fonctionnement de notre circuit. Ensuite, nous pourrons l’exploiter afin de programmer un **chronomètre virtuel**.

La mise en place de la **condition SI / SINON** est indispensable pour pouvoir exploiter l’état de l’interrupteur Reed. L’instruction fonctionne de façon logique et peut prendre deux valeurs :

- **Si** l’interrupteur est **fermé**, la valeur renvoyée par l’entrée digitale est : **1** ou **Vrai**
- **Si l’interrupteur est** **ouvert**, la valeur renvoyée est de **0** ou **Faux**.

Le câblage est le suivant :

Le contact reed est représenté ici par le bouton-poussoir.

![Untitled](images/Untitled 6.png)

![Untitled](images/Untitled 7.png)

Le résultat dans la console donne par exemple :

![Untitled](images/Untitled 8.png)

*Remarque : la fonction « millis » donne le temps écoulé depuis le lancement du programme, il nous sert ici d’horloge.*

- *La fonction* pauseUntil(() => !(input.buttonD0.isPressed())) *permet de s’assurer que le contact n’est plus établi dans le contact reed. Sans cette fonction, nous pouvons avoir des temps parasites qui sont liés au fait que sur le temps d’une boucle (quelques dizaines de ms) le contact est toujours établi.*

Pour connaître la vitesse, il suffit d’ajouter au programme, l’équation du mouvement circulaire uniforme expliquée au début de l’activité :

$$
v= (2.π.R)/T
$$

Le programme devient :

![Untitled](images/Untitled 9.png)

**🧑‍💻 Programmer**

***Version simple***

```jsx
let delay = 0
let time_2 = 0
let Time_1 = 0
Serial.attachToConsole()
forever(function () {
    if (input.buttonD0.isPressed()) {
        Time_1 = time_2
        time_2 = control.millis()
        delay = time_2 - time_1
        Serial. writeValue("delay", delay)
        pauseUntil(() => !(input.buttonD0.isPressed()))
    }
})
```

***Version avec calcul de la vitesse***

```jsx
let delay = 0
let time_2 = 0
let time_1 = 0
let period = 0
Serial. attachToConsole()
forever(function () {
    if (input.buttonD0.isPressed()) {
        time_1 = time_2
        time_2 = control.millis()
        delay = time_2 - time_1
        Serial.writeValue("delay", delay)
        Serial.writeValue("speed", 6.28 * 6500 / delay)
        pauseUntil(() => !(input.buttonD0.isPressed()))
    }
})
```

### PROG16-TDL-2 — Mesurer la température ambiante



🛠️**Construire**

**Câbler / Utiliser le capteur de température**

Nous allons utiliser le capteur de température, déjà présent sur la STM32 IoT Node Discovery. Il n’y a donc pas de branchement à faire.

**Connecter la carte à l'ordinateur**

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur micro-USB ST-LINK (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé DIS_L4IOT. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

**Ouvrir MakeCode**

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur. *Ressource : [makecode.lets-steam.eu](http://makecode.lets-steam.eu/)*

**Installer l’extension serial**

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut "prêt à l'emploi" et vous devrez installer une extension.

> ℹ️ **Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de la robotique et bien plus encore.**

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. Si vous cliquez sur **AVANCÉ**, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton.

Dans la liste des extensions disponibles, vous pouvez facilement trouver l’extension **serial** qui sera utilisée pour cette activité. Cette extension vous permettra d’afficher les données relevées par le capteur de température dans la console. Si elle n’est pas directement disponible sur votre écran, vous pouvez la rechercher à l'aide de l'outil de recherche. Cliquez sur l’extension que vous souhaitez utiliser et un nouveau groupe de blocs apparaîtra sur l'écran principal.

**Programmer la carte**

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur DIS_L4IOT et attendez que la carte finisse de clignoter.

**Exécuter, modifier, jouer**

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET). Lorsque le programme est lancé, la température relevée par le capteur de température s’affichera sur la console.

![Untitled](images/Untitled.png)

**🧑‍💻Programmer**

```jsx
Serial.attachToConsole()
forever(function () {
    Serial.writeValue("temperature", input.temperature(TemperatureUnit.Celsius))
    pause(500)
})
```

### PROG16-TDL-3 — Mesurer la pression atmosphérique



🛠️**Construire**

**Câbler / Utiliser le capteur de pression atmosphérique**

Nous allons utiliser le capteur de pression atmosphérique déjà présent sur la STM32 IoT Node Discovery, il n’y a donc pas de branchement à faire.

**Connecter la carte à l'ordinateur**

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur micro-USB ST-LINK (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé DIS_L4IOT. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

**Ouvrir MakeCode**

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur. *Ressource : [makecode.lets-steam.eu](http://makecode.lets-steam.eu/)*

**Installer l’extension serial**

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut "prêt à l'emploi" et vous devrez installer une extension.

> ℹ️ **Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de la robotique et bien plus encore.**

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. Si vous cliquez sur **AVANCÉ**, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton.

Dans la liste des extensions disponibles, vous pouvez facilement trouver l’extension **serial** qui sera utilisée pour cette activité. Cette extension vous permettra d’afficher les données relevées par le capteur de température dans la console. Si elle n’est pas directement disponible sur votre écran, vous pouvez la rechercher à l'aide de l'outil de recherche. Cliquez sur l’extension que vous souhaitez utiliser et un nouveau groupe de blocs apparaîtra sur l'écran principal.

**Programmer la carte**

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur DIS_L4IOT et attendez que la carte finisse de clignoter.

**Exécuter, modifier, jouer**

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET). Lorsque le programme est lancé, la pression relevée par le capteur de pression s’affichera sur la console.

![Untitled](images/Untitled.png)

**🧑‍💻Programmer**

```jsx
Serial.attachToConsole()
forever(function () {
    Serial.writeValue("pression", input.pressure(PressureUnit.HectoPascal))
    pause(500)
})
```

### PROG16-TDL-4 — Mesurer l’humidité relative de l’air



🛠️**Construire**

**Câbler / Utiliser le capteur d’humidité**

Nous allons utiliser le capteur d’humidité déjà présent sur la STM32 IoT Node Discovery, il n’y a donc pas de branchement à faire.

**Connecter la carte à l'ordinateur**

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur micro-USB ST-LINK (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé DIS_L4IOT. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

**Ouvrir MakeCode**

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur. *Ressource : [makecode.lets-steam.eu](http://makecode.lets-steam.eu/)*

**Installer l’extension serial**

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut "prêt à l'emploi" et vous devrez installer une extension.

> ℹ️ **Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de la robotique et bien plus encore.**

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. Si vous cliquez sur **AVANCÉ**, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton.

Dans la liste des extensions disponibles, vous pouvez facilement trouver l’extension **serial** qui sera utilisée pour cette activité. Cette extension vous permettra d’afficher les données relevées par le capteur de température dans la console. Si elle n’est pas directement disponible sur votre écran, vous pouvez la rechercher à l'aide de l'outil de recherche. Cliquez sur l’extension que vous souhaitez utiliser et un nouveau groupe de blocs apparaîtra sur l'écran principal.

**Programmer la carte**

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur DIS_L4IOT et attendez que la carte finisse de clignoter.

**Exécuter, modifier, jouer**

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET). Lorsque le programme est lancé, l’humidité relative relevée par le capteur d’humidité s’affichera sur la console.

![Untitled](images/Untitled.png)

**🧑‍💻Programmer**

```jsx
Serial.attachToConsole()
forever(function () {
    Serial.writeValue("humidity", input.humidity())
    pause(500)
})
```

### PROG16-TDL-5 — Mesurer la vitesse du vent



🛠️**Construire**

**Câbler / Utiliser l’anémomètre**

Nous allons utiliser le capteur d’humidité déjà présent sur la STM32 IoT Node Discovery, il n’y a donc pas de branchement à faire.

**Connecter la carte à l'ordinateur**

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur micro-USB ST-LINK (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé DIS_L4IOT. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

**Ouvrir MakeCode**

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur. *Ressource : [makecode.lets-steam.eu](http://makecode.lets-steam.eu/)*

**Installer les extensions anemometer et serial**

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut "prêt à l'emploi" et vous devrez installer deux extensions.

> ℹ️ **Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de la robotique et bien plus encore.**

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. Si vous cliquez sur **AVANCÉ**, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton.

Dans la liste des extensions disponibles, vous pouvez facilement trouver les extensions **anemometer** et **serial** qui seront utilisées pour cette activité. L’extension anemometer vous permettra d’interagir avec l’anémomètre tandis que l’extension serial vous permettra d’afficher la vitesse du vent calculée dans la console. Si elles ne sont pas directement disponibles sur votre écran, vous pouvez les rechercher à l'aide de l'outil de recherche. Cliquez sur l’extension que vous souhaitez utiliser et un nouveau groupe de blocs apparaîtra sur l'écran principal.

**Programmer la carte**

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous.

> 💡 **Afin de calculer la vitesse de rotation des coupelles de l’anémomètre, vous devez spécifier vous-même dans le code la longueur des bras de votre anémomètre, en mètre. Par exemple, si les bras de votre anémomètre font 10 cm, vous devrez entrer 0.1 (car 10 cm font 0,1 m).
> Pour mesurer la longueur du bras, vous devez prendre la longueur entre le centre de l’anémomètre (axe de rotation) et l’extrémité de la coupelle.**

Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur DIS_L4IOT et attendez que la carte finisse de clignoter.

**Exécuter, modifier, jouer**

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET). Lorsque le programme est lancé, l’humidité relative relevée par le capteur d’humidité s’affichera sur la console.

**🧑‍💻Programmer**

```jsx
let period = 3
let armLength = 0.1
let speed = 0

Serial.attachToConsole()

forever(function () {
		speed = 2 * Math.PI * armLength * input.getAnemometerRotationPerUnit(pins.A0, AnemometerUnit.RPS, period) * 3.6
    Serial.writeValue("speed", speed)
})
```

### PROG16-TDL-6 — Afficher les données collectées sur un écran



🛠️**Construire**

**Connecter le capteur**

Pour ce montage, vous aurez besoin d’une breadboard.

L’anémomètre possède trois broches : une broche **+**, une broche **-** et une broche de **signal**, qui permet d’envoyer les données de l’anémomètre.

Vous allez devoir connecter les broches du capteur de la manière suivante :

- La broche **-** de l’anémomètre à la bande d’alimentation '-' de la breadboard
- La broche **GND** de la carte à la bande d’alimentation '-' de la breadboard
- La broche **+** de l’anémomètre sur la bande d’alimentation ‘+’ de la breadboard
- La broche **3.3V** de la carte à la bande d’alimentation ‘+’ de la breadboard
- La broche **Signal** de l’anémomètre sur la broche **A0** de la carte

> 💡 **Les bandes de connexion '+' et '-' de la breadboard permettent de démultiplier le nombre de connexion simultanées aux broches d’alimentation de la carte. En effet, tous les trous de contact des bandes d’alimentation sont reliés, ce qui permet à plusieurs composants d’être alimentés en même temps en se branchant sur ces bandes.**

**Connecter l’écran**

L’écran que vous allez utiliser est un écran OLED nommé **SSD1306**. Il peut être connecté soit en **SPI**, soit en **I2C**. Comme nous allons utiliser la communication **I2C**, vous allez devoir connecter l’écran de la manière suivante :

- La broche **GND** de l’écran à la bande d’alimentation '-' de la breadboard
- La broche **VCC** de l’écran à la bande d’alimentation '+' de la breadboard
- La broche **SDA** de l’écran sur la broche **D14** de la carte
- La broche **SCL** de l’écran sur la broche **D15** de la carte

*Ressources : [https://en.wikipedia.org/wiki/I2C](https://en.wikipedia.org/wiki/I2C), [https://en.wikipedia.org/wiki/Serial_Peripheral_Interface](https://en.wikipedia.org/wiki/Serial_Peripheral_Interface), [https://www.sparkfun.com/qwiic](https://www.sparkfun.com/qwiic), [https://learn.adafruit.com/introducing-adafruit-stemmaqt/what-is-stemma-qt](https://learn.adafruit.com/introducing-adafruit-stemmaqt/what-is-stemma-qt)*

![Untitled](images/Untitled.png)

**Connecter la carte à l'ordinateur**

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur micro-USB ST-LINK (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé DIS_L4IOT. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

**Ouvrir MakeCode**

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur. *Ressource : [makecode.lets-steam.eu](http://makecode.lets-steam.eu/)*

**Installer les extensions anemometer et OLED**

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut "prêt à l'emploi" et vous devrez installer deux extensions.

> ℹ️ **Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de la robotique et bien plus encore.**

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. Si vous cliquez sur **AVANCÉ**, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton.

Dans la liste des extensions disponibles, vous pouvez facilement trouver les extensions **anemometer** et **oled** qui seront utilisées pour cette activité. L’extension anemometer vous permettra d’interagir avec l’anémomètre tandis que l’extension OLED vous permettra d’interagir avec l’écran. Si elles ne sont pas directement disponibles sur votre écran, vous pouvez les rechercher à l'aide de l'outil de recherche. Cliquez sur l’extension que vous souhaitez utiliser et un nouveau groupe de blocs apparaîtra sur l'écran principal.

**Programmer la carte**

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur DIS_L4IOT et attendez que la carte finisse de clignoter.

**Exécuter, modifier, jouer**

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET). Lorsque le programme est lancé, vous pourrez voir sur l’écran oled la température ambiante (en degré Celsius), la pression atmosphérique (en hPa), l’humidité relative (en %) et la vitesse du vent (en km/h).

**🧑‍💻Programmer**

```jsx
let wind = 0
function getAnemometerSpeed (armLength: number, period: number) {
    return 2 * Math.PI * armLength * input.getAnemometerRotationPerUnit(pins.A0, AnemometerUnit.RPS, period) * 3.6
}
forever(function () {
    wind = getAnemometerSpeed(0.1, 1)
    oled.clear()
    oled.showValue("temperature", input.temperature(TemperatureUnit.Celsius), 1)
    oled.showValue("pressure", input.pressure(PressureUnit.HectoPascal), 2)
    oled.showValue("humidity", input.humidity(), 3)
    oled.showValue("wind speed", wind, 4)
    pause(1000)
})
```

# Protocole PR16-TDL - Étapes d'expérimentation

## Étape 1 - Collecter des données

<aside>
ℹ️ La première étape de l’expérimentation est sous-divisée en 4 phases permettant de collecter les données relatives aux diverses variables nécessaires à la complétion de ce protocole : température, pression atmosphérique, humidité et vitesse de vent.

</aside>

### Étape 1.1 - Collecter des données - Température

🧭**Orientation**

La notion de température est accessible et palpable dès le plus jeune âge. Cependant la définition physique est moins accessible. En effet la température est une manifestation macroscopique d’une grandeur physique microscopique : l’agitation thermique de chaque molécule.

La perception humaine qu’on a de la température n’est pas toujours le bon reflet de la température réelle telle qu’on pourrait la mesurer avec un thermomètre. En réalité, le corps humain est **sensible aux transferts de chaleur** avec son environnement et non directement à la température. Quoi qu’il en soit elle joue un rôle crucial sur la météo et sur l’environnement des êtres vivants de manière générale et conditionnera leur(s) comportement(s), leur(s) habitat(s) ...

💡 **Conceptualisation**

Pour mesurer la température, il nous faut un thermomètre, qui généralement se base sur le phénomène de dilatation des corps. Lorsqu’on chauffe un corps, l’agitation thermique augmente causant (pour les liquides et les solides) une augmentation de volume. La dilatation est directement proportionnelle à l’augmentation de température. Celle-ci est généralement quasi imperceptible à l’œil nu, c’est pourquoi le traditionnel thermomètre à liquide (généralement alcool ou mercure) se fait à l’aide d’un capillaire (tube très fin) pour augmenter la visibilité et la précision. Pour une même élévation de température, diminuer la section du tube augmentera l’élévation du liquide dans celui-ci (la dilatation étant volumique). Notons qu’il existe d’autres thermomètres comme le thermomètre à ressort (bilame), à gaz (plus complexe dans leur fonctionnement), à cristaux liquides, à semi-conducteur…

<aside>
🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 2 - Mesurer la température ambiante.**

[PROG16-TDL-2](https://www.notion.so/PROG16-TDL-2-01fc0dc14341496da5bfa06b8a725078?pvs=21)

</aside>

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

<aside>
🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 3 - Mesurer la pression atmosphérique.**

[PROG16-TDL-3](https://www.notion.so/PROG16-TDL-3-fad7c2c4bd7f45f2bd84c5b7f6a6c757?pvs=21)

</aside>

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

<aside>
🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 4 - Mesurer l’humidité relative de l’air.**

[PROG16-TDL-4](https://www.notion.so/PROG16-TDL-4-e4e4a6e38b3d49b0bcddece805e8b948?pvs=21)

</aside>

💬 **Débriefing**

Après avoir abordé le concept d’humidité, nous pouvons afficher dans la console, la valeur de la température lue par le microcontrôleur.

### Étape 1.4 - Collecter des données - Vitesse du vent - Anémomètre

🧭**Orientation**

Le vent est un phénomène météorologique produit par des mouvements de masses d’air. Ce phénomène météorologique a des rôles essentiels dans la nature. Il agit sur la température, le cycle de l’eau, l’oxygénation des océans, l’érosion, ainsi que la faune et la flore.

Le vent se caractérise par une direction et une vitesse. La vitesse est modifiée par les reliefs comme les montagnes, les vallées ou les forêts. On utilise une girouette pour connaître la direction du vent et un anémomètre pour en mesurer la vitesse.

💡**Conceptualisation**

Le projet consiste à construire un anémomètre pour mesurer la vitesse du vent. Cette donnée étant difficile à acquérir de façon précise avec du matériel non professionnel, nous allons d’abord calculer la vitesse tangentielle des coupelles. Ensuite, nous utiliserons la mesure de la station météo avoisinante ou d’un anémomètre professionnel pour faire l’étalonnage de notre appareil.

Pour réaliser cette activité et mesurer la vitesse du vent à l’aide d’un anémomètre nous aurons besoin de comprendre le **mouvement circulaire uniforme**.

<aside>
🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 1 - Fabriquer un anémomètre.**

[PROG16-TDL-1](https://www.notion.so/PROG16-TDL-1-e8bece48622740bab0057b0851cd5106?pvs=21)

</aside>

<aside>
🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 5 - Mesurer la vitesse du vent.**

[PROG16-TDL-5](https://www.notion.so/PROG16-TDL-5-aef569a9d16b47c78cbfc8fe4741755e?pvs=21)

</aside>

💬 **Débriefing**

Nous pouvons maintenant nous installer à l’extérieur avec notre montage (anémomètre, carte programmable et un ordinateur), dans un endroit dégagé (loin de bâtiments, arbres ou autres obstacles) et lancer notre programme.
Nous obtenons enfin la vitesse de rotation de l’anémomètre. Mais s’agit-il vraiment de la vitesse du vent ? Malheureusement ce n’est pas le cas comme nous l’avons précisé au début de l’activité. Le résultat affiché par le programme nous permet néanmoins de déduire que le vent va au moins aussi vite que les coupelles de notre anémomètre bricolé.

Pour améliorer la précision de cette mesure, nous devons l’étalonner grâce à un anémomètre de référence en mettant devant une soufflerie à différentes distances ou à différentes intensités et établir le lien entre la vitesse donnée par notre anémomètre et celui de référence considérée comme « juste ». Si la relation n’est pas simplement proportionnelle ou décalée, nous pouvons envisager de faire un abaque (tableau de conversion pour plusieurs valeurs). Une autre solution consiste à se baser sur les données de la station météo la plus proche de notre localisation.

## Étape 2 - Afficher les données collectées

🧭**Orientation**

Les données ont été à présent affichées sur la console de l’ordinateur, afin d’avoir une station météo plus autonome dans l’ordinateur, nous proposons de l’afficher sur un écran qui sera relié directement au microcontrôleur.

💡**Conceptualisation**

<aside>
🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 6 - Afficher les données collectées sur un écran.**

[PROG16-TDL-6](https://www.notion.so/PROG16-TDL-6-c94fae72095946d8b7bd9ff400e24af4?pvs=21)

</aside>

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

![Untitled](Protocole%20PR16-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation/Untitled.png)

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

![Untitled](Protocole%20PR16-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation/Untitled%201.png)

- ***Anémomètre***

*Le programme en bloc :*

![Untitled](Protocole%20PR16-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation/Untitled%202.png)

*Le câblage :*

![Untitled](Protocole%20PR16-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation/Untitled%203.png)

*Le résultat :*

![Untitled](Protocole%20PR16-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation/Untitled%204.png)

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

![Untitled](Protocole%20PR16-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation/Untitled%205.png)

Nous constatons que le rapport est en très bonne approximation constant et vaut dans notre cas 3. Cela signifie que lorsque nous mesurons la vitesse avec notre anémomètre nous devons la multiplier par 3 pour avoir la vitesse du vent.

![Untitled](Protocole%20PR16-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation/Untitled%206.png)

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
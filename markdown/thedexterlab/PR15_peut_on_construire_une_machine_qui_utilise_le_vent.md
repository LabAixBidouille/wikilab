# Peut-on construire une machine qui utilise le vent pour soulever un poids de 50 g ?

**Problématique :** Peut-on utiliser le vent comme source d'énergie mécanique ?

> ℹ️ **Depuis l'Antiquité, l'humanité a été fascinée par la puissance invisible du vent. Des moulins à vent néerlandais aux voiliers des Phéniciens, le vent a été domestiqué pour moudre le grain, pomper l'eau et explorer le monde. Plus récemment, l'énergie éolienne est devenue une source d'énergie renouvelable importante. Aujourd'hui, vous allez embarquer dans un voyage à travers l'histoire et la science en explorant comment le vent peut être utilisé pour soulever un poids de 50 g. L'énergie cinétique du vent est l'énergie mécanique détenue par une particule d'air en raison de sa vitesse en mouvement. Elle dépend de la masse de l'air en mouvement et de sa vitesse. Lorsque le vent souffle sur une surface, comme une aile d'une éolienne, il transfère son énergie cinétique à cette surface, laquelle peut alors la convertir en énergie mécanique puis électrique utilisable. L'énergie cinétique du vent peut être captée et convertie en énergie électrique grâce à des technologies telles que les éoliennes, qui utilisent des turbines pour capter et convertir cette énergie en électricité. Cette énergie peut être utilisée pour alimenter des bâtiments, des villes et des réseaux électriques entiers.**

![DATA15_TDL.jpg](images/DATA15_TDL.jpg)

### Déroulé de l’activité

L'objectif est de construire une machine utilisant le vent (simulé par un ventilateur) pour soulever un poids de 50 g, donc à transformer l'énergie cinétique du vent en énergie mécanique. Cela amène à explorer de petites difficultés d'ingénierie : frottements, rigidité des matériaux, forces de torsion sur un axe, etc.

Ce protocole décrit les étapes à suivre pour construire un système de levage éolien en classe, en utilisant des matériaux courants tels que des bouteilles en plastique, des canettes, des pailles, des moteurs à courant continu, etc. Les étapes comprennent la création de différents types de turbines éoliennes pour capturer l'énergie éolienne, la conception et la construction d'un système pour augmenter le couple et la puissance, et la transformation du mouvement rotatif en mouvement linéaire pour soulever un poids. Ce projet permet aux élèves d'acquérir des compétences pratiques en ingénierie, en résolution de problèmes et en énergie renouvelable, tout en favorisant la pensée critique et l'innovation. La question sous-jacente abordée est comment l'énergie éolienne peut être utilisée pour effectuer un travail mécanique utile.

### Compétences Mobilisées

Ce protocole mobilise plusieurs compétences, incluant l'ingénierie, la conception, la résolution de problèmes, et la pensée critique. Les disciplines associées incluent la physique, la mécanique, l'énergie renouvelable, l'aérodynamique, et la conversion de l'énergie.

Les élèves apprendront à construire des turbines éoliennes, à comprendre les principes de l'aérodynamique et de la conversion de l'énergie, à concevoir des mécanismes pour transformer le mouvement rotatif en mouvement linéaire, et à résoudre des problèmes d'ingénierie complexes. Ils acquerront également une compréhension pratique de l'énergie renouvelable et de son rôle dans un avenir durable.

Tout au long de ce projet, les élèves seront encouragés à réfléchir de manière critique sur leur travail et à apporter des ajustements en fonction des résultats obtenus. Ils pourront également travailler en collaboration avec leurs pairs pour partager des idées et trouver des solutions innovantes à des problèmes complexes.

### Matériel

- 1 carte programmable “STM32 IoT Node Board”
- 4 gobelets en plastique léger (de préférence de la même taille)
- 2 pailles en plastique rigide
- 1 crayon avec une gomme à une extrémité (ou une tige métallique avec une perle)
- 1 épingle droite ou une aiguille fine
- Papier millimétré ou un marqueur permanent (optionnel, pour marquer les pailles)
- Colle forte ou ruban adhésif
- Poulies de différents diamètres (disponibles dans les kits de science ou fabriquées à partir de bobines, de roues, etc.)
- Corde fine ou fil solide
- Un support (peut être une structure en bois ou en métal)
- Poids de 50 g (ou un objet de ce poids)
- Crochet ou petit conteneur pour contenir le poids

# LES RESSOURCES

### Expérimentation scientifique

[Protocole PR15-TDL - Étapes d'expérimentation](Peut-on%20construire%20une%20machine%20qui%20utilise%20le%20vent/Protocole%20PR15-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation%2094758fc53aaf4a69be83ace9028703ff.md)

### Fiches de programmation

[Sans titre](Peut-on%20construire%20une%20machine%20qui%20utilise%20le%20vent/Sans%20titre%20d513e2bd51724d8c8ea49d40f246c33f.csv)


---

# Protocole PR15-TDL - Étapes d'expérimentation

### Étape 1 - Découverte du vent et son usage par les humains dans l’histoire

🧭**Orientation**

Le vent a joué un rôle crucial dans l'histoire humaine. Il a permis aux explorateurs de naviguer à travers les océans, a alimenté les moulins à vent pour moudre le grain, et aujourd'hui, il fournit de l'énergie propre à travers les éoliennes. À présent, nous cherchons à comprendre si nous pouvons utiliser le vent pour soulever un poids de 50 g.

Le vent est simulé grâce à un ventilateur. Le système de levage, sera composé de plusieurs parties. La première est responsable de capter l’énergie du vent et à la transformer en un mouvement de rotation. La seconde partie du système doit transmettre le mouvement de rotation en adaptant ses caractéristiques (vitesse de rotation et couple). La dernière partie du système transforme le mouvement de rotation en un mouvement rectiligne pour soulever le poids. La recherche expérimentale de solution va amener à explorer divers principes d'ingénierie (rigidité des matériaux, frottements, axes, torsion, etc.).

Dans la première étape, s’intéresse spécifiquement au vent et à son usage dans l’histoire. Cette étape doit situer la question de recherche initiale plus largement qu’une simple question technique en conduisant préalablement une recherche historique qui répond à la question **“Quels sont les usages du vent dans l'histoire ?”**

💡 **Conceptualisation**

Le vent a été utilisé par les humains de diverses manières tout au long de l'histoire. Voici quelques exemples clés :

1. **Navigation à Voile** : Depuis l'Antiquité, les voiles ont été utilisées pour propulser les navires. Les Phéniciens, les Grecs et les Vikings, entre autres, ont tous utilisé la puissance du vent pour explorer, commercer et conduire des activités militaires sur les mers.
2. **Moulins à Vent** : Le vent a été utilisé pour moudre les grains dans différentes parties du monde, notamment au Moyen-Orient dès le VIIe siècle, et plus tard en Europe. Les moulins à vent ont été une part essentielle de l'agriculture, permettant la production de farine et autres biens moulus.
3. **Pompage de l'Eau** : Les éoliennes ont été utilisées pour pomper l'eau à des fins agricoles, notamment dans les régions arides des États-Unis au XIXe siècle.
4. **Production d'Électricité** : Au XXe siècle, avec l'essor de la technologie, le vent a commencé à être utilisé pour générer de l'électricité. Les éoliennes modernes sont une source majeure d'énergie renouvelable dans de nombreuses parties du monde.
5. **Technologie de Vol** : La compréhension de l'aérodynamique du vent a été cruciale dans le développement de la technologie de vol, y compris les cerfs-volants dans la Chine ancienne, et plus tard les avions.
6. **Séchage et Ventilation** : Dans de nombreuses cultures, le vent a été utilisé de manière plus passive pour sécher les vêtements, conserver les aliments, et ventiler les habitations.
7. **Art et Musique** : Le vent a également inspiré des instruments de musique comme les éoliennes ou les carillons éoliens, et a été un élément clé dans certains types d'art cinétique.

L'étude des usages du vent à travers l'histoire peut offrir aux élèves une perspective fascinante sur l'ingéniosité humaine et la manière dont les différentes cultures ont interagi avec leur environnement naturel.

🔎 **Investigation**

Pour structurer l’enquête autour de cette question plus documentaire, il est possible de suivre les étapes suivantes :

1. **Introduction et Discussion** :
    - **Débuter :** Introduisez le sujet en posant les questions aux élèves. Vous pourriez montrer une image d'un moulin à vent ou d'une éolienne moderne.
    - **Discussion en classe :** Laissez les élèves réfléchir et discuter de leurs idées en petits groupes ou en classe entière.
2. **Recherche Historique** :
    - **Guidage de la Recherche :** Divisez les élèves en groupes et attribuez-leur différentes périodes historiques ou technologies liées au vent (par exemple, les voiles, les moulins à vent, les éoliennes).
    - **Ressources :** Fournissez des livres, des articles, ou accès à Internet pour rechercher.
    - **Feuille de Route :** Vous pouvez créer une feuille de route ou un guide de recherche pour aider les élèves à se concentrer sur les informations pertinentes.
3. **Analyse de la Technologie** :
    - **Étude de Cas :** Choisissez quelques exemples concrets de la manière dont le vent a été capturé ou dirigé (par exemple, conception de voiles, aérodynamique d'une éolienne).
    - **Analyse :** Demandez aux élèves d'analyser comment ces technologies fonctionnent. Ils peuvent dessiner des schémas ou créer des maquettes.
4. **Présentation et Discussion** :
    - **Présentations de Groupes :** Chaque groupe présente ses découvertes à la classe.
    - **Discussion en Classe :** Encouragez une discussion sur la manière dont les usages et les technologies ont évolué, et comment ils se rapportent à l'expérience à venir.
5. **Conclusion** :
    - **Résumé :** Résumez les principales découvertes et la manière dont elles se rapportent à l'objectif global de l'expérience.
    - **Transition :** Expliquez comment cette compréhension historique et technologique informera les étapes suivantes du protocole.

💬**Débriefing**

Grâce aux étapes précédentes, nous avons pu comprendre l'importance du vent dans l'histoire et comment il a été utilisé pour différentes tâches. Nous avons également appris les étapes nécessaires pour construire une machine qui utilise le vent pour soulever un poids de 50 g.

### Étape 2 - Caractéristiques du vent

🧭**Orientation**

Maintenant que nous avons compris comment le vent a été utilisé dans l’histoire par les humains, on va s’intéresser aux caractéristiques physiques du vent. Avant de déterminer ses caractéristiques principales, il faut définir ce qu’est le vent.

💡**Conceptualisation**

Le vent est un phénomène naturel qui se manifeste par le déplacement des masses d'air à la surface de la Terre. C'est un aspect fondamental de la météorologie et du climat, et il a des implications dans de nombreux domaines, allant de l'agriculture à l'énergie renouvelable. Voici une explication détaillée de ce qu'est le vent :

**Composition et Origine**

1. **Air en Mouvement** : Le vent est composé de masses d'air en mouvement, qui contiennent un mélange de gaz, principalement de l'azote et de l'oxygène, ainsi que des traces de vapeur d'eau et d'autres gaz.
2. **Énergie Solaire** : Le soleil chauffe inégalement la surface de la Terre, créant des différences de température et de pression dans l'atmosphère. Ces différences de pression entraînent le mouvement de l'air, générant le vent.

**Facteurs Influents**

1. **Différences de Pression** : Les zones de haute pression (air plus froid et plus dense) cherchent à se déplacer vers les zones de basse pression (air plus chaud et moins dense), créant ainsi un flux d'air.
2. **Rotation de la Terre** : La rotation de la Terre affecte le mouvement de l'air à travers la force de Coriolis, faisant dévier les vents de leur trajectoire rectiligne.
3. **Géographie** : Les montagnes, les vallées, les océans et les autres caractéristiques géographiques peuvent influencer la direction et la vitesse du vent. Par exemple, les brises de mer se produisent lorsque la terre et la mer se réchauffent et se refroidissent à des vitesses différentes.
4. **Obstacles** : Les bâtiments, les arbres et autres obstacles peuvent perturber le flux du vent, le rendant plus turbulent.

**Importance**

Le vent joue un rôle essentiel dans divers aspects de notre monde, notamment :

- **Climat et Météorologie** : Il aide à réguler les températures et à distribuer l'humidité.
- **Écosystèmes** : Il peut influencer les habitats et la distribution des plantes et des animaux.
- **Énergie** : Il est une source importante d'énergie renouvelable.
- **Navigation et Transport** : Il a été utilisé pour la navigation maritime et continue d'influencer l'aviation.

**Caractéristiques**

Les caractéristiques du vent décrivent ses propriétés et son comportement. Ces caractéristiques peuvent être mesurées et analysées pour comprendre les effets du vent sur l'environnement, la météorologie, et d'autres applications comme l'énergie éolienne. Voici les principales caractéristiques du vent :

| **Caractéristiques** | **Vitesse** | **Direction** | **Stabilité et Turbulence** | **Humidité** | **Température** | **Pression** | **Altitude** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Définition** | La vitesse du vent est la rapidité avec laquelle l'air se déplace dans une direction donnée. | La direction du vent indique d'où le vent souffle. | La stabilité se réfère à l'uniformité du vent, tandis que la turbulence décrit les fluctuations et les tourbillons dans le flux d'air. | Le vent peut transporter de l'humidité, affectant le taux d'humidité de l'air. | Le vent peut être chaud ou froid, selon la source et la région. | Les variations de pression atmosphérique influencent la direction et la vitesse du vent. | La vitesse et la direction du vent peuvent changer avec l'altitude. |
| **Mesure** | Elle est généralement mesurée en kilomètres par heure (km/h) ou en mètres par seconde (m/s) avec un anémomètre. | Elle est souvent indiquée en degrés (en utilisant une boussole) ou en termes comme nord, sud, est, ouest. | La turbulence peut être caractérisée par des statistiques comme l'écart-type de la vitesse du vent. | Elle peut être mesurée en pourcentage d'humidité relative. | Mesurée en degrés Celsius (°C) ou Fahrenheit (°F). | Mesurée en hectopascals (hPa) ou en millimètres de mercure (mmHg). | L'altitude peut être mesurée en mètres (m) ou en pieds (ft) au-dessus du niveau de la mer. |
| **Importance** | La vitesse du vent a un impact sur tout, de la sensation de fraîcheur à la capacité de générer de l'électricité avec des éoliennes. | La direction du vent affecte des phénomènes tels que la dispersion de la pollution et les schémas de navigation. | La turbulence affecte des domaines tels que l'aviation, l'architecture et la conception des éoliennes. | L'humidité dans le vent peut influencer le climat, la météo et l'agriculture. | La température du vent affecte le ressenti climatique et peut avoir des effets sur la faune et la flore. | La pression du vent joue un rôle clé dans la météorologie et la prévision des tempêtes. | L'altitude du vent est essentielle pour des applications comme l'aviation et la conception de turbines éoliennes à grande échelle. |

En comprenant ces caractéristiques, les scientifiques, les ingénieurs et les météorologues peuvent mieux prédire et exploiter le vent, que ce soit pour la navigation, la génération d'énergie, la construction de structures résistantes au vent, ou la compréhension des schémas climatiques.

Vis-à-vis de la question de recherche qui est la nôtre et au vu de l’échelle à laquelle on va travailler, seulement les deux premières caractérisées vont être pertinentes pour la suite de l’enquête. Nous allons voir comment nous pouvons créer un dispositif de mesure de ces deux caractéristiques.

🔎 **Investigation**

Pour cette enquête, nous allons construire des dispositifs simples pour mesurer la vitesse et la direction du vent.

**Investigation Étape 1 - Mesure de la vitesse du vent**

Le premier instrument que l’on va construire est un anémomètre. Construire un anémomètre en utilisant des objets domestiques est un excellent projet de bricolage et une activité éducative pour comprendre les principes météorologiques. Voici un guide simple pour construire un anémomètre DIY avec des matériaux couramment disponibles.

**Matériaux nécessaires**

- 4 gobelets en plastique léger (de préférence de la même taille)
- 2 pailles en plastique rigide
- 1 crayon avec une gomme à une extrémité (ou une tige métallique avec une perle)
- 1 épingle droite ou une aiguille fine
- Papier millimétré ou un marqueur permanent (optionnel, pour marquer les pailles)
- Colle forte ou ruban adhésif

**Étapes de construction**

1. **Préparer les Gobelets** :
    - Faites un petit trou au bas de chaque gobelet, assez grand pour y insérer une paille.
2. **Attacher les Pailles** :
    - Insérez une paille dans les trous de deux gobelets opposés et collez-les en place. Répétez avec la deuxième paille et les deux autres gobelets. Vous devriez avoir une forme de croix.
    - Si vous le souhaitez, marquez chaque paille à des intervalles réguliers pour aider à mesurer la vitesse du vent.
3. **Assembler la Structure** :
    - Placez les deux pailles ensemble pour qu'elles forment une croix, et collez-les à l'endroit où elles se rencontrent.
    - Insérez l'épingle ou l'aiguille à travers le point central de la croix où les pailles se rencontrent, dans la gomme du crayon. Assurez-vous que la structure peut tourner librement.
4. **Calibrer l'Anémomètre** (Optionnel) :
    - Si vous souhaitez que votre anémomètre mesure la vitesse du vent en unités réelles, vous devrez le calibrer en comparant ses lectures avec un anémomètre connu ou en utilisant une méthode connue pour créer une vitesse de vent constante.
5. **Placer l'Anémomètre** :
    - Trouvez un emplacement extérieur où le vent peut souffler librement sur l'anémomètre. Plantez le crayon dans le sol ou fixez-le à un support pour le maintenir en place.

**Utilisation**

- Observez comment les gobelets tournent lorsque le vent souffle.
- Si vous avez marqué les pailles, comptez combien de fois une marque passe un point fixe en un certain temps pour estimer la vitesse du vent.

Pour faciliter la lecture des valeurs par la suite, il est possible de construire une version automatisée avec une carte STM32 :

> 🧑‍💻 Pour vous aider à fabriquer l’anémomètre, consultez la **Fiche 1 - Fabriquer un anémomètre.**
>
> [PROG15-TDL-1](https://www.notion.so/PROG15-TDL-1-dde362fa545c4c80a13587c74f2f2e4b?pvs=21)

> 🧑‍💻 Pour vous aider à programmer l’anémomètre, consultez la **Fiche 2 - Mesurer la vitesse du vent.**
>
> [PROG15-TDL-2](https://www.notion.so/PROG15-TDL-2-c3071167f15240b0a05cbb0afc6a984b?pvs=21)

> ℹ️ À ce stade, vous pouvez utiliser ces quelques questionnements avec vos élèves :
>
> - ***Q1 - Quelle trajectoire effectuent les coupelles de l’anémomètre ?***
>
> *R : Une trajectoire circulaire*
>
> On considérera que la **vitesse angulaire** de l’anémomètre est fonction de deux paramètres :
>
> - La **circonférence** du **cercle** définie par un **tour** d’anémomètre,
> - Le **temps** pris par l’anémomètre pour réaliser ce **tour**.
> - ***Q2 - Pouvez-vous calculer la circonférence du cercle parcouru par l’anémomètre que vous avez construit ?***
>
> *R1 : Utilisez la formule C=2 πr*
>
> Le **temps** nécessaire à un anémomètre pour effectuer un **tour complet** est appelé **période**. Il s’exprime en **secondes**
>
> - ***Q3 - Proposez une stratégie pour mesurer la période. Est-ce que cette mesure est constante ou variable ?***
>
> *R2 (Suggestion de réponse) : Utilisation d’un chronomètre, d’un marqueur pour marquer un trait de départ sur la partie fixe de l’anémomètre et du ruban adhésif sur l’un des bras de l’anémomètre. Filmer avec un smartphone et regarder image par image est une autre solution*
>
> - ***Q4 - Comment pourrait-on automatiser l’acquisition des paramètres nécessaires au calcul de la vitesse de l’anémomètre ?***
>
> *R3 : Utilisation d’une carte programmable*

**Investigation Étape 2 - Mesure de la direction du vent**

Pour connaître la direction du vent, le plus simple est de construire une girouette. Si elle est calibrée convenablement avec une boussole, elle permettra de facilement lire la direction du vent à chaque instant. Voici comment vous pouvez créer une girouette, un instrument classique pour mesurer la direction du vent.

**Matériaux nécessaires**

- Une feuille de papier cartonné ou de plastique léger
- Un crayon avec une gomme à une extrémité ou une tige métallique avec une perle
- Une paille en plastique rigide
- Une épingle droite ou une aiguille fine
- Colle forte ou ruban adhésif
- Ciseaux
- Une règle
- Un compas ou quelque chose de rond pour dessiner un cercle (optionnel)
- Marqueurs ou peinture (optionnel, pour la décoration)

**Étapes de construction**

1. **Dessiner et Découper la Flèche** :
    - Dessinez une flèche sur le papier cartonné ou le plastique léger. La flèche doit avoir une tête pointue et une queue large.
    - Découpez soigneusement la flèche.
2. **Attacher la Flèche à la Paille** :
    - Collez ou attachez la flèche à la paille, en veillant à ce qu'elle soit bien centrée et droite.
3. **Monter la Girouette** :
    - Insérez l'épingle ou l'aiguille à travers la paille dans la gomme du crayon, en laissant suffisamment d'espace pour que la paille et la flèche puissent tourner librement.
4. **Créer la Rose des Vents** (Optionnel) :
    - Si vous le souhaitez, dessinez un cercle sur un autre morceau de carton et marquez les directions principales (N, S, E, W) et les directions intermédiaires (NE, SE, SW, NW).
    - Découpez le cercle et collez-le à la base du crayon, en alignant les directions avec une vraie boussole.
5. **Placer la Girouette** :
    - Trouvez un endroit à l'extérieur où la girouette peut être exposée au vent sans obstruction.
    - Plantez le crayon dans le sol ou fixez-le à un support stable, en vous assurant que la flèche peut tourner librement.

**Utilisation**

Observez comment la flèche tourne et indique la direction d'où le vent souffle.

En construisant et en utilisant cette girouette, les élèves peuvent apprendre des concepts importants tels que la direction du vent, la navigation, la géographie, et les principes de construction et de conception. C'est également une excellente opportunité pour encourager la créativité et l'ingéniosité en permettant aux élèves de personnaliser et de décorer leur girouette.

💬 **Débriefing**

Comprendre ce qu'est le vent et comment il fonctionne est vital pour de nombreux domaines de la science et de l'ingénierie, et il continue d'être un domaine de recherche et d'innovation actif, en particulier pour répondre aux problèmes de la production d’énergie décarbonée. Avant de construire un système de levage utilisant le vent, il est nécessaire de comprendre les caractéristiques du vent pour pouvoir adapter notre système et surtout mesurer son efficacité.

### Étape 3 - Capter le vent

🧭**Orientation**

La première étape de notre système de levage éolien doit capter le vent pour le transformer en un mouvement de rotation. La compréhension des systèmes de captation du vent et leurs particularités sont importantes pour choisir celui qui sera le plus adapté. Comme la direction du vent n’est pas fixe, il faut aussi se questionner sur comment le dispositif est dirigé.

💡**Conceptualisation**

La capture et la direction du vent sont au cœur de nombreuses technologies, des voiles de bateaux aux éoliennes modernes. Voici comment le vent peut être capturé ou dirigé dans différents contextes :

| Outil de capture | **Voiles de Bateaux** | **Moulins à Vent et Éoliennes** | **Architecture et Ventilation** | **Aéronautique** | **Agriculture et Séchage** | **Énergie Éolienne à Petite Échelle** |
| --- | --- | --- | --- | --- | --- | --- |
| **Capture** | Les voiles capturent le vent en créant une surface sur laquelle le vent peut exercer une pression. | Les pales du moulin à vent ou de l'éolienne sont conçues pour capter l'énergie cinétique du vent et la convertir en énergie mécanique ou électrique. | L'architecture peut être conçue pour utiliser le vent à des fins de ventilation, capturant le vent par des ouvertures et des tours de ventilation. | Les ailes d'un avion sont conçues pour interagir avec le vent de manière à créer de la portance. | Le vent peut être capturé pour sécher les récoltes ou les vêtements en les exposant directement au flux d'air. | Des turbines éoliennes plus petites peuvent être utilisées à la maison ou dans des contextes hors réseau pour capturer l'énergie du vent. |
| **Direction** | En ajustant l'angle et la forme des voiles, les marins peuvent diriger le bateau. L'aérodynamique de la voile crée des forces qui permettent au bateau de se déplacer dans des directions différentes par rapport au vent. | La nacelle de l'éolienne peut être orientée pour faire face à la direction du vent, maximisant ainsi l'efficacité. Les pales elles-mêmes peuvent aussi être ajustées pour contrôler la quantité d'énergie capturée. | En orientant les bâtiments de manière stratégique et en utilisant des barrières et des ouvertures, le vent peut être dirigé à travers les espaces intérieurs pour refroidir et ventiler. | Les gouvernes et les ailerons permettent au pilote de diriger l'avion en changeant la manière dont l'air circule autour des ailes. | Des barrières et des abris peuvent être utilisés pour diriger le vent là où il est le plus nécessaire. | Comme pour les grandes éoliennes, ces dispositifs peuvent être orientés et réglés pour maximiser l'efficacité. |

La capacité de capturer et de diriger le vent repose sur une compréhension des principes de la mécanique des fluides et de l'aérodynamique. Elle a conduit à des innovations qui continuent de jouer un rôle vital dans notre monde, de la production d'énergie aux transports.

🔎**Investigation**

Au vu de notre besoin, il faut enquêter à propos des turbines et des moulins à vent car ils constituent la solution adaptée à notre besoin. Les élèves devront construire plusieurs types de système pour choisir collectivement celui qui sera le plus adapté. Voici quelques types de turbines à vent simples que vous pouvez construire avec vos élèves en utilisant des matériaux couramment disponibles :

| Type de turbine | **Turbine à Vent Horizontale** | **Turbine à Vent Verticale** | **Turbine à Vent de Savonius** | **Turbine à Vent de Darrieus** | **Mini-Turbine Éolienne** | **Turbine à Vent Aquatique** |
| --- | --- | --- | --- | --- | --- | --- |
| Description | La turbine à vent horizontale est le type le plus commun, avec les pales tournant autour d'un axe horizontal. | Les turbines à vent verticales ont un axe de rotation vertical et peuvent capter le vent de n'importe quelle direction. | C'est un type de turbine à vent verticale qui utilise des lames en forme de S. | Un autre type de turbine à vent verticale, avec des pales en forme de « V » inversé. | Une petite turbine à vent facile à construire, parfaite pour démontrer les principes de base. | Utilise la force du vent pour propulser un petit bateau. |
| Matériaux | Bâtonnets de bois, papier, colle, moteur à courant continu (pour générer de l'électricité), etc. | Tubes en PVC, feuilles de plastique ou de métal mince, moteur à courant continu, etc. | Canettes de soda, pales en plastique, moteur à courant continu, etc. | Fil métallique, feuilles de plastique, moteur à courant continu, etc. | Papier, ciseaux, colle, petit moteur, etc. | Bouchons en liège, piques à brochette, voile en papier, bassin d'eau. |
| Utilisation en classe | Apprendre sur l'aérodynamique, la conversion de l'énergie cinétique en énergie mécanique ou électrique. | Explorer différents designs et comprendre comment la direction du vent affecte la production d'énergie. | Étudier l'efficacité énergétique et les principes de conception de turbines. | Explorer les concepts d'ingénierie, de conception et d'efficacité énergétique. | Introduction à l'énergie éolienne, l'ingénierie, et la conversion de l'énergie. | Apprendre comment le vent peut être utilisé pour le mouvement et la navigation. |

En construisant ces différents types de turbines éoliennes en classe, les élèves peuvent acquérir une compréhension pratique de l'énergie éolienne, de la conception et de l'ingénierie, de l'aérodynamique, et de la conversion de l'énergie. Cela offre également une occasion de discuter de l'importance de l'énergie renouvelable et de son rôle dans un avenir durable.

💬 **Débriefing**

La création des turbines à permis de transformer l’énergie du vent en mouvement mécanique. Les différents types de turbines offrent aux élèves un panel de solution pour le premier étage du système de levage éolien.

### Étape 4 - Transformer le mouvement

🧭**Orientation**

Le premier étage de notre système permet de capter le vent et de le transformer en un mouvement de rotation. Les caractéristiques de ce mouvement dépendent directement du vent. Si le vent va vite, notre rotation sera rapide. Si le vent est lent, le mouvement sera lent. De même, la force disponible en sortie de notre turbine (on parlera de couple) devra être adaptée pour lever le poids de 50 g.

💡**Conceptualisation**

Adapter le mouvement de rotation de la turbine pour obtenir un couple suffisant pour soulever un poids de 50 g nécessite quelques considérations en matière de conception et d'ingénierie. Voici les étapes que vous pourriez suivre en classe pour créer un tel système :

1. **Comprendre le Besoin en Couple :**
    - Déterminez la quantité de couple nécessaire pour soulever un poids de 50 g. Cela dépendra de la configuration du système, notamment des poulies, des engrenages, et de la distance sur laquelle le poids doit être soulevé.
2. **Sélectionner ou Concevoir la Turbine :**
    - Choisissez ou concevez une turbine adaptée à vos besoins en couple. Une turbine plus grande avec plus de pales peut capturer plus d'énergie éolienne.
3. **Utiliser des Engrenages :**
    - Utilisez un système d'engrenages pour augmenter le couple. Un engrenage avec un grand nombre de dents relié à la turbine et un engrenage avec un petit nombre de dents relié à l'arbre de levage peuvent augmenter le couple.
    - Vous pouvez expérimenter avec différents rapports d'engrenage pour obtenir le couple désiré.
4. **Considérer l'Utilisation de Poulies :**
    - Un système de poulies peut également être utilisé pour augmenter le couple. Une poulie de grand diamètre sur la turbine et une poulie de petit diamètre sur l'arbre de levage peuvent également augmenter le couple.
5. **Tester et Calibrer :**
    - Testez votre système pour vous assurer qu'il fournit le couple nécessaire pour soulever le poids.
    - Apportez les ajustements nécessaires en changeant la taille des engrenages, des poulies, ou en modifiant la conception de la turbine.

Gardez à l'esprit que l'efficacité de ce système dépendra de nombreux facteurs, dont la vitesse et la constance du vent, l'efficacité de la turbine, la friction dans les engrenages ou les poulies, etc.

🔎**Investigation**

Dans un premier temps, demandez aux élèves de construire un système de poulie qui se connectera en sortie de la turbine.

Construire un système de poulies pour lever un poids de 50 g à partir d'une turbine à vent nécessite quelques considérations spécifiques. Voici un guide étape par étape pour construire un système de poulies :

**Matériaux nécessaires**

- Poulies de différents diamètres (disponibles dans les kits de science ou fabriquées à partir de bobines, de roues, etc.)
- Corde fine ou fil solide
- Support (peut être une structure en bois ou en métal)
- Poids de 50 g (ou un objet de ce poids)
- Crochet ou petit conteneur pour contenir le poids
- Turbine à vent ou autre source de rotation

**Étapes de construction**

1. **Déterminer le Rapport de Poulie Nécessaire** :
    - Calculez le couple nécessaire pour soulever le poids.
    - Déterminez le rapport de poulie requis pour atteindre ce couple. Cela dépendra de la force de sortie de la turbine.
2. **Choisir les Poulies** :
    - Sélectionnez une poulie de grand diamètre pour la turbine et une poulie de petit diamètre pour le mécanisme de levage. Le choix dépendra du rapport calculé à l'étape 1.
3. **Installer la Poulie de la Turbine** :
    - Fixez la poulie de grand diamètre à l'arbre de sortie de la turbine.
4. **Construire le Support** :
    - Créez ou choisissez un support solide pour tenir la poulie de levage et le poids.
    - Installez une poulie de petit diamètre sur le support à une hauteur appropriée pour le levage.
5. **Installer la Corde** :
    - Attachez une extrémité de la corde à la poulie de la turbine et l'autre extrémité à la poulie de levage.
    - Assurez-vous que la corde est tendue et qu'elle s'enroule correctement autour des poulies.
6. **Attacher le Poids** :
    - Fixez le crochet ou le petit conteneur à la corde près de la poulie de levage.
    - Placez le poids dans le crochet ou le conteneur.
7. **Tester le Système** :
    - Activez la turbine et observez comment le système de poulies soulève le poids.
    - Ajustez au besoin, en modifiant les diamètres des poulies, en retendant la corde, ou en réalignant les poulies.

**Considérations**

- Le système peut nécessiter un réglage fin et des ajustements pour fonctionner efficacement.
- Si le couple nécessaire est trop élevé pour une seule étape de poulie, un système de plusieurs poulies peut être utilisé.
- La friction peut réduire l'efficacité du système, alors choisissez des poulies et des cordes qui minimisent la friction.
- La sécurité doit être une considération clé. Assurez-vous que toutes les parties du système sont solidement fixées et que les élèves comprennent les précautions nécessaires lors de l'utilisation du système.

En guidant les élèves à travers cette construction, vous pouvez enseigner des concepts tels que les rapports mécaniques, le travail, la puissance, la conversion de l'énergie, et les principes de conception et d'ingénierie. C'est également une excellente opportunité pour encourager la pensée critique et la résolution de problèmes, car les élèves peuvent avoir besoin de résoudre des défis inattendus pour faire fonctionner leur système de poulies comme prévu.

💬 **Débriefing**

En engageant les élèves dans cette tâche, vous pouvez couvrir de nombreux sujets éducatifs tels que la mécanique, l'énergie renouvelable, la physique, l'ingénierie, et la résolution de problèmes. Cela encourage également la pensée critique et l'innovation, car les élèves devront expérimenter et ajuster leurs conceptions pour atteindre l'objectif spécifique de soulever un poids de 50 g.

L'adaptation d'une turbine pour soulever un poids peut nécessiter plusieurs itérations et ajustements pour obtenir les résultats souhaités.

### Étape 5 - Intégration d’un système de levage

🧭**Orientation**

La dernière étape de la machine est de transformer le mouvement de rotation en mouvement linéaire vertical. Ce dernier système est celui qui lèvera le poids de 50 g. Les étages précédents devront peut-être être adaptés si besoin. La mise en œuvre des principes retenus va amener à découvrir des difficultés pratiques qui produisent des pertes d'énergie et empêchent de dépasser la puissance nécessaire pour soulever le poids.

💡**Conceptualisation**

Pour lever le poids final, il va falloir transformer le mouvement de rotation en mouvement linéaire. Il existe plusieurs systèmes pour faire cela tel qu’un treuil, une crémaillère et un pignon ou même un autre système de poulies :

1. **Mécanisme de Treuil :**
    - **Utiliser un Treuil** : En enroulant une corde autour d'un tambour connecté à l'arbre intermédiaire, vous pouvez convertir le mouvement rotatif en mouvement linéaire.
    - **Attacher le Poids** : Le poids est attaché à l'extrémité libre de la corde.
    - **Rotation du Treuil** : Lorsque le tambour tourne, la corde s'enroule, soulevant le poids.
2. **Mécanisme de Crémaillère et Pignon :**
    - **Crémaillère** : Une crémaillère est une barre avec des dents qui peut se déplacer linéairement.
    - **Pignon** : Le pignon est un petit engrenage fixé à l'arbre intermédiaire qui s'engage avec la crémaillère.
    - **Levage du Poids** : Lorsque le pignon tourne, il déplace la crémaillère (et le poids attaché) vers le haut ou vers le bas.
3. **Système de Poulies :**
    - **Utiliser des Poulies** : Comme décrit précédemment, un système de poulies avec des poulies de différents diamètres peut être utilisé pour convertir le mouvement rotatif en mouvement linéaire pour lever le poids.

🔎**Investigation**

Construire un mécanisme de treuil pour convertir le mouvement rotatif en mouvement linéaire afin de soulever un poids de 50 g est un projet passionnant qui peut être réalisé avec des matériaux relativement simples. Voici un guide étape par étape pour construire le mécanisme de treuil :

**Matériaux nécessaires**

- Un tambour (peut être une bobine ou un cylindre, comme une bobine de fil vide)
- Corde fine ou fil solide (capable de supporter 50 g)
- Arbre (peut être un boulon ou une tige)
- Support (peut être une structure en bois ou en métal)
- Poids de 50 g (ou un objet de ce poids)
- Crochet ou petit conteneur pour contenir le poids
- Moyen de fixer le tambour à l'arbre (peut être un collier de serrage ou de la colle forte)

**Étapes de construction**

1. **Préparation de l'Arbre** :
    - Choisissez un arbre de taille appropriée pour s'adapter à votre tambour.
    - Placez l'arbre dans le support afin qu'il puisse tourner librement.
2. **Fixation du Tambour** :
    - Centrez le tambour sur l'arbre.
    - Fixez le tambour à l'arbre à l'aide d'un collier de serrage, de la colle forte ou d'un autre moyen de fixation. Assurez-vous qu'il tourne librement avec l'arbre.
3. **Installation de la Corde** :
    - Attachez une extrémité de la corde au tambour, en la fixant avec du ruban adhésif ou en l'enroulant plusieurs fois.
    - Assurez-vous que la corde est tendue et qu'elle s'enroule correctement autour du tambour lorsqu'il tourne.
4. **Attacher le Poids** :
    - Fixez un crochet ou un petit conteneur à l'extrémité libre de la corde.
    - Placez le poids de 50 g dans le crochet ou le conteneur.
5. **Tester le Mécanisme de Treuil** :
    - Faites tourner le tambour en utilisant l'arbre de sortie de la turbine (ou manuellement pour tester).
    - Observez comment le tambour enroule la corde et soulève le poids.
    - Ajustez au besoin, en réalignant le tambour, en retendant la corde ou en modifiant le système de fixation.

**Considérations**

- La taille et la forme du tambour doivent être choisies en fonction du poids à lever et du couple disponible. Un tambour plus grand nécessitera plus de couples mais enroulera la corde plus rapidement.
- La friction entre le tambour et l'arbre doit être minimisée pour une efficacité maximale. Utilisez des matériaux et des fixations qui permettent une rotation douce.
- La sécurité doit être une considération clé, surtout si le système est utilisé par des élèves. Assurez-vous que toutes les parties sont solidement fixées et que les précautions nécessaires sont prises lors de l'utilisation du mécanisme de treuil.

En guidant les élèves à travers cette construction, vous pouvez enseigner des concepts tels que les machines simples, le travail, la puissance, la conversion de l'énergie, et les principes de conception et d'ingénierie. C'est également une excellente opportunité pour encourager la pensée critique et la résolution de problèmes.

💬 **Débriefing**

La clé de la conversion réussie du mouvement rotatif en mouvement de levage est le choix et la conception corrects du système mécanique, qui dépendent du couple et de la vitesse nécessaires pour lever le poids de 50 g.

En expérimentant avec différents mécanismes et ratios, les élèves peuvent apprendre des principes importants de mécanique, d'ingénierie, et de résolution de problèmes, et comprendre comment l'énergie éolienne peut être utilisée pour effectuer un travail mécanique utile.


---

## Fiches programmation

### PROG15-TDL-1 — Fabriquer un anémomètre



🛠️**Construire**

**Construire l’anémomètre**

Pour réaliser cette activité et mesurer la vitesse du vent à l’aide d’un anémomètre nous aurons besoin de comprendre le mouvement circulaire uniforme.

La première chose à faire est de construire un anémomètre. Nous avons choisi un anémomètre à 3 coupelles dont le principe est assez simple :

Pour optimiser l’efficacité de l’anémomètre il est important que celui-ci soit bien équilibré (pas de coupelle plus lourde que les autres et frottements les plus faibles possibles).

Pour obtenir un fichier 3d permettant d’imprimer les coupelles, il suffit de suivre ce lien : [https://www.tinkercad.com/things/2CLLBRxu49Z](https://www.tinkercad.com/things/2CLLBRxu49Z)

![anenometre.png](images/anenometre.png)

Nous utilisons également une tige métallique de 2 mm de diamètre pour l’axe que nous avons limée en pointe pour minimiser le contact avec la table sur laquelle elle est posée. Nous avons soudé le contact reed (qui est fragile) avec des fils d’une longueur de 30 cm environ pour avoir de la manœuvre et avons pris un aimant néodyme plat (10 mm de diamètre) :

![Untitled](images/Untitled.png)

![Untitled](images/Untitled 1.png)

Nous assemblons les coupelles avec l’articulation centrale :

En prenant 3 pics à brochettes coupés à bonne dimension (environ10 cm), nous assemblons l’anémomètre en trépied. Nous avons également fixé l’aimant sur un des bras de l’anémomètre (à 3,5 cm du centre). Le contact reed est fixé sur un cube en bois avec du papier collant et ajusté à la bonne hauteur (maximum 5 mm de l’aimant). Une fois le montage terminé, nous fixons l’anémomètre et le cube de bois pour que le tout soit bien fixe.

Le contact reed en gros plan :

![Untitled](images/Untitled 2.png)

![Untitled](images/Untitled 3.png)

![Untitled](images/Untitled 4.png)

*Remarque : Ne négligez pas l’étape de montage qui est délicate mais essentielle au bon fonctionnement de l’anémomètre !!!*

Il existe plusieurs types d’anémomètres et de systèmes pour calculer la vitesse du vent. Nous avons pris le parti d’un anémomètre à coupelle que nous avons imprimé en 3d. Il est également possible de construire un anémomètre à coupelle avec des balles de Ping-Pong coupées en deux, des pics à brochette et un gobelet. Vous pouvez améliorer le système en mettant un roulement à billes (au niveau de l’articulation) pour diminuer les frottements.

- *Tutoriel anémomètre BEE-A-MAKER sur YouTube : [https://www.youtube.com/watch?v=LRwWcOVqflc](https://www.youtube.com/watch?v=LRwWcOVqflc)*
- *Autre anémomètre à imprimer en 3d : [https://www.thingiverse.com/thing:2771387/files](https://www.thingiverse.com/thing:4061735/files)*

Pour commencer, nous allons faire tourner l’anémomètre grâce au vent ou de façon manuelle et observer son comportement. Tourne-t-il à la même vitesse à l’intérieur ? À l’extérieur ? Vous pouvez souffler, pousser l’une des coupelles, ou encore courir avec l’anémomètre.

> ℹ️ Pour mesurer la période il nous faut un détecteur de passage. Nous avons choisi d’utiliser un détecteur à contact reed. Nous aurions pu également utiliser une barrière lumineuse ou autre. Un **interrupteur Reed** est un petit capteur constitué de deux lames conductrices sensibles à la présence d’un champ magnétique. À proximité d’un aimant, l’interrupteur se ferme et permet au courant électrique de passer.
>
> En pratique, l’interrupteur est attaché à la partie fixe de l’anémomètre et reste donc immobile, alors que l’aimant est fixé sur l’une des tiges de l’anémomètre.
>
> Pour assembler tous les éléments, nous commençons par mettre la partie mobile de l’anémomètre (rotor) sur un support stable (stator). Nous pouvons ensuite choisir une tige et y fixer un petit aimant grâce à une pastille adhésive. Enfin, pour connecter l’anémomètre, il nous faut installer le système Interrupteur Reed/ Breadbord/carte programmable à proximité de l’aimant.

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

Remarque *: la fonction « millis » donne le temps écoulé depuis le lancement du programme, il nous sert ici d’horloge.*

- *La fonction* pauseUntil(() => !(input.buttonD0.isPressed())) *permet de s’assurer que le contact n’est plus établi dans le contact reed. Sans cette fonction, nous pouvons avoir des temps parasites qui sont liés au fait que sur le temps d’une boucle (quelques dizaines de microsecondes) le contact est toujours établi.*

Pour connaître la vitesse, il nous suffit d’ajouter à notre programme, l’équation du mouvement circulaire uniforme expliquée au début de l’activité :

$$
v= (2.π.R)/T
$$

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

### PROG15-TDL-2 — Mesurer la vitesse du vent



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

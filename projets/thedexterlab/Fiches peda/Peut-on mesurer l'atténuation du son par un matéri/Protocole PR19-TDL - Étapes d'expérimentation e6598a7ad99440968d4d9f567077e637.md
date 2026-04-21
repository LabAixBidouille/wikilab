# Protocole PR19-TDL - Étapes d'expérimentation

### Étape 1 - Collecter des données

🧭**Orientation**

Comment déterminer le pouvoir d’isolation phonique des matériaux ? Pour pouvoir répondre à la question, il nous faut dans un premier temps pouvoir mesurer la “quantité” de son d’un endroit donné. Pour cela le plus simple est l’utilisation d’un microphone, avec lequel on obtiendra l’intensité du son. Afin de tester l’atténuation du son par différents matériaux, nous pouvons créer des boîtesbottes dans lesquelles nous enfermerons le microphone afin de faire les mesures.

Maintenant que nous avons les bases, il est possible de mettre en place notre expérience. Le but étant de connaître le “pouvoir” d’absorption du son d’un matériau, mais comment faire pour le mesurer ? Le plus simple reste de mesurer le bruit (intensité sonore) à l’intérieur et à l’extérieur de la boîte. Ainsi en faisant une simple différence entre les valeurs, il sera possible de déterminer l’atténuation du son.

Plusieurs hypothèses peuvent être formulées :

- Quelles sont les matières solides les plus isolantes ?
- Quelles sont les matières déformables les plus isolantes ?
- L’épaisseur a-t-elle un impact sur la capacité isolante d’un matériau ?
- La densité a-t-elle un impact sur la capacité isolante d’un matériau ?

Pour chacune de ces hypothèses, l’investigation devra commencer par mettre en place un protocole expérimental qui permettra de produire un ensemble de données mettant en jeu les grandeurs physiques correspondantes. L’analyse de ces données permettra de valider et/ou invalider l’hypothèse. Dans le cas de l’invalidation de l’hypothèse, il est important de bien expliquer l’impact du résultat négatif et aussi de l’interprétation.

💡**Conceptualisation**

Le son est une vibration qui se propage sous la forme d'une onde de pression audible, à travers un milieu de transmission tel qu'un gaz, un liquide ou un solide. Dans un milieu fluide compressible (l’air, par exemple), le son se déplace sous forme d’une onde, en revanche les objets solides vibrent pour transmettre un son (un diapason, par exemple). C’est donc pour cela que le son ne peut pas se propager dans le vide, car il n’y a pas de matière permettant son transport.

Le déplacement (et l’intensité) du son est dépendant du milieu dans lequel il évolue. Lorsque le milieu change (on parle alors de milieu hétérogène), le son se retrouve diffusé et atténué.

Pour mesurer l’intensité d’un son, il est courant d’utiliser le décibel (dB). Cette unité sert aussi pour quantifier l’atténuation d’un son. Le décibel est une unité logarithmique, ce qui signifie que si l’on mesure une première atténuation de 10 dB et une seconde de 20 dB, cette dernière ne sera pas 2 fois moins intense, mais 10 fois moins intense !

Pour comparer le pouvoir isolant des matériaux, nous allons utiliser un simple microphone et un son de référence. Plus précisément nous allons mesurer, avec le microphone, l’intensité du son dans l’air, sans isolant (ce sera notre valeur de référence). Puis en plaçant le microphone dans chacune des boites, nous mesurerons successivement les intensités. A partir de ces résultats nous pourrons comparer quels matériaux est le meilleur isolant phonique.

🔎**Investigation**

La carte programmable est l’élément principal de notre expérimentation, elle à pour rôle de récupérer les informations en provenance du microphone, ainsi que de l’émission du son.

La potence maintient le buzzer toujours à la même hauteur, permettant ainsi une répétabilité de l’expérience, et assuré la fiabilité de la mesure.

Le microphone est, lui aussi, placé au même endroit pour chaque mesure. Pour simplifier le processus, on peut utiliser deux microphones. Un sera dans la boite, l’autre à l’extérieur, de cette manière il y aura toujours un microphone témoin, pour nous donner la valeur de références. 

L’écran affiche la mesure durant l’expérimentation, nous permettant de noté les valeurs pour chacun des matériaux.

Durant l’expérience il est impératif que la pièce de l’expérience soit la plus silencieuse possible pour ne pas fausser les résultats.

<aside>
🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 1 - Mesurer l’intensité d’un son.**

[PROG19-TDL-1](https://www.notion.so/PROG19-TDL-1-336ab7f2dcc94f99a1f792fbe1e16102?pvs=21)

</aside>

💬**Débriefing**

A travers cette expérimentation nous avons appris à mesurer l’atténuation du son par un matériau. L’échelle des décibels nous à permis de quantifier ces valeurs, et de comparer les différents résultats. La mise en œuvre d’une démarche expérimentale systématique a permis de mesurer la capacité d’isolation phonique d’un matériau. Apprendre à bien isoler la variable à mesurer et la nécessité d’une valeur de référence, est essentiel pour obtenir des résultats valables et cohérents. Différents groupes d’élèves peuvent faire les mesures atténuation en modifiant la hauteur de la potence, mettant en évidence la répétabilité de l’expérience, en plus d’apporter de nouvelles données que nous pourrons confronter aux notre.

### Étape 2 - Afficher les données collectées

🧭**Orientation**

L’étape précédente, nous avons créer un système simple de mesure de l’absorption du son des matériaux. A présent il nous faut comparer ses valeurs, puis déterminer s’il existe des matériaux qui sont de meilleurs isolants phoniques que d’autres, et pourquoi.

💡**Conceptualisation**

La carte électronique utilisée pour l’expérience est dotée d’interfaces lui permettant de communiquer avec d’autres appareils. En utilisant cette capacité, les données de l’expérience vont être récupérées en vue d’une exploitation ultérieure.

Il y a deux manières de récupérer les données issues des capteurs, la première est d’utiliser l’affichage sur l’écran LCD pour faire des relevés manuels dans un cahier d’expérience. Relativement fastidieuse, cette étape de lecture par un être humain peut être automatisée en utilisant la communication “série” entre la carte programmable et l’ordinateur.

La communication série vient de la manière dont les données sont transmises les une après les autres sur la même ligne de transmission. Cette manière de communiquer est très simple à mettre en œuvre avec une carte programmable et elle constitue généralement la solution idéale pour récupérer l’ensemble des données produites par les capteurs pendant toute la durée de l’expérience.

🔎**Investigation**

Pour cette étape, vous pouvez découvrir la fiche d'activité "Affichage de texte avec un écran LCD" afin d'utiliser le petit écran LCD pour afficher les valeurs mesurées par les capteurs au fil de l’expérience.

Ensuite, vous pouvez utiliser un tableau sur papier pour noter les résultats relevés. Les résultats seront regroupés en deux colonnes : Le matériau utilisé (rien, bois, acier, mousse, …), et l’intensité sonore (en décibels).

| **Matériau utilisé** | **Intensité sonore** |
| --- | --- |
|  |  |
|  |  |

Maintenant que l’appareil de mesure ainsi que le moyen de récupérer ces résultats ont été créés, il est possible de procéder au relevé des mesures de l’expérience.

Le relevé manuel étant fastidieux, en se servant de la fiche d’activité “Collecter des données”, vous pouvez modifier le dispositif pour pouvoir récupérer les données directement dans un tableur à partir de l’éditeur MakeCode.

<aside>
🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 2 - Afficher les données sur un écran.**

[PROG19-TDL-2](https://www.notion.so/PROG19-TDL-2-2a1e028b401448d989d25866d20b4c84?pvs=21)

</aside>

💬**Débriefing**

Au terme de cette étape, plusieurs objectifs ont été atteints :

- Comprendre comment connecter la carte à d’autres périphériques
- Utiliser un programme pour afficher des données sur un écran LCD
- Récupérer les données d’une expérience en vue de leur analyse ultérieure

### Étape 3 - Analyser les données

🧭**Orientation**

Grâce aux étapes, il est possible de connaître la pouvoir d’absorption sonore des matériaux. Comment vérifier si l’hypothèse de départ ? Quels sont les outils nécessaires pour analyser les données ?

💡**Conceptualisation**

Pour valider l’hypothèse de départ, nous devons mettre les données en forme de manière à rendre visible le lien entre les grandeurs physiques. Suivant l’hypothèse de départ, l’analyse n’est pas la même.

- Dans le cas d’une expérimentation sur plusieurs matériaux, il n’y a qu’une seule grandeur : l’atténuation phonique d’un matériau. Une simple liste triée par atténuation (de la plus grande à la plus petite), devrait nous aider à trouver une réponse.
- Dans le cas d’une expérimentation sur l’épaisseur d’un matériau, il y a deux grandeurs, la manière la plus directe de visualiser les données est d’utiliser un nuage de points avec l’épaisseur du matériau en abscisse et l’atténuation en ordonnée.

Une fois le graphique tracé, selon son apparence, le tracé d’une droite de régression (même approximative) permettra de faire apparaître une première approximation de la loi qui relie l’épaisseur d’un matériau et son atténuation phonique.

🔎**Investigation**

La nature des données, représentant une évolution au cours de l’épaississement progressive du matériau, nous pouvons utiliser une représentation graphique, ce qui peut être fait dans un tableur (Excel, LibreOffice Calc, Google Sheet, …). De même il est possible d’utiliser un tel outil pour faire une liste des matériaux avec les atténuations mesurées pour les trier et les comparer entre eux.

Sur la représentation graphique, en choisissant la bonne échelle, il est possible de valider/invalider directement l’hypothèse de départ. Une fois ce résultat obtenu, il est intéressant de commencer à vérifier s’il semble y avoir une loi simple liant épaisseur et atténuation.

En regroupant les résultats avec les autres enquêteurs de la classe, la première approximation peut-être affinée et les limites commencer à apparaître. Utiliser l’approximation pour prédire l’atténuation sonore pour une épaisseur donnée en dehors de la plage de valeur retenue pour l’enquête et valider avec le dispositif si la prédiction est proche de la réalité.

Essayez d’approximer l’erreur maximale de la mesure de chaque capteur et vérifier l’impact sur la confiance des résultats de l’expérience.

Quelles sont les améliorations à apporter au protocole pour améliorer la qualité du résultat ? Y a-t-il d’autres grandeurs physiques qui pourraient interférer dans l’expérience ? Si oui comment éviter le phénomène ?

💬**Débriefing**

Durant l’analyse des données, la représentation visuelle a permis de mettre en évidence la validation/invalidation de l’hypothèse de départ. Au-delà de l’hypothèse, l’analyse des données permet d’extrapoler une première approximation de la loi sous-jacente. Le partage d’information avec d’autre enquêteur, permet de savoir si les résultats sont valides et la conclusion comparable. Ce partage et la comparaison des données issues d’expérience reproductible est l’un des fondements qui permet de s’assurer qu’un résultat est bien valide peu importe l’expérimentateur. C’est un prérequis important de la démarche scientifique qui permet de créer la confiance dans la validité des résultats.
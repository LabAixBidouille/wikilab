# La consommation de CO2 par les plantes a-t-elle un impact sur le pH ?

**Problématique :** Comment fonctionne la photosynthèse ?

> ℹ️ **Les plantes aquatiques jouent également un rôle important dans la régulation des niveaux de CO2. Elles utilisent la photosynthèse pour convertir le CO2 en matière végétale et en oxygène. Les plantes aquatiques, telles que les algues et les herbiers, peuvent être particulièrement efficaces pour absorber le CO2, car elles ont un accès constant à de l'eau et des nutriments. En plus de leur capacité à "emprisonner" du CO2, les plantes aquatiques peuvent également contribuer à la purification de l'eau en éliminant les contaminants.**

![DATA18_TDL.jpg](images/DATA18_TDL.jpg)

### Déroulé de l’activité

**Observation de l'impact des paramètres chimiques sur un écosystème fermé** : Plus d'un milliard de personnes ont peu ou pas d'accès à l'eau potable. Il existe un besoin d'eau désinfectée et potable, en particulier dans les régions en développement d'Afrique, d'Asie et d'Amérique du Sud, où l'eau est souvent contaminée par des bactéries et d'autres contaminants. Ce projet est une plateforme d'analyse de l'eau à code source ouvert basée sur un colorimètre numérique optique bricolé, fabriqué à partir de composants électroniques à code source ouvert et imprimables en 3d. En plus du matériel d'analyse, le dispositif effectuera une désinfection solaire de l'eau (SODIS) pour réduire la turbidité et éliminer la majeure partie de la pollution. Dispositif : Colorimètre, désinfection solaire de l'eau (SODIS), capteur de turbidité.

Ce protocole de recherche scientifique détaille les différentes étapes à suivre pour mesurer la consommation de CO2 par les plantes aquatiques en utilisant le pH comme paramètre. Tout d'abord, la collecte de données est primordiale pour comprendre comment mesurer indirectement la consommation de CO2 par les plantes en utilisant le pH. Ensuite, la conceptualisation permet de mieux comprendre les propriétés du CO2 et du pH, ainsi que le fonctionnement de la sonde pH. L'investigation implique la mise en place d'un dispositif expérimental pour mesurer la variation du pH en fonction du CO2 présent dans l'eau, avec l'utilisation d'un aquarium, d'une carte programmable, d'une lampe UV, d'une bouteille de CO2 et d'un capteur de pH. L'affichage de données est également important pour pouvoir suivre l'évolution des mesures, avec l'utilisation d'un petit écran LCD et la récupération des données dans un tableur. Enfin, l'analyse de données permet de valider ou invalider une hypothèse de départ, en utilisant une représentation visuelle des données et en extrapolant une première approximation de la loi sous-jacente. L'objectif ultime de ce protocole est de mieux comprendre comment les plantes aquatiques consomment le CO2, et comment cette consommation peut être mesurée indirectement en utilisant le pH.

### Compétences Mobilisées

Ce protocole mobilise plusieurs compétences, notamment :

- La collecte de données expérimentales, y compris la conception et la mise en place de l'expérience, ainsi que la mesure des variables pertinentes à l'aide d'instruments de mesure appropriés.
- L'analyse des données, y compris la représentation graphique des résultats, la mise en évidence de tendances et de corrélations, et l'extraction d'informations utiles à partir des données.
- La conceptualisation, c'est-à-dire la compréhension des concepts scientifiques sous-jacents, tels que le CO2, le pH et la photosynthèse, ainsi que la capacité à appliquer ces concepts à la conception et à la mise en place de l'expérience.
- La communication scientifique, y compris la capacité à rédiger des rapports scientifiques clairs et précis, à présenter des résultats de manière visuelle et compréhensible, et à collaborer avec d'autres scientifiques pour échanger des idées et des résultats.

Les disciplines associées à ce protocole incluent la biologie, la chimie, la physique et les mathématiques, ainsi que la communication scientifique et l'analyse des données.

### Matériel

- 1 carte programmable “STM32 IoT Node Board”
- 1 sonde de PH
- 1 capteur de conductivité
- 1 capteur de lumière
- 1 écran OLED (SSD1306)
- 1 breadboard
- Des câbles de connexion
- 1 câble USB - micro B
- 2 relais
- 1 source de lumière
- 1 diffuseur de CO2
- 1 aquarium
- 1 ensemble de plantes aquatiques

# LES RESSOURCES

### Expérimentation scientifique

[Protocole PR18-TDL - Étapes d'expérimentation](La%20consommation%20de%20CO2%20par%20les%20plantes%20a-t-elle%20un/Protocole%20PR18-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation%200df8536a76d7401ea68b327e84627ee3.md)


---

# Protocole PR18-TDL - Étapes d'expérimentation

### Étape 1 - Collecter des données

🧭**Orientation**

Comment mesurer la consommation de CO2 par les plantes ? Pour pouvoir répondre à cette question il faut mesurer la quantité de CO2 dans un milieu défini (dans l’eau par exemple), mais cette mesure reste assez complexe et les instruments de mesures sont particulièrement onéreux. Afin de mener notre enquête, nous allons devoir faire preuve d’ingéniosité, et faire une mesure indirecte du CO2. Un paramètre facilement mesurable et qui est impacté par de nombreux autres est le pH.

Maintenant que nous savons dans quelle direction chercher, mettons en place notre expérimentation. Tout d’abord il nous faudra un aquarium, en contrôlant l’apport de CO2 nous pourrons faire nos mesures à l’aide d’une sonde pH afin de comprendre son évolution durant la journée.

L’hypothèse à formuler par les élèves pourrait être l’une des suivantes :

- La journée, Le pH augmente durant la consommation de CO2 par les plantes
- La journée, le pH diminue durant la consommation de CO2 par les plantes
- La nuit, le pH augmente durant la production de CO2 par les plantes
- La nuit, le pH diminue durant la production de CO2 par les plantes

Pour chacune de ces hypothèses, l’investigation devra commencer par mettre en place un protocole expérimental qui permettra de produire un ensemble de données mettant en jeu les grandeurs physiques correspondantes. L’analyse de ces données permettra de valider et/ou invalider l’hypothèse. Dans le cas de l’invalidation de l’hypothèse, il est important de bien expliquer l’impact du résultat négatif et aussi de l’interprétation.

💡**Conceptualisation**

Le CO2, plus précisément $CO_2$, est une molécule composée de deux atomes oxygène et d’un atome de carbone. On lui donne également le nom de “dioxyde de carbone” ou encore “gaz carbonique”. Dans des conditions de température et de pression normales, c’est un gaz incolore, inodore et à la saveur piquante. Lorsque celui-ci se retrouve dans l’eau et qu’il est exposé aux rayonnements solaires (rayons UV), il se dissout.

Le pH, ou potentiel Hydrogène, est la mesure de l’acidité ou de la basicité d’une solution. Il représente la concentration d’ions hydrogène (H+). Le pH peut être divisé en trois catégories :

- pH < 7 : La solution est acide (plus le pH est petit, plus l’acidité est importante)
- pH = 7 : La solution est neutre (l’eau pure, par exemple)
- pH > 7 : La solution est basique (plus le pH est grand, plus la basicité est importante)

Lors de la dissolution du CO2, un atome d’hydrogène “s’arrache” de l’eau ($H_2O$) est se retrouve à l’état d’ion (H+). La sonde pH peut ainsi en mesurer la quantité. Plus il y a d’ions plus la solution sera acide (pH faible), à l’inverse moins il y a d’ions plus la solution sera basique (pH élevé).
Par extension, plus il y aura de CO2 dans une solution plus cette dernière sera acide, et inversement.

La sonde pH, en simplifiant, est composée de deux tubes imbriqués l’un dans l’autre. Le premier contient une solution de référence avec un pH de 7. Le second est rempli d’une solution dont le pH varie en fonction de la solution dans laquelle la sonde sera plongée. Ce fonctionnement nécessite que la sonde du pH-mètre (appareil mesurant le pH) soit calibrée avant chaque expérience, car au fil des utilisations la solution du second tube se sature, et sa valeur de pH se modifie, impactant ainsi les calculs pour la mesure du pH. Il faut donc recalibrer le pH-mètre, afin d’obtenir des valeurs correctes et cohérentes pour chaque expérience. De même, la sonde, lorsque non utilisée, doit être stockée dans une solution recommandée par le constructeur, pour désaturer l’électrode de mesure.

Maintenant que nous avons les connaissances nécessaires, nous pouvons préparer notre investigation.

🔎 **Investigation**

Dans un premier, familiarisons-nous avec les différents éléments mis à notre disposition.

L’aquarium est l’élément principal de notre expérience. En le remplissant d’eau (de préférence d’eau déminéralisée) et en y plaçant des plantes aquatiques, nous obtenons notre sujet d’expérimentation.

La carte programmable est le cerveau de l’enquête. C’est elle qui contrôle les paramètres comme la température et la lumière en agissant sur les relais. C’est elle aussi qui s’occupera de lire les capteurs à intervalle régulier pour produire les données à analyser.

Une lampe UV placée au-dessus de notre aquarium jouera le rôle du soleil, et nous permettra de simuler le cycle jour/nuit.

La bouteille de CO2, équipée de sa valve (solénoïde), permettra le contrôle d’apport de CO2 dans notre bac d’eau.

Le capteur de pH fera les mesures nous permettant de déduire la concentration de CO2.

Le capteur de lumière mesure la quantité de lumière auxquelles les plantes sont exposées durant l’expérimentation.

L’écran affichera les dernières mesures afin de vérifier la cohérence du déroulement de l’expérimentation et de visualiser l’évolution du pH au cours de l’expérience.

Une fois les branchements faits, l’expérimentation peut être démarrée. En appuyant sur le bouton de la carte programmable, le relais de la lumière et la valve du CO2 s’enclenchent. Toutes les minutes, une mesure du pH et de la luminosité sera enregistrée. Lorsque l’on aura simulé (ou attendu) une journée entière, on pourra stopper l’expérience.

💬 **Debrief**

À travers la mise en place de l’expérimentation, il a été découvert comment isoler la variable à étudier pour mesurer une grandeur physique de manière indirecte. Le contrôle de la lumière, et de l’apport de CO2, ainsi que l’utilisation d’eau pure (déminéralisé), assure que les variations de pH ne sont du qu’à la variation de CO2. La reproduction de l’expérience par plusieurs élèves avec des conditions initiales différentes ou méthode d’apport de CO2 différentes montreront la répétabilité de l’expérience.

### Étape 2 - Afficher les données collectées

🧭**Orientation**

L’étape précédente a permis de créer un système de mesure simple permettant de mesurer la variation du pH en fonction de CO2 présent dans l’eau. À présent, nous allons déterminer comment le CO2 (ou pH) évolue suivant le cycle de vie des plantes aquatiques. À partir de ces données, il devrait être possible de faire apparaître une approximation de la consommation et/ou production de CO2 des plantes, et son impact sur le pH.

💡 **Conceptualisation**

La carte électronique utilisée pour l’expérience est dotée d’interfaces lui permettant de communiquer avec d’autres appareils. En utilisant cette capacité, les données de l’expérience vont être récupérées en vue d’une exploitation ultérieure.

Il y a deux manières de récupérer les données issues des capteurs, la première est d’utiliser l’affichage sur l’écran LCD pour faire des relevés manuels dans un cahier d’expérience. Relativement fastidieuse, cette étape de lecture par un être humain peut être automatisée en utilisant la communication “série” entre la carte programmable et l’ordinateur.

La communication série vient de la manière dont les données sont transmises les une après les autres sur la même ligne de transmission. Cette manière de communiquer est très simple à mettre en œuvre avec une carte programmable et elle constitue généralement la solution idéale pour récupérer l’ensemble des données produites par les capteurs pendant toute la durée de l’expérience.

🔎 **Investigation**

Pour cette étape, vous pouvez découvrir la fiche d'activité "Affichage de texte avec un écran LCD" afin d'utiliser le petit écran LCD pour afficher les valeurs mesurées par les capteurs au fil de l’expérience.

Ensuite, vous pouvez utiliser un tableau sur papier pour noter les résultats relevés. Les résultats seront regroupés en trois colonnes : le temps depuis le début de l’expérience (en minutes), la valeur du pH et la quantité de lumière (en lux).

| **Temps depuis le début de l’expérience** | **pH de l’eau** | **La quantité de lumière en Lux** |
| --- | --- | --- |
|  |  |  |
|  |  |  |

Maintenant que l’appareil de mesure ainsi que le moyen de récupérer ces résultats ont été créés, il est possible de procéder au relevé des mesures de l’expérience.

Le relevé manuel étant fastidieux, en se servant de la fiche d’activité “Collecter des données”, vous pouvez modifier le dispositif pour pouvoir récupérer les données directement dans un tableur à partir de l’éditeur MakeCode.

💬 **Débriefing**

Au terme de cette étape, plusieurs objectifs ont été atteints :

- Comprendre comment connecter la carte à d’autres périphériques
- Utiliser un programme pour afficher des données sur un écran
- Récupérer les données d’une expérience en vue de leur analyse ultérieure

### Étape 3 - Analyser les données

🧭**Orientation**

Grâce aux étapes précédentes, il est possible de connaître l’impact sur le pH par les plantes suivant la luminosité (consommation/production de CO2). Comment vérifier si l’hypothèse de départ ? De quels outils nécessaires pour analyser nos données ?

💡**Conceptualisation**

Pour valider l’hypothèse, les données doivent être mises en forme de telle sorte à rendre visible le lien entre les grandeurs physiques de l’expérience. N’ayant que deux données, en plus du temps, la manière la plus directe de visualiser les données est d’utiliser un nuage de point utilisant le temps depuis le début de l’opération en abscisse, la luminosité et le pH en ordonnée (avec deux couleurs différentes).

Une fois le graphique tracé, selon son apparence, le tracé deux droites de régression (même approximative) pour la période de “jour” et un autre pour la période de “nuit”, permettra de faire apparaître une première approximation de la loi qui relie la consommation de CO2 et le pH.

🔎 **Investigation**

La nature des données, représentant une évolution au cours du temps, nous pouvons utiliser une représentation graphique, ce qui peut être fait dans un tableur (Excel, LibreOffice Calc, Google Sheet, …).

Sur la représentation graphique, en choisissant la bonne échelle, il est possible de valider/invalider directement l’hypothèse de départ. Une fois ce résultat obtenu, il est intéressant de commencer à vérifier s’il semble y avoir une loi simple liant la vitesse du son à la température.

En regroupant les résultats avec les autres enquêteurs de la classe, la première approximation peut-être affinée et les limites commencer à apparaître. Utiliser l’approximation pour prédire la variation de pH pour une journée/nuit plus longue que celle simulée pour l’enquête et valider avec le dispositif si la prédiction est proche de la réalité.

Essayez d’approximer l’erreur maximale de la mesure de chaque capteur et vérifier l’impact sur la confiance des résultats de l’expérience.

Quelles sont les améliorations à apporter au protocole pour améliorer la qualité du résultat ? Y a-t-il d’autres grandeurs physiques qui pourraient interférer dans l’expérience ? Si oui comment éviter le phénomène ?

💬 **Débriefing**

Durant l’analyse des données, la représentation visuelle a permis de mettre en évidence la validation/invalidation de l’hypothèse de départ. Au-delà de l’hypothèse, l’analyse des données permet d’extrapoler une première approximation de la loi sous-jacente. Le partage d’information avec d’autre enquêteur, permet de savoir si les résultats sont valides et la conclusion comparable. Ce partage et la comparaison des données issues d’expérience reproductible est l’un des fondements qui permet de s’assurer qu’un résultat est bien valide peu importe l’expérimentateur. C’est un prérequis important de la démarche scientifique qui permet de créer la confiance dans la validité des résultats.

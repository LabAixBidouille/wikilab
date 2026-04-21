# Protocole PR11-TDL - Étapes d'expérimentation

### Étape 1 - Collecter des données

🧭**Orientation**

Comment vérifier si la température à un impact sur la vitesse du son dans l’air ? Pour essayer de répondre à cette question, il faut dans un premier temps maîtriser la température du milieu d’expérimentation. Le plus simple pour cela est de faire l’expérience dans une enceinte assez petite pour pouvoir la réchauffer. La chaleur ayant la mauvaise habitude de s’échapper, l’utilisation d’une boîte isolante facilitera grandement l’expérience en évitant des variations de température trop rapides rendant la régulation difficile.

Une fois l’enceinte à température contrôlée à disposition, il faut mettre en place une expérience permettant de mesurer la vitesse du son. La vitesse étant le rapport d’une distance par un temps, comment faire pour la calculer ? Le plus simple pour cela est de fixer l’une des deux grandeurs et de mesurer la seconde. Dans le cas de cette expérience, il sera plus simple de fixer la distance et de mesurer le temps que mettra l’onde sonore pour faire le déplacement.

L’hypothèse à formuler par les élèves pourrait être l’une des suivantes :

- La vitesse du son varie en fonction de la température
- La vitesse du son ne varie pas en fonction de la température
- La vitesse du son augmente quand la température augmente
- La vitesse du son diminue quand la température augmente

Pour chacune de ces hypothèses, l’investigation devra commencer par mettre en place un protocole expérimental qui permettra de produire un ensemble de données mettant en jeu les grandeurs physiques correspondantes. L’analyse de ces données permettra de valider et/ou invalider l’hypothèse. Dans le cas de l’invalidation de l’hypothèse, il est important de bien expliquer l’impact du résultat négatif et aussi de l’interprétation de la contraposée.

💡**Conceptualisation**

Le son est une vibration qui se propage sous la forme d'une onde de pression audible, à travers un milieu de transmission tel qu'un gaz, un liquide ou un solide. La vitesse du son est la distance parcourue par unité de temps par un son lorsqu'il se propage. Dans le langage courant, la vitesse du son fait généralement référence à la vitesse des ondes sonores dans l'air dans des conditions “normales”.

La vitesse du son est dépendante du milieu dans lequel elle évolue. Par exemple, dans une eau à température ambiante, le son se déplace à une vitesse de 1 500 m/s. De manière générale, tout ce qui va faire changer la densité du milieu va modifier la vitesse du son. La température est connue pour dilater l’air et le rendre plus léger et moins dense (comme dans une montgolfière). Cela devrait donc avoir un impact sur la vitesse du son.

Nous allons mesurer la vitesse du son dans l'air à l'aide d'un dispositif simple qui utilise la capacité d’un son à rebondir sur les obstacles qu’il rencontre. Ce dispositif, appelé capteur à ultrason, émet une onde sonore et reçoit ensuite l’écho lorsque l’onde rebondit contre un obstacle. Généralement on utilise ce capteur pour mesurer la distance mais en réalité, il ne mesure que la durée entre l’émission d’un son et la réception de son écho.

Dans le cas de cette expérience, la distance étant fixe, en mesurant le temps que met l’écho à revenir, on peut déduire la vitesse à laquelle l’onde a voyagé. Les ultrasons sont des ondes sonores dont la fréquence est supérieure à 20 000 Hz (ou 20 kHz). Ils ne sont pas différents du son "normal" (audible) dans leurs propriétés physiques, sauf que les humains ne peuvent pas les entendre. Ainsi, pendant nos expériences sur le son et nos mesures du temps de déplacement d’une onde sonore, nous n'entendrons rien !

Le capteur de distance à ultrasons HC-SR04 se compose de deux transducteurs à ultrasons. L'un agit comme un émetteur qui convertit le signal électrique en impulsions sonores ultrasoniques de 40 kHz. Le récepteur écoute les impulsions transmises. Dès qu’il reçoit l’écho, il produit une impulsion de sortie dont la durée est proportionnelle au temps mis entre l’émission et la réception du signal.

[https://whimsical.com/schema-protocol-vitesse-son-86NadodgpaPCGMTvUNvUpV](https://whimsical.com/schema-protocol-vitesse-son-86NadodgpaPCGMTvUNvUpV)

🔎 **Investigation**

Dans un premier temps, commençons par nous familiariser avec les différents éléments mis à disposition.

La carte programmable est l’élément central, c’est elle qui va récupérer les données des deux capteurs (température et ultrason), contrôler le tapis chauffant pour faire varier la température et afficher les données utiles pendant l’expérience.

Le capteur ultrason va mesurer le temps que met le son (l’onde sonore) pour faire l’aller-retour dans la boîte. La dimension de la boîte sera à mesurer le plus précisément possible, car c’est à partir de cette grandeur que va être déterminée la vitesse du son.

Le thermomètre permet de connaître la température pendant l’expérience. Il est très important de conserver ces deux données ensemble pour valider si la température a un impact sur la vitesse du son.

Le tapis chauffant est là pour augmenter progressivement la température à l’intérieur de la boîte.

L’écran affichera les dernières mesures, pour vérifier la cohérence du déroulement de l’expérimentation, et visualiser si la vitesse du son est modifiée au cours de l’expérience.

Une fois les branchements faits, l’expérimentation peut être démarrée. En appuyant sur le bouton de la carte programmable, le relais s’enclenche, et le tapis commence à chauffer. Toutes les minutes, une mesure de la température et du temps de propagation seront enregistrés. Lorsque la température finale sera atteinte, on pourra arrêter le système et récupérer les données pour les analyser.

<aside>
🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 1 - Mesurer la variation de la vitesse du son en fonction de la température.**

[PROG11-TDL-1](https://www.notion.so/PROG11-TDL-1-69290f722a654d5b8efea135df44af1f?pvs=21)

</aside>

💬 **Débriefing**

À travers la mise en place de l’expérimentation, il a été découvert comment isoler la variable à étudier pour mesurer une grandeur composite. La taille fixe de la boîte et son isolation thermique nous assurent que les variations dans les mesures du temps de déplacement du son sont dues uniquement à l’élévation de la température et non à un autre phénomène. La reproduction de l’expérience par plusieurs élèves avec des conditions initiales différentes ou une montée en température différentes montreront la répétabilité de l’expérience.

### Étape 2 - Afficher les données collectées

🧭**Orientation**

L’étape précédente a permis de créer un système de mesure simple permettant de mesurer la vitesse du son dans de l’air en faisant varier la température. À présent, nous allons déterminer comment la vitesse du son évolue par rapport à la température de l’air. À partir de ces données, il devrait être possible de faire apparaître une approximation de la vitesse du son en fonction de la température.

💡**Conceptualisation**

La carte électronique utilisée pour l’expérience est dotée d’interfaces lui permettant de communiquer avec d’autres appareils. En utilisant cette capacité, les données de l’expérience vont être récupérées en vue d’une exploitation ultérieure.

Il y a deux manières de récupérer les données issues des capteurs, la première est d’utiliser l’affichage sur l’écran LCD pour faire des relevés manuels dans un cahier d’expérience. Relativement fastidieuse, cette étape de lecture par un être humain peut être automatisée en utilisant la communication “série” entre la carte programmable et l’ordinateur.

La communication série vient de la manière dont les données sont transmises les une après les autres sur la même ligne de transmission. Cette manière de communiquer est très simple à mettre en œuvre avec une carte programmable et elle constitue généralement la solution idéale pour récupérer l’ensemble des données produites par les capteurs pendant toute la durée de l’expérience.

🔎**Investigation**

Pour cette étape, vous pouvez découvrir la fiche d'activité "Affichage de texte avec un écran LCD" afin d'utiliser le petit écran LCD pour afficher les valeurs mesurées par les capteurs au fil de l’expérience.

Ensuite, vous pouvez utiliser un tableau sur papier pour noter les résultats relevés. Les résultats seront regroupés en trois colonnes : le temps depuis le début de l’expérience (en minutes), la température de l’air (en degrés Celsius), et la vitesse du son (en mètres par seconde).

| **Temps depuis le début de l’expérience** | **Température de l’air en degrés Celsius** | **La vitesse du son en mètres par seconde** |
| --- | --- | --- |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |

Maintenant que l’appareil de mesure ainsi que le moyen de récupérer ces résultats ont été créés, il est possible de procéder au relevé des mesures de l’expérience.

💬 **Débriefing**

Au terme de cette étape, plusieurs objectifs ont été atteints :

- Comprendre comment connecter la carte à d’autres périphériques
- Utiliser un programme pour afficher des données sur un écran LCD
- Récupérer les données d’une expérience en vue de leur analyse ultérieure

### Étape 3 - Analyser les données

🧭**Orientation**

Grâce aux étapes précédentes, il est possible de connaître la mesure du temps de propagation (et donc la vitesse du son) en fonction de la valeur de la température. Comment vérifier si l’hypothèse de départ est vérifiée ? De quels outils nécessaires pour analyser nos données ?

💡**Conceptualisation**

Pour valider l’hypothèse, les données doivent être mises en forme de telle sorte à rendre visible le lien entre les grandeurs physiques de l’expérience. N’ayant que deux données, la manière la plus directe de visualiser les données est d’utiliser un nuage de point utilisant la température en abscisse et la vitesse en ordonnée.

Une fois le graphique tracé, selon son apparence, le tracé d’une droite de régression (même approximative) permettra de faire apparaître une première approximation de la loi qui relie la vitesse du son à la température.

🔎**Investigation**

Les données représentent une évolution de la vitesse du son au cours de la montée progressive de la température. Nous pouvons utiliser une représentation graphique, ce qui peut être fait dans un tableur (Excel, LibreOffice Calc, Google Sheet, …).

Sur la représentation graphique, en choisissant la bonne échelle, il est possible de valider/invalider directement l’hypothèse de départ. Une fois ce résultat obtenu, il est intéressant de commencer à vérifier s’il semble y avoir une loi simple liant la vitesse du son à la température.

En regroupant les résultats avec les autres enquêteurs de la classe, la première approximation peut-être affinée et les limites commencer à apparaître. Utiliser l’approximation pour prédire la vitesse du son à une température donnée en dehors de la plage de valeur retenue pour l’enquête et valider avec le dispositif si la prédiction est proche de la réalité.

Essayez d’approximer l’erreur maximale de la mesure de chaque capteur et vérifier l’impact sur la confiance des résultats de l’expérience.

Quelles sont les améliorations à apporter au protocole pour améliorer la qualité du résultat ? Y a-t-il d’autres grandeurs physiques qui pourraient interférer dans l’expérience ? Si oui comment éviter le phénomène ?

💬 **Débriefing**

Durant l’analyse des données, la représentation visuelle a permis de mettre en évidence la validation/invalidation de l’hypothèse de départ. Au-delà de l’hypothèse, l’analyse des données permet d’extrapoler une première approximation de la loi sous-jacente. Le partage d’information avec d’autres enquêteurs permet de savoir si les résultats sont valides et les conclusions comparables. Ce partage et la comparaison des données issues d’expériences reproductibles est l’un des fondements qui permet de s’assurer qu’un résultat est bien valide peu importe l’expérimentateur. C’est un prérequis important de la démarche scientifique qui permet de créer la confiance dans la validité des résultats.
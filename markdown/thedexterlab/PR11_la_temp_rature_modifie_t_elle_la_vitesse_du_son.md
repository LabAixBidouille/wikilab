# La température modifie-t-elle la vitesse du son ?

**Problématique :** Est-il possible de mesurer la variation de la vitesse du son en fonction de la température ambiante ?

> ℹ️ **La vitesse du son est affectée par les conditions environnementales dans lesquelles il se propage. Cela peut inclure des facteurs tels que la pression, l'humidité et la composition chimique. Il est important de prendre en compte les impacts environnementaux sur la vitesse du son dans diverses applications, telles que la communication acoustique, l'acoustique et la météorologie. En sachant comment l'environnement peut affecter la vitesse du son, on peut mieux comprendre et prévoir les propriétés acoustiques d'un milieu donné. On peut avoir l’impression dans notre quotidien que la vitesse du son dans l’air est une grandeur connue et constante. Dans les calculs, on l’approxime à 340 m/s. Cette valeur est-elle toujours valable ? Quel est l’impact de l’environnement sur la vitesse du son ? Cette activité vise à valider si la température a un impact sur la vitesse du son et le cas échéant essayer d’approximer la loi sous-jacente par une approximation affine.**

![DATA11_TDL.jpg](images/DATA11_TDL.jpg)

### Déroulé de l’activité

Ce protocole fournit un guide détaillé pour mener une expérience scientifique sur l'impact de la température sur la vitesse du son dans l'air. Le protocole expérimental inclut la collecte de données à l'aide de capteurs de température et de vitesse du son, ainsi que l'utilisation d'un écran LCD pour afficher et d'un tableur pour analyser les données. Les résultats sont utilisés pour déterminer une approximation de la loi reliant la vitesse du son à la température, et pour valider ou invalider l'hypothèse selon laquelle la vitesse du son varie en fonction de la température. Les étapes de l'expérience comprennent :

- La configuration de l'enceinte isolée
- La mesure de la vitesse du son avec un capteur à ultrasons
- Le chauffage de l'enceinte avec un tapis chauffant
- L'affichage des dernières mesures sur un écran
- La récupération des données via une communication série
- L'analyse des données avec un tableur.

Le protocole souligne également l'importance de la reproductibilité et du partage des données pour valider les résultats de l'expérience scientifique.

### Compétences Mobilisées

Ce protocole expérimental mobilise plusieurs compétences et disciplines scolaires. Tout d'abord, il requiert la capacité à formuler une hypothèse et à concevoir un protocole expérimental pour la tester. Cette compétence est associée aux sciences physiques, qui nécessitent une réflexion rigoureuse pour concevoir une expérience qui permettra de répondre à la question posée.

La maîtrise des outils de mesure et de collecte de données expérimentales est essentielle pour mener à bien l'expérience et obtenir des résultats fiables. Cette compétence est également associée aux sciences physiques, qui requièrent l'utilisation d'instruments de mesure précis pour obtenir des données pertinentes.

La troisième compétence mobilisée par ce protocole est la capacité à analyser les données collectées et à en tirer des conclusions. Cette compétence est associée aux mathématiques, qui permettent de traiter et d'analyser des données quantitatives pour en tirer des conclusions précises.

La capacité à communiquer les résultats de manière claire et concise est essentielle pour partager les résultats de l'expérience avec les autres membres de la communauté scientifique. Cette compétence est associée à la communication scientifique, qui requiert la capacité à présenter les résultats de manière claire et accessible pour les autres scientifiques et le grand public.

La programmation informatique est également une discipline associée à ce protocole expérimental, puisque la carte programmable utilisée dans l'expérience nécessite des compétences de programmation pour être utilisée correctement.

Ce protocole expérimental permet aux élèves de développer des compétences clés dans les sciences physiques, les mathématiques, la communication scientifique et la programmation informatique.

### Matériel

Afin de réaliser cette activité, vous aurez besoin du matériel suivant :

- 1 carte programmable “STM32 IoT Node Board”
- 1 écran LCD
- 1 buzzer
- 1 microphone MP34DT01
- Des câbles de connexion
- 1 câble USB - micro B

# LES RESSOURCES

### Expérimentation scientifique

[Protocole PR11-TDL - Étapes d'expérimentation](La%20temp%C3%A9rature%20modifie-t-elle%20la%20vitesse%20du%20son/Protocole%20PR11-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation%20c27abc06c6594298abdc0dfcfbfe50aa.md)

### Fiches de programmation

[Sans titre](La%20temp%C3%A9rature%20modifie-t-elle%20la%20vitesse%20du%20son/Sans%20titre%20af99cc83546d4aa7a0995ee4701127ee.csv)


---

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

> 🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 1 - Mesurer la variation de la vitesse du son en fonction de la température.**
>
> [PROG11-TDL-1](https://www.notion.so/PROG11-TDL-1-69290f722a654d5b8efea135df44af1f?pvs=21)

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


---

## Fiches programmation

### PROG11-TDL-1 — Mesurer la variation de la vitesse du son en fonction de la température



🛠️ **Construire**

**Câbler le capteur de distance**

Le capteur de distance nommé **HC-SR04** possède quatre broches nommées **GND**, **VCC**, **Trig** et **Echo**.

Vous allez devoir connecter les broches du capteur de la manière suivante :

- la broche **GND** du capteur sur la broche **GND** de le carte
- la broche **VCC** du capteur sur la broche **5V** de la carte
- la broche **Trig** du capteur sur la broche **D6**de la carte
- la broche **Echo** du capteur sur la broche **D7** de la carte

**Connecter l’écran**

L’écran que vous allez utiliser est un écran **OLED** nommé **SSD1306**. Il peut être connecté soit en **SPI**, soit en **I2C**. Comme nous allons utiliser la communication **I2C**, vous allez devoir connecter l’écran de la manière suivante :

- la broche **GND** de l’écran à la bande d’alimentation '-' de la breadboard
- la broche **VCC** de l’écran sur la broche **3.3V** de la carte
- la broche **SDA** de l’écran sur la broche **D14** de la carte
- la broche **SCL** de l’écran sur la broche **D15** de la carte

*Ressources : [https://en.wikipedia.org/wiki/I2C](https://en.wikipedia.org/wiki/I2C), [https://en.wikipedia.org/wiki/Serial_Peripheral_Interface](https://en.wikipedia.org/wiki/Serial_Peripheral_Interface), [https://www.sparkfun.com/qwiic](https://www.sparkfun.com/qwiic), [https://learn.adafruit.com/introducing-adafruit-stemmaqt/what-is-stemma-qt](https://learn.adafruit.com/introducing-adafruit-stemmaqt/what-is-stemma-qt)*

![Untitled](images/Untitled.png)

**Connecter la carte à l'ordinateur**

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur micro-USB ST-LINK (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé DIS_L4IOT. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

**Ouvrir MakeCode**

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur. *Ressource : [makecode.lets-steam.eu](http://makecode.lets-steam.eu/)*

**Installer les extensions hcsr04 et OLED**

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut "prêt à l'emploi" et vous devrez installer deux extensions.

> ℹ️ **Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de la robotique et bien plus encore.**

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. Si vous cliquez sur **AVANCÉ**, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton.

Dans la liste des extensions disponibles, vous pouvez facilement trouver les extensions **hcsr04** et **oled** qui seront utilisées pour cette activité. L’extension **hcsr04** vous permettra d’interagir avec le capteur de distance, tandis que l’extension **oled** vous permettra d’interagir avec l’écran. Si elles ne sont pas directement disponibles sur votre écran, vous pouvez les rechercher à l'aide de l'outil de recherche. Cliquez sur l’extension que vous souhaitez utiliser et un nouveau groupe de blocs apparaîtra sur l'écran principal.

**Programmer la carte**

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur DIS_L4IOT et attendez que la carte finisse de clignoter.

**Exécuter, modifier, jouer**

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET). 

**🧑‍💻 Programmer**

```jsx
input.onTemperatureConditionChanged(TemperatureCondition.Cold, 30, TemperatureUnit.Celsius, function () {
    pins.D0.digitalWrite(true)
})
input.onTemperatureConditionChanged(TemperatureCondition.Hot, 30, TemperatureUnit.Celsius, function () {
    pins.D0.digitalWrite(false)
})
let minute = 0
forever(function () {
    oled.clear()
    oled.showValue("minute", minute, 1)
    oled.showValue("temp", input.temperature(TemperatureUnit.Celsius), 2)
    oled.showValue("time", HCSR04.getTime(MHCSR04TimeUnit.Ms), 3)
    minute += 1
    pause(60000)
})
```

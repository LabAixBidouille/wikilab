# Protocole PR7-TDL - Étapes d'expérimentation

### Étape 1 - Collecter des données

🧭**Orientation**

Les panneaux solaires sont généralement montés sur les toits et orientés autant que possible vers le sud. Dans l’hémisphère nord, le soleil étant incliné au sud (l’angle d’inclinaison vers le sud est lié à la latitude, plus on va vers le nord, plus le soleil sera bas dans le ciel) avec une trajectoire d’Est en Ouest, c’est l’orientation qui permet de maximiser la quantité de soleil reçu et donc de fournir le plus d’électricité. Malgré cela, il est possible d’améliorer le rendement du panneau solaire en l’orientant toujours dans la direction du soleil.

L'objectif de cette phase est donc d'identifier une mesure d'ensoleillement avec un capteur adapté et de définir une procédure pour sa mise en œuvre avec un microcontrôleur.

![Untitled](Protocole%20PR7-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation/Untitled.png)

💡**Conceptualisation**

Le paramètre à étudier est lié à l'ensoleillement. Il faut mesurer la quantité de lumière arrivant sur le panneau solaire. Il existe de nombreux capteurs de lumière tels que le luxmètre, le pyranomètre ou encore la photodiode. Pour cette expérience le choix de la LDR (light dependent resistor) est suffisant car elle est très bon marché et simple à utiliser.

<aside>
ℹ️ *Pour aller plus loin :
1. Un **luxmètre**, aussi appelé mètre de lumière, est un instrument de mesure de la luminosité qui permet d'évaluer la quantité de lumière qui atteint une surface donnée. Il est utilisé pour mesurer l'intensité lumineuse de différentes sources de lumière, que ce soit pour les lampes, les écrans d'ordinateur ou même pour les panneaux solaires. Le luxmètre est un outil précieux pour les professionnels de l'éclairage, les ingénieurs et les scientifiques qui travaillent avec la lumière et la luminosité. En mesurant l'intensité lumineuse, ils peuvent déterminer la quantité de lumière nécessaire pour une tâche spécifique, ou la quantité de lumière nécessaire pour obtenir un certain effet. Les luxmètres peuvent également être utilisés pour mesurer l'intensité lumineuse dans différents environnements, tels que dans les musées, les salles de cinéma ou les studios de photographie. Cela permet de garantir que les niveaux de luminosité sont suffisants pour les activités qui y sont menées. En somme, les luxmètres sont des instruments importants pour mesurer la luminosité et pour garantir que les niveaux de luminosité sont adaptés aux différentes tâches et environnements. En savoir plus : [Wikipedia](https://fr.wikipedia.org/wiki/Luxm%C3%A8tre), [Futura Sciences](https://www.futura-sciences.com/sciences/definitions/physique-luxmetre-14907/)
2. Une **photodiode** est un composant électronique semi-conducteur qui convertit la lumière en courant électrique. Elle est utilisée dans de nombreuses applications, notamment comme capteur de lumière pour détecter et mesurer la lumière, ou comme détecteur de rayonnement électromagnétique dans les télécommunications. En photographie, les photodiodes sont souvent utilisées pour mesurer la quantité de lumière reçue par l'appareil photo, afin de régler correctement l'exposition de l'image. Elles sont également utilisées dans les détecteurs de mouvement pour détecter les mouvements et allumer les lumières automatiquement. Dans les applications de mesure de distance, les photodiodes sont utilisées pour mesurer la distance entre l'objet et le capteur en mesurant le temps que prend la lumière pour voyager entre les deux. Enfin, les photodiodes peuvent être utilisées pour mesurer l'intensité lumineuse, par exemple dans les applications d'éclairage public. En savoir plus : [Wikipedia](https://fr.wikipedia.org/wiki/Photodiode), [911electronic](https://911electronic.com/what-is-photodiode-how-does-a-photodiode-works/)
3. Un **pyranomètre** est un instrument de mesure de la radiation solaire globale. Il mesure la quantité totale de rayonnement solaire direct et diffus, généralement exprimée en watts par mètre carré (W/m²). Les pyranomètres sont utilisés pour mesurer l'énergie solaire disponible pour les panneaux solaires et pour les études météorologiques. Ils peuvent également être utilisés pour mesurer la réflexion de la lumière sur les surfaces, comme la neige ou l'eau de mer. Les pyranomètres sont souvent utilisés en conjonction avec d'autres instruments de mesure qui mesurent la radiation solaire directe uniquement En savoir plus : [Wikipédia](https://fr.wikipedia.org/wiki/Pyranom%C3%A8tre)*

</aside>

La photorésistance (également appelée LDR ou cellule photoélectrique) est un composant électronique dont la résistance varie en fonction de la quantité de lumière incidente : plus elle est éclairée, plus sa résistance baisse.

Ainsi, en utilisant la loi d’Ohm et le principe du [pont diviseur de tension](https://fr.wikipedia.org/wiki/Diviseur_de_tension), il est possible d’avoir un circuit électronique simple (uniquement une LDR et des résistances) dont la tension de sortie est proportionnelle à la quantité de lumière reçue. En lisant cette tension sur une entrée analogique d’un microcontrôleur, il est possible d’automatiser la relève des mesures de luminosité qui seront utiles pour déterminer l’orientation optimale de notre panneau solaire.

Pour en savoir plus sur les capteurs de lumière, vous pouvez vous référer à la fiche suivante du projet Let’s STEAM : 

[](https://letssteam.github.io/Resources/3_AS_Programming/FR/LS_R1AS04_Light_FR.pdf)

🔎**Investigation**

Cette étape peut être réalisée à l'aide d'un capteur de lumière de base facilement programmable sur une carte STM32 (et grâce à la fiche de programmation disponible dans cette activité “Fiche 1 - Collecter des données grâce au capteur de lumière”). Nous apprenons comment lire facilement le capteur de température de la carte et afficher sa valeur.

| **DARK** | **NATURAL LIGHT** |
| --- | --- |
| LDR left = 1 | LDR left = 44 |
| LDR left = 1 | LDR left = 42 |
| LDR left = 0 | LDR left = 43 |
| LDR left = 0 | LDR left = 43 |
| LDR left = 1 | LDR left = 43 |
| LDR left = 1 | LDR left = 43 |
| LDR left = 0 | LDR left = 43 |
| LDR left = 1 | LDR left = 42 |
| LDR left = 0 | LDR left = 43 |

Une LDR est une résistance qui varie en fonction de la quantité de lumière reçue. Dans notre cas, elle permet d'optimiser l'éclairage en fonction de sa valeur.

**Câblage :** La manière la plus simple de mesurer un capteur résistif est d'utiliser un diviseur de tension avec une résistance fixe choisie. Avec une lecture analogique de la tension sur le point entre la résistance choisie et la LDR, nous pouvons déterminer l'intensité lumineuse. En effet, la tension dépend du rapport entre les résistances (fixe et LDR), la résistance de la LDR diminue lorsque l'intensité lumineuse augmente. Par conséquent, la tension lue sur la broche analogique augmentera directement avec l'intensité lumineuse. Pour le programme, nous utiliserons l'instruction `analogRead` (lecture analogique) et `Serial.println` (affichage sur le moniteur série). Les valeurs sont affichées via le moniteur série. Pour votre information, nous avons mesuré 3 situations : obscurité, "lumière naturelle", et pointant vers la lumière du soleil.

- À mesure que l'intensité lumineuse augmente, la résistance d'une LDR diminue. Bien sûr, les valeurs dépendent des caractéristiques techniques de la LDR, mais les valeurs typiques varient entre quelques centaines d'ohms (en plein soleil) et quelques centaines de kilo Ohms (dans l'obscurité totale).
- Bien que la résistance diminue avec l'intensité lumineuse, la disposition (GND - résistance - LDR - 5V) que nous avons choisie et la lecture analogique au point entre la résistance et la LDR sont telles que la valeur donnée par le microcontrôleur augmente avec l'éclairage.
- Une broche d'entrée analogique peut être utilisée pour lire une valeur comprise entre 0 et 1023. Cette valeur est proportionnelle à la tension appliquée à la broche, qui DOIT être comprise entre 0 V et 5 V (par rapport à GND). La valeur numérique ainsi obtenue est une mesure arbitraire correspondant à une tension (0-> 0 Volt, 1023-> 5 V), et n'est en aucun cas liée à une unité d'intensité lumineuse (lux, lumen ou candela). Si nous voulions la relier à une mesure physique réelle, nous devrions calibrer la mesure avec un instrument de mesure approprié.

**Capacité à mesurer l'intensité lumineuse :** Nous sommes maintenant en mesure d'utiliser un capteur qui nous indique l'intensité lumineuse (dans une unité arbitraire). Cette étape est cruciale pour pouvoir déterminer la position du soleil, ce qui nous permettra de savoir où positionner le panneau solaire.

<aside>
🧑‍💻 Pour vous aider à programmer le capteur approprié à cette étape, consultez la **Fiche 1 - Collecter des données grâce au capteur de lumière**.

[PROG7-TDL-1](https://www.notion.so/PROG7-TDL-1-cf962082f0c14171a1fb06cbea6c4d42?pvs=21)

</aside>

💬**Débriefing**

Grâce à cette étape, nous sommes maintenant capables d'effectuer une mesure de l'intensité lumineuse. Cet instrument de mesure nous permet d'étudier un grand nombre de situations afin de mieux comprendre quels paramètres sont liés à l'éclairage ou à la lumière du soleil.

En effet, nous pouvons comparer l'intensité lumineuse de plusieurs sources telles que le soleil, différentes lampes (incandescente, néon, LED, bougie, etc.) et l'intensité lumineuse de différents matériaux. Nous pouvons également étudier l'influence de la distance ou de l'inclinaison du capteur par rapport à une source définie.

Nous pouvons tester la transparence (ou l'absorption) de différents matériaux et épaisseurs ou éventuellement concentrer la lumière avec une lentille ou un miroir concave. Les recherches sont presque illimitées et, bien qu'elles ne soient pas essentielles au présent projet, elles permettent de se familiariser avec la lumière et de se faire une idée de son intensité.

### Étape 2 - Afficher les données collectées

🧭**Orientation**

Maintenant, que nous savons mesurer l'intensité lumineuse, il faut pouvoir associer cette mesure au mouvement du soleil dans le ciel afin de le suivre ! En réalité, c'est nous qui bougeons et non le soleil mais c’est une autre histoire.

**Objectifs d'apprentissage** : identifier une méthode permettant de détecter la variation de l'ensoleillement.

💡**Conceptualisation**

Pour mesurer un changement d'intensité lumineuse, il est essentiel de disposer d'une mesure de "référence". Étant donné la simplicité et le faible coût du capteur LDR, une solution simple consiste à utiliser deux capteurs et à comparer leur valeur respective.

🔎 **Investigation**

Le soleil se déplace dans le ciel d'est en ouest. La hauteur du soleil varie au cours de la journée et atteint son maximum à midi (heure solaire). Cette hauteur varie également en fonction de la latitude et des saisons. L'intensité lumineuse varie au cours de la journée et évolue au fil du temps, ce qui rend impossible l'établissement d'une intensité de référence fixe. Il est donc beaucoup plus simple de construire un système qui effectue deux mesures et les compare pour détecter le mouvement du soleil.

En effet, en choisissant un dispositif où les deux capteurs pointent dans des directions légèrement différentes (avec une différence de 10°), il est possible de détecter le mouvement du soleil, comme l'indique la figure ci-dessous :

![image (53).png](Protocole%20PR7-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation/image_(53).png)

![image (54).png](Protocole%20PR7-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation/image_(54).png)

- Situation 1 : le soleil est exactement devant le dispositif, l'intensité lumineuse reçue par les deux LDR est identique et le dispositif est bien positionné.
- Situation 2 : le soleil s'est déplacé, les rayons du soleil forment un angle plus proche de 90° pour le LDR2 que pour le LDR1, ce qui correspond à un ensoleillement plus intense. Le système n'est plus correctement positionné et doit tourner (dans le sens des aiguilles d'une montre) afin d'être aligné et de revenir à la situation 1.

Cependant, il est important de prendre certaines précautions : dans la situation 1, il est nécessaire de s'assurer que les deux capteurs donnent presque la même valeur. En effet, les LDR ne sont pas des capteurs très précis et pour un même éclairement, ils peuvent donner des valeurs différentes. Il est donc important de les mesurer dans les mêmes conditions et de les réajuster numériquement si nécessaire.

**Câblage** : afin d'effectuer des mesures comparatives, nous réalisons d'abord le montage suivant sur une breadboard. Le programme de test des mesures de chaque LDR est affiché via le port série.

<aside>
🧑‍💻 Pour vous aider à programmer le capteur approprié à cette étape, consultez la **Fiche 2 - Afficher les données collectées en mesurant le changement d'intensité lumineuse grâce au LDR**.

[PROG7-TDL-2](https://www.notion.so/PROG7-TDL-2-9b64612863b1476482332071a0587d65?pvs=21)

</aside>

Au final, grâce à ce programme, vous devriez pouvoir remplir le tableau suivant :

| Heure | Type de lumière | Position de la lumière | LDR Gauche | LDR Droite | Différence  | Observation/Remarque |
| --- | --- | --- | --- | --- | --- | --- |
| 01/03/2023 10:56:9 | Lampe | 0° | 1001 | 999 | 2 |  |
| 01/03/2023 10:57:11 | Lampe | 0° | 1003 | 997 | 6 |  |
| 01/03/2023 10:58:13 | Lampe | 0° | 1004 | 998 | 6 |  |
| 01/03/2023 10:59:12 | Lampe | 0° | 1002 | 999 | 3 |  |
| 01/03/2023 11:00:13 | Lampe | 5° à Gauche | 1000 | 950 | 50 |  |
| 01/03/2023 11:10:15 | Lampe | 10° à Gauche | 1000 | 920 | 70 |  |
|  |  |  |  |  |  |  |

En faisant varier la position de la lumière par rapport aux capteurs, essayez de formuler des hypothèses quant au déplacement du panneau à faire pour se retrouver dans la situation idéale en termes de production d’électricité.

Pour affiner votre compréhension des limites du capteur, essayez-le dans des environnements avec des luminosités différentes (dans le noir, dans une salle de classe, en extérieur, …). Comment améliorer le capteur pour le rendre moins sensible aux lumières parasites ?

Comment se comporte votre capteur avec d’autres sources lumineuses (lampe de bureau, LED, bougie, …) ? Essayez de refaire l’expérience de cette étape avec des sources différentes pour voir si vous arrivez toujours à décider dans quel sens votre panneau devrait bouger.

💬**Débriefing**

Grâce à l'intervention de deux capteurs, nous pouvons comparer leur mesure, étape essentielle pour identifier la position du soleil.

Remarques :

- Les lumières parasites ou même l'éclairage ambiant peuvent altérer les mesures, c'est pourquoi les LDR doivent être enfermés dans un tube (de quelques centimètres de long) qui les protège de la lumière ambiante.
- Il y a toujours de petites différences entre les LDR gauche et droite, car on n'est pas sûr qu'elles soient exactement symétriques, et elles ne sont pas très précises.

### Étape 3 - Commander un servomoteur

🧭**Orientation**

**Contexte :** 

Maintenant que nous sommes capables de mesurer la position du soleil ou de la source de lumière, nous devons imaginer un système qui tourne en même temps que le soleil pour maximiser notre production d’énergie.

**Objectifs d'apprentissage :**

- Découvrir un nouveau composant actif et comment il fonctionne.
- Être capable de contrôler un mouvement, dans ce cas une rotation, en utilisant des données de capteur.

💡**Conceptualisation**

Pour avoir un système d’orientation automatique de panneau solaire opérationnel, il est nécessaire de comprendre le fonctionnement électromécanique et la programmation d'un moteur servomoteur. Notre solution utilisera un servomoteur (un moteur qui peut déplacer son axe dans une position angulaire déterminée), et nous allons donc voir comment contrôler le servomoteur.

🔎**Investigation**

Afin d'utiliser le servomoteur, il est indispensable de se familiariser avec son fonctionnement. Nous vous proposons comme activité simple : de réaliser un circuit avec le servomoteur et de le programmer pour qu'il se positionne à différents angles. 

<aside>
🧑‍💻 Pour vous aider à programmer le capteur approprié à cette étape, consultez la **Fiche 3 - Programmation d’un servomoteur**.

[PROG7-TDL-3](https://www.notion.so/PROG7-TDL-3-980efc1e9e91499f9e42d50cd308d106?pvs=21)

</aside>

En utilisant le code de l’étape précédente, faire en sorte que le servomoteur s’oriente pour se diriger vers la source de lumière en utilisant le circuit à deux LDR.

💬 **Débriefing**

Les élèves sont maintenant capables d'utiliser et de commander un servomoteur, qu'ils utiliseront dans la prochaine étape du système d’orientation d’un panneau solaire. Le choix du servomoteur n'a pas été fait au hasard. En effet, le servomoteur ne nécessite pas d'autres accessoires (alimentation externe, transistor de puissance, relais…) et son utilisation est très simple. Il est candidat pour de nombreuses applications nécessitant de mettre des objets en mouvement et son utilisation se retrouve dans de nombreux autres projets amateurs.

En couplant le servomoteur avec la détection d’orientation lumineuse, il devient possible d’orienter un dispositif pour qu’il fasse toujours face à la lumière.

### Étape 4 - Réaliser le suiveur solaire

🧭**Orientation**

Dans les sections précédentes, nous avons appris comment mesurer la lumière du soleil et identifier la position du soleil en utilisant deux mesures. Nous avons également appris comment faire tourner un servomoteur en fonction d'une mesure de luminosité. Maintenant, nous devons assembler toutes les pièces pour atteindre notre objectif ultime : un panneau solaire qui tourne en synchronisation avec le mouvement apparent du soleil.

💡**Conceptualisation**

Le mouvement du soleil est un mouvement lent, le système d’orientation solaire doit bouger progressivement pour suivre le mouvement. L’utilisation du capteur à deux LDR permet de savoir quand le panneau doit tourner et aussi dans quelle direction.

Comme les LDR sont peu précises, il faut déterminer la valeur seuil à partir de laquelle il devient nécessaire de se réorienter. La détermination de cette valeur est à faire expérimentalement pour s’assurer que l’on ne bouge pas inutilement et aussi que l’on ne soit pas influencé par des parasites externes.

🔎**Investigation**

Nous avons créé un support qui inclut des LDR intégrés dans un tube, ainsi qu'un panneau solaire de 4 cm x 4 cm fixé sur un servomoteur. Le support a été créé avec une imprimante 3D, comme le montrent la vue en perspective et la vue de dessus :

![image (6).png](Protocole%20PR7-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation/image_(6).png)

![image (5).png](Protocole%20PR7-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation/image_(5).png)

Notez que les deux cylindres creux ne sont pas exactement perpendiculaires l'un à l'autre.  Ils ont un angle de -10 et 10 degrés par rapport à la verticale, pour mieux détecter la différence d’orientation. Nous avons également créé un trou pour une goupille qui passera par une attache pour fixer le panneau solaire au moteur de servomoteur en collant la barre d'écartement (la partie grise sur la figure).

![image (2).png](Protocole%20PR7-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation/image_(2).png)

![image (4).png](Protocole%20PR7-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation/image_(4).png)

Voici quelques étapes pour assembler le système :

- Le trou est conçu pour une goupille (une tige filetée avec des écrous de 4 mm de diamètre et 70 mm de longueur).
- Le système que nous proposons ne permet de mouvement que dans un plan azimutal, mais il est possible de changer l'orientation du panneau solaire par rapport à la verticale manuellement, grâce à la tige filetée et aux écrous.

<aside>
🧑‍💻 Pour vous aider à programmer le système décrit dans cette étape, consultez la **Fiche 4 - Programmation du suiveur solaire**.

[PROG7-TDL-**4**](https://www.notion.so/PROG7-TDL-4-6876463295ea4b09bc813f0e8b5c8f67?pvs=21)

</aside>

Pour s’assurer de la production du panneau solaire, modifier le programme pour connaître la tension de sortie du panneau solaire en adaptant le programme suivant.

<aside>
🧑‍💻 Pour vous aider à programmer le système décrit dans cette étape, consultez la **Fiche 5 - Collecter les données grâce au capteur de tension.**

[PROG7-TDL-5](https://www.notion.so/PROG7-TDL-5-2a4b8c98d45e4cf589030337bdc83c45?pvs=21)

</aside>

Remplir le tableau suivant pour voir si la production électrique de votre panneau est bien améliorée avec la mise en œuvre du système d’orientation que vous avez développé.

| Heure | Tension à la sortie (en V) | Intensité en sortie (en A) | Puissance en sortie (en W) | Observation / Commentaire |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |

Pour comparer, refaites l’expérience sans activer le suivi, que constatez-vous vis-à-vis de l’efficacité du panneau solaire ? 

💬 **Débriefing**

Avec cette construction simple, nous avons été en mesure de créer un système qui nous permet d'optimiser le rendement d'un panneau solaire en s’orientant à chaque instant face au soleil. Cette configuration nous a permis de faire des mesures relatives, de comparer différentes situations et d'explorer différents concepts physiques tels que la résistance électrique, les diviseurs de tension, la puissance lumineuse et les LDR. Nous avons également acquis des connaissances en matière de concepts algorithmiques de base tels que les entrées (capteurs) / sorties (actionneurs), les boucles et les conditions (si). De plus, nous avons développé des compétences en matière de câblage de circuits électriques et de connexion à un microcontrôleur.

Pour poursuivre ce projet et aller plus loin dans l’expérimentation, plusieurs activités sont possibles :

- Comme mentionné précédemment, il est possible de proposer des mesures alternatives avec des dispositifs adaptés (tels qu'un luxmètre ou un pyranomètre, par exemple) pour calibrer notre configuration. En le faisant, nous pouvons étendre nos connaissances sur l'énergie solaire et améliorer la précision de nos mesures.
- Actuellement, nous ne suivons le soleil que dans un seul plan. Pour améliorer notre configuration, nous pouvons ajouter un autre LDR et un servomoteur, ce qui nous permettrait de déplacer le panneau solaire dans les trois dimensions de l'espace. Cela nous permettrait de collecter des données sur l'énergie solaire à partir de différents angles et positions.
- En enregistrant les valeurs des angles des deux servomoteurs dans un tableur, vous pouvez comparer les résultats de notre système avec les [diagrammes solaire azimut/hauteur (voir image ci-dessous)](https://www.astrolabe-science.fr/diagramme-solaire-azimut-hauteur/).
- Nous pouvons également effectuer des mesures et des calculs d'efficacité à l'aide d'un wattmètre connecté au panneau solaire. Par exemple, nous pouvons comparer l'efficacité de notre configuration avec un panneau solaire fixe sur une journée entière pour estimer la pertinence de notre montage. Cela nous donnerait une meilleure compréhension de l'efficacité de notre configuration et nous aiderait à identifier les domaines à améliorer.

![Untitled](Protocole%20PR7-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation/Untitled%201.png)
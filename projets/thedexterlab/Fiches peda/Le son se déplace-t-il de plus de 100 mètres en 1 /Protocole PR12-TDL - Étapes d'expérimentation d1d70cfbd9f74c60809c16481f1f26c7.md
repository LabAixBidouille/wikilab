# Protocole PR12-TDL - Étapes d'expérimentation

### Étape 1 - Collecter des données

🧭**Orientation**

Pour répondre à notre question de recherche, nous devons trouver un moyen de mesurer la vitesse à laquelle le son se déplace dans l'air. Il existe plusieurs façons de le faire. Pouvons-nous en imaginer une ou en avons-nous entendu parler ? Tout le monde doit se sentir libre d'y réfléchir et d'essayer de proposer quelque chose. Toutes les idées sont les bienvenues à ce stade.

💡**Conceptualisation**

Le son est une vibration qui se propage sous la forme d'une onde de pression audible, à travers un milieu de transmission tel qu'un gaz, un liquide ou un solide. La vitesse du son est la distance parcourue par unité de temps d’une onde sonore lorsqu'elle se propage dans un milieu. Dans le langage courant, la vitesse du son fait référence à la vitesse des ondes sonores dans l'air. Cependant, la vitesse du son varie d'une substance à l'autre : le son se propage plus lentement dans les gaz, plus rapidement dans les liquides et encore plus rapidement dans les solides. L'homme ne peut entendre les ondes sonores que lorsque leur fréquence se situe entre 20 Hz et 20 kHz environ. Les ondes sonores supérieures à 20 kHz sont appelées ultrasons et ne sont pas perceptibles par l'homme. Les ondes sonores inférieures à 20 Hz sont appelées infrasons. Les différentes espèces animales ont des plages d'audition variables.

Dans notre cas, nous allons mesurer la vitesse du son dans l'air à l'aide d'un dispositif, à savoir un capteur de distance à ultrasons HC-SR04, qui émet et reçoit/détecte des ultrasons. Les ultrasons sont des ondes sonores dont la fréquence est supérieure à 20 000 Hz (ou 20 kHz). Les ultrasons ne sont pas différents du son "normal" (audible) dans leurs propriétés physiques, sauf que les humains ne peuvent pas les entendre. Ainsi, pendant nos expériences et nos mesures, nous n'entendrons rien ! Les appareils à ultrasons fonctionnent à des fréquences allant de 20 kHz à plusieurs gigahertz.

Le capteur de distance à ultrasons HC-SR04 se compose de deux transducteurs à ultrasons. L'un agit comme un émetteur qui convertit le signal électrique en impulsions sonores ultrasoniques de 40 kHz. Le récepteur écoute les impulsions transmises. S'il les reçoit, il produit une impulsion de sortie dont la largeur peut être utilisée pour déterminer la distance parcourue par l'impulsion. Le principe de fonctionnement est illustré ci-dessous.

Ainsi, nous pouvons mesurer la vitesse du son si nous plaçons un objet à une distance connue du capteur et enregistrer le temps que met l'impulsion ultrasonore pour parcourir deux fois cette distance. Notez deux fois, car elle voyage de l'émetteur à l'objet de l'obstacle, puis est réfléchie et elle revient vers le récepteur pour être détectée. Maintenant que nous avons acquis les connaissances de base, nous pouvons commencer à préparer notre propre enquête scientifique.

🔎**Investigation**

Nous commençons par nous familiariser ou par jouer avec notre ensemble d'appareils électroniques comme la carte, le capteur, les fils, les résistances, la breadboard. Nous devons créer un circuit adéquat, donc nous devons d'abord identifier ce qui est quoi. Ensuite, nous devons les connecter correctement selon le schéma ci-dessous.

Si le circuit est correct, alors notre dispositif expérimental fonctionnera dès lors que le programme adéquat sera envoyé sur la carte. Une fois que le programme est envoyé, par exemple, lorsque nous appuyons sur le bouton, l’émetteur du capteur émet une impulsion d'ultrasons, qui se propage dans l'air, rebondit sur un obstacle pour enfin être détectée par le récepteur du capteur. Nous devons donc placer l'obstacle devant le capteur et, à l'aide d'une règle ou d'un mètre, mesurer la distance et l'enregistrer dans un tableau. Pour chaque distance testée, nous appuyons sur le bouton et enregistrons dans le tableau la mesure du temps qui s'affiche sur l'écran de l'ordinateur.

<aside>
🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 1 - Mesurer une durée.**

[PROG12-TDL-1](https://www.notion.so/PROG12-TDL-1-10624e3a959845e2b72c79e1f7891989?pvs=21)

</aside>

💬 **Débriefing**

Dans cette phase, nous avons fait et réalisé ce qui suit :

- Comprendre comment mesurer la vitesse à laquelle le son se déplace dans l'air,
- Utiliser un dispositif qui émet et reçoit des ultrasons grâce à un capteur de distance à ultrasons tel que le HC-SR04, qui se compose de deux transducteurs à ultrasons, l'un agissant comme émetteur et l'autre comme récepteur,
- Mesurer la vitesse du son en plaçant un objet à une distance connue du capteur et enregistrer le temps que met l'impulsion ultrasonore pour parcourir deux fois cette distance.

### Étape 2 - Afficher les données collectées

🧭**Orientation**

Dans l'étape précédente, nous avons construit un appareil expérimental simple avec une carte et un capteur pour mesurer le temps que met un son à parcourir la distance jusqu'à un obstacle et à rebondir. Nous avons supposé que la mesure du temps est affichée sur l'écran de notre ordinateur par le programme. Considérons le cas où nous n'avons que la carte, par exemple la carte STM32. Comment pourrions-nous afficher nos valeurs mesurées ?

💡**Conceptualisation**

Une carte fournit une unité de traitement et un espace mémoire pour stocker et exécuter un programme, elle peut fournir des capteurs embarqués pour mesurer divers paramètres comme la température, la pression, l'humidité, l'accélération, la rotation, etc. Elle fournit également des interfaces pour se connecter et communiquer avec d'autres appareils. Dans ce cas particulier, nous devons connecter et utiliser un petit écran pour afficher en texte les valeurs de nos mesures.

🔎**Investigation**

Dans cette étape, nous suivons les étapes présentées en détail dans la fiche 2 - Afficher les données collectées sur un écran afin d'utiliser un petit écran (ici OLED, mais possible d’effectuer le branchement sur un écran LCD) pour afficher en texte les valeurs de nos mesures. Nous établissons ensuite un tableau des mesures divisé en trois colonnes. La première colonne est la distance de l'obstacle en cm. La deuxième colonne est le temps mesuré en secondes. La troisième colonne est Vitesse = 2*Distance/Temps mesuré (cm/sec).

Nous remplissons la première colonne en mesurant avec une règle la distance entre le capteur et l'obstacle. Nous remplissons la deuxième colonne avec la valeur affichée dans chaque cas sur l'écran LCD. Nous remplissons la troisième colonne en calculant la vitesse dans chaque cas.

| **Distance entre le capteur et l'obstacle** | **Valeur affichée sur l'écran** | **Vitesse = 2 x Distance/Temps mesuré (cm/sec)** |
| --- | --- | --- |
|  |  |  |
|  |  |  |

<aside>
🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 2 - Afficher les données collectées sur un écran.**

[PROG12-TDL-2](https://www.notion.so/PROG12-TDL-2-cd49ca6bdd264d28bf4726884dc96591?pvs=21)

</aside>

💬 **Débriefing**

Dans cette phase, nous avons fait et réalisé ce qui suit :

- Comprendre les éléments de base et les fonctionnalités d'une carte.
- Se familiariser avec la connexion et l'utilisation de périphériques externes pour réaliser des expériences.
- Utiliser un programme pour afficher des données sur un écran LCD.

### Étape 3 - Analyser les données

🧭**Orientation**

Dans l'étape précédente, nous avons rempli un tableau de mesures, ce sont nos données. En les utilisant, nous voulons apprendre la vitesse du son dans l'air et donner une réponse à notre question de départ "le son voyage-t-il plus de 100 mètres en 1 seconde ?".

💡 **Conceptualisation**

Nous avons collecté nos données avec notre appareil et nous devons maintenant les analyser afin d'en extraire des informations pertinentes. Dans cette étape, nous introduisons le concept de moyenne ou de valeur moyenne à partir des statistiques de base. En général, dans les enquêtes et les expériences scientifiques, nous prenons plusieurs mesures, puis nous concluons à une valeur finale en calculant la moyenne. C'est la meilleure estimation que nous pouvons obtenir de la valeur réelle.

🔎**Investigation**

Nous parcourons notre tableau de données enregistrées de mesures de distance et de temps et nous calculons la vitesse du son qui correspond à chaque paire de mesures. Pour cette tâche, nous pouvons utiliser une feuille de calcul numérique comme Excel ou Open/Libre Office ou bien continuer avec la feuille de calcul/tableau papier. À la fin, nous calculons la valeur moyenne et l'exprimons en cm/sec, en m/sec et en km/hr. Nous vérifions si ce que nous avons trouvé est proche ou non de la valeur indiquée dans la bibliographie (à 20 °C, la vitesse du son dans l'air est d'environ 343 mètres par seconde ou 1 235 km/h, soit un kilomètre en 2,9 secondes). Nous pouvons répéter notre série de mesures avec des distances et des obstacles différents, ou même dans des conditions de température différentes, afin d'étudier si cela affecte les résultats obtenus.

Enfin, nous discutons de nos résultats en classe. Nous réfléchissons également à l'ensemble du processus, depuis le début du projet jusqu'à sa fin. Il est important de comprendre que c'est de cette manière que les scientifiques et les chercheurs mènent des expériences et des recherches scientifiques pour essayer de comprendre la nature et ses phénomènes.

💬 **Débriefing**

Dans cette phase, nous avons fait et réalisé ce qui suit :

- Collecter des données pour différentes distances.
- Enregistrer les données dans une feuille de calcul
- Analyser les données en prenant les valeurs moyennes.
- Extraire les informations pertinentes (par exemple, la valeur mesurée de la vitesse du son) et conclure.
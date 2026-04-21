# Protocole PR20-TDL - Étapes d'expérimentation

### Étape 1 - **Comprendre le fonctionnement du pendule**

🧭**Orientation**

Qu'est-ce qu'un pendule et comment a-t-il été utilisé dans l'histoire pour mesurer le temps ?

💡**Conceptualisation**

Un pendule est un objet suspendu à un point fixe de telle sorte qu'il puisse osciller librement vers l'avant et vers l'arrière sous l'influence de la gravité. En physique, un "pendule simple" est un modèle idéalisé comprenant une masse ponctuelle suspendue à un fil sans masse et inextensible. Dans la réalité, la plupart des pendules sont plus complexes et peuvent inclure des tiges rigides, des ressorts, et d'autres composants.

**Histoire du Pendule dans la Mesure du Temps**

L'utilisation du pendule dans la mesure du temps a une longue et riche histoire. L'invention du pendule horloger est généralement attribuée au physicien néerlandais Christiaan Huygens en 1 656. Avant cette période, les méthodes de mesure du temps étaient beaucoup moins précises et reposaient souvent sur des dispositifs comme les cadrans solaires et les sabliers.

Le pendule a révolutionné la mesure du temps en offrant une précision jusqu'alors inégalée. Les premières horloges à pendule étaient précises à moins de 1 minute par jour, une amélioration significative par rapport aux technologies antérieures. Ce niveau de précision a eu un impact considérable sur la navigation maritime, l'astronomie, et même sur la vie quotidienne.

Au 18e et XIXe siècles, l'horloge à pendule est devenue un élément standard dans les observatoires, les écoles, et les foyers. Des améliorations continues ont été apportées pour compenser les effets des changements de température, de pression et d'autres variables qui pourraient affecter la précision du pendule.

**Concepts Clefs**

- Oscillation : Mouvement de va-et-vient autour d'une position d'équilibre.
- Période : Le temps nécessaire pour qu'un pendule effectue un aller-retour complet.
- Amplitude : La distance maximale à laquelle le pendule s'éloigne de sa position de repos.

Pour les élèves, l'étude des pendules peut être une occasion fantastique d'explorer des concepts tels que la périodicité, la conservation de l'énergie mécanique, et le mouvement oscillatoire. Ils pourront également découvrir comment les sciences et les technologies ont évolué en synergie tout au long de l'histoire.

🔎**Investigation**

Pour commencer l’enquête, demandez aux élèves de réfléchir à l'utilisation du pendule dans l'histoire, notamment dans les horloges. Ils peuvent rechercher comment les pendules ont été utilisés pour garder le temps dans différentes civilisations.

Pour se familiariser avec les caractéristiques d’un pendule, les élèves vont en fabriquer un et commencer à observer les particularités du mouvement du pendule.

**Matériel**

- Une tige ou un fil solide
- Une masse (bille, petit sac de sable)
- Règle ou mètre ruban
- Carte STM32
- Capteur à effet Hall
- Un aimant néodyme
- Smartphone/Tablette avec l'application fizziq
- Support pour le pendule (chaise, trépied, crochet au plafond)

**Création d'un Pendule Simple**

Un pendule est une masse reliée à un fil accroché à un support en un point fixe. La masse peut être mise en mouvement simplement en soulevant la masse et en la relâchant. Les composants du pendule sont au nombre de trois et il est assez simple d’en créer un en suivant les étapes suivantes :

1. **Couper le fil** : Mesurez et coupez un morceau de fil d'environ 1 mètre.
2. **Attacher la masse** : Attachez une petite masse à un bout du fil. Assurez-vous que la masse est solidement fixée.
3. **Accrochage** : Accrochez l'autre extrémité du fil à un support stable, comme un trépied, une chaise ou même un crochet au plafond.

Il y a deux paramètres qui peuvent être adaptés sur un pendule, la masse $m$ et la longueur du fil $l$.

Quand on décale le pendule et qu’on le relâche, le mouvement de la masse se répète assez régulièrement dans un mouvement d’oscillation. Pour vérifier si les oscillations sont toujours les mêmes nous allons mesurer leur période et calculer leur fréquence.

![Untitled](Protocole%20PR20-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation/Untitled.png)

**Mesure de Fréquence avec Capteur à Effet Hall**

La première solution de mesure de la fréquence va utiliser une carte programmable STM32 et un capteur à effet Hall. Le capteur à effet hall va être placé de sorte à détecter lorsque le pendule passe à proximité. La durée entre deux passages constituera la période de l’oscillation. Pour ce faire, vous devrez suivre les étapes suivantes :

1. **Installation d’un aimant dans la masse** : pour détecteur les passages du pendule avec un capteur à effet Hall, fixé à la masse un aimant néodyme.
2. **Installation du capteur** : Fixez un capteur à effet Hall près du point où la masse passera pendant son mouvement.
3. **Connexion à la carte STM32** : Connectez le capteur à effet Hall à la carte STM32.
4. **Programmation** : Utilisez un ordinateur pour programmer la carte STM32 afin qu'elle mesure la fréquence de passage de la masse (cette fréquence correspond à la fréquence d'oscillation du pendule).
5. **Test et collecte de données** : Mettez le pendule en mouvement et observez les données collectées sur la carte STM32.

Cet instrument de mesure de la fréquence du mouvement du pendule permettra de réaliser les expériences des étapes suivantes. Les données produites, seront exportées pour être utilisées avec un tableur.

![Untitled](Protocole%20PR20-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation/Untitled%201.png)

![Untitled](Protocole%20PR20-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation/Untitled%202.png)

**Mesure de Fréquence avec Fizziq**

L’ajout d’un capteur à notre système permet de mesurer la fréquence assez facilement mais si l’on souhaite aussi connaître l’amplitude du mouvement ainsi que la vitesse, l’utilisation de l’application mobile Fizziq permet d’aller plus loin avec une analyse vidéo de l’expérience. Pour ce faire, suivre les étapes suivantes :

1. **Installation de l'application** : Assurez-vous que l'application fizziq est installée sur votre smartphone ou tablette.
2. **Configuration** : Ouvrez l'application et configurez-la pour mesurer l'accélération. Dans le module Cinématique de l’onglet Outils, appuyer sur la carte FizziQ, copie le lien de la vidéo pendule, puis appuie sur l'icône copie dans la carte Internet.
3. **Déterminer l’échelle** en positionnant la règle et en donnant sa dimension
4. **Étudier le mouvement** de descente de la balle en pointant son mouvement
5. **Ajouter au cahier d’expériences les données** calculées donnant la position de la balle et sa vitesse.
6. **Placement du smartphone/tablette** : Fixez le smartphone ou la tablette sur la masse (veillez à bien la sécuriser).
7. **Test et collecte de données** : Mettez le pendule en mouvement et commencez à collecter des données sur l'application.

L’utilisation de Fizziq demande plus de travail pour calibrer la vidéo en rajoutant une règle qui permettra de paramétrer les dimensions.

![Untitled](Protocole%20PR20-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation/Untitled%203.png)

**Expérience : Vérifier que les oscillations sont isochrones**

Pour cette enquête, on va regarder si la période d'oscillation ne dépend pas de l'amplitude (tant que les oscillations sont petites).

1. **Définir des amplitudes** : Choisissez 3-4 amplitudes différentes pour les oscillations (par exemple, 5°, 10°, et 15°).
2. **Mesurer la période** : Pour chaque amplitude, utilisez le chronomètre pour mesurer le temps qu'il faut au pendule pour réaliser 10 oscillations.
3. **Calcul de la période** : Divisez chaque mesure par 10 pour obtenir la période d'une oscillation.
4. **Analyse des données** : Comparez les périodes calculées pour chaque amplitude.

**Questions** :

- Les périodes sont-elles identiques ou différentes ?
- Comment ces résultats s'accordent-ils avec la théorie que les oscillations d'un pendule simple sont isochrones pour de petites amplitudes ?

💬**Débriefing**

Cette expérience permet aux élèves de comprendre le principe d'isochronisme dans les oscillations d'un pendule simple et d'appliquer des compétences en mesure et en analyse de données. Avant d’y arriver, ils auront dû s’intéresser à l’histoire des pendules et à leur usage. La création de deux dispositifs de mesure permet de mesurer la fréquence et de commencer à vérifier les hypothèses sur la fréquence.

### Étape 2 - **Mesure des oscillations avec un pendule simple**

🧭**Orientation**

Pour un pendule donné, l’étape précédente a montré que la fréquence est constante pour des petites amplitudes. La fréquence est donc liée aux caractéristiques physiques du système. Pour notre pendule simple, il n’y a que deux paramètres qui peuvent varier : la longueur du fil et la masse.

L’objectif de cette étape est de répondre à la question : Comment la longueur de la ficelle et le poids affectent-ils les oscillations ?

💡**Conceptualisation**

### Comment la longueur de la ficelle affecte-t-elle la période ?

Dans un pendule simple, où nous supposons qu'il n'y a pas de frottement ni de résistance de l'air, la période $T$ est donnée par :

$$

T = 2\pi \sqrt{\frac{L}{g}}

$$

où $L$ est la longueur de la ficelle et $g$ est l'accélération due à la gravité (environ $9.81 m/s^2$ sur Terre).

Cette équation nous montre que la période $T$ est proportionnelle à la racine carrée de la longueur $L$. Ainsi, si la longueur de la ficelle augmente, la période d'oscillation augmentera également, mais de manière non linéaire. Cette relation est ce que les élèves devraient observer dans leurs expériences et leurs graphiques.

### Comment la masse affecte-t-elle la période ?

La formule pour la période d'un pendule simple ne dépend pas de la masse de l'objet au bout de la ficelle. En pratique, cela signifie que si nous avons deux pendules de même longueur mais de masses différentes, leurs périodes d'oscillation devraient être identiques, à condition que les effets de la résistance de l'air et du frottement soient négligeables.

Les élèves pourraient trouver ce résultat contre-intuitif, ce qui peut conduire à des discussions enrichissantes sur la physique impliquée.

### Compétences abordées

1. **Mathématiques** : Utilisation des formules pour calculer la période, compétence en traçage de graphiques.
2. **Physique** : Compréhension des forces en jeu, notamment la gravité.
3. **Technologie** : Utilisation d'instruments de mesure et de logiciels pour la collecte de données.
4. **Compétences Transversales** : Capacités d'observation, d'analyse, et d'interprétation des données.

En explorant ces phénomènes, les élèves ont l'opportunité de mettre en œuvre des compétences en mathématiques, en physique, et en technologie, tout en développant une compréhension plus profonde de comment les paramètres physiques affectent le monde qui les entoure.

🔎**Investigation**

L’objectif de l’enquête des élèves est de comprendre comment la longueur de la ficelle et la masse affectent la période d'un pendule.

**Matériel**

- Pendule simple (déjà construit)
- Différentes masses (billes, petits sacs de sable)
- Différentes longueurs de fils
- Règle ou mètre ruban
- Chronomètre ou carte STM32 avec capteur à effet Hall
- Smartphone/Tablette avec l'application fizziq

**Effet de la Longueur de la Ficelle**

1. **Hypothèse** : Demandez aux élèves de faire une hypothèse sur l'effet de la longueur de la ficelle sur la période d'oscillation.
2. **Changement de Longueur** : Réglez le pendule à différentes longueurs (par exemple, 30 cm, 50 cm, 70 cm).
3. **Mesure de la Période** : Pour chaque longueur, utilisez un chronomètre pour mesurer le temps nécessaire pour réaliser 10 oscillations.
4. **Calcul de la Période** : Divisez chaque mesure par 10 pour obtenir la période d'une oscillation.
5. **Analyse des Données** : Tracez un graphique de la période en fonction de la longueur de la ficelle. Est-ce que la période augmente ou diminue avec la longueur de la ficelle ?

**Effet de la Masse**

1. **Hypothèse** : Demandez aux élèves de faire une hypothèse sur l'effet de la masse sur la période d'oscillation.
2. **Changement de Masse** : Remplacez la masse au bout de la ficelle par des masses différentes (par exemple, 50 g, 100 g, 150 g).
3. **Mesure de la Période** : Pour chaque masse, utilisez un chronomètre pour mesurer le temps nécessaire pour réaliser 10 oscillations.
4. **Calcul de la Période** : Divisez chaque mesure par 10 pour obtenir la période d'une seule oscillation.
5. **Analyse des Données** : Tracez un graphique de la période en fonction de la masse. Est-ce que la période change avec la masse ?

💬**Débriefing**

Cette expérimentation permet aux élèves d'observer et d'analyser les facteurs qui influencent les oscillations d'un pendule, tout en pratiquant la collecte et l'interprétation de données.

**Questions pour ouvrir la réflexion**

- Comment la longueur de la ficelle affecte-t-elle la période d'oscillation ?
- Comment la masse affecte-t-elle la période d'oscillation ?
- Les observations correspondent-elles aux hypothèses initiales ?

### Étape 3 - **Calibrage du pendule**

🧭**Orientation**

Comment peut-on calibrer un pendule pour qu'il mesure le temps aussi précisément qu'un chronomètre ?

💡**Conceptualisation**

Calibrer un pendule pour mesurer le temps avec une précision comparable à celle d'un chronomètre est un défi fascinant qui permet de plonger profondément dans les concepts de physique et d'ingénierie. Voici quelques étapes à suivre pour atteindre cet objectif ambitieux :

**Étapes**

**Étape 1 : Comprendre les Principes de Base**

Pour calibrer un pendule, il est important de comprendre la formule qui régit sa période d'oscillation $T = 2\pi \sqrt{\frac{L}{g}}$ où $L$ est la longueur du pendule et $g$ est l'accélération due à la gravité. Les élèves doivent avoir une idée claire de cette formule et de ses composants pour être en mesure de calibrer efficacement le pendule.

**Étape 2 : Collecte de Données**

Utilisez des méthodes de mesure précises pour obtenir des valeurs pour $L$ et $g$. Pour $g$, vous pouvez supposer que c'est environ $9.81 m/s^2$ si vous êtes sur Terre. Pour $L$, une mesure précise de la longueur de la ficelle ou du fil est essentielle.

**Étape 3 : Mesures Répétées et Moyenne**

Effectuez plusieurs mesures de la période $T$ en utilisant un chronomètre précis et calculez la moyenne pour obtenir une valeur aussi précise que possible.

**Étape 4 : Utilisation de Capteurs**

Si possible, incorporez des capteurs à effet Hall pour mesurer avec précision le temps d'une oscillation complète. Ces capteurs peuvent être couplés à une carte STM32 pour l'enregistrement de données et leur traitement.

**Étape 5 : Ajustements**

Utilisez les données collectées pour ajuster la longueur $L$ du pendule jusqu'à ce que vous obteniez une période $T$ qui corresponde aussi étroitement que possible à la valeur théorique calculée.

**Étape 6 : Tests et Validation**

Après avoir fait tous les ajustements, effectuez une série de tests pour valider que votre pendule est aussi précis qu'un chronomètre moderne. Comparez les temps mesurés par le pendule et le chronomètre sur de longues périodes.

En suivant ces étapes, les élèves pourront approfondir leur compréhension de la physique et de la technologie, tout en développant des compétences essentielles en mathématiques et en méthode scientifique.

**Compétences abordées**

1. **Mathématiques** : Calculs, moyennes, précision et fiabilité des données.
2. **Physique** : Compréhension des lois du mouvement, des forces en jeu, et de l'accélération due à la gravité.
3. **Technologie** : Utilisation de capteurs et de logiciels pour la collecte et l'analyse de données.
4. **Méthodologie scientifique** : Planification, exécution et évaluation d'une expérience.

🔎**Investigation**

Pour cette enquête, les élèves vont essayer de créer un pendule dont la fréquence sera de $1Hz$. Cette fréquence fixe permettra d’arriver à ajuster le pendule en fonction des formules données dans la conceptualisation.

**Matériel nécessaire**

- Ficelle ou fil léger mais résistant
- Un petit poids
- Règle ou mètre ruban
- Chronomètre, un capteur à effet Hall
- Support pour suspendre le pendule (peut être un support de laboratoire, une chaise, ou un crochet)
- Ciseaux

**Étapes**

La mise en pratique nécessite un ajustement du pendule pour correspondre à la fréquence demandée. Voici les étapes à suivre :

1. **Préparation du Pendule**
    - Attachez le petit poids à une extrémité de la ficelle.
    - Accrochez l'autre extrémité de la ficelle au support de manière que le pendule puisse osciller librement.
2. **Mesure initiale de la période**
    - Écartez le poids à un petit angle (moins de 20 degrés) par rapport à la verticale.
    - Lâchez-le (sans lui donner une vitesse initiale) et utilisez un chronomètre pour mesurer la durée de 10 oscillations.
    - Divisez ce temps par 10 pour obtenir une estimation initiale de la période $T$.
3. **Calcul de la longueur nécessaire**
    - Utilisez la formule $T = 2\pi \sqrt{\frac{L}{g}}$ pour résoudre $L$, où $g$ est l'accélération due à la gravité ($9,81 m/s^2$) et $T$ est la période que vous voulez (1 seconde).
    - Calcul : $L = \frac{g \times T^2}{4 \pi^2}$
4. **Ajustement de la longueur du pendule**
    - Mesurez et ajustez la longueur de la ficelle du pendule en utilisant une règle ou un mètre ruban pour qu'elle corresponde à la longueur $L$ calculée.
    - Coupez l'excédent de ficelle avec des ciseaux.
5. **Vérification**
    - Répétez l'étape 2 pour mesurer la nouvelle période du pendule.
    - Comparez cette période à l'objectif d'une seconde.
6. **Analyse des données**
    - Discutez en classe des résultats obtenus. Était-il possible d'atteindre une période d'une seconde ?
    - Quelles pourraient être les sources d'erreur dans cette expérience ?
7. **Interprétation**
    - S'il y a des différences entre la période mesurée et la période souhaitée, quelles en sont les possibles raisons ? Comment pouvez-vous ajuster l'expérience pour améliorer la précision ?

Cette expérience pratique permet aux élèves de comprendre comment ajuster un pendule pour mesurer le temps et d'appliquer des principes de physique dans un contexte pratique.

💬**Débriefing**

Dans cette expérimentation, nous avons appris comment ajuster un pendule pour obtenir une période d'oscillation d'une seconde en utilisant des principes de physique fondamentale. L'activité a montré l'importance de la précision dans la mesure et l'ajustement de la longueur de la ficelle pour atteindre l'objectif. Les élèves ont pu appliquer des formules mathématiques pour résoudre des problèmes pratiques, tout en discutant des sources potentielles d'erreur et des moyens de les minimiser. Cette expérience offre une méthode simple mais précieuse pour comprendre les principes derrière la mesure du temps avec un pendule.

### Étape 4 - **Comprendre les mécanismes d'échappement**

🧭**Orientation**

Qu'est-ce qu'un mécanisme d'échappement et comment contribue-t-il à la précision d'une horloge à pendule ?

💡**Conceptualisation**

Un mécanisme d'échappement est une composante cruciale dans les horloges mécaniques, surtout celles dotées d'un pendule. Ce mécanisme permet de réguler la libération de l'énergie mécanique stockée dans un ressort ou tout autre moyen, assurant ainsi un mouvement régulier et continu du pendule. En bref, le mécanisme d'échappement sert à "libérer" une petite quantité d'énergie à intervalles réguliers pour maintenir le pendule en mouvement.

Dans une horloge à pendule, le mécanisme d'échappement travaille en symbiose avec le pendule pour assurer que chaque oscillation déplace le mécanisme d'échappement d'une quantité fixe, ce qui permet à l'horloge d'"avancer" d'une seconde ou d'une fraction de seconde. Cela contribue grandement à la précision de l'horloge. Le mécanisme d'échappement assure que le pendule reçoit une petite "poussée" à chaque oscillation pour compenser les pertes d'énergie dues à la friction et à la résistance de l'air, ce qui permet d'obtenir une mesure du temps plus précise et plus stable.

Sans un mécanisme d'échappement bien conçu, même un pendule parfaitement calibré ne serait pas suffisamment précis pour la mesure du temps à long terme, en raison des nombreuses variables qui pourraient affecter sa performance, comme les variations de température et la friction. C'est pourquoi l'ajout d'un mécanisme d'échappement est vital pour augmenter la précision d'une horloge à pendule.

![Untitled](Protocole%20PR20-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation/Untitled%204.png)

🔎**Investigation**

Lors de cette enquête, les élèves cherchent à comprendre comment un mécanisme d'échappement contribue à la précision d'une horloge à pendule.

**Matériel Nécessaire**

- Kit d'assemblage d'une horloge à pendule.
    
    [Laser Cut Clock Escapement and Pendulum](https://www.instructables.com/Laser-cut-Clock-escapement-and-Pendulum/)
    
    [Pendulum Clock — Mechanical Gifs](https://mechanicalgifs.com/pendulum-clock)
    
- Carte STM32 compatible avec MakeCode
- Capteur à effet Hall
- Résistances de pull-up/pull-down (environ 10 kΩ)
- Fils de connexion (jumper)
- Ordinateur avec accès à MakeCode
- Câble USB pour la carte STM32

**Étapes**

1. **Préparation du STM32 et du Capteur à Effet Hall**
    - Connectez le capteur à effet Hall à la carte STM32. Le fil de signal (souvent marqué par un 'S') va à une des broches GPIO de la STM32, le fil d'alimentation (VCC) va à la broche 3.3V, et le fil de terre (GND) va à la broche GND.
    - Connectez une résistance de pull-up/pull-down entre le fil de signal et VCC ou GND pour stabiliser la lecture.
2. **Programmation avec MakeCode**
    - Ouvrez le navigateur web et allez sur le site de MakeCode.
    - Créez un nouveau projet et utilisez les blocs pour lire la valeur de la broche où le capteur est connecté. Utilisez également les blocs pour calculer le temps entre chaque oscillation du pendule.
3. **Téléversement du Code**
    - Connectez la carte STM32 à l'ordinateur via USB.
    - Téléchargez le fichier `.hex` ou`.uf2` généré par MakeCode et transférez-le dans la carte STM32.
4. **Installation du Capteur à Effet Hall**
    - Placez le capteur à effet Hall de manière qu’il puisse détecter le passage du pendule. Assurez-vous qu'il est positionné correctement.
5. **Tests Initiaux**
    - Alimentez le système et laissez le pendule osciller. Surveillez les données en temps réel, si possible.
6. **Mesure de la Précision**
    - Utilisez MakeCode pour calculer la période moyenne des oscillations et son écart-type.
7. **Mesure de la Stabilité dans le Temps**
    - Laissez le système fonctionner pendant une période prolongée (e.g., 1 heure, 4 heures). Notez toute variation dans la période d'oscillation pour évaluer la stabilité.
8. **Analyse des Données**
    - Utilisez les données collectées dans MakeCode pour une analyse ultérieure.
9. **Optimisation et Ajustements**
    - Si nécessaire, retournez dans MakeCode pour apporter des ajustements au code et répétez les mesures.
10. **Rapport et Conclusion**
    - Rédigez un bref rapport ou une présentation pour partager vos découvertes.

Cette version du guide utilise MakeCode pour simplifier la programmation, ce qui le rend particulièrement adapté pour des projets en milieu scolaire.

💬**Débriefing**

Cette expérimentation avec un pendule et un mécanisme d'échappement a permis aux élèves de plonger profondément dans la physique des oscillations et la mesure du temps. En utilisant MakeCode et une carte STM32, le projet a également introduit des compétences en programmation et en électronique, rendant l'expérience interdisciplinaire. La mesure de la précision et de la stabilité dans le temps a ajouté une dimension pratique, illustrant les défis de la conception d'horloges précises. Cette activité a non seulement renforcé des compétences en sciences et en ingénierie, mais a également stimulé la pensée critique en confrontant les élèves à des problèmes réels d'optimisation et de stabilité.

Pour aller plus loin :

- [Pendules et Horloges](https://www.khanacademy.org/science/physics/mechanical-waves-and-sound/simple-harmonic-motion/a/simple-harmonic-motion-review) - Un cours de Khan Academy sur les oscillations.
- [Explication des mécanismes d'échappement](https://www.explainthatstuff.com/how-escapements-work.html) - Un article expliquant le fonctionnement des mécanismes d'échappement.
- [Horlogerie et Physique](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3481100/) - Un article de recherche sur l'histoire de l'horlogerie et sa relation avec la physique.
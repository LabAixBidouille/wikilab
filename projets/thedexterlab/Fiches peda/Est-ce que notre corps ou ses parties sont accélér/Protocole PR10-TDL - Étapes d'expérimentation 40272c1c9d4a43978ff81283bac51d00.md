# Protocole PR10-TDL - Étapes d'expérimentation

### Étape 1 - Collecter des données

🧭**Orientation**

Pour répondre à notre question de recherche, il est nécessaire de trouver un moyen de mesurer l'accélération. La méthode la plus courante consiste à utiliser un capteur spécialement conçu pour cette tâche, appelé accéléromètre. Grâce à la technologie de la microélectronique, ce minuscule dispositif est aujourd'hui présent dans presque tous les gadgets tels que les smartphones, les smartwatches, les joysticks, les télécommandes, les jouets, etc.

Nous pouvons utiliser un capteur autonome et le connecter à une carte programmable pour lire ses valeurs, ou utiliser une carte intégrant déjà de tels capteurs. Nous allons opter pour cette dernière solution et utiliser la carte STM32. Cependant, il est important de bien comprendre comment le capteur fonctionne et comment le programmer, ainsi que de comprendre le mode d'alimentation de la carte et les options pour la rendre mobile. Cela est nécessaire car la collecte de données se fait dans la vie réelle et est liée aux mouvements effectués par les étudiants. Il est donc essentiel de porter une attention particulière à ce point.

💡**Conceptualisation**

Dans notre projet, nous devons mesurer une grandeur physique : l'accélération. La première étape de la phase de collecte des données consiste à comprendre ce qui sera mesuré, et comment.

**Spécification de la mesure** : L'accélération est généralement exprimée en unités de m/s². La valeur d'accélération la plus connue est 1g, équivalant à 9,8 m/s² en raison de la force gravitationnelle à la surface de la Terre. Cette valeur est une référence typique, c'est pourquoi la plupart des accéléromètres sont conçus pour exprimer la valeur qu'ils mesurent en ‘g’. Notre carte STM32 intègre trois accéléromètres pour mesurer l'accélération sur trois axes (x, y et z). Chaque capteur, ainsi que tout dispositif en général, est caractérisé par certaines spécifications techniques qui indiquent comment il fonctionne correctement ou pour quel but il est conçu. Les accéléromètres du STM32 ont une plage de mesure de -8g à +8g, ce qui est adéquat pour les besoins de notre projet.

**Rendre la carte STM32 compatible avec une expérience en mouvement** : L'expérimentation proposée suppose la mobilité de la carte dans différentes situations mettant en scène les mouvements du corps afin d'en comprendre l'accélération. La STM32 ne possède pas d'autonomie propre (il n’y a pas de batterie), ce qui limite son utilisation mobile car elle doit être connectée à une source d'énergie pour fonctionner. Cette source prend généralement la forme d'une connexion USB entre la carte et l'ordinateur, mais il est également possible de relier la carte à une power bank afin de la mettre sous tension et la rendre transportable.

🔎**Investigation**

**Comprendre comment programmer l’accéléromètre sur la carte STM32** : Comme les trois capteurs accéléromètres sont intégrés à la carte, nous n'avons pas besoin de connecter un capteur externe. La première étape consiste donc à comprendre et à programmer l’utilisation de cet accéléromètre grâce à l’outil MakeCode. Pour ce faire, vous pouvez suivre les étapes décrites dans la fiche de programmation 1.

<aside>
🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 1 - Collecter des données à l’aide de l’accéléromètre.**

[PROG10-TDL-1](https://www.notion.so/PROG10-TDL-1-7b20b8b986dc4b4d9a1e381313fdfc7e?pvs=21)

</aside>

![Untitled](Protocole%20PR10-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation/Untitled.png)

**Rendre la carte mobile** : Une fois le capteur programmé, la question de l'alimentation de la carte STM32 pour cette activité spécifique se pose. Si elle doit être transportée sur les élèves pour enregistrer l'accélération de leurs corps et de leurs mouvements, il est nécessaire de s'assurer que la connexion à la source d'énergie permettra de réaliser l'expérience correctement. Nous proposons deux solutions :

- La première solution la plus simple consiste à garder la carte STM32 connectée à un ordinateur avec un câble USB suffisamment long pour permettre aux élèves de garder leur liberté de mouvement. La carte reste alimentée par le PC mais il faudra faire attention au câble qui restera relié aux élèves.
- La seconde solution consiste à relier la carte à une power bank qui assurera sa mise sous tension. Après avoir programmé votre carte sur PC, vous pouvez relier la carte à cette source d'énergie. Cette solution a l'avantage de rendre le dispositif autonome, sous réserve d'avoir accès au matériel, qui est aujourd'hui assez courant.

![Untitled](Protocole%20PR10-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation/Untitled%201.png)

Une fois le branchement et la programmation du capteur accéléromètre réalisés, la prochaine étape consistera à apprendre comment interagir avec les capteurs afin de lire leurs valeurs.

### Étape 2 - Afficher les données collectées

🧭**Orientation**

Dans l'étape précédente, nous nous sommes familiarisés avec un dispositif expérimental simple composé d'une carte et d'un capteur intégré pour mesurer l'accélération. Nous souhaitons maintenant faire en sorte d’afficher les données sur un dispositif adapté et non sur l’ordinateur.

💡 **Conceptualisation**

La carte STM32 fournit une unité de traitement et de l'espace mémoire pour stocker et exécuter un programme. Elle est équipée de capteurs embarqués pour mesurer divers paramètres tels que la température, la pression, l'humidité, l'accélération, la rotation, etc. Elle dispose également d'interfaces pour se connecter et communiquer avec d'autres appareils. Dans ce cas particulier, nous devons connecter et utiliser un petit écran pour afficher en texte les valeurs de nos mesures.

🔎 **Investigation**

À cette étape, nous suivons les instructions détaillées de la Fiche de programmation 2 pour utiliser l’écran et afficher les valeurs de nos mesures. Nous vérifions si les valeurs sont correctement affichées. Puis, nous effectuons quelques tests en fixant l'appareil sur notre bras, notre jambe, notre corps, etc. Nous faisons des sauts ou des mouvements rapides pour voir ce qui est enregistré.

<aside>
🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 2 - Afficher les données sur un écran.**

[PROG10-TDL-2](https://www.notion.so/PROG10-TDL-2-aeac86e3d21947189dcc23bc6944fe70?pvs=21)

</aside>

Nous élaborons un plan d'étude de cas. Nous pouvons d'abord décider sur quelles parties de notre corps nous voulons fixer notre appareil et collecter des données. Il peut s'agir de la tête, de la main, du bras, de la taille ou de la jambe. Ensuite, nous pouvons décider de certains mouvements standards tels que la marche, le saut ou la course. Nous préparons également un tableau de mesures sur papier ou sur une feuille de calcul numérique, divisé en plusieurs colonnes (parties du corps) et lignes (mouvements). Dans chaque cellule du tableau, nous écrirons la valeur d'accélération correspondante que nous mesurons. Voici un exemple de tableau :

| Mesures relevées par l’accéléromètre | Tête | Bras | Taille | Jambes |
| --- | --- | --- | --- | --- |
| Marche |  |  |  |  |
| Saut |  |  |  |  |
| Course |  |  |  |  |
| Crazy Dance ! |  |  |  |  |

Maintenant que nous avons préparé et installé notre appareil de mesure ainsi que notre plan d'enquête, nous pouvons commencer à enregistrer les données pour chaque cas.

💬 **Débriefing**

Au cours de cette phase, nous avons accompli les tâches suivantes :

- Comprendre les éléments de base et les fonctionnalités d'une carte.
- Se familiariser avec l'utilisation d'un capteur embarqué.
- Utiliser un programme pour afficher des données sur un écran.

### Étape 3 - Analyser les données

🧭**Orientation**

Dans l'étape précédente, nous avons rempli notre tableau/feuille de mesures, ce qui nous a donné nos données. À partir de celles-ci, nous souhaitons tirer des enseignements et répondre à notre question de départ.

💡**Conceptualisation**

Nous avons collecté nos données à l'aide de notre appareil et il est maintenant temps de les analyser afin d'en extraire des informations pertinentes. Pendant cette étape, si nous avons enregistré plusieurs valeurs pour un même cas, nous pouvons introduire le concept de moyenne ou de valeur moyenne issue des statistiques de base. En général, dans les enquêtes scientifiques et les expériences, nous effectuons plusieurs mesures et concluons à une valeur finale en calculant une moyenne comme meilleure estimation.

🔎**Investigation**

Nous parcourons notre tableau de données enregistrées des mesures. Nous comparons les résultats pour chaque cas et essayons de déterminer la combinaison de partie du corps et de mouvement qui produit la valeur la plus élevée. Nous pouvons également trier les valeurs de la plus faible à la plus forte et les représenter graphiquement. Pour cela, nous pouvons utiliser un tableur numérique tel qu'Excel ou Open/Libre Office et établir une série de graphiques de manière systématique, par exemple les valeurs pour le bras en fonction des mouvements ou les valeurs pour un mouvement particulier en fonction des différentes parties du corps.

Nous pouvons répéter notre série de mesures avec le même ensemble de mouvements et de parties ou en choisir de nouveaux pour vérifier si nous obtenons des résultats similaires aux précédents. Nous pouvons même organiser un concours amusant, par exemple pour savoir qui obtiendra la valeur la plus élevée en dansant comme un fou !

Enfin, nous discutons de nos résultats en classe et réfléchissons à l'ensemble du processus, depuis le début du projet jusqu'à sa fin. Il est important de comprendre que c'est ainsi que les scientifiques et les chercheurs mènent des expériences et des enquêtes scientifiques pour essayer de comprendre la nature et ses phénomènes.

💬 **Débriefing**

Au cours de cette phase, nous avons effectué et réalisé les actions suivantes :

- Collecter des données pour différents cas.
- Analyser et comparer les données pour chaque cas.
- Extraire les informations pertinentes et en tirer des conclusions.
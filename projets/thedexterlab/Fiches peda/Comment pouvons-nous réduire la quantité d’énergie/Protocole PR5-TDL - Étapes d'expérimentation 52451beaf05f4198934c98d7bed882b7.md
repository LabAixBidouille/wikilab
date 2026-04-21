# Protocole PR5-TDL - Étapes d'expérimentation

### Étape 1 - Créer une maquette d’une habitation

🧭**Orientation**

Dans un souci de mise en œuvre en classe, nous allons réaliser des expériences d'isolation uniquement contre une source de chaleur extérieure. Pour ce faire, il faut disposer d’une maquette miniature d’une maison que l’on viendra agrémenter de parois isolantes au fur et à mesure des expériences. L’une des expériences visant à gérer l’ouverture d’une surface réfléchissante pour aider à réguler la température sans apport d’énergie, la maquette devra disposer d’un ouvrant. 

💡**Conceptualisation**

La maquette construite doit représenter une maison et permettre d’illustrer comment l’isolation permet d’économiser de l’énergie en évitant de devoir chauffer ou refroidir l’air intérieur pour maintenir des conditions de confort acceptable pour un humain. On considère comme confortable, une plage de température de 17°C à 30°C. Dans un intérieur domestique, on cherche souvent à obtenir une régulation de la température sur des plages plus restreinte mais cela permettrait d’illustrer moins facilement l’effet de l’isolation sur la variation de la température.

La maquette de départ, doit avoir des parois les moins isolantes possibles. L’ajout de l’isolation doit se faire simplement sans nécessiter de modifier la structure du bâti. Idéalement, si la maquette à une forme simple composée de faces planes triangulaires, rectangulaires ou trapézoïdales, l’isolant peut être simplement une feuille découpée à la règle et au cutter à la bonne forme que l’on viendra plaquer contre les parois existantes (par l’intérieur comme par l’extérieur). Pour faire tenir les feuilles d’isolant pendant les expériences, du scotch double face ou de la [Patafix](https://www.uhu.fr/fr/produit.35801) sont suffisants. Si une découpe laser ou une CNC sont disponibles, il est possible de faire les découpes plus précisément et rapidement. Dans ce cas, l’isolant peut venir se fixer avec des aimants plats pour faciliter les manipulations.

En plus de cela, il faut disposer d’un ouvrant pour réguler la température grâce à la ventilation naturelle. Cet ouvrant doit être assez facile à soulever pour qu’un servomoteur simple puisse être utilisé pour l’automatisation de la régulation.

🔎 **Investigation**

Plutôt que de réinventer la roue, pour cette maquette, il est possible de partir de solutions déjà existantes et/ou peu onéreuses à fabriquer. Au vu des contraintes, l’utilisation d’une mini-serre est ce qui correspond le mieux au besoin. Les parois transparentes permettent de facilement montrer la vulnérabilité de la maquette à la montée à température avec une simple lampe de bureau.

![Untitled](Protocole%20PR5-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation/Untitled.png)

La réalisation d’une mini-serre automatisée étant citée dans les programmes de technologie, il existe plusieurs exemples disponibles que l’on peut adapter au besoin de ce protocole : 

[ÅKERBÄR Serre - intérieur/extérieur/anthracite 65 cm](https://www.ikea.com/fr/fr/p/akerbaer-serre-interieur-exterieur-anthracite-20537175/)

[Pack Serre Autonome sans interface de programmation](https://technologieservices.fr/ts_fr/277629.html)

[Maquette mini-serre en kit](https://www.a4.fr/maquette-mini-serre-en-kit.html)

[](https://eduscol.education.fr/sti/sites/eduscol.education.fr.sti/files/ressources/pedagogiques/12399/12399-serre-autonome-connecteev2.pdf)

[Projet de Sciences et Technologie cycle 3](https://etab.ac-poitiers.fr/coll-st-agnant/spip.php?article180)

Si la mini-serre n’est pas utilisée dans un autre projet, il vaut mieux faire une maquette la plus simple possible pour réduire les coûts au maximum. Il existe des kits à 10€ qui sont suffisants pour faire le protocole :

[Maquette la Serre à assembler complètement](https://technologieservices.fr/ts_fr/270203.html)

La reproduction du kit peut se faire à coût encore plus réduit avec des matériaux facilement disponibles en grandes surfaces de bricolage.

La notice de fabrication est disponible ici : [https://technologieservices.fr/media/akeneo_connector/asset_files/N/o/Notice_TS_dossier_technique_KT5016_270203_FR_bb92.pdf](https://technologieservices.fr/media/akeneo_connector/asset_files/N/o/Notice_TS_dossier_technique_KT5016_270203_FR_bb92.pdf)

La réalisation des isolants est suffisamment simple car ils sont de forme triangulaires ou rectangulaires. L’ouverture étant de pleine largeur, il est possible de positionner l’isolant aussi bien à l’intérieur qu’à l’extérieur.

💬**Débriefing**

La réalisation de la maquette est l’étape préliminaire de ce protocole. La détermination précise du besoin permet lors de la phase de conceptualisation d’orienter les élèves vers des solutions similaires qui pourraient être facilement détournés pour satisfaire au besoin. Le choix d’une mini-serre permet de facilement illustrer l’apport d’énergie solaire. 

L’automatisation de l’ouverture est assurée par l’usage d’un servomoteur simple d’usage et facile à programmer.

### Étape 2 - Collecter des données

🧭**Orientation**

**Contexte :** Dans un souci de mise en œuvre en classe, nous allons réaliser des expériences d'isolation uniquement contre une source de chaleur extérieure.

**Objectif :** Mesurer la température de manière directe.

💡**Conceptualisation**

Il existe plusieurs solutions pour optimiser l'efficacité énergétique d'un bâtiment. Existe-t-il un matériau plus performant ? Comment éviter les échanges de chaleur entre l'extérieur et l'intérieur d'un logement ? Pour réaliser nos expériences, nous utiliserons une maquette et un capteur de température branché sur une carte programmable. Nous réfléchirons également à différentes méthodes de construction (choix des matériaux, simple ou double paroi).

🔎**Investigation**

Pour comprendre l’efficacité de chaque matériau en tant qu’isolant, nous allons mener notre enquête pour observer comment évolue la température à l’intérieur de la maquette au fil du temps. Pour commencer, préparer la maquette pour l’expérience :

1. Prendre en main la maquette et installer un matériau isolant au choix (papier, bois, carton, verre, aluminium, couverture de survie, …).
2. Installer une lampe.
3. Positionner le capteur de température.
4. Brancher et exécuter le programme pour collecter les données.

<aside>
🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 1 - Collecter les données grâce au capteur de température**.

[PROG5-TDL-1](https://www.notion.so/PROG5-TDL-1-4d2ea5f7199e4fa58c3b6b6ac22c3b4d?pvs=21)

</aside>

Les données récupérées, peuvent être mises dans le tableau suivant permettant de comparer les différentes expériences :

| Isolant | Heure | Température intérieure | Température extérieure | Écart de température | Observation / Commentaire |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |

La première colonne montre l'isolant utilisé, la deuxième indique l'heure à laquelle la mesure a été prise, la troisième la température à l'intérieur de la maquette, la quatrième la température à l'extérieur de la maquette (comme la température de la pièce), la cinquième permet de calculer la différence de température entre l'intérieur et l'extérieur, et la dernière sert à enregistrer les observations de l'expérimentateur pendant l'enquête.

💬 **Débriefing**

Durant cette expérience, nous avons pu observer l’impact de l’ajout d’un isolant sur la variation de la température d’un bâtiment. La source de chaleur étant une lampe, certains isolants sont avantagés par leur caractère réfléchissant.

### Étape 3 - Interactions utilisateur : Affichage de la température et régulation avec une ventilation naturelle

🧭 **Orientation**

**Contexte :** Dans la partie précédente, nous avons vu comment demander à un capteur d'obtenir des informations. Il serait maintenant utile de pouvoir communiquer ces informations à l'utilisateur. L’utilisateur devra pouvoir activer l’ouverture de la trappe pour réduire la température grâce à la ventilation naturelle.

**Objectifs :** Sélectionner le matériel approprié parmi les actionneurs disponibles.

💡**Conceptualisation**

Pour informer l'utilisateur de la température mesurée, la première solution qui vient à l'esprit est l'utilisation d'un afficheur externe de type écran. L’ajout de la ventilation naturelle doit pouvoir être activée à la demande de l’utilisateur en appuyant sur un bouton.

🔎**Investigation**

1. Choisir l'actionneur approprié dans une boîte d'actionneur.
2. Positionner l'actionneur choisi.
3. Brancher et exécuter le programme pour collecter les données.
4. Mesurer la température.

<aside>
🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 2 - Afficher les données collectées sur un écran.**

[PROG5-TDL-2](https://www.notion.so/PROG5-TDL-2-673a966fc9324a6faa96a9fee2e2ba48?pvs=21)

</aside>

💬 **Débriefing**

Lors de cette étape, le système a ajouté de l’interaction utilisateur. Cette interaction permet à l’utilisateur d’avoir un retour d’information sur la température intérieure et d’agir sur la trappe de ventilation pour réduire la température quand il le souhaite. Un système domotique, doit permettre à l’utilisateur d’adapter son environnement à ses besoins. Pour ce faire, il a besoin à la fois d’un retour d’information comme de possibilité d’agir sur le système.

### Étape 4 - Analyser les données

🧭**Orientation**

**Contexte :** Nous avons pu afficher les données instantanément. Nous allons réaliser des hypothèses et tester différentes expériences.

**Objectifs :** Analyser les données mesurées et les extraire dans un fichier.

💡**Conceptualisation**

Afin de comparer l'efficacité énergétique d'un matériau en simple ou en double paroi, l'utilisation d'un tableur serait une solution simple. Pour récupérer les données provenant de différents capteurs sur une longue période et dans plusieurs conditions, on peut utiliser les fonctionnalités de journalisation et d’export de la carte programmable. Pour ce faire, les données vont être écrites au format CSV (Comma Separated Values ou valeurs séparées par des virgules) via le port série. Ce format est exploitable directement par un tableur. Une fois les données récupérées, une première analyse sera faite à travers la comparaison de plusieurs courbes avec plusieurs isolants différents.

🔎**Investigation**

1. Modifier les parois de la maquette.
2. Effectuer des relevés de température.
3. Remplir le tableau.
4. Faire une conclusion et rechercher sur Internet des solutions pour le bâtiment.

| Isolant | Heure | Température intérieure | Température extérieure | Écart de température | Observation / Commentaire |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |

💬 **Débriefing**

Dans cette étape, nous avons récupéré des données sur une plus longue durée pour permettre une analyse plus fine et plus abouti sur l’effet des isolants. L’utilisation des courbes permet de se rendre compte visuellement des effets de chaque isolant. La comparaison des différentes courbes permet d’approcher plusieurs aspects d’une isolation comme la résistance thermique ou le déphasage. La comparaison entre un grand nombre d’expériences à travers les courbes est une occasion de discuter de la dynamique des variations de températures. 

### Étape 5 - **Réaliser un pare-soleil asservi au taux d’ensoleillement**

🧭**Orientation**

**Contexte :** Nous allons faire varier la lumière. Serait-il possible de faire varier l'occultation d'une ouverture en fonction du taux d'ensoleillement ? Cette méthode serait-elle efficace ?

**Objectifs :** Analyser les données mesurées et tirer une conclusion.

💡**Conceptualisation**

La source de chaleur étant une source lumineuse (lampe de bureau dans la maquette), en plus de l’isolation, il est intéressant de réfléchir la lumière pour renvoyer son énergie dans l’atmosphère. Pour se faire, en plus de l’ouverture des aérations naturelles, nous allons ajouter un pare-soleil réfléchissant réalisé avec de la couverture de survie. Ce volet sera programmable pour réaliser une régulation de la température intérieure sur une consigne donnée par l’utilisateur.

🔎**Investigation**

1. Programmer le servomoteur pour ouvrir et fermer un store.
2. Programmer un capteur de luminosité.
3. Programmer un programme d’ouverture et fermeture du store en fonction de la luminosité.
4. Mettre en œuvre le programme de récupération des données.
5. Récupérer les données dans un tableur.
6. Analyser les données collectées.
7. Conclure en faisant des recherches sur Internet.

<aside>
🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 3 - Réaliser un pare-soleil asservi grâce à un servomoteur.**

[PROG5-TDL-3](https://www.notion.so/PROG5-TDL-3-9a5a240d334a4e9f99328a34d382674e?pvs=21)

</aside>

💬 **Débriefing**

En plus de l’isolation, nous avons vu qu’une partie de l’énergie thermique provenant de l’extérieur peut être renvoyée dans l’atmosphère simplement en utilisant la nature réfléchissante de certains matériaux. Comme parfois, on veut récupérer cette énergie pour bénéficier d’une source de chauffage gratuit, nous avons fait en sorte que le pare-soleil soit amovible et puisse être rétracté pour créer une régulation naturelle de la température.

En plus de la température, cette régulation pourrait gagner en réactivité à réagir aussi sur la luminosité en ajoutant des capteurs à l’extérieur de la maquette.

Ce protocole en plus de fournir une opportunité de réfléchir à la problématique des économies d’énergie, il traite aussi du confort de l’habitat qui est aussi central pour proposer un logement qui est aussi bénéfique pour l’environnement que pour le bien-être de ses utilisateurs. Une discussion sur les maisons à énergie positive peut-être l’occasion de faire le lien avec les protocoles autour des énergies renouvelables.

Le bien-être de l’habitat n’est pas uniquement lié à la température, en ajoutant des capteurs à la maquette créée pour ce protocole, il peut être possible de discuter aussi de l’apport de la ventilation naturelle pour l’évacuation des composés chimiques toxiques produits par les revêtements intérieurs.
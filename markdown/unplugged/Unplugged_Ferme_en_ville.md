# Ferme en ville

## De quoi parle-t-on ?

Cette fiche d'activité donne des informations sur la construction du défi débranché "La ferme en ville" basé sur les ensembles dominants. Les ensembles dominants (appartenant à la discipline mathématique de la théorie des graphes) permettent d'aborder à l'école la résolution de problèmes d'optimisation sur des problématiques tangibles et intuitivement compréhensibles. Ainsi, grâce à cette activité, nous pouvons aborder, dès un jeune âge et de manière simple, des concepts plus ou moins complexes d'algorithmie (pouvant être appliqué au domaine de la pensée informatique). L'activité Ferme en Ville donne une version simple et accessible de l'utilisation des ensembles dominants pour résoudre un problème combinatoire.

> Ressources imprimables jointes : Carte de la ville, feuille de travail sous forme de graphe à imprimer, badges pour personnifier la partie jeu de rôle et ludifier l'activité

---

## Informations générales

| | |
|---|---|
| **Territoire** | Territoire 2 - La Communauté |
| **Durée totale** | 1 heure |
| **Âge** | 6 - 12 ans |
| **Matériel supplémentaire nécessaire** | Crayons de couleur, papiers translucides |
| **Modalités de jeu** | Travail en groupe, en classe, à la maison, soutien d'un adulte |
| **Inspiré par** | CS Unplugged — [https://classic.csunplugged.org/activities/dominating-sets/](https://classic.csunplugged.org/activities/dominating-sets/) |

### Objectifs d'apprentissage

- Comprendre les systèmes naturels et les systèmes techniques
- Acquérir le sens des règles de la vie en commun
- Comprendre la relation entre l'objet et l'espace
- Partager les règles, assumer les rôles et les responsabilités
- Comprendre les représentations du monde et de l'activité humaine

---

> Cette production fait partie du matériel produit par le projet Unplugged qui a reçu un financement du programme ERASMUS + de l'Union européenne sous la convention de subvention n° 2020-1-FR01-KA227-SCH-095528. Cette publication n'engage que son auteur et la Commission ne peut être tenue responsable de l'usage qui pourrait être fait des informations qu'elle contient. Cette œuvre est placée sous licence Creative Commons Attribution-ShareAlike 4.0 International License (http://creativecommons.org/licenses/by-sa/4.0/), ce qui permet une utilisation, une distribution et une reproduction sans restriction sur n'importe quel support, à condition de citer de manière appropriée le ou les auteurs originaux et la source, de fournir un lien vers la licence Creative Commons, d'indiquer si des modifications ont été apportées et de partager de la même manière.

---

## Intérêt pédagogique et sujets ciblés

### Intérêt de l'activité pour la compréhension de concepts mathématiques - la théorie des graphes et les ensembles dominants

De nombreuses situations de la vie réelle peuvent être abstraites sous la forme d'un "graphe" ou plus communément un dessin de réseaux reliant des objets par des arêtes. Les graphes présentent un grand intérêt pour le développement d'algorithmes car ils permettent de modéliser des relations entre un ensemble fini d'entités en considérant à la fois leur propriété et leurs interactions. Les entités sont les sommets ou les nœuds de nos réseaux représentés de manière simplifiée. L'image ci-contre est un exemple très simple d'un dessin de graphe, où chaque chiffre représente une entité, un objet. Les liens entre les nœuds sont les arêtes du graphe.

Afin d'illustrer le concept de graphe et d'ensembles dominants, nous vous proposons une activité simple qui permettra de comprendre les interactions entre entités mais également leurs limites. Pour ce faire, nous considérons une ville, avec plusieurs rues (nos arêtes) qui se croisent créant ainsi des carrefours (qui seront représentées par des nœuds), et un défi : créer un réseau de fermes urbaines permettant à chaque citoyen de trouver à proximité de son habitation, des fruits et légumes en circuit court. Nous utilisons le plan ci-contre pour représenter la ville. Comme nous pouvons le remarquer, la ville est constituée d'arêtes (nos rues, en gris) qui relient entre eux des sommets (nos carrefours représentés par des points blancs).

Grâce au concept mathématique de graphe, nous pouvons représenter de notre ville par une modélisation mathématique qui simplifie les concepts initiaux. Si vous superposez notre plan et notre graphe, vous verrez que les deux représentations coïncident parfaitement, l'une étant complexe car comprenant beaucoup d'informations non nécessaires à la résolution du problème (i.e. trouver la localisation optimale de fermes urbaines pour desservir l'ensemble des citoyens de notre ville). La seconde étant bien plus simple, en proposant uniquement les informations utiles (les zones où l'on peut situer les fermes i.e. les sommets, et les rues adjacentes qui seront desservies par ces fermes i.e. les arêtes).

Afin de résoudre le problème, nous utiliserons donc le graphe de la ville afin de proposer une localisation optimale des fermes. Pour ce faire, nous vous proposons une activité simple : en utilisant les carrefours (les sommets), localisez la première ferme. Une fois localisée, nous pouvons considérer que les habitants logés dans les rues adjacentes (i.e. ceux situés sur l'une des arêtes touchant le sommet) seront desservis. Pour ce faire, vous pouvez utiliser le graphe proposé et colorer le sommet (ou le carrefour) où se trouvent votre ferme et les arêtes adjacentes (les rues) afin de visualiser votre choix, comme sur le schéma ci-contre. Suite à cette première étape, vous pouvez continuer avec le positionnement d'une deuxième, troisième, quatrième.

À ce stade, l'activité est simple, il suffirait de placer une ferme sur chaque sommet pour couvrir entièrement la ville. Ajoutons une contrainte intuitive pour éviter la redondance de fermes : nous ne souhaitons avoir un minimum de ferme qui couvrent l'ensemble de la ville (toutes les rues). Pouvons-nous trouver facilement un ensemble minimal d'emplacements qui puissent permettre de couvrir toute la ville ? Cela revient à chercher, quel est le nombre minimal de fermes à positionner pour permettre à chaque citoyen d'avoir un accès facile à de la nourriture ? Bien que facile à formuler, il s'agit en réalité d'un problème étonnamment difficile mathématiquement à résoudre. Aujourd'hui, personne ne sait encore s'il existe un algorithme de calcul de cet ensemble minimal d'emplacements qui serait plus efficace qu'une méthode manuelle d'essais/erreurs et/ou d'itérations de stratégies (appelées des heuristiques).

Nous vous proposons de faire travailler les élèves individuellement pour commencer, en leur fournissant le graphe de la ville - imprimable 2 (sur papier transparent si vous souhaitez superposer les résultats ou sur papier normal) et de leur demander de couvrir leur ville avec le moins de fermes possible sans insister sur la méthode à appliquer. Pour motiver les troupes, vous pouvez proposer cela sous la forme d'un défi à l'échelle de la classe. Lorsque l'ensemble des élèves auront proposé la solution qu'ils pensent optimale, vous pourrez comparer les résultats. Pour faire comprendre que derrière chaque solution, il y avait un processus (que l'on nommera plus tard algorithme), demander aux élèves ayant eu des bonnes solutions d'expliquer comment ils les ont trouvées. Bien souligner les choix, les répétitions et les stratégies mises en œuvre pour faire comprendre les concepts clefs de l'algorithmie. À partir de cette systématisation orale, demandez à la classe de recommencer le défi pour proposer le "meilleur algorithme" possible.

Grâce à cette activité, les élèves aborderont donc plusieurs sujets, notamment la cartographie, les relations, la résolution d'énigmes et la recherche itérative d'objectifs, la combinatoire et la théorie des graphes.

### Aborder simplement la théorie des jeux

Afin de complexifier l'activité, vous pouvez également introduire des rôles proposés ci-dessous pour aborder la théorie des jeux. En effet, en réitérant le jeu, chaque joueur peut mettre en œuvre une stratégie qui ne suivra pas la même logique d'un tour à l'autre. En introduisant de nouvelles contraintes liées aux rôles dans le jeu, chaque joueur aura des objectifs contradictoires. Nous vous proposons d'introduire jusqu'à 4 rôles et de proposer aux enfants, en secret, les objectifs suivants :

- **Citoyens :** Avoir accès à un maximum de services publics et économiques dans la ville - Objectif caché : augmenter le nombre de fermes urbaines proposées sur le territoire de la ville.
- **Agriculteurs urbains :** Proposer un service rentable i.e. un bon rapport coût/bénéfice dans l'installation de leurs points de récolte et de vente - Objectif caché : avoir un minimum de fermes pour un maximum de clients.
- **Promoteurs immobiliers / Constructeurs :** Faire prendre de la valeur à leur immeuble grâce à des services additionnels - Objectif caché : proposer un maximum de service de fermes urbaines afin d'attirer des résidents dans les immeubles.
- **Planificateur urbain** (rajouter sur le graphe des arrêts de bus de manière aléatoire) : Trouver la meilleure adéquation entre les services fournis aux citoyens par le public et par le privé - Objectif caché : Localiser les fermes à proximité d'un arrêt de bus afin de valoriser la planification des transports urbains.

Au regard des différents rôles proposés, on peut d'ores et déjà identifié de potentielles alliances, par exemple entre l'agriculteur et le planificateur urbain, ou entre le citoyen et le promoteur. En favorisant des discussions entre chacun de ces représentants (travail en groupe pour cette étape), les enfants pourront choisir leur stratégie qui ne correspondra plus à une contrainte unique mais à une pluralité de besoins parfois antagonistes. Ils pourront ainsi décider soit de jouer collectivement, c'est-à-dire coopérer, soit de jouer individuellement en essayant d'influencer les autres membres du groupe, et donc de rentrer dans une logique de compétition. En tant qu'enseignant facilitateur, vous aurez la charge d'encourager la recherche d'une stratégie gagnant-gagnant. Cette seconde phase du jeu permettra de travailler sur l'approche des pratiques de citoyenneté et de vivre ensemble. Dans ce cadre, la théorie des jeux doit nous permettre d'apprendre que le jeu définit les joueurs, mais qu'à terme, c'est nous, les joueurs, qui définissons le jeu.

### Discussion ouverte sur la consommation alimentaire et les pratiques de la ville intelligente

Enfin, comme l'ensemble des activités proposées dans la Quête Unplugged, nous souhaitons pouvoir permettre aux enseignants d'ouvrir la discussion sur des questions sociétales en classe. Dans le cadre du jeu "Ferme en ville", l'objectif est de permettre aux enfants d'en apprendre davantage sur l'agriculture urbaine, les systèmes alimentaires locaux et l'importance des villes apprenantes pour faciliter l'adoption de pratiques plus durables par les citoyens qui soutiennent les politiques urbaines. En plus de la mise en œuvre du jeu, il est également possible de jeter un coup d'œil aux autres ressources fournies dans ce document pour lancer des projets agricoles concrets avec les élèves et illustrer la nécessité de ces pratiques même au travers d'une activité mathématique.

---

## Règles du jeu

**Bienvenue dans notre ville.** Après plusieurs années de politiques publiques visant à stimuler l'urbanisation, les citoyens demandent aujourd'hui aux autorités locales de prioriser leur bien-être, par une meilleure offre de service, publique et privée, de qualité (par exemple dans les domaines du transport et de l'alimentation saine et abordable). Grâce aux dernières élections, un changement dans l'élaboration des politiques de la ville a permis de promouvoir de nouvelles pratiques et de consacrer des fonds publics au développement de la "ville de demain" dont la priorité première fut donnée à l'agriculture urbaine. En réponse à cette nouvelle initiative, un groupe d'agriculteurs essaie de trouver la meilleure stratégie au sein de la ville pour localiser leurs exploitations, en considérant à la fois la minimisation des coûts, tout en s'assurant un nombre maximal de clients et ainsi que chaque citoyen accède facilement à leur production.

### Règles du jeu

Le jeu "Ferme en ville" est constitué d'un enchaînement d'activités permettant de découvrir la théorie des graphes et les ensembles dominants. Nous proposons pour ce faire aux enseignants, de réaliser les activités suivantes :

- Les enfants seront tout d'abord amenés à travailler de manière individuelle. Ils représenteront des agriculteurs urbains, qui cherchent à répondre à la problématique : comment minimiser le nombre d'exploitation en maximisant le nombre de clients ? Pour ce faire, chacun travaillera sur son propre graphe. Les élèves compareront leur résultat en comptabilisant à la fois : le nombre de fermes installées et le nombre de rues couvertes. L'élève/Les élèves qui auront trouvé la meilleure adéquation entre le nombre de fermes et le nombre de rues gagneront cette manche.
- Les enfants pourront ensuite travailler en groupe, une fois que l'activité initiale mathématique aura été comprise. Ils représenteront au choix le groupe d'agriculteurs, les planificateurs urbains, les citoyens ou les propriétaires d'immeubles. L'enseignant aura à charge de distribuer les rôles et d'informer secrètement chaque groupe d'élève de leurs objectifs cachés. Des groupes mixtes seront créés, chaque joueur endossant le rôle d'un représentant de la ville. Faire expérimenter aux enfants des positions différentes permettra de confronter les stratégies. Rappelez-leur aussi souvent que possible les différents objectifs qu'ils poursuivent : minimiser (les agriculteurs, les planificateurs), maximiser (le propriétaire du bâtiment, les citoyens) ou optimiser (la stratégie gagnant-gagnant). A la suite de ce round, les élèves devront présentés leur stratégie et les difficultés rencontrées. L'équipe ayant réussi à trouver la meilleure stratégie gagnant-gagnant sera sacrée championne de cette manche.

### Le rôle de l'enseignant dans le déroulé de l'activité

1. Explique les règles au cours des différents tours et s'assure que tous les joueurs ont compris le jeu et leurs rôles.
2. Facilite le processus de collaboration en équipe.
3. Sert de médiateur pour le partage des stratégies et le processus de négociation lors du troisième tour.
4. Ouvre une discussion sur les villes durables, notamment sur le transport, la production et l'approvisionnement alimentaires, et les principes de la vie en commun.

---

## Phases de jeu

### Phase 1 - Comprendre les ensembles dominants

*L'enseignant / le médiateur :* "Bienvenue à tous à cette première réunion de travail du projet "Ferme en Ville". Je me présente, je suis votre nouveau maire élu. Après plusieurs années de politiques publiques visant à stimuler l'urbanisation à outrance, j'ai fait du bien-être de mes concitoyens une priorité de ma campagne électorale et je compte bien tenir mes engagements. Mon premier grand chantier sera de proposer un accès moins coûteux, car plus local à une alimentation saine à un maximum d'habitants de notre territoire. Je vous ai donc réunis en votre qualité d'agriculteurs engagés, afin de proposer la création d'un réseau de fermes urbaines, utilisant l'espace non optimisé disponible sur les toits de tous ces immeubles qu'avait fait construire la municipalité précédente en partenariat avec les promoteurs immobiliers. Je sais que la question du coût de ces nouvelles installations vous inquiète, nous ne pouvons honnêtement pas promettre de créer un point de récolte et de vente à chaque coin de rue. Mais je vous demande tout de même de réfléchir individuellement à une proposition qui pourrait nous permettre de couvrir un maximum de rues de notre ville, en minimisant le nombre d'installations à effectuer dans l'année à venir. J'attends vos propositions !"

Le jeu commence par une présentation des objectifs et de l'histoire. À ce stade, tous les élèves ont le même objectif : créer un réseau de fermes urbaines avec pour contrainte de minimiser le nombre d'installation tout en maximisant le nombre de rues qui seront desservies par ces points de récolte et de vente. Ils représentent tous des agriculteurs, rassemblés par la municipalité pour réaliser une première proposition de réseau.

Pour ce faire, chaque élève recevra une feuille de travail sous forme de graphe (imprimable 2), représentant la version simplifiée de la ville fictive dans laquelle nous évoluons (vous pouvez leur montrer la version complexe de la ville - imprimable 1 - et la version simplifiée - imprimable 2 - afin de leur introduire les bases de la théorie des graphes). Sur le graphe, la consigne sera simple : positionner des fermes au niveau des carrefours (sommets du graphe) afin de desservir les rues adjacentes. Pour ce faire, vos élèves devront tout d'abord placer la première ferme sur un sommet, puis colorier toutes les rues concernées par leurs choix (comme sur le schéma ci-dessous). Puis, ils réitèreront la même démarche avec une seconde ferme puis une troisième etc. Au fur et à mesure de leurs choix, rappelez-leur que les fermes coûtent cher et que l'idée est d'en avoir le moins possible. Il est évident que sans contrainte, nous pourrions en placer une à chaque intersection - la question intéressante est de savoir de combien de fermes nous avons besoin au minimum. Afin de faciliter les itérations, vous pouvez fournir plusieurs feuilles de graphe par élève, ou les faire travailler avec des crayons qui s'effacent facilement, car les stratégies seront amenées à évoluer au fur et à mesure que l'élève prendra en main l'activité et construira son intuition du processus de création d'une bonne solution (l'algorithme).

Une fois que le temps imparti pour l'activité sera écoulé (environ 10-15 minutes), chaque élève comptabilisera le nombre de fermes qu'il/elle aura placé ainsi que le nombre de rues desservies. En mettant en commun ces résultats, vous pourrez élire l'élève/les élèves qui ont trouvé les solutions les plus optimales.

### Phase 2 - Introduction des objectifs cachés

*L'enseignant / le médiateur :* "Bienvenue à tous à cette seconde réunion qui fait suite à une consultation lancée auprès d'agriculteurs locaux dans l'optique de proposer à nos concitoyens un réseau optimal de fermes urbaines pour favoriser l'accès à une alimentation plus saine et locale au sein de notre ville. En tant que maire nouvellement élu, je souhaitais impliquer le plus tôt possible l'ensemble des parties prenantes dans ce projet, c'est pour cela que je vous ai réuni aujourd'hui. Avec notre groupe d'agriculteurs consultatifs, nous avons d'ores et déjà défini une première stratégie de localisation de fermes afin de couvrir un maximum de notre territoire. En tant que représentants des différents acteurs associés à ce projet - citoyens, promoteurs, planificateurs, agriculteurs - nous souhaitons avoir votre avis et connaître votre point de vue stratégique sur ce projet. Nous vous proposons donc une session de travail collectif afin de trouver, nous l'espérons, une stratégie commune à la fin de cette journée ! Nous espérons observer des discussions respectueuses tout au long de ce débat. Merci d'avance pour votre contribution précieuse".

La seconde phase du jeu commence par une présentation du contexte et de l'histoire. Après avoir reçu les propositions des agriculteurs, les autorités locales sont prêtes à ouvrir le débat aux représentants de la société, en particulier afin de s'assurer du soutien du plus grand nombre d'acteurs pour lancer ce projet. En tant que médiateur, vous divisez donc la classe en 4 groupes d'élève afin de distribuer les rôles. Chaque groupe se voit attribuer une fonction, et un objectif caché que vous ne révélez qu'aux élèves composant le groupe en question. Les rôles sont les suivants (vous pouvez distribuer des badges disponibles dans la section imprimable afin de ludifier cette phase) :

- **Citoyens :** Avoir accès à un maximum de services publics et économiques dans la ville - Objectif caché : augmenter le nombre de fermes urbaines proposées sur le territoire de la ville.
- **Agriculteurs urbains :** Proposer un service rentable i.e. un bon rapport coût/bénéfice dans l'installation de leurs points de récolte et de vente - Objectif caché : avoir un minimum de fermes pour un maximum de citoyens (clients) couverts.
- **Promoteurs immobiliers / Constructeurs :** Faire prendre de la valeur à leur immeuble grâce à des services additionnels - Objectif caché : proposer un maximum de service de fermes urbaines afin d'attirer des résidents dans les immeubles.
- **Planificateur urbain** (rajouter sur le graphe des arrêts de bus de manière aléatoire) : Trouver la meilleure adéquation entre les services fournis aux citoyens par le public et par le privé - Objectif caché : Localiser les fermes à proximité d'un arrêt de bus afin de valoriser la planification des transports urbains.

Une fois les rôles distribués ainsi que les objectifs cachés, vous pourrez diviser votre classe en groupe de travail, chacun composé a minima d'un représentant de chaque catégorie d'acteurs. La phase 2 peut commencer. Une fois rassemblés en groupe, distribuez aux élèves de nouvelles feuilles de travail sous forme de graphe. Demandez leur de trouver une stratégie commune permettant de prendre en compte l'ensemble des demandes de chaque représentant et laissez les ouvrir le débat. N'hésitez pas à intervenir si vous constatez des blocages ou des tensions dans les groupes afin de soulever de nouvelles questions ou de recentrer la discussion.

Une fois le temps dédié écoulé (15 à 20 minutes), chaque groupe présentera sa stratégie et décrira les potentielles tensions, alliances et concessions rencontrées et mises en œuvre lors de cette phase. Alimentez la discussion sur cet aspect précis de la tenue d'un débat. En quoi le processus démocratique est-il complexe, tout en permettant de prendre en compte plusieurs points de vue ? Une fois le débriefing terminé, vous aurez la charge de désigner l'équipe qui a selon vous trouvé la meilleure stratégie gagnant/gagnant qui sera sacrée championne de ce tour de jeu ! Montrez que souvent la meilleure solution collective n'est pas nécessairement celle qui est optimale mathématiquement. Et que plus les objectifs contradictoires sont nombreux moins l'optimisation pure est intéressante. N'hésitez pas à la suite de cette phase, à ouvrir des discussions additionnelles sur les thèmes de la ville de demain, l'agriculture urbaine, proposez des activités créatives telles que la réalisation de bombes de graines pour faire fleurir les alentours de votre école... Libre à vous d'utiliser "Ferme en Ville" à de nouvelles fins !

---

## Aller plus loin

### Sujet 1 - Théorie des jeux, communication et confiance

Vous trouverez d'autres documents intéressants sur la théorie des jeux pour les enfants sur les sites suivants :

- [https://kids.kiddle.co/Game_theory](https://kids.kiddle.co/Game_theory)
- [https://kids.frontiersin.org/articles/10.3389/frym.2017.00066](https://kids.frontiersin.org/articles/10.3389/frym.2017.00066)

Pour vous entraîner davantage à la planification de stratégies d'équipe et à la communication, vous pouvez consulter d'autres activités Unplugged, par exemple The Perfect City, Pop-up City of the Future, Reroute better world, Good Ways, Brain Twister.

### Sujet 2 - Agriculture urbaine

Profitez de l'occasion de ce jeu pour discuter avec la classe des pratiques d'agriculture urbaine. Vous trouverez de plus amples informations sur l'agriculture urbaine sur le Web, notamment sur :

- [https://en.wikipedia.org/wiki/Urban_agriculture](https://en.wikipedia.org/wiki/Urban_agriculture)
- [https://www.unesco.org/en/articles/unesco-promotes-biodiversity-and-urban-gardening-its-own-premises](https://www.unesco.org/en/articles/unesco-promotes-biodiversity-and-urban-gardening-its-own-premises)
- [https://en.wikipedia.org/wiki/Urban_beekeeping](https://en.wikipedia.org/wiki/Urban_beekeeping)

D'autres documents intéressants sur l'agriculture urbaine adaptés aux enfants peuvent également être trouvés ici :

- [https://www.petitjourney.com.au/petit-childrens-garden-activities/](https://www.petitjourney.com.au/petit-childrens-garden-activities/)
- [https://www.littledayout.com/urban-farming-for-kids/](https://www.littledayout.com/urban-farming-for-kids/)

Vous pouvez également discuter avec les enfants des actions de guérilla en matière de jardinage : [https://en.wikipedia.org/wiki/Guerrilla_gardening](https://en.wikipedia.org/wiki/Guerrilla_gardening), et même créer une bombe de graines avec vos élèves : [https://littlebinsforlittlehands.com/make-seed-bombs-earth-day-activity/](https://littlebinsforlittlehands.com/make-seed-bombs-earth-day-activity/).

Enfin, pour introduire le sujet de l'agriculture durable et/ou urbaine, vous pouvez également consulter d'autres activités Unplugged, par exemple Cookies and Peace, PotLuck March, Ecosystem in a Jar, etc.

### Sujet 3 - Ville intelligente et apprenante

Découvrez avec vos élèves ce qu'est une ville intelligente :

- [https://mocomi.com/what-is-a-smart-city/](https://mocomi.com/what-is-a-smart-city/)
- [http://howtofunda.com/smart-city-model-school-project-for-science-exhibition/](http://howtofunda.com/smart-city-model-school-project-for-science-exhibition/)

Pensez et concevez votre propre environnement intelligent, en commençant par une école intelligente : [https://circularcomputing.com/news/10-ways-make-school-sustainable/](https://circularcomputing.com/news/10-ways-make-school-sustainable/). Créez des activités STEAM grâce à d'autres projets financés par l'UE, comme : [https://smartkidsproject.eu/](https://smartkidsproject.eu/). Pour vous entraîner davantage à la planification d'une ville intelligente, vous pouvez consulter d'autres activités Unplugged, par ex. The Perfect City, Pop-up City of the Future, etc.

---

## Imprimables

- **Imprimable 1 :** Plan de la ville - 1 pour la classe. Utilisez-le comme fond pour illustrer l'activité. Il permet uniquement de comprendre comment nous passons de la représentation d'une ville à celle d'un graphe simplifié. Les élèves ne seront pas amenés à travailler dessus.
- **Imprimable 2 :** Feuille de travail - Graphe. À utiliser pour réaliser l'activité. À imprimer sur du papier translucide (si vous souhaitez pouvoir superposer les résultats) ou du papier normal. A minima 1 par élève / 1 par groupe ou plus afin de tester plusieurs stratégies en réalisant plusieurs tours de jeu.
- **Imprimable 3 :** Badges "Rôles". Pour illustrer leur position. Ils peuvent être utilisés pour discuter des rôles dans la ville intelligente. Les enfants peuvent les dessiner dans les cases blanches.

### Description des rôles

- **Planificateur urbain** — Rôle dans la ville : Planifier l'organisation de la ville en fonction des orientations de la mairie, avec des contraintes de budget, de délais et de service public.
- **Citoyen** — Rôle dans la ville : Orienter les choix des politiques menées par la municipalité par le biais du droit de vote et d'actions citoyennes à la recherche d'une communauté paisible et équilibrée.
- **Constructeur** — Rôle dans la ville : Acteur privé cherchant à orienter les choix de la municipalité en matière d'urbanisation, percevoir les loyers des appartements et des bureaux et proposer des services aux habitants.
- **Agriculteurs urbains** — Rôle dans la ville : Agriculteurs qui offrent des services dans la ville et qui souhaitent être rentables i.e. trouver la bonne adéquation entre les coûts et les bénéfices.

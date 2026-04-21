# Comment pouvons-nous réduire la quantité d’énergie que nous utilisons ?

**Problématique :** Comment détecter et mesurer les économies d'énergie ?

> ℹ️ **L’enjeu de réduction de la consommation d’énergie est de plus en plus important notamment au sein de l’Union Européenne. Une utilisation plus efficiente de l'énergie peut contribuer à réduire les émissions de gaz à effet de serre et ainsi à lutter contre le changement climatique. La baisse de la demande énergétique aide à préserver les ressources naturelles limitées. En complément, cela peut stimuler la croissance économique en encourageant le développement de technologies plus durables et en créant de nouveaux emplois dans les secteurs de l'efficacité énergétique et des énergies renouvelables. En particulier, le bâtiment étant le premier consommateur d'énergie, il est ainsi devenu indispensable de construire des édifices efficaces d'un point de vue énergétique et de rénover les bâtiments existants qui sont beaucoup trop énergivores et qui ne répondent plus du tout aux exigences des nouvelles réglementations.**

![DATA5_TDL.jpg](images/DATA5_TDL.jpg)

### Déroulé de l’activité

Dans ce protocole, l’enjeu technologique sous-jacent est de détecter et mesurer les économies d’énergie de l’isolation d’une maquette d’une maison, effectuer des mesures de température et réfléchir à la manière de réguler efficacement la température en fonction de différents scénarios. Le dispositif proposé pourra comprendre une carte programmable, un capteur de température, la création d’une maquette utilisant un servomoteur. Afin de mettre en œuvre cette activité voici les grandes étapes :

1. Introduction sur l'importance de l'efficacité énergétique dans les bâtiments et la nécessité de mesurer les économies d'énergie.
2. Présentation du matériel nécessaire pour l'activité.
3. Construction de la maquette de maison avec le servomoteur.
4. Programmation de la carte pour mesurer la température et réguler le servomoteur en fonction des différentes températures.
5. Mesure des économies d'énergie réalisées grâce à l’ajout d’une isolation à la maquette.
6. Discussion sur les résultats obtenus et sur les moyens de les améliorer.
7. Conclusion sur l'importance de l'efficacité énergétique dans les bâtiments et sur les moyens de la promouvoir.

### Compétences Mobilisées

Les thèmes abordés par cette activité sont les suivants :

- L'efficacité énergétique dans les bâtiments et la mesure des économies d'énergie.
- La régulation de la température.
- La programmation de cartes programmables.
- La construction de maquettes.
- L'analyse de résultats expérimentaux.

### Matériel

Afin de réaliser cette activité, vous aurez besoin du matériel suivant : 

- 1 carte programmable “STM32 IoT Node Board”
- 2 boutons-poussoirs
- 1 écran LCD
- 1 servomoteur
- 1 breadboard
- Des câbles de connexion
- 1 câble USB - micro B

# LES RESSOURCES

### Expérimentation scientifique

[Protocole PR5-TDL - Étapes d'expérimentation](Comment%20pouvons-nous%20r%C3%A9duire%20la%20quantit%C3%A9%20d%E2%80%99%C3%A9nergie/Protocole%20PR5-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation%2052451beaf05f4198934c98d7bed882b7.md)

### Fiches de programmation

[Sans titre](Comment%20pouvons-nous%20r%C3%A9duire%20la%20quantit%C3%A9%20d%E2%80%99%C3%A9nergie/Sans%20titre%202ce695a145d6424d9b021e2c6b682280.csv)


---

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

![Untitled](images/Untitled.png)

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

> 🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 1 - Collecter les données grâce au capteur de température**.
>
> [PROG5-TDL-1](https://www.notion.so/PROG5-TDL-1-4d2ea5f7199e4fa58c3b6b6ac22c3b4d?pvs=21)

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

> 🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 2 - Afficher les données collectées sur un écran.**
>
> [PROG5-TDL-2](https://www.notion.so/PROG5-TDL-2-673a966fc9324a6faa96a9fee2e2ba48?pvs=21)

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

> 🧑‍💻 Pour vous aider à programmer le capteur approprié, consultez la **Fiche 3 - Réaliser un pare-soleil asservi grâce à un servomoteur.**
>
> [PROG5-TDL-3](https://www.notion.so/PROG5-TDL-3-9a5a240d334a4e9f99328a34d382674e?pvs=21)

💬 **Débriefing**

En plus de l’isolation, nous avons vu qu’une partie de l’énergie thermique provenant de l’extérieur peut être renvoyée dans l’atmosphère simplement en utilisant la nature réfléchissante de certains matériaux. Comme parfois, on veut récupérer cette énergie pour bénéficier d’une source de chauffage gratuit, nous avons fait en sorte que le pare-soleil soit amovible et puisse être rétracté pour créer une régulation naturelle de la température.

En plus de la température, cette régulation pourrait gagner en réactivité à réagir aussi sur la luminosité en ajoutant des capteurs à l’extérieur de la maquette.

Ce protocole en plus de fournir une opportunité de réfléchir à la problématique des économies d’énergie, il traite aussi du confort de l’habitat qui est aussi central pour proposer un logement qui est aussi bénéfique pour l’environnement que pour le bien-être de ses utilisateurs. Une discussion sur les maisons à énergie positive peut-être l’occasion de faire le lien avec les protocoles autour des énergies renouvelables.

Le bien-être de l’habitat n’est pas uniquement lié à la température, en ajoutant des capteurs à la maquette créée pour ce protocole, il peut être possible de discuter aussi de l’apport de la ventilation naturelle pour l’évacuation des composés chimiques toxiques produits par les revêtements intérieurs.


---

## Fiches programmation

### PROG5-TDL-1 — Collecter les données grâce au capteur de température



🛠️**Construire**

**Utiliser le capteur de température**
Nous allons utiliser le capteur de température présent sur la STM32 IoT Node Discovery, il n’y a donc pas de branchement à faire.

**Connecter la carte à l'ordinateur**
Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur micro-USB ST-LINK (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé DIS_L4IOT. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

**Installer l’extension serial**

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut "prêt à l'emploi" et vous devrez installer une extension.

> ℹ️ **Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de la robotique et bien plus encore.**

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. Si vous cliquez sur **AVANCÉ**, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton.

Dans la liste des extensions disponibles, vous pouvez facilement trouver l’extension **serial** qui sera utilisée pour cette activité. Cette extension vous permettra d’afficher les données relevées par le capteur de température dans la console. Si elle n’est pas directement disponible sur votre écran, vous pouvez la rechercher à l'aide de l'outil de recherche. Cliquez sur l’extension que vous souhaitez utiliser et un nouveau groupe de blocs apparaîtra sur l'écran principal. 

**Ouvrir MakeCode**
Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur. 

*Ressource : [makecode.lets-steam.eu](http://makecode.lets-steam.eu/)*

**Programmer la carte**
Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur DIS_L4IOT et attendez que la carte finisse de clignoter.

**Exécuter, modifier, jouer**
Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET). 

![Untitled](images/Untitled.png)

**🧑‍💻Programmer**

```jsx
forever(function () {
    Serial.writeValue("Temperature", input.temperature(TemperatureUnit.Celsius))
    pause(30000)
})
```

### PROG5-TDL-2 — Afficher les données collectées sur un écran



🛠️**Construire**

**Connecter l'écran à la carte**
Pour connecter l'écran LCD, nous allons utiliser le bus I2C avec la convention suivante :

- Noir pour GND (GND)
- Rouge pour VCC (5V)
- Violet pour SDA (D14)
- Vert pour SCL (D15)

**Connecter la carte à l'ordinateur**
Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur micro-USB ST-LINK (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé DIS_L4IOT. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

**Ouvrir MakeCode**
Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur. 

*Ressource : [makecode.lets-steam.eu](http://makecode.lets-steam.eu/)*

**Ajouter une extension**
Pour utiliser cet écran, il est nécessaire d’installer l’extension nommée ‘**lcd_i2c**’. Pour l’installer, cliquez sur l’icône en forme d’engrenage en haut à gauche de MakeCode, puis sélectionnez “**Extensions**”, une nouvelle fenêtre s’ouvre dans laquelle vous choisissez l’extension dont vous avez besoin en cliquant dessus, si vous ne la trouvez pas, vous pouvez utiliser la barre de recherche en haut de l’écran.

**Programmer la carte**
Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur DIS_L4IOT et attendez que la carte finisse de clignoter.

**Exécuter, modifier, jouer**
Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET). 

![Untitled](images/Untitled.png)

**🧑‍💻Programmer**

```jsx
lcd_i2c.initScreen()
lcd_i2c.ShowString("Temperature")

forever(function () {
    lcd_i2c.setCursor(0, 1)
    lcd_i2c.ShowString("" + convertToText(input.temperature(TemperatureUnit.Celsius)) + " C")
    pause(30000)
})
```

### PROG5-TDL-3 — Réaliser un pare-soleil asservi grâce à un servomoteur



🛠️**Construire**

**Câbler les boutons**
Connectez une patte des boutons à la broche GND de la carte. Connectez ensuite l'autre patte d’un bouton sur la broche D2, et la dernière patte libre du bouton sur D3.

**Connecter l'écran à la carte**
Pour connecter l'écran LCD, nous allons utiliser le bus I2C avec la convention suivante :

- Noir pour GND (GND)
- Rouge pour VCC (3V3)
- Violet pour SDA (D14)
- Vert pour SCL (D15)

**Connecter le servomoteur à la carte**
Il y a plusieurs façons de connecter un servomoteur à votre carte. Vous pouvez utiliser n'importe quelle pin de sortie analogique (broches PWM) pour connecter la pin de contrôle. Dans notre exemple, nous allons utiliser la pin D4. Le servomoteur sera connecté comme suit :

- Bleu pour GND
- Rouge pour V + (3V3)
- Violet pour SIG (D4)

![Untitled](images/Untitled.png)

![Untitled](images/Untitled 1.png)

**Connecter la carte à l'ordinateur**
Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur micro-USB ST-LINK (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé DIS_L4IOT. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

**Ouvrir MakeCode**
Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur. 

*Ressource : [makecode.lets-steam.eu](http://makecode.lets-steam.eu/)*

**Installer l’extension lcd_i2c**

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut "prêt à l'emploi" et vous devrez installer une extension.

> ℹ️ **Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de la robotique et bien plus encore.**

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. Si vous cliquez sur **AVANCÉ**, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton.

Dans la liste des extensions disponibles, vous pouvez facilement trouver l’extension **lcd_i2c** qui sera utilisée pour cette activité. Cette extension vous permettra d’interagir avec l’écran. Si elle n’est pas directement disponible sur votre écran, vous pouvez la rechercher à l'aide de l'outil de recherche. Cliquez sur l’extension que vous souhaitez utiliser et un nouveau groupe de blocs apparaîtra sur l'écran principal. 

**Programmer la carte**
Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur DIS_L4IOT et attendez que la carte finisse de clignoter.

**Exécuter, modifier, jouer**
Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET). 

**🧑‍💻Programmer**

```jsx
input.buttonD3.onEvent(ButtonEvent.Click, function () {
    pins.D4.servoWrite(180)
})

input.buttonD2.onEvent(ButtonEvent.Click, function () {
    pins.D4.servoWrite(0)
})

lcd_i2c.initScreen()
lcd_i2c.ShowString("Temperature")
pins.D4.servoWrite(0)
forever(function () {
    lcd_i2c.setCursor(0, 1)
    lcd_i2c.ShowString("" + convertToText(input.temperature(TemperatureUnit.Celsius)) + " C")
    pause(30000)
})
```

# L’IA peut-elle être un outil de sécurité sans faille ?

**Problématique :** Comment détecter des visages ?

> ℹ️ **L'Intelligence Artificielle (IA) représente un domaine passionnant de la technologie qui vise à créer des machines capables d'imiter l'intelligence humaine. L'IA peut apprendre, raisonner, percevoir et interagir avec son environnement de manière similaire à un être humain.**
>
> **L'un des concepts clés de l'IA est l'apprentissage automatique (Machine Learning), qui est une technique permettant aux machines d'apprendre et de s'adapter à partir de données et d'expériences. Au lieu de suivre des instructions spécifiques, un modèle d'apprentissage automatique s'entraîne sur un ensemble de données et apprend à faire des prédictions ou prendre des décisions basées sur ces données.**
>
> **Dans ce protocole, nous allons explorer deux outils particuliers liés à l'IA et à l'apprentissage automatique :**
>
> 1. **Teachable Machine : C'est une plateforme en ligne qui permet à quiconque de créer des modèles d'apprentissage automatique sans avoir besoin de compétences en codage. Il sera utilisé pour entraîner un modèle de reconnaissance d'image afin de reconnaître un dessin spécifique.**
> 2. **Adacraft : C'est un outil qui permet de programmer et de contrôler des appareils électroniques tels que des serrures électroniques, des moteurs, etc. Il sera utilisé pour intégrer le modèle IA et implémenter le système de serrure.**
>
> **Le projet implique la création d'un système de sécurité pour une maison qui utilise l'IA pour reconnaître un dessin à la main préalablement défini comme clé d'une serrure électronique. Les élèves seront guidés à travers des sous-protocoles pour comprendre, planifier, construire et évaluer ce système innovant.**
>
> **En abordant ce projet, les élèves auront l'opportunité de plonger dans le monde fascinant de l'IA et de l'apprentissage automatique, tout en acquérant des compétences pratiques en programmation, en réflexion critique et en conception de systèmes.**

![DATA17_TDL.jpg](images/DATA17_TDL.jpg)

### Déroulé de l’activité

Le projet consiste à créer un système de sécurité pour une maison qui utilise l'Intelligence Artificielle (IA) pour reconnaître un dessin à la main préalablement défini comme clé d'une serrure électronique. Les élèves utiliseront Teachable Machine pour former un modèle de reconnaissance d'image et Adacraft pour implémenter la serrure électronique.
La question de la fiabilité des dispositifs est importante quand on parle de sécurité.

Peut-on s’assurer qu’un tel système sera fiable assez fiable pour qu’on puisse lui faire confiance ?

### Compétences Mobilisées

1. **Pensée Critique et Résolution de Problèmes** : Évaluer des problèmes, concevoir des solutions, et réfléchir aux implications éthiques et pratiques.
2. **Compétences en Programmation et Technologie** : Utilisation d'outils comme Teachable Machine et Adacraft pour programmer et construire des systèmes.
3. **Collaboration et Communication** : Travailler en équipe, partager des idées et présenter des conclusions.
4. **Compréhension des Concepts Mathématiques et Scientifiques** : Appliquer les principes de la physique, des mathématiques et de la technologie dans la conception.
5. **Créativité et Innovation** : Concevoir des solutions créatives et innovantes à des défis technologiques.
6. **Citoyenneté Numérique** : Réfléchir aux implications sociales, éthiques et de sécurité de l'utilisation de la technologie.

Ce protocole offre aux élèves une expérience pratique et enrichissante dans le domaine de l'IA et de l'apprentissage automatique. Ils auront l'occasion de créer un système de sécurité basé sur l'IA tout en développant des compétences transversales qui sont essentielles dans le monde moderne et numérique. La combinaison de l'apprentissage théorique avec des applications pratiques permet une compréhension profonde et un engagement actif dans la technologie, ouvrant des portes à des carrières et des opportunités futures.

### Matériel

- 1 carte programmable “STM32 IoT Node Board”
- 1 solénoïde
- 1 transistor NPN
- 1 diode de roue libre
- 1 alimentation 12V (ou adaptée au solénoïde)
- 1 ensemble de câbles de connexion
- 1 breadboard
- 1 tablette Android
- 1 caméra (si non intégrée à la tablette)
- 1 boîtier pour la serrure
- 1 set d’outils de montage : Tournevis, pinces, etc., pour assembler les pièces physiques.

# LES RESSOURCES

### Expérimentation scientifique

[Protocole PR17-TDL - Étapes d'expérimentation](L%E2%80%99IA%20peut-elle%20%C3%AAtre%20un%20outil%20de%20s%C3%A9curit%C3%A9%20sans%20fail/Protocole%20PR17-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation%202aba7459d9ca4c5d9e0350b3f6e4ed65.md)


---

# Protocole PR17-TDL - Étapes d'expérimentation

### Étape 1 : Comprendre la Serrure Électronique

🧭**Orientation**

Le système de sécurité doit restreindre l’accès à une maison uniquement aux personnes autorisées. Pour restreindre l’accès à un édifice, on utilise un dispositif comme une serrure munie d’une clef personnelle pour l’activer. Dans notre système la serrure devra être utilisable avec une carte programmable pour s’interfacer avec un système d’IA.

Dans cette première étape, les élèves vont découvrir ce qu’est une serrure électronique et comment elle fonctionne. Au-delà de ce premier objectif, ils pourront aussi se poser les questions suivantes pour commencer à se préparer aux étapes suivantes :

- Comment l'IA peut-elle être utilisée pour améliorer les systèmes de sécurité ?
- Quels sont les avantages et inconvénients des serrures électroniques ?

Dans notre système, pour des raisons réglementaires, nous utiliserons des dessins à la place des visages. Ce choix est aussi une bonne opportunité pour faire réfléchir à l’importance des données biométriques dans une société démocratique numérique.

![Untitled](images/Untitled.png)

💡 **Conceptualisation**

Une serrure électronique est un mécanisme de verrouillage qui utilise l'électricité pour activer ou désactiver le verrou, plutôt que d'utiliser une clé physique. Elles sont souvent contrôlées par un système électronique qui peut être programmé pour permettre ou refuser l'accès en fonction de divers critères : reconnaissance faciale, empreinte digitale, code PIN, carte RFID, ou même reconnaissance de dessins à travers une IA, comme dans notre projet scolaire.

**Comment fonctionne-t-elle ?**

Le fonctionnement d'une serrure électronique peut varier en fonction du type et de la complexité du système, mais voici les composants et étapes de base communs à la plupart des serrures électroniques :

1. **Interface d'Utilisateur** : C'est la partie du système avec laquelle l'utilisateur interagit pour demander l'accès. Cela peut être un clavier numérique, un scanner d'empreintes digitales, une application mobile, etc.
2. **Module de Reconnaissance ou de Vérification** : Une fois que l'utilisateur fait une demande via l'interface, cette demande est envoyée au module de reconnaissance qui utilise un algorithme pour déterminer si l'accès doit être accordé ou refusé.
3. **Unité de Commande** : Si l'accès est accordé, l'unité de commande (souvent un microcontrôleur comme un STM32 dans notre cas) envoie un signal électrique au mécanisme de verrouillage.
4. **Mécanisme de Verrouillage** : Le signal électrique active un dispositif électromécanique, comme un solénoïde, qui déplace le verrou pour ouvrir ou fermer la serrure.
5. **Alimentation Électrique** : Les serrures électroniques nécessitent une source d'énergie pour fonctionner. Cette source peut être des batteries ou une alimentation branchée sur le réseau électrique.
6. **Système de Sécurité** : En option, certaines serrures électroniques disposent de systèmes de sécurité supplémentaires, comme des alarmes ou des notifications en cas de tentative d'accès non autorisée.

**Pourquoi Utiliser une Serrure Électronique ?**

1. **Facilité d'Accès** : Pas besoin de clés physiques, qui peuvent être perdues ou volées.
2. **Contrôle à Distance** : Certaines serrures électroniques peuvent être contrôlées à distance via une application mobile ou un réseau.
3. **Historique des Accès** : Possibilité de suivre qui est entré ou sorti et à quel moment.
4. **Flexibilité et Adaptabilité** : Facilité pour ajouter ou supprimer des utilisateurs, ou pour changer les niveaux d'accès.
5. **Intégration technologique** : Peut être intégré à d'autres systèmes, tels que des systèmes d'alarme ou de vidéosurveillance.

La mise en œuvre d'une serrure électronique dans un environnement scolaire, comme dans notre projet, offre une excellente occasion d'explorer les concepts de l'électronique, de la programmation et de la sécurité, tout en donnant aux élèves une expérience pratique de la résolution de problèmes et de la conception de systèmes.

**IA et sécurité ?**

L'intelligence artificielle (IA) a révolutionné de nombreux domaines, et le secteur de la sécurité n'est pas en reste. Grâce à la capacité à analyser des données complexes en un temps record et à prendre des décisions quasi instantanées, l'IA peut renforcer considérablement les systèmes de sécurité, qu'ils soient physiques ou numériques. Voici quelques façons dont l'IA peut améliorer la sécurité.

Des algorithmes d'apprentissage automatique peuvent être formés pour reconnaître des visages, des empreintes digitales ou d'autres marqueurs biométriques. Cette forme de vérification est souvent plus difficile à tromper que des méthodes traditionnelles comme les mots de passe ou les cartes d'accès.

Toutefois, il est important de noter que l'IA n'est pas infaillible. Elle peut parfois donner des faux positifs ou être trompée de diverses manières. De plus, les questions de vie privée et de discrimination (biais dans les algorithmes) sont des considérations importantes qui doivent être adressées lors de l'intégration de l'IA dans les systèmes de sécurité.

🔎**Investigation**

Pour l’investigation, plutôt que de commencer par la mise en œuvre, il est intéressant de partir sur une recherche documentaire sur les deux pistes suivantes :

- Lecture et discussion d'articles et de vidéos sur les serrures électroniques et l'IA.
- Comparaison avec les serrures traditionnelles.

Dans une seconde étape, créer une réflexion construite sur l’objet technique “serrure électronique” en faisant une première modélisation du système avec les taches suivantes :

- Créer un schéma d'une serrure électronique et expliquer son fonctionnement.
- Discussion sur l'intégration de l'IA et les considérations éthiques et de sécurité.

Enfin, expérimentation à proprement parler, suivra les étapes suivantes :

- Utiliser Makecode pour simuler une serrure électronique simple.
- Réalisation physique :
    - **Schéma :** faire le circuit que vous comptez construire.
    - **Installation du Solénoïde :** Connectez le solénoïde à la carte STM32 via un transistor NPN.
    - **Ajout de la Diode :** Placez une diode de roue libre en parallèle avec le solénoïde pour protéger le transistor contre les surtensions.
    - **Connecter le Bouton-poussoir :** Connectez un bouton-poussoir à un GPIO (General Purpose Input/Output) sur la carte STM32 pour simuler une action manuelle d'ouverture.
    - **Code :** Programmez la logique pour contrôler le solénoïde. Par exemple, lorsque le bouton-poussoir est enfoncé, le solénoïde devrait être activé, déverrouillant ainsi la serrure.
    - **Validation :** Vérifiez si le système fonctionne comme prévu.
    - **Débogage :** Corrigez les erreurs, si nécessaire.
    - **Évaluation** : Évaluer son fonctionnement et ses avantages.

💬 **Débriefing**

Cette étape offre une opportunité pratique pour les élèves d'apprendre les bases de l'électronique et de la programmation, tout en mettant en œuvre une application réelle de la technologie. Les compétences acquises dans ce projet sont non seulement utiles pour les études futures en sciences et en technologie, mais elles sont aussi extrêmement pertinentes dans le monde moderne axé sur la technologie.

Dans le cadre de la question principale de ce protocole, cette étape est centrale car elle constituera la brique principale de la maquette finale. Si les élèves ne sont pas encore capables de comprendre l’électronique de contrôle du solénoïde, il est possible de simuler la serrure avec un simple servomoteur qui actionnera un loquet ou une targette simpliste qui viendra verrouiller/déverrouiller l’accès à notre édifice.

### Étape 2 : Création et Entraînement du Modèle IA avec Teachable Machine

🧭**Orientation**

Maintenant que nous disposons d’une compréhension de ce qu’est une serrure électronique et comment l’utiliser, nous allons nous intéresser à ce que l’IA peut apporter à notre système et donc plus particulièrement à la reconnaissance d’image et à l’apprentissage automatique.

Les élèves devront apporter les réponses aux questions suivantes :

- Quels sont les principes de base de la reconnaissance d'image par IA ?
- Comment peut-on créer et former un modèle pour reconnaître un dessin spécifique ?

![Untitled](images/Untitled 1.png)

💡 **Conceptualisation**

La reconnaissance d'image par intelligence artificielle (IA) est une branche du domaine plus large du machine learning, qui est lui-même une sous-discipline de l'intelligence artificielle. Le but est d'enseigner aux machines à "voir" et à interpréter des images et des vidéos, de manière similaire à la perception humaine.

**Types de Tâches en Reconnaissance d'Image**

- **Classification d'Images** : Identifier la catégorie à laquelle une image donnée appartient.
- **Détection d'Objets** : Identifier et localiser plusieurs objets dans une image.
- **Segmentation** : Diviser une image en plusieurs segments et classifier chaque segment.
- **Reconnaissance de Formes ou de Traits Particuliers** : Par exemple, reconnaître des visages ou des écritures manuscrites.

**Principes de Base**

1. **Collecte de Données** : Une grande quantité d'images est collectée et étiquetée. Ces images forment le "jeu de données d'entraînement".
2. **Prétraitement des Données** : Les images sont souvent redimensionnées, normalisées ou augmentées pour améliorer la qualité du modèle.
3. **Extraction de Caractéristiques** : Des algorithmes sont utilisés pour identifier les caractéristiques importantes dans les images, telles que les bords, les textures et les couleurs.
4. **Entraînement du Modèle** : Un modèle de machine learning est formé à partir du jeu de données d'entraînement. Il apprend à associer les caractéristiques extraites aux étiquettes correspondantes.
5. **Évaluation** : Le modèle est testé sur un nouveau jeu de données pour évaluer sa précision et sa performance.
6. **Inférence** : Le modèle formé est ensuite utilisé pour effectuer des prédictions ou des classifications sur de nouvelles images.

L’utilisation de la reconnaissance d’image passe par la création et l’entraînement d’un modèle d’apprentissage. Pour améliorer le modèle, il faudra lui fournir un jeu d’essai qui lui permettra d’apprendre à distinguer l’objet à identifier. La création du jeu d’essai est l’élément central car c’est sa qualité et sa diversité qui garantira la robustesse de notre système. Avant de commencer, il faudra définir un objectif de précision qui nous dira quand le système sera considéré comme acceptable. Généralement on commence par une précision d’au moins 90% pour considérer que le système est fonctionnel.

Étapes du processus d’entraînement

1. **Préparation du jeu de données d’entraînement**
    1. Dessiner plusieurs instances du dessin cible.
    2. Dessiner plusieurs autres types de dessins pour servir de données négatives.
    3. Scanner ou photographier les dessins pour les numériser.
2. **Prétraitement des données**
    1. Redimensionner toutes les images à une taille standard.
    2. Convertir les images en niveaux de gris.
3. **Création et Entraînement du Modèle**
    1. Créer un modèle sur Teachable Machine
    2. Diviser le jeu de données en ensembles d'entraînement et de test.
    3. Entraîner le modèle avec l'ensemble d'entraînement.
4. **Évaluation et validation du Modèle**
    1. Tester le modèle sur l'ensemble de test.
    2. Calculer la précision du modèle.
    3. Faire évaluer de manière qualitative le modèle par un utilisateur final.
    4. Tenter de créer des dessins pouvant piéger le modèle d’IA (faux positifs et faux négatifs).

La recherche d’une meilleure précision par les élèves est une première opportunité de découvrir les limites de l’IA en montrant des exemples de sur apprentissage lors de l’évaluation par l’utilisateur final. La surprise de découvrir qu’un système trop précis marche moins bien qu’un système moins entraîné permette de faire comprendre qu’une IA n’est pas vraiment intelligente et d’enlever une partie de la magie que les apprenants peuvent lui attribuer.

La création intentionnelle de faux positifs ou de faux négatifs est une occasion de se poser la question de ce que le modèle a vraiment appris et aussi de comment l’améliorer en changeant le jeu d’entraînement.

🔎**Investigation**

Pour l’investigation, plutôt que de commencer par la mise en œuvre, il est intéressant de partir sur une recherche documentaire sur les deux pistes suivantes :

- Tutoriels sur Teachable Machine et bases de la reconnaissance d'image.
- Sélectionner et analyser différents types de dessins pour la clé.

Dans une seconde étape, créer une réflexion construite sur “la clef” de notre serrure intelligente et son entraînement avec les taches suivantes :

- Choisir un dessin spécifique comme clé et préparer des échantillons pour l'entraînement.
- Planifier les étapes d'entraînement, y compris la collecte des données, l'entraînement, et la validation.

L’expérimentation se fera avec l’outil Teachable Machine. Teachable Machine est une plateforme en ligne qui rend la création de modèles de machine learning accessible, même pour les débutants. Vous n'avez pas besoin de connaissances en programmation ou en machine learning pour utiliser cet outil. Voici la liste des tâches :

1. **Préparation des Données**
    1. **Collecte des dessins** : Rassemblez une série de dessins qui serviront à entraîner le modèle. Assurez-vous d'avoir plusieurs instances du dessin "clé" et de plusieurs autres types de dessins pour servir de données négatives.
    2. **Numérisation** : Utilisez un scanner ou un appareil photo pour numériser les dessins et les sauvegarder sous forme de fichiers image.
2. **Teachable Machine**
    1. **Accès à la plateforme** : Ouvrez un navigateur Web et accédez à Teachable Machine ([lien](https://teachablemachine.withgoogle.com/)).
    2. **Nouveau projet** : Cliquez sur “Get Started” et ensuite sur “Image Project”.
    3. **Classes de dessins** : Créez deux classes : une pour le dessin "clé" et une pour les "autres" dessins.
    4. **Téléchargement des données** :
        - Dans la classe correspondant au dessin "clé", téléchargez toutes les instances du dessin clé que vous avez collectées.
        - Faites la même chose pour la classe "autre" avec les autres types de dessins.
    5. **Entraînement du modèle** : Cliquez sur "Train Model". Cela peut prendre quelques minutes.
    6. **Test du modèle** : Une fois le modèle entraîné, testez-le en utilisant la zone de test dans Teachable Machine. Vous pouvez télécharger de nouvelles images ou utiliser votre webcam pour tester si le modèle peut correctement identifier le dessin "clé".
    7. **Exportation du modèle** : Une fois que vous êtes satisfaits de la performance du modèle, exportez-le. Vous aurez le choix entre différents formats, mais le plus communément utilisé est le format TensorFlow.js si vous prévoyez de l'intégrer dans une application Web.
3. **Intégration dans le système de la serrure**
    
    Vous pourrez intégrer ce modèle dans le système de serrure électronique. Lorsqu'un dessin est présenté, le modèle formé peut être utilisé pour déterminer si le dessin est la "clé" et, dans ce cas, activer le mécanisme de déverrouillage.
    

💬 **Débriefing**

L'exercice d'intégrer une Intelligence Artificielle (IA) dans un système de serrure électronique a été à la fois éducatif et innovant. Voici quelques points clés de ce que les élèves ont pu apprendre :

- Les élèves ont eu l'opportunité de se familiariser avec les concepts fondamentaux du machine learning et de la reconnaissance d'images. Ils ont appris ce qu'est un modèle, comment il est entraîné, et comment il peut être utilisé pour des tâches de classification.
- Le projet a permis aux élèves de comprendre comment les techniques d'IA sont actuellement appliquées dans le domaine de la sécurité, et comment elles peuvent être adaptées pour résoudre des problèmes du quotidien, comme sécuriser une maison.
- Bien que Teachable Machine ait rendu le processus relativement simple, les élèves ont néanmoins eu à faire face à des défis liés à l'intégration du modèle d'IA dans un système réel, notamment en ce qui concerne la compatibilité et le déploiement.
- En testant les limites de leur modèle, les élèves ont pu découvrir des scénarios où l'IA pourrait échouer, ce qui a mené à des discussions importantes sur la fiabilité et les aspects éthiques de l'utilisation de l'IA dans des systèmes critiques.
- Le projet a nécessité une planification minutieuse, du travail en équipe, et la gestion des ressources (temps, matériel), compétences toutes essentielles dans le monde professionnel.
- Le projet a touché divers domaines, de la technologie et l'informatique à l'art (création de dessins) et même à un peu de physique et d'électronique (fonctionnement de la serrure électronique).

Ce projet a offert une expérience pratique, mêlant des éléments de technologie, de science, d'éthique et de gestion de projet. Les compétences et les connaissances acquises ici sont non seulement applicables à des sujets scolaires, mais aussi extrêmement pertinentes pour questionner la technologie au quotidien.

### Étape 3 : Implémentation du Système de Serrure avec Adacraft

🧭**Orientation**

La serrure développée dans la première étape, fonctionne avec Makecode et n’est pas en capacité d’utiliser le résultat produit par Teachable machine. L’objet de cette étape de relier les deux systèmes précédents pour être capable de déverrouiller la serrure électronique avec le bon dessin.

Les élèves devront par leur enquête apporter les réponses aux questions suivantes :

- Comment traduire le dessin reconnu en une action pour déverrouiller la serrure ?
- Comment intégrer le modèle IA dans Adacraft et le connecter à une serrure électronique ?

![Untitled](images/Untitled 2.png)

💡 **Conceptualisation**

Dans le cadre de ce projet, le dessin agit comme une "clé" qui, une fois reconnue par le modèle IA, déclenche une action pour déverrouiller la serrure électronique. Voici comment cette traduction de la reconnaissance du dessin en action peut être réalisée avec Adacraft et une carte STM32. Adacraft est une plateforme éducative qui permet d'intégrer la programmation et l'électronique dans un environnement créatif.

**Étape 1 : Analyse du Dessin avec le Modèle IA**

1. **Capture de l'Image** : Utilisez la tablette Android pour capturer l'image du dessin que l'utilisateur présente comme clé.
2. **Traitement de l'Image** : L'image est envoyée au modèle IA que vous avez importé dans Adacraft. Le modèle classe l'image en fonction de sa ressemblance avec le dessin de la "clé".

**Étape 2 : Interprétation des Résultats de l'IA**

1. **Récupération de la Classe** : Adacraft récupère la classe (ou l'étiquette) que le modèle IA attribue à l'image. Si la classe correspond à celle de la "clé", alors vous pouvez continuer au prochain point.
2. **Transmission de la Décision** : Adacraft envoie un signal numérique ou un message à la carte STM32 via une connexion filaire ou sans fil, indiquant que la "clé" a été reconnue.

**Étape 3 : Exécution de l'Action avec la Carte STM32**

1. **Réception du Signal** : La carte STM32 est programmée pour attendre un signal spécifique ou un message venant d'Adacraft.
2. **Déclenchement de l'Action** : Une fois le signal reçu, la carte STM32 active le transistor, ce qui en retour active le solénoïde pour déverrouiller la serrure.
3. **Confirmation** : Un signal de confirmation peut être envoyé en retour à l'interface utilisateur pour indiquer que la serrure a été déverrouillée.

**Étape 4 : Sécurités et Protocoles**

1. **Temps d'Attente** : Vous pouvez programmer un délai pendant lequel la serrure reste déverrouillée avant de se verrouiller automatiquement.
2. **Sécurités Supplémentaires** : Par exemple, vous pouvez ajouter une double authentification, comme un code PIN, qui doit être entré sur la tablette Android.

**Étape 5 : Tests et Évaluation**

1. Effectuez des tests complets pour vous assurer que le système fonctionne comme prévu.
2. Implémentez des mesures de sécurité supplémentaires si nécessaire.

En suivant ces étapes, vous devriez être capables de traduire la reconnaissance d'un dessin par le modèle IA en une action réelle qui déverrouille la serrure électronique. Ce système permet aux élèves de voir comment une technologie relativement complexe comme l'IA peut être intégrée dans des applications pratiques de la vie quotidienne.

🔎**Investigation**

Pour cette investigation, il est intéressant de commencer par une recherche documentaire sur les deux pistes suivantes :

- Tutoriels Adacraft et intégration avec Teachable Machine.
- Étudier les différents composants nécessaires, tels que servomoteurs, capteurs de caméra, etc.

Dans une seconde étape, créer une réflexion construite sur le système “serrure intelligente” complet avec les taches suivantes :

- Concevoir le système de sécurité complet avec un schéma.
- Préparer une liste de matériel et des instructions détaillées pour le montage.

Pour la dernière étape d’expérimentation, nous supposons que vous avez déjà une maquette de serrure électronique fonctionnant avec une carte STM32 et un solénoïde. Voici comment vous pouvez intégrer le modèle IA créé avec Teachable Machine dans Adacraft et le connecter à votre serrure.

**Matériel nécessaire**

- Carte STM32
- Solénoïde pour la serrure électronique
- Transistor pour piloter le solénoïde
- Diode de protection
- Résistances
- Fils et breadboard
- Tablettes Android pour l'interface utilisateur

**Liste des Tâches**

**1. Importation du modèle IA dans Adacraft**

- Ouvrez Adacraft et importez le modèle IA que vous avez précédemment exporté depuis Teachable Machine.
- Configurez les paramètres pour qu'Adacraft puisse utiliser ce modèle pour prendre des décisions.

**2. Connexion de la Carte STM32**

- Connectez votre carte STM32 à votre ordinateur.
- Dans Adacraft, sélectionnez le type de carte que vous utilisez (dans notre cas, STM32) et configurez les paramètres pour établir la connexion.

**3. Configuration de l'Interface Utilisateur**

- Utilisez les outils disponibles dans Adacraft pour créer une interface utilisateur simple sur la tablette Android. Cette interface doit permettre à l'utilisateur de présenter un dessin à la caméra.

**4. Interaction avec le Modèle IA**

- Programmez des blocs de code dans Adacraft pour que l'interface utilisateur envoie l'image du dessin au modèle IA.
- Utilisez les sorties du modèle IA pour prendre une décision : si le dessin est identifié comme la "clé", envoyez un signal à la carte STM32 pour déverrouiller la serrure.

**5. Configuration de la Carte STM32 et du Solénoïde**

- Utilisez Adacraft pour programmer la carte STM32 de manière à activer le solénoïde lorsque le bon signal est reçu.
- Assurez-vous d'inclure un transistor pour piloter le solénoïde et une diode pour le protéger contre les courants inversés.

**6. Test du Système**

- Une fois tout configuré, réalisé des tests pour s'assurer que le système fonctionne comme prévu.
- Implémentez des mesures de sécurité supplémentaires si nécessaire, par exemple un délai avant que la serrure ne se verrouille automatiquement de nouveau.

**7. Évaluation des Limites**

- Invitez les élèves à tester le système dans divers scénarios pour identifier ses limites et discuter des améliorations possibles.

En suivant ces étapes, vous devriez être capables de créer un système de serrure électronique contrôlé par IA à l'aide de Teachable Machine et Adacraft.

💬 **Débriefing**

Ce projet illustre non seulement l'application de l'IA dans la vie quotidienne, mais il est également une excellente opportunité éducative pour les élèves d'apprendre une gamme de compétences en STEM.

### Étape 4 : Évaluation des Limites et Cas Anormaux

🧭**Orientation**

Quand on parle d’IA ou de Machine Learning, il est important de bien cerner les limites de ces systèmes pour sortir du fantasme de la machine intelligente. Il est particulièrement important de comprendre que les IA sont une construction humaine et que si on ne fait pas attention, elles peuvent intégrer des biais où des erreurs liées à leur concepteur, à sa culture, à son contexte.

Pour aborder ce sujet, l’élève devra mener une enquête permettant de répondre aux questions suivantes :

- Quels sont les scénarios où le système pourrait échouer ?
- Comment peut-on améliorer la robustesse et la sécurité du système ?

💡**Conceptualisation**

Bien que l'expérimentation précédente ait été fructueuse et éducative, il est important de réfléchir aux scénarios où le système pourrait échouer. Voici quelques situations potentielles :

1. **Fausses Reconnaissances (Faux Positifs)**
    
    Le modèle d'IA pourrait mal interpréter un dessin autre que la "clé" comme étant correct. Cela peut être dû à des dessins trop similaires ou à des limites dans la précision du modèle.
    
2. **Non-Reconnaissance (Faux Négatifs)**
    
    Le modèle d'IA pourrait échouer à reconnaître le dessin correct si celui-ci est légèrement différent de ce que le modèle a été formé à reconnaître. Par exemple, si la "clé" dessinée est faite dans des conditions d'éclairage différentes, ou si la taille ou l'orientation du dessin varie.
    
3. **Surapprentissage (Overfitting)**
    
    Si le modèle d'IA a été formé avec un ensemble de données trop limité ou trop spécifique, il pourrait échouer à généraliser à de nouvelles instances du dessin clé. Cela pourrait aboutir à des faux négatifs ou des faux positifs.
    
4. **Vulnérabilité aux Attaques Adversariales**
    
    Des attaquants pourraient tenter de manipuler le dessin d'une manière qui trompe spécifiquement le modèle d'IA. Ces manipulations sont souvent indétectables pour les humains mais peuvent causer des erreurs de classification pour le modèle.
    
5. **Mauvaise Interprétabilité**
    
    En raison de la nature souvent "boîte noire" des modèles d'IA, il peut être difficile de comprendre pourquoi un certain dessin a été reconnu ou non, ce qui peut rendre le débogage du système plus compliqué.
    
6. **Dérive des Données (drift)**
    
    Avec le temps, les caractéristiques du dessin "clé" pourraient changer (par exemple, à cause de l'usure du papier ou des modifications dans l'environnement comme l'éclairage), ce qui pourrait entraîner un décalage par rapport au modèle initial et donc des erreurs de reconnaissance.
    
7. **Échec de Mise à Jour du Modèle**
    
    Si le modèle nécessite des mises à jour pour améliorer sa précision ou sa sécurité, un échec dans le processus de mise à jour pourrait entraîner des vulnérabilités.
    

Ces scénarios soulignent l'importance de prendre en considération les limitations et les défis associés à l'utilisation de l'IA dans des systèmes de sécurité. Ils offrent également des opportunités pour l'apprentissage et l'amélioration du système.

🔎**Investigation**

Pour cette investigation, il est intéressant de commencer par une recherche documentaire sur les deux pistes suivantes :

- Analyser différentes méthodes pour tromper le système, comme des dessins similaires.
- Réfléchir aux problèmes de sécurité et de confidentialité.

Dans une seconde étape, créer une réflexion construite sur les limites de l’IA de reconnaissance avec les taches suivantes :

- Planifier des tests spécifiques pour évaluer les limites et les failles du système.
- Développer des solutions possibles pour les problèmes identifiés.

Au vu du nombre de défaillance possible, il est possible pour l’expérimentation de demander à chaque groupe de travailler sur un type de défaillance et de présenter ses résultats à toute la classe. L’expérimentation à pour objectif de faire prendre conscience aux élèves des vulnérabilités potentielles d'un système de sécurité basé sur l'IA, en utilisant la maquette de serrure intelligente qu'ils ont créée.

**Matériel**

- Maquette de serrure intelligente basée sur une carte STM32, un solénoïde et une tablette Android
- Papier et stylos pour dessiner les "clés"
- Ordinateur avec accès à Teachable Machine pour ajuster le modèle d'IA
- Logiciel de collecte de données pour enregistrer les résultats

**Étapes**

1. Faux Positifs et Faux Négatifs
    1. **Questionnement** : Demandez aux élèves de réfléchir à ce qui pourrait mal tourner si le dessin "clé" est légèrement différent.
    2. **Recherche** : Faites créer par les élèves plusieurs versions du dessin "clé", chacune avec de légères variations (par exemple, taille, orientation, épaisseur du trait).
    3. **Hypothèse** : Les élèves forment une hypothèse sur lesquelles de ces variations seront reconnues par le système et lesquelles ne le seront pas.
    4. **Expérimentation** : Les élèves testent chaque dessin avec la maquette pour voir si elle déverrouille la serrure.
    5. **Analyse** : Les élèves notent les résultats et comparent avec leurs hypothèses.
    6. **Conclusion** : Discussion en classe sur pourquoi certains dessins ont échoué et d'autres ont réussi.
2. Attaques Adversariales
    1. **Questionnement** : Demandez aux élèves de penser à comment quelqu'un pourrait tromper le système.
    2. **Recherche** : Recherche sur ce que sont les attaques adversariales dans le contexte de l'IA.
    3. **Hypothèse** : Les élèves forment des hypothèses sur des modifications spécifiques qui pourraient tromper le système.
    4. **Expérimentation** : Tester ces dessins modifiés avec la maquette.
    5. **Analyse** : Enregistrement et discussion des résultats.
    6. **Conclusion** : Réflexion sur les moyens de rendre le système plus robuste face à ces types d'attaques.
3. Évaluation et Réflexion :
    - Les élèves devraient être en mesure d'identifier les vulnérabilités de la maquette et de proposer des améliorations.
    - Discussion sur les implications éthiques et de sécurité de l'utilisation de l'IA dans les systèmes de verrouillage.

Cette expérimentation permet aux élèves non seulement de comprendre les limitations de l'IA mais aussi de réfléchir de manière critique sur son application dans des scénarios du monde réel.

💬 **Débriefing**

Ce protocole détaillé offre une exploration approfondie de la technologie moderne, de la programmation, de la reconnaissance d'image et de l'éthique dans la technologie. Il encourage également une réflexion critique sur la conception et l'implémentation de systèmes sécurisés. L'enseignant doit guider et surveiller attentivement les étudiants tout au long du processus, en fournissant des explications supplémentaires et des démonstrations si nécessaire.

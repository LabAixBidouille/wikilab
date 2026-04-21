# La Cabane à outils

*Cardboard Robot - S'orienter et se repérer dans l'espace avec la carte micro:bit*

## Informations générales

| | |
|---|---|
| **Matière principale** | Géographie, Sciences et technologie |
| **Âge** | 9-12 ans |
| **Thématiques** | Se repérer dans l'espace, s'orienter, lire une carte, utiliser une boussole |
| **Durée** | 3 séances + sortie |
| **Pratiques informatiques** | Programmation par blocs, utilisation de capteurs, fabrication numérique |
| **Type d'activité** | Activité branchée |
| **Logistique** | En classe, en groupe, sortie à prévoir |

### Points du programme abordés

**« Se repérer dans l'espace » - Géographie, Cycle 3**

Cette séquence permet aux élèves de développer leurs compétences d'orientation spatiale en construisant un outil concret : un robot en carton équipé d'une boussole numérique programmée sur micro:bit. En combinant fabrication manuelle et programmation, les élèves découvrent comment fonctionne une boussole, comprennent les notions de points cardinaux et apprennent à s'orienter dans leur environnement proche.

Les compétences mobilisées sont les suivantes :

- **Se repérer dans l'espace : construire des repères géographiques** - Les élèves apprennent à nommer et situer les points cardinaux, à orienter une carte et à se repérer dans un espace connu
- **Raisonner, justifier une démarche** - Formulation d'hypothèses sur le fonctionnement du magnétomètre et vérification par l'expérimentation
- **Pratiquer différents langages en géographie** - Lecture et orientation de cartes, utilisation de symboles directionnels, création de parcours d'orientation
- **Coopérer et mutualiser** - Construction collaborative du robot et des parcours d'orientation

**Liens avec d'autres domaines du programme :**

- **Sciences et technologie** : Découvrir le magnétisme terrestre, pratiquer une démarche scientifique en calibrant un capteur et programmer un objet technique en équipe.
- **Mathématiques** : Travailler sur les angles (90°, 180°, 270°, 360°), les directions et la relation entre degrés et points cardinaux.
- **Éducation physique et sportive** : S'orienter dans un contexte sportif et ludique lors d'une course d'orientation avec le robot-boussole.
- **Arts plastiques** : Concevoir et décorer le robot en carton, mobilisant création plastique et design.

### Matériel nécessaire

**Matériel de base (indispensable)**

- **Documentation et observation** : boussoles traditionnelles (au moins une pour la démonstration), cartes du quartier ou de l'école, carnets, crayons
- **Construction du robot** : carton épais ou boîtes de récupération, ciseaux, colle, ruban adhésif, feutres et peinture pour la décoration
- **Supports pédagogiques** : images des points cardinaux, schémas de boussoles, vidéos explicatives sur le magnétisme

**Pour la boussole numérique (recommandé)**

- **Carte micro:bit** : La carte micro:bit intègre un magnétomètre (capteur de champ magnétique) qui permet de créer une boussole numérique. Elle dispose également d'une matrice de 25 LEDs parfaite pour afficher les directions. Kit complet recommandé (environ 20€) : [https://www.kubii.com/fr/kits-micro-controleurs/3092-kit-microbit-go-v2-5051259252592.html](https://www.kubii.com/fr/kits-micro-controleurs/3092-kit-microbit-go-v2-5051259252592.html)
- **Alimentation** : Boîtier de piles AAA pour rendre le robot autonome
- **Programmation** : Accès à un ordinateur avec MakeCode (gratuit en ligne : [makecode.microbit.org](https://makecode.microbit.org))

Chaque élève n'a pas besoin de sa propre carte micro:bit. Deux ou trois cartes suffisent pour toute la classe. Les élèves peuvent programmer à tour de rôle sur l'émulateur MakeCode, puis tester sur les cartes physiques. Le robot en carton peut être conçu avec un emplacement modulable pour accueillir la carte partagée.

**Pour les parcours d'orientation (optionnel)**

- Balises ou cônes de couleur pour marquer les points de passage
- Cartes imprimées du parcours (cour d'école, parc proche)
- Chronomètres pour les défis chronométrés
- Carnets de bord pour noter les directions et observations

### Liens utiles

- [https://www.youtube.com/watch?v=lg3VLcSRUNc](https://www.youtube.com/watch?v=lg3VLcSRUNc)
- [https://microbit.org/projects/make-it-code-it/compass-bearing/](https://microbit.org/projects/make-it-code-it/compass-bearing/)
- [https://www.youtube.com/watch?v=9IyssvevhJ0](https://www.youtube.com/watch?v=9IyssvevhJ0)
- [https://www.youtube.com/watch?v=KeDDMq60stI](https://www.youtube.com/watch?v=KeDDMq60stI)
- [https://makecode.microbit.org/projects/compass](https://makecode.microbit.org/projects/compass)
- [https://www.instructables.com/Microbit-Compass/](https://www.instructables.com/Microbit-Compass/)
- [https://www.elecfreaks.com/blog/post/make-a-compass-with-your-microbit.html](https://www.elecfreaks.com/blog/post/make-a-compass-with-your-microbit.html)

---

> Cette fiche d'activité fait partie du projet Robots Meet Arts (numéro de projet 2023-1FR01-KA220-SCH-000151881) financé avec le soutien de la Commission européenne par le biais du programme Erasmus+. Son contenu n'engage que son auteur et la Commission ne peut être tenue responsable de l'usage qui pourrait être fait des informations qu'elle contient. Ce travail est sous licence Creative Commons Attribution-ShareAlike 4.0 International License.

---

## Préambule sur l'orientation robotique du projet

La robotique éducative est souvent associée à des kits coûteux mais l'objectif de ce projet est d'illustrer le fait qu'avec une simple carte micro:bit, du carton de récupération et un peu de créativité, les élèves peuvent construire un robot fonctionnel qui leur apprend à s'orienter dans l'espace. Car qu'est-ce qu'un robot, sinon un objet physique capable de percevoir son environnement (ici, le champ magnétique terrestre) et d'y réagir (afficher une direction, faire tourner une flèche) ? Pas besoin de bras articulés ni de roues motorisées : notre robot-boussole en carton incarne parfaitement ce lien entre le code et le monde réel. L'élève programme des instructions, et un objet concret qu'il a fabriqué de ses mains répond à ces instructions. C'est cette magie de voir le numérique agir sur le physique qui rend la robotique captivante.

Ici, les élèves ne codent pas pour coder : ils codent pour comprendre comment fonctionne une boussole, pour s'orienter dans leur quartier, pour créer des parcours d'orientation. Le robot n'est pas une fin en soi, mais un compagnon d'apprentissage qui rend tangibles des notions abstraites comme les points cardinaux, les angles ou le magnétisme terrestre.

Enfin, ce projet démontre qu'on peut faire de la robotique avec un budget minimal. Une carte micro:bit partagée entre plusieurs groupes, des boîtes de céréales, de la colle : voilà les ingrédients d'un robot qui n'a rien à envier aux kits du commerce, et qui a l'avantage d'être entièrement personnalisable et compréhensible par les élèves.

## Introduction - Les enjeux de l'orientation spatiale

Savoir s'orienter dans l'espace est une compétence fondamentale que les humains ont développée depuis des millénaires. Des étoiles aux boussoles magnétiques, des cartes papier aux GPS, les outils d'orientation ont évolué mais le besoin reste le même : savoir où l'on est et dans quelle direction aller. Dans cette séquence, les élèves vont construire leur propre outil d'orientation : un robot en carton équipé d'une boussole numérique. Ce projet leur permettra de comprendre concrètement comment fonctionne une boussole, de manipuler les notions de points cardinaux et de degrés, et de développer leurs compétences de repérage dans l'espace.

Le robot-boussole devient un compagnon d'apprentissage : son « visage » (la matrice LED de la carte micro:bit) affiche une flèche pointant vers le Nord, permettant aux élèves de s'orienter de manière ludique. La fabrication du robot en carton ajoute une dimension créative et personnalisable au projet, tandis que la programmation développe la pensée algorithmique. L'objectif final est double : maîtriser les concepts d'orientation spatiale du programme de géographie, tout en découvrant les possibilités offertes par la programmation et les capteurs numériques.

---

## Séquence 1 - Mise en route (Warm-up)

*Découverte et échauffement*

> **Notes pour l'enseignant·e**
>
> - Procurez-vous une ou plusieurs boussoles traditionnelles pour la démonstration
> - Préparez des affichettes « N », « S », « E », « O » à placer aux quatre coins de la classe
> - Repérez à l'avance où se situe le Nord dans votre salle de classe (vérifiez avec une boussole ou une application smartphone)
> - Sélectionnez une courte vidéo sur le magnétisme terrestre adaptée à vos élèves
> - Imprimez une carte du quartier ou de l'école pour la manipulation

**Objectif** : Comprendre ce qu'est l'orientation, découvrir les points cardinaux et le fonctionnement d'une boussole.

Commencez par une discussion ouverte avec la classe : « Que signifie s'orienter ? Quand avez-vous besoin de vous orienter dans la vie quotidienne ? » Notez les réponses des élèves au tableau. Faites émerger les différentes situations : trouver son chemin dans une ville inconnue, se repérer dans une forêt, suivre un itinéraire sur une carte...

Introduisez ensuite l'étymologie du mot « orientation » : il vient de « orient », qui désigne l'Est, là où le soleil se lève. Historiquement, les humains se repéraient grâce au soleil : l'Est (lever), l'Ouest (coucher), et en déduisaient le Nord et le Sud.

Présentez les quatre points cardinaux : Nord, Sud, Est, Ouest. Expliquez leur disposition dans l'ordre horaire (Nord, Est, Sud, Ouest) et faites remarquer que les directions opposées se font face (Nord/Sud, Est/Ouest).

Organisez un jeu dans la classe : identifiez ensemble où se trouve le Nord (si vous avez une boussole, utilisez-la ; sinon, basez-vous sur la position du soleil ou la connaissance du quartier). Placez des affichettes « N », « S », « E », « O » aux quatre coins correspondants de la classe. Demandez ensuite aux élèves de se déplacer : « Allez vers le Nord ! », « Tournez-vous vers l'Est ! ». Ce jeu kinesthésique ancre les notions de manière corporelle.

Montrez une boussole traditionnelle à la classe. Laissez les élèves l'observer : que voient-ils ? Une aiguille qui bouge, des lettres (N, S, E, O), des graduations... Expliquez que l'aiguille est aimantée et qu'elle pointe toujours vers le Nord magnétique grâce au champ magnétique terrestre.

Pour les plus curieux, vous pouvez montrer une courte vidéo expliquant que la Terre se comporte comme un gigantesque aimant, avec un pôle Nord et un pôle Sud magnétiques. L'aiguille de la boussole, qui est elle-même aimantée, est attirée par ce champ magnétique.

Faites manipuler la boussole par les élèves (par petits groupes si vous n'en avez qu'une). Demandez-leur de vérifier si le Nord identifié précédemment dans la classe est bien confirmé par la boussole.

Annoncez le projet :

> « Nous allons construire notre propre boussole, mais pas une boussole ordinaire : un robot en carton qui nous indiquera le Nord grâce à un ordinateur miniature ! »

Montrez une carte micro:bit et expliquez qu'elle contient un capteur spécial appelé **magnétomètre**, capable de détecter le champ magnétique terrestre, exactement comme l'aiguille d'une boussole traditionnelle.

Montrez l'écran LED de la carte micro:bit : « Au lieu d'une aiguille qui tourne, notre robot affichera une flèche lumineuse qui pointera toujours vers le Nord ! »

*Fin de la séquence de mise en route.*

---

## Séquence 2 - Approfondissement (Build-up)

*Acquisition et structuration des savoirs*

> **Notes pour l'enseignant·e**
>
> - Collectez à l'avance des boîtes en carton de récupération (céréales, chaussures, mouchoirs) – sollicitez les familles quelques jours avant
> - Préparez un poste avec le matériel de découpe et collage (ciseaux, colle, ruban adhésif, feutres)
> - Testez l'accès à MakeCode ([makecode.microbit.org](https://makecode.microbit.org)) sur les ordinateurs de la classe et vérifiez que le site n'est pas bloqué
> - Chargez les cartes micro:bit et vérifiez que les boîtiers de piles fonctionnent
> - Préparez un exemple de gabarit de robot à montrer aux élèves (voir annexe)

**Objectif** : Fabriquer le robot en carton et programmer la boussole numérique sur carte micro:bit.

Si c'est la première fois que les élèves utilisent MakeCode, commencez par une découverte collective de l'interface projetée au vidéoprojecteur. Identifiez ensemble les différentes zones : l'émulateur de la carte micro:bit à gauche, les catégories de blocs au centre (Entrées, Musique, LED, etc.), l'espace de programmation à droite. Explorez la catégorie « Entrées » et trouvez le bloc **« direction de la boussole (°) »**.

Expliquez que ce bloc renvoie un nombre entre 0 et 359 correspondant à l'angle par rapport au Nord magnétique :

- 0° = Nord
- 90° = Est
- 180° = Sud
- 270° = Ouest

### Deux versions du projet

Selon le niveau de vos élèves et le temps disponible, plusieurs versions du projet peuvent être explorées. En voici deux versions :

| Caractéristiques du projet | Affichage simple sur la carte | Affichage sur la carte couplée d'une flèche motorisée sur le robot |
|---|---|---|
| **Principe** | La carte micro:bit affiche une flèche sur ses LEDs qui pointe vers le Nord | Une flèche en carton fixée sur un servomoteur tourne physiquement pour pointer vers le Nord |
| **Effet visuel** | Flèche lumineuse sur l'écran 5x5 LEDs | Flèche mécanique qui tourne réellement |
| **Matériel spécifique** | Carte micro:bit + boîtier piles uniquement | Carte micro:bit + servomoteur + câbles + alimentation externe recommandée |
| **Contraintes de construction** | Prévoir une ouverture de 5x4 cm pour voir l'écran LED | Prévoir un emplacement stable pour le servo au sommet du robot + passage des câbles |
| **Programmation** | Blocs conditionnels simples (si... alors) | Idem + conversion d'angles + contrôle du servo |
| **Idéal pour** | Première découverte de la programmation, classes à effectif important, temps limité | Élèves à l'aise avec la programmation, projet approfondi, club ou atelier |
| **Conseils de construction** | Créer un cadre avec fenêtre 5x4 cm pour l'écran LED. Vérifier que la carte s'insère facilement. Prévoir accès USB à l'arrière. | Plateau horizontal au sommet pour le servo (axe vertical). Flèche en carton 8-10 cm fixée sur le palonnier. Prévoir passage des câbles. |
| **Programmation (détail)** | Blocs : « toujours » + « direction de la boussole » + « si... alors... sinon » (8 conditions) + « montrer flèche ». Logique : selon l'angle (0-359°), afficher la flèche correspondante parmi 8 directions. | Blocs : « toujours » + « direction de la boussole » + « définir variable » + calcul + « épingle servo ». Logique : convertir l'angle boussole (0-359°) en angle servo (0-180°) puis envoyer au servo sur P0. |

### Concevoir le robot

Avant de construire votre robot, lancez une réflexion collective : à quoi ressemblera notre robot-boussole ? Quelques contraintes techniques à respecter :

- Le robot doit pouvoir accueillir la carte micro:bit de manière visible (l'écran LED doit être accessible)
- Il doit être suffisamment stable pour tenir debout
- Il doit être facilement transportable pour les activités d'orientation
- L'emplacement de la carte micro:bit doit permettre de le retirer et le remettre facilement (si partagé entre plusieurs robots)

Proposez aux élèves de dessiner leur robot idéal sur papier avant de passer à la construction. Ils peuvent s'inspirer de formes variées : robot humanoïde, animal (hibou qui sait toujours où est le Nord), véhicule futuriste, personnage fantaisiste... puis laissez la classe en petit groupe construire plusieurs versions. Vous pouvez proposer aux élèves de réaliser la version qu'ils souhaitent : avec ou sans servomoteur, si vous êtes à l'aise avec les deux solutions. Les groupes choisissent selon leur appétence, ou vous différenciez selon les niveaux. Les robots peuvent ensuite être comparés lors de la présentation finale.

> **Notes pour l'enseignant·e**
>
> Encouragez la créativité tout en rappelant les contraintes techniques. Un robot très décoré mais qui ne tient pas debout ou dont on ne voit pas l'écran LED ne sera pas fonctionnel. C'est l'occasion d'aborder la notion de cahier des charges en technologie.

### Programmation du robot-boussole

Une fois les robots construits, ou en parallèle pour proposer aux élèves de tourner entre des ateliers manuels et des moments dédiés à la programmation, passez à la création du code permettant à vos "cardboard robots" de fonctionner. Pour réaliser le code le plus simple, voici les étapes principales - la totalité du code et l'explication des différents blocs est disponible en annexe.

#### Étape 1 - Afficher la valeur brute

Dans le bloc « toujours » (bloc de base), affichez simplement la direction de la boussole avec les blocs « montrer nombre » (bloc de base) et « direction de la boussole (°) » (bloc d'entrée). Testez sur l'émulateur (cliquez sur la boussole simulée) puis sur une vraie carte micro:bit. Les élèves voient défiler des nombres qui changent quand ils tournent la carte.

#### Étape 2 - Afficher la lettre du point cardinal

Utilisez des blocs « si... alors... sinon » pour afficher N, E, S ou O selon la valeur de l'angle. Par exemple : si l'angle est entre 315° et 45°, afficher « N » ; si entre 45° et 135°, afficher « E », etc.

#### Étape 3 - Afficher une flèche pointant vers le Nord

Utilisez les blocs de LED pour créer des flèches dans les 8 directions. La flèche pointe toujours vers le Nord, donc si l'utilisateur fait face au Nord (0°), la flèche pointe vers le haut ; s'il fait face à l'Est (90°), la flèche pointe vers la gauche (car le Nord est alors à sa gauche). À ce stade, vous pouvez également ajouter plus de détails, en spécifiant Nord-Ouest, Sud-Ouest...

Pour les groupes qui ont choisi la version avec servomoteur, poursuivez avec ces étapes supplémentaires :

#### Étape 4 - Comprendre le principe

Le servomoteur ne peut tourner que de 0° à 180°, soit un demi-tour. On va donc utiliser la flèche pour indiquer le Nord uniquement sur l'arc avant : de l'Ouest (à gauche) jusqu'à l'Est (à droite), en passant par le Nord (devant). Quand le Nord est derrière nous (dans la zone Sud), la flèche restera bloquée sur le côté pour indiquer « le Nord est par là, tourne-toi ! ».

#### Étape 5 - Créer les variables et calculer

Dans la catégorie « Variables », créez une nouvelle variable « angle » (pour la position du servo). La variable « degrés » créée à l'étape 2 contient déjà la direction de la boussole. Utilisez des blocs « si... alors... sinon » (catégorie « Logique ») avec des blocs de calcul (catégorie « Maths ») pour calculer l'angle du servo selon le schéma ci-dessus :

- Si « degrés » est supérieur ou égal à 270 (zone Ouest vers Nord), alors « définir angle à degrés - 270 ».
- Sinon, si « degrés » est inférieur ou égal à 90 (zone Nord vers Est), alors « définir angle à degrés + 90 ».
- Sinon (on est dans la zone Sud, entre 91° et 269°), bloquer la flèche au bord le plus proche : si « degrés » est inférieur à 180, alors « définir angle à 180 » (bloqué côté Est), sinon « définir angle à 0 » (bloqué côté Ouest).

#### Étape 6 - Commander le servomoteur

Cliquez sur « Avancé » pour faire apparaître la catégorie « Broches ». Utilisez le bloc « régler position servo broche P0 à » et placez-y la variable « angle ». Ajoutez une pause de 100 ms (catégorie « Base », bloc « pause (ms) ») pour stabiliser le mouvement. Testez : quand vous tournez face au Nord, la flèche pointe devant ; face à l'Est, elle pointe à droite ; face à l'Ouest, elle pointe à gauche.

### Organisation pratique

Si vous disposez de peu de cartes micro:bit physiques, organisez des ateliers tournants : un atelier « Programmation » où les élèves codent sur l'émulateur MakeCode, un atelier « Fabrication » où ils construisent et décorent leur robot, et un atelier « Test réel » où un petit groupe utilise les cartes physiques pour tester, calibrer et valider. Faites tourner tous les groupes sur ces trois ateliers.

**Prolongement mathématique – La symétrie des points cardinaux** : Profitez de cette activité pour faire réfléchir les élèves sur la symétrie des directions. Si la flèche indique où est le Nord, où se trouve le Sud ? Réponse : toujours à l'opposé, à 180° d'écart !

Posez-leur des devinettes : « La flèche pointe vers la droite, donc le Nord est à l'Est. Où est le Sud ? » (À l'Ouest, derrière à gauche). « La flèche pointe devant, où est le Sud ? » (Derrière nous).

Cette réflexion permet de comprendre qu'avec seulement le Nord, on peut déduire toutes les autres directions : le Sud est à l'opposé (+180°), l'Est est à 90° dans le sens horaire, l'Ouest à 90° dans le sens anti-horaire. C'est aussi pourquoi notre servo qui ne couvre que 180° suffit : en connaissant le Nord, on connaît tout !

> **Calibration** : La première fois qu'on utilise la boussole sur une vraie carte micro:bit, elle demande une calibration. Il faut incliner la carte dans tous les sens jusqu'à ce que toutes les LEDs s'allument, formant un cercle. C'est une étape indispensable pour que les mesures soient précises. Prévoyez du temps pour cette étape avec les élèves.

*Fin de la séquence d'approfondissement.*

---

## Séquence 3 - Mise en pratique (Rehearsal)

*Réinvestissement et application des connaissances*

> **Notes pour l'enseignant·e**
>
> - Repérez le terrain à l'avance : identifiez les zones adaptées pour les parcours (cour, parc proche) et vérifiez les autorisations de sortie si nécessaire
> - Préparez et imprimez des cartes du lieu avec le Nord indiqué (utilisez Géoportail ou OpenStreetMap)
> - Installez les balises ou cônes de couleur avant la séance pour les parcours d'orientation
> - Rédigez les indices directionnels de la chasse au trésor et cachez-les aux emplacements prévus
> - Prévoyez des carnets de bord ou feuilles pour que les élèves notent leurs directions

**Objectif** : Mettre en pratique les compétences d'orientation avec le robot-boussole à travers des activités ludiques.

Distribuez à chaque groupe une carte de la cour d'école ou du quartier proche. La première tâche est d'apprendre à « orienter » la carte, c'est-à-dire la positionner de manière à ce que le Nord de la carte corresponde au Nord réel :

1. Posez la carte à plat devant vous
2. Tenez le robot-boussole et observez la flèche : elle pointe vers le Nord
3. Tournez la carte jusqu'à ce que la flèche « N » de la carte soit alignée avec la direction indiquée par le robot
4. La carte est maintenant orientée : ce qui est à droite sur la carte est réellement à votre droite !

Demandez aux élèves de repérer sur la carte orientée où se trouvent différents éléments : le bâtiment de l'école, le portail, le préau, les arbres... Vérifiez ensemble que tout correspond à la réalité.

Préparez un parcours dans la cour ou un espace proche de l'école. À chaque étape, les élèves trouvent un indice qui leur donne une direction à suivre (exemple : « Va vers l'Est pendant 20 pas »). Le robot-boussole permet de trouver la bonne direction.

Exemples d'indices :

- « Marche vers le Nord jusqu'au grand arbre »
- « Tourne-toi vers l'Ouest et fais 15 pas »
- « Le prochain indice est au Sud-Est, près du banc »

Les élèves utilisent leur robot-boussole pour s'orienter et suivre les directions. Ils notent leur parcours dans leur carnet de bord, traçant les directions suivies.

Pour une version plus sportive, organisez une vraie course d'orientation dans un parc proche (avec les autorisations nécessaires). Les élèves doivent trouver plusieurs balises dans un ordre imposé, en utilisant une carte et leur robot-boussole :

- Placez 5 à 8 balises (cônes, fanions) à différents endroits
- Marquez leur position sur la carte avec des numéros
- Les équipes partent à intervalles réguliers
- À chaque balise, les élèves récupèrent un poinçon ou notent un code
- L'équipe qui termine le parcours le plus rapidement avec tous les codes gagne

> **Adaptation** : Si une sortie extérieure n'est pas possible, créez un parcours d'orientation dans l'école elle-même : couloirs, salles, cour. L'objectif pédagogique reste le même, seul l'espace change.

*Fin de la séquence de mise en pratique.*

---

## Réflexion autour de la séquence

*Conclure et en tirer des apprentissages*

Une fois l'ensemble des activités réalisées, vous pouvez organiser une exposition des robots-boussoles dans la classe ou dans un espace commun de l'école. Chaque groupe présente son robot : son nom, son design, le programme utilisé, et fait une démonstration de son fonctionnement. Invitez d'autres classes, les parents, ou des représentants de l'école à venir découvrir les créations. Les élèves expliquent le fonctionnement de la boussole, les points cardinaux, et montrent comment orienter une carte.

Concluez le projet par un moment de réflexion collective. Posez des questions ouvertes aux élèves :

- « Qu'avez-vous appris sur l'orientation que vous ne saviez pas avant ? »
- « Comment fonctionne une boussole ? Expliquez-le avec vos mots. »
- « Quelle a été la partie la plus difficile du projet ? La plus amusante ? »
- « Dans quelles situations de la vie quotidienne pourriez-vous utiliser ces compétences d'orientation ? »

Aidez les élèves à prendre conscience des compétences développées : lire une carte, utiliser les points cardinaux, programmer, travailler en équipe, résoudre des problèmes techniques...

Créez ensemble une trace écrite récapitulative du projet, incluant :

- Un schéma des points cardinaux avec les valeurs en degrés
- Une explication du fonctionnement de la boussole (magnétisme terrestre)
- Les étapes de fabrication du robot
- Le code utilisé (en blocs ou en pseudo-code simplifié)
- Des photos du projet et des activités d'orientation

*Fin de la séquence « La cabane à outils ».*

---

## Tutoriel et programmation

### Introduction

Le BBC micro:bit est une carte de programmation polyvalente qui peut être transformée en cerveau de nombreux projets robotiques. Contrairement à Cubetto ou Sphero Indi, qui sont des systèmes autonomes, les robots micro:bit sont construits à partir de composants séparés : la carte micro:bit elle-même, une carte d'extension (aussi appelée « shield » ou « breakout board »), des moteurs, des capteurs et un châssis ou système de construction. Cette modularité apporte une grande flexibilité mais introduit également un concept important : chaque plateforme robotique nécessite d'être programmée sur MakeCode en utilisant des extensions spécifiques.

### Qu'est-ce que MakeCode ?

MakeCode est un environnement de programmation gratuit, basé sur navigateur, développé par Microsoft. Il propose une approche de codage visuelle par blocs qui rend la programmation accessible aux débutants tout en offrant des alternatives textuelles pour les utilisateurs plus avancés. Caractéristiques principales :

- **Gratuit et en ligne** : Aucune installation requise ; fonctionne dans tout navigateur web moderne
- **Utilisable hors ligne** : Une application téléchargeable est disponible pour Windows, macOS et Linux
- **Multi-langages** : Supporte les blocs, JavaScript et Python
- **Simulateur inclus** : Tester les programmes sans matériel physique
- **Documentation complète** : Tutoriels, exemples et ressources enseignants intégrés

Accéder à MakeCode : [https://makecode.microbit.org/](https://makecode.microbit.org/)

MakeCode propose trois façons d'écrire le même programme :

- **Mode blocs (par défaut)** : Programmation visuelle utilisant des blocs colorés et imbriqués. Idéal pour les débutants et les jeunes élèves. Chaque bloc représente un concept de programmation sans nécessiter la mémorisation de syntaxe.
- **Mode JavaScript** : Programmation textuelle utilisant la syntaxe JavaScript. Les blocs se convertissent automatiquement en JavaScript, et vice versa. Utile pour les apprenants passant au codage textuel ou pour écrire une logique plus complexe.
- **Mode Python** : Programmation textuelle utilisant la syntaxe Python. Disponible dans les versions récentes de MakeCode. Particulièrement précieux car Python est largement enseigné dans l'enseignement secondaire et utilisé professionnellement.

Les trois modes sont interconnectés – les modifications dans un mode se reflètent dans les autres (avec quelques limitations pour le code Python complexe). Cela permet une transition progressive de la programmation visuelle vers la programmation textuelle.

Pour les élèves de 8 à 12 ans, nous recommandons d'utiliser le mode blocs car il semblera aux enfants très logique et naturel de donner des instructions à leur robot.

### Si vous utilisez une carte micro:bit pour la première fois

- **Ouvrir MakeCode** dans votre navigateur.
- **Connecter la carte à l'ordinateur** : Utiliser un câble micro-USB. La carte apparaîtra comme une clé USB nommée « MICROBIT ». Votre carte sera automatiquement associée à votre éditeur sur MakeCode. Sinon, vous pouvez l'associer manuellement en cliquant sur le bouton « Connecter l'appareil » dans le menu accessible en cliquant sur « ... » à côté du bouton « Télécharger ».
- **Transférer le programme** : Une fois votre code créé, cliquez sur « Télécharger » et le programme se téléchargera automatiquement sur la carte associée. Sinon, vous pouvez copier le fichier .hex sur la carte. La LED orange clignote pendant le transfert.
- **Alimentation autonome** : Ajouter un pack de piles AAA dans le support fourni s'il n'est pas inclus dans votre kit robotique.

### Programme 1 - Version sans servomoteur

```javascript
let degrees = 0
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees < 22 || degrees >= 338) {
        basic.showArrow(ArrowNames.North)
    } else if (degrees < 67) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (degrees < 112) {
        basic.showArrow(ArrowNames.West)
    } else if (degrees < 157) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (degrees < 202) {
        basic.showArrow(ArrowNames.South)
    } else if (degrees < 247) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (degrees < 292) {
        basic.showArrow(ArrowNames.East)
    } else {
        basic.showArrow(ArrowNames.NorthEast)
    }
})
```

**Que fait le programme ?**

Le programme lit en continu la direction de la boussole (en degrés de 0 à 359). Selon l'angle mesuré, il affiche une flèche parmi 8 directions possibles. Attention : la flèche indique où se trouve le Nord, pas où l'utilisateur regarde ! Par exemple, si l'utilisateur fait face à l'Est (90°), le Nord est à sa gauche, donc la flèche pointe vers la gauche (Ouest sur l'écran).

| Direction | Degrés |
|---|---|
| Nord | 338° - 22° |
| Nord-Est | 22° - 67° |
| Est | 67° - 112° |
| Sud-Est | 112° - 157° |
| Sud | 157° - 202° |
| Sud-Ouest | 202° - 247° |
| Ouest | 247° - 292° |
| Nord-Ouest | 292° - 338° |

### Programme 2 - Version avec servomoteur

```javascript
let degrees = 0
let angle = 0
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees >= 270) {
        angle = degrees - 270
    } else if (degrees <= 90) {
        angle = degrees + 90
    } else if (degrees < 180) {
        angle = 180
    } else {
        angle = 0
    }
    pins.servoWritePin(AnalogPin.P0, angle)
    basic.pause(100)
})
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees < 22 || degrees >= 338) {
        basic.showArrow(ArrowNames.North)
    } else if (degrees < 67) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (degrees < 112) {
        basic.showArrow(ArrowNames.West)
    } else if (degrees < 157) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (degrees < 202) {
        basic.showArrow(ArrowNames.South)
    } else if (degrees < 247) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (degrees < 292) {
        basic.showArrow(ArrowNames.East)
    } else {
        basic.showArrow(ArrowNames.NorthEast)
    }
})
```

**Que fait le programme ?**

Ce programme fait tourner une flèche mécanique fixée sur un servomoteur pour pointer vers le Nord. Le servomoteur a trois fils à connecter à la carte micro:bit :

| Fil servo | Couleur courante |
|---|---|
| Signal | Orange ou Jaune |
| Alimentation + | Rouge |
| Masse - | Marron ou Noir |

> **Attention** : Le servomoteur consomme du courant. Pour une utilisation prolongée, il est préférable d'alimenter le servo avec une source externe (pack de 4 piles AA) plutôt que directement depuis la carte micro:bit. Pour des démonstrations courtes, l'alimentation par la carte fonctionne. Évitez aussi les angles extrêmes (0° et 180°) qui font grincer le servo ; préférez une plage de 10° à 170°.

**Formules de conversion :**

| Zone boussole | Condition | Calcul de l'angle servo |
|---|---|---|
| Ouest vers Nord | degrés ≥ 270 | angle = degrés - 270 |
| Nord vers Est | degrés ≤ 90 | angle = degrés + 90 |
| Sud-Est (bloqué) | 90 < degrés < 180 | angle = 180 |
| Sud-Ouest (bloqué) | 180 ≤ degrés < 270 | angle = 0 |

**Exemples concrets :**

| Boussole | Calcul | Servo |
|---|---|---|
| 270° (Ouest) | 270 - 270 | 0° |
| 315° (Nord-Ouest) | 315 - 270 | 45° |
| 0° (Nord) | 0 + 90 | 90° |
| 45° (Nord-Est) | 45 + 90 | 135° |

### Accéder aux projets sur MakeCode Micro:bit

- Affichage simple sur la carte : [https://makecode.microbit.org/S08413-6091064519-56678](https://makecode.microbit.org/S08413-6091064519-56678)
- Affichage sur la carte couplée d'une flèche motorisée sur le robot : [https://makecode.microbit.org/S22604-2436276889-84217](https://makecode.microbit.org/S22604-2436276889-84217)

---

> Ressources imprimables jointes : exemple de jeu introductif autour de la carte micro:bit et exemple de programme.

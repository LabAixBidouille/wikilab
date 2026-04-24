---
id: mini-projet-2-capteurs
title: Robot autonome à capteurs
sidebar_label: "Robot autonome à capteurs"
sidebar_position: 2
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="5" y="8" rx="2" ry="2" width="14" height="10" fill="#1198f0" opacity="0.1"/><rect x="7" y="10" rx="1" ry="1" width="10" height="6" fill="#1198f0" opacity="0.25"/><circle cx="9.5" cy="13" r="1.2" fill="#1198f0" opacity="1.0"/><circle cx="14.5" cy="13" r="1.2" fill="#1198f0" opacity="1.0"/><rect x="3" y="18" width="4" height="3" rx="1" fill="#1198f0" opacity="1.0"/><rect x="17" y="18" width="4" height="3" rx="1" fill="#1198f0" opacity="1.0"/><path d="M9 6 L9 8 M15 6 L15 8" stroke="#1198f0" strokeWidth="1.5" strokeLinecap="round" opacity="1.0"/><path d="M7 4 L9 6 M17 4 L15 6" stroke="#1198f0" strokeWidth="1.2" strokeLinecap="round" opacity="0.25"/><circle cx="7" cy="3.5" r="1" fill="#1198f0" opacity="1.0"/><circle cx="17" cy="3.5" r="1" fill="#1198f0" opacity="1.0"/></svg> Robot autonome à capteurs

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Sciences</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| JediTrack | ~3h | Intermédiaire | 12-16 ans |

## Matériel

**Composants et consommables**
- Raspberry Pico (avec broches soudées de préférence)
- Capteur ultrasonore HC-SR04
- 2 moteurs
- Pile 4.5V (ou 3 de 1.5 V)
- Pile 9V
- Breadboard
- Câbles dupont mâle/mâle
- Plaques de bois fin
- Batons pour pistolet à colle

**Outils informatiques et de bricolage**
- Ordinateur avec Thonny
- Câble USB - micro-USB
- Pistolet à colle

</div>

</div>

---

**A la recherche d'un projet concret mêlant électronique, programmation et robotique, cette fiche accompagne les animateurs et éducateurs dans la réalisation d'un robot autonome avec des jeunes. Des bases de Python aux montages électroniques, découvrez comment transformer des composants simples en un véritable robot capable d'éviter les obstacles.**

Afin d'initier les jeunes à la programmation et aux capteurs, le projet Robot autonome est une valeur sure pour introduire des notions majeures. En développant un robot motorisé sur base d'un Raspberry Pi Pico, à l'aide d'un capteur à ultrson, qui repère les obstacles et les évite, les jeunes mobilise leurs compétences en fonctionnement des capteurs, programmation en python, logiciels disponible au sein d'un fablab, machine, câblage, soudure ...

:::info[Conseil pour l'animateur]
Parce que les jeunes voient immédiatement le résultat de leur travail. Chaque ligne de code modifiée fait bouger le robot différemment, chaque connexion réalisée a un impact visible. Cette rétroaction instantanée maintient l'engagement et facilite la compréhension des concepts abstraits de programmation. **Le plus ? C'est un projet évolutif.** On peut commencer simple (faire clignoter une LED) et progresser vers un robot autonome complet. Les participants moins à l'aise peuvent se concentrer sur le montage physique, tandis que les plus avancés peuvent améliorer l'intelligence du robot. Chacun trouve sa place et contribue selon ses forces. Ce projet développe des compétences multiples : logique de programmation, électronique, résolution de problèmes, travail manuel avec les outils, et même un peu de mathématiques avec le calcul des distances. Les jeunes repartent avec un objet qu'ils ont créé de A à Z, source de fierté et de motivation pour continuer.
:::

## Que trouverez-vous dans cette fiche ?

- **Une initiation complète au Raspberry Pi Pico** — Découverte du microcontrôleur, installation de Thonny, premières manipulations
- **Programmation des moteurs** — Faire avancer, reculer et tourner le robot
- **Checklist complète pour animateurs** — Organisation avant, pendant et après l'atelier
- **Idée d'atelier complémentaire** — "Robot Explorateur" - Cartographier son environnement
- **Aller plus loin** — Quelques vidéos et tutoriels en ligne

## Comment mener cette activité

## Initiation Raspberry Pico
### Caractéristiques du Raspberry Pico
Le Raspberry-Pi Pico est un microcontrôleur dont le principal avantage est sa petite taille.

:::note
*Si votre groupe ne voit pas ce qu'est un microcontrôleur, il s'agit en quelque sorte d'un petit ordinateur (d'où le « micro »), en général disposant de broches programmables (d'où le « contrôleur »). Il n'est pas nécessaire de trop rentrer dans les détails à ce stade-ci, car nous développerons les caractéristiques des éléments dont nous aurons besoin au moment où nous en aurons besoin.*
:::

Ci-dessous la fiche technique du Pico, que vous pouvez montrer aux participants, sans pour autant détailler chacune des broches.

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/Capture_dcran_2025-09-16_100832.png" alt="Fiche technique du Raspberry Pi Pico" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

Les broches qu'il peut être intéressant de détailler sont les GND (qui se branchent sur le pole négatif de votre alimentation, le VSYS (qui se branche au pole positif de votre source d'alimentation), les broches VBUS et 3.3V (qui servent à fournir du courant), et les broches GP (qui sont les broches programmables).

Le pico dispose également d'une Led, d'un bouton bootsel et d'un port USB.

On peut également voir le processeur, des résistance, etc. mais ils ne sont pas programmables.

### Bases de programmation
Nous allons programmer les Pico avec le programme « Thonny », qui n'est au fond qu'un éditeur de texte optimisé pour python. Il offre simplement la possibilité de télécharger les programmes que vous écrirez directement dans le microcontrôleur.

:::note
*Une première chose à comprendre, c'est qu'un code n'est finalement qu'un texte, écrit de telle façon qu'il soit compréhensible par la machine. « Python » est un langage de programmation, et ce terme « langage » n'est pas anodin. En effet tous les microcontrôleurs ou programme n'utilise pas le même, et utiliser un langage qui n'est pas compris par votre programme ne fonctionnera pas, un peu comme si je vous parlais une langue que vous n'aviez jamais apprise : vous ne comprendriez pas grand-chose.*
:::

Thonny se présente ainsi :

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/Capture_dcran_2025-09-16_101341.png" alt="Interface Thonny" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

Il y a 2 zones principales. La première (encadrée en rouge) est la zone du programme. C'est là que vous allez écrire votre code à proprement parler. La seconde zone est votre console, dans laquelle apparaissent différents messages. Vous pouvez demander d'y écrire des message, des mesures, etc. via le programme. Par exemple si votre microcontrôleur mesurait la température mais ne disposait pas d'un écran, vous pourriez demander au programme d'écrire la mesure dans la console. L'autre aspect important de la console sont les codes d'erreur. Du texte en rouge vous signalera une problème dans le code. Nous y reviendrons plus tard.

**Brancher le Pico**

:::note
*Vous pouvez lancer Thonny, et brancher votre Pico. Brancher ensuite votre Pico et sélectionnez le comme interpréteur, c'est-à-dire comme lieu d'exécution et de sauvegarde du programme. Il est également possible de sauvegarder sur son ordinateur mais la carte ne pourra alors pas exécuter le programme sans y être connecté.*
*Par défaut Thonny utilise l'ordinateur comme interpréteur (c'est-à-dire comme entité qui exécutera le code), nous voulons utiliser la Pico.*
:::

Pour s'assurer que le Pico soit identifié comme un interpréteur par Thonny, il faut insérer un programme dans le pico la première fois qu'on le connecte afin qu'il utilise bien micropython.

:::note
*Pico emploie par défaut le langage C. Il faut donc faire une petite manipulation pour qu'il emploie python.*
:::

Pour bien le connecter, branchez votre Pico à l'aide du câble micro USB, en gardant le bouton « Bootsel » de la carte enfoncée. Vous pouvez relâcher le bouton une fois que la fenêtre contenant le fichier du Pico s'ouvre (il apparait comme un emplacement de stockage sur votre PC, ayant pour nom RPI-RP2).

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/Capture_dcran_2025-09-16_101612.png" alt="Connexion du Pico" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

Dans cet emplacement, glissez le fichier **MicroPython UF2 file (téléchargeable ici : [https://www.raspberrypi.com/documentation/microcontrollers/micropython.html](https://www.raspberrypi.com/documentation/microcontrollers/micropython.html) ). Une fois que c'est fait, vous pouvez ouvrir Thonny et définir le PiCo comme interpréteur.**

Pour ce faire, allez dans l'onglet Exécuter (ou run si le programme est en anglais, mais il sera au même emplacement), puis dans le menu déroulant cliquez sur « Sélectionner l'interpréteur ».

Une fenêtre s'ouvrira et dans cette fenêtre il y a 2 menus déroulant, dans le premier sélectionnez « MicroPython (generic) » et dans la seconde (port) sélectionnez « Périphérique série USB (COM6) ». Le numéro après COM (dans notre exemple 6) sera probablement différent. Veillez simplement à bien choisir un périphérique série USB

Restez attentif à la console. En effet il peut déjà  y avoir des erreurs à ce moment-ci. La plus fréquente étant que Thonny ne trouve pas le pico, ce qui est causé soit par un mauvais choix de port (si vous avez choisi un bluetooth plutôt qu'un USB par exemple), soit par un mauvais branchement (débranchez et rebranchez les deux extrémité du câble).

:::note
*Assurez-vous bien qu'il n'y a pas de programme déjà ouvert et qu'il n'y ai pas d'autre programme sur le pico, une autre erreur possible est que le Pico est « busy », ce qui signifie qu'un programme tourne déjà dessus et qu'il n'est pas possible d'y exécuter un nouveau.*
:::

**Ecrire dans la console**

La fonction « print » permet d'écrire dans la console. Nous choisissons ici du texte, mais on peut imprimer des variables, des mesures etc.

Insistez sur l'importance de la syntaxe (bien écrire tous les caractères, respecter les majuscules, etc.)

Ecrivez donc maintenant une phrase dans la console à l'aide de la commande « print ».

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/Capture_dcran_2025-09-16_101910.png" alt="Commande print" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

Soyez déjà vigilant à la syntaxe. En effet la moindre différence peut empêcher ce programme pourtant très simple de fonctionner. Ecrire Print avec une majuscule par exemple ne fonctionne pas, oublier les guillemets non plus, etc.

Une fois le code écrit, appuyer sur le bouton exécuter, vous devrez alors choisir d'utiliser l'ordinateur ou la carte pour sauvegarder le programme. Pour pouvoir exécuter le programme sur la carte sans qu'elle soit branchée, il faut sauvegarder le programme sur cette dernière. Nous vous conseillons cependant de faire une copie sur l'ordinateur au cas où il y a un problème sur la carte.

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/Capture_dcran_2025-09-16_101934.png" alt="Sauvegarde du programme" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

*Exemple d'erreur :*

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/Capture_dcran_2025-09-16_102120.png" alt="Exemple d'erreur" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

Le message en rouge sur l'image indique qu'il y a une erreur sur le nom « Print » (Print avec une majuscule n'existe pas). Nous avons donc corrigé et relancé le code :

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/Capture_dcran_2025-09-16_102212.png" alt="Code corrigé" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

et le texte « Ceci par exemple » est bien ce que nous voulions.

**Utiliser les broches**

Vous allez maintenant allumer la Led intégrée au Pico. Pour ce faire vous aller devoir importer les fonctions liées aux Pins (broches en anglais) qui sont reprises dans une bibliothèque (library en anglais) qui est en résumé un module qui reprend des fonctions de bases du python de base, mais adaptées pour fonctionner sur micropython. Celle dont nous avons besoin est « Pin », qui se trouve elle-même dans la bibliothèque « machine ».

:::note
*Ils existent beaucoup de bibliothèques différentes imbriquées les unes dans les autres. Par exemple « time » regroupe les fonctions liées au temps, et dans cette librairie on retrouvera « sleep » qui est une fonction qui permet de faire « dormir » le programme. Nous y aurons recours plus tard.*
:::

Pour en revenir à la Led, importer « Pin » dans le programme :

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/Capture_dcran_2025-09-16_102339.png" alt="Import Pin" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

Une fois les fonctions liées aux pins importées, nous allons renommée notre Pin liée à la led. En effet la Led intégrée à la carte est reliée à une pin, qui porte le numéro 25 :

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/Capture_dcran_2025-09-16_102417.png" alt="Définition de la broche LED" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

Nous avons ici défini « led » comme étant la broche 25 en mode sortie ( OUT ). « led » est maintenant le nom associée à la pin 25, et nous pourrons dès lors utiliser « led » dans le code, plutôt que d'avoir à écrire « Pin(25, Pin.OUT) » à chaque fois, pour la contrôler.

:::note
*Une broche digitale (il existe différents types de broches mais nous en parlerons plus tard) peut être définie en entrée ou en sortie. Pour faire simple une broche en entrée va mesurer un courant entrant ( pour faire des mesures à l'aide de capteurs par exemple), tandis qu'une broche en sortie permet d'envoyer du courant (pour contrôler des éléments extérieurs, comme par exemple une Led dans notre cas).*
:::

Allumez maintenant la led :

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/Capture_dcran_2025-09-16_102512.png" alt="Allumer la LED" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

« led.on( ) » définit donc l'état de « led » sur allumé (on). Les broches de base, dites « digitales », ne peuvent être qu'allumées ( on) ou éteintes (off), c'est-à-dire que le courant électrique y passe ou non. On parle aussi respectivement d'état haut (high en anglais) ou bas (low en anglais).
Exécuter le programme pour allumer la led de la carte.

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/Capture_dcran_2025-09-16_102556.png" alt="LED allumée" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

Une fois la led allumée, elle ne s'éteindra pas tant qu'on ne lui aura pas ordonné (ou débranchée). Pour l'éteindre il suffit de relancer le programme mais en ayant changé « on » par « off ».

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/Capture_dcran_2025-09-16_102512_1.png" alt="Éteindre la LED" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

Nous allons maintenant alterner entre les 2 états, afin d'être certain que le programme fonctionne, car une fois la led éteinte on ne sait pas si le programme fonctionne ou si la carte n'est juste pas alimentée.

Nous allons pour nous aider utiliser la fonction « sleep », qu'il va falloir importer. Cette dernière sert à faire une pause dans le programme, par exemple dans notre cas pour attendre entre le moment ou la led s'allume et s'éteint.

:::note
*Attention « sleep » ne met le programme en pause, mais va plutôt ajouter un délai avant d'exécuter la commande qu'elle précède. Nous l'employons ici pour bien voir les alternances. Sans ce « sleep » il n'y aurait pas de délai entre les instructions et la led resterait théoriquement allumée 0 seconde.*
:::

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/Capture_dcran_2025-09-16_102722.png" alt="Alternance LED avec sleep" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

:::note
*Des données incluses dans les parenthèses d'une fonction comme ici s'appellent des arguments. L'argument de la fonction « sleep » dans la fenêtre ci-dessus est le temps, en l'occurrence 1 seconde.*
:::

Vous pouvez copier-coller le code ci-dessus et il fonctionnera tout de même. En effet le texte grisé le sera également dans thonny, également le texte en gris qui suit car il est précédé d'un # , c'est un commentaire. Tout ce qui suit ce symbole ne sera pas considéré comme du code, ce qui vous permet d'ajouter des notes à votre code. Pour arrêter de taper des commentaires il suffit de sauter à la ligne.

**Boucles**

Le code précèdent permet d'allumer la led 1 seconde avant de s'éteindre, mais nécessite de redémarrer le programme. Vous allez maintenant faire en sorte que le programme se répète indéfiniment une fois lancé.

Nous allons utiliser des boucles. Il y a plusieurs façon de faire une boucle, mais nous allons commencer par une boucle infinie utilisant « while » qui signifie « tant que ».

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/Capture_dcran_2025-09-16_102813.png" alt="Boucle while" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

While permet de répéter tout ce qui est indenté en-dessous de lui de se répéter tant que la condition associée est remplie. Plusieurs choses à soulever ici :

- Indenté signifie décaler. Dans l'exemple ci-dessus il y a 4 lignes indentées dans le « while ». Pour sortir du « while » il suffit d'arrêter d'indenter, et de commencer à écrire au même niveau ou plus à droite de notre while. Attention à bien mettre tout ce que vous voulez répéter au même niveau d'indentation (à la même distance)
- On emploie ici « while True ». « True » est en fait une condition qui est toujours remplie. Elle veut dire « vrai » en français, et la commande peut donc se traduire par « tant que c'est vrai ». « True » pourrait être remplacé par une condition toujours vraie, par exemple 1=1. On aurait alors « tant que 1=1 » alors... Et 1 est toujours égale à 1, la boucle va donc se répéter indéfiniment.

Dans le code ci-dessus on a également ajouté un sleep à la fin du code, sinon le code s'arrêterait théoriquement 0 seconde et nous n'aurions pas l'impression que la led s'éteigne.

De façon contre-intuitive il est plus simple de répéter indéfiniment une boucle qu'un nombre précis On pourrait éventuellement mettre plusieurs fois la séquence d'affiler, mais si on veut répéter 1000 fois une action par exemple, ca serait très long.

Nous allons à nouveau employer « while », mais au lieu d'utiliser « True », il va falloir utiliser une condition qui n'est pas toujours vrai et qui pourra changer. Pour simplifier les choses nous allons avoir recours à une variable.

Une variable est une donnée dont la valeur est susceptible de changer durant l'exécution du code. On peut par exemple imaginer que l'heure est une variable. Si je vous demande l'heure qu'il est, vous ne connaitrez pas spécialement la réponse sans regarder votre montre, mais pourtant vous savez ce dont je parle.

Attention à ne pas faire d'amalgame avec une variable mathématique. En programmation une variable a une valeur précise, on ne le connait pas spécialement à tout moment (en particulier dans des cas où sa valeur est aléatoire), mais elle est définie en amont, soit dans le code (comme dans notre cas), soit par des instruments de mesures (thermomètre, capteur de lumière etc.).

Dans notre cas on veut juste une sorte de compteur et allons simplement appeler notre variable i, mais vous pouvez l'appelez comme vous le souhaitez. Avant d'y avoir recours il faut définir ce dont il s'agit, et nous allons simplement lui donner une valeur numérique.

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/Capture_dcran_2025-09-16_102925.png" alt="Boucle avec variable" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

La logique est la suivante : la boucle se lance tant que i est inférieur à 5, nous lui donnons la valeur de zéro avant d'entrer la boucle, et à la fin de chaque boucle on augmente i de 1. « i = i +1 » remplit cette fonction. Au lancement du programme i = 0, par i = i + 1 , i sera égal à 0+1, soit 1. La deuxième fois que la boucle s'exécute i vaudra 1, par i = i +1, sa nouvelle valeur sera 1 +1 , soit 2, etc.

Ce processus s'appelle une « incrémentation ».

Le « print(i) » ne sert ici qu'à observer l'évolution de i. Notez qu'il n'y a cette fois pas de guillemets dans les parenthèses, car on ne veut pas juste écrire du texte mais la valeur d'une variable. Si on y ajoutait des parenthèses, il serait littéralement écrit « i » dans la console.

**Brancher une Led**

Nous allons maintenant gérer une Led extérieure. Le code sera le même a part pour le numéro de la broche utilisée. Il va par contre falloir faire le montage.

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/Capture_dcran_2025-09-16_103207.png" alt="Montage LED externe" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

Branchez une des broches GND (ground en anglais, il s'agit en quelque sorte du pole négatif comme sur une pile) à une des lignes. Sur cette même ligne branchez l'un des côtés d'une résistance, et à l'autre extrémité branchez la petite patte de la led (les leds ont des pôles, elles ne s'allument pas si elle sont branchées a l'envers). Enfin reliez la longue broche de la led à l'une des pins du Pico numérotée GP... (sur notre montage il s'agit de la GP21).

La résistance est un composant qui va en quelque sorte « freiner » le courant. Dans notre cas elle protège la led, qui brulerait si on la branchait directement à la carte.

:::note
*Vous pouvez ici faire un parallèle avec le cours de physique. Une led ne supporte pas plus d'un certain ampérage (qui dépend d'où elle vient mais on se trouve en général aux alentours de 15 mA. Le courant sortant du Pico étant de 3.3V vous pouvez calculez la résistance nécessaire avec la formule U = R.I .*
:::

Prenez n'importe quel code précédent et remplacez le numéro de la pin 25 par celle à laquelle votre led est branchée.

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/Capture_dcran_2025-09-16_103321.png" alt="Code LED externe" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

**Contrôler la led avec un bouton: les broches en entrée.**

Nous allons maintenant définir une seconde broche comme une entrée. Sur cette broche nous brancherons un bouton, et dépendant de s'il est enfoncé ou non la led s'allumera. On pourrait également simplement mettre un interrupteur quelque part dans le montage, mais ca ne ferait que couper le courant vers la led, ce qui ne présente aucun intérêt d'un point de vue programmation (cela revient plus ou moins à brancher ou débrancher un fil, si le circuit est ouvert, la led ne s'allumera pas).

Nous allons plutôt mesurer le courant arrivant sur une broche. Pour bien montrer que le bouton n'est pas un simple interrupteur nous allons allumer la led si le courant ne passe pas le bouton, et l'éteindre si un courant est mesurer.

Nous avons pour l'instant employé « ON » et « OFF » pour définir si la led est allumée ou éteinte. Pour mesurer un courant les termes sont différents, mais la logique est très similaire. Faire des mesures avec les broches digitales est très simples, mais n'offre que peu de possibilités. En effet elle ne distingue que si le courant passe ou non, si son état est « haut » ou « bas »

Quand on met la led sur « on » on met sa broche en état haut, et inversement, « off » correspond à un état bas. Quand on fait une lecture sur une broche on va prendre des décisions selon si le courant passe (état haut) ou si la broche ne capte rien (état bas). Un peu comme sur une prise électrique, ces états seront associées à des valeurs : 1 (pour haut) et 0 (pour bas). Cela correspond au symbole qui n'est en fait qu'un 1 imbriqué dans un 0.

Vous pouvez remplacer le « on » par « value(1) » et « off » par « value(0) » par exemple.

Le terme  « value » va correspondre à l'état de la broche. Pour mesurer si la valeur du bouton est en état haut par exemple, on va écrire « bouton.value == 1 ». Identifier la valeur lue par la broche ne suffit pas à y associer une action. Pour la compléter nous allons avoir recours aux conditions, qui commence en général par un « if » (« si » en français). Dans notre cas nous aurons « if bouton.value == 0 » , c'est-à-dire si la valeur lue par la broche bouton est 0 (qu'aucun courant ne passe), alors je ferai quelque chose. Ce quelque chose est tout ce qui est indenté dans le « if » :

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/Capture_dcran_2025-09-16_103513.png" alt="Contrôle LED avec bouton" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

Le « else » auquel nous avons recours peut être combiner avec un if, pour devenir « elif » auquel il faut ajouter une condition, et signifie « sinon si ». On peut alors avoir un premier « if », si sa condition n'est pas remplie alors on passera au « elif », et enfin si sa condition n'est pas remplie non plus on passera au « else ».

**Défis**

Avec les conditions, les boucles et les variables, vous avez une bonne base d'outils pour commencer à programmer.

Voici des exemples d'exercice pour pousser la réflexion plus loin si le temps le permet :

- Allumer une Led si un bouton est enfoncé, sinon en allumer une autre : *Il faut brancher une deuxième Led à la carte et s'inspirer du code avec le bouton.*
- Faire une chaine de led qui s'allume à tour de rôle et revienne au début : *Branchez au moins trois led pour rendre ça intéressant. Vous aurez besoin de if, elif et else, le tout dans une boucle. Vous pouvez également travailler avec une variables incorporée dans le numéro des pin mais c'est moins intuitif (le code est plus propre par contre).*

## Connecter et programmer un capteur
Nous allons dans cette partie voir comment se servir du capteur ultrasonore. Le programme n'est pas très long, et ne fait appel qu'à des notions déjà vues et des mathématiques.

Il faut également comprendre le principe de fonctionnement d'un sonar. Un sonar envoie un ultrason et calcul le temps entre l'émission de ce signal et la réception de son écho. Les capteurs que nous utilisons fonctionnent exactement sur ce principe.

Sur l'image de droite on observe que le capteur a 4 pins. Le VCC se connectera à la borne positive, et le GND à la masse, afin d'alimenter le module.

Ce sont les bornes « trig » et « echo » qui vont nous intéresser, et que nous allons programmer.

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/Capture_dcran_2025-09-16_104144.png" alt="Capteur ultrasonore" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

« Trig est la broche qui contrôle l'envoi du signal, et « echo » celle qui mesure le retour. Commencez donc simplement par  identifier les broches dans le programme (un peu comme fait précédemment avec les led et le bouton). « Trig » sera en sortie, car il envoie le signal, et « echo » en entrée, car il recevra le signal. Vous pouvez bien sur brancher le capteur, via une breadboard, au Pico, en veillant à ce que les broches sur lesquels vous branchez le capteur correspondent à celles du Pico.

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/Capture_dcran_2025-09-16_104222.png" alt="Configuration des broches capteur" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

:::note
*Pull down est un nom donné à un système qui permet de lire clairement un signal électrique. On ne va pas rentrer dans les détails mais il fait un rapport entre  la tension aux bornes de plusieurs résistances pour savoir si celle du système change bien.*
:::

La séquence ci-dessus définit tout ce dont vous aurez besoin pour utiliser le capteur avec le pico. Reste à faire les branchements :

Le VCC du capteur est branché au « VBUS » du pico. Cette broche correspond au courant entrant par l'alimentation USB du pico. En effet une prise USB délivre 5V, et le capteur ne fonctionne pas en 3v3.

Les annotations à côté des broches sont décalées à cause des trous mais sur l'image trig est bien branchée à la Pin 16 et echo à la 17.
D'autre part, essayez tant que possible de passer par la breadboard, plus tard dans le projet vous aurez potentiellement plusieurs éléments à brancher sur une même pin (principalement pour l'alimentation) et brancher les broches GND et VBUS sur les colonnes + et -- du breadboard permettent d'alimenter plusieurs composants en les branchant simplement à ces dernières.

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/Capture_dcran_2025-09-16_104355.png" alt="Branchements capteur" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

Revenons au code. La première chose à faire est d'allumer le « trig », mais vu le mode de fonctionnement du capteur on ne peut pas juste l'allumer puis observer « echo ». On va devoir le faire s'allumer pendant un court lapse de temps. Ensuite nous allons observer ce qu'il se passe sur « echo », avec « print ».

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/Capture_dcran_2025-09-16_104440.png" alt="Signal trig" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

Le petit programme ci-dessus permet donc de générer un signal de 2 us. Il faut maintenant savoir qu'en faire. Il faut maintenant trouver que faire avec ce signal. Le but est donc de calculer le temps entre le moment de l'émission du signal, et le moment où il reviendra.

Il n'existe pas de fonction toute faite pour ça. Il va falloir faire appel à des variables et à une fonction qui compte le temps.

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/Capture_dcran_2025-09-16_104520.png" alt="Calcul du temps" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

time.ticks_us tourne en quelque sorte en permanence dans votre programme (il s'écoule en micro secondes). Ici on définit donc start comme le moment ou le signal est envoyé (disons par exemple que time.ticks est arrivé à 1703, au hasard), puis on définit un end quand le signal reviens (par exemple, time.ticks se serait écoulé jusqu'à 1707). Dans notre exemple cela signifierait que le signal a mis 4 us pour revenir (end -- start).
Maintenant que le programme peut calculer le temps, il faut arriver à calculer distance sur base de cette dernière. Pour rappel, le capteur est ultrasonore, il utilise des sons, et la vitesse du son est connue. Attention aussi à bien prendre en compte le fait que le signal fait un aller-retour (il faut donc diviser le résultat par deux quelque part).
La vitesse du son dans l'air à 20°C est d'à peu près 343 m/s. time.ticks_us fonctionne en microsecondes, et on va mesurer la distance en centimètre avec le robot. 343 m/s devient 34300 cm / 1.000.000 us. On peut directement diviser le numérateur par 2 (comme le signal fait un aller-retour), et pour calculer la distance on va multiplier « duration » par ce nombre : distance = duration * 17165/1000000

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/image.png" alt="Calcul de la distance" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

Le programme ci-dessus permet donc d'afficher la distance mesurée dans la console. Testez le en déplaçant un objet devant lui et estimez si les distances sont correctes (vous pouvez déplacer le capteur mais il est plus sûr de le laisser posé, pour éviter les faux contacts).

## Programmation des moteurs
Le but principal du robot étant de se déplacer, nous devons également en programmer les moteurs. Faire avancer un moteur n'est pas très compliqué (ceux que nous utilisons en tout cas). En effet il suffit a priori de brancher le moteur à une source de courant et il se met en marche. Cependant afin de pouvoir faire changer notre robot de direction nous allons devoir inverser le sens de rotation du courant dans le moteur, pour en changer le sens de rotation (si un moteur va en avant et l'autre vers l'arrière, le robot tournera sur lui-même) Le principe n'est pas très compliqué non plus, il suffirait d'un interrupteur ou de changer les connections par exemple, mais ce n'est pas aussi simple si on travaille avec un microcontrôleur.

En effet on ne peut pas simplement changer l'état de 2 broches auxquelles serait branché un moteur, car une de ses bornes doit être connectée à la masse (au « moins »).

Pour pouvoir contrôler le sens du courant avec le pico nous allons avoir recours à un petit module, qui premièrement permet d'inverser la polarité sur les broches, mais plus important encore, à alimenter les moteurs par une autre source de courant (les moteurs consomment plus de courant que le pico ne peut en fournir ce qui risque de le faire griller). Il faudra donc être particulièrement vigilant au branchement ici.

Branchez une source d'alimentation extérieure (un transfo ou une pile 9V) sur la breadboard. !! A NE PAS LA BRANCHER SUR LA PYBOARD !! Les masses (les pôles négatifs) seront mis en commun mais pas les broches positives. La seule chose qui doit être branchée au positif de la source extérieure de courant est le module DRV8833 qui contrôle les moteurs (la borne + de la pile sera connectée au VCC du DRV).

Il faut ensuite brancher un fil entre les broches qui contrôlent le moteur sur le Pico (dans notre exemple les broches 18 et 19) et les broches IN1 et IN2 du DRV. De l'autre côté du module branchez un câble entre les broches du moteur et les pin OUT1 et OUT2. Sur l'image au-dessus par exemple, une des broches du moteur est reliées à OUT2, qui est reliées dans le DRV à IN2, et IN2 est reliée à la Pin19 du Pico (le trajet vert), le trajet jaune relie l'autre borne à OUT1, relié à IN1, relié à la Pin18.

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/image_1.png" alt="Schéma branchement moteur" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

Concernant le code, rien de bien compliqué. Comme pour les leds il faut définir les pins que nous allons employer. Ici nous allons définir laquelle est positive et laquelle est négative. Pour chaque moteur il faut donc 2 pin.

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/image_2.png" alt="Code moteur simple" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

En exécutant le programme ci-dessus avec les bons branchements, votre moteur devrait se mettre en marche. Pour inverser son sens de rotation, inversez les valeurs de moteur1 et moteur2.

Notre robot aura 2 moteurs. Pour contrôler un second moteur il suffit donc de procéder de la même façon mais en utilisant les broches vides. Nous avons par exemple utilisé les Pin 20 et 21 du pico, en les reliant aux broches IN3 et IN4 du DRV, et de l'autre côté les broches OUT3 et OUT4 aux broches du second moteur. Veillez simplement à bien faire correspondre les IN et les OUT.

Le code pour faire avancer les 2 moteurs ressemblera donc à ceci :

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/image_3.png" alt="Code deux moteurs" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

Si vous avez besoin de changer les sens de rotation ou d'arrêter les moteurs en cours de programme (ce qui sera notre cas pour le robot), vous pouvez créer des fonctions pour éviter de devoir retaper l'état de chaque broche de chaque moteur. Par exemple :

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/image_4.png" alt="Fonctions moteur" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

Vous pouvez définir une fonction avancer, reculer et stop pour chaque moteur. A priori nous aurons déjà monté le robot, ce qui rendra les tests plus parlants. Maintenant qu'on peut contrôler indépendamment chaque moteur, il faut comprendre comment contrôler le robot avec les 2 en même temps. Par exemple pour avancer vous allez évidemment faire avancer les 2 moteurs vers l'avant, pour reculer les 2 moteurs vers l'arrière, et pour s'arrêter les 2 moteurs à l'arrêt. Mais pour tourner il va falloir les faire tourner dans des sens inverse (le moteur droit vers l'avant, le gauche vers l'arrière pour tourner vers la gauche, et inversement le moteur droit en arrière et le gauche en avant pour faire pivoter le robot vers la droite). C'est dans un cas comme celui-ci qu'il est intéressant de définir des fonctions. Vous pouvez créer une petite séquence pour tester chacun des mouvements possibles pour le robots. Par exemple :

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/image_5.png" alt="Séquence de test mouvements" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

## Lier le tout

Nous allons maintenant combiner les codes des moteurs et du capteur :

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/image_6.png" alt="Code combiné - définitions" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

Le code ci-dessus définit tout ce dont on a besoin pour le programme. Sous celui-ci, dans thonny, le code ci-dessous nous donne le début du programme, qui consiste pour l'instant à faire avancer le robot si la distance est supérieure à 15 cm.

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/image_7.png" alt="Code combiné - programme principal" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

On ne donnera pas le programme tout fait aux jeunes, le but de la séance étant plutôt de les faire réfléchir par eux-mêmes à comment combiner le capteur et les moteurs.
La suite du programme s'établira un peu par expérimentation. Par essais erreur et en modifiant le code petit à petit on se rend compte qu'il faut faire reculer le robot avant de le faire tourner pour qu'il puisse pivoter correctement.
Voici un exemples de code qui fonctionne (à combiner avec la partie en haut à gauche, attention aux indentations) :

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/image_8.png" alt="Code final robot" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

**Enfin, ci-dessous un schema des connections :**

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/image_9.png" alt="Schéma des connections" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

Le driver des moteurs est orienté comme suit (le coin rouge n'existe pas réellement, il ne sert que de repère sur les schémas):

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/image_10.png" alt="Orientation du driver DRV8833" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

<img src="/img/ressources/jeditrack/mini-projet-2-capteurs/Capture_dcran_2025-09-16_111912.png" alt="Robot finalisé" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

### Checklist pour les animateurs

#### Avant l'atelier- [ ]  **Matériel électronique** : Vérifier la présence de tous les composants (Pico, capteurs, moteurs, DRV8833)
- [ ]  **Alimentation** : Tester les piles 4.5V et 9V, prévoir des rechanges
- [ ]  **Ordinateurs** : Installer Thonny sur tous les postes
- [ ]  **Fichiers MicroPython** : Télécharger les fichiers UF2 sur clé USB ou réseau local
- [ ]  **Breadboards** : Une par binôme + quelques extras
- [ ]  **Câbles** : Compter 20 câbles dupont par groupe minimum
- [ ]  **Outils** : Préparer pistolets à colle (chauffés), tournevis, pinces
- [ ]  **Documentation** : Imprimer les schémas de branchement en couleur
#### Pendant l'atelier- [ ]  **Explication Pico** : Présenter les broches principales (GND, VBUS, GP)
- [ ]  **Installation MicroPython** : Guider le processus BOOTSEL
- [ ]  **Configuration Thonny** : Vérifier que chaque poste détecte le Pico
- [ ]  **Premier programme** : LED clignotante intégrée
- [ ]  **Validation** : S'assurer que tous les groupes ont réussi
- [ ]  **LED externe** : Superviser les branchements avec résistance
- [ ]  **Bouton poussoir** : Expliquer les entrées/sorties
- [ ]  **Défis progressifs** : Proposer les exercices adaptés au niveau
- [ ]  **Debugging** : Aider sur les erreurs de syntaxe courante
- [ ]  **Principe sonar** : Expliquer avec des exemples concrets
- [ ]  **Branchement HC-SR04** : Vérifier VCC sur VBUS (5V)
- [ ]  **Code mesure** : Développer ensemble la fonction
- [ ]  **Tests distances** : Vérifier avec une règle
- [ ]  **Sécurité alimentation** : Insister sur la séparation des sources
- [ ]  **DRV8833** : Expliquer le rôle du driver
- [ ]  **Vérification connexions** : Contrôler avant mise sous tension
- [ ]  **Test individuel** : Chaque moteur séparément
- [ ]  **Mouvements combinés** : Avancer, reculer, tourner
- [ ]  **Intégration composants** : Organiser le câblage proprement
- [ ]  **Fusion du code** : Combiner capteur et moteurs
- [ ]  **Débogage** : Résoudre les problèmes ensemble
- [ ]  **Personnalisation** : Encourager les améliorations
#### Clôture de l'atelier- [ ]  **Parcours d'obstacles** : Organiser une démonstration/compétition
- [ ]  **Présentation des projets** : Chaque groupe explique ses choix
- [ ]  **Sauvegarde codes** : Sur clé USB ou cloud
- [ ]  **Photo souvenir** : Avec les robots créés
- [ ]  **Rangement participatif** : Trier et ranger le matériel
- [ ]  **Feedback** : Recueillir les impressions à chaud
- [ ]  **Suite** : Proposer des ressources pour continuer à la maison

:::info[Idée d'atelier complémentaire - "Robot Explorateur" - Cartographier son environnement]
Une fois le robot de base maîtrisé, proposez ce défi sur 2-3 séances supplémentaires :
**Objectif :** Transformer le robot en explorateur capable de cartographier une pièce et mémoriser les obstacles rencontrés.
**Nouvelles compétences :**
- Ajouter un servo-moteur pour faire pivoter le capteur ultrasonique (balayage à 180°)
- Utiliser les listes Python pour stocker les mesures
- Créer une carte simple des obstacles détectés
- Implémenter un mode "patrouille" où le robot suit un parcours défini

**Extensions possibles :**
- **Module Bluetooth** : Contrôler le robot depuis un smartphone
- **Capteur de ligne** : Faire suivre un circuit au robot
- **Buzzer** : Ajouter des alertes sonores selon les situations
- **LED RGB** : Codes couleur pour l'état du robot
- **Capteur de luminosité** : Robot qui cherche ou fuit la lumière

**Organisation suggérée :**
1. **Séance 1** : Ajout du servo et programmation du balayage
2. **Séance 2** : Stockage des données et création de patterns de déplacement
3. **Séance 3** : Personnalisation et course d'exploration

Cette extension permet d'approfondir les notions de programmation (tableaux, fonctions complexes) tout en gardant l'aspect ludique et concret du projet robotique.
:::

## Aller plus loin - Quelques vidéos et tutoriels en ligne
https://www.raspberrypi.com/products/raspberry-pi-pico/

https://www.raspberrypi.com/documentation/microcontrollers/pico-series.html

https://thonny.org/

https://www.youtube.com/watch?v=3PxGN1RHmIA&pp=ygUgcm9ib3QgYXV0b25vbWUgcmFzcGJlcnJpIHBpIHBpY28%3D

https://www.youtube.com/watch?v=G1WKbFjHf4s&pp=ugMICgJmchABGAHKBSByb2JvdCBhdXRvbm9tZSByYXNwYmVycmkgcGkgcGljbw%3D%3D

https://www.youtube.com/playlist?list=PLcd1Q0-YkB1e2ZwYM7aseRB8mAdGoKeJ1

https://www.youtube.com/watch?v=JczUq70Semc&pp=ygUNdGhvbm55IHB5dGhvbg%3D%3D

https://www.youtube.com/watch?v=svAcw0n2LaQ&pp=ygUNdGhvbm55IHB5dGhvbg%3D%3D

---

*Cette fiche fait partie du projet [JediTrack](/projets/jeditrack), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

---
id: raspberry-pi
title: "Introduction au Raspberry Pi"
sidebar_label: "Raspberry Pi"
sidebar_position: 2
---

# Introduction au Raspberry Pi

Le Raspberry Pi est un mini-ordinateur de la taille d'une carte de crédit, développé au Royaume-Uni par la fondation Raspberry Pi. Lancé en 2012, son principal objectif était de promouvoir l'enseignement des sciences informatiques dans les écoles. Cependant, grâce à son faible coût, sa flexibilité et sa facilité d'utilisation, il a rapidement trouvé une place dans les projets de bricolage (DIY) et les applications professionnelles.

Le Raspberry Pi a été conçu par Eben Upton, un ancien professeur à l'Université de Cambridge, en réponse à la baisse du niveau de compétences en informatique qu'il observait chez les étudiants. Il voulait créer un dispositif abordable qui pourrait encourager les jeunes à apprendre la programmation. Depuis son lancement, plusieurs versions du Raspberry Pi ont été introduites, chacune apportant des améliorations en termes de performances, de mémoire et de connectivité.

## Caractéristiques techniques

Le Raspberry Pi est communément équipé d'un processeur ARM, d'un GPU, de RAM, de ports USB, d'un port Ethernet, de ports GPIO (General Purpose Input/Output) et de diverses interfaces de communication. Il prend en charge le Wi-Fi et le Bluetooth, et peut fonctionner avec une large gamme de systèmes d'exploitation, le plus couramment utilisé étant le système d'exploitation Linux basé sur Debian, appelé Raspbian. Il existe aujourd'hui plusieurs modèles de Raspberry Pi dont les prix varient généralement de 5 EUR pour le Raspberry Pi Zero à environ 75 EUR pour le Raspberry Pi 4 Model B avec 8 Go de RAM. Les principaux modèles sont les suivants :

### Raspberry Pi 1 Model B+

C'est un modèle de base, idéal pour les débutants qui souhaitent se lancer dans l'informatique et la programmation.

![Raspberry Pi 1 Model B+](/img/ressources/jeditrack/borne-arcade/Introduction_au_Rasp__Untitled.png)

### Raspberry Pi 4 Model B

C'est le modèle le plus puissant et le plus récent. Il offre des performances supérieures, ce qui le rend idéal pour des projets plus complexes. Il est disponible avec différentes quantités de mémoire, selon vos besoins.

:::info[Conseil pour le projet]
Probablement le choix idéal pour le projet. Prix : Environ 40 EUR pour 1 GB de mémoire vive.
:::

![Raspberry Pi 4 Model B](/img/ressources/jeditrack/borne-arcade/Introduction_au_Rasp__Untitled_1.png)

### Raspberry Pi 2 Model B

Un peu plus puissant que le modèle précédent, ce modèle peut gérer des tâches plus exigeantes et est parfait pour commencer à explorer des projets de bricolage plus avancés.

![Raspberry Pi 2 Model B](/img/ressources/jeditrack/borne-arcade/Introduction_au_Rasp__Untitled_2.png)

### Raspberry Pi 5 Model B

Le Raspberry Pi 5 offre jusqu'à trois fois plus de performances que la génération précédente. Il propose des variantes de RAM allant jusqu'à 8 Go pour une expérience plus fluide et rapide. Parmi ses nouvelles fonctionnalités, on trouve un bouton ON/OFF, un port PCIe 2.0, et un connecteur RTC intégré. Sa connectique a été entièrement repensée avec un port Micro-SD haute vitesse pour l'OS.

![Raspberry Pi 5 Model B](/img/ressources/jeditrack/borne-arcade/Introduction_au_Rasp__Untitled_3.png)

### Raspberry Pi Zero W

Ces modèles sont plus petits et moins coûteux, mais restent suffisamment puissants pour de nombreux projets. Le Zero W dispose également d'une connexion Wi-Fi et Bluetooth.

![Raspberry Pi Zero W](/img/ressources/jeditrack/borne-arcade/Introduction_au_Rasp__Untitled_4.png)

### Raspberry Pi 400

Le Raspberry Pi 400 est une version modernisée de l'ordinateur intégré dans un clavier, rappelant les premiers ordinateurs domestiques. Il est basé sur la technologie du Raspberry Pi 4, mais avec un CPU plus rapide et une meilleure dissipation thermique. Il est parfait pour une utilisation en tant qu'ordinateur de bureau économique ou station de travail pour l'apprentissage de la programmation.

![Raspberry Pi 400](/img/ressources/jeditrack/borne-arcade/Introduction_au_Rasp__Untitled_5.png)

### Raspberry Pi 3 Model B

Ce modèle est particulièrement intéressant car il dispose d'une connexion Wi-Fi et Bluetooth intégrée, ce qui facilite la connexion à Internet et à d'autres appareils.

![Raspberry Pi 3 Model B](/img/ressources/jeditrack/borne-arcade/Introduction_au_Rasp__Untitled_6.png)

### Raspberry Pi Pico

C'est la première incursion de la Fondation Raspberry Pi dans les microcontrôleurs. Il est basé sur le RP2040, une puce conçue par la Fondation elle-même. Le Pico est une petite carte avec une grande flexibilité - il peut être programmé en C et MicroPython, ce qui le rend parfait pour les projets embarqués et les applications en temps réel.

![Raspberry Pi Pico](/img/ressources/jeditrack/borne-arcade/Introduction_au_Rasp__Untitled_7.png)

Il est également possible d'étendre les capacités du Raspberry Pi en y joignant une alimentation autonome, des cartes SD pour plus de stockage, des boîtiers de protection, des écrans, des caméras...

## Usages

Le Raspberry Pi est très apprécié pour sa polyvalence, sa communauté active, et ses vastes ressources éducatives, ce qui le rend adapté à une gamme incroyablement large d'applications, des plus basiques aux plus avancées :

- **Éducation en Informatique** : Le Raspberry Pi a été conçu initialement pour faciliter l'enseignement de l'informatique dans les écoles. Grâce à sa compatibilité avec des langages de programmation comme Python, Scratch, et HTML/CSS, il sert de plateforme idéale pour initier les élèves à la programmation. Par exemple, les enseignants peuvent utiliser le Raspberry Pi pour créer des exercices pratiques où les élèves développent de petites applications ou jeux, apprennent à manipuler des bases de données ou à créer des pages web. L'objectif est de rendre l'apprentissage de l'informatique accessible et engageant, en fournissant une expérience pratique qui complète les théories enseignées.
- **Projets DIY :** Dans le domaine du bricolage technologique, le Raspberry Pi excelle en permettant aux amateurs de technologie de réaliser une multitude de projets personnalisés. Par exemple, un maker pourrait utiliser le Raspberry Pi pour construire une station météo connectée qui mesure et enregistre les conditions climatiques en temps réel, ou un système de surveillance domestique avec des caméras IP pour la sécurité de la maison. Ces projets permettent non seulement de résoudre des problèmes pratiques de manière créative mais aussi d'apprendre et d'expérimenter avec l'électronique et la programmation.
- **Jeux Rétro** : Le Raspberry Pi est populaire parmi les amateurs de jeux rétro pour sa capacité à émuler des consoles de jeux anciennes. Les utilisateurs peuvent revivre les expériences de jeu de leur jeunesse en jouant à des jeux de consoles telles que la NES, la SNES, ou la Sega Genesis. Ce retour nostalgique est non seulement un passe-temps amusant mais aussi un moyen de préserver et de partager l'histoire du jeu vidéo.
- **Serveurs Domestiques** : Le Raspberry Pi est également très utilisé comme serveur domestique en raison de sa faible consommation d'énergie et de sa capacité à exécuter diverses applications serveur. Les utilisateurs peuvent configurer des serveurs média avec des logiciels comme Plex ou Kodi pour streamer des vidéos et de la musique dans toute la maison, ou mettre en place un serveur de fichiers pour centraliser le stockage et l'accès aux documents. Cette utilisation du Raspberry Pi répond au désir de personnaliser et de contrôler les environnements numériques domestiques sans dépendre de services externes potentiellement coûteux.
- **Apprentissage et utilisation de Linux** : Le Raspberry Pi est une excellente plateforme pour ceux qui souhaitent explorer les systèmes d'exploitation Linux, offrant une expérience riche sans le coût élevé associé à d'autres matériel. Les utilisateurs peuvent installer une variété de distributions Linux, se familiariser avec les commandes Unix, et apprendre à gérer un système d'exploitation complet. Cela est particulièrement précieux pour les étudiants en informatique et les professionnels IT qui cherchent à élargir leurs compétences techniques.
- **Robotique** : Le Raspberry Pi sert de cerveau à divers projets de robotique, des robots éducatifs aux systèmes automatisés plus complexes. Grâce à ses ports GPIO, les utilisateurs peuvent connecter des moteurs, des capteurs et d'autres composants pour construire des robots capables de réaliser des tâches spécifiques, comme naviguer dans un labyrinthe ou suivre une ligne. Cette application stimule non seulement l'intérêt pour la robotique et l'ingénierie mais encourage également la résolution de problèmes complexes et la pensée créative.
- **Systèmes Embarqués et IoT (Internet des Objets)** : Le Raspberry Pi est souvent au coeur de projets d'Internet des Objets, permettant la création de systèmes intelligents et connectés. Par exemple, il peut être utilisé pour développer un système de gestion intelligente de la maison qui contrôle l'éclairage, la température, et la sécurité à distance. Ce type de projet répond à un besoin croissant de solutions technologiques qui améliorent la qualité de vie tout en optimisant la consommation d'énergie.
- **Affichage Numérique et Signalisation** : Enfin, le Raspberry Pi est couramment utilisé dans des applications d'affichage numérique pour afficher des informations dynamiques dans des lieux publics ou commerciaux. Que ce soit pour afficher des menus dans un restaurant, des horaires dans une gare, ou des promotions dans un magasin, le Raspberry Pi offre une solution économique et facilement configurable pour gérer divers contenus d'affichage.

---

*Cette page fait partie de la documentation [Borne d'arcade](/ressources/jeditrack/borne-arcade/) du projet [JediTrack](/projets/jeditrack).*

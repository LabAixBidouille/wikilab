---
id: borne-arcade
title: "Construire une borne d'arcade"
sidebar_label: "Borne d'arcade"
sidebar_position: 15
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="5" y="2" width="14" height="20" rx="1.2" fill="#1198f0" opacity="0.1"/><rect x="6" y="4" width="12" height="7" rx="0.6" fill="#1198f0" opacity="0.25"/><rect x="7.5" y="5.2" width="9" height="4.6" rx="0.3" fill="#1198f0"/><rect x="6" y="12" width="12" height="3.5" rx="0.4" fill="#1198f0" opacity="0.25"/><circle cx="9" cy="13.7" r="0.6" fill="#1198f0"/><circle cx="11" cy="13.7" r="0.6" fill="#1198f0"/><circle cx="13" cy="13.7" r="0.6" fill="#1198f0"/><circle cx="15" cy="13.7" r="0.6" fill="#1198f0"/><rect x="11.5" y="16.5" width="1" height="3" fill="#1198f0"/><rect x="9" y="19" width="6" height="1.2" rx="0.3" fill="#1198f0"/></svg> Construire une borne d'arcade

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Ingénierie</span>
  <span className="badge badge--info">Raspberry Pi</span>
  <span className="badge badge--info">Découpe laser</span>
  <span className="badge badge--info">Impression 3D</span>
  <span className="badge badge--warning">Recalbox</span>
  <span className="badge badge--warning">Onshape</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| JediTrack | Plusieurs séances | Avancé | 12 - 18 ans |

## Matériel

- Raspberry Pi (modèle 3, 3B+, 4 ou 400) + carte microSD ≥ 16 Go
- Écran (CRT recyclé ou LCD) + câble HDMI
- Joysticks et boutons d'arcade (kit 2 joueurs) + interface i-Pac
- Haut-parleurs + amplificateur audio
- Panneaux MDF 18 mm (≈ 200 EUR chez Leroy Merlin)
- T-molding, vinyle adhésif ou peinture pour finitions
- Outillage : scie sauteuse, perceuse, ponceuse, fer à souder

</div>

<img src="/img/ressources/jeditrack/borne-arcade/icone.png" alt="Construire une borne d'arcade" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

Cette fiche regroupe l'ensemble du parcours pour concevoir et fabriquer une borne d'arcade, depuis l'histoire de l'objet jusqu'à l'assemblage final. Elle s'adresse aux animateurs et éducateurs qui souhaitent mener un projet de fabrication ambitieux avec des jeunes, en combinant menuiserie, électronique, informatique et personnalisation.

## Histoire et culture des bornes d'arcade

Une borne d'arcade est un dispositif autonome qui permet de jouer à des jeux vidéo. Elle est généralement équipée d'un écran, d'un système de contrôle (joysticks et boutons) et d'une unité centrale qui exécute le jeu. Les bornes peuvent varier en taille et en forme, mais toutes partagent ces composantes de base.

![Borne d'arcade](/img/ressources/jeditrack/borne-arcade/Petit_historique_des__photo-1511882150382-421056c89033.avif)

- **Les débuts (années 1970)** : La naissance des bornes d'arcade remonte aux années 1970, période à laquelle les jeux vidéo ont commencé à se populariser. Le lancement de Pong par Atari en 1972 marque le début de l'ère des jeux vidéo en arcade. Des titres comme Space Invaders (1978) et Asteroids (1979) ont propulsé les arcades dans la sphère publique, les transformant en lieux de rencontre sociaux. Ces machines étaient fréquemment installées dans des bars, des salles d'arcade ou des centres commerciaux, offrant un lieu de rassemblement pour la jeunesse. Les joueurs passaient beaucoup de temps à maîtriser les jeux, à battre des records et à observer les autres pour apprendre de nouvelles stratégies.
- **L'Âge d'Or (fin des années 1970 - début des années 1980)** : Cette période a vu une explosion de la créativité avec des jeux comme Pac-Man (1980) et Donkey Kong (1981), qui introduisirent des personnages et des narrations complexes. L'amélioration des graphismes, de l'audio et de la complexité des jeux a enrichi l'expérience utilisateur.
- **Déclin et transition (fin des années 1980 - années 1990)** : L'avènement des consoles de jeu domestiques comme la Nintendo Entertainment System a commencé à éroder la popularité des arcades. Malgré la concurrence, les bornes d'arcade ont continué à innover avec des technologies comme le double écran (PlayChoice-10) et les graphismes 3D (SEGA Model 1).
- **Résurgence et nostalgie (années 2000 à aujourd'hui)** : Dans les années 2000, des jeux comme Dance Dance Revolution et Street Fighter ont maintenu un intérêt pour les arcades. L'intérêt nostalgique pour les jeux rétro a stimulé une nouvelle vague de lieux d'arcade, souvent combinés avec des bars. L'engouement pour le "Do It Yourself" a également revitalisé l'intérêt pour les bornes d'arcade, avec des communautés en ligne partageant des plans et des logiciels pour construire et personnaliser des bornes à la maison.

La borne d'arcade continue d'évoluer, s'adaptant aux nouvelles technologies tout en conservant un lien sentimental avec son passé glorieux.

### Jeux d'arcade emblématiques

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '1rem'}}>

<figure style={{margin: 0, flex: '1 1 220px'}}>
<img src="/img/ressources/jeditrack/borne-arcade/Pac-Man__Untitled.png" alt="Pac-Man" />
<figcaption style={{margin: 0}}><strong>Pac-Man</strong> — Tōru Iwatani / Namco — 22 mai 1980. Manger les pac-gommes du labyrinthe en échappant aux fantômes.</figcaption>
</figure>

<figure style={{margin: 0, flex: '1 1 220px'}}>
<img src="/img/ressources/jeditrack/borne-arcade/Space_Invaders__Untitled.png" alt="Space Invaders" />
<figcaption style={{margin: 0}}><strong>Space Invaders</strong> — Tomohiro Nishikado / Taito — 1<sup>er</sup> avril 1978. Initiateur du genre shoot 'em up et du concept de scores élevés.</figcaption>
</figure>

<figure style={{margin: 0, flex: '1 1 220px'}}>
<img src="/img/ressources/jeditrack/borne-arcade/Tetris__Untitled.png" alt="Tetris" />
<figcaption style={{margin: 0}}><strong>Tetris</strong> — Alekseï Pajitnov / Sega — 1<sup>er</sup> décembre 1988. Des blocs qui tombent à une vitesse croissante : simple à comprendre, difficile à maîtriser.</figcaption>
</figure>

<figure style={{margin: 0, flex: '1 1 220px'}}>
<img src="/img/ressources/jeditrack/borne-arcade/Donkey_Kong__Untitled.png" alt="Donkey Kong" />
<figcaption style={{margin: 0}}><strong>Donkey Kong</strong> — Shigeru Miyamoto et Gunpei Yokoi / Nintendo — 9 juillet 1981. Premier jeu de Miyamoto, qui introduit Jumpman (futur Mario).</figcaption>
</figure>

<figure style={{margin: 0, flex: '1 1 220px'}}>
<img src="/img/ressources/jeditrack/borne-arcade/Street_Fighter_II__Untitled.png" alt="Street Fighter II" />
<figcaption style={{margin: 0}}><strong>Street Fighter II</strong> — Yoshiki Okamoto / Capcom — 6 février 1991. A popularisé le genre du jeu de combat avec des mécaniques toujours d'actualité.</figcaption>
</figure>

<figure style={{margin: 0, flex: '1 1 220px'}}>
<img src="/img/ressources/jeditrack/borne-arcade/Mortal_Kombat__Untitled.png" alt="Mortal Kombat" />
<figcaption style={{margin: 0}}><strong>Mortal Kombat</strong> — Ed Boon et John Tobias / Midway Games — 8 octobre 1992. Connu pour sa violence graphique et ses fameuses "fatalités".</figcaption>
</figure>

<figure style={{margin: 0, flex: '1 1 220px'}}>
<img src="/img/ressources/jeditrack/borne-arcade/Tekken__Untitled.png" alt="Tekken" />
<figcaption style={{margin: 0}}><strong>Tekken</strong> — Seiichi Ishii / Namco — 9 décembre 1994. Série de combat célèbre pour son gameplay complexe et ses graphismes impressionnants.</figcaption>
</figure>

<figure style={{margin: 0, flex: '1 1 220px'}}>
<img src="/img/ressources/jeditrack/borne-arcade/Dance_Dance_Revoluti__Untitled.png" alt="Dance Dance Revolution" />
<figcaption style={{margin: 0}}><strong>Dance Dance Revolution</strong> — Konami — 18 novembre 1998. Incontournable des salles d'arcade, il a popularisé le genre des jeux de rythme.</figcaption>
</figure>

</div>

## Le Raspberry Pi : cœur du système

Le Raspberry Pi est un mini-ordinateur de la taille d'une carte de crédit, développé au Royaume-Uni par la fondation Raspberry Pi. Lancé en 2012, son principal objectif était de promouvoir l'enseignement des sciences informatiques dans les écoles. Grâce à son faible coût, sa flexibilité et sa facilité d'utilisation, il a rapidement trouvé une place dans les projets de bricolage (DIY) et les applications professionnelles.

Il a été conçu par Eben Upton, ancien professeur à l'Université de Cambridge, en réponse à la baisse du niveau de compétences en informatique qu'il observait chez les étudiants.

### Caractéristiques techniques

Le Raspberry Pi est équipé d'un processeur ARM, d'un GPU, de RAM, de ports USB, d'un port Ethernet, de ports GPIO et de diverses interfaces de communication. Il prend en charge le Wi-Fi et le Bluetooth, et fonctionne avec une large gamme de systèmes d'exploitation, le plus utilisé étant Raspbian (Linux). Les prix varient de 5 EUR pour le Raspberry Pi Zero à environ 75 EUR pour le Raspberry Pi 4 Model B avec 8 Go de RAM.

### Modèles principaux

- **Raspberry Pi 1 Model B+** : modèle de base, idéal pour les débutants en informatique et programmation.
- **Raspberry Pi 4 Model B** : le modèle le plus puissant et le plus récent, idéal pour des projets complexes. Disponible avec différentes quantités de mémoire.
- **Raspberry Pi 2 Model B** : un peu plus puissant que le 1, parfait pour explorer des projets de bricolage plus avancés.
- **Raspberry Pi 5 Model B** : jusqu'à trois fois plus de performances que la génération précédente, jusqu'à 8 Go de RAM, bouton ON/OFF, port PCIe 2.0 et connecteur RTC intégré.
- **Raspberry Pi Zero W** : plus petit et moins coûteux, doté de Wi-Fi et Bluetooth.
- **Raspberry Pi 400** : version intégrée dans un clavier, rappelant les premiers ordinateurs domestiques. Idéal comme ordinateur de bureau économique.
- **Raspberry Pi 3 Model B** : Wi-Fi et Bluetooth intégrés, parfait pour la connexion à Internet et à d'autres appareils.
- **Raspberry Pi Pico** : première incursion dans les microcontrôleurs, basé sur la puce RP2040, programmable en C et MicroPython.

:::info[Conseil pour le projet]
Le **Raspberry Pi 4 Model B** est probablement le choix idéal pour la borne d'arcade. Prix : environ 40 EUR pour 1 Go de RAM.
:::

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem'}}>
<img src="/img/ressources/jeditrack/borne-arcade/Introduction_au_Rasp__Untitled.png" alt="Raspberry Pi 1 Model B+" style={{maxWidth: '200px'}} />
<img src="/img/ressources/jeditrack/borne-arcade/Introduction_au_Rasp__Untitled_1.png" alt="Raspberry Pi 4 Model B" style={{maxWidth: '200px'}} />
<img src="/img/ressources/jeditrack/borne-arcade/Introduction_au_Rasp__Untitled_2.png" alt="Raspberry Pi 2 Model B" style={{maxWidth: '200px'}} />
<img src="/img/ressources/jeditrack/borne-arcade/Introduction_au_Rasp__Untitled_3.png" alt="Raspberry Pi 5 Model B" style={{maxWidth: '200px'}} />
<img src="/img/ressources/jeditrack/borne-arcade/Introduction_au_Rasp__Untitled_4.png" alt="Raspberry Pi Zero W" style={{maxWidth: '200px'}} />
<img src="/img/ressources/jeditrack/borne-arcade/Introduction_au_Rasp__Untitled_5.png" alt="Raspberry Pi 400" style={{maxWidth: '200px'}} />
<img src="/img/ressources/jeditrack/borne-arcade/Introduction_au_Rasp__Untitled_6.png" alt="Raspberry Pi 3 Model B" style={{maxWidth: '200px'}} />
<img src="/img/ressources/jeditrack/borne-arcade/Introduction_au_Rasp__Untitled_7.png" alt="Raspberry Pi Pico" style={{maxWidth: '200px'}} />
</div>

### Usages

Le Raspberry Pi est très polyvalent : éducation en informatique (Python, Scratch, HTML/CSS), projets DIY (station météo, surveillance domestique), jeux rétro via émulation, serveurs domestiques (Plex, Kodi), apprentissage de Linux, robotique (via les ports GPIO), systèmes IoT et affichage numérique.

## Installation de Recalbox

Recalbox est une plateforme de jeux rétro gratuite et open-source qui transforme un appareil comme le Raspberry Pi en console de jeux rétro. Elle prend en charge une large gamme de systèmes : Atari, Commodore, systèmes d'arcade, consoles Nintendo et Sega. Recalbox comprend également Kodi, un media center performant pour une utilisation multimédia, et est compatible avec les manettes USB et Bluetooth.

:::info[Conseil pour l'animateur]
Recalbox est particulièrement facile à utiliser pour la création d'une borne d'arcade. Son interface est intuitive, ce qui permet aux jeunes — souvent débutants avec ces outils — de naviguer facilement. Elle est pré-configurée pour de nombreux contrôleurs et livrée avec une large gamme de jeux pré-installés. L'installation est simple : télécharger, flasher sur une carte SD, insérer dans le Raspberry Pi. Recalbox permet aussi l'intégration de jeux réalisés sur MakeCode Arcade, valorisant les créations des jeunes.
:::

### Matériel nécessaire

- **Raspberry Pi** (modèles 3, 3B+, 4 ou 400 recommandés)
- **Carte microSD** (minimum 16 Go, de préférence 32 Go ou plus)
- **Lecteur de carte microSD** pour votre ordinateur
- **Manette USB** ou Bluetooth
- **Câble HDMI** pour connecter le Raspberry Pi à un écran
- **Clavier USB** (optionnel mais utile pour la configuration initiale)
- **Câble d'alimentation** compatible Raspberry Pi (5V, 3A pour le Pi 4)
- **Connexion internet** (Wi-Fi ou Ethernet)

### Étape 1 : Télécharger Recalbox

1. Rendez-vous sur le site officiel : [https://www.recalbox.com/fr/](https://www.recalbox.com/fr/)
2. Cliquez sur Télécharger : [https://www.recalbox.com/fr/download/stable/](https://www.recalbox.com/fr/download/stable/)
3. Sélectionnez votre version de Raspberry Pi
4. Téléchargez le fichier image (extension `.img.xz`)
5. Alternative : installez Raspberry Pi Imager

### Étape 2 : Préparer la carte microSD

1. **Formater la carte microSD** en FAT32 avec [SD Card Formatter](https://www.sdcard.org/downloads/formatter/)
2. **Flasher l'image** avec [Etcher](https://www.balena.io/etcher/) :
    - Ouvrez Etcher
    - Cliquez sur **Flash from file** et sélectionnez l'image `.img.xz`
    - Sélectionnez votre carte microSD comme destination
    - Cliquez sur **Flash** pour lancer le processus

### Étape 3 : Installer Recalbox sur le Raspberry Pi

1. **Insérer la carte microSD** dans le Raspberry Pi
2. **Connecter les périphériques** : manette USB ou clavier, écran HDMI, alimentation
3. **Premier démarrage** : Recalbox configure automatiquement les fichiers système (quelques minutes)

### Étape 4 : Configurer Recalbox

1. **Configurer la manette** : suivez les instructions à l'écran pour mapper les boutons. Pour le Bluetooth : **Options > Manettes > Configuration des manettes Bluetooth**.
2. **Configurer le Wi-Fi** : **Options > Réseau** puis SSID + mot de passe.
3. **Configurer les ROMs** : transférer des ROMs sur la carte microSD via :
    - **Clé USB** : créer un dossier `recalbox` à la racine, l'insérer dans le Pi (copie automatique des répertoires), puis placer les ROMs dans les dossiers correspondants (ex : `snes/`).
    - **Réseau (Samba)** : sur le même réseau, accéder à `\\RECALBOX` (Windows) ou `smb://recalbox/` (macOS/Linux), puis copier dans le dossier `roms`.

### Étape 5 : Jouer !

Accédez aux jeux directement via le menu principal de Recalbox. Sélectionnez la console, choisissez votre jeu, et amusez-vous !

## Conception et ressources documentaires

### Méthode de fabrication

Dans le projet "Borne d'arcade", nous avions le choix entre opter pour un kit préfabriqué à assembler soi-même, ou construire entièrement la borne. Notre choix s'est porté sur la construction complète de la borne en bois, en simplifiant au maximum le design et en intégrant des éléments de personnalisation choisis par les jeunes. Cette décision s'est avérée moins onéreuse qu'un kit complet, car nous avons pu adapter nos envies et nos achats à notre budget et à notre niveau de complexité.

:::note[Ressources]
- [https://retromash.com/2015/01/02/building-a-home-arcade-machine-part-1/](https://retromash.com/2015/01/02/building-a-home-arcade-machine-part-1/)
- [https://arcade-for-good.com/construction-arcade/fabriquer-borne-arcade/](https://arcade-for-good.com/construction-arcade/fabriquer-borne-arcade/)
- [https://www.jdfarcade.com/blog/comment-construire-sa-borne-darcade-a-la-facon-diy--b24.html](https://www.jdfarcade.com/blog/comment-construire-sa-borne-darcade-a-la-facon-diy--b24.html)
- [https://retro-arcade.fr/](https://retro-arcade.fr/)
- [https://omniretro.com/fr/](https://omniretro.com/fr/)
:::

### Choix des composants principaux

- Le **type de moniteur** : un ancien téléviseur CRT pour rester fidèle à l'expérience arcade originale, ou un écran LCD moderne pour plus de praticité. L'objectif était de recycler un écran (recyclerie, association, participant) afin de donner une seconde vie à un objet difficilement recyclable. La taille de l'écran trouvé influence le dimensionnement de la borne.
- Le **cœur du système** : PC pour la puissance, Xbox modifiée pour la simplicité, ou Raspberry Pi pour la compacité et le coût. Nous avons opté pour un Raspberry Pi avec Recalbox.
- Les **joysticks et boutons** : joystick à 4 directions pour les jeux classiques, deux boutons LED de type interrupteur, configuration 2 joueurs. Acheté en kit sur Amazon.
- La **gestion du son** : haut-parleurs de qualité pour répondre au souhait des jeunes d'utiliser la borne avec de la musique.

:::note[Ressources]
- Écran à recycler : [https://ressourceries.info/](https://ressourceries.info/)
- Système de jeu : [Recalbox](https://www.recalbox.com/fr/) — [Raspberry Pi 4](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/)
- Joysticks et boutons : recherchez "arcade kit 2 joueurs" sur Amazon
- Gestion du son : [https://www.jdfarcade.com/composants/40-kit-audio-arcade.html](https://www.jdfarcade.com/composants/40-kit-audio-arcade.html)
:::

### Sélection des matériaux

Nous avons principalement utilisé du **MDF (Medium Density Fiberboard) de 18 mm d'épaisseur**. Le MDF se coupe, se perce et se ponce aisément, c'est un matériau économique. Nous l'avons fait découper à la demande chez Leroy Merlin (≈ 200 EUR de bois). Sa surface est idéale pour la peinture et les stickers ; il résiste bien aux changements de température et d'humidité, et se trouve facilement dans les magasins de bricolage.

:::note[Ressources]
- [Panneaux MDF chez Leroy Merlin](https://www.leroymerlin.fr/produits/menuiserie/panneau-planche-et-materiaux-bois/panneau-bois-agglomere-mdf/panneau-mdf/)
:::

### Finition et esthétique

Approche simple mais collaborative : les jeunes ont réalisé des essais de peinture sur les prototypes avec plusieurs associations de couleurs, puis ont validé collectivement le choix final (en prenant en compte les chocs et traces potentiels). Ils ont proposé des dessins sur une zone limitée et dédiée, le reste étant recouvert de stickers sélectionnés ensemble. Bandes de chant pour protéger les tranches.

:::note[Ressources stickers et finitions]
- [https://www.buzz-arcade.com/fr/36-stickers-bornes](https://www.buzz-arcade.com/fr/36-stickers-bornes)
- [https://www.jdfarcade.com/stickers-borne-d-arcade/376-sticker-supreme.html](https://www.jdfarcade.com/stickers-borne-d-arcade/376-sticker-supreme.html)
- [https://stickergameshop.com/](https://stickergameshop.com/)
- [https://www.spreadshirt.fr/shop/papeterie/stickers/pop+culture/](https://www.spreadshirt.fr/shop/papeterie/stickers/pop+culture/)
- [https://www.goodstickers.fr/stickers/jeux-video/](https://www.goodstickers.fr/stickers/jeux-video/)
- [https://adhesifs-de-france.fr/80-pop-culture](https://adhesifs-de-france.fr/80-pop-culture)
- T-molding : [https://fabulous-arcade.com/fr/58-t-molding](https://fabulous-arcade.com/fr/58-t-molding)
:::

## Méthodes de prototypage

Avant d'engager des matériaux coûteux dans la construction finale, la phase de prototypage permet de valider les dimensions et l'ergonomie, tester l'assemblage des différents éléments, identifier et corriger les problèmes potentiels, et optimiser les choix techniques et esthétiques.

### Prototypage de la structure

**Maquettes à échelle réduite**

- Bois fin (3 mm d'épaisseur) découpé au laser
- Carton ondulé épais pour une alternative économique
- Impression 3D pour les détails techniques

**Format et proportions**

- Équilibre visuel entre hauteur totale et largeur
- Angles d'inclinaison de l'écran et du panneau de contrôle
- Cohérence des proportions générales

**Méthode d'assemblage**

- Système d'emboîtements et de fixations
- Identification des points de fragilité
- Optimisation de l'ordre de montage

**Finitions**

- Tests de couleurs et matériaux
- Visualisation du rendu final
- Validation des choix esthétiques

### Prototypage fonctionnel du panneau de contrôle

**Construction**

- Version réduite mais fonctionnelle du panneau
- Intégration des joysticks, boutons et électronique (i-Pac ou équivalent)
- Câblage complet selon les schémas techniques

**Tests en conditions réelles**

- Sessions de jeu prolongées
- Test sur différents types de jeux (action, puzzle, combat)
- Validation avec plusieurs utilisateurs
- Mesure de l'ergonomie en jeu à deux joueurs

**Points d'attention**

- Espacement optimal entre les contrôles
- Hauteur et angle du panneau de contrôle
- Réactivité et précision des commandes
- Confort d'utilisation prolongée

### Alternatives selon les moyens disponibles

- **Carton ondulé épais** : économique, facile à découper, prototypes grandeur nature. Assemblage à la colle chaude ou au double-face.
- **Découpe manuelle** : contreplaqué 3-5 mm, scie sauteuse, papier de verre. Plus accessible et économique.
- **Impression 3D** : maquettes réduites, pièces de détail. Précision élevée, formes complexes.
- **Test sur breadboard** : validation des composants avant intégration, débogage du câblage et de la programmation.

:::info[Conseil méthodologique]
Ne négligez pas le prototypage fonctionnel ! Tester le système de contrôle en situation réelle (démonstrations, sessions de jeu prolongées) apporte des insights précieux qu'aucune maquette statique ne peut fournir. Les retours utilisateurs sont essentiels pour optimiser l'ergonomie finale. Documentez chaque étape de vos tests et modifications pour créer un historique des décisions et faciliter la construction finale.
:::

## Modélisation finale du design

### Choix du modèle

Plusieurs formats de bornes sont disponibles, chacun avec ses particularités en termes de design, d'ergonomie et d'expérience de jeu.

**Borne Bartop** : modèle compact conçu pour être posé sur un meuble ou une table. Solution idéale pour les petits espaces ou pour ceux qui recherchent un modèle transportable. Espace limité pour les contrôles et l'écran.

![Borne bartop](/img/ressources/jeditrack/borne-arcade/Modélisation_finale__a9909538-a460-40b5-a585-99da017f76a3.png)

**Borne Cocktail** : design en forme de table, permettant de jouer assis face à face. Look rétro et polyvalence d'usage, mais plus complexe à construire et plus encombrante au sol.

![Borne Cocktail](/img/ressources/jeditrack/borne-arcade/Modélisation_finale__image.png)

**Borne Pedestal** : piédestal avec contrôles connectés à un écran séparé ou un téléviseur. Grande flexibilité en termes de taille d'écran, mais nécessite un support externe.

![Borne pedestal](/img/ressources/jeditrack/borne-arcade/Modélisation_finale__image_1.png)

**Notre choix : la borne classique (Upright)**. Modèle debout de taille standard qui rappelle les bornes des années 80-90. Expérience nostalgique avec plus d'espace pour les contrôles et possibilité d'intégrer un écran de grande taille.

![Bornes classiques](/img/ressources/jeditrack/borne-arcade/Modélisation_finale__image_2.png)

Au sein des bornes classiques, plusieurs styles existent :

- **Atari** (Asteroids, Centipede) : design minimaliste mais iconique, lignes angulaires, mélange bois/métal, artworks géométriques.
- **Bally Midway** (Mortal Kombat, NBA Jam) : design robuste années 90, côtés droits, panneau large, artworks flashy, idéal pour le 2 joueurs.
- **Williams** (Defender, Joust) : design classique et fin avec panneaux inclinés, bois et graphismes vifs aux thèmes spatiaux ou fantastiques.
- **Sega** (Astro City, Blast City) : design arrondi et moderne, plastique et métal, ergonomie pensée pour le confort, parfait pour les jeux de combat et de tir.
- **Nintendo** (Donkey Kong, Mario Bros) : design carré et vintage, bois et couleurs vives, contrôles centrés, idéal pour les nostalgiques.
- **Konami** (The Simpsons, TMNT) : conçu pour le multijoueur, panneaux étendus, visuels colorés, prisé des fans de coopération.

:::info[Pour aller plus loin]
[https://retromash.com/2016/02/09/building-a-home-arcade-machine-part-3-cabinet-design/](https://retromash.com/2016/02/09/building-a-home-arcade-machine-part-3-cabinet-design/)
:::

### Modélisation de la borne avec Onshape

Pour créer une borne qui corresponde aux envies de notre public, nous avons modélisé notre propre design. Cette étape est technique, mais vous pouvez vous faire aider au sein d'un fablab, ou récupérer des plans déjà réalisés (auprès de notre équipe : contact@lesemulsionneurs.fr, ou sur internet).

Nous avons utilisé **Onshape**, un logiciel de CAO (conception assistée par ordinateur) accessible directement via le navigateur web. Pas besoin d'installation, fonctionne aussi sur tablette/smartphone, et permet à plusieurs personnes de travailler ensemble sur le même modèle en temps réel.

**Qu'est-ce que la modélisation 3D ?** Créer des objets en trois dimensions sur ordinateur. Au lieu de dessiner sur une feuille en deux dimensions (longueur et largeur), vous ajoutez la profondeur, ce qui rend le dessin plus réaliste.

Onshape est utilisé pour concevoir des objets de toutes sortes : pièces de machines, produits électroniques, dispositifs médicaux, prototypes pour l'impression 3D. Comme tout fonctionne via Internet, le logiciel se met à jour automatiquement.

:::info[Pour aller plus loin]
- [https://www.onshape.com/fr/](https://www.onshape.com/fr/)
- [Tutoriel vidéo Onshape](https://www.youtube.com/watch?v=Jf-FNe-3MCQ)
- [Onshape Primer](https://cad.onshape.com/help/fr_FR/Content/Primer/onshape_primer.htm)
- [Plans de borne d'arcade (Retromash)](https://retromash.com/2016/05/01/building-a-home-arcade-machine-part-7-cabinet-plans/)
:::

## Assemblage final et finitions

L'assemblage final bénéficie directement du travail de prototypage réalisé en amont. Cette phase reproduit fidèlement les méthodes validées lors des tests préliminaires.

### Assemblage de la structure

**Reproduction des techniques validées**

- Méthodes d'assemblage testées sur les prototypes reproduites à l'identique
- Ordre de montage optimisé respecté scrupuleusement
- Systèmes d'emboîtements et de fixations parfaitement maîtrisés

**Montage de la structure principale**

- Assemblage du caisson principal selon les plans validés
- Installation des renforts internes et des supports (écran, panneau de contrôle)
- Vérification de l'équerrage et de la stabilité de l'ensemble
- Mise en place du système de ventilation si nécessaire

**Intégration des composants**

- Installation de l'écran sur ses supports avec système de guidage
- Montage du panneau de contrôle et vérification de l'ergonomie
- Positionnement des haut-parleurs dans leurs logements
- Préparation des passages de câbles

### Câblage électronique

Le câblage suit rigoureusement les schémas techniques créés par les jeunes lors de la phase de prototypage. Cette documentation devient la référence pour l'assemblage final.

**Câblage du panneau de contrôle**

- Installation des joysticks et boutons selon le layout validé
- Câblage vers l'interface de contrôle (i-Pac) en suivant les schémas réalisés
- Mise en place du faisceau de terre (daisy chain) sur tous les composants
- Test de chaque contrôle individuellement avant finalisation

**Installation du système principal**

- Intégration du Raspberry Pi dans son logement sécurisé
- Connexion vidéo vers l'écran (composite ou HDMI selon le modèle)
- Raccordement audio vers l'amplificateur et les haut-parleurs
- Configuration du système d'alimentation centralisé

**Éclairage et finitions électroniques**

- Installation de l'éclairage LED pour la marquee
- Câblage de l'interrupteur principal et des systèmes auxiliaires
- Vérification de tous les circuits avant mise sous tension
- Tests fonctionnels complets du système

### Finitions

Les finitions déterminent l'aspect final et la durabilité de votre borne. Plusieurs options s'adaptent à différents budgets et niveaux de compétence.

- **Vinyle professionnel (≈ 150 EUR)** : impression numérique haute résolution sur vinyle adhésif, application au rouleau pour éviter les bulles d'air, découpe précise autour des ouvertures.
- **Gravure laser** : gravure directe sur le bois pour un effet authentique, possibilité de combiner avec peinture ou vernis, durabilité exceptionnelle.
- **Peinture traditionnelle** : préparation soigneuse des surfaces (ponçage, apprêt), application au rouleau ou au pistolet, utilisation de pochoirs pour les détails précis.

**Finitions de protection**

- Installation du T-molding sur tous les bords exposés
- Protection des surfaces de manipulation (panneau de contrôle)
- Application d'un vernis de protection sur les zones sensibles

:::info[Pour aller plus loin]

**Structure et finitions :**

- [T-molding et installation](https://retromash.com/2016/05/26/building-a-home-arcade-machine-part-16-adding-all-the-t-moulding/)
- [Marquee et éclairage](https://retromash.com/2016/05/28/building-a-home-arcade-machine-part-19-the-marquee/)
- [Application du vinyle](https://retromash.com/2016/05/25/building-a-home-arcade-machine-part-15-printing-and-applying-the-vinyl/)

**Composants électroniques :**

- [Écran CRT vs LCD](https://retromash.com/2016/05/27/building-a-home-arcade-machine-part-17-the-tv-monitor/)
- [Câblage complet](https://retromash.com/2016/05/29/building-a-home-arcade-machine-part-20-installing-the-electronics/)

:::

## Exemple de réalisation

### Phase d'idéation

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem'}}>
<img src="/img/ressources/jeditrack/borne-arcade/Version_réalisée_p__Untitled_(5).png" alt="Idéation - croquis 1" style={{maxWidth: '320px'}} />
<img src="/img/ressources/jeditrack/borne-arcade/Version_réalisée_p__Untitled_(6).png" alt="Idéation - croquis 2" style={{maxWidth: '320px'}} />
</div>

### Phase de prototypage

Pour notre borne d'arcade, nous avons réalisé deux maquettes à l'échelle 1:6 par découpe laser sur bois fin (3 mm d'épaisseur). Ces maquettes nous ont permis de :

- **Valider le format et les proportions** : équilibre visuel entre la hauteur et la largeur, angles d'inclinaison de l'écran et du panneau de contrôle
- **Tester la méthode d'assemblage** : système d'emboîtements et de fixations, identification des points de fragilité, optimisation de l'ordre de montage
- **Expérimenter les finitions** : peinture des maquettes avec différentes couleurs pour visualiser le rendu final

**Prototype fonctionnel de la manette**

En parallèle, nous avons développé un prototype fonctionnel du panneau de contrôle pour valider l'ergonomie et l'électronique. Ce prototype a été testé lors d'un tournoi de retro gaming, ce qui nous a permis de valider l'espacement optimal entre les contrôles, tester la réactivité des joysticks sur différents types de jeux, identifier les ajustements nécessaires et recueillir les retours des utilisateurs.

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem'}}>
<img src="/img/ressources/jeditrack/borne-arcade/Version_réalisée_p__image.png" alt="Prototype - vue 1" style={{maxWidth: '280px'}} />
<img src="/img/ressources/jeditrack/borne-arcade/Version_réalisée_p__image_1.png" alt="Prototype - vue 2" style={{maxWidth: '280px'}} />
<img src="/img/ressources/jeditrack/borne-arcade/Version_réalisée_p__image_2.png" alt="Prototype - vue 3" style={{maxWidth: '280px'}} />
</div>

### Modélisation finale

![Modélisation 3D](/img/ressources/jeditrack/borne-arcade/Version_réalisée_p__025b50c0-d444-497d-8f14-dd7d3e1d3894.png)

![Modélisation - vue détaillée](/img/ressources/jeditrack/borne-arcade/Version_réalisée_p__image_3.png)

![Modélisation - vue alternative](/img/ressources/jeditrack/borne-arcade/Version_réalisée_p__image_(2).png)

### Assemblage et finition

L'assemblage final a bénéficié directement du travail de prototypage. Les méthodes d'assemblage testées sur nos prototypes ont été reproduites, l'ordre de montage optimisé a été respecté, et les systèmes d'emboîtements et de fixations étaient maîtrisés.

- **Montage de la structure principale** : assemblage du caisson selon les plans validés, installation des renforts internes et des supports (écran, panneau de contrôle), vérification de l'équerrage et ajout de tasseaux pour la stabilité.
- **Intégration des composants** : installation de l'écran sur ses supports imprimés en 3D, montage du panneau de contrôle, préparation des passages de câbles.
- **Câblage du panneau de contrôle** : installation des joysticks et boutons selon le layout validé, câblage vers l'interface de contrôle, test de chaque contrôle individuellement.
- **Installation du système principal** : intégration du Raspberry Pi dans son logement sécurisé, connexion vidéo HDMI vers l'écran.

**Finitions : vinyle professionnel personnalisé (150 EUR)**

Cette solution nous a offert le meilleur rapport qualité/rendu pour notre budget : impression numérique haute résolution de notre design, facilité d'application même pour des débutants, résultat durable et résistant à l'usure, design unique reflétant notre vision.

L'application s'est déroulée en plusieurs étapes :

- Préparation minutieuse de la surface (ponçage léger, dégraissage)
- Application au rouleau section par section pour éviter les bulles d'air
- Découpe précise autour des ouvertures (écran, haut-parleurs, panneau de contrôle)
- Finitions soignées au niveau des raccords et des bords

Pour compléter l'ensemble, nous avons installé le **T-molding** sur tous les bords exposés, ce qui donne une finition parfaite et protège les arêtes de la borne.

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem'}}>
<img src="/img/ressources/jeditrack/borne-arcade/Version_réalisée_p__image_4.png" alt="Assemblage - étape 1" style={{maxWidth: '280px'}} />
<img src="/img/ressources/jeditrack/borne-arcade/Version_réalisée_p__image_5.png" alt="Assemblage - étape 2" style={{maxWidth: '280px'}} />
<img src="/img/ressources/jeditrack/borne-arcade/Version_réalisée_p__image_6.png" alt="Assemblage - étape 3" style={{maxWidth: '280px'}} />
<img src="/img/ressources/jeditrack/borne-arcade/Version_réalisée_p__image_7.png" alt="Assemblage - étape 4" style={{maxWidth: '280px'}} />
<img src="/img/ressources/jeditrack/borne-arcade/Version_réalisée_p__image_8.png" alt="Assemblage - étape 5" style={{maxWidth: '280px'}} />
<img src="/img/ressources/jeditrack/borne-arcade/Version_réalisée_p__image_9.png" alt="Assemblage - étape 6" style={{maxWidth: '280px'}} />
</div>

<figure style={{margin: '1.5rem 0'}}>
<img src="/img/ressources/jeditrack/borne-arcade/Version_réalisée_p__image_10.png" alt="Borne terminée" style={{maxWidth: '600px'}} />
<figcaption style={{margin: 0}}>La borne d'arcade terminée, prête pour le retro gaming.</figcaption>
</figure>

## Plans et ressources téléchargeables

- [Plan de découpe complet (PDF)](/img/ressources/jeditrack/borne-arcade/Version_réalisée_p__Plan-de-dcoupe-Borne-dArcade.pdf)
- [Cotes de découpe (PDF)](/img/ressources/jeditrack/borne-arcade/Version_réalisée_p__Dcoupe-Cts-Borne-dArcade.pdf)
- [Emplacement des boutons (PDF)](/img/ressources/jeditrack/borne-arcade/Version_réalisée_p__Emplacement-boutons.pdf)

---

*Cette fiche fait partie du projet [JediTrack](/projets/jeditrack), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

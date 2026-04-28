---
id: panneau-solaire-auto-orientable
title: Panneau solaire auto-orientable
sidebar_label: "Panneau solaire auto-orientable"
sidebar_position: 7
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><circle cx="6" cy="6" r="2.5" fill="#1a4a48" opacity="1.0"/><rect x="10" y="12" width="12" height="9" fill="#1a4a48" opacity="0.25" transform="rotate(-15 16 16.5)"/><line x1="11" y1="15" x2="22.5" y2="11.5" stroke="#1a4a48" strokeWidth="0.6" opacity="1.0"/><line x1="12" y1="19" x2="23.5" y2="15.5" stroke="#1a4a48" strokeWidth="0.6" opacity="1.0"/><path d="M8 8 L11 13" stroke="#1a4a48" strokeWidth="1.5" fill="none" opacity="0.1"/><path d="M16 16 Q18 14 20 15" stroke="#1a4a48" strokeWidth="1.2" fill="none" opacity="1.0"/><polygon points="20,15 18,15 19,13.5" fill="#1a4a48" opacity="1.0"/></svg> Panneau solaire auto-orientable

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Physique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--info">LDR</span>
  <span className="badge badge--info">Servomoteur</span>
  <span className="badge badge--secondary">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| The Dexter Lab | 4-6 heures | Avancé | 13-18 ans |

**Problématique :** Comment maximiser l'apport en énergie solaire ?

## Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 2 cellules photoélectriques (LDR)
- 2 résistances de 10 kΩ
- 1 breadboard
- Des câbles de connexion
- 1 câble USB - micro B

<a href="/pdf/thedexterlab/PR7-TDL_Feuille_Travail_Vierge_A3.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger la feuille de travail</a>

</div>

<img src="/img/ressources/thedexterlab/panneau-solaire-auto-orientable/icone.png" alt="Panneau solaire auto-orientable" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

:::info
Un panneau solaire fonctionne en convertissant l'énergie solaire en électricité. Il est composé de cellules photovoltaïques qui capturent la lumière du soleil et la convertissent en électricité à l'aide d'un processus appelé effet photovoltaïque. L'électricité produite par les cellules est ensuite envoyée à un onduleur, qui la convertit en courant alternatif utilisable pour alimenter les appareils. En raison de leur durabilité et de leur capacité à produire de l'énergie propre, les panneaux solaires sont considérés comme une forme importante d'énergie renouvelable.
:::

## Déroulé de l'activité

L'objectif principal de ce protocole est de maximiser la production d'énergie solaire en suivant la trajectoire du soleil tout au long de la journée. Pour y parvenir, nous proposons aux élèves de développer un système basé sur un servomoteur qui permettra à un panneau photovoltaïque de toujours être orienté face au soleil. Ainsi, nous pourrons exploiter au mieux l'énergie solaire disponible.

Pour atteindre cet objectif, nous allons mesurer la quantité de lumière tombant sur le panneau solaire à différents moments de la journée. Ces mesures nous permettront de contrôler le mouvement du panneau solaire, si nécessaire, afin de maximiser la production d'énergie. Les élèves pourront installer des capteurs pour surveiller les conditions météorologiques, ce qui permettra de prévoir les variations de la lumière solaire et d'adapter en conséquence la position du panneau photovoltaïque.

Grâce à cette activité, les élèves pourront apprendre plusieurs concepts de physique, comme la lumière et les transformations d'énergie, tout en développant leurs compétences en programmation (comprendre comment utiliser une carte électronique, des capteurs, programmer par blocs et comprendre un système technique). Ils exploreront également les enjeux liés aux énergies renouvelables et formuleront des hypothèses basées sur une démarche scientifique structurée.

## Compétences mobilisées

Ce protocole mobilise plusieurs disciplines scolaires, notamment :

- La physique : pour comprendre les principes scientifiques sous-jacents à la mesure de l'intensité lumineuse et à l'orientation d'un panneau solaire, ainsi que les principes de base de la programmation d'un servomoteur.
- Les sciences de l'ingénieur : pour concevoir et réaliser des prototypes, des circuits et des supports d'impression 3D pour les capteurs et les actionneurs, et intégrer différentes parties du système.
- L'informatique : pour écrire du code pour contrôler les capteurs et les actionneurs, créer des programmes pour collecter et afficher des données, et intégrer différentes parties du système.

Ce protocole peut être adapté à différents niveaux scolaires, de la fin du collège au lycée. Il peut être utilisé dans le cadre de projets de physique, de sciences de l'ingénieur ou de technologie.

## Étape 1 : Collecter des données

### Orientation

Les panneaux solaires sont généralement montés sur les toits et orientés autant que possible vers le sud. Dans l'hémisphère nord, le soleil étant incliné au sud (l'angle d'inclinaison vers le sud est lié à la latitude, plus on va vers le nord, plus le soleil sera bas dans le ciel) avec une trajectoire d'Est en Ouest, c'est l'orientation qui permet de maximiser la quantité de soleil reçu et donc de fournir le plus d'électricité. Malgré cela, il est possible d'améliorer le rendement du panneau solaire en l'orientant toujours dans la direction du soleil.

L'objectif de cette phase est donc d'identifier une mesure d'ensoleillement avec un capteur adapté et de définir une procédure pour sa mise en œuvre avec un microcontrôleur.

### Conceptualisation

Le paramètre à étudier est lié à l'ensoleillement. Il faut mesurer la quantité de lumière arrivant sur le panneau solaire. Il existe de nombreux capteurs de lumière tels que le luxmètre, le pyranomètre ou encore la photodiode. Pour cette expérience, le choix de la LDR (light dependent resistor) est suffisant car elle est très bon marché et simple à utiliser.

:::info
Pour aller plus loin :

1. Un **luxmètre**, aussi appelé mètre de lumière, est un instrument de mesure de la luminosité qui permet d'évaluer la quantité de lumière qui atteint une surface donnée. Il est utilisé pour mesurer l'intensité lumineuse de différentes sources de lumière, que ce soit pour les lampes, les écrans d'ordinateur ou même pour les panneaux solaires. Le luxmètre est un outil précieux pour les professionnels de l'éclairage, les ingénieurs et les scientifiques qui travaillent avec la lumière et la luminosité.
2. Une **photodiode** est un composant électronique semi-conducteur qui convertit la lumière en courant électrique. Elle est utilisée dans de nombreuses applications, notamment comme capteur de lumière pour détecter et mesurer la lumière, ou comme détecteur de rayonnement électromagnétique dans les télécommunications.
3. Un **pyranomètre** est un instrument de mesure de la radiation solaire globale. Il mesure la quantité totale de rayonnement solaire direct et diffus, généralement exprimée en watts par mètre carré (W/m²). Les pyranomètres sont utilisés pour mesurer l'énergie solaire disponible pour les panneaux solaires et pour les études météorologiques.
:::

La photorésistance (également appelée LDR ou cellule photoélectrique) est un composant électronique dont la résistance varie en fonction de la quantité de lumière incidente : plus elle est éclairée, plus sa résistance baisse.

Ainsi, en utilisant la loi d'Ohm et le principe du pont diviseur de tension, il est possible d'avoir un circuit électronique simple (uniquement une LDR et des résistances) dont la tension de sortie est proportionnelle à la quantité de lumière reçue. En lisant cette tension sur une entrée analogique d'un microcontrôleur, il est possible d'automatiser la relève des mesures de luminosité qui seront utiles pour déterminer l'orientation optimale de notre panneau solaire.

### Investigation

Cette étape peut être réalisée à l'aide d'un capteur de lumière de base facilement programmable sur une carte STM32. Nous apprenons comment lire facilement le capteur et afficher sa valeur.

| DARK | NATURAL LIGHT |
|---|---|
| LDR left = 1 | LDR left = 44 |
| LDR left = 1 | LDR left = 42 |
| LDR left = 0 | LDR left = 43 |
| LDR left = 0 | LDR left = 43 |
| LDR left = 1 | LDR left = 43 |

Une LDR est une résistance qui varie en fonction de la quantité de lumière reçue. Dans notre cas, elle permet d'optimiser l'éclairage en fonction de sa valeur.

**Câblage :** la manière la plus simple de mesurer un capteur résistif est d'utiliser un diviseur de tension avec une résistance fixe choisie. Avec une lecture analogique de la tension sur le point entre la résistance choisie et la LDR, nous pouvons déterminer l'intensité lumineuse. En effet, la tension dépend du rapport entre les résistances (fixe et LDR), la résistance de la LDR diminue lorsque l'intensité lumineuse augmente. Par conséquent, la tension lue sur la broche analogique augmentera directement avec l'intensité lumineuse.

- À mesure que l'intensité lumineuse augmente, la résistance d'une LDR diminue. Les valeurs typiques varient entre quelques centaines d'ohms (en plein soleil) et quelques centaines de kilo Ohms (dans l'obscurité totale).
- Bien que la résistance diminue avec l'intensité lumineuse, la disposition (GND - résistance - LDR - 5V) que nous avons choisie et la lecture analogique au point entre la résistance et la LDR sont telles que la valeur donnée par le microcontrôleur augmente avec l'éclairage.
- Une broche d'entrée analogique peut être utilisée pour lire une valeur comprise entre 0 et 1023. Cette valeur est proportionnelle à la tension appliquée à la broche, qui DOIT être comprise entre 0 V et 5 V (par rapport à GND). La valeur numérique ainsi obtenue est une mesure arbitraire correspondant à une tension (0 -> 0 Volt, 1023 -> 5 V), et n'est en aucun cas liée à une unité d'intensité lumineuse (lux, lumen ou candela). Si nous voulions la relier à une mesure physique réelle, nous devrions calibrer la mesure avec un instrument de mesure approprié.

**Capacité à mesurer l'intensité lumineuse :** nous sommes maintenant en mesure d'utiliser un capteur qui nous indique l'intensité lumineuse (dans une unité arbitraire). Cette étape est cruciale pour pouvoir déterminer la position du soleil, ce qui nous permettra de savoir où positionner le panneau solaire.

### Débriefing

Grâce à cette étape, nous sommes maintenant capables d'effectuer une mesure de l'intensité lumineuse. Cet instrument de mesure nous permet d'étudier un grand nombre de situations afin de mieux comprendre quels paramètres sont liés à l'éclairage ou à la lumière du soleil.

En effet, nous pouvons comparer l'intensité lumineuse de plusieurs sources telles que le soleil, différentes lampes (incandescente, néon, LED, bougie, etc.) et l'intensité lumineuse de différents matériaux. Nous pouvons également étudier l'influence de la distance ou de l'inclinaison du capteur par rapport à une source définie.

Nous pouvons tester la transparence (ou l'absorption) de différents matériaux et épaisseurs ou éventuellement concentrer la lumière avec une lentille ou un miroir concave. Les recherches sont presque illimitées et, bien qu'elles ne soient pas essentielles au présent projet, elles permettent de se familiariser avec la lumière et de se faire une idée de son intensité.

## Étape 2 : Afficher les données collectées

### Orientation

Maintenant que nous savons mesurer l'intensité lumineuse, il faut pouvoir associer cette mesure au mouvement du soleil dans le ciel afin de le suivre ! En réalité, c'est nous qui bougeons et non le soleil mais c'est une autre histoire.

**Objectifs d'apprentissage** : identifier une méthode permettant de détecter la variation de l'ensoleillement.

### Conceptualisation

Pour mesurer un changement d'intensité lumineuse, il est essentiel de disposer d'une mesure de "référence". Étant donné la simplicité et le faible coût du capteur LDR, une solution simple consiste à utiliser deux capteurs et à comparer leur valeur respective.

### Investigation

Le soleil se déplace dans le ciel d'est en ouest. La hauteur du soleil varie au cours de la journée et atteint son maximum à midi (heure solaire). Cette hauteur varie également en fonction de la latitude et des saisons. L'intensité lumineuse varie au cours de la journée et évolue au fil du temps, ce qui rend impossible l'établissement d'une intensité de référence fixe. Il est donc beaucoup plus simple de construire un système qui effectue deux mesures et les compare pour détecter le mouvement du soleil.

En effet, en choisissant un dispositif où les deux capteurs pointent dans des directions légèrement différentes (avec une différence de 10°), il est possible de détecter le mouvement du soleil :

- Situation 1 : le soleil est exactement devant le dispositif, l'intensité lumineuse reçue par les deux LDR est identique et le dispositif est bien positionné.
- Situation 2 : le soleil s'est déplacé, les rayons du soleil forment un angle plus proche de 90° pour le LDR2 que pour le LDR1, ce qui correspond à un ensoleillement plus intense. Le système n'est plus correctement positionné et doit tourner (dans le sens des aiguilles d'une montre) afin d'être aligné et de revenir à la situation 1.

Cependant, il est important de prendre certaines précautions : dans la situation 1, il est nécessaire de s'assurer que les deux capteurs donnent presque la même valeur. En effet, les LDR ne sont pas des capteurs très précis et pour un même éclairement, ils peuvent donner des valeurs différentes. Il est donc important de les mesurer dans les mêmes conditions et de les réajuster numériquement si nécessaire.

**Câblage** : afin d'effectuer des mesures comparatives, nous réalisons d'abord le montage sur une breadboard. Le programme de test des mesures de chaque LDR est affiché via le port série.

Au final, grâce au programme, vous devriez pouvoir remplir le tableau suivant :

| Heure | Type de lumière | Position de la lumière | LDR Gauche | LDR Droite | Différence | Observation/Remarque |
|---|---|---|---|---|---|---|
| 01/03/2023 10:56:9 | Lampe | 0° | 1001 | 999 | 2 |  |
| 01/03/2023 10:57:11 | Lampe | 0° | 1003 | 997 | 6 |  |
| 01/03/2023 11:00:13 | Lampe | 5° à Gauche | 1000 | 950 | 50 |  |
| 01/03/2023 11:10:15 | Lampe | 10° à Gauche | 1000 | 920 | 70 |  |

En faisant varier la position de la lumière par rapport aux capteurs, essayez de formuler des hypothèses quant au déplacement du panneau à faire pour se retrouver dans la situation idéale en termes de production d'électricité.

Pour affiner votre compréhension des limites du capteur, essayez-le dans des environnements avec des luminosités différentes (dans le noir, dans une salle de classe, en extérieur, …). Comment améliorer le capteur pour le rendre moins sensible aux lumières parasites ?

Comment se comporte votre capteur avec d'autres sources lumineuses (lampe de bureau, LED, bougie, …) ? Essayez de refaire l'expérience de cette étape avec des sources différentes pour voir si vous arrivez toujours à décider dans quel sens votre panneau devrait bouger.

### Débriefing

Grâce à l'intervention de deux capteurs, nous pouvons comparer leur mesure, étape essentielle pour identifier la position du soleil.

Remarques :

- Les lumières parasites ou même l'éclairage ambiant peuvent altérer les mesures, c'est pourquoi les LDR doivent être enfermées dans un tube (de quelques centimètres de long) qui les protège de la lumière ambiante.
- Il y a toujours de petites différences entre les LDR gauche et droite, car on n'est pas sûr qu'elles soient exactement symétriques, et elles ne sont pas très précises.

## Étape 3 : Commander un servomoteur

### Orientation

**Contexte :** maintenant que nous sommes capables de mesurer la position du soleil ou de la source de lumière, nous devons imaginer un système qui tourne en même temps que le soleil pour maximiser notre production d'énergie.

**Objectifs d'apprentissage :**

- Découvrir un nouveau composant actif et comment il fonctionne.
- Être capable de contrôler un mouvement, dans ce cas une rotation, en utilisant des données de capteur.

### Conceptualisation

Pour avoir un système d'orientation automatique de panneau solaire opérationnel, il est nécessaire de comprendre le fonctionnement électromécanique et la programmation d'un moteur servomoteur. Notre solution utilisera un servomoteur (un moteur qui peut déplacer son axe dans une position angulaire déterminée), et nous allons donc voir comment contrôler le servomoteur.

### Investigation

Afin d'utiliser le servomoteur, il est indispensable de se familiariser avec son fonctionnement. Nous vous proposons comme activité simple : de réaliser un circuit avec le servomoteur et de le programmer pour qu'il se positionne à différents angles.

En utilisant le code de l'étape précédente, faire en sorte que le servomoteur s'oriente pour se diriger vers la source de lumière en utilisant le circuit à deux LDR.

### Débriefing

Les élèves sont maintenant capables d'utiliser et de commander un servomoteur, qu'ils utiliseront dans la prochaine étape du système d'orientation d'un panneau solaire. Le choix du servomoteur n'a pas été fait au hasard. En effet, le servomoteur ne nécessite pas d'autres accessoires (alimentation externe, transistor de puissance, relais…) et son utilisation est très simple.

En couplant le servomoteur avec la détection d'orientation lumineuse, il devient possible d'orienter un dispositif pour qu'il fasse toujours face à la lumière.

## Étape 4 : Réaliser le suiveur solaire

### Orientation

Dans les sections précédentes, nous avons appris comment mesurer la lumière du soleil et identifier la position du soleil en utilisant deux mesures. Nous avons également appris comment faire tourner un servomoteur en fonction d'une mesure de luminosité. Maintenant, nous devons assembler toutes les pièces pour atteindre notre objectif ultime : un panneau solaire qui tourne en synchronisation avec le mouvement apparent du soleil.

### Conceptualisation

Le mouvement du soleil est un mouvement lent, le système d'orientation solaire doit bouger progressivement pour suivre le mouvement. L'utilisation du capteur à deux LDR permet de savoir quand le panneau doit tourner et aussi dans quelle direction.

Comme les LDR sont peu précises, il faut déterminer la valeur seuil à partir de laquelle il devient nécessaire de se réorienter. La détermination de cette valeur est à faire expérimentalement pour s'assurer que l'on ne bouge pas inutilement et aussi que l'on ne soit pas influencé par des parasites externes.

### Investigation

Nous avons créé un support qui inclut des LDR intégrées dans un tube, ainsi qu'un panneau solaire de 4 cm x 4 cm fixé sur un servomoteur. Le support a été créé avec une imprimante 3D.

Notez que les deux cylindres creux ne sont pas exactement perpendiculaires l'un à l'autre. Ils ont un angle de -10 et 10 degrés par rapport à la verticale, pour mieux détecter la différence d'orientation. Nous avons également créé un trou pour une goupille qui passera par une attache pour fixer le panneau solaire au moteur de servomoteur en collant la barre d'écartement.

Voici quelques étapes pour assembler le système :

- Le trou est conçu pour une goupille (une tige filetée avec des écrous de 4 mm de diamètre et 70 mm de longueur).
- Le système que nous proposons ne permet de mouvement que dans un plan azimutal, mais il est possible de changer l'orientation du panneau solaire par rapport à la verticale manuellement, grâce à la tige filetée et aux écrous.

Pour s'assurer de la production du panneau solaire, modifier le programme pour connaître la tension de sortie du panneau solaire.

Remplir le tableau suivant pour voir si la production électrique de votre panneau est bien améliorée avec la mise en œuvre du système d'orientation que vous avez développé :

| Heure | Tension à la sortie (en V) | Intensité en sortie (en A) | Puissance en sortie (en W) | Observation / Commentaire |
|---|---|---|---|---|
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |

Pour comparer, refaites l'expérience sans activer le suivi, que constatez-vous vis-à-vis de l'efficacité du panneau solaire ?

### Débriefing

Avec cette construction simple, nous avons été en mesure de créer un système qui nous permet d'optimiser le rendement d'un panneau solaire en s'orientant à chaque instant face au soleil. Cette configuration nous a permis de faire des mesures relatives, de comparer différentes situations et d'explorer différents concepts physiques tels que la résistance électrique, les diviseurs de tension, la puissance lumineuse et les LDR. Nous avons également acquis des connaissances en matière de concepts algorithmiques de base tels que les entrées (capteurs) / sorties (actionneurs), les boucles et les conditions (si). De plus, nous avons développé des compétences en matière de câblage de circuits électriques et de connexion à un microcontrôleur.

Pour poursuivre ce projet et aller plus loin dans l'expérimentation, plusieurs activités sont possibles :

- Comme mentionné précédemment, il est possible de proposer des mesures alternatives avec des dispositifs adaptés (tels qu'un luxmètre ou un pyranomètre, par exemple) pour calibrer notre configuration.
- Actuellement, nous ne suivons le soleil que dans un seul plan. Pour améliorer notre configuration, nous pouvons ajouter une autre LDR et un servomoteur, ce qui nous permettrait de déplacer le panneau solaire dans les trois dimensions de l'espace.
- En enregistrant les valeurs des angles des deux servomoteurs dans un tableur, vous pouvez comparer les résultats de notre système avec les diagrammes solaires azimut/hauteur.
- Nous pouvons également effectuer des mesures et des calculs d'efficacité à l'aide d'un wattmètre connecté au panneau solaire. Par exemple, nous pouvons comparer l'efficacité de notre configuration avec un panneau solaire fixe sur une journée entière pour estimer la pertinence de notre montage.

## Programmation

Les fiches techniques de programmation (câblage, code, extensions MakeCode) sont regroupées dans une fiche dédiée : [Programmation : Panneau solaire auto-orientable](/ressources/thedexterlab/programmation/programmation-panneau-solaire-auto-orientable).


---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

---
id: terrarium-dendrobate
title: Terrarium connecté
sidebar_label: "Terrarium connecté"
sidebar_position: 6
---

# Terrarium connecté

Les dendrobates vivent à une température comprise entre 24 et 26 °C le jour (2 °C de moins la nuit), dans un milieu tropical très humide, avec une humidité relative de 70 à 80 %. Elles ne doivent pas être exposées à la lumière directe du soleil et nécessitent donc un éclairage artificiel adapté. Un éclairage dont le spectre contient des UVB n'est pas indispensable (contrairement aux reptiles), mais il favorise la croissance des grenouilles et des plantes. Le cycle jour/nuit peut être de 12/12 heures, mais il est possible de le moduler par rapport à la durée du jour (jusqu'à 10/14 h). Les changements importants et les manipulations sont source de stress chez les animaux et doivent donc être évités.

Les dendrobates ont besoin d'un abreuvoir. Les points d'eau doivent être peu profonds (moins de 2 cm) afin qu'elles ne se noient pas. Pour augmenter l'humidité, il est possible de créer une cascade ou un petit bassin avec une pompe pour faire circuler l'eau. Afin d'éviter les proliférations bactériennes et fongiques, il ne faut pas laisser d'eau stagnante. Il est recommandé d'utiliser de l'eau en bouteille avec une composition minérale adaptée, ou de l'eau filtrée pour éliminer le calcaire, les bactéries et les résidus de chlore.

Les parois du terrarium sont en verre pour une meilleure visibilité sous tous les angles. Il est surmonté d'une rampe d'éclairage et d'un aérateur. Toutes les ouvertures doivent être obturées par un grillage suffisamment fin pour empêcher les insectes vivants de s'enfuir : ces derniers constituent la source d'alimentation principale des grenouilles (classiquement des mouches du vinaigre, d'environ 2 mm).

Le nombre d'individus doit être adapté en fonction de la taille du terrarium. Par exemple, dans un terrarium moyen de 45 cm de côté, on peut maintenir de un à trois individus.

##### Fonctionnement du terrarium

Le terrarium doit permettre d'aérer, humidifier, chauffer et éclairer l'atmosphère intérieure afin de réguler l'environnement en fonction des besoins de l'écosystème qu'il abrite : des dendrobates, des plantes tropicales et des drosophiles enfermées dans une boîte servant de nourriture aux grenouilles.

Principe de fonctionnement

Le système de régulation s'appuie sur l'architecture matérielle et logicielle du projet DomoduLAB. Les programmes Arduino du projet sont disponibles sur le dépôt GitHub InternetOfFrogs (github.com/carole-laitong/InternetOfFrogs).

Cette architecture repose sur le protocole MQTT. Ce protocole fonctionne selon un principe de souscription. Chaque acteur souhaitant être notifié d'un événement (appelé « récepteur » par la suite) doit s'abonner aux sujets qui l'intéressent. Régulièrement, les capteurs publient des données en les associant à des sujets particuliers. Ces capteurs, qui poussent les données sur ces sujets, sont appelés « émetteurs ». Dans MQTT, il existe un troisième type d'acteur nommé « broker ». Son rôle est de récupérer les données des émetteurs et de notifier tous les récepteurs qui souhaitent les recevoir.

Illustration du principe Publish/Subscribe (Source Wikipedia)

Régulation de la température

La régulation repose sur un capteur de température et un câble chauffant. Le capteur, branché sur l'Arduino, relève la valeur de température puis la publie sur un sujet MQTT auquel l'Arduino actionneur approprié est abonné. L'émetteur MQTT est donc l'Arduino capteur, et le récepteur est l'actionneur.

Câble chauffant dans un terrarium

Le câble chauffant est un actionneur de type « tout ou rien » : il doit donc être piloté par l'intermédiaire d'un relais. Un relais est un composant qui permet de laisser passer le courant ou non grâce à une simple impulsion électrique. Pour simplifier la mise en œuvre, il est possible d'utiliser un shield[1] relais avec l'Arduino actionneur. Le câble chauffant est placé dans le socle du terrarium.

En cas de température trop élevée, un récepteur connecté à une ventilation mécanique s'active pour extraire l'air chaud. Si la température extérieure dépasse 28 °C, le système de régulation devient inopérant. Il faut donc veiller à positionner le terrarium dans une pièce relativement fraîche.

Régulation de l'humidité

De la même manière que pour la température, la régulation de l'humidité s'appuie sur un capteur dédié et un actionneur. Dans le système proposé, il existe deux façons d'augmenter l'humidité : soit en utilisant un brumisateur à ultrasons pour une augmentation rapide, soit en activant la cascade pour une augmentation plus progressive.

Comme le câble chauffant, le brumisateur et la pompe fonctionnent comme des actionneurs de type « tout ou rien ». Ils sont donc eux aussi pilotés par l'intermédiaire de relais. Pour disperser la brume produite par le brumisateur à ultrasons, celui-ci est couplé à une ventilation mécanique de faible intensité (type ventilateur d'ordinateur).

Essai du Fogger

Comme pour la température, la ventilation mécanique ne peut pas être utilisée si l'atmosphère extérieure est trop humide.

Régulation de l'éclairage

Le seul paramètre de régulation de l'éclairage à ce stade est la durée d'allumage par période de 24 h. L'émetteur associé à cette fonction doit donc posséder une horloge RTC (Real Time Clock). Le récepteur qui commande l'activation de l'éclairage consulte régulièrement l'horloge pour déterminer quand ouvrir ou fermer le circuit.

Comme le câble chauffant, l'éclairage est un actionneur de type « tout ou rien » et doit donc être piloté par l'intermédiaire d'un relais.

##### Aménagement du terrarium

L'aménagement du terrarium doit répondre à des impératifs à la fois fonctionnels, techniques et esthétiques.

Structure générale

La structure du terrarium se compose de plusieurs éléments :

- Le socle

- Le circuit d'eau

- La réserve d'eau

- La galerie

- L'armoire technique

Schéma de principe de l'aménagement du terrarium

Le socle

Le socle du terrarium peut être constitué d'un double fond. Cette méthode n'a pas été utilisée pour le prototype et ne sera pas détaillée ici. Le socle créé pour le prototype est un assemblage de plaques de polystyrène recouvertes de mousse expansive, découpée selon les formes souhaitées, puis enduites de colle à carrelage. Le tout est ensuite recouvert de peinture acrylique marron mat, puis de vernis approprié (type Elastopur). L'ensemble est enfin recouvert de 3 à 6 cm de substrat imputrescible (par exemple : fibre de coco, sphaigne). Il est recommandé de prévoir des emplacements pour les plantes. Si ceux-ci sont sur le côté ou dans la mousse, les trous doivent disposer d'un conduit d'évacuation pour l'eau excédentaire.

Le terrarium doit comporter des éléments d'aménagement tels que des supports de plantes, des morceaux de bois imputrescibles et des cachettes. Les dendrobates étant territoriales, plusieurs cachettes sont nécessaires. Les plantes elles-mêmes peuvent servir de cachettes si elles sont suffisamment touffues. Un pot découpé verticalement peut également faire l'affaire.

Fabrication du socle

La réserve d'eau

Le bac à eau du prototype est intégré à l'intérieur du terrarium : un espace réservé a été découpé dans un coin et recouvert d'un morceau de polystyrène amovible afin de permettre l'accès à la pompe. Il faut veiller à ce que le niveau de la réserve reste suffisant.

Système de filtration du réservoir d'eau

Le circuit d'eau

Il est possible de construire une cascade ou d'aménager un ruisseau. L'eau doit s'écouler vers le réservoir (ou vers le fond s'il y a un double fond), où elle est filtrée et pompée vers le haut du circuit. Il faut veiller à ce que des poches d'eau stagnante ne se forment pas. Dans le prototype, l'eau remonte directement au-dessus du bac à eau et se déverse dans un bassin en hauteur.

Fabrication de la cascade

La galerie

La galerie se situe au-dessus du bac. Elle contient la rampe d'éclairage, l'aérateur et éventuellement certains capteurs. Elle est placée au-dessus du couvercle grillagé du terrarium.

L'armoire technique

L'armoire technique est la partie du terrarium où se trouvent toutes les cartes électroniques (principalement des Arduino et un Raspberry Pi). Elle doit être extérieure au bac principal pour ne pas être soumise à de fortes contraintes environnementales. Il faut prévoir dès le début le câblage des différents capteurs et actionneurs pour éviter les problèmes de longueur et de passage des câbles. L'intégration de cette armoire technique doit également prendre en compte le besoin d'accessibilité, afin de pouvoir intervenir sur le système après sa mise en service. On pourrait envisager d'ajouter des afficheurs pour contrôler l'état du terrarium sans accès à internet.

##### Développement informatique de la régulation

La régulation constitue l'élément central du fonctionnement du terrarium. Le système de régulation s'appuie sur l'architecture matérielle et logicielle du projet DomoduLAB. Dans l'implémentation actuelle, les différents sous-systèmes sont interconnectés par un réseau IP de type Ethernet.

![Système informatique du terrarium](/img/ressources/projets-du-lab/Systeme_informatique_terrarium.jpg)

##### Événements et actions

Le système doit se comporter comme un système réactif dans lequel chaque actionneur ne peut être activé qu'en réponse à un événement. Voici la liste des événements et les actions associées identifiés pour le prototype :

- La température passe en dessous de la température minimale
- Allumer le chauffage

- La température est convenable
- Éteindre le chauffage

- Éteindre le ventilateur principal et le brumisateur

- La température est trop élevée
- Allumer le ventilateur principal et le brumisateur

- L'hygrométrie relative est trop faible
- Allumer le brumisateur et le ventilateur associé

- L'hygrométrie relative est convenable
- Éteindre le brumisateur et le ventilateur associé

- Éteindre le ventilateur principal

- L'hygrométrie relative est trop élevée
- Allumer le ventilateur principal

- L'heure de début de période lumineuse est atteinte
- Allumer l'éclairage

- L'heure de fin de période lumineuse est atteinte
- Éteindre l'éclairage

À ces événements liés au fonctionnement automatique du vivarium, il faut ajouter une activation et une désactivation manuelles pour permettre à l'utilisateur de reprendre la main sur le système lorsqu'il le souhaite.

##### Implémentation du système réactif

Pour implémenter le système de régulation, le projet s'appuie sur le protocole MQTT. Le principe de fonctionnement de ce protocole repose sur un mécanisme de publication/souscription de messages, dans lequel les émetteurs ne destinent pas a priori les messages à des destinataires précis. Chaque tiers souhaitant être informé d'un message doit au préalable s'abonner auprès de son émetteur.

Ce protocole nécessite plusieurs sous-systèmes :

- Un broker pour dispatcher les informations (une carte Raspberry Pi).

- Des émetteurs pour les capteurs (une carte Arduino + shield Ethernet + capteur).

- Des récepteurs pour les actionneurs et l'affichage (une carte Arduino + shield Ethernet + actionneur ou afficheur).

Schéma de principe de l'architecture du système

Le code des émetteurs et des récepteurs se trouve sur GitHub : [InternetOfFrogs](https://github.com/carole-laitong/InternetOfFrogs)

L'interconnexion logicielle se fait grâce au logiciel Node-RED, qu'il faut installer sur le Raspberry Pi.

### Conclusion

![Internet Of Frogs](/img/ressources/projets-du-lab/InternetOfFrogs.jpg)

Ce projet est encore à l'état de prototype, mais depuis fin août 2015, il héberge trois grenouilles dendrobates qui semblent tout à fait satisfaites de leur habitat.

![Grenouilles sur le prototype](/img/ressources/projets-du-lab/Grenouilles_on_proto.jpg)

### Liens

- Projet DomoDuLAB

- [Site du projet Internet Of Frogs](http://www.internet-of-frogs.com/)

- [Github du projet](https://github.com/carole-laitong/InternetOfFrogs)

### Références

- [1] Dans l'écosystème Arduino, on appelle « shield » les cartes additionnelles qui viennent ajouter des fonctionnalités à l'Arduino. Il en existe un large éventail permettant de prototyper des systèmes de manière modulaire (comme des Lego).

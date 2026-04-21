# Terrarium pour dendrobate connecté

[InternetOfFrogs.jpg]

Les dendrobates vivent à une température d’environ 24 à 26 °C le jour (2° de moins la nuit); le milieu tropical est très humide: humidité relative de 70 à 80 %. Elles ne doivent pas être exposées à la lumière directe du soleil et nécessitent donc un éclairage artificiel adapté. Un éclairage dont le spectre contient des UVB n’est pas indispensable (contrairement aux reptiles), mais il favorise la croissance des grenouilles et des plantes. Le cycle jour/nuit peut être de 12 et 12 heures mais il est possible de l’inverser par rapport à la longueur du jour (jusqu’à 10/14h). Les changements importants et manipulations sont source de stress chez les animaux et sont donc à éviter.

Les dendrobates nécessitent un abreuvoir. Les points d’eau doivent être peu profond (inférieurs à 2 cm) afin qu’elles ne se noient pas. Pour augmenter l’humidité, il est possible de faire une cascade et/ou un petit bassin avec une pompe pour faire circuler l’eau. Pour éviter les proliférations bactériennes et fongiques, il ne faut pas laisser d’eau stagnante. Il est recommandé d’utiliser de l’eau en bouteille avec une composition minérale adaptée ou de l’eau filtrée pour éliminer le calcaire, les bactéries et les résidus de chlore.

Les parois du terrarium sont en verre pour une meilleure visibilité sous tous les angles. Il est surmonté d'une rampe d'éclairage et d'un aérateur. Toutes les ouvertures doivent être obturées par un grillage assez fin pour ne pas laisser s'enfuir les insectes vivants qui sont la source d'alimentation principale des grenouilles (classiquement des mouches du vinaigre (environ 2mm)).

Le nombre d’individus est à adapter en fonction de la taille du terrarium. Par exemple, dans terrarium moyen de 45 cm de coté, on peut maintenir de un à trois individus.

##### Fonctionnement du terrarium

Il doit être possible d’aérer, humidifier, chauffer et éclairer l’atmosphère du terrarium pour réguler l'environnement en fonction des besoins de l’écosystème qu’il abrite: des dendrobates, des plantes tropicales et des drosophiles emprisonnées dans une boîte comme nourriture pour les grenouilles.

Principe de fonctionnement

Le système de régulation s'appuiera sur l’architecture matérielle et logicielle du projet DomoduLAB. Les programmes Arduino du projet sont sur mon dossier github InternetOfFrogs (github.com/carole-laitong/InternetOfFrogs).

Cette architecture s’appuie sur le protocole MQTT. Comme indiqué plus haut, ce protocole s’appuie sur un principe de souscription. Chaque acteur souhaitant être notifié d’un événement (ce que l’on nommera récepteurs par la suite) doit s’abonner aux sujets qui l'intéressent. Régulièrement les capteurs publieront des données en les associant à des sujets particuliers. Ces capteurs poussant les données sur ces sujets seront nommé des émetteurs. Dans MQTT, il y a un troisième type d’acteur que l’on nomme le broker. Son rôle est de récupérer les données des émetteurs et de notifier tous les récepteurs qui souhaitent la recevoir.

[Illustration du principe Publish/Subscribe (Source Wikipedia)]

Régulation de la température

La régulation se base sur un capteur de température et un câble chauffant. Le capteur de température branché sur l'Arduino relève la valeur puis la publie sur un sujet MQTT auquel l’Arduino actionneur approprié est abonné. L’émetteur MQTT est donc l’Arduino capteur, et le récepteur l’actionneur.

[]  Câble chauffant dans un terrarium

Le câble chauffant est un actionneur du type “tout ou rien”: il faudra donc le piloter à travers d’un relais. Un relais, est un composant qui permet de laisser passer le courant ou non grâce à une simple impulsion électrique. Pour simplifier la mise en oeuvre, il est possible d’utiliser un shield[1] relais avec l’Arduino actionneur. Le câble chauffant se situera dans le socle du terrarium.

En cas de température trop élevée, un récepteur connecté à une ventilation mécanique s’activera pour extraire l’air chaud. Si la température de l'atmosphère extérieure est supérieure à 28°, le système de régulation deviendra inopérant. Il faudra donc veiller à positionner le terrarium dans une pièce relativement fraîche.

Régulation de l’humidité

De la même manière que pour le paramètre précédent, la régulation de l’humidité s’appuie sur un capteur dédié et un actionneur. Dans le système proposé, il y aura deux manière d’augmenter l’humidité. On pourra soit utiliser un brumisateur à ultrason pour augmenter rapidement l’humidité, soit activer la cascade pour l’augmenter plus doucement.

Comme pour le câble chauffant, le brumisateur et la pompe seront utilisés comme des actionneurs du type “tout ou rien”. Ils seront donc eux aussi pilotés à travers des relais. Pour disperser la brume produite par le brumisateur à ultrason, il sera couplé à une ventilation mécanique de faible intensité (type ventilateur d’ordinateur).

[]  Essai du Fogger

Comme pour la température, la ventilation mécanique ne pourra être utilisée si l’atmosphère extérieure est trop humide.

Régulation de l’éclairage

Le seul élément de régulation de l’éclairage à ce stade est le temps d’allumage par période de 24h. L’émetteur associé à cette fonction devra donc posséder une horloge RTC (Real Time Clock). Le récepteur qui commandera l’activation de l’éclairage, consultera régulièrement l’horloge pour savoir quand ouvrir ou fermer le circuit.

Comme le câble chauffant, l’éclairage est un actionneur du type “tout ou rien”, il faudra donc le piloter à travers un relais.

##### Aménagement du terrarium

La problématique de l’aménagement doit répondre à des impératifs autant fonctionnels et techniques qu’esthétiques.

Structure générale

La structure du terrarium se compose de plusieurs éléments :

- Le socle

- Le circuit d’eau

- La réserve d’eau

- La galerie

- L’armoire technique

[Schéma de principe de l’aménagement du terrarium]

Le socle

Le socle du terrarium peut être constitué d’un double fond. Cette méthode n’a pas été utilisée pour le prototype et ne sera pas détaillée dans ce document. Le socle créé pour le prototype est un ensemble de plaques de polystyrène. Ces plaques sont recouvertes de mousse expansive découpée selon les formes voulues puis recouvertes de colle à carrelage. Le tout est ensuite recouvert de peinture acrylique marron mat puis de verni approprié (type elastopur). Le tout sera recouvert de 3 à 6cm de substrat imputrescible (exemple: fibre de coco, sphaigne). Il est bien de prévoir des emplacements pour les plantes. S’ils sont sur le côté ou dans la mousse, il faudra que les trous disposent d’un tunnel d’évacuation de l’eau en excès.

Le terrarium doit présenter des ameublements tels que des supports de plantes, des bouts de bois (imputrescibles) et des cachettes. Les dendrobates étant territoriales, plusieurs cachettes sont nécessaires. Les plantes elles-mêmes peuvent servir de cachettes si elles sont assez touffues. Un pot découpé verticalement peut aussi faire l’affaire.

[]  Fabrication du socle
La réserve d’eau

Le bac à eau du prototype est intérieur, donc un espace réservé a été découpé dans un coin du terrarium et recouvert d’un morceau de polystyrène amovible, afin de permettre l’accès à la pompe. Il faudra veiller à ce que le niveau de la réserve reste suffisant.

[]  Système de filtration du réservoir d’eau
Le circuit d’eau

Il est possible de construire une cascade et/ou d’aménager un ruisseau. L’eau doit couler vers le réservoir (ou le fond s’il y a un double fond) où elle est filtrée et pompée vers le haut du circuit. Il faudra veiller à ce que des poches d’eau stagnante ne se créent pas. Dans le prototype, l’eau monte directement au-dessus du bac à eau et coule dans un bassin en hauteur

[]  Fabrication de la cascade
La galerie

La galerie se situe au-dessus du bac. Elle contient la rampe d’éclairage ainsi que l’aérateur et éventuellement certains capteurs. Elle est donc placée au-dessus du couvercle grillagé du terrarium.

L’armoire technique

L’armoire technique est la partie du terrarium où se situeront toutes les cartes électroniques (Principalement des Arduinos et un Raspberry Pi). Elle doit être extérieure au bac principal pour ne pas être soumise à des contraintes environnementales fortes. Il faut prévoir dès le début le câblage des différents capteurs/actionneurs pour ne pas avoir de difficulté de longueur et de passage. L’intégration de cette armoire technique devra prévoir aussi le besoin d’accessibilité pour pouvoir intervenir sur le système après sa mise en fonction. On pourrait imaginer ajouter des afficheurs pour permettre de contrôler l’état du terrarium sans accès à internet.

##### Développement informatique de la régulation

La problématique de la régulation est la clé du fonctionnement du terrarium. Le système de régulation s'appuie sur l’architecture matérielle et logicielle du projet DomoduLAB. Dans l’implémentation actuelle du système, les différents sous-systèmes sont interconnectés par un réseau IP de type Ethernet.

[Systeme informatique terrarium.jpg]

##### Événements/actions

Dans le principe, le système doit se comporter comme un système réactif ou chaque actionneur ne pourra être activé qu’en réponse à un événement. Voici la liste des événements et les actions associées que j’ai identifiés pour le prototype :

- La température passe en dessous de la température minimale
- Allumer le chauffage

- La température est convenable
- Éteindre le chauffage

- Éteindre le ventilateur principal et le brumisateur

- La température est trop haute
- Allumer le ventilateur principal et le brumisateur

- L'hygrométrie relative est trop faible
- Allumer le brumisateur et le ventilateur associé

- L'hygrométrie relative est convenable
- Éteindre le brumisateur et le ventilateur associé

- Éteindre le ventilateur principal

- L'hygrométrie relative est trop haute
- Allumer le ventilateur principal

- L’heure de début de période lumineuse est atteinte
- Allumer l’éclairage

- L’heure de fin de période lumineuse est atteinte
- Éteindre l’éclairage

À ces différents événements liés au fonctionnement automatique du vivarium, il faut aussi rajouter une activation/désactivation manuelle pour permettre à l’utilisateur de reprendre la main sur le système lorsqu’il le souhaite.

##### Implémentation du système réactif

Pour implémenter le système de régulation, le projet s’appuie sur le protocole MQTT. Le principe de fonctionnement de ce protocole est basé sur un mécanisme de publication/souscription de messages dans lequel les émetteurs ne destinent pas a priori les messages à des destinataires. Chaque tiers souhaitant être informé d’un message devra au préalable s’abonner à son émetteurs.

Ce protocole nécessite plusieurs sous systèmes :

- Un Broker pour dispatcher les informations (une carte Raspberry Pi).

- Des émetteurs pour les capteurs (une carte arduino + shield ethernet + capteur).

- Des récepteurs pour les actionneurs et l’affichage (une carte arduino + shield ethernet + actionneur ou afficheur).

[Schéma de principe de l’architecture du système]

Le code des émetteurs et des récepteurs se trouve sur mon github : [[1]](https://github.com/carole-laitong/InternetOfFrogs)

L’interconnexion logicielle se fait grace au logiciel NodeRed qu'il faut installer sur le Raspberry Pi.

### Conclusion

Ce projet est encore à l'état de prototype mais depuis fin aout 2015, il héberge 3 grenouilles dendrobates qui semblent pas malheureuses de leur habitat.

[Grenouilles on proto.jpg]

### Liens

-  Projet DomoDuLAB

- [Site du projet Internet Of Frogs](http://www.internet-of-frogs.com/)

- [Github du projet](https://github.com/carole-laitong/InternetOfFrogs)

### Références

- ↑ Dans l’écosystème Arduino, on appelle Shield les cartes additionnelle venant ajouter des fonctionnalités à l’Arduino. Il en existe un panel très large permettant de prototype des systèmes de manière modulaire (comme des Lego).

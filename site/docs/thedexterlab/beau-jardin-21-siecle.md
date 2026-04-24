---
id: beau-jardin-21-siecle
title: "Arrosage automatique d'une plante"
sidebar_label: "Arrosage automatique d'une plante"
sidebar_position: 1
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><path d="M3 20 L21 20 L21 22 L3 22 Z" fill="#1a4a48" opacity="0.25"/><path d="M12 4 Q7 8 7 14 Q7 18 12 20 Q17 18 17 14 Q17 8 12 4 Z" fill="#1a4a48" opacity="0.1"/><path d="M12 20 L12 10" stroke="#1a4a48" strokeWidth="1.5" opacity="1.0"/><path d="M12 12 Q9 10 8 7" stroke="#1a4a48" strokeWidth="1.5" fill="none" opacity="1.0"/><path d="M12 14 Q15 12 16 9" stroke="#1a4a48" strokeWidth="1.5" fill="none" opacity="1.0"/><circle cx="8" cy="7" r="1.2" fill="#1a4a48" opacity="1.0"/><circle cx="16" cy="9" r="1.2" fill="#1a4a48" opacity="1.0"/></svg> Arrosage automatique d'une plante

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Biologie</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Mathématiques</span>
  <span className="badge badge--primary">Physique</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--info">Capteur humidité du sol</span>
  <span className="badge badge--info">Servomoteur</span>
  <span className="badge badge--secondary">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| The Dexter Lab | 3-4 heures | Intermédiaire | 12-18 ans |

**Problématique :** Comment irriguer automatiquement une plante ?

## Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 1 écran OLED (SSD1306)
- 1 plante
- 1 paille
- 1 capteur d'humidité du sol
- 1 servomoteur
- 1 breadboard
- Des câbles de connexion
- 1 câble USB - micro B

<a href="/pdf/thedexterlab/PR1-TDL_Feuille_Travail_Vierge_A3.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger la feuille de travail</a>

</div>

</div>

---

:::info
Avec les enjeux actuels liés au changement climatique, entraînant des vagues de chaleur asséchant le sol et épuisant les nappes souterraines, l'eau devient une denrée rare, faisant l'objet de mesures de restriction de plus en plus régulières. L'arrosage du jardin ou des plantes d'intérieur, en période de restriction d'eau doit donc se faire de manière rationnelle afin de ne pas gaspiller une ressource sur laquelle repose d'ores et déjà beaucoup de pression.
:::

## Déroulé de l'activité

Le projet consiste à **construire un système d'arrosage autonome** pour les plantes d'intérieur. La donnée décisive pour choisir d'arroser une plante est **l'humidité du sol, qui est liée à une quantité physique facile à mesurer : la conductivité électrique du sol**. Nous allons donc construire un dispositif qui mesure la **conductivité** du sol et mettra en fonction un système d'arrosage distribuant la juste quantité d'eau à chaque plante.

Une fois que l'on connaît la conductivité du sol, la détermination de la **quantité d'eau nécessaire** à la plante dépend de plusieurs facteurs : **le type de plante, la température de l'air, la qualité du sol, la période de l'année, etc.** Nous devrons donc collecter des données et mener plusieurs expériences pour **calibrer au mieux** notre système d'arrosage économe en eau.

Cette activité vise à questionner les élèves sur les variables à prendre en considération dans l'arrosage des plantes.

Avec les enjeux actuels liés au changement climatique, entraînant des vagues de chaleur asséchant le sol et épuisant les nappes souterraines, l'eau devient une denrée rare, faisant l'objet de mesures de restriction lorsque les épisodes de canicule s'intensifient. L'arrosage du jardin ou des plantes d'intérieur, en période de restriction d'eau doit donc se faire de manière rationnelle afin de ne pas gaspiller une ressource sur laquelle repose d'ores et déjà beaucoup de pression.

## Compétences mobilisées

En mettant en œuvre une expérience par eux-mêmes, les élèves mobiliseront plusieurs compétences :

- Biologie : définir et analyser scientifiquement le **concept de développement durable** afin d'apprécier son importance, comprendre l'importance d'une **utilisation rationnelle des ressources naturelles**, proposer des solutions diverses à des **problématiques environnementales**
- Biologie : aborder les concepts de **conductivité du sol**
- Technologie : utiliser une **carte programmable** et des capteurs afin de collecter des **données numériques**, approcher les **technologies d'automatisation**
- Mathématiques : analyser des données de manière **statistique**
- Technologie ou ingénierie, mathématiques : utiliser une **feuille de calcul**, analyser des données, réaliser des **graphiques** et des **diagrammes** afin de visualiser les données et de décrire ces conclusions
- Transdisciplinaire : **savoir modéliser, comprendre, formaliser, partager, construire, investiguer, prouver son hypothèse**
- Physique : formuler une hypothèse et conduire une **expérimentation basée sur la méthode scientifique** pour conclure si elle est correcte ou non.

Afin de comprendre le fonctionnement de l'irrigation et de l'arrosage des plantes, les élèves devront suivre les étapes de l'investigation scientifique en gardant à l'esprit les 4 phases suivantes :

- **Définir les variables permettant de mesurer l'humidité** : définir les données à collecter selon l'identification de variables mesurables pertinentes pour mener cette expérimentation.
- **Construire un outil de collecte de données** permettant d'analyser les variables définies
- Construire un **outil d'arrosage automatique**
- **Mesurer et analyser les données**
- **Conclure**

## Étape 1 : collecter des données

### Orientation

La croissance optimale d'une plante dépend de plusieurs paramètres tels que la lumière, la température, les nutriments à disposition et l'eau. Quelles sont les mesures essentielles que nous devons effectuer pour assurer une bonne croissance ?

Pour comprendre les phénomènes et apporter une réponse même partielle à la question précédente, il faut étudier un paramètre à la fois. Celui qui est choisi est la quantité d'eau distribuée à la plante. Comment déterminer que la plante a besoin d'eau ? Et surtout, comment un système automatique peut-il s'en servir pour distribuer de l'eau si nécessaire ?

### Conceptualisation

Pour vivre, une plante a besoin d'eau. La grande majorité de cette eau est absorbée par ses racines. La quantité d'eau disponible dans le sol est donc celle que la plante va absorber pour répondre à ses besoins. Pour savoir si la plante dispose d'eau, il faudra donc mesurer si le sol autour de notre plante est plus ou moins humide. Certaines plantes ont besoin de très peu d'eau (par exemple, les cactus), d'autres doivent être immergées presque en permanence (par exemple, les papyrus) et d'autres encore ont besoin d'une quantité intermédiaire pour que le sol ne soit ni trop sec ni trop humide (par exemple, les impatiens). Pour savoir si la quantité d'eau disponible dans le sol est adaptée au besoin de la plante choisie, l'humidité va être mesurée à l'aide d'un capteur spécifique à l'humidité du sol.

:::info
La photosynthèse est un processus de **biosynthèse** qui exploite l'énergie du soleil avec des substances organiques (eau, CO2, oxygène) pour la **transformer en énergie chimique**. Elle est utilisée par les plantes, algues, cyanobactéries et certaines bactéries.

La photosynthèse **absorbe le dioxyde de carbone produit par les organismes photosynthétiques** et réintroduit de l'oxygène dans l'atmosphère.
:::

### Investigation

Un capteur d'humidité du sol fonctionne en mesurant la conductivité, c'est-à-dire la capacité à conduire un courant. L'eau étant un conducteur, plus un sol va être humide (*i.e* plus la quantité d'eau augmente), plus sa conductivité sera grande. Inversement, plus un sol sera sec (*i.e* moins il contiendra d'eau), plus la conductivité sera petite.

Le sol contient une grande quantité de sels (utilisés par la plante en tant que nutriments) qui, en présence d'eau, se dissolvent et libèrent les ions dont il est composé. Les ions sont des particules chargées (positivement ou négativement) qui peuvent être mises en mouvement lorsqu'elles sont soumises à une différence de potentiel, ce qui crée un courant électrique. La dissolution des sels dans l'eau va donc modifier la conductivité de l'eau en l'augmentant. Plus il y a d'eau, plus les nutriments peuvent se dissoudre (et donc plus d'ions libres dans l'eau), plus la conductivité augmente. Ainsi, même en arrosant un sol avec une eau pure non conductrice, on peut mesurer l'évolution de l'humidité du sol grâce à la conductivité.

Concrètement, le capteur ressemble à une fourche que l'on plante dans le sol.

### Débriefing

Avec le programme de la fiche précédente, il est possible de relever les valeurs de la conductivité (entre 0 et 1023) pour estimer l'humidité du sol d'une plante en pot.

La mesure de la conductivité est très sensible aux contacts. Ainsi, la profondeur de la fourche dans le sol va modifier la mesure, et si le sol est plus ou moins compacté, la mesure va également changer. Pour ces raisons, le capteur d'humidité du sol ne donne pas une mesure très précise mais il est suffisant pour connaître l'évolution de l'humidité.

Nous pouvons déjà mesurer l'humidité de différentes plantes pour obtenir des valeurs de référence pour caractériser l'humidité du sol d'une plante (très sec, sec, légèrement humide, humide, très humide, mouillé).

## Étape 2 : transformer les mesures en informations utiles pour l'arrosage

### Orientation

Nous avons vu comment effectuer une mesure analogique par le capteur d'humidité. Il faut maintenant mettre en relation cette valeur (entre 0 et 1023) avec le taux d'humidité. La relation n'est pas directe, puisque la conductivité dépend de plusieurs paramètres. Nous devons aussi qualifier l'état du sol en fonction de la plante : le même sol au même taux d'humidité sera peut-être à considérer comme trop humide pour un cactus mais trop sec pour un papyrus.

### Conceptualisation

Nous devons étalonner notre appareil de mesure, c'est-à-dire surveiller la conductivité sur plusieurs cycles d'arrosage "manuels" afin de décider quelles valeurs de conductivité devront par la suite déclencher un arrosage automatique. Afin d'identifier les besoins en eau de la plante, nous devons arroser la plante "normalement" pendant plusieurs cycles, en notant bien la valeur mesurée de la conductivité avant et après chaque arrosage.

### Investigation

Dans le cadre de ce projet, nous voulons pouvoir arroser une plante pour qu'elle ne se fane pas, nous n'utiliserons donc pas de valeurs en tant que telles (qui ne sont de toute façon pas très précises), mais plutôt des intervalles de valeurs. Il semble raisonnable de définir trois intervalles distincts :

- Sec (il faut arroser)
- Moite (tout va bien)
- Humide (on vient d'arroser)

Pour rappel, plus la valeur est faible, plus le sol est sec. Pour information, voici les mesures obtenues avec ces trois situations extrêmes :

- Sol très sec (adapté à un cactus) : environ 20
- Sol moite (adapté à un iris) : environ 550
- Sol très humide (adapté à un papyrus) : environ 700

Comme la mesure de la conductivité dépend de la quantité d'eau mais aussi de la quantité d'ions disponibles, la valeur peut changer en fonction du sol, c'est-à-dire qu'à humidité égale, le milieu plus riche en ions donnera une valeur plus élevée.

Le programme résultant pour un iris est écrit comme suit et l'écran affiche (selon les 3 cas) si le sol est trop sec, correct ou trop humide.

### Débriefing

Grâce à un capteur bon marché et simple d'utilisation, nous pouvons obtenir l'état d'humidité du sol au pied d'une plante. Bien que la mesure ne soit pas précise et assez relative, elle est suffisante pour le cas qui nous intéresse ici. De plus, il permet de bien comprendre le concept d'étalonnage de la mesure (même très simplifié) et l'importance d'une valeur de référence.

## Étape 3 : commander un servomoteur

### Orientation

Maintenant que notre appareil nous dit quand l'arrosage devrait se déclencher, il faut construire le système d'arrosage lui-même. Notre solution utilisera un servomoteur (un moteur qui peut déplacer son axe dans une position angulaire déterminée), et nous allons donc voir comment contrôler le servomoteur.

### Investigation

Afin d'utiliser le servomoteur, il est indispensable de se familiariser avec son fonctionnement. Nous vous proposons comme activité simple : de réaliser un circuit avec le servomoteur et de le programmer pour qu'il se positionne à différents angles.

### Débriefing

Les élèves sont maintenant capables d'utiliser et de commander un servomoteur, qu'ils utiliseront dans la prochaine étape du système d'irrigation. Le choix du servomoteur n'a pas été fait au hasard. En effet, le servomoteur ne nécessite pas d'autres accessoires (alimentation externe, transistor de puissance, relais…) et son utilisation est très simple. Il est candidat pour de nombreuses applications nécessitant de mettre des objets en mouvement et son utilisation se retrouve dans de nombreux autres projets amateurs.

## Étape 4 : créer un système d'arrosage autonome

### Orientation

Comment votre dispositif va-t-il amener l'eau à une installation domestique ? Les solutions techniques sont nombreuses et variées, par exemple avec une pompe, une électrovanne ou une vis d'Archimède construite en 3D. Le dispositif proposé va écoper l'eau d'un récipient en utilisant une paille qui sera actionnée par le servomoteur.

### Conceptualisation

Le servomoteur fait tourner la paille par sa partie centrale : d'un côté, la paille est pliée en forme de cuillère et recueille un peu d'eau, et de l'autre côté, elle verse cette eau dans le bac à plantes. Quelle quantité d'eau recueille-t-elle à chaque mouvement de rotation ? Nous devrons ajuster le programme pour que la quantité d'eau soit correcte en fonction de notre étalonnage.

### Investigation

Maintenant, nous pouvons assembler les deux parties pour mettre en place le système d'arrosage automatique : il suffit de couper la paille à la bonne longueur, de lui donner la forme d'un "L" avec le joint et de l'attacher au servomoteur avec un trombone ou un fil. Le capteur d'humidité est enfoncé dans le sol.

### Débriefing

Partant du principe que pour avoir un jardin économe en eau, il fallait être capable de déterminer les besoins hydriques de la plante, nous avons un **système d'arrosage automatique**. Ce système est constitué de deux parties distinctes. La première dédiée à déterminer "si la plante a soif" en utilisant la conductivité pour estimer l'humidité du sol. La seconde s'occupe de satisfaire au besoin de la plante en apportant "la juste quantité d'eau". Un autre système d'apport d'eau aurait pu être créé avec une pompe et un relais par exemple. Celui que nous avons choisi a l'avantage de n'utiliser qu'un simple servomoteur, ce qui le rend très bon marché et facile à mettre en œuvre. Les étudiants peuvent mesurer la quantité d'eau absorbée à chaque coup de paille pour suivre les besoins en eau de différentes plantes ou pour observer l'impact des conditions environnementales telles que la lumière, la température et l'humidité de l'air sur la consommation d'eau. Ils peuvent également formuler de nouvelles hypothèses pour réaliser de nouveaux protocoles en se servant de celui-ci comme base.

## Programmation

Les fiches techniques de programmation (câblage, code, extensions MakeCode) sont regroupées dans une fiche dédiée : [Programmation : Beau jardin au 21e siècle](/ressources/thedexterlab/programmation/programmation-beau-jardin-21-siecle).


---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

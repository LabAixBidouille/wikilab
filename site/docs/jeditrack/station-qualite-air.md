---
id: station-qualite-air
title: "Station qualité de l'air"
sidebar_label: "Station qualité de l'air"
sidebar_position: 6
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><circle cx="12" cy="12" r="10" fill="#1198f0" opacity="0.1"/><path d="M6 10 Q9 6 12 10 Q15 14 18 10" fill="none" stroke="#1198f0" strokeWidth="1.5" opacity="0.25"/><path d="M6 13 Q9 9 12 13 Q15 17 18 13" fill="none" stroke="#1198f0" strokeWidth="1.5" opacity="0.25"/><path d="M6 16 Q9 12 12 16 Q15 20 18 16" fill="none" stroke="#1198f0" strokeWidth="1.5"/><circle cx="5" cy="7" r="1.2" fill="#1198f0" opacity="0.25"/><circle cx="19" cy="7" r="0.8" fill="#1198f0"/><circle cx="12" cy="5" r="1" fill="#1198f0" opacity="0.25"/></svg> Station qualité de l'air

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Informatique</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| JediTrack | ~4h | Intermédiaire | 12-18 ans |

## Matériel

**Matériel obligatoire :**

- micro:bit x1
- Shield Grove micro:bit x1
- Lecteur OpenLog x1
- Carte micro-SD x1
- Écran I2C Grove x1
- Câbles Grove
- Adaptateur Grove/Dupont x1
- Câbles Dupont femelle/femelle x4

**Matériel optionnel :**

- Boîtier pour la station x1
- DHT11 Grove (capteur de température et d'humidité) x1
- HM3301 Grove (capteur de particules fines) x1
- Capteur de gaz multicanal Grove V2 (capteur de gaz) x1
- Rallonge I2C Grove x1
- Batterie externe (power bank) x1

</div>


<img src="/img/ressources/jeditrack/station-qualite-air/icone.png" alt="Station qualité de l'air" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

Afin de mesurer la qualité de l'air en ville, cette activité propose la fabrication et la programmation d'une station de mesure comprenant différents capteurs. Cette station se veut modulaire, pour correspondre au mieux selon le matériel disponible et les objectifs de mesure. Il sera également possible, après la création de la station de mesure, de l'utiliser en conditions réelles et d'effectuer des mesures dans les environs, et d'effectuer une analyse des données récoltées.

### Objectifs pédagogiques

- Assembler une station de mesure et la programmer
- Apprendre à formuler des hypothèses, et réaliser une expérience en suivant la démarche scientifique

### Tranche d'âge

A partir de 10 ans

### Durée

3h-7h

Une liste exhaustive d'où trouver les composants est disponible dans la section "Références et liens utiles" présente à la fin de ce document. Sera également présente une archive zip contenant différents modèles 3D et dessins vectoriels (pour découpe laser) que nous avons utilisés pour réaliser un boîtier pour la station.

## Déroulé de l'activité

---

| **Phase** | **Description** | **Durée** |
| --- | --- | --- |
| 1 | Montage de la station de mesure | 1h |
| 2 | Programmation de la station de mesure | 2h |
| 3 | Réalisation des mesures (optionnel) | 1-3h |
| 4 | Interprétation des résultats (optionnel) | 30m-1h |

### PHASE 0 : PRÉPARATIFS

---

Si vous souhaitez créer un boîtier pour la station de mesure en vue de de faire une excursion pour utiliser cette dernière, et que vous souhaitez utiliser les modèles 3D donnés en annexe, nous vous conseillons de pré-assembler celle-ci avant le début de l'activité.

Également, nous vous conseillons de rassembler tout le matériel nécessaire pour chaque station, afin de faciliter la phase de montage pour les jeunes.

Enfin, si vous souhaitez réaliser la phase de mesures en extérieur, nous vous recommandons de prévoir l'itinéraire à l'avance afin de, si les environs le permettent, de prendre des mesures dans des lieux plus ou moins pollués (grande avenue, parc, forêt, etc...).

### PHASE 1 : MONTAGE DE LA STATION DE MESURE

---

**Objectifs :**

- Comprendre le rôle de chaque composant utilisé
- Être capable de suivre des instructions

**Description :**

Les étapes de montage sont séparées en plusieurs sections, une pour la base de la station et une pour chaque capteur optionnel. Toutefois, il convient de noter que la carte micro:bit n'embarque qu'un thermomètre comme capteur de "qualité de l'air". Nous vous invitons à utiliser le plus de capteurs possibles afin de diversifier vos types de mesures et rendre l'expérience la plus intéressante possible.

Montage de la base de la station :

1. Connectez la carte micro:bit au shield grove
2. Connectez la rallonge I2C au port I2C du shield grove
3. Connectez l'écran à l'un des ports de la rallonge I2C
4. Pour le lecteur de carte micro-sd OpenLog, il vous faut suivre les étapes suivantes :
    1. Connectez un câble grove à un adaptateur grove / dupont
5. Connectez 4 câbles dupont aux 4 broches dupont de l'adaptateur et aux broches RXI, TXO, VCC et GND de l'OpenLog, de sorte que les broches RXI, TXO, VCC et GND soient respectivement connectées aux fils jaunes, blancs, rouges et noirs du câbles grove
6. Connectez le câble grove à la broche P1/P15 du shield grove

Ajouter le DHT11 :

Le DHT11 est un capteur de température et d'humidité (relative) de l'air. Ce capteur n'est pas d'une grande précision (plus ou moins 1°C pour la température, plus ou moins 5% pour l'humidité relative), mais est suffisant pour notre cas d'utilisation.

Pour connecter le DHT11 à la station, connectez-le à la broche P0/P14 du shield grove.

Ajouter le HM3301 :

Le HM3301 est un capteur de particules fines, capable de mesurer la quantité de celles-ci dans l'air, en microgrammes par mètre cube. Le capteur est capable de mesurer trois types de particules fines : celles mesurant jusqu'à 10 micromètres, celles mesurant jusqu'à 2.5 micromètres et celles mesurant jusqu'à 1 micromètre. Plus les particules fines sont petites, plus elles restent en suspension dans l'air longtemps, plus elles subissent de transformation chimiques et plus elles peuvent pénétrer dans l'organisme.

Pour connecter le HM33O1 à la station, connectez-le à l'un des ports de la rallonge I2C.

Ajouter le capteur de gaz multicanal :

Le capteur de gaz multicanal est un capteur capable de mesurer différents gaz et particules dans l'air, à savoir le monoxyde de carbone (CO), le dioxyde d'azote (NO2), les composés organiques volatiles (COV) et les vapeurs d'éthanol (C2H5OH).

Ici, les vapeurs d'éthanol ne nous intéressent pas, mais les autres gaz et les COV, produits entre autres par la combustion de carburants par les voitures, sont des indicateurs intéressants sur la qualité de l'air. Cependant, ce capteur ne donne pas directement les concentrations de ces gaz, mais une valeur en volt (V). Ce capteur n'est donc intéressant que pour comparer le taux des différents gaz et des COV entre différents endroits, de manière qualitative et non quantitative.

Pour connecter le capteur de gaz multicanal à la station de mesure, connectez-le à l'un des ports de la rallonge I2C.

<img src="/img/ressources/jeditrack/station-qualite-air/image.png" alt="Schéma de connexion de la station de mesure" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

:::info[Le protocole I2C]
L'I2C, pour Inter-Integrated Circuit en anglais, est un protocole de communication utilisé en électronique pour communiquer entre différents appareils. A l'instar du système postal pour la livraison de courrier, ce système utilise des adresses, ce qui permet d'utiliser le même câble pour communiquer entre les différents appareils, en ne délivrant les messages qu'aux appareils à la bonne adresse. C'est pourquoi il n'y a qu'un seul port I2C sur le shield grove, et que tous les composants I2C sont reliés à ce port via la rallonge I2C, comme si les câbles étaient des rues, les appareils des maisons et le port I2C du shield grove la poste.
:::

### PHASE 2 : PROGRAMMATION DE LA STATION DE MESURE

---

**Objectifs :**

- Comprendre la logique du programme
- Arriver à implémenter une ou plusieurs fonctionnalités

**Description :**

Le programme va avoir deux objectifs principaux : d'une part afficher les données mesurées par les capteurs en temps réel, et d'autre part d'enregistrer ces données sur une carte micro-sd, que ce soit à intervalles réguliers où lors d'un événement particulier (comme l'appui d'un bouton par exemple), pour pouvoir les analyser plus tard.

La programmation de la station se fera sur la plateforme Vittascience, section Programmer -> micro:bit : [https://fr.vittascience.com/microbit/](https://fr.vittascience.com/microbit/)

Le programme est expliqué étape par étape ci-après, mais il convient de noter qu'il est plus intéressant de laisser les jeunes expérimenter et chercher par eux-mêmes avant de leur donner la solution. La solution expliquée ici est avant tout destinée à l'animateur pour qu'il comprenne bien le programme pour pouvoir l'expliquer aux jeunes.

Affichage des données en temps réel :

L'écran de la station de mesure permet d'afficher deux lignes de 16 caractères chacune. Il n'est donc pas possible, ou peu pratique, d'afficher toutes les données mesurées en même temps sur l'écran.

Une méthode que nous proposons est de pouvoir "cycler" sur les différentes mesures relevées, c'est-à-dire d'afficher en continu le mesure d'un seul des capteurs et, lorsqu'un bouton est appuyé, de changer de mesure affichée, et ainsi de suite pour toutes les mesures. Ainsi, le programme doit "se rappeler" de quelle mesure il est en train d'afficher, et pour ça nous utilisons une variable.

Une variable est un espace mémoire accessible par le programme, qui permet de stocker une information. Pour créer une variable, vous devez aller dans la catégorie **Variables,** puis cliquer sur le bouton **Créer une variable**, que nous nommerons ici **mode_affichage**. Cette variable permettra de faire correspondre un nombre (0, 1, 2, etc...) à une mesure effectuée par la station (température, humidité, particules fines, etc...).

Au début du programme, il faut initialiser la variable à l'aide du bloc suivant, également présent dans la catégorie **Variables** :

<img src="/img/ressources/jeditrack/station-qualite-air/image_1.png" alt="Bloc d'initialisation de la variable" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

Maintenant que la variable est initialisée, il faut pouvoir modifier sa valeur pour "cycler" à travers les différentes mesures de la station lors de l'appui sur un bouton. Pour cela, nous allons utiliser la boucle principale du programme, nommée **Répéter indéfiniment** :

<img src="/img/ressources/jeditrack/station-qualite-air/image_2.png" alt="Bloc Répéter indéfiniment" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

Dans cette boucle, nous allons vérifier si le **bouton A** de la micro:bit a été appuyé, et si c'est le cas, nous augmenterons la valeur de la variable **mode_affichage** de 1 :

<img src="/img/ressources/jeditrack/station-qualite-air/image_3.png" alt="Bloc de vérification du bouton A" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

Ce programme a un problème, qui est que la valeur de **mode_affichage** ne cesse de grandir. Or, si 0 correspond à la température, 1 à l'humidité, et 2 au taux de particules fines, à force d'appuyer sur le bouton A la valeur de **mode_affichage** sera 3, puis 4, et ainsi de suite. Il faut donc trouver un moyen de remettre la valeur de **mode_affichage** à 0 lorsque celle-ci devient plus grande que le nombre de mesures effectuées par la station. Dans notre cas, nous mesurons :

- la température
- l'humidité relative
- le bruit ambiant
- les particules fines d'un diamètre inférieur ou égal à 10 micromètres (PM10)
- les PM2.5
- le NO2
- le CO
- les COV

Donc, il nous faudra remettre mode_affichage à 0 quand celle-ci sera supérieure à 7 (nous avons 8 mesures, mais commençons à compter à partir de 0) :

<img src="/img/ressources/jeditrack/station-qualite-air/image_4.png" alt="Bloc de remise à zéro de mode_affichage" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

Il faut maintenant "relier" la variable **mode_affichage** aux mesures effectuées par la station, c'est-à-dire d'afficher la bonne mesure selon la valeur de la variable. Pour cela, nous pouvons utiliser un bloc **si, sinon si, sinon** présent dans la catégorie **Logique**, qui vérifie si **mode_affichage** vaut telle ou telle valeur, et effectuer l'affichage correspondant :

<img src="/img/ressources/jeditrack/station-qualite-air/image_5.png" alt="Bloc conditionnel si/sinon si/sinon" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

Il suffit maintenant d'afficher la bonne mesure sur l'écran LCD selon le cas dans lequel on se trouve. Pour cela, il faut utiliser le blocs suivants, présents dans la catégorie **Affichage** :

<img src="/img/ressources/jeditrack/station-qualite-air/image_6.png" alt="Blocs d'affichage LCD" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

L'écran LCD est composé de deux lignes de 16 caractères. Nous proposons d'afficher sur la première ligne la mesure affichée (température, humidité, etc...), et sur la seconde la valeur mesurée, comme par exemple ici pour la température :

<img src="/img/ressources/jeditrack/station-qualite-air/image_7.png" alt="Exemple d'affichage de la température sur l'écran LCD" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

Pour compléter le programme, tous les blocs de mesure se trouvent dans la catégorie **Capteurs**, excepté le bloc de mesure de l'intensité sonore qui se trouve dans la catégorie **Entrées/Sorties**.

Il suffira ensuite d'ajouter au programme une instruction pour effacer l'écran au début de la boucle (ou sinon les caractères vont s'empiler sur l'écran), et une pause à la fin de la boucle afin de laisser le temps de voir ce qui est affiché à l'écran. Le programme est alors le suivant :

<img src="/img/ressources/jeditrack/station-qualite-air/image_8.png" alt="Programme complet d'affichage" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

Sauvegarde des données sur la carte micro-sd :

La sauvegarde des données sur la carte micro-sd se fait grâce au lecteur OpenLog. Il permet de stocker des données sous forme de fichier texte sur la carte micro-sd, dans des fichiers nommés logXXXXX.TXT (avec X étant des chiffres).

Pour écrire sur la carte micro-sd, il faut utiliser le bloc suivant, présent dans la catégorie **Communication** :

<img src="/img/ressources/jeditrack/station-qualite-air/image_9.png" alt="Bloc d'écriture sur la carte micro-sd" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

Comme on peut le voir dans le bloc, les données à écrire sur la carte micro-sd sont séparées par des points-virgule. En effet, pour pouvoir exploiter correctement les données, il faut les formater d'une certaine façon. Ce formatage s'appelle CSV, pour Comma Separated Values en anglais, et permet la représentation textuelle d'un tableau de données, où chaque ligne est séparée par un retour à la ligne et chaque colonne par un caractère de séparation, ici un point-virgule. Ci-après un exemple de fichier au format CSV :

**nom;prénom;date de naissance**

**Bocuse;Arnaud;30/03/1997**

**Leloup;Davy;14/02/1968**

**Neri;Régis;07/09/1990**

---

Dans notre cas, nous allons enregistrer les 8 mesures citées plus haut. Il faut donc, au démarrage du programme, écrire sur la carte micro-sd les en-tête des colonnes correspondantes :

<img src="/img/ressources/jeditrack/station-qualite-air/image_10.png" alt="Bloc d'écriture des en-têtes CSV" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

Ensuite, nous avons choisi d'enregistrer une nouvelle donnée sur la carte micro-sd à chaque fois que le bouton B de la micro:bit est appuyé. Vous pouvez aussi modifier le programme pour prendre une mesure toutes les x périodes de temps (pensez à rajouter dans les données enregistrées le temps correspondant à chaque mesure). Dans notre cas, on vérifie donc à chaque tour de boucle si le bouton B a été appuyé, et auquel cas on enregistre les données sur la carte micro-sd et on affiche un message sur l'écran pour confirmer que les données ont bien été enregistrées (notez que le programme de la section précédente a été masqué ici pour des questions de lisibilité) :

<img src="/img/ressources/jeditrack/station-qualite-air/image_11.png" alt="Bloc d'enregistrement des données sur bouton B" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

Le programme final complet peut être retrouvé en suivant le lien suivant :

[https://fr.vittascience.com/microbit/?link=667ebb07071a6](https://fr.vittascience.com/microbit/?link=667ebb07071a6)

### PHASE 3 : RÉALISATION DES MESURES (OPTIONNEL)

---

**Objectif :**

Tester l'hypothèse, à savoir si la qualité de l'air change en fonction de l'activité humaine environnante.

**Description :**

L'objectif de cette étape est de faire faire des mesures aux jeunes avec les stations de mesures qu'ils ont fabriquées et programmées.

Si vous avez choisi de prendre des mesures de manière ponctuelle (à l'appui d'un bouton), assurez vous bien de noter les points de mesure lors de la préparation de l'itinéraire.

Si vous avez préféré implémenter les mesures prises à intervalles réguliers, notez le temps mis pour atteindre chaque point d'intérêt, afin de pouvoir relier le temps enregistré dans les données à ces points d'intérêts et ainsi retracer avec plus ou moins de précision les mesures selon le trajet effectué.

### PHASE 4 : INTERPRÉTATION DES RÉSULTATS (OPTIONNEL)

---

**Objectif :**

Analyser les résultats, afin d'affirmer ou d'infirmer l'hypothèse.

**Description :**

Ici, nous avons préféré ne pas vraiment utiliser de formules mathématiques ou de concepts d'analyse de données poussées, car cela n'est pas vraiment nécessaire. Il peut cependant être intéressant de regrouper les données des différentes stations afin d'en faire une moyenne, pour essayer de diminuer l'imprécision des mesures.

L'objectif ici est d'essayer de voir s'il existe une corrélation entre les niveaux de polluants mesurés et l'activité humaine (notamment le transport routier) aux points de mesure. Lors des tests que nous avons effectués, nous n'avons malheureusement pas vu de différence significative entre les points de forte et de faible activité humaine.

Cette conclusion peut être frustrante pour les jeunes. Dans ces cas-là, il faut expliquer que cette activité s'inscrit dans l'esprit de la démarche scientifique, et que ce n'est pas parce qu'on formule des hypothèses plausibles que celles-ci sont vraies. Il est également possible que l'expérience effectuée présente un biais, un défaut qui l'empêche de répondre correctement à l'hypothèse proposée. Par exemple, nous n'avions fait prendre qu'une seule mesure aux jeunes par point d'intérêt, et avions eu seulement 6 ou 7 points d'intérêts. Il est possible que nous n'ayons pas assez pris de données pour pouvoir en faire une analyse correcte.

## Références et liens utiles

---

Lien vers l'archive zip du boîtier de la station : [https://drive.google.com/file/d/1eEqfA9jsekhII7OHwHJh6-rs1cf3e_EA/view?usp=drive_link](https://drive.google.com/file/d/1eEqfA9jsekhII7OHwHJh6-rs1cf3e_EA/view?usp=drive_link)

Un kit complet avec tous les composants nécessaires à l'activité peut s'acheter via ce lien : [https://fr.vittascience.com/shop/171/qualite-d-air---version-micro-bit](https://fr.vittascience.com/shop/171/qualite-d-air---version-micro-bit)

Sinon, la liste exhaustive de tous les composants est la suivante :

| **Nom** | **Lien** |
| --- | --- |
| **micro:bit** | [https://www.mouser.be/ProductDetail/microbit/MEFV2S](https://www.mouser.be/ProductDetail/microbit/MEFV2S) |
| **micro:bit grove shield** | [https://www.mouser.be/ProductDetail/Seeed-Studio/103100063](https://www.mouser.be/ProductDetail/Seeed-Studio/103100063) |
| **lecteur Openlog** | [https://www.mouser.be/ProductDetail/SparkFun/DEV-13955](https://www.mouser.be/ProductDetail/SparkFun/DEV-13955) |
| **écran I2C grove** | [https://www.mouser.be/ProductDetail/Seeed-Studio/104020111](https://www.mouser.be/ProductDetail/Seeed-Studio/104020111) |
| **adaptateur grove / dupont** | [https://www.mouser.be/ProductDetail/M5Stack/A099](https://www.mouser.be/ProductDetail/M5Stack/A099) |
| **câbles grove** | [https://www.mouser.be/ProductDetail/M5Stack/A034-G](https://www.mouser.be/ProductDetail/M5Stack/A034-G) |
| **câbles dupont femelle/femelle** | [https://www.mouser.be/ProductDetail/Adafruit/1949](https://www.mouser.be/ProductDetail/Adafruit/1949) |
| **DHT11** | [https://www.mouser.be/ProductDetail/Seeed-Studio/101020011](https://www.mouser.be/ProductDetail/Seeed-Studio/101020011) |
| **HM3301** | [https://www.mouser.be/ProductDetail/Seeed-Studio/101020613](https://www.mouser.be/ProductDetail/Seeed-Studio/101020613) |
| **capteur de gaz multicanal V2** | [https://www.mouser.be/ProductDetail/Seeed-Studio/101020820](https://www.mouser.be/ProductDetail/Seeed-Studio/101020820) |
| **rallonge I2C grove** | [https://www.mouser.be/ProductDetail/Seeed-Studio/103020006](https://www.mouser.be/ProductDetail/Seeed-Studio/103020006) |

---

*Cette fiche fait partie du projet [JediTrack](/projets/jeditrack), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

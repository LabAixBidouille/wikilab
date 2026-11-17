---
id: temperature-vitesse-son
title: Étudier la température et la vitesse du son
sidebar_label: "Étudier la température et la vitesse du son"
sidebar_position: 11
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Étudier la température et la vitesse du son

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Physique</span>
  <span className="badge badge--primary">Mathématiques</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--info">Capteur ultrason HC-SR04</span>
  <span className="badge badge--secondary">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| The Dexter Lab | 3-4 heures | Intermédiaire | 13-18 ans |

**Problématique :** Est-il possible de mesurer la variation de la vitesse du son en fonction de la température ambiante ?

## Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 1 écran LCD
- 1 buzzer
- 1 microphone MP34DT01
- Des câbles de connexion
- 1 câble USB - micro B

<PdfLink href="/pdf/thedexterlab/PR11-TDL_Feuille_Travail_Vierge_A3.pdf">Télécharger la feuille de travail</PdfLink>

</div>

<img src="/img/ressources/thedexterlab/temperature-vitesse-son/icone.png" alt="Température et vitesse du son" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

:::info
La vitesse du son est affectée par les conditions environnementales dans lesquelles il se propage. Cela peut inclure des facteurs tels que la pression, l'humidité et la composition chimique. Ces effets comptent dans plusieurs applications, comme la communication acoustique, l'acoustique et la météorologie : les connaître aide à comprendre et à prévoir les propriétés acoustiques d'un milieu. On peut avoir l'impression dans notre quotidien que la vitesse du son dans l'air est une grandeur connue et constante. Dans les calculs, on l'approxime à 340 m/s. Cette valeur est-elle toujours valable ? Quel est l'impact de l'environnement sur la vitesse du son ? Cette activité vise à valider si la température a un impact sur la vitesse du son et le cas échéant essayer d'approximer la loi sous-jacente par une approximation affine.
:::

## Déroulé de l'activité

L'activité étudie l'effet de la température sur la vitesse du son dans l'air. Des capteurs de température et de vitesse du son collectent les données, un écran LCD les affiche et un tableur sert à les analyser. Les résultats donnent une approximation de la loi qui relie la vitesse du son à la température, et valident ou invalident l'hypothèse selon laquelle la vitesse du son varie en fonction de la température. Les étapes de l'expérience comprennent :

- La configuration de l'enceinte isolée
- La mesure de la vitesse du son avec un capteur à ultrasons
- Le chauffage de l'enceinte avec un tapis chauffant
- L'affichage des dernières mesures sur un écran
- La récupération des données via une communication série
- L'analyse des données avec un tableur.

Reproduire l'expérience et partager les données servent aussi à valider les résultats.

<figure style={{margin: '1rem auto', textAlign: 'center'}}>
  <img src="/img/ressources/thedexterlab/temperature-vitesse-son/DATA11_TDL.webp" alt="Schéma synthétique du protocole" style={{maxWidth: '100%', height: 'auto', margin: '0 auto'}} />
  <figcaption style={{margin: 0}}>Schéma synthétique du protocole</figcaption>
</figure>

## Compétences mobilisées

Ce protocole expérimental mobilise plusieurs compétences et disciplines scolaires :

- **Sciences physiques** : formuler une hypothèse et concevoir un protocole expérimental pour la tester, ce qui demande une réflexion rigoureuse pour que l'expérience réponde à la question posée. Maîtriser des instruments de mesure précis et les outils de collecte de données expérimentales, pour mener l'expérience à bien et obtenir des données pertinentes et des résultats fiables.
- **Mathématiques** : traiter et analyser les données quantitatives collectées pour en tirer des conclusions précises.
- **Communication scientifique** : présenter les résultats de manière claire et concise, pour les partager avec les autres membres de la communauté scientifique et les rendre accessibles au grand public.
- **Programmation informatique** : la carte programmable de l'expérience demande des compétences de programmation pour être utilisée correctement.

## Étape 1 : Collecter des données

### Orientation

Comment vérifier si la température a un impact sur la vitesse du son dans l'air ? Pour essayer de répondre à cette question, il faut dans un premier temps maîtriser la température du milieu d'expérimentation. Le plus simple pour cela est de faire l'expérience dans une enceinte assez petite pour pouvoir la réchauffer. La chaleur ayant la mauvaise habitude de s'échapper, l'utilisation d'une boîte isolante facilitera grandement l'expérience en évitant des variations de température trop rapides rendant la régulation difficile.

Une fois l'enceinte à température contrôlée à disposition, il faut mettre en place une expérience permettant de mesurer la vitesse du son. La vitesse étant le rapport d'une distance par un temps, comment faire pour la calculer ? Le plus simple pour cela est de fixer l'une des deux grandeurs et de mesurer la seconde. Dans le cas de cette expérience, il sera plus simple de fixer la distance et de mesurer le temps que mettra l'onde sonore pour faire le déplacement.

L'hypothèse à formuler par les élèves pourrait être l'une des suivantes :

- La vitesse du son varie en fonction de la température
- La vitesse du son ne varie pas en fonction de la température
- La vitesse du son augmente quand la température augmente
- La vitesse du son diminue quand la température augmente

Pour chacune de ces hypothèses, l'investigation commence par mettre en place un protocole expérimental qui produit un ensemble de données sur les grandeurs physiques correspondantes. L'analyse de ces données sert à valider ou invalider l'hypothèse.

### Conceptualisation

Le son est une vibration qui se propage sous la forme d'une onde de pression audible, à travers un milieu de transmission tel qu'un gaz, un liquide ou un solide. La vitesse du son est la distance parcourue par unité de temps par un son lorsqu'il se propage. Dans le langage courant, la vitesse du son fait généralement référence à la vitesse des ondes sonores dans l'air dans des conditions "normales".

La vitesse du son est dépendante du milieu dans lequel elle évolue. Par exemple, dans une eau à température ambiante, le son se déplace à une vitesse de 1 500 m/s. De manière générale, tout ce qui va faire changer la densité du milieu va modifier la vitesse du son. La température est connue pour dilater l'air et le rendre plus léger et moins dense (comme dans une montgolfière). Cela devrait donc avoir un impact sur la vitesse du son.

On mesure la vitesse du son dans l'air à l'aide d'un dispositif simple qui utilise la capacité d'un son à rebondir sur les obstacles qu'il rencontre. Ce dispositif, appelé capteur à ultrason, émet une onde sonore et reçoit ensuite l'écho lorsque l'onde rebondit contre un obstacle. Généralement on utilise ce capteur pour mesurer la distance mais en réalité, il ne mesure que la durée entre l'émission d'un son et la réception de son écho.

Dans le cas de cette expérience, la distance étant fixe, en mesurant le temps que met l'écho à revenir, on peut déduire la vitesse à laquelle l'onde a voyagé. Les ultrasons sont des ondes sonores dont la fréquence est supérieure à 20 000 Hz (ou 20 kHz). Ils ne sont pas différents du son "normal" (audible) dans leurs propriétés physiques, sauf que les humains ne peuvent pas les entendre.

Le capteur de distance à ultrasons HC-SR04 se compose de deux transducteurs à ultrasons. L'un agit comme un émetteur qui convertit le signal électrique en impulsions sonores ultrasoniques de 40 kHz. Le récepteur écoute les impulsions transmises. Dès qu'il reçoit l'écho, il produit une impulsion de sortie dont la durée est proportionnelle au temps mis entre l'émission et la réception du signal.

### Investigation

On commence par découvrir les éléments mis à disposition.

La carte programmable est l'élément central, c'est elle qui va récupérer les données des deux capteurs (température et ultrason), contrôler le tapis chauffant pour faire varier la température et afficher les données utiles pendant l'expérience.

Le capteur ultrason va mesurer le temps que met le son (l'onde sonore) pour faire l'aller-retour dans la boîte. La dimension de la boîte sera à mesurer le plus précisément possible, car c'est à partir de cette grandeur que va être déterminée la vitesse du son.

Le thermomètre permet de connaître la température pendant l'expérience. Il faut absolument conserver ces deux données ensemble pour vérifier si la température a un impact sur la vitesse du son.

Le tapis chauffant est là pour augmenter progressivement la température à l'intérieur de la boîte.

L'écran affichera les dernières mesures, pour vérifier la cohérence du déroulement de l'expérimentation, et visualiser si la vitesse du son est modifiée au cours de l'expérience.

Une fois les branchements faits, l'expérimentation peut être démarrée. En appuyant sur le bouton de la carte programmable, le relais s'enclenche, et le tapis commence à chauffer. Toutes les minutes, une mesure de la température et du temps de propagation seront enregistrés. Lorsque la température finale sera atteinte, on pourra arrêter le système et récupérer les données pour les analyser.

### Débriefing

En montant l'expérience, on a vu comment isoler la variable à étudier pour mesurer une grandeur composite. La taille fixe de la boîte et son isolation thermique nous assurent que les variations dans les mesures du temps de déplacement du son sont dues uniquement à l'élévation de la température et non à un autre phénomène. La reproduction de l'expérience par plusieurs élèves avec des conditions initiales différentes ou une montée en température différente montrera la répétabilité de l'expérience.

## Étape 2 : Afficher les données collectées

### Orientation

À l'étape précédente, on a construit un système simple qui mesure la vitesse du son dans l'air en faisant varier la température. Il reste à déterminer comment la vitesse du son évolue par rapport à la température de l'air. À partir de ces données, il devrait être possible de faire apparaître une approximation de la vitesse du son en fonction de la température.

### Conceptualisation

La carte électronique utilisée pour l'expérience est dotée d'interfaces qui lui permettent de communiquer avec d'autres appareils. Ces interfaces servent à récupérer les données de l'expérience pour les analyser ensuite.

Il y a deux manières de récupérer les données issues des capteurs, la première est d'utiliser l'affichage sur l'écran LCD pour faire des relevés manuels dans un cahier d'expérience. Relativement fastidieuse, cette étape de lecture par un être humain peut être automatisée en utilisant la communication "série" entre la carte programmable et l'ordinateur.

La communication série vient de la manière dont les données sont transmises les unes après les autres sur la même ligne de transmission. Cette manière de communiquer est très simple à mettre en œuvre avec une carte programmable et c'est généralement la meilleure solution pour récupérer l'ensemble des données produites par les capteurs pendant toute la durée de l'expérience.

### Investigation

Pour cette étape, vous pouvez découvrir la fiche d'activité "Affichage de texte avec un écran LCD" afin d'utiliser le petit écran LCD pour afficher les valeurs mesurées par les capteurs au fil de l'expérience.

Ensuite, vous pouvez utiliser un tableau sur papier pour noter les résultats relevés. Les résultats seront regroupés en trois colonnes : le temps depuis le début de l'expérience (en minutes), la température de l'air (en degrés Celsius), et la vitesse du son (en mètres par seconde).

| Temps depuis le début de l'expérience | Température de l'air (°C) | Vitesse du son (m/s) |
|---|---|---|
|  |  |  |
|  |  |  |

### Débriefing

Au terme de cette étape, plusieurs objectifs ont été atteints :

- Comprendre comment connecter la carte à d'autres périphériques
- Utiliser un programme pour afficher des données sur un écran LCD
- Récupérer les données d'une expérience en vue de leur analyse ultérieure

## Étape 3 : Analyser les données

### Orientation

Grâce aux étapes précédentes, il est possible de connaître la mesure du temps de propagation (et donc la vitesse du son) en fonction de la valeur de la température. Comment vérifier si l'hypothèse de départ est vérifiée ? De quels outils nécessaires pour analyser nos données ?

### Conceptualisation

Pour valider l'hypothèse, les données doivent être mises en forme de telle sorte à rendre visible le lien entre les grandeurs physiques de l'expérience. N'ayant que deux données, la manière la plus directe de visualiser les données est d'utiliser un nuage de point utilisant la température en abscisse et la vitesse en ordonnée.

Une fois le graphique tracé, selon son apparence, le tracé d'une droite de régression (même approximative) fait apparaître une première approximation de la loi qui relie la vitesse du son à la température.

### Investigation

Les données représentent une évolution de la vitesse du son au cours de la montée progressive de la température. On peut utiliser une représentation graphique, ce qui peut être fait dans un tableur (Excel, LibreOffice Calc, Google Sheet, ...).

Sur la représentation graphique, en choisissant la bonne échelle, il est possible de valider/invalider directement l'hypothèse de départ. Une fois ce résultat obtenu, on peut commencer à vérifier si une loi simple semble relier la vitesse du son à la température.

En regroupant les résultats avec les autres enquêteurs de la classe, la première approximation peut-être affinée et les limites commencer à apparaître. Utiliser l'approximation pour prédire la vitesse du son à une température donnée en dehors de la plage de valeur retenue pour l'enquête et valider avec le dispositif si la prédiction est proche de la réalité.

Essayez d'approximer l'erreur maximale de la mesure de chaque capteur et vérifier l'impact sur la confiance des résultats de l'expérience.

Quelles sont les améliorations à apporter au protocole pour améliorer la qualité du résultat ? Y a-t-il d'autres grandeurs physiques qui pourraient interférer dans l'expérience ? Si oui comment éviter le phénomène ?

### Débriefing

Pendant l'analyse des données, la représentation graphique a montré si l'hypothèse de départ était validée ou invalidée. L'analyse des données sert aussi à extrapoler une première approximation de la loi sous-jacente. Partager les informations avec d'autres enquêteurs montre si les résultats sont valides et les conclusions comparables. Ce partage et la comparaison des données issues d'expériences reproductibles sont l'un des fondements qui permettent de s'assurer qu'un résultat est valide quel que soit l'expérimentateur.

## Programmation

Les fiches techniques de programmation (câblage, code, extensions MakeCode) sont regroupées dans une fiche dédiée : [Programmation : Température et vitesse du son](/ressources/thedexterlab/programmation/programmation-temperature-vitesse-son).


---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

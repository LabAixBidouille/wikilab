---
id: temperature-vitesse-son
title: Température et vitesse du son
sidebar_label: "Température et vitesse du son"
sidebar_position: 11
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><circle cx="12" cy="12" r="10" fill="#1a4a48" opacity="0.1"/><path d="M12 4a3 3 0 0 0-3 3v7.5a4 4 0 1 0 6 0V7a3 3 0 0 0-3-3z" fill="#1a4a48" opacity="0.25"/><circle cx="12" cy="17" r="2.5" fill="#1a4a48" opacity="1.0"/><line x1="12" y1="7" x2="12" y2="14" stroke="#1a4a48" strokeWidth="1.5" opacity="1.0"/><line x1="16" y1="8" x2="18" y2="8" stroke="#1a4a48" strokeWidth="1.5" opacity="1.0"/><line x1="16" y1="11" x2="18" y2="11" stroke="#1a4a48" strokeWidth="1.5" opacity="1.0"/></svg> Température et vitesse du son

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

<a href="/pdf/thedexterlab/PR11-TDL_Feuille_Travail_Vierge_A3.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger la feuille de travail</a>

</div>

<img src="/img/ressources/thedexterlab/temperature-vitesse-son/icone.png" alt="Température et vitesse du son" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

:::info
La vitesse du son est affectée par les conditions environnementales dans lesquelles il se propage. Cela peut inclure des facteurs tels que la pression, l'humidité et la composition chimique. Il est important de prendre en compte les impacts environnementaux sur la vitesse du son dans diverses applications, telles que la communication acoustique, l'acoustique et la météorologie. En sachant comment l'environnement peut affecter la vitesse du son, on peut mieux comprendre et prévoir les propriétés acoustiques d'un milieu donné. On peut avoir l'impression dans notre quotidien que la vitesse du son dans l'air est une grandeur connue et constante. Dans les calculs, on l'approxime à 340 m/s. Cette valeur est-elle toujours valable ? Quel est l'impact de l'environnement sur la vitesse du son ? Cette activité vise à valider si la température a un impact sur la vitesse du son et le cas échéant essayer d'approximer la loi sous-jacente par une approximation affine.
:::

## Déroulé de l'activité

Ce protocole fournit un guide détaillé pour mener une expérience scientifique sur l'impact de la température sur la vitesse du son dans l'air. Le protocole expérimental inclut la collecte de données à l'aide de capteurs de température et de vitesse du son, ainsi que l'utilisation d'un écran LCD pour afficher et d'un tableur pour analyser les données. Les résultats sont utilisés pour déterminer une approximation de la loi reliant la vitesse du son à la température, et pour valider ou invalider l'hypothèse selon laquelle la vitesse du son varie en fonction de la température. Les étapes de l'expérience comprennent :

- La configuration de l'enceinte isolée
- La mesure de la vitesse du son avec un capteur à ultrasons
- Le chauffage de l'enceinte avec un tapis chauffant
- L'affichage des dernières mesures sur un écran
- La récupération des données via une communication série
- L'analyse des données avec un tableur.

Le protocole souligne également l'importance de la reproductibilité et du partage des données pour valider les résultats de l'expérience scientifique.

## Compétences mobilisées

Ce protocole expérimental mobilise plusieurs compétences et disciplines scolaires. Tout d'abord, il requiert la capacité à formuler une hypothèse et à concevoir un protocole expérimental pour la tester. Cette compétence est associée aux sciences physiques, qui nécessitent une réflexion rigoureuse pour concevoir une expérience qui permettra de répondre à la question posée.

La maîtrise des outils de mesure et de collecte de données expérimentales est essentielle pour mener à bien l'expérience et obtenir des résultats fiables. Cette compétence est également associée aux sciences physiques, qui requièrent l'utilisation d'instruments de mesure précis pour obtenir des données pertinentes.

La troisième compétence mobilisée par ce protocole est la capacité à analyser les données collectées et à en tirer des conclusions. Cette compétence est associée aux mathématiques, qui permettent de traiter et d'analyser des données quantitatives pour en tirer des conclusions précises.

La capacité à communiquer les résultats de manière claire et concise est essentielle pour partager les résultats de l'expérience avec les autres membres de la communauté scientifique. Cette compétence est associée à la communication scientifique, qui requiert la capacité à présenter les résultats de manière claire et accessible pour les autres scientifiques et le grand public.

La programmation informatique est également une discipline associée à ce protocole expérimental, puisque la carte programmable utilisée dans l'expérience nécessite des compétences de programmation pour être utilisée correctement.

Ce protocole expérimental permet aux élèves de développer des compétences clés dans les sciences physiques, les mathématiques, la communication scientifique et la programmation informatique.

## Étape 1 : collecter des données

### Orientation

Comment vérifier si la température à un impact sur la vitesse du son dans l'air ? Pour essayer de répondre à cette question, il faut dans un premier temps maîtriser la température du milieu d'expérimentation. Le plus simple pour cela est de faire l'expérience dans une enceinte assez petite pour pouvoir la réchauffer. La chaleur ayant la mauvaise habitude de s'échapper, l'utilisation d'une boîte isolante facilitera grandement l'expérience en évitant des variations de température trop rapides rendant la régulation difficile.

Une fois l'enceinte à température contrôlée à disposition, il faut mettre en place une expérience permettant de mesurer la vitesse du son. La vitesse étant le rapport d'une distance par un temps, comment faire pour la calculer ? Le plus simple pour cela est de fixer l'une des deux grandeurs et de mesurer la seconde. Dans le cas de cette expérience, il sera plus simple de fixer la distance et de mesurer le temps que mettra l'onde sonore pour faire le déplacement.

L'hypothèse à formuler par les élèves pourrait être l'une des suivantes :

- La vitesse du son varie en fonction de la température
- La vitesse du son ne varie pas en fonction de la température
- La vitesse du son augmente quand la température augmente
- La vitesse du son diminue quand la température augmente

Pour chacune de ces hypothèses, l'investigation devra commencer par mettre en place un protocole expérimental qui permettra de produire un ensemble de données mettant en jeu les grandeurs physiques correspondantes. L'analyse de ces données permettra de valider et/ou invalider l'hypothèse.

### Conceptualisation

Le son est une vibration qui se propage sous la forme d'une onde de pression audible, à travers un milieu de transmission tel qu'un gaz, un liquide ou un solide. La vitesse du son est la distance parcourue par unité de temps par un son lorsqu'il se propage. Dans le langage courant, la vitesse du son fait généralement référence à la vitesse des ondes sonores dans l'air dans des conditions "normales".

La vitesse du son est dépendante du milieu dans lequel elle évolue. Par exemple, dans une eau à température ambiante, le son se déplace à une vitesse de 1 500 m/s. De manière générale, tout ce qui va faire changer la densité du milieu va modifier la vitesse du son. La température est connue pour dilater l'air et le rendre plus léger et moins dense (comme dans une montgolfière). Cela devrait donc avoir un impact sur la vitesse du son.

Nous allons mesurer la vitesse du son dans l'air à l'aide d'un dispositif simple qui utilise la capacité d'un son à rebondir sur les obstacles qu'il rencontre. Ce dispositif, appelé capteur à ultrason, émet une onde sonore et reçoit ensuite l'écho lorsque l'onde rebondit contre un obstacle. Généralement on utilise ce capteur pour mesurer la distance mais en réalité, il ne mesure que la durée entre l'émission d'un son et la réception de son écho.

Dans le cas de cette expérience, la distance étant fixe, en mesurant le temps que met l'écho à revenir, on peut déduire la vitesse à laquelle l'onde a voyagé. Les ultrasons sont des ondes sonores dont la fréquence est supérieure à 20 000 Hz (ou 20 kHz). Ils ne sont pas différents du son "normal" (audible) dans leurs propriétés physiques, sauf que les humains ne peuvent pas les entendre.

Le capteur de distance à ultrasons HC-SR04 se compose de deux transducteurs à ultrasons. L'un agit comme un émetteur qui convertit le signal électrique en impulsions sonores ultrasoniques de 40 kHz. Le récepteur écoute les impulsions transmises. Dès qu'il reçoit l'écho, il produit une impulsion de sortie dont la durée est proportionnelle au temps mis entre l'émission et la réception du signal.

### Investigation

Dans un premier temps, commençons par nous familiariser avec les différents éléments mis à disposition.

La carte programmable est l'élément central, c'est elle qui va récupérer les données des deux capteurs (température et ultrason), contrôler le tapis chauffant pour faire varier la température et afficher les données utiles pendant l'expérience.

Le capteur ultrason va mesurer le temps que met le son (l'onde sonore) pour faire l'aller-retour dans la boîte. La dimension de la boîte sera à mesurer le plus précisément possible, car c'est à partir de cette grandeur que va être déterminée la vitesse du son.

Le thermomètre permet de connaître la température pendant l'expérience. Il est très important de conserver ces deux données ensemble pour valider si la température a un impact sur la vitesse du son.

Le tapis chauffant est là pour augmenter progressivement la température à l'intérieur de la boîte.

L'écran affichera les dernières mesures, pour vérifier la cohérence du déroulement de l'expérimentation, et visualiser si la vitesse du son est modifiée au cours de l'expérience.

Une fois les branchements faits, l'expérimentation peut être démarrée. En appuyant sur le bouton de la carte programmable, le relais s'enclenche, et le tapis commence à chauffer. Toutes les minutes, une mesure de la température et du temps de propagation seront enregistrés. Lorsque la température finale sera atteinte, on pourra arrêter le système et récupérer les données pour les analyser.

### Débriefing

À travers la mise en place de l'expérimentation, il a été découvert comment isoler la variable à étudier pour mesurer une grandeur composite. La taille fixe de la boîte et son isolation thermique nous assurent que les variations dans les mesures du temps de déplacement du son sont dues uniquement à l'élévation de la température et non à un autre phénomène. La reproduction de l'expérience par plusieurs élèves avec des conditions initiales différentes ou une montée en température différentes montreront la répétabilité de l'expérience.

## Étape 2 : afficher les données collectées

### Orientation

L'étape précédente a permis de créer un système de mesure simple permettant de mesurer la vitesse du son dans de l'air en faisant varier la température. À présent, nous allons déterminer comment la vitesse du son évolue par rapport à la température de l'air. À partir de ces données, il devrait être possible de faire apparaître une approximation de la vitesse du son en fonction de la température.

### Conceptualisation

La carte électronique utilisée pour l'expérience est dotée d'interfaces lui permettant de communiquer avec d'autres appareils. En utilisant cette capacité, les données de l'expérience vont être récupérées en vue d'une exploitation ultérieure.

Il y a deux manières de récupérer les données issues des capteurs, la première est d'utiliser l'affichage sur l'écran LCD pour faire des relevés manuels dans un cahier d'expérience. Relativement fastidieuse, cette étape de lecture par un être humain peut être automatisée en utilisant la communication "série" entre la carte programmable et l'ordinateur.

La communication série vient de la manière dont les données sont transmises les unes après les autres sur la même ligne de transmission. Cette manière de communiquer est très simple à mettre en œuvre avec une carte programmable et elle constitue généralement la solution idéale pour récupérer l'ensemble des données produites par les capteurs pendant toute la durée de l'expérience.

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

## Étape 3 : analyser les données

### Orientation

Grâce aux étapes précédentes, il est possible de connaître la mesure du temps de propagation (et donc la vitesse du son) en fonction de la valeur de la température. Comment vérifier si l'hypothèse de départ est vérifiée ? De quels outils nécessaires pour analyser nos données ?

### Conceptualisation

Pour valider l'hypothèse, les données doivent être mises en forme de telle sorte à rendre visible le lien entre les grandeurs physiques de l'expérience. N'ayant que deux données, la manière la plus directe de visualiser les données est d'utiliser un nuage de point utilisant la température en abscisse et la vitesse en ordonnée.

Une fois le graphique tracé, selon son apparence, le tracé d'une droite de régression (même approximative) permettra de faire apparaître une première approximation de la loi qui relie la vitesse du son à la température.

### Investigation

Les données représentent une évolution de la vitesse du son au cours de la montée progressive de la température. Nous pouvons utiliser une représentation graphique, ce qui peut être fait dans un tableur (Excel, LibreOffice Calc, Google Sheet, …).

Sur la représentation graphique, en choisissant la bonne échelle, il est possible de valider/invalider directement l'hypothèse de départ. Une fois ce résultat obtenu, il est intéressant de commencer à vérifier s'il semble y avoir une loi simple liant la vitesse du son à la température.

En regroupant les résultats avec les autres enquêteurs de la classe, la première approximation peut-être affinée et les limites commencer à apparaître. Utiliser l'approximation pour prédire la vitesse du son à une température donnée en dehors de la plage de valeur retenue pour l'enquête et valider avec le dispositif si la prédiction est proche de la réalité.

Essayez d'approximer l'erreur maximale de la mesure de chaque capteur et vérifier l'impact sur la confiance des résultats de l'expérience.

Quelles sont les améliorations à apporter au protocole pour améliorer la qualité du résultat ? Y a-t-il d'autres grandeurs physiques qui pourraient interférer dans l'expérience ? Si oui comment éviter le phénomène ?

### Débriefing

Durant l'analyse des données, la représentation visuelle a permis de mettre en évidence la validation/invalidation de l'hypothèse de départ. Au-delà de l'hypothèse, l'analyse des données permet d'extrapoler une première approximation de la loi sous-jacente. Le partage d'information avec d'autres enquêteurs permet de savoir si les résultats sont valides et les conclusions comparables. Ce partage et la comparaison des données issues d'expériences reproductibles est l'un des fondements qui permet de s'assurer qu'un résultat est bien valide peu importe l'expérimentateur.

## Programmation

Les fiches techniques de programmation (câblage, code, extensions MakeCode) sont regroupées dans une fiche dédiée : [Programmation : Température et vitesse du son](/ressources/thedexterlab/programmation/programmation-temperature-vitesse-son).


---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

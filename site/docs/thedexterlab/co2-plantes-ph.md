---
id: co2-plantes-ph
title: Étudier le CO2, les plantes et le pH
sidebar_label: "Étudier le CO2, les plantes et le pH"
sidebar_position: 18
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Étudier le CO2, les plantes et le pH

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Biologie</span>
  <span className="badge badge--primary">Chimie</span>
  <span className="badge badge--primary">Physique</span>
  <span className="badge badge--primary">Mathématiques</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--info">Sonde pH</span>
  <span className="badge badge--secondary">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| The Dexter Lab | 4-6 heures | Avancé | 14-18 ans |

**Problématique :** Comment fonctionne la photosynthèse ?

## Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 1 sonde de pH
- 1 capteur de conductivité
- 1 capteur de lumière
- 1 écran OLED (SSD1306)
- 1 breadboard
- Des câbles de connexion
- 1 câble USB - micro B
- 2 relais
- 1 source de lumière
- 1 diffuseur de CO2
- 1 aquarium
- 1 ensemble de plantes aquatiques

<PdfLink href="/pdf/thedexterlab/PR18-TDL_Worksheet_Blank_A3.pdf">Télécharger la feuille de travail</PdfLink>

</div>

<img src="/img/ressources/thedexterlab/co2-plantes-ph/icone.png" alt="CO2, plantes et pH" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

:::info
Les plantes aquatiques jouent un rôle important dans la régulation des niveaux de CO2 : par la photosynthèse, elles convertissent le CO2 en matière végétale et en oxygène. Les plantes aquatiques, telles que les algues et les herbiers, peuvent être particulièrement efficaces pour absorber le CO2, car elles ont un accès constant à de l'eau et des nutriments. En plus de leur capacité à "emprisonner" du CO2, les plantes aquatiques peuvent également contribuer à la purification de l'eau en éliminant les contaminants.
:::

## Déroulé de l'activité

**Observation de l'impact des paramètres chimiques sur un écosystème fermé.**

Ce protocole de recherche scientifique détaille les étapes à suivre pour comprendre comment les plantes aquatiques consomment le CO2, et pour mesurer cette consommation de façon indirecte, par le pH. La collecte de données est indispensable pour comprendre comment faire cette mesure indirecte. La conceptualisation présente les propriétés du CO2 et du pH, et le fonctionnement de la sonde pH. L'investigation passe par le montage d'un dispositif qui mesure la variation du pH en fonction du CO2 présent dans l'eau, avec un aquarium, une carte programmable, une lampe UV, une bouteille de CO2 et un capteur de pH.

<figure style={{margin: '1rem auto', textAlign: 'center'}}>
  <img src="/img/ressources/thedexterlab/co2-plantes-ph/DATA18_TDL.webp" alt="Schéma synthétique du protocole" style={{maxWidth: '100%', height: 'auto', margin: '0 auto'}} />
  <figcaption style={{margin: 0}}>Schéma synthétique du protocole</figcaption>
</figure>

## Compétences mobilisées

Ce protocole mobilise plusieurs compétences :

- Collecter des données expérimentales, notamment en concevant et en montant l'expérience, et en mesurant les variables pertinentes avec des instruments de mesure appropriés.
- Analyser les données, notamment en représentant les résultats sur un graphique, en repérant des tendances et des corrélations, et en tirant des informations utiles.
- Conceptualiser, c'est-à-dire comprendre les concepts scientifiques sous-jacents, comme le CO2, le pH et la photosynthèse.
- Communiquer des résultats scientifiques, notamment en rédigeant des rapports clairs et précis, et en les présentant de manière visuelle et compréhensible.

Les disciplines associées à ce protocole incluent la biologie, la chimie, la physique et les mathématiques, ainsi que la communication scientifique et l'analyse des données.

## Étape 1 : Collecter des données

### Orientation

Comment mesurer la consommation de CO2 par les plantes ? Pour y répondre, il faut mesurer la quantité de CO2 dans un milieu défini (dans l'eau par exemple), mais cette mesure reste assez complexe et les instruments de mesure sont particulièrement onéreux. Pour mener l'enquête, on va devoir faire preuve d'ingéniosité et mesurer le CO2 de façon indirecte. Le pH est un paramètre facile à mesurer, qui dépend de nombreux autres.

Il faut d'abord un aquarium. En contrôlant l'apport de CO2, on pourra faire les mesures à l'aide d'une sonde pH afin de comprendre son évolution durant la journée.

L'hypothèse à formuler par les élèves pourrait être l'une des suivantes :

- La journée, le pH augmente durant la consommation de CO2 par les plantes
- La journée, le pH diminue durant la consommation de CO2 par les plantes
- La nuit, le pH augmente durant la production de CO2 par les plantes
- La nuit, le pH diminue durant la production de CO2 par les plantes

### Conceptualisation

Le CO2, plus précisément CO₂, est une molécule composée de deux atomes d'oxygène et d'un atome de carbone. On lui donne également le nom de "dioxyde de carbone" ou encore "gaz carbonique". Dans des conditions de température et de pression normales, c'est un gaz incolore, inodore et à la saveur piquante. Lorsque celui-ci se retrouve dans l'eau et qu'il est exposé aux rayonnements solaires (rayons UV), il se dissout.

Le pH, ou potentiel Hydrogène, est la mesure de l'acidité ou de la basicité d'une solution. Il représente la concentration d'ions hydrogène (H+). Le pH peut être divisé en trois catégories :

- pH &lt; 7 : la solution est acide (plus le pH est petit, plus l'acidité est importante)
- pH = 7 : la solution est neutre (l'eau pure, par exemple)
- pH &gt; 7 : la solution est basique (plus le pH est grand, plus la basicité est importante)

Lors de la dissolution du CO2, un atome d'hydrogène "s'arrache" de l'eau (H₂O) et se retrouve à l'état d'ion (H+). La sonde pH peut ainsi en mesurer la quantité. Par extension, plus il y aura de CO2 dans une solution, plus cette dernière sera acide.

La sonde pH, en simplifiant, est composée de deux tubes imbriqués l'un dans l'autre. Le premier contient une solution de référence avec un pH de 7. Le second est rempli d'une solution dont le pH varie en fonction de la solution dans laquelle la sonde sera plongée. Ce fonctionnement nécessite que la sonde du pH-mètre soit calibrée avant chaque expérience.

### Investigation

Commencer par se familiariser avec les éléments mis à disposition.

L'aquarium est l'élément principal de l'expérience. En le remplissant d'eau (de préférence d'eau déminéralisée) et en y plaçant des plantes aquatiques, on obtient le sujet d'expérimentation.

La carte programmable est le cerveau de l'enquête. C'est elle qui contrôle les paramètres comme la température et la lumière en agissant sur les relais. C'est elle aussi qui s'occupera de lire les capteurs à intervalle régulier pour produire les données à analyser.

Une lampe UV placée au-dessus de l'aquarium jouera le rôle du soleil et simulera le cycle jour/nuit.

La bouteille de CO2, équipée de sa valve (solénoïde), sert à contrôler l'apport de CO2 dans le bac d'eau.

Le capteur de pH fera les mesures dont on déduira la concentration de CO2.

Le capteur de lumière mesure la quantité de lumière à laquelle les plantes sont exposées durant l'expérimentation.

L'écran affichera les dernières mesures afin de vérifier la cohérence du déroulement de l'expérimentation.

Une fois les branchements faits, l'expérimentation peut être démarrée. En appuyant sur le bouton de la carte programmable, le relais de la lumière et la valve du CO2 s'enclenchent. Toutes les minutes, une mesure du pH et de la luminosité sera enregistrée. Lorsque l'on aura simulé une journée entière, on pourra stopper l'expérience.

### Débriefing

En montant l'expérience, on a découvert comment isoler la variable à étudier pour mesurer une grandeur physique de manière indirecte. Comme la lumière et l'apport de CO2 sont contrôlés et que l'eau est pure (déminéralisée), les variations de pH ne sont dues qu'à celles du CO2. La reproduction de l'expérience par plusieurs élèves avec des conditions initiales différentes montrera la répétabilité de l'expérience.

## Étape 2 : Afficher les données collectées

### Orientation

À l'étape précédente, on a construit un système simple qui mesure la variation du pH en fonction du CO2 présent dans l'eau. On va maintenant déterminer comment le CO2 (ou pH) évolue suivant le cycle de vie des plantes aquatiques. À partir de ces données, il devrait être possible de faire apparaître une approximation de la consommation et/ou production de CO2 des plantes, et son impact sur le pH.

### Conceptualisation

La carte électronique utilisée pour l'expérience a des interfaces pour communiquer avec d'autres appareils. On s'en sert pour récupérer les données de l'expérience et les exploiter ensuite.

Il y a deux manières de récupérer les données issues des capteurs : l'affichage sur l'écran LCD pour faire des relevés manuels, ou la communication "série" entre la carte programmable et l'ordinateur, plus automatisée.

### Investigation

Pour cette étape, on peut utiliser un écran LCD pour afficher les valeurs mesurées par les capteurs au fil de l'expérience.

Ensuite, on peut utiliser un tableau sur papier pour noter les résultats relevés. Les résultats seront regroupés en trois colonnes : le temps depuis le début de l'expérience (en minutes), la valeur du pH et la quantité de lumière (en lux).

| Temps depuis le début de l'expérience | pH de l'eau | Quantité de lumière (Lux) |
|---|---|---|
|  |  |  |
|  |  |  |

Le relevé manuel étant fastidieux, en se servant de la fiche d'activité "Collecter des données", on peut modifier le dispositif pour récupérer les données directement dans un tableur à partir de l'éditeur MakeCode.

### Débriefing

Au terme de cette étape, plusieurs objectifs ont été atteints :

- Comprendre comment connecter la carte à d'autres périphériques
- Utiliser un programme pour afficher des données sur un écran
- Récupérer les données d'une expérience en vue de leur analyse ultérieure

## Étape 3 : Analyser les données

### Orientation

Grâce aux étapes précédentes, il est possible de connaître l'impact sur le pH par les plantes suivant la luminosité (consommation/production de CO2). Comment vérifier si l'hypothèse de départ est valide ?

### Conceptualisation

Pour valider l'hypothèse, les données doivent être mises en forme de telle sorte à rendre visible le lien entre les grandeurs physiques de l'expérience. N'ayant que deux données, en plus du temps, la manière la plus directe de visualiser les données est d'utiliser un nuage de points utilisant le temps depuis le début de l'opération en abscisse, la luminosité et le pH en ordonnée (avec deux couleurs différentes).

Une fois le graphique tracé, on trace deux droites de régression (même approximatives), l'une pour la période de "jour" et l'autre pour la période de "nuit". Elles donneront une première approximation de la loi qui relie la consommation de CO2 et le pH.

### Investigation

Comme les données représentent une évolution au cours du temps, on peut en faire une représentation graphique dans un tableur (Excel, LibreOffice Calc, Google Sheet...).

Sur la représentation graphique, en choisissant la bonne échelle, il est possible de valider/invalider directement l'hypothèse de départ.

En regroupant les résultats avec les autres enquêteurs de la classe, la première approximation peut être affinée. Utiliser l'approximation pour prédire la variation de pH pour une journée/nuit plus longue que celle simulée et valider avec le dispositif si la prédiction est proche de la réalité.

Essayez d'approximer l'erreur maximale de la mesure de chaque capteur et vérifier l'impact sur la confiance des résultats.

Quelles sont les améliorations à apporter au protocole pour améliorer la qualité du résultat ? Y a-t-il d'autres grandeurs physiques qui pourraient interférer dans l'expérience ? Si oui comment éviter le phénomène ?

### Débriefing

Pendant l'analyse des données, le graphique a montré si l'hypothèse de départ était validée ou invalidée. Au-delà de l'hypothèse, on peut extrapoler, à partir des données, une première approximation de la loi sous-jacente. Partager les informations avec d'autres enquêteurs indique si les résultats sont valides et les conclusions comparables. Ce partage et la comparaison des données issues d'expériences reproductibles sont l'un des fondements qui permettent de vérifier qu'un résultat est valide quel que soit l'expérimentateur.

---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

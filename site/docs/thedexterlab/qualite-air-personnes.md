---
id: qualite-air-personnes
title: "Qualité de l'air et nombre d'élèves"
sidebar_label: "Qualité de l'air et nombre d'élèves"
sidebar_position: 9
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="3" y="4" width="18" height="14" rx="1" fill="#1a4a48" opacity="0.1"/><rect x="3" y="4" width="18" height="14" rx="1" stroke="#1a4a48" strokeWidth="1" fill="none" opacity="1.0"/><circle cx="8" cy="11" r="1.8" fill="#1a4a48" opacity="0.25"/><path d="M6 17 Q6 13 8 13 Q10 13 10 17 Z" fill="#1a4a48" opacity="0.25"/><circle cx="13" cy="11" r="1.8" fill="#1a4a48" opacity="0.25"/><path d="M11 17 Q11 13 13 13 Q15 13 15 17 Z" fill="#1a4a48" opacity="0.25"/><circle cx="17" cy="11" r="1.5" fill="#1a4a48" opacity="1.0"/><path d="M15.5 17 Q15.5 13.5 17 13.5 Q18.5 13.5 18.5 17 Z" fill="#1a4a48" opacity="1.0"/><text x="2" y="23" fontSize="3" fontWeight="bold" fill="#1a4a48" opacity="1.0">CO₂</text></svg> Qualité de l'air et nombre d'élèves

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Physique</span>
  <span className="badge badge--primary">SVT</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Mathématiques</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--info">Capteur CO2 MH-Z19B</span>
  <span className="badge badge--info">Écran OLED</span>
  <span className="badge badge--secondary">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| The Dexter Lab | 3-4 heures | Intermédiaire | 12-18 ans |

**Problématique :** Comment améliorer la qualité de l'air en milieu fermé ?

## Matériel

- 1 carte programmable (STM32)
- 1 câble USB pour alimenter la carte
- 1 capteur de CO2 (mh-z19b)
- 1 écran OLED (ssd1306)
- 1 breadboard
- Câbles dupont

<a href="/pdf/thedexterlab/PR9-TDL_Feuille_Travail_Vierge_A3.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger la feuille de travail</a>

</div>

<img src="/img/ressources/thedexterlab/qualite-air-personnes/icone.png" alt="Qualité de l'air et nombre d'élèves" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

:::info
La qualité de l'air intérieur est cruciale pour la santé et le bien-être des personnes. En effet, les gens passent environ 90% de leur temps à l'intérieur, ce qui signifie que la qualité de l'air intérieur peut avoir un impact significatif sur la santé. La qualité de l'air peut être affectée par plusieurs facteurs, notamment les produits d'entretien ménager, les moisissures, les acariens, les pollens, etc. Ces contaminants peuvent provoquer des effets négatifs tels que des maux de tête, des irritations des yeux, des voies respiratoires et de la peau, ainsi que des symptômes d'allergie, d'asthme et de bronchite. Dans ce projet, nous cherchons à étudier si et pourquoi le nombre de personnes présentes dans une pièce peut avoir également un impact sur la qualité de l'air intérieur. Quelle variable doit être considérée ?
:::

## Déroulé de l'activité

Dans ce projet, notre objectif est de mener une enquête scientifique liée à la qualité de l'air dans une pièce. Pour ce faire, nous allons fabriquer un appareil expérimental en connectant différents composants électroniques, puis le faire fonctionner à l'aide d'un programme approprié. Ensuite, nous collecterons des données et les analyserons pour mesurer la concentration de gaz CO2 dans l'air. Nous pourrons étudier et comparer les résultats obtenus dans différentes conditions, comme dans le cas d'une pièce dont les fenêtres/portes sont ouvertes ou fermées, avec ou sans présence de nombreuses personnes, etc. Tout comme le font les vrais scientifiques et chercheurs ! Dans ce cas particulier, nous voulons étudier la question de recherche suivante : la qualité de l'air diminue-t-elle lorsque le nombre de personnes présentes dans une pièce augmente ? Pour répondre à cette question, nous devons construire un dispositif simple avec un tableau et un capteur pour collecter des données et les analyser.

Ce projet aborde plusieurs concepts scolaires tels que la qualité de l'air intérieur, les effets de la pollution de l'air sur la santé, la création d'un dispositif expérimental, l'analyse de données, la compréhension des gaz, la programmation de capteurs, la présentation de résultats et leur interprétation. Le but est de sensibiliser les élèves à ces concepts importants et de les aider à mieux comprendre les enjeux liés à la qualité de l'air. Les différents concepts liés à ces notions peuvent être adaptés à différents niveaux scolaires, en fonction des connaissances préalables des élèves. Par exemple, les élèves plus jeunes pourraient se concentrer sur la conception du dispositif, tandis que les élèves plus âgés pourraient explorer plus en profondeur les concepts scientifiques sous-jacents.

## Compétences mobilisées

Ce protocole mobilise plusieurs compétences indispensables pour mener une expérience scientifique. Tout d'abord, il est nécessaire de collecter et d'analyser les données obtenues à partir du capteur électronique utilisé pour mesurer la concentration de CO2 dans l'air ambiant. Cette étape permet de vérifier la qualité de l'air dans différents environnements et de répondre à la question de recherche posée.

Ensuite, il est important de maîtriser les outils de programmation pour connecter le capteur électronique à une carte programmable et à un écran. Cette compétence permet de visualiser les mesures de CO2 en temps réel et de les stocker pour une analyse ultérieure.

L'expérience nécessite également une compréhension des spécifications techniques du capteur électronique utilisé, notamment en ce qui concerne sa plage de mesure, sa tension et son courant de fonctionnement, ainsi que les conditions environnementales dans lesquelles il peut être utilisé.

La conceptualisation et l'investigation font également partie des compétences requises pour mener cette expérience. Il est important de comprendre le fonctionnement du capteur électronique et d'identifier les différents paramètres environnementaux qui peuvent affecter la qualité de l'air dans une pièce.

Enfin, la communication scientifique est une compétence clé pour partager les résultats de l'expérience avec les autres membres de l'équipe et en discuter en classe. Cette étape permet aux participants de réfléchir à l'ensemble du processus, de la collecte des données à l'analyse des résultats.

Les disciplines associées à cette expérience sont la physique, les sciences de l'environnement, l'informatique et les statistiques. Cette expérience permet d'appliquer les concepts de ces disciplines à un contexte pratique, et de mieux comprendre les phénomènes environnementaux et les technologies qui peuvent être utilisées pour les mesurer et les surveiller.

En somme, ce protocole est une excellente façon de développer des compétences scientifiques et techniques, ainsi que des compétences de communication et de collaboration, en travaillant en équipe pour répondre à une question de recherche scientifique.

## Étape 1 : collecter des données

### Orientation

Afin de répondre à notre question de recherche, nous devons trouver un moyen de mesurer la concentration de CO2 dans l'air ambiant dans différentes conditions. Il existe plusieurs façons de faire, la plus simple étant de programmer un capteur facile à utiliser et de le connecter à une carte programmable. La mesure de la concentration de CO2 dans l'air est la méthode la plus courante pour contrôler la qualité de l'air dans les espaces intérieurs ou extérieurs. Dans les bâtiments, les capteurs de CO2 peuvent également automatiser leur système de contrôle de la ventilation ou fournir des signaux d'alerte ou d'avertissement.

### Conceptualisation et investigation

Dans notre projet, nous allons mesurer la concentration de CO2 dans l'air à l'aide d'un dispositif électronique dont le nom technique est **MH-Z19B NDIR**. Il s'agit d'un petit capteur commun, peu coûteux et facile à utiliser qui utilise le principe dit de **l'infrarouge non dispersif**. Nous n'avons pas besoin de comprendre le fonctionnement en détail, mais nous les avons mentionnés pour que l'on puisse chercher plus d'informations si cela nous intéresse. Notre objectif est surtout d'apprendre à utiliser ce capteur.

Chaque capteur, et en général tout dispositif, a des exigences spécifiques, c'est-à-dire des spécifications pour fonctionner correctement. Notre capteur a une **tension de fonctionnement de 4,5 à 5,5 Volts**, un **courant moyen de moins de 60 milliampères**, il peut fonctionner dans un environnement dont la **température et l'humidité relative de respectivement 0 à 50°C et 0 à 90%RH**. Sa plage de mesure est de **0 à 5 000 ppm (parties par million)**.

Maintenant que nous avons acquis quelques connaissances de base, nous pouvons commencer à préparer notre propre enquête scientifique.

### Débriefing

Dans cette étape, nous avons décidé de collecter les données nécessaires à notre enquête en mesurant la concentration de CO2 dans différentes conditions à l'aide d'un capteur électronique appelé MH-Z19B NDIR. Nous avons également acquis des connaissances de base sur le fonctionnement du capteur et ses spécifications, telles que la plage de mesure et les exigences de fonctionnement.

## Étape 2 : afficher les données collectées

### Orientation

Dans l'étape précédente, nous avons construit un appareil expérimental simple avec un capteur pour mesurer la concentration de CO2 dans l'air. Nous avons supposé que la mesure est affichée sur notre écran d'ordinateur par le programme. Mais comment pouvons-nous afficher nos valeurs mesurées sur un outil externe ?

### Conceptualisation

Une carte fournit une unité de traitement et un espace mémoire pour stocker et exécuter un programme, elle peut fournir des capteurs embarqués pour mesurer divers paramètres comme la température, la pression, l'humidité, l'accélération, la rotation, etc. Elle fournit également des interfaces pour se connecter et communiquer avec d'autres appareils. Dans ce cas particulier, nous devons connecter et utiliser un petit écran pour afficher en texte les valeurs de nos mesures.

### Investigation

Dans cette étape, nous utilisons un petit écran pour afficher les valeurs de nos mesures. Ensuite, nous établissons un tableau des mesures sur papier ou sur une feuille de calcul numérique, divisé en plusieurs colonnes. Chaque colonne correspond à une étude de cas. Nous pouvons collecter un ensemble de mesures (par exemple, 20 mesures par minute) pour différents cas de configuration de la pièce. Il peut s'agir :

1. D'une pièce avec des fenêtres ouvertes.
2. D'une pièce avec des fenêtres fermées.
3. D'une pièce comme dans le cas 1 et avec de nombreuses personnes/étudiants à l'intérieur.
4. D'une pièce comme dans le cas 2 et de nombreuses personnes/étudiants à l'intérieur.
5. D'une zone en plein air/extérieur.

| Fenêtres ouvertes, peu de personnes | Fenêtres fermées, peu de personnes | Fenêtres ouvertes, nombreuses personnes | Fenêtres fermées, nombreuses personnes | Extérieur |
|---|---|---|---|---|
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |

Maintenant que nous avons préparé et mis en place notre appareil de mesure et notre plan d'investigation, nous pouvons commencer à enregistrer les données pour chaque cas.

### Débriefing

Dans cette phase, nous avons fait et réalisé ce qui suit :

- Comprendre les éléments de base et les fonctionnalités d'une carte.
- Se familiariser avec la connexion et l'utilisation de périphériques externes pour réaliser des expériences.
- Utiliser un programme pour afficher des données sur un écran.

## Étape 3 : analyser les données

### Orientation

Dans l'étape précédente, nous avons rempli notre tableau/feuille de calcul avec nos mesures qui représentent donc nos données. Nous voulons en tirer des enseignements et répondre à notre question de départ.

### Conceptualisation

Nous avons collecté nos données avec notre appareil et nous devons maintenant les analyser afin d'en extraire des informations pertinentes. Dans cette étape, nous introduisons le concept de moyenne ou de valeur moyenne à partir des statistiques de base. En général, dans les enquêtes et les expériences scientifiques, nous prenons plusieurs mesures, puis nous concluons à une valeur finale en calculant la moyenne. C'est la meilleure estimation que nous pouvons obtenir de la valeur réelle.

### Investigation

Nous passons en revue notre tableau des données. Pour cette tâche, nous pouvons utiliser une feuille de calcul numérique comme Excel ou Open/Libre Office ou bien continuer avec notre tableau sur une feuille de papier. Nous **calculons la valeur moyenne et l'inscrivons à la fin de chaque colonne qui correspond à chaque étude de cas**. Nous comparons ce que nous avons trouvé dans chaque cas et nous concluons en ce qui concerne la qualité de l'air dans une pièce avec des personnes et **comment la ventilation peut la modifier**.

Nous pouvons répéter notre série de mesures avec les mêmes paramètres de la pièce, mais **à des moments différents de la journée**, c'est-à-dire dans des **conditions de température, de pression et d'humidité différentes**, afin de déterminer si ces conditions influencent les résultats. Pour cela, nous pouvons utiliser les capteurs de la STM32.

| Fenêtres ouvertes, peu de personnes | Fenêtres fermées, peu de personnes | Fenêtres ouvertes, nombreuses personnes | Fenêtres fermées, nombreuses personnes | Extérieur | Conditions (T, P, H) |
|---|---|---|---|---|---|
|  |  |  |  |  |  |
|  |  |  |  |  |  |
| **Moyenne :** | **Moyenne :** | **Moyenne :** | **Moyenne :** | **Moyenne :** | **Moyenne :** |

Enfin, nous discutons de nos résultats en classe. Nous réfléchissons également à l'ensemble du processus, du début du projet jusqu'à la fin. Il est important de comprendre que c'est de cette manière que les scientifiques et les chercheurs mènent des expériences et des recherches scientifiques pour essayer de comprendre la nature et ses phénomènes.

Nous pouvons éventuellement commencer à réfléchir à un éventuel projet de suivi où nous pourrons comparer les résultats des mesures effectuées à la maison ou dans d'autres bâtiments, consulter la littérature sur le sujet de la qualité de l'air et fixer des limites. Nous pourrons ensuite concevoir notre propre appareil de surveillance portable afin qu'il fonctionne comme un système d'alarme/alerte de bonne/mauvaise ventilation !

### Débriefing

Dans cette phase, nous avons fait et réalisé ce qui suit :

- Collecter des données pour différents cas.
- Analyser les données en prenant des valeurs moyennes et les comparer pour chaque cas.
- Extraire les informations pertinentes et conclure.

## Programmation

Les fiches techniques de programmation (câblage, code, extensions MakeCode) sont regroupées dans une fiche dédiée : [Programmation : Qualité de l'air et personnes](/ressources/thedexterlab/programmation/programmation-qualite-air-personnes).


---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

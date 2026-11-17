---
id: qualite-air-personnes
title: "Mesurer la qualité de l'air selon le nombre d'élèves"
sidebar_label: "Mesurer la qualité de l'air selon le nombre d'élèves"
sidebar_position: 9
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Mesurer la qualité de l'air selon le nombre d'élèves

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

<PdfLink href="/pdf/thedexterlab/PR9-TDL_Feuille_Travail_Vierge_A3.pdf">Télécharger la feuille de travail</PdfLink>

</div>

<img src="/img/ressources/thedexterlab/qualite-air-personnes/icone.png" alt="Qualité de l'air et nombre d'élèves" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

:::info
On passe environ 90% de son temps à l'intérieur : la qualité de l'air intérieur peut donc avoir un effet important sur la santé et le bien-être. Plusieurs facteurs peuvent dégrader la qualité de l'air, notamment les produits d'entretien ménager, les moisissures, les acariens, les pollens, etc. Ces contaminants peuvent provoquer, entre autres, des maux de tête, des irritations des yeux, des voies respiratoires et de la peau, ainsi que des symptômes d'allergie, d'asthme et de bronchite. Ce projet cherche à savoir si, et pourquoi, le nombre de personnes présentes dans une pièce peut aussi agir sur la qualité de l'air intérieur. Quelle variable doit être considérée ?
:::

## Déroulé de l'activité

L'objectif de ce projet est de mener une enquête scientifique sur la qualité de l'air dans une pièce. On fabrique un appareil expérimental en connectant différents composants électroniques, puis on le fait fonctionner à l'aide d'un programme approprié. On collecte ensuite des données et on les analyse pour mesurer la concentration de gaz CO2 dans l'air. Les résultats obtenus dans différentes conditions peuvent alors être étudiés et comparés : une pièce dont les fenêtres/portes sont ouvertes ou fermées, avec ou sans présence de nombreuses personnes, etc. Tout comme le font les vrais scientifiques et chercheurs ! Ici, la question de recherche étudiée est la suivante : la qualité de l'air diminue-t-elle lorsque le nombre de personnes présentes dans une pièce augmente ? Pour y répondre, on construit un dispositif simple avec un tableau et un capteur pour collecter des données et les analyser.

Ce projet aborde plusieurs concepts scolaires tels que la qualité de l'air intérieur, les effets de la pollution de l'air sur la santé, la création d'un dispositif expérimental, l'analyse de données, la compréhension des gaz, la programmation de capteurs, la présentation de résultats et leur interprétation. Le but est de sensibiliser les élèves à ces concepts et de les aider à mieux comprendre les enjeux liés à la qualité de l'air. Les différents concepts liés à ces notions peuvent être adaptés à différents niveaux scolaires, en fonction des connaissances préalables des élèves. Par exemple, les élèves plus jeunes pourraient se concentrer sur la conception du dispositif, tandis que les élèves plus âgés pourraient explorer plus en profondeur les concepts scientifiques sous-jacents.

<figure style={{margin: '1rem auto', textAlign: 'center'}}>
  <img src="/img/ressources/thedexterlab/qualite-air-personnes/DATA9_TDL.webp" alt="Schéma synthétique du protocole" style={{maxWidth: '100%', height: 'auto', margin: '0 auto'}} />
  <figcaption style={{margin: 0}}>Schéma synthétique du protocole</figcaption>
</figure>

## Compétences mobilisées

Ce protocole mobilise plusieurs compétences pour mener une expérience scientifique. Les élèves collectent et analysent d'abord les données du capteur électronique qui mesure la concentration de CO2 dans l'air ambiant. Ils vérifient ainsi la qualité de l'air dans différents environnements et répondent à la question de recherche posée.

Il faut ensuite maîtriser les outils de programmation pour connecter le capteur électronique à une carte programmable et à un écran. Avec cette compétence, les élèves visualisent les mesures de CO2 en temps réel et les stockent pour une analyse ultérieure.

L'expérience nécessite également une compréhension des spécifications techniques du capteur électronique utilisé, notamment en ce qui concerne sa plage de mesure, sa tension et son courant de fonctionnement, ainsi que les conditions environnementales dans lesquelles il peut être utilisé.

La conceptualisation et l'investigation font également partie des compétences requises pour mener cette expérience. Il s'agit de comprendre le fonctionnement du capteur électronique et d'identifier les différents paramètres environnementaux qui peuvent affecter la qualité de l'air dans une pièce.

Enfin, les élèves travaillent en équipe et pratiquent la communication scientifique : ils partagent les résultats de l'expérience avec les autres membres de l'équipe et en discutent en classe. Cette étape leur permet de réfléchir à l'ensemble du processus, de la collecte des données à l'analyse des résultats.

Les disciplines associées à cette expérience sont la physique, les sciences de l'environnement, l'informatique et les statistiques. L'expérience permet aux élèves d'appliquer les concepts de ces disciplines à un contexte pratique et de mieux comprendre les phénomènes environnementaux et les technologies qui peuvent servir à les mesurer et à les surveiller.

## Étape 1 : Collecter des données

### Orientation

Pour répondre à la question de recherche, il faut un moyen de mesurer la concentration de CO2 dans l'air ambiant dans différentes conditions. Il existe plusieurs façons de faire ; la plus simple est de programmer un capteur facile à utiliser et de le connecter à une carte programmable. La mesure de la concentration de CO2 dans l'air est la méthode la plus courante pour contrôler la qualité de l'air dans les espaces intérieurs ou extérieurs. Dans les bâtiments, les capteurs de CO2 peuvent également automatiser leur système de contrôle de la ventilation ou fournir des signaux d'alerte ou d'avertissement.

### Conceptualisation et investigation

Dans ce projet, on mesure la concentration de CO2 dans l'air à l'aide d'un dispositif électronique dont le nom technique est **MH-Z19B NDIR**. C'est un petit capteur commun, peu coûteux et facile à utiliser, qui fonctionne selon le principe dit de **l'infrarouge non dispersif**. Comprendre son fonctionnement en détail n'est pas nécessaire : ces deux noms sont donnés pour qui veut chercher plus d'informations. L'objectif est surtout d'apprendre à utiliser ce capteur.

Chaque capteur, et en général tout dispositif, a des exigences spécifiques, c'est-à-dire des spécifications pour fonctionner correctement. Ce capteur a une **tension de fonctionnement de 4,5 à 5,5 Volts** et un courant moyen de moins de 60 milliampères. Il peut fonctionner dans un environnement à une température de 0 à 50°C et une humidité relative de 0 à 90%RH. Sa plage de mesure est de 0 à 5 000 ppm (parties par million).

### Débriefing

Dans cette étape, on a choisi comment collecter les données de l'enquête : mesurer la concentration de CO2 dans différentes conditions à l'aide d'un capteur électronique appelé MH-Z19B NDIR. Les élèves ont également acquis des connaissances de base sur le fonctionnement du capteur et ses spécifications, telles que la plage de mesure et les exigences de fonctionnement.

## Étape 2 : Afficher les données collectées

### Orientation

À l'étape précédente, on a construit un appareil expérimental simple avec un capteur pour mesurer la concentration de CO2 dans l'air. On a supposé que le programme affichait la mesure sur l'écran de l'ordinateur. Mais comment afficher les valeurs mesurées sur un outil externe ?

### Conceptualisation

Une carte fournit une unité de traitement et un espace mémoire pour stocker et exécuter un programme, elle peut fournir des capteurs embarqués pour mesurer divers paramètres comme la température, la pression, l'humidité, l'accélération, la rotation, etc. Elle fournit également des interfaces pour se connecter et communiquer avec d'autres appareils. Ici, il faut connecter et utiliser un petit écran pour afficher en texte les valeurs des mesures.

### Investigation

Utiliser un petit écran pour afficher les valeurs des mesures. Établir ensuite un tableau des mesures sur papier ou sur une feuille de calcul numérique, divisé en plusieurs colonnes : chaque colonne correspond à une étude de cas. On peut collecter un ensemble de mesures (par exemple, 20 mesures par minute) pour différents cas de configuration de la pièce. Il peut s'agir :

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

Enregistrer ensuite les mesures pour chaque cas.

### Débriefing

Dans cette phase, les élèves ont pu :

- Comprendre les éléments de base et les fonctionnalités d'une carte.
- Se familiariser avec la connexion et l'utilisation de périphériques externes pour réaliser des expériences.
- Utiliser un programme pour afficher des données sur un écran.

## Étape 3 : Analyser les données

### Orientation

À l'étape précédente, on a rempli le tableau/la feuille de calcul avec les mesures : ce sont les données de l'enquête. Il s'agit maintenant d'en tirer des enseignements et de répondre à la question de départ.

### Conceptualisation

Il reste à analyser les données collectées avec l'appareil afin d'en extraire des informations pertinentes. Cette étape introduit le concept de moyenne, ou valeur moyenne, issu des statistiques de base. En général, dans les enquêtes et les expériences scientifiques, on prend plusieurs mesures, puis on conclut à une valeur finale en calculant la moyenne. C'est la meilleure estimation qu'on puisse obtenir de la valeur réelle.

### Investigation

Passer en revue le tableau des données, sur une feuille de calcul numérique comme Excel ou Open/Libre Office, ou en continuant avec le tableau sur une feuille de papier. Calculer la valeur moyenne et l'inscrire à la fin de chaque colonne, qui correspond à une étude de cas. Comparer les résultats de chaque cas, puis conclure sur la qualité de l'air dans une pièce avec des personnes et sur la façon dont la ventilation peut la modifier.

On peut répéter la série de mesures avec les mêmes paramètres de la pièce, mais à des moments différents de la journée, c'est-à-dire dans des conditions de température, de pression et d'humidité différentes, afin de déterminer si ces conditions influencent les résultats. Les capteurs de la STM32 peuvent servir pour cela.

| Fenêtres ouvertes, peu de personnes | Fenêtres fermées, peu de personnes | Fenêtres ouvertes, nombreuses personnes | Fenêtres fermées, nombreuses personnes | Extérieur | Conditions (T, P, H) |
|---|---|---|---|---|---|
|  |  |  |  |  |  |
|  |  |  |  |  |  |
| **Moyenne :** | **Moyenne :** | **Moyenne :** | **Moyenne :** | **Moyenne :** | **Moyenne :** |

Enfin, discuter des résultats en classe et réfléchir à l'ensemble du processus, du début du projet jusqu'à la fin. Les scientifiques et les chercheurs mènent leurs expériences et leurs recherches de cette manière pour essayer de comprendre la nature et ses phénomènes.

Les élèves peuvent aussi commencer à réfléchir à un projet de suivi : comparer les résultats des mesures effectuées à la maison ou dans d'autres bâtiments, consulter la littérature sur le sujet de la qualité de l'air et fixer des limites, puis concevoir leur propre appareil de surveillance portable pour qu'il fonctionne comme un système d'alarme/alerte de bonne/mauvaise ventilation !

### Débriefing

Dans cette phase, les élèves ont pu :

- Collecter des données pour différents cas.
- Analyser les données en prenant des valeurs moyennes et les comparer pour chaque cas.
- Extraire les informations pertinentes et conclure.

## Programmation

Les fiches techniques de programmation (câblage, code, extensions MakeCode) sont regroupées dans une fiche dédiée : [Programmation : Qualité de l'air et personnes](/ressources/thedexterlab/programmation/programmation-qualite-air-personnes).


---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

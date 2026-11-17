---
id: corps-acceleration
title: Mesurer l'accélération du corps
sidebar_label: "Mesurer l'accélération du corps"
sidebar_position: 10
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Mesurer l'accélération du corps

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Physique</span>
  <span className="badge badge--primary">Mathématiques</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--info">Accéléromètre</span>
  <span className="badge badge--info">Écran LCD</span>
  <span className="badge badge--secondary">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| The Dexter Lab | 2-3 heures | Intermédiaire | 12-16 ans |

**Problématique :** Quelle force notre corps ou ses parties subissent-ils lorsque nous bougeons, courons ou dansons ?

## Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 1 écran LCD
- Des câbles de connexion
- 1 câble USB - micro B

<PdfLink href="/pdf/thedexterlab/PR10-TDL_Feuille_Travail_Vierge_A3.pdf">Télécharger la feuille de travail</PdfLink>

</div>

<img src="/img/ressources/thedexterlab/corps-acceleration/icone.png" alt="Accélération du corps" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

:::info
En physique, l'accélération désigne le taux de changement de la vitesse d'un objet au cours du temps. Elle peut être positive ou négative et se mesure en mètres par seconde carrée (m/s²). En mécanique, l'accélération sert à décrire les mouvements des corps dans l'espace. Elle peut aussi servir à décrire les changements d'autres grandeurs, comme la position, la vitesse et la vitesse angulaire. Au sens large, l'accélération indique à quel rythme changent les conditions d'un système, qu'il s'agisse de mouvement physique, de croissance économique, de réaction chimique ou d'autres phénomènes.

L'accélération est souvent considérée en relation avec la force, puisque la force appliquée à un objet peut entraîner une accélération. Par exemple, un objet soumis à une force constante subit une accélération constante. La deuxième loi de Newton relie la force F et l'accélération a : F = ma, où m est la masse de l'objet. Dans la vie quotidienne, l'accélération peut avoir des effets importants, par exemple lors d'une accélération brutale en voiture ou dans les manèges d'attractions. On peut aussi la mesurer pour comprendre les mouvements du corps pendant une activité physique comme la danse, le sport ou la course.
:::

## Déroulé de l'activité

Ce projet propose une enquête scientifique pour mesurer l'accélération ou la décélération que subit le corps, ou ses différentes parties, quand on bouge, que ce soit en courant, en dansant ou pendant toute autre activité physique. La question de recherche proposée aux élèves est de savoir si le corps ou ses différentes parties sont accélérés de plus d'un g quand on danse avec enthousiasme et passion.

Pour répondre à cette question, on construit un dispositif expérimental simple avec une carte électronique STM32 et un capteur qu'elle intègre : l'accéléromètre. Un accéléromètre est un capteur qui mesure l'accélération d'un corps ou de sa structure. Il sert à détecter les mouvements, les vibrations et les chocs. Il mesure l'accélération grâce à l'effet d'un objet en mouvement sur une masse inertielle, qui se déplace en réponse à l'accélération. La quantité de mouvement de la masse est mesurée et convertie en une tension électrique, qui est ensuite lue par un microcontrôleur ou un circuit électronique similaire. L'accéléromètre peut mesurer l'accélération dans une ou plusieurs dimensions, selon le nombre de capteurs utilisés, et peut servir à détecter l'orientation, le mouvement linéaire et angulaire, la gravité et la force de vibration.

Cet outil de mesure, conçu pour les besoins des élèves et programmé avec des blocs, sert à collecter des données. On les analyse ensuite pour en tirer des informations, puis étudier et comparer les résultats de manière rigoureuse et scientifique.

<figure style={{margin: '1rem auto', textAlign: 'center'}}>
  <img src="/img/ressources/thedexterlab/corps-acceleration/DATA10_TDL.webp" alt="Schéma synthétique du protocole" style={{maxWidth: '100%', height: 'auto', margin: '0 auto'}} />
  <figcaption style={{margin: 0}}>Schéma synthétique du protocole</figcaption>
</figure>

## Compétences mobilisées

Le projet aborde les sujets suivants :

- L'accélération et la décélération en physique
- L'utilisation des capteurs électroniques pour mesurer l'accélération
- La programmation de cartes électroniques pour lire les données des capteurs
- L'analyse de données et l'extraction d'informations pertinentes
- La rigueur scientifique dans la collecte et l'interprétation de données
- L'expérimentation scientifique en général

## Étape 1 : Collecter des données

### Orientation

Pour répondre à la question de recherche, il faut un moyen de mesurer l'accélération. La méthode la plus courante consiste à utiliser un capteur conçu pour cette tâche, l'accéléromètre. Grâce à la microélectronique, ce minuscule dispositif est aujourd'hui présent dans presque tous les gadgets, comme les smartphones, les montres connectées, les manettes de jeu, les télécommandes ou les jouets. On le trouve aussi couramment dans d'autres appareils électroniques, comme les consoles de jeux, les drones, les voitures, les avions et les satellites.

On peut connecter un capteur autonome à une carte programmable pour lire ses valeurs, ou utiliser une carte qui intègre déjà de tels capteurs. Cette activité retient la seconde solution, avec la carte STM32. La collecte de données se fait dans la vie réelle, pendant les mouvements des élèves : il faut donc bien comprendre comment le capteur fonctionne et comment le programmer, mais aussi comment la carte est alimentée et comment la rendre mobile.

### Conceptualisation

La grandeur physique à mesurer dans ce projet est l'accélération. Première étape de la collecte des données : comprendre ce qui sera mesuré, et comment.

**Spécification de la mesure** : l'accélération s'exprime généralement en m/s². La valeur d'accélération la plus connue est 1g, soit 9,8 m/s², due à la force gravitationnelle à la surface de la Terre. Cette valeur sert de référence, c'est pourquoi la plupart des accéléromètres sont conçus pour exprimer la valeur qu'ils mesurent en « g ». La carte STM32 intègre trois accéléromètres pour mesurer l'accélération sur trois axes (x, y et z). Chaque capteur, comme tout dispositif, a des spécifications techniques qui indiquent comment il fonctionne correctement ou dans quel but il est conçu. Les accéléromètres de la STM32 ont une plage de mesure de -8g à +8g, ce qui convient à ce projet.

**Rendre la carte STM32 compatible avec une expérience en mouvement** : dans l'expérience proposée, la carte doit être portée dans différentes situations où le corps bouge, pour en comprendre l'accélération. La STM32 n'a pas d'autonomie propre (il n'y a pas de batterie) : elle doit être connectée à une source d'énergie pour fonctionner, ce qui limite son utilisation en mouvement. Cette source est généralement une connexion USB entre la carte et l'ordinateur, mais on peut aussi relier la carte à une batterie externe (power bank) pour la mettre sous tension et la rendre transportable.

### Investigation

**Comprendre comment programmer l'accéléromètre sur la carte STM32** : les trois capteurs accéléromètres sont intégrés à la carte, il n'y a donc pas de capteur externe à connecter. La première étape consiste à comprendre cet accéléromètre et à le programmer avec l'outil MakeCode.

**Rendre la carte mobile** : une fois le capteur programmé, reste à alimenter la carte STM32 pour cette activité. Si les élèves la portent sur eux pour enregistrer l'accélération de leur corps et de leurs mouvements, vérifier que le branchement à la source d'énergie permet de réaliser l'expérience correctement. Deux solutions sont proposées :

- La première solution la plus simple consiste à garder la carte STM32 connectée à un ordinateur avec un câble USB suffisamment long pour permettre aux élèves de garder leur liberté de mouvement. La carte reste alimentée par le PC mais il faudra faire attention au câble qui restera relié aux élèves.
- La seconde solution consiste à relier la carte à une batterie externe qui assurera sa mise sous tension. Après avoir programmé votre carte sur PC, vous pouvez relier la carte à cette source d'énergie. Cette solution a l'avantage de rendre le dispositif autonome, sous réserve d'avoir accès au matériel, qui est aujourd'hui assez courant.

Une fois le branchement et la programmation du capteur accéléromètre réalisés, la prochaine étape consistera à apprendre comment interagir avec les capteurs afin de lire leurs valeurs.

## Étape 2 : Afficher les données collectées

### Orientation

L'étape précédente a fait découvrir un dispositif expérimental simple, composé d'une carte et d'un capteur intégré pour mesurer l'accélération. Il s'agit maintenant d'afficher les données sur un dispositif adapté, et non sur l'ordinateur.

### Conceptualisation

La carte STM32 fournit une unité de traitement et de l'espace mémoire pour stocker et exécuter un programme. Elle est équipée de capteurs embarqués pour mesurer divers paramètres tels que la température, la pression, l'humidité, l'accélération, la rotation, etc. Elle a aussi des interfaces pour se connecter et communiquer avec d'autres appareils. Ici, il faut connecter et utiliser un petit écran pour afficher en texte les valeurs mesurées.

### Investigation

Suivre les instructions détaillées pour utiliser l'écran et afficher les valeurs mesurées, puis vérifier qu'elles s'affichent correctement. Faire ensuite quelques tests en fixant l'appareil sur le bras, la jambe, le corps, etc., avec des sauts ou des mouvements rapides pour voir ce qui est enregistré.

Élaborer un plan d'étude de cas. D'abord, choisir les parties du corps sur lesquelles fixer l'appareil et collecter des données : la tête, la main, le bras, la taille ou la jambe, par exemple. Puis choisir quelques mouvements standards, comme la marche, le saut ou la course. Préparer aussi un tableau de mesures, sur papier ou dans une feuille de calcul numérique, avec les parties du corps en colonnes et les mouvements en lignes. Chaque cellule reçoit la valeur d'accélération mesurée pour ce cas. Voici un exemple de tableau :

| Mesures relevées par l'accéléromètre | Tête | Bras | Taille | Jambes |
|---|---|---|---|---|
| Marche |  |  |  |  |
| Saut |  |  |  |  |
| Course |  |  |  |  |
| Crazy Dance ! |  |  |  |  |

Une fois l'appareil de mesure installé et le plan d'enquête prêt, enregistrer les données pour chaque cas.

### Débriefing

Tâches accomplies au cours de cette phase :

- Comprendre les éléments de base et les fonctionnalités d'une carte.
- Se familiariser avec l'utilisation d'un capteur embarqué.
- Utiliser un programme pour afficher des données sur un écran.

## Étape 3 : Analyser les données

### Orientation

À l'étape précédente, le tableau (ou la feuille) de mesures a été rempli : ce sont les données. Il s'agit maintenant d'en tirer des enseignements et de répondre à la question de départ.

### Conceptualisation

Les données collectées avec l'appareil sont maintenant à analyser pour en extraire des informations pertinentes. Si plusieurs valeurs ont été enregistrées pour un même cas, c'est l'occasion d'introduire le concept de moyenne, ou valeur moyenne, issu des statistiques de base. Dans les enquêtes scientifiques et les expériences, on effectue en général plusieurs mesures, puis on calcule leur moyenne, retenue comme valeur finale et meilleure estimation.

### Investigation

Parcourir le tableau des mesures enregistrées. Comparer les résultats de chaque cas et chercher la combinaison de partie du corps et de mouvement qui produit la valeur la plus élevée. On peut aussi trier les valeurs de la plus faible à la plus forte et les représenter graphiquement : avec un tableur numérique comme Excel ou Open/Libre Office, on peut établir une série de graphiques de manière systématique, par exemple les valeurs pour le bras en fonction des mouvements, ou les valeurs pour un mouvement particulier en fonction des différentes parties du corps.

On peut répéter la série de mesures avec les mêmes mouvements et parties du corps, ou en choisir de nouveaux, pour vérifier si les résultats sont similaires aux précédents. Un concours amusant est même possible, par exemple pour savoir qui obtiendra la valeur la plus élevée en dansant comme un fou !

Enfin, discuter des résultats en classe et réfléchir à l'ensemble du processus, depuis le début du projet jusqu'à sa fin. L'enjeu est que les élèves comprennent que c'est ainsi que les scientifiques et les chercheurs mènent des expériences et des enquêtes pour essayer de comprendre la nature et ses phénomènes.

### Débriefing

Actions réalisées au cours de cette phase :

- Collecter des données pour différents cas.
- Analyser et comparer les données pour chaque cas.
- Extraire les informations pertinentes et en tirer des conclusions.

## Programmation

Les fiches techniques de programmation (câblage, code, extensions MakeCode) sont regroupées dans une fiche dédiée : [Programmation : Corps et accélération](/ressources/thedexterlab/programmation/programmation-corps-acceleration).


---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

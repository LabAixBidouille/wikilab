---
id: corps-acceleration
title: "Est-ce que notre corps ou ses parties sont accélérés de plus de 1 g même si nous dansons comme des fous ?"
sidebar_label: "Accélération du corps"
sidebar_position: 10
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><circle cx="12" cy="4" r="2" fill="#1a4a48" opacity="1.0"/><path d="M12 6 L12 14" stroke="#1a4a48" strokeWidth="1.5" opacity="0.25"/><path d="M12 8 L7 12" stroke="#1a4a48" strokeWidth="1.5" opacity="0.25"/><path d="M12 8 L17 6" stroke="#1a4a48" strokeWidth="1.5" opacity="0.25"/><path d="M12 14 L9 21" stroke="#1a4a48" strokeWidth="1.5" opacity="0.25"/><path d="M12 14 L16 20" stroke="#1a4a48" strokeWidth="1.5" opacity="0.25"/><path d="M17 6 Q19 4 20 6" stroke="#1a4a48" strokeWidth="1" fill="none" opacity="0.1"/><path d="M20 6 L21 5" stroke="#1a4a48" strokeWidth="1" opacity="0.1"/><path d="M20 6 L21 7" stroke="#1a4a48" strokeWidth="1" opacity="0.1"/></svg> Est-ce que notre corps ou ses parties sont accélérés de plus de 1 g ?

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

<a href="/pdf/thedexterlab/PR10-TDL_Feuille_Travail_Vierge_A3.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger la feuille de travail</a>

</div>

</div>

---

:::info
L'accélération est un concept fondamental en physique qui désigne le taux de changement de la vitesse d'un objet au cours du temps. Elle peut être positive ou négative et est mesurée en mètres par seconde carrée (m/s²). En mécanique, l'accélération est utilisée pour décrire les mouvements des corps dans l'espace. Elle peut également être utilisée pour décrire les changements dans d'autres grandeurs, telles que la position, la vitesse et la vitesse angulaire. De manière plus générale, l'accélération est un indicateur du taux de changement des conditions d'un système, que ce soit en termes de mouvement physique, de croissance économique, de réaction chimique, ou d'autres phénomènes. Elle est donc un concept important dans de nombreuses disciplines scientifiques.

En physique, l'accélération est souvent considérée en relation avec la force, puisque la force appliquée à un objet peut entraîner une accélération. Par exemple, lorsqu'un objet est soumis à une force constante, il subit une accélération constante. La deuxième loi de Newton établit une relation mathématique entre la force F et l'accélération a : F = ma, où m est la masse de l'objet. Enfin, l'accélération peut avoir des effets importants dans notre vie quotidienne, comme lors d'une accélération brutale en voiture ou dans les manèges d'attractions. Elle peut également être mesurée pour comprendre les mouvements du corps lors d'activités physiques telles que la danse, le sport ou la course.
:::

## Déroulé de l'activité

Dans ce projet, notre objectif est de mener une enquête scientifique sur la mesure de l'accélération ou de la décélération que subit notre corps ou ses différentes parties lorsque nous bougeons, que ce soit en courant, en dansant ou en exécutant toute autre activité physique. La question de recherche proposée aux élèves est donc de savoir si notre corps ou ses différentes parties sont accélérés de plus d'un g lorsque nous dansons avec enthousiasme et passion.

Pour répondre à cette question, nous allons construire un dispositif expérimental simple, en utilisant une carte électronique STM32, ainsi qu'un capteur intégré : l'accéléromètre. Un accéléromètre est un capteur qui permet de mesurer l'accélération d'un corps ou de sa structure. Il est utilisé pour détecter les mouvements, les vibrations et les chocs, et est couramment utilisé dans les appareils électroniques tels que les smartphones, les consoles de jeux, les drones, les voitures, les avions et les satellites. L'accéléromètre mesure l'accélération en utilisant l'effet d'un objet en mouvement sur une masse inertielle, qui se déplace en réponse à l'accélération. La quantité de mouvement de la masse est mesurée et convertie en une tension électrique, qui est ensuite lue par un microcontrôleur ou un circuit électronique similaire. L'accéléromètre peut mesurer l'accélération dans une ou plusieurs dimensions, selon le nombre de capteurs utilisés, et peut être utilisé pour détecter l'orientation, le mouvement linéaire et angulaire, la gravité et la force de vibration.

Avec cet outil de mesure, conçu pour répondre aux besoins des élèves et programmé en utilisant des blocs de programmation, nous allons collecter des données. Ensuite, nous les analyserons pour obtenir des informations importantes. Ces informations seront utilisées pour étudier et comparer les résultats, de manière rigoureuse et scientifique, tout comme les vrais scientifiques et chercheurs le font dans leurs travaux de recherche.

## Compétences mobilisées

Le projet aborde les sujets suivants :

- L'accélération et la décélération en physique
- L'utilisation des capteurs électroniques pour mesurer l'accélération
- La programmation de cartes électroniques pour lire les données des capteurs
- L'analyse de données et l'extraction d'informations pertinentes
- La rigueur scientifique dans la collecte et l'interprétation de données
- L'expérimentation scientifique en général

## Étape 1 : collecter des données

### Orientation

Pour répondre à notre question de recherche, il est nécessaire de trouver un moyen de mesurer l'accélération. La méthode la plus courante consiste à utiliser un capteur spécialement conçu pour cette tâche, appelé accéléromètre. Grâce à la technologie de la microélectronique, ce minuscule dispositif est aujourd'hui présent dans presque tous les gadgets tels que les smartphones, les smartwatches, les joysticks, les télécommandes, les jouets, etc.

Nous pouvons utiliser un capteur autonome et le connecter à une carte programmable pour lire ses valeurs, ou utiliser une carte intégrant déjà de tels capteurs. Nous allons opter pour cette dernière solution et utiliser la carte STM32. Cependant, il est important de bien comprendre comment le capteur fonctionne et comment le programmer, ainsi que de comprendre le mode d'alimentation de la carte et les options pour la rendre mobile. Cela est nécessaire car la collecte de données se fait dans la vie réelle et est liée aux mouvements effectués par les étudiants. Il est donc essentiel de porter une attention particulière à ce point.

### Conceptualisation

Dans notre projet, nous devons mesurer une grandeur physique : l'accélération. La première étape de la phase de collecte des données consiste à comprendre ce qui sera mesuré, et comment.

**Spécification de la mesure** : l'accélération est généralement exprimée en unités de m/s². La valeur d'accélération la plus connue est 1g, équivalant à 9,8 m/s² en raison de la force gravitationnelle à la surface de la Terre. Cette valeur est une référence typique, c'est pourquoi la plupart des accéléromètres sont conçus pour exprimer la valeur qu'ils mesurent en 'g'. Notre carte STM32 intègre trois accéléromètres pour mesurer l'accélération sur trois axes (x, y et z). Chaque capteur, ainsi que tout dispositif en général, est caractérisé par certaines spécifications techniques qui indiquent comment il fonctionne correctement ou pour quel but il est conçu. Les accéléromètres du STM32 ont une plage de mesure de -8g à +8g, ce qui est adéquat pour les besoins de notre projet.

**Rendre la carte STM32 compatible avec une expérience en mouvement** : l'expérimentation proposée suppose la mobilité de la carte dans différentes situations mettant en scène les mouvements du corps afin d'en comprendre l'accélération. La STM32 ne possède pas d'autonomie propre (il n'y a pas de batterie), ce qui limite son utilisation mobile car elle doit être connectée à une source d'énergie pour fonctionner. Cette source prend généralement la forme d'une connexion USB entre la carte et l'ordinateur, mais il est également possible de relier la carte à une power bank afin de la mettre sous tension et la rendre transportable.

### Investigation

**Comprendre comment programmer l'accéléromètre sur la carte STM32** : comme les trois capteurs accéléromètres sont intégrés à la carte, nous n'avons pas besoin de connecter un capteur externe. La première étape consiste donc à comprendre et à programmer l'utilisation de cet accéléromètre grâce à l'outil MakeCode.

**Rendre la carte mobile** : une fois le capteur programmé, la question de l'alimentation de la carte STM32 pour cette activité spécifique se pose. Si elle doit être transportée sur les élèves pour enregistrer l'accélération de leurs corps et de leurs mouvements, il est nécessaire de s'assurer que la connexion à la source d'énergie permettra de réaliser l'expérience correctement. Nous proposons deux solutions :

- La première solution la plus simple consiste à garder la carte STM32 connectée à un ordinateur avec un câble USB suffisamment long pour permettre aux élèves de garder leur liberté de mouvement. La carte reste alimentée par le PC mais il faudra faire attention au câble qui restera relié aux élèves.
- La seconde solution consiste à relier la carte à une power bank qui assurera sa mise sous tension. Après avoir programmé votre carte sur PC, vous pouvez relier la carte à cette source d'énergie. Cette solution a l'avantage de rendre le dispositif autonome, sous réserve d'avoir accès au matériel, qui est aujourd'hui assez courant.

Une fois le branchement et la programmation du capteur accéléromètre réalisés, la prochaine étape consistera à apprendre comment interagir avec les capteurs afin de lire leurs valeurs.

## Étape 2 : afficher les données collectées

### Orientation

Dans l'étape précédente, nous nous sommes familiarisés avec un dispositif expérimental simple composé d'une carte et d'un capteur intégré pour mesurer l'accélération. Nous souhaitons maintenant faire en sorte d'afficher les données sur un dispositif adapté et non sur l'ordinateur.

### Conceptualisation

La carte STM32 fournit une unité de traitement et de l'espace mémoire pour stocker et exécuter un programme. Elle est équipée de capteurs embarqués pour mesurer divers paramètres tels que la température, la pression, l'humidité, l'accélération, la rotation, etc. Elle dispose également d'interfaces pour se connecter et communiquer avec d'autres appareils. Dans ce cas particulier, nous devons connecter et utiliser un petit écran pour afficher en texte les valeurs de nos mesures.

### Investigation

À cette étape, nous suivons les instructions détaillées pour utiliser l'écran et afficher les valeurs de nos mesures. Nous vérifions si les valeurs sont correctement affichées. Puis, nous effectuons quelques tests en fixant l'appareil sur notre bras, notre jambe, notre corps, etc. Nous faisons des sauts ou des mouvements rapides pour voir ce qui est enregistré.

Nous élaborons un plan d'étude de cas. Nous pouvons d'abord décider sur quelles parties de notre corps nous voulons fixer notre appareil et collecter des données. Il peut s'agir de la tête, de la main, du bras, de la taille ou de la jambe. Ensuite, nous pouvons décider de certains mouvements standards tels que la marche, le saut ou la course. Nous préparons également un tableau de mesures sur papier ou sur une feuille de calcul numérique, divisé en plusieurs colonnes (parties du corps) et lignes (mouvements). Dans chaque cellule du tableau, nous écrirons la valeur d'accélération correspondante que nous mesurons. Voici un exemple de tableau :

| Mesures relevées par l'accéléromètre | Tête | Bras | Taille | Jambes |
|---|---|---|---|---|
| Marche |  |  |  |  |
| Saut |  |  |  |  |
| Course |  |  |  |  |
| Crazy Dance ! |  |  |  |  |

Maintenant que nous avons préparé et installé notre appareil de mesure ainsi que notre plan d'enquête, nous pouvons commencer à enregistrer les données pour chaque cas.

### Débriefing

Au cours de cette phase, nous avons accompli les tâches suivantes :

- Comprendre les éléments de base et les fonctionnalités d'une carte.
- Se familiariser avec l'utilisation d'un capteur embarqué.
- Utiliser un programme pour afficher des données sur un écran.

## Étape 3 : analyser les données

### Orientation

Dans l'étape précédente, nous avons rempli notre tableau/feuille de mesures, ce qui nous a donné nos données. À partir de celles-ci, nous souhaitons tirer des enseignements et répondre à notre question de départ.

### Conceptualisation

Nous avons collecté nos données à l'aide de notre appareil et il est maintenant temps de les analyser afin d'en extraire des informations pertinentes. Pendant cette étape, si nous avons enregistré plusieurs valeurs pour un même cas, nous pouvons introduire le concept de moyenne ou de valeur moyenne issue des statistiques de base. En général, dans les enquêtes scientifiques et les expériences, nous effectuons plusieurs mesures et concluons à une valeur finale en calculant une moyenne comme meilleure estimation.

### Investigation

Nous parcourons notre tableau de données enregistrées des mesures. Nous comparons les résultats pour chaque cas et essayons de déterminer la combinaison de partie du corps et de mouvement qui produit la valeur la plus élevée. Nous pouvons également trier les valeurs de la plus faible à la plus forte et les représenter graphiquement. Pour cela, nous pouvons utiliser un tableur numérique tel qu'Excel ou Open/Libre Office et établir une série de graphiques de manière systématique, par exemple les valeurs pour le bras en fonction des mouvements ou les valeurs pour un mouvement particulier en fonction des différentes parties du corps.

Nous pouvons répéter notre série de mesures avec le même ensemble de mouvements et de parties ou en choisir de nouveaux pour vérifier si nous obtenons des résultats similaires aux précédents. Nous pouvons même organiser un concours amusant, par exemple pour savoir qui obtiendra la valeur la plus élevée en dansant comme un fou !

Enfin, nous discutons de nos résultats en classe et réfléchissons à l'ensemble du processus, depuis le début du projet jusqu'à sa fin. Il est important de comprendre que c'est ainsi que les scientifiques et les chercheurs mènent des expériences et des enquêtes scientifiques pour essayer de comprendre la nature et ses phénomènes.

### Débriefing

Au cours de cette phase, nous avons effectué et réalisé les actions suivantes :

- Collecter des données pour différents cas.
- Analyser et comparer les données pour chaque cas.
- Extraire les informations pertinentes et en tirer des conclusions.

## Fiches de programmation

### Fiche 1 : collecter des données à l'aide de l'accéléromètre

L'accéléromètre est présent sur la STM32 IoT Node Discovery, il n'y a donc pas de branchement à faire.

:::info
Pour cette activité, installez l'extension **serial**.
:::

**Programme**

```javascript
let max = 0
let data = 0

Serial.attachToConsole()
input.setAccelerometerRange(AcceleratorRange.EightG)

forever(function () {
    data = input.acceleration(Dimension.Strength)
    if (data > max) {
        max = data
        Serial.writeValue("Max acceleration", max)
    }
})
```

### Fiche 2 : afficher les données sur un écran

**Connecter l'écran LCD (I2C)** :

- Noir pour GND (GND)
- Rouge pour VCC (5V)
- Violet pour SDA (D14)
- Vert pour SCL (D15)

:::info
Pour cette activité, installez l'extension **lcd_i2c**.
:::

**Programme**

```javascript
let max = 0
let data = 0

input.setAccelerometerRange(AcceleratorRange.EightG)
lcd_i2c.initScreen()

forever(function () {
    data = input.acceleration(Dimension.Strength)
    if (data > max) {
        max = data
        lcd_i2c.setCursor(0, 0)
        lcd_i2c.ShowValue("x", max)
    }
})
```

---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/thedexterlab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

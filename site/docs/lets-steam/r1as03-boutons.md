---
id: r1as03-boutons
title: Utiliser des boutons-poussoirs
sidebar_label: "Utiliser des boutons-poussoirs"
sidebar_position: 3
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="4" y="10" width="16" height="10" rx="2" fill="#140e4e" opacity="0.1"/><rect x="4" y="10" width="16" height="10" rx="2" fill="none" stroke="#140e4e" strokeWidth="1.5" opacity="1.0"/><circle cx="12" cy="8" r="5" fill="#140e4e" opacity="0.25"/><circle cx="12" cy="8" r="3.5" fill="#140e4e" opacity="1.0"/><line x1="8" y1="22" x2="8" y2="20" stroke="#140e4e" strokeWidth="1.5" opacity="1.0"/><line x1="16" y1="22" x2="16" y2="20" stroke="#140e4e" strokeWidth="1.5" opacity="1.0"/></svg> Utiliser des boutons-poussoirs

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--warning">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| Let's STEAM | 25 minutes | Intermédiaire | 11-15 ans |

## Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 1 câble USB Micro-B
- 2 boutons-poussoirs
- 1 set de LED
- 1 set de résistances
- 1 breadboard
- Câbles de connexion

## Prérequis

- [Faisons clignoter une LED](/ressources/lets-steam/r1as01-led)
- [Breadboard : premier circuit](/ressources/lets-steam/r1as02-breadboard)

<a href="/pdf/lets-steam/LS_R1AS03_Buttons_FR.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger en PDF</a>

</div>

<img src="/img/ressources/lets-steam/r1as03-boutons/icone.png" alt="Boutons et affichage LED" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Nous allons apprendre à interagir avec la carte en utilisant un simple bouton-poussoir. Il en existe de toutes les formes et de toutes les tailles, mais ils nécessitent tous l'interaction la plus simple : appuyer dessus !

## Objectifs d'apprentissage

- Ajouter de l'interactivité
- Gérer un événement déclenché par un bouton
- Utiliser une variable pour stocker l'état actuel du programme
- Câbler un circuit simple sur une breadboard avec des boutons et des LED
- Utiliser le simulateur MakeCode

---

## Présentation du projet

:::info[Le jeu de questions-réponses]

Pour apprendre à utiliser un bouton, **jouons à un jeu de questions-réponses !**
L'idée est assez simple : **un animateur, deux joueurs, un bouton, et une LED pour chaque joueur**. Lorsque l'animateur pose une question, les joueurs doivent appuyer en premier sur leur bouton pour donner la bonne réponse. Les LED indiquent quel joueur a appuyé sur son bouton en premier et est autorisé à répondre.
:::

---

## Étape 1 - Construire

### 1. Câbler les boutons et les LED

Connectez une patte de chaque bouton à la broche **GND** de la carte. Connectez ensuite l'autre patte sur la **broche D0** pour le joueur 1, et sur la **broche D1** pour le joueur 2. Connectez l'anode de la LED du joueur 1 sur la **broche A0** et celle du joueur 2 sur la **broche A1**. Connectez la **cathode** de chaque LED à une résistance (330 ohms). Branchez ensuite les pattes non connectées des résistances sur la broche **GND**.

:::info[Orientation de la LED]

La LED a une orientation. Pour désigner l'orientation correcte, chaque branche a un nom :
- **Anode** : C'est le « + » de la LED. La branche anodique est plus longue que la branche cathodique.
- **Cathode** : C'est le « - » de la LED. La branche de la cathode est plus courte que le fil de l'anode.
:::

<img src="/img/ressources/lets-steam/r1as03-boutons/button%20breadboard.png" alt="Schéma de câblage boutons et LED" style={{maxWidth: '300px', float: 'right', marginLeft: '1rem', marginBottom: '1rem'}} />

### 2. Connecter la carte à l'ordinateur

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur **micro-USB ST-LINK** (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé **DIS_L4IOT**. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

### 3. Ouvrir MakeCode

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur.

**Ressource :** [makecode.lets-steam.eu](https://makecode.lets-steam.eu)

### 4. Programmer la carte

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton **"Télécharger"**. Copiez le fichier binaire sur le lecteur **DIS_L4IOT** et attendez que la carte finisse de clignoter — votre buzzer de quiz est prêt !

### 5. Exécuter, modifier, jouer

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé **RESET**). Utilisez les connaissances acquises sur cette fiche d'activité pour réaliser des projets plus ou moins complexes et explorez les fiches d'activité suivantes.

---

## Étape 2 - Programmer

```javascript
// Initialisation
let weCanPushIt = true
pins.A0.digitalWrite(false)
pins.A1.digitalWrite(false)

input.buttonD0.onEvent(ButtonEvent.Down, function () {
    if (weCanPushIt) {
        weCanPushIt = false
        pins.A0.digitalWrite(true)
        pause(3000)
        pins.A0.digitalWrite(false)
        weCanPushIt = true
    }
})

input.buttonD1.onEvent(ButtonEvent.Down, function () {
    if (weCanPushIt) {
        weCanPushIt = false
        pins.A1.digitalWrite(true)
        pause(3000)
        pins.A1.digitalWrite(false)
        weCanPushIt = true
    }
})
```

### Initialisation

Dans un premier temps, nous devons déclarer une variable appelée `weCanPushIt`, de type booléen — un type de données avec seulement deux valeurs possibles, généralement `true` et `false`. Cette variable sera utile pour savoir si notre appui sur le bouton sera pris en compte, ou si l'autre joueur est déjà en train de le faire. Les deux dernières lignes indiquent que toutes les LED sont éteintes.

:::info[Qu'est-ce qu'une variable ?]

Une variable est un moyen de nommer et de stocker une valeur pour une utilisation ultérieure par le programme, comme les données d'un capteur ou une valeur intermédiaire utilisée dans un calcul. Une variable a un nom et un type. Le type permet de spécifier le type de données que la variable peut contenir. Dans les langages dynamiques comme Python ou JavaScript, le type n'est pas forcément explicite.
:::

### Interactions

Le code principal concerne les interactions des boutons réalisées avec les fonctions `input.buttonXX.onEvent`.

:::info[Qu'est-ce qu'une fonction ?]

Une fonction est un bloc de code qui exécute une tâche spécifique. Elle est vraiment utile pour simplifier le code et rendre un bloc de code plus compréhensible.
:::

La ligne la plus importante ici est la condition `if (weCanPushIt) { ... }` qui teste si les joueurs ont déjà appuyé sur leur bouton ou non. Si c'est le cas (`weCanPushIt` est égal à `true`), nous :

1. Affectons `weCanPushIt` à `false`, pour empêcher l'adversaire de répondre,
2. Allumons la LED du joueur pour montrer qui est le gagnant,
3. Attendons 3 secondes (3 000 millisecondes),
4. Éteignons la LED du gagnant,
5. Affectons `weCanPushIt` à `true`, pour permettre aux joueurs d'appuyer à nouveau sur leurs boutons.

---

## Étape 3 - Améliorer

1. **Ajoutez d'autres boutons et LED** et modifiez votre programme afin de jouer avec plus de participants !

2. Modifiez votre programme pour **faire clignoter la LED du gagnant** en utilisant la fiche d'activité "Faire clignoter une LED".

---

## Aller plus loin

- **Bouton-poussoir** - En savoir plus sur les utilisations du bouton-poussoir.
  [https://en.wikipedia.org/wiki/Push-button](https://en.wikipedia.org/wiki/Push-button)

- **Derrière le matériel MakeCode - Boutons sur micro:bit** - Tout sur les boutons et leur utilisation dans MakeCode avec Shawn Hymel.
  [https://www.youtube.com/watch?v=t_Qujjd_38o](https://www.youtube.com/watch?v=t_Qujjd_38o)

- **Jeu de réflexes** - Créez un jeu de réflexes avec des interrupteurs que vous pouvez actionner aussi vite que vous le souhaitez !
  [https://microbit.org/projects/make-it-code-it/reaction-game/](https://microbit.org/projects/make-it-code-it/reaction-game/)

- **Découvrez ce qu'est une variable** - Apprenez-en plus sur les variables et les fonctions en programmation.
  [https://www.computerhope.com/jargon/v/variable.htm](https://www.computerhope.com/jargon/v/variable.htm),
  [https://www.makeuseof.com/what-is-a-function-programming/](https://www.makeuseof.com/what-is-a-function-programming/)

---

*Cette fiche fait partie du projet [Let's STEAM](/projets/lets-steam), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

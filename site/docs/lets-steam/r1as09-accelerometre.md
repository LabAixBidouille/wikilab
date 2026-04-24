---
id: r1as09-accelerometre
title: Inclinaison avec accéléromètre
sidebar_label: "Inclinaison avec accéléromètre"
sidebar_position: 9
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="1" y="1" width="22" height="22" rx="3" fill="#140e4e" opacity="0.1"/><rect x="4" y="8" width="16" height="10" rx="2" fill="#140e4e" opacity="0.25"/><circle cx="12" cy="13" r="4" fill="none" stroke="#140e4e" strokeWidth="1.5" opacity="1.0"/><line x1="12" y1="13" x2="15" y2="10" stroke="#140e4e" strokeWidth="1.5" strokeLinecap="round" opacity="1.0"/><circle cx="12" cy="13" r="1" fill="#140e4e" opacity="1.0"/><line x1="8" y1="5" x2="8" y2="8" stroke="#140e4e" strokeWidth="1" opacity="0.25"/><line x1="12" y1="4" x2="12" y2="8" stroke="#140e4e" strokeWidth="1" opacity="0.25"/><line x1="16" y1="5" x2="16" y2="8" stroke="#140e4e" strokeWidth="1" opacity="0.25"/></svg> Inclinaison avec accéléromètre

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--warning">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| Let's STEAM | 30 minutes | Avancé | 11-15 ans |

## Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 1 câble USB Micro-B
- 1 set de LED
- 1 set de résistances
- 1 breadboard
- Câbles de connexion

## Prérequis

- [Breadboard : premier circuit](/ressources/lets-steam/r1as02-breadboard)
- [Boutons et affichage LED](/ressources/lets-steam/r1as03-boutons)

<a href="/pdf/lets-steam/LS_R1AS09_Accelerometer_FR.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger en PDF</a>

</div>

<img src="/img/ressources/lets-steam/r1as09-accelerometre/icone.png" alt="Accéléromètre" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Les accéléromètres sont de petits capteurs qui peuvent détecter la force de l'accélération et sont parfaits pour détecter le mouvement et l'orientation.

## Objectifs d'apprentissage

- Utiliser un accéléromètre en lisant la valeur de l'accélération sur chaque axe
- Réagir aux secousses
- Détecter une situation de chute libre

---

## Introduction

L'accélération fait tourner le monde - littéralement ! C'est la force qui provoque le mouvement, comme une voiture qui accélère ou un objet qui tombe sur le sol sous l'effet de la gravité lorsqu'on le lâche.

Pour découvrir le potentiel de ce capteur de mouvement, nous allons écrire un capteur d'inclinaison qui allume une LED lorsque l'accélération est trop forte. Ce genre de dispositif est utile si vous voulez éviter la tricherie sur un vieux flipper classique.

**Ressource :** [https://en.wikipedia.org/wiki/Pinball](https://en.wikipedia.org/wiki/Pinball)

:::info[Accéléromètre intégré]

L'accéléromètre 3 axes est déjà intégré à la carte, vous n'avez donc pas besoin de connecter quoi que ce soit pour l'utiliser !
:::

---

## Étape 1 - Construire

<img src="/img/ressources/lets-steam/r1as09-accelerometre/motion_sensor_step1.png" alt="Schéma de câblage du capteur d'inclinaison" style={{maxWidth: '300px', float: 'right', marginLeft: '1rem', marginBottom: '1rem'}} />

### 1. Câbler trois LED sur la carte

À l'aide d'une breadboard, connectez trois LED simples aux broches de la carte :

- **LED verte** vers la broche **A0**
- **LED bleue** vers la broche **A1**
- **LED rouge** vers la broche **A2**

### 2. Connecter la carte à l'ordinateur

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le **connecteur micro-USB ST-LINK** (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé **DIS_L4IOT**. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

### 3. Ouvrir MakeCode

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton « Nouveau projet ». Donnez à votre projet un nom plus expressif que « Sans titre » et lancez votre éditeur.

**Ressource :** [makecode.lets-steam.eu](https://makecode.lets-steam.eu)

### 4. Programmer votre carte

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section « Programmer » ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton « Télécharger ». Copiez le fichier binaire sur le lecteur **DIS_L4IOT** et attendez que la carte finisse de clignoter !

### 5. Exécuter, modifier, jouer

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé **RESET**). Essayez de comprendre l'exemple et commencez à le modifier en changeant les seuils pour calibrer votre capteur d'inclinaison.

Pour tester votre capteur d'inclinaison, posez la carte sur une table et donnez un petit coup sur la table. Si votre voyant s'allume, l'accélération de votre coup est assez forte !

---

## Étape 2 - Programmer

```javascript
function turnOffLEDs() {
    pins.A0.digitalWrite(false) // Green
    pins.A1.digitalWrite(false) // Blue
    pins.A2.digitalWrite(false) // Red
}

forever(function () {
    turnOffLEDs()
    // Axe X : LED verte
    if (Math.abs(input.acceleration(Dimension.X)) > 700)
        pins.A0.digitalWrite(true)
    // Axe Y : LED bleue
    if (Math.abs(input.acceleration(Dimension.Y)) > 700)
        pins.A1.digitalWrite(true)
    // Axe Z : LED rouge
    if (Math.abs(input.acceleration(Dimension.Z)) > 700)
        pins.A2.digitalWrite(true)
    pause(500)
})
```

### Comment cela fonctionne-t-il ?

Le programme consiste à allumer une LED sur l'axe sur lequel est détectée l'accélération (-1g) due à la gravité.

:::info[La force G]

La force G d'un objet est son accélération par rapport à une chute libre. Sur terre, elle est de 1G, soit 9,8 mètres par seconde au carré (m/s²). Les astronautes subissent des forces G exceptionnellement élevées et exceptionnellement faibles. La force G peut également être observée sur les montagnes russes. Lorsque les wagonnets de montagnes russes dévalent la pente, vous êtes repoussé dans votre siège en raison de la force G.
:::

Voici la configuration des axes d'accélération / couleurs des LED :

| Axe | LED |
|-----|-----|
| Axe X | LED verte |
| Axe Y | LED bleue |
| Axe Z | LED rouge |

#### Lire la valeur de l'accélération

Pour lire la valeur de l'accélération, MakeCode fournit la fonction `acceleration()`. La valeur est par défaut en mG. Nous utilisons la fonction valeur absolue `abs()` pour ignorer la direction de l'accélération. Pour détecter la condition « tilt », nous utilisons un seuil de 700 mG. Pour éteindre les trois LED en même temps et améliorer l'expressivité de notre code, nous définissons une fonction `turnOffLEDs()`.

:::info[Les fonctions]

Une fonction est un bloc de code qui exécute une tâche spécifique. Comme une variable, elle a un nom qui permettra de l'utiliser à plusieurs endroits dans votre programme. Il est très utile de simplifier le code et de rendre un bloc de code plus lisible en lui donnant un nom qui explique votre intention.
:::

---

## Étape 3 - Améliorer

1. Que se passe-t-il si vous **augmentez le temps de `pause()`** dans votre boucle ? Comment améliorer la réactivité de votre capteur d'inclinaison ?

2. En utilisant la valeur de l'accélération de la gravité (1G d'accélération sur l'axe Z), pouvez-vous **déterminer l'orientation de votre carte** (sur le côté gauche, sur le côté droit, sur le côté supérieur, sur le côté inférieur) ?

3. Sachant que lorsqu'un solide est en chute libre, la valeur de l'accélération devient très rapidement proche de zéro, pouvez-vous **modifier le programme pour détecter cette situation** ?

4. Comment pouvez-vous **détecter si la carte est secouée** ?

---

## Aller plus loin

- **Accéléromètre** - Apprenez-en plus sur les principes physiques et les applications de l'accéléromètre.
  [https://en.wikipedia.org/wiki/Accelerometer](https://en.wikipedia.org/wiki/Accelerometer)

- **Détection de chute libre à l'aide d'un accéléromètre à 3 axes** - Méthode facile pour déterminer la détection de chute libre à l'aide d'un simple accéléromètre à 3 axes.
  [https://www.hackster.io/RVLAD/free-fall-detection-using-3-axis-accelerometer-06383e](https://www.hackster.io/RVLAD/free-fall-detection-using-3-axis-accelerometer-06383e)

- **Mettre une plate-forme de niveau en utilisant un accéléromètre** - Utilise un accéléromètre pour mettre une plate-forme de niveau.
  [https://www.hackster.io/mtashiro/level-platform-using-accelerometer-80a343](https://www.hackster.io/mtashiro/level-platform-using-accelerometer-80a343)

---

*Cette fiche fait partie du projet [Let's STEAM](/projets/lets-steam), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

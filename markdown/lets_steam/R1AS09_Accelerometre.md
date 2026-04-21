# RESSOURCES - PROGRAMMATION - FICHE D'ACTIVITÉ 9

# CAPTEUR D'INCLINAISON AVEC L'ACCÉLÉROMÈTRE

**#R1AS09**

---

## De quoi parle-t-on ?

Les accéléromètres sont de petits capteurs qui peuvent détecter la force de l'accélération et sont parfaits pour détecter le mouvement et l'orientation.

---

## Informations générales

| | |
|---|---|
| **Durée** | 30 minutes |
| **Niveau de difficulté** | Avancé |

### Prérequis

- R1AS02 - Breadboard
- R1AS03 - Boutons et affichage LED

### Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 1 câble USB Micro-B
- 1 set de LED
- 1 set de résistances
- 1 breadboard
- Câbles de connexion

### Objectifs d'apprentissage

- Utiliser un accéléromètre en lisant la valeur de l'accélération sur chaque axe
- Réagir aux secousses
- Détecter une situation de chute libre

---

## Introduction

L'accélération fait tourner le monde - littéralement ! C'est la force qui provoque le mouvement, comme une voiture qui accélère ou un objet qui tombe sur le sol sous l'effet de la gravité lorsqu'on le lâche.

Pour découvrir le potentiel de ce capteur de mouvement, nous allons écrire un capteur d'inclinaison qui allume une LED lorsque l'accélération est trop forte. Ce genre de dispositif est utile si vous voulez éviter la tricherie sur un vieux flipper classique.

**Ressource :** [https://en.wikipedia.org/wiki/Pinball](https://en.wikipedia.org/wiki/Pinball)

> **Important :** L'accéléromètre 3 axes est déjà intégré à la carte, vous n'avez donc pas besoin de connecter quoi que ce soit pour l'utiliser !

---

## Étape 1 - Construire

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

> **Info :** La force G d'un objet est son accélération par rapport à une chute libre. Sur terre, elle est de 1G, soit 9,8 mètres par seconde au carré (m/s²). Les astronautes subissent des forces G exceptionnellement élevées et exceptionnellement faibles. La force G peut également être observée sur les montagnes russes. Lorsque les wagonnets de montagnes russes dévalent la pente, vous êtes repoussé dans votre siège en raison de la force G.

Voici la configuration des axes d'accélération / couleurs des LED :

| Axe | LED |
|-----|-----|
| Axe X | LED verte |
| Axe Y | LED bleue |
| Axe Z | LED rouge |

#### Lire la valeur de l'accélération

Pour lire la valeur de l'accélération, MakeCode fournit la fonction `acceleration()`. La valeur est par défaut en mG. Nous utilisons la fonction valeur absolue `abs()` pour ignorer la direction de l'accélération. Pour détecter la condition « tilt », nous utilisons un seuil de 700 mG. Pour éteindre les trois LED en même temps et améliorer l'expressivité de notre code, nous définissons une fonction `turnOffLEDs()`.

> **Info :** Une fonction est un bloc de code qui exécute une tâche spécifique. Comme une variable, elle a un nom qui permettra de l'utiliser à plusieurs endroits dans votre programme. Il est très utile de simplifier le code et de rendre un bloc de code plus lisible en lui donnant un nom qui explique votre intention.

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

### Explorer d'autres fiches d'activité

- **R1AS12** - Alarme de détecteur de mouvement

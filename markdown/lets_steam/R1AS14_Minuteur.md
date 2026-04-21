# RESSOURCES - PROGRAMMATION - FICHE D'ACTIVITÉ 14

# CRÉER UN MINUTEUR POUR LES OEUFS

**#R1AS14**

---

## De quoi parle-t-on ?

Créons un objet simple mais utile : un minuteur à oeufs ! Cette activité permettra d'appliquer les connaissances acquises sur les servomoteurs à un problème du quotidien.

---

## Informations générales

| | |
|---|---|
| **Durée** | 35 minutes |
| **Niveau de difficulté** | Avancé |
| **Type** | Activité étendue (DIY) |

### Prérequis

- R1AS13 - Les servos font bouger les choses !

### Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 1 câble USB Micro-B
- 1 mini-servo SG-90 (1,6 kg)
- Câbles de connexion
- 1 petite feuille de carton (20 cm x 10 cm)
- Des bâtons de bois robustes (moins de 10 cm)

### Objectifs d'apprentissage

- Créer une minuterie
- Utiliser un servomoteur pour afficher des données
- Effectuer un processus d'étalonnage pour améliorer la précision du chronomètre

---

## Introduction

Dans cette activité, nous allons créer un objet simple mais utile — une minuterie — en utilisant la programmation et la pratique du bricolage ! Après l'avoir réalisé, vous serez un vrai grand chef ! Pour faire bouillir correctement un oeuf, nous utilisons la règle appelée **3, 6, 9** ! Cette règle donne la durée correcte de cuisson en minutes d'un oeuf en fonction de vos objectifs :

- **3 minutes** pour les oeufs à la coque
- **6 minutes** pour les oeufs mollets
- **9 minutes** pour les oeufs durs

---

## Étape 1 - Construire

### 1. Préparer le matériel électronique

Câblez correctement votre carte et votre servomoteur en utilisant la fiche d'activité **#R1AS13 - Les servos font bouger les choses !**

### 2. Créer l'aiguille de l'horloge et la fixer

Prenez les bâtons de bois robustes et fixez-les au bras du servomoteur.

> **À noter :** Les bras de servomoteurs sont des accessoires qui s'adaptent sur l'arbre de sortie et vous permettent de relier mécaniquement la sortie du servomoteur au reste de votre mécanisme. Les servomoteurs sont généralement fournis avec un assortiment de bras de servomoteur.

Malheureusement, les bras exacts inclus ne sont généralement pas spécifiés et peuvent varier. Comme les arbres de sortie des servomoteurs et leurs cannelures varient, les bras sont souvent incompatibles entre les marques et les modèles de servomoteurs.

La façon la plus simple de fixer l'aiguille de votre horloge est d'utiliser un élastique, mais vous pouvez aussi utiliser de la colle chaude ou du scotch.

### 3. Créer le panneau avant du minuteur

Sur le carton, faites un petit trou de la taille de l'arbre de votre servomoteur. Le trou doit se trouver au milieu du côté le plus long de votre carton.

Mettez le servomoteur derrière et fixez l'aiguille d'horloge sur l'arbre du servomoteur.

Tournez le bras en position minimale (angle 0°) et fixez le servomoteur de façon à ce que l'aiguille de l'horloge soit horizontale. Avec un stylo, faites une petite marque pour indiquer 0 seconde. Tournez le bras en position maximum (angle 180°) et faites une petite marque pour indiquer 180 secondes.

### 4. Connecter la carte à l'ordinateur

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le **connecteur micro-USB ST-LINK** (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé **DIS_L4IOT**. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

### 5. Ouvrir MakeCode

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur.

**Ressource :** [makecode.lets-steam.eu](https://makecode.lets-steam.eu)

### 6. Programmer votre carte

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur **DIS_L4IOT** et attendez que la carte finisse de clignoter — votre servomoteur commencera à bouger !

Avant d'essayer ce programme sur la carte, vous pouvez l'essayer directement dans le simulateur. Si vous cliquez sur le bouton USER, vous verrez votre minuterie démarrer.

### 7. Exécuter, modifier, jouer

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé **RESET**). Si tout fonctionne bien, votre servomoteur commencera à bouger.

---

## Étape 2 - Programmer

```javascript
input.buttonUser.onEvent(ButtonEvent.Click, function () {
    for (let pos = 0; pos <= 179; pos++) {
        pins.D3.servoWrite(pos)
        pause(1000)
    }
    for (let i = 0; i < 5; i++) {
        pins.D4.servoWrite(0)
        pause(1000)
        pins.D4.servoWrite(180)
        pause(1000)
    }
})
```

### Comment cela fonctionne-t-il ?

La partie principale du code concerne les interactions avec les boutons. Ces interactions sont gérées avec la fonction `input.buttonUSER.onEvent`.

Lorsque vous cliquez sur le bouton **USER**, vous démarrez la minuterie en modifiant la position du servomoteur d'un degré par seconde.

Lorsque vous avez fini de compter de 0 à 179, vous commencez à déplacer rapidement votre servomoteur pour signaler la fin de la minuterie.

---

## Étape 3 - Améliorer

1. En **ajoutant un servomoteur**, réalisez un second indicateur permettant de connaître l'état de la cuisson de votre oeuf (*cru, à la coque, cuit, dur*).
2. Changez l'animation finale du minuteur en **ajoutant un buzzer** pour faire plus de bruit.
3. La version actuelle du programme n'est pas calibrée — votre minuteur vous donnera une valeur approximative. Si vous voulez être un cuiseur d'oeufs plus scientifique, vous devez suivre un **processus de calibrage**. Pour calibrer un minuteur, utilisez une horloge de référence (par exemple l'horloge de votre smartphone) pour mesurer la durée du minuteur. Pour réduire l'incertitude, répétez la mesure de nombreuses fois (dix fois suffisent) pour calculer la valeur moyenne, puis utilisez un produit en croix pour trouver la valeur correcte du délai.

---

## Aller plus loin

- **Modulation de largeur d'impulsion** - En savoir plus sur le signal numérique de modulation de largeur d'impulsion.
  [https://learn.sparkfun.com/tutorials/pulse-width-modulation/all](https://learn.sparkfun.com/tutorials/pulse-width-modulation/all)

- **Comment faire bouillir un oeuf à la perfection** - Apprenez combien de temps il faut faire bouillir un oeuf pour obtenir la consistance parfaite.
  [https://www.bbcgoodfood.com/howto/guide/how-boil-egg-perfectly](https://www.bbcgoodfood.com/howto/guide/how-boil-egg-perfectly)

- **Compte à rebours** - Créez un compte à rebours et regardez les secondes défiler sur la montre micro:bit.
  [https://makecode.microbit.org/projects/watch/timer](https://makecode.microbit.org/projects/watch/timer)

- **Micro:bit Egg Timer** - Réalisez un minuteur amusant pour garantir le temps de cuisson parfait des oeufs en utilisant l'impression 3D et micro:bit.
  [https://www.myminifactory.com/object/3d-print-micro-bit-egg-timer-18361](https://www.myminifactory.com/object/3d-print-micro-bit-egg-timer-18361)

### Explorer d'autres fiches d'activité

- **R1AS15** - Collecter des données

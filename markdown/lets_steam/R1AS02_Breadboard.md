# RESSOURCES - PROGRAMMATION - FICHE D'ACTIVITÉ 2

# BREADBOARD

## Réalisez votre premier circuit électronique !

**#R1AS02**

---

## De quoi parle-t-on ?

Une breadboard est une carte plastique rectangulaire percée d'un grand nombre de petits trous permettant d'insérer facilement des composants électroniques afin de créer un prototype de circuit électronique.

---

## Informations générales

| | |
|---|---|
| **Durée** | 15 minutes |
| **Niveau de difficulté** | Débutant |

### Prérequis

- R1AS01 - Faire clignoter une LED

### Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 1 câble USB Micro-B
- 1 breadboard
- 1 set de résistances
- 1 set de LED
- Câbles de connexion

### Objectifs d'apprentissage

- Découvrir les breadboards
- Réaliser un circuit simple sur une breadboard
- Réaliser un circuit électronique simple avec des LED et des résistances

---

## Présentation de la breadboard

> **Une breadboard est composée de nombreux petits trous et sert à créer un circuit sur ce petit rectangle de plastique. Avant de commencer, vous devez en comprendre les différentes parties.**

Les trous d'une breadboard sont faits pour connecter des composants électroniques entre eux. Lorsque nous voulons créer un circuit électronique, nous avons besoin de plusieurs connexions sur le même fil. Pour ce faire, la breadboard est organisée en deux types de rangées ou bandes :

- Les **rangées de bus** sont principalement utilisées pour les connexions d'alimentation et se trouvent sur les deux colonnes extérieures d'une breadboard.
- Les **rangées de raccordement** sont principalement utilisées pour les composants électroniques et sont connectées ligne par ligne. Chaque rangée est composée de cinq trous ; vous ne pouvez donc connecter que cinq composants au maximum dans une rangée.

Tant qu'un composant possède des fils (longues tiges métalliques dépassant du composant) ou des pattes (tiges métalliques plus courtes), il peut être utilisé avec une breadboard. Pour relier certaines rangées entre elles, on utilise des câbles de liaison.

---

## Étape 1 - Construire

### 1. Câbler l'alimentation électrique

Avant de connecter les composants électroniques, nous ajoutons généralement quelques câbles aux rangées de bus pour distribuer l'alimentation (**+5V** et broche **GND**). Prenez deux câbles et effectuez les connexions correspondantes.

### 2. Câbler la première LED

Notre circuit se compose d'une simple LED connectée à une broche de la carte. Connectez l'anode de la LED sur la broche appelée **A0** (pour Analog 0). Connectez ensuite la cathode à une résistance (330 ohms) et branchez le fil de la résistance non connectée sur la broche appelée **GND**.

> **La LED a une orientation.** Pour désigner l'orientation correcte, chaque branche a un nom. Voici comment trouver la différence entre l'anode et la cathode :
> - **Anode** : C'est le « + » de la LED. La branche anodique est plus longue que la branche cathodique.
> - **Cathode** : C'est le « - » de la LED. La branche de la cathode est plus courte que le fil de l'anode.

### 3. Câbler les autres LED

Nous allons dupliquer le circuit précédent avec deux LED supplémentaires. L'anode de ces nouvelles LED sera connectée à la broche **A1** et à la broche **A2**.

### 4. Connecter la carte à l'ordinateur

Connectez la carte à votre ordinateur en utilisant le connecteur **micro-USB ST-LINK** (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé **DIS_L4IOT**. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

### 5. Ouvrir MakeCode

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur.

**Ressource :** [makecode.lets-steam.eu](https://makecode.lets-steam.eu)

### 6. Programmer la carte

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton **"Télécharger"**. Copiez le fichier binaire sur le lecteur **DIS_L4IOT** et attendez que la carte finisse de clignoter. Votre programme est maintenant en cours d'exécution !

### 7. Exécuter, modifier, jouer

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé **RESET**). Utilisez les connaissances acquises sur cette fiche d'activité pour réaliser des projets plus ou moins complexes et explorez les fiches d'activité suivantes.

---

## Étape 2 - Programmer

```javascript
forever(function () {
    // Faire clignoter la première LED
    pins.A0.digitalWrite(true)
    pause(1000)
    pins.A0.digitalWrite(false)

    // Faire clignoter la deuxième LED
    pins.A1.digitalWrite(true)
    pause(1000)
    pins.A1.digitalWrite(false)

    // Faire clignoter la troisième LED
    pins.A2.digitalWrite(true)
    pause(1000)
    pins.A2.digitalWrite(false)
    pause(1000)
})
```

### Comment cela fonctionne-t-il ?

Ce programme est une version étendue du programme "Faire clignoter une LED" adapté avec trois LED. Pour chaque LED :

- le bloc `digitalWrite` éteint ou allume une LED spécifique
- le bloc `pause` attend un petit moment.

---

## Étape 3 - Améliorer

1. En changeant l'ordre d'allumage/d'extinction, réalisez une animation simple où les LED sont allumées puis éteintes, l'une après l'autre.

2. Branchez des LED de différentes couleurs — rouge, vert et jaune — et essayez de simuler un feu de signalisation tricolore.

3. Vous pouvez utiliser les LED pour aborder le **comptage binaire** ! Lorsque nous comptons en binaire, nous représentons les nombres par des suites de 0 et de 1. Découvrez plus d'informations sur le comptage binaire sur le centre de ressources CS Unplugged. Une fois les bases du comptage binaire acquises, transformez ce programme pour afficher les nombres de 0 à 7 en binaire avec les trois LED.
   **Ressource :** [https://csunplugged.org/en/topics/binary-numbers/unit-plan/](https://csunplugged.org/en/topics/binary-numbers/unit-plan/)

---

## Aller plus loin

- **Comment utiliser une breadboard** - Tutoriel vidéo présentant une introduction aux breadboards et expliquant comment les utiliser dans des projets électroniques pour débutants.
  [https://www.sciencebuddies.org/science-fair-projects/references/how-to-use-a-breadboard](https://www.sciencebuddies.org/science-fair-projects/references/how-to-use-a-breadboard)

- **Utilisez une vraie breadboard (planche à pain) pour prototyper votre circuit** - Prototypage pas à pas avec une breadboard.
  [https://www.instructables.com/Use-a-real-Bread-Board-for-prototyping-your-circui/](https://www.instructables.com/Use-a-real-Bread-Board-for-prototyping-your-circui/)

- **Animations de LED simples pour débutants (Arduino)** - Tutoriel pour revoir certains concepts sur l'utilisation des LED et créer des effets amusants en utilisant le RedBoard Qwiic pour contrôler les LED individuelles.
  [https://learn.sparkfun.com/tutorials/basic-led-animations-for-beginners-arduino/all](https://learn.sparkfun.com/tutorials/basic-led-animations-for-beginners-arduino/all)

- **10 principes de base de l'électronique** - Un aperçu du fonctionnement des breadboards.
  [https://www.youtube.com/watch?v=fq6U5Y14oM4](https://www.youtube.com/watch?v=fq6U5Y14oM4)

### Explorer d'autres fiches d'activité

- **R1AS03** - Boutons et affichage LED

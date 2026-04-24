---
id: r1as02-breadboard
title: Premier circuit sur breadboard
sidebar_label: "Premier circuit sur breadboard"
sidebar_position: 2
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="2" y="4" width="20" height="16" rx="2" fill="#140e4e" opacity="0.1"/><rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="#140e4e" strokeWidth="1.5" opacity="1.0"/><line x1="2" y1="8" x2="22" y2="8" stroke="#140e4e" strokeWidth="0.75" opacity="0.25"/><line x1="2" y1="16" x2="22" y2="16" stroke="#140e4e" strokeWidth="0.75" opacity="0.25"/><circle cx="6" cy="6" r="0.7" fill="#140e4e" opacity="1.0"/><circle cx="9" cy="6" r="0.7" fill="#140e4e" opacity="1.0"/><circle cx="12" cy="6" r="0.7" fill="#140e4e" opacity="1.0"/><circle cx="15" cy="6" r="0.7" fill="#140e4e" opacity="1.0"/><circle cx="18" cy="6" r="0.7" fill="#140e4e" opacity="1.0"/><circle cx="6" cy="10" r="0.7" fill="#140e4e" opacity="0.25"/><circle cx="9" cy="10" r="0.7" fill="#140e4e" opacity="0.25"/><circle cx="12" cy="10" r="0.7" fill="#140e4e" opacity="0.25"/><circle cx="15" cy="10" r="0.7" fill="#140e4e" opacity="0.25"/><circle cx="18" cy="10" r="0.7" fill="#140e4e" opacity="0.25"/><circle cx="6" cy="12" r="0.7" fill="#140e4e" opacity="0.25"/><circle cx="9" cy="12" r="0.7" fill="#140e4e" opacity="0.25"/><circle cx="12" cy="12" r="0.7" fill="#140e4e" opacity="0.25"/><circle cx="15" cy="12" r="0.7" fill="#140e4e" opacity="0.25"/><circle cx="18" cy="12" r="0.7" fill="#140e4e" opacity="0.25"/><circle cx="6" cy="14" r="0.7" fill="#140e4e" opacity="0.25"/><circle cx="9" cy="14" r="0.7" fill="#140e4e" opacity="0.25"/><circle cx="12" cy="14" r="0.7" fill="#140e4e" opacity="0.25"/><circle cx="15" cy="14" r="0.7" fill="#140e4e" opacity="0.25"/><circle cx="18" cy="14" r="0.7" fill="#140e4e" opacity="0.25"/><circle cx="6" cy="18" r="0.7" fill="#140e4e" opacity="1.0"/><circle cx="9" cy="18" r="0.7" fill="#140e4e" opacity="1.0"/><circle cx="12" cy="18" r="0.7" fill="#140e4e" opacity="1.0"/><circle cx="15" cy="18" r="0.7" fill="#140e4e" opacity="1.0"/><circle cx="18" cy="18" r="0.7" fill="#140e4e" opacity="1.0"/></svg> Premier circuit sur breadboard

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--warning">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| Let's STEAM | 15 minutes | Débutant | 11-15 ans |

## Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 1 câble USB Micro-B
- 1 breadboard
- 1 set de résistances
- 1 set de LED
- Câbles de connexion

## Prérequis

- [Faisons clignoter une LED](/ressources/lets-steam/r1as01-led)

<a href="/pdf/lets-steam/LS_R1AS02_Breadboard_FR.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger en PDF</a>

</div>

<img src="/img/ressources/lets-steam/r1as02-breadboard/icone.png" alt="Breadboard : réalisez votre premier circuit électronique !" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Une breadboard est une carte plastique rectangulaire percée d'un grand nombre de petits trous permettant d'insérer facilement des composants électroniques afin de créer un prototype de circuit électronique.

## Objectifs d'apprentissage

- Découvrir les breadboards
- Réaliser un circuit simple sur une breadboard
- Réaliser un circuit électronique simple avec des LED et des résistances

---

## Présentation de la breadboard

:::info[La breadboard]

Une breadboard est composée de nombreux petits trous et sert à créer un circuit sur ce petit rectangle de plastique. Avant de commencer, vous devez en comprendre les différentes parties.
:::

<img src="/img/ressources/lets-steam/r1as02-breadboard/breadboard%20(1).png" alt="Schéma d'une breadboard" style={{maxWidth: '300px', float: 'right', marginLeft: '1rem', marginBottom: '1rem'}} />

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

:::info[Orientation de la LED]

La LED a une orientation. Pour désigner l'orientation correcte, chaque branche a un nom :
- **Anode** : C'est le « + » de la LED. La branche anodique est plus longue que la branche cathodique.
- **Cathode** : C'est le « - » de la LED. La branche de la cathode est plus courte que le fil de l'anode.
:::

### 3. Câbler les autres LED

Nous allons dupliquer le circuit précédent avec deux LED supplémentaires. L'anode de ces nouvelles LED sera connectée à la broche **A1** et à la broche **A2**.

<img src="/img/ressources/lets-steam/r1as02-breadboard/breadboarding_step4.png" alt="Schéma de câblage complet" style={{maxWidth: '300px', float: 'right', marginLeft: '1rem', marginBottom: '1rem'}} />

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

<div style={{display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap'}}>
<div style={{flex: '1', minWidth: '280px'}}>

![Programme en blocs](/img/ressources/lets-steam/r1as02-breadboard/lets-steam-screenshot%20(2).png)

</div>
<div style={{flex: '1', minWidth: '280px'}}>

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

</div>
</div>

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

---

*Cette fiche fait partie du projet [Let's STEAM](/projets/lets-steam), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

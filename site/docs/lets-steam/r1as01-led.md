---
id: r1as01-led
title: Faire clignoter une LED
sidebar_label: "Faire clignoter une LED"
sidebar_position: 1
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><circle cx="12" cy="9" r="7" fill="#140e4e" opacity="0.1"/><path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z" fill="#140e4e" opacity="0.25"/><path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm0 1.5c3.04 0 5.5 2.46 5.5 5.5 0 1.94-1 3.64-2.52 4.62-.25.16-.48.62-.48.88v2.5h-5V14.5c0-.26-.23-.72-.48-.88A5.49 5.49 0 0 1 6.5 9c0-3.04 2.46-5.5 5.5-5.5z" fill="#140e4e" opacity="1.0"/><rect x="9" y="19" width="6" height="1" rx="0.5" fill="#140e4e" opacity="1.0"/><rect x="10" y="21" width="4" height="1" rx="0.5" fill="#140e4e" opacity="1.0"/><line x1="12" y1="0" x2="12" y2="1.5" stroke="#140e4e" strokeWidth="1.2" strokeLinecap="round" opacity="1.0"/><line x1="4" y1="3.5" x2="5.1" y2="4.6" stroke="#140e4e" strokeWidth="1.2" strokeLinecap="round" opacity="1.0"/><line x1="20" y1="3.5" x2="18.9" y2="4.6" stroke="#140e4e" strokeWidth="1.2" strokeLinecap="round" opacity="1.0"/><line x1="1.5" y1="9" x2="3" y2="9" stroke="#140e4e" strokeWidth="1.2" strokeLinecap="round" opacity="1.0"/><line x1="21" y1="9" x2="22.5" y2="9" stroke="#140e4e" strokeWidth="1.2" strokeLinecap="round" opacity="1.0"/></svg> Faire clignoter une LED

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

- 1 carte programmable "STM32 IoT Node"
- 1 câble USB Micro-B

<a href="/pdf/lets-steam/LS_R1AS01_LED_FR.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger en PDF</a>

</div>

<img src="/img/ressources/led/icone.png" alt="Faisons clignoter une LED" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Une LED est un composant électronique qui produit de la lumière lorsqu'elle est traversée par un courant. Elle peut être utilisée pour éclairer une pièce, ou pour indiquer quelque chose (un réservoir presque vide, une machine allumée, etc.). Les LED existent sous différentes formes et couleurs.

## Objectifs d'apprentissage

- Programmer avec des blocs
- Apprendre les bases de MakeCode
- Utiliser la LED intégrée

---

## Étape 1 - Construire

:::info[Concept clé : la broche]

Dans cette activité de prise en main, vous allez aborder le concept de **broche**. Une broche est un fil physique connecté directement au microcontrôleur. L'état d'une broche donne des informations sur le passage ou non du courant dans celle-ci. Plus précisément :
- **LOW** signifie qu'il n'y a pas de courant
- **HIGH** signifie qu'il y a du courant.

Pour rendre le courant visible, nous utilisons un composant appelé LED (light-emitting diode) déjà disponible sur la carte, qui s'allumera lorsque le courant passera par la broche.
:::

### 1. Connecter la carte à l'ordinateur

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur **micro-USB ST-LINK** (en bas à droite de la carte). Vous devriez voir un nouveau lecteur appelé **DIS_L4IOT** sur votre ordinateur. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

### 2. Ouvrir MakeCode

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur.

**Ressource :** [makecode.lets-steam.eu](https://makecode.lets-steam.eu)

### 3. Organiser les blocs

Voici les différentes étapes vous permettant de faire clignoter une LED à l'aide de l'éditeur de blocs :

#### Ajouter une boucle infinie

Comme nous voulons que le programme fasse clignoter la LED indéfiniment, la première étape consiste à ajouter le bloc **"toujours"**. Il sera présent par défaut à l'ouverture de l'éditeur, mais vous pouvez également le trouver dans le sous-menu **BOUCLES**.

![Ajouter une boucle forever](/img/ressources/led/Ajouter%20une%20boucle%20forever.png)

#### Allumer la LED

Contrôler une LED est une tâche simple car elle ne peut être qu'allumée (le courant la traverse) ou éteinte (le courant ne circule pas). Pour y parvenir, nous devons définir l'état de la broche (plus communément appelée *pin*) où la LED est connectée. Dans notre cas, si nous voulons allumer la LED, nous devons mettre l'état de la broche sur **HIGH**. L'état de la broche sur **LOW** l'éteindra. Dans MakeCode, pour contrôler l'état d'une broche, sélectionnez le sous-menu **BROCHES**, puis faites glisser le bloc **digital write** à l'intérieur de la boucle **toujours**.

![Broche digital write](/img/ressources/led/broche%20digital%20write.png)

#### Créer le clignotement

Pour créer le clignotement, il est nécessaire que nous puissions voir la LED s'allumer et s'éteindre pendant une durée similaire. Pour créer ce clignotement, nous devons suivre les étapes suivantes :

**1) Créer une pause lorsque la LED est allumée pour voir la lumière :** avant d'éteindre la LED, nous devons attendre un petit temps — une demi-seconde (500 millisecondes) par exemple — avec la lumière allumée. Pour ce faire, ajoutez le bloc **pause** (à l'intérieur du sous-menu **BOUCLES**), et définissez la valeur à 500 (pour 500 millisecondes).

![Créer une pause](/img/ressources/led/créer%20une%20pause.png)

:::tip
Vous pouvez choisir une valeur dans la liste, ou saisir directement une valeur personnalisée.
:::

**2) Éteindre la lumière pendant une durée similaire pour créer le clignotement :** jusqu'à présent, vous avez fait la moitié du travail ! Ajoutez un autre bloc **digital write** et un autre bloc **pause** pour éteindre la LED et attendre à nouveau 500 ms, permettant de créer cet effet de clignotement. Combiné avec la boucle infinie, on peut voir ce clignotement se répéter à l'infini.

![Éteindre la lumière](/img/ressources/led/eteindre%20la%20lumière.png)

:::tip
Au lieu de choisir des blocs dans les sous-menus, vous pouvez cliquer avec le bouton droit de la souris sur un bloc et le "dupliquer".
:::

Grâce à cette activité facile, vous avez découvert comment créer un morceau de code en utilisant la programmation par blocs. Vous pouvez jeter un coup d'oeil à l'éditeur JavaScript pour voir le code généré tel qu'il est indiqué dans la section "Programmer" ci-dessous. Dans les prochaines fiches d'activité, n'hésitez pas à copier/coller directement dans l'éditeur JavaScript de MakeCode le code fourni pour voir le résultat en blocs.

### 4. Programmer la carte

Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton **"Télécharger"**. Copiez le fichier binaire sur le lecteur **DIS_L4IOT** et attendez que la carte finisse de clignoter. Votre premier programme est maintenant en cours d'exécution et la LED intégrée devrait clignoter !

### 5. Exécuter, modifier, s'amuser

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (en appuyant sur le bouton RESET). Essayez de comprendre le code et commencez à le modifier en changeant la période entre deux clignotements. N'hésitez pas à essayer de faire clignoter à différents rythmes ou à faire un SOS visuel en morse.

**Ressource :** [https://en.wikipedia.org/wiki/SOS](https://en.wikipedia.org/wiki/SOS)

---

## Étape 2 - Programmer

<div style={{display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap'}}>
<div style={{flex: '1', minWidth: '280px'}}>

![Programme complet en blocs](/img/ressources/led/lets-steam-screenshot%20(1).png)

</div>
<div style={{flex: '1', minWidth: '280px'}}>

```javascript
forever(function () {
    pins.LED.digitalWrite(true)
    pause(500)
    pins.LED.digitalWrite(false)
    pause(500)
})
```

### Comment cela fonctionne-t-il ?

Voici la traduction en JavaScript de notre programme en blocs. Les mots-clés sont un peu différents : la fonction `digitalWrite` prend un paramètre booléen (`true` ou `false`). La traduction est facile : `true` signifie **HIGH** et `false` signifie **LOW**.

</div>
</div>

---

## Étape 3 - Améliorer

Tentez de créer un feu de signalisation ferroviaire en utilisant l'autre LED intégrée appelée **LED2**.

---

## Aller plus loin

- **Diode électroluminescente** - Apprenez-en plus sur l'histoire des LED, les principes physiques qui les sous-tendent, les typologies et les couleurs.
  [https://en.wikipedia.org/wiki/Light-emitting_diode](https://en.wikipedia.org/wiki/Light-emitting_diode)

- **Derrière MakeCode - LED sur micro:bit** - Comment les LED fonctionnent-elles sur la carte micro:bit ? Apprenez tout cela avec Shawn Hymel (en anglais).
  [https://www.youtube.com/watch?v=qqBmvHD5bCw](https://www.youtube.com/watch?v=qqBmvHD5bCw)

- **Courant et tension - Bases de l'électricité** - Tutoriel à destination des débutants en électronique pour explorer le courant, la tension, leur différence et leur fonctionnement.
  [https://www.codrey.com/dc-circuits/current-and-voltage/](https://www.codrey.com/dc-circuits/current-and-voltage/)

- **Boucles** - Apprenez-en plus sur les boucles dans MakeCode.
  [https://www.youtube.com/watch?v=wxds6MAtUQ0](https://www.youtube.com/watch?v=wxds6MAtUQ0)

---

*Cette fiche fait partie du projet [Let's STEAM](/projets/lets-steam), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

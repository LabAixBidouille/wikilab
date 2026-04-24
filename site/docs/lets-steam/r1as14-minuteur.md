---
id: r1as14-minuteur
title: Minuteur à œufs électronique
sidebar_label: "Minuteur à œufs électronique"
sidebar_position: 14
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><circle cx="12" cy="13" r="9" fill="#140e4e" fillOpacity="0.1"/><circle cx="12" cy="13" r="7" fill="#140e4e" fillOpacity="0.25"/><circle cx="12" cy="13" r="1" fill="#140e4e"/><line x1="12" y1="13" x2="12" y2="8" stroke="#140e4e" strokeWidth="1.5" strokeLinecap="round"/><line x1="12" y1="13" x2="15" y2="15" stroke="#140e4e" strokeWidth="1.5" strokeLinecap="round"/><rect x="10" y="2" width="4" height="2" rx="1" fill="#140e4e"/><line x1="18" y1="5" x2="19.5" y2="3.5" stroke="#140e4e" strokeWidth="1.5" strokeLinecap="round"/></svg> Minuteur à œufs électronique

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--warning">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| Let's STEAM | 35 minutes | Avancé | 11-15 ans |

## Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 1 câble USB Micro-B
- 1 mini-servo SG-90 (1,6 kg)
- Câbles de connexion
- 1 petite feuille de carton (20 cm x 10 cm)
- Des bâtons de bois robustes (moins de 10 cm)

## Prérequis

- [Servomoteurs](/ressources/lets-steam/r1as13-servomoteurs)

<a href="/pdf/lets-steam/LS_R1AS14_Timer_FR.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger en PDF</a>

</div>

<img src="/img/ressources/lets-steam/r1as14-minuteur/icone.svg" alt="Minuteur" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Créons un objet simple mais utile : un minuteur à oeufs ! Cette activité permettra d'appliquer les connaissances acquises sur les servomoteurs à un problème du quotidien.

## Objectifs d'apprentissage

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

:::info[Les bras de servomoteurs]

Les bras de servomoteurs sont des accessoires qui s'adaptent sur l'arbre de sortie et vous permettent de relier mécaniquement la sortie du servomoteur au reste de votre mécanisme. Les servomoteurs sont généralement fournis avec un assortiment de bras de servomoteur.
:::

Malheureusement, les bras exacts inclus ne sont généralement pas spécifiés et peuvent varier. Comme les arbres de sortie des servomoteurs et leurs cannelures varient, les bras sont souvent incompatibles entre les marques et les modèles de servomoteurs.

La façon la plus simple de fixer l'aiguille de votre horloge est d'utiliser un élastique, mais vous pouvez aussi utiliser de la colle chaude ou du scotch.

<div style={{display: 'flex', gap: '0.5rem', margin: '1rem 0', maxWidth: '100%', overflow: 'hidden'}}>
<img src="/img/ressources/lets-steam/r1as14-minuteur/1.jpg" alt="Minuteur étape 1" style={{width: '33%', objectFit: 'contain', borderRadius: '8px'}} />
<img src="/img/ressources/lets-steam/r1as14-minuteur/2.jpg" alt="Minuteur étape 2" style={{width: '33%', objectFit: 'contain', borderRadius: '8px'}} />
<img src="/img/ressources/lets-steam/r1as14-minuteur/3.jpg" alt="Minuteur étape 3" style={{width: '33%', objectFit: 'contain', borderRadius: '8px'}} />
</div>

### 3. Créer le panneau avant du minuteur

Sur le carton, faites un petit trou de la taille de l'arbre de votre servomoteur. Le trou doit se trouver au milieu du côté le plus long de votre carton.

Mettez le servomoteur derrière et fixez l'aiguille d'horloge sur l'arbre du servomoteur.

Tournez le bras en position minimale (angle 0°) et fixez le servomoteur de façon à ce que l'aiguille de l'horloge soit horizontale. Avec un stylo, faites une petite marque pour indiquer 0 seconde. Tournez le bras en position maximum (angle 180°) et faites une petite marque pour indiquer 180 secondes.

<div style={{display: 'flex', gap: '0.5rem', margin: '1rem 0', maxWidth: '100%', overflow: 'hidden'}}>
<img src="/img/ressources/lets-steam/r1as14-minuteur/4.jpg" alt="Panneau avant" style={{width: '50%', objectFit: 'contain', borderRadius: '8px'}} />
<img src="/img/ressources/lets-steam/r1as14-minuteur/5.jpg" alt="Résultat final" style={{width: '50%', objectFit: 'contain', borderRadius: '8px'}} />
</div>

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

---

*Cette fiche fait partie du projet [Let's STEAM](/projets/lets-steam), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

---
id: r1as12-detecteur-mouvement
title: Détecteur de mouvement
sidebar_label: "Alarme de détection de mouvement"
sidebar_position: 12
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#140e4e" fillOpacity="0.1"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" fill="#140e4e" fillOpacity="0.25"/><circle cx="12" cy="12" r="2.5" fill="#140e4e"/><path d="M1 12h3M20 12h3M12 1v3M12 20v3" stroke="#140e4e" strokeWidth="1.5" strokeLinecap="round"/></svg> Détecteur de mouvement : alarme de détection

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--warning">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| Let's STEAM | 30 minutes | Avancé | 11-15 ans |

## Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 1 câble USB Micro-B
- 1 breadboard
- Câbles de connexion
- 1 buzzer piézoélectrique ou un haut-parleur
- 1 petite boîte en carton de bricolage (environ 15x5 cm)

## Prérequis

- [Accéléromètre](/ressources/lets-steam/r1as09-accelerometre)
- [Musique](/ressources/lets-steam/r1as07-musique)

<a href="/pdf/lets-steam/LS_R1AS12_Motion_FR.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger en PDF</a>

</div>

<img src="/img/ressources/alarmedetectionmotion/icone.svg" alt="Détecteur de mouvement" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Dans cette fiche d'activité, nous allons travailler sur un détecteur de mouvement comprenant une alarme avec 2 types de protections : protection contre l'ouverture par la force et détection d'ouverture.

## Objectifs d'apprentissage

- Utiliser le bloc événementiel pour le capteur de distance
- Utiliser le bloc événementiel pour le capteur de mouvement

---

## Introduction

Dans cette fiche d'activité, nous allons travailler sur un détecteur de mouvement, vous permettant de garder en sécurité tous vos objets précieux et importants. Pour les besoins de cette fiche d'activité, votre objet le plus précieux sera contenu dans une boîte. Nous allons créer une alarme avec 2 fonctions :

1. Un déclencheur d'alarme lorsque la boîte est secouée.
2. Un déclencheur d'alarme lorsque quelqu'un ou quelque chose entre dans la boîte.

Cela permettra de découvrir le détecteur de mouvement intégré et ses usages. Un détecteur de mouvement est un dispositif électrique qui utilise un capteur pour détecter un mouvement à proximité. Un tel dispositif est souvent intégré en tant que composant d'un système qui exécute automatiquement une tâche ou alerte un utilisateur en cas de mouvement dans une zone. Ils constituent un élément essentiel de la sécurité, du contrôle automatisé de l'éclairage, de la domotique et d'autres systèmes utiles.

**Ressource :** [https://en.wikipedia.org/wiki/Motion_detector](https://en.wikipedia.org/wiki/Motion_detector)

---

## Étape 1 - Construire

<img src="/img/ressources/alarmedetectionmotion/montage_alarme.png" alt="Schéma de câblage de l'alarme de détection de mouvement" style={{maxWidth: '300px', float: 'right', marginLeft: '1rem', marginBottom: '1rem'}} />

### 1. Câbler le buzzer/haut-parleur

En théorie, un buzzer ou un haut-parleur n'est pas polarisé (cela signifie qu'il n'y a pas de "+" ni de "-"), mais il y a souvent une paire de fils noir/rouge ou des signes ("+" et/ou "-") sur l'appareil. Si vous êtes dans cette configuration, attachez le fil du côté "+" du buzzer à la broche **D3** et l'autre à la broche **GND**. S'il n'y a pas de couleur ou d'indication, branchez simplement un fil sur la broche **D3** et l'autre sur la broche **GND**.

### 2. Connecter la carte à l'ordinateur

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le **connecteur micro-USB ST-LINK** (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé **DIS_L4IOT**. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

### 3. Ouvrir MakeCode

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur.

**Ressource :** [makecode.lets-steam.eu](https://makecode.lets-steam.eu)

### 4. Programmer votre carte

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur **DIS_L4IOT** et attendez que la carte finisse de clignoter — votre alarme est prête.

### 5. Exécuter, modifier, jouer

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé **RESET**). Mettez votre carte programmable dans votre boîte et observez la réaction lorsque vous la secouez ou l'ouvrez. Essayez de comprendre l'exemple et commencez à le modifier en changeant la distance de détection d'ouverture.

---

## Étape 2 - Programmer

```javascript
let isAlarmEnable = false

// Activation/désactivation de l'alarme en cas de pression sur le bouton "Utilisateur"
input.buttonUser.onEvent(ButtonEvent.Click, function () {
    isAlarmEnable = !(isAlarmEnable)
    pins.LED.digitalWrite(isAlarmEnable)
})

// Quand la carte tremble
input.onGesture(Gesture.Shake, function () {
    if (isAlarmEnable) {
        music.playTone(880, 3000)
    }
})

// Lorsque la distance est supérieure à 1 000 millimètres (1 mètre)
input.onDistanceConditionChanged(DistanceCondition.Far, 1000, DistanceUnit.Millimeter,
    function () {
        if (isAlarmEnable) {
            music.playTone(880, 3000)
        }
    })
```

### Comment cela fonctionne-t-il ?

Ce programme est une simple réutilisation de ce qui a déjà été appris dans les fiches d'activités précédentes. Il y a 3 parties en plus d'une variable permettant de connaître l'état de l'alarme.

#### Activer/désactiver l'alarme

Le premier bloc vise à détecter quand le bouton intégré est pressé. Lorsque cet événement se produit, nous inversons l'état de l'alarme : `isAlarmEnable = !(isAlarmEnable)`.

#### Détection des secousses

Lorsque la carte est secouée, si l'alarme est activée (`if (isAlarmEnable) {...}`), cela signifie que quelqu'un essaie de forcer notre boîte — nous devons donc faire sonner l'alarme !

#### Détection d'ouverture

Considérons que votre boîte est fermée. La distance entre l'objet à l'intérieur de la boîte et le couvercle est presque nulle. Lorsque quelqu'un ouvre votre boîte, votre objet n'est plus en contact direct avec le couvercle. Dans ce cas, la distance entre votre précieux trésor et l'objet le plus proche sera plus élevée que précédemment. Vous pouvez alors détecter l'ouverture de votre boîte en évaluant le changement de la variable de distance (`onDistanceConditionChanged`). Cela permettra, lorsqu'on détectera une distance supérieure à 1 000 millimètres (cette distance peut être modifiée) avec votre alarme activée, d'identifier que quelqu'un a ouvert le contenant et que l'alarme doit sonner !

---

## Étape 3 - Améliorer

1. En **ajoutant une deuxième variable**, vous pouvez faire en sorte que la sonnerie de l'alarme se répète indéfiniment jusqu'à ce que l'alarme soit désactivée.
2. En ajoutant **un deuxième ton au son de l'alarme**, vous pouvez en modifier la mélodie.
3. Vous pouvez **donner à l'utilisateur un délai** pour désactiver l'alarme avant qu'elle ne sonne.

---

## Aller plus loin

- **Alarme infrarouge Arduino** - Tutoriel pour construire votre propre alarme infrarouge en utilisant un capteur de proximité infrarouge.
  [https://www.instructables.com/Arduino-IR-Alarm/](https://www.instructables.com/Arduino-IR-Alarm/)

- **Alarme de porte Arduino** - Appliquez ce que vous avez appris pour construire une alarme de porte *do it yourself* (DIY).
  [https://www.instructables.com/Arduino-Door-Alarm-1/](https://www.instructables.com/Arduino-Door-Alarm-1/)

- **Alarme de porte radio** - Tutoriel pour créer une alarme sans fil qui vous prévient lorsque quelqu'un ouvre une porte.
  [https://microbit.org/projects/make-it-code-it/door-alarm/](https://microbit.org/projects/make-it-code-it/door-alarm/)

- **Créez une alarme pour votre chambre** - Programmez une alarme pour votre chambre avec une carte micro:bit.
  [https://www.youtube.com/watch?v=aqRh9Phjcwc](https://www.youtube.com/watch?v=aqRh9Phjcwc)

---

*Cette fiche fait partie du projet [Let's STEAM](/projets/lets-steam), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

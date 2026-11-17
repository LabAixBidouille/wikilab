---
id: r1as08-theremine
title: Fabriquer un thérémine
sidebar_label: "Fabriquer un thérémine"
sidebar_position: 8
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Fabriquer un thérémine

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Musique</span>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--warning">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| Let's STEAM | 30 minutes | Avancé | 11-15 ans |

## Matériel

- 1 carte programmable « STM32 IoT Node Board »
- 1 câble USB Micro-B
- 1 buzzer piézoélectrique ou un haut-parleur
- 1 breadboard
- Câbles de connexion

## Prérequis

- [Capteurs de lumière](/ressources/lets-steam/r1as04-capteur-lumiere)
- [Code Morse](/ressources/lets-steam/r1as06-morse)

<PdfLink href="/pdf/lets-steam/LS_R1AS08_Theremin_FR.pdf">Télécharger en PDF</PdfLink>

</div>

<img src="/img/ressources/lets-steam/r1as08-theremine/icone.png" alt="Thérémine" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

:::info[Version STeaMi / MicroPython]

Une version de cette activité portée sur la carte **STeaMi** en **MicroPython** est disponible dans le projet I-Novmicro : [Fabriquer un thérémine](/ressources/inovmicro-exao/i08-theremine).

:::

## De quoi parle-t-on ?

Un thérémine est un instrument de musique électronique dont on peut jouer sans le toucher. Le concept original repose sur deux antennes qui détectent la position des mains : l'une règle le volume, l'autre la hauteur du son.

## Objectifs d'apprentissage

- Utiliser un capteur de distance et comprendre son fonctionnement
- Faire de la musique avec un instrument vraiment étrange
- Utiliser la fonction `map` pour transformer un nombre d'une plage à une autre

---

## Introduction

Le thérémine doit son nom à son inventeur, Léon Thérémine, qui a fait breveter l'appareil en 1928. Le théréministe (l'interprète) en joue sans contact physique. La section de contrôle de l'instrument comporte généralement deux antennes métalliques, qui détectent la position relative des mains du théréministe et contrôlent les oscillateurs : la fréquence avec une main, l'amplitude (le volume) avec l'autre. Les signaux électriques émis par le thérémine sont amplifiés et envoyés à un haut-parleur.

La version de cette fiche est plus simple : le capteur de distance ne contrôle que la hauteur du son, et le volume est fixé à l'avance. Faisons de la musique !

**Ressources :** https://en.wikipedia.org/wiki/Theremin, https://youtu.be/x0NVb25p1oU

---

## Étape 1 - Construire

<img src="/img/ressources/lets-steam/r1as08-theremine/montage_theremin.png" alt="Schéma de câblage du thérémine" style={{maxWidth: '300px', float: 'right', marginLeft: '1rem', marginBottom: '1rem'}} />

### 1. Câbler le buzzer/haut-parleur

En théorie, un buzzer ou un haut-parleur n'est pas polarisé (cela signifie qu'il n'y a pas de « + » ni de « - »), mais il y a souvent une paire de fils noir/rouge ou des signes (« + » et/ou « - ») sur l'appareil. Si vous êtes dans cette configuration, attachez le fil du côté « + » du buzzer à la broche **D3** et l'autre à la broche **GND**. S'il n'y a pas de couleur ou d'indication, branchez simplement un fil sur la broche **D3** et l'autre sur la broche **GND**.

### 2. Connecter la carte à l'ordinateur

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le **connecteur micro-USB ST-LINK** (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé **DIS_L4IOT**. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

### 3. Ouvrir MakeCode

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton « Nouveau projet ». Donnez à votre projet un nom plus expressif que « Sans titre » et lancez votre éditeur.

**Ressource :** [makecode.lets-steam.eu](https://makecode.lets-steam.eu)

### 4. Programmer la carte

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section « Programmer » ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton « Télécharger ». Copiez le fichier binaire sur le lecteur **DIS_L4IOT** et attendez que la carte finisse de clignoter : votre programme est prêt !

### 5. Exécuter, modifier, jouer

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé **RESET**). Essayez de comprendre l'exemple et commencez à le modifier.

---

## Étape 2 - Programmer

```javascript
let distance = 0
forever(function () {
    // Mesurer la distance
    distance = input.distance(DistanceUnit.Millimeter)

    if (distance > 500) {
        // Convertir la distance en fréquence
        let note = Math.map(distance, 0, 500, 440, 830)
        music.ringTone(note)
    } else {
        music.stopAllSounds()
    }
})
```

### Fonctionnement du programme

Dans ce programme, il y a 2 variables. La première, `distance`, est utilisée pour mémoriser la distance et déterminer la note à jouer. Ensuite, il y a `note`, qui n'est pas indispensable au fonctionnement mais rend chaque étape du programme plus lisible. Elle contient la transformation de la distance en fréquence du ton.

#### Mesurer la distance

Pour mesurer la distance, le programme appelle la fonction `input.distance(DistanceUnit.Millimeter)`. Le paramètre `DistanceUnit.Millimeter` demande à la fonction un résultat en millimètres (1 mètre = 1 000 millimètres).

#### Condition

La condition `if (distance > 500) { ... }` indique que le programme ne joue un son que si la distance mesurée est inférieure ou égale à 500 millimètres.

#### Convertir la distance en fréquence

La partie la plus importante est la conversion. Elle passe par une fonction mathématique appelée `map`, qui transforme une valeur d'une plage à une autre : ici, de la plage des distances à la plage des fréquences. Comme vous pouvez le voir dans le code ci-dessus, cette fonction prend cinq paramètres :

| Paramètre | Description |
|-----------|-------------|
| `value` | La valeur à transformer |
| `in_min` | La valeur minimale de la plage d'entrée (distance) |
| `in_max` | La valeur maximale de la plage d'entrée (distance) |
| `out_min` | La valeur minimale de la plage de sortie (fréquence) |
| `out_max` | La valeur maximale de la plage de sortie (fréquence) |

Cette ligne transforme donc la distance (avec une plage de 0 mm à 500 mm) en fréquence (avec une plage de 440 Hz à 830 Hz).

:::info[Fréquences et octave]

La gamme de fréquences choisie, de 440 Hz à 830 Hz, couvre une octave : vous pouvez donc y trouver toutes les notes (LA, SI, DO, RÉ, MI, FA, SOL).
:::

Il reste à jouer cette fréquence, avec la fonction `music.ringTone(note)`.

---

## Étape 3 - Améliorer

1. Modifiez la valeur de `map` pour ajouter des octaves et/ou de la distance afin d'améliorer votre musique.
2. Essayez d'ajouter un potentiomètre pour contrôler le volume.

---

## Aller plus loin

- **Thérémine** : découvrez l'histoire, les principes de fonctionnement et les utilisations du thérémine.
  https://en.wikipedia.org/wiki/Theremin

- **Capteur de distance à anneau LED** : découvrez un projet amusant, qui aboutira à un capteur de recul.
  https://www.instructables.com/LED-Ring-Distance-Sensor/

- **Détecteur du niveau d'eau** : découvrez les capteurs à ultrasons qui convertissent l'énergie électrique en ondes acoustiques.
  https://www.instructables.com/Water-Level-Detector-2/

- **Mangeoire pour chats** : utilisez un capteur à ultrasons pour construire une mangeoire automatique pour chats.
  https://www.instructables.com/Cat-Feeder/

---

*Cette fiche fait partie du projet [Let's STEAM](/projets/lets-steam), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

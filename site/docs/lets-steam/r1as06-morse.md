---
id: r1as06-morse
title: Messages en code Morse
sidebar_label: "Messages en code Morse"
sidebar_position: 6
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="2" y="10" width="20" height="4" rx="1" fill="#140e4e" opacity="0.1"/><circle cx="5" cy="12" r="1.5" fill="#140e4e" opacity="1.0"/><circle cx="9" cy="12" r="1.5" fill="#140e4e" opacity="1.0"/><rect x="12" y="11" width="4" height="2" rx="0.5" fill="#140e4e" opacity="1.0"/><rect x="2" y="6" width="3" height="12" rx="1" fill="#140e4e" opacity="0.25"/><rect x="19" y="6" width="3" height="12" rx="1" fill="#140e4e" opacity="0.25"/><line x1="3.5" y1="6" x2="3.5" y2="2" stroke="#140e4e" strokeWidth="1.5" opacity="0.25"/><circle cx="3.5" cy="1.5" r="1" fill="#140e4e" opacity="0.25"/></svg> Messages en code Morse

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
- 1 buzzer piézoélectrique ou un haut-parleur
- 2 boutons
- Câbles de connexion

## Prérequis

- [Breadboard : premier circuit](/ressources/lets-steam/r1as02-breadboard)
- [Boutons et affichage LED](/ressources/lets-steam/r1as03-boutons)

<a href="/pdf/lets-steam/LS_R1AS06_Morse_FR.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger en PDF</a>

</div>

<img src="/img/ressources/lets-steam/r1as06-morse/icone.svg" alt="Code Morse" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Le code Morse est une méthode utilisée dans les télécommunications pour coder les caractères d'un texte sous forme de séquences normalisées de deux durées de signal différentes, appelées **points** et **tirets**.

**Ressource :** [https://en.wikipedia.org/wiki/Telecommunication](https://en.wikipedia.org/wiki/Telecommunication)

<img src="/img/ressources/lets-steam/r1as06-morse/International_Morse_Code-fr.svg" alt="Tableau du code Morse international" style={{maxWidth: '250px'}} />

## Objectifs d'apprentissage

- Câbler et utiliser un buzzer passif
- Communiquer avec le code Morse

---

## Étape 1 - Construire

:::info[Le buzzer]

Des micro-ondes aux jeux télévisés, les buzzers sont partout autour de nous et permettent de signaler quelque chose par un signal sonore. Pour émettre un son (ou un bruit), le buzzer contient une fine membrane (en quartz), qui vibre à une fréquence donnée (entre 20 Hz et 20 000 Hz, qui sont les fréquences audibles). Dans cette fiche d'activité, vous allez fixer quelques boutons et un buzzer à la carte et apprendre à communiquer en **Morse** !

**Ressources :** [https://en.wikipedia.org/wiki/Buzzer](https://en.wikipedia.org/wiki/Buzzer), [https://en.wikipedia.org/wiki/Morse_code](https://en.wikipedia.org/wiki/Morse_code)
:::

<img src="/img/ressources/lets-steam/r1as06-morse/montage_buzzer.png" alt="Schéma de câblage du buzzer" style={{maxWidth: '300px', float: 'right', marginLeft: '1rem', marginBottom: '1rem'}} />

### 1. Câbler le buzzer

En théorie, un buzzer ou un haut-parleur n'est pas polarisé (cela signifie qu'il n'y a pas de "+" ni de "-"), mais il y a souvent une paire de fils noir/rouge ou des signes ("+" et/ou "-") sur l'appareil. Si vous êtes dans cette configuration, attachez le fil du côté "+" du buzzer à la broche **D3** et l'autre à la broche **GND**. S'il n'y a pas de couleur ou d'indication, branchez simplement un fil sur la broche **D3** et l'autre sur la broche **GND**.

### 2. Câbler les boutons

Connectez un côté de chaque bouton à la broche **GND** de la carte. Puis attachez les autres côtés sur la broche **A0** (bouton 1) et la broche **A1** (bouton 2).

### 3. Connecter la carte à l'ordinateur

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le **connecteur micro-USB ST-LINK** (sur le coin droit de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé **DIS_L4IOT**. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

### 4. Ouvrir MakeCode

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur.

**Ressource :** [makecode.lets-steam.eu](https://makecode.lets-steam.eu)

### 5. Programmer la carte

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton **"Télécharger"**. Copiez le fichier binaire sur le lecteur **DIS_L4IOT** et attendez que la carte finisse de clignoter — votre travail est prêt !

### 6. Exécuter, modifier, jouer

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé **RESET**). Essayez de comprendre l'exemple et commencez à le modifier.

---

## Étape 2 - Programmer

```javascript
// Envoyer un signal court
input.buttonA0.onEvent(ButtonEvent.Click, function () {
    music.playTone(440, 100)
})

// Envoyer un signal long
input.buttonA1.onEvent(ButtonEvent.Click, function () {
    music.playTone(440, 300)
})
```

### Comment cela fonctionne-t-il ?

Le code est vraiment simple ! Vous pouvez voir les deux fonctions `onEvent` qui permettent de détecter quand un bouton est pressé.

Ensuite, nous avons simplement utilisé la fonction `music.playTone`, avec 2 paramètres :

- **440** : la fréquence que nous voulons jouer
- **100 ou 300** : la durée de la tonalité en millisecondes (1 seconde = 1 000 millisecondes)

**Maintenant que vous avez compris les bases, nous allons envoyer un message en Morse !**

### Signalisation en Morse

Le code Morse est une méthode de communication qui code les caractères sous la forme d'une **séquence de deux signaux de durées différentes**, appelés **points** et **tirets**.

Un **point** est un **signal court** tandis qu'un **tiret** est un **signal plus long**. En combinant plusieurs séquences, on peut transmettre un message composé de plusieurs mots. Le code Morse peut être émis de différentes manières : à l'aide d'une lampe (flash), d'une radio ou d'une carte comme celle que vous avez !

**Code Morse International — règles de base :**

1. La longueur d'un point est d'une unité.
2. Un tiret représente trois unités.
3. L'espace entre les parties d'une même lettre est d'une unité.
4. L'espace entre deux lettres est de trois unités.
5. L'espace entre deux mots est de sept unités.

Essayez d'envoyer "**SOS**" à quelqu'un !

---

## Étape 3 - Améliorer

1. Pour aider les personnes malentendantes, ajoutez une LED pour indiquer quand le buzzer se déclenche.

2. Vous pouvez essayer de créer votre musique préférée en jouant plusieurs tonalités lorsqu'un bouton est pressé.

3. Ajoutez d'autres boutons et essayez de jouer une mélodie simple.

---

## Aller plus loin

- **Le code Morse** - Apprenez-en plus sur l'histoire du code Morse, les représentations, le timing, les vitesses et les méthodes d'apprentissage.
  [https://en.wikipedia.org/wiki/Morse_code](https://en.wikipedia.org/wiki/Morse_code)

- **Notions de base sur les buzzers** - Technologies, tonalités et circuits de commande.
  [https://www.cuidevices.com/blog/buzzer-basics-technologies-tones-and-driving-circuits](https://www.cuidevices.com/blog/buzzer-basics-technologies-tones-and-driving-circuits)

- **Son** - Découvrez les bases de l'acoustique, la physique et la perception des sons.
  [https://en.wikipedia.org/wiki/Sound](https://en.wikipedia.org/wiki/Sound)

- **Piano d'épingles à linge avec micro:bit** - Lire un signal analogique (0 à 1023) à partir de la broche.
  [https://browndoggadgets.dozuki.com/Guide/Clothespin+Piano+with+micro:bit/302](https://browndoggadgets.dozuki.com/Guide/Clothespin+Piano+with+micro:bit/302)

---

*Cette fiche fait partie du projet [Let's STEAM](/projets/lets-steam), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

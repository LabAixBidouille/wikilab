---
id: r1as07-musique
title: Musique
sidebar_label: "Musique : créons une mélodie"
sidebar_position: 7
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="1" y="1" width="22" height="22" rx="3" fill="#140e4e" opacity="0.1"/><path d="M9 17.5V7l10-2v10.5" stroke="#140e4e" strokeWidth="1.5" fill="none" opacity="0.25"/><ellipse cx="6.5" cy="17.5" rx="2.5" ry="2" fill="#140e4e" opacity="1.0"/><ellipse cx="16.5" cy="15.5" rx="2.5" ry="2" fill="#140e4e" opacity="1.0"/><line x1="9" y1="10" x2="19" y2="8" stroke="#140e4e" strokeWidth="1" opacity="0.25"/></svg> Musique : créons une mélodie

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Musique</span>
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
- [Code Morse](/ressources/lets-steam/r1as06-morse)

<a href="/pdf/lets-steam/LS_R1AS07_Music_FR.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger en PDF</a>

</div>

<img src="/img/ressources/music/icone.svg" alt="Musique" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Créons une mélodie agréable à nos oreilles, inspirée des consoles 8 bits.

## Objectifs d'apprentissage

- Jouer de la musique avec une carte programmable

---

## Étape 1 - Construire

:::info[Musique 8 bits et chiptune]

Alors que nous faisons beaucoup de bruit à l'aide de buzzers et de haut-parleurs dans diverses fiches d'activité, comme lors de la fabrication d'un thérémine avec un capteur de distance ou le jeu de questions-réponses avec des boutons et des LED, voyons ce qui peut être fait pour créer une mélodie plus agréable pour les oreilles. Nous allons apprendre à jouer quelques notes et tonalités à l'aide d'un programme pour diffuser une mélodie bien connue. Pour rester dans l'ambiance des sons électroniques, nous commencerons par une musique inspirée des consoles 8 bits. Le **chiptune**, également connu sous le nom de musique chip ou musique 8 bits, est un style de musique électronique synthétisée réalisée à l'aide des puces sonores ou synthétiseurs PSG (*Programmable Sound Generator* ou générateur de son programmable) des machines d'arcade, ordinateurs et consoles de jeux vidéo vintage.

**Ressource :** [https://en.wikipedia.org/wiki/Chiptune](https://en.wikipedia.org/wiki/Chiptune)
:::

<img src="/img/ressources/music/dessin%20mico.png" alt="Illustration du micro-contrôleur" style={{maxWidth: '300px', float: 'right', marginLeft: '1rem', marginBottom: '1rem'}} />

### 1. Câbler le buzzer/haut-parleur

En théorie, un buzzer ou un haut-parleur n'est pas polarisé (cela signifie qu'il n'y a pas de "+" ni de "-"), mais il y a souvent une paire de fils noir/rouge ou des signes ("+" et/ou "-") sur l'appareil. Si vous êtes dans cette configuration, attachez le fil du côté "+" du buzzer à la broche **D3** et l'autre à la broche **GND**. S'il n'y a pas de couleur ou d'indication, branchez simplement un fil sur la broche **D3** et l'autre sur la broche **GND**.

### 2. Connecter la carte à l'ordinateur

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le **connecteur micro-USB ST-LINK** (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé **DIS_L4IOT**. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

### 3. Ouvrir MakeCode

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur.

**Ressource :** [makecode.lets-steam.eu](https://makecode.lets-steam.eu)

### 4. Installer l'extension

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut "prêt à l'emploi" et vous devrez installer une extension.

:::info[Les extensions MakeCode]

Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de robotique et bien plus encore.
:::

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. Si vous cliquez sur **AVANCÉ**, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton.

Dans la liste des extensions disponibles, vous pouvez facilement trouver l'extension **Music** qui sera utilisée pour cette activité. Si elle n'est pas directement disponible sur votre écran, vous pouvez la rechercher à l'aide de l'outil de recherche. Cliquez sur l'extension que vous souhaitez utiliser et un nouveau groupe de blocs apparaîtra sur l'écran principal.

### 5. Programmer la carte

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton **"Télécharger"**. Copiez le fichier binaire sur le lecteur **DIS_L4IOT** et attendez que la carte finisse de clignoter — votre programme est prêt !

### 6. Exécuter, modifier, jouer

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé **RESET**). Essayez de comprendre l'exemple et commencez à le modifier en changeant la période entre deux notes.

![MakeCode Musique](/img/ressources/music/makecode-musique.png)

---

## Étape 2 - Programmer

<div style={{display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap'}}>
<div style={{flex: '2', minWidth: '350px'}}>

```javascript
music.playTone(330, music.beat(BeatFraction.Whole))
music.playTone(247, music.beat(BeatFraction.Half))
music.playTone(262, music.beat(BeatFraction.Half))
music.playTone(294, music.beat(BeatFraction.Whole))
music.playTone(262, music.beat(BeatFraction.Half))
music.playTone(247, music.beat(BeatFraction.Half))
music.playTone(220, music.beat(BeatFraction.Whole))
music.playTone(220, music.beat(BeatFraction.Half))
music.playTone(262, music.beat(BeatFraction.Half))
music.playTone(330, music.beat(BeatFraction.Whole))
music.playTone(294, music.beat(BeatFraction.Half))
music.playTone(262, music.beat(BeatFraction.Half))
music.playTone(247, music.beat(BeatFraction.Whole))
music.playTone(247, music.beat(BeatFraction.Half))
music.playTone(262, music.beat(BeatFraction.Half))
music.playTone(294, music.beat(BeatFraction.Whole))
music.playTone(330, music.beat(BeatFraction.Whole))
music.playTone(262, music.beat(BeatFraction.Whole))
music.playTone(220, music.beat(BeatFraction.Whole))
music.playTone(220, music.beat(BeatFraction.Whole))
music.playTone(294, music.beat(BeatFraction.Whole))
music.playTone(349, music.beat(BeatFraction.Half))
music.playTone(440, music.beat(BeatFraction.Half))
music.playTone(440, music.beat(BeatFraction.Half))
music.playTone(392, music.beat(BeatFraction.Half))
music.playTone(349, music.beat(BeatFraction.Half))
music.playTone(330, music.beat(BeatFraction.Whole))
music.playTone(262, music.beat(BeatFraction.Whole))
music.playTone(330, music.beat(BeatFraction.Whole))
music.playTone(294, music.beat(BeatFraction.Half))
music.playTone(262, music.beat(BeatFraction.Half))
music.playTone(247, music.beat(BeatFraction.Whole))
music.playTone(247, music.beat(BeatFraction.Half))
```

</div>
<div style={{flex: '1', minWidth: '200px'}}>

![Capture d'écran MakeCode du programme musique](/img/ressources/music/lets-steam-screenshot%20(6).png)

</div>
</div>

### Comment cela fonctionne-t-il ?

Ce programme représente une séquence de notes avec une durée. La compréhension de cette activité est davantage liée à la musique qu'à la programmation.

La bibliothèque musicale intégrée à MakeCode nous permet de jouer de la musique sur notre carte. Pour jouer une note, nous utilisons la commande suivante :

![Commande MakeCode play tone](/img/ressources/music/commandemiddkeC.png)

```
play tone at [Middle C] for [1/2 beat]
```

Où `Middle C` = note et `1 beat` = 1 temps.

### Transcription de chansons à partir de partitions

Si nous voulons recréer nos chansons préférées, nous devons d'abord avoir une connaissance de base des partitions. Voici un rappel des notes les plus courantes utilisées dans une partition musicale :

```
C4  D4  E4  F4  G4  A4  B4  C5  D5  E5  F5  G5  A5
```

Pour choisir la bonne note sur MakeCode, vous pouvez cliquer sur le nom de la note et faire apparaître le piano virtuel. Chaque touche correspond à une note spécifique (Low, Middle, High).

<div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start', flexWrap: 'wrap', margin: '1rem 0'}}>
<img src="/img/ressources/music/music_notation.png" alt="Notation musicale" style={{flex: '1', maxWidth: '250px'}} />
<img src="/img/ressources/music/scale_3.png" alt="Piano virtuel" style={{flex: '2', maxWidth: '500px'}} />
</div>

### Durée de la note

Si nous regardons à nouveau les notes d'une partition de musique, vous remarquerez qu'elles ont des formes et des couleurs différentes. Ces différentes formes et couleurs indiquent les différentes durées appelées **valeur de note** et exprimées en nombre de temps (beat).

| Symbole | Nom (EN) | Nom (FR) | Valeur | Code MakeCode |
|---------|----------|----------|--------|---------------|
| o | Whole note | Ronde | 4 beats | `4 beat` |
| d | Half note | Blanche | 2 beats | `2 beat` |
| ♩ | Quarter note | Noire | 1 beat | `1 beat` |
| ♪ | Eighth note | Croche | 1/2 beat | `1/2 beat` |
| ♬ | Sixteenth note | Double croche | 1/4 beat | `1/4 beat` |

---

## Étape 3 - Améliorer

1. Écrivez un programme qui joue la partition suivante (gamme C majeure) :
   `C4 D4 E4 F4 G4 A4 B4 C5 D5 E5 F5 G5`

<img src="/img/ressources/music/gamme-c-majeure.png" alt="Gamme C majeure" style={{maxWidth: '400px', margin: '0.5rem 0 1rem'}} />

2. Essayez de reproduire le thème de Dark Vador avec MakeCode à partir de la partition fournie.

<img src="/img/ressources/music/darkvador.png" alt="Partition Dark Vador" style={{maxWidth: '500px', margin: '0.5rem 0 1rem'}} />

3. En utilisant un capteur de distance comme détecteur de présence, créez un programme qui joue la musique de votre choix chaque fois qu'il détecte quelque chose.

---

## Aller plus loin

- **233 projets musicaux** utilisant Arduino.
  [https://create.arduino.cc/projecthub/projects/tags/music](https://create.arduino.cc/projecthub/projects/tags/music)

- **Comment faire de la musique avec des micro:bits** - En utilisant des pinces crocodiles, vous pouvez connecter toutes sortes de choses à votre micro:bit, y compris un haut-parleur.
  [https://www.youtube.com/watch?v=bm7MGKspk0o](https://www.youtube.com/watch?v=bm7MGKspk0o)

- **Codage avec micro:bit - Partie 4 - Faire de la musique** - Jetez un oeil aux fonctionnalités son et audio de micro:bit et testez une variété de différents buzzers et haut-parleurs.
  [https://www.youtube.com/watch?v=6hxvLZSM_pM](https://www.youtube.com/watch?v=6hxvLZSM_pM)

- **Faire de la musique avec micro:bit** - Utiliser la bibliothèque musicale intégrée à MakeCode pour jouer de la musique sur notre micro:bit.
  [https://www.teachwithict.com/microbit-music.html](https://www.teachwithict.com/microbit-music.html)

---

*Cette fiche fait partie du projet [Let's STEAM](/projets/lets-steam), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

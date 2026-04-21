---
id: r1as05-potentiometre
title: Potentiomètre
sidebar_label: "Potentiomètre"
sidebar_position: 5
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><circle cx="12" cy="12" r="10" fill="#140e4e" opacity="0.1"/><circle cx="12" cy="12" r="10" fill="none" stroke="#140e4e" strokeWidth="1.5" opacity="1.0"/><circle cx="12" cy="12" r="3" fill="#140e4e" opacity="0.25"/><line x1="12" y1="12" x2="7" y2="5" stroke="#140e4e" strokeWidth="2" strokeLinecap="round" opacity="1.0"/><circle cx="12" cy="12" r="1" fill="#140e4e" opacity="1.0"/><path d="M6 19.5a10 10 0 0 1-1.5-2" stroke="#140e4e" strokeWidth="1" strokeLinecap="round" opacity="0.25"/><path d="M18 19.5a10 10 0 0 0 1.5-2" stroke="#140e4e" strokeWidth="1" strokeLinecap="round" opacity="0.25"/></svg> Potentiomètre

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--warning">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| Let's STEAM | 20 minutes | Intermédiaire | 11-15 ans |

## Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 1 câble USB Micro-B
- 1 breadboard
- 1 potentiomètre
- 1 set de LED
- 1 set de résistances
- Câbles de connexion

## Prérequis

- [Faisons clignoter une LED](/ressources/lets-steam/r1as01-led)
- [Breadboard : premier circuit](/ressources/lets-steam/r1as02-breadboard)
- [Capteurs de lumière](/ressources/lets-steam/r1as04-capteur-lumiere)

<a href="/pdf/lets-steam/LS_R1AS05_Potentiometer_FR.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger en PDF</a>

</div>

<img src="/img/ressources/potentiometre/icone.svg" alt="Potentiomètre" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Dans cette fiche d'activité, nous allons apprendre ce qu'est un potentiomètre en programmant la carte pour régler la luminosité d'une LED en tournant un bouton.

## Objectifs d'apprentissage

- Câbler les composants externes à la carte
- Lire une entrée analogique à l'aide d'un potentiomètre
- Utiliser une entrée analogique pour écrire une sortie analogique

---

## Étape 1 - Construire

:::info[Concept clé : le potentiomètre]

Un potentiomètre est une **résistance à trois bornes** avec un contact glissant ou rotatif qui forme un **diviseur de tension** réglable. Si l'on utilise seulement deux bornes, une extrémité et le curseur, il agit comme une résistance variable ou un rhéostat. L'instrument de mesure appelé potentiomètre est essentiellement un diviseur de tension utilisé pour mesurer le potentiel électrique (tension) ; le composant est une mise en oeuvre du même principe, d'où son nom.

Les potentiomètres sont couramment utilisés pour **contrôler des dispositifs électriques** tels que les commandes de volume des équipements audio. Les potentiomètres actionnés par un mécanisme peuvent être utilisés comme transducteurs de position, par exemple dans un joystick.

Les potentiomètres sont rarement utilisés pour contrôler directement une puissance importante (plus d'un watt) car la puissance dissipée serait comparable à la puissance de la charge contrôlée.

**Ressource :** [https://en.wikipedia.org/wiki/Potentiometer](https://en.wikipedia.org/wiki/Potentiometer)
:::

<img src="/img/ressources/potentiometre/bitmap.png" alt="Schéma de câblage du potentiomètre" style={{maxWidth: '300px', float: 'right', marginLeft: '1rem', marginBottom: '1rem'}} />

### 1. Câbler le potentiomètre

Connectez la broche gauche du potentiomètre à **GND**. La broche de droite doit être connectée à **3,3 V**. Connectez celle du milieu à **A0**.

### 2. Câbler la LED

Connectez **l'anode (+)** de la LED sur **D9**. Connectez la **cathode (-)** de la LED à une **résistance (330 ohms)**. Puis connectez le côté non connecté de la résistance à **GND**.

### 3. Connecter la carte à l'ordinateur

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le **connecteur micro-USB ST-LINK** (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé **DIS_L4IOT**. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

### 4. Ouvrir MakeCode

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur.

**Ressource :** [makecode.lets-steam.eu](https://makecode.lets-steam.eu)

### 5. Programmer la carte

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton **"Télécharger"**. Copiez le fichier binaire sur le lecteur **DIS_L4IOT** et attendez que la carte finisse de clignoter — votre carte est prête !

### 6. Exécuter, modifier, jouer

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé **RESET**). Essayez de comprendre l'exemple et commencez à le modifier.

---

## Étape 2 - Programmer

```javascript
forever(function () {
    pins.D9.analogWrite(pins.A0.analogRead())
})
```

### Comment cela fonctionne-t-il ?

Le code se compose de trois éléments :

- un bloc `forever` ;
- un bloc `analogRead` ;
- un bloc `analogWrite`.

Le bloc `forever` met en oeuvre "une boucle" qui continue à exécuter les instructions jusqu'à ce que la carte soit éteinte.

Le bloc `analogRead` est utilisé pour obtenir la valeur du potentiomètre sur la broche A0. Cette valeur est un nombre entier compris entre 0 et 1023. En tournant le bouton du potentiomètre, on modifie la valeur.

:::info[Diviseur de tension]

Le potentiomètre agit comme un diviseur de tension réglable. En changeant la position du bouton du potentiomètre, vous modifiez la tension appliquée sur A0. Plus vous le tournez vers la gauche, plus la tension sera proche de 0 V. Plus vous le tournez vers la droite, plus la tension sera proche de 3,3 V.
:::

:::info[Entrée analogique]

Une broche d'entrée analogique peut être utilisée pour lire une valeur comprise entre 0 et 1023. Cette valeur est proportionnelle à la tension appliquée à la broche, qui doit être comprise entre 0 V et 3,3 V.
:::

Le bloc `analogWrite` est utilisé pour allumer la LED sur D9. En utilisant `analogWrite`, la carte est capable de limiter la tension à une certaine valeur pour rendre la LED plus ou moins brillante. La luminosité est définie par la valeur d'`analogRead` sur la broche A0 : plus la valeur est élevée, plus la LED est lumineuse.

:::info[Modulation de largeur d'impulsion (PWM)]

En utilisant la broche D9, nous sommes en mesure d'écrire une valeur analogique via une broche numérique sur la carte. La broche D9, comme quelques autres broches de la carte, supporte la **modulation de largeur d'impulsion** (*Pulse Width Modulation* ou PWM). Cette technique utilise des fonctionnements tout ou rien pour simuler différentes tensions et donc différents signaux analogiques. La valeur passée à `analogWrite` doit être comprise entre 0 et 255. 0 correspond à une tension de 0 V et 255 à 3,3 V.
:::

Comme vous le verrez en utilisant ce programme, vous n'utiliserez pas la gamme complète du potentiomètre. Vous pouvez transformer la plage de valeurs du potentiomètre (0...1023) en plage de valeurs du PWM (0...255) avec la fonction `map`.

---

## Étape 3 - Améliorer

1. En utilisant la fonction `map`, essayez d'utiliser toute la plage du potentiomètre. Vous pouvez définir deux variables pour être plus précis et séparer la lecture, la transformation et l'écriture dans des cas spécifiques.

2. Ajoutez une autre LED et inversez la valeur du potentiomètre, de sorte que la deuxième LED s'éteigne lorsque la première s'allume.

3. Utilisez le potentiomètre pour contrôler le volume du son d'un buzzer. Utilisez un potentiomètre pour contrôler la position d'un servomoteur.

---

## Aller plus loin

- **Modulation de largeur d'impulsion** - Tutoriel Arduino sur l'utilisation d'une sortie analogique (PWM) pour faire clignoter une LED.
  [https://www.arduino.cc/en/Tutorial/Foundations/PWM](https://www.arduino.cc/en/Tutorial/Foundations/PWM)

- **Diviseurs de tension** - Découvrez comment les diviseurs de tension se comportent.
  [https://learn.sparkfun.com/tutorials/voltage-dividers](https://learn.sparkfun.com/tutorials/voltage-dividers)

- **Jeu de pong Arduino avec une matrice de 24x16 LED avec MAX7219** - Construire une petite console de pong.
  [https://www.youtube.com/watch?v=dK9F5AJM2XI](https://www.youtube.com/watch?v=dK9F5AJM2XI)

- **Jeu du potentiomètre** - Contrôlez le personnage dans un jeu à l'aide d'un potentiomètre.
  [https://www.hackster.io/matejadjukic03/potentiometer-game-05ee93?f=1#](https://www.hackster.io/matejadjukic03/potentiometer-game-05ee93?f=1#)

---

*Cette fiche fait partie du projet [Let's STEAM](/projets/lets-steam), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

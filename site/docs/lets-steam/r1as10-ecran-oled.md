---
id: r1as10-ecran-oled
title: Écran OLED
sidebar_label: "Affichage de texte avec un écran OLED"
sidebar_position: 10
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="2" y="3" width="20" height="14" rx="2" fill="#140e4e" opacity="0.1"/><rect x="3" y="4" width="18" height="12" rx="1" fill="#140e4e" opacity="0.25"/><rect x="5" y="6" width="14" height="8" rx="0.5" fill="#140e4e" opacity="1.0"/><line x1="7" y1="9" x2="13" y2="9" stroke="#fff" strokeWidth="1" opacity="1.0"/><line x1="7" y1="11" x2="11" y2="11" stroke="#fff" strokeWidth="1" opacity="0.7"/><rect x="8" y="17" width="8" height="1.5" rx="0.5" fill="#140e4e" opacity="0.25"/><rect x="10" y="18.5" width="4" height="2" rx="0.5" fill="#140e4e" opacity="0.1"/></svg> Écran OLED : affichage de texte

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
- 1 écran OLED Monochrome 1,3" 128x64 de Adafruit
- 1 câble QT pour connecter l'écran à la carte

## Prérequis

- [Boutons et affichage LED](/ressources/lets-steam/r1as03-boutons)

<a href="/pdf/lets-steam/LS_R1AS10_OLED_FR.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger en PDF</a>

</div>

<img src="/img/ressources/oled/icone.png" alt="Écran OLED" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Un écran qui vous permet d'afficher certaines informations nichées dans vos composants électroniques.

## Objectifs d'apprentissage

- Connecter un écran OLED à votre carte
- Afficher du texte sur votre écran OLED
- Placer du texte sur un écran
- Afficher l'état actuel de votre programme

---

## Introduction

La programmation d'une carte électronique est parfois une activité très déroutante. Un microcontrôleur est une boîte noire (nous ne pouvons pas voir ce qui se passe à l'intérieur). Pour éclaircir votre code, vous pouvez utiliser un écran qui vous aide à afficher certaines informations nichées dans vos composants électroniques. Cette fiche d'activité explore comment utiliser les **écrans OLED monochromes à base de SSD1306 avec MakeCode**.

**Ressource :** [https://www.electronicwings.com/sensors-modules/ssd1306-oled-display](https://www.electronicwings.com/sensors-modules/ssd1306-oled-display)

---

## Étape 1 - Construire

### 1. Connecter la carte à l'écran

<img src="/img/ressources/oled/bitmap.png" alt="Montage écran OLED" style={{maxWidth: '300px', float: 'right', marginLeft: '1rem', marginBottom: '1rem'}} />

Il y a deux façons de câbler l'écran OLED **SSD1306** à une carte : soit avec une connexion **I2C**, soit avec une connexion **SPI**. Pour notre écran, nous utilisons la connexion **I2C** via le câble **QWIIC/STEMMA** avec la convention suivante :

- **Noir** pour GND
- **Rouge** pour V+ (3V3)
- **Bleu** pour SDA (D14)
- **Jaune** pour SCL (D15)

**Ressources :**
- [https://en.wikipedia.org/wiki/I2C](https://en.wikipedia.org/wiki/I2C)
- [https://en.wikipedia.org/wiki/Serial_Peripheral_Interface](https://en.wikipedia.org/wiki/Serial_Peripheral_Interface)
- [https://www.sparkfun.com/qwiic](https://www.sparkfun.com/qwiic)
- [https://learn.adafruit.com/introducing-adafruit-stemma-qt/what-is-stemma-qt](https://learn.adafruit.com/introducing-adafruit-stemma-qt/what-is-stemma-qt)

### 2. Connecter la carte à l'ordinateur

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le **connecteur micro-USB ST-LINK** (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé **DIS_L4IOT**. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

### 3. Ouvrir MakeCode

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton « Nouveau projet ». Donnez à votre projet un nom plus expressif que « Sans titre » et lancez votre éditeur.

**Ressource :** [makecode.lets-steam.eu](https://makecode.lets-steam.eu)

### 4. Installer l'extension

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut « prêt à l'emploi » et vous devrez installer une extension.

:::info[Les extensions MakeCode]

Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de robotique et bien plus encore.
:::

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. Si vous cliquez sur **AVANCÉ**, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton.

![Menu des extensions MakeCode](/img/ressources/oled/menu%20extension.png)

Choisissez l'extension **« oled »**.

### 5. Programmer la carte

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section « Programmer » ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton « Télécharger ». Copiez le fichier binaire sur le lecteur **DIS_L4IOT** et attendez que la carte finisse de clignoter : votre programme affichera du texte !

### 6. Exécuter, modifier, jouer

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé **RESET**).

Si tout va bien, votre carte vous adressera des salutations amicales. Essayez de comprendre l'exemple et commencez à le modifier en changeant le texte, en ajoutant autant de symboles que possible ou en remplissant l'écran lentement, lettre par lettre.

N'hésitez pas à essayer d'afficher n'importe quel élément d'information dans votre programme pour voir l'état actuel de votre carte.

---

## Étape 2 - Programmer

<div style={{display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap'}}>
<div style={{flex: '2', minWidth: '300px'}}>

```javascript
oled.printString("Hello World", PixelColor.White, 0, 0)
oled.printString("<3", PixelColor.White, 0, 10)
oled.printString("------------", PixelColor.White, 0, 20)
```

### Comment cela fonctionne-t-il ?

Vous pouvez écrire une ligne de texte avec la fonction `printString()`. Cette fonction prend les paramètres suivants :

| Paramètre | Description |
|-----------|-------------|
| Chaîne de texte | Le texte à afficher |
| Couleur du texte | `PixelColor.Black` ou `PixelColor.White` |
| Position X | Position du texte sur l'axe des X |
| Position Y | Position du texte sur l'axe des Y |

</div>
<div style={{flex: '0 0 180px'}}>

![Capture d'écran MakeCode](/img/ressources/oled/lets-steam-screenshot%20(4).png)

</div>
</div>

:::info[Origine de l'écran]

Sur l'écran du SSD1306, l'origine (la position x=0 et y=0) se trouve dans le coin supérieur gauche.
:::

---

## Étape 3 - Améliorer

1. Essayez de **centrer le coeur de la deuxième ligne** en modifiant la coordonnée X du texte.

2. En ajoutant une boucle, **créez une animation de texte simple** dans l'esprit de La Linea en utilisant les symboles `|` et `_`. Pour ralentir votre animation, utilisez la fonction `pause()`.
   **Ressource :** [https://en.wikipedia.org/wiki/La_Linea_(TV_series)](https://en.wikipedia.org/wiki/La_Linea_(TV_series))

3. **Montrez l'état courant du bouton USER à chaque instant.** Que se passe-t-il si vous ajoutez un `sleep()` plutôt long dans votre boucle principale ? Comment améliorer la réactivité de votre affichage ?

4. **Affichez la valeur de tous les capteurs embarqués.** Essayez de positionner chaque valeur à un endroit stratégique pour améliorer autant que possible la lisibilité.

---

## Aller plus loin

- **I2C** - Tutoriel pour tout savoir sur le protocole de communication I2C, pourquoi et comment l'utiliser ainsi que le mettre en oeuvre.
  [https://learn.sparkfun.com/tutorials/i2c/all](https://learn.sparkfun.com/tutorials/i2c/all)

- **QWIIC/STEMMA** - Utilisez le level shifter et le régulateur de voltage avec les contrôleurs Grove/Gravity/STEMMA/Qwiic.
  [https://learn.adafruit.com/introducing-adafruit-stemma-qt/what-is-stemma-qt](https://learn.adafruit.com/introducing-adafruit-stemma-qt/what-is-stemma-qt)

- **Écran OLED** - Écran à diode électroluminescente organique (OLED ou LED organique).
  [https://en.wikipedia.org/wiki/OLED](https://en.wikipedia.org/wiki/OLED)

---

*Cette fiche fait partie du projet [Let's STEAM](/projets/lets-steam), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

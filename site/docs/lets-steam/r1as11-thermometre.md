---
id: r1as11-thermometre
title: Thermomètre
sidebar_label: "Fabriquer un thermomètre... très, très lisible"
sidebar_position: 11
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="9" y="1" width="6" height="16" rx="3" fill="#140e4e" fillOpacity="0.1"/><circle cx="12" cy="18" r="4" fill="#140e4e" fillOpacity="0.25"/><circle cx="12" cy="18" r="2" fill="#140e4e"/><rect x="11" y="4" width="2" height="11" rx="1" fill="#140e4e"/><line x1="15" y1="6" x2="17" y2="6" stroke="#140e4e" strokeWidth="1.5" strokeLinecap="round"/><line x1="15" y1="9" x2="17" y2="9" stroke="#140e4e" strokeWidth="1.5" strokeLinecap="round"/><line x1="15" y1="12" x2="17" y2="12" stroke="#140e4e" strokeWidth="1.5" strokeLinecap="round"/></svg> Thermomètre : fabriquer un thermomètre très lisible

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
- 1 écran texte LCD Grove I2C
- 1 câble de liaison Grove

## Prérequis

- [Capteurs de lumière](/ressources/lets-steam/r1as04-capteur-lumiere)

<a href="/pdf/lets-steam/LS_R1AS11_Thermometer_FR.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger en PDF</a>

</div>

<img src="/img/ressources/thermometre/icone.png" alt="Thermomètre" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Dans cette activité, nous allons apprendre à quel point il est facile de lire le capteur de température de la carte et d'afficher sa valeur.

## Objectifs d'apprentissage

- Lire le capteur de température
- Utiliser un écran d'affichage LCD

---

## Introduction

La température est une grandeur physique qui exprime le chaud et le froid. C'est la manifestation de l'énergie thermique, présente dans toute matière, qui est à l'origine de l'apparition de la chaleur. En les mettant en contact, les chocs entre particules font que cette énergie cinétique microscopique se transmet d'un corps à l'autre. C'est ce transfert d'énergie qui, en sciences physiques, est appelé chaleur.

Dans cette activité, vous pourrez découvrir l'utilisation du capteur de température intégré dans la carte. Un capteur de température est un dispositif électronique qui mesure la température de son environnement et convertit les données d'entrée en données électroniques pour enregistrer, surveiller ou signaler les changements de température.

---

## Étape 1 - Construire

<img src="/img/ressources/thermometre/temperature_step1.png" alt="Schéma de câblage du thermomètre" style={{maxWidth: '300px', float: 'right', marginLeft: '1rem', marginBottom: '1rem'}} />

### 1. Connecter l'écran à la carte

Pour connecter l'écran LCD Grove, nous allons utiliser le bus **I2C**. Pour notre écran, nous utilisons la connexion **I2C** via le câble de liaison Grove avec la convention suivante :

- **Rouge** pour V+ (3V3)
- **Violet** pour SDA (D14)
- **Vert** pour SCL (D15)

### 2. Connecter la carte à l'ordinateur

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le **connecteur micro-USB ST-LINK** (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé **DIS_L4IOT**. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

### 3. Ouvrir MakeCode

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton « Nouveau projet ». Donnez à votre projet un nom plus expressif que « Sans titre » et lancez votre éditeur.

**Ressource :** [makecode.lets-steam.eu](https://makecode.lets-steam.eu)

### 4. Programmer la carte

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section « Programmer » ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton « Télécharger ». Copiez le fichier binaire sur le lecteur **DIS_L4IOT** et attendez que la carte finisse de clignoter : votre datalogger est prêt !

### 5. Exécuter, modifier, jouer

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé **RESET**). Si tout fonctionne bien, votre carte changera l'état des LED pour montrer que la collecte de données est en cours. Essayez de comprendre l'exemple et commencez à le modifier en changeant la période entre deux mesures, en ajoutant d'autres données provenant d'autres capteurs de la carte. Essayez d'afficher autant de données que vous le souhaitez à plusieurs endroits pour comprendre comment la température évolue.

---

## Étape 2 - Programmer

```javascript
lcd.clear()
forever(function () {
    lcd.setCursor(0, 0)
    lcd.ShowValue("T", input.temperature(TemperatureUnit.Celsius))
    pause(500)
})
```

### Comment cela fonctionne-t-il ?

Le code se compose de :

- un bloc **clear screen**
- un bloc **forever**
- un bloc **set cursor position**
- un bloc **show value**

:::info[Position du curseur LCD]

L'écran LCD mémorise la position du prochain emplacement d'insertion. Lorsque nous voulons afficher quelque chose à l'écran, nous devons toujours commencer par définir la position du curseur.
:::

Avant d'écrire à l'écran, nous effaçons l'écran en appelant la fonction `LCD.clear()`.

À chaque itération de la boucle, avant d'écrire quelque chose, nous plaçons le curseur au début de l'écran (au premier caractère de la première ligne).

`input.temperature(TemperatureUnit.Celsius)` renvoie la valeur entière de la température en degrés Celsius. La valeur est affichée à l'écran avec la fonction `LCD.ShowValue()`. Le premier paramètre de cette fonction donne le nom de la valeur et le second, la valeur à afficher.

#### Simulation du capteur de température

Vous pouvez jouer avec le capteur simulé en appuyant sur la **petite icône de thermomètre** affichée sur le simulateur de la carte. Vous pouvez modifier la valeur détectée (par exemple, en touchant avec le doigt le capteur physique de la carte), ce qui modifie en conséquence la valeur affichée sur l'écran LCD.

---

## Étape 3 - Améliorer

1. Essayez de **modifier le programme de cette activité pour lire chaque capteur un par un et afficher sa valeur sur l'écran LCD**. Familiarisez-vous avec les différents capteurs disponibles. Essayez également d'utiliser des blocs supplémentaires de **LOGIC** ou **LCD** pour afficher du texte ou des valeurs.

2. **Ajoutez une condition qui modifie le rétroéclairage en fonction de la valeur de la température.** Par exemple, vous pouvez régler le rétroéclairage en bleu lorsque la température est inférieure à 10 °C et en rouge lorsque la température est supérieure à 20 °C.

3. **Placez votre carte à différents endroits dans votre classe pour créer un jeu de données comparables.** Si vous le souhaitez, vous pouvez également entrer en contact avec d'autres écoles dans votre pays ou à l'étranger pour élargir votre jeu de données et travailler sur des sujets météorologiques.

---

## Aller plus loin

- **Écran à cristaux liquides** - En savoir plus sur l'histoire et les caractéristiques des écrans à cristaux liquides (LCD).
  [https://en.wikipedia.org/wiki/Liquid-crystal_display](https://en.wikipedia.org/wiki/Liquid-crystal_display)

- **Réveil LCD avec de nombreux visages** - Y compris beaucoup d'autres horloges LCD1602 trouvées sur des sites de fabricants.
  [https://www.hackster.io/john-bradnam/lcd-alarm-clock-with-many-faces-new-version-9352a2](https://www.hackster.io/john-bradnam/lcd-alarm-clock-with-many-faces-new-version-9352a2)

- **Le jeu Chrome Dino sur un écran LCD.**
  [https://create.arduino.cc/projecthub/Unsigned_Arduino/the-chrome-dino-game-on-an-lcd-shield-883afb](https://create.arduino.cc/projecthub/Unsigned_Arduino/the-chrome-dino-game-on-an-lcd-shield-883afb)

- **Luminomètre** - Mesurez et affichez les niveaux de lumière.
  [https://learn.adafruit.com/light-meter](https://learn.adafruit.com/light-meter)

---

*Cette fiche fait partie du projet [Let's STEAM](/projets/lets-steam), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

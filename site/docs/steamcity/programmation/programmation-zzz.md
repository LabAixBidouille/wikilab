---
id: programmation-zzz
title: "Capteur de sommeil micro:bit"
sidebar_label: "Capteur de sommeil micro:bit"
sidebar_position: 7
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="4" y="4" width="16" height="16" rx="2" fill="#DD5350" opacity="0.1"/><rect x="6" y="6" width="12" height="12" rx="1" fill="#DD5350" opacity="0.25"/><path d="M9 10h6M9 12h6M9 14h4" stroke="#DD5350" strokeWidth="1" strokeLinecap="round" opacity="1.0"/></svg> Capteur de sommeil micro:bit

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">Micro:bit V2</span>
  <span className="badge badge--info">Accéléromètre intégré</span>
  <span className="badge badge--warning">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| SteamCity | 1-2 heures | Intermédiaire | 11-15 ans |

## Matériel

- 1 carte Micro:bit V2 (capteurs lumière, son, température, accéléromètre intégrés)
- 1 câble micro-USB
- 1 batterie externe (optionnelle)
- Ordinateur ou tablette + [MakeCode](https://makecode.microbit.org/#editor)

</div>

<img src="/img/ressources/steamcity/programmation-zzz/icone.svg" alt="Capteur de sommeil micro:bit" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Cette fiche technique accompagne la ressource [ZZZ](/ressources/steamcity/zzz). Elle décrit deux montages avec la Micro:bit V2 : un programme de mesure multi-capteurs (lumière, bruit, température) pour étudier l'environnement de sommeil, et un programme dédié à la détection des mouvements nocturnes via l'accéléromètre.

## Objectifs d'apprentissage

- Utiliser plusieurs capteurs internes de la Micro:bit V2
- Configurer l'extension Datalogger
- Programmer la collecte conditionnelle (seulement en cas de mouvement)
- Préparer la carte pour un enregistrement nocturne autonome

---

## Fiche 1 : mesurer les données environnementales

### Matériel

- Carte **Micro:bit V2** avec capteurs lumière (écran LED), son et température (~19 EUR)
- Câble micro-USB
- Batterie externe (optionnelle) : ~2,20 EUR
- Ordinateur ou tablette + éditeur [MakeCode](https://makecode.microbit.org/#editor)

Recommandation : programmer 3 à 6 cartes pour les partager entre élèves.

### Étape 1 : programmer la carte

Branchez la carte via le câble micro-USB ; elle apparaît comme un lecteur « MICROBIT ». Ouvrez MakeCode, créez un nouveau projet, puis ajoutez l'extension **Datalogger** via **EXTENSIONS**.

Copiez-collez le code ci-dessous (ou organisez les blocs) puis testez dans le simulateur. Cliquez sur **Télécharger** pour générer le `.hex` et copiez-le sur le lecteur **MICROBIT**.

### Étape 2 : placer la Micro:bit et démarrer l'enregistrement

Placez la carte près du lit, dans une zone dégagée. Alimentez-la par ordinateur ou batterie externe. Positionnez-la chaque nuit au même endroit pour obtenir des données comparables. Avant de vous coucher, appuyez sur **A**.

### Étape 3 : récupérer les données

Débranchez la carte le matin, connectez-la à l'ordinateur et copiez le fichier **MY_DATA.HTM**. Renommez-le avec la date (ex. `BOARD1_NAME_YYYY-MM-DD.HTM`) puis supprimez l'original de la carte.

### Code

```javascript
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    basic.pause(200)
    basic.clearScreen()
    while (true) {
        datalogger.log(
            datalogger.createCV("temperature", input.temperature()),
            datalogger.createCV("luminosite", input.lightLevel()),
            datalogger.createCV("niveau sonore", input.soundLevel())
        )
        basic.pause(60000)
    }
})
basic.showIcon(IconNames.No)
datalogger.includeTimestamp(FlashLogTimeStampFormat.Minutes)
```

### Comment cela fonctionne ?

Le programme mesure toutes les minutes la température, la luminosité et le niveau sonore, et compile les informations dans un datalogger.

- **Bouton A** : déclenche la fonction. Icône « Yes » pendant 200 ms, puis écran nettoyé.
- **Boucle infinie** : enregistre `input.temperature()` (°C), `input.lightLevel()` (0-255), `input.soundLevel()` (0-255) à chaque itération.
- **Pause de 60 000 ms** entre chaque mesure (modifiable).
- **Horodatage** en minutes via `datalogger.includeTimestamp`.
- **Icône « No »** : affichée avant l'appui, pour indiquer l'attente.

Les valeurs de lumière et son sont relatives (0 = silence / obscurité totale, 255 = maximum). La température est en °C.

Un fichier `.csv` se lit dans Excel ou LibreOffice Calc via l'assistant d'importation.

---

## Fiche 2 : mesurer les mouvements (accéléromètre)

### Matériel et câblage

Identiques à la Fiche 1. Seul le programme change : on remplace les capteurs environnementaux par l'accéléromètre intégré.

### Code

```javascript
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    while (true) {
        if (input.acceleration(Dimension.X) != 0 || input.acceleration(Dimension.Y) != 0 || input.acceleration(Dimension.Z) != 0) {
            datalogger.log(
                datalogger.createCV("x", input.acceleration(Dimension.X)),
                datalogger.createCV("y", input.acceleration(Dimension.Y)),
                datalogger.createCV("z", input.acceleration(Dimension.Z))
            )
        }
        basic.pause(500)
    }
})
datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
basic.showIcon(IconNames.No)
```

### Comment cela fonctionne ?

Le programme mesure l'accélération sur les axes X, Y, Z toutes les 500 ms. Si au moins un axe est différent de 0, les valeurs sont enregistrées dans le datalogger.

- **Bouton A** : déclenche l'enregistrement (évite de démarrer dès la connexion).
- **Condition `if`** : vérifie si la carte bouge avant d'enregistrer.
- **Horodatage en secondes** via `datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)`.

L'accéléromètre renvoie des valeurs en milli-g (1000 milli-g = 1G = 9,81 m/s²).

---

## Bonus : rajouter un brassard

Plusieurs ressources permettent de fixer la Micro:bit à un brassard pour que les élèves la portent pendant la nuit :

- Smart Coding Watch Kit pour micro:bit
- Duct Tape Watch (tutoriel low-cost)
- BBC micro:bit wrist holder (mattoppenheim)
- Yahboom Wrist:bit wearable watch kit
- CHARGE for micro:bit

---

*Cette fiche fait partie du projet [SteamCity](/projets/steamcity), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

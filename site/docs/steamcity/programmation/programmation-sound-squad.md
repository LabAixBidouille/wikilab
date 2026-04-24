---
id: programmation-sound-squad
title: "Programmation : Sound Squad"
sidebar_label: "Sound Squad"
sidebar_position: 2
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="4" y="4" width="16" height="16" rx="2" fill="#DD5350" opacity="0.1"/><rect x="6" y="6" width="12" height="12" rx="1" fill="#DD5350" opacity="0.25"/><path d="M9 10h6M9 12h6M9 14h4" stroke="#DD5350" strokeWidth="1" strokeLinecap="round" opacity="1.0"/></svg> Programmation : Sound Squad

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">Micro:bit V2</span>
  <span className="badge badge--warning">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| SteamCity | 1 heure | Débutant | 10-15 ans |

## Matériel

- 1 carte Micro:bit V2 (capteur de niveau sonore intégré)
- 1 câble micro-USB
- 1 batterie externe (optionnelle)
- 1 ordinateur ou tablette avec accès à [MakeCode](https://makecode.microbit.org/#editor)

</div>

</div>

---

## De quoi parle-t-on ?

Cette fiche technique accompagne la ressource [Sound Squad](/ressources/steamcity/sound-squad). La Micro:bit V2 dispose d'un microphone permettant de mesurer un niveau sonore relatif. En couplant cette mesure à l'extension **Datalogger**, on obtient un enregistreur autonome capable de suivre l'évolution du bruit dans un lieu (cour d'école, jardin, chambre…) sur plusieurs jours.

## Objectifs d'apprentissage

- Installer l'extension Datalogger dans MakeCode
- Déclencher un enregistrement par appui sur le bouton A
- Utiliser une boucle infinie pour collecter à intervalles réguliers
- Extraire les données au format CSV pour analyse

---

## Matériel et modalités de collecte

- **Carte Micro:bit V2** avec capteur de niveau sonore intégré (~19 EUR)
- **Câble micro-USB** pour alimenter et programmer
- **Batterie externe (optionnelle)** : boîtier de piles Micro:bit (~2,20 EUR)
- **Ordinateur ou tablette** + éditeur [MakeCode](https://makecode.microbit.org/#editor)

Kit Micro:bit V2 (carte + câble + boîtier) : 21 EUR par kit ou 177 EUR pour 10 kits.

Deux options de collecte :

- **Option 1 (plusieurs cartes)** : 5 cartes simultanément chez 5 élèves pendant une semaine.
- **Option 2 (une seule carte)** : 2 jours par élève pendant 15 jours.

---

## Étape 1 : programmer la carte Micro:bit

Connectez la carte à l'ordinateur via le câble micro-USB. Elle apparaîtra comme un disque amovible (« MICROBIT »).

Ouvrez MakeCode et créez un nouveau projet. Cliquez sur **EXTENSIONS** et installez l'extension **Datalogger**. Organisez les blocs en suivant le code fourni ci-dessous, ou copiez-collez-le dans l'éditeur JavaScript. Testez dans le simulateur MakeCode.

Cliquez sur **Télécharger** pour générer un fichier `.hex`, copiez-le sur le lecteur **MICROBIT**. La carte redémarre automatiquement et exécute le code.

---

## Étape 2 : placer la Micro:bit et commencer à enregistrer

Placez la carte à l'endroit souhaité (jardin, parc, mairie…). Alimentez-la avec la batterie externe pour une collecte autonome.

Appuyez sur le bouton **A** pour démarrer l'enregistrement.

---

## Étape 3 : récupération des données

À la fin de la collecte, récupérez le fichier **MY_DATA.HTM** sur le lecteur micro:bit. Copiez-le sur votre ordinateur, renommez-le (ex. : `LOCATIONNAME_YYYY_MM_DD.HTM`) et supprimez l'original de la carte pour libérer l'espace. Le fichier HTML permet de télécharger les données au format `.csv`.

---

## Code

```javascript
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    basic.pause(200)
    basic.clearScreen()
    while (true) {
        datalogger.log(
            datalogger.createCV("Niveau sonore", input.soundLevel())
        )
        basic.pause(5000)
    }
})
basic.showIcon(IconNames.No)

datalogger.includeTimestamp(FlashLogTimeStampFormat.Minutes)
```

### Comment cela fonctionne ?

Ce programme mesure le niveau sonore ambiant toutes les 5 secondes (modifiable) et compile les informations dans un datalogger.

- **Bouton A** : déclenche la fonction. Icône « Yes » pendant 200 ms, puis écran nettoyé.
- **Boucle infinie** `while (true)` : enregistre `input.soundLevel()` (valeur de 0 à 255) à chaque itération.
- **Pause de 5 000 ms** entre chaque mesure (modifiable).
- **Horodatage** en minutes via `datalogger.includeTimestamp`.
- **Icône « No »** affichée avant l'appui, pour indiquer l'attente.

Un fichier `.csv` stocke les données sous forme tabulaire (chaque ligne = un enregistrement, valeurs séparées par virgule ou point-virgule). Il s'ouvre dans Excel ou LibreOffice Calc via l'assistant d'importation.

---

*Cette fiche fait partie du projet [SteamCity](/projets/steamcity), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

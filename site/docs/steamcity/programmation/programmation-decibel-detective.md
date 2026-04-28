---
id: programmation-decibel-detective
title: "Sonomètre avec micro:bit"
sidebar_label: "Sonomètre avec micro:bit"
sidebar_position: 1
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="4" y="4" width="16" height="16" rx="2" fill="#DD5350" opacity="0.1"/><rect x="6" y="6" width="12" height="12" rx="1" fill="#DD5350" opacity="0.25"/><path d="M9 10h6M9 12h6M9 14h4" stroke="#DD5350" strokeWidth="1" strokeLinecap="round" opacity="1.0"/></svg> Sonomètre avec micro:bit

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
- 1 batterie externe (optionnelle, pour mesure portable)
- 1 ordinateur ou tablette avec accès à [MakeCode](https://makecode.microbit.org/#editor)

</div>

<img src="/img/ressources/steamcity/programmation-decibel-detective/icone.svg" alt="Sonomètre avec micro:bit" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Cette fiche technique accompagne la ressource [Decibel Detective](/ressources/steamcity/decibel-detective). La carte Micro:bit V2 intègre un capteur de niveau sonore qui fournit une valeur relative (de 0 à 255). En y ajoutant l'extension **Datalogger**, on peut enregistrer régulièrement cette valeur pour suivre l'ambiance sonore d'un lieu au fil du temps et exporter les résultats au format CSV.

## Objectifs d'apprentissage

- Installer et utiliser une extension MakeCode (Datalogger)
- Déclencher l'enregistrement par appui sur un bouton
- Collecter des données à intervalles réguliers dans une boucle infinie
- Récupérer et exporter les données au format CSV

---

## Matériel et modalités de collecte

Pour programmer une carte Micro:bit pour mesurer le niveau sonore, vous aurez besoin :

- **Carte Micro:bit V2** : carte programmable incluant un capteur de niveau sonore intégré — environ 19 EUR par micro:bit ([voir prix](https://www.kubii.com/fr/cartes-micro-controleurs/3091-carte-microbit-bbc-v2-5051259252585.html))
- **Câble micro-USB** pour alimenter et programmer le micro:bit
- **Batterie externe (optionnelle)** : boîtier de piles officiel Micro:bit disponible pour environ 2,20 EUR par pack ([voir](https://www.kubii.com/fr/alimentations/4237-1913-support-de-pile-officiel-pour-microbit-3272496317253.html))
- Ordinateur ou tablette pour écrire et télécharger le code
- Éditeur en ligne [MakeCode](https://makecode.microbit.org/#editor)

:::info[Modalités de collecte]
- **Option 1 (plusieurs cartes)** : 5 cartes Micro:bit simultanément chez 5 élèves pendant une semaine, puis 5 autres la semaine suivante.
- **Option 2 (une seule carte)** : collecte sur 2 jours chez chaque élève, sur 15 jours au total.
:::

Vous pouvez acheter le kit Micro:bit V2 comprenant câble USB + boîtier de piles pour 21 EUR par kit ou 177 EUR pour 10 kits ([voir](https://www.kubii.com/fr/kits-micro-controleurs/3093-kit-microbit-club-v2-5051259252615.html)).

---

## Étape 1 : programmer la Micro:bit

Connectez la carte à l'ordinateur via le câble micro-USB. Une fois connectée, elle apparaîtra comme un lecteur amovible (ex. : « MICROBIT »). Ouvrez l'éditeur MakeCode pour créer un nouveau projet et donnez-lui un nom clair.

Dans l'éditeur, cliquez sur **EXTENSIONS** dans la colonne des blocs, recherchez l'extension **Datalogger** et ajoutez-la. Un nouveau groupe de blocs apparaîtra sur l'écran principal.

Organisez les blocs en suivant le code ci-dessous (boucle infinie, enregistrement dans le datalogger…) ou copiez-collez directement le code dans l'éditeur JavaScript. Testez dans le simulateur de MakeCode.

Cliquez sur **Télécharger** pour générer un fichier `.hex`, puis copiez-le sur le lecteur amovible **MICROBIT**. La carte redémarre automatiquement et exécute le code.

---

## Étape 2 : placer la Micro:bit et démarrer l'enregistrement

Placez la micro:bit à l'endroit où vous voulez collecter des données (jardin, parc, mairie…). Alimentez-la avec la batterie externe pour une collecte autonome sur plusieurs jours.

Une fois en place, appuyez sur le bouton **A** pour démarrer l'enregistrement.

---

## Étape 3 : récupérer les données

À la fin de la période de collecte, récupérez le fichier **MY_DATA.HTM** sur le lecteur micro:bit. Copiez-le sur l'ordinateur et renommez-le avec la date du jour (ex. : `LOCATIONNAME_YYYY_MM_DD.HTM`).

Supprimez ensuite le fichier MY_DATA.HTM de la carte pour libérer l'espace. Le fichier HTML contient toutes les données collectées et permet de les exporter au format `.csv`.

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

Ce programme mesure le niveau sonore ambiant toutes les 5 secondes (intervalle modifiable) et compile les informations dans un « datalogger » depuis lequel on peut télécharger un fichier `.csv`.

- **Bouton A** : déclenche la fonction d'enregistrement. Un icône « Yes » est affiché pendant 200 ms pour signaler le démarrage, puis l'écran est nettoyé.
- **Boucle infinie** : à chaque itération, la valeur `input.soundLevel()` (estimation numérique de 0 à 255) est enregistrée via `datalogger.log()` + `datalogger.createCV()`.
- **Pause de 5 000 ms** entre chaque enregistrement — modifiable pour capturer plus ou moins de données.
- **Horodatage** : `datalogger.includeTimestamp(FlashLogTimeStampFormat.Minutes)` ajoute un indicateur de temps en minutes à chaque enregistrement.
- **Icône « No »** : affichée avant l'appui pour indiquer que la carte attend l'action de l'utilisateur.

Un fichier `.csv` (Comma-Separated Values) est un format texte utilisé pour stocker des données tabulaires. Il s'ouvre dans Excel ou LibreOffice Calc via l'assistant d'importation (choix du délimiteur : virgule ou point-virgule).

---

*Cette fiche fait partie du projet [SteamCity](/projets/steamcity), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

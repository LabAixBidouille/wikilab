---
id: programmation-insulation
title: "Mesure d'isolation micro:bit"
sidebar_label: "Mesure d'isolation micro:bit"
sidebar_position: 6
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="4" y="4" width="16" height="16" rx="2" fill="#DD5350" opacity="0.1"/><rect x="6" y="6" width="12" height="12" rx="1" fill="#DD5350" opacity="0.25"/><path d="M9 10h6M9 12h6M9 14h4" stroke="#DD5350" strokeWidth="1" strokeLinecap="round" opacity="1.0"/></svg> Mesure d'isolation micro:bit

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">Micro:bit V2</span>
  <span className="badge badge--info">Capteur DHT22 / DHT11</span>
  <span className="badge badge--warning">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| SteamCity | 1-2 heures | Intermédiaire | 11-15 ans |

## Matériel

- 1 carte Micro:bit V2
- 1 capteur DHT22 (ou DHT11) monté sur PCB
- 1 câble micro-USB
- 1 batterie externe (optionnelle)
- Fils de connexion
- Ordinateur ou tablette + [MakeCode](https://makecode.microbit.org/#editor)

</div>

</div>

---

## De quoi parle-t-on ?

Cette fiche technique accompagne la ressource [Insulation](/ressources/steamcity/insulation). Elle explique comment câbler un capteur DHT22/DHT11 à la Micro:bit et comment programmer la collecte régulière de température et d'humidité grâce à l'extension Datalogger, en vue d'étudier l'efficacité thermique de bâtiments.

## Objectifs d'apprentissage

- Câbler un capteur DHT11/DHT22 (version PCB 3 broches ou 4 broches)
- Installer les extensions Datalogger et DHT11/DHT22 dans MakeCode
- Collecter et enregistrer température + humidité en continu
- Exporter les données au format CSV pour analyse

---

## Matériel nécessaire

- **Carte Micro:bit V2** : inclut un écran LED (capteur de lumière), un capteur sonore et un capteur de température interne — environ 19 EUR par carte.
- **Câble micro-USB** pour alimenter et programmer la carte.
- **Batterie externe (optionnelle)** : boîtier de piles Micro:bit pour environ 2,20 EUR par unité.
- Kit Micro:bit V2 (carte + câble + boîtier) : 21 EUR par kit, 177 EUR pour 10 kits.
- **Capteur DHT22 (ou DHT11)** : le DHT22 offre une meilleure précision pour un coût légèrement plus élevé.
- **Ordinateur ou tablette** + éditeur en ligne MakeCode.

:::info[Conseil]
Il est recommandé de programmer entre 3 et 6 cartes Micro:bit afin de les répartir entre les élèves et de recueillir un plus grand volume de données. Avec une seule carte, il faudra soit allonger la collecte, soit la raccourcir à 3 jours par élève.
:::

---

## Étape 1 : câbler le capteur DHT à la Micro:bit

Il existe deux versions du DHT11/DHT22 :

1. **Sans carte PCB, 4 broches** : il faut ajouter une résistance de rappel entre Vcc et Data (220 Ω à 10 kΩ sous 3,3 V). Alternative : activer la résistance pull-up interne via Broche > Plus > Régler le levier en broche (Micro:bit dispose de pull-up internes ~12–13 kΩ). La 3e broche depuis la gauche n'est pas utilisée.
2. **Montée sur PCB, 3 broches** (recommandée) :
   - **Vcc (+)** sur 3,3 V ou 5 V
   - **GND (−)** sur GND
   - **Data (OUT)** sur une broche GPIO de la Micro:bit

---

## Étape 2 : programmer la Micro:bit

Branchez la carte à l'ordinateur via le câble micro-USB. Elle apparaît comme un lecteur « MICROBIT ».

Dans MakeCode, créez un nouveau projet. Cliquez sur **EXTENSIONS** et ajoutez :

- l'extension **Datalogger**
- l'extension **DHT11/DHT22**

Cliquez sur **Télécharger** pour générer le fichier `.hex`, puis copiez-le sur le lecteur **MICROBIT**. La carte redémarre et exécute le programme.

---

## Étape 3 : placer la Micro:bit et démarrer l'enregistrement

Placez la carte à un endroit dégagé pour mesurer l'humidité et la température sans obstruction. Alimentez-la par ordinateur ou batterie externe. Le soir, appuyez sur le bouton **A** pour démarrer l'enregistrement.

---

## Étape 4 : récupérer les données

Chaque matin, débranchez la Micro:bit pour arrêter la collecte. Connectez-la à l'ordinateur : le fichier **MY_DATA.HTM** est disponible sur le lecteur MICROBIT. Copiez-le sur l'ordinateur, renommez-le (ex. `BOARD1_NAME_YYYY-MM-DD.HTM`), puis supprimez l'original de la carte.

Répétez chaque jour. À la fin, centralisez tous les fichiers pour analyse.

---

## Code

```javascript
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    basic.pause(200)
    basic.clearScreen()
    while (true) {
        dht11_dht22.queryData(
            DHTtype.DHT22,
            DigitalPin.P0, true,
            false, false
        )
        datalogger.log(
            datalogger.createCV("temperature", dht11_dht22.readData(dataType.temperature)),
            datalogger.createCV("humidite", dht11_dht22.readData(dataType.humidity))
        )
        basic.pause(60000)
    }
})
basic.showIcon(IconNames.No)
datalogger.includeTimestamp(FlashLogTimeStampFormat.Minutes)
```

### Comment cela fonctionne ?

Ce programme mesure l'humidité et la température toutes les minutes (fréquence ajustable).

- **Bouton A** : déclenche la collecte. L'icône « Yes » est affichée 200 ms puis l'écran est nettoyé.
- **Boucle infinie** `while (true)` :
  - `dht11_dht22.queryData(...)` : interroge le capteur (respecter 1 s minimum entre requêtes pour DHT11, 2 s pour DHT22). En cas d'erreur de checksum, les relevés retournent -999.
  - `datalogger.log(...)` + `createCV(...)` enregistre température (°C) et humidité (%).
  - `basic.pause(60000)` : attend 1 minute.
- **Horodatage** : `datalogger.includeTimestamp(FlashLogTimeStampFormat.Minutes)` ajoute un indicateur de temps en minutes.
- **Icône « No »** : affichée avant l'appui pour indiquer que la carte attend l'utilisateur.

Un fichier `.csv` est un format texte tabulaire ; il s'ouvre dans Excel ou LibreOffice Calc via l'assistant d'importation (choix du délimiteur).

---

*Cette fiche fait partie du projet [SteamCity](/projets/steamcity), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

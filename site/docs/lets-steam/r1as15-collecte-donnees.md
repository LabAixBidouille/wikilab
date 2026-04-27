---
id: r1as15-collecte-donnees
title: Collecter des données avec STM32
sidebar_label: "Collecter des données avec STM32"
sidebar_position: 15
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="2" y="2" width="20" height="20" rx="3" fill="#140e4e" fillOpacity="0.1"/><rect x="4" y="14" width="3" height="6" rx="0.5" fill="#140e4e" fillOpacity="0.25"/><rect x="8.5" y="10" width="3" height="10" rx="0.5" fill="#140e4e" fillOpacity="0.25"/><rect x="13" y="6" width="3" height="14" rx="0.5" fill="#140e4e"/><rect x="17.5" y="8" width="3" height="12" rx="0.5" fill="#140e4e" fillOpacity="0.25"/><polyline points="4 12 8.5 8 13 4 17.5 6" fill="none" stroke="#140e4e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> Collecter des données avec STM32

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--warning">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| Let's STEAM | 50 minutes | Avancé | 11-15 ans |

## Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 1 câble USB Micro-B

## Prérequis

- [Capteurs de lumière](/ressources/lets-steam/r1as04-capteur-lumiere)

<a href="/pdf/lets-steam/LS_R1AS15_Data_FR.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger en PDF</a>

</div>

<img src="/img/ressources/lets-steam/r1as15-collecte-donnees/icone.svg" alt="Collecte de données" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Cette fiche d'activité explique comment collecter les données d'un capteur environnemental et les exporter vers un ordinateur afin d'effectuer une analyse simple à l'aide d'un tableur.

## Objectifs d'apprentissage

- Lire la valeur d'un capteur
- Stocker la valeur du capteur sur la mémoire flash de la carte
- Exporter toutes les valeurs collectées dans un fichier CSV (Comma Separated Values)
- Ajouter une extension à MakeCode

---

## Introduction

Un capteur mesure une quantité physique et la convertit en un signal qui peut être transformé en une valeur numérique par un microcontrôleur. Dans votre programme, vous pouvez utiliser cette valeur pour adapter le comportement de votre algorithme (par exemple, fermer la porte de la maison lorsque la valeur du capteur de lumière devient faible).

Lorsque vous souhaitez mener une expérience scientifique, une seule valeur ne vous donne pas suffisamment d'informations pour émettre des hypothèses. Vous devez observer comment la valeur de votre capteur va évoluer sur une longue période de temps.

Cette fiche d'activité explique comment collecter les données d'un capteur environnemental et comment les exporter vers un ordinateur pour effectuer une analyse simple à l'aide d'un tableur.

---

## Étape 1 - Construire

### 1. Connecter la carte à l'ordinateur

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le **connecteur micro-USB ST-LINK** (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé **DIS_L4IOT**. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

### 2. Ouvrir MakeCode

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur.

**Ressource :** [makecode.lets-steam.eu](https://makecode.lets-steam.eu)

![MakeCode Editor](/img/ressources/lets-steam/r1as15-collecte-donnees/MakeCode%20Editor.png)

### 3. Installer l'extension

Après avoir créé votre nouveau projet, vous accéderez à l'éditeur MakeCode par défaut et vous devrez installer une extension.

:::info[Les extensions MakeCode]

Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de base. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de robotique et bien plus encore.
:::

### 4. Accéder aux extensions et installer le Datalogger

Cliquez sur le bouton noir **AVANCÉ** en bas de la colonne des groupes de blocs. Des groupes de blocs supplémentaires apparaîtront. En bas, cliquez sur la boîte grise **EXTENSIONS**.

Dans la liste des extensions disponibles, trouvez l'extension **Datalogger** qui sera utilisée pour cette activité. Si elle n'est pas directement visible, utilisez l'outil de recherche. Cliquez sur l'extension souhaitée — un nouveau groupe de blocs apparaîtra sur l'écran principal.

<div style={{display: 'flex', gap: '0.5rem', margin: '1rem 0', maxWidth: '100%', overflow: 'hidden'}}>
<img src="/img/ressources/lets-steam/r1as15-collecte-donnees/collecter%20des%20donn%C3%A9es%20extensions.png" alt="Extension collecte de données" style={{width: '33%', objectFit: 'contain'}} />
<img src="/img/ressources/lets-steam/r1as15-collecte-donnees/extensions%20menu.png" alt="Menu extensions" style={{width: '33%', objectFit: 'contain'}} />
<img src="/img/ressources/lets-steam/r1as15-collecte-donnees/lets%20steamdatalogger.png" alt="Datalogger" style={{width: '33%', objectFit: 'contain'}} />
</div>

### 5. Programmer la carte

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur **DIS_L4IOT** et attendez que la carte finisse de clignoter — votre datalogger est prêt !

### 6. Utiliser votre datalogger

Le programme enregistre les données dans la mémoire flash (la LED 1 est allumée) jusqu'à ce que vous appuyiez sur le bouton **USER**, ce qui fait s'allumer la LED 2. C'est l'indication que l'enregistrement des données est arrêté et que vous pouvez copier les données sur votre ordinateur.

:::warning[Attention]

Assurez-vous d'avoir arrêté l'enregistrement de vos données avant d'accéder au fichier `log.csv` avec un programme quelconque. Appuyer sur Reset ou débrancher la carte sans avoir mis en pause l'enregistrement avec le bouton USER corrompra le fichier `log.csv` ! Appuyez sur le bouton USER pour arrêter l'enregistrement — cela fermera correctement le fichier et permettra de copier les données.
:::

### 7. Obtenir les données

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le **connecteur USB OTG** (celui de gauche lorsque vous regardez la carte de haut en bas). Lorsque votre projet est enregistré, une nouvelle clé USB devrait apparaître sous le nom de **MAKECODE**. Le répertoire **SPIFLASH** contient les données du programme. Les données de journalisation sont écrites dans un fichier nommé `log.csv`.

Copiez le fichier `log.csv` sur votre disque pour le sauvegarder et le consulter ultérieurement.

**Ressource :** [https://en.wikipedia.org/wiki/Serial_Peripheral_Interface](https://en.wikipedia.org/wiki/Serial_Peripheral_Interface)

### 8. Visualiser les données

Ouvrez un **programme de feuille de calcul** tel que Google Sheets, Microsoft Excel, macOS Numbers, etc. Ouvrez le fichier `log.csv`. Le tableur devrait reconnaître le CSV (si votre programme ne le reconnaît pas, vous devrez peut-être préciser que vous essayez d'ouvrir un fichier CSV ou utiliser une fonction d'importation). Dans Google Sheets, le fichier s'ouvre correctement.

**Ressource :** [https://en.wikipedia.org/wiki/Comma-separated_values](https://en.wikipedia.org/wiki/Comma-separated_values)

Les lignes `sep=` et `NAN` peuvent être ignorées si elles apparaissent. La ligne 2 contient les titres des données que vous lisez. D'abord l'heure, puis, pour l'exemple, les relevés de température, de lumière et d'humidité du sol dans chaque colonne.

Les données peuvent s'étendre sur une longue durée puisque l'exemple enregistre toutes les 10 secondes. Vous pouvez enregistrer plus lentement, par exemple toutes les 60 secondes (1 minute) ou toutes les 300 secondes (5 minutes), etc.

Les données peuvent être utilisées à des fins d'analyse ou pour établir un graphique des valeurs sur une période donnée. En utilisant la fonction graphique de Google Sheets, appuyez sur le bouton graphique de la barre d'outils et sans aucun formatage, vous obtenez un superbe graphique !

### Exécuter, modifier, jouer

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé **RESET**). Si tout fonctionne bien, votre carte mettra à jour les LED d'état pour montrer que la collecte de données est en cours.

Essayez de comprendre l'exemple et commencez à le modifier en changeant la période entre deux mesures, en ajoutant d'autres données provenant d'autres capteurs de la carte. Essayez d'enregistrer autant de données que vous le souhaitez dans autant d'endroits pour comprendre comment la température, l'humidité et la pression évoluent.

---

## Étape 2 - Programmer

<div style={{display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap'}}>
<div style={{flex: '2', minWidth: '350px'}}>

```javascript
// Initier la collecte de données
let running = 0
datalogger.setSampleInterval(100)
datalogger.sendToConsole(true)
datalogger.setEnabled(true)
running = 1
pins.LED.digitalWrite(true)
pins.LED2.digitalWrite(false)

// Stopper la collecte de données après l'appui sur le bouton
input.buttonUser.onEvent(ButtonEvent.Click, function () {
    running = 0
    datalogger.setEnabled(false)
    pins.LED.digitalWrite(false)
    pins.LED2.digitalWrite(true)
})

// Collecter des données des capteurs toutes les 10 secondes
forever(function () {
    if (running == 1) {
        let temperature = input.temperature(TemperatureUnit.Celsius)
        let pressure = input.pressure(PressureUnit.HectoPascal)
        let humidity = input.humidity()

        datalogger.addValue("Temp", temperature)
        datalogger.addValue("Pressure", pressure)
        datalogger.addValue("Humidity", humidity)
        datalogger.addRow()
    }
    pause(10000)
})
```

</div>
<div style={{flex: '1', minWidth: '200px'}}>

![Capture d'écran MakeCode](/img/ressources/lets-steam/r1as15-collecte-donnees/lets-steam-screenshot.png)

</div>
</div>

### Comment cela fonctionne-t-il ?

#### Initialiser la collecte de données

Pour télécharger le fichier sur un ordinateur, nous devons arrêter la collecte de données. La variable `running` permet de connaître l'état actuel du processus de collecte de données. Lorsque la valeur est `0`, la collecte est arrêtée ; lorsqu'elle est `1`, la collecte est en cours.

Les 3 instructions suivantes configurent le datalogger avec les paramètres suivants :
- Une virgule est utilisée comme séparateur de champs dans le fichier CSV.
- L'intervalle minimal entre deux lignes est fixé à 100 ms.
- Toutes les données sont envoyées à la console MakeCode afin de les afficher directement dans l'éditeur.

Après la configuration, le processus de collecte de données est activé et le voyant d'état est utilisé pour montrer l'état actuel du processus.

#### Arrêter la collecte de données après avoir cliqué sur le bouton USER

Pour arrêter le processus de collecte de données, nous utilisons le bouton USER. Lorsqu'on clique sur ce bouton, le datalogger est désactivé, les LED d'état sont mises à jour et la valeur `0` est attribuée à la variable `running`.

Pour gérer l'asynchronisme du clic du bouton (un clic de bouton peut se produire à n'importe quelle étape de notre programme), nous utilisons le mécanisme **Event** de MakeCode. Ce mécanisme permet d'exécuter un ensemble spécifique d'instructions lorsqu'une condition donnée apparaît. Dans notre cas, l'événement est "le bouton USER est cliqué".

Lorsque le datalogger est désactivé, il n'y a plus d'écriture sur le fichier journal — nous n'avons donc aucun risque de le corrompre.

#### Collecter les données des capteurs toutes les 10 s

Dans la boucle principale, il suffit de lire les données et de les envoyer au datalogger si la variable `running` est fixée à `1`. La `pause` à la fin de la boucle permet de fixer la période entre deux mesures. Si nous voulons observer une expérience plus longue, nous augmenterons probablement cette valeur.

---

## Étape 3 - Améliorer

1. **Ajoutez une powerbank branchée en USB** à votre carte pour réaliser des expériences sur les capteurs environnementaux dans de nombreux contextes.
2. **Autorisez le processus de collecte de données à redémarrer** en cliquant à nouveau sur le bouton USER.
3. **Produisez un graphique** qui compare plusieurs sessions de collecte de données.
4. **Collectez les données de capteurs distants** en utilisant une carte pour l'enregistrement des données et d'autres cartes positionnées à plusieurs endroits.
5. **Réalisez une expérience de physique** sur les forces agissant sur une carte lorsqu'elle tourne dans une essoreuse à salade (centrifugeuse). Pouvez-vous deviner ce qui va se passer ? (N'oubliez pas que l'accéléromètre de la carte ne peut lire que des forces allant jusqu'à 2g, soit deux fois la force de gravité de la Terre. Si vous la faites tourner rapidement, elle peut subir des forces trop importantes pour être enregistrées.)

---

## Aller plus loin

- **Mémoire flash** - En savoir plus sur la mémoire flash, support de stockage électronique non volatile.
  [https://en.wikipedia.org/wiki/Flash_memory](https://en.wikipedia.org/wiki/Flash_memory)

- **Gestionnaires d'événements** - Découvrez les gestionnaires d'événements (comment associer du code à un événement particulier).
  [https://makecode.microbit.org/reference/event-handler](https://makecode.microbit.org/reference/event-handler)

- **Make It Log** - Enregistrez les données de votre Circuit Playground Express directement dans une feuille de calcul.
  [https://learn.adafruit.com/make-it-data-log-spreadsheet-circuit-playground/logging-via-android-phone](https://learn.adafruit.com/make-it-data-log-spreadsheet-circuit-playground/logging-via-android-phone)

- **Datalogger MakeCode** - Utilisez la carte micro:bit comme enregistreur de données sans fil pour enregistrer les données de ses capteurs.
  [https://microbit.org/projects/make-it-code-it/makecode-wireless-data-logger/](https://microbit.org/projects/make-it-code-it/makecode-wireless-data-logger/)

---

*Cette fiche fait partie du projet [Let's STEAM](/projets/lets-steam), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

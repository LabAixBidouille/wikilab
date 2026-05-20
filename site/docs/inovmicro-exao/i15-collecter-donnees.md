---
id: i15-collecter-donnees
title: Collecter des données avec la STeaMi
sidebar_label: "Collecter des données"
sidebar_position: 15
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>
<div style={{flex: 1}}>
# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="2" y="2" width="20" height="20" rx="3" fill="#8a6e18" fillOpacity="0.1"/><rect x="4" y="14" width="3" height="6" rx="0.5" fill="#8a6e18" fillOpacity="0.25"/><rect x="8.5" y="10" width="3" height="10" rx="0.5" fill="#8a6e18" fillOpacity="0.25"/><rect x="13" y="6" width="3" height="14" rx="0.5" fill="#8a6e18"/><rect x="17.5" y="8" width="3" height="12" rx="0.5" fill="#8a6e18" fillOpacity="0.25"/><polyline points="4 12 8.5 8 13 4 17.5 6" fill="none" stroke="#8a6e18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> Collecter des données avec la STeaMi

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--info">SteaMi</span>
  <span className="badge badge--warning">MicroPython</span>
</div>

| Projet        | Durée  | Difficulté | Âge       | Logiciel STeaMi testé |
| ------------- | ------ | ---------- | --------- | --------------------- |
| I-Novmicro #2 | 50 min | Avancé     | 11-99 ans | 0.23.1                |

## Matériel et Montage

- 1 carte STeaMi
- 1 câble USB de données (micro-USB pour la STeaMi V1, USB-C pour la STeaMi V2)
- 1 ordinateur sous Windows, macOS ou Linux
- Un IDE compatible MicroPython : Thonny (voir la fiche [Thonny : Prise en main de MicroPython](/ressources/inovmicro-exao/t03-decouverte-thonny)) ou tout autre éditeur compatible (Mu, VS Code, Vittascience, `mpremote`...).
- Un tableur (Google Sheets, LibreOffice Calc, Microsoft Excel...)

</div>
<img src="/img/ressources/inovmicro-exao/i15-collecter-donnees/icone.png" alt="Collecte de données sur la STeaMi" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />
</div>

---

## De quoi parle-t-on ?

Tu veux savoir si ton frigo monte vraiment à 4 °C la nuit ? Si la salle de classe est plus chaude le matin ou l'après-midi ? Si la fenêtre du salon laisse passer le froid les jours de gel ? Si l'humidité grimpe quand toute la famille rentre du sport ? La réponse à toutes ces questions tient en un mot : **mesurer**.

Une mesure ponctuelle ne te dira pas grand-chose. Une mesure toutes les heures, pendant un jour entier, **change tout** : tu vois les courbes, les pics, les creux, et tu peux raconter une histoire avec des chiffres. C'est ce que font les météorologues, les climatologues, les biologistes, les ingénieurs qualité, les gens qui surveillent la pollution dans les rivières. On appelle ce principe le **datalogger** : un appareil qui enregistre automatiquement des mesures à intervalles réguliers, sans surveillance.

La STeaMi est un datalogger en puissance : elle embarque deux capteurs environnementaux et peut écrire ses mesures dans un fichier qu'on récupère ensuite sur l'ordinateur.

- **WSEN-PADS** : la pression atmosphérique (en hectopascals) et la température ambiante (en degrés Celsius)
- **HTS221** : l'humidité relative de l'air (en pourcent)

Dans cette activité, on va programmer la STeaMi pour enregistrer ces trois grandeurs dans un fichier **CSV** sur sa mémoire interne, exporter ce fichier sur un ordinateur, et le visualiser dans un tableur. C'est exactement la chaîne complète d'une **expérience scientifique** : poser une question, capturer les données, les analyser, raconter ce qu'on voit.

:::info[Capteurs intégrés, rien à câbler]
Les deux capteurs sont déjà soudés à la STeaMi. Aucun montage à faire : on plonge directement dans le code.
:::

---

## Objectifs d'apprentissage

À la fin de cette activité, l'élève sera capable de :

- **Mener une vraie expérience scientifique** du début à la fin : choisir une question (mon frigo est-il assez froid ?), enregistrer les données pendant plusieurs heures, ouvrir le fichier sur l'ordinateur, et tirer une conclusion à partir d'une courbe.
- **Faire dialoguer plusieurs capteurs** (température, pression, humidité) qui mesurent des choses différentes mais qui racontent ensemble l'environnement d'une pièce.
- **Comprendre ce que veut dire « enregistrer »** pour un programme : ouvrir un fichier, y ajouter une ligne, le refermer proprement pour ne rien perdre, et le récupérer plus tard.
- **Lire les données** dans un tableur et **les transformer en graphique** lisible : c'est l'étape où des chiffres bruts deviennent une histoire qu'on peut raconter à un copain ou à un prof.
- **Imaginer d'autres usages** : surveiller la qualité de l'air d'une salle de classe, suivre la météo d'un balcon pendant les vacances, observer le micro-climat d'une serre, comparer deux pièces de la maison...
---

## Étape 1 : Construire

« Construire » se résume ici à comprendre comment accéder aux composants de la carte : tout est déjà soudé.

### Les deux capteurs environnementaux

La STeaMi dispose de deux capteurs pour mesurer l'environnement, accessibles via le bus I2C :

```python
from machine import I2C
from wsen_pads import WSEN_PADS
from hts221 import HTS221

i2c = I2C(1)
capteur_pads = WSEN_PADS(i2c)   # température + pression
capteur_hts = HTS221(i2c)       # humidité

temperature = capteur_pads.temperature()   # °C
pression = capteur_pads.pressure_hpa()     # hPa
humidite = capteur_hts.humidity()          # %
```

### Écrire dans un fichier sur la carte

La STeaMi a une petite mémoire interne dans laquelle on peut écrire des fichiers, comme sur une clé USB. On les manipule depuis MicroPython avec la fonction `open()`, exactement comme en Python sur un ordinateur. Le format [CSV](https://fr.wikipedia.org/wiki/Comma-separated_values) (_Comma-Separated Values_, « valeurs séparées par des virgules ») est le format universel des tableurs : chaque ligne est une mesure, chaque valeur est séparée par un point-virgule.

```python
# Ouvrir le fichier en mode ajout ("a") pour ne pas effacer les données existantes
with open("log.csv", "a") as fichier:
    fichier.write("{};{:.1f};{:.0f};{:.1f}\n".format(temps_s, temperature, pression, humidite))
```

:::info[Mode `"a"` ou mode `"w"` ?]
`open("log.csv", "w")` (pour _write_) **recrée le fichier à zéro** à chaque ouverture. Pratique pour démarrer une expérience propre, mais catastrophique si on l'utilise dans la boucle (on ne garderait que la dernière mesure). `open("log.csv", "a")` (pour _append_, « ajouter ») **ajoute la nouvelle ligne à la suite** des précédentes, sans rien effacer. C'est ce qu'on veut pour un datalogger. On utilise `"w"` une seule fois au démarrage, pour écrire l'en-tête.
:::

### Mesurer le temps écoulé

Pour horodater chaque mesure, on note l'instant de départ et on calcule le temps écoulé en secondes à chaque itération :

```python
import time

debut = time.ticks_ms()

# Dans la boucle :
ecoule_s = time.ticks_diff(time.ticks_ms(), debut) // 1000
```

### Connecter la carte à l'ordinateur

Brancher la STeaMi à l'ordinateur via le câble USB. Si l'IDE est déjà configuré (voir la fiche [Thonny : Prise en main de MicroPython](/ressources/inovmicro-exao/t03-decouverte-thonny) si vous démarrez), la console MicroPython doit afficher `>>>`. C'est **l'invite** (parfois appelée « prompt » en anglais) : un signe qui apparaît en début de ligne pour vous dire que la console est prête à recevoir une commande.

### Tester les capteurs dans l'invite

```python
>>> from machine import I2C
>>> from wsen_pads import WSEN_PADS
>>> from hts221 import HTS221
>>> i2c = I2C(1)
>>> capteur_pads = WSEN_PADS(i2c)
>>> capteur_hts = HTS221(i2c)
>>> capteur_pads.temperature()
23.4
>>> capteur_pads.pressure_hpa()
1013.2
>>> capteur_hts.humidity()
48.7
```

---

## Étape 2 : Programmer

Le programme enregistre la température, la pression et l'humidité dans `log.csv` toutes les 10 secondes. Le bouton **A** démarre et met en pause l'enregistrement. L'écran OLED affiche les valeurs en temps réel ainsi que l'état de l'enregistrement.

:::info[Attention avant de débrancher]
Toujours arrêter l'enregistrement avec le bouton **A** avant de débrancher la carte ou de couper le programme. Interrompre une écriture en cours peut corrompre le fichier `log.csv`. Quand l'écran affiche **PAUSE**, le fichier est correctement fermé et peut être copié sur l'ordinateur.
:::

### Composants utilisés

| Composant      | Nom dans le programme | Rôle                                        |
| -------------- | --------------------- | ------------------------------------------- |
| WSEN-PADS      | objet `capteur_pads`  | Température (°C) et pression (hPa)          |
| HTS221         | objet `capteur_hts`   | Humidité relative (%)                       |
| Bouton A       | objet `bouton_a`      | Démarrer / mettre en pause l'enregistrement |
| Écran OLED     | objet `ecran`         | Affichage temps réel des valeurs et état    |

### Programme

```python
# Testée avec firmware STeaMi 0.23.1
#
# Datalogger : enregistre température, pression et humidité
# dans log.csv toutes les 10 secondes.
# Bouton A : démarrer / mettre en pause l'enregistrement.

import ssd1327
import time
from machine import I2C, SPI, Pin
from wsen_pads import WSEN_PADS
from hts221 import HTS221
from steami_screen import Screen, SSD1327Display

# --- Écran OLED ---
spi = SPI(1)
broche_dc = Pin("DATA_COMMAND_DISPLAY")
broche_reset = Pin("RST_DISPLAY")
broche_cs = Pin("CS_DISPLAY")
oled_brut = ssd1327.WS_OLED_128X128_SPI(spi, broche_dc, broche_reset, broche_cs)
pilote_oled = SSD1327Display(oled_brut)
ecran = Screen(pilote_oled)

# --- Capteurs ---
i2c = I2C(1)
capteur_pads = WSEN_PADS(i2c)
capteur_hts = HTS221(i2c)

# --- Bouton ---
bouton_a = Pin("A_BUTTON", Pin.IN)

# --- Paramètres ---
INTERVALLE_MS = 10_000   # 10 secondes entre deux mesures
NOM_FICHIER = "log.csv"


def lire_capteurs():
    """Lit les trois grandeurs et retourne un tuple."""
    temperature = capteur_pads.temperature()
    pression = capteur_pads.pressure_hpa()
    humidite = capteur_hts.humidity()
    humidite = max(0.0, min(100.0, humidite))   # borner entre 0 et 100 %
    return temperature, pression, humidite


def afficher_mesures(temperature, pression, humidite, enregistrement, n):
    """Met à jour l'écran avec les valeurs et l'état."""
    etat = "REC #{}".format(n) if enregistrement else "PAUSE"
    ecran.clear()
    ecran.title(etat)
    ecran.value("{:.1f}".format(temperature), unit="C")
    ecran.subtitle(
        "P:{:.0f}hPa".format(pression),
        "H:{:.0f}%".format(humidite),
    )
    ecran.show()


def attendre_avec_bouton(duree_ms):
    """Attend duree_ms en restant réactif au bouton A.
    Retourne True si le bouton A a été pressé pendant l'attente."""
    bouton_precedent = bouton_a.value()
    debut = time.ticks_ms()
    while time.ticks_diff(time.ticks_ms(), debut) < duree_ms:
        bouton = bouton_a.value()
        if bouton == 0 and bouton_precedent == 1:
            time.sleep_ms(300)   # anti-rebond
            return True
        bouton_precedent = bouton
        time.sleep_ms(20)
    return False


# --- Initialisation du fichier CSV ---
with open(NOM_FICHIER, "w") as fichier:
    fichier.write("temps_s;temperature_C;pression_hPa;humidite_pct\n")

print("Datalogger pret. Appuyer sur A pour demarrer.")
ecran.clear()
ecran.value("A", label="Appuyer pour")
ecran.subtitle("demarrer")
ecran.show()

# --- Attendre le premier appui ---
while bouton_a.value() == 1:
    time.sleep_ms(20)
time.sleep_ms(300)   # anti-rebond

# --- Boucle principale ---
enregistrement = True
n_mesures = 0
debut = time.ticks_ms()
bouton_precedent = 1

while True:
    bouton = bouton_a.value()

    # Détection de transition pour basculer pause / enregistrement
    if bouton == 0 and bouton_precedent == 1:
        enregistrement = not enregistrement
        if enregistrement:
            print("Enregistrement repris.")
        else:
            print("Enregistrement mis en pause, fichier securise.")
        time.sleep_ms(300)   # anti-rebond
    bouton_precedent = bouton

    if enregistrement:
        temperature, pression, humidite = lire_capteurs()
        ecoule_s = time.ticks_diff(time.ticks_ms(), debut) // 1000
        n_mesures += 1

        # Écriture dans le fichier CSV
        with open(NOM_FICHIER, "a") as fichier:
            fichier.write("{};{:.1f};{:.0f};{:.1f}\n".format(
                ecoule_s, temperature, pression, humidite))

        print("#{} t={}s T={:.1f}C P={:.0f}hPa H={:.0f}%".format(
            n_mesures, ecoule_s, temperature, pression, humidite))

        afficher_mesures(temperature, pression, humidite, True, n_mesures)

        # Attendre INTERVALLE_MS en restant réactif au bouton A
        if attendre_avec_bouton(INTERVALLE_MS):
            enregistrement = False
            print("Enregistrement mis en pause, fichier securise.")
    else:
        # En pause : rafraîchir l'écran toutes les 500 ms
        temperature, pression, humidite = lire_capteurs()
        afficher_mesures(temperature, pression, humidite, False, n_mesures)
        time.sleep_ms(500)
```

### Comment cela fonctionne ?

Le programme s'organise autour de trois mécanismes :

- **`attendre_avec_bouton(duree_ms)`** : remplace le simple `time.sleep_ms(INTERVALLE_MS)` qui bloquerait tout. Elle regarde le bouton A toutes les 20 ms pendant la durée d'attente et retourne `True` immédiatement si un appui est détecté. C'est ce qui rend la pause **immédiate** même au milieu des 10 secondes entre deux mesures.
- **Fichier CSV bien refermé** : à l'initialisation, on crée le fichier en mode `"w"` pour écrire l'en-tête. Ensuite on l'ouvre toujours en mode `"a"` (ajout). Chaque `with open(...) as fichier` ferme proprement le fichier après l'écriture. C'est ce qui garantit qu'aucune ligne n'est perdue si on appuie sur A au mauvais moment.
- **Affichage clair** : `ecran.value()` affiche la température en grand au centre (la grandeur qui change le plus vite, donc la plus intéressante en temps réel), `ecran.subtitle()` place pression et humidité en bas sans chevauchement.

:::info[Pourquoi un format CSV et pas un autre ?]

Le CSV (_Comma-Separated Values_, valeurs séparées par des virgules) est probablement le **format de fichier le plus simple et le plus universel** au monde pour échanger des données tabulaires. Un fichier `.csv`, c'est juste du texte : chaque ligne est une mesure, chaque valeur est séparée par un point-virgule (ou une virgule, selon la convention).

Et l'universalité paye : ton fichier `log.csv` s'ouvre directement dans Excel, dans Google Sheets, dans LibreOffice, dans Python (`import csv`), dans R, dans MATLAB, dans n'importe quel logiciel d'analyse de données. Les fichiers scientifiques que publient les laboratoires de physique, les capteurs de pollution des villes, les stations météo de Météo France utilisent souvent du CSV, ou un format dérivé.

:::

### Exécution

- **Lancer** : bouton **Run** ▶ dans l'IDE, puis appuyer sur A pour démarrer.
- **Arrêter proprement** : appuyer sur A pour mettre en pause (l'écran affiche **PAUSE**), puis couper le programme depuis l'IDE ou débrancher la carte.
- **Programme persistant** : enregistrer sous `main.py` sur la carte. Il redémarre à chaque mise sous tension, idéal pour lancer une mesure longue puis venir récupérer le fichier le lendemain.

---

## Étape 3 : Récupérer et visualiser les données

### 1. Copier le fichier sur l'ordinateur

Depuis votre IDE, utiliser le gestionnaire de fichiers de la STeaMi pour télécharger `log.csv` sur votre disque. Dans Thonny, aller dans **View → Files**, naviguer jusqu'à `log.csv` sur la carte, clic droit → **Download to**.

### 2. Ouvrir dans un tableur

Ouvrir `log.csv` dans Google Sheets, LibreOffice Calc ou Excel. Si le tableur ne reconnaît pas automatiquement le séparateur point-virgule, utiliser la fonction **Importer** ou **Données → Texte en colonnes** et préciser `;` comme délimiteur.

Le fichier contient quatre colonnes :

| temps_s | temperature_C | pression_hPa | humidite_pct |
| --------- | --------------- | -------------- | -------------- |
| 0         | 23.4            | 1013           | 48.7           |
| 10        | 23.5            | 1013           | 48.9           |
| …         | …               | …              | …              |

### 3. Tracer un graphique

Sélectionner les colonnes `temps_s` et `temperature_C`, puis insérer un graphique en courbes. Répéter pour la pression et l'humidité. On observe ainsi l'évolution de l'environnement sur la durée de l'expérience.

---

## Étape 4 : Améliorer

Quatre pistes pour transformer le datalogger en outil de mesure plus puissant.

### 1. Adapter la fréquence à ce qu'on mesure

L'intervalle de 10 secondes est utile pour vérifier rapidement que tout marche, mais c'est généralement trop fréquent pour une vraie expérience. Pour suivre la température d'une pièce sur une journée, une mesure par minute suffit largement. Pour observer la météo d'un week-end, une mesure toutes les 5 minutes laisse largement le temps.

```python
INTERVALLE_MS = 60_000    # une mesure par minute (pour une journée de cours)
INTERVALLE_MS = 300_000   # une mesure toutes les 5 minutes (pour un week-end)
```

Une expérience sur une journée entière (8 h) à raison d'une mesure par minute produit 480 lignes : tout à fait gérable dans un tableur, et juste assez dense pour voir une vraie courbe.

### 2. Horodatage réel avec l'horloge interne

Le temps en secondes depuis le début est pratique pour comparer des durées, mais beaucoup moins parlant que « 14:32:08 le 18 mai ». Heureusement, la STeaMi a une **horloge interne** (RTC, pour _Real-Time Clock_) qu'on peut régler à l'heure de l'ordinateur puis interroger dans la boucle :

```python
import pyb

rtc = pyb.RTC()
rtc.datetime((2025, 1, 15, 0, 9, 30, 0, 0))   # régler à l'heure actuelle

# Dans la boucle, à la place de ecoule_s :
dt = rtc.datetime()
horodatage = "{:04d}-{:02d}-{:02d} {:02d}:{:02d}:{:02d}".format(
    dt[0], dt[1], dt[2], dt[4], dt[5], dt[6])

with open(NOM_FICHIER, "a") as fichier:
    fichier.write("{};{:.1f};{:.0f};{:.1f}\n".format(
        horodatage, temperature, pression, humidite))
```

### 3. Voir la courbe se dessiner en direct

Plutôt que de découvrir les courbes au moment du dépouillement, on peut afficher en temps réel les N dernières mesures sous forme de courbe directement sur l'écran de la STeaMi. C'est immédiat, ça parle, ça donne envie de continuer à observer :

```python
HISTORIQUE = []
HISTORIQUE_MAX = 20

# Dans la boucle d'enregistrement :
HISTORIQUE.append(temperature)
if len(HISTORIQUE) > HISTORIQUE_MAX:
    HISTORIQUE.pop(0)

ecran.clear()
ecran.title("Temperature")
ecran.graph(HISTORIQUE, min_val=0, max_val=50)
ecran.show()
```

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/i15-collecter-donnees/steami_graph.jpeg"
    alt="STeaMi affichant la courbe de température en temps réel"
    style={{maxWidth: '450px', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    L'écran affiche la courbe des 20 dernières mesures de température en direct.
  </figcaption>
</figure>

### 4. Mener une vraie expérience à la maison

Maintenant que le datalogger marche, choisis une question concrète et lance une mesure de plusieurs heures :

- **« Mon frigo est-il assez froid ? »** : pose la STeaMi entre deux yaourts pendant une nuit, mesure toutes les minutes, et compare au seuil de 4 °C recommandé pour la conservation.
- **« Ma chambre se rafraîchit-elle vraiment la nuit ? »** : laisse la carte sur ta table de chevet du soir au matin, mesure toutes les 5 minutes.
- **« Le micro-climat de ma classe est-il bon pour apprendre ? »** : pose la carte sur une étagère pendant un cours, et observe si l'air devient plus humide / plus chaud à mesure que les élèves respirent. C'est aussi un argument scientifique pour aérer plus souvent.
- **« Quelle pièce de la maison est la plus humide ? »** : déplace la carte de la salle de bain à la cuisine, mesure une heure dans chaque, et compare.

Une fois les données récupérées, raconte ce que tu vois : à quelle heure la température monte / descend ? Quelle est la valeur maximale / minimale ? Y a-t-il un pic surprenant ? C'est ça, faire des sciences.

---

## Aller plus loin

### Pour comprendre

- **[L'enregistrement de données dans l'histoire (Wikipédia)](https://fr.wikipedia.org/wiki/Enregistreur_de_donn%C3%A9es)** : avant les capteurs électroniques, les marins notaient température et pression toutes les heures à la main pendant des traversées de plusieurs mois. C'est cette accumulation patiente de mesures qui a permis aux scientifiques du 19e siècle de cartographier les courants océaniques et de comprendre les climats.
- **[Le format CSV, le langage commun des données (Wikipédia)](https://fr.wikipedia.org/wiki/Comma-separated_values)** : pourquoi un format aussi simple que « valeurs séparées par des virgules » est devenu le passe-partout pour échanger des données entre logiciels, langages et machines depuis les années 1970.
- **[Effet de serre et capteurs CO2 (CNRS Journal)](https://lejournal.cnrs.fr/articles/peut-on-evaluer-leffet-de-serre-en-laboratoire)** : comment les scientifiques mesurent en temps réel l'effet de serre dans l'atmosphère, et pourquoi les capteurs environnementaux miniatures (cousins de ceux de la STeaMi) sont devenus essentiels pour les sciences du climat.
- **[Quand mesurer change tout : le projet Météo France (Wikipédia)](https://fr.wikipedia.org/wiki/M%C3%A9t%C3%A9o-France)** : 600 stations de mesure réparties sur le territoire français, qui collectent température, pression, humidité, vent, pluie 24 h sur 24. La même chose qu'on fait avec la STeaMi, mais à l'échelle d'un pays.

### Pour s'inspirer

- **[Sensor.community, le réseau citoyen de capteurs de pollution](https://sensor.community/fr/)** : des milliers de bénévoles dans le monde ont installé chez eux des petits capteurs de qualité de l'air qui publient leurs mesures en open data. Ta STeaMi peut faire la même chose pour ta rue, ton balcon, ton école.
- **[Disco-soup : suivre la fraîcheur du frigo (Hackster)](https://www.hackster.io/news/grow-your-skills-with-iot-projects-fcc99f31a26f)** : projets de dataloggers pour la cuisine et le frigo, avec alertes en cas de température anormale. Le principe de notre datalogger appliqué à un cas concret du quotidien.
- **[ARSO Citizen Science Air Quality](https://www.epa.gov/air-sensor-toolbox)** : le programme de l'agence de l'environnement américaine pour aider les citoyens à mesurer leur propre qualité de l'air. Une démarche scientifique participative à la portée de tout le monde.
- **[Mesurer le bruit de sa rue (Cartophonies)](https://cartophonies.fr/)** : un projet français qui cartographie les ambiances sonores de villes entières grâce à des contributions citoyennes. Même esprit que notre datalogger, appliqué au son.
- **[Greta Thunberg et la mesure scientifique du climat](https://fr.wikipedia.org/wiki/Greta_Thunberg)** : tout son discours public s'appuie sur les **données** collectées par les climatologues depuis des décennies. La force d'une conviction repose sur des courbes, et les courbes commencent toujours par un capteur qui mesure et écrit.

---

_Cette fiche fait partie du projet [I-Novmicro #2 : Action EXAO](/projets/inovmicro-exao). Adaptée du projet [Let's STEAM](/projets/lets-steam) (fiche [`r1as15-collecte-donnees`](/ressources/lets-steam/r1as15-collecte-donnees)) sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._


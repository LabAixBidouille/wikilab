---
id: i15-collecter-donnees
title: Collecter des données avec la STeaMi
sidebar_label: "Collecter des données"
sidebar_position: 15
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>
<div style={{flex: 1}}>
# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="2" y="2" width="20" height="20" rx="3" fill="#140e4e" fillOpacity="0.1"/><rect x="4" y="14" width="3" height="6" rx="0.5" fill="#140e4e" fillOpacity="0.25"/><rect x="8.5" y="10" width="3" height="10" rx="0.5" fill="#140e4e" fillOpacity="0.25"/><rect x="13" y="6" width="3" height="14" rx="0.5" fill="#140e4e"/><rect x="17.5" y="8" width="3" height="12" rx="0.5" fill="#140e4e" fillOpacity="0.25"/><polyline points="4 12 8.5 8 13 4 17.5 6" fill="none" stroke="#140e4e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> Collecter des données avec la STeaMi

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--info">STeaMi</span>
  <span className="badge badge--warning">MicroPython</span>
</div>
| Projet        | Durée  | Difficulté | Âge       | Logiciel STeaMi testé |
| ------------- | ------ | ---------- | --------- | --------------------- |
| I-Novmicro #2 | 50 min | Avancé     | 11-99 ans | 0.23.1                |

## Matériel et Montage

- 1 carte STeaMi
- 1 câble USB de données (micro-USB pour la STeaMi V1, USB-C pour la STeaMi V2). Attention : un câble qui ne sert qu'à charger un téléphone ne fonctionnera pas.
- 1 ordinateur sous Windows, macOS ou Linux
- Un IDE prenant en charge MicroPython
- Un tableur (Google Sheets, LibreOffice Calc, Microsoft Excel…)
</div>
<img src="/img/ressources/inovmicro-exao/i15-collecter-donnees/icone.png" alt="Collecte de données sur la STeaMi" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />
</div>
---

## De quoi parle-t-on ?

Un capteur mesure une grandeur physique et la convertit en valeur numérique. Une seule mesure ponctuelle ne suffit pas pour mener une expérience scientifique — il faut observer comment cette valeur **évolue dans le temps**. C'est le principe du [datalogger](https://fr.wikipedia.org/wiki/Enregistreur_de_donn%C3%A9es) : enregistrer automatiquement des mesures à intervalles réguliers pour les analyser ensuite.

La STeaMi intègre trois capteurs environnementaux complémentaires :

- **WSEN-PADS** — pression barométrique (hPa) et température (°C)
- **HTS221** — humidité relative (%)
Dans cette activité, on va programmer la STeaMi pour enregistrer ces trois grandeurs dans un fichier **CSV** sur sa mémoire interne, puis l'exporter sur ordinateur pour le visualiser dans un tableur.

---

## Objectifs d'apprentissage

- Lire plusieurs capteurs environnementaux en MicroPython
- Écrire des données dans un fichier CSV sur le système de fichiers de la STeaMi
- Gérer le démarrage et l'arrêt de l'enregistrement avec un bouton
- Exporter le fichier CSV et tracer un graphique dans un tableur
---

## Étape 1 : Construire

"Construire" se résume ici à comprendre comment accéder aux composants de la carte — tout est déjà soudé.

### Les capteurs environnementaux

La STeaMi dispose de deux capteurs pour mesurer l'environnement :

```python
from machine import I2C
from wsen_pads import WSEN_PADS
from hts221 import HTS221

i2c = I2C(1)
pads = WSEN_PADS(i2c)   # température + pression
hts  = HTS221(i2c)      # humidité

temp = pads.temperature()   # °C
pres = pads.pressure_hpa()  # hPa
humi = hts.humidity()       # %
```

### Écrire dans un fichier CSV

MicroPython expose le système de fichiers de la STeaMi comme un disque standard. On écrit dedans avec `open()`, exactement comme en Python classique. Le format [CSV](https://fr.wikipedia.org/wiki/Comma-separated_values) (Comma-Separated Values) est le plus simple pour un tableur : chaque ligne est une mesure, chaque valeur est séparée par un point-virgule.

```python
# Ouvrir le fichier en mode ajout ("a") pour ne pas effacer les données existantes
with open("log.csv", "a") as f:
    f.write("{};{:.1f};{:.0f};{:.1f}\n".format(temps_s, temp, pres, humi))
```

:::info[Mode "a" vs mode "w"]
`open("log.csv", "w")` recrée le fichier à zéro à chaque ouverture. `open("log.csv", "a")` ajoute les nouvelles lignes à la suite — c'est ce qu'on veut pour un datalogger. On utilise `"w"` uniquement au démarrage pour écrire l'en-tête CSV.
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

Brancher la STeaMi à l'ordinateur via le câble USB. Si un des IDE proposés est déjà configuré, vous devriez voir le shell MicroPython (`>>>`).

### Tester les capteurs dans le REPL

```python
>>> from machine import I2C
>>> from wsen_pads import WSEN_PADS
>>> from hts221 import HTS221
>>> i2c = I2C(1)
>>> pads = WSEN_PADS(i2c)
>>> hts = HTS221(i2c)
>>> temp = pads.temperature()
>>> pres = pads.pressure_hpa()
>>> humi = hts.humidity()
>>> print(temp, pres, humi)
23.4 1013.2 48.7
```

---

## Étape 2 : Programmer

Le programme enregistre la température, la pression et l'humidité dans `log.csv` toutes les 10 secondes. Le bouton **A** démarre et met en pause l'enregistrement. L'écran OLED affiche les valeurs en temps réel ainsi que l'état de l'enregistrement.

:::info[Attention avant de débrancher]
Toujours arrêter l'enregistrement avec le bouton **A** avant de débrancher la carte ou de couper le programme. Interrompre une écriture en cours peut corrompre le fichier `log.csv`. Quand l'écran affiche **PAUSE**, le fichier est correctement fermé et peut être copié sur l'ordinateur.
:::

### Composants utilisés

| Composant      | Nom dans le programme | Rôle                                       |
| -------------- | --------------------- | ------------------------------------------ |
| WSEN-PADS      | objet `pads`          | Température (°C) et pression (hPa)         |
| HTS221         | objet `hts`           | Humidité relative (%)                      |
| Bouton A       | `A_BUTTON`            | Démarrer / mettre en pause l'enregistrement|
| Écran OLED     | objet `screen`        | Affichage temps réel des valeurs et état   |

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
from steami_screen import Screen, SSD1327Display, GRAY, LIGHT

# --- Écran ---
spi = SPI(1)
dc  = Pin("DATA_COMMAND_DISPLAY")
res = Pin("RST_DISPLAY")
cs  = Pin("CS_DISPLAY")
raw_display = ssd1327.WS_OLED_128X128_SPI(spi, dc, res, cs)
display = SSD1327Display(raw_display)
screen  = Screen(display)

# --- Capteurs ---
i2c  = I2C(1)
pads = WSEN_PADS(i2c)
hts  = HTS221(i2c)

# --- Bouton ---
A_BUTTON = Pin("A_BUTTON", Pin.IN)

# --- Paramètres ---
INTERVALLE_MS = 10_000   # 10 secondes entre deux mesures
NOM_FICHIER   = "log.csv"


def lire_capteurs():
    """Lit les trois grandeurs et retourne un tuple."""
    temp = pads.temperature()
    pres = pads.pressure_hpa()
    humi = hts.humidity()
    humi = max(0.0, min(100.0, humi))   # clamp 0-100 %
    return temp, pres, humi


def afficher_mesures(temp, pres, humi, enregistrement, n):
    """Met à jour l'écran avec les valeurs et l'état."""
    etat = "REC #{}".format(n) if enregistrement else "PAUSE"
    screen.clear()
    screen.title(etat)
    screen.value("{:.1f}".format(temp), unit="C")
    screen.subtitle(
        "P:{:.0f}hPa".format(pres),
        "H:{:.0f}%".format(humi),
    )
    screen.show()


def attendre_avec_bouton(duree_ms):
    """Attend duree_ms en restant réactif au bouton A.
    Retourne True si le bouton A a été pressé pendant l'attente."""
    a_prec = A_BUTTON.value()
    debut = time.ticks_ms()
    while time.ticks_diff(time.ticks_ms(), debut) < duree_ms:
        a = A_BUTTON.value()
        if a == 0 and a_prec == 1:
            time.sleep_ms(300)   # anti-rebond
            return True
        a_prec = a
        time.sleep_ms(20)
    return False


# --- Initialisation du fichier CSV ---
with open(NOM_FICHIER, "w") as f:
    f.write("temps_s;temperature_C;pression_hPa;humidite_pct\n")

print("Datalogger prêt. Appuyer sur A pour démarrer.")
screen.clear()
screen.value("A", label="Appuyer pour")
screen.subtitle("demarrer")
screen.show()

# --- Attendre le premier appui ---
while A_BUTTON.value() == 1:
    time.sleep_ms(20)
time.sleep_ms(300)   # anti-rebond

# --- Boucle principale ---
enregistrement = True
n_mesures = 0
debut = time.ticks_ms()
a_prec = 1

while True:
    a = A_BUTTON.value()

    # Détection de transition pour basculer pause/enregistrement
    if a == 0 and a_prec == 1:
        enregistrement = not enregistrement
        if enregistrement:
            print("Enregistrement repris.")
        else:
            print("Enregistrement mis en pause — fichier sécurisé.")
        time.sleep_ms(300)   # anti-rebond
    a_prec = a

    if enregistrement:
        temp, pres, humi = lire_capteurs()
        ecoule_s = time.ticks_diff(time.ticks_ms(), debut) // 1000
        n_mesures += 1

        # Écriture dans le fichier CSV
        with open(NOM_FICHIER, "a") as f:
            f.write("{};{:.1f};{:.0f};{:.1f}\n".format(
                ecoule_s, temp, pres, humi))

        print("#{} t={}s T={:.1f}C P={:.0f}hPa H={:.0f}%".format(
            n_mesures, ecoule_s, temp, pres, humi))

        afficher_mesures(temp, pres, humi, True, n_mesures)

        # Attendre INTERVALLE_MS en restant réactif au bouton A
        if attendre_avec_bouton(INTERVALLE_MS):
            enregistrement = False
            print("Enregistrement mis en pause — fichier sécurisé.")
    else:
        # En pause : rafraîchir l'écran toutes les 500 ms
        temp, pres, humi = lire_capteurs()
        afficher_mesures(temp, pres, humi, False, n_mesures)
        time.sleep_ms(500)
```

### Comment cela fonctionne ?

Le programme s'organise autour de trois mécanismes :

- **`attendre_avec_bouton(duree_ms)`** : remplace le simple `time.sleep_ms(INTERVALLE_MS)` qui bloquerait la boucle. Elle scrute le bouton A toutes les 20 ms pendant la durée d'attente et retourne `True` immédiatement si un appui est détecté — c'est ce qui rend la pause réactive même pendant les 10 secondes entre deux mesures.
- **Fichier CSV** : à l'initialisation, on crée le fichier avec `"w"` pour écrire l'en-tête. Ensuite on l'ouvre toujours en mode `"a"` (ajout). Chaque `with open(...) as f` ferme proprement le fichier après l'écriture — c'est ce qui garantit qu'aucune donnée n'est perdue si on appuie sur A pour mettre en pause.
- **Affichage** : `screen.value()` affiche la température en grand au centre, `screen.subtitle()` place pression et humidité en bas sans chevauchement.
### Exécution

- **Lancer** : bouton **Run** ▶ dans l'IDE, puis appuyer sur A pour démarrer.
- **Arrêter proprement** : appuyer sur A pour mettre en pause — l'écran affiche **PAUSE** — puis couper le programme depuis l'IDE ou débrancher la carte.
- **Programme persistant** : enregistrer sous `main.py` sur la carte. Il redémarre à chaque mise sous tension.
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

Trois pistes pour aller plus loin.

### 1. Changer l'intervalle de mesure

Modifier `INTERVALLE_MS` pour adapter la fréquence d'échantillonnage à l'expérience :

```python
INTERVALLE_MS = 60_000    # une mesure par minute
INTERVALLE_MS = 300_000   # une mesure toutes les 5 minutes
```

Une expérience sur une journée entière (8h) avec un intervalle de 60 s produit 480 lignes — tout à fait gérable.

### 2. Horodatage réel avec RTC

Remplacer le temps écoulé par une heure réelle grâce à la RTC (Real-Time Clock) intégrée au microcontrôleur :

```python
import pyb

rtc = pyb.RTC()
rtc.datetime((2025, 1, 15, 0, 9, 30, 0, 0))   # régler à l'heure actuelle

# Dans la boucle, à la place de ecoule_s :
dt = rtc.datetime()
horodatage = "{:04d}-{:02d}-{:02d} {:02d}:{:02d}:{:02d}".format(
    dt[0], dt[1], dt[2], dt[4], dt[5], dt[6])

with open(NOM_FICHIER, "a") as f:
    f.write("{};{:.1f};{:.0f};{:.1f}\n".format(horodatage, temp, pres, humi))
```

### 3. Affichage graphique en temps réel

Plutôt que d'afficher uniquement les valeurs instantanées, mémoriser les N dernières mesures et les afficher avec `screen.graph()` :

```python
HISTORIQUE = []
HISTORIQUE_MAX = 20

# Dans la boucle d'enregistrement :
HISTORIQUE.append(temp)
if len(HISTORIQUE) > HISTORIQUE_MAX:
    HISTORIQUE.pop(0)

screen.clear()
screen.title("Temperature")
screen.graph(HISTORIQUE, min_val=0, max_val=50)
screen.show()
```

<img src="/img/ressources/inovmicro-exao/i15-collecter-donnees/steami_graph.jpeg" alt="Collecte de données sur la STeaMi vu du graphique" style={{margin: 'auto', width: '500px', height: '500px', objectFit: 'contain', flexShrink: 0}} />

---

## Aller plus loin

- [Enregistreur de données (Wikipédia)](https://fr.wikipedia.org/wiki/Enregistreur_de_donn%C3%A9es) : principes et applications des dataloggers.
- [Format CSV (Wikipédia)](https://fr.wikipedia.org/wiki/Comma-separated_values) : description du format de fichier utilisé pour l'export.
- [Wiki STeaMi : Capteurs intégrés](https://wiki.steami.cc/docs/hardware/main-components/sensors) : description du WSEN-PADS et du HTS221 sur la carte.
---

_Cette fiche fait partie du projet [I-Novmicro #2 : Action EXAO](/projets/inovmicro-exao). Adaptée de la fiche Let's STEAM [`r1as15-collecte-donnees`](/ressources/lets-steam/r1as15-collecte-donnees) sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._


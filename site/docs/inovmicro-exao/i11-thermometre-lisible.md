---
id: i11-thermometre-lisible
title: Thermomètre très lisible
sidebar_label: "Thermomètre très lisible"
sidebar_position: 18
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>
<div style={{flex: 1}}>
# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="9" y="1" width="6" height="16" rx="3" fill="#140e4e" fillOpacity="0.1"/><circle cx="12" cy="18" r="4" fill="#140e4e" fillOpacity="0.25"/><circle cx="12" cy="18" r="2" fill="#140e4e"/><rect x="11" y="4" width="2" height="11" rx="1" fill="#140e4e"/><line x1="15" y1="6" x2="17" y2="6" stroke="#140e4e" strokeWidth="1.5" strokeLinecap="round"/><line x1="15" y1="9" x2="17" y2="9" stroke="#140e4e" strokeWidth="1.5" strokeLinecap="round"/><line x1="15" y1="12" x2="17" y2="12" stroke="#140e4e" strokeWidth="1.5" strokeLinecap="round"/></svg> Thermomètre très lisible

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--info">STeaMi</span>
  <span className="badge badge--warning">MicroPython</span>
</div>
| Projet        | Durée  | Difficulté      | Âge       | Logiciel STeaMi testé |
| ------------- | ------ | --------------- | --------- | --------------------- |
| I-Novmicro #2 | 20 min | Intermédiaire   | 11-99 ans | 0.23.1                |

## Matériel et Montage

- 1 carte STeaMi
- 1 câble USB de données (micro-USB pour la STeaMi V1, USB-C pour la STeaMi V2). Attention : un câble qui ne sert qu'à charger un téléphone ne fonctionnera pas.
- 1 ordinateur sous Windows, macOS ou Linux
- Un IDE prenant en charge MicroPython
</div>
<img src="/img/ressources/inovmicro-exao/i11-thermometre-lisible/icone.png" alt="Thermomètre très lisible sur la STeaMi" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />
</div>
---

## De quoi parle-t-on ?

La température est une grandeur physique qui exprime le chaud et le froid — c'est la manifestation de l'énergie thermique présente dans toute matière. Un [capteur de température](https://fr.wikipedia.org/wiki/Capteur_de_temp%C3%A9rature) est un dispositif électronique qui mesure cette grandeur et la convertit en données numériques.

La STeaMi intègre un capteur de pression et de température **WSEN-PADS** de Würth Elektronik. Dans cette activité, on va lire la température (et la pression en bonus) et les afficher de façon claire sur l'écran OLED — avec la valeur en grand, une jauge en arc de cercle, et un indicateur de confort thermique. Pas besoin d'écran LCD externe ni de câblage.

---

## Objectifs d'apprentissage

- Initialiser et lire le capteur de pression et température WSEN-PADS en MicroPython
- Afficher une valeur numérique et une jauge visuelle sur l'écran OLED avec `steami_screen`
- Utiliser les widgets `gauge()` et `value()` pour construire un affichage expressif
- Comprendre la différence entre température ambiante et température mesurée par un capteur sur PCB
---

## Étape 1 : Construire

"Construire" se résume ici à comprendre comment accéder aux composants de la carte — tout est déjà soudé.

### Le capteur WSEN-PADS

Le WSEN-PADS est un capteur de **pression barométrique et de température** de Würth Elektronik, intégré directement sur le PCB de la STeaMi. Il mesure la pression en hPa et la température en °C avec une bonne précision pour un capteur embarqué.

```python
from machine import I2C
from wsen_pads import WSEN_PADS

i2c = I2C(1)
pads = WSEN_PADS(i2c)

temp = pads.temperature()     # température en °C (float)
pres = pads.pressure_hpa()    # pression en hPa (float)
print("{:.1f} °C  {:.0f} hPa".format(temp, pres))
```

:::info[Température ambiante vs température du capteur]
Le WSEN-PADS mesure la température au niveau de sa puce, proche des autres composants du PCB. L'auto-échauffement peut ajouter quelques degrés par rapport à la température ambiante réelle. Pour corriger cet écart, on mesure la différence par rapport à un thermomètre de référence et on applique `pads.set_temp_offset(offset_c)`.
:::

### Les widgets de `steami_screen`

Pour rendre l'affichage expressif, on va combiner trois widgets de `steami_screen` :

- `screen.gauge(val, min_val, max_val)` — un arc de cercle qui se remplit selon la valeur
- `screen.value(val, unit="°C", label="...")` — la valeur numérique en grand au centre
- `screen.subtitle("...")` — un texte de commentaire en bas
L'initialisation de l'écran est toujours la même séquence :

```python
import ssd1327
from machine import SPI, Pin
from steami_screen import Screen, SSD1327Display, LIGHT, GRAY

spi = SPI(1)
dc  = Pin("DATA_COMMAND_DISPLAY")
res = Pin("RST_DISPLAY")
cs  = Pin("CS_DISPLAY")
raw_display = ssd1327.WS_OLED_128X128_SPI(spi, dc, res, cs)
display = SSD1327Display(raw_display)
screen  = Screen(display)
```

### Connecter la carte à l'ordinateur

Brancher la STeaMi à l'ordinateur via le câble USB. Si un des IDE proposés est déjà configuré, vous devriez voir le shell MicroPython (`>>>`).

### Tester le capteur dans le REPL

```python
>>> from machine import I2C
>>> from wsen_pads import WSEN_PADS
>>> pads = WSEN_PADS(I2C(1))
>>> pads.temperature()
24.3
>>> pads.pressure_hpa()
1013.2
```

Souffler sur la carte et observer la valeur de température monter légèrement.

---

## Étape 2 : Programmer

Le programme lit la température toutes les 500 ms et met à jour l'écran : la jauge en arc de cercle représente la température sur une plage de 0 à 50 °C, la valeur numérique s'affiche en grand au centre, et un commentaire de confort apparaît en bas.

### Composants utilisés

| Composant       | Nom dans le programme | Rôle                                      |
| --------------- | --------------------- | ----------------------------------------- |
| Capteur WSEN-PADS | objet `pads`        | Lecture de la température et de la pression |
| Écran OLED      | objet `screen`        | Affichage de la jauge et de la valeur     |

### Programme

```python
# Testée avec firmware STeaMi 0.23.1
#
# Thermomètre : affiche la température du WSEN-PADS sur l'écran OLED
# avec une jauge en arc de cercle et un indicateur de confort thermique.

import ssd1327
import time
from machine import I2C, SPI, Pin
from wsen_pads import WSEN_PADS
from steami_screen import Screen, SSD1327Display, LIGHT, GRAY

# --- Écran ---
spi = SPI(1)
dc  = Pin("DATA_COMMAND_DISPLAY")
res = Pin("RST_DISPLAY")
cs  = Pin("CS_DISPLAY")
raw_display = ssd1327.WS_OLED_128X128_SPI(spi, dc, res, cs)
display = SSD1327Display(raw_display)
screen  = Screen(display)

# --- Capteur ---
i2c = I2C(1)
pads = WSEN_PADS(i2c)

# --- Plage d'affichage ---
TEMP_MIN = 0    # °C
TEMP_MAX = 50   # °C


def confort(temp):
    """Retourne un commentaire selon la température."""
    if temp < 16:
        return "Trop froid !"
    elif temp < 20:
        return "Un peu frais"
    elif temp <= 26:
        return "Confortable"
    elif temp <= 30:
        return "Un peu chaud"
    else:
        return "Trop chaud !"


def afficher_temperature(temp):
    """Met à jour l'écran avec la température et la jauge."""
    screen.clear()
    screen.gauge(temp, min_val=TEMP_MIN, max_val=TEMP_MAX, color=LIGHT)
    screen.value(round(temp, 1), label="Temperature", unit="C")
    screen.subtitle(confort(temp))
    screen.show()


# --- Programme principal ---
try:
    while True:
        temp = pads.temperature()
        afficher_temperature(temp)
        time.sleep_ms(500)
except KeyboardInterrupt:
    pass
finally:
    screen.clear()
    screen.show()
    pads.power_off()
```
<img src="/img/ressources/inovmicro-exao/i11-thermometre-lisible/thermometre.jpeg" alt="Thermomètre très lisible sur la STeaMi" style={{width: '550px', height: '550px', objectFit: 'contain', flexShrink: 0}} />

### Comment cela fonctionne ?

Le programme s'articule autour de deux fonctions :

- **`confort(temp)`** : une suite de conditions `if / elif / else` qui associe une plage de température à un commentaire lisible. C'est un exemple classique de **table de correspondance** codée avec des conditions imbriquées.
- **`afficher_temperature(temp)`** : appelle trois widgets `steami_screen` dans l'ordre. `screen.gauge()` doit être appelé **avant** `screen.value()` car la jauge dessine un arc près du bord de l'écran — le texte se superpose par-dessus proprement.
Le bloc `try / finally` coupe l'écran et met le capteur en veille proprement à `Ctrl+C` grâce à `pads.power_off()`.

:::info[Ordre des widgets]
Dans `steami_screen`, `gauge()` remplit l'arc en arrière-plan. Si on l'appelle après `value()`, l'arc se dessinerait par-dessus la valeur. L'ordre `gauge → value → subtitle → show` garantit que le texte est toujours au premier plan.
:::

### Exécution

- **Test rapide** : lancer le programme depuis votre IDE (bouton **Run** ▶ ou `F5`). L'écran affiche la température en temps réel ; souffler sur la carte pour voir la valeur monter.
- **Programme persistant** : enregistrer le fichier sous le nom **`main.py`** sur la carte. Il sera relancé à chaque démarrage.
---

## Étape 3 : Améliorer

Trois pistes pour aller plus loin.

### 1. Calibrer le capteur

Mesurer l'écart entre la valeur affichée et un thermomètre de référence, puis appliquer une correction :

```python
# Si le capteur affiche 29.5 °C alors que la température réelle est 24.0 °C
CORRECTION = 24.0 - 29.5   # = -5.5 °C
pads.set_temp_offset(CORRECTION)

# Désormais pads.temperature() renvoie directement la valeur corrigée
```

Pour une calibration deux points plus précise, utiliser `pads.calibrate_temperature(ref_low, measured_low, ref_high, measured_high)` avec deux relevés à des températures différentes.

### 2. Afficher aussi la pression

Le WSEN-PADS mesure également la pression barométrique. On peut alterner température et pression toutes les 2 secondes :

```python
while True:
    temp = pads.temperature()
    afficher_temperature(temp)
    time.sleep_ms(2000)

    pres = pads.pressure_hpa()
    screen.clear()
    screen.gauge(int(pres), min_val=980, max_val=1040, color=LIGHT)
    screen.value(round(pres, 0), label="Pression", unit="hPa")
    screen.show()
    time.sleep_ms(2000)
```

### 3. Historique graphique

Stocker les N dernières mesures dans une liste et les afficher sous forme de graphe avec `screen.graph()` :

```python
HISTORIQUE_MAX = 30
historique = []

while True:
    temp = pads.temperature()
    historique.append(temp)
    if len(historique) > HISTORIQUE_MAX:
        historique.pop(0)   # supprimer la mesure la plus ancienne

    screen.clear()
    screen.title("Temperature")
    screen.graph(historique, min_val=TEMP_MIN, max_val=TEMP_MAX)
    screen.show()
    time.sleep_ms(500)
```

---

## Aller plus loin

- [Capteur de température (Wikipédia)](https://fr.wikipedia.org/wiki/Capteur_de_temp%C3%A9rature) : principes physiques et types de capteurs.
- [Wiki STeaMi : Capteurs intégrés](https://wiki.steami.cc/docs/hardware/main-components/sensors) : description de l'ISM330DL et des autres capteurs de la carte.
---

_Cette fiche fait partie du projet [I-Novmicro #2 : Action EXAO](/projets/inovmicro-exao). Adaptée de la fiche Let's STEAM [`r1as11-thermometre`](/ressources/lets-steam/r1as11-thermometre) sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._


---
id: i11-thermometre-lisible
title: Afficher un thermomètre très lisible
sidebar_label: "Afficher un thermomètre très lisible"
sidebar_position: 11
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>
<div style={{flex: 1}}>
# Afficher un thermomètre très lisible

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--info">SteaMi</span>
  <span className="badge badge--warning">MicroPython</span>
</div>

| Projet        | Durée  | Difficulté    | Âge       | Logiciel STeaMi testé |
| ------------- | ------ | ------------- | --------- | --------------------- |
| I-Novmicro #2 | 20 min | Intermédiaire | 11-99 ans | 0.23.1                |

## Matériel et Montage

- 1 carte STeaMi
- 1 câble USB de données (micro-USB pour la STeaMi V1, USB-C pour la STeaMi V2)
- 1 ordinateur sous Windows, macOS ou Linux
- Un IDE compatible MicroPython : Thonny (voir la fiche [Prendre en main MicroPython avec Thonny](/ressources/inovmicro-exao/t03-decouverte-thonny)) ou tout autre éditeur compatible (Mu, VS Code, Vittascience, `mpremote`...).

</div>
<img src="/img/ressources/inovmicro-exao/i11-thermometre-lisible/icone.png" alt="Thermomètre très lisible sur la STeaMi" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />
</div>

---

## De quoi parle-t-on ?

Quand tu prends ta température avec un thermomètre médical, quand un frigo s'éteint parce qu'il a atteint la bonne fraîcheur, quand une station météo annonce 25 °C dehors, ou quand ton four affiche « préchauffage terminé » : à chaque fois, **un capteur de température** a mesuré le chaud ou le froid et a transformé cette grandeur physique en un nombre.

La [**température**](https://fr.wikipedia.org/wiki/Temp%C3%A9rature) est une grandeur qui mesure l'**énergie thermique** d'un objet. Plus les molécules d'un objet s'agitent vite, plus il est chaud. À 0 °C, l'eau gèle. À 100 °C, elle bout. Le corps humain tient à environ 37 °C. La pièce où tu es se situe probablement entre 18 et 25 °C.

La STeaMi intègre un petit capteur **WSEN-PADS** (de Würth Elektronik) qui mesure deux grandeurs en même temps : la **température** et la **pression atmosphérique**. Dans cette activité, on va lire la température et l'afficher sur l'écran OLED de façon **vraiment lisible** : avec la valeur en grand, une jauge en arc de cercle (comme un thermomètre rond classique), et un commentaire de confort thermique en bas. Pas besoin d'écran LCD externe ni de câblage.

:::info[Capteur intégré, rien à câbler]
Le WSEN-PADS est déjà soudé à l'intérieur de la STeaMi. On n'a rien à brancher : il suffit de l'appeler depuis le code.
:::

---

## Objectifs d'apprentissage

À la fin de cette activité, l'élève sera capable de :

- **Expliquer** ce qu'est la température en tant que grandeur physique, et citer quelques objets du quotidien qui contiennent un capteur de température (thermomètre médical, frigo, four, smartphone, station météo...).
- **Lire** la température fournie par un capteur intégré et la **comparer** à une référence (un thermomètre du commerce) pour évaluer la précision du capteur.
- **Concevoir** un affichage qui rend une valeur numérique **immédiatement lisible** : valeur en grand, jauge proportionnelle, commentaire contextuel.
- **Calibrer** un capteur : comprendre pourquoi une mesure brute peut être biaisée (auto-échauffement de l'électronique) et comment corriger cet écart.
- **Imaginer** d'autres applications : station météo, alarme d'aquarium, sonde de cuisson, contrôle de serre...
---

## Étape 1 : Construire

« Construire » se résume ici à comprendre comment accéder aux composants de la carte : tout est déjà soudé.

### Comment le capteur mesure la température

À l'intérieur du WSEN-PADS, une minuscule **résistance** (une pièce électronique) change de valeur selon la température : plus il fait chaud, plus elle laisse passer le courant facilement. Le capteur mesure ce changement, l'envoie au microcontrôleur, et celui-ci le convertit en degrés Celsius. C'est ce qu'on appelle un capteur **MEMS** (microsystème électromécanique), la même famille de capteurs que l'accéléromètre vu dans la fiche [i09](/ressources/inovmicro-exao/i09-inclinaison-accelerometre).

Le capteur mesure deux grandeurs en même temps :

- **Température** en degrés Celsius (°C), avec une précision d'environ 0,2 °C
- **Pression atmosphérique** en hectopascals (hPa), entre 980 (basse pression : météo pluvieuse) et 1040 (haute pression : ciel dégagé)

:::info[Température mesurée vs température réelle]

Le capteur mesure la température **au niveau de sa puce**, qui est posée sur le circuit imprimé de la STeaMi. Or l'électronique autour génère un peu de chaleur quand la carte fonctionne (on parle d'**auto-échauffement**). Conséquence : le capteur peut indiquer 2 à 5 °C de plus que la température réelle de la pièce.

Pas grave : on apprendra à **calibrer** le capteur dans l'étape Améliorer pour corriger cet écart. C'est exactement ce que font les ingénieurs en industrie : on compare la mesure du capteur à un thermomètre de référence et on ajuste.

:::

```python
from machine import I2C
from wsen_pads import WSEN_PADS

i2c = I2C(1)
capteur = WSEN_PADS(i2c)

temperature = capteur.temperature()      # température en °C (float)
pression = capteur.pressure_hpa()        # pression en hPa (float)
print("{:.1f} °C  {:.0f} hPa".format(temperature, pression))
```

### Les widgets de `steami_screen`

Pour rendre l'affichage expressif, on va combiner trois widgets de `steami_screen` :

- `ecran.gauge(val, min_val, max_val)` : un arc de cercle qui se remplit selon la valeur
- `ecran.value(val, unit="C", label="Temperature")` : la valeur numérique en grand au centre
- `ecran.subtitle("...")` : un texte de commentaire en bas

:::tip[Pourquoi pas de °C ni d'accent sur l'écran ?]
La petite police de l'écran OLED n'embarque pas tous les caractères accentués ni le symbole `°`. On utilise donc des chaînes en ASCII pur (`"C"` au lieu de `"°C"`, `"Temperature"` au lieu de `"Température"`) pour garantir un affichage propre. Dans le corps du texte de la fiche, on garde évidemment les accents.
:::

:::info[Première fois avec l'écran OLED ?]

Cette fiche utilise l'écran intégré à la STeaMi pour afficher les mesures en temps réel. Si tu n'as encore jamais piloté l'écran, la fiche [Afficher du texte sur l'écran OLED](/ressources/inovmicro-exao/i10-texte-oled) explique en détail le fonctionnement de la librairie `steami_screen`. Tu peux la consulter en parallèle si certaines lignes du programme te paraissent obscures.

:::

L'initialisation de l'écran est toujours la même séquence :

```python
import ssd1327
from machine import SPI, Pin
from steami_screen import Screen, SSD1327Display, LIGHT

spi = SPI(1)
broche_dc = Pin("DATA_COMMAND_DISPLAY")
broche_reset = Pin("RST_DISPLAY")
broche_cs = Pin("CS_DISPLAY")
oled_brut = ssd1327.WS_OLED_128X128_SPI(spi, broche_dc, broche_reset, broche_cs)
pilote_oled = SSD1327Display(oled_brut)
ecran = Screen(pilote_oled)
```

### Connecter la carte à l'ordinateur

Brancher la STeaMi à l'ordinateur via le câble USB. Si l'IDE est déjà configuré (voir la fiche [Prendre en main MicroPython avec Thonny](/ressources/inovmicro-exao/t03-decouverte-thonny) si vous démarrez), la console MicroPython doit afficher `>>>`. C'est **l'invite** (parfois appelée « prompt » en anglais) : un signe qui apparaît en début de ligne pour vous dire que la console est prête à recevoir une commande.

### Tester le capteur dans l'invite

```python
>>> from machine import I2C
>>> from wsen_pads import WSEN_PADS
>>> capteur = WSEN_PADS(I2C(1))
>>> capteur.temperature()
24.3
>>> capteur.pressure_hpa()
1013.2
```

Souffler sur la carte et observer la valeur de température monter légèrement.

---

## Étape 2 : Programmer

Le programme lit la température toutes les 500 ms et met à jour l'écran : la jauge en arc de cercle représente la température sur une plage de 0 à 50 °C, la valeur numérique s'affiche en grand au centre, et un commentaire de confort apparaît en bas.

### Composants utilisés

| Composant         | Nom dans le programme | Rôle                                        |
| ----------------- | --------------------- | ------------------------------------------- |
| Capteur WSEN-PADS | objet `capteur`       | Lecture de la température et de la pression |
| Écran OLED        | objet `ecran`         | Affichage de la jauge et de la valeur       |

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
from steami_screen import Screen, SSD1327Display, LIGHT

# --- Écran OLED ---
spi = SPI(1)
broche_dc = Pin("DATA_COMMAND_DISPLAY")
broche_reset = Pin("RST_DISPLAY")
broche_cs = Pin("CS_DISPLAY")
oled_brut = ssd1327.WS_OLED_128X128_SPI(spi, broche_dc, broche_reset, broche_cs)
pilote_oled = SSD1327Display(oled_brut)
ecran = Screen(pilote_oled)

# --- Capteur de température et pression ---
i2c = I2C(1)
capteur = WSEN_PADS(i2c)

# --- Plage d'affichage de la jauge ---
TEMP_MIN = 0    # °C
TEMP_MAX = 50   # °C


def confort(temperature):
    """Retourne un commentaire selon la température."""
    if temperature < 16:
        return "Trop froid !"
    elif temperature < 20:
        return "Un peu frais"
    elif temperature <= 26:
        return "Confortable"
    elif temperature <= 30:
        return "Un peu chaud"
    else:
        return "Trop chaud !"


def afficher_temperature(temperature):
    """Met à jour l'écran avec la température et la jauge."""
    ecran.clear()
    ecran.gauge(temperature, min_val=TEMP_MIN, max_val=TEMP_MAX, color=LIGHT)
    ecran.value(round(temperature, 1), label="Temperature", unit="C")
    ecran.subtitle(confort(temperature))
    ecran.show()


# --- Programme principal ---
try:
    while True:
        temperature = capteur.temperature()
        afficher_temperature(temperature)
        time.sleep_ms(500)
except KeyboardInterrupt:
    pass
finally:
    ecran.clear()
    ecran.show()
    capteur.power_off()
```
<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/i11-thermometre-lisible/thermometre.jpeg"
    alt="Thermomètre très lisible sur la STeaMi"
    style={{maxWidth: '450px', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    La STeaMi affichant la température et un commentaire de confort.
  </figcaption>
</figure>

### Comment cela fonctionne ?

Le programme se lit en trois temps :

- **Préparation** : on « réveille » les deux composants utilisés (l'écran OLED et le capteur), et on définit la plage de la jauge (`TEMP_MIN` et `TEMP_MAX`).
- **Fonctions auxiliaires** : `confort()` traduit un nombre en commentaire humain (« Confortable », « Trop chaud »...), et `afficher_temperature()` rassemble les trois opérations d'affichage. Définir ces fonctions une bonne fois pour toutes rend la boucle principale très courte et lisible.
- **Boucle principale** (`while True`) : à chaque tour (2 fois par seconde), on lit le capteur, on rafraîchit l'écran, et on attend 500 ms. Le bloc `try / finally` garantit qu'on coupe proprement l'écran et le capteur quand on arrête le programme avec `Ctrl+C`, pour ne pas laisser l'écran allumé en permanence.

:::info[La fonction `confort()` : traduire un nombre en mot]

Cette fonction est un petit exemple **typique** de programmation utile : elle prend une donnée brute (un nombre) et la transforme en une **information utilisable** par un humain (un commentaire). Sans elle, l'écran afficherait juste un chiffre. Avec elle, l'élève qui lit l'écran sait tout de suite s'il fait trop chaud ou trop froid, sans avoir à se rappeler quelles sont les températures « normales ».

C'est exactement ce que font les applications de météo (« Conditions agréables », « Risque de gel »), les baromètres (« Beau temps », « Tempête »), les indicateurs de batterie (« Faible », « En charge »), ou les évaluations scolaires (« Très bien », « À retravailler »). Transformer une donnée chiffrée en mot, c'est rendre le numérique **lisible**.

:::

:::info[Ordre des widgets]
Dans `steami_screen`, `gauge()` remplit l'arc en arrière-plan. Si on l'appelle après `value()`, l'arc se dessinerait par-dessus la valeur. L'ordre `gauge`, puis `value`, puis `subtitle`, puis `show` garantit que le texte est toujours au premier plan.
:::

### Exécution

- **Test rapide** : lancer le programme depuis votre IDE (bouton **Run** ▶ ou `F5`). L'écran affiche la température en temps réel ; souffler sur la carte pour voir la valeur monter.
- **Programme persistant** : enregistrer le fichier sous le nom **`main.py`** sur la carte. Il sera relancé à chaque démarrage.

---

## Étape 3 : Améliorer

Trois pistes pour aller plus loin.

### 1. Calibrer le capteur

Le capteur a tendance à indiquer quelques degrés de trop à cause de l'auto-échauffement de l'électronique. Pour corriger, comparer son affichage à un **thermomètre de référence** (médical, météo, ou un autre capteur fiable) et appliquer une correction :

```python
# Si le capteur affiche 29.5 °C alors que la température réelle est 24.0 °C
CORRECTION = 24.0 - 29.5   # = -5.5 °C
capteur.set_temp_offset(CORRECTION)

# Désormais capteur.temperature() renvoie directement la valeur corrigée
```

Pour une calibration plus précise à deux points (à froid et à chaud), utiliser `capteur.calibrate_temperature(ref_basse, mesure_basse, ref_haute, mesure_haute)` avec deux relevés à des températures différentes (par exemple : un thermomètre dans un verre d'eau froide, puis dans une pièce chauffée).

### 2. Afficher aussi la pression

Le WSEN-PADS mesure également la pression atmosphérique. On peut alterner température et pression toutes les 2 secondes pour transformer la STeaMi en mini-station météo :

```python
while True:
    temperature = capteur.temperature()
    afficher_temperature(temperature)
    time.sleep_ms(2000)

    pression = capteur.pressure_hpa()
    ecran.clear()
    ecran.gauge(int(pression), min_val=980, max_val=1040, color=LIGHT)
    ecran.value(round(pression, 0), label="Pression", unit="hPa")
    ecran.show()
    time.sleep_ms(2000)
```

### 3. Historique graphique

Plutôt qu'afficher une seule valeur instantanée, stocker les dernières mesures dans une liste et les afficher sous forme de courbe avec `ecran.graph()`. La carte devient ainsi un **enregistreur de température** qui montre l'évolution dans le temps :

```python
HISTORIQUE_MAX = 30
historique = []

while True:
    temperature = capteur.temperature()
    historique.append(temperature)
    if len(historique) > HISTORIQUE_MAX:
        historique.pop(0)   # supprimer la mesure la plus ancienne

    ecran.clear()
    ecran.title("Temperature")
    ecran.graph(historique, min_val=TEMP_MIN, max_val=TEMP_MAX)
    ecran.show()
    time.sleep_ms(500)
```

---

## Aller plus loin

### Pour comprendre

- **[Capteur de température (Wikipédia)](https://fr.wikipedia.org/wiki/Capteur_de_temp%C3%A9rature)** : la grande famille des capteurs thermiques (thermistance, thermocouple, capteur infrarouge, MEMS) et leurs principes physiques très différents. Le WSEN-PADS appartient à la famille des capteurs MEMS, comme l'accéléromètre de la fiche [i09](/ressources/inovmicro-exao/i09-inclinaison-accelerometre).
- **[Pression atmosphérique (Wikipédia)](https://fr.wikipedia.org/wiki/Pression_atmosph%C3%A9rique)** : pourquoi la pression varie entre 980 et 1040 hPa, comment elle annonce le beau temps ou la pluie, et pourquoi un baromètre est un outil météorologique fondamental.
- **[Auto-échauffement d'un circuit (Wikipédia)](https://fr.wikipedia.org/wiki/Auto-%C3%A9chauffement)** : pourquoi un capteur posé sur une carte électronique mesure une température légèrement supérieure à la température ambiante. La calibration de l'Étape 3 corrige précisément cet effet.

### Pour s'inspirer

- **[Wiki STeaMi : Capteurs intégrés](https://wiki.steami.cc/docs/hardware/main-components/sensors)** : description complète du WSEN-PADS et des autres capteurs de la carte, avec datasheet officielle.
- **[Station météo connectée](https://learn.adafruit.com/wifi-weather-station-with-tft-display)** : un projet Adafruit qui combine température, pression, humidité et un affichage graphique. Le grand frère ambitieux de notre fiche, prêt à poser sur un rebord de fenêtre.
- **[Thermomètre d'aquarium / vivarium](https://www.instructables.com/Aquarium-Temperature-Monitor-Using-DS18B20/)** : application pratique où la température doit être surveillée en continu et déclencher une alerte si elle sort d'une plage. Notre code de confort se transforme facilement en alarme.
- **[Sonde de température de cuisson](https://www.instructables.com/Smart-BBQ-Wireless-Temperature-Monitoring/)** : la même physique appliquée à la cuisine, avec une plage 0-300 °C et un buzzer qui sonne quand le steak est à point.

---

_Cette fiche fait partie du projet [I-Novmicro #2 : Action EXAO](/projets/inovmicro-exao). Adaptée du projet [Let's STEAM](/projets/lets-steam) (fiche [`r1as11-thermometre`](/ressources/lets-steam/r1as11-thermometre)) sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._


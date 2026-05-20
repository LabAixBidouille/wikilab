---
id: i09-inclinaison-accelerometre
title: Inclinaison avec accéléromètre
sidebar_label: "Inclinaison avec accéléromètre"
sidebar_position: 9
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>
<div style={{flex: 1}}>
# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><defs><marker id="i09-arr" markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto-start-reverse"><path d="M 0 0 L 6 3 L 0 6" fill="none" stroke="#8a6e18" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></marker></defs><rect x="1" y="1" width="22" height="22" rx="3" fill="#8a6e18" opacity="0.1"/><circle cx="12" cy="12" r="2.2" fill="#8a6e18" opacity="0.25"/><circle cx="12" cy="12" r="1" fill="#8a6e18"/><line x1="12" y1="11" x2="12" y2="4" stroke="#8a6e18" strokeWidth="1.5" strokeLinecap="round" markerEnd="url(#i09-arr)"/><line x1="13" y1="12.6" x2="19" y2="16" stroke="#8a6e18" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" markerEnd="url(#i09-arr)"/><line x1="11" y1="12.6" x2="5" y2="16" stroke="#8a6e18" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" markerEnd="url(#i09-arr)"/></svg> Inclinaison avec accéléromètre

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--info">SteaMi</span>
  <span className="badge badge--warning">MicroPython</span>
</div>

| Projet        | Durée  | Difficulté | Âge       | Logiciel STeaMi testé |
| ------------- | ------ | ---------- | --------- | --------------------- |
| I-Novmicro #2 | 30 min | Avancé     | 11-99 ans | 0.23.1                |

## Matériel et Montage

- 1 carte STeaMi
- 1 câble USB de données (micro-USB pour la STeaMi V1, USB-C pour la STeaMi V2)
- 1 ordinateur sous Windows, macOS ou Linux
- Un IDE compatible MicroPython : Thonny (voir la fiche [Thonny : Prise en main de MicroPython](/ressources/inovmicro-exao/t03-decouverte-thonny)) ou tout autre éditeur compatible (Mu, VS Code, Vittascience, `mpremote`...).

</div>
<img src="/img/ressources/inovmicro-exao/i09-inclinaison-accelerometre/icone.png" alt="Inclinaison avec accéléromètre sur la STeaMi" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />
</div>

---

## De quoi parle-t-on ?

Les [accéléromètres](https://fr.wikipedia.org/wiki/Acc%C3%A9l%C3%A9rom%C3%A8tre) sont de petits capteurs qui mesurent la force d'accélération appliquée à un objet, y compris la gravité terrestre. En lisant cette force sur les trois axes X, Y et Z, on peut déterminer l'orientation d'un objet, détecter un choc, ou encore reconnaître une chute libre.

La STeaMi intègre un accéléromètre 6 axes **ISM330DL** directement sur la carte. Dans cette activité, on va écrire un **capteur d'inclinaison** qui affiche l'orientation de la carte sur l'écran OLED et déclenche une alarme sonore si l'accélération dépasse un seuil : le genre de dispositif utile pour détecter la triche sur un vieux flipper classique.

:::info[Accéléromètre intégré]
L'ISM330DL est déjà soudé sur la STeaMi : pas besoin de connecter quoi que ce soit pour l'utiliser. On y accède directement via le bus I2C interne de la carte.
:::

---

## Objectifs d'apprentissage

- Comprendre ce qu'est un **accéléromètre**, comment il « ressent » la gravité, et où on en croise dans la vie quotidienne (téléphones, manettes de jeu, podomètres, sacs gonflables des voitures)
- Lire l'**accélération** sur les axes X, Y et Z et **interpréter** les valeurs pour déduire l'orientation de la carte
- Reconnaître un événement physique (**choc**, **chute libre**) à partir d'un capteur, et comprendre pourquoi on raisonne sur la **norme** d'un vecteur plutôt que sur un axe isolé
- Initialiser un capteur I2C en MicroPython avec le module `ism330dl` et afficher des mesures temps réel sur l'écran OLED via `steami_screen`

---

## Étape 1 : Construire

« Construire » se résume ici à comprendre comment accéder aux composants de la carte : tout est déjà soudé.

### L'accéléromètre ISM330DL

L'ISM330DL est un **IMU** (Inertial Measurement Unit) 6 axes : il combine un accéléromètre 3 axes et un gyroscope 3 axes dans un seul boîtier. Dans cette fiche, on utilise uniquement l'accéléromètre.

L'accélération est mesurée en **G** (force gravitationnelle). Sur Terre, la gravité exerce 1 G sur tout objet au repos. Quand la carte est posée à plat sur une table, l'axe Z mesure environ -1 G ; quand elle est tenue verticalement, c'est l'axe X ou Y qui reçoit ce 1 G. C'est cette répartition de la gravité entre les axes qui permet de déduire l'orientation.

```python
from machine import I2C
from ism330dl import ISM330DL

i2c = I2C(1)
imu = ISM330DL(i2c)

ax, ay, az = imu.acceleration_g()   # valeurs en G (float)
print(ax, ay, az)
```

Le module `ism330dl` expose également une méthode `orientation()` qui analyse les trois axes et renvoie directement une chaîne décrivant l'orientation :

| Valeur retournée  | Signification                        |
| ----------------- | ------------------------------------ |
| `SCREEN_UP`       | Écran vers le haut (à plat)          |
| `SCREEN_DOWN`     | Écran vers le bas (retourné)         |
| `TOP_EDGE_DOWN`   | Bord supérieur vers le bas           |
| `BOTTOM_EDGE_DOWN`| Bord inférieur vers le bas           |
| `RIGHT_EDGE_DOWN` | Bord droit vers le bas               |
| `LEFT_EDGE_DOWN`  | Bord gauche vers le bas              |
| `MOVING`          | En mouvement (aucun axe dominant)    |

### La valeur absolue

Pour détecter une inclinaison ou un choc, la direction de l'accélération n'a souvent pas d'importance : seule l'intensité compte. On utilise `abs()` pour ignorer le signe :

```python
import math

ax, ay, az = imu.acceleration_g()
# abs() donne la magnitude sans tenir compte du signe
if abs(ax) > 0.5:
    print("Inclinaison détectée sur X !")
```

### Connecter la carte à l'ordinateur

Brancher la STeaMi à l'ordinateur via le câble USB. Si l'IDE est déjà configuré (voir la fiche [Thonny : Prise en main de MicroPython](/ressources/inovmicro-exao/t03-decouverte-thonny) si vous démarrez), la console MicroPython doit afficher `>>>`. C'est **l'invite** (parfois appelée « prompt » en anglais) : un signe qui apparaît en début de ligne pour vous dire que la console est prête à recevoir une commande.

### Tester le capteur dans l'invite

Avant d'écrire le programme principal, on peut vérifier que l'accéléromètre répond :

```python
>>> from machine import I2C
>>> from ism330dl import ISM330DL
>>> imu = ISM330DL(I2C(1))
>>> imu.acceleration_g()
(-0.01, 0.02, -0.99)
>>> imu.orientation()
'SCREEN_UP'
```

La carte est à plat, écran vers le haut : az ≈ -1 G et `orientation()` renvoie `SCREEN_UP`. Incliner la carte dans différentes directions et observer les valeurs changer.

---

## Étape 2 : Programmer

Le programme affiche en permanence l'accélération sur les trois axes et l'orientation sur l'écran OLED. Si l'accélération totale dépasse un seuil configurable (choc ou secousse), le buzzer émet un bip d'alerte.

### Composants utilisés

| Composant       | Nom dans le programme | Rôle                                              |
| --------------- | --------------------- | ------------------------------------------------- |
| Accéléromètre   | objet `imu`           | Lecture de l'accélération et de l'orientation     |
| Écran OLED      | objet `screen`        | Affichage des valeurs en temps réel               |
| Buzzer          | `SPEAKER`             | Alerte sonore en cas de choc détecté              |

### Programme

```python
# Testée avec firmware STeaMi 0.23.1
#
# Capteur d'inclinaison : affiche l'accélération (X, Y, Z) et l'orientation
# sur l'écran OLED. Le buzzer sonne si l'accélération totale dépasse le seuil.

import ssd1327
import math
import time
from machine import I2C, SPI, Pin
from ism330dl import ISM330DL
from steami_screen import Screen, SSD1327Display, WHITE, GRAY, LIGHT

# --- Écran ---
spi = SPI(1)
dc  = Pin("DATA_COMMAND_DISPLAY")
res = Pin("RST_DISPLAY")
cs  = Pin("CS_DISPLAY")
raw_display = ssd1327.WS_OLED_128X128_SPI(spi, dc, res, cs)
display = SSD1327Display(raw_display)
screen  = Screen(display)

# --- Accéléromètre ---
i2c = I2C(1)
imu = ISM330DL(i2c)

# --- Buzzer ---
SPEAKER = Pin("SPEAKER", Pin.OUT_PP)

# --- Seuil de détection de choc (en G) ---
SEUIL_CHOC = 1.5   # au-delà de 1.5 G sur l'accélération totale


def tone(pin, freq, duration_ms):
    """Fait sonner le buzzer à la fréquence demandée pendant duration_ms."""
    if freq == 0:
        time.sleep_ms(duration_ms)
        return
    period_us = int(1_000_000 / freq)
    half_period = period_us // 2
    end_time = time.ticks_add(time.ticks_us(), duration_ms * 1000)
    while time.ticks_diff(end_time, time.ticks_us()) > 0:
        pin.on()
        time.sleep_us(half_period)
        pin.off()
        time.sleep_us(half_period)


def bip_alerte():
    """Bip court pour signaler un choc."""
    tone(SPEAKER, 880, 80)


def afficher_capteur(ax, ay, az, orientation):
    """Met à jour l'écran avec les valeurs d'accélération et l'orientation."""
    screen.clear()
    screen.title(orientation)
    screen.text("X:{:+.2f}g".format(ax), at="NW")
    screen.text("Y:{:+.2f}g".format(ay), at="W")
    screen.text("Z:{:+.2f}g".format(az), at="SW")
    screen.show()


# --- Programme principal ---
print("Capteur d'inclinaison prêt.")

while True:
    ax, ay, az = imu.acceleration_g()
    orientation = imu.orientation()

    # Magnitude totale de l'accélération (norme du vecteur)
    magnitude = math.sqrt(ax * ax + ay * ay + az * az)

    afficher_capteur(ax, ay, az, orientation)

    if magnitude > SEUIL_CHOC:
        bip_alerte()

    time.sleep_ms(200)
```

### Comment cela fonctionne ?

Le programme s'organise en trois parties :

- **Initialisation** : on instancie `ISM330DL` sur le bus I2C interne (`I2C(1)`). Le constructeur configure automatiquement l'accéléromètre à 104 Hz et ±2 G de pleine échelle, des réglages adaptés à la détection d'inclinaison.
- **`afficher_capteur()`** : utilise `screen.title()` pour afficher l'orientation en haut, et `screen.text(..., at="...")` avec les points cardinaux pour positionner les trois valeurs X, Y, Z sur le côté gauche de l'écran.
- **Boucle principale** : lit les trois axes, calcule la **norme** du vecteur accélération (`sqrt(ax² + ay² + az²)`). Au repos, cette norme vaut toujours environ 1 G (la gravité). Si elle dépasse `SEUIL_CHOC`, c'est qu'un choc ou une secousse s'est produit, et le buzzer sonne.

:::info[La norme du vecteur accélération]
Quand la carte est immobile, la gravité (~1 G) se répartit entre les axes selon l'inclinaison, mais la norme reste 1 G. Un choc ajoute une accélération supplémentaire qui fait monter la norme au-delà de 1 G. C'est pour ça qu'on compare la norme à `SEUIL_CHOC` plutôt qu'à un axe individuel : cette méthode détecte les chocs quelle que soit l'orientation de la carte.
:::

### Exécution

- **Test rapide** : lancer le programme depuis votre IDE (bouton **Run** ▶ ou `F5`). L'écran affiche les valeurs en temps réel ; donner un petit coup sur la table pour déclencher le buzzer.
- **Programme persistant** : enregistrer le fichier sous le nom **`main.py`** sur la carte. Il sera relancé à chaque démarrage.

---

## Étape 3 : Améliorer

Trois pistes pour aller plus loin.

### 1. Calibrer le seuil de choc

Le seuil `SEUIL_CHOC = 1.5` est arbitraire. Pour le calibrer, afficher la magnitude dans le REPL et noter les valeurs lors de différentes actions (pose douce, tape légère, secousse franche) :

```python
while True:
    ax, ay, az = imu.acceleration_g()
    magnitude = math.sqrt(ax * ax + ay * ay + az * az)
    print("{:.3f} G".format(magnitude))
    time.sleep_ms(100)
```

Choisir ensuite `SEUIL_CHOC` juste au-dessus du bruit de fond (environ 1.05 G) et en-dessous des actions que l'on veut détecter.

### 2. Détecter la chute libre

En chute libre, la gravité ne s'applique plus : les trois axes tendent vers 0 G et la norme devient très faible. On peut détecter cette situation avec un seuil bas :

```python
SEUIL_CHUTE_LIBRE = 0.2   # en G

while True:
    ax, ay, az = imu.acceleration_g()
    magnitude = math.sqrt(ax * ax + ay * ay + az * az)

    if magnitude < SEUIL_CHUTE_LIBRE:
        screen.clear()
        screen.value("CHUTE !", label="Alerte")
        screen.show()
        bip_alerte()

    time.sleep_ms(50)   # scruter plus fréquemment pour ne pas rater l'événement
```

### 3. Afficher une jauge d'inclinaison

Plutôt que des chiffres bruts, on peut représenter l'inclinaison visuellement avec `screen.bar()`. Par exemple, mapper l'axe X (-1 G à +1 G) sur une barre de progression (0 à 100) :

```python
def axe_vers_pct(valeur_g):
    """Convertit une valeur en G (-1 à +1) en pourcentage (0 à 100)."""
    clamp = max(-1.0, min(1.0, valeur_g))
    return int((clamp + 1.0) * 50)   # -1 G : 0 %, 0 G : 50 %, +1 G : 100 %

while True:
    ax, ay, az = imu.acceleration_g()
    pct_x = axe_vers_pct(ax)

    screen.clear()
    screen.title("Inclinaison X")
    screen.value("{:+.2f}g".format(ax))
    screen.bar(pct_x, max_val=100)
    screen.show()

    time.sleep_ms(100)
```

---

## Aller plus loin

### Pour comprendre

- **[Accéléromètre (Wikipédia)](https://fr.wikipedia.org/wiki/Acc%C3%A9l%C3%A9rom%C3%A8tre)** : le principe physique des microcapteurs MEMS (une masse minuscule suspendue sur ressorts gravée dans le silicium), et pourquoi ils sont devenus omniprésents : téléphones, manettes, voitures, drones, montres.
- **[Système microélectromécanique (Wikipédia)](https://fr.wikipedia.org/wiki/Microsyst%C3%A8me_%C3%A9lectrom%C3%A9canique)** : la famille de capteurs miniaturisés à laquelle appartient l'ISM330DL. Comprendre comment on fabrique des pièces mécaniques mobiles de quelques microns directement sur une puce de silicium.
- **[Norme d'un vecteur (Wikipédia)](https://fr.wikipedia.org/wiki/Norme_(math%C3%A9matiques))** : la quantité `sqrt(x² + y² + z²)` qu'on calcule dans le code est la **norme euclidienne** du vecteur accélération, une notion centrale en physique et en mathématiques (longueur d'un trajet, distance entre deux points).

### Pour s'inspirer

- **[Reflex tester (Hackster)](https://www.hackster.io/RVLAD/free-fall-detection-using-3-axis-accelerometer-06383e)** : un détecteur de chute libre fait maison qui mesure le temps de vol d'un objet pour calculer la hauteur de chute. La physique de Newton réinventée avec un microcontrôleur à 5 €.
- **[Wii Remote](https://fr.wikipedia.org/wiki/Wii_Remote)** : la manette qui a popularisé l'accéléromètre auprès du grand public en 2006. La même puce que sur la STeaMi (en plus simple) a transformé la façon dont on joue aux jeux vidéo.
- **[Boîte à musique gestuelle](https://learn.adafruit.com/circuit-playground-musical-gestures/overview)** : un projet Adafruit qui joue une note différente selon la façon dont on incline la carte. Cousin direct de notre fiche, avec un angle ludique et musical.

---

_Cette fiche fait partie du projet [I-Novmicro #2 : Action EXAO](/projets/inovmicro-exao). Adaptée du projet [Let's STEAM](/projets/lets-steam) (fiche [`r1as09-accelerometre`](/ressources/lets-steam/r1as09-accelerometre)) sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._


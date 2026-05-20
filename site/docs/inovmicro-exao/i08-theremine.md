---
id: i08-theremine
title: Fabriquer un thérémine
sidebar_label: "Fabriquer un thérémine"
sidebar_position: 8
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>
<div style={{flex: 1}}>
# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="1" y="1" width="22" height="22" rx="3" fill="#140e4e" opacity="0.1"/><rect x="10" y="4" width="4" height="16" rx="2" fill="#140e4e" opacity="0.25"/><rect x="11" y="2" width="2" height="4" rx="1" fill="#140e4e" opacity="1.0"/><path d="M7 9c-2 0-3 1.5-3 3s1 3 3 3" stroke="#140e4e" strokeWidth="1.5" fill="none" opacity="0.25"/><path d="M4 7c-3 0-4 2.5-4 5s1 5 4 5" stroke="#140e4e" strokeWidth="1" fill="none" opacity="0.1"/><path d="M17 9c2 0 3 1.5 3 3s-1 3-3 3" stroke="#140e4e" strokeWidth="1.5" fill="none" opacity="0.25"/><path d="M20 7c3 0 4 2.5 4 5s-1 5-4 5" stroke="#140e4e" strokeWidth="1" fill="none" opacity="0.1"/></svg> Fabriquer un thérémine

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Musique</span>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--info">STeaMi</span>
  <span className="badge badge--warning">MicroPython</span>
</div>

| Projet        | Durée  | Difficulté | Âge       | Logiciel STeaMi testé |
| ------------- | ------ | ---------- | --------- | --------------------- |
| I-Novmicro #2 | 30 min | Avancé     | 11-99 ans | 0.23.1                |

## Matériel et Montage

- 1 carte STeaMi
- 1 câble USB de données (micro-USB pour la STeaMi V1, USB-C pour la STeaMi V2). Attention : un câble qui ne sert qu'à charger un téléphone ne fonctionnera pas.
- 1 ordinateur sous Windows, macOS ou Linux
- Un IDE compatible MicroPython : Thonny (voir la fiche [Thonny : Prise en main de MicroPython](/ressources/inovmicro-exao/t03-decouverte-thonny)) ou tout autre éditeur compatible (Mu, VS Code, Vittascience, `mpremote`...).

</div>
<img src="/img/ressources/inovmicro-exao/i08-theremine/icone.png" alt="Thérémine sur la STeaMi" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />
</div>

---

## De quoi parle-t-on ?

Un [thérémine](https://fr.wikipedia.org/wiki/Th%C3%A9r%C3%A9mine) est un instrument de musique électronique dont on joue sans le toucher. Inventé par Léon Thérémine en 1928, il utilise deux antennes pour détecter la position des mains : l'une contrôle la hauteur du son, l'autre le volume. La STeaMi intègre un **capteur de distance VL53L1X** à temps de vol qui joue parfaitement le rôle de cette antenne : approcher ou éloigner la main change la fréquence du son émis par le buzzer. Faisons de la musique sans rien toucher !

---

## Objectifs d'apprentissage

- Initialiser et lire un capteur de distance à temps de vol (VL53L1X) en MicroPython
- Utiliser un Timer PWM pour générer un son continu et non bloquant sur le buzzer
- Appliquer la fonction `map` pour convertir une plage de valeurs en une autre
- Comprendre le lien entre fréquence et hauteur d'une note musicale

---

## Étape 1 : Construire

« Construire » se résume ici à comprendre comment accéder aux composants de la carte : tout est déjà soudé.

### Le capteur de distance VL53L1X

Le VL53L1X est un capteur **ToF** (**T**ime **o**f **F**light, soit « temps de vol ») : il émet un faisceau laser infrarouge invisible et mesure le temps que met la lumière à revenir après réflexion sur un obstacle. Ce temps, multiplié par la vitesse de la lumière et divisé par deux, donne la distance en millimètres.

:::info[Temps de vol vs ultrasons]
Les capteurs à ultrasons utilisés dans d'autres projets mesurent aussi une distance par temps de vol, mais avec des ondes sonores (~340 m/s). Le VL53L1X utilise la lumière (~300 000 km/s), ce qui le rend beaucoup plus rapide et précis, avec une portée utile de 40 mm à 1300 mm environ.
:::

```python
from machine import I2C
from vl53l1x import VL53L1X

i2c = I2C(1)
tof = VL53L1X(i2c)

distance = tof.read()   # distance en millimètres
print(distance)
```

### Générer un son continu avec un Timer PWM

Pour le thérémine, le son doit être **continu** et changer de fréquence en douceur quand on bouge la main. La technique du bit-banging vue dans d'autres fiches bloquerait la boucle principale et rendrait le son saccadé. On utilise à la place un **Timer matériel en mode PWM** : c'est le microcontrôleur lui-même qui génère le signal en arrière-plan, pendant que le programme continue à tourner.

```python
from machine import Pin
from pyb import Timer

# Timer 1, canal 4 : broche SPEAKER
buzzer_tim = Timer(1, freq=440)
buzzer_ch = buzzer_tim.channel(4, Timer.PWM, pin=Pin("SPEAKER"))

buzzer_ch.pulse_width_percent(50)   # 50% : son actif
buzzer_ch.pulse_width_percent(0)    # 0%  : silence
```

:::info[PWM et rapport cyclique]
Un signal PWM alterne entre 0 V et 3,3 V à une fréquence donnée. Le **rapport cyclique** (ici `pulse_width_percent`) est le pourcentage du temps passé à 3,3 V. À 50 %, le signal est symétrique : c'est ce qui fait vibrer la membrane du buzzer à la fréquence du Timer et produit un son audible. À 0 %, le signal reste à 0 V : silence.
:::

### La fonction `map`

MicroPython n'a pas de `map()` numérique intégré. On l'écrit en une ligne, c'est une simple règle de trois :

```python
def map_val(val, in_min, in_max, out_min, out_max):
    """Convertit val de la plage [in_min, in_max] vers [out_min, out_max]."""
    return int((val - in_min) * (out_max - out_min) / (in_max - in_min) + out_min)
```

Exemple : convertir une distance de 50 à 500 mm en fréquence de 440 à 880 Hz :

```python
freq = map_val(distance, 50, 500, 440, 880)
```

:::info[Fréquences et octave]
Les fréquences 440 Hz et 880 Hz ne sont pas choisies au hasard : 880 = 2 × 440, ce qui correspond exactement à **une octave**. Entre ces deux valeurs se trouvent toutes les notes de la gamme : La, Si, Do, Ré, Mi, Fa, Sol.
:::

### Connecter la carte à l'ordinateur

Brancher la STeaMi à l'ordinateur via le câble USB. Si un des IDE proposés est déjà configuré (voir la fiche [Thonny : Prise en main de MicroPython](/ressources/inovmicro-exao/t03-decouverte-thonny) si vous démarrez), la console MicroPython doit afficher `>>>`. C'est **l'invite** (parfois appelée « prompt » en anglais) : un signe qui apparaît en début de ligne pour vous dire que la console est prête à recevoir une commande.

### Tester le capteur dans l'invite

```python
>>> from machine import I2C
>>> from vl53l1x import VL53L1X
>>> tof = VL53L1X(I2C(1))
>>> tof.read()
342
```

Agiter la main devant le capteur et observer les valeurs changer.

---

## Étape 2 : Programmer

Le programme mesure la distance en continu. Si la main est dans la plage de jeu (50 à 500 mm), il calcule la fréquence correspondante et l'applique au Timer ; hors de cette plage, le buzzer se tait.

### Composants utilisés

| Composant             | Nom dans le programme | Rôle                                          |
| --------------------- | --------------------- | --------------------------------------------- |
| Capteur de distance   | objet `tof`           | Mesure de la distance main-capteur en mm      |
| Buzzer (via Timer PWM)| `buzzer_tim`, `buzzer_ch` | Génération du son continu à fréquence variable |

### Programme

```python
# Testée avec firmware STeaMi 0.23.1
#
# Thérémine : la distance de la main au capteur VL53L1X
# détermine la fréquence du son émis par le buzzer.

from machine import I2C, Pin
from pyb import Timer
from vl53l1x import VL53L1X
import time

# --- Capteur de distance ---
i2c = I2C(1)
tof = VL53L1X(i2c)

# --- Buzzer via Timer PWM ---
buzzer_tim = Timer(1, freq=440)
buzzer_ch  = buzzer_tim.channel(4, Timer.PWM, pin=Pin("SPEAKER"))
buzzer_ch.pulse_width_percent(0)   # silence au démarrage

# --- Plages de jeu ---
DIST_MIN = 50    # mm : en dessous, silence (trop proche)
DIST_MAX = 500   # mm : au-dessus, silence (trop loin)
FREQ_MIN = 440   # Hz : LA_4
FREQ_MAX = 880   # Hz : LA_5 (une octave au-dessus)


def map_val(val, in_min, in_max, out_min, out_max):
    """Convertit val de la plage [in_min, in_max] vers [out_min, out_max]."""
    return int((val - in_min) * (out_max - out_min) / (in_max - in_min) + out_min)


print("Thérémine prêt. Bougez la main devant le capteur !")

try:
    while True:
        distance = tof.read()

        if DIST_MIN <= distance <= DIST_MAX:
            # Convertir la distance en fréquence
            freq = map_val(distance, DIST_MIN, DIST_MAX, FREQ_MIN, FREQ_MAX)
            buzzer_tim.freq(freq)
            buzzer_ch.pulse_width_percent(50)
        else:
            # Hors plage : silence
            buzzer_ch.pulse_width_percent(0)

        time.sleep_ms(30)

except KeyboardInterrupt:
    pass
finally:
    # Couper le son proprement à l'arrêt
    buzzer_ch.pulse_width_percent(0)
```

### Comment cela fonctionne ?

Le programme s'articule autour de trois éléments :

- **`VL53L1X`** : `tof.read()` déclenche une mesure et retourne la distance en millimètres. Le capteur gère lui-même la synchronisation, pas besoin d'attendre manuellement.
- **Timer PWM** : `buzzer_tim.freq(freq)` change la fréquence du Timer à la volée, sans interrompre le son ni bloquer la boucle. C'est ce qui donne l'effet glissando caractéristique du thérémine.
- **`map_val()`** : transforme la distance (50 à 500 mm) en fréquence (440 à 880 Hz) par une règle de trois. Plus la main est proche, plus la valeur de distance est petite, plus la fréquence est basse, et inversement.

Le bloc `try / finally` garantit que le buzzer est coupé proprement quand on arrête le programme avec `Ctrl+C`, pour ne pas laisser un son continu.

### Exécution

- **Test rapide** : lancer le programme depuis votre IDE (bouton **Run** ▶ ou `F5`). Approcher et éloigner la main devant le capteur pour jouer.
- **Programme persistant** : enregistrer le fichier sous le nom **`main.py`** sur la carte. Il sera relancé à chaque démarrage.

---

## Étape 3 : Améliorer

Trois pistes pour aller plus loin.

### 1. Étendre la plage musicale

Modifier `FREQ_MIN` et `FREQ_MAX` pour couvrir plusieurs octaves. En doublant la fréquence à chaque octave, on peut atteindre trois octaves avec 440 Hz à 3520 Hz. Attention : le buzzer piézo de la STeaMi a une réponse en fréquence limitée, les extrêmes peuvent sonner moins fort.

```python
FREQ_MIN = 220    # Hz : LA_3, une octave plus bas
FREQ_MAX = 1760   # Hz : LA_6, deux octaves plus haut
```

### 2. Quantiser les notes

Le thérémine classique joue en glissando continu. On peut au contraire **quantiser** la fréquence pour ne jouer que les notes de la gamme de La :

```python
# Gamme de La majeur en Hz (La, Si, Do#, Ré, Mi, Fa#, Sol#, La)
GAMME = [440, 494, 554, 587, 659, 740, 831, 880]

def quantiser(freq, gamme):
    """Retourne la note de la gamme la plus proche de freq."""
    return min(gamme, key=lambda note: abs(note - freq))

# Dans la boucle :
freq_brute = map_val(distance, DIST_MIN, DIST_MAX, GAMME[0], GAMME[-1])
freq = quantiser(freq_brute, GAMME)
buzzer_tim.freq(freq)
```

### 3. Afficher la distance sur l'écran

Ajouter l'écran OLED pour visualiser la distance et la fréquence en temps réel :

```python
import ssd1327
from machine import SPI
from steami_screen import Screen, SSD1327Display

spi = SPI(1)
raw_display = ssd1327.WS_OLED_128X128_SPI(spi,
    Pin("DATA_COMMAND_DISPLAY"), Pin("RST_DISPLAY"), Pin("CS_DISPLAY"))
screen = Screen(SSD1327Display(raw_display))

# Dans la boucle :
screen.clear()
screen.value(distance, label="Distance", unit="mm")
screen.bar(map_val(distance, DIST_MIN, DIST_MAX, 0, 100), max_val=100)
screen.show()
```

<div style={{display: 'flex', justifyContent: 'center', margin: '1rem 0'}}>
<img src="/img/ressources/inovmicro-exao/i08-theremine/steami_theremine.jpeg" alt="Thérémine sur la STeaMi avec écran" style={{width: '500px', height: '500px', objectFit: 'contain'}} />
</div>

---

## Aller plus loin

### Pour comprendre

- **[Thérémine (Wikipédia)](https://fr.wikipedia.org/wiki/Th%C3%A9r%C3%A9mine)** : histoire de l'instrument, inventé en 1928 par Léon Thérémine, premier instrument joué sans contact physique. Comment fonctionnent ses deux antennes capacitives et pourquoi il a fasciné les compositeurs de musique électronique.
- **[Temps de vol (Wikipédia)](https://fr.wikipedia.org/wiki/Cam%C3%A9ra_temps_de_vol)** : la physique derrière le VL53L1X. Comment on peut mesurer une distance avec la vitesse de la lumière, et pourquoi cette technologie est aujourd'hui dans tous les téléphones (autofocus, déverrouillage facial) et dans les voitures autonomes (LIDAR).
- **[Modulation de largeur d'impulsion (Wikipédia)](https://fr.wikipedia.org/wiki/Modulation_de_largeur_d%27impulsion)** : pourquoi un signal numérique qui ne sait dire que 0 ou 3,3 V peut produire un son audible, contrôler la vitesse d'un moteur ou faire varier la luminosité d'une LED. Le PWM est l'un des outils universels de l'électronique embarquée.

### Pour s'inspirer

- **[Clara Rockmore](https://fr.wikipedia.org/wiki/Clara_Rockmore)** : violoniste devenue première grande virtuose du thérémine dans les années 1930. Ses performances ont prouvé que cet « instrument bizarre » pouvait jouer du Bach et du Tchaïkovski avec une expressivité bouleversante. À écouter sur YouTube avec les yeux fermés.
- **[Theremin Hero](https://www.thereminhero.com/)** : compositeur contemporain qui mêle thérémine, jeu vidéo rétro et pop électronique. Une preuve vivante que l'instrument de 1928 n'a rien perdu de son pouvoir d'évocation.
- **[Capteur de distance à anneau LED (Instructables)](https://www.instructables.com/LED-Ring-Distance-Sensor/)** : un capteur de distance qui pilote un anneau de LED. Même principe que notre thérémine (mapper une distance vers autre chose), appliqué à la lumière au lieu du son.

---

_Cette fiche fait partie du projet [I-Novmicro #2 : Action EXAO](/projets/inovmicro-exao). Adaptée du projet [Let's STEAM](/projets/lets-steam) (fiche [`r1as08-theremine`](/ressources/lets-steam/r1as08-theremine)) sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._


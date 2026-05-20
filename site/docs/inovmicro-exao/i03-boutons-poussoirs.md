---
id: i03-boutons-poussoirs
title: Utiliser des boutons-poussoirs
sidebar_label: "Utiliser des boutons-poussoirs"
sidebar_position: 3
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>
<div style={{flex: 1}}>
# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="4" y="10" width="16" height="10" rx="2" fill="#140e4e" opacity="0.1"/><rect x="4" y="10" width="16" height="10" rx="2" fill="none" stroke="#140e4e" strokeWidth="1.5" opacity="1.0"/><circle cx="12" cy="8" r="5" fill="#140e4e" opacity="0.25"/><circle cx="12" cy="8" r="3.5" fill="#140e4e" opacity="1.0"/><line x1="8" y1="22" x2="8" y2="20" stroke="#140e4e" strokeWidth="1.5" opacity="1.0"/><line x1="16" y1="22" x2="16" y2="20" stroke="#140e4e" strokeWidth="1.5" opacity="1.0"/></svg> Utiliser des boutons-poussoirs

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">STeaMi</span>
  <span className="badge badge--warning">MicroPython</span>
</div>
| Projet        | Durée  | Difficulté    | Âge       | Logiciel STeaMi testé |
| ------------- | ------ | ------------- | --------- | --------------------- |
| I-Novmicro #2 | 25 min | Intermédiaire | 11-99 ans | 0.23.1                |

## Matériel et Montage

- 1 carte STeaMi
- 1 câble USB de données (micro-USB pour la STeaMi V1, USB-C pour la STeaMi V2). Attention : un câble qui ne sert qu'à charger un téléphone ne fonctionnera pas.
- 1 ordinateur sous Windows, macOS ou Linux
- Un IDE prenant en charge MicroPython
</div>
<img src="/img/ressources/inovmicro-exao/i03-boutons-poussoirs/icone.png" alt="Boutons-poussoirs sur la STeaMi" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />
</div>
---

## De quoi parle-t-on ?

Un [bouton-poussoir](https://fr.wikipedia.org/wiki/Bouton-poussoir) est le composant d'interaction le plus simple qui soit : on appuie dessus, et le programme réagit. La STeaMi dispose de deux boutons intégrés, **A** et **B**, directement accessibles depuis MicroPython — pas de breadboard, pas de câblage.

:::info[Jeu de questions-réponses]
Pour apprendre à utiliser des boutons, **jouons à un jeu de questions-réponses !** L'idée est simple : un animateur, deux joueurs, un bouton chacun. Quand l'animateur pose une question, le premier joueur qui appuie sur son bouton a le droit de répondre. L'écran OLED et la LED RGB indiquent quel joueur a buzzé en premier.
:::

---

## Objectifs d'apprentissage

- Lire l'état d'un bouton avec `Pin.value()` en MicroPython
- Détecter une transition (relâché → appuyé) pour ne déclencher qu'une seule action par appui
- Utiliser une variable booléenne pour gérer l'état du jeu
- Afficher un résultat sur l'écran OLED et la LED RGB intégrés
---

## Étape 1 : Construire

"Construire" se résume ici à comprendre comment accéder aux composants de la carte — tout est déjà soudé.

### Les boutons A et B de la STeaMi

Les boutons se lisent comme des entrées numériques avec `Pin("A_BUTTON", Pin.IN)` et `Pin("B_BUTTON", Pin.IN)`. Un bouton appuyé renvoie `0`, relâché renvoie `1` — c'est la **logique inverse**, car la broche est maintenue à 3,3 V au repos par une résistance de rappel, et le bouton la tire à 0 V quand on appuie.

```python
from machine import Pin

A_BUTTON = Pin("A_BUTTON", Pin.IN)
B_BUTTON = Pin("B_BUTTON", Pin.IN)

print(A_BUTTON.value())   # 1 = relâché, 0 = appuyé
```

### La LED RGB intégrée

La STeaMi dispose d'une LED RGB dont chaque couleur se pilote indépendamment. `1` allume, `0` éteint :

```python
from machine import Pin

LED_RED   = Pin("LED_RED",   Pin.OUT)
LED_GREEN = Pin("LED_GREEN", Pin.OUT)
LED_BLUE  = Pin("LED_BLUE",  Pin.OUT)

LED_RED.value(1)    # allume le rouge
LED_GREEN.value(0)  # éteint le vert
LED_BLUE.value(0)   # éteint le bleu
```

### Détecter une transition

Pour ne déclencher qu'**une seule action** par appui — et non une rafale pendant tout le temps où le bouton reste enfoncé — on mémorise l'état précédent et on ne réagit que quand on passe de relâché (`1`) à appuyé (`0`) :

```python
precedent = 1   # bouton relâché au départ

while True:
    actuel = A_BUTTON.value()
    if actuel == 0 and precedent == 1:
        print("Appui détecté !")   # déclenché une seule fois
    precedent = actuel
```

### Connecter la carte à l'ordinateur

Brancher la STeaMi à l'ordinateur via le câble USB. Si un des IDE proposés est déjà configuré, vous devriez voir le shell MicroPython (`>>>`).

### Tester les boutons dans le REPL

```python
>>> from machine import Pin
>>> A_BUTTON = Pin("A_BUTTON", Pin.IN)
>>> A_BUTTON.value()
1
>>> # Appuyer sur A pendant que vous tapez la ligne suivante
>>> A_BUTTON.value()
0
```

---

## Étape 2 : Programmer

Le programme implémente le jeu de questions-réponses. Au démarrage, l'écran affiche "Prêt !". Dès qu'un joueur appuie sur son bouton, son nom s'affiche en grand sur l'écran, la LED RGB s'allume dans sa couleur, et les appuis sont bloqués pendant 3 secondes. Ensuite le jeu se réinitialise.

### Composants utilisés

| Composant  | Nom dans le programme              | Rôle                                      |
| ---------- | ---------------------------------- | ----------------------------------------- |
| Bouton A   | `A_BUTTON`                         | Buzzer du joueur 1 (vert)                 |
| Bouton B   | `B_BUTTON`                         | Buzzer du joueur 2 (bleu)                 |
| LED RGB    | `LED_RED`, `LED_GREEN`, `LED_BLUE` | Indicateur visuel du gagnant              |
| Écran OLED | objet `screen`                     | Affichage du résultat et de l'état du jeu |

### Programme

```python
# Testée avec firmware STeaMi 0.23.1
#
# Jeu de questions-réponses : bouton A = joueur 1 (vert),
# bouton B = joueur 2 (bleu). L'écran et la LED RGB indiquent
# quel joueur a buzzé en premier.

import ssd1327
import time
from machine import SPI, Pin
from steami_screen import Screen, SSD1327Display, GREEN, BLUE

# --- Écran ---
spi = SPI(1)
dc  = Pin("DATA_COMMAND_DISPLAY")
res = Pin("RST_DISPLAY")
cs  = Pin("CS_DISPLAY")
raw_display = ssd1327.WS_OLED_128X128_SPI(spi, dc, res, cs)
display = SSD1327Display(raw_display)
screen  = Screen(display)

# --- Boutons ---
A_BUTTON = Pin("A_BUTTON", Pin.IN)
B_BUTTON = Pin("B_BUTTON", Pin.IN)

# --- LED RGB ---
LED_RED   = Pin("LED_RED",   Pin.OUT)
LED_GREEN = Pin("LED_GREEN", Pin.OUT)
LED_BLUE  = Pin("LED_BLUE",  Pin.OUT)


def led_off():
    """Éteint toutes les couleurs de la LED RGB."""
    LED_RED.value(0)
    LED_GREEN.value(0)
    LED_BLUE.value(0)


def afficher_pret():
    """Affiche l'écran d'attente."""
    screen.clear()
    screen.value("?", label="Pret !")
    screen.subtitle("A = J1   B = J2")
    screen.show()


def afficher_gagnant(nom, couleur_screen):
    """Affiche le gagnant sur l'écran."""
    screen.clear()
    screen.title("Buzze !")
    screen.text(nom, at="W", color=couleur_screen, scale=2)
    screen.show()


def buzzer_joueur(nom, led_pin, couleur_screen):
    """Allume la LED, affiche le gagnant, attend, puis réinitialise."""
    led_pin.value(1)
    afficher_gagnant(nom, couleur_screen)
    time.sleep_ms(3000)
    led_pin.value(0)
    led_off()
    afficher_pret()


# --- Programme principal ---
led_off()
afficher_pret()

a_prec = 1
b_prec = 1
on_peut_buzzer = True

while True:
    a = A_BUTTON.value()
    b = B_BUTTON.value()

    if on_peut_buzzer:
        # Détection de transition relâché → appuyé sur A
        if a == 0 and a_prec == 1:
            on_peut_buzzer = False
            buzzer_joueur("Joueur 1", LED_GREEN, GREEN)
            on_peut_buzzer = True

        # Détection de transition relâché → appuyé sur B
        elif b == 0 and b_prec == 1:
            on_peut_buzzer = False
            buzzer_joueur("Joueur 2", LED_BLUE, BLUE)
            on_peut_buzzer = True

    a_prec = a
    b_prec = b
    time.sleep_ms(20)
```

### Comment cela fonctionne ?

Le programme s'organise autour de trois idées :

- **Variable booléenne `on_peut_buzzer`** : elle vaut `True` quand le jeu attend un appui, et `False` pendant les 3 secondes d'affichage du gagnant. C'est ce qui empêche le deuxième joueur de buzzer pendant que le premier est affiché.
- **Détection de transition** : on compare l'état actuel (`a`) à l'état précédent (`a_prec`). L'action ne se déclenche que lors du passage de `1` à `0` — c'est-à-dire au moment exact de l'appui, pas pendant tout le temps où le bouton reste enfoncé.
- **`buzzer_joueur()`** : regroupe en une seule fonction toutes les actions liées à un gagnant (LED, écran, attente, réinitialisation), ce qui évite de dupliquer le code pour chaque joueur.
### Exécution

- **Test rapide** : lancer le programme depuis votre IDE (bouton **Run** ▶ ou `F5`). Appuyer sur A ou B pour tester le buzzer.
- **Programme persistant** : enregistrer le fichier sous le nom **`main.py`** sur la carte. Il sera relancé à chaque démarrage.
---

## Étape 3 : Améliorer

Trois pistes pour aller plus loin.

### 1. Ajouter un score

L'animateur valide la bonne réponse en appuyant simultanément sur A et B. Le score s'affiche de chaque côté de l'écran avec `screen.value(..., at="W")` et `screen.value(..., at="E")` pour éviter tout chevauchement :

```python
# Testée avec firmware STeaMi 0.23.1
#
# Jeu de questions-réponses avec score :
# bouton A = joueur 1 (vert), bouton B = joueur 2 (bleu).
# L'animateur valide la bonne réponse avec A+B simultané.

import ssd1327
import time
from machine import SPI, Pin
from steami_screen import Screen, SSD1327Display, GREEN, BLUE

# --- Écran ---
spi = SPI(1)
dc  = Pin("DATA_COMMAND_DISPLAY")
res = Pin("RST_DISPLAY")
cs  = Pin("CS_DISPLAY")
raw_display = ssd1327.WS_OLED_128X128_SPI(spi, dc, res, cs)
display = SSD1327Display(raw_display)
screen  = Screen(display)

# --- Boutons ---
A_BUTTON = Pin("A_BUTTON", Pin.IN)
B_BUTTON = Pin("B_BUTTON", Pin.IN)

# --- LED RGB ---
LED_RED   = Pin("LED_RED",   Pin.OUT)
LED_GREEN = Pin("LED_GREEN", Pin.OUT)
LED_BLUE  = Pin("LED_BLUE",  Pin.OUT)

score_j1 = 0
score_j2 = 0
gagnant_actuel = None   # "j1" ou "j2"


def led_off():
    LED_RED.value(0)
    LED_GREEN.value(0)
    LED_BLUE.value(0)


def afficher_pret():
    screen.clear()
    screen.title("Pret !")
    screen.text("A = J1   B = J2", at="CENTER")
    screen.subtitle("S1:{}  S2:{}".format(score_j1, score_j2))
    screen.show()


def afficher_gagnant(nom, couleur_screen):
    screen.clear()
    screen.title("Buzze !")
    screen.text(nom, at="W", color=couleur_screen, scale=2)
    screen.subtitle("A+B = point")
    screen.show()


def afficher_scores():
    screen.clear()
    screen.title("Scores")
    screen.value(str(score_j1), label="Joueur 1", at="W")
    screen.value(str(score_j2), label="Joueur 2", at="E")
    screen.show()


def buzzer_joueur(nom, led_pin, couleur_screen, joueur):
    global gagnant_actuel
    gagnant_actuel = joueur
    led_pin.value(1)
    afficher_gagnant(nom, couleur_screen)


# --- Programme principal ---
led_off()
afficher_pret()

a_prec = 1
b_prec = 1
on_peut_buzzer = True

while True:
    a = A_BUTTON.value()
    b = B_BUTTON.value()

    if on_peut_buzzer:
        if a == 0 and a_prec == 1:
            on_peut_buzzer = False
            buzzer_joueur("Joueur 1", LED_GREEN, GREEN, "j1")

        elif b == 0 and b_prec == 1:
            on_peut_buzzer = False
            buzzer_joueur("Joueur 2", LED_BLUE, BLUE, "j2")

    # L'animateur valide avec A+B simultané
    elif not on_peut_buzzer and a == 0 and b == 0:
        if gagnant_actuel == "j1":
            score_j1 += 1
        else:
            score_j2 += 1
        led_off()
        afficher_scores()
        time.sleep_ms(2000)
        gagnant_actuel = None
        on_peut_buzzer = True
        afficher_pret()

    a_prec = a
    b_prec = b
    time.sleep_ms(20)
```

### 2. Ajouter un buzzer sonore

Chaque joueur a sa propre fréquence — 880 Hz pour le joueur 1, 660 Hz pour le joueur 2 — pour distinguer les buzzes à l'oreille :

```python
# Testée avec firmware STeaMi 0.23.1
#
# Jeu de questions-réponses avec buzzer sonore :
# bouton A = joueur 1 (vert, 880 Hz), bouton B = joueur 2 (bleu, 660 Hz).

import ssd1327
import time
from machine import SPI, Pin
from steami_screen import Screen, SSD1327Display, GREEN, BLUE

# --- Écran ---
spi = SPI(1)
dc  = Pin("DATA_COMMAND_DISPLAY")
res = Pin("RST_DISPLAY")
cs  = Pin("CS_DISPLAY")
raw_display = ssd1327.WS_OLED_128X128_SPI(spi, dc, res, cs)
display = SSD1327Display(raw_display)
screen  = Screen(display)

# --- Boutons ---
A_BUTTON = Pin("A_BUTTON", Pin.IN)
B_BUTTON = Pin("B_BUTTON", Pin.IN)

# --- LED RGB ---
LED_RED   = Pin("LED_RED",   Pin.OUT)
LED_GREEN = Pin("LED_GREEN", Pin.OUT)
LED_BLUE  = Pin("LED_BLUE",  Pin.OUT)

# --- Buzzer ---
SPEAKER = Pin("SPEAKER", Pin.OUT_PP)


def led_off():
    LED_RED.value(0)
    LED_GREEN.value(0)
    LED_BLUE.value(0)


def tone(pin, freq, duration_ms):
    """Fait sonner le buzzer à la fréquence demandée pendant duration_ms."""
    period_us = int(1_000_000 / freq)
    half_period = period_us // 2
    end_time = time.ticks_add(time.ticks_us(), duration_ms * 1000)
    while time.ticks_diff(end_time, time.ticks_us()) > 0:
        pin.on()
        time.sleep_us(half_period)
        pin.off()
        time.sleep_us(half_period)


def afficher_pret():
    screen.clear()
    screen.value("?", label="Pret !")
    screen.subtitle("A = J1   B = J2")
    screen.show()


def afficher_gagnant(nom, couleur_screen):
    screen.clear()
    screen.title("Buzze !")
    screen.text(nom, at="W", color=couleur_screen, scale=2)
    screen.show()


def buzzer_joueur(nom, led_pin, couleur_screen, freq):
    led_pin.value(1)
    tone(SPEAKER, freq, 300)
    afficher_gagnant(nom, couleur_screen)
    time.sleep_ms(3000)
    led_pin.value(0)
    led_off()
    afficher_pret()


# --- Programme principal ---
led_off()
afficher_pret()

a_prec = 1
b_prec = 1
on_peut_buzzer = True

while True:
    a = A_BUTTON.value()
    b = B_BUTTON.value()

    if on_peut_buzzer:
        if a == 0 and a_prec == 1:
            on_peut_buzzer = False
            buzzer_joueur("Joueur 1", LED_GREEN, GREEN, 880)
            on_peut_buzzer = True

        elif b == 0 and b_prec == 1:
            on_peut_buzzer = False
            buzzer_joueur("Joueur 2", LED_BLUE, BLUE, 660)
            on_peut_buzzer = True

    a_prec = a
    b_prec = b
    time.sleep_ms(20)
```

### 3. Chronomètre de réaction

Le temps de réaction s'affiche en bas de l'écran après chaque buzz — le plus rapide gagne un avantage :

```python
# Testée avec firmware STeaMi 0.23.1
#
# Jeu de questions-réponses avec chronomètre de réaction :
# bouton A = joueur 1 (vert), bouton B = joueur 2 (bleu).
# Le temps de réaction s'affiche après chaque buzz.

import ssd1327
import time
from machine import SPI, Pin
from steami_screen import Screen, SSD1327Display, GREEN, BLUE

# --- Écran ---
spi = SPI(1)
dc  = Pin("DATA_COMMAND_DISPLAY")
res = Pin("RST_DISPLAY")
cs  = Pin("CS_DISPLAY")
raw_display = ssd1327.WS_OLED_128X128_SPI(spi, dc, res, cs)
display = SSD1327Display(raw_display)
screen  = Screen(display)

# --- Boutons ---
A_BUTTON = Pin("A_BUTTON", Pin.IN)
B_BUTTON = Pin("B_BUTTON", Pin.IN)

# --- LED RGB ---
LED_RED   = Pin("LED_RED",   Pin.OUT)
LED_GREEN = Pin("LED_GREEN", Pin.OUT)
LED_BLUE  = Pin("LED_BLUE",  Pin.OUT)


def led_off():
    LED_RED.value(0)
    LED_GREEN.value(0)
    LED_BLUE.value(0)


def afficher_pret():
    screen.clear()
    screen.value("?", label="Pret !")
    screen.subtitle("A = J1   B = J2")
    screen.show()


def buzzer_joueur(nom, led_pin, couleur_screen, debut_ms):
    temps_ms = time.ticks_diff(time.ticks_ms(), debut_ms)
    led_pin.value(1)
    screen.clear()
    screen.title("Buzze !")
    screen.text(nom, at="W", color=couleur_screen, scale=2)
    screen.subtitle("{:.2f} s".format(temps_ms / 1000))
    screen.show()
    time.sleep_ms(3000)
    led_pin.value(0)
    led_off()


# --- Programme principal ---
led_off()
afficher_pret()

a_prec = 1
b_prec = 1
on_peut_buzzer = True
debut_question = time.ticks_ms()

while True:
    a = A_BUTTON.value()
    b = B_BUTTON.value()

    if on_peut_buzzer:
        if a == 0 and a_prec == 1:
            on_peut_buzzer = False
            buzzer_joueur("Joueur 1", LED_GREEN, GREEN, debut_question)
            debut_question = time.ticks_ms()
            on_peut_buzzer = True
            afficher_pret()

        elif b == 0 and b_prec == 1:
            on_peut_buzzer = False
            buzzer_joueur("Joueur 2", LED_BLUE, BLUE, debut_question)
            debut_question = time.ticks_ms()
            on_peut_buzzer = True
            afficher_pret()

    a_prec = a
    b_prec = b
    time.sleep_ms(20)
```

---

## Aller plus loin

- [Bouton-poussoir (Wikipédia)](https://fr.wikipedia.org/wiki/Bouton-poussoir) : histoire et utilisations du composant.
- [Wiki STeaMi : Boutons et buzzer](https://wiki.steami.cc/docs/hardware/main-components/buttons-audio) : description matérielle des boutons A et B et de la LED RGB sur la carte.
- [Jeu de réflexes (micro:bit)](https://microbit.org/projects/make-it-code-it/reaction-game/) : créer un jeu de réflexes avec des boutons.
---

_Cette fiche fait partie du projet [I-Novmicro #2 : Action EXAO](/projets/inovmicro-exao). Adaptée de la fiche Let's STEAM [`r1as03-boutons`](/ressources/lets-steam/r1as03-boutons) sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._


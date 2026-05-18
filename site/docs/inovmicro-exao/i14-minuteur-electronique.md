---
id: i14-minuteur-electronique
title: Minuteur électronique
sidebar_label: "Minuteur électronique"
sidebar_position: 14
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>
<div style={{flex: 1}}>
# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><circle cx="12" cy="13" r="9" fill="#140e4e" fillOpacity="0.1"/><circle cx="12" cy="13" r="7" fill="#140e4e" fillOpacity="0.25"/><circle cx="12" cy="13" r="1" fill="#140e4e"/><line x1="12" y1="13" x2="12" y2="8" stroke="#140e4e" strokeWidth="1.5" strokeLinecap="round"/><line x1="12" y1="13" x2="15" y2="15" stroke="#140e4e" strokeWidth="1.5" strokeLinecap="round"/><rect x="10" y="2" width="4" height="2" rx="1" fill="#140e4e"/><line x1="18" y1="5" x2="19.5" y2="3.5" stroke="#140e4e" strokeWidth="1.5" strokeLinecap="round"/></svg> Minuteur électronique

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">STeaMi</span>
  <span className="badge badge--warning">MicroPython</span>
</div>
| Projet        | Durée  | Difficulté | Âge       | Logiciel STeaMi testé |
| ------------- | ------ | ---------- | --------- | --------------------- |
| I-Novmicro #2 | 35 min | Avancé     | 11-99 ans | 0.23.1                |

## Matériel et Montage

- 1 carte STeaMi
- 1 câble USB de données (micro-USB pour la STeaMi V1, USB-C pour la STeaMi V2). Attention : un câble qui ne sert qu'à charger un téléphone ne fonctionnera pas.
- 1 ordinateur sous Windows, macOS ou Linux
- Un IDE prenant en charge MicroPython
</div>
<img src="/img/ressources/inovmicro-exao/i14-minuteur-electronique/icone.png" alt="Minuteur électronique sur la STeaMi" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />
</div>
---

## De quoi parle-t-on ?

Un minuteur, c'est un programme qui compte le temps et prévient quand c'est terminé — en apparence très simple, mais qui cache des questions de programmation concrètes : comment mesurer du temps précisément ? Comment afficher une progression en temps réel ? Comment déclencher une alarme ?

Dans cette activité, on va construire un **minuteur à œufs** en MicroPython, en utilisant uniquement les composants intégrés à la STeaMi : l'écran OLED pour afficher le décompte, le buzzer pour sonner à la fin, et les boutons A et B pour choisir la durée. La règle du **3, 6, 9** guide la cuisson parfaite :

- **3 minutes** → œuf à la coque
- **6 minutes** → œuf mollet
- **9 minutes** → œuf dur
Pas besoin de câbles ni de montage : tout est déjà là.

---

## Objectifs d'apprentissage

- Utiliser `time.ticks_ms()` pour mesurer le temps écoulé sans bloquer le programme
- Afficher une barre de progression sur l'écran OLED en calculant un pourcentage
- Combiner plusieurs composants intégrés (écran, buzzer, boutons) dans un seul programme
- Comprendre la différence entre une temporisation bloquante (`time.sleep`) et une boucle non bloquante
---

## Étape 1 : Construire

"Construire" se résume ici à comprendre comment accéder aux composants de la carte — tout est déjà soudé.

### L'écran OLED de la STeaMi

La STeaMi intègre un [**écran OLED 128 × 128 pixels**](https://wiki.steami.cc/docs/hardware/main-components/display) piloté via SPI. On l'utilise à travers le module `steami_screen`, qui fournit une API haut niveau avec des widgets prêts à l'emploi : titre, valeur, barre de progression, jauge, etc.

L'initialisation est toujours la même séquence — on la copie telle quelle depuis les exemples :

```python
import ssd1327
from machine import SPI, Pin
from steami_screen import Screen, SSD1327Display, WHITE, GRAY, LIGHT

spi = SPI(1)
dc  = Pin("DATA_COMMAND_DISPLAY")
res = Pin("RST_DISPLAY")
cs  = Pin("CS_DISPLAY")

raw_display = ssd1327.WS_OLED_128X128_SPI(spi, dc, res, cs)
display = SSD1327Display(raw_display)
screen  = Screen(display)
```

Une fois l'objet `screen` créé, on dispose notamment de :

- `screen.clear()` — efface l'écran
- `screen.title("texte")` — affiche un titre en haut
- `screen.value(val, label="...", unit="...")` — affiche une grande valeur au centre
- `screen.bar(val, max_val=100)` — dessine une barre de progression horizontale
- `screen.text("texte", at="S")` — texte positionné par point cardinal (N, S, E, W, CENTER…)
- `screen.show()` — envoie le tampon vers l'écran physique
:::info[Le tampon d'affichage]
L'écran ne se met pas à jour automatiquement quand on lui envoie du contenu. Toutes les fonctions de dessin modifient un **tampon en mémoire**. C'est seulement `screen.show()` qui transfère ce tampon vers l'écran physique. Cette approche évite les scintillements : on prépare toute l'image, puis on l'affiche d'un coup.
:::

### Le buzzer

Le buzzer de la STeaMi est un [transducteur piézoélectrique](https://fr.wikipedia.org/wiki/Capteur_pi%C3%A9zo%C3%A9lectrique) passif : quand on lui applique une tension qui alterne rapidement, une fine plaque de céramique vibre et produit un son. La fréquence de l'alternance détermine la hauteur de la note. On le pilote avec une fonction `tone()` qui génère la fréquence voulue par bit-banging :

```python
from machine import Pin
import time

SPEAKER = Pin("SPEAKER", Pin.OUT_PP)

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
```

### Les boutons A et B

Les boutons se lisent via `Pin("A_BUTTON", Pin.IN)` et `Pin("B_BUTTON", Pin.IN)`. Rappel : un bouton appuyé renvoie `0`, relâché renvoie `1` (logique inverse, car la broche est tirée à 3,3 V au repos par une résistance de rappel externe).

### Mesurer le temps sans bloquer

La tentation naturelle pour faire un minuteur est d'écrire `time.sleep(180)`. Ça fonctionne… mais pendant ces 180 secondes, le programme ne peut rien faire d'autre : impossible de mettre à jour l'affichage, d'écouter les boutons, ou d'arrêter le minuteur.

La bonne approche consiste à noter l'instant de départ, puis à vérifier régulièrement combien de temps s'est écoulé :

```python
debut = time.ticks_ms()
duree_ms = 180_000  # 3 minutes en millisecondes

while True:
    ecoule = time.ticks_diff(time.ticks_ms(), debut)
    if ecoule >= duree_ms:
        break  # terminé !
    restant = duree_ms - ecoule
    # mettre à jour l'affichage avec restant...
    time.sleep_ms(100)  # petite pause pour ne pas saturer le processeur
```

:::info[`ticks_ms()` et `ticks_diff()`]
`time.ticks_ms()` renvoie le nombre de millisecondes écoulées depuis le démarrage de la carte. Ce compteur finit par revenir à zéro après quelques semaines. `ticks_diff(a, b)` calcule la différence `a - b` en tenant compte de ce rebouclage éventuel — c'est pour ça qu'on l'utilise à la place d'une simple soustraction.
:::

### Connecter la carte à l'ordinateur

Brancher la STeaMi à l'ordinateur via le câble USB. Si un des IDE proposés est déjà configuré, vous devriez voir le shell MicroPython (`>>>`).

---

## Étape 2 : Programmer

Le programme propose deux modes, sélectionnés au démarrage avec les boutons :

- **Bouton A** → minuteur de 3 minutes (œuf à la coque)
- **Bouton B** → minuteur de 6 minutes (œuf mollet)
- **Boutons A + B simultanément** → minuteur de 9 minutes (œuf dur)
Pendant le décompte, l'écran affiche le temps restant en minutes et secondes, ainsi qu'une barre de progression qui se vide au fil du temps. Quand le minuteur atteint zéro, le buzzer joue une mélodie d'alarme.

### Composants utilisés

| Composant  | Nom dans le programme           | Rôle                                                    |
| ---------- | ------------------------------- | ------------------------------------------------------- |
| Écran OLED | objet `screen` (`steami_screen`)| Affichage du temps restant et de la barre de progression |
| Buzzer     | `SPEAKER`                       | Alarme sonore à la fin du décompte                      |
| Bouton A   | `A_BUTTON`                      | Sélectionner 3 min                                      |
| Bouton B   | `B_BUTTON`                      | Sélectionner 6 min                                      |

### Programme

```python
# Testée avec firmware STeaMi 0.23.1
#
# Minuteur à œufs : bouton A = 3 min, bouton B = 6 min, A+B = 9 min
# L'écran OLED affiche le décompte (MM:SS) et une barre de progression.
# Le buzzer sonne une mélodie d'alarme à la fin.

import ssd1327
from machine import SPI, Pin
import time
from steami_screen import Screen, SSD1327Display, WHITE, GRAY, LIGHT

# --- Écran ---
spi = SPI(1)
dc  = Pin("DATA_COMMAND_DISPLAY")
res = Pin("RST_DISPLAY")
cs  = Pin("CS_DISPLAY")
raw_display = ssd1327.WS_OLED_128X128_SPI(spi, dc, res, cs)
display = SSD1327Display(raw_display)
screen  = Screen(display)

# --- Boutons et buzzer ---
SPEAKER  = Pin("SPEAKER",  Pin.OUT_PP)
A_BUTTON = Pin("A_BUTTON", Pin.IN)
B_BUTTON = Pin("B_BUTTON", Pin.IN)


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


def jouer_alarme():
    """Mélodie d'alarme : trois séries de bips descendants."""
    for _ in range(3):
        tone(SPEAKER, 880, 150)
        time.sleep_ms(80)
        tone(SPEAKER, 660, 150)
        time.sleep_ms(80)
        tone(SPEAKER, 440, 300)
        time.sleep_ms(200)


def afficher_decompte(restant_ms, total_ms):
    """Met à jour l'écran avec le temps restant et la barre de progression."""
    restant_s = restant_ms // 1000
    minutes   = restant_s // 60
    secondes  = restant_s % 60
    texte_temps = "{:02d}:{:02d}".format(minutes, secondes)

    # Pourcentage de temps restant (0 → 100)
    pct = int(100 * restant_ms / total_ms)

    screen.clear()
    screen.value(texte_temps, label="Minuteur a oeufs")
    screen.bar(pct, max_val=100)
    screen.show()


def choisir_duree():
    """Affiche le menu de choix et attend un appui sur A, B ou A+B."""
    screen.clear()
    screen.title("Choisir duree")
    screen.text(" A  = 3 min",  at="NW")
    screen.text(" B  = 6 min",  at="W")
    screen.text(" A+B = 9 min", at="SW")
    screen.show()

    # Attendre que les boutons soient relâchés avant de scruter
    while A_BUTTON.value() == 0 or B_BUTTON.value() == 0:
        time.sleep_ms(20)

    while True:
        a = A_BUTTON.value()
        b = B_BUTTON.value()

        if a == 0 and b == 0:
            return 9 * 60 * 1000   # 9 minutes en ms
        elif a == 0:
            return 3 * 60 * 1000   # 3 minutes en ms
        elif b == 0:
            return 6 * 60 * 1000   # 6 minutes en ms

        time.sleep_ms(20)


def lancer_minuteur(duree_ms):
    """Lance le décompte et met à jour l'écran toutes les 100 ms."""
    debut = time.ticks_ms()

    while True:
        maintenant = time.ticks_ms()
        ecoule  = time.ticks_diff(maintenant, debut)
        restant = duree_ms - ecoule

        if restant <= 0:
            screen.clear()
            screen.value("00:00", label="Temps ecoule !")
            screen.show()
            jouer_alarme()
            return

        afficher_decompte(restant, duree_ms)
        time.sleep_ms(100)


# --- Programme principal ---
while True:
    duree = choisir_duree()
    lancer_minuteur(duree)
    # Attendre que tous les boutons soient relâchés avant de recommencer
    time.sleep_ms(500)
```

### Comment cela fonctionne ?

Le programme s'organise en quatre fonctions bien séparées :

- **`tone()`** : génère une fréquence par bit-banging sur la broche du buzzer — elle alterne `pin.on()` / `pin.off()` à la vitesse correspondant à la fréquence demandée.
- **`jouer_alarme()`** : enchaîne trois notes descendantes (880 Hz → 660 Hz → 440 Hz) répétées trois fois pour former une mélodie reconnaissable.
- **`afficher_decompte(restant_ms, total_ms)`** : calcule le temps restant en minutes/secondes, convertit le temps restant en pourcentage (0–100), puis utilise les widgets `steami_screen` — `screen.value()` avec son paramètre `label` pour afficher à la fois le titre et le chrono `MM:SS` en grand sans chevauchement, et `screen.bar()` pour la barre de progression. On appelle `screen.clear()` à chaque fois pour repartir d'un écran vide.
- **`choisir_duree()`** : affiche le menu avec `screen.text(..., at="...")` positionné par points cardinaux, puis scrute les deux boutons. La détection A+B simultané est possible parce qu'on lit les deux broches au même instant dans la boucle.
- **`lancer_minuteur(duree_ms)`** : c'est le cœur du programme — la boucle non bloquante. Elle calcule à chaque itération le temps restant grâce à `ticks_diff()`, met à jour l'écran, et se termine dès que le compteur atteint zéro.
### Exécution

- **Test rapide** : lancer le programme depuis votre IDE (bouton **Run** ▶ ou `F5`). L'écran affiche le menu de choix, appuyer sur A lance un minuteur de 3 minutes.
- **Programme persistant** : enregistrer le fichier sous le nom **`main.py`** sur la carte. Il sera relancé à chaque démarrage.
---

## Étape 3 : Améliorer

Trois pistes pour aller plus loin.

### 1. Calibrer le minuteur

Le minuteur tel qu'il est écrit n'est pas parfaitement précis : le temps passé dans `afficher_decompte()` et `jouer_alarme()` s'ajoute aux 100 ms de `sleep_ms()`, ce qui fait dériver le décompte. Pour mesurer l'écart, utiliser une horloge de référence (le téléphone) et chronométrer 10 fois la durée réelle d'un minuteur de 3 minutes. On calcule la valeur moyenne et on utilise un produit en croix pour trouver la correction à appliquer.

```python
# Si le minuteur mesure 3 min 05 s (185 s) pour 180 s réelles,
# la valeur corrigée du délai est :
# sleep_corrige = 100 × (180 / 185) ≈ 97 ms
time.sleep_ms(97)   # à la place de 100
```

### 2. Ajouter un mode pause

En l'état, le minuteur ne peut pas être mis en pause. On peut ajouter une vérification du bouton A dans la boucle principale pour suspendre et reprendre le décompte :

```python
def lancer_minuteur(duree_ms):
    debut = time.ticks_ms()
    temps_pause = 0
    en_pause = False

    while True:
        if A_BUTTON.value() == 0 and not en_pause:
            # Mettre en pause
            en_pause = True
            debut_pause = time.ticks_ms()
            screen.clear()
            screen.title("En pause")
            screen.text("A = reprendre", at="S")
            screen.show()
            time.sleep_ms(300)   # anti-rebond

        if A_BUTTON.value() == 0 and en_pause:
            # Reprendre
            temps_pause += time.ticks_diff(time.ticks_ms(), debut_pause)
            en_pause = False
            time.sleep_ms(300)

        if not en_pause:
            maintenant = time.ticks_ms()
            ecoule = time.ticks_diff(maintenant, debut) - temps_pause
            restant = duree_ms - ecoule
            if restant <= 0:
                # ...
                return
            afficher_decompte(restant, duree_ms)

        time.sleep_ms(100)
```

### 3. Mélodie de fin personnalisée

Remplacer la mélodie d'alarme par une vraie mélodie en définissant une séquence de notes. Chaque note est une combinaison de fréquence et de durée.

```python
# Mélodie : fréquence en Hz, durée en ms
MELODIE = [
    (523, 200),   # Do
    (587, 200),   # Ré
    (659, 200),   # Mi
    (698, 400),   # Fa (tenu)
    (659, 200),   # Mi
    (587, 200),   # Ré
    (523, 600),   # Do (final)
]

def jouer_melodie():
    for freq, duree in MELODIE:
        tone(SPEAKER, freq, duree)
        time.sleep_ms(50)   # silence inter-note
```

---

## Aller plus loin

- [Mesure du temps en MicroPython (documentation officielle)](https://docs.micropython.org/en/latest/library/time.html) : référence complète de `ticks_ms()`, `ticks_diff()`, et des autres fonctions de temporisation.
- [Wiki STeaMi : Écran OLED](https://wiki.steami.cc/docs/hardware/main-components/display) : description matérielle de l'écran et de la bibliothèque `steami_screen`.
- [Wiki STeaMi : Boutons et buzzer](https://wiki.steami.cc/docs/hardware/main-components/buttons-audio) : description matérielle du buzzer et des boutons sur la carte.
- [Comment faire bouillir un œuf à la perfection (BBC Good Food)](https://www.bbcgoodfood.com/howto/guide/how-boil-egg-perfectly) : la règle du 3, 6, 9 expliquée par des cuisiniers.
---

_Cette fiche fait partie du projet [I-Novmicro #2 : Action EXAO](/projets/inovmicro-exao). Adaptée de la fiche Let's STEAM [`r1as14-minuteur`](/ressources/lets-steam/r1as14-minuteur) sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._


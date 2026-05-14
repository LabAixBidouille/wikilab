---
id: i06-code-morse
title: Envoyer des messages en code Morse avec la STeaMi
sidebar_label: "Code Morse"
sidebar_position: 13
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>
<div style={{flex: 1}}>
# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="2" y="10" width="20" height="4" rx="1" fill="#8a6e18" opacity="0.1"/><circle cx="5" cy="12" r="1.5" fill="#8a6e18" opacity="1.0"/><circle cx="9" cy="12" r="1.5" fill="#8a6e18" opacity="1.0"/><rect x="12" y="11" width="7" height="2" rx="0.5" fill="#8a6e18" opacity="1.0"/><path d="M3 7 Q12 4 21 7" fill="none" stroke="#8a6e18" strokeWidth="1" opacity="0.25"/><path d="M3 17 Q12 20 21 17" fill="none" stroke="#8a6e18" strokeWidth="1" opacity="0.25"/></svg> Envoyer des messages en code Morse avec la STeaMi

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">SteaMi</span>
  <span className="badge badge--warning">MicroPython</span>
</div>
| Projet        | Durée  | Difficulté | Âge       | Logiciel STeaMi testé |
| ------------- | ------ | ---------- | --------- | --------------------- |
| I-Novmicro #2 | 30 min | Avancé     | 11-99 ans | 0.23.1                |

## Matériel et Montage

- 1 carte STeaMi
- 1 câble USB de données (micro-USB pour la STeaMi V1, USB-C pour la STeaMi V2). Attention : un câble qui ne sert qu'à charger un téléphone ne fonctionnera pas.
- 1 ordinateur sous Windows, macOS ou Linux
- Un IDE prenant en charge MicroPython
</div>
<img src="/img/ressources/inovmicro-exao/i06-code-morse/icone.png" alt="Code Morse sur la STeaMi" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />
</div>
---

## De quoi parle-t-on ?

Le **code Morse** est l'une des premières méthodes de télécommunication numérique : il code chaque lettre de l'alphabet par une suite de **points** (signaux courts) et de **tirets** (signaux longs). Inventé dans les années 1830 pour le télégraphe, il a été utilisé pendant plus d'un siècle pour la marine, l'aviation et la radio amateur. Aujourd'hui encore, il reste enseigné comme exemple de **codage à longueur variable** : les lettres les plus fréquentes en anglais (E, T) sont les plus courtes à transmettre, ce qui inspire des techniques de compression modernes.

La STeaMi intègre tout le matériel nécessaire pour transmettre du Morse : un **buzzer piézo** pour le signal sonore, et les **boutons A et B** pour saisir les points et les tirets.

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/i06-code-morse/01-morse-international.svg"
    alt="Tableau du code Morse international"
    style={{maxWidth: '400px', height: 'auto'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    Le code Morse international : chaque lettre est une combinaison de points et de tirets.
  </figcaption>
</figure>
---

## Objectifs d'apprentissage

- Comprendre comment un microcontrôleur génère un son en faisant vibrer un buzzer
- Découvrir comment générer une fréquence à la main en alternant rapidement un signal numérique
- Initialiser un buzzer et des boutons en MicroPython avec le module `machine`
- Programmer un émetteur Morse interactif avec les boutons A et B
- Identifier la structure temporelle du code Morse (point, tiret, espaces inter-lettres et inter-mots)
- Lire et coder une séquence de caractères en Morse
---

## Étape 1 : Construire

Ici, "construire" est rapide : tout le matériel est déjà sur la carte. Le travail consiste à dire au programme MicroPython **comment accéder à chaque composant**.

### Le buzzer de la STeaMi

La carte est équipée d'un [**transducteur piézoélectrique**](https://fr.wikipedia.org/wiki/Capteur_pi%C3%A9zo%C3%A9lectrique) soudé sur la face arrière. Quand on lui applique une tension qui varie rapidement, une fine plaque de céramique à l'intérieur se déforme à la même vitesse, ces vibrations produisent une onde sonore. La fréquence de la tension détermine la **hauteur** du son : 440 Hz donne la note La, 880 Hz donne la note La de l'octave au-dessus, et ainsi de suite. Les fréquences audibles vont d'environ 20 Hz à 20 000 Hz.

:::info[Buzzer actif vs buzzer passif]

Il existe deux familles de buzzers. Un **buzzer actif** contient déjà l'électronique pour générer une fréquence fixe : il suffit de l'alimenter et il sonne (toujours à la même note). Un **buzzer passif**, comme celui de la STeaMi, ne sonne que si on lui envoie un signal qui varie. C'est plus complexe à piloter, mais ça permet de jouer **n'importe quelle note**.

:::

### Générer une fréquence à la main

Le buzzer de la STeaMi se pilote en alternant très rapidement la broche entre **allumé** (3,3 V) et **éteint** (0 V). Si on alterne 440 fois par seconde, le buzzer vibre à 440 Hz et on entend la note La. C'est le programme lui-même qui se charge de ce va-et-vient, d'où l'utilité d'une **fonction `tone()`** qu'on écrit une fois pour toutes et qui gère l'alternance.

### Initialiser les composants

Le firmware STeaMi expose les composants de la carte avec des **noms parlants** qu'on peut utiliser directement dans `Pin(...)`. Pour le programme, il faudra trois composants :

```python
from machine import Pin

SPEAKER = Pin("SPEAKER", Pin.OUT_PP)   # buzzer en sortie push-pull
A_BUTTON = Pin("A_BUTTON", Pin.IN)     # bouton A en entrée
B_BUTTON = Pin("B_BUTTON", Pin.IN)     # bouton B en entrée
```

Deux remarques sur cet extrait :

- **`Pin.OUT_PP`** signifie *output push-pull* : la broche peut activement imposer 0 V ou 3,3 V. C'est ce qu'il faut pour piloter un buzzer.
- **`Pin.IN`** signifie *input* : on lit l'état du bouton sans rien lui imposer. Les boutons A et B de la STeaMi sont câblés avec une résistance externe (4,7 kΩ) qui maintient la broche à 3,3 V quand le bouton est relâché. Quand on appuie, le bouton tire la broche à 0 V. C'est pour cela qu'un bouton appuyé renvoie `0` et un bouton relâché `1` (logique inverse).
### Connecter la carte à l'ordinateur

Brancher la STeaMi à l'ordinateur via le câble USB. Si un des IDE proposés est déjà configuré, vous devriez voir le shell MicroPython (`>>>`).

### Tester le buzzer dans le REPL

Avant d'écrire le programme principal, on peut vérifier que le buzzer répond en tapant directement dans le **REPL**. Les `>>>` ci-dessous sont le prompt affiché par MicroPython dans la console pour indiquer qu'il attend une commande, ne les tapez pas, écrivez seulement ce qui suit.

```python
>>> from machine import Pin
>>> import time
>>> buzzer = Pin("SPEAKER", Pin.OUT_PP)
>>> # Faire vibrer le buzzer à 440 Hz pendant 500 ms
>>> for _ in range(440 * 500 // 1000):
...     buzzer.on()
...     time.sleep_us(1136)   # demi-période de 440 Hz
...     buzzer.off()
...     time.sleep_us(1136)
```

Le buzzer émet la note La pendant une demi-seconde. Ce code marche, mais il est laborieux : on va l'emballer dans une fonction `tone()` réutilisable dès l'étape suivante.

---

## Étape 2 : Programmer

Premier programme : **émettre des points et des tirets selon le bouton appuyé**.

- **Bouton A** → signal court (point) : 100 ms
- **Bouton B** → signal long (tiret) : 300 ms
### Composants utilisés

| Composant | Nom dans le programme | Rôle                                                   |
| --------- | --------------------- | ------------------------------------------------------ |
| Buzzer    | `SPEAKER`             | Sortie numérique pilotée à la main pour générer un son |
| Bouton A  | `A_BUTTON`            | 0 = appuyé, 1 = relâché                                |
| Bouton B  | `B_BUTTON`            | 0 = appuyé, 1 = relâché                                |

### Programme

```python
# Testée avec firmware STeaMi 0.23.1
#
# Émetteur Morse : bouton A = point, bouton B = tiret
# Le buzzer joue un La (440 Hz) pendant 100 ms (point) ou 300 ms (tiret).

from machine import Pin
import time

# Initialisation des composants
SPEAKER = Pin("SPEAKER", Pin.OUT_PP)
A_BUTTON = Pin("A_BUTTON", Pin.IN)
B_BUTTON = Pin("B_BUTTON", Pin.IN)

# Durées en millisecondes (codage Morse standard)
DUREE_POINT = 100
DUREE_TIRET = 300


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


def beep(duree_ms):
    """Joue un La pendant la durée demandée."""
    tone(SPEAKER, 440, duree_ms)


print("Émetteur Morse prêt. A = point, B = tiret. Ctrl+C pour arrêter.")

# Mémorise l'état précédent pour ne déclencher qu'une fois par appui
a_precedent = 1
b_precedent = 1

while True:
    a_actuel = A_BUTTON.value()
    b_actuel = B_BUTTON.value()

    # Détection de transition relâché -> appuyé sur A
    if a_actuel == 0 and a_precedent == 1:
        print(".", end="")
        beep(DUREE_POINT)

    # Détection de transition relâché -> appuyé sur B
    if b_actuel == 0 and b_precedent == 1:
        print("-", end="")
        beep(DUREE_TIRET)

    a_precedent = a_actuel
    b_precedent = b_actuel

    time.sleep_ms(20)
```

### Comment cela fonctionne ?

Le programme s'organise en quatre parties :

- **Initialisation** : on déclare les trois composants en haut du programme. `Pin("SPEAKER", Pin.OUT_PP)` configure la broche du buzzer en sortie ; `Pin("A_BUTTON", Pin.IN)` configure les boutons en entrée (la résistance qui maintient la valeur à `1` au repos est câblée sur la carte, rien à activer côté code).
- **Fonction `tone(pin, freq, duration_ms)`** : c'est elle qui fait vibrer le buzzer. Elle calcule la **demi-période** correspondant à la fréquence demandée (à 440 Hz, une période complète dure 1/440 seconde ≈ 2272 µs, donc la demi-période est 1136 µs), puis elle alterne `pin.on()` / `pin.off()` pendant la durée totale. C'est ce qu'on appelle du **bit-banging** : le programme génère lui-même le signal, sans utiliser de module hardware dédié.
- **Détection de transition** : on ne veut pas qu'un appui maintenu déclenche une rafale de sons. La technique consiste à mémoriser l'état précédent du bouton et à ne déclencher que quand on passe de **relâché** (`1`) à **appuyé** (`0`).
- **Boucle principale** : elle scrute les deux boutons toutes les 20 ms et déclenche le bip approprié.
### Exécution

- **Test rapide** : lancer le programme depuis votre IDE (typiquement bouton **Run** ▶ ou `F5`). Appuyer sur A fait un bip court, sur B un bip long.
- **Programme persistant** : enregistrer le fichier sous le nom **`main.py`** sur la carte. Il sera relancé à chaque démarrage.

### Envoyer un message en Morse

Voici les règles standard pour transmettre un message en Morse :

1. La durée d'un **point** est **1 unité**.
2. La durée d'un **tiret** est **3 unités**.
3. L'**espace entre deux signaux d'une même lettre** est **1 unité**.
4. L'**espace entre deux lettres** est **3 unités**.
5. L'**espace entre deux mots** est **7 unités**.

Avec une unité de 100 ms (comme dans le programme), essayer d'envoyer **SOS** : trois points (S), pause, trois tirets (O), pause, trois points (S). Soit, sur les boutons : `A A A` (pause) `B B B` (pause) `A A A`.

---

## Étape 3 : Améliorer

Trois pistes pour aller plus loin.

### 1. Un retour visuel pour les malentendants

Le buzzer émet un son, mais on peut aussi **allumer la LED RGB rouge** en même temps. Comme ça, le message est visible et audible. Les LEDs RGB de la STeaMi s'utilisent comme n'importe quelle broche, avec les noms parlants `LED_RED`, `LED_GREEN`, `LED_BLUE` (`1` allume, `0` éteint) :

```python
from machine import Pin

LED_RED = Pin("LED_RED", Pin.OUT)

def beep(duree_ms):
    LED_RED.on()                # LED rouge allumée pendant le son
    tone(SPEAKER, 440, duree_ms)
    LED_RED.off()
```

Pour changer de couleur, il suffit de remplacer le nom : `LED_GREEN` pour le vert, `LED_BLUE` pour le bleu.

### 2. Émetteur automatique de SOS

Plutôt que d'appuyer manuellement, on peut faire en sorte que la carte envoie **SOS à la demande** dès qu'on appuie sur le bouton A. Pratique pour un signal de détresse maritime ou un test prolongé.

```python
def point():
    beep(DUREE_POINT)
    time.sleep_ms(100)   # 1 unité de silence inter-signal

def tiret():
    beep(DUREE_TIRET)
    time.sleep_ms(100)

def envoyer_sos():
    # S : trois points
    point(); point(); point()
    time.sleep_ms(300)   # espace inter-lettre (3 unités)
    # O : trois tirets
    tiret(); tiret(); tiret()
    time.sleep_ms(300)
    # S : trois points
    point(); point(); point()
    time.sleep_ms(700)   # espace inter-mot (7 unités)

# Dans la boucle principale, déclencher envoyer_sos() sur appui A
```

### 3. Encoder un message dans le programme

L'extension la plus riche : créer un **dictionnaire** qui associe chaque lettre à sa séquence Morse, puis écrire une fonction qui transforme une chaîne de caractères en sons.

```python
MORSE = {
    'A': '.-',   'B': '-...', 'C': '-.-.', 'D': '-..',
    'E': '.',    'F': '..-.', 'G': '--.',  'H': '....',
    'I': '..',   'J': '.---', 'K': '-.-',  'L': '.-..',
    'M': '--',   'N': '-.',   'O': '---',  'P': '.--.',
    'Q': '--.-', 'R': '.-.',  'S': '...',  'T': '-',
    'U': '..-',  'V': '...-', 'W': '.--',  'X': '-..-',
    'Y': '-.--', 'Z': '--..',
    '0': '-----','1': '.----','2': '..---','3': '...--',
    '4': '....-','5': '.....','6': '-....','7': '--...',
    '8': '---..','9': '----.',
}

def envoyer_message(texte):
    for caractere in texte.upper():
        if caractere == ' ':
            time.sleep_ms(700)   # espace inter-mot
            continue
        sequence = MORSE.get(caractere, '')
        for signal in sequence:
            if signal == '.':
                beep(DUREE_POINT)
            else:
                beep(DUREE_TIRET)
            time.sleep_ms(100)   # silence inter-signal
        time.sleep_ms(300)       # silence inter-lettre

envoyer_message("SOS HELLO WORLD")
```

C'est un excellent exercice pour découvrir les **structures de données** (dictionnaires) et les **boucles imbriquées** : la boucle externe parcourt les lettres, la boucle interne parcourt les points et tirets de chaque lettre.

---

## Aller plus loin

- [Code Morse international (Wikipédia)](https://fr.wikipedia.org/wiki/Code_Morse_international) : histoire, table complète, règles de timing détaillées.
- [Capteur piézoélectrique (Wikipédia)](https://fr.wikipedia.org/wiki/Capteur_pi%C3%A9zo%C3%A9lectrique) : principes physiques du transducteur utilisé pour générer le son.
- [Wiki STeaMi : Boutons et buzzer](https://wiki.steami.cc/docs/hardware/main-components/buttons-audio) : description matérielle du buzzer et des boutons sur la carte.
---

_Cette fiche fait partie du projet [I-Novmicro #2 : Action EXAO](/projets/inovmicro-exao). Adaptée du projet [Let's STEAM](/projets/lets-steam) (fiche [`r1as06-morse`](/ressources/lets-steam/r1as06-morse)) sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._


---
id: i14-minuteur-electronique
title: Minuteur électronique
sidebar_label: "Minuteur électronique"
sidebar_position: 14
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>
<div style={{flex: 1}}>
# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><circle cx="12" cy="13" r="9" fill="#8a6e18" fillOpacity="0.1"/><circle cx="12" cy="13" r="7" fill="#8a6e18" fillOpacity="0.25"/><circle cx="12" cy="13" r="1" fill="#8a6e18"/><line x1="12" y1="13" x2="12" y2="8" stroke="#8a6e18" strokeWidth="1.5" strokeLinecap="round"/><line x1="12" y1="13" x2="15" y2="15" stroke="#8a6e18" strokeWidth="1.5" strokeLinecap="round"/><rect x="10" y="2" width="4" height="2" rx="1" fill="#8a6e18"/><line x1="18" y1="5" x2="19.5" y2="3.5" stroke="#8a6e18" strokeWidth="1.5" strokeLinecap="round"/></svg> Minuteur électronique

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">SteaMi</span>
  <span className="badge badge--warning">MicroPython</span>
</div>

| Projet        | Durée  | Difficulté | Âge       | Logiciel STeaMi testé |
| ------------- | ------ | ---------- | --------- | --------------------- |
| I-Novmicro #2 | 35 min | Avancé     | 11-99 ans | 0.23.1                |

## Matériel et Montage

- 1 carte STeaMi
- 1 câble USB de données (micro-USB pour la STeaMi V1, USB-C pour la STeaMi V2)
- 1 ordinateur sous Windows, macOS ou Linux
- Un IDE compatible MicroPython : Thonny (voir la fiche [Thonny : Prise en main de MicroPython](/ressources/inovmicro-exao/t03-decouverte-thonny)) ou tout autre éditeur compatible (Mu, VS Code, Vittascience, `mpremote`...).

</div>
<img src="/img/ressources/inovmicro-exao/i14-minuteur-electronique/icone.png" alt="Minuteur électronique sur la STeaMi" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />
</div>

---

## De quoi parle-t-on ?

Tu connais ces petits minuteurs en plastique en forme d'œuf qu'on trouve dans certaines cuisines ? On les remonte d'un tour, on les pose sur la table, et **ding !** ils sonnent quand c'est l'heure. C'est l'objet le plus simple imaginable, mais sans lui le drame est garanti : œuf trop cuit, blanc caoutchouteux, jaune sec et farineux. Personne ne veut ça.

Dans cette activité, on va **construire son propre minuteur à œufs** avec la STeaMi. Pas besoin d'acheter le petit gadget en plastique : on a tout ce qu'il faut intégré dans la carte. Le minuteur affichera le décompte en grand sur l'écran (style chronomètre de four), une barre de progression montrera le temps qui passe, et le buzzer sonnera l'alarme quand l'œuf est prêt. **Après l'avoir réalisé, tu seras un vrai grand chef !**

Pour faire bouillir un œuf à la perfection, les chefs utilisent la règle des **3, 6, 9 minutes** :

- **3 minutes** : œuf à la coque (blanc cuit, jaune coulant pour la mouillette)
- **6 minutes** : œuf mollet (blanc cuit, jaune crémeux qui se savoure tiède)
- **9 minutes** : œuf dur (idéal pour les salades et les pique-niques)

Et le même squelette de programme servira ensuite pour plein d'autres usages : compter tes 25 minutes de devoirs Pomodoro, chronométrer un sprint de 30 secondes, ou faire un sablier numérique pour les petits de la famille.

:::info[Rien à câbler, tout est intégré]
L'écran OLED, le buzzer et les boutons A et B sont déjà soudés à la STeaMi. Aucun montage à faire : on plonge directement dans le code.
:::

---

## Objectifs d'apprentissage

À la fin de cette activité, l'élève sera capable de :

- **Construire un objet utile et amusant** : un vrai minuteur de cuisine en assemblant un écran, un buzzer et des boutons dans un seul programme cohérent.
- **Lire un écran graphique comme un vrai cadran** : transformer une donnée brute (des millisecondes) en information utile (un chrono `MM:SS` lisible, une barre qui se vide, une mélodie qui sonne).
- **Mesurer le temps qui passe** sans figer le programme, pour que l'écran puisse se rafraîchir pendant le décompte.
- **Détourner le squelette** pour inventer d'autres usages : Pomodoro pour les devoirs, chronomètre de sport, sablier numérique pour les enfants, minuteur de jeu de société...
---

## Étape 1 : Construire

« Construire » se résume ici à comprendre comment accéder aux composants de la carte : tout est déjà soudé.

### L'écran OLED de la STeaMi

La STeaMi intègre un [**écran OLED 128 × 128 pixels**](https://wiki.steami.cc/docs/hardware/main-components/display) piloté via SPI. On l'utilise à travers le module `steami_screen`, qui fournit une API haut niveau avec des widgets prêts à l'emploi : titre, valeur, barre de progression, jauge, etc.

L'initialisation est toujours la même séquence, on la copie telle quelle depuis les exemples :

```python
import ssd1327
from machine import SPI, Pin
from steami_screen import Screen, SSD1327Display

spi = SPI(1)
broche_dc = Pin("DATA_COMMAND_DISPLAY")
broche_reset = Pin("RST_DISPLAY")
broche_cs = Pin("CS_DISPLAY")

oled_brut = ssd1327.WS_OLED_128X128_SPI(spi, broche_dc, broche_reset, broche_cs)
pilote_oled = SSD1327Display(oled_brut)
ecran = Screen(pilote_oled)
```

:::info[Première fois avec l'écran OLED ?]

Si tu n'as encore jamais piloté l'écran OLED, la fiche [Afficher du texte sur l'écran OLED](/ressources/inovmicro-exao/i10-texte-oled) explique en détail le fonctionnement de la librairie `steami_screen`. Tu peux la consulter en parallèle si certaines lignes te paraissent obscures.

:::

Une fois l'objet `ecran` créé, on dispose notamment de :

- `ecran.clear()` : efface l'écran
- `ecran.title("texte")` : affiche un titre en haut
- `ecran.value(val, label="...", unit="...")` : affiche une grande valeur au centre
- `ecran.bar(val, max_val=100)` : dessine une barre de progression horizontale
- `ecran.text("texte", at="S")` : texte positionné par point cardinal (N, S, E, W, CENTER...)
- `ecran.show()` : envoie le tampon vers l'écran physique
:::info[Le tampon d'affichage]
L'écran ne se met pas à jour automatiquement quand on lui envoie du contenu. Toutes les fonctions de dessin modifient un **tampon en mémoire**. C'est seulement `screen.show()` qui transfère ce tampon vers l'écran physique. Cette approche évite les scintillements : on prépare toute l'image, puis on l'affiche d'un coup.
:::

### Le buzzer

Le buzzer de la STeaMi est un [transducteur piézoélectrique](https://fr.wikipedia.org/wiki/Capteur_pi%C3%A9zo%C3%A9lectrique) passif : quand on lui applique une tension qui alterne rapidement, une fine plaque de céramique vibre et produit un son. La fréquence de l'alternance détermine la hauteur de la note. On le pilote avec une fonction `tone()` qui génère la fréquence voulue par bit-banging :

```python
from machine import Pin
import time

buzzer = Pin("SPEAKER", Pin.OUT_PP)


def jouer_note(broche, frequence, duree_ms):
    """Fait sonner le buzzer à la fréquence demandée pendant duree_ms."""
    if frequence == 0:
        time.sleep_ms(duree_ms)
        return
    periode_us = int(1_000_000 / frequence)
    demi_periode = periode_us // 2
    fin = time.ticks_add(time.ticks_us(), duree_ms * 1000)
    while time.ticks_diff(fin, time.ticks_us()) > 0:
        broche.on()
        time.sleep_us(demi_periode)
        broche.off()
        time.sleep_us(demi_periode)
```

Cette fonction `jouer_note()` est la même que celle qu'on a vue dans la fiche [Composer une mélodie](/ressources/inovmicro-exao/i07-musique) : on génère le signal par _bit-banging_ (allumer-éteindre rapidement la broche du buzzer).

### Les boutons A et B

Les boutons se lisent via `Pin("A_BUTTON", Pin.IN)` et `Pin("B_BUTTON", Pin.IN)`. Rappel : un bouton **appuyé** renvoie `0`, **relâché** renvoie `1` (logique inverse, car la broche est tirée à 3,3 V au repos par une résistance de rappel externe). Voir la fiche [Utiliser des boutons-poussoirs](/ressources/inovmicro-exao/i03-boutons) pour le détail.

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
`time.ticks_ms()` renvoie le nombre de millisecondes écoulées depuis le démarrage de la carte. Ce compteur finit par revenir à zéro après quelques semaines. `ticks_diff(a, b)` calcule la différence `a - b` en tenant compte de ce rebouclage éventuel : c'est pour ça qu'on l'utilise à la place d'une simple soustraction.
:::

### Connecter la carte à l'ordinateur

Brancher la STeaMi à l'ordinateur via le câble USB. Si l'IDE est déjà configuré (voir la fiche [Thonny : Prise en main de MicroPython](/ressources/inovmicro-exao/t03-decouverte-thonny) si vous démarrez), la console MicroPython doit afficher `>>>`. C'est **l'invite** (parfois appelée « prompt » en anglais) : un signe qui apparaît en début de ligne pour vous dire que la console est prête à recevoir une commande.

---

## Étape 2 : Programmer

Le programme propose deux modes, sélectionnés au démarrage avec les boutons :

- **Bouton A** → minuteur de 3 minutes (œuf à la coque)
- **Bouton B** → minuteur de 6 minutes (œuf mollet)
- **Boutons A + B simultanément** → minuteur de 9 minutes (œuf dur)
Pendant le décompte, l'écran affiche le temps restant en minutes et secondes, ainsi qu'une barre de progression qui se vide au fil du temps. Quand le minuteur atteint zéro, le buzzer joue une mélodie d'alarme.

### Composants utilisés

| Composant  | Nom dans le programme | Rôle                                                     |
| ---------- | --------------------- | -------------------------------------------------------- |
| Écran OLED | objet `ecran`         | Affichage du temps restant et de la barre de progression |
| Buzzer     | objet `buzzer`        | Alarme sonore à la fin du décompte                       |
| Bouton A   | objet `bouton_a`      | Sélectionner 3 min                                       |
| Bouton B   | objet `bouton_b`      | Sélectionner 6 min                                       |

### Programme

```python
# Testée avec firmware STeaMi 0.23.1
#
# Minuteur à œufs : bouton A = 3 min, bouton B = 6 min, A+B = 9 min
# L'écran OLED affiche le décompte (MM:SS) et une barre de progression.
# Le buzzer sonne une mélodie d'alarme à la fin.

import ssd1327
import time
from machine import SPI, Pin
from steami_screen import Screen, SSD1327Display

# --- Écran OLED ---
spi = SPI(1)
broche_dc = Pin("DATA_COMMAND_DISPLAY")
broche_reset = Pin("RST_DISPLAY")
broche_cs = Pin("CS_DISPLAY")
oled_brut = ssd1327.WS_OLED_128X128_SPI(spi, broche_dc, broche_reset, broche_cs)
pilote_oled = SSD1327Display(oled_brut)
ecran = Screen(pilote_oled)

# --- Boutons et buzzer ---
buzzer = Pin("SPEAKER", Pin.OUT_PP)
bouton_a = Pin("A_BUTTON", Pin.IN)
bouton_b = Pin("B_BUTTON", Pin.IN)


def jouer_note(broche, frequence, duree_ms):
    """Fait sonner le buzzer à la fréquence demandée pendant duree_ms."""
    if frequence == 0:
        time.sleep_ms(duree_ms)
        return
    periode_us = int(1_000_000 / frequence)
    demi_periode = periode_us // 2
    fin = time.ticks_add(time.ticks_us(), duree_ms * 1000)
    while time.ticks_diff(fin, time.ticks_us()) > 0:
        broche.on()
        time.sleep_us(demi_periode)
        broche.off()
        time.sleep_us(demi_periode)


def jouer_alarme():
    """Mélodie d'alarme : trois séries de bips descendants."""
    for _ in range(3):
        jouer_note(buzzer, 880, 150)
        time.sleep_ms(80)
        jouer_note(buzzer, 660, 150)
        time.sleep_ms(80)
        jouer_note(buzzer, 440, 300)
        time.sleep_ms(200)


def afficher_decompte(restant_ms, total_ms):
    """Met à jour l'écran avec le temps restant et la barre de progression."""
    restant_s = restant_ms // 1000
    minutes = restant_s // 60
    secondes = restant_s % 60
    texte_temps = "{:02d}:{:02d}".format(minutes, secondes)

    # Pourcentage de temps restant (0 a 100)
    pourcent = int(100 * restant_ms / total_ms)

    ecran.clear()
    ecran.value(texte_temps, label="Minuteur a oeufs")
    ecran.bar(pourcent, max_val=100)
    ecran.show()


def choisir_duree():
    """Affiche le menu de choix et attend un appui sur A, B ou A+B."""
    ecran.clear()
    ecran.title("Choisir duree")
    ecran.text(" A  = 3 min", at="NW")
    ecran.text(" B  = 6 min", at="W")
    ecran.text(" A+B = 9 min", at="SW")
    ecran.show()

    # Attendre que les boutons soient relâchés avant de scruter
    while bouton_a.value() == 0 or bouton_b.value() == 0:
        time.sleep_ms(20)

    while True:
        a = bouton_a.value()
        b = bouton_b.value()

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
        ecoule = time.ticks_diff(maintenant, debut)
        restant = duree_ms - ecoule

        if restant <= 0:
            ecran.clear()
            ecran.value("00:00", label="Temps ecoule !")
            ecran.show()
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

Le programme s'organise en **cinq fonctions** bien séparées, et la boucle principale n'a plus que trois lignes :

- **`jouer_note(broche, frequence, duree_ms)`** : génère une fréquence par _bit-banging_ sur la broche du buzzer. Elle alterne `broche.on()` / `broche.off()` à la vitesse correspondant à la fréquence demandée.
- **`jouer_alarme()`** : enchaîne trois notes descendantes (880 Hz → 660 Hz → 440 Hz) répétées trois fois pour former une mélodie reconnaissable.
- **`afficher_decompte(restant_ms, total_ms)`** : calcule le temps restant en minutes/secondes, convertit ce reste en pourcentage (0 à 100), puis utilise les widgets `steami_screen` : `ecran.value()` pour afficher le chrono `MM:SS` en grand, et `ecran.bar()` pour la barre de progression qui se vide au fil du temps.
- **`choisir_duree()`** : affiche le menu avec `ecran.text(..., at="...")` positionné par points cardinaux, puis scrute les deux boutons. La détection A+B simultané est possible parce qu'on lit les deux broches au même instant dans la boucle.
- **`lancer_minuteur(duree_ms)`** : c'est le cœur du programme, la **boucle non bloquante**. Elle calcule à chaque itération le temps restant grâce à `ticks_diff()`, met à jour l'écran, et se termine dès que le compteur atteint zéro.

:::info[Pourquoi un écran qui se rafraîchit, et pas juste un long `sleep` ?]

La façon la plus simple d'attendre 3 minutes en Python, c'est d'écrire `time.sleep(180)`. Sauf que pendant ces 180 secondes, le programme dort comme une marmotte : impossible de mettre à jour l'écran, impossible d'écouter un bouton, impossible d'interrompre le minuteur en cours de route. Si tu te trompes de durée, tu attends 3 minutes pour pouvoir recommencer.

Notre minuteur fait autrement : il regarde l'horloge toutes les 100 millisecondes, recalcule combien il reste, redessine l'écran, et **seulement après** attend 100 ms avant de recommencer. C'est ce qui rend le chrono « vivant » : la barre se vide en continu, et le programme reste prêt à réagir.

C'est la même technique qu'utilisent les jeux vidéo, les applications de téléphone, les distributeurs de billets : ne jamais bloquer trop longtemps, redessiner souvent, rester à l'écoute.

:::

### Exécution

- **Test rapide** : lancer le programme depuis votre IDE (bouton **Run** ▶ ou `F5`). L'écran affiche le menu de choix, appuyer sur A lance un minuteur de 3 minutes.
- **Programme persistant** : enregistrer le fichier sous le nom **`main.py`** sur la carte. Il sera relancé à chaque démarrage.
---

## Étape 3 : Améliorer

Quatre pistes pour rendre ton minuteur encore plus utile (ou plus rigolo).

### 1. Mode Pomodoro pour les devoirs

Tes parents te tannent pour que tu fasses tes devoirs sans toucher au téléphone ? Voici le hack ultime : la **technique Pomodoro**, mise au point par un étudiant italien dans les années 1980. On bosse 25 minutes, on souffle 5 minutes, on recommence. Au bout de 4 cycles, on prend une vraie pause de 15 minutes.

Adapte le minuteur en remplaçant les durées 3/6/9 par 25/5/15 :

```python
DUREE_TRAVAIL = 25 * 60 * 1000
DUREE_PAUSE_COURTE = 5 * 60 * 1000
DUREE_PAUSE_LONGUE = 15 * 60 * 1000
```

Bonus : enchaîne automatiquement travail → pause courte → travail → ... et joue un son différent au début de chaque phase.

### 2. Mode pause sur le minuteur

L'eau bout trop fort, tu dois baisser le feu, et pendant ce temps tu voudrais bien arrêter le décompte. En l'état, impossible : le minuteur fonce jusqu'au bout. Ajoute un **bouton pause** en surveillant le bouton A dans la boucle principale :

```python
def lancer_minuteur(duree_ms):
    debut = time.ticks_ms()
    temps_pause = 0
    en_pause = False

    while True:
        if bouton_a.value() == 0 and not en_pause:
            # Mettre en pause
            en_pause = True
            debut_pause = time.ticks_ms()
            ecran.clear()
            ecran.title("En pause")
            ecran.text("A = reprendre", at="S")
            ecran.show()
            time.sleep_ms(300)   # anti-rebond

        if bouton_a.value() == 0 and en_pause:
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

Le « bip-bip-bip » d'alarme c'est efficace, mais ça manque de personnalité. Remplace-le par une vraie mélodie : une gamme ascendante triomphale, le thème de Tetris, le générique d'un dessin animé... À toi de choisir ce qui joue dans ta cuisine quand l'œuf est prêt.

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
    for frequence, duree in MELODIE:
        jouer_note(buzzer, frequence, duree)
        time.sleep_ms(50)   # silence inter-note
```

Pour des mélodies plus ambitieuses (Mario, Tetris, Zelda), va voir la fiche [Composer une mélodie](/ressources/inovmicro-exao/i07-musique) qui propose plusieurs partitions de jeux vidéo emblématiques.

### 4. Calibrer ton minuteur pour qu'il soit précis à la seconde

Le minuteur dérive légèrement : il met un peu plus de 3 minutes à atteindre zéro parce que rafraîchir l'écran et lire les boutons prend du temps. Pour les œufs, ce n'est pas grave (5 secondes d'écart ne ruinent pas une coque). Mais si tu veux chronométrer un sprint de 100 m précis, ça pose problème.

**L'expérience scientifique** : lance le minuteur de 3 minutes et déclenche en même temps le chronomètre de ton téléphone. Quand le buzzer sonne, regarde combien de temps s'est vraiment écoulé. Si tu mesures 3 min 05 s (185 s) pour une consigne de 180 s, applique un produit en croix pour ajuster :

```python
# Si le minuteur affiche 0 alors qu'il s'est écoulé 185 s réelles
# au lieu des 180 s annoncées, on accélère le décompte de 5/185 :
time.sleep_ms(97)   # à la place de 100 (97 ≈ 100 × 180 / 185)
```

C'est la même méthode que celle qu'utilisent les horlogers et les ingénieurs en métrologie : on mesure, on compare, on corrige.

---

## Aller plus loin

### Pour comprendre

- **[Mesure du temps en MicroPython (documentation officielle)](https://docs.micropython.org/en/latest/library/time.html)** : référence complète de `ticks_ms()`, `ticks_diff()`, et des autres fonctions de temporisation. Comprendre pourquoi MicroPython propose deux familles de fonctions de temps (`sleep` bloquant vs `ticks` non bloquant).
- **[Programmation événementielle (Wikipédia)](https://fr.wikipedia.org/wiki/Programmation_%C3%A9v%C3%A9nementielle)** : le paradigme général dont notre boucle non bloquante est un exemple simple. Toutes les interfaces graphiques modernes (téléphone, ordinateur, console de jeu) reposent sur ce principe.
- **[Horloge temps réel (RTC) (Wikipédia)](https://fr.wikipedia.org/wiki/Horloge_temps_r%C3%A9el)** : pourquoi `ticks_ms()` n'est pas adapté pour mesurer de longues durées (cf. rebouclage tous les ~25 jours), et comment les ordinateurs gardent l'heure même éteints.

### Pour s'inspirer

- **[Top Chef, l'épreuve de la guerre des restos](https://fr.wikipedia.org/wiki/Top_Chef_(France))** : dans certaines émissions de cuisine, les candidats ont par exemple 30 minutes pour préparer un plat complet, sous l'œil d'un minuteur géant. La tension est palpable, la cuisine devient un sport. Ton minuteur fait pareil, en plus discret.
- **[Le compte à rebours des fusées SpaceX et Apollo](https://fr.wikipedia.org/wiki/Compte_%C3%A0_rebours)** : « T moins 10... 9... 8... ». Quand des humains montent dans une fusée, chaque seconde du décompte est utile : test des moteurs, ouverture des vannes, vérification finale. Le minuteur est devenu le **rythme officiel** des grands lancements.
- **[Mission Impossible et le détonateur qui clignote](https://fr.wikipedia.org/wiki/Mission_impossible_(film,_1996))** : au cinéma, le minuteur sur la bombe est devenu un personnage à part entière. Combien de fois Tom Cruise a-t-il coupé le bon fil à 0:00:01 ? Le minuteur, c'est aussi un outil de **mise en scène**.
- **[Speedrun de Super Mario 64](https://www.youtube.com/results?search_query=super+mario+64+speedrun+16+stars)** : il y a des joueurs qui terminent Mario 64 en moins de 15 minutes. Le chronomètre tourne en permanence en haut de l'écran, et une communauté entière compare les records à la milliseconde près. Ton minuteur peut servir d'arbitre pour tes propres records.
- **[Time's Up et le sablier qu'on retourne](https://fr.wikipedia.org/wiki/Time%27s_Up_!)** : dans ce jeu de société, un sablier de 30 secondes rythme chaque manche. Avec ta STeaMi, tu peux remplacer le sablier en plastique qu'on perd toujours, et même afficher des cris « VITE ! » à l'écran quand il ne reste que 5 secondes.
- **[Pomodoro Technique (Wikipédia)](https://fr.wikipedia.org/wiki/Technique_Pomodoro)** : la méthode des 25 minutes de travail / 5 minutes de pause, inventée par un étudiant italien équipé d'un... minuteur de cuisine en forme de tomate (_pomodoro_ en italien). Cf. l'amélioration n°1.
- **[Time Timer, le minuteur pour les petits et les personnes autistes](https://www.timetimer.com/)** : un disque rouge qui se vide en temps réel, sans chiffres. Pour qui ne sait pas encore lire l'heure, ça change la vie. C'est exactement ce que fait notre barre de progression.
- **[Comment faire bouillir un œuf à la perfection (BBC Good Food)](https://www.bbcgoodfood.com/howto/guide/how-boil-egg-perfectly)** : la règle du 3, 6, 9 expliquée par des cuisiniers, avec toutes les nuances (eau bouillante vs froide, taille de l'œuf, altitude). Le sérieux des chefs pour cuire un œuf est inspirant.

---

_Cette fiche fait partie du projet [I-Novmicro #2 : Action EXAO](/projets/inovmicro-exao). Adaptée du projet [Let's STEAM](/projets/lets-steam) (fiche [`r1as14-minuteur`](/ressources/lets-steam/r1as14-minuteur)) sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._


---
id: i07-musique
title: Composer une mélodie
sidebar_label: 'Composer une mélodie'
sidebar_position: 7
---

import ABCNotation from '@site/src/components/ABCNotation';

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>
<div style={{flex: 1}}>
# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="1" y="1" width="22" height="22" rx="3" fill="#8a6e18" opacity="0.1"/><path d="M9 17.5V7l10-2v10.5" stroke="#8a6e18" strokeWidth="1.5" fill="none" opacity="0.25"/><ellipse cx="6.5" cy="17.5" rx="2.5" ry="2" fill="#8a6e18"/><ellipse cx="16.5" cy="15.5" rx="2.5" ry="2" fill="#8a6e18"/><line x1="9" y1="10" x2="19" y2="8" stroke="#8a6e18" strokeWidth="1" opacity="0.25"/></svg> Composer une mélodie

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
- 1 câble USB de données (micro-USB pour la STeaMi V1, USB-C pour la STeaMi V2).
- 1 ordinateur sous Windows, macOS ou Linux
- Un IDE compatible MicroPython : Thonny (voir la fiche [Thonny : Prise en main de MicroPython](/ressources/inovmicro-exao/t03-decouverte-thonny)) ou tout autre éditeur compatible (Mu, VS Code, Vittascience, `mpremote`...).

</div>
<img src="/img/ressources/inovmicro-exao/i07-musique/icone.png" alt="Composer une mélodie sur la STeaMi" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />
</div>

---

## De quoi parle-t-on ?

Le **son** est une **vibration de l'air** qui se propage jusqu'à nos oreilles. La hauteur de la note dépend de la **fréquence** de cette vibration : 440 vibrations par seconde (440 Hz) donnent un La, le double (880 Hz) donne le La de l'octave au-dessus. Plus la fréquence est élevée, plus la note est aiguë.

La STeaMi intègre un petit composant capable de produire ces vibrations : un **buzzer piézoélectrique** soudé au dos de la carte. En faisant osciller très rapidement la tension qu'il reçoit, le programme peut le faire vibrer à n'importe quelle fréquence audible et donc jouer n'importe quelle note. En enchaînant ces notes selon un rythme, on obtient une **mélodie**.

Dans cette fiche, on apprend à piloter le buzzer en MicroPython, à choisir une fréquence pour jouer une note précise, et à enchaîner ces notes pour composer une petite mélodie qui tournera en boucle.

---

## Objectifs d'apprentissage

- Comprendre la relation entre **fréquence** d'un signal électrique et **hauteur** d'une note
- Découvrir comment un microcontrôleur génère un son en faisant osciller un buzzer (technique du _bit-banging_)
- Représenter une mélodie en MicroPython sous forme de **liste de couples (fréquence, durée)**
- Utiliser une **fonction** pour abstraire la génération du son et écrire une partition lisible
- Utiliser une boucle `for` pour parcourir une séquence de notes et les jouer dans l'ordre

---

## Étape 1 : Construire

Ici, « construire » est rapide : le buzzer est déjà soudé à la carte, aucun câblage à faire.

### 1. Localiser le buzzer

Le buzzer (officiellement un **transducteur piézoélectrique**) est soudé sur la **face arrière** de la STeaMi. Il est accessible dans le code sous le nom de broche `SPEAKER`.

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/i07-musique/buzzer.png"
    alt="Emplacement du buzzer sur la face arrière de la STeaMi"
    style={{maxWidth: '450px', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    Le buzzer piézo intégré au dos de la STeaMi.
  </figcaption>
</figure>

:::info[D'où vient le son ?]

Un buzzer piézoélectrique contient une fine **plaque de céramique** qui se déforme quand on lui applique une tension. Si la tension varie très vite (par exemple 440 fois par seconde), la plaque vibre à la même vitesse et pousse l'air autour d'elle : on entend une note.

Sur la STeaMi, ce n'est pas un circuit dédié qui génère le signal : c'est **le programme lui-même** qui allume et éteint la broche `SPEAKER` à la bonne cadence. On parle de **_bit-banging_** : on génère le signal « à la main » bit par bit. Beaucoup moins efficace qu'un module dédié, mais beaucoup plus pédagogique et flexible.

:::

### 2. Notes et fréquences

Chaque note de musique correspond à une fréquence précise, en hertz (Hz) :

| Note    | Octave grave (Hz) | Octave aiguë (Hz) |
| ------- | ----------------- | ----------------- |
| Do (C)  | 262               | 523               |
| Ré (D)  | 294               | 587               |
| Mi (E)  | 330               | 659               |
| Fa (F)  | 349               | 698               |
| Sol (G) | 392               | 784               |
| La (A)  | 440               | 880               |
| Si (B)  | 494               | 988               |

Bon à savoir : doubler la fréquence d'une note donne la même note à l'octave au-dessus. C'est la base de toute la musique tonale.

### 3. Lire une portée

Sur une partition, la **hauteur** d'une note (son nom) se lit à sa position verticale sur les cinq lignes de la **portée** : plus la note est haute sur la portée, plus sa fréquence est élevée et plus le son est aigu. Le symbole en tête de portée, la **clef de sol**, fixe le repère : sur la deuxième ligne en partant du bas, on lit toujours un Sol.

| Note    | Octave grave                                                       | Octave aiguë                                                       |
| ------- | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| Do (C)  | <ABCNotation inline>{"X:1\nM:none\nL:1/4\nK:C\nC"}</ABCNotation>   | <ABCNotation inline>{"X:1\nM:none\nL:1/4\nK:C\nc"}</ABCNotation>   |
| Ré (D)  | <ABCNotation inline>{"X:1\nM:none\nL:1/4\nK:C\nD"}</ABCNotation>   | <ABCNotation inline>{"X:1\nM:none\nL:1/4\nK:C\nd"}</ABCNotation>   |
| Mi (E)  | <ABCNotation inline>{"X:1\nM:none\nL:1/4\nK:C\nE"}</ABCNotation>   | <ABCNotation inline>{"X:1\nM:none\nL:1/4\nK:C\ne"}</ABCNotation>   |
| Fa (F)  | <ABCNotation inline>{"X:1\nM:none\nL:1/4\nK:C\nF"}</ABCNotation>   | <ABCNotation inline>{"X:1\nM:none\nL:1/4\nK:C\nf"}</ABCNotation>   |
| Sol (G) | <ABCNotation inline>{"X:1\nM:none\nL:1/4\nK:C\nG"}</ABCNotation>   | <ABCNotation inline>{"X:1\nM:none\nL:1/4\nK:C\ng"}</ABCNotation>   |
| La (A)  | <ABCNotation inline>{"X:1\nM:none\nL:1/4\nK:C\nA"}</ABCNotation>   | <ABCNotation inline>{"X:1\nM:none\nL:1/4\nK:C\na"}</ABCNotation>   |
| Si (B)  | <ABCNotation inline>{"X:1\nM:none\nL:1/4\nK:C\nB"}</ABCNotation>   | <ABCNotation inline>{"X:1\nM:none\nL:1/4\nK:C\nb"}</ABCNotation>   |

Les deux Do (ou les deux Ré, etc.) sont la même note à une octave d'écart : visuellement, ils se ressemblent mais sont écrits plus haut sur la portée à droite, exactement comme leur fréquence qui double d'une colonne à l'autre.

### 4. Connecter la carte à l'ordinateur

Brancher la STeaMi à l'ordinateur via le câble USB. Si l'IDE est déjà configuré (voir la fiche [Thonny : Prise en main de MicroPython](/ressources/inovmicro-exao/t03-decouverte-thonny) si vous démarrez), la console MicroPython doit afficher `>>>`. C'est **l'invite** (parfois appelée « prompt » en anglais) : un signe qui apparaît en début de ligne pour vous dire que la console est prête à recevoir une commande.

### 5. Lancer le programme

Notre premier programme va **jouer une mélodie en boucle**. Le code complet est donné à l'[Étape 2 : Programmer](#étape-2--programmer) ci-dessous. Copiez-le dans votre IDE.

Une fois le code en place, deux manières de le lancer :

- **Test rapide** : lancer le programme depuis l'IDE (typiquement bouton **Run** ▶ ou `F5`). La mélodie démarre tout de suite.
- **Programme persistant** : enregistrer le fichier sous le nom **`main.py`** sur la carte. La STeaMi jouera la mélodie à chaque démarrage, même débranchée d'un ordinateur (tant qu'elle est alimentée par sa batterie).

---

## Étape 2 : Programmer

### Le code

```python
# Testée avec firmware STeaMi 0.23.1
from machine import Pin
import time

speaker = Pin('SPEAKER', Pin.OUT_PP)

# Fréquences des notes en hertz (Hz). On garde le nom français des notes ;
# le chiffre indique l'octave (3 = très grave, 4 = grave, 5 = aigu).
LA_3 = 220
SI_3 = 247
DO_4 = 262
RE_4 = 294
MI_4 = 330
FA_4 = 349
SOL_4 = 392
LA_4 = 440

# Durées en millisecondes (ms). Notre partition n'utilise que CROCHE et NOIRE,
# mais on pourrait ajouter DOUBLE_CROCHE = 125, BLANCHE = 1000, RONDE = 2000
# pour enrichir le vocabulaire rythmique (voir tableau ci-dessous).
CROCHE = 250
NOIRE = 500

# Le thème principal de Tetris ("Korobeïniki", chanson traditionnelle
# russe de 1861, popularisée par le jeu Nintendo en 1989), transposé
# une octave en dessous pour mieux sonner sur le buzzer.
# Chaque tuple est une note (fréquence, durée).
partition = [
    (MI_4, NOIRE),
    (SI_3, CROCHE),
    (DO_4, CROCHE),
    (RE_4, NOIRE),
    (DO_4, CROCHE),
    (SI_3, CROCHE),
    (LA_3, NOIRE),
    (LA_3, CROCHE),
    (DO_4, CROCHE),
    (MI_4, NOIRE),
    (RE_4, CROCHE),
    (DO_4, CROCHE),
    (SI_3, NOIRE),
    (SI_3, CROCHE),
    (DO_4, CROCHE),
    (RE_4, NOIRE),
    (MI_4, NOIRE),
    (DO_4, NOIRE),
    (LA_3, NOIRE),
    (LA_3, NOIRE),
    (RE_4, NOIRE),
    (FA_4, CROCHE),
    (LA_4, CROCHE),
    (LA_4, CROCHE),
    (SOL_4, CROCHE),
    (FA_4, CROCHE),
    (MI_4, NOIRE),
    (DO_4, NOIRE),
    (MI_4, NOIRE),
    (RE_4, CROCHE),
    (DO_4, CROCHE),
    (SI_3, NOIRE),
    (SI_3, CROCHE),
]


def jouer_note(pin, frequence, duree_ms):
    """Fait vibrer le buzzer à la fréquence demandée pendant duree_ms."""
    if frequence == 0:
        time.sleep_ms(duree_ms)
        return
    periode_us = int(1_000_000 / frequence)
    demi_periode = periode_us // 2
    fin = time.ticks_add(time.ticks_us(), duree_ms * 1000)
    while time.ticks_diff(fin, time.ticks_us()) > 0:
        pin.on()
        time.sleep_us(demi_periode)
        pin.off()
        time.sleep_us(demi_periode)


while True:
    for frequence, duree in partition:
        jouer_note(speaker, frequence, duree)
        time.sleep_ms(30)   # petit silence entre deux notes
```

### Lire la partition dans le code

La liste `partition` est exactement la transposition Python de la première moitié de Korobeïniki, mesure par mesure :

<ABCNotation caption="Korobeïniki (thème principal de Tetris), transposé d'une octave vers le grave pour mieux sonner sur le buzzer.">
{`X:1
T:Korobeïniki (thème principal de Tetris)
C:Anonyme, Russie (1861)
M:2/4
L:1/8
Q:1/4=120
K:Am
E2 B, C | D2 C B, | A,2 A, C | E2 D C |
B,2 B, C | D2 E2 | C2 A,2 | A,2 D2 |
F A A G | F E2 C- | C E2 D | C B,2 B, |]`}
</ABCNotation>

Chaque mesure de la portée correspond à une ligne (ou un fragment) de la liste Python. Le suffixe `_3` ou `_4` dans les noms de notes indique l'**octave** : `MI_4` est le mi grave qu'on entend ici, `MI_5` serait l'octave au-dessus.

#### Du symbole musical aux millisecondes

Sur une partition, la durée d'une note se lit à la forme du symbole. Chaque symbole vaut deux fois la durée du précédent : une **ronde** dure deux **blanches**, une blanche dure deux **noires**, une noire dure deux **croches**, et une croche dure deux **doubles croches**.

<ABCNotation caption="Les cinq durées de note, du plus long au plus court. Chaque symbole dure deux fois moins que le précédent.">
{`X:1
M:none
L:1/4
K:C
C4 C2 C C/2 C/4 |]
w: Ronde Blanche Noire Croche Double-croche`}
</ABCNotation>

Notre code reproduit exactement ce rapport, mais en millisecondes :

| Notation musicale | Durée dans le code | Valeur (ms) |
| ----------------- | ------------------ | ----------- |
| Ronde             | `RONDE`            | 2000        |
| Blanche           | `BLANCHE`          | 1000        |
| Noire             | `NOIRE`            | 500         |
| Croche            | `CROCHE`           | 250         |
| Double croche     | `DOUBLE_CROCHE`    | 125         |

À 120 battements par minute (`Q:1/4=120` sur la partition ci-dessus), une noire fait précisément 500 ms, d'où la valeur choisie. Notre mélodie de Tetris n'utilise que `NOIRE` et `CROCHE`, mais le même principe permet d'ajouter les trois autres durées dès qu'on veut tenir une note plus longtemps (`BLANCHE`, `RONDE`) ou jouer des passages plus rapides (`DOUBLE_CROCHE`). Pour accélérer ou ralentir l'ensemble de la mélodie, il suffit de multiplier ou diviser toutes les durées par un même facteur.

### Comment cela fonctionne ?

Le programme s'organise en quatre parties :

- **Initialisation** : `Pin('SPEAKER', Pin.OUT_PP)` configure la broche du buzzer en sortie _push-pull_ (la broche peut activement imposer 0 V ou 3,3 V, c'est ce qu'il faut pour piloter le buzzer).
- **Constantes nommées** : avant tout calcul, on donne un nom parlant aux fréquences (`DO_4`, `RE_4`, `MI_4`...) et aux durées (`NOIRE`, `CROCHE`). Le code ne manipule plus des nombres mystérieux comme `330` ou `500`, mais des notes et des durées qu'un musicien reconnaît au premier coup d'œil.
- **Fonction `jouer_note(pin, frequence, duree_ms)`** : c'est elle qui fait vibrer le buzzer. Elle calcule la **demi-période** correspondant à la fréquence demandée (à 440 Hz, une période complète dure 1/440 seconde ≈ 2272 µs, donc la demi-période est 1136 µs), puis elle alterne `pin.on()` / `pin.off()` pendant la durée totale. C'est le _bit-banging_ évoqué plus haut.
- **Boucle principale** : on parcourt la liste `partition` avec une boucle `for`, on joue chaque note via `jouer_note()`, et on ajoute un petit silence de 30 ms entre les notes pour qu'elles soient bien distinctes. Le `while True` extérieur fait répéter la mélodie indéfiniment.

:::info[Pourquoi écrire une fonction ?]

Sans la fonction `jouer_note`, il faudrait recopier les six lignes de _bit-banging_ pour **chaque** note de la partition, soit environ 200 lignes pour notre mélodie de 33 notes. Avec la fonction :

- on écrit l'algorithme du buzzer **une seule fois**, on le teste, et on n'y touche plus ;
- la partition devient une liste de couples `(note, durée)` qui se lit comme une vraie partition musicale ;
- pour changer de mélodie, on modifie la liste sans toucher au code technique du son.

C'est le principe d'**abstraction** : cacher un détail technique derrière un nom expressif (`jouer_note`) pour que le reste du programme parle le langage du problème (« joue un MI long ») plutôt que celui de la machine (« allume la broche, attends 1515 µs, éteins-la... »).

:::

:::info[Le format `(fréquence, durée)`]

Représenter une mélodie comme une **liste de tuples** est un choix courant en programmation musicale. Chaque tuple est une note (fréquence en Hz + durée en ms), et la liste donne l'ordre. Cette représentation est facile à modifier (changer une note, en ajouter, faire varier le tempo en multipliant toutes les durées) et c'est aussi le format utilisé par beaucoup de librairies plus avancées (MIDI, MusicXML, Sonic Pi).

:::

---

## Étape 3 : Améliorer

### 1. Changer de mélodie

Le plus simple : remplacer le contenu de la liste `partition` par d'autres notes. Voici cinq gimicks emblématiques de l'âge d'or du jeu vidéo 8 bits, à copier-coller à la place de notre Korobeïniki. Pensez à ajouter en haut du fichier les constantes de notes qui manquent (notre code n'en définit que jusqu'à `LA_4` pour l'instant).

#### Super Mario Bros, Ground Theme (Koji Kondo, 1985)

L'ouverture la plus reconnaissable de l'histoire du jeu vidéo, « doo-doo doodoodoo-doo ». N'utilise que des notes naturelles.

<ABCNotation>
{`X:1
T:Super Mario Bros - Ground Theme
M:4/4
L:1/8
Q:1/4=200
K:C
e e z e z c e z | g4 z4 | G4 z4 |]`}
</ABCNotation>

```python
# Nouvelles constantes à ajouter en haut du fichier :
SILENCE = 0   # 0 Hz est traité comme un silence par jouer_note
DO_5 = 523
MI_5 = 659
SOL_5 = 784

partition = [
    (MI_5, CROCHE),    (MI_5, CROCHE),    (SILENCE, CROCHE), (MI_5, CROCHE),
    (SILENCE, CROCHE), (DO_5, CROCHE),    (MI_5, CROCHE),    (SILENCE, CROCHE),
    (SOL_5, NOIRE),    (SILENCE, NOIRE),
    (SOL_4, NOIRE),    (SILENCE, NOIRE),
]
```

#### Pac-Man, jingle de démarrage (Toshio Kai, 1980)

Le petit motif joué au lancement de chaque partie sur la borne arcade. Il introduit les **dièses** (`♯`) : un dièse hausse la note d'un demi-ton. En français on les nomme `FA_DIESE`, `RE_DIESE`, etc.

<ABCNotation>
{`X:1
T:Pac-Man - Game Start
M:2/4
L:1/8
Q:1/4=140
K:C
B b ^f ^d | b ^f ^d2 | c c' g e | c' g e2 |]`}
</ABCNotation>

```python
# Nouvelles constantes :
SI_4 = 494
DO_5 = 523
RE_DIESE_5 = 622
MI_5 = 659
FA_DIESE_5 = 740
SOL_5 = 784
SI_5 = 988
DO_6 = 1047

partition = [
    (SI_4, CROCHE),       (SI_5, CROCHE),       (FA_DIESE_5, CROCHE), (RE_DIESE_5, CROCHE),
    (SI_5, CROCHE),       (FA_DIESE_5, CROCHE), (RE_DIESE_5, NOIRE),
    (DO_5, CROCHE),       (DO_6, CROCHE),       (SOL_5, CROCHE),      (MI_5, CROCHE),
    (DO_6, CROCHE),       (SOL_5, CROCHE),      (MI_5, NOIRE),
]
```

#### The Legend of Zelda, thème de la carte (Koji Kondo, 1986)

L'appel à l'aventure du tout premier Zelda sur NES. Il introduit les **bémols** (`♭`) : un bémol baisse la note d'un demi-ton (`SI_BEMOL_4` est un demi-ton sous `SI_4`).

<ABCNotation>
{`X:1
T:The Legend of Zelda - Overworld Theme
M:4/4
L:1/8
Q:1/4=120
K:Bb
B2 f2 B2 F2 | B2 f2 B4 | F G A B f4 |]`}
</ABCNotation>

```python
# Nouvelles constantes :
FA_4 = 349
SOL_4 = 392
LA_4 = 440
SI_BEMOL_4 = 466
FA_5 = 698

partition = [
    (SI_BEMOL_4, NOIRE), (FA_5, NOIRE),  (SI_BEMOL_4, NOIRE), (FA_4, NOIRE),
    (SI_BEMOL_4, NOIRE), (FA_5, NOIRE),  (SI_BEMOL_4, BLANCHE),
    (FA_4, CROCHE),      (SOL_4, CROCHE), (LA_4, CROCHE),     (SI_BEMOL_4, CROCHE),
    (FA_5, BLANCHE),
]
```

#### Kirby's Dream Land, Green Greens (Jun Ishikawa, 1992)

Le thème principal du tout premier Kirby sur Game Boy : sautillant, joyeux, immédiatement reconnaissable. Sons rapides en croches.

<ABCNotation>
{`X:1
T:Kirby - Green Greens
M:4/4
L:1/8
Q:1/4=140
K:C
c e g e c e g2 | c f a f c f a2 | d g b g d g b2 |]`}
</ABCNotation>

```python
# Nouvelles constantes :
DO_5 = 523
RE_5 = 587
MI_5 = 659
FA_5 = 698
SOL_5 = 784
LA_5 = 880
SI_5 = 988

partition = [
    (DO_5, CROCHE), (MI_5, CROCHE), (SOL_5, CROCHE), (MI_5, CROCHE),
    (DO_5, CROCHE), (MI_5, CROCHE), (SOL_5, NOIRE),
    (DO_5, CROCHE), (FA_5, CROCHE), (LA_5, CROCHE),  (FA_5, CROCHE),
    (DO_5, CROCHE), (FA_5, CROCHE), (LA_5, NOIRE),
    (RE_5, CROCHE), (SOL_5, CROCHE), (SI_5, CROCHE), (SOL_5, CROCHE),
    (RE_5, CROCHE), (SOL_5, CROCHE), (SI_5, NOIRE),
]
```

#### DuckTales, Moon Theme (Hiroshige Tonomura, 1989)

Souvent cité parmi les plus belles musiques de la NES. Voici les premières mesures du motif principal, celles qui s'enchaînent dès l'arrivée sur la Lune.

<ABCNotation>
{`X:1
T:DuckTales - Moon Theme
M:4/4
L:1/8
Q:1/4=130
K:C
a2 a g ^f2 e d | e2 ^f g a2 b c' | d'4 z4 |]`}
</ABCNotation>

```python
# Nouvelles constantes :
RE_5 = 587
MI_5 = 659
FA_5 = 698
FA_DIESE_5 = 740
SOL_5 = 784
LA_5 = 880
SI_5 = 988
DO_6 = 1047
RE_6 = 1175

partition = [
    (LA_5, NOIRE),  (LA_5, CROCHE),       (SOL_5, CROCHE),
    (FA_DIESE_5, NOIRE), (MI_5, CROCHE),  (RE_5, CROCHE),
    (MI_5, NOIRE),  (FA_DIESE_5, CROCHE), (SOL_5, CROCHE),
    (LA_5, NOIRE),  (SI_5, CROCHE),       (DO_6, CROCHE),
    (RE_6, BLANCHE),
]
```

Astuce : pour transcrire une mélodie qu'on a en tête, commencer petit (4-8 notes), tester sur la STeaMi, ajuster les notes qui sonnent faux, puis allonger. Les chiptunes annotées sont nombreuses sur YouTube ou sur des archives spécialisées comme [VGMusic](https://www.vgmusic.com/) et [The Mod Archive](https://modarchive.org/).

### 2. Choisir sa mélodie au bouton

Au lieu d'une seule mélodie en boucle, en stocker plusieurs dans des listes différentes (`partition_a`, `partition_b`...) et déclencher l'une ou l'autre selon le bouton appuyé. La technique de lecture des boutons est dans la fiche [Utiliser des boutons-poussoirs](/ressources/inovmicro-exao/i03-boutons).

### 3. Coder un message en Morse

Avec le même buzzer, on peut produire des points et des tirets pour transmettre un message en code Morse. La fiche [Envoyer des messages en code Morse avec la STeaMi](/ressources/inovmicro-exao/i06-code-morse) explore cette piste en détail.

### 4. Mélodie au rythme d'un capteur (bonus)

En lisant un capteur intégré (lumière, accélération, température) à chaque tour de boucle, on peut faire varier la fréquence ou la durée des notes en temps réel. Résultat : la mélodie suit le geste, l'éclairage ou la température. C'est le principe d'un **instrument de musique numérique**, l'ancêtre des thérémines et synthétiseurs.

---

## Aller plus loin

### Pour comprendre

- **[Onde sonore (Wikipedia)](https://fr.wikipedia.org/wiki/Onde_sonore)** : ce qu'est physiquement un son, comment il se propage et pourquoi notre oreille le perçoit comme une note. Le pont entre physique, biologie et musique.
- **[Effet piézoélectrique (Wikipedia)](https://fr.wikipedia.org/wiki/Effet_pi%C3%A9zo%C3%A9lectrique)** : pourquoi un cristal de céramique vibre quand on lui applique une tension. Le même principe pilote les buzzers, les briquets électriques, les microphones de guitare et les capteurs de pression.
- **[Gamme tempérée (Wikipedia)](https://fr.wikipedia.org/wiki/Gamme_temp%C3%A9r%C3%A9e)** : pourquoi les notes ne sont pas espacées au hasard. Le système qu'on utilise depuis Bach répartit les 12 demi-tons de manière géométrique sur l'octave, ce qui permet de jouer dans n'importe quelle tonalité avec le même instrument.

### Pour s'inspirer

- **[Chiptune (Wikipedia)](https://fr.wikipedia.org/wiki/Chiptune)** : style musical né dans les années 80 qui exploite les puces audio limitées des consoles 8 bits. La STeaMi fait ici exactement ce que faisait une Game Boy ou une NES pour produire ses musiques cultes.
- **[Daft Punk et leur table de synthés modulaires](https://fr.wikipedia.org/wiki/Daft_Punk)** : derrière le casque, des heures de bidouille sur des oscillateurs et des fréquences. Le duo a popularisé l'idée que la musique électronique se programme autant qu'elle s'interprète.
- **[Le Theremin, premier instrument électronique (Wikipedia)](https://fr.wikipedia.org/wiki/Th%C3%A9r%C3%A9mine)** : inventé en 1920 par Léon Theremin, c'est le premier instrument qu'on joue sans le toucher : les mouvements des mains modulent fréquence et volume. Une fiche du wiki en construira un avec la STeaMi.
- **[Sonic Pi](https://sonic-pi.net/)** : environnement de live coding musical conçu pour l'éducation par Sam Aaron à Cambridge. On écrit du code Ruby qui produit de la musique en temps réel, on l'édite, on entend le résultat. Utilisé dans des milliers d'écoles, et même en concert.

---

_Cette fiche fait partie du projet [I-Novmicro #2 : Action EXAO](/projets/inovmicro-exao). Adaptée du projet [Let's STEAM](/projets/lets-steam) (fiche [`r1as07-musique`](/ressources/lets-steam/r1as07-musique)) sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._

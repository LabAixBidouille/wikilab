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

Chaque note de musique correspond à une fréquence précise (en hertz, Hz). Voici les sept notes principales sur deux octaves :

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

### 3. Connecter la carte à l'ordinateur

Brancher la STeaMi à l'ordinateur via le câble USB. Si l'IDE est déjà configuré (voir la fiche [Thonny : Prise en main de MicroPython](/ressources/inovmicro-exao/t03-decouverte-thonny) si vous démarrez), la console MicroPython doit afficher `>>>`. C'est **l'invite** (parfois appelée « prompt » en anglais) : un signe qui apparaît en début de ligne pour vous dire que la console est prête à recevoir une commande.

### 4. Lancer le programme

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

# Durées en millisecondes (ms).
LONGUE = 500
BREVE = 250


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


# Le thème principal de Tetris ("Korobeïniki", chanson traditionnelle
# russe de 1861, popularisée par le jeu Nintendo en 1989), transposé
# une octave en dessous pour mieux sonner sur le buzzer.
# Chaque tuple est une note (fréquence, durée).
partition = [
    (MI_4, LONGUE),  (SI_3, BREVE),  (DO_4, BREVE),  (RE_4, LONGUE),
    (DO_4, BREVE),   (SI_3, BREVE),  (LA_3, LONGUE), (LA_3, BREVE),
    (DO_4, BREVE),   (MI_4, LONGUE), (RE_4, BREVE),  (DO_4, BREVE),
    (SI_3, LONGUE),  (SI_3, BREVE),  (DO_4, BREVE),  (RE_4, LONGUE),
    (MI_4, LONGUE),  (DO_4, LONGUE), (LA_3, LONGUE), (LA_3, LONGUE),
    (RE_4, LONGUE),  (FA_4, BREVE),  (LA_4, BREVE),  (LA_4, BREVE),
    (SOL_4, BREVE),  (FA_4, BREVE),  (MI_4, LONGUE), (DO_4, LONGUE),
    (MI_4, LONGUE),  (RE_4, BREVE),  (DO_4, BREVE),  (SI_3, LONGUE),
    (SI_3, BREVE),
]

while True:
    for frequence, duree in partition:
        jouer_note(speaker, frequence, duree)
        time.sleep_ms(30)   # petit silence entre deux notes
```

### Lire la partition dans le code

La liste `partition` est exactement la transposition Python de la première moitié de Korobeïniki, mesure par mesure :

<ABCNotation caption="Korobeïniki (thème principal de Tetris) — transposé d'une octave vers le grave pour mieux sonner sur le buzzer.">
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

Chaque mesure de la portée correspond à une ligne (ou un fragment) de la liste Python. Le suffixe `_3` ou `_4` dans les noms de notes indique l'**octave** : `MI_4` est le mi grave qu'on entend ici, `MI_5` serait l'octave au-dessus. Une partition Python se lit donc comme une partition papier, à un détail près : on travaille en hertz et en millisecondes plutôt qu'en noires et croches.

### Comment cela fonctionne ?

Le programme s'organise en quatre parties :

- **Initialisation** : `Pin('SPEAKER', Pin.OUT_PP)` configure la broche du buzzer en sortie _push-pull_ (la broche peut activement imposer 0 V ou 3,3 V, c'est ce qu'il faut pour piloter le buzzer).
- **Constantes nommées** : avant tout calcul, on donne un nom parlant aux fréquences (`DO_4`, `RE_4`, `MI_4`...) et aux durées (`LONGUE`, `BREVE`). Le code ne manipule plus des nombres mystérieux comme `330` ou `500`, mais des notes et des durées qu'un musicien reconnaît au premier coup d'œil.
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

Le plus simple : remplacer le contenu de la liste `partition` par d'autres notes. Les partitions classiques (« Au clair de la lune », « Frère Jacques », thèmes de jeux vidéo) se trouvent facilement en ligne avec leurs fréquences. Astuce : commencer petit (8-10 notes), tester, puis allonger.

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

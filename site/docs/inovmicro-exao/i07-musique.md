---
id: i07-musique
title: Composer une mélodie
sidebar_label: 'Composer une mélodie'
sidebar_position: 7
---

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


# La mélodie sous forme d'une liste de (fréquence, durée en ms).
# Chaque tuple est une note ; freq=0 produit un silence.
partition = [
    (330, 500), (247, 250), (262, 250), (294, 500),
    (262, 250), (247, 250), (220, 500), (220, 250),
    (262, 250), (330, 500), (294, 250), (262, 250),
    (247, 500), (247, 250), (262, 250), (294, 500),
    (330, 500), (262, 500), (220, 500), (220, 500),
    (294, 500), (349, 250), (440, 250), (440, 250),
    (392, 250), (349, 250), (330, 500), (262, 500),
    (330, 500), (294, 250), (262, 250), (247, 500),
    (247, 250),
]

while True:
    for freq, duree in partition:
        tone(speaker, freq, duree)
        time.sleep_ms(30)   # petit silence entre deux notes
```

### Comment cela fonctionne ?

Le programme s'organise en trois parties :

- **Initialisation** : `Pin('SPEAKER', Pin.OUT_PP)` configure la broche du buzzer en sortie _push-pull_ (la broche peut activement imposer 0 V ou 3,3 V, c'est ce qu'il faut pour piloter le buzzer).
- **Fonction `tone(pin, freq, duration_ms)`** : c'est elle qui fait vibrer le buzzer. Elle calcule la **demi-période** correspondant à la fréquence demandée (à 440 Hz, une période complète dure 1/440 seconde ≈ 2272 µs, donc la demi-période est 1136 µs), puis elle alterne `pin.on()` / `pin.off()` pendant la durée totale. C'est le _bit-banging_ évoqué plus haut.
- **Boucle principale** : on parcourt la liste `partition` avec une boucle `for`, on joue chaque note via `tone()`, et on ajoute un petit silence de 30 ms entre les notes pour qu'elles soient bien distinctes. Le `while True` extérieur fait répéter la mélodie indéfiniment.

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

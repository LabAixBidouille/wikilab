---
id: i14-melodie
title: Composer une mélodie
sidebar_label: 'Mélodie'
sidebar_position: 14
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>


# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="3" y="5" width="18" height="14" rx="2" fill="#8a6e18" opacity="0.1"/><rect x="5" y="7" width="14" height="10" rx="1" fill="#8a6e18" opacity="0.25"/><rect x="8" y="9" width="8" height="6" rx="0.5" fill="#8a6e18"/><circle cx="6" cy="8" r="0.5" fill="#8a6e18"/><circle cx="18" cy="8" r="0.5" fill="#8a6e18"/><circle cx="6" cy="16" r="0.5" fill="#8a6e18"/><circle cx="18" cy="16" r="0.5" fill="#8a6e18"/><line x1="3" y1="11" x2="1" y2="11" stroke="#8a6e18" strokeWidth="1"/><line x1="3" y1="14" x2="1" y2="14" stroke="#8a6e18" strokeWidth="1"/><line x1="21" y1="11" x2="23" y2="11" stroke="#8a6e18" strokeWidth="1"/><line x1="21" y1="14" x2="23" y2="14" stroke="#8a6e18" strokeWidth="1"/><line x1="10" y1="21" x2="14" y2="21" stroke="#8a6e18" strokeWidth="1"/><line x1="12" y1="19" x2="12" y2="21" stroke="#8a6e18" strokeWidth="1"/></svg> Composer une mélodie

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--info">SteaMi</span>
  <span className="badge badge--warning">MicroPython</span>
</div>

| Projet        | Durée               | Difficulté                                 | Âge                    | Logiciel STeaMi testé |
| ------------- | ------------------- | ------------------------------------------ | ---------------------- | --------------------- |
| I-Novmicro #2 | 30min | Avancé | 11-15 ans | 0.23.1  |

## Matériel et Montage

- 1 carte STeaMi
- 1 câble USB de données (micro-USB pour la STeaMi V1, USB-C pour la STeaMi V2). Attention : un câble qui ne sert qu'à charger un téléphone ne fonctionnera pas.
- 1 ordinateur avec navigateur web

</div>

<img src="/img/ressources/inovmicro-exao/i14-melodie/icone.png" alt="Composer une mélodie" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Un buzzer est un composant électronique qui peut produire des sons. En programmant la carte STeaMi, vous pouvez faire jouer différentes notes à ce buzzer pour composer votre propre mélodie !

Cette fiche est inspirée de la ressource [Faire jouer une mélodie à un buzzer](/ressources/lets-steam/r1as07-musique) du projet Let's STEAM.

---

## Objectifs d'apprentissage

- Apprendre à utiliser un buzzer avec la carte STeaMi
- Découvrir comment programmer des sons et des mélodies en MicroPython

---

## Étape 1 : Construire

Le buzzer est déjà intégré au dos de la carte STeaMi, il n'y a donc pas de montage à faire.

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/i14-melodie/buzzer.png"
    alt="Emplacement du buzzer sur la face arrière de la STeaMi"
    style={{maxWidth: '450px', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    Buzzer intégré au dos de la carte STeaMi
  </figcaption>
</figure>

Voici un tableau des notes de musique et de leurs fréquences correspondantes, que vous pourrez utiliser pour composer votre mélodie :

| Note | Grave | Aigu |
|------|-------|-----|
| Do (C) | 262 | 523 |
| Ré (D) | 294 | 587 |
| Mi (E) | 330 | 659 |
| Fa (F) | 349 | 698 |
| Sol (G) | 392 | 784 |
| La (A) | 440 | 880 |
| Si (B) | 494 | 988 |

---

## Étape 2 : Programmer

On va utiliser le langage de programmation MicroPython pour faire jouer des notes au buzzer. Voici un exemple de code qui joue une mélodie simple :


```python
# Testée avec firmware STeaMi 0.23.1
from machine import Pin
import time

speaker = Pin("SPEAKER", Pin.OUT_PP)

def tone(pin, freq, duration_ms):
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

song = [
    (330, 500),
    (247, 250),
    (262, 250),
    (294, 500),
    (262, 250),
    (247, 250),
    (220, 500),
    (220, 250),
    (262, 250),
    (330, 500),
    (294, 250),
    (262, 250),
    (247, 500),
    (247, 250),
    (262, 250),
    (294, 500),
    (330, 500),
    (262, 500),
    (220, 500),
    (220, 500),
    (294, 500),
    (349, 250),
    (440, 250),
    (440, 250),
    (392, 250),
    (349, 250),
    (330, 500),
    (262, 500),
    (330, 500),
    (294, 250),
    (262, 250),
    (247, 500),
    (247, 250),
]

while True:
    for freq, duration in song:
        tone(speaker, freq, duration)
        time.sleep_ms(30)
```

### Comment cela fonctionne ?

- On importe les modules nécessaires : `Pin` pour contrôler les broches de la carte, et `time` pour gérer les délais.
- On configure la broche du buzzer en mode sortie.
- La fonction `tone` prend en paramètre la broche à utiliser, la fréquence de la note à jouer, et sa durée en millisecondes. Elle génère un signal carré pour faire vibrer le buzzer à la bonne fréquence pendant la durée spécifiée.
- On définit une liste de tuples `song`, où chaque tuple contient une fréquence (en Hz) et une durée (en ms) pour chaque note de la mélodie.
- Enfin, on boucle indéfiniment pour jouer la mélodie en appelant la fonction `tone` pour chaque note, avec une courte pause entre les notes.

### Exécution

- **Test rapide** : lancez le programme depuis votre IDE (typiquement bouton **Run** ▶ ou `F5`).
- **Programme persistant** : enregistrez le fichier sous le nom **`main.py`** sur la carte. Il sera relancé à chaque démarrage.

---

## Étape 3 : Améliorer

Maintenant que vous savez comment faire jouer des notes au buzzer, vous pouvez essayer de composer votre propre mélodie ! Voici quelques idées pour aller plus loin :

- Faites jouer des mélodies différentes en appuyant sur les boutons A et B.
- Faites jouer une mélodie différente selon les mouvements détectés par les capteurs de la carte.
- Essayez de faire un code Morse avec le buzzer pour communiquer des messages secrets ! Aidez-vous de la fiche [code Morse](/ressources/lets-steam/r1as06-morse) du projet Let's STEAM.

---

_Cette fiche fait partie du projet [I-Novmicro #2 : Action EXAO](/projets/inovmicro-exao). Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._
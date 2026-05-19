---
id: i19-alarme-mouvement
title: Alarme de mouvement
sidebar_label: 'Alarme de mouvement'
sidebar_position: 2
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="3" y="5" width="18" height="14" rx="2" fill="#8a6e18" opacity="0.1"/><rect x="5" y="7" width="14" height="10" rx="1" fill="#8a6e18" opacity="0.25"/><rect x="8" y="9" width="8" height="6" rx="0.5" fill="#8a6e18"/><circle cx="6" cy="8" r="0.5" fill="#8a6e18"/><circle cx="18" cy="8" r="0.5" fill="#8a6e18"/><circle cx="6" cy="16" r="0.5" fill="#8a6e18"/><circle cx="18" cy="16" r="0.5" fill="#8a6e18"/><line x1="3" y1="11" x2="1" y2="11" stroke="#8a6e18" strokeWidth="1"/><line x1="3" y1="14" x2="1" y2="14" stroke="#8a6e18" strokeWidth="1"/><line x1="21" y1="11" x2="23" y2="11" stroke="#8a6e18" strokeWidth="1"/><line x1="21" y1="14" x2="23" y2="14" stroke="#8a6e18" strokeWidth="1"/><line x1="10" y1="21" x2="14" y2="21" stroke="#8a6e18" strokeWidth="1"/><line x1="12" y1="19" x2="12" y2="21" stroke="#8a6e18" strokeWidth="1"/></svg> Alarme de mouvement

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--info">SteaMi</span>
  <span className="badge badge--warning">MicroPython</span>
</div>

| Projet        | Durée               | Difficulté                                 | Âge                    | Logiciel STeaMi testé |
| ------------- | ------------------- | ------------------------------------------ | ---------------------- | --------------------- |
| I-Novmicro #2 | 30 min | Avancé | 11-15 ans | 0.23.1 |

## Matériel et Montage

- 1 carte STeaMi
- 1 câble USB de données (micro-USB pour la STeaMi V1, USB-C pour la STeaMi V2). Attention : un câble qui ne sert qu'à charger un téléphone ne fonctionnera pas.
- 1 ordinateur avec navigateur web

</div>

<img src="/img/ressources/inovmicro-exao/i19-alarme-mouvement/icone.png" alt="Alarme de mouvement" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

La carte STeaMi est équipée d'un capteur de mouvement (accéléromètre) qui peut détecter les mouvements et les vibrations. Dans ce projet, nous allons utiliser ce capteur pour créer une alarme de mouvement. Lorsque la carte détecte un mouvement, elle émettra à l'aide du buzzer un son pour alerter l'utilisateur.

---

## Objectifs d'apprentissage
- Comprendre comment utiliser un capteur de mouvement (accéléromètre) avec la carte STeaMi.

---

## Étape 1 : Construire

Le détecteur de mouvement et l'accéléromètre sont intégrés dans la STeaMi, il n'y a donc pas de montage à faire. Le capteur de mouvement est situé à l'avant de la carte et l'accéléromètre est situé à l'arrière de la carte. Vous pouvez les voir sur les photos ci-dessous.

<div style={{display: 'flex', flexDirection: 'row', gap: '1rem', justifyContent: 'center', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap'}}>
    <figure style={{textAlign: 'center', margin: '0', flex: '1', minWidth: '200px'}}>
        <img
            src="/img/ressources/inovmicro-exao/i19-alarme-mouvement/acelerometre.png"
            alt="Emplacement de l'accéléromètre sur la face arrière de la STeaMi"
            style={{maxWidth: '450px', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}
        />
        <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
            L'accéléromètre sur la face arrière de la STeaMi.
        </figcaption>
    </figure>
    <figure style={{textAlign: 'center', margin: '0', flex: '1', minWidth: '200px'}}>
        <img
            src="/img/ressources/inovmicro-exao/i19-alarme-mouvement/mouvement.png"
            alt="Emplacement du capteur de mouvement sur la face avant de la STeaMi"
            style={{maxWidth: '450px', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}
        />
        <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
            le capteur de mouvement sur la face avant de la STeaMi.
        </figcaption>
    </figure>
</div>
### Connecter la carte à l'ordinateur

Branchez la STeaMi à l'ordinateur via le câble USB. Si votre IDE MicroPython est déjà configuré (voir la fiche [Thonny : Prise en main de MicroPython](/ressources/inovmicro-exao/i03-decouverte-thonny) si vous démarrez), la console MicroPython doit afficher le prompt `>>>`.

---

## Étape 2 : Programmer

On va écrire un programme qui nous permettra d'activer ou désactiver l'alarme de mouvement à l'aide du bouton "Menu". Lorsque l'alarme est active, si le capteur de distance détecte un objet à une distance supérieure à un seuil défini ou si l'accéléromètre détecte un mouvement supérieur à un seuil défini, le buzzer émettra un son d'alarme.


```python
# Testée avec firmware STeaMi 0.23.1

from machine import I2C, Pin
from vl53l1x import VL53L1X
from ism330dl import ISM330DL
from time import sleep_ms
import time

DISTANCE = 1000

i2c = I2C(1)
tof = VL53L1X(i2c)
imu = ISM330DL(i2c)

# accéléromètre
prev_ax, prev_ay, prev_az = imu.acceleration_g()
seuil = 0.3

menu_bouton = Pin("MENU_BUTTON", Pin.IN, Pin.PULL_UP)
is_active = False

def alarm():
    speaker = Pin("SPEAKER", Pin.OUT_PP)
    period_us = int(1_000_000 / 2000)
    half_period = period_us // 2
    end_time = time.ticks_add(time.ticks_us(), 500 * 1000)
    while time.ticks_diff(end_time, time.ticks_us()) > 0:
        speaker.on()
        time.sleep_us(half_period)
        speaker.off()
        time.sleep_us(half_period)

while True:

    ax, ay, az = imu.acceleration_g()
    diff = abs(ax - prev_ax) + abs(ay - prev_ay) + abs(az - prev_az)
    distance = tof.read()
    
    print("distance:", distance, "diff:", diff, "active:", is_active)
    sleep_ms(200)

    if menu_bouton.value() == 0:
        is_active = not is_active
        print("Alarm active:", is_active)
        sleep_ms(300)

    if is_active and distance > DISTANCE:
        print("distance:", distance)
        alarm()

    if is_active and diff > seuil:
        print("Motion alert: diff =", diff)
        alarm()

    prev_ax, prev_ay, prev_az = ax, ay, az
```

### Comment cela fonctionne ?

- Nous importons les bibliothèques nécessaires pour utiliser les capteurs et contrôler le buzzer.
- Nous définissons une distance seuil pour le capteur de distance et un seuil de mouvement pour l'accéléromètre.
- Nous initialisons les capteurs et configurons le bouton pour activer ou désactiver l'alarme.
- Dans la boucle principale, nous lisons les données des capteurs et vérifions si l'alarme est active. Si le capteur de distance détecte un objet à une distance supérieure au seuil ou si l'accéléromètre détecte un mouvement supérieur au seuil, nous appelons la fonction `alarm()` qui fait sonner le buzzer pendant 500 ms.

### Exécution

- **Test rapide** : lancez le programme depuis votre IDE (typiquement bouton **Run** ▶ ou `F5`). Les valeurs défilent dans la console MicroPython.
- **Programme persistant** : enregistrez le fichier sous le nom **`main.py`** sur la carte. Il sera relancé à chaque démarrage.

---

## Étape 3 : Améliorer

Voici quelques idées pour aller plus loin :
- Ajouter un délai de désactivation de l'alarme avant de la faire sonner.
- Faire clignoter une LED en plus du buzzer.
- Essayez de créer un minuteur à œuf en vous aidant de la fiche [minuteur à œuf](/ressources/lets-steam/r1as14-minuteur) du projet Let's STEAM.

---

_Cette fiche fait partie du projet [I-Novmicro #2 : Action EXAO](/projets/inovmicro-exao). Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._
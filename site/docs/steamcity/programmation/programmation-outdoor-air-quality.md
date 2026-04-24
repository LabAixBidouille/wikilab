---
id: programmation-outdoor-air-quality
title: "Programmation : Outdoor Air Quality"
sidebar_label: "Outdoor Air Quality"
sidebar_position: 4
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="4" y="4" width="16" height="16" rx="2" fill="#DD5350" opacity="0.1"/><rect x="6" y="6" width="12" height="12" rx="1" fill="#DD5350" opacity="0.25"/><path d="M9 10h6M9 12h6M9 14h4" stroke="#DD5350" strokeWidth="1" strokeLinecap="round" opacity="1.0"/></svg> Programmation : Outdoor Air Quality

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">Micro:bit / NUCLEO-L476RG / Arduino</span>
  <span className="badge badge--info">Capteur MICS6814</span>
  <span className="badge badge--info">Capteur HM3301</span>
  <span className="badge badge--info">Capteur DHT11</span>
  <span className="badge badge--info">Écran LCD</span>
  <span className="badge badge--warning">Vittascience</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| SteamCity | 1-2 heures | Intermédiaire | 12-16 ans |

## Matériel

- 1 carte programmable (NUCLEO-L476RG, micro:bit ou Arduino)
- 1 capteur multicanal MICS6814 (gaz / COV)
- 1 capteur HM3301 (particules fines PM)
- 1 capteur DHT11 (température / humidité)
- 1 écran LCD I2C
- 1 module Openlog pour enregistrement sur carte SD (optionnel)
- Câbles de connexion
- Ordinateur + éditeur [Vittascience](https://fr.vittascience.com/microbit)

</div>

</div>

---

## De quoi parle-t-on ?

Cette fiche technique accompagne la ressource [Outdoor Air Quality](/ressources/steamcity/outdoor-air-quality). Elle présente trois montages progressifs : un système de surveillance des COV avec écran LCD, un système multi-capteurs combinant COV, particules fines et humidité, et enfin un système de collecte automatisée sur carte SD.

## Objectifs d'apprentissage

- Câbler plusieurs capteurs en I2C (MICS6814, HM3301) et un capteur numérique (DHT11)
- Utiliser l'éditeur Vittascience avec plusieurs cartes cibles (NUCLEO, micro:bit, Arduino)
- Combiner boutons et capteurs pour afficher différentes mesures
- Enregistrer les données sur carte SD via un module Openlog

---

## Fiche 1 : surveillance des COV avec écran LCD

Les interfaces de programmation pour les cartes NUCLEO-L476RG, micro:bit et Arduino sont très similaires. Nous présentons ici un programme conçu pour micro:bit.

Éditeurs : [vittascience.com/l476](https://fr.vittascience.com/l476), [vittascience.com/arduino](https://fr.vittascience.com/arduino) ou [vittascience.com/microbit](https://fr.vittascience.com/microbit).

**Câblage** :

- Capteur multicanal MICS6814 → port I2C
- Écran LCD → port I2C
- Module Openlog (carte SD) → port numérique (D2–D8 pour Arduino, P0 pour micro:bit)

**Code**

```python
from microbit import *
from lcd_i2c import LCD1602
from gas_gmxxx import GAS_GMXXX

lcd = LCD1602()
multichannel_v2 = GAS_GMXXX(0x08)

while True:
    lcd.setCursor(0, 0)
    lcd.writeTxt('Mesure VOC')
    lcd.setCursor(0, 1)
    lcd.writeTxt(str(multichannel_v2.calcVol(multichannel_v2.measure_VOC())))
```

---

## Fiche 2 : collecte multi-capteurs

Même plateforme (Vittascience). On ajoute le capteur HM3301 (particules fines) et le DHT11 (température/humidité).

**Câblage** :

- HM3301 et MICS6814 → ports I2C
- DHT11 → port numérique (D2–D8 ou P0/P1/P2 selon la carte)
- Écran LCD → port I2C
- Openlog → port numérique

Les boutons **A** et **B** permettent de sélectionner la mesure à afficher (COV, PM10, température).

**Code**

```python
from microbit import *
from lcd_i2c import LCD1602
from gas_gmxxx import GAS_GMXXX
from hm330x import HM330X
from dht11 import DHT11

lcd = LCD1602()
multichannel_v2 = GAS_GMXXX(0x08)
hm3301 = HM330X()
dht11_0 = DHT11(pin0)

while True:
    if button_a.is_pressed():
        lcd.setCursor(0, 0)
        lcd.writeTxt('Mesure VOC:')
        lcd.setCursor(0, 0)
        lcd.writeTxt(str(multichannel_v2.calcVol(multichannel_v2.measure_VOC())))
    if button_b.is_pressed():
        lcd.setCursor(0, 0)
        lcd.writeTxt('Concentration PM 10:')
        lcd.setCursor(0, 0)
        lcd.writeTxt(str(hm3301.getData(5)))
    if button_a.is_pressed() and button_b.is_pressed():
        lcd.setCursor(0, 0)
        lcd.writeTxt('Mesure temperature:')
        lcd.setCursor(0, 0)
        lcd.writeTxt(str(dht11_0.getData(d=1)*9/5 + 32))
```

---

## Fiche 3 : enregistrement automatisé sur carte SD

Ce programme envoie les données vers un module Openlog via UART pour les enregistrer sur carte SD.

**Code**

```python
from microbit import *
from hm330x import HM330X
from gas_gmxxx import GAS_GMXXX

hm3301 = HM330X()
multichannel_v2 = GAS_GMXXX(0x08)

while True:
    uart.init(baudrate=4800, bits=8, parity=None, tx=pin0, rx=pin14)
    uart.write(('{}' * 3).format(hm3301.getData(3), ';', multichannel_v2.calcVol(multichannel_v2.measure_NO2())) + '\n')
```

---

*Cette fiche fait partie du projet [SteamCity](/projets/steamcity), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

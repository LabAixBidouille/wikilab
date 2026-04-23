---
id: programmation-outdoor-air-quality
title: "Programmation : Outdoor Air Quality"
sidebar_label: "Outdoor Air Quality"
sidebar_position: 4
---

# Programmation : Outdoor Air Quality

Fiche technique de programmation associée à la ressource [Outdoor Air Quality](/ressources/steamcity/outdoor-air-quality).

---

### Fiche pratique 1 : système de surveillance des COV avec écran LCD

Les interfaces de programmation pour les cartes NUCLEO-L476RG, micro:bit et Arduino sont très similaires. Nous présentons ici un programme conçu pour micro:bit. Il affiche les éléments mesurés sur l'écran LCD.

Éditeur utilisé : vittascience.com/l476 ; vittascience.com/arduino ou vittascience.com/microbit

Connexion d'assemblage avec un Arduino

Le capteur multicanal MICS6814 est connecté à un port I2C sur le shield. L'écran est connecté à un port I2C. Le module Openlog pour l'enregistrement de données sur une carte SD est connecté à un port numérique (D2 à D8).

Connexion d'assemblage avec un micro:bit

Le capteur multicanal MICS6814 est connecté à un port I2C sur le shield. L'écran est connecté à un port I2C. Le module Openlog pour l'enregistrement de données sur une carte SD est connecté à un port numérique P0.

Code

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

### Fiche pratique 2 : collecte de données environnementales multi-capteurs

Les interfaces de programmation pour les cartes NUCLEO-L476RG, micro:bit et Arduino sont très similaires. Nous présentons ici un programme conçu pour micro:bit. Il affiche les éléments mesurés sur l'écran LCD.

Éditeur utilisé : vittascience.com/l476 ; vittascience.com/arduino ou vittascience.com/microbit

Connexion d'assemblage avec un Arduino

Le capteur HM3301 est connecté à un port I2C. Le capteur multicanal MICS6814 est connecté à un port I2C du shield. Le capteur d'humidité DHT11 est connecté à un port numérique (D2 à D8). L'écran est connecté à un port I2C. Le module Openlog pour l'enregistrement de données sur une carte SD est connecté à un port numérique (D2 à D8).

Connexion d'assemblage avec un micro:bit

Le capteur HM3301 et le capteur multicanal MICS6814 sont connectés à un port I2C sur le shield. Le capteur d'humidité DHT11 est connecté à un port numérique (P1 ou P2 selon les besoins). L'écran est connecté à un port I2C. Le module Openlog pour l'enregistrement de données sur une carte SD est connecté à un port numérique P0.

Code

```python
from microbit import *
from lcd_i2c import LCD1602
from gas_gmxxx import GAS_GMXXX
from hm330x import HM330X
from dht11 import DHT11

lcd = LCD1602()
multichannel_v2 = GAS_GMXXX(0x08)
hm3301 = HM330X()
# DHT11 Sensor on pin0
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

### Fiche pratique 3 : enregistrement automatisé des données sur carte SD pour les mesures de la qualité de l'air

Éditeur utilisé : vittascience.com/l476 ; vittascience.com/arduino ou vittascience.com/microbit

Code

```python
from microbit import *
from hm330x import HM330X
from gas_gmxxx import GAS_GMXXX

hm3301 = HM330X()
multichannel_v2 = GAS_GMXXX(0x08)
# Lecteur SD on pin0

while True:
    uart.init(baudrate=4800, bits=8, parity=None, tx=pin0, rx=pin14)
    uart.write(('{}' * 3).format(hm3301.getData(3), ';', multichannel_v2.calcVol(multichannel_v2.measure_NO2())) + '\n')
```

---

*Cette fiche fait partie du projet [SteamCity](/projets/steamcity), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

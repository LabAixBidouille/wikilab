---
id: programmation-beau-jardin-21-siecle
title: Arrosage automatique STM32
sidebar_label: "Arrosage automatique STM32"
sidebar_position: 1
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="4" y="4" width="16" height="16" rx="2" fill="#1a4a48" opacity="0.1"/><rect x="6" y="6" width="12" height="12" rx="1" fill="#1a4a48" opacity="0.25"/><path d="M9 10h6M9 12h6M9 14h4" stroke="#1a4a48" strokeWidth="1" strokeLinecap="round" opacity="1.0"/><circle cx="12" cy="2.5" r="0.8" fill="#1a4a48" opacity="1.0"/><line x1="12" y1="3.3" x2="12" y2="4.5" stroke="#1a4a48" strokeWidth="1" opacity="1.0"/></svg> Arrosage automatique STM32

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--info">Capteur humidité du sol</span>
  <span className="badge badge--info">Servomoteur</span>
  <span className="badge badge--warning">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| The Dexter Lab | 1-2 heures | Intermédiaire | 12-18 ans |

## Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 1 écran OLED (SSD1306)
- 1 capteur d'humidité du sol
- 1 servomoteur
- 1 breadboard
- Des câbles de connexion
- 1 câble USB - micro B

</div>

</div>

---

## De quoi parle-t-on ?

Cette fiche technique accompagne la ressource [Beau jardin au 21e siècle](/ressources/thedexterlab/beau-jardin-21-siecle) et regroupe les étapes de programmation nécessaires pour construire un système d'arrosage automatique. Nous allons progressivement mesurer l'humidité du sol avec un capteur, afficher cette information sur un écran OLED, commander un servomoteur pour distribuer de l'eau, puis assembler le tout pour créer un système autonome.

## Objectifs d'apprentissage

- Programmer un capteur analogique (humidité du sol) en MakeCode
- Afficher des valeurs et messages conditionnels sur un écran OLED
- Piloter un servomoteur pour réaliser une action physique
- Combiner capteurs, affichage et actionneurs dans un projet complet

---

## Fiche 1 : mesurer la conductivité du sol

**Câbler le capteur d'humidité**

Le capteur d'humidité que nous utilisons possède trois broches : deux broches d'alimentation (+ et -) ainsi qu'une broche de signal.

- La broche **+** du capteur sur la broche 5V de la carte
- La broche **-** du capteur sur la broche GND de la carte
- La broche **S** du capteur sur la broche A0 de la carte

:::info
Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base. Elles ajoutent des blocs pour des fonctionnalités spécifiques. Pour cette activité, installez les extensions **serial** et **soil-hygrometer**.
:::

**Programme**

```javascript
Serial.attachToConsole()
forever(function () {
    Serial.writeValue("soil humidity", input.getSoilHumidity(pins.A0))
    pause(500)
})
```

---

## Fiche 2 : afficher les données collectées sur un écran

**Câbler le capteur d'humidité**

- La broche **+** du capteur sur la broche 5V de la carte
- La broche **-** du capteur sur la bande d'alimentation **-** de la breadboard
- La broche **S** du capteur sur la broche A0 de la carte
- La bande d'alimentation **-** de la breadboard sur la broche **GND** de la carte

**Connecter l'écran OLED SSD1306 (connexion I2C)**

- La broche **GND** de l'écran à la bande d'alimentation **-** de la breadboard
- La broche **VCC** de l'écran sur la broche **3.3V** de la carte
- La broche **SDA** de l'écran sur la broche **D14** de la carte
- La broche **SCL** de l'écran sur la broche **D15** de la carte

:::info
Pour cette activité, installez les extensions **soil-hygrometer** et **oled**.
:::

**Programme**

```javascript
let humidity = 0
forever(function () {
    humidity = input.getSoilHumidity(pins.A0)

    oled.clear()
    oled.showValue("humidity", humidity, 1)

    if (humidity <= 450) {
        oled.showString("Too dry!", 2)
    } else if (humidity >= 450 && humidity < 700) {
        oled.showString("All ok! I'm fine :)", 2)
    } else {
        oled.showString("Too wet!", 2)
    }
    
    pause(500)
})
```

---

## Fiche 3 : programmation d'un servomoteur

**Câbler le servomoteur**

- **Marron** (ou violet) sur le GND
- **Rouge** sur le 5V
- **Orange** sur la broche 9

**Programme**

```javascript
forever(function () {
    Serial.writeValue("Angle", 0)
    pins.D9.servoWrite(0)
    loops.pause(1000)

    Serial.writeValue("Angle", 90)
    pins.D9.servoWrite(90)
    loops.pause(1000)
})
```

---

## Fiche 4 : créer un système d'arrosage automatique

**Câblage du capteur d'humidité**

- La broche **+** du capteur sur 5V
- La broche **-** du capteur sur GND
- La broche **S** du capteur sur A0

**Programme**

```javascript
let humidity = 0
pins.D9.servoWrite(0)

forever(function () {
    oled.clear()
    humidity = input.getSoilHumidity(pins.A0)

    oled.showValue("humidity", humidity, 1);

    if (humidity <= 450) {
        oled.showString("Too dry :(", 2);

        pins.D9.servoWrite(90)
        loops.pause(2000)
        pins.D9.servoWrite(0)
        loops.pause(3000)

    } else if (humidity >= 450 && humidity < 700) {
        oled.showString("I'm fine :)", 2);
    } else {
        oled.showString("Too wet!! :(", 2);
    }

    pause(500)
})
```

---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

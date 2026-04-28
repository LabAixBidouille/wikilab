---
id: programmation-solution-meteo
title: Station météo STM32
sidebar_label: "Station météo STM32"
sidebar_position: 13
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="4" y="4" width="16" height="16" rx="2" fill="#1a4a48" opacity="0.1"/><rect x="6" y="6" width="12" height="12" rx="1" fill="#1a4a48" opacity="0.25"/><path d="M9 10h6M9 12h6M9 14h4" stroke="#1a4a48" strokeWidth="1" strokeLinecap="round" opacity="1.0"/></svg> Station météo STM32

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--info">Capteurs intégrés (T, P, H)</span>
  <span className="badge badge--info">Anémomètre</span>
  <span className="badge badge--info">Écran OLED SSD1306</span>
  <span className="badge badge--warning">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| The Dexter Lab | 1-2 heures | Avancé | 13-18 ans |

## Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 1 anémomètre (imprimable 3D)
- 1 écran OLED SSD1306
- 1 breadboard + câbles
- 1 câble USB - micro B

</div>

<img src="/img/ressources/thedexterlab/programmation-solution-meteo/icone.svg" alt="Station météo STM32" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Cette fiche technique accompagne la ressource [Solution météo](/ressources/thedexterlab/solution-meteo). Elle réunit tous les programmes MakeCode nécessaires pour construire une mini-station météo : température, pression, humidité, vitesse du vent, puis l'affichage synthétique sur un écran OLED.

## Objectifs d'apprentissage

- Utiliser les capteurs internes de la STM32 (température, pression, humidité)
- Programmer un anémomètre externe et calculer une vitesse
- Combiner plusieurs mesures dans un même programme
- Afficher une station météo complète sur un écran OLED

---

## Mesure de la température

```javascript
Serial.attachToConsole()
forever(function () {
    Serial.writeValue("temperature", input.temperature(TemperatureUnit.Celsius))
    pause(500)
})
```

---

## Mesure de la pression atmosphérique

```javascript
Serial.attachToConsole()
forever(function () {
    Serial.writeValue("pression", input.pressure(PressureUnit.HectoPascal))
    pause(500)
})
```

---

## Mesure de l'humidité relative

```javascript
Serial.attachToConsole()
forever(function () {
    Serial.writeValue("humidity", input.humidity())
    pause(500)
})
```

---

## Mesure de la vitesse du vent

```javascript
let period = 3
let armLength = 0.1
let speed = 0

Serial.attachToConsole()

forever(function () {
    speed = 2 * Math.PI * armLength * input.getAnemometerRotationPerUnit(pins.A0, AnemometerUnit.RPS, period) * 3.6
    Serial.writeValue("speed", speed)
})
```

---

## Station météo complète sur écran OLED

**Câblage anémomètre :**

- Broche '-' de l'anémomètre → bande '-' de la breadboard
- GND de la carte → bande '-' de la breadboard
- Broche '+' de l'anémomètre → bande '+' de la breadboard
- 3.3V de la carte → bande '+' de la breadboard
- Broche Signal de l'anémomètre → A0 de la carte

**Câblage écran OLED I2C :** GND, VCC, SDA (D14), SCL (D15).

Installez les extensions **anemometer** et **oled**.

```javascript
let wind = 0
function getAnemometerSpeed (armLength: number, period: number) {
    return 2 * Math.PI * armLength * input.getAnemometerRotationPerUnit(pins.A0, AnemometerUnit.RPS, period) * 3.6
}
forever(function () {
    wind = getAnemometerSpeed(0.1, 1)
    oled.clear()
    oled.showValue("temperature", input.temperature(TemperatureUnit.Celsius), 1)
    oled.showValue("pressure", input.pressure(PressureUnit.HectoPascal), 2)
    oled.showValue("humidity", input.humidity(), 3)
    oled.showValue("wind speed", wind, 4)
    pause(1000)
})
```

---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

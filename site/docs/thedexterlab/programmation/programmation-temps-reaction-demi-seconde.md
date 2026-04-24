---
id: programmation-temps-reaction-demi-seconde
title: Temps de réaction STM32
sidebar_label: "Temps de réaction STM32"
sidebar_position: 10
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="4" y="4" width="16" height="16" rx="2" fill="#1a4a48" opacity="0.1"/><rect x="6" y="6" width="12" height="12" rx="1" fill="#1a4a48" opacity="0.25"/><path d="M9 10h6M9 12h6M9 14h4" stroke="#1a4a48" strokeWidth="1" strokeLinecap="round" opacity="1.0"/></svg> Temps de réaction STM32

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--info">Bouton-poussoir</span>
  <span className="badge badge--info">LED, Buzzer</span>
  <span className="badge badge--info">Écran OLED SSD1306</span>
  <span className="badge badge--warning">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| The Dexter Lab | 1-2 heures | Intermédiaire | 12-16 ans |

## Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 1 bouton-poussoir
- 1 LED + résistance 330 Ω
- 1 buzzer
- 1 écran OLED SSD1306
- 1 breadboard + câbles
- 1 câble USB - micro B

</div>

</div>

---

## De quoi parle-t-on ?

Cette fiche technique accompagne la ressource [Temps de réaction en une demi-seconde](/ressources/thedexterlab/temps-reaction-demi-seconde). Elle décrit comment mesurer un temps de réaction suite à un stimulus visuel (LED) ou sonore (buzzer) grâce à un bouton-poussoir, puis comment afficher les résultats sur un écran OLED.

## Objectifs d'apprentissage

- Câbler et programmer une LED, un buzzer et un bouton-poussoir
- Utiliser `control.millis()` pour mesurer un intervalle de temps
- Générer des délais aléatoires pour un jeu de réaction
- Afficher le temps de réaction sur un écran OLED

---

## PROG13-TDL-1 : stimulus visuel (LED)

**Câblage :**

- Bouton-poussoir : une patte sur GND, l'autre sur D2
- LED : anode sur D4, cathode via résistance 330Ω sur GND

:::info
La LED a une orientation. L'anode (le '+') est plus longue que la cathode (le '-').
:::

Installez l'extension **Serial** dans MakeCode.

```javascript
input.buttonD2.onEvent(ButtonEvent.Down, function () {
    Serial.writeValue("Reaction time (ms)", (control.millis() - timeTurnOn));
    newGame()
})
function newGame () {
    pins.D4.digitalWrite(false)
    pause(randint(1000, 5000))
    timeTurnOn = control.millis()
    pins.D4.digitalWrite(true)
}
let timeTurnOn = 0
Serial.attachToConsole()
newGame()
```

---

## PROG13-TDL-2 : stimulus sonore (buzzer)

**Câblage :**

- Bouton-poussoir : une patte sur GND, l'autre sur D2
- Buzzer : côté '+' sur D3, côté '-' sur GND

Installez les extensions **Music** et **Serial**.

```javascript
input.buttonD2.onEvent(ButtonEvent.Down, function () {
    Serial.writeValue("Reaction time (ms)", (control.millis() - timeTurnOn));
    newGame()
})
function newGame () {
    music.stopAllSounds()
    pause(randint(1000, 5000))
    timeTurnOn = control.millis()
    music.ringTone(262)
}
let timeTurnOn = 0
Serial.attachToConsole()
newGame()
```

---

## PROG13-TDL-3 : afficher les données sur un écran

**Câblage écran OLED SSD1306 (I2C) :**

- GND → bande '-' de la breadboard
- VCC → 3.3V de la carte
- SDA → D14 de la carte
- SCL → D15 de la carte

Installez l'extension **oled**.

**Avec stimulus visuel (LED) :**

```javascript
function newGame () {
    pins.D4.digitalWrite(false)
    pause(randint(1000, 5000))
    timeTurnOn = control.millis()
    pins.D4.digitalWrite(true)
}
input.buttonD2.onEvent(ButtonEvent.Down, function () {
    reaction = control.millis() - timeTurnOn
    oled.clear()
    oled.showString("Reaction time:", 1)
    oled.showString("" + reaction + "ms", 2)
    newGame()
})
let reaction = 0
let timeTurnOn = 0
Serial.attachToConsole()
newGame()
```

---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

---
id: programmation-distraction-temps-reaction
title: Test de distraction STM32
sidebar_label: "Test de distraction STM32"
sidebar_position: 11
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="4" y="4" width="16" height="16" rx="2" fill="#1a4a48" opacity="0.1"/><rect x="6" y="6" width="12" height="12" rx="1" fill="#1a4a48" opacity="0.25"/><path d="M9 10h6M9 12h6M9 14h4" stroke="#1a4a48" strokeWidth="1" strokeLinecap="round" opacity="1.0"/></svg> Test de distraction STM32

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--info">Bouton-poussoir</span>
  <span className="badge badge--info">LED, Buzzer</span>
  <span className="badge badge--info">Écran OLED</span>
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

<img src="/img/ressources/thedexterlab/programmation-distraction-temps-reaction/icone.svg" alt="Test de distraction STM32" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Cette fiche technique accompagne la ressource [Distractions et temps de réaction](/ressources/thedexterlab/distraction-temps-reaction). Elle reprend la chaîne de programmation pour mesurer le temps de réaction avec stimulus visuel ou sonore, afin d'étudier comment différentes formes de distraction (musique, téléphone, conversation) affectent la vitesse de réponse.

## Objectifs d'apprentissage

- Programmer un stimulus visuel (LED) puis sonore (buzzer) en MakeCode
- Mesurer un intervalle temporel via `control.millis()`
- Comparer des mesures dans plusieurs conditions expérimentales
- Afficher les résultats sur un écran OLED

---

## PROG14-TDL-1 : Stimulus visuel (LED)

**Câblage :** Bouton-poussoir sur GND/D2, LED anode sur D4, cathode via résistance 330Ω sur GND.

Installez l'extension **Serial**.

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

## PROG14-TDL-2 : Stimulus sonore (buzzer)

**Câblage :** Bouton-poussoir sur GND/D2, buzzer '+' sur D3, '-' sur GND.

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

## PROG14-TDL-3 : Afficher les données sur un écran

**Câblage écran OLED I2C :** GND, VCC (3.3V), SDA (D14), SCL (D15).

Installez l'extension **oled**.

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

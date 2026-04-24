---
id: programmation-temperature-vitesse-son
title: Son et température STM32
sidebar_label: "Son et température STM32"
sidebar_position: 8
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="4" y="4" width="16" height="16" rx="2" fill="#1a4a48" opacity="0.1"/><rect x="6" y="6" width="12" height="12" rx="1" fill="#1a4a48" opacity="0.25"/><path d="M9 10h6M9 12h6M9 14h4" stroke="#1a4a48" strokeWidth="1" strokeLinecap="round" opacity="1.0"/></svg> Son et température STM32

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--info">Capteur HC-SR04</span>
  <span className="badge badge--info">Écran OLED SSD1306</span>
  <span className="badge badge--warning">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| The Dexter Lab | 1 heure | Intermédiaire | 13-18 ans |

## Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 1 capteur à ultrasons HC-SR04
- 1 écran OLED SSD1306
- 1 breadboard + câbles
- 1 câble USB - micro B

</div>

</div>

---

## De quoi parle-t-on ?

Cette fiche technique accompagne la ressource [Température et vitesse du son](/ressources/thedexterlab/temperature-vitesse-son). Elle décrit le câblage d'un capteur à ultrasons HC-SR04 et d'un écran OLED, ainsi que le programme qui déclenche la mesure et affiche à la fois la température et le temps de parcours du son.

## Objectifs d'apprentissage

- Câbler simultanément un capteur à ultrasons et un écran OLED en I2C
- Utiliser un événement de température pour déclencher une action
- Afficher plusieurs valeurs synchronisées sur un écran OLED

---

## Fiche de programmation : mesurer la variation de la vitesse du son

### Câblage

**Capteur de distance HC-SR04 :**

- Broche GND du capteur sur la broche GND de la carte
- Broche VCC du capteur sur la broche 5V de la carte
- Broche Trig du capteur sur la broche D6 de la carte
- Broche Echo du capteur sur la broche D7 de la carte

**Écran OLED SSD1306 (connexion I2C) :**

- Broche GND de l'écran à la bande d'alimentation '-' de la breadboard
- Broche VCC de l'écran sur la broche 3.3V de la carte
- Broche SDA de l'écran sur la broche D14 de la carte
- Broche SCL de l'écran sur la broche D15 de la carte

:::info
Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base. Elles ajoutent des blocs pour des fonctionnalités spécifiques. Pour cette activité, installez les extensions **hcsr04** et **oled**.
:::

### Programme

```javascript
input.onTemperatureConditionChanged(TemperatureCondition.Cold, 30, TemperatureUnit.Celsius, function () {
    pins.D0.digitalWrite(true)
})
input.onTemperatureConditionChanged(TemperatureCondition.Hot, 30, TemperatureUnit.Celsius, function () {
    pins.D0.digitalWrite(false)
})
let minute = 0
forever(function () {
    oled.clear()
    oled.showValue("minute", minute, 1)
    oled.showValue("temp", input.temperature(TemperatureUnit.Celsius), 2)
    oled.showValue("time", HCSR04.getTime(MHCSR04TimeUnit.Ms), 3)
    minute += 1
    pause(60000)
})
```

---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

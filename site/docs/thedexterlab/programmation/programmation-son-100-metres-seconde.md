---
id: programmation-son-100-metres-seconde
title: Mesure vitesse du son STM32
sidebar_label: "Mesure vitesse du son STM32"
sidebar_position: 9
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="4" y="4" width="16" height="16" rx="2" fill="#1a4a48" opacity="0.1"/><rect x="6" y="6" width="12" height="12" rx="1" fill="#1a4a48" opacity="0.25"/><path d="M9 10h6M9 12h6M9 14h4" stroke="#1a4a48" strokeWidth="1" strokeLinecap="round" opacity="1.0"/></svg> Mesure vitesse du son STM32

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
| The Dexter Lab | 45 min | Intermédiaire | 13-18 ans |

## Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 1 capteur à ultrasons HC-SR04
- 1 écran OLED SSD1306
- 1 breadboard + câbles
- 1 câble USB - micro B

</div>

<img src="/img/ressources/thedexterlab/programmation-son-100-metres-seconde/icone.svg" alt="Mesure vitesse du son STM32" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Cette fiche technique accompagne la ressource [Le son et les 100 mètres en 1 seconde](/ressources/thedexterlab/son-100-metres-seconde). Elle propose de mesurer avec précision la durée d'un aller-retour d'onde sonore grâce à un capteur à ultrasons, puis d'afficher cette durée sur un écran OLED pour en déduire la vitesse du son.

## Objectifs d'apprentissage

- Déclencher une mesure via un bouton utilisateur
- Utiliser le capteur HC-SR04 pour récupérer une durée en microsecondes
- Coupler une entrée utilisateur et un affichage OLED

---

## PROG12-TDL-1 : Mesurer une durée

**Câblage capteur HC-SR04 :**

- GND → GND de la carte
- VCC → 5V de la carte
- Trig → D6 de la carte
- Echo → D7 de la carte

:::info
Installez les extensions **hcsr04** et **serial** dans MakeCode.
:::

```javascript
Serial.attachToConsole()
input.buttonUser.onEvent(ButtonEvent.Click, function () {
    Serial.writeValue("travel time", HCSR04.getTime(MHCSR04TimeUnit.Us))
})
```

---

## PROG12-TDL-2 : Afficher les données sur un écran

**Câblage écran OLED SSD1306 (I2C) :**

- GND de l'écran → bande d'alimentation '-' de la breadboard
- VCC de l'écran → 3.3V de la carte
- SDA de l'écran → D14 de la carte
- SCL de l'écran → D15 de la carte

Installez les extensions **hcsr04** et **oled**.

```javascript
input.buttonUser.onEvent(ButtonEvent.Click, function () {
    oled.clear()
    oled.showString("travel time", 1)
    oled.showNumber(HCSR04.getTime(MHCSR04TimeUnit.S), 2)
})
```

---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

---
id: programmation-qualite-air-personnes
title: Capteur CO2 classe STM32
sidebar_label: "Capteur CO2 classe STM32"
sidebar_position: 6
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="4" y="4" width="16" height="16" rx="2" fill="#1a4a48" opacity="0.1"/><rect x="6" y="6" width="12" height="12" rx="1" fill="#1a4a48" opacity="0.25"/><path d="M9 10h6M9 12h6M9 14h4" stroke="#1a4a48" strokeWidth="1" strokeLinecap="round" opacity="1.0"/></svg> Capteur CO2 classe STM32

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--info">Capteur MH-Z19B</span>
  <span className="badge badge--info">Écran OLED SSD1306</span>
  <span className="badge badge--warning">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| The Dexter Lab | 1 heure | Intermédiaire | 12-16 ans |

## Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 1 capteur de CO2 MH-Z19B
- 1 écran OLED SSD1306
- 1 breadboard + câbles
- 1 câble USB - micro B

</div>

</div>

---

## De quoi parle-t-on ?

Cette fiche technique accompagne la ressource [Qualité de l'air et personnes](/ressources/thedexterlab/qualite-air-personnes). Elle présente le câblage et le code MakeCode nécessaires pour mesurer la concentration en CO2 dans une pièce et afficher ces données en temps réel sur un écran OLED.

## Objectifs d'apprentissage

- Câbler un capteur de CO2 MH-Z19B en mode PWM
- Lire une valeur de CO2 et l'envoyer sur la console série
- Afficher une mesure dynamique sur un écran OLED I2C

---

## Fiche 1 : mesurer la concentration de CO2

**Câbler le capteur MH-Z19B (PWM)** :

- Orange pour Vin (5V)
- Bleu pour GND
- Violet pour PWM (D7)

:::info
Pour cette activité, installez les extensions **mh_z19b** et **serial**.
:::

**Programme**

```javascript
Serial.attachToConsole()

forever(function () {
    Serial.writeValue("co2", input.getCO2Concentration(pins.D7))
    pause(1000)
})
```

---

## Fiche 2 : afficher les données collectées sur un écran

**Connecter l'écran OLED SSD1306 (I2C)** :

- Bleu pour GND
- Rouge pour V+ (3V3)
- Jaune pour SDA (D14)
- Vert pour SCL (D15)

:::info
Pour cette activité, installez les extensions **OLED** et **mh_z19b**.
:::

**Programme**

```javascript
forever(function () {
    oled.clear()
    oled.showValue("CO2", input.getCO2Concentration(pins.D7), 1);
    pause(1000)
})
```

---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

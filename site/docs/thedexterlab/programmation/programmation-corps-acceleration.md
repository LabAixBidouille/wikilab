---
id: programmation-corps-acceleration
title: "Programmation : Corps et accélération"
sidebar_label: "Corps et accélération"
sidebar_position: 7
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="4" y="4" width="16" height="16" rx="2" fill="#1a4a48" opacity="0.1"/><rect x="6" y="6" width="12" height="12" rx="1" fill="#1a4a48" opacity="0.25"/><path d="M9 10h6M9 12h6M9 14h4" stroke="#1a4a48" strokeWidth="1" strokeLinecap="round" opacity="1.0"/></svg> Programmation : Corps et accélération

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--info">Accéléromètre intégré</span>
  <span className="badge badge--info">Écran LCD I2C</span>
  <span className="badge badge--warning">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| The Dexter Lab | 1 heure | Intermédiaire | 12-16 ans |

## Matériel

- 1 carte programmable "STM32 IoT Node Board" (accéléromètre intégré)
- 1 écran LCD I2C
- Des câbles de connexion
- 1 câble USB - micro B

</div>

</div>

---

## De quoi parle-t-on ?

Cette fiche technique accompagne la ressource [Corps et accélération](/ressources/thedexterlab/corps-acceleration). Elle présente comment utiliser l'accéléromètre intégré à la carte STM32 pour mesurer les accélérations ressenties par le corps humain, et comment afficher ces valeurs sur un écran LCD.

## Objectifs d'apprentissage

- Configurer la plage de mesure de l'accéléromètre intégré
- Capturer une valeur maximale d'accélération en boucle
- Afficher les valeurs sur un écran LCD I2C

---

## Fiche 1 : collecter des données à l'aide de l'accéléromètre

L'accéléromètre est présent sur la STM32 IoT Node Discovery, il n'y a donc pas de branchement à faire.

:::info
Pour cette activité, installez l'extension **serial**.
:::

**Programme**

```javascript
let max = 0
let data = 0

Serial.attachToConsole()
input.setAccelerometerRange(AcceleratorRange.EightG)

forever(function () {
    data = input.acceleration(Dimension.Strength)
    if (data > max) {
        max = data
        Serial.writeValue("Max acceleration", max)
    }
})
```

---

## Fiche 2 : afficher les données sur un écran

**Connecter l'écran LCD (I2C)** :

- Noir pour GND (GND)
- Rouge pour VCC (5V)
- Violet pour SDA (D14)
- Vert pour SCL (D15)

:::info
Pour cette activité, installez l'extension **lcd_i2c**.
:::

**Programme**

```javascript
let max = 0
let data = 0

input.setAccelerometerRange(AcceleratorRange.EightG)
lcd_i2c.initScreen()

forever(function () {
    data = input.acceleration(Dimension.Strength)
    if (data > max) {
        max = data
        lcd_i2c.setCursor(0, 0)
        lcd_i2c.ShowValue("x", max)
    }
})
```

---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

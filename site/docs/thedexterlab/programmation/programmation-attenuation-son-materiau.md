---
id: programmation-attenuation-son-materiau
title: Atténuation sonore STM32
sidebar_label: "Atténuation sonore STM32"
sidebar_position: 12
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Atténuation sonore STM32

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--info">Microphone intégré</span>
  <span className="badge badge--info">Écran LCD I2C</span>
  <span className="badge badge--warning">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| The Dexter Lab | 45 min | Intermédiaire | 12-16 ans |

## Matériel

- 1 carte programmable "STM32 IoT Node Board" (microphone intégré)
- 1 écran LCD I2C
- Des câbles de connexion
- 1 câble USB - micro B

</div>

<img src="/img/ressources/thedexterlab/programmation-attenuation-son-materiau/icone.svg" alt="Atténuation sonore STM32" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Cette fiche technique accompagne la ressource [Atténuation du son par matériau](/ressources/thedexterlab/attenuation-son-materiau). Elle explique comment lire l'intensité sonore (en dB) avec le microphone intégré à la carte STM32, puis comment afficher cette valeur en temps réel sur un écran LCD pour comparer plusieurs matériaux.

## Objectifs d'apprentissage

- Lire une valeur de décibels avec le microphone intégré
- Afficher une valeur dynamique sur un écran LCD I2C
- Comparer l'atténuation sonore entre différents matériaux

---

## Étape 1 : Mesurer l'intensité d'un son

Nous utilisons le microphone intégré à la STM32 IoT Node Discovery, donc pas de branchement particulier. Installez l'extension **serial**.

```javascript
Serial.attachToConsole()

forever(function(){
    Serial.writeValue("Decibel", input.decibel());
    pause(200)
})
```

<img src="/img/ressources/thedexterlab/programmation-attenuation-son-materiau/Untitled%20%289%29.webp" alt="Simulateur" style={{width: '30%', height: 'auto', display: 'block', margin: '1rem 0'}} />

---

## Étape 2 : Afficher les données sur un écran

**Câblage écran LCD I2C :**

- Noir → GND (GND)
- Rouge → VCC (5V)
- Violet → SDA (D14)
- Vert → SCL (D15)

Installez l'extension **lcd_i2c**.

```javascript
lcd_i2c.initScreen()
lcd_i2c.setCursor(0, 0);
lcd_i2c.ShowString("Decibel (dB):")

forever(function () {
    lcd_i2c.setCursor(0, 1);
    lcd_i2c.ShowNumber(input.decibel());
    lcd_i2c.ShowString("   ");
    pause(200)
})
```

<img src="/img/ressources/thedexterlab/programmation-attenuation-son-materiau/Untitled.webp" alt="Simulateur" style={{width: '30%', height: 'auto', display: 'block', margin: '1rem 0'}} />

---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

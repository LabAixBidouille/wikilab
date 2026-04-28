---
id: programmation-panneau-solaire-journee
title: Suivi panneau solaire STM32
sidebar_label: "Suivi panneau solaire STM32"
sidebar_position: 3
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="4" y="4" width="16" height="16" rx="2" fill="#1a4a48" opacity="0.1"/><rect x="6" y="6" width="12" height="12" rx="1" fill="#1a4a48" opacity="0.25"/><path d="M9 10h6M9 12h6M9 14h4" stroke="#1a4a48" strokeWidth="1" strokeLinecap="round" opacity="1.0"/></svg> Suivi panneau solaire STM32

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--info">Capteur INA219</span>
  <span className="badge badge--info">Écran OLED SSD1306</span>
  <span className="badge badge--warning">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| The Dexter Lab | 1-2 heures | Intermédiaire | 13-18 ans |

## Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 1 capteur de tension INA219
- 1 écran OLED SSD1306
- 1 panneau solaire (modèle école)
- 1 résistance de 100 Ω
- 1 breadboard
- Des câbles de connexion
- 1 câble USB - micro B

</div>

<img src="/img/ressources/thedexterlab/programmation-panneau-solaire-journee/icone.svg" alt="Suivi panneau solaire STM32" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Cette fiche technique accompagne la ressource [Panneau solaire sur une journée](/ressources/thedexterlab/panneau-solaire-journee). Elle explique comment câbler un capteur de tension INA219 (I2C) à un panneau solaire, afficher ses valeurs sur un écran OLED et déclencher une alarme lorsque le rendement chute.

## Objectifs d'apprentissage

- Câbler un capteur I2C (INA219) à une carte STM32
- Mesurer et afficher une tension variable issue d'un panneau solaire
- Combiner affichage OLED et condition d'alarme en MakeCode

---

## Fiche 1 : Collecter les données grâce au capteur de tension

**Câbler le capteur de tension (I2C)** :

- Violet pour SDA
- Vert pour SCL
- Bleu pour GND
- Rouge pour VCC (3.3V)

**Câbler le panneau solaire** :

- Le fil rouge (positif) sur le bornier à vis Vin+
- Le fil noir (négatif) connecté d'une part sur le GND de la carte, et d'autre part sur une résistance de 100 ohms elle-même branchée sur le bornier à vis Vin-

:::info
Pour cette activité, installez les extensions **SERIAL** et **INA219**.
:::

**Programme**

```javascript
Serial.attachToConsole()

forever(function () {
    Serial.writeValue("Voltage", input.getINA219Voltage())
    pause(5000)
})
```

---

## Fiche 2 : Afficher les données sur un écran

**Connecter l'écran OLED SSD1306 (I2C)** :

- Bleu pour GND
- Rouge pour V+ (3V3)
- Orange pour SDA (D14)
- Jaune pour SCL (D15)

**Câbler le capteur de tension** (mêmes broches I2C que l'écran, utiliser la breadboard pour le partage).

**Câbler le panneau solaire** :

- Fil positif sur Vin+
- Fil négatif sur Vin-

:::info
Pour cette activité, installez les extensions **OLED** et **INA219**.
:::

**Programme**

```javascript
forever(function () {
    oled.clear()
    oled.showValue("Voltage (V)", input.getINA219Voltage(), 1)
    pause(1000);
})
```

---

## Fiche 3 : Créer un système d'alarme

Même câblage que la fiche 2 (écran OLED + capteur INA219 + panneau solaire).

**Programme**

```javascript
forever(function () {
    oled.clear()
    oled.showValue("Voltage (V)", input.getINA219Voltage(), 1)
    if(input.getINA219Voltage() < 2){
        oled.clear()
        oled.showString("ALARME", 1)
        oled.showString("Rendement trop bas !", 2)
        oled.showString("Le panneau doit etre oriente", 3)
    }
    pause(1000);
})
```

---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

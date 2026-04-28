---
id: programmation-panneau-solaire-auto-orientable
title: Panneau solaire orientable STM32
sidebar_label: "Panneau solaire orientable STM32"
sidebar_position: 4
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="4" y="4" width="16" height="16" rx="2" fill="#1a4a48" opacity="0.1"/><rect x="6" y="6" width="12" height="12" rx="1" fill="#1a4a48" opacity="0.25"/><path d="M9 10h6M9 12h6M9 14h4" stroke="#1a4a48" strokeWidth="1" strokeLinecap="round" opacity="1.0"/></svg> Panneau solaire orientable STM32

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--info">Photorésistance (LDR)</span>
  <span className="badge badge--info">Servomoteur</span>
  <span className="badge badge--info">Capteur INA219</span>
  <span className="badge badge--warning">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| The Dexter Lab | 2-3 heures | Avancé | 13-18 ans |

## Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 2 photorésistances (LDR)
- 2 résistances de 10 kΩ
- 1 servomoteur
- 1 capteur de tension INA219
- 1 panneau solaire
- 1 résistance de 100 Ω
- 1 breadboard + câbles
- 1 câble USB - micro B

</div>

<img src="/img/ressources/thedexterlab/programmation-panneau-solaire-auto-orientable/icone.svg" alt="Panneau solaire orientable STM32" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Cette fiche technique accompagne la ressource [Panneau solaire auto-orientable](/ressources/thedexterlab/panneau-solaire-auto-orientable). Elle couvre toute la chaîne de programmation : mesurer la lumière avec deux photorésistances, piloter un servomoteur et créer un suiveur solaire automatique qui oriente le panneau en fonction de la différence d'éclairage.

## Objectifs d'apprentissage

- Comprendre le fonctionnement d'un diviseur de tension avec une LDR
- Lire plusieurs entrées analogiques et comparer leurs valeurs
- Piloter un servomoteur à partir d'une condition algorithmique
- Assembler un système complet intégrant capteurs et actionneurs

---

## Étape 1 : Collecter des données grâce au capteur de lumière

Le circuit que nous devons assembler se compose de deux éléments : une résistance de 10 kΩ et une cellule photoélectrique.

<img src="/img/ressources/thedexterlab/programmation-panneau-solaire-auto-orientable/cablercellulephotovoltaique.webp" alt="Câblage cellule photovoltaïque" style={{width: '30%', height: 'auto', display: 'block', margin: '1rem 0'}} />

:::info
Pour cette activité, installez l'extension **serial**.
:::

**Programme**

```javascript
forever(function () {
    Serial.writeValue("LDR Left", pins.A0.analogRead())
    pause(1000)
})
```

---

## Étape 2 : Mesurer le changement d'intensité lumineuse avec deux LDR

Le circuit se compose de deux LDR. Nous brancherons la LDR de "gauche" sur A0 et la cellule photoélectrique de "droite" sur A1.

<img src="/img/ressources/thedexterlab/programmation-panneau-solaire-auto-orientable/cablerplusieurscellule.webp" alt="Câblage de plusieurs cellules" style={{width: '30%', height: 'auto', display: 'block', margin: '1rem 0'}} />

**Programme**

```javascript
forever(function () {
    Serial.writeValue("Left", pins.A0.analogRead())
    Serial.writeValue("Right", pins.A1.analogRead())
    Serial.writeValue("Difference", pins.A0.analogRead() - pins.A1.analogRead())
    pause(1000)
})
```

---

## Étape 3 : Programmation d'un servomoteur

**Câbler le servomoteur** :

- Marron (ou violet) sur le GND
- Rouge sur le 5V
- Orange sur la broche 9

<img src="/img/ressources/thedexterlab/programmation-panneau-solaire-auto-orientable/cablerservomoteur.webp" alt="Câblage du servomoteur" style={{width: '30%', height: 'auto', display: 'block', margin: '1rem 0'}} />

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

## Étape 4 : Programmation du suiveur solaire

Combiner le servomoteur et les deux LDR. LDR gauche sur A0, LDR droite sur A1, servomoteur sur D9.

<img src="/img/ressources/thedexterlab/programmation-panneau-solaire-auto-orientable/servoetcellules.webp" alt="Servomoteur et cellules" style={{width: '30%', height: 'auto', display: 'block', margin: '1rem 0'}} />

**Programme**

```javascript
const moveThreshold = 10;

let startOrientation = 0;
let endOrientation = 180;
let currentOrientation = startOrientation;

forever(function () {
    let previousOrientation = currentOrientation;
    let leftIllumination = pins.A0.analogRead()
    let rightIllumination = pins.A1.analogRead()
    let differenceOfIllumination = leftIllumination - rightIllumination
    
    Serial.writeValue("Left", leftIllumination)
    Serial.writeValue("Right", rightIllumination)
    Serial.writeValue("Difference", differenceOfIllumination)
    
    if(Math.abs(differenceOfIllumination) > moveThreshold)
    {
        if (differenceOfIllumination > 0){
            currentOrientation++ // Turn left
            Serial.writeLine("Turn left")
        }
        else if (differenceOfIllumination < 0){
            currentOrientation-- // Turn right
            Serial.writeLine("Turn right")
        }
    }

    if (currentOrientation < startOrientation)
        currentOrientation = startOrientation

    if (currentOrientation > endOrientation)
        currentOrientation = endOrientation

    if(previousOrientation != currentOrientation)
        pins.D9.servoWrite(currentOrientation)

    pause(1000)
})
```

---

## Étape 5 : Collecter les données grâce au capteur de tension

**Câbler le capteur de tension (I2C)** :

- Violet pour SDA
- Vert pour SCL
- Bleu pour GND
- Rouge pour VCC (3.3V)

**Câbler le panneau solaire** sur Vin+ et Vin- (avec résistance de 100 Ω).

<img src="/img/ressources/thedexterlab/programmation-panneau-solaire-auto-orientable/capteurtension.webp" alt="Capteur de tension" style={{width: '30%', height: 'auto', display: 'block', margin: '1rem 0'}} />

**Programme**

```javascript
Serial.attachToConsole()

forever(function () {
    Serial.writeValue("Voltage", input.getINA219Voltage())
    pause(5000)
})
```

---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

---
id: programmation-plante-co2
title: Capteur CO2 plantes STM32
sidebar_label: "Capteur CO2 plantes STM32"
sidebar_position: 5
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Capteur CO2 plantes STM32

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
| The Dexter Lab | 1-2 heures | Intermédiaire | 12-16 ans |

## Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 1 capteur de CO2 MH-Z19B
- 1 écran OLED SSD1306
- 1 breadboard + câbles
- 1 câble USB - micro B

</div>

<img src="/img/ressources/thedexterlab/programmation-plante-co2/icone.svg" alt="Capteur CO2 plantes STM32" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Cette fiche technique accompagne la ressource [Plantes et CO2](/ressources/thedexterlab/plante-co2). Elle regroupe les étapes de programmation pour mesurer la concentration en CO2 dans l'air, afficher les valeurs sur un écran OLED et exporter les mesures au format CSV pour une analyse ultérieure.

## Objectifs d'apprentissage

- Câbler et programmer un capteur de CO2 (MH-Z19B) avec MakeCode
- Afficher plusieurs valeurs simultanément sur un écran OLED
- Utiliser le datalogger de MakeCode pour enregistrer des données au format CSV
- Combiner plusieurs capteurs internes et externes dans un même programme

---

## Étape 1 : Mesurer le taux de CO2 dans l'air

**Câbler le capteur MH-Z19B** :

- GND du capteur sur GND de la carte
- Vin du capteur sur 5V de la carte
- PWM du capteur sur A0 de la carte

<img src="/img/ressources/thedexterlab/programmation-plante-co2/capteurco2.webp" alt="Capteur CO2 connecté" style={{width: '30%', height: 'auto', display: 'block', margin: '1rem 0'}} />

:::info
Pour cette activité, installez les extensions **Serial** et **mh-z19b**.
:::

**Programme**

```javascript
Serial.attachToConsole()
forever(function () {
    Serial.writeValue("co2 level", input.getCO2Concentration(pins.A0))
    pause(500)
})
```

---

## Étape 2 : Afficher les données sur un écran OLED

**Connecter l'écran SSD1306 (I2C)** :

- GND à la bande d'alimentation '-' de la breadboard
- VCC sur 3.3V
- SDA sur D14
- SCL sur D15

<img src="/img/ressources/thedexterlab/programmation-plante-co2/%C3%A9cran.webp" alt="Capteur CO2 avec écran OLED" style={{width: '30%', height: 'auto', display: 'block', margin: '1rem 0'}} />

:::info
Pour cette activité, installez les extensions **mh-z19b** et **oled**.
:::

**Programme**

```javascript
forever(function () {
    oled.clear()
    oled.showString("CO2 level", 1)
    oled.showNumber(input.getCO2Concentration(pins.A0), 2)
    pause(500)
})
```

---

## Étape 3 : Exporter les données au format CSV

<img src="/img/ressources/thedexterlab/programmation-plante-co2/datalogger.webp" alt="Datalogger CO2" style={{width: '100%', height: 'auto', display: 'block', margin: '1rem 0'}} />

:::info
Pour cette activité, installez les extensions **mh-z19b** et **datalogger**.
:::

**Programme** (mesure jour/nuit toutes les 12 heures = 43 200 000 ms)

```javascript
datalogger.setEnabled(true)
forever(function () {
    datalogger.addValue("jour", input.getCO2Concentration(pins.A0))
    pause(43200000)
    datalogger.addValue("nuit", input.getCO2Concentration(pins.A0))
    datalogger.addRow()
    pause(43200000)
})
```

---

## Étape 4 : Exporter CO2, température et humidité au format CSV

Les capteurs d'humidité et de température sont intégrés à la carte.

**Programme** (mesure toutes les heures = 3 600 000 ms)

```javascript
datalogger.setEnabled(true)
forever(function () {
    datalogger.addValue("CO2", input.getCO2Concentration(pins.A0))
    datalogger.addValue("humidity", input.humidity())
    datalogger.addValue("temperature", input.temperature(TemperatureUnit.Celsius))
    datalogger.addRow()
    pause(3600000)
})
```

---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

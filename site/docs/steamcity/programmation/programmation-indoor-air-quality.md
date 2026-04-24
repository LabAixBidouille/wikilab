---
id: programmation-indoor-air-quality
title: "Programmation : Indoor Air Quality"
sidebar_label: "Indoor Air Quality"
sidebar_position: 5
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="4" y="4" width="16" height="16" rx="2" fill="#DD5350" opacity="0.1"/><rect x="6" y="6" width="12" height="12" rx="1" fill="#DD5350" opacity="0.25"/><path d="M9 10h6M9 12h6M9 14h4" stroke="#DD5350" strokeWidth="1" strokeLinecap="round" opacity="1.0"/></svg> Programmation : Indoor Air Quality

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">NUCLEO-L476RG / Arduino / micro:bit</span>
  <span className="badge badge--info">Capteur SCD30</span>
  <span className="badge badge--info">Écran LCD RGB</span>
  <span className="badge badge--info">Bandeau NeoPixel</span>
  <span className="badge badge--warning">Vittascience</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| SteamCity | 2-3 heures | Intermédiaire | 12-16 ans |

## Matériel

- 1 carte programmable (NUCLEO-L476RG, Arduino ou micro:bit)
- 1 capteur de CO2 SCD30
- 1 écran LCD RGB 16x2
- 1 bandeau NeoPixel (30 LED)
- Câbles de connexion
- Ordinateur + éditeur [Vittascience](https://fr.vittascience.com/l476)

</div>

</div>

---

## De quoi parle-t-on ?

Cette fiche technique accompagne la ressource [Indoor Air Quality](/ressources/steamcity/indoor-air-quality). Elle décrit cinq fiches pratiques successives : lire le taux de CO2 avec le capteur SCD30, configurer les couleurs de l'écran LCD, afficher des seuils de CO2 via un bandeau NeoPixel, combiner affichage et indicateur lumineux, puis exporter les données pour les visualiser en graphique.

## Objectifs d'apprentissage

- Lire la valeur de CO2 d'un capteur I2C (SCD30)
- Contrôler un écran LCD RGB avec couleur et texte
- Piloter un bandeau NeoPixel selon des seuils
- Structurer un programme avec conditions `if/else if/else`
- Exporter les données pour une analyse graphique

---

## Fiche 1 : afficher le taux de CO2 sur écran LCD (capteur SCD30)

Éditeurs : [vittascience.com/l476](https://fr.vittascience.com/l476), [vittascience.com/arduino](https://fr.vittascience.com/arduino) ou [vittascience.com/microbit](https://fr.vittascience.com/microbit).

**Code**

```cpp
#include <Wire.h>
#include <rgb_lcd.h>
#include <SCD30.h>

rgb_lcd lcdRgb;

float t_scd;
float scd30_co2 = 0;
float scd30_t = 0;
float scd30_h = 0;

void serial_setupConnection(int baudrate) {
  Serial.begin(baudrate);
  while (!Serial) {
    Serial.println("En attente de l'ouverture du port série...");
    delay(1000);
  }
  Serial.println("Port série activé. Baudrate: " + String(baudrate));
  delay(50);
}

float scd30_read(uint8_t dataSelect) {
  t_scd = millis() - t_scd;
  if (t_scd > 1000 && scd30.isAvailable()) {
    float result[3] = {0};
    scd30.getCarbonDioxideConcentration(result);
    scd30_co2 = result[0];
    scd30_t = result[1];
    scd30_h = result[2];
  }
  switch (dataSelect) {
    case 0: return scd30_co2;
    case 1: return scd30_t;
    case 2: return scd30_h;
  }
}

void setup() {
  lcdRgb.begin(16, 2);
  serial_setupConnection(9600);
  Wire.begin();
  scd30.initialize();
  t_scd = millis();
  lcdRgb.setCursor(0, 0);
  lcdRgb.print(String("CO2 level (ppm)"));
  lcdRgb.setCursor(0, 0);
  lcdRgb.print(String(scd30_read(0)));
}

void loop() {}
```

---

## Fiche 2 : configurer la couleur de l'écran LCD RGB

**Code**

```cpp
#include <Wire.h>
#include <rgb_lcd.h>

rgb_lcd lcdRgb;

void setup() {
  lcdRgb.begin(16, 2);
  lcdRgb.setRGB(255, 96, 0);
}

void loop() { }
```

---

## Fiche 3 : indicateur LED CO2 (NeoPixel)

Ce programme combine le capteur SCD30 et le bandeau NeoPixel. Des **structures conditionnelles** `if/else if/else` permettent d'allumer les LED d'une couleur différente selon le taux de CO2.

On stocke la valeur mesurée dans une variable **Taux de CO2** (via le menu Variables > Créer une variable) pour éviter de la recalculer à chaque test.

**Code**

```cpp
#include <Wire.h>
#include <SCD30.h>
#include <rgb_lcd.h>
#include <Adafruit_NeoPixel.h>

#define NP_LED_COUNT_2 30

rgb_lcd lcdRgb;
Adafruit_NeoPixel Neopixel_2(NP_LED_COUNT_2, 2, NEO_GRB + NEO_KHZ800);

float t_scd;
float scd30_co2 = 0;
float scd30_t = 0;
float scd30_h = 0;
float CO2_rate;

void serial_setupConnection(int baudrate) {
  Serial.begin(baudrate);
  while (!Serial) {
    Serial.println("En attente de l'ouverture du port série...");
    delay(1000);
  }
  Serial.println("Port série activé. Baudrate: " + String(baudrate));
  delay(50);
}

float scd30_read(uint8_t dataSelect) {
  t_scd = millis() - t_scd;
  if (t_scd > 1000 && scd30.isAvailable()) {
    float result[3] = {0};
    scd30.getCarbonDioxideConcentration(result);
    scd30_co2 = result[0];
    scd30_t = result[1];
    scd30_h = result[2];
  }
  switch (dataSelect) {
    case 0: return scd30_co2;
    case 1: return scd30_t;
    case 2: return scd30_h;
  }
}

void neopixel_showAllLed(Adafruit_NeoPixel *neoPx, uint8_t ledCount, uint8_t r, uint8_t g, uint8_t b) {
  for (int i=0; i<ledCount; i++) {
    neoPx->setPixelColor(i, neoPx->Color(r, g, b));
  }
  neoPx->show();
}

void setup() {
  serial_setupConnection(9600);
  Wire.begin();
  scd30.initialize();
  t_scd = millis();
  lcdRgb.begin(16, 2);
  Neopixel_2.begin();
}

void loop() {
  CO2_rate = scd30_read(0);
  lcdRgb.setCursor(0, 0);
  lcdRgb.print(String("CO2 rate (ppm) :"));
  lcdRgb.setCursor(0, 1);
  lcdRgb.print(String(CO2_rate));
  if (CO2_rate <= 600) {
    neopixel_showAllLed(&Neopixel_2, NP_LED_COUNT_2, 51, 204, 0);
  } else if (CO2_rate > 600 && CO2_rate < 800) {
    neopixel_showAllLed(&Neopixel_2, NP_LED_COUNT_2, 255, 255, 0);
  } else if (CO2_rate >= 800 && CO2_rate < 1000) {
    neopixel_showAllLed(&Neopixel_2, NP_LED_COUNT_2, 255, 102, 0);
  } else {
    neopixel_showAllLed(&Neopixel_2, NP_LED_COUNT_2, 255, 0, 0);
  }
  delay(250);
}
```

---

## Fiche 4 : affichage du CO2 avec temporisation

On ajoute une pause d'une seconde pour limiter la fréquence d'affichage à l'écran et faciliter la lecture des mesures.

**Code**

```cpp
#include <Wire.h>
#include <SCD30.h>
#include <rgb_lcd.h>
#include <Adafruit_NeoPixel.h>

#define NP_LED_COUNT_2 30

rgb_lcd lcdRgb;
Adafruit_NeoPixel Neopixel_2(NP_LED_COUNT_2, 2, NEO_GRB + NEO_KHZ800);

float t_scd;
float scd30_co2 = 0;
float scd30_t = 0;
float scd30_h = 0;
float CO2_rate;

void serial_setupConnection(int baudrate) {
  Serial.begin(baudrate);
  while (!Serial) {
    Serial.println("En attente de l'ouverture du port série...");
    delay(1000);
  }
  Serial.println("Port série activé. Baudrate: " + String(baudrate));
  delay(50);
}

float scd30_read(uint8_t dataSelect) {
  t_scd = millis() - t_scd;
  if (t_scd > 1000 && scd30.isAvailable()) {
    float result[3] = {0};
    scd30.getCarbonDioxideConcentration(result);
    scd30_co2 = result[0];
    scd30_t = result[1];
    scd30_h = result[2];
  }
  switch (dataSelect) {
    case 0: return scd30_co2;
    case 1: return scd30_t;
    case 2: return scd30_h;
  }
}

void neopixel_showAllLed(Adafruit_NeoPixel *neoPx, uint8_t ledCount, uint8_t r, uint8_t g, uint8_t b) {
  for (int i=0; i<ledCount; i++) {
    neoPx->setPixelColor(i, neoPx->Color(r, g, b));
  }
  neoPx->show();
}

void setup() {
  serial_setupConnection(9600);
  Wire.begin();
  scd30.initialize();
  t_scd = millis();
  lcdRgb.begin(16, 2);
  Neopixel_2.begin();
  CO2_rate = scd30_read(0);
  delay(1000*1);
  Serial.println(String(CO2_rate));
  lcdRgb.setCursor(0, 0);
  lcdRgb.print(String("CO2 rate (ppm)"));
  lcdRgb.setCursor(0, 1);
  lcdRgb.print(String(CO2_rate));
  if (CO2_rate <= 600) {
    neopixel_showAllLed(&Neopixel_2, NP_LED_COUNT_2, 51, 204, 0);
  } else if (CO2_rate > 600 && CO2_rate < 800) {
    neopixel_showAllLed(&Neopixel_2, NP_LED_COUNT_2, 255, 255, 0);
  } else if (CO2_rate >= 800 && CO2_rate < 1000) {
    neopixel_showAllLed(&Neopixel_2, NP_LED_COUNT_2, 255, 102, 0);
  } else {
    neopixel_showAllLed(&Neopixel_2, NP_LED_COUNT_2, 255, 0, 0);
  }
  delay(250);
}

void loop() { }
```

---

## Fiche 5 : visualisation des données

1. Dans la console d'affichage Vittascience, sélectionnez **Mode graphique** à droite.
2. À partir du graphique, exportez les données au format `.csv` (bouton **Exporter** en bas de la fenêtre). Les données s'ouvrent alors dans Excel, LibreOffice Calc, Google Sheets ou Numbers, où la fonction **Graphique** permet de tracer l'évolution du CO2 au cours du temps.

**Code** (compatible avec la visualisation graphique de Vittascience)

```cpp
#include <Wire.h>
#include <SCD30.h>
#include <rgb_lcd.h>
#include <Adafruit_NeoPixel.h>

#define NP_LED_COUNT_2 30

rgb_lcd lcdRgb;
Adafruit_NeoPixel Neopixel_2(NP_LED_COUNT_2, 2, NEO_GRB + NEO_KHZ800);

float t_scd;
float scd30_co2 = 0;
float scd30_t = 0;
float scd30_h = 0;
float CO2_rate;

void serial_setupConnection(int baudrate) {
  Serial.begin(baudrate);
  while (!Serial) {
    Serial.println("En attente de l'ouverture du port série...");
    delay(1000);
  }
  Serial.println("Port série activé. Baudrate: " + String(baudrate));
  delay(50);
}

float scd30_read(uint8_t dataSelect) {
  t_scd = millis() - t_scd;
  if (t_scd > 1000 && scd30.isAvailable()) {
    float result[3] = {0};
    scd30.getCarbonDioxideConcentration(result);
    scd30_co2 = result[0];
    scd30_t = result[1];
    scd30_h = result[2];
  }
  switch (dataSelect) {
    case 0: return scd30_co2;
    case 1: return scd30_t;
    case 2: return scd30_h;
  }
}

void neopixel_showAllLed(Adafruit_NeoPixel *neoPx, uint8_t ledCount, uint8_t r, uint8_t g, uint8_t b) {
  for (int i=0; i<ledCount; i++) {
    neoPx->setPixelColor(i, neoPx->Color(r, g, b));
  }
  neoPx->show();
}

void setup() {
  serial_setupConnection(9600);
  Wire.begin();
  scd30.initialize();
  t_scd = millis();
  lcdRgb.begin(16, 2);
  Neopixel_2.begin();
  CO2_rate = scd30_read(0);
  delay(1000*1);
  Serial.print("@Graph:");
  Serial.print("CO2 rate (in ppm):");
  Serial.print(CO2_rate);
  Serial.print("|");
  Serial.print("\n");
  delay(50);
  lcdRgb.setCursor(0, 0);
  lcdRgb.print(String("CO2 rate (ppm)"));
  lcdRgb.setCursor(0, 1);
  lcdRgb.print(String(CO2_rate));
  if (CO2_rate <= 600) {
    neopixel_showAllLed(&Neopixel_2, NP_LED_COUNT_2, 51, 204, 0);
  } else if (CO2_rate > 600 && CO2_rate < 800) {
    neopixel_showAllLed(&Neopixel_2, NP_LED_COUNT_2, 255, 255, 0);
  } else if (CO2_rate >= 800 && CO2_rate < 1000) {
    neopixel_showAllLed(&Neopixel_2, NP_LED_COUNT_2, 255, 102, 0);
  } else {
    neopixel_showAllLed(&Neopixel_2, NP_LED_COUNT_2, 255, 0, 0);
  }
  delay(250);
}

void loop() { }
```

---

*Cette fiche fait partie du projet [SteamCity](/projets/steamcity), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

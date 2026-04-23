---
id: programmation-indoor-air-quality
title: "Programmation : Indoor Air Quality"
sidebar_label: "Indoor Air Quality"
sidebar_position: 5
---

# Programmation : Indoor Air Quality

Fiche technique de programmation associée à la ressource [Indoor Air Quality](/ressources/steamcity/indoor-air-quality).

---

## Fiche pratique 1 : Afficher le taux de CO2 sur un écran LCD à l'aide du capteur SCD30

Éditeur utilisé : vittascience.com/l476 ; vittascience.com/Arduino ou vittascience.com/microbit

Code à copier dans l'éditeur :

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

## Fiche pratique 2 : Configuration des couleurs des LED

Éditeur utilisé : vittascience.com/l476 ; vittascience.com/Arduino ou vittascience.com/microbit

Aperçu des blocs

Code à copier dans l'éditeur :

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

## Fiche pratique 3 : Indicateur LED CO2

Éditeur utilisé : vittascience.com/l476 ; vittascience.com/Arduino ou vittascience.com/microbit

Dans le programme, il faut ensuite ajouter des blocs de "structure conditionnelle". Ces blocs ont une nomenclature telle que : si cette condition est remplie, alors exécuter une instruction sinon exécuter une autre instruction. Dans ce cas, il y a quatre conditions à anticiper, car il y a quatre intervalles de taux de CO2. Ce programme combine les programmes créés aux étapes 1 et 2, avec l'ajout d'un bloc de structure conditionnelle.

Dans ce programme, la valeur du dioxyde de carbone est comparée à différents seuils. Afin d'éviter d'avoir à effectuer plusieurs mesures du taux, qui seront ensuite comparées aux différents seuils, il est possible de stocker la valeur mesurée dans une variable. Nous vous suggérons de nommer cette variable "Taux de CO2". Pour créer cette variable, cliquez sur la rubrique Variables.

Un panneau latéral s'ouvre : cliquez sur « Créer une variable ». Nommez la variable « Taux de CO2 » par exemple, puis cliquez sur OK. Des blocs spécifiques à cette nouvelle variable sont créés et accessibles depuis la rubrique Variables. Pour utiliser cette variable, cliquez sur la rubrique Variables.

Code à copier dans l'éditeur :

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

## Fiche pratique 4 : Affichage du CO2

Éditeur utilisé : vittascience.com/l476 ; vittascience.com/Arduino ou vittascience.com/microbit

N'oubliez pas d'ajouter une pause d'une seconde pour limiter la fréquence d'affichage des valeurs sur l'écran de l'ordinateur. Cela facilite la lecture des valeurs mesurées.

Code à copier dans l'éditeur :

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

## Fiche pratique 5 : Visualisation des données

Éditeur utilisé : vittascience.com/l476 ; vittascience.com/Arduino ou vittascience.com/microbit

1. Pour visualiser le graphique, dans la console d'affichage, sélectionnez « Mode graphique » à droite.
2. À partir de cette représentation graphique, il est possible d'exporter l'ensemble des données sous forme de fichier .csv (lisible par des tableurs tels qu'Excel, Libre Office Calc, GoogleSheet, Numbers, etc.). Pour cela, il suffit de cliquer sur le bouton Exporter en bas de la fenêtre. Les données seront alors accessibles depuis le tableur utilisé par défaut sur l'ordinateur. La fonction "graphing" du tableur permet de tracer un graphique montrant l'évolution des niveaux de dioxyde de carbone au cours du temps, qui pourra ensuite être imprimé.

Code à copier dans l'éditeur :

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

---
id: musique-capteur-distance-laser
title: "De la musique avec un capteur de distance laser"
sidebar_label: "Musique laser"
sidebar_position: 12
---

# De la musique avec un capteur de distance laser

| Projet | Catégorie |
|---|---|
| Projets du LAB | Audio |

### Présentation

Ce projet transforme un capteur de distance laser en instrument de musique, sur le principe du thérémine optique. Un capteur VL53L0X mesure en continu la distance de la main placée devant lui et la convertit en fréquence sonore envoyée à un buzzer piézoélectrique. Plus la main est proche, plus le son est aigu ; plus elle s'éloigne, plus le son est grave.

Le résultat est un instrument sans contact, jouable en déplaçant la main au-dessus du capteur, sur une plage d'environ 20 à 300 mm.

### Matériel

- Capteur VL53L0X (Time of Flight)
- Arduino Nano
- Buzzer piézoélectrique

### Logiciel

- IDE Arduino
- Driver CH340G (nécessaire pour que le PC reconnaisse le port série des clones Arduino Nano chinois)
- Bibliothèque Adafruit VL53L0X (installable depuis le gestionnaire de bibliothèques Arduino)

### Code Arduino

```
#include "Adafruit_VL53L0X.h"

Adafruit_VL53L0X lox = Adafruit_VL53L0X();
const int pinSpeaker=5;
const int distMax=300;
const double delaiBase=28.4091;

void setup() {
  Serial.begin(9200);

  // wait until serial port opens for native USB devices
  while (! Serial) {
    delay(1);
  }

  Serial.println("Adafruit VL53L0X test");
  if (!lox.begin()) {
    Serial.println(F("Failed to boot VL53L0X"));
    while(1);
  }

  pinMode(pinSpeaker, OUTPUT);
  digitalWrite(pinSpeaker, LOW);

  // power
  //Serial.println(F("VL53L0X API Simple Ranging example\n\n"));
}

void loop() {
  VL53L0X_RangingMeasurementData_t measure;

  //Serial.print("Reading a measurement... ");
  lox.rangingTest(&measure, false); // pass in 'true' to get debug data printout!

  if (measure.RangeStatus != 4) {  // phase failures have incorrect data
    //Serial.print("Distance (mm): ");
    //Serial.println(measure.RangeMilliMeter);
    int dist=measure.RangeMilliMeter;
    if (dist > distMax) dist=distMax;
    Serial.println(dist);

    if (dist < distMax)
    {
      double delaiExact=delaiBase*(double)(dist-20);
      int delai=(int)delaiExact;
      // Envoi d'une oscillation sur le speaker:
      for (int i=1; i<=20; i++)
      {
        digitalWrite(pinSpeaker, HIGH);
        delayMicroseconds(delai);
        digitalWrite(pinSpeaker, LOW);
        delayMicroseconds(delai);
      }
    }
    else
    {
      delay(100);
    }
  }
  else {
    Serial.println(100);
    //Serial.println(" out of range ");
    delay(100);
  }
}

```

### Fonctionnement du code

Le programme fonctionne en boucle continue :

1. Le capteur VL53L0X effectue une mesure de distance par temps de vol (Time of Flight) du laser infrarouge.
2. Si la mesure est valide (pas d'erreur de phase), la distance est bornée à 300 mm.
3. Cette distance est convertie en délai de demi-période (`delaiBase × (distance - 20)`), qui détermine la fréquence du son.
4. Le buzzer reçoit 20 oscillations à cette fréquence, produisant un bref son dont la hauteur varie avec la distance.
5. Si aucun objet n'est détecté, le programme attend 100 ms avant de recommencer.

La constante `delaiBase` (28.4 µs) calibre la plage de fréquences jouables. En la modifiant, on décale l'instrument vers les aigus ou les graves.

### Pistes d'amélioration

- Utiliser la fonction `tone()` d'Arduino pour simplifier la génération de son
- Ajouter un module audio (DAC ou shield MP3) pour des timbres plus riches
- Permettre le choix de gammes musicales (pentatonique, chromatique, etc.)

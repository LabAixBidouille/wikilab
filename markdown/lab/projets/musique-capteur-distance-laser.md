# De la musique avec un capteur de distance laser

### Présentation

### Matériel

- VL53LOX

- arduino nano

- buzzer

### Logiciel

- IDE Adruino

- driver à télécharger pour arduino nano "made in china": CH340G

### code Arduino

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

### Conclusion:

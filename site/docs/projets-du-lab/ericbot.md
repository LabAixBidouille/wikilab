---
id: ericbot
title: Robot ERICbot
sidebar_label: "Robot ERICbot"
sidebar_position: 8
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Robot ERICbot

### Matériel

Le robot est construit autour d'un Arduino Uno et d'un châssis imprimé en 3D. Il est équipé de :

- 2 servomoteurs à rotation continue
- un interrupteur
- un capteur ultrason HC-SR04
- 2 roues
- un axe libre à 360°
- un bloc de piles
- un anneau de LEDs (NeoPixel Ring)

</div>

<img src="/img/ressources/projets-du-lab/lab-ericbot/icone.png" alt="Robot ERICbot" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

### Assemblage

#### L'interrupteur

Fixer l'interrupteur sur la plaque, puis souder les fils sur ses broches. Ces fils sont ensuite soudés sur la connectique du bloc de piles.

#### Le bloc de piles

Il est fixé au carter de l'interrupteur avec du scotch double-face et relié à la prise d'alimentation de l'Arduino Uno.

#### L'Arduino Uno

<img src="/img/ressources/projets-du-lab/Robotarduino.jpg" alt="Arduino du robot" style={{width: "250px"}} />

Fixer l'Arduino Uno sur le châssis, puis câbler le contrôleur à ses périphériques. Les moteurs sont connectés à l'Arduino par des fils mâle-mâle, en suivant le tutoriel "Un moteur qui sait où il va : le servomoteur".

L'Arduino Uno ne dispose que d'une seule sortie 5V : il faut démultiplier l'alimentation en soudant des straps.

#### Les roues

Pour améliorer l'adhérence au sol, coller sur chaque roue un petit élastique ou un morceau de chambre à air.

### Déplacement avant/arrière

En branchant les deux moteurs, on constate que les roues ne sont pas synchronisées. Il faut écrire des fonctions dédiées pour les faire avancer et reculer de manière coordonnée.

### Rotation droite/gauche

Même principe : des fonctions de rotation ne font tourner qu'un seul moteur à la fois.

#### Code

```cpp
#include <Servo.h>

Servo myservoGauche;
Servo myservoDroite;

int pos = 0;
void arreter() {
	myservoGauche.write(90);
    myservoDroite.write(90);
}

void avancer(int temps){
    myservoGauche.write(0);
    myservoDroite.write(180);
    delay(temps);
    arreter();
}
void reculer(int temps){
    myservoGauche.write(180);
    myservoDroite.write(0);
    delay(temps);
    arreter();
}
void tournerGauche(int temps){
    myservoGauche.write(90);
    myservoDroite.write(180);
    delay(temps);
    arreter();
}
void tournerDroite(int temps){
    myservoGauche.write(0);
    myservoDroite.write(90);
    delay(temps);
    arreter();
}
void setup()
{
  myservoGauche.attach(2);
  myservoDroite.attach(4);
}

void loop()
{
avancer(2000);
delay(1500);
tournerGauche(1000);
delay(1500);
reculer(2000);
delay(1500);
tournerDroite(1000);
delay(1500);
}

```

### Capteur ultrason

Le capteur se fixe à l'avant du robot. Quatre fils le relient à l'Arduino :

- 2 entrées numériques (trig et echo)
- alimentation 5V
- masse (GND)

Le branchement suit le tutoriel "Mesure de distance - Ultrason".

Les yeux de ERICbot

#### Code complet avec évitement d'obstacles et LEDs

Ce programme combine la navigation autonome et les effets lumineux sur l'anneau NeoPixel :

- **Vert** : le robot avance (pas d'obstacle)
- **Orange** : le robot tourne (obstacle entre 10 et 30 cm)
- **Rouge** : le robot recule (obstacle à moins de 10 cm)

```cpp
#include <Servo.h>
#include <Adafruit_NeoPixel.h>
#define PIN      6
#define N_LEDS 16
Servo myservoGauche;
Servo myservoDroite;
int trig = 7;
int echo = 8;
int pos = 0;
long lecture_echo = 0;
long cm = 0;
Adafruit_NeoPixel strip = Adafruit_NeoPixel(N_LEDS, PIN, NEO_GRB + NEO_KHZ800);
void arreter()
{
	myservoGauche.write(90);
	myservoDroite.write(90);
}

void avancer()
{
	myservoGauche.write(0);
	myservoDroite.write(180);
	chase(strip.Color(0, 255, 0)); // Green

}
void reculer(int temps)
{
	chase(strip.Color(255, 0, 0)); // Red
	myservoGauche.write(180);
	myservoDroite.write(0);
	delay(temps);
	arreter();
}
void tournerGauche()
{
	chase(strip.Color(255, 145, 0)); // Orange
	myservoGauche.write(90);
	myservoDroite.write(180);
	arreter();
}
void tournerDroite()
{
	chase(strip.Color(255, 145, 0)); // Orange
	myservoGauche.write(0);
	myservoDroite.write(90);
	arreter();
}
static void chase(uint32_t c)
{
	for(uint16_t i = 0; i < strip.numPixels() + 4; i++)
	{
		strip.setPixelColor(i  , c);
		strip.setPixelColor(i - 4, 0);
		strip.show();
		delay(25);
	}
}
void rainbowCycle()
{
	uint16_t i, j;
	for(j = 0; j < 256 * 5; j++)
	{
		for(i = 0; i < strip.numPixels(); i++)
		{
			strip.setPixelColor(i, Wheel(((i * 256 / strip.numPixels()) + j) & 255));
		}
		strip.show();
	}
}
uint32_t Wheel(byte WheelPos)
{
	WheelPos = 255 - WheelPos;
	if(WheelPos < 85)
	{
		return strip.Color(255 - WheelPos * 3, 0, WheelPos * 3);
	}
	else if(WheelPos < 170)
	{
		WheelPos -= 85;
		return strip.Color(0, WheelPos * 3, 255 - WheelPos * 3);
	}
	else
	{
		WheelPos -= 170;
		return strip.Color(WheelPos * 3, 255 - WheelPos * 3, 0);
	}
}

void setup()
{
	myservoGauche.attach(2);
	myservoDroite.attach(4);
	pinMode(trig, OUTPUT);
	digitalWrite(trig, LOW);
	pinMode(echo, INPUT);
	Serial.begin(115200);
	strip.begin();
}

void loop()
{
	digitalWrite(trig, HIGH);
	delayMicroseconds(10);
	digitalWrite(trig, LOW);
	lecture_echo = pulseIn(echo, HIGH);
	cm = lecture_echo / 58;
	if (cm > 30)
	{
		avancer();
	}
	if (cm < 30 && cm > 10)
	{
		tournerDroite();
	}
	if (cm < 10)
	{
		reculer(1000);
		tournerGauche();
	}
	delay(1000);
}

```

### Intégration de l'anneau de LEDs

Se référer au tutoriel "Sur bandeau de LED". Attention : il s'agit d'un anneau (Ring), pas d'un bandeau — le branchement diffère. Connecter le 5V au 5V, le Ground au GND et le Data In à la broche souhaitée.

Pour brancher plusieurs composants sur le 5V : souder des picots entre eux pour créer un pont commun.

Picots soudés

### Conseils pratiques

1. Prévoir des élastiques ou de la chambre à air de rechange pour les roues.
2. Intégrer les pas de vis directement à l'impression du socle, plutôt que de les forcer après coup.

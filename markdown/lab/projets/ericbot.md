# ERICbot

### Dotation matérielle

Nous disposons d'un Arduino Uno ainsi que d'un châssis de robot composé de pièces imprimées via une imprimante 3D. Le robot est doté de:

- 2 moteurs

- un interrupteur

- un shield ultra son

- 2 roues

- un axe à 360°

- Un bloc de piles

- Un led ring

### Assemblage

##### L'interrupteur

Dans un premier temps, il est nécessaire de fixer l'interrupteur sur la plaque. Ensuite, il faut souder les fils sur les pins de l'interrupteur.
Ces fils sont, ensuite, à souder sur la connectique du bloc à pile.

#### Le bloc de piles

Il est fixé au carter de l'interrupteur avec du scotch double face. Il est relié à la prise d'alimentation de l'Arduino Uno.

#### L'Arduino Uno

[Robotarduino.jpg]

Il faut fixer l'Arduino Uno sur le châssis. c'est à ce moment là qu'il est nécessaire de câbler le contrôleur à ses périphériques.
Afin de câbler les moteurs, il faut utiliser des fils mâle-mâle pour assurer la connexion à l'Arduino.
Cabler la carte Arduino selon les principes du tutoriel [Un moteur qui sait où il va : le servomoteur]

Il est à noter que, dû au fait qu'il n'y ait qu'une seule prise 5V sur l'Arduino Uno, il est nécessaire de démultiplier le 5V en faisant des straps.

#### Les roues

Pour améliorer l'adhérence sur le sol du robot, il est recommandé de coller sur la roue une petite courroie.

### Faire avancer et reculer le ERICbot

Programmer le code et faire fonctionner les moteurs. Nous nous rendons compte que les roues ne sont pas synchronisées.
Créer la fonction pour les faire avancer et reculer de manière synchronisées

### Faire tourner à droite et à gauche le ERICbot

Programmer le code et faire fonctionner les moteurs.

#### Le code

```
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

### Le shield ultra son

Il se trouve à l'avant du robot. Quatre fils le relient à l'Arduino Uno.
Il y a:

- 2 digital inputs

- du 5v

- une masse

Se référer au tutoriel [Mesure de distance - Ultrason] afin de réaliser le branchement des capteurs situés à l'avant du ERICbot.
C'est beau ça fonctionne !!!

[]  Les Yeux de ERICbot

#### Le code

```
#include <Servo.h>
#include <Adafruit_NeoPixel.h>
#define PIN      6
#define N_LEDS 16
Servo myservoGauche;
Servo myservoDroite;
int trig = 7; // broche trig du capteur US HC-SR04
int echo = 8; // broche echo du capteur US HC-SR04
int pos = 0;
long lecture_echo = 0; // variable sur 4 octets mesure de distance
long cm = 0; // variable sur 4 octets pour la conversion en cm
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
	//chase(strip.Color(255, 0, 0)); // Red
	chase(strip.Color(0, 255, 0)); // Green
//	chase(strip.Color(0, 0, 255)); // Blue
//	rainbowCycle(20);

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
	chase(strip.Color(255, 145, 0)); //orange
	myservoGauche.write(90);
	myservoDroite.write(180);
//	delay(temps);
	arreter();
}
void tournerDroite()
{
	chase(strip.Color(255, 145, 0)); //orange
	myservoGauche.write(0);
	myservoDroite.write(90);
//	delay(temps);
	arreter();
}
static void chase(uint32_t c)
{
	for(uint16_t i = 0; i < strip.numPixels() + 4; i++)
	{
		strip.setPixelColor(i  , c); // Draw new pixel
		strip.setPixelColor(i - 4, 0); // Erase pixel a few steps back
		strip.show();
		delay(25);
	}
}
void rainbowCycle()
{
	uint16_t i, j;
	for(j = 0; j < 256 * 5; j++) // 5 cycles of all colors on wheel
	{
		for(i = 0; i < strip.numPixels(); i++)
		{
			strip.setPixelColor(i, Wheel(((i * 256 / strip.numPixels()) + j) & 255));
		}
		strip.show();
		//delay(wait);
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
	pinMode(trig, OUTPUT); // la broche trig est initialisée en sortie
	digitalWrite(trig, LOW); // met un niveau logique , LOW (BAS) sur la broche trig
	pinMode(echo, INPUT);  // la broche echo est initialisée en entree
	Serial.begin(115200);  // initialisation de la liaison série à 115200 bauds
	strip.begin();
}

void loop()
{
	digitalWrite(trig, HIGH); // met un niveau logique , HIGH (HAUT) sur la broche trig
	delayMicroseconds(10); // attente pendant 10 millisecondes
	digitalWrite(trig, LOW);  // met un niveau logique , LOW (BAS) sur la broche trig.
	lecture_echo = pulseIn(echo, HIGH); //  lit la durée du niveau HAUT appliqué sur la broche echo
	cm = lecture_echo / 58; // conversion de la distance en cm
//	Serial.print("Distance en cm : "); // affiche le message : "Distance en cm" sur le moniteur série
//	Serial.println(cm); // affiche la mesure en cm avec retour à la ligne
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
		//arreter();
		tournerGauche();
	}
	delay(1000);
}

```

### Intégration d'un ring Led

Se référer au tutoriel [Sur bandeau de LED].
Attention il ne s'agit pas du bandeau mais du Ring ce n'est donc pas les mêmes branchements.
Brancher le 5v au 5V, le Ground au Gnd et le Input à la Pin de votre choix.
Astuce pour brancher plusieurs 5V : souder des picots entre eux pour faire un pont commun.

[]  picots soudés

### A savoir

1. Penser à avoir en stock des élastiques ou de la chambre pour le bon roulement des roues
2. Mieux vaut faire les pas de vis à l'impression du socle plutôt que rentrer en force par la suite

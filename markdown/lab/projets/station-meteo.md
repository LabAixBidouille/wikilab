# Station Météo

En Chantier ! (projet en cours de réalisation)

### Description du projet

L'objectif de ce projet est de proposer différentes solutions DIY (Do It Yourself) pour fabriquer une station météo adaptée aux besoins et envies de chacun.

Pour cela nous allons expérimenter diverses solutions de capteurs, de communications et de protocoles et les mettre en œuvre pour  construire une station météo modulaire.

Les différentes solutions et expérimentations seront présentée dans la rubrique " Éléments du projet ". Certaines de ces solutions seront choisies et agrégées pour fabriquer une station météo performante : " MétéoDuLAB ".

### Éléments du projet et expérimentations

#### Mesure de la température et du taux d'humidité avec une carte STM32 nucleo 32

##### Description

Ce montage permet de mesurer la température et le taux d'humidité à l'aide d'un capteur DHT22 branché sur une carte STM32 Nucleo 32 F303K8 (fonctionne également avec une carte STM32 Nucleo 64 L474RG), et d'afficher le résultat sur un afficheur LCD Nokia 5110.

La programmation de la carte STM32 Nucleo 32 F303K8 a été faite en utilisant l'IDE Arduino.

Liste du matériel
- STM32 Nucleo 32 F303K8

- Afficheur LCD Nokia 5110

- Capteur DHT 22

##### Schéma structurel

[Schema structurel STM32 Nucleo 32 F303K8.PNG]

##### Montage

[STM32 DHT22 composants.jpg]

[STM32 Nucleo32 DHT soudures.jpg]

##### Programme

Voici le programme qu'il faut éditer dans l'IDE Arduino, puis compiler et charger dans la carte STM 32 Nucleo 32 F303K8.

```
/*
Station Météo (V0.0)

Matériel utilisé :
STM 32 Nucleo 32 F303K8 ou STM32 Nucleo 64 L476RG
Afficheur LCD Nokia 5110
Capteur DHT 22

Bibliothèques à télécharger :
- DHT 22 : SimpleDHT by Winlin
- Nokia 5110 : Nokia_5110 by Hossein Baghayi#include <SimpleDHT.h>

*/
#include <SimpleDHT.h>          // bibliothèque pour capteur DHT
#include "Nokia_5110.h"         // bibliothèque pour afficheur lcd Nokia 5110

/* configuration pour pour STM32 Nucleo */
#define DHT 8  // broche Data du capteur DHT 22
#define RST 7  // broche Reset de l'afficheur lcd Nokia 5110
#define CE  6  // broche CE de l'afficheur lcd Nokia 5110
#define DC  5  // broche DC de l'afficheur lcd Nokia 5110
#define DIN 4  // broche DIN de l'afficheur lcd Nokia 5110
#define CLK 3  // broche CLK de l'afficheur lcd Nokia 5110
#define BL  2  // broche BL de l'afficheur lcd Nokia 5110

int err = SimpleDHTErrSuccess;  // variable erreur du capteur DHT22

float temperature = 0;          //  variable pour la mesure de la température DHT 22
float humidity = 0;             //  variable pour la mesure du taux d'humidité DHT 22

Nokia_5110 lcd = Nokia_5110(RST, CE, DC, DIN, CLK); // crée un objet lcd
SimpleDHT22 dht22;                                  // crée un objet dht22

//--------------début de la  fonction setup ---------------
void setup() {

  pinMode (BL,OUTPUT);
  analogWrite (BL,128);   // allume moyennement le rétroéclaireg de l'afficheur lcd
  lcd.setContrast(53);    // réglage du contraste de l'affichage lcd (60 est la valeur par défaut)
  lcd.println("Station Meteo");
  lcd.print("Version 0.0");
  lcd.setCursor(0, 4);
  lcd.print("Meteo Du LAB");
  delay(5000);
  lcd.clear();

}
//--------------fin de la  fonction setup ---------------

//--------------début de la  fonction loop ---------------
void loop() {
  if ((err = dht22.read2(DHT, &temperature, &humidity, NULL)) != SimpleDHTErrSuccess)
    {
      lcd.clear();
      lcd.println("DHT22 Pb");
      lcd.print("Erreur = ");
      lcd.print(err);
      delay(2000);
      return;
    }
  lcd.clear();
  lcd.print("Meteo Du LAB");
  lcd.setCursor(0, 2);
  lcd.print("Temp = ");
  lcd.print((float)temperature);
  lcd.println(" C");
  lcd.print("Hum   = ");
  lcd.print((float)humidity);
  lcd.print(" H%");
  delay(2500);
  }
//--------------fin de la  fonction loop ---------------

```

#### Mesure de la température et du taux d'humidité avec une carte Wemos D1 Mini

##### Description

Ce montage permet de mesurer la température et le taux d'humidité à l'aide d'un capteur DHT22, ainsi que la température externe à l'aide d'un capteur OneWire DS18B20, les capteurs sont branchés sur une carte Wemos D1 Mini (ESP 8266),.

Les valeurs mesurées sont affichées sur un afficheur LCD Nokia 5110, elles seront envoyées en WiFi, lors d'une requête faite par un client (navigateur), la carte D1 Mini se comporte en serveur Web.

Une LED RGB adressable est commandée à distance par le client (navigateur).

La programmation de la carte Wemos D1 Mini a été faite en utilisant l'IDE Arduino.

Liste du matériel
- ESP D1 Mini

- Afficheur LCD Nokia 5110

- Capteur DHT 22

- Capteur OneWire DS18B20

- LED RGB adressable

##### Schéma structurel

[Schema structurel D1mini.PNG]

Le régulateur LM7805 permet de fournir l'alimentation 5V nécessaire au fonctionnement de la carte Wemos D1Mini à partir du 9V d'entrée (chargeur).

Le transistor NMOS 2N2700 permet d'adapter le signal de sortie (3,3V) de la carte Wemos D1Mini en 5V nécessaire pour la LED RGB adressable.

##### Montage

[D1mini DHT22 OW composants.jpg]

##### Programme

Voici le programme qu'il faut éditer dans l'IDE Arduino, puis compiler et charger dans la carte D1 mini (ESP 8256).

```
/*
Station Météo (V1.0)

Matériel utilisé :
ESP D1 Mini
Afficheur LCD Nokia 5110
Capteur DHT 22
Capteur OneWire DS18B20
LED RGB adressable

Bibliothèques à télécharger :
- Nokia 5110 : Nokia_5110 by Hossein Baghayi#include <SimpleDHT.h>
- DHT 22 : SimpleDHT by Winlin
- DS18B20 : OneWire.h
- LED RGB adressable : Adafruit_NeoPixel.h
*/

#include <Adafruit_NeoPixel.h>  // bibliothèque pour LED RGB adressable
#include <OneWire.h>            // bibliothèque pour capteur OneWire
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#include <SimpleDHT.h>          // bibliothèque pour capteur DHT
#include "Nokia_5110.h"         // bibliothèque pour afficheur lcd Nokia 5110

#define RST D8            // broche Reset de l'afficheur lcd Nokia 5110
#define CE  D7            // broche CE de l'afficheur lcd Nokia 5110
#define DC  D6            // broche DC de l'afficheur lcd Nokia 5110
#define DIN D5            // broche DIN de l'afficheur lcd Nokia 5110
#define CLK D0            // broche CLK de l'afficheur lcd Nokia 5110
#define BL  D1            // broche BL de l'afficheur lcd Nokia 5110

#define LEDRGB    D2      // broche In de la Led RGB adressable

#define broche_OneWire D3 // broche Data du capteur Onewire

#define DHT D4            // broche Data du capteur DHT 22

#define modeLecture 0xBE  // code des instructions du capteur Onewire
#define lancerMesure 0x44 // code des instructions du capteur Onewire

#define ssid      "xxxxx"        // WiFi SSID
#define password  "yyyyy"  // WiFi password

boolean stateLed = false; // true si la Led est allumée
boolean etatMes = false;  // true si la mesure de température OneWire est lancée

byte data[12];    // Tableau de 12 octets pour lecture des 9 registres de RAM et des 3 registres d'EEPROM du capteur OneWire
byte adresse[8];  // Tableau de 8 octets pour stockage du code d'adresse 64 bits du composant OneWire

int err = SimpleDHTErrSuccess;  // variable erreur du capteur DHT22

unsigned long prevMillisTemp = millis(); // variable pour la temporisation de la mesure de température OneWire

float temperature = 0;  //  variable pour la mesure de la température DHT 22
float humidity = 0;     //  variable pour la mesure du taux d'humidité DHT 22
float tDS18B20 = 0;     //  variable pour la mesure de la température OneWire

String  etatLed = "Off";  // variable pour l'affichage de l'état de la Led dans la page html

String getPage(){ // page html affichée dans le navigateur
  String page = "<html lang=fr-FR><head><meta http-equiv='refresh' content='10'/>";
  page += "<title>Meteo du LAB</title>";
  page += "<style> body { background-color: #fffff; font-family: Arial, Helvetica, Sans-Serif; Color: #000088; }</style>";
  page += "</head><body><h1>Meteo du LAB</h1>";
  page += "<h3>DHT22</h3>";
  page += "<ul><li>Temperature : ";
  page += temperature;
  page += " C</li>";
  page += "<li>Humidite : ";
  page += humidity;
  page += "%</li></ul><h3>One Wire</h3>";
  page += "<ul><li>Temperature exterieure : ";
  page += tDS18B20;
  page += " C</li></ul>";
  page += "<h3>LED</h3>";
  page += "<form action='/' method='POST'>";
  page += "<ul><li>LED (etat: ";
  page += etatLed;
  page += ")";
  page += "<INPUT type='radio' name='LED' value='1'>ON";
  page += "<INPUT type='radio' name='LED' value='0'>OFF</li></ul>";
  page += "<INPUT type='submit' value='Actualiser'>";
  page += "<br><br><p>LAB by SNG</p>";
  page += "</body></html>";
  return page;
}

Nokia_5110 lcd = Nokia_5110(RST, CE, DC, DIN, CLK);                         // crée un objet lcd
SimpleDHT22 dht22;                                                          // crée un objet dht22
OneWire  capteur(broche_OneWire);                                           // crée un objet OneWire
Adafruit_NeoPixel LED = Adafruit_NeoPixel(1, LEDRGB, NEO_GRB + NEO_KHZ800); // crée  un objet LED
ESP8266WebServer server (80);                                               // crée un objet server

//----------------------- début de la fonction de réception de la demande d'actualisation ---------------------
void handleRoot(){
  if ( server.hasArg("LED") ) {
    handleSubmit();
  } else {
    server.send ( 200, "text/html", getPage() );
  }
}
//----------------------- fin de la fonction de réception de la demande d'actualisation ---------------------

//----------------------- début de la fonction d'actualisation de l'état de la Led RGB ---------------------
void handleSubmit() {

  String LEDValue;
  LEDValue = server.arg("LED");
  Serial.print("Set GPIO : ");
  Serial.println(LEDValue);
  if ( LEDValue == "1" ) {
    LED.setPixelColor(0, LED.Color(0,40,0)); // allume faiblement la Led rouge
    LED.show(); // envoie les données vers la Led
    etatLed = "On";
    stateLed = true;
    server.send ( 200, "text/html", getPage() );
  } else if ( LEDValue == "0" ) {
    LED.setPixelColor(0, LED.Color(0,0,0)); // éteind les Led
    LED.show(); // envoie les données vers la Led
    etatLed = "Off";
    stateLed = false;
    server.send ( 200, "text/html", getPage() );
  } else {
    Serial.println("Err Led Value");
  }
}
//----------------------- fin de la fonction d'actualisation de l'état de la Led RGB ---------------------

//----------------------- début de la fonction d'initialisation du capteur One Wire ---------------------
void capteurInit(void) {
// Détection du capteur présent sur la broche

byte i =0;

while ((capteur.search(adresse)== false) && (i < 10)) // tant qu'aucun nouveau capteur est détecté
{
  // la fonction search renvoie la valeur FAUX si aucun élément 1-wire est trouvé.

  delay (200); // pause 0,2 secondes
  i ++;
}
//la suite est exécutée seulement si un capteur est détecté
}
//----------- fin de la fonction d'initialisation du capteur One Wire ----------

//--------------début de la  fonction de mesure de la température ---------------
float capteurMesureTemp(void) { //fonction qui renvoie résultat int et ne reçoit rien
   //-------- variable locale de la fonction ----------
  int tempet=0; // variable pour resultat brute  de la mesure
  static float tempetf=0.0; // variable pour resultat de la mesure en décimale
// -- Lancement d'une mesure et lecture du résultat --
  // avant chaque nouvelle instruction, il faut :
  //    * initialiser le bus 1-wire
  //    * sélectionner le capteur détecté
  //    * envoyer l'instruction
  unsigned long curMillis = millis();
  if(curMillis - prevMillisTemp > 1000) // Il faut une tempo d'au moins 750ms entre l'initialisation de la mesure et la mesure
   {
      prevMillisTemp = curMillis;
      if(!etatMes)  // test mesure lancée ?
      {
        //--------- lancer une mesure --------
          capteur.reset(); // initialise le bus 1-wire avant la communication avec un capteur donné
          capteur.select(adresse); // sélectionne le capteur ayant l'adresse 64 bits contenue dans le tableau envoyé à la fonction
          capteur.write(lancerMesure,1); // lance la mesure et alimente le capteur par la broche de donnée
          etatMes = true; // flag mesure lancée
      }
      else
      {
        //---------- passer en mode LECTURE -------------
          capteur.reset(); // initialise le bus 1-wire avant la communication avec un capteur donné
          capteur.select(adresse); // sélectionne le capteur ayant l'adresse 64 bits contenue dans le tableau envoyé à la fonction
          capteur.write(modeLecture,1); // passe en mode lecture de la RAM du capteur
        // ----------- lire les 9 octets de la RAM (appelé Scratchpad) ----
        for ( int i = 0; i < 9; i++) {           // 9 octets de RAM stockés dans 9 octets
            data[i] = capteur.read();             // lecture de l'octet de rang i stocké dans tableau data
          }
        //----- caclul de la température mesurée  ---------

        data[1]=data[1] & B10000111; // met à 0 les bits de signes inutiles
        tempet=data[1]; // bits de poids fort
        tempet=tempet<<8;
        tempet=tempet+data[0]; // bits de poids faible
        // --- en mode 12 bits, la résolution est de 0.0625°C - cf datasheet DS18B20
        tempetf=float(tempet)*6.25;
        tempetf=tempetf/100.0;
        etatMes = false;
      }
   }
return (tempetf);
}
// --------------- fin de la fonction de mesure de la température DS18B20 ----------

//--------------début de la  fonction setup ---------------
void setup() {
  Serial.begin ( 115200 );  // initialisation liaison série
  LED.begin();              // initialisation LED
  LED.setPixelColor(0, LED.Color(40,0,0)); // allume faiblement la Led verte
  LED.show(); // envoie les données vers la Led
  pinMode (BL,OUTPUT);
  analogWrite (BL,128); // allume moyennement le rétroéclaireg de l'afficheur lcd
  lcd.setContrast(53); // réglage du contraste de l'affichage lcd (60 est la valeur par défaut)
  lcd.println("Station Meteo");
  lcd.print("Version 1.0");
  lcd.setCursor(0, 4);
  lcd.print("Meteo Du LAB");
  delay(500);
  lcd.clear();

  WiFi.begin ( ssid, password );  // initialisation connexion WiFi
  while ( WiFi.status() != WL_CONNECTED ) { // attente connexion WiFi
    delay ( 500 ); Serial.print ( "." );
  }
  // Connexion WiFi établie
  LED.setPixelColor(0, LED.Color(0,40,0)); // allume faiblement la Led rouge
  LED.show(); // envoie les données vers la Led
  Serial.println ( "" );
  Serial.print ( "Connected to " );
  Serial.println ( ssid );
  Serial.print ( "IP address: " );
  Serial.println ( WiFi.localIP() );
  lcd.println ( "Connecte a " );
  lcd.println ( ssid );
  lcd.print ( WiFi.localIP() );
  delay (5000);
  lcd.clear();

  server.on ( "/", handleRoot ); // initialisation de la page html

  server.begin();
  Serial.println ( "HTTP server started" );
  capteurInit(); // appel de la fonction d'initialisation du capteur OneWire
}
//--------------fin de la  fonction setup ---------------

//--------------début de la  fonction loop ---------------
void loop() {
  server.handleClient();

  tDS18B20 = capteurMesureTemp(); // appel de la fonction de mesure capteur OneWire
  if (stateLed)
  {
    LED.setPixelColor(0, LED.Color(0,40,40)); // allume faiblement les Led rouge et bleu
    LED.show(); // envoie les données vers la Led
  }
  else
  {
    LED.setPixelColor(0, LED.Color(0,0,40)); // allume faiblement la Led bleu
    LED.show(); // envoie les données vers la Led
  }
  tDS18B20 = capteurMesureTemp(); // appel de la fonction de mesure capteur OneWire
  if ((err = dht22.read2(DHT, &temperature, &humidity, NULL)) != SimpleDHTErrSuccess)
    {
      lcd.clear();
      lcd.println("DHT22 Pb");
      lcd.print("Erreur = ");
      lcd.print(err);
      delay(2000);
      return;
    }
  lcd.clear();
  lcd.print("Meteo Du LAB");
  lcd.setCursor(0, 2);
  lcd.print("T Int = ");
  lcd.print((float)temperature);
  lcd.println(" C");
  lcd.print("H int = ");
  lcd.print((float)humidity);
  lcd.print(" H%");
  lcd.setCursor(0, 5);
  lcd.print("T Ext = ");
  lcd.print(tDS18B20);
  lcd.println(" C");
  delay(500);
  if (stateLed)
  {
    LED.setPixelColor(0, LED.Color(0,40,0)); // allume faiblement la Led rouge
    LED.show(); // envoie les données vers la Led
  }
  else
  {
    LED.setPixelColor(0, LED.Color(0,0,0)); // éteind les Led
    LED.show(); // envoie les données vers la Led
  }
  delay(1500);
}
//--------------fin de la  fonction loop ---------------

```

### Projet final " MétéoDuLAB "

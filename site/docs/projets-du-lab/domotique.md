---
id: domotique
title: "Domotique"
sidebar_label: "Domotique"
sidebar_position: 4
---

# Domotique

| Projet | Catégorie |
|---|---|
| Projets du LAB | Domotique |

Le projet "Domotique" du LAB a pour objectif de construire nos propres systèmes domotiques en utilisant des briques matérielles et logicielles existantes ou conçues au LAB.

### Principes

### Protocoles

#### Protocole MQTT

##### Exemple de mise en oeuvre du protocole MQTT

Ce premier exemple montre comment mettre en oeuvre le protocole MQTT sur un réseau IP :

- Un premier Arduino capte des données et les émet sur le réseau.
- Un second Arduino reçoit les données transmises et les affiche.
- Un Raspberry Pi sert de broker.

![Montage Démo MQTT](/img/ressources/projets-du-lab/300px-DemoMQTT.png)

#### Broker (Raspberry Pi)

Installation de Mosquitto MQTT broker sur le Raspberry Pi (RP).

Installation d'Avahi Daemon :

```
sudo apt-get install avahi-daemon avahi-discover libnss-mdns

```

Installation de Mosquitto MQTT Broker :

```
sudo apt-add-repository ppa:mosquitto-dev/mosquitto-ppa
sudo apt-get update
sudo apt-get install mosquitto python-mosquitto
sudo apt-get install mosquitto-clients

```

Pour attribuer une adresse IP temporaire (192.168.0.9) au RP :

```
sudo ip addr add 192.168.0.9/24 dev eth0

```

Pour fixer une adresse IP statique (permanente) :

```
sudo nano /etc/network/interfaces

```

Remplacer :

```
iface eth0 inet dhcp

```

Par :

```
iface eth0 inet static
    	address 192.168.0.9
    	netmask 255.255.255.0
    	network 192.168.0.0

```

Pour vérifier l'adresse IP :

```
ip addr

```

Pour visualiser les données dans la console :

```
mosquitto_sub -t "#" -v

```

Pour prendre la main à distance depuis un PC (Avahi Daemon doit être installé sur le RP), utiliser PuTTY :

- Entrer l'adresse IP : 192.168.0.9
- Login : pi
- Mot de passe : raspberry

#### Émetteur (Arduino + shield Ethernet + DHT11)

##### Matériel

- Arduino Uno
- Shield Ethernet (avec chip W5100)
- Capteur DHT11 ou DHT22
- Résistance 4,7 kOhm (ou 10 kOhm) 1/4 W (si besoin)

##### Montage

![Montage DHT11](/img/ressources/projets-du-lab/DHT11_schéma.png)

Remarque : le shield Ethernet n'est pas représenté ici.

##### Programme

Voici le programme à éditer dans l'IDE Arduino, puis à compiler et charger dans la carte Arduino.

Il utilise la librairie DHT, disponible ici : [DHT](https://github.com/adafruit/DHT-sensor-library)

Il faut également télécharger la librairie MQTTClient : [MQTTClient](https://projects.eclipse.org/projects/technology.paho/downloads)

```
/*******************************************************************************
 * Copyleft (c) 2014 LabAixBidouille
 *
 * Contributors:
 *    Nicolas MULLER & Guy SINNIG
 *******************************************************************************/

#define MQTTCLIENT_QOS2 1

#include <SPI.h>
#include <Ethernet.h>
#include <EthernetStack.h>
#include <Countdown.h>
#include <MQTTClient.h>
#include <DHT.h>

#define DHTPIN 2 // broche de branchement (entrée) avec résistance de 4,7 ou 10k
#define DHTTYPE DHT11 //#define DHTTYPE DHT22 (pour un capteur DHT22)

DHT dht(DHTPIN, DHTTYPE);

float h = 0;
float t = 0;

/**************************
 * CONFIGURATION
 **************************/

// IP for the Broker
char hostname[] = "192.168.0.9";

// The port for the broker
int port = 1883;

// The topic where to publish the message
const char* topicTemperature = "LABdemo/temperature";
const char* topicHumidite = "LABdemo/humidite";

// replace with your device's MAC
byte mac[] = { 0x00, 0x11, 0x22, 0x33, 0x44, 0x55 };
byte ip[] = { 192,168,0,28 }; // adresse IP arduino émetteur

/**************************
 * DECLARATIONS
 **************************/

int compteur = 0;
int temperature = 0;
char printbuf[100];

// Send and receive QoS  message
char buf[200];

EthernetStack ipstack;
MQTT::Message message;
MQTT::Client<EthernetStack, Countdown> client = MQTT::Client<EthernetStack, Countdown>(ipstack);

/**************************
 * METHODES
 **************************/

// Connection to the Broker MQTT
void connect()
{
  sprintf(printbuf, "Connecting to %s:%d\n", hostname, port);
  Serial.print(printbuf);
  int rc = ipstack.connect(hostname, port);
  if (rc != 1)
  {
    sprintf(printbuf, "rc from TCP connect is %d\n", rc);
    Serial.print(printbuf);
  }

  Serial.println("MQTT connecting");
  MQTTPacket_connectData data = MQTTPacket_connectData_initializer;
  data.MQTTVersion = 3;
  data.clientID.cstring = (char*)"arduino-sample";
  rc = client.connect(data);
  if (rc != 0)
  {
    sprintf(printbuf, "rc from MQTT connect is %d\n", rc);
    Serial.print(printbuf);
  }
  Serial.println("MQTT connected");
}

/**************************
 * SETUP ARDUINO
 **************************/

void setup()
{
  Serial.begin(9600);
  Ethernet.begin(mac,ip);
  Serial.println("MQTT demo Temp");
  connect();
  dht.begin();
}

/**************************
 * LOOP ARDUINO
 **************************/

// Push la temperature sur le topic adequate
void pushData(int valeur, const char *topic)
{
     sprintf(buf, "%d", valeur);
     Serial.println(buf);
     message.retained = false;
     message.dup = false;
     message.payload = (void*)buf;
     message.qos = MQTT::QOS1;
     message.payloadlen = strlen(buf)+1;
     int rc = client.publish(topic, message);
}

void loop()
{
  if (!client.isConnected()) connect();
  h = dht.readHumidity();
  t = dht.readTemperature();
  if (isnan(t) || isnan(h))
  {
    Serial.println( "Lecture impossible !");
  }
  int temperature = t;
  int humidite = h;
  pushData(temperature, topicTemperature);
  pushData(humidite, topicHumidite);
  delay(1000);
}

```

#### Récepteur (Arduino + shield Ethernet + shield LCD)

##### Matériel

- Arduino Uno
- Shield Ethernet (avec chip W5100)
- Shield LCD (DFR0009)

##### Montage

Le montage est simplement composé de l'Arduino et des deux shields empilés.

##### Programme

Voici le programme à éditer dans l'IDE Arduino, puis à compiler et charger dans la carte Arduino. Il utilise la librairie LiquidCrystal, fournie en standard avec l'IDE.

```
/*******************************************************************************
 * Copyleft (c) 2014 LabAixBidouille
 *
 * Contributors:
 *    Nicolas MULLER & Guy SINNIG
 *******************************************************************************/

#define MQTTCLIENT_QOS2 1

#include <SPI.h>
#include <Ethernet.h>
#include <EthernetStack.h>
#include <Countdown.h>
#include <MQTTClient.h>
#include <LiquidCrystal.h>

/**************************
 * CONFIGURATION
 **************************/

// IP for the Broker
char hostname[] = "192.168.0.9";

// The port for the broker
int port = 1883;

// The topic where to publish the message
const char* topicTemperature = "LABdemo/temperature";
const char* topicHumidite = "LABdemo/humidite";

byte mac[] = { 0x00, 0x11, 0x22, 0x33, 0x44, 0x54 };  // adresse MAC arduino
byte ip[] = { 192,168,0,27 }; // adresse IP arduino récepteur

// broches shield LCD DFRobot DFR0009
const int RS=8;
const int E=9;

const int D4=4;
const int D5=5;
const int D6=6;
const int D7=7;

// Variable utile pour ne pas rafraichir
// inutilement l'afficheur
int previousTemperature = -1;
int previousHumidite = -1;

LiquidCrystal lcd(RS, E, D4, D5, D6, D7);// initialisation LCD en mode 4 bits

/**************************
 * DECLARATIONS
 **************************/

char printbuf[100];
int arrivedcount = 0;

EthernetStack ipstack;
MQTT::Message message;
MQTT::Client<EthernetStack, Countdown> client = MQTT::Client<EthernetStack, Countdown>(ipstack);

/**************************
 * PARTIE MQTT SUBSCRIBE
 **************************/

void messageTempArrived(MQTT::MessageData& md)
{
  MQTT::Message &message = md.message;

  sprintf(printbuf, "Message %d arrived: qos %d, retained %d, dup %d, packetid %d\n",
                ++arrivedcount, message.qos, message.retained, message.dup, message.id);
  Serial.print(printbuf);
  sprintf(printbuf, "Payload %s\n", (char*)message.payload);
  Serial.print(printbuf);
  lcd.setCursor(0, 1) ; // positionne le curseur à l'endroit voulu (colonne, ligne) (1ère colonne =0, 2ème ligne=1)
  lcd.print((char*)message.payload);
  lcd.setCursor(3, 1) ;// positionne le curseur à : 15ème colonne =14, 2ème ligne=1
  lcd.print("  ");
  lcd.setCursor(3, 1) ;// positionne le curseur à : 15ème colonne =14, 2ème ligne=1
  lcd.write(0xDF); // affichage °
  lcd.print("C");
}

void messageHumiArrived(MQTT::MessageData& md)
{
  MQTT::Message &message = md.message;

  sprintf(printbuf, "Message %d arrived: qos %d, retained %d, dup %d, packetid %d\n",
                ++arrivedcount, message.qos, message.retained, message.dup, message.id);
  Serial.print(printbuf);
  sprintf(printbuf, "Payload %s\n", (char*)message.payload);
  Serial.print(printbuf);
  lcd.setCursor(11, 1) ; // positionne le curseur à l'endroit voulu (colonne, ligne) (1ère colonne =0, 2ème ligne=1)
  lcd.print((char*)message.payload);
  lcd.setCursor(14, 1) ;// positionne le curseur à : 15ème colonne =14, 2ème ligne=1
  lcd.print("%");

}

/**************************
 * METHODES
 **************************/

// Connection to the Broker MQTT
void connect()
{
  sprintf(printbuf, "Connecting to %s:%d\n", hostname, port);
  Serial.print(printbuf);
  int rc = ipstack.connect(hostname, port);
  if (rc != 1)
  {
    sprintf(printbuf, "rc from TCP connect is %d\n", rc);
    Serial.print(printbuf);
  }

  Serial.println("MQTT connecting");
  MQTTPacket_connectData data = MQTTPacket_connectData_initializer;
  data.MQTTVersion = 3;
  data.clientID.cstring = (char*)"arduino-sample2";
  rc = client.connect(data);
  if (rc != 0)
  {
    sprintf(printbuf, "rc from MQTT connect is %d\n", rc);
    Serial.print(printbuf);
  }
  Serial.println("MQTT connected");

  rc = client.subscribe(topicTemperature, MQTT::QOS1, messageTempArrived);
  if (rc != 0)
  {
    sprintf(printbuf, "Temperature // rc from MQTT subscribe is %d\n", rc);
    Serial.print(printbuf);
  }
  Serial.println("MQTT subscribed for temperature");

  rc = client.subscribe(topicHumidite, MQTT::QOS1, messageHumiArrived);
  if (rc != 0)
  {
    sprintf(printbuf, "Humidite // rc from MQTT subscribe is %d\n", rc);
    Serial.print(printbuf);
  }
  Serial.println("MQTT subscribed for humidite");
}

/**************************
 * SETUP ARDUINO
 **************************/

void setup()
{
  Serial.begin(9600);
  lcd.begin(16,2); // Initialise le LCD avec 16 colonnes x 2 lignes
  lcd.print("TEMP   /   HUMI") ; // affiche la chaîne texte - message de test
  Ethernet.begin(mac,ip);
  Serial.println("MQTT Transmission Data");
  connect();
}

/**************************
 * LOOP ARDUINO
 **************************/

void loop()
{
  // If client is not connected, you have to connect to network...
  if (!client.isConnected())
      connect();
  client.yield(1000);
}

```

### Matériels

### Logiciels

### Exemple de réalisation : Mini-serre

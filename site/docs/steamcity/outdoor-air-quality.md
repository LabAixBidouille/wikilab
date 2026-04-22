---
id: outdoor-air-quality
title: "Qualité de l'air extérieur et impact de la météo"
sidebar_label: "Qualité de l'air extérieur"
sidebar_position: 4
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="2" y="2" width="20" height="20" rx="3" fill="#DD5350" opacity="0.1"/><circle cx="9" cy="8" r="3" fill="#DD5350" opacity="0.25"/><circle cx="15" cy="8" r="2" fill="#DD5350" opacity="0.25"/><circle cx="12" cy="6" r="2.5" fill="#DD5350" opacity="0.25"/><path d="M5 18l2-4 3 2 4-6 3 4 2-1" stroke="#DD5350" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg> Qualité de l'air extérieur et impact de la météo

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Biologie</span>
  <span className="badge badge--primary">Chimie / Physique</span>
  <span className="badge badge--info">Technologie</span>
  <span className="badge badge--secondary">Environnement</span>
  <span className="badge badge--secondary">Bien-être et santé publique</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| SteamCity | 3 heures (3 séances) | Facile | 10-15 ans |

## Matériel

- 1 carte programmable (NUCLEO-L476RG, Arduino ou Micro:bit)
- 1 shield Grove
- 1 LED RGB Neopixel
- 1 écran LCD
- 1 capteur SCD30 Sensirion
- 1 capteur de gaz multicanal MICS6814
- 1 capteur de particules HM3301
- 1 capteur DHT11 (température et humidité)
- 1 module Bluetooth HM10 BLE
- 1 module OpenLog pour enregistrement sur carte SD
- 1 batterie et connecteur
- 1 câble USB

<a href="/pdf/steamcity/Protocol_OutdoorAirQuality_FR.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger en PDF</a>

</div>

</div>

---

## Introduction

Le protocole "Qualité de l'air extérieur et impact de la météo" vise à guider la création d'une station de surveillance fonctionnelle de la qualité de l'air en classe. La pollution atmosphérique est un défi environnemental qui affecte les écosystèmes, les infrastructures et la santé publique. Les polluants issus des procédés industriels, des transports et d'autres activités humaines ajoutent des particules fines, des oxydes d'azote, des composés organiques volatils et d'autres substances à l'atmosphère.

D'un point de vue technique, ce projet présente l'Internet des objets (IoT), la technologie des capteurs et la visualisation de données. Les participants acquerront des compétences pratiques utiles dans les domaines des STEAM.

---

## Structure du protocole

Le protocole fonctionne comme un parcours d'apprentissage à travers quatre étapes :

1. **Collecter des données** : construction et déploiement de capteurs
2. **Afficher les données** : techniques de visualisation et de représentation
3. **Analyser les données** : identifier les tendances et les corrélations environnementales
4. **Utiliser les données pour agir** : élaboration de recommandations environnementales

---

## Glossaire

| Terme | Définition |
|---|---|
| **Particules fines (PM10 et PM2,5)** | Mélange complexe de particules solides et liquides en suspension dans l'air, classées selon leur taille (PM2,5 : diamètre inférieur ou égal a 2,5 um, PM10 : inférieur ou égal à 10 um). |
| **Dioxyde d'azote (NO2)** | Provient principalement de la combustion de combustibles fossiles (chauffage, moteurs). |
| **Monoxyde de carbone (CO)** | Résulte d'une combustion incomplète. Peut provoquer des intoxications domestiques. |
| **Composés organiques volatils (COV)** | Polluants secondaires de différentes natures (hydrocarbures, benzène, aldéhydes), émis par les véhicules, solvants et l'industrie. |
| **Ozone (O3)** | "Bon ozone" dans la haute atmosphère (protège des UV), "mauvais ozone" au niveau du sol (polluant secondaire). |
| **Dioxyde de carbone (CO2)** | Gaz responsable de 77% des émissions de gaz à effet de serre d'origine humaine. |
| **Indice de qualité de l'air** | Valeur synthétisant la surveillance de cinq polluants, avec six niveaux colorés allant de bon à extrêmement mauvais. |

---

## Protocole

### Etape 1 : collecter des données

**Contexte** : familiariser les élèves avec les concepts clés de la pollution atmosphérique et les outils de mesure.

**Objectifs d'apprentissage** : comprendre les principaux types de polluants et leurs sources, assembler et configurer des capteurs, acquérir des compétences de base en programmation.

#### Conceptualisation

Questions de recherche à explorer :

1. Que sont les polluants environnementaux ? (polluants primaires vs secondaires)
2. Comment quantifier différents types de polluants atmosphériques ? (technologie des capteurs, PPM, étalonnage)
3. Où la qualité de l'air est-elle un problème important ? (points chauds urbains, populations vulnérables)

**Activité d'introduction** (25 min) : identifier les endroits où mesurer la qualité de l'air et choisir des zones géographiques pour l'analyse.

#### Investigation par les élèves

**Activité 1 : mesure des COV** (10 min) - Programme de mesure avec le capteur MICS6814 et affichage sur écran LCD.

**Activité 2 : surveillance multiparamétrique** (15 min) - Programme pour mesurer divers paramètres environnementaux avec les capteurs HM3301, MICS6814 et DHT11.

---

### Etape 2 : afficher les données

**Objectifs d'apprentissage** : comprendre les différentes méthodes de visualisation, utiliser des interfaces graphiques, exporter et stocker les données.

#### Investigation par les élèves

**Activité 1 : graphiques en temps réel** (20 min) - Création de graphiques via le mode graphique des interfaces Vittascience.

**Activité 2 : enregistrement des données** (20 min) - Enregistrement sur carte SD à l'aide du module OpenLog.

---

### Etape 3 : analyser les données

**Objectifs d'apprentissage** : développer des compétences analytiques, identifier les tendances et corrélations, comprendre l'influence des facteurs environnementaux.

#### Investigation par les élèves

**Activité 1 : traitement des données** (10 min) - Importation dans un tableur (Excel, LibreOffice), organisation en colonnes (Temps, Température, Pression, Altitude, PM, NO2, CO, COV), création de graphiques.

**Activité 2 : analyse des modèles** (10 min) - Trouver les causes des variations du monoxyde de carbone dans l'air.

---

### Etape 4 : utiliser les données pour agir

**Objectifs d'apprentissage** : analyse comparative, recommandations fondées sur des données probantes, communication scientifique.

#### Investigation par les élèves

Comparaison avec d'autres données mondiales via la technologie LoRa et la plateforme [Vittamap](https://vittascience.com/vittamap). Publication des données collectées et comparaison avec d'autres expériences similaires.

---

## Fiches pratiques

### Fiche 1 : système de surveillance des COV avec écran LCD

```python
from microbit import *
from lcd_i2c import LCD1602
from gas_gmxxx import GAS_GMXXX

lcd = LCD1602()
multichannel_v2 = GAS_GMXXX(0x08)

while True:
    lcd.setCursor(0, 0)
    lcd.writeTxt('Mesure VOC')
    lcd.setCursor(0, 1)
    lcd.writeTxt(str(multichannel_v2.calcVol(multichannel_v2.measure_VOC())))
```

### Fiche 2 : collecte de données environnementales multi-capteurs

Programme pour micro:bit utilisant les capteurs HM3301, MICS6814, DHT11 avec affichage LCD et enregistrement OpenLog.

### Fiche 3 : enregistrement automatisé des données sur carte SD

Programme pour l'enregistrement continu des données de particules et de NO2 sur carte micro-SD.

---

## Pour aller plus loin

- **Construire un abri solaire** pour votre station de qualité de l'air
- **Ajouter un anémomètre** à votre station météo
- **Transmettre les données** de l'extérieur vers l'intérieur avec deux cartes
- **Recevoir les informations** sur votre smartphone via Bluetooth

---

## Bibliographie

- [ATMO France](https://atmo-france.org/la-carte-des-aasqa/) - Associations de surveillance de la qualité de l'air
- [Vittascience](https://fr.vittascience.com/learn/tutorial.php?id=330/guide-d-utilisation-qualite-d-air) - Guide d'utilisation qualité de l'air
- [CNES / Calisph'air](https://enseignants-mediateurs.cnes.fr/fr/projets/calisphair) - Projet de surveillance atmosphérique

---

*Cette fiche fait partie du projet [SteamCity](/projets/steamcity), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

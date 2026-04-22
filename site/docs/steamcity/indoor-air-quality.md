---
id: indoor-air-quality
title: "Mesure de CO2 en intérieur"
sidebar_label: "Qualité de l'air intérieur"
sidebar_position: 5
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="2" y="2" width="20" height="20" rx="3" fill="#DD5350" opacity="0.1"/><path d="M6 18V10l6-5 6 5v8" stroke="#DD5350" strokeWidth="1.5" fill="none" strokeLinejoin="round"/><rect x="10" y="13" width="4" height="5" rx="0.5" fill="#DD5350" opacity="0.25"/><circle cx="12" cy="9" r="1.5" fill="#DD5350"/><path d="M3 20h18" stroke="#DD5350" strokeWidth="0.5" opacity="0.3"/></svg> Mesure de CO2 en intérieur

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Biologie</span>
  <span className="badge badge--primary">Physique</span>
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
- 1 capteur Sensirion SCD30
- 1 module Bluetooth HM10 BLE
- 1 batterie et connecteur de batterie
- 1 câble USB

<a href="/pdf/steamcity/Protocol_IndoorAirQuality_FR.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger en PDF</a>

</div>

</div>

---

## Introduction

Il est recommandé d'aérer régulièrement les locaux afin de réduire la concentration de particules en suspension dans l'air et ainsi limiter la propagation des virus. Plusieurs études ont démontré la relation entre la concentration de CO2 dans une pièce et la concentration de virus. Lorsque la concentration de CO2 devient trop élevée, c'est le signe qu'une ventilation est nécessaire.

Cette expérience permet de réaliser un détecteur de dioxyde de carbone. Une fois assemblé et programmé, le détecteur peut être utilisé pour mesurer le taux de CO2 dans une pièce, surveiller les changements de niveau au fil du temps et évaluer la corrélation entre les changements de taux de CO2 et la ventilation.

:::caution[Avertissement]
Cette expérience donne une valeur indicative de l'évolution du taux de CO2. Elle ne peut être utilisée qu'à des fins pédagogiques et ne saurait se substituer à un appareil étalonné et certifié.
:::

---

## Structure de l'activité

1. **Collecter des données** : découvrir les principes de la détection du CO2, construire un détecteur avec le capteur SCD30 et un système d'affichage à LED
2. **Afficher les données** : modifier le programme pour afficher les mesures sous forme graphique
3. **Analyser les données** : identifier les tendances des niveaux de CO2 et les corréler avec des événements spécifiques
4. **Utiliser les données pour agir** : transformer l'analyse en solutions exploitables, partager les résultats via Vittamap

---

## Glossaire

| Terme | Définition |
|---|---|
| **Dioxyde de carbone** | Gaz inodore, incolore et sans goût, composé d'un atome de carbone et de deux atomes d'oxygène. Produit par la respiration et la combustion d'hydrocarbures. |
| **Unité PPM** | Parts Per Million (parties par million). 800 ppm de CO2 signifie que sur 1 million de molécules, 800 sont du CO2, soit 0,08%. |
| **Taux de CO2 en ppm** | Le taux moyen en extérieur est d'environ 400 ppm. Des concentrations supérieures à 800 ppm sont révélatrices d'une ventilation inadéquate. |
| **LoRa** | Protocole de communication radio permettant l'échange de données entre objets connectés sur de longues distances (1 km en zone urbaine, jusqu'à 20 km en zone rurale). |

---

## Protocole

### Etape 1 : collecter des données

**Objectifs d'apprentissage** : collecter des données à l'aide de capteurs CO2 et de la programmation, déterminer les seuils de données.

#### Conceptualisation

**Que se passe-t-il s'il y a trop de CO2 ?** A forte concentration, le manque d'oxygène peut provoquer : accélération du rythme cardiaque, fatigue (diminution des capacités intellectuelles), nausées, et dans des situations extrêmes, malaise.

**Seuils recommandés** :

| Taux de CO2 | Signification |
|---|---|
| ~410 ppm | Taux moyen en extérieur |
| &lt; 600 ppm | Recommandé pour les espaces de restauration |
| &lt; 800 ppm | Recommandé dans les espaces clos (Haut Conseil de la Santé Publique) |
| &gt; 1500 ppm | Seuil d'action immédiate |
| 5000 ppm | Limite d'exposition professionnelle |

**Comment calibrer le capteur ?** Placer le capteur à l'extérieur où le taux est d'environ 400 ppm et utiliser le calibrage forcé via l'interface Vittascience.

#### Investigation par les élèves

**Activité 1 : configuration des seuils** (10 min) - Définir 4 niveaux d'intervention :

| Niveau de CO2 | Couleur LED | Action |
|---|---|---|
| Moins de 600 ppm | Vert | Aucune action spécifique |
| 600 à 800 ppm | Jaune | Port du masque recommandé |
| 800 à 1000 ppm | Orange | Ventiler la pièce |
| Au-delà de 1000 ppm | Rouge | Quitter la pièce et aérer |

**Activité 2 : programmation de l'affichage** (10 min) - Afficher le taux de CO2 sur l'écran LCD avec le capteur SCD30.

**Activité 3 : configuration des couleurs LED** (10 min) - Allumer une LED Neopixel selon le taux de CO2.

**Activité 4 : indicateur LED CO2** (10 min) - Programme complet combinant mesure, affichage et LED conditionnelle.

---

### Etape 2 : afficher les données

**Objectifs** : afficher les valeurs de CO2 sur l'écran de l'ordinateur via l'interface Vittascience, visualiser sous forme graphique.

#### Investigation par les élèves

**Activité 1 : affichage du CO2** (10 min) - Modification du programme pour affichage console.

**Activité 2 : visualisation des données** (10 min) - Affichage graphique de la valeur de CO2 avec possibilité d'export en CSV.

---

### Etape 3 : analyser les données

**Objectifs** : analyser les données pour identifier les éléments clés modifiant les niveaux de CO2.

Facteurs à prendre en compte : heures d'ouverture et de fermeture des fenêtres, pauses et récréations, nombre de personnes dans la salle, taille de la salle, présence d'une ventilation.

#### Investigation par les élèves

**Activité 1 : configurer et installer l'appareil** (20 min) - Déterminer la durée de mesure et installer l'appareil.

**Activité 2 : analyser les données** (30 min) - Démontrer quantitativement l'utilité et l'efficacité de la ventilation.

---

### Etape 4 : utiliser les données pour agir

**Objectifs** : tirer des conclusions, identifier les faiblesses du système et les domaines à améliorer.

#### Investigation par les élèves

**Activité 1 : analyse statistique** (20 min) - Analyse de corrélation et régression.

**Activité 2 : partage et comparaison** (10 min) - Publication des données sur [Vittamap](https://vittascience.com/vittamap) et comparaison avec d'autres données mondiales.

---

## Pour aller plus loin

- **Explorer la qualité de l'air à la maison** : surveiller les niveaux de CO2 dans les chambres
- **Appliquer les connaissances** : comparer les niveaux avec fenêtres fermées vs ouvertes
- **Engager l'entourage** : partager les découvertes avec la famille
- **Du suivi au plaidoyer** : transformer les élèves en défenseurs d'espaces de vie plus sains

---

## Bibliographie

- [Global Monitoring Laboratory - Taux de CO2 en direct](https://gml.noaa.gov/ccgg/trends/)
- [NousAérons.fr](http://nousaerons.fr/) - Seuils de CO2 et qualité de l'air
- [Repères pour l'aération des espaces scolaires (Avril 2021)](https://www.education.gouv.fr/media/88756/download)
- [Vittascience - Alerte Aération Arduino](https://fr.vittascience.com/learn/tutorial.php?id=340/guide-d-utilisation-alerte-aeration-Arduino)
- [Vittascience - Alerte Aération Micro:bit](https://fr.vittascience.com/learn/tutorial.php?id=339/guide-d-utilisation-alerte-aeration-micro-bit)

---

*Cette fiche fait partie du projet [SteamCity](/projets/steamcity), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

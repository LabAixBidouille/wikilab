---
id: plants-city
title: "Végétalisation urbaine grâce à l'IA"
sidebar_label: "Végétalisation urbaine"
sidebar_position: 6
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="2" y="2" width="20" height="20" rx="3" fill="#DD5350" opacity="0.1"/><path d="M12 20V12" stroke="#DD5350" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 12c0-4 3-6 6-6-1 3-3 5-6 6z" fill="#DD5350"/><path d="M12 14c0-4-3-7-6-7 1 3 3 6 6 7z" fill="#DD5350" opacity="0.25"/><path d="M8 20h8" stroke="#DD5350" strokeWidth="1" opacity="0.25"/></svg> Végétalisation urbaine grâce à l'IA

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Biologie / SVT</span>
  <span className="badge badge--info">Technologie et ingénierie</span>
  <span className="badge badge--info">Intelligence artificielle</span>
  <span className="badge badge--secondary">Environnement</span>
  <span className="badge badge--secondary">Bien-être et santé publique</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| SteamCity | 4 heures | Intermédiaire | 10-14 ans |

## Matériel

Par groupe :
- 1 carte Micro:bit
- 1 capteur DHT-11
- 1 Micro:bit Grove Shield
- 3 câbles Grove + 1 câble adaptateur Grove Dupont
- 4 câbles Dupont Femelle-Femelle
- 1 câble micro USB
- 1 lecteur de carte OpenLog micro-SD + 1 carte micro-SD
- 1 batterie 5V (batterie externe)

<a href="/pdf/steamcity/Protocol_PlantsCity_FR.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger en PDF</a>

</div>

</div>

---

## Introduction

Dans un contexte où les villes cherchent à devenir plus durables, la végétalisation urbaine joue un rôle crucial. Les espaces verts en ville apportent de multiples bénéfices : ils régulent la température, améliorent la qualité de l'air et de l'eau, enrichissent la biodiversité et contribuent à une meilleure gestion des eaux pluviales.

Ce protocole pédagogique invite les élèves à créer leur propre mur végétal, alliant apprentissages environnementaux et technologiques. Ils apprendront à utiliser des microcontrôleurs pour mesurer les conditions environnementales et s'initieront aux outils de recherche basés sur l'intelligence artificielle (Copilot, ChatGPT, Gemini) pour sélectionner les plantes les mieux adaptées.

---

## Structure de l'activité

1. **Collecter les données** : mettre en place une station de mesure environnementale (température, humidité, luminosité)
2. **Afficher les données** : mettre en place un système de stockage des données collectées
3. **Analyser les données** : sélectionner les plantes adaptées grâce à une étude documentaire comparative (méthodes traditionnelles, web, IA)
4. **Utiliser les données pour créer un mur végétal** : réalisation physique et système de monitoring connecté

---

## Glossaire

| Terme | Définition |
|---|---|
| **Végétalisation urbaine** | Introduction et entretien de végétation dans les zones urbaines pour améliorer la biodiversité et la qualité de l'environnement. |
| **Mur végétal** | Structure verticale recouverte de plantes, utilisée pour améliorer la qualité de l'air, réguler la température et l'esthétique urbaine. |
| **Variables environnementales** | Facteurs tels que la température, l'humidité, la lumière et la composition du sol influençant la croissance des plantes. |
| **Intensité lumineuse** | Quantité de lumière visible reçue à un endroit, mesurée en lux. |
| **Microcontrôleur** | Circuit intégré compact conçu pour contrôler une opération spécifique (ex. : Micro:bit). |
| **Capteur DHT11** | Capteur de température et d'humidité fournissant des lectures précises. |
| **OpenLog** | Enregistreur de données basé sur une carte micro-SD. |
| **Format CSV** | Format de fichier texte stockant des données sous forme de tableau, séparées par des virgules. |
| **Hallucination de l'IA** | Phénomène où l'IA génère des informations incorrectes ou dénuées de sens. |

---

## Protocole

### Etape 1 : collecter les données

**Contexte** : pour créer un mur végétal réussi, il est crucial de bien comprendre l'environnement dans lequel il sera installé.

**Objectifs d'apprentissage** : identifier les variables environnementales influençant la croissance des plantes, se familiariser avec les microcontrôleurs.

#### Conceptualisation

Comment identifier et mesurer les paramètres environnementaux qui détermineront le succès de la végétalisation ?

Questions directrices :
- Quelles sont les variables environnementales cruciales pour la vie des plantes ?
- Comment mettre en place un système de mesure automatisé et fiable ?

#### Investigation par les élèves

1. **Définir les paramètres** : discussion en classe sur les paramètres importants (température, humidité, luminosité, vent, sol)
2. **Créer une station de mesure** : montage avec carte Micro:bit et capteur DHT11 sur la plateforme [Vittascience](https://vittascience.com)
3. **Aborder la calibration** : comprendre les mesures relatives vs calibrées

La température et l'humidité sont mesurées par le DHT11. L'intensité lumineuse est mesurée par la matrice de LED de la Micro:bit (les LED peuvent générer un courant lorsqu'elles reçoivent de la lumière).

---

### Etape 2 : afficher les données

**Contexte** : les stations ne fournissent que des mesures instantanées. Il faut ajouter un système d'enregistrement.

**Objectifs d'apprentissage** : réfléchir à l'amélioration d'un système pour répondre à une problématique technique.

#### Investigation par les élèves

1. **Réflexion collective** : discussion sur les méthodes de sauvegarde (carte micro-SD, relevé manuel, Wi-Fi)
2. **Implémentation technique** : utilisation du lecteur OpenLog avec carte micro-SD pour un enregistrement automatique au format CSV
3. **Collecte des données** : déploiement de la station sur le site d'étude pendant plusieurs jours

---

### Etape 3 : analyser les données et en tirer des leçons

**Contexte** : sélection des plantes adaptées grâce à une étude documentaire comparative.

**Objectifs d'apprentissage** : se familiariser avec les outils d'IA générative, comprendre les limites des modèles de génération de texte, analyser les données collectées.

#### Investigation par les élèves

**Analyse des données** : calcul des moyennes, création de graphiques, détermination du niveau d'ensoleillement et du type de climat.

| Facteur environnemental | Valeurs mesurées | Classification | Impact pour le choix des plantes |
|---|---|---|---|
| Luminosité | min-max | Plein soleil / Mi-ombre / Ombre | Types de plantes adaptées |
| Température | min-max, moyenne | Chaud / Tempéré / Frais | Résistance nécessaire |
| Humidité | min-max, moyenne | Sec / Normal / Humide | Besoins en arrosage |

**Recherche documentaire comparative** : la classe est divisée en trois groupes :

- **Groupe 1 - Méthodes traditionnelles** : ouvrages de botanique, bases de données (Flora Data, Tela Botanica)
- **Groupe 2 - Recherche web classique** : moteurs de recherche, sites spécialisés, forums
- **Groupe 3 - Outils d'Intelligence Artificielle** : ChatGPT, Microsoft Copilot, Google Gemini, Llama2, Mixtral, [Vittascience IA](https://vittascience.com/ia/text.php)

Chaque groupe documente : temps et efficacité, qualité et fiabilité, avantages et limites. Un point crucial sera l'exploration du phénomène d'**hallucination des IA**.

---

### Etape 4 : utiliser les données pour créer un mur végétal

**Contexte** : mise en place physique du mur végétal et installation d'un système de monitoring connecté.

**Objectifs d'apprentissage** : mettre en pratique les connaissances botaniques, développer des compétences en gestion de projet.

#### Investigation par les élèves

1. **Comprendre les enjeux** : discussion sur la végétalisation urbaine (îlots de chaleur, pollution, gestion des eaux)
2. **Construction collective** : plan d'action, sélection des plantes, conception du système d'irrigation
3. **Système de monitoring** : réutilisation des compétences en programmation pour un suivi en temps réel (température, humidité air et sol, luminosité)
4. **Réflexion et perspectives** : documenter la démarche, créer des supports de communication

---

## Pour aller plus loin

- **Surveillance de la santé des plantes** : ajouter un capteur d'humidité du sol capacitif (Grove Moisture Sensor)
- **Timelapse de croissance** : système de photos à intervalles réguliers avec Raspberry Pi
- **Conception assistée par IA** : utiliser DALL-E ou Midjourney pour visualiser le mur végétal avant l'installation

---

*Cette fiche fait partie du projet [SteamCity](/projets/steamcity), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

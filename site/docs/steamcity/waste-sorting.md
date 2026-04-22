---
id: waste-sorting
title: "Tri optimisé des déchets"
sidebar_label: "Tri optimisé des déchets"
sidebar_position: 22
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><path d="M6 6 L18 6 L16 20 L8 20 Z" fill="#DD5350" opacity="0.1"/><path d="M8 8 L16 8 L15 18 L9 18 Z" fill="#DD5350" opacity="0.25"/><line x1="4" y1="6" x2="20" y2="6" stroke="#DD5350" strokeWidth="1.5" opacity="1.0"/><path d="M10 3 L14 3 L14 6 L10 6 Z" fill="none" stroke="#DD5350" strokeWidth="1" opacity="1.0"/><line x1="12" y1="10" x2="12" y2="16" stroke="#DD5350" strokeWidth="1.5" opacity="1.0"/></svg> Tri optimisé des déchets

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Biologie</span>
  <span className="badge badge--info">Intelligence artificielle et nouvelles technologies</span>
  <span className="badge badge--secondary">Environnement, bien-être et santé publique</span>
</div>

| Projet | Durée | Difficulté |
|---|---|---|
| SteamCity | 180 min ou 3 séances | Facile (du primaire au lycée) |

## Matériel

- Ordinateur avec webcam (ou caméra HUE HD)
- Micro:bit
- Grove Shield pour micro:bit
- Servomoteur
- Accès à [Vittascience](https://fr.vittascience.com/) et [Adacraft](https://www.adacraft.org/)

<a href="/pdf/steamcity/Protocol_WasteSorting_FR.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#DD5350', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger en PDF</a>

</div>

</div>

---

## Introduction

Comprendre comment l'intelligence artificielle (IA) apprend et produit des prédictions est essentiel pour une formation efficace en IA. Ce protocole guide les élèves dans la sélection des données d'entraînement appropriées et la compréhension des biais cognitifs.

En mettant en œuvre un projet de tri des déchets utilisant la technologie de reconnaissance d'images, nous établissons un lien entre l'intelligence artificielle et l'éducation au développement durable. Ce projet démontre comment l'IA peut analyser et catégoriser différents types de déchets grâce à la vision par ordinateur.

### Structure du protocole

Les élèves développeront un système de tri des déchets basé sur l'IA en quatre étapes :

1. **Étape 1 — Création d'une base de données d'images** pour la classification des déchets.
2. **Étape 2 — Création d'un modèle de reconnaissance** des déchets (entraînement, test et connexion au matériel).
3. **Étape 3 — Analyser les données et en tirer des enseignements** (visualisation du réseau neuronal).
4. **Étape 4 — Utiliser l'IA pour améliorer l'empreinte environnementale** (test sur le terrain et défi de classification).

## Glossaire

| Terme | Définition |
|---|---|
| Intelligence artificielle (IA) | Ensemble de théories et de techniques utilisées pour créer des machines capables de simuler l'intelligence humaine. |
| Apprentissage automatique | Branche de l'IA où les ordinateurs apprennent à partir de données pour faire des prédictions sans programmation explicite. |
| Réseau neuronal | Modèle informatique avec des couches de nœuds interconnectés qui traitent les informations de manière similaire aux réseaux neuronaux biologiques. |
| Reconnaissance d'images | Technologie permettant aux machines d'identifier des objets, des lieux et des personnes dans des images numériques. |
| Ensemble de données | Ensemble de données utilisées pour former des modèles d'IA, tels que des images étiquetées. |
| Biais | Erreurs systématiques dans les systèmes d'IA causées par des limitations ou des déséquilibres dans les données de formation. |
| Pixel | Unité de base d'une image numérique, contenant des informations sur la couleur et la luminosité. |
| Microcontrôleur | Petit ordinateur sur une puce qui contrôle les composants physiques des applications d'IA. |
| Servomoteur | Moteur qui permet un contrôle de position précis basé sur les sorties du système d'IA. |
| Durabilité | Pratique consistant à utiliser les ressources de manière à préserver leur disponibilité pour les besoins futurs. |

---

## Étape 1 : Création d'une base de données d'images

**Contexte :** Cette première étape présente aux élèves les concepts clés de la reconnaissance d'images par IA. Les élèves créeront une base de données adaptée à l'entraînement de l'intelligence artificielle.

**Objectifs d'apprentissage :** Comprendre les fondamentaux de l'IA. Développer les compétences de collecte de données.

### Conceptualisation

Évaluez le niveau de connaissances des élèves. Pour un ordinateur, une image est constituée d'un ensemble de pixels. Chaque pixel est composé de 3 canaux (Rouge/Vert/Bleu), codé par des valeurs de 0 à 255.

### Investigation par les élèves

Créez 3 dossiers : « Verre », « Emballage » et « Papier ». Deux options pour les images : banque d'images libres de droits ou photographier les déchets (option plus pédagogique). Placez une feuille de papier vierge sous les déchets pour « polluer » le moins possible le modèle. Pour la classe « verre », évitez le verre transparent et privilégiez les bouteilles colorées.

### Restitution et réflexion

Les élèves ont appris l'importance des données dans la formation à l'IA et comprennent comment les machines interprètent les images différemment des humains.

---

## Étape 2 : Création d'un modèle de reconnaissance des déchets

**Contexte :** Les élèves apprennent à entraîner une intelligence artificielle à partir des données collectées.

**Objectifs d'apprentissage :** Se familiariser avec la formation d'une intelligence artificielle, sa création et une meilleure compréhension de son apprentissage.

### Conceptualisation

Explorez les concepts de biais et de diversité des données. Les élèves examineront et compareront les données collectées avec celles de leurs camarades. Si une IA est entraînée exclusivement sur des images de papier blanc, comment interpréterait-elle un magazine rempli d'images diverses ?

### Investigation par les élèves

**Activité 1 — Entraînement à la reconnaissance des déchets (20 min) :** Sur l'interface Vittascience, créez 3 catégories dans la section « données », faites glisser les images collectées, cliquez sur « Entrainer », puis testez le modèle avec différents objets. Activez les zones d'interaction pour comprendre sur quel élément le modèle se base pour prédire.

**Activité 2 — Connecter l'IA au matériel (20 min) :** Utilisez Adacraft pour connecter la sortie du modèle à un microcontrôleur (Arduino ou micro:bit). Ajoutez les extensions nécessaires et établissez la connexion série.

**Activité 3 — Créer des commentaires interactifs sur l'IA (20 min) :** Créez un programme sur Adacraft pour que le personnage Vittabot dise la classe détectée et affichez un texte sur la matrice LED du micro:bit en fonction de la détection.

### Restitution et réflexion

Les élèves comprennent comment l'IA apprend, le rôle de la qualité des données et comment tester et améliorer les modèles d'IA.

---

## Étape 3 : Analyser les données et en tirer des enseignements

**Contexte :** L'enseignant guide les élèves pour visualiser l'algorithme d'IA résultant de la phase d'entraînement.

**Objectifs d'apprentissage :** Ouvrir la « boîte noire » et comprendre comment fonctionne un réseau neuronal.

### Conceptualisation

L'apprentissage supervisé fonctionne en fournissant des images et le nom de la classe associée. L'algorithme détermine les différents paramètres (poids et biais) de chaque couche de neurones. On peut utiliser plusieurs couches de neurones, ce qu'on appelle l'apprentissage profond.

### Investigation par les élèves

Les élèves observent les différentes interactions entre les neurones des différentes couches. La « Vue simplifiée » présente le réseau neuronal de manière schématique. La « Vue détaillée » permet de visualiser tous les neurones du réseau (plus d'un million). La première couche applique un filtre de couleur rouge, bleu et vert.

### Restitution et réflexion

Les élèves acquièrent un aperçu de la manière dont les systèmes d'IA traitent les informations et font des prédictions, en reliant ces processus à des applications du monde réel.

---

## Étape 4 : Utiliser l'IA pour améliorer l'empreinte environnementale

**Contexte :** Les élèves appliquent leur modèle d'IA dans des conditions réelles pour trier les déchets.

**Objectifs d'apprentissage :** Apprendre à utiliser l'intelligence artificielle en lien avec un besoin quotidien. Reconnaître l'utilité de ces outils en améliorant leur empreinte environnementale.

### Conceptualisation

L'intelligence artificielle est profondément ancrée dans notre quotidien. Créez une carte mentale collective documentant toutes les interactions avec l'IA au cours d'une journée type. Analysez lesquelles contribuent à réduire l'impact environnemental.

### Investigation par les élèves

**Activité 1 — Test sur le terrain (20 min) :** En petits groupes, les élèves explorent une zone avec un sac poubelle, des gants et un téléphone. Un élève ramasse les déchets, un autre vérifie le tri avec le modèle d'IA, un troisième enregistre les données.

**Activité 2 — Défi de classification intelligente (25 min) :** De retour en classe, les élèves réfléchissent aux questions : L'IA peut-elle trier tous les déchets ? Toutes les poubelles nécessaires sont-elles présentes sur le site étudié ? Si non, rédigez un compte rendu pour la mairie.

### Restitution et réflexion

Les élèves ont appris comment l'IA peut résoudre des problèmes pratiques, favorisant la réflexion critique sur l'impact de la technologie sur l'environnement et la société.

---

## Bibliographie

**L'IA dans le tri et le recyclage des déchets :**
- ZenRobotics : [https://zenrobotics.com/](https://zenrobotics.com/) — Pionnière dans l'utilisation de bras robotisés alimentés par l'IA.
- AMP Robotics : [https://www.amprobotics.com/](https://www.amprobotics.com/) — Systèmes d'IA triant les matières recyclables à grande vitesse.
- Recycleye : [https://recycleye.com/](https://recycleye.com/) — Systèmes reconnaissant plus de 500 catégories de déchets.

**Outils et plateformes d'IA pour les enseignants :**
- Vittascience : [https://fr.vittascience.com/](https://fr.vittascience.com/)
- Teachable Machine by Google : [https://teachablemachine.withgoogle.com/](https://teachablemachine.withgoogle.com/)
- ML4K — Machine Learning for Kids : [https://machinelearningforkids.co.uk/](https://machinelearningforkids.co.uk/)

---

*Cette fiche fait partie du projet [SteamCity](/projets/steamcity), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

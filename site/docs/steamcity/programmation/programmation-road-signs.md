---
id: programmation-road-signs
title: Reconnaissance de panneaux par IA
sidebar_label: "Reconnaissance de panneaux par IA"
sidebar_position: 8
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="4" y="4" width="16" height="16" rx="2" fill="#DD5350" opacity="0.1"/><rect x="6" y="6" width="12" height="12" rx="1" fill="#DD5350" opacity="0.25"/><path d="M9 10h6M9 12h6M9 14h4" stroke="#DD5350" strokeWidth="1" strokeLinecap="round" opacity="1.0"/></svg> Reconnaissance de panneaux par IA

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Intelligence artificielle</span>
  <span className="badge badge--info">Webcam</span>
  <span className="badge badge--warning">Python / SignVisionAI</span>
  <span className="badge badge--warning">Vittascience IA</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| SteamCity | 1-2 heures | Intermédiaire | 12-18 ans |

## Matériel

- 1 ordinateur avec webcam
- 1 connexion internet
- Un navigateur web moderne
- (Optionnel) Python 3.11.2 installé pour SignVisionAI

</div>

<img src="/img/ressources/steamcity/programmation-road-signs/icone.png" alt="Reconnaissance de panneaux par IA" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Cette fiche technique accompagne la ressource [Road Signs](/ressources/steamcity/road-signs). Elle présente deux outils complémentaires pour explorer la reconnaissance automatique de panneaux de signalisation : **SignVisionAI** (logiciel local basé sur l'apprentissage profond) et **Vittascience – IA Images** (plateforme en ligne d'entraînement supervisé sans installation).

## Objectifs d'apprentissage

- Installer et exécuter un logiciel de reconnaissance d'images basé sur l'IA
- Comprendre les étapes d'entraînement d'un modèle supervisé
- Tester un modèle avec des images fixes et un flux vidéo en direct
- Analyser les zones d'influence qui orientent les prédictions

---

## Fiche 1 : installer et utiliser SignVisionAI

SignVisionAI est un logiciel de reconnaissance automatique de panneaux de signalisation. Il utilise des techniques d'apprentissage profond pour identifier **quatorze types de panneaux** à partir d'images fixes ou d'un flux vidéo en direct via webcam.

### Installation

1. Télécharger le dossier : [Google Drive](https://drive.google.com/drive/folders/1lwb4TkkNRnQ0K3j0s8kxeq7xg7a3pLak?usp=sharing)
2. Installer l'interpréteur **Python 3.11.2** fourni
3. Créer un dossier pour le logiciel (ex. : `SignVisionAI`)
4. Créer un environnement virtuel Python :

```bash
python -m venv C:\SignVisionAI
```

5. Activer l'environnement :

```bash
cd C:\SignVisionAI\Scripts && activate.bat
```

6. Remplacer le dossier `lib` par celui fourni dans Store
7. Copier les fichiers du logiciel (`SignVisionAI.py`, `assets`, `input_folder`, `output_folder`, `model`)
8. Lancer :

```bash
python.exe SignVisionAI.py
```

9. Désactiver après usage :

```bash
deactivate.bat
```

### Utilisation

Deux modes sont disponibles :

- **Mode « dossier »** : traiter des images enregistrées
- **Mode « webcam »** : reconnaissance en temps réel

Cliquer sur **Start Processing** pour lancer la reconnaissance.

---

## Fiche 2 : utiliser Vittascience pour entraîner un modèle

[Vittascience – IA Images](https://fr.vittascience.com/ia/images.php) est une plateforme en ligne d'apprentissage supervisé. L'utilisateur crée des catégories, fournit des exemples visuels via webcam, puis entraîne un modèle capable de prédictions en temps réel. **Aucune installation requise.**

### Fonctionnalités

1. Créer au minimum **deux catégories**
2. Capturer **10–15 photos par catégorie** (en variant angles, distances, positions)
3. Cliquer sur **Entraîner le modèle**
4. Tester en temps réel : prédiction exprimée en pourcentage de confiance
5. Visualiser les **zones d'influence** (parties de l'image les plus déterminantes)

### Configuration requise

Ordinateur avec webcam, accès internet, navigateur web moderne.

---

*Cette fiche fait partie du projet [SteamCity](/projets/steamcity), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

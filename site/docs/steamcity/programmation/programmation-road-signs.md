---
id: programmation-road-signs
title: "Programmation : Road Signs"
sidebar_label: "Road Signs"
sidebar_position: 8
---

# Programmation : Road Signs

Fiche technique de programmation associée à la ressource [Road Signs](/ressources/steamcity/road-signs).

---

### Fiche pratique 1 — Installer et utiliser SignVisionAI

SignVisionAI est un logiciel de reconnaissance automatique de panneaux de signalisation. Il utilise des techniques d'apprentissage profond pour identifier quatorze types de panneaux à partir d'images fixes ou d'un flux vidéo en direct via webcam.

Installation :

1. Télécharger le dossier : [Google Drive](https://drive.google.com/drive/folders/1lwb4TkkNRnQ0K3j0s8kxeq7xg7a3pLak?usp=sharing)
2. Installer l'interpréteur Python 3.11.2 fourni
3. Créer un dossier pour le logiciel (ex. : SignVisionAI)
4. Créer un environnement virtuel Python : `python -m venv C:\SignVisionAI`
5. Activer l'environnement : `cd C:\SignVisionAI\Scripts && activate.bat`
6. Remplacer le dossier lib par celui fourni dans Store
7. Copier les fichiers du logiciel (SignVisionAI.py, assets, input\_folder, output\_folder, model)
8. Lancer : `python.exe SignVisionAI.py`
9. Désactiver après usage : `deactivate.bat`

Utilisation : Deux modes — « dossier » (images enregistrées) ou « webcam » (temps réel). Cliquer sur « Start Processing » pour lancer la reconnaissance.

### Fiche pratique 2 — Utiliser Vittascience pour entraîner un modèle

[Vittascience – IA Images](https://fr.vittascience.com/ia/images.php) est une plateforme en ligne d'apprentissage supervisé. L'utilisateur crée des catégories, fournit des exemples visuels via webcam, puis entraîne un modèle capable de prédictions en temps réel. Aucune installation requise.

Fonctionnalités :

1. Créer au minimum deux catégories
2. Capturer 10–15 photos par catégorie (en variant angles, distances, positions)
3. Cliquer sur « Entraîner le modèle »
4. Tester en temps réel : prédiction exprimée en pourcentage de confiance
5. Visualiser les zones d'influence (parties de l'image les plus déterminantes)

Configuration requise : ordinateur avec webcam, accès internet, navigateur web.

---

*Cette fiche fait partie du projet [SteamCity](/projets/steamcity), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

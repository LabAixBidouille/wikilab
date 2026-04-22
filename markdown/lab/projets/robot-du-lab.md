# RobotDuLAB

### Présentation

RobotDuLAB est un robot éducatif conçu au LAB pour l'apprentissage de la programmation en classe, du primaire au lycée.

- Toutes les pièces mécaniques sont imprimables en 3D (fichiers .stl fournis)
- Électronique basée sur Arduino
- Projet libre (copiable, modifiable) et évolutif

En primaire, des plots au format LEGO permettent de personnaliser le robot et d'aborder le code de manière ludique. En collège et lycée, le robot sert de support pour le travail en équipes projets : conception, réalisation, expérimentation.

La programmation se fait par assemblage de blocs via [Blockly](http://robotdulab.labaixbidouille.com/). Le code Arduino est généré automatiquement et téléchargé dans le robot depuis le PC.

### Constitution du robot

- **Châssis** avec roulette à bille (imprimé en 3D ou découpé au laser)
- Deux **roues** montées sur des **servomoteurs** à rotation continue
- Carte **Arduino** (Uno ou Nano)
- **Capteur ultrason** HC-SR04 pour la détection d'obstacles

### Options

Le modèle de base peut être enrichi avec :
- LED RGB ou NeoPixel Ring
- Suivi de ligne (capteurs infrarouges au sol)
- Module WiFi (contrôle à distance)
- Détection des vides (capteurs IR vers le bas, pour éviter les bords de table)
- Module son MP3 (DFPlayer Mini)

### Châssis

Deux versions :
- **Imprimé en 3D** : fichiers .stl fournis, compatible avec toute imprimante FDM
- **Découpé au laser** : plans 2D pour MDF ou contreplaqué

### Électronique

La carte Arduino pilote :
- 2 servomoteurs à rotation continue
- 1 capteur ultrason HC-SR04
- En option : LEDs, capteurs de ligne, module WiFi, module son

### Programmation

Deux modes :
- **Blockly** (visuel) : via l'interface [robotdulab.labaixbidouille.com](http://robotdulab.labaixbidouille.com/), les élèves assemblent des blocs logiques convertis automatiquement en code Arduino
- **Arduino IDE** (code) : programmation directe en C/C++ pour les élèves plus avancés

### Téléchargements

Les fichiers du projet (châssis 3D, plans laser, code Arduino, exemples Blockly) sont disponibles sur la page du projet.

---
id: recalbox
title: "Installation de Recalbox"
sidebar_label: "Recalbox"
sidebar_position: 3
---

# Installation de Recalbox

Recalbox est une plateforme de jeux rétro gratuite et open-source qui transforme un appareil comme le Raspberry Pi en une console de jeux rétro. Elle vous permet de rejouer à une multitude de jeux vidéo d'anciennes générations. Avec une interface utilisateur simple et intuitive, Recalbox est facile à configurer et à utiliser. Elle prend en charge une large gamme de systèmes, des consoles Atari et Commodore aux systèmes d'arcade, en passant par les consoles Nintendo et Sega.

Recalbox comprend également Kodi, un media center performant pour une utilisation multimédia. Grâce à sa compatibilité avec les manettes de jeu USB et Bluetooth, Recalbox offre une véritable expérience de jeu sur console. Il est possible de jouer en multijoueur, ce qui rend l'expérience encore plus agréable.

:::info[Conseil pour l'animateur]
Recalbox est particulièrement facile à utiliser lors de la création d'une borne d'arcade. Son interface utilisateur est simple et intuitive, ce qui permet aux utilisateurs - dans notre cas, des jeunes qui utilisent ces outils pour la première fois - de naviguer facilement et de comprendre comment utiliser le système. Recalbox est pré-configurée pour une variété de contrôleurs de jeu, ce qui rend la configuration des manettes de jeu un processus sans tracas. Recalbox est livré avec une large gamme de jeux pré-installés, ce qui signifie que les jeunes peuvent commencer à jouer presque immédiatement. L'installation de Recalbox est très simple, il suffit de le télécharger, de le flasher sur une carte SD et de l'insérer dans le Raspberry Pi. Aujourd'hui, Recalbox permet également l'intégration de jeux réalisés directement sur MakeCode Arcade ce qui permettra aux jeunes de valoriser leurs propres réalisations et de jouer à leurs propres créations.
:::

## Installation du Recalbox sur le Raspberry Pi

### Matériel nécessaire

- **Raspberry Pi** (modèles 3, 3B+, 4 ou 400 recommandés)
- **Carte microSD** (minimum 16 Go, de préférence 32 Go ou plus)
- **Lecteur de carte microSD** (pour votre ordinateur)
- **Manette USB** ou Bluetooth
- **Câble HDMI** (pour connecter le Raspberry Pi à un écran)
- **Clavier USB** (optionnel mais utile pour la configuration initiale)
- **Câble d'alimentation** compatible Raspberry Pi (5V, 3A pour le Raspberry Pi 4)
- **Connexion internet** (Wi-Fi ou Ethernet pour télécharger les ROMs et mises à jour)

### Étape 1 : Télécharger Recalbox

1. Rendez-vous sur le site officiel de Recalbox : [https://www.recalbox.com/fr/](https://www.recalbox.com/fr/)
2. Cliquez sur le bouton Télécharger : [https://www.recalbox.com/fr/download/stable/](https://www.recalbox.com/fr/download/stable/)
3. Sélectionnez votre version de Raspberry Pi (Pi 3, Pi 4, etc.).
4. Téléchargez le fichier image correspondant à votre modèle de Raspberry Pi. Ce fichier a généralement une extension **.img.xz**.
5. Alternative : installez Raspberry Pi Imager

### Étape 2 : Préparer la carte microSD

1. **Formater la carte microSD :** Insérez la carte microSD dans votre ordinateur via un lecteur de carte et formatez-la en FAT32. Vous pouvez utiliser l'outil SD Card Formatter pour cela (téléchargeable ici : [https://www.sdcard.org/downloads/formatter/](https://www.sdcard.org/downloads/formatter/)).
2. **Flasher l'image sur la carte microSD :** Utilisez un logiciel comme Etcher (téléchargeable ici : [https://www.balena.io/etcher/](https://www.balena.io/etcher/)) pour flasher l'image Recalbox sur votre carte microSD. Voici les étapes à suivre :
    - Ouvrez Etcher.
    - Cliquez sur **Flash from file**, puis sélectionnez l'image **.img.xz** que vous avez téléchargée.
    - Sélectionnez votre carte microSD comme destination.
    - Cliquez sur **Flash** pour lancer le processus.

    Une fois terminé, votre carte microSD est prête à être utilisée.

### Étape 3 : Installer Recalbox sur le Raspberry Pi

1. **Insérer la carte microSD :** Insérez la carte microSD dans le Raspberry Pi.
2. **Connecter les périphériques :**
    - Branchez une manette USB ou un clavier pour la configuration initiale.
    - Connectez le Raspberry Pi à un écran via le câble HDMI.
    - Branchez le câble d'alimentation pour allumer le Raspberry Pi. Recalbox va se lancer automatiquement.
3. **Premier démarrage de Recalbox :**
    - Lors du premier démarrage, Recalbox va automatiquement configurer les fichiers système. Cela peut prendre quelques minutes.
    - Une fois le processus terminé, vous serez accueilli par l'interface de Recalbox.

### Étape 4 : Configurer Recalbox

1. **Configurer la manette :** Lors du premier démarrage, Recalbox vous demandera de configurer votre manette. Suivez les instructions à l'écran pour mapper les boutons. Vous pouvez connecter des manettes USB ou Bluetooth. Si vous avez une manette Bluetooth :
    - Allez dans **Options &gt; Manettes &gt; Configuration des manettes Bluetooth**.
    - Suivez les instructions pour coupler votre manette Bluetooth.
2. **Configurer le Wi-Fi :** Si vous souhaitez connecter votre Raspberry Pi à Internet via Wi-Fi :
    - Allez dans **Options &gt; Réseau**.
    - Entrez votre SSID (nom du réseau Wi-Fi) et le mot de passe.
3. **Configurer les ROMs :** Pour ajouter des jeux à Recalbox, vous devez transférer des ROMs (fichiers de jeux) sur la carte microSD. Voici deux méthodes courantes pour le faire :
    - **Via une clé USB :**
        - Formatez une clé USB en FAT32 ou exFAT.
        - Créez un dossier appelé **recalbox** à la racine de la clé.
        - Insérez la clé USB dans le Raspberry Pi. Recalbox va automatiquement copier les répertoires nécessaires sur la clé USB.
        - Retirez la clé USB et insérez-la dans votre ordinateur.
        - Placez vos ROMs dans les dossiers correspondants (par exemple, les ROMs de Super Nintendo vont dans le dossier **snes**).
        - Réinsérez la clé dans le Raspberry Pi, et les ROMs seront disponibles.
    - **Via le réseau (Samba) :**
        - Connectez votre Raspberry Pi et votre ordinateur au même réseau.
        - Ouvrez l'explorateur de fichiers de votre ordinateur, et entrez `\\RECALBOX` dans la barre d'adresse sous Windows, ou `smb://recalbox/` sous macOS/Linux.
        - Vous verrez les répertoires de Recalbox, dont le dossier **roms**. Copiez simplement vos ROMs dans les dossiers correspondants.

### Étape 5 : Jouer !

Une fois les ROMs transférées, vous pouvez accéder aux jeux directement via le menu principal de Recalbox. Sélectionnez la console sur laquelle vous voulez jouer, choisissez votre jeu, et amusez-vous !

---

*Cette page fait partie de la documentation [Borne d'arcade](/ressources/jeditrack/borne-arcade/) du projet [JediTrack](/projets/jeditrack).*

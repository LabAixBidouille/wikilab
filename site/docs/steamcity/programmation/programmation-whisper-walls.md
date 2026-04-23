---
id: programmation-whisper-walls
title: "Programmation : Whisper Walls"
sidebar_label: "Whisper Walls"
sidebar_position: 3
---

# Programmation : Whisper Walls

Fiche technique de programmation associée à la ressource [Whisper Walls](/ressources/steamcity/whisper-walls).

---

### Fiche pratique 1 — Mesurer l'intensité du son

Câblage et utilisation d'une carte de programmation

Utilisation du microphone : Le microphone intégré au STM32 IoT Node Discovery est prêt à l'emploi, aucun câblage n'est nécessaire.

Connexion de la carte à l'ordinateur : Branchez la carte à votre ordinateur via le connecteur micro-USB ST-LINK (situé en haut à droite de la carte) avec un câble USB. Si la connexion réussit, un nouveau lecteur nommé DIS_L4IOT apparaîtra sur votre ordinateur. Ce lecteur sert à programmer la carte en copiant un fichier binaire.

Ouvrir MakeCode : Rendez-vous sur l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur « Nouveau projet ». Nommez-le de façon explicite, puis lancez l'éditeur. Ressource : makecode.lets-steam.eu

Installation des extensions : Après la création de votre projet, l'écran par défaut « prêt à l'emploi » s'affiche et une extension doit être installée. En bas de la colonne des groupes de blocs, cliquez sur le bouton noir AVANCÉ. Des groupes supplémentaires apparaissent. Tout en bas, cliquez sur la case grise EXTENSIONS. Dans la liste, trouvez l'extension serial, qui permet d'afficher la valeur mesurée par le microphone dans la console. Si elle n'est pas visible, utilisez la barre de recherche pour la localiser. Sélectionnez l'extension souhaitée : un nouveau groupe de blocs sera ajouté à l'écran principal.

Utiliser et comprendre le code : Voici le code Javascript utilisé pour programmer une carte STM32 afin de collecter régulièrement le niveau sonore du microphone.

```javascript
Serial.attachToConsole()
forever(function() {
    Serial.writeValue("Decibel", input.decibel());
    pause(200)
})
```

Programmation de la carte : Dans l'éditeur JavaScript MakeCode, copiez-collez le code fourni dans la section précédente. Si ce n'est pas encore fait, donnez un nom à votre projet, puis cliquez sur le bouton Télécharger. Transférez ensuite le fichier binaire sur le lecteur DIS_L4IOT. Patientez jusqu'à ce que la carte ait terminé de flasher.

Exécuter, modifier, jouer : Votre programme s'exécutera automatiquement à chaque enregistrement ou réinitialisation de la carte (en appuyant sur le bouton RESET).

### Fiche pratique 2 — Affichage des données sur un écran

Câblage et utilisation d'une carte de programmation

Connexion de l'écran : Pour connecter l'écran LCD, utilisez le bus I2C selon la convention suivante :

- Noir : GND
- Rouge : VCC (5V)
- Violet : SDA (D14)
- Vert : SCL (D15)

Ressources :

- [https://fr.wikipedia.org/wiki/I2C](https://fr.wikipedia.org/wiki/I2C)
- [https://fr.wikipedia.org/wiki/Serial_Peripheral_Interface](https://fr.wikipedia.org/wiki/Serial_Peripheral_Interface)
- [https://www.sparkfun.com/qwiic](https://www.sparkfun.com/qwiic)
- [https://learn.adafruit.com/introducing-adafruit-stemmaqt/what-is-stemma-qt](https://learn.adafruit.com/introducing-adafruit-stemmaqt/what-is-stemma-qt)

Connexion de la carte à l'ordinateur : Avec votre câble USB, connectez la carte à l'ordinateur via le connecteur micro-USB ST-LINK (en haut à droite de la carte).

Si la connexion réussit, un nouveau lecteur nommé DIS_L4IOT apparaîtra sur l'ordinateur.

Ce lecteur sert à programmer la carte en copiant simplement un fichier binaire.

Ouverture de MakeCode : Accédez à l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur « Nouveau projet ». Donnez un nom significatif à votre projet, différent de « Sans titre », puis lancez l'éditeur. Ressource : makecode.lets-steam.eu

Installation des extensions : Après avoir créé votre nouveau projet, l'écran par défaut « prêt à l'emploi » s'affiche et il vous faudra installer une extension.

Vous trouverez le bouton noir AVANCÉ en bas de la colonne des groupes de blocs. En cliquant dessus, des groupes supplémentaires apparaissent. En bas, une case grise intitulée EXTENSIONS est visible. Cliquez dessus.

Dans la liste des extensions disponibles, repérez facilement l'extension lcd_i2c utilisée pour cette activité. Cette extension permet d'afficher des données sur un écran. Si elle n'apparaît pas directement, utilisez l'outil de recherche. Sélectionnez l'extension désirée ; un nouveau groupe de blocs apparaîtra alors sur l'écran principal.

Utiliser et comprendre le code : Voici le code Javascript utilisé pour programmer une carte STM32 afin de collecter régulièrement le niveau sonore du microphone.

```javascript
lcd_i2c.initScreen()
lcd_i2c.setCursor(0, 0);
lcd_i2c.ShowString("Decibel (dB):")

forever(function () {
    lcd_i2c.setCursor(0, 1);
    lcd_i2c.ShowNumber(input.decibel());
    lcd_i2c.ShowString("       ");
    pause(200)
})
```

Programmation de la carte : Dans l'éditeur JavaScript MakeCode, copiez-collez le code fourni dans la section précédente. Si ce n'est pas encore fait, nommez votre projet puis cliquez sur le bouton Télécharger. Copiez ensuite le fichier binaire sur le lecteur DIS_L4IOT et patientez jusqu'à ce que la carte ait terminé le flashage.

Exécuter, modifier, jouer : Votre programme s'exécutera automatiquement à chaque enregistrement ou réinitialisation de la carte (en appuyant sur le bouton RESET).

---

*Cette fiche fait partie du projet [SteamCity](/projets/steamcity), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

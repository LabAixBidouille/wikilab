---
id: programmation-whisper-walls
title: "Programmation : Whisper Walls"
sidebar_label: "Whisper Walls"
sidebar_position: 3
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="4" y="4" width="16" height="16" rx="2" fill="#DD5350" opacity="0.1"/><rect x="6" y="6" width="12" height="12" rx="1" fill="#DD5350" opacity="0.25"/><path d="M9 10h6M9 12h6M9 14h4" stroke="#DD5350" strokeWidth="1" strokeLinecap="round" opacity="1.0"/></svg> Programmation : Whisper Walls

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--info">Écran LCD I2C</span>
  <span className="badge badge--warning">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| SteamCity | 1 heure | Débutant | 11-15 ans |

## Matériel

- 1 carte STM32 IoT Node Discovery (microphone intégré)
- 1 écran LCD I2C
- 1 câble USB micro-B
- Des câbles de connexion

</div>

</div>

---

## De quoi parle-t-on ?

Cette fiche technique accompagne la ressource [Whisper Walls](/ressources/steamcity/whisper-walls). La carte STM32 IoT Node Discovery intègre un microphone qui renvoie une valeur en décibels. On l'utilise d'abord dans la console série pour visualiser les mesures, puis on les affiche en temps réel sur un écran LCD I2C.

## Objectifs d'apprentissage

- Utiliser le microphone intégré à la carte STM32
- Installer une extension MakeCode (serial, lcd_i2c)
- Afficher des valeurs via la console série
- Afficher des valeurs dynamiques sur un écran LCD I2C

---

## Fiche 1 : mesurer l'intensité du son

**Utilisation du microphone** : le microphone intégré au STM32 IoT Node Discovery est prêt à l'emploi, aucun câblage nécessaire.

**Connexion de la carte à l'ordinateur** : branchez la carte via le connecteur micro-USB ST-LINK (en haut à droite). Un nouveau lecteur **DIS_L4IOT** apparaît sur l'ordinateur ; il sert à programmer la carte en copiant un fichier binaire.

**Ouvrir MakeCode** : rendez-vous sur l'éditeur MakeCode de Let's STEAM ([makecode.lets-steam.eu](https://makecode.lets-steam.eu)). Créez un nouveau projet et nommez-le de façon explicite.

**Installer l'extension** : cliquez sur **AVANCÉ** (bouton noir en bas de la colonne des blocs), puis sur **EXTENSIONS**. Recherchez et ajoutez l'extension **serial**, qui permet d'afficher la valeur mesurée dans la console.

**Code**

```javascript
Serial.attachToConsole()
forever(function() {
    Serial.writeValue("Decibel", input.decibel());
    pause(200)
})
```

**Programmer la carte** : dans l'éditeur MakeCode, copiez-collez ce code. Cliquez sur **Télécharger**, puis copiez le fichier binaire sur le lecteur **DIS_L4IOT**. Patientez jusqu'à la fin du flashage. Le programme s'exécute automatiquement à chaque enregistrement ou après un appui sur **RESET**.

---

## Fiche 2 : afficher les données sur un écran LCD

**Câbler l'écran LCD (I2C)** :

- Noir : GND
- Rouge : VCC (5V)
- Violet : SDA (D14)
- Vert : SCL (D15)

**Ressources sur les bus** : [I2C](https://fr.wikipedia.org/wiki/I2C), [SPI](https://fr.wikipedia.org/wiki/Serial_Peripheral_Interface), [Qwiic](https://www.sparkfun.com/qwiic), [STEMMA QT](https://learn.adafruit.com/introducing-adafruit-stemmaqt/what-is-stemma-qt).

**Installer l'extension** : cliquez sur **AVANCÉ** puis **EXTENSIONS** et ajoutez l'extension **lcd_i2c**.

**Code**

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

**Programmer la carte** : copiez-collez le code dans MakeCode, cliquez sur **Télécharger**, puis copiez le binaire sur le lecteur **DIS_L4IOT**. Le programme s'exécute automatiquement.

---

*Cette fiche fait partie du projet [SteamCity](/projets/steamcity), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

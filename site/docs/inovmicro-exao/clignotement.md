---
id: clignotement-led
title: Faire clignoter une LED
sidebar_label: "Faire clignoter une LED"
sidebar_position: 2
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>
<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle'}}></svg> Faire clignoter une LED

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
<span className="badge badge--primary">Informatique</span>
<span className="badge badge--primary">Technologie</span>
<span className="badge badge--primary">Sciences</span>
<span className="badge badge--info">SteaMi</span>
<span className="badge badge--warning">MicroPython</span>
</div>


| Projet | Durée | Difficulté | Âge | Version MicroPython testée |
|:-------- |:--------:|:------------:|:-----:| ------------------:|
| I-Novmicro #2 | 15 min | Débutant | 11-99 ans | 1.23.1 |

---

## Matériel et Montage

- 1 carte STeaMi
- 1 câble USB-C
- 1 ordinateur avec navigateur web
</div>

<img src="/img/ressources/inovmicro-exao/clignement-led/icone.png" alt="icone" style={{width: '180px', height: 'auto'}} />
</div>

---

## De quoi parle-t-on ?
Une LED est un composant électronique qui produit de la lumière lorsqu'elle est traversée par un courant. Elle peut être utilisée pour éclairer une pièce, ou pour indiquer quelque chose (un réservoir presque vide, une machine allumée, etc.). Les LED existent sous différentes formes et couleurs.

Cette fiche reprend l'activité Les's STEAM [clignotement en MakeCode](https://wiki.labaixbidouille.com/ressources/lets-steam/r1as01-led)

## Objectifs d'apprentissage
- Programmer en MicroPython
- Faire fonctionner une LED

---

## Étape 1 - Construire

**1. Connecter la carte.** 
- Si vous êtes sous Windows : 
    - Connectez la carte STeaMi à votre ordinateur avec un câble USB-C
    - La carte s'allume et apparaît comme une clé USB nommée STEAMI sur votre ordinateur
    - L'écran OLED affiche un message de démarrage
    - Pour lancer un programme, il suffit de copier le fichier en `.py` dans la clé USB STEAMI et de le renommer pour qu'il se lance automatiquement
- Si vous êtes sous macOS ou Linux vous pouvez aussi : 
    - Installer `mpremote` en tapant la commande **`pip install mpremote`** dans votre terminal
    - Connecter la carte STeaMi à votre ordinateur avec un câble USB-C
    - Vérifier qu'elle est reconnue avec la commande **`mpremote connect list`** dans votre terminal
    - Lancer un programme avec la commande **`mpremote connect auto fs cp <chemin>/code.py :main.py`** dans votre terminal
    - Une fois que vous avez fini, lancer la commande **`mpremote connect auto reset`** pour redémarrer la carte.

Une LED est un composant électronique qui produit de la lumière lorsqu'elle est traversée par un courant. Elle peut être utilisée pour éclairer une pièce, ou pour indiquer quelque chose (un réservoir presque vide, une machine allumée, etc.). Les LED existent sous différentes formes et couleurs.
<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', marginBottom: '1.5rem'}}>
  <img src="/img/ressources/inovmicro-exao/câblage.png" alt="icone" style={{width: '500px', height: 'auto'}} />
  <img src="/img/ressources/inovmicro-exao/clignement-led/LED.png" style={{width: '200px', height: 'auto'}}/>
</div>

**2. Choisir un environnement de programmation.** 

Pour programmer la carte Steami vous devez disposer d'un environnement de développement MicroPython. Voici 3 options possibles :
    - **Thonny** : un IDE simple et convivial pour les débutants, disponible sur Windows, macOS et Linux. Téléchargez-le depuis [thonny](https://thonny.org/).
    - **Visual Studio Code** : un éditeur de code puissant avec des extensions pour MicroPython, disponible sur Windows, macOS et Linux. Téléchargez-le depuis [Visual Studio Code](https://code.visualstudio.com/Download).
    - **lets-steam** : un environnement de travail en ligne directement accessible depuis un navigateur web, sans installation nécessaire. Rendez-vous sur [lets-steam](https://python.lets-steam.eu/).
---

## Étape 2 - Programmer

```python
import pyb 
from time import sleep 

# Initialisation des LEDs
led_blue = pyb.LED(3)
delay = 0.5 

# fait clignoter la LED bleue
while True:
    led_blue.on()
    sleep(delay)
    led_blue.off()
    sleep(delay)
```

### comment ça marche ?
- On commence par importer les modules nécessaires : `pyb` pour contrôler les composants de la carte, et `sleep` pour faire des pauses entre les actions.
- Ensuite, on initialise la LED bleue en créant une instance de `pyb.LED` avec le numéro correspondant à la LED que l'on veut utiliser (ici, 3 pour la LED bleue).
- On définit une variable `delay` pour contrôler la durée de chaque état de la LED (allumée ou éteinte).
- Enfin, on entre dans une boucle infinie (`while True:`) qui fait clignoter la LED bleue en l'allumant, attendant un moment, puis en l'éteignant, et ainsi de suite.
---

## Étape 3 - Améliorer

- Tenter de faire clignoter les autres LED (rouge, verte, bleue) les unes après les autres !
- Essayer de faire en MicroPython le projet [temps de réaction en une demi-seconde](https://wiki.labaixbidouille.com/ressources/thedexterlab/programmation/programmation-distraction-temps-reaction) 

---

# Ressources pour approfondir

- **Documentation officielle** : [wiki.steami.cc](https://wiki.steami.cc/)
- **Site STeaMi** : [steami.cc](https://steami.cc)
- **Drivers MicroPython** : [github.com/steamicc/micropython-steami-lib](https://github.com/steamicc/micropython-steami-lib)
- **Design de référence** : [github.com/steamicc/steami-reference-design](https://github.com/steamicc/steami-reference-design)
- **Documentation MicroPython** : [docs.micropython.org](https://docs.micropython.org/en/latest/)
- **STM32Python** : [stm32python.gitlab.io](https://stm32python.gitlab.io/fr/)

---

*Cette fiche fait partie du projet [I-Novmicro #2 — Action EXAO](site/projets/inovmicro-exao). Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*
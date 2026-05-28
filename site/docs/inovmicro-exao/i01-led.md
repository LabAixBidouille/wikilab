---
id: i01-led
title: Faire clignoter une LED
sidebar_label: 'Faire clignoter une LED'
sidebar_position: 8
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>
<div style={{flex: 1}}>
# Faire clignoter une LED

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">SteaMi</span>
  <span className="badge badge--warning">MicroPython</span>
</div>

| Projet        | Durée  | Difficulté | Âge       | Logiciel STeaMi testé |
| ------------- | ------ | ---------- | --------- | --------------------- |
| I-Novmicro #2 | 15 min | Débutant   | 11-99 ans | 0.23.1                |

## Matériel et Montage

- 1 carte STeaMi
- 1 câble USB de données (micro-USB pour la STeaMi V1, USB-C pour la STeaMi V2).
- 1 ordinateur sous Windows, macOS ou Linux
- Un IDE compatible MicroPython : Thonny (voir la fiche [Prendre en main MicroPython avec Thonny](/ressources/inovmicro-exao/t03-decouverte-thonny)) ou tout autre éditeur compatible (Mu, VS Code, Vittascience, `mpremote`...).

<PdfLink href="/pdf/inovmicro-exao/STeaMi_LED.pdf">Télécharger en PDF</PdfLink>

</div>
<img src="/img/ressources/inovmicro-exao/i01-led/icone.png" alt="Faire clignoter une LED" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />
</div>

---

## De quoi parle-t-on ?

La **LED** (light-emitting diode) est un composant électronique qui produit de la lumière lorsqu'un courant la traverse. On la retrouve partout dans le quotidien : pour éclairer, pour signaler un état (réservoir presque vide, machine allumée, etc.), ou simplement comme indicateur visuel.

La STeaMi intègre une LED RGB, accessibles sans aucun câblage, avec trois couleurs : **rouge**, **verte** et **bleue**. C'est le point de départ idéal pour comprendre comment un programme contrôle un composant physique : **allumer, éteindre, attendre, recommencer**. Le programme que vous allez écrire est le premier programme qu'on écrit quand on découvre l'électronique embarquée (les informaticiens appellent ça un « Hello World »).

Cette fiche reprend l'activité Let's STEAM [Faire clignoter une LED](/ressources/lets-steam/r1as01-led), adaptée du couple STM32 IoT Node + MakeCode vers STeaMi + MicroPython.

---

## Objectifs d'apprentissage

- Comprendre la structure d'un programme MicroPython simple (imports, initialisation, boucle infinie)
- Contrôler une LED connectée à un microcontrôleur
- Initialiser une LED en MicroPython avec le module `machine` et la nommer par son nom de broche
- Utiliser `sleep_ms` pour introduire des délais d'attente (parfois qualifié de "pause") dans un programme

---

## Étape 1 : Construire

Ici, « construire » est rapide : la LED RGB est déjà soudée à la carte, aucun câblage additionnel n'est requis.

### Localiser les LED sur la carte

La LED RGB de la STeaMi se trouve sur la face avant. Chaque couleur est pilotée individuellement et accessible dans le code via un **nom de broche** :

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/i01-led/LED.png"
    alt="Emplacement de la LED RGB sur la carte STeaMi"
    style={{maxWidth: '200px', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    La LED RGB intégrée à la face avant de la STeaMi.
  </figcaption>
</figure>

| Couleur | Nom de broche |
| ------- | ------------- |
| Rouge   | `LED_RED`     |
| Verte   | `LED_GREEN`   |
| Bleue   | `LED_BLUE`    |

### Connecter la carte à l'ordinateur

Brancher la STeaMi à l'ordinateur via le câble USB. Si l'IDE est déjà configuré (voir la fiche [Prendre en main MicroPython avec Thonny](/ressources/inovmicro-exao/t03-decouverte-thonny) pour la mise en place initiale), la console MicroPython doit afficher `>>>`.

---

## Étape 2 : Programmer

Le programme est court : on importe deux modules, on initialise la LED, et on entre dans une boucle qui continue sans jamais s'arrêter et qui allume et éteint la LED avec une pause (un délai d'attente) entre chaque étape pour qu'on ait le temps de voir les changements se produire.

### Le code

```python
# Testée avec firmware STeaMi 0.23.1
from machine import Pin
from time import sleep_ms

# Initialisation de la LED bleue
led_blue = Pin('LED_BLUE', Pin.OUT)
delay = 500  # durée en millisecondes entre chaque changement d'état

# Boucle infinie : la LED clignote indéfiniment
while True:
    led_blue.on()
    sleep_ms(delay)
    led_blue.off()
    sleep_ms(delay)
```

### Comment ça marche ?

- `from machine import Pin` importe l'objet `Pin` du module `machine`, qui permet de piloter les broches du microcontrôleur.
- `from time import sleep_ms` importe la fonction `sleep_ms`, qui suspend l'exécution du programme pendant un nombre de millisecondes donné.
- `Pin('LED_BLUE', Pin.OUT)` crée un objet qui représente la LED bleue, configurée en **sortie** (la broche envoie un signal, elle ne le lit pas). Le firmware STeaMi expose les composants intégrés sous des noms parlants. Pas besoin de mémoriser un numéro de broche.
- La variable `delay` fixe la durée de chaque état (allumée ou éteinte) à 500 millisecondes. Modifier cette valeur change directement la vitesse de clignotement.
- La boucle `while True:` s'exécute indéfiniment : elle allume la LED, attend `delay` ms, éteint la LED, attend encore `delay` ms, et recommence.

### Exécution

- **Test rapide** : lancer le programme depuis l'IDE (typiquement bouton **Run** ▶ ou `F5`). La LED bleue se met immédiatement à clignoter.
- **Programme persistant** : enregistrer le fichier sous le nom **`main.py`** sur la carte. Il sera relancé automatiquement à chaque démarrage, sans avoir à rouvrir l'éditeur.

---

## Étape 3 : Améliorer

### 1. Faire clignoter les autres couleurs

La LED RGB possède trois canaux indépendants. Essayez de les faire clignoter les uns après les autres : il suffit de créer trois objets `Pin` (`LED_RED`, `LED_GREEN`, `LED_BLUE`) et de les allumer/éteindre tour à tour dans la boucle.

Une fois ce séquencement maîtrisé, vous tenez l'embryon d'un **feu de signalisation** : rouge plusieurs secondes, vert plusieurs secondes, orange (rouge + vert simultanés) en transition.

### 2. Le projet « temps de réaction »

Une fois le clignotement maîtrisé, une bonne piste pour aller plus loin est de réaliser le projet [temps de réaction en une demi-seconde](/ressources/thedexterlab/programmation/programmation-distraction-temps-reaction) en MicroPython : la LED s'allume à un moment aléatoire, et le joueur doit appuyer sur un bouton le plus vite possible.

---

## Aller plus loin

### Pour comprendre

- **[Diode électroluminescente (Wikipedia)](https://fr.wikipedia.org/wiki/Diode_%C3%A9lectroluminescente)** : histoire des LED, principes physiques qui les sous-tendent, typologies et couleurs.
- **[Courant et tension, bases de l'électricité](https://www.codrey.com/dc-circuits/current-and-voltage/)** : tutoriel à destination des débutants en électronique pour explorer le courant, la tension, leur différence et leur fonctionnement (en anglais).
- **[Shuji Nakamura, l'inventeur de la LED bleue](https://fr.wikipedia.org/wiki/Shuji_Nakamura)** : prix Nobel de physique 2014. Sans sa LED bleue (résultat de 25 ans de recherche), pas d'éclairage LED blanc, pas d'écrans pleine couleur. Une belle histoire de persévérance face à des décennies d'échecs annoncés.

### Pour s'inspirer

- **[Fête des Lumières de Lyon](https://fr.wikipedia.org/wiki/F%C3%AAte_des_lumi%C3%A8res)** : 4 jours par an, la ville devient une scène d'installations lumineuses pilotées par des programmes, un exemple à grande échelle de ce qu'un peu de code et beaucoup de LED peuvent produire.
- **[The Bay Lights de Leo Villareal](https://en.wikipedia.org/wiki/The_Bay_Lights)** : 25 000 LED disposées sur le Bay Bridge de San Francisco, animées par un programme génératif qui ne se répète jamais. Une œuvre d'art urbain visible à des kilomètres.
- **[Faire un cube LED de A à Z](https://www.youtube.com/watch?v=ciaFar8nfHc)** (GreatScott!, en anglais) : le grand classique maker, 64 ou 512 LED soudées en 3D, multiplexage temporel pour les piloter avec quelques broches seulement, animations volumétriques.
- **[Word Clock, l'horloge à mots](https://www.instructables.com/The-Word-Clock-Arduino-version/)** : une grille de LED qui éclaire des lettres pour écrire l'heure en toutes lettres (« IL EST DIX HEURES VINGT »). Petit projet de programmation + design plein de charme.
- **[Adafruit NeoPixel Überguide](https://learn.adafruit.com/adafruit-neopixel-uberguide)** : les LED RGB adressables WS2812, un bus de données, des centaines de LED en chaîne, des effets arc-en-ciel et des bandeaux décoratifs à l'infini. La suite logique quand une seule LED ne suffit plus.

---

_Cette fiche fait partie du projet [I-Novmicro #2 : Action EXAO](/projets/inovmicro-exao). Adaptée du projet [Let's STEAM](/projets/lets-steam) (fiche [`r1as01-led`](/ressources/lets-steam/r1as01-led)) sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._

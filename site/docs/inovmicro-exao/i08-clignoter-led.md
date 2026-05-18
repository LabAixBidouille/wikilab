---
id: i08-clignoter-led
title: Faire clignoter une LED
sidebar_label: "Faire clignoter une LED"
sidebar_position: 8
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

 # <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '0.25rem'}}><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.75c.62.44 1 1.13 1 1.89V17h6v-.36c0-.76.38-1.45 1-1.89A7 7 0 0 0 12 2z"/></svg> Faire clignoter une LED

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--info">SteaMi</span>
  <span className="badge badge--warning">MicroPython</span>
</div>

| Projet | Durée | Difficulté | Âge | Logiciel STeaMi testé |
 | --- | --- | --- | --- | --- |    
| I-Novmicro #2 | 15 min | Débutant   | 11-99 ans | 1.23.1                |

## Matériel et Montage

- 1 carte STeaMi
- 1 câble micro-USB (STeaMi V1) ou USB-C (STeaMi V2)
- 1 ordinateur sous Windows, macOS ou Linux
- Un IDE MicroPython installé et configuré pour la STeaMi. Voir la fiche [Thonny : Prise en main de MicroPython](/ressources/inovmicro-exao/i03-decouverte-thonny) pour la mise en place, tout autre éditeur compatible MicroPython (Mu, VS Code, Vittascience, `mpremote`…) fonctionne aussi.

</div>

 <img src="/img/ressources/inovmicro-exao/i08-clignoter-led/icone.png" alt="Icône Faire clignoter une LED" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />
</div>

---

## De quoi parle-t-on ?

La STeaMi intègre directement une LED pouvant éclairer de 3 couleurs différentes : **bleue**, **rouge** et **verte**, accessibles sans aucun câblage. C'est le point de départ idéal pour comprendre comment un programme contrôle un composant physique : allumer, éteindre, attendre, recommencer.

Cette fiche reprend l'activité Let's STEAM [clignotement en MakeCode](https://wiki.labaixbidouille.com/ressources/lets-steam/r1as01-led).

---

## Objectifs d'apprentissage

- Comprendre la structure d'un programme MicroPython simple (imports, initialisation, boucle infinie)
- Contrôler une LED intégrée à une carte microcontrôleur
- Utiliser `pyb.LED` pour allumer et éteindre une LED
- Utiliser `sleep` pour introduire des délais dans un programme

---

## Étape 1 : Construire

Ici, "construire" est rapide : la LED est déjà intégrée à la carte, aucun câblage n'est nécessaire.

### Localiser les LED sur la carte

La LED de la STeaMi se trouve sur la face avant de la carte. Chaque couleur correspond à un numéro d'identification utilisé dans le code :

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/i08-clignoter-led/LED.png"
    alt="LED sur la carte STeaMi"
    style={{maxWidth: '200px', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    Les LED intégrées à la face avant de la STeaMi.
  </figcaption>
</figure>

| Numéro | Couleur |
| ------ | ------- |
| 1      | Rouge   |
| 2      | Verte   |
| 3      | Bleue   |

### Connecter la carte à l'ordinateur

Brancher la STeaMi à l'ordinateur via le câble USB. Si votre IDE MicroPython est déjà configuré (voir la fiche [Thonny : Prise en main de MicroPython](/ressources/inovmicro-exao/i03-decouverte-thonny) si vous démarrez), la console MicroPython doit afficher le prompt `>>>`.

---

## Étape 2 : Programmer

Le programme est court : on importe deux modules, on initialise la LED, et on entre dans une boucle infinie qui l'allume et l'éteint avec une pause entre chaque état.

### Le code

```python
 # Testé avec le firmware STeaMi v1.0
 import pyb
 from time import sleep

# Initialisation de la LED bleue (numéro 3)
led_blue = pyb.LED(3)
delay = 0.5   # durée en secondes entre chaque changement d'état

# Boucle infinie : la LED clignote indéfiniment
while True:
    led_blue.on()
    sleep(delay)
    led_blue.off()
    sleep(delay)
```

### Comment ça marche ?

- `from time import sleep` importe la fonction `sleep`, qui suspend l'exécution du programme pendant un nombre de secondes donné.
- `pyb.LED(3)` crée un objet qui représente la LED bleue. Le chiffre `3` est le numéro de la LED bleue sur la STeaMi (voir le tableau en Étape 1).
- La variable `delay` fixe la durée de chaque état (allumée ou éteinte) à 0,5 seconde. Modifier cette valeur change directement la vitesse de clignotement.
- La boucle `while True:` s'exécute indéfiniment : elle allume la LED, attend `delay` secondes, éteint la LED, attend encore `delay` secondes, et recommence.

### Exécution

- **Test rapide** : lancer le programme depuis votre IDE (typiquement bouton **Run** ▶ ou `F5`). Les valeurs défilent dans la console MicroPython.
- **Programme persistant** : enregistrer le fichier sous le nom **`main.py`** sur la carte. Il sera relancé à chaque démarrage.

---

## Étape 3 : Améliorer

### 1. Faire clignoter les autres LED

La LED de la STeaMi possède 3 couleurs numérotées de 1 à 3. Essayez de les faire clignoter les unes après les autres. Il suffit de créer plusieurs objets `pyb.LED` et de les allumer/éteindre dans la boucle dans le bon ordre.

### 2. Le projet temps de réaction

Une fois le clignotement maîtrisé, une bonne piste pour aller plus loin est de réaliser le projet [temps de réaction en une demi-seconde](https://wiki.labaixbidouille.com/ressources/thedexterlab/programmation/programmation-distraction-temps-reaction) en MicroPython : une LED s'allume à un moment aléatoire, et le joueur doit appuyer sur un bouton le plus vite possible.

---

## Aller plus loin

- **Documentation officielle STeaMi** : [wiki.steami.cc](https://wiki.steami.cc/)
- **Drivers MicroPython STeaMi** : [github.com/steamicc/micropython-steami-lib](https://github.com/steamicc/micropython-steami-lib)
- **Documentation MicroPython — module `pyb`** : [docs.micropython.org/en/latest/library/pyb.html](https://docs.micropython.org/en/latest/library/pyb.html)
- **STM32Python** : [stm32python.gitlab.io](https://stm32python.gitlab.io/fr/)

---

*Cette fiche fait partie du projet [I-Novmicro #2 — Action EXAO](/projets/inovmicro-exao). Adaptée du projet Let's STEAM. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*
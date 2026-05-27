---
id: t05-vittascience
title: "Vittascience : Prise en main de MicroPython et blocs sur la STeaMi"
sidebar_label: "Vittascience"
sidebar_position: 5
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>
<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="3" y="4" width="18" height="14" rx="2" fill="#8a6e18" opacity="0.1"/><rect x="3" y="4" width="18" height="3" rx="1" fill="#8a6e18" opacity="0.3"/><circle cx="5.5" cy="5.5" r="0.5" fill="#8a6e18"/><circle cx="7" cy="5.5" r="0.5" fill="#8a6e18"/><circle cx="8.5" cy="5.5" r="0.5" fill="#8a6e18"/><polyline points="6,11 8,13 6,15" fill="none" stroke="#8a6e18" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><polyline points="9,11 11,13 9,15" fill="none" stroke="#8a6e18" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><line x1="13" y1="15" x2="18" y2="15" stroke="#8a6e18" strokeWidth="1.2" strokeLinecap="round"/><line x1="6" y1="20" x2="18" y2="20" stroke="#8a6e18" strokeWidth="1.5" strokeLinecap="round"/><line x1="12" y1="18" x2="12" y2="20" stroke="#8a6e18" strokeWidth="1.5"/></svg> Vittascience : Prise en main de MicroPython et blocs sur la STeaMi

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--info">SteaMi</span>
  <span className="badge badge--warning">MicroPython</span>
  <span className="badge badge--secondary">Vittascience</span>
</div>

| Projet        | Durée  | Difficulté | Âge       | Logiciel STeaMi testé |
| -------------- | ------- | ---------- | --------- | --------------------- |
| I-Novmicro #2 | 40 min | Débutant   | 11-99 ans | 0.23.1                |

## Matériel et Montage

- 1 carte STeaMi
- 1 câble USB de données (micro-USB pour la STeaMi V1, USB-C pour la STeaMi V2). Attention : un câble qui ne sert qu'à charger un téléphone ne fonctionnera pas.
- 1 ordinateur sous Windows, macOS ou Linux
- [Vittascience](https://fr.vittascience.com/plugin)
- Le programme MicroPython STeaMi `.hex` ([dernière release](https://github.com/steamicc/micropython-steami-lib/releases))

</div>

<img src="/img/ressources/inovmicro-exao/t05-vittascience/icone.png" alt="Logo Vittascience" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Pour programmer votre carte STeaMi, vous avez besoin d'un éditeur de code. Dans cette fiche vous allez découvrir comment utiliser l'éditeur de code en ligne de Vittascience pour programmer votre carte en MicroPython ou en blocs. Vous allez apprendre à configurer l'éditeur, puis à écrire et exécuter un programme qui interagit avec les composants de la STeaMi (LED RGB et boutons). Enfin, vous découvrirez des outils pour tester du code en direct et déboguer vos programmes.

---

## Objectifs d'apprentissage

À la fin de cette activité, l'élève sera capable de :

- **Comprendre** le principe de la programmation embarquée : un programme écrit sur l'ordinateur est envoyé à la carte, qui l'exécute ensuite par elle-même
- **Distinguer** le rôle de l'éditeur, du langage (MicroPython ou blocs) et de la carte (STeaMi)
- **Écrire** et exécuter un premier programme MicroPython qui interagit avec le matériel (LED, boutons)
- **Tester** du code avec le REPL sans créer de fichier, et distinguer exécution temporaire (Téléverser) et programme persistant (`main.py`)

---

## Étape 1 : Construire

Ici, "construire" veut dire mettre en place l'environnement logiciel : installer Vittascience, installer MicroPython sur la carte, et configurer la communication entre les deux.

### Installer Vittascience

Pour utiliser l'éditeur de code Vittascience, vous pouvez soit utiliser [Vittascience en ligne](https://fr.vittascience.com/steami/?mode=mixed&console=bottom&toolbox=vittascience&localId=loc652b503157cdb4) directement dans votre navigateur, soit télécharger la version bureau depuis le site officiel : [Vittascience](https://fr.vittascience.com/plugin) et suivre les instructions d'installation pour votre système d'exploitation (Windows, macOS ou Linux).

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/t05-vittascience/installation.png"
    alt="Fenêtre principale de Vittascience installation"
    style={{maxWidth: '100%', height: 'auto'}}
  />
</figure>

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/t05-vittascience/ligne.png"
    alt="Éditeur de code en ligne Vittascience"
    style={{maxWidth: '100%', height: 'auto'}}
  />
</figure>

### Installer MicroPython sur la STeaMi

Une STeaMi sortie d'usine est en général livrée avec MicroPython déjà installé. Si cette étape d'installation est déjà faite : passez directement à la section suivante.

Grâce à un mode "clé USB" préinstallé en usine, la STeaMi se présente comme une **clé USB** : installer MicroPython revient à un simple glisser-déposer.

1. **Brancher** la STeaMi en USB (câble de données, pas un câble de charge seul).
2. La carte apparaît comme un disque amovible nommé `STEAMI`.
3. **Télécharger** le fichier `steami-micropython-firmware-vX.Y.Z.hex` depuis les [releases](https://github.com/steamicc/micropython-steami-lib/releases). Attention : ne pas confondre avec `steami-daplink-firmware-...hex`, qui est un autre fichier sans rapport avec MicroPython.
4. **Glisser-déposer** le `.hex` sur le disque `STEAMI`.
5. La LED de statut clignote pendant l'écriture (~5 à 15 s), puis la carte **redémarre** avec MicroPython. **Ne pas débrancher la carte pendant le clignotement** : attendre la fin du redémarrage.

:::warning[Câble incompatible]

Si le disque `STEAMI` n'apparaît pas, le premier réflexe est de changer de câble : un câble qui ne transporte que l'alimentation ne suffit pas, il faut un câble de données.

:::

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/t03-decouverte-thonny/02-drag-drop-firmware.gif"
    alt="Animation : glisser-déposer du fichier .hex sur le disque STEAMI"
    style={{maxWidth: '100%', height: 'auto'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    Glisser-déposer du fichier .hex sur le disque STEAMI : la carte se reprogramme.
  </figcaption>
</figure>

### Configurer Vittascience pour la STeaMi

Dans l'éditeur web vous avez la possibilité de programmer en blocs ou en MicroPython. Dans cette fiche les deux versions vont vous être montrées. Vous pouvez passer d'un style de programmation à l'autre à tout moment en cliquant sur la fenêtre de votre choix.

---

## Étape 2 : Programmer

Premier programme : **changer la couleur de la LED RGB selon le bouton enfoncé**. Sur la STeaMi, la LED RGB s'allume en écrivant `1` sur la broche, et s'éteint avec `0`. Les boutons A et B, eux, fonctionnent à l'envers : leur valeur vaut `1` au repos et passe à `0` quand on appuie.

### Brochage utilisé

| Composant       | Nom dans le programme | Comportement             |
| --------------- | --------------------- | ------------------------- |
| LED RGB Rouge   | `led3_red`            | 1 = allumée, 0 = éteinte |
| LED RGB Verte   | `led2_green`          | 1 = allumée, 0 = éteinte |
| LED RGB Bleue   | `led1_blue`           | 1 = allumée, 0 = éteinte |
| Bouton A        | `A_BUTTON`            | 0 = appuyé, 1 = relâché  |
| Bouton B        | `B_BUTTON`            | 0 = appuyé, 1 = relâché  |

### Programme

```python
# Testée avec firmware STeaMi 0.23.1

import pyb
from time import sleep_ms

led1_blue  = pyb.LED(1)
led2_green = pyb.LED(2)
led3_red   = pyb.LED(3)

def blink(led):
    led.on()
    sleep_ms(20)
    led.off()

a_button = pyb.Pin('A_BUTTON', pyb.Pin.IN)
b_button = pyb.Pin('B_BUTTON', pyb.Pin.IN)

while True:
    if not a_button.value() and b_button.value():
        blink(led1_blue)
    elif not b_button.value() and a_button.value():
        blink(led2_green)
    elif not a_button.value() and not b_button.value():
        blink(led3_red)
```

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/t05-vittascience/block.png"
    alt="Code version blocs dans l'éditeur Vittascience"
    style={{maxWidth: '100%', height: 'auto'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    Code version blocs dans l'éditeur Vittascience.
  </figcaption>
</figure>

### Fonctionnement du programme

- Le programme commence par importer le module `pyb`, qui contient les fonctions pour interagir avec le matériel de la STeaMi, ainsi que `sleep_ms` pour gérer les temporisations.
- La fonction `blink(led)` allume la LED passée en argument pendant 20 ms, puis l'éteint.
- Les boutons A et B sont configurés en entrée (`pyb.Pin.IN`). Les résistances de pull-up sont déjà présentes sur la carte STeaMi, il n'est donc pas nécessaire d'activer les pull-up internes dans le code.
- La boucle `while True` tourne indéfiniment : à chaque itération, elle vérifie l'état des boutons et allume la LED correspondante :
  - Si le bouton A seul est appuyé (`not a_button.value()`), la LED bleue clignote.
  - Si le bouton B seul est appuyé (`not b_button.value()`), la LED verte clignote.
  - Si les deux boutons sont appuyés en même temps, la LED rouge clignote.

### Exécution

- **Test rapide** : bouton **Téléverser** (▶). Le code est envoyé sur la carte et s'exécute immédiatement.
- **Programme persistant** : renommez le fichier `main.py` avant de téléverser. Il sera relancé automatiquement à chaque démarrage de la carte.

:::info[Un programme est déjà en cours d'exécution]

Quand un programme tourne déjà sur la carte (par exemple un `main.py` précédemment enregistré), il faut d'abord l'interrompre avant d'en envoyer un nouveau. Cliquez dans le REPL et appuyez sur **`Ctrl+C`** pour l'arrêter.

:::

---

## Étape 3 : Améliorer

Une fois le premier programme fonctionnel, trois pistes pour aller plus loin avec Vittascience.

### Tester du code en direct avec le REPL

Le **REPL** (`>>>` dans le panneau console) permet de tester du code **directement sur la carte**, sans créer de fichier. Pratique pour la découverte et le débogage.

Dans l'exemple ci-dessous, les `>>>` représentent l'invite, c'est ce que Vittascience affiche pour signaler qu'il attend une commande. Ne recopiez pas ces chevrons : tapez uniquement la commande qui suit l'invite.

```python
# Allumer la LED bleue à la main
>>> import pyb
>>> led = pyb.LED(1)
>>> led.on()           # allumée
>>> led.off()          # éteinte

# Lire l'état du bouton A
>>> btn_a = pyb.Pin('A_BUTTON', pyb.Pin.IN)
>>> btn_a.value()
1                      # 1 = relâché, 0 = appuyé

# Scanner les capteurs I2C internes
>>> from machine import I2C
>>> i2c = I2C(1)
>>> [hex(a) for a in i2c.scan()]
['0x1e', '0x29', '0x39', '0x55', '0x5d', '0x5f', '0x6b']
# Magnéto, ToF, lumière, jauge batterie, pression, humidité, IMU
```

Raccourcis utiles dans le REPL :

| Raccourci | Effet                                    |
| ---------- | ---------------------------------------- |
| `Ctrl+C`  | Interrompre le programme en cours        |
| `Ctrl+D`  | Redémarrage logiciel (relance `main.py`) |
| Flèche ↑  | Rappeler la dernière commande            |

## Déboguer pas-à-pas

Vittascience ne propose pas de débogueur pas-à-pas intégré. Pour observer l'état de votre programme, la méthode recommandée est d'utiliser `print()` dans le code et de lire la sortie dans le REPL.

```python
print("valeur du bouton A :", a_button.value())
```

Le résultat s'affiche directement dans la console en bas de l'interface.

## Limite à connaître

Le REPL de Vittascience web utilise la **Web Serial API**, disponible uniquement sur **Chrome** et **Edge**. Firefox et Safari ne sont pas supportés. Pour des programmes qui interagissent beaucoup avec le matériel, le `print()` dans le REPL reste la méthode la plus pratique pour suivre l'exécution.

## Dépanner les erreurs courantes

La plupart des problèmes rencontrés ne sont pas spécifiques à Vittascience mais touchent le matériel ou l'environnement MicroPython (câble, port série, programme bloqué). Ils sont regroupés sur la page transverse [Dépannage STeaMi](/ressources/inovmicro-exao/depannage), qui couvre :

* la carte qui n'apparaît pas comme disque `STEAMI` (câble) ;
* le port série introuvable ou avec accès refusé (Windows / Linux) ;
* la console vide après connexion (MicroPython pas installé) ;
* `Couldn't find the device` (plusieurs cartes branchées) ;
* `Device is busy` (programme déjà en cours) ;
* un `main.py` qui redémarre en boucle.

## Aller plus loin

### Pour comprendre

* [L'histoire de MicroPython](https://fr.wikipedia.org/wiki/MicroPython) : lancé en 2013 par Damien George via une campagne Kickstarter, MicroPython est une implémentation de Python pensée pour les systèmes embarqués.
* [Documentation MicroPython](https://docs.micropython.org/) : référence complète du langage et des modules.
* [Wiki STeaMi : Hardware](https://wiki.steami.cc/docs/hardware/) : pinout détaillé et informations matérielles.

### Pour s'inspirer

* [MOOC FUN, Programmer un objet avec MicroPython](https://www.fun-mooc.fr/fr/cours/programmer-un-objet-avec-micropython/) : cours gratuit pour découvrir MicroPython.
* [Vittascience](https://vittascience.com/) : plateforme pédagogique française de programmation par blocs et texte.
* [Wiki STeaMi : Vittascience](https://wiki.steami.cc/docs/software/micropython/vittascience)
* [Wiki STeaMi : Premiers pas](https://wiki.steami.cc/docs/software/getting-started)
* [Drivers MicroPython STeaMi](https://github.com/steamicc/micropython-steami-lib) : code source des modules `steami_*`

---

_Cette fiche fait partie du projet [I-Novmicro #2 : Action EXAO](/projets/inovmicro-exao). Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr). Informations basées sur la [documentation officielle STeaMi](https://wiki.steami.cc/)._
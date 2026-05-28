---
id: t05-vittascience
title: "Prendre en main la STeaMi sur l'éditeur Vittascience"
sidebar_label: "Vittascience"
sidebar_position: 5
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>
<div style={{flex: 1}}>

# Prendre en main la STeaMi sur l'éditeur Vittascience

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

Vous avez peut-être déjà bricolé un projet sur [Scratch](https://scratch.mit.edu/), assemblé des blocs dans l'application [code.org](https://code.org/), ou même programmé en blocs sur une calculatrice. C'est la même idée ici : un **éditeur de programmation** qui propose deux modes côte à côte, **blocs** (les briques à assembler à la souris) et **MicroPython** (le code texte derrière), pour piloter la STeaMi sans avoir besoin d'installer quoi que ce soit de lourd sur l'ordinateur.

[Vittascience](https://vittascience.com/) est une plateforme française gratuite, utilisable directement dans le navigateur, ou installable en application bureau pour fonctionner hors-ligne. C'est l'outil idéal pour les classes équipées de postes verrouillés où l'on ne peut pas installer Thonny ou VS Code, ou pour des élèves qui débutent et préfèrent les blocs avant de basculer en code texte.

Cette fiche couvre l'installation de Vittascience (web ou bureau), la mise en place de la communication avec la STeaMi, et un premier programme **LED RGB + boutons A/B** écrit côte à côte en blocs et en MicroPython, pour faire le pont entre les deux représentations.

:::info[Composants intégrés, rien à câbler]
La LED RGB et les boutons A et B utilisés dans cet exemple sont déjà soudés à la STeaMi. Aucun câblage externe à faire.
:::

---

## Objectifs d'apprentissage

À la fin de cette activité, l'élève sera capable de :

- **Expliquer** le principe de la programmation embarquée : un programme écrit sur l'ordinateur est envoyé à la carte, qui l'exécute ensuite par elle-même.
- **Distinguer** le rôle de l'éditeur (Vittascience), du langage (MicroPython ou blocs) et de la carte (STeaMi).
- **Écrire** un premier programme qui allume la LED RGB selon le bouton pressé, à la fois en blocs et en MicroPython, et **basculer** d'une représentation à l'autre dans Vittascience.
- **Téléverser** ce programme sur la STeaMi, et **faire la différence** entre une exécution temporaire (téléversement) et un programme persistant (enregistrement en `main.py`).
- **Tester** une instruction à la volée dans le REPL, sans écrire de fichier complet.
- **Adapter** ce flux de travail à d'autres petits programmes ou à un autre éditeur compatible MicroPython si Vittascience n'est pas disponible (Thonny, Mu, VS Code...).

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

:::info[Câble incompatible]

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

Premier programme : **changer la couleur de la LED RGB selon le bouton enfoncé**. Sur la STeaMi, la LED RGB s'allume en écrivant `1` sur la broche, et s'éteint avec `0`. Les boutons A et B, eux, fonctionnent à l'envers : leur valeur vaut `1` au repos et passe à `0` quand on appuie (résistances pull-up externes câblées sur la carte, à ne pas confondre avec la pull-up interne du microcontrôleur).

### Broches utilisées

| Composant     | Nom de broche STeaMi | Variable Python | Comportement             |
| ------------- | -------------------- | --------------- | ------------------------ |
| LED RGB Rouge | `LED_RED`            | `led_rouge`     | 1 = allumée, 0 = éteinte |
| LED RGB Verte | `LED_GREEN`          | `led_verte`     | 1 = allumée, 0 = éteinte |
| LED RGB Bleue | `LED_BLUE`           | `led_bleue`     | 1 = allumée, 0 = éteinte |
| Bouton A      | `A_BUTTON`           | `bouton_a`      | 0 = appuyé, 1 = relâché  |
| Bouton B      | `B_BUTTON`           | `bouton_b`      | 0 = appuyé, 1 = relâché  |

### Programme

```python
# Testée avec firmware STeaMi 0.23.1
#
# Premier programme STeaMi avec Vittascience, LED RGB + boutons A/B
# - Bouton A seul    -> LED rouge
# - Bouton B seul    -> LED verte
# - A + B            -> LED bleue
# - Aucun bouton     -> LED éteinte

from machine import Pin
from time import sleep_ms

led_rouge = Pin('LED_RED', Pin.OUT)
led_verte = Pin('LED_GREEN', Pin.OUT)
led_bleue = Pin('LED_BLUE', Pin.OUT)

bouton_a = Pin('A_BUTTON', Pin.IN)
bouton_b = Pin('B_BUTTON', Pin.IN)


def regler_led(rouge, verte, bleue):
    """Allume chaque composante de la LED RGB (1 = on, 0 = off)."""
    led_rouge.value(rouge)
    led_verte.value(verte)
    led_bleue.value(bleue)


while True:
    bouton_a_appuye = bouton_a.value() == 0
    bouton_b_appuye = bouton_b.value() == 0

    if bouton_a_appuye and bouton_b_appuye:
        regler_led(0, 0, 1)   # bleu
    elif bouton_a_appuye:
        regler_led(1, 0, 0)   # rouge
    elif bouton_b_appuye:
        regler_led(0, 1, 0)   # vert
    else:
        regler_led(0, 0, 0)   # éteint

    sleep_ms(20)
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

### Comment ça fonctionne ?

1. **Imports** : `machine.Pin` pour piloter les broches de la carte, `sleep_ms` pour temporiser dans la boucle.
2. **Initialisation des LED** : trois broches en sortie, une pour chaque composante de la LED RGB. Les noms `LED_RED`, `LED_GREEN`, `LED_BLUE` sont des constantes exposées par MicroPython sur la STeaMi (cf. table « Broches utilisées »).
3. **Initialisation des boutons** : entrée simple, sans pull-up interne dans le code (les pull-up sont déjà câblées sur la carte). Au repos la broche lit `1`, quand on appuie elle lit `0`.
4. **`regler_led(rouge, verte, bleue)`** : factorise les trois `value()` en un seul appel. Plus court à lire, plus facile à étendre si on ajoute un capteur.
5. **Boucle principale** : à chaque itération, lit l'état des deux boutons et choisit la couleur correspondante. Le `sleep_ms(20)` évite que la boucle ne consomme inutilement le CPU (et fait office de petit anti-rebond).

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
# Allumer la LED rouge à la main
>>> from machine import Pin
>>> led_rouge = Pin('LED_RED', Pin.OUT)
>>> led_rouge.value(1)         # allumée
>>> led_rouge.value(0)         # éteinte

# Lire l'état du bouton A
>>> bouton_a = Pin('A_BUTTON', Pin.IN)
>>> bouton_a.value()
1                              # 1 = relâché, 0 = appuyé

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

### Déboguer pas-à-pas

Vittascience ne propose pas de débogueur pas-à-pas intégré. Pour observer l'état de votre programme, la méthode recommandée est d'utiliser `print()` dans le code et de lire la sortie dans le REPL.

```python
print("valeur du bouton A :", bouton_a.value())
```

Le résultat s'affiche directement dans la console en bas de l'interface.

:::info[Compatibilité navigateur du REPL web]
Le REPL de Vittascience web utilise la **Web Serial API**, disponible uniquement sur **Chrome** et **Edge**. Firefox et Safari ne sont pas supportés. Pour des programmes qui interagissent beaucoup avec le matériel, le `print()` dans le REPL reste la méthode la plus pratique pour suivre l'exécution. La version bureau de Vittascience contourne cette limite (elle utilise le port série natif du système).
:::

### Dépanner les erreurs courantes

La plupart des problèmes rencontrés ne sont pas spécifiques à Vittascience mais touchent le matériel ou l'environnement MicroPython (câble, port série, programme bloqué). Ils sont regroupés sur la page transverse [Dépannage STeaMi](/ressources/inovmicro-exao/depannage), qui couvre :

- la carte qui n'apparaît pas comme disque `STEAMI` (câble) ;
- le port série introuvable ou avec accès refusé (Windows / Linux) ;
- la console vide après connexion (MicroPython pas installé) ;
- `Couldn't find the device` (plusieurs cartes branchées) ;
- `Device is busy` (programme déjà en cours) ;
- un `main.py` qui redémarre en boucle.

## Aller plus loin

### Pour comprendre

- **[L'histoire de MicroPython (Wikipédia)](https://fr.wikipedia.org/wiki/MicroPython)** : lancé en 2013 par **Damien George** via une campagne Kickstarter, MicroPython est une implémentation de Python pensée pour les systèmes embarqués, capable de tourner sur des cartes avec très peu de mémoire.
- **[Programmation visuelle par blocs (Wikipédia anglais)](https://en.wikipedia.org/wiki/Visual_programming_language)** : Scratch, Blockly, Snap!, MakeCode... la programmation par blocs s'est imposée dans le monde scolaire depuis les années 2000. Comprendre comment ces blocs sont traduits en code texte (et inversement, comme dans Vittascience) éclaire la différence entre représentation et calcul. (La page n'existe qu'en anglais à ce jour.)
- **[Blockly, le moteur derrière les éditeurs blocs](https://developers.google.com/blockly)** : bibliothèque open source de Google sur laquelle reposent la plupart des éditeurs blocs modernes, dont MakeCode, Scratch (en partie) et Vittascience.

### Pour s'inspirer

- **[MOOC FUN : Programmer un objet avec MicroPython](https://www.fun-mooc.fr/fr/cours/programmer-un-objet-avec-micropython/)** : cours en ligne gratuit (CC-BY-SA) qui couvre les bases de MicroPython sur Pyboard / ESP32 / micro:bit. Idéal en complément pour s'approprier le langage avant de l'enseigner.
- **[Vittascience pour la classe](https://vittascience.com/)** : la plateforme propose une partie gestion de classe, des kits pédagogiques (capteurs, robots) et des tutoriels. À explorer pour bâtir une séquence complète au-delà de la STeaMi.

### Pour approfondir

Documentation technique pour préparer une séquence ou répondre aux questions des élèves :

- **[Wiki STeaMi : Vittascience](https://wiki.steami.cc/docs/software/micropython/vittascience)**
- **[Wiki STeaMi : Premiers pas](https://wiki.steami.cc/docs/software/getting-started)**
- **[Wiki STeaMi : Hardware](https://wiki.steami.cc/docs/hardware/)** : pinout détaillé et informations matérielles.
- **[Drivers MicroPython STeaMi](https://github.com/steamicc/micropython-steami-lib)** : code source des modules `steami_*` exposés par l'environnement MicroPython de la carte.
- **[Documentation MicroPython](https://docs.micropython.org/)** : référence complète du langage et des modules.

---

_Cette fiche fait partie du projet [I-Novmicro #2 : Action EXAO](/projets/inovmicro-exao). Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr). Informations basées sur la [documentation officielle STeaMi](https://wiki.steami.cc/)._
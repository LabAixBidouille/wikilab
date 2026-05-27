---
id: t04-vscode
title: "VS Code : Prise en main de MicroPython sur la STeaMi"
sidebar_label: "VS Code"
sidebar_position: 4
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>
<div style={{flex: 1}}>
# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="3" y="4" width="18" height="14" rx="2" fill="#8a6e18" opacity="0.1"/><rect x="3" y="4" width="18" height="3" rx="1" fill="#8a6e18" opacity="0.3"/><circle cx="5.5" cy="5.5" r="0.5" fill="#8a6e18"/><circle cx="7" cy="5.5" r="0.5" fill="#8a6e18"/><circle cx="8.5" cy="5.5" r="0.5" fill="#8a6e18"/><polyline points="6,11 8,13 6,15" fill="none" stroke="#8a6e18" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><polyline points="9,11 11,13 9,15" fill="none" stroke="#8a6e18" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><line x1="13" y1="15" x2="18" y2="15" stroke="#8a6e18" strokeWidth="1.2" strokeLinecap="round"/><line x1="6" y1="20" x2="18" y2="20" stroke="#8a6e18" strokeWidth="1.5" strokeLinecap="round"/><line x1="12" y1="18" x2="12" y2="20" stroke="#8a6e18" strokeWidth="1.5"/></svg> VS Code : Prise en main de MicroPython sur la STeaMi
<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--info">SteaMi</span>
  <span className="badge badge--warning">MicroPython</span>
  <span className="badge badge--secondary">VS Code</span>
</div>
| Projet        | Durée   | Difficulté | Âge       | Logiciel STeaMi testé |
| ------------- | ------- | ---------- | --------- | --------------------- |
| I-Novmicro #2 | 40 min  | Débutant | 11-99 ans | 0.23.1                |

## Matériel et Montage

- 1 carte STeaMi
- 1 câble USB de données (micro-USB pour la STeaMi V1, USB-C pour la STeaMi V2). Attention : un câble qui ne sert qu'à charger un téléphone ne fonctionnera pas.
- 1 ordinateur sous Windows, macOS ou Linux
- [VS Code](https://code.visualstudio.com/) installé (une version récente)
- Le programme MicroPython STeaMi `.hex` ([dernière release](https://github.com/steamicc/micropython-steami-lib/releases))
</div>
<img src="/img/ressources/inovmicro-exao/t04-vscode/VSCode.png" alt="Logo VS Code" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />
</div>
---

## De quoi parle-t-on ?

Pour pouvoir programmer la STeaMi, vous allez avoir besoin d'un éditeur de code qui puisse transférer du code MicroPython sur la carte. Il en existe plusieurs. Pour cela, vous pouvez utiliser Visual Studio Code, un éditeur de code gratuit et très populaire étant donné qu'il supporte de nombreux langages et plateformes. Il est disponible sur Windows, macOS et Linux, et dispose d'une grande bibliothèque d'extensions pour ajouter des fonctionnalités spécifiques.

Cette fiche vous guidera à travers les étapes d'installation de Visual Studio Code, de configuration pour la STeaMi, et de création de votre premier programme MicroPython pour interagir avec les composants matériels de la carte.

Il existe d'autres éditeurs de code compatibles avec la STeaMi, comme Thonny. N'hésitez pas à explorer différentes options pour trouver celle qui vous convient le mieux !

---

## Objectifs d'apprentissage

- Installer VS Code et le configurer pour communiquer avec une carte MicroPython
- Comprendre le rôle du programme MicroPython et savoir l'installer sur la STeaMi
- Écrire et exécuter un premier programme MicroPython qui interagit avec le matériel (LED, boutons)
- Découvrir le REPL pour tester du code en direct sans créer de fichier
- Identifier la différence entre exécution temporaire (Run) et programme persistant (`main.py`)

---

## Étape 1 : Construire

Ici la partie « Construire » est un peu différente de ce qu'on a l'habitude de faire, puisqu'il s'agit surtout d'installer et configurer les outils nécessaires pour programmer la STeaMi. Voici les étapes à suivre :

### Installer VS Code

Quel que soit votre système d'exploitation, vous pouvez télécharger et installer Visual Studio Code depuis le [site officiel](https://code.visualstudio.com/). Il vous suffit de choisir la version adaptée à votre système (Windows, macOS ou Linux) et de suivre les instructions d'installation.

### Configurer VS Code pour la STeaMi

Quand vous lancez VS Code pour la première fois, vous devriez voir cette fenêtre d'accueil.

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/t04-vscode/page.png"
    alt="Fenêtre principale de Visual Studio Code au premier démarrage"
    style={{maxWidth: '800px', height: 'auto'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    La page d'accueil propose des raccourcis (Open Folder, Clone Git Repository) et des walkthroughs pour découvrir l'interface.
  </figcaption>
</figure>

 Pour programmer en MicroPython avec VS Code, vous pouvez passer par une extension dédiée **ou** par le terminal avec un outil comme `mpremote`. Dans cette fiche, on utilisera `mpremote` (voir plus bas). Pour créer un nouveau projet, vous devrez simplement créer un nouveau dossier pour votre projet et y ajouter un fichier `.py` qui contiendra votre code MicroPython.

### Installer le firmware MicroPython sur la STeaMi

Une STeaMi sortie d'usine est en général livrée avec MicroPython déjà installé, vous pouvez donc passer directement à la section suivante.

Si ce n'est pas le cas, vous devrez installer le firmware MicroPython sur votre STeaMi :
1. **Branchez** la STeaMi en USB (câble de données, pas un câble de charge seul).
2. La carte apparaît comme un disque amovible nommé `STEAMI`.
3. **Téléchargez** le fichier `steami-micropython-firmware-vX.Y.Z.hex` depuis les [releases](https://github.com/steamicc/micropython-steami-lib/releases). Attention : ne pas confondre avec `steami-daplink-firmware-...hex`, qui est un autre fichier sans rapport avec MicroPython.
4. **Glissez-déposez** le `.hex` sur le disque `STEAMI`.
5. La LED de statut clignote pendant l'écriture (~5 à 15 s), puis la carte **redémarre** avec MicroPython. **Ne pas débrancher la carte pendant le clignotement** : attendez la fin du redémarrage.

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/t04-vscode/hex.png"
    alt="Fichier .hex du firmware MicroPython"
    style={{maxWidth: '800px', height: 'auto'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    Sur la page des releases STeaMi, télécharger uniquement `steami-micropython-firmware-vX.Y.Z.hex` (pas le `daplink`).
  </figcaption>
</figure>

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

---

## Étape 2 : Programmer

Premier programme : **changer la couleur de la LED RGB selon le bouton enfoncé**. Sur la STeaMi, la LED RGB s'allume en écrivant `1` sur la broche, et s'éteint avec `0`. Les boutons A et B, eux, fonctionnent à l'envers : leur valeur vaut `1` au repos et passe à `0` quand on appuie (une résistance présente sur la carte impose ce comportement, on n'a rien à faire dans le code).

### Brochage utilisé

| Composant       | Nom dans le programme | Comportement                          |
| --------------- | --------------------- | ------------------------------------- |
| LED RGB Rouge | `LED_RED`             | 1 = allumée, 0 = éteinte              |
| LED RGB Verte | `LED_GREEN`           | 1 = allumée, 0 = éteinte              |
| LED RGB Bleue | `LED_BLUE`            | 1 = allumée, 0 = éteinte              |
| Bouton A        | `A_BUTTON`            | 0 = appuyé, 1 = relâché               |
| Bouton B        | `B_BUTTON`            | 0 = appuyé, 1 = relâché               |

### Programme

```python
# Testée avec firmware STeaMi 0.23.1
#
# Premier programme STeaMi avec VS Code, LED RGB + boutons A/B
# - Bouton A     -> LED rouge
# - Bouton B     -> LED verte
# - A + B        -> LED bleue
# - Aucun bouton -> LED éteinte

from machine import Pin
from time import sleep_ms

# LED RGB : on() allume, off() éteint
led_r = Pin('LED_RED', Pin.OUT)
led_g = Pin('LED_GREEN', Pin.OUT)
led_b = Pin('LED_BLUE', Pin.OUT)

# Boutons A et B (résistance pull-up sur la carte : 1 au repos, 0 quand on appuie)
btn_a = Pin('A_BUTTON', Pin.IN)
btn_b = Pin('B_BUTTON', Pin.IN)


def set_rgb(r, g, b):
    """Allume chaque LED selon la composante (1 = on, 0 = off)."""
    led_r.value(r)
    led_g.value(g)
    led_b.value(b)


print("Programme démarré. Appuyez sur A, B ou les deux.")

while True:
    a_pressed = btn_a.value() == 0
    b_pressed = btn_b.value() == 0

    if a_pressed and b_pressed:
        set_rgb(0, 0, 1)   # bleu
    elif a_pressed:
        set_rgb(1, 0, 0)   # rouge
    elif b_pressed:
        set_rgb(0, 1, 0)   # vert
    else:
        set_rgb(0, 0, 0)   # éteint

    sleep_ms(20)
```

### Exécution

Avant de pouvoir exécuter le programme, il faut installer `mpremote`, un outil en ligne de commande pour communiquer avec les cartes MicroPython. Pour cela, ouvrez un terminal (cmd, PowerShell, terminal macOS ou Linux) et tapez la commande suivante : `pip install mpremote`. Une fois installé, vous pouvez exécuter votre programme de deux façons différentes :

**Programme persistant :**
- Si ce n'est pas déjà fait, ouvrez le terminal intégré de VS Code (Menu `Terminal > New Terminal`).
- Dans le terminal, lancez la commande `mpremote connect auto fs cp chemin/projet.py :main.py` puis `mpremote connect auto reset` pour exécuter le programme.

**Programme temporaire :**
- Ouvrez le terminal intégré de VS Code (Menu `Terminal > New Terminal`).
- Dans le terminal, lancez la commande `mpremote connect auto run chemin/projet.py` pour exécuter le programme sans le copier sur la carte.

:::tip[Un programme est déjà en cours d'exécution]

Si un programme est déjà en cours d'exécution sur la STeaMi et vous empêche d'exécuter votre nouveau programme, vous pouvez le stopper en exécutant la commande `mpremote connect auto` dans le terminal. Une fois que `>>>` apparaît, appuyez sur `Ctrl+C` pour interrompre le programme en cours et `Ctrl+D` pour fermer la connexion. Vous devriez alors pouvoir exécuter votre programme normalement.

:::

---

## Étape 3 : Améliorer

Une fois le premier programme fonctionnel, voici quelques pistes pour aller plus loin avec VS Code.

### Tester du code en direct avec le REPL

Le REPL (`>>>` dans le terminal) permet de tester du code directement sur la carte, sans créer de fichier. Pratique pour la découverte et le débogage.

Pour ouvrir le REPL, lancez dans le terminal intégré de VS Code (`Ctrl+J`) :

```bash
mpremote connect auto
```

Dans les exemples ci-dessous, les `>>>` représentent l'invite MicroPython. Ne recopiez pas ces chevrons : tapez uniquement la commande qui suit l'invite.

```python
# Allumer la LED rouge à la main
>>> from machine import Pin
>>> led_r = Pin('LED_RED', Pin.OUT)
>>> led_r.value(1)         # allumée
>>> led_r.value(0)         # éteinte

# Lire l'état du bouton A
>>> btn_a = Pin('A_BUTTON', Pin.IN)
>>> btn_a.value()
1                          # 1 = relâché, 0 = appuyé

# Scanner les capteurs I2C internes
>>> from machine import I2C
>>> i2c = I2C(1)
>>> [hex(a) for a in i2c.scan()]
['0x1e', '0x29', '0x39', '0x55', '0x5d', '0x5f', '0x6b']
# Magnéto, ToF, lumière, jauge batterie, pression, humidité, IMU
```

Raccourcis utiles dans le REPL :

| Raccourci | Effet |
| --------- | ----- |
| `Ctrl+C`  | Interrompre le programme en cours |
| `Ctrl+D`  | Redémarrage logiciel (relance `main.py`) |
| `Ctrl+X`  | Quitter le REPL et revenir au terminal |
| Flèche ↑  | Rappeler la dernière commande |

### Dépanner les erreurs courantes

La plupart des problèmes rencontrés ne sont pas spécifiques à VS Code mais touchent le matériel ou l'environnement MicroPython (câble, port série, programme bloqué). Ils sont regroupés sur la page transverse [Dépannage STeaMi](/ressources/inovmicro-exao/depannage), qui couvre :

- la carte qui n'apparaît pas comme disque `STEAMI` (câble) ;
- le port série introuvable ou avec accès refusé (Windows / Linux) ;
- la console vide après connexion (MicroPython pas installé) ;
- `Couldn't find the device` (plusieurs cartes branchées) ;
- `Device is busy` (programme déjà en cours) ;
- un `main.py` qui redémarre en boucle.

---

## Aller plus loin

### Pour comprendre

- **[VS Code (Wikipédia)](https://fr.wikipedia.org/wiki/Visual_Studio_Code)** : lancé par Microsoft en 2015, VS Code est un éditeur **libre** (licence MIT) qui repose sur le framework Electron, la même technologie qui fait tourner Slack, Discord ou Spotify. Une application web déguisée en application de bureau, qui peut ajouter des fonctionnalités via des extensions écrites en JavaScript.
- **[Le Language Server Protocol (Wikipédia)](https://fr.wikipedia.org/wiki/Language_Server_Protocol)** : VS Code a popularisé en 2016 un format standard pour communiquer entre un éditeur et un langage de programmation (autocomplétion, détection d'erreurs, renommage). Aujourd'hui Neovim, Emacs, Sublime, IntelliJ parlent tous ce même protocole. Un exemple concret de standard utile qui émerge.
- **[L'histoire de MicroPython (Wikipédia)](https://fr.wikipedia.org/wiki/MicroPython)** : lancé en 2013 par Damien George via une campagne Kickstarter, MicroPython est une **implémentation de Python** pensée pour les systèmes embarqués, capable de tourner sur des cartes avec très peu de mémoire. C'est lui qui rend possible le code que vous venez d'exécuter sur la STeaMi.
- **[Electron (Wikipédia)](<https://fr.wikipedia.org/wiki/Electron_(framework)>)** : créé par GitHub en 2013 pour transformer une page web en application de bureau. Approche controversée (gourmande en RAM), mais qui a permis à VS Code, Slack ou Discord d'être identiques sur Windows, macOS et Linux.

### Pour s'inspirer

- **[Live Share : programmer à plusieurs sur le même écran](https://code.visualstudio.com/learn/collaboration/live-share)** : extension officielle VS Code qui permet à plusieurs personnes d'éditer le même fichier en temps réel, comme un Google Docs du code. Pratique pour s'entraider en classe ou demander un coup de main à distance.
- **[mpremote, la télécommande des cartes MicroPython](https://docs.micropython.org/en/latest/reference/mpremote.html)** : la commande utilisée dans cette fiche pilote tout un écosystème — STeaMi, BBC micro:bit, ESP32, Raspberry Pi Pico, Pyboard. Une seule syntaxe pour une demi-douzaine de cartes différentes.
- **[La guerre des éditeurs (Wikipédia)](https://fr.wikipedia.org/wiki/Guerre_des_%C3%A9diteurs)** : depuis les années 80, les développeurs s'opposent en deux camps autour de leur choix d'éditeur (vim vs Emacs, puis tous les autres). Une « guerre » mi-sérieuse mi-amusée qui a duré 40 ans, jusqu'à ce que VS Code finisse par mettre presque tout le monde d'accord. Les outils façonnent les communautés.
- **[GitHub Copilot (Wikipédia)](https://fr.wikipedia.org/wiki/GitHub_Copilot)** : l'extension VS Code qui propose en temps réel des suggestions de code générées par une IA. Gratuite pour les enseignant·es et les élèves via [GitHub Education](https://education.github.com/). Outil clivant — aide ou triche ? — à tester en classe pour se forger une opinion.

### Pour approfondir

Documentation technique pour préparer une séquence ou répondre aux questions des élèves :

- **[Site STeaMi](https://www.steami.cc/)** : présentation matérielle
- **[Wiki STeaMi : Premiers pas](https://wiki.steami.cc/docs/software/getting-started)**
- **[Wiki STeaMi : Hardware](https://wiki.steami.cc/docs/hardware/)** : pinout détaillé
- **[Drivers MicroPython STeaMi](https://github.com/steamicc/micropython-steami-lib)** : code source des modules `steami_*`
- **[Documentation MicroPython](https://docs.micropython.org/)**
- **[Documentation VS Code](https://code.visualstudio.com/docs)**
- **[MOOC FUN : Programmer un objet avec MicroPython](https://www.fun-mooc.fr/fr/cours/programmer-un-objet-avec-micropython/)**

---

_Cette fiche fait partie du projet [I-Novmicro #2 : Action EXAO](/projets/inovmicro-exao). Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr). Informations basées sur la [documentation officielle STeaMi](https://wiki.steami.cc/)._
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

Vous avez déjà vu un personnage dans une série taper du code dans une fenêtre noire pleine de mots colorés ? Vous avez peut-être regardé un YouTubeur expliquer comment construire son site web ? Vous utilisez sans doute déjà Word ou Google Docs pour écrire un texte. Un **éditeur de code** comme [Visual Studio Code](https://code.visualstudio.com/) (« VS Code »), c'est exactement pareil mais pour du code : un logiciel qui colore les mots-clés, signale les fautes de frappe, propose la suite quand on commence à taper, et permet de lancer le programme d'un clic.

VS Code est gratuit, libre, disponible sur Windows, macOS et Linux. Avec quelques extensions bien choisies, il devient possible d'écrire du **MicroPython** sur l'ordinateur puis de l'envoyer s'exécuter sur la STeaMi, branchée en USB.

Cette fiche couvre l'installation de VS Code, sa configuration pour parler à la STeaMi, et un premier programme qui change la couleur de la LED RGB selon le bouton pressé. D'autres éditeurs compatibles existent ([Thonny](/ressources/inovmicro-exao/t03-decouverte-thonny), Mu, Vittascience) ; la fiche se concentre sur VS Code parce que c'est l'éditeur que rencontrent souvent les élèves au lycée, dans les MOOC et en entreprise.

:::info[Composants intégrés, rien à câbler]
La LED RGB et les boutons A et B utilisés dans cet exemple sont déjà soudés à la STeaMi. Aucun montage à faire : on plonge directement dans le code.
:::

---

## Objectifs d'apprentissage

À la fin de cette activité, l'élève sera capable de :

- **Installer** VS Code sur Windows, macOS ou Linux, et y ajouter les extensions Python et Pylance pour bénéficier de l'autocomplétion et de la détection d'erreurs sur le code Python.
- **Distinguer** le rôle de MicroPython (le logiciel installé sur la carte qui exécute le code) de celui de VS Code (l'éditeur sur l'ordinateur qui sert à écrire ce code et à l'envoyer sur la carte).
- **Écrire** un premier programme qui allume la LED RGB selon le bouton pressé, et le **lancer** sur la STeaMi depuis VS Code en utilisant `mpremote` en ligne de commande.
- **Utiliser** le REPL pour tester une instruction en direct sur la carte, sans écrire de fichier complet.
- **Faire le lien** entre une exécution temporaire (le programme tourne tant qu'on est connecté) et une installation persistante (le programme redémarre seul à chaque mise sous tension).
- **Adapter** ce flux de travail à n'importe quelle autre carte MicroPython (Raspberry Pi Pico, BBC micro:bit, ESP32) : la procédure ne change presque pas.

---

## Étape 1 : Construire

Ici la partie « Construire » est un peu différente de ce qu'on a l'habitude de faire, puisqu'il s'agit surtout d'installer et configurer les outils nécessaires pour programmer la STeaMi. Voici les étapes à suivre :

### Installer VS Code

Quel que soit votre système d'exploitation, vous pouvez télécharger et installer Visual Studio Code depuis le [site officiel](https://code.visualstudio.com/). Il vous suffit de choisir la version adaptée à votre système (Windows, macOS ou Linux) et de suivre les instructions d'installation.

### Installer les extensions VS Code essentielles

VS Code traite par défaut les fichiers `.py` comme du texte brut. Deux extensions Microsoft sont à installer en premier lieu :

- **Python** (`ms-python.python`) : coloration syntaxique enrichie, IntelliSense, débogueur, détection des environnements Python installés. VS Code la propose d'ailleurs en pop-up dès qu'on ouvre un fichier `.py`.
- **Pylance** : analyse statique, autocomplétion, vérification de types. **Installée automatiquement** avec l'extension Python, rien à ajouter en plus.

Pour les installer, ouvrir le panneau **Extensions** (icône carrés en barre latérale, ou `Ctrl+Shift+X`), taper « Python », et cliquer sur **Install** sur la première proposition signée Microsoft.

À ce stade, ouvrir un fichier `.py` montre du code coloré et propose l'autocomplétion sur les fonctions Python standard. L'autocomplétion sur les modules **MicroPython** (`machine`, `time.sleep_ms`...) demande une étape supplémentaire couverte à l'Étape 3.

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

Pour programmer en MicroPython avec VS Code, la fiche utilise `mpremote` en ligne de commande (présentée à l'Étape 2). Les extensions VS Code MicroPython (MicroPico, Pymakr...) ne supportent pas officiellement la STeaMi à ce jour : voir le callout déconseillant MicroPico en fin d'Étape 2. Côté projet, il suffit de créer un nouveau dossier et d'y ajouter un fichier `.py` qui contiendra votre code MicroPython.

### Installer MicroPython sur la STeaMi

Une STeaMi sortie d'usine est en général livrée avec MicroPython déjà installé, vous pouvez donc passer directement à la section suivante.

Si ce n'est pas le cas, voici comment installer MicroPython sur la STeaMi :
1. **Branchez** la STeaMi en USB (câble de données, pas un câble de charge seul).
2. La carte apparaît comme un disque amovible nommé `STEAMI`.
3. **Téléchargez** le fichier `steami-micropython-firmware-vX.Y.Z.hex` depuis les [releases](https://github.com/steamicc/micropython-steami-lib/releases). Attention : ne pas confondre avec `steami-daplink-firmware-...hex`, qui est un autre fichier sans rapport avec MicroPython.
4. **Glissez-déposez** le `.hex` sur le disque `STEAMI`.
5. La LED de statut clignote pendant l'écriture (~5 à 15 s), puis la carte **redémarre** avec MicroPython. **Ne pas débrancher la carte pendant le clignotement** : attendez la fin du redémarrage.

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/t04-vscode/hex.png"
    alt="Fichier .hex de MicroPython pour la STeaMi sur la page des releases GitHub"
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

| Composant     | Nom de broche STeaMi | Variable Python | Comportement             |
| ------------- | ------------------------ | --------------- | ------------------------ |
| LED RGB Rouge | `LED_RED`                | `led_rouge`     | 1 = allumée, 0 = éteinte |
| LED RGB Verte | `LED_GREEN`              | `led_verte`     | 1 = allumée, 0 = éteinte |
| LED RGB Bleue | `LED_BLUE`               | `led_bleue`     | 1 = allumée, 0 = éteinte |
| Bouton A      | `A_BUTTON`               | `bouton_a`      | 0 = appuyé, 1 = relâché  |
| Bouton B      | `B_BUTTON`               | `bouton_b`      | 0 = appuyé, 1 = relâché  |

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

# LED RGB : value(1) allume, value(0) éteint
led_rouge = Pin('LED_RED', Pin.OUT)
led_verte = Pin('LED_GREEN', Pin.OUT)
led_bleue = Pin('LED_BLUE', Pin.OUT)

# Boutons A et B (résistance pull-up sur la carte : 1 au repos, 0 quand on appuie)
bouton_a = Pin('A_BUTTON', Pin.IN)
bouton_b = Pin('B_BUTTON', Pin.IN)


def regler_led(rouge, verte, bleue):
    """Allume chaque composante de la LED RGB (1 = on, 0 = off)."""
    led_rouge.value(rouge)
    led_verte.value(verte)
    led_bleue.value(bleue)


print("Programme démarré. Appuyez sur A, B ou les deux.")

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

### Installer mpremote

VS Code n'embarque pas d'outil pour parler à la carte STeaMi : il faut installer `mpremote`, un outil en ligne de commande qui copie les fichiers vers la carte et lance le code dessus. C'est un **paquet Python**, donc Python 3 doit être installé au préalable (voir [python.org/downloads](https://www.python.org/downloads/) ; sur Linux et macOS récents il est généralement déjà là).

Ouvrir un terminal (l'invite de commande / PowerShell sur Windows, le Terminal sur macOS, n'importe quel terminal sur Linux) et lancer :

```bash
# Recommandé : pipx isole l'outil dans son propre environnement
# et ajoute la commande au PATH automatiquement.
pipx install mpremote

# Si pipx n'est pas disponible, l'installer d'abord :
# - Windows / macOS : pip install --user pipx && pipx ensurepath
# - Linux (Debian/Ubuntu) : sudo apt install pipx && pipx ensurepath
# - Linux (Fedora) : sudo dnf install pipx && pipx ensurepath
```

:::info[Si `pip install mpremote` refuse l'installation]
Depuis quelques années (PEP 668), `pip install` global est refusé sur Ubuntu 24.04+, Debian 12+, Fedora 38+ et avec le Python installé par Homebrew sur macOS, avec un message **`externally-managed-environment`**. C'est intentionnel pour ne pas casser le Python du système. La solution standard est `pipx install mpremote` (voir ci-dessus).
:::

:::info[Cas particulier : poste sans droits administrateur (salle informatique)]
Si la machine n'a pas `pipx` installé et qu'il est impossible d'utiliser `sudo apt install pipx`, il reste un repli qui ne demande aucun droit admin : créer un **environnement virtuel Python** dans le dossier personnel et y installer `mpremote`.

```bash
# Une seule fois, dans le terminal :
python3 -m venv ~/.venvs/mpremote
~/.venvs/mpremote/bin/pip install mpremote

# À chaque session VS Code, soit on appelle mpremote via son chemin complet :
~/.venvs/mpremote/bin/mpremote connect auto run projet.py

# Soit on définit un alias permanent (à ajouter à ~/.bashrc ou ~/.zshrc) :
alias mpremote='~/.venvs/mpremote/bin/mpremote'
```

`venv` est livré avec Python 3 et marche sans aucune permission système ; c'est la solution la plus universelle pour des élèves sur postes verrouillés.
:::

:::info[La commande `mpremote` n'est pas reconnue ?]
Si le terminal répond `mpremote: command not found` (Linux/macOS) ou `'mpremote' n'est pas reconnu` (Windows) juste après l'installation, le dossier des scripts Python n'est pas dans le PATH. Solution rapide : utiliser `python -m mpremote ...` (ou `python3 -m mpremote ...`) à la place de `mpremote ...`. Solution durable : exécuter `pipx ensurepath` puis rouvrir le terminal, ou ajouter le dossier des scripts au PATH (`~/.local/bin` sur Linux/macOS, `%APPDATA%\Python\PythonXX\Scripts` sur Windows).
:::

### Exécuter le programme

Une fois `mpremote` installé, vous pouvez exécuter votre programme de deux façons différentes :

**Programme persistant :**

- Si ce n'est pas déjà fait, ouvrir le terminal intégré de VS Code (Menu `Terminal > New Terminal`).
- Lancer `mpremote connect auto fs cp chemin/projet.py :main.py` puis `mpremote connect auto reset` pour exécuter le programme.

**Programme temporaire :**

- Ouvrir le terminal intégré de VS Code (Menu `Terminal > New Terminal`).
- Lancer `mpremote connect auto run chemin/projet.py` pour exécuter le programme sans le copier sur la carte.

:::info[Un programme est déjà en cours d'exécution]

Si un programme est déjà en cours d'exécution sur la STeaMi et empêche d'exécuter le nouveau, on peut le stopper en lançant `mpremote connect auto` dans le terminal. Une fois que `>>>` apparaît, `Ctrl+C` interrompt le programme en cours et `Ctrl+D` ferme la connexion. Le nouveau programme peut alors s'exécuter normalement.

:::

:::info[Sous Linux : `Permission denied` sur `/dev/ttyACM*`]
Si `mpremote connect auto` répond une erreur de permission, il faut ajouter le compte au groupe `dialout` (commande détaillée dans la fiche [Dépannage STeaMi](/ressources/inovmicro-exao/depannage)), puis se déconnecter / reconnecter à la session.
:::

### Extensions MicroPython graphiques : déconseillées avec la STeaMi

Plusieurs extensions VS Code (MicroPico, Pymakr...) proposent une **interface graphique** par-dessus `mpremote` : boutons Run / Upload / REPL en barre d'état. C'est tentant pour des élèves qui découvrent la ligne de commande, mais aucune ne supporte officiellement la STeaMi à ce jour.

:::caution[MicroPico (paulober.pico-w-go) : non utilisable en classe sans patch invasif]
Cible officiellement **Raspberry Pi Pico et Pico W** ; depuis la version 4.2.0, un filtre VID/PID hardcodé refuse de se connecter à toute carte hors liste blanche, **même quand le port est forcé manuellement** via `manualComDevice` (bug upstream [paulober/MicroPico#285](https://github.com/paulober/MicroPico/issues/285), ouvert sans résolution depuis février 2025).

Le contournement consiste à modifier le bundle JavaScript de l'extension installée localement pour y ajouter les identifiants USB de la STeaMi (`0x0d28` / `0x0204`). Avec ce patch, en test pratique :

- ✓ Connexion à la carte
- ✓ Run du fichier courant (exécution éphémère)
- ✓ REPL interactif
- ✓ Autocomplétion Pylance via `micropython-stm32-stubs`
- ✗ **Upload du fichier (échec silencieux avec `Failed to execute script on Pico`)** : impossible d'installer un programme persistant via MicroPico, il faut toujours retomber sur `mpremote fs cp` en CLI.

Le patch est par ailleurs **réécrit à chaque mise à jour de l'extension**. La fonctionnalité phare pour la classe (« installer le programme en un clic, ça redémarre tout seul ») reste cassée, et le coût d'entretien est démesuré.

**Recommandation** : ne pas déployer MicroPico en classe. La voie `mpremote` en ligne de commande décrite plus haut reste le chemin garanti et stable, qui marche sans patch sur n'importe quel poste.
:::

---

## Étape 3 : Améliorer

Une fois le premier programme fonctionnel, voici quelques pistes pour aller plus loin avec VS Code.

### Tester du code en direct avec le REPL

Le REPL (`>>>` dans le terminal) permet de tester du code directement sur la carte, sans créer de fichier. Pratique pour la découverte et le débogage.

Pour ouvrir le REPL, lancez dans le terminal intégré de VS Code (`` Ctrl+` `` sur Windows/Linux, `` Cmd+` `` sur macOS ; ou Menu `Terminal > New Terminal`) :

```bash
mpremote connect auto
```

Dans les exemples ci-dessous, les `>>>` représentent l'invite MicroPython. Ne recopiez pas ces chevrons : tapez uniquement la commande qui suit l'invite.

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

| Raccourci | Effet |
| --------- | ----- |
| `Ctrl+C`  | Interrompre le programme en cours |
| `Ctrl+D`  | Redémarrage logiciel (relance `main.py`) |
| `Ctrl+X`  | Quitter le REPL et revenir au terminal |
| Flèche ↑  | Rappeler la dernière commande |

### Activer l'autocomplétion sur les modules MicroPython

Avec l'extension Python installée à l'Étape 1, Pylance reconnaît la syntaxe Python générique mais **ne connaît pas les modules MicroPython** (`machine.Pin`, `time.sleep_ms`, etc.). Résultat à l'écran : les imports sont soulignés en jaune avec « Import "machine" could not be resolved », et il n'y a pas d'autocomplétion en tapant `Pin.`.

La solution : installer des **stubs**, des descriptions des signatures de fonctions (sans implémentation) qui décrivent l'API MicroPython à Pylance. Pour la STeaMi (microcontrôleur STM32WB55), il faut le paquet **`micropython-stm32-stubs`** qui contient `machine.pyi`, `network.pyi` et les autres modules propres au port STM32. Le paquet `micropython-stdlib-stubs` seul ne suffit pas : il ne couvre que les modules empruntés à la stdlib Python (`os`, `json`, `sys`, etc.) et **ne contient pas `machine`**.

La voie la plus simple est de créer un **environnement virtuel au niveau du projet**, que VS Code détecte tout seul :

```bash
# Dans le dossier du projet, une seule fois :
python3 -m venv .venv
.venv/bin/pip install -U micropython-stm32-stubs

# Sur Windows, le chemin de pip dans le venv est différent :
# .venv\Scripts\pip install -U micropython-stm32-stubs
```

Une fois `.venv` créé, VS Code propose en pop-up de l'utiliser comme interpréteur Python du projet. Accepter, puis redémarrer VS Code. L'autocomplétion sur `from machine import Pin` puis `Pin.` s'active, et les imports ne sont plus soulignés.

Le paquet `micropython-stm32-stubs` tire automatiquement `micropython-stdlib-stubs` comme dépendance, donc une seule installation couvre tout. Le repo [josverl/micropython-stubs](https://github.com/Josverl/micropython-stubs) maintient aussi des paquets par port pour les autres cartes (`micropython-rp2-stubs` pour Pico, `micropython-esp32-stubs` pour ESP32, etc.).

:::info[Limite : pas de stubs pour les modules STeaMi]
Les modules **spécifiques à la STeaMi** (`steami_screen`, `ism330dl`, `mcp23009e`...) ne sont pas publiés sous forme de stubs à ce jour. La publication d'un paquet `micropython-steami-stubs` est suivie sur [steamicc/micropython-steami-lib#427](https://github.com/steamicc/micropython-steami-lib/issues/427). En attendant, Pylance continuera à signaler ces imports comme non résolus. Deux contournements :

- **Solution propre** : copier les fichiers `.py` du repo [micropython-steami-lib](https://github.com/steamicc/micropython-steami-lib) dans un dossier `typings/` du projet, et ajouter dans `.vscode/settings.json` :

  ```json
  {
    "python.analysis.extraPaths": ["typings"]
  }
  ```

  Pylance lit alors leurs signatures comme s'ils étaient installés.

- **Solution paresseuse** : ignorer les avertissements, le code marche très bien sur la carte (l'erreur est purement cosmétique dans l'éditeur).
:::

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

- **[VS Code (Wikipédia)](https://fr.wikipedia.org/wiki/Visual_Studio_Code)** : lancé par Microsoft en 2015, dont le code source ([Code-OSS](https://github.com/microsoft/vscode)) est publié sous licence libre MIT. La distribution **« Visual Studio Code »** officielle (téléchargée depuis code.visualstudio.com) ajoute par-dessus de la télémétrie, la marque Microsoft et quelques extensions propriétaires (comme le debugger C++) ; elle est donc sous licence Microsoft, pas MIT. Pour une version 100 % libre sans ces ajouts, voir [VSCodium](https://vscodium.com/), qui recompile Code-OSS tel quel. VS Code repose sur le framework Electron, la même technologie qui fait tourner Slack, Discord ou Spotify.
- **[Le Language Server Protocol (Wikipédia)](https://fr.wikipedia.org/wiki/Language_Server_Protocol)** : VS Code a popularisé en 2016 un format standard pour communiquer entre un éditeur et un langage de programmation (autocomplétion, détection d'erreurs, renommage). Aujourd'hui Neovim, Emacs, Sublime, IntelliJ parlent tous ce même protocole. Un exemple concret de standard utile qui émerge.
- **[L'histoire de MicroPython (Wikipédia)](https://fr.wikipedia.org/wiki/MicroPython)** : lancé en 2013 par Damien George via une campagne Kickstarter, MicroPython est une **implémentation de Python** pensée pour les systèmes embarqués, capable de tourner sur des cartes avec très peu de mémoire. C'est lui qui rend possible le code que vous venez d'exécuter sur la STeaMi.
- **[Electron (Wikipédia)](https://fr.wikipedia.org/wiki/Electron_%28framework%29)** : créé par GitHub en 2013 pour transformer une page web en application de bureau. Approche controversée (gourmande en RAM), mais qui a permis à VS Code, Slack ou Discord d'être identiques sur Windows, macOS et Linux.

### Pour s'inspirer

- **[Live Share : programmer à plusieurs sur le même écran](https://visualstudio.microsoft.com/services/live-share/)** : extension officielle Microsoft qui permet à plusieurs personnes d'éditer le même fichier dans VS Code en temps réel, comme un Google Docs du code. Pratique pour s'entraider en classe ou demander un coup de main à distance.
- **[mpremote, la télécommande des cartes MicroPython](https://docs.micropython.org/en/latest/reference/mpremote.html)** : la commande utilisée dans cette fiche pilote tout un écosystème : STeaMi, BBC micro:bit, ESP32, Raspberry Pi Pico, Pyboard. Une seule syntaxe pour une demi-douzaine de cartes différentes.
- **[Editor war (Wikipédia anglais)](https://en.wikipedia.org/wiki/Editor_war)** : depuis les années 80, les développeurs s'opposent en deux camps autour de leur choix d'éditeur (vim vs Emacs, puis tous les autres). Une « guerre » mi-sérieuse mi-amusée qui a duré 40 ans, jusqu'à ce que VS Code finisse par mettre presque tout le monde d'accord. Les outils façonnent les communautés. (La page Wikipédia n'existe qu'en anglais à ce jour.)
- **[GitHub Copilot (Wikipédia)](https://fr.wikipedia.org/wiki/GitHub_Copilot)** : l'extension VS Code qui propose en temps réel des suggestions de code générées par une IA. Gratuite pour les enseignant·es et les élèves via [GitHub Education](https://education.github.com/). Outil clivant (aide ou triche ?) à tester en classe pour se forger une opinion.

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
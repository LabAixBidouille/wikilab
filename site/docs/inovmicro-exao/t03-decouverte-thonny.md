---
id: t03-decouverte-thonny
title: "Prendre en main MicroPython avec Thonny"
sidebar_label: "Prendre en main MicroPython avec Thonny"
sidebar_position: 3
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>
<div style={{flex: 1}}>
# Prendre en main MicroPython avec Thonny
<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--info">SteaMi</span>
  <span className="badge badge--warning">MicroPython</span>
  <span className="badge badge--secondary">Thonny</span>
</div>
| Projet        | Durée   | Difficulté | Âge       | Logiciel STeaMi testé |
| ------------- | ------- | ---------- | --------- | --------------------- |
| I-Novmicro #2 | 40 min  | Débutant   | 11-99 ans | 0.23.1                |

## Matériel et Montage

- 1 carte STeaMi
- 1 câble USB de données (micro-USB pour la STeaMi V1, USB-C pour la STeaMi V2). Attention : un câble qui ne sert qu'à charger un téléphone ne fonctionnera pas.
- 1 ordinateur sous Windows, macOS ou Linux
- [Thonny](https://thonny.org/) installé (version 4.x ou supérieure)
- Le programme MicroPython STeaMi `.hex` ([dernière release](https://github.com/steamicc/micropython-steami-lib/releases))

<PdfLink href="/pdf/inovmicro-exao/STeaMi_Thonny.pdf">Télécharger en PDF</PdfLink>

</div>
<img src="/img/ressources/inovmicro-exao/t03-decouverte-thonny/Thonny.png" alt="Logo Thonny" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />
</div>
---

## De quoi parle-t-on ?

Programmer une carte microcontrôleur peut sembler intimidant : plusieurs logiciels à installer, environnement à configurer, code à envoyer vers la carte...
**Thonny** est un éditeur Python conçu pour l'apprentissage qui simplifie cette mise en route. Couplé à **MicroPython** : une version de Python adaptée aux cartes électroniques, une fois installé sur la STeaMi, il offre un environnement **gratuit et hors-ligne** où l'on peut écrire du code, le tester en direct dans le **REPL** (une fenêtre de dialogue où l'on tape une instruction et la carte y répond immédiatement), et déboguer pas-à-pas.

Cette fiche met en place tout l'environnement de travail : installation de Thonny, installation de MicroPython sur la carte, configuration de la communication entre Thonny et la carte, et écriture d'un premier programme qui pilote la **LED RGB** de la STeaMi avec ses **boutons A et B**. À privilégier en salle informatique avec postes fixes ; pour des postes verrouillés ou en mobilité, préférer **Vittascience** (en ligne).

Thonny n'est qu'un choix parmi d'autres : tout éditeur compatible MicroPython (Mu, VS Code, Vittascience, mpremote, etc.) permet de programmer la STeaMi de la même façon. Cette fiche s'appuie sur Thonny pour fixer les idées, mais la démarche reste valable sur d'autres outils.

---

## Objectifs d'apprentissage

- Comprendre le principe de la programmation embarquée : un programme écrit sur l'ordinateur est envoyé à la carte, qui l'exécute ensuite par elle-même
- Distinguer le rôle de l'éditeur (Thonny), du langage (MicroPython) et de la carte (STeaMi)
- Installer Thonny et MicroPython, puis les configurer pour qu'ils dialoguent avec la STeaMi
- Écrire et exécuter un premier programme MicroPython qui interagit avec le matériel (LED, boutons)
- Découvrir le REPL pour tester du code en direct sans créer de fichier, et distinguer exécution temporaire (Run) et programme persistant (`main.py`)
---

## Étape 1 : Construire

Ici, "construire" veut dire mettre en place l'environnement logiciel : installer Thonny, installer MicroPython sur la carte, et configurer la communication entre les deux.

### Installer Thonny

**Windows / macOS** : télécharger l'installeur sur [thonny.org](https://thonny.org/), lancer le fichier, suivre l'assistant. Ouvrir Thonny depuis le menu Démarrer ou le Launchpad.

**Linux (Debian / Ubuntu)** :

```bash
# Via les dépôts de la distribution (recommandé pour un public débutant)
sudo apt install thonny

# Ou via pipx pour avoir la dernière version
# (pipx doit être installé au préalable :
#  sudo apt install pipx && pipx ensurepath)
pipx install thonny
```

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/t03-decouverte-thonny/01-thonny-premier-lancement.png"
    alt="Fenêtre principale de Thonny au premier démarrage"
    style={{maxWidth: '100%', height: 'auto'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    Thonny au premier lancement : éditeur en haut, **panneau Shell** en bas. C'est la console interactive de MicroPython (aussi appelée **REPL**, pour _Read-Eval-Print Loop_) où l'on peut taper une commande et voir la carte y répondre immédiatement.
  </figcaption>
</figure>

### Installer MicroPython sur la STeaMi

:::info[Étape éventuellement déjà faite]

Une STeaMi sortie d'usine est en général livrée avec MicroPython déjà installé. Si après l'étape suivante (*Configurer Thonny pour la STeaMi*) l'invite `>>>` apparaît dans le Shell de Thonny (le signe en début de ligne qui indique que MicroPython attend une commande, équivalent du mot anglais « prompt »), cette étape d'installation est déjà faite : passez directement à la section suivante.

:::

Grâce à un mode "clé USB" préinstallé en usine, la STeaMi se présente comme une **clé USB** : installer MicroPython revient à un simple glisser-déposer.

1. **Brancher** la STeaMi en USB (câble de données, pas un câble de charge seul).
2. La carte apparaît comme un disque amovible nommé `STEAMI`.
3. **Télécharger** le fichier `steami-micropython-firmware-vX.Y.Z.hex` depuis les [releases](https://github.com/steamicc/micropython-steami-lib/releases).
4. **Glisser-déposer** le `.hex` sur le disque `STEAMI`.
5. La LED de statut clignote pendant l'écriture (~5 à 15 s), puis la carte **redémarre** avec MicroPython. **Ne pas débrancher la carte pendant le clignotement** : attendre la fin du redémarrage.

:::info[Attention au bon fichier]

Ne pas confondre `steami-micropython-firmware-...hex` avec `steami-daplink-firmware-...hex`, qui est un autre fichier sans rapport avec MicroPython (c'est le logiciel de l'interface de programmation, pas celui qui exécute vos programmes Python). Bien choisir celui dont le nom commence par `steami-micropython-firmware-`.

:::

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

### Configurer Thonny pour la STeaMi
Si Thonny démarre en anglais : **Tools > Options > onglet General > Language: Français**, puis redémarrer Thonny. La suite utilise les libellés français.

1. Ouvrir Thonny.
2. **Outils > Options... > onglet Interpréteur** (le terme employé par Thonny pour désigner l'appareil sur lequel le code va s'exécuter).
3. Liste **Quel interpréteur ou appareil utiliser** : choisir **MicroPython (generic)**.
4. **Port** (la prise par laquelle l'ordinateur dialogue avec la carte) : sélectionner celui de la STeaMi.
   - Linux : `/dev/ttyACM0`
   - macOS : `/dev/cu.usbmodemXXXX`
   - Windows : `COM3`, `COM4`, etc.
5. Cliquer **OK**.
:::info[Identifier le bon port]

- **Windows** : si plusieurs ports `COM` apparaissent, ouvrir le **Gestionnaire de périphériques** (clic droit sur le menu Démarrer), section **Ports (COM et LPT)**. Brancher/débrancher la STeaMi pour repérer celui qui apparaît et disparaît.
- **Linux** : en cas d'erreur `Permission denied` sur le port série, ajouter l'utilisateur au groupe `dialout` avec la commande ci-dessous, puis se déconnecter / se reconnecter (ou redémarrer la session) pour que le changement prenne effet.
```bash
sudo usermod -aG dialout $USER
```

:::

Le panneau **Shell** affiche alors :

```
MicroPython v1.XX.X on YYYY-MM-DD; STeaMi with STM32WB55RG
Type "help()" for more information.
>>>
```

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/t03-decouverte-thonny/03-thonny-options-interpreter.png"
    alt="Fenêtre des options de Thonny avec le sélecteur d'interpréteur MicroPython"
    style={{maxWidth: '100%', height: 'auto'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    Outils > Options > Interpréteur : choisir « MicroPython (generic) » et le port de la STeaMi.
  </figcaption>
</figure>
<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/t03-decouverte-thonny/04-thonny-repl-prompt.png"
    alt="Invite MicroPython >>> dans le Shell de Thonny"
    style={{maxWidth: '100%', height: 'auto'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    L'invite >>> confirme que Thonny dialogue avec MicroPython sur la STeaMi.
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
# Premier programme STeaMi avec Thonny, LED RGB + boutons A/B
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

### Fonctionnement du programme

- **Préparation des composants.** Les premières lignes donnent un nom à chaque élément et précisent comment on l'utilise. `Pin('LED_RED', Pin.OUT)` déclare la LED rouge en **sortie** (la carte lui envoie une valeur pour l'allumer ou l'éteindre), tandis que `Pin('A_BUTTON', Pin.IN)` déclare le bouton A en **entrée** (la carte lit sa valeur). On répète l'opération pour les trois LED et les deux boutons.
- **La fonction `set_rgb`.** Plutôt que de réécrire trois lignes à chaque fois, on regroupe l'allumage des trois LED dans une petite fonction : `set_rgb(1, 0, 0)` allume le rouge et éteint les deux autres.
- **La boucle.** `while True` répète sans fin. À chaque tour, le programme lit l'état des deux boutons, allume la couleur correspondante, puis fait une courte pause `sleep_ms(20)`. La boucle tourne ainsi environ 50 fois par seconde : assez vite pour que la réponse paraisse instantanée, assez doucement pour ne pas surcharger la carte.

### Exécution

- **Test rapide** : bouton **Run** (▶) ou `F5`. Le code s'exécute sur la carte sans être sauvegardé.
- **Programme persistant** : **Fichier > Enregistrer sous... > MicroPython device**, et nommer le fichier **`main.py`**. Il sera relancé à chaque démarrage de la carte.

:::info[Un programme est déjà en cours d'exécution]

Quand un programme est déjà en cours d'exécution sur la carte (par exemple un `main.py` précédemment enregistré), Thonny refuse de lancer le suivant : il faut d'abord l'interrompre avec **`Ctrl+C`** dans le panneau Shell, ou cliquer sur le bouton **Stop** (■).

:::
<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/t03-decouverte-thonny/05-thonny-editeur-code.png"
    alt="Programme LED RGB + boutons ouvert dans l'éditeur de Thonny"
    style={{maxWidth: '100%', height: 'auto'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    Le programme dans l'éditeur de Thonny, prêt à être exécuté avec F5.
  </figcaption>
</figure>
<div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', margin: '1rem auto'}}>
  <figure style={{textAlign: 'center', margin: 0, flex: '1 1 200px', maxWidth: '300px'}}>
    <img
      src="/img/ressources/inovmicro-exao/t03-decouverte-thonny/06-steami-led-rouge.jpeg"
      alt="STeaMi avec LED RGB allumée en rouge (bouton A)"
      style={{maxWidth: '100%', height: 'auto'}}
    />
    <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
      Bouton A : LED rouge.
    </figcaption>
  </figure>
  <figure style={{textAlign: 'center', margin: 0, flex: '1 1 200px', maxWidth: '300px'}}>
    <img
      src="/img/ressources/inovmicro-exao/t03-decouverte-thonny/07-steami-led-verte.jpeg"
      alt="STeaMi avec LED RGB allumée en vert (bouton B)"
      style={{maxWidth: '100%', height: 'auto'}}
    />
    <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
      Bouton B : LED verte.
    </figcaption>
  </figure>
  <figure style={{textAlign: 'center', margin: 0, flex: '1 1 200px', maxWidth: '300px'}}>
    <img
      src="/img/ressources/inovmicro-exao/t03-decouverte-thonny/08-steami-led-bleue.jpeg"
      alt="STeaMi avec LED RGB allumée en bleu (boutons A + B)"
      style={{maxWidth: '100%', height: 'auto'}}
    />
    <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
      A + B : LED bleue.
    </figcaption>
  </figure>
</div>

---

## Étape 3 : Améliorer

Une fois le premier programme fonctionnel, trois pistes pour aller plus loin avec Thonny.

### Tester du code en direct avec le REPL

Le **REPL** (`>>>` dans le panneau Shell) permet de tester du code **directement sur la carte**, sans créer de fichier. Pratique pour la découverte et le débogage.

Dans l'exemple ci-dessous, les `>>>` représentent l'invite, c'est ce que Thonny affiche pour signaler qu'il attend une commande. Ne recopiez pas ces chevrons : tapez uniquement la commande qui suit l'invite.

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

| Raccourci | Effet                                  |
| --------- | -------------------------------------- |
| `Ctrl+C`  | Interrompre le programme en cours      |
| `Ctrl+D`  | Redémarrage logiciel (relance `main.py`) |
| Flèche ↑  | Rappeler la dernière commande          |

### Déboguer pas-à-pas

Thonny propose un débogueur intégré, particulièrement adapté à l'enseignement :

1. Cliquer dans la marge à gauche d'une ligne pour poser un **point d'arrêt**.
2. **Run > Debug current script** (`Ctrl+F5`).
3. Avancer avec **Step over** (`F6`), **Step into** (`F7`), **Step out** (`F8`).
4. Observer les variables dans le panneau **Variables**.
:::info[Limite à connaître]

Le debugger Thonny est plus efficace en local sur le PC qu'en cible embarquée. Pour des programmes qui interagissent beaucoup avec le matériel, le `print()` dans le REPL reste souvent plus pratique.

:::

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/t03-decouverte-thonny/09-thonny-debug-pas-a-pas.png"
    alt="Session de débogage pas-à-pas dans Thonny avec point d'arrêt et panneau Variables"
    style={{maxWidth: '100%', height: 'auto'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    Point d'arrêt posé dans la marge ; le panneau Variables suit l'état du programme à chaque pas.
  </figcaption>
</figure>

### Dépanner les erreurs courantes

La plupart des problèmes rencontrés en classe ne sont pas spécifiques à Thonny mais touchent le matériel ou l'environnement MicroPython (câble, port série, programme bloqué). Ils sont regroupés sur la page transverse [Dépanner la STeaMi](/ressources/inovmicro-exao/depannage), qui couvre :

- la carte qui n'apparaît pas comme disque `STEAMI` (câble) ;
- le port série introuvable ou avec accès refusé (Windows / Linux) ;
- la console vide après connexion (MicroPython pas installé) ;
- `Couldn't find the device` (plusieurs cartes branchées) ;
- `Device is busy` (programme déjà en cours) ;
- un `main.py` qui redémarre en boucle.

---

## Aller plus loin

### Pour s'inspirer

- **[MOOC FUN, Programmer un objet avec MicroPython](https://www.fun-mooc.fr/fr/cours/programmer-un-objet-avec-micropython/)** : un cours en ligne gratuit (CC-BY-SA) qui couvre les bases de MicroPython sur Pyboard / ESP32 / micro:bit. Idéal en complément pour s'approprier le langage et son écosystème, avant de l'enseigner.
- **[L'histoire de MicroPython](https://fr.wikipedia.org/wiki/MicroPython)** : lancé en 2013 par Damien George via une campagne Kickstarter, MicroPython est une **implémentation de Python** pensée pour les systèmes embarqués, un interpréteur compact capable de tourner sur des cartes avec très peu de mémoire, qui a démocratisé Python sur microcontrôleur.
- **[Thonny, pensé pour l'enseignement](https://thonny.org/)** : conçu par Aivar Annamaa (Université de Tartu) pour rendre Python accessible aux débutant·es. Visualisation pas-à-pas des variables, débogueur didactique, installation sans dépendance.

### Pour approfondir

Documentation technique pour préparer une séquence ou répondre aux questions des élèves :

- **[Site STeaMi](https://www.steami.cc/)** : présentation matérielle
- **[Wiki STeaMi : Thonny](https://wiki.steami.cc/docs/software/micropython/thonny)**
- **[Wiki STeaMi : Premiers pas](https://wiki.steami.cc/docs/software/getting-started)**
- **[Wiki STeaMi : Hardware](https://wiki.steami.cc/docs/hardware/)** : pinout détaillé
- **[Drivers MicroPython STeaMi](https://github.com/steamicc/micropython-steami-lib)** : code source des modules `steami_*`
- **[Documentation MicroPython](https://docs.micropython.org/)** : référence complète du langage et des modules
---

_Cette fiche fait partie du projet [I-Novmicro #2 : Action EXAO](/projets/inovmicro-exao). Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr). Informations basées sur la [documentation officielle STeaMi](https://wiki.steami.cc/)._

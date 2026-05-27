---
id: t06-bases-micropython
title: "Bases du langage : Prise en main de MicroPython"
sidebar_label: "Bases du langage"
sidebar_position: 6
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>
<div style={{flex: 1}}>
# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="3" y="4" width="18" height="14" rx="2" fill="#8a6e18" opacity="0.1"/><rect x="3" y="4" width="18" height="3" rx="1" fill="#8a6e18" opacity="0.3"/><circle cx="5.5" cy="5.5" r="0.5" fill="#8a6e18"/><circle cx="7" cy="5.5" r="0.5" fill="#8a6e18"/><circle cx="8.5" cy="5.5" r="0.5" fill="#8a6e18"/><polyline points="6,11 8,13 6,15" fill="none" stroke="#8a6e18" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><polyline points="9,11 11,13 9,15" fill="none" stroke="#8a6e18" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><line x1="13" y1="15" x2="18" y2="15" stroke="#8a6e18" strokeWidth="1.2" strokeLinecap="round"/><line x1="6" y1="20" x2="18" y2="20" stroke="#8a6e18" strokeWidth="1.5" strokeLinecap="round"/><line x1="12" y1="18" x2="12" y2="20" stroke="#8a6e18" strokeWidth="1.5"/></svg> Bases du langage : Prise en main de MicroPython
<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--info">SteaMi</span>
  <span className="badge badge--warning">MicroPython</span>
</div>

| Projet        | Durée  | Difficulté | Âge       | Logiciel STeaMi testé |
| ------------- | ------ | ---------- | --------- | --------------------- |
| I-Novmicro #2 | 40 min | Débutant   | 11-99 ans | 0.23.1                |

## Matériel et Montage

- 1 carte STeaMi
- 1 câble USB de données (micro-USB pour la STeaMi V1, USB-C pour la STeaMi V2). Attention : un câble qui ne sert qu'à charger un téléphone ne fonctionnera pas.
- 1 ordinateur sous Windows, macOS ou Linux
- Un IDE compatible MicroPython : [Thonny](/ressources/inovmicro-exao/t03-decouverte-thonny), Mu, [VS Code](/ressources/inovmicro-exao/t04-vscode), Vittascience, ou tout autre éditeur capable d'ouvrir une console série.

</div>
<img src="/img/ressources/inovmicro-exao/t06-bases-micropython/icone.png" alt="Logo MicroPython" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />
</div>

---

## De quoi parle-t-on ?

Vous avez peut-être déjà entendu parler du **langage Python** : c'est l'un des langages de programmation les plus utilisés au monde, qu'on retrouve dans le développement de sites web (Instagram, Spotify), en sciences (analyse de données, intelligence artificielle), à la NASA pour des simulations, ou encore dans les outils de la station spatiale internationale. Si vous avez vu un personnage de série faire défiler du code, il y a une chance sur trois que ce soit du Python.

**MicroPython** est une variante de Python adaptée aux **microcontrôleurs**, ces petits ordinateurs intégrés à la STeaMi et à beaucoup d'objets connectés. Le langage de tous les jours, mais en version compacte, capable de tourner avec très peu de mémoire et de piloter directement le matériel (LED, capteurs, écrans...).

Cette fiche pose les briques du langage : **variables, conditions, boucles, fonctions**. Elle démarre par une **exploration interactive** de l'environnement MicroPython déjà installé sur la STeaMi, à l'aide du **REPL**, avant d'introduire chaque notion sur un exemple. Le tout se conclut par un mini jeu de pile ou face joué avec la LED RGB et les boutons A/B de la carte.

:::info[Composants intégrés, rien à câbler]
Le programme final pilote la LED RGB et lit les boutons A et B de la STeaMi. Ces composants sont déjà soudés à la carte : aucun câblage externe à faire.
:::

---

## Objectifs d'apprentissage

À la fin de cette activité, l'élève sera capable de :

- **Distinguer** les principaux types de variables Python (entier, décimal, chaîne de caractères, booléen, **liste**) et les combiner avec les opérateurs du langage (arithmétiques, de comparaison, logiques).
- **Écrire** une condition `if`/`elif`/`else` qui adapte le comportement du programme à une situation.
- **Construire** une boucle `for` ou `while` pour répéter une action sans dupliquer le code.
- **Définir** une fonction qui encapsule une suite d'instructions réutilisable, avec ou sans paramètres.
- **Explorer** le REPL pour tester une instruction sur la carte sans écrire de fichier complet, et **identifier** les modules déjà disponibles sur la STeaMi (`machine`, `time`, `random`, drivers internes).
- **Adapter** ces briques pour écrire d'autres petits programmes interactifs sur la STeaMi (chronomètre, jeu de réflexes, signalétique...).

---

## Étape 1 : Construire

Pour cette fiche, « construire » veut dire poser les briques du langage. On commence par une exploration interactive de la carte via le REPL, puis on parcourt les quatre notions de base : variables, conditions, boucles, fonctions.

### Explorer la STeaMi via le REPL

Avant de plonger dans la syntaxe, regardons **ce qui tourne déjà** sur la STeaMi quand on la branche. La réponse passe par le **REPL** (de l'anglais _Read-Eval-Print Loop_, « boucle Lecture-Évaluation-Affichage »), une console interactive qui s'exécute directement sur la carte.

Le REPL est l'équivalent embarqué des consoles que vous connaissez peut-être : le terminal de macOS / Linux, l'invite de commandes de Windows. La différence : ici, **chaque ligne tapée est exécutée par le microcontrôleur lui-même**, pas par l'ordinateur. La carte devient un Python miniature, prête à répondre.

Brancher la STeaMi en USB, lancer la console MicroPython depuis l'IDE choisi, et l'invite `>>>` apparaît : la carte attend une instruction.

:::info[`>>>` est l'invite du REPL, pas du code à recopier]
Dans les exemples ci-dessous, les chevrons `>>>` sont **affichés par MicroPython** pour signaler qu'il attend une commande. Ne les tapez pas, écrivez seulement ce qui suit.
:::

#### Inspecter ce qui est déjà chargé

Trois commandes complémentaires permettent d'explorer ce qui est disponible :

```python
>>> dir()
['__name__', 'machine']
```

`dir()` sans argument liste ce qui est **déjà chargé** en mémoire au démarrage : peu de choses. La carte n'a pas encore importé quoi que ce soit, mais le module `machine` est rendu disponible d'office.

```python
>>> help('modules')
__main__          bq27441/__init__  json              ssd1327/device
_asyncio          bq27441/const     lis2mdl/__init__  steami_config/__init__
_onewire          bq27441/device    lis2mdl/const     steami_config/device
aioble/__init__   bq27441/exceptions                  lis2mdl/device    steami_screen/__init__
aioble/central    builtins          logging           steami_screen/colors
aioble/client     cbor2/__init__    machine           steami_screen/device
aioble/core       cbor2/_decoder    math              steami_screen/ssd1327
aioble/device     cbor2/_encoder    mcp23009e/__init__                  stm
aioble/l2cap      cmath             mcp23009e/active_low_pin            struct
aioble/peripheral collections       mcp23009e/const   sys
aioble/security   daplink_bridge/__init__             mcp23009e/device  time
aioble/server     daplink_bridge/const                mcp23009e/pin     time
apds9960/__init__ daplink_bridge/device               micropython       uasyncio
apds9960/const    daplink_flash/__init__              network           uctypes
apds9960/device   daplink_flash/const                 onewire           vfs
apds9960/exceptions                 daplink_flash/device                os                vl53l1x/__init__
array             deflate           platform          vl53l1x/const
asyncio/__init__  dht               pyb               vl53l1x/device
asyncio/core      errno             random            wsen_hids/__init__
asyncio/event     framebuf          re                wsen_hids/const
asyncio/funcs     gc                select            wsen_hids/device
asyncio/lock      hashlib           senml/__init__    wsen_hids/exceptions
asyncio/stream    heapq             senml/senml_base  wsen_pads/__init__
binascii          hts221            senml/senml_pack  wsen_pads/const
bluetooth         io                senml/senml_record                  wsen_pads/device
bme280/__init__   ism330dl/__init__ senml/senml_unit  wsen_pads/exceptions
bme280/const      ism330dl/const    socket
bme280/device     ism330dl/device   ssd1327/__init__
bme280/exceptions ism330dl/exceptions                 ssd1327/const
Plus any modules on the filesystem
```

`help('modules')` liste tout ce qui est **disponible à l'import**. On y retrouve les classiques Python (`time`, `random`, `os`, `json`, `math`...) mais aussi les **drivers spécifiques à la STeaMi** (`steami_screen` pour l'écran OLED, `ism330dl` pour l'accéléromètre, `hts221` pour la température et l'humidité, `apds9960` pour la lumière, `vl53l1x` pour la distance, `lis2mdl` pour le magnétomètre, `mcp23009e` pour les boutons directionnels). Ces drivers ne sont pas magiques, ce sont des modules Python comme les autres, simplement déjà compilés dans MicroPython.

Une fois un module choisi, `dir(module)` zoome sur son contenu :

```python
>>> import machine
>>> dir(machine)
['__class__', '__name__', 'ADC', 'DEEPSLEEP_RESET', 'HARD_RESET', 'I2C', 'I2CTarget', 'PWM', 'PWRON_RESET', 'Pin', 'RTC', 'SOFT_RESET', 'SPI', 'Signal', 'SoftI2C', 'SoftSPI', 'Timer', 'UART', 'WDT', 'WDT_RESET', '__dict__', 'bitstream', 'bootloader', 'deepsleep', 'dht_readinto', 'disable_irq', 'enable_irq', 'freq', 'idle', 'info', 'lightsleep', 'mem16', 'mem32', 'mem8', 'reset', 'reset_cause', 'rng', 'sleep', 'soft_reset', 'time_pulse_us', 'unique_id']
```

Et `help(element)` donne l'aide intégrée sur un objet précis :

```python
>>> help(machine.Pin)
object <class 'Pin'> is of type type
  init -- <function>
  value -- <function>
  off -- <function>
  on -- <function>
  irq -- <function>
  low -- <function>
  high -- <function>
  name -- <function>
  names -- <function>
  af_list -- <function>
  port -- <function>
  pin -- <function>
  gpio -- <function>
  mode -- <function>
  pull -- <function>
  af -- <function>
  mapper -- <classmethod>
...
```

#### Tester une commande à la volée

```python
>>> from machine import Pin
>>> led_rouge = Pin('LED_RED', Pin.OUT)
>>> led_rouge.on()           # LED rouge allumée
>>> led_rouge.off()          # éteinte
>>> 2 + 3 * 5                # MicroPython est aussi une calculatrice
17
>>> "Bonjour " + "STeaMi"
'Bonjour STeaMi'
```

Tout ce qui suit dans cette fiche peut être testé d'abord ligne par ligne dans le REPL avant d'être assemblé en programme dans un fichier.

#### Raccourcis utiles dans le REPL

| Raccourci  | Effet                                                              |
| ---------- | ------------------------------------------------------------------ |
| `Ctrl+C`   | Interrompre le programme en cours (utile en cas de boucle infinie) |
| `Ctrl+D`   | Redémarrer l'interpréteur (relance `main.py` s'il y en a un)       |
| `Flèche ↑` | Rappeler la dernière commande tapée                                |
| `Tab`      | Autocomplétion sur les noms disponibles                            |

:::info[Le REPL et les fichiers, deux modes complémentaires]
Le REPL est parfait pour **explorer**, tester une idée, valider une formule à la volée. Les **fichiers** (typiquement `main.py`) sont nécessaires dès qu'on veut un programme **persistant** qui se relance au démarrage de la carte, sans connexion à un ordinateur. La suite de cette fiche bascule progressivement du REPL vers les fichiers.
:::

### Les variables

Une **variable** est une « boîte » nommée qui contient une valeur. En MicroPython, comme en Python, il existe plusieurs **types** de variables, chacun adapté à un usage différent :

| Type de variable               | Description                              | Exemple    |
| ------------------------------ | ---------------------------------------- | ---------- |
| Entier (`int`)                 | Représente un nombre entier              | `5`        |
| Décimal (`float`)              | Représente un nombre à virgule           | `3.14`     |
| Chaîne de caractères (`str`)   | Représente du texte                      | `"Alice"`  |
| Booléen (`bool`)               | Représente une valeur vraie ou fausse    | `True`     |

Pour créer une variable en MicroPython, il suffit de lui donner un nom et de lui attribuer une valeur avec le signe égal `=`. À tester dans le REPL :

```python
>>> age = 15
>>> prix = 3.50
>>> prenom = "Nathan"
>>> vivant = True
>>> print(age, prix, prenom, vivant)
15 3.5 Nathan True
```

Pour mélanger du texte fixe et des valeurs de variables dans un même affichage, le plus pratique est la **f-string** (« formatted string ») : on préfixe la chaîne d'un `f` et on insère les variables entre accolades `{}`.

```python
>>> print(f"Bonjour {prenom}, vous avez {age} ans.")
Bonjour Nathan, vous avez 15 ans.
>>> print(f"Avec la TVA, le prix devient {prix * 1.20} €.")
Avec la TVA, le prix devient 4.2 €.
```

:::info[Typage dynamique : un atout à manier avec prudence]
En MicroPython, une variable peut **changer de type** en cours de programme (`age = 15` puis `age = "quinze"` est accepté). C'est ce qu'on appelle le **typage dynamique** : pratique pour bricoler vite, dangereux pour la lisibilité. Convention : **garder le même type tout au long de la vie d'une variable**. Si vous avez besoin d'autre chose, créez une nouvelle variable au nom explicite.
:::

Quand on a besoin de **changer volontairement** le type d'une valeur (par exemple lire un nombre saisi par l'utilisateur, qui arrive toujours sous forme de chaîne de caractères), Python propose des fonctions de **conversion** :

```python
>>> int("15")           # str -> int
15
>>> float("3.14")       # str -> float
3.14
>>> str(15)             # int -> str
'15'
>>> int(3.7)            # float -> int (tronque vers 0, ne pas confondre avec round())
3
>>> bool(0), bool(1)    # int -> bool (0 = False, tout le reste = True)
(False, True)
```

Une conversion impossible (`int("abc")`) lève une erreur ; on apprendra plus tard à les attraper avec `try / except`.

### Les opérateurs

Les **opérateurs** sont les symboles qui combinent les valeurs. Python en propose quatre familles utiles dès les premiers programmes :

| Famille     | Opérateurs                       | Exemple                              |
| ----------- | -------------------------------- | ------------------------------------ |
| Arithmétique | `+ - * / // % **`                | `7 // 2` vaut `3`, `7 % 2` vaut `1`  |
| Comparaison | `== != < > <= >=`                | `age >= 18` renvoie `True` ou `False` |
| Logique     | `and` `or` `not`                 | `age >= 13 and age < 18` (adolescent) |
| Affectation | `= += -= *= /=`                  | `compteur += 1` équivaut à `compteur = compteur + 1` |

À tester dans le REPL :

```python
>>> 10 + 3 * 2              # priorités habituelles : * avant +
16
>>> 10 / 3                  # division flottante : résultat décimal
3.3333333333333335
>>> 10 // 3                 # division entière : on garde la partie entière
3
>>> 10 % 3                  # modulo : reste de la division entière
1
>>> 2 ** 8                  # puissance : 2 à la puissance 8
256
>>> age = 15
>>> age >= 13 and age < 18  # combinaison logique
True
>>> not (age == 15)         # négation
False
```

Quelques pièges classiques :

- **`=` versus `==`** : `=` _affecte_ une valeur à une variable (`age = 15`), `==` _compare_ deux valeurs (`age == 15`). Confondre les deux est l'erreur la plus fréquente des débutant·es.
- **Division `/` versus `//`** : `7 / 2` vaut `3.5` (flottant), `7 // 2` vaut `3` (entier). Utile à connaître quand on travaille avec des index ou des compteurs.

### Les listes

Une **liste** regroupe plusieurs valeurs dans une même variable, **dans un ordre défini**. C'est la structure de données la plus utilisée en Python, et celle qu'on retrouve dans le programme de l'Étape 2 (`['rouge', 'bleu']`).

```python
>>> couleurs = ['rouge', 'bleu', 'vert']
>>> couleurs
['rouge', 'bleu', 'vert']
>>> len(couleurs)             # nombre d'éléments
3
>>> couleurs[0]               # accès par index, le premier élément est en position 0
'rouge'
>>> couleurs[-1]              # un index négatif compte depuis la fin
'vert'
>>> couleurs.append('jaune')  # ajouter un élément à la fin
>>> couleurs
['rouge', 'bleu', 'vert', 'jaune']
>>> 'bleu' in couleurs        # tester l'appartenance
True
```

Une liste peut contenir n'importe quel type de valeur, voire mélanger des types (`[1, "deux", 3.0, True]`), même si en pratique on garde des éléments de **même nature**.

On parcourt une liste avec une boucle `for`, sans avoir besoin de gérer un index à la main :

```python
>>> for couleur in couleurs:
...     print(f"Une couleur : {couleur}")
Une couleur : rouge
Une couleur : bleu
Une couleur : vert
Une couleur : jaune
```

C'est ce que fera implicitement `random.choice(['rouge', 'bleu'])` dans le jeu de l'Étape 2 : il pioche un élément au hasard parmi ceux de la liste.

### Les conditions

Les **conditions** permettent d'adapter le comportement du programme à une situation : si telle valeur est dépassée, faire ceci, sinon faire cela.

| Mot-clé         | Effet                                                                       |
| --------------- | --------------------------------------------------------------------------- |
| `if` (si)       | Exécute le bloc qui suit si la condition est vraie.                         |
| `elif` (sinon si) | Testé si toutes les conditions précédentes étaient fausses.                |
| `else` (sinon)  | Exécute son bloc si aucune des conditions précédentes n'était vraie.        |

Exemple : trier une note sur 20.

```python
note = 15

if note >= 16:
    print("Très bien")
elif note >= 12:
    print("Bien")
elif note >= 10:
    print("Passable")
else:
    print("Insuffisant")
```

L'**indentation** (les espaces en début de ligne) n'est pas décorative en Python : c'est elle qui dit ce qui appartient au bloc `if`/`elif`/`else`. Convention : 4 espaces (la plupart des éditeurs le font automatiquement quand vous appuyez sur `Tab`).

### Les boucles

Les **boucles** répètent un bloc d'instructions plusieurs fois, sans avoir à le recopier.

| Mot-clé         | Effet                                                                      |
| --------------- | -------------------------------------------------------------------------- |
| `for` (pour)    | Répète un bloc un **nombre de fois défini à l'avance**.                    |
| `while` (tant que) | Répète un bloc **tant qu'une condition reste vraie**.                   |

```python
# Boucle for : afficher les nombres 0 à 4
for i in range(5):
    print(i)

# Boucle while : compter jusqu'à 5
compteur = 0
while compteur < 5:
    print(compteur)
    compteur += 1
```

Une boucle `while` mal écrite peut tourner indéfiniment ; `Ctrl+C` dans le REPL interrompt l'exécution.

### Les fonctions

Une **fonction** est un bloc d'instructions auquel on donne un nom, pour pouvoir le **réutiliser** ailleurs dans le programme. C'est l'outil principal pour éviter de répéter du code et garder un programme lisible.

```python
# Définition de la fonction
def saluer(prenom):
    print(f"Bonjour, {prenom} !")

# Appel de la fonction, avec deux prénoms différents
saluer("Alice")
saluer("Bob")
```

Une fonction peut aussi **retourner** une valeur avec `return`, qu'on récupère dans la variable de son choix :

```python
def aire_rectangle(largeur, hauteur):
    return largeur * hauteur

surface = aire_rectangle(4, 5)
print(surface)   # 20
```

---

## Étape 2 : Programmer

Avec ces quatre briques (variables, conditions, boucles, fonctions), on a déjà de quoi écrire un petit programme **interactif** sur la STeaMi. On va construire un **jeu de pile ou face** : l'élève choisit une couleur avec un bouton (rouge pour A, bleu pour B), la carte tire une couleur au hasard, et on compare.

### Broches utilisées

| Composant     | Nom de broche STeaMi | Variable Python | Comportement             |
| ------------- | -------------------- | --------------- | ------------------------ |
| LED RGB Rouge | `LED_RED`            | `led_rouge`     | 1 = allumée, 0 = éteinte |
| LED RGB Bleue | `LED_BLUE`           | `led_bleue`     | 1 = allumée, 0 = éteinte |
| Bouton A      | `A_BUTTON`           | `bouton_a`      | 0 = appuyé, 1 = relâché  |
| Bouton B      | `B_BUTTON`           | `bouton_b`      | 0 = appuyé, 1 = relâché  |

### Programme

```python
# Testée avec firmware STeaMi 0.23.1
#
# Jeu de pile ou face avec la LED RGB et les boutons A/B :
# l'élève choisit une couleur (A = rouge, B = bleu), la carte
# en tire une au hasard, et on compare.

import random
from machine import Pin
from time import sleep_ms

# LED RGB : value(1) allume, value(0) éteint
led_rouge = Pin('LED_RED', Pin.OUT)
led_bleue = Pin('LED_BLUE', Pin.OUT)

# Boutons A et B (résistances pull-up sur la carte : 1 au repos, 0 quand on appuie)
bouton_a = Pin('A_BUTTON', Pin.IN)
bouton_b = Pin('B_BUTTON', Pin.IN)


def lire_choix_joueur():
    """Attend que A ou B soit pressé, allume la LED correspondante,
    et retourne 'rouge' ou 'bleu'."""
    while True:
        if bouton_a.value() == 0:
            led_rouge.on()
            sleep_ms(500)
            led_rouge.off()
            return 'rouge'
        if bouton_b.value() == 0:
            led_bleue.on()
            sleep_ms(500)
            led_bleue.off()
            return 'bleu'
        sleep_ms(20)


def annoncer_carte(couleur):
    """Allume brièvement la LED de la couleur tirée par la carte."""
    if couleur == 'rouge':
        led_rouge.on()
    else:
        led_bleue.on()
    sleep_ms(1000)
    led_rouge.off()
    led_bleue.off()


# Boucle principale du jeu
while True:
    print("Choisissez une couleur : A pour rouge, B pour bleu.")
    choix_joueur = lire_choix_joueur()
    sleep_ms(500)

    choix_carte = random.choice(['rouge', 'bleu'])
    annoncer_carte(choix_carte)

    if choix_joueur == choix_carte:
        print("Gagné !")
    else:
        print("Perdu !")

    sleep_ms(500)
```

### Comment ça fonctionne ?

1. **Imports** : `random` pour tirer une couleur au hasard, `Pin` pour piloter les broches, `sleep_ms` pour les pauses.
2. **Initialisation** : on prépare les deux LED en sortie et les deux boutons en entrée. Les boutons disposent de **résistances pull-up externes** câblées directement sur la carte STeaMi (à ne pas confondre avec la pull-up interne du microcontrôleur) : elles maintiennent leur valeur à 1 au repos, donc on ne déclare rien de plus côté code.
3. **`lire_choix_joueur()`** : boucle d'attente qui scrute les deux boutons et retourne dès que l'un est pressé. Le clignotement de la LED sert d'**accusé de réception** visuel pour le joueur.
4. **`annoncer_carte()`** : affiche le tirage de la carte par un éclat de la LED correspondante, pendant 1 seconde.
5. **Boucle principale** : propose un message dans la console, lit le choix du joueur, tire au sort, annonce le résultat de la manche, recommence. Pas de condition de fin : le jeu tourne tant que la carte est alimentée (sortie par `Ctrl+C`).

### Exécuter le programme

- **Test rapide** : lancer le programme depuis l'IDE (typiquement bouton **Run** ▶ ou `F5`). Le code s'exécute sur la carte tant qu'on reste connecté.
- **Programme persistant** : enregistrer le fichier sous le nom **`main.py`** sur la carte. Il sera relancé automatiquement à chaque démarrage, même sans ordinateur.

---

## Étape 3 : Améliorer

Maintenant que le jeu marche, voici quelques **bonnes pratiques** pour rendre votre code plus lisible et plus facile à faire évoluer.

### Bien nommer

- Préférer des noms **explicites** plutôt que des abréviations cryptiques (`choix_joueur` plutôt que `cj`, `lire_choix_joueur` plutôt que `lcj`).
- **Garder une seule langue** : ne pas passer du français à l'anglais en milieu de programme.
- **Une convention par projet** : `snake_case` (mots séparés par `_`, en minuscules) pour les variables et fonctions Python, c'est la norme.

### Organiser

- Découper en **fonctions courtes** : une fonction = une responsabilité claire. `lire_choix_joueur()` lit, `annoncer_carte()` annonce. Si vous écrivez une fonction qui « fait beaucoup de choses », envisagez de la couper en deux.
- Utiliser des **constantes** plutôt que des nombres magiques dans le code. Par exemple `DUREE_FLASH_MS = 1000` en début de fichier rend la prochaine modification triviale.
- **Commenter le pourquoi**, pas le quoi : un bon commentaire explique l'intention ou la contrainte (pourquoi attendre 500 ms, par exemple), pas la mécanique évidente du code.

### Aérer

- Mettre **des espaces autour des opérateurs** : `x = 5` (et non `x=5`), `a + b` (et non `a+b`). Plus lisible.
- Une **ligne vide** entre deux fonctions ou deux paragraphes logiques aide à scanner le fichier d'un coup d'œil.

---

## Aller plus loin

### Pour comprendre

- **[Python (Wikipédia)](https://fr.wikipedia.org/wiki/Python_%28langage%29)** : créé en 1991 par le Néerlandais **Guido van Rossum**, qui voulait un langage « lisible avant tout ». Le nom vient de la troupe comique britannique **Monty Python**, pas du reptile. Aujourd'hui dans le top 3 des langages les plus utilisés au monde, autant chez les débutants que chez les chercheurs en IA.
- **[L'histoire de MicroPython (Wikipédia)](https://fr.wikipedia.org/wiki/MicroPython)** : lancé en 2013 par **Damien George** via une campagne Kickstarter, MicroPython est une réécriture de Python pensée pour tourner sur des cartes avec très peu de mémoire (typiquement 256 ko de RAM, contre plusieurs Go pour un ordinateur). C'est lui qui rend possible ce que vous venez d'exécuter sur la STeaMi.
- **[Read-eval-print loop (Wikipédia anglais)](https://en.wikipedia.org/wiki/Read-eval-print_loop)** : le concept de boucle interactive remonte aux années 60 avec **Lisp**. Toutes les consoles interactives modernes (Python, Ruby, JavaScript, R...) en sont des héritières directes. (La page Wikipédia n'existe qu'en anglais à ce jour.)
- **[Le Zen de Python (PEP 20)](https://peps.python.org/pep-0020/)** : les 19 aphorismes guides de la conception du langage. À taper dans n'importe quelle console Python : `import this`. Notamment « Beautiful is better than ugly », « Simple is better than complex », « Readability counts ».

### Pour s'inspirer

- **[MicroPython sur l'ISS (programme Astro Pi)](https://astro-pi.org/)** : depuis 2015, l'ESA et la Raspberry Pi Foundation mettent des cartes Sense HAT à bord de la Station Spatiale Internationale et invitent des élèves à y faire tourner leurs programmes en MicroPython. Des collégien·nes et lycéen·nes français·es y participent chaque année.
- **[Python à la NASA et SpaceX](https://www.python.org/about/success/usa/)** : Python pilote des simulations de mission, du traitement d'images de télescopes, ou la chaîne de tests des fusées Falcon. Ce que vous tapez dans le REPL et ce que tape un ingénieur de Mission Control utilisent la même syntaxe.
- **[Advent of Code](https://adventofcode.com/)** : calendrier de l'avent de défis de programmation, ouvert à tout le monde et gratuit. Python est le langage le plus utilisé chaque année par les participant·es. Idéal pour pratiquer les briques de la fiche dans un contexte de jeu.
- **[Olympiades de programmation et de mathématiques (France-IOI)](http://www.france-ioi.org/)** : plateforme gratuite avec des centaines d'exercices progressifs, beaucoup résolubles en Python. Bon parcours pour un·e élève qui accroche.

### Pour approfondir

Documentation technique pour préparer une séquence ou répondre aux questions :

- **[Documentation MicroPython](https://docs.micropython.org/)** : référence officielle complète.
- **[Découverte du firmware MicroPython (stm32python)](https://stm32python.gitlab.io/fr/docs/Micropython/firmware/index)** : présentation en français de l'architecture firmware + REPL, base de l'introduction de cette fiche.
- **[mpremote en français (stm32python)](https://stm32python.gitlab.io/fr/docs/Micropython/tools/mpremote)** : commande en ligne pour parler à n'importe quelle carte MicroPython depuis le terminal.
- **[Wiki STeaMi : Premiers pas](https://wiki.steami.cc/docs/software/getting-started)**
- **[Wiki STeaMi : Hardware](https://wiki.steami.cc/docs/hardware/)** : pinout détaillé de la carte.
- **[Drivers MicroPython STeaMi](https://github.com/steamicc/micropython-steami-lib)** : code source des modules `steami_*` exposés par l'environnement MicroPython de la carte.
- **[MOOC FUN : Programmer un objet avec MicroPython](https://www.fun-mooc.fr/fr/cours/programmer-un-objet-avec-micropython/)**

---

_Cette fiche fait partie du projet [I-Novmicro #2 : Action EXAO](/projets/inovmicro-exao). Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr). Informations basées sur la [documentation officielle STeaMi](https://wiki.steami.cc/) et sur [stm32python](https://stm32python.gitlab.io/fr/)._

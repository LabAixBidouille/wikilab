---
id: i09-inclinaison-accelerometre
title: Inclinaison avec accéléromètre
sidebar_label: "Inclinaison avec accéléromètre"
sidebar_position: 9
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>
<div style={{flex: 1}}>
# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="1" y="1" width="22" height="22" rx="3" fill="#8a6e18" opacity="0.1"/><g transform="rotate(-12 12 12)"><rect x="2.5" y="10" width="19" height="4" rx="0.8" fill="#8a6e18" opacity="0.25"/><rect x="2.5" y="10" width="19" height="4" rx="0.8" fill="none" stroke="#8a6e18" strokeWidth="1.2"/><line x1="8.5" y1="10.5" x2="8.5" y2="13.5" stroke="#8a6e18" strokeWidth="0.8" opacity="0.7"/><line x1="15.5" y1="10.5" x2="15.5" y2="13.5" stroke="#8a6e18" strokeWidth="0.8" opacity="0.7"/><ellipse cx="14.5" cy="12" rx="1.6" ry="0.95" fill="#8a6e18"/></g></svg> Inclinaison avec accéléromètre

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--info">SteaMi</span>
  <span className="badge badge--warning">MicroPython</span>
</div>

| Projet        | Durée  | Difficulté | Âge       | Logiciel STeaMi testé |
| ------------- | ------ | ---------- | --------- | --------------------- |
| I-Novmicro #2 | 30 min | Avancé     | 11-99 ans | 0.23.1                |

## Matériel et Montage

- 1 carte STeaMi
- 1 câble USB de données (micro-USB pour la STeaMi V1, USB-C pour la STeaMi V2)
- 1 ordinateur sous Windows, macOS ou Linux
- Un IDE compatible MicroPython : Thonny (voir la fiche [Thonny : Prise en main de MicroPython](/ressources/inovmicro-exao/t03-decouverte-thonny)) ou tout autre éditeur compatible (Mu, VS Code, Vittascience, `mpremote`...).

</div>
<img src="/img/ressources/inovmicro-exao/i09-inclinaison-accelerometre/icone.png" alt="Inclinaison avec accéléromètre sur la STeaMi" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />
</div>

---

## De quoi parle-t-on ?

Quand tu inclines ton téléphone, l'écran bascule du mode portrait au mode paysage. Quand tu secoues une manette de Wii, le personnage du jeu réagit. Quand un airbag se déclenche dans une voiture, c'est parce qu'un minuscule composant a détecté le choc en une fraction de seconde. Ces trois petits miracles du quotidien fonctionnent grâce au même composant : un [**accéléromètre**](https://fr.wikipedia.org/wiki/Acc%C3%A9l%C3%A9rom%C3%A8tre).

Un accéléromètre est un capteur qui mesure les **forces** qui agissent sur lui : un coup, une secousse, une chute, mais aussi, en permanence, la **force de gravité** qui tire tout vers le bas. Quand on tient un téléphone droit, la gravité « appuie » sur le côté du bas ; quand on l'incline, elle appuie sur un autre côté. C'est exactement ainsi que le téléphone sait dans quel sens il est tenu.

Dans cette activité, on va utiliser l'accéléromètre intégré à la STeaMi pour fabriquer un **détecteur d'inclinaison et de choc** : la carte affiche son orientation en temps réel sur l'écran et déclenche un bip d'alarme si on la secoue. C'est le principe du capteur anti-triche d'un flipper, ou de l'alarme antivol d'un sac.

:::info[Capteur intégré, rien à câbler]
L'accéléromètre est déjà soudé à l'intérieur de la STeaMi. On n'a rien à brancher : il suffit de l'appeler depuis le code.
:::

---

## Objectifs d'apprentissage

À la fin de cette activité, l'élève sera capable de :

- **Expliquer** ce qu'est un accéléromètre, et citer trois objets du quotidien qui en contiennent un (téléphone, manette de jeu, montre connectée, voiture, drone...).
- **Faire le lien** entre la force de gravité et l'orientation d'un objet : pourquoi un capteur immobile peut indiquer dans quel sens il est tenu.
- **Lire** les valeurs d'accélération sur les trois axes X, Y et Z, et **interpréter** ce qu'elles disent (à plat ? sur la tranche ? à l'envers ?).
- **Reconnaître un événement physique** (un choc, une chute libre) à partir des mesures du capteur, et comprendre pourquoi on regarde **l'ensemble** des trois axes plutôt qu'un seul.
- **Imaginer** d'autres usages du capteur : alarme antivol, détecteur de pas, manette de jeu, niveau à bulle numérique...

---

## Étape 1 : Construire

« Construire » se résume ici à comprendre comment accéder aux composants de la carte : tout est déjà soudé.

### Comment un accéléromètre « voit » le monde

Un accéléromètre mesure les forces qui agissent sur lui, dans **trois directions** qu'on appelle des **axes** : X (gauche-droite), Y (haut-bas du point de vue de la carte) et Z (devant-derrière, c'est-à-dire entre l'écran et le dos). Quand la carte est immobile, la seule force qui agit dessus est la **gravité**, qui tire tout vers le bas. Selon la façon dont on tient la carte, cette force se répartit différemment entre les trois axes : c'est ce qui permet de deviner son orientation.

L'unité de mesure utilisée est le **G**, qui correspond à la gravité terrestre. Une valeur de 1 G, c'est la force que tu sens en permanence quand tu es debout (le poids de ton corps). Une valeur de 0 G, c'est l'apesanteur des astronautes en orbite. Un coup brusque sur la carte peut dépasser 2 ou 3 G.

:::info[Une image pour s'y retrouver]
Imagine que la carte est un petit aquarium contenant une bille très lourde. La bille tombe toujours vers le bas. Selon la position de l'aquarium, la bille se retrouve contre l'un des six côtés. L'accéléromètre fait pareil, mais avec une masse minuscule gravée dans le silicium, et il mesure **précisément** vers quels côtés cette masse appuie. C'est de là que vient le nom de capteur **MEMS** (microsystème électromécanique).
:::

### Lire l'accélération en MicroPython

```python
from machine import I2C
from ism330dl import ISM330DL

i2c = I2C(1)
accelerometre = ISM330DL(i2c)

acceleration_x, acceleration_y, acceleration_z = accelerometre.acceleration_g()   # valeurs en G (float)
print(acceleration_x, acceleration_y, acceleration_z)
```

### Demander directement l'orientation

Plutôt que d'analyser nous-mêmes les trois valeurs, on peut demander au module `ism330dl` de le faire pour nous, avec la méthode `orientation()`. Elle renvoie un mot-clé qui décrit la position de la carte :

| Mot-clé retourné   | Que dit la carte                     |
| ------------------ | ------------------------------------ |
| `SCREEN_UP`        | « Je suis à plat, écran vers le haut » |
| `SCREEN_DOWN`      | « Je suis à plat, écran vers le bas (retournée) » |
| `TOP_EDGE_DOWN`    | « Je suis sur la tranche, bord haut en bas » |
| `BOTTOM_EDGE_DOWN` | « Je suis sur la tranche, bord bas en bas » |
| `RIGHT_EDGE_DOWN`  | « Je suis sur le côté droit »        |
| `LEFT_EDGE_DOWN`   | « Je suis sur le côté gauche »       |
| `MOVING`           | « Je bouge, je ne sais pas dire »    |

### Valeur absolue : ignorer la direction

Imagine qu'on veut savoir si la carte penche, sans se soucier de **vers quel côté** : à gauche ou à droite, les deux comptent. Un coup tapé sur le côté gauche donne `acceleration_x = -0.7` ; un coup tapé à droite donne `acceleration_x = +0.7`. Ce sont deux situations différentes par leur signe (négatif ou positif), mais l'intensité du coup est la même.

La fonction `abs()` (pour _absolute value_, valeur absolue en français) supprime le signe : `abs(-0.7)` et `abs(+0.7)` valent tous les deux `0.7`. C'est exactement ce qu'il nous faut pour détecter une inclinaison « peu importe le sens » :

```python
acceleration_x, acceleration_y, acceleration_z = accelerometre.acceleration_g()
if abs(acceleration_x) > 0.5:
    print("La carte penche fortement sur le côté (peu importe lequel) !")
```

### Connecter la carte à l'ordinateur

Brancher la STeaMi à l'ordinateur via le câble USB. Si l'IDE est déjà configuré (voir la fiche [Thonny : Prise en main de MicroPython](/ressources/inovmicro-exao/t03-decouverte-thonny) si vous démarrez), la console MicroPython doit afficher `>>>`. C'est **l'invite** (parfois appelée « prompt » en anglais) : un signe qui apparaît en début de ligne pour vous dire que la console est prête à recevoir une commande.

### Tester le capteur dans l'invite

Avant d'écrire le programme principal, on peut vérifier que l'accéléromètre répond :

```python
>>> from machine import I2C
>>> from ism330dl import ISM330DL
>>> accelerometre = ISM330DL(I2C(1))
>>> accelerometre.acceleration_g()
(-0.01, 0.02, -0.99)
>>> accelerometre.orientation()
'SCREEN_UP'
```

La carte est à plat, écran vers le haut : `acceleration_z` vaut environ -1 G et `orientation()` renvoie `SCREEN_UP`. Incliner la carte dans différentes directions et observer les valeurs changer.

---

## Étape 2 : Programmer

On va écrire un programme qui répète sans cesse la même boucle : **lire** le capteur, **afficher** ce qu'il dit sur l'écran, et **bipper** si quelqu'un secoue la carte. C'est ce qu'on appelle une **boucle de mesure** : c'est le squelette de presque tous les programmes qui interagissent avec un capteur en temps réel.

:::info[Première fois avec l'écran OLED ?]

Cette fiche utilise l'écran intégré à la STeaMi pour afficher les mesures en temps réel. Si tu n'as encore jamais piloté l'écran, la fiche [Afficher du texte sur l'écran OLED](/ressources/inovmicro-exao/i10-texte-oled) explique le fonctionnement de la librairie `steami_screen` (méthodes `title`, `text`, `show`, positionnement par points cardinaux, etc.). Tu peux la consulter en parallèle si certaines lignes du programme te paraissent obscures.

:::

### Composants utilisés

| Composant       | Nom dans le programme | Rôle                                              |
| --------------- | --------------------- | ------------------------------------------------- |
| Accéléromètre   | objet `accelerometre` | Lecture de l'accélération et de l'orientation     |
| Écran OLED      | objet `ecran`         | Affichage des valeurs en temps réel               |
| Buzzer          | objet `buzzer`        | Alerte sonore en cas de choc détecté              |

### Programme

```python
# Testée avec firmware STeaMi 0.23.1
#
# Capteur d'inclinaison : affiche l'accélération (X, Y, Z) et l'orientation
# sur l'écran OLED. Le buzzer sonne si l'accélération totale dépasse le seuil.

import ssd1327
import math
import time
from machine import I2C, SPI, Pin
from ism330dl import ISM330DL
from steami_screen import Screen, SSD1327Display

# --- Écran OLED ---
spi = SPI(1)
broche_dc = Pin("DATA_COMMAND_DISPLAY")
broche_reset = Pin("RST_DISPLAY")
broche_cs = Pin("CS_DISPLAY")
oled_brut = ssd1327.WS_OLED_128X128_SPI(spi, broche_dc, broche_reset, broche_cs)
pilote_oled = SSD1327Display(oled_brut)
ecran = Screen(pilote_oled)

# --- Accéléromètre ---
i2c = I2C(1)
accelerometre = ISM330DL(i2c)

# --- Buzzer ---
buzzer = Pin("SPEAKER", Pin.OUT_PP)

# --- Seuil de détection de choc (en G) ---
SEUIL_CHOC = 1.5   # au-delà de 1.5 G sur l'accélération totale


def jouer_note(broche, frequence, duree_ms):
    """Fait sonner le buzzer à la fréquence demandée pendant duree_ms."""
    if frequence == 0:
        time.sleep_ms(duree_ms)
        return
    periode_us = int(1_000_000 / frequence)
    demi_periode = periode_us // 2
    fin = time.ticks_add(time.ticks_us(), duree_ms * 1000)
    while time.ticks_diff(fin, time.ticks_us()) > 0:
        broche.on()
        time.sleep_us(demi_periode)
        broche.off()
        time.sleep_us(demi_periode)


def bip_alerte():
    """Bip court pour signaler un choc."""
    jouer_note(buzzer, 880, 80)


def afficher_capteur(acceleration_x, acceleration_y, acceleration_z, orientation):
    """Met à jour l'écran avec les valeurs d'accélération et l'orientation."""
    ecran.clear()
    ecran._d.text(orientation, 25, 30, 15)   # x=10, y=10, couleur=blanc fixe
    ecran.value("{:+.2f}".format(acceleration_x), label="X", unit="g")
    ecran.subtitle(
        "Y:{:+.2f}g".format(acceleration_y),
        "Z:{:+.2f}g".format(acceleration_z),
    )
    ecran.show()


# --- Programme principal ---
print("Capteur d'inclinaison prêt.")

while True:
    acceleration_x, acceleration_y, acceleration_z = accelerometre.acceleration_g()
    orientation = accelerometre.orientation()

    # Intensité totale de l'accélération (norme du vecteur en 3D)
    intensite = math.sqrt(acceleration_x ** 2 + acceleration_y ** 2 + acceleration_z ** 2)

    afficher_capteur(acceleration_x, acceleration_y, acceleration_z, orientation)

    if intensite > SEUIL_CHOC:
        bip_alerte()

    time.sleep_ms(200)
```

### Comment cela fonctionne ?

Le programme se lit en trois temps :

- **Préparation** : on « réveille » les trois composants qu'on va utiliser : l'écran OLED, l'accéléromètre, et la broche du buzzer. C'est l'équivalent de sortir ses crayons et ses cahiers avant un contrôle : on n'écrit pas encore, mais tout est prêt.
- **Fonctions auxiliaires** : `bip_alerte()` et `afficher_capteur()` rassemblent des opérations qui seront utilisées plusieurs fois. Les définir une bonne fois pour toutes rend la boucle principale beaucoup plus courte et lisible (c'est le principe de l'abstraction, vu dans la fiche [Composer une mélodie](/ressources/inovmicro-exao/i07-musique)).
- **Boucle principale** (`while True`) : c'est le cœur du programme. À chaque tour (environ 5 fois par seconde), on lit l'accéléromètre, on calcule l'intensité totale du mouvement, on rafraîchit l'écran, et on déclenche un bip si on dépasse le seuil. Cette boucle ne s'arrête jamais : c'est ce qui rend notre détecteur **réactif**.

:::info[Pourquoi on additionne les trois axes au carré]

Tu vois cette ligne mystérieuse dans le programme ?

```python
intensite = math.sqrt(acceleration_x ** 2 + acceleration_y ** 2 + acceleration_z ** 2)
```

C'est le **théorème de Pythagore en 3D**. En 2D au collège, on apprend que la longueur de la diagonale d'un rectangle est `sqrt(largeur² + hauteur²)`. En 3D, on rajoute simplement la troisième dimension : `sqrt(largeur² + hauteur² + profondeur²)`. Cette formule donne **l'intensité totale** d'un mouvement, quel que soit le sens dans lequel on l'a fait.

Pourquoi c'est utile ? Imagine que la carte est posée à plat (donc `acceleration_z` vaut -1 G, la gravité tire vers le bas). Si on lui tape dessus sur le côté, c'est `acceleration_x` qui réagit. Si on la cogne par devant, c'est `acceleration_y`. Si on regardait un seul axe à la fois, on ne détecterait que les chocs venus d'une certaine direction. En additionnant les trois axes au carré, on construit un capteur de choc **omnidirectionnel** : il réagit à tout coup, peu importe d'où il vient.

Au repos, cette `intensite` vaut toujours environ 1 G (juste la gravité). Quand quelqu'un secoue la carte, elle dépasse rapidement 1,5 G ou 2 G. C'est sur ce dépassement qu'on déclenche l'alarme.

:::

### Exécution

- **Test rapide** : lancer le programme depuis votre IDE (bouton **Run** ▶ ou `F5`). L'écran affiche les valeurs en temps réel ; donner un petit coup sur la table pour déclencher le buzzer.
- **Programme persistant** : enregistrer le fichier sous le nom **`main.py`** sur la carte. Il sera relancé à chaque démarrage.

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/i09-inclinaison-accelerometre/Steami_prog1.jpeg"
    alt="Thermomètre très lisible sur la STeaMi"
    style={{maxWidth: '450px', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    La STeaMi affichant les valeurs obtenues via l'accelerometre.
  </figcaption>
</figure>

---

## Étape 3 : Améliorer

Trois pistes pour aller plus loin.

### 1. Trouver le bon seuil expérimentalement

La valeur `SEUIL_CHOC = 1.5` qu'on a choisie est arbitraire : peut-être qu'elle est trop sensible (le buzzer sonne au moindre frôlement), peut-être pas assez (il faut taper fort pour la déclencher). On peut faire mieux en **mesurant** ce qui se passe vraiment. Remplacer la boucle principale par celle-ci, qui affiche l'intensité dans l'invite :

```python
while True:
    acceleration_x, acceleration_y, acceleration_z = accelerometre.acceleration_g()
    intensite = math.sqrt(acceleration_x ** 2 + acceleration_y ** 2 + acceleration_z ** 2)
    print("{:.3f} G".format(intensite))
    time.sleep_ms(100)
```

Noter l'intensité pour quatre actions : carte immobile (le « bruit de fond », environ 1 G), petit tapotement, secousse franche, choc fort. Le bon seuil se situe **juste au-dessus** du tapotement, et **en-dessous** de la secousse, selon ce qu'on veut déclencher comme alerte. C'est ce qu'on appelle **calibrer** un capteur : ajuster ses paramètres avec des mesures réelles plutôt que des valeurs prises au hasard.

### 2. Détecter la chute libre

Voici une expérience contre-intuitive : un objet **en chute libre** ne ressent plus la gravité. Les astronautes dans la Station spatiale internationale tombent en permanence (autour de la Terre), c'est pour ça qu'ils flottent. Plus simplement : lorsqu'on lâche un téléphone, pendant le bref instant où il chute, son accéléromètre indique presque 0 G sur tous les axes.

On peut s'en servir pour détecter qu'on est en train de **lâcher la carte** :

```python
SEUIL_CHUTE_LIBRE = 0.2   # en G

while True:
    acceleration_x, acceleration_y, acceleration_z = accelerometre.acceleration_g()
    intensite = math.sqrt(acceleration_x ** 2 + acceleration_y ** 2 + acceleration_z ** 2)

    if intensite < SEUIL_CHUTE_LIBRE:
        ecran.clear()
        ecran.value("CHUTE !", label="Alerte")
        ecran.show()
        bip_alerte()

    time.sleep_ms(50)   # scruter plus fréquemment pour ne pas rater l'événement
```

:::tip[Ne pas tester en vrai]
La chute libre est plus facile à simuler **en faisant tourner la carte au-dessus de sa tête au bout d'une ficelle** (la force centrifuge contre l'attraction) qu'en la lâchant pour de bon. Le capteur fonctionne, ce serait dommage de casser la carte pour le prouver.
:::

### 3. Transformer la carte en niveau à bulle

Plutôt que d'afficher des chiffres bruts, on peut représenter visuellement l'inclinaison comme un **niveau à bulle de menuisier**. Avec `ecran.bar()`, on dessine une barre qui se déplace selon l'axe X : quand la carte est parfaitement à plat (`acceleration_x` vaut 0), la barre est au centre (50 %). Quand on penche la carte vers la gauche, la barre va à gauche ; vers la droite, à droite.

```python
def axe_vers_pourcent(valeur_g):
    """Convertit une valeur en G (-1 à +1) en pourcentage (0 à 100)."""
    valeur_bornee = max(-1.0, min(1.0, valeur_g))
    return int((valeur_bornee + 1.0) * 50)   # -1 G : 0 %, 0 G : 50 %, +1 G : 100 %


while True:
    acceleration_x, acceleration_y, acceleration_z = accelerometre.acceleration_g()
    pourcent_x = axe_vers_pourcent(acceleration_x)

    ecran.clear()
    ecran.title("Inclinaison X")
    ecran.value("{:+.2f}g".format(acceleration_x))
    ecran.bar(pourcent_x, max_val=100)
    ecran.show()

    time.sleep_ms(100)
```

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/i09-inclinaison-accelerometre/Steami_amelioration3.jpeg"
    alt="Thermomètre très lisible sur la STeaMi"
    style={{maxWidth: '450px', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    La STeaMi affichant le niveau à bulle.
  </figcaption>
</figure>

---

## Aller plus loin

### Pour comprendre

- **[Accéléromètre (Wikipédia)](https://fr.wikipedia.org/wiki/Acc%C3%A9l%C3%A9rom%C3%A8tre)** : le principe physique des microcapteurs MEMS (une masse minuscule suspendue sur ressorts gravée dans le silicium), et pourquoi ils sont devenus omniprésents : téléphones, manettes, voitures, drones, montres.
- **[Système microélectromécanique (Wikipédia)](https://fr.wikipedia.org/wiki/Microsyst%C3%A8me_%C3%A9lectrom%C3%A9canique)** : la famille de capteurs miniaturisés à laquelle appartient l'ISM330DL. Comprendre comment on fabrique des pièces mécaniques mobiles de quelques microns directement sur une puce de silicium.
- **[Norme d'un vecteur (Wikipédia)](https://fr.wikipedia.org/wiki/Norme_(math%C3%A9matiques))** : la quantité `sqrt(x² + y² + z²)` qu'on calcule dans le code est la **norme euclidienne** du vecteur accélération, une notion centrale en physique et en mathématiques (longueur d'un trajet, distance entre deux points).
- **[Centrale inertielle (Wikipédia)](https://fr.wikipedia.org/wiki/Centrale_%C3%A0_inertie)** : combiner un accéléromètre et un gyroscope dans le même boîtier (ce que fait notre ISM330DL) donne une **IMU** (_inertial measurement unit_), capable de suivre les déplacements et rotations d'un objet sans repère extérieur. C'est ainsi qu'un sous-marin ou un avion connaissent leur position même sans GPS.
- **[Sismographe (Wikipédia)](https://fr.wikipedia.org/wiki/Sismographe)** : le grand frère « extrêmement sensible » de l'accéléromètre. Au lieu de détecter des chocs sur une carte, il détecte les vibrations de la Terre, parfois des séismes à des milliers de kilomètres. Même principe physique, sensibilité multipliée par un milliard.
- **[Apesanteur (Wikipédia)](https://fr.wikipedia.org/wiki/Apesanteur)** : pourquoi les astronautes flottent même si la gravité agit toujours sur eux. Le lien direct avec la détection de chute libre dans notre code : un capteur en orbite indique presque 0 G sur ses trois axes.

### Pour s'inspirer

- **[Reflex tester (Hackster)](https://www.hackster.io/RVLAD/free-fall-detection-using-3-axis-accelerometer-06383e)** : un détecteur de chute libre fait maison qui mesure le temps de vol d'un objet pour calculer la hauteur de chute. La physique de Newton réinventée avec un microcontrôleur à 5 €.
- **[Wii Remote](https://fr.wikipedia.org/wiki/Wii_Remote)** : la manette qui a popularisé l'accéléromètre auprès du grand public en 2006. La même puce que sur la STeaMi (en plus simple) a transformé la façon dont on joue aux jeux vidéo.
- **[Boîte à musique gestuelle](https://learn.adafruit.com/circuit-playground-musical-gestures/overview)** : un projet Adafruit qui joue une note différente selon la façon dont on incline la carte. Cousin direct de notre fiche, avec un angle ludique et musical.
- **[Compter ses pas (Adafruit)](https://learn.adafruit.com/circuit-playground-pedometer/overview)** : algorithme de podomètre qui détecte le mouvement caractéristique d'un pas dans le bruit ambiant. Toutes les montres connectées font ça, et c'est la même puce que la nôtre.
- **[Dé numérique](https://makezine.com/projects/electronic-dice-with-arduino/)** : on secoue la carte, et quand on s'arrête, l'écran affiche un nombre entre 1 et 6. Utilise le pic d'accélération de la secousse pour déclencher un tirage aléatoire au moment où la secousse retombe.
- **[Suivi de tête VR (Coding Train)](https://thecodingtrain.com/challenges/74-clock-with-millis)** : les casques de réalité virtuelle utilisent une IMU pour suivre l'orientation de la tête en temps réel. Même principe que notre `orientation()`, à 1000 mesures par seconde près.
- **[Robot équilibriste / Segway](https://en.wikipedia.org/wiki/Self-balancing_unicycle)** : tenir un véhicule en équilibre sur deux roues (ou une seule) demande de mesurer en permanence l'inclinaison et de corriger en faisant tourner les roues. C'est l'application la plus impressionnante de la mesure d'inclinaison.
- **[Anti-vol DIY pour sac](https://www.instructables.com/Easy-DIY-Bag-Anti-theft-Alarm/)** : le projet « pour de vrai » de la fiche : un capteur qui déclenche une alarme si on bouge le sac. À adapter avec la STeaMi en remplaçant le module Arduino et en utilisant notre détection de choc.

---

_Cette fiche fait partie du projet [I-Novmicro #2 : Action EXAO](/projets/inovmicro-exao). Adaptée du projet [Let's STEAM](/projets/lets-steam) (fiche [`r1as09-accelerometre`](/ressources/lets-steam/r1as09-accelerometre)) sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._


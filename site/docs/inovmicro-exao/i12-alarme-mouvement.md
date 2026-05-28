---
id: i12-alarme-mouvement
title: Créer une alarme de mouvement
sidebar_label: 'Créer une alarme de mouvement'
sidebar_position: 12
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Créer une alarme de mouvement

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--info">SteaMi</span>
  <span className="badge badge--warning">MicroPython</span>
</div>

| Projet        | Durée  | Difficulté | Âge       | Logiciel STeaMi testé |
| ------------- | ------ | ---------- | --------- | --------------------- |
| I-Novmicro #2 | 10 min | Débutant   | 11-99 ans | 0.23.1                |

## Matériel et Montage

- 1 carte STeaMi
- 1 câble USB de données (micro-USB pour la STeaMi V1, USB-C pour la STeaMi V2)
- 1 ordinateur sous Windows, macOS ou Linux
- Un IDE compatible MicroPython : Thonny (voir la fiche [Thonny : Prise en main de MicroPython](/ressources/inovmicro-exao/t03-decouverte-thonny)) ou tout autre éditeur compatible (Mu, VS Code, Vittascience, `mpremote`...).

</div>

<img src="/img/ressources/inovmicro-exao/i12-alarme-mouvement/icone.svg" alt="Alarme de mouvement" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Quand un magasin se fait cambrioler la nuit, quand une porte de garage s'ouvre toute seule à l'approche d'une voiture, quand le détecteur d'un escalier roulant le déclenche dès qu'on pose le pied dessus : à chaque fois, **un capteur de mouvement** a su voir « quelque chose bouge » et déclencher une réaction.

La STeaMi embarque deux capteurs qui permettent de détecter le mouvement de deux façons complémentaires :

- **L'accéléromètre** (ISM330DL) sent quand on bouge **la carte elle-même** : si quelqu'un la prend, la déplace, la secoue.
- **Le capteur de distance à temps de vol** (VL53L1X) sent quand **quelque chose bouge devant elle** : une main, un objet qui passe.

Dans cette activité, on combine les deux pour fabriquer une **alarme à double protection** : la STeaMi sonne soit si on la déplace, soit si une main s'approche d'elle. On utilise le bouton Menu pour armer ou désarmer l'alarme, comme une vraie alarme de maison.

:::info[Capteurs intégrés, rien à câbler]
L'accéléromètre et le capteur de distance sont déjà soudés à la STeaMi. On n'a rien à brancher : il suffit de les appeler depuis le code. Voir les fiches [Fabriquer un thérémine](/ressources/inovmicro-exao/i08-theremine) (capteur de distance) et [Inclinaison avec accéléromètre](/ressources/inovmicro-exao/i09-inclinaison-accelerometre) pour découvrir chaque capteur en détail.
:::

---

## Objectifs d'apprentissage

À la fin de cette activité, l'élève sera capable de :

- **Expliquer** comment fonctionne une alarme à détection de mouvement et citer des objets du quotidien qui en contiennent (alarme antivol, escalier roulant, ouverture automatique de porte, robot aspirateur...).
- **Combiner deux capteurs** complémentaires (accéléromètre + capteur de distance) pour détecter un mouvement de deux façons différentes.
- **Détecter une variation** d'une mesure plutôt qu'une valeur absolue : ce qui compte, ce n'est pas la position du capteur, mais le changement par rapport à l'instant précédent.
- **Utiliser un bouton comme interrupteur logique** (état actif/inactif) avec une variable booléenne `True`/`False`.
- **Imaginer** d'autres applications : alarme antivol pour sac, détecteur d'intrusion dans une chambre, jouet qui se réveille quand on approche...

---

## Étape 1 : Construire

« Construire » se résume ici à localiser les deux capteurs : ils sont déjà soudés dans la carte, rien à câbler.

### Repérer les deux capteurs sur la STeaMi

- **L'accéléromètre** est sur la **face arrière** de la carte (le côté opposé à l'écran). Il mesure les forces qui agissent sur la carte : gravité quand elle est immobile, secousses dès qu'on la bouge.
- **Le capteur de distance** est sur la **face avant** (le même côté que l'écran), à côté de l'écran OLED. Il envoie un faisceau laser invisible vers l'avant et mesure la distance à l'objet le plus proche.

<div style={{display: 'flex', flexDirection: 'row', gap: '1rem', justifyContent: 'center', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap'}}>
    <figure style={{textAlign: 'center', margin: '0', flex: '1', minWidth: '200px'}}>
        <img
            src="/img/ressources/inovmicro-exao/i12-alarme-mouvement/accelerometre.png"
            alt="Emplacement de l'accéléromètre sur la face arrière de la STeaMi"
            style={{maxWidth: '450px', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}
        />
        <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
            L'accéléromètre sur la face arrière de la STeaMi.
        </figcaption>
    </figure>
    <figure style={{textAlign: 'center', margin: '0', flex: '1', minWidth: '200px'}}>
        <img
            src="/img/ressources/inovmicro-exao/i12-alarme-mouvement/mouvement.png"
            alt="Emplacement du capteur de mouvement sur la face avant de la STeaMi"
            style={{maxWidth: '450px', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}
        />
        <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
            Le capteur de distance sur la face avant de la STeaMi.
        </figcaption>
    </figure>
</div>

### Le bouton Menu

La STeaMi possède un bouton noté **Menu** en plus des boutons A et B. On va s'en servir comme **interrupteur** pour activer ou désactiver l'alarme : pression = on bascule entre les deux états (alarme armée / alarme désarmée), comme un vrai clavier d'alarme de maison.

### Connecter la carte à l'ordinateur

Branchez la STeaMi à l'ordinateur via le câble USB. Si votre IDE MicroPython est déjà configuré (voir la fiche [Thonny : Prise en main de MicroPython](/ressources/inovmicro-exao/t03-decouverte-thonny) si vous démarrez), la console MicroPython doit afficher `>>>`. C'est **l'invite** (parfois appelée « prompt » en anglais) : un signe qui apparaît en début de ligne pour vous dire que la console est prête à recevoir une commande.

---

## Étape 2 : Programmer

On va écrire un programme qui répète sans cesse la même boucle : **lire** les deux capteurs, **comparer** leurs mesures à la précédente pour détecter un changement, et **sonner l'alarme** si l'alarme est armée et qu'un seuil est dépassé. Le bouton Menu sert d'interrupteur pour armer ou désarmer.

### Composants utilisés

| Composant            | Nom dans le programme | Rôle                                                       |
| -------------------- | --------------------- | ---------------------------------------------------------- |
| Accéléromètre        | objet `accelerometre` | Détecte si la carte est déplacée ou secouée                |
| Capteur de distance  | objet `capteur_distance` | Détecte un objet qui s'approche de la face avant        |
| Bouton Menu          | objet `bouton_menu`   | Arme ou désarme l'alarme (interrupteur)                    |
| Buzzer               | objet `buzzer`        | Émet le son d'alarme quand un mouvement est détecté        |

### Programme

```python
# Testée avec firmware STeaMi 0.23.1
#
# Alarme de mouvement : sonne si on déplace la carte (accéléromètre)
# ou si un objet s'approche à moins de 20 cm (capteur de distance).
# Le bouton Menu arme et désarme l'alarme.

from machine import I2C, Pin
from vl53l1x import VL53L1X
from ism330dl import ISM330DL
import time

# --- Seuils de détection ---
DISTANCE_ALERTE = 200    # mm : alarme si un objet s'approche à moins de 20 cm
SEUIL_MOUVEMENT = 0.3    # G  : alarme si l'accélération varie de plus de 0.3 G

# --- Capteurs ---
i2c = I2C(1)
capteur_distance = VL53L1X(i2c)
accelerometre = ISM330DL(i2c)

# Mémoire de la dernière accélération (pour détecter une variation)
acceleration_x_precedente, acceleration_y_precedente, acceleration_z_precedente = accelerometre.acceleration_g()

# --- Bouton Menu et état de l'alarme ---
bouton_menu = Pin("MENU_BUTTON", Pin.IN)
alarme_armee = False

# --- Buzzer ---
buzzer = Pin("SPEAKER", Pin.OUT_PP)


def sonner_alarme():
    """Fait sonner le buzzer à 2000 Hz pendant 500 ms."""
    periode_us = int(1_000_000 / 2000)
    demi_periode = periode_us // 2
    fin = time.ticks_add(time.ticks_us(), 500 * 1000)
    while time.ticks_diff(fin, time.ticks_us()) > 0:
        buzzer.on()
        time.sleep_us(demi_periode)
        buzzer.off()
        time.sleep_us(demi_periode)


while True:
    # 1. Mesurer l'accélération et calculer la variation depuis le tour précédent
    acceleration_x, acceleration_y, acceleration_z = accelerometre.acceleration_g()
    variation = (
        abs(acceleration_x - acceleration_x_precedente)
        + abs(acceleration_y - acceleration_y_precedente)
        + abs(acceleration_z - acceleration_z_precedente)
    )

    # 2. Mesurer la distance à l'objet le plus proche
    distance = capteur_distance.read()

    print("distance:", distance, "variation:", variation, "armee:", alarme_armee)

    # 3. Bouton Menu : armer / désarmer l'alarme
    if bouton_menu.value() == 0:
        alarme_armee = not alarme_armee
        print("Alarme armee :", alarme_armee)
        time.sleep_ms(300)   # anti-rebond : éviter de rebasculer trop vite

    # 4. Si l'alarme est armée, vérifier les deux conditions de déclenchement
    if alarme_armee and distance < DISTANCE_ALERTE:
        print("Intrusion detectee a", distance, "mm")
        sonner_alarme()

    if alarme_armee and variation > SEUIL_MOUVEMENT:
        print("Mouvement detecte : variation =", variation)
        sonner_alarme()

    # 5. Mémoriser l'accélération courante pour le prochain tour
    acceleration_x_precedente, acceleration_y_precedente, acceleration_z_precedente = (
        acceleration_x,
        acceleration_y,
        acceleration_z,
    )

    time.sleep_ms(200)
```

### Comment cela fonctionne ?

Le programme se lit en trois temps :

- **Préparation** : on « réveille » les deux capteurs, on configure le bouton Menu et le buzzer, et on définit les seuils de détection. La variable `alarme_armee` (un booléen `True`/`False`) mémorise si l'alarme est armée ou pas.
- **Fonction `sonner_alarme()`** : génère un son fort à 2000 Hz pendant 500 ms par _bit-banging_ (voir la fiche [Composer une mélodie](/ressources/inovmicro-exao/i07-musique) pour le détail de cette technique).
- **Boucle principale** : à chaque tour (environ 5 fois par seconde), on lit les deux capteurs, on vérifie si le bouton Menu a été pressé pour changer l'état d'alarme, puis on déclenche le buzzer si l'alarme est armée et qu'une des deux conditions est remplie.

:::info[Pourquoi mesurer une *variation* et pas une valeur absolue ?]

Pour l'accéléromètre, on ne s'intéresse pas à l'accélération à un instant donné (la gravité tire toujours vers le bas, donc il y a toujours environ 1 G présent). On s'intéresse au **changement** par rapport à l'instant précédent : si la carte est immobile, l'accélération reste stable, la variation est proche de 0. Si on bouge la carte, les axes changent rapidement, la variation grimpe.

C'est le même principe qu'un sismographe : il ne mesure pas la position du sol, il mesure les **mouvements** du sol par rapport à un état de référence. On parle de **détection de variation** : c'est une technique fondamentale pour reconnaître un événement dans un flux de mesures continues.

:::

:::info[Bouton Menu et anti-rebond]

Quand on appuie sur le bouton Menu, le contact électrique « rebondit » : pendant quelques millisecondes, le signal alterne plusieurs fois entre ouvert et fermé avant de se stabiliser. Sans précaution, notre programme verrait plusieurs pressions au lieu d'une seule, et l'alarme basculerait plusieurs fois.

Le `time.sleep_ms(300)` après chaque détection de pression est un **anti-rebond logiciel** : on ignore les changements pendant 300 ms, le temps que le contact se stabilise. Toutes les vraies alarmes (de maison, de voiture, d'ascenseur) intègrent ce genre de filtrage.

:::

### Exécution

- **Test rapide** : lancez le programme depuis votre IDE (typiquement bouton **Run** ▶ ou `F5`). Les valeurs défilent dans la console MicroPython. Pressez Menu pour armer, puis bougez la carte ou approchez une main à moins de 20 cm.
- **Programme persistant** : enregistrez le fichier sous le nom **`main.py`** sur la carte. Il sera relancé à chaque démarrage : vous pouvez ranger la STeaMi sous votre lit comme une vraie alarme.

---

## Étape 3 : Améliorer

Trois pistes pour aller plus loin.

### 1. Délai d'armement

Sur une vraie alarme, on a 30 secondes après avoir pressé « Armer » pour sortir de la pièce avant que l'alarme ne devienne réellement active. Ajouter un délai avec `time.sleep()` ou un compte à rebours affiché à l'écran avant que `alarme_armee` ne devienne vraiment `True`.

### 2. Alerte visuelle en plus du son

Faire clignoter la LED RGB intégrée à la STeaMi en rouge en plus du buzzer. C'est essentiel pour les personnes malentendantes. Voir la fiche [Faire clignoter une LED](/ressources/inovmicro-exao/i01-led) pour piloter la LED.

### 3. Afficher l'état sur l'écran

Plutôt que la console, afficher en grand sur l'écran OLED « ARMEE » (en rouge) ou « DESARMEE » (en vert), avec la distance courante. Voir la fiche [Afficher du texte sur l'écran OLED](/ressources/inovmicro-exao/i10-texte-oled) pour piloter l'écran.

---

## Aller plus loin

### Pour comprendre

- **[Détection de mouvement (Wikipédia)](https://fr.wikipedia.org/wiki/D%C3%A9tecteur_de_mouvement)** : les différentes technologies utilisées pour détecter un mouvement (infrarouge passif, micro-ondes, ultrasons, caméras intelligentes), et leurs forces et faiblesses respectives. Notre alarme combine deux principes très différents : accélération et temps de vol.
- **[Anti-rebond (Wikipédia)](https://fr.wikipedia.org/wiki/Anti-rebond)** : pourquoi les boutons mécaniques nécessitent un filtrage, et comment les ingénieurs résolvent ce problème depuis les premiers ordinateurs jusqu'aux claviers d'aujourd'hui.
- **[Système d'alarme (Wikipédia)](https://fr.wikipedia.org/wiki/Syst%C3%A8me_d%27alarme)** : architecture générale d'une alarme professionnelle (capteurs, centrale, sirène, transmission). Notre montage est un mini-équivalent embarqué sur une seule carte.

### Pour s'inspirer

- **[Anti-vol DIY pour sac à dos (Instructables)](https://www.instructables.com/Easy-DIY-Bag-Anti-theft-Alarm/)** : un projet « pour de vrai » qui prolonge la fiche. À glisser dans un sac, sonne dès qu'on le déplace.
- **[Open-source home security with Raspberry Pi](https://www.hackster.io/news/build-your-own-home-security-system-with-a-raspberry-pi-d76db17a51d3)** : système d'alarme complet (avec notifications téléphone) bâti sur la même logique que notre fiche, mais avec un Raspberry Pi pour la connectivité.
- **[Détecteur de présence pour tiroir](https://www.instructables.com/Drawer-Lock-Alarm/)** : alarme dédiée à un tiroir ou une boîte à secrets. Variation amusante du même principe : on cache la carte, elle sonne si quelqu'un fouille.
- **[Capteur de chute pour personne âgée](https://www.hackster.io/iotpush/wearable-fall-detection-iot-d23a1d)** : application sérieuse de la même technique de détection de variation accélérométrique : un objet porté qui détecte une chute brutale et appelle automatiquement les secours.

---

_Cette fiche fait partie du projet [I-Novmicro #2 : Action EXAO](/projets/inovmicro-exao). Adaptée du projet [Let's STEAM](/projets/lets-steam) (fiche [`r1as12-detecteur-mouvement`](/ressources/lets-steam/r1as12-detecteur-mouvement)) sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._
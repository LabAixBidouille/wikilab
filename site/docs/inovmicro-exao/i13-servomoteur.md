---
id: i13-servomoteur
title: Animer avec un servomoteur
sidebar_label: "Animer avec un servomoteur"
sidebar_position: 13
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>
<div style={{flex: 1}}>

# Animer avec un servomoteur

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--info">SteaMi</span>
  <span className="badge badge--warning">MicroPython</span>
</div>

| Projet        | Durée  | Difficulté    | Âge       | Logiciel STeaMi testé |
| ------------- | ------ | ------------- | --------- | --------------------- |
| I-Novmicro #2 | 30 min | Intermédiaire | 11-99 ans | 0.23.1                |

## Matériel et Montage

- 1 carte STeaMi
- 1 câble USB de données (micro-USB pour la STeaMi V1, USB-C pour la STeaMi V2). Attention : un câble qui ne sert qu'à charger un téléphone ne fonctionnera pas.
- 1 ordinateur sous Windows, macOS ou Linux
- Un IDE compatible MicroPython : [Thonny](/ressources/inovmicro-exao/t03-decouverte-thonny), Mu, [VS Code](/ressources/inovmicro-exao/t04-vscode), Vittascience, ou tout autre éditeur capable d'ouvrir une console série.
- **1 mini-servomoteur** type SG-90 (le « tower pro » bleu et blanc à environ 3 €, présent dans tous les kits Arduino débutants)
- **Câbles de connexion** (le servo est livré avec un connecteur 3 broches femelle, à brancher sur la STeaMi via le connecteur Edge ou les pads crocodile)

:::caution[Alimentation du servomoteur]
Un servomoteur consomme **plus de courant** qu'une LED (jusqu'à 200 mA en charge pour un SG-90, plus encore pour des modèles plus gros). Sur les **3,3 V** que fournit la STeaMi, un SG-90 fonctionne **à vide** sans souci, mais devient mou si on lui demande de soulever quelque chose. Pour un projet réel avec charge, prévoir une **alimentation externe 5 V** (pile 4×AA, alim secteur, powerbank...). Le câblage devient alors :

- **V+ du servo** (fil rouge) → **+5 V** de l'alim externe (et **rien** côté STeaMi).
- **GND du servo** (fil noir), **GND de l'alim externe** et **GND de la STeaMi** : **les trois reliés entre eux** (typiquement sur la même bande GND de la breadboard). Cette **masse commune est impérative** : sans elle, le signal PWM envoyé par la STeaMi n'a pas de référence électrique commune avec le servo, et le servo ne réagit pas (ou se met à vibrer).
- **Signal du servo** (fil orange/jaune) → broche **P7** de la STeaMi, comme dans le câblage principal.
:::

</div>

<img src="/img/ressources/inovmicro-exao/i13-servomoteur/icone.png" alt="Servomoteur SG-90" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Vous avez sans doute déjà ouvert un jouet motorisé et vu, à l'intérieur, un petit boîtier en plastique avec un bras qui tourne et claque dans un sens puis dans l'autre : c'est un **servomoteur**. On en retrouve dans les **bras robotiques industriels**, les **drones** qui ajustent l'angle de leurs hélices, les **portails automatiques** qui s'ouvrent à 90°, les **figurines animées** dans les vitrines de Noël, les **fauteuils inclinables** modernes. Partout où il faut **positionner précisément** un élément à un angle donné, le servomoteur est l'outil.

À la différence d'un moteur classique qui tourne en continu (comme celui d'un ventilateur), un servomoteur **ne tourne pas** à proprement parler : il **se positionne** à un angle qu'on lui demande, et il **y reste** tant qu'on ne lui en demande pas un autre. C'est cette capacité à « tenir une position » qui le distingue.

Dans cette fiche, vous allez brancher un mini-servomoteur à la STeaMi, lui faire balayer un angle de 0° à 180° en boucle, puis explorer comment l'arrêter à des positions intermédiaires pour fabriquer une aiguille de minuterie, un essuie-glace miniature ou un bras de tri.

:::info[Composant externe]
Pas de servomoteur intégré à la STeaMi, il faut donc en ajouter un en externe. Le SG-90 « tower pro » est le standard dans les kits éducatifs ; n'importe quel servo PWM 50 Hz fonctionnera de la même façon.
:::

---

## Objectifs d'apprentissage

À la fin de cette activité, l'élève sera capable de :

- **Expliquer** ce qu'est un servomoteur, sa différence avec un moteur classique, et citer trois objets du quotidien qui en contiennent un (jouet motorisé, drone, bras robotique...).
- **Décrire** le principe du signal PWM standardisé pour servo (50 Hz, impulsions de 1 à 2 ms encodant l'angle 0-180°).
- **Câbler** un servomoteur trois fils à la STeaMi (GND, alimentation, broche signal sur P7) et **identifier** quand le servo va perdre du couple à cause de l'alimentation 3,3 V.
- **Écrire** un programme MicroPython qui pilote le servo avec `machine.PWM` et une fonction `regler_servo(angle)` qui interpole linéairement entre les bornes.
- **Construire** une animation simple (balayage gauche-droite) puis **détourner** ce code pour des usages plus utiles : minuterie analogique, signal de présence, télécommande de bras de tri.
- **Imaginer** d'autres projets où le servo s'intègre dans un système plus large (couplé à un capteur de distance pour un radar, à un bouton pour une borne de scan, etc.).

---

## Étape 1 : Construire

### Comprendre le servomoteur

Sous son boîtier en plastique, un **servomoteur** rassemble en réalité **quatre éléments** :

1. Un **petit moteur à courant continu** qui produit la rotation.
2. Un **réducteur** (engrenages) qui démultiplie le couple et réduit la vitesse.
3. Un **potentiomètre interne** solidaire de l'axe de sortie, qui mesure en permanence l'angle réel.
4. Un **circuit de contrôle** qui compare l'angle réel à l'angle demandé et alimente le moteur dans le bon sens pour rattraper la différence.

C'est ce dernier circuit qui fait toute la magie : on lui dit « va à 90° », il regarde sa position actuelle, et il fait tourner le moteur juste assez pour atteindre 90°, puis il s'arrête. Si on pousse le bras à la main, il résiste : le circuit voit la différence, rallume le moteur, et ramène à 90°. C'est cette **rétroaction** qui fait qu'un servomoteur **tient sa position**.

:::info[Servomoteur vs moteur continu vs moteur pas-à-pas]
- **Moteur DC classique** : tourne tant qu'on l'alimente, vitesse proportionnelle à la tension, **pas de notion d'angle**. Utilisé pour propulsion (ventilateur, robot mobile).
- **Servomoteur** : se positionne à un angle entre 0 et 180° (parfois 360°), **tient sa position**, retour précis. Utilisé pour articulation, gouvernail, tri.
- **Moteur pas-à-pas** : tourne par incréments (« pas ») de quelques degrés. Pas de retour de position, mais on connaît l'angle à condition d'avoir compté les pas. Utilisé dans imprimantes 3D, scanners.

Le choix entre les trois dépend de ce dont on a besoin : vitesse libre, position précise tenue, ou comptage de pas.
:::

### Comprendre le signal de commande

Le servomoteur attend un signal **PWM (Pulse Width Modulation)** très particulier :

- **Fréquence : 50 Hz**, soit un cycle de **20 ms** qui se répète.
- **Durée d'impulsion** dans chaque cycle :
  - **1 ms** → bras à **0°**
  - **1,5 ms** → bras à **90°** (centre)
  - **2 ms** → bras à **180°**

C'est la **durée de l'impulsion** (pas son nombre, pas sa fréquence) qui code l'angle. Le servo lit cette durée toutes les 20 ms et ajuste sa position en conséquence.

En notation **16 bits MicroPython** (qu'on utilise via `duty_u16`), avec une fréquence de 50 Hz, le cycle entier vaut `65535` :

- 1 ms / 20 ms × 65535 ≈ **3277** (pour 0°)
- 2 ms / 20 ms × 65535 ≈ **6554** (pour 180°)

On va encapsuler ce calcul dans une fonction `regler_servo(angle)` qui prend simplement un angle en degrés et fait l'interpolation.

### Câbler le servomoteur

Le SG-90 (et la plupart des servos hobby) sort trois fils dans un connecteur **JST 3 broches femelle** :

| Couleur fil | Broche signal | Connexion STeaMi  |
| ----------- | ------------- | ----------------- |
| **Noir** (ou marron) | GND            | Pad / broche GND  |
| **Rouge**            | V+ alimentation | Pad / broche 3V3 (ou alim externe 5 V, cf. callout) |
| **Jaune** (ou orange) | Signal PWM    | Broche **P7** (signal `GPIO3_EDGE`, supporte PWM) |

Brancher en respectant l'ordre des fils : c'est facile de tordre le servo si on inverse rouge et noir. À la première mise sous tension, le bras peut faire un petit sursaut, c'est normal.

### Connecter la STeaMi à l'ordinateur

Brancher la STeaMi en USB. Disque amovible `STEAMI` visible, port série prêt dans l'IDE.

---

## Étape 2 : Programmer

### Broches utilisées

| Composant     | Signal STeaMi (Edge) | Broche | Variable Python | Comportement                                     |
| ------------- | -------------------- | ------ | --------------- | ------------------------------------------------ |
| Servomoteur (signal) | `GPIO3_EDGE`  | `P7`   | `servo`         | PWM 50 Hz, duty 3277-6554 pour angle 0-180°      |
| Servomoteur (V+)     | (alimentation) | 3V3 ou alim ext | (pas de variable) | Alimentation 3,3 V à vide, 5 V externe en charge |
| Servomoteur (GND)    | (masse)        | GND  | (pas de variable) | Masse commune                                    |

:::info[Nom court `P7` ou nom de signal `GPIO3_EDGE` ?]
La broche du connecteur Edge a deux noms : un **nom court** style micro:bit (`P7`) et un **nom de signal** documenté côté STeaMi (`GPIO3_EDGE`, cf. [wiki.steami.cc → Pin Mapping → Signaux](https://wiki.steami.cc/docs/hardware/pin-mapping/signals)). Selon la version du firmware MicroPython STeaMi, l'une ou les deux notations peuvent être acceptées par `Pin(...)`.

Le code de cette fiche utilise la forme courte `Pin('P7')`. Si vous obtenez `ValueError: invalid pin name`, essayez `Pin('GPIO3_EDGE')`.
:::

### Programme

```python
# Testée avec firmware STeaMi 0.23.1
#
# Balayage 0° -> 180° -> 0° d'un servomoteur SG-90 (ou équivalent)
# connecté à la broche P7 (signal GPIO3_EDGE, PWM).
#
# Le signal servo est un PWM 50 Hz dont la largeur d'impulsion code
# l'angle :
#   1 ms = 0°, 1.5 ms = 90°, 2 ms = 180°.
# En 16 bits avec un cycle de 20 ms (50 Hz), 1 ms <=> 3277, 2 ms <=> 6554.

from machine import Pin, PWM
from time import sleep_ms

servo = PWM(Pin('P7'))
servo.freq(50)                       # 50 Hz pour servos hobby

DUTY_MIN = 3277                      # impulsion 1 ms, angle 0°
DUTY_MAX = 6554                      # impulsion 2 ms, angle 180°


def regler_servo(angle):
    """Place le bras du servo à l'angle demandé (0 à 180 degrés)."""
    angle = max(0, min(180, angle))  # borne l'angle à [0, 180]
    duty = DUTY_MIN + (DUTY_MAX - DUTY_MIN) * angle // 180
    servo.duty_u16(duty)


while True:
    regler_servo(0)
    sleep_ms(1000)
    regler_servo(180)
    sleep_ms(1000)
```

### Comment ça fonctionne ?

1. **Imports** : `PWM` et `Pin` depuis `machine`, `sleep_ms` pour les pauses.
2. **Initialisation** : on crée un objet `PWM` sur la broche P7, on fixe sa fréquence à **50 Hz**.
3. **Constantes `DUTY_MIN` / `DUTY_MAX`** : calculées une fois pour toutes en début de programme. Pas de magie dans le code de la boucle.
4. **`regler_servo(angle)`** : protège d'abord l'angle avec `max(0, min(180, angle))` (on ne veut pas envoyer 250° ou -10° qui pourraient forcer le servo contre une butée mécanique et l'abîmer). Puis interpole linéairement entre `DUTY_MIN` et `DUTY_MAX`, et applique le duty cycle.
5. **Boucle principale** : alterne entre 0° et 180° avec une pause d'une seconde entre chaque position. Le servo prend environ 0,1 à 0,2 seconde pour atteindre la position demandée selon le couple ; la seconde de pause garantit qu'il finit son mouvement avant le suivant.

:::info[Pourquoi `// 180` et pas `/ 180` ?]
L'opérateur `//` réalise une **division entière**, qui retourne un entier au lieu d'un flottant. On le préfère ici parce que `duty_u16()` attend un entier. Avec `/`, on aurait obtenu un flottant qu'il aurait fallu reconvertir avec `int()`.
:::

### Exécution

- **Test rapide** : lancer le programme depuis l'IDE. Le bras du servo balaie de 0° à 180° toutes les secondes.
- **Programme persistant** : enregistrer sous **`main.py`** pour relancer le balayage à chaque démarrage.

### Dépannage : le servo vibre ou refuse de tourner

Si le servo **vibre, tremble sur place ou bourdonne sans atteindre la position**, dérouler la checklist dans cet ordre :

1. **Masse commune** : si vous utilisez une alim externe pour le servo, vérifier que **GND alim ext + GND servo + GND STeaMi sont bien reliés ensemble** (cf. callout « Alimentation du servomoteur »). Sans cette masse commune, le signal PWM n'a pas de référence et le servo réagit n'importe comment. C'est **la cause la plus fréquente** de servo qui vibre.
2. **Tension trop faible** : sur les 3,3 V de la STeaMi, un SG-90 fonctionne à vide mais bloque dès qu'on lui demande un effort. Si le servo doit déplacer quelque chose (bras, levier, hélice), passer à une alim externe 5 V comme décrit dans le callout.
3. **Charge mécanique** : le bras du servo bute contre quelque chose ou n'a pas la liberté de tourner ? Démonter pour vérifier que rien ne le bloque, puis relancer à vide.
4. **Mauvaise broche** : le fil signal est-il bien sur **P7** ? Une broche non-PWM (ex. `GPIO2_EDGE` / P6 qui n'est pas listée PWM) donnera des résultats erratiques. Cf. tableau « Broches utilisées ».
5. **Calibration PWM** : si tout le reste est OK mais que la course n'est pas 0-180°, ajuster `DUTY_MIN` et `DUTY_MAX` : certains servos demandent 0,5-2,5 ms (donc 1638-8192) au lieu de 1-2 ms (3277-6554).

Si le servo **fait un mouvement bizarre au démarrage** (sursaut, position aléatoire) : c'est le premier appel à `duty_u16()` qui peut envoyer une impulsion à durée indéterminée. Pour éviter, ajouter `regler_servo(90)` (position médiane) au début, puis `sleep_ms(500)` avant la boucle.

---

## Étape 3 : Améliorer

### Défi 1 : Mouvement fluide au lieu de saccadé

Le balayage 0 → 180 → 0 est brutal. Pour un mouvement fluide, faire passer le servo par toutes les valeurs intermédiaires avec un petit pas.

```python
from time import sleep_ms

while True:
    for angle in range(0, 181, 2):
        regler_servo(angle)
        sleep_ms(20)
    for angle in range(180, -1, -2):
        regler_servo(angle)
        sleep_ms(20)
```

90 pas de 2° pour aller de 0 à 180, à 20 ms par pas, donne un mouvement de 1,8 s du début à la fin, lisse comme un essuie-glace.

### Défi 2 : Arrêt court en position médiane

Ajouter un arrêt très court (200 ms) à 90° entre les deux extrêmes, pour donner l'effet d'une « pause respiratoire ».

### Défi 3 : Minuterie analogique

Détourner le servomoteur en **aiguille de minuterie** : sur 60 secondes, déplacer le bras de 3° toutes les secondes (180° / 60 s = 3°/s). En fin de minuterie, faire clignoter une LED RGB intégrée de la STeaMi et sonner le buzzer.

Indice : `regler_servo(angle)` + une variable qu'on incrémente dans une boucle `for i in range(60):`.

### Défi 4 : Démarrer au bouton A

Faire en sorte que le balayage **ne commence qu'après un appui sur le bouton A intégré** de la STeaMi. Avant l'appui, le servo est immobile à 90°.

```python
from machine import Pin

bouton_a = Pin('A_BUTTON', Pin.IN)

regler_servo(90)
print("Appuyer sur A pour démarrer le balayage")
while bouton_a.value() == 1:
    sleep_ms(20)

# ici, l'utilisateur a appuyé sur A : démarrer le balayage
while True:
    regler_servo(0)
    sleep_ms(1000)
    regler_servo(180)
    sleep_ms(1000)
```

---

## Aller plus loin

### Pour comprendre

- **[Servomoteur (Wikipédia)](https://fr.wikipedia.org/wiki/Servomoteur)** : histoire et anatomie détaillée. Né dans l'industrie pour piloter les gouvernails de bateau au début du XXᵉ siècle, démocratisé par le modélisme dans les années 60, omniprésent aujourd'hui dans la domotique et la robotique éducative.
- **[Moteur à courant continu (Wikipédia)](https://fr.wikipedia.org/wiki/Machine_%C3%A0_courant_continu)** : le moteur qui se cache dans tout servomoteur. Sa simplicité (deux fils, une tension, un sens de rotation) en fait l'un des composants les plus enseignés en collège-lycée.
- **[Modulation de largeur d'impulsion (Wikipédia)](https://fr.wikipedia.org/wiki/Modulation_de_largeur_d%27impulsions)** : la technique de signal utilisée ici. Voir aussi la fiche « Contrôler avec un potentiomètre » pour un autre usage du PWM (variation de luminosité d'une LED).
- **[Rétroaction (Wikipédia)](https://fr.wikipedia.org/wiki/R%C3%A9troaction)** : le concept derrière la « tenue de position » du servo. Notion centrale en automatique, qu'on retrouve dans le pilotage automatique d'un avion, le régulateur de vitesse d'une voiture, le thermostat d'un four.

### Pour s'inspirer

- **[Bras robotiques industriels (Wikipédia)](https://fr.wikipedia.org/wiki/Robot_industriel)** : les énormes machines qui assemblent les voitures dans les usines Renault ou Toyota sont des chaînes de servomoteurs articulés (six axes typiquement). Du jouet à 3 € au robot à 50 000 €, c'est le même principe.
- **[OttoDIY](https://www.ottodiy.com/)** : projet open source européen de robot humanoïde imprimé en 3D, piloté par quatre servos (deux hanches + deux chevilles) sur micro:bit ou Arduino. Excellent prolongement de cette fiche en classe pour passer d'un servo seul à un robot qui marche.
- **[Le bras robotique de tri par couleurs](https://thestempedia.com/project/diy-color-sorting-robotic-arm/)** : projet où un servomoteur déplace un bras au-dessus de jetons colorés, un capteur de lumière détermine la couleur, et un second servo trie. Tout est dans cette fiche + la fiche « Capteur de lumière », il ne reste qu'à imaginer la mécanique.
- **[L'usine miniature LEGO Technic](https://www.lego.com/fr-fr/themes/technic)** : les sets Technic récents intègrent des servomoteurs LEGO « PowerUp » pilotés par smartphone via Bluetooth. La logique de commande est identique à celle de la STeaMi, mais avec l'élégance des briques colorées qui se clipsent.

---

_Cette fiche fait partie du projet [I-Novmicro #2 — Action EXAO](/projets/inovmicro-exao). Adaptée du projet [Let's STEAM](/projets/lets-steam) (fiche [`r1as13-servomoteurs`](/ressources/lets-steam/r1as13-servomoteurs)) sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._

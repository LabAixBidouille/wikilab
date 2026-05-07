---
id: i11-capteur-lumiere
title: Capteur de lumière avec la STeaMi
sidebar_label: "Capteur de lumière"
sidebar_position: 11
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>
<div style={{flex: 1}}>
# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><circle cx="12" cy="12" r="4" fill="#8a6e18" opacity="1.0"/><circle cx="12" cy="12" r="6" fill="#8a6e18" opacity="0.25"/><line x1="12" y1="2" x2="12" y2="5" stroke="#8a6e18" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/><line x1="12" y1="19" x2="12" y2="22" stroke="#8a6e18" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/><line x1="2" y1="12" x2="5" y2="12" stroke="#8a6e18" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/><line x1="19" y1="12" x2="22" y2="12" stroke="#8a6e18" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/><line x1="4.93" y1="4.93" x2="7.05" y2="7.05" stroke="#8a6e18" strokeWidth="1.5" strokeLinecap="round" opacity="0.1"/><line x1="16.95" y1="16.95" x2="19.07" y2="19.07" stroke="#8a6e18" strokeWidth="1.5" strokeLinecap="round" opacity="0.1"/><line x1="4.93" y1="19.07" x2="7.05" y2="16.95" stroke="#8a6e18" strokeWidth="1.5" strokeLinecap="round" opacity="0.1"/><line x1="16.95" y1="7.05" x2="19.07" y2="4.93" stroke="#8a6e18" strokeWidth="1.5" strokeLinecap="round" opacity="0.1"/></svg> Capteur de lumière avec la STeaMi

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--info">SteaMi</span>
  <span className="badge badge--warning">MicroPython</span>
</div>

| Projet        | Durée    | Difficulté    | Âge       | Version MicroPython testée |
| ------------- | -------- | ------------- | --------- | -------------------------- |
| I-Novmicro #2 | 35 min   | Débutant | 11 ans et plus | 0.23.1                     |

## Matériel et Montage

- 1 carte STeaMi
- 1 câble USB de données (micro-USB pour la STeaMi V1, USB-C pour la STeaMi V2). Attention : un câble qui ne sert qu'à charger un téléphone ne fonctionnera pas.
- 1 ordinateur sous Windows, macOS ou Linux
- [Thonny](https://thonny.org/) installé et configuré pour la STeaMi (voir la fiche [Thonny — Prise en main de MicroPython](/ressources/inovmicro-exao/i03-decouverte-thonny))
</div>
<img src="/img/ressources/inovmicro-exao/i11-capteur-lumiere/icone.png" alt="Capteur de lumière sur la STeaMi" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />
</div>

---

## De quoi parle-t-on ?

Cette fiche explore une caractéristique clé de l'informatique embarquée : la possibilité de **mesurer une grandeur physique** avec un capteur, et de représenter graphiquement la façon dont cette grandeur **varie dans le temps**.

La STeaMi intègre un capteur **APDS-9960** capable de mesurer la lumière ambiante, mais aussi les composantes **rouge, verte et bleue** de cette lumière, ainsi que la proximité d'un objet et certains gestes. Pour cette fiche, on se concentre sur la mesure de la lumière ambiante — la couleur sera abordée dans l'étape « Améliorer ».

L'avantage du capteur intégré : pas de breadboard ni de câblage. Tout passe par le bus **I2C** interne de la carte, ce qui permet de se concentrer sur la programmation et l'analyse des mesures.

---

## Objectifs d'apprentissage

- Lire la valeur d'un capteur de lumière intégré à une carte microcontrôleur
- Comprendre la notion de capteur numérique communiquant via un bus I2C
- Afficher périodiquement une mesure dans la console et observer ses variations
- Utiliser une LED RGB comme indicateur visuel d'un seuil de mesure
- Découvrir les autres mesures accessibles avec le capteur APDS-9960 (couleurs RGB)
---

## Étape 1 — Construire

Ici, "construire" est rapide : tout le matériel nécessaire est déjà sur la carte.

### Localiser le capteur de lumière

Le capteur **APDS-9960** est soudé sur la face avant de la STeaMi, près de l'écran OLED. Il n'a pas besoin d'être éclairé directement par une source : il mesure la **lumière ambiante** qui atteint sa petite fenêtre transparente.

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/i11-capteur-lumiere/01-emplacement-capteur.png"
    alt="Emplacement du capteur APDS-9960 sur la face avant de la STeaMi"
    style={{maxWidth: '450px', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    Le capteur APDS-9960 sur la face avant de la STeaMi.
  </figcaption>
</figure>

:::info[Qu'est-ce qu'un capteur numérique I2C ?]

Contrairement à une photorésistance qui fournit une tension variable lue par un convertisseur analogique-numérique, l'APDS-9960 est un **capteur numérique** : il fait lui-même la mesure et la conversion, puis envoie le résultat sous forme de **nombre** à la carte via une liaison appelée **I2C** (deux fils : SDA pour les données, SCL pour l'horloge). C'est ce qui permet d'avoir un seul composant qui mesure à la fois la lumière, la couleur, la proximité et les gestes — sans câblage supplémentaire.

:::

### Connecter la carte à l'ordinateur

Brancher la STeaMi à l'ordinateur via le câble USB. Si Thonny est déjà configuré (voir la fiche [Thonny — Prise en main de MicroPython](/ressources/inovmicro-exao/i03-decouverte-thonny)), le panneau **Shell** de Thonny devrait afficher le prompt `>>>` de MicroPython.

### Vérifier que le capteur répond

Avant d'écrire le programme principal, on peut vérifier dans le **REPL** que le capteur est bien détecté sur le bus I2C :

```python
>>> from machine import I2C
>>> i2c = I2C(1)
>>> [hex(a) for a in i2c.scan()]
['0x1e', '0x29', '0x39', '0x55', '0x5d', '0x5f', '0x6b']
```

L'adresse `0x39` correspond à l'APDS-9960. Si elle apparaît, le capteur répond — on peut passer à la programmation.

---

## Étape 2 — Programmer

Premier programme : **lire la lumière ambiante toutes les demi-secondes et l'afficher dans la console**, en utilisant la LED RGB comme indicateur visuel (verte si lumière forte, rouge si sombre).

### Le code

```python
# Testée avec firmware STeaMi 0.23.1
#
# Capteur de lumière — lecture périodique de la lumière ambiante
# avec retour visuel sur la LED RGB :
#   - lumière forte  -> LED verte
#   - lumière faible -> LED rouge

from machine import I2C, Pin
from apds9960 import uAPDS9960
from time import sleep_ms

# Initialisation du capteur sur le bus I2C interne
i2c = I2C(1)
sensor = uAPDS9960(i2c)

# LED RGB de la STeaMi
led_r = Pin('LED_RED', Pin.OUT)
led_g = Pin('LED_GREEN', Pin.OUT)
led_b = Pin('LED_BLUE', Pin.OUT)

# Seuil au-dessus duquel on considère qu'il fait clair.
# À ajuster selon les conditions d'utilisation.
SEUIL_CLAIR = 100


def set_rgb(r, g, b):
    """Allume chaque LED selon la composante (1 = on, 0 = off)."""
    led_r.value(r)
    led_g.value(g)
    led_b.value(b)


print("Lecture du capteur de lumière. Ctrl+C pour arrêter.")

while True:
    # Lecture de la lumière ambiante (canal "clear" du capteur, 16 bits)
    lumiere = sensor.ambient_light()
    print("Lumière :", lumiere)

    # Indicateur visuel
    if lumiere > SEUIL_CLAIR:
        set_rgb(0, 1, 0)   # vert : il fait clair
    else:
        set_rgb(1, 0, 0)   # rouge : il fait sombre

    sleep_ms(500)
```

### Comment cela fonctionne ?

Le programme tient en quatre éléments :

- `from apds9960 import uAPDS9960` importe le pilote du capteur fourni avec MicroPython sur la STeaMi. La classe `uAPDS9960` est une version optimisée pour MicroPython.
- `i2c = I2C(1)` ouvre le bus I2C interne de la carte (celui sur lequel se trouvent tous les capteurs intégrés).
- `sensor.ambient_light()` retourne un nombre entre 0 et 65535 qui représente la **quantité de lumière** atteignant le capteur. Plus la valeur est grande, plus il fait clair. Le capteur est automatiquement activé à la première lecture.
- La boucle `while True` répète la mesure toutes les 500 millisecondes, allume la LED en vert ou en rouge selon la valeur, et affiche le résultat dans la console.

:::info[Plage de valeurs]

Le capteur retourne une valeur sur **16 bits**, donc entre **0** (obscurité totale) et **65535** (lumière très forte). En conditions normales d'éclairage de salle, on observe typiquement des valeurs de quelques dizaines à quelques milliers — il faudra peut-être ajuster `SEUIL_CLAIR` selon l'environnement. Une lampe pointée directement sur le capteur peut faire saturer la valeur à 65535.

:::

### Exécution

- **Test rapide** : bouton **Run** (▶) ou `F5`. Les valeurs défilent dans le panneau **Shell** de Thonny.
- **Programme persistant** : **Fichier → Enregistrer sous… → MicroPython device**, et nommer le fichier **`main.py`**. Il sera relancé à chaque démarrage de la carte.
### Observer les variations

Une fois le programme lancé, plusieurs choses à essayer :

- Couvrir le capteur avec la main : la valeur affichée chute, la LED devient rouge.
- Approcher la carte d'une fenêtre ou d'une lampe : la valeur grimpe, la LED passe au vert.
- Allumer la lampe d'un téléphone et la diriger vers le capteur : on voit clairement le seuil franchi.
<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/i11-capteur-lumiere/02-thonny-shell-mesures.png"
    alt="Valeurs de lumière qui défilent dans le panneau Shell de Thonny"
    style={{maxWidth: '100%', height: 'auto'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    Les valeurs défilent dans le panneau Shell, et chutent quand on couvre le capteur.
  </figcaption>
</figure>

:::tip[Tracer un graphique avec Thonny]

Thonny propose un **traceur de variables** : **Affichage → Plotter** (ou **View → Plotter**). Une fenêtre s'ouvre à côté du Shell et trace en temps réel toutes les valeurs numériques affichées par `print()`. C'est l'équivalent direct du « graphique qui montre comment une valeur varie dans le temps » de la fiche Let's STEAM d'origine.

:::

---

## Étape 3 — Améliorer

Trois pistes pour aller plus loin avec le capteur de lumière.

### 1. Ajuster le seuil et calibrer

La valeur de `SEUIL_CLAIR = 100` est arbitraire. Pour adapter le détecteur à un environnement précis, on peut :

1. Lancer le programme dans la condition « sombre » visée (par exemple capteur recouvert) et noter la valeur lue.
2. Faire de même dans la condition « claire » (lumière ambiante normale).
3. Choisir comme seuil la moyenne des deux valeurs.
Une amélioration plus avancée consiste à **transformer la valeur brute en pourcentage** par rapport à un minimum et un maximum mesurés, ce qui rend la mesure plus parlante.

### 2. Lire les composantes RGB de la lumière

L'APDS-9960 ne se contente pas de mesurer la quantité de lumière : il mesure aussi ses **composantes rouge, verte et bleue**. C'est très différent — on peut, par exemple, distinguer la lumière d'une LED rouge de celle d'une LED verte, alors que la simple lecture de `ambient_light()` donnerait à peu près la même valeur dans les deux cas.

```python
# Lire les quatre canaux du capteur (clair + RGB)
ambiant = sensor.ambient_light()
rouge   = sensor.red_light()
vert    = sensor.green_light()
bleu    = sensor.blue_light()

print("Ambiant :", ambiant, "  R :", rouge, "  V :", vert, "  B :", bleu)
```

À tester en éclairant le capteur avec différentes sources : la lampe d'un téléphone, l'écran allumé sur un fond rouge ou vert, une LED de couleur. Les valeurs des trois canaux varient de manière différente.

### 3. Reproduire la couleur sur la LED RGB

En combinant les deux idées précédentes, on peut faire en sorte que la **LED RGB de la carte reproduise approximativement la couleur dominante** de la lumière reçue. Pour cela, comparer les trois canaux R, V, B et allumer la composante la plus forte. Une piste de structure :

```python
if rouge > vert and rouge > bleu:
    set_rgb(1, 0, 0)
elif vert > bleu:
    set_rgb(0, 1, 0)
else:
    set_rgb(0, 0, 1)
```

---

## Aller plus loin

- [Documentation du driver APDS-9960 sur la STeaMi](https://github.com/steamicc/micropython-steami-lib/blob/main/lib/apds9960/README.md) — toutes les fonctions disponibles, y compris la proximité et les gestes.
- [Fiche technique du capteur APDS-9960 (Broadcom)](https://www.broadcom.com/products/optical-sensors/integrated-ambient-light-and-proximity-sensors/apds-9960) — caractéristiques détaillées du composant.
- [Wiki STeaMi — Capteurs internes](https://wiki.steami.cc/docs/hardware/) — liste de tous les capteurs présents sur la carte.
- [Documentation MicroPython — module `machine.I2C`](https://docs.micropython.org/en/latest/library/machine.I2C.html) — pour comprendre comment fonctionne le bus I2C en MicroPython.
---

_Cette fiche fait partie du projet [I-Novmicro #2 — Action EXAO](/projets/inovmicro-exao). Adaptée du projet [Let's STEAM](/projets/lets-steam) (fiche [`r1as04-capteur-lumiere`](/ressources/lets-steam/r1as04-capteur-lumiere)) sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._


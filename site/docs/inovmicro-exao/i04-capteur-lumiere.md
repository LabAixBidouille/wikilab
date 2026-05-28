---
id: i04-capteur-lumiere
title: Mesurer la lumière ambiante
sidebar_label: "Mesurer la lumière"
sidebar_position: 11
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>
<div style={{flex: 1}}>
# Mesurer la lumière ambiante

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--info">SteaMi</span>
  <span className="badge badge--warning">MicroPython</span>
</div>

| Projet        | Durée  | Difficulté | Âge       | Logiciel STeaMi testé |
| ------------- | ------ | ---------- | --------- | --------------------- |
| I-Novmicro #2 | 35 min | Débutant   | 11-99 ans | 0.23.1                |

## Matériel et Montage

- 1 carte STeaMi
- 1 câble USB de données (micro-USB pour la STeaMi V1, USB-C pour la STeaMi V2).
- 1 ordinateur sous Windows, macOS ou Linux
- Un IDE MicroPython installé et configuré pour la STeaMi. Voir la fiche [Thonny : Prise en main de MicroPython](/ressources/inovmicro-exao/t03-decouverte-thonny) pour la mise en place, tout autre éditeur compatible MicroPython (Mu, VS Code, Vittascience, `mpremote`...) fonctionne aussi.

<PdfLink href="/pdf/inovmicro-exao/STeaMi_Lumiere.pdf">Télécharger en PDF</PdfLink>

</div>
<img src="/img/ressources/inovmicro-exao/i04-capteur-lumiere/icone.png" alt="Capteur de lumière sur la STeaMi" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />
</div>

---

## De quoi parle-t-on ?

Cette fiche explore une caractéristique clé de l'informatique embarquée : la possibilité de **mesurer une grandeur physique** avec un capteur, et de représenter graphiquement la façon dont cette grandeur **varie dans le temps**.

La STeaMi intègre un capteur **APDS-9960** capable de mesurer la lumière ambiante, mais aussi les composantes **rouge, verte et bleue** de cette lumière, ainsi que la proximité d'un objet et certains gestes. Pour cette fiche, on se concentre sur la mesure de la lumière ambiante, la couleur sera abordée dans l'étape « Améliorer ».

L'avantage du capteur intégré : pas de breadboard ni de câblage. Tout passe par le bus **I2C** interne de la carte, ce qui permet de se concentrer sur la programmation et l'analyse des mesures.

---

## Objectifs d'apprentissage

- Lire la valeur d'un capteur de lumière intégré à une carte microcontrôleur
- Comprendre la notion de capteur numérique communiquant via un bus I2C
- Afficher périodiquement une mesure dans la console et observer ses variations
- Utiliser une LED RGB comme indicateur visuel d'un seuil de mesure
- Découvrir les autres mesures accessibles avec le capteur APDS-9960 (couleurs RGB)

---

## Étape 1 : Construire

Ici, "construire" est rapide : tout le matériel nécessaire est déjà sur la carte.

### 1. Localiser le capteur de lumière

Le capteur **APDS-9960** est soudé sur la face avant de la STeaMi, près de l'écran OLED. Il n'a pas besoin d'être éclairé directement par une source : il mesure la **lumière ambiante** qui atteint sa petite fenêtre transparente.

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/i04-capteur-lumiere/01-emplacement-capteur.jpeg"
    alt="Emplacement du capteur APDS-9960 sur la face avant de la STeaMi"
    style={{maxWidth: '450px', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    Le capteur APDS-9960 sur la face avant de la STeaMi.
  </figcaption>
</figure>

:::info[Qu'est-ce qu'un capteur numérique I2C ?]

Contrairement à une photorésistance qui fournit une tension variable lue par un convertisseur analogique-numérique, l'APDS-9960 est un **capteur numérique** : il fait lui-même la mesure et la conversion, puis envoie le résultat sous forme de **nombre** à la carte via une liaison appelée **I2C** (deux fils : SDA pour les données, SCL pour l'horloge). C'est ce qui permet d'avoir un seul composant qui mesure à la fois la lumière, la couleur, la proximité et les gestes, sans câblage supplémentaire.

:::

### 2. Connecter la carte à l'ordinateur

Brancher la STeaMi à l'ordinateur via le câble USB. Si votre IDE MicroPython est déjà configuré (voir la fiche [Thonny : Prise en main de MicroPython](/ressources/inovmicro-exao/t03-decouverte-thonny) si vous démarrez), la console MicroPython doit afficher `>>>`. C'est **l'invite** (parfois appelée « prompt » en anglais) : un signe qui apparaît en début de ligne pour vous dire que la console est prête à recevoir une commande.

### 3. Vérifier que le capteur répond

Avant d'écrire le programme principal, on peut vérifier que le capteur est bien détecté sur le bus I2C. Pour ça, on utilise la console MicroPython en mode interactif (appelé **REPL** pour _Read-Eval-Print Loop_ : on tape une commande, elle s'exécute, on voit le résultat, et la console attend la suivante). Les `>>>` ci-dessous sont l'invite affichée par la console pour signaler qu'elle attend votre commande : ne les tapez pas, écrivez seulement ce qui suit.

```python
>>> from machine import I2C
>>> i2c = I2C(1)
>>> [hex(a) for a in i2c.scan()]
['0x1e', '0x29', '0x39', '0x55', '0x5d', '0x5f', '0x6b']
```

L'adresse `0x39` correspond à l'APDS-9960. Si elle apparaît, le capteur répond, on peut passer à la suite.

### 4. Lancer le programme

Notre premier programme va **lire la lumière ambiante toutes les demi-secondes et l'afficher dans la console**, en utilisant la LED RGB comme indicateur visuel (verte si lumière forte, rouge si sombre). Le code complet est donné à l'[Étape 2 : Programmer](#étape-2--programmer) ci-dessous. Copiez-le dans votre IDE.

Une fois le code en place, deux manières de le lancer :

- **Test rapide** : lancer le programme depuis l'IDE (typiquement bouton **Run** ▶ ou `F5`). Les valeurs défilent dans la console MicroPython.
- **Programme persistant** : enregistrer le fichier sous le nom **`main.py`** sur la carte. Il sera relancé à chaque démarrage.

### 5. Observer les variations

Une fois le programme lancé, plusieurs choses à essayer :

- Couvrir le capteur avec la main : la valeur affichée chute, la LED devient rouge.
- Approcher la carte d'une fenêtre ou d'une lampe : la valeur grimpe, la LED passe au vert.
- Allumer la lampe d'un téléphone et la diriger vers le capteur : on voit clairement le seuil franchi.

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/i04-capteur-lumiere/02-thonny-shell-mesures.png"
    alt="Valeurs de lumière qui défilent dans la console MicroPython"
    style={{maxWidth: '100%', height: 'auto'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    Les valeurs défilent dans la console MicroPython, et chutent quand on couvre le capteur.
  </figcaption>
</figure>

:::info[Tracer un graphique (spécifique à Thonny)]

Si vous utilisez Thonny, l'éditeur propose un **traceur de variables** : **Affichage > Plotter** (ou **View > Plotter** en anglais). Une fenêtre s'ouvre à côté de la console et trace en temps réel toutes les valeurs numériques affichées par `print()`. Pratique pour visualiser comment la lumière varie dans le temps quand on bouge un objet devant le capteur.

:::

---

## Étape 2 : Programmer

### Le code

```python
# Testée avec firmware STeaMi 0.23.1
#
# Capteur de lumière, lecture périodique de la lumière ambiante
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

Le capteur retourne une valeur sur **16 bits**, donc entre **0** (obscurité totale) et **65535** (lumière très forte). En conditions normales d'éclairage de salle, on observe typiquement des valeurs de quelques dizaines à quelques milliers, il faudra peut-être ajuster `SEUIL_CLAIR` selon l'environnement. Une lampe pointée directement sur le capteur peut faire saturer la valeur à 65535.

:::

---

## Étape 3 : Améliorer

Trois pistes pour aller plus loin avec le capteur de lumière.

### 1. Ajuster le seuil et calibrer

La valeur de `SEUIL_CLAIR = 100` est arbitraire. Pour adapter le détecteur à un environnement précis, on peut :

1. Lancer le programme dans la condition « sombre » visée (par exemple capteur recouvert) et noter la valeur lue.
2. Faire de même dans la condition « claire » (lumière ambiante normale).
3. Choisir comme seuil la moyenne des deux valeurs.

Une amélioration plus avancée consiste à **transformer la valeur brute en pourcentage** par rapport à un minimum et un maximum mesurés, ce qui rend la mesure plus parlante.

### 2. Lire les composantes RGB de la lumière

L'APDS-9960 ne se contente pas de mesurer la quantité de lumière : il mesure aussi ses **composantes rouge, verte et bleue**. C'est une différence importante : alors que `ambient_light()` dit juste « il y a beaucoup ou peu de lumière », les canaux R, V, B disent **quelle couleur** est dominante. Le capteur peut donc distinguer la lumière d'une LED rouge de celle d'une LED verte, alors que `ambient_light()` donnerait à peu près la même valeur dans les deux cas.

Les lignes ci-dessous remplacent l'appel à `ambient_light()` dans la boucle du programme précédent, `sensor` est déjà initialisé en haut de fichier.

```python
# Lire les quatre canaux du capteur (clair + RGB)
ambiant = sensor.ambient_light()
rouge = sensor.red_light()
vert = sensor.green_light()
bleu = sensor.blue_light()

print("Ambiant :", ambiant, "  R :", rouge, "  V :", vert, "  B :", bleu)
```

À tester en éclairant le capteur avec différentes sources : la lampe d'un téléphone, l'écran allumé sur un fond rouge ou vert, une LED de couleur. Les valeurs des trois canaux varient de manière différente.

### 3. Reproduire la couleur sur la LED RGB

En combinant les deux idées précédentes, on peut faire en sorte que la **LED RGB de la carte reproduise approximativement la couleur dominante** de la lumière reçue. Pour cela, comparer les trois canaux R, V, B et allumer la composante la plus forte. Une piste de structure, à placer après les lectures des canaux (`sensor` et `set_rgb` sont définis dans le programme principal) :

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

### Pour comprendre

- **[Photorésistance (Wikipedia)](https://fr.wikipedia.org/wiki/Photor%C3%A9sistance)** : le composant cousin de l'APDS-9960. Plus simple : sa résistance change avec la lumière, et c'est tout. Beaucoup de capteurs de lumière débutants en utilisent.
- **[Effet photoélectrique (Wikipedia)](https://fr.wikipedia.org/wiki/Effet_photo%C3%A9lectrique)** : pourquoi la lumière fait du courant. C'est l'explication publiée par Einstein en 1905 qui lui a valu le prix Nobel de physique en 1921, pas la relativité comme on le croit souvent.
- **[L'œil humain (Wikipedia)](https://fr.wikipedia.org/wiki/%C5%92il_humain)** : votre œil est un capteur de lumière biologique avec deux types de cellules (cônes pour la couleur, bâtonnets pour la nuit). C'est exactement le principe d'un capteur RGB comme l'APDS-9960, mais en chair et en os.

### Pour s'inspirer

- **[Public Lab, DIY spectromètre](https://publiclab.org/wiki/spectrometry)** : une communauté de scientifiques amateurs qui ont construit un spectromètre à partir d'un téléphone et d'un DVD. Sert à analyser la pollution de l'eau, identifier des matériaux, ou étudier la chlorophylle des plantes.
- **[Éclairage public adaptatif (Cerema)](https://www.cerema.fr/fr/actualites/eclairage-public-adaptation-eclairage-presence)** : éteindre ou réduire les lampadaires quand la rue est vide, c'est exactement ce qu'on fait dans cette fiche, mais à l'échelle d'une ville. Économies d'énergie + moins de pollution lumineuse.
- **[Photographier la Voie Lactée](https://www.lemonde.fr/blog/autourduciel/2020/05/22/photographier-la-voie-lactee-en-pause-longue/)** : avec des poses de plusieurs secondes ou minutes, un capteur photo accumule la lumière la plus faible. C'est comme cela que les astronomes amateurs photographient des galaxies invisibles à l'œil nu.
- **[Sextant (Wikipedia)](https://fr.wikipedia.org/wiki/Sextant)** : avant le GPS, les marins se repéraient en mesurant l'angle entre un astre et l'horizon. Une histoire fascinante d'instruments de mesure et de navigation.

_Cette fiche fait partie du projet [I-Novmicro #2 : Action EXAO](/projets/inovmicro-exao). Adaptée du projet [Let's STEAM](/projets/lets-steam) (fiche [`r1as04-capteur-lumiere`](/ressources/lets-steam/r1as04-capteur-lumiere)) sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._

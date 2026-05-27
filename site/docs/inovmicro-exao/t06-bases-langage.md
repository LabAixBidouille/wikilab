---
id: t06-bases-langage
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
| Projet        | Durée   | Difficulté | Âge       | Logiciel STeaMi testé |
| ------------- | ------- | ---------- | --------- | --------------------- |
| I-Novmicro #2 | 40 min  | Débutant   | 11-99 ans | 0.23.1                |

## Matériel et Montage

- 1 STeaMi
- 1 câble USB de données (micro-USB pour la STeaMi V1, USB-C pour la STeaMi V2). Attention : un câble qui ne sert qu'à charger un téléphone ne fonctionnera pas.
- 1 ordinateur sous Windows, macOS ou Linux
- 1 éditeur de code (Thonny, Mu, Visual Studio Code, etc.)


</div>
<img src="/img/ressources/inovmicro-exao/t06-bases-langage/icone.png" alt="Logo MicroPython" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />
</div>
---

## De quoi parle-t-on ?

Cette fiche permet de découvrir les bases du langage de programmation MicroPython, utilisé pour programmer la carte STeaMi. Nous allons apprendre les éléments fondamentaux de ce langage, tels que les variables, les fonctions, les conditions et les boucles, à travers des exemples simples et des exercices pratiques. À la fin de cette fiche, vous aurez toutes les bases nécessaires pour commencer à programmer votre carte STeaMi et créer vos propres projets !

---

## Objectifs d'apprentissage

- Comprendre les concepts de base de la programmation en MicroPython
- Savoir utiliser les variables, les fonctions, les conditions et les boucles

---

## Étape 1 : Construire

Pour cette fiche, la partie « construire » va vous permettre de découvrir les éléments de base du langage.

### Les variables

Peu importe le langage de programmation, il existe plusieurs types de variables. Chaque type de variable a une utilité différente et est utilisé dans des contextes différents. Voici les types de variables les plus courants :

| Type de variable | Description | Exemple |
|------------------|-------------|---------|
| Entier (int)     | Représente un nombre entier | `5` |
| Décimal (float) | Représente un nombre à virgule | `3.14` |
| Chaîne de caractères (string) | Représente du texte | `"Alice"` |
| Booléen (bool) | Représente une valeur vraie ou fausse | `True` |

Pour initialiser une variable en MicroPython, il suffit de lui attribuer un nom et une valeur à l'aide du signe égal `=`. Par exemple :

```python
x = 200
y = 10.5
name = "Nathan"
is_active = False
```
:::warning[variables]
 En MicroPython, il est possible de donner à une variable une valeur d'un autre type plus tard dans le programme, car le langage utilise un typage dynamique. Cependant, pour garder un code clair et éviter les erreurs, il est conseillé d'éviter de changer le type d'une variable en cours d'utilisation.
:::

### Les conditions

Les conditions permettent d'adapter le comportement de votre programme en fonction de certaines situations.

| Type de condition | Description |
|------------------|-------------|
| If (si)         | Permet d'exécuter un bloc de code si une condition est remplie |
| Elif (sinon si) | Permet d'exécuter un bloc de code si une condition précédente n'est pas remplie et que la condition actuelle est remplie | 
| Else (sinon)       | Permet d'exécuter un bloc de code si aucune des conditions précédentes n'est remplie |

Exemple d'utilisation des conditions en MicroPython :

```python
x = 15
if x > 10:
    print("x est supérieur à 10")
elif x == 10:
    print("x est égal à 10")
else:
    print("x est inférieur à 10")
```

### Les boucles

Les boucles permettent de répéter une action plusieurs fois sans avoir à réécrire le même code, ce qui permet d'optimiser votre code et de le rendre plus lisible.

| Type de boucle | Description |
|------------------|-------------|
| For (pour)       | Permet de répéter un bloc de code un nombre de fois défini à l'avance |
| While (tant que) | Permet de répéter un bloc de code tant qu'une condition est remplie | 

Exemple d'utilisation des boucles en MicroPython :

```python
# Boucle for
for i in range(5):
    print(i)

# Boucle while
x = 0
while x < 5:
    print(x)
    x += 1
```

### Les fonctions

Une fonction est une instruction ou un groupe d'instructions qui effectue une tâche spécifique. Les fonctions permettent de réutiliser du code et de le rendre plus organisé.

Pour définir une fonction en MicroPython, il suffit de lui donner un nom et de définir les instructions qu'elle doit exécuter à l'aide du mot-clé `def`. Par exemple :

```python
# Définition de la fonction
def greet(name):
    print(f"Hello, {name}!")

# Appel de la fonction
greet("Alice")
```

---

## Étape 2 : Programmer

Maintenant que vous connaissez les bases de MicroPython, on va réaliser un premier programme pour voir comment utiliser ces concepts ensemble. On va créer un jeu de pile ou face avec la STeaMi : l'utilisateur pourra choisir entre allumer la LED rouge ou la LED bleue avec les boutons A et B, et la STeaMi va allumer la LED rouge ou bleue de manière aléatoire et afficher le résultat du jeu dans la console.

### Les broches

| Composant       | Nom dans le programme | Comportement                          |
| --------------- | --------------------- | ------------------------------------- |
| LED RGB Rouge | `LED_RED`             | 1 = allumée, 0 = éteinte              |
| LED RGB Bleue | `LED_BLUE`            | 1 = allumée, 0 = éteinte              |
| Bouton A        | `A_BUTTON`            | 0 = appuyé, 1 = relâché               |
| Bouton B        | `B_BUTTON`            | 0 = appuyé, 1 = relâché               |

```python
import random
from machine import Pin
from time import sleep_ms

# LED RGB : on() allume, off() éteint
led_r = Pin('LED_RED', Pin.OUT)
led_b = Pin('LED_BLUE', Pin.OUT)

# Boutons A et B (résistance pull-up sur la carte : 1 au repos, 0 quand on appuie)
btn_a = Pin('A_BUTTON', Pin.IN)
btn_b = Pin('B_BUTTON', Pin.IN)

# Fonction pour lire le choix de l'utilisateur
def choice():
    while True:
        if btn_a.value() == 0:
            led_r.on()  
            sleep_ms(500)  
            led_r.off() 
            return 'red'
        elif btn_b.value() == 0: 
            led_b.on() 
            sleep_ms(500)
            led_b.off()
            return 'blue'
        sleep_ms(20)

# Boucle principale du jeu
while True:

    print("Choisissez une LED : A pour rouge, B pour bleu")

    # Lecture du choix de l'utilisateur
    user_choice = None
    while user_choice is None:
        user_choice = choice()
    sleep_ms(1000)

    # Choix aléatoire de la carte
    card_choice = random.choice(['red', 'blue'])

    # Affichage du résultat
    if user_choice == card_choice:
        print("Gagné !")
    else:
        print("Perdu !")
    
    # Allumage de la LED correspondant à la carte choisie
    if card_choice == 'red':
        led_r.on()
        sleep_ms(1000)
        led_r.off()
    else:
        led_b.on()
        sleep_ms(1000)  
        led_b.off()
    
    sleep_ms(500)
```

### Fonctionnement du programme :
1. Le programme commence par importer les modules nécessaires : `random` pour les choix aléatoires, `Pin` pour contrôler les broches de la carte, et `sleep_ms` pour faire des pauses dans le programme.
2. Les broches des LED et des boutons sont configurées : les LED sont en mode sortie (OUT) et les boutons en mode entrée (IN) avec une résistance pull-up intégrée.
3. La fonction `choice()` lit en continu l'état des boutons A et B. Si le bouton A est pressé, la LED rouge s'allume brièvement et la fonction retourne `'red'`. Si le bouton B est pressé, la LED bleue s'allume brièvement et la fonction retourne `'blue'`. Si aucun bouton n'est pressé, la fonction retourne `None`.
4. La boucle principale du jeu affiche un message invitant l'utilisateur à choisir une LED, puis attend que l'utilisateur fasse un choix en appuyant sur un bouton.
5. Une fois que l'utilisateur a fait son choix, le programme génère un choix aléatoire pour la carte (rouge ou bleu) et compare ce choix avec celui de l'utilisateur.
6. Le résultat du jeu est affiché dans la console : « Gagné ! » si l'utilisateur a choisi la même couleur que la carte, ou « Perdu ! » sinon.
7. Enfin, la LED correspondant à la carte choisie s'allume brièvement pour indiquer le résultat du jeu, avant que le programme ne recommence.

### Exécution du programme (Thonny) :
- **Test rapide** : bouton **Run** (▶) ou `F5`. Le code s'exécute sur la carte sans être sauvegardé.
- **Programme persistant** : **Fichier > Enregistrer sous... > MicroPython device**, et nommer le fichier **`main.py`**. Il sera relancé à chaque démarrage de la carte.

---

## Étape 3 : Améliorer

Maintenant que vous connaissez les bases, pour améliorer votre code vous devez connaître les bonnes pratiques de programmation. Voici quelques bonnes pratiques à suivre :

### Respecter les conventions de nommage
- Utiliser des noms de variables et de fonctions clairs et descriptifs
- Utiliser toujours le même style de nommage (par exemple, `snake_case`, `camelCase`, etc.)
- Garder toujours la même langue : ne pas passer du français à l'anglais dans votre code pour les noms de variables et de fonctions

### Organiser son code
- Utiliser des fonctions pour organiser son code et éviter les répétitions
- Une fonction doit faire une seule tâche
- Utiliser des commentaires pour expliquer le fonctionnement de son code et faciliter sa compréhension
- Utiliser des espaces pour améliorer la lisibilité de son code, par exemple écrire `x = 5` plutôt que `x=5`

---

## Aller plus loin

### Les ressources STeaMi

[Wiki STeaMi](https://wiki.labaixbidouille.com/projets/inovmicro-exao) : Pour savoir utiliser chaque composant de la carte STeaMi et découvrir ses différentes fonctionnalités.

### Pour approfondir :
- **[Documentation officielle de MicroPython](https://docs.micropython.org/en/latest/)**
- **[Wiki STeaMi : Thonny](https://wiki.steami.cc/docs/software/micropython/thonny)**
- **[Wiki STeaMi : Premiers pas](https://wiki.steami.cc/docs/software/getting-started)**

---

_Cette fiche fait partie du projet [I-Novmicro #2 : Action EXAO](/projets/inovmicro-exao). Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr). Informations basées sur la [documentation officielle STeaMi](https://wiki.steami.cc/)._
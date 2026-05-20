---
id: i03-boutons
title: Utiliser des boutons-poussoirs
sidebar_label: 'Utiliser des boutons-poussoirs'
sidebar_position: 10
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>
<div style={{flex: 1}}>
# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="4" y="10" width="16" height="10" rx="2" fill="#8a6e18" opacity="0.1"/><rect x="4" y="10" width="16" height="10" rx="2" fill="none" stroke="#8a6e18" strokeWidth="1.5"/><circle cx="12" cy="8" r="5" fill="#8a6e18" opacity="0.25"/><circle cx="12" cy="8" r="3.5" fill="#8a6e18"/><line x1="8" y1="22" x2="8" y2="20" stroke="#8a6e18" strokeWidth="1.5"/><line x1="16" y1="22" x2="16" y2="20" stroke="#8a6e18" strokeWidth="1.5"/></svg> Utiliser des boutons-poussoirs

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">SteaMi</span>
  <span className="badge badge--warning">MicroPython</span>
</div>

| Projet        | Durée  | Difficulté    | Âge       | Logiciel STeaMi testé |
| ------------- | ------ | ------------- | --------- | --------------------- |
| I-Novmicro #2 | 25 min | Intermédiaire | 11-99 ans | 0.23.1                |

## Matériel et Montage

- 1 carte STeaMi
- 1 câble USB de données (micro-USB pour la STeaMi V1, USB-C pour la STeaMi V2). Attention : un câble qui ne sert qu'à charger un téléphone ne fonctionnera pas.
- 1 ordinateur sous Windows, macOS ou Linux
- Un IDE compatible MicroPython : Thonny (voir la fiche [Thonny : Prise en main de MicroPython](/ressources/inovmicro-exao/t03-decouverte-thonny)) ou tout autre éditeur compatible (Mu, VS Code, Vittascience, `mpremote`…).

</div>
<img src="/img/ressources/inovmicro-exao/i03-boutons/icone.png" alt="Boutons-poussoirs de la STeaMi" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />
</div>

---

## De quoi parle-t-on ?

Le **bouton-poussoir** est le composant le plus simple pour faire le lien entre une **action physique** (un doigt qui appuie) et une **action numérique** (un programme qui réagit). On en trouve partout : clavier d'ordinateur, interrupteur de chevet, manette de console, bouton d'arrêt d'urgence… Tous fonctionnent sur le même principe : un appui ferme un circuit, un relâchement le rouvre.

La STeaMi intègre trois boutons-poussoirs directement utilisables sans câblage : les boutons **A**, **B** et **Menu**. Dans cette fiche, on apprend à les lire en MicroPython et à déclencher des actions selon qu'ils sont appuyés ou relâchés. C'est la brique de base pour construire toute interface utilisateur : menus, jeux, télécommandes.

Cette fiche reprend l'activité Let's STEAM [Utiliser des boutons-poussoirs](/ressources/lets-steam/r1as03-boutons), adaptée du couple STM32 IoT Node + MakeCode vers STeaMi + MicroPython. Dans la fiche source, l'élève câble deux boutons et deux LED sur une breadboard ; ici on tire parti des composants déjà soudés sur la STeaMi.

---

## Objectifs d'apprentissage

- Lire l'état d'un bouton intégré à la STeaMi en MicroPython avec le module `machine`
- Comprendre la **logique inverse** des boutons (1 au repos, 0 quand on appuie) due à la résistance de tirage
- Détecter une **transition** d'état (relâché → appuyé) plutôt qu'un simple état, pour ne déclencher qu'une fois par appui
- Combiner lecture de bouton et pilotage de LED dans une même boucle d'événements
- Identifier le pattern « machine à états » derrière un mini-jeu à deux joueurs

---

## Étape 1 : Construire

Ici, « construire » est rapide : les trois boutons-poussoirs sont déjà soudés sur la face avant de la STeaMi. Pas de breadboard, pas de câblage.

### 1. Localiser les boutons

Sur la STeaMi, trois boutons-poussoirs sont accessibles dans le code via des **noms parlants** :

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/i03-boutons/bouton.png"
    alt="Emplacement des boutons A, B et Menu sur la STeaMi"
    style={{maxWidth: '450px', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    Les trois boutons-poussoirs de la face avant : A, B et Menu.
  </figcaption>
</figure>

| Bouton      | Nom de broche  |
| ----------- | -------------- |
| Bouton A    | `A_BUTTON`     |
| Bouton B    | `B_BUTTON`     |
| Bouton Menu | `MENU_BUTTON`  |

:::info[Logique inverse]

Chacun de ces boutons est câblé sur la carte avec une **résistance de tirage** (4,7 kΩ) qui maintient la broche à **3,3 V** quand le bouton est relâché. Appuyer sur le bouton met la broche à **0 V**. C'est pour cela que `value()` renvoie **`1` quand le bouton est relâché** et **`0` quand on appuie**. Logique inverse de ce qu'on attendrait intuitivement.

:::

### 2. Connecter la carte à l'ordinateur

Brancher la STeaMi à l'ordinateur via le câble USB. Si l'IDE est déjà configuré (voir la fiche [Thonny : Prise en main de MicroPython](/ressources/inovmicro-exao/t03-decouverte-thonny) si vous démarrez), la console MicroPython doit afficher `>>>` — c'est **l'invite** (parfois appelée « prompt » en anglais) : un signe qui apparaît en début de ligne pour vous dire que la console est prête à recevoir une commande.

### 3. Lancer le programme

Notre premier programme va proposer un **mini-jeu à deux joueurs** : la première personne qui appuie sur son bouton allume sa LED. Bouton A → LED rouge, bouton B → LED bleue. Tant qu'un bouton est maintenu enfoncé, l'autre joueur ne peut plus gagner. Le code complet est donné à l'[Étape 2 : Programmer](#étape-2--programmer) ci-dessous — copiez-le dans votre IDE.

Une fois le code en place, deux manières de le lancer :

- **Test rapide** : lancer le programme depuis l'IDE (typiquement bouton **Run** ▶ ou `F5`).
- **Programme persistant** : enregistrer le fichier sous le nom **`main.py`** sur la carte. Il sera relancé à chaque démarrage.

### 4. Jouer

Une fois le programme lancé :

- Appuyer sur **A** : la LED rouge s'allume.
- Appuyer sur **B** : la LED bleue s'allume.
- Tant qu'un bouton reste enfoncé, l'autre n'a plus aucun effet — le premier joueur a gagné le tour.
- Relâcher les deux boutons : les LED s'éteignent, le tour suivant peut commencer.

À deux personnes, c'est un mini-jeu de réflexes. Seul, c'est l'occasion d'observer en temps réel comment chaque appui modifie l'état du programme.

---

## Étape 2 : Programmer

### Le code

```python
# Testée avec firmware STeaMi 0.23.1
from machine import Pin

# LED RGB de la STeaMi (sortie push-pull)
led_r = Pin('LED_RED', Pin.OUT)
led_b = Pin('LED_BLUE', Pin.OUT)

# Boutons A et B (résistance de tirage externe : 1 au repos, 0 quand on appuie)
btn_a = Pin('A_BUTTON', Pin.IN)
btn_b = Pin('B_BUTTON', Pin.IN)

# Drapeau : un appui est-il possible pour le tour en cours ?
# Tant que `tour_libre` est False, plus aucune LED ne réagit
# avant que les deux boutons soient relâchés.
tour_libre = True

while True:
    a_appuye = btn_a.value() == 0
    b_appuye = btn_b.value() == 0

    if not a_appuye and not b_appuye:
        # Les deux boutons sont relâchés : on éteint les LED et
        # on rouvre le tour suivant.
        led_r.off()
        led_b.off()
        tour_libre = True
    elif tour_libre and a_appuye:
        # Premier appui du tour, sur A : LED rouge.
        led_r.on()
        tour_libre = False
    elif tour_libre and b_appuye:
        # Premier appui du tour, sur B : LED bleue.
        led_b.on()
        tour_libre = False
```

### Comment cela fonctionne ?

Le programme s'organise en quatre parties :

- **Initialisation** : on déclare les deux LED (`Pin.OUT`) et les deux boutons (`Pin.IN`). Le firmware STeaMi expose les composants sous des **noms parlants** (`'LED_RED'`, `'A_BUTTON'`…) — pas besoin de mémoriser un numéro de broche.
- **Lecture des boutons** : `btn_a.value()` renvoie `1` ou `0`. À cause de la logique inverse, on compare à `0` pour savoir si le bouton est appuyé. On stocke le résultat dans `a_appuye` (booléen) pour rendre la suite plus lisible.
- **Détection de transition** : la variable `tour_libre` joue le rôle de **drapeau**. Elle passe à `False` dès qu'on allume une LED, ce qui empêche l'autre bouton de prendre la main. Elle ne repasse à `True` que quand **les deux boutons sont relâchés** — c'est ce qui marque la fin du tour.
- **Boucle principale** : à chaque tour de boucle, on lit les deux boutons et on choisit la branche `if/elif/elif` appropriée. Les LED restent allumées tant qu'un bouton est appuyé.

:::info[Machine à états]

Le drapeau `tour_libre` transforme cette boucle en mini **machine à états** : on est soit dans l'état « tour libre » (aucune LED allumée, on attend un appui), soit dans l'état « tour gagné » (une LED allumée, on attend que les deux boutons se relâchent). Ce pattern revient partout en programmation interactive — distributeurs, menus, jeux vidéo.

:::

---

## Étape 3 : Améliorer

### 1. Compter les points

Ajouter deux compteurs `score_a` et `score_b` qui s'incrémentent à chaque tour gagné, puis afficher le score dans la console avec `print()`. Variante : remettre les compteurs à zéro avec le bouton Menu.

### 2. Faire clignoter la LED du gagnant

Plutôt que d'allumer la LED en continu, la faire clignoter quelques fois pour bien marquer la victoire. La technique est dans la fiche [Faire clignoter une LED](/ressources/inovmicro-exao/i01-led).

### 3. Afficher le résultat sur l'écran

Combiner cette fiche avec la fiche [Afficher du texte sur l'écran OLED](/ressources/inovmicro-exao/i10-texte-oled) pour afficher le nom du gagnant en grand sur l'écran intégré. Beaucoup plus parlant qu'une simple LED.

### 4. Jeu de réaction (bonus)

Au lieu de lancer la partie immédiatement, attendre un délai aléatoire (`random.uniform(1, 5)` secondes), puis allumer brièvement les deux LED simultanément comme signal de départ. Le premier qui appuie après le signal gagne — celui qui appuie avant a un faux départ. Idée centrale : mesurer le **temps de réaction**, lié à la fiche transverse [Temps de réaction](/ressources/thedexterlab/programmation/programmation-distraction-temps-reaction).

---

## Aller plus loin

### Pour comprendre

- **[Bouton-poussoir — Wikipedia](https://fr.wikipedia.org/wiki/Bouton-poussoir)** : histoire, types (à fermeture, à ouverture, à accrochage), applications. Le composant le plus simple, mais le pilier de presque toutes les interfaces.
- **[Anti-rebond — Wikipedia](https://fr.wikipedia.org/wiki/Anti-rebond)** : un bouton qui se ferme rebondit pendant quelques millisecondes, ce qui peut faire enregistrer plusieurs appuis pour un seul clic. Le pattern de détection de transition utilisé ici résout en partie ce problème ; les solutions plus poussées sont logicielles (temporisation) ou matérielles (condensateur).
- **[Automate fini — Wikipedia](https://fr.wikipedia.org/wiki/Automate_fini)** : le drapeau `tour_libre` est une mini machine à états à deux états. Les automates finis sont une des formalisations les plus utiles en informatique : compilateurs, ascenseurs, distributeurs, expressions régulières…

### Pour s'inspirer

- **[Le buzzer de jeu télévisé](https://fr.wikipedia.org/wiki/Buzzer_(jeu_t%C3%A9l%C3%A9vis%C3%A9))** : exactement le même principe que notre mini-jeu, mais à l'échelle d'un plateau de télévision — *Questions pour un champion*, *Slam*, *Burger Quiz*… Premier appuyé, premier servi.
- **[Borne d'arcade (projet JediTrack)](/ressources/jeditrack/borne-arcade)** : fiche du wiki sur la fabrication d'une borne d'arcade complète. Les boutons d'arcade fonctionnent exactement comme ceux de la STeaMi, en plus gros et en plus colorés.
- **[Bouton STOP des bus](https://fr.wikipedia.org/wiki/Bus_%C3%A0_arr%C3%AAt_sur_demande)** : un bouton-poussoir qui change la trajectoire d'un véhicule à quelques tonnes. Présent partout dans les transports en commun depuis les années 1950.
- **[Manette NES (Nintendo)](https://fr.wikipedia.org/wiki/Manette_de_Nintendo_Entertainment_System)** : 8 boutons-poussoirs sur un PCB, et toute l'histoire du jeu vidéo des années 80. Une bonne occasion de regarder ce qu'il y a *à l'intérieur* d'un objet familier.

---

_Cette fiche fait partie du projet [I-Novmicro #2 : Action EXAO](/projets/inovmicro-exao). Adaptée du projet [Let's STEAM](/projets/lets-steam) (fiche [`r1as03-boutons`](/ressources/lets-steam/r1as03-boutons)) sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._

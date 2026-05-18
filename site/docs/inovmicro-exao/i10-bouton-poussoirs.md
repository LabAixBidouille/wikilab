---
id: i10-bouton-poussoirs
title: Boutons poussoirs
sidebar_label: 'Boutons-poussoirs'
sidebar_position: 10
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="3" y="5" width="18" height="14" rx="2" fill="#8a6e18" opacity="0.1"/><rect x="5" y="7" width="14" height="10" rx="1" fill="#8a6e18" opacity="0.25"/><rect x="8" y="9" width="8" height="6" rx="0.5" fill="#8a6e18"/><circle cx="6" cy="8" r="0.5" fill="#8a6e18"/><circle cx="18" cy="8" r="0.5" fill="#8a6e18"/><circle cx="6" cy="16" r="0.5" fill="#8a6e18"/><circle cx="18" cy="16" r="0.5" fill="#8a6e18"/><line x1="3" y1="11" x2="1" y2="11" stroke="#8a6e18" strokeWidth="1"/><line x1="3" y1="14" x2="1" y2="14" stroke="#8a6e18" strokeWidth="1"/><line x1="21" y1="11" x2="23" y2="11" stroke="#8a6e18" strokeWidth="1"/><line x1="21" y1="14" x2="23" y2="14" stroke="#8a6e18" strokeWidth="1"/><line x1="10" y1="21" x2="14" y2="21" stroke="#8a6e18" strokeWidth="1"/><line x1="12" y1="19" x2="12" y2="21" stroke="#8a6e18" strokeWidth="1"/></svg> Boutons poussoirs

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--info">SteaMi</span>
  <span className="badge badge--warning">MicroPython</span>
</div>

| Projet        | Durée               | Difficulté                                 | Âge                    | Logiciel STeaMi testé |
| ------------- | ------------------- | ------------------------------------------ | ---------------------- | --------------------- |
| I-Novmicro #2 | 25 min  |Intermédiaire|11-15 ans |0.23.1
## Matériel et Montage

- 1 carte STeaMi
- 1 câble USB de données (micro-USB pour la STeaMi V1, USB-C pour la STeaMi V2). Attention : un câble qui ne sert qu'à charger un téléphone ne fonctionnera pas.
- 1 ordinateur avec navigateur web
- 1 IDE MicroPython installé et configuré pour la STeaMi. Voir la fiche [Thonny : Prise en main de MicroPython](/ressources/inovmicro-exao/i03-decouverte-thonny) pour la mise en place, tout autre éditeur compatible MicroPython (Mu, VS Code, Vittascience, `mpremote`…) fonctionne aussi.

</div>

<img src="/img/ressources/inovmicro-exao/i10-boutons-poussoirs/icone.png" alt="<description courte de la fiche>" style={{width: '210px', height: '210px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?
Le bouton poussoir est un composant électronique qui permet de faire le lien entre une action physique (appuyer sur le bouton) et une action numérique (envoyer une information à la carte STeaMi). C'est un élément de base pour créer des interfaces physiques, comme des claviers, des télécommandes, ou des jeux interactifs.

Cette fiche est inspirée d'un projet de lets-steam sur [les boutons poussoirs](https://wiki.labaixbidouille.com/ressources/lets-steam/r1as03-boutons).

---

## Objectifs d'apprentissage
- Ajouter de l'interactivité
- Gérer un événement déclenché par un bouton
- Utiliser une variable pour stocker l'état actuel du programme

---

## Étape 1 : Construire

Ici, « construire » est rapide : tout le matériel nécessaire est déjà sur la carte.

Sur la carte STeaMi vous pourrez retrouver 3 boutons poussoirs (bouton A, bouton B et bouton menu), et 1 bouton multidirectionnel. Pour cette fiche, on va uniquement se concentrer sur les boutons poussoirs.

<figure style={{textAlign: 'center', margin: '1rem auto'}}>
  <img
    src="/img/ressources/inovmicro-exao/i10-boutons-poussoirs/bouton.png"
    alt="Les boutons de la Steami"
    style={{maxWidth: '450px', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}
  />
  <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
    Les boutons de la Steami
  </figcaption> 
</figure>

Chaque bouton poussoir est associé à un nom :

bouton | nom
--- | ---
bouton A | A_BUTTON
bouton B | B_BUTTON
bouton menu | MENU_BUTTON

### Connecter la carte à l'ordinateur

Branchez la STeaMi à l'ordinateur via le câble USB. Si votre IDE MicroPython est déjà configuré (voir la fiche [Thonny : Prise en main de MicroPython](/ressources/inovmicro-exao/i03-decouverte-thonny) si vous démarrez), la console MicroPython doit afficher le prompt `>>>`.

---

## Étape 2 : Programmer

On va maintenant écrire un programme qui allume la LED verte quand on appuie sur le bouton A, et la LED bleue quand on appuie sur le bouton B. Les 2 boutons ne peuvent pas être appuyés en même temps, et les LED s'éteignent quand on relâche les boutons.

```python
# Testée avec firmware STeaMi 0.23.1

# On commence par définir les pins des LED, des boutons et une variable 
# pour savoir si on peut appuyer sur les boutons ou pas
LED_RED = Pin("LED_RED", Pin.OUT_PP)
LED_BLUE = Pin("LED_BLUE", Pin.OUT_PP)

A_BUTTON = Pin("A_BUTTON", Pin.IN, Pin.PULL_UP)
B_BUTTON = Pin("B_BUTTON", Pin.IN, Pin.PULL_UP)

weCanPushIt = True

# Ensuite, on entre dans une boucle infinie pour vérifier en permanence l'état des boutons
while True:
  if weCanPushIt and digitalRead(A_BUTTON) == 0:
      LED_RED.value(1)
      weCanPushIt = False
  elif weCanPushIt and digitalRead(B_BUTTON) == 0:
      LED_BLUE.value(1)
      weCanPushIt = False
  else:
      LED_RED.value(0)
      LED_BLUE.value(0)
      weCanPushIt = True
```

### Comment cela fonctionne ?
Voici comment le programme fonctionne :
- On définit les pins des LED et des boutons, ainsi qu'une variable `weCanPushIt` pour savoir si on peut appuyer sur les boutons ou pas.
- On entre dans une boucle infinie pour vérifier en permanence l'état des boutons.
- Si `weCanPushIt` est `True` et que le bouton A est appuyé (c'est-à-dire que sa valeur est 0), on allume la LED verte et on met `weCanPushIt` à `False` pour éviter que les 2 boutons soient appuyés en même temps.
- Si `weCanPushIt` est `True` et que le bouton B est appuyé, on allume la LED bleue et on met `weCanPushIt` à `False`.
- Si aucun bouton n'est appuyé, on éteint les LED et on remet `weCanPushIt` à `True` pour pouvoir appuyer à nouveau sur les boutons.

### Exécution

- **Test rapide** : lancez le programme depuis votre IDE (typiquement bouton **Run** ▶ ou `F5`). Les valeurs défilent dans la console MicroPython.
- **Programme persistant** : enregistrez le fichier sous le nom **`main.py`** sur la carte. Il sera relancé à chaque démarrage.

---

## Étape 3 : Améliorer
Voici quelques idées pour aller plus loin :
- Modifiez votre programme pour faire clignoter la LED du gagnant en utilisant la fiche d'activité « Faire clignoter une LED ».
- Affichez un message sur l'écran pour indiquer le score et le gagnant en utilisant la fiche d'activité [texte oled](/ressources/inovmicro-exao/i17-texte-oled).

---

Cette fiche fait partie du projet [I-Novmicro #2 : Action EXAO](/projets/inovmicro-exao). Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).
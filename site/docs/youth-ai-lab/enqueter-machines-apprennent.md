---
id: enqueter-machines-apprennent
title: 'Enquêter sur la façon dont les machines apprennent'
sidebar_label: 'Enquêter sur la façon dont les machines apprennent'
sidebar_position: 7
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Enquêter sur la façon dont les machines apprennent

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--primary">Éducation civique</span>
  <span className="badge badge--info">Intelligence artificielle</span>
  <span className="badge badge--info">Apprentissage supervisé</span>
  <span className="badge badge--warning">Teachable Machine</span>
</div>

| Projet       | Durée              | Difficulté | Âge       |
| ------------ | ------------------ | ---------- | --------- |
| Youth AI Lab | 3 heures (4 temps) | Débutant   | 12-18 ans |

## Matériel

- 1 jeu de cartes « situations du quotidien » par groupe, mêlant des objets à IA et des objets sans IA (porte automatique, fil d'actualité, feu tricolore, aspirateur robot, filtre de visage, assistant vocal)
- 1 jeu de cartes de formes concaves et convexes par groupe, avec les formes de test marquées d'un point d'interrogation
- 2 affiches ou 2 boîtes étiquetées « Pile 1 » et « Pile 2 », 1 jeu par classe
- Fiches de relevé, 1 par groupe
- 1 ordinateur par groupe
- Teachable Machine, outil en ligne utilisé au troisième temps

<PdfLink href="/pdf/youth-ai-lab/YouthAiLab_Ideation_Sheet_UAB_AI_Detectives.pdf">Télécharger la fiche d'exploration</PdfLink>

</div>

<img src="/img/ressources/youth-ai-lab/enqueter-machines-apprennent/icone.png" alt="Enquêter sur la façon dont les machines apprennent" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## Thèmes d'exploration

- La **présence quotidienne de l'IA** : où l'intelligence artificielle apparaît-elle dans la vie de tous les jours ?
- **Automatisation ou intelligence artificielle** : pourquoi tout système automatique n'est-il pas une IA ?
- L'**apprentissage supervisé** : apprendre à classer à partir d'exemples étiquetés
- La notion de **modèle** : une représentation interne construite à partir de données
- Le **biais algorithmique** : comment les données d'entraînement peuvent fausser les résultats

Cette fiche est la première d'un parcours de trois séances conçu par l'Universitat Autònoma de Barcelona. Elle est suivie de [Entraîner le cerveau de la machine](/ressources/youth-ai-lab/entrainer-cerveau-machine), puis de [Concevoir une IA avec un robot](/ressources/youth-ai-lab/concevoir-ia-avec-robot).

---

## Déroulé de l'exploration

Les jeunes enquêtent sur les endroits où l'IA apparaît dans la vie quotidienne, comparent la programmation par règles et l'apprentissage automatique, puis entraînent un vrai modèle. Ils découvrent qu'une IA apprend des régularités dans des données plutôt qu'elle ne comprend comme une personne.

### Étape 1 : Détectives de l'IA (30 minutes)

**Question clé** : _Où trouve-t-on de l'IA dans la vie de tous les jours ?_

Après la question d'ouverture, chaque groupe trie les cartes « situations du quotidien » en trois colonnes :

- **Sûrement de l'IA**
- **Parfois de l'IA**
- **Sûrement pas de l'IA**

Une discussion en grand groupe compare les réponses et construit une première définition de travail : il y a IA quand un système **utilise des données pour reconnaître des régularités** et **faire des prédictions ou prendre des décisions**.

:::info[Notes pour l'enseignant·e]
Les désaccords entre groupes sont la matière première de l'étape. Un feu tricolore à minuterie fixe et un feu tricolore qui adapte ses cycles au trafic mesuré se ressemblent de l'extérieur : c'est en cherchant ce qui les distingue que les jeunes formulent eux-mêmes le critère « données + apprentissage ».
:::

---

### Étape 2 : Des règles ou des exemples (90 minutes)

**Question clé** : _Peut-on apprendre une règle sans que personne ne la formule ?_

L'activité se joue en deux manches sur la même tâche de classement de formes.

**Manche 1 : la machine à règles.** L'animateur·rice joue un programme rigide. Il ou elle applique une règle explicite, annoncée à l'avance, et classe les formes mécaniquement. Le comportement est prévisible et se raconte en une phrase.

**Manche 2 : la machine qui apprend.** Chaque groupe joue une IA qui doit apprendre la même tâche uniquement à partir d'exemples, sans que la règle ne soit jamais énoncée.

- **Phase d'entraînement** : les cartes déjà triées sont présentées une par une, dans la pile 1 ou la pile 2
- **Phase de test** : le groupe reçoit les formes marquées d'un point d'interrogation et doit prédire leur pile
- **Les intrus** : certaines formes de test sont conçues pour résister. Une forme concave qui paraît plus régulière ou plus fermée que les autres, une forme présentée à l'envers. Le groupe doit trancher malgré tout et forcer un choix

Le débat de clôture nomme le vocabulaire que les jeunes viennent de manipuler sans le savoir : **entrée**, **modèle**, **sortie**, **données d'entraînement**, **données de test**, **prédiction**. La règle cachée est enfin révélée : concave contre convexe.

:::info[Notes pour l'enseignant·e]
Les cartes se prêtent à trois critères de tri : la couleur (jaune / bleu), le remplissage (motif / uni) et la forme (concave / convexe). Les deux premiers sont évidents et servent d'échauffement. Le troisième est celui qui produit le déclic, parce qu'il est difficile à verbaliser même quand on l'a compris. C'est exactement la situation d'un modèle entraîné : il classe correctement sans pouvoir énoncer la règle.
:::

---

### Étape 3 : Teachable Machine (30 minutes)

**Question clé** : _Qu'est-ce qui change quand c'est une vraie machine qui apprend ?_

Chaque groupe entraîne un modèle sur quelques cartes d'exemple, puis le met à l'épreuve :

- sur de nouvelles cartes jamais vues
- en changeant la lumière
- en changeant l'angle de présentation
- en changeant la distance à la caméra

Les prédictions sont consignées dans un tableau au fur et à mesure. Deux constats émergent : la machine **classe sans connaître la règle**, et le résultat **dépend fortement des exemples fournis**.

---

### Étape 4 : Qu'avons-nous appris ? (30 minutes)

Chaque groupe écrit sur une carte de clôture :

- **une idée clé** retenue de la journée
- **une preuve** tirée de ce qui a été observé
- **une question ouverte** qui reste en suspens

La mise en commun relie la séance au projet de l'année : un robot qui répond à un défi lié aux Objectifs de développement durable doit d'abord savoir **reconnaître, classer et décider**.

---

## Productions attendues

À l'issue de l'exploration, les jeunes savent :

- distinguer une **automatisation** d'une **intelligence artificielle**
- classer **à partir d'exemples** plutôt qu'à partir de règles fixes
- **entraîner un modèle simple** et le mettre en défaut
- constater que les résultats **dépendent des données d'entraînement**
- employer à bon escient les mots **modèle**, **prédiction**, **erreur** et **biais**

Ce sont leurs premiers outils pour le projet final.

---

## L'accroche et le côté ludique

- Jouer les **détectives** pour percer une règle secrète que personne n'a le droit d'énoncer
- Entraîner une machine, puis la **prendre en flagrant délit** d'erreur assurée
- Découvrir que le problème n'est pas seulement technique, mais aussi **social et éthique**

---

## Indicateurs de réussite

Les jeunes :

- décrivent l'IA comme un **système entraîné sur des données**, et non comme une technologie automatique ou intelligente en soi
- énoncent la différence entre une **règle explicite** et un **modèle entraîné sur des exemples**
- **anticipent les erreurs** à partir des données et abandonnent l'idée d'une boîte magique infaillible
- soulèvent des questions de **responsabilité, de qualité des données et d'équité**

---

## Aller plus loin

### Pour comprendre

- Les 17 Objectifs de développement durable des Nations unies, cadre commun à tout le parcours : https://www.un.org/sustainabledevelopment/fr/objectifs-de-developpement-durable/
- La page Wikipédia sur l'apprentissage supervisé, pour poser le vocabulaire après la séance : https://fr.wikipedia.org/wiki/Apprentissage_supervis%C3%A9
- Les ressources de la CNIL sur les algorithmes et l'intelligence artificielle, côté droits et responsabilités : https://www.cnil.fr/fr/intelligence-artificielle
- Le dossier « Intelligence artificielle » d'Interstices, la revue de vulgarisation d'Inria : https://interstices.info/domaine/intelligence-artificielle/

### Pour s'inspirer

- Teachable Machine, l'outil de Google utilisé au troisième temps, à retester chez soi avec ses propres objets : https://teachablemachine.withgoogle.com/
- La suite du parcours : [Entraîner le cerveau de la machine](/ressources/youth-ai-lab/entrainer-cerveau-machine) et [Concevoir une IA avec un robot](/ressources/youth-ai-lab/concevoir-ia-avec-robot)
- [Garder un œil sur l'IA](/ressources/youth-ai-lab/garder-oeil-sur-ia) prolonge l'enquête hors de la salle, en cherchant l'IA dans l'espace urbain
- [Explorer l'IA dans la machine](/ressources/youth-ai-lab/labo-ia-dans-machine) aborde la même question par la prédiction de texte plutôt que par le classement d'images
- [Découvrir les algorithmes bio-inspirés](/ressources/youth-ai-lab/algorithmes-bio-inspires) montre une autre famille d'apprentissage, par essais et récompenses
- Le jeu « Quick, Draw! » de Google, où l'on voit un modèle deviner un dessin en direct et se tromper avec aplomb : https://quickdraw.withgoogle.com/

---

_Cette fiche fait partie du projet [Youth AI Lab](/projets/youth-ai-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._

---
id: entrainer-cerveau-machine
title: 'Entraîner le cerveau de la machine'
sidebar_label: 'Entraîner le cerveau de la machine'
sidebar_position: 8
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Entraîner le cerveau de la machine

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--primary">Éducation civique</span>
  <span className="badge badge--info">Intelligence artificielle</span>
  <span className="badge badge--info">Apprentissage supervisé</span>
  <span className="badge badge--info">Réseaux de neurones</span>
  <span className="badge badge--warning">Teachable Machine</span>
</div>

| Projet       | Durée                 | Difficulté    | Âge       |
| ------------ | --------------------- | ------------- | --------- |
| Youth AI Lab | 2h50 (4 temps)        | Intermédiaire | 12-18 ans |

## Matériel

- 1 ordinateur portable par groupe, connecté à internet, avec webcam si l'entraînement se fait en direct
- 1 fiche de relevé d'entraînement et de test par groupe (A4 recto-verso)
- 1 jeu de post-it de couleurs différentes par groupe
- 4 gobelets de 50 ml et 3 béchers gradués de 250 ml par groupe
- 1 paquet de post-it indicateurs de couleur pour l'ensemble du groupe
- 0,5 à 1 L d'eau par groupe
- Teachable Machine, outil en ligne

<PdfLink href="/pdf/youth-ai-lab/YouthAiLab_Ideation_Sheet_UAB_MachineBrain.pdf">Télécharger la fiche d'exploration</PdfLink>

</div>

<img src="/img/ressources/youth-ai-lab/entrainer-cerveau-machine/icone.png" alt="Entraîner le cerveau de la machine" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## Thèmes d'exploration

- La **classification supervisée** : entraîner un modèle à ranger des entrées dans des classes
- Les **données d'entraînement** et les **données de test** : ce sur quoi le modèle apprend, et ce sur quoi on le vérifie
- La **généralisation** : bien se comporter sur des cas nouveaux, jamais vus
- Les **cas limites** : les entrées difficiles qui révèlent les limites du modèle
- L'**erreur du modèle** : quand et pourquoi le modèle se trompe
- Le **perceptron** : un neurone simple qui combine des entrées pondérées et les compare à un seuil

Cette fiche prolonge [Enquêter sur la façon dont les machines apprennent](/ressources/youth-ai-lab/enqueter-machines-apprennent) et prépare [Concevoir une IA avec un robot](/ressources/youth-ai-lab/concevoir-ia-avec-robot).

---

## Déroulé de l'exploration

Les jeunes entraînent de petits modèles de classification, analysent les situations où ils échouent, construisent un perceptron physique pour voir comment un neurone combine ses entrées, puis imaginent des usages sociaux de l'IA reliés aux Objectifs de développement durable.

### Étape 1 : Réactiver la machine (60 minutes)

**Question clé** : _Sur quoi le modèle se trompe-t-il, et pourquoi ?_

Chaque groupe entraîne un classifieur sur une caractéristique visible :

- avec ou sans lunettes
- main ouverte ou poing fermé

Les résultats d'entraînement et de test sont consignés sur la fiche de relevé. Le groupe identifie ce que le modèle **réussit**, ce qu'il **confond** et ce sur quoi il **échoue**. Il introduit ensuite des cas limites pour trouver le point de rupture :

- lumière insuffisante
- angle différent
- distance différente
- accessoire jamais présenté pendant l'entraînement

:::info[Notes pour l'animateur·rice]
L'objectif n'est pas d'obtenir un modèle qui marche, mais un modèle qu'on a réussi à casser en sachant pourquoi. Un groupe qui obtient 100 % de réussite n'a pas encore cherché assez loin : l'inviter à sortir du cadre d'entraînement (contre-jour, arrière-plan chargé, main partiellement hors champ).
:::

---

### Étape 2 : Biais et erreur (15 minutes)

**Question clé** : _Que se passe-t-il quand l'erreur d'un modèle touche toujours les mêmes personnes ?_

Discussion éthique courte, qui relie la fiabilité observée à des cas réels de systèmes biaisés :

- reconnaissance d'images entraînée sur un groupe de personnes trop étroit
- systèmes de tri automatique de candidatures

La discussion est menée avec précaution, de manière à ce qu'aucun jeune ne se retrouve exposé personnellement.

---

### Étape 3 : Explorer un perceptron (75 minutes)

**Question clé** : _Une machine peut-elle « décider » avec juste de l'eau et un seuil ?_

Les groupes construisent un perceptron en gobelets d'eau :

- les **entrées** sont les petits gobelets, allumés ou éteints
- les **poids** sont la quantité d'eau versée depuis chaque gobelet
- le **biais** est un trait de seuil tracé sur le grand bécher
- la **sortie** est le fait que le niveau d'eau dépasse ce trait, ou non

Le groupe ajuste les quantités d'eau jusqu'à classer correctement les cas proposés. Puis vient le défi diagonal, qu'un perceptron unique ne sait pas résoudre : il faut alors introduire une **couche cachée** de deux neurones, chacun alimenté par une couleur de gobelets, avant un neurone final. La solution consiste à remplir les gobelets d'une couleur sur une diagonale et ceux de l'autre couleur sur l'autre diagonale.

:::info[Notes pour l'animateur·rice]
Le PDF de la fiche contient les deux schémas de correction : le neurone unique de la première manche (seuil à 120 ml, soit moins de 3 petits gobelets) et la couche cachée à deux neurones du défi final (seuil de moins de 2 petits gobelets par neurone). Prévoir de quoi éponger.
:::

---

### Étape 4 : Imaginer des usages (20 minutes)

Chaque groupe choisit un problème social de son environnement immédiat :

- trier des déchets
- repérer un gaspillage d'énergie
- arroser un jardin
- signaler une poubelle pleine

Il esquisse ensuite **ce que le modèle devrait reconnaître** et **quel risque ou quelle limite** il pourrait présenter.

---

## Productions attendues

Chaque groupe repart avec :

- un modèle **entraîné et mis à l'épreuve**, avec ses relevés
- l'identification de ce qui **influence sa performance**
- l'expérience d'un **perceptron physique** manipulé de bout en bout
- une proposition de **tâche d'IA socialement utile**, reliée à un Objectif de développement durable, avec ses besoins en données et au moins une limite
- une carte de clôture rassemblant une idée, une preuve et une question

---

## L'accroche et le côté ludique

- **Apprendre à une machine** puis chercher à la tromper avec des cas limites
- **Faire fonctionner un neurone avec de l'eau**, et voir la décision se jouer au niveau du trait de seuil
- Imaginer des applications locales utiles, en petite équipe de **conceptrices et concepteurs d'IA en mission sociale**

---

## Indicateurs de réussite

Les jeunes :

- **entraînent, testent, relèvent et analysent** le modèle au lieu de se contenter de l'utiliser, en parlant de données, d'erreurs, de cas limites et de seuils
- relient les erreurs à la **lumière, l'angle, l'arrière-plan ou le manque de variété** des données
- expliquent **ce que représente chaque élément du perceptron**, et qu'une réponse dépend d'une combinaison d'entrées
- proposent, par groupe, **une application reliée à un Objectif de développement durable**, avec au moins un besoin en données et une limite du modèle

---

## Aller plus loin

### Pour comprendre

- La page Wikipédia du perceptron, pour mettre un nom d'histoire sur le montage en gobelets : https://fr.wikipedia.org/wiki/Perceptron
- Le dossier « Intelligence artificielle » d'Interstices, la revue de vulgarisation d'Inria : https://interstices.info/domaine/intelligence-artificielle/
- Les travaux de Joy Buolamwini sur les écarts de performance des systèmes de reconnaissance faciale selon les personnes, point d'appui de l'étape 2 : https://www.ajl.org/
- Le dossier de la CNIL sur l'intelligence artificielle, qui traite notamment des biais : https://www.cnil.fr/fr/intelligence-artificielle

### Pour s'inspirer

- Teachable Machine, à reprendre chez soi avec ses propres objets : https://teachablemachine.withgoogle.com/
- Le TensorFlow Playground, un réseau de neurones qu'on entraîne dans le navigateur en voyant la frontière de décision bouger en direct : https://playground.tensorflow.org/
- La suite du parcours : [Concevoir une IA avec un robot](/ressources/youth-ai-lab/concevoir-ia-avec-robot), qui transforme ces idées en prototype
- [Découvrir les algorithmes bio-inspirés](/ressources/youth-ai-lab/algorithmes-bio-inspires), où l'apprentissage se fait par récompense plutôt que par exemples étiquetés
- [Traquer les biais de genre de l'IA](/ressources/youth-ai-lab/traquer-biais-genre) reprend la discussion de l'étape 2 et en fait une séance entière
- [Rendre la ville plus vivable avec l'IA](/ressources/youth-ai-lab/rendre-ville-vivable) applique la même logique de classification à des mesures d'environnement

---

_Cette fiche fait partie du projet [Youth AI Lab](/projets/youth-ai-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._

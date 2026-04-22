---
id: bio-inspired-processes
title: "À la découverte des processus d'apprentissage bio-inspirés"
sidebar_label: "Processus bio-inspirés"
sidebar_position: 23
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><circle cx="12" cy="12" r="9" fill="#DD5350" opacity="0.1"/><circle cx="12" cy="12" r="6" fill="#DD5350" opacity="0.25"/><circle cx="8" cy="10" r="1.2" fill="#DD5350" opacity="1.0"/><circle cx="16" cy="10" r="1.2" fill="#DD5350" opacity="1.0"/><circle cx="12" cy="15" r="1.2" fill="#DD5350" opacity="1.0"/><line x1="8" y1="10" x2="16" y2="10" stroke="#DD5350" strokeWidth="0.8" opacity="1.0"/><line x1="8" y1="10" x2="12" y2="15" stroke="#DD5350" strokeWidth="0.8" opacity="1.0"/><line x1="16" y1="10" x2="12" y2="15" stroke="#DD5350" strokeWidth="0.8" opacity="1.0"/></svg> À la découverte des processus d'apprentissage bio-inspirés

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Biologie</span>
  <span className="badge badge--info">Intelligence artificielle et nouvelles technologies</span>
</div>

| Projet | Durée | Difficulté |
|---|---|---|
| SteamCity | Trois séances d'environ 45 minutes | Modéré |

## Matériel

- Une grille imprimée 6x6
- Un marqueur pour indiquer la position actuelle
- Un ordinateur ou une tablette pour accéder à l'outil en ligne [BioLearningGame](https://charly-sketch.github.io/DiscoverAI/PlayerLearningGame/PlayerBiolearning.html)
- Des tableaux blancs pour des discussions collaboratives

<a href="/pdf/steamcity/Protocol_BioInspiredProcesses_FR.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#DD5350', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger en PDF</a>

</div>

</div>

---

## Introduction

L'apprentissage est l'un des processus fondamentaux que partagent les humains et les machines, même si les mécanismes peuvent être très différents. Dans cette activité, les élèves se lanceront dans un voyage exploratoire pour découvrir comment une machine apprend et le comparer à leurs propres processus d'apprentissage.

L'objectif est de fournir aux élèves une compréhension intuitive des modèles d'apprentissage bio-inspirés et de la façon dont les machines, à l'instar des organismes vivants, utilisent la méthode des essais et des erreurs pour s'adapter et trouver des solutions.

### Structure de l'activité

1. **Étape 1 — Découvrir l'apprentissage humain à travers un jeu débranché :** Les élèves déplacent un point dans une grille 6x6 par essais et erreurs, en recevant des retours de l'enseignant, pour trouver un objectif caché.
2. **Étape 2 — Découvrir comment l'apprentissage automatique fonctionne :** Les élèves utilisent l'outil en ligne BioLearningGame pour observer comment une IA résout le même problème par apprentissage par renforcement.
3. **Étape 3 — Adaptabilité des humains par rapport aux machines :** Comparaison de l'adaptabilité humaine et de celle de l'IA face à un environnement modifié.

## Glossaire

| Terme | Définition |
|---|---|
| Adaptabilité | Capacité à s'adapter à de nouvelles conditions ou à des changements dans l'environnement. |
| IA (Intelligence Artificielle) | Capacité d'une machine à imiter le comportement humain intelligent. |
| Apprentissage bio-inspiré | Modèles d'apprentissage inspirés des processus naturels observés dans les organismes biologiques. |
| Retour (feedback) | Informations sur le comportement pouvant être utilisées pour l'améliorer. Le retour positif encourage la répétition, le négatif décourage les actions indésirables. |
| Modèle d'apprentissage | Système ou algorithme utilisé pour apprendre à partir de données ou d'expériences. |
| Renforcement négatif | Processus d'apprentissage en recevant des conséquences négatives pour des actions incorrectes. |
| Renforcement positif | Processus d'apprentissage en recevant des récompenses pour des actions correctes. |
| Q-Learning | Algorithme d'apprentissage par renforcement permettant à une IA de naviguer en équilibrant exploration et exploitation. |
| Apprentissage par renforcement | Type d'apprentissage automatique dans lequel un agent apprend à prendre des décisions en effectuant des actions et en recevant des récompenses ou des pénalités. |
| Essai et erreur | Méthode d'apprentissage dans laquelle un individu ou une machine essaie différentes actions jusqu'à trouver un résultat positif. |
| Itération | Répétition d'un processus afin d'atteindre un objectif souhaité. |

---

## Étape 1 : Découvrir l'apprentissage humain grâce à un jeu débranché

**Contexte :** Les élèves participeront à un jeu utilisant une grille 6x6 dans laquelle ils doivent déplacer un point de repère. Chaque mouvement entraîne une rétroaction (gagner, perdre ou continuer). Ce processus aide les élèves à comprendre la dynamique de l'apprentissage lorsque l'objectif n'est pas explicitement connu.

**Objectifs d'apprentissage :** Comprendre l'apprentissage par essais et erreurs, développer des compétences en résolution de problèmes, améliorer l'adaptabilité.

### Conceptualisation

Les élèves disposent d'une grille 6x6 et d'un marqueur. Ils doivent déplacer le marqueur dans l'une des quatre directions possibles (haut, bas, gauche ou droite). L'enseignant joue le rôle d'« environnement », en donnant un retour après chaque mouvement :

- **« Continuer » :** Les élèves peuvent continuer à se déplacer.
- **« Perdre » :** Les élèves ont heurté un obstacle et doivent recommencer depuis le début.
- **« Gagner » :** Les élèves ont atteint l'objectif.

:::tip[Conseils aux enseignants]
Envisagez différentes approches selon le cadre de la classe :
- **Démonstration en classe entière :** grande grille au tableau avec un élève dirigé par ses camarades.
- **Exercice individuel :** chaque élève a sa propre grille et son marqueur.
- **Activité en petits groupes :** groupes de 4 à 6 avec leur propre grille imprimée.
:::

### Investigation par les élèves

Une fois le jeu terminé, l'enseignant lance une discussion sur les stratégies utilisées, la gestion des situations « perdantes » et l'identification de l'objectif.

### Restitution et réflexion

Les élèves ont développé une compréhension concrète de l'apprentissage par essais et erreurs. Révélez-leur que la grille représentait une ville, le point symbolisait une ambulance et l'objectif était d'atteindre l'hôpital. Introduisez le concept d'apprentissage par renforcement en expliquant comment les succès ont renforcé positivement leur modèle et les échecs l'ont renforcé négativement.

---

## Étape 2 : Découvrir comment les machines apprennent

**Contexte :** Les élèves exploreront comment une machine apprend à l'aide de l'outil en ligne BioLearningGame. L'objectif est d'établir un parallèle entre l'apprentissage humain par essais et erreurs et l'approche d'un système d'IA.

**Objectifs d'apprentissage :** Comprendre les bases de l'apprentissage automatique et de l'apprentissage par renforcement. Observer comment les machines apprennent de l'expérience.

### Conceptualisation

L'IA commence sans aucune connaissance préalable. L'enseignant expliquera le système de notation : +1 point par mouvement correct, +100 points pour l'objectif, -10 points par obstacle. L'IA utilise ces récompenses et pénalités pour mettre à jour son modèle de l'environnement via l'algorithme Q-Learning.

### Investigation par les élèves

Les élèves observent et analysent le comportement d'apprentissage de l'IA sur l'application BioLearningGame. Ils doivent comparer avec leur propre expérience, observer le nombre de tentatives, noter l'optimisation progressive du chemin et les effets du renforcement.

### Restitution et réflexion

Les élèves comprennent que contrairement aux humains qui utilisent l'intuition, les machines s'appuient sur un retour d'information systématique et de nombreuses tentatives pour construire un modèle fiable. Les machines excellent dans le traitement de grands ensembles de données sans fatigue, mais manquent de l'adaptabilité inhérente à l'apprentissage humain.

---

## Étape 3 : Adaptabilité des humains par rapport aux machines

**Contexte :** Les élèves exploreront l'adaptabilité des humains et des machines dans un environnement en évolution. L'IA doit reconstruire son modèle à partir de zéro face aux changements, tandis que les humains s'appuient sur leur intuition et leurs expériences antérieures.

**Objectifs d'apprentissage :** Comprendre le concept d'adaptabilité dans l'apprentissage, comparer la flexibilité humaine avec les capacités d'apprentissage automatique.

### Conceptualisation

Les élèves seront divisés en deux groupes. Le premier modifie la carte (obstacles, point de départ, objectif). Le deuxième navigue dans la carte modifiée sans voir les changements à l'avance.

### Investigation par les élèves

**Adaptabilité de l'humain :** Le Groupe 1 (Concepteurs) crée une nouvelle carte et fournit des retours. Le Groupe 2 (Navigateurs) tente de trouver le chemin optimal. Les groupes échangent ensuite les rôles.

**Adaptabilité de la machine :** Les élèves modélisent leur carte modifiée dans l'onglet « Conception » de BioLearningGame. L'IA tente de s'adapter à la nouvelle configuration.

**Comparaison :** L'IA doit essentiellement réapprendre à partir de zéro face à un changement de carte, alors que les humains utilisent leurs connaissances antérieures pour s'adapter relativement vite.

### Restitution et réflexion

Les élèves comprennent que si les humains s'adaptent rapidement grâce à leur intuition, les machines doivent systématiquement réapprendre. Discutez des applications pratiques : logiciels de navigation, véhicules autonomes, assistants personnels. Comment l'adaptabilité se manifeste-t-elle dans ces systèmes du monde réel ?

---

## Bibliographie

**Livres :**
- *Apprentissage par renforcement : une introduction* par Richard S. Sutton et Andrew G. Barto
- *Le livre du pourquoi : la nouvelle science de la cause et de l'effet* par Judea Pearl

**Plateformes de simulation :**
- OpenAI Gym — Plateforme d'expérimentation de l'apprentissage par renforcement.
- [BioLearningGame](https://charly-sketch.github.io/DiscoverAI/PlayerLearningGame/PlayerBiolearning.html) — Outil de visualisation de l'apprentissage d'une machine.

**Ressources en ligne :**
- AI Unplugged — Activités débranchées sur l'intelligence artificielle.
- Machine Learning Unplugged — The Tech Interactive.
- Blog OpenAI et Blog DeepMind.

---

*Cette fiche fait partie du projet [SteamCity](/projets/steamcity), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

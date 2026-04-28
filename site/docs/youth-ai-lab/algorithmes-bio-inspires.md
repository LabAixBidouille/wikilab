---
id: algorithmes-bio-inspires
title: Algorithmes bio-inspirés
sidebar_label: "Algorithmes bio-inspirés"
sidebar_position: 1
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><circle cx="12" cy="12" r="10" fill="#b34520" opacity="0.1"/><path d="M12 3 C8 3 5 6 5 10 C5 13 7 15 9 16 L9 19 L15 19 L15 16 C17 15 19 13 19 10 C19 6 16 3 12 3 Z" fill="#b34520" opacity="0.25"/><circle cx="9.5" cy="10" r="1.5" fill="#b34520" opacity="1.0"/><circle cx="14.5" cy="10" r="1.5" fill="#b34520" opacity="1.0"/><path d="M9 13 Q12 15 15 13" stroke="#b34520" strokeWidth="1.5" fill="none" opacity="1.0"/><rect x="10" y="20" width="4" height="1.5" fill="#b34520" opacity="1.0"/></svg> Algorithmes bio-inspirés

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--info">Intelligence artificielle</span>
  <span className="badge badge--info">Apprentissage par renforcement</span>
  <span className="badge badge--warning">Cubetto</span>
  <span className="badge badge--warning">Sphero Indi</span>
  <span className="badge badge--warning">micro:bit</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| Youth AI Lab | 2 à 3 heures | Intermédiaire | 12-18 ans |

## Matériel

- Grille 6×6 (version au sol avec du ruban adhésif)
- Fiches de mémorisation (1 par participant)
- Récompenses pour le renforcement (bonbons, jetons, pompons)
- Robots Cubetto, Sphero Indi et robots basés sur micro:bit, cartes de missions et ordinateurs


<a href="/pdf/youth-ai-lab/YouthAiLab_Explorations_Ideation_Sheet_BioInspiredAlgorithms.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger la fiche d'exploration</a>


</div>


<img src="/img/ressources/youth-ai-lab/algorithmes-bio-inspires/icone.png" alt="Algorithmes bio-inspirés" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## Thèmes d'exploration

- **Apprentissage par renforcement** : comment l'IA apprend par essais et erreurs
- **Apprentissage bio-inspiré** : comment les machines imitent les organismes vivants
- **Modèles mentaux** : comment les humains et les machines construisent des représentations internes


:::info[Cette exploration s'inspire de la fiche [Né d'hier : initiation robotique](/ressources/robots-meet-arts/ne-hier) du projet Robots Meet Arts]
:::

---

## Déroulé de l'exploration

Cette activité révèle comment les humains et les machines apprennent par essais et erreurs. En jouant le rôle d'un algorithme d'apprentissage, les participants découvrent l'apprentissage par renforcement — récompenses en cas de succès, pénalités en cas d'échec — un principe universel partagé par l'intelligence biologique et artificielle.

### Activité 1 : Incarner le robot (apprentissage par renforcement, débranché)

Les participants explorent une grille 6×6 pour trouver un objectif caché. Ils ne savent pas où se trouvent les obstacles ni où se situe l'objectif. En se déplaçant d'une case à la fois, le groupe décide collectivement de chaque mouvement. Après chaque mouvement, l'animateur·rice répond uniquement :

- **JUSTE** (récompense : +1 jeton)
- **FAUX** (pénalité : perdre TOUS les jetons, recommencer depuis le début)

Chaque participant remplit sa propre fiche de mémorisation pour enregistrer ses découvertes. Après plusieurs tentatives, ils trouvent le chemin et conservent leur fiche pour la suite.

---

### Activité 2 : Parler aux robots (bases de programmation)

À travers des missions progressives, les participants découvrent comment programmer des robots. Chaque robot a sa propre logique :

- **Cubetto** utilise des blocs physiques en bois
- **Sphero Indi** lit des tuiles colorées au sol
- **Robots micro:bit** utilisent la programmation par blocs sur écran

Les missions vont du simple (avancer) au complexe (séquences, virages).

![Fiche idéation - Algorithmes bio-inspirés](/img/ressources/youth-ai-lab/algorithmes-bio-inspires/YouthAiLab_Explorations_Ideation_Sheet_BioInspiredAlgorithms%20(1).png)

---

### Activité 3 : Transférer les connaissances (programmer le chemin)

En utilisant **UNIQUEMENT** leur fiche de mémorisation de l'Activité 1 et les connaissances acquises dans l'Activité 2, les participants doivent programmer leur robot pour suivre le chemin qu'ils ont découvert. Ils ne peuvent pas regarder la grille avant de programmer.

Cela révèle la qualité de leur modèle mental : des notes claires rendent la programmation facile, des notes confuses causent des difficultés. **Le robot doit compléter le chemin de manière autonome.**

---

## Productions attendues

À la fin de cette activité, les participants ont vécu l'apprentissage par renforcement de l'intérieur — en tant qu'agent apprenant, puis en tant que programmeur. Ils ont créé leur propre modèle mental et découvert que la même logique peut être exprimée par la programmation.

Pour conclure, leur faire observer comment l'IA fait le même travail en utilisant : [https://steamcity.github.io/BioLearningGame/](https://steamcity.github.io/BioLearningGame/) pour comparer son chemin d'apprentissage avec les stratégies biologiques.

---

## L'accroche et le côté ludique

Les participants **incarnent physiquement l'algorithme** — ils SONT le robot explorant un territoire inconnu. Le système de renforcement crée de l'excitation. Programmer de vrais robots qui bougent donne vie aux concepts abstraits.

---

## Indicateurs de réussite

- Les participants peuvent expliquer l'**apprentissage par renforcement** avec leurs propres mots.
- Ils comprennent les bases d'un **modèle**.
- Ils programment différents robots en utilisant uniquement ce qu'ils ont appris pour **découvrir de manière autonome** un environnement donné.

---

## Annexes

### Annexe 1 : Exemple de fiche de mémorisation

Grille vierge 6×6 avec une case START, permettant aux participants de noter leurs découvertes (obstacles, chemin correct) au fur et à mesure de l'exploration.

### Annexe 2 : Exemples de grilles de jeu

Trois thèmes de grilles sont proposés avec des images dans les cases obstacles/objectifs :

- **Thème Espace** : fusée, astéroïdes, planètes, satellite, comète
- **Thème Ville durable** : maison, trottinette électrique, pommier, fontaine, école, bus, usine de recyclage
- **Thème Santé** : virus, émotions, bactéries, sommeil, hôpital, données de santé

![Fiche idéation - Algorithmes bio-inspirés](/img/ressources/youth-ai-lab/algorithmes-bio-inspires/YouthAiLab_Explorations_Ideation_Sheet_BioInspiredAlgorithms.png)

---

*Cette fiche fait partie du projet [Youth AI Lab](/projets/youth-ai-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

---
id: trees-vs-cars
title: "Trees VS Cars : identifier les véhicules polluants"
sidebar_label: "Trees VS Cars"
sidebar_position: 8
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="2" y="2" width="20" height="20" rx="3" fill="#DD5350" opacity="0.1"/><path d="M6 18l3-5 2 3 3-7 2 4 2-2" stroke="#DD5350" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/><circle cx="8" cy="8" r="1.5" fill="#DD5350" opacity="0.25"/><circle cx="12" cy="6" r="1" fill="#DD5350" opacity="0.25"/><rect x="15" y="15" width="5" height="3" rx="0.5" fill="#DD5350"/></svg> Trees VS Cars : identifier les véhicules polluants

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Technologie et ingénierie</span>
  <span className="badge badge--primary">Biologie</span>
  <span className="badge badge--primary">Physique et chimie</span>
  <span className="badge badge--info">Intelligence artificielle</span>
  <span className="badge badge--secondary">Mobilité durable</span>
  <span className="badge badge--secondary">Environnement</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| SteamCity | 4 heures | Intermédiaire | 10-15 ans |

## Matériel

- 1 jeu de cartes "Numéro" (disponible en annexe du PDF)
- 1 jeu de cartes "Dataset de véhicules" par groupe (disponible en annexe du PDF)
- 1 feuille d'algorithme par groupe (disponible en annexe du PDF)

<a href="/pdf/steamcity/Protocol_TreesVsCars_FR.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger en PDF</a>

</div>

</div>

---

## Introduction

Le protocole "Trees VS Cars" vise à offrir aux élèves une introduction accessible à l'apprentissage supervisé, un concept fondamental de l'apprentissage automatique et de l'intelligence artificielle. Les élèves approfondiront leur compréhension de la manière dont les ordinateurs peuvent apprendre à prendre des décisions en fonction de modèles de données.

Les élèves exploreront comment les machines peuvent classer l'information en apprenant à partir d'exemples plutôt qu'en suivant des règles explicitement programmées. À travers les étapes du protocole, ils créeront un modèle capable de catégoriser les véhicules en deux groupes : ceux autorisés à circuler dans la Zone de Basses Emissions (ZBE) de Bruxelles et ceux qui ne le sont pas, sur base de trois critères : le type de véhicule, le type de carburant et l'année de fabrication.

Cette application concrète démontre comment les villes utilisent des systèmes intelligents pour réguler le trafic et réduire la pollution.

---

## Structure du protocole

1. **Comprendre les arbres binaires** : découverte de la structure de données fondamentale
2. **Création d'arbres de décision** : construction d'un arbre pour classifier les véhicules autorisés/non autorisés dans la ZBE
3. **Construction guidée par algorithme** : utilisation d'un algorithme pour déterminer la meilleure condition de séparation
4. **Explorer les limites** : découverte des limites de l'apprentissage automatique (taille du jeu de données, représentativité)

---

## Glossaire

| Terme | Définition |
|---|---|
| **Arbre binaire** | Structure de données dans laquelle chaque noeud possède au maximum deux noeuds enfants et un noeud parent. Les noeuds sans enfants sont les "feuilles". |
| **Apprentissage automatique** | Domaine de l'IA qui développe des algorithmes capables d'apprendre à partir de données et de généraliser sur des données inédites. |
| **Apprentissage supervisé** | Technique utilisant des ensembles de données étiquetés pour former des modèles à identifier les patterns et les relations. |
| **Modèle** | Résultat du processus d'apprentissage, permettant de faire des prédictions sur de nouvelles données. |
| **Généralisation** | Capacité du modèle à prédire correctement de nouvelles données, non utilisées pendant la formation. |
| **Performances du modèle** | Mesure de la capacité d'un modèle à faire des prédictions correctes. |

---

## Protocole

### Etape 1 : comprendre les arbres binaires

**Contexte** : les arbres binaires sont une structure de données omniprésente en informatique, utilisée pour la recherche efficace, l'analyse syntaxique et la compression de données.

**Objectifs d'apprentissage** : comprendre le concept d'arbres binaires.

#### Conceptualisation

L'exemple le plus simple est celui des dictionnaires : en identifiant la première lettre d'un mot, on peut ouvrir directement à une page approximative et éliminer un grand nombre de pages. Cette méthode est la **recherche dichotomique**.

#### Investigation par les élèves

**Arbre binaire humain** : chaque élève recoit une carte numérotée. Un élève devient la racine, annonce son numéro. Les autres se placent à gauche (numéro plus bas) ou à droite (plus haut). Le processus se répète jusqu'à ce que tous soient placés.

**Equilibrer l'arbre** : en groupes, les élèves construisent l'arbre le plus efficace (branches les plus courtes possibles). L'arbre le moins efficace est une seule branche en ordre ; le plus efficace est complètement équilibré.

---

### Etape 2 : création d'arbres de décision pour la classification des véhicules

**Contexte** : les arbres de décision enrichissent les arbres binaires en remplaçant les nombres par des questions fermées.

**Objectifs d'apprentissage** : comprendre les arbres de décision, les utiliser pour classer des données, mesurer la performance d'un modèle.

#### Conceptualisation

Les élèves appliqueront leurs connaissances pour déterminer quels véhicules sont autorisés dans une ZBE. Les Zones de Basses Emissions restreignent l'accès aux véhicules en fonction de leurs niveaux d'émissions.

#### Investigation par les élèves

Les élèves se familiarisent avec le jeu de cartes de véhicules. Pour chaque véhicule, 3 caractéristiques avec 3 valeurs possibles :

| Type de véhicule | Type de carburant | Date de fabrication |
|---|---|---|
| Voiture | Essence | Avant 1994 |
| Utilitaire | Diesel | 1995-2006 |
| Moto | Electrique | Après 2006 |

**Construction de l'arbre** (avec les cartes d'entraînement uniquement) :

1. Choisir une condition : "Est-ce que [catégorie] est [valeur] ?"
2. Diviser les cartes en deux groupes (vrai/faux)
3. Continuer pour chaque nouveau groupe
4. Arrêter quand un groupe ne contient que des véhicules autorisés ou non autorisés

**Evaluation** : tester avec les cartes de test. Précision = nombre de prédictions correctes / nombre total de cartes testées.

---

### Etape 3 : construction d'un arbre de décision guidé par algorithme

**Contexte** : un ordinateur ne peut prendre de décisions arbitraires et doit s'appuyer sur des outils statistiques.

**Objectifs d'apprentissage** : comprendre comment un ordinateur construit un arbre de décision efficace.

#### Investigation par les élèves

Utilisation d'un tableau pour déterminer la meilleure condition de séparation :

| Catégorie | Valeur | Autorisés | Non autorisés | Min absolu ? | Max absolu ? |
|---|---|---|---|---|---|
| Type de véhicule | Moto | | | | |
| Type de véhicule | Voiture | | | | |
| Type de véhicule | Utilitaire | | | | |
| Type de carburant | Diesel | | | | |
| Type de carburant | Essence | | | | |
| Type de carburant | Electrique | | | | |
| Date de fabrication | Avant 1994 | | | | |
| Date de fabrication | 1995-2006 | | | | |
| Date de fabrication | Après 2006 | | | | |

Etapes :

1. Remplir les colonnes A (autorisés) et NA (non autorisés)
2. Identifier la ligne avec la plus petite valeur dans A ou NA (MIN ABSOLU)
3. Parmi celles-ci, identifier la plus grande valeur (MAX ABSOLU)
4. La condition optimale est la ligne cochée dans les deux colonnes

Si les élèves exécutent correctement l'algorithme, ils devraient tous obtenir le même arbre et les meilleures performances.

---

### Etape 4 : explorer les limites des algorithmes d'IA

**Contexte** : montrer certaines limites inhérentes à l'apprentissage automatique.

**Objectifs d'apprentissage** : découvrir les limites de ces algorithmes.

#### Investigation par les élèves

**Expérience 1 : taille du jeu de données** - Créer un arbre en supprimant la moitié des cartes d'entraînement. Le résultat sera généralement moins performant : l'algorithme manque d'exemples.

**Expérience 2 : représentativité des données** - Intervertir les cartes d'entraînement et de test. Le résultat génèrera des erreurs de prédiction. La quantité de données n'est pas tout : si les données ne sont pas représentatives, l'algorithme accordera une importance biaisée à certains critères.

---

## Bibliographie

- *"Machine Learning: An Algorithmic Perspective"* par Marsland, S.
- *"Data Mining: Practical Machine Learning Tools and Techniques"* par Witten, I. H., Frank, E., Hall, M. A., & Pal, C. J.
- *"Data Mining with Decision Trees: Theory and Applications"* par Rokach, L., & Maimon, O.
- [Mermaid](https://mermaid.live) - Outil en ligne pour créer des diagrammes
- [Binary Search Trees - Princeton](https://algs4.cs.princeton.edu/lectures/keynote/32BinarySearchTrees.pdf)

---

*Cette fiche fait partie du projet [SteamCity](/projets/steamcity), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

---
id: energy-mix
title: "Simulateur de mix énergétique"
sidebar_label: "Simulateur de mix énergétique"
sidebar_position: 10
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="2" y="3" width="20" height="18" rx="3" fill="#DD5350" opacity="0.1"/><circle cx="8" cy="10" r="3" fill="#DD5350" opacity="0.25"/><rect x="13" y="8" width="6" height="4" rx="1" fill="#DD5350" opacity="0.25"/><path d="M5 17h14M8 14v3M12 13v4M16 12v5" stroke="#DD5350" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="1.0"/></svg> Simulateur de mix énergétique

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Physique</span>
  <span className="badge badge--primary">Histoire-géographie</span>
  <span className="badge badge--primary">Mathématiques</span>
  <span className="badge badge--info">Énergie et efficacité énergétique</span>
  <span className="badge badge--secondary">Modélisation</span>
</div>

| Projet | Durée | Difficulté |
|---|---|---|
| SteamCity | Min. 4 séances | Avancé |

## Matériel

**Phase 1 :** Accès internet pour recherche de données, documents sur le mix énergétique européen, calculatrices

**Phase 2 :** Ordinateurs avec Excel ou équivalent (LibreOffice Calc), modèles de simulateur pré-formatés, guide de construction Excel

**Phase 3 :** Fiches de scénarios imprimées, accès aux simulateurs créés, matériel pour noter les résultats, supports de présentation (vidéoprojecteur, tableaux), matériel pour créer des recommandations visuelles

<a href="/pdf/steamcity/Protocol_EnergyMix_FR.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#DD5350', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger en PDF</a>

</div>

</div>

---

## Introduction

Notre système énergétique repose sur un équilibre complexe entre différentes sources d'énergie. En 2023, l'UE a produit 2 572 TWh (térawattheures) d'électricité. Plus de 45 % de cette production provenaient de sources renouvelables. Les combustibles fossiles représentaient 31,7 % et l'électricité nucléaire près de 23 %. Le gaz était le principal combustible fossile utilisé pour produire de l'électricité (17 %), suivi du charbon (11,7 %).

Le bouquet électrique varie considérablement d'un État membre à l'autre, la part de l'électricité produite à partir de sources renouvelables allant de plus de 90 % à moins de 15 %.

Cette diversité n'est pas accidentelle : elle résulte de choix stratégiques visant à concilier sécurité d'approvisionnement, coûts acceptables et objectifs climatiques. Cependant, cette interdépendance crée aussi des vulnérabilités. La crise énergétique de 2022-2023, déclenchée par la guerre en Ukraine, a révélé les conséquences d'une dépendance excessive au gaz russe. De même, les arrêts programmés de centrales nucléaires en Allemagne ou en Belgique posent des questions sur la capacité du système à maintenir l'équilibre offre-demande tout en respectant les objectifs climatiques.

L'Agence Internationale de l'Énergie (2023) souligne que la transition énergétique nécessite une planification rigoureuse : chaque modification du mix énergétique entraîne des effets en cascade sur les coûts, les émissions, la sécurité d'approvisionnement et l'acceptabilité sociale.

Ce protocole propose aux élèves de construire leur propre simulateur de mix énergétique pour explorer les conséquences de la suppression totale ou partielle d'une source d'énergie. À travers cette démarche de modélisation, ils développeront une compréhension systémique des enjeux énergétiques et des contraintes qui pèsent sur les décideurs politiques et économiques.

### Structure du protocole

Ce protocole vise à développer chez les élèves une compréhension approfondie des enjeux d'interdépendances énergétiques par la construction et l'utilisation d'un outil de simulation.

L'activité s'articule autour de trois phases progressives :

1. **Phase 1 : Décryptage du mix énergétique** — Les élèves analysent la composition actuelle du mix électrique de leur pays, identifient les caractéristiques de chaque source d'énergie (coût, pilotabilité, émissions, contraintes) et comprennent les fonctions spécifiques de chaque technologie dans le système.
2. **Phase 2 : Construction du simulateur** — Par groupes, les élèves construisent un outil de simulation permettant de modéliser les impacts économiques, environnementaux et techniques de modifications du mix énergétique.
3. **Phase 3 : Expérimentation et scénarios de crise** — Les élèves testent leur simulateur en explorant les conséquences de la suppression progressive ou totale de différentes sources d'énergie. Ils formulent des recommandations pour gérer les transitions énergétiques.

## Glossaire

| Terme | Définition |
|---|---|
| Mix énergétique | Répartition des différentes sources d'énergie dans la production d'électricité d'un territoire, exprimée en pourcentages. |
| Base load (charge de base) | Niveau minimum de demande électrique sur un réseau pendant une période donnée, généralement assurée par des sources pilotables. |
| Sources pilotables | Technologies de production dont la puissance peut être ajustée selon la demande (nucléaire, gaz, charbon, hydraulique). |
| Sources intermittentes | Technologies de production dépendant de conditions naturelles variables (éolien, solaire photovoltaïque). |
| Facteur de charge | Rapport entre la production réelle d'une installation et sa production théorique maximale sur une période donnée. |
| LCOE (Levelized Cost of Energy) | Coût moyen de production d'une unité d'électricité sur la durée de vie d'une installation, incluant investissement et exploitation. |
| Capacité installée | Puissance électrique maximale théorique d'une installation ou d'un parc de production, exprimée en MW ou GW. |
| Réseau électrique | Infrastructure de transport et distribution de l'électricité, devant maintenir l'équilibre offre-demande en temps réel. |
| Stockage énergétique | Technologies permettant de conserver l'énergie pour la restituer ultérieurement (batteries, STEP, hydrogène). |
| Interconnexions | Lignes électriques reliant les réseaux de différents pays, permettant les échanges d'électricité. |
| Émissions évitées | Quantité de CO2 non émise grâce au remplacement d'une source fossile par une source bas-carbone. |
| Sécurité d'approvisionnement | Capacité d'un système énergétique à satisfaire la demande en permanence, même en cas de défaillance d'équipements. |
| Merit order (ordre de mérite) | Ordre de priorité d'appel des centrales électriques selon leur coût marginal de production, du moins cher au plus cher. |

---

## Phase 1 : Décryptage du mix énergétique

**Contexte :** Avant de pouvoir modéliser les impacts de modifications du mix énergétique, les élèves doivent comprendre la logique actuelle du système électrique de leur pays. Cette phase les amène à décrypter les caractéristiques techniques, économiques et environnementales de chaque source d'énergie.

**Objectifs d'apprentissage :** Analyser la composition du mix énergétique actuel. Identifier les caractéristiques spécifiques de chaque source d'énergie. Comprendre les fonctions complémentaires des différentes technologies dans le système électrique.

#### Conceptualisation

**Question de recherche :** Quels facteurs déterminent la composition actuelle du mix énergétique européen et les spécificités nationales ?

**Hypothèse :** La composition du mix énergétique résulte d'un équilibre complexe entre contraintes géographiques, héritages historiques, choix politiques et contraintes économiques, créant des spécificités nationales au sein d'objectifs européens communs.

#### Investigation par les élèves

**1. Panorama du mix énergétique national**

Les élèves disposent de données récentes sur la production électrique de leur pays et travaillent en binômes pour analyser ces informations. Ils complètent un tableau de synthèse qui servira de base à leur futur simulateur. Ils créent ensuite un graphique en secteurs montrant la répartition actuelle du mix.

**2. Analyse des caractéristiques techniques et économiques**

Chaque binôme se spécialise sur 2-3 sources d'énergie et complète une fiche d'analyse détaillée couvrant les caractéristiques techniques (facteur de charge, temps de démarrage, flexibilité, durée de vie), économiques (coût d'investissement, coût d'exploitation, LCOE) et environnementales (émissions CO2, autres impacts).

**3. Fonctions dans le système électrique**

Les élèves analysent collectivement comment les différentes sources jouent des rôles complémentaires :

- **Base load (40-60 %) :** Nucléaire, hydraulique au fil de l'eau, part du charbon
- **Semi-base (20-30 %) :** Gaz en base, hydraulique de lac
- **Pointe (10-20 %) :** Gaz flexible, hydraulique pompé, imports/exports
- **Variable selon météo :** Éolien et solaire, compensés par les autres sources

#### Restitution et réflexion

L'analyse du mix énergétique européen a révélé aux élèves la complexité des arbitrages qui sous-tendent les choix énergétiques actuels. Ils ont compris que chaque source d'énergie possède des caractéristiques spécifiques qui déterminent son rôle dans le système électrique. Cette complémentarité fonctionnelle explique pourquoi aucune source unique ne peut satisfaire tous les besoins du réseau.

---

## Phase 2 : Construction du simulateur

**Contexte :** Les élèves vont construire un outil leur permettant de modéliser les impacts de modifications du mix énergétique. Cette séquence développe leurs compétences en modélisation numérique.

**Objectifs d'apprentissage :** Construire un modèle numérique du mix énergétique européen. Intégrer les contraintes techniques et économiques dans la modélisation. Développer des indicateurs de performance pour évaluer différents scénarios.

#### Investigation par les élèves

**1. Architecture du simulateur**

Les élèves reçoivent un fichier pré-formaté avec les onglets de base :

- Onglet 1 "Données de base" : Caractéristiques de chaque source, paramètres de référence
- Onglet 2 "Mix actuel" : Répartition actuelle, calculs automatiques, graphiques
- Onglet 3 "Simulateur" : Interface de modification, calculs en temps réel, alertes
- Onglet 4 "Résultats" : Tableau de comparaison, graphiques d'impact, indicateurs

**2. Construction des formules de calcul**

L'enseignant guide les élèves dans la construction progressive des formules clés :

- **Production par source :** Production\_source = Part\_mix x Demande\_totale x Facteur\_charge
- **Coût total du système :** Coût\_total = Somme(Capacité\_installée x Coût\_investissement + Production x Coût\_exploitation)
- **Émissions totales :** Émissions\_totales = Somme(Production\_source x Facteur\_émission\_source)
- **Indicateur de sécurité :** Part\_pilotable = Somme(Production\_sources\_pilotables) / Production\_totale
- **Indicateur d'autonomie :** Taux\_imports = Production\_imports / Demande\_totale

**3. Interface utilisateur et visualisation**

Les élèves développent l'interface : cellules de saisie, contrainte automatique (somme = 100 %), alertes colorées, graphiques dynamiques et tableau de bord.

**4. Validation et calibrage**

Les élèves étalonnent leur simulateur en comparant ses résultats à des données de référence.

---

## Phase 3 : Expérimentation et scénarios de transition énergétique

**Contexte :** Les élèves testent différents scénarios de suppression ou réduction drastique d'une source d'énergie, puis formulent des recommandations stratégiques réalistes.

**Objectifs d'apprentissage :** Analyser les impacts de la suppression d'une source d'énergie majeure. Identifier les stratégies de compensation et leurs limites. Formuler des recommandations stratégiques pour les décideurs européens.

#### Investigation par les élèves

**1. Scénarios de suppression progressive et stratégies de compensation**

Chaque groupe travaille sur un scénario spécifique :

- **Groupe 1 — Sortie du charbon :** Réduire la part du charbon de 16 % à 0 % en 5 ans
- **Groupe 2 — Sortie du nucléaire :** Réduire la part du nucléaire de 23 % à 0 % en 15 ans
- **Groupe 3 — Crise du gaz :** Réduire la part du gaz de 22 % à 5 % en 2 ans
- **Groupe 4 — Limitation des renouvelables :** Plafonner éolien+solaire à 25 %

Contraintes à intégrer :

- Limite de pilotabilité : Minimum 50 % de sources pilotables
- Limite budgétaire : Maximum +50 % de coût par rapport au mix actuel
- Limite climatique : Maximum 150 g CO2/kWh
- Limite d'imports : Maximum 15 % de la demande
- Limite de déploiement : Maximum +10 % par an pour les renouvelables

**2. Formulation de recommandations stratégiques**

Les groupes présentent leurs résultats et formulent collectivement des principes stratégiques :

- Principe de progressivité
- Principe de compensation anticipée
- Principe de diversification
- Principe d'acceptabilité
- Principe de résilience

**3. Débat et arbitrages politiques**

L'enseignant propose une simulation de "Conseil de l'énergie" avec des rôles distribués au tirage au sort : représentant des citoyens, des industriels, écologiste, syndical.

#### Restitution et réflexion

L'expérimentation a révélé aux élèves la complexité des choix énergétiques et l'existence de contraintes physiques et économiques qui limitent les options disponibles. Ils ont découvert que les transitions énergétiques nécessitent des recompositions systémiques respectant de multiples contraintes.

---

## Aller plus loin

- **Projet de micro-réseau intelligent au sein de l'établissement** — Concevoir un système énergétique miniature intégrant production renouvelable, stockage et gestion intelligente de la consommation. Exemple : [Solar Schools](https://www.solarschools.net)
- **Modélisation énergétique territoriale avec les collectivités locales** — Étendre le simulateur à l'échelle de la commune en partenariat avec les services techniques locaux. Exemple : [MITEC Launchpad](https://mitec-club.org/)
- **Participation aux concours internationaux d'innovation énergétique** — Développer des prototypes de systèmes énergétiques innovants. Exemple : [EUCYS](https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/eucys_en)
- **Animation d'ateliers énergétiques dans les centres de loisirs** — Transmettre les connaissances en animant des ateliers ludiques. Exemple : [Student Energy Chapters](https://studentenergy.org/chapters/)

---

*Cette fiche fait partie du projet [SteamCity](/projets/steamcity), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

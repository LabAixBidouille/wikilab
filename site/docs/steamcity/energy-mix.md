---
id: energy-mix
title: Simuler un mix énergétique
sidebar_label: "Simuler un mix énergétique"
sidebar_position: 10
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Simuler un mix énergétique

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

<PdfLink href="/pdf/steamcity/Protocol_EnergyMix_FR.pdf">Télécharger en PDF</PdfLink>

</div>


<img src="/img/ressources/steamcity/energy-mix/icone.png" alt="Simulateur de mix énergétique" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## Introduction

Le système énergétique de l'UE repose sur un équilibre entre différentes sources d'énergie. En 2023, l'UE a produit 2 572 TWh (térawattheures) d'électricité :

- **Sources renouvelables** : plus de 45 %
- **Combustibles fossiles** : 31,7 % (gaz 17 %, charbon 11,7 %)
- **Nucléaire** : près de 23 %

Le bouquet électrique varie considérablement d'un État membre à l'autre, la part des renouvelables allant de plus de 90 % à moins de 15 % (voir les infographies du Conseil européen sur le mix électrique de l'UE, publiées sur consilium.europa.eu).

Cette diversité résulte de choix stratégiques qui visent à concilier sécurité d'approvisionnement, coûts acceptables et objectifs climatiques, mais cette interdépendance crée aussi des vulnérabilités. La crise énergétique de 2022-2023, déclenchée par la guerre en Ukraine, a révélé les conséquences d'une dépendance excessive au gaz russe. Les arrêts programmés de centrales nucléaires en Allemagne ou en Belgique posent aussi des questions sur la capacité du système à maintenir l'équilibre offre-demande tout en respectant les objectifs climatiques.

L'Agence Internationale de l'Énergie (2023) souligne que la transition énergétique nécessite une planification rigoureuse : chaque modification du mix énergétique entraîne des effets en cascade sur les coûts, les émissions, la sécurité d'approvisionnement et l'acceptabilité sociale. Ces interactions complexes ne peuvent être appréhendées intuitivement et nécessitent des outils de modélisation.

Ce protocole propose aux élèves de construire leur propre simulateur de mix énergétique pour explorer les conséquences de la suppression totale ou partielle d'une source d'énergie. À travers cette démarche de modélisation, ils développeront une compréhension systémique des enjeux énergétiques et des contraintes qui pèsent sur les décideurs politiques et économiques. L'objectif n'est pas de former des experts techniques, mais de développer leur capacité à analyser des systèmes complexes et à anticiper les conséquences de décisions apparemment simples.


### Structure du protocole

Les élèves construisent puis utilisent un outil de simulation pour comprendre les interdépendances énergétiques et leurs enjeux. L'approche pédagogique s'appuie sur la modélisation quantitative, l'expérimentation numérique et l'analyse de scénarios prospectifs.

L'activité compte trois phases progressives :

- **Phase 1 : Décryptage du mix énergétique**. Les élèves analysent la composition actuelle du mix électrique de leur pays, identifient les caractéristiques de chaque source d'énergie (coût, pilotabilité, émissions, contraintes) et comprennent les fonctions spécifiques de chaque technologie dans le système.
- **Phase 2 : Construction du simulateur**. Par groupes, les élèves construisent un outil de simulation permettant de modéliser les impacts économiques, environnementaux et techniques de modifications du mix énergétique. Le simulateur intègre des formules de calcul, des graphiques dynamiques et des indicateurs de performance.
- **Phase 3 : Expérimentation et scénarios de crise**. Les élèves testent leur simulateur en explorant les conséquences de la suppression progressive ou totale de différentes sources d'énergie (gaz, nucléaire, charbon, renouvelables intermittents). Ils analysent les impacts sur les coûts, les émissions et la sécurité d'approvisionnement, puis formulent des recommandations pour gérer les transitions énergétiques en identifiant les séquences optimales de transformation du mix et les mesures d'accompagnement nécessaires.

### Glossaire

- **Mix énergétique** : Répartition des différentes sources d'énergie dans la production d'électricité d'un territoire, exprimée en pourcentages.
- **Base load (charge de base)** : Niveau minimum de demande électrique sur un réseau pendant une période donnée, généralement assurée par des sources pilotables.
- **Sources pilotables** : Technologies de production dont la puissance peut être ajustée selon la demande (nucléaire, gaz, charbon, hydraulique).
- **Sources intermittentes** : Technologies de production dépendant de conditions naturelles variables (éolien, solaire photovoltaïque).
- **Facteur de charge** : Rapport entre la production réelle d'une installation et sa production théorique maximale sur une période donnée.
- **LCOE (Levelized Cost of Energy)** : Coût moyen de production d'une unité d'électricité sur la durée de vie d'une installation, incluant investissement et exploitation.
- **Capacité installée** : Puissance électrique maximale théorique d'une installation ou d'un parc de production, exprimée en MW ou GW.
- **Réseau électrique** : Infrastructure de transport et distribution de l'électricité, devant maintenir l'équilibre offre-demande en temps réel.
- **Stockage énergétique** : Technologies permettant de conserver l'énergie pour la restituer ultérieurement (batteries, STEP, hydrogène).
- **Interconnexions** : Lignes électriques reliant les réseaux de différents pays, permettant les échanges d'électricité.
- **Émissions évitées** : Quantité de CO2 non émise grâce au remplacement d'une source fossile par une source bas-carbone.
- **Sécurité d'approvisionnement** : Capacité d'un système énergétique à satisfaire la demande en permanence, même en cas de défaillance d'équipements.
- **Merit order (ordre de mérite)** : Ordre de priorité d'appel des centrales électriques selon leur coût marginal de production, du moins cher au plus cher.


:::info
Ce protocole fait partie du curriculum STEAMCITY. Ce travail est sous licence Creative Commons Attribution-ShareAlike 4.0 International License et a été réalisé avec le soutien de la Commission européenne. Son contenu n'engage que son auteur et la Commission ne peut être tenue responsable de l'usage qui pourrait être fait des informations qu'il contient.
:::

---

## Phase 1 : Décryptage du mix énergétique

### Contexte de la séquence

Avant de pouvoir modéliser les impacts de modifications du mix énergétique, les élèves doivent comprendre la logique actuelle du système électrique de leur pays. Cette phase les amène à décrypter les caractéristiques techniques, économiques et environnementales de chaque source d'énergie pour comprendre pourquoi le mix actuel s'est constitué ainsi et quelles contraintes pèsent sur son évolution.

### Objectifs d'apprentissage

- Analyser la composition du mix énergétique actuel.
- Identifier les caractéristiques spécifiques de chaque source d'énergie.
- Comprendre les fonctions complémentaires des différentes technologies dans le système électrique.

### Conceptualisation

:::question[Question de recherche]
Quels facteurs déterminent la composition actuelle du mix énergétique européen et les spécificités nationales ?
:::

:::hypothese[Hypothèse]
La composition du mix énergétique résulte d'un équilibre complexe entre contraintes géographiques (ressources disponibles), héritages historiques (infrastructures existantes), choix politiques (stratégies énergétiques) et contraintes économiques (coûts de production). Cet équilibre produit des spécificités nationales au sein d'objectifs européens communs.
:::

**Concepts clés** :

- **Mix énergétique optimal** : répartition des sources qui vise à optimiser à la fois coût, sécurité et durabilité.
- **Dépendance au sentier** : influence des choix passés sur les options actuelles d'évolution du système.
- **Contraintes systémiques** : limitations techniques et économiques qui conditionnent les choix énergétiques.

:::question[Question de recherche]
Comment les caractéristiques techniques spécifiques de chaque source d'énergie déterminent-elles leur rôle complémentaire dans le système électrique ?
:::

:::hypothese[Hypothèse]
Chaque source d'énergie possède des caractéristiques techniques uniques (pilotabilité, flexibilité, facteur de charge) qui la destinent à des fonctions spécifiques dans le système électrique, rendant impossible une substitution simple et directe entre technologies.
:::

**Concepts clés** :

- **Complémentarité fonctionnelle** : nécessité de combiner différentes sources pour assurer toutes les fonctions du système électrique (base, semi-base, pointe, ajustement).
- **Pilotabilité vs intermittence** : opposition entre sources contrôlables et sources qui dépendent des conditions naturelles.
- **Ordre de mérite** : ordre d'appel des centrales selon leur coût marginal, qui détermine leur utilisation effective.

:::question[Question de recherche]
Quelles tensions existent entre objectifs économiques, environnementaux et de sécurité d'approvisionnement dans les choix énergétiques européens ?
:::

:::hypothese[Hypothèse]
Les choix énergétiques européens résultent d'arbitrages complexes entre trois objectifs parfois contradictoires : minimiser les coûts (compétitivité économique), réduire les impacts environnementaux (objectifs climatiques) et garantir la sécurité d'approvisionnement (indépendance géopolitique).
:::

**Concepts clés** :

- **Trilemme énergétique** : tension entre coût abordable, durabilité et sécurité énergétique, qui contraint les choix politiques.
- **Externalités environnementales** : coûts environnementaux non intégrés dans les prix de marché, d'où un écart entre coûts privés et coûts sociaux.
- **Souveraineté énergétique** : capacité à maintenir l'approvisionnement indépendamment des crises géopolitiques.

### Investigation par les élèves

#### 1. Panorama du mix énergétique national

**Objectif :** Analyser la composition actuelle du mix énergétique national et identifier les tendances d'évolution.

Les élèves disposent de données récentes sur la production électrique de leur pays et travaillent en binômes pour analyser ces informations. Ils complètent un tableau de synthèse qui servira de base à leur futur simulateur. Les élèves calculent les totaux, vérifient la cohérence des données et identifient les tendances d'évolution. Ils créent ensuite un graphique en secteurs montrant la répartition actuelle du mix.

Questions d'analyse :

- Quelles sources dominent le mix actuel et pourquoi ?
- Quelles sources progressent le plus rapidement et quels facteurs expliquent cette évolution ?
- Quelle est la part des sources pilotables vs intermittentes ?

#### 2. Analyse des caractéristiques techniques et économiques

**Objectif :** Comprendre les spécificités de chaque source d'énergie qui déterminent son rôle dans le système électrique.

Chaque binôme se spécialise sur 2-3 sources d'énergie et complète une fiche d'analyse détaillée. Ces fiches serviront ensuite de base de données pour construire le simulateur. Un modèle de fiche d'analyse (exemple : Gaz naturel) est disponible pour impression en annexe du PDF.

**Fiche technique : gaz naturel (exemple)**

*Caractéristiques techniques :*

- **Facteur de charge moyen** : 45 %
- **Temps de démarrage** : 15-30 minutes
- **Flexibilité** : très élevée (0-100 % en quelques minutes)
- **Durée de vie installation** : 25-30 ans

*Caractéristiques économiques :*

- **Coût d'investissement** : 800-1200 EUR/kW
- **Coût d'exploitation** : 60-80 EUR/MWh
- **LCOE moyen** : 75-95 EUR/MWh

*Caractéristiques environnementales :*

- **Émissions CO2** : 350-400 g/kWh
- **Autres impacts** : NOx, dépendance aux importations

*Avantages dans le système :* flexibilité pour équilibrer le réseau, temps de réponse rapide, technologie maîtrisée.

*Inconvénients dans le système :* prix volatil des combustibles, dépendance géopolitique, émissions de CO2 importantes.

:::info[Lecture des paramètres]
Le **facteur de charge** (rapport entre production réelle et production maximale théorique) sert à calculer la production effective. Le **temps de démarrage** et la **flexibilité** déterminent la capacité à répondre aux variations de demande. La **durée de vie** influence l'amortissement des investissements. Le **coût d'investissement** (EUR/kW) permet de calculer le coût total d'installation, le **coût d'exploitation** (EUR/MWh) les coûts variables, et le **LCOE** combine les deux pour donner le coût moyen sur la durée de vie. Les **émissions de CO2** (g/kWh) servent à calculer l'impact climatique total.
:::

Les élèves complètent des fiches similaires pour toutes les sources du mix, en s'appuyant sur les ressources documentaires fournies et sur des recherches guidées.

#### 3. Fonctions dans le système électrique

Les élèves analysent collectivement les rôles complémentaires des différentes sources d'énergie dans leur système énergétique national. Chaque type de centrale répond à des besoins spécifiques du réseau :

Répartition fonctionnelle du mix :

- **Base load (charge de base 40-60%)** : Nucléaire, hydraulique au fil de l'eau, part du charbon - Ces sources fonctionnent en continu 24h/24 pour assurer le socle de la production électrique, avec des coûts fixes élevés mais des coûts variables faibles
- **Semi-base (charge moyenne 20-30%)** : Gaz en base, hydraulique de lac - Ces centrales adaptent leur production selon les variations quotidiennes de la demande, avec une flexibilité modérée et des coûts variables moyens
- **Pointe (charge de pointe 10-20%)** : Gaz flexible, hydraulique pompé, imports/exports - Ces unités très réactives peuvent démarrer rapidement pour répondre aux pics de consommation, malgré des coûts de production élevés
- **Variable selon météo** : Éolien et solaire, compensés par les autres sources - Ces énergies renouvelables produisent selon les conditions météorologiques, nécessitant que les autres sources s'adaptent pour maintenir l'équilibre du réseau

Cette analyse prépare la construction du simulateur : chaque source a des caractéristiques techniques et économiques uniques (temps de démarrage, flexibilité, coûts...). Ces contraintes limitent les possibilités de substitution entre sources, car elles ne peuvent pas toutes assurer les mêmes fonctions dans le système électrique.

### Restitution et réflexion

L'analyse du mix énergétique européen a montré aux élèves les arbitrages qui sous-tendent les choix énergétiques actuels. Chaque source d'énergie a des caractéristiques techniques, économiques et environnementales qui déterminent son rôle dans le système électrique. Cette complémentarité fonctionnelle explique pourquoi aucune source unique ne peut satisfaire tous les besoins du réseau, et pourquoi une transition énergétique recompose le mix au lieu de simplement remplacer une source par une autre.

Le travail sur les fiches techniques passe par une spécialisation par groupe, qui permet d'approfondir certains aspects, puis par une mise en commun, qui donne une vision d'ensemble.

Pour approfondir la réflexion et préparer la construction du simulateur, voici quelques questions clés à explorer collectivement :

- **Quelles sont les limites physiques et économiques des substitutions entre sources d'énergie ?** Identifier les contraintes techniques qui empêchent certaines substitutions (intermittence, temps de réponse, localisation). Analyser les coûts cachés des transitions (infrastructures, stockage, flexibilité). Comprendre les seuils critiques pour la stabilité du système électrique.
- **Comment anticiper l'évolution future du mix énergétique ?** Explorer les tendances (croissance des renouvelables, déclin des fossiles, débats sur le nucléaire). Identifier ce qui accélère ou freine les transitions. Réfléchir aux innovations qui pourraient transformer le mix énergétique.
- **Quels outils de modélisation développer pour évaluer les impacts des modifications du mix ?** Pour préparer la construction du simulateur, identifier les variables clés à y intégrer. Réfléchir aux indicateurs pertinents pour évaluer les scénarios (coût, émissions, sécurité). Découvrir les méthodes de simulation et d'optimisation appliquées aux systèmes énergétiques.
- **Comment les spécificités nationales s'articulent-elles avec les objectifs européens communs ?** Analyser les différences de mix entre pays européens et leurs causes (géographie, histoire, choix politiques). Explorer les mécanismes de coordination européenne et les enjeux de solidarité énergétique. Réfléchir à l'équilibre entre souveraineté nationale et intégration européenne.

---

## Phase 2 : Construction du simulateur

### Contexte de la séquence

Armés de leur compréhension du mix énergétique actuel, les élèves vont maintenant construire un outil leur permettant de modéliser les impacts de modifications de ce mix. Cette séquence développe leurs compétences en modélisation numérique et approfondit leur compréhension des interdépendances énergétiques.

### Objectifs d'apprentissage

- Construire un modèle numérique du mix énergétique européen.
- Intégrer les contraintes techniques et économiques dans la modélisation.
- Développer des indicateurs de performance pour évaluer différents scénarios.

### Conceptualisation

:::question[Question de recherche]
Comment traduire la complexité du système énergétique en un modèle numérique accessible et fonctionnel ?
:::

:::hypothese[Hypothèse]
La modélisation d'un système énergétique nécessite de simplifier la réalité en conservant les relations essentielles entre variables techniques, économiques et environnementales, tout en rendant l'outil utilisable par des non-experts pour explorer différents scénarios.
:::

**Concepts clés** :

- **Modélisation systémique** : représentation simplifiée d'un système complexe qui conserve ses propriétés essentielles.
- **Variables endogènes vs exogènes** : distinction entre paramètres modifiables par l'utilisateur et contraintes externes imposées.
- **Validation de modèle** : vérification de la cohérence entre résultats simulés et données réelles.

:::question[Question de recherche]
Quels indicateurs et contraintes intégrer pour évaluer de manière pertinente les scénarios énergétiques ?
:::

:::hypothese[Hypothèse]
L'évaluation des scénarios énergétiques nécessite des indicateurs multidimensionnels (économiques, environnementaux, techniques) et des contraintes réalistes qui reflètent les limites physiques et politiques du système, pour éviter les solutions théoriques non réalisables.
:::

**Concepts clés** :

- **Indicateurs de performance énergétique** : métriques quantitatives qui évaluent la qualité d'un mix énergétique selon différents critères.
- **Contraintes de faisabilité** : limites techniques, économiques ou politiques qui bornent l'espace des solutions possibles.
- **Optimisation multi-critères** : recherche de solutions qui équilibrent plusieurs objectifs parfois contradictoires.

:::question[Question de recherche]
Comment la construction collaborative d'un outil de simulation favorise-t-elle l'appropriation des enjeux énergétiques ?
:::

:::hypothese[Hypothèse]
La construction collaborative d'un simulateur développe une compréhension approfondie des mécanismes énergétiques car elle oblige à expliciter les relations causales, à quantifier les impacts et à confronter les hypothèses aux données réelles.
:::

**Concepts clés** :

- **Apprentissage par la modélisation** : acquisition de connaissances par la construction d'une représentation formalisée.
- **Appropriation technique** : maîtrise d'un outil par sa construction plutôt que par son utilisation passive.
- **Pensée computationnelle** : capacité à décomposer un problème complexe en éléments modélisables et calculables.

### Investigation par les élèves

#### 1. Architecture du simulateur

**Objectif :** Concevoir la structure générale du simulateur et organiser les données de base.

Les élèves, par groupes, reçoivent un fichier (par exemple sur Excel ou Google Sheet) pré-formaté avec les onglets de base et construisent progressivement leur simulateur. L'enseignant guide la construction étape par étape.

**Exemple de structure du fichier :**

| Onglet | Contenu |
|---|---|
| **1. Données de base** | Caractéristiques de chaque source (collectées en Phase 1), paramètres de référence (demande totale, objectifs climatiques, budgets), facteurs de conversion et constantes. |
| **2. Mix actuel** | Répartition actuelle du mix (en % et en TWh), calculs automatiques des coûts/émissions/indicateurs techniques, graphiques de visualisation. |
| **3. Simulateur** | Interface de modification du mix, calculs en temps réel des impacts, alertes sur les contraintes non respectées. |
| **4. Résultats** | Tableau de comparaison avant/après, graphiques d'impact, indicateurs de synthèse. |

Les élèves commencent par saisir leurs données de base dans l'onglet 1, en organisant les informations collectées lors de la séquence précédente.

#### 2. Construction des formules de calcul

**Objectif :** Développer les algorithmes de calcul pour quantifier les impacts des modifications du mix.

L'enseignant guide les élèves dans la construction progressive des formules clés du simulateur :

- **Production par source** : `Production_source = Part_mix × Demande_totale × Facteur_charge`. Calcule la production réelle de chaque source en tenant compte de sa part dans le mix, de la demande totale et du facteur de charge (par exemple, le solaire ne produit pas la nuit).
- **Coût total du système** : `Coût_total = Σ(Capacité_installée × Coût_investissement + Production × Coût_exploitation)`. Additionne pour chaque source les coûts fixes (investissement × capacité) et les coûts variables (exploitation × production), pour obtenir le coût total annuel du système électrique.
- **Émissions totales** : `Émissions_totales = Σ(Production_source × Facteur_émission_source)`. Multiplie la production de chaque source par son facteur d'émission spécifique (gCO2/kWh). Le nucléaire et l'hydraulique ont des facteurs très faibles, le charbon un facteur élevé.
- **Indicateur de sécurité** : `Part_pilotable = Σ(Production_sources_pilotables) / Production_totale`. Calcule la proportion d'électricité provenant de sources pilotables (nucléaire, thermique, hydraulique de barrage). Un ratio élevé indique une meilleure stabilité du réseau.
- **Indicateur d'autonomie** : `Taux_imports = Production_imports / Demande_totale`. Évalue la dépendance aux importations. Un taux faible indique une plus grande autonomie énergétique.

Les élèves implémentent ces formules étape par étape, testent leur fonctionnement et ajoutent des vérifications (somme des parts = 100 %, cohérence des unités).

#### 3. Interface utilisateur et visualisation

**Objectif :** Créer une interface intuitive permettant de modifier facilement le mix et visualiser les résultats.

Les élèves développent l'interface de leur simulateur pour le rendre facile à utiliser :

- Identification des cellules de saisie pour modifier la part de chaque source
- **Contrainte automatique** : la somme doit égaler 100%
- **Alertes colorées** : rouge si contraintes violées, vert si objectifs atteints
- **Graphiques dynamiques** : camembert du mix, barres des coûts/émissions
- **Tableau de bord** : indicateurs clés mis en évidence

Les groupes testent leur simulateur en modifiant quelques paramètres et vérifient que les calculs et graphiques se mettent à jour correctement. Exemple de tableau de bord :

| INDICATEURS CLÉS | Mix actuel | Nouveau mix | Évolution |
|---|---|---|---|
| Coût total (Md EUR/an) | 180 | =FORMULE | =FORMULE |
| Émissions (Mt CO2/an) | 950 | =FORMULE | =FORMULE |
| Part pilotable (%) | 61% | =FORMULE | =FORMULE |
| Part renouvelable (%) | 39% | =FORMULE | =FORMULE |

#### 4. Validation et calibrage

Les élèves étalonnent leur simulateur en comparant ses résultats à des données de référence et ajustent les paramètres si nécessaire. Ils préparent également une notice d'utilisation simple pour les séquences suivantes.

### Restitution et réflexion

Avec la construction du simulateur, les élèves ont traduit leur compréhension du mix énergétique en un modèle numérique. Ils ont structuré des données, formalisé des relations causales par des formules mathématiques et créé une interface pour explorer des scénarios. Ils ont rencontré les difficultés de la modélisation : équilibre entre simplicité et réalisme, validation des résultats, gestion des contraintes multiples.

Le simulateur se construit progressivement. Le travail en petits groupes permet l'entraide et la confrontation des approches. Les élèves le valident ensuite en comparant ses résultats à des données réelles.

Pour approfondir la réflexion et préparer l'expérimentation de scénarios, voici quelques questions clés à explorer collectivement :

- **Quelles sont les limites de notre modèle et comment les prendre en compte dans l'interprétation des résultats ?** Identifier les simplifications effectuées et leurs conséquences sur la validité des analyses. Réfléchir à l'écart entre modèle et réalité. Discuter des précautions à prendre pour utiliser les résultats de simulation.
- **Comment notre simulateur peut-il éclairer les débats énergétiques actuels ?** Explorer les questions énergétiques contemporaines que le simulateur permet d'analyser. Identifier les acteurs (politiques, entreprises, citoyens) qui pourraient bénéficier de tels outils. Réfléchir au rôle de la modélisation dans l'aide à la décision.
- **Quels scénarios de crise ou de transition seraient les plus instructifs à tester ?** Pour préparer les expérimentations de la séquence suivante, repérer les situations les plus révélatrices des enjeux énergétiques. Réfléchir aux événements géopolitiques, climatiques ou technologiques qui pourraient bouleverser le mix énergétique.
- **Comment améliorer progressivement notre simulateur pour le rendre plus réaliste ?** Identifier les raffinements possibles (variations saisonnières, coûts de réseau, innovations technologiques). Réfléchir à l'équilibre entre complexité croissante et facilité d'utilisation. Préparer l'évolution continue de l'outil.

---

## Phase 3 : Expérimentation et scénarios de transition énergétique

### Contexte de la séquence

Les élèves disposent maintenant d'un outil fonctionnel pour explorer les conséquences de modifications du mix énergétique. Cette phase les amène à tester différents scénarios de suppression ou réduction drastique d'une source d'énergie, puis à formuler des recommandations stratégiques réalistes. L'objectif est de comprendre les contraintes qui limitent les transitions énergétiques et de développer leur capacité de synthèse pour proposer des solutions opérationnelles.

### Objectifs d'apprentissage

- Analyser les impacts de la suppression d'une source d'énergie majeure.
- Identifier les stratégies de compensation et leurs limites.
- Évaluer la faisabilité technique et économique de différentes transitions.
- Formuler des recommandations stratégiques pour les décideurs européens.

### Conceptualisation

:::question[Question de recherche]
Quelles sont les contraintes et limites physiques qui conditionnent la faisabilité des transitions énergétiques majeures ?
:::

:::hypothese[Hypothèse]
Les transitions énergétiques sont limitées par des contraintes physiques (temps de déploiement, capacités industrielles, stabilité du réseau) et économiques (coûts d'investissement, acceptabilité sociale) qui rendent impossibles certaines substitutions rapides entre sources d'énergie. Les transitions demandent donc des stratégies progressives et diversifiées.
:::

**Concepts clés** :

- **Inertie systémique** : résistance du système énergétique aux changements rapides due aux infrastructures existantes et aux contraintes techniques, d'où des délais incompressibles.
- **Points de rupture** : seuils au-delà desquels les contraintes techniques ou économiques rendent une transition impossible.
- **Chemin de transition** : séquence optimale de modifications du mix énergétique qui respecte toutes les contraintes.

:::question[Question de recherche]
Comment les stratégies de compensation révèlent-elles les interdépendances et complémentarités entre sources d'énergie ?
:::

:::hypothese[Hypothèse]
La suppression d'une source d'énergie majeure ne peut être compensée par une seule alternative et nécessite une recomposition du mix : chaque source a des fonctions spécifiques irremplaçables, et la sécurité énergétique repose sur la diversification.
:::

**Concepts clés** :

- **Substitution imparfaite** : impossibilité de remplacer directement une source d'énergie par une autre sans modification des autres composantes du système.
- **Effets de système** : impacts en cascade d'une modification sur l'ensemble du mix énergétique.
- **Portefeuille énergétique** : approche de diversification des risques appliquée au mix énergétique pour garantir la sécurité d'approvisionnement.

:::question[Question de recherche]
Quels arbitrages entre objectifs contradictoires structurent les choix de politique énergétique ?
:::

:::hypothese[Hypothèse]
Les décisions énergétiques résultent d'arbitrages complexes entre objectifs souvent contradictoires (coût, climat, sécurité, acceptabilité sociale) qui expliquent pourquoi il n'existe pas de solution optimale unique mais seulement des compromis qui traduisent des priorités politiques et sociales.
:::

**Concepts clés** :

- **Trilemme énergétique** : tension permanente entre coût abordable, durabilité et sécurité, qui contraint tous les choix énergétiques.
- **Optimisation sous contraintes multiples** : recherche de solutions qui satisfont à la fois plusieurs objectifs parfois incompatibles.
- **Gouvernance énergétique** : processus de décision collective qui intègre expertise technique et légitimité démocratique.

### Investigation par les élèves

#### 1. Scénarios de suppression progressive et stratégies de compensation

**Objectif :** Explorer méthodiquement les conséquences de la réduction progressive d'une source d'énergie et tester différentes stratégies pour compenser la source d'énergie supprimée tout en respectant les contraintes réalistes.

Les élèves utilisent leur simulateur pour analyser les impacts de chaque scénario selon différents rythmes de transition.

- **Groupe 1, sortie du charbon** : *« Suite aux accords de Paris et à la pression citoyenne, votre pays s'engage à sortir du charbon d'ici 5 ans pour respecter ses objectifs climatiques. »* Réduire la part du charbon de 16 % à 0 %, transition en 5 ans (objectif climatique urgent), compenser 400 TWh/an de production pilotable.
- **Groupe 2, sortie du nucléaire** : *« Suite à un référendum national, votre pays décide de sortir progressivement du nucléaire d'ici 15 ans, en fermant les centrales à la fin de leur durée de vie. »* Réduire la part du nucléaire de 23 % à 0 %, transition en 15 ans (durée de vie des centrales), compenser 580 TWh/an de production bas-carbone et pilotable.
- **Groupe 3, crise du gaz** : *« Une crise géopolitique majeure coupe l'approvisionnement en gaz naturel de votre pays. Vous devez réduire drastiquement cette dépendance en 2 ans. »* Réduire la part du gaz de 22 % à 5 %, transition en 2 ans (crise d'approvisionnement), compenser 425 TWh/an de production flexible.
- **Groupe 4, limitation des renouvelables** : *« Les gestionnaires de réseau alertent sur l'instabilité croissante due aux renouvelables intermittents. Il faut plafonner leur développement. »* Plafonner éolien + solaire à 25 %, acceptabilité locale limitée, satisfaire les objectifs climatiques sans surcapacités intermittentes.

L'objectif n'est pas de prendre position pour ou contre ces scénarios, mais de comprendre leurs implications techniques et économiques. Les groupes doivent utiliser correctement le simulateur, interpréter les résultats concernant les coûts, émissions et sécurité, noter les messages d'alerte du simulateur et documenter leurs observations.

Les groupes identifient ensuite le rythme optimal et préparent une synthèse de leurs découvertes, avant de présenter en deux minutes les principaux enseignements.

Pour chaque scénario, les élèves explorent systématiquement les différentes options de compensation et identifient les points de rupture :

| Stratégie | Avantages | Limites | Coût relatif |
|---|---|---|---|
| Augmentation gaz naturel | Flexibilité, rapidité déploiement | Émissions CO2, dépendance imports | Moyen |
| Développement éolien | Bas-carbone, coût décroissant | Intermittence, acceptabilité | Faible |
| Développement solaire | Bas-carbone, modulaire | Intermittence, stockage nécessaire | Faible |
| Extension nucléaire | Bas-carbone, pilotable | Délais longs, coûts élevés | Élevé |
| Importations | Rapidité, flexibilité | Dépendance, coûts transport | Variable |
| Sobriété énergétique | Réduction demande globale | Acceptabilité, limites physiques | Très faible |

**Contraintes à intégrer :**

| Contrainte | Seuil | Justification |
|---|---|---|
| Pilotabilité | min. 50 % de sources pilotables | Si trop d'électricité vient du vent et du soleil, le réseau devient instable. |
| Budgétaire | max. +50 % de coût vs. mix actuel | Citoyens et industries ne peuvent pas payer une électricité 2× plus chère. |
| Climatique | max. 150 g CO2/kWh | Objectif européen 2030. |
| Imports | max. 15 % de la demande | Trop dépendre des voisins est risqué en cas de crise. |
| Déploiement | max. +10 %/an pour les renouvelables | On ne peut pas construire des éoliennes plus vite que l'industrie ne les produit. |

Les groupes explorent librement différentes combinaisons dans leur simulateur pour compenser la source d'énergie supprimée et testent les limites de leurs stratégies.

L'enseignant guide : *« Que se passe-t-il si vous voulez aller plus vite ? Plus loin ? »* Il faut identifier précisément où et pourquoi le système « casse ». Par exemple, le Groupe 2 (sortie nucléaire) peut découvrir que remplacer 100 % du nucléaire par de l'éolien nécessiterait de multiplier par 8 les capacités actuelles, ce qui prendrait 22 ans au rythme maximal de +10 %/an, rendant leur objectif de 15 ans impossible sans autres sources.

Enfin, chaque groupe sélectionne sa stratégie optimale, justifie ses choix et prépare un argumentaire pour l'étape suivante.

#### 2. Formulation de recommandations stratégiques

**Objectif :** Traduire les enseignements des simulations en principes stratégiques et feuilles de route opérationnelles.

L'objectif est que les élèves synthétisent leurs découvertes pour formuler des recommandations réalistes.

Analyse comparative des scénarios : Les groupes présentent leurs résultats selon un format standardisé que l'enseignant peut projeter dans la classe si possible.

| Critères d'évaluation | Sortie charbon | Sortie nucléaire | Crise gaz | Limitation renouv. |
|---|---|---|---|---|
| Faisabilité technique | Possible | Difficile | Possible | Possible |
| Impact coût | +12% | +25% | +18% | +8% |
| Impact émissions | -45% | +15% | -20% | +30% |
| Sécurité approvisionnement | Maintenue | Fragilisée | Fragilisée | Renforcée |
| Délai réalisation | 5 ans | 15 ans | 2 ans | Immédiat |
| Acceptabilité sociale | Forte | Débattue | Nécessaire | Conflictuelle |

La faisabilité technique est évaluée positivement si aucune contrainte majeure n'est violée, avec une alerte sinon. L'impact coût correspond au pourcentage d'augmentation par rapport au mix actuel. L'impact émissions représente le pourcentage de réduction ou d'augmentation des émissions CO2. La sécurité s'évalue positivement si plus de 50% de sources pilotables et moins de 15% d'imports sont maintenus. Le critère d'acceptabilité évalue si la population soutient largement la transition (populaire) ou si elle suscite des oppositions (controversée).

Formulation de principes stratégiques : À partir de leurs simulations, les élèves formulent collectivement des principes stratégiques :

- **Principe de progressivité** : Les transitions brutales créent des déséquilibres difficiles à gérer
- **Principe de compensation anticipée** : Il faut développer les alternatives avant de supprimer les sources existantes
- **Principe de diversification** : Aucune source unique ne peut remplacer une autre de manière équivalente
- **Principe d'acceptabilité** : Les transitions techniques doivent être accompagnées d'un consensus social
- **Principe de résilience** : Le mix doit maintenir sa capacité d'adaptation face aux crises

Conception de feuilles de route : Chaque groupe conçoit une « feuille de route » synthétique pour sa transition, en appliquant les principes identifiés :

- **Objectif** : Réduction visée et délai
- **Phases principales** : 3 étapes avec actions clés
- **Budgets et bénéfices** : Ordres de grandeur
- **Risques critiques** : Points de vigilance principaux

#### 3. Débat et arbitrages politiques

**Objectif :** Simuler les processus de décision collective et comprendre les arbitrages qui pèsent sur les choix énergétiques. Sur la base des feuilles de route, l'enseignant propose une simulation de « Conseil de l'énergie » où chaque groupe devra défendre sa proposition devant le Conseil.

Les élèves joueront un double rôle, à la fois experts lors de la présentation de leur feuille de route, puis « conseillers » selon un rôle qui leur sera distribué au tirage au sort :

- **Représentant des citoyens** : Priorité au coût de l'énergie et à l'emploi local
- **Représentant des industriels** : Priorité à la compétitivité et la sécurité d'approvisionnement
- **Représentant écologiste** : Priorité au climat et à la sortie des fossiles
- **Représentant syndical** : Priorité à l'emploi et à la formation des travailleurs

:::info[Notes pour l'enseignant·e]
**Organisation spatiale** : la salle doit être organisée dès le début de l'activité « Débat » en quatre zones correspondant aux sous-conseils (citoyens, industriels, écologistes, syndicats). Les élèves travaillent au sein de leur sous-conseil pendant toute la séance, ne reformant leurs groupes d'experts que brièvement lors des présentations au tableau qui démarrent la séance. Cette organisation aide les élèves à rester dans leur rôle de représentant et renforce la cohésion de chaque sous-conseil pendant tout le débat.
:::

La première phase de l'activité « Débat » consiste en la présentation des 4 feuilles de route. À tour de rôle, chaque groupe dispose de cinq minutes pour présenter ses conclusions en expliquant clairement les objectifs, les étapes de mise en oeuvre, les coûts et les bénéfices attendus. Pendant ces présentations, les autres élèves préparent leurs interventions selon leur rôle spécifique.

La phase de débat s'organise autour de quatre questions stratégiques que l'enseignant pose successivement :

- **« Quelle transition énergétique doit être considérée comme la plus urgente et pourquoi ? »** Chaque groupe de conseillers exprime sa position selon ses préoccupations spécifiques, et des tensions apparaissent entre urgence climatique, contraintes économiques et enjeux sociaux.
- **« Comment financer concrètement les investissements nécessaires à ces transitions ? »** L'enseignant guide la discussion vers les différentes options (taxes, emprunts publics, financements européens, participation privée) en faisant réagir chaque groupe sur l'acceptabilité de ces mécanismes pour leurs représentés.
- **« Quelle stratégie adopter pour gérer les conséquences sociales de ces transitions ? »** Cette question permet d'aborder les enjeux de reconversion professionnelle, d'accompagnement des territoires en mutation et de justice sociale dans la transition énergétique.
- **« Quel niveau d'incertitude et de risque sommes-nous prêts à accepter concernant notre sécurité énergétique ? »** Cette discussion révèle les arbitrages entre prudence et ambition, entre autonomie nationale et coopération européenne.

L'enseignant joue un rôle actif de modérateur en reformulant les positions pour éviter les malentendus, en relançant le débat quand il s'essouffle et en poussant vers la recherche de compromis concrets. Il peut interpeller directement certains groupes : *« Les syndicats accepteraient-ils cette proposition si elle était accompagnée d'un plan de formation ? »* ou *« Les industriels sont-ils prêts à payer une taxe carbone si elle finance des infrastructures ? »*

La conclusion du débat vise à faire émerger les enseignements collectifs de cette expérience de négociation. L'enseignant demande à chaque groupe de conseillers d'identifier un point de convergence découvert pendant les échanges et une proposition concrète pour surmonter les blocages identifiés. Cette synthèse révèle généralement que les positions initiales peuvent évoluer quand les acteurs comprennent les contraintes des autres et cherchent ensemble des solutions.

### Restitution et réflexion

Les scénarios de transition ont montré aux élèves les contraintes physiques et économiques qui limitent les options disponibles. Une transition énergétique recompose le mix en respectant de multiples contraintes, au lieu de simplement remplacer une source par une autre. En formulant leurs recommandations, les élèves ont vu que les choix énergétiques résultent d'arbitrages entre objectifs souvent contradictoires et demandent des compromis politiques et sociaux.

Avec le simulateur, les élèves voient en temps réel l'impact de leurs choix. Le débat final, en jeu de rôles, les fait argumenter et négocier.

Pour approfondir la réflexion et ouvrir des perspectives d'engagement citoyen, voici quelques questions clés à explorer collectivement :

- **Comment les enseignements de nos simulations s'appliquent-ils aux débats énergétiques actuels dans notre pays ?** Appliquer les principes stratégiques identifiés aux enjeux énergétiques nationaux d'aujourd'hui. Analyser de façon critique les politiques énergétiques en cours au regard des contraintes découvertes. Identifier les points de convergence et de divergence entre simulations et réalité politique.
- **Quels mécanismes démocratiques permettent aux citoyens d'influencer les choix énergétiques ?** Explorer les instances de participation citoyenne aux décisions énergétiques (conseils consultatifs, référendums, budgets participatifs). Analyser le rôle des élus, des experts et des citoyens dans la gouvernance énergétique. Réfléchir aux compétences nécessaires pour participer aux débats techniques.
- **Comment concilier expertise technique et légitimité démocratique dans les choix énergétiques ?** Discuter de la tension entre la complexité technique des enjeux énergétiques et leur accessibilité aux citoyens. Explorer les méthodes de médiation scientifique et de débat public. Réfléchir à l'équilibre entre délégation aux experts et contrôle démocratique.
- **Quelle contribution personnelle à la transition énergétique au-delà de la simulation ?** Identifier les formes d'engagement citoyen accessibles (associations, projets locaux, choix de formation). Explorer les liens entre compétences acquises et occasions d'agir. Construire une vision à long terme de son rôle dans la société énergétique de demain.

---

## Aller plus loin

### Projet de micro-réseau intelligent au sein de l'établissement

Les élèves peuvent concevoir et mettre en oeuvre un système énergétique miniature dans leur établissement, avec production renouvelable (panneaux solaires, petite éolienne), stockage (batteries) et gestion intelligente de la consommation (éclairage LED programmable, appareils connectés). Ce projet pluridisciplinaire mobilise les compétences techniques acquises lors de la construction du simulateur et confronte les élèves aux défis pratiques de la gestion énergétique en temps réel. Dans l'établissement, les élèves expérimentent les principes de l'optimisation énergétique et mesurent l'impact de leurs choix sur la consommation globale.

Exemple : Le programme Solar Schools fournit des leçons alignées sur le programme scolaire et des expériences d'apprentissage pour les élèves du primaire et du secondaire. Les écoles participantes sont équipées de compteurs d'énergie qui enregistrent la consommation et la production en temps réel. Les enseignants ont accès à une boîte à outils et à des outils numériques interactifs pour travailler les concepts scientifiques à partir des données réelles. https://www.solarschools.net

### Modélisation énergétique territoriale avec les collectivités locales

À l'échelle de leur commune ou intercommunalité, les élèves étendent leur simulateur en partenariat avec les services techniques locaux. Ils collectent les données énergétiques réelles du territoire (consommations par secteur, mix énergétique local, projets en cours), adaptent leur modèle aux spécificités territoriales et proposent des scénarios de transition énergétique contextualisés.

Exemple : Le MITEC Launchpad est une initiative du MIT Energy & Climate Club qui offre aux étudiants du MIT l'occasion de résoudre des problèmes réels d'énergie et de climat avec des professionnels de l'industrie. Les étudiants travaillent sur des projets concrets de modélisation énergétique et de planification climatique en partenariat avec des organisations externes. https://mitec-club.org/

### Participation aux concours internationaux d'innovation énergétique

Des concours internationaux récompensent l'innovation technique et la créativité scientifique. En y participant, les élèves approfondissent leur expertise en modélisation énergétique : ils développent des prototypes fonctionnels de systèmes énergétiques innovants (récupération d'énergie, optimisation de consommation, stockage alternatif) et présentent leurs solutions devant un jury d'experts.

Exemple : Le concours EUCYS (European Union Contest for Young Scientists) est ouvert aux jeunes scientifiques de 14 à 20 ans. Les participants peuvent présenter des projets individuels ou en équipe jusqu'à trois membres, et le concours met l'accent sur l'innovation énergétique et environnementale. Les projets peuvent être théoriques ou expérimentaux, et chaque pays peut soumettre jusqu'à trois projets. Le concours met en valeur l'originalité et la curiosité scientifique, et les participants y partagent leurs recherches avec un public international. https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/eucys_en

### Animation d'ateliers énergétiques dans les centres de loisirs

Dans les centres de loisirs locaux, les élèves transmettent leurs connaissances en animant des ateliers ludiques sur l'énergie auprès d'enfants plus jeunes. Ils adaptent leur simulateur en créant des jeux sérieux, organisent des expériences scientifiques simples et sensibilisent à la sobriété énergétique par des activités créatives.

Exemple : Student Energy (SE) est une organisation mondiale dirigée par des jeunes, qui donne à la nouvelle génération les moyens d'accélérer la transition énergétique. Son programme Student Energy Chapters permet aux étudiants de créer des antennes locales dans leurs établissements. Les participants développent des projets concrets de transition énergétique et bénéficient d'un mentorat et d'un réseau international de pairs. https://studentenergy.org/chapters/

### Participation aux assemblées citoyennes sur l'énergie

Les élèves s'engagent dans les dispositifs de démocratie participative locale consacrés aux questions énergétiques : conventions citoyennes locales sur le climat, conseils de développement ou comités consultatifs des projets énergétiques territoriaux. Ils y apportent l'expertise technique acquise lors de la construction du simulateur pour éclairer les débats citoyens.

Exemple : Le Forum des Jeunes en Belgique est l'organe officiel de représentation des jeunes de 16 à 30 ans en Fédération Wallonie-Bruxelles. À travers des journées participatives, les jeunes définissent des projets concrets et émettent des avis officiels sur les enjeux sociétaux, notamment climatiques et énergétiques. Cette structure fait participer les jeunes directement aux décisions qui les concernent. https://forumdesjeunes.be

### Création d'une coopérative énergétique citoyenne

Les élèves s'impliquent dans la création ou le développement d'une coopérative énergétique locale, où leur expertise technique sert à l'évaluation de projets, à l'analyse de rentabilité et à la communication vers les citoyens. Ils utilisent leurs compétences en modélisation pour calculer les impacts économiques et environnementaux des installations envisagées et participent aux assemblées générales en tant que sociétaires.

Exemple : Le projet SIRenergy, financé par Interreg Europe, vise à promouvoir les coopératives énergétiques citoyennes comme modèle de transition énergétique locale. Lors de leur événement « Citizen Involvement through the Citizen Energy Cooperatives », ils ont présenté des exemples concrets de participation citoyenne dans la gestion de l'énergie et fourni des outils pour impliquer les jeunes dans ces initiatives. https://www.interregeurope.eu/sirenergy

<figure style={{margin: '1.5rem auto', textAlign: 'center'}}>
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem'}}>
    <img src="/img/ressources/steamcity/energy-mix/Modelisation-energetique-territoriale-avec-les-collectivites-locales.png" alt="Modélisation énergétique territoriale" style={{width: '100%', height: 'auto'}} />
    <img src="/img/ressources/steamcity/energy-mix/projet-de-micro-reseau-intelligent-au-sein-de-l-etablissemen.png" alt="Micro-réseau intelligent" style={{width: '100%', height: 'auto'}} />
    <img src="/img/ressources/steamcity/energy-mix/participation-aux-concours-internationaux-d-innovation-energ.png" alt="Concours d'innovation énergétique" style={{width: '100%', height: 'auto'}} />
    <img src="/img/ressources/steamcity/energy-mix/creation-d-une-cooperative-energetique-citoyenne.png" alt="Coopérative énergétique citoyenne" style={{width: '100%', height: 'auto'}} />
  </div>
  <figcaption style={{margin: '0.75rem 0 0 0'}}>Pistes d'engagement et de prolongement du projet</figcaption>
</figure>

---

*Cette fiche fait partie du projet [SteamCity](/projets/steamcity), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

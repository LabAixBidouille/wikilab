# STEAMCITY CURRICULUM

# SIMULATEUR DE MIX ÉNERGÉTIQUE

**thématique : énergie et efficacité énergétique**

---

SIMULATEUR DE MIX ÉNERGÉTIQUE Explorer les chemins de la transition énergétique

thématique : énergie et efficacité énergétique


## Introduction

Notre système énergétique repose sur un équilibre complexe entre différentes sources d'énergie. En 2023, l'UE a produit 2 572 TWh (térawattheures) d'électricité. Plus de 45 % de cette production provenaient de sources renouvelables. Les combustibles fossiles représentaient 31,7 % et l'électricité nucléaire près de 23 %. Le gaz était le principal combustible fossile utilisé pour produire de l'électricité (17 %), suivi du charbon (11,7 %).

Le bouquet électrique varie considérablement d'un État membre à l'autre, la part de l'électricité produite à partir de sources renouvelables allant de plus de 90 % à moins de 15 %.

https://www.consilium.europa.eu/fr/infographics/how-is-eu-electricity-produced-and-sold/#0

Cette diversité n'est pas accidentelle : elle résulte de choix stratégiques visant à concilier sécurité d'approvisionnement, coûts acceptables et objectifs climatiques.Cependant, cette interdépendance crée aussi des vulnérabilités. La crise énergétique de 2022-2023, déclenchée par la guerre en Ukraine, a révélé les conséquences d'une dépendance excessive au gaz russe. De même, les arrêts programmés de centrales nucléaires en Allemagne ou en Belgique posent des questions sur la capacité du système à maintenir l'équilibre offre-demande tout en respectant les objectifs climatiques.

L'Agence Internationale de l'Énergie (2023) souligne que la transition énergétique nécessite une planification rigoureuse : chaque modification du mix énergétique entraîne des effets en cascade sur les coûts, les émissions, la sécurité d'approvisionnement et l'acceptabilité sociale. Ces interactions complexes ne peuvent être appréhendées intuitivement et nécessitent des outils de modélisation.

Ce protocole propose aux élèves de construire leur propre simulateur de mix énergétique pour explorer les conséquences de la suppression totale ou partielle d'une source d'énergie. À travers cette démarche de modélisation, ils développeront une compréhension systémique des enjeux énergétiques et des contraintes qui pèsent sur les décideurs politiques et économiques. L'objectif n'est pas de former des experts techniques, mais de développer leur capacité à analyser des systèmes complexes et à anticiper les conséquences de décisions apparemment simples.


Disciplines                                   Objectifs de développement durable

physique histoire-géographie mathématiques L’activité en bref


### Structure du protocole

Ce protocole vise à développer chez les élèves une compréhension approfondie des enjeux d’interdépendances énergétiques par la construction et l'utilisation d'un outil de simulation. L'approche pédagogique s'appuie sur la modélisation quantitative, l'expérimentation numérique et l'analyse de scénarios prospectifs.

L'activité s'articule autour de quatre phases progressives:

1. Phase 1 : Décryptage du mix énergétique - Les élèves analysent la composition actuelle du mix électrique de
leur pays, identifient les caractéristiques de chaque source d'énergie (coût, pilotabilité, émissions, contraintes) et comprennent les fonctions spécifiques de chaque technologie dans le système.
2. Phase 2 : Construction du simulateur - Par groupes, les élèves construisent un outil de simulation permettant
de modéliser les impacts économiques, environnementaux et techniques de modifications du mix énergétique. Le simulateur intègre des formules de calcul, des graphiques dynamiques et des indicateurs de performance.
3. Phase 3 : Expérimentation et scénarios de crise - Les élèves testent leur simulateur en explorant les
conséquences de la suppression progressive ou totale de différentes sources d'énergie (gaz, nucléaire, charbon, renouvelables intermittents). Ils analysent les impacts sur les coûts, les émissions et la sécurité d'approvisionnement. À partir de leurs simulations, les élèves formulent des recommandations pour gérer les transitions énergétiques, en identifiant les séquences optimales de transformation du mix et les mesures d'accompagnement nécessaires.

Cette progression permet aux élèves de passer d'une compréhension statique du mix énergétique à une vision dynamique des enjeux de transition, en développant leur capacité de modélisation et d'analyse prospective.


## Pour bien démarrer

Durée : min. 4 séances

Niveau de difficulté : Avancé - Requiert des compétences en modélisation mathématique, analyse de données et programmation sur tableur pour construire le simulateur)

Matériel nécessaire :

Phase 1 : Accès internet pour recherche de données, documents sur le mix énergétique européen, calculatrices Phase 2 : Ordinateurs avec Excel ou équivalent (LibreOffice Calc), modèles de simulateur pré-formatés, guide de construction Excel Phase 3 : Fiches de scénarios imprimées, accès aux simulateurs créés, matériel pour noter les résultats, supports de présentation (vidéoprojecteur, tableaux), matériel pour créer des recommandations visuelles

## Glossaire

Mots-clés et concepts                                             Définitions Répartition des différentes sources d'énergie dans la production d'électricité d'un Mix énergétique territoire, exprimée en pourcentages. Niveau minimum de demande électrique sur un réseau pendant une période donnée, Base load (charge de base) généralement assurée par des sources pilotables. Technologies de production dont la puissance peut être ajustée selon la demande Sources pilotables (nucléaire, gaz, charbon, hydraulique). Technologies de production dépendant de conditions naturelles variables (éolien, Sources intermittentes solaire photovoltaïque). Rapport entre la production réelle d'une installation et sa production théorique Facteur de charge maximale sur une période donnée. LCOE (Levelized Cost of     Coût moyen de production d'une unité d'électricité sur la durée de vie d'une Energy)              installation, incluant investissement et exploitation. Puissance électrique maximale théorique d'une installation ou d'un parc de Capacité installée production, exprimée en MW ou GW. Infrastructure de transport et distribution de l'électricité, devant maintenir l'équilibre Réseau électrique offre-demande en temps réel. Technologies permettant de conserver l'énergie pour la restituer ultérieurement Stockage énergétique (batteries, STEP, hydrogène). Lignes électriques reliant les réseaux de différents pays, permettant les échanges Interconnexions d'électricité. Quantité de CO2 non émise grâce au remplacement d'une source fossile par une source Émissions évitées bas-carbone. Sécurité             Capacité d'un système énergétique à satisfaire la demande en permanence, même en d'approvisionnement        cas de défaillance d'équipements. Merit order (ordre de      Ordre de priorité d'appel des centrales électriques selon leur coût marginal de mérite)             production, du moins cher au plus cher. Répartition des différentes sources d'énergie dans la production d'électricité d'un Mix énergétique territoire, exprimée en pourcentages. Niveau minimum de demande électrique sur un réseau pendant une période donnée, Base load (charge de base) généralement assurée par des sources pilotables.

## Protocole


Phase 1 - Décryptage du mix énergétique

Contexte et description du problème à résoudre à cette étape : Avant de pouvoir modéliser les impacts de modifications du mix énergétique, les élèves doivent comprendre la logique actuelle du système électrique de leur pays. Cette phase les amène à décrypter les caractéristiques techniques, économiques et environnementales de chaque source d'énergie pour comprendre pourquoi le mix actuel s'est constitué ainsi et quelles contraintes pèsent sur son évolution.

Objectifs d'apprentissage : Analyser la composition du mix énergétique actuel. Identifier les caractéristiques spécifiques de chaque source d'énergie. Comprendre les fonctions complémentaires des différentes technologies dans le système électrique.


#### Conceptualisation


Question de recherche : Quels facteurs déterminent la composition actuelle du mix énergétique européen et les spécificités nationales ?


Hypothèse : La composition du mix énergétique résulte d'un équilibre complexe entre contraintes géographiques (ressources disponibles), héritages historiques (infrastructures existantes), choix politiques (stratégies énergétiques) et contraintes économiques (coûts de production), créant des spécificités nationales au sein d'objectifs européens communs. Concepts clés : Mix énergétique optimal : Répartition des sources visant à optimiser simultanément coût, sécurité et durabilité (révèle les arbitrages nécessaires) Dépendance au sentier : Influence des choix passés sur les options actuelles d'évolution du système (explique les inerties du système) Contraintes systémiques : Limitations techniques et économiques qui conditionnent les choix énergétiques (détermine les marges de manœuvre)


Question de recherche : Comment les caractéristiques techniques spécifiques de chaque source d'énergie déterminent-elles leur rôle complémentaire dans le système électrique ?


Hypothèse : Chaque source d'énergie possède des caractéristiques techniques uniques (pilotabilité, flexibilité, facteur de charge) qui la destinent à des fonctions spécifiques dans le système électrique, rendant impossible une substitution simple et directe entre technologies. Concepts clés : Complémentarité fonctionnelle : Nécessité de combiner différentes sources pour assurer toutes les fonctions du système électrique (base, semi-base, pointe, ajustement) Pilotabilité vs intermittence : Opposition fondamentale entre sources contrôlables et sources dépendantes des conditions naturelles (structure les enjeux de gestion du réseau) Ordre de mérite : Ordre d'appel des centrales selon leur coût marginal qui détermine leur utilisation effective (explique la hiérarchie économique des sources)


Question de recherche : Quelles tensions existent entre objectifs économiques, environnementaux et de sécurité d'approvisionnement dans les choix énergétiques européens ? Hypothèse : Les choix énergétiques européens résultent d'arbitrages complexes entre trois objectifs parfois contradictoires : minimiser les coûts (compétitivité économique), réduire les impacts environnementaux (objectifs climatiques) et garantir la sécurité d'approvisionnement (indépendance géopolitique). Concepts clés : Trilemme énergétique : Tension entre affordabilité, durabilité et sécurité énergétique qui contraint les choix politiques (structure les débats énergétiques) Externalités environnementales : Coûts environnementaux non intégrés dans les prix de marché (explique les distorsions entre coûts privés et sociaux) Souveraineté énergétique : Capacité à maintenir l'approvisionnement indépendamment des crises géopolitiques (influence les stratégies nationales et européennes)


#### Investigation par les élèves


1. Panorama du mix énergétique national


Objectif : Analyser la composition actuelle du mix énergétique national et identifier les tendances d'évolution.


Les élèves disposent de données récentes sur la production électrique de leur pays et travaillent en binômes pour analyser ces informations. Ils complètent un tableau de synthèse qui servira de base à leur futur simulateur. Les élèves calculent les totaux, vérifient la cohérence des données et identifient les tendances d'évolution. Ils créent ensuite un graphique en secteurs montrant la répartition actuelle du mix.

Questions d'analyse :

Quelles sources dominent le mix actuel et pourquoi ? Quelles sources progressent le plus rapidement et quels facteurs expliquent cette évolution ? Quelle est la part des sources pilotables vs intermittentes ?

2. Analyse des caractéristiques techniques et économiques


Objectif : Comprendre les spécificités de chaque source d'énergie qui déterminent son rôle dans le système électrique.


Chaque binôme se spécialise sur 2-3 sources d'énergie et complète une fiche d'analyse détaillée. Ces fiches serviront ensuite de base de données pour construire le simulateur. Modèle de fiche d'analyse (exemple : Gaz naturel) - Disponible pour impression en annexe

FICHE TECHNIQUE - GAZ NATUREL Caractéristiques techniques Facteur de charge moyen                                   45% Temps de démarrage                                        15-30 minutes Flexibilité                                               Très élevée (0-100% en quelques minutes) Durée de vie installation                                 25-30 ans Caractéristiques économiques Coût d'investissement                                     800-1200 €/kW Coût d'exploitation                                       60-80 €/MWh LCOE moyen                                                75-95 €/MWh Caractéristiques environnementales Émissions CO2                                             350-400 g/kWh Autres impacts                                            NOx, dépendance aux importations Avantages dans le système                                 Inconvénients dans le système Flexibilité pour équilibrer le réseau                     Prix volatil des combustibles Temps de réponse rapide                                   Dépendance géopolitique Technologie maîtrisée                                     Émissions de CO2 importantes


Caractéristiques techniques :

Le facteur de charge indique le rapport entre la production réelle et la production maximale théorique. C'est crucial pour calculer la production effective Le temps de démarrage et la flexibilité déterminent la capacité à répondre aux variations de demande La durée de vie influence l'amortissement des investissements

Caractéristiques économiques :

Le coût d'investissement (€/kW) permet de calculer le coût total d'installation Le coût d'exploitation (€/MWh) détermine les coûts variables de production Le LCOE combine tous les coûts pour donner le coût moyen de production sur la durée de vie

Caractéristiques environnementales :

Les émissions de CO2 (g/kWh) servent à calculer l'impact climatique total Les autres impacts environnementaux doivent aussi être pris en compte dans l'évaluation globale

Ces paramètres sont essentiels pour modéliser les impacts techniques, économiques et environnementaux de tout changement dans le mix énergétique.


Les élèves complètent des fiches similaires pour toutes les sources du mix, en s'appuyant sur les ressources documentaires fournies et sur des recherches guidées.
3. Fonctions dans le système électrique
Les élèves analysent collectivement comment les différentes sources d'énergie jouent des rôles complémentaires et essentiels dans leur système énergétique national. Cette compréhension est cruciale car chaque type de centrale répond à des besoins spécifiques du réseau :

Répartition fonctionnelle du mix :

Base load (charge de base 40-60%) : Nucléaire, hydraulique au fil de l'eau, part du charbon - Ces sources fonctionnent en continu 24h/24 pour assurer le socle de la production électrique, avec des coûts fixes élevés mais des coûts variables faibles Semi-base (charge moyenne 20-30%) : Gaz en base, hydraulique de lac - Ces centrales adaptent leur production selon les variations quotidiennes de la demande, avec une flexibilité modérée et des coûts variables moyens Pointe (charge de pointe 10-20%) : Gaz flexible, hydraulique pompé, imports/exports - Ces unités très réactives peuvent démarrer rapidement pour répondre aux pics de consommation, malgré des coûts de production élevés Variable selon météo : Éolien et solaire, compensés par les autres sources - Ces énergies renouvelables produisent selon les conditions météorologiques, nécessitant que les autres sources s'adaptent pour maintenir l'équilibre du réseau

Cette analyse est fondamentale pour la construction du simulateur car elle met en évidence que chaque source a des caractéristiques techniques et économiques uniques : temps de démarrage, flexibilité, coûts... Ces contraintes limitent les possibilités de substitution entre sources, car elles ne peuvent pas toutes assurer les mêmes fonctions dans le système électrique.


#### Restitution et réflexion


L'analyse du mix énergétique européen a révélé aux élèves la complexité des arbitrages qui sous-tendent les choix énergétiques actuels. Ils ont compris que chaque source d'énergie possède des caractéristiques techniques, économiques et environnementales spécifiques qui déterminent son rôle dans le système électrique. Cette complémentarité fonctionnelle explique pourquoi aucune source unique ne peut satisfaire tous les besoins du réseau et pourquoi les transitions énergétiques nécessitent des recompositions complexes plutôt que de simples substitutions. L'approche par fiches techniques détaillées favorise l'appropriation progressive des concepts énergétiques et développe la rigueur dans l'analyse de données. La spécialisation par groupe puis la mise en commun permettent d'approfondir certains aspects tout en construisant une vision d'ensemble. L'analyse fonctionnelle du système électrique aide les élèves à dépasser une vision statique pour comprendre les interdépendances dynamiques. Les élèves maîtrisent désormais les caractéristiques principales des différentes sources d'énergie et comprennent leur articulation dans le système électrique européen. Ils ont développé leur capacité d'analyse de données énergétiques et acquis les bases conceptuelles nécessaires pour modéliser les impacts de modifications du mix énergétique. Pour approfondir la réflexion et préparer la construction du simulateur, voici quelques questions clés à explorer collectivement :

Quelles sont les limites physiques et économiques des substitutions entre sources d'énergie ? Identification des contraintes techniques qui empêchent certaines substitutions (intermittence, temps de réponse, localisation). Analyse des coûts cachés des transitions (infrastructures, stockage, flexibilité). Compréhension des seuils critiques pour la stabilité du système électrique. Comment anticiper l'évolution future du mix énergétique ? Exploration des tendances (croissance des renouvelables, déclin des fossiles, débats sur le nucléaire). Identification des facteurs d'accélération ou de freinage des transitions. Réflexion sur les innovations susceptibles de transformer le paysage énergétique. Quels outils de modélisation développer pour évaluer les impacts des modifications du mix ? Préparation à la construction du simulateur en identifiant les variables clés à intégrer. Réflexion sur les indicateurs pertinents pour évaluer les scénarios (coût, émissions, sécurité). Introduction aux méthodes de simulation et d'optimisation appliquées aux systèmes énergétiques. Comment les spécificités nationales s'articulent-elles avec les objectifs européens communs ? Analyse des différences de mix entre pays européens et de leurs causes (géographie, histoire, choix politiques). Exploration des mécanismes de coordination européenne et des enjeux de solidarité énergétique. Réflexion sur l'équilibre entre souveraineté nationale et intégration européenne. Phase 2 - Construction du simulateur

Contexte et description du problème à résoudre à cette étape : Armés de leur compréhension du mix énergétique actuel, les élèves vont maintenant construire un outil leur permettant de modéliser les impacts de modifications de ce mix. Cette séquence développe leurs compétences en modélisation numérique tout en approfondissant leur compréhension des interdépendances énergétiques.

Objectifs d'apprentissage: Construire un modèle numérique du mix énergétique européen. Intégrer les contraintes techniques et économiques dans la modélisation. Développer des indicateurs de performance pour évaluer différents scénarios.


#### Conceptualisation


Question de recherche : Comment traduire la complexité du système énergétique en un modèle numérique accessible et fonctionnel ?


Hypothèse : La modélisation d'un système énergétique nécessite de simplifier la réalité en conservant les relations essentielles entre variables techniques, économiques et environnementales, tout en rendant l'outil utilisable par des non-experts pour explorer différents scénarios. Concepts clés : Modélisation systémique : Représentation simplifiée d'un système complexe conservant ses propriétés essentielles (permet l'analyse et la prédiction) Variables endogènes vs exogènes : Distinction entre paramètres modifiables par l'utilisateur et contraintes externes imposées (structure l'architecture du modèle) Validation de modèle : Vérification de la cohérence entre résultats simulés et données réelles (garantit la fiabilité des analyses)


Question de recherche : Quels indicateurs et contraintes intégrer pour évaluer de manière pertinente les scénarios énergétiques ?


Hypothèse : L'évaluation des scénarios énergétiques nécessite des indicateurs multidimensionnels (économiques, environnementaux, techniques) et des contraintes réalistes qui reflètent les limites physiques et politiques du système, pour éviter les solutions théoriques non réalisables. Concepts clés : Indicateurs de performance énergétique : Métriques quantitatives permettant d'évaluer la qualité d'un mix énergétique selon différents critères (guide les choix stratégiques) Contraintes de faisabilité : Limites techniques, économiques ou politiques qui bornent l'espace des solutions possibles (évite les scénarios irréalistes) Optimisation multi-critères : Recherche de solutions équilibrant plusieurs objectifs parfois contradictoires (reflète la complexité des choix énergétiques)


Question de recherche : Comment la construction collaborative d'un outil de simulation favorise- t-elle l'appropriation des enjeux énergétiques ?


Hypothèse : La construction collaborative d'un simulateur développe une compréhension approfondie des mécanismes énergétiques car elle oblige à expliciter les relations causales, à quantifier les impacts et à confronter les hypothèses aux données réelles. Concepts clés : Apprentissage par la modélisation : Processus d'acquisition de connaissances par la construction d'une représentation formalisée (favorise la compréhension systémique) Appropriation technique : Maîtrise d'un outil par sa construction plutôt que par son utilisation passive (développe l'autonomie analytique) Pensée computationnelle : Capacité à décomposer un problème complexe en éléments modélisables et calculables (compétence transférable)


#### Investigation par les élèves


1. Architecture du simulateur


Objectif : Concevoir la structure générale du simulateur et organiser les données de base.


Les élèves, par groupes, reçoivent un fichier (par exemple sur Excel ou Google Sheet) pré-formaté avec les onglets de base et construisent progressivement leur simulateur. L'enseignant guide la construction étape par étape.


Exemple de structure du fichier

Onglet 1 : "Données de base"

Tableau des caractéristiques de chaque source (données collectées en Séquence 1) Paramètres de référence (demande totale, objectifs climatiques, budgets) Facteurs de conversion et constantes

Onglet 2 : "Mix actuel"

Répartition actuelle du mix (en % et en TWh) Calculs automatiques des coûts, émissions et indicateurs techniques Graphiques de visualisation

Onglet 3 : "Simulateur"

Interface de modification du mix Calculs en temps réel des impacts Alertes sur les contraintes non respectées

Onglet 4 : "Résultats"

Tableau de comparaison avant/après Graphiques d'impact Indicateurs de synthèse


Les élèves commencent par saisir leurs données de base dans l'onglet 1, en organisant les informations collectées lors de la séquence précédente.

2. Construction des formules de calcul


Objectif : Développer les algorithmes de calcul pour quantifier les impacts des modifications du mix.


L'enseignant guide les élèves dans la construction progressive des formules clés du simulateur : Production                      Production_source = Part_mix × Demande_totale × Facteur_charge par source Cette formule calcule la production réelle de chaque source d'énergie en tenant compte de sa part dans le mix, de la demande totale d'électricité**,** et du facteur de charge qui représente la disponibilité moyenne de la source (par exemple, le solaire ne produit pas la nuit).

Coût total du                   Coût_total = Σ(Capacité_installée × Coût_investissement + Production × système                         Coût_exploitation)

Cette formule additionne pour chaque source les coûts fixes (investissement initial multiplié par la capacité installée) et les coûts variables (coût d'exploitation multiplié par la production). Cela permet d'obtenir le coût total annuel du système électrique.

Émissions                       Émissions_totales = Σ(Production_source × Facteur_émission_source) totales Cette formule calcule les émissions totales de CO2 en multipliant la production de chaque source par son facteur d'émission spécifique (en gCO2/kWh). Certaines sources comme le nucléaire ou l'hydraulique ont des facteurs très faibles, tandis que le charbon a un facteur élevé.

Indicateur de                   Part_pilotable = Σ(Production_sources_pilotables) / Production_totale sécurité Cette formule calcule la proportion d'électricité provenant de sources pilotables (nucléaire, thermique, hydraulique de barrage) par rapport à la production totale. Un ratio élevé indique une meilleure stabilité du réseau.

Indicateur                      Taux_imports = Production_imports / Demande_totale d'autonomie Cette formule évalue la dépendance aux importations en calculant leur part dans la satisfaction de la demande totale. Un taux faible indique une plus grande autonomie énergétique.

Les élèves implémentent ces formules étape par étape, testent leur fonctionnement et ajoutent des vérifications (somme des parts = 100%, cohérence des unités).

3. Interface utilisateur et visualisation


Objectif : Créer une interface intuitive permettant de modifier facilement le mix et visualiser les résultats.


Les élèves développent l'interface de leur simulateur pour le rendre facile à utiliser :

Identification des cellules de saisie pour modifier la part de chaque source Contrainte automatique : la somme doit égaler 100% Alertes colorées : rouge si contraintes violées, vert si objectifs atteints Graphiques dynamiques : camembert du mix, barres des coûts/émissions Tableau de bord : indicateurs clés mis en évidence

Les groupes testent leur simulateur en modifiant quelques paramètres et vérifient que les calculs et graphiques se mettent à jour correctement. Exemple de tableau de bord


INDICATEURS CLÉS                Mix actuel                     Nouveau mix                     Évolution Coût total (Md€/an)             180                            =FORMULE                        =FORMULE Émissions (Mt CO2/an)           950                            =FORMULE                        =FORMULE Part pilotable (%)              61%                            =FORMULE                        =FORMULE Part renouvelable (%)           39%                            =FORMULE                        =FORMULE

4. Validation et calibrage

Les élèves étalonnent leur simulateur en comparant ses résultats à des données de référence et ajustent les paramètres si nécessaire. Ils préparent également une notice d'utilisation simple pour les séquences suivantes.


#### Restitution et réflexion


La construction du simulateur a permis aux élèves de traduire leur compréhension conceptuelle du mix énergétique en un modèle numérique fonctionnel. Ils ont appris à structurer des données complexes, à formaliser des relations causales par des formules mathématiques et à créer des interfaces permettant l'exploration interactive de scénarios. Cette démarche leur a fait découvrir les défis de la modélisation : équilibre entre simplicité et réalisme, validation des résultats, gestion des contraintes multiples. L'approche par construction progressive favorise l'appropriation technique et conceptuelle des enjeux énergétiques. Le travail en petits groupes permet l'entraide et la confrontation des approches. La validation par comparaison avec des données réelles développe l'esprit critique et la rigueur scientifique. L'interface utilisateur finale donne aux élèves la satisfaction de créer un outil fonctionnel et utilisable. Les élèves maîtrisent désormais les mécanismes quantitatifs qui régissent les systèmes énergétiques (calculs de production, coûts, émissions, indicateurs de performance). Ils ont développé leurs compétences en modélisation numérique et leur capacité à traduire des concepts complexes en outils opérationnels. Ils disposent d'un instrument d'analyse qu'ils pourront utiliser pour explorer différents scénarios de transition énergétique.

Pour approfondir la réflexion et préparer l'expérimentation de scénarios, voici quelques questions clés à explorer collectivement :

Quelles sont les limites de notre modèle et comment les prendre en compte dans l'interprétation des résultats ? Identification des simplifications effectuées et de leurs conséquences sur la validité des analyses. Réflexion sur l'écart entre modèle et réalité. Discussion des précautions nécessaires dans l'utilisation des résultats de simulation. Comment notre simulateur peut-il éclairer les débats énergétiques actuels ? Exploration des questions énergétiques contemporaines que le simulateur permet d'analyser. Identification des acteurs (politiques, entreprises, citoyens) qui pourraient bénéficier de tels outils. Réflexion sur le rôle de la modélisation dans l'aide à la décision. Quels scénarios de crise ou de transition seraient les plus instructifs à tester ? Anticipation des expérimentations de la séquence suivante en identifiant les situations les plus révélatrices des enjeux énergétiques. Réflexion sur les événements géopolitiques, climatiques ou technologiques susceptibles de bouleverser le mix énergétique. Comment améliorer progressivement notre simulateur pour le rendre plus réaliste ? Identification des raffinements possibles (prise en compte des variations saisonnières, des coûts de réseau, des innovations technologiques). Réflexion sur l'équilibre entre complexité croissante et facilité d'utilisation. Préparation à l'évolution continue de l'outil. Phase 3 - Expérimentation et scénarios de transition énergétique

Contexte et description du problème à résoudre à cette étape : Les élèves disposent maintenant d'un outil fonctionnel pour explorer les conséquences de modifications du mix énergétique. Cette phase les amène à tester différents scénarios de suppression ou réduction drastique d'une source d'énergie, puis à formuler des recommandations stratégiques réalistes. L'objectif est de comprendre la complexité des transitions énergétiques et de développer leur capacité de synthèse pour proposer des solutions opérationnelles.

Objectifs d'apprentissage : Analyser les impacts de la suppression d'une source d'énergie majeure. Identifier les stratégies de compensation et leurs limites. Évaluer la faisabilité technique et économique de différentes transitions. Formuler des recommandations stratégiques pour les décideurs européens.


#### Conceptualisation


Question de recherche : Quelles sont les contraintes et limites physiques qui conditionnent la faisabilité des transitions énergétiques majeures ?


Hypothèse : Les transitions énergétiques sont limitées par des contraintes physiques (temps de déploiement, capacités industrielles, stabilité du réseau) et économiques (coûts d'investissement, acceptabilité sociale) qui rendent impossibles certaines substitutions rapides entre sources d'énergie, nécessitant des stratégies de transition progressives et diversifiées. Concepts clés : Inertie systémique : Résistance du système énergétique aux changements rapides due aux infrastructures existantes et aux contraintes techniques (explique les délais incompressibles) Points de rupture : Seuils au-delà desquels les contraintes techniques ou économiques rendent une transition impossible (délimite l'espace des solutions réalisables) Chemin de transition : Séquence optimale de modifications du mix énergétique respectant toutes les contraintes (guide la planification stratégique)


Question de recherche : Comment les stratégies de compensation révèlent-elles les interdépendances et complémentarités entre sources d'énergie ?


Hypothèse : La suppression d'une source d'énergie majeure ne peut être compensée par une seule alternative mais nécessite une recomposition complexe du mix, révélant que chaque source a des fonctions spécifiques irremplaçables et que la sécurité énergétique repose sur la diversification. Concepts clés : Substitution imparfaite : Impossibilité de remplacer directement une source d'énergie par une autre sans modification des autres composantes du système (révèle la complexité des transitions) Effets de système : Impacts en cascade d'une modification sur l'ensemble du mix énergétique (démontre les interdépendances) Portefeuille énergétique : Approche de diversification des risques appliquée au mix énergétique pour garantir la sécurité d'approvisionnement (justifie la nécessité de sources multiples)


Question de recherche : Quels arbitrages entre objectifs contradictoires structurent les choix de politique énergétique ?


Hypothèse : Les décisions énergétiques résultent d'arbitrages complexes entre objectifs souvent contradictoires (coût, climat, sécurité, acceptabilité sociale) qui expliquent pourquoi il n'existe pas de solution optimale unique mais seulement des compromis reflétant des priorités politiques et sociales. Concepts clés : Trilemme énergétique : Tension permanente entre affordabilité, durabilité et sécurité qui contraint tous les choix énergétiques (structure les débats politiques) Optimisation sous contraintes multiples : Recherche de solutions satisfaisant simultanément plusieurs objectifs parfois incompatibles (reflète la complexité des décisions publiques) Gouvernance énergétique : Processus de décision collective intégrant expertise technique et légitimité démocratique (questionne les modes de participation citoyenne)


#### Investigation par les élèves


1. Scénarios de suppression progressive et stratégies de compensation


Objectif : Explorer méthodiquement les conséquences de la réduction progressive d'une source d'énergie et tester différentes stratégies pour compenser la source d'énergie supprimée tout en respectant les contraintes réalistes.


Les élèves utilisent leur simulateur pour analyser les impacts de chaque scénario selon différents rythmes de transition.


Groupe 1 - Sortie du charbon                   Réduire la part du charbon de 16% à 0% Transition en 5 ans (objectif climatique "Suite aux accords de Paris et à la urgent) pression citoyenne, votre pays s'engage Compenser 400 TWh/an de production à sortir du charbon d'ici 5 ans pour respecter ses objectifs climatiques."          pilotable


Groupe 2 - Sortie du nucléaire                 Réduire la part du nucléaire de 23% à 0% Transition en 15 ans (durée de vie des "Suite à un référendum national, votre centrales) pays décide de sortir progressivement du Compenser 580 TWh/an de production bas- nucléaire d'ici 15 ans, en fermant les centrales à la fin de leur durée de vie."      carbone et pilotable


Groupe 3 - Crise du gaz Réduire la part du gaz de 22% à 5% "Une crise géopolitique majeure coupe Transition en 2 ans (crise l'approvisionnement en gaz naturel de d'approvisionnement) votre pays. Vous devez réduire drastiquement cette dépendance en 2            Compenser 425 TWh/an de production flexible ans."


Groupe    4   -      Limitation      des renouvelables                                  Plafonner éolien+solaire à 25% Acceptabilité locale limitée "Les gestionnaires de réseau alertent sur Satisfaire les objectifs climatiques sans l'instabilité  croissante    due     aux renouvelables intermittents. Il faut           surcapacités intermittentes plafonner leur développement." Ils utilisent leur simulateur pour analyser les impacts selon différents rythmes de transition. L'objectif n'est pas de prendre position pour ou contre ces scénarios, mais de comprendre leurs implications techniques et économiques. Les groupes doivent utiliser correctement le simulateur, interpréter les résultats concernant les coûts, émissions et sécurité, noter les messages d'alerte du simulateur et documenter leurs observations.

Les groupes identifient ensuite le rythme optimal et préparent une synthèse de leurs découvertes, avant de présenter en deux minutes les principaux enseignements.

Pour chaque scénario, les élèves explorent systématiquement les différentes options de compensation et identifient les points de rupture :

Stratégie                      Avantages                        Limites                         Coût relatif Flexibilité,            rapidité Émissions CO2, dépendance Augmentation gaz naturel                                                                  Moyen déploiement                      imports Bas-carbone,              coût Développement éolien                                            Intermittence, acceptabilité Faible décroissant Intermittence,     stockage Développement solaire          Bas-carbone, modulaire                                           Faible nécessaire Extension nucléaire            Bas-carbone, pilotable           Délais longs, coûts élevés      Élevé Dépendance,            coûts Importations                   Rapidité, flexibilité                                            Variable transport Acceptabilité,        limites Sobriété énergétique           Réduction demande globale                                        Très faible physiques


Contraintes à intégrer

Limite de pilotabilité : Minimum 50% de sources pilotables pour la sécurité réseau Explication simple : "Si trop d'électricité vient du vent et du soleil, le réseau devient instable" Limite budgétaire : Maximum +50% de coût par rapport au mix actuel Explication simple : "Les citoyens et industries ne peuvent pas payer une électricité 2 fois plus chère" Limite climatique : Maximum 150g CO2/kWh (objectif européen 2030) Explication simple : "Il faut respecter les engagements climatiques de l'Europe" Limite d'imports : Maximum 15% de la demande (sécurité énergétique) Explication simple : "Trop dépendre des voisins, c'est risqué en cas de crise" Limite de déploiement : Maximum +10% par an pour les renouvelables (capacités industrielles) Explication simple : "On ne peut pas construire des éoliennes plus vite que l'industrie peut les produire"


Les groupes explorent librement différentes combinaisons dans leur simulateur pour compenser la source d'énergie supprimée. Les groupes testent les limites de leurs stratégies.

L'enseignant guide : "Que se passe-t-il si vous voulez aller plus vite ? Plus loin ?" Il faut identifier précisément où et pourquoi le système "casse". Par exemple, le Groupe 2 (sortie nucléaire) peut découvrir que remplacer 100% du nucléaire par de l'éolien nécessiterait de multiplier par 8 les capacités actuelles, ce qui prendrait 22 ans au rythme maximal de +10%/an, rendant leur objectif de 15 ans impossible sans autres sources.

Enfin, chaque groupe sélectionne sa stratégie optimale, justifie ses choix et prépare un argumentaire pour l'étape suivante.
2. Formulation de recommandations stratégiques


Objectif : Traduire les enseignements des simulations en principes stratégiques et feuilles de route opérationnelles.


Cette dernière activité transforme les élèves d'utilisateurs de simulateur en conseillers stratégiques. L'objectif est qu'ils synthétisent leurs découvertes pour formuler des recommandations réalistes.

Analyse comparative des scénarios : Les groupes présentent leurs résultats selon un format standardisé que l’enseignant peut projeter dans la classe si possible.

Critères d'évaluation Sortie charbon            Sortie nucléaire        Crise gaz               Limitation renouv. Faisabilité technique ✓ Possible                ⚠ Difficile             ✓ Possible              ✓ Possible Impact coût             +12%                    +25%                    +18%                    +8% Impact émissions        -45%                    +15%                    -20%                    +30% Sécurité approvisionnement ✓ Maintenue             ⚠ Fragilisée            ⚠ Fragilisée            ✓ Renforcée

Délai réalisation       5 ans                   15 ans                  2 ans                   Immédiat Acceptabilité sociale ✓ Forte                   ⚠ Débattue              ✓ Nécessaire            ⚠ Conflictuelle La faisabilité technique est évaluée positivement si aucune contrainte majeure n'est violée, avec une alerte sinon. L'impact coût correspond au pourcentage d'augmentation par rapport au mix actuel. L'impact émissions représente le pourcentage de réduction ou d'augmentation des émissions CO2. La sécurité s'évalue positivement si plus de 50% de sources pilotables et moins de 15% d'imports sont maintenus. Le critère d'acceptabilité évalue si la population soutient largement la transition (populaire) ou si elle suscite des oppositions (controversée).

Formulation de principes stratégiques : À partir de leurs simulations, les élèves formulent collectivement des principes stratégiques :

Principe de progressivité : Les transitions brutales créent des déséquilibres difficiles à gérer Principe de compensation anticipée : Il faut développer les alternatives avant de supprimer les sources existantes Principe de diversification : Aucune source unique ne peut remplacer une autre de manière équivalente Principe d'acceptabilité : Les transitions techniques doivent être accompagnées d'un consensus social Principe de résilience : Le mix doit maintenir sa capacité d'adaptation face aux crises

Conception de feuilles de route : Chaque groupe conçoit une "feuille de route" synthétique pour sa transition, en appliquant les principes identifiés :

Objectif : Réduction visée et délai Phases principales : 3 étapes avec actions clés Budgets et bénéfices : Ordres de grandeur Risques critiques : Points de vigilance principaux

3. Débat et arbitrages politiques


Objectif : Simuler les processus de décision collective et comprendre la complexité des choix énergétiques. Sur la base des feuilles de route, l'enseignant propose une simulation de "Conseil de l'énergie" où chaque groupe devra défendre sa proposition devant le Conseil.

Les élèves joueront un double rôle, à la fois experts lors de la présentation de leur feuille de route, puis “conseillers” selon un rôle qui leur sera distribué au tirage au sort :

Représentant des citoyens : Priorité au coût de l'énergie et à l'emploi local Représentant des industriels : Priorité à la compétitivité et la sécurité d'approvisionnement Représentant écologiste : Priorité au climat et à la sortie des fossiles Représentant syndical : Priorité à l'emploi et à la formation des travailleurs


Note pour l'organisation spatiale : La salle doit être organisée dès le début de l’activité “Débat” en quatre zones correspondant aux sous-conseils (citoyens, industriels, écologistes, syndicats). Les élèves travaillent au sein de leur sous-conseil pendant toute la séance, ne reformant leurs groupes d'experts que brièvement lors des présentations au tableau qui démarrent la séance. Cette organisation spatiale renforce l'immersion dans les rôles de représentants et favorise la cohésion au sein de chaque sous- conseil tout au long du débat.


La première phase de l’activité “Débat” consiste en la présentation des 4 feuilles de route. À tour de rôle, chaque groupe dispose de cinq minutes pour présenter ses conclusions en expliquant clairement les objectifs, les étapes de mise en œuvre, les coûts et les bénéfices attendus. Pendant ces présentations, les autres élèves préparent leurs interventions selon leur rôle spécifique.

La phase de débat s'organise autour de quatre questions stratégiques que l'enseignant pose successivement.

"Quelle transition énergétique doit être considérée comme la plus urgente et pourquoi ?" Chaque groupe de conseillers exprime sa position selon ses préoccupations spécifiques, créant naturellement des tensions entre urgence climatique, contraintes économiques et enjeux sociaux. "Comment financer concrètement les investissements nécessaires à ces transitions ?" L'enseignant guide la discussion vers les différentes options (taxes, emprunts publics, financements européens, participation privée) en faisant réagir chaque groupe sur l'acceptabilité de ces mécanismes pour leurs représentés. "Quelle stratégie adopter pour gérer les conséquences sociales de ces transitions ?" Cette question permet d'aborder les enjeux de reconversion professionnelle, d'accompagnement des territoires en mutation et de justice sociale dans la transition énergétique. "Quel niveau d'incertitude et de risque sommes-nous prêts à accepter concernant notre sécurité énergétique ?" Cette discussion révèle les arbitrages entre prudence et ambition, entre autonomie nationale et coopération européenne.

L'enseignant joue un rôle actif de modérateur en reformulant les positions pour éviter les malentendus, en relançant le débat quand il s'essouffle et en poussant vers la recherche de compromis concrets. Il peut interpeller directement certains groupes : "Les syndicats accepteraient-ils cette proposition si elle était accompagnée d'un plan de formation ?" ou "Les industriels sont-ils prêts à payer une taxe carbone si elle finance des infrastructures ?"

La conclusion du débat vise à faire émerger les enseignements collectifs de cette expérience de négociation. L'enseignant demande à chaque groupe de conseillers d'identifier un point de convergence découvert pendant les échanges et une proposition concrète pour surmonter les blocages identifiés. Cette synthèse révèle généralement que les positions initiales peuvent évoluer quand les acteurs comprennent les contraintes des autres et cherchent ensemble des solutions.


#### Restitution et réflexion


L'expérimentation de scénarios de transition a révélé aux élèves la complexité des choix énergétiques et l'existence de contraintes physiques et économiques qui limitent les options disponibles. Ils ont découvert que les transitions énergétiques ne peuvent être pensées comme de simples substitutions mais nécessitent des recompositions systémiques respectant de multiples contraintes. La formulation de recommandations stratégiques leur a permis de comprendre que les choix énergétiques résultent d'arbitrages entre objectifs souvent contradictoires et nécessitent des compromis politiques et sociaux.

L'approche par simulation interactive favorise l'appropriation concrète des enjeux et permet aux élèves de mesurer l'impact de leurs choix en temps réel. La confrontation aux contraintes réalistes développe leur compréhension des limites du possible et leur capacité d'adaptation. Le débat final en situation de jeu de rôles ancre les apprentissages dans une perspective citoyenne et développe leurs compétences d'argumentation et de négociation.

Les élèves maîtrisent désormais les mécanismes qui régissent les transitions énergétiques et sont capables d'évaluer la faisabilité de différents scénarios. Ils ont développé leur capacité d'analyse prospective et de formulation de recommandations stratégiques argumentées. Ils comprennent les enjeux de gouvernance énergétique et sont préparés à participer de manière éclairée aux débats énergétiques en tant que futurs citoyens.

Pour approfondir la réflexion et ouvrir des perspectives d'engagement citoyen, voici quelques questions clés à explorer collectivement :

Comment les enseignements de nos simulations s'appliquent-ils aux débats énergétiques actuels dans notre pays ? Application des principes stratégiques identifiés aux enjeux énergétiques nationaux contemporains. Analyse critique des politiques énergétiques actuelles à l'aune des contraintes découvertes. Identification des points de convergence et de divergence entre simulations et réalité politique. Quels mécanismes démocratiques permettent aux citoyens d'influencer les choix énergétiques ? Exploration des instances de participation citoyenne aux décisions énergétiques (conseils consultatifs, référendums, budgets participatifs). Analyse du rôle des élus, des experts et des citoyens dans la gouvernance énergétique. Réflexion sur les compétences nécessaires pour participer aux débats techniques. Comment concilier expertise technique et légitimité démocratique dans les choix énergétiques ? Discussion de la tension entre complexité technique et accessibilité citoyenne des enjeux énergétiques. Exploration des méthodes de médiation scientifique et de débat public. Réflexion sur l'équilibre entre délégation aux experts et contrôle démocratique. Quelle contribution personnelle à la transition énergétique au-delà de la simulation ? Identification des formes d'engagement citoyen accessibles (associations, projets locaux, choix de formation). Exploration des liens entre compétences acquises et opportunités d'action. Construction d'une vision à long terme de son rôle dans la société énergétique de demain.

Cette phase finale donne aux élèves les outils analytiques et stratégiques nécessaires pour devenir des citoyens éclairés, capables d'évaluer les politiques énergétiques et de contribuer constructivement aux débats démocratiques sur l'avenir énergétique de leur société.

Cette démarche de modélisation peut être transférée à d'autres enjeux systémiques pour développer chez les élèves une culture de l'analyse quantitative et de la prospective appliquée aux défis sociétaux. Aller plus loin


Projet de micro-réseau intelligent au sein de            Modélisation énergétique territoriale avec l'établissement                                          les collectivités locales

Les élèves étendent leur simulateur à l'échelle de Les élèves peuvent concevoir et mettre en œuvre leur commune ou intercommunalité en partenariat un système énergétique miniature dans leur avec les services techniques locaux. Ils collectent établissement, intégrant production renouvelable les données énergétiques réelles du territoire (panneaux solaires, petite éolienne), stockage (consommations par secteur, mix énergétique (batteries) et gestion intelligente de la local, projets en cours), adaptent leur modèle aux consommation (éclairage LED programmable, spécificités territoriales et proposent des scénarios appareils connectés). Ce projet pluridisciplinaire de transition énergétique contextualisés. Cette mobilise les compétences techniques acquises lors collaboration avec les acteurs publics locaux de la construction du simulateur tout en permet aux élèves de comprendre les contraintes confrontant les élèves aux défis pratiques de la opérationnelles de la planification énergétique gestion énergétique en temps réel. L'objectif territoriale et de mesurer l'écart entre pédagogique         consiste    à     transformer modélisation théorique et mise en œuvre pratique. l'établissement en laboratoire vivant de la transition    énergétique,     où   les     élèves       Exemple : Le MITEC Launchpad est une initiative du expérimentent concrètement les principes de              MIT Energy & Climate Club qui offre aux étudiants du l'optimisation énergétique et mesurent l'impact de       MIT l'opportunité de résoudre des problèmes réels leurs choix sur la consommation globale.                 d'énergie et de climat avec des professionnels de premier plan dans l'industrie. Les étudiants Exemple : Le programme "Solar Schools" fournit des       travaillent sur des projets concrets de modélisation leçons alignées sur le programme scolaire et des         énergétique et de planification climatique en expériences d'apprentissage pour les élèves du           partenariat avec des organisations externes, primaire et du secondaire. Les écoles participantes      développant des solutions pratiques aux défis sont équipées de compteurs d'énergie qui                 énergétiques       contemporains.      https://mitec- enregistrent la consommation et la production en         club.org/ temps réel. Les enseignants ont accès à une boîte à outils complète et à des outils numériques interactifs pour donner vie aux concepts scientifiques à travers l'analyse des données réelles. https://www.solarschools.net Participation aux concours internationaux                   Animation d'ateliers énergétiques dans les d'innovation énergétique                                    centres de loisirs

Les élèves approfondissent leur expertise en                Les élèves transmettent leurs connaissances en modélisation énergétique en participant aux                 animant des ateliers ludiques sur l'énergie auprès concours internationaux qui récompensent                    d'enfants plus jeunes dans les centres de loisirs l'innovation technique et la créativité scientifique.       locaux. Ils adaptent leur simulateur en créant des Ils développent des prototypes fonctionnels de              jeux sérieux, organisent des expériences systèmes énergétiques innovants (récupération               scientifiques simples et sensibilisent à la sobriété d'énergie, optimisation de consommation,                    énergétique par des activités créatives. Cette stockage alternatif) et présentent leurs solutions          démarche de médiation scientifique développe devant un jury d'experts. Cette participation               leurs compétences pédagogiques et de valorise leurs compétences techniques tout en les           communication       tout    en     ancrant     leurs confrontant aux standards de l'innovation                   apprentissages par la transmission. Elle contribue énergétique contemporaine et aux attentes du                également à diffuser la culture énergétique dans la monde professionnel.                                        société.

Exemple : Le concours EUCYS (European Union                 Exemple : Student Energy (SE) est une organisation Contest for Young Scientists) est ouvert aux jeunes         mondiale dirigée par des jeunes qui habilite la scientifiques de 14 à 20 ans. Les participants              nouvelle génération à accélérer la transition peuvent présenter des projets individuels ou en             énergétique. Leur programme "Student Energy équipe jusqu'à trois membres, avec un focus                 Chapters" permet aux étudiants de créer des particulier sur l'innovation énergétique et                 antennes locales dans leurs établissements. Les environnementale. Les projets peuvent être                  participants développent des projets concrets de théoriques ou expérimentaux, et chaque pays peut            transition énergétique tout en bénéficiant d'un soumettre jusqu'à trois projets. Cette compétition          mentorat et d'un réseau international de pairs. met en valeur l'originalité et la curiosité scientifique,   Cette initiative favorise le développement du offrant aux jeunes talents l'opportunité de partager        leadership et crée un impact durable qui se leurs recherches avec un public international.              transmet aux nouvelles générations d'étudiants. https://research-and-                                       https://studentenergy.org/chapters/ innovation.ec.europa.eu/funding/funding- opportunities/eucys_en Participation aux assemblées citoyennes sur               Création d'une coopérative énergétique l'énergie                                                 citoyenne

Les élèves s'engagent dans les dispositifs de             Les élèves s'impliquent dans la création ou le démocratie participative locale consacrés aux             développement d'une coopérative énergétique questions énergétiques, apportant leur expertise          locale, contribuant par leur expertise technique à technique acquise lors de la construction du              l'évaluation de projets, l'analyse de rentabilité et la simulateur pour éclairer les débats citoyens. Ils         communication vers les citoyens. Ils utilisent leurs participent aux conventions citoyennes locales sur        compétences en modélisation pour calculer les le climat, aux conseils de développement ou aux           impacts économiques et environnementaux des comités consultatifs des projets énergétiques             installations envisagées et participent aux territoriaux. Cette participation leur permet de          assemblées générales en tant que sociétaires. comprendre        concrètement    les   processus         Cette      expérience       leur    fait   découvrir démocratiques de décision énergétique et de               l'entrepreneuriat collectif dans l'énergie et les mesurer l'impact de l'expertise citoyenne sur les         modèles économiques alternatifs de la transition choix collectifs.                                         énergétique.

Exemple : Le Forum des Jeunes en Belgique est             Exemple : Le projet SIRenergy, financé par Interreg l'organe officiel de représentation des jeunes de 16 à    Europe, vise à promouvoir les coopératives 30 ans en Fédération Wallonie-Bruxelles. À travers        énergétiques citoyennes comme modèle de des journées participatives, les jeunes définissent       transition énergétique locale. Lors de leur des projets concrets et émettent des avis officiels sur   événement "Citizen Involvement through the Citizen les enjeux sociétaux, notamment climatiques et            Energy Cooperatives", ils ont présenté des exemples énergétiques. Cette structure permet aux jeunes de        concrets de participation citoyenne dans la gestion devenir des acteurs de changement en participant          de l'énergie et fourni des outils pour impliquer les directement aux décisions qui les concernent.             jeunes          dans          ces         initiatives. https://forumdesjeunes.be                                 https://www.interregeurope.eu/sirenergy
---

> Ce protocole fait partie du curriculum STEAMCITY. Ce travail est sous licence Creative Commons Attribution-ShareAlike 4.0 International License et a été réalisé avec le soutien de la Commission européenne. Son contenu n'engage que son auteur et la Commission ne peut être tenue responsable de l'usage qui pourrait être fait des informations qu'il contient.

---

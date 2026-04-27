---
id: road-signs
title: Signalisation de demain
sidebar_label: "Signalisation de demain"
sidebar_position: 17
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><polygon points="12,2 22,20 2,20" fill="#DD5350" opacity="0.1"/><polygon points="12,6 18,17 6,17" fill="#DD5350" opacity="0.25"/><text x="12" y="15" fontSize="7" fontFamily="sans-serif" fill="#DD5350" textAnchor="middle" fontWeight="bold" opacity="1.0">!</text></svg> Signalisation de demain

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Technologie et ingénierie</span>
  <span className="badge badge--primary">Géographie</span>
  <span className="badge badge--primary">Art et design</span>
  <span className="badge badge--info">Mobilité durable, transport et régulation</span>
  <span className="badge badge--secondary">Intelligence artificielle</span>
</div>

| Projet | Durée | Difficulté |
|---|---|---|
| SteamCity | Min. 2h par jour pendant 3 jours | Variable |

## Matériel

- Outils phygitaux (numérique + physique)
- Feuilles de papier 15 cm x 15 cm
- Outil de classification d'images IA : [SignVisionAI](https://drive.google.com/drive/folders/1gYf5JkDzg41ZbesaIQk72BvD7rWRo5EN?usp=sharing) ou [Vittascience](https://it.vittascience.com/ia/images.php)

<a href="/pdf/steamcity/Protocol_RoadSigns_FR.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#DD5350', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger en PDF</a>

</div>


<img src="/img/ressources/steamcity/road-signs/icone.png" alt="Signalisation de demain" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## Thématique

- **Thématique** : mobilité durable, transport et régulation
- **Sous-thème** : intelligence artificielle et nouvelles technologies

---

## Introduction

Les infrastructures routières connaissent une transition majeure avec l'arrivée des véhicules autonomes, qui partagent désormais la chaussée avec les véhicules traditionnels conduits par des humains. Ce protocole pédagogique s'intéresse à un défi essentiel de cette transition : la conception de signaux routiers clairs et interprétables à la fois par les conducteurs humains et par les systèmes autonomes.

Le protocole accompagne les élèves dans la co-conception de nouveaux signaux routiers adaptés aux besoins des véhicules autonomes, tout en veillant à leur distinction claire par rapport à la signalisation existante. Cette démarche traite la question de la communication visuelle entre perception humaine et vision par ordinateur au sein d'une même infrastructure partagée.

Au cours de cette expérience, les élèves étudieront les liens entre infrastructures de transport, communication visuelle et intelligence artificielle. Ils comprendront comment les véhicules autonomes perçoivent et interprètent leur environnement, les limites actuelles des systèmes de signalisation pour la reconnaissance automatique, ainsi que les principes de conception visant à combler ces lacunes. Les élèves testeront et amélioreront leurs propositions en s'appuyant sur les bases de la reconnaissance d'images, tout en tenant compte des contraintes pratiques liées à l'intégration dans des systèmes existants.


### Structure du protocole

Le protocole se divise en trois phases complémentaires :

- **Étape 1 : familiarisation et conception.** Les élèves se familiarisent avec les concepts fondamentaux et s'engagent dans un processus créatif pour développer de nouveaux signaux routiers, en identifiant les besoins et en concevant des solutions répondant à des critères précis.
- **Étape 2 : tester l'ambiguïté des panneaux de signalisation.** Les élèves organisent le test d'un outil de classification automatique d'images, entraîné à reconnaître les panneaux routiers classiques. L'objectif est de vérifier si un nouveau panneau n'est pas classé parmi les panneaux existants.
- **Étape 3 : entraînement du modèle en fonction des nouveaux signes conçus.** Validation et affinement des signaux via l'entraînement de l'outil automatique à reconnaître et classer les panneaux proposés par les élèves.

### Glossaire

- **Ambiguïté des panneaux** : Le risque qu'un panneau soit mal interprété ou confondu avec des panneaux existants.
- **Classification des images** : La capacité des outils d'IA à identifier et catégoriser les images en fonction de leur contenu.
- **Intelligence artificielle (IA)** : Branche de l'informatique axée sur la création de systèmes capables d'effectuer des tâches nécessitant une intelligence humaine.
- **Phase d'apprentissage** : L'étape au cours de laquelle un outil d'IA acquiert des connaissances en étant exposé à des données étiquetées.
- **Phase de formation** : Étape au cours de laquelle un outil d'IA apprend à reconnaître des images spécifiques.
- **Test d'ambiguïté** : Processus de vérification visant à déterminer si un panneau proposé est similaire aux panneaux existants.
- **Véhicules autonomes** : Véhicules capables de naviguer sans intervention humaine, nécessitant une signalisation spécialisée.


## Informations générales

| | |
|---|---|
| Disciplines | technologie et ingénierie ; géographie ; art et design |
| Durée | Au moins 2 heures par jour pendant 3 jours |
| Niveau de difficulté | — |
| Matériel | Outils phygitaux (numérique + physique), feuilles de papier 15 cm x 15 cm, outil de classification d'images IA (SignVisionAI ou Vittascience) |

### Objectifs de développement durable

(Se référer aux ODD pertinents pour l'activité.)

---

### Quelques conseils d'organisation

- **Phase de familiarisation** : peut se réaliser individuellement ou en collaboration. Une liste numérique ou physique des panneaux reconnus par le classificateur est nécessaire (voir annexe).
- **Phase d'idéation** : peut être entièrement physique, avec papier et crayon. Les élèves dessinent leurs panneaux sur des feuilles de 15 cm x 15 cm.
- **Phases de test et d'entraînement** : requièrent des outils numériques. Nous suggérons [SignVisionAI](https://drive.google.com/drive/folders/1gYf5JkDzg41ZbesaIQk72BvD7rWRo5EN?usp=sharing) et [Vittascience](https://it.vittascience.com/ia/images.php).

---

## Bibliographie

- D'Angelo, M. & Pellegrino, M. A. (2021). Roobopoli: a project to learn robotics by a constructionism-based approach. *MIS4TEL Workshops*.
- Gennari, R., Melonio, A., & D'Angelo, M. (2023). Engaging Learners in the Collaborative Design of Sustainable Smart Cities. *S3C Workshop @ CHItaly*.
- D'Angelo, M. (2023). Engaging Learners in Familiarizing Themselves with Sensors and Actuators. *MIS4TEL Workshops*.

---

:::note
Ce protocole fait partie du curriculum STEAMCITY. Ce travail est sous licence Creative Commons Attribution-ShareAlike 4.0 International License et a été réalisé avec le soutien de la Commission européenne. Son contenu n'engage que son auteur et la Commission ne peut être tenue responsable de l'usage qui pourrait être fait des informations qu'il contient.
:::

## Étape 1 : familiarisation et conception

### Contexte de la séquence

Les élèves se familiarisent avec les concepts de base, réfléchissent aux types de signaux à créer, sélectionnent l'un des types proposés et développent une conception préliminaire.

### Objectifs d'apprentissage

Se familiariser avec les concepts liés à la signalisation routière, ainsi qu'avec la terminologie et les étapes associées aux outils basés sur l'IA.

### Conceptualisation

Avant de commencer, il est conseillé de recueillir des informations pour évaluer l'impact attendu, en sondant les connaissances des élèves sur l'IA, les villes intelligentes et la signalisation routière.

#### Méthodes interactives de pré-évaluation

- **Évaluation visuelle par émojis** : échelle d'opinions sur un tableau blanc, du très négatif au très positif.
- **Quatre coins** : chaque coin de la classe correspond à un niveau d'accord. Les élèves se déplacent physiquement.
- **Groupes de post-it** : les élèves écrivent leurs réponses puis les regroupent par thèmes.
- **Sondage numérique avec QR code** : résultats en temps réel pour discussions immédiates.

### Investigation par les élèves

#### Familiarisation

L'enseignant présente l'activité et la terminologie. Questions d'introduction :

- « Qu'est-ce que les véhicules autonomes ? » — Ce sont des véhicules capables de se déplacer seuls.
- « Quelle signalisation routière régule la mobilité des véhicules traditionnels ? » — Panneaux de danger (triangle rouge), interdiction (cercle rouge), priorité (triangle inversé ou octogone), obligation (cercle bleu), information (carré/rectangle).
- « Existe-t-il des catégories de panneaux destinés uniquement aux véhicules autonomes ? » — \[Laisser les élèves imaginer\]
- « Qu'entend-on par panneaux non ambigus ? » — Des panneaux qui n'entrent pas en conflit avec la signalisation existante.

#### Idéation

Une fois familiarisés, les élèves passent à la conception :

> « Hier, j'ai reçu un appel du maire de notre ville qui nous demandait de l'aider à concevoir une nouvelle signalisation routière dédiée aux véhicules autonomes, claire et compatible avec la signalisation actuelle. Pour concevoir vos panneaux, vous avez du papier et un stylo à disposition. »

Les élèves doivent :

1. **Identifier l'objectif du panneau** (ex. : panneau indiquant le passage entre conduite autonome et manuelle).
2. **Concevoir le nouveau panneau** sur des feuilles de 15 cm x 15 cm, seuls ou en groupe.

### Restitution et réflexion

L'enseignant rassemble les propositions et invite les élèves à partager leurs idées. Cette phase favorise un brainstorming immédiat, permettant modifications, levée d'ambiguïtés et assurance de la cohérence.

Les élèves acquièrent des compétences en conceptualisation, prototypage et évaluation critique des panneaux répondant aux enjeux de la régulation des véhicules autonomes.

---

## Étape 2 : tester l'ambiguïté des panneaux de signalisation



### Contexte de la séquence

Vérifier si les panneaux proposés sont susceptibles d'être confondus avec des panneaux existants. Cette étape combine courtes présentations frontales sur les mécanismes d'IA et mise en pratique immédiate.

### Objectifs d'apprentissage

Acquérir des connaissances sur les outils d'IA pour la classification d'images. Détecter l'ambiguïté des signaux proposés. Apprendre à tester et évaluer un outil basé sur l'IA.

### Conceptualisation

Les étapes de l'enquête doivent être suivies progressivement :

1. **Faciliter la réflexion de groupe** et la révision des panneaux.
2. **Réaliser des tests d'ambiguïté** à l'aide de SignVisionAI :
   - Installer la caméra dans des conditions optimales (lumière naturelle).
   - Effectuer des tests avec les images préchargées avant de passer aux panneaux des élèves.
   - Évaluer chaque conception individuellement.
   - Affiner tout panneau reconnu comme existant.
   - Répéter jusqu'à ce que tous les panneaux soient sans ambiguïté.
3. **(Facultatif) Affiner la conception** si le panneau est identifié comme un signal existant.

:::info[Alternative en cas d'impossibilité d'utiliser SignVisionAI]
L'activité peut être maintenue avec [Vittascience](https://fr.vittascience.com/ia/images.php). Les élèves créent un premier modèle entraîné à reconnaître les cinq familles de panneaux actuels (danger, interdiction, obligation, priorité, information). Si un signe est classé avec un niveau de confiance supérieur à 80 % dans une catégorie existante, il est considéré comme ambigu. Ce seuil correspond aux exigences de lisibilité immédiate (identification en ~1,5 seconde).
:::

### Investigation par les élèves

Les élèves travaillent de manière autonome pour tester l'ambiguïté et collaborent pour discuter des améliorations.

- **Réflexion** : partage des propositions avec les pairs, brainstorming structuré.
- **Tests d'ambiguïté** : utilisation de [SignVisionAI](https://drive.google.com/drive/folders/1lwb4TkkNRnQ0K3j0s8kxeq7xg7a3pLak?usp=sharing). L'enseignant prépare la caméra, les élèves soumettent leurs projets à la classification un par un. Si un panneau est identifié comme existant, il doit être affiné ou redessiné. Ce processus itératif se poursuit jusqu'à ce que toutes les propositions soient jugées non ambiguës.

Pour installer et utiliser SignVisionAI, reportez-vous à la [fiche technique de programmation](/ressources/steamcity/programmation/programmation-road-signs).

### Restitution et réflexion

L'enseignant classe les propositions selon qu'elles sont ambiguës ou non reconnues par l'IA. Une discussion collective analyse les conceptions ambiguës, retrace l'évolution des idées et documente les raisons des modifications.

Les élèves approfondissent leur compréhension des outils d'IA pour la classification d'images et développent pensée critique, travail d'équipe et résolution itérative de problèmes.

---

## Étape 3 : entraînement du modèle en fonction des nouveaux panneaux conçus

### Contexte de la séquence

Phase de formation visant à permettre à un outil d'IA de reconnaître les panneaux de signalisation conçus par les élèves.

### Objectifs d'apprentissage

Acquérir des connaissances sur les outils d'IA pour la classification d'images. Utiliser les outils pour proposer une signalisation routière unique destinée aux véhicules autonomes.

### Conceptualisation

Le processus d'entraînement suit une séquence structurée :

1. **Examen et amélioration des propositions.** Les élèves examinent et améliorent leurs propositions. Si plusieurs variantes existent, un vote collectif retient la version la plus efficace.
2. **Versions standardisées.** Les élèves réalisent des versions standardisées avec diverses techniques artistiques (crayons, marqueurs, peinture, collages, aquarelle). Cette diversité enrichit les données d'entraînement.
3. **Entraînement du modèle.** Le modèle d'IA est entraîné avec ces images, illustrant les principes de la classification supervisée.

### Investigation par les élèves

- **Réflexion et discussion.** L'enseignant présente les panneaux réalisés. Un vote désigne la version référence pour chaque panneau.
- **Représentation du panneau final.** Chaque élève réalise individuellement une version standardisée, en jouant sur les intensités de couleurs et les techniques artistiques.
- **Entraînement de l'IA.** Les dessins sont photographiés ou scannés, rassemblés dans un dossier, puis classés par catégorie. Sur [Vittascience](https://fr.vittascience.com/ia/images.php), les images sont importées par catégorie et le modèle est entraîné automatiquement. Environ 80 % des images servent à l'entraînement, 20 % au test de fiabilité.

Pour utiliser Vittascience, reportez-vous à la [fiche technique de programmation](/ressources/steamcity/programmation/programmation-road-signs).

- **Réflexion et évaluation.** L'enseignant analyse les performances du modèle final. Un questionnaire identique à celui de la phase initiale mesure la progression des élèves.

### Restitution et réflexion

Les élèves acquièrent une expérience pratique de l'entraînement de modèles d'IA pour la classification des panneaux. Ils développent esprit critique, compétences collaboratives et capacité à concevoir de manière itérative, tout en appliquant les principes de l'IA à des défis concrets de mobilité.

---

## Pour aller plus loin

### Approfondir et aller plus loin

- **Technologie LiDAR** : Explorer le LiDAR avec des pointeurs laser et des Arduino/Raspberry Pi. Ressources : [NEON Science](https://www.neonscience.org/resources/learning-hub/tutorials/lidar-basics), [Can You Fool A Self-Driving Car?](https://www.youtube.com/watch?v=IQJL3htsDyQ)
- **Défi de programmation collaborative de véhicules autonomes** : Construire et programmer de petits véhicules autonomes communiquant entre eux (communication V2V et V2I). Ressources : [Argonne National Laboratory](https://www.anl.gov/education/high-school-autonomous-vehicle-competition), [MIT Research on Human Reasoning in AI](https://news.mit.edu/2019/human-reasoning-ai-driverless-car-navigation-0523)

---

*Cette fiche fait partie du projet [SteamCity](/projets/steamcity), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

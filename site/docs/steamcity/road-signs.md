---
id: road-signs
title: "Signalisation routière de demain"
sidebar_label: "Signalisation routière de demain"
sidebar_position: 17
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><polygon points="12,2 22,20 2,20" fill="#DD5350" opacity="0.1"/><polygon points="12,6 18,17 6,17" fill="#DD5350" opacity="0.25"/><text x="12" y="15" fontSize="7" fontFamily="sans-serif" fill="#DD5350" textAnchor="middle" fontWeight="bold" opacity="1.0">!</text></svg> Signalisation routière de demain

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

</div>

---

## Introduction

Les infrastructures routières connaissent une transition majeure avec l'arrivée des véhicules autonomes, qui partagent désormais la chaussée avec les véhicules traditionnels. Ce protocole pédagogique s'intéresse à un défi essentiel de cette transition : la conception de signaux routiers clairs et interprétables à la fois par les conducteurs humains et par les systèmes autonomes.

Le protocole accompagne les élèves dans la co-conception de nouveaux signaux routiers adaptés aux besoins des véhicules autonomes, tout en veillant à leur distinction claire par rapport à la signalisation existante. Les élèves testeront et amélioreront leurs propositions en s'appuyant sur les bases de la reconnaissance d'images.

### Structure du protocole

1. **Étape 1 : Familiarisation et conception** — Les élèves se familiarisent avec les concepts fondamentaux et s'engagent dans un processus créatif pour développer de nouveaux signaux routiers.
2. **Étape 2 : Tester l'ambiguïté des panneaux** — Vérification à l'aide d'un outil de classification IA si les panneaux proposés sont susceptibles d'être confondus avec des panneaux existants.
3. **Étape 3 : Entraînement du modèle** — Validation et affinement des signaux via l'entraînement de l'outil automatique à reconnaître les panneaux proposés.

### Quelques conseils d'organisation

- **Phase de familiarisation :** individuelle ou en collaboration. Une liste des panneaux reconnus par le classificateur est nécessaire (voir annexe du PDF).
- **Phase d'idéation :** entièrement physique, avec papier et crayon. Les élèves dessinent sur des feuilles de 15 cm x 15 cm.
- **Phases de test et d'entraînement :** requièrent des outils numériques (SignVisionAI ou Vittascience).

## Glossaire

| Terme | Définition |
|---|---|
| Ambiguïté des panneaux | Risque qu'un panneau soit mal interprété ou confondu avec des panneaux existants. |
| Classification des images | Capacité des outils d'IA à identifier et catégoriser les images en fonction de leur contenu. |
| Intelligence artificielle (IA) | Branche de l'informatique axée sur la création de systèmes capables d'effectuer des tâches nécessitant une intelligence humaine. |
| Phase d'apprentissage | Étape au cours de laquelle un outil d'IA acquiert des connaissances en étant exposé à des données étiquetées. |
| Test d'ambiguïté | Processus de vérification visant à déterminer si un panneau proposé est similaire aux panneaux existants. |
| Véhicules autonomes | Véhicules capables de naviguer sans intervention humaine, nécessitant une signalisation spécialisée. |

## Bibliographie

- D'Angelo, M. & Pellegrino, M. A. (2021). Roobopoli: a project to learn robotics by a constructionism-based approach. *MIS4TEL Workshops*.
- Gennari, R., Melonio, A., & D'Angelo, M. (2023). Engaging Learners in the Collaborative Design of Sustainable Smart Cities. *S3C Workshop @ CHItaly*.

---

## Étape 1 : Familiarisation et conception

**Contexte :** Les élèves se familiarisent avec les concepts de base, réfléchissent aux types de signaux à créer, sélectionnent l'un des types proposés et développent une conception préliminaire.

**Objectifs d'apprentissage :** Se familiariser avec les concepts liés à la signalisation routière, ainsi qu'avec la terminologie et les étapes associées aux outils basés sur l'IA.

#### Investigation par les élèves

**Familiarisation** — L'enseignant présente l'activité et la terminologie. Questions d'introduction :

- "Qu'est-ce que les véhicules autonomes ?" — Ce sont des véhicules capables de se déplacer seuls.
- "Quelle signalisation routière régule la mobilité des véhicules traditionnels ?" — Panneaux de danger (triangle rouge), interdiction (cercle rouge), priorité (triangle inversé ou octogone), obligation (cercle bleu), information (carré/rectangle).
- "Existe-t-il des catégories de panneaux destinés uniquement aux véhicules autonomes ?"
- "Qu'entend-on par panneaux non ambigus ?" — Des panneaux qui n'entrent pas en conflit avec la signalisation existante.

**Idéation** — Les élèves identifient l'objectif de leur panneau, puis le conçoivent sur des feuilles de 15 cm x 15 cm.

---

## Étape 2 : Tester l'ambiguïté des panneaux de signalisation

**Contexte :** Vérifier si les panneaux proposés sont susceptibles d'être confondus avec des panneaux existants, en combinant courtes présentations sur les mécanismes d'IA et mise en pratique immédiate.

**Objectifs d'apprentissage :** Acquérir des connaissances sur les outils d'IA pour la classification d'images. Détecter l'ambiguïté des signaux proposés.

#### Investigation par les élèves

Les élèves testent leurs panneaux avec [SignVisionAI](https://drive.google.com/drive/folders/1lwb4TkkNRnQ0K3j0s8kxeq7xg7a3pLak?usp=sharing). Si un panneau est identifié comme existant, il doit être affiné ou redessiné. Ce processus itératif se poursuit jusqu'à ce que toutes les propositions soient jugées non ambigues.

:::info[Alternative avec Vittascience]
Si SignVisionAI n'est pas disponible, utilisez [Vittascience](https://fr.vittascience.com/ia/images.php). Les élèves créent un modèle entraîné à reconnaître les cinq familles de panneaux actuels. Si un signe est classé avec un niveau de confiance supérieur à 80 % dans une catégorie existante, il est considéré comme ambigu.
:::

---

## Étape 3 : Entraînement du modèle en fonction des nouveaux panneaux conçus

**Contexte :** Phase de formation visant à permettre à un outil d'IA de reconnaître les panneaux conçus par les élèves.

**Objectifs d'apprentissage :** Acquérir des connaissances sur les outils d'IA pour la classification d'images. Utiliser les outils pour proposer une signalisation routière unique destinée aux véhicules autonomes.

#### Investigation par les élèves

**Réflexion et discussion** — Un vote collectif retient la version la plus efficace de chaque panneau.

**Représentation du panneau final** — Chaque élève réalise individuellement une version standardisée, en jouant sur les intensités de couleurs et les techniques artistiques (crayons, marqueurs, peinture, collages, aquarelle). Cette diversité enrichit les données d'entraînement.

**Entraînement de l'IA** — Les dessins sont photographiés ou scannés, classés par catégorie, puis importés sur [Vittascience](https://fr.vittascience.com/ia/images.php). Environ 80 % des images servent à l'entraînement, 20 % au test de fiabilité.

**Réflexion et évaluation** — L'enseignant analyse les performances du modèle final. Un questionnaire mesure la progression des élèves.

---

## Aller plus loin

- **Technologie LiDAR** — Explorer le LiDAR avec des pointeurs laser et des Arduino/Raspberry Pi. Ressources : [NEON Science](https://www.neonscience.org/resources/learning-hub/tutorials/lidar-basics)
- **Défi de programmation collaborative de véhicules autonomes** — Construire et programmer de petits véhicules autonomes communicants (V2V et V2I). Ressources : [Argonne National Laboratory](https://www.anl.gov/education/high-school-autonomous-vehicle-competition), [MIT Research on Human Reasoning in AI](https://news.mit.edu/2019/human-reasoning-ai-driverless-car-navigation-0523)

---

*Cette fiche fait partie du projet [SteamCity](/projets/steamcity), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

---
id: rendre-ville-vivable
title: "Rendre la ville plus vivable avec l'IA"
sidebar_label: "Rendre la ville plus vivable avec l'IA"
sidebar_position: 12
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Rendre la ville plus vivable avec l'IA

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Géographie</span>
  <span className="badge badge--primary">Éducation civique</span>
  <span className="badge badge--info">Intelligence artificielle</span>
  <span className="badge badge--info">Capteurs</span>
  <span className="badge badge--info">Robotique</span>
  <span className="badge badge--warning">Python</span>
</div>

| Projet       | Durée              | Difficulté    | Âge       |
| ------------ | ------------------ | ------------- | --------- |
| Youth AI Lab | 2h45 (3 étapes)    | Intermédiaire | 12-18 ans |

## Matériel

- Fiches d'analyse (papier ou numérique), _« arbre de compétences IA »_
- Un carnet Python en ligne, `sdg11.ipynb`
- Stylos, tablettes ou smartphones pour la prise de notes
- Tableau blanc ou vidéoprojecteur pour l'analyse collective
- Capteurs d'environnement pour l'étape 2 : qualité de l'air, sonomètre ou microphone, température et humidité

<PdfLink href="/pdf/youth-ai-lab/YouthAiLab_Explorations_Ideation_Sheet_CitiesGreat.pdf">Télécharger la fiche d'exploration</PdfLink>

</div>

<img src="/img/ressources/youth-ai-lab/rendre-ville-vivable/icone.png" alt="Rendre la ville plus vivable avec l'IA" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## Thèmes d'exploration

- **Un robot dans la ville** : en quoi notre projet pourrait-il peser sur l'avenir du territoire ?
- L'**Objectif de développement durable 11** : comment rendre les villes plus durables, avec l'appui de l'IA ?
- Une **approche pratique** : comprendre en faisant, en construisant des modèles d'IA

---

## Déroulé de l'exploration

### Étape 1 : Le plan d'urbanisme, l'Objectif 11 (en classe, 60 minutes)

**Question clé** : _Comment transformer nos villes en espaces inclusifs, sûrs et verts pour tout le monde ?_

**Approche de facilitation suggérée** : ouvrir sur un « audit de la ville ». Demander aux élèves de décrire leur trajet jusqu'à l'établissement. Est-il bruyant ? L'air y est-il propre ? Une personne en fauteuil roulant ou un voisin âgé peuvent-ils s'y déplacer facilement ? Introduire ensuite l'Objectif de développement durable 11, villes et communautés durables, comme le plan d'ensemble qui répond à ces défis urbains.

Trois cibles servent de point d'entrée :

- **Cible 11.2, des transports inclusifs** : pourquoi les transports doivent-ils être accessibles ? Pourquoi les femmes, les enfants et les personnes en situation de handicap demandent-ils une attention spécifique dans la planification urbaine ?
- **Cible 11.4, la protection du patrimoine** : pourquoi la sauvegarde du patrimoine culturel et naturel est-elle vitale pour l'identité d'une ville ?
- **Cible 11.6, l'impact environnemental** : la qualité de l'air et les déchets. Comment une ville « respire »-t-elle ?

**Activité : la carte de l'accessibilité (20 minutes).** Les élèves travaillent en binômes, identifient un obstacle dans leur propre commune (absence de pistes cyclables, zone de forte pollution) et proposent une solution numérique.

**Clarification fondamentale** : une ville n'est pas seulement un ensemble de bâtiments, c'est un système vivant qui a besoin de données pour rester en bonne santé.

---

### Étape 2 : Les sens du robot, du matériel pour la ville (en salle, 60 minutes)

**Question clé** : _Comment un robot « ressent-il » son environnement pour aider les habitant·es les plus fragiles ?_

**Cadre technique** : introduire la notion de **capteur d'environnement**. Là où l'être humain dispose de cinq sens, un robot utilise des modules électroniques pour recueillir des données objectives sur les cibles de l'Objectif 11.

L'ensemble de capteurs :

- **Capteur de qualité de l'air (cible 11.6)** : mesure le CO2 et les particules fines. Logique associée : si la qualité de l'air est mauvaise, le robot alerte les publics sensibles, personnes asthmatiques ou âgées.
- **Microphone ou capteur sonore (cibles 11.2 et 11.6)** : mesure le niveau en décibels. Logique associée : identifier les zones de pollution sonore, qui pèsent sur la santé mentale.
- **Capteur de température et d'humidité** : surveille les îlots de chaleur urbains. Logique associée : garantir que les espaces publics restent praticables pendant les canicules.

---

### Étape 3 : L'inférence urbaine, mettre le robot à l'épreuve (en salle, 45 minutes)

**Question clé** : _Comment notre IA entraînée réagit-elle à des situations réelles ?_

**Le test par scénarios** : une fois le modèle entraîné, les élèves utilisent la section d'inférence du carnet Python pour simuler un robot qui traverse différents quartiers.

**Activité : le défi des scénarios (30 minutes).** Les élèves saisissent de « nouvelles mesures » dans le modèle et observent ses niveaux de confiance :

- **Scénario A** : un parc ensoleillé (peu de bruit, peu de particules fines). Résultat attendu : vivable.
- **Scénario B** : un embouteillage (bruit élevé, particules élevées, forte chaleur). Résultat attendu : non vivable.
- **Scénario C** : un chantier. Résultat attendu : non vivable, à cause du bruit.

**Discussion** : observer la matrice de confusion. Où l'IA s'est-elle trompée ? A-t-elle pris un parc bruyant pour un chantier ? Pourquoi la **confiance**, c'est-à-dire la probabilité en pourcentage, compte-t-elle autant que la réponse finale ?

:::info[Notes pour l'enseignant·e]
La matrice de confusion est l'outil qui transforme un « ça marche » vague en une lecture précise des erreurs. Prendre le temps de la lire ensemble, ligne par ligne : elle dit non seulement combien de fois le modèle s'est trompé, mais surtout **dans quel sens** il s'est trompé, ce qui n'a pas les mêmes conséquences selon qu'on déclare vivable un lieu qui ne l'est pas, ou l'inverse.
:::

---

## Productions attendues

- **Une proposition d'audit de la ville** : l'identification documentée d'un obstacle urbain local (manque d'accessibilité, pollution élevée), associée à une intervention numérique envisagée
- **Une littératie des données** : la capacité à traduire des phénomènes physiques (chaleur, bruit, pollution) en valeurs numériques qu'une machine peut interpréter
- **Une pensée systémique** : comprendre comment la cible 11.2 sur les transports et la cible 11.6 sur l'environnement sont liées, par exemple comment de meilleures données de transport public réduisent les émissions par habitant
- **Un sentiment de pouvoir d'agir** : passer de l'accablement devant les problèmes urbains à la réalisation qu'il est possible de les mesurer, de les analyser et de proposer des solutions avec de la logique et des capteurs

---

## L'accroche et le côté ludique

- **Se sentir concerné et propriétaire du sujet** : en auditant leur propre ville ou leur propre établissement, le projet cesse d'être un exercice de manuel pour devenir une mission. Les élèves ne sont plus seulement des élèves, ce sont des « concepteurs et conceptrices d'espace urbain » ou des « militant·es du numérique » qui s'attaquent à des problèmes réels, vus tous les jours.
- **La perspective cyborg** : au lieu de lire un texte sur la pollution, les élèves donnent des sens à un robot. Voir un écran réagir instantanément à un claquement de mains (microphone) ou à un souffle (capteur de CO2) transforme une science abstraite en un jeu tangible et interactif.

---

## Indicateurs de réussite

**1. Le passage de la donnée à l'action**

- **Indicateur** : pendant le temps en salle, les élèves savent-ils expliquer pourquoi la température ou la qualité de l'air comptent pour un public fragile précis ?
- **Preuve** : un élève qui dit « le capteur montre qu'il fait trop chaud ici, ce serait un îlot de chaleur dangereux pour une personne âgée au sens de l'Objectif 11 » démontre une synthèse réussie entre technique et éthique.

**2. L'autonomie technique**

- **Indicateur** : la capacité à interpréter et à corriger la frontière de décision du réseau de neurones.
- **Preuve** : les élèves exécutent le script Python et identifient correctement comment les cas atypiques mettent en difficulté un modèle de classification.

---

## Aller plus loin

### Pour comprendre

- L'Objectif de développement durable 11 des Nations unies, villes et communautés durables : https://www.un.org/sustainabledevelopment/fr/cities/
- Les données officielles de qualité de l'air en France, station par station, publiées par les associations agréées de surveillance : https://www.atmo-france.org/
- La page Wikipédia de l'îlot de chaleur urbain : https://fr.wikipedia.org/wiki/%C3%8Elot_de_chaleur_urbain
- Le dossier de l'Agence européenne pour l'environnement sur la pollution de l'air et ses effets : https://www.eea.europa.eu/fr

### Pour s'inspirer

- Les fiches SteamCity sur la qualité de l'air, le bruit et la ville, qui couvrent la partie mesure avec du matériel : [/projets/steamcity](/projets/steamcity)
- [Concevoir une IA avec un robot](/ressources/youth-ai-lab/concevoir-ia-avec-robot), pour transformer l'audit en prototype
- [Entraîner le cerveau de la machine](/ressources/youth-ai-lab/entrainer-cerveau-machine), qui prépare la lecture des erreurs d'un modèle
- [Garder un œil sur l'IA](/ressources/youth-ai-lab/garder-oeil-sur-ia), enquête de terrain sur l'IA déjà présente dans l'espace urbain
- [Construire le chatbot de son quartier](/ressources/youth-ai-lab/wikiyouthbot), qui pousse la démarche jusqu'à la campagne de sensibilisation
- OpenStreetMap et uMap, pour cartographier collectivement les obstacles repérés : https://umap.openstreetmap.fr/fr/

---

_Cette fiche fait partie du projet [Youth AI Lab](/projets/youth-ai-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._

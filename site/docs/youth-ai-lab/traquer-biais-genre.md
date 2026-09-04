---
id: traquer-biais-genre
title: "Traquer les biais de genre de l'IA"
sidebar_label: "Traquer les biais de genre de l'IA"
sidebar_position: 10
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Traquer les biais de genre de l'IA

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Éducation civique</span>
  <span className="badge badge--primary">Sciences sociales</span>
  <span className="badge badge--info">IA générative</span>
  <span className="badge badge--info">Éthique de l'IA</span>
  <span className="badge badge--info">Réseaux de neurones</span>
  <span className="badge badge--warning">Python</span>
</div>

| Projet       | Durée              | Difficulté    | Âge       |
| ------------ | ------------------ | ------------- | --------- |
| Youth AI Lab | 2h30 (4 étapes)    | Intermédiaire | 12-18 ans |

## Matériel

- Fiches d'analyse (papier ou numérique), _« Fiche d'analyse de l'écart de biais »_
- Stylos, tablettes ou smartphones pour la prise de notes
- Tableau blanc ou vidéoprojecteur pour l'analyse collective
- Accès à un outil d'IA générative, un poste pour deux
- Un carnet ou un accès en ligne pour la recherche documentaire de l'étape 1
- Un environnement Python en ligne pour l'étape 3, et le script fourni
- Post-it de trois couleurs pour l'étape 4

<PdfLink href="/pdf/youth-ai-lab/YouthAiLab_Explorations_Ideation_Sheet_BIAIS.pdf">Télécharger la fiche d'exploration</PdfLink>

</div>

<img src="/img/ressources/youth-ai-lab/traquer-biais-genre/icone.png" alt="Traquer les biais de genre de l'IA" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## Thèmes d'exploration

- L'**écart de biais** : pourquoi les grands modèles de langage font des suppositions sur le genre
- L'**Objectif de développement durable 5**, l'égalité entre les sexes, et ce qu'il change à la façon de rédiger une consigne à une IA
- Une **approche pratique** : comprendre en faisant, en testant des techniques de formulation de consignes

---

## Déroulé de l'exploration

### Étape 1 : Le pouvoir de la parité (en salle, 30 minutes)

**Question clé** : _Pourquoi l'égalité entre les sexes est-elle à la fois un droit humain fondamental et une nécessité pour un monde durable ?_

**Approche de facilitation suggérée** : ouvrir sur une discussion autour des « barrières invisibles ». Demander au groupe si tout le monde part de la même ligne de départ dans la vie. Introduire ensuite l'Objectif de développement durable 5 comme une liste de tâches mondiale destinée à lever ces barrières.

Deux cibles servent de point d'entrée :

- **Cible 5.3, sécurité et dignité** : l'élimination des pratiques néfastes comme le mariage précoce ou forcé et les mutilations génitales féminines. En quoi ces pratiques privent-elles une personne de son avenir ?
- **Cible 5.a, pouvoir économique** : pourquoi posséder une terre, hériter d'un bien et accéder à un compte bancaire sont les clés d'une indépendance réelle

**Activité : l'audit des droits (20 minutes).** Les participant·es travaillent en binômes et recherchent la législation d'un pays donné en matière de propriété et de mariage.

- **Objectif** : identifier un « écart » juridique où les femmes n'ont pas les mêmes droits que les hommes
- **Clarification fondamentale** : l'émancipation n'est pas seulement un sentiment, elle s'appuie sur une infrastructure juridique et économique

---

### Étape 2 : Le miroir des biais, l'entraînement des modèles de langage (en salle, 60 minutes)

**Question clé** : _Si une IA apprend depuis internet, apprend-elle nos progrès ou nos préjugés ?_

**Explication non technique** : les grands modèles de langage sont entraînés sur des masses de textes. Si ces textes contiennent des écarts historiques entre les femmes et les hommes, ou des stéréotypes, l'IA « suppose » que ces régularités sont des vérités universelles.

**Activité : l'analyse de l'écart de biais (40 minutes).** Distribuer la fiche d'analyse. Les participant·es soumettent des consignes précises à une IA et analysent la réponse :

1. **La consigne** : « Écris une histoire avec un médecin et une infirmière. »
   - **Vérification** : l'IA a-t-elle attribué des genres d'elle-même ?
2. **La consigne** : « Liste 10 qualités d'un bon dirigeant. »
   - **Vérification** : les traits cités sont-ils connotés « masculins » ou « féminins » ?
3. **La chasse** : les participant·es trouvent trois autres exemples où l'IA se rabat par défaut sur un stéréotype de genre

**Objectif** : comprendre qu'un modèle de langage est le reflet de l'écart présent dans les données. Il ne sait pas ce qui est **juste**, seulement ce qui est **fréquent**.

---

### Étape 3 : La classification binaire, l'expérience du réseau de neurones (en salle informatique, 45 minutes)

**Question clé** : _Une machine peut-elle définir « homme » ou « femme » à partir de deux nombres seulement ?_

**Le cadre technique** : introduire un réseau de neurones simple conçu pour la classification binaire. L'objectif affiché est de prédire le genre à partir de la **taille** et du **poids**.

La logique du programme :

- **Entrées** : la taille et le poids
- **Le calcul** : un perceptron multicouche apprend à partir des données
- **Le conflit** : discuter des limites. Que deviennent les cas atypiques ? Et les athlètes ?

**Activité** : les participant·es exécutent un script déjà écrit et observent la **frontière de décision**.

**Discussion** : si l'on n'utilise que des données physiques, quels éléments « humains » du genre laisse-t-on de côté ? Une classification binaire suffit-elle à représenter les objectifs inclusifs de l'Objectif de développement durable 5 ?

:::info[Notes pour l'animateur·rice]
L'étape 3 fonctionne d'autant mieux que le résultat du script est **techniquement correct et humainement absurde**. Le modèle atteint une bonne exactitude tout en se trompant systématiquement sur des personnes réelles présentes dans la salle. C'est cet écart, et non la performance affichée, qui est l'objet de la séance.
:::

---

### Étape 4 : Récapitulatif et réflexion, le jeu des post-it (15 minutes)

**Question clé** : _Qu'avons-nous appris sur la rencontre entre les droits humains et la logique des machines ?_

Chaque participant·e reçoit trois post-it à coller sur un tableau de sortie :

- **Plus (+)** : ce qui a bien fonctionné aujourd'hui. Quel a été le moment de déclic sur l'IA ou sur l'Objectif 5 ?
- **Delta** : ce qu'il faudrait changer. Les calculs étaient-ils trop difficiles ? La discussion sur les biais trop courte ?
- **Point** : le niveau de satisfaction, sur une échelle de 1 à 4 (1 = perdu, 4 = en confiance)

---

## Productions attendues

- Une **fiche d'analyse de l'écart de biais** complétée, documentant des exemples réels de langage genré et de déséquilibres dans les données des modèles de langage
- Un **modèle de classification binaire entraîné**, qui met en évidence la logique mathématique de la prédiction de genre et ses limites physiques intrinsèques
- La capacité à **expliquer les barrières juridiques et économiques** identifiées dans les cibles 5.3 et 5.a
- La capacité à **retracer le chemin** qui mène d'un écart dans les données d'entraînement à un préjugé social automatisé
- Un aperçu concret du rôle de créatrice ou de créateur responsable : dépasser les réglages par défaut pour construire une technologie plus inclusive

---

## L'accroche et le côté ludique

- **Mode détective, la chasse aux biais** : les participant·es deviennent des « détectives du numérique » et prennent des IA de premier plan en flagrant délit de supposition embarrassante ou injuste
- **Le décodeur de genre** : transformer un réseau de neurones complexe en un jeu de « taille contre poids », pour voir si une machine peut réellement deviner une identité humaine à partir de quelques nombres
- **La ligue de la justice mondiale** : les participant·es n'étudient pas seulement l'histoire, ils agissent en « réformatrices et réformateurs » en appliquant l'Objectif 5 à des inégalités économiques et juridiques réelles
- **La boucle de retour par post-it** : un final rapide et interactif où leurs avis, le plus, le delta et le point, orientent directement la façon dont le laboratoire fonctionnera la fois suivante
- **Sortir du binaire** : le plaisir de découvrir la part proprement humaine, ces aspects du genre et de l'identité qu'un simple 0 ou 1 dans du code ne capturera jamais entièrement

---

## Indicateurs de réussite

Les participant·es :

- **identifient de façon critique** des biais de genre précis dans les réponses d'une IA, et les relient à l'écart présent dans les données des modèles de langage
- **relient la justice sociale aux données** : ils expliquent comment les cibles 5.3 et 5.a fournissent le socle juridique d'une société équitable
- **évaluent le piège du binaire** : ils discutent des raisons pour lesquelles réduire l'identité humaine à une taille et un poids échoue à rendre compte de la complexité de l'émancipation
- **proposent des solutions éthiques** : des façons concrètes de débiaiser un algorithme ou d'améliorer un jeu de données
- **reformulent le message clé** : « une IA est le miroir de nos données passées, mais à la lumière de l'Objectif 5, nous pouvons construire des outils qui reflètent un futur plus égalitaire »

---

## Aller plus loin

### Pour comprendre

- L'Objectif de développement durable 5 des Nations unies, avec ses cibles détaillées : https://www.un.org/sustainabledevelopment/fr/gender-equality/
- L'ouvrage « Invisible Women » de Caroline Criado Perez, sur l'écart de données entre les femmes et les hommes dans la conception des objets et des services : https://fr.wikipedia.org/wiki/Femmes_invisibles
- Les travaux de l'Algorithmic Justice League sur les biais des systèmes automatisés : https://www.ajl.org/
- Le dossier de la CNIL sur l'intelligence artificielle et les droits des personnes : https://www.cnil.fr/fr/intelligence-artificielle
- Le rapport annuel d'ONU Femmes sur l'égalité de genre : https://www.unwomen.org/fr

### Pour s'inspirer

- [Pirater ses prompts pour déjouer les biais](/ressources/youth-ai-lab/pirater-prompts-biaises), la suite naturelle : une fois le biais repéré, apprendre à écrire une consigne qui l'empêche
- [Entraîner le cerveau de la machine](/ressources/youth-ai-lab/entrainer-cerveau-machine), pour manipuler un perceptron avant de lancer le script de l'étape 3
- [Distinguer le vrai du faux avec l'IA](/ressources/youth-ai-lab/air-vrai-est-ce-vrai), sur le même réflexe de vérification appliqué aux faits plutôt qu'aux stéréotypes
- [Démonter l'illusion de la pensée](/ressources/youth-ai-lab/illusion-tout-ce-qui-compte), qui interroge ce qu'une IA fait réellement quand elle semble raisonner
- Le TensorFlow Playground, pour voir une frontière de décision se déplacer en direct : https://playground.tensorflow.org/

---

_Cette fiche fait partie du projet [Youth AI Lab](/projets/youth-ai-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._

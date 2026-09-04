---
id: pirater-prompts-biaises
title: 'Pirater ses prompts pour déjouer les biais'
sidebar_label: 'Pirater ses prompts pour déjouer les biais'
sidebar_position: 11
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Pirater ses prompts pour déjouer les biais

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Français</span>
  <span className="badge badge--primary">Éducation civique</span>
  <span className="badge badge--info">IA générative</span>
  <span className="badge badge--info">Éthique de l'IA</span>
  <span className="badge badge--info">Esprit critique</span>
</div>

| Projet       | Durée               | Difficulté | Âge       |
| ------------ | ------------------- | ---------- | --------- |
| Youth AI Lab | 1h10 (3 étapes)     | Débutant   | 12-18 ans |

## Matériel

- 1 petite balle ou 1 sac de graines
- Grandes feuilles de paperboard (A3 par exemple) ou tableaux blancs, et feutres de couleur pour chaque groupe
- Les « cartes de contrainte du pirate » imprimées
- 1 ou 2 ordinateurs avec accès à une IA par groupe
- La liste de phrases à compléter, sélectionnée à l'avance par l'équipe d'animation

<PdfLink href="/pdf/youth-ai-lab/YouthAiLab_Template_Explorations_Ideation_Sheet_BiasBountyHunt.pdf">Télécharger la fiche d'exploration</PdfLink>

</div>

<img src="/img/ressources/youth-ai-lab/pirater-prompts-biaises/icone.png" alt="Pirater ses prompts pour déjouer les biais" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## Thèmes d'exploration

- Comprendre **comment fonctionne réellement la prédiction de texte**
- Découvrir que le biais d'une IA vient des **données humaines et des stéréotypes**, et non d'une machine qui aurait des « opinions »
- L'**écriture de consignes** : apprendre à concevoir des contraintes et un contexte **avant** de toucher un clavier, pour contourner les biais par défaut

---

:::caution[Créer un espace sûr : note à l'attention de l'équipe d'animation]

L'objet de cette activité est d'**analyser la machine, pas de juger les participant·es**. Parce que les biais de l'IA prennent racine dans des stéréotypes humains, l'activité touche à des sujets sensibles : genre, milieu social, neurodiversité, apparence. Pour que l'exploration reste une expérience d'apprentissage positive et ne crée ni gêne ni tension, quelques règles :

- **Sélectionner la liste de phrases.** L'annexe 1 du PDF propose un large éventail d'exemples. Ils ne sont pas tous destinés à être utilisés. Choisir celles qui conviennent à l'âge, à la maturité et au milieu social du groupe.
- **Éviter de toucher des vulnérabilités directes.** Si le groupe comprend des jeunes de milieux modestes ou avec des traits neurodivergents, écarter les catégories « statut socio-économique » et « santé et neurodiversité ». Se concentrer sur des thèmes plus larges comme « genre et profession » ou « âge et générations », qui montrent le mécanisme sans que personne ne se sente visé.
- **Rebondir sur les réponses problématiques.** Pendant le jeu de balle, des participant·es peuvent lancer des stéréotypes entendus à la maison ou dans les médias. Ne pas les réprimander. En faire un moment d'apprentissage : « Exactement, c'est un stéréotype classique, et c'est précisément ce que l'IA a appris à prédire. Pourquoi la machine, et la société, font-elles cette supposition injuste ? »
- **Utiliser les phrases neutres à bon escient.** Si l'ambiance devient tendue, dissipée ou inconfortable, glisser immédiatement quelques phrases neutres (« Le chat roux et duveteux a sauté sur le... »). Cela remet le groupe d'aplomb et rappelle qu'il s'agit avant tout d'un exercice sur la prédiction de données.
- **Préparation.** Tester 4 ou 5 phrases de la liste sur l'IA qui sera utilisée, avant l'atelier. Les filtres de sécurité des IA changent souvent.

:::

---

## Déroulé de l'exploration

### Étape 1 : Le jeu du modèle de langage humain (débranché puis sur écran, environ 35 minutes)

:::info[Notes pour l'animateur·rice]
Ce jeu s'appuie sur les mécanismes explorés dans [Explorer l'IA dans la machine](/ressources/youth-ai-lab/labo-ia-dans-machine), activité 2. Là où la séance précédente portait sur la façon dont une IA prédit du texte de manière probabiliste, celle-ci explore **quelles données nourrissent ces probabilités**, et révèle comment les stéréotypes humains se retrouvent enchâssés dans la machine.
:::

Les participant·es s'assoient en cercle. L'animateur·rice explique qu'ils vont jouer le rôle d'une IA qui prédit le mot suivant.

L'animateur·rice donne une phrase de départ et lance la balle à une personne, qui doit **immédiatement** dire le mot le plus évident pour la suite, puis relancer la balle à quelqu'un d'autre. Les phrases sont choisies pour faire apparaître les stéréotypes, par exemple : « Le valeureux chevalier a sauvé la... (princesse) ».

On pose ensuite **les mêmes questions à l'IA** et on compare les résultats : le stéréotype vient-il de la machine, ou de nous ?

---

### Étape 2 : Le piratage sur affiche (débranché, environ 25 minutes)

Les groupes retournent à leur table, **écrans rangés**. Ils prennent une grande feuille ou un tableau blanc, des feutres, et tirent au hasard une « carte de contrainte du pirate ».

Ils doivent concevoir un **« prompt piraté »** qui corrige les phrases biaisées découvertes à l'étape 1. Plutôt que d'écrire simplement une phrase, ils doivent **dessiner l'architecture** de leur consigne, sous forme de logigramme ou de blocs de construction :

1. **La persona** : qui l'IA doit-elle incarner ?
2. **La tâche** : que doit-elle écrire ?
3. **Les règles strictes** : les contraintes tirées de leur carte de pirate, celles qui empêcheront le biais

Les trois cartes de contrainte fournies dans le PDF :

- **Carte A, l'inverseur de perspective.** Forcer l'IA à écrire depuis un point de vue qu'elle ignore ou stéréotype d'habitude, en définissant strictement une persona nouvelle et inattendue, et en ajoutant une règle « ne pas » qui bannit certains clichés.
- **Carte B, l'injecteur de contexte.** L'IA se rabat souvent sur un contexte générique et occidental. La forcer à être culturellement située et diverse, en nommant des villes, des quartiers ou des pays précis, et en demandant des détails locaux réalistes et respectueux.
- **Carte C, la faiseuse de règles.** L'IA a tendance à genrer les pronoms selon les professions. La forcer à une neutralité complète, avec des commandes strictes du type « tu dois... » ou « tu n'as pas le droit de... », portant sur les pronoms ou les adjectifs.

---

### Étape 3 : L'exécution (sur écran, environ 10 minutes)

Les groupes retournent aux ordinateurs et saisissent leur consigne **exactement telle qu'ils l'ont conçue sur leur affiche**. Ils vérifient si les contraintes qu'ils ont écrites à la main ont réellement forcé l'IA à produire une réponse équitable.

---

## Productions attendues

- Une **galerie physique d'affiches de « prompts piratés »**, qui montre l'anatomie d'une bonne consigne à une IA
- Une compréhension **vécue** de la façon dont des stéréotypes humains deviennent des biais de machine
- La capacité à **concevoir une consigne hors ligne, avec soin**, en passant du statut d'utilisateur passif à celui de concepteur actif de consignes

---

## L'accroche et le côté ludique

- **Un jeu physique** : la partie de balle du « modèle de langage humain » est rapide et drôle
- **Le moment de bascule**, quand le groupe réalise pendant le jeu qu'il est lui-même la source du biais de l'IA
- **La collaboration en équipe** pendant la conception des prompts piratés

---

## Indicateurs de réussite

- Les participant·es **prennent part activement** au jeu physique et savent expliquer pourquoi le groupe a spontanément produit des stéréotypes
- Les prompts piratés affichés montrent une **pensée structurée**, et pas de simples questions
- Le groupe **démontre effectivement** que sa consigne conçue sur papier a forcé l'IA à produire une réponse non biaisée lors du test final

---

## Aller plus loin

### Pour comprendre

- Les biais des grands modèles de langage, expliqués par la CNIL : https://www.cnil.fr/fr/intelligence-artificielle
- Les travaux de l'Algorithmic Justice League sur les préjugés encodés dans les systèmes automatisés : https://www.ajl.org/
- La page Wikipédia du biais algorithmique, pour poser le vocabulaire après la séance : https://fr.wikipedia.org/wiki/Biais_algorithmique
- Le dossier d'Interstices sur le traitement automatique des langues : https://interstices.info/domaine/intelligence-artificielle/

### Pour s'inspirer

- [Explorer l'IA dans la machine](/ressources/youth-ai-lab/labo-ia-dans-machine), dont l'activité 2 fournit la mécanique de prédiction sur laquelle ce jeu s'appuie
- [Traquer les biais de genre de l'IA](/ressources/youth-ai-lab/traquer-biais-genre), qui creuse le même sujet côté données d'entraînement et Objectif de développement durable 5
- [Construire le chatbot de son quartier](/ressources/youth-ai-lab/wikiyouthbot), où les règles écrites par le groupe deviennent la personnalité durable d'une IA
- [Imaginer la pire invention](/ressources/youth-ai-lab/pire-invention), qui utilise aussi l'IA générative comme complice d'une démonstration critique
- [Distinguer le vrai du faux avec l'IA](/ressources/youth-ai-lab/air-vrai-est-ce-vrai), pour enchaîner sur la vérification des faits

---

_Cette fiche fait partie du projet [Youth AI Lab](/projets/youth-ai-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._

---
id: construire-chatbot-6-tri
title: 'Apprendre à un petit modèle à trier les messages'
sidebar_label: 'Apprendre à un petit modèle à trier les messages'
sidebar_position: 19
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Apprendre à un petit modèle à trier les messages

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Éducation civique</span>
  <span className="badge badge--info">Apprentissage automatique</span>
  <span className="badge badge--info">Esprit critique</span>
  <span className="badge badge--warning">SetFit</span>
</div>

| Projet       | Durée                          | Difficulté    | Âge                       |
| ------------ | ------------------------------ | ------------- | ------------------------- |
| Youth AI Lab | 2 h (115 min + 5 min de marge) | Intermédiaire | Adultes (animateur·rices) |

## Matériel

- 1 ordinateur par binôme, avec un navigateur web : rien à installer
- 1 compte GitHub par binôme (un compte gratuit suffit)
- 1 clé d'accès au modèle (clé d'API Anthropic, qui commence par `sk-ant-`) par binôme, fournie par l'animateur·rice : une petite requête de test à la partie 1, puis la partie 5
- La fiche d'une page (`sheet.md`), imprimée, une par binôme
- 1 carte vierge ou une demi-feuille par personne, pour la carte de sortie
- Du papier, pour écrire un test destiné à un autre binôme
- Un grand écran, pour le tableau de confusion de la partie 2, puis, à la partie 4, les deux diapositives, le dossier du modèle et les messages difficiles de l'animateur·rice
- Un tableau, pour noter les scores et la comparaison de la partie 5

**Ressources en ligne**

- Le dépôt de l'atelier, où l'on travaille : https://github.com/Youth-AI-Lab/yal-workshop-finetune
- La fiche d'une page à imprimer, en anglais : https://github.com/Youth-AI-Lab/yal-workshop-finetune/blob/main/sheet.md
- Les diapositives de l'animateur·rice : https://youth-ai-lab.github.io/yal-workshop/6/
- La fiche animateur : https://youth-ai-lab.github.io/yal-workshop/6/facilitator.html

</div>

<img src="/img/ressources/youth-ai-lab/construire-chatbot-6-tri/icone.png" alt="Apprendre à un petit modèle à trier les messages" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

:::info[Atelier 6 sur 6 de la série Construire son propre chatbot : ce qu'il lit, et qui décide]

Cet atelier est le dernier de la série. Il se suit sans avoir fait les ateliers précédents. Il s'adresse aux animateur·rices, qui le vivent en binômes avant tout usage avec des jeunes. Atelier précédent : [Organiser ce que sait un chatbot dans un wiki](/ressources/youth-ai-lab/construire-chatbot-5-wiki). Début de la série : [Donner des instructions à un chatbot et le tester](/ressources/youth-ai-lab/construire-chatbot-1-instructions).

Les pages, les commandes et le Codespace sont en anglais ; cette fiche en est l'adaptation française. Les captures d'écran annotées se trouvent dans la page de l'atelier, sur le dépôt.

:::

---

## Introduction

Dans les ateliers 1 à 5, le chatbot a reçu des instructions, des connaissances, une façon de chercher, des outils et un wiki. Tout cela est entré dans le **contexte** : le texte que le modèle lit avant de répondre. Le modèle, lui, n'a jamais changé : c'était le même Claude pour tout le monde, avec les mêmes nombres à l'intérieur. Aujourd'hui, on change un modèle. Un petit, pour une seule tâche : **trier les messages** que les gens envoient à un chatbot, avant que le chatbot ne les voie. La question du jour :

> **Quand vaut-il la peine d'apprendre quelque chose à un petit modèle, plutôt que de demander à un grand ?**

**Pourquoi cette approche ?** Le **réglage fin** (_fine-tuning_) consiste à modifier un peu un modèle, avec ses propres exemples, pour qu'il fasse mieux une tâche. À l'atelier 5, ce n'était qu'une option sur une diapositive de l'animateur·rice : la connaissance entre dans le modèle, sans source, et une erreur oblige à entraîner de nouveau. Un modèle réglé qui écrit peut aussi continuer d'inventer, et régler un grand modèle demande bien plus qu'une structure jeunesse n'en a : des cartes graphiques, des milliers d'exemples, des jours de travail.

Un **classifieur** est une autre sorte de modèle. Il n'écrit rien : il **choisit** une classe parmi quelques-unes, que vous décidez. Il ne peut donc pas inventer de réponse. Un petit classifieur apprend à partir de quelques dizaines d'exemples, en une ou deux minutes, sur les deux processeurs du Codespace, sans carte graphique. C'est un réglage fin à une taille que vous pouvez faire vous-même, regarder et tester en une séance.

La tâche du jour est réelle. Un chatbot reçoit quatre sortes de messages, qui ne méritent pas le même traitement :

| Classe      | Ce qu'elle veut dire                                                          | Exemple                                             | Ce qui devrait se passer                                                                                               |
| ----------- | ----------------------------------------------------------------------------- | --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `topic`     | une question sur le sujet du chatbot                                          | « Comment protéger mon jardin des feux de forêt ? » | le chatbot répond, avec ses instructions et ses connaissances                                                          |
| `today`     | une question qui a besoin des faits du moment, ce soir ou ce week-end compris | « Quel est le niveau de danger aujourd'hui ? »      | le chatbot répond avec l'outil en direct du jour (source officielle : atelier 4)                                       |
| `urgent`    | un feu en cours, ou une personne en danger ou en détresse, même sans feu      | « De la fumée sort du bois derrière ma maison ! »   | une réponse de sécurité fixe, tout de suite                                                                            |
| `off-topic` | tout le reste                                                                 | « Tu peux m'aider pour mes devoirs de maths ? »     | un refus poli qui dit quand même qui peut aider (le numéro d'urgence, un adulte de confiance), sans dépenser de jetons |

Placé **avant** un chatbot, un trieur pourrait faire ce travail en moins d'une seconde, sans coût par message, et le tri n'envoie le message nulle part.

La question de la série était : **qu'est-ce qui entre dans le contexte du modèle, quand, et qui décide ?** La réponse d'aujourd'hui : un petit modèle peut décider si un message arrive ou non au grand modèle, et c'est vous qui décidez, avec vos exemples, comment il trie.

Message à retenir en fin de séance : **un petit modèle qui choisit seulement parmi quelques classes ne peut pas inventer de réponse. Il apprend en une ou deux minutes à partir de quelques dizaines d'exemples, et chaque message ne coûte rien, sur un ordinateur qui reste allumé. Sa qualité vient de ses exemples, et seul un test honnête, écrit par quelqu'un d'autre, dit ce qu'il vaut.**

### Le lien avec WikiYouthBot

**Feurisson**, le chatbot des jeunes de La Rochelle, utilise la même idée dans son prototype : un petit modèle français (CamemBERT), réglé sur les cartes de sa FAQ, choisit la carte qui répond à une question, ou aucune, avant tout appel à Claude. Les jeunes écriront les cartes et les exemples (l'activité n'a pas encore eu lieu avec le groupe). Une réponse de FAQ est gratuite, et toujours la même. Ses urgences sont repérées par des expressions fixes, pas par un modèle, et seules les cartes marquées comme vérifiées sont montrées au public. Voir [wikiyouthbot-feurisson](https://github.com/Youth-AI-Lab/wikiyouthbot-feurisson), avec son activité pour les jeunes.

**La partie 3** est une activité à part entière avec des jeunes : écrire avec ses propres mots les messages que recevra un chatbot, c'est réfléchir à qui l'utilisera et comment. Les messages sont inventés, jamais tirés de la vie de quelqu'un, et votre structure décide d'abord qui traite un message inquiétant. **La partie 5** est une question à poser avant de choisir un outil : que coûte chaque message, et où va-t-il ?

La série, une pièce du chatbot à la fois :

- [**Atelier 1**](/ressources/youth-ai-lab/construire-chatbot-1-instructions) : les instructions, et comment tester un chatbot
- [**Atelier 2**](/ressources/youth-ai-lab/construire-chatbot-2-rag) : toutes les connaissances dans le contexte, puis un RAG (un moteur de recherche choisit quelques morceaux de documents, et le modèle ne lit que ceux-là)
- [**Atelier 3**](/ressources/youth-ai-lab/construire-chatbot-3-recherche) : le modèle cherche lui-même, et les skills (des procédures écrites que le modèle suit quand une demande correspond à leur description)
- [**Atelier 4**](/ressources/youth-ai-lab/construire-chatbot-4-outils) : des outils qui apportent les faits du jour
- [**Atelier 5**](/ressources/youth-ai-lab/construire-chatbot-5-wiki) : organiser ce qu'il sait dans un wiki, et emballer le chatbot de son territoire
- **Atelier 6** (celui-ci) : **régler un petit modèle**, pour trier les messages avant le chatbot

### Structure de l'atelier

| Partie                                                          | Niveau | Durée  |
| --------------------------------------------------------------- | ------ | ------ |
| Partie 1 : Accueil                                              | -      | 15 min |
| Partie 2 : Un modèle qui n'a pas encore appris vos classes      | ★      | 15 min |
| Partie 3 : Écrire ses exemples, et un test pour un autre binôme | ★★     | 25 min |
| Partie 4 : Régler, tester, améliorer                            | ★★     | 30 min |
| Partie 5 : Le grand modèle, sans entraînement                   | ★★★    | 15 min |
| Partie 6 : Clôture                                              | -      | 15 min |
| Marge                                                           | -      | 5 min  |

**Les repères de la salle.** `workshop-start 6` ouvre la page anglaise, et chaque binôme en a la version d'une page, `sheet.md`. Leurs numéros et leurs titres ne sont pas ceux de cette fiche. Pour annoncer une étape ou une lecture à la salle, employer ceux de la colonne de droite :

| Dans cette fiche                               | Sur la page anglaise et la fiche animateur       |
| ---------------------------------------------- | ------------------------------------------------ |
| Partie 4, étape 1                              | Part 4, steps 1 to 5                             |
| Partie 4, étape 2                              | Part 4, step 6                                   |
| Partie 4, étape 3                              | Part 4, step 7                                   |
| Partie 4, étape 4                              | Part 4, step 8                                   |
| Partie 6, étape 1                              | Part 6, steps 2 and 3                            |
| « Ce que l'on entraîne »                       | What do you train?                               |
| « Comment se passe l'entraînement »            | How does the training work?                      |
| « Le score de l'entraînement, et le gradient » | How does the training know that it is improving? |
| « L'arrêt de l'entraînement »                  | When does the training stop?                     |
| « Ce que l'entraînement change »               | What the training changes                        |

Dans `sheet.md`, la partie 4 a quatre points : les points 1 et 2 couvrent les steps 1 à 6 de la page, le point 3 le step 7, le point 4 le step 8.

### Avant de commencer

Rien à apporter des ateliers précédents. **Pensez à la façon dont les jeunes écrivent** à un chatbot dans votre langue : avec quels mots, quelles fautes ? Vous inventerez des messages qui leur ressemblent à la partie 3.

Dans `SETUP.md`, les étapes 1 à 3 et l'étape 6 servent aujourd'hui. Cet atelier n'a pas de chatbot : on saute les étapes 4 et 5.

Les documents de référence sont tous dans le Codespace, dans la liste des fichiers à gauche :

- `messages/examples.md` : les exemples dont le modèle apprend, sous quatre titres. On écrit dedans aujourd'hui.
- `messages/test.md` : les messages de test. Le modèle ne les voit jamais pendant qu'il apprend.
- `sorter` : la commande du jour (taper `./sorter` pour voir ce qu'elle sait faire).
- `tools/sorter.py` : le programme derrière elle, environ 500 lignes de Python, si vous êtes curieux·se.
- `SETUP.md` : mise en place et problèmes courants de toute la série.

### Glossaire

- **Modèle** : un programme dont le comportement n'est pas écrit sous forme de règles, mais stocké comme une très longue liste de nombres. Ici, il y en a deux : un petit modèle qui tourne dans le Codespace, et Claude, qui tourne chez Anthropic.
- **Paramètres** : les nombres d'un modèle. Le petit modèle du jour en a 117 653 760. Seul l'entraînement les change.
- **Entraînement** : la boucle qui trouve ces nombres. Le programme reçoit un exemple, répond, mesure son erreur, puis change ses nombres d'un tout petit peu.
- **Contexte** : le texte que le modèle lit avant de répondre.
- **Classifieur** : un modèle qui ne fait que choisir une classe parmi une liste. Il n'écrit pas de texte.
- **Classe** : une des catégories du tri. Ici, quatre : `topic` (le sujet du chatbot), `today` (une question qui a besoin des faits du moment), `urgent` (une urgence ou une détresse) et `off-topic` (hors sujet).
- **Réglage fin** (_fine-tuning_) : modifier un peu un modèle avec ses propres exemples, pour qu'il fasse mieux une tâche.
- **Exemple** : un message avec sa classe, dont le modèle apprend.
- **Message de test** : un message avec sa classe que le modèle n'a jamais vu. Il sert à mesurer.
- **Score sans entraînement** (_baseline score_) : le score de `./sorter baseline`, le point de départ.
- **Premier score** : le score de `./sorter test` après le premier entraînement, sur le test d'un autre binôme. C'est le seul test honnête du modèle, et celui que l'on compare à Claude.
- **Score amélioré** : le score après la seconde série d'exemples. Il n'est pas honnête : le modèle est réglé sur ce test.
- **Tableau de confusion** : un tableau qui croise la bonne classe (lignes) et la classe choisie (colonnes). Les bonnes réponses sont sur la diagonale.
- **Confiance** : un nombre de 0,25 à 1 qui dit à quel point le trieur est sûr de son choix, pas s'il a raison. Sous 0,5, le trieur n'est pas sûr.
- **Adresse** : la liste de 384 nombres que le modèle calcule pour une phrase. Deux phrases de même sens reçoivent des adresses proches, sur une sorte de carte du sens.
- **Proximité** : un score qui peut aller de -1 à 1 pour deux adresses. Environ 0 veut dire peu de lien, et plus il est haut, plus elles sont proches pour ce modèle. Il ne mesure pas un sens partagé.
- **Corps** : la partie du trieur qui transforme une phrase en adresse. C'est le modèle de la partie 1.
- **Tête** : un très petit modèle ajouté sur le corps. Il lit l'adresse et donne une valeur par classe.
- **SetFit** : la méthode de réglage fin de l'atelier. Elle règle le corps à partir de paires d'exemples, puis apprend la tête.
- **Score de l'entraînement** : le nombre que l'entraînement fait baisser, calculé de la même façon à chaque tour. On parle de **fonction de perte** (_loss function_) en apprentissage automatique, et parfois de **fonction de fitness** (_fitness function_) dans d'autres domaines. Ici, plus il est bas, mieux c'est, et 0 serait parfait. Le score d'un test (28 sur 32) marche dans l'autre sens : plus il est haut, mieux c'est.
- **Gradient** : pour chaque nombre du modèle, la pente du score, qui dit dans quel sens le score descend et à quelle vitesse. Quand chaque nombre qui a une pente fait un très petit pas vers le bas, on parle de **descente de gradient**.
- **Surapprentissage** (_overfitting_) : un modèle qui continue de progresser sur ses exemples, mais devient moins bon sur de nouveaux messages.
- **Jeton** (_token_) : un morceau de mot. Les grands modèles se paient au nombre de jetons lus et écrits.
- **Codespace** : un ordinateur prêté par GitHub, ouvert dans le navigateur avec l'éditeur VS Code. Rien à installer.

## Objectifs d'apprentissage

**À la fin de cet atelier, les participant·es seront capables de :**

- **Expliquer** ce que fait un classifieur, ce que l'entraînement change dans un modèle, et pourquoi un modèle qui choisit ne peut pas inventer de réponse.
- **Écrire** des exemples et un test dans leur langue, régler un modèle sur ces exemples, et le tester.
- **Lire** un tableau de confusion, et trouver l'erreur qui compte le plus.
- **Comparer** leur petit modèle avec Claude (bonnes réponses, vitesse, coût, ce qui sort du Codespace), et décider quand un réglage fin vaut la peine.
- **Imaginer** d'autres tris avec la même méthode : le type de question, le sujet, le ton.

:::info[Notes pour l'animateur·rice]

Prévoir environ 45 minutes de préparation :

- **Une clé d'API Anthropic par binôme** (`sk-ant-`) (10 min), toutes dans un seul espace de travail pour la salle, plafonné, avec des clés de courte durée : une petite requête de `workshop-login` à la partie 1, puis `./sorter claude` à la partie 5. Le plafond porte sur l'espace de travail : quand il est atteint, toutes les clés s'arrêtent. Pour créer les clés et fixer le plafond, voir le guide [Partager un chatbot avec un groupe grâce à Open WebUI](/ressources/youth-ai-lab/guide-open-webui) et la préparation de l'[atelier 1](/ressources/youth-ai-lab/construire-chatbot-1-instructions). `workshop-login` doit dire `Key OK`. Il vérifie la clé avec Sonnet, et la partie 5 utilise Haiku : prendre l'une de ces clés pour son propre passage de `claude`.
- **Faire son propre parcours la veille**, dans un Codespace neuf (15 min) : `workshop-login`, `workshop-start 6`, `./sorter setup`, `baseline`, `train`, `test`, `try`, `claude`, `workshop-save`. Noter les durées qu'affichent `setup` et `train`, et les comparer aux mesures ci-dessous. Dans un Codespace, le téléchargement (environ 2 Go une fois installé) passe par le cloud de GitHub, pas par le réseau de la salle. Ce Codespace prêt à l'avance sert aussi de secours.
- **Préparer un message difficile par classe**, soit quatre messages, dans chaque langue de la salle (15 min). Pour `urgent`, prendre une personne en danger sans feu, ou un appel à l'aide court, avec des mots qui ne sont pas sur la page de l'atelier. C'est le test honnête de l'étape 4 de la partie 4, car aucun binôme ne les a vus : ne pas les donner à la partie 3.
- **Imprimer** la [fiche d'une page](https://github.com/Youth-AI-Lab/yal-workshop-finetune/blob/main/sheet.md), une par binôme, et prévoir une carte vierge ou une demi-feuille par personne pour la carte de sortie (5 min). Les trois questions sont à la partie 6, étape 1. La fiche d'une page est en anglais, à traduire si besoin : ses titres sont ceux de la page anglaise, et sa partie 4 a sa propre numérotation (voir « Les repères de la salle »).

**Protection de l'enfance (_safeguarding_).** Convenir d'abord de la procédure de votre structure : qui traite un message inquiétant, et comment. La partie 3 demande des messages inventés sur le danger et la détresse, et quelqu'un peut quand même écrire quelque chose de réel. Une confidence réelle cesse d'être une donnée d'atelier : elle reçoit une réponse privée d'une personne, selon cette procédure. Elle n'est ni lue à voix haute, ni affichée, ni utilisée pour l'entraînement, ni envoyée à Claude. Cela vaut dans cet atelier, et quand vous le réemployez avec des jeunes.

**Coût par binôme.** Le trieur ne coûte rien. La partie 5 coûte 0,0007 dollar par passage de `./sorter claude` sur 32 messages (mesuré), plus la petite requête de `workshop-login` à la partie 1 : moins d'un centime par binôme.

**Mesures.** Sauf mention contraire, elles ont utilisé les messages du dépôt (40 exemples, 32 messages de test, écrits pour l'atelier). Tous les temps ont été mesurés avec 2 processeurs. La dernière colonne du tableau donne l'image. L'**image** est l'environnement tout prêt derrière un Codespace, et son numéro est sa version. **Dans un conteneur** veut dire ce même environnement, démarré hors d'un Codespace. Journaux bruts du code final : [mesures du 1er novembre 2026](https://youth-ai-lab.github.io/yal-workshop/measures/2026-11-01-finetune-audit/README.md).

Le **code final** a tourné le 1er novembre 2026, de `workshop-start 6` à `workshop-save`, dans l'image `2026.10.41`, dans un conteneur limité à 2 processeurs, pas dans un vrai Codespace. Les versions modifiées de `workshop-start` et de `workshop-save` ont été placées devant celles de l'image : un Codespace ne les reçoit qu'avec la prochaine image. Avant cela, le 31 octobre 2026, le code de ce jour-là a tourné dans une copie du Codespace (image `2026.10.38`, limitée à 2 processeurs et 8 Go de mémoire ; le vrai Codespace mesuré a 7 Go). Le même jour, tout l'atelier a été joué dans un vrai Codespace (image `2026.10.39`, 2 processeurs, 7 Go, piloté par SSH, de `workshop-start 6` à `workshop-save`) : setup 151 s, baseline 14 s, train 65 s, test 32 sur 32 à 7 ms par message, `./sorter claude` le même 30 sur 32 à 0,8 s par message, mémoire 4,6 Go au plus.

Ensuite, avec deux nouveaux vrais Codespaces (image `2026.10.39`, celle épinglée ce jour-là) : `workshop-save` dans le premier, **Download...** dans Chrome, le fichier déposé sur la liste des fichiers du second (même empreinte SHA-256 à chaque étape), `workshop-start 6 --from my-work.zip`, `./sorter setup` 108 s, `./sorter train` 65 s. VS Code ouvre le fichier déposé dans un onglet et dit qu'il ne peut pas l'afficher : le fermer. Limites : VS Code venait de `code serve-web`, dans un Chrome sans fenêtre, et le glissement a été envoyé par le protocole de débogage de Chrome, pas par une main. Pas joué : un groupe.

Un nouveau Codespace ouvre l'image nommée dans `.devcontainer/devcontainer.json`. Si cette image est plus récente que celles du tableau, votre parcours de la veille sert de vérification de ces temps.

| Quoi                                                                                                                                          | Mesure                                                                                                                                                                                                                                                                                                                        | Image                                                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `./sorter setup` (la commande annonce « about 2 min 30 »)                                                                                     | 92 s (bibliothèques 74 s, modèle 16 s) ; 68 paquets, chacun vérifié par son empreinte. Avant : de 108 à 151 s. Taille : 2,1 Go dans `~/.workshop-finetune`. Sur arm64, seul le téléchargement des paquets a été vérifié                                                                                                       | `2026.10.41` ; avant et taille : `2026.10.38`, `2026.10.39` ; 108 s : `2026.10.39` |
| `./sorter baseline` (sans entraînement)                                                                                                       | 28 sur 32, aucune urgence manquée ; 9 s, chargement du modèle compris. Il fallait de 28 à 49 s dans les conteneurs limités, jusqu'à ce qu'une ligne de `tools/sorter.py` limite le nombre de calculs menés en parallèle (ses fils d'exécution), comme pour `train`                                                            | `2026.10.41` ; avant : `2026.10.38` et suivantes                                   |
| `./sorter train` (40 exemples)                                                                                                                | 61 s. Avant : 62 s et 64 s                                                                                                                                                                                                                                                                                                    | `2026.10.41` ; avant : `2026.10.38`                                                |
| `./sorter train` (80 exemples : les 40 du dépôt et une variante de chacun, pour le temps seulement)                                           | 132 s                                                                                                                                                                                                                                                                                                                         | `2026.10.38`                                                                       |
| `./sorter test`                                                                                                                               | 32 sur 32, aucune urgence manquée ; 9 ms par message dans un lot (un message seul, modèle chargé : 10 ms en médiane, 21 ms au plus) ; `Not sure (below 0.5) for 2 message(s)`, tous deux listés                                                                                                                               | `2026.10.41`                                                                       |
| `./sorter try`, puis `Il y a de la fumée derrière l'école !`                                                                                  | `urgent`, confiance 0,98                                                                                                                                                                                                                                                                                                      | `2026.10.41`                                                                       |
| `./sorter try`, puis `help!!` (au secours !!)                                                                                                 | `off-topic`, confiance 0,54 : un refus, qui nomme le 112 et un adulte de confiance                                                                                                                                                                                                                                            | `2026.10.41`                                                                       |
| `Help me please.` (Aide-moi, s'il te plaît.), puis `aidez moi`                                                                                | `off-topic`, confiance 0,75 et 0,68 : le même refus                                                                                                                                                                                                                                                                           | `2026.10.41`                                                                       |
| `./sorter try`, puis `I feel like nobody would care if I disappeared` (J'ai l'impression que personne ne s'en soucierait si je disparaissais) | `urgent`, confiance 0,46 : pas sûr, réponse de sécurité quand même                                                                                                                                                                                                                                                            | `2026.10.41`                                                                       |
| `The fire is close to our camp today` (Le feu est près de notre camp aujourd'hui)                                                             | `today`, confiance 0,64 : le chatbot avec l'outil en direct                                                                                                                                                                                                                                                                   | `2026.10.41`                                                                       |
| `Can I go to the forest today and never come back?` (Puis-je aller en forêt aujourd'hui et ne jamais revenir ?)                               | `today`, confiance 0,72 : le chatbot avec l'outil en direct. Avec le message précédent, 2 urgences sur 6 essayées sont sorties en `today`                                                                                                                                                                                     | `2026.10.41`                                                                       |
| 5 urgences croisées avec des longueurs et des positions : un mécanisme, pas un taux de détection                                              | Avec ponctuation, 240 sur 240 en réponse de sécurité. Sans ponctuation, 240 : 29 en réponse de sécurité, 211 au chatbot. Aucun refusé, aucun envoyé à l'outil en direct                                                                                                                                                       | `2026.10.41`                                                                       |
| 8 extraits croissants d'un même texte de prévention                                                                                           | 6 ont reçu la réponse de sécurité par erreur                                                                                                                                                                                                                                                                                  | `2026.10.41`                                                                       |
| Un message sur le feu à la fin de `examples.md`, donc sous `## off-topic`                                                                     | 30 sur 32, 2 urgences manquées, deux détresses sans feu. Le même message sous `## urgent` : 31 sur 32, aucune manquée                                                                                                                                                                                                         | ordinateur portable, mêmes données                                                 |
| Mémoire                                                                                                                                       | 4,3 Go au plus avec 40 exemples, 5,1 Go avec 80, sur 8                                                                                                                                                                                                                                                                        | `2026.10.38`                                                                       |
| `./sorter claude` (premier de trois passages, même résultat ; `claude-haiku-5-5`, réflexion coupée)                                           | 30 sur 32, 2 urgences manquées (« Un ragazzo mi minaccia e ho paura », Un garçon me menace et j'ai peur ; « Someone at school keeps hitting me and I'm afraid », Quelqu'un à l'école n'arrête pas de me frapper et j'ai peur : `off-topic`) ; 0,9 s par message ; 0,0007 dollar, soit environ 0,02 dollar pour 1 000 messages | `2026.10.38`                                                                       |
| Un autre modèle, `intfloat/multilingual-e5-small` (MIT), mêmes données                                                                        | 23 sur 32 sans entraînement, 29 sur 32 réglé, une urgence manquée : pas retenu                                                                                                                                                                                                                                                | ordinateur portable                                                                |

**Ce 32 sur 32 ne dit rien des vrais messages** : les messages de test du dépôt ont été écrits avec les exemples. La partie 3 sert à cela : le test écrit par un autre binôme est le test honnête.

:::

---

## Partie 1 : Accueil (15 min)

**Objectif** : ouvrir le Codespace, enregistrer la clé du binôme, installer le trieur, et comprendre de quoi est fait un modèle et ce que veut dire entraîner. Tout le reste de la journée s'appuie sur ces deux idées.

Un seul Codespace par binôme, à garder pendant tout l'atelier. Changer de personne au clavier à chaque partie. Si quelque chose casse, vos fichiers restent dans le Codespace.

:::caution[Étape 1 : Ouvrir son Codespace et enregistrer sa clé]

1. Avant de cliquer, si le délai d'inactivité de ce compte GitHub n'est pas encore réglé, faire l'étape 1 de `SETUP.md` (1 minute) : sur https://github.com/settings/codespaces, régler **Default idle timeout** sur 120 minutes, puis **Save**.
2. Ouvrir https://codespaces.new/Youth-AI-Lab/yal-workshop-finetune, puis cliquer sur **Create codespace**. Attendre environ 2 minutes, jusqu'au terminal. S'il n'apparaît pas : menu ☰ en haut à gauche, **Terminal**, puis **New Terminal**.
3. Dans le terminal, enregistrer la clé (une fois par Codespace) :

   ```bash
   workshop-login
   ```

   Coller la clé une seule fois (`Ctrl+Shift+V`, `Cmd+V` sur Mac). Le navigateur peut demander la permission de coller : accepter. La clé s'affiche en `*` : c'est normal. Appuyer sur Entrée. On doit voir une ligne qui commence par `Key OK` et se termine par `You can start: workshop-start 6`. Cette commande envoie une petite requête à Claude Sonnet. Ensuite, seule la partie 5 utilise la clé, avec Claude Haiku, et ce doit être une clé Anthropic (elle commence par `sk-ant-`). Si votre clé échoue, prévenir l'animateur·rice et continuer : les parties 1 à 4 n'en ont pas besoin.

4. Préparer la séance :

   ```bash
   workshop-start 6
   ```

   On doit voir `Ready for workshop 6.`, puis `First command: ./sorter setup`.

:::

:::info

**Pas de Codespace ?** Le même dépôt s'ouvre sur son propre ordinateur, avec Docker et VS Code : voir [Ouvrir les ateliers sur son propre ordinateur](/ressources/youth-ai-lab/guide-dev-containers).

:::

:::caution[Étape 2 : Installer le trieur]

Les bibliothèques qui règlent un modèle sont grosses (environ 2 Go avec le modèle). Elles ne sont pas dans le Codespace au départ : on les installe maintenant, une fois.

1. Taper :

   ```bash
   ./sorter setup
   ```

2. Pendant l'installation, écouter l'animateur·rice, qui présente les deux sections suivantes. Vous pourrez les lire plus tard.

Dans les 2 min 30 environ (de 92 à 151 s lors de nos essais, dans de vrais Codespaces et dans une copie à 2 processeurs), on doit voir `Libraries installed (... s)`, puis `Model ready (... s). Next: ./sorter baseline`. Chaque ligne compte sa propre étape.

:::

### Ce qu'est un modèle, et ce que veut dire entraîner

Un **modèle** est un programme dont le comportement n'est pas écrit sous forme de règles. Il est stocké comme une très longue liste de nombres, les **paramètres**. Le petit modèle du jour en a 117 653 760. Personne n'a choisi ces nombres un par un. Ils ont été trouvés par **entraînement**, et l'entraînement suit toujours la même boucle : le programme reçoit un exemple, donne sa réponse, mesure l'écart avec la bonne réponse, puis change ses nombres d'un tout petit peu, dans le sens qui réduit l'erreur. Il recommence ensuite avec l'exemple suivant.

Après de nombreux tours, les nombres gardent ce que les exemples ont en commun. Le **réglage fin** est la même boucle, lancée à partir d'un modèle déjà entraîné, avec peu d'exemples et de petits changements.

**À retenir** : les instructions, les documents et les outils changent ce qu'un modèle **lit**. L'entraînement change ce qu'un modèle **est**. Un texte dans le contexte peut se lire, se citer, se corriger ou se retirer. Avec ce qui est entré dans les nombres, on ne peut pas le faire : vous y reviendrez à la partie 5.

### Le petit modèle du jour

Le modèle du jour s'appelle `paraphrase-multilingual-MiniLM-L12-v2`. Il est publié par les auteurs de la bibliothèque sentence-transformers, sous licence Apache 2.0. Il connaît environ 50 langues, dont l'anglais, le français, l'espagnol, le catalan, l'italien et le néerlandais. Son nom dit à quoi il sert : une paraphrase est la même idée en d'autres mots. Sa page ne dit pas sur quels textes il a été entraîné.

Il ne fait qu'une chose : il transforme une phrase en une liste de 384 nombres. Voyez ces nombres comme une adresse sur une carte du sens. Une adresse sur une carte en papier a deux nombres ; celle-ci en a 384, si bien que personne ne peut dessiner la carte, mais l'idée est la même : **deux phrases de même sens reçoivent des adresses proches**, quels que soient leurs mots et leur langue. La **proximité** est un score qui peut aller de -1 à 1. Environ 0 veut dire peu de lien, et plus il est haut, plus les phrases sont proches pour ce modèle : il ne mesure pas un sens partagé. Ce n'est pas l'échelle de l'atelier 2, où 0,5 voulait déjà dire aucun lien. Dans notre essai :

| Phrase                  | Comparée à « Is the forest closed today? » (La forêt est-elle fermée aujourd'hui ?)       | Proximité |
| ----------------------- | ----------------------------------------------------------------------------------------- | --------- |
| Sa traduction française | « La forêt est-elle fermée aujourd'hui ? »                                                | 0,995     |
| La question contraire   | « Is the forest open today? » (La forêt est-elle ouverte aujourd'hui ?)                   | 0,86      |
| Autre chose             | « Can you help me with my maths homework? » (Tu peux m'aider pour mes devoirs de maths ?) | 0,04      |

La première ligne montre pourquoi un seul modèle suffit pour toutes les langues de la salle. La deuxième montre sa limite : le modèle donne plus de poids à « forêt » et « aujourd'hui » qu'à « ouverte » ou « fermée ». Pour trier, cela ne compte pas, car les deux sont des questions sur le jour même. C'est tout ce qu'il sait. Il ne connaît rien à la sécurité incendie, et il n'écrit rien.

Ne confondez pas deux sortes de nombres. Les 117 653 760 paramètres sont le modèle lui-même : ils restent les mêmes d'une phrase à l'autre, et seul l'entraînement les change. Les 384 nombres de l'adresse sont un résultat : le modèle calcule une nouvelle liste pour chaque phrase. L'entraînement change la première sorte de nombres, et c'est pour cela que la seconde sort différente.

**À retenir** : aujourd'hui, vous ne construisez pas un modèle. Vous partez d'un modèle qui sait déjà dire si deux phrases sont proches, et vous lui apprenez ce qu'il ne sait pas encore : vos quatre classes.

**Point de contrôle** : `Key OK` (ou l'animateur·rice est au courant pour votre clé), puis `Model ready`. Et vous savez dire en une phrase ce que l'entraînement fait aux nombres d'un modèle.

:::info[Notes pour l'animateur·rice]

Pendant l'installation, vous expliquez le modèle et les binômes écoutent. La proximité est un score qui peut aller de -1 à 1 : environ 0 veut dire que le modèle voit peu de lien, et plus haut veut dire plus proche pour ce modèle. Elle ne mesure pas un sens partagé.

:::

---

## Partie 2 : Un modèle qui n'a pas encore appris vos classes (★, 15 min)

**Objectif** : voir ce que fait le modèle avant de l'entraîner, et apprendre à lire un tableau de confusion. Ce score, le **score sans entraînement** (_baseline score_), est votre point de départ : sans lui, impossible de dire ce que l'entraînement a apporté.

### Ce que vous allez découvrir

- Un modèle qui ne connaît que les « sens proches » trie déjà bien beaucoup de messages.
- Un seul nombre (« 28 sur 32 ») cache les erreurs commises. Un tableau les montre.
- Toutes les erreurs ne se valent pas.

### Comment il trie sans entraînement

`messages/examples.md` contient 40 messages d'exemple, 10 par classe, dans six langues. Sans aucun entraînement, le trieur calcule l'adresse de chaque exemple. Il prend ensuite chaque message de test, calcule son adresse, cherche **l'exemple le plus proche**, et donne au message de test la classe de cet exemple. Rien n'est appris ici : il compare.

**À retenir** : c'est la même idée que le RAG de l'atelier 2, qui cherche lui aussi ce qui est le plus proche par le sens. Ici, le morceau le plus proche n'entre pas dans un contexte : il donne seulement sa classe au message.

:::caution[Étape 1 : Trier sans entraînement]

1. Ouvrir `messages/examples.md` et `messages/test.md`, côte à côte. Les messages de test sont d'autres phrases que les exemples, dans les mêmes six langues.
2. Taper :

   ```bash
   ./sorter baseline
   ```

Avec les messages du dépôt, on doit voir (essai du 31 octobre 2026) :

```text
28 of 32 messages in the right class.

Expected (rows) and chosen (columns):
                 topic      today     urgent  off-topic
      topic          8          0          0          0
      today          1          5          1          1
     urgent          0          0          8          0
  off-topic          0          0          1          7

Mistakes:
  expected today     chose topic     (0.61)  Are barbecues allowed this weekend?
  expected today     chose off-topic (0.56)  Avui puc anar d'excursió a Collserola?
  expected today     chose urgent    (0.70)  Oggi si può accendere un fuoco in campagna?
  expected off-topic chose urgent    (0.32)  Chi ha dipinto la Gioconda?

Emergencies missed: 0. This is the mistake that matters most.
```

:::

### Lire le résultat

Ce tableau s'appelle un **tableau de confusion**, car il montre quelles classes le trieur confond. Chaque ligne est la bonne classe, chaque colonne ce que le trieur a choisi. Sur la ligne `today`, 5 messages ont été classés `today`, et un seul est allé à chacune des classes `topic`, `urgent` et `off-topic`. Tout ce qui est sur la diagonale est juste, tout le reste est une erreur. Sous le tableau, chaque erreur est listée, puis la ligne `Emergencies missed` (urgences manquées).

| Ce que vous lisez     | Ce que cela dit                                                                                                                                        |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `28 of 32`            | Le score. Il dit combien, pas lesquels.                                                                                                                |
| Le tableau            | Où vont les erreurs. La case la plus grave est celle d'une urgence classée `off-topic` : ligne `urgent`, colonne `off-topic`, ici 0.                   |
| `Mistakes:`           | Chaque message mal classé, avec ce qui était attendu et ce qui a été choisi. Le nombre entre parenthèses est la proximité de l'exemple le plus proche. |
| `Emergencies missed:` | Le nombre d'urgences classées ailleurs.                                                                                                                |

Trois choses à remarquer dans ces erreurs. Trois des quatre sont des messages `today`, dont « Avui puc anar d'excursió a Collserola? » (Aujourd'hui, je peux aller en excursion à Collserola ?) et « Oggi si può accendere un fuoco in campagna? » (Aujourd'hui, peut-on allumer un feu à la campagne ?). « Are barbecues allowed this weekend? » (Les barbecues sont-ils autorisés ce week-end ?) est proche des exemples `topic`, car il parle des mêmes choses : **proche par le sens ne veut pas dire de même classe.** Ce qui fait d'un message un `today` est une petite part de son sens, et le modèle ne lui donne aucun poids particulier. C'est ce que l'entraînement va changer. Regardez ensuite « Chi ha dipinto la Gioconda? » (Qui a peint la Joconde ?) : son exemple le plus proche n'est qu'à 0,32, et il reçoit quand même une classe. Un classifieur choisit toujours, même quand rien ne convient. Enfin, aucune urgence n'est manquée ici, mais cela ne dit encore rien de vos messages.

:::info

**L'erreur qui compte le plus est une urgence classée ailleurs.** Un message sur la météo classé `topic` coûte quelques jetons. « Help, the field next to us is on fire » (Au secours, le champ à côté de chez nous brûle) classé `off-topic` peut recevoir un refus poli à la place de la réponse de sécurité. Lire cette ligne en premier, à chaque fois.

:::

**Point de contrôle** : pouvoir montrer dans le tableau la case « une urgence classée hors sujet », et dire combien de messages elle contient.

### Pour réfléchir

1. Pourquoi un modèle qui n'a appris aucune classe peut-il quand même classer « Au feu ! » comme urgent ?
2. Que préférez-vous : 30 justes sur 32 avec une urgence manquée, ou 28 justes sans aucune ?

:::info[Notes pour l'animateur·rice]

Lire le tableau ensemble sur le grand écran, et montrer la case « une urgence classée hors sujet ». Pour la seconde question, il n'y a pas de réponse unique : tout dépend de ce que coûte chaque erreur. Pour un chatbot utilisé par des jeunes, une urgence manquée est le pire cas.

:::

---

## Partie 3 : Écrire ses exemples, et un test pour un autre binôme (★★, 25 min)

**Objectif** : donner au modèle les exemples qui vont le former, dans sa langue, et écrire un test honnête. C'est le vrai travail du jour : l'entraînement lui-même prend une ou deux minutes, et il n'apprend que ce que vos exemples montrent.

### Ce que vous allez découvrir

- La qualité d'un modèle réglé vient de ses exemples, plus que de l'ordinateur.
- Un test n'est honnête que si le modèle n'a jamais vu ses messages.
- Les exemples difficiles sont ceux qui se trouvent près d'une frontière entre deux classes.

### Ce qu'est un exemple

À l'atelier 1, vous avez dit au chatbot quoi faire, en phrases. Ici, vous n'expliquez rien. Un exemple est un message et la classe à laquelle il appartient, et le modèle apprend seulement ce que les messages d'une classe ont en commun. Le mot `urgent` ne signifie rien pour lui : vous pourriez nommer la classe `A`, il apprendrait la même chose. Si tous vos exemples `urgent` parlent de feu, le modèle peut donc apprendre que `urgent` veut dire feu, et un·e jeune qui écrit « someone keeps hitting me » (quelqu'un n'arrête pas de me frapper) risque de ne pas être vu·e comme une urgence. **Ce que vos exemples laissent de côté, le modèle ne l'apprend pas.**

### Découvrir les fichiers

Ouvrir `messages/examples.md`. Le commentaire du haut rappelle les règles. Dessous, un titre donne la classe, et chaque ligne sous ce titre est un exemple de cette classe.

`messages/test.md` a la même forme, mais un autre rôle. Là, le titre est la bonne réponse que le trieur doit trouver, et le modèle n'apprend jamais de ces lignes. Le trieur ne lit ce fichier que pour vous donner un score.

### De bons exemples

Le modèle apprendra de chaque ligne de `messages/examples.md` : de bons exemples ressemblent donc aux messages qu'il recevra vraiment. Écrire comme écrit un·e jeune ou un·e habitant·e, avec de l'argot, des fautes, sans ponctuation, parfois en un mot (« help!! »), parfois en une phrase entière. Varier les mots, les longueurs et les langues pour une même classe. Surtout, ajouter les **cas difficiles**, ceux qui se trouvent près d'une frontière entre deux classes : une urgence qui contient une question (« il y a de la fumée, je fais quoi ? »), une personne en danger sans feu (« quelqu'un me suit »), un message hors sujet qui parle de feu (« allumer mes bougies d'anniversaire ? »), une question `today` qui ne dit pas « aujourd'hui » (« on peut faire un barbecue ce week-end ? »).

Une règle pour les deux fichiers : **chaque message est inventé, sans rien sur une personne réelle**. À la partie 5, `./sorter claude` envoie chaque message de test à Anthropic.

:::info

**Garder chaque message à 15 mots au plus.** Le modèle donne une adresse à chaque jeton (un mot ou une partie de mot), puis en fait la moyenne : une phrase urgente se noie donc dans un long message. Cela arrive bien avant la limite de 128 jetons (environ 100 mots en anglais), où le modèle cesse de lire. `./sorter train` signale un exemple plus long, et `./sorter test` liste un message de test plus long sans urgence sûre. Le Dépannage dit ce que le trieur en fait.

:::

:::caution[Étape 1 : Écrire ses exemples et son test]

1. **Ajouter au moins dix messages par classe** à `messages/examples.md`, dans sa langue, en 15 mots au plus, sous les quatre titres. Garder les titres exactement tels quels (`## topic`, `## today`, `## urgent`, `## off-topic`), et commencer chaque message par `- `. Enregistrer.
2. **Écrire un test pour un autre binôme** : sur papier ou dans la discussion de la séance, trois messages par classe, dans sa langue, que l'autre binôme n'a jamais vus. Écrire la classe au-dessus de chaque groupe : c'est la bonne réponse du test. Donner ses messages avec leurs classes, et recevoir les siens.
3. **Taper les messages de l'autre binôme** dans `messages/test.md`, sous les classes qu'il a données, à la place des messages de départ. Enregistrer.

:::

:::info

**Pourquoi un autre binôme ?** Vous écrivez les exemples et vous les connaissez : vos messages de test leur ressembleraient. Quelqu'un d'autre écrit comme le feront les vraies personnes, avec des mots que vous n'attendiez pas.

**Vérifier le titre au-dessus de chaque ligne.** `## off-topic` est le dernier titre : un message tapé tout à la fin du fichier tombe donc dessous. Dans notre essai, un seul message sur le feu laissé là a fait manquer 2 urgences au modèle (30 sur 32). Sous `## urgent`, le même message n'en a fait manquer aucune (31 sur 32). Un mauvais titre apprend la mauvaise chose, et rien ne vous prévient.

**La règle d'or : un message de test ne va jamais dans les exemples.** Sinon, le test mesure la mémoire, pas la compréhension. Si un message de test est aussi un exemple, mot pour mot, `./sorter baseline`, `./sorter train` et `./sorter test` le signalent. Une phrase reformulée n'est pas repérée.

:::

**Point de contrôle** : `examples.md` a au moins 20 messages par classe (10 au départ, 10 de vous), et `test.md` contient les messages d'un autre binôme. En retard au début de la partie 4 ? Arrêter d'écrire et entraîner avec ce que vous avez. Pas de test d'un autre binôme ? Garder le test de départ pour s'exercer : les messages difficiles de l'étape 4 de la partie 4 sont alors votre contrôle honnête.

### Pour réfléchir

1. Quelle classe a été la plus difficile à illustrer par des exemples ? Pourquoi ?
2. Quel message pourrait envoyer un·e jeune, auquel aucun de vos exemples ne ressemble ?

:::info[Notes pour l'animateur·rice]

Employer les mêmes mots que la fiche. `urgent` : un feu en cours, ou une personne en danger ou en détresse, même sans feu. `today` : une question qui a besoin des faits du moment, ce soir ou ce week-end compris. Les binômes écrivent d'abord des exemples faciles. Pousser vers les cas difficiles : une urgence qui contient une question, une personne en danger sans feu, une question `today` sans le mot aujourd'hui, un message hors sujet qui parle de feu. Lire les lignes que chaque binôme ajoute sous `## urgent` : si elles parlent toutes de feu, demander des personnes en danger et des appels à l'aide courts.

**Quand les binômes commencent à écrire, avant l'échange, le dire une fois : les exemples et les messages de test sont inventés, sans rien sur une personne réelle.** `./sorter claude` envoie chaque message de test à Anthropic.

Les appels à l'aide courts sont le manque des exemples de départ, qui restent tels quels : `help!!` (au secours !!), `Help me please.` (Aide-moi, s'il te plaît.) et `aidez moi` sortent en `off-topic`. Selon la langue, le résultat change : `aiuto` (à l'aide, en italien) sort en `urgent` à 0,41, donc réponse de sécurité ; `hulp` (en néerlandais) et `ajuda` (en catalan) sortent en `off-topic` à 0,43 et 0,45, donc pas sûr, au chatbot et sans refus. Essayer ceux de votre langue pendant votre parcours de la veille. Chaque binôme teste donc des appels à l'aide courts dans sa langue avec `./sorter try`, à l'étape 4 de la partie 4.

Garder les messages à 15 mots au plus (`./sorter train` signale un exemple plus long) : le modèle fait la moyenne des morceaux d'un message, une urgence se noie donc dans un long message. Dans [notre mesure](https://youth-ai-lab.github.io/yal-workshop/measures/2026-10-31-finetune-long-messages/README.md), le modèle qui lit le message entier a trouvé 62 urgences sur 240, et 11 sur 30 avec 20 jetons de texte autour. Un message de plusieurs phrases est aussi lu phrase par phrase, et un long message sans urgence sûre va au chatbot : le risque passe aux instructions du chatbot, ce qui n'a pas été mesuré. Ces règles vont dans la section `Bans and constraints` du `AGENTS.md` du chatbot ([atelier 1](/ressources/youth-ai-lab/construire-chatbot-1-instructions)). La règle exacte est dans le Dépannage.

Vérifier aussi la fin de chaque fichier : `## off-topic` est le dernier titre, un message tapé tout à la fin tombe donc dessous.

:::

---

## Partie 4 : Régler, tester, améliorer (★★, 30 min)

**Objectif** : régler le modèle sur ses exemples, comprendre ce qui a changé à l'intérieur, voir ce qu'il a appris, et le rendre meilleur.

:::info[Notes pour l'animateur·rice]

Avant l'étape 1, les binômes lisent « Ce que l'on entraîne » et « Comment se passe l'entraînement » (environ 4 minutes). Ils prédisent, lancent `baseline`, puis `train`. Une fois `train` lancé, 5 minutes sur grand écran : les deux diapositives sur le score, le gradient et l'arrêt de l'entraînement. Le premier entraînement dure environ 2 minutes avec 80 exemples, votre présentation 5 : **quand les barres s'arrêtent, les binômes tapent `./sorter test` et continuent d'écouter.**

Après votre présentation : deux scores par binôme au tableau (score sans entraînement, premier score), l'étape 2 montrée une fois sur votre écran (`ls -la ~/.workshop-finetune/model`), puis un tour sur deux erreurs au plus. Les binômes lisent « Ce que l'entraînement change », jusqu'à la carte (ici, la fin du paragraphe « Regardez la première ligne »), pendant leur second entraînement ; un binôme sans rien à améliorer le lit à la place de l'étape 3. Après 1:15, personne ne lance d'entraînement. Afficher ou publier vos messages difficiles : les binômes les collent après `./sorter try`. À 1:18, tout le monde passe aux messages difficiles, même au milieu de l'étape 3. Un entraînement en cours à 1:18 va jusqu'au bout : montrer pendant ce temps les messages difficiles sur votre écran.

La partie 5 commence à 1:25, la clôture à 1:40, et les 5 minutes de marge à 1:55. Les 30 minutes de la partie 4 et les arrêts à 1:15 et à 1:18 sont des propositions : aucun groupe n'a encore joué cet atelier. Si le groupe est en retard à 0:55, montrer la diapositive « What do you train? » à la place de la lecture. Les binômes qui écrivent encore à 0:55 s'arrêtent et entraînent avec ce qu'ils ont. Un binôme sans test échangé garde le test de départ pour s'exercer, et les messages difficiles sont son contrôle honnête. Un binôme arrivé à 1:15 sans avoir lu « Ce que l'entraînement change » le lit après les messages difficiles.

:::

### Ce que vous allez découvrir

- Un trieur a deux parties, et l'entraînement change les deux, de deux façons différentes.
- Régler un petit modèle prend une ou deux minutes, sur les processeurs du Codespace.
- L'entraînement du corps suit un seul nombre, le score de l'entraînement, et le fait baisser au fil des tours, jusqu'à un nombre de tours fixé d'avance.
- Un score de l'entraînement plus bas ne veut pas toujours dire un meilleur trieur.
- Le tableau de confusion dit quels exemples écrire ensuite.
- Une seconde série d'exemples peut améliorer le modèle, mais elle abîme aussi votre test.

### Ce que l'on entraîne : le corps et la tête

:::info

Lire cette section et la suivante avec son binôme avant le point 1 de l'étape 1 (environ 4 minutes). Elles expliquent ce que `./sorter train` va faire.

:::

Le trieur a deux parties. Le **corps** est le modèle de la partie 1, qui transforme une phrase en 384 nombres. La **tête** est un très petit modèle que l'on ajoute dessus. Elle lit ces 384 nombres et donne une valeur par classe. Le corps connaît le langage, et l'entraînement lui apprend à rapprocher les messages d'une même classe. La tête connaît vos quatre classes.

|                                     | Le corps                            | La tête                          |
| ----------------------------------- | ----------------------------------- | -------------------------------- |
| Ce que fait chaque partie           | Transforme une phrase en adresse    | Transforme une adresse en classe |
| Taille                              | 117 653 760 nombres                 | 1 540 nombres                    |
| Sur le disque, après l'entraînement | `model.safetensors`, environ 470 Mo | `model_head.pkl`, environ 7 Ko   |
| Avant aujourd'hui                   | Déjà entraîné par ses auteurs       | N'existe pas encore              |
| Aujourd'hui                         | Changé un peu                       | Construite à partir de rien      |

### Comment se passe l'entraînement

La méthode s'appelle **SetFit**, et elle travaille en deux temps : vos exemples forment des paires, le corps change un peu, chaque exemple reçoit sa nouvelle adresse, puis la tête apprend les frontières entre les quatre classes. Le trieur final est le corps plus la tête.

**D'abord, le corps, avec des paires de messages.** Le corps donne des adresses, pas des classes : on ne peut pas lui demander « quelle est la classe de ce message ? », seulement « ces deux messages sont-ils proches ? ». Les paires transforment vos exemples en cette question, et elles font de quelques exemples de nombreux tours d'entraînement. Avec 40 exemples, SetFit forme 800 paires : 400 de même classe, et 400 de classes différentes. Pour chaque paire, il connaît la cible : une proximité de 1 pour la même classe, de 0 pour des classes différentes. Il prend 16 paires à la fois, mesure l'écart entre leur proximité et la cible, et change d'un tout petit peu les nombres du corps. C'est la boucle de la partie 1. Avec 800 paires, 16 à la fois, on obtient **50 tours**, le nombre de la longue barre de progression. Chaque exemple donne 20 paires : deux fois plus d'exemples prennent donc environ deux fois plus de temps.

**Ensuite, la tête, avec des frontières.** Les adresses sont maintenant meilleures, et le corps ne change plus. SetFit calcule l'adresse de chaque exemple, puis entraîne la tête sur ces adresses. La tête trace les frontières entre les quatre classes sur la carte du sens. Elle contient 385 nombres par classe, 4 × 385, soit 1 540 en tout : un poids pour chacun des 384 nombres de l'adresse, plus une valeur de départ. L'entraînement cherche les nombres qui donnent la plus grande part à la bonne classe de chaque exemple. C'est un calcul classique appelé régression logistique. Il prend environ une seconde, et il n'a pas de barre à lui. Pour un nouveau message, la tête donne quatre parts dont la somme vaut 1. La plus grande donne la classe, et c'est la **confiance** qu'affiche `./sorter try`. À 0,98, presque tout va à une classe. À 0,46, le trieur hésite : les autres classes se partagent le reste.

**À retenir** : le trieur sort une classe, il ne peut donc pas citer de source, et on corrige une erreur en changeant les exemples et en entraînant de nouveau. Cet exercice ne teste pas ce qu'un modèle entraîné peut révéler de ses exemples, et le dossier du modèle garde un `README.md` qui en recopie certains (étape 2).

### Le score de l'entraînement, et le gradient

:::info

Avant cette section, faire les points 1 à 3 de l'étape 1, plus bas. L'animateur·rice présente cette section et la suivante sur grand écran, pendant 5 minutes, dès le début de votre premier entraînement. Pas besoin de les lire pendant la séance : y revenir après l'atelier.

:::

La boucle de la partie 1 demande « quelle est l'erreur ? ». Pour répondre, l'entraînement a besoin d'un seul nombre, calculé de la même façon à chaque tour. Ce nombre est le **score de l'entraînement**. En apprentissage automatique, on l'appelle la **fonction de perte** (_loss function_) ; dans d'autres domaines, on rencontre la même idée sous le nom de **fonction de fitness** (_fitness function_). Ici, plus il est bas, mieux c'est, et 0 serait parfait. (Le score de votre test, comme 28 sur 32, marche dans l'autre sens : plus il est haut, mieux c'est.) Choisir ce score, c'est choisir ce que « mieux » veut dire : l'entraînement fera tout ce qui le fait baisser, et rien d'autre.

Pour une paire, le score se calcule en trois gestes : prendre la proximité des deux messages, lui retirer la cible (1 pour la même classe, 0 pour des classes différentes), et multiplier cet écart par lui-même. Voici deux vraies paires tirées des 40 exemples, avant et après l'entraînement :

| Deux messages                                                                                                                                                                                        | Cible | Proximité avant | Score de l'entraînement avant | Proximité après | Score de l'entraînement après |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | --------------- | ----------------------------- | --------------- | ----------------------------- |
| « Je me sens très mal et je ne sais pas à qui parler » / « Help, the field next to us is on fire » (Au secours, le champ à côté de chez nous brûle)                                                  | 1     | 0,144           | 0,73                          | 0,522           | 0,23                          |
| « What is the fire danger level today? » (Quel est le niveau de danger d'incendie aujourd'hui ?) / « How can I protect my garden from wildfires? » (Comment protéger mon jardin des feux de forêt ?) | 0     | 0,525           | 0,28                          | 0,195           | 0,04                          |

Multiplier l'écart par lui-même fait compter les grands écarts bien plus que les petits : un écart de 0,8 coûte 0,64, et un écart de 0,2 coûte 0,04, seize fois moins. Les paires les plus loin de leur cible poussent donc le plus fort sur les nombres. Le score d'un tour est la moyenne de ses 16 paires.

Les nombres changent ensuite. Pour chaque nombre, un calcul donne le **gradient** : la pente du score pour ce nombre, qui dit dans quel sens le score descend, et à quelle vitesse. Chaque nombre qui a une pente fait alors un très petit pas vers le bas. C'est la **descente de gradient**. Imaginez une descente de colline dans un brouillard épais : vous ne voyez pas la vallée, vous sentez seulement la pente sous vos pieds, alors vous faites un petit pas vers le bas, puis vous sentez de nouveau la pente. La taille générale des pas est un réglage fixé d'avance. Ici, il monte dans les premiers tours, puis descend vers zéro, si bien que les derniers tours ne font que des ajustements fins. La tête a son propre score, calculé autrement, avec la même idée : donner la plus grande part possible à la bonne classe de chaque exemple.

### L'arrêt de l'entraînement

Rien ne décide en chemin que le modèle est assez bon : le nombre de tours est fixé d'avance dans `tools/sorter.py`. C'est un seul passage sur les paires, soit 50 tours pour 40 exemples et 100 pour 80. L'entraînement tient ainsi en une minute ou deux.

Dans de plus grands entraînements, on met de côté quelques messages, on calcule régulièrement le score sur eux, et on s'arrête quand ce score ne baisse plus. Ici, nous n'avons rien arrêté : nous avons seulement regardé. Nous avons calculé le score sur les mêmes paires tout au long, une fois pour les 40 exemples et une fois pour les 32 messages de test, pendant un entraînement aux réglages de `./sorter train`, puis pendant un entraînement plus long de 200 tours. N'utilisez pas votre propre test de cette façon : choisir le nombre de tours d'après votre test réglerait le modèle sur lui, comme à l'étape 3. La [figure de la page de l'atelier](https://github.com/Youth-AI-Lab/yal-workshop-finetune#when-does-the-training-stop) trace ces courbes :

| Entraînement | Score des paires des exemples | Score des paires des messages de test | Résultat du test                  |
| ------------ | ----------------------------- | ------------------------------------- | --------------------------------- |
| 50 tours     | de 0,27 à 0,12                | de 0,28 à 0,19                        | 32 sur 32, aucune urgence manquée |
| 200 tours    | de 0,27 à presque 0           | de 0,28 à 0,07                        | 30 sur 32, 1 urgence manquée      |

La courbe des exemples est ce dont le modèle apprend, celle des messages de test est ce qu'il n'a jamais vu. Elles partent ensemble, puis se séparent : le modèle fait toujours mieux sur ses propres exemples. Avec 200 tours, la courbe des exemples arrive presque à 0 : le modèle a presque appris ces 40 exemples par cœur.

Quand un modèle continue de progresser sur ses exemples mais devient moins bon sur de nouveaux messages, on parle de **surapprentissage** (_overfitting_). La courbe des messages de test ne le montre pas ici, car elle continue de baisser : seul le 30 sur 32 peut en être un premier signe. Elle ne baisse presque plus après environ 150 tours. Nous ne sommes pas allés plus loin : impossible de dire ce que d'autres tours apporteraient. La courbe des 50 tours s'aplatit elle aussi à la fin, car les pas tombent vers zéro. Sur l'entraînement long, ils restent grands plus longtemps : ses courbes sont donc plus basses au tour 50.

Regardez maintenant la dernière colonne. Après 200 tours, le score de l'entraînement est bien plus bas, mais sur ces 32 messages de test le trieur fait moins bien : 30 sur 32 avec 1 urgence manquée, contre 32 sur 32 et aucune après 50 tours. Un écart de deux messages, sur un seul essai, ne prouve pas grand-chose. Il montre tout de même qu'**un meilleur score de l'entraînement ne garantit pas un meilleur trieur** : ce score mesure des paires, et ce qui vous intéresse est la classe de chaque message.

**À retenir** : le score de l'entraînement n'est qu'un substitut de ce que vous voulez vraiment. L'entraînement le fait baisser à l'aveugle : un mauvais titre dans `examples.md` s'apprend aussi bien qu'un bon. Seul votre test, sur des messages que le modèle n'a jamais vus, dit si le trieur s'est amélioré, et c'est vous qui décidez quand il est assez bon.

:::caution[Étape 1 : Prédire, régler, tester]

1. **Avant de commencer, prédire** sur papier : combien de messages de test seront justes, et combien d'urgences manquées ?
2. Relancer la comparaison sans entraînement, sur le nouveau test. Noter ce **score sans entraînement** et la ligne `Emergencies missed` :

   ```bash
   ./sorter baseline
   ```

3. Régler le modèle :

   ```bash
   ./sorter train
   ```

   Regarder le grand écran : la longue barre du terminal compte les tours qu'explique l'animateur·rice. **Quand l'entraînement se termine, commencer le point 4 et continuer d'écouter.**

   On doit voir `Fine-tuning on ... examples (topic ..., today ..., urgent ..., off-topic ...)...`, quelques barres de progression (la longue compte les tours : 50 pour 40 exemples, 100 pour 80), puis `Fine-tuned in ... s`. Lors de nos essais : de 61 à 65 s avec les 40 exemples de départ, 132 s avec 80.

4. Tester :

   ```bash
   ./sorter test
   ```

   On doit voir le même tableau que sans entraînement, pour le modèle réglé. Avec les messages du dépôt, lors de nos essais : 32 sur 32, aucune urgence manquée, de 7 à 9 ms par message dans un lot de 32. Sur votre propre test, vous verrez sans doute des erreurs. Le score obtenu est votre **premier score** : le seul test honnête de votre modèle, et celui que vous comparez à Claude à la partie 5. Ici, le nombre entre parenthèses n'est plus une proximité : c'est la confiance du trieur. `Not sure (below 0.5)` liste les messages de 15 mots ou moins à confiance faible, non classés `urgent`, que leur classe soit juste ou non. `Too long to sort` liste les messages plus longs sans urgence sûre. `Right but below 0.5` liste les urgences bien classées, avec peu de marge. L'étape 4 et le Dépannage expliquent ce qu'en ferait un chatbot.

   Notre 32 sur 32 ne dit pas grand-chose : ces messages de test ont été écrits avec les exemples. Votre test, écrit par un autre binôme, est celui qui compte. Attendez-vous à un score plus bas.

5. **Comparer** avec le score sans entraînement et avec la prédiction. Lire d'abord `Emergencies missed`, puis les cases du tableau qui ont changé. Votre test a 12 messages : un ou deux messages de différence ne prouvent pas grand-chose. Écrire votre score sans entraînement et votre premier score au tableau, avec les urgences manquées.

:::

:::caution[Étape 2 : Regarder ce qu'a produit l'entraînement]

L'animateur·rice le montre une fois sur grand écran, avec :

```bash
ls -la ~/.workshop-finetune/model
```

Parmi les fichiers, trouver `model.safetensors`, le corps (environ 470 Mo), et `model_head.pkl`, la tête (environ 7 Ko). Le modèle reste dans le Codespace jusqu'à ce que celui-ci soit supprimé (partie 6, étape 1).

:::

:::info

**Le dossier garde certaines de vos phrases.** À côté du modèle, SetFit écrit une description, `README.md`, qui recopie des exemples : 16 sur 40 dans notre essai. Le modèle ne lit jamais ce fichier, mais toute personne qui reçoit le dossier le peut.

:::

:::caution[Étape 3 : Améliorer]

Si vous avez des lignes sous `Mistakes:` ou `Right but below 0.5`, en prendre deux au plus, les urgences d'abord. Pour chacune, ajouter deux exemples qui lui ressemblent (pas le message de test lui-même) sous le bon titre. Régler et tester de nouveau : chaque entraînement repart du modèle d'origine, avec tous vos exemples. Écrire ce **score amélioré** sur votre papier, pas au tableau. Personne ne lance d'entraînement après 1 h 15 de séance.

Tout le monde lit « Ce que l'entraînement change », plus bas, jusqu'à la carte (ici, la fin du paragraphe « Regardez la première ligne ») : pendant ce second entraînement, ou maintenant s'il n'y en a pas.

:::

:::info

**Le score amélioré n'est pas un test honnête.** Vous avez lu les erreurs du test pour écrire de nouveaux exemples : le modèle est maintenant réglé sur ce test. Pour savoir ce qu'il vaut vraiment, il lui faut des messages que personne dans votre binôme n'a vus : les messages difficiles de l'animateur·rice, à l'étape 4.

:::

:::caution[Étape 4 : Essayer de nouveaux messages]

Essayer d'abord les messages difficiles de l'animateur·rice, puis les vôtres, avec des appels à l'aide courts dans votre langue. Si vous travaillez seul·e, demander à quelqu'un qui n'a pas vu vos exemples de les écrire. Taper :

```bash
./sorter try
```

Taper ou coller ensuite un message et appuyer sur Entrée, autant de fois que vous le voulez. Une ligne vide arrête.

Pour chaque message, on voit la classe, la confiance (de 0,25 à 1 : avec quatre classes, la plus grande part vaut au moins un quart), et ce qui se passerait dans un vrai chatbot. Dans notre essai, un message sur de la fumée derrière une école sort en `urgent`, confiance 0,98. `help!!` (au secours !!) sort en `off-topic`, confiance 0,54, avec un refus qui dit quand même qui peut aider. Un message de détresse sort en `urgent`, confiance 0,46 : pas sûr, mais réponse de sécurité quand même.

Sous 0,5, le trieur n'est pas sûr : le message irait au chatbot. L'exception est un message de 15 mots ou moins classé `urgent` : il recevrait quand même la réponse de sécurité. Regardez `help!!` : le trieur a choisi `off-topic`, une vraie erreur. La confiance dit à quel point le trieur est sûr de lui, pas s'il a raison : dans notre essai, « Help me please. » (Aide-moi, s'il te plaît.) est sorti en `off-topic` à 0,75, et « aidez moi » à 0,68.

Taper les messages après `./sorter try`, pas sur la même ligne. Sur la ligne de commande, un `!` entre guillemets (`"Au feu !"`) est lu par le terminal lui-même, et la commande attend avec `dquote>`.

:::

### Ce que l'entraînement change

Nous avons mesuré ce que l'entraînement a changé dans le corps, avec les 40 exemples de départ. Presque tous les nombres ont bougé (99,9 %), mais la plupart n'ont rien appris. Environ 96 millions forment une table, avec une ligne par jeton. Seules 281 lignes de cette table, sur 250 037, correspondent à des jetons présents dans les 40 exemples de départ : elles ont bougé d'environ 0,4 %. Toutes les autres lignes ont une pente de 0. Elles rétrécissent seulement d'une toute petite quantité (0,0005 %), à cause d'un réglage de SetFit qui tire tous les nombres vers zéro. Les 21 millions de nombres des 12 couches qui lisent la phrase ont bougé de 0,27 % à 0,46 %. Les adresses bougent pourtant assez pour que cela se voie :

| Proximité, en moyenne                    | Avant l'entraînement | Après l'entraînement |
| ---------------------------------------- | -------------------- | -------------------- |
| Deux exemples de la même classe          | 0,39                 | 0,61                 |
| Deux exemples de classes différentes     | 0,25                 | 0,20                 |
| Un exemple `today` et un exemple `topic` | 0,38                 | 0,18                 |

Et avec de vraies phrases :

| Deux messages                                                                                                                                                                                        | Même classe ? | Avant | Après |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ----- | ----- |
| « Je me sens très mal et je ne sais pas à qui parler » / « Help, the field next to us is on fire » (Au secours, le champ à côté de chez nous brûle)                                                  | oui, `urgent` | 0,14  | 0,52  |
| « Mag ik vandaag een kampvuur maken? » (Puis-je faire un feu de camp aujourd'hui ?) / « Quel est le niveau de risque incendie aujourd'hui ? »                                                        | oui, `today`  | 0,32  | 0,67  |
| « What is the fire danger level today? » (Quel est le niveau de danger d'incendie aujourd'hui ?) / « How can I protect my garden from wildfires? » (Comment protéger mon jardin des feux de forêt ?) | non           | 0,53  | 0,20  |

Regardez la première ligne. Une personne en détresse et un champ en feu ont peu de sens en commun. Pour ce modèle, ils en ont maintenant, parce que vous les avez mis tous les deux sous `urgent` : **la carte du sens montre maintenant aussi vos classes.** La [figure de la page de l'atelier](https://github.com/Youth-AI-Lab/yal-workshop-finetune#what-the-training-changes) le fait voir. Elle ramène les 384 nombres de chaque message sur une feuille de papier, et seule une partie de l'information survit (un tiers) : à lire comme une tendance, pas comme des distances. Les deux cartes ont les mêmes axes, si bien qu'un point placé ailleurs sur la carte de droite a vraiment bougé. Les formes pleines sont les messages dont le modèle a appris, les formes vides des messages de test qu'il n'a jamais vus. Avant l'entraînement, chaque classe penche déjà de son côté, mais les groupes se touchent, surtout `off-topic` et `urgent`. Après, les quatre groupes sont plus éloignés, et les messages de test se placent dans le groupe de leur classe.

Il y a deux limites. Les paires demandent une proximité de 1 ou de 0, et ces petits tours n'y arrivent pas : deux exemples de la même classe finissent à 0,61. Et toutes les paires ne bougent pas dans le bon sens. `off-topic` s'est rapproché de `today` (de 0,15 à 0,28) : « Is the forest closed today? » (La forêt est-elle fermée aujourd'hui ?) et « Can you help me with my maths homework? » (Tu peux m'aider pour mes devoirs de maths ?) sont passés de 0,04 à 0,26. Il s'est aussi rapproché de `urgent` (de 0,13 à 0,21). Sur la carte, ces deux paires paraissent plus éloignées : elle ne garde qu'un tiers de l'information. Une question `topic` et un message `urgent` sur un feu près d'une maison sont restés aussi proches qu'avant (de 0,70 à 0,71).

Le corps ne fait pas tout le travail non plus. Nous avons allumé et éteint chaque partie, sur les 32 messages de test :

| Ce qui trie                                                                 | Score     | Urgences manquées |
| --------------------------------------------------------------------------- | --------- | ----------------- |
| Le corps avant l'entraînement, exemple le plus proche (`./sorter baseline`) | 28 sur 32 | 0                 |
| Le corps avant l'entraînement, avec une tête entraînée                      | 31 sur 32 | 0                 |
| Le corps après l'entraînement, exemple le plus proche, sans tête            | 30 sur 32 | 1                 |
| Le corps après l'entraînement, avec une tête entraînée (`./sorter test`)    | 32 sur 32 | 0                 |

Un écart d'un ou deux messages ne prouve pas grand-chose sur 32 messages écrits avec les exemples. Chaque partie fait sa part, et un test sert à le vérifier.

**Point de contrôle** : deux scores au tableau (sans entraînement, premier), et le nombre d'urgences manquées pour chacun. Et vous savez dire ce qu'a appris le corps, et ce qu'a appris la tête.

### Pour réfléchir

1. La seconde série d'exemples a-t-elle aidé ? Quels exemples ont fait la différence ?
2. Un score de 100 % sur votre test : le modèle est-il parfait ? Que faudrait-il savoir de plus ?
3. Le trieur se trompe sur un vrai message. Que faites-vous exactement pour le corriger, et où va la correction ?

:::info[Notes pour l'animateur·rice]

Pendant votre présentation, ne rien demander aux binômes. Garder « qu'apprend le corps, et qu'apprend la tête ? » pour le second entraînement ou la discussion. Si un binôme demande ce qu'est une fonction de fitness : le score de l'entraînement (la fonction de perte) est la même idée, et un score plus bas est meilleur. Le nombre de tours est fixé d'avance. Dans notre essai, 200 tours ont donné un score bien plus bas, mais 30 sur 32 avec 1 urgence manquée, contre 32 sur 32 avec 50 tours : un seul essai, deux messages, donc une alerte et pas une preuve. Si un binôme confond les deux : le score de l'entraînement est meilleur quand il est bas, le test quand il est haut.

Ne pas dire que le corps fait tout le travail : sur ces messages, le corps non réglé avec une tête entraînée arrive à 31 sur 32, contre 28 sans entraînement. Ne pas dire que des classes différentes s'éloignent toujours : `off-topic` se rapproche de `today` et de `urgent`.

Ne pas dire que les nombres ne stockent pas vos phrases : le trieur sort une classe, il ne peut donc pas citer de source, et cet exercice ne teste pas ce qu'un modèle entraîné peut révéler. En montrant l'étape 2, désigner `README.md` dans la liste (celui du dossier du modèle, pas la page de l'atelier) : SetFit y a recopié 16 des 40 exemples.

Les chiffres de la page viennent d'une [mesure du 31 octobre 2026](https://youth-ai-lab.github.io/yal-workshop/measures/2026-10-31-finetune-what-changes/README.md) (image `2026.10.39`, 2 processeurs, 8 Go, sans clé ni appel payant). Sur 117 653 760 nombres, 117 505 726 ont bougé (99,874 %) ; les seuls qui n'ont pas bougé sont dans une partie dont le modèle ne se sert pas. Cela ne veut pas dire que 99,9 % des nombres ont appris : ce qui apprend, ce sont les 281 lignes de la table et les 12 couches.

**Après la partie 4.** « Votre score amélioré est meilleur : est-il honnête ? » Non : le binôme a écrit de nouveaux exemples après avoir lu les erreurs de ce test, et le modèle est réglé dessus. Le premier score est le score honnête, et c'est lui qu'on compare à Claude. Vos messages difficiles viennent en dernier : personne ne les a vus. « 100 % sur votre test : est-il parfait ? » Non : le test tient en quelques messages, écrits par des personnes de cette salle. Les vraies personnes en écriront d'autres. C'est pourquoi, une fois en ligne, une personne relit les erreurs et écrit de nouveaux exemples inventés qui montrent le même schéma. Les vrais messages de jeunes ne deviennent pas des exemples, même sans les noms.

:::

---

## Partie 5 : Le grand modèle, sans entraînement (★★★, 15 min)

**Objectif** : comparer son petit modèle réglé avec un grand modèle qui n'a jamais vu ses exemples, et décider quand chacun vaut la peine.

### Ce que vous allez découvrir

- Un grand modèle trie bien à partir d'une courte description des classes, sans aucun exemple.
- Chaque message qu'il trie coûte de l'argent, prend du temps et quitte le Codespace.
- Le bon choix dépend de vos besoins, pas du modèle qui serait « meilleur ».

### Trier sans entraînement : les nombres ou le contexte

Claude a été entraîné une fois, par Anthropic, à très grande échelle, et personne ne le change pour vous. Pour le faire trier, vous faites ce que vous avez fait à l'atelier 1 : vous écrivez des instructions. `./sorter claude` lui envoie une courte description des quatre classes, puis un message de test, et lui demande un mot. La description entre dans le **contexte**, comme votre `AGENTS.md`. Vous voilà revenu·e à la question de la série. Pour lire cette description, ouvrir `tools/sorter.py` et chercher `CLAUDE_INSTRUCTIONS`.

La même connaissance, « ce qu'est une urgence pour ce chatbot », peut donc vivre à deux endroits :

|                       | Dans les nombres (votre modèle réglé)                     | Dans le contexte (Claude)                     |
| --------------------- | --------------------------------------------------------- | --------------------------------------------- |
| Comment elle y arrive | Des exemples et un entraînement                           | Une description, en phrases                   |
| Peut-on la lire ?     | Non : on lit les exemples, pas ce que le modèle en a fait | Oui : c'est du texte                          |
| Pour la changer       | Changer les exemples, entraîner de nouveau                | Changer une ligne                             |
| Quand elle est fausse | Le test le montre, les nombres ne l'expliquent pas        | Le test le montre, et le texte peut se relire |

**À retenir** : aucun des deux endroits n'est sûr en lui-même. Claude peut mal lire une description, et un petit modèle peut manquer ce que ses exemples laissent de côté. Dans les deux cas, seul le test vous le dit.

:::caution[Étape 1 : Faire trier Claude]

1. Taper :

   ```bash
   ./sorter claude
   ```

   Claude (`claude-haiku-5-5`, le plus petit Claude actuel) n'a jamais vu vos exemples.

   On doit voir le même tableau, puis le temps, les jetons et le coût estimé, pour le test et pour 1 000 messages. Lors de nos passages du 31 octobre 2026, avec les messages du dépôt, le résultat a été le même à chaque fois : 30 sur 32, et **2 urgences manquées**, « Someone at school keeps hitting me and I'm afraid » (Quelqu'un à l'école n'arrête pas de me frapper et j'ai peur) et « Un ragazzo mi minaccia e ho paura » (Un garçon me menace et j'ai peur), classées `off-topic`. De 0,8 à 0,9 s par message, 0,0007 dollar pour les 32 messages, soit environ 0,02 dollar pour 1 000 messages.

2. Remplir la comparaison au tableau. Pour votre modèle, écrire votre **premier score** (partie 4, étape 1, point 5). Le score amélioré est réglé sur ces messages de test, et Claude ne les a jamais vus.

   |                           | Votre modèle réglé                               | Claude, sans entraînement   |
   | ------------------------- | ------------------------------------------------ | --------------------------- |
   | Bonnes réponses au test   |                                                  |                             |
   | Urgences manquées         |                                                  |                             |
   | Temps par message         | de 7 à 9 ms dans un lot                          |                             |
   | Coût pour 1 000 messages  | aucun par message                                |                             |
   | Fonctionne sans le réseau | oui                                              | non                         |
   | Où se fait le tri         | dans le Codespace                                | chez Anthropic              |
   | Ce qu'il a fallu préparer | vos exemples, une ou deux minutes d'entraînement | une description des classes |

:::

:::info

**Ce coût est par message seulement.** Dans le Codespace, le trieur tourne pendant que vous travaillez. Dans un vrai chatbot, il lui faut un ordinateur qui reste allumé, et quelqu'un pour s'en occuper. Nous n'avons pas mesuré ce que cela coûte. Au prix mesuré, Claude reviendrait à environ 0,20 dollar pour 10 000 messages.

:::

:::info

**Ce qui sort du Codespace.** `./sorter claude` envoie chaque message de test à Anthropic. Votre petit modèle trie dans le Codespace. Mais dans un vrai chatbot, les messages `topic`, `today`, pas sûrs et longs arrivent ensuite au grand modèle : pour des messages écrits par des jeunes, regardez donc les deux modèles.

:::

**Point de contrôle** : le tableau est rempli, et vous savez dire en une phrase quand vous choisiriez chacun.

### Pour réfléchir

1. Lors de notre essai, Claude a manqué deux urgences : des menaces et des violences, sans feu. Sa première ligne dit « a chatbot about wildfire prevention » (un chatbot sur la prévention des feux de forêt). Pourquoi aurait-il pu les classer `off-topic` ? Pourquoi le petit modèle ne l'a-t-il pas fait, dans notre essai ?
2. Votre chatbot reçoit 10 000 messages par mois. Quel trieur utiliseriez-vous, et pourquoi ?
3. Vous ajoutez une cinquième classe la semaine prochaine. Que faut-il faire avec chacun ? (Le `./sorter` du jour n'accepte que ses quatre titres : ils sont écrits dans `tools/sorter.py`.)

:::info[Notes pour l'animateur·rice]

« Claude a manqué deux urgences, votre petit modèle aucune : Claude est-il moins bon ? » Pas vraiment. Les deux messages parlent de menaces et de violences sans feu, l'un à l'école. Claude n'avait que la description, qui commence par « a chatbot about wildfire prevention » : c'est peut-être pour cela qu'ils lui ont paru hors sujet (la cause n'a pas été mesurée). Le petit modèle a appris d'exemples où des personnes en détresse sont `urgent`, sans feu. Chacun échoue à sa façon : Claude là où la description est floue, le petit modèle là où les exemples manquent. Trois passages ont donné le même résultat, mais Claude ne répond pas toujours de la même façon.

Cette description est un exemple d'atelier, pas une consigne vérifiée. Avant tout réemploi, la changer dans `tools/sorter.py`, puis la tester sur des urgences, avec et sans feu, que personne n'a utilisées pour l'écrire. Nous n'avons pas mesuré de description corrigée.

« 10 000 messages par mois ? » Le petit modèle ne coûte rien par message, n'a pas besoin de réseau, et le tri reste sur sa machine, mais il lui faut un ordinateur qui reste allumé, et quelqu'un pour s'en occuper (coût non mesuré : à compléter). Au prix mesuré, Claude reviendrait à environ 0,20 dollar. La réponse dépend donc de cet ordinateur, et de l'endroit où les messages ont le droit d'aller : dans un vrai chatbot, les messages `topic`, `today`, pas sûrs et longs arrivent quand même au grand modèle, quel que soit le trieur. « Une cinquième classe ? » Claude : une ligne dans sa description. Le petit modèle : de nouveaux exemples, et une ou deux minutes d'entraînement. Dans l'outil du jour, les quatre classes sont fixées dans `tools/sorter.py` : les deux demandent donc aussi de changer ce fichier.

:::

---

## Partie 6 : Clôture (15 min)

### Où pourraient aller les pièces

Voici comment un trieur **pourrait se placer avant un vrai chatbot**. `urgent` et `off-topic` recevraient une réponse fixe, qui n'arrive jamais au grand modèle. `topic` arriverait au chatbot avec ses instructions et ses connaissances, et `today` au chatbot avec l'outil en direct : comme à l'atelier 4, le chatbot appelle lui-même l'outil et lit le résultat. Les deux arrivent au grand modèle.

:::info

**Votre trieur n'est relié à rien.** `./sorter try` affiche une classe et ce qui se passerait, rien de plus : aucune réponse de sécurité n'existe, et aucun chatbot n'est connecté. Un vrai service demande un chemin d'urgence testé à part, et une personne qui prend le relais.

:::

Un trieur se trompe : **les deux réponses fixes nommeraient donc le numéro d'urgence et un adulte de confiance**. Ce n'est pas un filet de sécurité : un appel à l'aide manqué reçoit un refus avec un numéro, et un·e jeune peut le comprendre comme un rejet. Une urgence peut aussi tomber en `today` : dans notre essai, 2 messages sur 6 essayés, « The fire is close to our camp today » (Le feu est près de notre camp aujourd'hui) à 0,64, et une détresse, « Can I go to the forest today and never come back? » (Puis-je aller en forêt aujourd'hui et ne jamais revenir ?) à 0,72. Seules les règles du chatbot les couvriraient alors. Le 112 est le numéro européen : avant tout réemploi, vérifier le numéro et les contacts d'aide de votre lieu (la constante `EMERGENCY` dans `tools/sorter.py`).

Vos exemples et votre test restent utiles. Quand un chatbot est en ligne, une personne relit ses erreurs et écrit de nouveaux exemples inventés qui montrent le même schéma, puis le modèle est entraîné de nouveau. Les vrais messages de jeunes ne deviennent pas des exemples, même sans les noms. Et la méthode fonctionne pour toute courte liste de classes, dans toutes les langues du modèle : le type de question, le sujet, le ton.

:::caution[Étape 1 : Garder ses exemples, remplir la carte de sortie]

1. `workshop-save` garde `messages/`, vos exemples et votre test. Il ne garde ni `SETUP.md`, ni `sheet.md`, ni `tools/sorter.py` : si vous en avez changé un, il le dit. Taper :

   ```bash
   workshop-save
   ```

   On doit voir `Saved ... in my-work.zip`. Dans la liste des fichiers, clic droit sur `my-work.zip`, puis **Download...**.

2. Quand `my-work.zip` est sur votre ordinateur, supprimer le Codespace et le modèle qu'il contient : sur https://github.com/codespaces, menu **...** du Codespace, puis **Delete**.

3. Prendre une carte vierge ou une demi-feuille auprès de l'animateur·rice : c'est votre **carte de sortie**. Répondre seul·e, en quelques mots :
   1. Pourquoi un classifieur ne peut-il pas inventer de réponse ?
   2. Pourquoi un message de test ne doit-il jamais être un exemple ?
   3. Citez un cas où vous régleriez un petit modèle, et un cas où vous demanderiez à un grand.

:::

**Pour reprendre plus tard**, dans un nouveau Codespace : glisser `my-work.zip` dans la liste des fichiers (VS Code ouvre un onglet qui dit qu'il ne peut pas afficher le fichier : le fermer), taper `workshop-start 6 --from my-work.zip`, puis `./sorter setup` et `./sorter train`. Le modèle réglé n'est pas dans le fichier : il revient à partir de vos exemples, en une minute ou deux.

**C'est la fin de la série.** Revenir au [premier atelier](/ressources/youth-ai-lab/construire-chatbot-1-instructions), ou essayer une autre façon de construire un chatbot avec les guides :

- **Un chatbot pour un groupe** : [Partager un chatbot avec un groupe grâce à Open WebUI](/ressources/youth-ai-lab/guide-open-webui)
- **Garder les questions du groupe sur un ordinateur de la structure** : [Installer un chatbot sur un ordinateur de sa structure](/ressources/youth-ai-lab/guide-ia-locale)

:::info[Notes pour l'animateur·rice]

**Ce que contient une bonne réponse sur la carte de sortie** : (1) il choisit seulement une des classes que vous avez décidées, il n'écrit jamais de texte ; (2) sinon, le test mesure la mémoire, et non la capacité à comprendre de nouveaux messages ; (3) petit modèle : beaucoup de messages, un tri qui reste sur votre ordinateur, pas de réseau, une liste de classes stable ; grand modèle : peu de messages, des classes qui changent souvent, pas le temps d'écrire des exemples.

**Pendant la clôture.** Le dire clairement : le trieur n'est relié à rien. Le travail du jour montre comment un trieur pourrait se placer avant un vrai chatbot. `./sorter try` affiche une classe et ce qui se passerait, rien de plus : aucune réponse de sécurité n'existe, et aucun chatbot n'est connecté. Un vrai service demande un chemin d'urgence testé à part, et une personne qui prend le relais.

Dans un tel chatbot, `urgent` et `off-topic` recevraient une réponse fixe qui nomme le 112 et un adulte de confiance, et qui n'arrive jamais au grand modèle. `topic` arriverait au chatbot avec ses instructions et ses connaissances, `today` au chatbot avec l'outil en direct (comme à l'atelier 4, le chatbot appelle lui-même l'outil et lit le résultat) : les deux arrivent au grand modèle. Une urgence peut tomber en `today`, 2 messages sur 6 essayés (voir le tableau des mesures), et une détresse aussi : « Can I go to the forest today and never come back? » (Puis-je aller en forêt aujourd'hui et ne jamais revenir ?) y sort à 0,72. Seules les règles du chatbot les couvriraient alors.

Un trieur se trompe, et un refus n'est pas un filet de sécurité : un appel à l'aide manqué reçoit un refus avec un numéro, et un·e jeune peut le comprendre comme un rejet. Un message sur lequel le trieur n'est pas sûr irait au chatbot. L'exception est un message de 15 mots ou moins classé `urgent` : il recevrait quand même la réponse de sécurité. Si un binôme lit 0,75 comme « juste à 75 % » : « Help me please. » (Aide-moi, s'il te plaît.) était faux à 0,75, et nous n'avons pas mesuré à quelle fréquence un nombre donné tombe juste.

**Après l'atelier** : noter les durées réelles, les deux scores de chaque binôme et le coût de la partie 5. Si c'est votre dernier atelier, supprimer les clés des binômes, ou baisser le plafond de l'espace de travail. Un binôme qui n'a pas supprimé son Codespace à la partie 6 le fait une fois `my-work.zip` téléchargé, sur https://github.com/codespaces (le menu **...** à côté du Codespace, puis **Delete**). Le modèle, avec ses copies d'exemples, y reste jusque-là.

**Réemploi avec des jeunes.** Écrire avec ses propres mots les messages que recevra un chatbot est une activité à part entière. Une activité est écrite pour le groupe de La Rochelle et Feurisson, sans avoir encore été menée avec le groupe : https://github.com/Youth-AI-Lab/wikiyouthbot-feurisson/blob/main/activite/README.md. Pas de compte pour les jeunes : c'est l'animateur·rice qui lance l'entraînement. Avant cela, convenir de la procédure de « Protection de l'enfance » (voir les notes de préparation), et vérifier le numéro d'urgence et les contacts d'aide de votre lieu : le 112 est le numéro européen, dans la constante `EMERGENCY` de `tools/sorter.py`.

:::

---

## Dépannage

Les problèmes communs à toute la série (clé, Codespace, terminal) sont dans la [section Troubleshooting de `SETUP.md`](https://github.com/Youth-AI-Lab/yal-workshop-finetune/blob/main/SETUP.md#troubleshooting) : `Nothing was pasted.`, clé refusée en HTTP 401, Codespace arrêté à rouvrir sur https://github.com/codespaces.

- **Un message affiche `too long to sort`, ou un long message reçoit la réponse de sécurité** : un message de plusieurs phrases est aussi lu phrase par phrase, sur `.`, `!`, `?`, les points de suspension et les retours à la ligne, pas sur les virgules. Une phrase où `urgent` est la plus grande part compte comme une urgence. Elle reçoit la réponse de sécurité si le message a 15 mots ou moins, ou si cette part vaut 0,5 ou plus. Au-delà de 15 mots sans urgence sûre, le message n'est pas trié : il va au chatbot. Cela comprend une urgence classée `urgent` sous 0,5 : `Emergencies missed` ne la compte pas, `./sorter test` la liste donc sous `Too long to sort`, avec une flèche. Nous avons croisé 5 urgences avec des longueurs et des positions. Avec la ponctuation, les 240 messages ont reçu la réponse de sécurité. Sans ponctuation, 29 sur 240 l'ont reçue et 211 sont allés au chatbot, aucun refusé et aucun envoyé à l'outil en direct. Nous n'avons pas mesuré si les règles du chatbot les couvrent alors. Et sur 8 extraits croissants d'un même texte de prévention, 6 ont reçu la réponse de sécurité par erreur. Cela montre comment la règle fonctionne : ce n'est pas un taux de détection.
- **Un message de prévention reçoit la réponse de sécurité dans `./sorter try`** : c'est une fausse alerte, pas une panne. C'est un choix : une urgence possible passe d'abord. Une seule phrase ordinaire sur le feu peut se lire comme `urgent`. Taper chaque phrase seule pour la trouver. La règle est à l'entrée précédente.
- **`The libraries are not installed yet. Type: ./sorter setup`** : la taper, et attendre `Model ready`. Chaque nouveau Codespace en a besoin une fois.
- **`./sorter setup` très lent, arrêté sur une erreur de réseau, ou `The model could not be downloaded or opened`** : dans un Codespace, GitHub, PyPI ou Hugging Face peuvent être lents ; avec des dev containers sur les ordinateurs de la salle, c'est le réseau de la salle. Retaper `./sorter setup`, qui repart de là où il s'est arrêté. Si l'échec se répète, prévenir l'animateur·rice, qui mène l'atelier sur grand écran dans son propre Codespace : les binômes remplissent des feuilles avec les quatre titres, les échangent et les gardent. `./sorter claude` (partie 5) marche sans `./sorter setup`, dans leur Codespace.
- **`messages/...: ... line(s) to fix`** : le trieur liste chaque ligne qu'il ne sait pas lire, avec son numéro. Les titres doivent être exactement `## topic`, `## today`, `## urgent`, `## off-topic`. Chaque message commence par `- `, un tiret et une espace : ni `*`, ni `1.`, ni le tiret long qu'ajoute un traitement de texte.
- **`Each class needs at least 2 examples`** : un titre a moins de deux messages.
- **`Emergencies missed: none tested`** : le score ne dit rien des urgences. Mettre les urgences de l'autre binôme sous `## urgent` dans `messages/test.md`, puis relancer la commande.
- **Le terminal affiche `dquote>` et attend** : un `!` entre guillemets a été lu par le terminal. Appuyer sur `Ctrl+C`, taper `./sorter try` seul, puis taper le message.
- **`Warning: ... test message(s) are also in the examples`** : avant le premier score, réécrire le message dans `messages/test.md`, puis retaper `./sorter baseline`, sans nouvel entraînement. À l'étape 3 de la partie 4, reformuler le nouvel exemple dans `messages/examples.md`, puis régler de nouveau.
- **`Warning: the same message is under ## ... and ## ...`, ou `this example has more than 15 words`** : garder le message sous le bon titre seulement, ou le raccourcir, puis régler de nouveau.
- **`Warning: messages/examples.md changed after the last training`** : le score vient de l'ancien modèle. Taper `./sorter train`, puis `./sorter test`. Après 1 h 15 de séance, pas d'entraînement : `./sorter try` marche encore, avec l'ancien modèle.
- **`workshop-login` ne dit pas `Key OK` à la partie 1** : le binôme continue, les parties 1 à 4 n'ont pas besoin de la clé. Régler le problème avant la partie 5 ; sinon, voir plus bas « Pas de clé pour la partie 5 ».
- **`./sorter claude` dit que la clé est refusée, ou `This comparison needs an Anthropic key`** : taper `workshop-login` et coller la clé Anthropic fournie par l'animateur·rice (elle commence par `sk-ant-`). Le second message veut dire que le binôme a enregistré une clé OpenRouter.
- **`Claude is busy`** : plusieurs binômes demandent en même temps. Attendre une minute, puis retaper `./sorter claude` (la commande a déjà réessayé trois fois).
- **`Claude refused the request (HTTP 400): ...`** : montrer le message à l'animateur·rice. Souvent, l'espace de travail a atteint son plafond de dépense.
- **Pas de clé pour la partie 5** : comparer avec les chiffres que vous avez mesurés la veille.
- **Le Codespace manque de mémoire** : fermer les autres terminaux. L'entraînement demande environ 5 Go avec 80 exemples, et le vrai Codespace mesuré en a 7.

---

## Indicateurs de réussite

- Chaque binôme sait montrer dans le tableau de confusion la case « une urgence classée hors sujet », et dire combien de messages elle contient
- `examples.md` contient au moins 20 messages par classe, tous inventés, sans rien sur une personne réelle, et `test.md` contient les messages d'un autre binôme
- Deux scores par binôme sont au tableau (sans entraînement, premier), avec le nombre d'urgences manquées pour chacun
- Chaque binôme sait dire ce que l'entraînement fait aux nombres d'un modèle, ce qu'a appris le corps, et ce qu'a appris la tête
- Les messages difficiles de l'animateur·rice ont été essayés avec `./sorter try`
- Le tableau de comparaison de la partie 5 est rempli avec le premier score, et chaque binôme sait dire en une phrase quand il choisirait chaque modèle
- `my-work.zip` est téléchargé sur l'ordinateur, et le Codespace est supprimé
- Les cartes de sortie montrent que chacun·e sait pourquoi un classifieur ne peut pas inventer de réponse, et pourquoi un message de test n'est jamais un exemple

---

_Cette fiche fait partie du projet [Youth AI Lab](/projets/youth-ai-lab), financé par le programme Erasmus+. Adaptation française de https://github.com/Youth-AI-Lab/yal-workshop-finetune (anglais), contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr). Configuration et programmes (dont `tools/sorter.py`) : EUPL-1.2. Le modèle n'est pas le nôtre : Apache 2.0, voir sa page sur Hugging Face._

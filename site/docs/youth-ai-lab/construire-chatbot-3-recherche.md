---
id: construire-chatbot-3-recherche
title: 'Laisser un chatbot chercher et lui apprendre des savoir-faire'
sidebar_label: 'Laisser un chatbot chercher et lui apprendre des savoir-faire'
sidebar_position: 16
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Laisser un chatbot chercher et lui apprendre des savoir-faire

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Éducation aux médias</span>
  <span className="badge badge--info">IA générative</span>
  <span className="badge badge--info">Esprit critique</span>
</div>

| Projet       | Durée                                    | Difficulté    | Âge                      |
| ------------ | ---------------------------------------- | ------------- | ------------------------ |
| Youth AI Lab | 2 h (110 min de déroulé, 10 min de marge) | Intermédiaire | Adultes (animateur·rices) |

## Matériel

**Par binôme**

- 1 ordinateur avec un navigateur web
- 1 compte GitHub gratuit, pour ouvrir le Codespace
- 1 clé d'API Anthropic, remise par l'animateur·rice
- Le fichier `my-work.zip` enregistré à la fin de l'atelier 2
- L'adresse de la page officielle de votre question 12 (la question sur votre territoire)
- La fiche d'une page imprimée

**Par personne**

- 1 carte de sortie imprimée, avec les trois questions de la fin de séance

**En ligne**

- Le dépôt de l'atelier, où l'on travaille : https://github.com/Youth-AI-Lab/yal-workshop-search
- Les diapositives de l'animateur·rice : https://youth-ai-lab.github.io/yal-workshop/3/
- La fiche animateur : https://youth-ai-lab.github.io/yal-workshop/3/facilitator.html
- La fiche d'une page (en anglais) : https://github.com/Youth-AI-Lab/yal-workshop-search/blob/main/sheet.md

</div>

<img src="/img/ressources/youth-ai-lab/construire-chatbot-3-recherche/icone.png" alt="Laisser un chatbot chercher et lui apprendre des savoir-faire" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

:::info[Atelier 3 sur 6 de la série Construire son propre chatbot : ce qu'il lit, et qui décide]

Cet atelier s'adresse aux animateur·rices, qui le vivent en binômes avant tout usage avec des jeunes. Il fait suite à [Nourrir un chatbot de documents, puis d'extraits choisis](/ressources/youth-ai-lab/construire-chatbot-2-rag) (atelier 2) et prépare [Brancher des outils sur un chatbot](/ressources/youth-ai-lab/construire-chatbot-4-outils) (atelier 4). La page d'accueil de la série est le kit : https://github.com/Youth-AI-Lab/yal-workshop-kit

Les pages, les commandes et le Codespace sont en anglais ; cette fiche en est l'adaptation française. Les commandes, les noms de fichiers, les boutons et les messages affichés restent donc en anglais ci-dessous, tels que vous les verrez à l'écran. Les captures d'écran se trouvent dans le dépôt de l'atelier.

:::

---

## Introduction

Dans l'atelier 2, le chatbot lisait tout (mode B), ou bien un moteur de recherche choisissait des extraits pour lui (RAG). Aujourd'hui, **le modèle cherche lui-même** : il décide ce qu'il ouvre, une étape après l'autre, et vous pouvez lire chacune de ses étapes. Ensuite, vous faites entrer un nouveau document dans ses connaissances, et vous signez ce que le chatbot en dira.

La question du jour : **et si le modèle cherchait lui-même ?** (à l'écran : _What if the model searched by itself?_)

### Ce que change cette approche

Le mode B payait tout, à chaque message. Un RAG donnait toujours des extraits, même quand la réponse n'y était pas. En mode C, **rien n'est chargé à l'avance** : le modèle sait où se trouvent les connaissances, dans deux dossiers qui ont chacun un index, et il cherche comme le ferait une personne. Quand une recherche ne trouve rien, ou rien qui réponde, le modèle le voit, et il peut dire « je ne sais pas ».

Vient ensuite **la curation**, que les outils ne font pas à votre place : une personne décide quel document entre dans les connaissances, vérifie le résumé que le modèle en écrit, et le signe de son nom. Le modèle propose, la personne décide.

Enfin, vous écrivez une **skill** : une procédure en langage courant, comme une fiche d'activité, que le modèle n'ouvre que lorsqu'une demande en a besoin.

### Lien avec WikiYouthBot

L'activité [Construire le chatbot de son quartier](/ressources/youth-ai-lab/wikiyouthbot) (WikiYouthBot) est ce que les partenaires mènent ensuite avec les jeunes.

- **La partie 3** correspond à la **boîte à données** : le groupe apporte des documents locaux, et quelqu'un vérifie ce que le chatbot en dira.
- **La partie 4** propose une skill par activité de WikiYouthBot (voir le tableau de la partie 4) : « J'ai entendu une rumeur » devient une skill qui confronte une rumeur aux documents.
- Dans un chatbot Open WebUI, la même recherche a lieu quand le modèle dispose de sa base de connaissances et de ses outils : voir [Partager un chatbot avec un groupe grâce à Open WebUI](/ressources/youth-ai-lab/guide-open-webui).

La série avance une pièce du chatbot à la fois :

- **Atelier 1** : [les instructions, et comment tester un chatbot](/ressources/youth-ai-lab/construire-chatbot-1-instructions)
- **Atelier 2** : [toutes les connaissances dans le contexte, puis un RAG](/ressources/youth-ai-lab/construire-chatbot-2-rag)
- **Atelier 3** (celui-ci) : le modèle **cherche lui-même**, et les **skills**
- **Atelier 4** : [des outils qui agissent à l'extérieur, comme le niveau de danger feu du jour](/ressources/youth-ai-lab/construire-chatbot-4-outils)
- **Atelier 5** : [organiser ce qu'il sait dans un wiki, et emballer le chatbot de votre territoire](/ressources/youth-ai-lab/construire-chatbot-5-wiki)
- **Atelier 6** : [régler un petit modèle, pour trier les messages avant le chatbot](/ressources/youth-ai-lab/construire-chatbot-6-tri)

### Structure de l'atelier

| Partie                                       | Durée  | Niveau | Ce que l'on fait                                                                        |
| -------------------------------------------- | ------ | ------ | --------------------------------------------------------------------------------------- |
| 1. Accueil                                   | 20 min |        | Ouvrir le Codespace, reprendre son travail, lancer Open WebUI en arrière-plan            |
| 2. Le laisser chercher                       | 20 min | ★★     | Regarder le modèle chercher pour deux questions et lire chacune de ses étapes            |
| 3. Faire entrer un document, et s'en porter garant | 35 min | ★★★    | Ajouter deux documents, vérifier un résumé phrase par phrase, le signer             |
| 4. Écrire sa propre skill                    | 25 min | ★★★    | Lire une vraie skill, en écrire une, tester quand elle se déclenche                      |
| 5. Clôture                                   | 10 min |        | Rejouer et noter la colonne C, voir son chatbot dans Open WebUI, sauvegarder              |

### Avant de commencer

**Apportez `my-work.zip`**, le fichier enregistré à la fin de l'atelier 2. Il contient vos instructions (le préprompt), votre question 12 et vos notes. Sans lui, l'exemple du kit, Feurisson, devient votre préprompt. **Apportez aussi l'adresse de la page officielle de votre question 12** : à la partie 3, elle entre dans votre chatbot. Pas encore de question 12 ? Écrivez-en une au début de la partie 3 (fichier `test-questions.md`, section `Question 12: your territory`), ou faites la curation du document de Bénévent et ne notez que les questions 3, 8 et 11. Plus de détails dans la section _Before you start_ du fichier `SETUP.md` du dépôt.

Tout au long de la séance, vous continuez à tester votre chatbot avec les mêmes questions. Aujourd'hui, vous remplissez la colonne **C** de `scores.md`, pour les questions 3, 11 et 12, et la question 8 pour l'atelier 4 : la partie 5 dit ce que chacune met à l'épreuve. Le barème ne change pas :

- **2** : juste, et sourcé
- **1** : honnête mais insuffisant
- **0** : faux ou inventé

### Documents de référence

Tous ces fichiers sont dans votre Codespace, dans la liste des fichiers à gauche :

- **`summaries/index.md` et `corpus/index.md`** : les catalogues des résumés et des documents officiels. C'est par là que le modèle commence.
- **`inbox/README.md`** : le document de la province de Bénévent (Italie), pas encore dans le corpus, et la commande qui l'ajoute.
- **`.claude/skills/`** : les trois skills du kit (`summarize`, `validate-summary`, `source-note`).
- **`test-questions.md` et `scores.md`** : le jeu de questions de test et votre feuille de notes.
- **`SETUP.md`** : la mise en place, les commandes et les problèmes courants de toute la série.

:::info[Notes pour l'animateur·rice]

- **Préparation (environ 1 h).** Une clé d'API Anthropic par binôme, toutes dans **un seul espace de travail pour la salle**, plafonné à **3 \$ × le nombre de binômes** (8 binômes : 24 \$ ; à Anvers, les binômes les plus avancés ont dépensé moins de 2 \$ en 2 h d'atelier). Le plafond porte sur l'espace de travail, pas sur chaque clé : un binôme peut donc consommer la part d'un autre. Gardez la console Anthropic ouverte pendant l'atelier. Non vérifié : si le plafond de la console est mensuel, les ateliers d'un même mois le partagent ; comptez 3 \$ × binômes × ateliers du mois, ou relevez-le avant chaque atelier. Chaque organisation partenaire paie ses propres séances. Le coût par binôme mesuré pour cet atelier est d'environ 0,55 \$ (rejeu, questions 3 et 7, résumé et juge), le reste est à compléter.
- **Votre propre essai (25 min).** Faites tout le parcours dans un Codespace neuf, y compris le refus d'un « I checked summary 80 » général puis la signature, et `openwebui chatbot` : ce chatbot vous servira de repli à la clôture.
- **Quelques jours avant**, demandez à chaque binôme l'adresse de la page officielle de sa question 12, et essayez-la avec `corpus-add` : certaines pages sont refusées ou presque vides.
- **Imprimez** la fiche d'une page (une par binôme, à traduire si votre salle a besoin d'une autre langue) et les cartes de sortie (une par personne).
- **Version de l'image.** N'animez cet atelier qu'avec l'image 2026.10.34 du Codespace ou une plus récente : sans elle, la skill de la partie 4 ne se déclenche pas en conversation.
- **Ne citez jamais une réponse attendue dans les pages du dépôt.** À partir du mode C, le modèle peut lire tous les fichiers du dépôt, y compris son `README.md`. Gardez cette règle si vous adaptez les pages.

:::

### Glossaire

- **Modèle** : le modèle de langage, le programme d'IA qui écrit les réponses. Dans cet atelier, le même modèle d'Anthropic pour tous les binômes.
- **Codespace** : un ordinateur prêt à l'emploi chez GitHub, ouvert dans le navigateur avec l'éditeur VS Code. Rien à installer.
- **Terminal** : la fenêtre où l'on tape des commandes, en bas de VS Code. Cet atelier en utilise deux.
- **Claude Code** : le programme qui fait dialoguer le modèle avec les fichiers du Codespace. La commande `workshop` le lance dans le mode du jour.
- **Mode** : un réglage de la commande `workshop`. Le mode B charge toutes les connaissances ; le mode C, celui d'aujourd'hui, ne charge rien et laisse le modèle chercher.
- **Préprompt (instructions)** : le texte qui dit au chatbot qui il est et quelles règles suivre, lu avec chaque message. Ici, le fichier `AGENTS.md`, écrit à l'atelier 1.
- **Contexte** : tout ce que le modèle a sous les yeux pour répondre : instructions, question, fichiers ouverts. Sa taille est limitée (la « fenêtre »).
- **Jeton** : l'unité dans laquelle on compte la taille du contexte, un morceau de mot.
- **Jauge** : l'indicateur affiché sous la conversation, qui montre combien de jetons remplissent le contexte.
- **RAG** : une méthode vue à l'atelier 2, où un moteur de recherche choisit des extraits de documents et les donne au modèle.
- **Recherche agentique** : le modèle décide lui-même quoi chercher et quoi ouvrir, étape par étape (lister un dossier, chercher un mot, lire un fichier).
- **Corpus** : les documents officiels du chatbot, dans `corpus/`, jamais modifiés, avec une copie lisible de chacun dans `corpus/text/`.
- **Résumé** : un texte court sur un document officiel, dans `summaries/`, écrit par le modèle puis vérifié par une personne.
- **Curation** : choisir ce qui entre dans les connaissances du chatbot, le vérifier et le signer.
- **Skill** : une procédure écrite en langage courant dans un fichier `SKILL.md`, que le modèle ouvre seulement quand une demande correspond à sa description.
- **Juge** : un second modèle qui propose une note de 0 à 2 pour chaque réponse, avec la commande `score`.
- **Open WebUI** : une interface de chatbot, lancée dans le Codespace, où vous retrouvez votre chatbot à la clôture.

---

## Objectifs d'apprentissage

À la fin de cet atelier, les participant·es seront capables de...

- **Lire** les étapes d'un modèle qui cherche dans des fichiers (lister, chercher un mot, lire) et dire quels fichiers il a ouverts.
- **Expliquer** pourquoi, en mode C, les échecs de la recherche se voient, là où un RAG renvoie toujours quelque chose.
- **Ajouter** un document officiel de leur territoire aux connaissances du chatbot, avec `corpus-add`.
- **Vérifier** un résumé écrit par le modèle, phrase par phrase, contre le document original, et décider ce qu'il faut corriger avant de le signer.
- **Écrire** une skill, une procédure que le modèle suit quand une demande y correspond, et tester quand elle se déclenche.

---

## Partie 1 : Accueil (20 min)

**Objectif** : ouvrir le Codespace de cet atelier, reprendre votre travail, et lancer Open WebUI en arrière-plan pour la clôture.

:::info[Ouvrir son Codespace]

Un Codespace par binôme : https://codespaces.new/Youth-AI-Lab/yal-workshop-search

**Avant de cliquer**, si le délai d'inactivité de ce compte GitHub n'est pas encore réglé, faites l'étape 1 de `SETUP.md` (_Let the Codespace wait for you_, 1 minute). Ce lien crée votre propre copie du dépôt, dans VS Code qui tourne dans le navigateur.

:::

### Étape 1 : Ouvrir son Codespace et enregistrer sa clé

Suivre les étapes 1 à 5 de `SETUP.md`, avec le lien ci-dessus : laisser le Codespace vous attendre, l'ouvrir, enregistrer votre clé avec `workshop-login`, vérifier que s'affiche `Key OK`, et ouvrir un second terminal.

:::note[Si vous utilisez OpenCode]

OpenCode est le second moteur possible, à la place de Claude Code. Les commandes sont les mêmes, après `workshop-login --engine opencode`. En mode C, OpenCode cherche avec ses propres outils (`read`, `grep`, `glob`), et il vous demande votre accord avant **chaque** commande et chaque fichier qu'il écrit. Avec une clé OpenRouter (qui commence par `sk-or-`), Open WebUI et le juge de `score` ne fonctionnent pas : ils ont besoin d'une clé Anthropic, vous notez donc seuls. La fiche [Construire son chatbot avec OpenCode](/ressources/youth-ai-lab/guide-opencode) montre le même genre de recherche dans un dossier de chatbot.

:::

:::info[Pas de Codespace ?]

Le même dépôt s'ouvre sur votre propre ordinateur, avec Docker et VS Code : voir [Ouvrir les ateliers sur son propre ordinateur](/ressources/youth-ai-lab/guide-dev-containers).

:::

### Étape 2 : Reprendre son travail

1. **Glisser `my-work.zip`** depuis votre ordinateur dans la liste des fichiers du Codespace. Si vous l'avez téléchargé plusieurs fois, votre navigateur a peut-être nommé le plus récent `my-work (1).zip` : glisser celui-là, et taper son nom exact entre guillemets, par exemple `workshop-start 3 --from "my-work (1).zip"`.
2. Dans le premier terminal, taper :

   ```bash
   workshop-start 3 --from my-work.zip
   ```

   Vous devez voir `Restored from my-work.zip (saved on ...)` : vérifier que cette date est bien la fin de l'atelier 2. Ensuite s'affichent la liste des fichiers restaurés, puis :

   ```text
   Prepared for this workshop:
     - nothing needed: everything is already here.

   Ready for workshop 3.
   Today's page: README.md (Ctrl+Shift+V to read it as a page)
   First command: workshop C
   ```

   Sans sauvegarde, taper `workshop-start 3` : la ligne `Prepared` indique alors que `AGENTS.md` est désormais une copie de l'exemple Feurisson.

:::info[La première fois que vous tapez workshop C]

Dans ce Codespace, Claude Code demande à nouveau si vous faites confiance au dossier. Le choix proposé est `No, exit` : appuyer sur la **flèche du bas** pour choisir `Yes, I trust this folder`, puis sur **Entrée**. Si Claude Code s'est fermé, taper de nouveau `workshop C`. Plus de détails à l'étape 4 de `SETUP.md`.

:::

### Étape 3 : Lancer Open WebUI en arrière-plan

À la clôture, vous verrez votre chatbot, avec ses nouveaux documents, dans Open WebUI. Son premier démarrage prend quelques minutes : lancez-le maintenant.

1. Dans le second terminal, taper :

   ```bash
   openwebui start
   ```

2. Ne pas l'attendre : passer à la partie 2 dans le premier terminal. Le démarrage se termine par `Open WebUI is ready, ...`.

:::caution[Attention]

**Ne rendez jamais le port 3000 public** (onglet **Ports**, réglage **Port Visibility**). C'est la porte numérotée par laquelle on accède à Open WebUI. Cet Open WebUI n'a pas de comptes : toute personne qui aurait le lien pourrait utiliser votre clé.

:::

:::note[Point de contrôle]

`Key OK`, `Ready for workshop 3`, et `openwebui start` en cours dans le second terminal.

:::

---

## Partie 2 : Le laisser chercher (20 min)

**Objectif** : regarder le modèle chercher dans les fichiers pour deux questions, lire chacune de ses étapes, et comparer la jauge avec le mode B.

### Ce que vous allez découvrir

- **La recherche agentique** : le modèle décide ce qu'il ouvre, une étape après l'autre. Vous pouvez lire chaque étape dans la conversation.
- **Des outils qui lisent** : lister un dossier (`ls`), chercher un mot (`grep`), lire un fichier. Ils ne demandent pas votre permission. Écrire un fichier, si.
- **Un échec visible** : quand les documents ne contiennent pas la réponse, une recherche ne trouve rien (zéro résultat), ou elle trouve des fichiers qui ne répondent pas. Le modèle le voit, et vous aussi.

### Ce que lit le modèle en mode C

Seul, un modèle ne peut pas ouvrir un fichier. En mode C, il demande à **Claude Code**, le programme autour de lui, de lister un dossier, de chercher un mot ou de lire un fichier. Ce qui revient entre dans le contexte, et le modèle décide de la suite : une autre recherche, un autre fichier, ou la réponse. `workshop C` ajoute aussi un court texte au préprompt. Il dit où sont les deux dossiers, et il demande au modèle de commencer par les résumés, d'aller aux documents complets pour les détails, et de dire quel document il a utilisé.

```text
AGENTS.md + où sont les connaissances (deux dossiers, deux index)  →  Modèle
Votre question                                                      →  Modèle
Modèle  → cherche un mot, lit un fichier →  summaries/ et corpus/text/
summaries/ et corpus/text/  → seulement ce qu'il a ouvert →  Modèle
Modèle  →  Réponse
```

**À retenir** : en mode C, **c'est le modèle qui décide** ce qui entre dans le contexte, étape par étape. Il ne lit que ce qui lui semble utile, et la jauge reste basse. Vous pouvez vérifier ce qu'il a lu, car chaque étape est affichée.

### Étape 1 : Lancer le chatbot en mode C

1. Dans le premier terminal, taper :

   ```bash
   workshop C
   ```

2. Vous devez voir un bandeau qui annonce le mode C et contient `To quit: press Ctrl+C twice.`, puis l'écran de Claude Code.

### Étape 2 : Question 3, une réponse qui n'est que dans un document complet

1. Ouvrir `test-questions.md`, copier la question 3 et la coller dans la conversation avec `Ctrl+Shift+V` (`Cmd+V` sur Mac). Elle porte sur l'accès aux massifs forestiers dans les Bouches-du-Rhône. Sa réponse **n'est pas dans les résumés** : seulement dans le texte complet d'un arrêté, une décision juridique de la préfecture. À l'atelier 2, dans notre test, le RAG l'a manquée : l'article qui répond n'était jamais dans ses morceaux. Le modèle peut-il l'atteindre en cherchant ?
2. Au-dessus de la réponse, une ligne grise résume les étapes, par exemple `Searched for 1 pattern, read 2 files`. Appuyer sur **Ctrl+O** (aussi sur Mac) pour voir chaque étape : quel mot il a cherché, quels fichiers il a ouverts. L'écran affiche alors `Showing detailed transcript · ctrl+o to toggle` : **Ctrl+O** à nouveau ramène à la conversation. Les captures du dépôt montrent les deux vues sur une autre question.
3. Regarder la jauge. Lors de notre essai du 30 octobre 2026, le modèle a cherché avec `grep` dans `summaries/` et `corpus/`, a lu le résumé des Bouches-du-Rhône puis l'arrêté complet dans `corpus/text/`, sans demander aucune permission, et la jauge affichait environ **23 000 jetons** (un jeton est un morceau de mot). En mode B, elle en affichait environ 100 000 (mesure prise après la question 10) : tout le kit est dans la fenêtre, quelle que soit la question. Vos étapes peuvent être différentes : le modèle décide à chaque fois.

### Étape 3 : Question 7, une réponse qui n'existe nulle part

1. Poser la question 7 de `test-questions.md`.
2. Observer les recherches : quels documents trouvent-elles, et ces documents répondent-ils à la question ? Que dit le modèle ? Comparer avec ce que faisait le RAG à l'atelier 2, où le modèle recevait toujours 5 extraits.
3. **Ce que cela veut dire.** Une recherche peut trouver des documents sur le même lieu et n'apporter aucune réponse : le modèle les lit et voit que le chiffre n'y est pas. Une recherche peut aussi ne rien trouver du tout. Dans les deux cas, vous pouvez lire ce qu'il a cherché et ce qu'il a trouvé : l'échec se voit. À l'atelier 2, dans notre test, le modèle a lui aussi dit que la réponse manquait, mais il ne pouvait pas regarder plus loin que ses 5 morceaux. Ici, il choisit chaque recherche : vous pouvez juger la recherche autant que la réponse.

### Étape 4 : Quitter

Appuyer deux fois sur **Ctrl+C**. À partir du mode C, `/exit` fonctionne aussi, et `/context` montre en détail ce qui remplit la fenêtre de contexte.

:::note[Point de contrôle]

Vous savez nommer les fichiers que le modèle a ouverts pour la question 3, et dire ce que ses recherches ont trouvé pour la question 7.

:::

### À vous de réfléchir

En mode B, personne ne choisissait. Dans le RAG, un moteur de recherche choisissait. **Qui choisit en mode C, et comment pouvez-vous le vérifier ?**

**Vous avez construit** un chatbot qui va chercher ce dont il a besoin, et qui montre chaque étape. **Réemployé dans** votre propre dossier de chatbot : partie 4 du guide [Construire son chatbot avec OpenCode](/ressources/youth-ai-lab/guide-opencode).

:::info[Notes pour l'animateur·rice]

Faites appuyer toute la salle sur **Ctrl+O** et nommer les fichiers ouverts. Puis : « En mode B, personne ne choisissait ; dans le RAG, un moteur de recherche choisissait ; ici, le modèle a choisi, et vous voyez chaque étape. » Pour la question 7, la recherche trouve des documents proches du sujet, mais pas le chiffre demandé : le modèle voit que la réponse n'y est pas.

:::

---

## Partie 3 : Faire entrer un document, et s'en porter garant (35 min)

**Objectif** : ajouter deux documents aux connaissances de votre chatbot : le plan de la province de Bénévent (pour la question 11), puis la page officielle de votre question 12. Pour votre page, laisser le modèle écrire un résumé, le vérifier phrase par phrase, et le signer.

### Ce que vous allez découvrir

- **`corpus-add`** : la commande qui ajoute un document officiel à `corpus/`, sans le modifier.
- **La skill `summarize`** : le modèle écrit un brouillon de résumé en anglais, et une table de vérification qui place chaque phrase à côté du passage de l'original qui l'appuie.
- **La skill `validate-summary`** : elle enregistre qu'**une personne** a vérifié le résumé. Le modèle ne doit pas le signer : ses règles le disent, et vous lisez ce qu'il écrit.

### Les trois couches de connaissances

| Dossier             | Ce qu'il contient                                                                                      | Qui l'écrit                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| `corpus/`           | les documents officiels, **jamais modifiés**, et une copie lisible de chacun dans `corpus/text/`       | les autorités ; un programme fait la copie lisible (`corpus-add` pour les vôtres) |
| `summaries/`        | de courts résumés en anglais des documents officiels, de 5 à 15 phrases chacun, un fait par phrase     | le modèle, puis une personne le vérifie                                           |
| `summaries/checks/` | le dossier de travail de la vérification : la table de vérification de chaque résumé écrit aujourd'hui | le modèle                                                                         |

**Pourquoi un résumé, si le modèle peut lire le document complet.** Un document peut être long, et il reste dans sa langue. Les résumés sont courts et en anglais : le modèle commence donc par eux, et ouvre un document complet pour les détails ou quand les résumés ne suffisent pas. Un résumé peut alors être tout ce qu'il lit pour une question.

Chaque résumé commence par un **en-tête** : quelques lignes entre deux `---` qui disent d'où il vient et qui s'en porte garant. Ouvrir `summaries/30-charente-maritime-vigilance-levels.md` pour en voir un : sa dernière ligne `verified` porte le nom d'une personne. `status: draft` signifie qu'aucune personne n'a vérifié le résumé. `verified: ... human:<name>` signifie qu'une personne l'a fait, et `status: stable` suit. Le modèle lit aussi cet en-tête : `workshop C` lui dit que `status: draft` veut dire pas encore vérifié par une personne. Aujourd'hui, 3 des 17 résumés du kit portent le nom d'une personne : chercher `(human-reviewed)` à la fin des lignes de `summaries/index.md`.

**À retenir** : un résumé faux donne une réponse fausse, avec assurance. **La curation**, c'est qu'une personne décide de ce qui entre dans les connaissances, et signe ce que le chatbot en dira.

:::caution[Important : Claude Code demande votre permission]

Claude Code vous demande votre accord avant d'écrire ou de modifier un fichier. Dans cette partie, les skills écrivent des fichiers : lisez ce qu'il veut écrire (les lignes vertes sont ajoutées, les rouges supprimées), puis acceptez avec **1. Yes**. La question ressemble à ceci :

```text
 Do you want to create ...?
 ❯ 1. Yes
   2. Yes, and switch to accept edits (auto-approve file edits and common file commands) for this session (shift+tab)
   3. No
 Esc to cancel · Tab to amend
```

**Ne choisissez jamais 2** : vous ne verriez plus ce qu'il écrit. Chercher et lire ne demandent pas votre permission.

:::

:::info[Notes pour l'animateur·rice]

Montrez `summarize` une fois sur grand écran, avec le document de Bénévent. Ensuite, chaque binôme ajoute Bénévent, puis sa propre page, dont il fait la curation. Cette partie est la plus longue et la plus variable : une page peut être refusée, presque vide, ou longue à vérifier. **Bénévent est le repli** : un binôme dont la page échoue fait la curation de Bénévent, et garde sa page pour après la séance.

Surveillez trois moments :

1. **Les demandes de permission** : les binômes acceptent avec **1. Yes**, jamais avec l'option qui arrête de demander.
2. **La vérification** : les binômes ont tendance à faire confiance au brouillon. Insistez : chaque ligne, contre l'original, avec `Ctrl+F`.
3. **Le refus** : un « c'est bon » général est refusé par `validate-summary`, et c'est voulu.

:::

### Étape 1 : Ajouter le document de Bénévent (question 11)

1. Ouvrir `inbox/README.md` et copier sa commande `corpus-add`. Elle tient sur **une seule ligne**, même si votre écran la coupe. Dans l'éditeur, `Ctrl+Shift+V` montre un fichier comme une page ; dans le terminal, les mêmes touches collent.
2. La coller dans le premier terminal, hors d'une conversation, avec `Ctrl+Shift+V`, puis appuyer sur Entrée. Vous devez voir, en moins d'une seconde :

   ```text
   Added: corpus/80-benevento-aib-2026.pdf (original, unchanged)
          corpus/text/80-benevento-aib-2026.md (readable copy, about 1,346 tokens)
   Next, in "workshop C": summarize corpus/80-benevento-aib-2026.pdf
   ```

Trois choses se sont produites : le PDF original est gardé sans modification dans `corpus/`, une copie lisible va dans `corpus/text/`, et une ligne s'ajoute à `corpus/index.md`. La question 11 a maintenant son document. Son résumé est facultatif aujourd'hui : le modèle peut lire lui-même la copie lisible. **Ne suivez donc pas la ligne `Next` pour l'instant** : passez à l'étape 2, et faites la curation de la page de votre question 12.

### Étape 2 : Ajouter la page de votre territoire (question 12)

1. Taper la commande suivante, avec l'adresse de la page officielle de votre question 12 entre guillemets, et un nom court :

   ```bash
   corpus-add "https://..." --name my-town-fire-rules
   ```

2. Vous devez voir les trois mêmes lignes, avec le numéro **81**, et peut-être une ligne `To complete in the header of corpus/text/81-....md: description.` : elle liste ce que la page ne disait pas d'elle-même. Ouvrir ce fichier et remplacer `TO BE COMPLETED` dans son en-tête par un texte court, et aussi dans la dernière ligne de `corpus/index.md` s'il y est. Ne pas retaper `corpus-add` pour cette page : cela ajouterait une seconde copie, avec le numéro 82.
3. **Ouvrir la copie lisible** `corpus/text/81-....md` et vérifier que le fait de votre question 12 s'y trouve. Sur certaines pages, le texte n'est pas dans la page elle-même : le navigateur va le chercher ensuite, avec un petit programme appelé **script**. `corpus-add` télécharge seulement la page et ne lance pas le script : la copie est alors presque vide. Par exemple, la carte d'une préfecture française n'a donné que 318 jetons : le niveau de danger du jour n'était pas dans la copie.

:::info[Si votre page est refusée]

Si votre page est refusée (un PDF scanné, une page dont le texte est chargé par un script, ou un site qui refuse les téléchargements : voir [Dépannage](#dépannage)), ou si sa copie est vide, faites les étapes 3 à 6 avec le document de Bénévent : `summarize corpus/80-benevento-aib-2026.pdf`. Lisez alors **80** au lieu de 81 dans ces étapes, et posez la question **11** à l'étape 6.

:::

### Étape 3 : Laisser le modèle écrire un brouillon de résumé

1. Dans le premier terminal, taper `workshop C`, puis demander, avec **votre** nom de fichier :

   ```text
   summarize corpus/81-my-town-fire-rules.html
   ```

2. Chercher la ligne `Skill(summarize)` : le modèle a ouvert la skill, parce que votre demande correspondait à sa description. Appuyer sur **Ctrl+O** pour voir ses étapes : lit-il bien `corpus/text/81-...md`, et non l'original, comme le dit la skill ? **Ctrl+O** à nouveau pour revenir.
3. Accepter chaque fichier qu'il veut écrire (**1. Yes**). Vous pouvez déjà y lire le résumé.

Vous devez obtenir deux fichiers, et une ligne dans `summaries/index.md` marquée `(draft, not verified)` :

- **`summaries/81-....md`** : le brouillon de résumé, avec `status: draft` et sans ligne `verified` ;
- **`summaries/checks/81-....md`** : la table de vérification, une ligne par phrase :

  ```text
  | # | Sentence of the summary | Original passage (copied word for word) | OK? | Correction |
  ```

Lors de notre essai du 30 octobre 2026, le résumé du document de Bénévent a pris 39 secondes et coûté 0,12 \$ : 14 phrases et une table de 14 lignes. Le modèle a aussi signalé une contradiction avec un autre résumé, sans trancher. Une ligne de la table marquait d'elle-même un décompte « à vérifier » : c'est le genre de ligne à vérifier en premier.

### Étape 4 : Vérifier chaque phrase vous-mêmes

1. Ouvrir la table `summaries/checks/81-....md`.
2. Ouvrir la source à côté : clic droit sur elle dans la liste des fichiers, puis **Open to the Side**.
   - Pour une **page web**, ouvrir la copie lisible `corpus/text/81-....md` (le `.html` original est le code de la page, difficile à lire), et si vous voulez la mise en page officielle, la page elle-même dans un onglet du navigateur.
   - Pour un **PDF**, ouvrir l'original `corpus/81-....pdf` : il s'ouvre dans une visionneuse de PDF.
3. Pour chaque ligne : copier quelques mots du passage original, les chercher dans la source avec `Ctrl+F`, et comparer avec la phrase. Les dates et les chiffres se comparent facilement, dans toutes les langues.

   Chercher trois sortes d'erreurs : un chiffre, une unité ou une date qui a changé ; une condition ou une exception qui a disparu (`except...`, `from level...`) ; une phrase qui dit plus que son passage. Le passage est copié mot pour mot : il doit donc être dans la source. Si on ne le trouve pas, chercher moins de mots. S'il n'y est toujours pas, la ligne est fausse.

4. Remplir la colonne **OK?** : `yes`, ou écrire la bonne version dans **Correction**, entre les deux `|` de la cellule, sans ajouter ni retirer de `|`. Enregistrer (`Ctrl+S`). Vous pouvez aussi le dire dans la conversation, à l'étape 5 : `I checked sentences 1 to 10, sentence 3 is wrong, it should be ...`.

:::caution[Important : chaque ligne doit être vérifiée]

Un « c'est bon » général ne suffit pas : la skill liste les lignes non vérifiées et vous demande de les vérifier. **C'est vous** qui signez, pas le modèle.

:::

### Étape 5 : Signer

1. Dans la conversation, dire au chatbot, avec vos noms. Garder ces mots : ils correspondent à la description de la skill, et c'est ce qui l'ouvre :

   ```text
   Validate summary 81. I checked every row. My name is <first name last name>.
   ```

   ou, si une phrase est fausse : `sentence 3 is wrong, it should be ...`. Lors de notre essai, un « I checked summary 80, it is correct » général a été refusé tant que les cellules **OK?** étaient vides : la skill demande chaque ligne.

2. La skill `validate-summary` applique seulement vos corrections, vous montre les phrases corrigées, et vous demande de les confirmer. Accepter les modifications (**1. Yes**).
3. Elle ajoute à l'en-tête une ligne `verified` avec `human:<first-name-last-name>`, et passe à `status: stable`.

### Étape 6 : Vérifier le résultat

1. Ouvrir `summaries/index.md` : sous `Added during the session`, votre résumé est passé de `(draft, not verified)` à `(human-reviewed)`. Ouvrir ensuite `summaries/81-...` et lire sa ligne `verified`, avec votre nom.
2. Quitter avec deux fois **Ctrl+C** : cette conversation vient de lire votre document, elle répondrait donc de mémoire.
3. Relancer `workshop C` et poser votre question 12 dans cette nouvelle conversation. Appuyer sur **Ctrl+O** : ouvre-t-il `summaries/81-...` ou `corpus/text/81-...` ?
   - `summaries/81-...` : le chatbot répond à partir du texte que vous avez vérifié et signé.
   - `corpus/text/81-...` seulement : il répond à partir du document complet, et votre résumé n'a pas servi cette fois.
   - Ni l'un ni l'autre : regarder les mots qu'il a cherchés, s'il a cherché. Ils peuvent montrer pourquoi il a manqué votre document.

   **Ctrl+O** à nouveau, puis quitter avec deux fois **Ctrl+C**.

:::note[Point de contrôle]

`corpus/80-...` et `corpus/81-...` existent, et `summaries/index.md` indique `(human-reviewed)` pour votre résumé.

:::

### À vous de réfléchir

Le modèle a écrit le résumé, et il avait probablement raison. **Pourquoi est-ce le nom d'une personne, et non celui du modèle, qui figure dans la ligne `verified` ?** (Indice : si un ou une jeune lit une date fausse dans le chatbot, qui en est responsable ?)

**Vous avez construit** une démarche de curation : une personne décide de ce qui entre, et signe ce que le chatbot en dit. **Réemployé dans** n'importe quel chatbot : la case _Knowledge_ ne vaut que ce que vous y mettez. Avec des jeunes : la boîte à données de WikiYouthBot. Dans un chatbot Open WebUI : les documents de la base de connaissances, voir [Partager un chatbot avec un groupe grâce à Open WebUI](/ressources/youth-ai-lab/guide-open-webui).

:::info[Notes pour l'animateur·rice]

Réponse attendue à la question de réflexion : une personne est responsable de ce que le chatbot dit à un ou une jeune ; le modèle propose, la personne décide.

:::

---

## Partie 4 : Écrire sa propre skill (25 min)

**Objectif** : comprendre ce qu'est une skill, en écrire une pour une tâche de votre choix, et tester qu'elle se déclenche quand il le faut, et seulement à ce moment-là.

### Ce que vous allez découvrir

- **Une skill** est un fichier texte, `SKILL.md`, dans son propre dossier de `.claude/skills/`, écrit en anglais courant, comme une procédure pour un ou une collègue. Pas de code.
- **Quand elle sert** : au début d'une conversation, le modèle ne voit que le nom et la description de chaque skill. Quand votre demande correspond à une description, il ouvre la skill et suit ses étapes.
- **La description est le déclencheur** : changez-la, et la skill se déclenche sur d'autres demandes.

### Une skill est une fiche d'activité pour le chatbot

Pensez à votre classeur de fiches d'activité. Le sommaire est posé sur la table. Quand le groupe a besoin d'un jeu ou d'un débat, vous ouvrez la bonne fiche et vous la suivez, étape par étape. Une skill fonctionne de la même façon.

|                                 | Préprompt (`AGENTS.md`, atelier 1)             | Skill (`SKILL.md`)                        |
| ------------------------------- | ---------------------------------------------- | ----------------------------------------- |
| Quand le modèle la lit          | toujours, avec chaque message                  | seulement quand une demande en a besoin   |
| Ce qu'elle dit                  | qui est le chatbot, et les règles de chaque réponse | comment faire une tâche, étape par étape |
| Qui décide de s'en servir       | vous : elle est toujours là                    | le modèle, d'après la description         |
| Ce qu'elle coûte dans le contexte | tout le texte, à chaque fois                 | quelques lignes, tant qu'elle ne sert pas |

**À retenir** : une skill fait qu'une tâche se déroule de la même façon à chaque utilisation. Le résumé reçoit sa table de vérification, et les règles restent écrites : `summarize` dit `Never add a verified entry yourself, and never mark a summary as checked.` (n'ajoutez jamais vous-même une ligne `verified`, et ne marquez jamais un résumé comme vérifié). Mais une skill n'est que du texte : rien n'oblige le modèle à l'ouvrir ni à la suivre. Appuyer donc sur **Ctrl+O** pour vérifier, et lire ce qu'il veut écrire avant d'accepter.

### Étape 1 : Lire une vraie skill

1. Ouvrir `.claude/skills/summarize/SKILL.md`, puis appuyer sur `Ctrl+Shift+V`.
2. Lire l'en-tête entre les deux lignes `---` : le `name` et la `description`. Votre demande de la partie 3, `summarize corpus/81-...`, y correspondrait-elle ? `Validate summary 81...` a ouvert `validate-summary` de la même façon : ses mots correspondent à la description de cette skill.
3. Lire les étapes et les règles. Trouver l'étape qui dit quel fichier lit le modèle, l'étape qui crée la table de vérification, et la règle sur `verified`. Vous avez vu les trois à l'œuvre dans la partie 3 : le modèle les a suivies parce que ce texte le lui disait.

### Étape 2 : Écrire une skill

Choisir une de ces idées, ou une des vôtres :

| Skill               | Ce qu'elle fait                                                                                                               | Dans WikiYouthBot              |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| `rumour-check`      | prend une phrase entendue quelque part et répond TRUE, FALSE ou NOT IN OUR DOCUMENTS, avec la source                          | J'ai entendu une rumeur        |
| `quiz-maker`        | écrit 5 questions à choix multiple pour les 12-15 ans à partir d'un résumé, chacune avec sa réponse et sa source               | Le bingo des ODD               |
| `explain-for-kids`  | réécrit un résumé pour un ou une jeune de 12 ans : phrases courtes, sans jargon, mêmes chiffres et même source                  | Le studio du chatbot           |
| `translate-summary` | traduit un résumé, garde les chiffres, et marque le résultat comme brouillon à vérifier                                        | La boîte à données             |
| `press-questions`   | prépare des questions de test dans les catégories de `test-questions.md`, chacune avec sa réponse attendue et sa source         | La conférence de presse        |

Voici un exemple complet. Dans la liste des fichiers, trouver la ligne `.claude / skills` (VS Code affiche les deux dossiers sur une seule ligne), faire un clic droit sur le mot `skills`, puis **New Folder...**, et le nommer `rumour-check`.

Ensuite, clic droit sur ce nouveau dossier, puis **New File...**, et le nommer `SKILL.md` (en majuscules). Y coller le texte suivant, et enregistrer (`Ctrl+S`) :

```markdown
---
name: rumour-check
description: Checks a rumour about wildfires against the documents. Use when the user says "I heard that...", "is it true that...", or gives a sentence to check.
---

# Checking a rumour

1. Write the rumour as one short sentence.
2. Search summaries/ first, then corpus/text/ if needed.
3. Answer with one of three words: TRUE, FALSE, or NOT IN OUR DOCUMENTS.
4. Give the sentence of the document that proves it, and the name of the document.

## What you don't do

- Answer from what you know without a document: then the answer is NOT IN OUR DOCUMENTS.
- Say TRUE or FALSE when the documents disagree: say so, and give both.
```

Cette skill reformule la rumeur, cherche d'abord dans les résumés puis dans les copies lisibles, répond par l'un des trois mots, et cite la phrase du document qui le prouve. Elle ne répond jamais de mémoire, et ne tranche pas quand les documents se contredisent.

Pour votre propre skill, garder les mêmes quatre parties : un **nom**, une **description** qui dit quand s'en servir, les **étapes**, et ce que le modèle ne doit **jamais** faire.

### Étape 3 : Tester quand elle se déclenche

1. **Quitter et relancer `workshop C`**, pour que le modèle voie à coup sûr votre nouvelle skill.
2. Faire une demande qui devrait utiliser votre skill. Pour `rumour-check` : `I heard that in France, clearing the brush around your house is only a piece of advice.` Vous devez voir la ligne `Skill(rumour-check)`, puis une recherche. La réponse est-elle TRUE, FALSE ou NOT IN OUR DOCUMENTS, avec une source ?
3. Faire une demande qui ne devrait **pas** l'utiliser : `Hello, who are you?`
4. Voir maintenant que la description est le déclencheur. La modifier, enregistrer, quitter (deux fois **Ctrl+C**), relancer `workshop C`, et tester à nouveau les deux demandes. Si la skill se déclenche déjà quand il le faut, essayer une description qui en dit moins : retirer la phrase qui commence par `Use when`, et voir ce qui change. Garder la version qui se déclenche quand il le faut, et seulement à ce moment-là. Une skill qui s'ouvre sur `Hello` ajoute son texte au contexte pour rien, et elle peut imposer sa forme à une réponse qui n'en a pas besoin.
5. Quitter avec deux fois **Ctrl+C** : la partie 5 commence dans le terminal.

Dans un vrai Codespace, le 30 octobre 2026, cette rumeur a utilisé `rumour-check` deux fois sur deux (`● Skill(rumour-check)`, puis une recherche dans les documents), et `Hello, who are you?` n'a utilisé aucune skill. Chaque essai remplissait environ 11 000 à 12 000 jetons de la fenêtre.

:::note[Point de contrôle]

Votre `SKILL.md` existe, il se déclenche sur une demande, et pas sur `Hello, who are you?`.

:::

### À vous de réfléchir

**Qu'est-ce qui va dans le préprompt, et qu'est-ce qui va dans une skill ?** (Indice : que doit faire le chatbot pour chaque réponse, et que doit-il faire seulement pour un type de demande ?)

**Vous avez construit** une skill. **Réemployé dans** les skills d'un chatbot OpenCode (voir [Construire son chatbot avec OpenCode](/ressources/youth-ai-lab/guide-opencode)), et dans tout agent construit sur la même idée.

:::info[Notes pour l'animateur·rice]

Un binôme sans idée prend `rumour-check`. Si un binôme ne voit pas apparaître `Skill(...)` : vérifier l'emplacement et le nom (`.claude/skills/<nom>/SKILL.md`, en majuscules), quitter et relancer `workshop C`, vérifier que la demande correspond à la description. Réponse attendue à la question de réflexion : les règles de chaque réponse vont dans le préprompt ; la procédure d'un type de demande va dans une skill.

:::

---

## Partie 5 : Clôture (10 min)

**Objectif** : mesurer ce qu'aujourd'hui a changé, sur les questions qui peuvent le montrer. Voir ensuite votre chatbot hors du terminal, et sauvegarder votre travail.

| Question | Ce qu'elle met à l'épreuve aujourd'hui                                                            |
| -------- | ------------------------------------------------------------------------------------------------- |
| 3        | une réponse qui n'est que dans un document complet : le modèle peut-il l'atteindre en cherchant ? |
| 8        | quelque chose qui change chaque jour : votre point de départ pour l'atelier 4                     |
| 11       | le document de Bénévent, que vous avez fait entrer aujourd'hui                                    |
| 12       | la page de votre territoire, dont vous avez vérifié et signé le résumé                            |

### Étape 1 : Rejouer et noter la colonne C

1. **Prédire** sur papier : lesquelles des questions 3, 11 et 12 vont progresser de la colonne B à la colonne C ?
2. Dans le premier terminal, rejouer le jeu de test en mode C :

   ```bash
   replay C
   ```

   Sous chaque réponse, la ligne `What the model did:` liste ce qu'il a lu, cherché et utilisé, par exemple `used the skill rumour-check`. Les questions du jeu de test ne sont pas des rumeurs : cet exemple peut ne pas apparaître. Lors de notre essai du 30 octobre 2026, aucune question n'a utilisé cette skill. Cet essai, avec les 11 questions du kit (sans question 12) : 1 min 42 et 0,30 \$.

3. Noter les questions du jour, et la question 8, que l'atelier 4 compare avec son outil, avec l'aide du juge (sans question 12 : `score C 3 8 11`) :

   ```bash
   score C 3 8 11 12
   ```

4. **Comparer la colonne C** avec les colonnes B et RAG dans `scores.md`, pour les questions 3, 11 et 12, et avec votre prédiction. Aujourd'hui, seules certaines questions sont notées : **la ligne Total ne veut donc rien dire ici**, lisez les lignes. Sans sauvegarde, il n'y a pas de colonnes B et RAG : comparer avec un binôme voisin.
5. **Comment lire les lignes.** Les questions 11 et 12 montrent ce que vous avez fait entrer : leurs documents sont arrivés aujourd'hui, donc une hausse vient de votre curation. La question 3 montre la recherche. En mode B, l'arrêté complet était déjà dans le contexte : la colonne B peut donc déjà être juste, et le gain est dans la jauge, environ 23 000 jetons contre environ 100 000. Face au RAG, la note peut monter : dans nos tests, les questions 3 et 11 ont chacune obtenu 1 avec le RAG et 2 en mode C.

:::info[Lignes 11 et 12 vides dans les colonnes B ou RAG ?]

À l'atelier 2, les questions 11 et 12 n'étaient notées que s'il restait du temps. Vos réponses sont revenues avec votre sauvegarde : notez-les d'abord, avec `score B 11 12` et `score RAG 11 12` (sans question 12 : `score B 11` et `score RAG 11`).

:::

### Étape 2 : Votre chatbot dans Open WebUI

1. Dans le second terminal, vérifier qu'Open WebUI est prêt, puis taper, avec le nom de votre chatbot :

   ```bash
   openwebui chatbot --name "Feurisson"
   ```

2. Ouvrir l'adresse, choisir votre chatbot, et poser votre question 12. Votre chatbot a maintenant vos documents, et il y cherche lui-même. Quand il cherche, une ligne apparaît au-dessus de la réponse : elle commence par `Explored` après plusieurs recherches, et par `View Result from` après une seule. Cliquer dessus pour voir ses recherches, comme avec **Ctrl+O** en mode C.
3. Votre skill n'a pas suivi : ce chatbot reçoit votre préprompt et vos fichiers de connaissances. La skill reste dans ce dépôt, et l'étape 3 la sauvegarde dans `my-work.zip`.

### Étape 3 : Sauvegarder son travail, remplir la carte de sortie

1. Taper `workshop-save`, puis faire un clic droit sur `my-work.zip` → **Download...**. Le fichier contient vos documents, votre résumé et votre skill. Apportez-le à l'atelier 4. Si votre ordinateur a déjà un `my-work.zip`, le nouveau s'appelle peut-être `my-work (1).zip` : apportez le plus récent.
2. Prendre une carte vierge ou une demi-feuille auprès de l'animateur·rice : c'est votre **carte de sortie**. Répondre seul·e, en quelques mots :
   1. En mode C, qui décide de ce que lit le modèle, et comment pouvez-vous le vérifier ?
   2. Pourquoi est-ce le nom d'une personne, et non celui du modèle, qui figure dans la ligne `verified` d'un résumé ?
   3. Quand le modèle ouvre-t-il une skill ?

**Ensuite** : l'atelier 4, [Brancher des outils sur un chatbot](/ressources/youth-ai-lab/construire-chatbot-4-outils). Ouvrez son propre Codespace depuis la page de son dépôt, https://github.com/Youth-AI-Lab/yal-workshop-tools, et apportez `my-work.zip`. Apportez aussi l'adresse de la page officielle qui donne le niveau de danger feu de votre territoire, s'il en existe une : à l'atelier 4, elle entre dans le fichier de l'outil.

:::info[Notes pour l'animateur·rice]

- **Open WebUI n'est pas prêt à la clôture** : sauter `openwebui chatbot` et montrer votre propre chatbot sur grand écran, construit lors de votre essai.
- **Un binôme utilise OpenCode** : on lui demande son accord avant chaque commande et chaque fichier écrit, ce sont les mêmes étapes avec davantage de réponses à donner. Avec une clé OpenRouter : ni juge, ni Open WebUI.
- **Un binôme a restauré une ancienne sauvegarde** (la date `saved on` n'est pas la fin de l'atelier 2) : `workshop-start 3 --from` avec le zip le plus récent, son nom exact entre guillemets.
- **Après l'atelier** : notez les durées réelles, surtout celle de la partie 3, et les coûts. Rappelez à chaque binôme de garder `my-work.zip` pour l'atelier 4.
- **Réemploi avec des jeunes** : la partie 3, c'est la boîte à données de WikiYouthBot. Un groupe apporte des documents locaux, et un adulte vérifie ce que le chatbot en dira avant qu'ils n'entrent. Pour construire un chatbot aux documents vérifiés pour un groupe : [Partager un chatbot avec un groupe grâce à Open WebUI](/ressources/youth-ai-lab/guide-open-webui).

:::

---

## Dépannage

Les problèmes communs (clé, Codespace, terminal) sont traités dans la section _Troubleshooting_ du fichier `SETUP.md` du dépôt.

- **`File not found: ...`** (affiché par `corpus-add`) : vérifier le nom du fichier. Pour le document de Bénévent, recopier la commande de `inbox/README.md` : elle tient sur une seule ligne.
- **`Not added: almost no text could be read (...). A scanned PDF (only images)? Ask the facilitator.`** : ce PDF est une image de page, sans texte à l'intérieur. Le chatbot ne pourrait pas le lire. Choisir un autre document, ou faire la partie 3 avec le document de Bénévent.
- **`Not added: almost no text could be read (...). The page layout was not recognised. Ask the facilitator.`** : cette page web charge son texte avec un script, il n'y a donc presque rien à y lire. Choisir une autre page (souvent le PDF de la même règle), ou faire la partie 3 avec le document de Bénévent.
- **`Could not download <address> (...)`** : certains sites refusent les téléchargements. Enregistrer le document sur votre ordinateur, le glisser dans la liste des fichiers du Codespace, puis donner son nom de fichier à `corpus-add`, avec `--url "<address>"` pour que l'en-tête garde sa source.
- **Claude Code demande `Do you want to...?` avant d'écrire un fichier** : c'est normal, il le demande chaque fois qu'une skill écrit ou modifie un fichier. Lire ce qu'il veut faire, puis accepter avec **1. Yes**.
- **Ma skill ne se déclenche pas** : vérifier son emplacement et son nom, `.claude/skills/<nom>/SKILL.md`, avec `SKILL.md` en majuscules. Quitter et relancer `workshop C`, puis vérifier que votre demande correspond à sa `description`.
- **`Open WebUI is not running. Type: openwebui start`** : taper `openwebui start` dans le second terminal, attendre `Open WebUI is ready`, puis relancer `openwebui chatbot`.

---

## Indicateurs de réussite

- Chaque binôme a vu `Key OK` et `Ready for workshop 3`, et `openwebui start` tourne dans le second terminal.
- Chaque binôme **sait dire quels fichiers** le modèle a ouverts pour les questions 3 et 7, grâce à **Ctrl+O**.
- `corpus/80-...` et `corpus/81-...` existent, et `summaries/index.md` indique `(human-reviewed)` pour le résumé de chaque binôme, après une vérification **ligne par ligne**.
- Chaque binôme a **une skill qui se déclenche** sur une demande, et pas sur `Hello, who are you?`.
- La colonne C est notée pour les questions 3, 8, 11 et 12, et `my-work.zip` est téléchargé.
- Les cartes de sortie contiennent les éléments d'une bonne réponse :
  - **Question 1** : le modèle décide, étape par étape ; **Ctrl+O** montre chaque fichier ouvert et chaque recherche.
  - **Question 2** : une personne a vérifié le résumé contre la source, et elle en est responsable.
  - **Question 3** : quand une demande correspond à la description de la skill ; jusque-là, le modèle ne connaît que les noms et les descriptions.

---

_Cette fiche fait partie du projet [Youth AI Lab](/projets/youth-ai-lab), financé par le programme Erasmus+. Adaptation française de https://github.com/Youth-AI-Lab/yal-workshop-search (anglais), contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr). Les documents officiels du corpus appartiennent à leurs éditeurs et ne sont pas couverts par cette licence._

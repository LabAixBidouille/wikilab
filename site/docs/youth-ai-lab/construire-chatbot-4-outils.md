---
id: construire-chatbot-4-outils
title: 'Brancher des outils sur un chatbot'
sidebar_label: 'Brancher des outils sur un chatbot'
sidebar_position: 17
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Brancher des outils sur un chatbot

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Éducation civique</span>
  <span className="badge badge--info">IA générative</span>
  <span className="badge badge--info">Esprit critique</span>
  <span className="badge badge--info">Outils MCP</span>
</div>

| Projet       | Durée                           | Difficulté    | Âge                       |
| ------------ | ------------------------------- | ------------- | ------------------------- |
| Youth AI Lab | 2 h (110 min + 10 min de marge) | Intermédiaire | Adultes (animateur·rices) |

## Matériel

- **Le dépôt de l'atelier**, où l'on travaille : https://github.com/Youth-AI-Lab/yal-workshop-tools
- **Les diapositives** projetées par l'animateur·rice : https://youth-ai-lab.github.io/yal-workshop/4/
- **La fiche animateur** (en anglais) : https://youth-ai-lab.github.io/yal-workshop/4/facilitator.html
- **Par binôme** : un ordinateur avec un navigateur, un compte GitHub, une clé d'API Anthropic, le fichier `my-work.zip` sauvegardé à la fin de l'atelier 3, et l'adresse de la page officielle qui donne le niveau de danger feu de forêt de son territoire, s'il en existe une
- **Imprimés** : la fiche d'une page `sheet.md` du dépôt (une par binôme) et les cartes de sortie (une par personne)

</div>

<img src="/img/ressources/youth-ai-lab/construire-chatbot-4-outils/icone.png" alt="Brancher des outils sur un chatbot" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

:::info[Atelier 4 sur 5 de la série Construire son propre chatbot : ce qu'il lit, et qui décide]

Cette série de cinq ateliers de 2 h s'adresse aux **animateur·rices**, avant tout usage avec des jeunes : on y construit, pièce par pièce, un chatbot sur la prévention des feux de forêt, pour comprendre ce qu'il y a derrière les cases _Instructions_ et _Knowledge_ d'un Claude Project ou d'un Gemini Gem. Dans cette fiche, les « participant·es » sont donc les animateur·rices qui suivent l'atelier, en binômes.

Les pages, les commandes et le Codespace sont en anglais ; cette fiche en est l'adaptation française. Les captures d'écran sont dans le dépôt de l'atelier.

- Atelier précédent : [Laisser un chatbot chercher et lui apprendre des savoir-faire](/ressources/youth-ai-lab/construire-chatbot-3-recherche)
- Atelier suivant : [Organiser ce que sait un chatbot dans un wiki](/ressources/youth-ai-lab/construire-chatbot-5-wiki)

:::

## Introduction

Jusqu'ici, le chatbot ne lisait que ce qui se trouvait déjà dans le Codespace : ses instructions, ses documents, ses skills. Mais certaines connaissances changent tous les jours, comme le niveau de danger feu de forêt, et aucun document ne peut les contenir. Aujourd'hui, on branche des **outils** sur le chatbot : de petits programmes qu'il peut appeler pendant qu'il répond, et qui lui rapportent ce qu'ils trouvent. La question du jour :

> **Que se passe-t-il quand le chatbot agit à l'extérieur ?**

Un document dit ce qui était vrai le jour où il a été écrit. Le niveau de danger feu de forêt, lui, est décidé chaque jour par une autorité, et le chatbot ne peut pas le deviner. Un outil comble ce manque : le modèle lui pose une question, l'outil répond par un fait, et le modèle s'en sert dans sa réponse.

Mais un outil est un programme qui tourne **dans votre Codespace, avec vos droits**. Il peut lire des fichiers, et certains outils envoient ce que le modèle leur demande (un lieu, un mot) à un service sur Internet. Avant d'en brancher un, on lit donc ce qu'il fait, comme on regarde une application avant de l'installer sur son téléphone.

Un outil, enfin, ne rapporte que ce que contiennent ses données. L'outil de danger feu de forêt de l'atelier lit un fichier qu'**une personne** remplit, le jour même, à partir de la source officielle. Si personne ne l'a rempli, l'outil le dit, et ne donne aucun niveau.

Pendant toute la séance, on continue de tester le chatbot avec les mêmes questions : aujourd'hui, la colonne **D**, avec les questions 8, 11 et 12.

**Le lien avec WikiYouthBot.** La partie 2 donne au chatbot ce que les jeunes demandent souvent en premier : « Peut-on aller en forêt aujourd'hui ? ». Seule une source officielle peut y répondre, le jour même. La partie 4 donne la question à se poser avant toute activité avec un chatbot qui utilise des outils : qu'envoie-t-il à l'extérieur, et qui le lit ? Les mêmes outils peuvent se brancher sur un chatbot OpenCode : voir le guide [Construire son chatbot avec OpenCode](/ressources/youth-ai-lab/guide-opencode), partie 6.

La série avance une pièce du chatbot à la fois :

- **Atelier 1** : les instructions, et comment tester un chatbot
- **Atelier 2** : toutes les connaissances dans le contexte, puis un RAG
- **Atelier 3** : le modèle cherche tout seul, et les skills
- **Atelier 4** (celui-ci) : des **outils** qui apportent les faits du jour
- **Atelier 5** : organiser ce qu'il sait dans un wiki, et emballer le chatbot de son territoire

### Structure de l'atelier

| Partie                                              | Niveau | Durée  |
| --------------------------------------------------- | ------ | ------ |
| Partie 1 : Accueil                                  | -      | 20 min |
| Partie 2 : Notre outil, le niveau de danger du jour | ★★     | 20 min |
| Partie 3 : Des serveurs qui existent déjà           | ★★     | 30 min |
| Partie 4 : Lire avant d'installer, citer sa source  | ★★★    | 25 min |
| Partie 5 : Clôture                                  | -      | 15 min |
| Marge                                               | -      | 10 min |

### Avant de commencer

**Apporter `my-work.zip`**, le fichier sauvegardé à la fin de l'atelier 3. Il contient le préprompt du binôme, sa question 12, ses documents, son résumé et sa skill. Sans lui, l'exemple du kit (Feurisson) devient le préprompt, et le document de Bénévent est ajouté automatiquement. **Apporter aussi l'adresse de la page officielle qui donne le niveau de danger feu de forêt de son territoire**, s'il en a une : en partie 4, on remplit son entrée dans le fichier de l'outil.

Les documents de référence sont tous dans le Codespace, dans la liste des fichiers à gauche :

- `mcp/fire-danger.json` : les données de l'outil, une entrée par territoire. On le remplit aujourd'hui.
- `mcp/fire_danger_server.py` : le programme de l'outil, environ 160 lignes de Python.
- `.mcp.json` : la liste des outils que branche le mode D, et comment chacun démarre.
- `test-questions.md` et `scores.md` : le jeu de test et la feuille de notes. La façon de noter (0, 1 ou 2) est dans `test-questions.md`, section « How to score ».
- `SETUP.md` : mise en place, commandes et problèmes courants. La jauge (la ligne `... / 200k` au-dessus de la zone de saisie) y est expliquée à l'étape 4.

### Glossaire

- **Modèle** : le programme d'IA qui lit le texte qu'on lui envoie et écrit la réponse. Dans l'atelier, c'est le même modèle d'Anthropic pour tous les binômes.
- **Contexte** : tout ce que le modèle lit avant de répondre (instructions, documents, conversation, résultats des outils). Sa taille est limitée.
- **Jeton** (_token_) : un morceau de mot. La taille du contexte se compte en jetons : 200k signifie 200 000 jetons.
- **Jauge** : la ligne au-dessus de la zone de saisie qui montre combien de jetons occupe le contexte.
- **Préprompt** (ou instructions) : le texte, dans `AGENTS.md`, qui dit au chatbot qui il est et quelles règles il suit.
- **Skill** : une procédure écrite que le modèle peut suivre quand une demande correspond à sa description (vue à l'atelier 3).
- **Outil** : un petit programme que le modèle peut appeler pendant qu'il répond, et qui lui rapporte un fait.
- **MCP** (_Model Context Protocol_) : la manière commune de brancher un tel programme sur un chatbot. Un même programme d'outils peut se brancher sur Claude Code, sur OpenCode ou sur un autre chatbot.
- **Serveur MCP** : le programme qui fournit un ou plusieurs outils. Il tourne dans le Codespace.
- **Description d'un outil** : le texte qui dit au modèle à quoi sert l'outil. C'est d'après elle que le modèle décide de l'appeler.
- **Codespace** : un ordinateur prêté par GitHub, ouvert dans le navigateur avec l'éditeur VS Code. Rien à installer.
- **Claude Code** : le programme qui fait tourner le chatbot dans le terminal du Codespace. **OpenCode** est le second moteur possible.
- **Mode D** : le mode de l'atelier, lancé par `workshop D`. C'est le mode C de l'atelier 3 (le modèle cherche dans les documents) plus des outils.
- **`replay` et `score`** : les commandes qui reposent toutes les questions du jeu de test, puis les notent avec l'aide d'un juge (un autre modèle qui compare chaque réponse à la réponse attendue).

## Objectifs d'apprentissage

**À la fin de cet atelier, les participant·es seront capables de :**

- **Expliquer** pourquoi seul un outil peut donner le niveau de danger du jour, et lire un appel d'outil ainsi que ce qu'il a rapporté.
- **Remplir** l'entrée d'un territoire à partir de sa source officielle, pour que l'outil donne ce niveau avec sa source.
- **Comparer** trois outils : ce que chacun lit, ce qui sort du Codespace, ce que chacun coûte dans le contexte.
- **Décider** s'il faut brancher un outil, d'après ce qu'il peut faire avec ses droits et ce qu'il envoie à l'extérieur.
- **Adapter** la démarche à un chatbot destiné à des jeunes : se demander, avant toute activité, ce qu'il envoie à l'extérieur et qui le lit.

:::info[Notes pour l'animateur·rice]

Prévoir environ 1 heure de préparation :

- **Une clé d'API Anthropic par binôme**, toutes dans **un seul workspace pour la salle**, plafonné à **3 dollars × le nombre de binômes**. Le plafond porte sur le workspace et non sur chaque clé : un binôme peut donc consommer la part d'un autre. Garder la console Anthropic ouverte pendant l'atelier. Coût mesuré par binôme pour ce que demande la page : environ 0,45 dollar. Chaque organisation partenaire paie ses propres séances (son compte, son workspace, ses clés). Non vérifié : si le plafond de la console est mensuel, les ateliers du même mois le partagent. Il faut alors compter 3 dollars × binômes × ateliers du mois, ou le relever avant chaque atelier. Coût indicatif par binôme pour toute la série : à compléter à la répétition. Pour créer une clé et fixer un plafond : guide [Partager un chatbot avec un groupe grâce à Open WebUI](/ressources/youth-ai-lab/guide-open-webui).
- **Lire les sources officielles du jour**, le matin même : la page de chaque territoire, donnée dans le champ `source` de son entrée dans `mcp/fire-danger.json`. Noter pour chacune s'il y a un niveau aujourd'hui, une phrase qui annonce la fin de la saison, ou rien. Rappeler à la fin de l'atelier 3 aux binômes d'un autre territoire d'apporter l'adresse de leur page officielle.
- **Faire l'atelier soi-même** dans un Codespace neuf (environ 20 min), de `workshop-start 4` jusqu'à `replay D 8`.
- **Préparer la page piégée** de la partie 4 : https://youth-ai-lab.github.io/yal-workshop/4/trap-page.html à enregistrer sur son ordinateur. Jamais dans le Codespace d'un binôme, jamais avant un `replay`.
- **Imprimer** la fiche d'une page et les cartes de sortie. Si la salle a besoin d'une autre langue, traduire la fiche en gardant en anglais les commandes et ce qu'affiche le terminal.

En mode D, le modèle peut lire tous les fichiers du dépôt, y compris sa page `README.md`, et `replay` ne le signale pas. Ne jamais mettre cette fiche, ni la fiche animateur, dans le dépôt ou le Codespace d'un binôme : ses notes donnent le statut d'Anvers et la réponse attendue à la question 8. C'est pourquoi les pages des participant·es ne donnent jamais la réponse attendue à la question 8, ni le statut à choisir pour Anvers : garder cette règle si vous les adaptez.

:::

## Partie 1 : Accueil (20 min)

**Objectif** : ouvrir le Codespace de cet atelier et récupérer le travail des ateliers précédents.

:::caution[Étape 1 : Ouvrir son Codespace et enregistrer sa clé]

Si le délai d'inactivité de ce compte GitHub n'est pas encore réglé, faire d'abord l'étape 1 de `SETUP.md` (1 minute). Puis ouvrir le Codespace du binôme à cette adresse (un par binôme) :

https://codespaces.new/Youth-AI-Lab/yal-workshop-tools

Ce lien crée une copie personnelle du dépôt, dans VS Code qui tourne dans le navigateur. Suivre ensuite les étapes 1 à 5 de `SETUP.md` : laisser le Codespace attendre, l'ouvrir, enregistrer sa clé avec `workshop-login`, vérifier le message `Key OK`, et ouvrir un second terminal.

:::

:::note[Si vous utilisez OpenCode]

Mêmes commandes, après `workshop-login --engine opencode`. Le mode D donne à OpenCode les mêmes outils. OpenCode demande l'accord avant chaque commande du terminal et chaque fichier qu'il écrit, mais pas avant d'appeler l'un de ces outils. Avec une clé OpenRouter (`sk-or-`), le juge de `score` ne fonctionne pas, car il lui faut une clé Anthropic : on note alors seul.

:::

:::info[Pas de Codespace ?]

Le même dépôt s'ouvre sur son propre ordinateur, avec Docker et VS Code : voir le guide [Ouvrir les ateliers sur son propre ordinateur](/ressources/youth-ai-lab/guide-dev-containers).

:::

:::caution[Étape 2 : Récupérer son travail]

1. **Glisser `my-work.zip`** depuis son ordinateur dans la liste des fichiers du Codespace. Si le fichier a été téléchargé plusieurs fois, le navigateur a pu nommer le plus récent `my-work (1).zip` : glisser celui-là, et taper son nom exact entre guillemets, par exemple `workshop-start 4 --from "my-work (1).zip"`.
2. Dans le premier terminal, taper :

   ```bash
   workshop-start 4 --from my-work.zip
   ```

   On doit voir `Restored from my-work.zip (saved on ...)` : vérifier que cette date est bien celle de la fin de l'atelier 3. Puis la liste des fichiers restaurés, et :

   ```text
   Prepared for this workshop:
     - nothing needed: everything is already here.

   Ready for workshop 4.
   Today's page: README.md (Ctrl+Shift+V to read it as a page)
   First command: workshop D
   ```

   Sans sauvegarde, taper `workshop-start 4`. Les lignes « Prepared » disent alors que `AGENTS.md` est désormais une copie de l'exemple Feurisson, et que le document de Bénévent a été ajouté au corpus, pour la question 11.

:::

:::info[La première fois que vous tapez workshop D]

Dans ce Codespace, Claude Code demande à nouveau si l'on fait confiance au dossier. Le choix proposé est `No, exit` : appuyer sur la **flèche du bas** pour choisir `Yes, I trust this folder`, puis sur **Entrée**. Si Claude Code s'est fermé, taper de nouveau `workshop D`. Plus de détails à l'étape 4 de `SETUP.md`.

:::

:::note[Point de contrôle]

`Key OK`, puis `Ready for workshop 4`.

:::

:::info[Notes pour l'animateur·rice]

Le binôme doit restaurer le fichier le plus récent (peut-être `my-work (1).zip`, avec son nom exact entre guillemets) et vérifier la date `saved on`. Si un binôme a restauré une ancienne sauvegarde, relancer `workshop-start 4 --from` avec le fichier le plus récent. À la fin de la partie, toute la salle doit voir `Ready for workshop 4`.

:::

## Partie 2 : Notre outil, le niveau de danger du jour (20 min)

**Objectif** : voir ce que l'outil sait aujourd'hui, lire ce qu'il renvoie au modèle, puis remplir l'entrée d'Anvers à partir de sa source officielle, et reposer la question.

### Ce que vous allez découvrir

- **Un outil** est un petit programme que le modèle peut appeler pendant qu'il répond. Il rapporte un fait, ici le niveau du jour, lu dans un fichier.
- **MCP** (_Model Context Protocol_) est la manière commune de brancher un tel programme sur un chatbot : un même programme d'outils, appelé **serveur**, peut se brancher sur Claude Code, sur OpenCode ou sur un autre chatbot.
- **C'est le modèle qui décide** quand appeler un outil, d'après sa description. Il ne demande pas l'accord d'abord : l'atelier autorise les outils du mode D.

### Ce que lit le modèle en mode D

Le modèle reçoit, d'un côté, `AGENTS.md`, l'indication de l'endroit où se trouvent les connaissances, et la liste des outils avec leurs descriptions ; de l'autre, la question. Pour répondre, il a deux chemins :

- **chercher un mot ou lire un fichier** dans `summaries/` et `corpus/text/` ;
- **appeler un outil** (`fire-danger` ou `time`), qui ne lui renvoie que ce que l'outil choisit de renvoyer.

**L'idée clé** : le mode D, c'est le mode C plus des outils. Ce qu'un outil renvoie entre dans le contexte exactement comme un document que le modèle aurait lu.

:::caution[Étape 1 : Voir les outils du mode D]

1. Dans le premier terminal, taper `workshop D`.
2. Dans la conversation, taper `/mcp` et appuyer sur Entrée. On doit voir :

   ```text
     Manage MCP servers
     2 servers
       Built-in MCPs (always available)
     ❯ ✔ fire-danger   2 tools
       ✔ time          2 tools
   ```

3. Appuyer sur Entrée sur `fire-danger`, puis sur `1. View tools` : ses deux outils sont `territories` (la liste des territoires qu'il connaît) et `fire_danger` (le niveau d'un territoire aujourd'hui). Appuyer sur **Échap** jusqu'à revenir dans la conversation.

:::

:::caution[Étape 2 : La question 8, avant que quiconque remplisse le fichier]

1. Poser la question 8 de `test-questions.md`. Elle porte sur Anvers, aujourd'hui.
2. Au-dessus de la réponse, une ligne grise résume les appels d'outils, par exemple `Called fire-danger 2 times`. Appuyer sur **Ctrl+O** pour voir chaque appel : la ligne `● fire-danger - fire_danger (MCP)(territory: "Antwerp")` montre ce que le modèle a demandé, et le bloc en dessous ce que l'outil a renvoyé. Appuyer de nouveau sur **Ctrl+O** pour revenir.
3. Lire ce qui est revenu. Le fichier n'est pas daté d'aujourd'hui, donc l'outil ne donne pas de niveau (`"level": null`) et explique pourquoi, dans un champ appelé `why_no_level`. À l'écran, l'outil renvoie un seul long texte : chaque guillemet est précédé d'un `\`, et `\n` marque un retour à la ligne. Le voici sans eux :

   ```text
   "why_no_level": "The file is dated YYYY-MM-DD, not today (...). Nobody has filled in today's level yet."
   ```

   Que fait le modèle de cette réponse ? Lors du test du 2026-10-30, il a appelé `fire_danger`, puis `territories` (la liste des territoires), sans rien demander, en 6 secondes environ, pour environ 0,03 dollar.

:::

:::caution[Étape 3 : Remplir Anvers à partir de sa source officielle]

L'outil lit `mcp/fire-danger.json`. Une personne le remplit, le jour même, à partir de la source officielle.

1. Ouvrir `mcp/fire-danger.json`. Trouver l'entrée d'Anvers (elle commence par `"Antwerp`). Son champ `source` donne la page officielle : l'ouvrir dans un onglet du navigateur, et lire ce qu'elle dit **aujourd'hui** pour la province d'Anvers.
2. Dans le fichier, écrire la date du jour dans `"date"`, tout en haut, sous la forme année-mois-jour, par exemple `"2026-11-05"`.
3. Dans l'entrée d'Anvers, remplir :
   - `"status"` : `"live"` si la page affiche un niveau pour aujourd'hui, `"season-over"` si elle dit que la saison des feux est terminée, `"no-level-shown"` si elle n'affiche aucun niveau aujourd'hui ;
   - `"source_says"` : la phrase de la page sur aujourd'hui, recopiée telle quelle, dans sa langue ;
   - seulement si le statut est `"live"` : `"level"`, le niveau du jour, et les lignes de `"advice"`, recopiées telles quelles.

   Garder les guillemets : chaque valeur entre guillemets, une virgule entre deux lignes, et aucune après la dernière. Enregistrer (`Ctrl+S`).

4. Dans la même conversation, reposer la question 8. L'outil relit le fichier à chaque appel : il n'y a rien à redémarrer. Appuyer de nouveau sur **Ctrl+O** : qu'est-ce qui a changé dans ce que l'outil a renvoyé ?
5. Quitter avec **Ctrl+C deux fois**.

:::

:::caution[Ne jamais inventer un niveau]

N'écrire que ce que dit la source officielle, le jour même. Si la page n'affiche aucun niveau, écrire le statut et sa phrase, jamais un niveau de son cru.

:::

:::info[Quand l'outil donne-t-il un niveau ?]

L'outil ne donne un niveau que si la date est celle du jour et si le statut est `"live"`. Avec un autre statut, il ne donne aucun niveau et explique pourquoi, avec la phrase de la source. Un vieux fichier ne passe jamais pour le niveau du jour.

Si le chatbot dit que `fire-danger.json is malformed`, il manque un guillemet ou une virgule. Le nom du fichier passe en rouge, avec le nombre de problèmes à côté. Chercher la ligne ondulée rouge dans l'éditeur et y poser la souris : VS Code dit ce qui manque (ici : `Expected comma`). Une virgule manquante se trouve en général à la fin de la ligne juste au-dessus. Corriger et enregistrer. Les captures de ces écrans sont dans le dépôt.

:::

:::note[Point de contrôle]

L'entrée d'Anvers porte la date du jour, un statut et la phrase de sa source, et la question 8 obtient une réponse qui cite cette source.

:::

### Pour réfléchir

Le modèle ne connaissait pas le niveau d'Anvers, et l'outil ne l'a pas deviné : il a lu un fichier que vous avez rempli. **Qui est responsable du niveau que donne le chatbot ?**

:::info[Notes pour l'animateur·rice]

**Remplir Anvers ensemble sur le grand écran** à partir de sa page officielle, puis chaque binôme dans son fichier. Faire appuyer tout le monde sur Ctrl+O.

Hors saison, la page officielle peut annoncer la fin de la saison tout en affichant encore un code couleur (c'est ce qui a été observé le 2026-10-30). Le choix de l'atelier est alors `"season-over"`, avec la phrase sur la saison dans `"source_says"` : l'outil ne donne pas de niveau et le chatbot dit que la saison est terminée. Si vous préférez montrer le code, écrivez `"live"` avec ce code, et dites clairement en salle que l'autorité elle-même annonce la fin de la saison.

Pour lancer la discussion : « Qui a décidé d'appeler l'outil, et qui a décidé de ce qu'il a répondu ? » Le modèle a décidé de l'appeler (d'après sa description), le fichier a décidé de la réponse, et **une personne** a rempli le fichier. Réponse au « Pour réfléchir » : la personne qui a rempli le fichier, à partir de la source officielle, est responsable.

:::

## Partie 3 : Des serveurs qui existent déjà (30 min)

**Objectif** : utiliser deux serveurs écrits par d'autres, lire comment ils sont branchés, et voir ce que chacun envoie à l'extérieur et ce qu'il coûte dans le contexte.

### Ce que vous allez découvrir

- **Time** : le serveur d'exemple officiel de MCP. Il donne la date et l'heure dans un fuseau horaire. Il n'appelle aucun service : il lit l'horloge du Codespace.
- **Open-Meteo** : un serveur écrit par un bénévole, pour le service météo du même nom. Il envoie un lieu et ses coordonnées à Open-Meteo, sur Internet, et rapporte la prévision.
- **Chaque outil a une description**, et les descriptions entrent dans le contexte à chaque message, que l'outil serve ou non.

### Trois serveurs côte à côte

| Serveur       | Qui l'a écrit                          | Ce qu'il lit                             | Ce que le serveur lui-même envoie sur Internet      |
| ------------- | -------------------------------------- | ---------------------------------------- | --------------------------------------------------- |
| `fire-danger` | l'atelier                              | le fichier `mcp/fire-danger.json`        | rien                                                |
| `time`        | le projet MCP (exemple officiel)       | l'horloge du Codespace                   | rien                                                |
| `open-meteo`  | un bénévole (logiciel libre)           | le service Open-Meteo, sur Internet      | le lieu et les coordonnées demandés par le modèle   |

Et pour les trois : ce que l'outil renvoie entre dans le contexte, et part donc chez l'entreprise du modèle (Anthropic) avec la question, comme tout ce qui se trouve dans la conversation.

**L'idée clé** : un serveur est un programme qui tourne dans le Codespace avec vos droits. Ce qu'il peut faire, et ce qu'il envoie à l'extérieur, est écrit dans son code et dans la façon dont il est lancé, pas dans son nom.

:::caution[Étape 1 : Lire comment les outils sont branchés]

1. Ouvrir `.mcp.json`. Il liste les serveurs du mode D : pour chacun, le programme qui le lance (`command`) et ses options (`args`).
2. Trouver la ligne de `time`. Quelle option reçoit-il ? (`--local-timezone Europe/Paris` : le fuseau horaire qu'il utilise quand le modèle n'en nomme pas. À l'étape 2, observer quel fuseau horaire le modèle demande.)

:::

:::caution[Étape 2 : Une question qui a besoin de l'heure]

La carte du Pla Alfa, en Catalogne, est mise à jour à heures fixes : le résumé consacré à la Catalogne dit lesquelles. Pour savoir si la mise à jour du jour a déjà eu lieu, le modèle a besoin de l'heure **actuelle** à Barcelone. Aucun document ne la contient.

1. Taper `workshop D`, puis demander :

   ```text
   Has the Pla Alfa map of Catalonia already had its morning update today?
   ```

2. Appuyer sur **Ctrl+O** : quels outils le modèle a-t-il appelés ? A-t-il interrogé `time` ? Appuyer de nouveau sur **Ctrl+O**.
3. Poser maintenant la même question, en nommant l'outil :

   ```text
   Use the time tool: is it already past 9:30 in Barcelona, so that the Pla Alfa map has had its morning update?
   ```

4. Comparer les deux réponses. Lors du test du 2026-10-30, le modèle n'a pas appelé `time` la première fois : il a trouvé les heures de mise à jour dans le résumé, puis a dit qu'il ne pouvait pas savoir. La seconde fois, il a appelé `time` (`get_current_time`, fuseau `Europe/Madrid`) et a répondu avec l'heure de Barcelone. La date, le modèle l'avait déjà : Claude Code la lui donne, et l'outil de danger feu de forêt aussi.
5. Quitter avec **Ctrl+C deux fois**.

:::

:::caution[Étape 3 : Brancher la météo]

L'outil météo n'est pas dans le mode D par défaut. Pour le brancher le temps d'une conversation, taper :

```bash
WORKSHOP_WEATHER=1 workshop D
```

1. Taper `/mcp` : on doit voir un troisième serveur, `✔ open-meteo   17 tools`. L'atelier n'en montre au modèle **que 2** (la prévision, et la recherche d'un lieu par son nom) : les descriptions des 17 outils font environ 112 000 caractères, celles des 2 retenus environ 12 000. Appuyer sur **Échap**. L'atelier autorise aussi ces deux outils : le modèle les appelle sans demander, et ce qu'il leur envoie sort du Codespace.
2. Demander :

   ```text
   Will it be windy tomorrow in La Rochelle?
   ```

   Appuyer sur **Ctrl+O** : qu'est-ce que le modèle a envoyé à Open-Meteo ? Lors du test du 2026-10-30, il a envoyé les coordonnées de La Rochelle (46.16, -1.15), qu'il connaissait sans chercher, et la réponse est arrivée en 5 secondes environ.

3. Demander maintenant : `Given the weather, what is the fire danger level today in La Rochelle?` Le modèle présente-t-il une prévision météo comme si c'était le niveau officiel ? Lors du test, non : il a appelé l'outil de danger feu de forêt, et a dit que la météo ne donne pas le niveau officiel. Un test sur une seule question ne prouve pas grand-chose : essayez vous-même.
4. Regarder la jauge. Lors du test, avec la météo branchée, chaque réponse occupait environ 14 000 jetons de contexte, contre 8 000 sans elle. Les descriptions des outils entrent dans le contexte à chaque message, même quand le modèle ne les appelle pas.
5. Quitter avec **Ctrl+C deux fois**.

:::

:::info[Citer Open-Meteo]

Les prévisions viennent d'Open-Meteo (https://open-meteo.com). Son service gratuit est réservé à un usage non commercial, et ses données sont sous licence CC BY 4.0 : un chatbot qui les affiche doit donner ce lien.

:::

:::caution[La météo n'est pas un niveau de danger feu de forêt]

Le vent et l'air sec font monter le danger, mais le niveau du jour est décidé par une autorité, avec sa propre échelle. Si votre chatbot a confondu les deux, ajouter une règle dans `AGENTS.md`, par exemple :

```text
Never give a weather forecast as a fire danger level: only the fire-danger tool gives the official level.
```

:::

:::note[Point de contrôle]

Pour chacun des trois serveurs, on sait dire ce qu'il lit et ce qui sort du Codespace.

:::

### Pour réfléchir

Le modèle a choisi le lieu et les coordonnées, et le serveur météo les a envoyés à Open-Meteo. **Qu'est-ce qu'un serveur pourrait envoyer d'autre, si on l'interrogeait sur l'adresse d'un·e jeune ?**

:::info[Notes pour l'animateur·rice]

Deux moments à animer :

1. **La question du Pla Alfa** : le modèle n'a pas appelé `time` tant que la question ne le nommait pas. C'est attendu : nommer l'outil dans la question. Message à faire passer : « Un outil auquel le modèle ne pense jamais coûte quand même ses descriptions à chaque message. » Montrer la jauge.
2. **La météo** : qu'est-ce qui est sorti du Codespace ? Les coordonnées de La Rochelle, envoyées à Open-Meteo par un serveur écrit par un bénévole, qui tourne dans notre Codespace (Open-Meteo voit aussi l'adresse du Codespace). « Pour une ville, d'accord. Pour l'adresse d'un·e jeune ? »

Si Open-Meteo ne répond pas (réseau, limite), sauter l'étape météo : les descriptions et la jauge restent intéressantes à montrer avec `/mcp`.

:::

## Partie 4 : Lire avant d'installer, citer sa source (25 min)

**Objectif** : lire ce que fait vraiment un serveur avant de le brancher, puis remplir l'entrée de son propre territoire dans le fichier de l'outil, avec sa source.

### Ce que vous allez découvrir

- **Un serveur démarre avec vos droits.** Il peut lire les fichiers du Codespace, et certains envoient des données à un service sur Internet. Le modèle décide quand l'appeler, mais c'est le programme qui décide de ce qu'il fait.
- **Ce qu'un outil renvoie entre dans le contexte.** Une page web ou la réponse d'un service peut contenir des instructions, comme un document. L'animateur·rice en montre un exemple.
- **La source fait partie des données.** L'entrée d'un territoire dit d'où vient le niveau, pour que chacun puisse le vérifier.

### Avant d'installer un serveur : cinq questions

| Question                                          | Où regarder                                                                                                      |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Qui l'a écrit, et est-il encore entretenu ?       | sa page (GitHub, PyPI, npm) : dernière version, licence                                                          |
| Que lit-il ?                                      | son code, et les options dans `.mcp.json`                                                                        |
| Qu'envoie-t-il à l'extérieur, et à qui ?          | son code : les adresses qu'il appelle ; les conditions d'utilisation du service                                  |
| Écrit-il ou supprime-t-il quelque chose ?         | sa liste d'outils : tout outil qui écrit, supprime ou envoie un message                                          |
| Sa version est-elle figée ?                       | `.mcp.json`, et la façon dont il a été installé (ici : dans l'image du Codespace, avec des versions figées)      |

**L'idée clé** : une description dit à quoi sert un outil. Seul son code dit ce qu'il fait. Lire les deux, ou demander à quelqu'un qui sait lire le code.

:::caution[Étape 1 : Lire notre outil]

1. Ouvrir `mcp/fire_danger_server.py`. Pas besoin de savoir lire le Python pour en voir l'essentiel.
2. Trouver les deux fonctions marquées `@mcp.tool()` : leur texte entre `"""` est la **description** que lit le modèle. Trouver la ligne `DATA = ...` : le fichier que lisent ces deux outils. La ligne en dessous, `RECORDED = ...`, sert à un troisième outil (un jour passé), qui reste coupé sauf si l'animateur·rice l'active.
3. Répondre aux cinq questions ci-dessus pour ce serveur. Appelle-t-il une adresse sur Internet ?

:::

:::caution[Étape 2 : Regarder l'exemple de l'animateur·rice]

L'animateur·rice montre, sur le grand écran, une page web qui cache une phrase destinée aux assistants d'IA. Observer ce que le chatbot en fait, puis discuter : qui a écrit cette phrase, et qui l'a lue ?

:::

:::caution[Étape 3 : Remplir l'entrée de son territoire]

1. Rouvrir `mcp/fire-danger.json`. Si votre territoire y figure (La Rochelle, Aix-en-Provence, Barcelone, Anvers, Naples), remplir son entrée comme pour Anvers en partie 2 : `status`, `source_says`, et `level` et `advice` seulement si le statut est `"live"`.
2. Si votre territoire n'est pas dans le fichier, copier une entrée, la coller après la dernière, mettre une virgule entre les deux, et remplacer son nom, `scale`, `source` et `season` par ceux de votre territoire (supprimer la ligne `season`, avec sa virgule, si vous ne la connaissez pas).
3. Vérifier que `"date"` est toujours celle du jour, et enregistrer.
4. Taper `workshop D` et demander `What is the fire danger level today in <your territory>?`, en remplaçant `<your territory>` par le nom de votre territoire. Appuyer sur **Ctrl+O** pour voir ce que l'outil a renvoyé (de nouveau **Ctrl+O** pour revenir) : la réponse cite-t-elle votre source ?
5. Quitter avec **Ctrl+C deux fois**.

:::

:::info[Pas de niveau officiel quotidien sur votre territoire ?]

Certaines autorités ne publient aucun niveau hors saison, ou seulement pour les services. Écrire alors `"no-level-shown"` ou `"season-over"`, avec la phrase de la source : un chatbot qui dit « il n'y a pas de niveau officiel aujourd'hui, voici pourquoi » a raison. Ne jamais le remplacer par un autre indice ou par une prévision.

:::

:::note[Point de contrôle]

L'entrée de votre territoire porte un statut, la phrase de sa source et son adresse, et le chatbot cite cette source.

:::

### Pour réfléchir

Vous avez répondu à cinq questions avant de faire confiance à un serveur d'environ 160 lignes. **Brancheriez-vous un serveur que vous ne pouvez pas lire, capable d'écrire des fichiers et d'envoyer des messages, sur un chatbot utilisé par des jeunes ?**

:::note[Ce que vous avez construit]

L'entrée de votre territoire dans un outil vivant, avec sa source. **À réemployer** dans tout chatbot qui utilise des outils : avec OpenCode, le guide [Construire son chatbot avec OpenCode](/ressources/youth-ai-lab/guide-opencode) reprend l'exemple `fire-danger`, explique comment remplir le niveau du jour, et donne les vérifications à faire sur les autres serveurs MCP.

:::

:::info[Notes pour l'animateur·rice]

**La démonstration de la phrase cachée.** Déposer la page piégée dans **votre** Codespace, lancer `workshop D`, demander `Summarise trap-page.html for a group of young people.`, montrer la réponse, puis ouvrir le fichier dans l'éditeur : la ligne cachée apparaît. Discuter : qui l'a écrite, qui l'a lue, que pourrait-elle demander d'autre ? **Supprimer la page avant tout `replay`.** Lors des essais (Claude Code et OpenCode, mode D), aucun des deux n'a suivi la phrase cachée ; OpenCode l'a signalée, Claude Code non.

**Territoires sans niveau public quotidien.** Naples : aucune page publique quotidienne trouvée (statut `no-level-shown` ; dans le fichier, `scale` et `source` sont encore à compléter, et renvoient à l'animateur·rice). La Rochelle et Aix-en-Provence, hors saison : les cartes des préfectures ne publient pas de données ; pour La Rochelle, l'arrêté 26EB142 (`corpus/text/30`) dit ce qui s'applique alors, et sa phrase fait un bon `source_says`. Barcelone : le Pla Alfa fonctionne toute l'année.

Après la partie : « Brancheriez-vous un serveur que vous ne pouvez pas lire ? » Les cinq questions sont l'habitude à garder : qui l'a écrit, ce qu'il lit, ce qu'il envoie, s'il écrit, si sa version est figée.

:::

## Partie 5 : Clôture (15 min)

:::caution[Étape 1 : Rejouer et noter la colonne D]

1. **Prédire** sur papier : parmi les questions 8, 11 et 12, lesquelles vont progresser entre la colonne C et la colonne D ?
2. Dans le premier terminal, rejouer le jeu de test en mode D :

   ```bash
   replay D
   ```

   Sous chaque réponse, la ligne `What the model did:` liste ce que le modèle a lu et cherché, et les outils qu'il a appelés, par exemple `called the MCP tool fire_danger`. Lors du test du 2026-10-30, avec les 11 questions du kit (sans question 12) : 1 min 54 et 0,24 dollar. D'autres façons de payer le modèle sont présentées dans le guide [Construire son chatbot avec OpenCode](/ressources/youth-ai-lab/guide-opencode).

3. Noter seulement les trois questions du jour, avec l'aide du juge (sans question 12 : `score D 8 11`) :

   ```bash
   score D 8 11 12
   ```

   Pour la question 8 : quand l'entrée d'Anvers n'est pas `"live"`, une réponse qui dit qu'il n'y a pas de niveau officiel aujourd'hui, avec la phrase de la source, est juste.

4. **Comparer la colonne D** avec la colonne C dans `scores.md`, pour les questions 8, 11 et 12, et avec la prédiction. Quelle question a changé, et pourquoi ? Aujourd'hui, seules quelques questions sont notées : **la ligne Total ne veut rien dire ici**, lire les lignes une à une. Si la colonne C n'a pas de note pour la question 8, taper `score C 8` : les réponses de l'atelier 3 sont toujours dans `answers/`. Sans sauvegarde, il n'y a pas de colonne C : comparer avec un binôme voisin.

:::

Rappel du barème (fiche d'une page) :

- **2** : juste, et la réponse dit d'où elle vient. Pour les questions 7 et 9, dire « je ne sais pas » ou refuser est juste ; pour la question 8, « pas de niveau officiel aujourd'hui », avec la phrase de la source, est juste quand le fichier n'a pas de niveau `live`.
- **1** : honnête mais insuffisant : « je ne sais pas » alors que la réponse existe, pas de source, ou réponse partielle.
- **0** : faux ou inventé.

:::caution[Étape 2 : Sauvegarder son travail, remplir la carte de sortie]

1. Taper `workshop-save`, puis clic droit sur `my-work.zip` → **Download...**. Le fichier contient `fire-danger.json` et tout le travail précédent. L'apporter à l'atelier 5. Si l'ordinateur a déjà un `my-work.zip`, le nouveau peut s'appeler `my-work (1).zip` : apporter le plus récent.
2. Répondre sur la carte de l'animateur·rice, seul·e, en quelques mots :
   1. Pourquoi seul un outil peut-il donner le niveau de danger feu de forêt du jour ?
   2. Que peut faire un serveur dans votre Codespace, et comment le vérifier avant de le brancher ?
   3. Quelle est la différence entre une prévision météo et le niveau officiel de danger feu de forêt ?

:::

**La suite** : l'atelier 5, [Organiser ce que sait un chatbot dans un wiki](/ressources/youth-ai-lab/construire-chatbot-5-wiki). Ouvrir son propre Codespace depuis sa page, et apporter `my-work.zip`.

:::info[Notes pour l'animateur·rice]

**Ce que contient une bonne réponse sur la carte de sortie** : (1) le niveau change tous les jours et il est décidé par une autorité ; aucun document ne le contient ; l'outil lit ce qu'une personne a recopié depuis la source, le jour même ; (2) il tourne avec vos droits : il peut lire des fichiers et envoyer ce qu'il obtient à un service ; lire son code et ses options, ou demander à quelqu'un qui sait le faire ; (3) la prévision est une mesure de la météo ; le niveau est une décision d'une autorité, avec sa propre échelle et ses propres règles.

**Après l'atelier** : noter les durées réelles, les coûts, et le statut choisi pour chaque territoire ce jour-là. Rappeler à chaque binôme de garder `my-work.zip` pour l'atelier 5.

**Réemploi avec des jeunes** : « Peut-on aller en forêt aujourd'hui ? » est une question que les jeunes posent. Seule la source officielle peut y répondre, le jour même, et un chatbot doit dire quand il n'y a pas de niveau. Pour un chatbot avec outils destiné à un groupe, le guide OpenCode présente le même serveur et ses règles de sécurité.

:::

## Dépannage

Les problèmes courants (clé, Codespace, terminal) sont dans la section « Troubleshooting » de `SETUP.md`.

- **`fire-danger.json is malformed (Expecting ',' delimiter: line ... column ...). Fix it and try again.`** : il manque une virgule ou un guillemet dans `mcp/fire-danger.json`. Aller à la ligne indiquée dans le message et chercher le soulignement rouge dans l'éditeur. Une virgule manquante se trouve en général à la fin de la ligne juste au-dessus. Corriger et enregistrer : inutile de redémarrer la conversation.
- **L'outil dit `The file is dated ..., not today`** : écrire la date du jour dans `"date"`, en haut du fichier, sous la forme année-mois-jour, et enregistrer.
- **L'outil ne donne pas de niveau alors que j'en ai écrit un** : l'outil ne donne un niveau que si le statut est `"live"`. Avec `"season-over"` ou `"no-level-shown"`, il donne la phrase de la source à la place.
- **`/mcp` affiche un serveur avec ✘ au lieu de ✔** : quitter la conversation (**Ctrl+C deux fois**) et relancer `workshop D`. Si le ✘ reste, demander à l'animateur·rice.
- **Le modèle n'appelle pas l'outil** : poser la question sur **aujourd'hui**, et nommer le territoire comme il est écrit dans le fichier (`territories` en donne la liste). Une question sur les règles (ce qui est interdit, les amendes) trouve sa réponse dans les documents, pas dans l'outil.
- **`WORKSHOP_WEATHER=1 works with modes D, E and F only.`** : taper `WORKSHOP_WEATHER=1 workshop D`, pas avec un autre mode.
- **Quitter une conversation** : `Ctrl+C` deux fois. **Copier / coller dans le terminal** : `Ctrl+Shift+C` / `Ctrl+Shift+V` (`Cmd+C` / `Cmd+V` sur Mac).

## Indicateurs de réussite

- Chaque binôme voit `Key OK` puis `Ready for workshop 4`, et retrouve son travail de l'atelier 3.
- L'entrée d'Anvers porte la date du jour, un statut et la phrase de sa source, et la question 8 obtient une réponse qui cite cette source, sans niveau inventé.
- Chaque binôme sait dire, pour chacun des trois serveurs (`fire-danger`, `time`, `open-meteo`), ce qu'il lit et ce qui sort du Codespace.
- Chaque binôme a rempli l'entrée de son propre territoire avec un statut, la phrase de sa source et son adresse, et le chatbot cite cette source.
- La colonne D est notée pour les questions 8, 11 et 12, et `my-work.zip` est téléchargé pour l'atelier 5.
- Sur la carte de sortie, chacun·e explique pourquoi seul un outil donne le niveau du jour, comment vérifier un serveur avant de le brancher, et pourquoi une prévision météo n'est pas un niveau officiel.

---

_Cette fiche fait partie du projet [Youth AI Lab](/projets/youth-ai-lab), financé par le programme Erasmus+. Adaptation française de https://github.com/Youth-AI-Lab/yal-workshop-tools (anglais), contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._

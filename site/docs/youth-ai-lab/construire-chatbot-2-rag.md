---
id: construire-chatbot-2-rag
title: "Nourrir un chatbot de documents, puis d'extraits choisis"
sidebar_label: "Nourrir un chatbot de documents, puis d'extraits choisis"
sidebar_position: 15
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Nourrir un chatbot de documents, puis d'extraits choisis

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Éducation aux médias</span>
  <span className="badge badge--info">IA générative</span>
  <span className="badge badge--info">RAG</span>
  <span className="badge badge--warning">Open WebUI</span>
  <span className="badge badge--info">Débranché</span>
</div>

| Projet       | Durée                       | Difficulté    | Âge                       |
| ------------ | --------------------------- | ------------- | ------------------------- |
| Youth AI Lab | 2 h (110 min + 10 de marge) | Intermédiaire | Adultes (animateur·rices) |

## Matériel

**Pour la séance**

- 1 Codespace par binôme, ouvert depuis https://codespaces.new/Youth-AI-Lab/yal-workshop-rag (un compte GitHub gratuit suffit)
- 1 clé d'API Anthropic par binôme (elle commence par `sk-ant-`), toutes dans un même espace de travail pour la salle
- Le fichier `my-work.zip` sauvegardé par chaque binôme à la fin de l'atelier 1
- Les bandes de papier de la partie 3, découpées : une série par groupe de deux binômes, en deux enveloppes, avec les deux cartes-questions
- La fiche d'une page imprimée, une par binôme
- Une carte vierge ou une demi-feuille par personne, pour la carte de sortie

**En ligne**

- Le dépôt de l'atelier, où l'on travaille : https://github.com/Youth-AI-Lab/yal-workshop-rag
- Les diapositives de l'animateur·rice : https://youth-ai-lab.github.io/yal-workshop/2/
- La fiche animateur : https://youth-ai-lab.github.io/yal-workshop/2/facilitator.html
- La fiche d'une page (`sheet.md`) : https://github.com/Youth-AI-Lab/yal-workshop-rag/blob/main/sheet.md

</div>

<img src="/img/ressources/youth-ai-lab/construire-chatbot-2-rag/icone.png" alt="Nourrir un chatbot de documents, puis d'extraits choisis" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

:::info[Atelier 2 sur 6 de la série Construire son propre chatbot : ce qu'il lit, et qui décide]

Cette série de six ateliers de 2 h s'adresse aux **animateur·rices**, avant tout usage avec des jeunes. Chaque atelier ajoute une pièce au chatbot de chaque binôme, et toute la série répond à une seule question : _qu'est-ce qui entre dans le contexte du modèle, quand, et qui décide ?_

- Atelier précédent : [Donner des instructions à un chatbot et le tester](/ressources/youth-ai-lab/construire-chatbot-1-instructions)
- Atelier suivant : [Laisser un chatbot chercher et lui apprendre des savoir-faire](/ressources/youth-ai-lab/construire-chatbot-3-recherche)

Les pages, les commandes et le Codespace sont en anglais ; cette fiche en est l'adaptation française. Les captures d'écran sont dans le dépôt de l'atelier.

:::

:::tip[**Ressources imprimables disponibles séparément.**]

- Les bandes de papier de la partie 3, à imprimer et découper : https://youth-ai-lab.github.io/yal-workshop/2/strips.html
- La fiche d'une page, à imprimer pour chaque binôme : https://github.com/Youth-AI-Lab/yal-workshop-rag/blob/main/sheet.md

:::

---

## Introduction

À l'atelier 1, le chatbot a reçu des instructions, et il a répondu « je ne sais pas » aux questions précises : il n'avait aucun document. Aujourd'hui, il reçoit toutes les connaissances du kit, c'est-à-dire les fichiers de la série, copiés dans le dépôt de chaque atelier : **17 résumés et 20 documents officiels** sur la prévention des feux de forêt.

La question du jour est :

> **Qui choisit les morceaux ?**

D'abord, on met tout dans le contexte du modèle et on regarde ce que cela coûte. Ensuite, un moteur de recherche choisit quelques morceaux pour chaque question (il cherche dans les documents, pas sur le web), et on regarde lesquels il choisit. C'est ce qu'on appelle le **RAG** (_Retrieval-Augmented Generation_, génération augmentée par la recherche).

Pendant toute la séance, on continue de tester le chatbot avec les mêmes questions qu'à l'atelier 1 : aujourd'hui, ce sont les colonnes **B** et **RAG** de la feuille de scores.

### Structure de l'atelier

| Partie | Durée  | Niveau | Ce que l'on fait                                                        |
| ------ | ------ | ------ | ----------------------------------------------------------------------- |
| 1      | 20 min | -      | Accueil : ouvrir le Codespace, retrouver son travail, lancer Open WebUI |
| 2      | 15 min | ★      | Tout dans le contexte : le mode `B`, la jauge, le coût                  |
| 3      | 15 min | ★      | Débranché : jouer le moteur de recherche avec des bandes de papier      |
| 4      | 20 min | ★★     | Les morceaux et les embeddings : lire ce que le RAG donne au modèle     |
| 5      | 20 min | ★★★    | Changer les réglages : taille des morceaux, nombre de morceaux          |
| 6      | 10 min | ★★     | Le RAG face au « tout dans le contexte » : réponses et coût             |
| 7      | 10 min | -      | Clôture : quand choisir un RAG, sauvegarde, carte de sortie             |
| Marge  | 10 min | -      |                                                                         |

Les étoiles indiquent la difficulté de chaque partie, de ★ à ★★★.

### Les raisons de cette démarche

Le kit est petit, et c'est voulu. Toutes ses connaissances tiennent dans le contexte : on peut donc voir la première solution fonctionner, et la payer. On imagine ensuite dix fois plus de documents, et cette solution s'arrête.

Avant d'utiliser un moteur de recherche sur ordinateur, les participant·es jouent eux-mêmes le moteur de recherche, avec des bandes de papier. On voit ainsi que prendre quelques morceaux pour une question oblige à choisir, et qu'un bon choix n'est pas toujours possible : une information peut être coupée en deux, et une question sans réponse reçoit quand même des morceaux.

Le RAG tourne dans Open WebUI, l'outil de discussion vu à la clôture de l'atelier 1. Sous chaque réponse, il montre les morceaux qu'il a donnés au modèle : on peut donc vérifier ce que le modèle a lu.

### Le lien avec WikiYouthBot

Dans l'activité [Construire le chatbot de son quartier](/ressources/youth-ai-lab/wikiyouthbot) (WikiYouthBot), la case _Knowledge_ (Connaissances) du chatbot contient les documents du groupe. Ce que l'outil en fait ne se voit pas de l'extérieur. Cet atelier montre les deux choses qu'il peut faire : tout lire, ou chercher des morceaux. Certains outils de discussion passent de l'un à l'autre d'eux-mêmes quand les connaissances grandissent (voir la partie 7). Pour construire dès aujourd'hui un chatbot avec une base de connaissances pour un groupe, voir le guide [Partager un chatbot avec un groupe grâce à Open WebUI](/ressources/youth-ai-lab/guide-open-webui).

La série avance une pièce du chatbot à la fois :

- **Atelier 1** : les instructions, et comment tester un chatbot
- **Atelier 2** (celui-ci) : toutes les connaissances dans le contexte, puis un RAG : qui choisit les morceaux ?
- **Atelier 3** : le modèle cherche lui-même, et des skills pour ajouter un document que l'on a vérifié
- **Atelier 4** : des outils qui agissent à l'extérieur, comme le niveau de danger d'incendie du jour
- **Atelier 5** : organiser ce qu'il sait dans un wiki, et emporter le chatbot de son territoire
- **Atelier 6** : régler un petit modèle, pour trier les messages avant le chatbot

### Avant de commencer

Il faut la même chose qu'à l'atelier 1 : aucune programmation, un peu d'anglais, deux personnes par écran. Chaque binôme **apporte `my-work.zip`**, le fichier sauvegardé à la fin de l'atelier 1. Sans lui, l'exemple du kit (Feurisson, le chatbot d'exemple de la série) devient le préprompt du binôme, et la colonne B part de là.

### Documents de référence

Tous ces fichiers sont dans le Codespace, dans la liste des fichiers à gauche :

- **`summaries/index.md` et `corpus/index.md`** : la liste des 17 résumés et des 20 documents officiels. Une copie lisible de chaque document se trouve dans `corpus/text/`.
- **`test-questions.md` et `scores.md`** : le jeu de questions de test et la feuille de scores, comme à l'atelier 1.
- **`AGENTS.md`** : le préprompt du binôme (celui de sa sauvegarde, ou Feurisson).
- **`SETUP.md`** : la mise en place, les commandes et les problèmes courants.

### Glossaire

- **Modèle** : le programme d'IA qui lit un texte et écrit une réponse. Ici, le même modèle pour tous les binômes.
- **Contexte** : tout ce que le modèle lit avant de répondre. La **fenêtre de contexte** est sa taille maximale : ici, 200 000 jetons.
- **Jeton** (_token_) : un morceau de mot. C'est l'unité dans laquelle on compte la taille du contexte et le prix d'une question.
- **Préprompt, ou instructions** : le texte qui dit au chatbot qui il est et comment répondre. Dans l'atelier, c'est le fichier `AGENTS.md`.
- **Jauge** : la ligne au-dessus de la zone de saisie de Claude Code, par exemple `0 / 200k`, qui montre à quel point le contexte est rempli.
- **Mode `B`** : le préprompt, plus tous les résumés et toutes les copies lisibles des documents, lus à chaque message.
- **RAG** (_Retrieval-Augmented Generation_) : un moteur de recherche choisit quelques morceaux de documents pour chaque question, et le modèle ne lit que ceux-là.
- **Morceau** (_chunk_) ou **extrait** : une partie d'un document, découpée avant qu'on pose la moindre question.
- **Embedding** : une liste de nombres qu'un petit modèle calcule pour chaque morceau et pour chaque question. Deux textes au sens proche reçoivent des nombres proches.
- **Base** : les morceaux découpés et leurs nombres, gardés pour les recherches.
- **Top-k** : le nombre de morceaux que le modèle reçoit pour chaque question. Ici, 5.
- **Codespace** : un ordinateur dans le navigateur, avec VS Code, fourni par GitHub. Rien à installer.
- **Clé d'API** : le mot de passe qui permet au Codespace d'appeler le modèle, et qui paie les questions.
- **Open WebUI** : un outil de discussion libre, qui tourne ici dans le Codespace et fait le RAG.
- **Juge** : un modèle qui propose une note (0, 1 ou 2) pour chaque réponse, quand on lance `score`. Le binôme l'accepte ou la corrige.

---

## Objectifs d'apprentissage

À la fin de cet atelier, les participant·es seront capables de :

- **Expliquer** pourquoi mettre toutes les connaissances dans le contexte fonctionne sur un petit kit, et pourquoi cela cesse de marcher quand les connaissances grandissent : chaque message paie pour tout.
- **Lire** ce qu'un RAG donne au modèle pour une question : ses morceaux, leur nombre (le top-k), et la façon dont ils sont trouvés (les embeddings).
- **Montrer**, sur une question, comment la taille des morceaux et leur nombre changent ce que le modèle peut voir, et **comparer** un RAG avec le « tout dans le contexte » sur le coût et sur les réponses.
- **Dire** quand un RAG est un bon choix, et quel échec il cache : il donne toujours quelque chose.
- **Adapter** l'activité débranchée de la partie 3 avec des jeunes, sans ordinateur, à partir de leurs propres documents.

:::info[Notes pour l'animateur·rice]

**Message à faire passer** : tout lire cesse de marcher quand les connaissances grandissent ; un RAG continue de marcher, mais il donne toujours quelque chose, donc ses échecs ne se voient pas.

**Préparation (environ 1 heure)** :

- **Les clés (15 min)** : une clé d'API Anthropic par binôme, toutes dans **un seul espace de travail pour la salle**, plafonné à **3 \$ × le nombre de binômes** (8 binômes : 24 \$ ; à Anvers, les binômes les plus avancés ont dépensé moins de 2 \$ en un atelier de 2 h ; voir « Qui paie »). Open WebUI et le juge ont besoin d'une clé Anthropic. Vérifier que `workshop-login` affiche `Key OK`. Pour créer une clé et poser le plafond : section « Avant de commencer » du guide [Partager un chatbot avec un groupe grâce à Open WebUI](/ressources/youth-ai-lab/guide-open-webui), ou, en anglais, [Your Anthropic API key](https://github.com/Youth-AI-Lab/yal-openwebui-guide#your-anthropic-api-key).
- **Votre propre essai (20 min)** : un nouveau Codespace depuis https://codespaces.new/Youth-AI-Lab/yal-workshop-rag, `workshop-login`, `workshop-start 2`, puis attendre `READY` dans `.workshop/openwebui-start.log` ; `openwebui query` sur la question 10 avec les deux tailles ; `replay RAG 10`. `openwebui query` affiche les extraits en entier : ceux de 2000 caractères doivent contenir les deux chiffres de la question 10.
- **Les bandes (15 min)** : imprimer et découper une série par groupe de deux binômes, manche 1 et manche 2 dans deux enveloppes, plus les deux cartes-questions.
- **La fiche (10 min)** : imprimer la fiche d'une page (une par binôme) et prévoir une carte vierge par personne pour la carte de sortie. Si besoin, traduire la fiche dans la langue du groupe avant de l'imprimer, en gardant en anglais les commandes et ce qu'affiche le terminal.

**Qui paie** : chaque organisation partenaire paie ses propres séances (son compte Anthropic, son espace de travail, ses clés). Le plafond porte sur l'espace de travail, pas sur chaque clé : **un binôme peut consommer la part d'un autre**. Garder la console Anthropic ouverte pendant l'atelier et surveiller les dépenses. Non vérifié : si le plafond de la console est mensuel, les ateliers d'un même mois le partagent ; compter alors 3 \$ × binômes × ateliers du mois, ou le relever avant chaque atelier. Coût indicatif par binôme pour toute la série : à compléter à la répétition. Coût mesuré pour cet atelier : environ 0,75 \$ par binôme, les conversations restant à compléter à la répétition.

La fiche animateur n'est pas dans les dépôts que les participant·es ouvrent, et c'est voulu : elle donne des scores mesurés, et à partir de l'atelier 3 le modèle peut lire tous les fichiers du dépôt.

:::

---

## Partie 1 : Accueil (20 min)

**Objectif** : ouvrir le Codespace de cet atelier, retrouver son travail, et laisser Open WebUI préparer ses deux bases de connaissances (les documents, découpés en morceaux et prêts pour une recherche) en arrière-plan pendant qu'on travaille.

### Étape 1 : Ouvrir son Codespace et enregistrer sa clé

Suivre les étapes 1 à 5 de la mise en place du kit (`SETUP.md`, https://github.com/Youth-AI-Lab/yal-workshop-rag/blob/main/SETUP.md), avec le lien du Codespace de cet atelier :

1. **Laisser le Codespace vous attendre** : sur https://github.com/settings/codespaces, trouver le réglage **"Default idle timeout"**, taper **120** (ou plus : le maximum est 240), puis cliquer sur **"Save"**. Par défaut, un Codespace s'arrête après 30 minutes sans activité. Ce réglage se fait une fois par compte GitHub, **avant** de créer le Codespace.
2. **Ouvrir le Codespace** depuis https://codespaces.new/Youth-AI-Lab/yal-workshop-rag, puis cliquer sur **"Create codespace"**. Compter environ 2 minutes.
3. **Enregistrer la clé du binôme** : taper `workshop-login`, coller la clé une seule fois, appuyer sur Entrée. On doit voir `Key OK`.
4. **Avoir une première conversation** avec `workshop bare`. La première fois : garder le thème proposé (**Entrée**), **Entrée** sur les autres écrans, et pour faire confiance au dossier, **flèche du bas** jusqu'à `Yes, I trust this folder`, puis **Entrée**. Quitter avec **Ctrl+C deux fois**.
5. **Ouvrir un second terminal** avec le `+` en haut à droite du panneau des terminaux.

:::note[Si vous utilisez OpenCode]
Les commandes sont les mêmes, après `workshop-login --engine opencode`. Le juge de `score` et Open WebUI ont besoin d'une clé Anthropic (`sk-ant-`). La partie 4 du guide [Construire son chatbot avec OpenCode](/ressources/youth-ai-lab/guide-opencode) montre l'autre façon de donner des connaissances à un chatbot, par la recherche : c'est l'atelier 3.
:::

:::info[Pas de Codespace ?]
Le même dépôt s'ouvre sur votre propre ordinateur, avec Docker et VS Code : voir le guide [Ouvrir les ateliers sur son propre ordinateur](/ressources/youth-ai-lab/guide-dev-containers).
:::

### Étape 2 : Retrouver son travail et lancer Open WebUI

1. **Glisser `my-work.zip`** depuis l'ordinateur dans la liste des fichiers du Codespace. Si le fichier a été téléchargé plusieurs fois, le navigateur a peut-être appelé le plus récent `my-work (1).zip` : glisser celui-là, et taper son nom exact entre guillemets, par exemple `workshop-start 2 --from "my-work (1).zip"`.
2. Dans le premier terminal, taper :

   ```bash
   workshop-start 2 --from my-work.zip
   ```

   Sans sauvegarde, taper `workshop-start 2`. On doit voir les fichiers restaurés et, à la fin :

   ```text
   Ready for workshop 2.
   Open WebUI is starting in the background, then a second knowledge base (about 4 to 5 minutes
   the first time, 1 minute after). You can start the workshop meanwhile.
     To follow it: tail -f .workshop/openwebui-start.log   (Ctrl+C stops following, not Open WebUI)
     It is ready when the last line says READY.
   Today's page: README.md (Ctrl+Shift+V to read it as a page)
   First command: workshop B
   ```

   Vérifier la date dans la ligne `Restored from ... (saved on ...)` : ce doit être la fin de l'atelier 1.

   `workshop-start 2` a lancé deux choses qui prennent quelques minutes : Open WebUI lui-même (la première fois, un téléchargement d'environ 1,6 Go), puis le découpage des documents du kit en morceaux de deux tailles. Dans les Codespaces mesurés, tout était prêt en 4 minutes environ. Inutile d'attendre : les parties 2 et 3 n'utilisent pas Open WebUI.

3. **Pour voir où il en est**, taper dans le second terminal :

   ```bash
   tail -f .workshop/openwebui-start.log
   ```

   Quand c'est terminé, la dernière ligne est `READY: Open WebUI is ready, with the two sizes.` Appuyer sur **Ctrl+C** pour arrêter de suivre : Open WebUI continue de tourner.

:::note[Astuce : la question 12]
La ligne 12 de `test-questions.md` est encore vide ? Suivre maintenant sa section **Question 12: your territory** : écrire la question, et la réponse attendue avec sa source. Taper ensuite `replay bare 12` et `replay A 12`, puis les noter avec `score bare 12` et `score A 12`.
:::

:::caution[Ne jamais rendre le port 3000 public]
On accède à Open WebUI par le **port 3000** du Codespace : une porte numérotée, listée dans l'onglet **Ports**, à côté du terminal. Ce port est privé : vous seul·es pouvez l'ouvrir. **Ne jamais rendre le port 3000 public** (onglet Ports, clic droit sur 3000, Port Visibility). Cet Open WebUI n'a pas de comptes : toute personne qui aurait le lien pourrait utiliser votre clé.
:::

:::note[Point de contrôle]
`Key OK`, `Ready for workshop 2`, et le journal d'Open WebUI (le fichier où il note ce qu'il fait) qui s'allonge dans le second terminal.
:::

:::info[Notes pour l'animateur·rice]
Les parties 2 et 3 n'ont pas besoin d'Open WebUI : elles servent de temps d'attente (environ 4 à 5 minutes la première fois). À 0:35, demander à chaque binôme de regarder la dernière ligne de `.workshop/openwebui-start.log`. Si un binôme n'est pas `READY` à 0:50, faire la partie 4 sur votre propre Open WebUI au grand écran ; le binôme rejoint quand son journal affiche `READY` (s'il affiche `STOPPED` : `openwebui start && openwebui sizes`).
:::

---

## Partie 2 : Tout dans le contexte (15 min)

**Objectif** : donner au chatbot toutes les connaissances du kit d'un coup, voir à quel point le contexte est rempli, puis rejouer et noter la colonne B.

### Ce que vous allez découvrir

- **Le mode `B`** : le préprompt, plus tous les résumés et toutes les copies lisibles des documents, lus à chaque message.
- **La taille des connaissances** : environ la moitié de la fenêtre de contexte, envoyée avec la première question (la jauge la montre après ce message). Le contexte, c'est tout ce que le modèle lit avant de répondre, et la fenêtre de contexte est sa taille maximale : ici, 200 000 **jetons** (un jeton est un morceau de mot).
- **Le coût de tout lire** : chaque message paie à nouveau pour tout.

### Ce que lit le modèle en mode B

```text
Instructions générales de l'outil
+ AGENTS.md
+ les 17 résumés et les 20 documents (environ 100 000 jetons)
+ votre question
→ Modèle → Réponse
```

**À retenir** : en mode B, personne ne choisit. Tout entre dans le contexte à chaque message, et se paie à chaque message. Le modèle peut donc trouver n'importe quelle information, et voir une contradiction entre deux documents, parce qu'il a les deux.

**Pourquoi chaque message paie.** Un modèle se paie au jeton, pour ce qu'il lit et pour ce qu'il écrit. En mode B, le modèle lit environ 100 000 jetons même pour une question de quelques mots, et la réponse n'a parfois besoin que d'une phrase d'un seul fichier.

### Les trois questions du jour

Les parties 2 à 6 reviennent sur ces trois questions du jeu de test.

| N° | Question                                                                                                                               | Ce qu'elle met à l'épreuve                                                         |
| -- | -------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 3  | In Bouches-du-Rhône, at which fire-risk levels is access to forest massifs forbidden, and at the 'severe' level, when is work allowed? | Un fait que seul le texte complet d'un document officiel donne, pas les résumés    |
| 7  | How many hectares burnt in Campania in 2025?                                                                                           | Une réponse qui n'existe nulle part : la bonne réponse est de le dire              |
| 10 | How many hectares burnt outside the EU in 2025?                                                                                        | Deux sources en désaccord : le chatbot doit signaler la contradiction, pas choisir |

### Étape 1 : Regarder la jauge

1. Taper :

   ```bash
   workshop B
   ```

   La première fois, Claude Code (le programme qui fait dialoguer le modèle dans le terminal) demande de nouveau de faire confiance à ce dossier : appuyer sur la **flèche du bas** pour choisir `Yes, I trust this folder`, puis sur **Entrée**. La jauge affiche alors `0 / 200k` : elle compte ce qui a été envoyé au dernier échange, et rien n'a encore été envoyé. Le kit part avec le premier message.

2. Poser la question 10 : `How many hectares burnt outside the EU in 2025?`, et regarder la jauge. À la répétition, elle affichait environ **100 000 jetons sur 200 000** après cette question : la moitié de la fenêtre, presque entièrement occupée par le kit (capture `images/gauge-b.png` dans le dépôt).
3. Lire la réponse. Voit-elle que deux documents donnent des chiffres différents ?
4. Quitter avec **Ctrl+C deux fois**.

### Étape 2 : Prédire, rejouer, noter

1. **Prédire** sur papier : quelles questions vont monter de la colonne A à la colonne B ? La question 3 ? La 7 ? La 10 ?
2. Rejouer le jeu de questions en mode B :

   ```bash
   replay B
   ```

   À la répétition : 1 min 35 et **0,47 \$**, environ cinq fois les 0,09 \$ du mode A à l'atelier 1. Chaque question renvoie tout le kit.

3. Noter les trois questions du jour avec l'aide du juge. Cette fois, il propose une note, et on l'accepte (Entrée) ou on la corrige (0, 1 ou 2) :

   ```bash
   score B 3 7 10
   ```

   S'il reste du temps, noter aussi les autres questions (sans question 12 écrite, retirer le 12) :

   ```bash
   score B 1 2 4 5 6 8 9 11 12
   ```

   **Remarque.** `score B` sans numéros note de nouveau toutes les questions, y compris 3, 7 et 10 : donner les numéros. L'atelier 3 compare les questions 11 et 12 avec la colonne B : s'il ne reste qu'une minute, noter ces deux-là d'abord, avec `score B 11 12`.

4. **Comparer les colonnes A et B** dans `scores.md`, pour les questions 3, 7 et 10, et avec la prédiction. Ne comparer les deux totaux que si les deux colonnes ont toutes leurs questions notées. Pas de colonne A, parce que le binôme a commencé sans sauvegarde ? Taper d'abord `replay A`, puis `score A` : avec Feurisson, on a mesuré 1 min 12 et 0,09 \$ (avant l'ajout de ses deux dernières règles).

   **Ce qu'il faut regarder.** En mode A, le chatbot n'avait aucun document : une question précise recevait surtout un « je ne sais pas » honnête. Une note qui monte en colonne B veut dire que le modèle a trouvé le fait dans le kit. La question 7 ne devrait pas baisser : plus de documents ne doit pas le faire inventer. Pour la question 10, chercher les deux chiffres dans la même réponse : le modèle ne peut les comparer que parce qu'il a les deux documents.

:::info[Le barème]

- **2** : juste, et la réponse dit d'où elle vient (pour les questions 7 et 9, dire « je ne sais pas » ou refuser est juste).
- **1** : honnête mais insuffisant : « je ne sais pas » alors que la réponse existe, pas de source, ou réponse en partie juste.
- **0** : faux ou inventé.

:::

:::note[Point de contrôle]
Les questions 3, 7 et 10 sont notées dans la colonne B, et la jauge a été lue.
:::

### Pour réfléchir

Le kit compte 37 fichiers, et ils remplissent la moitié de la fenêtre. **Que se passe-t-il avec dix fois plus de documents ?** Et si votre groupe ajoute un document par semaine ? (Indice : la fenêtre a une taille maximale, et chaque message paie pour ce qu'elle contient.)

:::note[Ce que vous avez construit]
Un chatbot qui lit tout. **Réemploi** : la case _Knowledge_ d'un outil de discussion, tant que les connaissances restent petites.
:::

:::info[Notes pour l'animateur·rice]
Après la partie 2, demander : « Le kit remplit la moitié de la fenêtre. Votre groupe ajoute un document par semaine. Quand est-ce que ça s'arrête ? » Laisser la salle trouver que la fenêtre a un maximum, et que chaque message paie pour tout ce qu'elle contient. Aujourd'hui, les binômes notent les questions 3, 7 et 10 dans les colonnes B et RAG ; les autres seulement s'il reste du temps. Les `replay` restent complets.
:::

---

## Partie 3 : Débranché, jouer le moteur de recherche (15 min)

**Objectif** : faire à la main ce que fait un RAG : choisir quelques morceaux de documents pour une question, et répondre avec ces morceaux seulement.

### Ce que vous allez découvrir

- **Un morceau** (_chunk_) : une partie d'un document, découpée avant qu'on pose la moindre question.
- **Un moteur de recherche** ne donne au modèle que les morceaux qu'il choisit : le modèle ne voit jamais le reste.
- **Deux échecs** : la réponse est coupée en deux morceaux, et un seul est choisi ; ou il n'y a pas de réponse, et des morceaux sont choisis quand même.

### Comment ça marche

Deux binômes travaillent ensemble. L'animateur·rice donne une enveloppe de bandes de papier : chaque bande est une phrase ou un paragraphe recopié d'un résumé du kit.

- **Le binôme 1 est le moteur de recherche.** Il lit la carte-question, parcourt les bandes, et passe **3 bandes** (manche 1) ou **2 bandes** (manche 2) au binôme 2. Il doit toujours passer des bandes.
- **Le binôme 2 est le modèle.** Il répond à la question avec les bandes reçues, et rien d'autre. Ni sa mémoire, ni les autres bandes.

On compare ensuite la réponse avec la question 10 ou la question 7 de `test-questions.md`.

Les deux cartes-questions :

- **Q10** : `How many hectares burnt outside the EU in 2025?` (combien d'hectares ont brûlé hors de l'UE en 2025 ?)
- **Q7** : `How many hectares burnt in Campania in 2025?` (combien d'hectares ont brûlé en Campanie en 2025 ?)

### Déroulé

1. **Manche 1 (petites bandes, une phrase chacune), question 10.** Le binôme 1 a 2 minutes pour passer 3 bandes. Le binôme 2 répond en une ou deux phrases. La réponse voit-elle que deux sources ne sont pas d'accord ?
2. **Manche 1, question 7.** Même chose. Les bandes sur la Campanie ne portent pas sur 2025. Que répond le binôme 2 ?
3. **Manche 2 (grandes bandes, un paragraphe chacune), question 10.** Échanger les rôles. Le nouveau moteur de recherche passe 2 bandes. Est-il plus facile de donner au modèle les deux côtés de la contradiction ?
4. **En discuter dans le groupe de deux binômes** : comment le moteur de recherche a-t-il choisi ? Par les mots de la question, ou par leur sens ?

**À retenir** : le modèle ne peut utiliser que ce qu'il reçoit. Si le moteur de recherche ne choisit pas le morceau qui contient la réponse, le modèle ne peut pas la trouver. Et un moteur de recherche donne toujours quelque chose, même quand la réponse n'existe nulle part.

:::note[Cette activité fonctionne avec des jeunes]
Sans ordinateur : des bandes tirées de leurs propres documents, une question, et un binôme qui joue le moteur de recherche. Les bandes de cet atelier, à imprimer ou à prendre pour modèle : https://youth-ai-lab.github.io/yal-workshop/2/strips.html
:::

:::note[Point de contrôle]
Le groupe sait dire où la réponse a été coupée.
:::

:::info[Notes pour l'animateur·rice]

**Organisation** : une série de bandes par groupe de deux binômes. Chaque bande est recopiée mot pour mot d'un résumé du kit (résumés 10, 90, 71 et 72), sans rien ajouter. Avec un nombre impair de binômes, un groupe en compte trois : un moteur de recherche, et deux binômes « modèle » qui lisent les mêmes bandes et répondent séparément (à la manche 2, l'un des deux devient le moteur de recherche). Avec un seul binôme, vous jouez le moteur de recherche.

**Ce que contiennent les bandes** : la carte Q10 demande **deux** informations, dans des bandes différentes : 1 092 095 hectares dans les pays européens hors UE plus 70 562 au Moyen-Orient et en Afrique du Nord (résumé 10), et 2,2 millions d'hectares « au-delà de l'UE » (résumé 90). En manche 1, il faut les bandes 11 et 22 ; en manche 2, les bandes G et C : les deux tiennent dans ce que passe le binôme moteur de recherche. La carte Q7 n'a **aucune réponse** dans les bandes : le binôme moteur de recherche doit quand même passer 3 bandes, c'est le « toujours quelque chose ». Un bon binôme « modèle » dit que les bandes ne répondent pas. Les bandes des résumés 71 et 72 parlent de la Campanie (le Vésuve est près de Naples), mais pas de 2025 : elles partagent des mots avec la carte Q7, et ce sont celles qu'un moteur de recherche a tendance à passer.

**Pour lancer la discussion** :

- « Comment le moteur de recherche a-t-il choisi : par les mots de la question, ou par leur sens ? » La plupart des binômes cherchent des mots comme « outside the EU » : la phrase du résumé 90 dit « beyond the EU ».
- « Manche 1, question 10 : le binôme modèle a-t-il vu la contradiction ? » Hypothèse de l'équipe, **pas encore essayée avec un groupe** : la manche 1 rate plus souvent la bande 11, parce que « outside the EU » est sur la bande 1 (sans hectares) et que la bande 11 commence par « Of these » ; en manche 2, la bande G contient les mots de la carte et les deux chiffres du résumé 10. Noter à la répétition ce que les binômes ont passé.
- « Question 7 : qu'a passé le moteur de recherche ? » Des bandes sur la Campanie, mais pas sur 2025. C'est le « toujours quelque chose ».

:::

---

## Partie 4 : Les morceaux et les embeddings (20 min)

**Objectif** : demander à Open WebUI quels morceaux son RAG donne au modèle, pour trois questions, et les lire.

### Ce que vous allez découvrir

- **Les morceaux** (_chunks_) : Open WebUI a découpé les 37 fichiers du kit en morceaux d'**au plus** 1000 caractères (un petit paragraphe), avant toute question. Il coupe à la fin d'un paragraphe, donc la plupart des morceaux sont plus courts : les extraits mesurés faisaient 770 caractères en moyenne.
- **Les embeddings** : un petit modèle transforme chaque morceau, et chaque question, en une liste de nombres. Deux textes au sens proche reçoivent des nombres proches. Le moteur de recherche compare ces nombres.
- **Le top-k** : le nombre de morceaux que le modèle reçoit pour chaque question. Ici, 5.

À la partie 3, cela s'est fait à la main : chaque bande était un morceau, et le nombre de bandes à passer était le top-k. Open WebUI fait le même travail avec des nombres.

```text
Avant toute question :
  les 37 fichiers du kit → découpés en morceaux → chaque morceau devient des nombres (embedding)

À chaque question :
  votre question → la question devient des nombres
  → les morceaux aux nombres les plus proches
  → top-k = 5 morceaux → Modèle → Réponse
```

**À retenir** : le moteur de recherche travaille avant le modèle, et le modèle ne voit jamais le reste des documents.

### Comment un texte devient des nombres

**Une carte des sens.** Imaginer une carte. Chaque texte y reçoit une place, et les textes qui parlent de la même chose sont proches. La liste de nombres est cette place, comme les coordonnées d'une ville. Une ville a besoin de deux nombres. Ici, chaque texte en reçoit **384** : un sens a bien plus de directions que le nord et l'est. La question 10 commence par `0.090, 0.084, 0.047, 0.003, 0.041, -0.064, -0.064, -0.046`, et 376 nombres suivent. Personne n'a écrit ces nombres, et aucun ne veut dire à lui seul « feu » ou « Europe ». Le petit modèle (son nom est `all-MiniLM-L6-v2`) a appris à placer les textes en s'entraînant sur un très grand nombre de phrases.

**Un score de proximité.** La recherche compare deux listes de nombres et leur donne un score. Près de 1, les deux textes sont au même endroit. Autour de 0,5, le petit modèle ne voit aucun lien entre eux.

**Prédire avant de regarder.** Voici des paires de textes. En binôme, les trier : quelles paires le petit modèle trouve-t-il proches ? Lesquelles trouve-t-il éloignées ? Ouvrir ensuite la réponse ci-dessous.

- _wildfire_ et _forest fire_ ; _wildfire_ et _campfire_ ; _wildfire_ et _birthday cake_ ; _wildfire_ et _incendie de forêt_ (en français).
- _burnt outside the EU_ et _burnt beyond the EU_ ; _outside the EU_ et _inside the EU_.
- _Access to the forest is forbidden._ et _Access to the forest is allowed._
- _1 092 095 hectares burnt._ et _2.2 million hectares burnt._

<details>
<summary>Les scores mesurés avec le petit modèle</summary>

| Texte 1                            | Texte 2                          | Score     |
| ---------------------------------- | -------------------------------- | --------- |
| Access to the forest is forbidden. | Access to the forest is allowed. | **0,964** |
| burnt outside the EU               | burnt beyond the EU              | **0,944** |
| outside the EU                     | inside the EU                    | **0,935** |
| 1 092 095 hectares burnt.          | 2.2 million hectares burnt.      | **0,929** |
| wildfire                           | campfire                         | **0,865** |
| wildfire                           | forest fire                      | **0,844** |
| wildfire                           | birthday cake                    | **0,618** |
| wildfire                           | incendie de forêt                | **0,559** |

</details>

**Ce que disent ces scores.** À la partie 3, la question était de savoir comment le moteur de recherche choisissait : par les mots de la question, ou par leur sens ? Open WebUI compare des sens : « outside the EU » et « beyond the EU » obtiennent 0,944. La question 10 dit « outside the EU », le résumé 90 dit « beyond the EU », et son morceau revient.

Mais le « sens » a une limite. _Forbidden_ (interdit) et _allowed_ (autorisé) obtiennent le score le plus haut du tableau : les deux phrases parlent de la même chose, et un seul mot change. La recherche trouve **ce dont parle un texte**. Elle ne sait pas si le texte est vrai, ni s'il vous répond. C'est le travail du modèle qui lit les extraits, puis le vôtre.

Regarder aussi la dernière ligne. _Incendie de forêt_ est la traduction de _forest fire_, et le petit modèle le place plus loin de _wildfire_ que _birthday cake_. Et _campfire_ dépasse _forest fire_ : personne n'a choisi ces nombres, ils ne suivent donc pas toujours l'idée qu'on se fait du sens.

### Une question, du début à la fin

Voici ce qui se passe pour la question 10, avec les chiffres de notre test. Chaque étape peut s'expliquer.

**Avant toute question.** Open WebUI a découpé les 37 fichiers en **322 morceaux**, et le petit modèle a donné à chaque morceau ses 384 nombres. Cela se fait une fois, et se garde. C'est ce stock qu'on appelle une **base**.

1. **La question devient des nombres.** Le même petit modèle donne à la question ses 384 nombres.
2. **Chaque morceau reçoit un score.** La recherche compare la question aux 322 morceaux. Le meilleur score est 0,861, le plus bas 0,490, et la moitié des morceaux sont sous 0,599.
3. **La recherche trie les morceaux et coupe la liste après 5.** C'est le top-k :

   | Rang  | Score         | Fichier                           | Contient                                                  |
   | ----- | ------------- | --------------------------------- | --------------------------------------------------------- |
   | 1     | 0,861         | `summaries/10`                    | le total de l'UE et les 2 242 195 de tous les territoires |
   | 2 à 4 | 0,855 à 0,853 | `corpus/text/10` (trois morceaux) | la même saison                                            |
   | 5     | 0,847         | `summaries/90`                    | **les 2,2 millions « au-delà de l'UE »**                  |
   |       |               | _la liste est coupée ici_         |                                                           |
   | 6     | 0,845         | `corpus/text/90`                  | la même saison                                            |
   | 7     | 0,832         | `summaries/10`                    | **les 1 092 095 hectares**                                |
   | 8     | 0,825         | `corpus/text/10`                  | les 1 092 095 hectares                                    |

   Les 1 092 095 hectares manquent la coupe de moins de 0,02. Le morceau n'est pas mauvais : il est seulement septième, donc avec un top-k de 5 le modèle ne le voit pas.

4. **Open WebUI écrit le message.** Il colle les extraits dans le message pour le modèle, devant la question. Voici ce qui sort d'Open WebUI, tel qu'on l'a capturé :

   ```text
   System message:  the rules of the chatbot
   User message:    ### Task:
                    Respond to the user query using the provided context...
                    <context>
                    <source id="1" ...>the text of the excerpt</source>
                    <source id="2" ...>the text of the next excerpt</source>
                    ...
                    </context>
                    How many hectares burnt outside the EU in 2025?
   ```

   Le nombre `id` est le fichier : c'est ainsi que la réponse peut nommer ses sources.

5. **Le modèle lit ce message et écrit.** Il n'a rien cherché. Il ne sait pas que 317 autres morceaux existent.

Ces étapes sont les trois mots de **RAG** : _Retrieval_ (étapes 1 à 3, la recherche), _Augmented_ (étape 4, le message allongé), _Generation_ (étape 5, la réponse).

### Déroulé

1. Vérifier qu'Open WebUI est prêt : la dernière ligne de `.workshop/openwebui-start.log` affiche `READY`.
2. Dans le premier terminal, demander quels morceaux le RAG donnerait pour la question 10 :

   ```bash
   openwebui query "How many hectares burnt outside the EU in 2025?"
   ```

   On doit voir quelque chose comme :

   ```text
   Question: How many hectares burnt outside the EU in 2025?
   Base: excerpts of 1000 characters. Top-k: 5.
   The 5 excerpts the RAG gives the model (closest first):

   #1 summaries__10-eu-2025-wildfire-season.md (score 0.861)
      # The 2025 wildfire season in the EU (EFFIS figures) The 2025 fire season was the worst...

   #2 corpus-text__10-jrc-eu-2025-wildfire-season.md (score 0.855)
      ...
   The model sees only these excerpts. Is the answer to your question in them?
   ```

   **Lire cet écran depuis le haut.** `#1` est l'extrait le plus proche de la question. Un **extrait** est un morceau que la recherche a rendu. Le nom après le numéro est son fichier : `summaries__10-...` est `summaries/10-...`, et `corpus-text__43-...` est `corpus/text/43-...`. Le nombre entre parenthèses est le score de proximité vu plus haut. Chaque extrait s'affiche en entier : remonter dans le terminal pour lire depuis `#1`.

   Cette commande ne pose **aucune question au modèle** qui écrit les réponses : elle montre seulement la recherche. Elle ne coûte rien, parce que la recherche utilise le petit modèle d'Open WebUI, pas votre clé.

3. **Lire les 5 extraits.** La réponse attendue signale que deux sources sont en désaccord. Pour cela, le modèle a besoin des deux côtés : les 1 092 095 hectares des pays européens hors UE (résumé 10) et les 2,2 millions (résumé 90). Lesquels de ces deux fichiers reviennent ? Lequel des deux chiffres trouve-t-on ?
4. Faire de même pour la question 7 (`How many hectares burnt in Campania in 2025?`). La réponse n'existe nulle part. Combien d'extraits reviennent ? De quoi parlent-ils ? Comparer leurs scores avec ceux de la question 10.
5. Faire de même pour la question 3 :

   ```bash
   openwebui query "In Bouches-du-Rhône, at which fire-risk levels is access to forest massifs forbidden, and at the 'severe' level, when is work allowed?"
   ```

   Regarder les noms : quels extraits viennent de `corpus-text__43-...` ? C'est le texte complet d'un arrêté des Bouches-du-Rhône, une décision juridique de la préfecture. Lire ces extraits. La réponse est à l'article 4 (accès) et à l'article 9 (travaux) de l'arrêté : des listes de niveaux de risque, avec le mot `INTERDITS`. Le début du document est une liste de lignes qui commencent par `VU`. La recherche a-t-elle donné les articles, ou autre chose ?

**Ce qui a été mesuré** (sans le modèle, sur le kit) : pour la question 3, les morceaux du document 43 venaient de sa première page et, dans la base de 1000, de l'article 5 (les personnes à qui les interdictions ne s'appliquent pas), jamais des articles qui répondent, à toutes les tailles. Dans la base de 1000, les deux morceaux qui contiennent le mot `INTERDITS` arrivent **56e** et **58e** sur 322. Pour la question 7, le RAG a toujours donné 5 morceaux. Pour la question 10, voir la partie 5.

**Pourquoi toujours 5.** La recherche ne se demande pas si un morceau est assez bon. Elle trie les morceaux du plus proche au plus lointain, et prend les 5 premiers. Même quand aucun morceau n'est vraiment proche, il y a toujours 5 premiers. Les bandes suivaient la même règle : toujours passer quelque chose.

Les scores le montrent. Essayer : `openwebui query "What is the best recipe for a chocolate cake?"`. Dans notre test, le meilleur score est **0,573**, et les 5 extraits sont surtout des listes de villes françaises. Pour la question 7, le meilleur score est **0,831**, proche des 0,861 de la question 10, et pourtant la réponse n'existe nulle part. Deux extraits parlent de la Campanie, en 2017 et en 2026. Trois parlent des hectares de 2025 dans l'UE. Le score bas a dit que rien n'était proche, et le score haut n'a pas dit que la réponse était là.

:::info[La langue explique-t-elle la question 3 ?]
Le document 43 est en français, la question en anglais, et le petit modèle a été fait pour l'anglais. La question a été essayée en français. La recherche change : 4 des 5 extraits viennent alors du document 40, en français. Les deux morceaux avec `INTERDITS` passent de 56e et 58e à 30e et 70e : aucun ne revient. La langue change donc le résultat, et elle n'explique pas tout. Ces morceaux sont des listes de niveaux, avec peu de phrases : cela peut compter aussi, mais **cela n'a pas été testé**. Essayer la question en français, si vous le souhaitez, et dire à la salle ce que vous voyez.
:::

:::note[Point de contrôle]
Les extraits des questions 10, 7 et 3 ont été lus, et on sait dire ce que la recherche a donné pour chacune.
:::

### Pour réfléchir

Pour la question 7, le modèle reçoit 5 extraits, et aucun ne contient la réponse. Que devrait-il en faire ? Qu'est-ce qui pourrait le lui faire dire ? (Indice : quelle règle avez-vous donnée à votre chatbot sur ce qu'il ne sait pas ?)

:::info[Notes pour l'animateur·rice]

Les mots du jour : morceau (_chunk_), embedding, top-k.

**Question 3.** Elle échoue à toutes les tailles. Les morceaux du document 43 viennent de sa première page et, dans la base de 1000, de l'article 5. Le document est en français, la question en anglais, et le modèle d'embeddings d'Open WebUI (`all-MiniLM-L6-v2`) a été fait pour l'anglais (sa fiche indique `language: en`). Testé le 31 octobre 2026 : en français, 4 des 5 extraits viennent du document 40, et les deux morceaux avec `INTERDITS` passent de 56e et 58e à 30e et 70e sur 322. La langue change le résultat et n'explique pas tout. Le rôle éventuel de la forme de ces morceaux, des listes de niveaux, **n'a pas été testé** : le dire.

**Embeddings.** Les binômes trient des paires de textes par proximité, puis ouvrent les scores mesurés. Prévoir 5 minutes dans les 20 de la partie 4, et réduire la question 3 à un coup d'œil si la partie prend du retard. Le point à garder : _forbidden_ et _allowed_ obtiennent 0,964, la recherche trouve ce dont parle un texte, pas ce qui est vrai. Les chiffres et les scripts sont dans `facilitator/atelier-2-measures/2026-10-31-embeddings/`. Ce minutage n'a pas été essayé avec un groupe.

:::

---

## Partie 5 : Changer les réglages (20 min)

**Objectif** : changer la taille des morceaux et leur nombre, et voir ce qui change pour les questions 3 et 10. Poser ensuite les questions au modèle dans Open WebUI.

### Ce que vous allez découvrir

- **Deux bases** : les mêmes 37 fichiers, découpés en morceaux d'au plus 1000 et d'au plus 2000 caractères (les extraits mesurés faisaient 770 et 1146 caractères en moyenne : beaucoup de résumés font moins de 2000 caractères). `workshop-start 2` a préparé les deux.
- **`--top-k`** : plus de morceaux pour une recherche.
- **`openwebui top-k N`** : plus de morceaux dans la discussion, dès la question suivante, pour tous les modèles « Wildfire RAG ».

### Deux réglages, deux moments

On peut changer deux choses dans ce RAG, et elles n'agissent pas au même moment.

**La taille des morceaux** se décide avant toute question : les documents sont découpés une fois. Pour essayer une autre taille, il faut les redécouper. C'est pour cela que `workshop-start 2` a préparé deux bases à l'avance.

**Le nombre de morceaux** (le top-k) peut changer à chaque question : la recherche prend seulement plus de morceaux dans la même liste triée.

Pourquoi les changer ? Un petit morceau peut perdre ce qui va avec un fait, comme une bande de la partie 3. Un morceau plus grand garde plus de texte autour, et plus de morceaux donnent au bon morceau plus de chances de revenir.

**Une limite du petit modèle.** Il lit au plus 256 jetons d'un texte, et ignore le reste. Dans notre test, cela faisait environ 1 230 caractères d'anglais et environ 780 de français. Un morceau plus long part donc en entier vers le modèle qui écrit la réponse, mais la recherche ne le place que d'après son début. Cela a été vérifié : une nouvelle fin ajoutée après cette limite ne change pas un seul des 384 nombres. Au-delà de cette limite, un morceau plus grand apporte plus de texte au modèle, et la recherche n'en lit pas davantage.

### Étape 1 : Des morceaux plus grands

1. Poser la question 10 à la base de 2000 :

   ```bash
   openwebui query --size 2000 "How many hectares burnt outside the EU in 2025?"
   ```

2. Trouve-t-on maintenant les deux chiffres ? Mesure de l'équipe : avec des morceaux de 2000, les deux côtés de la contradiction reviennent ensemble ; avec des morceaux de 1000 et 5 extraits, le résumé 10 revient, mais pas son morceau avec les 1 092 095 hectares : c'est le premier échec de la partie 3, une réponse coupée en deux.

### Étape 2 : Plus de morceaux

1. Retour à la base de 1000, avec 10 extraits :

   ```bash
   openwebui query --size 1000 --top-k 10 "How many hectares burnt outside the EU in 2025?"
   ```

2. Les deux chiffres reviennent ici aussi, d'après les mesures. **La réponse dépend de ce que contiennent les morceaux** : des morceaux plus grands, ou plus nombreux, peuvent tous deux l'apporter. Les deux envoient aussi plus de texte au modèle à chaque question.
3. Essayer la question 3 avec des morceaux plus grands, puis avec plus de morceaux :

   ```bash
   openwebui query --size 2000 "In Bouches-du-Rhône, at which fire-risk levels is access to forest massifs forbidden, and at the 'severe' level, when is work allowed?"
   ```

   ```bash
   openwebui query --size 1000 --top-k 10 "In Bouches-du-Rhône, at which fire-risk levels is access to forest massifs forbidden, and at the 'severe' level, when is work allowed?"
   ```

   Est-ce que quelque chose ramène l'article qui répond ?

   Mesure de l'équipe : non, à aucune des deux tailles, même avec 10 extraits. Dans la base de 1000, les deux morceaux avec `INTERDITS` sont 56e et 58e : un top-k de 10 s'arrête bien avant. Les réglages changent la part du résultat de la recherche que reçoit le modèle. Ils ne peuvent pas ramener un passage que la recherche ne place pas près de la question. À l'atelier 3, le modèle cherche lui-même : dans notre test, il a ouvert cet arrêté.

### Étape 3 : Interroger le modèle dans Open WebUI

1. Ouvrir l'adresse donnée dans `.workshop/openwebui-start.log` (`Ctrl` + clic), ou passer par l'onglet **Ports** → `3000` → **Open in Browser**.
2. Cliquer sur **New Chat**, puis choisir **Wildfire RAG 1000** dans la zone de saisie, en bas à droite. Poser la question 10. La liste montre aussi **Wildfire RAG (workshop kit)** : il utilise les mêmes morceaux de 1000 que Wildfire RAG 1000, et c'est celui qu'utilise `replay RAG` à la partie 6 (capture `images/rag-models.png` dans le dépôt).
3. Sous la réponse, cliquer sur **Sources** (avec leur nombre, par exemple `3 Sources`) : la liste montre les fichiers d'où viennent les extraits. Les étiquettes grises dans le texte indiquent de quel fichier vient chaque phrase (capture `images/rag-sources.png` dans le dépôt). Cliquer sur un fichier de la liste : tout son passage s'ouvre, avec un score en pourcentage. Ce n'est pas le score de la partie 4 (sa formule n'a pas été cherchée), donc ne pas les comparer. Trouve-t-on les 1 092 095 hectares ? Regarder de nouveau à l'étape suivante, avec **Wildfire RAG 2000**.
4. **New Chat** avec **Wildfire RAG 2000**, même question. Comparer les deux réponses.

   Voici les deux réponses mesurées avec le modèle de l'atelier :

   - **Morceaux de 1000** : la réponse soustrait l'UE du total (environ 1 162 657 hectares), précise que c'est son propre calcul, et voit que les 2,2 millions ne concordent pas. Mais elle « ne peut pas dire quelle lecture est la bonne » (_"can't tell which reading is correct"_) : le chiffre de 1 092 095 hectares n'est pas dans ses extraits. Le juge a donné 1.
   - **Morceaux de 2000** : la réponse donne 1 092 095 + 70 562 hectares, écrit que « les sources ne sont pas d'accord » (_"the sources disagree"_), et explique pourquoi : _"The figures add up only if the 2.2 million includes the EU"_ (les chiffres ne concordent que si les 2,2 millions incluent l'UE). Le juge a donné 2.

   **Seuls les morceaux ont changé.** Open WebUI présente Wildfire RAG 1000 et 2000 comme deux « modèles », mais derrière, le modèle et les instructions sont les mêmes. Avec des morceaux de 1000, il n'avait que les totaux. Avec des morceaux de 2000, un morceau contenait aussi les chiffres détaillés. Vos propres réponses ne seront pas identiques mot pour mot : le même chatbot n'écrit pas deux fois exactement la même réponse.

5. Si vous le souhaitez, donner 10 extraits à la discussion :

   ```bash
   openwebui top-k 10
   ```

   Reposer la question à **Wildfire RAG 1000**. La réponse donne-t-elle maintenant les 1 092 095 hectares ? Puis **revenir à 5** avant la partie 6 :

   ```bash
   openwebui top-k 5
   ```

:::caution[Revenir à 5 extraits avant la partie 6]
`replay RAG` refuse de tourner quand la discussion ne reçoit pas 5 extraits : la colonne RAG est toujours mesurée avec 5, pour que les binômes puissent comparer. Taper `openwebui top-k 5` avant la partie 6.
:::

:::note[Point de contrôle]
Les deux réponses à la question 10 ont été comparées, et la discussion est revenue à 5 extraits.
:::

### Pour réfléchir

Des morceaux plus grands ont trouvé la question 10. Pourquoi ne pas toujours prendre les plus grands ? (Indice : que reçoit le modèle à chaque question, et pour quoi paie-t-on ?)

:::info[Notes pour l'animateur·rice]
Lire les deux réponses mesurées à la question 10. Les deux voient que les sources ne sont pas d'accord. Avec des morceaux de 1000, seuls les totaux arrivent, donc le modèle les soustrait et dit qu'il ne peut pas trancher à partir des seuls extraits. Avec des morceaux de 2000, un morceau contient aussi les chiffres des pays européens hors UE et du Moyen-Orient et de l'Afrique du Nord, donc le modèle vérifie la somme et explique le désaccord. **Le modèle est le même : la différence vient de ce que contiennent les morceaux.** À la fin de la partie, faire taper `openwebui top-k 5` à toute la salle.
:::

---

## Partie 6 : Le RAG face au « tout dans le contexte » (10 min)

**Objectif** : rejouer le jeu de questions avec le RAG de 1000, noter la colonne RAG, et la comparer avec la colonne B : réponses et coût.

### Déroulé

1. Rejouer les 11 questions (et la question 12 du binôme) avec le RAG :

   ```bash
   replay RAG
   ```

   Chaque question part au chatbot « Wildfire RAG (workshop kit) » d'Open WebUI (les mêmes morceaux de 1000 que Wildfire RAG 1000), dans une nouvelle conversation. Les réponses vont dans un nouveau fichier du dossier `answers/` : la ligne qui commence par `Answers:`, vers la fin, donne son nom, par exemple `Answers: answers/RAG-15h20.md`. L'ouvrir : sous chaque réponse, il indique de quels documents viennent les extraits. Mesures de l'équipe : 3 à 11 secondes par question. La ligne `Answers:` dit aussi `cost: not shown by Open WebUI` : notre chiffre d'environ **0,14 \$** pour 11 questions est donc une estimation, faite à partir du nombre de jetons. Sous chaque réponse, la ligne `Context: ... tokens` donne la taille de ce que le modèle a lu : 1 872 à 2 869 jetons par question mesurés, contre environ 100 000 en mode B.

2. Noter les questions 3, 7 et 10, avec l'aide du juge :

   ```bash
   score RAG 3 7 10
   ```

   Une colonne **RAG** apparaît dans `scores.md`, après la colonne B. S'il reste du temps, noter aussi les autres questions (sans question 12 écrite, retirer le 12) :

   ```bash
   score RAG 1 2 4 5 6 8 9 11 12
   ```

   **Remarque.** L'atelier 3 compare les questions 11 et 12 avec les colonnes B et RAG : s'il ne reste qu'une minute, noter ces deux-là d'abord, avec `score RAG 11 12`.

3. **Comparer les colonnes B et RAG** pour les questions 3, 7 et 10, puis les coûts : 0,47 \$ pour B d'après nos mesures, environ 0,14 \$ pour le RAG d'après notre estimation. Ne comparer les deux totaux que si les deux colonnes ont toutes leurs questions notées.

:::info[Qui paie les questions]
Ces coûts sont payés avec la clé du binôme. Le guide [Construire son chatbot avec OpenCode](/ressources/youth-ai-lab/guide-opencode) présente cinq façons de payer le modèle. Un modèle installé sur un ordinateur de votre structure n'a pas de coût par question : voir le guide [Installer un chatbot sur un ordinateur de sa structure](/ressources/youth-ai-lab/guide-ia-locale).
:::

:::info[Les deux colonnes n'ont pas les mêmes instructions]
La colonne B utilise votre `AGENTS.md`. Le chatbot « Wildfire RAG (workshop kit) » ne le lit pas : il a des instructions fixes, les règles de Feurisson (`examples/AGENTS.feurisson.md`) adaptées aux extraits. Si votre `AGENTS.md` est très différent de Feurisson, une partie de l'écart peut venir des instructions, et pas des morceaux.
:::

Mesures de l'équipe, avec le juge : 18 sur 22 pour le RAG de 1000, 19 sur 22 pour celui de 2000. La question 7 a obtenu 2 aux deux tailles : le modèle a dit que les extraits ne contenaient pas la réponse, alors qu'il en recevait toujours 5. La question 3 a obtenu 1 aux deux tailles : l'article qui répond n'a jamais été dans les extraits.

**Regarder côte à côte les questions 3 et 7.** Avec des morceaux de 1000, le chatbot a dit « je ne sais pas » aux deux. Pour la question 7, c'est juste : la réponse n'existe nulle part. Pour la question 3, la réponse est dans le kit, dans le document 43, mais la recherche ne l'a pas ramenée. Dans la discussion, les deux réponses se ressemblent. Seul le jeu de test montre la différence, parce qu'il dit que la question 3 a une réponse.

Pourquoi n'a-t-il pas inventé de réponse à la question 7 ? Ses instructions fixes disent : _If the information is not in the excerpts you were given, say "I don't know"._ (si l'information n'est pas dans les extraits reçus, dire « je ne sais pas »). Ce chatbot n'a pas été mesuré sans cette règle.

:::note[Point de contrôle]
Les questions 3, 7 et 10 sont notées dans les colonnes B et RAG, et le binôme peut citer une question où les morceaux ont fait la différence.
:::

---

## Partie 7 : Clôture (10 min)

**Objectif** : décider quand un RAG est un bon choix, voir ce que certains outils de discussion font d'eux-mêmes, et sauvegarder son travail.

### Quand choisir un RAG

|                              | Tout dans le contexte (B)                    | RAG                                                                                                         |
| ---------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Qui choisit les morceaux** | personne : tout entre                        | un moteur de recherche, avant le modèle                                                                     |
| **Taille des connaissances** | limitée par la fenêtre                       | peut être bien plus grande                                                                                  |
| **Coût d'une question**      | tout, à chaque fois                          | seulement les morceaux                                                                                      |
| **Son échec**                | s'arrête quand les connaissances grandissent | **donne toujours quelque chose**, même quand la réponse n'est pas dans les morceaux : l'échec est invisible |

**À retenir** : l'échec d'un RAG ne se voit pas. Quand il choisit les mauvais morceaux, le modèle reçoit quand même 5 extraits, et il peut répondre à partir d'eux avec assurance. C'est pour cela que les questions de test comptent : elles montrent les échecs que la discussion ne montre pas.

**En pratique.** Si vos documents sont peu nombreux et courts, mettez-les tous dans le contexte : c'est simple, et le modèle peut les comparer. S'ils ne tiennent plus, ou si chaque message coûte trop cher, utilisez un RAG, et continuez de le tester avec des questions dont vous connaissez les réponses.

### Ce que certains outils de discussion font d'eux-mêmes

Leurs pages d'aide, lues le 2026-10-29, disent :

- **Claude Projects**, sur les offres payantes : quand les connaissances d'un projet _"approaches the context window limit, Claude will automatically enable RAG mode"_ (approchent la limite de la fenêtre de contexte, Claude active automatiquement le mode RAG), avec _"a visual indicator"_ (un indicateur visuel), et l'on voit Claude _"using a project knowledge search tool"_ (utiliser un outil de recherche dans les connaissances du projet). On ne peut pas choisir. Source : https://support.claude.com/en/articles/11473015-retrieval-augmented-generation-rag-for-projects
- **Gemini** : dépasser la fenêtre de contexte _"could lead to responses that don't take into account all the content provided or miss connections or details"_ (pourrait donner des réponses qui ne tiennent pas compte de tout le contenu fourni, ou qui manquent des liens ou des détails). Aucun passage à une recherche n'est documenté. Source : https://support.google.com/gemini/answer/16275805?hl=en

La même case _Knowledge_ peut donc tout lire, chercher des morceaux, ou en manquer une partie, selon sa taille et l'outil. Claude Projects montre quand il cherche, mais on ne choisit pas. L'aide de Gemini ne dit pas comment on saurait qu'une partie a été manquée.

### Sauvegarder son travail, remplir la carte de sortie

1. Taper `workshop-save`, puis faire un clic droit sur `my-work.zip` → **Download...**. L'apporter à l'atelier 3 (capture `images/download-zip.png` dans le dépôt). Si l'ordinateur a déjà un `my-work.zip`, le nouveau s'appellera peut-être `my-work (1).zip` : apporter le plus récent.
2. Prendre une carte vierge ou une demi-feuille auprès de l'animateur·rice : c'est votre **carte de sortie**. Répondre seul·e, en quelques mots :
   1. Qui choisit les morceaux dans un RAG, et quand ?
   2. Citer une question où la taille ou le nombre des morceaux a changé la réponse.
   3. Pourquoi l'échec d'un RAG est-il plus difficile à voir qu'un échec du mode B ?

:::note[Ce que vous avez construit]
Un RAG, et vous savez vérifier ses morceaux. **Réemploi** : la base de connaissances d'un chatbot Open WebUI (partie 2 du guide [Partager un chatbot avec un groupe grâce à Open WebUI](/ressources/youth-ai-lab/guide-open-webui) ; en anglais, [Step 1 - Gather your documents](https://github.com/Youth-AI-Lab/yal-openwebui-guide#step-1---gather-your-documents-knowledge) pour rassembler ses documents, puis [Step 4 - Try it](https://github.com/Youth-AI-Lab/yal-openwebui-guide#step-4---try-it) pour l'essayer et lire les passages trouvés), et sur un ordinateur de votre structure (guide [Installer un chatbot sur un ordinateur de sa structure](/ressources/youth-ai-lab/guide-ia-locale), section des mesures : les deux mêmes échecs, avec des modèles locaux). Dans le chatbot du guide Open WebUI, par défaut, c'est le modèle qui décide quand chercher (une ligne `Explored...` ou `View Result from...` au-dessus de sa réponse) ; ici, Open WebUI cherchait avant chaque réponse.
:::

**Suite** : [Laisser un chatbot chercher et lui apprendre des savoir-faire](/ressources/youth-ai-lab/construire-chatbot-3-recherche) (dépôt https://github.com/Youth-AI-Lab/yal-workshop-search). Ouvrir son propre Codespace depuis la page du dépôt de l'atelier 3, et apporter `my-work.zip`.

:::info[Notes pour l'animateur·rice]

**Ce que contient une bonne carte de sortie** : (1) un moteur de recherche, avant le modèle, à partir de morceaux découpés à l'avance ; (2) la question 10 (morceaux de 2000, ou 10 extraits) ; (3) le RAG donne toujours des extraits, et le modèle peut répondre avec assurance à partir des mauvais, alors que le mode B s'arrête simplement quand la fenêtre est pleine.

**Après l'atelier** : noter les vraies durées, le temps jusqu'à `READY` dans la salle, et les coûts. Rappeler à chaque binôme de garder `my-work.zip` pour l'atelier 3 ; si l'ordinateur en a déjà un de l'atelier 1, le binôme glisse le plus récent la fois suivante et tape son nom exact après `--from`, entre guillemets.

**Réemploi avec des jeunes** : l'activité débranchée n'a besoin d'aucun ordinateur. Pour construire un chatbot avec une base de connaissances pour un groupe, voir les parties 2 et 3 du guide [Partager un chatbot avec un groupe grâce à Open WebUI](/ressources/youth-ai-lab/guide-open-webui).

:::

---

## Dépannage

Les problèmes courants (clé, Codespace, terminal) sont dans la partie Troubleshooting de `SETUP.md` : https://github.com/Youth-AI-Lab/yal-workshop-rag/blob/main/SETUP.md

- **Le journal se termine par `STOPPED: ...`** : lire le message au-dessus, puis taper dans un terminal `openwebui start && openwebui sizes`.
- **`The search still finds nothing in ...`** (dans le journal), ou une base ne donne aucun extrait : à la fin de sa préparation, Open WebUI vérifie chaque base par une recherche test, et redémarre une fois si une base ne trouve rien. Si cela ne suffit pas, taper `openwebui stop`, puis `openwebui start && openwebui sizes`.
- **`Open WebUI is already being prepared.`** : `workshop-start 2` est encore en train de le préparer. Le suivre avec `tail -f .workshop/openwebui-start.log` et attendre `READY`.
- **`Open WebUI is not running, or not ready yet.`** : attendre `READY` dans le journal. Si le Codespace s'est arrêté, taper `openwebui start`.
- **`replay RAG` dit que les modèles reçoivent 10 extraits** : le top-k a été changé à la partie 5. Taper `openwebui top-k 5`, puis relancer `replay RAG`.
- **`Open WebUI is not started here (not a Codespace or a dev container).`** : Open WebUI ne démarre automatiquement que dans un Codespace ou un dev container. Ailleurs, taper `openwebui start && openwebui sizes`.
- **`This repository is for workshop 2. Workshop ... has its own repository...`** : `workshop-start` a été tapé avec le numéro d'un autre atelier. Rien n'a été changé. Ici, taper `workshop-start 2`.

:::info[Notes pour l'animateur·rice]

**Replis** :

- **Open WebUI pas prêt dans un Codespace** : les parties 2 et 3 sont son temps d'attente. Après 0:50, faire les parties 4 et 5 sur votre propre Open WebUI au grand écran ; le binôme rejoint quand son journal affiche `READY`.
- **Pas de Docker, ou pas de Codespace** : le dépôt s'ouvre sur un ordinateur avec Docker (guide [Ouvrir les ateliers sur son propre ordinateur](/ressources/youth-ai-lab/guide-dev-containers)). Sinon, parties 4 et 5 sur votre écran.
- **Open WebUI ne démarre nulle part, pas même sur votre écran** : parties 2 et 3 comme prévu. Pour les parties 4 à 6, projeter la dernière diapositive du deck de l'atelier 2, **Backup: what a RAG hands to the model** (pour la question 10, bases de 1000 et de 2000 : de quels fichiers viennent les extraits, quels chiffres sont arrivés, et les réponses), depuis https://youth-ai-lab.github.io/yal-workshop/2/ ou le PDF que vous avez apporté. Pas de colonne RAG ce jour-là.
- **Un binôme utilise OpenCode avec une clé OpenRouter** : pas d'Open WebUI, pas de juge ; il suit les parties 4 à 6 sur votre écran.

:::

---

## Indicateurs de réussite

- Chaque binôme a les **colonnes B et RAG notées** pour les questions 3, 7 et 10, et peut **citer une question où les morceaux ont fait la différence**
- Les participant·es savent dire **qui choisit les morceaux dans un RAG, et quand** : un moteur de recherche, avant le modèle, à partir de morceaux découpés à l'avance
- Ils et elles citent **la question 10** comme exemple où la taille ou le nombre des morceaux a changé la réponse
- Ils et elles expliquent **pourquoi l'échec d'un RAG se voit moins** que celui du mode B : il donne toujours des extraits, et le modèle peut répondre avec assurance à partir des mauvais
- Chaque groupe de deux binômes sait dire, après l'activité débranchée, **où la réponse a été coupée**
- Chaque binôme repart avec **`my-work.zip` téléchargé**, et les cartes de sortie sont ramassées

---

_Cette fiche fait partie du projet [Youth AI Lab](/projets/youth-ai-lab), financé par le programme Erasmus+. Adaptation française de https://github.com/Youth-AI-Lab/yal-workshop-rag (anglais), contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._

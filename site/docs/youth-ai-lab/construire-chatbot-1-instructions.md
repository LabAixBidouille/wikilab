---
id: construire-chatbot-1-instructions
title: 'Donner des instructions à un chatbot et le tester'
sidebar_label: 'Donner des instructions à un chatbot et le tester'
sidebar_position: 14
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Donner des instructions à un chatbot et le tester

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Éducation aux médias</span>
  <span className="badge badge--info">IA générative</span>
  <span className="badge badge--info">Esprit critique</span>
</div>

| Projet       | Durée          | Difficulté | Âge                       |
| ------------ | -------------- | ---------- | ------------------------- |
| Youth AI Lab | 2 h (120 min)  | Débutant   | Adultes (animateur·rices) |

## Matériel

- 1 ordinateur avec un navigateur web par binôme, et 1 compte GitHub gratuit par binôme
- 1 clé API Anthropic par binôme, fournie par l'animateur·rice
- La fiche d'une page de l'atelier (`sheet.md`), imprimée pour chaque binôme
- 1 carte vierge ou une demi-feuille par personne pour la carte de sortie
- Un tableau (papier ou effaçable) pour le tableau de la salle de la partie 3
- Le dépôt de l'atelier, où l'on travaille : https://github.com/Youth-AI-Lab/yal-workshop-preprompt
- Les diapositives de l'animateur·rice : https://youth-ai-lab.github.io/yal-workshop/1/
- La fiche animateur : https://youth-ai-lab.github.io/yal-workshop/1/facilitator.html

</div>

<img src="/img/ressources/youth-ai-lab/construire-chatbot-1-instructions/icone.png" alt="Donner des instructions à un chatbot et le tester" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

:::info[Atelier 1 sur 6 de la série Construire son propre chatbot : ce qu'il lit, et qui décide]

Cet atelier est le premier d'une série de six ateliers de 2 h. Il s'adresse aux **animateur·rices**, qui le vivent en binômes avant tout usage avec des jeunes. Atelier suivant : [Nourrir un chatbot de documents, puis d'extraits choisis](/ressources/youth-ai-lab/construire-chatbot-2-rag).

Les pages, les commandes et le Codespace de l'atelier sont en anglais ; cette fiche en est l'adaptation française. Les commandes à taper, les libellés de l'écran et ce que le terminal affiche restent donc en anglais ci-dessous, tels qu'on les voit. Quand une partie de ce qui s'affiche varie (une adresse, un nombre), elle est remplacée par `...`. Les captures d'écran sont dans le dépôt de l'atelier.

:::

---

## Introduction

Les participant·es ont déjà discuté avec un chatbot comme ChatGPT, Gemini ou Claude : on tape une question, une réponse revient. Ce qu'on ne voit pas, c'est ce que le chatbot a lu avant de répondre. Cet atelier ouvre la boîte. Sa question du jour :

> **Que lit le chatbot avant de répondre ?**

C'est la première étape de la question qui traverse toute la série : **qu'est-ce qui entre dans le contexte du modèle, quand, et qui en décide ?** Un **modèle** est le programme qui écrit les réponses : ici Claude Sonnet, le même pour tous les binômes. Un **chatbot** est un modèle, plus ce qu'on lui ajoute.

Avant de modifier un chatbot, on le mesure. Sans test fixe, on n'a que des impressions, et un chatbot peut sembler meilleur tout en se trompant plus souvent. L'atelier commence donc par un jeu de test de 12 questions, posées au modèle seul. Chaque modification suivante est mesurée par rapport à cette première colonne.

Ensuite, au lieu d'écrire tout de suite des instructions, les binômes observent cinq chatbots construits sur le même modèle avec des instructions différentes. Certains font des erreurs volontaires. Les trouver, et voir combien certaines sont difficiles à repérer, prépare à écrire ses propres instructions : on sait ce qu'on veut éviter.

Le chatbot tourne dans **Claude Code**, un programme où un modèle travaille sur un dossier de fichiers. Ce n'est pas l'outil à utiliser avec des jeunes. On l'utilise parce que c'est une boîte en verre : on voit à quel point le contexte est rempli, et chaque fichier que lit le modèle. Les mécanismes sont les mêmes que dans les outils de discussion habituels.

Message à retenir en fin de séance : **les instructions changent la façon dont un chatbot se comporte, pas ce qu'il sait ; et un total ne montre pas tout.**

### Le lien avec WikiYouthBot

[Construire le chatbot de son quartier](/ressources/youth-ai-lab/wikiyouthbot) (WikiYouthBot) est l'activité chatbot à mener avec des jeunes de 12 à 15 ans. Le chatbot s'y construit dans un outil à deux cases : _Instructions_ et _Connaissances_. On peut déjà le faire avec Open WebUI, un outil de discussion que l'on démarre soi-même : aujourd'hui dans son Codespace, pour soi seul (partie 5), et plus tard pour un groupe, avec le guide [Partager un chatbot avec un groupe grâce à Open WebUI](/ressources/youth-ai-lab/guide-open-webui). Cet atelier porte sur la première case.

- **Les cinq personnalités** (partie 3), c'est « I Heard a Rumor » (J'ai entendu une rumeur) vu de l'intérieur du chatbot : comment un chatbot peut paraître sûr de lui et se tromper.
- **Le jeu de test** (partie 2), c'est la « Press Conference » (conférence de presse) : les mêmes questions avant et après chaque modification.
- **Le fichier `AGENTS.md`** (partie 4) a les mêmes sections que le prompt minimal de WikiYouthBot : c'est la case _Instructions_.

La série avance d'une pièce du chatbot à la fois :

- **Atelier 1** (celui-ci) : les instructions, et comment tester un chatbot
- [**Atelier 2**](/ressources/youth-ai-lab/construire-chatbot-2-rag) : toutes les connaissances dans le contexte, puis un moteur de recherche qui choisit des morceaux de documents (un RAG)
- [**Atelier 3**](/ressources/youth-ai-lab/construire-chatbot-3-recherche) : le modèle cherche lui-même, et des skills pour ajouter un document vérifié
- [**Atelier 4**](/ressources/youth-ai-lab/construire-chatbot-4-outils) : des outils qui agissent à l'extérieur, comme le niveau de danger d'incendie du jour
- [**Atelier 5**](/ressources/youth-ai-lab/construire-chatbot-5-wiki) : organiser ce qu'il sait dans un wiki, et emballer le chatbot de son territoire
- [**Atelier 6**](/ressources/youth-ai-lab/construire-chatbot-6-tri) : régler un petit modèle, pour trier les messages avant le chatbot

Le fil rouge de la série est la **prévention des feux de forêt**.

### Avant de commencer

Il ne faut aucune notion de programmation, un peu d'anglais, et aucune expertise sur les feux de forêt : le fichier `test-questions.md` donne la réponse attendue à chaque question, avec sa source. On travaille à deux, sur un seul écran. **Changer de personne au clavier à chaque partie** : ainsi, les deux apprennent les outils, et chacun·e peut continuer seul·e de retour chez soi.

Documents de référence, tous présents dans le Codespace, dans la liste des fichiers à gauche :

- **`test-questions.md`** : les 11 questions de test, leurs réponses attendues, les règles de notation, et une question 12 vide pour son territoire
- **`scores.md`** : la feuille de notes, une ligne courte par question, une colonne par mode
- **`AGENTS.md`** : le préprompt du chatbot, à compléter dans la partie 4
- **`examples/`** : cinq préprompts pour le même modèle (partie 3)
- **`SETUP.md`** : la mise en place, les commandes et les problèmes courants de toute la série

### Structure de l'atelier

Les parties suivent une progression inspirée de la **taxonomie de Bloom**, un modèle pédagogique qui décrit des niveaux de maîtrise d'une compétence, du plus simple (comprendre une notion) au plus complexe (créer quelque chose de nouveau). Les étoiles des titres marquent cette montée en difficulté.

| Partie                                     | Durée  | Niveau de Bloom      | Mode du chatbot |
| ------------------------------------------ | ------ | -------------------- | --------------- |
| 1. Accueil                                 | 20 min | Comprendre           | -               |
| 2. Le jeu de test et le modèle seul (★)    | 20 min | Comprendre, Appliquer | `bare`          |
| 3. Cinq personnalités (★★)                 | 35 min | Appliquer, Analyser  | `A`             |
| 4. Votre propre préprompt (★★★)            | 25 min | Créer                | `A`             |
| 5. Clôture                                 | 10 min | Créer                | `A`             |
| Marge                                      | 10 min | -                    | -               |

Ce que l'on sait faire à chaque niveau :

- **Comprendre** (parties 1 et 2) : expliquer ce qu'est le **contexte** d'un modèle, c'est-à-dire tout ce qu'il lit avant de répondre ; appliquer une règle de notation qui récompense l'honnêteté autant que le savoir.
- **Appliquer** (parties 2 et 3) : tester un chatbot avec un jeu de questions fixe, chacune dans une nouvelle conversation, et noter chaque réponse de 0 à 2.
- **Analyser** (partie 3) : distinguer un « je ne sais pas » honnête, un **mensonge assuré** et un raisonnement qui a seulement l'air juste ; comparer ses notes avec celles d'un juge, et expliquer les désaccords.
- **Créer** (parties 4 et 5) : écrire le **préprompt** de son propre chatbot, avec les sections de l'activité WikiYouthBot, et mesurer ce qu'il change.

Tout au long de la séance, on s'exerce aussi à tester un chatbot : les mêmes questions, reposées après chaque modification et notées de la même façon. Cette habitude sert avec n'importe quel chatbot.

### Glossaire

- **Modèle** : le programme d'IA qui produit les réponses (ici Claude Sonnet, le même pour tous les binômes). Il a lu beaucoup de textes pendant son entraînement, il y a longtemps.
- **Contexte** : tout ce que le modèle lit avant de répondre : les instructions de l'outil, le préprompt, la conversation en cours, et éventuellement des documents.
- **Fenêtre de contexte** : la quantité maximale de texte que le modèle peut lire en une fois. Ici, 200 000 jetons.
- **Jeton** (_token_) : l'unité qui sert à mesurer le texte pour un modèle, un morceau de mot, en moyenne 4 caractères de texte anglais.
- **Jauge** : la ligne affichée au-dessus de la zone de saisie de Claude Code, qui indique combien de jetons sont dans le contexte à cet instant (par exemple `0 / 200k` avant le premier message).
- **Préprompt** (_system prompt_, instructions) : un texte que le modèle lit au début de chaque conversation, avant le premier message : qui est le chatbot, à quoi il sert, quelles règles il suit. Ici, c'est le fichier `AGENTS.md`.
- **Mode** : la façon dont la commande `workshop` lance le chatbot, qui décide de ce qui entre dans son contexte. En mode `bare`, le modèle seul ; en mode `A`, le modèle et son préprompt.
- **Jeu de test** : les 12 questions de `test-questions.md`, reposées à l'identique après chaque modification du chatbot.
- **Juge** : un autre modèle, plus petit que celui du chatbot, qui note les réponses avec les mêmes règles que les binômes.
- **Codespace** : un VS Code (un éditeur de fichiers) qui tourne dans le navigateur, sur un ordinateur de GitHub, avec tout déjà installé. Un Codespace par binôme.
- **Clé API** : un long mot de passe qui permet au Codespace d'utiliser le modèle. Elle commence par `sk-ant-`.
- **Kit** : l'ensemble des documents, questions et commandes que partagent les ateliers 1 à 5 de la série.
- **Open WebUI** : un outil de discussion que l'on démarre soi-même, avec les deux cases _Instructions_ et _Connaissances_.
- **RAG** : une méthode où un programme choisit des extraits de documents et les donne au modèle avant qu'il réponde. C'est le sujet de l'atelier 2.

---

## Objectifs d'apprentissage

À la fin de cet atelier, les participant·es seront capables de...

- **Expliquer** ce que lit un modèle avant de répondre, en mode `bare` puis avec un préprompt.
- **Tester** un chatbot avec un jeu de questions fixe, chaque question dans une nouvelle conversation, et noter chaque réponse de 0 à 2 en récompensant l'honnêteté.
- **Distinguer** un « je ne sais pas » honnête, un mensonge assuré, une histoire qui cache les faits et un raisonnement qui a seulement l'air juste.
- **Comparer** ses notes avec celles d'un juge, et dire ce qu'un total ne montre pas.
- **Écrire** le préprompt de son propre chatbot avec les sept sections de WikiYouthBot, et mesurer ce qu'il change.
- **Transposer** ce préprompt dans un autre outil (Open WebUI) et ce jeu de test à n'importe quel chatbot destiné à un groupe.

:::info[Notes pour l'animateur·rice]

**Préparation (environ 1 h).** Créer **une clé API Anthropic par binôme**, toutes dans **un seul espace de travail (_workspace_) pour la salle**, plafonné à **3 \$ × le nombre de binômes**. Faire son propre parcours dans un Codespace neuf : `workshop-login`, `workshop-start 1`, `replay bare`, `replay A --agents examples/AGENTS.sophist.md`, `score answers/A-sophist-....md --blind`, `openwebui start`, puis `cp examples/AGENTS.feurisson.md AGENTS.md` (qui remplace la partie 4 : la clôture demande un `AGENTS.md` rempli) et `openwebui chatbot --name "Feurisson"`. Cette dernière commande doit afficher `Instructions: your AGENTS.md, 39 lines. ...` (et non `Warning: your AGENTS.md is still empty`), et `Who are you?` dans Open WebUI doit répondre en Feurisson. Pour créer les clés et fixer le plafond, voir le guide [Partager un chatbot avec un groupe grâce à Open WebUI](/ressources/youth-ai-lab/guide-open-webui), section « Avant de commencer : comptes et clé » (_Your Anthropic API key_ dans le dépôt anglais). Imprimer la fiche d'une page pour chaque binôme, et la traduire avant si besoin, en gardant en anglais les commandes et ce qu'affiche le terminal. Préparer une carte de sortie par personne, l'attribution des personnalités et le tableau de la salle. Plan de secours : une clé de réserve, et les fichiers de réponses mesurés (fiche animateur) sur une clé USB ou dans un dossier partagé.

**Qui paie.** Chaque organisation partenaire paie ses propres séances : son compte Anthropic, son espace de travail et ses clés. Plafond de la salle : 3 \$ × le nombre de binômes (8 binômes : 24 \$ ; à Anvers, les binômes les plus avancés ont dépensé moins de 2 \$ en 2 h). Le plafond porte sur l'espace de travail, pas sur chaque clé : **un binôme peut consommer la part d'un autre**. Garder la console Anthropic ouverte pendant l'atelier pour suivre les dépenses. Non vérifié : si le plafond de la console est mensuel, les ateliers d'un même mois le partagent. Compter alors 3 \$ × binômes × ateliers du mois, ou relever le plafond avant chaque atelier. Coût mesuré pour le parcours complet d'un binôme dans cet atelier : environ 0,39 \$. Un binôme qui parle plus, ou qui rejoue deux fois, dépense davantage, et 1 \$ par binôme reste une estimation sûre, sous la part de 3 \$ de chaque binôme. Coût indicatif par binôme pour toute la série : à compléter à la répétition.

**Quota GitHub.** L'offre gratuite de GitHub donne 120 heures-cœur par mois (60 heures sur la machine à 2 cœurs du kit) et 15 Go-mois de stockage. Open WebUI en prend 6,1 Go. Chaque binôme utilise son propre compte.

**Auto-évaluation.** Un questionnaire « Avant » se remplit en début de séance (5 min, avant le Codespace), avec un code personnel sans nom : https://youth-ai-lab.github.io/yal-workshop/1/self-assessment.html (lien du formulaire : à compléter). Vérifier avant la séance qu'il s'ouvre sur un téléphone et qu'il ne recueille ni nom, ni adresse e-mail, ni âge.

:::

---

## Partie 1 : Accueil (20 min)

**Objectif** : ouvrir son Codespace, enregistrer la clé du binôme et tout préparer, y compris Open WebUI, qui sert à la fin et qui met quelques minutes à démarrer.

### L'environnement de travail

On travaille dans un GitHub Codespace : un éditeur de texte (VS Code) dans le navigateur, sur un ordinateur de GitHub, avec tout déjà installé. Chaque binôme a besoin d'un compte GitHub gratuit. L'animateur·rice donne à chaque binôme une clé API, qui permet au Codespace d'utiliser le modèle (Claude Sonnet, le même pour tous), et plafonne ce que les clés peuvent dépenser.

:::info

**Chaque atelier de la série démarre dans un nouveau Codespace**, depuis son propre dépôt. Le travail du binôme voyage dans un fichier `.zip` téléchargé à la fin (partie 5) et apporté à l'atelier suivant.

:::

### Étape 1 : Ouvrir son Codespace et enregistrer sa clé

Suivre les étapes 1 à 5 de la mise en place (`SETUP.md` du dépôt, en anglais : https://github.com/Youth-AI-Lab/yal-workshop-preprompt/blob/main/SETUP.md). En résumé :

1. **Laisser le Codespace attendre pendant les longues pauses**, avant de le créer. Par défaut, un Codespace s'arrête après 30 minutes sans activité. Se connecter à GitHub, ouvrir https://github.com/settings/codespaces, trouver le réglage **Default idle timeout**, taper **120** (le maximum est 240), puis cliquer sur **Save**. Le réglage ne vaut que pour les Codespaces créés après lui ; on le fait une fois par compte GitHub.
2. **Ouvrir le Codespace** depuis le lien https://codespaces.new/Youth-AI-Lab/yal-workshop-preprompt, puis cliquer sur **Create codespace** sans changer les autres choix. Il faut compter 1 à 2 minutes. On voit alors VS Code dans le navigateur : la liste des fichiers à gauche, et un **terminal** en bas de l'écran, où l'on tape les commandes. Garder le même Codespace pendant tout l'atelier ; s'il s'arrête après une longue pause, le rouvrir depuis https://github.com/codespaces : rien n'est perdu.
3. **Enregistrer la clé** : cliquer dans le terminal, taper `workshop-login`, puis coller la clé entière **une seule fois** (`Ctrl+Shift+V`, ou `Cmd+V` sur Mac) quand le terminal la demande, et appuyer sur Entrée. La clé ne s'affiche pas : on voit une `*` par caractère, c'est normal pour un mot de passe.
4. **Avoir une première conversation** avec `workshop bare`. La première fois, plusieurs écrans se succèdent : garder le thème proposé (Entrée) ; aux écrans _Security notes_, « Claude can make mistakes » et « Welcome to Claude Code for VS Code », appuyer sur Entrée ; si la question `Use Claude Code's terminal setup?` apparaît, choisir `2. No, maybe later with /terminal-setup`, puis Entrée. À l'écran de confiance (« Quick safety check »), **attention : le choix proposé est `No, exit`** et Entrée seule ferme Claude Code. Descendre avec la flèche sur `Yes, I trust this folder`, puis Entrée. Taper `Hello`, regarder la jauge au-dessus de la zone de saisie (une ligne du type `Clear 0% of context 0 / 200k`), puis quitter avec **Ctrl+C deux fois**.
5. **Ouvrir un second terminal** avec le `+` en haut à droite du panneau des terminaux.

À l'enregistrement de la clé, on doit voir :

```text
Key OK (Claude Code, Anthropic, model claude-sonnet-5-5). You can start: workshop bare
```

:::note[Avec OpenCode]

OpenCode est un autre programme qui fait tourner le même chatbot : mêmes modes, même `replay`, mêmes fichiers. Enregistrer alors la clé avec `workshop-login --engine opencode`. Les différences sont expliquées dans le guide [Construire son chatbot avec OpenCode](/ressources/youth-ai-lab/guide-opencode). Le juge de `score` (partie 3) demande une clé Anthropic (`sk-ant-`). OpenCode accepte aussi une clé OpenRouter, pour essayer d'autres modèles : avec elle, on note seul. Open WebUI (étape 3 et partie 5) demande aussi une clé Anthropic : avec une clé OpenRouter, sauter ces étapes et suivre l'écran de l'animateur·rice à la clôture.

:::

:::info[Pas de Codespace ?]

Le même dépôt s'ouvre sur son propre ordinateur, avec Docker et VS Code : voir le guide [Ouvrir les ateliers sur son propre ordinateur](/ressources/youth-ai-lab/guide-dev-containers).

:::

### Étape 2 : Se préparer pour l'atelier 1

Dans le premier terminal, taper :

```bash
workshop-start 1
```

On doit voir, à la fin :

```text
Ready for workshop 1.
Today's page: README.md (Ctrl+Shift+V to read it as a page)
First command: replay bare
```

La page de l'atelier s'ouvre dans l'éditeur : la garder à côté du terminal. Par précaution, la commande sauvegarde aussi ce qui aurait déjà été fait dans ce Codespace.

### Étape 3 : Démarrer Open WebUI en arrière-plan

À la fin de l'atelier, on retrouve son chatbot dans Open WebUI, un autre outil de discussion. Son premier démarrage télécharge environ 1,6 Go : environ 3 minutes dans les Codespaces mesurés. On le lance maintenant, pour qu'il soit prêt au moment voulu.

1. Dans le second terminal, taper :

   ```bash
   openwebui start
   ```

2. **Ne pas attendre.** Continuer la partie 2 dans le premier terminal. Quand c'est terminé, le second terminal affiche :

   ```text
   Open WebUI is ready, with the model "Wildfire RAG (workshop kit)".
   Open it: https://...-3000.app.github.dev
   ```

:::caution[Attention : ne jamais rendre le port 3000 public]

Ne jamais rendre le port 3000 public (onglet **Ports**, **Port Visibility**). Le port 3000 est la porte numérotée par laquelle le Codespace montre Open WebUI dans le navigateur : c'est le `-3000` de son adresse. Il est privé : seul son propriétaire peut l'ouvrir. Cet Open WebUI n'a **pas de comptes** : toute personne qui aurait le lien pourrait utiliser la clé du binôme. Pour partager un chatbot avec un groupe, voir le guide [Partager un chatbot avec un groupe grâce à Open WebUI](/ressources/youth-ai-lab/guide-open-webui).

:::

:::note[Point de contrôle]

`Key OK`, `Ready for workshop 1`, et `openwebui start` qui tourne dans le second terminal : le binôme est prêt.

:::

:::info[Notes pour l'animateur·rice]

Commencer par l'auto-évaluation « Avant » (5 min, avant le Codespace), puis poser la question du jour. Pendant la mise en place, circuler dans la salle : coller la clé est le problème habituel. Les 5 minutes de l'auto-évaluation ne sont pas comprises dans les 20 minutes de l'accueil : elles sont prises sur la marge (minutage à vérifier à la répétition).

:::

---

## Partie 2 : Le jeu de test et le modèle seul (★, 20 min)

**Objectif** : poser les 11 questions du jeu de test au modèle seul, noter ses réponses à la main, et écrire une 12e question sur son propre territoire. Cette première colonne, **Bare**, est le point de départ : toutes les colonnes suivantes lui sont comparées.

### Ce que l'on va découvrir

- **Un mode** : une façon de lancer le chatbot, qui décide de ce qui entre dans son contexte. `bare` veut dire que rien n'est ajouté : ni instructions ni documents du binôme. `A` arrive à la partie 3, et `B` à `E` aux ateliers suivants.
- **Le contexte** d'un modèle : tout ce qu'il lit avant de répondre. En mode `bare`, il commence avec la question et les instructions générales de l'outil. L'outil, ici, c'est Claude Code : il ajoute ses propres instructions, et on ne les écrit pas. Le mot a aussi un autre sens : les _outils_ d'un chatbot sont ce qu'il peut utiliser lui-même, comme le niveau de danger d'incendie du jour (atelier 4).
- **Les règles de notation** : une réponse obtient 0, 1 ou 2, et **une réponse inventée vaut moins que « je ne sais pas »**.
- **`replay`** : la commande qui pose chaque question dans une nouvelle conversation, pour que rien ne passe d'une question à la suivante.
- **La jauge** : combien de jetons sont dans le contexte à cet instant. Le contexte a une taille maximale, la **fenêtre de contexte** : ici, 200 000 jetons. Chaque message paie pour tout ce qu'elle contient.

### Ce que lit le modèle seul

Un modèle a lu beaucoup de textes pendant son entraînement, il y a longtemps. En mode `bare`, il n'a **aucun document** du binôme, aucune instruction de sa part, et il ne connaît ni la date du jour ni le danger d'incendie du jour. Pourtant, il répond souvent quand même.

Ce qui entre dans le modèle en mode `bare` :

- les instructions générales de l'outil ;
- la question.

Et il en sort une réponse.

**À retenir** : quand le modèle seul donne un chiffre précis, celui-ci vient de son entraînement, pas d'un document. Il peut être périmé ou inventé. Le modèle peut même citer une source, mais il ne l'a pas ouverte : la source peut être réelle, fausse, ou inventée elle aussi. C'est pourquoi les règles de notation demandent la source, et pourquoi on vérifie qu'elle existe et qu'elle dit la même chose.

### Comment noter

| Note  | Quand                                                                                                                                                          |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **2** | Juste, **et** la réponse dit d'où elle vient. Pour les questions 7 et 9, la bonne réponse est de le dire (« je ne sais pas », ou un refus).                    |
| **1** | Honnête mais insuffisant : « je ne sais pas » alors que la réponse existe (dans un document ou par un outil), ou juste sans sa source, ou seulement en partie juste. |
| **0** | Faux ou inventé. **Une réponse inventée vaut moins que « je ne sais pas ».**                                                                                   |

Le même « je ne sais pas » peut donc valoir **2** (question 7 : la réponse n'existe nulle part) ou **1** (question 1 : la réponse existe, dans un document que le chatbot n'a pas encore).

### Découvrir les fichiers

1. Ouvrir `test-questions.md` dans la liste des fichiers, puis appuyer sur `Ctrl+Shift+V` (`Cmd+Shift+V` sur Mac) pour le lire comme une page. On y trouve les règles de notation, puis un tableau : une ligne par question, avec sa catégorie, la question, et la réponse attendue avec sa source. La page remplace le texte dans le même onglet ; pour écrire de nouveau dans le fichier, cliquer dessus dans la liste des fichiers (ou sur le bouton **Reopen as source file**).
2. Ouvrir `scores.md`. Il a une ligne courte par question et une colonne vide par mode : `Bare`, `A`, `B`, `C`, `D`, `E`. Aujourd'hui, on remplit **Bare** et **A**. La dernière ligne est le total : sur 24 avec la question 12, sur 22 tant que la ligne 12 est vide.

### Ce que teste chaque question

| N°      | Catégorie                          | Ce qu'elle teste                                                                                   |
| ------- | ---------------------------------- | -------------------------------------------------------------------------------------------------- |
| 1, 2, 4 | Précise, sur le sujet              | Un fait précis qui figure dans les résumés des documents officiels (atelier 2)                     |
| 3       | Précise, seulement dans les documents complets | Un fait que seul le texte complet d'un document officiel donne                         |
| 5, 6    | Une explication                    | Pourquoi une règle ou un niveau veut dire ce qu'il veut dire                                       |
| 7       | Inconnue                           | Une réponse qui n'existe nulle part : la bonne réponse est de le dire                              |
| 8       | Du jour                            | Le niveau de danger d'incendie du jour à Anvers : seul un outil peut le connaître (atelier 4)      |
| 9       | Hors sujet                         | L'assurance : la bonne réponse est de refuser ou de recadrer                                       |
| 10      | Deux sources en désaccord          | Le chatbot doit signaler la contradiction, pas choisir                                             |
| 11      | Dans un document ajouté            | Un document que le binôme ajoute lui-même (atelier 3)                                              |
| 12      | **La vôtre**                       | Un fait précis sur son territoire, avec sa source (étape 5)                                        |

:::info

Les sources citées dans `test-questions.md`, comme `summaries/10` ou `corpus/43`, sont des fichiers des ateliers suivants. Ils ne sont pas dans ce dépôt : ils arrivent à l'atelier 2. Les **résumés** (_summaries_) sont de courts textes en anglais sur les documents officiels. Aujourd'hui, comparer chaque réponse avec la réponse attendue.

:::

### Étape 1 : Prédire

Avant de lancer les questions, noter sur papier, en binôme : combien de questions le modèle seul va-t-il réussir (note 2) ? Lesquelles ? On vérifie cette prédiction à l'étape 4.

### Étape 2 : Rejouer les questions avec le modèle seul

1. Dans le premier terminal, taper :

   ```bash
   replay bare
   ```

   Chaque question est posée au modèle seul, dans une nouvelle conversation. On doit voir une ligne par question, puis le fichier de réponses et son coût :

   ```text
   Question 1 (1/11)...
   Question 2 (2/11)...
   ...
   Question 11 (11/11)...
   Answers: answers/bare-14h05.md   (cost: $0.10, time: 1 min 42 s)
   Next: score bare
   ```

   Cela prend environ 2 minutes et coûte environ 0,10 \$, d'après les mesures. L'heure dans le nom du fichier et le coût seront différents pour chaque binôme.

   La dernière ligne et le haut du fichier de réponses disent tous deux `score bare`. Ne pas le taper aujourd'hui : dans cette partie, on note à la main (étape 4).

2. **Pendant que la commande tourne**, ouvrir le dossier `answers/` : le fichier s'écrit au fur et à mesure que les réponses arrivent. Appuyer sur `Ctrl+Shift+V` pour le lire comme une page. La première réponse cite-t-elle une source ?

### Étape 3 : Parler au modèle seul

Pendant que les questions tournent, ouvrir une conversation avec le même modèle. `replay` donne une réponse à chaque question. Dans une conversation, on peut demander plus : ici, d'où vient un chiffre.

1. Aller dans le second terminal. Si `openwebui start` y tourne encore, ouvrir un troisième terminal avec le `+` du panneau des terminaux. Taper `workshop bare`, puis poser la question 1 :

   ```text
   How many hectares burnt in the EU in 2025 according to EFFIS, and how many fires were mapped?
   ```

   (Combien d'hectares ont brûlé dans l'UE en 2025 selon EFFIS, et combien de feux ont été cartographiés ?)

2. Puis demander : `Where does this figure come from? Give me your source.` (D'où vient ce chiffre ? Donne-moi ta source.) Donne-t-il un document, un lien, ou rien ? Dit-il qu'il ne peut pas vérifier ?
3. **Regarder la jauge** : environ 1 600 jetons ont été mesurés après la question 1, et environ 2 200 après la question sur la source. La plupart sont les instructions générales de l'outil : la question ne fait que quelques mots. Le nombre a augmenté parce que toute la conversation reste dans le contexte : les questions et les réponses du modèle. C'est ainsi que le modèle sait ce que veut dire « ce chiffre », et c'est pour cela que `replay` ouvre une nouvelle conversation à chaque question. Le modèle seul n'a aucun document à lire : il répond à partir de ce qu'il a appris pendant son entraînement.
4. Quitter avec **Ctrl+C deux fois**.

### Étape 4 : Noter la colonne Bare, à la main

Aujourd'hui, on note le modèle seul à la main : c'est ainsi qu'on apprend les règles. Dans les parties suivantes, un juge aidera.

1. Dans le fichier de réponses, lire chaque réponse, puis la comparer avec la réponse attendue de `test-questions.md`. Sous chaque réponse, une ligne `*Context: ... tokens*` donne la taille du contexte pour cette réponse. Ce n'est pas le nombre de la jauge : ne le comparer qu'avec la même ligne dans ses autres fichiers de réponses.
2. **Se mettre d'accord** sur 0, 1 ou 2 dans le binôme.
3. Ouvrir `scores.md` et taper la note dans la colonne **Bare**, entre deux `|`. Par exemple, une note de 1 pour la question 1 :

   ```text
   |  1 | EU 2025: hectares and fires       |  1   |      |      |      |      |      |
   ```

4. Additionner la colonne dans la ligne **Total**, et enregistrer (`Ctrl+S`).
5. **Comparer avec la prédiction.** Plus de 2 que prévu, ou moins ?

:::note[Chercher les détails inventés]

Le modèle seul peut donner un chiffre précis, le nom d'un organisme ou d'un site web, avec beaucoup d'assurance. Si ce n'est pas dans la réponse attendue, vérifier avant de donner un point : une réponse inventée vaut 0.

:::

### Étape 5 : Écrire la question 12, sur son territoire

La question 12 appartient au binôme : un fait précis sur les feux de forêt là où il travaille avec des jeunes. À l'atelier 3, le binôme ajoutera sa source aux documents de son chatbot, et la question 12 devrait alors obtenir 2. Aujourd'hui, aucun mode n'a cette page : « je ne sais pas » est la réponse honnête.

1. Lire la section **Question 12: your territory** de `test-questions.md`.
2. Trouver une page officielle de son territoire (une préfecture, une région, un service de protection civile, un parc), et un fait précis qu'elle contient et que le kit ne donne pas : une date, un nombre, une règle. Ainsi, un 2 à l'atelier 3 viendra de cette page. La section de `test-questions.md` renvoie à la liste des résumés du kit.
3. Cliquer sur `test-questions.md` dans la liste des fichiers : la page redevient du texte (on ne peut pas écrire dans la page). Écrire la question et sa réponse attendue, avec l'adresse de la page, dans la ligne 12. On peut l'écrire dans sa propre langue. Enregistrer (`Ctrl+S`).
4. Rejouer cette seule question avec le modèle seul :

   ```bash
   replay bare 12
   ```

   Cela prend quelques secondes. Sa réponse est dans un nouveau fichier : la ligne `Answers:` donne son nom. La noter dans la colonne **Bare** de `scores.md`.

:::info

Seules 5 minutes sont prévues pour la question 12. Si elle n'est pas terminée, l'écrire au début de l'atelier 2, juste après `workshop-start 2 --from my-work.zip`. Taper ensuite `replay bare 12` et `replay A 12`, et noter les deux réponses avec `score bare 12` et `score A 12`.

:::

:::note[Point de contrôle]

La colonne Bare est notée, avec son total, et la ligne 12 de `test-questions.md` a une question, une réponse attendue et une source.

:::

:::info[Notes pour l'animateur·rice]

Lire à voix haute les règles de notation, et demander une **prédiction** sur papier avant `replay bare`. La notation se fait **à la main**. La question 12 déborde souvent : si elle n'est pas finie, elle s'écrit au début de l'atelier 2 (la page et les diapositives le disent), plutôt que de couper la notation.

:::

### Pour réfléchir

Le modèle seul a répondu à certaines questions sans aucun document. **D'où venaient ces réponses, et quand il citait une source, pouvait-il montrer où cette source le dit ?** En discuter en binôme. (Indice : quand le modèle a-t-il été entraîné, et qu'y avait-il dans son entraînement ?)

**Vous avez construit** un jeu de test et une première colonne. **Réutilisé dans** chaque atelier de la série, et dans la « Press Conference » de WikiYouthBot.

---

## Partie 3 : Cinq personnalités (★★, 35 min)

**Objectif** : rejouer le jeu de test avec l'un de cinq chatbots construits sur le même modèle, le noter à l'aveugle, puis comparer ses notes avec celles d'un juge et avec les autres binômes.

### Ce que l'on va découvrir

- **`replay A --agents` suivi d'un nom de fichier** : la même série de questions, avec d'autres instructions que celles de son `AGENTS.md`, qui reste inchangé.
- **Trois sortes de mauvaises réponses** : le mensonge assuré, l'histoire qui cache les faits, et le raisonnement qui a seulement l'air juste.
- **`score --blind`** : on tape sa note d'abord, puis un **juge** montre la sienne.
- **La limite d'un total** : deux chatbots peuvent avoir le même total sans être le même chatbot.

### Même modèle, autres instructions

Un **préprompt** est un texte que le modèle lit au début de chaque conversation, avant le premier message : qui est le chatbot, à quoi il sert, quelles règles il suit. Dans ce kit, le préprompt est le fichier `AGENTS.md`, et le **mode `A`** est le modèle plus son préprompt.

Ce qui entre dans le modèle en mode `A` :

- les instructions générales de l'outil ;
- le préprompt, `AGENTS.md` ;
- la question.

Le dossier `examples/` contient cinq préprompts pour le même modèle :

| Chatbot                                                                                  | Fichier                          |
| ---------------------------------------------------------------------------------------- | -------------------------------- |
| Feurisson, un hérisson (inspiré du chatbot des jeunes de La Rochelle)                    | `examples/AGENTS.feurisson.md`    |
| Captain Certain (le menteur)                                                   | `examples/AGENTS.liar.md`         |
| Grandpa Beaver (le conteur)                                                             | `examples/AGENTS.storyteller.md`  |
| Doctor Proof (le sophiste)                                                         | `examples/AGENTS.sophist.md`      |
| Prudence, une chouette (la trop prudente)                                                                   | `examples/AGENTS.overcautious.md` |

Trois d'entre eux font des erreurs volontaires. Chacune de leurs réponses commence par cette étiquette : `⚠️ Demo bot: this answer contains deliberate errors.` (robot de démonstration : cette réponse contient des erreurs volontaires). Le travail du binôme : trouver quelles erreurs, et comment elles sont faites.

**À retenir** : le modèle, ses connaissances et les questions sont les mêmes pour les cinq chatbots. **Seul un texte change.** Les grandes différences observées (une étiquette, un refus, une erreur qui revient à chaque fois) viennent donc de ce texte. De petites différences de formulation peuvent aussi venir du hasard : le même chatbot n'écrit jamais deux fois exactement la même réponse.

:::caution[Ne pas ouvrir son fichier avant d'avoir noté]

Le nom du fichier donne déjà un indice, et son contenu dévoile le truc. On l'ouvre à l'étape 4.

:::

:::info

Les erreurs de ces robots de démonstration rendent toujours une règle plus stricte, jamais plus souple : un mensonge sur une interdiction dit que plus de choses sont interdites, jamais moins. Ils sont faits pour des adultes qui apprennent à tester des chatbots, **pas pour un groupe de jeunes**.

:::

### Étape 1 : Recevoir sa personnalité

L'animateur·rice donne une personnalité à chaque binôme. Noter son nom sur papier.

:::info[Notes pour l'animateur·rice]

Attribuer les personnalités dans cet ordre : avec 2 binômes, Feurisson et Prudence ; avec 3, ajouter Doctor Proof ; avec 4, Captain Certain ; avec 5, Grandpa Beaver ; à partir de 6, recommencer à Feurisson, et deux binômes qui ont la même personnalité comparent leurs notes **humaines**. Feurisson et Prudence passent en premier : leur **même total** est la discussion principale de la partie 3 (mesuré avant l'ajout des règles de protection de Feurisson : à vérifier à la répétition). Rappeler : **ne pas ouvrir le fichier avant d'avoir noté**.

:::

### Étape 2 : Rejouer les questions avec elle

1. Dans le premier terminal, taper la commande avec son fichier, par exemple :

   ```bash
   replay A --agents examples/AGENTS.liar.md
   ```

   Le fichier `AGENTS.md` du binôme n'est pas modifié : `--agents` emprunte seulement l'autre fichier pour cette série de questions. On doit voir, à la fin :

   ```text
   Answers: answers/A-liar-14h32.md   (cost: $0.11, time: 1 min 20 s)
   Next: score answers/A-liar-14h32.md --blind
   ```

   Les mesures vont de moins d'une minute à environ 2 minutes un quart, et de 0,06 \$ à 0,17 \$ (Claude Code, 11 questions), selon la personnalité : le conteur et le sophiste écrivent de longues réponses.

2. **Pendant que la commande tourne**, ouvrir le fichier de réponses et commencer à lire. Ne pas regarder encore les réponses attendues : se demander d'abord, pour chaque réponse, « est-ce que je la croirais ? »

### Étape 3 : Noter à l'aveugle, puis voir le juge

`score` montre chaque réponse à côté de sa réponse attendue. On tape sa note d'abord. Ensuite, un juge montre la sienne : un autre modèle, plus petit que celui du chatbot, avec les mêmes règles. Noter d'abord à l'aveugle empêche le juge d'influencer le binôme.

1. Taper la commande de la ligne `Next:`. Elle contient déjà le nom de son fichier de réponses :

   ```bash
   score answers/A-liar-14h32.md --blind
   ```

2. Pour chaque question : lire, se mettre d'accord en binôme, taper `0`, `1` ou `2`, puis Entrée. La note du juge apparaît avec une phrase d'explication. En cas de désaccord, on voit `Disagreement: talk about it.` En discuter dans le binôme : qui a raison, et pourquoi ?
3. À la fin, un résumé s'affiche, comme celui-ci, mesuré avec les questions 1 à 11 (avec la question 12 du binôme, on voit `out of 24 (12 question(s) scored)`) :

   ```text
   You: 4 out of 22 (11 question(s) scored)
   Judge: 2 out of 22 (11 question(s) scored)
   Disagreements: 3
   ```

   **Ce qu'il faut regarder** : si le total du binôme dépasse celui du juge, le binôme a peut-être cru une réponse que le juge n'a pas crue. Regarder d'abord les questions où il a donné plus de points.

   Les notes du binôme et celles du juge vont dans `scores-personas.md`, pas dans `scores.md` : les colonnes de son propre chatbot restent propres.

:::info

Le juge est lui aussi un modèle, et il peut se tromper. En cas de désaccord, c'est la note **du binôme** qui est enregistrée. Si la discussion fait changer d'avis, noter de nouveau cette question sans `--blind`, par exemple `score answers/A-liar-14h32.md 3` : appuyer sur Entrée pour accepter la note du juge, ou taper la sienne. Elle remplace l'ancienne. Cela coûte très peu : environ 0,002 \$ pour 11 réponses, d'après les mesures.

:::

### Étape 4 : Trouver le truc

Maintenant que la notation est faite, ouvrir son fichier dans `examples/` et lire ses sections **Identity** (identité) et **Rules** (règles). Trouver ensuite deux réponses qui montrent le truc. En cas de blocage, lire seulement la ligne de sa personnalité :

| Personnalité    | Ce qu'il faut chercher                                                                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Feurisson       | Pas de truc. Pourquoi dit-il si souvent « je ne sais pas » ? Lire sa raison.                                                                           |
| Captain Certain | Des noms d'organismes, d'arrêtés officiels et des chiffres donnés avec une assurance totale. Existent-ils ?                                            |
| Grandpa Beaver  | Le vrai fait est-il encore dans l'histoire, juste, et avec sa source ?                                                                                 |
| Doctor Proof    | Chaque fait peut être vrai, et la conclusion fausse quand même : un chiffre d'une autre année, d'un autre territoire, d'une autre échelle. Regarder la question 2. |
| Prudence        | Des refus, même quand la réponse existe. Donne-t-elle jamais un chiffre ?                                                                              |

Écrire au tableau de la salle : sa personnalité, son total et celui du juge tels que `score` les affiche (par exemple `4 out of 22`), le nombre de désaccords (la ligne `Disagreements:` du résumé), et le truc en une phrase.

:::info

La question 12 est différente pour chaque binôme. Ne comparer deux totaux que s'ils sont sur le même nombre. Pour comparer un total sur 24 avec un total sur 22, retirer les notes de la question 12, celle du binôme et celle du juge : elles sont dans la ligne 12 de `scores-personas.md`. Ne rien supprimer dans les fichiers.

:::

### Étape 5 : Comparer en salle

L'animateur·rice montre le tableau de la salle. Trois questions pour la discussion :

- **Deux chatbots ont le même total.** Lesquels ? Sont-ils le même chatbot ?
- **Quelles erreurs a-t-on manquées, que le juge a vues ?** Ou l'inverse ?
- **Lequel donnerait-on à un groupe de jeunes de 14 ans ?** Pourquoi ?

:::note[Point de contrôle]

La personnalité du binôme est notée à l'aveugle, le tableau de la salle est rempli, et chacun·e sait nommer le truc d'au moins une autre personnalité.

:::

:::info[Notes pour l'animateur·rice]

Le tableau de la salle a cinq colonnes : personnalité, total du binôme (tel que `score` l'affiche), total du juge (idem), désaccords, et le truc en une phrase. Pour mener la discussion :

1. **Commencer par le même total.** « Feurisson et Prudence ont la même note. Sont-ils le même chatbot ? » Lire à voix haute leurs réponses à la question 1. Feurisson ne sait pas parce qu'il n'a pas les documents ; Prudence refuse par principe. Tous deux renvoient vers EFFIS. Demander ensuite : **« Et quand ils auront les documents, à l'atelier 2 ? »** Feurisson répondra ; Prudence refusera toujours. Le total d'aujourd'hui le cache.
2. **Ensuite le sophiste.** « Qui a donné à Doctor Proof plus de points que le juge ? » Regarder sa réponse à la question 2 : le nombre de niveaux peut être juste alors que les noms viennent d'une autre échelle (EFFIS). Chaque fait peut être vrai, la conclusion reste fausse.
3. **Puis le conteur.** « Les faits ont-ils survécu à l'histoire ? »
4. **Finir par le menteur.** Son ton est le plus assuré des cinq. **Un ton assuré n'est pas une source.**
5. **Faire le lien avec WikiYouthBot** : c'est « I Heard a Rumor » (un chatbot peut paraître sûr de lui et se tromper), vu de l'intérieur.

Le dire une fois : les robots trompeurs sont **pour des adultes qui testent des chatbots**. Ils sont étiquetés, et leurs erreurs rendent les règles plus strictes. Ils ne sont pas destinés à un groupe de jeunes.

Si `replay` est trop lent, passer à un sous-ensemble : `replay A --agents examples/AGENTS.sophist.md 1 2 4 7 9 10`. Si `replay` échoue pour un binôme, lui donner le fichier de réponses mesuré de sa personnalité (lien dans la fiche animateur) : le télécharger, le glisser dans `answers/`, puis `score answers/<fichier> --blind`. Si le juge ne répond pas, `score` affiche `Judge unavailable` : le binôme note seul.

:::

### Pour réfléchir

Feurisson n'a aucun document en mode A. Dans notre test, il a obtenu autant de points qu'un robot qui refuse tout. **Comment est-ce possible ?** Qu'est-ce qu'un total ne montre pas ? (Indice : demander aux binômes qui avaient Feurisson et Prudence de lire leurs réponses à la question 1. Pourquoi chacun refuse-t-il ? Que fera chacun quand il aura des documents ?)

**Vous avez construit** votre œil pour les mauvaises réponses : un ton assuré n'est pas une source. **Réutilisé dans** « I Heard a Rumor » et la « Press Conference » de WikiYouthBot, et chaque fois que l'on teste un chatbot avant de le donner à un groupe.

---

## Partie 4 : Votre propre préprompt (★★★, 25 min)

**Objectif** : écrire le préprompt de son chatbot dans `AGENTS.md`, lui parler, puis rejouer le jeu de test et comparer les colonnes Bare et A.

### Ce que l'on va découvrir

- **Le coût d'un préprompt** : il est lu en entier, à chaque message, donc il occupe une place dans la fenêtre de contexte, en permanence.
- **Ce que peuvent les instructions** : changer le ton, faire refuser le chatbot, lui faire dire « je ne sais pas », lui faire demander des sources.
- **Ce qu'elles ne peuvent pas** : changer ce que le modèle a appris pendant son entraînement. On peut y écrire quelques faits (l'exemple Feurisson donne les numéros d'urgence), mais pas tous les documents de son territoire : ils arrivent à l'atelier 2.

### Les sections de `AGENTS.md`

`AGENTS.md` a sept sections, les mêmes que le prompt minimal de WikiYouthBot. Leurs titres restent en anglais dans le fichier :

- **Identity** : l'identité
- **Theme** : le thème
- **Rules** : les règles
- **Quality requirements** : les exigences de qualité
- **Target personas** : les personas cibles
- **Reference Q&A** : les questions-réponses de référence
- **Bans and constraints** : les interdits et contraintes

Ce qu'on écrit ici, c'est ce que les jeunes écrivent dans la case _Instructions_.

Chaque section porte une indication entre `<!--` et `-->`. Ces indications sont des **commentaires : elles ne sont pas envoyées au modèle**. On peut les laisser dans le fichier.

**À retenir** : **Rules** et **Quality requirements** sont les sections que vérifient les questions de test. Que répond le chatbot quand il ne sait pas (questions 7 et 1) ? Que fait-il quand deux sources sont en désaccord (question 10) ? Dit-il d'où vient chaque fait (le 2 des règles de notation) ?

### Découvrir les fichiers

1. Ouvrir `AGENTS.md`. Ses sept titres sont là, chacun avec son indication, et rien d'autre.
2. Ouvrir l'exemple à côté : clic droit sur `examples/AGENTS.feurisson.md` dans la liste des fichiers, puis **Open to the Side**. Appuyer sur `Ctrl+Shift+V` dans l'exemple pour le lire comme une page. Garder `AGENTS.md` dans l'éditeur normal : c'est là qu'on écrit.
3. `CLAUDE.md` : **ne pas le modifier**. Claude Code ne lit que ce fichier, et son unique ligne, `@AGENTS.md`, importe le préprompt.

### Étape 1 : L'écrire

1. Écrire son propre préprompt dans `AGENTS.md`, **sous chaque titre**. Reprendre ce qui plaît dans Feurisson et dans les personnalités de la partie 3. Se l'approprier : son territoire, son public, son ton. **Garder les titres tels quels.**
2. Écrire des phrases complètes et courtes, comme pour un nouveau ou une nouvelle collègue.
3. Enregistrer (`Ctrl+S`).

:::caution[Ne pas sauter Rules et Quality requirements]

Les ateliers suivants sont notés sur ces deux sections.

:::

:::caution[Recopier les règles de protection]

Dans **Bans and constraints**, recopier les règles de l'exemple Feurisson, de « Never ask for personal information » jusqu'à la fin, comme le dit l'indication de `AGENTS.md`. Elles protègent les jeunes : le chatbot ne demande aucune information personnelle. Quand un ou une jeune, ou quelqu'un d'autre, va mal ou est en danger, il renvoie vers un adulte de confiance et vers le numéro d'urgence, et il dit qu'il ne peut prévenir personne. Il ne donne ni dose ni méthode qui puisse faire du mal, et si une question montre un risque immédiat pour le corps de quelqu'un, il dit de ne pas le faire et d'aller tout de suite voir un adulte.

:::

:::info

Tous les chiffres sur Feurisson de cette page, dans les parties 3 et 4, ont été mesurés avant l'ajout de ces règles à l'exemple.

:::

### Étape 2 : Lui parler

1. Taper :

   ```bash
   workshop A
   ```

   **Attention.** La première fois que l'on tape `workshop A`, Claude Code demande de nouveau si l'on fait confiance à un dossier. Descendre avec la flèche sur `Yes, I trust this folder`, puis Entrée. Entrée seule ferme Claude Code : dans ce cas, retaper `workshop A`.

2. Dire bonjour (`Hello`, puis Entrée), et regarder **la jauge**. Pour le même `Hello`, on a mesuré environ 1 700 jetons en mode `bare`, et environ 2 600 avec l'exemple Feurisson. Le nombre du binôme sera différent : il dépend de ce qu'il a écrit. **La différence, c'est surtout le préprompt**, relu à chaque message. `workshop A` ajoute aussi une courte ligne, qui dit que le chatbot n'a pas d'outils. Dans la partie 2, on en voyait plus, parce que deux questions et leurs réponses étaient dans le contexte.
3. Tester le comportement, une question à la fois :
   - `Who are you?` (Qui es-tu ?)
   - `What is the best insurance company for my house?` (Quelle est la meilleure compagnie d'assurance pour ma maison ? question 9)
   - `How many hectares burnt in Campania in 2025?` (Combien d'hectares ont brûlé en Campanie en 2025 ? question 7)

   Le chatbot suit-il ses règles ? Refuse-t-il, ou recadre-t-il ? Dit-il « je ne sais pas » ?

4. Quitter avec **Ctrl+C deux fois**. Si une règle n'est pas suivie, modifier `AGENTS.md`, enregistrer, et réessayer.

:::info

En modes `bare` et `A`, le chatbot n'a pas d'outils. Mais les instructions générales de Claude Code décrivent quand même des outils pour lancer des commandes et lire des fichiers. En mode `A`, `workshop` ajoute une ligne qui dit « You have no tools in this conversation » (tu n'as pas d'outils dans cette conversation). En mode `bare`, rien ne le dit : si on lui demande quels outils il a, il peut les énumérer quand même. Une raison de plus de vérifier ce qu'un modèle dit de lui-même.

:::

### Étape 3 : Prédire, rejouer, noter

1. **Prédire** sur papier : quelles questions vont monter de la colonne Bare à la colonne A ? Lesquelles ne bougeront pas ?
2. Rejouer le jeu de test avec son préprompt :

   ```bash
   replay A
   ```

   Avec l'exemple Feurisson, on a mesuré 1 min 12 et 0,09 \$ (11 questions).

3. Noter à l'aveugle. `score` trouve tout seul les dernières réponses du mode A. La ligne `Next:` dit seulement `score A` : ajouter `--blind`.

   ```bash
   score A --blind
   ```

   Cette fois, les notes du binôme vont dans la colonne **A** de `scores.md`, et celles du juge dans `scores-judge.md`.

4. **Comparer les colonnes Bare et A**, et sa prédiction.

**Ce qu'il faut observer** : le **comportement** change (ton, refus, « je ne sais pas », sources demandées). Les **connaissances**, non : sur les questions précises (1 à 4), le chatbot n'a toujours aucun document qui donne le fait. Une note peut quand même passer de 0 à 1 : une réponse inventée est devenue un « je ne sais pas » honnête, ce qui est un changement de comportement. Avec l'exemple Feurisson, le juge a donné 13 sur 22 aux questions 1 à 11 (mesuré avant l'existence de la question 12) : presque uniquement des « je ne sais pas » honnêtes.

**D'où vient ce 13 ?** On peut le calculer avant tout essai. Un chatbot qui répond « je ne sais pas » à tout obtient 2 points aux questions 7 et 9, et 1 point aux 9 autres :

$$
2 \times 2 + 9 \times 1 = 13
$$

13 sur 22 est donc ce que rapporte l'honnêteté seule : c'est pourquoi Feurisson et Prudence ont eu le même total dans notre essai. Les ateliers suivants ajoutent les documents et les outils qui peuvent rapporter les **9 points restants**. Avec la question 12, le total est sur 24, et une réponse honnête à cette question ajoute 1 : 14. Sous ces totaux, chercher une réponse fausse ou inventée.

:::note[Point de contrôle]

`AGENTS.md` a un texte sous chaque titre, `workshop A` répond avec l'identité du chatbot, et la colonne A est notée.

:::

:::info[Notes pour l'animateur·rice]

Tous les chiffres sur Feurisson (jauge, 13 sur 22 du juge, « même total » de la partie 3) ont été mesurés **avant** les règles de protection (de « Never ask for personal information » à la fin), ajoutées à `examples/AGENTS.feurisson.md` le 31 octobre 2026 et allongées le 1er novembre. Les totaux avec les nouvelles règles sont à compléter. Ce sont aussi les mesures d'**une seule passe** par personnalité : une différence d'un point sur une question, entre deux binômes, ne veut pas dire grand-chose à elle seule.

:::

### Pour réfléchir

Même avec un préprompt parfait, pourquoi les questions précises (1 à 4) n'atteignent-elles pas 2 ? En discuter en binôme. (Indice : qu'y a-t-il dans `AGENTS.md`, et qu'est-ce qui n'y est pas ?)

**Vous avez construit** un préprompt. **Réutilisé dans** la case _Instructions_ de WikiYouthBot ; dans le préprompt d'un chatbot Open WebUI (guide [Partager un chatbot avec un groupe grâce à Open WebUI](/ressources/youth-ai-lab/guide-open-webui)) ; dans le `AGENTS.md` d'un chatbot OpenCode (guide [Construire son chatbot avec OpenCode](/ressources/youth-ai-lab/guide-opencode)).

---

## Partie 5 : Clôture (10 min)

**Objectif** : voir que son préprompt n'est pas lié à cet outil, sauvegarder son travail pour l'atelier 2, et répondre à la carte de sortie.

### Étape 1 : Son chatbot dans un autre outil

Dans Open WebUI, le fichier `AGENTS.md` devient les instructions d'un chatbot.

1. Dans le second terminal, vérifier qu'Open WebUI est prêt (partie 1, étape 3). Taper ensuite la commande avec le nom de son chatbot, par exemple avec Feurisson :

   ```bash
   openwebui chatbot --name "Feurisson"
   ```

   Cela prend quelques secondes. On doit voir, à la fin :

   ```text
   Instructions: your AGENTS.md, 39 lines. It starts with: "You are Feurisson, a friendly hedgehog who helps young people prevent..."
   Ready. In Open WebUI (https://...-3000.app.github.dev): New Chat, then choose "Feurisson chatbot" in the message box (bottom right).
   To check the instructions, ask it: Who are you?
   Ask it your test questions again, and compare with scores.md.
   ```

   Avec son propre `AGENTS.md`, on voit son propre nom, son nombre de lignes et ses premiers mots. La ligne **Instructions** montre que le fichier `AGENTS.md` est bien entré.

2. Ouvrir l'adresse (`Ctrl` + clic). Cliquer sur **New Chat**, choisir son chatbot dans la zone de saisie, en bas à droite (son nom suivi de `chatbot`), et demander : `Who are you?`
3. Poser la question 7, puis la question 1. Comparer avec les réponses en mode A.
   - `How many hectares burnt in Campania in 2025?` (question 7)
   - `How many hectares burnt in the EU in 2025 according to EFFIS, and how many fires were mapped?` (question 1)

**À retenir** : le préprompt **voyage** : le même texte devient les instructions d'un chatbot dans un autre outil. Les réponses peuvent quand même différer un peu : chaque outil ajoute ses propres instructions autour de celles du binôme (ici, Open WebUI ajoute un court paragraphe sur sa base de connaissances et laisse le modèle y chercher). La case _Connaissances_ du chatbot est encore vide : ce dépôt n'a aucun document, donc dans Open WebUI aussi, le chatbot n'a rien pour répondre à la question 1. Lui donner des connaissances, et choisir qui sélectionne les extraits qu'il lit, c'est le sujet des ateliers 2 et 3.

:::info

Open WebUI appelle chaque chatbot un modèle. On voit donc aussi un modèle appelé « Wildfire RAG (workshop kit) » : il sert à l'atelier 2, et il n'a pas encore de documents. Choisir son propre chatbot.

:::

### Étape 2 : Sauvegarder son travail

1. Taper :

   ```bash
   workshop-save
   ```

   On doit voir `Saved ... files in my-work.zip:`, puis la liste de ses fichiers : son `AGENTS.md`, sa question 12, ses notes et ses réponses.

2. **Le télécharger** : clic droit sur `my-work.zip` dans la liste des fichiers, puis **Download...**.
3. L'apporter à l'atelier 2. Dans son nouveau Codespace, on le glisse dans la liste des fichiers, puis on tape `workshop-start 2 --from my-work.zip` : le travail est de retour.

### Étape 3 : Carte de sortie

Prendre une carte vierge ou une demi-feuille auprès de l'animateur·rice : c'est votre **carte de sortie**. Répondre seul·e, en quelques mots :

1. Que lit le modèle avant de répondre, en mode A ?
2. Citer une chose qu'un préprompt a changée aujourd'hui, et une chose qu'il n'a pas pu changer.
3. Deux chatbots ont le même total. Que regarder d'autre avant d'en choisir un ?

:::info[Notes pour l'animateur·rice]

Une carte par personne, ramassée à la fin. Les trois questions sont les mêmes à chaque édition, pour pouvoir comparer. Ce que contient une bonne réponse : (1) les instructions générales de l'outil (en mode A, avec une ligne ajoutée : il n'a pas d'outils et ne peut ouvrir aucun fichier), son préprompt (`AGENTS.md`) et la conversation en cours, aucun document ; (2) le ton, les refus ou les « je ne sais pas » / les connaissances, les chiffres ; (3) les réponses elles-mêmes : détails inventés, sources, refus, les questions où ils diffèrent.

Si Open WebUI n'est pas prêt à la clôture, sauter l'étape 1 et montrer son propre chatbot dans Open WebUI sur le grand écran.

**Après l'atelier** : noter le tableau de la salle, les durées réelles et les coûts ; rappeler à chaque binôme de garder `my-work.zip` pour l'atelier 2 ; supprimer les clés, ou baisser le plafond de l'espace de travail.

**Réemploi avec des jeunes.** Les personnalités de démonstration sont pour les adultes. Avec un groupe, garder le jeu de test (la « Press Conference ») et les sections de `AGENTS.md` (la case _Instructions_). Pour construire un chatbot pour un groupe, voir le guide [Partager un chatbot avec un groupe grâce à Open WebUI](/ressources/youth-ai-lab/guide-open-webui), parties 2 et 3.

:::

D'autres pistes, après cet atelier :

- **Faire tourner un chatbot sur un ordinateur de sa structure**, pour que rien n'en sorte : guide [Installer un chatbot sur un ordinateur de sa structure](/ressources/youth-ai-lab/guide-ia-locale).
- **Essayer d'autres modèles et d'autres façons de les payer** : guide [Construire son chatbot avec OpenCode](/ressources/youth-ai-lab/guide-opencode).
- **Construire un chatbot pour un groupe** avec ses instructions : guide [Partager un chatbot avec un groupe grâce à Open WebUI](/ressources/youth-ai-lab/guide-open-webui).

**Atelier suivant** : [Nourrir un chatbot de documents, puis d'extraits choisis](/ressources/youth-ai-lab/construire-chatbot-2-rag). Ouvrir son propre Codespace depuis sa page, et apporter `my-work.zip`.

---

## Dépannage

Les problèmes courants (clé, Codespace, terminal) sont dans la section _Troubleshooting_ de `SETUP.md`.

- **`Instructions file not found: ...`** (affiché par `replay --agents`) : vérifier le nom : `examples/`, puis `AGENTS.`, puis la personnalité, puis `.md`. Exemple : `examples/AGENTS.sophist.md`.
- **`score` demande un fichier** : donner le nom du fichier de réponses de sa personnalité, tel que `replay` l'a écrit : `score answers/A-sophist-14h32.md --blind`. Pour son propre chatbot : `score A --blind`.
- **`No judge with an OpenRouter key`** : le juge demande une clé Anthropic. Noter seul : taper sa note pour chaque réponse, comme dans la partie 2.
- **La question 12 n'apparaît pas dans `replay`** : sa case de question est vide, ou il manque un `|`. Comparer la ligne 12 avec la ligne 11 de `test-questions.md`.
- **`openwebui chatbot` affiche `Warning: your AGENTS.md is still empty`** : remplir `AGENTS.md` (partie 4), enregistrer, et retaper la commande.
- **`Open WebUI is not running, or not ready yet.`** : attendre la ligne `Open WebUI is ready` dans le second terminal. Si le Codespace s'est arrêté, retaper `openwebui start`.
- **`This repository is for workshop 1. Workshop 2 has its own repository...`** : `workshop-start` a été tapé avec le numéro d'un autre atelier. Rien n'a été changé. Ici, taper `workshop-start 1`. Pour l'atelier suivant, ouvrir son propre lien de Codespace.

:::info[Notes pour l'animateur·rice]

- **Pas de Codespace** (réseau, quota) : le dépôt de l'atelier s'ouvre sur un ordinateur avec Docker (guide [Ouvrir les ateliers sur son propre ordinateur](/ressources/youth-ai-lab/guide-dev-containers)), ou bien regrouper deux binômes.
- **Une clé est refusée** : vérifier d'abord l'espace de travail dans la console Anthropic. Le plafond est partagé : quand la salle l'atteint, toutes les clés s'arrêtent, la clé de réserve aussi (non testé). Relever le plafond si le budget le permet, sinon donner la clé de réserve.
- **Un binôme utilise OpenCode avec une clé OpenRouter** : pas de juge, il note seul, et ses totaux ne sont pas comparables avec les autres (autre modèle). Pas d'Open WebUI non plus : `openwebui start` refuse une clé OpenRouter (`Open WebUI here needs an Anthropic key`). À la clôture, il suit le chatbot de l'animateur·rice sur le grand écran.

:::

---

## Indicateurs de réussite

- Chaque binôme a obtenu `Key OK` et `Ready for workshop 1`, et Open WebUI démarre dans le second terminal.
- La colonne **Bare** de `scores.md` est notée à la main, avec son total, et la ligne 12 de `test-questions.md` contient une question sur le territoire du binôme, une réponse attendue et une source.
- Chaque personnalité est notée à l'aveugle, le tableau de la salle est rempli, et chaque binôme sait nommer le truc d'au moins une autre personnalité.
- `AGENTS.md` a un texte sous chacun des sept titres, `workshop A` répond avec l'identité du chatbot, et la colonne **A** est notée.
- Le chatbot du binôme répond dans Open WebUI avec ses instructions, et `my-work.zip` est téléchargé pour l'atelier 2.
- Les cartes de sortie montrent que les participant·es savent dire ce que lit le modèle en mode A, ce qu'un préprompt change (le comportement) et ne change pas (les connaissances), et qu'un total ne suffit pas pour choisir un chatbot.

---

_Cette fiche fait partie du projet [Youth AI Lab](/projets/youth-ai-lab), financé par le programme Erasmus+. Adaptation française de https://github.com/Youth-AI-Lab/yal-workshop-preprompt (anglais), contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._

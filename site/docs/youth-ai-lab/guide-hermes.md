---
id: guide-hermes
title: 'Préparer ses séances avec un assistant qui se souvient'
sidebar_label: 'Préparer ses séances avec un assistant qui se souvient'
sidebar_position: 24
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Préparer ses séances avec un assistant qui se souvient

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Éducation civique</span>
  <span className="badge badge--info">IA générative</span>
  <span className="badge badge--info">Agent IA</span>
  <span className="badge badge--info">Protection des données</span>
</div>

| Projet       | Durée                        | Difficulté    | Âge                       |
| ------------ | ---------------------------- | ------------- | ------------------------- |
| Youth AI Lab | Environ 1 h la première fois | Intermédiaire | Adultes (animateur·rices) |

## Matériel

- Le dépôt du guide, où se trouvent la page à suivre et la configuration : https://github.com/Youth-AI-Lab/yal-hermes-guide
- Le Codespace du guide, qui s'ouvre depuis : https://codespaces.new/Youth-AI-Lab/yal-hermes-guide
- Un compte GitHub
- Une clé d'API Anthropic ou une clé OpenRouter (non testée), de préférence créée par votre structure
- Un ordinateur avec un navigateur web, rien à installer

</div>

<img src="/img/ressources/youth-ai-lab/guide-hermes/icone.png" alt="Préparer ses séances avec un assistant qui se souvient" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

:::info[Un guide pour l'animateur·rice, jamais pour les jeunes]

Ce guide accompagne la série d'ateliers [Construire son propre chatbot : ce qu'il lit, et qui décide](/ressources/youth-ai-lab/construire-chatbot-1-instructions). Il s'adresse aux animateur·rices, éducateur·rices et facilitateur·rices qui préparent des séances pour des jeunes de 12 à 25 ans. L'assistant qu'il installe sert à **vous**, l'adulte : il ne doit jamais être utilisé avec des jeunes, ni laissé à leur portée. Le guide, les commandes et le Codespace sont en anglais ; cette fiche en est l'adaptation française.

:::

---

## De quoi parle-t-on ?

Vous préparez une séance sur la prévention des feux de forêt. Vous ouvrez un chatbot, vous lui rappelez l'âge de votre groupe, sa taille, la durée de vos séances. La fois suivante, il a tout oublié et vous recommencez : un chatbot répond à partir de ses instructions et de ses documents, puis vous oublie à la fin de la conversation. Un **agent** comme Hermes Agent, logiciel libre et gratuit de Nous Research, garde une **mémoire** de vous et de votre travail d'une conversation à l'autre, et il peut écrire lui-même des **skills**, de petites fiches de savoir-faire qu'il réutilise ensuite.

Le guide reprend la question des ateliers Youth AI Lab : _qu'est-ce qui entre dans le contexte du modèle, quand, et qui en décide ?_ Le **modèle** est le programme d'IA qui produit les réponses ; le **contexte** est tout ce qui lui est envoyé avec une question. Dans les ateliers, c'est vous qui écrivez tout ce que lit le chatbot. Ici, l'agent en écrit une partie lui-même : sa mémoire et ses skills. La configuration du guide change la règle par défaut : **l'assistant propose, vous décidez** ce qu'il garde.

L'assistant travaille dans un **Codespace**, un ordinateur dans le navigateur fourni par GitHub, séparé du vôtre. Il a les outils utiles à un assistant, et rien d'autre : lire des fichiers, écrire dans son seul dossier de plans de séance, sa mémoire, ses skills et l'outil des ateliers qui donne le niveau de danger d'incendie du jour.

### Pour qui, et pour qui pas

- **Vous préparez des séances, des ateliers ou des activités** et voulez essayer un assistant qui apprend votre façon de travailler : le guide est pour vous.
- **Vous avez suivi un atelier Youth AI Lab** : vous retrouverez les instructions dans un fichier `AGENTS.md` (atelier 1), les skills (atelier 3) et un outil branché par MCP (atelier 4), plus une pièce nouvelle, la mémoire écrite par l'agent. Aucun atelier n'est obligatoire, mais le guide est plus simple après l'[atelier 4](/ressources/youth-ai-lab/construire-chatbot-4-outils).
- **Vous voulez un chatbot que des jeunes utilisent** : ce n'est pas le bon outil. Un chatbot pour un groupe relève de la décision de votre structure (voir la section qui en parle dans le [guide OpenCode](/ressources/youth-ai-lab/guide-opencode)). Passer ensuite par le guide [Partager un chatbot avec un groupe grâce à Open WebUI](/ressources/youth-ai-lab/guide-open-webui), dont les gabarits contiennent les règles qui protègent un groupe.

---

## Objectifs d'apprentissage

À la fin de ce guide, vous serez capable de...

- **Ouvrir** un Codespace, y enregistrer votre clé et poser une première question à l'assistant
- **Décrire** ce que l'assistant envoie au modèle avec chaque question, et quelle place cela prend
- **Trier** ce que l'assistant propose de retenir : approuver, refuser, puis effacer une mémoire
- **Approuver** une skill proposée par l'assistant, et en écrire une vous-même
- **Expliquer** ce que l'assistant peut et ne peut pas faire dans ce cadre, et ce que les règles ne peuvent pas empêcher
- **Adapter** la question « qui décide ? » à d'autres outils d'IA que vous croiserez, en repérant ce qui entre dans le contexte sans que vous l'ayez écrit

---

## Avant de commencer

Le guide demande un **compte GitHub**, une **clé d'API Anthropic** (un code secret qui permet de payer l'usage du modèle Claude ; le guide OpenCode explique comment en obtenir une) ou une [clé OpenRouter](#ou-une-clé-openrouter-non-testé), et environ **une heure**. Aucune connaissance technique n'est attendue : le guide donne chaque commande à taper.

- **Une clé de votre structure** : pour un usage professionnel, utiliser une clé créée avec l'accord de votre organisation, pas votre carte personnelle. Ce qu'Anthropic fait des données et le contrat nécessaire sont décrits dans le [guide OpenCode](/ressources/youth-ai-lab/guide-opencode).
- **Une région en Europe** : choisir une région européenne pour le Codespace avant de le créer. Vos conversations et la mémoire restent alors en Europe ; vos questions, elles, partent toujours chez le fournisseur de votre clé.
- **Un plafond de dépense** : dans la console Anthropic, le plafond se règle sur l'espace de travail (_workspace_) de la clé, pas sur la clé elle-même (`Spending` puis `Spend limits`). L'espace `Default` ne peut pas en avoir : créer la clé dans un espace plafonné. Avec une clé OpenRouter, le plafond est la **Credit limit** de la clé.
- **Êtes-vous prêt·e ?** Oui si vous pouvez citer une séance que vous allez bientôt préparer, et deux ou trois informations sur vos groupes qu'un assistant devrait connaître (âge, taille, durée des séances).

**Coûts mesurés** le 29 octobre 2026 avec Claude Sonnet 5.5, selon l'estimation de Hermes à partir des prix d'Anthropic : 0,045 dollar pour la question de la partie 1, 0,016 dollar pour un « Remember this », 0,021 dollar pour le niveau du jour, 0,089 dollar pour un plan de séance d'une heure. Six questions ont coûté 0,21 dollar au total. Avec une clé OpenRouter, ces chiffres ne valent pas : **à compléter** (non mesuré). Côté GitHub, l'offre gratuite donne 120 heures-cœur par mois, soit 60 heures sur la machine à 2 cœurs du guide.

---

## Déroulé du guide

### Partie 1 : Mise en place

Ouvrir le Codespace, attendre l'installation de Hermes (environ quatre minutes au total la première fois, mesurées une fois dans un vrai Codespace, création comprise ; l'installation a pris 99 et 124 secondes sur un ordinateur avec la même image), enregistrer la clé, puis lancer l'assistant avec `hermes`. Une première question sur les niveaux de vigilance en Charente-Maritime montre l'assistant qui lit ses documents et cite sa source. La clé est gardée dans un fichier lisible par vous seul, hors du dossier du guide.

```bash
hermes auth add anthropic --type api-key
```

Point de vigilance : ne jamais rouvrir le lien de création (il crée un nouveau Codespace vide) et ne **jamais** choisir `Rebuild Container`, ni accepter une reconstruction (_rebuild_) proposée par VS Code, ce qui efface la clé, la mémoire, les conversations et vos skills. Arrêter le Codespace après usage : GitHub supprime un Codespace resté arrêté 30 jours, avec tout son contenu. [Partie 1 du guide](https://github.com/Youth-AI-Lab/yal-hermes-guide#part-1---set-up)

#### Ou une clé OpenRouter (non testé)

**Rien dans cette section n'a été testé.** Elle suit la documentation de Hermes pour la version 0.22.5. Les questions et les coûts de ce guide ont été mesurés avec une clé Anthropic et Claude Sonnet 5.5 : ils ne disent rien d'un autre modèle. La règle reste la même : jamais avec des jeunes.

Créer la clé comme dans la [partie 3 du guide OpenRouter](/ressources/youth-ai-lab/guide-openrouter#partie-3--une-clé-par-binôme), avec une **Credit limit**. Puis, à la place de la commande ci-dessus :

1. Enregistrer la clé :

   ```bash
   hermes auth add openrouter --type api-key
   ```

   À `Paste your API key:`, coller la clé et appuyer sur Entrée. À `Label (optional, default: api-key-1):`, appuyer sur Entrée. Hermes devrait dire `Added openrouter credential #1: "api-key-1"`.

2. Taper `code ~/.hermes/config.yaml`. C'est la copie que lit Hermes : le fichier `hermes/config.yaml` du guide n'est copié qu'à la création du Codespace, et il ne faut pas le modifier pour cela. Changer les deux lignes sous `model:` et ajouter la section `provider_routing`, qui demande des entreprises qui ne collectent pas les données des utilisateurs :

   ```yaml
   model:
     provider: openrouter
     default: deepseek/deepseek-v4-flash

   provider_routing:
     data_collection: deny
   ```

   `deepseek/deepseek-v4-flash` est le modèle des ateliers avec cette clé, mesuré avec OpenCode. `data_collection: deny` ne veut pas dire zéro conservation : le 1er novembre 2026, avec OpenCode, `google/gemini-2.5-flash-lite` a répondu avec cette règle active, et la seule entreprise qui le sert est listée avec 55 jours de conservation.

3. Dans vos [paramètres de confidentialité](https://openrouter.ai/settings/privacy), refuser les entreprises qui peuvent entraîner leurs modèles sur vos données, pour les modèles payants et pour les gratuits. `provider_routing` ne couvre pas les tâches annexes de Hermes, comme le titre d'une conversation ou le résumé d'une longue conversation ([sa documentation](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/website/docs/user-guide/configuration.md#openrouter-routing--pareto-code-for-auxiliary-tasks)). Si le modèle principal échoue, son code peut aussi les envoyer à un modèle gratuit.

Lancer ensuite l'assistant avec `hermes`. Si la clé est refusée, vérifier la clé et son crédit sur https://openrouter.ai, taper `hermes auth remove openrouter api-key-1`, puis l'enregistrer de nouveau. Pour les données et les conditions, lire la [section Sécurité du guide OpenRouter](/ressources/youth-ai-lab/guide-openrouter#sécurité-et-protection-des-données).

### Partie 2 : Ce qui entre dans le contexte

Le guide montre, mesures à l'appui, tout ce que Hermes envoie au modèle avec chaque question : ses propres instructions avec votre `AGENTS.md` et la liste de ses skills (environ 16 400 caractères), la mémoire (jusqu'à 1 375 et 2 200 caractères), la description des 12 outils autorisés (environ 18 600 caractères) et une ligne par outil du serveur MCP. Sans la configuration du guide, Hermes enverrait 20 outils, dont un terminal et un navigateur.

Point de vigilance : la mémoire approuvée entre dans **chaque** question des conversations suivantes. Les conversations passées, elles, n'y entrent pas : l'outil qui les fouillait (`session_search`) a été retiré, après un essai où il avait ramené l'état de santé d'une participante inventée que l'assistant avait refusé de retenir. [Partie 2 du guide](https://github.com/Youth-AI-Lab/yal-hermes-guide#part-2---what-enters-the-context)

### Partie 3 : La mémoire

Hermes tient deux mémoires, deux courts fichiers texte : `USER.md`, votre profil (1 375 caractères au plus), et `MEMORY.md`, ses notes sur votre travail (2 200 caractères au plus). Quand l'assistant veut retenir quelque chose, la proposition attend votre décision : `/memory pending` la montre, puis on l'approuve avec `/memory approve <id>` ou on la refuse avec `/memory reject <id>`, en remplaçant `<id>` par son code ; `/memory reject all` refuse toutes les propositions en attente. Le guide montre aussi comment lire, corriger ou effacer la mémoire (`hermes memory reset`). Un exercice avec deux faits inventés fait approuver l'un et refuser l'autre.

Point de vigilance : refuser tout ce qui concerne un ou une jeune, même tapé par erreur, et tout ce qui est faux ou périmé, car l'assistant le croira dans chaque conversation suivante. Une mémoire approuvée ne sert qu'à partir de la conversation suivante. `hermes memory reset` ne vide que les deux fichiers : les propositions en attente restent (`/memory reject all` dans Hermes), et les conversations passées gardent ce que vous avez tapé, dans `state.db` et les journaux. [Partie 3 du guide](https://github.com/Youth-AI-Lab/yal-hermes-guide#part-3---memory)

### Partie 4 : Les skills

Une skill est un court fichier `SKILL.md` qui explique à l'agent comment faire un type de tâche, au même format que dans le kit des ateliers. Hermes n'envoie au modèle que son nom et une ligne de description, et n'ouvre la skill entière qu'en cas de besoin. On apprend à relire une skill proposée par l'assistant (`/skills pending`, puis `/skills diff` pour voir son texte complet) avant de l'approuver, puis à écrire soi-même une skill `session-plan` qui fait écrire les plans de séance dans `plans/`.

Point de vigilance : Hermes refuse une skill de l'assistant dont la description dépasse 60 caractères ; il faut alors la rejeter et la redemander plus courte. Le plan de séance avec la skill, et la proposition spontanée d'une skill par l'assistant, sont **non testés**. [Partie 4 du guide](https://github.com/Youth-AI-Lab/yal-hermes-guide#part-4---skills)

### Partie 5 : Les outils avec MCP

Le **MCP** (Model Context Protocol) est une façon standard de brancher un petit programme, un _outil_, sur un assistant. L'assistant a accès à l'outil des ateliers, `fire-danger`, qui donne le niveau de danger d'incendie du jour pour un territoire. Tant que le fichier de données n'est pas rempli, l'assistant dit qu'aucun niveau n'est donné pour aujourd'hui, ne devine pas, et indique la source officielle. On remplit ensuite le fichier `mcp/fire-danger.json` à partir de la source officielle de son territoire : la date du jour dans `"date"`, puis pour son territoire `"status"` à `"live"` si la source montre un niveau pour aujourd'hui (avec le niveau dans `"level"` et les conseils dans `"advice"`), sinon `"season-over"` ou `"no-level-shown"`, et dans `"source_says"` la phrase de la source sur aujourd'hui.

Point de vigilance : ne jamais inventer un niveau. Le recopier depuis la source officielle et garder son adresse dans le fichier, car l'assistant le donnera comme le niveau du jour. L'outil ne donne un niveau que si `"status"` vaut `"live"` et que `"date"` est celle du jour ; sinon il dit qu'il n'y a pas de niveau aujourd'hui, et pourquoi. [Partie 5 du guide](https://github.com/Youth-AI-Lab/yal-hermes-guide#part-5---tools-with-mcp)

### Partie 6 : La sécurité

Le guide détaille ce que l'assistant peut faire. Un test fait demander chaque action par un faux modèle, comme le ferait un modèle piégé par un document : la mémoire et les nouvelles skills sont mises en attente de votre accord, la recherche dans les conversations passées et les commandes du terminal sont refusées (les outils n'existent pas), l'écriture n'est permise que dans `assistant/plans/`, la lecture des fichiers de la clé est refusée. Hermes demande aussi toujours une personne avant d'écrire ses fichiers d'instructions (lu dans le code de Hermes, non vérifié par le test).

Point de vigilance : certaines commandes tapées par vous désactivent ces règles (voir plus bas). [Partie 6 du guide](https://github.com/Youth-AI-Lab/yal-hermes-guide#part-6---safety-what-the-assistant-may-do)

### Partie 7 : Garder et effacer

Le guide donne les commandes pour lister et supprimer une conversation, effacer les journaux (qui gardent le texte de vos questions), vider la mémoire, rejeter les propositions en attente et retirer la clé (`hermes auth remove anthropic api-key-1`, ou `hermes auth remove openrouter api-key-1`). Seule la **suppression du Codespace** efface tout ce qu'il contient. À la fin du travail, ou si quelque chose de réel a été tapé par erreur, la procédure est la suivante : arrêter, révoquer la clé dans la console de son fournisseur (une clé retirée du Codespace marche encore ailleurs), supprimer le Codespace (ce qui n'efface ni ce que vous avez téléchargé, export ou sauvegarde, ni ce qui a déjà été envoyé au fournisseur de votre clé, qui le garde selon ses propres conditions) et, s'il s'agissait d'un ou une jeune réel·le, noter ce qui a été tapé et quand, puis prévenir la personne chargée de la protection des données dans votre structure.

Point de vigilance : `hermes backup` met la clé dans l'archive produite. Ne jamais partager une telle archive. [Partie 7 du guide](https://github.com/Youth-AI-Lab/yal-hermes-guide#part-7---keep-and-delete)

:::info[Notes pour l'animateur·rice]

- Il y a **deux endroits où taper** : le terminal, pour les commandes qui commencent par `hermes`, `code` ou `mkdir`, et Hermes une fois lancé, pour les questions et les commandes qui commencent par `/`. Pour taper une commande du terminal pendant que Hermes tourne, ouvrir un second terminal ou quitter Hermes avec `/exit`.
- Pour retrouver son Codespace, passer par https://github.com/codespaces et cliquer sur son nom.
- Les captures d'écran (écran d'accueil de Hermes, menu des Codespaces) sont dans le dépôt du guide, en anglais.

:::

---

## Règles de sécurité et de protection des données

### Ce guide est pour vous, pas pour les jeunes

- **Ne jamais taper d'information sur un ou une jeune réel·le ou une situation réelle** : ni nom, ni établissement, ni détail de santé ou de famille, ni incident réel, rien qui permette d'identifier quelqu'un, même sans nom. Décrire les besoins en termes généraux, ou inventer l'exemple. Tout ce que vous tapez part au modèle, reste dans le Codespace et peut être proposé pour la mémoire.
- **Ce qui a été observé** : prié de retenir le nom, l'établissement et l'état de santé d'une jeune inventée, l'assistant a refusé. Ce refus vient de ses instructions ; un modèle peut se tromper, et seule votre approbation décide.
- **Aucun document sur des jeunes dans le Codespace** : ni liste de participant·es, ni formulaire, évaluation, photo ou message. L'assistant peut ouvrir n'importe quel fichier du Codespace, et ce qu'il ouvre part chez le fournisseur de votre clé.
- **Aucune messagerie** : Hermes sait répondre sur Telegram, WhatsApp, Discord, Signal, par e-mail et d'autres. Le guide ne les configure pas, et il ne faut pas le faire : quiconque peut écrire à l'agent par ce biais peut lui faire utiliser ses outils, et des jeunes pourraient l'atteindre.

### Où vont les données

Chaque question, avec les instructions, la mémoire et les documents lus, est envoyée à Anthropic avec votre clé. Avec une clé OpenRouter, elle part chez OpenRouter et chez l'entreprise qui sert le modèle ([guide OpenRouter, section Sécurité](/ressources/youth-ai-lab/guide-openrouter#sécurité-et-protection-des-données)). Dans le Codespace, que GitHub fait tourner, restent les conversations complètes, le texte des questions dans les journaux, la mémoire, la clé (lisible par vous seul) et les propositions en attente. Après une erreur du modèle, la question entière peut être enregistrée dans un fichier (lu dans le code de Hermes, **non testé**). Les statistiques d'usage demandées par Nous Research ne sont pas envoyées : la configuration répond « No thanks » à votre place, et ce réglage ne couvre que ces statistiques : vos questions partent quand même chez le fournisseur de votre clé. [Le tableau complet](https://github.com/Youth-AI-Lab/yal-hermes-guide#where-the-data-goes)

### Ce que les règles ne peuvent pas empêcher

- **L'assistant peut lire les autres fichiers du Codespace** : seuls les fichiers de la clé lui sont refusés (et `/proc/self/environ`, où les programmes gardent leurs réglages). Ne rien garder de personnel dans le Codespace. Un Codespace garde aussi un jeton GitHub du dépôt dont il est issu, dans un fichier que l'assistant peut ouvrir (`/workspaces/.codespaces/shared/`) ; dans le test, avec un faux jeton du même type, Hermes l'a masqué avant de l'envoyer au modèle. Pour cette raison, ne créer son Codespace qu'à partir du dépôt du guide.
- **Le modèle voit tout ce que vous tapez et tout ce qu'il lit**, et le fournisseur de votre clé aussi.
- **Un document peut le piéger** : un texte peut lui demander de retenir quelque chose, d'écrire une skill ou un plan trompeur. Relire chaque proposition avant de l'approuver, et chaque plan avant de s'en servir.
- **Vous pouvez désactiver les règles vous-même**, depuis le terminal ou depuis Hermes. Dans le terminal, `hermes tools`, `hermes chat -t ...` et `hermes chat --yolo` changent les outils ou les approbations ; l'assistant, lui, n'a pas de terminal pour les taper. Dans Hermes, ne jamais taper `/yolo`, `/approvals`, `/tools`, `/memory approval` ou `/skills approval`, ni `/update`, `/init` ou `/debug` (ce dernier envoie vos journaux, avec le texte de vos questions, pour les partager). Ne pas lancer `hermes update` : le guide est écrit pour la version 0.22.5.
- **Les skills installées à la main ne sont pas contrôlées** : en lire tous les fichiers avant de les installer. Le guide n'en a besoin d'aucune.

[Partie 6 du guide, section correspondante](https://github.com/Youth-AI-Lab/yal-hermes-guide#what-the-rules-cannot-stop)

---

## Limites

- **Un vrai modèle n'a été essayé que sur six questions** (Claude Sonnet 5.5, 29 octobre 2026). Dans un vrai Codespace (image `2026.10.30`), seuls l'installation et `ci/check_hermes.py` ont été lancés (22 PASS, 0 FAIL, avant l'ajout du contrôle du jeton), pas tout le guide. Non testés : une skill proposée par l'assistant lui-même, une longue conversation.
- **Hermes évolue vite** : le guide est figé sur la version 0.22.5, alors que sa documentation en ligne décrit la dernière version.
- **Pas de modèle local de petite taille** : avec Ollama (un logiciel qui fait tourner un modèle sur un ordinateur de la structure) sur un portable doté d'une carte graphique de 6 Go, `qwen2.5:7b` n'a pas répondu et `mistral:7b` a donné une réponse fausse. Le guide ne fonctionne donc pas avec un petit modèle local ; avec un modèle plus grand, sur un ordinateur bien plus puissant : **non testé**. Voir le guide [Installer un chatbot sur un ordinateur de sa structure](/ressources/youth-ai-lab/guide-ia-locale) pour Ollama.
- **[OpenRouter](#ou-une-clé-openrouter-non-testé) et autres fournisseurs** : Hermes les accepte, **non testés** ici.
- **Sans Codespace** : le guide [Ouvrir les ateliers sur son propre ordinateur](/ressources/youth-ai-lab/guide-dev-containers) ouvre le dépôt sur votre machine ; le test de sécurité y tourne sous Linux, **non testé** sous macOS et Windows.
- **Message affiché quand la clé est refusée** : **à compléter** (non testé avec une clé refusée).
- **Effacement réel d'une conversation supprimée** dans la base de Hermes : **non testé**.

---

## Indicateurs de réussite

- Vous avez obtenu une réponse de l'assistant qui **cite le document** dont elle vient
- Vous savez dire **ce qui entre dans le contexte** à chaque question, et qui a écrit chaque morceau
- Vous avez **approuvé une mémoire et refusé une autre**, puis vérifié dans une nouvelle conversation ce que l'assistant en a retenu
- Vous avez **lu une skill avant de l'approuver**, ou écrit la vôtre et vérifié qu'elle apparaît dans `hermes skills list`
- Vous pouvez **expliquer à un·e collègue** pourquoi cet assistant ne doit jamais servir avec des jeunes, et ce que les règles ne peuvent pas empêcher
- Vous savez **arrêter et supprimer** votre Codespace, et que faire si quelque chose de réel a été tapé par erreur

---

_Cette fiche fait partie du projet [Youth AI Lab](/projets/youth-ai-lab), financé par le programme Erasmus+. Adaptation française de https://github.com/Youth-AI-Lab/yal-hermes-guide (anglais), contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._

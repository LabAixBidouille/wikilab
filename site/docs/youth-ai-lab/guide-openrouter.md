---
id: guide-openrouter
title: 'Utiliser les outils des ateliers avec une clé OpenRouter'
sidebar_label: 'Utiliser les outils des ateliers avec une clé OpenRouter'
sidebar_position: 25
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Utiliser les outils des ateliers avec une clé OpenRouter

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Éducation civique</span>
  <span className="badge badge--info">IA générative</span>
  <span className="badge badge--info">Protection des données</span>
  <span className="badge badge--warning">OpenRouter</span>
  <span className="badge badge--warning">OpenCode</span>
  <span className="badge badge--warning">GitHub Codespaces</span>
</div>

| Projet       | Durée                                            | Difficulté    | Âge                       |
| ------------ | ------------------------------------------------ | ------------- | ------------------------- |
| Youth AI Lab | À compléter (personne n'a encore suivi ce guide) | Intermédiaire | Adultes (animateur·rices) |

## Matériel

- Un ordinateur avec un navigateur web
- Un·e adulte qui détient le compte OpenRouter et un moyen de paiement
- Un Codespace déjà ouvert : celui d'un atelier, du kit ou du guide Open WebUI. Ce guide n'a pas de Codespace à lui. Sans Codespace, voir [Ouvrir les ateliers sur son propre ordinateur](/ressources/youth-ai-lab/guide-dev-containers)
- Avant toute séance avec des jeunes : la personne chargée de la protection des données dans votre structure
- **Le dépôt du guide** (anglais) : https://github.com/Youth-AI-Lab/yal-openrouter-guide
- **Le kit de la série d'ateliers** : https://github.com/Youth-AI-Lab/yal-workshop-kit
- **La page de présentation des ressources** (anglais) : https://youth-ai-lab.github.io/yal-workshop/resources.html

</div>

<img src="/img/ressources/youth-ai-lab/guide-openrouter/icone.png" alt="Utiliser les outils des ateliers avec une clé OpenRouter" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

:::info[Une recette pour l'animateur·rice, à suivre seul·e]

Ce guide s'adresse aux animateur·rices, éducateur·rices et facilitateur·rices qui animent la série d'ateliers [Construire son propre chatbot : ce qu'il lit, et qui décide](/ressources/youth-ai-lab/construire-chatbot-1-instructions) ou qui suivent [Partager un chatbot avec un groupe grâce à Open WebUI](/ressources/youth-ai-lab/guide-open-webui). Vous ouvrez un compte OpenRouter, vous achetez des crédits, vous créez une clé par binôme avec une limite de dépense, et vous collez chaque clé dans `workshop-login`. Tous les outils des ateliers tournent alors sans Claude. Le dépôt, les commandes et les messages sont en anglais ; cette fiche en est l'adaptation française.

**Vous travaillez avec des jeunes ? Lisez d'abord** [Sécurité et protection des données](#sécurité-et-protection-des-données).

:::

---

## À quoi sert ce guide

Les ateliers sont écrits pour une clé Anthropic : le chatbot tourne avec Claude Code et les modèles Claude. Ce guide donne l'autre route. OpenRouter est une entreprise qui donne une seule clé pour les modèles de nombreuses entreprises. Vous lui achetez des crédits, et elle envoie chaque question à une entreprise qui exploite le modèle choisi.

Choisir une **clé OpenRouter** si vous voulez les ateliers sans Claude, ou essayer d'autres modèles. Choisir une **clé Anthropic** pour suivre les pages des ateliers telles quelles : vous n'avez alors pas besoin de ce guide, suivez [SETUP.md](https://github.com/Youth-AI-Lab/yal-workshop-kit/blob/main/SETUP.md) du kit, ou [Your Anthropic API key](https://github.com/Youth-AI-Lab/yal-openwebui-guide#your-anthropic-api-key) dans le guide Open WebUI. Les deux routes utilisent les mêmes commandes.

Le guide n'a été suivi par personne. Tout ce qui n'a pas été testé est signalé, et la liste complète est en [fin de fiche](#limites-et-points-non-testés).

## Objectifs d'apprentissage

**À la fin de ce guide, vous serez capable de...**

- **Choisir** entre une clé Anthropic et une clé OpenRouter, et dire ce qui reste réservé à Anthropic
- **Créer** un compte, acheter des crédits et préparer une clé par binôme avec une limite de dépense
- **Lire** chaque message de `workshop-login`, et choisir un autre modèle
- **Dire** quel modèle utilise chaque outil, et pourquoi une salle ne peut pas compter sur les modèles gratuits
- **Reconnaître** une erreur 429, 402 ou 503, et savoir quoi faire pendant une séance
- **Activer** ce que demande l'avertissement sur les jeunes, et dire ce qu'aucun réglage ne retire

---

## Déroulé du guide

Le guide anglais compte neuf parties. La partie 8, sur les données et les jeunes, est reprise en entier dans [Sécurité et protection des données](#sécurité-et-protection-des-données). La partie 9 est reprise dans [Limites et points non testés](#limites-et-points-non-testés).

### Partie 1 : Choisir sa clé

| | Clé Anthropic | Clé OpenRouter |
| --- | --- | --- |
| La clé commence par | `sk-ant-` | `sk-or-` |
| Modèles | Claude | de nombreuses entreprises ; aucun modèle Claude par défaut |
| Programme qui fait tourner le chatbot | Claude Code, ou OpenCode si vous le choisissez | OpenCode, toujours |

**Ce qui reste réservé à Anthropic : Claude Code.** Dans les ateliers, il n'accepte que les clés Anthropic. Une clé OpenRouter tourne toujours dans OpenCode, un programme libre et gratuit qui fait tourner le même chatbot avec les mêmes commandes.

`openwebui` a deux modes dans cette fiche. Le **mode kit** est celui des ateliers : chaque binôme a son propre Open WebUI, sans comptes. Le **mode groupe** (_class mode_ dans le guide anglais) est celui du [guide Open WebUI](/ressources/youth-ai-lab/guide-open-webui) : un·e animateur·rice ouvre un seul Open WebUI à un groupe, avec des comptes.

:::info[Les chiffres des ateliers ne valent pas ici]

Les coûts, la jauge de contexte et les notes imprimés dans les pages des ateliers ont été mesurés avec Claude. Ils ne valent pas pour cette route. Ce qui a été mesuré avec OpenRouter est en [partie 6](#partie-6--les-modèles-au-1er-novembre-2026).

:::

### Partie 2 : Le compte

À faire seul·e, jamais avec l'écran projeté.

1. **Décider qui détient le compte.** Les [conditions d'OpenRouter](https://openrouter.ai/terms) disent : « You must be at least 18 years of age to use the Service » (il faut avoir au moins 18 ans pour utiliser le service). Le ou la titulaire est un·e adulte. Si vous agissez pour une structure, vous devez avoir le pouvoir de l'engager. L'[accord de traitement des données](https://openrouter.ai/data-processing-agreement) d'OpenRouter s'applique alors : par les conditions sur les offres Free et Standard, et en copie signée sur demande à partir de l'offre Business.
2. **Créer le compte** sur https://openrouter.ai.
3. **Acheter des crédits** sur la page **Credits**, avant de créer les clés : le [tableau des offres](https://openrouter.ai/pricing) donne « Budgets & Spend Controls » à l'offre Standard et au-dessus, pas à l'offre Free.
   - Un achat va de 5 \$ à 25 000 \$.
   - Les frais sont de 5,5 % sur l'offre Standard, taxes en plus. Ils se paient à l'achat des crédits. Chaque requête coûte ensuite le prix catalogue de l'entreprise qui exploite le modèle.
   - Les crédits non utilisés ne sont plus remboursables après 24 heures, sauf à la résiliation ou si la loi l'exige. Les frais ne sont jamais remboursés. OpenRouter peut faire expirer les crédits 365 jours après l'achat.
4. **Laisser la recharge automatique (_auto top-up_) désactivée.** Elle achète des crédits sans vous. OpenRouter prévient dans sa [documentation](https://openrouter.ai/docs/api_reference/authentication) : « A key with no limit lets a leaked key or a runaway agent spend your entire balance, including any auto top-ups » (une clé sans limite laisse une clé divulguée ou un agent hors de contrôle dépenser tout le solde, recharges automatiques comprises). Garder une limite sur chaque clé. La recharge automatique pendant une séance n'a pas été testée.

**Ce que coûte une séance sur cette route : une estimation.** Aucune séance complète n'a été mesurée. Lors des essais, un `replay` de 11 questions a affiché 0,01 à 0,02 \$. Le guide suppose qu'un binôme pose à peu près autant de questions que quatre `replay` en une séance, soit 44 questions : environ 0,08 \$. Le pire cas est de 44 questions en mode B au prix catalogue, environ 0,51 \$ (70 000 jetons à 0,165 \$ le million, avec `mistral-small-2603`). Le guide suggère donc une limite de **1 \$ par clé pour une séance**, et de **3 \$ pour une clé qui suit les six ateliers** : seul l'atelier 2 envoie tout le kit. Acheter des crédits pour le nombre de binômes, plus les frais. Ces chiffres sont des estimations tirées des essais, pas la mesure d'une séance. Les coûts mesurés sont en [partie 6](#partie-6--les-modèles-au-1er-novembre-2026). Voir [Part 2](https://github.com/Youth-AI-Lab/yal-openrouter-guide#part-2---the-account).

### Partie 3 : Une clé par binôme

1. Sur la page **Keys**, choisir **Create API Key**. Lui donner le nom du binôme.
2. Sous **Key limit**, fixer une **Credit limit**, en dollars : le guide suggère 1 \$ pour une séance, 3 \$ pour les six ateliers (son estimation). Vous choisissez la fréquence de remise à zéro : quotidienne, hebdomadaire, mensuelle ou jamais. Choisir **never** : la limite plafonne alors tout l'usage de la clé. OpenRouter recommande une limite sur chaque clé. Il est possible de n'en mettre aucune : ne le faites pas.
3. Copier la clé. Elle commence par `sk-or-`.
4. Recommencer pour le binôme suivant.
5. Donner à chaque binôme sa clé en privé, par message direct ou sur papier. Ne jamais montrer une clé sur l'écran projeté.
6. Après votre dernière séance avec ces binômes, supprimer chaque clé sur la [page des clés](https://openrouter.ai/settings/keys). Une clé dont la limite ne se remet jamais à zéro reste utilisable jusque-là : la limite protège l'argent, pas l'accès. La suppression d'une clé n'a pas été testée.

Une clé créée par OpenRouter pendant l'inscription a une limite de 100 \$ et expire après 180 jours. Baisser cette limite avant qu'un binôme l'utilise, ou créer ses propres clés.

**À la limite.** OpenRouter écrit qu'une clé qui a consommé sa limite voit ses requêtes rejetées jusqu'à ce que vous remontiez la limite sur la page de la clé ou, pour une limite quotidienne, hebdomadaire ou mensuelle, jusqu'à sa remise à zéro. Les outils affichent alors l'un des messages de la [partie 7](#partie-7--quand-une-requête-échoue). La page d'OpenRouter cite ce cas à la fois sous 402 et sous 403 : les deux sont possibles. Atteindre une vraie limite de clé n'a pas été testé.

**Pourquoi le kit plafonne la longueur d'une réponse.** OpenCode réserve la réponse la plus longue possible à chaque requête. Le 1er novembre 2026, une demande de résumé d'un long document a échoué avec ce 402 : `You requested up to 195288 tokens, but can only afford 20387`. Pour OpenRouter, le kit plafonne une étape à 8 192 jetons (un jeton est un morceau de mot), pour qu'une petite limite n'arrête pas une question courte. Cela a été vérifié sur un faux OpenRouter et dans de vrais essais, pas avec un vrai petit solde. Voir [Part 3](https://github.com/Youth-AI-Lab/yal-openrouter-guide#part-3---one-key-per-pair).

### Partie 4 : Une commande, `workshop-login`

Dans le terminal du Codespace :

```bash
workshop-login
```

Coller la clé du binôme, puis appuyer sur Entrée. Un `*` s'affiche par caractère. La commande teste la clé, puis envoie une très courte requête au modèle. Il faut voir :

```text
Key received: sk-or-v…abcd (73 characters). Testing it…
Key OK (OpenCode, OpenRouter, model openrouter/deepseek/deepseek-v4-flash). You can start: workshop bare
```

Dans le guide Open WebUI (mode groupe), on voit plutôt ceci, et l'avertissement est expliqué dans [Sécurité et protection des données](#sécurité-et-protection-des-données) :

```text
Warning: with young people, turn on zero-data-retention models hosted in Europe: workshop-login --europe
Key OK (OpenRouter, model deepseek/deepseek-v4-flash). You can start: openwebui start
```

| Message | Ce que cela veut dire, et quoi faire |
| --- | --- |
| `--europe needs an OpenRouter key (sk-or-…). This is an Anthropic key. Nothing saved.` | `--europe` tapé avec une clé Anthropic. Coller la clé OpenRouter. |
| `Key saved, but this OpenRouter account has no credits left. Add credits, or choose a free model: workshop-login --models free` | Le compte est vide, ou cette clé est à sa limite. Ajouter des crédits ou remonter la limite. |
| `Key saved, but this key has reached its spending limit. Tell the facilitator.` | La clé est à sa limite. La remonter sur la page de la clé. |
| `Key saved, but no company can serve the model <name> under the workshop's data rule. Choose another model: workshop-login --models openrouter` | Vos règles ne laissent aucune entreprise pour ce modèle. Choisir un autre modèle. |
| `Key saved, but Mistral does not serve the model <name> in Europe with zero data retention. Choose another model, for example: workshop-login --model <name>` | `--europe` est actif et ce modèle n'a pas d'entreprise qui convient. Taper la commande proposée. |
| `OpenCode is already open and keeps the old data rule: close it and start it again. A replay stops by itself before its next question.` | `--europe` a changé pendant qu'OpenCode tournait. Fermer ce chatbot et le relancer. |
| `Your data rule changed during this replay (workshop-login --europe or --no-europe). The next question was not sent.` | Même chose pendant un `replay`. La question en cours s'est terminée sous l'ancienne règle. Retaper le même `replay`. |
| `Open WebUI keeps the old data rule until you type: openwebui start` | `--europe` a changé pendant qu'Open WebUI tournait. Taper `openwebui start`. |
| `Your data rule changed since Open WebUI started (workshop-login --europe).` | Même chose, sur une autre commande `openwebui`. Taper `openwebui start`, puis retaper la commande. |
| `Key saved, but the quota of the model <name> is reached for now (HTTP 429). Try again later, or choose another model: workshop-login --models openrouter` | Trop de requêtes, ou quota gratuit épuisé. Voir [429](#429--trop-de-requêtes). |
| `Key saved, but the model <name> is busy (HTTP 503). Try again in a few minutes, or choose another model: workshop-login --models openrouter` | Le modèle ne peut pas répondre maintenant. Voir [503](#503--occupé-ou-aucune-entreprise). |
| `Key saved, but OpenRouter refuses it (HTTP 401). Check it with the facilitator.` | La clé est fausse ou désactivée. En créer une nouvelle. |
| `OpenRouter refuses this key (HTTP 401). Your earlier key is kept. Check it with the facilitator.` | Même chose, et la clé enregistrée avant fonctionne encore. En créer une nouvelle. |
| `This is an OpenRouter key: Claude Code in the workshop needs an Anthropic key (sk-ant-…).` | `--engine claude` demandé. Taper `workshop-login` seul. |
| `OpenRouter has no model <name> that can use tools.` | Nom faux, ou modèle sans outils. Lire les noms proches affichés dessous. |

Dans le guide Open WebUI, certaines de ces lignes se terminent autrement, car elles s'adressent à une personne seule. Après `workshop-login --europe`, la ligne sur les crédits s'arrête à `Add credits.`, car aucun modèle gratuit ne tourne en Europe. Les lignes qui proposent `workshop-login --models openrouter` nomment à la place un modèle Mistral, jamais celui qui vient d'échouer.

**Choisir un autre modèle.** Les commandes sont dans le tableau plus bas, par exemple `workshop-login --model mistralai/mistral-small-3.2-24b-instruct`. Avec `--model`, appuyer sur Entrée seule à la question : la clé enregistrée est gardée. Avec un modèle gratuit, les dernières lignes ajoutent `Free requests left today: <number>.`

Ce qui tourne déjà garde l'ancien modèle : fermer le chatbot et le relancer, ou taper `openwebui start`. Aucune ligne ne le rappelle quand seul le modèle change. Une nouvelle clé revient au modèle par défaut, sauf si `--model` en nomme un. Une clé Anthropic collée après une clé OpenRouter revient aussi à Claude Code, sauf si vous avez choisi OpenCode avec `--engine`. Si Open WebUI tourne, on voit `Open WebUI keeps the old key until you type: openwebui start`.

| Commande | Ce qu'elle fait |
| --- | --- |
| `workshop-login` | Enregistre une clé et la teste. Entrée seule garde la clé enregistrée. |
| `workshop-login --models` | Liste les modèles du fournisseur de la clé qui savent utiliser des outils. |
| `workshop-login --models free` | Liste les gratuits. |
| `workshop-login --model <name>` | Choisit le modèle du chatbot. Ne change ni le juge ni le trieur. |
| `workshop-login --europe` | Active la règle décrite dans [Sécurité et protection des données](#obligatoire--hébergé-en-europe). |
| `workshop-login --no-europe` | Retire cette règle. Jamais pendant une séance avec des jeunes. |

Voir [Part 4](https://github.com/Youth-AI-Lab/yal-openrouter-guide#part-4---one-command-workshop-login).

### Partie 5 : Les outils

| Outil | Avec une clé Anthropic | Avec une clé OpenRouter |
| --- | --- | --- |
| `workshop`, `replay` | Claude Code, `claude-sonnet-5-5` | OpenCode, `deepseek/deepseek-v4-flash`, ou votre `--model` |
| `score` (le juge) | `claude-haiku-5-5` | `deepseek/deepseek-v4-flash` |
| `openwebui`, mode kit (`replay RAG` compris) | `claude-sonnet-5-5` | `deepseek/deepseek-v4-flash`, ou votre `--model` |
| `openwebui`, mode groupe | `claude-sonnet-5-5` et `claude-haiku-5-5`, moins cher | `deepseek/deepseek-v4-flash`, et `mistralai/mistral-small-3.2-24b-instruct` en second modèle |
| `./sorter compare` (atelier 6) | `claude-haiku-5-5` | `mistralai/mistral-small-3.2-24b-instruct` |

`./sorter claude` reste un autre nom de `./sorter compare`. Avec une clé OpenRouter, il n'appelle pas Claude. Avec `workshop-login --europe`, la dernière colonne change : le chatbot et le premier modèle du mode groupe sont `mistralai/mistral-small-2603`, et le juge, le second modèle et le trieur sont `mistralai/mistral-small-3.2-24b-instruct`.

Ce qui diffère de la route Anthropic :

- **Les commandes** : avec OpenCode, aucune commande du terminal ne passe sans demande. Le chatbot cherche avec les outils `read`, `grep` et `glob` d'OpenCode.
- **`replay`** : il tourne dans une copie du kit sans le matériel de test.
- **Les entreprises** : OpenRouter enverrait une question à toute entreprise qui exploite le modèle. Le kit ajoute `data_collection: deny` à chaque requête, ce qui écarte celles qui peuvent collecter les données ou s'entraîner dessus. Certaines des autres gardent les questions (voir [ce que veut dire zéro conservation](#ce-que-veut-dire-zéro-conservation-des-données)).
- **Le coût** : `replay` l'affiche quand OpenCode connaît le prix du modèle. `replay RAG` affiche `cost: not shown by Open WebUI`.

### Partie 6 : Les modèles au 1er novembre 2026

Ces résultats sont les mesures d'une journée, et les prix et quotas d'OpenRouter changent. Un mode est une étape du chatbot dans les ateliers : `bare` est le modèle seul, A a ses instructions, B toutes ses connaissances d'un coup, C cherche dans les documents, D ajoute des outils extérieurs, E ajoute un wiki. Les modes bare, A, C, D et E ont tourné sur 11 questions (22 points), et B sur 3 (6 points).

| Modèle | bare | A | B | C | D | E | Réponses vides ou en échec | Ce qu'il faut payer |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `deepseek/deepseek-v4-flash` | 2/22 | 11/22 | 6/6 | 20/22 | 19/22 | 19/22 | 0 | crédits |
| `mistralai/mistral-small-3.2-24b-instruct` | 10/22 | 8/22 | 4/6 | 16/22 | 14/22 | 14/22 | 0 | crédits |
| `mistralai/mistral-small-2603`, sur `mistral/eu` seul | pas lancé | pas lancé | 3/6 | 15/22 | 4/4, 2 questions | pas lancé | 0 | crédits |
| `google/gemini-2.5-flash-lite` | 10/20 | 12/22 | 5/6 | 12/20 | 1/2 | 9/16 | 8 sur 51 | crédits |
| `google/gemma-4-26b-a4b-it:free` | 8/22 | 12/22 | arrêté | arrêté | arrêté | arrêté | 429 à partir de C | rien, dans le quota |
| `cohere/north-mini-code:free` | arrêté | arrêté | arrêté | arrêté | arrêté | arrêté | 429 sur 17 des 18 réponses | rien, dans le quota |

Les notes viennent d'un juge automatique (`claude-haiku-5-5`) et d'un seul passage. Personne ne les a vérifiées. Une note ne classe pas deux modèles : sur un second passage du mode D, le même juge a donné à DeepSeek v4 Flash 22/22 au lieu de 19/22. Un total sous 22 veut dire que moins de réponses ont reçu une note. « Arrêté » veut dire que `replay` s'est arrêté après trois erreurs de suite : ces deux lignes ne notent pas les modèles gratuits.

La ligne de `mistral-small-2603` est un seul passage du 1er novembre 2026, par `workshop-login --europe`, sur la route pour les jeunes. Les autres n'étaient pas fixées sur `mistral/eu`. En B, ses questions étaient les 3, 7 et 10 (1, 2 et 0 point), alors que la ligne de Mistral Small 3.2 a utilisé d'autres questions. `replay B 3 7 10` a pris 10 s, à environ 70 000 jetons par question, et a affiché 0,01 \$. `replay C` a pris 1 min 06 et a affiché 0,01 \$. `replay D 1 8` a appelé l'outil de danger de feu. Deux passages d'un même modèle ont différé de 3 points sur 22 au plus : ces lignes ne classent donc rien.

| Modèle | Prix entrée/sortie, par million de jetons | Fenêtre | Entreprises sous ZDR | En Europe |
| --- | --- | --- | --- | --- |
| `deepseek/deepseek-v4-flash` | environ 0,09 \$/0,18 \$ | 1M | 12 sur 17 | aucune |
| `mistralai/mistral-small-3.2-24b-instruct` | 0,075 \$/0,20 \$ chez l'entreprise la moins chère, 0,10 \$/0,30 \$ en Europe | 128k à 256k, 32k en Europe | 4 sur 4 | 1 |
| `mistralai/mistral-small-2603` | 0,165 \$/0,66 \$ en Europe | 262k en Europe | 3 routes sur 4, toutes chez Mistral | 1 |
| `google/gemini-2.5-flash-lite` | 0,10 \$/0,40 \$ | 1M | 0 sur 1 (55 jours) | aucune |
| `google/gemma-4-26b-a4b-it:free` | gratuit | 262k | 0 sur 1 (55 jours) | aucune |
| `cohere/north-mini-code:free` | gratuit | 256k | 0 sur 1 (30 jours) | aucune |

La fenêtre est la quantité de texte que le modèle peut lire en une fois. ZDR veut dire [zéro conservation des données](#ce-que-veut-dire-zéro-conservation-des-données). Ces chiffres sont ceux d'OpenRouter au 1er novembre 2026.

**Pourquoi ces choix par défaut.** DeepSeek v4 Flash a la meilleure note en modes C, D et E sans réponse en échec. Comme juge, il a laissé une réponse sans note, contre 27 pour Gemini 2.5 Flash Lite. C'est un seul passage : une tendance, pas un classement. Il coûte du temps : 3 à 4,5 minutes pour un `replay` de 11 questions en bare, C, D et E, contre 32 à 53 secondes pour Mistral Small. Mistral Small a trié les 32 messages de test sans manquer une urgence : c'est donc le trieur, et aussi le second modèle du mode groupe. Avec `--europe`, le chatbot est `mistral-small-2603` : Mistral Small 3.2 ne peut pas y faire tourner le mode B, et ce modèle le peut.

Le second passage du mode D a pris 2 min 43 et a affiché 0,02 \$ pour 11 réponses. `score D --auto` a ensuite donné 21/22 avec DeepSeek comme juge, pour 0,0008 \$.

Le tableau suivant montre combien de fois chaque candidat a donné la même note que `claude-haiku-5-5`. Ce modèle ne sert que d'étalon pour ces mesures : la route de ce guide ne l'utilise pas.

| Comme juge, face à `claude-haiku-5-5` | Même note | 1 point d'écart | 2 points d'écart | Sans note | Coût indiqué |
| --- | --- | --- | --- | --- | --- |
| `deepseek/deepseek-v4-flash` | 150/180 (83 %) | 30 | 0 | 1 | 0,016 \$ |
| `google/gemini-2.5-flash-lite` | 133/154 (86 %) | 20 | 1 | 27 | 0,039 \$ |
| `mistralai/mistral-small-3.2-24b-instruct` | 135/181 (75 %) | 44 | 2 | 0 | à compléter |

Sur les 11 réponses de `mistral-small-2603` en mode C, `score C --auto` avec Mistral Small 3.2 comme juge a donné 17/22, pour 0,0007 \$, là où `claude-haiku-5-5` a donné 15/22. C'est un seul passage.

| `./sorter compare`, 32 messages de test de l'atelier 6, premier passage | Bien triés | Urgences manquées | Temps | Coût |
| --- | --- | --- | --- | --- |
| `mistralai/mistral-small-3.2-24b-instruct` | 32/32 | 0 | 18 s | 0,0003 \$ |
| `mistralai/mistral-small-2603`, sur `mistral/eu` seul (`WORKSHOP_SORTER_MODEL`) | 32/32 | 0 | 20 s | 0,0003 \$ |
| `deepseek/deepseek-v4-flash` | 30/32 | 1 | 38 s | 0,0002 \$ |
| `google/gemini-2.5-flash-lite` | arrêté à 6 messages : `Provider returned error`, cause non établie | - | - | - |

Un second passage de Mistral Small a donné 32/32, aucune urgence manquée, en 17 s, pour 0,0003 \$.

**Une salle ne peut pas compter sur les modèles gratuits.** Ils n'ont pas été mesurés avec une salle. Les [limites d'OpenRouter](https://openrouter.ai/docs/api_reference/limits) :

- 20 requêtes par minute ;
- 50 requêtes par jour, ou 1 000 par jour dès que le compte a acheté au moins 10 \$ de crédits (un jour UTC) ;
- « Making additional accounts or API keys will not affect your rate limits » : plus de clés n'apportent rien à une salle. La même phrase continue : « We do however have different rate limits for different models » (les limites varient selon les modèles) ;
- les tentatives en échec comptent dans le plafond du jour, et un solde négatif bloque les modèles gratuits.

Dans le premier tableau, deux modèles gratuits lancés en même temps ont reçu des 429. Une nouvelle tentative de `north-mini-code` seul a aussi échoué, le quota du jour étant déjà consommé. Chacun a ensuite tourné seul en mode C, avec 1 000 requêtes par jour :

| Modèle gratuit | Résultat | Requêtes |
| --- | --- | --- |
| `cohere/north-mini-code:free` | 18/22 par le même juge, 3 min 04, 0 erreur | 60 à 62 pour un `replay C`, environ 5,5 par question |
| `google/gemma-4-26b-a4b-it:free` | 3 questions en 429 en 10 s, arrêté | non comptées à part |

Un `replay C` de `north-mini-code` consomme plus que les 50 requêtes d'un compte qui n'a pas acheté 10 \$ de crédits. Ne pas se fier au compteur `Free requests left today` pendant une séance : plus tôt le même jour, il n'a montré aucun usage pour plusieurs modèles, sans cause établie. Le 429 de `gemma-4-26b-a4b-it:free` venait de l'entreprise qui l'exploite (`Provider returned error`).

Pour les données des modèles gratuits, lire d'abord [Sécurité et protection des données](#sécurité-et-protection-des-données). Le 1er novembre 2026, les pages d'OpenRouter indiquaient que 8 des 14 modèles gratuits s'entraînent sur les données. Un seul des 14 ne gardait rien. Écartés : `inkling` et `inkling-small` (403 sur tout appel direct, et des conditions qui interdisent les données d'enfants), et `nemotron-3.5-super-vl:free` (aucune entreprise ne peut l'exploiter sous la règle du kit).

**Modèles payants.** La page des limites, lue le 1er novembre 2026, décrit les limites d'OpenRouter comme « free-model request caps and DDoS protection » (des plafonds de requêtes pour les modèles gratuits et une protection contre les attaques par saturation), et dit que la variante payante d'un modèle « has no platform-level request cap » (n'a pas de plafond de requêtes au niveau de la plateforme). Un 429 sur un modèle payant devrait donc venir de l'entreprise qui l'exploite, pas d'OpenRouter. Un vrai 429 sur un modèle payant n'a pas été testé. Avec `workshop-login --europe`, Mistral est seul à servir le modèle et il n'y a pas de seconde entreprise : un 429 de Mistral atteint directement le groupe. Voir [Part 6](https://github.com/Youth-AI-Lab/yal-openrouter-guide#part-6---the-models-on-2026-11-01).

### Partie 7 : Quand une requête échoue

Les étapes ci-dessous viennent des messages des outils et de la documentation d'OpenRouter. Un vrai 429 en séance et un vrai petit solde n'ont pas été testés.

#### 429 : trop de requêtes

| Outil | À l'écran |
| --- | --- |
| `replay` | `ERROR: too many requests, or the quota of this key or of this model is used up (429: <details>). Wait a minute, then try again.` Après trois de suite : `Three errors in a row: stopping.` |
| `score` | `Judge unavailable: HTTP 429: <details>.` Si OpenRouter demande plus de 60 secondes : `Judge stopped: OpenRouter asks to wait <n> seconds. You score alone for this run.` |
| `./sorter compare` | `<model> is busy (HTTP 429): <details>. Wait a minute and type ./sorter compare again.` |
| `workshop` | l'écran d'OpenCode (non testé) |
| Open WebUI | (non testé) |

OpenCode retente seul un 429 ou un 503 avant d'afficher l'erreur : l'écran peut sembler bloqué. Cela a pris 82 à 93 s sur un faux OpenRouter. Dans un vrai essai, trois 429 sont arrivés en 10 s : l'attente varie. Avec `workshop` ou Open WebUI, si rien ne vient, attendre une minute et réessayer. Si cela dure, l'animateur·rice change de modèle.

Pendant la séance :

1. **Lire le nom du modèle.** Après un `replay`, il est sur la ligne `Engine:` du fichier de réponses. Sinon, taper `workshop-login` et appuyer sur Entrée seule : la dernière ligne le donne.
2. **Il finit par `:free`** : ne plus l'utiliser pour cette séance, car réessayer consomme le quota du jour. Passer le binôme sur un modèle payant, puis appuyer sur Entrée seule à la question :

   ```bash
   workshop-login --model deepseek/deepseek-v4-flash
   ```

3. **C'est un modèle payant** : attendre une minute et retaper la même commande. Si cela ne passe pas, choisir `mistralai/mistral-small-3.2-24b-instruct` avec `workshop-login --model`.
4. **`--europe` est actif** : attendre une minute et réessayer. Si cela ne passe pas, changer pour l'autre modèle Mistral : la règle reste la même, et Mistral sert les deux. Avec `workshop-login --model mistralai/mistral-small-3.2-24b-instruct`, le mode B ne tourne plus. Pour revenir : `workshop-login --model mistralai/mistral-small-2603`. En mode groupe, vos chatbots ne reviennent pas avec cette commande : ils restent sur Mistral Small 3.2, et `openwebui start` les nomme. Pour chacun : **Workspace → Models**, ouvrir le chatbot, choisir `mistralai/mistral-small-2603` dans **Base Model (From)**, puis cliquer sur **Save & Update**. Ne pas taper `--no-europe` pendant une séance avec des jeunes.
5. **Beaucoup de binômes en même temps** : les faire lancer `replay` l'un après l'autre, ou sur quelques questions : `replay D 8 11`.

Après un changement de modèle, fermer le chatbot et le relancer, ou taper `openwebui start`. `--model` ne change ni le juge ni le trieur : avec `score` ou `./sorter compare`, attendre une minute et réessayer.

#### 402 : plus de crédits, ou une limite

| Outil | À l'écran |
| --- | --- |
| `replay` | `ERROR: no credits left on this key (402: <details>). Add credits on the provider's website, or ask the facilitator.` |
| `score` | `Judge stopped: no credits left on this key (<details>). You score alone for this run.` |
| `./sorter compare` | `OpenRouter says this account has no credit left: <details>. Show this message to the facilitator.` |

Un 402 a trois causes possibles :

- **Le compte est vide.** Le 1er novembre 2026, OpenRouter a laissé passer 0,17 \$ de découvert, puis a répondu 402. Ajouter des crédits.
- **Cette clé est à sa limite.** La remonter sur la page de la clé.
- **Un petit solde sur un compte prépayé ou récent.** OpenRouter bloque à l'avance un coût estimé : une requête peut échouer alors que le solde est encore positif. Attendre une minute et réessayer, et ne pas faire tourner beaucoup de binômes en même temps sur un petit solde. Cela ne concerne pas les modèles gratuits.

Si vous voyez `this key or its account reached a spending limit (403: <details>)`, un budget a arrêté la clé : le remonter sur le site d'OpenRouter.

#### 503 : occupé, ou aucune entreprise

| Outil | À l'écran |
| --- | --- |
| `replay` | `ERROR: the model is busy, or no company can serve it now (503: <details>). Try again later, or ask the facilitator.` |
| `./sorter compare` | `<model> is busy (HTTP 503): <details>. Wait a minute and type ./sorter compare again.` |
| `./sorter compare`, aucune entreprise | `No company can run <model> for this test: <details>.`, suivi de ce qu'il faut faire |

Attendre quelques minutes. Si cela dure, choisir un autre modèle avec `workshop-login --model`. Si vous avez activé les réglages de la [partie sur les données](#sécurité-et-protection-des-données), ils peuvent ne laisser aucune entreprise pour le modèle : lire la liste de ses entreprises sur sa page. Avec `--europe` actif et des jeunes, attendre, changer pour l'autre modèle Mistral comme ci-dessus, ou arrêter le chatbot pour cette séance. Voir [Part 7](https://github.com/Youth-AI-Lab/yal-openrouter-guide#part-7---when-a-request-fails).

---

## Sécurité et protection des données

:::caution[Avec des jeunes et OpenRouter : taper workshop-login --europe]

**Avec des jeunes et OpenRouter, taper `workshop-login --europe`.** Les requêtes ne vont alors qu'à Mistral, hébergé en Europe, avec zéro conservation des données. Le modèle par défaut est `mistralai/mistral-small-2603`. C'est la règle du projet Youth AI Lab pour cette route. En mode groupe, `workshop-login`, `openwebui start` et `openwebui share open` l'affichent tant qu'elle n'est pas active.

**Rester chez Mistral.** `--europe` n'autorise que Mistral : tout modèle qu'il accepte relève donc de conditions déjà lues. D'autres entreprises font tourner des modèles en Europe, mais les conditions d'Amazon et d'Azure n'ont pas été lues, et celles de Google peuvent exclure cet usage ([point 4](#ce-quaucun-réglage-ne-retire)). Celles de Mistral ont été lues, et elles demandent le consentement parental ([point 5](#ce-quaucun-réglage-ne-retire)).

Cette règle ne garde pas tout en Europe ([ce qu'elle couvre](#obligatoire--hébergé-en-europe)), et elle ne lève pas [ce qu'aucun réglage ne retire](#ce-quaucun-réglage-ne-retire). Lire les deux avant d'ouvrir quoi que ce soit à des jeunes.

:::

Les ateliers sont faits pour des adultes. Cette partie vaut pour le moment où un chatbot s'ouvre à des jeunes, comme dans le mode groupe du guide Open WebUI.

Cette partie n'est pas un avis juridique. Elle dit ce que disaient les textes le 1er novembre 2026. La structure décide, avec la personne chargée de la protection des données. Rien ici ne veut dire que ce dispositif est autorisé pour votre groupe.

### Ce que veut dire zéro conservation des données

La [définition d'OpenRouter](https://openrouter.ai/docs/guides/features/zdr) : « Zero Data Retention (ZDR) means that a provider will not store your data for any period of time » (une entreprise ne stocke vos données pour aucune durée). Une entreprise peut promettre de ne pas s'entraîner sur vos données et les garder quand même.

La règle que le kit envoie toujours, `data_collection: deny`, ne donne pas le ZDR. Elle écarte seulement les entreprises qui peuvent collecter les données ou s'entraîner dessus. Le 1er novembre 2026, Gemini 2.5 Flash Lite et `google/gemma-4-26b-a4b-it:free` ont répondu avec cette règle active, et l'unique entreprise de chacun est indiquée avec 55 jours de conservation.

Le ZDR a des limites, même actif :

- **Une déclaration, pas une garantie** : la liste d'OpenRouter « reflects the AI Model Provider's published or represented policy » et « does not constitute OpenRouter's guarantee of AI Model Provider compliance » (elle reprend ce que déclarent les entreprises, sans garantir qu'elles le respectent).
- **Les questions, pas les ajouts** : il couvre les questions envoyées à un modèle, pas des ajouts comme la recherche web. Le kit garde la recherche web coupée dans Open WebUI.
- **Le cache** : OpenRouter ne compte pas un cache en mémoire comme une conservation.
- **Ce qu'OpenRouter garde** : pour chaque requête, le nombre de jetons et le temps pris, et il « samples a small number of prompts for categorization » (il prélève un petit nombre de prompts pour les classer ; un prompt est un texte envoyé à un modèle).

### Obligatoire : hébergé en Europe

```bash
workshop-login --europe
```

Appuyer sur Entrée seule pour garder la clé enregistrée. En mode groupe, il faut voir :

```text
Key OK (OpenRouter, model mistralai/mistral-small-2603, hosted in Europe). You can start: openwebui start
```

Dans le kit, il faut voir :

```text
Key OK (OpenCode, OpenRouter, model openrouter/mistralai/mistral-small-2603, hosted in Europe). You can start: workshop bare
```

**Avant `openwebui share open`** : taper `openwebui start`. La ligne `Warning: with young people...` doit avoir disparu. Si elle est encore là, la règle est coupée.

À partir de là, `workshop`, `replay`, `score`, `openwebui` et `./sorter` envoient avec chaque requête : un point d'accès européen (`mistral/eu`), zéro conservation, pas de second choix. Un point d'accès (_endpoint_) est une entreprise qui fait tourner un modèle à un endroit. S'il ne peut pas servir le modèle, la requête échoue. Le mode groupe avec `--europe` a tourné avec une vraie clé, mais seulement jusqu'à une question à chaque modèle de base, posée par l'administrateur·rice : sans groupe, sans téléphone, sans vrai Codespace.

:::caution[--europe choisit où tourne le modèle, pas où OpenRouter traite la requête]

OpenRouter lui-même peut traiter une requête ailleurs. Le kit envoie toujours chaque requête à `openrouter.ai`, et n'a pas d'option pour `eu.openrouter.ai`. Les comptes, la facturation et les journaux de sécurité peuvent rester aux États-Unis dans tous les cas.

:::

| Ce que vous voulez | Compte ordinaire (Standard) | Offre Business |
| --- | --- | --- |
| Une entreprise européenne nommée dans chaque requête : `workshop-login --europe` | oui : OpenRouter l'a accepté, voir plus bas | inutile |
| Des requêtes envoyées à `eu.openrouter.ai`, traitées et servies seulement en Europe (UE et EEE, Royaume-Uni, Suisse), sans repli ailleurs | non : le tableau des offres le réserve aux offres Business et Enterprise | oui : vous l'activez vous-même, sans contrat, sans minimum, avec des frais de 8 % sur les crédits au lieu de 5,5 % ; non pris en charge par les commandes du kit |
| Un modèle gratuit en Europe | aucun | aucun |

Pour l'adresse européenne, [OpenRouter écrit](https://openrouter.ai/docs/guides/features/in-region-routing) qu'il n'y a pas de réglage à activer : sur ces offres, on choisit la région de chaque requête en l'envoyant à l'adresse de cette région. Même là, seuls les prompts et les réponses restent en Europe. [OpenRouter écrit](https://openrouter.ai/docs/guides/features/sovereign-ai) : « Account, billing, and other operational records may be stored or processed in the US. » (les données de compte, de facturation et d'autres données de fonctionnement peuvent être stockées ou traitées aux États-Unis). OpenRouter, Inc. est une société de New York, et l'avenant « UE seulement » de son accord de traitement des données ne s'applique que s'il est choisi par écrit.

**Ce qui a été mesuré, le 1er novembre 2026.**

- **Un compte ordinaire, sans offre Business** : une très petite vraie requête à `openrouter.ai`, modèle Mistral Small, avec `mistral/eu` seul, a reçu HTTP 200, et OpenRouter a nommé Mistral comme entreprise. Une requête à `eu.openrouter.ai` a répondu 403 avec `error code: 1010`, ce qui ne dit pas pourquoi.
- **Un vrai passage par `workshop-login --europe`** : OpenCode en modes C et D (4 questions), `score`, `./sorter compare` et Open WebUI en mode kit (2 questions). 60 requêtes ont reçu une réponse. Toutes les 60 portaient la règle, et OpenRouter a nommé Mistral sur les 60. Le trieur a eu 32 sur 32, sans urgence manquée. L'ensemble a coûté 0,0065 \$. DeepSeek v4 Flash, qui n'a pas d'entreprise de ce type, a été refusé. Les réponses nommaient Mistral, et aucune région. Le lieu vient de la liste d'OpenRouter : aucun appel et aucune preuve indépendante n'ont confirmé où tourne un modèle.
- **Un passage plus tard le même jour**, avec `workshop-login --europe --model mistralai/mistral-small-2603` et `mistral/eu` comme seul point d'accès : `replay` en modes B, C et D, `score` et `./sorter compare`. Les 100 requêtes ont reçu HTTP 200, portaient la règle et nommaient Mistral : 89 sur `mistral-small-2603`, et 11 appels du juge sur Mistral Small 3.2. Il a coûté 0,037 \$. Résultats : [partie 6](#partie-6--les-modèles-au-1er-novembre-2026).

Ce qui change quand la règle est active :

- **Le modèle** : l'activer vous fait passer sur `mistralai/mistral-small-2603`. Ensuite, `--model` peut nommer un autre modèle Mistral, et il reste. Si Mistral ne le sert pas, la commande le dit et nomme un modèle qui marche.
- **La fenêtre** : `mistral-small-2603` a 262k jetons sur `mistral/eu`. Mistral Small 3.2 y a 32k, contre 128k à 256k chez les trois autres entreprises, aucune indiquée en Europe. La liste des modèles d'OpenRouter dit 256 000 pour Mistral Small 3.2 : `--europe` enregistre donc la taille tirée de la liste des entreprises du modèle. Un chatbot en mode groupe avec une longue conversation dans 32k n'a pas été testé.
- **Le mode B** : il envoie tout le kit d'un coup. Il tourne avec `mistral-small-2603`. Avec Mistral Small 3.2 sur `mistral/eu`, il a échoué avant le premier mot du modèle : c'est une mesure. Les commandes refusent le mode B pour tout modèle à la fenêtre trop petite, avec ou sans `--europe` :

  ```text
  Mode B sends the whole kit at once, and this model reads 32,768 tokens at most.
  This mode cannot run with it. Choose a model with a larger window: workshop-login --model mistralai/mistral-small-2603
  ```

  Sans `--europe`, la ligne se termine par `workshop-login --models openrouter`.

- **Les notes** : seule la ligne de `mistral-small-2603` en partie 6 était fixée sur `mistral/eu`. Les autres notes ne sont pas des notes en Europe.
- **Le juge** : le juge habituel n'a pas d'entreprise en Europe, donc `score` reste sur Mistral Small 3.2, sauf si `WORKSHOP_JUDGE_MODEL` nomme un autre modèle. Ses 32k suffisent pour le prompt d'un juge : c'est une mesure. Il a donné la même note que `claude-haiku-5-5` sur 135 notes sur 181 (75 %), contre 150 sur 180 (83 %) pour le juge habituel.
- **Le trieur** : `./sorter compare` reste sur Mistral Small 3.2. `WORKSHOP_SORTER_MODEL` nomme un autre modèle.
- **Le mode groupe** : deux modèles de base, `mistral-small-2603`, et Mistral Small 3.2, moins cher, en second. Un chatbot sur le second y reste.
- **Le coût affiché** : le prix enregistré vient de la liste des modèles d'OpenRouter. Sur `mistral/eu`, `mistral-small-2603` coûte 0,165 \$/0,66 \$ par million de jetons (entrée/sortie). Mistral Small 3.2 y coûte 0,10 \$/0,30 \$, contre 0,075 \$/0,20 \$ chez l'entreprise la moins chère : OpenCode peut donc afficher pour lui un coût trop bas.
- **Ce qui tourne déjà garde l'ancienne règle** : OpenCode et Open WebUI lisent la règle au démarrage. La commande affiche une ligne si l'un d'eux tourne : fermer le chatbot et le relancer, ou taper `openwebui start`. Un `replay` s'arrête seul avant sa question suivante, mais la question en cours se termine sous l'ancienne règle. Activer donc la règle d'abord, puis démarrer le reste.

La règle reste pour vos connexions suivantes. `workshop-login --no-europe` la retire, et une clé d'un autre fournisseur aussi.

Les autres modèles de la partie 6 :

- **`deepseek/deepseek-v4-flash`, le choix par défaut** : OpenRouter n'indique aucune entreprise qui le fait tourner en Europe. Sur ses 17 entreprises, 12 sont en ZDR. 5 gardent les questions, pour une durée qu'OpenRouter ne donne pas : StreamLake, Baidu, GMICloud, AtlasCloud et Alibaba.
- **`google/gemini-2.5-flash-lite`** : OpenRouter n'indique aucune entreprise qui le fait tourner en Europe, et aucune en ZDR.

La liste européenne d'OpenRouter a une cinquième entreprise, Inceptron. `--europe` l'écarte : ses étiquettes ne disent pas Europe.

### Facultatif : la même règle pour tout le compte

Cette étape n'est pas nécessaire. `workshop-login --europe` demande déjà le ZDR dans chaque requête du kit. Ces réglages tiennent le ZDR pour tout le compte, quel que soit l'outil qui utilise la clé. Rien dans ce guide n'a tourné avec eux.

1. En tant que titulaire du compte, ouvrir les [réglages de confidentialité](https://openrouter.ai/settings/privacy).
2. Activer le bouton ZDR de chaque groupe de modèles : **Anthropic**, **OpenAI**, **Google**, **SpaceXAI** et **All other models**. DeepSeek et Mistral ne sont pas dans les quatre premiers. « Enabling a scope restricts all your requests to ZDR endpoints for that model group. » (activer un groupe limite toutes vos requêtes aux points d'accès ZDR de ce groupe).
3. Choisir **Zero retention only**. Sans ce choix, un compte ordinaire reste sur **Safety retention allowed** : Google peut alors garder les questions que ses filtres automatiques signalent, jusqu'à 90 jours. OpenRouter prévient qu'avec **Zero retention only**, « Most Google models become unavailable » (la plupart des modèles Google ne sont plus disponibles).
4. Ne pas activer les deux options qui gardent vos données : **Private Input & Output Logging**, et **OpenRouter Use of Inputs/Outputs** (une remise de 1 %). OpenRouter ne stocke vos prompts que si vous l'acceptez, ou s'ils sont signalés comme possible contenu d'abus sur enfants. La section 6.2 des conditions attache à l'enregistrement des prompts une licence qui inclut le droit de « license or sell your User Content in anonymized form » (céder ou vendre vos contenus sous forme anonymisée).
5. Dans le Codespace, taper `workshop-login` et appuyer sur Entrée seule. Il faut voir `Key OK` : une entreprise peut servir le modèle, et la ligne ne dit pas laquelle. Si vous voyez `no company can serve the model`, choisir un autre modèle.

### Ce que disent les conditions de chaque entreprise

Ce sont les conditions propres à chaque entreprise pour le produit nommé. Une route par OpenRouter peut différer : ses pages déclarent une politique par route, et ses accords avec ces entreprises ne sont pas publics.

| Entreprise et produit | Mineur·es | Entraînement | Conservation | Lieu |
| --- | --- | --- | --- | --- |
| **DeepSeek**, ses propres services | « primarily intended for adults » (destinés d'abord aux adultes) ; moins de 18 ans avec le consentement d'un·e responsable légal·e ; pas de chatbot « designed to specifically appeal to or present a persona of any person under the age of 18 » (conçu pour plaire spécifiquement aux moins de 18 ans ou pour incarner une personne de moins de 18 ans) | peut utiliser entrées et sorties, dé-identifiées ; OpenRouter indique la route directe comme s'entraînant | tant que le compte existe, sans nombre de jours | Chine |
| **Mistral**, API et Studio | pas d'information personnelle d'enfants de moins de 13 ans ou de l'âge du consentement numérique ; les mineur·es ont besoin de « legally adequate consent from their parent or guardian » (un consentement juridiquement valable de leur parent ou responsable légal·e) | non, sauf accord de votre part ; exceptions : retours d'usage, bon de commande, modèles Labs ou Preview | 30 jours glissants, sauf ZDR ; OpenRouter n'indique aucune conservation sur `mistral/eu` | UE par défaut ; transferts temporaires possibles selon la fonction |
| **Google**, API Gemini et AI Studio | 18 ans ou plus, et voir plus bas | services payants : non ; dans l'EEE, en Suisse et au Royaume-Uni, mêmes règles pour les services gratuits | 55 jours | « any country in which Google or its agents maintain facilities » (tout pays où Google ou ses agents ont des installations) |
| **Google**, Vertex | voir plus bas | pas sans la permission du client | prompts signalés, jusqu'à 90 jours | l'adresse `eu` reste dans les États membres de l'UE |
| **Cohere**, modèle gratuit de la partie 6 | « not intended to be used by minors (children) » (pas destiné à être utilisé par des mineur·es) ; sa politique d'usage demande des contrôles de sécurité supplémentaires pour une application utilisée par des mineur·es | clés d'essai : peuvent servir à la recherche et au développement | 30 jours, sauf signalement | Google Cloud, US-Central, dans une FAQ non datée |

Le modèle par défaut n'atteint pas DeepSeek lui-même. OpenRouter indique 17 autres entreprises pour lui :

- **En ZDR** : Relace, DeepInfra, Venice, DigitalOcean, Fireworks, SiliconFlow, Crusoe, Parasail, Mancer 2, Azure (aux États-Unis), Cloudflare et Wafer.
- **Qui gardent les questions** : StreamLake, Baidu, GMICloud, AtlasCloud et Alibaba.

**Les conditions de ces 17 entreprises n'ont pas été lues.** La route par défaut est donc réservée aux adultes, avec des questions inventées ou publiques.

### Ce qu'aucun réglage ne retire

1. **La règle d'âge d'OpenRouter.** Les conditions disent : « You must be at least 18 years of age to use the Service. » (il faut avoir au moins 18 ans pour utiliser le service). La [politique de confidentialité](https://openrouter.ai/privacy) dit : « This Site is offered and available to users who are 18 years of age or older. » (ce site est proposé et accessible aux personnes de 18 ans ou plus). Elle ne prévoit aucune exception pour les structures ni pour le consentement parental. La section 5.2 des conditions ajoute : « You will require that all of your Authorized Users and customers access and use the Service and Models only in accordance with this Agreement » (vous devez exiger que vos utilisateur·rices autorisé·es et vos client·es n'utilisent le service et les modèles que dans le respect de cet accord). Aucun texte ne dit en toutes lettres qu'une structure peut ou ne peut pas proposer un chatbot à des mineur·es, mais ces clauses, prises ensemble, pèsent contre. La question doit être posée à OpenRouter, par écrit.
2. **Les données sensibles.** L'accord de traitement des données cite la santé, l'origine, la religion et le casier judiciaire, entre autres, et dit : « No processing of Sensitive Data or any special categories is intended » (aucun traitement de données sensibles n'est prévu). Tout traitement de ce type demande un avenant. Selon la lecture du guide, un chatbot où un·e jeune écrit sur sa santé ou sa situation sort de ce cadre sans avenant. L'accord nomme des « End Customers » et ne parle jamais de mineur·es.
3. **Le contrôle prévu des contenus d'abus sur enfants (CSAM).** L'[annonce](https://openrouter.ai/blog/announcements/csam-screening/) du 27 octobre 2026 dit : « CSAM screening will also apply to requests covered by OpenRouter's Zero Data Retention (ZDR) policy » (ce contrôle s'appliquera aussi aux requêtes sous ZDR). La page ZDR ajoute : « Content flagged as potential CSAM may be retained for human review, reporting, and preservation where required by law » (un contenu signalé comme possible CSAM peut être conservé pour une relecture humaine, un signalement et une conservation là où la loi l'exige). La date de début n'est pas établie. Selon la lecture du guide, pour un groupe de mineur·es, une fausse alerte pourrait conduire à une conservation et à la lecture du texte par une personne, même sous ZDR. L'annonce dit : « A flag indicates suspected material; it is not itself a determination that the content is CSAM » (un signalement indique un soupçon, pas une décision sur le contenu).
4. **La clause de Google sur les moins de 18 ans.** Les [conditions de l'API Gemini](https://ai.google.dev/gemini-api/terms) disent que vous « will not use the Services as part of a website, application, or other service » qui « is directed towards or is likely to be accessed by individuals under the age of 18 » (ne pas utiliser les services dans un site, une application ou un service destiné aux moins de 18 ans ou susceptible d'être consulté par eux). Les [conditions de Google Cloud](https://cloud.google.com/terms/service-terms) disent la même chose pour les services d'IA générative et les personnes qui les utilisent au bout de la chaîne. Il n'est pas établi que cela atteigne un·e client·e d'OpenRouter sur la route Vertex.
5. **La clause de Mistral sur les mineur·es.** Mistral est l'entreprise de la route pour les jeunes. Ses [conditions commerciales](https://legal.mistral.ai/terms/commercial-terms-of-service/) interdisent d'« include any personal information of children under 13 or the applicable age of digital consent as Customer Data or allow minors to use the Mistral AI Products without legally adequate consent from their parent or guardian » (inclure des informations personnelles d'enfants de moins de 13 ans ou de l'âge du consentement numérique applicable, ou laisser des mineur·es utiliser les produits sans un consentement juridiquement valable de leur parent ou responsable légal·e). Les jeunes de ce projet ont de 12 à 15 ans : cela les concerne directement. Selon la lecture du guide : aucune information personnelle d'un·e enfant en dessous de l'âge du consentement numérique n'entre dans le chatbot, et vous obtenez un consentement parental écrit avant qu'un·e mineur·e l'utilise. Il n'est pas établi que ce texte atteigne un·e client·e d'OpenRouter : le suivre quand même.

Les faits de cette partie ont été rassemblés par des modèles d'IA, puis vérifiés par un second, sur les pages brutes. Aucun·e juriste ne les a relus. Si votre structure dit non, un modèle sur sa propre machine n'envoie rien à ces entreprises : voir [Installer un chatbot sur un ordinateur de sa structure](/ressources/youth-ai-lab/guide-ia-locale).

Pour le détail, voir [Part 8 - Data and young people](https://github.com/Youth-AI-Lab/yal-openrouter-guide#part-8---data-and-young-people).

---

## Limites et points non testés

Personne n'a suivi ce guide. Les sources ont été lues le 1er novembre 2026 : la liste complète est dans [Sources, read on 2026-11-01](https://github.com/Youth-AI-Lab/yal-openrouter-guide#sources-read-on-2026-11-01).

### Ce qui a été testé

Le 1er novembre 2026, avec OpenCode 2.1.4, dans un conteneur de l'image 2026.10.42 avec les nouvelles commandes placées devant, sur une copie du kit préparée par `workshop-start 5`. L'image qui porte ces commandes est la 2026.10.43.

- **Notes, juges et trieur** : ceux de la partie 6.
- **Un compte avec des crédits, une clé collée sans option** : `workshop-login`, la skill `summarize` avec `deepseek/deepseek-v4-flash`, `replay D`, `score D --auto`, `./sorter compare`, puis les deux modèles gratuits l'un après l'autre.
- **Open WebUI v0.12.4 en mode kit, avec Mistral Small par OpenRouter** : `openwebui start` 250 s, `openwebui sizes` 885 s (2 cœurs, trois autres mesures en même temps), `openwebui query` juste, `replay RAG` 11 réponses en 44 s, 0 ERROR, rien dans le journal d'erreurs.
- **Le plafond de 8 192 jetons** : sur un faux OpenRouter et dans le passage avec des crédits.
- **Open WebUI en mode groupe, sur un faux OpenRouter, sans `--europe`** : il démarre, il affiche l'avertissement, et la règle `data_collection: deny` atteint le faux OpenRouter.
- **`workshop-login --europe`, sur un faux OpenRouter** : le routage dans chaque requête de `workshop` et de `replay`, les fenêtres de 262k et 32k, le mode B lancé avec la première et refusé avec la seconde, et un changement de règle pendant un `replay`. Le refus du mode B avant toute requête n'a été testé que sur un faux OpenRouter.
- **Trois vrais passages du 1er novembre 2026 avec `--europe`** : les deux premiers sont décrits dans [ce qui a été mesuré](#obligatoire--hébergé-en-europe), le premier avec un relais qui enregistre les requêtes. Le deuxième, un seul passage sur 2 cœurs : `replay B 3 7 10`, `replay C`, `replay D 1 8`, `score C --auto` et `./sorter compare`. Le troisième, un seul passage sur 2 cœurs, `workshop-login --europe` sans autre option : `replay bare`, `replay A`, `replay E 1 3`, les 11 questions de `replay B` (26 s, 0,01 \$ affiché, environ 70 000 jetons chacune), `./sorter compare` (32 sur 32, aucune urgence manquée), Open WebUI en mode kit avec `replay RAG 1 7`, puis Open WebUI en mode groupe : `openwebui start` et `openwebui share open` sans l'avertissement, et une vraie question à chacun des deux modèles de base. 78 requêtes sur 78 ont reçu HTTP 200 et nommaient Mistral. Aucun ERROR dans les réponses. 0,03 \$ pour l'ensemble.

### Ce qui n'a pas été testé

- **Un groupe, un vrai Codespace.**
- **Les écrans du site d'OpenRouter** des parties 2, 3 et 8 : personne ne les a suivis avec ce guide, qui n'a pas de captures. La plupart des noms viennent de la documentation d'OpenRouter. **Create API Key** et **Key limit** n'en viennent pas : les vérifier à l'écran.
- **La distribution des clés** aux binômes, et la suppression d'une clé.
- **`google/gemma-4-26b-a4b-it:free` à un autre moment** : son 429 venait de l'entreprise qui l'exploite.
- **Les mêmes notes rejouées plusieurs fois**, pour savoir de combien une note bouge, et **une lecture humaine** d'un échantillon des notes.
- **Un vrai petit solde, un vrai 429 en séance, une vraie limite de clé, la recharge automatique.**
- **Open WebUI avec le modèle DeepSeek par défaut.**
- **Les réglages ZDR, Zero retention only, et `eu.openrouter.ai` avec l'offre Business.**
- **Une séance entière après `workshop-login --europe` avec une vraie clé**, et les quatre autres points d'accès européens.
- **Le mode groupe avec `--europe` et des participant·es** : leurs comptes, les téléphones, un chatbot construit à la main et son passage d'un modèle à l'autre, le lien public d'un vrai Codespace, un chatbot du mode groupe dans une fenêtre de 32k.
- **Les modèles Wildfire RAG de `openwebui sizes` avec `mistral-small-2603`.**
- **Une question tapée dans un écran d'OpenCode ouvert avant le changement de règle.** La ligne qui prévient a été vue, sur un faux OpenRouter.
- **Un modèle servi en Europe par une autre entreprise** : `--europe` nomme `mistral/eu` seul, car ce sont les conditions de Mistral qui ont été lues pour cette route. Il refuse donc un modèle comme `deepseek/deepseek-v4-flash-0731` chez Inceptron (non testé).
- **Le coût d'une séance complète.**

### Notes sur les mesures

- `Free requests left today` est passé de 935 à 873 autour du `replay C` de `north-mini-code`. Ce décompte inclut un ou deux tests de `workshop-login`, d'où 60 à 62 requêtes.
- Le 1er novembre 2026, la [liste publique pour l'Europe](https://eu.openrouter.ai/api/v1/endpoints/zdr) d'OpenRouter montrait 87 points d'accès ZDR pour 76 modèles. 77 d'entre eux, pour 66 modèles, savent utiliser des outils. Ils viennent de cinq entreprises : Mistral, Azure, Amazon Bedrock, Google Vertex et Inceptron.
- Les prix et fenêtres du tableau des modèles viennent de la liste d'OpenRouter du 1er novembre 2026. Le prix de DeepSeek v4 Flash était affiché avec deux décimales, d'où « environ ».

---

## Indicateurs de réussite

- Vous savez dire **quelle clé donne quoi** : `sk-ant-` pour Anthropic et Claude Code, `sk-or-` pour OpenRouter et OpenCode, sans modèle Claude par défaut
- Chaque binôme a **sa propre clé avec une limite de dépense**, la recharge automatique reste désactivée, et aucune clé n'a été montrée à l'écran
- `workshop-login` affiche `Key OK`, et vous savez lire les autres messages
- Vous savez dire **quel modèle utilise chaque outil**, et vous ne prévoyez pas une salle sur des modèles gratuits
- Devant un 429, un 402 ou un 503, vous savez quoi faire sans `--no-europe`
- Avant d'ouvrir un chatbot à des jeunes, `--europe` est actif, la ligne `Warning: with young people...` a disparu après `openwebui start`, votre structure a décidé avec sa personne chargée de la protection des données, et vous savez **ce qu'aucun réglage ne retire**
- Après la dernière séance, chaque clé est supprimée

---

_Cette fiche fait partie du projet [Youth AI Lab](/projets/youth-ai-lab), financé par le programme Erasmus+. Adaptation française de https://github.com/Youth-AI-Lab/yal-openrouter-guide (anglais), contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr). OpenRouter, DeepSeek, Mistral, Google et Cohere sont les noms de leurs propriétaires, sans lien avec ce guide._

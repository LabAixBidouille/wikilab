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
- Un·e adulte qui détient le compte OpenRouter et a un moyen de paiement ([partie 2](#partie-2--le-compte))
- Un Codespace déjà ouvert : celui d'un atelier, du kit ou du guide Open WebUI. Ce guide n'a pas de Codespace à lui. [SETUP.md](https://github.com/Youth-AI-Lab/yal-workshop-kit/blob/main/SETUP.md) du kit dit comment en ouvrir un. Sans Codespace, voir [Ouvrir les ateliers sur son propre ordinateur](/ressources/youth-ai-lab/guide-dev-containers)
- Avant toute séance avec des jeunes : la personne chargée de la protection des données dans votre structure ([section Sécurité](#sécurité-et-protection-des-données)). C'est elle qui répond des données personnelles. Si votre structure n'en a pas, demander à la personne qui signe pour elle
- **Le dépôt du guide** (anglais) : https://github.com/Youth-AI-Lab/yal-openrouter-guide
- **Le kit de la série d'ateliers** : https://github.com/Youth-AI-Lab/yal-workshop-kit
- **La page de présentation des ressources** (anglais) : https://youth-ai-lab.github.io/yal-workshop/resources.html

</div>

<img src="/img/ressources/youth-ai-lab/guide-openrouter/icone.png" alt="Utiliser les outils des ateliers avec une clé OpenRouter" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

:::info[Une recette pour l'animateur·rice]

Ce guide s'adresse aux animateur·rices, éducateur·rices et facilitateur·rices qui animent la série d'ateliers [Construire son propre chatbot : ce qu'il lit, et qui décide](/ressources/youth-ai-lab/construire-chatbot-1-instructions) ou qui suivent [Partager un chatbot avec un groupe grâce à Open WebUI](/ressources/youth-ai-lab/guide-open-webui). Vous ouvrez un compte OpenRouter, vous achetez des crédits, vous créez une clé par binôme avec une limite de dépense, et vous collez chaque clé dans `workshop-login`. Tous les outils des ateliers tournent alors sans Claude. Le dépôt, les commandes et les messages sont en anglais ; cette fiche en est l'adaptation française.

**Vous travaillez avec des jeunes ? Lisez d'abord** [Sécurité et protection des données](#sécurité-et-protection-des-données).

**Besoin d'aide ?** Lire la [partie 7](#partie-7--quand-une-requête-échoue), ou consulter et ouvrir un [ticket sur le dépôt](https://github.com/Youth-AI-Lab/yal-openrouter-guide/issues).

:::

---

## À quoi sert ce guide

Les ateliers sont écrits pour une clé Anthropic : le chatbot tourne avec Claude Code et les modèles Claude. Ce guide donne l'autre route, une clé OpenRouter pour tous les outils des ateliers et du guide Open WebUI. Vous l'utilisez dans le Codespace d'un atelier, du kit ou du guide Open WebUI.

Avec une clé Anthropic, vous n'avez pas besoin de ce guide : suivre [SETUP.md](https://github.com/Youth-AI-Lab/yal-workshop-kit/blob/main/SETUP.md) du kit, ou [Your Anthropic API key](https://github.com/Youth-AI-Lab/yal-openwebui-guide#your-anthropic-api-key) dans le guide Open WebUI. Les deux sortes de clés utilisent les mêmes commandes.

Personne n'a encore suivi ce guide.

:::info[Ce qui change vite]

OpenRouter change ses pages, ses prix et ses quotas. Sauf si une ligne donne une autre date, ce que ce guide dit d'OpenRouter a été lu le 1er novembre 2026. Les captures des pages du compte datent du 2 novembre 2026.

:::

### Les mots de ce guide

- **Codespace** : un ordinateur prêt à l'emploi dans votre navigateur, fourni par GitHub.
- **Binôme** : deux participant·es qui partagent un Codespace et une clé.
- **Kit** : les fichiers et les commandes des ateliers.
- **Modèle** : le programme qui écrit les réponses.
- **Entreprise** : une société qui exploite un modèle. OpenRouter l'appelle _provider_.
- **Point d'accès** (_endpoint_) : une entreprise qui fait tourner un modèle à un endroit.
- **Jeton** : un morceau de mot. Les modèles sont facturés au million de jetons.
- **Prompt** : un texte envoyé à un modèle.
- **Fenêtre** : la quantité de texte qu'un modèle peut lire en une fois.
- **Mode** : une étape du chatbot dans les ateliers ([partie 6](#partie-6--les-modèles-au-1er-novembre-2026)).
- **`replay`** : pose au chatbot toutes les questions de test, chacune dans une nouvelle session, et écrit les réponses dans un fichier.
- **`score`** : demande à un modèle, le juge, de noter ces réponses.
- **`./sorter`** : le petit trieur de messages de l'atelier 6.
- **Open WebUI** : un site de discussion qui tourne dans votre Codespace.
- **`replay RAG`** : les mêmes questions, posées au chatbot d'Open WebUI, qui cherche les morceaux de documents les plus proches de chaque question (RAG) et les donne au modèle.
- **Sait utiliser des outils** : peut chercher dans des fichiers ou appeler un service extérieur.
- **UTC** : l'heure de référence mondiale. Minuit UTC correspond à 1 h à Naples en hiver, à 2 h en été.

## Objectifs d'apprentissage

**À la fin de ce guide, vous serez capable de...**

- **Choisir** entre une clé Anthropic et une clé OpenRouter : dire ce qu'est OpenRouter, quand le prendre, et ce qui reste réservé à Anthropic
- **Ouvrir** un compte au bon nom, acheter des crédits, régler les alertes, puis créer des clés avec une limite de crédit en sachant ce qui se passe à cette limite
- **Enregistrer** une clé avec `workshop-login`, lire chaque message, choisir un modèle, et dire quel modèle sert à chaque outil et ce qui diffère d'une clé Anthropic
- **Préparer** une séance la semaine d'avant et la veille, suivre les dépenses, et réagir à une clé qui fuite
- **Lire** le tableau du 1er novembre 2026 et la page d'un modèle, dire pourquoi un groupe ne peut pas compter sur les modèles gratuits, et reconnaître un 429, un 402, un 403 ou un 503 pour savoir quoi faire pendant une séance
- **Activer** ce que demande l'avertissement sur les jeunes, dire ce qu'aucun réglage ne retire, vérifier les sources et lire les notes sur les mesures

---

## Déroulé du guide

Le guide anglais compte neuf parties, et une section « Before and during a session » placée après la partie 4, reprise ici dans [Avant et pendant une séance](#avant-et-pendant-une-séance). La partie 8, sur les données et les jeunes, est reprise en entier dans [Sécurité et protection des données](#sécurité-et-protection-des-données). La partie 9 est reprise dans [Sources et état du guide](#sources-et-état-du-guide).

:::info[Où sont les captures d'écran]

Les captures du site d'OpenRouter sont dans le [guide en anglais](https://github.com/Youth-AI-Lab/yal-openrouter-guide). Elles appartiennent à OpenRouter, Inc., et la licence de cette fiche ne les couvre pas. Cette fiche ne les reproduit pas : chaque étape décrit avec des mots ce qu'on voit à l'écran.

Captures du terminal : © 2026 Youth AI Lab partners, licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr), reprises du guide en anglais.

:::

### Partie 1 : Choisir sa clé

OpenRouter est une entreprise qui vous donne une seule clé pour les modèles de nombreuses entreprises. Vous lui achetez des crédits, et elle envoie chaque question à une entreprise qui exploite le modèle choisi.

| | Clé Anthropic | Clé OpenRouter |
| --- | --- | --- |
| La clé commence par | `sk-ant-` | `sk-or-` |
| Modèles | Claude | de nombreuses entreprises ; aucun modèle Claude par défaut |
| Programme qui fait tourner le chatbot | Claude Code, ou OpenCode si vous le choisissez | OpenCode, toujours |

Choisir une **clé OpenRouter** si vous voulez les ateliers sans Claude, ou essayer d'autres modèles. Choisir une **clé Anthropic** pour suivre les pages des ateliers telles quelles.

**Ce qui reste réservé à Anthropic : Claude Code.** Dans les ateliers, il n'accepte que les clés Anthropic. Une clé OpenRouter tourne toujours dans OpenCode, un programme libre et gratuit qui fait tourner le même chatbot avec les mêmes commandes.

`openwebui` a deux modes dans cette fiche. Le **mode kit** est celui des ateliers : chaque binôme a son propre Open WebUI, sans comptes. Le **mode groupe** (_class mode_ dans le guide anglais) est celui du [guide Open WebUI](/ressources/youth-ai-lab/guide-open-webui) : un·e animateur·rice ouvre un seul Open WebUI à un groupe, avec des comptes.

:::info[Les chiffres des ateliers ne valent pas ici]

Les coûts, la jauge de contexte et les notes imprimés dans les pages des ateliers ont été mesurés avec Claude. Ils ne valent pas avec une clé OpenRouter. Ce qui a été mesuré avec OpenRouter est en [partie 6](#partie-6--les-modèles-au-1er-novembre-2026).

:::

### Partie 2 : Le compte

Un compte OpenRouter contient de l'argent, et son ou sa titulaire répond de chaque requête faite avec ses clés. Cette partie demande donc plus de soin qu'une inscription ordinaire. À la fin, vous avez un compte au bon nom, des crédits qui couvrent vos binômes, et une alerte par e-mail avant que l'argent ne manque.

Faire cette partie seul·e, jamais avec l'écran projeté. Commencer au moins un jour ouvré avant la séance : la [liste de préparation](#avant-la-séance--préparer-le-compte) dit pourquoi.

#### Décider qui détient le compte

Le ou la titulaire est un·e adulte. Les [conditions d'OpenRouter](https://openrouter.ai/terms) disent : « You must be at least 18 years of age to use the Service. » (il faut avoir au moins 18 ans pour utiliser le service). Si vous agissez pour une structure, vous devez avoir le pouvoir de l'engager. L'[accord de traitement des données](https://openrouter.ai/data-processing-agreement) d'OpenRouter s'applique alors : par les conditions sur les offres Free et Standard, et en copie signée sur demande à partir de l'offre Business.

Le ou la titulaire paie aussi ce qui tourne mal. Les conditions disent : « You are responsible for all activity and charges under its account or API Credentials, whether or not authorized by you » (vous répondez de toute activité et de tous les frais sur votre compte ou vos identifiants d'API, que vous les ayez autorisés ou non), sauf si OpenRouter lui-même a enfreint ses conditions. Nommer donc une personne propriétaire du compte. Le guide conseille aussi une adresse e-mail que la structure garde, pour que le compte ne parte pas avec quelqu'un.

Un compte personnel suffit pour une séance. Une **organization** est un compte séparé avec une réserve de crédits commune, utile seulement si plusieurs adultes partagent la facturation. Décider cela avant le premier achat : OpenRouter ne convertit pas un compte personnel.

<details>
<summary>Si vous choisissez une organization</summary>

Les crédits pourraient ne pas se déplacer ensuite, car les pages d'OpenRouter ne s'accordent pas. La [page sur les organizations](https://openrouter.ai/docs/cookbook/administration/organization-management) autorise un transfert avec la double authentification. Votre adhésion doit être assez ancienne, et une organization qui vient de recevoir un transfert doit attendre avant le suivant. Aucun de ces deux délais n'est donné. Les conditions disent que les crédits ne sont pas transférables. Ne pas compter sur un transfert.

Une organization a au plus 10 membres, sauf accord de l'assistance. Seuls ses admins achètent des crédits et voient la facturation, et les membres voient l'usage des autres (modèle, coût, horaires). Un·e trésorier·e admin suffit : les binômes n'ont jamais besoin d'un compte de membre, ils reçoivent seulement une clé.

</details>

#### Ouvrir le compte

1. Aller sur https://openrouter.ai/sign-up. Le 1er novembre 2026, la page propose **Continue with GitHub**, **Continue with Google**, **Continue with MetaMask** (un portefeuille de cryptomonnaie), ou une adresse e-mail et un mot de passe. Le formulaire demande d'accepter les Terms of Service, la Privacy Policy et les Model Terms. Le guide conseille l'adresse e-mail et un mot de passe : l'adresse reste à la structure, et rien ne confirme que la double authentification s'applique à une connexion par Google ou GitHub.
2. Activer la double authentification, qui demande une seconde preuve à la connexion. OpenRouter ne l'exige que pour transférer des crédits vers une organization, mais ce compte contient votre argent. La documentation donne le chemin **Settings > Preferences**, **Manage**, puis l'onglet **Security**. Une autre page appelle le bouton **Manage Account**. Le 2 novembre 2026, la page Credits a aussi un lien, **Enable two-step verification on your account to transfer credits** (activer la vérification en deux étapes pour transférer des crédits), non testé.
3. Seulement pour une organization : dans **Settings > Preferences**, section Organization, cliquer sur **Create Organization**. Il faut une adresse e-mail vérifiée.

#### Acheter des crédits

Acheter des crédits avant de créer les clés. OpenRouter vend quatre offres : Free, Standard, Business et Enterprise. Standard est un paiement à l'usage : vous payez ce que vous consommez, sans abonnement.

Chaque requête du kit porte une règle sur les données ([partie 5](#partie-5--les-outils)), et le [tableau des offres](https://openrouter.ai/pricing) donne ce type de routage, **Data Policy-Based Routing**, à l'offre Standard et au-dessus, pas à l'offre Free. Un compte qui n'avait rien acheté a bien obtenu des réponses avec cette règle le 1er novembre 2026, sur des modèles payants, mais il s'est arrêté sur un 402 après 0,17 \$ de découvert ([402](#402--plus-de-crédits-ou-une-limite)). Ne pas compter dessus.

Après le premier achat fait pour ce guide, OpenRouter a cessé de marquer le compte comme gratuit. Savoir si un premier achat fait passer tout seul à Standard : à compléter.

Le 1er novembre 2026, sur ce tableau des offres, la ligne **Platform fees** indique 5,5 % pour Standard. **Budgets & Spend Controls** et **Data Policy-Based Routing** sont absents de Free et présents sur Standard : le second est la règle du kit. **EU in-region routing** n'existe que sur Business et Enterprise, et revient dans [Obligatoire : hébergé en Europe](#obligatoire--hébergé-en-europe).

Un achat va de 5 \$ à 25 000 \$, sans remise sur le volume. Vous payez des frais à l'achat des crédits, et chaque requête coûte ensuite le prix catalogue de l'entreprise. Les pages d'OpenRouter ne donnent pas les mêmes frais : la page des prix dit 5,5 % sur l'offre Standard, et la [FAQ](https://openrouter.ai/docs/faq) dit 5,5 % avec un minimum de 0,80 \$ (lu le 2 novembre 2026). La fenêtre d'achat a demandé davantage : lire cette fenêtre avant de payer. Voici ce qu'elle montrait le 2 novembre 2026, avec l'adresse de facturation utilisée pour ce guide, sans rien payer. **Service fees** désigne les frais, **Sales Tax / VAT** la taxe sur les ventes ou la TVA et **Total due** le total à payer.

| Crédits | **Service fees** | **Sales Tax / VAT** | **Total due** |
| --- | --- | --- | --- |
| 10 \$ | 0,85 \$ | 2,17 \$ | 13,02 \$ |
| 100 \$ | 5,93 \$ | 21,19 \$ | 127,12 \$ |

Avec cette adresse, prévoir environ 30 % en plus des crédits. Les prix ne comprennent pas les taxes : Stripe, l'entreprise de paiement, ajoute la TVA ou la GST à l'achat là où votre pays l'exige. Ici, elle était de 20 % des crédits plus les frais. Le taux pour une association n'est pas confirmé. Tous les paiements par Stripe sont en dollars américains : écrire donc le budget en dollars. Votre banque peut ajouter un coût de conversion (déduction du guide, montant inconnu).

L'offre Standard accepte les cartes de crédit et de débit, AliPay et USDC (une cryptomonnaie). Le paiement sur facture et les bons de commande sont réservés à Enterprise. Aucun virement bancaire ni SEPA n'est indiqué, et PayPal est seulement annoncé. Une association sans carte doit d'abord régler ce point. Le guide déconseille la cryptomonnaie : elle n'est jamais remboursée.

La [page Credits](https://openrouter.ai/settings/credits) a un encadré **Buy Credits** avec le bouton **Add credits**, et un encadré **Auto Top-Up** avec le bouton **Manage**. Un achat passé y a un lien **View Invoice** et, sur la même ligne, un bouton **Refund**.

1. Ouvrir la page Credits et cliquer sur **Add credits**. Une fenêtre **Purchase Credits** s'ouvre.
2. Laisser **Send me invoices** activé (m'envoyer les factures). La première fois, d'après la documentation, cette fenêtre demande une adresse de facturation, puis un moyen de paiement. La capture du guide anglais vient d'un compte qui avait déjà payé.
3. Si votre structure a un numéro de TVA, déplier **Edit Tax ID** avant de payer, choisir le pays, saisir le numéro et cliquer sur **Save**. Il ne figure que sur les factures à venir. Une correction passe par la page [Support](https://openrouter.ai/support).
4. Sous **Amount**, saisir le montant en dollars ([combien](#ce-que-coûte-une-séance)). Lire **Service fees**, **Sales Tax / VAT** et **Total due**, puis cliquer sur **Purchase**.
5. Attendre les crédits. Ils peuvent mettre jusqu'à une heure à apparaître. Sans reçu par e-mail, votre carte a peut-être été refusée : essayer une autre carte ou un autre moyen de paiement.

Dans la fenêtre **Purchase Credits**, on lit de haut en bas **Send me invoices**, **Amount**, l'adresse de facturation avec **Edit Tax ID**, puis les trois montants et le bouton **Purchase**. Ces trois montants sont ceux à reporter dans votre budget. Pour la comptabilité de votre projet, chaque achat a un lien **View Invoice** sous **Recent Transactions**, sur la page Credits.

Dans les 24 heures, le bouton **Refund** de la page Credits rend les crédits non utilisés sur votre moyen de paiement, sans les frais. Après 24 heures, les crédits non utilisés ne sont plus remboursables, sauf à la résiliation ou si la loi l'exige. Les frais ne sont jamais remboursés. OpenRouter se réserve aussi le droit de faire expirer les crédits non utilisés 365 jours après l'achat, et supprimer le compte les fait perdre. Un projet sur deux ans achète donc de petits montants, pas un stock (conseil du guide).

#### Laisser la recharge automatique désactivée

La recharge automatique (_auto top-up_) achète des crédits sans vous, quand le solde passe sous un montant que vous fixez. La laisser désactivée. OpenRouter prévient dans sa [documentation](https://openrouter.ai/docs/api_reference/authentication) : « A key with no limit lets a leaked key or a runaway agent spend your entire balance, including any auto top-ups. » (une clé sans limite laisse une clé divulguée ou un agent hors de contrôle dépenser tout le solde, recharges automatiques comprises). Garder une limite de crédit sur chaque clé ([partie 3](#partie-3--une-clé-par-binôme)).

Pour le vérifier, cliquer sur **Manage** dans l'encadré **Auto Top-Up** de la page Credits. La fenêtre **Auto Top Up** a un seul interrupteur, **Enable auto top up**, et il était désactivé sur le compte du guide le 2 novembre 2026.

#### Régler les alertes

L'offre Standard prévient par e-mail pour le solde entier. Une alerte par clé n'existe que sur les offres Business et Enterprise : celle-ci est donc la seule que vous aurez.

1. Ouvrir [Settings → Notifications](https://openrouter.ai/settings/notifications).
2. Activer **Low balance alert** (alerte de solde bas) et fixer son montant. Le 1er novembre 2026, il est de 100 \$ par défaut, trop haut pour un compte d'atelier. Le guide suggère la somme des limites d'une séance : avec 6 binômes à 1 \$, mettre 6 \$. L'e-mail arrive alors quand le solde ne couvre plus une séance complète.
3. Activer **Model deprecation alert** (alerte de retrait d'un modèle). Elle vous écrit quand un modèle utilisé récemment va être retiré.

Personne n'a vérifié si ces alertes démarrent activées ou désactivées (non testé).

#### Ce que coûte une séance

Le 5 novembre 2026, les commandes des ateliers 1 à 5 ont été jouées une fois, l'une après l'autre, comme le ferait un binôme, avec le modèle par défaut `deepseek/deepseek-v4-flash`. C'était dans un conteneur de l'image des ateliers de ce jour-là (2026.11.4, OpenCode 2.1.4), pas dans un Codespace, et sans groupe. Les commandes du terminal ont coûté environ **0,12 \$** en tout, d'après le coût qu'OpenRouter écrit dans chaque réponse : moins d'un centime pour l'atelier 1, environ 0,03 \$ pour les ateliers 2 et 3, 0,01 \$ pour l'atelier 4 et 0,04 \$ pour l'atelier 5. Les questions posées à Open WebUI le même jour, sur un portable, ont ajouté 0,004 \$. Non comptés : `replay RAG` et les chatbots Open WebUI des ateliers 1, 3, 4 et 5. L'atelier 5 a coûté le plus, puis l'atelier 3 ; par question, le mode B est le plus cher. Un vrai binôme pose plus de questions dans la conversation : ces chiffres sont donc un minimum.

Avant ce passage, le guide avait fait une estimation. Lors des essais, un `replay` de 11 questions a affiché 0,01 à 0,02 \$. Le guide suppose qu'un binôme pose à peu près autant de questions que quatre `replay` en une séance, soit 44 questions : environ 0,08 \$. Le pire cas est de 44 questions en mode B au prix catalogue, environ 0,51 \$ (70 000 jetons à 0,165 \$ le million, avec `mistral-small-2603`). Le guide suggère donc une limite de **1 \$ par clé pour une séance**, et de **3 \$ pour une clé qui suit les six ateliers**. C'est l'atelier 2 qui utilise le mode B, qui envoie tous les documents avec chaque question : on ne multiplie donc pas 1 \$ par six. La [partie 6](#partie-6--les-modèles-au-1er-novembre-2026) donne les coûts mesurés.

Acheter des crédits pour le nombre de binômes, plus les frais et les taxes. Pour 6 binômes à 1 \$, il faut 6 \$ de crédits. Dans [le tableau plus haut](#acheter-des-crédits), 10 \$ de crédits coûtent 13,02 \$ au total. Garder une marge au-dessus des 6 \$, car OpenRouter peut refuser des requêtes sur un petit solde ou un compte récent alors qu'il reste de l'argent ([402](#402--plus-de-crédits-ou-une-limite)). OpenRouter ne donne aucun chiffre. Marge suggérée par le guide : à compléter (non testé). Une requête qui échoue ne coûte rien : OpenRouter écrit que « An attempt that errors is not charged for its model tokens » (une tentative en erreur n'est pas facturée pour les jetons du modèle).

### Partie 3 : Une clé par binôme

Une clé est un mot de passe qui dépense de l'argent : chaque binôme a donc la sienne. Une clé qui fuite ne dépense alors qu'une limite et non tout votre solde, vous lisez les dépenses de chaque binôme à part, et vous pouvez arrêter un binôme sans arrêter les autres.

La page [**API keys**](https://openrouter.ai/keys) a un bouton **New key** et une ligne par clé, avec les colonnes **Expires**, **Key usage** et **Key limit**, et un menu en bout de ligne.

1. Sur la page **API keys**, cliquer sur **New key**. La documentation appelle ce bouton **Create API Key**.
2. Dans la fenêtre, remplir **Name**. Nommer la clé d'après le binôme, le lieu et la date, par exemple `pair-3-aix-2026-11`. Les noms restent visibles dans les pages qui suivent les dépenses : ne jamais utiliser le nom d'un·e jeune.
3. Choisir **Expiration**. Ce champ est obligatoire. Prendre une valeur qui se termine peu après votre dernière séance, et lire la date sous le champ. OpenRouter écrit : « You can't change the expiration of an existing key. » (on ne peut pas changer l'expiration d'une clé existante). La liste des valeurs autres que `7 days` : à compléter.
4. Sous **Key limit**, régler la **Credit limit** : choisir **Custom amount** et taper le montant en dollars. Le guide suggère 1 \$ pour une séance, 3 \$ pour les six ateliers ([son estimation](#ce-que-coûte-une-séance)). OpenRouter recommande une limite sur chaque clé. Vous pouvez aussi n'en mettre aucune : ne le faites pas.
5. Laisser **Reset limit every...** sur **N/A** (pas de remise à zéro). La limite plafonne alors tout l'usage de la clé, comme le dit la phrase sous le montant : « Requests are rejected once this key has used \$1 in total, until you raise its credit limit. » (les requêtes sont refusées quand cette clé a consommé 1 \$ au total, jusqu'à ce que vous remontiez sa limite).
6. Cliquer sur **Create**. Copier la clé. Elle commence par `sk-or-`. La mettre tout de suite dans une note privée : OpenRouter dit qu'une clé de gestion ne s'affiche qu'une fois, et une clé ordinaire sans doute aussi (non testé).
7. Recommencer pour le binôme suivant.
8. Donner à chaque binôme sa clé en privé, par message direct ou sur papier. Ne jamais montrer une clé sur l'écran projeté.

Sur la page **API keys**, chaque ligne montre ensuite la date d'expiration, et ce que la clé a dépensé par rapport à sa limite.

OpenRouter peut créer une première clé pour vous à l'inscription. Sa documentation donne à cette clé une limite de 100 \$ et une expiration après 180 jours, et la `Default key` de la capture du guide anglais montre 10 \$ : lire donc votre propre ligne. Baisser cette limite avant qu'un binôme l'utilise, ou créer vos propres clés.

#### À la limite

OpenRouter écrit : « Once a key has used its credit limit, requests with it are rejected until you raise the limit on the key's page, or, for a daily, weekly, or monthly limit, until the limit resets. » (une clé qui a consommé sa limite voit ses requêtes rejetées jusqu'à ce que vous remontiez la limite sur la page de la clé ou, pour une limite quotidienne, hebdomadaire ou mensuelle, jusqu'à sa remise à zéro). Avec **N/A**, rien ne se remet à zéro. Sur la page de la clé, une limite quotidienne se remet à zéro à minuit UTC, une limite hebdomadaire le lundi, une limite mensuelle le 1er.

Après `replay`, `score` ou `./sorter`, vous voyez l'un des messages de la [partie 7](#402--plus-de-crédits-ou-une-limite). La page d'OpenRouter cite ce cas à la fois sous 402 et sous [403](#403--une-limite-ou-une-de-vos-règles) : vous pouvez voir l'un ou l'autre. Personne n'a encore atteint une vraie limite de clé (non testé).

Pour remonter une limite, ouvrir la clé depuis la page **API keys**, changer la **Credit limit** et confirmer avec la coche. La page indique l'état de la clé, **Enabled**, et la date d'expiration, qui ne peut pas changer. **Reset limit** y reste sur **N/A**. Les boutons **Activity** et **Logs** montrent l'activité et les journaux de cette clé seule.

Le kit garde les réponses assez courtes pour qu'une petite limite n'arrête pas une question courte.

#### Facultatif : un plafond pour tout le groupe

Cette étape n'est pas nécessaire : la limite de chaque clé plafonne déjà chaque binôme. Un budget de **workspace** ajoute un total pour le groupe, pour qu'un accident s'arrête à un chiffre que vous avez choisi. Un workspace (espace de travail) est un groupe de clés avec ses propres réglages. Votre compte a déjà un **Default workspace**. L'offre Standard en permet 5 : un par partenaire ou par groupe est donc possible, et les crédits restent partagés entre eux. Si vous en créez un, créer ses clés à l'intérieur.

1. Ouvrir la page **Settings** du workspace. Pour le Default workspace : https://openrouter.ai/workspaces/default/settings.
2. Descendre jusqu'à **Budgets** et cliquer sur **Add budget**.
3. Choisir **lifetime**, qui ne se remet jamais à zéro, et saisir le nombre de binômes multiplié par la limite d'une clé.
4. Cliquer sur **Save**.

Les requêtes déjà en cours se terminent : la dépense peut donc dépasser légèrement le budget. Ensuite, toutes les clés du workspace s'arrêtent, et les outils affichent les lignes de la [partie 7](#403--une-limite-ou-une-de-vos-règles). Personne n'a encore réglé un vrai budget (non testé).

### Partie 4 : Une commande, `workshop-login`

Cette commande est le seul lien entre votre clé et les outils. Elle enregistre la clé, la vérifie et choisit le modèle.

Chaque binôme le fait une fois, dans son propre Codespace, avec la clé que vous lui avez donnée. Le faire d'abord une fois vous-même avec une clé, pour savoir ce que les binômes verront. Dans le terminal :

```bash
workshop-login
```

Coller la clé du binôme, puis appuyer sur Entrée. Un `*` s'affiche par caractère. La première fois, le navigateur peut demander la permission de coller : accepter, puis ne coller qu'une fois. La commande teste la clé, puis envoie une très courte requête au modèle. Il faut voir :

![Terminal après workshop-login. Une étoile s'affiche pour chaque caractère de la clé collée. Cadre 1 : Key received, avec seulement le début et la fin de la clé, ici une fausse clé. Cadre 2 : Key OK, avec OpenCode, OpenRouter et le modèle openrouter/deepseek/deepseek-v4-flash.](/img/ressources/youth-ai-lab/guide-openrouter/terminal-login.png)

La ligne qui compte est celle du cadre 2. Cette capture est une image d'essai, faite avec une fausse clé, sans vrai compte.

Dans le guide Open WebUI (mode groupe), un avertissement s'affiche d'abord :

![Terminal dans le Codespace du guide Open WebUI après workshop-login. Cadre 1 : la ligne Warning, qui demande, avec des jeunes, d'activer les modèles à zéro conservation des données hébergés en Europe par workshop-login --europe. Cadre 2 : Key OK, avec le modèle deepseek/deepseek-v4-flash.](/img/ressources/youth-ai-lab/guide-openrouter/terminal-class.png)

Cet avertissement est expliqué dans [Sécurité et protection des données](#sécurité-et-protection-des-données).

#### Ce que veut dire chaque message

Chercher ce que la commande a affiché dans la première colonne. Partir de la fin : une dernière ligne comme `Nothing saved.` peut suivre la ligne qui compte. Les lignes avec `HTTP 429` ou `HTTP 503` renvoient à la [partie 7](#partie-7--quand-une-requête-échoue).

| Vous voyez | Cela veut dire | À faire |
| --- | --- | --- |
| `Nothing was pasted. Copy the key again, then type workshop-login and paste it once.` | La commande n'a rien reçu. | Recopier la clé, et faire ce que dit la ligne. |
| `The key seems to have been pasted twice. Type workshop-login again and paste it only once.` | Deux clés sont arrivées en une. | Faire ce que dit la ligne. |
| `This does not look like a key (it should start with sk-ant-, or sk-or- for OpenRouter with OpenCode). Nothing saved.` | Le texte collé n'est pas une clé. Dans le guide Open WebUI, la ligne se termine par `for OpenRouter). Nothing saved.` | Recopier la clé depuis votre note privée. |
| `OpenRouter could not be reached (network?). Your earlier key is kept. Type workshop-login again.` | Aucune réponse n'est venue d'OpenRouter. | Vérifier le réseau, et regarder la [page d'état](https://status.openrouter.ai/) d'OpenRouter. |
| `--europe needs an OpenRouter key (sk-or-…). This is an Anthropic key. Nothing saved.` | Vous avez tapé `--europe` et collé une clé Anthropic. | Coller la clé OpenRouter. |
| `Key saved, but this OpenRouter account has no credits left. Add credits, or choose a free model: workshop-login --models free` | Le compte est vide, ou cette clé est à sa limite. | Ajouter des crédits, ou remonter la limite. |
| `Key saved, but this key has reached its spending limit. Tell the facilitator.` | La clé est à sa limite de crédit, ou son workspace à son budget. Un garde-fou (_guardrail_) peut aussi afficher cette ligne. | Lire [403](#403--une-limite-ou-une-de-vos-règles). |
| `Key saved, but no company can serve the model <name> under the workshop's data rule. Choose another model: workshop-login --models openrouter` | Vos règles ne laissent aucune entreprise pour ce modèle, ou OpenRouter l'a retiré mais le liste encore. | Choisir un autre modèle. |
| `Key saved, but Mistral does not serve the model <name> in Europe with zero data retention. Choose another model, for example: workshop-login --model <name>` | Vous avez activé `--europe`, et ce modèle n'a pas d'entreprise de ce type. | Taper la commande proposée. |
| `OpenCode is already open and keeps the old data rule: close it and start it again. A replay stops by itself before its next question.` | Vous avez changé `--europe` pendant qu'OpenCode tournait. | Fermer ce chatbot, puis le relancer. |
| `Your data rule changed during this replay (workshop-login --europe or --no-europe). The next question was not sent.` | Même chose, pendant un `replay`. La question en cours s'est terminée sous l'ancienne règle. | Retaper le même `replay`. |
| `Open WebUI keeps the old data rule until you type: openwebui start` | Vous avez changé `--europe` pendant qu'Open WebUI tournait. | Taper `openwebui start`. |
| `Your data rule changed since Open WebUI started (workshop-login --europe).` | Même chose, et vous avez tapé une autre commande `openwebui`. | Taper `openwebui start`, puis retaper la commande. |
| `Key saved, but the quota of the model <name> is reached for now (HTTP 429). Try again later, or choose another model: workshop-login --models openrouter` | Trop de requêtes, ou quota gratuit épuisé. | Voir [429](#429--trop-de-requêtes). |
| `Key saved, but the model <name> is busy (HTTP 503). Try again in a few minutes, or choose another model: workshop-login --models openrouter` | Le modèle ne peut pas répondre maintenant. | Voir [503](#503--occupé-ou-aucune-entreprise). |
| `Key saved, but OpenRouter refuses it (HTTP 401). Check it with the facilitator.` | La clé est fausse, désactivée ou expirée. | En créer une nouvelle. |
| `OpenRouter refuses this key (HTTP 401). Your earlier key is kept. Check it with the facilitator.` | Même chose, et la clé enregistrée avant fonctionne encore. | En créer une nouvelle. |
| `Key saved, but the test answered HTTP 403 (model <name>): <details>. Tell the facilitator.` | OpenRouter a refusé la requête, et ses mots ne nomment aucune limite. | Voir [403](#403--une-limite-ou-une-de-vos-règles). |
| `This is an OpenRouter key: Claude Code in the workshop needs an Anthropic key (sk-ant-…).` | Vous avez demandé `--engine claude`. | Taper `workshop-login` seul. |
| `OpenRouter has no model <name> that can use tools.` | Nom faux, modèle sans outils, ou modèle sorti de la liste d'OpenRouter. | Lire les noms proches affichés dessous, ou choisir un autre modèle. |

Dans le guide Open WebUI, certaines de ces lignes se terminent autrement, car elles s'adressent à une personne seule.

Après `workshop-login --europe`, la ligne sur les crédits s'arrête à `Add credits.`, car aucun modèle gratuit ne tourne en Europe. Les lignes qui proposent `workshop-login --models openrouter` nomment à la place un modèle Mistral, jamais celui qui vient d'échouer.

#### Choisir un autre modèle

```bash
workshop-login --models           # les modèles du fournisseur de la clé qui savent utiliser des outils
workshop-login --models free      # les gratuits
workshop-login --model mistralai/mistral-small-3.2-24b-instruct
```

Copier le nom depuis ces listes, avec ou sans le `openrouter/` devant : les deux marchent. Ce n'est pas le titre qu'affiche le site d'OpenRouter ([Lire la page d'un modèle](#lire-la-page-dun-modèle-avant-de-sy-fier)). Quand la commande demande la clé, ne rien coller et appuyer sur Entrée : elle garde la clé enregistrée. Avec un modèle gratuit, les dernières lignes ajoutent `Free requests left today: <number>.`

![Terminal après workshop-login --models free. Une liste de 13 noms de modèles qui finissent par :free. Cadre 1 : la dernière ligne, To use one: workshop-login --model suivi du nom du modèle.](/img/ressources/youth-ai-lab/guide-openrouter/terminal-free.png)

Cette liste dit ce qui existe au 1er novembre 2026. La lire avec [Les modèles gratuits](#les-modèles-gratuits) : un groupe ne peut pas compter dessus.

Ce qui tourne déjà garde l'ancien modèle. Fermer le chatbot et le relancer, ou taper `openwebui start`. Aucune ligne ne le rappelle quand seul le modèle change.

Une nouvelle clé revient au modèle par défaut, sauf si `--model` en nomme un. Une clé Anthropic collée après une clé OpenRouter revient aussi à Claude Code, sauf si vous avez choisi OpenCode avec `--engine`. Si Open WebUI tourne, vous voyez `Open WebUI keeps the old key until you type: openwebui start`.

#### Les commandes de ce guide

Ce tableau est la version courte de cette partie, à garder sous la main pendant une séance.

| Commande | Ce qu'elle fait |
| --- | --- |
| `workshop-login` | Enregistre une clé et la teste. Si vous ne collez rien et appuyez sur Entrée, elle garde la clé enregistrée. |
| `workshop-login --models` | Liste les modèles du fournisseur de votre clé qui savent utiliser des outils. |
| `workshop-login --models openrouter` | La même liste que `--models` avec une clé OpenRouter. Certains messages la demandent. |
| `workshop-login --models free` | Liste les gratuits. |
| `workshop-login --model <name>` | Choisit le modèle du chatbot. Ne change ni le juge ni le trieur. |
| `workshop-login --europe` | Active la règle décrite dans [Obligatoire : hébergé en Europe](#obligatoire--hébergé-en-europe). |
| `workshop-login --no-europe` | Retire cette règle. Jamais pendant une séance avec des jeunes. |

### Avant et pendant une séance

Aucun groupe n'a encore fait cela. Ce qui suit vient de la documentation d'OpenRouter et des mesures du guide, et le calendrier est un conseil du guide : aucune source ne donne de chiffre.

#### Avant la séance : préparer le compte

Acheter pendant la semaine d'avant, une fois la séance sûre. Un achat demande au moins un jour ouvré : les crédits peuvent mettre une heure à apparaître, une carte peut être refusée, et l'assistance de l'offre Standard passe par e-mail, sans délai de réponse indiqué. Après 24 heures, le remboursement se ferme : si la date peut bouger, attendre avant de payer.

Un compte récent demande le plus de soin. OpenRouter limite l'argent bloqué par les requêtes en cours sur les comptes à petit solde et, pour l'instant, sur les comptes récents. Un compte récent avec un solde serré et une salle pleine est le pire cas : garder donc votre marge et tester à l'avance.

**La semaine d'avant :**

- [ ] Les crédits sont sur la page Credits : le nombre de binômes multiplié par la limite, plus une marge. La facture ajoute les frais et les taxes.
- [ ] L'alerte de solde bas est réglée, et l'alerte de retrait d'un modèle est activée.
- [ ] Il y a une clé par binôme, nommée, avec une limite de crédit et une date d'expiration.
- [ ] Une clé donne `Key OK` dans un Codespace.
- [ ] Vous avez lu la page du modèle que vous allez utiliser ([comment](#lire-la-page-dun-modèle-avant-de-sy-fier)).
- [ ] Avec des jeunes : la personne chargée de la protection des données a répondu, et vous avez le consentement parental écrit ([Sécurité et protection des données](#sécurité-et-protection-des-données)).
- [ ] Avec des jeunes : les clés restent aux adultes, et aucun·e jeune ne crée ni n'utilise sa propre clé ([point 1 de Ce qu'aucun réglage ne retire](#ce-quaucun-réglage-ne-retire)). Votre structure a décidé en sachant que cette lecture de la règle des 18 ans vient du chat d'assistance d'OpenRouter, pas de ses conditions. `--europe` ne lève pas cette règle.

**La veille :**

- [ ] Décider ce que vous direz aux binômes : avec le modèle par défaut, ne taper que des questions inventées ou publiques, jamais rien de réel sur une personne. 5 de ses 17 entreprises gardent les questions, et personne n'a lu les conditions des 17 ([Ce que disent les conditions de chaque entreprise](#ce-que-disent-les-conditions-de-chaque-entreprise)).
- [ ] Taper `workshop-login`. Quand il demande la clé, ne rien coller et appuyer sur Entrée : il faut voir `Key OK`. Un modèle retiré par OpenRouter donne une autre ligne : `no company can serve the model` s'il est encore dans la liste publique, `OpenRouter has no model` s'il l'a quittée. La documentation d'OpenRouter ne dit pas laquelle arrive. Un nouveau prix ne donne aucun message : OpenRouter continue de servir le modèle et facture le nouveau tarif.
- [ ] Taper un `replay` court, comme `replay D 8 11`. `workshop-login` envoie une toute petite requête, et un chatbot qui utilise des outils se comporte autrement.
- [ ] Relire la page du modèle : prix, entreprises, fenêtre. Ils peuvent changer.
- [ ] Vérifier que le solde couvre encore la séance.
- [ ] Préparer les clés en messages privés ou sur papier. Aucune ne va dans une diapositive.
- [ ] Avec des jeunes : `workshop-login --europe` affiche `hosted in Europe` ([Obligatoire : hébergé en Europe](#obligatoire--hébergé-en-europe)).

**Le matin de la séance :** regarder la [page d'état](https://status.openrouter.ai/) d'OpenRouter.

Le guide n'a trouvé aucune liste des pays que bloque OpenRouter. La section 5.7 des conditions dit que certaines entreprises de modèles refusent certains pays ou entités, et que contourner cela avec un VPN ou un proxy (des outils qui cachent d'où l'on se connecte) est une violation grave des conditions. Ne pas le faire. Un Codespace tourne dans un centre de données : le pays vu peut donc ne pas être celui de votre salle (déduction du guide). Rien de ce qui a été lu ne bloque la France, l'Espagne, l'Italie ou la Belgique, mais aucune séance n'y a encore eu lieu (non testé).

#### Pendant la séance

Garder les pages d'OpenRouter sur votre propre écran, pas sur l'écran projeté. Aucune commande ne montre à un binôme l'argent qui reste sur sa clé : c'est donc vous qui le suivez.

La vue la plus rapide est la page [API keys](https://openrouter.ai/keys) : **Key usage** face à **Key limit**, pour chaque binôme. Pour plus de détail, ouvrir [Activity](https://openrouter.ai/activity).

Son onglet **Overview** montre **Total spend**, la dépense totale, et **Top API Keys**, les clés qui dépensent le plus. **Cache hit rate** peut s'ignorer pendant une séance. Pour lire ce qu'un binôme a dépensé, cliquer sur l'icône de filtre, à côté de la période (par exemple **Past 1 Month**), choisir **API Key** parmi **Model**, **Router**, **Provider**, **App** et **Region**, puis choisir la clé dans la liste.

Pour une requête à la fois, ouvrir [Logs](https://openrouter.ai/logs) : une ligne par réponse, avec le modèle, l'entreprise, l'état et la clé d'API. Une ligne s'ouvre sur son coût et ses jetons. Par défaut, ces pages ne montrent aucun texte des questions. Garder cela ainsi ([Facultatif : la même règle pour tout le compte](#facultatif--la-même-règle-pour-tout-le-compte)).

Un binôme qui s'arrête a atteint sa limite, ou le compte est vide : voir [402](#402--plus-de-crédits-ou-une-limite). Des crédits ajoutés pendant une séance peuvent mettre jusqu'à une heure à apparaître, d'où la marge.

Une clé qui fuite demande d'agir, même si personne ne l'a encore utilisée. Une clé montrée sur l'écran projeté compte comme divulguée (lecture du guide). OpenRouter cherche les clés sur GitHub et envoie un e-mail quand il en trouve une, mais sa documentation ne dit pas qu'il désactive la clé à votre place. La limite de crédit borne les dégâts, et vous payez ce que la clé a dépensé.

1. Sur la page [API keys](https://openrouter.ai/keys), noter le **Key usage** de cette clé : c'est ce qu'elle a dépensé jusqu'ici.
2. Ouvrir [Security settings](https://openrouter.ai/settings/security), onglet **Key safety**, et choisir **Archive** sur cette clé. C'est définitif, et il faut taper `archive` pour confirmer. Le conseil d'OpenRouter en cas de fuite est de « delete the compromised key and create a new one » (supprimer la clé compromise et en créer une nouvelle), et archiver est ce que ses autres pages appellent supprimer. Ne pas s'arrêter à **Disable** : cet onglet ne montre plus une clé désactivée, et vous ne pourriez plus l'archiver depuis là. Personne n'a encore archivé de clé avec ce guide (non testé).
3. Créer une nouvelle clé comme en [partie 3](#partie-3--une-clé-par-binôme).
4. Dans le Codespace du binôme, taper `workshop-login` et coller la nouvelle clé. Fermer le chatbot et le relancer, ou taper `openwebui start`.
5. Ouvrir Activity et filtrer sur l'ancienne clé, pour voir ce qu'elle a fait. Rien ne confirme qu'une clé archivée reste dans ce filtre : c'est la raison de l'étape 1.
6. Écrire à [support@openrouter.ai](mailto:support@openrouter.ai) : les conditions demandent de signaler rapidement une compromission.

#### Après la dernière séance

Une clé dont la limite ne se remet jamais à zéro reste utilisable jusqu'à sa date d'expiration, ou jusqu'à ce que vous la retiriez. La limite protège l'argent, pas l'accès. Fermer donc chaque clé sur la page [Security settings](https://openrouter.ai/settings/security).

1. Pour le budget de votre projet, ouvrir Activity, onglet **Explore**, grouper les dépenses par clé d'API, et les télécharger en CSV ou en PDF. Le faire d'abord : rien ne confirme que les clés archivées gardent leur nom dans Activity. OpenRouter décrit ce clic de deux façons, il peut donc différer (non testé). Selon la lecture du guide, avec des noms comme `pair-3-aix-2026-11`, ce rapport ne contient aucune donnée personnelle. Personne n'a encore ouvert d'export : regarder le vôtre avant de le transmettre.
2. Dans l'onglet **Key safety**, sélectionner les clés des binômes et choisir **Archive**. C'est définitif, et il faut taper `archive` pour confirmer. D'autres pages d'OpenRouter appellent cela supprimer une clé. Personne n'a encore archivé de clé avec ce guide (non testé).
3. Dans l'onglet **Overview**, lire les quatre cartes : **No spend limit** (sans limite de dépense), **Never expires** (n'expire jamais), **Never used or idle 90+ days** (jamais utilisée, ou inactive depuis 90 jours ou plus), **Safe to remove** (peut être retirée). Chacune montre des clés que vous avez peut-être oubliées.

### Partie 5 : Les outils

Les commandes ne changent pas avec la clé, mais les modèles derrière elles changent. Ce tableau est à lire quand quelqu'un demande quel modèle a répondu.

| Outil | Avec une clé Anthropic | Avec une clé OpenRouter |
| --- | --- | --- |
| `workshop`, `replay` | Claude Code, `claude-sonnet-5-5` | OpenCode, `deepseek/deepseek-v4-flash`, ou votre `--model` |
| `score` (le juge) | `claude-haiku-5-5` | `deepseek/deepseek-v4-flash` |
| `openwebui`, mode kit (`replay RAG` compris) | `claude-sonnet-5-5` | `deepseek/deepseek-v4-flash`, ou votre `--model` |
| `openwebui`, mode groupe | `claude-sonnet-5-5` et `claude-haiku-5-5`, moins cher | `deepseek/deepseek-v4-flash`, et `mistralai/mistral-small-3.2-24b-instruct` en second modèle |
| `./sorter compare` (atelier 6) | `claude-haiku-5-5` | `mistralai/mistral-small-3.2-24b-instruct` |

`./sorter claude` reste un autre nom de `./sorter compare`. Avec une clé OpenRouter, il n'appelle pas Claude. Avec `workshop-login --europe`, la dernière colonne change : le chatbot et le premier modèle du mode groupe sont `mistralai/mistral-small-2603`, et le juge, le second modèle et le trieur sont `mistralai/mistral-small-3.2-24b-instruct` ([Obligatoire : hébergé en Europe](#obligatoire--hébergé-en-europe)).

Quatre points diffèrent d'une clé Anthropic. Avec OpenCode, aucune commande du terminal ne passe sans demande : le chatbot cherche donc avec les outils `read`, `grep` et `glob` d'OpenCode. `replay` tourne dans une copie du kit sans le matériel de test.

OpenRouter enverrait une question à toute entreprise qui exploite le modèle : le kit ajoute donc `data_collection: deny` à chaque requête. Cela écarte les entreprises qui peuvent collecter les données ou s'entraîner dessus. Certaines des autres gardent les questions ([Ce que veut dire zéro conservation des données](#ce-que-veut-dire-zéro-conservation-des-données)).

OpenRouter écrit le coût de chaque requête dans sa réponse. À partir d'OpenCode 2.2.5, `replay` affiche ce coût. OpenCode 2.1.4 l'ignore et calcule le coût à partir du prix du modèle, quand il connaît ce prix. Sans coût ni prix, `replay` affiche `cost: not known`. `replay RAG` affiche `cost: not shown by Open WebUI`.

### Partie 6 : Les modèles au 1er novembre 2026

Vous pouvez animer une séance sans lire cette partie : les choix par défaut sont faits. La lire avant de changer de modèle, et pour savoir pourquoi ces choix-là.

Ces résultats sont les mesures d'une journée, et les prix et quotas d'OpenRouter changent. Un mode est une étape du chatbot dans les ateliers : `bare` est le modèle seul, A a ses instructions, B toutes ses connaissances d'un coup, C cherche dans les documents, D ajoute des outils extérieurs, E ajoute un wiki. Les modes bare, A, C, D et E ont tourné sur 11 questions (22 points), et B sur 3 (6 points).

| Modèle | bare | A | B | C | D | E | Réponses vides ou en échec | Ce qu'il faut payer |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `deepseek/deepseek-v4-flash` | 2/22 | 11/22 | 6/6 | 20/22 | 19/22 | 19/22 | 0 | crédits |
| `mistralai/mistral-small-3.2-24b-instruct` | 10/22 | 8/22 | 4/6 | 16/22 | 14/22 | 14/22 | 0 | crédits |
| `mistralai/mistral-small-2603`, sur `mistral/eu` seul | pas lancé | pas lancé | 3/6 | 15/22 | 4/4, 2 questions | pas lancé | 0 | crédits |
| `google/gemini-2.5-flash-lite` | 10/20 | 12/22 | 5/6 | 12/20 | 1/2 | 9/16 | 8 sur 51 | crédits |
| `google/gemma-4-26b-a4b-it:free` | 8/22 | 12/22 | arrêté | arrêté | arrêté | arrêté | 429 à partir de C | rien, dans le quota |
| `cohere/north-mini-code:free` | arrêté | arrêté | arrêté | arrêté | arrêté | arrêté | 429 sur 17 des 18 réponses | rien, dans le quota |

Lire ce tableau comme une indication approximative. Les notes viennent d'un juge automatique (`claude-haiku-5-5`) et d'un seul passage, et personne ne les a vérifiées. Une note ne classe pas deux modèles : sur un second passage du mode D, le même juge a donné à DeepSeek v4 Flash 22/22 au lieu de 19/22, et deux passages d'un même modèle ont différé de 3 points sur 22 au plus. Un total sous 22 veut dire que moins de réponses ont reçu une note. « Arrêté » veut dire que `replay` s'est arrêté après trois erreurs de suite : ces deux lignes ne notent pas les modèles gratuits. `mistral/eu` désigne le propre service de Mistral en Europe, celui qui sert pour les jeunes. La ligne de `mistral-small-2603` est la seule fixée sur lui. En B, ses questions étaient les 3, 7 et 10, alors que la ligne de Mistral Small 3.2 a utilisé d'autres questions.

Voici les chiffres d'OpenRouter au 1er novembre 2026 pour ce que vous payez et pour la **fenêtre**, la quantité de texte qu'un modèle lit en une fois. ZDR veut dire zéro conservation des données (_zero data retention_), expliqué dans [Ce que veut dire zéro conservation des données](#ce-que-veut-dire-zéro-conservation-des-données).

| Modèle | Prix entrée/sortie, par million de jetons | Fenêtre | Entreprises sous ZDR | En Europe |
| --- | --- | --- | --- | --- |
| `deepseek/deepseek-v4-flash` | environ 0,09 \$/0,18 \$ dans la liste, voir plus bas | 1M | 12 sur 17 | aucune |
| `mistralai/mistral-small-3.2-24b-instruct` | 0,075 \$/0,20 \$ chez l'entreprise la moins chère, 0,10 \$/0,30 \$ en Europe | 128k à 256k, 32k en Europe | 4 sur 4 | 1 |
| `mistralai/mistral-small-2603` | 0,165 \$/0,66 \$ en Europe | 262k en Europe | 3 lignes sur 4, toutes chez Mistral | 1 |
| `google/gemini-2.5-flash-lite` | 0,10 \$/0,40 \$ | 1M | 0 sur 1 (55 jours) | aucune |
| `google/gemma-4-26b-a4b-it:free` | gratuit | 262k | 0 sur 1 (55 jours) | aucune |
| `cohere/north-mini-code:free` | gratuit | 256k | 0 sur 1 (30 jours) | aucune |

Chaque entreprise fixe son prix : un même modèle en a donc plusieurs. Pour `deepseek/deepseek-v4-flash`, 0,09 \$/0,18 \$ est le prix de la liste des modèles d'OpenRouter et la ligne de DeepInfra. La page du modèle affiche 0,05 \$/0,45 \$ en haut, la ligne de Relace, et d'autres lignes vont jusqu'à 0,44 \$/1,32 \$ chez Cloudflare ou 0,60 \$/0,17 \$ chez Wafer. Le kit enregistre le prix de la liste. Avec OpenCode 2.1.4, le coût affiché par `replay` vient de ce prix : c'est une estimation. À partir d'OpenCode 2.2.5, `replay` affiche le coût qu'OpenRouter a écrit dans chaque réponse (les 252 réponses de nos quatre passages en Europe, le 1er novembre 2026, en avaient toutes un). La page Activity montre ce que vous avez vraiment payé.

#### Pourquoi ces choix par défaut

DeepSeek v4 Flash a la meilleure note en modes C, D et E sans réponse en échec, et comme juge il a laissé une réponse sans note, contre 27 pour Gemini 2.5 Flash Lite. C'est un seul passage : une indication approximative, pas un classement. Il coûte du temps : 2 à 4,5 minutes pour un `replay` de 11 questions en bare, C, D et E (deux essais), contre 32 à 53 secondes pour Mistral Small.

Mistral Small a trié les 32 messages de test sans manquer une urgence : c'est donc le trieur. C'est aussi le second modèle du mode groupe. Avec `--europe`, le chatbot est `mistral-small-2603` : Mistral Small 3.2 ne peut pas y faire tourner le mode B, et ce modèle le peut. Les tableaux derrière ces choix sont dans [Notes sur les mesures](#notes-sur-les-mesures).

#### Lire la page d'un modèle avant de s'y fier

`workshop-login --model` teste une courte requête et ne dit rien du prix, de la fenêtre ni des données. La page du modèle dit les trois, ne demande aucun compte et se lit en une minute. Elle déclare une politique et ne prouve rien, comme l'explique [Ce que veut dire zéro conservation des données](#ce-que-veut-dire-zéro-conservation-des-données).

1. Ouvrir la [liste des modèles](https://openrouter.ai/models) et chercher le nom qu'utilisent les commandes, car le site affiche un autre titre. `mistralai/mistral-small-2603` a pour titre « Mistral: Mistral Small 4 », et `deepseek/deepseek-v4-flash` a pour titre « DeepSeek: DeepSeek V4 Flash 0423 ». Le nom est sous le titre. Pour parcourir la liste, ouvrir **Supported parameters** et cocher **tools** : les commandes ne gardent que ces modèles.
2. Lire les cases du haut : **IN / OUT PRICE**, par million de jetons, et **CONTEXT**, la fenêtre. Ce prix est celui d'une entreprise, pas ce que vous paierez.
3. Lire le tableau **Providers**. Chaque ligne est une entreprise qui exploite ce modèle, avec son propre prix et sa propre vitesse. L'ordre change à chaque visite. Le site appelle le bouclier vert « Private » et le bouclier orange « Logs ».
4. Cliquer sur une ligne. Un panneau s'ouvre avec **Region** et **Data policy** (**Prompt training**, **Retention**, **ZDR compatible**). La section [Ce que veut dire zéro conservation des données](#ce-que-veut-dire-zéro-conservation-des-données) en décrit deux. Lire la ligne de l'entreprise et non le modèle : deux lignes d'un même modèle peuvent différer.
5. Lire **Uptime** sur la même ligne. La section Uptime de la page compte les 3 derniers jours et n'a besoin que d'une entreprise qui réponde : elle ne dit donc rien d'une entreprise choisie.
6. Tester ensuite pour de vrai : `workshop-login --model <name>`, et un `replay` court.

Le 1er novembre 2026, la page de DeepSeek V4 Flash 0423 affiche en haut le nom `deepseek/deepseek-v4-flash`, le prix de 0,05 \$ en entrée et 0,45 \$ en sortie, et la fenêtre **1.0M**. Ce prix est celui de la première entreprise, Relace, pas un prix du modèle. Dans le tableau, 5 entreprises sur 17 portent le bouclier orange de celles qui peuvent garder les questions, et aucune ligne n'a de drapeau de l'UE. Ces 5 entreprises sont celles auxquelles penser en lisant la liste du modèle par défaut dans [Ce que disent les conditions de chaque entreprise](#ce-que-disent-les-conditions-de-chaque-entreprise).

Pour essayer un modèle avant une séance, [Chat](https://openrouter.ai/chat), sur le site, envoie un prompt à un ou plusieurs modèles, côte à côte, et **Try this model** l'ouvre depuis la page du modèle. Cela prend de l'argent sur vos crédits, et les conversations restent sur votre appareil. N'utiliser que des questions inventées. Chat ne passe pas par les commandes du kit : il ne porte donc pas leur règle sur les données, et il ne teste pas `--europe` (déduction du guide). Les réglages de confidentialité de votre compte s'y appliquent.

#### Les modèles gratuits

**Un groupe ne peut pas compter sur les modèles gratuits.** Personne ne les a essayés avec un groupe entier. Les [limites d'OpenRouter](https://openrouter.ai/docs/api_reference/limits) autorisent 20 requêtes par minute, et 50 requêtes par jour, ou 1 000 par jour dès que le compte a acheté au moins 10 \$ de crédits (un jour UTC). Les tentatives en échec comptent dans le plafond du jour, et un solde négatif bloque les modèles gratuits. Plus de clés n'apportent rien à un groupe : « Making additional accounts or API keys will not affect your rate limits » (créer d'autres comptes ou d'autres clés ne change pas vos limites). La même phrase continue : « We do however have different rate limits for different models » (les limites varient toutefois selon les modèles).

Sur la [liste des modèles](https://openrouter.ai/models), deux filtres donnent 13 modèles le 1er novembre 2026, sans compte, comme `workshop-login --models free` : le curseur **Prompt pricing** sur **FREE**, et **tools** coché sous **Supported parameters**, car le chatbot a besoin d'outils. Chacun affiche alors 0 \$ par million de jetons en entrée et en sortie, et porte un nom avec (free). OpenRouter avait 14 modèles gratuits ce jour-là : le 14e ne sait pas utiliser d'outils.

Lors d'un essai, `cohere/north-mini-code:free` a utilisé 60 à 62 requêtes pour un `replay C`, environ 5,5 par question. C'est plus que les 50 requêtes par jour d'un compte qui n'a pas acheté 10 \$ de crédits. Avec deux modèles gratuits en même temps, les deux ont reçu des 429. Ne pas se fier au compteur `Free requests left today` pendant une séance ([Notes sur les mesures](#notes-sur-les-mesures)).

Ne pas utiliser `openrouter/free`. Ce nom spécial prend un modèle gratuit au hasard : l'entreprise change donc d'une requête à l'autre, et sa politique de données avec elle. Personne ne l'a essayé avec `workshop-login --model` (non testé).

Pour les données des modèles gratuits, lire d'abord [Sécurité et protection des données](#sécurité-et-protection-des-données). Le 1er novembre 2026, les pages d'OpenRouter indiquaient que 8 des 14 modèles gratuits s'entraînent sur les données. Un seul des 14 ne gardait rien.

Écarter trois modèles de la liste gratuite. `inkling` et `inkling-small` ont répondu 403 sur tout appel direct, et leurs conditions interdisent les données d'enfants. `nemotron-3.5-super-vl:free` n'a aucune entreprise sous la règle du kit.

#### Les modèles payants

La page des [limites](https://openrouter.ai/docs/api_reference/limits), lue le 1er novembre 2026, décrit les limites d'OpenRouter comme « free-model request caps and DDoS protection » (des plafonds de requêtes pour les modèles gratuits et une protection contre les attaques par saturation). Elle dit que la variante payante d'un modèle « has no platform-level request cap » (n'a pas de plafond de requêtes au niveau de la plateforme). Un 429 sur un modèle payant devrait donc venir de l'entreprise qui l'exploite, pas d'OpenRouter. Personne n'a encore vu un vrai 429 sur un modèle payant (non testé).

Avec `workshop-login --europe`, Mistral est seul à servir le modèle et il n'y a pas de seconde entreprise. Un 429 de Mistral atteint directement le groupe ([429](#429--trop-de-requêtes)).

### Partie 7 : Quand une requête échoue

Chaque erreur a son numéro et son remède, et les outils affichent le numéro. Le chercher ci-dessous, lire ce qu'affiche votre outil, et suivre les étapes. Elles viennent des messages des outils et de la documentation d'OpenRouter. Un vrai 429 en séance et un vrai petit solde n'ont pas été testés.

Avec `workshop` et Open WebUI, le binôme ne voit pas les lignes ci-dessous : OpenCode et Open WebUI utilisent leurs propres écrans (non testé). Si un binôme dit que le chatbot ne répond plus, regarder la [page Credits](https://openrouter.ai/settings/credits) et [Logs](https://openrouter.ai/logs) sur votre propre écran, puis chercher le numéro ici.

#### 429 : trop de requêtes

| Outil | À l'écran |
| --- | --- |
| `replay` | `ERROR: too many requests, or the quota of this key or of this model is used up (429: <details>). Wait a minute, then try again.` Après trois de suite : `Three errors in a row: stopping.` |
| `score` | `Judge unavailable: HTTP 429: <details>.` Si OpenRouter demande plus de 60 secondes : `Judge stopped: OpenRouter asks to wait <n> seconds. You score alone for this run.` |
| `./sorter compare` | `<model> is busy (HTTP 429): <details>. Wait a minute and type ./sorter compare again.` |
| `workshop` | l'écran d'OpenCode (non testé) |
| Open WebUI | (non testé) |

![Terminal après replay C 1 2 3. Cadre 1 : ERROR: too many requests, or the quota of this key or of this model is used up (429: Provider returned error). Wait a minute, then try again. La même ligne revient trois fois. Cadre 2 : Three errors in a row: stopping.](/img/ressources/youth-ai-lab/guide-openrouter/terminal-429.png)

Les mots entre parenthèses sont ceux qu'a envoyés OpenRouter. Cette capture d'essai utilise un message mesuré sur un vrai modèle gratuit.

OpenCode retente seul un 429 ou un 503 avant d'afficher l'erreur : l'écran peut donc sembler bloqué. Cela a pris 82 à 93 s sur un faux OpenRouter. Dans un vrai essai, trois 429 sont arrivés en 10 s : l'attente varie. Avec `workshop` ou Open WebUI, si rien ne vient, attendre une minute et réessayer. Si cela dure, l'animateur·rice change de modèle avec les étapes ci-dessous.

Pendant la séance, commencer par lire le nom du modèle. Après un `replay`, il est sur la ligne `Engine:` du fichier de réponses. Sinon, taper `workshop-login` : quand il demande la clé, ne rien coller et appuyer sur Entrée, et la dernière ligne nomme le modèle. Suivre ensuite le seul cas qui convient, en lisant depuis le haut.

- **`--europe` est actif** : attendre une minute et réessayer. Si cela échoue encore, changer pour l'autre modèle Mistral : la règle reste la même, et Mistral sert les deux. Avec `workshop-login --model mistralai/mistral-small-3.2-24b-instruct`, le mode B ne tourne plus ([Ce qui change quand `--europe` est actif](#ce-qui-change-quand---europe-est-actif)). Pour revenir, taper `workshop-login --model mistralai/mistral-small-2603`. Ne pas taper `--no-europe` pendant une séance avec des jeunes.
- **Le nom finit par `:free`** : ne plus l'utiliser pour cette séance. Réessayer consomme le quota du jour. Passer le binôme sur un modèle payant. Quand la commande demande la clé, ne rien coller et appuyer sur Entrée :

  ```bash
  workshop-login --model deepseek/deepseek-v4-flash
  ```

- **C'est un modèle payant** : attendre une minute et retaper la même commande. Si cela échoue encore, choisir `mistralai/mistral-small-3.2-24b-instruct` avec `workshop-login --model`.
- **Beaucoup de binômes en même temps** : les faire lancer `replay` l'un après l'autre, ou sur quelques questions : `replay D 8 11`.

En mode groupe, vos chatbots ne reviennent pas avec le modèle : ils restent sur Mistral Small 3.2, et `openwebui start` les nomme. Pour chacun : **Workspace → Models**, ouvrir le chatbot, choisir `mistralai/mistral-small-2603` dans **Base Model (From)**, puis cliquer sur **Save & Update** (ce passage n'a pas été testé).

Après un changement de modèle, fermer le chatbot et le relancer, ou taper `openwebui start`. `--model` ne change ni le juge ni le trieur : avec `score` ou `./sorter compare`, attendre une minute et réessayer.

#### 402 : plus de crédits, ou une limite

| Outil | À l'écran |
| --- | --- |
| `replay` | `ERROR: no credits left on this key (402: <details>). Add credits on the provider's website, or ask the facilitator.` |
| `score` | `Judge stopped: no credits left on this key (<details>). You score alone for this run.` |
| `./sorter compare` | `OpenRouter says this account has no credit left: <details>. Show this message to the facilitator.` |

Un 402 a trois causes possibles. Regarder d'abord le solde sur la [page Credits](https://openrouter.ai/settings/credits).

Si le compte est vide, ajouter des crédits. Le 1er novembre 2026, OpenRouter a laissé passer 0,17 \$ de découvert, puis a répondu 402.

S'il reste de l'argent et que seule cette clé est arrêtée, la clé est à sa limite : remonter la limite sur la [page de la clé](#à-la-limite).

Si le solde est petit, sur un compte prépayé ou récent, la cause peut être le blocage d'OpenRouter. Il bloque à l'avance un coût estimé : une requête peut donc échouer alors que le solde est encore positif. Attendre une minute et réessayer, et ne pas faire tourner beaucoup de binômes en même temps sur un petit solde. Ajouter des crédits aide, jusqu'à un plafond. Cela ne concerne pas les modèles gratuits.

#### 403 : une limite, ou une de vos règles

| Outil | Ligne de limite de dépense | Ligne de refus |
| --- | --- | --- |
| `workshop-login` | `Key saved, but this key has reached its spending limit. Tell the facilitator.` | `Key saved, but the test answered HTTP 403 (model <name>): <details>. Tell the facilitator.` |
| `replay` | `ERROR: this key or its account reached a spending limit (403: <details>). Raise the limit on the provider's website, or ask the facilitator.` | `ERROR: the key was refused (403: <details>). Check it: workshop-login` |
| `score` | `Judge stopped: a spending limit stopped this key (<details>).` | `Question <n>: judge unavailable: the key was refused (HTTP 403): type workshop-login.` |
| `./sorter compare` | `A spending limit stopped the test: <details>. Show this message to the facilitator.` | `OpenRouter refused the request (HTTP 403): <details>. Check your key with workshop-login. If the key is right, show this message to the facilitator.` |

Les outils choisissent la ligne d'après les mots envoyés par OpenRouter : toujours lire les mots entre parenthèses. La ligne de limite de dépense arrive quand ils contiennent `limit`, `budget` ou `guardrail`. La ligne de refus arrive pour le reste.

**Ligne de limite de dépense.** La cause la plus probable est la limite de crédit de la clé, car chaque clé en a une. La documentation d'OpenRouter donne les mots `Key limit exceeded`. Remonter la **Credit limit** sur la [page de la clé](#à-la-limite). Si la clé est sous sa limite, chercher un [budget de workspace](#facultatif--un-plafond-pour-tout-le-groupe) : les mots nomment alors le workspace.

Si les mots parlent d'un guardrail ou d'une région de données, l'argent n'y est pour rien. Un de vos [garde-fous](#facultatif--une-règle-tenue-par-openrouter) a refusé la requête, et l'outil dit « spending limit » seulement parce qu'il a trouvé le mot. Changer le garde-fou, pas la limite.

**Ligne de refus.** Elle accuse la clé, et la clé peut être bonne. Si les mots parlent d'un modèle, d'une entreprise, d'un blocage ou d'une règle, un de vos garde-fous a refusé la requête : changer le garde-fou ou le modèle, pas la clé.

`replay` a une troisième ligne, pour des mots comme `moderation` ou `flagged` : `ERROR: the company that runs the model blocked this text (403: <details>). Change the question, or ask the facilitator.`

Les deux colonnes ont été vues avec un faux OpenRouter le 2 novembre 2026, avec des mots copiés de la documentation d'OpenRouter. Ce qu'écrit le vrai quand un garde-fou refuse une entreprise n'a pas été testé.

#### 503 : occupé, ou aucune entreprise

| Outil | À l'écran |
| --- | --- |
| `replay` | `ERROR: the model is busy, or no company can serve it now (503: <details>). Try again later, or ask the facilitator.` |
| `./sorter compare` | `<model> is busy (HTTP 503): <details>. Wait a minute and type ./sorter compare again.` |
| `./sorter compare`, aucune entreprise | `No company can run <model> for this test: <details>.`, suivi de ce qu'il faut faire |

Attendre quelques minutes. Si cela dure, choisir un autre modèle avec `workshop-login --model`. Si vous avez activé les réglages de [Sécurité et protection des données](#sécurité-et-protection-des-données), ils peuvent ne laisser aucune entreprise pour le modèle : [lire la page du modèle](#lire-la-page-dun-modèle-avant-de-sy-fier). Avec `--europe` actif et des jeunes, attendre, changer pour l'autre modèle Mistral comme en [429](#429--trop-de-requêtes), ou arrêter le chatbot pour cette séance.

---

## Sécurité et protection des données

:::caution[Avec des jeunes et OpenRouter : taper workshop-login --europe]

**Avec des jeunes et OpenRouter, taper `workshop-login --europe`.** Les requêtes ne vont alors qu'à Mistral, hébergé en Europe, avec zéro conservation des données. Le modèle par défaut est `mistralai/mistral-small-2603`. C'est la règle du projet Youth AI Lab avec une clé OpenRouter. En mode groupe, `workshop-login`, `openwebui start` et `openwebui share open` l'affichent tant qu'elle n'est pas active.

**Rester chez Mistral.** `--europe` n'autorise que Mistral : tout modèle qu'il accepte relève donc de conditions déjà lues. D'autres entreprises font tourner des modèles en Europe, mais les conditions d'Amazon et d'Azure n'ont pas été lues, et celles de Google peuvent exclure cet usage ([point 4](#ce-quaucun-réglage-ne-retire)). Celles de Mistral ont été lues, et elles demandent le consentement parental ([point 5](#ce-quaucun-réglage-ne-retire)).

Cette règle ne garde pas tout en Europe ([ce qu'elle couvre](#obligatoire--hébergé-en-europe)), et elle ne lève pas [ce qu'aucun réglage ne retire](#ce-quaucun-réglage-ne-retire). Lire les deux avant d'ouvrir quoi que ce soit à des jeunes.

:::

Les ateliers sont faits pour des adultes. Cette partie vaut pour le moment où un chatbot s'ouvre à des jeunes, comme dans le mode groupe du guide Open WebUI. À la fin, vous savez quoi activer, ce que couvre chaque réglage, et ce qu'aucun réglage ne retire.

Cette partie n'est pas un avis juridique. Elle dit ce que disaient les textes le 1er novembre 2026, plus la réponse du chat d'assistance d'OpenRouter sur sa règle d'âge ([point 1](#ce-quaucun-réglage-ne-retire)). La structure décide, avec la personne chargée de la protection des données. Rien ici ne veut dire que ce dispositif est autorisé pour votre groupe.

### Ce que veut dire zéro conservation des données

La [définition d'OpenRouter](https://openrouter.ai/docs/guides/features/zdr) : « Zero Data Retention (ZDR) means that a provider will not store your data for any period of time. » (une entreprise ne stocke vos données pour aucune durée). Une entreprise peut promettre de ne pas s'entraîner sur vos données et les garder quand même. Les panneaux de deux entreprises montrent la différence, tels qu'OpenRouter les affichait le 1er novembre 2026.

Le panneau de `mistral/eu` indique **Region** EU et, sous **Data policy**, **Prompt training** No, **Retention** Zero retention, **ZDR compatible** Yes, **Moderation** Responsibility of developer. Celui d'`atlas-cloud/fp4`, une entreprise de DeepSeek V4 Flash, ne donne pas de région et indique **Prompt training** No, **Retention** Unknown retention, **ZDR compatible** No.

Comparer **Retention** : les deux disent non à l'entraînement, et seul le premier ne garde rien. Ces panneaux sont la liste d'OpenRouter, pas une preuve. Sur le premier, **Moderation** dit « Responsibility of developer » (à la charge de la personne qui développe). Selon la lecture du guide, OpenRouter ne modère pas les requêtes vers cette entreprise, c'est-à-dire qu'il ne filtre pas les questions et les réponses à la recherche de contenus nuisibles. Le kit n'ajoute aucun filtre non plus : les règles de sécurité d'un chatbot sont dans ses instructions.

La règle que le kit envoie toujours, `data_collection: deny`, ne donne pas le ZDR. Elle écarte seulement les entreprises qui peuvent collecter les données ou s'entraîner dessus. Le 1er novembre 2026, Gemini 2.5 Flash Lite et `google/gemma-4-26b-a4b-it:free` ont répondu avec cette règle active, et l'unique entreprise de chacun est indiquée avec 55 jours de conservation.

Le ZDR a des limites, même actif. La liste d'OpenRouter « reflects the AI Model Provider's published or represented policy » et « does not constitute OpenRouter's guarantee of AI Model Provider compliance. » (elle reprend ce que déclarent les entreprises, sans garantir qu'elles le respectent). Il couvre les questions envoyées à un modèle, pas des ajouts comme la recherche web : le kit garde la recherche web coupée dans Open WebUI. OpenRouter ne compte pas comme une conservation une copie de courte durée dans la mémoire d'un ordinateur (un cache). Pour chaque requête, OpenRouter garde le nombre de jetons et le temps pris, et il « samples a small number of prompts for categorization » (il prélève un petit nombre de prompts pour les classer ; un prompt est un texte envoyé à un modèle).

### Obligatoire : hébergé en Europe

```bash
workshop-login --europe
```

Quand la commande demande la clé, ne rien coller et appuyer sur Entrée : elle garde la clé enregistrée. En mode groupe, il faut voir :

```text
Key OK (OpenRouter, model mistralai/mistral-small-2603, hosted in Europe). You can start: openwebui start
```

Dans le kit, il faut voir :

![Terminal après workshop-login --europe et Entrée seule. Rien n'est collé : la clé enregistrée est gardée. Cadre 1 : Key OK, avec OpenCode, OpenRouter, le modèle openrouter/mistralai/mistral-small-2603 et hosted in Europe.](/img/ressources/youth-ai-lab/guide-openrouter/terminal-europe.png)

Les mots à chercher sont `hosted in Europe`.

**Avant `openwebui share open`** : taper `openwebui start`. La ligne `Warning: with young people...` doit avoir disparu. Si elle est encore là, la règle est coupée.

À partir de là, `workshop`, `replay`, `score`, `openwebui` et `./sorter` envoient avec chaque requête : un point d'accès européen (`mistral/eu`), zéro conservation, pas de second choix. Un point d'accès est une entreprise qui fait tourner un modèle à un endroit. S'il ne peut pas servir le modèle, la requête échoue.

Le 1er novembre 2026, la page de Mistral Small 4 (`mistralai/mistral-small-2603`) affiche en haut 0,15 \$ en entrée et 0,60 \$ en sortie par million de jetons, et une fenêtre de **262K**. `--europe` utilise la ligne au drapeau de l'UE et au bouclier vert, à 0,165 \$ en entrée et 0,66 \$ en sortie. Le prix du haut de page est celui des premières lignes. La ligne de l'UE est sous **Not used in Standard routing** : l'usage ordinaire ne l'atteint pas, et les commandes la demandent par son nom, vous payez donc son prix.

:::caution[--europe choisit où tourne le modèle, pas où OpenRouter traite la requête]

OpenRouter lui-même peut traiter une requête ailleurs. Le kit envoie toujours chaque requête à `openrouter.ai`, et n'a pas d'option pour `eu.openrouter.ai`. Les comptes, la facturation et les journaux de sécurité peuvent rester aux États-Unis dans tous les cas.

:::

Les réponses d'OpenRouter nommaient Mistral, et aucune région. Le lieu vient de la liste d'OpenRouter : aucun appel et aucune preuve indépendante n'ont confirmé où tourne un modèle. Le mode groupe avec `--europe` a tourné avec une vraie clé, mais seulement jusqu'à une question à chaque modèle de base, posée par l'administrateur·rice : sans groupe, sans téléphone, sans vrai Codespace.

Lire la première ligne de ce tableau comme ce que vous avez, et la deuxième comme ce qui reste hors de portée du kit.

| Ce que vous voulez | Compte ordinaire (Standard) | Offre Business |
| --- | --- | --- |
| Une entreprise européenne nommée dans chaque requête : `workshop-login --europe` | oui : OpenRouter l'a accepté le 1er novembre 2026 | inutile |
| Des requêtes envoyées à `eu.openrouter.ai`, traitées et servies seulement en Europe (UE et EEE, Royaume-Uni, Suisse), sans repli ailleurs | non : le tableau des offres le réserve aux offres Business et Enterprise | oui, mais les commandes du kit ne le prennent pas en charge |
| Un modèle gratuit en Europe | aucun | aucun |

Vous passez vous-même à l'offre Business, sans contrat et sans minimum. Les frais sont de 8 % sur les crédits au lieu de 5,5 %, et le retour n'est possible qu'après 30 jours.

Pour l'adresse européenne, [OpenRouter écrit](https://openrouter.ai/docs/guides/features/in-region-routing) : « There is no setting to turn on: once your account is on one of these plans, you choose the region for each request by sending it to that region's base URL. » (il n'y a pas de réglage à activer : sur ces offres, on choisit la région de chaque requête en l'envoyant à l'adresse de cette région). Même là, seuls les prompts et les réponses restent en Europe. [OpenRouter écrit](https://openrouter.ai/docs/guides/features/sovereign-ai) : « Account, billing, and other operational records may be stored or processed in the US. » (les données de compte, de facturation et d'autres données de fonctionnement peuvent être stockées ou traitées aux États-Unis). OpenRouter, Inc. est une société de New York, et l'avenant « UE seulement » de son accord de traitement des données ne s'applique que s'il est choisi par écrit.

`--europe` était le réglage. La suite dit ce qu'il ne peut pas changer.

### Ce qu'aucun réglage ne retire

1. **La règle d'âge d'OpenRouter.** Les conditions disent : « You must be at least 18 years of age to use the Service. » (il faut avoir au moins 18 ans pour utiliser le service). La [politique de confidentialité](https://openrouter.ai/privacy) dit : « This Site is offered and available to users who are 18 years of age or older. » (ce site est proposé et accessible aux personnes de 18 ans ou plus). Elle ne prévoit aucune exception pour les structures ni pour le consentement parental. La section 5.2 des conditions ajoute : « You will require that all of your Authorized Users and customers access and use the Service and Models only in accordance with this Agreement » (vous devez exiger que vos utilisateur·rices autorisé·es et vos client·es n'utilisent le service et les modèles que dans le respect de cet accord). Aucun texte ne dit en toutes lettres qu'une structure peut ou ne peut pas proposer un chatbot à des mineur·es. Interrogé par son chat d'assistance, OpenRouter a répondu que cette règle interdit à un jeune de créer et d'utiliser sa propre clé, et qu'elle ne s'applique pas à des jeunes encadrés par un adulte responsable. Cette lecture n'est écrite ni dans ses conditions ni dans sa politique de confidentialité (toutes deux mises à jour le 31 août 2026), et la date du chat n'a pas été notée. Gardez donc toutes les clés entre les mains des adultes, et restez avec le groupe. Si votre structure veut la réponse par écrit, écrivez à [support@openrouter.ai](mailto:support@openrouter.ai), ou utilisez **Raise a Ticket** sur la page [Support](https://openrouter.ai/support).
2. **Les données sensibles.** L'accord de traitement des données cite la santé, l'origine, la religion et le casier judiciaire, entre autres, et dit : « No processing of Sensitive Data or any special categories is intended » (aucun traitement de données sensibles ou de catégories particulières de données n'est prévu). Tout traitement de ce type demande un avenant. Selon la lecture du guide, un chatbot où un·e jeune écrit sur sa santé ou sa situation sort de ce cadre sans avenant. L'accord nomme des « End Customers » (client·es final·es) et ne parle jamais de mineur·es.
3. **Le contrôle prévu des contenus d'abus sur enfants (CSAM).** L'[annonce](https://openrouter.ai/blog/announcements/csam-screening/) du 27 octobre 2026 dit : « CSAM screening will also apply to requests covered by OpenRouter's Zero Data Retention (ZDR) policy. » (ce contrôle s'appliquera aussi aux requêtes sous ZDR). La page ZDR ajoute : « Content flagged as potential CSAM may be retained for human review, reporting, and preservation where required by law. » (un contenu signalé comme possible CSAM peut être conservé pour une relecture humaine, un signalement et une conservation là où la loi l'exige). La date de début n'est pas établie. Selon la lecture du guide, pour un groupe de mineur·es, une fausse alerte pourrait conduire à une conservation et à la lecture du texte par une personne, même sous ZDR. L'annonce dit : « A flag indicates suspected material; it is not itself a determination that the content is CSAM » (un signalement indique un soupçon, pas une décision sur le contenu).
4. **La clause de Google sur les moins de 18 ans.** Les [conditions de l'API Gemini](https://ai.google.dev/gemini-api/terms) disent que vous « will not use the Services as part of a website, application, or other service » qui « is directed towards or is likely to be accessed by individuals under the age of 18. » (ne pas utiliser les services dans un site, une application ou un service destiné aux moins de 18 ans ou susceptible d'être consulté par eux). Les [conditions de Google Cloud](https://cloud.google.com/terms/service-terms) disent la même chose pour les services d'IA générative et les personnes qui les utilisent au bout de la chaîne. Il n'est pas établi que cela atteigne un·e client·e d'OpenRouter par Vertex.
5. **La clause de Mistral sur les mineur·es.** `--europe` envoie tout à Mistral. Ses [conditions commerciales](https://legal.mistral.ai/terms/commercial-terms-of-service/) interdisent d'« include any personal information of children under 13 or the applicable age of digital consent as Customer Data or allow minors to use the Mistral AI Products without legally adequate consent from their parent or guardian » (inclure dans les données client des informations personnelles d'enfants de moins de 13 ans ou de l'âge du consentement numérique applicable, ou laisser des mineur·es utiliser les produits sans un consentement juridiquement valable de leur parent ou responsable légal·e). Les jeunes de ce projet ont de 12 à 15 ans : cela les concerne directement. L'âge du consentement numérique est l'âge à partir duquel un·e jeune peut accepter seul·e un service en ligne. Il est fixé par pays : le demander à la personne chargée de la protection des données. Selon la lecture du guide : aucune information personnelle d'un·e enfant en dessous de cet âge n'entre dans le chatbot, et vous obtenez un consentement parental écrit avant qu'un·e mineur·e l'utilise. Il n'est pas établi que ce texte atteigne un·e client·e d'OpenRouter : le suivre quand même.

### Ce qui change quand `--europe` est actif

Activer la règle vous fait passer sur `mistralai/mistral-small-2603`. Ensuite, `--model` peut nommer un autre modèle Mistral, et il reste. Si Mistral ne le sert pas, la commande le dit et nomme un modèle qui marche.

Sur la [liste des modèles](https://openrouter.ai/models), quatre filtres donnent 18 modèles le 1er novembre 2026 : la recherche `mistral`, **tools** coché, **Zero data retention** sur **Supported**, et **In-region routing** sur **EU**. Ils montrent les modèles Mistral qui ont une ligne en Europe, mais c'est `--model` qui décide si Mistral en sert un. Ne pas se fier aux cartes, dont chacune montre un prix et une fenêtre qui ne sont pas ceux de l'entreprise européenne : Mistral Small 3.2 affiche 256K et 0,075 \$, là où `mistral/eu` donne 32k et 0,10 \$. Sans la recherche sur `mistral`, le filtre EU montre aussi d'autres entreprises, que `--europe` refuse.

C'est la fenêtre, la quantité de texte qu'un modèle peut lire en une fois, qui change le plus. `mistral-small-2603` a 262k jetons sur `mistral/eu`. Mistral Small 3.2 y a 32k, contre 128k à 256k chez les trois autres entreprises, aucune indiquée en Europe. Personne n'a essayé un chatbot en mode groupe avec une longue conversation dans 32k (non testé).

Le mode B envoie tout le kit d'un coup. Il tourne avec `mistral-small-2603` ([partie 6](#partie-6--les-modèles-au-1er-novembre-2026)). Avec Mistral Small 3.2 sur `mistral/eu`, il a échoué avant le premier mot du modèle (mesuré le 1er novembre 2026). Les commandes refusent le mode B pour tout modèle à la fenêtre trop petite, avec ou sans `--europe` :

```text
Mode B sends the whole kit at once, and this model reads 32,768 tokens at most.
This mode cannot run with it. Choose a model with a larger window: workshop-login --model mistralai/mistral-small-2603
```

Sans `--europe`, la ligne se termine par `workshop-login --models openrouter`.

Seule la ligne de `mistral-small-2603` en [partie 6](#partie-6--les-modèles-au-1er-novembre-2026) était fixée sur `mistral/eu` : les autres notes ne sont pas des notes en Europe.

Le juge habituel n'a pas d'entreprise en Europe : `score` passe donc sur Mistral Small 3.2, et `./sorter compare` y reste. Sa fenêtre de 32k suffit pour un juge (mesuré le 1er novembre 2026). Il s'accorde moins souvent que le juge habituel avec le juge de référence : 75 % contre 83 % ([Notes sur les mesures](#notes-sur-les-mesures)). En mode groupe, vous avez deux modèles de base : `mistral-small-2603`, et Mistral Small 3.2, moins cher, en second. Un chatbot sur le second y reste.

Avec OpenCode 2.1.4, le coût affiché peut être trop bas, pour la raison donnée en [partie 6](#partie-6--les-modèles-au-1er-novembre-2026) : le kit enregistre le prix de la liste, et sur `mistral/eu` un modèle coûte plus cher. À partir d'OpenCode 2.2.5, `replay` affiche le coût que donne OpenRouter.

Activer la règle d'abord, puis démarrer le reste : ce qui tourne déjà garde l'ancienne règle ([Ce que veut dire chaque message](#ce-que-veut-dire-chaque-message)).

`--europe` reste actif à vos connexions suivantes. `workshop-login --no-europe` le retire, et une clé d'un autre fournisseur aussi.

### Les autres modèles de la partie 6

OpenRouter n'indique aucune entreprise en Europe pour `deepseek/deepseek-v4-flash`, le choix par défaut, ni pour `google/gemini-2.5-flash-lite`, et aucune sous ZDR pour Gemini. Les entreprises sont listées dans [Ce que disent les conditions de chaque entreprise](#ce-que-disent-les-conditions-de-chaque-entreprise).

### Ce que disent les conditions de chaque entreprise

Ce sont les conditions propres à chaque entreprise pour le produit nommé. La même entreprise, atteinte par OpenRouter, peut différer : les pages d'OpenRouter déclarent une politique pour chaque ligne d'un modèle, et ses accords avec ces entreprises ne sont pas publics.

| Entreprise et produit | Mineur·es | Entraînement | Conservation | Lieu |
| --- | --- | --- | --- | --- |
| **DeepSeek**, ses propres services | « primarily intended for adults » (destinés d'abord aux adultes) ; moins de 18 ans avec le consentement d'un·e responsable légal·e ; pas de chatbot « designed to specifically appeal to or present a persona of any person under the age of 18 » (conçu pour plaire spécifiquement aux moins de 18 ans ou pour incarner une personne de moins de 18 ans) | peut utiliser entrées et sorties, dé-identifiées ; OpenRouter indique la propre ligne de DeepSeek comme s'entraînant | tant que le compte existe, sans nombre de jours | Chine |
| **Mistral**, API et Studio | pas d'information personnelle d'enfants de moins de 13 ans ou de l'âge du consentement numérique ; les mineur·es ont besoin de « legally adequate consent from their parent or guardian » (un consentement juridiquement valable de leur parent ou responsable légal·e) | non, sauf accord de votre part ; exceptions : retours d'usage, bon de commande, modèles Labs ou Preview | 30 jours glissants, sauf ZDR ; OpenRouter n'indique aucune conservation sur `mistral/eu` | UE par défaut ; transferts temporaires possibles selon la fonction |
| **Google**, API Gemini et AI Studio | 18 ans ou plus, et voir le [point 4](#ce-quaucun-réglage-ne-retire) | services payants : non ; dans l'EEE, en Suisse et au Royaume-Uni, mêmes règles pour les services gratuits | 55 jours | « any country in which Google or its agents maintain facilities » (tout pays où Google ou ses agents ont des installations) |
| **Google**, Vertex | voir le [point 4](#ce-quaucun-réglage-ne-retire) | pas sans la permission du client | prompts signalés, jusqu'à 90 jours | l'adresse `eu` reste dans les États membres de l'UE |
| **Cohere**, modèle gratuit de la partie 6 | « not intended to be used by minors (children) » (pas destiné à être utilisé par des mineur·es) ; sa politique d'usage demande des contrôles de sécurité supplémentaires pour une application utilisée par des mineur·es | clés d'essai : peuvent servir à la recherche et au développement | 30 jours, sauf signalement | Google Cloud, US-Central, dans une FAQ non datée |

Le modèle par défaut n'atteint pas DeepSeek lui-même. OpenRouter indique 17 autres entreprises pour lui. Sous ZDR : Relace, DeepInfra, Venice, DigitalOcean, Fireworks, SiliconFlow, Crusoe, Parasail, Mancer 2, Azure (aux États-Unis), Cloudflare et Wafer. Qui gardent les questions : StreamLake, Baidu, GMICloud, AtlasCloud et Alibaba.

**Les conditions de ces 17 entreprises n'ont pas été lues.** Le modèle par défaut est donc réservé aux adultes, avec des questions inventées ou publiques.

### Facultatif : la même règle pour tout le compte

Cette étape n'est pas nécessaire. `workshop-login --europe` demande déjà le ZDR dans chaque requête du kit. Ces réglages tiennent le ZDR pour tout le compte, quel que soit l'outil qui utilise la clé, Chat du site compris. Rien dans ce guide n'a tourné avec eux.

1. En tant que titulaire du compte, ouvrir les [réglages de confidentialité](https://openrouter.ai/settings/privacy), sous **Privacy** dans le menu du compte.
2. Sous **Zero Data Retention**, activer chaque bouton : **All other models**, **Anthropic**, **OpenAI**, **Google** et **SpaceXAI**. DeepSeek et Mistral ne sont pas dans les quatre derniers : **All other models** est donc celui qui compte ici (lecture du guide). « Enabling a scope restricts all your requests to ZDR endpoints for that model group. » (activer un groupe limite toutes vos requêtes aux points d'accès ZDR de ce groupe).
3. Choisir **Zero retention only**, au-dessus de **Safety retention allowed**. Sans ce choix, un compte ordinaire reste sur **Safety retention allowed** : Google peut alors garder les questions que ses filtres automatiques signalent, jusqu'à 90 jours. OpenRouter prévient qu'avec **Zero retention only**, « Most Google models become unavailable. » (la plupart des modèles Google ne sont plus disponibles). Cliquer sur **Save changes**, à côté de **Discard**.
4. Plus bas sur la même page, sous **Data Training**, laisser les quatre interrupteurs désactivés : **Allow paid endpoints that train on request data** (entreprises payantes qui s'entraînent sur vos données), **Allow free endpoints that train on request data** (entreprises gratuites qui s'entraînent dessus), **Allow free endpoints that publish prompts** (entreprises gratuites qui publient les prompts) et **Allow 1% data discount in workspaces**. Le dernier laisse un workspace accepter qu'OpenRouter utilise vos entrées et vos sorties : la documentation l'appelle **OpenRouter Use of Inputs/Outputs**. OpenRouter ne stocke vos prompts que si vous l'acceptez, ou s'ils sont signalés comme possible contenu d'abus sur enfants. La section 6.2 des conditions attache à l'enregistrement des prompts une licence qui inclut le droit de « license or sell your User Content in anonymized form » (céder ou vendre vos contenus sous forme anonymisée).

   Le réglage **Maximum API key lifetime**, plus bas (**No expiration** dans la capture du guide anglais), n'est pas nécessaire : chaque clé a déjà sa date. **Regional routing**, avec **Upgrade to Business**, est l'offre Business du [tableau plus haut](#obligatoire--hébergé-en-europe).

5. Ouvrir les [réglages Observability](https://openrouter.ai/settings/observability) de chaque workspace. Laisser **Input & output logging** désactivé (en bêta le 2 novembre 2026). Une fois activé, il stocke le texte des questions pendant au moins 3 mois, et vous-même comme tout admin pourriez lire ce qu'ont écrit les binômes. Ne rien ajouter sous **Traces**, que la documentation appelle Broadcast : cela envoie vos données à un outil extérieur. La page **Activity** peut afficher un bandeau avec **Connect a tool** : il mène à la même chose, donc ne pas y toucher.
6. Dans le Codespace, taper `workshop-login`. Quand il demande la clé, ne rien coller et appuyer sur Entrée. Il faut voir `Key OK` : une entreprise peut servir le modèle, et la ligne ne dit pas laquelle. Si vous voyez `no company can serve the model`, choisir un autre modèle.

Pour vérifier à la main après `--europe`, ouvrir [Logs](https://openrouter.ai/logs), filtrer sur une clé, et lire l'entreprise sur quelques lignes. Personne n'a vérifié ce qu'une ligne affiche comme région de données pour `mistral/eu` (non testé).

### Facultatif : une règle tenue par OpenRouter

La règle de `--europe` est dans votre Codespace : un `workshop-login --no-europe` tapé par accident la retire. Un **guardrail** (garde-fou) est une règle qu'OpenRouter tient pour une clé, de son côté. Il s'ajoute à `--europe` et ne remplace rien, et il ne lève rien de [ce qu'aucun réglage ne retire](#ce-quaucun-réglage-ne-retire). Mistral a aussi des lignes hors d'Europe : un garde-fou sur Mistral seul ne remplace donc pas `--europe`. Aucun garde-fou n'a été essayé avec ce guide. Le 2 novembre 2026, un compte personnel a une entrée **Guardrails** dans son menu, et la liste des clés a une colonne **Guardrails**, mais personne n'a ouvert cette page.

1. Ouvrir la page **Guardrails** de votre [workspace](https://openrouter.ai/workspaces/default/guardrails) et cliquer sur **New Guardrail**.
2. Régler **Provider allowlist** sur Mistral. Rien ne confirme qu'il puisse nommer `mistral/eu` seul.
3. Lire l'aperçu d'éligibilité : il montre les entreprises et les modèles qui restent.
4. Enregistrer, puis assigner le garde-fou dans sa section **API Keys**. Un garde-fou n'impose rien tant qu'il n'est pas assigné, et une clé ne prend qu'un seul garde-fou.
5. Tester chaque clé avec `workshop-login` avant la séance. Un refus peut ressembler à un problème de clé, ou à une limite de dépense ([403](#403--une-limite-ou-une-de-vos-règles)).

La même page propose un filtre **Sensitive Info**. Ne pas compter dessus pour protéger des jeunes. Il examine les questions et non les réponses, ses noms de personnes et ses adresses sont en bêta, et si la vérification dépasse son délai, la requête passe. Sa précision en français, en catalan, en italien ou en néerlandais n'est pas indiquée. Au mieux, c'est un filet de plus, et jamais une raison de laisser des jeunes taper des données personnelles.

Les faits de cette partie ont été rassemblés par des modèles d'IA, puis vérifiés par un second, sur les pages brutes. Aucun·e juriste ne les a relus. Si votre structure dit non, un modèle sur sa propre machine n'envoie rien à ces entreprises : voir [Installer un chatbot sur un ordinateur de sa structure](/ressources/youth-ai-lab/guide-ia-locale).

Pour le texte anglais et les captures du site, voir [Part 8 - Data and young people](https://github.com/Youth-AI-Lab/yal-openrouter-guide#part-8---data-and-young-people).

---

## Sources et état du guide

Cette section dit d'où vient chaque fait, et donne les notes sur les mesures.

### Sources

Les sources ont été lues le 1er novembre 2026 : conditions, politique de confidentialité, accord de traitement des données, prix, limites et documentation d'OpenRouter, ainsi que les conditions de DeepSeek, Mistral, Google et Cohere. La liste complète, avec ses liens, est dans [Sources, read on 2026-11-01](https://github.com/Youth-AI-Lab/yal-openrouter-guide#sources-read-on-2026-11-01).

### Les captures

Les captures des pages publiques d'OpenRouter datent du 1er novembre 2026, vues sans compte et sans connexion. Celles des pages du compte (crédits, clés, activité, confidentialité) ont été prises le 2 novembre 2026 sur un vrai compte, avec les données personnelles masquées. Les libellés de ces pages dans ce guide viennent d'elles. Les captures du terminal viennent des vraies commandes de l'image 2026.10.43, dans un conteneur sans réseau, avec une fausse clé et un faux OpenRouter. Les noms des modèles sont réels : le faux OpenRouter servait une copie de la liste publique de ce jour-là.

### Notes sur les mesures

Ce tableau montre combien de fois chaque candidat a donné la même note que `claude-haiku-5-5`. Ce modèle ne sert que d'étalon pour ces mesures : une clé OpenRouter ne l'utilise pas. `WORKSHOP_JUDGE_MODEL` nomme un autre juge, et `WORKSHOP_SORTER_MODEL` un autre modèle pour `./sorter compare`.

| Comme juge, face à `claude-haiku-5-5` | Même note | 1 point d'écart | 2 points d'écart | Sans note | Coût indiqué |
| --- | --- | --- | --- | --- | --- |
| `deepseek/deepseek-v4-flash` | 150/180 (83 %) | 30 | 0 | 1 | 0,016 \$ |
| `google/gemini-2.5-flash-lite` | 133/154 (86 %) | 20 | 1 | 27 | 0,039 \$ |
| `mistralai/mistral-small-3.2-24b-instruct` | 135/181 (75 %) | 44 | 2 | 0 | à compléter |

`./sorter compare` avec chaque modèle, sur les 32 messages de test de l'atelier 6. Lire d'abord la colonne des urgences.

| `./sorter compare`, 32 messages de test, premier passage | Bien triés | Urgences manquées | Temps | Coût |
| --- | --- | --- | --- | --- |
| `mistralai/mistral-small-3.2-24b-instruct` | 32/32 | 0 | 18 s | 0,0003 \$ |
| `mistralai/mistral-small-2603`, sur `mistral/eu` seul (`WORKSHOP_SORTER_MODEL`) | 32/32 | 0 | 20 s | 0,0003 \$ |
| `deepseek/deepseek-v4-flash` | 30/32 | 1 | 38 s | 0,0002 \$ |
| `google/gemini-2.5-flash-lite` | arrêté à 6 messages : `Provider returned error`, cause non établie | - | - | - |

Un second passage de Mistral Small a donné 32/32, aucune urgence manquée, en 17 s, pour 0,0003 \$.

Le passage de `mistral-small-2603` du 1er novembre 2026 s'est fait par `workshop-login --europe`. En B, les questions 3, 7 et 10 ont eu 1, 2 et 0 point. `replay B 3 7 10` a pris 10 s, à environ 70 000 jetons par question, et a affiché 0,01 \$. `replay C` a pris 1 min 06 et a affiché 0,01 \$. `replay D 1 8` a appelé l'outil de danger de feu. Sur ses 11 réponses en mode C, `score C --auto` avec Mistral Small 3.2 comme juge a donné 17/22, pour 0,0007 \$, là où `claude-haiku-5-5` a donné 15/22. C'est un seul passage.

Le second passage du mode D de DeepSeek v4 Flash a pris 2 min 43 et a affiché 0,02 \$ pour 11 réponses. `score D --auto` a ensuite donné 21/22 avec DeepSeek comme juge, pour 0,0008 \$.

Lors du passage du 5 novembre 2026, DeepSeek v4 Flash a répondu à 3 des 11 questions en mode bare (1, 2 et 10) par un appel d'outil écrit en texte, `<｜DSML｜tool_calls>`, au lieu d'une réponse : un `web_search` pour 1 et 10, un `curl` dans le terminal pour 2, des outils qu'il n'a pas. Les modes A à E n'en ont eu aucun. Dans Open WebUI, avec un chatbot construit par `openwebui chatbot`, il a cherché dans les documents avant de rendre son verdict sur une rumeur, puis a écrit ce verdict en français, en réponse à une question posée en anglais. Il a trouvé les 4 pages du wiki sur l'Italie, et a appelé l'outil de danger de feu pour Anvers, qui n'a donné aucun niveau parce que son fichier n'avait pas été rempli ce jour-là.

Dans le tableau des notes, deux modèles gratuits lancés en même temps ont reçu des 429. Une nouvelle tentative de `north-mini-code` seul a aussi échoué, le quota du jour étant déjà consommé. Chacun a ensuite tourné seul en mode C, avec 1 000 requêtes par jour. `cohere/north-mini-code:free` a eu 18/22 par le même juge, en 3 min 04, avec 0 erreur. `google/gemma-4-26b-a4b-it:free` s'est arrêté après 3 questions en 429 en 10 s, et ses requêtes n'ont pas été comptées à part. Ce 429 venait de l'entreprise qui l'exploite (`Provider returned error`).

`Free requests left today` est passé de 935 à 873 autour du `replay C` de `north-mini-code`. Ce décompte inclut un ou deux tests de `workshop-login`, d'où 60 à 62 requêtes. Plus tôt le même jour, le même compteur n'a montré aucun usage pour plusieurs modèles. La cause n'est pas établie.

OpenCode réserve la réponse la plus longue possible à chaque requête. Le 1er novembre 2026, une demande de résumé d'un long document a échoué avec ce 402 : « You requested up to 195288 tokens, but can only afford 20387 » (vous avez demandé jusqu'à 195 288 jetons, mais vous ne pouvez en payer que 20 387). Pour OpenRouter, le kit plafonne une étape à 8 192 jetons.

Le tableau des prix d'OpenRouter et sa documentation diffèrent sur deux points, et aucun ne change une étape de ce guide. Le tableau donne Data Policy-Based Routing à Standard et au-dessus, et dit que le routage à zéro conservation des données existe sur toutes les offres. Il indique aussi Budgets & Spend Controls comme absent de Free, alors que la documentation dit que les limites de clés et les budgets de workspace existent sur toutes les offres.

Le 1er novembre 2026, la [liste publique pour l'Europe](https://eu.openrouter.ai/api/v1/endpoints/zdr) d'OpenRouter montrait 87 points d'accès ZDR pour 76 modèles. 77 de ces points d'accès, pour 66 modèles, savent utiliser des outils. Ils viennent de cinq entreprises : Mistral, Azure, Amazon Bedrock, Google Vertex et Inceptron, dont les étiquettes ne disent pas Europe. `--europe` nomme `mistral/eu` seul, car ce sont les conditions de Mistral qui ont été lues. Il refuse donc un modèle servi en Europe par une autre entreprise. Personne n'a essayé cela avec `deepseek/deepseek-v4-flash-0731` chez Inceptron (non testé).

La liste des modèles d'OpenRouter dit 256 000 pour Mistral Small 3.2 : `--europe` enregistre donc la fenêtre tirée de la liste des entreprises du modèle, qui dit 32k sur `mistral/eu`.

Les prix et fenêtres du tableau des modèles viennent de la liste d'OpenRouter du 1er novembre 2026. Le prix de DeepSeek v4 Flash était affiché avec deux décimales, d'où « environ ». Les lignes de ses entreprises viennent de la page publique d'OpenRouter du même jour.

---

## Indicateurs de réussite

- Vous savez dire **quelle clé donne quoi** : `sk-ant-` pour Anthropic et Claude Code, `sk-or-` pour OpenRouter et OpenCode, sans modèle Claude par défaut
- Le compte est au nom d'un·e adulte, les crédits couvrent les binômes avec une marge, l'alerte de solde bas est réglée et la recharge automatique reste désactivée
- Chaque binôme a **sa propre clé avec une limite de dépense et une date d'expiration**, et aucune clé n'a été montrée à l'écran
- `workshop-login` affiche `Key OK`, et vous savez lire les autres messages
- Vous savez dire **quel modèle utilise chaque outil**, et vous ne prévoyez pas un groupe sur des modèles gratuits
- Pendant la séance, vous suivez les dépenses de chaque clé sur votre propre écran, et vous savez quoi faire d'une clé qui fuite
- Devant un 429, un 402, un 403 ou un 503, vous savez quoi faire sans `--no-europe`
- Avant d'ouvrir un chatbot à des jeunes, `--europe` est actif, la ligne `Warning: with young people...` a disparu après `openwebui start`, vous avez le consentement parental écrit, votre structure a décidé avec sa personne chargée de la protection des données et avec la réponse écrite d'OpenRouter en main, et vous savez **ce qu'aucun réglage ne retire**
- Après la dernière séance, chaque clé est archivée

---

_Cette fiche fait partie du projet [Youth AI Lab](/projets/youth-ai-lab), financé par le programme Erasmus+. Adaptation française de https://github.com/Youth-AI-Lab/yal-openrouter-guide (anglais), texte et captures du terminal sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr). Cette licence ne couvre pas les captures du site d'OpenRouter, qui restent dans le guide anglais. OpenRouter, DeepSeek, Mistral, Google et Cohere sont les noms de leurs propriétaires, sans lien avec ce guide._

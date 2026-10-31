---
id: guide-opencode
title: 'Construire son chatbot avec OpenCode'
sidebar_label: 'Construire son chatbot avec OpenCode'
sidebar_position: 22
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Construire son chatbot avec OpenCode

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Éducation civique</span>
  <span className="badge badge--info">IA générative</span>
  <span className="badge badge--warning">OpenCode</span>
  <span className="badge badge--warning">GitHub Codespaces</span>
  <span className="badge badge--info">MCP</span>
</div>

| Projet       | Durée                        | Difficulté    | Âge                       |
| ------------ | ---------------------------- | ------------- | ------------------------- |
| Youth AI Lab | Environ 1 h la première fois | Intermédiaire | Adultes (animateur·rices) |

## Matériel

- Un ordinateur avec un navigateur web : le Codespace s'ouvre dans le navigateur, il n'y a rien à installer
- Un compte GitHub
- Une façon de payer le modèle d'IA : une clé d'API ou un abonnement (voir plus bas)
- **Le dépôt du guide, où l'on travaille** : https://github.com/Youth-AI-Lab/yal-opencode-guide
- **Ouvrir le Codespace du guide, la première fois seulement** : https://codespaces.new/Youth-AI-Lab/yal-opencode-guide
- **Le kit de la série d'ateliers** : https://github.com/Youth-AI-Lab/yal-workshop-kit
- **La page de présentation des ressources** (anglais) : https://youth-ai-lab.github.io/yal-workshop/resources.html

</div>

<img src="/img/ressources/youth-ai-lab/guide-opencode/icone.png" alt="Construire son chatbot avec OpenCode" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

:::info[Un guide pour les animateur·rices, à suivre seul·e]

Ce guide s'adresse aux animateur·rices, éducateur·rices et facilitateur·rices qui travaillent avec des jeunes de 12 à 25 ans. Il sert à leurs propres essais et à la préparation d'ateliers entre adultes, **jamais à un usage avec des jeunes**. Il complète la série d'ateliers [Construire son propre chatbot : ce qu'il lit, et qui décide](/ressources/youth-ai-lab/construire-chatbot-1-instructions), sans la refaire. Les pages, les commandes et le Codespace sont en anglais ; cette fiche en est l'adaptation française.

:::

---

## À quoi sert ce guide

Dans les ateliers de la série, le chatbot est construit avec **Claude Code**, l'outil d'Anthropic. Ce guide reprend les mêmes pièces avec **OpenCode**, un assistant d'IA libre et gratuit qui fonctionne dans un terminal (la fenêtre où l'on tape des commandes). Il montre comment chaque pièce s'écrit dans OpenCode, ce qu'OpenCode fait autrement que Claude Code, et comment réemployer le tout pour un autre sujet.

Trois idées organisent le guide :

- **Un chatbot, c'est quelques fichiers.** Le chatbot du guide est un dossier : un texte d'instructions, quelques documents, deux skills, un petit programme qui donne le niveau de danger de feu du jour, et un fichier de configuration qui dit ce que le chatbot a le droit de faire. On peut lire chaque fichier, le modifier, copier le dossier et le partager. C'est ce que Claude Projects ou Gemini Gems cachent derrière leurs cases _Instructions_ et _Knowledge_.
- **Un outil, plusieurs modèles.** Un modèle est le programme d'IA qui écrit les réponses, fourni par une entreprise. Claude Code ne fonctionne qu'avec les modèles Claude ; OpenCode accepte de nombreux fournisseurs. Le même dossier fonctionne avec tous : on peut donc comparer des modèles sur les mêmes questions.
- **Sûr par défaut, vérifié avant chaque démarrage.** Tel qu'il est livré, OpenCode est fait pour écrire du code : il lit, écrit et lance des commandes sans demander. La configuration du guide en fait un chatbot qui lit ses propres documents, n'écrit que dans son dossier de documents après vous avoir demandé, et ne lance jamais de commande. La commande `chatbot` vérifie le dossier avant chaque démarrage.

Chaque partie a été essayée avec OpenCode 2.1.4 et quatre façons de payer le modèle, en octobre 2026. Là où quelque chose n'a pas marché ou n'a pas été testé, le guide le dit.

## Pour qui, et pour qui pas

- **Vous avez suivi un atelier de la série** et voulez essayer les mêmes pièces avec un autre modèle, ou sur votre propre sujet. Le guide est fait pour vous, idéalement après l'atelier 4, quand les quatre pièces ont été vues. Chaque partie correspond à un atelier : la partie 3 à l'atelier 1 (les instructions), la partie 4 aux ateliers 2, 3 et 5 (les connaissances), la partie 5 à l'atelier 3 (les skills) et la partie 6 à l'atelier 4 (les outils).
- **Vous voulez concevoir votre propre atelier** sur les chatbots, avec des animateur·rices ou d'autres adultes : le guide donne un dossier de départ et, en partie 9, une liste de vérification.
- **Vous voulez un chatbot que les jeunes de votre groupe utilisent eux-mêmes**, sur leur téléphone : ce guide n'est pas le bon outil. OpenCode fonctionne dans un terminal, pour vous. Pour un groupe, le guide renvoie à [Partager un chatbot avec un groupe grâce à Open WebUI](/ressources/youth-ai-lab/guide-open-webui).

Vous n'avez besoin d'aucune connaissance technique : le guide donne chaque commande à taper. Il propose aussi un test pour savoir si vous êtes prêt·e : pouvoir dire, pour une de vos activités, quels trois ou quatre documents un chatbot devrait connaître, et ce qu'il devrait refuser de faire.

## Objectifs d'apprentissage

**À la fin de ce guide, vous serez capable de...**

- **Ouvrir** un Codespace, démarrer le chatbot, brancher une clé ou un abonnement et poser une première question
- **Distinguer** le rôle de chaque fichier du chatbot, ce qu'OpenCode envoie au modèle à chaque question, et ce qu'il fait autrement que Claude Code
- **Modifier** les instructions, ajouter un document, utiliser une skill et en écrire une, puis obtenir une donnée du jour par un outil
- **Expliquer** ce que la commande `chatbot` vérifie avant de démarrer, ce que signifient ses refus, et répondre sans risque aux demandes d'OpenCode
- **Comparer** deux modèles sur les mêmes questions, et savoir ce que coûte chacun
- **Adapter** le chatbot à un autre sujet ou à un atelier pour adultes, et le partager sous forme de paquet

## Avant de commencer

Il faut un **compte GitHub**, **une façon de payer le modèle** et environ **une heure**. Le guide demande de régler dès maintenant, dans les paramètres Codespaces du compte GitHub, le délai d'inactivité au maximum (240 minutes) et une région en Europe : ce réglage garde le Codespace et les conversations en Europe, mais ne change pas l'endroit où partent les questions.

### Cinq façons de payer le modèle

Le chatbot envoie chaque question à un modèle exploité par une entreprise, et quelqu'un paie. Une seule façon suffit pour suivre le guide ; avec deux, on peut les comparer en partie 8. Cette étape se fait **seul·e, jamais avec l'écran projeté**, car on y voit sa clé.

| Façon                             | Ce qu'il faut                                         | Ce que ça coûte                                                 | À quoi ça sert                                                                                                                                         |
| --------------------------------- | ----------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1. Clé d'API Anthropic            | un compte sur la Claude Console, avec des crédits     | paiement à la question, avec un plafond de dépense              | vos essais ; un groupe seulement avec une clé de votre structure, après sa décision                                                                    |
| 2. Clé d'API Google Gemini        | un compte Google, adulte                              | une offre gratuite avec limites quotidiennes, ou payante        | vos essais professionnels ; un groupe seulement avec une clé payante de votre structure, après sa décision ; jamais pour des jeunes de moins de 18 ans |
| 3. Clé OpenRouter                 | un compte, adulte, avec des crédits                   | paiement à la question, plus des frais de 5,5 % sur les crédits | vos essais, pour comparer des centaines de modèles ; pas pour un groupe                                                                                |
| 4. Abonnement GitHub Copilot      | une offre payante (Pro, Pro+, Business ou Enterprise) | compris dans l'abonnement                                       | vos essais seulement                                                                                                                                   |
| 5. Abonnement ChatGPT Plus ou Pro | un compte ChatGPT avec cette offre                    | compris dans l'abonnement                                       | vos essais seulement                                                                                                                                   |

Une clé d'API est un code secret qui autorise un logiciel à utiliser le compte payant. Pour la clé Anthropic, le guide fait créer un espace de travail (`workspace`) dédié, avec un plafond de dépense : l'espace `Default` ne peut pas en avoir. Pour Copilot et ChatGPT, il faut d'abord **désactiver l'usage de ses données pour l'entraînement** dans les paramètres du compte. Un abonnement Claude Pro ou Max ne fonctionne pas ici : les conditions d'Anthropic l'interdisent dans d'autres outils.

Le détail de chaque façon est dans la section [Before you start: five ways to pay for the model](https://github.com/Youth-AI-Lab/yal-opencode-guide#before-you-start-five-ways-to-pay-for-the-model).

### Le coût du Codespace

Un compte GitHub gratuit a droit chaque mois à 120 heures de calcul et à 15 Go de stockage pour les Codespaces. Sur la machine à 2 cœurs du guide, une heure compte double, soit **environ 60 heures par mois**. Il faut arrêter le Codespace après usage ; GitHub supprime un Codespace resté arrêté pendant 30 jours.

---

## Déroulé du guide

Le guide anglais compte neuf parties, précédées de deux sections à lire avant tout : les conditions d'usage avec des jeunes et les façons de payer le modèle.

### Partie 1 : Mise en place

En cinq étapes : ouvrir le Codespace, démarrer le chatbot, brancher sa clé ou son abonnement (commande `/connect` dans OpenCode), choisir le modèle (`/models`), puis attendre que l'outil soit prêt avant de poser la première question. On démarre toujours le chatbot ainsi, jamais avec `opencode` seul :

```bash
chatbot
```

Pour un abonnement ChatGPT, dans un Codespace, la connexion se fait depuis le terminal et non par `/connect` : quitter OpenCode et taper `opencode auth login openai` (détail dans [Way 5](https://github.com/Youth-AI-Lab/yal-opencode-guide#way-5---a-chatgpt-plus-or-pro-subscription) du guide).

La commande vérifie le dossier puis affiche `All checks passed. Starting OpenCode in chatbot/ (the current folder).` Dans OpenCode, la dernière ligne de la zone de saisie doit commencer par `Chatbot` ; si elle affiche `Build`, il faut quitter tout de suite avec `Ctrl+C`. Point de vigilance : le lien de création ne sert qu'une fois, sinon il crée un nouveau Codespace sans vos modifications. Voir [Part 1 - Set up](https://github.com/Youth-AI-Lab/yal-opencode-guide#part-1---set-up).

### Partie 2 : Ce que fait OpenCode, comparé à Claude Code

Cette partie présente le dossier du chatbot, fichier par fichier, et ce qui est envoyé au modèle à chaque question : le préprompt propre à OpenCode, la liste des skills et des outils, vos instructions, puis la conversation. Les documents ne partent que lorsque le chatbot les ouvre, avec au plus 15 étapes par question. Un tableau compare les deux outils. Point de vigilance : le préprompt d'OpenCode présente le modèle comme un agent de programmation, et avec de simples instructions le modèle se comporte parfois comme tel. Voir [Part 2](https://github.com/Youth-AI-Lab/yal-opencode-guide#part-2---what-opencode-does-compared-with-claude-code).

### Partie 3 : Les instructions

Les instructions (on dit aussi préprompt) disent au modèle qui il est pour votre groupe, ce qu'il fait et ce qu'il refuse. Ici, c'est le fichier `chatbot/AGENTS.md`, dont les sections suivent le « prompt minimal » de l'activité [WikiYouthBot](/ressources/youth-ai-lab/wikiyouthbot). On y change une chose visible et on la voit appliquée dès la question suivante, sans redémarrer. Point de vigilance : tout ce qui est dans `AGENTS.md` est envoyé au modèle, y compris les notes entre `<!--` et `-->`, que Claude Code retire ; la commande `chatbot` refuse un fichier qui en contient. Les dernières règles, sur une personne en danger et sur des règles qui ne changent pas, sont à garder dans tout chatbot. Voir [Part 3](https://github.com/Youth-AI-Lab/yal-opencode-guide#part-3---the-instructions-agentsmd).

### Partie 4 : Les connaissances

Les connaissances sont les documents à partir desquels le chatbot répond, dans le dossier `chatbot/knowledge/`, avec une liste `knowledge/index.md` qu'il lit en premier. Le chatbot ne reçoit pas tout : il lit la liste, cherche un mot, ouvre les fichiers utiles. On ajoute un document à la main, puis un autre avec la skill `source-note`, qui écrit `Source: TO BE COMPLETED` plutôt que d'inventer une source. Point de vigilance : OpenCode demande avant chaque écriture ; répondre `Allow once` ou `Reject`, jamais `Always allow`. N'ajouter que des documents qu'on a le droit d'envoyer à un service en ligne, jamais d'informations personnelles. Voir [Part 4](https://github.com/Youth-AI-Lab/yal-opencode-guide#part-4---the-knowledge).

### Partie 5 : Les skills

Une skill est une courte procédure que le chatbot suit quand la demande correspond à sa description : faire un quiz, écrire un document. On utilise la skill `quiz` (trois questions pour des 12-15 ans, chacune avec trois réponses possibles et le nom du document source), puis on écrit sa propre skill à partir d'un gabarit fourni. Point de vigilance : c'est la description qui décide quand la skill sert ; une skill sans description n'est jamais proposée au modèle. Voir [Part 5](https://github.com/Youth-AI-Lab/yal-opencode-guide#part-5---skills).

### Partie 6 : Les outils avec MCP

Certaines informations changent chaque jour, comme le niveau de danger de feu : aucun document ne peut les contenir. Un outil MCP (Model Context Protocol, une façon commune de brancher de petits programmes sur des applications d'IA) va les chercher. L'outil `fire-danger`, repris du kit, lit un fichier où une personne recopie le niveau du jour depuis la source officielle. L'outil ne donne un niveau que si le fichier est daté du jour et que le statut est `"live"` ; sinon il ne donne aucun niveau et le chatbot dit pourquoi, avec la phrase de la source. Points de vigilance : **ne jamais inventer un niveau**, et quitter OpenCode avant de modifier `opencode.jsonc`, car une seule erreur de frappe lui fait ignorer tout le fichier, règles comprises. Voir [Part 6](https://github.com/Youth-AI-Lab/yal-opencode-guide#part-6---tools-with-mcp).

### Partie 7 : La sécurité, ce que le chatbot a le droit de faire

Sans règles, OpenCode lit, écrit, lance des commandes et va sur le web sans demander ; lors des essais, il a même lancé une commande qui copiait un fichier de clé. Cette partie explique ce que vérifie `chatbot` avant chaque démarrage (un tableau, une ligne par contournement trouvé pendant les essais), comment lire ses refus et comment répondre aux demandes d'OpenCode. Elle dit aussi comment recevoir un chatbot : de préférence sous forme de paquet (`chatbot export` puis `chatbot import`), car les programmes `mcp/` d'un dossier reçu démarrent dès l'ouverture, avec vos droits et hors de toute règle, et pourraient lire votre clé. Un dossier entier se vérifie d'abord avec `chatbot check`. Une sous-partie détaille les dix règles du fichier de configuration. Point de vigilance : `All checks passed` veut dire que les règles tiennent, pas que le chatbot est bon. Voir [Part 7](https://github.com/Youth-AI-Lab/yal-opencode-guide#part-7---safety-what-the-chatbot-may-do).

### Partie 8 : Tester et comparer des modèles

Quatre questions de contrôle, chacune posée après `/new` : une à laquelle un document répond, une sans réponse dans les documents (la bonne réponse est « je ne sais pas »), une pour l'outil, et un message inquiet, auquel le chatbot doit répondre avec bienveillance, orienter vers un adulte de confiance et vers le 112 en cas de danger immédiat, sans demander de détails. On change ensuite de modèle et on compare. Le guide donne ce qui a été observé le 27 octobre 2026 avec six combinaisons de fournisseur et de modèle. Point de vigilance : quatre bonnes réponses ne sont pas un feu vert pour un usage avec des jeunes. Voir [Part 8](https://github.com/Youth-AI-Lab/yal-opencode-guide#part-8---test-and-compare-models).

### Partie 9 : Le réemployer pour son chatbot ou son atelier

On copie le dossier pour un autre sujet et on change les pièces dans l'ordre : instructions, documents, skills, outil. Une liste de vérification précède tout usage. Pour un atelier entre adultes, chaque binôme ouvre son propre Codespace depuis une copie du dépôt et reçoit sa propre clé, avec un plafond de dépense bas. Pour partager, `chatbot export` crée un paquet `.zip` sans la configuration ni le programme de l'outil, et `chatbot import` le rouvre avec ceux du guide. Voir [Part 9](https://github.com/Youth-AI-Lab/yal-opencode-guide#part-9---reuse-it-your-own-chatbot-or-workshop).

---

## Sécurité et protection des données

:::info[Notes pour l'animateur·rice]

**Par défaut, ce dispositif ne s'utilise jamais avec des jeunes**, même projeté au mur. Pour vos essais, ne tapez que des questions inventées : jamais un cas réel, jamais les mots d'un·e jeune, jamais un nom, un établissement, une information de santé ou tout ce qui permettrait d'identifier quelqu'un. Tout ce que vous tapez est envoyé à l'entreprise qui exploite le modèle, et reste aussi enregistré dans le Codespace (`~/.local/share/opencode/`).

:::

- **Votre structure décide** : un chatbot utilisé avec des jeunes relève de la structure, pas de l'animateur·rice seul·e. Le guide demande de consulter la personne chargée de la protection des données et liste ce qu'il faut : un compte au nom de la structure, un contrat de sous-traitance avec le fournisseur du modèle (article 28 du RGPD), souvent une analyse d'impact (article 35), et la bonne règle de consentement.
- **Dire qu'on parle à une IA** : depuis le 2 août 2026, le règlement européen sur l'IA (article 50) impose d'informer les personnes qu'elles dialoguent avec une IA, au plus tard lors de la première interaction.
- **Quand un·e jeune confie quelque chose d'inquiétant** : le chatbot répond avec bienveillance et oriente tout de suite vers un adulte, l'animateur·rice suit la procédure de protection de sa structure, et personne ne promet de garder un secret.
- **Où vont les données** : chaque question, avec vos instructions et les passages de documents ouverts, est envoyée au fournisseur. Le guide résume, pour chaque façon de payer, ce que disent les fournisseurs (durée de conservation, entraînement, lieu de stockage), vérifié en octobre 2026, et rappelle qu'il faut relire ces pages. Garder les questions dans l'Union européenne demande un fournisseur adapté et un contrat au nom de la structure : quatre options sont citées, non testées avec le guide (à compléter).
- **Les clés hors du dossier** : OpenCode garde la clé dans le dossier personnel, jamais dans le dossier du chatbot, qu'on peut donc partager sans la clé. Ne jamais mettre de clé, de mot de passe ou d'information personnelle dans le dossier d'un chatbot, ne jamais taper sa clé dans la conversation.
- **Deux commandes qui affichent la clé** : ne jamais lancer `opencode auth export` ni `opencode api get /api/model`, qui ont affiché la clé en clair lors des essais. Ne pas commencer un message par `!`, qui lance soi-même une commande du terminal : utiliser le terminal de VS Code.
- **Ce que les règles ne peuvent pas empêcher** : le choix `Always allow` (ou l'option `--auto`), qui transforme chaque demande en oui silencieux ; une recherche qui lit un fichier qu'on ne peut pas ouvrir ; un document qui contient des consignes adressées au modèle ; un modèle qui tente de vous faire lancer une commande ou coller un réglage. Ne jamais le faire parce que le chatbot le demande.

Pour le détail, voir [With young people: what this guide does not cover](https://github.com/Youth-AI-Lab/yal-opencode-guide#with-young-people-what-this-guide-does-not-cover) et [What the rules cannot stop](https://github.com/Youth-AI-Lab/yal-opencode-guide#what-the-rules-cannot-stop).

---

## Coûts

- **Le modèle** : avec une clé, le plafond de dépense chez le fournisseur est la seule vraie limite. Avec un abonnement, l'usage est décompté de l'offre. L'offre gratuite de Gemini ne coûte rien, dans ses limites quotidiennes.
- **Ce qu'affiche OpenCode** est une estimation, pas une facture. Avec une clé Anthropic, les questions des essais ont été estimées entre 0,008 \$ et 0,042 \$ chacune, environ 0,08 \$ pour les quatre tâches de test ; le coût réel peut être un peu plus élevé. Le vrai coût se lit sur le site du fournisseur, après la première séance, pas sur l'écran projeté.
- **Une requête de moins par conversation** : la configuration du guide coupe la requête qu'OpenCode envoie par défaut pour donner un titre à chaque conversation.

## Limites

- **Les règles d'un chatbot ne sont pas un verrou** : les instructions réduisent le risque, mais une personne qui insiste peut parfois en faire contourner une. Les règles de permission de `opencode.jsonc` sont plus solides : un refus (`deny`) tient quoi que le modèle écrive.
- **OpenCode reste un outil de programmation** : son préprompt décrit un agent de programmation, et ses textes d'exemple parlent de corriger des tests.
- **Les modèles changent** : les chiffres du guide ont été mesurés le 27 octobre 2026, avec OpenCode 2.1.4. Les parties 1 à 9 ont été suivies dans un Codespace le 28 octobre 2026, avec une clé Anthropic et Claude Sonnet 5.5 ; elles n'ont pas été suivies à nouveau avec l'image actuelle du guide.
- **Non testé** : un modèle local avec Ollama (à compléter), un abonnement Copilot Free, l'accès d'un·e animateur·rice à l'offre gratuite de GitHub Education pour Copilot Pro (à compléter). OpenRouter n'a été vérifié qu'avec des clés de test, sans vraie conversation. Gemini, Copilot et ChatGPT ont été testés sur un ordinateur ; dans le Codespace, seulement la connexion à Copilot et à ChatGPT, avec une réponse pour chacun.
- **Le Codespace n'est pas un serveur** : il s'arrête après son délai d'inactivité (4 heures au plus).

---

## Indicateurs de réussite

- Le chatbot démarre avec `chatbot`, et la zone de saisie d'OpenCode affiche `Chatbot`, pas `Build`
- Vous savez **dire quel fichier fait quoi** : instructions, documents, skills, outil, configuration
- Le chatbot **nomme le document** de chaque réponse et dit « je ne sais pas » quand aucun document ne répond
- L'outil `fire-danger` donne le niveau recopié depuis la source officielle, ou dit que personne ne l'a rempli, **sans jamais deviner**
- Vos quatre questions de contrôle sont bien traitées, y compris le message inquiet, et vous avez **comparé au moins deux modèles**
- `chatbot check` affiche `All checks passed` sur votre propre copie, et aucune règle enregistrée par `Always allow` ne subsiste

---

_Cette fiche fait partie du projet [Youth AI Lab](/projets/youth-ai-lab), financé par le programme Erasmus+. Adaptation française de https://github.com/Youth-AI-Lab/yal-opencode-guide (anglais), contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._

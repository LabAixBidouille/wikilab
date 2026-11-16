---
id: construire-chatbot-5-wiki
title: 'Organiser ce que sait un chatbot dans un wiki'
sidebar_label: 'Organiser ce que sait un chatbot dans un wiki'
sidebar_position: 18
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Organiser ce que sait un chatbot dans un wiki

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Éducation aux médias</span>
  <span className="badge badge--info">IA générative</span>
  <span className="badge badge--info">Esprit critique</span>
  <span className="badge badge--warning">Claude Code</span>
  <span className="badge badge--warning">Open WebUI</span>
  <span className="badge badge--warning">graphify</span>
</div>

| Projet       | Durée                       | Difficulté    | Âge                       |
| ------------ | --------------------------- | ------------- | ------------------------- |
| Youth AI Lab | 2 h (110 min + 10 de marge) | Intermédiaire | Adultes (animateur·rices) |

## Matériel

- 1 ordinateur par binôme, avec un navigateur web : rien à installer
- 1 compte GitHub par binôme (un compte gratuit suffit)
- 1 clé d'accès au modèle (clé API Anthropic, qui commence par `sk-ant-`, ou clé OpenRouter, qui commence par `sk-or-`) par binôme, fournie par l'animateur·rice
- Le fichier `my-work.zip` enregistré par le binôme à la fin de l'atelier 4 (facultatif)
- La fiche d'une page (`sheet.md`), imprimée, une par binôme
- 1 carte vierge ou une demi-feuille par personne, pour la carte de sortie

**Ressources en ligne**

- Le dépôt de l'atelier, où l'on travaille : https://github.com/Youth-AI-Lab/yal-workshop-wiki
- Les diapositives de l'animateur·rice : https://youth-ai-lab.github.io/yal-workshop/5/
- La fiche animateur : https://youth-ai-lab.github.io/yal-workshop/5/facilitator.html

</div>

<img src="/img/ressources/youth-ai-lab/construire-chatbot-5-wiki/icone.png" alt="Organiser ce que sait un chatbot dans un wiki" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

:::info[Atelier 5 sur 6 de la série Construire son propre chatbot : ce qu'il lit, et qui décide]

Cet atelier est le dernier sur le chatbot du binôme. Il s'adresse aux animateur·rices, qui le suivent entre adultes avant tout usage avec des jeunes. Atelier précédent : [Brancher des outils sur un chatbot](/ressources/youth-ai-lab/construire-chatbot-4-outils). Atelier suivant : [Apprendre à un petit modèle à trier les messages](/ressources/youth-ai-lab/construire-chatbot-6-tri). Début de la série : [Donner des instructions à un chatbot et le tester](/ressources/youth-ai-lab/construire-chatbot-1-instructions).

Les pages, les commandes et le Codespace sont en anglais ; cette fiche en est l'adaptation française. Les captures d'écran annotées se trouvent dans la page de l'atelier, sur le dépôt.

:::

---

## Introduction

À l'atelier 3, le modèle cherchait de nouveau dans les documents à chaque question, et ne gardait rien de ce qu'il avait trouvé. Aujourd'hui, le travail est fait **avant** la question : le modèle écrit des pages reliées entre elles, une personne décide de ce que l'on garde, et le chatbot lit ce qui est déjà rangé. Une personne peut suivre les liens de page en page, et un modèle aussi. On termine en rassemblant tout ce qui a été construit depuis le premier atelier dans un seul fichier. La question du jour :

> **Comment ranger des connaissances pour qu'une personne et un modèle puissent les explorer ?**

**Pourquoi cette approche ?** Le mode B lisait tout, à chaque fois. Avec le RAG, un moteur de recherche choisissait des extraits, et le modèle ne recevait qu'eux. Le mode C cherchait, puis repartait de zéro à la question suivante. Chaque question payait donc de nouveau le même travail. Un **wiki** fait ce travail une seule fois, à l'avance. C'est un ensemble de pages, une page par **sujet** (une règle, un lieu, un organisme), reliées entre elles, et chaque fait se termine par une **note de bas de page**, une marque qui renvoie à sa source.

Mettre par écrit ce que l'on sait a toujours compté. Cela compte encore plus aujourd'hui : un modèle peut explorer ces pages à votre place, suivre leurs liens, et retrouver ce que vous aviez oublié savoir. On appelle un tel ensemble de notes un **second cerveau** (l'expression vient du livre de Tiago Forte, _Building a Second Brain_). Un wiki écrit et tenu à jour par un modèle est une idée qu'Andrej Karpathy a décrite en avril 2026 ([LLM Wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)) : cet atelier la suit.

Cela a un prix : les pages vieillissent, et elles peuvent s'éloigner de leurs sources. C'est pourquoi **le modèle entretient les pages, et une personne décide.** Le wiki garde un historique, le **journal** (_log_). Le modèle peut vérifier tout le wiki avec un **lint** (une relecture automatique), qui signale les problèmes sans rien corriger de lui-même. Et quand un modèle devine un lien entre deux idées, une personne va voir dans les sources.

**Le lien avec WikiYouthBot.** Dans l'activité [Construire le chatbot de son quartier](/ressources/youth-ai-lab/wikiyouthbot), le chatbot se construit dans un outil qui a **deux cases** : _Instructions_ et _Knowledge_ (connaissances). On peut déjà le faire aujourd'hui avec Open WebUI : voir la fiche [Partager un chatbot avec un groupe grâce à Open WebUI](/ressources/youth-ai-lab/guide-open-webui). La partie 2 fournit des pages propres pour la case _Knowledge_, et la partie 5 remet tout dans les deux cases. Ce que des jeunes ont construit avec cette activité à La Rochelle, en juillet 2026 : https://youth-ai-lab.github.io/wikiyouthbot/

Toute la série, une pièce du chatbot à la fois :

- **Atelier 1** : les instructions, et comment tester un chatbot
- **Atelier 2** : toutes les connaissances dans le contexte, puis un RAG
- **Atelier 3** : le modèle cherche lui-même, et les skills
- **Atelier 4** : des outils qui agissent à l'extérieur, comme le niveau de danger d'incendie du jour
- **Atelier 5** (celui-ci) : organiser ce qu'il sait dans un wiki, et empaqueter le chatbot de son territoire
- **Atelier 6** : régler un petit modèle, pour trier les messages avant le chatbot

Le binôme continue de tester son chatbot : aujourd'hui, la colonne **E** du tableau de scores, avec les questions 3, 10, 11 et 12.

**Avant de commencer.** Apporter `my-work.zip`, le fichier enregistré à la fin de l'atelier précédent. Sans lui, on travaille avec le chatbot d'exemple (Feurisson) et le document de Bénévent, et on voit quand même tout.

**Documents de référence**, tous dans le Codespace, dans la liste des fichiers à gauche, une fois la partie 1 terminée :

- `wiki/index.md` et `wiki/log.md` : la liste des pages, et l'historique du wiki.
- `wiki/AGENTS.md` : le **schéma**, les règles que suit le modèle quand il écrit dans le wiki.
- `.claude/skills/ingest/` et `.claude/skills/lint/` : les deux skills du jour.
- `test-questions.md` et `scores.md` : le jeu de questions de test et la feuille de scores.

:::info[Notes pour l'animateur·rice]

Message à transmettre : **le travail est fait une fois, avant la question, et chaque fait garde son chemin vers une source ; le modèle écrit et signale, une personne vérifie, arbitre et signe.** C'est aussi le dernier atelier sur le chatbot du binôme : il répond à la question de toute la série, « qu'est-ce qui entre dans le contexte du modèle, quand, et qui décide ? ».

Préparation, environ 1 heure :

- **Une clé API Anthropic par binôme**, toutes dans **un seul espace de travail pour la salle**, plafonné à **3 \$ × le nombre de binômes**. Le plafond porte sur l'espace de travail, pas sur chaque clé : un binôme peut consommer la part d'un autre. Garder la console Anthropic ouverte pendant l'atelier. Chaque structure partenaire paie ses propres séances.
- **Ou des clés OpenRouter** (`sk-or-`) : mêmes commandes, aucun modèle Claude, et toute la salle sur un seul modèle pour que les totaux restent comparables (voir le guide [Utiliser les outils des ateliers avec une clé OpenRouter](/ressources/youth-ai-lab/guide-openrouter)). Ces commandes sont dans l'image `2026.10.43`. Les chiffres de cette fiche viennent de Claude et ne valent pas pour OpenRouter. Coût par binôme avec le modèle par défaut, DeepSeek V4 Flash : environ 0,04 \$ pour les commandes du terminal de cet atelier, et environ 0,12 \$ pour les ateliers 1 à 5, joués une fois le 5 novembre 2026 dans un conteneur de l'image 2026.11.4, pas dans un Codespace ni avec un groupe ; sans compter `replay RAG` ni les chatbots d'Open WebUI. Un binôme qui pose plus de questions dépense plus : c'est un minimum. Les ateliers sont pour les adultes : aucun jeune ne tape dans le Codespace ni ne détient de clé, et OpenRouter demande des utilisateurs de 18 ans et plus. Les jeunes n'utilisent qu'un chatbot dans Open WebUI, dans leur navigateur. Quand ce qu'ils ont écrit passe par OpenRouter, retirer les noms et les informations personnelles, et taper d'abord `workshop-login --europe` (voir la partie [Sécurité et protection des données](/ressources/youth-ai-lab/guide-openrouter#sécurité-et-protection-des-données) de ce guide). Avec le modèle de chatbot de `--europe` (Mistral Small 2603), **le lint n'est pas fiable** : le 2 novembre 2026, il n'a lu que `index.md` et `log.md`, puis a répondu « Everything is clean! », alors que les pages avaient 6 contradictions et qu'une page manquait dans l'index. Un seul essai. Si un binôme obtient un rapport propre, montrer les propositions de votre propre rapport, obtenu par la voie Claude.
- **Faire tout le parcours soi-même** (environ 30 minutes) dans un Codespace gardé pour la séance : environ 1,05 \$ au total.
- **Préparer la projection de la partie 4** : `wiki-graph`, `wiki/graph.md` ouvert avec `Ctrl+Shift+V`, et `wiki-explore` dans un onglet à côté. Dézoomer les deux cartes jusqu'à ce qu'aucune étiquette ne soit lisible.
- **Rappeler à chaque binôme**, quelques jours avant, d'apporter son `my-work.zip` le plus récent, avec un résumé signé à l'atelier 3.
- **Imprimer** la fiche d'une page, et la traduire si besoin en gardant en anglais les commandes et ce qu'affiche le terminal.
- **Formulaire d'auto-évaluation** (« After ») : vérifier qu'il s'ouvre sur un téléphone par son QR code et qu'il ne recueille ni nom, ni adresse e-mail, ni âge (voir la page d'auto-évaluation https://youth-ai-lab.github.io/yal-workshop/1/self-assessment.html ; le lien du formulaire lui-même est à compléter).
- N'utiliser cet atelier qu'avec l'image `2026.10.34` ou une plus récente.

:::

### Structure de l'atelier

| Partie                         | Durée  | Niveau | Ce que l'on fait                                                     | Mode     |
| ------------------------------ | ------ | ------ | -------------------------------------------------------------------- | -------- |
| Partie 1 : Accueil             | 20 min |        | Ouvrir le Codespace, récupérer son travail, lancer Open WebUI        | -        |
| Partie 2 : Le wiki             | 30 min | ★★★    | Lire le wiki, y ajouter son document, voir quelles pages il alimente | `E`      |
| Partie 3 : Le lint             | 15 min | ★★     | Faire vérifier le wiki par le modèle, lire le rapport, décider       | `E`      |
| Partie 4 : Le graphe           | 25 min | ★★     | Explorer la carte des idées, vérifier un lien deviné par un modèle   | terminal |
| Partie 5 : Le chatbot construit | 20 min |        | Lire ses scores, empaqueter son chatbot, le voir dans Open WebUI     | terminal |
| Marge                          | 10 min |        | Réservée à la partie 5                                               | -        |

:::info[Notes pour l'animateur·rice]

La partie 3 est la plus serrée : 15 minutes, dont plus de 2 pour le lint, et un long rapport à trier. À 10 minutes, demander à tout le monde d'arrêter de lire et de décider. Si le temps manque à la partie 5, garder `chatbot-export` et `workshop-save` : tout le reste peut attendre, mais pas le Codespace, qui s'arrête de lui-même. Les 10 minutes de marge servent à la partie 5, y compris les 5 minutes du formulaire d'auto-évaluation, que les 20 minutes de la clôture ne comprennent pas. Les durées réelles de chaque partie sont à compléter après la répétition.

:::

### Glossaire

- **Modèle** : le programme d'IA générative qui lit un texte et écrit la suite (ici, Claude Sonnet avec une clé Anthropic, `deepseek/deepseek-v4-flash` avec une clé OpenRouter : le même pour tous les binômes qui ont ce type de clé).
- **Contexte** : tout ce que le modèle lit avant de répondre. La **fenêtre de contexte** est le maximum qu'il peut lire d'un coup.
- **Jeton** (_token_) : un morceau de mot, l'unité de mesure du contexte. La **jauge** affichée au-dessus de la zone de saisie indique combien de jetons sont dans le contexte à cet instant. Avec OpenCode, c'est le compteur **context** du panneau latéral.
- **Instructions** (ou préprompt) : le texte placé avant toute conversation pour donner au chatbot son rôle et ses règles, ici le fichier `AGENTS.md`.
- **Codespace** : un ordinateur prêté par GitHub, ouvert dans le navigateur avec l'éditeur VS Code. Rien à installer.
- **Claude Code** : l'outil qui fait dialoguer le modèle avec les fichiers du Codespace. La commande `workshop` le lance dans un mode de la série (`bare`, `A`, `B`, `C`, `D`, `E`, `F`). Avec une clé OpenRouter, elle lance **OpenCode** à sa place.
- **Mode E** : le chatbot qui lit d'abord le wiki, garde les outils de l'atelier 4, et ne cherche dans les sources que si le wiki ne suffit pas.
- **Skill** : une procédure écrite, que le modèle suit quand on lui demande une tâche précise (ici `ingest` et `lint`).
- **MCP** : une façon standard de brancher un outil extérieur sur un modèle (à l'atelier 4, le niveau de danger d'incendie du jour).
- **Wiki** : un ensemble de pages, une par sujet, reliées entre elles.
- **Note de bas de page** : la marque qui relie chaque fait d'une page à son document source.
- **Journal** (_log_) : l'historique du wiki, une ligne par changement.
- **Contradiction** : deux sources qui donnent des chiffres différents pour la même chose, ou une **portée** différente (le lieu, la période ou ce qui est compté).
- **Ingest** : la skill qui fait entrer un document dans le wiki.
- **Lint** : la skill qui vérifie tout le wiki, signale les problèmes et ne corrige rien d'elle-même.
- **Graphe de connaissances** : une carte des idées et des liens entre elles. Un **nœud** est un point de la carte, une **arête** est une ligne entre deux nœuds.
- **Communauté** : un groupe de nœuds fortement reliés, trouvé par un calcul.
- **EXTRACTED / INFERRED** : une arête écrite dans une page, ou une arête devinée par le modèle (une suggestion, pas un fait).
- **Instantané** (_snapshot_) : une image prise à un moment donné. Le graphe ne change pas quand le wiki change.
- **Juge** : un modèle qui propose une note pour chaque réponse ; une personne accepte ou corrige. C'est un modèle plus petit avec une clé Anthropic, `deepseek/deepseek-v4-flash` avec une clé OpenRouter.

---

## Objectifs d'apprentissage

À la fin de cet atelier, les participant·es seront capables de :

- **Expliquer** ce qu'est un wiki écrit par un modèle : des pages par sujet, une note de bas de page sur chaque fait, un journal, et pourquoi il garde deux chiffres qui ne concordent pas
- **Ajouter** leur propre document au wiki avec la skill `ingest`, et voir quelles pages il alimente
- **Lire** un rapport de lint et décider de ce qu'il faut appliquer
- **Vérifier** dans les sources un lien deviné par un modèle, et dire s'il tient
- **Empaqueter** le chatbot de leur territoire, et dire ce qu'ils changeraient avant qu'un groupe ne l'utilise

---

## Partie 1 : Accueil (20 min)

**Objectif** : ouvrir le Codespace, récupérer son travail, et lancer Open WebUI pour la partie 5.

Ouvrir le Codespace, un par binôme : https://codespaces.new/Youth-AI-Lab/yal-workshop-wiki

Ce lien crée la copie personnelle du dépôt, dans VS Code qui tourne dans le navigateur. **Avant de cliquer**, si le délai d'inactivité de ce compte GitHub n'est pas encore réglé, faire l'étape 1 de `SETUP.md` (1 minute) : sur https://github.com/settings/codespaces, régler **Default idle timeout** sur 120 minutes, puis **Save**.

### Étape 1 : Ouvrir le Codespace et enregistrer la clé

Suivre les étapes 1 à 5 de `SETUP.md`, avec le lien ci-dessus : laisser le Codespace attendre, l'ouvrir (bouton **Create codespace**), enregistrer la clé avec `workshop-login`, vérifier `Key OK`, avoir une première conversation avec `workshop bare`, et ouvrir un deuxième terminal (le `+` en haut à droite du panneau des terminaux).

Dans un nouveau Codespace, le premier `workshop E` demande encore une fois si l'on fait confiance au dossier : appuyer sur la **flèche vers le bas** pour choisir `Yes, I trust this folder`, puis **Entrée**. Si Claude Code s'est fermé, taper de nouveau `workshop E`.

:::info[Si vous utilisez OpenCode]

Mêmes commandes, après `workshop-login --engine opencode`. OpenCode demande l'autorisation avant chaque commande et chaque fichier qu'il écrit : `ingest` demande donc plus de réponses « allow ». `wiki-graph`, `wiki-explore` et `chatbot-export` n'utilisent aucun modèle. `ingest` et `lint` ont été mesurés avec OpenCode le 2 novembre 2026, avec une clé OpenRouter et deux petits modèles (DeepSeek v4 Flash, Mistral Small) : leur `ingest` n'a pas suivi toutes les règles du wiki, et un `lint` a dit que tout était propre alors que ce n'était pas le cas. Le 5 novembre 2026, un second essai de DeepSeek v4 Flash a écrit le journal et les liens, mais n'a noté aucune contradiction ; son `lint` a trouvé une source que la nouvelle page ne citait jamais, et 9 contradictions. Un seul essai à chaque fois. Lire le rapport du `lint` en le comparant aux pages ; avec une clé Claude : à compléter. Les mêmes pièces, dans un dossier de chatbot : la fiche [Construire son chatbot avec OpenCode](/ressources/youth-ai-lab/guide-opencode).

:::

:::info[Si votre clé commence par sk-or- (OpenRouter)]

OpenRouter donne accès aux modèles de nombreuses entreprises avec une seule clé. Cette voie n'utilise aucun modèle Claude, et il n'y a rien à choisir : coller la clé dans `workshop-login`, sans option, et la clé choisit OpenCode. `deepseek/deepseek-v4-flash` écrit les réponses et les note, car `score` et Open WebUI passent aussi par OpenRouter. Le détail de cette voie, commun à toute la série, est dans la section **With an OpenRouter key** de `SETUP.md`, dans le dépôt. `openwebui chatbot` avec le wiki et le modèle par défaut, DeepSeek V4 Flash, a été essayé une fois le 5 novembre 2026, sur un ordinateur portable et non dans un Codespace : à la question de savoir quelles pages parlent de l'Italie, le chatbot a ouvert l'index du wiki (`wiki/index.md`) et trouvé les 4 pages.

À l'enregistrement, le message de réussite devient :

```text
Key OK (OpenCode, OpenRouter, model openrouter/deepseek/deepseek-v4-flash). You can start: workshop bare
```

Avec un modèle gratuit, une ligne s'ajoute : `Free requests left today: <number>.`

Au démarrage d'une conversation, une ligne de plus dit `Engine: OpenCode (model openrouter/deepseek/deepseek-v4-flash)`, puis viennent le logo d'OpenCode et une zone de saisie. Les premiers écrans de Claude Code n'apparaissent pas. La jauge est propre à Claude Code : une fois la conversation commencée, le panneau latéral d'OpenCode a un compteur **context**, avec le coût (`Ctrl+X` puis `B` affiche ou masque ce panneau). OpenCode montre ce que le chatbot a fait au-dessus de chaque réponse, et `Ctrl+O` ne sert que dans Claude Code. Ses commandes `/` ne sont pas les mêmes.

Pour essayer un autre modèle, `workshop-login --models free` liste les modèles gratuits, qui ont un quota quotidien (voir [Avec une clé OpenRouter](#avec-une-clé-openrouter)), et `workshop-login --model <name>` en choisit un.

Ne comparer que ses propres colonnes : `score` écrit le modèle sous le tableau, et prévient quand deux colonnes ont utilisé des modèles différents. Ne comparer ses totaux qu'avec un binôme qui utilise le même modèle. Les chiffres de cette fiche sur le chatbot (coût, durée, jauge, notes) ont été mesurés avec Claude, pas avec ce modèle : les vôtres seront différents. Tout est détaillé dans le guide [Utiliser les outils des ateliers avec une clé OpenRouter](/ressources/youth-ai-lab/guide-openrouter).

:::

:::caution[Avec des jeunes et une clé OpenRouter]

Les ateliers sont pour les adultes : le Codespace et les clés restent chez eux. Aucun jeune ne tape dans le Codespace d'un atelier ni ne détient de clé (section **Young people and OpenRouter** de `SETUP.md`). Quand les mots des jeunes passent par OpenRouter, taper d'abord `workshop-login --europe`. Les requêtes ne vont alors que chez Mistral, hébergé en Europe, avec zéro conservation des données (_zero data retention_ : Mistral dit ne rien stocker). Le modèle par défaut est `mistralai/mistral-small-2603`. OpenRouter peut quand même les traiter ailleurs, et les comptes et la facturation peuvent rester aux États-Unis : garder ce traitement en Europe demande un forfait Business, que ces commandes ne prennent pas en charge. Ce réglage ne lève ni la règle des 18 ans et plus d'OpenRouter ni la section 5.2 de ses conditions, et les contenus signalés peuvent être conservés. Un chatbot déjà ouvert garde son ancienne règle : le fermer et le relancer. Lire la partie [Sécurité et protection des données](/ressources/youth-ai-lab/guide-openrouter#sécurité-et-protection-des-données) du guide OpenRouter avant toute séance avec des jeunes.

:::

:::info[Pas de Codespace ?]

Le même dépôt s'ouvre sur son propre ordinateur, avec Docker et VS Code : voir la fiche [Ouvrir les ateliers sur son propre ordinateur](/ressources/youth-ai-lab/guide-dev-containers).

:::

### Étape 2 : Récupérer son travail

1. **Glisser `my-work.zip`** depuis l'ordinateur dans la liste des fichiers du Codespace. Si le fichier a été téléchargé plusieurs fois, le navigateur a pu nommer le plus récent `my-work (1).zip` : glisser celui-là, et taper son nom exact entre guillemets, par exemple `workshop-start 5 --from "my-work (1).zip"`.
2. Dans le premier terminal, taper :

   ```bash
   workshop-start 5 --from my-work.zip
   ```

   Sans sauvegarde, taper `workshop-start 5`. Avec une sauvegarde, on doit voir `Restored from my-work.zip (saved on ...)` : vérifier que cette date est bien la fin de l'atelier 4. Si elle est plus ancienne, c'est une vieille sauvegarde : le signaler à l'animateur·rice. On voit ensuite les fichiers restaurés, puis :

   ```text
   Prepared for this workshop:
     - The wiki is ready (wiki-start): wiki/, and the skills ingest and lint.

   Ready for workshop 5.
   ```

   Sans sauvegarde, la liste « Prepared » indique aussi que `AGENTS.md` est désormais une copie de l'exemple Feurisson, et que le document de Bénévent est dans `corpus/` : un document officiel, sans résumé ni signature.

### Étape 3 : Lancer Open WebUI en arrière-plan

À la partie 5, on verra le chatbot terminé dans Open WebUI. Son premier démarrage prend quelques minutes (3 min 21 dans un Codespace le 26 octobre 2026, avec une image plus ancienne) : le lancer maintenant.

1. Dans le deuxième terminal, taper :

   ```bash
   openwebui start
   ```

2. Ne pas l'attendre : continuer la partie 2 dans le premier terminal. C'est terminé quand s'affiche `Open WebUI is ready, ...`.

:::caution[Attention]

**Ne jamais rendre public le port 3000** (onglet Ports, Port Visibility). Cet Open WebUI n'a pas de comptes : n'importe qui ayant le lien pourrait utiliser la clé du binôme.

:::

:::note[Point de contrôle]

`Key OK`, `Ready for workshop 5`, et `openwebui start` qui tourne dans le deuxième terminal.

:::

:::info[Notes pour l'animateur·rice]

- **Un binôme n'a pas de sauvegarde** : `workshop-start 5`, puis à la partie 2 `ingest corpus/80-benevento-aib-2026.pdf into the wiki`. Il a Feurisson et les mêmes étapes. Le dire clairement : personne n'a signé ce document.
- **Un binôme a restauré une vieille sauvegarde** (`saved on` n'est pas la fin de l'atelier 4) : `workshop-start 5 --from` avec le zip le plus récent, son nom exact entre guillemets.
- `workshop-start 5` lance déjà `wiki-start`, mais ne démarre pas Open WebUI : `openwebui start` se tape à la main.

:::

---

## Partie 2 : Le wiki (30 min)

**Objectif** : lire le wiki, y ajouter son propre document, et voir quelles pages il alimente.

L'animateur·rice a préparé ce wiki avant la séance : un modèle l'a écrit à partir de tous les documents de `corpus/`, sauf celui de Bénévent, puis le wiki est passé par un lint et des corrections.

### Ce que vous allez découvrir

- **Les notes de bas de page** : chaque fait d'une page renvoie à son document source.
- **Le journal** : l'historique du wiki. Il liste les **contradictions** : deux sources qui donnent des chiffres différents pour la même chose, ou une portée différente.
- **La skill `ingest`** : la procédure qui ajoute un document au wiki.

### Comment le wiki est alimenté, et comment le modèle s'en sert

- Les sources (`corpus/` et `summaries/`) → `ingest` → des pages par sujet
- Les pages → `index.md` (la liste des pages) et `log.md` (le journal)
- Le lint lit les pages et les sources → un rapport pour vous
- Votre question → le modèle, qui lit d'abord `index.md`, puis les pages utiles

Vous avez déjà des résumés : pourquoi des pages ? Un résumé suit un document. Une page du wiki suit un **sujet** : un document peut alimenter plusieurs pages, et une page peut citer plusieurs documents. Ce que disent les documents sur un sujet se trouve ainsi à un seul endroit.

En mode E, le modèle a pour consigne de lire d'abord `wiki/index.md`, puis les pages utiles, et de ne chercher dans les sources que si le wiki ne suffit pas. Il garde aussi les outils de l'atelier 4. Comme dans les autres ateliers, la **jauge** montre combien de jetons (des morceaux de mots) le modèle a lus, et la **fenêtre de contexte** est le maximum qu'il peut contenir.

**Idée clé** : le travail est fait une fois, avant la question. Chaque fait garde son chemin vers une source. Et quand deux sources ne concordent pas, le wiki garde les deux.

:::caution[Important]

Une page du wiki n'est pas un résumé signé. Son en-tête a une ligne `generated`, qui dit qu'un modèle l'a écrite, et aucune ligne `verified` : personne ne l'a signée.

:::

### Déroulé

#### Étape 1 : Lire une page

1. Ouvrir `wiki/index.md`, puis appuyer sur `Ctrl+Shift+V` pour le lire comme une page mise en forme.
2. Ouvrir `wiki/wildfire-prevention-ordinance-montoro.md`, et appuyer sur `Ctrl+Shift+V` (la partie 4 reviendra sur cette page). Chaque fait se termine par la note `[^ord-78]`. En bas de page, une ligne donne le titre de cette source, et **See also** renvoie à une autre page.
3. Fermer l'aperçu, et regarder l'en-tête du fichier. `sources` donne le fichier qui se trouve derrière la note, ici `../corpus/71-...pdf`. `generated` dit quel modèle a écrit la page, et quand.
4. Revenir à l'aperçu, cliquer sur le lien **See also**, puis sur un lien de la page qui s'ouvre. En deux clics, on passe de l'ordonnance d'une commune italienne aux bons réflexes de sécurité en France : c'est ainsi qu'une personne explore le wiki, et le modèle peut le faire aussi, en ouvrant la page qu'un lien nomme.

#### Étape 2 : Lire le journal

Ouvrir `wiki/log.md`, et appuyer sur `Ctrl+Shift+V` : une ligne par changement, `Creation`, `Update` ou `Contradiction`. Il y a 9 lignes `Contradiction` : appuyer sur `Ctrl+F` et chercher ce mot. En choisir une, la lire en binôme, et retrouver les deux sources qu'elle cite (deux lignes comparent deux passages d'un même document). Regarder ce qui diffère : le chiffre, ou la portée ?

La règle de la skill `ingest` : le modèle écrit `According to one source, X; according to another, Y` (« selon une source, X ; selon une autre, Y »), avec une note sur chacune. Il ne choisit pas, il n'enlève rien, et il ne reformule rien.

#### Étape 3 : Prédire avant d'ingérer

1. Trouver son numéro : chaque document et chaque résumé en a un au début de son nom de fichier, et il sert à retrouver son document dans le dessin. Avec une sauvegarde, c'est le résumé signé à l'atelier 3 : en général **81**, ou **80** si la page du binôme a été refusée ce jour-là. Ouvrir `summaries/index.md` : sous « Added during the session », la ligne du binôme doit indiquer `(human-reviewed)`. Si elle indique `(draft, not verified)`, on fera entrer à la place le texte officiel du document (étape 4). Sans sauvegarde, ou sans ligne à cet endroit, c'est Bénévent : chercher dans `corpus/` le fichier `8N-benevento-aib-2026.pdf` ; son numéro est en général **80**.
2. Regarder `wiki/index.md`, et **noter les pages que ce document devrait, selon vous, alimenter**.
3. `wiki-graph` n'utilise aucun modèle. Il lit les pages du wiki et écrit un dessin, `wiki/graph.md`, avec une boîte pour chaque page et une forme pour chaque document source. `--highlight` désigne le document à peindre en orange, avec les pages qui le citent. Dans le premier terminal, taper, avec son numéro :

   ```bash
   wiki-graph --highlight 81
   ```

   On doit voir ces lignes, puis une ligne qui explique comment afficher le dessin :

   ```text
   Wrote wiki/graph.md: 18 pages, 20 source documents.
   No page cites a document matching '81' yet. Has it been ingested? (ask the chatbot: "ingest summaries/<file>")
   ```

   La seconde ligne est ce qu'on veut à ce stade : aucune page ne cite encore le document. `18 pages, 20 source documents` est le wiki avant la modification. À l'étape 5, on retape la même commande, et on compare.

#### Étape 4 : Faire entrer son document dans le wiki

:::caution[Important]

**La skill `ingest` ne vérifie pas le statut d'un résumé** : elle prendrait aussi un brouillon. Ne faire entrer qu'un résumé signé, ou le texte officiel. Dans ce second cas, personne n'a signé ce que le modèle en écrit.

:::

:::caution[Important]

**Claude Code demande l'autorisation** avant d'écrire ou de modifier un fichier, comme à l'atelier 3. Lire ce qu'il veut écrire (les lignes vertes sont ajoutées, les rouges supprimées), puis accepter avec **1. Yes**. Pour une nouvelle page, la question est `Do you want to create ...?`. Pour une page qui existe déjà, c'est `Do you want to make this edit to ...?`, comme ceci :

```text
 Do you want to make this edit to ...?
 ❯ 1. Yes
   2. Yes, and switch to accept edits (auto-approve file edits and common file commands) for this session (shift+tab)
   3. No
 Esc to cancel · Tab to amend
```

**Ne jamais choisir 2** : on ne verrait plus ce qu'il écrit. **Ne jamais approuver une commande qui mentionne `sudo` ou `workshop-key`** : choisir **3. No**. Une telle commande pourrait lire votre clé.

:::

1. Dans le premier terminal, taper `workshop E`, puis demander, avec le nom de **votre** fichier :

   ```text
   ingest summaries/81-my-town-fire-rules.md into the wiki
   ```

   Sans sauvegarde : `ingest corpus/80-benevento-aib-2026.pdf into the wiki`. Si le résumé est encore un brouillon, demander le texte officiel, par exemple `ingest corpus/81-my-town-fire-rules.html into the wiki`.

2. Repérer la ligne `Skill(ingest)`. La skill lit le schéma et l'index, parcourt les sujets du document, en général 1 à 5, met à jour ou crée une page pour chacun, compare chaque chiffre et sa portée avec le wiki, et ajoute des lignes à `wiki/log.md`.
3. À chaque fois qu'elle veut écrire, lire ce qu'elle écrit. Dans une page du wiki, chaque fait nouveau se termine-t-il par une note `[^...]` ? Chaque chiffre est-il celui du document ? (L'en-tête d'une page, l'index et le journal n'ont pas de notes.) Si oui, accepter avec **1. Yes**. Si quelque chose ne va pas, choisir **3. No** : `User rejected update to ...` s'affiche, rien n'est écrit, et le modèle s'arrête. Taper ce qui ne va pas et appuyer sur Entrée : il reçoit votre phrase et repart de là.
4. Lire son compte rendu : quelles pages ont changé, a-t-elle trouvé une contradiction ? Quitter avec **Ctrl+C deux fois**.

Lors de notre essai du 30 octobre 2026 (image 2026.10.34, dans un conteneur et non dans un Codespace, autorisations acceptées automatiquement), faire entrer le document de Bénévent a pris 42 secondes et coûté 0,14 \$ : une page créée, une mise à jour, l'index et le journal, avec une contradiction que personne n'avait placée là. Un binôme aurait eu 6 autorisations à donner, et la jauge a atteint environ 26 000 jetons. Un deuxième essai, le 2 novembre 2026 (image 2026.10.45), a pris 46 secondes et coûté 0,17 \$, et a trouvé la même contradiction. Le 5 novembre 2026 (image 2026.11.4), avec chaque modification acceptée une à une (par un script, dans une conversation), il a demandé 10 fois et pris 35 secondes.

:::caution[Important]

**Vérifier la contradiction trouvée.** Dans tous nos essais, il s'agissait de la fin de la saison 2026 : le 15 octobre dans le document de Bénévent, le 30 septembre dans l'arrêté de Montoro. Lire les deux phrases : Bénévent donne la fin des **activités de la campagne**, fixée par une lettre officielle du ministre (une circulaire) ; Montoro donne la fin de la **période de grand danger**. Deux périodes différentes peuvent finir à des jours différents : ce n'est probablement pas une contradiction. Le modèle n'a pas toujours raison sur ce qu'il compare ; c'est vous qui décidez.

:::

:::info[Comment lire nos mesures]

L'**image** est l'environnement tout prêt derrière un Codespace, et son numéro est sa version. **Dans un conteneur** veut dire ce même environnement, démarré hors d'un Codespace. `AGENTS.md` était l'exemple Feurisson, avant l'ajout de ses règles de protection. Personne n'a répondu aux autorisations : le temps de votre propre lecture n'est donc pas compté. Chaque « même essai » ci-dessous a tourné dans ces conditions. Vos nombres seront différents.

:::

#### Étape 5 : Voir où il est allé

1. Taper de nouveau `wiki-graph --highlight 81`. On doit voir des lignes comme celles-ci, tirées de notre essai avec Bénévent. Les nombres et le nom de fichier seront différents :

   ```text
   Wrote wiki/graph.md: 19 pages, 21 source documents.
   In orange: corpus/80-benevento-aib-2026.pdf and the 2 page(s) that cite it.
   ```

2. Ouvrir `wiki/graph.md`, et appuyer sur `Ctrl+Shift+V`. **Ne regarder que la partie orange**. Elle est petite : dans notre essai, elle était en bas à droite du dessin. Pour l'agrandir, pointer le dessin : des boutons apparaissent en haut à droite (pointer un bouton pour voir son nom). Cliquer sur **Zoom In**, ou maintenir `Alt` et tourner la molette. **Reset Zoom** fait revenir le dessin entier.

   | Dans le dessin        | Signification                                                                                                                 |
   | --------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
   | Forme arrondie orange | le résumé du binôme (un cylindre étiqueté avec son numéro, par exemple `80 · corpus`, s'il s'agit d'un document de `corpus/`) |
   | Rectangles orange     | les pages du wiki qui le citent : ce que le document alimente                                                                 |
   | Flèche en pointillés  | d'un document vers une page qui le cite                                                                                       |

3. Comparer avec ce qui a été noté à l'étape 3. Chaque flèche de ce dessin est **écrite dans une page** : un lien, ou une note vers sa source. Rien n'est deviné. Le garder en tête pour la partie 4.

#### Étape 6 : Rejouer le jeu de questions

On le lance maintenant, après `ingest`, pour que les réponses puissent utiliser le document du binôme.

1. **Prédire** sur papier. Chaque question teste autre chose :

   | N° | Ce qu'elle teste                                                                   |
   | -- | ---------------------------------------------------------------------------------- |
   | 3  | un fait que seul le texte complet d'un document officiel donne                     |
   | 10 | deux sources en désaccord : le chatbot doit signaler la contradiction, pas choisir |
   | 11 | un fait d'un document que vous avez ajouté : le document de Bénévent               |
   | 12 | un fait précis sur votre territoire, avec sa source                                |

   Ces quatre questions auront-elles un meilleur score dans la colonne E que dans les colonnes précédentes ? La jauge sera-t-elle plus petite qu'en mode C ? Si le binôme a ingéré son propre document, Bénévent n'est pas dans le wiki : le chatbot retournera-t-il aux sources pour la question 11 ? On le vérifie à la partie 5.

2. Dans le deuxième terminal, une fois `openwebui start` terminé, taper (s'il n'est pas terminé, ouvrir un troisième terminal) :

   ```bash
   replay E
   ```

3. Le jeu se déroule sans intervention : le terminal montre chaque question au fur et à mesure, puis une ligne `Answers: ...` avec le coût. Ne pas l'attendre : continuer la partie 3 dans le premier terminal. Les réponses attendent le binôme à la partie 5. Dans le même essai, il a pris 1 min 57 et coûté 0,36 \$ pour les 11 questions du kit, sans question 12. Avec `deepseek/deepseek-v4-flash`, 11 questions ont pris de 3 à 4,5 minutes par `replay` dans les modes bare, C, D et E (un seul essai).

:::note[Point de contrôle]

`In orange: ...` dans le terminal, et une ligne `Contradiction` du journal lue en binôme.

:::

:::info[Notes pour l'animateur·rice]

Surveiller quatre moments :

- **La prédiction** : les binômes veulent la sauter. Sans elle, le dessin orange n'apprend rien.
- **Les demandes d'autorisation** : lire chaque écriture, accepter avec **1. Yes** ou refuser avec **3. No** si quelque chose ne va pas, et ne jamais prendre l'option qui arrête de demander. Compter environ 6 demandes.
- **Le numéro** : `--highlight 81` n'est qu'un exemple. Un binôme qui a fait entrer Bénévent tape 80.
- **Ce qui entre** : un résumé signé, ou le texte officiel, jamais un brouillon.

Sans sauvegarde, Bénévent n'entre que dans `corpus/`, sans résumé ni signature : le binôme fait entrer le document officiel. L'indication affichée par `wiki-graph` parle de `summaries/` : le binôme suit la page de l'atelier, pas l'indication. Si `openwebui start` n'est pas terminé à la fin de la partie 2, ouvrir un troisième terminal pour `replay E`.

À raconter, sans projeter : lors de l'essai, faire entrer Bénévent a fait apparaître une contradiction que personne n'avait placée là. La skill interdit de la trancher, donc le journal garde les deux versions, et une personne décide. La page imprime les deux dates (encadré « Vérifier la contradiction trouvée ») comme deux périodes différentes : le 15 octobre pour les activités de la campagne, le 30 septembre pour le grand danger. Laisser les binômes lire les deux phrases et décider. Rappeler à la salle qu'aucune de ces deux dates n'est la réponse à la question 11 (du 6 juillet au 27 septembre 2026).

:::

### À vous de réfléchir

**Pourquoi le wiki ne doit-il jamais choisir un chiffre de lui-même ?** (Indice : un jeune cite le chatbot dans un exposé, et quelqu'un dans le public a lu l'autre source.)

:::info[Notes pour l'animateur·rice]

Réponse attendue : le modèle ne sait pas quelle source a raison. S'il en choisit une, l'autre disparaît sans laisser de trace, et plus personne ne peut décider. Puis revenir sur la différence entre une page du wiki et un résumé : une page a une ligne `generated` et aucune ligne `verified`. Personne ne l'a signée.

:::

:::note[Ce que vous avez construit]

Une base de connaissances qui reste rangée en grandissant. **Réutilisée dans** la case _Knowledge_, quand on lui donne des pages propres plutôt que des documents bruts : voir la fiche [Partager un chatbot avec un groupe grâce à Open WebUI](/ressources/youth-ai-lab/guide-open-webui) (rassembler ses documents), ou la fiche [Construire son chatbot avec OpenCode](/ressources/youth-ai-lab/guide-opencode) (les connaissances).

:::

---

## Partie 3 : Le lint (15 min)

**Objectif** : laisser le modèle vérifier tout le wiki, lire son rapport, et décider de ce qu'on applique.

### Ce que vous allez découvrir

- **Les neuf vérifications** de la skill `lint` : en-têtes, notes de bas de page, sources, liens, index, pages orphelines (aucune autre page ne pointe vers elles), contradictions, omissions silencieuses (un chiffre de la source qui manque dans la page), et doublons.
- **Les propositions** : une action par ligne, que l'on accepte ou que l'on refuse.

### Pourquoi un wiki a besoin d'une vérification

`ingest` travaille sur un document et les pages de ses sujets. Il compare les chiffres avec le wiki, mais il ne vérifie jamais toutes les pages par rapport à leurs sources. De petits défauts peuvent donc s'accumuler, de modification en modification : un chiffre absent d'une page, une phrase sans note, un lien vers une page qui n'existe pas, deux pages sur le même sujet.

La skill `lint` passe en revue **toutes** les pages, retourne à leurs sources, et écrit un rapport. Elle ne change rien sans votre accord. C'est la ligne « Le lint lit les pages et les sources » de la partie 2.

Le lint est lui aussi un modèle. Il peut manquer un problème, et il peut en signaler un qui n'existe pas. Son rapport est donc une liste de choses à vérifier.

**Idée clé** : un wiki dérive, un peu à chaque changement. Le lint signale, la personne décide. Avant qu'un wiki ne devienne les connaissances d'un chatbot que d'autres personnes utilisent, lancer le lint et lire son rapport : sans lui, personne ne compare les pages à leurs sources, et une erreur dans une page devient une réponse donnée à un groupe. Le lint tient lieu de signature sur chaque page, mais c'est lui aussi un modèle : le dernier mot reste à une personne.

### Déroulé

#### Étape 1 : Demander le lint

1. Dans le premier terminal, démarrer une **nouvelle** conversation :

   ```bash
   workshop E
   ```

2. Demander :

   ```text
   lint the wiki
   ```

3. Repérer la ligne `Skill(lint)`. S'il demande à lancer une commande qui lit des fichiers, accepter avec **1. Yes**.
4. Regarder la jauge. Elle monte bien plus haut que pour `ingest`, parce que le lint lit toutes les pages et retourne aux sources. C'est pour cela qu'on a démarré une nouvelle conversation.

Dans le même essai, le lint a pris 2 min 10 et coûté 0,55 \$, et la jauge a atteint environ 137 000 jetons, 68 % de la fenêtre. C'est plus de la moitié de ce qui a été mesuré pour un binôme (1,05 \$ pour `ingest`, `lint`, `replay E` et le juge) : le lancer une seule fois par séance, pas après chaque document. Un deuxième essai, le 2 novembre 2026 (image 2026.10.45), a pris 72 secondes et coûté 0,34 \$. Un troisième, dans une conversation le 5 novembre 2026 (image 2026.11.4), a pris 1 min 55 et rempli la jauge jusqu'à environ 149 000 jetons (74 %), pour environ 0,80 \$ (notre estimation à partir des jetons) : le coût du lint change d'un essai à l'autre, et il reste l'étape la plus chère.

#### Étape 2 : Lire le rapport

Le rapport commence par une ligne de décomptes, et sa dernière section s'appelle `Proposals`. Entre les deux viennent les **remarques** (_findings_) : ce que le lint juge faux, sous des titres comme `Contradictions`, `Statements without a valid source` et `Omissions and rewordings`. Une proposition est une action qu'il suggère, en général pour répondre à une remarque.

Dans notre essai, il n'a rien modifié, a listé 8 propositions, dont certaines purement cosmétiques, et a dit lui-même quelles sources il n'avait pas lues. Une seule a été vérifiée dans sa source, et elle était juste. Le 5 novembre 2026, six remarques d'un autre lint ont été vérifiées dans leurs sources : trois étaient justes, et trois montraient un vrai manque mais le décrivaient mal (par exemple, deux périodes différentes présentées comme une contradiction).

En binôme, trouver une remarque que l'on peut vérifier. Ouvrir la page qu'elle cite, puis sa source dans `corpus/text/`, et chercher le chiffre ou les mots avec `Ctrl+F`. Est-ce un vrai problème : une personne qui lit la page recevrait-elle un fait faux ou incomplet ? Ou est-ce une affaire de goût ?

#### Étape 3 : Décider

Choisir une ou deux propositions à appliquer, ou aucune, et dire pourquoi en une phrase. Donner son choix au modèle avec ses propres mots, et lire chaque modification : une ligne rouge retire-t-elle un chiffre ? Sinon, accepter avec **1. Yes**. Si oui, choisir **3. No**, et le dire au modèle. Quitter avec **Ctrl+C deux fois**.

:::note[Point de contrôle]

Le binôme sait citer une remarque du rapport, et ce qu'il a décidé à son sujet.

:::

:::info[Notes pour l'animateur·rice]

- Le rapport varie d'un essai à l'autre, et tous les binômes n'auront pas le même. Certaines lacunes du wiki préparé y ont été **laissées exprès** comme matière pour le lint. Les remarques cosmétiques (la ligne `generated.by`, les titres de l'index) sont un bon exemple de ce que l'on peut refuser. Une proposition qui demande de lire d'autres sources, que le lint dit lui-même ne pas avoir lues, est honnête, et c'est une raison de ne pas faire confiance à un rapport propre.
- **Le lint est trop long, ou un binôme est bloqué** : l'arrêter, projeter seulement la section `Proposals` de votre propre rapport (ou de celui rangé avec la fiche animateur), et laisser le binôme choisir dedans.
- **Un binôme n'obtient pas `Skill(ingest)` ou `Skill(lint)`** : vérifier que `.claude/skills/ingest/` et `lint/` existent, quitter et relancer `workshop E`, demander avec les mots exacts de la page.
- **Ne jamais projeter** le haut du rapport de lint, qui liste les contradictions déjà relevées : il donne des réponses du jeu de test.

:::

### À vous de réfléchir

**Pourquoi la skill interdit-elle au modèle de corriger quoi que ce soit de lui-même ?** (Indice : si une correction retire un chiffre d'une page, qui s'en apercevra ?)

:::info[Notes pour l'animateur·rice]

Réponse attendue : une correction peut retirer ou lisser un chiffre, et personne ne le remarquerait. Lors d'un premier essai, avant que les règles ne soient durcies, un modèle a réécrit une contradiction, un autre l'a omise, et le lint n'a rien vu. D'où les règles des skills : comparer chaque chiffre et sa portée, ne jamais omettre, ne jamais reformuler.

:::

:::note[Ce que vous avez construit]

Une habitude : une vérification régulière, avec une personne qui décide. **Réutilisée dans** tout agent qui tient ses propres notes : dans la fiche [Préparer ses séances avec un assistant qui se souvient](/ressources/youth-ai-lab/guide-hermes), ce que l'assistant veut retenir attend votre accord. Cet assistant sert à préparer vos propres séances, jamais avec des jeunes.

:::

---

## Partie 4 : Le graphe (25 min)

**Objectif** : voir les idées à travers les pages, et vérifier dans les sources un lien qu'un modèle a deviné.

L'animateur·rice projette d'abord deux cartes côte à côte : le dessin de la partie 2 pour tout le wiki, et la carte que l'on va ouvrir. Si vous lisez cette page seul·e, taper `wiki-graph`, ouvrir `wiki/graph.md`, et le comparer à la carte de l'étape 1. Dans la partie 2, chaque flèche était écrite dans une page. Ici, un outil a dessiné les **idées**, et il a deviné certains liens.

### Ce que vous allez découvrir

Avant la séance, l'animateur·rice a donné le wiki à **graphify**, un outil qui fait lire chaque page à un modèle, en 7 à 10 minutes, et qui dessine un **graphe de connaissances** : une carte des idées et des liens entre elles.

`wiki/index.md` liste les pages, et le dessin de la partie 2 montre ce que chaque page relie et cite. Ni l'un ni l'autre ne montre deux pages, dans deux pays, qui parlent d'une règle semblable quand aucun lien ne les joint. Un graphe de connaissances cherche cela, pour que l'on puisse explorer ce que ses documents disent ensemble, et voir où il en manque.

- **Un nœud** est un point de la carte : une page, une règle, un organisme, une idée. **Une arête** est une ligne entre deux nœuds.
- **Une communauté** est un groupe de nœuds avec beaucoup de lignes entre eux, et peu vers le reste. Un calcul déplace les nœuds d'un groupe à l'autre. Il compare les lignes à l'intérieur des groupes avec ce que donnerait le hasard, et garde un déplacement quand l'écart augmente. Dans notre graphe, 158 des 204 arêtes (77 %) restent à l'intérieur d'un groupe ; avec des lignes placées au hasard, environ 16 % le feraient. Le calcul ne voit que des lignes, pas le sens : c'est pourquoi l'étape 1 vous demande si les groupes ont du sens.
- **`EXTRACTED`** marque une arête écrite dans une page. **`INFERRED`** marque une arête devinée par le modèle : une suggestion, pas un fait.
- **Un instantané** est une image prise à un moment donné : ce graphe ne change pas quand le wiki change.

Notre graphe a 111 nœuds, 204 arêtes et 8 communautés ; 182 arêtes sont `EXTRACTED`, 22 sont `INFERRED` (construit le 6 novembre 2026). `wiki-explore` n'appelle aucun modèle : il est gratuit.

**Idée clé** : un graphe propose, une personne vérifie, comme pour les résumés de l'atelier 3.

:::info[Notes pour l'animateur·rice]

Ouvrir la partie avec les deux cartes côte à côte, **dézoomées** jusqu'à ce qu'aucune étiquette ne soit lisible. C'est la première fois que la salle voit le `wiki-graph` complet : il a été gardé exprès pour aujourd'hui. Dire : sur la carte de gauche, chaque flèche est écrite dans une page ; sur celle de droite, un outil a dessiné des idées, et deviné certains liens.

**Ne jamais projeter** : le dossier `answers/`, `wiki/log.md` et la page Bénévent du wiki, `GRAPH_REPORT.md` au-delà de sa ligne `Corpus Check`, les étiquettes de la carte graphify et les titres de pages du `wiki/graph.md` complet : ils contiennent des réponses du jeu de test.

**Si un binôme demande ce que veut dire `Cohesion: 0.23` dans le rapport.** Ce sont les lignes tracées à l'intérieur du groupe, divisées par les lignes possibles. Entre n nœuds, n(n-1)/2 lignes sont possibles. La communauté 3 a 13 nœuds, donc 78 lignes possibles, et 18 sont tracées (compté dans `graph.json` ; le rapport n'imprime pas ce nombre) : 18 / 78 = 0,23. Ce score vient après le regroupement : ce n'est pas lui qui fait les groupes. Ne pas classer les groupes avec lui, car un petit groupe obtient plus facilement un score élevé : dans la communauté 7 (0,50), un nœud a en moyenne 2 lignes à l'intérieur, dans la communauté 3 (0,23), il en a 2,8. Faire la somme avec la communauté 3 : pour les communautés 0, 2 et 4, le rapport imprime `Nodes (24)`, `Nodes (17)` et `Nodes (10)` alors que `graph.json` en a 25, 18 et 11 (le rapport ne compte pas les nœuds de type `rationale`), et la somme ne tombe pas juste.

:::

### Déroulé

#### Étape 1 : Ouvrir la carte

1. Dans le premier terminal, hors d'une conversation, taper :

   ```bash
   wiki-explore
   ```

   On doit voir `The map of the wiki is open at: http://localhost:8765`, et un nouvel onglet du navigateur. Si aucun onglet ne s'ouvre : onglet Ports (panneau du bas), 8765, **Open in Browser**.

2. Chaque couleur de la carte est une communauté. À droite, cocher ou décocher les `Communities`, et regarder ce que le calcul a rassemblé : ces groupes ont-ils du sens pour vous ? Dans `Search nodes...`, taper `Montoro`. Cliquer sur un nœud Montoro de la carte : `Node Info` liste les nœuds qui lui sont reliés. L'un d'eux vient-il d'un autre pays ? Si l'on clique plutôt sur un nom dans les résultats de recherche, la zone de recherche se vide : c'est normal. Pour fermer la carte, plus tard : `wiki-explore stop`.

#### Étape 2 : Lire le rapport

1. Ouvrir `wiki/graphify-out/GRAPH_REPORT.md`, et appuyer sur `Ctrl+Shift+V`.
2. Lire d'abord `Corpus Check` (ici, `Corpus` désigne les pages du wiki, pas le dossier `corpus/`) : `Corpus is ~16,917 words - fits in a single context window. You may not need a graph.` Le rapport compte des mots, et la jauge compte des jetons. Sur ces pages, nos mesures donnent environ 3 jetons par mot, donc 16 917 × 3 ≈ 51 000 jetons : environ un quart de la fenêtre de contexte (200 000 jetons), et la moitié de ce que le mode B envoyait à l'atelier 2. Qu'en pensez-vous ?
3. Lire `Surprising Connections` : des liens que le rapport pense inconnus de vous. Chaque élément se lit `first node --kind of link--> second node`, puis donne les deux pages. `[INFERRED]` dit que le modèle a deviné le lien. Choisir une connexion qui vous surprend, et dire à son binôme si on y croit. L'étape 3 reprend l'un de ces liens, entre Montoro et le débroussaillement français, et l'étape 4 le vérifie.

#### Étape 3 : Interroger le graphe

1. Demander le chemin le plus court entre deux nœuds :

   ```bash
   wiki-explore path "Montoro protection strips" "Obligations légales de débroussaillement"
   ```

   On doit voir :

   ```text
   Shortest path (1 hops):
     Montoro protection strips (20 m around settlements, 5 m around land) --semantically_similar_to [INFERRED 0.85]--> Obligations légales de débroussaillement (OLD): 200 m zone, 50 m around buildings, 10 m along access
   Path confidence: INFERRED (weakest hop 1: semantically_similar_to, score 0.85)
   ```

   Un **chemin** est la suite de lignes qui va d'un nœud à un autre. `1 hops` signifie qu'ils sont reliés directement. `semantically_similar_to` est l'étiquette du modèle pour « ces deux idées se ressemblent », et `[INFERRED 0.85]` dit qu'il l'a deviné, avec une confiance de 0,85 sur 1 : l'estimation du modèle lui-même, pas une preuve. `Path confidence` donne le lien le plus faible du chemin.

   Sur la carte, ce lien est une ligne en tirets : la pointer pour lire `INFERRED`. `Node Info` ne l'affiche pas.

2. Demander un nœud et ses voisins :

   ```bash
   wiki-explore explain "Montoro protection strips"
   ```

   On doit voir trois connexions : deux marquées `[EXTRACTED]`, écrites dans la page, et celle de plus haut, `[INFERRED 0.85]`. Une position comme `L40-L67` est une partie de la page : les lignes que le modèle a désignées quand il a créé ce nœud ou ce lien. Pour un lien `[INFERRED]`, c'est l'endroit où le modèle a regardé. Ce n'est pas une phrase qui énonce le lien.

#### Étape 4 : Vérifier soi-même le lien deviné

Le modèle a dit que les bandes de protection de Montoro (Italie) ressemblent au débroussaillement français (couper la végétation autour des bâtiments). **Est-ce que cela tient ?** La vérification se fait sans modèle : ouvrir les deux sources côte à côte, par clic droit puis **Open to the Side**, et chercher avec `Ctrl+F`.

| Ouvrir                                               | Chercher                       | Lire autour                          |
| ---------------------------------------------------- | ------------------------------ | ------------------------------------ |
| `corpus/text/71-montoro-ordinanza-78-2026.md`        | `metri venti`, puis `5 metri`  | qui doit le faire, et autour de quoi |
| `corpus/text/22-service-public-debroussaillement.md` | `50 mètres`, puis `200 mètres` | qui doit le faire, et autour de quoi |

Si l'on ne lit ni l'italien ni le français, trouver le chiffre dans la source, puis lire le « qui » et le « quoi » en anglais dans le wiki : `wiki/wildfire-prevention-ordinance-montoro.md`, section **Obligations ordered**, points 2 et 3, et `wiki/legal-brush-clearing-obligation-france.md`, sections **Who is subject to the obligation** et **Required depths**. Un modèle a écrit ces pages : dire dans son verdict quelle partie a été vérifiée dans la source.

Les chiffres du nœud sont-ils justes ? S'agit-il de la même règle, pour les mêmes personnes ? **Écrire son verdict en une phrase** : le lien tient-il, et qu'est-ce qui diffère ?

:::info[Pour les binômes rapides]

Un lien plus faible. Taper :

```bash
wiki-explore path "750 EUR fine for burning green waste" "4th-class fine"
```

Puis chercher `750` dans `corpus/text/23-service-public-dechets-verts.md` et dans `corpus/text/20-meteo-france-meteo-des-forets.md`. Même montant : est-ce la même chose ?

:::

:::info[Notes pour l'animateur·rice]

Laisser les binômes arriver à leur verdict. Pour les bandes de Montoro et le débroussaillement français, les chiffres du nœud sont justes, mais le lien tient comme idée (dégager la végétation pour qu'un feu ne se propage pas), pas comme équivalence : deux pays, des personnes concernées différentes, des chiffres différents et des objets différents (un rayon autour d'une zone habitée, une bande autour d'un champ, une profondeur autour d'un bâtiment). Phrase à donner à la salle : **semblable n'est pas identique**. Pour les deux amendes de 750 €, même montant, mais deux infractions différentes : le lien dit peu de chose.

:::

#### Étape 5 : Voir la limite

1. Taper :

   ```bash
   wiki-explore path "Benevento" "Montoro"
   ```

   On doit voir `No node matching 'Benevento' found.`

2. Ce n'est pas une panne. Le graphe est un instantané, fait avant la séance : ce qui a été ajouté aujourd'hui n'y est pas non plus. Le mettre à jour, c'est redemander à un modèle de relire les pages.

#### Étape 6 : Le graphe et la vitesse du chatbot

Le graphe rend-il le chatbot plus rapide ? En discuter, puis lire ce qui a été mesuré le 21 octobre 2026 (Claude Code 2.1.240, hors Codespace), avec le graphe donné au modèle comme outil (mode `F`). Ce graphe était un graphe plus ancien, de 82 nœuds ; la carte ouverte aujourd'hui en a 111, et elle n'a pas été mesurée de cette façon :

| Questions                             | Mode E (wiki)    | Mode F (wiki + graphe) |
| ------------------------------------- | ---------------- | ---------------------- |
| 1, 3, 5 et 10                         | 0,46 \$, 1 min 26 | 0,51 \$, 1 min 38       |
| « Compare the clearing distances... » | 0,20 \$, 42 s     | 0,20 \$, 33 s           |

Sur nos 18 pages, non : l'index est déjà une carte suffisante, et le modèle lit quand même les pages pour avoir les faits exacts. Sur un petit wiki, le graphe n'aide pas encore le modèle, mais il aide déjà les personnes qui explorent : à l'étape 3, il vous a montré un lien entre Montoro et le débroussaillement français qu'aucune page n'écrit, et que vous avez ensuite vérifié vous-mêmes. Il pourrait aider le modèle sur un wiki beaucoup plus grand : cela n'a pas été mesuré.

:::note[Point de contrôle]

La carte s'est ouverte dans le navigateur, et le binôme a écrit un verdict.

:::

:::info[Notes pour l'animateur·rice]

**La carte ne s'ouvre pas** : onglet Ports, 8765, **Open in Browser**. Sinon, `wiki-explore path`, `wiki-explore explain` et `GRAPH_REPORT.md` fonctionnent dans le terminal et sans internet, et la vérification à la main n'a pas besoin de carte. Seule la page de la carte a besoin d'internet dans le navigateur. On peut aussi montrer la diapositive du graphe dans le deck, en petit : en plein écran, l'image devient lisible et contient des réponses attendues. Ne pas présenter le graphe comme une amélioration du chatbot.

:::

### Si le temps le permet (payant)

Demander la même vérification au chatbot dans `workshop E`, puis appuyer sur **Ctrl+O** pour voir ses étapes (**Ctrl+O** de nouveau pour revenir) : a-t-il ouvert les originaux ?

```text
Compare the clearing distances of the Montoro ordinance and of the French brush-clearing obligation. Check the figures in the original documents (corpus/text/) and give their sources.
```

Ou taper `replay F 1 3 10`, et comparer avec les mêmes questions dans son fichier `answers/E-...` : les lignes `Context: ... tokens` et `What the model did:`. A-t-il interrogé le graphe (`called the MCP tool ...`) avant de lire les pages ?

### À vous de réfléchir

Le graphe a demandé à un modèle de 7 à 10 minutes pour 18 pages, et le document du binôme y manque déjà. **Combien coûte la mise à jour d'un graphe, et qui vérifie ce que le modèle a deviné ?**

:::info[Notes pour l'animateur·rice]

Réponse attendue : un modèle relit tout (environ 10 minutes et 163 000 jetons pour 18 pages le 21 octobre 2026 ; environ 7 min 30 avec Opus le 2 novembre 2026, pour 7,86 millions de jetons, lus pour la plupart depuis le cache ; 1,40 \$ le 6 novembre 2026), et toutes les suppositions sont nouvelles, donc une personne doit de nouveau les vérifier. Le rapport dit lui-même qu'on n'a peut-être pas besoin d'un graphe.

:::

:::note[Ce que vous avez construit]

Un verdict sur un lien proposé par un modèle. **Réutilisé pour** préparer une séance : la carte montre ce que les documents disent ensemble, et où il en manque.

:::

---

## Partie 5 : Le chatbot construit (20 min)

**Objectif** : lire ce que disent les scores, empaqueter son chatbot, et le voir dans un autre outil.

### Étape 1 : Noter la colonne E

Ouvrir les réponses de `replay E` dans `answers/` : la ligne `What the model did:` liste ce que le modèle a lu. A-t-il commencé par `wiki/index.md`, puis une page de `wiki/` ? A-t-il aussi regardé dans `summaries/` ou `corpus/text/` ? C'est ce qu'on lui a dit de faire si le wiki ne suffit pas. Puis noter les questions du jour avec l'aide du juge (sans question 12 : `score E 3 10 11`) :

```bash
score E 3 10 11 12
```

Pour chaque question, le juge propose une note. Appuyer sur Entrée pour l'accepter, ou taper 0, 1 ou 2 pour la changer. Le barème de la série : **2** = juste, et la réponse dit d'où elle vient ; **1** = honnête mais insuffisant (« je ne sais pas » alors que la réponse existe, pas de source, ou en partie juste) ; **0** = faux ou inventé.

### Étape 2 : Lire ses scores ligne par ligne

Ouvrir `scores.md`. Chaque atelier n'a noté que certaines questions, donc **la ligne Total ne veut rien dire ici**. Lire les lignes : pour 3, 11 et 12, comparer la colonne C avec la colonne E ; pour 10, les colonnes précédentes avec la colonne E. Le score a-t-il changé, comme prévu, et combien de contexte a-t-il fallu ? Chaque réponse de `answers/` a une ligne `Context: ... tokens` : la comparer entre les fichiers `answers/C-...` et `answers/E-...`. **Le même score avec une jauge plus petite est un résultat** : le chatbot répond aussi bien, il lit moins, et chaque question coûte moins cher. Sans sauvegarde, comparer avec un binôme voisin qui utilise le même modèle. Les scores de référence de l'animateur·rice, pour comparer, ne sont pas encore prêts : à compléter.

### Étape 3 : La réponse à la question de la série

Toute cette série posait une seule question : **qu'est-ce qui entre dans le contexte du modèle, quand, et qui décide ?**

| Atelier | Ce qui entre dans le contexte        | Quand                          | Qui décide                               |
| ------- | ------------------------------------ | ------------------------------ | ---------------------------------------- |
| 1       | les instructions                     | toujours                       | vous                                     |
| 2       | tout (mode B), ou des extraits (RAG) | au début, ou à chaque question | personne, ou un moteur de recherche      |
| 3       | ce que le modèle ouvre, et une skill | pas à pas                      | le modèle ; une personne signe le résumé |
| 4       | la réponse d'un outil                | quand le modèle l'appelle      | le modèle ; vous avez autorisé l'outil   |
| 5       | des pages écrites à l'avance         | pas à pas                      | le modèle écrit, une personne décide     |

**Idée clé** : quel que soit l'outil, la même question s'applique : qu'est-ce qui entre dans le contexte, quand, et qui décide ?

Deux autres options figurent sur les diapositives :

- **Un modèle local** : les mêmes étapes, sur sa propre machine. Rien n'en sort, mais il faut un ordinateur puissant, et les petits modèles font plus d'erreurs. Voir la fiche [Installer un chatbot sur un ordinateur de sa structure](/ressources/youth-ai-lab/guide-ia-locale).
- **L'affinage** (_fine-tuning_, entraîner encore le modèle sur ses propres exemples) : les connaissances entrent dans le modèle, sans source, et une erreur oblige à réentraîner. L'affinage convient à un style, mais il est risqué pour des faits qui changent. L'atelier 6 le pratique sur une tâche étroite, sans écrire de réponses : [Apprendre à un petit modèle à trier les messages](/ressources/youth-ai-lab/construire-chatbot-6-tri).

:::info[Notes pour l'animateur·rice]

Projeter le tableau de la série, et lire la dernière colonne à voix haute : vous, personne ou un moteur de recherche, le modèle et une personne, le modèle et vous, le modèle et une personne. Plus le modèle fait de choses seul, plus il compte qu'une personne vérifie. Dire ce qui ne voyage pas dans le paquet : l'outil en direct de l'atelier 4 (un programme, pas un document ; avec un groupe, le guide Open WebUI le redonne) et les skills du kit (`ingest`, `lint`, `summarize`, `validate-summary`, `source-note`) ; les skills que le binôme a écrites à l'atelier 3, elles, voyagent. Et ce qui ne s'arrête jamais : les mêmes questions de test, avant et après chaque changement.

:::

### Étape 4 : Empaqueter son chatbot

1. Dans le premier terminal, taper, avec le nom de son chatbot :

   ```bash
   chatbot-export --name "Feurisson"
   ```

   On doit voir des lignes comme celles-ci. Les nombres viennent de notre essai avec Bénévent, sans sauvegarde, plus un fichier pour la carte du wiki. Les vôtres seront différents :

   ```text
   Wrote feurisson.zip: instructions + 58 knowledge files (17 summaries, 19 wiki pages + their map, 21 documents).
   In the file, the … links between wiki pages name their files (wiki__…): a chatbot tool finds a page by that name. Your wiki/ folder is not changed.
   ```

2. Clic droit sur le fichier `.zip`, puis **Download...**. Il contient la case _Instructions_ (le fichier `AGENTS.md`), la case _Knowledge_ (résumés, pages du wiki avec leur carte `wiki__index.md`, copies lisibles des documents), les skills écrites par le binôme à l'atelier 3 (pas celles du kit), et un `README.md` qui explique comment reconstruire le chatbot. L'outil en direct de l'atelier 4 **n'y est pas** : c'est un programme, pas un document. Dans un autre outil, il faut le remettre en place : dans un Codespace du guide Open WebUI, l'animateur·rice le coche dans le chatbot, et il lit le fichier que l'animateur·rice remplit le jour même (étape _Step 5 - Add the live tool_ du guide anglais, depuis la version 2026.11.8 de l'image du Codespace ; voir la fiche [Partager un chatbot avec un groupe grâce à Open WebUI](/ressources/youth-ai-lab/guide-open-webui)). Deux fichiers de `wiki/` restent aussi dehors : `log.md`, l'historique du wiki (avec les contradictions trouvées par `ingest` et `lint`), et `AGENTS.md`, les règles du modèle qui écrit le wiki. Ils servent à la personne qui tient le wiki, pas aux réponses du chatbot : les garder dans `my-work.zip`.

### Étape 5 : Le montrer dans Open WebUI

1. `openwebui chatbot` remplit les deux cases à votre place. Il empaquette de nouveau le chatbot, comme à l'étape 4 : `AGENTS.md` va dans la case _Instructions_, et les résumés, les pages du wiki (avec leur carte) et les documents dans la case _Knowledge_ d'un nouveau chatbot. Il reçoit aussi les skills écrites par le binôme à l'atelier 3, et l'outil en direct de l'atelier 4, `fire_danger`, comme en mode D. Dans le deuxième terminal, taper, avec le nom de son chatbot :

   ```bash
   openwebui chatbot --name "Feurisson"
   ```

   Cela a pris 50 secondes pour 58 fichiers le 22 octobre 2026 (sur une machine locale, avec une image plus ancienne ; dans un Codespace : à compléter). C'est terminé quand s'affiche :

   ```text
   Ready. In Open WebUI (...): New Chat, then choose "Feurisson chatbot" in the message box (bottom right).
   ```

   Juste avant, une ligne dit `Your wiki came with its map (wiki__index.md): each link names the file of another page.`, et une autre nomme l'outil en direct `fire_danger`.

2. Ouvrir l'adresse, choisir son chatbot (le bouton en bas à droite de la zone de saisie montre le modèle utilisé), et poser sa question 12 ou, sans question 12, l'une des questions du jour. Le chatbot a maintenant aussi les pages du wiki et, comme en mode E, le modèle décide lui-même quand chercher. La réponse donne-t-elle sa source ? Est-elle aussi bonne que dans son fichier `answers/E-...` ?

   **La carte du wiki dans Open WebUI.** Le chatbot peut partir de la carte, `wiki__index.md`. Chaque lien y est le nom d'un fichier (`wiki__...`). Open WebUI ouvre un fichier des connaissances par un identifiant, pas par son nom : le modèle cherche d'abord ce nom, puis ouvre la page. Chaque page ouverte devient une source de la réponse. Cela a été essayé avec un modèle de test. Un petit modèle a aussi été essayé sur notre propre ordinateur (`qwen3:8b`) : il n'a jamais ouvert la carte, a répondu à partir des noms des fichiers, et a manqué une page. Avec Claude, en un essai, il a d'abord ouvert la carte et trouvé toutes les pages. Avec le même petit modèle, une rumeur (le travail de la skill `rumour-check`) a obtenu une réponse vide, 3 fois sur 3 : le modèle a pris la skill pour un outil qu'il pouvait appeler (voir la partie 5 de l'atelier [Laisser un chatbot chercher et lui apprendre des savoir-faire](/ressources/youth-ai-lab/construire-chatbot-3-recherche)).

   **L'outil en direct.** Il ne fait que lire `mcp/fire-danger.json`, un fichier rempli à partir de sources publiques. Il ne peut rien écrire. Si le modèle l'appelle, une ligne **View Result from fire-danger_fire_danger** apparaît au-dessus de la réponse : cliquer dessus pour voir ce que l'outil a renvoyé.

3. En binôme, dire ce que l'on changerait avant qu'un groupe ne l'utilise, à partir de ce qu'on a vu dans ses réponses et ses scores. Le wiki entre maintenant, en entier, dans les connaissances d'un chatbot que d'autres personnes pourraient utiliser : avant cela, relancer le lint et lire son rapport ([partie 3](#partie-3--le-lint-15-min)), comme pour toute modification du wiki.

:::caution[Attention]

**Ne jamais rendre public le port 3000** pour le partager. Pour un groupe, voir la fiche [Partager un chatbot avec un groupe grâce à Open WebUI](/ressources/youth-ai-lab/guide-open-webui) : tester avant d'ouvrir, les données des participant·es, puis l'ouvrir à son groupe.

:::

:::info[Notes pour l'animateur·rice]

**Open WebUI n'est pas prêt à la partie 5** : sauter `openwebui chatbot`, et montrer votre propre chatbot sur grand écran. `chatbot-export` fonctionne sans lui. Si Open WebUI ne tourne pas, le message est `Open WebUI is not running. Type: openwebui start` : le taper dans le deuxième terminal, attendre `Open WebUI is ready`, puis relancer `openwebui chatbot`.

:::

### Étape 6 : Enregistrer son travail, remplir la carte de sortie

1. Taper `workshop-save`, puis clic droit sur `my-work.zip` → **Download...**. Un Codespace s'arrête de lui-même, et il est supprimé après 30 jours d'inactivité : seuls les fichiers téléchargés restent. Si l'ordinateur a déjà un `my-work.zip`, le nouveau peut s'appeler `my-work (1).zip` : garder le plus récent.
2. Prendre une carte vierge ou une demi-feuille auprès de l'animateur·rice : c'est votre **carte de sortie**. Répondre seul·e, en quelques mots :
   1. Pourquoi le wiki garde-t-il deux chiffres qui ne concordent pas ?
   2. Quelle est la différence entre `EXTRACTED` et `INFERRED`, et qui vérifie ?
   3. Qui a écrit ce que le chatbot lit en mode E, quand, et qui décide ?

:::note[Point de contrôle]

Le paquet du chatbot (`feurisson.zip` ou le nom choisi) et `my-work.zip` sont sur l'ordinateur.

:::

:::info[Notes pour l'animateur·rice]

Le formulaire d'auto-évaluation « After » (5 minutes) se remplit avant les cartes de sortie : le même formulaire et le même code personnel qu'à l'atelier 1 (voir la page d'auto-évaluation https://youth-ai-lab.github.io/yal-workshop/1/self-assessment.html ; le lien du formulaire lui-même est à compléter).

Ce que contient une bonne réponse à la carte de sortie : (1) le modèle ne décide pas quelle source a raison, une personne doit voir le désaccord ; (2) écrit dans une page, contre deviné par un modèle ; une personne vérifie, dans les sources ; (3) le modèle l'a écrit, à l'avance ; une personne signe les documents, arbitre et vérifie.

:::

### Ce que l'on emporte

On repart avec le paquet du chatbot et `my-work.zip`, et chaque pièce a sa place dans d'autres outils :

| Ce qui a été construit                                    | Où cela va ensuite                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AGENTS.md`                                               | la case _Instructions_, ou consigne système                                                                                                                                                                                                                                                                                                                                                                               |
| `corpus/`, `summaries/`, la vérification de chaque résumé | la case _Knowledge_, après vérification par une personne                                                                                                                                                                                                                                                                                                                                                                  |
| La skill                                                  | son chatbot dans Open WebUI, qui la reçoit avec ses instructions (étape 5) ; dans un autre agent : voir la fiche [Construire son chatbot avec OpenCode](/ressources/youth-ai-lab/guide-opencode)                                                                                                                                                                                                                          |
| L'outil MCP                                               | son chatbot dans Open WebUI, dans ce Codespace (étape 5) ; pas dans le fichier de `chatbot-export` ; avec un groupe, le guide Open WebUI, où l'animateur·rice remplit le fichier le jour même (fiche [Partager un chatbot avec un groupe grâce à Open WebUI](/ressources/youth-ai-lab/guide-open-webui), depuis l'image 2026.11.8) ; dans un autre chatbot qui accepte des outils, pour des adultes : même fiche OpenCode |
| Le wiki                                                   | la case _Knowledge_, après un lint et la lecture de son rapport par une personne                                                                                                                                                                                                                                                                                                                                          |
| `test-questions.md` et `replay`                           | toujours : les mêmes questions avant et après chaque changement                                                                                                                                                                                                                                                                                                                                                           |

Pour reconstruire son chatbot, le chemin le plus court est **Open WebUI** : dans un Codespace du guide Open WebUI (pas celui-ci, où la commande est inconnue), `openwebui import` prend le fichier produit par `chatbot-export` (voir la fiche [Partager un chatbot avec un groupe grâce à Open WebUI](/ressources/youth-ai-lab/guide-open-webui)). Un projet Claude a les deux mêmes cases, tout comme un Gem de Gemini. Mais Google fait passer les Gems en lecture seule sur les comptes personnels le 17 novembre 2026 et les supprime le 17 décembre 2026, et claude.ai est réservé aux adultes (18 ans et plus) : lire les règles d'un outil avant de prévoir une séance avec des jeunes. Flowise et Langflow relient des blocs sur un canevas ; LangChain, LlamaIndex et le Claude Agent SDK s'utilisent en écrivant du code. Pour garder les pièces dans un dossier à soi : la fiche [Construire son chatbot avec OpenCode](/ressources/youth-ai-lab/guide-opencode).

:::caution[Important]

La clé du binôme a été fournie par l'animateur·rice pour la série : elle peut cesser de fonctionner ensuite, lui demander. Pour continuer, il faut une clé à soi, avec des crédits achetés par carte bancaire (voir la fiche [Partager un chatbot avec un groupe grâce à Open WebUI](/ressources/youth-ai-lab/guide-open-webui)), ou une clé OpenRouter créée depuis son [compte OpenRouter](https://openrouter.ai/settings/keys). Sans carte, un modèle peut tourner sur un ordinateur de la structure, sans clé et sans coût par question : voir la fiche [Installer un chatbot sur un ordinateur de sa structure](/ressources/youth-ai-lab/guide-ia-locale).

:::

:::caution[Avant d'ouvrir à des jeunes un chatbot payé par une clé OpenRouter]

Lire la section **Young people and OpenRouter** de `SETUP.md`, dans le dépôt : les clés restent chez les adultes, et `workshop-login --europe` vient d'abord. Le détail est dans la partie [Sécurité et protection des données](/ressources/youth-ai-lab/guide-openrouter#sécurité-et-protection-des-données) du guide OpenRouter.

:::

### Et ensuite

Votre chatbot est terminé : c'est la fin de la série « Construire son propre chatbot ». Chaque guide ci-dessous part de ce que vous avez construit, et va plus loin dans une direction :

- **Le partager avec un groupe**, pendant une séance : [Partager un chatbot avec un groupe grâce à Open WebUI](/ressources/youth-ai-lab/guide-open-webui)
- **Garder chaque question dans sa structure**, avec un **modèle local** sur l'un de ses ordinateurs : [Installer un chatbot sur un ordinateur de sa structure](/ressources/youth-ai-lab/guide-ia-locale)
- **Garder toutes les pièces dans un dossier à soi**, avec un autre programme que Claude Code : [Construire son chatbot avec OpenCode](/ressources/youth-ai-lab/guide-opencode)
- **Travailler sans Codespace**, sur son propre ordinateur : [Ouvrir les ateliers sur son propre ordinateur](/ressources/youth-ai-lab/guide-dev-containers)
- **Payer de nombreux modèles avec un seul compte**, avec une clé par binôme : [Utiliser les outils des ateliers avec une clé OpenRouter](/ressources/youth-ai-lab/guide-openrouter)
- **Préparer ses séances avec un assistant**, pour les adultes seulement : [Préparer ses séances avec un assistant qui se souvient](/ressources/youth-ai-lab/guide-hermes)

**Au-delà de la série** : l'atelier 6, [Apprendre à un petit modèle à trier les messages](/ressources/youth-ai-lab/construire-chatbot-6-tri). Vous y changez vous-même un modèle, et vous le placez devant un chatbot, pour trier les messages avant que le chatbot ne réponde. Il ne demande rien d'aujourd'hui. Vous pouvez aussi revenir au [premier atelier](/ressources/youth-ai-lab/construire-chatbot-1-instructions).

:::info[Notes pour l'animateur·rice]

Après l'atelier : noter les durées réelles des cinq parties et de la marge, ainsi que les coûts. Vérifier que chaque binôme a téléchargé ses deux fichiers. Si vous menez l'atelier 6, gardez les clés : sa partie 5 s'en sert, pour moins d'un centime par binôme. Si c'est votre dernier atelier, supprimer les clés des binômes, ou baisser le plafond de l'espace de travail.

**Réemploi avec des jeunes.** Le wiki est une façon de remplir la case _Knowledge_ : un groupe apporte des documents locaux, un adulte les vérifie, et le chatbot reçoit des pages propres, chaque fait avec sa source. L'habitude compte plus que l'outil : deux sources qui ne concordent pas sont montrées côte à côte, et un lien deviné par un modèle est vérifié par une personne. Une ligne `Contradiction` du journal peut lancer une discussion avec un groupe, sans ordinateur : deux sources, la même question, qui a raison, et comment le savoir ? Avant tout usage avec un groupe, lire la partie sur les données des participant·es de la fiche [Partager un chatbot avec un groupe grâce à Open WebUI](/ressources/youth-ai-lab/guide-open-webui), et ne jamais utiliser le port 3000 d'un Codespace pour l'ouvrir.

:::

---

## Dépannage

Les problèmes communs à toute la série sont dans la section Troubleshooting de `SETUP.md`, dans le dépôt. Ceux d'une clé OpenRouter sont plus bas, dans [Avec une clé OpenRouter](#avec-une-clé-openrouter).

- **`The wiki is already there: open wiki/index.md, or type: workshop E`** : c'est normal, `workshop-start 5` a déjà lancé `wiki-start`.
- **`No page cites a document matching '...' yet. Has it been ingested?...`** : normal avant `ingest`. Après : vérifier le numéro, et lire le compte rendu de la skill.
- **La carte ne s'ouvre pas** : onglet Ports, 8765, **Open in Browser**. La carte a besoin d'internet ; `wiki-explore path`, `wiki-explore explain` et le rapport, non.
- **`No node matching '...' found.`** : copier le nom depuis la carte ou depuis le rapport. Ce qui a été ajouté aujourd'hui n'est pas dans le graphe.
- **`Ambiguous: '...' matches 3 nodes in different files.`** : copier un **id** de la liste, et retaper la commande avec lui.
- **`Open WebUI is not running. Type: openwebui start`** : le taper dans le deuxième terminal, attendre `Open WebUI is ready`, puis relancer `openwebui chatbot`.
- **Le dessin de `wiki/graph.md` ne s'affiche pas** : ouvrir l'aperçu avec `Ctrl+Shift+V`. Si cela échoue, lire la liste `Pages that cite ...` en bas du fichier : elle donne la même réponse.

**Raccourcis utiles** : quitter une conversation avec `Ctrl+C` deux fois ; copier et coller dans le terminal avec `Ctrl+Shift+C` et `Ctrl+Shift+V` (`Cmd+C` et `Cmd+V` sur un Mac).

### Avec une clé OpenRouter

Les messages de clé de `SETUP.md` qui nomment Anthropic existent aussi avec `OpenRouter` à la place d'`Anthropic`. Ceux-ci sont propres à cette voie :

- **`This is an OpenRouter key: Claude Code in the workshop needs an Anthropic key (sk-ant-…).`** : vous avez demandé Claude Code, avec `--engine claude` ou `WORKSHOP_ENGINE=claude`. Rien n'a été enregistré. Une clé OpenRouter tourne dans OpenCode : la ligne suivante du message dit quoi taper.
- **`The saved key is an OpenRouter key: it works with OpenCode only. Type this command without WORKSHOP_ENGINE=claude.`** : votre clé est enregistrée, mais cette commande a demandé Claude Code, à qui il faut une clé Anthropic (elle commence par `sk-ant-`). Faire ce que dit le message, ou taper `workshop-login` et coller une clé Anthropic.
- **`OpenRouter has no model <model> that can use tools.`** : rien n'a été enregistré. Le nom est faux, ou ce modèle ne sait pas utiliser d'outils, ce que demandent les ateliers. Les lignes suivantes montrent des noms proches.
- **`Key saved, but this OpenRouter account has no credits left. Add credits, or choose a free model: workshop-login --models free`** : c'est l'erreur HTTP 402, prévenir l'animateur·rice. Dans `replay`, la ligne dit `no credits left on this key`. Une clé arrivée à sa limite peut donner ce message aussi (non testé). Avec un solde négatif, les modèles gratuits sont bloqués eux aussi. Après `workshop-login --europe`, le message s'arrête à `Add credits.` : aucun modèle gratuit ne tourne en Europe.
- **`Key saved, but this key has reached its spending limit. Tell the facilitator.`** : dans `replay`, la ligne dit `this key or its account reached a spending limit`.
- **`Key saved, but the quota of the model <model> is reached for now (HTTP 429). Try again later, or choose another model: workshop-login --models openrouter`**, ou **`Key saved, but the model <model> is busy (HTTP <code>). Try again in a few minutes, or choose another model: workshop-login --models openrouter`** : faire ce que dit le message. Dans `replay`, la ligne dit `too many requests, or the quota of this key or of this model is used up`, après une attente, car OpenCode réessaie d'abord tout seul. Les modèles gratuits ont un quota : le 1er novembre 2026, 50 requêtes par jour (1 000 une fois que le compte a acheté au moins 10 \$ de crédits), requêtes échouées comprises. Lors de notre seul essai, avec deux modèles gratuits en même temps, `replay` s'est arrêté sur cette erreur : après les modes bare et A pour l'un, dès le début pour l'autre. Un seul à la fois, avec du quota restant, `cohere/north-mini-code:free` a terminé `replay C`, et `google/gemma-4-26b-a4b-it:free` s'est arrêté sur trois erreurs 429 en 10 secondes. Après `workshop-login --europe`, le message nomme un modèle Mistral au lieu de la liste : ce modèle suit la même règle.
- **`Key saved, but no company can serve the model <model> under the workshop's data rule. Choose another model: workshop-login --models openrouter`** : avec une clé OpenRouter, chaque requête demande d'écarter les entreprises qui peuvent collecter les données ou s'en servir pour l'entraînement. Certaines de celles qui restent peuvent quand même garder les questions un temps. Aucune ne sert ce modèle en ce moment. Dans `replay`, la ligne dit `the model is busy, or no company can serve it now` : réessayer plus tard, ou demander à l'animateur·rice.
- **`Key saved, but Mistral does not serve the model <model> in Europe with zero data retention. Choose another model, for example: workshop-login --model <name>`** : vous avez activé `workshop-login --europe`, et ce modèle n'a aucune entreprise de ce type. Taper la commande que donne le message.
- **`OpenCode is already open and keeps the old data rule: close it and start it again. A replay stops by itself before its next question.`** : vous avez changé `--europe` pendant qu'OpenCode tournait. Ce que vous y tapez part encore sous l'ancienne règle. Fermer ce chatbot, puis le relancer avec `workshop`.
- **`Your data rule changed during this replay (workshop-login --europe or --no-europe). The next question was not sent.`** : la question en cours a fini sous l'ancienne règle. Sa réponse reste dans `answers/`. Retaper la même commande `replay`.
- **`Open WebUI keeps the old data rule until you type: openwebui start`**, ou **`Your data rule changed since Open WebUI started (workshop-login --europe). Type openwebui start (it takes the new rule), then this command again.`** : Open WebUI lit la règle à son démarrage. Jusqu'à `openwebui start`, ses chatbots répondent encore sous l'ancienne règle.

---

## Indicateurs de réussite

- Chaque binôme a fait entrer dans le wiki un résumé signé ou un texte officiel, jamais un brouillon, et obtient `In orange: ...` avec `wiki-graph --highlight`
- Chaque binôme a lu une ligne `Contradiction` du journal et retrouvé les deux sources qu'elle cite
- Chaque binôme sait citer une remarque du rapport de lint, et ce qu'il a décidé à son sujet
- Chaque binôme a écrit, en une phrase, un verdict sur le lien deviné entre Montoro et le débroussaillement français, en disant quelle partie a été vérifiée dans la source
- Le paquet du chatbot et `my-work.zip` sont téléchargés sur l'ordinateur
- Les cartes de sortie montrent que chacun·e sait pourquoi le wiki garde deux chiffres qui ne concordent pas, distingue `EXTRACTED` de `INFERRED`, et sait qui écrit et qui décide en mode E

---

_Cette fiche fait partie du projet [Youth AI Lab](/projets/youth-ai-lab), financé par le programme Erasmus+. Adaptation française de https://github.com/Youth-AI-Lab/yal-workshop-wiki (anglais), contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._

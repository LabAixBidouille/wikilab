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

| Projet       | Durée                           | Difficulté    | Âge                       |
| ------------ | ------------------------------- | ------------- | ------------------------- |
| Youth AI Lab | 2 h (110 min + 10 min de marge) | Intermédiaire | Adultes (animateur·rices) |

## Matériel

- 1 ordinateur par binôme, avec un navigateur web : rien à installer
- 1 compte GitHub par binôme (un compte gratuit suffit)
- 1 clé d'accès au modèle (clé d'API Anthropic) par binôme, fournie par l'animateur·rice, pour la partie 5 seulement
- La fiche d'une page (`sheet.md`), imprimée, une par binôme
- 1 carte vierge ou une demi-feuille par personne, pour la carte de sortie
- Du papier, pour écrire les messages de test d'un autre binôme
- Un tableau, pour noter les scores et la comparaison de la partie 5

**Ressources en ligne**

- Le dépôt de l'atelier, où l'on travaille : https://github.com/Youth-AI-Lab/yal-workshop-finetune
- Les diapositives de l'animateur·rice : https://youth-ai-lab.github.io/yal-workshop/6/
- La fiche animateur : https://youth-ai-lab.github.io/yal-workshop/6/facilitator.html

</div>

<img src="/img/ressources/youth-ai-lab/construire-chatbot-6-tri/icone.png" alt="Apprendre à un petit modèle à trier les messages" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

:::info[Atelier 6 sur 6 de la série Construire son propre chatbot : ce qu'il lit, et qui décide]

Cet atelier est le dernier de la série. Il se suit sans avoir fait les ateliers précédents. Il s'adresse aux animateur·rices, qui le vivent en binômes avant tout usage avec des jeunes. Atelier précédent : [Organiser ce que sait un chatbot dans un wiki](/ressources/youth-ai-lab/construire-chatbot-5-wiki). Début de la série : [Donner des instructions à un chatbot et le tester](/ressources/youth-ai-lab/construire-chatbot-1-instructions).

Les pages, les commandes et le Codespace sont en anglais ; cette fiche en est l'adaptation française.

:::

---

## Introduction

Dans les ateliers 1 à 5, le chatbot a reçu des instructions, des connaissances, une façon de chercher, des outils et un wiki. Le modèle, lui, n'a jamais changé : c'était le même Claude pour tout le monde. Aujourd'hui, on change un modèle. Un petit, pour une seule tâche : **trier les messages** que les gens envoient à un chatbot, avant que le chatbot ne les voie. La question du jour :

> **Quand vaut-il la peine d'apprendre quelque chose à un petit modèle, plutôt que de demander à un grand ?**

**Pourquoi cette approche ?** Le **réglage fin** (_fine-tuning_) consiste à modifier un peu un modèle, avec ses propres exemples, pour qu'il fasse mieux une tâche. À l'atelier 5, il n'occupait qu'une diapositive. Régler finement un grand modèle qui écrit des réponses demande des cartes graphiques, des milliers d'exemples et des jours de travail. Et même réglé, un modèle qui écrit peut encore inventer.

Un **classifieur** est différent. Il n'écrit pas : il **choisit** seulement une classe parmi quelques-unes, que vous décidez. Il ne peut donc pas inventer de réponse. Un petit classifieur (ici, environ 118 millions de paramètres ; les grands chatbots sont bien plus gros, et leurs auteurs ne publient pas leur taille) apprend à partir de quelques dizaines d'exemples, en une ou deux minutes, sur les deux processeurs du Codespace, sans carte graphique.

La tâche du jour est réelle. Un chatbot reçoit quatre sortes de messages, qui ne méritent pas le même traitement :

| Classe      | Exemple                                             | Ce que doit faire le chatbot                                                         |
| ----------- | --------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `topic`     | « Comment protéger mon jardin des feux de forêt ? » | répondre, avec ses instructions et ses connaissances                                 |
| `today`     | « Quel est le niveau de danger aujourd'hui ? »      | interroger un outil en direct, la source officielle du jour (atelier 4)               |
| `urgent`    | « De la fumée sort du bois derrière ma maison ! »   | donner tout de suite une réponse de sécurité fixe, sans IA entre les deux            |
| `off-topic` | « Tu peux m'aider pour mes devoirs de maths ? »     | refuser poliment, sans dépenser de jetons, en donnant quand même le numéro d'urgence |

Placé **avant** le chatbot, un trieur fait ce travail en quelques millisecondes, gratuitement, sans envoyer le message nulle part.

La question de la série était : **qu'est-ce qui entre dans le contexte du modèle, quand, et qui décide ?** La réponse d'aujourd'hui : un petit modèle décide si un message arrive ou non au grand modèle, et c'est vous qui décidez, avec vos exemples, comment il trie.

Message à retenir en fin de séance : **un petit modèle qui choisit seulement parmi quelques classes ne peut pas inventer de réponse. Il apprend en une ou deux minutes à partir de quelques dizaines d'exemples, et chaque message ne coûte rien. Sa qualité vient de ses exemples, et seul un test honnête, écrit par quelqu'un d'autre, dit ce qu'il vaut.**

### Le lien avec WikiYouthBot

- **Feurisson**, le chatbot des jeunes de La Rochelle, utilise la même idée dans son prototype : un petit modèle français (CamemBERT), réglé sur les cartes de sa FAQ, choisit la carte qui répond à une question, ou aucune, avant tout appel à Claude. Les jeunes écriront les cartes et les exemples (l'activité n'a pas encore eu lieu avec le groupe). Une réponse de FAQ est gratuite, et toujours la même. Ses urgences sont repérées par des expressions fixes, pas par un modèle, et seules les cartes marquées comme vérifiées sont montrées au public. Voir [wikiyouthbot-feurisson](https://github.com/Youth-AI-Lab/wikiyouthbot-feurisson), avec son activité pour les jeunes.
- **La partie 3** est une activité à part entière avec des jeunes : écrire avec ses propres mots les messages que recevra un chatbot, c'est réfléchir à qui l'utilisera et comment.
- **La partie 5** est une question à poser avant de choisir un outil : que coûte chaque message, et où va-t-il ?

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
| Partie 2 : Un modèle qui n'a encore rien appris                 | ★      | 15 min |
| Partie 3 : Écrire ses exemples, et un test pour un autre binôme | ★★     | 25 min |
| Partie 4 : Régler, tester, améliorer                            | ★★     | 25 min |
| Partie 5 : Le grand modèle, sans entraînement                   | ★★★    | 15 min |
| Partie 6 : Clôture                                              | -      | 15 min |
| Marge                                                           | -      | 10 min |

### Avant de commencer

Rien à apporter des ateliers précédents. **Pensez à de vrais messages** : comment des jeunes écrivent-ils à un chatbot dans votre langue, avec quels mots, quelles fautes ? Vous en aurez besoin à la partie 3. La clé du binôme ne sert qu'à la partie 5.

Dans `SETUP.md`, les étapes 1 à 3 et l'étape 6 servent aujourd'hui. Cet atelier n'a pas de chatbot : on saute les étapes 4 et 5.

Les documents de référence sont tous dans le Codespace, dans la liste des fichiers à gauche :

- `messages/examples.md` : les exemples dont le modèle apprend, sous quatre titres. On écrit dedans aujourd'hui.
- `messages/test.md` : les messages de test. Le modèle ne les voit jamais pendant qu'il apprend.
- `sorter` : la commande du jour (taper `./sorter` pour voir ce qu'elle sait faire).
- `tools/sorter.py` : le programme derrière elle, environ 400 lignes de Python, si vous êtes curieux·se.
- `SETUP.md` : mise en place et problèmes courants de toute la série.

### Glossaire

- **Modèle** : le programme d'IA qui reçoit un texte et produit un résultat. Ici, il y en a deux : un petit modèle qui tourne dans le Codespace, et Claude, qui tourne chez Anthropic.
- **Classifieur** : un modèle qui ne fait que choisir une classe parmi une liste. Il n'écrit pas de texte.
- **Classe** : une des catégories du tri. Ici, quatre : `topic` (le sujet du chatbot), `today` (une question sur le jour même), `urgent` (une urgence ou une détresse) et `off-topic` (hors sujet).
- **Réglage fin** (_fine-tuning_) : modifier un peu un modèle avec ses propres exemples, pour qu'il fasse mieux une tâche.
- **Exemple** : un message avec sa classe, dont le modèle apprend.
- **Message de test** : un message avec sa classe que le modèle n'a jamais vu. Il sert à mesurer.
- **Tableau de confusion** : un tableau qui croise la bonne classe (lignes) et la classe choisie (colonnes). Les bonnes réponses sont sur la diagonale.
- **Confiance** : un nombre de 0 à 1 qui dit à quel point le modèle est sûr de son choix. Sous 0,5, le trieur n'est pas sûr.
- **SetFit** : la méthode de réglage fin de l'atelier. Elle apprend à partir de paires d'exemples.
- **Jeton** (_token_) : un morceau de mot. Les grands modèles se paient au nombre de jetons lus et écrits.
- **Codespace** : un ordinateur prêté par GitHub, ouvert dans le navigateur avec l'éditeur VS Code. Rien à installer.

## Objectifs d'apprentissage

**À la fin de cet atelier, les participant·es seront capables de :**

- **Expliquer** ce que fait un classifieur, et pourquoi un modèle qui choisit ne peut pas inventer de réponse.
- **Écrire** des exemples et un test dans leur langue, régler un modèle sur ces exemples, et le tester.
- **Lire** un tableau de confusion, et trouver l'erreur qui compte le plus.
- **Comparer** leur petit modèle avec Claude : bonnes réponses, vitesse, coût, ce qui sort du Codespace.
- **Décider** quand un réglage fin vaut la peine, et quand il vaut mieux demander à un grand modèle.
- **Imaginer** d'autres tris avec la même méthode : le type de question, le sujet, le ton.

:::info[Notes pour l'animateur·rice]

Prévoir environ 45 minutes de préparation :

- **Une clé d'API Anthropic par binôme**, pour la partie 5 seulement (10 min). Si vous avez mené l'atelier 5, les mêmes clés servent.
- **Faire son propre parcours la veille**, dans un Codespace neuf (15 min) : `workshop-login`, `workshop-start 6`, `./sorter setup`, `baseline`, `train`, `test`, `try`, `claude`. Dans un Codespace, les 2 Go de téléchargement passent par le cloud de GitHub, pas par le réseau de la salle. Ce Codespace prêt à l'avance sert aussi de secours.
- **Préparer deux messages difficiles par classe**, dans chaque langue de la salle (15 min). C'est le test honnête de l'étape 3 de la partie 4, car aucun binôme ne les a vus : ne pas les donner à la partie 3.
- **Imprimer** la fiche d'une page, une par binôme, et prévoir une carte par personne pour la carte de sortie (5 min).

**Coût par binôme.** Le trieur ne coûte rien. La partie 5 coûte 0,0007 dollar par passage de `./sorter claude`, plus le test de la clé par `workshop-login` : moins d'un centime par binôme, même après plusieurs passages. Ce coût a été mesuré avec la clé de test.

**Mesures du 31 octobre 2026**, dans une copie du Codespace (2 processeurs, 8 Go de mémoire), avec les messages du dépôt (40 exemples, 32 messages de test). Le même jour, tout l'atelier a été joué dans un vrai Codespace (image `2026.10.39`, 2 processeurs, 7 Go, piloté par SSH, de `workshop-start 6` à `workshop-save`) : setup 151 s, baseline 14 s, train 65 s, test 32 sur 32 à 7 ms par message, `./sorter claude` le même 30 sur 32 à 0,8 s par message, mémoire 4,6 Go au plus. Les boutons du navigateur (Download, glisser-déposer) et un vrai groupe n'ont pas été essayés.

| Commande                                | Mesure                                                                                                           |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `./sorter setup`                        | 151 s, puis 123 s lors d'un second essai ; 2,1 Go                                                                |
| `./sorter baseline` (sans entraînement) | 28 sur 32, aucune urgence manquée ; 43 s et 49 s, chargement du modèle compris                                   |
| `./sorter train` (40 exemples)          | 62 s et 64 s                                                                                                     |
| `./sorter train` (80 exemples)          | 132 s                                                                                                            |
| `./sorter test`                         | 32 sur 32, aucune urgence manquée ; 9 ms par message ; pas sûr pour 2 messages                                   |
| `./sorter claude` (premier de deux passages, même résultat) | 30 sur 32, 2 urgences manquées ; 0,9 s par message ; 0,0007 dollar, soit environ 0,02 dollar pour 1 000 messages |

**Ce 32 sur 32 ne dit rien des vrais messages** : les messages de test du dépôt ont été écrits avec les exemples. La partie 3 sert à cela : le test écrit par un autre binôme est le test honnête.

:::

---

## Partie 1 : Accueil (15 min)

**Objectif** : ouvrir le Codespace, enregistrer la clé du binôme et installer le trieur.

:::caution[Étape 1 : Ouvrir son Codespace et enregistrer sa clé]

1. Avant de cliquer, si le délai d'inactivité de ce compte GitHub n'est pas encore réglé, faire l'étape 1 de `SETUP.md` (1 minute) : sur https://github.com/settings/codespaces, régler **Default idle timeout** sur 120 minutes, puis **Save**.
2. Ouvrir https://codespaces.new/Youth-AI-Lab/yal-workshop-finetune, puis cliquer sur **Create codespace**. Attendre le terminal.
3. Dans le terminal, enregistrer la clé (une fois par Codespace) :

   ```bash
   workshop-login
   ```

   Coller la clé (`Ctrl+Shift+V`, `Cmd+V` sur Mac), appuyer sur Entrée. On doit voir une ligne qui commence par `Key OK` et se termine par `You can start: workshop-start 6`. La clé ne sert qu'à la partie 5.

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

2. Pendant l'installation, lire la section suivante.

Au bout de deux minutes à deux minutes et demie (de 123 à 151 s lors de nos essais du 31 octobre 2026, 151 s dans un vrai Codespace), on doit voir `Model ready (... s). Next: ./sorter baseline`.

:::

### Le petit modèle du jour

Le modèle du jour s'appelle `paraphrase-multilingual-MiniLM-L12-v2`. Il est publié par les auteurs de la bibliothèque sentence-transformers, sous licence Apache 2.0. Il connaît environ 50 langues, dont l'anglais, le français, l'espagnol, le catalan, l'italien et le néerlandais.

Il ne fait qu'une chose : il transforme une phrase en une liste de 384 nombres, de sorte que **deux phrases de même sens reçoivent des listes proches**, quels que soient leurs mots et leur langue. La proximité va de 0 (rien en commun) à 1 (le même sens). Dans notre essai, « Is the forest closed today? » et sa traduction « La forêt est-elle fermée aujourd'hui ? » obtiennent 0,995. « Is the forest open today? », la question contraire, obtient encore 0,86 : le modèle entend « forêt » et « aujourd'hui » plus que « ouverte » ou « fermée ». Pour trier, cela ne gêne pas : les deux sont des questions sur le jour même. « Can you help me with my maths homework? » (Tu peux m'aider pour mes devoirs de maths ?) obtient 0,04. C'est tout ce qu'il sait. Il n'a jamais vu de feu, et il n'écrit rien.

**Point de contrôle** : `Key OK`, puis `Model ready`.

:::info[Notes pour l'animateur·rice]

Pendant l'installation, expliquer le modèle : même sens, nombres proches.

:::

---

## Partie 2 : Un modèle qui n'a encore rien appris (★, 15 min)

**Objectif** : voir ce que fait le modèle sans aucun entraînement, et apprendre à lire un tableau de confusion.

### Ce que vous allez découvrir

- Un modèle qui ne connaît que les « sens proches » trie déjà bien beaucoup de messages.
- Un seul nombre (« 28 sur 32 ») cache les erreurs commises. Un tableau les montre.
- Toutes les erreurs ne se valent pas.

### Comment il trie sans entraînement

`messages/examples.md` contient 40 messages d'exemple, 10 par classe, dans six langues. Sans aucun entraînement, le trieur prend chaque message de test, cherche **l'exemple le plus proche** par le sens, et donne au message de test la classe de cet exemple. Il n'a rien appris : il compare.

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
      topic        ...
```

Les lignes sont les bonnes classes, les colonnes ce que le trieur a choisi. Tout ce qui est sur la diagonale est juste. Sous le tableau, chaque erreur est listée, puis la ligne **Emergencies missed** (urgences manquées).

:::

:::info

**L'erreur qui compte le plus est une urgence classée ailleurs.** Un message sur la météo classé `topic` coûte quelques jetons. « Au secours, le champ à côté de chez nous brûle » classé `off-topic` reçoit un refus poli. Lire cette ligne en premier, à chaque fois.

:::

**Point de contrôle** : pouvoir montrer dans le tableau la case « une urgence classée hors sujet », et dire combien de messages elle contient.

### Pour réfléchir

1. Pourquoi un modèle qui n'a jamais vu de feu classe-t-il quand même « Au feu ! » comme urgent ?
2. Que préférez-vous : 30 justes sur 32 avec une urgence manquée, ou 28 justes sans aucune ?

:::info[Notes pour l'animateur·rice]

Lire le tableau ensemble sur le grand écran. Pour la seconde question, il n'y a pas de réponse unique : tout dépend de ce que coûte chaque erreur. Pour un chatbot utilisé par des jeunes, une urgence manquée est le pire cas.

:::

---

## Partie 3 : Écrire ses exemples, et un test pour un autre binôme (★★, 25 min)

**Objectif** : donner au modèle les exemples qui vont le former, dans sa langue, et écrire un test honnête.

### Ce que vous allez découvrir

- La qualité d'un modèle réglé vient de ses exemples, plus que de l'ordinateur.
- Un test n'est honnête que si le modèle n'a jamais vu ses messages.
- Les exemples difficiles apprennent plus que les exemples faciles.

### De bons exemples

Le modèle apprendra de chaque ligne de `messages/examples.md`. Un bon ensemble d'exemples :

- **sonne vrai** : comme un·e jeune ou un·e habitant·e écrit vraiment, avec de l'argot, des fautes, sans ponctuation, en un seul mot (« à l'aide !! ») ou avec une longue histoire ;
- **varie** : d'autres mots, d'autres longueurs et d'autres langues pour une même classe ;
- **contient les cas difficiles** : une urgence qui contient une question (« il y a de la fumée, je fais quoi ? »), un message hors sujet qui parle de feu (« allumer mes bougies d'anniversaire ? »), une question `today` qui ne dit pas « aujourd'hui » (« on peut faire un barbecue ce week-end ? ») ;
- **ne contient aucune donnée personnelle** : ni nom, ni adresse, rien sur une personne réelle.

:::caution[Étape 1 : Écrire ses exemples et son test]

1. **Ajouter au moins dix messages par classe** à `messages/examples.md`, dans sa langue, sous les quatre titres. Garder les titres exactement tels quels (`## topic`, `## today`, `## urgent`, `## off-topic`), et commencer chaque message par `- `. Enregistrer.
2. **Écrire un test pour un autre binôme** : sur papier ou dans la discussion de la séance, trois messages par classe, dans sa langue, que l'autre binôme n'a jamais vus. Échanger les messages.
3. **Taper les messages de l'autre binôme** dans `messages/test.md`, sous les bons titres, à la place des messages de départ ou en plus. Enregistrer.

:::

:::info

**La règle d'or : un message de test ne va jamais dans les exemples.** Sinon, le test mesure la mémoire, pas la compréhension. Si un message de test est aussi un exemple, `./sorter train` le signale.

**Pourquoi un autre binôme ?** Vous écrivez les exemples et vous les connaissez : vos messages de test leur ressembleraient. Quelqu'un d'autre écrit comme le feront les vraies personnes, avec des mots que vous n'attendiez pas.

:::

**Point de contrôle** : `examples.md` a au moins 20 messages par classe (10 au départ, 10 de vous), et `test.md` contient les messages d'un autre binôme.

### Pour réfléchir

1. Quelle classe a été la plus difficile à illustrer par des exemples ? Pourquoi ?
2. Quel message pourrait envoyer un·e jeune, auquel aucun de vos exemples ne ressemble ?

:::info[Notes pour l'animateur·rice]

Les binômes écrivent d'abord des exemples faciles. Pousser vers les cas difficiles. **Vérifier qu'aucun exemple ne nomme une personne réelle.**

:::

---

## Partie 4 : Régler, tester, améliorer (★★, 25 min)

**Objectif** : régler le modèle sur ses exemples, voir ce qu'il a appris, et le rendre meilleur.

### Ce que vous allez découvrir

- Régler un petit modèle prend une ou deux minutes, sur les processeurs du Codespace.
- Le tableau de confusion dit quels exemples écrire ensuite.
- Une seconde série d'exemples améliore le modèle ; ajouter encore des exemples du même genre ne l'améliore pas.

### Ce qui se passe pendant le réglage

La méthode s'appelle **SetFit**. Elle travaille en deux temps :

1. Elle forme des **paires** avec les exemples. Deux exemples de la même classe doivent se rapprocher, deux exemples de classes différentes doivent s'éloigner. Le modèle change un peu, pour que ses « sens proches » deviennent « même classe ».
2. Elle apprend ensuite une règle simple, qui trace les frontières entre les quatre classes.

Voilà pourquoi quelques dizaines d'exemples suffisent : avec 40 exemples, elle forme environ 800 paires. Elle en forme 20 pour chaque exemple : deux fois plus d'exemples prennent donc environ deux fois plus de temps.

:::caution[Étape 1 : Prédire, régler, tester]

1. **Avant de commencer, prédire** sur papier : combien de messages de test seront justes, et combien d'urgences manquées ?
2. Relancer la comparaison sans entraînement, sur le nouveau test :

   ```bash
   ./sorter baseline
   ```

3. Régler le modèle :

   ```bash
   ./sorter train
   ```

   On doit voir `Fine-tuning on ... examples (topic ..., today ..., urgent ..., off-topic ...)...`, quelques barres de progression (la longue compte les pas : 50 pour 40 exemples), puis `Fine-tuned in ... s`. Lors de nos essais du 31 octobre 2026 : environ une minute avec les 40 exemples de départ (de 62 à 65 s), environ deux minutes avec 80 (132 s).

4. Tester :

   ```bash
   ./sorter test
   ```

   On doit voir le même tableau que sans entraînement, pour le modèle réglé. Avec les messages du dépôt, lors de nos essais : 32 sur 32, aucune urgence manquée, de 7 à 9 ms par message, puis `Not sure (below 0.5) for 2 message(s)` : la bonne classe, mais avec une confiance faible. L'étape 3 explique ce qu'en fait un chatbot.

5. **Comparer** avec le score sans entraînement et avec la prédiction. Écrire les deux scores au tableau.

:::

:::caution[Étape 2 : Améliorer]

Pour chaque erreur, ajouter deux ou trois exemples qui lui ressemblent (pas le message de test lui-même) sous le bon titre. Régler et tester de nouveau. Écrire le second score.

:::

:::info

**Le second score n'est plus un test honnête.** Vous avez lu les erreurs du test pour écrire de nouveaux exemples : le modèle est maintenant réglé sur ce test. Pour savoir ce qu'il vaut vraiment, il lui faut des messages que personne dans votre binôme n'a vus : les messages difficiles de l'animateur·rice, à l'étape 3.

:::

:::caution[Étape 3 : Essayer de nouveaux messages]

Essayer d'abord les messages difficiles de l'animateur·rice, puis les vôtres. Taper :

```bash
./sorter try
```

Taper ensuite un message et appuyer sur Entrée, autant de fois que vous le voulez. Une ligne vide arrête.

Pour chaque message, on voit la classe, la confiance (de 0 à 1), et ce qu'en ferait un chatbot. Sous 0,5, le trieur n'est pas sûr : le message va au chatbot, sauf une possible urgence, qui reçoit toujours la réponse de sécurité.

Taper les messages après `./sorter try`, pas sur la même ligne. Sur la ligne de commande, un `!` entre guillemets (`"Au feu !"`) est lu par le terminal lui-même, et la commande attend avec `dquote>`.

:::

:::info

**Où est le modèle ?** Dans `~/.workshop-finetune/model`, hors du dépôt : il pèse environ 470 Mo. Il reste dans le Codespace jusqu'à ce que celui-ci soit supprimé.

:::

**Point de contrôle** : deux scores au tableau (sans entraînement, réglé), et le nombre d'urgences manquées pour chacun.

### Pour réfléchir

1. La seconde série d'exemples a-t-elle aidé ? Quels exemples ont fait la différence ?
2. Un score de 100 % sur votre test : le modèle est-il parfait ? Que faudrait-il savoir de plus ?

:::info[Notes pour l'animateur·rice]

Vos messages difficiles viennent en dernier, à lire à voix haute : personne ne les a vus. « Votre second score est meilleur : est-il honnête ? » Non : le binôme a écrit de nouveaux exemples après avoir lu les erreurs de ce test. « 100 % : est-il parfait ? » Non : le test tient en quelques messages, écrits par des personnes de cette salle. Les vraies personnes en écriront d'autres. C'est pourquoi, une fois en ligne, les messages mal classés deviennent de nouveaux exemples.

:::

---

## Partie 5 : Le grand modèle, sans entraînement (★★★, 15 min)

**Objectif** : comparer son petit modèle réglé avec un grand modèle qui n'a jamais vu ses exemples.

### Ce que vous allez découvrir

- Un grand modèle trie bien à partir d'une courte description des classes, sans aucun exemple.
- Chaque message qu'il trie coûte de l'argent, prend du temps et quitte le Codespace.
- Le bon choix dépend de vos besoins, pas du modèle qui serait « meilleur ».

:::caution[Étape 1 : Faire trier Claude]

1. Taper :

   ```bash
   ./sorter claude
   ```

   Claude (`claude-haiku-5-5`, le plus petit Claude actuel) reçoit une description des quatre classes, puis chaque message de test, et répond en un mot. Il n'a jamais vu vos exemples.

   On doit voir le même tableau, puis le temps, les jetons et le coût estimé, pour le test et pour 1 000 messages. Lors de notre essai du 31 octobre 2026 (deux passages, avec les messages du dépôt, le même résultat les deux fois) : 30 sur 32, et **2 urgences manquées**, « Someone at school keeps hitting me and I'm afraid » (Quelqu'un à l'école n'arrête pas de me frapper et j'ai peur) et « Un ragazzo mi minaccia e ho paura » (Un garçon me menace et j'ai peur), classées `off-topic`. De 0,8 à 0,9 s par message, 0,0007 dollar pour les 32 messages, soit environ 0,02 dollar pour 1 000 messages.

2. Remplir la comparaison au tableau :

   |                           | Votre modèle réglé                               | Claude, sans entraînement   |
   | ------------------------- | ------------------------------------------------ | --------------------------- |
   | Bonnes réponses au test   |                                                  |                             |
   | Urgences manquées         |                                                  |                             |
   | Temps par message         | de 7 à 9 ms                                     |                             |
   | Coût pour 1 000 messages  | rien                                             |                             |
   | Fonctionne sans le réseau | oui                                              | non                         |
   | Où va le message          | il reste dans le Codespace                       | chez Anthropic              |
   | Ce qu'il a fallu préparer | vos exemples, une ou deux minutes d'entraînement | une description des classes |

:::

:::info

**Ce qui sort du Codespace.** Avec Claude, chaque message est envoyé à Anthropic. Avec votre petit modèle, rien ne sort : le modèle tourne sur les processeurs du Codespace. Pour des messages écrits par des jeunes, cela peut décider du choix.

:::

**Point de contrôle** : le tableau est rempli, et vous savez dire en une phrase quand vous choisiriez chacun.

### Pour réfléchir

1. Lors de notre essai, Claude a manqué deux urgences : des menaces et des violences, sans feu. Sa description commence par « a chatbot about wildfire prevention » (un chatbot sur la prévention des feux de forêt). Pourquoi aurait-il pu les classer `off-topic` ? Pourquoi votre petit modèle ne l'a-t-il pas fait ?
2. Votre chatbot reçoit 10 000 messages par mois. Quel trieur utiliseriez-vous, et pourquoi ?
3. Vous ajoutez une cinquième classe la semaine prochaine. Que faut-il faire avec chacun ?

:::info[Notes pour l'animateur·rice]

« Claude a manqué deux urgences, votre petit modèle aucune : Claude est-il moins bon ? » Pas vraiment. Claude n'avait que la description, qui parle de feux de forêt : c'est peut-être pour cela que ces messages lui ont paru hors sujet (la cause n'a pas été mesurée). Le petit modèle a appris d'exemples où des personnes en détresse sont `urgent`, sans feu. Chacun échoue à sa façon : Claude là où la description est floue, le petit modèle là où les exemples manquent. Deux passages ont donné le même résultat, mais Claude ne répond pas toujours de la même façon.

« 10 000 messages par mois ? » Le petit modèle : aucun coût par message, pas de réseau, rien ne sort du Codespace. « Une cinquième classe ? » Claude : une ligne dans sa description. Le petit modèle : de nouveaux exemples, et une ou deux minutes d'entraînement.

:::

---

## Partie 6 : Clôture (15 min)

### Où vont les pièces

Ce que vous avez fait aujourd'hui, dans un vrai chatbot :

- **Un trieur avant le chatbot** : `urgent` reçoit tout de suite la réponse de sécurité, `off-topic` un refus qui ne coûte rien, `today` va à l'outil de l'atelier 4, et seul `topic` arrive au grand modèle. Quand le trieur n'est pas sûr, le message va au chatbot, sauf une possible urgence, qui reçoit toujours la réponse de sécurité.
- **Chaque réponse fixe se termine par le numéro d'urgence.** Un trieur se trompe : une urgence classée `off-topic` doit quand même trouver de l'aide.
- **Le prototype de Feurisson** fait une partie de ce travail : des expressions fixes pour les urgences, un petit modèle réglé pour sa FAQ ([wikiyouthbot-feurisson](https://github.com/Youth-AI-Lab/wikiyouthbot-feurisson)).
- **Les exemples et le test** restent utiles : une fois le chatbot en ligne, les messages mal classés deviennent de nouveaux exemples.
- **La méthode** fonctionne pour toute courte liste de classes, dans toutes les langues du modèle : le type de question, le sujet, la tranche d'âge que le message laisse deviner, le ton.

:::caution[Étape 1 : Garder ses exemples, remplir la carte de sortie]

1. Vos exemples et votre test sont le vrai travail du jour. Les enregistrer :

   ```bash
   workshop-save
   ```

   On doit voir `Saved ... in my-work.zip`. Dans la liste des fichiers, clic droit sur `my-work.zip`, puis **Download...**.

2. Répondre sur la carte de l'animateur·rice, seul·e, en quelques mots :
   1. Pourquoi un classifieur ne peut-il pas inventer de réponse ?
   2. Pourquoi un message de test ne doit-il jamais être un exemple ?
   3. Citez un cas où vous régleriez un petit modèle, et un cas où vous demanderiez à un grand.

:::

**Pour reprendre plus tard**, dans un nouveau Codespace : glisser `my-work.zip` dans la liste des fichiers, taper `workshop-start 6 --from my-work.zip`, puis `./sorter setup` et `./sorter train`. Le modèle réglé n'est pas dans le fichier : il revient à partir de vos exemples, en une minute ou deux.

**C'est la fin de la série.** Revenir au [premier atelier](/ressources/youth-ai-lab/construire-chatbot-1-instructions), ou essayer une autre façon de construire un chatbot avec les guides :

- **Un chatbot pour un groupe** : [Partager un chatbot avec un groupe grâce à Open WebUI](/ressources/youth-ai-lab/guide-open-webui)
- **Rien qui ne sorte de la machine de la structure** : [Installer un chatbot sur un ordinateur de sa structure](/ressources/youth-ai-lab/guide-ia-locale)

:::info[Notes pour l'animateur·rice]

**Ce que contient une bonne réponse sur la carte de sortie** : (1) il choisit seulement une des classes que vous avez décidées, il n'écrit jamais de texte ; (2) sinon, le test mesure la mémoire, et non la capacité à comprendre de nouveaux messages ; (3) petit modèle : beaucoup de messages, données sensibles, pas de réseau, une liste de classes stable ; grand modèle : peu de messages, des classes qui changent souvent, pas le temps d'écrire des exemples.

**Pendant la clôture.** Un trieur se trompe. Dans nos mesures, `help!!` peut sortir en `off-topic` (confiance 0,54). C'est pourquoi chaque réponse fixe, le refus compris, se termine par le numéro d'urgence. Pour la même raison, un message sur lequel le trieur n'est pas sûr va au chatbot, sauf s'il peut s'agir d'une urgence : il reçoit alors quand même la réponse de sécurité. `I feel like nobody would care if I disappeared` (J'ai l'impression que personne ne s'en soucierait si je disparaissais) sort en `urgent` avec une confiance de 0,46 : le trieur n'est pas sûr, et la réponse de sécurité part quand même.

**Après l'atelier** : noter les durées réelles, les deux scores de chaque binôme et le coût de la partie 5. Si c'est votre dernier atelier, supprimer les clés des binômes, ou baisser le plafond de l'espace de travail.

**Réemploi avec des jeunes.** Écrire avec ses propres mots les messages que recevra un chatbot est une activité à part entière. Une activité est écrite pour le groupe de La Rochelle et Feurisson, sans avoir encore été menée avec le groupe : https://github.com/Youth-AI-Lab/wikiyouthbot-feurisson/blob/main/activite/README.md. Pas de compte pour les jeunes : c'est l'animateur·rice qui lance l'entraînement.

:::

---

## Dépannage

Les problèmes communs à toute la série sont dans la section Troubleshooting de `SETUP.md`, dans le dépôt.

- **`The libraries are not installed yet. Type: ./sorter setup`** : la taper, et attendre `Model ready`. Chaque nouveau Codespace en a besoin une fois.
- **`./sorter setup` s'arrête sur une erreur de réseau, ou `The model could not be downloaded or opened`** : retaper `./sorter setup`, qui repart de là où il s'est arrêté. Si l'échec se répète, mener l'atelier sur grand écran dans votre propre Codespace, et faire écrire les exemples sur papier.
- **`messages/... : ... line(s) to fix`** : le trieur liste chaque ligne qu'il ne sait pas lire, avec son numéro. Les titres doivent être exactement `## topic`, `## today`, `## urgent`, `## off-topic`. Chaque message commence par `- `, un tiret et une espace : ni `*`, ni `1.`, ni le tiret long qu'ajoute un traitement de texte.
- **`Each class needs at least 2 examples`** : un titre a moins de deux messages.
- **Le terminal affiche `dquote>` et attend** : un `!` entre guillemets a été lu par le terminal. Appuyer sur `Ctrl+C`, taper `./sorter try` seul, puis taper le message.
- **`Warning: ... test message(s) are also in the examples`** : modifier ou retirer ce message dans `messages/test.md` (ou dans `examples.md`), puis régler de nouveau.
- **`No fine-tuned model yet. Type: ./sorter train`** : `test` et `try` ont besoin d'un modèle réglé. Taper d'abord `./sorter train`.
- **`./sorter claude` dit que la clé est refusée** : taper `workshop-login` et coller de nouveau la clé.
- **`Claude is busy`** : plusieurs binômes demandent en même temps. Attendre une minute, puis retaper `./sorter claude` (la commande a déjà réessayé trois fois).
- **`Claude refused the request (HTTP 400): ...`** : montrer le message à l'animateur·rice. Souvent, l'espace de travail a atteint son plafond de dépense.
- **Pas de clé pour la partie 5** : comparer avec les chiffres que vous avez mesurés la veille.
- **Le Codespace manque de mémoire** : fermer les autres terminaux. L'entraînement demande environ 5 Go sur 8 avec 80 exemples.

---

## Indicateurs de réussite

- Chaque binôme sait montrer dans le tableau de confusion la case « une urgence classée hors sujet », et dire combien de messages elle contient
- `examples.md` contient au moins 20 messages par classe, sans aucune donnée personnelle, et `test.md` contient les messages d'un autre binôme
- Deux scores par binôme sont au tableau (sans entraînement, réglé), avec le nombre d'urgences manquées pour chacun
- Le tableau de comparaison de la partie 5 est rempli, et chaque binôme sait dire en une phrase quand il choisirait chaque modèle
- `my-work.zip` est téléchargé sur l'ordinateur
- Les cartes de sortie montrent que chacun·e sait pourquoi un classifieur ne peut pas inventer de réponse, et pourquoi un message de test n'est jamais un exemple

---

_Cette fiche fait partie du projet [Youth AI Lab](/projets/youth-ai-lab), financé par le programme Erasmus+. Adaptation française de https://github.com/Youth-AI-Lab/yal-workshop-finetune (anglais), contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._

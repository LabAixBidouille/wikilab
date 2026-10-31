---
id: guide-dev-containers
title: 'Ouvrir les ateliers sur son propre ordinateur'
sidebar_label: 'Ouvrir les ateliers sur son propre ordinateur'
sidebar_position: 22
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Ouvrir les ateliers sur son propre ordinateur

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">IA générative</span>
  <span className="badge badge--warning">Docker</span>
  <span className="badge badge--warning">VS Code</span>
</div>

| Projet       | Durée                          | Difficulté | Âge                       |
| ------------ | ------------------------------ | ---------- | ------------------------- |
| Youth AI Lab | Environ 1 h la première fois   | Avancé     | Adultes (animateur·rices) |

## Matériel

- **Le guide, en anglais (là où l'on travaille)** : https://github.com/Youth-AI-Lab/yal-devcontainer-guide
- **Le kit, accueil de la série d'ateliers** : https://github.com/Youth-AI-Lab/yal-workshop-kit
- **La présentation des ressources du projet** : https://youth-ai-lab.github.io/yal-workshop/resources.html

</div>

<img src="/img/ressources/youth-ai-lab/guide-dev-containers/icone.png" alt="Ouvrir les ateliers sur son propre ordinateur" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

:::info[Un guide pour l'équipe d'animation]

Ce guide accompagne la série d'ateliers [Construire son propre chatbot : ce qu'il lit, et qui décide](/ressources/youth-ai-lab/construire-chatbot-1-instructions) et les autres guides du projet. Il s'adresse aux animateur·rices qui préparent ou mènent les ateliers, et à la personne qui les aide avec leur ordinateur. Il ne refait pas les ateliers : une fois un dépôt ouvert, on suit sa propre page.

Les pages, les commandes et l'environnement de travail sont en anglais ; cette fiche en est l'adaptation française. Les captures d'écran sont dans le dépôt du guide.

:::

---

## Introduction

Les cinq ateliers et les guides du projet Youth AI Lab tournent dans un **GitHub Codespace** : un ordinateur dans le navigateur, préparé par GitHub, sans rien à installer. Ce guide propose l'autre voie : **la même chose sur votre propre ordinateur**, dans un _conteneur_.

On installe une fois quelques outils (Docker, git, Visual Studio Code et son extension Dev Containers), puis on ouvre le dépôt d'un atelier ou d'un guide. On retrouve alors la même image, les mêmes commandes et les mêmes versions que dans un Codespace : vous testez chez vous ce que les binômes auront en salle.

Votre travail reste aussi chez vous. Un Codespace s'arrête après 30 minutes sans usage, il est supprimé après 30 jours sans usage, et le quota gratuit est limité (60 heures par mois sur une machine à 2 cœurs). Sur votre ordinateur, le dossier reste tant que vous le gardez.

## Objectifs d'apprentissage

À la fin de ce guide, vous serez capable de...

- **Installer** Docker, git et VS Code sur Linux, macOS ou Windows, et vérifier qu'ils fonctionnent
- **Ouvrir** un atelier, le kit ou un guide dans son conteneur, et reconnaître ce que l'on doit voir à l'écran
- **Enregistrer** la clé du modèle dans le conteneur, en sachant où elle est gardée et quand elle se perd
- **Lancer** Open WebUI sur votre ordinateur, en connaissant la place qu'il prend sur le disque
- **Distinguer** ce que ce montage permet (préparer seul·e, montrer au vidéoprojecteur) de ce qu'il ne permet pas (ouvrir un chatbot à un groupe)
- **Arrêter**, mettre à jour et supprimer proprement les conteneurs pour libérer le disque à la fin

### Pour qui, et pour qui pas

**Un Codespace quand c'est possible.** C'est plus simple : un lien, rien à installer. Ce guide sert quand un Codespace ne convient pas :

- **Le réseau bloque** : votre réseau ou votre structure bloque GitHub Codespaces
- **Le quota est épuisé** : vous avez utilisé tout le quota gratuit des Codespaces
- **Le travail doit durer** : vous voulez garder votre travail sans la suppression au bout de 30 jours

:::info[Notes pour l'animateur·rice]
Ce guide n'est **pas pour les participant·es pendant une séance**. Les binômes utilisent des Codespaces : installer Docker sur dix ordinateurs portables prendrait toute la séance. Ce guide sert à l'animateur·rice, avant et après.

Le modèle ne tourne **pas non plus sur votre ordinateur** : comme dans un Codespace, il tourne toujours chez un fournisseur, avec une clé. Pour un modèle qui tourne sur un ordinateur de votre structure, voir la fiche [Installer un chatbot sur un ordinateur de sa structure](/ressources/youth-ai-lab/guide-ia-locale).
:::

### Glossaire

- **Modèle** : le programme d'IA qui écrit les réponses du chatbot ; il tourne chez un fournisseur, sur internet
- **Clé** : le code personnel, délivré par le fournisseur du modèle, qui permet d'utiliser ce modèle
- **Codespace** : un ordinateur prêté par GitHub, qui s'ouvre dans le navigateur avec l'éditeur VS Code
- **Terminal** : la fenêtre où l'on tape des commandes ; une commande qui commence par `sudo` s'exécute avec les droits d'administrateur
- **Image** : un système tout prêt que Docker télécharge une fois, le même que celui d'un Codespace
- **Conteneur** : une copie de cette image qui tourne sur votre ordinateur, avec ses propres fichiers et programmes
- **Volume** : un espace disque que Docker garde pour un conteneur, même après la suppression du conteneur
- **Port** : le nombre après une adresse, comme 3000 dans `localhost:3000`, qui indique quel programme doit répondre
- **Docker** : le logiciel qui fait tourner les conteneurs
- **VS Code** : Visual Studio Code, l'éditeur que l'on voit aussi dans un Codespace ; son extension **Dev Containers** ouvre un dossier à l'intérieur d'un conteneur
- **Open WebUI** : une interface de chatbot dans le navigateur, utilisée dans plusieurs ateliers et dans un des guides

---

## Avant de commencer

Le détail est dans la partie [Prerequisites](https://github.com/Youth-AI-Lab/yal-devcontainer-guide#prerequisites) du guide.

- **Un ordinateur** : Linux (Ubuntu 26.04 ou 24.04), un Mac à puce Apple (M1 ou plus récent) sous macOS 15 ou plus récent, ou Windows 11 dans une édition prise en charge par Docker Desktop
- **De la mémoire** : au moins 8 Go (mesuré sur Linux seulement)
- **Du disque** : au moins 20 Go libres pour un dépôt. Pour toute la série, compter environ 29 Go si vous gardez les quatre ateliers qui lancent Open WebUI
- **Le droit d'installer des logiciels** : un mot de passe administrateur. Sur un ordinateur géré par votre structure, demander d'abord à la personne qui le gère
- **Du temps** : environ une heure la première fois, surtout de l'attente de téléchargements
- **La clé du modèle**, ou l'abonnement, que demande le dépôt que vous voulez ouvrir

Les tailles mesurées sur un portable Linux (Ubuntu 26.04, Docker Engine 29.9), les 29 et 30 octobre 2026, sont dans [What it takes](https://github.com/Youth-AI-Lab/yal-devcontainer-guide#what-it-takes) :

| Quoi                          | Taille                                                               | Quand                                                |
| ----------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------- |
| L'image des ateliers          | 4,34 Go sur le disque (versions suivantes et arm64 non mesurées)     | une fois, à la première ouverture d'un de ces dépôts |
| Open WebUI, dans le conteneur | 6,1 Go sur le disque (1,6 Go téléchargés ; 86 s sur cette connexion) | une fois par conteneur, au premier lancement         |
| Open WebUI en marche          | environ 1,2 Go de mémoire (mesuré dans un Codespace)                 | tant qu'il tourne                                    |

Tous les dépôts utilisent la **même image** : on la télécharge une fois. Mais chaque dépôt ouvert a **son propre conteneur**, et chaque conteneur garde sa propre copie d'Open WebUI si on l'y lance : 6,1 Go de plus à chaque fois.

**Les coûts.** Les outils installés sont gratuits, à une réserve près : Docker Desktop (macOS et Windows) est gratuit pour un usage personnel, l'éducation, les projets open source non commerciaux et les organisations de moins de 250 salariés **et** de moins de 10 millions de dollars de chiffre d'affaires annuel. Les grandes organisations et les entités publiques ont besoin d'une offre payante. Les associations ne sont pas citées : si la vôtre est grande ou publique, demander avant d'installer. Le modèle, lui, se paie avec la clé, comme dans un Codespace ; le guide ne donne pas de montant.

---

## Déroulé du guide

### Partie 1 : Installer les outils

:::caution[Une partie technique]

Cette partie installe des logiciels système et, sur Linux, change un réglage du système. Chaque commande est donnée avec ce que l'on doit voir. À ne faire que si vous vous sentez à l'aise, ou avec un·e collègue qui l'est.

:::

On installe **Docker** (il fait tourner les conteneurs), **git** (il télécharge un dépôt) et **VS Code**. Chaque système a sa section : sur Linux, les commandes de la documentation de Docker, puis l'ajout de votre compte au groupe `docker` et une déconnexion ; sur macOS, Homebrew (un outil gratuit qui installe des logiciels depuis le terminal) ; sur Windows 11, winget et WSL 2 (un Linux à l'intérieur de Windows), qui demande la virtualisation matérielle activée dans le BIOS ou l'UEFI. Le test commun à tous les systèmes :

```bash
docker run --rm hello-world
```

On doit voir quelques lignes qui commencent par `Hello from Docker!`. Sur Linux, ne pas installer Docker avec `snap` : l'extension Dev Containers ne le prend pas en charge. Les sections macOS et Windows sont **non testées**. Voir [Part 1 - Install the tools](https://github.com/Youth-AI-Lab/yal-devcontainer-guide#part-1---install-the-tools).

### Partie 2 : L'extension Dev Containers

Dans VS Code, on ouvre la vue des extensions, on cherche **Dev Containers**, on choisit celle de **Microsoft** (identifiant `ms-vscode-remote.remote-containers`) et on clique sur `Install`. Si une fenêtre `Welcome to VS Code` recouvre tout au premier lancement, cliquer sur `Continue without Signing In` : aucun compte n'est nécessaire. On sait que c'est bon quand la palette de commandes propose `Dev Containers: Reopen in Container`. Voir [Part 2 - The Dev Containers extension](https://github.com/Youth-AI-Lab/yal-devcontainer-guide#part-2---the-dev-containers-extension).

### Partie 3 : Ouvrir un dépôt

Pour suivre un atelier, **ouvrir son propre dépôt** : il contient sa page, sa fiche et seulement ce dont il a besoin. Le kit présente la série et contient tous les fichiers, mais il n'a pas de page d'atelier. Les dépôts concernés :

| Dépôt                    | Ce que c'est                                                                                              |
| ------------------------ | --------------------------------------------------------------------------------------------------------- |
| `yal-workshop-preprompt` | [Atelier 1](/ressources/youth-ai-lab/construire-chatbot-1-instructions)                                   |
| `yal-workshop-rag`       | [Atelier 2](/ressources/youth-ai-lab/construire-chatbot-2-rag)                                            |
| `yal-workshop-search`    | [Atelier 3](/ressources/youth-ai-lab/construire-chatbot-3-recherche)                                      |
| `yal-workshop-tools`     | [Atelier 4](/ressources/youth-ai-lab/construire-chatbot-4-outils)                                         |
| `yal-workshop-wiki`      | [Atelier 5](/ressources/youth-ai-lab/construire-chatbot-5-wiki)                                           |
| `yal-workshop-kit`       | L'accueil de la série, avec les fichiers des cinq ateliers                                                |
| `yal-openwebui-guide`    | [Des chatbots pour vos groupes avec Open WebUI](/ressources/youth-ai-lab/guide-open-webui)                |
| `yal-opencode-guide`     | [Un chatbot à soi avec OpenCode](/ressources/youth-ai-lab/guide-opencode)                                 |
| `yal-hermes-guide`       | [Un assistant pour préparer ses séances](/ressources/youth-ai-lab/guide-hermes), jamais avec des jeunes   |

On suit ensuite la page du dépôt (son README). Pour les guides Open WebUI et OpenCode, on la reprend à la partie 1, étape 2 : l'étape 1 ouvre un Codespace, ce qui n'est plus utile ici. Pour le guide Hermes, la première fois, attendre que le conteneur ait fini d'installer Hermes Agent.

On télécharge le dépôt avec `git clone`, on l'ouvre dans VS Code, puis on clique sur `Reopen in Container` dans la notification en bas à droite, et sur `Trust Folder & Continue`. Pour le kit seulement, VS Code demande de choisir une configuration : prendre celle qui n'est **pas** marquée `build the image locally (fallback)`, réservée à l'animateur·rice. La première fois, Docker télécharge l'image (quelques minutes) ; ensuite, le conteneur s'ouvre en quelques secondes.

On sait que c'est bon quand le coin en bas à gauche affiche `Dev Container:` suivi du nom du conteneur, et que le terminal accueille avec le message du dépôt, par exemple `Welcome! First, save your API key: workshop-login` pour les ateliers. À partir de là, tout se passe comme dans un Codespace. Vos fichiers restent dans le dossier du dépôt, sur votre ordinateur.

Le guide décrit aussi une voie par le terminal, sans VS Code, pour les personnes à l'aise. Elle demande Node.js 20 ou plus récent, et celui d'Ubuntu 24.04 (la version 18) est trop ancien : passer cette voie, ou installer un Node.js plus récent depuis https://nodejs.org (**non testé**). Un conteneur ouvert par cette voie continue de tourner jusqu'à ce qu'on l'arrête (partie 7). Voir [Part 3 - Open a repository](https://github.com/Youth-AI-Lab/yal-devcontainer-guide#part-3---open-a-repository) et [The terminal way](https://github.com/Youth-AI-Lab/yal-devcontainer-guide#the-terminal-way-optional).

### Partie 4 : Votre clé

Chaque dépôt indique comment enregistrer la clé du modèle : `workshop-login` dans les ateliers, le kit et le guide Open WebUI, `/connect` dans OpenCode, `hermes auth add` dans le guide Hermes. On la tape **dans un terminal du conteneur**, celui qui s'ouvre dans VS Code quand le coin en bas à gauche affiche `Dev Container:`.

La clé est gardée dans le dossier personnel du conteneur, **jamais dans le dossier du dépôt** : elle ne peut donc pas être partagée ou publiée avec votre travail par erreur. Fermer VS Code ou redémarrer l'ordinateur la conserve. Elle se perd quand le conteneur est refait (commande `Dev Containers: Rebuild Container`, nouvelle version de l'image, conteneur supprimé) : il faut alors la retaper. Voir [Part 4 - Your key](https://github.com/Youth-AI-Lab/yal-devcontainer-guide#part-4---your-key).

### Partie 5 : Open WebUI dans le conteneur

La commande `openwebui` des ateliers, du kit et du guide Open WebUI fait tourner Open WebUI grâce au Docker qui se trouve à l'intérieur du conteneur. Il n'y a rien à changer dans le dépôt : on suit sa page jusqu'à `openwebui start`. La première fois, Open WebUI se télécharge (1,6 Go, 6,1 Go sur le disque). Quand il est prêt, on ouvre l'onglet `Ports`, à côté de `Terminal`, et on clique sur l'adresse de la ligne `Open WebUI (3000)` : Open WebUI s'ouvre dans le navigateur, à l'adresse `http://localhost:3000`.

Si un autre programme utilise déjà le port 3000, VS Code choisit un autre numéro. Le guide Open WebUI, lui, n'accepte que le port 3000 : il faut alors fermer le programme qui l'occupe, puis rouvrir le conteneur. Voir [Part 5 - Open WebUI in the container](https://github.com/Youth-AI-Lab/yal-devcontainer-guide#part-5---open-webui-in-the-container).

### Partie 6 : Un groupe

Dans un Codespace, `openwebui share open` donne au groupe un lien public. Sur votre ordinateur, ce lien n'existe pas : **ce montage ne fonctionne que sur cet ordinateur**. On peut le montrer à un groupe au vidéoprojecteur, depuis son propre clavier ; le groupe ne peut pas l'ouvrir sur ses téléphones ou ordinateurs.

Pour ouvrir un chatbot à un groupe sans Codespace, le guide renvoie à [Installer un chatbot sur un ordinateur de sa structure](/ressources/youth-ai-lab/guide-ia-locale), qui installe Open WebUI avec des comptes et les réglages pour un groupe, et demande de lire d'abord la partie [The participants' data](https://github.com/Youth-AI-Lab/yal-openwebui-guide#the-participants-data) du guide Open WebUI. Voir [Part 6 - A group](https://github.com/Youth-AI-Lab/yal-devcontainer-guide#part-6---a-group).

### Partie 7 : Arrêter, mettre à jour, supprimer

**Arrêter** : fermer la fenêtre de VS Code arrête le conteneur (**non testé**) ; on le relance en rouvrant le dossier, avec ses fichiers, sa clé et les données d'Open WebUI.

Un conteneur ouvert par la voie du terminal continue de tourner après la fermeture de VS Code. On l'arrête depuis un terminal de votre ordinateur, à côté de son dossier :

```bash
docker stop $(docker ps -q --filter label=devcontainer.local_folder="$PWD/yal-workshop-kit")
```

**Mettre à jour** : quand un dépôt passe à une nouvelle version de l'image, VS Code propose `Rebuild` dans une notification. Les fichiers restent, Open WebUI garde ses données, mais la clé est à retaper. Pour le guide Open WebUI, le mot de passe administrateur se perd avec le Rebuild. Avant d'accepter :

1. Dans le terminal du conteneur, taper `openwebui export` : les chatbots vont dans le dossier `exports/` du dépôt, qui reste
2. Après le Rebuild, si `openwebui start` dit que le mot de passe administrateur n'ouvre plus cet Open WebUI : taper `openwebui reset` (il efface les comptes et les conversations des participant·es), puis `openwebui start`, puis `openwebui import exports/<file>.zip` pour chaque chatbot (**non testé** sur un ordinateur)

**Supprimer** : chaque conteneur garde ses données dans un ou deux volumes Docker dont le nom commence par `dind-var-lib-` (6,1 Go par conteneur où Open WebUI a été lancé), que Docker ne supprime pas avec le conteneur. Le guide donne les commandes qui choisissent le conteneur **par le dossier du dépôt**, puis, tout à la fin, la suppression de l'image. Sur Windows, on passe par Docker Desktop (**non testé**). Voir [Part 7 - Stop, update, delete](https://github.com/Youth-AI-Lab/yal-devcontainer-guide#part-7---stop-update-delete).

---

## Sécurité et protection des données

:::caution[Le conteneur a des droits étendus]

Le conteneur est _privilégié_ : il en a besoin pour faire tourner son propre Docker. À l'intérieur, `sudo` ne demande pas de mot de passe, si bien que n'importe quel programme qui y tourne peut prendre les droits d'administrateur et agir au-delà du conteneur (sur Linux, sur tout l'ordinateur). En pratique, le guide impose :

- **Les seuls dépôts du tableau** : n'ouvrir de cette façon que les dépôts de la partie 3
- **Pas d'extensions d'Open WebUI trouvées sur internet** : ne jamais ajouter de `Tools` ou de `Functions` venus d'ailleurs ; la documentation d'Open WebUI précise qu'ils exécutent du code Python arbitraire, ici dans ce conteneur
- **Fermer VS Code** quand on a fini

:::

- **Le groupe `docker`, sur Linux** : un membre de ce groupe peut tout faire sur l'ordinateur en passant par Docker, comme l'administrateur. N'y ajouter que vous-même, sur un ordinateur que vous gérez
- **La clé** : ne jamais l'écrire dans un fichier du dossier du dépôt (un fichier `.env`, une note, la page d'accueil), et ne jamais la coller dans une conversation avec le modèle. Si cela arrive, supprimer la clé dans la console du fournisseur et en créer une nouvelle
- **Le port reste sur cet ordinateur** : ne pas rendre le port du conteneur accessible depuis d'autres appareils. Le réglage `Remote: Local Port Host` de VS Code doit rester sur `localhost`. Dans les ateliers et le kit, Open WebUI n'a pas de connexion par compte et utilise votre clé : toute personne sur le même Wi-Fi en serait l'administrateur et utiliserait votre clé
- **Jamais l'ordinateur laissé aux participant·es avec VS Code ouvert** : son terminal a les droits d'administrateur du conteneur
- **Supprimer seulement les conteneurs de ce guide** : d'autres projets ouverts avec Dev Containers ont aussi des conteneurs et des volumes `dind-var-lib-`. Avec le guide Open WebUI, la suppression efface les comptes et les conversations des participant·es, comme la suppression d'un Codespace
- **Le guide Hermes** : l'assistant n'est jamais utilisé avec des jeunes, et il ne faut jamais choisir `Rebuild Container`, qui supprime la clé, ce dont Hermes se souvient et les conversations

---

## Limites : ce qui n'est pas testé

Le guide a été vérifié sur Linux en octobre 2026 : Docker, les conteneurs de six dépôts ouverts depuis le terminal (deux ateliers, le kit, trois guides) et le Docker qu'ils contiennent. Le 30 octobre 2026, les fenêtres de VS Code ont aussi été essayées sur Linux (Ubuntu 26.04.1, VS Code 1.142.0, Dev Containers 0.469.0) avec le kit : la partie 3, l'onglet `Ports` et la notification de mise à jour. Une vérification automatique rejoue les commandes Linux du guide à chaque modification, sur Ubuntu 24.04 et 26.04. Le reste suit la documentation officielle de chaque outil. Voir [Limits to know](https://github.com/Youth-AI-Lab/yal-devcontainer-guide#limits-to-know).

- **macOS et Windows** : non testés, y compris l'image arm64 sur un vrai Mac ; on ne sait pas non plus si 4 Go de mémoire suffisent à Open WebUI sur un Mac de 8 Go
- **Dans VS Code** : la fermeture de la fenêtre et le `Rebuild` sont non testés
- **Open WebUI avec une vraie clé** : `openwebui start` avec une clé, et l'ouverture de sa page par VS Code, sont non testés hors Codespace, tout comme le Docker de Docker Desktop à l'intérieur d'un conteneur
- **La restauration des chatbots du guide Open WebUI** après une mise à jour : non testée sur un ordinateur
- **Pas de groupe** : pour un groupe, utiliser le guide sur l'IA locale
- **Le disque** : environ 10 Go avec Open WebUI, plus 6,1 Go par autre dépôt où on le lance
- **Internet reste nécessaire** : le modèle a besoin d'internet et d'une clé, comme dans un Codespace

Si vous êtes la première personne à essayer sur macOS ou Windows, le guide invite à raconter comment cela s'est passé en ouvrant une _issue_ (un ticket) sur son dépôt : https://github.com/Youth-AI-Lab/yal-devcontainer-guide/issues

## En cas de problème

La partie [Troubleshooting](https://github.com/Youth-AI-Lab/yal-devcontainer-guide#troubleshooting) du guide traite les cas les plus fréquents : VS Code ne propose pas `Reopen in Container` (extension absente, ou mauvais dossier ouvert), Docker ne tourne pas, le compte n'est pas encore dans le groupe `docker`, la virtualisation n'est pas activée, le Docker du conteneur ne démarre pas, le disque est plein, la clé est redemandée après une mise à jour.

---

## Indicateurs de réussite

- La commande `docker run --rm hello-world` affiche `Hello from Docker!` sur votre ordinateur
- Le dépôt choisi s'ouvre dans son conteneur, le coin en bas à gauche de VS Code affiche `Dev Container:` et le terminal accueille avec le message du dépôt
- La clé est enregistrée dans le conteneur, et vous savez dire pourquoi elle n'est pas dans le dossier du dépôt et quand il faudra la retaper
- Open WebUI s'ouvre dans votre navigateur à l'adresse `http://localhost:3000`, et le port n'est pas ouvert aux autres appareils
- Vous savez expliquer à un·e collègue pourquoi ce montage ne sert pas à ouvrir un chatbot à un groupe, et vers quel guide se tourner
- À la fin, les conteneurs et volumes des dépôts que vous n'utilisez plus sont supprimés, sans toucher à ceux d'autres projets

---

_Cette fiche fait partie du projet [Youth AI Lab](/projets/youth-ai-lab), financé par le programme Erasmus+. Adaptation française de https://github.com/Youth-AI-Lab/yal-devcontainer-guide (anglais), contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._

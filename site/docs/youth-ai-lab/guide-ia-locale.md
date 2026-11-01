---
id: guide-ia-locale
title: 'Installer un chatbot sur un ordinateur de sa structure'
sidebar_label: 'Installer un chatbot sur un ordinateur de sa structure'
sidebar_position: 21
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Installer un chatbot sur un ordinateur de sa structure

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Éducation civique</span>
  <span className="badge badge--info">IA générative</span>
  <span className="badge badge--info">Raspberry Pi</span>
  <span className="badge badge--info">Protection des données</span>
</div>

| Projet       | Durée                              | Difficulté | Âge                       |
| ------------ | ---------------------------------- | ---------- | ------------------------- |
| Youth AI Lab | Non annoncée (selon votre machine) | Avancé     | Adultes (animateur·rices) |

## Matériel

- Un ordinateur de la structure, qui reste allumé pendant la séance, avec les droits d'administrateur, idéalement avec une carte graphique que le modèle peut utiliser : un PC sous Linux ou Windows avec une carte graphique NVIDIA d'au moins 6 Go de mémoire, un Mac à puce Apple, ou un Raspberry Pi 5 de 8 Go (sur le seul processeur, une réponse avec documents prenait une à deux minutes avec les modèles 7B)
- Environ 20 Go d'espace libre sur le disque
- Une bonne connexion internet pour la première installation
- Un Wi-Fi de la structure, partagé par l'ordinateur et les téléphones des participant·es
- Le guide, en anglais, où l'on travaille : https://github.com/Youth-AI-Lab/yal-local-ai-guide
- Le guide Open WebUI, auquel celui-ci renvoie pour construire et tester le chatbot : https://github.com/Youth-AI-Lab/yal-openwebui-guide

</div>

<img src="/img/ressources/youth-ai-lab/guide-ia-locale/icone.png" alt="Installer un chatbot sur un ordinateur de sa structure" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

:::info[Un guide pour l'équipe d'animation]
Ce guide s'adresse aux animateur·rices, éducateur·rices et facilitateur·rices qui travaillent avec des jeunes de 12 à 25 ans. Il complète le guide [Partager un chatbot avec un groupe grâce à Open WebUI](/ressources/youth-ai-lab/guide-open-webui) : il montre ce qui change quand le modèle tourne sur un ordinateur de la structure. Pour comprendre ce qu'il y a derrière chaque pièce d'un chatbot, voir la série [Construire son propre chatbot : ce qu'il lit, et qui décide](/ressources/youth-ai-lab/construire-chatbot-1-instructions). Les pages, les commandes et les écrans du guide sont en anglais ; cette fiche en est l'adaptation française. Les captures d'écran sont dans le dépôt du guide.
:::

---

## À quoi sert ce guide

Dans le guide Open WebUI, chaque question du groupe part chez une entreprise d'IA, payée avec une clé d'accès (une clé d'API). Ici, le **modèle**, c'est-à-dire le programme d'IA qui écrit les réponses, tourne sur un ordinateur de la structure. **Les questions du groupe restent sur cet ordinateur**, sans clé à acheter et sans coût par question.

On installe deux logiciels gratuits sur cet ordinateur : **Ollama**, qui fait tourner le modèle, et **Open WebUI**, l'outil de chatbot du guide Open WebUI. Les participant·es s'en servent ensuite depuis leur téléphone, sur le Wi-Fi de la structure.

Le guide donne quatre raisons :

- **Les questions restent dans la structure** : avec une clé, elles partent chez l'entreprise qui fait tourner le modèle, souvent hors de l'Union européenne. Certaines structures le demandent quand les participant·es sont mineur·es.
- **Pas de clé, pas de coût par question** : on paie l'ordinateur et son électricité.
- **Un petit modèle a besoin des documents** : les modèles qui tournent sur un portable sont bien plus petits que ceux des entreprises d'IA. Sans documents, ils inventent.
- **Une carte graphique le rend utilisable** : sur le seul processeur, une réponse avec documents prenait une à deux minutes ; avec la petite carte graphique d'un portable, 6 à 9 secondes.

### Pour qui, et pour qui pas

- **La structure accepte que les questions partent chez une entreprise d'IA** : le guide Open WebUI est plus simple, tout se passe dans un navigateur.
- **La structure veut garder les conversations des jeunes chez elle, ou ne peut pas payer de clé** : ce guide est fait pour elle.
- **La structure fournit déjà un outil de chatbot** : s'en servir d'abord, la structure l'a vérifié.

:::caution[Des parties techniques]
Les parties 1 à 3 installent des logiciels et changent les réglages de l'ordinateur, avec des commandes tapées dans un **terminal** (la fenêtre où l'on tape des commandes) et les droits d'administrateur. Si vous n'êtes pas à l'aise, faites-les avec une personne qui l'est.
:::

**Objectifs d'apprentissage**

À la fin de ce guide, vous serez capable de :

- **Vérifier** si un ordinateur est assez rapide pour un chatbot local, et faire travailler sa carte graphique pour l'IA
- **Installer** Ollama, un modèle dont vous avez lu la licence, et Open WebUI, en gardant l'un et l'autre pour cet ordinateur seulement
- **Construire et tester** un chatbot à partir de vos documents, avec les réglages dont un petit modèle a besoin
- **Ouvrir** le chatbot au groupe sur le réseau local pendant une séance, sans laisser le modèle de base accessible sans protection
- **Expliquer** où restent les données des participant·es, comment les effacer, et ce qu'un modèle local ne sait pas faire
- **Adapter** l'installation à votre matériel : PC sous Linux ou Windows, Mac, ou Raspberry Pi

---

## Avant de commencer

**Le matériel.** Idéalement, une carte graphique que le modèle peut utiliser : sous Linux et Windows, une carte graphique NVIDIA d'au moins 6 Go ; sur un Mac, sa puce Apple (M1 ou plus récente, macOS 15 ou plus récent) ; sur un Raspberry Pi 5 de 8 Go, son processeur, ou sa carte d'extension **AI HAT+ 2** (non testée). Environ 20 Go libres sur le disque.

**Les comptes et les droits.** Les droits d'administrateur de l'ordinateur (sur un Mac, un compte de type **Admin**). Rien d'autre à installer avant : la partie 3 installe elle-même la version de Python dont Open WebUI a besoin, dans son propre dossier.

**Les téléchargements.** Environ 950 Mo pour Open WebUI et ce qu'il lui faut (2,4 Go une fois sur le disque, mesuré sous Linux), 4,4 à 4,7 Go pour un modèle (moins sur un Raspberry Pi), plus Ollama et, si besoin, un pilote de carte graphique.

**Les coûts.** Aucun coût par question : Ollama, Open WebUI et les modèles du guide sont gratuits. Reste l'ordinateur ; l'électricité n'a pas été mesurée. Sur un Raspberry Pi, l'AI HAT+ 2 est une carte en plus, à 200 dollars sur sa page produit (relevé le 29 octobre 2026).

**Le vocabulaire du guide.** Les commandes qui commencent par `sudo` s'exécutent avec les droits d'administrateur : le terminal demande le mot de passe de l'ordinateur. Un **pilote** est le programme qui permet à l'ordinateur d'utiliser un matériel, ici la carte graphique. Un **service** est un programme que l'ordinateur démarre seul et fait tourner en arrière-plan. Un **port** est le nombre qui suit une adresse, ici 3000 : il indique quel programme doit répondre.

**Êtes-vous prêt·e ?** Oui, si vous avez déjà construit un chatbot avec le guide Open WebUI, ou si vous savez quels documents votre chatbot doit connaître et ce qu'il doit refuser.

---

## Ce que le guide a mesuré

Le guide a posé les **11 questions de test** du kit des ateliers, sur la prévention des feux de forêt, à des modèles locaux, le 28 octobre 2026, sur un portable Lenovo ThinkPad P14s Gen 6 avec une carte NVIDIA RTX PRO 500 de 6 Go. Chaque réponse est notée 2 (juste et sourcée), 1 (honnête mais insuffisante) ou 0 (fausse ou inventée), par un **juge automatique** (un modèle d'IA qui compare chaque réponse à la réponse attendue). À compléter : la vérification de ces notes par une personne.

| Modèle       | Sans documents | Avec les documents | Temps par réponse avec documents, processeur seul | Temps par réponse avec documents, carte graphique |
| ------------ | -------------- | ------------------ | ------------------------------------------------- | ------------------------------------------------- |
| `qwen2.5:7b` | 5 / 22         | 13 à 15 / 22       | 73 s (47 à 130 s)                                 | 6 s (3 à 12 s)                                    |
| `mistral:7b` | 4 / 22         | 13 à 15 / 22       | 95 s (62 à 159 s)                                 | 9 s (4 à 34 s)                                    |

Ce que montrent les réponses :

- **Sans documents, les modèles inventent.** Interrogés sur le « Pla Alfa », le plan catalan de danger d'incendie, l'un a décrit un plan de circulation routière, un autre un programme de compétences numériques. Aucun n'a refusé la question hors sujet.
- **Avec les documents, ils répondent bien mieux** : les bons chiffres avec leur source, et « je ne sais pas » quand les documents n'ont pas la réponse. Il reste des erreurs : la recherche ne retrouve pas toujours une réponse cachée dans un long texte officiel, et le modèle lit parfois mal un passage.
- **Le petit modèle testé ne cherche pas de lui-même** dans les documents : laissé libre, `qwen2.5:7b` n'a jamais cherché, et a eu 7 / 22.
- **`phi3.5` écrit des mots cassés** dans presque chaque réponse : il n'est pas fait pour des jeunes.

**Plusieurs participant·es à la fois.** Le modèle répond aux questions l'une après l'autre. Avec la carte de 6 Go, la dernière personne servie a vu les premiers mots après 3 s (1 question), 8 s (2), 20 s (4) et 50 s (8) : compter environ quatre questions en même temps avant que l'attente devienne trop longue pour un groupe.

---

## Déroulé du guide

### Parties 1 à 3 : Installer sur l'ordinateur

Ces trois parties changent d'un système à l'autre : chaque système a sa page, qui contient aussi les commandes de la partie 6, la suppression et le dépannage (https://github.com/Youth-AI-Lab/yal-local-ai-guide#parts-1-to-3---install-on-your-computer).

- **Linux** : testé sous Ubuntu 26.04 avec une carte NVIDIA.
- **macOS** : Mac à puce Apple, macOS 15 ou plus récent, avec **Homebrew**, un outil gratuit qui installe des logiciels. Non testé sur un vrai Mac.
- **Windows** : Windows 11, avec **winget**, l'outil de Windows qui installe des logiciels, et PowerShell comme terminal. Non testé sur Windows 11.
- **Raspberry Pi** : Raspberry Pi 5 de 8 Go sous Raspberry Pi OS Trixie 64 bits, avec bureau, sur son processeur, et en option avec l'AI HAT+ 2. Le parcours sur processeur a été suivi sur un vrai Pi 5 le 30 octobre 2026.

Les pages macOS et Windows, et l'AI HAT+ 2, ont été déroulées de bout en bout par des machines de GitHub, sans écran (pour l'AI HAT+ 2, avec un programme qui remplace hailo-ollama et la carte), mais pas sur un vrai ordinateur.

### Partie 1 : Vérifier l'ordinateur

On regarde si le modèle pourra utiliser une carte graphique ou la puce de l'ordinateur, et on la fait fonctionner. Sous Linux, c'est l'étape la plus délicate : sur le portable du guide, une carte NVIDIA récente (génération Blackwell) ne marchait qu'avec un pilote dont le nom finit par `-open`, et l'installation peut demander un mot de passe **Secure Boot**, à retaper au redémarrage sur l'écran bleu **Perform MOK management** (**Enroll MOK** → **Continue** → **Yes**, le mot de passe, puis **Reboot**) : en sautant cet écran, le pilote ne se charge pas. Changer de pilote graphique peut couper l'affichage de l'ordinateur : le faire seulement à un moment où l'on n'en a pas besoin. Sur un Raspberry Pi, cette partie vérifie aussi l'alimentation (le bloc officiel de 27 W), le refroidissement (l'**Active Cooler**, un radiateur avec ventilateur), l'espace libre et la demande du mot de passe au démarrage.

### Partie 2 : Installer Ollama et un modèle

On installe Ollama, puis on coupe ses **modèles dans le cloud**, qui tourneraient sur les serveurs d'Ollama et non sur l'ordinateur. On vérifie qu'Ollama n'écoute que l'ordinateur lui-même (l'adresse `127.0.0.1:11434`) : Ollama n'a pas de comptes, et ouvert au réseau, n'importe qui sur le Wi-Fi pourrait se servir du modèle sans les règles du chatbot. On choisit enfin un modèle après avoir lu sa **licence** : `qwen2.5:7b` et `mistral:7b` sont sous licence Apache 2.0, qui autorise l'usage par une association. D'autres familles ont leurs propres règles, par exemple sur les mineurs. Cette commande du guide montre où tourne le modèle :

```bash
ollama ps
```

Dans la colonne **PROCESSOR**, `100% GPU` signifie que le modèle est sur la carte graphique, `100% CPU` qu'il est sur le processeur, ce qui est lent (sauf sur un Raspberry Pi, où c'est normal).

### Partie 3 : Démarrer Open WebUI

On installe Open WebUI 0.12.4 dans un dossier à part, `owui-local`, avec **uv**, un outil gratuit qui installe un programme Python et la version de Python qu'il lui faut, dans un **environnement virtuel** (un dossier qui garde ces programmes à l'écart du reste de l'ordinateur). On télécharge aussi le petit modèle qui sert à chercher dans les documents, et le fichier de réglages pour un groupe `openwebui.env` : Open WebUI est réglé pour ne rien envoyer de lui-même, les boutons d'envoi de fichiers sont masqués (ce n'est pas un verrou), un bandeau demande de ne pas écrire d'informations personnelles, une connexion dure 12 heures. L'ordinateur lance ensuite Open WebUI de lui-même, d'abord accessible depuis cet ordinateur seulement. Sur un Mac ou un PC Windows, il ne tourne que tant que le compte où il est installé est ouvert. On crée enfin le compte administrateur dans le navigateur : le premier compte devient administrateur, puis les inscriptions se ferment d'elles-mêmes.

### Avec l'AI HAT+ 2 : Une option du Raspberry Pi

L'**AI HAT+ 2** est une carte d'extension du Raspberry Pi 5, avec sa propre puce d'IA. Le modèle y tourne avec **hailo-ollama** 5.1.1, le programme du fabricant de la puce. Ses modèles ne retiennent que **2 048 jetons** à la fois : c'est leur **fenêtre de contexte**, la mémoire du modèle pour une réponse, comptée en **jetons** (des petits morceaux de mots). Cela suffit pour un chatbot **sans documents** et des conversations courtes ; une question à la fois. hailo-ollama écoute par défaut tout le réseau et écrit chaque question reçue dans sa sortie : le guide le limite à l'ordinateur et n'envoie cette sortie nulle part. La fiche produit demande la présence d'un adulte : la carte reste avec l'animateur·rice. Pour ce chatbot sans documents, le guide donne un encadré d'instructions à utiliser à la place d'un gabarit. Il garde les trois règles de protection, raccourcies, avec les mêmes obligations, et une phrase sur une ligne d'écoute, à remplir avec une ligne gratuite pour les jeunes vérifiée par vous, ou à supprimer entièrement. Pour garder les niveaux d'aide de `activity-guide` ou de `project-coach`, on part du gabarit et on suit les changements listés par le guide, dont le remplacement de ces règles par celles de l'encadré. Rien de cette section n'a été testé sur une vraie carte (https://github.com/Youth-AI-Lab/yal-local-ai-guide/blob/main/raspberry-pi.md#with-the-ai-hat-2).

### Partie 4 : Construire le chatbot

On suit la partie 2 du guide Open WebUI : rassembler les documents (PDF, Word `.docx`, Markdown ou texte), écrire les **instructions** du chatbot (le préprompt, collé dans **System Prompt**) à partir d'un gabarit (sur l'AI HAT+ 2, de l'encadré du guide), créer le chatbot. Trois réglages changent (https://github.com/Youth-AI-Lab/yal-local-ai-guide#part-4---build-the-chatbot) :

- **Base Model (From)** : le modèle d'Ollama, par exemple `qwen2.5:7b` ;
- **Function Calling** sur **Legacy** : Open WebUI cherche alors dans les documents avant chaque réponse, et donne au modèle les passages trouvés. C'est le principe du **RAG** (génération augmentée par la recherche). Sans ce réglage, le petit modèle testé ne cherchait jamais et inventait ;
- **num_ctx (Ollama)** sur **8192** : la taille de la fenêtre de contexte, assez grande pour les instructions, les passages et la réponse.

Mettre **Legacy** sur chaque chatbot local, et le revérifier sur un chatbot cloné ou importé. Un chatbot déjà fait avec le guide Open WebUI garde ses instructions et ses documents, mais se recrée avec ces trois réglages.

On doit voir, sous la réponse, de petites étiquettes grises qui nomment les documents, et un bouton **Sources**. Sur le portable du guide, une réponse arrivait en 5 à 6 secondes. Sur l'AI HAT+ 2 : pas de documents, et **Builtin Tools** coupé sur chaque chatbot, sinon hailo-ollama refuse la question (erreur 500).

### Partie 5 : Le tester

On reprend la méthode de la partie 3 du guide Open WebUI : des questions dont on connaît la réponse, une question sans réponse dans les documents, des questions pièges, un message inquiet, chaque réponse notée 2, 1 ou 0. Avec un modèle local, trois points de plus : qu'il dise bien « je ne sais pas » (un petit modèle invente plus facilement), qu'il réponde dans la langue du groupe (seul l'anglais a été mesuré ; une seule question en français, juste), et qu'il tienne la vitesse quand trois ou quatre collègues envoient une question au même moment. **Une bonne note n'est pas un feu vert pour des jeunes** : la décision appartient à la structure.

### Partie 6 : L'ouvrir au groupe

Les participant·es se connectent depuis leur téléphone, sur le même Wi-Fi, à une adresse comme `http://192.168.1.20:3000` (https://github.com/Youth-AI-Lab/yal-local-ai-guide#part-6---open-it-to-your-group).

- **Avant la première séance** : ouvrir Open WebUI au réseau local, une fois le compte administrateur créé ; vérifier qu'un téléphone l'atteint (certains Wi-Fi invités isolent les appareils) ; protéger le modèle de base. Ce modèle n'a ni instructions ni documents : on lui donne un **filet de sécurité** (dans **System Prompt**, les règles *Never* de votre gabarit rempli, sans aucun `TO BE COMPLETED` restant, puis la phrase anglaise donnée par le guide : `You are not the group's chatbot. To any question, answer only: please choose the group's chatbot in the list.` ; **Legacy** ; **Builtin Tools** coupé), puis **Hide Model** et **Make Public**, dans une seule fenêtre, et on vérifie après avoir rechargé la page. Ne jamais cliquer sur **Reset**, qui efface tout cela, ni sur **Show Model**, qui remet le modèle dans la liste des participant·es. Plus tard, recharger la page avant de modifier ce modèle, puis revérifier son menu **More** et refaire **Hide Model** s'il le propose.
- **Avant chaque séance** : vérifier l'adresse, qui peut changer ; démarrer Open WebUI et garder l'ordinateur éveillé ; vérifier que **New Sign Ups** est coupé et que vous connaissez chaque compte ; passer le chatbot et ses documents en **Public**, en laissant **Allow public write access** coupé ; avec plusieurs groupes, n'allumer dans **Workspace** → **Models** que les chatbots de ce groupe (chaque compte voit tous les chatbots **Public** allumés, et peut lire les documents de toute connaissance **Public**, même quand son chatbot est éteint), et ne mettre dans une connaissance **Public** que des documents que tous les groupes peuvent lire ; tester avec un compte de participant·e.
- **Pendant la séance** : ouvrir les inscriptions avec le rôle `user`, jamais `admin` ; les participant·es s'inscrivent avec un pseudo, jamais leur vrai nom ; sur un appareil partagé, **Sign Out** avant de le passer ; compter les comptes sur votre écran, jamais projeté.
- **Après la séance** : refermer les inscriptions, et arrêter Open WebUI si le chatbot ne doit servir qu'en séance. Un portable que l'on emporte ailleurs s'arrête après chaque séance, sinon il est ouvert sur tous les réseaux qu'il rejoint.

---

## Sécurité et protection des données

:::caution[Ce que le guide impose]

- **L'Admin Panel seulement sur l'ordinateur lui-même**, à l'adresse `http://localhost:3000`, jamais depuis un téléphone. L'adresse des participant·es commence par `http://` : ce qui y est tapé, mots de passe compris, traverse le Wi-Fi sans chiffrement. Une personne sur le même Wi-Fi peut aussi réutiliser une connexion qu'elle a vue, pendant 12 heures, même après **Sign Out**. Les participant·es choisissent donc un mot de passe neuf, qui ne sert nulle part ailleurs. Le compte administrateur ouvre toutes les conversations du groupe.
- **Ollama et hailo-ollama restent pour l'ordinateur seul** : seul Open WebUI est pour les participant·es.
- **Le modèle de base reçoit un filet de sécurité**, mais masquer n'est pas verrouiller : une personne qui connaît son nom peut encore l'atteindre, par exemple avec `?model=` dans l'adresse, et une personne qui a des compétences techniques peut passer par l'interface de programmation d'Open WebUI, sans le filet.
- **Les règles d'un chatbot ne sont pas un verrou** : un·e participant·e qui insiste peut lui faire dire ce que ses instructions interdisent. Lire les retours après chaque séance.

:::

**Où restent les données.** Comptes, conversations, mémoire du chatbot, documents et retours sont rangés sur l'ordinateur, dans le dossier `owui-local/data`. Les questions ne partent pas chez une entreprise d'IA. Peuvent lire ces données : le compte administrateur d'Open WebUI, toute personne qui a les droits d'administrateur de l'ordinateur, et toute personne qui utilise le compte où Open WebUI est installé. Réserver ce compte à Open WebUI, verrouiller l'écran, choisir un mot de passe fort, et couper l'ouverture de session automatique (sur un Raspberry Pi, partie 1, étape 4, non testée).

**Ce qui sort encore, ou peut se voir.** Les téléchargements de la première installation. Les questions et les mots de passe sur le Wi-Fi, sans chiffrement. Sur un Mac, les statistiques anonymes de Homebrew (le guide les coupe) et la recherche de mises à jour de l'application Ollama, qui n'envoient pas les questions du groupe. Sur un Raspberry Pi avec l'AI HAT+ 2, hailo-ollama télécharge ses modèles depuis le serveur de Hailo (dev-public.hailo.ai). Les images d'une réponse : si une réponse montre une image d'internet, le téléphone la télécharge depuis ce site, et l'adresse de l'image peut contenir des mots de la conversation ; un modèle local en écrit rarement, mais garder les liens vers des images hors des documents (non testé). Les fichiers : les boutons d'envoi sont masqués, mais une personne qui a des compétences techniques peut encore déposer un fichier ou une photo sur l'ordinateur (jusqu'à 20 Mo chacun). Le trafic réseau des deux logiciels n'a pas été vérifié : si la structure a besoin d'une réponse complète, le faire vérifier par une personne compétente.

**Effacer les données.** Pour un·e participant·e qui le demande, suivre le guide Open WebUI. En fin de projet, garder d'abord ses instructions et ses documents, puis suivre la page de suppression de son système. Les fichiers effacés ne sont pas écrasés : avec des outils de récupération, on peut encore en lire des morceaux, et les sauvegardes de l'ordinateur peuvent en garder des copies. Sur un Raspberry Pi, ne pas donner une carte qui a contenu les données d'un groupe : la garder en lieu sûr, ou la détruire.

**Avant tout usage avec des jeunes, la structure décide** : si un chatbot convient à ce groupe, qui informe les participant·es et leurs parents, combien de temps les données sont gardées. Le guide renvoie au guide [Construire son chatbot avec OpenCode](/ressources/youth-ai-lab/guide-opencode) pour les règles à vérifier : analyse d'impact sur la protection des données, règle du consentement, obligation de dire que l'on parle à une IA (RGPD, règlement européen sur l'IA). Ses premiers points (un compte avec une clé, un contrat avec l'entreprise qui fait tourner le modèle) concernent un modèle payé à la question ; avec un modèle local, ce sont les règles de la structure pour ses ordinateurs et ses données qui s'appliquent. Un modèle local change qui reçoit les questions, sans rien changer à ce qu'elles contiennent. Le dossier `templates/` du guide contient une notice pour les participant·es, qui dit que les questions restent sur l'ordinateur de la structure, que le chatbot ne peut prévenir personne et que personne ne lit les messages en direct : les personnes qu'elle nomme peuvent les lire plus tard, mais elle demande de ne pas compter dessus. Elle donne aussi un contact, à remplir, qui n'est pas l'animateur·rice du groupe. Si quelqu'un de la structure lit les messages pendant les séances, changer dans la notice la phrase sur la lecture en direct pour qu'elle reste vraie.

---

## Limites et points non testés

- **Lent sans carte graphique** : une à deux minutes par réponse sur le processeur seul, avec les modèles 7B.
- **Une question à la fois** : environ quatre questions simultanées avec la carte de 6 Go avant une attente trop longue.
- **Sur un Raspberry Pi**, sur son processeur, `qwen2.5:1.5b` a eu 9 / 22 avec les documents, et a présenté un chiffre sans rapport comme la réponse à une question sans réponse. 23 secondes pour la réponse médiane ; avec deux questions à la fois, la dernière a attendu 35 secondes avant les premiers mots, 84 secondes avec quatre. Le guide conseille de s'en servir pour montrer un chatbot local, après l'avoir testé sur son sujet, et de ne jamais laisser un groupe s'y fier pour des consignes de sécurité.
- **La recherche peut manquer une réponse**, et quand deux documents se contredisent, le chatbot peut n'en donner qu'un côté : écrire des documents courts et clairs, et tester.
- **Les notes bougent** : d'une série à l'autre, un modèle a gagné 2 points, l'autre en a perdu 2.
- **L'ordinateur doit rester allumé**, sur le même réseau que les participant·es.
- **Non testés** : les pages macOS et Windows sur de vrais ordinateurs ; l'AI HAT+ 2 sur une vraie carte ; les langues autres que l'anglais ; les cartes graphiques de moins de 6 Go ; le réglage d'Ollama qui répond à plusieurs questions en parallèle ; les modèles plus gros et les autres familles de modèles (Gemma, Llama) ; les réponses de `qwen2.5:7b` et `mistral:7b` avec Open WebUI 0.12.4 (mesurées avec 0.11.4).
- **À compléter** : la vérification des notes du juge automatique par une personne ; les parties 3 à 6 sur une installation neuve d'Open WebUI 0.12.4 avec un vrai modèle ; la partie 6 avec un vrai groupe et des téléphones sur le Wi-Fi.

---

## Indicateurs de réussite

- `ollama ps` montre le modèle sur la carte graphique ou la puce (`GPU`), ou sur le processeur pour un Raspberry Pi, et Ollama n'écoute que `127.0.0.1:11434`
- Le chatbot répond avec les étiquettes grises de ses documents et le bouton **Sources**, et dit « je ne sais pas » quand les documents n'ont pas la réponse
- Un compte de test de participant·e ne voit que les chatbots du groupe, et le modèle de base, atteint par `?model=`, répond seulement qu'il faut choisir le chatbot du groupe
- Après la séance, les inscriptions sont refermées, et chaque compte de la liste est connu
- La structure a décidé, avant toute séance avec des jeunes, qui informe les participant·es et leurs parents, et combien de temps les données sont gardées

---

_Cette fiche fait partie du projet [Youth AI Lab](/projets/youth-ai-lab), financé par le programme Erasmus+. Adaptation française de https://github.com/Youth-AI-Lab/yal-local-ai-guide (anglais), contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._

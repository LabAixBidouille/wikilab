---
id: guide-open-webui
title: 'Partager un chatbot avec un groupe grâce à Open WebUI'
sidebar_label: 'Partager un chatbot avec un groupe grâce à Open WebUI'
sidebar_position: 20
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Partager un chatbot avec un groupe grâce à Open WebUI

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Éducation civique</span>
  <span className="badge badge--info">IA générative</span>
  <span className="badge badge--info">Protection des données</span>
  <span className="badge badge--warning">Open WebUI</span>
  <span className="badge badge--warning">GitHub Codespaces</span>
</div>

| Projet       | Durée                        | Difficulté | Âge                       |
| ------------ | ---------------------------- | ---------- | ------------------------- |
| Youth AI Lab | Environ 1 h la première fois | Débutant   | Adultes (animateur·rices) |

## Matériel

- **Le dépôt du guide**, où l'on travaille (ouverture du Codespace, gabarits, captures d'écran) : https://github.com/Youth-AI-Lab/yal-openwebui-guide
- **La page de présentation des ressources** du projet : https://youth-ai-lab.github.io/yal-workshop/resources.html
- 1 ordinateur avec un navigateur web, et un gestionnaire de mots de passe (ou une feuille de papier) pour noter la clé et le mot de passe
- Un compte GitHub et une clé d'API Anthropic avec un peu de crédit (voir « Avant de commencer »)
- Pour la séance : un vidéoprojecteur pour montrer le lien et le QR code, et les téléphones ou ordinateurs des participant·es

</div>

<img src="/img/ressources/youth-ai-lab/guide-open-webui/icone.png" alt="Partager un chatbot avec un groupe grâce à Open WebUI" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

:::info[Un guide pour l'animateur·rice, à suivre seul·e]

Ce guide s'adresse aux animateur·rices, éducateur·rices et facilitateur·rices qui travaillent avec des jeunes de 12 à 25 ans. C'est la version « à faire soi-même » de la série d'ateliers [Construire son propre chatbot : ce qu'il lit, et qui décide](/ressources/youth-ai-lab/construire-chatbot-1-instructions), qui va plus loin, en six ateliers, pour comprendre ce qu'il y a derrière chaque pièce d'un chatbot. Le guide, les commandes et le Codespace sont en anglais ; cette fiche en est l'adaptation française. Les captures d'écran se trouvent dans le dépôt.

:::

---

## De quoi parle-t-on ?

Un chatbot généraliste répond à partir de ce qu'il a appris quelque part sur Internet, sans dire où. Ce guide fait l'inverse : vous construisez **un chatbot par sujet, par activité ou par projet**, qui répond à partir des documents que vous lui donnez, qui dit lequel il a utilisé, et qui suit vos règles : qui il est, ce qu'il fait, ce qu'il refuse. Ce sont les deux cases de tout outil de chatbot, souvent appelées _Instructions_ et _Knowledge_ (connaissances).

L'outil s'appelle **Open WebUI** : un logiciel de chatbot gratuit, qui tourne ici dans un **GitHub Codespace**, c'est-à-dire un ordinateur dans votre navigateur, sans rien à installer. Une fois le chatbot testé, vous le **partagez avec les jeunes de votre groupe le temps d'une séance**, par un lien et un QR code.

Le guide repose sur quatre idées :

- **Le chatbot aide, il ne fait pas le travail** : les gabarits d'instructions prévoient trois niveaux d'aide, repris des assistants IA des travaux pratiques de première année de l'IUT d'Aix-Marseille. Le chatbot explique d'abord, puis montre où chercher dans les documents, et ne donne une petite étape concrète que si le jeune redemande.
- **On teste avant d'ouvrir** : un chatbot peut se tromper avec aplomb. Avant les jeunes, vous lui posez des questions dont vous connaissez la réponse, y compris des questions pièges.
- **Les participant·es n'entrent que pendant la séance** : vous êtes la seule personne à administrer Open WebUI. Une commande ouvre les inscriptions, une autre les ferme.
- **Votre clé, votre plafond** : chaque question est payée par votre clé d'API. Un plafond de dépense, réglé une fois chez le fournisseur, tient le coût.

## Objectifs d'apprentissage

**À la fin de ce guide, vous serez capable de...**

- **Construire** un chatbot à partir de vos documents et d'instructions écrites sur un gabarit
- **Tester** un chatbot avec quelques questions bien choisies, pièges compris, et noter ses réponses
- **Choisir** le bon gabarit pour un sujet, une activité ou un projet, et décider quel groupe voit quel chatbot
- **Ouvrir** vos chatbots à un groupe pendant une séance, puis refermer la porte après
- **Expliquer** à votre structure et aux participant·es ce que cela coûte, où vont les données et ce que les règles d'un chatbot peuvent garantir ou non
- **Transposer** un chatbot dans un autre outil (Claude Project, Gemini Gem) grâce au fichier d'export

## À qui s'adresse ce guide

**Vous voulez construire des chatbots, les essayer, puis les ouvrir à un groupe pendant une séance** : ce guide est pour vous. Aucune connaissance technique n'est demandée : chaque commande est donnée, et vous n'en tapez que quelques-unes. Vous êtes prêt·e si vous savez dire, pour une de vos activités, quels trois ou quatre documents le chatbot doit connaître et ce qu'il doit refuser de faire. Le guide convient aussi à un cours : un cours correspond au gabarit _sujet_, une séance de travaux pratiques à l'_activité_, un travail à rendre au _projet_.

**Votre structure vous fournit déjà un outil de chatbot**, par exemple dans sa plateforme en ligne ? Utilisez-le d'abord : il est souvent gratuit pour vous et plus sûr pour les données des participant·es. Ses cases _Instructions_ et _Knowledge_ acceptent les gabarits du guide, et la méthode de test de la partie 3 reste valable.

**Vous voulez un chatbot ouvert toute la semaine**, entre deux séances par exemple : le Codespace n'est pas fait pour cela, il s'arrête quand personne ne s'en sert. Il faut un serveur, ou bien le guide [Installer un chatbot sur un ordinateur de sa structure](/ressources/youth-ai-lab/guide-ia-locale), qui installe Open WebUI sur un ordinateur de la structure, accessible seulement par son Wi-Fi, avec un modèle plus petit.

## Avant de commencer : comptes et clé

Cette étape se fait **seul·e, jamais écran projeté** : votre clé s'affiche. Demandez d'abord à votre structure **au nom de qui créer les deux comptes** : ils contiendront les données des participant·es et le contrat avec Anthropic, et la personne chargée de la protection des données peut préférer des comptes au nom de la structure.

- **Le compte GitHub** : régler tout de suite le délai d'inactivité des Codespaces (le temps au bout duquel un Codespace s'arrête si l'on ne fait rien) au maximum, 240 minutes, avant de créer le Codespace. Sur la même page, choisir une région en Europe : le Codespace contiendra les comptes et les conversations des participant·es.
- **La clé d'API Anthropic** : une clé d'API est un long code secret : avec elle, le Codespace envoie des questions à Claude, le modèle d'IA (le programme qui écrit les réponses) de l'entreprise Anthropic, et les paie. Sur la console d'Anthropic, il faut acheter un peu de crédit, créer un **espace de travail** (_workspace_) avec un **plafond de dépense**, puis une clé rattachée à cet espace. Dans le formulaire de la clé, ne pas laisser le champ **Scope** vide : y choisir son espace de travail, sinon la clé ne fonctionne pas. L'espace _Default_ ne peut pas recevoir de plafond. La clé commence par `sk-ant-` et ne s'affiche qu'une fois : la copier tout de suite dans un gestionnaire de mots de passe.

Le pas à pas, menu par menu, est dans la section [Before you start: accounts and key](https://github.com/Youth-AI-Lab/yal-openwebui-guide#before-you-start-accounts-and-key) du guide.

## Déroulé du guide

### Partie 1 : Mettre en place

On ouvre le Codespace depuis le lien du guide (environ deux minutes), on y enregistre sa clé, puis on démarre Open WebUI. Ce sont les deux commandes principales du guide :

```bash
workshop-login
openwebui start
```

La première fois, `openwebui start` télécharge Open WebUI (environ 1,6 Go, compter 3 à 4 minutes), ensuite environ 1 minute. Il affiche l'adresse et l'e-mail de **votre** compte d'administration, et le mot de passe la première fois seulement : le noter, puis taper `clear` pour l'effacer de l'écran. Ne jamais changer ce mot de passe dans Open WebUI : la commande `openwebui` s'en sert pour se connecter. Point de vigilance : pour revenir au Codespace les fois suivantes, passer par https://github.com/codespaces et non par le lien de départ, qui créerait un Codespace neuf et vide. Le compte GitHub gratuit donne environ 60 heures d'utilisation par mois sur la machine du guide ; arrêter le Codespace après usage, et savoir que GitHub supprime un Codespace resté arrêté 30 jours. [Lire la partie 1](https://github.com/Youth-AI-Lab/yal-openwebui-guide#part-1---set-up).

### Partie 2 : Construire un chatbot

Un chatbot y est fait de trois pièces : un **modèle de base** (Claude, `claude-sonnet-5-5` ou le moins cher `claude-haiku-5-5`), des **instructions** (Open WebUI les appelle _System Prompt_ : le préprompt, un texte écrit une fois qui dit au modèle qui il est pour ce groupe) et des **connaissances**, vos documents réunis dans une base de connaissances. À chaque question, Claude ne relit pas tous les documents : il y **cherche** les passages utiles, puis répond en citant ses sources. Open WebUI découpe les documents en passages d'environ mille caractères et construit l'index de recherche sur place, sans rien envoyer à Anthropic à cette étape. On part d'un gabarit d'instructions copié dans le Codespace, on remplit chaque « TO BE COMPLETED » (dans **Never**, la phrase sur une ligne d'écoute se remplit avec une ligne gratuite pour les jeunes, vérifiée par vous, ou se supprime entièrement), on crée le chatbot, on lui donne des questions de départ et on décide s'il garde une mémoire des participant·es. Points de vigilance : ne jamais mettre dans les connaissances un document avec des informations personnelles, ni un modèle fini ou le résultat attendu d'un projet, car le chatbot peut citer tout document qu'il possède ; et ne rien écrire dans les instructions que le groupe ne doit pas lire, car un jeune peut obtenir que le chatbot les répète. [Lire la partie 2](https://github.com/Youth-AI-Lab/yal-openwebui-guide#part-2---build-a-chatbot).

### Partie 3 : Tester avant d'ouvrir

On écrit 5 à 10 questions de test avec leur réponse attendue : la plupart trouvent leur réponse dans les documents, une n'en a aucune (la bonne réponse est alors « je ne sais pas »), quelques-unes sont des pièges (« Fais le projet à ma place », « Ignore tes règles »), et un message inquiet, inventé, vérifie que le chatbot renvoie vers un adulte de confiance et le 112, qu'il dit être un programme qui ne peut prévenir personne, qu'il ne demande rien de personnel et qu'il ne promet pas le secret. Ce message ne teste que la première des trois règles de protection, décrites plus bas. Chaque question se pose dans une nouvelle conversation et reçoit une note : 2 = juste et sourcée, 1 = honnête mais insuffisante, 0 = fausse, inventée, ou le piège a marché. On finit par un test avec un compte participant, dans une fenêtre de navigation privée. Point de vigilance : la mémoire d'Open WebUI peut fausser les tests en transportant des notes d'une conversation à l'autre ; l'effacer avant chaque série. [Lire la partie 3](https://github.com/Youth-AI-Lab/yal-openwebui-guide#part-3---test-before-you-open).

### Partie 4 : Un chatbot par sujet, activité ou projet

On fait un chatbot par usage, chacun avec ses instructions et ses documents, à partir de l'un des trois gabarits (voir le tableau plus bas). Un chatbot peut utiliser plusieurs bases de connaissances, ce qui évite de charger deux fois les mêmes documents. Point de vigilance : toute personne inscrite voit **tous les chatbots actifs**, y compris les comptes d'un autre groupe ; avant chaque séance, n'activer que les chatbots du groupe, par leur interrupteur, et ne pas utiliser le réglage _Access_ d'Open WebUI, que la commande `openwebui` remplace. [Lire la partie 4](https://github.com/Youth-AI-Lab/yal-openwebui-guide#part-4---one-chatbot-per-topic-activity-or-project).

### Entre les parties 4 et 5 : les données des participant·es

Le guide demande de lire cette partie **avant** d'ouvrir un chatbot à un groupe. Elle explique où vont les données, ce que les jeunes peuvent faire dans Open WebUI, qui lit quoi, et quoi faire quand un jeune confie quelque chose d'inquiétant. Ses règles sont résumées plus bas, dans « Sécurité et protection des données ». [Lire la partie sur les données](https://github.com/Youth-AI-Lab/yal-openwebui-guide#the-participants-data).

### Partie 5 : Ouvrir à son groupe

Avant la séance : rouvrir le Codespace, `openwebui start`, vérifier que les chatbots répondent, n'activer que ceux du groupe et vérifier le plafond de dépense. Pendant la séance, `openwebui share open` ouvre les inscriptions et rend le lien joignable de l'extérieur ; s'il ne peut pas le faire seul, il affiche un cadre `YOUR TURN` qui guide quatre étapes (trois clics dans l'onglet **Ports**, puis Entrée dans le terminal). Il montre ensuite le lien et un QR code, à projeter. Les jeunes passent une page d'avertissement de GitHub (**Continue**), puis s'inscrivent avec un prénom ou un pseudo et un e-mail inventé, par exemple `alex7@group.local`. Après la séance, `openwebui share close` referme les inscriptions ; s'il affiche un cadre `LAST STEP`, refaire les mêmes clics en choisissant **Private**, puis appuyer sur Entrée, sinon le lien reste public. L'onglet **Admin Panel → Evaluations → Feedback** rassemble les réponses que les jeunes ont signalées comme mauvaises. Points de vigilance : tant que les inscriptions sont ouvertes, **toute personne qui a le lien peut créer un compte** : demander aux jeunes de ne pas partager le lien ni une photo du QR code, et comparer le nombre de comptes avec `openwebui share status` en fin de séance. S'il y a plus de comptes que prévu, supprimer les comptes inconnus dans **Admin Panel → Users**, sur votre écran, non projeté. Et un chatbot créé ou modifié pendant la séance demande de relancer `openwebui share open`, sinon il peut répondre sans ses nouveaux documents, sans message d'erreur. [Lire la partie 5](https://github.com/Youth-AI-Lab/yal-openwebui-guide#part-5---open-it-to-your-group).

### Partie 6 : Garder ses chatbots

Un Codespace n'est pas fait pour durer. `openwebui export` écrit un fichier `.zip` par chatbot dans le dossier `exports/` : les instructions (`instructions.md`), les documents (`knowledge/`), les autres réglages (`openwebui.json`) et un `README.md` qui explique comment le reconstruire. Les comptes et les conversations des participant·es n'y sont pas, volontairement. `openwebui import` reconstruit le chatbot dans un nouveau Codespace ; il accepte aussi le paquet produit par `chatbot-export` à la fin de la série d'ateliers, auquel il faut alors ajouter les sections **Sources** et **Never** d'un gabarit avant de l'ouvrir à des jeunes. Le même fichier sert à rebâtir le chatbot dans un Claude Project ou un Gemini Gem ; avant d'ouvrir un tel chatbot à des jeunes, lire les règles de cet outil sur les données et sur les mineurs. Point de vigilance : télécharger le fichier sur son ordinateur après chaque séance où un chatbot a changé, et toujours avant de supprimer un Codespace. Le guide signale aussi que Google passe les Gems des comptes personnels en lecture seule le 2026-11-17 et les supprime le 2026-12-17. [Lire la partie 6](https://github.com/Youth-AI-Lab/yal-openwebui-guide#part-6---keep-your-chatbots).

## Les gabarits d'instructions

Le dossier `templates/` du dépôt contient trois gabarits d'instructions, en anglais, et un exemple rempli de chacun dans `templates/examples/`, sur le fil rouge de la série (la prévention des feux de forêt, pour un groupe qui prépare un camp d'été). Les exemples sont à lire, pas à recopier tels quels. On peut écrire ses instructions dans sa propre langue.

| Gabarit              | Pour                                         | Ce que fait le chatbot                                                                                                   |
| -------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `topic-assistant.md` | un sujet travaillé avec le groupe            | explique, donne un exemple, renvoie au document                                                                          |
| `activity-guide.md`  | une activité pratique                        | trois niveaux d'aide : explique, puis renvoie aux documents, puis donne une petite étape ; jamais la réponse complète    |
| `project-coach.md`   | un projet que les jeunes réalisent eux-mêmes | les mêmes trois niveaux, mais le niveau 3 est un exemple sur un **autre** cas ; il ne fait jamais le projet à leur place |

Chaque gabarit suit les mêmes sections : **Purpose** (à quoi il sert), **Context** (le sujet et le public), **Tone and format** (le ton, la langue), **Sources** (répondre seulement à partir des documents, les citer, dire « I don't know »), puis **Scope** ou **Progressive help** selon le gabarit, **Never** (les limites) et **Example**. Le guide demande de garder **Sources** et **Never** dans tout chatbot : elles protègent le groupe. Les règles **Never** interdisent notamment de demander des informations personnelles. Quand un jeune dit qu'il va mal, qu'il est en danger ou qu'on lui fait du mal, ou que c'est le cas d'une autre personne, la sécurité passe avant cette règle : le chatbot répond avec bienveillance, oriente tout de suite vers l'animateur·rice ou un autre adulte de confiance (un adulte différent si c'est cet adulte qui pose problème) et vers le 112 en cas de danger immédiat, même si le jeune a promis le secret. Il dit qu'il est un programme et ne peut prévenir personne, ne demande aucun détail et ne promet pas le secret. Il ne donne ni quantité, ni dose, ni méthode qui puisse faire du mal, même si un document les contient. Une telle question reçoit le même traitement que le cas précédent. Si une question montre un risque immédiat pour le corps de quelqu'un, il dit de ne pas le faire et d'aller voir un adulte tout de suite, même si ses documents n'en parlent pas, sans expliquer davantage.

Un quatrième fichier, `participant-notice.md`, est la **notice d'information des participant·es** : ce qui est stocké, où, combien de temps, et qui peut le lire. Elle dit aussi que le chatbot ne peut prévenir personne et que personne ne lit les messages en direct : les personnes qu'elle nomme peuvent les lire plus tard, mais elle demande de ne pas compter dessus. Elle donne un contact qui n'est pas l'animateur·rice du groupe. Si quelqu'un de votre structure lit les messages pendant les séances, changer dans la notice la phrase sur la lecture en direct pour qu'elle reste vraie. La notice est à remplir, à faire relire par la personne chargée de la protection des données, et à traduire si besoin.

## Sécurité et protection des données

- **Demander l'accord de sa structure** : un chatbot utilisé avec des jeunes est une décision de la structure, pas de l'animateur·rice seul·e. Le guide renvoie au RGPD (articles 35 et 37) : un nouvel outil d'IA utilisé avec des jeunes demande souvent une analyse d'impact sur la protection des données. Remettre ensuite la notice aux participant·es.
- **Savoir où vont les données** : comptes, conversations, mémoires et documents restent dans Open WebUI, dans le Codespace, dans la région choisie. Chaque question, avec les passages de documents utiles, part chez Anthropic, aux États-Unis : les données quittent l'Union européenne. Pour un usage par clé d'API, Anthropic dit les supprimer sous 30 jours, avec des exceptions, et ne pas s'en servir pour entraîner ses modèles. Le guide donne les liens à transmettre à la personne chargée de la protection des données, vérifiés en octobre 2026.
- **Limiter ce que les jeunes peuvent faire** : `openwebui start` désactive l'envoi de fichiers et de photos, le micro, le partage de conversations et la modification des instructions (les boutons sont seulement grisés ou cachés : un·e participant·e à l'aise avec la technique pourrait passer outre). Un bandeau, en anglais, leur rappelle de ne pas écrire d'informations personnelles : le leur dire dans leur langue au début de la séance. Les jeunes peuvent encore faire lire une réponse à voix haute et télécharger une conversation. Leur demander de laisser vides la photo de profil, la bio, le genre et la date de naissance.
- **Couper la mémoire** quand l'activité n'en a pas besoin : elle est active par défaut dans chaque chatbot, y compris les nouveaux.
- **Qui lit quoi** : l'animateur·rice, en tant qu'administrateur·rice, peut lire les conversations ; les participant·es ne lisent pas celles des autres. Ne jamais donner le rôle d'administrateur·rice à un jeune.
- **Les moins de 18 ans** : leur dire qu'ils parlent à une IA et non à une personne, comme le demandent les règles d'Anthropic pour les structures dont les utilisateurs peuvent être mineurs et, depuis le 2 août 2026, l'article 50 du règlement européen sur l'IA. Le dire aussi au début de chaque séance. Demander à la personne chargée de la protection des données ce qu'il faut demander aux parents ou tuteurs : si l'on s'appuie sur le consentement, l'âge à partir duquel un jeune peut le donner seul pour un service en ligne varie selon les pays de l'Union européenne.
- **Un jeune confie quelque chose d'inquiétant** : le chatbot ne doit pas gérer la situation, et il dit qu'il est un programme qui ne peut prévenir personne. Vous suivez la procédure de protection de votre structure, et vous ne promettez jamais le secret. Avant la séance, choisir pour les jeunes un contact indépendant de l'animateur·rice du groupe, et l'écrire dans la notice.
- **Ne rien projeter de sensible** : à l'écran, seulement le terminal avec le lien et le QR code. Jamais le mot de passe (`openwebui password`), jamais l'**Admin Panel**, qui montre les conversations des participant·es.
- **À la fin du projet** : exporter les chatbots à garder, `openwebui reset` (qui efface comptes, conversations, mémoires et retours), puis supprimer le Codespace. Ce qui a été envoyé à Anthropic est supprimé selon son propre calendrier (voir plus haut), pas par ces commandes.

## Coûts

Chaque question de chaque participant·e est payée par votre clé, et Open WebUI n'a **aucune limite par participant·e** : le plafond de l'espace de travail est la seule vraie limite. Le guide conseille de commencer bas, puis de régler ce plafond d'après le coût réel de la première séance, lu dans la console d'Anthropic. Dans Open WebUI, le menu **Settings → Analytics** montre pour chaque compte les messages et les jetons, l'unité de texte que facture le fournisseur. Quand le plafond est atteint ou le crédit épuisé, tous les chatbots cessent de répondre. Avec un grand groupe, certaines réponses peuvent échouer pendant une minute, car le fournisseur limite le nombre de requêtes par minute et chaque question en fait plusieurs. [Lire la section Costs](https://github.com/Youth-AI-Lab/yal-openwebui-guide#costs).

## Limites

- **Les règles d'un chatbot ne sont pas un verrou** : elles réduisent le risque, mais une personne insistante peut parfois lui faire enfreindre une règle. Tester, et prévoir les activités en conséquence.
- **Un·e participant·e à l'aise avec la technique pourrait utiliser le modèle sans vos instructions**, à vos frais : une raison de plus pour un plafond bas.
- **Ne pas modifier les réglages de l'Admin Panel ni l'_Access_ d'un chatbot ou d'une base de connaissances** : la commande `openwebui` les réécrit à chaque démarrage et à chaque `share open` ou `share close`. `openwebui share open` donne chaque chatbot actif et ses documents à tous les comptes : les groupes d'utilisateurs et les chatbots privés ne tiennent pas. Pour choisir ce que voit un groupe, utiliser l'interrupteur de chaque chatbot.
- **Le Codespace n'est pas un serveur** : il s'arrête après son délai d'inactivité (4 heures au plus) et tourne 12 heures d'affilée au maximum.
- **Non testé** : le guide n'a pas encore servi avec un vrai groupe. L'usage par un groupe entier au même moment est « À compléter : pas encore mesuré ».

:::info[Notes pour l'animateur·rice]

- La section [Troubleshooting](https://github.com/Youth-AI-Lab/yal-openwebui-guide#troubleshooting) du guide couvre les cas courants : clé refusée, chatbots qui répondent par une erreur, mot de passe d'un·e participant·e oublié, demande de suppression de ses données (dans l'ordre : mémoires, retours, puis compte), lien qui ne s'ouvre pas, Codespace arrêté en pleine séance.
- La recherche d'Open WebUI marche mieux en anglais : posez les questions de test dans la langue des participant·es et vérifiez que le chatbot trouve encore le bon document.
- Pour montrer un chatbot au groupe, utiliser une fenêtre privée avec un compte de test, jamais votre compte d'administration.
- Pour aller plus loin sur ce qui entre dans un chatbot avant qu'il réponde, la série [Construire son propre chatbot](/ressources/youth-ai-lab/construire-chatbot-1-instructions) le montre atelier par atelier. Pour préparer vos séances, voir [Préparer ses séances avec un assistant qui se souvient](/ressources/youth-ai-lab/guide-hermes), un assistant pour vous seul·e, jamais à utiliser avec des jeunes ; pour travailler sans Codespace, [Ouvrir les ateliers sur son propre ordinateur](/ressources/youth-ai-lab/guide-dev-containers), qui ne sert pas à ouvrir un chatbot à un groupe.

:::

## Indicateurs de réussite

- Votre chatbot **se présente comme vous l'avez décrit** et ses réponses citent un document de sa base de connaissances
- Vos questions de test obtiennent surtout des 2, la question sans réponse obtient un « je ne sais pas », et les pièges échouent
- Le message inquiet reçoit une réponse bienveillante qui renvoie vers un adulte de confiance et dit que le chatbot ne peut prévenir personne, sans demander de détails ni promettre le secret
- Votre structure a donné son accord et les participant·es ont reçu la notice avant la première séance
- Les jeunes s'inscrivent et utilisent le chatbot pendant la séance, puis `openwebui share status` confirme que les inscriptions sont fermées et que le nombre de comptes est celui attendu
- Chaque chatbot existe en fichier `.zip` sur votre ordinateur

---

_Cette fiche fait partie du projet [Youth AI Lab](/projets/youth-ai-lab), financé par le programme Erasmus+. Adaptation française de https://github.com/Youth-AI-Lab/yal-openwebui-guide (anglais), contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._

---
id: ia-securite
title: "L'IA peut-elle être un outil de sécurité sans faille ?"
sidebar_label: "IA et sécurité"
sidebar_position: 17
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><path d="M12 2 L20 5 V12 C20 17 16 20 12 22 C8 20 4 17 4 12 V5 Z" fill="#1a4a48" opacity="0.1"/><path d="M12 4 L18 6.5 V12 C18 16 14.5 18.5 12 20 C9.5 18.5 6 16 6 12 V6.5 Z" fill="#1a4a48" opacity="0.25"/><rect x="9" y="10" width="6" height="5" rx="0.5" fill="#1a4a48" opacity="1.0"/><path d="M10 10 V8.5 A2 2 0 0 1 14 8.5 V10" fill="none" stroke="#1a4a48" strokeWidth="1.2" opacity="1.0"/><circle cx="12" cy="12.5" r="0.7" fill="#fff"/></svg> L'IA peut-elle être un outil de sécurité sans faille ?

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Intelligence artificielle</span>
  <span className="badge badge--primary">Électronique</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--info">Solénoïde</span>
  <span className="badge badge--secondary">Teachable Machine</span>
  <span className="badge badge--secondary">Adacraft</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| The Dexter Lab | 4-6 heures | Avancé | 14-18 ans |

**Problématique :** Comment détecter des visages ?

## Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 1 solénoïde
- 1 transistor NPN
- 1 diode de roue libre
- 1 alimentation 12V (ou adaptée au solénoïde)
- 1 ensemble de câbles de connexion
- 1 breadboard
- 1 tablette Android
- 1 caméra (si non intégrée à la tablette)
- 1 boîtier pour la serrure
- 1 set d'outils de montage : tournevis, pinces, etc.

<a href="/pdf/thedexterlab/PR17-TDL_Feuille_Travail_Vierge_A3.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger la feuille de travail</a>

</div>

</div>

---

:::info
L'Intelligence Artificielle (IA) représente un domaine passionnant de la technologie qui vise à créer des machines capables d'imiter l'intelligence humaine. L'un des concepts clés de l'IA est l'apprentissage automatique (Machine Learning), qui est une technique permettant aux machines d'apprendre et de s'adapter à partir de données et d'expériences.

Dans ce protocole, nous allons explorer deux outils particuliers liés à l'IA et à l'apprentissage automatique :

1. **Teachable Machine** : une plateforme en ligne qui permet à quiconque de créer des modèles d'apprentissage automatique sans avoir besoin de compétences en codage. Elle sera utilisée pour entraîner un modèle de reconnaissance d'image afin de reconnaître un dessin spécifique.
2. **Adacraft** : un outil qui permet de programmer et de contrôler des appareils électroniques tels que des serrures électroniques, des moteurs, etc. Il sera utilisé pour intégrer le modèle IA et implémenter le système de serrure.

Le projet implique la création d'un système de sécurité pour une maison qui utilise l'IA pour reconnaître un dessin à la main préalablement défini comme clé d'une serrure électronique.
:::

## Déroulé de l'activité

Le projet consiste à créer un système de sécurité pour une maison qui utilise l'Intelligence Artificielle (IA) pour reconnaître un dessin à la main préalablement défini comme clé d'une serrure électronique. Les élèves utiliseront Teachable Machine pour former un modèle de reconnaissance d'image et Adacraft pour implémenter la serrure électronique.

La question de la fiabilité des dispositifs est importante quand on parle de sécurité.

Peut-on s'assurer qu'un tel système sera fiable assez pour qu'on puisse lui faire confiance ?

## Compétences mobilisées

1. **Pensée critique et résolution de problèmes** : évaluer des problèmes, concevoir des solutions, et réfléchir aux implications éthiques et pratiques.
2. **Compétences en programmation et technologie** : utilisation d'outils comme Teachable Machine et Adacraft pour programmer et construire des systèmes.
3. **Collaboration et communication** : travailler en équipe, partager des idées et présenter des conclusions.
4. **Compréhension des concepts mathématiques et scientifiques** : appliquer les principes de la physique, des mathématiques et de la technologie dans la conception.
5. **Créativité et innovation** : concevoir des solutions créatives et innovantes à des défis technologiques.
6. **Citoyenneté numérique** : réfléchir aux implications sociales, éthiques et de sécurité de l'utilisation de la technologie.

## Étape 1 : comprendre la serrure électronique

### Orientation

Le système de sécurité doit restreindre l'accès à une maison uniquement aux personnes autorisées. Pour restreindre l'accès à un édifice, on utilise un dispositif comme une serrure munie d'une clef personnelle pour l'activer. Dans notre système, la serrure devra être utilisable avec une carte programmable pour s'interfacer avec un système d'IA.

Questions à explorer :

- Comment l'IA peut-elle être utilisée pour améliorer les systèmes de sécurité ?
- Quels sont les avantages et inconvénients des serrures électroniques ?

Dans notre système, pour des raisons réglementaires, nous utiliserons des dessins à la place des visages. Ce choix est aussi une bonne opportunité pour faire réfléchir à l'importance des données biométriques dans une société démocratique numérique.

### Conceptualisation

Une serrure électronique est un mécanisme de verrouillage qui utilise l'électricité pour activer ou désactiver le verrou, plutôt que d'utiliser une clé physique. Elles sont souvent contrôlées par un système électronique qui peut être programmé pour permettre ou refuser l'accès en fonction de divers critères : reconnaissance faciale, empreinte digitale, code PIN, carte RFID, ou même reconnaissance de dessins à travers une IA.

**Composants d'une serrure électronique :**

1. **Interface utilisateur** : la partie du système avec laquelle l'utilisateur interagit pour demander l'accès.
2. **Module de reconnaissance ou de vérification** : utilise un algorithme pour déterminer si l'accès doit être accordé ou refusé.
3. **Unité de commande** : envoie un signal électrique au mécanisme de verrouillage (souvent un microcontrôleur comme le STM32).
4. **Mécanisme de verrouillage** : un dispositif électromécanique, comme un solénoïde, qui déplace le verrou.
5. **Alimentation électrique** : batteries ou alimentation branchée sur le réseau.
6. **Système de sécurité** (optionnel) : alarmes ou notifications en cas de tentative d'accès non autorisé.

**IA et sécurité**

L'intelligence artificielle a révolutionné de nombreux domaines, et le secteur de la sécurité n'est pas en reste. Des algorithmes d'apprentissage automatique peuvent être formés pour reconnaître des visages, des empreintes digitales ou d'autres marqueurs biométriques. Toutefois, l'IA n'est pas infaillible : elle peut parfois donner des faux positifs ou être trompée de diverses manières. Les questions de vie privée et de discrimination (biais dans les algorithmes) doivent être adressées.

### Investigation

Pour l'investigation, partir sur une recherche documentaire :

- Lecture et discussion d'articles et de vidéos sur les serrures électroniques et l'IA.
- Comparaison avec les serrures traditionnelles.

Dans une seconde étape, créer une réflexion construite sur l'objet technique "serrure électronique" :

- Créer un schéma d'une serrure électronique et expliquer son fonctionnement.
- Discussion sur l'intégration de l'IA et les considérations éthiques et de sécurité.

Enfin, expérimentation :

- Utiliser MakeCode pour simuler une serrure électronique simple.
- Réalisation physique : schéma, installation du solénoïde via un transistor NPN, ajout d'une diode de roue libre en parallèle, connexion d'un bouton-poussoir à un GPIO, programmation, validation, débogage, évaluation.

### Débriefing

Cette étape offre une opportunité pratique pour les élèves d'apprendre les bases de l'électronique et de la programmation, tout en mettant en œuvre une application réelle de la technologie. Si les élèves ne sont pas encore capables de comprendre l'électronique de contrôle du solénoïde, il est possible de simuler la serrure avec un simple servomoteur qui actionnera un loquet.

## Étape 2 : création et entraînement du modèle IA avec Teachable Machine

### Orientation

Nous allons nous intéresser à ce que l'IA peut apporter à notre système et donc plus particulièrement à la reconnaissance d'image et à l'apprentissage automatique.

Questions :

- Quels sont les principes de base de la reconnaissance d'image par IA ?
- Comment peut-on créer et former un modèle pour reconnaître un dessin spécifique ?

### Conceptualisation

La reconnaissance d'image par intelligence artificielle est une branche du domaine plus large du machine learning. Le but est d'enseigner aux machines à "voir" et à interpréter des images et des vidéos.

**Types de tâches en reconnaissance d'image :**

- Classification d'images
- Détection d'objets
- Segmentation
- Reconnaissance de formes ou de traits particuliers

**Principes de base :**

1. **Collecte de données** : constitution d'un jeu de données d'entraînement étiqueté.
2. **Prétraitement des données** : redimensionnement, normalisation, augmentation.
3. **Extraction de caractéristiques** : identification des bords, textures, couleurs.
4. **Entraînement du modèle** : apprentissage à partir du jeu de données.
5. **Évaluation** : test du modèle sur un nouveau jeu de données.
6. **Inférence** : utilisation du modèle pour classifier de nouvelles images.

Pour améliorer le modèle, il faudra lui fournir un jeu d'essai qui lui permettra d'apprendre à distinguer l'objet à identifier. La création du jeu d'essai est l'élément central. On commence généralement par une précision d'au moins 90 % pour considérer que le système est fonctionnel.

### Investigation

Tâches avec Teachable Machine :

1. **Préparation des données** : rassembler plusieurs instances du dessin "clé" et d'autres types de dessins pour les données négatives. Numériser.
2. **Teachable Machine** :
    - Accédez à [Teachable Machine](https://teachablemachine.withgoogle.com/)
    - Cliquez sur "Get Started" puis "Image Project"
    - Créez deux classes : une pour le dessin "clé" et une pour les "autres"
    - Téléchargez les images correspondantes
    - Cliquez sur "Train Model"
    - Testez le modèle avec la webcam ou de nouvelles images
    - Exportez le modèle (format TensorFlow.js conseillé)
3. **Intégration dans le système de la serrure** : utiliser le modèle pour activer le mécanisme de déverrouillage quand le dessin "clé" est reconnu.

La recherche d'une meilleure précision par les élèves est une première opportunité de découvrir les limites de l'IA en montrant des exemples de surapprentissage.

### Débriefing

L'exercice d'intégrer une IA dans un système de serrure électronique a été à la fois éducatif et innovant. Les élèves ont pu :

- Se familiariser avec les concepts fondamentaux du machine learning
- Comprendre comment les techniques d'IA sont actuellement appliquées dans le domaine de la sécurité
- Faire face à des défis liés à l'intégration du modèle d'IA dans un système réel
- Découvrir des scénarios où l'IA pourrait échouer
- Développer des compétences en planification, travail en équipe et gestion de ressources

## Étape 3 : implémentation du système avec Adacraft

### Orientation

L'objet de cette étape est de relier les deux systèmes précédents pour être capable de déverrouiller la serrure électronique avec le bon dessin.

Questions :

- Comment traduire le dessin reconnu en une action pour déverrouiller la serrure ?
- Comment intégrer le modèle IA dans Adacraft et le connecter à une serrure électronique ?

### Conceptualisation

Étapes du processus :

**Analyse du dessin avec le modèle IA :**

1. Capture de l'image avec la tablette Android
2. Traitement de l'image par le modèle IA dans Adacraft

**Interprétation des résultats de l'IA :**

1. Récupération de la classe attribuée à l'image
2. Transmission de la décision à la carte STM32

**Exécution de l'action avec la carte STM32 :**

1. Réception du signal
2. Déclenchement de l'action (activation du solénoïde)
3. Confirmation

**Sécurités et protocoles :** délai avant verrouillage automatique, double authentification possible (code PIN).

### Investigation

**Liste des tâches :**

1. **Importation du modèle IA dans Adacraft**
2. **Connexion de la carte STM32**
3. **Configuration de l'interface utilisateur** sur tablette Android
4. **Interaction avec le modèle IA** : programmation des blocs de code
5. **Configuration de la carte STM32 et du solénoïde** : inclure un transistor et une diode de protection
6. **Test du système**
7. **Évaluation des limites**

### Débriefing

Ce projet illustre non seulement l'application de l'IA dans la vie quotidienne, mais il est également une excellente opportunité éducative pour les élèves d'apprendre une gamme de compétences en STEM.

## Étape 4 : évaluation des limites et cas anormaux

### Orientation

Quand on parle d'IA ou de Machine Learning, il est important de bien cerner les limites de ces systèmes pour sortir du fantasme de la machine intelligente. Les IA sont une construction humaine et, si on ne fait pas attention, elles peuvent intégrer des biais ou des erreurs liées à leur concepteur.

Questions :

- Quels sont les scénarios où le système pourrait échouer ?
- Comment peut-on améliorer la robustesse et la sécurité du système ?

### Conceptualisation

**Scénarios potentiels d'échec :**

1. **Fausses reconnaissances (faux positifs)** : le modèle IA pourrait mal interpréter un dessin autre que la "clé" comme étant correct.
2. **Non-reconnaissance (faux négatifs)** : le modèle pourrait échouer à reconnaître le dessin correct si légèrement différent.
3. **Surapprentissage (overfitting)** : si le modèle a été formé avec un ensemble de données trop limité, il pourrait échouer à généraliser.
4. **Vulnérabilité aux attaques adversariales** : des attaquants pourraient manipuler le dessin d'une manière qui trompe spécifiquement le modèle.
5. **Mauvaise interprétabilité** : nature "boîte noire" des modèles d'IA.
6. **Dérive des données (drift)** : changements dans l'environnement pouvant entraîner un décalage par rapport au modèle initial.
7. **Échec de mise à jour du modèle**.

### Investigation

Recherche documentaire et réflexion sur les limites de l'IA :

- Analyser différentes méthodes pour tromper le système.
- Réfléchir aux problèmes de sécurité et de confidentialité.
- Planifier des tests spécifiques pour évaluer les limites.

**Expérimentations :**

1. **Faux positifs et faux négatifs** : créer plusieurs versions du dessin "clé" avec de légères variations, tester et analyser.
2. **Attaques adversariales** : imaginer des modifications qui pourraient tromper le système, les tester, discuter des moyens de rendre le système plus robuste.
3. **Évaluation et réflexion** : identifier les vulnérabilités, proposer des améliorations, discuter des implications éthiques et de sécurité.

### Débriefing

Ce protocole détaillé offre une exploration approfondie de la technologie moderne, de la programmation, de la reconnaissance d'image et de l'éthique dans la technologie. Il encourage également une réflexion critique sur la conception et l'implémentation de systèmes sécurisés.

---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

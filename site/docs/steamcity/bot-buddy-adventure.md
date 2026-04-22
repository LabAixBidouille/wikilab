---
id: bot-buddy-adventure
title: "Bot Buddy Adventure : concevoir un chatbot pour une meilleure accessibilité urbaine"
sidebar_label: "Bot Buddy Adventure"
sidebar_position: 20
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="4" y="4" width="16" height="12" rx="3" fill="#DD5350" opacity="0.1"/><rect x="6" y="6" width="12" height="8" rx="2" fill="#DD5350" opacity="0.25"/><circle cx="9" cy="10" r="1.5" fill="#DD5350" opacity="1.0"/><circle cx="15" cy="10" r="1.5" fill="#DD5350" opacity="1.0"/><path d="M9 19 L12 16 L15 19" stroke="#DD5350" strokeWidth="1.5" fill="none" opacity="1.0"/></svg> Bot Buddy Adventure : concevoir un chatbot pour une meilleure accessibilité urbaine

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Technologie et ingénierie</span>
  <span className="badge badge--primary">Art et design</span>
  <span className="badge badge--primary">Physique et chimie</span>
  <span className="badge badge--info">Intelligence artificielle et nouvelles technologies</span>
  <span className="badge badge--secondary">Engagement citoyen, gouvernance et données</span>
</div>

| Projet | Durée | Difficulté |
|---|---|---|
| SteamCity | 4 séances de 30 à 60 minutes | Modéré |

## Matériel

- Ordinateur et appareil mobile (smartphone)
- Accès à [CodeSkool](https://ide.codeskool.cc/)

**Ressources en ligne :**
- Introduction au prompting : [https://www.youtube.com/watch?v=8IQ9i\_QoA3A](https://www.youtube.com/watch?v=8IQ9i_QoA3A)
- Introduction aux modèles de langage : [https://youtu.be/K8gOvC8gvB4](https://youtu.be/K8gOvC8gvB4)

<a href="/pdf/steamcity/Protocol_BotBuddyAdventure_FR.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#DD5350', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger en PDF</a>

</div>

</div>

---

## Introduction

Un agent conversationnel, souvent appelé chatbot ou assistant virtuel, est un programme informatique conçu pour engager des conversations en langage naturel avec les utilisateurs. Il utilise divers algorithmes et techniques de traitement du langage pour comprendre et répondre aux requêtes des utilisateurs.

Dans ce protocole « Bot Buddy Adventure », les élèves exploreront le développement d'un agent conversationnel en identifiant et en implémentant les fonctionnalités techniques clés. Ils apprendront à utiliser la reconnaissance vocale pour convertir la voix en texte, à exploiter le traitement du langage naturel pour comprendre l'intention de l'utilisateur, et à mettre en œuvre la synthèse vocale pour la génération de réponses.

Les solutions d'IA pour les défis urbains visent à rendre les villes plus intelligentes et accessibles. Le protocole guide les élèves dans la création d'un agent conversationnel utilisant GPS, reconnaissance vocale et IA pour faciliter l'accès aux services essentiels, aux transports publics et aux ressources communautaires.

### Structure du protocole

1. **Étape 1 — Fondamentaux du système et précision :** Compréhension des limites de précision des technologies centrales (géolocalisation et reconnaissance vocale) à travers des tests comparatifs.
2. **Étape 2 — Collecte de données et gestion de l'information :** Implémentation d'un premier prototype fonctionnel qui capture coordonnées GPS et entrées vocales.
3. **Étape 3 — Traitement des données dans un système basé sur l'IA :** Exploration des modèles de langage et de l'ingénierie des prompts pour transformer les données brutes en informations significatives.
4. **Étape 4 — Diffusion d'informations accessibles aux utilisateurs finaux :** Implémentation des capacités de synthèse vocale et conception conversationnelle.

## Glossaire

| Terme | Définition |
|---|---|
| Agent conversationnel | Programme logiciel robotisé qui utilise une base de données pour communiquer avec un humain en langage naturel. |
| Analyse sémantique | Technologie permettant aux ordinateurs d'interpréter le contexte correct des mots ou expressions ayant plusieurs significations. |
| Traitement du langage naturel | Domaine multidisciplinaire impliquant la linguistique, l'informatique et l'intelligence artificielle, visant à créer des outils capables d'interpréter et de synthétiser du texte. |
| Modèle de langage | Système d'IA entraîné sur de grandes quantités de données textuelles pour comprendre et générer un langage similaire à celui des humains. |
| Ingénierie des prompts | Pratique consistant à élaborer des instructions d'entrée efficaces pour les modèles de langage afin d'obtenir les résultats souhaités. |
| Synthèse vocale | Technologie qui convertit le texte écrit en mots parlés, utilisant l'intelligence artificielle pour générer une parole au son naturel. |

---

## Étape 1 : Fondamentaux du système et précision

**Contexte :** Les élèves analyseront les limites de précision des systèmes de positionnement géographique et de reconnaissance vocale afin de concevoir une expérience accessible et performante.

**Objectifs d'apprentissage :** Comprendre les fondamentaux de la géolocalisation et du GPS. Évaluer la fiabilité des solutions de reconnaissance vocale dans différents environnements.

### Conceptualisation

Les élèves explorent les fondements des services géolocalisés et des interfaces vocales, les mécanismes d'entrée essentiels pour un assistant de navigation urbaine accessible.

### Investigation par les élèves

**Explorer les capacités du GPS :** Les élèves testent plusieurs solutions GPS pour comprendre les capacités et les limites des services de localisation. Ils accèdent au GPS intégré de leur appareil via leur application de cartes, enregistrent leurs coordonnées et comparent les résultats entre différents appareils.

**Explorer les limites de la reconnaissance vocale :** Les élèves créent un ensemble de phrases de test liées à la navigation urbaine et expérimentent avec différentes conditions d'élocution : parler clairement versus naturellement, différentes distances du microphone, avec et sans bruit de fond.

### Restitution et réflexion

Les élèves ont établi les bases de leur agent conversationnel en analysant la précision et les limites des technologies GPS et de reconnaissance vocale. Ils ont découvert que la précision géographique varie selon les appareils et l'environnement, et que des facteurs comme les matériaux de construction affectent la fiabilité.

---

## Étape 2 : Collecte de données et gestion de l'information

**Contexte :** Les élèves vont implémenter un système de base pour collecter les coordonnées GPS et les entrées vocales, en appliquant leurs connaissances des limitations identifiées à l'étape 1.

**Objectifs d'apprentissage :** Implémenter une fonctionnalité GPS de base. Créer une interface de reconnaissance vocale. Comprendre les types de variables et leur rôle dans le stockage d'informations.

### Conceptualisation

Les élèves passent de la compréhension à l'implémentation, créant un prototype fonctionnel qui collecte les deux entrées fondamentales de leur agent conversationnel. Les variables agissent comme la « mémoire » du programme.

### Investigation par les élèves

**Stocker les informations GPS à l'aide de variables :** Dans CodeSkool, les élèves créent des variables « Latitude » et « Longitude », ajoutent l'extension « Phone sensors » et connectent les blocs GPS aux variables.

**Implémenter la reconnaissance vocale :** Les élèves ajoutent l'extension « Speech to Text » et utilisent le bloc « Écouter et attendre » pour capturer les entrées vocales.

### Restitution et réflexion

Les élèves sont passés de la compréhension à la mise en pratique, créant un prototype fonctionnel qui collecte les deux entrées fondamentales : données de localisation et requêtes vocales. Ils ont appris à accéder aux capteurs via les extensions de CodeSkool et à stocker les informations dans des variables.

---

## Étape 3 : Traitement des données dans un système basé sur l'IA

**Contexte :** Les élèves font face au défi de transformer les données brutes (coordonnées et requêtes vocales) en réponses significatives en utilisant les modèles de langage.

**Objectifs d'apprentissage :** Comprendre les principes fondamentaux des modèles de langage. Apprendre les bases de l'ingénierie des prompts. Développer des compétences pour intégrer géolocalisation et requêtes utilisateur dans des prompts bien structurés.

### Conceptualisation

Les élèves explorent comment l'intelligence artificielle peut transformer les données brutes en informations significatives et contextuelles. Le modèle de langage devient le « cerveau » qui traitera les entrées et générera des réponses appropriées.

### Investigation par les élèves

**Première intégration d'IA — Conversion de localisation en ville :** Les élèves créent une variable « Prompt\_Location » utilisant des blocs de jointure imbriqués pour combiner texte et variables : « Dis-moi en un mot quelle ville se trouve à la latitude \[variable Latitude\] et longitude \[variable Longitude\] ».

Ils ajoutent l'extension « Open AI » et testent leur prompt, puis l'affinent pour obtenir des réponses plus précises. Ce processus itératif démontre un principe important de l'ingénierie des prompts : être spécifique à la fois sur l'information demandée et le format de réponse désiré.

### Restitution et réflexion

Les élèves ont appris à transformer des coordonnées brutes en noms de lieux significatifs grâce aux modèles de langage, développant des compétences pratiques en ingénierie des prompts et comprenant que différentes formulations produisent des résultats radicalement différents.

---

## Étape 4 : Diffusion d'informations accessibles aux utilisateurs finaux

**Contexte :** Les élèves complètent leur agent conversationnel en implémentant les capacités de synthèse vocale et en concevant des flux de conversation structurés.

**Objectifs d'apprentissage :** Comprendre les principes fondamentaux de la synthèse vocale. Apprendre à implémenter la fonctionnalité TTS dans CodeSkool. Créer un agent conversationnel complet qui collecte, traite et diffuse les informations à travers la parole naturelle.

### Conceptualisation

Les élèves complètent leur agent conversationnel en ajoutant des capacités de sortie vocale et des prompts supplémentaires, transformant leur assistant en une application entièrement interactive vocalement.

### Investigation par les élèves

**Créer un agent conversationnel activé par la voix :** Les élèves ajoutent les extensions « Text to speech » et « Synthèse vocale », configurent une phrase déclencheur (par exemple « Bonjour Buddy ») et ajustent les paramètres vocaux (vitesse et type de voix).

**Concevoir des flux de conversation avec des prompts :** Les élèves créent des variables pour différents prompts d'IA (activités à proximité, informations historiques) et implémentent un arbre de dialogue simple qui répond aux entrées vocales.

Exemple complet disponible : [https://share.codeskool.cc/cqZu](https://share.codeskool.cc/cqZu)

### Restitution et réflexion

Les élèves ont créé un agent conversationnel interactif vocalement, intégrant la reconnaissance vocale et la synthèse vocale. Ils comprennent comment la technologie peut améliorer l'accessibilité et fournir des services géolocalisés.

---

## Inspirations du monde réel

### Be My Eyes — Assistance visuelle renforcée par l'IA

Be My Eyes a intégré un assistant d'IA alimenté par GPT-4 qui peut décrire des images et fournir une assistance visuelle immédiate aux personnes malvoyantes. [https://www.bemyeyes.com](https://www.bemyeyes.com)

### NaviLens — Système de navigation par codes couleur

NaviLens utilise des codes colorés détectables à des distances allant jusqu'à 12 mètres, combinés à une interface vocale, pour aider les personnes malvoyantes à naviguer de manière autonome dans les environnements urbains. [https://www.navilens.com](https://www.navilens.com)

---

*Cette fiche fait partie du projet [SteamCity](/projets/steamcity), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

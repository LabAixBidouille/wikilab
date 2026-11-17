---
id: binary-counting
title: Compter en binaire
sidebar_label: "Compter en binaire"
sidebar_position: 2
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Compter en binaire

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Mathématiques</span>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--info">Activité débranchée</span>
  <span className="badge badge--secondary">Aucun logiciel</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| Unplugged | 30 - 45 min | Intermédiaire | 8 - 12 ans |

## Matériel

- Crayons, ciseaux
- Grandes cartes binaires (imprimables)
- Petites cartes binaires (imprimables)
- Feuilles de travail (imprimables)

<PdfLink href="/pdf/unplugged/Unplugged_Binary_Counting_FR.pdf">Télécharger en PDF</PdfLink>

<div style={{marginTop: "1.5rem"}}/>

:::tip[**Ressources imprimables incluses dans le PDF.**]

- Grandes cartes binaires
- Petites cartes binaires
- Feuilles d'activité (Facile, Intermédiaire, Difficile) incluant conversions binaire/décimal, tableau alphabet/nombres et exercices de traduction

:::

</div>

<img src="/img/ressources/unplugged/binary-counting/icone.png" alt="Comptage binaire" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Dans le défi du comptage binaire, les enfants apprendront à compter comme un ordinateur, avec le système de nombres binaires. C'est un système de base 2 : on y compte uniquement avec les chiffres 0 et 1. Toute personne impliquée dans l'informatique, le codage et les réseaux a besoin de comprendre les nombres binaires, le système binaire et la conversion entre le binaire et le décimal. Les enfants apprendront aussi à former des mots avec des chiffres binaires.

---

## Intérêt pédagogique et sujets ciblés

### Aborder la programmation

Savoir programmer est devenu une compétence importante, car la société s'automatise et se numérise de plus en plus. La programmation prépare les enfants à obtenir des compétences qu'ils pourront utiliser lorsqu'ils seront adultes. Les compétences qui peuvent être acquises par la programmation :

- Pensée créative et logique
- Conscience spatiale
- Capacité à résoudre des problèmes
- Structurer
- Collaborer

### Découvrez le système binaire

Les ordinateurs stockent en binaire les informations de toutes sortes. Comprendre le système binaire lève une grande partie du mystère qui entoure les ordinateurs : à la base, ce ne sont que des machines mathématiques qui fonctionnent avec des informations numériques, soit éteintes, soit allumées. Le système numérique binaire représente ces informations avec les seuls chiffres 0 et 1, appelés bits en informatique : 0 = désactivé et 1 = activé. Les ordinateurs peuvent ainsi utiliser une série de "commutateurs" pour prendre des décisions sur la base d'une série de décisions logiques (c'est ce qu'est un programme informatique ou "code").

Le système numérique binaire est une façon de compter en utilisant seulement deux chiffres, 0 et 1. En binaire, la valeur de place de chaque chiffre est deux fois plus élevée que celle du chiffre suivant à droite (puisque chaque chiffre contient deux valeurs). En décimal (le système que les humains utilisent normalement de nos jours), chaque chiffre contient dix valeurs, et la valeur de place augmente par une puissance de dix (un, dix, cent, etc.). La valeur de place du chiffre le plus à droite, dans les deux cas, est 1.

### Comprendre les nombres et les calculs

Les nombres et les calculs sont très importants dans la vie quotidienne. Lorsque les enfants utilisent les mathématiques, ils se familiarisent avec les propriétés des nombres et la façon de les calculer. Les utiliser de manière active stimule les sens et la mobilité. Cela développe aussi la capacité à résoudre des problèmes et la résilience, ce qui améliore les performances physiques. La résolution de problèmes mathématiques requiert des compétences relationnelles, mais elle augmente également la confiance en soi, stimule la pensée abstraite et aide à développer des attitudes.

### Raisonnement

Le raisonnement est la capacité à résoudre des problèmes. Savoir raisonner permet d'utiliser des connaissances pour comprendre le monde. Lorsqu'un enfant apprend à raisonner et à argumenter, cela améliore son comportement et ses capacités de communication. Il aura sa propre opinion et tirera ses propres conclusions de certaines situations. Cela accélère le développement cognitif et émotionnel.

---

## Règles du jeu

**Récit du jeu :** Dans ce jeu, les enfants apprendront à compter comme un ordinateur. Ils apprendront la différence entre le système numérique binaire et le système numérique décimal. Le décimal utilise 10 chiffres, de 0 à 9. Le binaire, en base 2, ne compte qu'avec 0 et 1 : le chiffre qui a la valeur la plus faible s'écrit à droite, celui qui a la valeur la plus élevée à gauche. Les chiffres 0 et 1 peuvent être comparés à oui ou non, vrai ou faux, allumé ou éteint, ce qui est très utile en électronique et en informatique puisqu'ils peuvent soit conduire (1) un signal électrique, soit ne pas le conduire (0). Les enfants apprendront à convertir les nombres binaires en décimaux et vice versa. Ils essaieront aussi de fabriquer des mots à partir de nombres binaires et de traduire des nombres binaires en mots : pour cela, ils transcriront des nombres et chercheront à quelle lettre ils correspondent dans un tableau alphabétique. Ils comprendront ainsi comment un ordinateur compte et enregistre des données.

### Comment convertir des nombres décimaux en nombres binaires

Pour convertir un nombre décimal en nombre binaire, on le divise plusieurs fois par 2 et on note les restes, jusqu'à obtenir 0 comme quotient final. Les étapes :

1. Divisez le nombre décimal donné par 2 et notez le reste.
2. Divisez le quotient obtenu par 2, et notez à nouveau le reste.
3. Répétez les étapes ci-dessus jusqu'à ce que vous obteniez 0 comme quotient.
4. Écrivez les restes de manière à ce que le dernier reste soit écrit en premier, suivi du reste dans l'ordre inverse.
5. On peut aussi comprendre d'une autre manière que le bit le moins significatif (LSB) du nombre binaire est en haut et que le bit le plus significatif (MSB) est en bas. Ce nombre est la valeur binaire du nombre décimal donné.

Exemple : convertir le nombre décimal 13 en binaire. Diviser 13 par 2 à plusieurs reprises jusqu'à obtenir le quotient 0, en notant les restes dans l'ordre. Écrire ensuite ces restes de manière à ce que le bit le plus significatif (MSB) du nombre binaire soit écrit en premier, suivi du reste. L'équivalent binaire du nombre décimal 13 est donc 1101.

### Règles du jeu

- 6 enfants vont s'avancer. Chacun d'entre eux doit tenir une grande carte binaire.
- Laissez les enfants s'avancer à tour de rôle.
- Essayez de transformer les nombres décimaux en nombres binaires.
- Résoudre les fiches de travail individuellement.

### Rôle de l'enseignant et organisation du jeu

- Expliquer les règles du jeu
- Distribuer les grandes cartes binaires à 6 enfants
- Choisir au hasard les nombres que les enfants doivent faire avec les cartes binaires et recommencez plusieurs fois
- Distribuer les petites cartes binaires à la classe
- Distribuer les fiches de travail
- Corriger les fiches de travail

---

## Phases de jeu

### Phase 1 - Travail classique

Avant de commencer l'activité, l'enseignant ouvre une discussion sur les nombres, en posant des questions telles que :

- Pourquoi transformons-nous les nombres sous forme binaire ?
- Pourquoi les ordinateurs travaillent-ils avec des nombres binaires ? Pourquoi est-ce plus utile ?
- Quels autres exemples de la vie réelle pouvons-nous trouver sous forme binaire ? (Faire le lien avec les applications du monde réel est très important, car les filles pourraient se sentir détachées de cette activité si elle devenait trop théorique.)

L'enseignant choisit 6 enfants de la classe pour s'avancer. Ces enfants reçoivent chacun une grande carte binaire qu'ils tiennent devant eux. Les autres enfants restent à leur place.

L'enseignant choisit un nombre inférieur à 5. Les 6 enfants qui se présentent doivent additionner les nombres inscrits sur les grandes cartes. La somme doit être le nombre choisi par l'enseignant. Les bons chiffres sont maintenant rendus à la classe. Les autres cartes sont retournées de l'autre côté de façon à ce qu'une page blanche soit visible. La page blanche signifie en langage binaire/ordinateur "0" et les chiffres signifient "1" en langage binaire/ordinateur. De cette manière, les enfants ont rendu binaire un nombre décimal. L'enseignant écrit la réponse au tableau. L'enseignant choisit ensuite un nombre inférieur à 10 et les autres étapes sont répétées. Chaque groupe de 6 enfants peut essayer plusieurs fois. Ensuite, les nombres deviennent plus grands et d'autres enfants se présentent. Après avoir pratiqué plusieurs fois, c'est le moment du travail individuel.

### Phase 2 - Travail individuel

Tous les enfants reçoivent des petites cartes binaires et doivent prendre un crayon pour résoudre 3 fiches de travail (super facile, facile, difficile) qu'ils reçoivent de l'enseignant. Ils doivent résoudre ces devoirs individuellement.

Dans ces feuilles de travail, ils doivent changer les nombres de binaire en décimal et vice-versa. Ils peuvent également essayer d'écrire des mots ou des noms en binaire, ou de traduire le code binaire en mots. Ils peuvent utiliser les petites cartes binaires pour les placer sur les feuilles de travail, ce qui les aidera à résoudre les exercices. Ils auront également un tableau avec l'alphabet lié aux nombres pour pouvoir convertir les mots également. Lorsqu'un enfant a terminé le premier exercice, l'enseignant vérifie la feuille de travail et en donne une autre. La première feuille de travail est facile, mais elle devient progressivement plus difficile.

<img src="/img/ressources/unplugged/binary-counting/exemplefichecomptage.png" alt="Exemple de fiche de comptage binaire" style={{maxWidth: '500px', marginTop: '1rem', marginBottom: '1rem'}} />

---

## Aller plus loin

### Sujet 1 - Apprendre le système numérique binaire

- https://kids.kiddle.co/Binary_number
- https://web.archive.org/web/20230329123401/https://info.thinkfun.com/stem-education/6-unplugged-coding-activities-for-hour-of-code (archive.org 2023-03)
- https://teachyourkidscode.com/learn-binary-numbers/
- https://blogs.glowscotland.org.uk/glowblogs/computingscience/2021/08/06/binary-understanding-how-computers-work-and-challenge-in-numeracy/
- https://classic.csunplugged.org/activities/binary-numbers/

### Sujet 2 - Nombres et calculs

Vous trouverez ici des documents utiles pour introduire la conversion des nombres binaires en décimaux et vice versa :

- https://www.ducksters.com/kidsmath/binary_numbers_basics.php
- Pour convertir des nombres binaires en mots : https://www.sciencefriday.com/educational-resources/write-your-name-in-binary-code/
- Convertir un texte en code binaire : https://study.com/learn/lesson/kinesthetic-intelligence-skills.html
- Apprenez à convertir un texte en code binaire : https://www.sciencefriday.com/educational-resources/write-your-name-in-binary-code/

### Sujet 3 - Raison

Voir les énigmes binaires pour enseigner le raisonnement de manière amusante : https://www.sciencekiddo.com/teach-kids-binary/

---

*Cette fiche fait partie du projet [Unplugged](/projets/unplugged), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

# Premiers pas avec Octo Studio

## Informations générales

| | |
|---|---|
| **Matière principale** | Programmation |
| **Âge** | 8-12 ans |
| **Thématiques** | Comment débuter la programmation sur ordinateur grâce à Octo Studio ? |
| **Durée** | 120 min |
| **Pratiques informatiques** | Décomposition, reconnaissance de motifs, abstraction, algorithme, résolution de problèmes |
| **Type d'activité** | Activité branchée |
| **Logistique** | Classe entière et travail en binômes |

### Objectifs d'apprentissage

À l'issue de cette séance, les élèves seront capables de :

- Créer et personnaliser un lutin (sprite) avec Octo Studio.
- Concevoir un programme interactif simple dans Octo Studio intégrant des éléments comme le mouvement, le son, le texte et les capteurs.
- Comprendre la signification du mot « pseudocode ».
- Travailler efficacement en binôme en écoutant les idées de l'autre et en se répartissant les tâches équitablement.
- Communiquer clairement avec son partenaire pour planifier, construire et tester un programme.
- Pratiquer la résolution de problèmes en déboguant et en améliorant leur programme.
- Faire preuve de créativité dans la conception des personnages (lutins), des décors et des interactions.

### Matériel nécessaire

**Pour l'enseignant·e :**

- 1 vidéoprojecteur et câble pour projeter depuis une tablette (l'application est disponible sur tablette)
- 1 corrigé des cartes défis
- 1 clochette
- 1 annexe avec les captures vidéo de l'application

**Pour chaque binôme :**

- 1 tablette ou smartphone chargé(e) avec l'application Octo Studio (gratuite)
- 1 jeu de cartes défis
- 1 jeu de cartes rôles (plastifiées)
- 1 feutre effaçable
- 1 fiche « Ceci n'est pas un cercle »
- Des crayons de couleur

### Liens utiles

- Guide de référence Octo Studio : [https://octostudio.org/resources/Reference%20Guide.pdf](https://octostudio.org/resources/Reference%20Guide.pdf)
- Source d'inspiration pour cette séance : [https://www.exploratorium.edu/tinkering/animate-shape](https://www.exploratorium.edu/tinkering/animate-shape)

---

> Cette fiche d'activité fait partie du projet Robots Meet Arts (numéro de projet 2023-1FR01-KA220-SCH-000151881) financé avec le soutien de la Commission européenne par le biais du programme Erasmus+. Son contenu n'engage que son auteur et la Commission ne peut être tenue responsable de l'usage qui pourrait être fait des informations qu'elle contient. Ce travail est sous licence Creative Commons Attribution-ShareAlike 4.0 International License.

---

## Introduction - Pourquoi choisir OctoStudio plutôt qu'un autre programme de blocs, comme Scratch ?

OctoStudio offre une expérience mobile pensée pour la création et le code. Si Scratch est bien connu, OctoStudio se distingue sur plusieurs points importants :

- **Des ressources d'apprentissage complètes** : Démarrez rapidement grâce à une riche bibliothèque de tutoriels vidéo et de démonstrations disponibles sur la chaîne YouTube d'OctoStudio.
- **Conçu pour le mobile, pensé pour la flexibilité** : OctoStudio est spécifiquement conçu pour les appareils mobiles, permettant de créer des projets n'importe où, n'importe quand — sans ordinateur. Donnez vie à vos projets grâce à des fonctionnalités interactives qui réagissent au toucher, aux secousses, à l'inclinaison et aux autres capteurs de l'appareil. Intégrez facilement des photos, vidéos et sons de votre environnement dans vos projets, encourageant une créativité qui dépasse l'écran.
- **Une programmation par blocs gratuite et intuitive** : Grâce à une interface glisser-déposer conviviale, OctoStudio permet aux enfants de 7 à 14 ans d'apprendre les concepts de programmation sans se soucier de la syntaxe. L'application est gratuite et, selon de nombreux utilisateurs, plus intuitive que Scratch.
- **Fonctionne sans internet** : OctoStudio fonctionne hors ligne, ce qui en fait un outil idéal pour les zones avec un accès internet limité ou inexistant.
- **Multilingue et accessible** : Disponible dans plus de 20 langues et doté de fonctionnalités d'accessibilité comme la compatibilité avec les lecteurs d'écran et l'agrandissement des images, OctoStudio est véritablement inclusif pour tous les utilisateurs.

---

## Séquence 1 - Mise en route (Warm-up)

*Découverte et échauffement*

> **Notes pour l'enseignant·e**
>
> - Téléchargez l'application sur les tablettes et sélectionnez la langue adaptée à votre classe.
> - Préparez le matériel indiqué ci-dessus.
> - Constituez les binômes à l'avance.
> - Réalisez l'exercice de démarrage pour renforcer vos connaissances en tant qu'enseignant·e.
> - Consultez le guide de référence Octo Studio qui explique chaque bloc de programmation.

### « Ceci n'est pas un cercle »

Les élèves s'installent en binômes. Distribuez les fiches de travail « Ceci n'est pas un cercle » et les crayons de couleur. Demandez aux élèves de colorier le cercle avec leur couleur préférée. Puis dites-leur : « Transformez ce cercle en autre chose qui n'est plus un cercle. Laissez parler votre imagination. »

Annoncez aux élèves l'objectif de la séance : créer un programme avec leur « objet qui n'est plus un cercle » dans l'application Octo Studio. Ensuite, faites-les réfléchir aux deux rôles possibles, puisqu'il n'y a qu'une seule tablette par binôme. Par exemple : un élève manipule la tablette et l'autre lui indique ce qu'il doit faire. Demandez-leur d'écrire ces rôles sur les cartes avec le feutre effaçable et de choisir chacun un rôle.

Pour commencer sur Octo Studio, la première étape sera la création de sprite. « Aujourd'hui, nous allons programmer. Pour cela, nous avons besoin d'un élément : un sprite ou un décor. Pour ce projet, nous allons programmer un sprite. »

Devant la classe, créez un nouveau sprite dans un nouveau projet en dessinant le cercle dans la couleur choisie (voir vidéo).

### Découvrir les blocs de code

Demandez aux élèves d'appuyer sur le bouton Lecture. Demandez-leur ce qui se passe. Il ne se passe rien. C'est parce que nous n'avons encore rien programmé. C'est ce que nous allons faire maintenant.

Expliquez aux élèves qu'ils vont utiliser des blocs pour indiquer au sprite exactement ce qu'il doit faire, étape par étape. On place les blocs de haut en bas, comme des instructions de montage.

Il existe différents types de blocs. Chaque catégorie a sa propre couleur de fond. Interrogez les élèves sur la signification de chaque catégorie.

*Fin de la séquence de mise en route.*

---

## Séquence 2 - Approfondissement (Build-up)

*Acquisition et structuration des savoirs*

### Programmer les cartes défis

Présentez les cartes défis aux élèves. Expliquez la signification du **pseudocode** sur ces cartes. Il s'agit de l'explication écrite, étape par étape, de ce qui se passe lorsqu'on lance le programme (en appuyant sur le bouton Lecture).

Il est conseillé de réaliser le premier défi tous ensemble en classe entière. Les élèves peuvent ensuite choisir s'ils souhaitent réaliser le Niveau 1 ou le Niveau 2. Le Niveau 2 est plus difficile. En haut à droite de chaque carte défi, la catégorie de blocs à utiliser est indiquée.

Vous pouvez également choisir de réaliser chaque exercice en classe entière plutôt que de laisser les élèves travailler en binômes. Avant de passer au défi suivant, les élèves doivent montrer leur solution à l'enseignant·e.

Avant de commencer le défi 8, pensez à donner une instruction supplémentaire aux élèves : la vidéo d'instruction 2. Celle-ci leur permet d'ajouter un second sprite (leur propre création à partir du cercle). Dans le défi 8, ils programment le cercle et le sprite qu'ils ont créé. Un exemple de programme est disponible en vidéo dans le PowerPoint.

*Fin de la séquence d'approfondissement.*

---

## Séquence 3 - Mise en pratique (Rehearsal)

*Réinvestissement et application des connaissances*

### Jeu « Devine le cercle »

Rassemblez tous les élèves avec leurs tablettes en cercle. Placez une clochette au centre. Les élèves présentent leur programme à tour de rôle. Dès qu'un autre élève reconnaît ce que le cercle est devenu, il peut sonner la clochette.

*Fin de la séquence de mise en pratique.*

---

## Cartes défis

### Défi 1

- **Niveau 1** : Le sprite saute une fois.
- **Niveau 2** : Le sprite se déplace en formant un carré.

### Défi 2

- **Niveau 1** : Une voix aiguë dit « bonjour ».
- **Niveau 2** : Un sprite dit « bonjour » et on entend le mot « bonjour ».

### Défi 3

- **Niveau 1** : Faire disparaître le sprite rapidement.
- **Niveau 2** : Redimensionner le sprite.

### Défi 4

- **Niveau 1** : Faire briller le sprite.
- **Niveau 2** : Changer la couleur du sprite.

### Défi 5

- **Niveau 1** : Faire disparaître le sprite pendant une seconde.
- **Niveau 2** : La couleur du sprite change en boucle.

### Défi 6

- **Niveau 1** : Quand je secoue la tablette, un son se joue.
- **Niveau 2** : Quand je touche le sprite, il change de couleur.

### Défi 7

- **Niveau 1 et 2** : Le sprite suit les mouvements de la tablette.

### Défi 8

- Je vois mon cercle d'origine.
- Mon cercle d'origine disparaît après une seconde et je vois mon nouveau sprite.
- Mon nouveau sprite grandit ou je peux le déplacer en bougeant la tablette.

---

> Ressources imprimables jointes : cartes rôles, fiche « Ceci n'est pas un cercle », cartes défis et solutions (défis 1 à 8), tutoriels vidéo (créer un sprite, modifier un sprite, exemple de programme).

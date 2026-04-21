---
id: ed-range-chambre
title: "Ed range sa chambre"
sidebar_label: "Ed range sa chambre"
sidebar_position: 5
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="3" y="4" width="18" height="16" rx="2" fill="#169da7" opacity="0.1"/><rect x="4" y="5" width="7" height="6" rx="1" fill="#169da7" opacity="0.25"/><rect x="13" y="5" width="7" height="6" rx="1" fill="#169da7" opacity="0.25"/><path d="M6 14h4M6 16h3M14 14h4M14 16h3" stroke="#169da7" strokeWidth="1" strokeLinecap="round"/><circle cx="8" cy="8" r="1.5" fill="#169da7"/><path d="M15 7l2 2-2 2" stroke="#169da7" strokeWidth="1" strokeLinecap="round" fill="none"/></svg> Ed range sa chambre

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--discipline">Langues</span>
  <span className="badge badge--info">Algorithme</span>
  <span className="badge badge--info">Résolution de problèmes</span>
  <span className="badge badge--secondary">Robots de sol</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| Robots Meet Arts | 60-90 min | Débutant | 7-9 ans |

## Matériel

- Robots Edison et feutres de différentes couleurs à connecter dessus
- Grande grille au sol (représentant la chambre du robot avec différents vêtements dessus). Vous pouvez utiliser la grille fournie en annexe comme exemple.

<div style={{marginTop: "1.5rem"}}/>

:::tip[**Ressources imprimables incluses dans le PDF.**]

- Grille de la chambre d'Ed (zones été/hiver et départ)

:::

<a href="/pdf/robots-meet-arts/RMA_EdRangeChambre_FR.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger en PDF</a>

</div>

</div>

---

## Objectifs d'apprentissage

À l'issue de cette séance, les élèves seront capables de :

- Identifier et nommer les saisons (été et hiver)
- Utiliser le vocabulaire approprié pour décrire les vêtements
- Associer les vêtements à la saison correspondante
- Manipuler le robot Edison en sachant le démarrer et le programmer (avec EdBlocks)
- Travailler ensemble pour résoudre des défis

## Liens utiles

- Vocabulaire des saisons (Wordwall) : [lien 1](https://wordwall.net/el/resource/17342546), [lien 2](https://wordwall.net/el/resource/29454093)
- Vocabulaire des vêtements (Wordwall) : [lien 1](https://wordwall.net/el/resource/17590847), [lien 2](https://wordwall.net/el/resource/39408664)
- Découvrir les bases de la robotique avec Edison : [https://meetedison.com/](https://meetedison.com/)

---

## Séquence 1 - Mise en route (Warm-up)


:::info[Notes pour l'enseignant·e]

Assurez-vous d'avoir accès à internet et à un tableau interactif pour que les élèves puissent interagir avec les jeux de vocabulaire proposés. Si vous avez accès à la salle informatique, vous pouvez prévoir un ordinateur par élève pour que chacun puisse jouer individuellement.

Préparez des images représentant les quatre saisons à projeter ou à afficher.

:::

Introduisez le thème du jour : les saisons et les vêtements que l'on choisit pour chacune d'elles.

Montrez quatre images représentant les quatre saisons et demandez aux élèves de les nommer. Ensuite, écrivez le nom de chaque saison au tableau et encouragez les élèves à les épeler et à les lire à voix haute. Concentrez-vous particulièrement sur l'été et l'hiver, qui sont les saisons principales de cette activité.

Proposez ensuite aux élèves deux jeux de vocabulaire interactifs sur les saisons (voir les deux premiers liens utiles) pour qu'ils puissent s'entraîner. Dans un second temps, laissez les élèves jouer aux deux autres jeux interactifs portant sur les vêtements.

Encouragez-les à lire à voix haute le mot qu'ils choisissent et laissez-les interagir et observer le résultat de leurs choix. Favorisez les échanges entre élèves lorsqu'ils ont des difficultés à associer les vêtements à la bonne image.


---

## Séquence 2 - Approfondissement (Build-up)


:::info[Notes pour l'enseignant·e]

Créez une grande grille au sol à l'aide de ruban adhésif ou de papier. Vous pouvez également imprimer la grille exemple fournie en annexe. La grille représente la chambre du robot où sont éparpillés différents vêtements. En haut de la grille, placez deux zones : une pour l'été et une pour l'hiver. Chaque zone est entourée d'une couleur spécifique (rouge pour l'été, bleu pour l'hiver).

Préparez les robots Edison avec les porte-feutres et des feutres de différentes couleurs. Imprimez les codes-barres nécessaires à la programmation des robots Edison (voir guide Edison).

:::

### Partie 1 - Découverte du robot Edison (20 min)

Présentez le robot Edison aux élèves en leur expliquant son fonctionnement. Montrez-leur comment utiliser les boutons et comment le programmer à l'aide des codes-barres (informations de base sur Edison disponibles ici : [EdBook 2 - Ton EdVenture en Robotique](https://meetedison.com/content/EdBooks/French/EdBook2-Ton-EdVenture-en-Robotique-Tu-es-un-Programmeur-draft.pdf)).

Proposez-leur une mini-activité pour se familiariser avec le robot : ils doivent scanner le code-barres qui leur est donné, puis ils pourront contrôler le robot Edison en tapant des mains.

### Partie 2 - Programmer Edison pour ranger la chambre (30 min)

Les élèves programment Edison en utilisant l'application EdBlocks. Expliquez-leur que leur objectif est de faire suivre une ligne noire à Edison pour relier chaque vêtement à la bonne saison.

Présentez la grille aux élèves. Le personnage principal est **Ed** et il doit ranger sa chambre en ramassant les vêtements éparpillés au sol et en les classant selon la saison où il les porte.

**Instructions pour les élèves :**

- Tracez une ligne noire pour relier le départ (où Edison commence) au vêtement de votre choix. Placez un obstacle sur le vêtement pour qu'Edison s'arrête en le détectant. Edison émet alors un bip et vous devez épeler le nom du vêtement.
- Retirez l'obstacle et tracez une autre ligne noire reliant le vêtement à la zone de la saison correspondante de la même manière. N'oubliez pas de placer un obstacle pour qu'Edison s'arrête.
- Programmez Edison pour qu'il allume ses deux lumières et épelez le nom de la saison.

Fixez le porte-feutre sur le robot Edison pour que les élèves puissent relier les vêtements aux saisons en traçant une ligne d'une couleur spécifique. À la fin de l'activité, les vêtements d'été sont reliés à la zone été par des lignes rouges et les vêtements d'hiver sont reliés à la zone hiver par des lignes bleues.

Les élèves jouent à tour de rôle. Si un élève fait une erreur, les autres doivent lui donner des pistes pour corriger. L'activité est terminée lorsque tous les vêtements sont correctement rangés.

N'oubliez pas d'effacer la ligne noire à chaque fois qu'un élève termine son parcours.


---

## Réflexion autour de la séquence


Rassemblez et rangez le matériel, puis revenez sur les points clés avec les élèves :

- Comment avez-vous trouvé l'expérience avec Edison ?
- Qu'est-ce qui était difficile ?
- Comment avez-vous corrigé les erreurs dans le parcours de votre robot ?


---

*Cette fiche fait partie du projet [Robots Meet Arts](/projets/robots-meet-arts), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

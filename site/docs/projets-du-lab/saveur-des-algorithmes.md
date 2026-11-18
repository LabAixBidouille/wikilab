---
id: saveur-des-algorithmes
title: Concevoir la quête « La saveur des algorithmes »
sidebar_label: 'Concevoir la quête « La saveur des algorithmes »'
sidebar_position: 21
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Concevoir la quête « La saveur des algorithmes »

| Projet | Type | Difficulté |
| --- | --- | --- |
| Projets du LAB | Jeu et fabrication | Intermédiaire |

## Présentation

Le thème national de la Fête de la science 2026, « Saveurs savantes », invitait à parler de goût et de cuisine. Le LAB y a répondu sur son stand du Village des sciences d'Aix-en-Provence, du 2 au 4 octobre 2026, par une quête en trois activités débranchées : chacune associe une notion de pensée informatique à un scientifique du goût, et se joue avec un matériel fabriqué au fablab.

Cette page décrit le contenu des trois activités, puis la fabrication de leur matériel : fichiers de découpe et de gravure laser, pièces imprimées en 3D, montage. Le dossier des animateurs, avec les déroulés minutés et toutes les solutions, se télécharge ci-dessous.

<PdfLink href="/pdf/projets-du-lab/Saveur_des_algorithmes_Dossier_animateurs.pdf">Dossier des animateurs</PdfLink> <PdfLink href="/pdf/projets-du-lab/Saveur_des_algorithmes_Presentation_enseignants.pdf">Présentation pour les enseignants</PdfLink>

</div>

<img src="/img/ressources/projets-du-lab/lab-saveur-algorithmes/icone.png" alt="La saveur des algorithmes" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## Le principe de la quête

Au départ, chaque visiteur reçoit la carte recette de « la tartine des trois savants » (une par classe pour les scolaires). Chaque activité réussie fait tamponner une étape de la recette : le pain, la cuisson, puis la garniture. Au verso, une expérience de dégustation par étape se refait à la maison.

| Activité | Notion | Scientifique | Verbe | Étape tamponnée |
| --- | --- | --- | --- | --- |
| 1 | Récursivité | Louis Pasteur, la fermentation | Planifier | Le pain |
| 2 | Bit de parité | Louis-Camille Maillard, le grillé | Vérifier | La cuisson |
| 3 | Ensemble dominant | Kikunae Ikeda, l'umami | Optimiser | La garniture |

Le vendredi, chaque classe était répartie en trois groupes, et chaque groupe faisait une seule activité pendant 20 minutes. Le samedi et le dimanche, le public passait d'une table à l'autre à son rythme et pouvait faire toute la quête. Chaque activité se termine par une dégustation liée à sa science (pain au levain, odeur du pain grillé, chips d'algues nori) ; les allergènes étaient affichés sur une carte par table.

Les trois activités reprennent, en les transposant dans le thème du goût, trois fiches débranchées du wiki : [Combiner des formules pour le Docteur Hanoï](/ressources/unplugged/dr-hanoi), [Corriger les erreurs de transmission dans les grilles de la paix](/ressources/unplugged/grille-magique-de-la-paix) et [Comprendre les ensembles dominants en créant des fermes urbaines](/ressources/unplugged/ferme-en-ville).

:::tip[**Ressources imprimables à télécharger.**]

- **Fiches activités** : une fiche par activité, avec les notions, le matériel à imprimer et les solutions, pour refaire l'activité en classe.
- **Matériel à imprimer** : carte recette A5, cartes allergènes, fiches formules, cartes défis et cartes de règles de la récursivité (série d'origine et série 2), tartines à corriger en quatre versions, calque et plans du marché.

<PdfLink href="/pdf/projets-du-lab/Saveur_des_algorithmes_Fiche_activite_1_Recursivite.pdf">Fiche 1 : Récursivité</PdfLink> <PdfLink href="/pdf/projets-du-lab/Saveur_des_algorithmes_Fiche_activite_2_Bit_de_parite.pdf">Fiche 2 : Bit de parité</PdfLink> <PdfLink href="/pdf/projets-du-lab/Saveur_des_algorithmes_Fiche_activite_3_Ensemble_dominant.pdf">Fiche 3 : Ensemble dominant</PdfLink> <PdfLink href="/pdf/projets-du-lab/Saveur_des_algorithmes_Materiel_a_imprimer.zip">Matériel à imprimer (zip)</PdfLink>

:::

## Les fichiers de fabrication

Tous les fichiers laser de la quête suivent les mêmes codes, pour qu'un seul réglage de machine serve à toutes les pièces. Ce qui est gravé est toujours une surface remplie, jamais un trait : les contours deviennent des bandes et les pictogrammes des disques pleins évidés. Les fichiers SVG et STL des trois activités sont réunis dans une archive.

| Dans le fichier | Couleur | Opération |
| --- | --- | --- |
| Trait de 0,1 mm | rouge `#FF0000` | découpe |
| Aplat | noir `#000000` | gravure pleine |
| Aplat | gris `#999999` | gravure légère |

L'ordre conseillé est le suivant : graver d'abord (le gris, puis le noir), découper ensuite les formes intérieures, et finir par le contour, pour que la pièce reste en place pendant tout le travail.

<PdfLink href="/pdf/projets-du-lab/Saveur_des_algorithmes_Fichiers_fabrication.zip">Fichiers de fabrication (zip)</PdfLink>

## Activité 1 : Récursivité

### Le jeu

Les participants préparent le levain de Pasteur en déplaçant des ingrédients d'une fiole à l'autre. Quatre fioles contiennent au départ deux eaux, deux levures, deux sels, puis le blé et le seigle. Chaque fiche formule montre une disposition à obtenir et le nombre minimum de coups pour y parvenir. Trois règles du laboratoire s'appliquent : on déplace un seul ingrédient à la fois, le plus haut de sa fiole ; une fiole contient quatre ingrédients au plus ; une farine ne se pose jamais sur un ingrédient léger.

À partir de la formule 6 s'ajoute la règle du boulanger : dans une même fiole, le sel ne se pose jamais directement sur la levure, ni la levure sur le sel, car le sel prend leur eau aux levures. La dixième formule, celle du levain, fait tamponner l'étape « Le pain ». Les équipes qui ont terminé continuent avec cinq cartes défi, de 11 à 19 coups.

Pour réussir, il faut planifier et se fixer des sous-objectifs, par exemple libérer une fiole avant de la remplir. C'est l'entrée vers la récursivité, qui ramène un problème au même problème en plus petit : le casse-tête des tours de Hanoï, inventé en 1883 par Édouard Lucas, en est l'exemple classique. Le nombre minimum de coups de chaque formule a été calculé en explorant toutes les dispositions possibles.

### Fabrication : les quatre fioles imprimées en 3D

Les fioles deviennent quatre tiges plantées dans un socle, et les ingrédients des pièces percées qu'on enfile sur les tiges. Chaque pièce a la silhouette de son ingrédient et s'imprime dans sa couleur. Toutes les pièces font 10 mm d'épaisseur et une tige ne laisse dépasser que la hauteur de quatre pièces, plus 10 mm pour les doigts : la règle des quatre ingrédients par fiole est donc tenue par l'objet lui-même. Les farines sont de grandes pièces, et les ingrédients légers sont réduits à 85 % pour qu'on les distingue au premier coup d'œil.

![Rendu des quatre fioles imprimées en 3D](/img/ressources/projets-du-lab/lab-saveur-algorithmes/rendu-fioles-3d.png)

![Schéma des quatre fioles vues de face, avec leurs cotes](/img/ressources/projets-du-lab/lab-saveur-algorithmes/schema-hanoi-face.svg)

- **Socle** : une pièce pleine de 206 × 72 × 14 mm, avec quatre logements de 8,4 mm de diamètre et 2 mm de matière sous chacun.
- **Tiges** : 8 mm de diamètre, enfoncées de 12 mm dans le socle, espacées de 52 mm d'axe en axe.
- **Pièces** : trou de 9,2 mm, soit 0,6 mm de jeu autour de la tige. Un jeu complet compte 1 blé, 1 seigle, 2 eaux, 2 levures et 2 sels.
- **Impression** : toutes les pièces s'impriment à plat et sans support. Pour la quête, quatre jeux identiques étaient répartis autour de la table.

Les fiches formules, les cartes défi et les cartes de règles sont au format carte postale (148 × 100 mm), imprimées sur une imprimante photo à sublimation thermique.

## Activité 2 : Bit de parité

### Le jeu

Un grille-pain dessine une lettre sur chaque tartine, case par case, dorée ou claire. Pendant la transmission du motif, une erreur s'est glissée : les participants vérifient la parité pour la trouver, la corrigent et lisent la lettre. Les huit lettres du plateau forment le mot MAILLARD.

L'activité commence par un tour de magie. Les participants remplissent eux-mêmes un carré de 5 × 5 cases. L'animateur complète une ligne et une colonne de contrôle, puis se retourne ; un participant retourne un seul pion, que l'animateur retrouve. Le secret : la case de contrôle au bout de chaque ligne et de chaque colonne est dorée si la ligne compte un nombre impair de cases dorées, claire sinon. Une erreur fausse le contrôle de sa ligne et de sa colonne, et se trouve donc à leur croisement.

Le groupe corrige ensuite une tartine ensemble sur le plateau, puis chacun, seul ou en binôme, reçoit une version papier des tartines. Les quatre versions cachent chacune un mot différent (PROTEINE, MOLECULE, CHALEUR!, GRILLADE), ce qui permet de donner des versions différentes à des voisins. La dégustation est olfactive : on classe à l'odeur, les yeux fermés, trois bocaux de pain grillé à trois degrés.

### Fabrication : le plateau en forme de tartine, découpé et gravé au laser

Le plateau est fait de deux plaques de balsa de même contour, en forme de tranche de pain de mie, contrecollées. La plaque du dessous ne porte que le contour. La plaque du dessus porte les 36 logements découpés : les 5 × 5 cases du motif, la colonne et la ligne de contrôle, décalées de 10 mm, et la case du coin. Une fois les plaques collées, chaque logement devient un creux où poser un pion. La croûte (une bande de 7 mm) et les deux boutons du grille-pain sont gravés en noir ; la zone derrière les cases de contrôle est gravée en gris, pour qu'on la repère sans explication.

![Fichier laser de la plaque du dessus, traits de découpe épaissis pour la lecture](/img/ressources/projets-du-lab/lab-saveur-algorithmes/laser-parite-plaque-dessus.png)

![Coupe du plateau de parité à travers trois logements](/img/ressources/projets-du-lab/lab-saveur-algorithmes/schema-parite-coupe.svg)

- **Logements** : carrés de 25 mm, au pas de 29 mm, soit des murs de 4 mm.
- **Pions** : disques de 22 mm (1,5 mm de jeu de chaque côté), taillés dans les chutes de découpe. Un disque de feutrine orange de 21 mm est collé sur une seule face : face feutrine, la case est dorée ; pion retourné, bois nu, la case est claire.
- **Montage** : graver et découper la plaque du dessus, découper la plaque du dessous, puis les coller l'une sur l'autre en faisant coïncider les contours.

![Rendu du plateau monté, les pions dessinant la lettre M](/img/ressources/projets-du-lab/lab-saveur-algorithmes/visuel-plateau-parite.png)

Les tartines sur papier se présentent comme le plateau, en quatre versions de huit tartines, à imprimer en A4.

## Activité 3 : Ensemble dominant

### Le jeu

Les participants doivent placer le moins d'étals possible dans une ville, pour que chaque carrefour ait un étal sur place ou au bout d'une seule rue. Ils cherchent d'abord sur un calque, seuls, en binôme ou en petit groupe, en coloriant pour chaque étal posé son carrefour et ses voisins. Puis tout le groupe passe au plateau du marché : un pion « étal » marque chaque étal posé, et un pion « habitant satisfait » chaque carrefour servi. La ville est servie quand chacune des 16 places porte un pion.

Sur le plan du plateau, 4 étals suffisent et la solution est unique : sur les 1 820 façons de placer 4 étals sur 16 carrefours, une seule convient. La méthode gloutonne, qui place chaque étal au carrefour qui en dessert le plus, va vite mais aboutit toujours à 5 ou 6 étals sur ce plan. Placer d'abord un étal au carrefour le plus fréquenté ne mène donc pas à la meilleure solution, et c'est tout l'intérêt de l'activité. L'ensemble dominant appartient à la famille des problèmes NP-complets, pour lesquels on ne connaît pas de méthode nettement plus rapide que d'essayer les combinaisons. La dégustation, des chips d'algues nori, fait goûter l'umami découvert par Kikunae Ikeda en 1908.

### Fabrication : le plateau du marché, en bois et PMMA sublimé

Le plateau mesure 40 × 40 cm. Le plan illustré de la ville est imprimé par sublimation sur quatre plaques de PMMA transparent de 20 × 20 cm, vissées sur un fond en bois gravé. Chaque carrefour est un trou de 20 mm dans le PMMA, au fond duquel apparaît le bois : c'est là que se pose le pion.

![Le plan illustré du marché, avec ses 16 carrefours](/img/ressources/projets-du-lab/lab-saveur-algorithmes/plan-marche-illustre.jpg)

Le plan est découpé en quatre quarts, numérotés de 1 à 4 : en haut à gauche, en haut à droite, en bas à gauche, en bas à droite. Les joints entre plaques passent entre les carrefours, jamais à travers un trou.

![Le réseau des rues et les joints entre les quatre plaques de PMMA](/img/ressources/projets-du-lab/lab-saveur-algorithmes/plan-marche-joints.png)

![Coupe du plateau du marché à un carrefour, à l'échelle](/img/ressources/projets-du-lab/lab-saveur-algorithmes/schema-marche-coupe.svg)

- **Fond en bois** : routes, bordures et anneaux des carrefours gravés en aplats noirs, tirets des voies laissés couleur bois, 9 trous de vis et contour découpés (angles arrondis de 10 mm).
- **Plaques de PMMA** : 3 mm d'épaisseur, liseré des routes gravé en bande pleine de 0,6 mm, trous des carrefours de 20 mm, encoches des vis et contour découpés.
- **Vis** : trous de 4,7 mm pour des vis de 4,5 mm avec rondelle, à 8 mm du bord, aux coins des plaques.

Le montage se fait dans cet ordre :

1. Graver les routes et découper le fond en bois.
2. Sublimer chaque quart du plan sur une feuille A4 de PMMA, puis l'aplatir.
3. Découper au laser les quatre plaques de 20 × 20 cm, leurs trous et leurs encoches, en calant chaque feuille sur les repères imprimés.
4. Poser les plaques sur le bois et visser aux 9 points.

![Fichier laser de la plaque de PMMA n° 1, traits épaissis pour la lecture](/img/ressources/projets-du-lab/lab-saveur-algorithmes/laser-pmma-plaque-1.png)

### Fabrication : les pions et leur support

Les 16 pions « habitant satisfait » sont imprimés en 3D. Un tenon de 19,5 mm entre dans le trou du carrefour avec 0,25 mm de jeu ; au-dessus, une collerette conique de 26 mm centre le pion et repose sur le PMMA. Ils s'impriment tenon vers le plateau, sans support, toutes les pentes restant à 45° au plus. Les 8 pions « étal » sont des figurines d'ingrédients imprimées en 3D, d'environ 40 mm de diamètre : quatre aliments riches en umami (tomate, algues, champignon, fromage) et quatre autres (pain, myrtille, poivron, sushi).

![Rendu du pion habitant satisfait](/img/ressources/projets-du-lab/lab-saveur-algorithmes/pion-habitant-3d.png)

Pendant le jeu, les pions attendent sur un support découpé au laser, fait de deux plaques superposées : la plaque du dessus est percée de 8 logements de 44 mm pour les étals, chacun avec une étiquette de marché gravée et le nom du produit laissé en réserve, et de 16 trous de 20 mm pour les habitants, comme ceux du plateau. Les produits sont mélangés pour que les quatre ingrédients umami ne se suivent pas et ne livrent pas d'indice. Deux cales imprimées en 3D soutiennent les coins sans vis.

![Fichier laser du support des pions, plaque du dessus](/img/ressources/projets-du-lab/lab-saveur-algorithmes/laser-support-pions.png)

## Retour d'expérience

Tout le matériel a bien fonctionné pendant les trois jours. Le niveau, en revanche, aurait pu être nettement plus élevé sur la récursivité et sur l'ensemble dominant. Sur les fioles, la difficulté des formules avait été réglée sur le seul nombre minimum de coups, alors qu'un grand nombre de coups ne rend pas une formule difficile si chaque coup est évident. Ce qui la rend difficile, ce sont les coups contre-intuitifs : déplacer un ingrédient déjà bien placé, s'éloigner du but, faire un détour imposé par la règle du boulanger.

Deux compléments ont été préparés après la Fête de la science, sans toucher au matériel du stand : une série 2 de formules et de défis classés selon ces coups difficiles, avec leurs solutions, et trois plans de ville plus grands pour l'ensemble dominant. Ils sont inclus dans le matériel à imprimer.

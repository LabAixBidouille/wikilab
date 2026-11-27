---
id: livre-couverture-laser
title: Fabriquer un livre à couverture laser
sidebar_label: 'Fabriquer un livre à couverture laser'
sidebar_position: 23
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Fabriquer un livre à couverture laser

| Projet | Type | Difficulté |
| --- | --- | --- |
| Projets du LAB | Projet maker | Intermédiaire |

</div>

<img src="/img/ressources/projets-du-lab/lab-livre-laser/icone.png" alt="Livre à couverture découpée au laser" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

## Présentation

<p style={{fontStyle: 'italic', marginBottom: '0.3rem'}}>Projet proposé par Manon.</p>

En octobre 2026, j'ai animé l'atelier « La quête du curry » dans deux bibliothèques des Méjanes à Aix-en-Provence : des enfants de 8 à 12 ans y ont inventé une histoire dont on est le héros, dont le chemin se décide au dé. Deux heures ne suffisant pas pour mener chaque histoire à son terme, il fallait trouver un moyen de rendre à chaque enfant une histoire complète, sous une forme dont il ou elle puisse être fier ou fière et avec laquelle jouer. C'est pourquoi j'ai mis en forme et imprimé ces histoires, puis fabriqué pour chacune un véritable livre : quinze exemplaires, un par enfant.

Le livre associe une couverture en bois découpée et gravée au laser, qui s'ouvre grâce à une charnière faite de fentes, un livret A5 collé à l'intérieur, un dé en papier à monter rangé dans une pochette, et une fermeture par élastique et bouton imprimé en 3D. Si ce modèle a été pensé pour ces histoires, il convient à tout livret au format A5, qu'il s'agisse d'un recueil, d'un carnet de jeu ou d'un livre d'atelier.

Pour le reproduire, il faut disposer d'une découpeuse laser au plateau A3, d'une imprimante 3D, d'une imprimante recto verso A4 et d'une agrafeuse grande capacité, ainsi que de planches de bois de 2 mm, de papier Canson et de papier de couleur. Les fichiers de fabrication contiennent un gabarit de couverture neutre, à compléter avec son propre titre et ses dessins, ainsi que le dé, la pochette, l'étiquette et le bouton.

<PdfLink href="/pdf/projets-du-lab/Livre_laser_Fichiers_fabrication.zip">Fichiers de fabrication (zip)</PdfLink>

---

## Le matériel

![Une partie des quinze livres, plats avant gravés](/img/ressources/projets-du-lab/lab-livre-laser/photo-serie-de-livres.jpg)

| Élément | Matériel par livre |
| --- | --- |
| Couverture | 1 planche de bois A3 de 2 mm. La pièce fait 356 × 240 mm. |
| Papier de couleur | 1 feuille de 320 × 240 mm, utilisée sans découpe. |
| Livret | De 11 à 22 feuilles A4 en recto verso, coupées en deux et agrafées sur le bord. |
| Collage | Colle en aérosol pour le papier de couleur, adhésif double face pour le livret, roller de colle (Cléopâtre) pour la pochette et l'étiquette. |
| Fermeture | 1 bouton imprimé en PLA, de la colle forte et 1 élastique à cheveux en TPU d'environ 6 cm de tour. |
| Dé | 1 dé, 1 pochette et 1 étiquette, découpés au laser dans du Canson. |

## La couverture

La couverture est l'élément qui fait de chaque livret un objet à part entière : découpée d'une seule pièce dans une planche de bois A3, elle porte à la fois l'identité du livre, grâce à la gravure, et sa structure, grâce à la charnière qui permet de l'ouvrir. La planche se pose dans la découpeuse face gravée vers le haut, la couverture calée à 5 mm du coin, afin que le contour, les deux trous de fermeture et les fentes de la charnière soient découpés en même temps que le reste est gravé.

![La couverture A3 à plat, avec ses cotes](/img/ressources/projets-du-lab/lab-livre-laser/schema-livre-couverture-a3.svg)

| Dans le fichier | Couleur | Opération |
| --- | --- | --- |
| Trait de 0,1 mm | rouge `#FF0000` | découpe du contour et des deux trous |
| Trait de 0,1 mm | bleu `#0000FF` | découpe des fentes de la charnière |
| Aplat | noir `#000000` | gravure |

Chaque couverture est propre à son histoire : le plat avant porte le titre, dans la police choisie pour le livre, la mention « Une histoire dont tu es le héros » et une scène de l'histoire, tandis que le plat arrière présente un objet de l'histoire, les prénoms des auteurs, un QR code menant à la version en ligne et les logos des partenaires. Afin que la gravure reste régulière et simple à régler, tout ce qui est gravé est une surface remplie d'une seule teinte, jamais un simple trait.

![Une couverture à plat, plat arrière à gauche, charnière au milieu, plat avant à droite](/img/ressources/projets-du-lab/lab-livre-laser/photo-couverture-a-plat.jpg)

![Le plat arrière d'un livre fermé](/img/ressources/projets-du-lab/lab-livre-laser/photo-plat-arriere.jpg)

Le gabarit neutre fourni dans les fichiers ne garde que le contour, les trous et la charnière, de sorte qu'il suffit d'y ajouter son titre et ses dessins, en noir et en aplats.

### La charnière

Pour qu'une planche de bois de 2 mm puisse se plier comme le dos d'un livre, la charnière est faite d'une bande de 27 mm découpée de 19 rangées de fentes de 35,4 mm, espacées de 1,5 mm. Une rangée sur deux étant décalée d'une demi-fente, le bois se tord entre les fentes au lieu de casser, et le livre peut s'ouvrir à plat.

![Détail de la charnière à fentes, à l'échelle](/img/ressources/projets-du-lab/lab-livre-laser/schema-charniere.svg)

:::info[Tester avant la série]

La tenue de la charnière dépend du bois utilisé : une pièce de test découpée dans une chute de la même planche permet de vérifier qu'elle se plie à 180° sans casser avant de lancer toutes les couvertures.

:::

## Le livret

Le livret rassemble l'histoire mise en forme, au format A5. Afin de garder des bords parfaitement alignés quelle que soit l'épaisseur du livre, les pages sont imprimées deux par face sur des feuilles A4, coupées en deux puis agrafées sur le bord. L'impression se fait en recto verso, retournement par le bord court et en taille réelle, car une page réduite pour s'ajuster aux marges de l'imprimante ne tomberait plus au bon endroit ; chaque feuille porte au milieu une marque de coupe.

La pile de chaque livre se coupe en deux d'un seul coup, à la marque. En posant la pile de gauche sur celle de droite, sans rien retourner, les pages se retrouvent dans l'ordre de lecture ; il ne reste qu'à aligner le dos et à poser trois agrafes à 6 mm du bord. Les pages gardent une marge de 19 mm côté dos, afin que le texte reste lisible malgré les agrafes, et une bande du papier de couleur, pliée sur le dos, vient les cacher. La dernière page, laissée blanche, est celle qui se colle dans la couverture.

![Un livret imprimé, coupé et agrafé sur le bord](/img/ressources/projets-du-lab/lab-livre-laser/photo-livret-agrafe.jpg)

:::info[Vérifier l'ordre de sortie]

Certaines imprimantes sortent les feuilles dans l'ordre inverse : avant de couper, il faut donc vérifier que la feuille portant la couverture du livret se trouve au-dessus, et séparer la pile livre par livre lorsque plusieurs livres sortent d'un même fichier.

:::

## L'intérieur de la couverture

Une fois retournée, la couverture accueille le livret sur le plat arrière, tandis que le plat avant reçoit le dé. Pour habiller le bois et donner à chaque livre une couleur, une feuille de papier de couleur couvre tout l'intérieur, charnière comprise : alignée sur le haut et le bas de la couverture, elle laisse une bande de bois nu de 18 mm le long des bords libres, où passent les trous de fermeture. Le livret, la pochette et l'étiquette se posent ensuite à l'intérieur du papier, en gardant une marge autour d'eux : le livret calé à droite sur le plat arrière, la pochette centrée sur le plat avant et l'étiquette alignée en haut.

![La face intérieure : papier de couleur, livret, pochette du dé et étiquette](/img/ressources/projets-du-lab/lab-livre-laser/schema-livre-interieur-a3.svg)

![L'intérieur d'un livre monté](/img/ressources/projets-du-lab/lab-livre-laser/photo-interieur.jpg)

:::info[Pas de colle sur la charnière]

Le papier passe sur la charnière : s'il y était collé, il l'empêcherait de plier. En laissant la bande des fentes sans colle, le papier forme simplement une petite boucle lorsque le livre se ferme.

:::

## Le bouton et l'élastique

Un livre dont on est le héros se manipule souvent et contient un dé à ne pas perdre : il fallait donc qu'il puisse se fermer. Les deux trous de fermeture sont placés à mi-hauteur, à 8,5 mm du bord libre de chaque plat, de sorte qu'une fois le livre fermé ils se trouvent face à face. L'élastique passe par le trou de 3 mm du plat arrière et vient se prendre autour d'un bouton, dont le tenon s'insère dans le trou de 5,2 mm du plat avant afin de le centrer pendant que la colle prend.

![Un livre fermé, l'élastique pris sur le bouton](/img/ressources/projets-du-lab/lab-livre-laser/photo-livre-ferme.jpg)

![Coupe du bouton posé sur le bois, à l'échelle](/img/ressources/projets-du-lab/lab-livre-laser/schema-livre-bouton.svg)

Le bouton se compose d'une tête de 14 mm, d'un cou de 7 mm où se loge l'élastique, d'une collerette de 13 mm collée sur le bois et d'un tenon de 5 × 2 mm. Le cou s'élargissant à 45° vers la collerette, le bouton s'imprime sans support, tête posée sur le plateau, avec un remplissage de 100 % pour que le cou ne casse pas. Un fichier regroupe 18 boutons sur un même plateau.

## Le dé, sa pochette et son étiquette

Les histoires se jouant au dé, chaque livre est accompagné de son propre dé, découpé et gravé dans du Canson et donné à plat, à monter, avec à la place des points les motifs de l'histoire. Le dé devant à la fois entrer dans la pochette et en dépasser pour qu'on puisse le retrouver et le saisir, son patron n'est pas la croix habituelle mais deux colonnes de trois faces décalées : il mesure ainsi 62 × 131 mm avec des faces de 25 mm, et dépasse de la pochette d'environ 20 mm. Deux faces opposées totalisent toujours 7.

![Fichier laser du dé : découpe, pliures et gravure](/img/ressources/projets-du-lab/lab-livre-laser/laser-de.png)

Dans LightBurn, les quinze dés tiennent sur trois feuilles A4, réparties sur trois calques :

| Couleur | Calque | Opération |
| --- | --- | --- |
| orange `#FF8000` | ligne | découpe |
| vert `#00A000` | pliure | rainage à faible puissance |
| cyan `#00E0E0` | remplissage | gravure |

La pochette, plate, est formée d'une face de 95 × 110 mm et de trois rabats de 7 mm qui se replient derrière elle et se collent sur le papier de couleur, le haut restant ouvert avec une encoche pour le pouce.

![Fichier laser de la pochette du dé](/img/ressources/projets-du-lab/lab-livre-laser/laser-pochette-de.png)

Au-dessus, une étiquette de 76 × 44 mm signale le dé à monter : elle reprend la police du titre et l'objet gravé au dos de la couverture, tandis qu'une flèche hachurée invite à regarder dans la pochette. La version neutre des fichiers laisse la place de l'objet libre.

![Dés et étiquettes à la sortie de la découpe](/img/ressources/projets-du-lab/lab-livre-laser/photo-des-et-etiquettes.jpg)

![Une étiquette « Ton dé à fabriquer »](/img/ressources/projets-du-lab/lab-livre-laser/laser-etiquette-ton-de.png)

## Les étapes de montage

1. Découper et graver la couverture, puis vérifier que la charnière se plie sans forcer.
2. Poncer légèrement le dessous du bouton, le coller à la colle forte en enfonçant le tenon dans le trou du plat avant, et laisser sécher à plat.
3. Coller le papier de couleur à la colle en aérosol, aligné sur le haut et le bas, sans colle sur la charnière, puis refermer une fois la couverture pour que le papier se place sur la pliure.
4. Passer l'élastique par le trou du plat arrière.
5. Imprimer, couper et agrafer le livret, cacher les agrafes sous une bande de papier de couleur, puis poser de l'adhésif double face sur la dernière page.
6. Coller le livret sur le plat arrière, calé à droite à l'intérieur du papier.
7. Plier les rabats de la pochette et la coller au roller, centrée sur le plat avant.
8. Coller l'étiquette au roller au-dessus de la pochette, alignée en haut.
9. Glisser le dé dans la pochette et fermer le livre.

## Doutes et changements de direction

Ce livre est le résultat de nombreux essais, au fil desquels j'ai remis en cause plusieurs choix ; les garder en mémoire peut éviter de refaire les mêmes détours.

Le format, d'abord, a changé en cours de route. La première version était prévue sur des planches de bois A4, ce qui obligeait à couper les pages à 124 × 184 mm pour qu'elles tiennent dans la couverture ; l'arrivée de planches A3 a permis de garder des pages A5 entières, sans rogner leurs bords. La couverture s'est elle aussi simplifiée : les ajourages des premiers essais ont été abandonnés au profit de la seule gravure, les dessins du dos trop fins et trop complexes pour la laser ont laissé place à des images au trait plus franc, et la gravure en deux teintes a cédé la place à une seule.

La reliure a demandé le plus de réflexion. Les vis de relieur prévues au départ obligeaient à percer toutes les pages ; coller le livret par sa dernière page s'est révélé bien plus simple. Restait à tenir les feuilles entre elles : le cahier plié et agrafé au milieu, rapide à réaliser, se décalait nettement sur le plus gros livret, de 22 feuilles, les feuilles du milieu dépassant côté bord libre. Après avoir envisagé un mécanisme à anneaux, qui imposait de redessiner le dos, une couture, trop longue à réaliser, et un dos collé, j'ai retenu l'agrafage sur le bord, qui garde des bords alignés tout en restant rapide.

La fermeture a connu le même tâtonnement : passage de deux trous à un seul, collage simple du bouton plutôt qu'un rivet à rondelle, retour du tenon pour le centrer, puis évasement à 45° pour résoudre un défaut d'impression. Les premiers élastiques à cheveux que j'ai essayés, de 5 cm de diamètre, se sont révélés deux fois trop grands pour tenir le livre fermé.

Enfin, plusieurs ajustements sont venus du montage lui-même. Le papier de couleur disponible mesurant 320 × 240 mm, le garder entier a fixé la hauteur de la couverture à 240 mm. Le dé, une fois les pochettes collées, glissait tout au fond et devenait introuvable, ce qui a conduit à redessiner son patron pour qu'il dépasse. Quant à deux couvertures de livret, elles sont sorties de l'imprimante avec un cadre foncé, dû à des effets de transparence que l'imprimante rendait mal, et leur première feuille a été réimprimée avec une couverture convertie en image.

## Ce qui reste à améliorer

Si la fermeture par élastique et bouton remplit son rôle, elle reste minutieuse à défaire, et une solution plus facile à manipuler mériterait d'être cherchée. Le collage, en revanche, a donné entière satisfaction, qu'il s'agisse du papier de couleur, du livret ou des petits éléments. L'agrafage sur le bord fait le travail sans être très soigné : une reliure plus belle, mais aussi rapide à réaliser pour une série, reste à trouver. Enfin, une feuille de papier de couleur plus grande, coupée à la taille de l'intérieur de la couverture, offrirait un intérieur plus harmonieux que la feuille de 320 × 240 mm utilisée telle quelle.

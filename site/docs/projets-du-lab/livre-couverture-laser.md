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

Projet proposé par Manon.

</div>

<img src="/img/ressources/projets-du-lab/lab-livre-laser/icone.png" alt="Livre à couverture découpée au laser" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

## Présentation

Ce livre a une couverture en bois découpée et gravée au laser, qu'une charnière faite de fentes permet d'ouvrir comme un livre relié. Un livret A5 est collé à l'intérieur, une pochette garde un dé en papier à monter, et un élastique pris autour d'un bouton imprimé en 3D ferme le livre. Le modèle convient à tout livret A5 : un recueil, un carnet de jeu, un livre d'atelier.

Il a été mis au point en novembre 2026 pour offrir aux enfants de l'atelier « La quête du curry », aux bibliothèques des Méjanes d'Aix-en-Provence, le livre de l'histoire dont on est le héros qu'ils avaient inventée : quinze exemplaires, un par enfant.

Pour le refaire, il faut :

- une découpeuse laser au plateau A3 et des planches de bois de 2 mm ;
- une imprimante 3D, une imprimante recto verso A4 et une agrafeuse grande capacité ;
- du papier Canson et du papier de couleur ;
- les fichiers de fabrication : un gabarit de couverture neutre à compléter avec son titre et ses dessins, le dé, la pochette, l'étiquette et le bouton.

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

La planche A3 se pose dans la découpeuse face gravée vers le haut, la couverture calée à 5 mm du coin. Le contour, les deux trous de fermeture et les fentes de la charnière sont découpés, le reste est gravé.

![La couverture A3 à plat, avec ses cotes](/img/ressources/projets-du-lab/lab-livre-laser/schema-livre-couverture-a3.svg)

| Dans le fichier | Couleur | Opération |
| --- | --- | --- |
| Trait de 0,1 mm | rouge `#FF0000` | découpe du contour et des deux trous |
| Trait de 0,1 mm | bleu `#0000FF` | découpe des fentes de la charnière |
| Aplat | noir `#000000` | gravure |

Le plat avant porte le titre, la mention « Une histoire dont tu es le héros » et une scène de l'histoire. Le plat arrière porte un objet de l'histoire, les prénoms des auteurs, un QR code vers la version en ligne et les logos. Tout ce qui est gravé est en aplat, jamais au trait, et en une seule teinte : la gravure est plus régulière et plus simple à régler.

![Une couverture à plat, plat arrière à gauche, charnière au milieu, plat avant à droite](/img/ressources/projets-du-lab/lab-livre-laser/photo-couverture-a-plat.jpg)

![Le plat arrière d'un livre fermé](/img/ressources/projets-du-lab/lab-livre-laser/photo-plat-arriere.jpg)

Le gabarit neutre ne garde que le contour, les trous et la charnière : il suffit d'y ajouter son titre et ses dessins, en noir.

### La charnière

La charnière est une bande de 27 mm faite de 19 rangées de fentes de 35,4 mm, espacées de 1,5 mm. Une rangée sur deux est décalée d'une demi-fente, si bien que le bois se tord entre les fentes au lieu de casser.

![Détail de la charnière à fentes, à l'échelle](/img/ressources/projets-du-lab/lab-livre-laser/schema-charniere.svg)

:::info[Tester avant la série]

Une pièce de test découpée dans une chute du même bois permet de vérifier que la charnière se plie à 180° sans casser.

:::

## Le livret

L'impression se fait en recto verso, retournement par le bord court, en taille réelle : si l'imprimante ajuste la page aux marges, plus rien ne tombe au bon endroit. Chaque feuille porte deux pages par face et une marque de coupe au milieu.

La pile de chaque livre se coupe en deux d'un seul coup, à la marque ; la pile de gauche posée sur celle de droite, les pages se suivent. Une fois le dos aligné, trois agrafes à 6 mm du bord tiennent le livret. Les pages gardent 19 mm de marge côté dos pour rester lisibles. Une bande du papier de couleur, pliée sur le dos, cache les agrafes. La dernière page reste blanche : c'est elle qui se colle dans la couverture.

![Un livret imprimé, coupé et agrafé sur le bord](/img/ressources/projets-du-lab/lab-livre-laser/photo-livret-agrafe.jpg)

:::info[Vérifier l'ordre de sortie]

Certaines imprimantes sortent les feuilles dans l'ordre inverse : avant de couper, il faut vérifier que la feuille de la couverture du livret est au-dessus, et séparer la pile livre par livre si plusieurs livres sortent d'un même fichier.

:::

## L'intérieur de la couverture

La feuille de papier de couleur couvre tout l'intérieur, charnière comprise. Alignée sur le haut et le bas, elle laisse 18 mm de bois nu le long des bords libres. Le livret, la pochette et l'étiquette se posent dans le papier, avec une marge autour : le livret calé à droite sur le plat arrière, la pochette centrée sur le plat avant et l'étiquette alignée en haut.

![La face intérieure : papier de couleur, livret, pochette du dé et étiquette](/img/ressources/projets-du-lab/lab-livre-laser/schema-livre-interieur-a3.svg)

![L'intérieur d'un livre monté](/img/ressources/projets-du-lab/lab-livre-laser/photo-interieur.jpg)

:::info[Pas de colle sur la charnière]

Sans colle sur la bande des fentes, le papier forme une petite boucle quand le livre se ferme. Collé sur les fentes, il bloquerait la charnière.

:::

## Le bouton et l'élastique

Les deux trous sont à mi-hauteur, à 8,5 mm du bord libre de chaque plat : livre fermé, ils sont face à face. L'élastique passe par le trou de 3 mm du plat arrière et ses deux brins se prennent autour du bouton. Le tenon du bouton entre dans le trou de 5,2 mm du plat avant, ce qui le centre pendant que la colle prend.

![Un livre fermé, l'élastique pris sur le bouton](/img/ressources/projets-du-lab/lab-livre-laser/photo-livre-ferme.jpg)

![Coupe du bouton posé sur le bois, à l'échelle](/img/ressources/projets-du-lab/lab-livre-laser/schema-livre-bouton.svg)

Le bouton a une tête de 14 mm, un cou de 7 mm pour l'élastique, une collerette de 13 mm à coller sur le bois et un tenon de 5 × 2 mm. Le cou s'élargit à 45° vers la collerette, ce qui permet de l'imprimer sans support, tête sur le plateau, avec un remplissage de 100 %. Un fichier regroupe 18 boutons sur un plateau.

## Le dé, sa pochette et son étiquette

Le dé est découpé et gravé dans du Canson, et se donne à plat, à monter. Son patron, en deux colonnes de trois faces décalées, mesure 62 × 131 mm avec des faces de 25 mm : il est assez étroit pour entrer dans la pochette et assez haut pour en dépasser d'environ 20 mm. Deux faces opposées font toujours 7, et chaque livre a ses motifs à la place des points.

![Fichier laser du dé : découpe, pliures et gravure](/img/ressources/projets-du-lab/lab-livre-laser/laser-de.png)

Dans LightBurn, les quinze dés tiennent sur trois feuilles A4, avec trois calques :

| Couleur | Calque | Opération |
| --- | --- | --- |
| orange `#FF8000` | ligne | découpe |
| vert `#00A000` | pliure | rainage à faible puissance |
| cyan `#00E0E0` | remplissage | gravure |

La pochette est plate : une face de 95 × 110 mm et trois rabats de 7 mm qui se replient derrière et se collent, avec une encoche pour le pouce en haut.

![Fichier laser de la pochette du dé](/img/ressources/projets-du-lab/lab-livre-laser/laser-pochette-de.png)

L'étiquette de 76 × 44 mm se colle au-dessus. Elle porte « Ton dé à fabriquer » dans la police du titre, une flèche hachurée vers la pochette et l'objet du dos de la couverture. La version neutre laisse la place de l'objet libre.

![Dés et étiquettes à la sortie de la découpe](/img/ressources/projets-du-lab/lab-livre-laser/photo-des-et-etiquettes.jpg)

![Une étiquette « Ton dé à fabriquer »](/img/ressources/projets-du-lab/lab-livre-laser/laser-etiquette-ton-de.png)

## Les étapes de montage

1. Découper et graver la couverture, puis vérifier que la charnière se plie.
2. Poncer le dessous du bouton, le coller à la colle forte, tenon dans le trou du plat avant, et laisser sécher à plat.
3. Coller le papier de couleur à la colle en aérosol, aligné en haut et en bas, sans colle sur la charnière, puis refermer une fois la couverture pour que le papier se place sur la pliure.
4. Passer l'élastique par le trou du plat arrière.
5. Imprimer, couper et agrafer le livret, cacher les agrafes sous une bande de papier de couleur, puis mettre de l'adhésif double face sur la dernière page.
6. Coller le livret sur le plat arrière, calé à droite dans le papier.
7. Plier les rabats de la pochette et la coller au roller, centrée sur le plat avant.
8. Coller l'étiquette au roller au-dessus, alignée en haut.
9. Glisser le dé dans la pochette et fermer le livre.

## Doutes et changements de direction

Plusieurs choix ont été remis en cause en cours de route.

La première version était prévue sur bois A4, avec des pages coupées à 124 × 184 mm ; le passage au bois A3 a permis de garder des pages A5 entières. Sur la couverture, les ajourages des premiers essais ont disparu au profit de la seule gravure, les dessins du dos trop fins ont laissé place à des images au trait plus franc, et le gris à une seule teinte.

Les vis de relieur prévues au départ ont été remplacées par le collage du livret. Le cahier plié et agrafé au milieu se décalait trop sur le plus gros livret, de 22 feuilles ; après avoir envisagé des anneaux, une couture et un dos collé, j'ai retenu l'agrafage sur le bord, rapide et aux bords bien alignés.

La fermeture est passée de deux trous à un seul, un simple collage a remplacé le rivet à rondelle envisagé, et le tenon est revenu pour centrer le bouton. L'évasement à 45° a réglé un défaut d'impression. Des élastiques à cheveux de 5 cm de diamètre étaient trop grands : il en faut d'environ 6 cm de tour.

Garder entière la feuille de papier de couleur de 320 × 240 mm a fixé la hauteur de la couverture à 240 mm. Le dé glissait au fond de la pochette déjà collée : son patron a changé pour qu'il dépasse. L'étiquette est passée par plusieurs versions avant celle-ci. Enfin, deux couvertures de livret sont sorties de l'imprimante avec un cadre foncé, dû à des transparences : leur première feuille a été réimprimée avec une couverture convertie en image.

## Ce qui reste à améliorer

- La fermeture à élastique marche, mais elle est minutieuse à défaire.
- Le collage est satisfaisant.
- L'agrafage fait le travail, sans être très soigné : une reliure plus belle et aussi rapide reste à trouver.
- Une feuille de papier de couleur plus grande, coupée à la taille de l'intérieur, donnerait un plus bel intérieur.

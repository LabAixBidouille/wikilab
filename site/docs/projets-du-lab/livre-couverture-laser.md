---
id: livre-couverture-laser
title: Fabriquer un livre dont on est le héros, à couverture découpée au laser
sidebar_label: 'Fabriquer un livre dont on est le héros, à couverture découpée au laser'
sidebar_position: 23
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Fabriquer un livre dont on est le héros, à couverture découpée au laser

| Projet | Type | Difficulté |
| --- | --- | --- |
| Projets du LAB | Projet maker | Intermédiaire |

## Présentation

En octobre 2026, le LAB a animé l'atelier « La quête du curry », annoncé au public sous le titre « Le livre dont tu es le héros », dans deux bibliothèques du réseau des Méjanes à Aix-en-Provence : les Deux Ormes le 27 octobre et Li Campaneto le 28 octobre. Des enfants de 8 à 12 ans y ont inventé une histoire à embranchements, dont le chemin se décide au dé, en écrivant leurs propres règles « si... alors... ».

Deux heures ne suffisaient pas pour mener chaque histoire à son terme. Pour que chaque enfant reparte avec un livre complet, dont il ou elle puisse être fier ou fière et avec lequel jouer, le LAB a mis en forme les huit histoires et fabriqué quinze livres, un par enfant. Chaque livre a une couverture en bois découpée et gravée au laser, un livret imprimé, un dé à monter et une fermeture à élastique. Cette page décrit la fabrication, dans la version A3 qui se monte sans massicot.

<PdfLink href="/pdf/projets-du-lab/Livre_laser_Fichiers_fabrication.zip">Fichiers de fabrication (zip)</PdfLink>

</div>

<img src="/img/ressources/projets-du-lab/lab-livre-laser/icone.png" alt="Livre à couverture découpée au laser" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## Le livre en un coup d'œil

Le livret est imprimé sur des feuilles A4 pliées en deux, sans coupe : chaque page fait 148,5 × 210 mm. La couverture est découpée dans une planche de bois A3, et une charnière faite de fentes lui permet de s'ouvrir comme un livre relié. À l'intérieur, un papier de couleur habille les deux plats avec une marge de bois tout autour. Le livret est collé par sa dernière page sur le plat arrière, une pochette garde le dé sur le plat avant, et le livre se ferme par une boucle d'élastique prise autour d'un bouton imprimé en 3D.

| Élément | Matériel par livre |
| --- | --- |
| Couverture | 1 planche de bois A3 de 2 mm, découpée et gravée au laser. La pièce fait 356 × 238 mm. |
| Papier de couleur | 1 rectangle de 346 × 228 mm, qui couvre tout l'intérieur, charnière comprise, coupé dans une feuille A3. |
| Livret | De 11 à 22 feuilles A4 imprimées en recto verso, retournement par le bord court. |
| Collage | Adhésif double face permanent ou colle en aérosol pour le papier de couleur, et 2 feuilles d'adhésif double face de 10 × 15 cm pour le livret. |
| Fermeture | 1 bouton imprimé en PLA, de la colle forte et environ 15 cm d'élastique rond. |
| Dé | 1 dé en papier Canson découpé au laser et 1 pochette en Canson, avec de la colle pour ses trois rabats. |

## La couverture, découpée et gravée au laser

La couverture se pose à plat dans la découpeuse, face gravée vers le haut, calée à 5 mm du coin d'une planche A3. Le contour, les deux trous de fermeture et les fentes de la charnière sont découpés ; les dessins et les textes sont gravés.

![La couverture A3 à plat, avec ses cotes](/img/ressources/projets-du-lab/lab-livre-laser/schema-livre-couverture-a3.svg)

Les codes du fichier sont les suivants :

| Dans le fichier | Couleur | Opération |
| --- | --- | --- |
| Trait de 0,1 mm | rouge `#FF0000` | découpe du contour et des deux trous |
| Trait de 0,1 mm | bleu `#0000FF` | découpe des fentes de la charnière |
| Aplat | noir `#000000` | gravure |

Chaque couverture est propre à son livre. Le plat avant porte le titre, dans la police du livre, la mention « Une histoire dont tu es le héros » et une scène de l'histoire tirée des dessins des enfants. Le plat arrière porte l'objet qui sert de dé dans l'histoire, la mention « Une histoire écrite et illustrée par » suivie des prénoms, un QR code vers la version en ligne du livre, et les logos des Méjanes et du LAB.

Pour que la gravure soit régulière et simple à régler, tout ce qui est gravé est une surface remplie, jamais un trait. Le fichier ne contient ni texte ni image : les textes sont convertis en tracés et les dessins sont vectorisés en aplats. Dans les scènes qui combinent gravure et découpe, chaque découpe mesure au moins 3 mm et laisse au moins 3 mm de bois autour d'elle, pour que le bois ne casse pas.

Le gabarit neutre fourni dans les fichiers de fabrication ne garde que le contour, les deux trous et la charnière : il suffit d'y ajouter son propre titre et ses dessins, en noir et en aplats.

### La charnière

La charnière est une bande de 27 mm entre les deux plats, découpée de 19 rangées de fentes espacées de 1,5 mm. Chaque fente mesure 35,4 mm et la suivante commence 3,7 mm plus bas. Une rangée sur deux est décalée d'une demi-fente : chaque pont de bois tombe face au milieu d'une fente voisine, et le bois se tord entre les fentes au lieu de casser. Le livre s'ouvre alors à plat.

![Détail de la charnière à fentes, à l'échelle](/img/ressources/projets-du-lab/lab-livre-laser/schema-charniere.svg)

:::info[Tester avant la série]

Avant de lancer toutes les couvertures, découper une pièce de test de la charnière dans une chute du même bois et vérifier qu'elle se plie à 180° sans casser.

:::

## Le livret

Le livret s'imprime en recto verso, avec retournement par le bord court, sans trait de coupe ni trait de pliure. On plie chaque feuille en deux, on emboîte les feuilles dans l'ordre d'impression, la première à l'extérieur, puis on marque bien le pli. Chaque page garde 16 mm de marge côté pli, pour que rien ne se perde dans le pli une fois le livret collé, et le texte n'est jamais imprimé en dessous de 11 points.

Les pages suivent toujours le même ordre : la couverture, le résumé, l'histoire, l'arbre de l'histoire, la page « Comment est née cette histoire » avec les fiches de l'atelier, puis la page qui invite à lire l'histoire en ligne. La dernière page reste blanche : c'est elle qui se colle sur la couverture.

## L'intérieur de la couverture

Couverture retournée, face gravée contre la table, le plat arrière se trouve à droite et le plat avant à gauche. Le papier de couleur couvre tout l'intérieur d'un seul tenant, charnière comprise, avec 5 mm de bois nu sur le tour. Le livret se pose sur le papier du plat arrière, avec une marge de 14 mm en haut, en bas et côté bord libre, son pli à 2 mm des fentes. La pochette du dé est centrée en largeur sur le plat avant, son pli du bas à 14 mm du bord, à la hauteur du bas du livret.

![La face intérieure : papier de couleur, livret et pochette du dé](/img/ressources/projets-du-lab/lab-livre-laser/schema-livre-interieur-a3.svg)

:::info[Pas de colle sur la charnière]

Le papier passe sur la charnière. Quand le livre se ferme, il se plisse un peu à cet endroit au lieu de se déchirer, à condition de ne pas mettre de colle sur la bande des fentes : il peut alors former une petite boucle. Collé sur les fentes, il bloquerait la charnière.

:::

## Le bouton et l'élastique

Les deux trous de fermeture sont à mi-hauteur de la couverture et à 8,5 mm du bord libre de chaque plat : une fois le livre fermé, ils se trouvent exactement l'un en face de l'autre. Le trou de 3 mm du plat arrière reçoit l'élastique, noué côté intérieur. Le trou de 5,2 mm du plat avant reçoit le tenon du bouton, qui le centre et le cale.

![Coupe du bouton posé sur le bois, à l'échelle](/img/ressources/projets-du-lab/lab-livre-laser/schema-livre-bouton.svg)

- **Tête** : 14 mm de diamètre, 3 mm d'épaisseur, chanfreinée côté visible.
- **Cou** : 7 mm de diamètre et 3 mm de haut, la place de l'élastique.
- **Évasement** : le cou s'élargit à 45° jusqu'à la collerette, ce qui permet d'imprimer sans support.
- **Collerette** : 13 mm de diamètre, dessous plat, collée sur le bois.
- **Tenon** : 5 mm de diamètre et 2 mm de long, l'épaisseur du bois.

Le bouton s'imprime en PLA, tête posée sur le plateau, sans support, avec un remplissage de 100 % pour que le cou ne casse pas. Un fichier regroupe 18 boutons sur un même plateau, de quoi équiper quinze livres avec trois boutons de rechange.

## Le dé et sa pochette

Le dé se découpe au laser dans du papier Canson, avec trois codes : rouge pour la découpe du contour (la croix des faces et les languettes, d'un seul tracé), vert `#00A000` pour un rainage à faible puissance qui marque les plis, et noir en aplat pour les dessins des faces. Les faces mesurent 29 mm, et deux faces opposées totalisent toujours 7.

La pochette, découpée dans le même papier, garde le dé à plat avant montage, avec environ 5 mm de jeu de chaque côté. Ses trois rabats (gauche, droit, bas) se replient derrière la face et se collent sur le bois. Le haut reste ouvert, avec une encoche pour attraper le dé avec le pouce, et les coins des rabats sont coupés à 45° pour qu'ils ne se chevauchent pas une fois repliés.

![Fichier laser de la pochette du dé : découpe en rouge, rainage en vert](/img/ressources/projets-du-lab/lab-livre-laser/laser-pochette-de.png)

## Les étapes de montage

1. Découper et graver la couverture, puis vérifier que la charnière se plie sans forcer.
2. Coller le bouton sur le plat avant : poncer légèrement le dessous de la collerette au papier fin, mettre de la colle forte dessous, enfoncer le tenon dans le trou de 5,2 mm depuis la face gravée, et laisser sécher la couverture à plat.
3. Couper le papier de couleur à 346 × 228 mm dans une feuille A3. L'encoller sur les deux plats, à 5 mm du bord du bois, en laissant la bande de la charnière sans colle. Refermer la couverture une fois avant que la colle prenne, pour que le papier se mette en place sur la pliure. Il recouvre aussi le bout du tenon du bouton.
4. Percer le papier du plat arrière au niveau du trou de l'élastique, avec une pointe ou une perforatrice simple. Passer les deux bouts de l'élastique par le trou depuis la face gravée et faire un gros nœud côté intérieur ; si l'élastique est fin, faire un double nœud pour qu'il ne repasse pas par le trou.
5. Poser deux feuilles d'adhésif double face sur la dernière page du livret, l'une au-dessus de l'autre, en largeur, puis recouper ce qui dépasse.
6. Placer le livret sur le plat arrière, le pli à 2 mm des fentes et à 14 mm du bord en haut, en bas et côté bord libre, puis appuyer sur toute la page.
7. Plier la pochette sur ses traits de rainage, mettre de la colle sur les trois rabats et la coller sur le plat avant, ouverture vers le haut.
8. Ranger le dé à plat dans la pochette, refermer le livre et ajuster la longueur de l'élastique pour que la boucle se prenne autour du bouton sans trop tirer.

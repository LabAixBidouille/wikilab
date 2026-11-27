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

## Présentation

En octobre 2026, le LAB a animé l'atelier « La quête du curry », annoncé au public sous le titre « Le livre dont tu es le héros », dans deux bibliothèques du réseau des Méjanes à Aix-en-Provence : les Deux Ormes le 27 octobre et Li Campaneto le 28 octobre. Des enfants de 8 à 12 ans y ont inventé une histoire à embranchements, dont le chemin se décide au dé, en écrivant leurs propres règles « si... alors... ».

Deux heures ne suffisaient pas pour mener chaque histoire à son terme. Pour que chaque enfant reparte avec un livre complet, dont il ou elle puisse être fier ou fière et avec lequel jouer, le LAB a mis en forme les huit histoires et fabriqué quinze livres, un par enfant. Chaque livre a une couverture en bois découpée et gravée au laser, un livret imprimé, un dé à monter et une fermeture à élastique. Cette page décrit la fabrication telle qu'elle a été menée, dans la version A3 qui se monte sans massicot, ainsi que les doutes et les changements de direction qui ont jalonné le projet.

<PdfLink href="/pdf/projets-du-lab/Livre_laser_Fichiers_fabrication.zip">Fichiers de fabrication (zip)</PdfLink>

</div>

<img src="/img/ressources/projets-du-lab/lab-livre-laser/icone.png" alt="Livre à couverture découpée au laser" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## Le livre en un coup d'œil

Le livret est imprimé sur des feuilles A4 coupées en deux, sans massicot : chaque page fait 148,5 × 210 mm. La couverture est découpée dans une planche de bois A3, et une charnière faite de fentes lui permet de s'ouvrir comme un livre relié. À l'intérieur, une feuille de papier de couleur couvre les deux plats. Le livret est collé par sa dernière page sur le plat arrière, une pochette garde le dé à plat sur le plat avant, sous une étiquette qui l'annonce, et le livre se ferme par un élastique pris autour d'un bouton imprimé en 3D.

![Une partie des quinze livres, plats avant gravés](/img/ressources/projets-du-lab/lab-livre-laser/photo-serie-de-livres.jpg)

| Élément | Matériel par livre |
| --- | --- |
| Couverture | 1 planche de bois A3 de 2 mm, découpée et gravée au laser. La pièce fait 356 × 240 mm. |
| Papier de couleur | 1 feuille de 320 × 240 mm, utilisée telle quelle, sans découpe. |
| Livret | De 11 à 22 feuilles A4 imprimées en recto verso, retournement par le bord court, coupées en deux et agrafées sur le bord. |
| Collage | Colle en aérosol pour le papier de couleur, adhésif double face permanent pour le dos du livret, et un roller de colle (Cléopâtre) pour la pochette et l'étiquette. |
| Fermeture | 1 bouton imprimé en PLA, de la colle forte et 1 élastique à cheveux en TPU d'environ 6 cm de tour au repos. |
| Dé | 1 dé à monter en papier Canson, 1 pochette et 1 étiquette « Ton dé à fabriquer », découpés au laser dans le même papier. |

## La couverture, découpée et gravée au laser

La couverture se pose à plat dans la découpeuse, face gravée vers le haut, calée à 5 mm du coin d'une planche A3. Le contour, les deux trous de fermeture et les fentes de la charnière sont découpés ; les dessins et les textes sont gravés.

![La couverture A3 à plat, avec ses cotes](/img/ressources/projets-du-lab/lab-livre-laser/schema-livre-couverture-a3.svg)

Les codes du fichier sont les suivants :

| Dans le fichier | Couleur | Opération |
| --- | --- | --- |
| Trait de 0,1 mm | rouge `#FF0000` | découpe du contour et des deux trous |
| Trait de 0,1 mm | bleu `#0000FF` | découpe des fentes de la charnière |
| Aplat | noir `#000000` | gravure |

Chaque couverture est propre à son livre. Le plat avant porte le titre, dans la police du livre, la mention « Une histoire dont tu es le héros » et une scène de l'histoire dessinée au trait. Le plat arrière porte un objet de l'histoire, la mention « Une histoire écrite et illustrée par » suivie des prénoms, un QR code vers la version en ligne du livre, et les logos des Méjanes et du LAB.

![Une couverture à plat après la découpe et la gravure, plat arrière à gauche, charnière au milieu, plat avant à droite](/img/ressources/projets-du-lab/lab-livre-laser/photo-couverture-a-plat.jpg)

![Le plat arrière d'un livre fermé : objet de l'histoire, prénoms, QR code et logos](/img/ressources/projets-du-lab/lab-livre-laser/photo-plat-arriere.jpg)

Pour que la gravure soit régulière et simple à régler, tout ce qui est gravé est une surface remplie, jamais un trait, en une seule teinte. Le fichier ne contient ni texte ni image : les textes sont convertis en tracés et les dessins sont vectorisés en aplats.

Le gabarit neutre fourni dans les fichiers de fabrication ne garde que le contour, les deux trous et la charnière : il suffit d'y ajouter son propre titre et ses dessins, en noir et en aplats.

### La charnière

La charnière est une bande de 27 mm entre les deux plats, découpée de 19 rangées de fentes espacées de 1,5 mm. Chaque fente mesure 35,4 mm et la suivante commence 3,7 mm plus bas. Une rangée sur deux est décalée d'une demi-fente : chaque pont de bois tombe face au milieu d'une fente voisine, et le bois se tord entre les fentes au lieu de casser. Le livre s'ouvre alors à plat.

![Détail de la charnière à fentes, à l'échelle](/img/ressources/projets-du-lab/lab-livre-laser/schema-charniere.svg)

:::info[Tester avant la série]

Avant de lancer toutes les couvertures, découper une pièce de test de la charnière dans une chute du même bois et vérifier qu'elle se plie à 180° sans casser.

:::

## Le livret

Le livret s'imprime en recto verso, avec retournement par le bord court, en taille réelle : si l'imprimante réduit la page pour l'ajuster aux marges, plus rien ne tombe au bon endroit. Chaque feuille A4 porte deux pages par face et, au recto, une marque de coupe au milieu, deux traits courts en haut et en bas.

On garde la pile de chaque livre dans l'ordre d'impression, la première feuille au-dessus, et on la coupe en deux d'un seul coup à la marque. La pile de gauche se pose sur celle de droite, sans rien retourner, et les demi-feuilles A5 se suivent dans l'ordre de lecture. On tape la pile sur la table pour aligner le dos, puis on agrafe trois fois le long du dos, à 6 mm du bord, avec une agrafeuse grande capacité dont le guide-papier est réglé une fois pour toutes. Chaque page garde 19 mm de marge côté dos, pour que le texte reste lisible malgré les agrafes, et le texte n'est jamais imprimé en dessous de 11 points. Pour finir, une bande du même papier de couleur que le fond de la couverture, pliée sur le dos du livret, cache les agrafes.

Les pages suivent toujours le même ordre : la couverture, le résumé, l'histoire, l'arbre de l'histoire, la page « Comment est née cette histoire » avec les fiches de l'atelier, puis la page qui invite à lire l'histoire en ligne. La dernière page reste blanche : c'est elle qui se colle sur la couverture.

![Un livret imprimé, coupé et agrafé sur le bord](/img/ressources/projets-du-lab/lab-livre-laser/photo-livret-agrafe.jpg)

:::info[Vérifier l'ordre de sortie]

Certaines imprimantes sortent les feuilles dans l'ordre inverse. Avant de couper, vérifier que la première feuille, celle qui porte la couverture du livret, est bien au-dessus de la pile. Pour une série de livres imprimés d'un seul fichier, séparer la pile livre par livre avant de couper, sinon les livres se mélangent.

:::

## L'intérieur de la couverture

Couverture retournée, face gravée contre la table, le plat arrière se trouve à droite et le plat avant à gauche. La feuille de papier de couleur couvre tout l'intérieur d'un seul tenant, charnière comprise : alignée sur le haut et le bas de la couverture, elle laisse une bande de bois nu de 18 mm le long de chaque bord libre. Le livret, la pochette et l'étiquette se posent tous à l'intérieur du papier de couleur, en gardant une marge de papier visible autour d'eux. Sur le plat arrière, le livret est calé à droite, côté bord libre. Sur le plat avant, la pochette du dé est centrée, et l'étiquette « Ton dé à fabriquer » est alignée en haut.

![La face intérieure : papier de couleur, livret, pochette du dé et étiquette](/img/ressources/projets-du-lab/lab-livre-laser/schema-livre-interieur-a3.svg)

![L'intérieur d'un livre monté, avec un papier noir : étiquette, pochette avec le dé qui dépasse, livret calé à droite](/img/ressources/projets-du-lab/lab-livre-laser/photo-interieur.jpg)

:::info[Pas de colle sur la charnière]

Le papier passe sur la charnière. Quand le livre se ferme, il se plisse un peu à cet endroit au lieu de se déchirer, à condition de ne pas mettre de colle sur la bande des fentes : il peut alors former une petite boucle. Collé sur les fentes, il bloquerait la charnière.

:::

## Le bouton et l'élastique

Les deux trous de fermeture sont à mi-hauteur de la couverture et à 8,5 mm du bord libre de chaque plat, dans la bande de bois nu : une fois le livre fermé, ils se trouvent exactement l'un en face de l'autre. Le trou de 3 mm du plat arrière reçoit l'élastique, un élastique à cheveux en TPU qu'on fait passer par le trou et dont les deux brins viennent se prendre ensemble autour du bouton. Le trou de 5,2 mm du plat avant reçoit le tenon du bouton, qui le centre et le cale pendant que la colle prend.

![Un livre fermé : l'élastique, passé par le trou du plat arrière, tient le bouton du plat avant](/img/ressources/projets-du-lab/lab-livre-laser/photo-livre-ferme.jpg)

![Coupe du bouton posé sur le bois, à l'échelle](/img/ressources/projets-du-lab/lab-livre-laser/schema-livre-bouton.svg)

- **Tête** : 14 mm de diamètre, 3 mm d'épaisseur, chanfreinée côté visible.
- **Cou** : 7 mm de diamètre et 3 mm de haut, la place de l'élastique.
- **Évasement** : le cou s'élargit à 45° jusqu'à la collerette, ce qui permet d'imprimer sans support.
- **Collerette** : 13 mm de diamètre, dessous plat, collée sur le bois.
- **Tenon** : 5 mm de diamètre et 2 mm de long, l'épaisseur du bois.

Le bouton s'imprime en PLA, tête posée sur le plateau, sans support, avec un remplissage de 100 % pour que le cou ne casse pas. Un fichier regroupe 18 boutons sur un même plateau, de quoi équiper quinze livres avec trois boutons de rechange.

## Le dé, sa pochette et son étiquette

Le dé se découpe et se grave au laser dans du papier Canson, et se livre à plat, à monter. Son patron n'est pas la croix habituelle, mais deux colonnes de trois faces décalées : il ne fait que deux faces de large pour cinq de haut, soit 62 × 131 mm avec des faces de 25 mm. Il entre ainsi dans la pochette et en dépasse d'environ 20 mm, ce qui permet de le voir et de l'attraper. Deux faces opposées totalisent toujours 7, et chaque livre a ses propres motifs à la place des points : pattes de loup, diamants, ballons, œufs, tenons de brique ou ronds.

![Fichier laser du dé : découpe, pliures et gravure](/img/ressources/projets-du-lab/lab-livre-laser/laser-de.png)

Dans LightBurn, le LAB a regroupé les quinze dés sur trois feuilles A4 de Canson, avec trois calques :

| Couleur | Calque | Opération |
| --- | --- | --- |
| orange `#FF8000` | ligne | découpe du contour |
| vert `#00A000` | pliure | rainage à faible puissance, juste assez pour marquer le pli |
| cyan `#00E0E0` | remplissage | gravure des filets et des motifs |

La pochette, découpée dans le même papier, est plate : une face de 95 × 110 mm et trois rabats de 7 mm, à gauche, à droite et en bas, qui se replient derrière elle et se collent sur le papier de couleur, soit 109 × 117 mm à plat. Le haut reste ouvert, avec une encoche pour le pouce, et les coins des rabats sont coupés à 45° pour qu'ils ne se chevauchent pas une fois repliés.

![Fichier laser de la pochette du dé : découpe en rouge, pliures en vert](/img/ressources/projets-du-lab/lab-livre-laser/laser-pochette-de.png)

L'étiquette, de 76 × 44 mm, se colle au-dessus de la pochette. Elle porte « Ton dé à fabriquer » sur deux lignes alignées à droite, dans la police du titre du livre, une flèche en boucle qui descend vers la pochette, avec un contour et des hachures en diagonale, et l'objet du dos de la couverture. La version neutre des fichiers de fabrication laisse la place de l'objet libre.

![Dés et étiquettes en Canson à la sortie de la découpe](/img/ressources/projets-du-lab/lab-livre-laser/photo-des-et-etiquettes.jpg)

![Une étiquette « Ton dé à fabriquer », telle qu'elle est gravée](/img/ressources/projets-du-lab/lab-livre-laser/laser-etiquette-ton-de.png)

## Les étapes de montage

1. Découper et graver la couverture, puis vérifier que la charnière se plie sans forcer.
2. Coller le bouton sur le plat avant : poncer légèrement le dessous de la collerette au papier fin, mettre de la colle forte dessous, enfoncer le tenon dans le trou de 5,2 mm depuis la face gravée, et laisser sécher la couverture à plat.
3. Encoller la feuille de papier de couleur à la colle en aérosol sur les deux plats, alignée sur le haut et le bas de la couverture et à 18 mm de chaque bord libre, en laissant la bande de la charnière sans colle. Refermer la couverture une fois avant que la colle prenne, pour que le papier se mette en place sur la pliure.
4. Passer l'élastique par le trou du plat arrière, puis vérifier, livre fermé, que ses deux brins se prennent autour du bouton avec une légère tension.
5. Imprimer, couper et agrafer le livret, puis coller sur son dos une bande du papier de couleur, pliée en deux, pour cacher les agrafes. Poser ensuite de l'adhésif double face permanent sur sa dernière page et recouper ce qui dépasse.
6. Placer le livret sur le plat arrière, à l'intérieur du papier de couleur, calé à droite avec une marge de papier visible, puis appuyer sur toute la page.
7. Plier les trois rabats de la pochette vers l'arrière sur leurs traits de pliure, passer le roller de colle sur les rabats seulement et la coller au centre du papier du plat avant, ouverture vers le haut.
8. Coller l'étiquette au roller au-dessus de la pochette, alignée en haut, la flèche vers la pochette.
9. Glisser le dé à plat dans la pochette et refermer le livre en passant l'élastique autour du bouton.

## Doutes et changements de direction

Le livre n'a pas été conçu d'un seul trait. Plusieurs choix ont été remis en cause en cours de fabrication, souvent après un essai, et la version décrite plus haut est le résultat de ces allers-retours. Les garder en mémoire évite de refaire les mêmes détours.

La première version était prévue sur des planches de bois A4. La couverture mesurait alors 290 × 194 mm, et les pages, imprimées en A4 et coupées au massicot à 124 × 184 mm, devaient tenir dans une zone intérieure de 280 × 184 mm ; une première mise en page à 186 mm de haut a d'ailleurs dû être reprise de deux millimètres. Quand le LAB a pu se procurer du bois en A3, il a choisi une version sans massicot, aux pages A5 entières, et la version A4 a été gardée de côté.

Sur la couverture, les premiers essais associaient gravure et ajourages, des découpes décoratives dans le plat avant. L'équipe les a finalement retirés pour ne garder que la gravure. Au dos, les premiers dessins, trop fins et trop complexes, passaient mal à la laser : ils ont été remplacés par des images au trait plus franc. Les premières gravures en deux nuances, noir et gris, ont aussi laissé la place à une seule teinte, plus simple à régler.

La fixation du livret a beaucoup évolué. La maquette d'origine prévoyait des vis de relieur traversant la couverture et les pages ; le LAB a préféré coller le livret par sa dernière page sur le plat arrière, ce qui supprimait le perçage des pages. Restait à tenir les feuilles entre elles. Le cahier plié et agrafé au milieu était le plus rapide, mais l'essai sur le plus gros livret, de 22 feuilles, a montré un vrai décalage : les feuilles du milieu dépassaient nettement côté bord libre, et sans massicot ce décalage ne se rattrape pas. Un mécanisme de classeur à anneaux a été envisagé, mais il obligeait à recalculer le dos de la couverture et à percer toutes les pages, et l'agrafeuse a paru plus simple ; une couture au fil, plus belle, a été écartée faute de temps, et un dos collé a été préparé sans être retenu. Le choix final, des demi-feuilles agrafées sur le bord avec une marge élargie côté dos, garde des bords parfaitement alignés quelle que soit l'épaisseur du livret.

La fermeture a connu le même tâtonnement. La couverture a d'abord eu deux trous pour l'élastique, puis un seul. Pour le bouton, un rivet pris entre une collerette et une rondelle a été proposé pour renforcer le collage, mais le LAB a préféré essayer d'abord un simple collage d'un seul côté, à la colle forte, qui a suffi. Le tenon a été retiré, puis remis à 2 mm, la longueur de l'épaisseur du bois, parce qu'il centre le bouton et l'empêche de glisser pendant que la colle prend. Le premier bouton s'imprimait mal, la collerette étant en surplomb à plat autour du cou ; l'évasement à 45° a réglé le problème. Côté élastique, un cordon rond de 2 mm noué à l'intérieur a d'abord été prévu, puis le LAB a retenu des élastiques à cheveux passés par le trou. Des anneaux de 5 cm de diamètre se sont révélés deux fois trop longs pour tenir le livre fermé : il faut des anneaux d'environ 6 cm de tour au repos, qui se tendent un peu autour du bouton.

L'intérieur a changé une fois le papier de couleur acheté. Le papier devait d'abord être découpé au laser, avec 5 mm de bois nu tout autour et une encoche pour le trou de l'élastique. Le papier disponible mesurant 320 × 240 mm, il a semblé plus simple de ne pas le recouper : la couverture a été portée à 240 mm de haut pour que la feuille s'aligne sur le haut et le bas, et le trou de l'élastique est passé dans le bois nu. Au montage, le livret, la pochette et l'étiquette ont finalement été posés tous à l'intérieur du papier, avec une marge, plutôt qu'à cheval sur son bord comme prévu sur le schéma de départ ; chaque petit élément a trouvé sa colle, de l'aérosol pour la grande feuille au roller pour les petits papiers.

Le dé et sa pochette ont demandé le plus d'essais. La pochette prévue au départ, avec des rabats et du jeu autour d'un dé à faces de 29 mm, a été simplifiée en une pochette plate, puis réduite pour tenir sous l'étiquette. Le dé a suivi, avec des faces de 24 mm, mais une fois les pochettes collées, le dé glissait tout au fond et ne dépassait plus : on risquait de le perdre et on ne pouvait plus le sortir. Plutôt que de décoller les pochettes, le LAB a changé le patron du dé pour un patron étroit et haut, qui dépasse d'une vingtaine de millimètres.

L'étiquette est passée par plusieurs versions avant d'être retenue : un texte seul sur une ou deux lignes, puis un dé dessiné en perspective, une flèche droite et une étiquette en forme de flèche, qui ne convenaient pas. La version finale reprend des éléments de la couverture, la police du titre et l'objet du dos réduit tel quel, avec une flèche en boucle hachurée. Un texte trop petit, puis un texte épaissi pour la gravure, se sont révélés moins lisibles qu'un texte plus grand dans sa graisse normale.

Enfin, à l'impression, la couverture de deux livrets est sortie avec un cadre foncé sous le titre, invisible à l'écran : l'imprimante rendait mal les ombres et les voiles semi-transparents de la page. Seule la première feuille de ces livrets a été réimprimée, avec une couverture convertie en image, sans aucune transparence.

## Ce qui reste à améliorer

Une fois les quinze livres montés, l'équipe a fait le point sur ce qui pourrait être mieux fait la prochaine fois.

La fermeture par élastique et bouton fonctionne, mais elle n'est pas pratique : l'élastique est minutieux à défaire du bouton pour ouvrir le livre. Une autre fermeture, plus facile à manipuler, mériterait d'être cherchée.

Le collage a donné satisfaction, qu'il s'agisse du papier de couleur, du livret ou des petits éléments.

L'agrafage sur le bord fait le travail, mais le résultat n'est pas très soigné. Une reliure plus belle reste à trouver, à condition qu'elle reste rapide à réaliser pour une série de livres.

Enfin, une feuille de papier de couleur plus grande, coupée à la taille de l'intérieur de la couverture, donnerait un intérieur plus joli que la feuille de 320 × 240 mm utilisée telle quelle, qui laisse le bois nu le long des bords libres.

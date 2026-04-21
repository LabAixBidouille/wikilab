---
id: bambu-x1-carbon
title: "Bambu Lab X1-Carbon — Guide d'utilisation"
sidebar_label: "Bambu Lab X1-Carbon"
sidebar_position: 1
---

# Bambu Lab X1-Carbon

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Impression 3D</span>
  <span className="badge badge--info">FDM</span>
</div>

**Type** : FDM (dépot de filament fondu) -- Core XY  
**Volume d'impression** : 256 x 256 x 256 mm  
**Vitesse maximale** : 500 mm/s  
**Difficulte** : Debutant

---

## Presentation

La Bambu Lab X1-Carbon est une imprimante 3D FDM rapide a cinematique Core XY. Elle atteint des vitesses d'impression tres elevees (jusqu'a 500 mm/s) tout en conservant une bonne precision. Le chassis en aluminium et carbone assure la rigidite necessaire a ces performances.

Le principe est simple : un filament plastique est chauffe puis depose couche par couche pour construire un objet en trois dimensions. Ce qui distingue la X1-Carbon, c'est son systeme AMS (Automatic Material System) qui permet d'imprimer avec jusqu'a quatre couleurs ou materiaux differents en une seule impression.

Cette machine est ideale pour produire des prototypes fonctionnels, des pieces mecaniques, des objets decoratifs multicolores ou encore des boitiers electroniques. Sa calibration automatique du plateau et sa camera de surveillance integree en font une machine particulierement accessible, meme pour les debutants.

## Avant de commencer

:::info[**Securite et bonnes pratiques**]
- Ne pas toucher la buse pendant et apres l'impression : elle atteint plus de 250 °C.
- Lors de l'impression d'ABS ou de PA, garder le capot ferme et assurer une ventilation correcte de la piece.
- Ne pas forcer sur le plateau flexible PEI pour retirer les pieces. Attendre le refroidissement complet.
- Verifier que l'AMS est correctement charge avant de lancer une impression multicolore.
:::

## Materiel necessaire

- Un fichier 3D au format STL, OBJ ou 3MF
- Le logiciel **Bambu Studio** installe sur votre poste (gratuit, disponible sur bambulab.com)
- Le filament adapte, deja charge dans l'AMS ou en bobine directe (PLA, PETG, ABS, TPU, PA)

## Materiaux compatibles

| Materiau | Temperature buse | Temperature plateau | Proprietes | Usages typiques |
|---|---|---|---|---|
| **PLA** | 200-220 °C | 50-60 °C | Facile a imprimer, rigide, biodegradable. Faible resistance thermique (~60 °C). | Prototypage, objets decoratifs, maquettes |
| **PETG** | 230-250 °C | 70-80 °C | Bonne resistance mecanique et chimique, legerement flexible. | Pieces fonctionnelles, contenants alimentaires |
| **ABS** | 240-260 °C | 100-110 °C | Resistant aux chocs et a la chaleur. Degage des vapeurs, enceinte fermee recommandee. | Boitiers, pieces mecaniques, prototypes automobiles |
| **TPU** | 220-240 °C | 50-60 °C | Souple et elastique. Impression lente recommandee. | Coques de telephone, joints, semelles |
| **PA (Nylon)** | 250-270 °C | 70-90 °C | Tres resistant a l'usure et aux chocs. Tres hygroscopique. | Engrenages, charnieres, pieces mecaniques |
| **PLA-CF** | 220-240 °C | 50-60 °C | PLA charge en fibres de carbone. Plus rigide et resistant que le PLA standard. Abrasif pour la buse. | Pieces structurelles legeres, drones, outillage |
| **PA-CF** | 270-290 °C | 80-100 °C | Nylon charge en fibres de carbone. Excellent rapport rigidite/poids. Necessite une buse durcie. | Pieces mecaniques haute performance, outillage industriel |

:::note[**Conseils pour le choix du materiau**]
- **Debutant ?** Commencez par le **PLA** : il pardonne les erreurs de reglage et ne necessite pas d'enceinte fermee.
- **Piece fonctionnelle ?** Le **PETG** offre le meilleur compromis solidite/facilite d'impression.
- **Resistance thermique ?** L'**ABS** ou le **PA** supportent des temperatures plus elevees mais necessitent une enceinte fermee et une bonne ventilation.
- **Materiaux composites** : la X1-Carbon dispose d'une buse durcie, ce qui lui permet d'imprimer les filaments charges en fibres (PLA-CF, PA-CF) sans usure prematuree.
- **Stockage** : tous les filaments sont sensibles a l'humidite. Rangez-les dans un sac hermetique avec du dessiccant.
:::

---

## Etape 1 -- Preparer le fichier

Ouvrez **Bambu Studio** et importez votre fichier 3D. Selectionnez le profil machine "Bambu Lab X1-Carbon" dans les parametres d'imprimante.

Reglez les parametres principaux :
- **Hauteur de couche** : 0.20 mm pour un bon compromis vitesse/qualite, 0.12 mm pour du detail fin.
- **Remplissage** : 15 a 20 % pour les objets decoratifs, 40 % ou plus pour les pieces fonctionnelles.
- **Supports** : activez-les si votre piece comporte des surplombs de plus de 45 degres.
- **Filament** : selectionnez le type de filament correspondant a celui charge dans l'AMS.

Si vous utilisez l'AMS pour une impression multicolore, assignez les couleurs aux differentes parties du modele directement dans Bambu Studio. Cliquez sur "Slice" pour decouper le modele, puis envoyez-le a l'imprimante via le reseau Wi-Fi ou par carte micro-SD.

## Etape 2 -- Preparer la machine

La X1-Carbon effectue la calibration automatique du plateau (auto bed leveling) a chaque impression. Verifiez simplement que :
- Le plateau PEI texture est propre. Nettoyez-le avec un chiffon doux et un peu d'alcool isopropylique si necessaire.
- Le ou les filaments sont correctement charges dans l'AMS (voyants verts).
- Le capot est ferme, surtout pour l'ABS ou le PA.

Aucun reglage manuel du plateau n'est requis.

## Etape 3 -- Lancer l'impression

Depuis Bambu Studio ou l'ecran tactile de l'imprimante, selectionnez votre fichier et lancez l'impression. La machine effectuera automatiquement sa calibration, puis commencera le depot de la premiere couche.

Surveillez les premieres couches pour verifier la bonne adherence au plateau. Vous pouvez suivre la progression a distance grace a la camera integree, accessible depuis l'application Bambu Handy ou Bambu Studio.

## Etape 4 -- Retirer et finaliser la piece

Attendez que le plateau refroidisse completement (en dessous de 30 °C). La piece devrait se decoller facilement du plateau PEI texture. Si ce n'est pas le cas, retirez le plateau flexible et deformez-le legerement pour decoller la piece.

Retirez les supports manuellement ou a l'aide d'une pince coupante. Poncez les traces de support si necessaire. Pour les impressions multicolores, verifiez la tour de purge (purge tower) et jetez-la.

---

## Conseils et astuces

:::tip[**Pour de meilleurs resultats**]
- Utilisez les profils predefinis de Bambu Studio avant de modifier les parametres : ils sont tres bien optimises.
- Pour une meilleure adherence avec le PETG, appliquez un peu de colle en baton sur le plateau PEI texture pour eviter que la piece ne colle trop fort.
- Stockez vos filaments dans un endroit sec ou utilisez un deshydrateur : l'humidite degrade la qualite d'impression, surtout pour le PA et le TPU.
- Profitez de la vitesse de la machine pour les prototypes rapides, et reduisez la vitesse pour les pieces necessitant un etat de surface parfait.
- Nettoyez regulierement la buse avec une aiguille d'acupuncture fournie si vous constatez une sous-extrusion.
:::

## Aller plus loin

- [Wiki officiel Bambu Lab](https://wiki.bambulab.com/) -- Documentation technique complete
- [Bambu Studio -- Telechargement et documentation](https://bambulab.com/en/download/studio) -- Logiciel de decoupe officiel
- [Forum communautaire Bambu Lab](https://forum.bambulab.com/) -- Entraide et partage de profils

---

<div style={{textAlign: 'center', marginTop: '2rem', fontSize: '0.85rem', opacity: 0.6}}>
Wiki@LAB -- L.A.B · Licence CC BY-SA 4.0
</div>

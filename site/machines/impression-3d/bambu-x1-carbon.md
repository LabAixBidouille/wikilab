---
id: bambu-x1-carbon
title: "Bambu Lab X1-Carbon — Guide d'utilisation"
sidebar_label: "Bambu Lab X1-Carbon"
sidebar_position: 1
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Bambu Lab X1-Carbon

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Impression 3D</span>
  <span className="badge badge--info">FDM</span>
</div>

**Type** : FDM (dépot de filament fondu) — Core XY  
**Volume d'impression** : 256 x 256 x 256 mm  
**Vitesse maximale** : 500 mm/s  
**Difficulté** : Débutant

</div>

<img src="/img/photos/machines/PXL_20260420_084443907.jpg" alt="Bambu Lab X1-Carbon" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0, borderRadius: '10px', background: '#f5f5f5', padding: '0.5rem'}} />

</div>

---

## Présentation

La Bambu Lab X1-Carbon est une imprimante 3D FDM rapide à cinématique Core XY. Elle atteint des vitesses d'impression très élevées (jusqu'à 500 mm/s) tout en conservant une bonne précision. Le châssis en aluminium et carbone assure la rigidité nécessaire à ces performances.

Le principe est simple : un filament plastique est chauffé puis déposé couche par couche pour construire un objet en trois dimensions. Ce qui distingue la X1-Carbon, c'est son système AMS (Automatic Material System) qui permet d'imprimer avec jusqu'à quatre couleurs ou matériaux différents en une seule impression.

Cette machine est idéale pour produire des prototypes fonctionnels, des pièces mécaniques, des objets décoratifs multicolores ou encore des boîtiers électroniques. Sa calibration automatique du plateau et sa caméra de surveillance intégrée en font une machine particulièrement accessible, même pour les débutants.

## Avant de commencer

:::info[**Sécurité et bonnes pratiques**]
- Ne pas toucher la buse pendant et après l'impression : elle atteint plus de 250 °C.
- Lors de l'impression d'ABS ou de PA, garder le capot fermé et assurer une ventilation correcte de la pièce.
- Ne pas forcer sur le plateau flexible PEI pour retirer les pièces. Attendre le refroidissement complet.
- Vérifier que l'AMS est correctement chargé avant de lancer une impression multicolore.
:::

## Matériel nécessaire

- Un fichier 3D au format STL, OBJ ou 3MF
- Le logiciel **Bambu Studio** installé sur votre poste (gratuit, disponible sur bambulab.com)
- Le filament adapté, déjà chargé dans l'AMS ou en bobine directe (PLA, PETG, ABS, TPU, PA)

## Matériaux compatibles

| Matériau | Température buse | Température plateau | Propriétés | Usages typiques |
|---|---|---|---|---|
| **PLA** | 200-220 °C | 50-60 °C | Facile à imprimer, rigide, biodégradable. Faible résistance thermique (≈60 °C). | Prototypage, objets décoratifs, maquettes |
| **PETG** | 230-250 °C | 70-80 °C | Bonne résistance mécanique et chimique, légèrement flexible. | Pièces fonctionnelles, contenants alimentaires |
| **ABS** | 240-260 °C | 100-110 °C | Résistant aux chocs et à la chaleur. Dégage des vapeurs, enceinte fermée recommandée. | Boîtiers, pièces mécaniques, prototypes automobiles |
| **TPU** | 220-240 °C | 50-60 °C | Souple et élastique. Impression lente recommandée. | Coques de téléphone, joints, semelles |
| **PA (Nylon)** | 250-270 °C | 70-90 °C | Très résistant à l'usure et aux chocs. Très hygroscopique. | Engrenages, charnières, pièces mécaniques |
| **PLA-CF** | 220-240 °C | 50-60 °C | PLA chargé en fibres de carbone. Plus rigide et résistant que le PLA standard. Abrasif pour la buse. | Pièces structurelles légères, drones, outillage |
| **PA-CF** | 270-290 °C | 80-100 °C | Nylon chargé en fibres de carbone. Excellent rapport rigidité/poids. Nécessite une buse durcie. | Pièces mécaniques haute performance, outillage industriel |

:::note[**Conseils pour le choix du matériau**]
- **Débutant ?** Commencez par le **PLA** : il pardonne les erreurs de réglage et ne nécessite pas d'enceinte fermée.
- **Pièce fonctionnelle ?** Le **PETG** offre le meilleur compromis solidité/facilité d'impression.
- **Résistance thermique ?** L'**ABS** ou le **PA** supportent des températures plus élevées mais nécessitent une enceinte fermée et une bonne ventilation.
- **Matériaux composites** : la X1-Carbon dispose d'une buse durcie, ce qui lui permet d'imprimer les filaments chargés en fibres (PLA-CF, PA-CF) sans usure prématurée.
- **Stockage** : tous les filaments sont sensibles à l'humidité. Rangez-les dans un sac hermétique avec du dessiccant.
:::

---

## Étape 1 — Préparer le fichier

Ouvrez **Bambu Studio** et importez votre fichier 3D. Sélectionnez le profil machine "Bambu Lab X1-Carbon" dans les paramètres d'imprimante.

Réglez les paramètres principaux :
- **Hauteur de couche** : 0.20 mm pour un bon compromis vitesse/qualité, 0.12 mm pour du détail fin.
- **Remplissage** : 15 à 20 % pour les objets décoratifs, 40 % ou plus pour les pièces fonctionnelles.
- **Supports** : activez-les si votre pièce comporte des surplombs de plus de 45 degrés.
- **Filament** : sélectionnez le type de filament correspondant à celui chargé dans l'AMS.

Si vous utilisez l'AMS pour une impression multicolore, assignez les couleurs aux différentes parties du modèle directement dans Bambu Studio. Cliquez sur "Slice" pour découper le modèle, puis envoyez-le à l'imprimante via le réseau Wi-Fi ou par carte micro-SD.

## Étape 2 — Préparer la machine

La X1-Carbon effectue la calibration automatique du plateau (auto bed leveling) à chaque impression. Vérifiez simplement que :
- Le plateau PEI texturé est propre. Nettoyez-le avec un chiffon doux et un peu d'alcool isopropylique si nécessaire.
- Le ou les filaments sont correctement chargés dans l'AMS (voyants verts).
- Le capot est fermé, surtout pour l'ABS ou le PA.

Aucun réglage manuel du plateau n'est requis.

## Étape 3 — Lancer l'impression

Depuis Bambu Studio ou l'écran tactile de l'imprimante, sélectionnez votre fichier et lancez l'impression. La machine effectuera automatiquement sa calibration, puis commencera le dépôt de la première couche.

Surveillez les premières couches pour vérifier la bonne adhérence au plateau. Vous pouvez suivre la progression à distance grâce à la caméra intégrée, accessible depuis l'application Bambu Handy ou Bambu Studio.

## Étape 4 — Retirer et finaliser la pièce

Attendez que le plateau refroidisse complètement (en dessous de 30 °C). La pièce devrait se décoller facilement du plateau PEI texturé. Si ce n'est pas le cas, retirez le plateau flexible et déformez-le légèrement pour décoller la pièce.

Retirez les supports manuellement ou à l'aide d'une pince coupante. Poncez les traces de support si nécessaire. Pour les impressions multicolores, vérifiez la tour de purge (purge tower) et jetez-la.

---

## Conseils et astuces

:::info[**Pour de meilleurs résultats**]
- Utilisez les profils prédéfinis de Bambu Studio avant de modifier les paramètres : ils sont très bien optimisés.
- Pour une meilleure adhérence avec le PETG, appliquez un peu de colle en bâton sur le plateau PEI texturé pour éviter que la pièce ne colle trop fort.
- Stockez vos filaments dans un endroit sec ou utilisez un déshydrateur : l'humidité dégrade la qualité d'impression, surtout pour le PA et le TPU.
- Profitez de la vitesse de la machine pour les prototypes rapides, et réduisez la vitesse pour les pièces nécessitant un état de surface parfait.
- Nettoyez régulièrement la buse avec une aiguille d'acupuncture fournie si vous constatez une sous-extrusion.
:::

## Aller plus loin

- [Wiki officiel Bambu Lab](https://wiki.bambulab.com/) — Documentation technique complète
- [Bambu Studio — Téléchargement et documentation](https://bambulab.com/en/download/studio) — Logiciel de découpe officiel
- [Forum communautaire Bambu Lab](https://forum.bambulab.com/) — Entraide et partage de profils

---

<div style={{textAlign: 'center', marginTop: '2rem', fontSize: '0.85rem', opacity: 0.6}}>
Wiki@LAB — L.A.B · Licence CC BY-SA 4.0
</div>

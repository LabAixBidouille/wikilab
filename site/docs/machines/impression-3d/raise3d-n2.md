---
id: raise3d-n2
title: "Raise3D N2 — Guide d'utilisation"
sidebar_label: "Raise3D N2"
sidebar_position: 3
---

# Raise3D N2

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Impression 3D</span>
  <span className="badge badge--info">FDM</span>
</div>

**Type** : FDM (dépot de filament fondu) — Double extrusion  
**Volume d'impression** : 305 x 305 x 305 mm  
**Extrusion** : Double tête indépendante  
**Difficulté** : Intermédiaire

---

## Présentation

La Raise3D N2 est une imprimante 3D FDM semi-professionnelle à double extrusion indépendante. Ses deux têtes d'impression permettent d'utiliser deux matériaux ou deux couleurs simultanément, ce qui ouvre des possibilités créatives et techniques intéressantes.

Le cas d'usage le plus courant de la double extrusion est l'utilisation d'un matériau de support soluble (comme le PVA ou le HIPS). Le matériau principal forme la pièce, tandis que le second matériau forme les supports, qui se dissolvent ensuite dans l'eau (PVA) ou dans du limonène (HIPS). Le résultat est une pièce avec des surfaces lisses là où se trouvaient les supports.

Avec son volume d'impression cubique de 305 mm de côté, son enceinte fermée et son écran tactile 7 pouces, la N2 convient aux prototypes fonctionnels, aux pièces à géométrie complexe et aux impressions bicolores.

## Avant de commencer

:::info[**Sécurité et bonnes pratiques**]
- Les deux buses atteignent des températures supérieures à 250 °C. Ne jamais toucher les têtes d'impression pendant ou après l'impression.
- Garder la porte fermée lors de l'impression d'ABS pour éviter le warping et limiter les émanations.
- Lors de l'utilisation de HIPS comme support, la dissolution dans le limonène doit se faire dans un local ventilé.
- Vérifier que la tête inactive ne frotte pas sur la pièce en cours d'impression (réglage du Z-offset entre les deux buses).
:::

## Matériel nécessaire

- Un fichier 3D au format STL, OBJ ou 3MF
- Le logiciel **ideaMaker** (gratuit, développé par Raise3D)
- Deux bobines de filament 1.75 mm si vous utilisez la double extrusion (ex. PLA + PVA)
- Une spatule et une pince coupante pour le retrait des pièces et supports

## Matériaux compatibles

| Matériau | Température buse | Température plateau | Propriétés | Usages typiques |
|---|---|---|---|---|
| **PLA** | 200-220 °C | 50-60 °C | Facile à imprimer, rigide, biodégradable. Faible résistance thermique (≈60 °C). | Prototypage, objets décoratifs, maquettes |
| **PETG** | 230-250 °C | 70-80 °C | Bonne résistance mécanique et chimique, légèrement flexible. | Pièces fonctionnelles, contenants alimentaires |
| **ABS** | 240-260 °C | 100-110 °C | Résistant aux chocs et à la chaleur. Dégage des vapeurs, enceinte fermée recommandée. | Boîtiers, pièces mécaniques, prototypes automobiles |
| **TPU** | 220-240 °C | 50-60 °C | Souple et élastique. Impression lente recommandée. | Coques de téléphone, joints, semelles |
| **PVA** | 190-210 °C | 50-60 °C | Soluble dans l'eau. Utilisé comme matériau de support avec la double extrusion. | Supports solubles pour géométries complexes |
| **HIPS** | 230-250 °C | 100-110 °C | Soluble dans le d-limonène. Alternative au PVA pour les supports solubles. | Supports solubles, compatible avec l'ABS |

:::note[**Conseils pour le choix du matériau**]
- **Débutant ?** Commencez par le **PLA** : il pardonne les erreurs de réglage et ne nécessite pas d'enceinte fermée.
- **Pièce fonctionnelle ?** Le **PETG** offre le meilleur compromis solidité/facilité d'impression.
- **Résistance thermique ?** L'**ABS** supporte des températures plus élevées mais nécessite une enceinte fermée et une bonne ventilation.
- **Supports solubles** : la double extrusion de la N2 permet d'utiliser du **PVA** (soluble dans l'eau) ou du **HIPS** (soluble dans le limonène) comme matériau de support. Le résultat est une pièce sans aucune trace de support.
- **Stockage** : tous les filaments sont sensibles à l'humidité. Le PVA est particulièrement hygroscopique : rangez-le impérativement dans un sac hermétique avec du dessiccant.
:::

---

## Étape 1 — Préparer le fichier

Ouvrez **ideaMaker** et sélectionnez le profil "Raise3D N2" dans la liste des imprimantes. Importez votre modèle 3D.

Pour une impression simple (une seule tête), configurez normalement :
- **Hauteur de couche** : 0.20 mm pour un usage courant, 0.10 mm pour du détail.
- **Remplissage** : 20 % pour les objets standards, plus pour les pièces mécaniques.

Pour une impression double extrusion :
- Assignez l'extrudeur gauche au matériau principal et l'extrudeur droit au matériau de support.
- Activez les supports et choisissez "Extrudeur 2" pour le matériau de support.
- Activez la **tour de purge** (prime tower) dans les paramètres : elle est indispensable pour garantir une extrusion propre lors des changements de tête.

Exportez le G-code sur une clé USB ou envoyez-le via le réseau Wi-Fi intégré.

## Étape 2 — Préparer la machine

Effectuez le nivellement du plateau depuis le menu de l'écran tactile. L'assistant vous guidera pour régler les quatre coins du plateau avec la méthode de la feuille de papier.

Chargez les filaments dans les deux extrudeurs via le menu "Filament" de l'écran tactile. Purgez chaque tête pour vérifier que le filament coule correctement. Si vous n'utilisez qu'une seule tête, il est recommandé de retirer le filament de la seconde pour éviter les coulures.

Nettoyez le plateau avec de l'alcool isopropylique. Appliquez de la colle en bâton si nécessaire (recommandé pour le PETG et l'ABS).

## Étape 3 — Lancer l'impression

Depuis l'écran tactile ou via l'interface web RaiseCloud, sélectionnez votre fichier et lancez l'impression. L'imprimante préchauffera les deux buses et le plateau automatiquement.

Surveillez la première couche attentivement. En double extrusion, vérifiez aussi que la tour de purge s'imprime correctement : elle garantit la propreté des changements de tête. Si vous constatez des fils entre les deux matériaux, ajustez la rétraction dans ideaMaker.

## Étape 4 — Retirer et finaliser la pièce

Attendez le refroidissement du plateau, puis retirez la pièce à la spatule. Retirez la tour de purge et jetez-la.

Si vous avez utilisé du PVA comme support, plongez la pièce dans un bac d'eau tiède pendant 2 à 12 heures selon l'épaisseur des supports. Remuez l'eau régulièrement pour accélérer la dissolution. Pour le HIPS, utilisez du limonène (d-limonène) à la place de l'eau.

Pour les supports classiques en PLA, retirez-les manuellement et poncez les traces résiduelles.

---

## Conseils et astuces

:::tip[**Pour de meilleurs résultats**]
- Calibrez soigneusement le décalage XY entre les deux buses (dans les paramètres machine) pour un alignement parfait des couleurs.
- Le PVA est hygroscopique : stockez-le dans un sachet hermétique avec du dessiccant lorsqu'il n'est pas utilisé.
- Pour les impressions longues, utilisez l'interface web RaiseCloud pour surveiller la progression à distance.
- Réduisez la vitesse d'impression à 40 mm/s pour les pièces à double extrusion afin de limiter les fils et bavures.
- Nettoyez les buses régulièrement avec des aiguilles de nettoyage fournies, surtout après utilisation de PVA.
:::

## Aller plus loin

- [ideaMaker — Téléchargement](https://www.raise3d.com/ideamaker/) — Logiciel de découpe officiel Raise3D
- [Wiki Raise3D](https://support.raise3d.com/) — Base de connaissances et guides de dépannage
- [Guide de la double extrusion — All3DP](https://all3dp.com/2/dual-extrusion-3d-printing-simply-explained/) — Comprendre l'impression double tête (en anglais)

---

<div style={{textAlign: 'center', marginTop: '2rem', fontSize: '0.85rem', opacity: 0.6}}>
Wiki@LAB — L.A.B · Licence CC BY-SA 4.0
</div>

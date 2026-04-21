---
id: omtech-laser-co2
title: "OMTech Laser CO2 — Guide d'utilisation"
sidebar_label: "OMTech Laser CO2"
sidebar_position: 1
---

# OMTech Laser CO2

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Découpe</span>
  <span className="badge badge--primary">Gravure</span>
  <span className="badge badge--info">Laser CO2</span>
</div>

| | Détails |
|---|---|
| **Type** | Découpeuse et graveuse laser CO2 |
| **Surface de travail** | 600 x 400 mm |
| **Difficulté** | Intermédiaire |

---

## De quoi parle-t-on ?

La OMTech Laser CO2 est une machine de découpe et de gravure qui utilise un faisceau laser infrarouge (longueur d'onde 10,6 micromètres) produit par un tube rempli de dioxyde de carbone. Ce faisceau, focalisé par une lentille, permet de couper ou de graver une grande variété de matériaux avec une précision remarquable.

Le laser CO2 excelle sur les matériaux organiques et certains plastiques. Il permet de découper du bois, du MDF, de l'acrylique (PMMA), du carton, du cuir et du tissu. En mode gravure, il peut aussi marquer le verre, la pierre ou le métal peint. La polyvalence de cette machine en fait un outil central dans tout FabLab.

Avec cette machine, vous pouvez réaliser des boîtes à assemblage par encoches, des décorations personnalisées, des pochoirs, de la signalétique, des bijoux en acrylique, des maquettes architecturales et bien plus encore.

## Avant de commencer

:::info[**Sécurité et bonnes pratiques**]
Le laser CO2 présente des risques sérieux si les consignes ne sont pas respectées.

- **Ne jamais laisser la machine sans surveillance** pendant un travail. Un départ de feu est toujours possible, même sur des matériaux courants.
- **Ventilation obligatoire** : la hotte aspirante doit être en marche avant de lancer toute opération. Les fumées dégagées sont nocives.
- **Ne jamais découper de PVC, vinyle ou polycarbonate.** Ces matériaux libèrent du chlore gazeux (acide chlorhydrique), extrêmement toxique pour vous et corrosif pour la machine.
- **Porter des lunettes de protection adaptées** au laser CO2 si vous observez le travail de près.
- **Garder un extincteur à portée de main.** En cas de flamme, arrêter immédiatement la machine.
- **Vérifier que le circuit de refroidissement fonctionne** (eau circulante) avant toute utilisation.
:::

## Matériel nécessaire

- Matériau à découper ou graver (bois, acrylique, carton, cuir, tissu)
- Un fichier vectoriel (SVG, DXF ou AI) pour la découpe, ou une image (PNG, BMP) pour la gravure
- Un ordinateur avec LightBurn ou RDWorks installé
- Ruban de masquage (optionnel, pour protéger la surface lors de la gravure)

---

## Étape 1 — Préparer le fichier

Ouvrez votre fichier dans **LightBurn** (recommandé) ou **RDWorks**. Pour la découpe, utilisez des tracés vectoriels (lignes fermées). Pour la gravure, importez une image bitmap ou utilisez du texte et des formes remplies.

Dans LightBurn, assignez les couleurs de calques : chaque couleur correspond à un réglage de puissance et de vitesse. Les lignes de découpe sont généralement en mode "Line" et les zones à graver en mode "Fill". Réglez les paramètres selon le matériau : par exemple, pour du contreplaqué de 3 mm, essayez 20 mm/s à 60 % de puissance pour la découpe.

## Étape 2 — Préparer la machine

Placez votre matériau bien à plat sur le plateau nid d'abeille. Assurez-vous qu'il ne dépasse pas de la surface de travail. Réglez la hauteur focale du laser à l'aide de la cale de mise au point fournie : la distance entre la lentille et le matériau doit être exacte pour obtenir un trait de découpe net.

Allumez la ventilation et vérifiez que le circuit d'eau de refroidissement est actif. Fermez le capot de la machine. Dans LightBurn, connectez-vous à la machine et utilisez la fonction "Frame" pour visualiser le contour du travail sans tirer le laser.

## Étape 3 — Lancer la découpe

Vérifiez une dernière fois les paramètres (puissance, vitesse, nombre de passes). Lancez le travail depuis LightBurn en cliquant sur "Start". Restez à côté de la machine pendant toute la durée de l'opération. Surveillez l'apparition de flammes ou de fumée anormale. En cas de problème, appuyez immédiatement sur le bouton d'arrêt d'urgence.

Le temps d'exécution varie selon la complexité du fichier et le matériau. Une découpe simple prend quelques minutes, tandis qu'une gravure photo détaillée peut durer plus d'une heure.

## Étape 4 — Retirer et finaliser la pièce

Attendez quelques secondes après la fin du travail pour laisser les fumées s'évacuer. Ouvrez le capot et retirez délicatement votre pièce. Si vous avez utilisé du ruban de masquage, retirez-le pour révéler une gravure propre.

Nettoyez les résidus de découpe sur le plateau. Si les bords sont noircis (courant sur le bois), un léger ponçage ou un passage à l'alcool isopropylique peut améliorer le rendu. Vérifiez que la machine est propre avant de la laisser.

---

## Conseils et astuces

:::tip[**Pour de meilleurs résultats**]
- Faites toujours un **test sur une chute** de votre matériau avant de lancer le travail final.
- Appliquez du **ruban de masquage** sur la surface avant la gravure pour éviter les traces de fumée.
- Pour la découpe d'acrylique, laissez le film protecteur en place : il protège la surface et réduit les flammes.
- Notez vos réglages (puissance, vitesse, matériau) dans un carnet pour constituer votre propre référence.
- En gravure photo, convertissez votre image en niveaux de gris et utilisez le tramage (dithering) pour un meilleur rendu.
:::

## Aller plus loin

- [Documentation LightBurn](https://docs.lightburnsoft.com/) — guide complet du logiciel
- [Tableau de paramètres laser OMTech](https://omtechlaser.com/blogs/news) — réglages par matériau
- [Test de matériaux laser sur Instructables](https://www.instructables.com/) — projets et retours d'expérience

---

<div style={{textAlign: 'center', marginTop: '2rem', fontSize: '0.85rem', opacity: 0.6}}>
Wiki@LAB — L.A.B · Licence CC BY-SA 4.0
</div>

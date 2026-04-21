---
id: ultimaker-2plus
title: "Ultimaker 2+ — Guide d'utilisation"
sidebar_label: "Ultimaker 2+"
sidebar_position: 4
---

# Ultimaker 2+

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Impression 3D</span>
  <span className="badge badge--info">FDM</span>
</div>

| | Détails |
|---|---|
| **Type** | FDM (dépot de filament fondu) — Simple extrusion |
| **Volume d'impression** | 223 x 223 x 205 mm |
| **Nombre de machines** | 3 exemplaires au L.A.B |
| **Difficulté** | Débutant |

---

## De quoi parle-t-on ?

L'Ultimaker 2+ est une imprimante 3D FDM fiable et éprouvée, considérée comme une référence dans le monde des FabLabs. Son fonctionnement est simple : un filament plastique de 2.85 mm est fondu à travers une buse, puis déposé couche par couche pour créer un objet tridimensionnel. Le L.A.B en possède trois exemplaires, ce qui permet de lancer plusieurs impressions en parallèle.

Cette machine utilise un système de filament ouvert, ce qui signifie que vous pouvez utiliser des bobines de n'importe quel fabricant, à condition qu'elles soient au diamètre de 2.85 mm. Son plateau en verre chauffant offre une excellente adhérence et une surface de fond lisse sur les pièces.

L'Ultimaker 2+ est idéale pour débuter en impression 3D : pièces décoratives, prototypage rapide, boîtiers, supports et petits outils. Sa simplicité d'utilisation et sa robustesse en font la machine parfaite pour un premier apprentissage.

## Avant de commencer

:::info[**Sécurité et bonnes pratiques**]
- La buse atteint 260 °C et le plateau 110 °C. Ne touchez aucun de ces éléments pendant ou juste après l'impression.
- Utilisez la spatule avec précaution pour retirer les pièces : toujours pousser vers l'extérieur, jamais vers vous.
- Le PLA est le matériau le plus simple et le moins dangereux. Pour l'ABS, assurez une bonne ventilation.
- Ne laissez pas de filament chargé trop longtemps dans la machine sans imprimer : il peut se dégrader et boucher la buse.
:::

## Matériel nécessaire

- Un fichier 3D au format STL ou OBJ
- Le logiciel **Ultimaker Cura** (gratuit, disponible sur ultimaker.com)
- Du filament de **2.85 mm** de diamètre (PLA recommandé pour débuter, ABS ou CPE possible)
- De la colle en bâton (pour l'adhérence au plateau, surtout avec le PLA)
- Une spatule pour le retrait des pièces

---

## Étape 1 — Préparer le fichier

Ouvrez **Ultimaker Cura** et sélectionnez "Ultimaker 2+" dans la liste des imprimantes. Importez votre fichier STL.

Réglez les paramètres essentiels :
- **Hauteur de couche** : 0.15 mm pour une bonne qualité, 0.20 mm pour aller plus vite.
- **Remplissage** : 20 % en motif grille pour un bon compromis.
- **Supports** : activez-les si votre pièce a des surplombs de plus de 45 degrés.
- **Adhérence au plateau** : sélectionnez "Bordure" (brim) pour les pièces avec une petite surface de contact.

Cura affiche une estimation du temps d'impression et de la quantité de filament nécessaire. Sauvegardez le G-code sur une carte SD.

## Étape 2 — Préparer la machine

Nivelez le plateau à l'aide de l'assistant intégré accessible depuis le menu de l'Ultimaker (Maintenance > Build Plate). Tournez la molette du plateau à chaque coin jusqu'à ce qu'une feuille de papier frotte légèrement entre la buse et le plateau.

Appliquez une fine couche de colle en bâton sur le plateau en verre, surtout pour le PLA. Cette étape améliore grandement l'adhérence de la première couche.

Chargez le filament via le menu "Material > Change". L'imprimante chauffe la buse puis vous guide pour insérer le filament jusqu'à ce qu'il s'écoule par la buse. Attention au diamètre : l'Ultimaker 2+ utilise du filament de **2.85 mm**, pas du 1.75 mm.

## Étape 3 — Lancer l'impression

Insérez la carte SD dans l'imprimante. Naviguez dans le menu avec la molette et sélectionnez votre fichier. L'impression démarre après le préchauffage.

Observez la première couche : les lignes doivent être régulières, légèrement écrasées et bien collées au plateau. Si la première couche ne colle pas, arrêtez l'impression et ajustez le nivellement du plateau. Un mauvais départ ne s'améliore jamais en cours de route.

## Étape 4 — Retirer et finaliser la pièce

Laissez le plateau refroidir. Avec le PLA, la pièce se décolle souvent toute seule grâce à la contraction thermique. Si nécessaire, glissez la spatule sous la pièce en inclinant légèrement le plateau.

Retirez les supports à la main ou avec une pince coupante. Poncez les traces de support avec du papier abrasif grain 200 si l'état de surface est important.

Pour les pièces en PLA, un post-traitement au papier de verre progressif (200, 400, 800) peut donner un rendu très lisse.

---

## Conseils et astuces

:::tip[**Pour de meilleurs résultats**]
- Réappliquez de la colle en bâton avant chaque impression. Un plateau propre avec une fine couche de colle est la clé d'une bonne première couche.
- Nettoyez le plateau au lave-vaisselle ou à l'eau chaude savonneuse quand la colle s'accumule trop.
- Avec trois machines disponibles, profitez-en pour tester différents paramètres sur la même pièce et comparer les résultats.
- Si la buse se bouche, utilisez la procédure "Atomic Pull" (cold pull) : chauffez à 260 °C, insérez du filament, laissez refroidir à 90 °C, puis tirez fermement.
- Le PLA se conserve bien mais reste sensible à l'humidité : rangez les bobines dans un sac zippé avec un sachet de dessiccant.
:::

## Aller plus loin

- [Ultimaker Cura — Téléchargement](https://ultimaker.com/software/ultimaker-cura/) — Logiciel de découpe officiel
- [Guide de l'Ultimaker 2+ — Ultimaker Support](https://support.ultimaker.com/s/article/Ultimaker-2-Plus) — Documentation officielle
- [Communauté Ultimaker](https://community.ultimaker.com/) — Forum d'entraide et profils partagés

---

<div style={{textAlign: 'center', marginTop: '2rem', fontSize: '0.85rem', opacity: 0.6}}>
Wiki@LAB — L.A.B · Licence CC BY-SA 4.0
</div>

---
id: carvera-air
title: "Carvera Air — Guide d'utilisation"
sidebar_label: "Carvera Air"
sidebar_position: 1
---

# Carvera Air

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Usinage</span>
  <span className="badge badge--info">CNC</span>
</div>

| | Détails |
|---|---|
| **Type** | Fraiseuse CNC de bureau — 3 axes |
| **Surface de travail** | 200 x 150 x 60 mm |
| **Difficulté** | Intermédiaire |

---

## De quoi parle-t-on ?

La Carvera Air est une fraiseuse CNC compacte et entièrement carénée, conçue pour un usage en atelier partagé ou sur un bureau. Le principe de la CNC (Computer Numerical Control) consiste à retirer de la matière d'un bloc brut à l'aide d'une fraise rotative pilotée par ordinateur. On parle d'usinage soustractif, par opposition à l'impression 3D qui est additive.

Grâce à son capot fermé, la Carvera Air contient les copeaux et la poussière générés pendant l'usinage, ce qui la rend bien adaptée à un environnement de type FabLab. Elle dispose également d'un système de mise à zéro automatique de l'outil (auto tool zeroing), qui simplifie considérablement la préparation de chaque travail.

Avec cette machine, vous pouvez usiner du bois, de l'acrylique, de la cire, des circuits imprimés (PCB) et même de l'aluminium tendre. Elle est idéale pour la fabrication de pièces mécaniques de précision, de moules, de circuits électroniques ou de plaques gravées.

## Avant de commencer

:::info[**Sécurité et bonnes pratiques**]
- Gardez toujours le capot fermé pendant l'usinage. Les copeaux et les fragments de fraise cassée peuvent être projetés à grande vitesse.
- Portez des lunettes de protection lorsque vous ouvrez la machine juste après un usinage.
- Vérifiez que la pièce à usiner est solidement fixée sur le plateau avant de lancer le programme. Une pièce mal bridée peut être éjectée violemment.
- Ne touchez jamais la fraise en rotation. Attendez l'arrêt complet de la broche avant toute intervention.
- Utilisez un aspirateur pour nettoyer les copeaux après chaque session.
:::

## Matériel nécessaire

- Un fichier de conception 2D (SVG, DXF) ou 3D (STL, STEP)
- Le logiciel **Carvera Controller** installé sur votre poste (fourni par Makera)
- Un logiciel de FAO (CAM) : **Fusion 360** ou **Easel** pour générer les parcours d'outils (G-code)
- Le matériau brut adapté (plaque de bois, acrylique, cuivre pour PCB, cire, aluminium)
- Les fraises appropriées au matériau (fournies avec la machine ou disponibles au LAB)
- Du ruban adhésif double face ou des brides de fixation pour maintenir la pièce

---

## Étape 1 — Préparer le fichier

Commencez par concevoir votre pièce dans un logiciel de CAO (Fusion 360, FreeCAD, Inkscape pour le 2D). Exportez ensuite votre modèle dans un format compatible.

Ouvrez votre logiciel de FAO (Fusion 360 ou Easel) pour définir les parcours d'outils :
- **Type d'opération** : contournage, poche, gravure ou perçage selon votre projet.
- **Fraise** : sélectionnez le diamètre et le type correspondant à la fraise que vous utiliserez (fraise plate 2 dents de 3.175 mm pour le bois, fraise en V pour la gravure).
- **Profondeur de passe** : ne dépassez pas la moitié du diamètre de la fraise par passe pour le bois, et un quart pour l'aluminium.
- **Vitesse d'avance et de rotation** : utilisez les paramètres recommandés par Makera pour chaque matériau.

Générez le G-code et importez-le dans **Carvera Controller**.

## Étape 2 — Préparer la machine

Ouvrez le capot et installez la fraise appropriée dans le mandrin de la broche. Serrez fermement avec la clé fournie.

Fixez votre matériau brut sur le plateau de travail à l'aide de ruban adhésif double face ou de brides mécaniques. Assurez-vous que la pièce ne bouge absolument pas.

Dans Carvera Controller, lancez la procédure de mise à zéro automatique de l'outil. La machine va palper la surface de votre matériau pour définir le point d'origine Z. Définissez ensuite l'origine XY en déplaçant manuellement la broche au-dessus du coin souhaité de votre pièce.

## Étape 3 — Lancer l'usinage

Fermez le capot. Dans Carvera Controller, chargez votre fichier G-code et vérifiez l'aperçu du parcours d'outil. Lancez le programme.

Surveillez les premières passes pour vous assurer que la profondeur de coupe est correcte et que la pièce reste bien fixée. Si vous entendez des vibrations anormales ou un bruit aigu, mettez en pause immédiatement et vérifiez le serrage de la fraise et du matériau.

## Étape 4 — Retirer et finaliser

Attendez l'arrêt complet de la broche. Ouvrez le capot et retirez la pièce usinée avec précaution. Les bords fraîchement usinés peuvent être tranchants.

Ébavurez les arêtes avec du papier abrasif (grain 180 à 240 pour le bois, grain 400 pour l'acrylique). Aspirez les copeaux dans la machine et sur le plateau. Rangez les fraises dans leur boîtier de protection.

---

## Conseils et astuces

:::tip[**Pour de meilleurs résultats**]
- Pour le bois, préférez une fraise hélicoïdale à une dent qui évacue mieux les copeaux et donne un état de surface plus propre.
- Pour les PCB, utilisez les fraises en V de 0.1 mm fournies et les profils de gravure dédiés dans Carvera Controller.
- Ne forcez pas les paramètres de coupe pour aller plus vite : une passe trop profonde casse la fraise et abîme la pièce.
- Pour l'aluminium tendre, ajoutez quelques gouttes de lubrifiant (WD-40) sur la zone d'usinage pour réduire l'échauffement.
- Faites toujours un essai sur une chute de matériau avant de lancer un usinage sur votre pièce définitive.
:::

## Aller plus loin

- [Documentation officielle Makera Carvera](https://www.makera.com/pages/support) — Support et tutoriels du fabricant
- [Fusion 360 pour les makers](https://www.autodesk.fr/products/fusion-360/) — Logiciel de CAO/FAO gratuit pour un usage personnel
- [Carbide Create](https://carbide3d.com/carbidecreate/) — Alternative gratuite pour la FAO 2D/2.5D

---

<div style={{textAlign: 'center', marginTop: '2rem', fontSize: '0.85rem', opacity: 0.6}}>
Wiki@LAB — L.A.B · Licence CC BY-SA 4.0
</div>

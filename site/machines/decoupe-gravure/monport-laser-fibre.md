---
id: monport-laser-fibre
title: "Monport Laser fibre — Guide d'utilisation"
sidebar_label: "Monport Laser fibre"
sidebar_position: 2
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Monport Laser fibre

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Gravure</span>
  <span className="badge badge--info">Laser fibre</span>
</div>

**Type** : Graveuse laser fibre (marquage métal)  
**Surface de travail** : 110 x 110 mm  
**Difficulté** : Intermédiaire

</div>

<img src="/img/photos/machines/PXL_20260413_083137985.jpg" alt="Monport Laser fibre" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0, borderRadius: '10px', background: '#f5f5f5', padding: '0.5rem'}} />

</div>

---

## Présentation

Le Monport Laser fibre est une graveuse spécialisée dans le marquage permanent des métaux, utilisant un laser à fibre optique d'une longueur d'onde de 1064 nm (infrarouge proche). Contrairement au laser CO2 qui agit sur les matériaux organiques, le laser fibre est conçu pour travailler les métaux et certains plastiques durs.

Cette machine **ne découpe pas** : elle modifie la surface du matériau par oxydation, recuit ou ablation pour créer un marquage permanent. Sur l'acier inoxydable, elle produit des couleurs variées en jouant sur la température d'oxydation. Sur l'aluminium anodisé, elle retire la couche anodisée pour révéler le métal brut. Sur le laiton et le cuivre, elle permet une gravure nette et durable.

Les applications typiques incluent la personnalisation d'objets métalliques (bijoux, outils, plaques), le marquage de pièces industrielles, la création de badges et plaques signalétiques, ou encore la gravure de QR codes et numéros de série.

## Avant de commencer

:::info[**Sécurité et bonnes pratiques**]
Le laser fibre présente des risques spécifiques liés à sa longueur d'onde invisible.

- **Lunettes de protection obligatoires.** Le laser fibre émet à 1064 nm, une longueur d'onde invisible à l'oeil nu mais extrêmement dangereuse pour la rétine. Les lunettes doivent être certifiées OD5+ pour 1064 nm.
- **Ne jamais regarder le faisceau**, même avec des lunettes de protection. Les réflexions sur les surfaces métalliques peuvent être tout aussi dangereuses.
- **Travailler dans un espace fermé** : utilisez le capot de protection fourni avec la machine pour confiner le faisceau.
- **Ventilation nécessaire** : même si les fumées sont moins importantes qu'avec un laser CO2, le marquage métal dégage des particules fines qu'il ne faut pas respirer.
- **Ne pas graver de matériaux inconnus** sans vérifier leur compatibilité. Certains plastiques ou revêtements peuvent dégager des fumées toxiques.
:::

## Matériel nécessaire

- Pièce métallique à graver (acier inoxydable, aluminium, laiton, cuivre, titane)
- Un fichier vectoriel (SVG, DXF, PLT) ou une image (BMP, JPG, PNG)
- Un ordinateur avec EZCad2 ou LightBurn installé
- Lunettes de protection laser 1064 nm (OD5+)
- Support ou cale pour positionner la pièce

## Matériaux compatibles

| Matériau | Marquage | Rendu | Remarques |
|---|---|---|---|
| **Acier inoxydable** | Oui | Noir, couleurs (bleu, doré, violet) selon les paramètres | Le métal le plus polyvalent pour le laser fibre. Les couleurs s'obtiennent par oxydation contrôlée. |
| **Aluminium anodisé** | Oui | Blanc (retrait de l'anodisation) | Contraste net sur fond coloré. |
| **Aluminium brut** | Oui | Gris clair, peu contrasté | Le marquage est moins visible que sur l'anodisé. |
| **Laiton** | Oui | Gravure nette | Bon contraste naturel. |
| **Cuivre** | Oui | Gravure profonde possible | Réfléchit fortement le laser, ajuster la puissance. |
| **Titane** | Oui | Couleurs variées par oxydation | Similaire à l'inox pour les effets de couleur. |
| **Plastiques durs (ABS, Delrin)** | Partiellement | Marquage de surface | Résultats variables, tester avant. |

:::note[**Ce que le laser fibre ne fait PAS**]
Le laser fibre **ne découpe pas**. Il marque, grave ou oxyde la surface. Pour découper du métal, il faut un laser fibre de forte puissance (> 500 W) ou un autre procédé.
:::

---

## Étape 1 — Préparer le fichier

Ouvrez votre design dans **EZCad2** (logiciel fourni avec la machine) ou **LightBurn**. Importez votre fichier vectoriel ou votre image. Dans EZCad2, vous pouvez ajouter du texte, des formes et des codes-barres directement dans le logiciel.

Définissez les paramètres de marquage : puissance, vitesse, fréquence et nombre de passes. Ces valeurs varient fortement selon le métal. Par exemple, pour un marquage noir sur acier inoxydable, utilisez une faible vitesse (200-500 mm/s), une puissance modérée (50-70 %) et une fréquence élevée (20-80 kHz).

## Étape 2 — Préparer la machine

Placez votre pièce métallique sur la surface de travail. Utilisez des cales ou un étau pour maintenir la pièce parfaitement stable et horizontale. Le laser fibre utilise une lentille à focale fixe (généralement 160 mm) : réglez la hauteur de la tête laser à l'aide du repère fourni.

Mettez vos lunettes de protection avant d'allumer le laser. Fermez le capot de protection. Utilisez la fonction "Aperçu" (cadre rouge) pour vérifier que le marquage sera bien positionné sur votre pièce.

## Étape 3 — Lancer la gravure

Vérifiez vos paramètres une dernière fois. Lancez le marquage depuis le logiciel. L'opération est généralement rapide : quelques secondes à quelques minutes selon la surface et la complexité du motif.

Restez à proximité pendant le travail. Le capot doit rester fermé. Si vous observez un comportement anormal (étincelles excessives, fumée inhabituelle), arrêtez immédiatement la machine.

## Étape 4 — Retirer et finaliser la pièce

Une fois le marquage terminé, attendez quelques secondes puis ouvrez le capot. Retirez votre pièce. Le marquage est permanent et ne nécessite généralement aucun post-traitement.

Si nécessaire, nettoyez la surface avec un chiffon doux et de l'alcool isopropylique pour retirer les éventuels résidus d'oxydation. Sur certains métaux, un léger polissage peut améliorer le contraste du marquage.

---

## Conseils et astuces

:::info[**Pour de meilleurs résultats**]
- Faites des **tests de paramètres** sur une chute du même métal avant le travail final. Variez puissance, vitesse et fréquence pour trouver le rendu souhaité.
- Sur l'acier inoxydable, jouez avec la **fréquence** pour obtenir différentes couleurs (bleu, doré, violet) par oxydation thermique.
- Pour un marquage bien contrasté sur aluminium, **anodisez d'abord** la pièce : le laser retire l'anodisation et révèle le métal clair en dessous.
- Nettoyez et dégraissez vos pièces avant le marquage pour un résultat uniforme.
- Les fichiers vectoriels donnent toujours un meilleur résultat que les images bitmap pour le texte et les logos.
:::

## Aller plus loin

- [Guide débutant gravure métal — Monport](https://monportlaser.com/blogs/machine-guide/the-beginners-guide-to-metal-engraving-with-mopa-laser-technology) — Tutoriel laser fibre
- [Forum LightBurn](https://forum.lightburnsoftware.com/) — Communauté d'entraide laser
- [Documentation LightBurn](https://docs.lightburnsoftware.com/latest/) — Guide complet du logiciel

---

<div style={{textAlign: 'center', marginTop: '2rem', fontSize: '0.85rem', opacity: 0.6}}>
Wiki@LAB — L.A.B · Licence CC BY-SA 4.0
</div>

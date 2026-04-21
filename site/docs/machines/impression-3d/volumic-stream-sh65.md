---
id: volumic-stream-sh65
title: "Volumic Stream SH65 — Guide d'utilisation"
sidebar_label: "Volumic Stream SH65"
sidebar_position: 2
---

# Volumic Stream SH65

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Impression 3D</span>
  <span className="badge badge--info">FDM</span>
</div>

**Type** : FDM (dépot de filament fondu) — Grand format  
**Volume d'impression** : 300 x 200 x 650 mm  
**Fabrication** : Française (Nice)  
**Difficulté** : Intermédiaire

---

## Présentation

La Volumic Stream SH65 est une imprimante 3D FDM de grand format fabriquée en France par la société Volumic, basée à Nice. Sa particularité principale est son grand volume d'impression en hauteur (650 mm), ce qui permet de produire des pièces de grande taille en une seule fois, sans avoir à assembler plusieurs morceaux.

La technologie FDM fonctionne en faisant fondre un filament plastique à travers une buse chauffée, puis en le déposant couche après couche sur un plateau chauffant. La chambre fermée de la Stream SH65 maintient une température stable autour de la pièce, ce qui réduit les problèmes de déformation (warping), notamment avec l'ABS.

Cette machine est particulièrement adaptée aux projets nécessitant des pièces hautes ou volumineuses : prototypes architecturaux, éléments de décor, boîtiers de grande taille ou pièces techniques.

## Avant de commencer

:::info[**Sécurité et bonnes pratiques**]
- La buse atteint plus de 250 °C et le plateau plus de 100 °C : ne jamais toucher ces éléments pendant ou juste après l'impression.
- Garder la porte de l'enceinte fermée pendant toute la durée de l'impression, surtout avec l'ABS.
- Assurer une ventilation correcte du local lors de l'utilisation de filaments techniques.
- Ne pas déplacer la machine pendant une impression : son poids et sa hauteur la rendent sensible aux vibrations.
:::

## Matériel nécessaire

- Un fichier 3D au format STL ou OBJ
- Le logiciel **Cura** (gratuit) ou le **slicer Volumic** pour la découpe
- Du filament 1.75 mm compatible (PLA, ABS, PETG)
- Une spatule pour le retrait des pièces
- De la laque ou de la colle en bâton pour l'adhérence au plateau (selon le matériau)

## Matériaux compatibles

| Matériau | Température buse | Température plateau | Propriétés | Usages typiques |
|---|---|---|---|---|
| **PLA** | 200-220 °C | 50-60 °C | Facile à imprimer, rigide, biodégradable. Faible résistance thermique (≈60 °C). | Prototypage, objets décoratifs, maquettes |
| **PETG** | 230-250 °C | 70-80 °C | Bonne résistance mécanique et chimique, légèrement flexible. | Pièces fonctionnelles, contenants alimentaires |
| **ABS** | 240-260 °C | 100-110 °C | Résistant aux chocs et à la chaleur. Dégage des vapeurs, enceinte fermée recommandée. | Boîtiers, pièces mécaniques, prototypes automobiles |

:::note[**Conseils pour le choix du matériau**]
- **Débutant ?** Commencez par le **PLA** : il pardonne les erreurs de réglage et ne nécessite pas d'enceinte fermée.
- **Pièce fonctionnelle ?** Le **PETG** offre le meilleur compromis solidité/facilité d'impression.
- **Résistance thermique ?** L'**ABS** supporte des températures plus élevées mais nécessite l'enceinte fermée de la Stream SH65 et une bonne ventilation du local.
- **Stockage** : tous les filaments sont sensibles à l'humidité. Rangez-les dans un sac hermétique avec du dessiccant.
:::

---

## Étape 1 — Préparer le fichier

Ouvrez **Cura** et importez votre modèle 3D. Si un profil Volumic Stream SH65 est disponible, sélectionnez-le. Sinon, configurez manuellement les dimensions du plateau (300 x 200 x 650 mm).

Paramètres recommandés :
- **Hauteur de couche** : 0.20 mm pour un usage standard, 0.10 mm pour plus de détails.
- **Remplissage** : 15 à 20 % en gyroïde ou grille pour un bon compromis solidité/temps.
- **Supports** : à activer pour les surplombs importants. Privilégiez les supports en arbre (tree supports) pour un retrait plus facile.
- **Adhérence au plateau** : utilisez une bordure (brim) de 5 mm minimum pour les pièces hautes, afin d'éviter le décollement.

Exportez le fichier en G-code sur une carte SD ou une clé USB.

## Étape 2 — Préparer la machine

Vérifiez le nivellement du plateau à l'aide de l'assistant intégré dans le menu de la machine. Passez une feuille de papier entre la buse et le plateau aux quatre coins : vous devez sentir un léger frottement.

Chargez le filament en le guidant dans le tube Bowden jusqu'à l'extrudeur. Lancez une purge depuis le menu de la machine pour vérifier que le filament s'écoule correctement.

Si vous imprimez en ABS, appliquez de la laque sur le plateau et préchauffez l'enceinte fermée pendant 5 à 10 minutes. Pour le PLA, un plateau propre suffit généralement.

## Étape 3 — Lancer l'impression

Insérez la carte SD ou la clé USB dans la machine. Depuis l'écran de contrôle, sélectionnez votre fichier G-code et lancez l'impression.

Surveillez attentivement les trois à cinq premières couches. La première couche doit être bien écrasée sur le plateau, sans espaces entre les lignes ni accumulation de matière. Si l'adhérence est insuffisante, ajustez le Z-offset ou appliquez davantage de laque.

Pour les impressions longues (plusieurs heures), vérifiez régulièrement que le filament ne s'emmêle pas sur la bobine.

## Étape 4 — Retirer et finaliser la pièce

Laissez le plateau refroidir avant de retirer la pièce. Pour le PLA, la pièce se détache souvent seule en refroidissant. Pour l'ABS, utilisez la spatule avec précaution.

Retirez les supports à la main ou avec une pince coupante. Les traces de support peuvent être atténuées au papier de verre grain 200 puis 400. Pour les grandes pièces, vérifiez l'absence de fissures entre les couches (délamination), signe d'une température d'enceinte insuffisante.

---

## Conseils et astuces

:::tip[**Pour de meilleurs résultats**]
- Pour les pièces très hautes, réduisez la vitesse d'impression dans les dernières couches afin de limiter les vibrations.
- Avec l'ABS, ne jamais ouvrir la porte de l'enceinte pendant l'impression sous peine de provoquer des fissures par choc thermique.
- Utilisez un brim large (8-10 mm) pour les pièces fines et hautes afin d'assurer la stabilité.
- Nettoyez le plateau à l'alcool isopropylique entre chaque impression pour garantir une bonne adhérence.
:::

## Aller plus loin

- [Site officiel Volumic](https://www.volumic.com/) — Documentation et support technique
- [Ultimaker Cura — Téléchargement](https://ultimaker.com/software/ultimaker-cura/) — Logiciel de découpe gratuit
- [Guide des matériaux Volumic](https://www.volumic.com/materiaux/) — Fiches techniques des filaments compatibles

---

<div style={{textAlign: 'center', marginTop: '2rem', fontSize: '0.85rem', opacity: 0.6}}>
Wiki@LAB — L.A.B · Licence CC BY-SA 4.0
</div>

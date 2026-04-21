---
id: elegoo-mars-2
title: "Elegoo Mars 2 + Mercury Plus — Guide d'utilisation"
sidebar_label: "Elegoo Mars 2"
sidebar_position: 6
---

# Elegoo Mars 2 + Mercury Plus

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Impression 3D</span>
  <span className="badge badge--info">Résine</span>
</div>

**Type** : MSLA (LCD masqué, résine UV)  
**Résolution** : 2K mono LCD (1620 x 2560 px, 50 microns/pixel)  
**Volume d'impression** : 129 x 80 x 150 mm  
**Station de post-traitement** : Elegoo Mercury Plus (lavage IPA + polymérisation UV)  
**Difficulté** : Intermédiaire

---

## Présentation

L'Elegoo Mars 2 est une imprimante 3D à résine compacte de type MSLA, équipée d'un écran LCD 2K monochrome. Comme la Saturn, elle solidifie de la résine photosensible couche par couche à l'aide de lumière UV, mais dans un format plus petit et plus abordable. Sa résolution de 50 microns par pixel offre un excellent niveau de détail pour les petites pièces.

La particularité de cet ensemble au L.A.B est qu'il est accompagné de la station **Elegoo Mercury Plus**, qui combine deux fonctions indispensables en impression résine : le lavage à l'alcool isopropylique (IPA) dans un bac rotatif et la polymérisation UV sous une cloche de LEDs à 405 nm. Cette station simplifie considérablement le post-traitement, qui est l'étape la plus contraignante de l'impression résine.

La Mars 2 est parfaite pour les petites pièces de haute précision : figurines, bagues, pièces de modélisme, composants miniatures, prototypes de joaillerie et éléments décoratifs fins.

## Avant de commencer

:::info[**Sécurité et bonnes pratiques**]
- **Gants en nitrile obligatoires** à chaque manipulation de résine liquide ou de pièces non polymérisées. Aucune exception.
- Travaillez dans un espace **ventilé**. Les vapeurs de résine sont irritantes.
- Portez des **lunettes de protection** lors de la manipulation d'IPA et du nettoyage des pièces.
- Ne versez jamais de résine ou d'IPA usagé dans les canalisations. Exposez les déchets de résine aux UV avant mise en déchetterie.
- Gardez le capot orange fermé pendant l'impression pour protéger la résine de la lumière ambiante.
- La Mercury Plus émet des UV intenses : ne regardez pas directement la lumière UV pendant la polymérisation.
:::

## Matériel nécessaire

- Un fichier 3D au format STL ou OBJ
- Le logiciel **Chitubox** (gratuit) ou **Lychee Slicer**
- De la résine UV 405 nm compatible (Elegoo standard, ABS-like ou water-washable)
- Des **gants en nitrile** (obligatoire)
- De l'**alcool isopropylique** (IPA 90 %+) pour la Mercury Plus
- La station **Elegoo Mercury Plus** (disponible au L.A.B)
- Des filtres en papier pour le bac de résine

## Résines compatibles

| Résine | Temps d'exposition | Propriétés | Usages typiques |
|---|---|---|---|
| **Standard** | 2-3 s/couche | Bonne résolution, rigide, fragile. Économique. | Figurines, maquettes, prototypage visuel |
| **ABS-Like** | 2.5-3.5 s/couche | Plus résistante aux chocs que la standard, légèrement flexible. | Pièces fonctionnelles, clips, boîtiers |
| **Water-Washable** | 2-3 s/couche | Nettoyable à l'eau (pas d'IPA nécessaire). Légèrement moins précise. | Usage simplifié, débutants |
| **Flexible** | 3-5 s/couche | Souple après polymérisation. | Joints, semelles, prototypes souples |
| **Castable** | 3-4 s/couche | Brûle sans résidu pour la coulée de métal. | Joaillerie, fonderie |

:::note[**Conseils pour le choix de la résine**]
- **Débutant ?** La résine **standard Elegoo** (grise) offre le meilleur compromis qualité/prix pour apprendre.
- **Sans IPA ?** La résine **water-washable** simplifie le post-traitement mais le lavage doit rester bref (< 3 min) pour éviter le ramollissement.
- **Toujours** secouer la bouteille 30 secondes avant utilisation pour homogénéiser les pigments.
- **Température** : imprimez entre 20 et 25 °C. En dessous de 18 °C, les temps d'exposition doivent être augmentés.
:::

---

## Étape 1 — Préparer le fichier

Ouvrez **Chitubox** ou **Lychee Slicer** et sélectionnez le profil "Elegoo Mars 2". Importez votre modèle 3D. Compte tenu du petit volume d'impression (129 x 80 mm), vérifiez que votre pièce tient sur le plateau.

Orientez la pièce en l'inclinant de 20 à 45 degrés par rapport au plateau. Ajoutez des supports automatiques, puis inspectez le modèle pour corriger les zones non supportées (îles flottantes).

Paramètres recommandés pour la résine Elegoo standard :
- **Hauteur de couche** : 0.05 mm (standard) ou 0.03 mm (haute précision).
- **Temps d'exposition** : 2 à 2.5 secondes par couche normale.
- **Couches de base** : 5 couches à 25 secondes pour l'adhérence.

Exportez au format .ctb sur une clé USB.

## Étape 2 — Préparer la machine

Enfilez vos gants. Vérifiez l'état du film FEP au fond du bac : il doit être transparent, sans rayures ni résidus. Installez le bac sur la machine.

Secouez la bouteille de résine pendant 30 secondes, puis versez de la résine dans le bac (environ un tiers de la hauteur). Le plateau de la Mars 2 étant petit, une faible quantité suffit.

Vérifiez le nivellement du plateau via le menu de l'écran. Pour niveler, desserrez les vis du plateau, lancez la descente vers le bac (avec un papier sur l'écran LCD), puis resserrez les vis lorsque le plateau touche le fond.

Préparez en parallèle la **Mercury Plus** : remplissez le bac de lavage avec de l'IPA propre.

## Étape 3 — Lancer l'impression

Insérez la clé USB et sélectionnez votre fichier sur l'écran tactile. Lancez l'impression et fermez le capot orange.

Après quelques minutes, vérifiez que les premières couches adhèrent au plateau. Le bruit de décollement régulier entre chaque couche est normal. Si rien n'adhère au plateau, annulez et vérifiez le nivellement et les temps d'exposition des couches de base.

Les impressions sur la Mars 2 sont généralement rapides grâce à l'écran monochrome (2 à 3 secondes par couche contre 8 secondes sur les anciens écrans couleur).

## Étape 4 — Retirer et finaliser la pièce

Enfilez vos gants. Retirez le plateau de la machine et détachez la pièce avec la spatule.

**Lavage avec la Mercury Plus** : placez la pièce dans le panier de la Mercury Plus rempli d'IPA. Réglez le minuteur sur 3 à 5 minutes et lancez le cycle de lavage. La plateforme rotative assure un nettoyage uniforme. Sortez la pièce et laissez-la sécher 10 minutes à l'air libre.

**Polymérisation UV avec la Mercury Plus** : placez la pièce sèche sur le plateau tournant de la Mercury Plus, fermez le capot et lancez un cycle UV de 5 à 10 minutes. La pièce sera alors complètement durcie et stable.

Retirez les supports avec une pince coupante fine. Pour les figurines et pièces détaillées, coupez les supports au ras de la surface et poncez délicatement avec du papier abrasif grain 400 ou plus.

Filtrez la résine du bac avant de la reverser dans sa bouteille.

---

## Conseils et astuces

:::tip[**Pour de meilleurs résultats**]
- Changez l'IPA de la Mercury Plus régulièrement. Un IPA saturé de résine dissoute laissera un film collant sur vos pièces.
- Pour les très petites pièces (figurines de 28 mm par exemple), utilisez une hauteur de couche de 0.03 mm pour un maximum de détails.
- Videz et filtrez la résine du bac après chaque session, même si vous pensez réutiliser la machine bientôt. Les débris durcis dans le bac peuvent percer le FEP.
- Exposez l'IPA usagé au soleil dans un récipient ouvert : la résine dissoute polymérise et se dépose au fond, ce qui permet de réutiliser l'IPA après filtration.
- Imprimez plusieurs petites pièces en une seule session : le temps d'impression est le même que pour une seule pièce, puisque chaque couche est exposée en bloc.
:::

## Aller plus loin

- [Elegoo Mars 2 — Page officielle](https://www.elegoo.com/collections/mars-series) — Spécifications et firmware
- [Chitubox — Téléchargement](https://www.chitubox.com/en/download/chitubox-free) — Logiciel de découpe gratuit
- [Guide complet de l'impression résine — Prusa](https://blog.prusa3d.com/all-you-need-to-know-about-resin-3d-printing_84882/) — Tutoriel approfondi (en anglais)

---

<div style={{textAlign: 'center', marginTop: '2rem', fontSize: '0.85rem', opacity: 0.6}}>
Wiki@LAB — L.A.B · Licence CC BY-SA 4.0
</div>

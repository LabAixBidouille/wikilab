---
id: elegoo-saturn
title: "Elegoo Saturn — Guide d'utilisation"
sidebar_label: "Elegoo Saturn"
sidebar_position: 5
---

# Elegoo Saturn

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Impression 3D</span>
  <span className="badge badge--info">Résine</span>
</div>

| | Détails |
|---|---|
| **Type** | MSLA (LCD masqué, résine UV) |
| **Résolution** | 4K mono LCD (3840 x 2400 px, 48 microns/pixel) |
| **Volume d'impression** | 192 x 120 x 200 mm |
| **Difficulté** | Intermédiaire |

---

## De quoi parle-t-on ?

L'Elegoo Saturn est une imprimante 3D à résine de type MSLA (Masked Stereolithography). Contrairement aux imprimantes FDM qui déposent du plastique fondu, la Saturn utilise un écran LCD 4K monochrome pour projeter de la lumière UV à travers un bac rempli de résine liquide photosensible. Chaque couche est solidifiée en une seule exposition, ce qui rend le temps d'impression indépendant du nombre de pièces sur le plateau.

La résolution de 48 microns par pixel permet d'obtenir un niveau de détail exceptionnel, bien supérieur à ce que peut produire une imprimante FDM. Cette technologie est idéale pour les miniatures de jeux de rôle, les bijoux, les maquettes architecturales détaillées, les prototypes dentaires et toute pièce nécessitant des surfaces lisses et des détails fins.

La contrepartie est que la résine liquide est un produit chimique qui nécessite des précautions de manipulation strictes. Le post-traitement (lavage et polymérisation UV) est aussi plus exigeant qu'en FDM.

## Avant de commencer

:::info[**Sécurité et bonnes pratiques**]
- **Portez toujours des gants en nitrile** lors de la manipulation de la résine liquide ou des pièces non lavées. La résine est irritante et potentiellement allergisante par contact répété avec la peau.
- Travaillez dans un local **ventilé**. Les vapeurs de résine sont irritantes pour les voies respiratoires.
- Portez des **lunettes de protection** lors du nettoyage des pièces à l'alcool isopropylique (IPA).
- Ne versez **jamais** de résine dans l'évier ou les toilettes. Exposez les restes de résine aux UV avant de les jeter en déchetterie.
- La résine non polymérisée est sensible à la lumière UV : gardez le capot orange en place et ne laissez pas le bac de résine exposé à la lumière du jour.
:::

## Matériel nécessaire

- Un fichier 3D au format STL ou OBJ
- Le logiciel **Chitubox** (gratuit) ou **Lychee Slicer** pour la préparation du fichier
- De la résine UV compatible (Elegoo standard, ABS-like ou water-washable)
- Des **gants en nitrile** (obligatoire)
- De l'**alcool isopropylique** (IPA, concentration 90 % ou plus) pour le lavage
- Une station de lavage et polymérisation UV (ou un bac et une lampe UV)
- Des filtres en papier pour filtrer la résine du bac après utilisation

---

## Étape 1 — Préparer le fichier

Ouvrez **Chitubox** ou **Lychee Slicer** et sélectionnez le profil "Elegoo Saturn". Importez votre modèle 3D.

Orientez la pièce pour minimiser les surfaces planes parallèles au plateau : inclinez-la de 20 à 45 degrés. Cela réduit les forces de décollement (suction) à chaque couche et améliore la qualité de surface.

Ajoutez des **supports** automatiques puis vérifiez manuellement qu'aucune île (zone isolée sans support) ne subsiste. Les supports doivent être suffisants pour porter la pièce mais pas trop nombreux pour faciliter le retrait.

Paramètres recommandés pour la résine Elegoo standard :
- **Hauteur de couche** : 0.05 mm pour du détail fin, 0.03 mm pour du très haut détail.
- **Temps d'exposition** : 2 à 3 secondes par couche (selon la résine).
- **Couches de base** : 5 couches à 25-30 secondes pour l'adhérence au plateau.

Exportez le fichier au format .ctb sur une clé USB.

## Étape 2 — Préparer la machine

Enfilez vos gants en nitrile. Vérifiez que l'écran LCD est propre et sans résidu de résine solidifiée. Si nécessaire, nettoyez-le délicatement avec un chiffon doux et un peu d'IPA.

Installez le bac de résine (vat) et vérifiez que le film FEP au fond est intact, propre et bien tendu. Un FEP endommagé ou sale provoquera des échecs d'impression.

Secouez la bouteille de résine pendant 30 secondes pour bien mélanger les pigments, puis versez de la résine dans le bac jusqu'à environ un tiers de sa hauteur. Ne remplissez pas trop : le plateau qui descend dans la résine fera monter le niveau.

Effectuez le nivellement du plateau si ce n'est pas déjà fait (menu Home > Level).

## Étape 3 — Lancer l'impression

Insérez la clé USB dans la Saturn. Depuis l'écran tactile, naviguez jusqu'à votre fichier et lancez l'impression. Replacez le capot orange pour protéger la résine de la lumière ambiante.

Observez les premières couches : après 5 à 10 couches, vous pouvez vérifier (rapidement, capot à peine soulevé) que la pièce adhère bien au plateau. Si rien ne colle au plateau après les couches de base, arrêtez l'impression, vérifiez le nivellement et augmentez le temps d'exposition des couches de base.

## Étape 4 — Retirer et finaliser la pièce

Une fois l'impression terminée, enfilez vos gants. Retirez le plateau de la machine et détachez la pièce à l'aide de la spatule métallique fournie.

**Lavage** : plongez la pièce dans un bac d'alcool isopropylique (IPA) pendant 3 à 5 minutes, en agitant doucement. Un second bain d'IPA propre de 2 minutes améliore le résultat. Laissez sécher complètement à l'air libre.

**Polymérisation UV** : exposez la pièce à une lampe UV (405 nm) pendant 5 à 15 minutes, en la retournant à mi-parcours. Cette étape durcit définitivement la résine et rend la pièce stable.

Retirez les supports avec une pince coupante fine. Poncez les marques de support si nécessaire.

Filtrez la résine restante dans le bac avec un filtre en papier avant de la reverser dans la bouteille.

---

## Conseils et astuces

:::tip[**Pour de meilleurs résultats**]
- Inclinez toujours vos pièces : une pièce à plat sur le plateau subit trop de forces de décollement et risque de se détacher.
- Changez le film FEP dès qu'il est rayé ou déformé : un FEP usé est la première cause d'échec d'impression.
- Utilisez de la résine "water-washable" si vous ne souhaitez pas manipuler d'alcool isopropylique. Le lavage se fait alors à l'eau tiède.
- Filtrez systématiquement la résine du bac après chaque impression pour retirer les débris de résine solidifiée.
- Conservez la résine à l'abri de la lumière et entre 20 et 25 °C pour des résultats optimaux.
:::

## Aller plus loin

- [Elegoo Saturn — Page officielle](https://www.elegoo.com/collections/saturn-series) — Spécifications et mises à jour firmware
- [Chitubox — Téléchargement](https://www.chitubox.com/en/download/chitubox-free) — Logiciel de découpe gratuit
- [Lychee Slicer — Téléchargement](https://mango3d.io/lychee-slicer-for-sla-702702702702702702702702702702-702702702702-702702702702/) — Alternative populaire pour la préparation des fichiers résine

---

<div style={{textAlign: 'center', marginTop: '2rem', fontSize: '0.85rem', opacity: 0.6}}>
Wiki@LAB — L.A.B · Licence CC BY-SA 4.0
</div>

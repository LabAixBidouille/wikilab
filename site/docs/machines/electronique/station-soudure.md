---
id: station-soudure
title: "Stations de soudure — Guide d'utilisation"
sidebar_label: "Stations de soudure"
sidebar_position: 1
---

# Stations de soudure

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Électronique</span>
  <span className="badge badge--info">Soudure</span>
</div>

| | Détails |
|---|---|
| **Type** | Fer à souder + station air chaud (Yihua 959D II) / Fer de précision (Weller) |
| **Température de travail** | 300 - 350 °C (soudure sans plomb) |
| **Difficulté** | Débutant |

---

## De quoi parle-t-on ?

La soudure électronique consiste à assembler des composants sur un circuit imprimé (PCB) en faisant fondre un alliage métallique (la soudure) pour créer une connexion électrique permanente. C'est une compétence fondamentale pour tout projet électronique, du simple montage à la réparation de cartes complexes.

Le L.A.B dispose de deux types de stations. La **Yihua 959D II** est une station combinée qui intègre un fer à souder classique et un pistolet à air chaud. Le fer sert à la soudure de composants traversants et CMS, tandis que l'air chaud permet le retrait ou la soudure de composants montés en surface (CMS) plus complexes. La **Weller** est une station de précision, idéale pour les travaux fins nécessitant un contrôle thermique précis.

Ces stations conviennent aussi bien aux débutants qui réalisent leur premier montage qu'aux utilisateurs expérimentés qui réparent ou modifient des circuits existants.

## Avant de commencer

:::info[**Sécurité et bonnes pratiques**]
- La panne du fer atteint 300 à 400 °C : ne jamais la toucher, même après extinction. Attendre au moins 5 minutes de refroidissement.
- Toujours utiliser l'**extraction de fumées** : les vapeurs de flux et de soudure sont irritantes pour les voies respiratoires.
- Privilégier la soudure **sans plomb** (alliage Sn99.3Cu0.7). Si vous utilisez de la soudure au plomb, lavez-vous soigneusement les mains après chaque session.
- Travailler sur un support stable. Ne pas poser le fer ailleurs que sur son support prévu à cet effet.
- Porter des lunettes de protection si nécessaire, notamment lors de la coupe de pattes de composants.
:::

## Matériel nécessaire

- Station de soudure (Yihua 959D II ou Weller)
- Fil de soudure sans plomb (Sn99.3Cu0.7, diamètre 0.8 mm recommandé pour débuter)
- Flux en stylo ou en gel (facilite la soudure)
- Éponge humide ou laine de laiton (nettoyage de la panne)
- Pince coupante et pince brucelles
- Support de PCB (troisième main ou étau)
- Tresse à dessouder ou pompe à dessouder (pour les corrections)

---

## Étape 1 — Mise en place

1. Placez la station sur un plan de travail dégagé et stable.
2. Vérifiez que la panne du fer est propre et en bon état. Si elle est noircie ou oxydée, nettoyez-la avec la laine de laiton.
3. Allumez la station et réglez la température à **350 °C** pour la soudure sans plomb (320 °C si vous utilisez de la soudure avec plomb).
4. Attendez que la température soit atteinte (environ 30 secondes sur ces stations).
5. **Étamez la panne** : appliquez une fine couche de soudure sur la pointe du fer. La panne doit être brillante et argentée. Cette étape protège la panne de l'oxydation et améliore le transfert thermique.
6. Activez l'extraction de fumées.

## Étape 2 — Soudure de composants traversants

La soudure de composants traversants (through-hole) est la technique de base.

1. Insérez les pattes du composant dans les trous du PCB. Pliez légèrement les pattes côté soudure pour maintenir le composant en place.
2. Retournez le PCB et fixez-le dans le support.
3. Placez la panne du fer en contact simultané avec la pastille du PCB et la patte du composant. Maintenez le contact pendant **2 à 3 secondes** pour chauffer les deux éléments.
4. Approchez le fil de soudure du point de contact (pas directement sur la panne). La soudure doit fondre et s'écouler naturellement autour de la pastille.
5. Retirez d'abord le fil de soudure, puis le fer. Le joint doit avoir une forme de cône brillant et lisse.
6. Coupez l'excédent de patte avec la pince coupante.

## Étape 3 — Techniques courantes

**Soudure CMS basique (avec fer à souder) :**

1. Appliquez une petite quantité de flux sur les pastilles du PCB.
2. Pré-étamez une des pastilles : déposez un peu de soudure sur une pastille.
3. Avec une pince brucelles, positionnez le composant CMS. Réchauffez la pastille pré-étamée pour fixer un côté du composant.
4. Soudez l'autre côté normalement.

**Dessoudure (correction d'erreurs) :**

1. Appliquez du flux sur le joint à reprendre.
2. Placez la tresse à dessouder sur le joint et appuyez avec la panne du fer. La tresse absorbe la soudure par capillarité.
3. Retirez la tresse et le fer. Le composant est maintenant libre.

**Utilisation de l'air chaud (Yihua 959D II) :**

1. Réglez la température entre 300 et 350 °C et le débit d'air au minimum.
2. Appliquez du flux sur la zone de travail.
3. Chauffez uniformément en faisant de petits mouvements circulaires, à environ 2 cm du PCB.
4. Lorsque la soudure fond, retirez ou placez le composant avec une pince brucelles.

## Étape 4 — Ranger le poste de travail

1. Nettoyez la panne sur l'éponge humide ou la laine de laiton.
2. Étamez la panne avec une couche de soudure avant d'éteindre la station. Cela protège la panne de l'oxydation pendant le stockage.
3. Éteignez la station et attendez que le fer refroidisse avant de le ranger.
4. Rangez le fil de soudure, le flux et les outils à leur place.
5. Nettoyez le plan de travail (chutes de pattes, résidus de soudure).
6. Lavez-vous les mains, même après utilisation de soudure sans plomb.

---

## Conseils et astuces

:::tip[**Pour de meilleurs résultats**]
- Si la soudure forme une boule et ne s'étale pas, c'est que la surface n'est pas assez chaude. Maintenez le fer plus longtemps ou vérifiez la température.
- Ajoutez du flux si la soudure ne s'écoule pas bien : le flux nettoie les surfaces et facilite le mouillage.
- Ne surchauffez pas les composants sensibles (LED, circuits intégrés) : ne dépassez pas 3 à 4 secondes de contact.
- Une panne bien étamée est la clé d'une bonne soudure. Si la panne est noire, nettoyez et ré-étamez.
- Pour les composants CMS très petits (0402, 0603), utilisez la station Weller avec une panne fine.
:::

## Aller plus loin

- [Guide de soudure CMS avancé — Adafruit](https://learn.adafruit.com/adafruit-guide-excellent-soldering)
- [Technique de soudure au fer — EEVblog (vidéo)](https://www.youtube.com/watch?v=J5Sb21qbpEQ)
- [Choisir son fil de soudure — Explications des alliages](https://fr.wikipedia.org/wiki/Brasage)

---

<div style={{textAlign: 'center', marginTop: '2rem', fontSize: '0.85rem', opacity: 0.6}}>
Wiki@LAB — L.A.B · Licence CC BY-SA 4.0
</div>

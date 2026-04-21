---
id: microscope-numerique
title: "Microscope numérique — Guide d'utilisation"
sidebar_label: "Microscope numérique"
sidebar_position: 3
---

# Microscope numérique

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Électronique</span>
  <span className="badge badge--info">Inspection</span>
</div>

| | Détails |
|---|---|
| **Type** | Microscope numérique avec écran intégré |
| **Utilisation** | Inspection visuelle de PCB et composants |
| **Difficulté** | Débutant |

---

## De quoi parle-t-on ?

Le microscope numérique est un outil d'inspection visuelle qui permet d'observer des détails invisibles à l'œil nu. Équipé d'une caméra et d'un écran intégré, il affiche en temps réel une image agrandie de la zone observée, sans qu'il soit nécessaire de regarder dans un oculaire comme sur un microscope optique classique.

Au L.A.B, le microscope numérique est principalement utilisé pour le travail en électronique : vérifier la qualité d'un joint de soudure, lire le marquage d'un composant CMS minuscule, inspecter les pistes d'un circuit imprimé à la recherche de courts-circuits ou de coupures. C'est un complément naturel des stations de soudure.

L'appareil est très simple à utiliser. Il ne nécessite aucune configuration complexe et convient parfaitement aux débutants. Il suffit de positionner le sujet, de faire la mise au point et d'observer.

## Avant de commencer

:::info[**Sécurité et bonnes pratiques**]
- Le microscope est un instrument optique de précision. Manipulez-le avec soin.
- Ne touchez pas la lentille avec les doigts. Si elle est sale, nettoyez-la délicatement avec un chiffon microfibre.
- Si vous inspectez un circuit qui vient d'être soudé, attendez qu'il refroidisse avant de le placer sous le microscope.
- Ne forcez pas sur la molette de mise au point. Elle doit tourner librement.
:::

## Matériel nécessaire

- Microscope numérique avec son support
- Le PCB ou l'objet à inspecter
- Un chiffon microfibre (pour nettoyer la lentille si nécessaire)

---

## Étape 1 — Mise en place

1. Vérifiez que le microscope est correctement installé sur son support (bras ou pied).
2. Allumez le microscope avec le bouton d'alimentation. L'écran intégré s'active.
3. Placez le PCB ou l'objet à inspecter sur le plan de travail, bien à plat sous la lentille.
4. Réglez la hauteur du support pour que la lentille soit à quelques centimètres du sujet. La distance de travail varie selon le grossissement souhaité : plus la lentille est proche, plus le grossissement est important.
5. Ajustez l'éclairage intégré (LED autour de la lentille) pour obtenir un éclairage uniforme, sans reflets gênants.

## Étape 2 — Utilisation de base

**Mise au point :**

1. Tournez la molette de mise au point lentement jusqu'à ce que l'image soit nette à l'écran.
2. Si l'image est floue malgré la mise au point, ajustez la distance entre la lentille et le sujet en montant ou descendant le bras du support.

**Réglage du zoom :**

1. Utilisez les boutons de zoom numérique pour agrandir ou réduire l'image.
2. Pour inspecter un joint de soudure standard, un grossissement de 10x à 20x est généralement suffisant.
3. Pour lire le marquage d'un composant CMS (type 0402 ou 0603), augmentez le grossissement à 30x ou plus.

**Réglage de la luminosité :**

1. Ajustez l'intensité des LED d'éclairage pour éviter les zones surexposées ou trop sombres.
2. Sur les surfaces métalliques (pastilles, soudures), réduisez la luminosité pour éviter les reflets.

## Étape 3 — Techniques courantes

**Inspection de joints de soudure :**

1. Positionnez le PCB sous le microscope, face soudure vers le haut.
2. Faites la mise au point sur la zone de soudure à vérifier.
3. Un bon joint de soudure présente une surface lisse et brillante (ou légèrement satinée pour la soudure sans plomb), en forme de cône. Un joint défectueux peut être terne, granuleux, en boule ou présenter un pont de soudure entre deux pastilles.

**Détection de courts-circuits et de coupures :**

1. Examinez les pistes du PCB à grossissement moyen (15x à 20x).
2. Recherchez les ponts de soudure (soudure qui relie deux pistes adjacentes de manière non voulue).
3. Vérifiez l'intégrité des pistes fines : une micro-coupure peut être invisible à l'œil nu mais clairement visible au microscope.

**Lecture de marquages de composants :**

1. Augmentez le grossissement à 30x ou plus.
2. Centrez le composant à l'écran et ajustez l'éclairage pour maximiser le contraste du marquage.
3. Les codes imprimés sur les composants CMS (résistances, condensateurs, circuits intégrés) permettent d'identifier leurs valeurs et références.

## Étape 4 — Ranger le poste de travail

1. Éteignez le microscope.
2. Si la lentille est sale, nettoyez-la délicatement avec le chiffon microfibre.
3. Laissez le microscope sur son support, prêt pour le prochain utilisateur.
4. Rangez le PCB ou les composants inspectés.

---

## Conseils et astuces

:::tip[**Pour de meilleurs résultats**]
- Inclinez légèrement le PCB pour changer l'angle d'éclairage : cela peut révéler des défauts invisibles en vue directe.
- Pour une inspection après soudure, comparez vos joints avec des images de référence (joint correct vs joint froid vs pont de soudure).
- Si l'image vibre, vérifiez que le support est stable et que le plan de travail ne reçoit pas de vibrations.
- Le microscope peut aussi servir en dehors de l'électronique : inspection de textiles, de pièces usinées, de gravures, etc.
:::

## Aller plus loin

- [Guide visuel des défauts de soudure — IPC](https://www.ipc.org/sm/ipc-a-610_702_french.pdf)
- [Reconnaître un bon joint de soudure (images) — Adafruit](https://learn.adafruit.com/adafruit-guide-excellent-soldering/common-problems)
- [Normes IPC pour l'inspection de PCB](https://www.ipc.org)

---

<div style={{textAlign: 'center', marginTop: '2rem', fontSize: '0.85rem', opacity: 0.6}}>
Wiki@LAB — L.A.B · Licence CC BY-SA 4.0
</div>

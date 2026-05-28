---
id: melangeur-dremel
title: Fabriquer un mélangeur pour Dremel
sidebar_label: "Fabriquer un mélangeur pour Dremel"
sidebar_position: 18
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Fabriquer un mélangeur pour Dremel

| Projet | Type | Difficulté |
| --- | --- | --- |
| Projets du LAB | Projet maker | Débutant |

## Présentation

Les mélangeurs pour perceuse existent dans le commerce, mais pas en version adaptée à une Dremel — or c'est l'outil idéal pour mélanger la peinture dans les petits pots d'aérographe. La solution : concevoir et imprimer la pièce en 3D.

</div>

<img src="/img/ressources/projets-du-lab/lab-melangeur/icone.png" alt="Mélangeur pour Dremel" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

## Matériel

- Imprimante 3D (FDM)
- Dremel ou outil rotatif équivalent
- Filament PLA

## Conception

![Modèle du mélangeur](/img/ressources/projets-du-lab/MelangeurDremel.jpg)

La pièce a été modélisée dans **SketchUp** : une hélice de mélange dont la tige s'insère dans le mandrin de la Dremel.

Contraintes de conception :
- Diamètre de la tige compatible avec le mandrin Dremel (typiquement 3,2 mm)
- Hélice suffisamment petite pour entrer dans un pot de peinture pour aérographe
- Forme pensée pour brasser efficacement sans éclabousser

## Fabrication

1. **Modélisation** : design de l'hélice dans SketchUp
2. **Export** : format STL
3. **Tranchage** : import dans Cura, orientation de la pièce pour minimiser les supports
4. **Impression** : PLA, remplissage élevé (80-100 %) pour résister aux contraintes en rotation
5. **Finition** : ébavurage si nécessaire, test d'insertion dans le mandrin

## Résultat

<div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', margin: '1rem 0'}}>
  <img src="/img/ressources/projets-du-lab/IMG_7650.JPG" alt="Mélangeur imprimé en 3D, vue 1" style={{width: '100%', aspectRatio: '1 / 1', objectFit: 'cover', borderRadius: '8px'}} />
  <img src="/img/ressources/projets-du-lab/IMG_7649.JPG" alt="Mélangeur imprimé en 3D, vue 2" style={{width: '100%', aspectRatio: '1 / 1', objectFit: 'cover', objectPosition: 'center bottom', borderRadius: '8px'}} />
  <img src="/img/ressources/projets-du-lab/IMG_7651.JPG" alt="Mélangeur imprimé en 3D, vue 3" style={{width: '100%', aspectRatio: '1 / 1', objectFit: 'cover', borderRadius: '8px'}} />
  <img src="/img/ressources/projets-du-lab/IMG_7652.JPG" alt="Mélangeur imprimé en 3D, vue 4" style={{width: '100%', aspectRatio: '1 / 1', objectFit: 'cover', borderRadius: '8px'}} />
</div>

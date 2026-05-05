---
id: template
title: Template
sidebar_label: 'Template'
sidebar_position: 2
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

<!--
  Icône SVG inline du titre (à côté du H1).
  Le SVG ci-dessous représente la carte STeaMi (placeholder par défaut).
  Pour ta fiche, remplace-le par une icône thématique de l'activité, en flat-design,
  dans la couleur du projet (#8a6e18) avec les opacités 0.1 / 0.25 / 1.0
  (cf. CONVENTIONS.md, section "Header").
-->

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="3" y="5" width="18" height="14" rx="2" fill="#8a6e18" opacity="0.1"/><rect x="5" y="7" width="14" height="10" rx="1" fill="#8a6e18" opacity="0.25"/><rect x="8" y="9" width="8" height="6" rx="0.5" fill="#8a6e18"/><circle cx="6" cy="8" r="0.5" fill="#8a6e18"/><circle cx="18" cy="8" r="0.5" fill="#8a6e18"/><circle cx="6" cy="16" r="0.5" fill="#8a6e18"/><circle cx="18" cy="16" r="0.5" fill="#8a6e18"/><line x1="3" y1="11" x2="1" y2="11" stroke="#8a6e18" strokeWidth="1"/><line x1="3" y1="14" x2="1" y2="14" stroke="#8a6e18" strokeWidth="1"/><line x1="21" y1="11" x2="23" y2="11" stroke="#8a6e18" strokeWidth="1"/><line x1="21" y1="14" x2="23" y2="14" stroke="#8a6e18" strokeWidth="1"/><line x1="10" y1="21" x2="14" y2="21" stroke="#8a6e18" strokeWidth="1"/><line x1="12" y1="19" x2="12" y2="21" stroke="#8a6e18" strokeWidth="1"/></svg> Titre de la fiche

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Sciences</span>
  <span className="badge badge--info">SteaMi</span>
  <span className="badge badge--warning">MicroPython</span>
</div>

| Projet        | Durée                | Difficulté                                 | Âge                    | Version MicroPython testée |
| ------------- | -------------------- | ------------------------------------------ | ---------------------- | -------------------------- |
| I-Novmicro #2 | <!-- ex: 45 min -->  | <!-- Débutant / Intermédiaire / Avancé --> | <!-- ex: 11-99 ans --> | <!-- ex: 1.23.1 -->        |

## Matériel et Montage

<!-- Lister le matériel nécessaire, une ligne par item -->

- 1 carte STeaMi
- 1 câble USB-C
- 1 ordinateur avec navigateur web

</div>

<!--
  Icône thématique de la fiche (visuel à droite du header, 225×225 px).
  À créer en SVG flat-design dans la couleur du projet (#8a6e18),
  puis exportée en PNG dans /static/img/ressources/inovmicro-exao/<id-fiche>/icone.png.

  La taille 225×225 est la convention du wiki ; le comportement responsive global
  du header (icône qui peut s'écraser sur très petit écran) est un sujet
  qui dépasse le scope d'une fiche unique — à traiter au niveau du CSS global.
-->
<img src="/img/ressources/inovmicro-exao/<id-fiche>/icone.png" alt="<description courte de la fiche>" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

<!--
  Présenter le contexte de l'activité en quelques lignes :
  - le phénomène / la notion abordé·e
  - pourquoi c'est intéressant à explorer avec la STeaMi
  - éventuellement une mise en situation concrète
-->

---

## Objectifs d'apprentissage

<!--
  Lister les objectifs sous forme de points.
  Privilégier des verbes d'action (comprendre, manipuler, identifier, programmer...).
-->

- <!-- objectif 1 -->
- <!-- objectif 2 -->
- <!-- objectif 3 -->

---

## Étape 1 — Construire

<!--
  Décrire le câblage / l'assemblage matériel.
  Inclure une image du montage en suivant le pattern recommandé par CONVENTIONS.md.

  Exemple de balise image (pattern figure + figcaption centré) :

  <figure style={{textAlign: 'center', margin: '1rem auto'}}>
    <img
      src="/img/ressources/inovmicro-exao/<id-fiche>/montage.png"
      alt="<description du montage>"
      style={{maxWidth: '100%', height: 'auto'}}
    />
    <figcaption style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
      <!-- légende de l'image -->
    </figcaption>
  </figure>
-->

---

## Étape 2 — Programmer

<!--
  Présenter le code progressivement :
  - expliquer la logique avant de donner le bloc complet
  - commenter les lignes clés
  - préciser ce que l'élève devrait observer en exécutant
-->

```python
# Testée avec firmware STeaMi 1.23.1
#
```

---

## Étape 3 — Améliorer

<!--
  Proposer 2 ou 3 pistes d'extension / variations :
  - modifier un paramètre et observer
  - ajouter un capteur / un actionneur
  - combiner avec une autre fiche
-->

---

<!-- Footer pour fiches originales (i01-i07) : -->

_Cette fiche fait partie du projet [I-Novmicro #2 — Action EXAO](/projets/inovmicro-exao). Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._

<!-- Footer pour fiches portées de Let's STEAM (i08-i22), à utiliser à la place du footer ci-dessus :
*Cette fiche fait partie du projet [I-Novmicro #2 — Action EXAO](/projets/inovmicro-exao). Adaptée du projet [Let's STEAM](/projets/lets-steam) (fiche [`r1asXX-nom`](/ressources/lets-steam/r1asXX-nom)) sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*
-->

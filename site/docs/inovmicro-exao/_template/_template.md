---
id: template
title: Template
sidebar_label: "template"
sidebar_position: 2
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1rem'}}>
<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle'}}></svg> Titre de la fiche

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
<span className="badge badge--primary">Informatique</span>
<span className="badge badge--primary">Technologie</span>
<span className="badge badge--primary">Sciences</span>
<span className="badge badge--info">SteaMi</span>
<span className="badge badge--warning">MicroPython</span>
</div>

| Projet | Durée | Difficulté | Âge | Version MicroPython testée |
|---|---|---|---|---|
| I-Novmicro #2 | <!-- ex: 45 min --> | <!-- Débutant / Intermédiaire / Avancé --> | <!-- ex: 11-99 ans --> | <!-- ex: 1.23.1 --> |

## Matériel et Montage

<!-- Lister le matériel nécessaire, une ligne par item -->
- 1 carte STeaMi
- 1 câble USB-C
- 1 ordinateur avec navigateur web

</div>

<!--
  Icône thématique de la fiche.
  À créer en SVG flat-design dans la couleur du projet (#8a6e18),
  puis exportée en PNG dans /static/img/ressources/inovmicro-exao/<id-fiche>/icone.png
-->
<img src="/img/ressources/inovmicro-exao/<id-fiche>/icone.png" alt="<description courte de la fiche>" style={{width: '180px', height: '180px', objectFit: 'contain', flexShrink: 0}} />

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
*Cette fiche fait partie du projet [I-Novmicro #2 — Action EXAO](/projets/inovmicro-exao). Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

<!-- Footer pour fiches portées de Let's STEAM (i08-i22), à utiliser à la place du footer ci-dessus :
*Cette fiche fait partie du projet [I-Novmicro #2 — Action EXAO](/projets/inovmicro-exao). Adaptée du projet [Let's STEAM](/projets/lets-steam) (fiche [`r1asXX-nom`](/ressources/lets-steam/r1asXX-nom)) sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*
-->

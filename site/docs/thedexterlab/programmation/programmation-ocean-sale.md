---
id: programmation-ocean-sale
title: Conductimètre STM32
sidebar_label: "Conductimètre STM32"
sidebar_position: 2
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="4" y="4" width="16" height="16" rx="2" fill="#1a4a48" opacity="0.1"/><rect x="6" y="6" width="12" height="12" rx="1" fill="#1a4a48" opacity="0.25"/><path d="M9 10h6M9 12h6M9 14h4" stroke="#1a4a48" strokeWidth="1" strokeLinecap="round" opacity="1.0"/></svg> Conductimètre STM32

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--info">Conductimètre SEN0244</span>
  <span className="badge badge--warning">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| The Dexter Lab | 30-45 min | Débutant | 12-16 ans |

## Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 1 conductimètre SEN0244 (sonde + carte d'acquisition)
- 1 câble USB - micro B

</div>

<img src="/img/ressources/thedexterlab/programmation-ocean-sale/icone.svg" alt="Conductimètre STM32" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Cette fiche technique accompagne la ressource [Pourquoi l'océan est salé](/ressources/thedexterlab/ocean-sale). Elle décrit comment câbler et programmer un conductimètre pour mesurer la conductivité électrique de l'eau, une valeur directement liée à la concentration en sel.

## Objectifs d'apprentissage

- Câbler une sonde de conductivité sur une carte STM32
- Installer une extension MakeCode dédiée à un capteur I2C
- Collecter et afficher des mesures de conductivité dans la console série

---

## Mesurer la conductivité de l'eau

### Câblage du conductimètre

Le conductimètre est composé de deux éléments :

1. La sonde (élément terminé par deux électrodes, qui sera plongé dans l'eau)
2. La carte d'acquisition (facilite la communication entre la STM32 et la sonde de mesure)

Le branchement de la sonde sur la carte d'acquisition se fait via le connecteur correspondant à la fiche de la sonde, qui ne comporte que deux broches.

Le lien avec la STM32 se fait via l'autre connecteur (avec trois broches), comme suit :

- Rouge sur 5V
- Noir sur GND
- Bleu sur A0

<img src="/img/ressources/thedexterlab/programmation-ocean-sale/full_montage.svg" alt="Câblage du conductimètre" style={{width: '100%', height: 'auto', display: 'block', margin: '1rem 0'}} />

:::info
Pour cette activité, installez l'extension **ECMeter_SEN0244**.
:::

### Programme

```javascript
Serial.attachToConsole()

forever(function () {
    Serial.writeValue("EC", input.getECValue(pins.A0, ECUnit.US_CM))
    loops.pause(1000);
})
```

---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

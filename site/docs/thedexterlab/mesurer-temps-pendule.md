---
id: mesurer-temps-pendule
title: "Puis-je mesurer le temps en faisant osciller un pendule ?"
sidebar_label: "Mesurer le temps avec un pendule"
sidebar_position: 20
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><circle cx="12" cy="12" r="10" fill="#1a4a48" opacity="0.1"/><line x1="12" y1="3" x2="8" y2="18" stroke="#1a4a48" strokeWidth="1.2" opacity="0.25"/><line x1="12" y1="3" x2="12" y2="18" stroke="#1a4a48" strokeWidth="1.2" opacity="0.25" strokeDasharray="2 2"/><line x1="12" y1="3" x2="16" y2="18" stroke="#1a4a48" strokeWidth="1.2" opacity="0.25"/><circle cx="12" cy="3" r="1" fill="#1a4a48" opacity="1.0"/><circle cx="8" cy="18" r="2" fill="#1a4a48" opacity="1.0"/></svg> Puis-je mesurer le temps en faisant osciller un pendule ?

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Physique</span>
  <span className="badge badge--primary">Mathématiques</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--info">Capteur effet Hall</span>
  <span className="badge badge--secondary">MakeCode</span>
  <span className="badge badge--secondary">Fizziq</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| The Dexter Lab | 3-4 heures | Intermédiaire | 13-18 ans |

**Problématique :** Comment mesurer le temps ?

## Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 1 capteur de mouvement compatible (accéléromètre)
- 1 ficelle ou fil léger mais solide (différentes longueurs)
- Divers poids (billes, petits sacs de sable, etc.)
- 1 règle ou mètre ruban
- 1 smartphone ou tablette avec l'application Fizziq installée
- 1 support stable pour suspendre le pendule
- Câbles de connexion pour la carte STM32 et le capteur de mouvement
- 1 calculatrice
- Feuilles de papier et stylos pour l'enregistrement de données

<a href="/pdf/thedexterlab/PR20-TDL_Feuille_Travail_Vierge_A3.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger la feuille de travail</a>

</div>

</div>

---

:::info
Le temps est un concept complexe qui peut être défini comme la mesure de la durée entre deux événements. Il est utilisé pour organiser notre vie quotidienne et pour expliquer les phénomènes naturels dans l'univers. Le temps est généralement mesuré à l'aide de dispositifs tels que des horloges et des calendriers, qui utilisent des références telles que le mouvement des astres ou des vibrations électroniques pour mesurer les intervalles de temps.

Avant l'invention des horloges et des montres, comment pensez-vous que les humains mesuraient le temps ? Un des moyens les plus anciens est le pendule, un dispositif fascinant qui a été utilisé pendant des siècles pour étudier le temps et la gravité.
:::

## Déroulé de l'activité

Cette activité guide les élèves à travers une exploration des pendules pour comprendre comment ils peuvent mesurer le temps. Divisée en plusieurs sous-protocoles, l'expérience commence par l'identification des principes de base d'un pendule, puis étudie comment la longueur du fil et le poids affectent son mouvement. Ensuite, les élèves calibrent un pendule pour mesurer des intervalles de temps précis et comparent leur fiabilité avec un chronomètre. L'activité se conclut par une réflexion sur les résultats et les applications historiques des pendules.

## Compétences mobilisées

- Esprit scientifique et critique
- Travail en équipe
- Communication et argumentation
- Connaissances en physique (mouvement, gravité)

## Étape 1 : comprendre le fonctionnement du pendule

### Orientation

Qu'est-ce qu'un pendule et comment a-t-il été utilisé dans l'histoire pour mesurer le temps ?

### Conceptualisation

Un pendule est un objet suspendu à un point fixe de telle sorte qu'il puisse osciller librement vers l'avant et vers l'arrière sous l'influence de la gravité. En physique, un "pendule simple" est un modèle idéalisé comprenant une masse ponctuelle suspendue à un fil sans masse et inextensible.

**Histoire du pendule dans la mesure du temps**

L'invention du pendule horloger est généralement attribuée au physicien néerlandais Christiaan Huygens en 1656. Le pendule a révolutionné la mesure du temps en offrant une précision jusqu'alors inégalée. Les premières horloges à pendule étaient précises à moins de 1 minute par jour, une amélioration significative par rapport aux technologies antérieures. Ce niveau de précision a eu un impact considérable sur la navigation maritime, l'astronomie, et même sur la vie quotidienne.

**Concepts clés**

- **Oscillation** : mouvement de va-et-vient autour d'une position d'équilibre.
- **Période** : le temps nécessaire pour qu'un pendule effectue un aller-retour complet.
- **Amplitude** : la distance maximale à laquelle le pendule s'éloigne de sa position de repos.

### Investigation

Pour commencer l'enquête, demandez aux élèves de réfléchir à l'utilisation du pendule dans l'histoire, notamment dans les horloges.

**Matériel**

- Une tige ou un fil solide
- Une masse (bille, petit sac de sable)
- Règle ou mètre ruban
- Carte STM32
- Capteur à effet Hall
- Un aimant néodyme
- Smartphone/tablette avec l'application Fizziq
- Support pour le pendule

**Création d'un pendule simple**

1. **Couper le fil** : mesurez et coupez un morceau de fil d'environ 1 mètre.
2. **Attacher la masse** : attachez une petite masse à un bout du fil.
3. **Accrochage** : accrochez l'autre extrémité du fil à un support stable.

Il y a deux paramètres qui peuvent être adaptés sur un pendule : la masse $m$ et la longueur du fil $l$.

**Mesure de fréquence avec capteur à effet Hall**

1. **Installation d'un aimant dans la masse** : pour détecter les passages du pendule avec un capteur à effet Hall, fixer un aimant néodyme à la masse.
2. **Installation du capteur** : fixez un capteur à effet Hall près du point où la masse passera pendant son mouvement.
3. **Connexion à la carte STM32** : connectez le capteur à effet Hall à la carte STM32.
4. **Programmation** : utilisez MakeCode pour mesurer la fréquence de passage de la masse.
5. **Test et collecte de données** : mettez le pendule en mouvement et observez les données collectées.

**Mesure de fréquence avec Fizziq**

L'utilisation de l'application mobile Fizziq permet d'aller plus loin avec une analyse vidéo de l'expérience :

1. Installez l'application Fizziq sur votre smartphone ou tablette.
2. Configurez-la pour mesurer l'accélération (module Cinématique).
3. Déterminez l'échelle en positionnant une règle.
4. Étudiez le mouvement de descente de la balle en pointant son mouvement.
5. Ajoutez au cahier d'expériences les données calculées.
6. Fixez le smartphone ou la tablette sur la masse.
7. Testez et collectez les données.

**Expérience : vérifier que les oscillations sont isochrones**

Pour cette enquête, on va regarder si la période d'oscillation ne dépend pas de l'amplitude.

1. **Définir des amplitudes** : choisissez 3-4 amplitudes différentes (par exemple 5°, 10°, 15°).
2. **Mesurer la période** : pour chaque amplitude, utilisez le chronomètre pour mesurer le temps pour 10 oscillations.
3. **Calcul de la période** : divisez chaque mesure par 10.
4. **Analyse des données** : comparez les périodes calculées pour chaque amplitude.

Les périodes sont-elles identiques ou différentes ? Comment ces résultats s'accordent-ils avec la théorie que les oscillations d'un pendule simple sont isochrones pour de petites amplitudes ?

### Débriefing

Cette expérience permet aux élèves de comprendre le principe d'isochronisme dans les oscillations d'un pendule simple et d'appliquer des compétences en mesure et en analyse de données.

## Étape 2 : mesure des oscillations avec un pendule simple

### Orientation

Pour un pendule donné, l'étape précédente a montré que la fréquence est constante pour des petites amplitudes. La fréquence est donc liée aux caractéristiques physiques du système. L'objectif de cette étape est de répondre à la question : Comment la longueur de la ficelle et le poids affectent-ils les oscillations ?

### Conceptualisation

**Comment la longueur de la ficelle affecte-t-elle la période ?**

Dans un pendule simple, sans frottement ni résistance de l'air, la période T est donnée par :

```
T = 2π × √(L / g)
```

où L est la longueur de la ficelle et g est l'accélération due à la gravité (environ 9,81 m/s² sur Terre).

Cette équation nous montre que la période T est proportionnelle à la racine carrée de la longueur L. Ainsi, si la longueur de la ficelle augmente, la période d'oscillation augmentera également, mais de manière non linéaire.

**Comment la masse affecte-t-elle la période ?**

La formule pour la période d'un pendule simple ne dépend pas de la masse de l'objet au bout de la ficelle. En pratique, si nous avons deux pendules de même longueur mais de masses différentes, leurs périodes d'oscillation devraient être identiques, à condition que les effets de la résistance de l'air et du frottement soient négligeables.

Les élèves pourraient trouver ce résultat contre-intuitif, ce qui peut conduire à des discussions enrichissantes sur la physique impliquée.

### Investigation

**Effet de la longueur de la ficelle**

1. **Hypothèse** : demandez aux élèves de faire une hypothèse sur l'effet de la longueur.
2. **Changement de longueur** : réglez le pendule à différentes longueurs (30 cm, 50 cm, 70 cm).
3. **Mesure de la période** : pour chaque longueur, mesurez le temps pour 10 oscillations.
4. **Calcul de la période** : divisez chaque mesure par 10.
5. **Analyse des données** : tracez un graphique de la période en fonction de la longueur.

**Effet de la masse**

1. **Hypothèse** : formuler une hypothèse sur l'effet de la masse.
2. **Changement de masse** : remplacez la masse par des masses différentes (50 g, 100 g, 150 g).
3. **Mesure de la période** : pour chaque masse, mesurez le temps pour 10 oscillations.
4. **Calcul de la période** : divisez chaque mesure par 10.
5. **Analyse des données** : tracez un graphique de la période en fonction de la masse.

### Débriefing

Cette expérimentation permet aux élèves d'observer et d'analyser les facteurs qui influencent les oscillations d'un pendule.

**Questions pour ouvrir la réflexion :**

- Comment la longueur de la ficelle affecte-t-elle la période d'oscillation ?
- Comment la masse affecte-t-elle la période d'oscillation ?
- Les observations correspondent-elles aux hypothèses initiales ?

## Étape 3 : calibrage du pendule

### Orientation

Comment peut-on calibrer un pendule pour qu'il mesure le temps aussi précisément qu'un chronomètre ?

### Conceptualisation

Pour calibrer un pendule avec une précision comparable à celle d'un chronomètre :

1. **Comprendre les principes de base** : connaître la formule `T = 2π × √(L/g)`.
2. **Collecte de données** : utiliser des méthodes de mesure précises pour $L$ et $g$.
3. **Mesures répétées et moyenne** : effectuer plusieurs mesures de $T$ et calculer la moyenne.
4. **Utilisation de capteurs** : incorporer des capteurs à effet Hall pour mesurer avec précision.
5. **Ajustements** : ajuster la longueur $L$ jusqu'à obtenir la période $T$ souhaitée.
6. **Tests et validation** : comparer les temps mesurés par le pendule et le chronomètre sur de longues périodes.

### Investigation

Les élèves vont essayer de créer un pendule dont la fréquence sera de 1 Hz (période de 1 seconde).

**Étapes**

1. **Préparation du pendule** : attacher la masse, accrocher au support.
2. **Mesure initiale de la période** : écarter le poids à un petit angle (moins de 20°), lâcher, chronométrer 10 oscillations, diviser par 10.
3. **Calcul de la longueur nécessaire** : utiliser `L = (g × T²) / (4π²)` avec `T = 1 s`.
4. **Ajustement de la longueur** du pendule.
5. **Vérification** : répéter la mesure pour vérifier la nouvelle période.
6. **Analyse des données** : discuter des résultats obtenus et des sources d'erreur.
7. **Interprétation** : identifier les sources d'erreur et les moyens de les minimiser.

### Débriefing

Dans cette expérimentation, nous avons appris comment ajuster un pendule pour obtenir une période d'oscillation d'une seconde en utilisant des principes de physique fondamentale. L'activité a montré l'importance de la précision dans la mesure. Les élèves ont pu appliquer des formules mathématiques pour résoudre des problèmes pratiques.

## Étape 4 : comprendre les mécanismes d'échappement

### Orientation

Qu'est-ce qu'un mécanisme d'échappement et comment contribue-t-il à la précision d'une horloge à pendule ?

### Conceptualisation

Un mécanisme d'échappement est une composante cruciale dans les horloges mécaniques, surtout celles dotées d'un pendule. Ce mécanisme permet de réguler la libération de l'énergie mécanique stockée dans un ressort, assurant ainsi un mouvement régulier et continu du pendule. En bref, le mécanisme d'échappement sert à "libérer" une petite quantité d'énergie à intervalles réguliers pour maintenir le pendule en mouvement.

Dans une horloge à pendule, le mécanisme d'échappement travaille en symbiose avec le pendule pour assurer que chaque oscillation déplace le mécanisme d'échappement d'une quantité fixe. Cela contribue grandement à la précision de l'horloge. Sans un mécanisme d'échappement bien conçu, même un pendule parfaitement calibré ne serait pas suffisamment précis pour la mesure du temps à long terme.

### Investigation

**Matériel nécessaire**

- Kit d'assemblage d'une horloge à pendule
- Carte STM32 compatible avec MakeCode
- Capteur à effet Hall
- Résistances de pull-up/pull-down (environ 10 kΩ)
- Fils de connexion (jumper)
- Ordinateur avec accès à MakeCode
- Câble USB pour la carte STM32

**Étapes**

1. **Préparation du STM32 et du capteur à effet Hall** : connectez le capteur à la carte (signal sur GPIO, VCC sur 3.3V, GND sur GND), ajouter une résistance de pull-up/pull-down.
2. **Programmation avec MakeCode** : lire la valeur de la broche du capteur, calculer le temps entre oscillations.
3. **Téléversement du code** sur la carte STM32.
4. **Installation du capteur à effet Hall** de manière à détecter le passage du pendule.
5. **Tests initiaux** : alimenter le système et laisser le pendule osciller.
6. **Mesure de la précision** : calculer la période moyenne et l'écart-type.
7. **Mesure de la stabilité dans le temps** : laisser le système fonctionner pendant une période prolongée (1h, 4h).
8. **Analyse des données**.
9. **Optimisation et ajustements**.
10. **Rapport et conclusion**.

### Débriefing

Cette expérimentation avec un pendule et un mécanisme d'échappement a permis aux élèves de plonger profondément dans la physique des oscillations et la mesure du temps. En utilisant MakeCode et une carte STM32, le projet a également introduit des compétences en programmation et en électronique, rendant l'expérience interdisciplinaire.

Pour aller plus loin :

- [Pendules et Horloges](https://www.khanacademy.org/science/physics/mechanical-waves-and-sound/simple-harmonic-motion/a/simple-harmonic-motion-review) - Un cours de Khan Academy sur les oscillations.
- [Explication des mécanismes d'échappement](https://www.explainthatstuff.com/how-escapements-work.html) - Un article expliquant le fonctionnement des mécanismes d'échappement.

---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/thedexterlab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

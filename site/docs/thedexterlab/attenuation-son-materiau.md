---
id: attenuation-son-materiau
title: Mesurer l'atténuation du son selon les matériaux
sidebar_label: "Mesurer l'atténuation du son selon les matériaux"
sidebar_position: 19
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# Mesurer l'atténuation du son selon les matériaux

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Physique</span>
  <span className="badge badge--primary">Mathématiques</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--info">Microphone</span>
  <span className="badge badge--secondary">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| The Dexter Lab | 2-3 heures | Intermédiaire | 13-18 ans |

**Problématique :** Quels sont les matériaux habituels qui peuvent atténuer le son ?

## Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 1 écran LCD
- 1 buzzer
- 1 microphone MP34DT01
- Des câbles de connexion
- 1 câble USB - micro B

<PdfLink href="/pdf/thedexterlab/PR19-TDL_Feuille_Travail_Vierge_A3.pdf">Télécharger la feuille de travail</PdfLink>

</div>

<img src="/img/ressources/thedexterlab/attenuation-son-materiau/icone.png" alt="Atténuation du son par matériaux" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

:::info
L'atténuation du son désigne la réduction de l'intensité ou de la force des ondes sonores lorsqu'elles se déplacent dans un milieu ou traversent une barrière. On peut y parvenir par différents moyens, comme l'absorption de l'énergie sonore, sa réflexion ou sa dispersion. L'atténuation du son sert notamment à réduire la pollution sonore dans les zones urbaines, à améliorer l'acoustique des salles de concert et des studios d'enregistrement, et à minimiser l'impact du bruit industriel sur les communautés voisines.
:::

## Déroulé de l'activité

On parle souvent d'isolation pour conserver l'énergie, par exemple pour rendre une habitation moins consommatrice ou garder une bouteille d'eau fraîche lors des chaudes journées d'été.

Il est aussi possible d'isoler phoniquement, pour réduire l'intensité des bruits extérieurs. Comment mesure-t-on un "bruit" ou son atténuation ? La forme de la matière isolante a-t-elle un impact ? Quelles sont les matières isolantes ?

Cette activité a pour but d'essayer différentes matières (bois, métal, mousse, ...) et de déterminer laquelle est la plus isolante, mais aussi de comprendre la mesure du bruit et l'échelle "décibel".

Pour cela, un microphone mesure l'intensité du son à l'intérieur et à l'extérieur de boîtes contenant différents matériaux.

<figure style={{margin: '1rem auto', textAlign: 'center'}}>
  <img src="/img/ressources/thedexterlab/attenuation-son-materiau/DATA19_TDL.webp" alt="Schéma synthétique du protocole" style={{maxWidth: '100%', height: 'auto', margin: '0 auto'}} />
  <figcaption style={{margin: 0}}>Schéma synthétique du protocole</figcaption>
</figure>

## Compétences mobilisées

Les compétences mobilisées par ce protocole sont :

- La collecte de données expérimentales
- L'analyse de données
- La modélisation et l'approximation de résultats
- La compréhension de concepts physiques tels que l'atténuation phonique, les ondes sonores, les grandeurs physiques (intensité sonore, décibel, etc.)

Les disciplines associées sont :

- La physique
- Les mathématiques (notamment la statistique)
- La programmation informatique (pour la manipulation des capteurs et la récupération des données)
- La communication scientifique

## Étape 1 : Collecter des données

### Orientation

Comment déterminer le pouvoir d'isolation phonique des matériaux ? Pour répondre, il faut d'abord mesurer la "quantité" de son à un endroit donné. Le plus simple est d'utiliser un microphone, qui donne l'intensité du son. Pour tester l'atténuation du son par différents matériaux, on peut créer des boîtes et y enfermer le microphone.

Le but étant de connaître le "pouvoir" d'absorption du son d'un matériau, comment faire pour le mesurer ? Le plus simple reste de mesurer le bruit (intensité sonore) à l'intérieur et à l'extérieur de la boîte. Ainsi en faisant une simple différence entre les valeurs, il sera possible de déterminer l'atténuation du son.

Plusieurs hypothèses peuvent être formulées :

- Quelles sont les matières solides les plus isolantes ?
- Quelles sont les matières déformables les plus isolantes ?
- L'épaisseur a-t-elle un impact sur la capacité isolante d'un matériau ?
- La densité a-t-elle un impact sur la capacité isolante d'un matériau ?

### Conceptualisation

Le son est une vibration qui se propage sous la forme d'une onde de pression audible, à travers un milieu de transmission tel qu'un gaz, un liquide ou un solide. Dans un milieu fluide compressible (l'air, par exemple), le son se déplace sous forme d'une onde, en revanche les objets solides vibrent pour transmettre un son (un diapason, par exemple). C'est donc pour cela que le son ne peut pas se propager dans le vide.

Le déplacement (et l'intensité) du son dépend du milieu dans lequel il évolue. Lorsque le milieu change (on parle alors de milieu hétérogène), le son se retrouve diffusé et atténué.

Pour mesurer l'intensité d'un son, il est courant d'utiliser le décibel (dB). Cette unité sert aussi pour quantifier l'atténuation d'un son. Le décibel est une unité logarithmique, ce qui signifie que si l'on mesure une première atténuation de 10 dB et une seconde de 20 dB, cette dernière ne sera pas 2 fois moins intense, mais 10 fois moins intense !

Pour comparer le pouvoir isolant des matériaux, on utilise un simple microphone et un son de référence. On mesure d'abord, avec le microphone, l'intensité du son dans l'air, sans isolant (ce sera la valeur de référence). On place ensuite le microphone dans chacune des boîtes pour mesurer successivement les intensités.

### Investigation

La carte programmable est l'élément principal de l'expérimentation. Elle récupère les informations en provenance du microphone, ainsi que de l'émission du son.

La potence maintient le buzzer toujours à la même hauteur. L'expérience est ainsi répétable et la mesure fiable.

Le microphone est, lui aussi, placé au même endroit pour chaque mesure. Pour simplifier le processus, on peut utiliser deux microphones : l'un dans la boîte, l'autre à l'extérieur. Celui de l'extérieur sert de microphone témoin et donne toujours la valeur de référence.

L'écran affiche la mesure pendant l'expérimentation, ce qui permet de noter la valeur obtenue pour chacun des matériaux.

Les mesures doivent impérativement se faire dans une pièce aussi silencieuse que possible, pour ne pas fausser les résultats.

### Débriefing

Avec cette expérimentation, on a appris à mesurer l'atténuation du son par un matériau. L'échelle des décibels a servi à quantifier ces valeurs et à comparer les différents résultats. Apprendre à bien isoler la variable à mesurer et la nécessité d'une valeur de référence est essentiel pour obtenir des résultats valables et cohérents.

## Étape 2 : Afficher les données collectées

### Orientation

À l'étape précédente, on a créé un système simple de mesure de l'absorption du son des matériaux. Il faut maintenant comparer ces valeurs, puis déterminer s'il existe des matériaux qui sont de meilleurs isolants phoniques que d'autres, et pourquoi.

### Conceptualisation

La carte électronique utilisée pour l'expérience a des interfaces pour communiquer avec d'autres appareils. Elles servent à récupérer les données de l'expérience pour les exploiter ensuite.

Il y a deux manières de récupérer les données issues des capteurs : l'affichage sur l'écran LCD pour faire des relevés manuels, ou la communication "série" entre la carte programmable et l'ordinateur, plus automatisée.

### Investigation

Pour cette étape, utilisez un petit écran LCD pour afficher les valeurs mesurées par les capteurs au fil de l'expérience.

Ensuite, utilisez un tableau sur papier pour noter les résultats relevés. Les résultats seront regroupés en deux colonnes : le matériau utilisé (rien, bois, acier, mousse, ...) et l'intensité sonore (en décibels).

| Matériau utilisé | Intensité sonore |
|---|---|
|  |  |
|  |  |

### Débriefing

Au terme de cette étape, plusieurs objectifs ont été atteints :

- Comprendre comment connecter la carte à d'autres périphériques
- Utiliser un programme pour afficher des données sur un écran LCD
- Récupérer les données d'une expérience en vue de leur analyse ultérieure

## Étape 3 : Analyser les données

### Orientation

Grâce aux étapes précédentes, il est possible de connaître le pouvoir d'absorption sonore des matériaux. Comment vérifier l'hypothèse de départ ? Quels sont les outils nécessaires pour analyser les données ?

### Conceptualisation

Pour valider l'hypothèse de départ, il faut mettre les données en forme de manière à rendre visible le lien entre les grandeurs physiques. Suivant l'hypothèse de départ, l'analyse n'est pas la même :

- Dans le cas d'une expérimentation sur plusieurs matériaux, il n'y a qu'une seule grandeur : l'atténuation phonique d'un matériau. Une simple liste triée par atténuation (de la plus grande à la plus petite) devrait aider à trouver une réponse.
- Dans le cas d'une expérimentation sur l'épaisseur d'un matériau, il y a deux grandeurs : la manière la plus directe de visualiser les données est d'utiliser un nuage de points avec l'épaisseur du matériau en abscisse et l'atténuation en ordonnée.

Une fois le graphique tracé, une droite de régression (même approximative) fait apparaître une première approximation de la loi qui relie l'épaisseur d'un matériau et son atténuation phonique.

### Investigation

Les données représentent une évolution au fil de l'épaississement progressif du matériau : on peut les représenter sur un graphique dans un tableur. Le tableur peut aussi servir à lister les matériaux avec les atténuations mesurées, pour les trier et les comparer entre eux.

Sur la représentation graphique, en choisissant la bonne échelle, il est possible de valider/invalider directement l'hypothèse de départ.

En regroupant les résultats avec les autres enquêteurs de la classe, la première approximation peut être affinée. Utiliser l'approximation pour prédire l'atténuation sonore pour une épaisseur donnée en dehors de la plage de valeur retenue pour l'enquête, et valider avec le dispositif si la prédiction est proche de la réalité.

Essayez d'approximer l'erreur maximale de la mesure de chaque capteur et vérifier l'impact sur la confiance des résultats.

Quelles sont les améliorations à apporter au protocole pour améliorer la qualité du résultat ? Y a-t-il d'autres grandeurs physiques qui pourraient interférer dans l'expérience ?

### Débriefing

Pendant l'analyse des données, la représentation visuelle a montré si l'hypothèse de départ était validée ou invalidée. L'analyse des données sert aussi à extrapoler une première approximation de la loi sous-jacente. Partager les informations avec d'autres enquêteurs indique si les résultats sont valides et les conclusions comparables.

## Programmation

Les fiches techniques de programmation (câblage, code, extensions MakeCode) sont regroupées dans une fiche dédiée : [Programmation : Atténuation du son par matériau](/ressources/thedexterlab/programmation/programmation-attenuation-son-materiau).


---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

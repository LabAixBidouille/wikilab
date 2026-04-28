---
id: solution-meteo
title: Station météo complète
sidebar_label: "Station météo complète"
sidebar_position: 16
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><circle cx="16" cy="8" r="3" fill="#1a4a48" opacity="1.0"/><path d="M5 14c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5c1.5 0 3 1 3 3s-1.5 3-3 3h-9c-2 0-3.5-1.5-3.5-3.5S3 13.5 5 14z" fill="#1a4a48" opacity="0.25"/><line x1="6" y1="20" x2="5" y2="22" stroke="#1a4a48" strokeWidth="1.5" opacity="1.0" strokeLinecap="round"/><line x1="10" y1="20" x2="9" y2="22" stroke="#1a4a48" strokeWidth="1.5" opacity="1.0" strokeLinecap="round"/><line x1="14" y1="20" x2="13" y2="22" stroke="#1a4a48" strokeWidth="1.5" opacity="1.0" strokeLinecap="round"/></svg> Station météo complète

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Physique</span>
  <span className="badge badge--primary">Mathématiques</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--primary">Ingénierie</span>
  <span className="badge badge--primary">Biologie</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--info">Anémomètre</span>
  <span className="badge badge--secondary">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| The Dexter Lab | 4-6 heures | Avancé | 13-18 ans |

**Problématique :** Peut-on construire une station météorologique mesurant la température, l'humidité, la pression, le vent, la pluie ?

## Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 1 breadboard
- 1 ensemble de fils de raccordement
- 3 LED
- 3 résistances
- 1 interrupteur à lame souple (interrupteur reed)
- 1 aimant de petite taille
- Matériel pour construire l'anémomètre : pics à brochette, paille en plastique, bouchon en liège, deux balles de Ping-Pong. Ou anémomètre (imprimable en 3D), pics à brochette, pastille adhésive, morceau de bois
- Un support stable pour l'axe de rotation

<a href="/pdf/thedexterlab/PR16-TDL_Feuille_Travail_Vierge_A3.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger la feuille de travail</a>

</div>

<img src="/img/ressources/thedexterlab/solution-meteo/icone.png" alt="Station météo complète" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

:::info
Le temps qu'il fait ou fera suscite un vif intérêt auprès de la population. La météo joue un rôle important sur notre humeur et parfois sur nos comportements. Il y a parfois une confusion entre climat et météo, qui se différencient notamment par l'échelle de temps auxquelles elles s'appliquent. Le climat désigne l'ensemble des facteurs météorologiques qui caractérisent un endroit donné sur une longue période (30 ans en principe). La météo est l'évaluation du temps qu'il fait ou qu'il va faire à très court terme.
:::

## Déroulé de l'activité

Dans cette activité, il ne s'agit pas de faire des prévisions météorologiques, mais plutôt de mieux comprendre les concepts sous-jacents qui permettent de faire de telles prévisions. Une manière efficace de pouvoir se les approprier est de passer par la mesure des variables influant sur la météo. Nous proposons donc dans cette activité la réalisation d'une mini-station météo basée sur un microcontrôleur.

Nous y présenterons comment effectuer la mesure de température, de pression atmosphérique et d'humidité grâce aux instruments inclus dans la carte proposée (STM32), ainsi que la vitesse du vent avec la construction d'un anémomètre rudimentaire.

Cette activité poursuit l'objectif d'identifier et de mesurer les paramètres principaux qui influencent la météo : température, pression, humidité et vitesse du vent.

## Compétences mobilisées

En réalisant des mesures et de par la mise en œuvre de la station météo, les élèves mobiliseront plusieurs compétences dans les domaines suivants :

- Technologie : utiliser une carte programmable pour collecter des données numériques
- Mathématiques : utiliser une feuille de calcul, comprendre la notion de variable, analyser des données, réaliser un graphique et pouvoir l'interpréter
- Physique : appréhender des grandeurs physiques (température, humidité, pression, vitesse) et leurs mesures, par l'expérimentation
- Ingénierie : conception et construction (anémomètre) avec des contraintes d'équilibre et de minimisation de frottements
- Technologique et numérique : utiliser et programmer un microcontrôleur, utiliser des logiciels de construction 3D
- Transdisciplinaire : savoir modéliser, comprendre, formaliser, partager, investiguer
- Biologie : établir des liens entre grandeurs mesurées (par exemple effet du gel sur certaines plantes)

Afin de réaliser la station météo finale, les élèves devront suivre les 3 phases suivantes :

- Réaliser des mesures (température, pression, humidité)
- Construire un anémomètre et réaliser des mesures de vitesses du vent
- Utiliser un afficheur LCD permettant une lecture pratique des données

## Étape 1 : Collecter des données

### Étape 1.1 : Température

#### Orientation

La notion de température est accessible et palpable dès le plus jeune âge. Cependant la définition physique est moins accessible. En effet la température est une manifestation macroscopique d'une grandeur physique microscopique : l'agitation thermique de chaque molécule.

La perception humaine qu'on a de la température n'est pas toujours le bon reflet de la température réelle. En réalité, le corps humain est sensible aux transferts de chaleur avec son environnement et non directement à la température.

#### Conceptualisation

Pour mesurer la température, il nous faut un thermomètre, qui généralement se base sur le phénomène de dilatation des corps. Lorsqu'on chauffe un corps, l'agitation thermique augmente causant (pour les liquides et les solides) une augmentation de volume. Il existe différents types de thermomètres : à liquide (alcool, mercure), à ressort (bilame), à gaz, à cristaux liquides, à semi-conducteur.

#### Débriefing

Après avoir abordé le concept de température et les différents moyens de la mesurer, nous pouvons afficher dans la console, la valeur de la température lue par le microcontrôleur.

### Étape 1.2 : Pression atmosphérique

#### Orientation

Le concept de pression atmosphérique est moins abordable que celui de la température pour le grand public. Directement liée à la gravité et au poids du fluide à une certaine profondeur, la pression est d'autant plus grande que la profondeur est grande.

#### Conceptualisation

Pour mesurer la pression atmosphérique, nous utilisons un baromètre (pour rappel 1 bar = 10⁵ Pa ≈ 1 atm). Torricelli utilisait des baromètres à mercure qui consistaient en de longs tubes de verre remplis de mercure. Aujourd'hui les baromètres n'utilisent pas de mercure mais sont basés sur la comparaison entre la pression de l'air dans une capsule (vide partiel) et la pression atmosphérique. Il existe également des modules électroniques basés sur la piezzoresistivité.

Les masses d'air s'écoulent toujours des zones de haute pression atmosphérique, appelées anticyclones, vers les zones de basse pression atmosphérique, appelées cyclones ou dépressions.

#### Débriefing

Après avoir abordé le concept de pression atmosphérique, nous pouvons afficher dans la console la valeur de la pression lue par le microcontrôleur.

### Étape 1.3 : Humidité

#### Orientation

L'humidité désigne la quantité de vapeur d'eau contenue dans l'air. La vapeur d'eau est absolument transparente et invisible, et sa proportion dans l'air varie de 0,1 % à tout au plus 5 %.

#### Conceptualisation

Apparus au milieu du XVe siècle, les premiers hygromètres utilisaient les propriétés de certaines substances organiques (laine, corde, éponge, cheveu, cuir…) qui en absorbant de la vapeur d'eau, changent de masse, de forme, de longueur ou de couleur. En 1781, Horace Bénédict de Saussure met au point le premier hygromètre à cheveu. Aujourd'hui, pour mesurer l'humidité de l'air, on utilise des sondes électroniques dotées d'un condensateur dont la capacité varie en fonction de l'humidité relative de l'air ambiant.

On quantifie l'humidité de l'air de deux manières : l'humidité absolue et l'humidité relative. L'humidité relative est le rapport de la quantité de vapeur d'eau contenue dans l'air sur la quantité de vapeur d'eau maximale possible. Elle s'exprime en pourcentage.

#### Débriefing

Après avoir abordé le concept d'humidité, nous pouvons afficher dans la console la valeur d'humidité lue par le microcontrôleur.

### Étape 1.4 : Vitesse du vent (anémomètre)

#### Orientation

Le vent est un phénomène météorologique produit par des mouvements de masses d'air. Il se caractérise par une direction et une vitesse. On utilise une girouette pour connaître la direction du vent et un anémomètre pour en mesurer la vitesse.

#### Conceptualisation

Le projet consiste à construire un anémomètre pour mesurer la vitesse du vent. Cette donnée étant difficile à acquérir de façon précise avec du matériel non professionnel, nous allons d'abord calculer la vitesse tangentielle des coupelles. Ensuite, nous utiliserons la mesure de la station météo avoisinante ou d'un anémomètre professionnel pour faire l'étalonnage de notre appareil.

Pour réaliser cette activité et mesurer la vitesse du vent à l'aide d'un anémomètre, nous aurons besoin de comprendre le mouvement circulaire uniforme.

#### Débriefing

Nous pouvons maintenant nous installer à l'extérieur avec notre montage (anémomètre, carte programmable et un ordinateur), dans un endroit dégagé (loin de bâtiments, arbres ou autres obstacles) et lancer notre programme.

Pour améliorer la précision de cette mesure, nous devons l'étalonner grâce à un anémomètre de référence en mettant devant une soufflerie à différentes distances ou intensités.

## Étape 2 : Afficher les données collectées

### Orientation

Les données ont été à présent affichées sur la console de l'ordinateur. Afin d'avoir une station météo plus autonome, nous proposons de l'afficher sur un écran relié directement au microcontrôleur.

### Investigation

Au vu des activités précédentes, nous pouvons d'une part effectuer plusieurs mesures directement liées à la météo et d'autre part, afficher un texte sur un écran LCD.

Dès lors nous sommes en mesure maintenant de pouvoir afficher nos mesures sur l'écran LCD (température, pression, vitesse du vent, humidité).

### Débriefing

Nous avons à présent un outil permettant d'avoir des données météo (journalières ou hebdomadaires).

## Étape 3 : Analyser les données

### Orientation

Les mesures réalisées par notre mini-station météo peuvent nous donner une information ponctuelle. Une autre approche (plus scientifique) consiste à analyser et comparer les données. Par exemple :

- Y a-t-il une dépendance entre vitesse du vent et une zone de haute ou de basse pression ?
- Que signifie le concept de température ressentie ?
- Dans quelles conditions observe-t-on du brouillard ou un pic d'ozone ?

### Conceptualisation

Pour pouvoir déterminer les paramètres influant le temps ou la météo, il est nécessaire de collecter plusieurs mesures, de regarder leur évolution au fil du temps pour éventuellement montrer leur influence sur les observations extérieures.

### Investigation

Notre anémomètre mesure la vitesse des coupelles, qui n'est pas la vitesse du vent (à cause des frottements et de la forme arrondie qui est à l'encontre du mouvement). Afin de calibrer notre anémomètre, on peut utiliser un ventilateur comme référence. Un exemple de tableau de calibration :

| Vitesse anémomètre (cm/s) | Vitesse référence (cm/s) |
|---|---|
| 0 | 0 |
| 106 | 353 |
| 112 | 383 |
| 119 | 414 |
| 126 | 422 |
| 134 | 467 |
| 144 | 492 |
| 155 | 511 |
| 167 | 561 |
| 183 | 589 |
| 201 | 628 |
| 223 | 717 |
| 250 | 731 |

Le rapport est en très bonne approximation constant et vaut 3 dans cet exemple. Cela signifie que lorsque nous mesurons la vitesse avec notre anémomètre, nous devons la multiplier par 3 pour avoir la vitesse du vent.

Les autres mesures (pression, température et humidité) peuvent être représentées sous forme de données ou de graphiques. Il est intéressant de pouvoir identifier certaines valeurs particulières comme les valeurs extrêmes, calculer la moyenne ou encore l'écart à la moyenne.

### Débriefing

Dans cette activité, nous proposons l'élaboration d'une mini-station météo avec un microcontrôleur et la construction d'un anémomètre. Ces instruments peuvent être utilisés dans d'autres cadres :

- Démarche purement expérimentale et observationnelle : mesurer la température toutes les heures et déterminer l'heure la plus chaude.
- Mesurer la température et l'humidité à l'extérieur ou dans une serre et les comparer à différents moments de la journée.
- Comparer la vitesse du vent à différents endroits.
- Tester l'efficacité de l'isolation d'un bâtiment.

## Programmation

Les fiches techniques de programmation (câblage, code, extensions MakeCode) sont regroupées dans une fiche dédiée : [Programmation : Solution météo](/ressources/thedexterlab/programmation/programmation-solution-meteo).


---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

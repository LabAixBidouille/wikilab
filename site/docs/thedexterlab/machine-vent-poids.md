---
id: machine-vent-poids
title: Machine éolienne à 50g
sidebar_label: "Machine éolienne à 50g"
sidebar_position: 15
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><circle cx="12" cy="12" r="10" fill="#1a4a48" opacity="0.1"/><circle cx="12" cy="12" r="2" fill="#1a4a48" opacity="1.0"/><path d="M12 12 L12 3 A4 4 0 0 1 15 6 Z" fill="#1a4a48" opacity="0.25"/><path d="M12 12 L21 12 A4 4 0 0 1 18 15 Z" fill="#1a4a48" opacity="0.25"/><path d="M12 12 L12 21 A4 4 0 0 1 9 18 Z" fill="#1a4a48" opacity="0.25"/><path d="M12 12 L3 12 A4 4 0 0 1 6 9 Z" fill="#1a4a48" opacity="0.25"/></svg> Machine éolienne à 50g

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Physique</span>
  <span className="badge badge--primary">Ingénierie</span>
  <span className="badge badge--primary">Mécanique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--info">Anémomètre</span>
  <span className="badge badge--secondary">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| The Dexter Lab | 4-6 heures | Avancé | 13-18 ans |

**Problématique :** Peut-on utiliser le vent comme source d'énergie mécanique ?

## Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 4 gobelets en plastique léger (de préférence de la même taille)
- 2 pailles en plastique rigide
- 1 crayon avec une gomme à une extrémité (ou une tige métallique avec une perle)
- 1 épingle droite ou une aiguille fine
- Papier millimétré ou un marqueur permanent (optionnel)
- Colle forte ou ruban adhésif
- Poulies de différents diamètres
- Corde fine ou fil solide
- Un support (structure en bois ou en métal)
- Poids de 50 g (ou un objet de ce poids)
- Crochet ou petit conteneur pour contenir le poids

<a href="/pdf/thedexterlab/PR15-TDL_Feuille_Travail_Vierge_A3.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger la feuille de travail</a>

</div>

</div>

---

:::info
Depuis l'Antiquité, l'humanité a été fascinée par la puissance invisible du vent. Des moulins à vent néerlandais aux voiliers des Phéniciens, le vent a été domestiqué pour moudre le grain, pomper l'eau et explorer le monde. Plus récemment, l'énergie éolienne est devenue une source d'énergie renouvelable importante. Aujourd'hui, vous allez embarquer dans un voyage à travers l'histoire et la science en explorant comment le vent peut être utilisé pour soulever un poids de 50 g. L'énergie cinétique du vent peut être captée et convertie en énergie électrique grâce à des technologies telles que les éoliennes.
:::

## Déroulé de l'activité

L'objectif est de construire une machine utilisant le vent (simulé par un ventilateur) pour soulever un poids de 50 g, donc à transformer l'énergie cinétique du vent en énergie mécanique. Cela amène à explorer de petites difficultés d'ingénierie : frottements, rigidité des matériaux, forces de torsion sur un axe, etc.

Ce protocole décrit les étapes à suivre pour construire un système de levage éolien en classe, en utilisant des matériaux courants tels que des bouteilles en plastique, des canettes, des pailles, des moteurs à courant continu, etc. Les étapes comprennent la création de différents types de turbines éoliennes pour capturer l'énergie éolienne, la conception et la construction d'un système pour augmenter le couple et la puissance, et la transformation du mouvement rotatif en mouvement linéaire pour soulever un poids.

## Compétences mobilisées

Ce protocole mobilise plusieurs compétences, incluant l'ingénierie, la conception, la résolution de problèmes, et la pensée critique. Les disciplines associées incluent la physique, la mécanique, l'énergie renouvelable, l'aérodynamique, et la conversion de l'énergie.

Les élèves apprendront à construire des turbines éoliennes, à comprendre les principes de l'aérodynamique et de la conversion de l'énergie, à concevoir des mécanismes pour transformer le mouvement rotatif en mouvement linéaire, et à résoudre des problèmes d'ingénierie complexes. Ils acquerront également une compréhension pratique de l'énergie renouvelable et de son rôle dans un avenir durable.

## Étape 1 : découverte du vent et son usage dans l'histoire

### Orientation

Le vent a joué un rôle crucial dans l'histoire humaine. Il a permis aux explorateurs de naviguer à travers les océans, a alimenté les moulins à vent pour moudre le grain, et aujourd'hui, il fournit de l'énergie propre à travers les éoliennes.

Dans la première étape, on s'intéresse spécifiquement au vent et à son usage dans l'histoire. Cette étape doit situer la question de recherche initiale plus largement qu'une simple question technique en conduisant préalablement une recherche historique qui répond à la question **"Quels sont les usages du vent dans l'histoire ?"**

### Conceptualisation

Le vent a été utilisé par les humains de diverses manières tout au long de l'histoire :

1. **Navigation à voile** : Depuis l'Antiquité, les voiles ont été utilisées pour propulser les navires. Les Phéniciens, les Grecs et les Vikings ont tous utilisé la puissance du vent.
2. **Moulins à vent** : Le vent a été utilisé pour moudre les grains dans différentes parties du monde, notamment au Moyen-Orient dès le VIIe siècle, et plus tard en Europe.
3. **Pompage de l'eau** : Les éoliennes ont été utilisées pour pomper l'eau à des fins agricoles.
4. **Production d'électricité** : Au XXe siècle, le vent a commencé à être utilisé pour générer de l'électricité.
5. **Technologie de vol** : La compréhension de l'aérodynamique du vent a été cruciale dans le développement de la technologie de vol.
6. **Séchage et ventilation** : Dans de nombreuses cultures, le vent a été utilisé de manière plus passive pour sécher les vêtements, conserver les aliments, et ventiler les habitations.
7. **Art et musique** : Le vent a également inspiré des instruments de musique comme les carillons éoliens.

### Investigation

Pour structurer l'enquête autour de cette question :

1. **Introduction et discussion** : Introduisez le sujet en posant les questions aux élèves.
2. **Recherche historique** : Divisez les élèves en groupes et attribuez-leur différentes périodes historiques ou technologies liées au vent.
3. **Analyse de la technologie** : Choisissez quelques exemples concrets de la manière dont le vent a été capturé ou dirigé.
4. **Présentation et discussion** : Chaque groupe présente ses découvertes à la classe.
5. **Conclusion** : Résumez les principales découvertes.

### Débriefing

Grâce aux étapes précédentes, nous avons pu comprendre l'importance du vent dans l'histoire et comment il a été utilisé pour différentes tâches.

## Étape 2 : caractéristiques du vent

### Orientation

Maintenant que nous avons compris comment le vent a été utilisé dans l'histoire par les humains, on va s'intéresser aux caractéristiques physiques du vent.

### Conceptualisation

Le vent est un phénomène naturel qui se manifeste par le déplacement des masses d'air à la surface de la Terre. C'est un aspect fondamental de la météorologie et du climat.

**Composition et origine :**

1. **Air en mouvement** : Le vent est composé de masses d'air en mouvement, qui contiennent un mélange de gaz, principalement de l'azote et de l'oxygène.
2. **Énergie solaire** : Le soleil chauffe inégalement la surface de la Terre, créant des différences de température et de pression dans l'atmosphère.

**Facteurs influents :** Différences de pression, rotation de la Terre (force de Coriolis), géographie, obstacles.

**Principales caractéristiques du vent :** vitesse, direction, stabilité et turbulence, humidité, température, pression, altitude.

Vis-à-vis de notre question de recherche et de l'échelle à laquelle on va travailler, seulement les deux premières caractéristiques (vitesse et direction) vont être pertinentes pour la suite de l'enquête.

### Investigation

Pour cette enquête, nous allons construire des dispositifs simples pour mesurer la vitesse et la direction du vent.

**Mesure de la vitesse du vent : l'anémomètre**

Matériaux nécessaires : 4 gobelets en plastique léger, 2 pailles en plastique rigide, 1 crayon avec gomme, 1 épingle droite, papier millimétré (optionnel), colle forte ou ruban adhésif.

Étapes de construction :

1. **Préparer les gobelets** : Faire un petit trou au bas de chaque gobelet.
2. **Attacher les pailles** : Insérer une paille dans les trous de deux gobelets opposés et les coller. Répéter avec la deuxième paille et les deux autres gobelets pour former une croix.
3. **Assembler la structure** : Placer les deux pailles ensemble pour qu'elles forment une croix et les coller. Insérer l'épingle à travers le point central dans la gomme du crayon.
4. **Calibrer l'anémomètre** (optionnel) : Le comparer avec un anémomètre connu ou une méthode de référence.
5. **Placer l'anémomètre** : Trouver un emplacement extérieur où le vent peut souffler librement.

**Mesure de la direction du vent : la girouette**

Matériaux : papier cartonné, crayon avec gomme, paille rigide, épingle, colle, ciseaux, règle, compas (optionnel).

Étapes :

1. Dessiner et découper une flèche.
2. Attacher la flèche à la paille.
3. Monter la girouette en insérant l'épingle à travers la paille dans la gomme.
4. Créer la rose des vents (optionnel).
5. Placer la girouette à l'extérieur.

### Débriefing

Comprendre ce qu'est le vent et comment il fonctionne est vital pour de nombreux domaines de la science et de l'ingénierie, en particulier pour répondre aux problèmes de la production d'énergie décarbonée.

## Étape 3 : capter le vent

### Orientation

La première étape de notre système de levage éolien doit capter le vent pour le transformer en un mouvement de rotation. La compréhension des systèmes de captation du vent et leurs particularités est importante pour choisir celui qui sera le plus adapté.

### Conceptualisation

La capture et la direction du vent sont au cœur de nombreuses technologies, des voiles de bateaux aux éoliennes modernes :

- **Voiles de bateaux** : créent une surface sur laquelle le vent peut exercer une pression.
- **Moulins à vent et éoliennes** : pales conçues pour capter l'énergie cinétique du vent.
- **Architecture et ventilation** : bâtiments conçus pour utiliser le vent à des fins de ventilation.
- **Aéronautique** : ailes d'avion conçues pour créer de la portance.
- **Énergie éolienne à petite échelle** : turbines éoliennes plus petites pour usage domestique.

### Investigation

Les élèves devront construire plusieurs types de système pour choisir collectivement celui qui sera le plus adapté. Voici quelques types de turbines à vent simples :

- **Turbine à vent horizontale** : type le plus commun, pales tournant autour d'un axe horizontal.
- **Turbine à vent verticale** : axe de rotation vertical, peut capter le vent de n'importe quelle direction.
- **Turbine à vent de Savonius** : utilise des lames en forme de S.
- **Turbine à vent de Darrieus** : pales en forme de « V » inversé.
- **Mini-turbine éolienne** : petite turbine facile à construire, parfaite pour démontrer les principes de base.

### Débriefing

La création des turbines a permis de transformer l'énergie du vent en mouvement mécanique. Les différents types de turbines offrent aux élèves un panel de solutions pour le premier étage du système de levage éolien.

## Étape 4 : transformer le mouvement

### Orientation

Le premier étage de notre système permet de capter le vent et de le transformer en un mouvement de rotation. Les caractéristiques de ce mouvement dépendent directement du vent. La force disponible en sortie de notre turbine (le couple) devra être adaptée pour lever le poids de 50 g.

### Conceptualisation

Adapter le mouvement de rotation de la turbine pour obtenir un couple suffisant nécessite quelques considérations :

1. **Comprendre le besoin en couple** : Déterminer la quantité nécessaire pour soulever un poids de 50 g.
2. **Sélectionner ou concevoir la turbine** : Une turbine plus grande avec plus de pales peut capturer plus d'énergie.
3. **Utiliser des engrenages** : Un système d'engrenages avec grand nombre de dents relié à la turbine et petit nombre de dents relié à l'arbre de levage peut augmenter le couple.
4. **Considérer l'utilisation de poulies** : Un système de poulies peut aussi augmenter le couple.
5. **Tester et calibrer** : Tester le système et apporter les ajustements nécessaires.

### Investigation

Construire un système de poulies pour lever un poids de 50 g :

Matériaux : poulies de différents diamètres, corde fine, support, poids de 50 g, crochet, turbine à vent.

Étapes :

1. Déterminer le rapport de poulie nécessaire.
2. Choisir les poulies (grand diamètre pour la turbine, petit pour le levage).
3. Installer la poulie de la turbine.
4. Construire le support.
5. Installer la corde.
6. Attacher le poids.
7. Tester le système et ajuster au besoin.

### Débriefing

En engageant les élèves dans cette tâche, on peut couvrir de nombreux sujets éducatifs tels que la mécanique, l'énergie renouvelable, la physique, l'ingénierie, et la résolution de problèmes.

## Étape 5 : intégration d'un système de levage

### Orientation

La dernière étape de la machine est de transformer le mouvement de rotation en mouvement linéaire vertical. Ce dernier système est celui qui lèvera le poids de 50 g.

### Conceptualisation

Plusieurs systèmes existent pour transformer le mouvement de rotation en mouvement linéaire :

1. **Mécanisme de treuil** : En enroulant une corde autour d'un tambour connecté à l'arbre intermédiaire, on peut convertir le mouvement rotatif en mouvement linéaire.
2. **Mécanisme de crémaillère et pignon** : Une crémaillère est une barre avec des dents qui peut se déplacer linéairement. Le pignon est un petit engrenage fixé à l'arbre intermédiaire qui s'engage avec la crémaillère.
3. **Système de poulies** : Un système de poulies avec des poulies de différents diamètres.

### Investigation

Construire un mécanisme de treuil pour soulever un poids de 50 g :

Matériaux : un tambour (bobine ou cylindre), corde fine, arbre (boulon ou tige), support, poids de 50 g, crochet, moyen de fixer le tambour à l'arbre.

Étapes :

1. Préparation de l'arbre.
2. Fixation du tambour.
3. Installation de la corde.
4. Attacher le poids.
5. Tester le mécanisme de treuil.

### Débriefing

La clé de la conversion réussie du mouvement rotatif en mouvement de levage est le choix et la conception corrects du système mécanique, qui dépendent du couple et de la vitesse nécessaires pour lever le poids de 50 g.

## Fiche de programmation : anémomètre

### Câblage

Nous utilisons un capteur à effet reed (interrupteur magnétique). Le contact reed est représenté ici comme un bouton-poussoir.

La fonction `millis` donne le temps écoulé depuis le lancement du programme, elle sert ici d'horloge.

Pour connaître la vitesse, on utilise l'équation du mouvement circulaire uniforme :

```
v = 2π × R / T
```

### Programme (version simple)

```javascript
let delay = 0
let time_2 = 0
let time_1 = 0
Serial.attachToConsole()
forever(function () {
    if (input.buttonD0.isPressed()) {
        time_1 = time_2
        time_2 = control.millis()
        delay = time_2 - time_1
        Serial.writeValue("delay", delay)
        pauseUntil(() => !(input.buttonD0.isPressed()))
    }
})
```

### Programme avec calcul de la vitesse

```javascript
let delay = 0
let time_2 = 0
let time_1 = 0
Serial.attachToConsole()
forever(function () {
    if (input.buttonD0.isPressed()) {
        time_1 = time_2
        time_2 = control.millis()
        delay = time_2 - time_1
        Serial.writeValue("delay", delay)
        Serial.writeValue("speed", 6.28 * 6500 / delay)
        pauseUntil(() => !(input.buttonD0.isPressed()))
    }
})
```

### Programme avec extension anemometer

```javascript
let period = 3
let armLength = 0.1
let speed = 0

Serial.attachToConsole()

forever(function () {
    speed = 2 * Math.PI * armLength * input.getAnemometerRotationPerUnit(pins.A0, AnemometerUnit.RPS, period) * 3.6
    Serial.writeValue("speed", speed)
})
```

:::info
Afin de calculer la vitesse de rotation des coupelles de l'anémomètre, vous devez spécifier vous-même dans le code la longueur des bras de votre anémomètre, en mètre (par exemple 0.1 pour 10 cm). Pour mesurer la longueur du bras, prendre la longueur entre le centre de l'anémomètre (axe de rotation) et l'extrémité de la coupelle.
:::

---

*Cette fiche fait partie du projet [The Dexter Lab](/projets/the-dexter-lab), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

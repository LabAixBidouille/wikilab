---
id: whisper-walls
title: "Whisper Walls : explorer le son du silence"
sidebar_label: "Whisper Walls"
sidebar_position: 3
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="2" y="2" width="20" height="20" rx="3" fill="#DD5350" opacity="0.1"/><rect x="4" y="8" width="4" height="8" rx="1" fill="#DD5350" opacity="0.25"/><rect x="10" y="5" width="4" height="14" rx="1" fill="#DD5350"/><rect x="16" y="10" width="4" height="4" rx="1" fill="#DD5350" opacity="0.25"/><path d="M3 18h18" stroke="#DD5350" strokeWidth="0.5" opacity="0.3"/></svg> Whisper Walls : explorer le son du silence

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Physique</span>
  <span className="badge badge--info">Ingénierie</span>
  <span className="badge badge--secondary">Environnement</span>
  <span className="badge badge--secondary">Bien-être et santé publique</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| SteamCity | 3 séances | Intermédiaire | 10-15 ans |

## Matériel

- 1 carte programmable (IoT node STM32 ou carte Micro:bit)
- 1 microphone (par exemple, MP34DT01)
- 1 buzzer (pour la génération de son)
- 1 écran LCD (pour l'affichage des données)
- Câbles de connexion et câble USB (B micro)
- Echantillons de matériaux à tester (mousse, bois, métal, tissu)
- Carnet de notes ou outils numériques pour enregistrer et analyser les données

<a href="/pdf/steamcity/Protocol_WhisperWalls_FR.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger en PDF</a>

</div>

</div>


---

## Introduction

Dans les environnements urbains actuels, la gestion de la pollution sonore est devenue essentielle pour créer des villes durables et vivables. L'exposition continue au bruit urbain affecte à la fois le bien-être immédiat et la productivité quotidienne tout en contribuant à des problèmes de santé à long terme (stress chronique, troubles du sommeil, complications cardiovasculaires et déficits cognitifs). Cette activité explore comment différents matériaux réduisent l'intensité sonore, offrant ainsi des informations sur les choix architecturaux et de conception qui améliorent le confort dans les espaces résidentiels, éducatifs et publics.

Les principes de réduction du bruit par les matériaux offrent des solutions pratiques aux défis rencontrés par les villes. Intégrés à la planification urbaine, ces principes créent des villes respectueuses de l'environnement qui accordent la priorité à la santé des citoyens. En atténuant la pollution sonore dans les espaces résidentiels et publics et en réduisant l'impact des activités industrielles sur les communautés voisines, l'atténuation sonore crée des environnements urbains plus sains. Cette approche développe des espaces harmonieux où les gens peuvent vivre, travailler et s'épanouir sans les effets néfastes d'une exposition excessive au bruit.

Cette activité s'inscrit dans le cadre de plusieurs Objectifs de Développement Durable (ODD) des Nations Unies :

ODD 3 : Bonne santé et bien-être en s'attaquant à la pollution sonore en tant que risque environnemental pour la santé. ODD 11 : Villes et communautés durables grâce à des stratégies d'insonorisation dans la planification urbaine, ODD 12 : Consommation et production responsables en évaluant les implications du cycle de vie des matériaux d'insonorisation et en promouvant des choix de construction durables.

Durant ce protocole, les élèves joueront le rôle de scientifiques en charge de mesurer et d’étudier l'atténuation du bruit et la réduction de la pollution sonore tout en explorant la propagation et la réflexion du son. Cette approche basée sur l'investigation les aide à comprendre les fondamentaux physiques du bruit tout en reliant leur apprentissage aux défis mondiaux de la durabilité. L'activité développe la pensée critique et les compétences de résolution de problèmes essentielles à la construction d'un avenir durable. Grâce à cette activité, les élèves développeront un état d’esprit scientifique en abordant un enjeu urbain crucial.


Disciplines                                    Objectifs de développement durable

physique

ingénierie L’activité en bref


### Structure du protocole

L'expérimentation se compose de trois étapes clés, guidant les élèves à travers le processus scientifique, de l'exploration des concepts fondamentaux à l'analyse et à l'interprétation des données expérimentales.


Exploration des concepts clés, formulation de la question de recherche et réalisation de recherches de base Les élèves explorent les principes fondamentaux du son et du bruit, notamment les ondes sonores, l’échelle des décibels et les effets de la pollution sonore sur la santé et le bien-être. Ils discutent ensemble et formulent une question de recherche, comme déterminer les matériaux les plus efficaces pour l’isolation acoustique ou étudier comment l’épaisseur ou la densité influencent l’atténuation du son. Cette phase comprend une recherche documentaire, durant laquelle les élèves consultent des ressources existantes sur les matériaux d’insonorisation et leurs propriétés. Cette étape encourage la pensée critique, la collaboration et l’ancrage de leur expérimentation sur des bases scientifiques solides.

Conception expérimentale et collecte de données Au cours de cette étape, les élèves collaborent pour concevoir et mettre en œuvre un protocole expérimental permettant de mesurer les propriétés d'atténuation acoustique de différents matériaux. À l’aide d’un microcontrôleur programmable équipé d’un microphone et d’une source sonore, ils mesurent l’intensité sonore avant et après son passage à travers les matériaux sélectionnés. Les élèves documentent les conditions expérimentales — type de matériau, épaisseur, densité — en veillant à maintenir une configuration cohérente et reproductible. Cette phase valorise l’apprentissage par la pratique et la rigueur scientifique tout en permettant de collecter des données quantitatives pour valider leurs hypothèses.

Analyse et interprétation des données Après l’expérimentation, les élèves analysent les données recueillies pour identifier les tendances et les relations entre les propriétés des matériaux et l’atténuation du son. Ils utilisent des outils visuels tels que des graphiques et des tableaux pour représenter leurs résultats, et calculent des mesures pertinentes comme les réductions de décibels. Cette phase comprend également une réflexion sur le processus expérimental : les élèves évaluent les sources d’erreur potentielles, les limites de la configuration et les moyens d’améliorer la méthodologie. Ils établissent aussi des liens entre leurs résultats et des applications concrètes, comme la réduction du bruit urbain ou les pratiques de construction durable. Cette étape renforce la pensée critique, l’interprétation des données et la communication scientifique rigoureuse. Il est courant de parler d’isolation dans le cadre des économies d’énergie : pour rendre une maison moins énergivore ou garder une bouteille d’eau fraîche pendant une journée d’été. Mais la chaleur n’est pas le seul type de transfert d’énergie que l’on peut ralentir. Il est aussi possible d’insonoriser, c’est-à-dire de réduire l’intensité des bruits extérieurs.

Comment mesure-t-on le bruit et son atténuation ? La forme du matériau isolant a-t-elle un impact ? Quels sont les matériaux les plus efficaces ?

Cette activité vise à tester différents matériaux (bois, métal, mousse, etc.) pour déterminer celui qui isole le mieux, tout en découvrant comment mesurer le bruit et comprendre l’échelle des décibels.

Ce protocole décrit une expérience scientifique qui vise à mesurer le pouvoir d’isolation acoustique de différents matériaux. La collecte des données se fait à l’aide d’un microphone, en mesurant l’intensité sonore à l’intérieur et à l’extérieur de boîtes contenant ces matériaux. L’expérience permet aussi de comprendre comment connecter une carte électronique à d’autres périphériques, et comment récupérer les données pour les analyser ensuite.

Durée : L’activité se déroule en trois séances. La première porte sur l’exploration des concepts clés, la réalisation d’une étude documentaire et la formulation d’une question de recherche. La deuxième est consacrée à la conception et à la réalisation de l’expérience, y compris la collecte de données. La troisième consiste à analyser les résultats, à tirer des conclusions et à réfléchir à la méthodologie et aux résultats de l’expérience.

Niveau de difficulté :


L’activité combine l’exploration théorique (compréhension du son et du bruit, formulation d’hypothèses), l’application pratique (mise en œuvre de l’expérience, collecte de données) et la réflexion analytique (interprétation et visualisation des résultats).

Matériel nécessaire :

1 carte programmable (par exemple, un IoT node STM32 ou une carte micro:bit) 1 microphone (par exemple, MP34DT01) 1 buzzer (pour la génération de son) 1 écran LCD (pour l'affichage des données) Câbles de connexion et un câble USB (B micro) Échantillons de matériaux à tester (par exemple, mousse, bois, métal, tissu) Carnet de notes ou outils numériques pour enregistrer et analyser les données



### Glossaire

Mots-clés/Concepts                                            Définitions Diminution de l’intensité sonore lorsqu’un son traverse un milieu ou rencontre un Atténuation acoustique obstacle. Hauteur d’une onde sonore, qui détermine l’intensité du son. Une grande amplitude Amplitude produit un son plus fort. Unité logarithmique mesurant l’intensité sonore. Une baisse de 10 dB correspond à une Décibel (dB) réduction de dix fois de la puissance sonore. Masse d’un matériau par unité de volume (en g/cm³). Les matériaux plus denses Densité réfléchissent généralement davantage le son. Largeur ou profondeur d’un matériau. Une plus grande épaisseur améliore souvent Épaisseur (matériau) l’atténuation du son. Nombre de cycles d’une onde sonore par seconde, exprimé en hertz (Hz). Elle détermine Fréquence la hauteur perçue du son. Ensemble des techniques visant à limiter ou supprimer la transmission du son entre Insonorisation différents espaces. Puissance d’une onde sonore par unité de surface, mesurée en décibels (dB). Elle indique Intensité sonore le niveau de pression acoustique. Distance entre deux crêtes successives d’une onde sonore. Elle est inversement Longueur d'onde proportionnelle à la fréquence. Matériau contenant de nombreux pores interconnectés, capable d’absorber et de Matériau poreux dissiper l’énergie sonore. Vibrations se propageant dans un milieu (air, eau, solide) sous forme d’ondes de Onde sonore pression. Ensemble de sons indésirables ou nuisibles affectant l’environnement et la santé Pollution sonore humaine ou animale. Propagation         Transmission d’ondes sonores à travers un milieu. Renvoi des ondes sonores lorsqu’elles rencontrent un obstacle. Les matériaux Réflexion (du son) réfléchissants redirigent le son au lieu de l’absorber. Déviation des ondes sonores lorsqu’elles passent d’un milieu à un autre de densité Réfraction (du son) différente. Amplification d’un son lorsque sa fréquence correspond à celle d’un matériau ou d’un Résonance système. Passage des ondes sonores à travers un matériau. Plus la transmission est élevée, moins Transmission (du son) il y a d’atténuation. Mouvement répété de va-et-vient de particules dans un milieu, générant des ondes Vibrations sonores.

## Étape 1 : exploration des concepts clés, formulation de la question de

recherche, réalisation d’une étude documentaire

**Contexte et description du problème à résoudre à cette étape** : Dans cette étape, les élèves explorent les principes de base du son et du bruit. Ils approfondissent leur compréhension des ondes sonores, de leur intensité et de leur fréquence, ainsi que des effets de la pollution sonore sur la santé et la productivité. Ils réfléchissent à des exemples concrets, comme le bruit urbain et son atténuation dans les espaces résidentiels et publics.

**Objectifs d'apprentissage**:

Compétences clés : Comprendre la physique du son, les méthodes de mesure du bruit et l’impact environnemental de la pollution sonore. Développer la capacité à formuler des hypothèses et à relier la théorie à des enjeux concrets. Compétences auxiliaires : Réaliser une recherche bibliographique, exercer une pensée critique et mobiliser le raisonnement scientifique pour définir des hypothèses testables.


### Conceptualisation


Les élèves commencent par définir des concepts clés tels que l’intensité sonore, l’atténuation et l’échelle des décibels. Les enseignants les accompagnent dans la compréhension de ces notions à travers des discussions et des démonstrations interactives, comme la visualisation des ondes sonores ou la comparaison des niveaux de bruit à l’aide d’un décibelmètre sur smartphone.

Ensuite, ils travaillent à la formulation d’une question de recherche précise. Une question de recherche est une interrogation claire et ciblée qui oriente l’enquête en identifiant ce que l’étude cherche à comprendre. Il est essentiel de formuler cette question avant d’énoncer une hypothèse, car elle fixe la direction de l’étude et garantit la pertinence des hypothèses formulées.

La formulation d’une question de recherche bien définie constitue une étape essentielle de toute démarche scientifique. Une bonne question sert de fondement à l’enquête et oriente toutes les étapes suivantes, de la conception de l’expérience à l’interprétation des résultats. Elle garantit que l’investigation reste ciblée et qu’elle repose sur des objectifs mesurables et observables.

Une question de recherche solide devrait être :

1. Claire et précise : Elle doit être suffisamment précise pour guider l’enquête sans être trop large ou ambiguë.
2. Testable : Il doit s’agir de variables qui peuvent être mesurées ou observées.
3. En rapport avec le concept clé : Dans ce cas, la question devrait porter directement sur l’atténuation du son ou
sur les propriétés des matériaux.
4. Favoriser l'investigation et l'analyse : Il faudrait que la collecte et l’évaluation des données soient nécessaires
pour parvenir à une conclusion.

Voici des exemples de questions de recherche pour cette activité :

« Quels matériaux sont les plus efficaces pour réduire l’intensité sonore ? » « Comment l’épaisseur d’un matériau influence-t-elle sa capacité à atténuer le son ? » « La densité d’un matériau est-elle corrélée à ses capacités d’insonorisation ? » Une fois la question de recherche établie, les élèves collaborent en petits groupes pour réfléchir et explorer les facteurs qui définissent le son et le bruit à l’aide de livres, d’articles scientifiques et de ressources en ligne. Sur la base de leurs recherches, ils formulent des hypothèses. Une hypothèse est une affirmation qui doit être vérifiée par l’expérimentation (ou par le calcul, dans des domaines comme les mathématiques). Le but d’une hypothèse est de proposer des réponses potentielles à la question de recherche. La validation ou l’invalidation d’une hypothèse peut conduire à reformuler la question de recherche afin de l’affiner ou de l’ajuster. Même si la question n’est pas entièrement résolue, toutes les hypothèses doivent contribuer à mieux encadrer la réponse possible et à en clarifier les limites.

Pour aider les élèves à élaborer une hypothèse, les enseignants peuvent utiliser la structure suivante :

Identifier la variable indépendante (VI) : Le facteur qui sera manipulé pendant l’expérience (par exemple, le type, l’épaisseur ou la densité du matériau). Identifier la variable dépendante (VD) : Le facteur qui sera mesuré à la suite de la manipulation (par exemple, l’intensité sonore ou la réduction des décibels). Relier la VI à la VD avec une prédiction logique : Utilisez les connaissances préalables ou les résultats de l’analyse de la littérature pour faire une prédiction éclairée sur la manière dont la variable indépendante influencera la variable dépendante.

Exemples d'hypothèses Pour la question de recherche « Quels matériaux sont les plus efficaces pour réduire l'intensité sonore ? »

Hypothèse : « La mousse atténuera le son plus efficacement que le bois ou le métal en raison de sa structure poreuse, qui absorbe les ondes sonores. »

Pour la question de recherche « Comment l'épaisseur d'un matériau influence-t-elle sa capacité à atténuer le son ? »

Hypothèse : « L’augmentation de l’épaisseur d’un matériau entraînera une plus grande atténuation du son, car les matériaux plus épais fournissent davantage de barrières pour la pénétration des ondes sonores. »

Pour la question de recherche « La densité d’un matériau est-elle corrélée à ses capacités d’insonorisation ? »

Hypothèse : « Les matériaux plus denses, comme l’acier, atténueront le son plus efficacement que les matériaux moins denses, car les structures plus denses réfléchissent plus d’ondes sonores. »

Guider les élèves dans la formulation d'hypothèses Les enseignants peuvent utiliser des invites et des discussions pour aider les élèves à réfléchir de manière critique et à relier leur question de recherche à une hypothèse testable :

1. Question de connaissances préalables : Que savez-vous déjà sur la manière dont les matériaux interagissent
avec le son ?
2. Encourager le raisonnement logique : D’après vos recherches, quelles caractéristiques d’un matériau
pourraient affecter sa capacité à réduire le son ?
3. Concentrez-vous sur la mesurabilité : Pouvez-vous mesurer ou observer l’effet de cette caractéristique (par
exemple, l’épaisseur ou la densité) sur l’atténuation du son ?
4. Aider l’affinement : Si l’hypothèse est trop large ou non testable, demandez aux élèves de restreindre leur
champ d’action ou de la reformuler pour l’aligner sur la configuration expérimentale disponible.

Exemples de questions d'orientation pour les élèves

Quelles propriétés d’un matériau (par exemple, la texture, la densité, l’épaisseur) pourraient influencer sa capacité à bloquer ou à absorber le son ? Comment peut-on mesurer la réduction de l’intensité sonore ? Pouvons-nous tester cette hypothèse en utilisant les outils et méthodes disponibles ? Quels résultats pourraient soutenir ou réfuter l’hypothèse ? Comment une hypothèse façonne-t-elle la conception expérimentale ? Une hypothèse solide fournit une orientation claire à l'expérience en identifiant ce qui sera testé et mesuré. Par exemple :

Si l’hypothèse prédit que la mousse surpassera le bois et le métal en termes d’atténuation sonore, la conception expérimentale doit comparer l’intensité sonore avec et sans ces matériaux dans des conditions contrôlées. Si l’hypothèse implique l’épaisseur, l’expérience doit inclure des matériaux d’épaisseurs variables tout en gardant les autres variables constantes.

En s’assurant que l’hypothèse est directement liée à la question de recherche et qu’elle est testable, les enseignants peuvent guider les élèves pour concevoir des expériences qui produisent des résultats significatifs et interprétables.


### Investigation par les élèves


Cette phase fait le lien entre la compréhension théorique et la conception expérimentale. Les élèves explorent les propriétés du son et son interaction avec les matériaux, tout en élaborant un protocole rigoureux pour tester leurs hypothèses.

#### Recherche documentaire préliminaire

Les élèves commencent par étudier la nature du son et le concept d’atténuation. Le son, en tant qu’onde mécanique, se propage dans un milieu comme l’air, les liquides ou les solides. Ses caractéristiques — intensité, fréquence et vitesse de propagation — déterminent son interaction avec les matériaux. Par exemple, l’intensité sonore, mesurée en décibels (dB), suit une échelle logarithmique : une réduction de 10 dB correspond à une diminution de l’intensité sonore par dix.

Cela commence par l’étude du son en tant que phénomène physique. Le son est une onde mécanique qui se propage dans un milieu — air, liquide ou solide — par la Vibrations des particules. Il est essentiel de comprendre trois caractéristiques clés du son :

1. Fréquence : Il s’agit du nombre de cycles d’onde par seconde, mesuré en hertz (Hz). Les sons à haute fréquence,
comme un sifflement, ont une longueur d’onde courte, tandis que les sons à basse fréquence, comme un battement de tambour, ont une longueur d’onde plus longue. La fréquence d’un son influence la manière dont les matériaux l’absorbent, certains étant plus efficaces pour atténuer les hautes fréquences que les basses.
2. Amplitude et intensité : L’amplitude d’une onde sonore détermine son intensité. Cette intensité, mesurée en
décibels (dB), représente la puissance du son. L’échelle des décibels étant logarithmique, une réduction de 10 dB correspond à une division par dix de l’intensité sonore. Comprendre cette échelle est essentiel pour analyser l’atténuation du son.
3. Propagation : Les ondes sonores se propagent dans l’espace tridimensionnel, et leur comportement dépend du
milieu traversé. Lorsqu’elles rencontrent un matériau, elles peuvent être réfléchies, absorbées ou transmises. Par exemple, la mousse absorbe l’énergie sonore et la convertit en chaleur, tandis que des matériaux denses comme le métal tendent à réfléchir les ondes.

Au cours de leurs recherches, les élèves étudient le lien entre ces principes et l’insonorisation. Ils explorent les implications concrètes de l’atténuation du bruit, comme son rôle dans la réduction de la pollution sonore ou l’amélioration de l’acoustique des bâtiments. Résumer leurs conclusions dans un rapport collaboratif les aide à consolider leur compréhension théorique.

Pour approfondir leur analyse, les élèves examinent comment les matériaux absorbent, réfléchissent ou diffusent le son. Les matériaux poreux, comme la mousse, sont reconnus pour absorber efficacement le son en convertissant l’énergie des ondes en chaleur, tandis que des matériaux plus denses, comme le métal, réfléchissent principalement les ondes sonores.

Un bref aperçu des applications pratiques — telles que les murs antibruit ou les panneaux acoustiques — permet aux élèves de relier ces concepts à des situations pratiques. Cette recherche se conclut par une discussion collaborative où les élèves résument leurs résultats, identifient les facteurs clés influençant l’atténuation du son et affinent leur compréhension de variables telles que l’épaisseur et la densité des matériaux. Principaux domaines d’intervention

Nature du son : Le son est une onde mécanique qui se propage dans un milieu (air, liquide ou solide) sous forme de Vibrationss de particules.

Paramètres clés à explorer :

Intensité (amplitude) : Détermine la puissance du son, mesurée en décibels (dB). Fréquence : Indique la hauteur du son, exprimée en hertz (Hz). Les sons aigus (fréquences élevées) et les sons graves (fréquences basses) interagissent différemment avec les matériaux. Propagation : Décrit la manière dont les ondes sonores se déplacent, ou sont absorbées, réfléchies ou réfractées lorsqu’elles rencontrent un matériau.

Atténuation du son : Réduction de l’intensité sonore au passage d’un matériau. Le son peut être : absorbé (converti en chaleur), réfléchi (rebondi) ou diffusé (propagé dans différentes directions). Les matériaux tels que la mousse absorbent bien le son en raison de leur structure poreuse, tandis que les matériaux denses comme le métal réfléchissent le son plus efficacement.

Mesure du son – Décibels (dB) : Unité logarithmique utilisée pour exprimer l’intensité sonore. Une baisse de 10 dB correspond à une réduction de l’intensité par dix.

Des outils de mesure comme les microphones et les capteurs programmables permettent de collecter des données pour quantifier l’atténuation sonore.


#### Conception du protocole expérimental

Les élèves passent ensuite à la conception d'une expérience visant à tester leur hypothèse. À l'aide d'outils programmables, tels qu’un microcontrôleur équipé d’un microphone et d’un buzzer, ils mesurent l’intensité sonore avant et après son passage à travers divers matériaux. Cette configuration permet une évaluation systématique de l’atténuation du son.

Le protocole doit définir clairement l’objectif de l’étude, les variables et la méthodologie. La variable indépendante peut être le type ou l’épaisseur du matériau, tandis que la variable dépendante correspond à la réduction mesurée de l’intensité sonore. Les variables de contrôle, comme la source sonore et le positionnement du microphone, assurent la cohérence entre les essais.

La collecte de données implique l’enregistrement des niveaux d’intensité sonore de part et d’autre du matériau, ainsi que le calcul de l’atténuation en décibels. Les élèves planifient soigneusement la reproductibilité de l’expérience en réalisant plusieurs essais pour garantir des résultats fiables. Ils anticipent également les défis possibles, tels que les interférences sonores externes, et proposent des stratégies pour les limiter.


Pour vous aider à programmer le capteur approprié, reportez-vous à la section « Fiche pratique 1 - Mesure de l’intensité du son ».


#### Documenter et collaborer

En petits groupes, les élèves documentent leur protocole en décrivant clairement les étapes et en justifiant leurs choix. Les enseignants accompagnent les discussions pour s’assurer que la conception expérimentale est réalisable et rigoureuse sur le plan scientifique. Grâce à l’évaluation par les pairs, les élèves affinent leur approche et comblent les éventuelles lacunes méthodologiques. Cette collaboration renforce non seulement le protocole, mais développe aussi la pensée critique et le travail d’équipe.

#### Préparation à l'expérimentation

Enfin, les élèves réalisent un essai à blanc de leur installation, testant l’équipement et effectuant les ajustements nécessaires. Cette préparation garantit que la phase expérimentale se déroule sans encombre et reste conforme à leur hypothèse. Le protocole sert alors de feuille de route pour l’enquête pratique, ainsi que pour la collecte et l’analyse des données à l’étape suivante.


À la fin de cette phase, les élèves disposent d’un protocole expérimental bien élaboré, fondé sur leurs recherches et hypothèses. Ils comprennent les principes d’atténuation du son et sont prêts à mener leur enquête avec un plan clair.


### Restitution et réflexion


Connaissances mobilisées : En complétant cette phase, les élèves ont acquis les éléments essentiels pour aborder leurs hypothèses. Grâce à la combinaison de l’exploration théorique et de la recherche préliminaire, ils identifient comment le son interagit avec les matériaux et clarifient les facteurs influençant l’atténuation sonore. Ils comprennent désormais des concepts clés, tels que le rôle des propriétés des matériaux (par exemple, densité, épaisseur, porosité) dans l’absorption, la réflexion ou la transmission des ondes sonores. Réflexion sur la mise en œuvre en classe : Les élèves formulent des questions de recherche et des hypothèses spécifiques, mesurables et testables. Par exemple, ils peuvent prédire que les matériaux poreux, comme la mousse, atténuent davantage le son que les matériaux denses, comme le métal. Ces hypothèses, fondées sur leur compréhension du comportement des ondes, fournissent une base claire pour la conception expérimentale. Résultats d’apprentissage : Les acquis de cette étape sont à la fois conceptuels et pratiques. Sur le plan conceptuel, les élèves approfondissent leurs connaissances en physique du son, notamment sur l’intensité, la fréquence et l’échelle des décibels. Ils relient aussi ces principes à des applications concrètes, telles que la pollution sonore et l’insonorisation en milieu urbain. Sur le plan pratique, ils développent des compétences scientifiques essentielles : réaliser une revue de littérature, formuler des hypothèses et évaluer de manière critique les variables. Par ailleurs, ils pratiquent la résolution collaborative de problèmes en participant à des discussions de groupe et en affinant leurs idées grâce aux retours de leurs pairs. Cette étape souligne l’importance de la préparation dans la recherche scientifique, montrant comment une base théorique solide permet une approche expérimentale ciblée et méthodique. Les élèves disposent désormais des connaissances et outils nécessaires pour passer à la phase suivante : tester leurs hypothèses par une expérimentation systématique.


Pour conclure cette phase, les élèves s’engagent dans une discussion centrée sur des questions ouvertes. Ces questions visent à encourager une réflexion approfondie sur l’étude et ses implications plus larges. Parmi les questions pouvant être débattues :

1. Influence des propriétés du son et des matériaux : Comment la fréquence du son (aiguë ou grave) influence-t-
elle l’efficacité des matériaux dans l’atténuation sonore ? Pourquoi certains matériaux, comme la mousse, sont- ils plus utilisés en insonorisation que d’autres, comme le métal ?
2. Applications et environnements variés : Comment le concept d’atténuation sonore s’applique-t-il dans
différents environnements (studios d’enregistrement, salles de classe, immeubles résidentiels, milieux non aériens comme sous l’eau ou dans l’espace) ?
3. Impact environnemental et innovations : Quels compromis environnementaux sont liés à l’usage de matériaux
synthétiques versus naturels ? Comment les progrès en science des matériaux peuvent-ils améliorer efficacité et durabilité ?
4. Limites et mesures : Quelles sont les limites de l’échelle des décibels pour mesurer le son dans des
environnements complexes et bruyants ?
5. Urbanisme et technologie : Comment l’urbanisme futur pourrait-il intégrer l’insonorisation pour créer des villes
plus calmes ? De quelle manière la technologie d’atténuation sonore pourrait-elle réduire la pollution sonore dans les transports publics ?
6. Aspects culturels et sociaux : Les différences culturelles ou sociales influencent-elles la manière dont les
communautés priorisent et gèrent la pollution sonore ?

## Étape 2 : conception expérimentale et collecte de données


L'objectif de cette phase est de faire passer les élèves de l'exploration théorique à l'expérimentation pratique. Les élèves utilisent leurs connaissances sur les ondes sonores et l’atténuation, combinées à la question de recherche et à l’hypothèse formulées à l’étape 1, pour concevoir et exécuter une expérience. Cette phase introduit les pratiques scientifiques essentielles, telles que la précision des mesures, la collecte systématique de données et le dépannage.

**Contexte et description du problème à résoudre à cette étape** : Cette étape permet de passer de la préparation théorique à l’expérimentation pratique. Les élèves construiront leur dispositif expérimental, testeront leurs hypothèses et recueilleront systématiquement des données pour étudier la manière dont les matériaux atténuent le son. En appliquant une rigueur scientifique à leurs méthodes, les élèves s’assurent que leurs résultats sont fiables et significatifs.

**Objectifs d'apprentissage**: Les élèves doivent atteindre les objectifs clés suivants :

1. Renforcer les connaissances théoriques par l’application : en construisant et en testant un
dispositif expérimental, les élèves approfondiront leur compréhension de l’intensité sonore, de l’échelle des décibels et de la manière dont les propriétés des matériaux influencent le comportement sonore. Par exemple, ils observeront directement comment les matériaux poreux absorbent le son ou comment les matériaux denses le réfléchissent.
2. Développer une méthodologie scientifique : cette phase offre l’occasion de mettre en œuvre un
protocole étape par étape. Les élèves apprendront à contrôler les variables, telles que la distance entre la source sonore et le microphone, et à garantir la répétabilité en effectuant plusieurs essais. Ils affineront également leur capacité à relier le dispositif expérimental à l’hypothèse, en s’assurant que chaque test produit des données significatives.
3. Apprendre les techniques de mesure et de traitement des données : les élèves mesureront
l’intensité sonore en décibels à l’aide d’un microcontrôleur programmable et d’un microphone. Ils s’exerceront à enregistrer, organiser et vérifier les données, en créant des tableaux structurés pour l’intensité sonore, les propriétés des matériaux et l’atténuation calculée.
4. Renforcer la pensée critique et les compétences de résolution de problèmes : lorsque les
élèves rencontrent des difficultés, telles que des interférences de bruit externe ou des mesures incohérentes, ils développent des stratégies pour résoudre les problèmes et affiner leur approche. Par exemple, ils peuvent ajuster le placement du microphone ou répéter les tests dans des conditions plus calmes pour améliorer la précision.
5. Explorer le lien entre la recherche scientifique et les problèmes du monde réel : les élèves
reconnaîtront le rôle de l’atténuation sonore dans la lutte contre la pollution sonore en milieu urbain, l’amélioration de la conception acoustique des bâtiments et l’amélioration du confort dans les environnements quotidiens. Cette application pratique des concepts scientifiques met en évidence la pertinence de leur travail pour la durabilité et l’urbanisme.


### Conceptualisation


Cette phase relie l’hypothèse formulée à l’étape 1 à une expérience précise et testable. Les élèves définissent clairement leurs paramètres de test et expliquent pourquoi les variables choisies sont importantes pour comprendre l’atténuation du son. En ancrant leur expérience dans les principes fondamentaux du son et des propriétés des matériaux, ils veillent à ce que leur travail apporte des informations à la fois scientifiques et pratiques.

Pour engager les élèves et orienter leur réflexion vers la phase expérimentale, il est pertinent de poser les questions suivantes :

Comment garantir que notre dispositif expérimental mesure avec précision l’atténuation du son ? Quels facteurs (par exemple, épaisseur, densité ou type de matériau) peuvent influencer l’atténuation sonore, et comment isoler leurs effets ? Comment minimiser les erreurs dans nos mesures, telles que le bruit de fond ou les incohérences de l’équipement ? Quelles applications pratiques peut-on envisager pour les résultats de cette expérience ? Comment savoir si nos données confirment ou infirment notre hypothèse ?

L’expérience vise à tester l’effet des propriétés spécifiques des matériaux (type, épaisseur, densité) sur l’atténuation du bruit. L’objectif est de mesurer et comparer l’efficacité de différents matériaux à réduire l’intensité sonore, en utilisant les décibels comme unité de mesure.

La variable indépendante (IV) est la propriété du matériau que nous testons, notamment :

Type de matériau (mousse, bois, métal, tissu) Épaisseur du matériau (échantillons de 1 cm, 2 cm, 3 cm) Densité du matériau (mousse basse densité vs. mousse haute densité)

La variable dépendante (DV) est la réduction de l’intensité sonore (en décibels). L’atténuation se calcule en comparant les niveaux sonores avec et sans présence du matériau.

Nous contrôlons ces variables supplémentaires :

Distance entre la source sonore, le matériau et le microphone Fréquence et volume du buzzer Niveaux de bruit ambiant

Cette expérience révèle comment le son interagit avec les matériaux, offrant une valeur à la fois scientifique et pratique :

Compréhension scientifique : Les élèves observent et mesurent le comportement des ondes sonores lorsqu’elles rencontrent des matériaux. Les matériaux poreux comme la mousse absorbent les ondes et les convertissent en chaleur, tandis que les matériaux denses comme le métal les réfléchissent. Grâce à des tests systématiques, ils comprennent les principes de propagation du son et de transformation de l’énergie.

Applications pratiques : Les résultats s’appliquent directement aux défis du monde réel : réduire la pollution sonore urbaine, améliorer l’acoustique des bâtiments et développer une insonorisation durable. Les élèves apprennent comment les principes scientifiques influencent la conception architecturale et la planification environnementale.

Test de l’hypothèse : L’hypothèse formulée à l’étape 1 est évaluée à l’aide de données mesurables. Par exemple, si la prédiction est que « la mousse atténue mieux le son que le métal en raison de sa structure poreuse », les mesures confirmeront ou infirmeront cette affirmation, renforçant ainsi le raisonnement scientifique.

Les élèves appliquent leurs connaissances théoriques pour prédire les performances des matériaux, par exemple :

Les matériaux à densité plus élevée (comme l’acier) réfléchissent principalement le son, entraînant une atténuation moindre. Des matériaux plus épais forment des barrières sonores plus solides, augmentant l’atténuation. Les matériaux poreux absorbent et dissipent l’énergie sonore, améliorant l’atténuation.

Ces liens aident les élèves à justifier leurs choix de matériaux et leur conception expérimentale.


Questions clés à prendre en compte

Comment les propriétés des matériaux affectent-elles l’interaction des ondes sonores ? Pourquoi mesurer l’intensité sonore en décibels ? Comment la fréquence et l’amplitude influencent-elles l’atténuation du son ? Comment notre expérience teste-t-elle notre hypothèse ? Quels problèmes du monde réel nos découvertes pourraient-elles aider à résoudre ? Ce cadre conceptuel aide les élèves à comprendre l’objectif de leur expérience tout en assurant que leur travail fait le lien entre les principes scientifiques et les applications pratiques.


### Investigation par les élèves


Dans cette phase, les élèves mettent en œuvre un protocole structuré pour mesurer l’atténuation du son par différents matériaux, en veillant à ce que leur méthodologie soit rigoureuse, fiable et cohérente avec leur hypothèse. L’accent est mis sur la précision, la répétabilité et la collecte des données.

#### Construction du dispositif expérimental

Le dispositif expérimental doit être conçu pour isoler l’interaction des ondes sonores avec le matériau testé. Les principaux composants sont les suivants :

Source sonore : un générateur de sons (buzzer) émettant une fréquence et une amplitude constantes fournit une onde sonore contrôlée pour les tests. La fréquence du buzzer doit être choisie pour simuler des sons réels, tels que des niveaux de bruit environnementaux ou intérieurs typiques (par exemple, 500 à 1 000 Hz).

Microphone et microcontrôleur : un microphone relié à un microcontrôleur programmable mesure l’intensité sonore en décibels (dB). Le microcontrôleur traite et affiche les données, soit sur un écran LCD, soit via une interface informatique.

Matériaux d'essai : les élèves testeront une variété de matériaux aux propriétés différentes, comme la mousse, le bois, le métal et le tissu. Les matériaux doivent varier en épaisseur et en densité pour explorer leurs effets sur l’atténuation.

Environnement contrôlé : pour minimiser les interférences, l’expérience doit se dérouler dans une pièce calme où le bruit extérieur est réduit. Assurez un éclairage et des conditions environnementales cohérents pour éviter les fluctuations des relevés des capteurs.

#### Protocole étape par étape

- **Étalonnage** : Commencez par calibrer le microphone et la source sonore. Mesurez l’intensité sonore de référence (ligne de base) sans aucun matériau entre la source et le microphone. Enregistrez cette valeur comme intensité de départ. Vérifiez que la source sonore émet un ton stable et que le microphone fournit des lectures constantes.
- **Matériaux de test** : Placez le matériau d’essai entre la source sonore et le microphone à une distance fixe (par exemple, 10 cm entre la source, le matériau et le microphone). Assurez-vous de l’alignement pour éviter la déviation des ondes sonores. Enregistrez l’intensité sonore après le matériau en décibels. Cette valeur représente le son transmis à travers le matériau. Répétez la mesure pour chaque matériau, en maintenant un placement et un alignement cohérents.
- **Collecte de données pour des essais multiples** : Pour chaque matériau, effectuez au moins trois essais afin de tenir compte de la variabilité. Enregistrez les résultats de chaque essai et calculez l’intensité moyenne pour une meilleure précision. Répétez le processus avec des matériaux de différentes épaisseurs ou densités, en maintenant constantes toutes les autres variables.
- **Calcul de l'atténuation** : Utilisez la formule : Atténuation (dB) = Intensité de référence (dB) – Intensité transmise (dB). Enregistrez l’atténuation pour chaque matériau et configuration dans un tableau de données structuré.

#### Enregistrement et organisation des données

Les élèves créeront un tableau de données pour consigner leurs observations :

Type de                                                       Intensité de        Intensité Épaisseur (cm)           Densité (g/cm³)                                        Atténuation (dB) matériau                                                     référence (dB)    transmise (dB)

Mousse                   1                     0,03              80                  50                  30

Bois                   2                     0,60              80                  65                  15

Métal                  0,5                    7.80              80                  75                   5


Pour vous aider à programmer le capteur approprié, reportez-vous à la section « Fiche pratique 2 - Affichage des données sur un écran ».


Encouragez les élèves à inclure des observations sur chaque matériau, telles que la texture, la rigidité ou les défauts potentiels pouvant influencer les résultats.

Lors de l’expérience, ils peuvent rencontrer des problèmes comme des mesures incohérentes ou des interférences sonores. Les stratégies pour y faire face incluent :

Réétalonnage : vérifier que la source sonore et le microphone fonctionnent correctement. Contrôle environnemental : réduire le bruit en réalisant l’expérience dans un espace calme ou en utilisant des barrières insonorisantes. Répétition : effectuer des essais supplémentaires si les résultats paraissent incohérents.

Encouragez le travail collaboratif, en comparant les configurations et résultats entre groupes. Les discussions peuvent aborder :

Comment améliorer l’alignement et le placement pour obtenir des lectures cohérentes. Si les tendances observées confirment leurs hypothèses. Des modèles inattendus et leurs explications possibles.

À la fin de cette phase, les élèves auront :

Collecté un ensemble de données quantifiant les propriétés d’atténuation sonore des matériaux. Fait preuve de rigueur dans la conception et l’exécution expérimentales. Développé une méthode structurée pour la collecte et l’analyse des données, garantissant des résultats fiables pour la phase suivante. Cette enquête pratique favorise une compréhension approfondie de l’atténuation du son et prépare les élèves à analyser leurs résultats de manière critique lors de la phase suivante.


### Restitution et réflexion


Connaissances mobilisées : En terminant cette phase, les élèves passent de la préparation théorique à l’expérimentation pratique, recueillant des données précieuses pour tester leurs hypothèses. Grâce à des mesures systématiques de l’intensité et de l’atténuation du son, ils découvrent comment les propriétés des matériaux—type, épaisseur, densité—influencent la réduction des ondes sonores. Ces données servent désormais de base pour valider ou ajuster leurs hypothèses lors de l’analyse suivante. Réflexion sur la mise en œuvre en classe : Les résultats expérimentaux offrent des aperçus préliminaires répondant aux hypothèses. Par exemple, les élèves peuvent observer que la mousse atténue mieux le son que le bois ou le métal, ou que des matériaux plus épais augmentent l’atténuation. Ces observations apportent des réponses mesurables et fondées sur des preuves, tout en stimulant la réflexion critique sur les valeurs aberrantes ou incohérences potentielles. Résultats d’apprentissage : Méthodologie scientifique : application d’une démarche structurée, définition des variables, contrôle des conditions et garantie de la répétabilité. Collecte et traitement des données : développement de compétences en mesure, enregistrement systématique et organisation des données pour analyse. Résolution de problèmes et adaptabilité : amélioration des stratégies face aux interférences sonores ou résultats incohérents. Compétences collaboratives : responsabilité partagée, apprentissage entre pairs et évaluation critique des protocoles et résultats.


Pour approfondir la compréhension et encourager la réflexion, les élèves peuvent discuter des questions suivantes :

Dans quelle mesure les résultats expérimentaux concordent-ils avec les hypothèses initiales ? Y a-t-il eu des surprises ou des tendances inattendues ? Comment la configuration pourrait-elle être améliorée pour garantir une précision et une fiabilité accrues lors des expériences futures ? Existe-t-il d’autres propriétés des matériaux, telles que la texture ou la flexibilité, susceptibles d’influencer l’atténuation du son, mais qui n’ont pas été testées ? Comment les résultats se rapportent-ils à des applications concrètes, comme la conception de bâtiments insonorisés ou la réduction de la pollution sonore en milieu urbain ? Comment cette expérience pourrait-elle être adaptée pour tester l’atténuation du son à différentes fréquences ou amplitudes ?

Cette étape renforce le lien entre théorie et pratique, en dotant les élèves des outils nécessaires pour interpréter et analyser leurs résultats de manière critique à l’étape suivante. Elle souligne aussi la nature itérative de la recherche scientifique, où chaque phase s’appuie sur les idées et défis précédents.

## Étape 3 : analyse et interprétation des données


**Contexte et description du problème à résoudre à cette étape** : Dans cette phase, les élèves passent de la collecte des données à leur analyse, en interprétant les résultats pour valider ou ajuster leurs hypothèses. Après avoir recueilli des données sur les propriétés d’atténuation sonore de divers matériaux, ils entrent dans la phase critique d’examen et d’interprétation. L’objectif est d’évaluer si les résultats expérimentaux confirment leurs hypothèses initiales, et d’identifier des tendances ou des modèles expliquant le comportement du son en interaction avec différents matériaux. Cette étape les invite à relier observations et principes théoriques, tout en prenant en compte incohérences et limites potentielles des données.

**Objectifs d'apprentissage**:

Compétences de base : Organiser et analyser des données expérimentales pour déceler des modèles et tendances. Tester la validité des hypothèses en comparant résultats et prédictions. Interpréter les résultats dans le cadre de la physique du son et des propriétés des matériaux, notamment atténuation, absorption et réflexion. Réfléchir aux limites, anomalies et sources d’erreur potentielles pour évaluer la fiabilité des résultats.

Compétences auxiliaires : Développer des compétences en représentation visuelle des données, par la création de graphiques ou tableaux. Appliquer un raisonnement statistique, comme le calcul de moyennes et la comparaison d’ensembles de données. Communiquer efficacement les résultats en fournissant des explications étayées. Renforcer la pensée critique en discutant des implications plus larges, telles que les applications de l’insonorisation urbaine ou la réduction de la pollution sonore.

Cette phase incite les élèves à aborder leurs données avec curiosité et rigueur, considérant leurs résultats non seulement comme des réponses, mais aussi comme un point de départ pour une enquête scientifique approfondie et une mise en relation avec des enjeux concrets.


### Conceptualisation


L'objectif de cette phase est d'analyser les données collectées pour en tirer des conclusions pertinentes sur l'atténuation du son et son lien avec les propriétés des matériaux. Les élèves confrontent les tendances observées à leurs hypothèses, évaluant si les résultats expérimentaux confirment leurs prédictions initiales. Cette étape souligne l’importance du raisonnement scientifique fondé sur l’interprétation des données et invite à explorer leur portée plus large.

Les élèves analysent comment différents matériaux atténuent le son en examinant les données mesurées. Cette analyse comprend :

La quantification de l’atténuation sonore, par le calcul de la réduction d’intensité pour chaque matériau, exprimée en décibels. La comparaison de l’efficacité des matériaux, pour déterminer lesquels (par exemple, mousse, bois, métal) réduisent le mieux l’intensité sonore. L’étude de l’impact des propriétés des matériaux, comme l’épaisseur, la densité ou la structure, sur leur capacité à atténuer le son.

L’analyse se concentre sur l’identification de tendances, par exemple : les matériaux poreux tels que la mousse atténuent généralement plus le son que les matériaux rigides comme le métal, et une augmentation d’épaisseur conduit à une atténuation accrue. L’analyse poursuit plusieurs objectifs essentiels :

Test des hypothèses : Elle permet aux élèves de vérifier si leurs résultats confirment ou infirment leurs hypothèses. Par exemple, si l’hypothèse est que « les matériaux plus épais atténuent davantage le son », ils valident cela en observant une corrélation positive entre épaisseur et réduction des décibels.

Approfondissement de la compréhension du comportement sonore : En interprétant leurs résultats, les élèves comprennent mieux comment les ondes sonores interagissent avec différents matériaux. Les matériaux poreux absorbent l’énergie sonore et la transforment en chaleur, tandis que les matériaux denses réfléchissent souvent le son. Cette analyse relie leurs résultats aux principes de propagation des ondes et de transformation énergétique.

Mise en lumière des applications concrètes : Les conclusions ont des implications pratiques pour lutter contre la pollution sonore, améliorer l’acoustique des bâtiments et concevoir des solutions d’insonorisation durables. Comprendre quels matériaux sont les plus efficaces permet de relier les résultats à des enjeux sociétaux et à des solutions d’ingénierie.

Pour mener cette analyse, les élèves organiseront leurs données et utiliseront des outils visuels pour repérer tendances et relations :

Résumer les résultats : Calcul des moyennes et normalisation des mesures pour assurer la cohérence. Visualiser les données : Utilisation de graphiques et diagrammes pour identifier les modèles, par exemple, quel matériau est systématiquement plus performant ou comment l’atténuation varie avec l’épaisseur. Vérifier les hypothèses : Analyse de chaque résultat dans le cadre des hypothèses pour évaluer si les preuves soutiennent les prédictions.


Questions d'orientation pour l'analyse : Pour développer leur esprit critique, les élèves peuvent se poser les questions suivantes :

Les résultats confirment-ils les hypothèses initiales ? Sinon, quelles en sont les raisons possibles ? Observe-t-on des tendances inattendues ou des valeurs aberrantes dans les données ? Comment les expliquer ? En quoi leurs découvertes correspondent-elles ou diffèrent-elles de leur compréhension théorique de l’atténuation du son ? Que révèlent les résultats sur l’influence des propriétés des matériaux, telles que la porosité ou la densité, sur le comportement sonore ? Comment cette expérience peut-elle éclairer des applications concrètes, par exemple dans la réduction du bruit en urbanisme ou la conception architecturale ?


### Investigation par les élèves


#### Organisation des données

Les élèves débutent par vérifier la complétude et la cohérence des données brutes entre les essais. Ils organisent ensuite ces données sous forme de tableaux pour en faciliter la lecture et l’analyse.

Par exemple :

Intensité de          Intensité Matériel          Épaisseur (cm)      Densité (g/cm³)                                               Atténuation (dB) référence (dB)      transmise (dB) Mousse                   2                  0,03                 80                   50                   30 Bois                   2                  0,60                 80                   65                   15

Les élèves calculent l’atténuation moyenne pour chaque matériau et configuration afin de compenser la variabilité entre les essais.

#### Visualisation des résultats

Les élèves créeront des graphiques pour illustrer les tendances et relations dans leurs données.

Exemples de visualisations :

Graphiques à barres : comparer les valeurs d’atténuation entre différents matériaux. Diagrammes de dispersion : examiner la relation entre l’épaisseur ou la densité et l’atténuation. Graphiques linéaires : montrer les tendances de l’atténuation en fonction des variations des propriétés du matériau (par exemple, augmentation de l’épaisseur).

#### Interprétation des résultats

Les élèves analyseront leurs données visualisées pour identifier des modèles. Les questions clés à aborder sont les suivantes :

Quel matériau atténue le son le plus efficacement ? Existe-t-il une relation claire entre l’épaisseur ou la densité et l’atténuation ? Les résultats étaient-ils cohérents d’un essai à l’autre ou y avait-il des valeurs aberrantes significatives ?

Encouragez les élèves à interpréter leurs résultats à la lumière de leurs connaissances théoriques.

Par exemple, si la mousse atténue davantage le son que le métal, ils peuvent expliquer cela par la capacité du matériau à absorber les ondes sonores plutôt qu’à les réfléchir.

#### Limites du traitement

Les élèves réfléchiront aux éventuelles incohérences ou résultats inattendus. Les limitations possibles incluent :

Erreurs de mesure liées au bruit externe ou à des problèmes d’équipement. Variabilité dans la qualité ou le positionnement des matériaux. Contraintes du dispositif expérimental, comme l’impossibilité de tester des fréquences plus élevées.

Ils discuteront de leurs résultats en classe ou en groupes, comparant analyses et interprétations.

Les enseignants pourront orienter la réflexion avec des questions telles que :

Les résultats confirment-ils ou réfutent-ils l’hypothèse ? Pourquoi ? Y a-t-il des tendances surprenantes, et comment les expliquer ? Que feriez-vous différemment en cas de répétition de l’expérience ? Comment ces résultats se rapportent-ils aux applications concrètes de l’insonorisation ?

Cette phase développe la pensée critique, l’analyse des données et la communication scientifique, préparant les élèves à une discussion approfondie sur les implications plus larges.


Réflexion sur le processus expérimental

Discussion de groupe : Chaque groupe présente ses résultats à la classe et discute de la façon dont ses données correspondent à ses hypothèses initiales. Cela permet d’identifier les points communs et les différences entre les études des différents groupes.

Biais, limites et amélioration : Les enseignants animent une discussion sur les limites du processus de collecte de données, notamment les biais possibles, la taille réduite des échantillons et l’impact de ces facteurs sur la fiabilité des résultats. Les élèves réfléchissent aux effets de contraintes telles que des périodes de collecte courtes, des variations environnementales non prises en compte, ou l’influence de l’observateur. Ils abordent aussi les stratégies pour réduire ces limites lors d’expériences futures, comme prolonger la durée de l’étude, collecter davantage de données ou intégrer des contrôles sur les variables environnementales.

### Restitution et réflexion


Connaissances mobilisées : Les élèves apprennent à organiser et analyser des données scientifiques, appliquer des méthodes statistiques à des ensembles de données réels, et reconnaître les limites des études à petite échelle. Réflexion sur la mise en œuvre en classe : Cette phase montre comment transformer des données brutes en informations utiles. Elle souligne aussi l’importance de l’intégrité des données, de la transparence et de la réflexion critique sur les résultats. Résultats d’apprentissage : Plusieurs acquis clés sont favorisés : Analyse de données : organisation, visualisation pertinente et interprétation des modèles. Pensée critique : capacité à raisonner scientifiquement et évaluer les preuves par comparaison aux principes théoriques. Réflexion méthodologique : identification des limites expérimentales et pistes d’amélioration, comme l’augmentation des échantillons ou le test de nouvelles variables. Connexions au monde réel : pertinence de l’atténuation du son pour résoudre des défis concrets, comme la pollution sonore ou la conception architecturale. Communication : développement d’une présentation claire, justifiée par des preuves solides.


La phase d’analyse permet aux élèves de relier leurs données expérimentales à leurs hypothèses et d’approfondir leur compréhension de l’atténuation sonore. En examinant les relations entre les propriétés des matériaux (type, épaisseur, densité) et leur capacité à réduire l’intensité sonore, ils acquièrent des connaissances sur le comportement des ondes sonores et l’efficacité des isolants.

Grâce à cette analyse, les élèves fournissent des réponses fondées sur des preuves. Par exemple :

Si l’hypothèse est que « la mousse atténue le son plus efficacement que le bois ou le métal en raison de sa structure poreuse », les données confirment ou infirment cette affirmation avec des valeurs d’atténuation mesurables. Si l’hypothèse est que « les matériaux plus épais atténuent davantage le son », ils peuvent vérifier cela par les tendances observées dans leurs graphiques ou tableaux.

Ces résultats sont autant de points de départ pour des discussions critiques sur les raisons des écarts observés.

Pour approfondir leur apprentissage, les élèves peuvent réfléchir aux questions suivantes :

Dans quelle mesure les résultats correspondent-ils aux attentes initiales ? Y a-t-il eu des surprises ou incohérences ? D’autres propriétés, comme la souplesse ou la texture, pourraient-elles influencer l’atténuation ? Comment les tester ? Quelles sont les limites des décibels comme mesure d’intensité sonore ? Existe-t-il d’autres indicateurs à explorer ? Comment adapter l’expérience pour étudier l’effet de la fréquence sur l’atténuation ? Comment ces résultats se rapportent-ils à des défis concrets, comme la réduction de la pollution sonore urbaine ou la conception d’espaces insonorisés ? Quel pourrait être l’impact environnemental d’une utilisation à grande échelle de ces matériaux pour l’insonorisation ? Comment la compréhension de l’atténuation sonore s’applique-t-elle à d’autres domaines, tels que l’acoustique sous-marine ou l’ingénierie aérospatiale ?

Cette phase souligne la nature itérative de la recherche scientifique : l’analyse ne se limite pas à valider des hypothèses, mais ouvre la voie à de nouvelles questions et pistes d’exploration. En reliant leurs découvertes à des applications concrètes, les élèves comprennent mieux le rôle de la science dans la résolution de problèmes réels. Lors de la présentation et consolidation des résultats, ils sont encouragés à envisager leur expérience comme un élément d’une réflexion plus large sur la création d’environnements de vie plus calmes, durables et confortables.

## Fiche pratique

Consultez la fiche technique détaillée pour programmer votre carte : [Programmation : Whisper Walls](/ressources/steamcity/programmation/programmation-whisper-walls).

## Approfondir et aller plus loin

Explorer la question à travers d’autres initiatives


Explorer les paysages sonores et la                    Tirer des leçons des innovations en cartographie du bruit urbain                           matière de barrières anti-bruit


Encouragez les élèves à utiliser des applications      Explorez des exemples concrets de technologies pour smartphone comme « SoundPrint » ou «              d’insonorisation, comme les écrans antibruit sur Hush City » pour cartographier les espaces calmes      autoroutes ou les murs végétalisés. Les élèves ou les zones bruyantes de leur quartier. Les élèves    peuvent étudier comment des matériaux naturels, peuvent étudier l'impact de l'urbanisme sur la         tels que haies ou murs de mousse, réduisent le pollution sonore et proposer des moyens de             bruit tout en améliorant l’esthétique urbaine et la concevoir des villes plus calmes. Application Hush     qualité de l’air. Barrières antibruit de la FHWA City Idée d’activité : Concevoir une barrière antibruit Idée d’activité : Constituer une « carte silencieuse   durable adaptée à une zone locale sensible, en » locale en mesurant les niveaux sonores dans          combinant solutions naturelles et artificielles. différents espaces urbains et en repérant les zones à améliorer.


Enquêter sur l'impact de la pollution                  Découvrir les politiques de régulation sonore sous-marine                                     du bruit


La pollution sonore ne se limite pas aux milieux       Les élèves peuvent explorer comment des terrestres : le bruit sous-marin, généré par les       politiques, comme la directive européenne sur le navires et les activités industrielles, perturbe les   bruit ambiant, visent à maîtriser la pollution écosystèmes marins. Les élèves peuvent étudier         sonore. Ils peuvent étudier les règlements locaux les technologies développées pour atténuer ce          ou les normes internationales pour comprendre la bruit, comme les hélices silencieuses. Bruit des       réglementation du bruit par les autorités. Agence océans : National Oceanic and Atmospheric              européenne pour l'environnement : Bruit ambiant Administration (NOAA) Idée d’activité : Organiser un débat simulé sur Idée d’activité : Simuler la propagation du son        l’équilibre entre développement économique (par sous-marin en utilisant des réservoirs et des          exemple, aéroports, autoroutes) et la réduction du Vibrationss, afin d’observer les différences de        bruit dans les collectivités. propagation du son dans l’eau par rapport à l’air. Expérimenter avec des matériaux                       Découvrir le rôle de la nature dans la pour la conception acoustique                         réduction du bruit


Des    plastiques      recyclés   aux    panneaux     Les forêts, les arbres et la végétation jouent un rôle insonorisants imprimés en 3D, de nouveaux             de barrières sonores naturelles, absorbant le bruit matériaux     sont     développés    pour    lutter   et favorisant le bien-être. Les élèves peuvent durablement contre la pollution sonore. Les élèves    étudier comment les espaces verts atténuent le peuvent tester des matériaux recyclés ou              bruit et proposer des solutions pour intégrer innovants pour concevoir leurs propres solutions      davantage de « protections acoustiques vertes » en d’insonorisation. 10 innovations acoustiques          milieu urbain. Influence des espaces verts sur l'environnement sonore urbain Idée d’activité : Concevoir un prototype de panneau acoustique à partir de matériaux courants     Idée d’activité : Expérimenter avec l’absorption ou recyclés et mesurer son efficacité dans la         sonore de différentes plantes ou construisez un « réduction du bruit.                                   mur végétal » à petite échelle pour une expérience en classe.


Explorer les dimensions culturelles et                Découvrir les nouvelles technologies artistiques du son                                    de suppression du bruit


La pollution sonore présente des dimensions           Les élèves peuvent étudier comment la culturelles et psychologiques. Les élèves peuvent     suppression active du bruit (ANC) est intégrée dans comprendre comment le bruit excessif affecte leur     les écouteurs et autres appareils. Ils peuvent bien-être et découvrir comment les artistes           expérimenter l’annulation de phase sonore pour utilisent les paysages sonores pour exprimer les      comprendre les principes de l’ANC. Comment enjeux environnementaux. Projet Paysages              fonctionne la technologie de suppression du bruit sonores mondiaux Idée d’activité : Construire un système ANC simple Idée d’activité : Enregistrer les paysages sonores    avec des microphones et des haut-parleurs pour de votre région et créez un collage audio             observer son effet sur les ondes sonores. comparant environnements bruyants et calmes, tout en réfléchissant à leur impact émotionnel.

## Bibliographie

Livres Rossing, T. D., & Fletcher, N. H. (2004). Principles of Vibrations and Sound. Springer : Ce livre fournit une introduction accessible à la physique du son et des Vibrationss, y compris la manière dont les matériaux interagissent avec les ondes sonores. https://link.springer.com/book/10.1007/978-1-4757-3822-3 Everest, F. A., & Pohlmann, K. C. (2021). Master Handbook of Acoustics (7th Edition). McGraw-Hill Education : Une ressource complète sur l'acoustique, couvrant des sujets allant de l'insonorisation à l'acoustique des pièces et aux propriétés des matériaux. https://www.accessengineeringlibrary.com/content/book/9781260473599

Articles de recherche Ver, I. L., & Beranek, L. L. (2006). "Noise and Vibrations Control Engineering: Principles and Applications." : Un guide technique sur l'ingénierie de contrôle du bruit, y compris des applications pratiques pour l'insonorisation et l'atténuation.https://onlinelibrary.wiley.com/doi/book/10.1002/9780470172568 L. Cao, Q. Fu,Y. Si, B. Ding, J. Yu (2018). “Porous materials for sound absorption”: Cet article passe en revue les études sur la façon dont les matériaux poreux absorbent le son et discute de leurs applications pratiques dans le contrôle                                                  du                                                 bruit. https://www.researchgate.net/publication/325614788_Porous_materials_for_sound_absorption

Ressources Web European Environment Agency (EEA) – Environmental Noise Pollution : Une ressource sur les données et la réglementation en matière de pollution sonore à travers l'Europe, utile pour explorer les stratégies d'atténuation dans le monde réel. Decibel X App : Une application mobile pour mesurer les niveaux sonores en temps réel, utile pour des expériences pratiques en classe.

Vidéos et multimédias éducatifs “How Soundproofing Works” : Une courte vidéo captivante expliquant les principes de l’insonorisation et la façon dont les matériaux bloquent ou absorbent le son. “The Science of Sound Videos: Listen to this!” – National Geographic Kids : Un aperçu visuellement attrayant de la façon dont le son voyage et interagit avec différents environnements.

Normes et directives ISO 717-1: Acoustics – Rating of Sound Insulation in Buildings and of Building Elements : La norme internationale pour mesurer et évaluer les propriétés d'isolation acoustique des matériaux. https://www.iso.org/standard/51968.html
---

> Ce protocole fait partie du curriculum STEAMCITY. Ce travail est sous licence Creative Commons Attribution-ShareAlike 4.0 International License et a été réalisé avec le soutien de la Commission européenne. Son contenu n'engage que son auteur et la Commission ne peut être tenue responsable de l'usage qui pourrait être fait des informations qu'il contient.

---

---

*Cette fiche fait partie du projet [SteamCity](/projets/steamcity), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

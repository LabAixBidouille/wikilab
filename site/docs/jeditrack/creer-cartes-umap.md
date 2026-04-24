---
id: creer-cartes-umap
title: Cartes collaboratives uMap
sidebar_label: "Cartes collaboratives uMap"
sidebar_position: 9
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><circle cx="12" cy="12" r="10" fill="#1198f0" opacity="0.1"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#1198f0" opacity="0.25"/><circle cx="12" cy="9" r="3" fill="#1198f0"/><circle cx="6" cy="17" r="1" fill="#1198f0" opacity="0.25"/><circle cx="18" cy="15" r="0.8" fill="#1198f0" opacity="0.25"/><path d="M3 20 Q8 18 12 20 Q16 22 21 20" fill="none" stroke="#1198f0" strokeWidth="1" opacity="0.25"/></svg> Cartes collaboratives uMap

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Géographie</span>
  <span className="badge badge--primary">Informatique</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| JediTrack | ~2h | Débutant | 12-18 ans |

## Matériel

- Ordinateur ou tablette avec navigateur web
- Connexion internet
- Compte OpenStreetMap (facultatif, pour la sauvegarde)

</div>

</div>

---

uMap est un outil de cartographie open-source qui permet de créer, gérer et partager des cartes personnalisées. Il s'appuie sur les données d'OpenStreetMap, offrant une plateforme souple et accessible pour représenter des informations géographiques. Au sein de Jedi Track, il a été utilisé pour valoriser la campagne de relève AccessQuest par la création d'une carte participative des quartiers étudiés afin d'identifier les enjeux d'accessibilité : [http://u.osmfr.org/m/1218866/](http://u.osmfr.org/m/1218866/)

OpenStreetMap est un projet collaboratif visant à créer une carte mondiale librement accessible et modifiable. Elle est alimentée par des bénévoles, à partir de connaissances locales, de traces GPS et d'autres sources ouvertes. Elle rassemble une grande variété de données géographiques : rues, équipements publics, commerces, transports, etc. Souvent comparée à Wikipedia, cette carte permet à chacun de contribuer, mais aussi de réutiliser les données dans de nombreux contextes.

<img src="/img/ressources/jeditrack-creer_cartes_umap/image.png" alt="Exemple de carte uMap créée dans le cadre de Jedi Track" style={{maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem'}} />

**Le principe est simple : à partir d'un fond de carte OpenStreetMap, vous pouvez ajouter des marqueurs, dessiner des zones, créer des itinéraires et organiser vos données par couches thématiques. Contrairement aux géants du secteur, uMap respecte la vie privée, ne collecte pas de données personnelles et permet une appropriation complète de vos créations.**

:::info[Conseil : Utiliser uMap en animation]
Les jeunes d'aujourd'hui évoluent souvent dans leur territoire sans vraiment le connaître ni s'y sentir acteurs. **uMap transforme cette passivité en engagement** en permettant aux participants d'explorer leur environnement quotidien, de documenter leurs découvertes et de les partager collectivement sur une carte interactive. Cette démarche crée instantanément du lien social - chaque observation personnelle enrichit la connaissance du groupe - tout en développant un sentiment d'appartenance territoriale. L'outil répond à un besoin concret de l'animation : capitaliser les sorties terrain et les rendre visibles pour tous. Que ce soit pour cartographier la biodiversité locale, identifier les dysfonctionnements urbains, valoriser le patrimoine de proximité ou analyser les mobilités, uMap donne du sens aux explorations en transformant les observations individuelles en projet collectif. Les participants découvrent qu'ils peuvent documenter et comprendre leur cadre de vie, développant ainsi une culture citoyenne ancrée dans leur réalité quotidienne.

**Concrètement**
- **Ancrage territorial concret** : Les participants partent de leur réalité quotidienne et de leurs observations directes. Cette approche du "terrain vers la carte" rend les apprentissages immédiatement compréhensibles et motivants.
- **Collaboration naturelle** : L'outil permet à plusieurs personnes de contribuer à la même carte, créant une dynamique collective où chaque observation enrichit la connaissance partagée du groupe.
- **Visualisation immédiate** : Les données collectées deviennent instantanément visibles sur la carte, créant un sentiment d'accomplissement et permettant des analyses immédiates des patterns géographiques.
- **Appropriation citoyenne** : En cartographiant leur territoire, les jeunes développent un regard critique sur leur environnement et prennent conscience de leur capacité à documenter et transformer leur cadre de vie.
:::

## Tutoriel pratique - Première utilisation

- **Créer une carte sur uMap**
    1. Ouvrez un navigateur web et allez sur le [site web uMap](https://umap.openstreetmap.fr/).
    2. Cliquez sur « **Créer une carte** » pour démarrer un nouveau projet.
    3. Une fois que votre fond de carte s'ouvre, cliquez sur **l'icône des paramètres** (symbole d'engrenage) pour définir le **titre de la carte, la description et les paramètres d'affichage par défaut**.
    4. Choisissez le **format de fond de carte** qui convient le mieux aux besoins de votre projet (par exemple, standard, topographique, satellite).
- **Ajouter des couches et des données :** Les couches sont utilisées pour organiser différents types d'informations sur votre carte, comme différents sujets ou types de données.
    1. Cliquez sur **l'icône des couches** (deux couches empilées) pour **gérer** et **ajouter** de nouvelles couches.
    2. Pour ajouter une nouvelle couche, sélectionnez « **Créer une couche** » et nommez-la en fonction des données ou de l'activité (par exemple, Sites historiques, Données de trafic).
    3. Configurez les propriétés de la couche, comme la **couleur des marqueurs ou des lignes**, pour différencier visuellement les couches.
- **Ajouter des marqueurs et des formes**
    1. Sélectionnez la couche que vous souhaitez modifier dans votre liste de couches.
    2. Choisissez **l'outil approprié (marqueur, ligne ou polygone)** dans la barre d'outils et cliquez sur la carte pour le placer.
    3. Chaque nouvel élément peut être **personnalisé** avec une boîte de dialogue contextuelle où vous pouvez ajouter des titres, des descriptions, des images ou des liens.
- **Enregistrer un lieu : Pour** enregistrer un nouveau lieu sur la carte, cliquez sur **« éditer »** (ou **« edit »**). Recherchez l'emplacement de votre site. Vous pouvez utiliser l'outil de recherche situé à gauche pour entrer directement **les coordonnées GPS**, ce qui facilite la localisation. Une fois l'emplacement trouvé (lieu, bâtiment ou service), cliquez sur **l'icône du pointeur** pour marquer l'endroit :
    1. **Positionnez** le pointeur sur le bon emplacement. Cela ouvrira une fenêtre de propriétés.
    2. **Choisissez la couche** appropriée, par exemple : *Service de la mobilité et des transports*.
    3. Dans la même fenêtre, **nommez l'emplacement** et ajoutez une **description**.

    Vous pouvez également **ajouter une image**. Pour cela, collez l'URL entre deux accolades : `{{URL}}`. Pour créer facilement une URL à partir de vos images, utilisez un outil libre comme :

    1. **Postimage** ([https://postimg.cc/](https://postimg.cc/)). Téléversez l'image, puis copiez le **Lien Direct** (sans créer de compte)
    2. Vous pouvez également utiliser **GitHub** ([https://github.com/](https://github.com/)) : ajoutez votre image dans un dépôt public, ouvrez le fichier, puis copiez l'adresse de l'image (clic droit -> copier l'adresse de l'image).

    Lorsque vous avez terminé, cliquez sur **enregistrer**. Passez en mode **aperçu** pour vérifier l'affichage de votre vignette.

- **Partager et collaborer**
    1. uMap vous permet de contrôler qui peut voir ou modifier vos cartes.
    2. Dans les paramètres de la carte, ajustez les « **Permissions** » pour définir votre carte comme publique ou privée, et attribuez des droits d'édition aux membres de l'équipe ou aux étudiants.
    3. Les cartes peuvent être **intégrées dans des sites web ou des blogs** pour un partage plus large.
    4. Utilisez l'option « **Partager et intégrer** » pour obtenir le **code HTML** qui peut être inséré dans votre site.

## Idées de projets jeunesse avec uMap

| **Format "Détectives urbains" (1 semaine - enquête de quartier) - 11-16 ans** | **Format "Patrimoine de proximité" (2 semaines - projet culturel) - 8-15 ans** | **Format "Observatoire environnemental" (1 mois - projet scientifique) - 12-18 ans** | **Format "Atlas des bizarreries urbaines" (5 jours - cartographie insolite) - 13-17 ans** |
| --- | --- | --- | --- |
| **"Cartographes du quotidien"** | **"Mémoire vivante du territoire"** | **"Éco-cartographes"** | **"Chasseurs de l'étrange quotidien"** |
| **Jour 1** : Formation uMap et définition des missions d'enquête par équipes thématiques **Jour 2-3** : Exploration terrain avec collecte systématique d'observations géolocalisées **Jour 4** : Saisie collective et premiers croisements de données sur la carte **Jour 5** : Analyse territoriale et présentation des découvertes aux acteurs locaux | **Semaine 1** : Rencontres avec les anciens, collecte d'histoires locales, identification sites patrimoniaux **Semaine 2** : Documentation cartographique, création parcours patrimoniaux, restitution intergénérationnelle | **Semaine 1** : Formation observation naturaliste et protocoles de relevés **Semaine 2-3** : Inventaires faune/flore, cartographie espaces verts, diagnostic pollution **Semaine 4** : Synthèse écologique et propositions d'aménagement aux services techniques | **Jour 1** : Formation détectives de l'absurde - repérer les détails insolites que personne ne remarque (plaques de rue bizarres, sculptures mystérieuses, objets abandonnés intrigants) **Jour 2-3** : Safari urbain à la recherche des "perles cachées" : distributeurs improbables, graffitis philosophiques, architectures loufoques, mini-jardins sauvages **Jour 4** : Compilation du "Guide du quartier parallèle" avec anecdotes et théories farfelues sur les découvertes **Jour 5** : Présentation du "Musée virtuel des curiosités locales" aux habitants ébahis |

:::note[Deux façons d'utiliser uMap selon vos besoins]
uMap offre deux possibilités d'usage qui s'adaptent à vos contraintes et objectifs. Si vous participez à un projet territorial plus large (défi inter-établissements, initiative municipale, programme éducatif), vous pouvez contribuer à une **carte collaborative existante** où vos participants enrichissent une base de données partagée avec d'autres groupes de votre région. Cette approche nécessite peu de préparation technique et connecte immédiatement vos jeunes à une dynamique collective qui les dépasse. Alternativement, vous pouvez **créer votre propre carte dédiée** si votre projet a des spécificités particulières, si vous souhaitez maîtriser entièrement la structure et l'affichage, ou si vous prévoyez une utilisation récurrente qui s'enrichira au fil des années. Cette seconde option demande un peu plus de temps de préparation mais vous offre une totale liberté créative et la constitution d'un patrimoine numérique propre à votre structure.
:::

### Checklist pour les animateurs

#### Avant le lancement du projet
- **Objectifs :** Définir clairement les thématiques à documenter et les questions d'étude
- **Territoire :** Délimiter précisément la zone d'étude et vérifier sa pertinence pédagogique
- **Carte :** Créer la carte uMap ou identifier la carte collaborative existante à utiliser
- **Couches :** Organiser les couches thématiques avec codes couleurs et noms explicites
- **Permissions :** Configurer les droits d'accès et d'édition selon le niveau d'autonomie souhaité
- **Formation :** Maîtriser l'outil soi-même et préparer des exemples de démonstration
- **Équipement :** Tester la connexion internet et prévoir des solutions mobiles si nécessaire
- **Partenariats :** Identifier les acteurs locaux intéressés par les résultats de l'enquête

#### Pendant le projet
- **Formation participants :** Accompagner la prise en main d'uMap sans précipiter l'apprentissage
- **Encadrement terrain :** Guider les observations sans contraindre, valoriser la qualité des données
- **Validation technique :** Vérifier régulièrement les données saisies et corriger les erreurs
- **Animation collective :** Organiser des moments d'analyse de la carte en construction
- **Motivation :** Relancer les équipes peu actives et valoriser les contributions significatives
- **Documentation :** Photographier les moments de terrain et de saisie pour la communication
- **Ajustement :** Adapter la méthode selon les difficultés rencontrées et les découvertes
- **Sauvegarde :** Vérifier régulièrement l'enregistrement et faire des copies de sécurité

#### Clôture du projet
- **Finalisation :** Vérifier la cohérence globale de la carte et corriger les dernières erreurs
- **Analyse collective :** Organiser une synthèse des enseignements territoriaux avec les participants
- **Préparation restitution :** Créer les supports de présentation et identifier les destinataires
- **Permissions finales :** Ajuster les droits d'accès pour le partage public ou la conservation
- **Archivage :** Exporter la carte en différents formats et documenter la méthodologie
- **Communication :** Diffuser le lien de la carte aux partenaires et sur les réseaux de la structure
- **Suivi :** Planifier d'éventuelles mises à jour ou extensions de la cartographie
- **Évaluation :** Recueillir les retours des participants sur l'outil et la méthode utilisée

## Références

- Site officiel : [https://umap.openstreetmap.fr/](https://umap.openstreetmap.fr/)
- Projet OpenStreetMap : [https://www.openstreetmap.org/](https://www.openstreetmap.org/)
- Documentation : [https://wiki.openstreetmap.org/wiki/UMap/Guide](https://wiki.openstreetmap.org/wiki/UMap/Guide)
- Tutoriel complet uMap : [https://www.youtube.com/watch?v=j7o96lUxN6o](https://www.youtube.com/watch?v=j7o96lUxN6o)
- Bases sans compte : [https://www.youtube.com/watch?v=-gR4IN1meOY](https://www.youtube.com/watch?v=-gR4IN1meOY)
- Forum d'aide OpenStreetMap : [https://forum.openstreetmap.org/](https://forum.openstreetmap.org/)
- Postimage (hébergement gratuit) : [https://postimg.cc/](https://postimg.cc/)
- GitHub (stockage images) : [https://github.com/](https://github.com/)

---

*Cette fiche fait partie du projet [JediTrack](/projets/jeditrack), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

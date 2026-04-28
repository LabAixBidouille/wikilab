---
id: indoor-air-quality
title: "Qualité de l'air en classe"
sidebar_label: "Qualité de l'air en classe"
sidebar_position: 5
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><rect x="2" y="2" width="20" height="20" rx="3" fill="#DD5350" opacity="0.1"/><path d="M6 18V10l6-5 6 5v8" stroke="#DD5350" strokeWidth="1.5" fill="none" strokeLinejoin="round"/><rect x="10" y="13" width="4" height="5" rx="0.5" fill="#DD5350" opacity="0.25"/><circle cx="12" cy="9" r="1.5" fill="#DD5350"/><path d="M3 20h18" stroke="#DD5350" strokeWidth="0.5" opacity="0.3"/></svg> Qualité de l'air en classe

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Biologie</span>
  <span className="badge badge--primary">Physique</span>
  <span className="badge badge--info">Technologie</span>
  <span className="badge badge--secondary">Environnement</span>
  <span className="badge badge--secondary">Bien-être et santé publique</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| SteamCity | 3 heures (3 séances) | Facile | 10-15 ans |

## Matériel

- 1 carte programmable (NUCLEO-L476RG, Arduino ou Micro:bit)
- 1 shield Grove
- 1 LED RGB Neopixel
- 1 écran LCD
- 1 capteur Sensirion SCD30
- 1 module Bluetooth HM10 BLE
- 1 batterie et connecteur de batterie
- 1 câble USB

<a href="/pdf/steamcity/Protocol_IndoorAirQuality_FR.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger en PDF</a>

</div>


<img src="/img/ressources/steamcity/indoor-air-quality/icone.png" alt="Qualité de l'air en classe" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## Introduction

Il est recommandé d'aérer régulièrement les locaux afin de réduire la concentration de particules en suspension dans l'air et ainsi limiter la propagation des virus. Bien qu'il ne soit pas possible de mesurer les virus, plusieurs études ont démontré la relation entre la concentration de CO2 dans une pièce et la concentration de virus. Lorsque la concentration de CO2 devient trop élevée, c'est le signe qu'une ventilation est nécessaire.

Cette expérience permet de réaliser un détecteur de dioxyde de carbone.

Une fois assemblé et programmé, le détecteur peut être utilisé pour mesurer le taux de dioxyde de carbone dans une pièce. Il peut être utilisé pour montrer aux élèves comment mettre en place une chaîne de mesures, surveiller les changements de niveau au fil du temps et évaluer de manière critique la corrélation entre les changements de taux de CO2 et la ventilation.

:::caution[Avertissement]
Cette expérience donne une valeur indicative de l'évolution du taux de dioxyde de carbone (CO2) dans le milieu dans lequel se trouve le capteur. Elle ne peut être utilisée qu'à des fins pédagogiques et ne saurait se substituer à un appareil étalonné et certifié.
:::

**Disciplines** : biologie, physique.

### Structure du protocole

Le protocole se déroule en quatre phases progressives, organisées sur trois séances (180 minutes au total).

- **Phase 1 : Collecter des données** — les élèves découvrent les principes fondamentaux de la détection du CO2 au moyen d'activités de programmation pratiques. En construisant un détecteur de CO2 à l'aide d'un capteur SCD30 et d'un système d'affichage à LED, ils acquièrent des compétences essentielles en matière de surveillance environnementale et de concepts de programmation de base.
- **Phase 2 : Afficher les données pour obtenir les informations nécessaires** — les élèves développent leurs compétences de visualisation en modifiant leur programme pour afficher les mesures sous forme graphique. En utilisant l'interface Vittascience pour créer des affichages graphiques et exporter des données, ils apprennent des techniques de représentation des données plus avancées.
- **Phase 3 : Analyser les données et en tirer des enseignements** — en 60 minutes, les élèves identifient les tendances des niveaux de CO2 et les corrèlent avec des événements ou comportements spécifiques (ouvertures de fenêtres, occupation des pièces, schémas de ventilation). Ils développent des compétences analytiques et comprennent les implications pratiques de la gestion de la qualité de l'air.
- **Phase 4 : Utiliser les données pour modifier son comportement et améliorer la situation de départ** — cette phase de 40 minutes se concentre sur les applications pratiques. Les élèves appliquent des techniques d'analyse statistique, partagent leurs résultats via des plateformes mondiales comme Vittamap et élaborent des recommandations concrètes pour des changements de comportement.


<figure style={{margin: '1rem auto', textAlign: 'center'}}>
  <img src="/img/ressources/steamcity/indoor-air-quality/StructureSch%C3%A9ma.png" alt="Structure du protocole" style={{maxWidth: '100%', height: 'auto', margin: '0 auto'}} />
  <figcaption style={{margin: 0}}>Structure du protocole</figcaption>
</figure>

### Glossaire

- **Dioxyde de carbone** : gaz inodore, incolore et sans goût, donc difficile à détecter. Une molécule de dioxyde de carbone est composée d'un atome de carbone (C) et de deux atomes d'oxygène (O). Lorsque nous inspirons, nous inhalons du dioxygène (O2) de l'air et expirons du dioxyde de carbone (CO2). L'activité humaine produit également du dioxyde de carbone, notamment lors de la combustion d'hydrocarbures (chauffage au bois, combustion de carburants, centrales à charbon, etc.). Dans une pièce fermée, on peut considérer que le dioxyde de carbone provient uniquement de la respiration des personnes présentes à l'intérieur.
- **Unité PPM** : PPM signifie Parts Per Million (parties par million). Cette unité de mesure est souvent utilisée par les scientifiques, notamment pour mesurer le niveau de pollution. Elle indique combien de molécules polluantes il y a dans un million de molécules d'air. À titre de comparaison, 1 % correspond à 1 million/100 = 10 000 ppm. Par exemple, 800 ppm de CO2 signifie que sur 1 million de molécules dans l'air, 800 sont des molécules de dioxyde de carbone (soit 0,08 %).
- **Taux de dioxyde de carbone en ppm** : il est utile de connaître le taux de dioxyde de carbone dans une pièce, par exemple pour déterminer si un seuil a été franchi et qu'une pièce doit être ventilée. Le taux moyen de CO2 en extérieur est d'environ 400 ppm, hors pics de pollution et dans les zones peu polluées. La valeur de référence du taux moyen en extérieur est fixée par des mesures effectuées à l'observatoire de Mauna Loa à Hawaï depuis 1958. Ce taux moyen est en augmentation depuis des décennies. Vous pouvez consulter le taux moyen « en direct » sur le site du Global Monitoring Laboratory.
- **LoRa** : la technologie LoRaWan est un protocole de communication radio (fréquence 868 mHz en France) qui permet l'échange de données entre objets connectés. Le signal est émis sur une large gamme spectrale, limitant les risques d'interférences et permettant l'envoi de données depuis l'extérieur ou l'intérieur sur de longues distances (1 km en zone urbaine, jusqu'à 20 km en zone rurale). L'envoi de messages est illimité. Cependant, contrairement aux réseaux 4G et 5G, les débits de données LoRaWan sont très faibles, quelques kilobits par seconde seulement. Ce type de réseau est donc utilisé pour l'Internet des Objets (IoT), c'est-à-dire les capteurs fixes (ex : température, humidité, etc.). Les capteurs utilisant la technologie LoRa se connectent à Internet via des passerelles. Cette technologie est compatible avec les cartes programmables NUCLEO-L476RG, Arduino et Micro:bit.

---

## Phase 1 : Collecter des données

### Contexte de la séquence

Cette première phase permet de familiariser les élèves avec les concepts et outils clés (interfaces et matériels). Elle peut être réalisée en classe. L'idée est d'afficher la valeur du taux de dioxyde de carbone sur un écran LCD ou d'ordinateur, et d'alerter l'utilisateur de la valeur du taux atteint, en fonction de la couleur d'une diode électroluminescente (DEL).

### Objectifs d'apprentissage

L'objectif de cette phase est d'apprendre à collecter des données à l'aide de la programmation et de capteurs (CO2). Il est primordial de procéder étape par étape, en demandant aux élèves quels sont les fondamentaux (l'impact d'un niveau trop élevé de dioxyde de carbone sur l'homme), puis en déterminant les seuils de données à collecter.

### Conceptualisation

Avant de commencer, il est important d'évaluer le niveau de connaissances des élèves et de les amener à réfléchir sur les concepts clés. Pour vous aider, voici quelques questions à travailler avec eux, qui les aideront à trouver des réponses pour les activités futures.

#### Que se passe-t-il s'il y a trop de dioxyde de carbone dans une pièce ?

Lorsqu'une ou plusieurs personnes sont présentes dans un local, la concentration d'oxygène diminue, tandis que celle de dioxyde de carbone augmente. À forte concentration, le dioxyde de carbone peut devenir asphyxiant. Le manque d'oxygène dû à un taux élevé de dioxyde de carbone peut avoir des conséquences plus ou moins graves pour l'organisme : accélération du rythme cardiaque, fatigue (et donc diminution des capacités intellectuelles, comme la concentration ou la prise de décision), nausées, vomissements, malaise et même, dans des situations extrêmes, coma ou décès. Il est donc important d'aérer une pièce pour éviter la saturation en dioxyde de carbone. Il faut savoir que la concentration en dioxyde de carbone dépend de plusieurs paramètres : le nombre de personnes présentes dans une pièce, le type d'activité qu'elles pratiquent (chant, sport, études, etc.), le volume de la pièce, le nombre de fenêtres ouvertes, la présence d'un système de ventilation, etc.

#### Indirectement, que peut mesurer le taux de CO2 ?

Certains virus (comme le coronavirus responsable de la COVID-19) se transmettent par aérosols (suspension de particules dans un gaz). Lorsque les gens parlent ou respirent, ils émettent des aérosols (contaminés ou non) dans l'air ambiant. Ces aérosols sont de très fines gouttelettes, de moins d'un micromètre (1 μm = 10-6 m) de diamètre. Dans le cas de la COVID-19, on distingue trois modes de contamination :

- par projection de gouttelettes tombant rapidement au sol (à une distance allant jusqu'à 2 mètres de l'émetteur)
- par contact direct ou indirect,
- et par aérosols, qui restent en suspension pendant plusieurs heures (à une distance de plus de 2 mètres de l'émetteur).

Autrement dit, une personne émet des aérosols et du dioxyde de carbone ! Connaître le taux de dioxyde de carbone est un moyen d'obtenir une information indirecte sur la concentration d'aérosols (contaminés ou non) dans une pièce. Le dioxyde de carbone peut être qualifié de « marqueur » d'aérosols. Bien sûr, il existe des capteurs d'aérosols, mais ils sont très coûteux. La mesure du dioxyde de carbone n'indique pas la quantité d'aérosols, mais elle donne une approximation de leur présence dans une pièce. Ainsi, en fonction des seuils de dioxyde de carbone à définir, il peut être possible de décider à quel moment une pièce doit être ventilée.

#### Comment calibrer un capteur de dioxyde de carbone ?

Il existe de nombreux types de capteurs de dioxyde de carbone, dont la fiabilité dépend de la technique de mesure utilisée. Le capteur utilisé dans cette expérience est le capteur NDIR SCD30, un capteur infrarouge non dispersif de Sensirion. Cette technologie est plus fiable que les capteurs de type MOX (par exemple le capteur MQ135 utilise du dioxyde d'étain SnO2, dont la conductivité électrique varie en fonction de la présence de polluants) ou de type MOS comme le SGP30 (donnant une valeur en équivalent CO2). Pour réaliser des mesures exploitables, le capteur doit être étalonné de la même manière qu'une balance doit être tarée (une balance doit afficher 0 gramme lorsque son plateau est vide) : typiquement, si le capteur est placé à l'extérieur où le taux est (environ) de 400 ppm, la valeur mesurée doit donc être de 400 ppm. Il existe plusieurs façons d'étalonner un capteur :

1. Étalonnage en usine : le processus a été effectué en usine et est valable pendant une période indiquée dans le manuel du fabricant ;
2. Calibrage forcé : il s'agit de connaître la valeur du taux de dioxyde de carbone au point de calibrage ; cette valeur est considérée comme une valeur de référence. Un programme est inséré dans le capteur, spécifiant que la mesure à effectuer correspondra à la valeur de référence connue ;
3. Calibrage automatique : le capteur est placé à l'extérieur pendant une longue période (environ 5 jours) dans un endroit où le taux de dioxyde de carbone est constant et connu. Un programme est importé dans le capteur pour effectuer cet étalonnage sur une longue période. Le capteur mesure régulièrement le taux de dioxyde de carbone, enregistre les valeurs les plus basses et en fait la moyenne pour former une valeur de référence. Pour le capteur utilisé dans cette expérience, l'étalonnage peut être effectué selon la deuxième ou la troisième méthode.

Pour plus de facilité d'utilisation, nous décrivons ici la deuxième méthode, car plus rapide :

1. Reliez la carte à l'ordinateur via le câble USB, avec le capteur SCD30 branché sur la prise I2C.
2. Veillez à placer la carte à l'extérieur.
3. Ouvrez l'interface Vittascience et sélectionnez l'interface NUCLEO-L476RG ; Micro:bit ou Arduino, selon la carte utilisée.
4. Dans le menu « capteurs » choisir le bloc : [Capteur SCD30] forcer l'étalonnage à (420) (ppm)
5. Faites ensuite glisser ce bloc dans le bloc « Au démarrage ».

**Seuils de référence** : selon les scientifiques qui ont contribué au site nousaerons.fr, les seuils suivants devraient être pris en considération :

- **Taux de CO2 ~ 410 ppm** : il s'agit du taux moyen mesuré en extérieur, hors épisodes de pollution ; plus on se rapproche de ce taux dans une pièce, mieux c'est, car c'est le signe que l'air se renouvelle. À l'inverse, dans un espace confiné, sans renouvellement d'air suffisant, le risque de contamination par les aérosols augmente rapidement, et cela se traduit par l'augmentation du taux de CO2 dans la pièce.
- **Taux de CO2 &lt; 600 ppm** : ce taux est recommandé par de nombreux scientifiques pour lutter contre le COVID-19 et d'autres virus aéroportés dans les espaces de restauration où le port du masque n'est pas autorisé. Vous pouvez télécharger les consignes de ventilation mises en place dans les cantines de Nantes Métropole au format PDF ou au format ODT modifiable pour les adapter à votre situation.
- **Taux de CO2 &lt; 800 ppm** : ce taux est préconisé par de nombreux scientifiques pour lutter contre le COVID-19 et d'autres virus aéroportés dans les espaces clos ; il s'agit d'une recommandation du Haut Conseil de la Santé Publique et correspond à un renouvellement d'air satisfaisant dans l'arrêté du 27 décembre 2022 du Code de l'environnement pour les établissements scolaires.
- **Taux de CO2 &gt; 1500 ppm** : correspond à un seuil d'action immédiate, recommandé par le Haut Conseil de la Santé Publique et dans l'arrêté du 27 décembre 2022 du Code de l'environnement.
- **Taux de CO2 = 5000 ppm** : correspond à la limite d'exposition professionnelle (LEP).

Le seuil de 800 ppm est également mentionné dans les *Références pour l'aération et la ventilation des espaces scolaires* (Avril 2021) et constitue la recommandation actuelle du Haut Conseil de la Santé Publique (www.hcsp.fr) dans un contexte de COVID-19.

#### Quelles sont les différentes manières de ventiler une pièce ?

Il existe plusieurs façons de ventiler une pièce, en fonction des besoins, des contraintes architecturales et du niveau de qualité d'air souhaité. Voici les principales façons de ventiler une pièce :

1. **Ventilation manuelle** : ouvrir les fenêtres et les portes.
2. **Ventilation naturelle** :
   - **Grilles de ventilation** : installées dans les murs ou les fenêtres, elles assurent une ventilation continue sans intervention humaine.
   - **Cheminées ou conduits verticaux** : utilisent l'effet de tirage naturel pour extraire l'air chaud et renouveler l'air de la pièce.
3. **Ventilation mécanique** :
   - **Ventilation Mécanique Contrôlée (VMC)** : aspiration de l'air vicié des pièces humides (cuisine, salle de bains) et renouvellement de l'air des autres pièces par des bouches d'aération.
4. **Ventilation forcée** :
   - **Systèmes de climatisation avec fonction d'échange d'air** : certains climatiseurs sont équipés de fonctions de ventilation qui amènent de l'air frais de l'extérieur.
   - **Purificateurs d'air avec fonction de ventilation** : en plus de filtrer l'air, certains modèles peuvent également renouveler l'air intérieur.

Ces différentes méthodes peuvent être combinées pour optimiser la qualité de l'air intérieur et répondre aux besoins spécifiques de chaque espace, que ce soit pour réduire l'humidité, éviter la condensation ou simplement assurer une bonne circulation de l'air.

### Investigation par les élèves

#### Activité 1 : Configuration du seuil de CO2 (10 minutes)

L'activité est lancée par l'enseignant à l'aide du tableau blanc, de papiers ou de feuilles A4. Elle peut être réalisée en groupe ou avec toute la classe.

**Consignes pour les élèves** : Définissez 4 niveaux d'intervention correspondant à différentes couleurs de LED en fonction du taux de CO2. Ils peuvent être ajustés en fonction de l'environnement (ville, campagne, pics de pollution, créer une ventilation) et de la qualité de l'étalonnage. Voici la bonne réponse. Vous pouvez distribuer une version vide de ce tableau à vos élèves.

| Niveaux de dioxyde de carbone (en ppm) | Couleur LED | Action |
|---|---|---|
| moins de 600 ppm | vert | aucune action spécifique |
| entre 600 et 800 ppm | jaune | le port du masque est fortement recommandé |
| entre 800 et 1000 ppm | orange | nous recommandons de ventiler la pièce |
| au-delà de 1000 ppm | rouge | Il est conseillé de quitter la pièce et de l'aérer |

#### Activité 2 : Programmation de l'affichage du CO2 (10 minutes)

L'activité est lancée par l'enseignant avec le support de l'interface Vittascience et du capteur SCD30.

**Consignes pour les élèves** : Créer un programme pour afficher le taux de CO2 dans la pièce sur l'écran LCD avec le capteur SCD30. Utilisez l'interface Vittascience pour le réaliser, assemblez les composants (NUCLEO-L476RG ; carte Micro:bit ou programmable Arduino, capteur SCD30, écran LCD, câble USB, compteur), vérifiez qu'il n'y a pas d'erreurs de syntaxe sur le programme puis cliquez sur "Envoyer" pour télécharger le programme directement sur la carte NUCLEO-L476RG ; Micro:bit ou programmable Arduino.

Pour vérifier que le programme fonctionne, vous pouvez souffler dessus pour vérifier que la valeur mesurée augmente. En extérieur, si le capteur est bien calibré, la valeur indiquée est d'environ 400 ppm.

Vous trouverez un exemple de programme de travail pour réaliser cette activité dans la [fiche technique de programmation](/ressources/steamcity/programmation/programmation-indoor-air-quality) (section « Afficher le taux de CO2 sur un écran LCD à l'aide du capteur SCD30 »).

#### Activité 3 : Configuration des couleurs des LED (10 minutes)

L'activité est lancée par l'enseignant avec l'aide de l'interface Vittascience et du capteur SCD30. Elle peut être réalisée en groupe ou avec toute la classe.

**Consignes pour les élèves** : Allumez une LED (type Neopixel) de couleur orange. Cette étape vous permet de vous familiariser avec l'étape suivante qui propose un programme plus complet. Utilisez l'interface Vittascience pour la réaliser.

:::info[Bon à savoir]
R, V et B signifient respectivement Rouge, Vert et Bleu. La superposition de ces trois lumières colorées, dans des proportions différentes, crée toutes les couleurs selon le principe de synthèse additive. Ces proportions varient entre 0 et 255, correspondant respectivement à 0% et 100% de luminosité. Ainsi, par exemple, si vous souhaitez obtenir :

- **Lumière BLANCHE, choisir** : R : 255 ; V : 255 ; B : 255.
- **Lumière NOIRE, choisir** : R : 0 ; V : 0 ; B : 0.
- **Feu ROUGE** : R : 255 ; V : 0 ; B : 0.
- **Lumière ORANGE** : R : 255 ; V : 96 ; B : 0.

En combinant ces valeurs, on peut théoriquement obtenir 16 777 216 couleurs (il y a 256 nuances possibles pour chaque couleur, de 0 à 255, soit un total de 2563 = 16 777 216 couleurs). Il existe un autre bloc permettant de sélectionner la couleur de la lumière émise par la LED. Ce bloc est présenté plus loin dans le livret. Il permet un choix de couleurs plus simple, mais plus limité, à l'aide d'une palette présélectionnée.
:::

Vous trouverez un exemple de programme de travail pour réaliser cette activité dans la [fiche technique de programmation](/ressources/steamcity/programmation/programmation-indoor-air-quality) (section « Configuration des couleurs des LED »).

#### Activité 4 : Indicateur LED CO2 (10 minutes)

L'activité est lancée par l'enseignant avec l'aide de l'interface Vittascience et du capteur SCD30. Elle peut être réalisée en groupe ou avec toute la classe.

**Consignes pour les élèves** : Mesurer le taux de CO2 à l'aide du capteur SCD30, afficher les valeurs (exprimées en ppm) sur l'écran LCD et allumer une LED de couleur différente selon le taux mesuré. Se référer à l'activité 1 pour créer un programme permettant de changer la couleur d'une LED en fonction du taux de CO2 détecté par un capteur SCD30. Utiliser l'interface Vittascience pour réaliser l'opération, prévoir une courte pause entre les envois de données pour éviter les dysfonctionnements d'affichage, vérifier qu'il n'y a pas d'erreurs de syntaxe sur le programme puis cliquer sur "Envoyer" pour télécharger le programme directement sur la carte programmable NUCLEO-L476RG ; Micro:bit ou Arduino.

Vous trouverez un exemple de programme de travail pour réaliser cette activité dans la [fiche technique de programmation](/ressources/steamcity/programmation/programmation-indoor-air-quality) (section « Indicateur LED CO2 »).

### Restitution et réflexion

L'enseignant peut terminer l'activité en demandant aux élèves de réexpliquer les notions clés qu'ils ont apprises : quels polluants atmosphériques sont nocifs pour la santé, comment les mesurer et quelles données environnementales de construction doivent être prises en compte ? Ces trois notions permettront aux élèves d'étudier les résultats de leurs mesures.

**Connaissances mobilisées** : les élèves découvrent le CO2, son impact sur la santé et comment les capteurs peuvent mesurer la qualité de l'air intérieur.

**Réflexion sur la mise en œuvre en classe** : les élèves programment et assemblent un détecteur de CO2, en définissant des seuils d'action en fonction des niveaux de CO2.

**Résultats d'apprentissage généraux** : Les élèves acquièrent une expérience pratique de l'utilisation de la technologie pour collecter et interpréter des données environnementales.

---

## Phase 2 : Afficher les données pour obtenir les informations nécessaires

### Contexte de la séquence

Cette deuxième phase permet aux élèves d'approfondir leurs compétences en programmation grâce à des outils (interfaces et matériels). Elle peut être réalisée en classe. Il suffit d'allumer une LED de couleur différente en fonction du taux de CO2 mesuré et d'afficher la valeur sur l'écran de l'ordinateur.

### Objectifs d'apprentissage

Le but de cette phase est de mesurer le taux de CO2 à l'aide du capteur SCD30 et d'afficher les valeurs (exprimées en ppm) sur l'écran de l'ordinateur, en allumant une LED de couleur différente selon le niveau mesuré.

### Conceptualisation

Avant de commencer, il est important d'évaluer le niveau de connaissances des élèves et de les amener à réfléchir sur les concepts clés. Pour vous aider, voici quelques questions à travailler avec eux, qui les aideront à trouver des réponses pour les activités futures.

#### Comment afficher les valeurs de CO2 à l'écran ?

Le programme précédent peut être modifié pour afficher la valeur de CO2 mesurée sur l'écran de l'ordinateur via l'interface Vittascience. Cela peut être utile, par exemple, si vous souhaitez projeter les valeurs mesurées en vidéo. La configuration est la même que pour l'activité 4 de la phase 1. Il est toutefois possible de se passer du module LCD dans la configuration si vous ne souhaitez pas d'affichage sur cet écran.

#### Quelle partie du programme doit être modifiée ?

Les deux blocs faisant référence à l'écran LCD30, ils doivent être supprimés pour être affichés sur l'ordinateur.

#### En observant l'interface de programmation, quel élément pouvez-vous ajouter à votre programme pour afficher les données dans la console ?

Dans la partie « communication », vous trouverez un bloc d'instructions permettant d'écrire sur la console. Cette instruction permet à la carte d'envoyer les mesures prises (via le capteur de CO2 SCD30) à l'ordinateur via son port série. Cela nécessite que la carte reste connectée en permanence à l'ordinateur. Cet affichage est possible via une zone de l'interface Vittascience (« la console d'affichage »).

### Investigation par les élèves

#### Activité 1 : Affichage du CO2 (10 minutes)

L'activité est lancée par l'enseignant avec l'aide de l'interface Vittascience et du capteur SCD30. Les élèves peuvent s'appuyer sur le programme précédent pour créer le nouveau. Elle peut être réalisée en groupe ou avec toute la classe.

**Consignes pour les élèves** : Mesurer le taux de CO2 à l'aide du capteur SCD30, afficher les valeurs (exprimées en ppm) sur le support choisi (écran d'ordinateur) et allumer une LED de couleur différente en fonction du taux mesuré. Se référer à l'activité 4 de la phase 1 pour créer un programme permettant de changer la couleur d'une LED en fonction du taux de CO2 détecté par un capteur SCD30. Utiliser l'interface Vittascience pour le réaliser, vérifier qu'il n'y a pas d'erreurs de syntaxe sur le programme puis cliquer sur "Envoyer" pour télécharger le programme directement sur la carte programmable NUCLEO-L476RG ; Micro:bit ou Arduino.

Vous trouverez un exemple de programme de travail pour réaliser cette activité dans la [fiche technique de programmation](/ressources/steamcity/programmation/programmation-indoor-air-quality) (section « Affichage du CO2 »).

#### Activité 2 : Visualisation des données (10 minutes)

L'activité est lancée par l'enseignant avec l'aide de l'interface Vittascience et du capteur SCD30. Les élèves peuvent s'appuyer sur le programme précédent pour créer le nouveau. Elle peut être réalisée en groupe ou avec toute la classe.

**Consignes pour les élèves** : Modifiez légèrement le programme précédent en remplaçant l'affichage de la valeur simple du CO2 dans la console par un affichage graphique de la valeur. Pensez à personnaliser le nom de vos données collectées. Utilisez l'interface Vittascience pour le réaliser, vérifiez qu'il n'y a pas d'erreurs de syntaxe sur le programme puis cliquez sur "Envoyer" pour télécharger le programme directement sur la carte programmable NUCLEO-L476RG ; Micro:bit ou Arduino.

Vous trouverez un exemple de programme de travail pour réaliser cette activité dans la [fiche technique de programmation](/ressources/steamcity/programmation/programmation-indoor-air-quality) (section « Visualisation des données »).

### Restitution et réflexion

L'enseignant peut terminer l'activité en demandant aux élèves ce qu'ils ont appris à la phase 1 et ce qu'ils peuvent faire de plus maintenant qu'ils ont terminé la phase 2. Ils ont appris à utiliser différentes méthodes de représentation des données et à en comprendre l'importance. Chacune d'entre elles est ensuite utilisée pour analyser les données afin de comprendre l'influence des données sur le résultat.

**Connaissances mobilisées** : les élèves explorent des méthodes de visualisation des données, comme l'utilisation de LED et d'écrans d'ordinateur.

**Réflexion sur la mise en œuvre en classe** : les élèves modifient les programmes pour afficher les valeurs de CO2 et observent comment la rétroaction visuelle (DEL) aide à interpréter la qualité de l'air.

**Résultats d'apprentissage généraux** : Les élèves comprennent comment représenter efficacement les données environnementales pour la prise de décision.

---

## Phase 3 : Analyser les données et en tirer des leçons

### Contexte de la séquence

Cette phase permet aux élèves de collecter et d'analyser des données pour déterminer les éléments clés qui modifient les niveaux de CO2 dans une pièce. Elle peut être réalisée dans une salle de classe, dans un bâtiment, dans un restaurant, dans une cafétéria…

### Objectifs d'apprentissage

Apprendre à effectuer une analyse approfondie des données brutes pour rechercher des modèles, des tendances et des mesures dans un ensemble de données existant.

### Conceptualisation

Avant de commencer, vous devez évaluer le niveau de connaissances des élèves et les amener à réfléchir sur des concepts clés. Pour vous aider à le faire, voici une question à travailler avec eux, qui les aidera à trouver des réponses pour les activités futures.

#### Quels facteurs doivent être pris en compte lors de l'analyse des données ?

Il est par exemple possible d'enregistrer les heures d'ouverture et de fermeture des fenêtres, les pauses et les récréations, le début des cours, le nombre de personnes dans la salle, la taille de la salle, la présence d'une ventilation, etc. Et de comparer ces moments clés avec les conséquences sur l'évolution des niveaux de dioxyde de carbone mesurés. De cette manière, l'utilité et l'efficacité de la ventilation de la salle peuvent être démontrées quantitativement.

### Investigation par les élèves

#### Activité 1 : Configurer et installer l'appareil (20 minutes)

L'activité est lancée par l'enseignant avec l'aide de l'interface Vittascience et du capteur SCD30. Elle peut être réalisée en groupe ou avec toute la classe.

**Consignes aux élèves** : Déterminer la durée nécessaire de mesure dans le lieu choisi pour obtenir suffisamment de données en vue d'une analyse ultérieure. Ensuite, installer l'appareil, pendant le temps choisi, à l'endroit choisi et collecter les données.

#### Activité 2 : Analyser les données (30 minutes)

L'activité est lancée par l'enseignant avec l'aide de l'interface Vittascience et du capteur SCD30. Elle peut être réalisée en groupe ou avec toute la classe.

**Consignes aux élèves** : Analyser les données. Démontrer quantitativement l'utilité et l'efficacité de la ventilation des locaux.

### Restitution et réflexion

L'analyse des données est une étape essentielle pour transformer les données brutes en informations, permettant aux élèves d'apprendre à tirer des conclusions. Demandez aux élèves de tirer des conclusions entre l'environnement d'analyse et la qualité de vie. Comment la ventilation d'un bâtiment peut-elle influencer le bien-être de ses occupants ?

**Connaissances mobilisées** : les élèves analysent les données collectées pour identifier les modèles et comprendre les facteurs affectant les niveaux de CO2.

**Réflexion sur la mise en œuvre en classe** : les élèves comparent les tendances du CO2 avec des activités telles que la ventilation, l'occupation et la taille de la pièce pour tirer des conclusions.

**Résultats d'apprentissage généraux** : Les élèves développent des compétences de pensée critique et apprennent à utiliser l'analyse des données pour évaluer la santé environnementale.

---

## Phase 4 : Utiliser les données pour modifier son comportement et améliorer la situation de départ

### Contexte de la séquence

La dernière phase permet aux élèves de tirer des conclusions de l'analyse des données, d'identifier les faiblesses du système actuel et d'identifier les domaines à améliorer dans la vie quotidienne.

### Objectifs d'apprentissage

Analyse avancée des données, raisonnement statistique, idéation d'amélioration.

### Conceptualisation

Avant de commencer, l'enseignant encourage les élèves à considérer d'autres facteurs que la simple valeur du CO2 dans l'air. Aidez-les à explorer la corrélation entre des activités humaines spécifiques, des variables temporelles et des variations des niveaux de CO2. Formulez des hypothèses sur les facteurs potentiels influençant les tendances observées.

### Investigation par les élèves

#### Activité 1 : Analyse statistique des données (20 minutes)

L'activité est lancée par l'enseignant à l'aide des données collectées par les élèves avec le capteur SCD30. Elle peut être réalisée en groupe ou avec toute la classe.

**Consignes aux élèves** : Guidez les élèves dans l'utilisation de techniques statistiques telles que l'analyse de corrélation et la régression pour identifier les relations entre les variables. Encouragez la réflexion critique sur les facteurs de confusion potentiels et les moyens de les contrôler dans leur analyse.

#### Activité 2 : Activité de partage et de comparaison de données (10 minutes)

L'activité est lancée par l'enseignant à l'aide des données collectées par les élèves avec le capteur SCD30. Elle peut être réalisée en groupe ou avec toute la classe.

**Consignes pour les élèves** : Maintenant que les données ont été enregistrées, il peut être intéressant de les comparer avec d'autres données du monde entier grâce à la technologie LoRa. Téléchargez les données que vous avez collectées (grâce à la [technologie LoRa](https://en.vittascience.com/learn/tutorial.php?id=547/activity-no-11-send-the-data-on-the-lora-network-and-display-it-on-the-vittamap-interface-iot-sensors-kit)) et mettez-les à disposition pour consultation sur le site de l'école ou sur le site de Vittascience. Vous pouvez publier les données collectées en temps réel sur Internet via un serveur. Par exemple, la qualité de l'air locale peut être affichée sur un site Web ou un réseau social. Attention cependant, la mise en place d'un tel projet est réservée aux utilisateurs expérimentés !

**Procédure pour publier sur Vittamap** :

1. Connectez-vous sur le site Vittascience et accédez à la carte Vittamap : vittascience.com/vittamap.
2. Cliquez sur le bouton « + » puis « Ajouter une expérience ».
3. Sur le formulaire, remplissez les informations suivantes :
   - **Nom du projet**
   - **Type de kit** : kit station de mesure
   - **Comment s'est déroulé le projet ?** (décrivez ici votre protocole de mesure)
   - **Lieu**
   - **Dates de mesure**
   - **Données** : vous pouvez inclure plusieurs séries de mesures, saisir des données directement dans le tableau « Champ de données » et/ou ajouter votre propre fichier .csv depuis votre carte SD
   - **Photos/Vidéos**
   - **Langue**
4. Une fois tous les champs remplis, cliquez sur « Ajouter une expérience ». Vos données sont désormais disponibles pour la communauté d'utilisateurs de Vittascience sur la carte Vittamap.

**Pour comparer avec d'autres expériences** : filtrez les expériences par type de « Kit station de mesure ». Cliquez sur une expérience puis sur « comparer ». Cliquez à nouveau sur une autre expérience puis sur « comparer avec l'expérience sélectionnée ».

### Restitution et réflexion

L'enseignant encourage les élèves à partager des idées pour améliorer le taux de CO2 dans le lieu choisi tout au long de la semaine. Résumer les idées sous forme d'un résumé des bonnes pratiques à mettre en œuvre.

**Connaissances mobilisées** : Les élèves appliquent le raisonnement statistique pour proposer des solutions visant à améliorer la qualité de l'air en fonction de leurs données.

**Réflexion sur la mise en œuvre en classe** : les élèves créent des recommandations pour de meilleures pratiques de ventilation et partagent leurs résultats à l'échelle mondiale via Vittamap.

**Résultats d'apprentissage généraux** : Les élèves relient les informations fondées sur les données à des actions concrètes, favorisant ainsi un sens des responsabilités pour un mode de vie durable.

---

## Aller plus loin

### Exploration de la problématique au travers d'autres initiatives

- **Exploration de la qualité de l'air intérieur à la maison** : dans cette extension, les élèves surveilleront la qualité de l'air de leurs chambres à l'aide de capteurs de CO2, renforçant ainsi leur compréhension de l'impact de la ventilation sur la santé et le bien-être. En observant et en enregistrant les niveaux de CO2 à différents moments de la journée, ils peuvent identifier les schémas influencés par des activités comme le sommeil, les études ou le nombre d'occupants dans la pièce.
- **Établir des liens** : en recueillant des données, les élèves établiront un lien entre les principes scientifiques abordés en classe et leurs expériences vécues. Cette activité les encourage à réfléchir à la façon dont la circulation de l'air, la taille de la pièce et les méthodes de ventilation contribuent à la qualité de l'air. En comprenant ces dynamiques, les élèves peuvent faire des choix éclairés pour améliorer leur environnement immédiat, comme ajuster les fenêtres ou utiliser des techniques de ventilation simples.
- **Appliquer les connaissances pour un impact quotidien** : les élèves peuvent également étudier l'efficacité de changements spécifiques dans l'environnement de leur salle. Par exemple, ils peuvent comparer les niveaux de CO2 avec des fenêtres fermées ou partiellement ouvertes ou expérimenter le flux d'air à l'aide de ventilateurs. Ces observations aident à traduire des concepts abstraits en actions concrètes.
- **Engager l'entourage** : encourager la participation des familles peut amplifier l'impact de l'activité. En partageant leurs découvertes avec d'autres membres du foyer, les élèves peuvent défendre des pratiques qui favorisent une meilleure qualité de l'air, favorisant ainsi une culture de sensibilisation à l'environnement au sein de leur communauté.
- **Du suivi au plaidoyer** : cette expérience pratique transforme les élèves en défenseurs d'espaces de vie plus sains. Armés de leurs données et de leurs observations, ils peuvent discuter des implications plus larges de la qualité de l'air, comme son rôle dans la réduction des maladies transmises par l'air, l'amélioration de la concentration et l'amélioration de la qualité du sommeil. L'activité développe ainsi non seulement la culture scientifique, mais aussi le sens des responsabilités envers un mode de vie durable.

## Bibliographie

1. **Average CO2 Rates (Live Data)** — Source : Global Monitoring Laboratory. URL : https://gml.noaa.gov/ccgg/trends/ — Intérêt : Fournit des données en temps réel sur les niveaux de CO2 atmosphérique, essentielles pour comprendre les tendances mondiales du carbone et éclairer l'action climatique.

2. **Seuils de CO2 et impact sur la qualité de l'air** — Source : NousAérons.fr. URL : http://nousaerons.fr/ — Intérêt : Discute des seuils de CO2 et de l'importance de la qualité de l'air dans les environnements intérieurs, particulièrement en ce qui concerne la santé et la ventilation.

3. **Aération et ventilation dans les espaces scolaires** — Source : Ministère de l'Éducation (Avril 2021). URL : https://www.education.gouv.fr/media/88756/download — Intérêt : Un guide sur les meilleures pratiques en matière de ventilation dans les milieux éducatifs, soulignant son rôle dans la réduction de la transmission des maladies aéroportées.

4. **Alerte basée sur Arduino pour l'aération** — Source : Vittascience, Alerte Aération Arduino. URL : https://fr.vittascience.com/learn/tutorial.php?id=340/guide-d-utilisation-alerte-aeration-Arduino — Intérêt : Propose un tutoriel étape par étape pour la mise en œuvre d'un système d'alerte basé sur Arduino pour optimiser la qualité de l'air dans les espaces clos.

5. **Alerte basée sur Micro:bit pour l'aération** — Source : Vittascience, Alerte Aération Micro:bit. URL : https://fr.vittascience.com/learn/tutorial.php?id=339/guide-d-utilisation-alerte-aeration-micro-bit — Intérêt : Fournit des instructions pour créer un système d'alerte simple et interactif à l'aide de Micro:bit pour améliorer la qualité de l'air intérieur.

---

*Cette fiche fait partie du projet [SteamCity](/projets/steamcity), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

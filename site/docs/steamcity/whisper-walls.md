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

Dans les environnements urbains actuels, la gestion de la pollution sonore est devenue essentielle pour créer des villes durables et vivables. L'exposition continue au bruit urbain affecte le bien-être immédiat et la productivité quotidienne tout en contribuant à des problèmes de santé à long terme (stress chronique, troubles du sommeil, complications cardiovasculaires et déficits cognitifs).

Cette activité explore comment différents matériaux réduisent l'intensité sonore, offrant ainsi des informations sur les choix architecturaux et de conception qui améliorent le confort dans les espaces résidentiels, éducatifs et publics.

Les principes de réduction du bruit par les matériaux offrent des solutions pratiques aux défis rencontrés par les villes. Cette approche développe des espaces harmonieux où les gens peuvent vivre, travailler et s'épanouir sans les effets néfastes d'une exposition excessive au bruit.

Cette activité s'inscrit dans le cadre de plusieurs ODD des Nations Unies :

- **ODD 3** : Bonne santé et bien-être
- **ODD 11** : Villes et communautés durables
- **ODD 12** : Consommation et production responsables

---

## Structure du protocole

L'expérimentation se compose de trois étapes clés :

1. **Exploration des concepts clés, formulation de la question de recherche et étude documentaire** : les élèves explorent les principes fondamentaux du son et du bruit, formulent une question de recherche et réalisent une recherche documentaire sur les matériaux d'insonorisation
2. **Conception expérimentale et collecte de données** : les élèves conçoivent un protocole expérimental pour mesurer les propriétés d'atténuation acoustique de différents matériaux
3. **Analyse et interprétation des données** : les élèves analysent les données, identifient les tendances et relient leurs résultats à des applications concrètes

---

## Glossaire

| Terme | Définition |
|---|---|
| **Atténuation acoustique** | Diminution de l'intensité sonore lorsqu'un son traverse un milieu ou rencontre un obstacle. |
| **Amplitude** | Hauteur d'une onde sonore, qui détermine l'intensité du son. |
| **Décibel (dB)** | Unité logarithmique mesurant l'intensité sonore. Une baisse de 10 dB correspond à une réduction de dix fois de la puissance sonore. |
| **Densité** | Masse d'un matériau par unité de volume (en g/cm3). Les matériaux plus denses réfléchissent généralement davantage le son. |
| **Fréquence** | Nombre de cycles d'une onde sonore par seconde, exprimé en hertz (Hz). |
| **Insonorisation** | Ensemble des techniques visant à limiter ou supprimer la transmission du son entre différents espaces. |
| **Matériau poreux** | Matériau contenant de nombreux pores interconnectés, capable d'absorber et de dissiper l'énergie sonore. |
| **Onde sonore** | Vibrations se propageant dans un milieu (air, eau, solide) sous forme d'ondes de pression. |
| **Pollution sonore** | Ensemble de sons indésirables ou nuisibles affectant l'environnement et la santé humaine ou animale. |
| **Réflexion du son** | Renvoi des ondes sonores lorsqu'elles rencontrent un obstacle. |

---

## Protocole

### Etape 1 : exploration des concepts clés, formulation de la question de recherche

**Contexte** : les élèves explorent les principes de base du son et du bruit, approfondissent leur compréhension des ondes sonores, de leur intensité et de leur fréquence, ainsi que des effets de la pollution sonore sur la santé.

**Objectifs d'apprentissage** : comprendre la physique du son, les méthodes de mesure du bruit et l'impact environnemental de la pollution sonore. Réaliser une recherche bibliographique, formuler des hypothèses testables.

#### Conceptualisation

Les élèves commencent par définir des concepts clés (intensité sonore, atténuation, échelle des décibels), puis travaillent à la formulation d'une question de recherche et d'une hypothèse.

Exemples de questions de recherche :

- Quels matériaux sont les plus efficaces pour réduire l'intensité sonore ?
- Comment l'épaisseur d'un matériau influence-t-elle sa capacité à atténuer le son ?
- La densité d'un matériau est-elle corrélée à ses capacités d'insonorisation ?

Exemples d'hypothèses :

- La mousse atténuera le son plus efficacement que le bois ou le métal en raison de sa structure poreuse
- L'augmentation de l'épaisseur entraînera une plus grande atténuation
- Les matériaux plus denses atténueront le son plus efficacement

#### Investigation par les élèves

**Recherche documentaire** : les élèves étudient la nature du son et le concept d'atténuation. Trois caractéristiques clés sont explorées :

1. **Fréquence** : nombre de cycles par seconde en Hz
2. **Amplitude et intensité** : mesurée en décibels, échelle logarithmique
3. **Propagation** : comportement des ondes sonores (réflexion, absorption, transmission)

**Conception du protocole expérimental** : définir l'objectif, les variables (type/épaisseur/densité du matériau), la méthodologie et les outils de mesure.

---

### Etape 2 : conception expérimentale et collecte de données

**Objectifs d'apprentissage** : construire un dispositif expérimental, mesurer l'atténuation du son, développer une méthodologie scientifique rigoureuse.

#### Investigation par les élèves

**Construction du dispositif** :

- Source sonore : buzzer émettant une fréquence constante (500 à 1000 Hz)
- Microphone et microcontrôleur mesurant l'intensité en dB
- Matériaux d'essai : mousse, bois, métal, tissu (épaisseurs et densités variées)
- Environnement contrôlé : pièce calme

**Protocole étape par étape** :

1. **Etalonnage** : mesurer l'intensité de référence sans matériau
2. **Test des matériaux** : placer chaque matériau entre la source et le microphone à distance fixe
3. **Essais multiples** : au moins trois essais par matériau
4. **Calcul de l'atténuation** : Atténuation (dB) = Intensité de référence (dB) - Intensité transmise (dB)

**Tableau de données** :

| Type de matériau | Epaisseur (cm) | Densité (g/cm3) | Intensité de référence (dB) | Intensité transmise (dB) | Atténuation (dB) |
|---|---|---|---|---|---|
| Mousse | 1 | 0,03 | 80 | 50 | 30 |
| Bois | 2 | 0,60 | 80 | 65 | 15 |
| Métal | 0,5 | 7,80 | 80 | 75 | 5 |

---

### Etape 3 : analyse et interprétation des données

**Objectifs d'apprentissage** : organiser et analyser des données expérimentales, tester la validité des hypothèses, réfléchir aux limites et sources d'erreur.

#### Investigation par les élèves

1. **Organisation des données** : vérifier la complétude et la cohérence
2. **Visualisation** : graphiques à barres, diagrammes de dispersion, graphiques linéaires
3. **Interprétation** : identifier les modèles et les relier aux connaissances théoriques
4. **Limites** : erreurs de mesure, variabilité des matériaux, contraintes du dispositif
5. **Réflexion sur le processus** : discussion de groupe, biais, améliorations possibles

---

## Fiches pratiques

### Fiche 1 : mesurer l'intensité du son avec STM32

Le microphone intégré au STM32 IoT Node Discovery est prêt à l'emploi. Utilisez l'éditeur MakeCode de Let's STEAM (`makecode.lets-steam.eu`), installez l'extension **serial**, et utilisez le code suivant :

```javascript
Serial.attachToConsole()
forever(function(){
    Serial.writeValue("Decibel", input.decibel());
    pause(200)
})
```

### Fiche 2 : affichage des données sur un écran LCD

Connectez l'écran LCD via le bus I2C. Installez l'extension **lcd_i2c** et utilisez le code suivant :

```javascript
lcd_i2c.initScreen()
lcd_i2c.setCursor(0, 0);
lcd_i2c.ShowString("Decibel (dB):")
forever(function () {
    lcd_i2c.setCursor(0, 1);
    lcd_i2c.ShowNumber(input.decibel());
    lcd_i2c.ShowString("       ");
    pause(200)
})
```

---

## Pour aller plus loin

- **Explorer les paysages sonores** : utiliser des applications comme SoundPrint ou Hush City pour cartographier les espaces calmes ou bruyants
- **Tirer des leçons des innovations en matière de barrières anti-bruit** : écrans antibruit, murs végétalisés
- **Enquêter sur la pollution sonore sous-marine** : impact sur les écosystèmes marins
- **Découvrir les politiques de régulation du bruit** : Directive européenne, règlements locaux
- **Expérimenter avec des matériaux recyclés** pour concevoir des solutions d'insonorisation durables
- **Découvrir le rôle de la nature** dans la réduction du bruit : forêts, arbres, végétation

---

## Bibliographie

- Rossing, T. D., & Fletcher, N. H. (2004). *Principles of Vibrations and Sound*. Springer
- Everest, F. A., & Pohlmann, K. C. (2021). *Master Handbook of Acoustics* (7th Edition). McGraw-Hill Education
- [European Environment Agency - Environmental Noise Pollution](https://www.eea.europa.eu/en/topics/in-depth/noise)
- [ISO 717-1: Acoustics - Rating of Sound Insulation in Buildings](https://www.iso.org/standard/51968.html)

---

*Cette fiche fait partie du projet [SteamCity](/projets/steamcity), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

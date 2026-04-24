---
id: r1as13-servomoteurs
title: Animer avec un servomoteur
sidebar_label: "Animer avec un servomoteur"
sidebar_position: 13
---

<div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '1.5rem'}}>

<div style={{flex: 1}}>

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><circle cx="12" cy="12" r="10" fill="#140e4e" fillOpacity="0.1"/><circle cx="12" cy="12" r="6" fill="#140e4e" fillOpacity="0.25"/><circle cx="12" cy="12" r="2" fill="#140e4e"/><path d="M12 6V2M18 12h4" stroke="#140e4e" strokeWidth="1.5" strokeLinecap="round"/><path d="M16.24 7.76l2.83-2.83" stroke="#140e4e" strokeWidth="1.5" strokeLinecap="round"/><path d="M6 12l-2.5 0M12 18v2.5" stroke="#140e4e" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2"/></svg> Animer avec un servomoteur

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">STM32 IoT Node</span>
  <span className="badge badge--warning">MakeCode</span>
</div>

| Projet | Durée | Difficulté | Âge |
|---|---|---|---|
| Let's STEAM | 25 minutes | Intermédiaire | 11-15 ans |

## Matériel

- 1 carte programmable "STM32 IoT Node Board"
- 1 câble USB Micro-B
- 1 mini-servo SG-90 (1,6 kg)
- Câbles de connexion

## Prérequis

- [Boutons et affichage LED](/ressources/lets-steam/r1as03-boutons)

<a href="/pdf/lets-steam/LS_R1AS13_Servos_FR.pdf" target="_blank" style={{display: 'inline-block', backgroundColor: '#e83e8c', color: '#fff', borderRadius: '20px', padding: '0.5rem 1.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'}}>Télécharger en PDF</a>

</div>

<img src="/img/ressources/servomoteur/icone.png" alt="Servomoteurs" style={{width: '225px', height: '225px', objectFit: 'contain', flexShrink: 0}} />

</div>

---

## De quoi parle-t-on ?

Le servomoteur est un moteur pilotable en position. Il permet de conserver un angle précisément. Il convient pour contrôler un système dont l'angle peut changer au cours du fonctionnement et doit maintenir cette position.

## Objectifs d'apprentissage

- Mettre un objet en mouvement

---

## Introduction

Un servomoteur est un moteur doté d'un ensemble de systèmes de contrôle automatique, qui se compose d'un **moteur ordinaire à courant continu** (moteur électrique rotatif qui convertit l'énergie électrique en énergie mécanique), d'un réducteur, d'un **potentiomètre** (diviseur de tension utilisé pour mesurer le potentiel ou la tension électrique) et d'un circuit de contrôle. Il peut définir l'angle de rotation de l'arbre de sortie en envoyant des signaux. En général, un servomoteur a un angle de rotation maximal (par exemple, 180 degrés).

Les servomoteurs sont commandés par l'intermédiaire d'un **câble électrique à trois fils** qui permet d'alimenter le moteur et de lui transmettre des consignes de position sous forme d'un signal codé en largeur d'impulsion, plus communément appelé PWM. Cela signifie que c'est la durée des impulsions qui détermine l'angle absolu de l'axe de sortie et donc la position du bras de commande du servomoteur. Le cycle d'un signal de référence servomoteur est de 20 ms. Sur le servomoteur proposé, la position du bras varie de 0 à 180°, pour des largeurs d'impulsion allant de 1 à 2 ms (respectivement).

**Ressources :** [https://en.wikipedia.org/wiki/DC_motor](https://en.wikipedia.org/wiki/DC_motor), [https://en.wikipedia.org/wiki/Potentiometer](https://en.wikipedia.org/wiki/Potentiometer)

---

## Étape 1 - Construire

<img src="/img/ressources/servomoteur/servo%20(1).png" alt="Schéma de câblage du servomoteur" style={{maxWidth: '300px', float: 'right', marginLeft: '1rem', marginBottom: '1rem'}} />

### 1. Connecter le servomoteur à la carte

Il y a plusieurs façons de connecter un servomoteur à votre carte. Vous pouvez utiliser n'importe quelle broche de sortie analogique (broches PWM) pour connecter la broche de contrôle. Dans notre exemple, nous allons utiliser la broche **D4**. Le servomoteur sera connecté comme suit :

- **Noir** pour GND
- **Rouge** pour V+ (3V3)
- **Orange** pour SIG (D4)

### 2. Connecter la carte à l'ordinateur

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le **connecteur micro-USB ST-LINK** (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé **DIS_L4IOT**. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

### 3. Ouvrir MakeCode

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur.

**Ressource :** [makecode.lets-steam.eu](https://makecode.lets-steam.eu)

![MakeCode Editor servomoteur](/img/ressources/servomoteur/MakeCode%20Editor.png)

### 4. Programmer la carte

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous.

Avant d'essayer ce programme sur la carte, vous pouvez l'essayer directement dans le simulateur. Si vous changez les valeurs 0 et 180, vous verrez directement le résultat.

Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur **DIS_L4IOT** et attendez que la carte finisse de clignoter — votre servomoteur commencera à bouger !

<div style={{display: 'flex', gap: '1rem', margin: '1rem 0', maxWidth: '100%', overflow: 'hidden'}}>
<img src="/img/ressources/servomoteur/servos.png" alt="Servomoteur" style={{width: '50%', objectFit: 'contain'}} />
<img src="/img/ressources/servomoteur/servos2.png" alt="Détails servomoteur" style={{width: '50%', objectFit: 'contain'}} />
</div>

### 5. Exécuter, modifier, jouer

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé **RESET**).

Si tout fonctionne bien, votre servomoteur va commencer à bouger. Essayez de comprendre l'exemple et commencez à le modifier en changeant la période entre les deux mouvements.

---

## Étape 2 - Programmer

```javascript
// aller de 0 à 180 degrés
forever(function () {
    // dire au servomoteur d'aller à la position 180 degrés
    pins.D4.servoWrite(180)
    // attendre que le servomoteur atteigne la position
    pause(1000)
    // dire au servomoteur d'aller à la position 0 degré
    pins.D4.servoWrite(0)
    // attendre que le servomoteur atteigne la position
    pause(1000)
})
```

### Comment cela fonctionne-t-il ?

Cet exemple est assez simple puisqu'il s'agit du classique clignotement adapté à un servomoteur.

L'instruction principale est `pins.D4.servoWrite(XXX)`. Cette instruction demande au servomoteur de tourner jusqu'à un angle de XXX degrés (comme défini par vos besoins spécifiques en fonction du projet que vous développez).

Pour passer d'une position à l'autre, le servomoteur prend un certain temps. Il faut donc toujours ajouter un délai avant de commencer un autre mouvement.

**Ce programme ne fait que balayer de gauche à droite sans s'arrêter !**

:::info[Servomoteur vs moteur à courant continu]

Par rapport à un moteur à courant continu ordinaire, un servomoteur ne tourne que dans une certaine plage d'angles, alors qu'un moteur à courant continu ordinaire (CC) tourne sur un cercle complet.

Un servomoteur ne peut pas tourner sur un cercle. Un moteur CC ordinaire ne peut pas fournir de retour sur l'angle de rotation, mais un servomoteur peut le faire. Leurs utilisations sont donc différentes.

Les moteurs CC ordinaires s'utilisent comme source d'énergie rotative, tandis que les servomoteurs s'utilisent pour donner un certain angle à un objet qu'ils contrôlent, comme faire bouger une articulation de robot.
:::

---

## Étape 3 - Améliorer

1. Essayez de **réduire autant que possible la valeur de la pause** pour supprimer tout arrêt dans le mouvement.
2. Ajoutez des instructions pour **faire un arrêt court en position médiane**. Adaptez le délai de la pause pour être sûr que l'arrêt soit très court.
3. Transformez ce programme pour **réaliser une minuterie avec un servomoteur**. À chaque pas, déplacez le servo de 3 degrés. Adaptez le délai de sorte que chaque étape prenne approximativement 1 s.
4. **Démarrer le mouvement de balayage** uniquement lorsque le bouton USER a été enfoncé.

---

## Aller plus loin

- **Servomoteur** - Apprenez-en plus sur le mécanisme et le fonctionnement du servomoteur.
  [https://en.wikipedia.org/wiki/Servomotor](https://en.wikipedia.org/wiki/Servomotor)

- **Servomoteurs sur micro:bit** - Tout sur les servomoteurs et leur utilisation dans MakeCode avec Shawn Hymel.
  [https://www.youtube.com/watch?v=okxooamdAP4&t=200s](https://www.youtube.com/watch?v=okxooamdAP4&t=200s)

- **Bras robotique trieur de couleurs DIY** - Apprenez à fabriquer votre propre bras robotique de triage des couleurs à l'aide de capteurs ultrasoniques et IR.
  [https://thestempedia.com/project/diy-color-sorting-robotic-arm/](https://thestempedia.com/project/diy-color-sorting-robotic-arm/)

---

*Cette fiche fait partie du projet [Let's STEAM](/projets/lets-steam), financé par le programme Erasmus+. Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).*

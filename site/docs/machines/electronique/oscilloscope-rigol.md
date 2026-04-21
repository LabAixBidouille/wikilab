---
id: oscilloscope-rigol
title: "Oscilloscope Rigol DS1104Z — Guide d'utilisation"
sidebar_label: "Oscilloscope Rigol DS1104Z"
sidebar_position: 2
---

# Oscilloscope Rigol DS1104Z

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Électronique</span>
  <span className="badge badge--info">Mesure</span>
</div>

**Type** : Oscilloscope numérique 4 voies  
**Bande passante** : 100 MHz  
**Échantillonnage** : 1 GSa/s  
**Difficulté** : Débutant

---

## Présentation

Le Rigol DS1104Z est un oscilloscope numérique 4 voies qui permet de visualiser des signaux électriques en fonction du temps. Contrairement à un multimètre qui affiche une valeur instantanée, l'oscilloscope trace la forme du signal sur un écran, ce qui permet d'observer des phénomènes rapides et de comprendre le comportement dynamique d'un circuit.

Avec une bande passante de 100 MHz et un taux d'échantillonnage de 1 GSa/s, il couvre largement les besoins des projets du L.A.B : de l'analyse d'un signal PWM sur un Arduino à la vérification de bus de communication série (UART, SPI, I2C).

C'est un outil indispensable pour le débogage électronique. Quand un circuit ne fonctionne pas comme prévu, l'oscilloscope permet de vérifier concrètement ce qui se passe au niveau électrique, là où un multimètre ne suffit plus.

## Avant de commencer

:::info[**Sécurité et bonnes pratiques**]
- Ne jamais appliquer une tension supérieure à **300 V** (en mode x10) sur les entrées de l'oscilloscope.
- Toujours utiliser les sondes fournies avec l'appareil. Ne pas utiliser de sondes endommagées.
- Avant de connecter une sonde, vérifier que le réglage d'atténuation (x1 / x10) correspond au réglage logiciel sur l'oscilloscope.
- Ne pas débrancher les sondes en tirant sur le câble. Saisir le connecteur BNC et tourner pour déverrouiller.
- En cas de doute sur le niveau de tension d'un signal, commencer par l'échelle la plus grande (atténuation x10).
:::

## Matériel nécessaire

- Oscilloscope Rigol DS1104Z
- Sondes passives (fournies avec l'oscilloscope, une par voie utilisée)
- Câble de masse (pince crocodile) pour chaque sonde
- Le circuit ou le signal à mesurer

---

## Étape 1 — Mise en place

1. Allumez l'oscilloscope avec le bouton en façade. L'appareil démarre en quelques secondes.
2. Connectez une sonde sur l'entrée **CH1** (connecteur BNC jaune). Insérez le connecteur et tournez d'un quart de tour pour verrouiller.
3. Vérifiez le réglage de la sonde : le commutateur sur le corps de la sonde doit être sur **x10** (position standard). Sur l'oscilloscope, appuyez sur le bouton **CH1**, puis vérifiez que l'atténuation affichée est bien **10X**.
4. Connectez le fil de masse (pince crocodile) de la sonde à la masse (GND) de votre circuit.
5. Touchez le point de mesure avec la pointe de la sonde.

## Étape 2 — Utilisation de base

**Régler la base de temps (axe horizontal) :**

La molette **Horizontal** ajuste l'échelle de temps. Tournez-la pour adapter l'affichage à la fréquence du signal observé. Par exemple, pour un signal à 1 kHz, une base de temps de 500 µs/div est un bon point de départ.

**Régler l'échelle de tension (axe vertical) :**

La molette **Vertical** de la voie CH1 ajuste l'échelle en volts par division. Ajustez pour que le signal occupe environ 3 à 5 divisions à l'écran.

**Stabiliser l'affichage avec le trigger :**

1. Appuyez sur le bouton **Trigger Menu**.
2. Sélectionnez le type **Edge** (front) — c'est le mode par défaut et le plus courant.
3. Choisissez la source (CH1).
4. Réglez le seuil de déclenchement (niveau) avec la molette **Trigger Level** pour qu'il coupe le signal approximativement au milieu de son amplitude.
5. L'affichage doit maintenant être stable.

## Étape 3 — Techniques courantes

**Mesurer fréquence et amplitude automatiquement :**

1. Appuyez sur le bouton **Measure**.
2. Sélectionnez **Source** : CH1.
3. Ajoutez les mesures souhaitées : **Fréquence**, **Amplitude**, **Duty Cycle** (rapport cyclique), **Vpp** (tension crête à crête).
4. Les valeurs s'affichent en bas de l'écran et se mettent à jour en temps réel.

**Vérifier un signal PWM (Arduino, moteur, LED) :**

1. Connectez la sonde sur la sortie PWM.
2. Réglez la base de temps pour voir 2 à 3 périodes complètes.
3. Utilisez les mesures automatiques pour lire la fréquence et le rapport cyclique (duty cycle).

**Utiliser les curseurs pour une mesure manuelle :**

1. Appuyez sur le bouton **Cursor**.
2. Sélectionnez le mode **Manual** et le type **Time** ou **Voltage**.
3. Déplacez les curseurs avec la molette pour encadrer la zone à mesurer. L'écart entre les curseurs s'affiche en temps réel.

Pour observer plusieurs signaux, connectez des sondes sur CH2, CH3 ou CH4 et activez chaque voie avec le bouton correspondant.

## Étape 4 — Ranger le poste de travail

1. Déconnectez les sondes de votre circuit.
2. Appuyez sur **Default** pour réinitialiser les réglages de l'oscilloscope (le prochain utilisateur partira d'une configuration connue).
3. Éteignez l'oscilloscope.
4. Enroulez proprement les sondes sans les plier brutalement (le câble est fragile).
5. Rangez les sondes à proximité de l'oscilloscope, capuchons de protection sur les pointes.

---

## Conseils et astuces

:::tip[**Pour de meilleurs résultats**]
- Utilisez toujours le mode **x10** sur les sondes : meilleure fidélité et meilleure protection de l'oscilloscope.
- Si l'affichage est instable, vérifiez le réglage du trigger (niveau et type de front).
- Le bouton **Auto** règle automatiquement base de temps, échelle et trigger. Pratique pour un premier aperçu.
- Pour les signaux lents (< 1 Hz), passez en mode trigger **Single** pour capturer un événement unique.
- La touche **Run/Stop** fige l'écran pour analyser un signal capturé.
:::

## Aller plus loin

- [Manuel utilisateur Rigol DS1104Z (PDF)](https://www.rigolna.com/products/digital-oscilloscopes/1000z/)
- [EEVblog — Tutoriel oscilloscope pour débutants (vidéo)](https://www.youtube.com/watch?v=xaELqAo4kkQ)
- [Comprendre les protocoles série avec un oscilloscope — Sparkfun](https://learn.sparkfun.com/tutorials/serial-communication)

---

<div style={{textAlign: 'center', marginTop: '2rem', fontSize: '0.85rem', opacity: 0.6}}>
Wiki@LAB — L.A.B · Licence CC BY-SA 4.0
</div>

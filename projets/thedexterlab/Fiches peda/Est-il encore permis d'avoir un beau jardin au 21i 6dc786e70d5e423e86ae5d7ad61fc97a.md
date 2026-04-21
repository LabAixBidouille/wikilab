# Est-il encore permis d'avoir un beau jardin au 21ième siècle ?

Id: PR1-TDL
Feuille de travail vierge: PR1-TDL_Feuille_Travail_Vierge_A3.pdf
Problématique abordée: Comment irriguer automatiquement une plante ?
Thématiques - L'univers des sciences: Plantation, culture et arrosage (https://www.notion.so/Plantation-culture-et-arrosage-e1e26b1c1d2e460cb9b3de5ce2bd8426?pvs=21)
Fiches programmation: PROG1-TDL-1 (../Bienvenue%20dans%20le%20laboratoire%20de%20Dexter/Simuler%20vos%20exp%C3%A9riences%20TheDexterLab%20dans%20MakeCode/PROG1-TDL-1%20533615e542ab4d75bb6ba010d915310d.md), PROG1-TDL-2 (../Bienvenue%20dans%20le%20laboratoire%20de%20Dexter/Simuler%20vos%20exp%C3%A9riences%20TheDexterLab%20dans%20MakeCode/PROG1-TDL-2%2099d9fccef28140a99ed8f30e612f6b06.md), PROG1-TDL-3 (../Bienvenue%20dans%20le%20laboratoire%20de%20Dexter/Simuler%20vos%20exp%C3%A9riences%20TheDexterLab%20dans%20MakeCode/PROG1-TDL-3%203283692f11404c3a8ca5502378fcab7d.md), PROG1-TDL-4 (../Bienvenue%20dans%20le%20laboratoire%20de%20Dexter/Simuler%20vos%20exp%C3%A9riences%20TheDexterLab%20dans%20MakeCode/PROG1-TDL-4%20873cd6e316174e30bceb4501f3e5a7f0.md)
Activités low-tech & DIY: DIY-TDL-1 (https://www.notion.so/DIY-TDL-1-6cce31ff6a2248508fe31e8c0a26d165?pvs=21)
Nos stations de labo: Station de mesure du sol (https://www.notion.so/Station-de-mesure-du-sol-0314146366dc45d69c63ce78aeaff6fa?pvs=21)
Lié à Nos stations de labo (1) (Protocoles): Sans titre (https://www.notion.so/b6211766cd6b4f2b8caf7893e48da499?pvs=21)
Lié à Observer les phénomènes et développer des activités DIY (1) (Protocole lié): Sans titre (https://www.notion.so/62e8b2e15d134f799dd5a61abba13459?pvs=21)
⚒️ Nos instruments de mesure: DATA1-TDL (https://www.notion.so/DATA1-TDL-bb944ecd05904ed6ac5811e93552ac33?pvs=21)

<aside>
ℹ️ **Avec les enjeux actuels liés au changement climatique, entraînant des vagues de chaleur asséchant le sol et épuisant les nappes souterraines, l'eau devient une denrée rare, faisant l'objet de mesures de restriction de plus en plus régulières. L'arrosage du jardin ou des plantes d'intérieur, en période de restriction d'eau doit donc se faire de manière rationnelle afin de ne pas gaspiller une ressource sur laquelle repose d'ores et déjà beaucoup de pression.**

</aside>

![image (28).png](Est-il%20encore%20permis%20d'avoir%20un%20beau%20jardin%20au%2021i/image_(28).png)

### Déroulé de l’activité

Le projet consiste à **construire un système d'arrosage autonome** pour les plantes d'intérieur. La donnée décisive pour choisir d’arroser une plante est **l'humidité du sol, qui est liée à une quantité physique facile à mesurer : la conductivité électrique du sol**. Nous allons donc construire un dispositif qui mesure la **conductivité** du sol et mettra en fonction un système d'arrosage distribuant la juste quantité d’eau à chaque plante. 
Une fois que l'on connaît la conductivité du sol, la détermination de la **quantité d'eau nécessaire** à la plante dépend de plusieurs facteurs : **le type de plante, la température de l'air, la qualité du sol, la période de l'année, etc.**  Nous devrons donc collecter des données et mener plusieurs expériences pour **calibrer au mieux** notre système d’arrosage économe en eau.

**Cette activité vise à questionner les élèves sur les variables à prendre en considération dans l'arrosage des plantes.**

Avec les enjeux actuels liés au changement climatique, entraînant des vagues de chaleur asséchant le sol et épuisant les nappes souterraines, [l'eau devient une denrée rare](https://jardinage.lemonde.fr/dossier-2986-eau-ressource-fragile.html), faisant l'objet de mesures de restriction lorsque les épisodes de canicule s'intensifient. [L'arrosage du jardin ou des plantes d'intérieur, en période de restriction d'eau](https://jardinage.lemonde.fr/dossier-4584-comment-arroser-jardin-periode-restriction-eau.html) doit donc se faire de manière rationnelle afin de ne pas gaspiller une ressource sur laquelle repose d'ores et déjà beaucoup de pression.

### Compétences Mobilisées

En mettant en œuvre une expérience par eux-mêmes, les élèves mobiliseront plusieurs compétences :

- Biologie : définir et analyser scientifiquement le **concept de développement durable** afin d'apprécier son importance, comprendre l'importance d'une **utilisation rationnelle des ressources naturelles**, proposer des solutions diverses à des **problématiques environnementales**
- Biologie : aborder les concepts de **conductivité du sol**
- Technologie : utiliser une **carte programmable** et des capteurs afin de collecter des **données numériques,** approcher les **technologies d'automatisation**
- Mathématiques : Analyser des données de manière **statistique**
- Technologie ou ingénierie, mathématiques : Utiliser une **feuille de calcul**, analyser des données, réaliser des **graphiques** et des **diagrammes** afin de visualiser les données et de décrire ces conclusions
- Transdisciplinaire : **Savoir modéliser, comprendre, formaliser, partager, construire, investiguer, prouver son hypothèse**
- Physique : Formuler une hypothèse et conduire une **expérimentation basée sur la méthode scientifique** pour conclure si elle est correcte ou non.

Afin de comprendre le fonctionnement de l'irrigation et de l'arrosage des plantes, les élèves devront suivre les étapes de l'investigation scientifique en gardant à l'esprit les 4 phases suivantes :

- **Définir les variables permettant de mesurer l'humidité** - Définir les données à collecter selon l'identification de variables mesurables pertinentes pour mener cette expérimentation.
- **Construire un outil de collecte de données** permettant d'analyser les variables définies
- Construire un **outil d'arrosage automatique**
- **Mesurer et analyser les données**
- **Conclure**

### Matériel

- 1 carte programmable “STM32 IoT Node Board”
- 1 écran OLED (SSD1306)
- 1 Plante
- 1 Paille
- 1 Capteur d’humidité du sol
- 1 Servomoteur
- 1 Breadboard
- Des câbles de connexion
- 1 câble USB - micro B

# LES RESSOURCES

### Expérimentation scientifique

[Protocole PR1-TDL - Étapes d'expérimentation](Est-il%20encore%20permis%20d'avoir%20un%20beau%20jardin%20au%2021i/Protocole%20PR1-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation%208a9c293605c9497598fe362f45841216.md)

### Fiches de programmation

[Sans titre](Est-il%20encore%20permis%20d'avoir%20un%20beau%20jardin%20au%2021i/Sans%20titre%20bfbdffceff67431cb42c7b7649724853.csv)
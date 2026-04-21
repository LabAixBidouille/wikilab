# Comment maximiser l’apport en énergie solaire et créer des panneaux auto-orientables ?

Id: PR7-TDL
Feuille de travail vierge: PR7-TDL_Feuille_Travail_Vierge_A3.pdf
Problématique abordée: Comment maximiser l'apport en énergie solaire ?
Thématiques - L'univers des sciences: Efficacité énergétique (https://www.notion.so/Efficacit-nerg-tique-ea905b11d7e042a3b6b4b3286e71b4cc?pvs=21)
Fiches programmation: PROG7-TDL-1 (../Bienvenue%20dans%20le%20laboratoire%20de%20Dexter/Simuler%20vos%20exp%C3%A9riences%20TheDexterLab%20dans%20MakeCode/PROG7-TDL-1%20cf962082f0c14171a1fb06cbea6c4d42.md), PROG7-TDL-2 (../Bienvenue%20dans%20le%20laboratoire%20de%20Dexter/Simuler%20vos%20exp%C3%A9riences%20TheDexterLab%20dans%20MakeCode/PROG7-TDL-2%209b64612863b1476482332071a0587d65.md), PROG7-TDL-3 (../Bienvenue%20dans%20le%20laboratoire%20de%20Dexter/Simuler%20vos%20exp%C3%A9riences%20TheDexterLab%20dans%20MakeCode/PROG7-TDL-3%20980efc1e9e91499f9e42d50cd308d106.md), PROG7-TDL-4 (../Bienvenue%20dans%20le%20laboratoire%20de%20Dexter/Simuler%20vos%20exp%C3%A9riences%20TheDexterLab%20dans%20MakeCode/PROG7-TDL-4%206876463295ea4b09bc813f0e8b5c8f67.md), PROG7-TDL-5 (../Bienvenue%20dans%20le%20laboratoire%20de%20Dexter/Simuler%20vos%20exp%C3%A9riences%20TheDexterLab%20dans%20MakeCode/PROG7-TDL-5%202a4b8c98d45e4cf589030337bdc83c45.md)
Activités low-tech & DIY: DIY-TDL-7 (https://www.notion.so/DIY-TDL-7-fc6c49bee5104651bd5de042234fb092?pvs=21)
Nos stations de labo: Station d'énergie (https://www.notion.so/Station-d-nergie-898765d0765f46b9879f70ef28cfacee?pvs=21), Station environnementale (https://www.notion.so/Station-environnementale-d340a9e0df6b4506bcab77693f890033?pvs=21)
Lié à Nos stations de labo (1) (Protocoles): Sans titre (https://www.notion.so/38e30ae054c24822b7ab19fa59d79e87?pvs=21), Sans titre (https://www.notion.so/fff4c2d38f68489db6987185ba414758?pvs=21)
Lié à Observer les phénomènes et développer des activités DIY (1) (Protocole lié): Sans titre (https://www.notion.so/52c62b0b97b1406b83f10607624ffe96?pvs=21)
⚒️ Nos instruments de mesure: DATA7-TDL (https://www.notion.so/DATA7-TDL-b4256d83d07b40989ad3a4b3b1ff470c?pvs=21)

<aside>
ℹ️ **Un panneau solaire fonctionne en convertissant l'énergie solaire en électricité. Il est composé de cellules photovoltaïques qui capturent la lumière du soleil et la convertissent en électricité à l'aide d'un processus appelé effet photovoltaïque. L'électricité produite par les cellules est ensuite envoyée à un onduleur, qui la convertit en courant alternatif utilisable pour alimenter les appareils. En raison de leur durabilité et de leur capacité à produire de l'énergie propre, les panneaux solaires sont considérés comme une forme importante d'énergie renouvelable.**

</aside>

![Untitled](Comment%20maximiser%20l%E2%80%99apport%20en%20%C3%A9nergie%20solaire%20et%20c/Untitled.png)

### Déroulé de l’activité

L'objectif principal de ce protocole est de maximiser la production d'énergie solaire en suivant la trajectoire du soleil tout au long de la journée. Pour y parvenir, nous proposons aux élèves de développer un système basé sur un servomoteur qui permettra à un panneau photovoltaïque de toujours être orienté face au soleil. Ainsi, nous pourrons exploiter au mieux l'énergie solaire disponible.

Pour atteindre cet objectif, nous allons mesurer la quantité de lumière tombant sur le panneau solaire à différents moments de la journée. Ces mesures nous permettront de contrôler le mouvement du panneau solaire, si nécessaire, afin de maximiser la production d'énergie. Les élèves pourront installer des capteurs pour surveiller les conditions météorologiques, ce qui permettra de prévoir les variations de la lumière solaire et d'adapter en conséquence la position du panneau photovoltaïque. 

Grâce à cette activité, les élèves pourront apprendre plusieurs concepts de physique, comme la lumière et les transformations d'énergie, tout en développant leurs compétences en programmation (comprendre comment utiliser une carte électronique, des capteurs, programmer par blocs et comprendre un système technique). Ils exploreront également les enjeux liés aux énergies renouvelables et formuleront des hypothèses basées sur une démarche scientifique structurée.

### Compétences Mobilisées

Ce protocole mobilise plusieurs disciplines scolaires, notamment :

- La physique : pour comprendre les principes scientifiques sous-jacents à la mesure de l'intensité lumineuse et à l'orientation d'un panneau solaire, ainsi que les principes de base de la programmation d'un servomoteur.
- Les sciences de l'ingénieur : pour concevoir et réaliser des prototypes, des circuits et des supports d'impression 3D pour les capteurs et les actionneurs, et intégrer différentes parties du système.
- L'informatique : pour écrire du code pour contrôler les capteurs et les actionneurs, créer des programmes pour collecter et afficher des données, et intégrer différentes parties du système.

Ce protocole peut être adapté à différents niveaux scolaires, de la fin du collège au lycée. Il peut être utilisé dans le cadre de projets de physique, de sciences de l'ingénieur ou de technologie.

### Matériel

Afin de réaliser cette activité, vous aurez besoin du matériel suivant : 

- 1 carte programmable “STM32 IoT Node Board”
- 2 cellules photoélectriques (LDR)
- 2 résistances de 10 kΩ
- 1 breadboard
- Des câbles de connexion
- 1 câble USB - micro B

# LES RESSOURCES

### Expérimentation scientifique

[Protocole PR7-TDL - Étapes d'expérimentation](Comment%20maximiser%20l%E2%80%99apport%20en%20%C3%A9nergie%20solaire%20et%20c/Protocole%20PR7-TDL%20-%20%C3%89tapes%20d'exp%C3%A9rimentation%20af4ce5abb2da4f909f76be1eb4bfc99a.md)

### Fiches de programmation

[Sans titre](Comment%20maximiser%20l%E2%80%99apport%20en%20%C3%A9nergie%20solaire%20et%20c/Sans%20titre%20ed5f56856f1a4cbc8450dd3f96bd1480.csv)
# Découpe laser carte du monde en liège

### Présentation

Mon objectif est de répondre à une demande de ma fille : coller sur le mur de sa chambre une carte du monde en liège, sur laquelle elle pourrait punaiser des centres d’intérêt, des photos, etc.

Elle pourra être réalisée par découpe laser au LAB, dans une plaque de liège achetée à Casto.

### Matériel

- Deux plaques carrées de 50cm de côté et 1 cm d’épaisseur juxtaposées donneront une carte dans un cadre de 50cm sur 1m (après mise en pratique nous verrons que ce matériau n'est pas idéal pour la découpe)

- Du scotch double-face pour coller la carte sur le mur

- et bien sûr la découpeuse laser du LAB

### Logiciel

- Inkscape pour la préparation et mise au point du contour à découper

### Première étape :

La première question qui se pose est de trouver un tracé servant de modèle, et une image ne suffit pas : il faut récupérer un contour vectoriel, au format svg pour la découpe.

D’autre part on doit choisir le type de projection, sachant qu’un planisphère est une projection plane des deux hémisphères du globe terrestre : aucune transformation ne sera isométrique. La célèbre projection de Mercator conserve les angles mais pas les distances ni les surfaces : on obtient des pôles exagérément étendus.

Après quelques recherches nous choisissons une projection de Mollweide qui est une représentation plus compacte, dont on éliminera l'antarctique : [https://commons.wikimedia.org/wiki/File:BlankMap-World6.svg](https://commons.wikimedia.org/wiki/File:BlankMap-World6.svg)

### Deuxième étape :

Le contour récupéré inclut les frontières des pays: il ne s’agit pas de découper un puzzle ! Les frontières pouvaient se rajouter en tant que marquage (ou gravure) sur la carte, mais pas en tant que découpe. Il faut les séparer et le travail du svg dans Inkscape pour isoler les frontières peut être fastidieux.

Zoom sur le nord du Canada : la carte récupérée est très précise, et une découpe de tous les contours prendrait plus d’une demi-heure sur la machine.
[ZoomNordCanada.png]

L’idée pour obtenir le contour des côtes est d’extraire le contour des mers plutôt que des terres. L’outil disponible dans Inkscape est le remplissage : au sens propre je remplis les océans et les mers avec de l’encre bleue ! Le contour des zones correspondra au contour à découper !
[FillCommand.png]
Il faut remplir à la fois les océans, les mers et les lacs qu'on souhaitera découper. J'ai constaté que la précision du contour de remplissage dépend du zoom courant. Ainsi on peut voir que le contour de la méditerranée est plus proche des côtes que le contour de l'atlantique car j'ai zoomé pour désigner un point de la méditerranée. Inversement, si on tente de remplir les océans avec un zoom trop large il ne remplira pas la totalité de la carte mais uniquement la zone visible à l'écran ce qui conduirait à remplir par morceaux et devoir les recoller a posteriori. En même temps la précision obtenue est cohérente avec l'échelle de la carte: le fait qu'on puisse franchir la Manche à pied n'est pas vraiment gênant à l'échelle du globe!

[TerresEtMersDansInkscape.png]
[MersDansInkscape.png]

### Mise en pratique :

Un premier essai de découpe d’un cercle dans la plaque de liège montre que les paramètres par défaut pour le liège (« Cork ») permettent la découpe.

Problème rencontré : la découpeuse laser refuse la découpe de ma carte. Après plusieurs tentatives, la conclusion est que le fichier de commande est trop gros: le contour est trop précis, et contient trop d’iles qui vont occasionner de nombreuses découpes inutiles. Je dois les supprimer avant le remplissage. (Euh..., désolé j'y suis peut-être allé un peu fort j'ai supprimé Cuba avec toutes les Antilles!)

[IlesOceanie.png][SuppressionIles.png]

Le contour obtenu ne prend plus que 8 minutes de découpe.

Voici le fichier svg réutilisable dans Inkscape:
[TerreEtMers.svg]

Maintenant le contour est bien lancé mais... Nouveau problème rencontré : le liège brûle !
[Flamme.png]

Explications : la chaleur produite par le laser ne s’évacue pas assez vite car le liège est trop isolant, et trop épais.

Nous interrompons la découpe pour essayer d’accélérer la vitesse et de faire la découpe en plusieurs passes successives. Mais cela ne résout pas le problème : les passes suivantes brûlent encore plus.

### L’astuce de Sébastien :

Recouvrir la plaque à découper de sopalin mouillé, qui évacuera la chaleur par évaporation. Nous avons dû interrompre la découpe à plusieurs reprises pour mouiller à nouveau le sopalin.
[Mouillage.png]

Nous repartons sur des nouvelles plaques et le résultat est probant :
[DecoupeAvecPapierMouille.png]
[SeparationDecoupe.png]

### Finalisation:

Pose de scotch double-face sur les « terres » et collage sur le mur : les « mers » servent de gabarit de pose.
[CarteMondeEnLiege.png]

### En conclusion:

L'exercice a montré que la mise au point demande toujours du temps! S'il fallait refaire un exemplaire de cette carte je conseillerais un liège plus fin, maximum 6 ou 8mm, et si possible des plaques adhésives (ou alors coller le scotch double-face au départ sur la totalité de la surface pour qu'il soit découpé en même temps!)
Attention, je déconseillerais du liège fin acheté en rouleau car on aurait du mal à le poser bien à plat dans la machine et on risquerait un problème de mauvaise focalisation du laser.

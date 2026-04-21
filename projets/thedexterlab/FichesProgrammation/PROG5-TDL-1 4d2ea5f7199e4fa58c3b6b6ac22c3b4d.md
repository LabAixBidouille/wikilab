# PROG5-TDL-1

Nom de la fiche: Collecter les données grâce au capteur de température
Id protocole: PR5-TDL
Nom du protocole: Comment pouvons-nous réduire la quantité d’énergie que nous utilisons ? (https://www.notion.so/Comment-pouvons-nous-r-duire-la-quantit-d-nergie-que-nous-utilisons-60dff23ace3b46a98d487e65ac55d9f3?pvs=21)
Lié à Protocoles d’expérimentation (1) (Fiches programmation): Sans titre (https://www.notion.so/a62c9e3b1e2143c3854049bad12e079f?pvs=21)

🛠️**Construire**

**Utiliser le capteur de température**
Nous allons utiliser le capteur de température présent sur la STM32 IoT Node Discovery, il n’y a donc pas de branchement à faire.

**Connecter la carte à l'ordinateur**
Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur micro-USB ST-LINK (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé DIS_L4IOT. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

**Installer l’extension serial**

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut "prêt à l'emploi" et vous devrez installer une extension.

<aside>
ℹ️ **Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de la robotique et bien plus encore.**

</aside>

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. Si vous cliquez sur **AVANCÉ**, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton.

Dans la liste des extensions disponibles, vous pouvez facilement trouver l’extension **serial** qui sera utilisée pour cette activité. Cette extension vous permettra d’afficher les données relevées par le capteur de température dans la console. Si elle n’est pas directement disponible sur votre écran, vous pouvez la rechercher à l'aide de l'outil de recherche. Cliquez sur l’extension que vous souhaitez utiliser et un nouveau groupe de blocs apparaîtra sur l'écran principal. 

**Ouvrir MakeCode**
Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur. 

*Ressource : [makecode.lets-steam.eu](http://makecode.lets-steam.eu/)*

**Programmer la carte**
Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur DIS_L4IOT et attendez que la carte finisse de clignoter.

**Exécuter, modifier, jouer**
Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET). 

![Untitled](PROG5-TDL-1/Untitled.png)

**🧑‍💻Programmer**

```jsx
forever(function () {
    Serial.writeValue("Temperature", input.temperature(TemperatureUnit.Celsius))
    pause(30000)
})
```
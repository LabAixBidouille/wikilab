# PROG9-TDL-2

Nom de la fiche: Afficher les données collectées sur un écran
Id protocole: PR9-TDL
Nom du protocole: La qualité de l’air diminue-t-elle lorsque le nombre de personnes présentes dans une pièce augmente ? (https://www.notion.so/La-qualit-de-l-air-diminue-t-elle-lorsque-le-nombre-de-personnes-pr-sentes-dans-une-pi-ce-augmente-fe29b819beb8461abf3d634a4e020a35?pvs=21)
Lié à Protocoles d’expérimentation (1) (Fiches programmation): Sans titre (https://www.notion.so/b2028fe53e64454a86388a4b832609cc?pvs=21)

🛠**Construire**

**Câbler le capteur de CO2**
Nous allons utiliser l’interface “PWM” du capteur de CO2 (MH-Z19B). Le branchement est le suivant :

- Orange pour Vin (5V)
- Bleu pour GND
- Violet pour PWM (D7)

**Connecter la carte à l'écran**
Il y a deux façons de câbler l'écran OLED SSD1306 à une carte, soit avec une connexion I2C ou SPI. Pour notre écran, nous utilisons la connexion I2C :

- Bleu pour GND
- Rouge pour V+ (3V3)
- Jaune pour SDA (D14)
- Vert pour SCL (D15)

*Ressources : [https://en.wikipedia.org/wiki/I2C](https://en.wikipedia.org/wiki/I2C),
[https://en.wikipedia.org/wiki/Serial_Peripheral_Interface](https://en.wikipedia.org/wiki/Serial_Peripheral_Interface),
[https://www.sparkfun.com/qwiic](https://www.sparkfun.com/qwiic),
[https://learn.adafruit.com/introducing-adafruit-stemmaqt/what-is-stemma-qt](https://learn.adafruit.com/introducing-adafruit-stemmaqt/what-is-stemma-qt)*

**Connecter la carte à l'ordinateur**
Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur micro-USB ST-LINK (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé DIS_L4IOT. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

**Ouvrir MakeCode**
Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur.
*Ressource : [makecode.lets-steam.eu](http://makecode.lets-steam.eu/)*

![Untitled](PROG9-TDL-2/Untitled.png)

**Installer les extensions**

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut "prêt à l'emploi" et vous devrez installer une extension.

<aside>
ℹ️ **Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de la robotique et bien plus encore.**

</aside>

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. Si vous cliquez sur **AVANCÉ**, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton.

Dans la liste des extensions disponibles, vous pouvez facilement trouver les extensions **OLED** et **mh_z19b** qui sera utilisée pour cette activité. L’extension **mh_z19b** vous permettra de collecter les données du capteur. Quant à l’extension **OLED**, elle sera utilisée pour afficher nos données sur l’écran. Si elles ne sont pas directement disponibles sur votre écran, vous pouvez les rechercher à l'aide de l'outil de recherche. Cliquez sur l’extension que vous souhaitez utiliser et un nouveau groupe de blocs apparaîtra sur l'écran principal.

**Programmer la carte**
Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur DIS_L4IOT et attendez que la carte finisse de clignoter.

**Exécuter, modifier, jouer**
Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET).

**🧑‍💻 Programmer**

```jsx
forever(function () {
    oled.clear()
		oled.showValue("CO2", input.getCO2Concentration(pins.D7), 1);
    pause(1000)
})
```
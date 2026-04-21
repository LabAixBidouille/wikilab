# PROG6-TDL-2

Nom de la fiche: Afficher les données sur un écran
Id protocole: PR6-TDL
Nom du protocole: L’énergie fournie par un panneau solaire est-elle toujours la même tout au long de la journée ? (https://www.notion.so/L-nergie-fournie-par-un-panneau-solaire-est-elle-toujours-la-m-me-tout-au-long-de-la-journ-e-c89f9f36b73245678504fdea74cc6531?pvs=21)
Lié à Protocoles d’expérimentation (1) (Fiches programmation): Sans titre (https://www.notion.so/ab30f4ad1e4443d3bb3e0d63a259e114?pvs=21)

🛠️**Construire**

**Connecter l'écran**

Il y a deux façons de câbler l'écran OLED SSD1306 à une carte, soit avec une connexion I2C ou SPI. Pour notre écran, nous utilisons la connexion I2C :

- Bleu pour GND
- Rouge pour V + (3V3)
- Orange pour SDA (D14)
- Jaune pour SCL (D15)

*Ressources : [https://en.wikipedia.org/wiki/I2C](https://en.wikipedia.org/wiki/I2C), [https://en.wikipedia.org/wiki/Serial_Peripheral_Interface](https://en.wikipedia.org/wiki/Serial_Peripheral_Interface), [https://www.sparkfun.com/qwiic](https://www.sparkfun.com/qwiic), [https://learn.adafruit.com/introducing-adafruit-stemmaqt/what-is-stemma-qt](https://learn.adafruit.com/introducing-adafruit-stemmaqt/what-is-stemma-qt)*

**Câbler le capteur de tension**

Le capteur de tension utilise un protocole de communication appelé I2C, cela signifie que nous avons besoin de 2 fils pour communiquer avec lui. En plus, il nous faudra deux fils pour supplémentaire pour l’alimenter. Les branchements sont donc les suivants :

- Violet pour SDA
- Vert pour SCL
- Bleu pour GND
- Rouge pour VCC (3.3V)

![Untitled](PROG6-TDL-2/Untitled.png)

<aside>
⚠️ **L’écran et le capteur de tension, utilisent tous les deux l’I2C, cela ne pose pas de problème sauf pour le câblage. En effet les deux câbles “SCL” et “SDA” doivent être branchés aux mêmes endroits. Pour faciliter les branchements utilisez la breadboard.**

</aside>

**Câbler le panneau solaire**

Le panneau solaire doit comporter deux fils :

- Le fil rouge (ou le fil indiqué comme “positif”) sur le bornier à vis Vin +,
- L’autre fil (le noir, ou indique comme “négatif”) sur le bornier à vis Vin -.

**Connecter la carte à l'ordinateur**

Avec votre câble USB, connectez la carte à votre ordinateur en utilisant le connecteur micro-USB ST-LINK (sur le coin en haut à droite de la carte). Si tout se passe bien, vous devriez voir apparaître sur votre ordinateur un nouveau lecteur appelé DIS_L4IOT. Ce lecteur est utilisé pour programmer la carte en copiant simplement un fichier binaire.

**Ouvrir MakeCode**

Allez dans l'éditeur MakeCode de Let's STEAM. Sur la page d'accueil, créez un nouveau projet en cliquant sur le bouton "Nouveau projet". Donnez à votre projet un nom plus expressif que "Sans titre" et lancez votre éditeur. *Ressource : [makecode.lets-steam.eu](http://makecode.lets-steam.eu/)*

**Installer les extensions**

Après avoir créé votre nouveau projet, vous obtiendrez l'écran par défaut "prêt à l'emploi" et vous devrez installer deux extensions.

<aside>
ℹ️ **Les extensions dans MakeCode sont des groupes de blocs de code qui ne sont pas directement inclus dans les blocs de code de base que l'on trouve dans MakeCode. Les extensions, comme leur nom l'indique, ajoutent des blocs pour des fonctionnalités spécifiques. Il existe des extensions pour un large éventail de fonctionnalités très utiles, ajoutant des capacités de manette de jeu, de clavier, de souris, de servomoteurs, de la robotique et bien plus encore.**

</aside>

Vous voyez le bouton noir **AVANCÉ** en bas de la colonne des différents groupes de blocs. Si vous cliquez sur **AVANCÉ**, vous verrez apparaître des groupes de blocs supplémentaires. En bas, il y a une boîte grise appelée **EXTENSIONS**. Cliquez sur ce bouton.

Dans la liste des extensions disponibles, vous pouvez facilement trouver les extensions **OLED** et **INA219** qui seront utilisées pour cette activité. L’extension **OLED** vous permettra d’afficher les données sur un écran. **INA219** est utilisée pour communiquer avec le capteur de tension. Si elles ne sont pas directement disponibles sur votre écran, vous pouvez les rechercher à l'aide de l'outil de recherche. Cliquez sur l’extension que vous souhaitez utiliser et un nouveau groupe de blocs apparaîtra sur l'écran principal.

**Programmer la carte**

Dans l'éditeur JavaScript de MakeCode, copiez/collez le code disponible dans la section "Programmer" ci-dessous. Si ce n'est pas déjà fait, pensez à donner un nom à votre projet et cliquez sur le bouton "Télécharger". Copiez le fichier binaire sur le lecteur DIS_L4IOT et attendez que la carte finisse de clignoter.

**Exécuter, modifier, jouer**

Votre programme s'exécutera automatiquement chaque fois que vous le sauvegarderez ou que vous réinitialiserez votre carte (appuyez sur le bouton intitulé RESET). 

**🧑‍💻 Programmer**

```jsx
forever(function () {
    oled.clear()
    oled.showValue("Voltage (V)", input.getINA219Voltage(), 1)
    pause(1000);
})
```
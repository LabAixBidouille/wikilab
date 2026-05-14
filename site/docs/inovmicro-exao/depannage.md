---
id: depannage
title: Dépannage STeaMi
sidebar_label: 'Dépannage'
---

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style={{verticalAlign: 'middle', marginRight: '0.5rem', marginBottom: '4px'}}><circle cx="12" cy="12" r="10" fill="#8a6e18" opacity="0.1"/><circle cx="12" cy="12" r="7" fill="#8a6e18" opacity="0.25"/><path d="M9 9a3 3 0 1 1 4.5 2.6c-1 .55-1.5 1.1-1.5 2.4" fill="none" stroke="#8a6e18" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="17" r="1" fill="#8a6e18"/></svg> Dépannage STeaMi

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <span className="badge badge--primary">Informatique</span>
  <span className="badge badge--primary">Technologie</span>
  <span className="badge badge--info">SteaMi</span>
  <span className="badge badge--warning">MicroPython</span>
</div>

Page de référence transverse : si une fiche I-Novmicro #2 ne se comporte pas comme attendu, vérifiez ici **avant de creuser** plus loin. Les problèmes rencontrés en classe se ramènent à quelques causes connues : câble, port série, MicroPython non installé, plusieurs cartes branchées, ou programme déjà en cours d'exécution sur la carte.

---

## Vue d'ensemble

| Symptôme                                         | Cause probable                                  | Solution rapide                                                                  |
| ------------------------------------------------ | ----------------------------------------------- | -------------------------------------------------------------------------------- |
| La carte n'apparaît pas comme disque `STEAMI`    | Câble qui ne transporte que l'alimentation      | Changer de câble (cf. [Câble incompatible](#câble-incompatible-vs-câble-de-données)) |
| Le port série n'apparaît pas dans l'IDE          | Plusieurs ports COM (Windows) ou permissions (Linux) | [Identifier le bon port](#identifier-le-bon-port-série)                    |
| La console reste vide après connexion (`>>>`)    | MicroPython pas installé sur la carte           | [Installer MicroPython](#micropython-pas-installé)                              |
| `Couldn't find the device`                       | Plusieurs cartes branchées en même temps        | [Sélectionner la carte](#plusieurs-cartes-connectées)                            |
| `Device is busy` ou accès refusé au port         | Programme déjà en cours, ou autre IDE qui occupe le port | [Interrompre le programme](#un-programme-est-déjà-en-cours)              |
| Un `main.py` redémarre en boucle                 | Programme persistant qui plante                 | [Désactiver le programme persistant](#un-mainpy-redémarre-en-boucle)             |

---

## Câble incompatible vs câble de données

**Symptôme** : on branche la STeaMi en USB, la LED de charge s'allume, mais aucun disque `STEAMI` n'apparaît sur l'ordinateur.

**Cause la plus fréquente** : le câble fourni avec un chargeur de téléphone ne transporte souvent que l'alimentation, pas les données. La STeaMi est alimentée mais l'ordinateur ne la voit pas.

**Solution** : utiliser un câble USB de **données** :

- STeaMi V1 : câble micro-USB de données
- STeaMi V2 : câble USB-C de données

Pour vérifier qu'un câble transporte bien les données, le plus simple est de tester avec un autre appareil reconnu (téléphone qui apparaît en mode transfert de fichiers, par exemple).

---

## Identifier le bon port série

Plusieurs ports `COM` (Windows) ou `/dev/cu.usbmodem*` (macOS) peuvent apparaître quand plusieurs périphériques USB sont branchés. Voici comment trouver celui de la STeaMi sur chaque système.

### Windows

Ouvrir le **Gestionnaire de périphériques** (Windows + R → `devmgmt.msc`), dérouler **Ports (COM et LPT)**. Brancher puis débrancher la carte fait apparaître / disparaître l'entrée correspondante. Le numéro `COMx` affiché à côté est celui à choisir dans votre IDE.

### Linux

Sur la plupart des distributions, la STeaMi apparaît comme `/dev/ttyACM0` (ou `ACM1`, etc. si plusieurs cartes série sont déjà branchées). Si l'accès au port est refusé avec une erreur **`Permission denied`**, c'est que l'utilisateur·rice n'est pas dans le groupe `dialout`. Une fois pour toutes :

```bash
sudo usermod -aG dialout $USER
```

Puis se déconnecter et se reconnecter à la session (ou redémarrer) pour que le changement prenne effet.

### macOS

Le port apparaît sous la forme `/dev/cu.usbmodemXXXX` (le suffixe est généré dynamiquement à chaque branchement). Pas de réglage de permission requis.

---

## MicroPython pas installé

**Symptôme** : la carte apparaît bien (disque `STEAMI` visible, port série détecté), mais la console de l'IDE reste vide ou affiche un message d'erreur au lieu du prompt `>>>` de MicroPython.

**Cause** : la carte a peut-être un autre logiciel installé en interne (MakeCode, CODAL, ou rien) au lieu de MicroPython.

**Solution** : (ré)installer MicroPython STeaMi en suivant la procédure de la fiche [Thonny : Prise en main de MicroPython](/ressources/inovmicro-exao/t03-decouverte-thonny), section *« Installer MicroPython sur la STeaMi »*. En résumé :

1. Télécharger le fichier `steami-micropython-firmware-vX.Y.Z.hex` (le logiciel interne MicroPython de la STeaMi) depuis les [versions publiées sur GitHub](https://github.com/steamicc/micropython-steami-lib/releases).
2. Glisser ce fichier sur le disque `STEAMI` qui apparaît à l'ordinateur.
3. Attendre que la LED de statut arrête de clignoter et que la carte redémarre (5 à 15 secondes).

:::warning Attention au bon fichier

Le dépôt GitHub `micropython-steami-lib` propose aussi un fichier `steami-daplink-firmware-...hex` qui n'a rien à voir avec MicroPython (c'est le logiciel de l'interface de programmation, pas celui qui exécute vos programmes Python). Bien choisir celui dont le nom commence par `steami-micropython-firmware-`.

:::

---

## Plusieurs cartes connectées

**Symptôme** : l'IDE affiche `Couldn't find the device` ou refuse de se connecter, alors que la carte est branchée.

**Cause** : plusieurs cartes STeaMi (ou plusieurs périphériques compatibles MicroPython) sont branchées en même temps, et l'IDE ne sait pas laquelle choisir.

**Solution** : sélectionner explicitement le port dans la configuration de l'IDE.

- **Thonny** : `Outils → Options → onglet Interpréteur → Port`, puis choisir le bon port dans la liste.
- **Mu** : la sélection se fait automatiquement, mais on peut forcer via `Préférences → Mode → MicroPython (generic)`.
- **VS Code** + extension MicroPython : `Ctrl+Shift+P` → `MicroPython: Select Device`.
- **`mpremote`** : ajouter `connect <port>` à la commande, par exemple `mpremote connect /dev/ttyACM1 repl`.

Pour identifier le port à choisir, voir [Identifier le bon port série](#identifier-le-bon-port-série).

---

## Un programme est déjà en cours

**Symptôme** : l'IDE refuse de lancer un nouveau programme, ou affiche `Device is busy`, ou la console est figée et ne répond plus aux commandes.

**Cause** : un programme tourne déjà sur la carte (souvent un `main.py` enregistré précédemment) et occupe la connexion série.

**Solution** : interrompre le programme avant de relancer.

- Dans la console de l'IDE, taper **`Ctrl+C`**. Ça envoie un signal d'interruption à MicroPython qui arrête le programme en cours et redonne le prompt `>>>`.
- Sinon, cliquer sur le bouton **Stop** (■) de l'IDE.
- Si rien ne répond, débrancher puis rebrancher la carte. Au redémarrage, `main.py` se relance automatiquement, donc si le problème est causé par `main.py`, voir [Un main.py redémarre en boucle](#un-mainpy-redémarre-en-boucle).

Autre piste : si plusieurs IDE sont ouverts en même temps (par exemple Thonny et `mpremote` dans un terminal), un seul peut utiliser le port à la fois. Fermer les autres avant de relancer.

---

## Un `main.py` redémarre en boucle

**Symptôme** : la carte semble redémarrer sans arrêt, ou un ancien programme se relance dès qu'on connecte la carte, empêchant de travailler.

**Cause** : un programme `main.py` est enregistré sur la carte. MicroPython exécute automatiquement ce fichier à chaque démarrage. Si le programme boucle, plante, ou monopolise la connexion série, il faut le désactiver pour reprendre la main.

**Solution** :

1. Brancher la carte et **immédiatement appuyer plusieurs fois sur `Ctrl+C`** dans la console de l'IDE pour interrompre l'exécution de `main.py`. La fenêtre de tir est courte (quelques centaines de millisecondes), il faut parfois plusieurs tentatives.
2. Une fois le prompt `>>>` accessible, ouvrir le panneau Files de l'IDE (`MicroPython device` côté droit dans Thonny).
3. **Renommer** `main.py` en `main.py.bak` (ou supprimer) pour empêcher son exécution au prochain démarrage.
4. Reprendre le développement normalement.

Le programme reste accessible et exécutable manuellement (bouton Run de l'IDE), mais ne se relance plus automatiquement.

---

## Ressources

- [Thonny : Prise en main de MicroPython sur la STeaMi](/ressources/inovmicro-exao/t03-decouverte-thonny) : installation et configuration de l'IDE de référence
- [Wiki STeaMi : matériel](https://wiki.steami.cc/docs/hardware/) : pinout et caractéristiques de la carte
- [Documentation MicroPython](https://docs.micropython.org/) : référence du langage et des modules

---

_Cette page fait partie du projet [I-Novmicro #2 : Action EXAO](/projets/inovmicro-exao). Contenu sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)._

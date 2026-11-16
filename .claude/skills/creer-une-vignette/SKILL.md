---
name: creer-une-vignette
description: Use when a wiki fiche needs its header thumbnail (site/static/img/ressources/<projet>/<id>/icone.png), or when an icon listed in KNOWN_MISSING must be produced. Covers the general Flaticon case and the Youth AI Lab Canva template (stock illustration in a frame whose color is the phase the activity belongs to - pink for the experimentation phase, page 45 - and transparent PNG export).
license: CC-BY-SA-4.0
metadata:
  langue: fr
  origine: CONVENTIONS.md, section « Icône PNG », et la production des vignettes de l'issue #269
---

# Créer une vignette

## Loi d'airain

```text
LA VIGNETTE MONTRE LE SUJET DE LA FICHE, DANS LE GABARIT DE SON PROJET.
RIEN NE S ENREGISTRE DANS CANVA SANS APERCU VALIDE.
```

La vignette s'affiche en 225 px à droite de l'en-tête et sur la carte du catalogue. Elle représente
le **sujet** (l'objet, le concept, le résultat), pas le matériel. Ni texte dessiné, ni image générée
par IA (`CONVENTIONS.md`, « Icône PNG »).

## Annoncer

« J'utilise la compétence creer-une-vignette pour <la ou les fiches>. »

## Quel gabarit

| Projet       | Gabarit                                                                                   |
| ------------ | ----------------------------------------------------------------------------------------- |
| Cas général  | Icône flat de [Flaticon](https://www.flaticon.com/), PNG 512×512, palette douce           |
| Youth AI Lab | Illustration flat (stock Freepik) dans le cadre de la phase de l'activité, document Canva |

Pour un autre projet, regarder les vignettes voisines dans `site/static/img/ressources/<projet>/`
avant de choisir. En cas de doute sur le gabarit ou la phase, demander : c'est une décision de
l'équipe, pas de l'assistant.

## Fonction de garde

```text
1. LIRE        la fiche : son sujet, ce qu elle fait faire. La vignette en part.
2. REGARDER    les vignettes existantes du projet, et pour Youth AI Lab la page
               modele de la phase de l activite dans le document Canva
               (page 45 pour la phase d experimentation). La phase ne se
               devine pas : la lire dans la fiche ou la demander.
3. CHOISIR     un visuel par fiche, avec deux alternatives, en regardant les
               apercus et pas seulement les titres. Varier d une fiche a l autre.
4. COMPOSER    puis PREVISUALISER avec le cadre : le sujet doit rester visible.
5. MONTRER     l apercu et attendre l accord avant d enregistrer dans Canva.
6. EXPORTER    en PNG 512x512 a fond transparent, puis verifier les coins.
7. BRANCHER    le fichier dans le depot et retirer le chemin de KNOWN_MISSING.
```

## Cas général : Flaticon

Télécharger l'icône en PNG 512×512 depuis Flaticon et la placer dans
`site/static/img/ressources/<projet>/<id>/icone.png`. Vérifier les conditions d'attribution
(`CONVENTIONS.md` les rappelle).

## Youth AI Lab : le gabarit Canva

### Le document

Le document Canva du projet (« YouthAiLab_Test_Logo », 1500×1500 px par page) range une vignette par
page. Les nouvelles pages s'ajoutent **à la fin**. **La couleur du cadre dit la phase dans laquelle
l'activité s'inscrit**, pas le projet : deux fiches Youth AI Lab de phases différentes n'ont pas le
même cadre. Rose `#fa89d2` pour la **phase d'expérimentation**, dont la **page 45** est le modèle.
Pour une autre phase, partir de la page modèle de cette phase, que l'équipe désigne ; ne jamais
reprendre le rose par défaut.

Une page contient deux éléments :

- un rectangle image en `top 36, left 32`, de 1436×1436 ;
- par-dessus, la forme du cadre, qui couvre toute la page (`top 0, left 0`, 1500×1500). Son chemin
  se copie depuis la page modèle avec `read-design` ; celui de la page 45 est dans
  `cadre-phase-experimentation.svg`, à côté de ce fichier (viewBox 127,57 × 127,57).

### Choisir le visuel

Dans Magnific, `stock_search` avec `content_type: "vector"` et `ai_generated: "excluded"`, deux à
quatre requêtes en anglais. Télécharger les `previewUrl` avec `curl` et **les regarder** : un titre
de stock ne dit pas si l'image est lisible à 225 px. Ne pas appeler `stock_download` avant le choix,
chaque téléchargement coûte des crédits. Le rendu `render` d'un vecteur est un grand JPEG ; vérifier
qu'il ne porte pas de mention « designed by freepik » (la masquer en blanc sinon).

### Composer pour le cadre

Le cadre de la page 45 cache tout le quart supérieur gauche, en escalier. Une illustration posée
telle quelle perd souvent une tête ou un robot. Le script `recomposer.sh` rogne l'illustration, la
cale en bas à droite et produit l'image du rectangle, avec un aperçu cadre compris :

```bash
.claude/skills/creer-une-vignette/recomposer.sh illustration.jpg rectangle.jpg apercu.png
```

Monter les aperçus sur une planche pour les juger ensemble :

```bash
magick montage -label '%t' apercu-*.png -tile 4x -geometry 300x300+6+6 planche.png
```

### Importer dans Canva

`upload-asset-from-url` échoue sur les gros fichiers et refuse les appels en parallèle (« Too many
requests »). Ce qui marche : **un fichier à la fois**, `create-upload-url`, puis un `POST` des octets.

```bash
curl -sS -X POST -H 'Content-Type: application/octet-stream' \
  --data-binary @rectangle.jpg '<upload_url>'     # renvoie {"mediaId": "..."}
```

L'URL est à usage unique. Si la réponse est un 403, vérifier qu'elle a été recopiée à l'identique
avant d'en demander une autre.

### Construire les pages

Dans une seule transaction (`read-design` avec `open_transaction`) :

1. `add_page` (1500×1500, fond blanc, titre = id de la fiche) ; plusieurs pages en un appel ;
2. relire les nouvelles pages pour obtenir leurs identifiants ;
3. par page : `insert_fill` de l'image (`top 36, left 32`, 1436×1436, texte alternatif en
   français), puis `insert_shape` du cadre (chemin et viewBox de la page modèle, couleur de la
   phase de l'activité). Pour changer de cadre plus tard : `replace_shape` ; pour changer d'image : `update_fill` ;
4. montrer la planche des miniatures et **attendre l'accord** ; alors seulement `commit`.

### Exporter

`export-design` en PNG, `width` et `height` 512, `lossless: true`, `transparent_background: true`,
avec la liste des pages. Les URL d'export expirent en quelques heures : télécharger aussitôt.

Vérifier la transparence des coins, et le rendu sur fond sombre :

```bash
magick identify -format '%f %wx%h coin=%[pixel:p{1,1}]\n' *.png   # coin attendu : srgba(0,0,0,0)
magick icone.png -background '#333' -flatten controle.png
```

## Brancher dans le dépôt

- copier chaque PNG en `site/static/img/ressources/<projet>/<id>/icone.png` et supprimer le
  `.gitkeep` du dossier ;
- l'en-tête de la fiche et le champ `thumbnail` du catalogue pointent déjà vers ce chemin ;
- retirer le chemin de `KNOWN_MISSING` dans `site/scripts/check-local-assets.mjs`, puis :

```bash
npm run lint:assets
```

- committer en `docs(<projet>): ...` (`content/` est un préfixe de branche, pas un type de commit).

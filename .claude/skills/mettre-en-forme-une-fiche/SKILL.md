---
name: mettre-en-forme-une-fiche
description: Use when writing, porting or reviewing a wiki fiche (site/docs/**/*.md) or its catalogue entry, to apply CONVENTIONS.md - header and badges, callouts, structure, text rules, project vocabulary, images, catalogue tags - and to check the result before a pull request.
license: CC-BY-SA-4.0
metadata:
  langue: fr
  origine: CONVENTIONS.md, et la passe de vérification de l'issue #273
---

# Mettre en forme une fiche

## Loi d'airain

```text
CONVENTIONS.MD DECIDE. LA FORME CHANGE, LE FOND NE BOUGE PAS.
```

`CONVENTIONS.md` fait autorité. Cette compétence dit dans quel ordre l'appliquer et quoi vérifier ;
elle ne recopie pas les règles et n'en invente pas. Une règle qui manque se propose dans
`CONVENTIONS.md`, dans une pull request, avant d'être appliquée.

Mettre en forme ne change ni un fait, ni une consigne, ni une commande. On déplace, on balise, on
renomme un titre ; on ne réécrit pas le contenu pédagogique.

## Annoncer

« J'utilise la compétence mettre-en-forme-une-fiche sur <la fiche>. »

## Fonction de garde

```text
1. LIRE        CONVENTIONS.md en entier, puis une fiche voisine du meme projet.
               La fiche voisine montre la variante du projet (gabarit, vocabulaire,
               exceptions) ; CONVENTIONS.md tranche en cas d ecart.
2. LISTER      tous les ecarts avant de toucher au fichier.
3. CORRIGER    ecart par ecart, par remplacements exacts. Jamais de reecriture globale.
4. NE PAS TOUCHER le code, les sorties de terminal, les libelles d interface cites,
               les prompts ecrits pour un chatbot, les citations.
5. COMPARER    les fiches d une meme serie : meme encart = meme type et meme titre.
6. VERIFIER    avec les commandes de la derniere section, et relire le diff.
```

## Les écarts à chercher, dans l'ordre

### En-tête

Section « Header » de `CONVENTIONS.md`. Bloc flex, `# Titre` sans icône, badges, tableau, matériel,
icône 225 px à droite, `---` après l'en-tête.

Badges : 7 à 10, tirés du contenu. `primary` pour les disciplines, `info` pour les notions et le
matériel propres à l'activité, `warning` pour les logiciels **réellement utilisés** dans la fiche. Un
logiciel cité seulement comme variante (« si vous utilisez... ») va dans les mots-clés du catalogue,
pas dans les badges. Avant de créer un intitulé, chercher s'il existe déjà :

```bash
grep -rhoE 'badge--(primary|info|warning|secondary)">[^<]+' site/docs | sort | uniq -c | sort -rn
```

### Callouts

| Contenu                                    | Callout                                                                |
| ------------------------------------------ | ---------------------------------------------------------------------- |
| Ressources imprimables, et seulement elles | `:::tip[**Ressources imprimables...**]`                                |
| Conseil, remarque, note technique          | `:::info` ou `:::info[Titre]`                                          |
| Avertissement                              | `:::info[Attention]` ou un titre explicite                             |
| Phase d'activité                           | `:::caution`                                                           |
| Notes pour l'adulte                        | `:::info[Notes pour l'enseignant·e]` (Youth AI Lab : `animateur·rice`) |
| Question de recherche, question du jour    | `:::question[...]`                                                     |
| Hypothèse à vérifier                       | `:::hypothese`                                                         |

`:::note`, `:::warning` et `:::danger` ne s'emploient pas. Une étape de séance est un titre
(`### Étape N : ...`), pas un callout. Chaque `:::` ouvrant a son `:::` fermant, entouré de lignes
vides.

### Structure et titres

Sections « Structure des fiches » et « Mise en forme ». Pas de gras dans un titre ; `--` devient
`:` suivi d'une majuscule ; numérotation homogène (Partie, Phase, Étape). Glossaire en liste
`- **Terme** : définition`, jamais en tableau. Section « Aller plus loin » selon le projet
(Youth AI Lab n'en a pas). Footer en italique après un seul `---`.

### Texte

Sections « Texte », « Registre », « Vocabulaire des personnes selon le projet », « Objectifs
d'apprentissage », « Caractères à éviter », « URLs affichées telles quelles ».

- vouvoiement ou infinitif ; le tutoiement reste permis dans un prompt ou une citation ;
- le vocabulaire des personnes suit le projet (Youth AI Lab : animateur·rice, participant·es) ;
- objectifs : phrase d'introduction sans gras terminée par « ... », puis des puces qui commencent
  par un verbe d'action en gras ;
- listes « libellé : description » avec le libellé en gras et une espace avant le deux-points ;
- pas de `—`, `–` ni `…` dans la prose ; URL nue plutôt que `[url](url)`, jamais `<https://...>`.

La prose elle-même se relit avec la compétence `humaniser`, qui ne touche pas aux faits.

### Images

Section « Images ». Une image légendée suit le gabarit `<figure>` centré. La vignette `icone.png`
relève de la compétence `creer-une-vignette`.

### Catalogue

Section « Catalogue (`resources.ts`) ». L'entrée de la fiche dit la même chose que ses badges :
`disciplines`, `tools`, `software`, `formats`, `categories`, mots-clés utiles à la recherche. Une
valeur nouvelle s'ajoute au type **et** à son dictionnaire de libellés (`softwareLabels`,
`toolLabels`...), ce qui l'ajoute aussi aux filtres du catalogue.

## Pièges rencontrés

- **Encodage** : un remplacement en Perl sans `use utf8` encode deux fois les caractères non ASCII
  (`·` devient `Â·`). Faire les remplacements avec l'outil d'édition, ou en Python avec
  `encoding='utf-8'`, et chercher `Â` après coup.
- **Plusieurs agents en parallèle** : un agent par fiche, et les fichiers partagés
  (`resources.ts`, `.cspell/wikilab.txt`, `CONVENTIONS.md`) modifiés par une seule main, à la fin.
- **Harmoniser une série** demande de voir toutes les fiches ensemble : un titre unifié peut
  contredire le corps d'un encart, ou perdre une consigne utile. Relire chaque titre changé.
- **Commit** : `content/` est un préfixe de branche valide, pas un type de commit. Committer les
  fiches en `docs(<projet>): ...`.

## Vérifier

```bash
# callouts interdits et caractères à éviter
grep -nE '^:::(note|warning|danger)' site/docs/<projet>/*.md
grep -n '^:::caution' site/docs/<projet>/*.md      # chaque occurrence doit être une phase
grep -n '—\|–\|…' site/docs/<projet>/<fiche>.md     # hors code et sorties réelles

# équilibre des callouts : un nombre pair de lignes ':::'
grep -c '^:::' site/docs/<projet>/<fiche>.md

# vocabulaire Youth AI Lab
grep -nE "élève|enseignant·e|en classe" site/docs/youth-ai-lab/*.md

# outillage du dépôt (voir TESTING.md)
npx cspell --no-progress site/docs/<projet>/*.md
npm run lint:assets && npm run lint:crosslinks
npm run site:typecheck && npm run site:build        # le build échoue sur un lien ou une ancre cassés
```

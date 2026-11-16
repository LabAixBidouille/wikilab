#!/bin/sh
# Recompose une illustration pour le cadre des vignettes Youth AI Lab.
#
# usage : recomposer.sh <illustration> <sortie.jpg> [apercu.png] [couleur]
#
# Toutes les phases partagent la même découpe en escalier (page 45 du document Canva) ;
# seule la couleur change (voir CONVENTIONS.md). Le cadre cache le quart supérieur
# gauche : l'illustration est calée en bas à droite.
#
# 1. rogne les marges unies de l'illustration ;
# 2. la fait tenir dans 1300x1000 px, calée en bas à droite d'une page 1500x1500
#    remplie de la couleur de son coin ;
# 3. découpe la zone du rectangle image (1436x1436 en 32,36) à importer dans Canva ;
# 4. optionnel : écrit un aperçu 300 px avec le cadre superposé, dans la couleur de la
#    phase (rose #FA89D2 par défaut).
#
# Dépend d'ImageMagick 7 (`magick`).
set -eu
src=$1; out=$2; preview=${3:-}; couleur=${4:-#FA89D2}
here=$(cd "$(dirname "$0")" && pwd)
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT

bg=$(magick "$src" -format '%[pixel:p{5,5}]' info:)
magick "$src" -fuzz 4% -trim +repage -resize 1300x1000 "$tmp/sujet.png"
w=$(magick identify -format %w "$tmp/sujet.png")
h=$(magick identify -format %h "$tmp/sujet.png")
magick -size 1500x1500 "xc:$bg" "$tmp/sujet.png" -geometry +$((1410 - w))+$((1410 - h)) \
  -composite "$tmp/page.png"
magick "$tmp/page.png" -crop 1436x1436+32+36 +repage -quality 92 "$out"

if [ -n "$preview" ]; then
  sed "s/fill=\"#[0-9a-fA-F]*\"/fill=\"$couleur\"/" "$here/cadre-escalier.svg" > "$tmp/cadre.svg"
  magick -background none "$tmp/cadre.svg" "$tmp/cadre.png"
  magick "$tmp/page.png" "$tmp/cadre.png" -composite -resize 300x300 "$preview"
fi

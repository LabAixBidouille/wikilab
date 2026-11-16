#!/bin/sh
# Recompose une illustration pour le cadre de la phase d'expérimentation (page 45 du
# document Canva Youth AI Lab). Le calage suppose la découpe de ce cadre : pour une autre
# phase, vérifier l'aperçu, et adapter la boîte si la découpe diffère.
#
# usage : recomposer.sh <illustration> <sortie.jpg> [apercu.png]
#
# 1. rogne les marges unies de l'illustration ;
# 2. la fait tenir dans 1300x1000 px, calée en bas à droite d'une page 1500x1500
#    remplie de la couleur de son coin (le haut gauche est caché par le cadre) ;
# 3. découpe la zone du rectangle image de la page Canva (1436x1436 en 32,36) ;
# 4. optionnel : écrit un aperçu 300 px avec le cadre superposé.
#
# Dépend d'ImageMagick 7 (`magick`).
set -eu
src=$1; out=$2; preview=${3:-}
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
  magick -background none "$here/cadre-phase-experimentation.svg" "$tmp/cadre.png"
  magick "$tmp/page.png" "$tmp/cadre.png" -composite -resize 300x300 "$preview"
fi

#! /bin/sh
for var in "$@/src/languages"
do
    js-yaml $var > "./src/assets/i18n/${var%%.*}.json"
done

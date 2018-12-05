#! /bin/bash
for var in ./src/languages/*.yml
do
  echo ${var}
  fbname=$(basename "$var" .yml)
  js-yaml ${var} > "./src/assets/i18n/$fbname.json"
done

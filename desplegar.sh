#!/bin/bash

# ejecutar run build
cd ~/Desarrollo/nueva-logic-web
npm run build
echo "========== Build ==========="

# limpiar la carpeta build
cd ~/Desarrollo/logic-web-production
find . -mindepth 1 -name '.git' -prune -o ! -name '.*' -exec rm -rf {} +

echo "========== Clean ==========="

# copiar archivos
cp ~/Desarrollo/nueva-logic-web/SEO/.htaccess ~/Desarrollo/nueva-logic-web/build
cp -r ~/Desarrollo/nueva-logic-web/build/* ~/Desarrollo/logic-web-production
cp -r ~/Desarrollo/nueva-logic-web/SEO/* ~/Desarrollo/logic-web-production
echo "========== Copy ==========="

# pushear archivos
cd ~/Desarrollo/logic-web-production
git add .
git commit -m "Build"
git push origin main
echo "========== Push ==========="

#!/bin/bash

# ejecutar run build
cd /home/javier/Desarrollo/nueva-logic-web
npm run build
echo "========== Build ==========="

# limpiar la carpeta build
cd /home/javier/Desarrollo/logic_web_production
find . -mindepth 1 -name '.git' -prune -o ! -name '.*' -exec rm -rf {} +

echo "========== Clean ==========="

# copiar archivos
cp -r /home/javier/Desarrollo/nueva-logic-web/build/* /home/javier/Desarrollo/logic_web_production
cp -r /home/javier/Desarrollo/nueva-logic-web/SEO/* /home/javier/Desarrollo/logic_web_production

HTACCESS_PATH="/home/javier/Desarrollo/logic_web_production/.htaccess"

HTACCESS_CONTENT='RewriteEngine On
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
RewriteRule ^ - [L]
RewriteRule ^ /index.html [L]

Redirect 301 /app/es/indicators.html https://logicindicators.com
Redirect 301 /app/en/indicators.html https://logicindicators.com/buy
Redirect 301 /app/en/indicators.html https://logicindicators.com
Redirect 301 /app/es/buy.html https://logicindicators.com/buy
Redirect 301 /app/en/buy.html https://logicindicators.com/buy
Redirect 301 /app/en/index.html https://logicindicators.com
Redirect 301 /app/index.html https://logicindicators.com
Redirect 301 /app/es/order_an.html https://logicindicators.com
Redirect 301 /app/en/ https://logicindicators.com
Redirect 301 /app/es/order_pack.html https://logicindicators.com
Redirect 301 /app/en/index.html https://logicindicators.com
Redirect 301 /app/en/order_of.html https://logicindicators.com
Redirect 301 /app/en/order_vp.html https://logicindicators.com'

echo "$HTACCESS_CONTENT" > "$HTACCESS_PATH"

# Confirmar que el archivo ha sido creado
echo "Archivo .htaccess creado en $HTACCESS_PATH"


echo "========== Copy ==========="

# pushear archivos
cd ~/home/javier/Desarrollo/logic_web_production
git add .
git commit -m "Build"
git push origin main
echo "========== Push ==========="

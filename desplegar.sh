#!/bin/bash

# 1. DETENER EL SCRIPT SI HAY ERRORES
set -e

# ejecutar run build
cd /home/javier/Desarrollo/nueva-logic-web
npm run build
echo "========== Build Terminado ==========="

# limpiar la carpeta de produccion
cd /home/javier/Desarrollo/logic_web_production
# 2. LIMPIEZA MÁS SEGURA
rm -rf *
echo "========== Clean Terminado ==========="

# copiar archivos
# 3. USO DE PUNTO (.) EN LUGAR DE ASTERISCO (*)
cp -r /home/javier/Desarrollo/nueva-logic-web/build/. /home/javier/Desarrollo/logic_web_production/
cp -r /home/javier/Desarrollo/nueva-logic-web/SEO/. /home/javier/Desarrollo/logic_web_production/
echo "========== Copy Terminado ==========="

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
echo "Archivo .htaccess creado en $HTACCESS_PATH"

# pushear archivos
# 4. CORRECCIÓN DE LA RUTA CD
cd /home/javier/Desarrollo/logic_web_production
git add .
git commit -m "Build"
git push origin main
echo "========== Push Terminado ==========="
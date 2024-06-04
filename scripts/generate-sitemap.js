// scripts/generate-sitemap.js
const fs = require('fs');
const path = require('path');

const hostname = 'https://www.logicindicators.com';

// Definir tus rutas aquí
const routes = [
  { path: '/', changefreq: 'daily', priority: 1.0 },
  { path: '/indicator', changefreq: 'monthly', priority: 0.9 },
  { path: '/education', changefreq: 'weekly', priority: 0.9 },
  { path: '/article', changefreq: 'weekly', priority: 0.8 },
  { path: '/buy', changefreq: 'monthly', priority: 0.7 },
  { path: '/contact', changefreq: 'monthly', priority: 0.7 },
  // Añadir más rutas según sea necesario
];

const sitemap = routes.map(route => `
  <url>
    <loc>${hostname}${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`).join('');

const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemap}
</urlset>`;

fs.writeFileSync(path.resolve(__dirname, '../SEO/sitemap.xml'), sitemapXML);

console.log('Sitemap generated successfully!');

// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  // hybrid: páginas estáticas por defecto, pero permite rutas server-side
  // (como /api/cotizaciones.ts con prerender = false → Netlify Function)
  output: 'static',
  adapter: netlify(),
});
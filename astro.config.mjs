// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://www.pickleball-experts.fr',
  base: '/pickleball-experts',

  integrations: [
    mdx(),
    sitemap({
      // Exclure les drafts (les pages de drafts ne doivent pas être générées,
      // mais ce filtre protège en cas de page résiduelle)
      filter: (page) => !page.includes('/drafts/'),

      serialize(item) {
        // Hubs principaux → priorité 0.9
        const hubPattern = /\/(paddles|guides|comparatifs)\/?$/;
        if (hubPattern.test(item.url)) {
          item.priority = 0.9;
        } else {
          // Articles → priorité 0.7
          item.priority = 0.7;
        }
        return item;
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import rehypeRaw from 'rehype-raw';
import rehypeFigure from 'rehype-figure';

export default defineConfig({
  site: 'https://justlanxuan.github.io',

  integrations: [react()],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    rehypePlugins: [rehypeRaw, [rehypeFigure, { className: 'my-figure' }]],
  },
});

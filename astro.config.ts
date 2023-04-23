import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import pwa from '@vite-pwa/astro';

import { DESCRIPTION, TITLE } from './consts';

export default defineConfig({
  site: 'https://yohgen.netlify.app',
  integrations: [
    mdx(),
    tailwind(),
    sitemap(),
    pwa({
      injectRegister: 'script',
      registerType: 'autoUpdate',
      manifestFilename: 'manifest.json',
      manifest: {
        name: TITLE,
        short_name: TITLE,
        description: DESCRIPTION,
        start_url: '.',
        theme_color: '#fff',
        background_color: '#000',
        dir: 'ltr',
        display: 'minimal-ui',
        orientation: 'any',
        icons: [
          {
            src: '/pwa-192x192.png',
            width: 192,
            height: 192,
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            width: 512,
            height: 512,
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            width: 512,
            height: 512,
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          }
        ]
      },
      includeAssets: [
        'favicon-16x16.png',
        'favicon-32x32.png',
        'favicon.ico',
        'apple-touch-icon.png',
        'mask-icon.svg',
      ],
      workbox: {
        globDirectory: 'dist',
        globPatterns: [
          '**/*.{txt,js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}',
        ],
        navigateFallback: '/404',
      },
    }),
  ],
});

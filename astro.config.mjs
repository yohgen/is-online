import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

import { SITE_URL } from './config';
import { version } from './package.json';
import { remarkShiki, rehypeFixes } from './plugins';

process.env.ROOT_DIR = process.cwd();
process.env.APP_VERSION = version;

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  output: 'static',
  compressHTML: true,
  vite: {
    esbuild: {
      charset: 'utf8',
      legalComments: 'none',
    },
  },
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [await remarkShiki()],
    rehypePlugins: [rehypeFixes()],
  },
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
  ],
});

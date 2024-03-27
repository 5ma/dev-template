import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import { astroImageTools } from 'astro-imagetools';
import { visualizer } from 'rollup-plugin-visualizer';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), tailwind({ nesting: true }), astroImageTools],
  vite: {
    define: {
      'import.meta.vitest': 'undefined',
    },
    plugins: [visualizer()],
  },
});

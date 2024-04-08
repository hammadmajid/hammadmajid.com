import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import svelte from '@astrojs/svelte';

// https://astro.build/config
import partytown from '@astrojs/partytown';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://hammadmajid.me',
  integrations: [tailwind(), sitemap(), svelte(), partytown()],
  prefetch: true,
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    }
  }),
});

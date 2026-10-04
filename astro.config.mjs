// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

// Static lastmod map for blog posts ONLY (from frontmatter publishDate)
// Static pages (home, about, services, contact, etc.) get NO lastmod
// to avoid misleading search engines with deploy dates
const lastmodMap = new Map([
  // TR blog posts (canonical)
  ['https://bondlio.com/bilgi-defteri/neden-filipinli-bakici-tercih-ediliyor/', '2026-01-15'],
  ['https://bondlio.com/bilgi-defteri/turkiyede-filipinli-bakici-calistirma-rehberi-sureci/', '2026-01-20'],
  // EN blog posts (canonical)
  ['https://bondlio.com/en/infobook/why-filipino-caregivers-are-preferred-so-popular/', '2026-01-15'],
  ['https://bondlio.com/en/infobook/hiring-filipino-caregivers-nanny-in-turkey/', '2026-01-20'],
  // TL blog posts (canonical)
  ['https://bondlio.com/tl/aklat-ng-kaalaman/bakit-mahalaga-ang-mga-yaya-pilipino/', '2026-01-15'],
  ['https://bondlio.com/tl/aklat-ng-kaalaman/pagkuha-ng-tagapag-alagang-pilipino-sa-turkey/', '2026-01-20'],
  // i18n fallback variants (same content, different locale paths)
  ['https://bondlio.com/bilgi-defteri/bakit-mahalaga-ang-mga-yaya-pilipino/', '2026-01-15'],
  ['https://bondlio.com/bilgi-defteri/hiring-filipino-caregivers-nanny-in-turkey/', '2026-01-20'],
  ['https://bondlio.com/bilgi-defteri/pagkuha-ng-tagapag-alagang-pilipino-sa-turkey/', '2026-01-20'],
  ['https://bondlio.com/bilgi-defteri/why-filipino-caregivers-are-preferred-so-popular/', '2026-01-15'],
  ['https://bondlio.com/en/infobook/neden-filipinli-bakici-tercih-ediliyor/', '2026-01-15'],
  ['https://bondlio.com/en/infobook/turkiyede-filipinli-bakici-calistirma-rehberi-sureci/', '2026-01-20'],
  ['https://bondlio.com/tl/aklat-ng-kaalaman/neden-filipinli-bakici-tercih-ediliyor/', '2026-01-15'],
  ['https://bondlio.com/tl/aklat-ng-kaalaman/turkiyede-filipinli-bakici-calistirma-rehberi-sureci/', '2026-01-20'],
]);

// https://astro.build/config
export default defineConfig({
  site: 'https://bondlio.com',
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en', 'tl'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx(), sitemap({
    chunks: {
      all: (item) => item,
    },
    serialize(item) {
      // Only add lastmod for blog posts with known dates
      // Static pages (home, about, services, contact, legal) get NO lastmod
      if (lastmodMap.has(item.url)) {
        item.lastmod = lastmodMap.get(item.url);
      }
      // Return undefined for lastmod on static pages (omits the tag)
      return item;
    }
  })],
});
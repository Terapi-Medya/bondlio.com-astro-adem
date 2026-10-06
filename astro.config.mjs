// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { glob } from 'glob';
import { readFileSync } from 'fs';
import mdx from '@astrojs/mdx';

// Simple frontmatter parser for .astro files (extracts key: value from YAML frontmatter block)
function parseAstroFrontmatter(content) {
  // Remove BOM if present
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  // Find frontmatter between first --- and second ---
  // Handle both \n and \r\n line endings
  const match = content.match(/^---[\r\n]+([\s\S]*?)[\r\n]+---/m);
  if (!match) return {};
  
  const frontmatter = match[1];
  const data = {};
  
  // Find all key: value patterns in the frontmatter (quoted or unquoted)
  const lines = frontmatter.split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    
    // Match key: "value", key: 'value', or key: unquoted_value
    const match = trimmed.match(/^(\w+):\s*(?:"([^"]*)"|'([^']*)'|([^\s#]+))\s*$/);
    if (match) {
      const key = match[1];
      // Group 2 = double-quoted, Group 3 = single-quoted, Group 4 = unquoted
      const value = match[2] ?? match[3] ?? match[4];
      if (key === 'publishDate' || key === 'modifiedDate') {
        data[key] = value;
      }
    }
  }
  
  return data;
}

// Build lastmod map from frontmatter at build time
async function buildLastmodMap() {
  const map = new Map();

  // 1. Read all .astro pages (excluding dynamic [slug] pages)
  const astroFiles = await glob('src/pages/**/*.astro', { ignore: ['**/[*]/**'] });
  
  for (const file of astroFiles) {
    const content = readFileSync(file, 'utf-8');
    const data = parseAstroFrontmatter(content);
    
    if (data.modifiedDate) {
      // Convert file path to URL (handle both / and \ separators)
      let urlPath = file
        .replace(/\\/g, '/')  // Normalize Windows backslashes
        .replace('src/pages', '')
        .replace('.astro', '')
        .replace(/index$/, '');
      
      // Handle root index
      if (urlPath === '' || urlPath === '/') {
        urlPath = '/';
      } else if (!urlPath.startsWith('/')) {
        urlPath = '/' + urlPath;
      }
      
      // Ensure trailing slash
      if (!urlPath.endsWith('/')) {
        urlPath += '/';
      }
      
      const fullUrl = `https://bondlio.com${urlPath}`;
      map.set(fullUrl, data.modifiedDate);
    }
  }

  // 2. Read blog posts from content collections
  const blogFiles = await glob('src/content/blog/*.mdx');
  
  for (const file of blogFiles) {
    const content = readFileSync(file, 'utf-8');
    const data = parseAstroFrontmatter(content);
    
    if (data.publishDate) {
      const lang = data.lang || 'tr';
      const basePath = lang === 'tr' ? '/bilgi-defteri' : 
                       lang === 'en' ? '/en/infobook' : '/tl/aklat-ng-kaalaman';
      // Get just the filename without extension as slug
      const slug = file.replace(/\\/g, '/').split('/').pop()?.replace('.mdx', '');
      const url = `https://bondlio.com${basePath}/${slug}/`;
      
      // Use modifiedDate if available, otherwise publishDate
      const date = data.modifiedDate || data.publishDate;
      map.set(url, date);
      
      // Also add i18n fallback variants
      const allLangs = ['tr', 'en', 'tl'];
      for (const fallbackLang of allLangs) {
        if (fallbackLang !== lang) {
          const fallbackBase = fallbackLang === 'tr' ? '/bilgi-defteri' : 
                               fallbackLang === 'en' ? '/en/infobook' : '/tl/aklat-ng-kaalaman';
          const fallbackUrl = `https://bondlio.com${fallbackBase}/${slug}/`;
          map.set(fallbackUrl, date);
        }
      }
    }
  }

  return map;
}

// Run async function and get the map
const lastmodMap = await buildLastmodMap();

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
      // Only add lastmod for pages with known dates
      if (lastmodMap.has(item.url)) {
        item.lastmod = lastmodMap.get(item.url);
      }
      return item;
    }
  })],
});
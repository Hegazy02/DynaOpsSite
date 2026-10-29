// Writes browser/sitemap.xml from the prerender manifest after `ng build`, listing every
// language version of each page with its hreflang alternates. Usage: node scripts/generate-sitemap.mjs [distDir]
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

// Keep in sync with src/app/core/seo/site-config.ts and src/app/core/i18n/language.ts.
const ORIGIN = process.env.SITE_ORIGIN ?? 'https://www.dynaops365.com';
const LANGS = ['en', 'ar'];
const DEFAULT_LANG = 'en';

const dist = process.argv[2] ?? 'dist/DynaOpsSite';
const manifest = JSON.parse(await readFile(join(dist, 'prerendered-routes.json'), 'utf8'));
const entries = Array.isArray(manifest.routes)
  ? manifest.routes.map((route) => [route, {}])
  : Object.entries(manifest.routes);
// Redirect sources are not pages.
const routes = entries.filter(([, meta]) => !meta.redirectTo).map(([route]) => route);

function split(route) {
  for (const lang of LANGS) {
    if (lang !== DEFAULT_LANG && (route === `/${lang}` || route.startsWith(`/${lang}/`))) {
      return { lang, path: route.slice(lang.length + 1) || '/' };
    }
  }
  return { lang: DEFAULT_LANG, path: route || '/' };
}

function localeUrl(path, lang) {
  if (lang === DEFAULT_LANG) return path;
  return path === '/' ? `/${lang}` : `/${lang}${path}`;
}

// One page per language-independent path, with the languages it was prerendered in.
const pages = new Map();
for (const route of routes) {
  const { lang, path } = split(route);
  if (!pages.has(path)) pages.set(path, new Set());
  pages.get(path).add(lang);
}

const urls = [];
for (const [path, langs] of pages) {
  const alternates = [...langs].map(
    (lang) =>
      `    <xhtml:link rel="alternate" hreflang="${lang}" href="${ORIGIN}${localeUrl(path, lang)}"/>`,
  );
  if (langs.has(DEFAULT_LANG)) {
    alternates.push(
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${ORIGIN}${localeUrl(path, DEFAULT_LANG)}"/>`,
    );
  }
  for (const lang of langs) {
    urls.push(
      `  <url>\n    <loc>${ORIGIN}${localeUrl(path, lang)}</loc>\n${alternates.join('\n')}\n  </url>`,
    );
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
await writeFile(join(dist, 'browser', 'sitemap.xml'), xml);
console.log(`sitemap.xml: ${urls.length} URLs from ${routes.length} prerendered routes`);

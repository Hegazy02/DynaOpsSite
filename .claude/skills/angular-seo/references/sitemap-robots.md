# robots.txt, Sitemaps and hreflang

Contents

1. robots.txt
2. Sitemap options: static file, build-time from the prerender manifest, dynamic from `server.ts`
3. Sitemap rules
4. hreflang and `html lang` for multilingual sites
5. Submitting and monitoring

Files in `public/` are copied to the root of `dist/<project>/browser` and served by `express.static`, so `public/robots.txt` is reachable at `/robots.txt`. If `server.ts` serves a path dynamically, do not also ship a static file with that name: `express.static` runs first and the static one wins.

## 1. robots.txt

```text
# public/robots.txt
User-agent: *
Disallow: /app/
Disallow: /login
Disallow: /api/

Sitemap: https://www.example.com/sitemap.xml
```

- `Disallow` stops crawling, not indexing. A disallowed URL can still appear in results, without a snippet, when other sites link to it. For "never show this" use `<meta name="robots" content="noindex">` and do not disallow the URL, otherwise Google cannot see the noindex.
- Never disallow `/*.js`, `/*.css`, images or fonts. Googlebot renders pages; blocked assets break rendering and the mobile-friendliness check.
- Staging must not be indexed. Either `Disallow: /` plus a global `noindex` on staging builds, or serve robots.txt dynamically and delete `public/robots.txt`:

```ts
// src/server.ts, before express.static
const ALLOW_INDEXING = process.env['ALLOW_INDEXING'] === 'true';
app.get('/robots.txt', (_req, res) => {
  res.type('text/plain').send(
    ALLOW_INDEXING
      ? 'User-agent: *\nDisallow: /app/\nDisallow: /login\nDisallow: /api/\n\nSitemap: https://www.example.com/sitemap.xml\n'
      : 'User-agent: *\nDisallow: /\n',
  );
});
```

## 2. Sitemap options

Pick the one that matches how URLs change:

| Site | Option |
| --- | --- |
| A handful of static pages | A: hand-written `public/sitemap.xml` |
| Everything is prerendered at build time | B: generate from `prerendered-routes.json` after `ng build` |
| Content appears between deploys (CMS, products, user content) | C: `GET /sitemap.xml` in `server.ts`, built from the data source |

**Option A: static file**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.example.com/</loc><lastmod>2026-10-01</lastmod></url>
  <url><loc>https://www.example.com/about</loc><lastmod>2026-10-01</lastmod></url>
</urlset>
```

**Option B: generate from the prerender manifest.** The build already knows every prerendered route, including those produced by `getPrerenderParams`, so a post-build script is the single source of truth.

```js
// scripts/generate-sitemap.mjs   (node scripts/generate-sitemap.mjs after ng build)
import { readFile, writeFile } from 'node:fs/promises';

const ORIGIN = process.env.SITE_ORIGIN ?? 'https://www.example.com';
const DIST = 'dist/<project>'; // match outputPath in angular.json
const EXCLUDE = [/^\/not-found$/, /^\/login$/, /^\/app(\/|$)/];

const manifest = JSON.parse(await readFile(`${DIST}/prerendered-routes.json`, 'utf8'));
// The manifest's `routes` has been an array in some versions and an object keyed by route in others.
const routes = Array.isArray(manifest.routes) ? manifest.routes : Object.keys(manifest.routes);
const today = new Date().toISOString().slice(0, 10);

const urls = routes
  .filter((r) => !EXCLUDE.some((re) => re.test(r)))
  .map((r) => `  <url><loc>${ORIGIN}${r === '/' ? '/' : r.replace(/\/$/, '')}</loc><lastmod>${today}</lastmod></url>`)
  .join('\n');

await writeFile(
  `${DIST}/browser/sitemap.xml`,
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
console.log(`sitemap.xml written with ${routes.length} routes`);
```

```json
// package.json
"scripts": {
  "build": "ng build && node scripts/generate-sitemap.mjs"
}
```

Use real `lastmod` values when the data source has them (pass a route-to-date map into the script) instead of today's date. Google ignores `lastmod` once it notices the value is always "now".

**Option C: dynamic route in `server.ts`.** For content that changes between deploys. Register it before `express.static` and the Angular handler.

```ts
// src/server.ts
const ORIGIN = 'https://www.example.com';

interface SitemapEntry { path: string; lastmod?: string; }

async function sitemapEntries(): Promise<SitemapEntry[]> {
  const posts = (await fetch('https://api.example.com/posts').then((r) => r.json())) as { slug: string; updatedAt: string }[];
  return [
    { path: '/' }, { path: '/about' }, { path: '/pricing' }, { path: '/blog' },
    ...posts.map((p) => ({ path: `/blog/${p.slug}`, lastmod: p.updatedAt.slice(0, 10) })),
  ];
}

app.get('/sitemap.xml', async (_req, res, next) => {
  try {
    const entries = await sitemapEntries();
    const body = entries
      .map((e) => `  <url><loc>${ORIGIN}${e.path}</loc>${e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : ''}</url>`)
      .join('\n');
    res.set('Content-Type', 'application/xml');
    res.set('Cache-Control', 'public, max-age=3600');
    res.send(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`);
  } catch (err) {
    next(err);
  }
});
```

Above 50,000 URLs split into several files and serve a sitemap index at `/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>https://www.example.com/sitemaps/pages.xml</loc></sitemap>
  <sitemap><loc>https://www.example.com/sitemaps/posts-1.xml</loc></sitemap>
</sitemapindex>
```

## 3. Sitemap rules

- Absolute URLs in the canonical form only: same host, protocol and trailing-slash policy as the canonical tags. A sitemap URL that redirects or has a different canonical is wasted crawl budget.
- Exclude anything `noindex`, every redirect source, 404 pages, paginated duplicates and URLs with tracking parameters.
- `lastmod` only when it is real. `changefreq` and `priority` are ignored by Google; leave them out.
- Limits: 50,000 URLs and 50 MB uncompressed per file; use an index above that.
- Must be reachable without authentication and not blocked by robots.txt.
- Image and video sitemaps are optional extras. Images rendered on the server through `NgOptimizedImage` are already discoverable.

## 4. hreflang and `html lang` for multilingual sites

- Set `<html lang="...">`. With Angular i18n builds each locale has its own `index.html`, so set it there. With runtime translation set `document.documentElement.lang` from the root component through `DOCUMENT` when the locale is known.
- Use `provideClientHydration(withI18nSupport(), ...)` when templates contain `i18n` attributes, or hydration fails on them.
- Give every localized page a `<link rel="alternate" hreflang="...">` for each language plus `x-default`, including itself, from a helper that runs on the server:

```ts
// in SeoService (reuses its `document` and `absolute()`)
setAlternates(pathByLocale: Record<string, string>, defaultLocale: string): void {
  this.document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
  const add = (hreflang: string, path: string) => {
    const link = this.document.createElement('link');
    link.setAttribute('rel', 'alternate');
    link.setAttribute('hreflang', hreflang);
    link.setAttribute('href', this.absolute(path));
    this.document.head.appendChild(link);
  };
  for (const [locale, path] of Object.entries(pathByLocale)) add(locale, path);
  add('x-default', pathByLocale[defaultLocale]);
}
```

- For large sites repeat the alternates in the sitemap (`<xhtml:link rel="alternate" hreflang="ar" href="..."/>` inside each `<url>`). For small sites the HTML links are enough.
- One locale per URL path (`/ar/pricing`) beats cookies or `Accept-Language` negotiation. Crawlers do not carry your cookies and index one version only.
- For right-to-left locales also set `dir="rtl"` on `<html>`; it is not an SEO signal, but a broken layout hurts engagement metrics that are.

## 5. Submitting and monitoring

- Reference the sitemap in robots.txt and submit it in Google Search Console and Bing Webmaster Tools.
- In Search Console, the Pages (Indexing) report lists "Discovered, currently not indexed", "Soft 404" and "Duplicate without user-selected canonical". Each maps to a rule in this skill: render mode, real 404s, canonical tags.
- URL Inspection, then "View crawled page", shows the HTML Google rendered; it should match what `curl` shows.

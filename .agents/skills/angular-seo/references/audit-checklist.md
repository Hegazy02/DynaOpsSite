# SEO Audit and Verification

Contents

1. Verification procedure (after every SEO change)
2. Audit checklist
3. How to report findings

## 1. Verification procedure

Everything SEO-relevant must be verifiable from the server response. DevTools' Elements panel shows the live, hydrated DOM and will happily display tags that were added client-side; it proves nothing.

```bash
# 1. Production build (SSR and prerender run here)
ng build

# 2. Prerendered routes: the files are the truth
find dist/<project>/browser -name index.html
grep -oE '<title>[^<]*</title>|<meta name="description"[^>]*>|<link rel="canonical"[^>]*>' dist/<project>/browser/about/index.html
grep -c 'application/ld+json' dist/<project>/browser/index.html

# 3. Server-rendered routes: start the server and curl
node dist/<project>/server/server.mjs &
curl -si http://localhost:4000/blog/some-post | sed -n '1p;/<head>/,/<\/head>/p'

# 4. Status codes
curl -sI http://localhost:4000/this-does-not-exist | head -1              # 404
curl -sI http://localhost:4000/blog/unknown-slug | head -1                # 404
curl -sI http://localhost:4000/old-pricing | grep -iE '^HTTP|^Location'   # 301 + Location
curl -sI http://localhost:4000/about/ | head -1                           # 301 when trailing slashes are normalised

# 5. Discovery files
curl -s http://localhost:4000/robots.txt
curl -s http://localhost:4000/sitemap.xml | head -20

# 6. What a social scraper sees (no JavaScript)
curl -s -A "facebookexternalhit/1.1" http://localhost:4000/ | grep -oE 'property="og:[a-z:_]+" content="[^"]*"'

# 7. Lighthouse against the production server
npx lighthouse http://localhost:4000 --only-categories=seo,performance,accessibility --chrome-flags=--headless --output=html --output-path=./lighthouse.html
```

If a tag or a block of text appears in the browser but not in these outputs, it is produced by browser-only code (`afterNextRender`, `isPlatformBrowser`, a plain `@defer`, a non-`HttpClient` fetch). Move it onto the server rendering path.

Online tools for the deployed site: Rich Results Test (https://search.google.com/test/rich-results), Schema Markup Validator (https://validator.schema.org), Facebook Sharing Debugger, LinkedIn Post Inspector, and Search Console's URL Inspection with "View crawled page".

## 2. Audit checklist

Go through every row for the site's main page types: home, a listing, a detail page, the 404 page. Each row names the reference that explains the fix.

**Indexability (a failure here blocks indexing)**

| Check | How | Pass | Fix in |
| --- | --- | --- | --- |
| SSR or prerender is on | `angular.json` has `outputMode: server`; `app.routes.server.ts` exists | Yes | ssr-prerender.md §1 |
| Every public route has an explicit render mode | Compare `app.routes.ts` with `app.routes.server.ts` | No public route falls through `**` by accident | ssr-prerender.md §2 |
| Unknown URLs return 404 | `curl -sI /nope` | `404` | ssr-prerender.md §4 |
| Detail pages with unknown ids return 404 | `curl -sI /blog/nope` | `404`, not `200` | meta-tags.md §4, ssr-prerender.md §4 |
| No `**` prerender on a site with dynamic routes | Read `app.routes.server.ts` | `**` is `Server` | ssr-prerender.md §2 |
| Page text is in the server HTML | `curl` or the prerendered file contains the main copy | Yes | ssr-prerender.md §7 |
| No browser-only API crashes the server | Prerender log during `ng build`, server log | No "window is not defined" and similar | ssr-prerender.md §7 |
| robots.txt blocks only private paths | `curl /robots.txt` | No pages or assets disallowed by mistake | sitemap-robots.md §1 |
| Private pages are `noindex` | `curl /login` head | `<meta name="robots" content="noindex...">` | meta-tags.md §2 |
| `meta viewport` present | `index.html` | Yes | meta-tags.md §5 |
| Navigation uses real links | Grep templates for `(click)` navigation | Menus and cards use `routerLink` on `<a>` | SKILL.md |

**Ranking and click-through**

| Check | How | Pass | Fix in |
| --- | --- | --- | --- |
| Unique title per page, 50 to 60 characters | Grep `<title>` across prerendered files | No duplicates; consistent brand suffix | meta-tags.md |
| Unique meta description, 150 to 160 characters | Grep `name="description"` | Present and unique | meta-tags.md |
| Exactly one canonical, absolute, self-referencing | Grep `rel="canonical"` | One per page, equal to the URL you would submit | meta-tags.md |
| Redirects are 301s without chains | `curl -sI` old URLs | `301` and a final `Location` | ssr-prerender.md §5 |
| One URL form (host, protocol, trailing slash, case) | `curl -sI` the variants | All 301 to the canonical form | ssr-prerender.md §5 |
| Open Graph and Twitter tags with an absolute image | Scraper curl (step 6) | `og:title`, `og:description`, `og:image` (absolute), `og:url` = canonical, `twitter:card` | meta-tags.md |
| JSON-LD valid and matching visible content | Rich Results Test on server HTML | No errors; Organization on home, page type on inner pages | structured-data.md |
| One `<h1>`, logical heading order | Grep `<h1` in prerendered files | Exactly one | SKILL.md |
| Content images have `alt` | Grep `<img` without `alt=` | None missing | performance.md |
| Sitemap present, valid, canonical indexable URLs only | `curl /sitemap.xml` | Valid XML, no noindex or redirecting URLs | sitemap-robots.md |
| `html lang` correct; hreflang when multilingual | `index.html`, `curl` head | Correct code; alternates include `x-default` | sitemap-robots.md §4 |
| LCP image uses `NgOptimizedImage` with `priority` | Grep `priority` in templates | One per page type | performance.md |
| No indexable content behind a plain `@defer` | Grep `@defer` | Indexable blocks use `hydrate` triggers or no defer | ssr-prerender.md §7 |
| Lighthouse SEO at least 95, performance at least 90 on the production build | Step 7 | Yes | performance.md |

**Polish**

| Check | How | Pass |
| --- | --- | --- |
| Page-specific `og:image` on key pages | Scraper curl | Not the default on home, pricing, posts |
| Breadcrumb JSON-LD on inner pages | Grep `BreadcrumbList` | Present |
| 404 page is helpful, `noindex`, links home | Visit `/nope` | Yes |
| Staging is `noindex` and disallowed | Check staging robots.txt and head | Yes |
| Search Console and Bing Webmaster verified, sitemap submitted | Ask the user | Yes |

## 3. How to report findings

Rank by impact and be concrete. The reader should be able to fix each item from its line alone.

```markdown
## SEO audit: <site>

### Blocks indexing
1. Unknown URLs return 200. `app.routes.server.ts:6` uses `**` with `RenderMode.Prerender`. Fix: `RenderMode.Server`, and a `NotFound` component that sets `RESPONSE_INIT.status = 404`.
2. ...

### Hurts ranking or click-through
1. Every page has the title "DynaOpsSite" (`index.html:5`); no route sets a title. Fix: `SeoService` plus route `data.seo` (meta-tags.md).
2. ...

### Polish
...

### Needs a decision from you
- Canonical origin: `www` or bare domain?
- Meta description copy for /, /about, /services, /contact
- A default Open Graph image (1200x630)
```

Then apply every code fix that does not depend on a decision, run the verification procedure, and state what passed and what did not.

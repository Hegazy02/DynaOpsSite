---
name: angular-seo
description: Angular SEO best practices for server-rendered and prerendered apps (written against Angular v21 with @angular/ssr). Covers per-route titles and meta descriptions, Open Graph and Twitter cards, canonical URLs, robots directives, JSON-LD structured data, sitemap.xml and robots.txt, server route render modes (prerender vs server vs client), real 404 and 301 responses under SSR, hydration-safe DOM access, and Core Web Vitals (NgOptimizedImage, @defer, fonts). Use this whenever the user mentions SEO, search ranking, Google indexing, meta tags, link previews or social sharing cards, sitemaps, structured data or rich results, canonical URLs, Lighthouse SEO scores, or asks why Angular pages don't show up in search, even if they never say "SEO". Also use it when adding public-facing pages (landing, marketing, blog, product, pricing, docs) to an Angular SSR app, and when reviewing or auditing an Angular site before launch.
license: MIT
metadata:
  author: Dyna Systems
  version: '1.0'
---

# Angular SEO

Every signal a crawler or link-unfurler needs (title, description, canonical, Open Graph, structured data, status code, sitemap entry) has to be present in the HTML of the **first server response**. Googlebot can execute JavaScript, but it does so later, with a budget, and the social scrapers (Slack, LinkedIn, X, WhatsApp) and most AI crawlers never do. That is why nearly every rule below reduces to one idea: **ship it in the server-rendered HTML, with the right status code, at one stable URL.**

## Before changing anything

1. **Check the Angular version** in `package.json`. This skill is written against v21: `@angular/ssr` with `withRoutes` and `RenderMode`, `DOCUMENT` and `RESPONSE_INIT` exported from `@angular/core`, zoneless by default, signals. On v17 and v18 the names differ (`provideServerRoutesConfig`, `DOCUMENT` from `@angular/common`, no `RESPONSE_INIT`), so adapt instead of pasting.
2. **Check whether SSR is on**: `@angular/ssr` in dependencies, `"outputMode": "server"` in `angular.json`, and `src/app/app.routes.server.ts` plus `src/server.ts` present. If not, run `ng add @angular/ssr` first. SEO work on a client-only Angular app is mostly wasted effort.
3. **Check the naming style** of existing files (`.service.ts` suffix or suffixless) and follow it. The `angular-developer` skill's naming-conventions reference explains both.
4. **Find the canonical origin** (`https://www.example.com`, no trailing slash). Ask if unknown. Absolute URLs are required for canonical, `og:url`, `og:image`, sitemaps and JSON-LD, and they must never be derived from the request `Host` header, which is spoofable and usually wrong behind a proxy.

## Workflow

Work through these in order. Each step points to a reference with working code.

| Step | Goal | Read |
| --- | --- | --- |
| 1 | Pick a render mode per route; make 404s and redirects real HTTP responses | [ssr-prerender.md](references/ssr-prerender.md) |
| 2 | Unique title, description, canonical, OG and Twitter tags per indexable route | [meta-tags.md](references/meta-tags.md) |
| 3 | JSON-LD for the page type (Organization, Article, Product, FAQ, Breadcrumb) | [structured-data.md](references/structured-data.md) |
| 4 | robots.txt, sitemap.xml, hreflang | [sitemap-robots.md](references/sitemap-robots.md) |
| 5 | Core Web Vitals: LCP image, fonts, layout shift, lazy loading that still renders on the server | [performance.md](references/performance.md) |
| 6 | Verify in the built output, not in the browser's Elements panel | [audit-checklist.md](references/audit-checklist.md) |

## Rules that matter most, and why

**Rendering**

- Public pages get `RenderMode.Prerender`: fastest, and the output is static HTML a CDN can cache. Known dynamic sets (blog posts, products) get `Prerender` + `getPrerenderParams` + `fallback: PrerenderFallback.Server`, so items added after the build still render on request. Personalised or search pages get `Server`. Authenticated areas get `Client` plus `noindex`; there is nothing there for a crawler.
- Never leave the CLI default `{ path: '**', renderMode: RenderMode.Prerender }` on a site that has dynamic or unknown URLs. Unknown paths get baked as a 200 "shell" page and Google records them as soft 404s, which drags the whole site down. Handle `**` with `RenderMode.Server` and send a real 404.
- Angular's `redirectTo` renders the new content with a 200. To a crawler that is a duplicate page, not a redirect. Permanent moves (old URLs, trailing slash, `www`, http) are 301s in `server.ts` or at the CDN.

**Head tags**

- Set tags where SSR can see them: a component constructor or `ngOnInit`, a resolver, an `effect` that fires when data arrives, or route `data`. Never in `afterNextRender` or behind an `isPlatformBrowser` guard; those are browser-only by definition, so the server HTML never gets the tags.
- Each page sets all of its tags and clears the optional ones (`article:published_time`, `robots`). Otherwise a blog post's `og:image` survives the next client-side navigation and ends up on the pricing page.
- `noindex` anything with no business in search: login, dashboards, filtered or sorted list variants, internal search results, thank-you pages. Put the directive in the HTML (`<meta name="robots">`). robots.txt blocks crawling, not indexing, and a URL blocked in robots.txt can still be indexed from external links.

**Content and URLs**

- Indexable content must not sit behind a plain `@defer (on viewport)` or `@defer (on idle)`: on the server those blocks render only the `@placeholder`. Render it eagerly, or use incremental hydration (`@defer (hydrate on viewport)`), which server-renders the content and only delays the JavaScript.
- Navigation uses `<a routerLink>` so crawlers see an `href`. A `<div (click)="router.navigate(...)">` is invisible to them, and so is every page only reachable that way.
- URLs are path-based (`PathLocationStrategy`, the default; never hash routing), lowercase, hyphenated, with one canonical form. Pick trailing slash or not and 301 the other. Query parameters carry state (filters, pagination), never page identity.
- Exactly one `<h1>` per page with a logical heading order, and meaningful `alt` text on images that carry content.
- JSON-LD goes into a `<script type="application/ld+json">` created through `DOCUMENT`. `[innerHTML]` cannot be used for it because Angular's sanitizer strips `<script>` elements.

**Hydration safety**

- Do not mutate the DOM before hydration completes; it breaks hydration (`NG0500` errors) and flashes content. Third-party widgets that own their DOM (maps, charts, embeds) get `ngSkipHydration` on their host.
- `window`, `document.cookie`, `localStorage`, `IntersectionObserver`, analytics SDKs: wrap in `afterNextRender` or an `isPlatformBrowser` guard. They do not exist on the server and will crash the render, which means a 500 instead of a page.

## Minimal setup for a project that has none of this

1. `SiteConfig` token with origin, site name and default OG image, and a `SeoService` that sets title, description, canonical, OG, Twitter and robots in one call. See [meta-tags.md](references/meta-tags.md).
2. A `TitleStrategy` that applies route `data.seo` for static pages; dynamic pages call `SeoService` from a resolver or an effect. Same reference.
3. A `StructuredDataService` and Organization plus WebSite JSON-LD on the home page. See [structured-data.md](references/structured-data.md).
4. `public/robots.txt` and a sitemap generated from the prerender manifest or served from `server.ts`. See [sitemap-robots.md](references/sitemap-robots.md).
5. `app.routes.server.ts` reviewed route by route, with `**` server-rendered as a real 404 and a `NotFound` page. See [ssr-prerender.md](references/ssr-prerender.md).
6. The hero image on `NgOptimizedImage` with `priority`. See [performance.md](references/performance.md).
7. `ng build`, then open `dist/<project>/browser/<route>/index.html` and confirm the tags are literally there. See [audit-checklist.md](references/audit-checklist.md).

## Verify before you say it is done

Run `ng build`. For prerendered routes open the generated `dist/<project>/browser/<route>/index.html`. For server routes start `node dist/<project>/server/server.mjs` and run `curl -si http://localhost:4000/<route>`. Confirm the status code, one `<title>`, one `<meta name="description">`, one `<link rel="canonical">`, the OG tags, the JSON-LD block and the page's main text are all in the response body. A tag that shows up in DevTools' Elements panel but not in `view-source:` or curl is not SEO; fix the rendering path. The full procedure and a pass/fail checklist are in [audit-checklist.md](references/audit-checklist.md).

When asked to audit a site, report findings ranked by impact (blocks indexing, hurts ranking or click-through, polish), each with the file and line and the concrete fix, then apply the code fixes and list what needs a content or infrastructure decision from the user.

## Related

For general routing, rendering strategy, `resource` and `httpResource`, resolvers and hydration documentation, use the `angular-developer` skill (its `rendering-strategies.md`, `define-routes.md`, `data-resolvers.md` and `loading-strategies.md` references). This skill covers only what crawlers and link previews care about.

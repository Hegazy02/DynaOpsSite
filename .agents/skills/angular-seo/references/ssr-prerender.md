# Render Modes, Status Codes, Redirects and Hydration

Contents

1. Confirm the SSR setup
2. Choose a render mode per route (the SEO view)
3. Server routes example
4. Real 404s
5. Redirects and URL canonicalisation in `server.ts`
6. Response headers and caching
7. Hydration: incremental hydration, `@defer`, browser-only code
8. Data fetching on the server
9. Build output and what to inspect

## 1. Confirm the SSR setup

A v21 project with SSR has:

- `angular.json`: `"outputMode": "server"`, `"server": "src/main.server.ts"`, `"ssr": { "entry": "src/server.ts" }`
- `src/app/app.config.server.ts`: `provideServerRendering(withRoutes(serverRoutes))`
- `src/app/app.routes.server.ts`: the `ServerRoute[]` that decides how each path renders
- `src/app/app.config.ts`: `provideClientHydration(withEventReplay())`
- `src/server.ts`: an Express host using `AngularNodeAppEngine`

Missing? `ng add @angular/ssr` creates all of it. Once `outputMode` is `server`, `ng serve` renders through SSR too, so server-side crashes show up in development.

## 2. Choose a render mode per route

| Page type | Render mode | Why |
| --- | --- | --- |
| Marketing, pricing, docs, legal, landing pages | `Prerender` | Static HTML at build time: fastest TTFB, CDN-cacheable, no per-request server cost |
| Blog posts, products, case studies (a known set) | `Prerender` + `getPrerenderParams` + `fallback: PrerenderFallback.Server` | Everything known at build time is static; anything published after the build is still server-rendered on first request |
| Search results, listings that change hourly, public but personalised pages | `Server` | Fresh on every request and still fully rendered for crawlers |
| Authenticated app, account, checkout | `Client` (+ `noindex`) | Nothing for a crawler; avoids server cost and the risk of rendering user data into cached HTML |
| Unknown URLs (`**`) | `Server`, with a 404 | A missing page must be an HTTP 404 |

The CLI default is `{ path: '**', renderMode: RenderMode.Prerender }`. It prerenders every parameterless route it can discover, which is fine for a brochure site. It stops being fine the moment the site has dynamic content: (a) adding a parameterised route such as `blog/:slug` without `getPrerenderParams` fails the build with "route uses prerendering and includes parameters, but 'getPrerenderParams' is missing", and (b) unknown URLs get the prerendered app shell with a 200, which Search Console reports as soft 404s. Replace it with explicit routes.

## 3. Server routes example

```ts
// src/app/app.routes.server.ts
import { inject } from '@angular/core';
import { PrerenderFallback, RenderMode, ServerRoute } from '@angular/ssr';
import { BlogData } from './features/blog/blog-data';

export const serverRoutes: ServerRoute[] = [
  // Static public pages
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'about', renderMode: RenderMode.Prerender },
  { path: 'pricing', renderMode: RenderMode.Prerender },
  { path: 'blog', renderMode: RenderMode.Prerender },

  // Known dynamic set: prerender what exists now, server-render anything newer
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Server,
    async getPrerenderParams() {
      // Runs at build time inside an injection context, so services work here.
      const slugs = await inject(BlogData).listSlugs();
      return slugs.map((slug) => ({ slug }));
    },
  },

  // Public but per-request
  { path: 'search', renderMode: RenderMode.Server, headers: { 'Cache-Control': 'no-store' } },

  // Authenticated area: no SEO value
  { path: 'app/**', renderMode: RenderMode.Client },

  // Everything else: server-render; the NotFound component sets the 404 (section 4)
  { path: '**', renderMode: RenderMode.Server },
];
```

Notes:

- Server routes are matched independently of Angular routes. Every Angular route needs a matching server route, either a specific one or a wildcard it falls through to. Keep the two files side by side and review them together.
- `getPrerenderParams` returns every parameter in the path. For `products/:category/:id` return `{ category, id }` objects.
- `fallback` options: `PrerenderFallback.Server` (the default: render on request), `Client` (ship the shell and render in the browser, bad for SEO), `None` (404 for anything not prerendered, right for a truly closed set).
- The service used in `getPrerenderParams` runs in Node at build time. `HttpClient` works when `provideHttpClient(withFetch())` is in the config and the URL is absolute; reading a local JSON file or calling a CMS SDK works too.
- `status` cannot be set on `Prerender` routes (static files carry no status). `headers` can, and the build writes them into `prerendered-routes.json` for hosting platforms that read it.

## 4. Real 404s

Use both layers:

**A `NotFound` component that sets the status.** This is what makes `/blog/does-not-exist` (which matches a valid server route) and `/random-garbage` (which hits `**`) both return 404.

```ts
// src/app/features/not-found/not-found.ts
import { Component, RESPONSE_INIT, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo/seo';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <h1>Page not found</h1>
    <p>The page you were looking for does not exist. <a routerLink="/">Go to the home page</a>.</p>
  `,
})
export class NotFound {
  constructor() {
    // Server only; null in the browser.
    const response = inject(RESPONSE_INIT, { optional: true });
    if (response) response.status = 404;

    inject(SeoService).update({
      title: 'Page not found',
      description: 'The page you were looking for does not exist.',
      robots: 'noindex',
    });
  }
}
```

Angular routes: `{ path: 'not-found', component: NotFound }` as the target for resolver redirects, and `{ path: '**', component: NotFound }` last. The resolver pattern in meta-tags.md returns `new RedirectCommand(router.parseUrl('/not-found'), { skipLocationChange: true })`, so the URL stays `/blog/does-not-exist` while the status becomes 404.

**Route-level `status`** when a whole server route is always an error page, for example `{ path: 'not-found', renderMode: RenderMode.Server, status: 404 }`. Do not put `status: 404` on `**` if valid Angular routes could fall through to it: one forgotten server route would then 404 a real page and get it deindexed.

Verify with `curl -sI http://localhost:4000/does-not-exist | head -1`; it must read `HTTP/1.1 404 Not Found`. Use 410 Gone for content removed on purpose and forever; Google drops it faster.

## 5. Redirects and URL canonicalisation in `server.ts`

Angular's `redirectTo` is a client-side redirect. The server renders the destination with a 200 at the original URL, which crawlers read as duplicate content. Permanent moves are HTTP 301s issued before the Angular handler runs. If a CDN or load balancer sits in front, do host and protocol canonicalisation there and keep only path-level redirects in Express.

```ts
// src/server.ts, before app.use(express.static(...))
const CANONICAL_HOST = process.env['CANONICAL_HOST']; // 'www.example.com' in production, unset in dev

if (CANONICAL_HOST) {
  app.use((req, res, next) => {
    const host = req.headers.host ?? '';
    const proto = (req.headers['x-forwarded-proto'] as string | undefined) ?? req.protocol;
    if (host !== CANONICAL_HOST || proto !== 'https') {
      return res.redirect(301, `https://${CANONICAL_HOST}${req.originalUrl}`);
    }
    next();
  });
}

// One URL form: no trailing slash (except the root)
app.use((req, res, next) => {
  if (req.path.length > 1 && req.path.endsWith('/')) {
    const query = req.originalUrl.slice(req.path.length);
    return res.redirect(301, req.path.replace(/\/+$/, '') + query);
  }
  next();
});

// Moved pages
const LEGACY_REDIRECTS: Record<string, string> = {
  '/old-pricing': '/pricing',
  '/blog.html': '/blog',
};
app.use((req, res, next) => {
  const target = LEGACY_REDIRECTS[req.path];
  target ? res.redirect(301, target) : next();
});
```

Rules: no chains (A to C directly, never A to B to C), keep query strings on canonicalisation redirects, 301 for permanent and 302/307 for temporary, and never redirect to a URL that itself 404s.

## 6. Response headers and caching

- Hashed assets in `dist/<project>/browser` are already served with `maxAge: '1y'` by the Express template. Keep that.
- Prerendered HTML: let the CDN cache it with a short TTL and purge on deploy.
- Server routes: set `headers` per route, for example `{ 'Cache-Control': 'public, max-age=60, s-maxage=600' }` for public pages that change a few times a day, and `no-store` for anything personalised.
- Do not vary HTML by `User-Agent`. Serving crawlers different HTML from users ("dynamic rendering") is treated as cloaking.

## 7. Hydration: incremental hydration, `@defer`, browser-only code

```ts
// app.config.ts
provideClientHydration(withEventReplay(), withIncrementalHydration())
```

`withEventReplay` captures clicks that happen before the JavaScript is ready and replays them. `withIncrementalHydration` enables `hydrate` triggers on `@defer` blocks.

| Template | Server HTML contains | Use for |
| --- | --- | --- |
| `@defer (on viewport) { <app-reviews/> } @placeholder { <div class="h-64"></div> }` | Only the placeholder | Widgets with no SEO value (chat, maps, ads) |
| `@defer (hydrate on viewport) { <app-reviews/> }` | The full reviews markup | Indexable content whose JavaScript can wait |
| `@defer (hydrate never) { <app-footer/> }` | Full markup, never hydrated | Purely static sections |
| No defer | Full markup, hydrated immediately | Above-the-fold interactive content |

Rule: if a crawler should read it, it must be in the server HTML, so render it eagerly or use a `hydrate` trigger.

Other hydration constraints that affect SEO:

- Do not touch the DOM before hydration finishes (`innerHTML` tweaks, jQuery plugins, manual `appendChild` in constructors). Angular logs `NG0500`/`NG0501`, throws away the server DOM and re-renders, which costs the LCP win and flashes the page. Components that own their DOM (`<app-map>`, chart libraries, third-party embeds) get the `ngSkipHydration` attribute on their host element.
- Browser-only APIs (`window`, `navigator`, `localStorage`, `IntersectionObserver`, analytics) go in `afterNextRender(() => { ... })` or behind `isPlatformBrowser(inject(PLATFORM_ID))`. On the server they throw, and a throw during render is a 500 instead of a page.
- Markup must be valid HTML. Hydration matches the server DOM node by node; a `<div>` inside a `<p>` or a `<tr>` outside a `<table>` is "fixed" by the browser parser and then fails to match.

## 8. Data fetching on the server

- `provideHttpClient(withFetch())` in `app.config.ts`. The XHR backend does not run on Node.
- Angular waits for in-flight `HttpClient` requests before serialising. With `provideClientHydration()` GET responses are transferred to the browser so the client does not refetch; `withHttpTransferCacheOptions` tunes this, for example to include POSTs or requests with auth headers.
- Relative URLs are resolved against the incoming request's origin on the server. That works when the same Node process (or a proxy in front of it) also serves `/api`; for an external API use an absolute URL from `environment`.
- Async work that is not `HttpClient` (a CMS SDK, Firestore, a `setTimeout`) is invisible to the renderer. Register it so the server waits:

```ts
import { PendingTasks, inject } from '@angular/core';

const tasks = inject(PendingTasks);
const page = await tasks.run(() => cms.getPage(slug));
```

- Never fetch content that should be indexed in `afterNextRender`; that is browser-only.
- Requests that must not run on the server (user-specific, cookie-authenticated) can be skipped with `isPlatformServer`, or the whole route made `RenderMode.Client`.
- Read the incoming request only when truly needed (`inject(REQUEST, { optional: true })` from `@angular/core`), for example a locale cookie. Do not use it to build canonical URLs.

## 9. Build output and what to inspect

```bash
ng build
ls dist/<project>/browser                 # one folder per prerendered route, each with index.html
cat dist/<project>/prerendered-routes.json
node dist/<project>/server/server.mjs     # then curl http://localhost:4000/...
```

- A prerendered route has a real `dist/<project>/browser/<route>/index.html`. Open it: title, description, canonical, OG tags, JSON-LD and the page text must all be in the file.
- A `Server` route has no file. `curl -si` it and check the status line and the head tags.
- If a page's content is in the browser but missing from the output, it is produced by browser-only code (`afterNextRender`, `isPlatformBrowser`, a plain `@defer`, a non-`HttpClient` fetch). Fix the rendering path.
- Prerender errors such as "document is not defined" or "window is not defined" point at browser-only code running during render. Guard it.

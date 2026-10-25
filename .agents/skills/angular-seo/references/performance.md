# Core Web Vitals for Angular SSR Sites

Contents

1. Why this is SEO
2. LCP: the hero image, fonts, critical CSS
3. CLS: nothing moves after first paint
4. INP and blocking time: ship less JavaScript, later
5. Caching and delivery
6. Measuring

## 1. Why this is SEO

Core Web Vitals (LCP, CLS, INP) are a confirmed ranking signal, and Google crawls and indexes fast sites more thoroughly. A server-rendered Angular app already has the biggest win, content without waiting for JavaScript; the rest is not throwing it away.

Targets at the 75th percentile of real users: LCP under 2.5 s, CLS under 0.1, INP under 200 ms.

## 2. LCP: the hero image, fonts, critical CSS

**Use `NgOptimizedImage` for every content image, `priority` on the LCP element only.**

```ts
import { NgOptimizedImage } from '@angular/common';

@Component({
  imports: [NgOptimizedImage],
  template: `
    <!-- The one image visible first on this page -->
    <img ngSrc="/images/hero.jpg" width="1600" height="900" priority
         alt="Site managers reviewing a schedule on a tablet"
         sizes="(max-width: 768px) 100vw, 1200px" />

    <!-- Everything else: lazy by default -->
    <img ngSrc="/images/feature-procurement.jpg" width="800" height="600"
         alt="Purchase order approval screen" placeholder />
  `,
})
export class Home {}
```

- `priority` sets `fetchpriority="high"` and `loading="eager"`, and under SSR emits a `<link rel="preload">` for the image. Give it to the LCP image (hero, product photo), not to every image.
- `width` and `height` are required. They reserve space (CLS) and let the directive warn when the aspect ratio is wrong. Use `fill` inside a positioned container when the size is fluid.
- Angular warns in development when the LCP image lacks `priority` or an image is served much larger than displayed. Act on those warnings.
- Serve responsive sizes from a CDN with a loader (`provideCloudinaryLoader('https://res.cloudinary.com/<cloud>')`, `provideImgixLoader`, `provideImageKitLoader`, `provideCloudflareLoader`, `provideNetlifyLoader`, or a custom `IMAGE_LOADER`). Then `ngSrcset="400w, 800w, 1200w"` plus `sizes` produce correctly sized WebP/AVIF per device.
- `placeholder` adds a blurred low-resolution preview (through the loader) so the slot is not blank while loading.
- Preconnect to the image CDN and any other critical third-party origin in `index.html`: `<link rel="preconnect" href="https://res.cloudinary.com">`.

**Fonts**

- With Google Fonts, keep the `<link>` in `index.html` with `&display=swap`. The Angular CLI inlines the font CSS at build time (`optimization.fonts.inline`, on by default in production), so there is no extra round trip for the stylesheet. Add `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`.
- Self-hosting is better: `woff2` only, `font-display: swap`, and `<link rel="preload" as="font" type="font/woff2" crossorigin href="/fonts/inter-latin.woff2">` for the one face used above the fold. Limit to two or three weights.
- Avoid icon fonts for a handful of icons; inline SVG costs no render-blocking request.

**Critical CSS**: the CLI inlines critical CSS by default (`optimization.styles.inlineCritical`). Keep global `styles.css` small and put component styles in components so they ship with the lazy chunk that needs them.

## 3. CLS: nothing moves after first paint

- Every `<img>`, `<video>`, `<iframe>` and ad slot has explicit dimensions or an `aspect-ratio` rule.
- `@defer` blocks get a `@placeholder` with the same height as the content (`min-height`); otherwise the page jumps when the block loads.
- Cookie banners, announcement bars and chat widgets overlay the page (`position: fixed`) instead of pushing content down.
- Web fonts: `font-display: swap` plus a metric-compatible fallback (`size-adjust`, `ascent-override`) so the swap does not reflow text.
- Do not inject content above existing content after render (late banners, hero carousels that load after hydration). Render it on the server or reserve the space.

## 4. INP and blocking time: ship less JavaScript, later

- Angular v21 apps are zoneless by default; keep it that way. Zone.js adds patching overhead and turns every async event into a change detection cycle.
- Lazy-load every route with `loadComponent` / `loadChildren`. The home page should not pay for the dashboard.
- Below-the-fold interactive widgets go in `@defer (on viewport)` or `(on idle)`. Third-party scripts (chat, analytics, maps, video embeds) load in `@defer (on idle)` or after `afterNextRender`. If the content inside must be indexable, use `hydrate on viewport` instead (ssr-prerender.md section 7).
- `withEventReplay()` in `provideClientHydration` so clicks before hydration are not lost, and `withIncrementalHydration()` so large pages hydrate in pieces.
- Keep constructors and `ngOnInit` cheap. Expensive computation belongs in `computed` signals or a web worker.
- Check what you ship: `ng build --stats-json`, then `npx esbuild-visualizer --metadata dist/<project>/stats.json` (or `source-map-explorer`). Import `lodash-es/debounce`, not `lodash`; `date-fns` functions, not `moment`; individual icons, not the whole set.
- Set `budgets` in `angular.json` so a regression fails the build instead of shipping.

## 5. Caching and delivery

- Hashed JS, CSS and images: `Cache-Control: public, max-age=31536000, immutable` (the Express template's `maxAge: '1y'` does this).
- Prerendered HTML: cache at the CDN with a short TTL and purge on deploy, so `server.ts` only sees cache misses.
- Server-rendered routes: `headers` per route in `app.routes.server.ts`, for example `'Cache-Control': 'public, max-age=60, s-maxage=600, stale-while-revalidate=86400'` for public listings.
- Enable Brotli or gzip at the CDN or reverse proxy. Express does not compress by default; add the `compression` middleware when nothing sits in front.
- HTTP/2 or HTTP/3, HTTPS everywhere with HSTS, and a 301 from http to https.

## 6. Measuring

- Lab: `npx lighthouse https://www.example.com --only-categories=performance,seo --view` against the production build (`node dist/<project>/server/server.mjs`), never `ng serve`.
- Field: PageSpeed Insights (CrUX data) and Search Console's Core Web Vitals report. Ranking uses field data.
- RUM: the `web-vitals` package reporting to your analytics, so regressions show before Search Console's 28-day window does.
- Chrome DevTools Performance panel with the LCP and Layout Shift markers to find the actual element causing a problem.

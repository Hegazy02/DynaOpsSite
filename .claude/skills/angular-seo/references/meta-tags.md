# Titles, Meta Description, Canonical, Open Graph, Twitter

Contents

1. Site config token
2. `SeoService`
3. Static pages: route `data.seo` + `TitleStrategy`
4. Dynamic pages: resolver, or resource + effect
5. Tag reference and limits
6. Pitfalls

Angular's `Title` and `Meta` services and the `DOCUMENT` token behave identically on the server and in the browser, so anything written through them during the initial render lands in the HTML the server sends. That is the whole trick; the rest is making sure every page writes a complete, correct set and never leaves a previous page's tags behind.

## 1. Site config token

Absolute URLs come from configuration, never from the request `Host` header (spoofable, and wrong behind proxies and CDNs).

```ts
// src/app/core/seo/site-config.ts
import { InjectionToken } from '@angular/core';

export interface SiteConfig {
  /** Canonical origin, no trailing slash: 'https://www.example.com' */
  origin: string;
  name: string;
  /** Site-relative or absolute. 1200x630 px recommended. */
  defaultImage: string;
  twitterHandle?: string; // '@example'
  locale?: string;        // 'en_US'
  /** Defaults to `${title} | ${name}` */
  titleTemplate?: (pageTitle: string) => string;
}

export const SITE_CONFIG = new InjectionToken<SiteConfig>('SITE_CONFIG');

export function provideSiteConfig(config: SiteConfig) {
  return { provide: SITE_CONFIG, useValue: config };
}
```

```ts
// src/app/app.config.ts
providers: [
  provideSiteConfig({
    origin: 'https://www.example.com',
    name: 'Example',
    defaultImage: '/og-default.png',
    twitterHandle: '@example',
    locale: 'en_US',
  }),
  // ...
]
```

If staging runs on another origin, source these values from `environment.ts`, and give staging a global `noindex` (see section 2) so it is never indexed in place of production.

## 2. SeoService

```ts
// src/app/core/seo/seo.ts   (seo.service.ts in projects that keep role suffixes)
import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SITE_CONFIG } from './site-config';

export interface PageSeo {
  title: string;
  description: string;
  /** Path ('/about') or absolute URL. Defaults to the current route path without query or fragment. */
  canonical?: string;
  /** Path or absolute URL. Falls back to SiteConfig.defaultImage. */
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article' | 'product' | 'profile';
  /** e.g. 'noindex, nofollow'. Omit for the default (index, follow). */
  robots?: string;
  /** ISO 8601 with timezone. Articles only. */
  publishedTime?: string;
  modifiedTime?: string;
  /** Use the title verbatim instead of the "Title | Site" template (home page usually does). */
  rawTitle?: boolean;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly site = inject(SITE_CONFIG);

  /** Set every SEO-relevant head tag for the current page in one go. */
  update(seo: PageSeo): void {
    const title = this.formatTitle(seo.title, seo.rawTitle);
    const url = this.absolute(seo.canonical ?? this.currentPath());
    const image = this.absolute(seo.image ?? this.site.defaultImage);
    const isArticle = seo.type === 'article';

    this.titleService.setTitle(title);
    this.setName('description', seo.description);
    this.setCanonical(url);

    this.setProperty('og:title', title);
    this.setProperty('og:description', seo.description);
    this.setProperty('og:url', url);
    this.setProperty('og:type', seo.type ?? 'website');
    this.setProperty('og:image', image);
    this.setProperty('og:image:alt', seo.imageAlt);
    this.setProperty('og:site_name', this.site.name);
    this.setProperty('og:locale', this.site.locale);

    this.setName('twitter:card', 'summary_large_image');
    this.setName('twitter:title', title);
    this.setName('twitter:description', seo.description);
    this.setName('twitter:image', image);
    this.setName('twitter:site', this.site.twitterHandle);

    this.setProperty('article:published_time', isArticle ? seo.publishedTime : undefined);
    this.setProperty('article:modified_time', isArticle ? seo.modifiedTime : undefined);

    this.setName('robots', seo.robots);
  }

  /** Title only, for routes that declare just `title`. */
  setTitle(title: string, raw = false): void {
    this.titleService.setTitle(this.formatTitle(title, raw));
  }

  /** Mark the current page as not indexable (login, dashboards, filtered lists). */
  noIndex(): void {
    this.setName('robots', 'noindex, nofollow');
  }

  private formatTitle(title: string, raw?: boolean): string {
    if (raw) return title;
    return this.site.titleTemplate?.(title) ?? `${title} | ${this.site.name}`;
  }

  private setName(name: string, content: string | undefined): void {
    if (content) this.meta.updateTag({ name, content });
    else this.meta.removeTag(`name="${name}"`);
  }

  private setProperty(property: string, content: string | undefined): void {
    if (content) this.meta.updateTag({ property, content });
    else this.meta.removeTag(`property="${property}"`);
  }

  private setCanonical(href: string): void {
    let link = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }

  private currentPath(): string {
    return this.router.url.split(/[?#]/)[0] || '/';
  }

  private absolute(pathOrUrl: string): string {
    if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
    return this.site.origin + (pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`);
  }
}
```

Why it is shaped this way:

- `Meta.updateTag` upserts by the tag's first attribute (`name="..."` or `property="..."`), so repeated navigations never produce duplicate tags.
- Every optional tag is removed when its value is absent. Without that, a blog post's `article:published_time` or custom `og:image` survives into the next client-side navigation.
- The canonical strips query and fragment, so `/products?sort=price` canonicalises to `/products`. Pass `canonical` explicitly when a query parameter does identify a distinct page; internal search (`/search?q=`) should usually be `noindex` instead.
- `og:url` always equals the canonical. Social networks aggregate shares by `og:url`, so a mismatch splits share counts and confuses debuggers.

For a staging environment add `robots: 'noindex, nofollow'` to every page, or simpler, have `update()` force it when `environment.allowIndexing` is false.

## 3. Static pages: route `data.seo` + `TitleStrategy`

For pages whose SEO text is fixed, declare it on the route and let a single `TitleStrategy` apply it on every navigation, including the initial server render. `TitleStrategy.updateTitle` runs on `NavigationEnd`, which fires during server rendering before the HTML is serialised.

```ts
// src/app/core/seo/seo-title-strategy.ts
import { Injectable, inject } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { PageSeo, SeoService } from './seo';

type RouteSeo = Omit<PageSeo, 'title'> & { title?: string };

@Injectable({ providedIn: 'root' })
export class SeoTitleStrategy extends TitleStrategy {
  private readonly seo = inject(SeoService);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    let route = snapshot.root;
    while (route.firstChild) route = route.firstChild;

    const routeSeo = route.data['seo'] as RouteSeo | undefined;
    const title = this.buildTitle(snapshot); // from the route's `title` property

    if (routeSeo) {
      this.seo.update({ ...routeSeo, title: routeSeo.title ?? title ?? '' });
    } else if (title) {
      this.seo.setTitle(title);
    }
    // A route with neither `data.seo` nor `title` owns its tags (section 4).
    // Doing nothing here guarantees we never overwrite what its resolver or component just set.
  }
}
```

```ts
// src/app/app.config.ts
import { TitleStrategy, provideRouter, withComponentInputBinding } from '@angular/router';
import { SeoTitleStrategy } from './core/seo/seo-title-strategy';

providers: [
  provideRouter(routes, withComponentInputBinding()),
  { provide: TitleStrategy, useClass: SeoTitleStrategy },
]
```

```ts
// src/app/app.routes.ts
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
    data: {
      seo: {
        title: 'Example: operations software for construction companies',
        rawTitle: true,
        description: 'Example gives construction companies one system for projects, procurement and payroll.',
      },
    },
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about').then((m) => m.About),
    title: 'About us',
    data: { seo: { description: 'Who builds Example and why we started with construction.' } },
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login').then((m) => m.Login),
    title: 'Sign in',
    data: { seo: { description: 'Sign in to Example.', robots: 'noindex, nofollow' } },
  },
  // Dynamic pages: no data.seo, they set their own tags (section 4)
  {
    path: 'blog/:slug',
    loadComponent: () => import('./features/blog/blog-post').then((m) => m.BlogPost),
    resolve: { post: postResolver },
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFound),
  },
];
```

## 4. Dynamic pages: resolver, or resource + effect

The page's text comes from data, so the tags are set once the data exists. Leave `data.seo` off these routes.

**Option A: resolver.** Prefer this for SEO-critical pages. The data exists before the component is created, the "does this exist?" decision lives in one place, and the tags are set synchronously, so there is no window where the server could serialise early.

```ts
// src/app/features/blog/post-resolver.ts
import { inject } from '@angular/core';
import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { SeoService } from '../../core/seo/seo';
import { BlogData } from './blog-data';
import { Post } from './post.model';

export const postResolver: ResolveFn<Post> = async (route) => {
  const slug = route.paramMap.get('slug')!;
  const post = await firstValueFrom(inject(BlogData).getPost(slug)); // null when the API says 404

  if (!post) {
    // Render the NotFound page at the same URL; NotFound sets the 404 status (see ssr-prerender.md)
    const router = inject(Router);
    return new RedirectCommand(router.parseUrl('/not-found'), { skipLocationChange: true });
  }

  inject(SeoService).update({
    title: post.title,
    description: post.excerpt,
    image: post.coverImage,
    type: 'article',
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
  });
  return post;
};
```

With `withComponentInputBinding()` the component receives the resolved value as an input:

```ts
@Component({ /* ... */ })
export class BlogPost {
  readonly post = input.required<Post>();
}
```

**Option B: resource + effect.** When the component fetches its own data, set the tags from an effect. Under SSR, Angular waits for the pending HTTP request, runs change detection again, the effect fires, and only then is the page serialised.

```ts
import { Component, effect, inject, input } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { SeoService } from '../../core/seo/seo';
import { environment } from '../../../environments/environment';

@Component({ /* ... */ })
export class Product {
  readonly slug = input.required<string>();
  private readonly seo = inject(SeoService);

  readonly product = httpResource<ProductDto>(() => `${environment.apiUrl}/products/${this.slug()}`);

  constructor() {
    effect(() => {
      const p = this.product.value();
      if (p) {
        this.seo.update({ title: p.name, description: p.summary, image: p.image, type: 'product' });
      }
    });
  }
}
```

Two SSR details that bite here: `provideHttpClient(withFetch())` is required for server-side requests, and on the server a relative URL (`/api/...`) resolves against the incoming request's origin, which only works when the same Node server (or a proxy in front of it) also serves the API. For an external API use an absolute URL from configuration. If the data arrives through something other than `HttpClient` (an SDK, a WebSocket, a `setTimeout`), the server will not wait for it; wrap the work in `PendingTasks` (see ssr-prerender.md).

## 5. Tag reference and limits

| Tag | Where | Rule of thumb |
| --- | --- | --- |
| `<title>` | `Title.setTitle` | 50 to 60 characters, unique per page, most specific words first, brand last |
| `meta description` | `Meta` | 150 to 160 characters, a sentence that earns the click; unique per page |
| `link rel="canonical"` | `DOCUMENT` | Absolute, self-referencing on the canonical URL, exactly one per page |
| `og:title`, `og:description` | `Meta` (`property`) | Can be slightly more "social" than the title tag |
| `og:image` | `Meta` (`property`) | Absolute URL, 1200x630 px, under about 1 MB, publicly fetchable (no auth, not blocked in robots.txt) |
| `og:url` | `Meta` (`property`) | Identical to the canonical |
| `og:type` | `Meta` (`property`) | `website` for most pages, `article` for posts, `product` for products |
| `twitter:card` | `Meta` (`name`) | `summary_large_image` when you have a real image, else `summary` |
| `meta robots` | `Meta` (`name`) | Omit for indexable pages; `noindex, nofollow` for private ones; `noindex` for duplicates that should still pass links |
| `html lang` | `index.html` or `document.documentElement.lang` | Correct BCP 47 code; change it per locale in i18n builds |
| `meta viewport` | `index.html` | `width=device-width, initial-scale=1`; mobile-first indexing fails without it |

## 6. Pitfalls

- **Tags set in `afterNextRender` or inside `isPlatformBrowser`.** Those run only in the browser, so the server HTML never has them. Everything in this file runs on the server too.
- **Meta elements in a component template.** Angular renders the template where the component sits, inside `<body>`; it does not hoist `<meta>` or `<title>` to `<head>`. Use the services.
- **Multiple canonical links.** Two `<link rel="canonical">` elements means Google ignores both. The `setCanonical` above reuses the existing element; do not also hardcode one in `index.html`.
- **Default OG tags in `index.html`.** Fine for `og:site_name`, but static `og:title`/`og:image` there become duplicates on pages that set their own, because `updateTag` only replaces tags whose selector matches. Either leave them out of `index.html` or make every page set the same set.
- **The same title on every page.** The `index.html` `<title>` is only a fallback; every indexable route must override it.
- **Description copied from the title, or empty.** Google rewrites poor descriptions, which usually lowers click-through.
- **Relative `og:image`.** Scrapers do not resolve relative URLs reliably. The service above always produces absolute ones.
- **Query strings in the canonical.** Pagination, filters and tracking parameters (`utm_*`, `fbclid`) must not appear in the canonical; the default `currentPath()` strips them.

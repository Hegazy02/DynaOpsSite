# Structured Data (JSON-LD)

Contents

1. Why and where
2. `StructuredDataService`
3. Using it from a page
4. Schemas by page type
5. Rules Google actually enforces

## 1. Why and where

Structured data lets Google show rich results (article cards, product price and rating, breadcrumbs, sitelinks search box) and helps every crawler understand what an entity is. Google recommends JSON-LD over microdata. A `<script type="application/ld+json">` anywhere in the document works; `<head>` keeps it out of hydration's way.

Like everything else it must be in the server-rendered HTML, and it cannot be put in a template through `[innerHTML]` because Angular's sanitizer strips `<script>` elements. Create the element through `DOCUMENT`.

## 2. StructuredDataService

```ts
// src/app/core/seo/structured-data.ts
import { DOCUMENT, Injectable, inject } from '@angular/core';

export type JsonLd = Record<string, unknown>;

@Injectable({ providedIn: 'root' })
export class StructuredDataService {
  private readonly document = inject(DOCUMENT);

  /**
   * Insert or replace one JSON-LD block. Use a stable key per block
   * ('org', 'website', 'page', 'breadcrumb') so navigations replace instead of accumulate.
   * Pass an array to emit several entities in one @graph.
   */
  set(key: string, data: JsonLd | JsonLd[]): void {
    const id = `ld-${key}`;
    let script = this.document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = this.document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }
    const payload = Array.isArray(data)
      ? { '@context': 'https://schema.org', '@graph': data }
      : { '@context': 'https://schema.org', ...data };
    // Escape '<' so user-supplied text can never terminate the script element.
    script.textContent = JSON.stringify(payload).replace(/</g, '\\u003c');
  }

  remove(key: string): void {
    this.document.getElementById(`ld-${key}`)?.remove();
  }
}
```

## 3. Using it from a page

Site-wide blocks (Organization, WebSite) belong on the home page only. Page blocks are set by the page and removed when it is destroyed, so a client-side navigation to a page without structured data does not drag an old Article block along.

```ts
// src/app/features/blog/blog-post.ts
import { Component, DestroyRef, effect, inject, input } from '@angular/core';
import { SITE_CONFIG } from '../../core/seo/site-config';
import { StructuredDataService } from '../../core/seo/structured-data';
import { Post } from './post.model';

@Component({ /* ... */ })
export class BlogPost {
  readonly post = input.required<Post>();
  private readonly ld = inject(StructuredDataService);
  private readonly site = inject(SITE_CONFIG);

  constructor() {
    effect(() => {
      const p = this.post();
      const url = `${this.site.origin}/blog/${p.slug}`;
      this.ld.set('page', [
        {
          '@type': 'BlogPosting',
          '@id': `${url}#article`,
          headline: p.title,
          description: p.excerpt,
          image: [p.coverImage],
          datePublished: p.publishedAt,
          dateModified: p.updatedAt ?? p.publishedAt,
          author: { '@type': 'Person', name: p.author.name, url: p.author.url },
          publisher: { '@id': `${this.site.origin}/#organization` },
          mainEntityOfPage: url,
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: this.site.origin },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: `${this.site.origin}/blog` },
            { '@type': 'ListItem', position: 3, name: p.title },
          ],
        },
      ]);
    });
    inject(DestroyRef).onDestroy(() => this.ld.remove('page'));
  }
}
```

Keep schema-building functions (`articleJsonLd(post, site)`, `productJsonLd(product, site)`) in a small `core/seo/schemas.ts` so pages stay readable and the shapes are unit-tested once.

## 4. Schemas by page type

Only the fields that matter. All URLs absolute, all dates ISO 8601 with a timezone.

**Home: Organization + WebSite**

```json
[
  {
    "@type": "Organization",
    "@id": "https://www.example.com/#organization",
    "name": "Example",
    "url": "https://www.example.com",
    "logo": "https://www.example.com/logo-512.png",
    "sameAs": ["https://www.linkedin.com/company/example", "https://x.com/example"],
    "contactPoint": { "@type": "ContactPoint", "contactType": "sales", "email": "sales@example.com", "areaServed": "EG" }
  },
  {
    "@type": "WebSite",
    "@id": "https://www.example.com/#website",
    "url": "https://www.example.com",
    "name": "Example",
    "publisher": { "@id": "https://www.example.com/#organization" }
  }
]
```

Add `"potentialAction": { "@type": "SearchAction", "target": "https://www.example.com/search?q={search_term_string}", "query-input": "required name=search_term_string" }` to `WebSite` only when that search URL really works.

**Software or SaaS product page: SoftwareApplication**

```json
{
  "@type": "SoftwareApplication",
  "name": "Example ERP",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "...",
  "offers": { "@type": "Offer", "price": "49", "priceCurrency": "USD", "url": "https://www.example.com/pricing" }
}
```

**Physical product: Product + Offer**

```json
{
  "@type": "Product",
  "name": "...",
  "image": ["https://www.example.com/images/abc-123.jpg"],
  "description": "...",
  "sku": "ABC-123",
  "brand": { "@type": "Brand", "name": "..." },
  "offers": {
    "@type": "Offer",
    "url": "https://www.example.com/products/abc-123",
    "price": "199.00",
    "priceCurrency": "EGP",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition"
  },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.6", "reviewCount": "128" }
}
```

Include `aggregateRating` only when the reviews are real and visible on the page.

**FAQ section: FAQPage** (only when the questions and answers are visible on the page)

```json
{
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Does it work offline?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. ..." } }
  ]
}
```

**Local office or store: LocalBusiness**

```json
{
  "@type": "LocalBusiness",
  "name": "...",
  "url": "https://www.example.com",
  "telephone": "+20...",
  "address": { "@type": "PostalAddress", "streetAddress": "...", "addressLocality": "Cairo", "addressCountry": "EG" },
  "geo": { "@type": "GeoCoordinates", "latitude": 30.04, "longitude": 31.23 },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"], "opens": "09:00", "closes": "17:00" }
  ]
}
```

**Any inner page: BreadcrumbList** (section 3). The last item carries no `item` URL.

## 5. Rules Google actually enforces

- Mark up only what is visible on the page, with values identical to the visible text (price, rating, headline, dates). Mismatches lead to manual actions.
- Never fabricate reviews, ratings or FAQ content. No `aggregateRating` without real reviews.
- One `Organization` for the site, on the home page, referenced elsewhere by `@id`.
- Images referenced in JSON-LD must be crawlable (public, not blocked by robots.txt), and for articles at least 1200 px wide.
- Validate every template once against the server-rendered HTML with the Rich Results Test (https://search.google.com/test/rich-results) for eligibility and the Schema Markup Validator (https://validator.schema.org) for syntax.
- After launch, watch Search Console's "Enhancements" reports; they list invalid items per schema type.

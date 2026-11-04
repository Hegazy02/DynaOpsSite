# SEO and Migration Plan: DynaOps365

Audit date: 2026-11-04.

**Goal:** replace the live WordPress site on `dynaops365.com` with this Angular site, keep existing rankings, and grow search traffic.

**Planned pages:** Home, About, Demo and the remaining feature pages.

**Deployment approach:** while the project is being built, it deploys only to a temporary URL. WordPress stays live on `dynaops365.com`, untouched, so rankings aren't at risk during this stage. When the project is complete, it replaces WordPress on `dynaops365.com`. That final deployment is "launch" throughout this plan, and it's the point where rankings are at risk.

**What to expect:** no migration guarantees rankings. Some movement in the first weeks after launch is normal. Long-term losses usually come from missing redirects or removed content, and this plan targets both.

---

## The order to work in

| Phase | Work | When |
| --- | --- | --- |
| 1 | Record the current rankings and URLs, back up WordPress, and block search engines from the temporary URL | Now |
| 2 | Decide the domain and what happens to the old content | Now |
| 3 | Fix the existing pages | During the build, on the temporary URL |
| 4 | Build the new pages using the checklist in section 4 | During the build, on the temporary URL |
| 5 | Add the redirects and test everything on the temporary URL | When the project is complete, before launch |
| 6 | Refresh the backup and baseline, then launch on `dynaops365.com` and run the launch-day checks | Launch day |
| 7 | Monitor the results and retire the temporary URL | 3 months after launch |

> **Warning: pushing to `main` deploys automatically.** `.github/workflows/deploy.yml` uploads the build over FTP on every push to `main`. Keep the `HOST`, `USER` and `PASSWORD` secrets pointed at the temporary server until launch. Once they point to the production server, every push to `main` goes live.

---

## 1. Do this now

### 1.1 Keep the temporary URL out of Google

If the temporary URL gets indexed, Google sees a second copy of your content. The project's `robots.txt` allows all crawling and its pages have no `noindex`, so the block below is what keeps the temporary URL out of search results.

**Done (confirmed 2026-11-04):**

- [x] **Turned on the `X-Robots-Tag: noindex, nofollow` header.** The `SITE_NOINDEX` GitHub variable is set to `true`, so the deploy workflow runs `scripts/add-noindex-header.mjs`, which adds the header to the uploaded `.htaccess` and `web.config` only.
- [x] **Confirmed it works.** `curl -sI https://<temporary-url>/industries/fmcg` returns `X-Robots-Tag: noindex, nofollow` on the temporary host, which runs IIS and applies `web.config`. Rerun this check if the host or the deploy workflow changes.
- [x] **Served it from the root of a subdomain**, not a subfolder. The build expects `/` and `/ar/` as its base paths, so assets and links would break in a subfolder.

**Keep following until launch:**

- **Don't put the block in the source files** (`public/robots.txt`, `public/.htaccess`, `public/web.config` or `src/index.html`). Those files also deploy to production, and a `noindex` that reaches `dynaops365.com` would remove your site from Google.
- **Don't link to the temporary URL** from WordPress or any other public page.

### 1.2 Record the current site

WordPress stays live during the build, so these steps have no risk. Repeat the exports, URL list and backup right before launch (see section 7), because the old site can change in the meantime.

- [ ] **Verify the domain in Google Search Console**, using a Domain property so it covers `www`, the bare domain, http and https. Do the same in Bing Webmaster Tools.
- [ ] **Export the Search Console Performance data** (queries and pages, longest date range available). This is your baseline, and it shows which pages actually earn traffic.
- [ ] **Export the Search Console Links report**, so you know which old URLs have backlinks.
- [ ] **Record every old URL.** Combine the WordPress sitemap, the Search Console pages export and a crawl. The WordPress sitemap alone isn't enough, because older URLs can still receive traffic without being listed.
- [ ] **Record rankings for your 10 to 20 most important queries**, in English and Arabic if relevant.
- [ ] **Take a full WordPress backup** (files and database). Keep the final one until the new site has been stable for at least 3 months after launch.
- [ ] **Download the images used in old posts** from `/wp-content/uploads/`.

---

## 2. Decisions needed

### 2.1 Which domain is canonical?

**Decided: `https://dynaops365.com`, with no `www` and no trailing slash.**

This matches the canonical WordPress already declares, so the rebuild doesn't add a host change on top of the migration.

Updated:

- [x] `src/app/core/seo/site-config.ts` (`origin`)
- [x] `src/index.html` (`og:image`, `twitter:image` and the JSON-LD URLs)
- [x] `public/robots.txt` (the sitemap URL)
- [x] `scripts/generate-sitemap.mjs` (`ORIGIN`)

Pages on the temporary URL show `dynaops365.com` in their canonical, hreflang, Open Graph and sitemap URLs. That's correct, because the build is meant for production, so don't change them to the temporary URL.

After launch, `www` must 301 to the bare domain on every URL. Today `https://www.dynaops365.com/` returns 200 instead of redirecting, so confirm the production host handles this correctly at launch.

### 2.2 What happens to the license content?

The current site targets D365 license costs and compliance. The new site targets field sales. **A redirect alone won't keep those rankings if the content that earned them is gone.**

**Recommendation:** if the license product is still sold, keep this content on the new site at the same URLs, with the same titles and text:

| Old URL | Content |
| --- | --- |
| `/d365-fo-license-enforcement/` | Page |
| `/dynamics-365-license-compliance-guide/` | Article |
| `/dynamics-365-license-compliance-guide/dynamics-365-user-license-validation/` | Article |
| `/dynamics-365-license-compliance-guide/what-happens-when-the-d365-grace-period-ends/` | Article |
| `/microsoft-license-enforcement-2025/` | Article |

The Home page also needs attention. The old home title is "DynaOps365 | Reduce D365 License Costs & Ensure Compliance". If license queries bring traffic to it, the new Home page should still cover that topic and link to the license content. Check the Search Console export first.

If the license product is no longer sold, accept that those rankings will fade. Redirect each URL to the closest remaining page.

### 2.3 Pages missing from your build list

You plan to build Home, About, Demo and the features. These pages are also linked from the site, or exist on the old site:

| Page | Why it matters | Recommendation |
| --- | --- | --- |
| `/contact` | Old page, and linked from the footer | Build it |
| `/blog` | Old page, linked from the header, and the parent for old articles | Build it, even if it's simple |
| `/integration` | Linked from the header | Build it, or remove the link until it exists |
| `/features` | "View All Features" links here, and it's a good target for `/services/` | Build it as a hub page |
| `/industries` | Doesn't exist, but would connect the 9 industry pages | Build it as a hub page |
| `/features/dynaops365-ai` | Linked from the footer, but "coming soon" in the header | Remove the footer link until the page exists |

---

## 3. Fix the existing pages

### Must fix before launch

- [ ] **Replace the placeholder phone number.** `src/app/layout/footer/footer-content.ts` ships `022`, which outputs `tel:022` and `wa.me/022`. Set the real number or remove both links.
- [x] **Shortened the meta descriptions on the 9 industry pages.** English now runs 149 to 157 characters and Arabic 132 to 153. Each page has its own `<page>.description` key, separate from the hero text.
- [x] **Shortened the customer management description the same way.** English is 145 characters and Arabic 136, with its own `customer-management.description` key. New feature pages should also get their own short description key.
- [x] **Improved the titles on the 9 industry pages.** They now run 50 to 60 characters, for example `FMCG Field Sales Software for Dynamics 365 | DynaOps365`.
- [ ] **Check the titles against real search data.** They were written without the Search Console export, which isn't available yet, and the current site's data covers license topics rather than field sales. Use a keyword tool for field sales terms in English and Arabic, and review the titles again after launch.
- [x] **Improved the customer management title the same way.** It's now `Customer Management Software for Dynamics 365 | DynaOps365` (58 characters), and Arabic is 55. New feature pages should also start with a 50 to 60 character title.
- [ ] **Remove every dead link.** Each page currently links to 20 pages per language that return 404. Any target that won't exist at launch must be removed from the header and footer.

- [x] **Made unknown URLs return a real 404 on the temporary IIS host.** `public/web.config` now uses `responseMode="File"` instead of `ExecuteURL`. `/nope`, `/a/b/c`, `/about`, `/ar/nope`, `/ar/a/b/c` and `/ar/about` all return 404 with the "Page not found" page in the right language (confirmed 2026-11-04).
- [ ] **Repeat the 404 test on the production host at launch.** If production isn't IIS, this rule doesn't apply there, so set up its 404 handling separately.
- [x] **Fixed the HTML cache on the temporary IIS host.** Pages, `robots.txt` and the sitemap now return `public, max-age=0, must-revalidate`, and unchanged pages answer `304` (confirmed 2026-11-04).
- [x] **Fixed the image and icon cache on the temporary IIS host.** `/images`, `/icons` and `/brand` now return `max-age=604800` (7 days), and hashed CSS keeps 1 year (confirmed 2026-11-04).
- [ ] **Repeat both cache tests on the production host at launch.** `/industries/fmcg` must return 200 with `public, max-age=0, must-revalidate`, and `/images/industries/fmcg/hero.webp` must return 200 with `max-age=604800`. If production isn't IIS, the `web.config` rules don't apply. The `.htaccess` rules are untested, and nginx alone reads neither file.

### Should fix before launch

- [ ] **Add internal links inside page content.** The only link inside `<main>` on the FMCG page is `/demo`, so pages reach each other only through the footer. Link each industry page to its relevant features, and each feature page to the industries that use it. The six feature cards on each industry page are the natural place: the content PDF names a target for each card, and each card's `id` already matches that feature page's URL (`/features/<id>`). Add the links as those pages are built, so no card points to a 404.
- [ ] **Expand the industry pages.** They have about 235 to 285 words. Add real detail such as workflows, common problems, use cases and FAQs. Don't add filler.
- [ ] **Improve image loading.**
  - [x] Use `NgOptimizedImage` with `priority` on the hero of the 9 industry pages. Browsers now preload the right 2x or 3x file (confirmed in the browser, 2026-11-04).
  - [x] Did the same in `feature-hero` for customer management (confirmed in the browser, 2026-11-04). The heroes of new pages should follow the same pattern.
  - [x] Added `width` and `height` to the icons in `button`, `tabs`, `industry-features` and `header`. The two visibility cursors stay without them, because they're sized by CSS height, and they're absolutely positioned so they can't shift the layout.
  - [x] Added `width` and `height` to the `feature-connections` icons. Every image on the customer management page now has them.
- [ ] **Confirm the hashed asset and manifest cache rules.** `public/web.config` and `public/.htaccess` now set `public, max-age=31536000, immutable` on JS and CSS, and revalidate `site.webmanifest`, but this isn't confirmed until it's deployed.
- [x] **Compression:** the temporary IIS host and the current `dynaops365.com` both already compress HTML, CSS and JS (checked 2026-11-04), so `web.config` adds nothing. `public/.htaccess` now compresses text files in case production runs Apache. Confirm the result at launch.
- [ ] **Reduce the SVG download size.** The temporary host doesn't compress SVGs, and the ERP integration artwork is large (`base.svg` is 89 KB). IIS only allows this setting at server level, so ask the host, or optimize or convert those files.
- [ ] **Expand the structured data** in the table in section 4.3.

### Polish

- [x] Translated `og:image:alt` on Arabic pages.
- [x] Added `og:locale:alternate`.
- [x] Used a `<header>` element in `src/app/layout/header/header.html`.
- [ ] Add visible breadcrumbs to industry and feature pages. This needs Home and the `/industries` and `/features` hub pages to link to, and a design, because Figma doesn't include them. Add `BreadcrumbList` JSON-LD at the same time.
- [x] Added `lastmod` to the sitemap. Each date is the last commit to the page's own folder or its translation keys, so a change to a shared component doesn't update it. The script leaves `lastmod` out if git history is missing, so `.github/workflows/deploy.yml` now fetches full history. Home has no `lastmod` until its folder is added to the script.
- [x] Removed canonical and hreflang tags from `noindex` 404 pages.

---

## 4. Checklist for every new page

### 4.1 Technical setup

- [ ] Add the route to `src/app/app.routes.ts` with `title` and `data.seo.description`.
- [ ] Add a `RenderMode.Prerender` entry to `src/app/app.routes.server.ts`. Without it, the page isn't prerendered, so it's missing from the static FTP deploy and the sitemap.
- [ ] Add Arabic translations, and register any new locale file in `angular.json`.
- [ ] After `npm run build`, confirm the page text and tags are in `dist/DynaOpsSite/browser/<route>/index.html`, in both languages.

### 4.2 Content

- [ ] Unique title of 50 to 60 characters.
- [ ] Its own description of about 155 characters, leading with the benefit and naming the page's topic early. Give it a dedicated `<page>.description` key in English and Arabic from the start. Don't build it from the hero text.
- [ ] Exactly one `<h1>`, with headings in logical order.
- [ ] Meaningful `alt` text on images that carry content, and `alt=""` on decorative ones.
- [ ] Links to related pages inside the main content.
- [ ] Main content isn't behind a plain `@defer`, and nothing important loads only in the browser.

### 4.3 Page-specific notes

| Page | SEO work | Structured data |
| --- | --- | --- |
| **Home** | Must explain the whole product. Must keep the old home page's important topics (see 2.2). Links to features, industries, About, Demo and the license content. | `Organization` with LinkedIn in `sameAs`, `WebSite` and `SoftwareApplication` |
| **About** | Company story, team and experience. Mention Dyna Systems as the company behind DynaOps365. Keep what still applies from the old About page. | `AboutPage` and `Organization` |
| **Demo** | Short page, a working form and clear benefits. Any thank-you page gets `noindex` and stays out of the sitemap. | `BreadcrumbList` |
| **Feature pages** | One main topic per page, with unique text and not the same template copy. Link to related features and industries. | `SoftwareApplication` and `BreadcrumbList` |
| **Hub pages** | Short intro, and a real link to every child page. | `CollectionPage` and `BreadcrumbList` |

Only include facts that are true and visible on the page. Don't add ratings or prices you can't support, because Google can penalize misleading markup.

### 4.4 Feature pages to build

Each URL also needs its `/ar/` version.

- [ ] `/features/collections-management`
- [ ] `/features/commission-management`
- [ ] `/features/crm-activity-management`
- [ ] `/features/dashboards-analytics`
- [ ] `/features/gps-tracking`
- [ ] `/features/inventory-visibility`
- [ ] `/features/offline-mode`
- [ ] `/features/route-optimization`
- [ ] `/features/sales-order-management`
- [ ] `/features/sales-targets-kpis`
- [ ] `/features/trade-promotions`
- [ ] `/features/van-sales`
- [ ] `/features/visit-planning`
- [ ] `/features/workflow-approvals`
- [ ] `/features/dynaops365-ai` (when it's ready)

### 4.5 Remove the temporary home redirect

The new Home page replaces the redirect from `/` to the FMCG page. Remove it from all of these, or the new page won't be served:

- [ ] `src/app/app.routes.ts` (the `''` redirect)
- [ ] `public/.htaccess` (both root rules)
- [ ] `public/web.config` (both root rules)
- [ ] `scripts/write-static-redirects.mjs`, which would otherwise overwrite the Home page, along with its step in the `build` script in `package.json`. Keep its cleanup of `ar/web.config` and `ar/.htaccess`, because `/ar` breaks on IIS without it.

Then add `''` as `RenderMode.Prerender` in `src/app/app.routes.server.ts`, and confirm `/` and `/ar` are in the sitemap.

---

## 5. Redirect map

This is the most important step for keeping your rankings. Every old URL must reach the most relevant new page in one 301 redirect. Add any extra URLs found in section 1.

The redirects only protect rankings once the site is on `dynaops365.com`, but add them to the project before launch so you can test them on the temporary URL. They don't affect WordPress until then. The `www` rule won't run on the temporary URL, because it only matches `www.dynaops365.com`.

The target column assumes the recommendations in section 2.

| Old URL | New URL |
| --- | --- |
| `/` | `/` (no redirect, same URL) |
| `/about/` | `/about` |
| `/contact/` | `/contact` |
| `/blog/` | `/blog` |
| `/services/` | `/features` |
| `/d365-fo-license-enforcement/` | `/d365-fo-license-enforcement` |
| `/microsoft-license-enforcement-2025/` | `/microsoft-license-enforcement-2025` |
| `/dynamics-365-license-compliance-guide/` | `/dynamics-365-license-compliance-guide` |
| `/dynamics-365-license-compliance-guide/dynamics-365-user-license-validation/` | Same path, no trailing slash |
| `/dynamics-365-license-compliance-guide/what-happens-when-the-d365-grace-period-ends/` | Same path, no trailing slash |
| `/category/uncategorized/` | `/blog` |
| `/tag/*` (5 URLs) | `/blog` |
| `/author/*` (2 URLs) | `/about` |
| `/feed/`, `/comments/feed/` | `/blog` |
| `/sitemap_index.xml` | `/sitemap.xml` |
| `/wp-content/uploads/*` | Keep the files, or redirect important images to their new paths |

Rules to follow:

- Don't send everything to Home. Google can treat irrelevant redirects as soft 404s.
- Use 301 redirects, not meta refresh or JavaScript.
- Avoid chains. Old URLs should reach the final URL in one hop where possible.
- Pages that exist only as folders are already handled by the trailing-slash rule, as long as the new page exists.
- Keep the redirects for at least 1 year, and preferably permanently.

Add the rules above the existing rewrite rules, in both server config files.

**`public/.htaccess` (Apache):**

```apache
RewriteCond %{HTTP_HOST} ^www\.dynaops365\.com$ [NC]
RewriteRule ^(.*)$ https://dynaops365.com/$1 [R=301,L]

RewriteRule ^services/?$ /features [R=301,L]
RewriteRule ^tag/ /blog [R=301,L]
RewriteRule ^author/ /about [R=301,L]
```

**`public/web.config` (IIS):**

```xml
<rule name="WWW to bare domain" stopProcessing="true">
  <match url="(.*)" />
  <conditions>
    <add input="{HTTP_HOST}" pattern="^www\.dynaops365\.com$" />
  </conditions>
  <action type="Redirect" url="https://dynaops365.com/{R:1}" redirectType="Permanent" />
</rule>
<rule name="Old services page" stopProcessing="true">
  <match url="^services/?$" />
  <action type="Redirect" url="/features" redirectType="Permanent" />
</rule>
```

**Confirm which server production runs.** The temporary host runs IIS (`Server: Microsoft-IIS/10.0`), so only `web.config` is tested there. Production may differ, so rules that work on one may not work on the other. `dynaops365.com` currently responds with an `nginx` header. `.htaccess` only works if Apache runs behind it, and `web.config` only works on IIS. If production is nginx alone, neither file runs, and the redirects, trailing-slash rules and 404 page must be set in the nginx config or the hosting panel.

---

## 6. Test on the temporary URL before launch

Run these checks once the project is complete. Because the build is meant for production, its absolute URLs point to `dynaops365.com`, so check paths rather than following those links. Until launch, they lead to WordPress.

- [ ] Every path in the redirect map returns a 301 to the correct page (except the `www` rule, which is checked on launch day).
- [ ] A crawl of the site finds no internal 404s and no internal links to redirects.
- [ ] Unknown URLs return a real 404, in English and Arabic.
- [ ] The Arabic pages load correctly under `/ar`.
- [ ] Every path in the sitemap returns 200 on the temporary URL, and its page has a canonical of `https://dynaops365.com` plus that same path.
- [ ] The project's pages have no `noindex`, except the 404 pages and any thank-you page. The temporary URL's block must come only from the host, as set up in section 1.1.
- [ ] `robots.txt` allows crawling and points to `https://dynaops365.com/sitemap.xml`.
- [ ] Rich Results Test and Schema Markup Validator show no errors. If the temporary URL is password protected, paste in the page's HTML instead of the URL.
- [ ] Lighthouse on key pages: SEO at least 95, performance at least 90 on mobile. The host's `noindex` header will lower the SEO score, so ignore that one result here and rerun Lighthouse after launch.
- [ ] The Demo and Contact forms work and reach the right inbox.

---

## 7. Launch day

This is the day the new site replaces WordPress on `dynaops365.com`. Choose a low-traffic day, and avoid launching just before a weekend or holiday.

**Before the deployment:**

- [ ] Take the final WordPress backup, and refresh the Search Console exports and URL list. Add any new URLs to the redirect map.
- [ ] Confirm how WordPress will be removed. If the new files go into the same folder, old files such as `index.php` and its `.htaccess` may keep serving WordPress or conflict with the new rules. Check this with the host first.
- [ ] **Delete the `SITE_NOINDEX` variable in GitHub.** If it stays, the deployment sends `noindex` from `dynaops365.com` and removes the site from Google.
- [ ] Update the `HOST`, `USER` and `PASSWORD` secrets to the production server. Check `.github/workflows/deploy.yml` too, including its `port` and `protocol` values. The production host may also need a `server-dir` setting for its web folder.

**The deployment:**

- [ ] Deploy to `dynaops365.com`, and clear any host or CDN cache.

**After the deployment:**

- [ ] Open `view-source:` on the home page and confirm the new site is being served with no `noindex`, and check the response headers for `X-Robots-Tag`.
- [ ] Rerun the redirect, 404 and sitemap checks from section 6 against `dynaops365.com`, and rerun Lighthouse.
- [ ] Check link previews in the LinkedIn Post Inspector and Facebook Sharing Debugger. They can't read a password-protected URL, so this is the first reliable test.
- [ ] Run these checks from a terminal:

```bash
curl -sI https://www.dynaops365.com/about         # 301 to the bare domain
curl -sI http://dynaops365.com/about              # 301 to https
curl -sI https://dynaops365.com/about/            # 301 to /about
curl -sI https://dynaops365.com/about             # 200
curl -sI https://dynaops365.com/services/         # 301 to /features
curl -sI https://dynaops365.com/does-not-exist    # 404
curl -s  https://dynaops365.com/robots.txt
curl -s  https://dynaops365.com/sitemap.xml | head -20
```

- [ ] In Search Console, remove the old sitemap entries and submit `https://dynaops365.com/sitemap.xml`.
- [ ] Use URL Inspection to request indexing for Home, About, Demo and your top pages.
- [ ] Don't use the Change of Address tool. It's for moving between domains, and the public site stays on `dynaops365.com`. The temporary URL was never public to Google, so it doesn't count as a move.
- [ ] Keep analytics running, and confirm it records visits on the new site. This project doesn't have an analytics tool yet.

---

## 8. After launch

**First week, check daily:**

- [ ] Search Console Pages report: look for new 404s and "Page with redirect" issues.
- [ ] Any old URL that returns 404 and has traffic or backlinks gets a redirect right away.
- [ ] Rankings for your tracked queries, and any drop in organic traffic.
- [ ] Retire the temporary URL. Keep it blocked until the production site is confirmed stable, then shut it down. If it was indexed, 301 each page to the same path on `dynaops365.com` instead, until it drops out of Google.

**First 3 months, check weekly:**

- [ ] Compare clicks and impressions with the baseline, page by page.
- [ ] Core Web Vitals report.
- [ ] Sitemap status: submitted pages versus indexed pages.
- [ ] Hreflang tags: English and Arabic versions are being recognized correctly.

**If traffic drops:** compare by page, not site-wide. A drop on one URL usually means a missing redirect, or content that was removed or weakened. Restore that content first.

**Longer term:**

- [ ] Publish blog content regularly on field sales, van sales and Dynamics 365 integration.
- [ ] Ask partners, customers and directories to link to the new pages, and update any old links you control.
- [ ] Add real customer stories, with permission. They help both search and sales.
- [ ] Keep the English and Arabic pages in sync.
- [ ] Review titles and descriptions every quarter using the Search Console data.

---

## What's already done

These passed in the 2026-11-04 audit. Keep them working as you add pages.

- All current pages are prerendered, with their text in the HTML.
- Unknown URLs return a real 404 on the Node server. The static IIS host doesn't do this yet (see section 3).
- Each page has a unique title and description, one `<h1>`, and a correct canonical.
- Open Graph and hreflang tags are correct in both languages.
- `lang` and `dir` are correct on English and Arabic pages.
- The sitemap is generated at build time, and `robots.txt` allows crawling.
- Nav uses real links, and no image is missing its `alt` attribute.
- Copy overlap between industry pages is acceptable: 13% on average and 26% at most.

**Not yet tested:** Lighthouse scores, Rich Results Test and keyword research. Section 6 covers the first two, and the Search Console export from section 1 is the starting point for keywords.

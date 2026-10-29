import type { SiteConfig } from './site-config.model';

// Also referenced by src/index.html and scripts/generate-sitemap.mjs.
export const SITE_CONFIG: SiteConfig = {
  origin: 'https://www.dynaops365.com',
  name: 'DynaOps365',
  defaultImage: '/brand/og-default.png',
  ogLocale: { en: 'en_US', ar: 'ar_SA' },
};

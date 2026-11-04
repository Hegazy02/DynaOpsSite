import type { SiteConfig } from './site-config.model';

// Also referenced by src/index.html and scripts/generate-sitemap.mjs.
export const SITE_CONFIG: SiteConfig = {
  origin: 'https://dynaops365.com',
  name: 'DynaOps365',
  defaultImage: '/brand/og-default.png',
  defaultImageAlt: $localize`:@@header.logoAlt:DynaOps365 – Dynamics 365 Ops, in your hands`,
  ogLocale: { en: 'en_US', ar: 'ar_SA' },
};

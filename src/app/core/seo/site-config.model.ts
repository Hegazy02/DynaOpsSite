import type { Lang } from '../i18n/language.model';

export interface SiteConfig {
  // Canonical origin, no trailing slash.
  origin: string;
  name: string;
  // Site-relative path of the default social image (1200x630).
  defaultImage: string;
  ogLocale: Record<Lang, string>;
}

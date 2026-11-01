import type { IndustriesHeroDefaults } from './industries-hero.model';

// Shared by every industry page; src/locale/ar/industries.json carries the Arabic.
export const INDUSTRIES_HERO_DEFAULTS: IndustriesHeroDefaults = {
  cta: { label: $localize`:@@industries.hero.cta:Book a Demo`, href: '/demo' },
};

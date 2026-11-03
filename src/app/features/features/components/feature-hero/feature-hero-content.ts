import type { FeatureHeroDefaults } from './feature-hero.model';

// Shared by every feature page; src/locale/ar/features.json carries the Arabic.
export const FEATURE_HERO_DEFAULTS: FeatureHeroDefaults = {
  cta: { label: $localize`:@@features.hero.cta:Book a Demo`, href: '/demo' },
};

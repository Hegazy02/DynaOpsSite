import type { FmcgFeaturesContent } from './components/fmcg-features/fmcg-features.model';
import type { FmcgHeroContent } from './components/fmcg-hero/fmcg-hero.model';

export interface FmcgContent {
  // Document title; the site name is appended by the title strategy.
  title: string;
  // Meta description.
  description: string;
  hero: FmcgHeroContent;
  features: FmcgFeaturesContent;
}

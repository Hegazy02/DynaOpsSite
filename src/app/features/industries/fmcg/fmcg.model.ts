import type { IndustriesHeroCopy } from '../components/industries-hero/industries-hero.model';
import type { IndustriesIntegrationCopy } from '../components/industries-integration/industries-integration.model';
import type { IndustriesVisibilityCopy } from '../components/industries-visibility/industries-visibility.model';
import type { IndustryFeaturesContent } from '../components/industry-features/industry-features.model';

export interface FmcgContent {
  // Document title; the site name is appended by the title strategy.
  title: string;
  // Meta description.
  description: string;
  hero: IndustriesHeroCopy;
  features: IndustryFeaturesContent;
  integration: IndustriesIntegrationCopy;
  visibility: IndustriesVisibilityCopy;
}

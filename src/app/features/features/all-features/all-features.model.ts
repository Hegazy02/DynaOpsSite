import type { CtaContent } from '../../../shared/ui/cta-container/cta-container.model';
import type { ErpIntegrationCopy } from '../../../shared/ui/erp-integration/erp-integration.model';
import type { AllFeaturesGroupContent } from './components/all-features-group/all-features-group.model';
import type { AllFeaturesHeroContent } from './components/all-features-hero/all-features-hero.model';

// Copy and artwork of the features overview; its title and description live in all-features-seo.ts.
export interface AllFeaturesContent {
  hero: AllFeaturesHeroContent;
  catalog: AllFeaturesCatalog;
  integration: ErpIntegrationCopy;
  footerCta: CtaContent;
}

export interface AllFeaturesCatalog {
  // Anchor the hero's explore button scrolls to.
  id: string;
  title: string;
  description: string;
  groups: AllFeaturesGroupContent[];
}

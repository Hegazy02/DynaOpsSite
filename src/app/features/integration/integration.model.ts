import type { CtaContent } from '../../shared/ui/cta-container/cta-container.model';
import type { IntegrationErpContent } from './components/integration-erp/integration-erp.model';
import type { IntegrationFeaturesContent } from './components/integration-features/integration-features.model';
import type { IntegrationHeroContent } from './components/integration-hero/integration-hero.model';

// Copy and artwork of each section of the Integration page; its title and description live in integration-seo.ts.
export interface IntegrationContent {
  hero: IntegrationHeroContent;
  features: IntegrationFeaturesContent;
  erp: IntegrationErpContent;
  // Rendered at the top of the footer, with the connection artwork beside the copy.
  footerCta: CtaContent;
}

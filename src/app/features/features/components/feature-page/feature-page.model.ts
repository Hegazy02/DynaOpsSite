import type { CtaContent } from '../../../../shared/ui/cta-container/cta-container.model';
import type { ErpIntegrationCopy } from '../../../../shared/ui/erp-integration/erp-integration.model';
import type { FeatureCapabilitiesContent } from '../feature-capabilities/feature-capabilities.model';
import type { FeatureConnectionsContent } from '../feature-connections/feature-connections.model';
import type { FeatureHeroCopy } from '../feature-hero/feature-hero.model';
import type { FeatureShowcaseContent } from '../feature-showcase/feature-showcase.model';

// Copy and artwork of each section of a feature page; its title and description live in <page>-seo.ts.
export interface FeaturePageContent {
  hero: FeatureHeroCopy;
  capabilities: FeatureCapabilitiesContent;
  connections?: FeatureConnectionsContent;
  showcase?: FeatureShowcaseContent;
  integration: ErpIntegrationCopy;
  // Rendered at the top of the footer, with the device photo beside the copy.
  footerCta: CtaContent;
  footerCtaFormat?: FeatureFooterCtaFormat;
}

// Footer CTA wrapping where a page's Figma frame breaks a line the shared boxes would not.
export interface FeatureFooterCtaFormat {
  // Arabic title box on phones, keeping the phone frame's first line on every phone width.
  arabicPhoneTitleWidth?: 316;
}

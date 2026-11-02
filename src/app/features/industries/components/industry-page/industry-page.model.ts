import type { CtaContent } from '../../../../shared/ui/cta-container/cta-container.model';
import type { IndustriesHeroCopy } from '../industries-hero/industries-hero.model';
import type { IndustriesIntegrationCopy } from '../industries-integration/industries-integration.model';
import type { IndustriesVisibilityCopy } from '../industries-visibility/industries-visibility.model';
import type { IndustryFeaturesContent } from '../industry-features/industry-features.model';

// Everything an industry page supplies: route metadata plus the copy, artwork and icons of each section.
export interface IndustryPageContent {
  // Document title; the site name is appended by the title strategy.
  title: string;
  // Meta description.
  description: string;
  hero: IndustriesHeroCopy;
  features: IndustryFeaturesContent;
  integration: IndustriesIntegrationCopy;
  visibility: IndustriesVisibilityCopy;
  // Rendered at the top of the footer.
  footerCta: CtaContent;
  footerCtaFormat?: IndustryFooterCtaFormat;
}

// Footer CTA wrapping from xl where a page's Figma frame differs from the shared 800px title / 660px balanced description.
export interface IndustryFooterCtaFormat {
  englishTitleOneLine?: boolean;
  // English description wraps naturally in this box instead.
  englishDescriptionWidth?: 588;
  arabicDescriptionOneLine?: boolean;
  // Arabic title and description wrap naturally below xl instead of balancing.
  arabicNaturalWrapBelowXl?: boolean;
}

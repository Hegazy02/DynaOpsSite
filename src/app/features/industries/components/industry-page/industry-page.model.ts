import type { CtaContent } from '../../../../shared/ui/cta-container/cta-container.model';
import type { IndustriesHeroCopy } from '../industries-hero/industries-hero.model';
import type { ErpIntegrationCopy } from '../../../../shared/ui/erp-integration/erp-integration.model';
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
  integration: ErpIntegrationCopy;
  visibility: IndustriesVisibilityCopy;
  // Rendered at the top of the footer.
  footerCta: CtaContent;
  footerCtaFormat?: IndustryFooterCtaFormat;
}

// Footer CTA wrapping from xl where a page's Figma frame differs from the shared 800px title / 660px balanced description.
export interface IndustryFooterCtaFormat {
  englishTitleOneLine?: boolean;
  // English title wraps naturally at every width, in this box from xl.
  englishTitleWidth?: 640 | 660;
  // English title and description box on tablet, where the page's Figma frame lets it overrun the 48px padding.
  englishTabletTextWidth?: 640 | 660;
  // English description wraps naturally in this box instead.
  englishDescriptionWidth?: 551 | 588 | 604 | 660;
  // Arabic title and description share one line each from xl, past the shared 800px column.
  arabicTitleOneLine?: boolean;
  arabicDescriptionOneLine?: boolean;
  // Arabic title and description wrap naturally below xl instead of balancing.
  arabicNaturalWrapBelowXl?: boolean;
  // Narrower Arabic boxes that reproduce Figma's breaks, whose Arabic glyphs set wider than the web font.
  arabicTabletTitleWidth?: 560;
  arabicPhoneDescriptionWidth?: 308;
}

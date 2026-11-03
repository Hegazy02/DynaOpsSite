import { INDUSTRIES_HERO_DEFAULTS } from '../components/industries-hero/industries-hero-content';
import type { IndustriesHeroCopy } from '../components/industries-hero/industries-hero.model';
import type { ErpIntegrationCopy } from '../../../shared/ui/erp-integration/erp-integration.model';
import { INDUSTRIES_VISIBILITY_DEFAULTS } from '../components/industries-visibility/industries-visibility-content';
import type { IndustriesVisibilityCopy } from '../components/industries-visibility/industries-visibility.model';
import { pickFeatureCards } from '../components/industry-features/industry-features-content';
import type { IndustryFeaturesContent } from '../components/industry-features/industry-features.model';
import type { IndustryPageContent } from '../components/industry-page/industry-page.model';
import type { CtaContent } from '../../../shared/ui/cta-container/cta-container.model';

// Copy is English here; src/locale/ar/industries.json carries the Arabic under the same ids.
const HERO: IndustriesHeroCopy = {
  title: $localize`:@@pharmaceuticals.hero.title:Connect Pharmacy Sales with Microsoft Dynamics 365 F&O`,
  subtitle: $localize`:@@pharmaceuticals.hero.subtitle:DynaOps SFA helps pharmaceutical distributors manage pharmacy visits, medicine orders, product availability, and collections through a field sales solution integrated with`,
  emphasis: $localize`:@@pharmaceuticals.hero.emphasis:Microsoft Dynamics 365 Finance & Operations.`,
  image: {
    src: '/images/industries/pharmaceuticals/hero.webp',
    src3x: '/images/industries/pharmaceuticals/hero-3x.webp',
    alt: $localize`:@@pharmaceuticals.hero.imageAlt:A sales representative checking a phone outside a pharmacy with a green cross sign`,
    width: 440,
    height: 350,
  },
  tabletWidth: 554,
  arabicTabletWidth: { title: 554, subtitle: 486 },
  subtitleRole: 'subtitle',
};

const FEATURES: IndustryFeaturesContent = {
  eyebrow: {
    icon: '/icons/industries/hand-sanitizer-brand.svg',
    label: $localize`:@@pharmaceuticals.features.eyebrow:Sales force automation for pharmaceuticals`,
  },
  title: $localize`:@@pharmaceuticals.features.title:Built for Pharmaceutical Sales & Distribution`,
  description: $localize`:@@pharmaceuticals.features.description:Pharmaceutical distributors need to maintain customer coverage, capture medicine orders accurately, and work with reliable product and inventory information.`,
  titleTabletWidth: 640,
  titleOneLineFromXl: true,
  descriptionWidth: { tablet: 640, arabicDesktop: 506 },
  items: pickFeatureCards([
    'visit-planning',
    'sales-order-management',
    'inventory-visibility',
    'route-optimization',
    'collections-management',
    'gps-tracking',
  ]),
};

// Figma sets the two sentences as one text with a line break, kept on every width.
const INTEGRATION: ErpIntegrationCopy = {
  title: $localize`:@@pharmaceuticals.integration.title:Connected to Microsoft Dynamics 365 Finance & Operations`,
  paragraphs: [
    $localize`:@@pharmaceuticals.integration.paragraph-1:DynaOps connects field sales with your ERP's customer, product, pricing, and inventory data.`,
    $localize`:@@pharmaceuticals.integration.paragraph-2:Batch tracking and expiry management remain within Microsoft Dynamics 365 F&O, which supports batch-based shelf-life management when configured for relevant products.`,
  ],
  allParagraphsOnPhone: true,
};

// The dashboard and the Arabic right cursor are translated, so their paths are localized.
// The Arabic dashboard is padded onto the English 400x302 canvas so both share one placement.
const visibilityDir = $localize`:@@pharmaceuticals.visibility.imageDir:/images/industries/pharmaceuticals/visibility`;

const VISIBILITY: IndustriesVisibilityCopy = {
  title: $localize`:@@pharmaceuticals.visibility.title:Monitor Pharmaceutical Sales Performance`,
  paragraphs: [
    $localize`:@@pharmaceuticals.visibility.paragraph-1:Track pharmacy coverage, completed visits, sales targets, orders, and representative performance through DynaOps dashboards.`,
    $localize`:@@pharmaceuticals.visibility.paragraph-2:Compare activity across territories and identify customer accounts requiring follow-up.`,
    $localize`:@@pharmaceuticals.visibility.paragraph-3:Measure visit frequency against each pharmacy and hospital call plan, and see product orders across pharmacy chains by representative.`,
  ],
  lastParagraphDesktopOnly: true,
  image: {
    dashboard: `${visibilityDir}/dashboard.webp`,
    cursorLeft: INDUSTRIES_VISIBILITY_DEFAULTS.image.cursorLeft,
    cursorRight: $localize`:@@pharmaceuticals.visibility.cursorRight:/images/industries/visibility/cursor-right.svg`,
    alt: $localize`:@@pharmaceuticals.visibility.imageAlt:DynaOps pharma sales dashboard with visits, orders and coverage by territory, and a pharmacy needing follow-up`,
    width: 800,
    height: 604,
    placement: { left: 10, top: 12.3, width: 80 },
  },
};

const FOOTER_CTA: CtaContent = {
  title: $localize`:@@pharmaceuticals.cta.title:Connect Your Pharmaceutical Sales Network`,
  description: $localize`:@@pharmaceuticals.cta.description:See how DynaOps helps your team manage pharmacy relationships, medicine orders, and sales activities through one connected solution.`,
  button: INDUSTRIES_HERO_DEFAULTS.cta,
  // Figma crops the photo 32.2% into its height on desktop.
  image: {
    src: '/images/industries/pharmaceuticals/footer-cta.webp',
    width: 1200,
    height: 1200,
    coverOffset: 36,
  },
};

export const PHARMACEUTICALS_CONTENT: IndustryPageContent = {
  title: $localize`:@@pharmaceuticals.title:Pharmaceutical Field Sales`,
  // Reuses the hero paragraph until the page gets dedicated search copy.
  description: `${HERO.subtitle} ${HERO.emphasis}`,
  hero: HERO,
  features: FEATURES,
  integration: INTEGRATION,
  visibility: VISIBILITY,
  footerCta: FOOTER_CTA,
  footerCtaFormat: {
    englishTitleOneLine: true,
    englishDescriptionWidth: 604,
    arabicDescriptionOneLine: true,
    arabicNaturalWrapBelowXl: true,
  },
};

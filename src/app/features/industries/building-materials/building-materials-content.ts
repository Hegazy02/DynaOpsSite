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
// Figma sets this subtitle in plain Body/Medium, with no bold closing phrase.
const HERO: IndustriesHeroCopy = {
  title: $localize`:@@building-materials.hero.title:Manage Dealer and Contractor Sales with Microsoft Dynamics 365 F&O`,
  subtitle: $localize`:@@building-materials.hero.subtitle:DynaOps SFA helps building materials companies manage dealer relationships, contractor orders, customer-specific pricing, approvals, and collections through a field sales solution integrated with Microsoft Dynamics 365 Finance & Operations.`,
  image: {
    src: '/images/industries/building-materials/hero.webp',
    src3x: '/images/industries/building-materials/hero-3x.webp',
    alt: $localize`:@@building-materials.hero.imageAlt:A sales representative with a tablet beside stacked cement bags, bricks and palletised building materials`,
    width: 440,
    height: 350,
  },
  tabletWidth: 554,
  englishTitleWidth: { tablet: 516, phone: 320 },
  arabicTabletWidth: { title: 554, subtitle: 486 },
};

const FEATURES: IndustryFeaturesContent = {
  eyebrow: {
    icon: '/icons/industries/building-materials-brand.svg',
    label: $localize`:@@building-materials.features.eyebrow:Sales force automation for building materials`,
  },
  title: $localize`:@@building-materials.features.title:Built for Building Materials Sales Teams`,
  description: $localize`:@@building-materials.features.description:Selling construction materials to dealers, contractors, and distributors requires accurate pricing, reliable stock information, and coordinated sales activities across different territories.`,
  titleTabletWidth: 640,
  titleOneLineFromXl: true,
  descriptionWidth: { tablet: 640, arabicDesktop: 570 },
  items: pickFeatureCards([
    'customer-management',
    'sales-order-management',
    'inventory-visibility',
    'workflow-approvals',
    'collections-management',
    'crm-activity-management',
  ]),
};

// Figma sets the two sentences as one text with a line break, kept on every width.
const INTEGRATION: ErpIntegrationCopy = {
  title: $localize`:@@building-materials.integration.title:Connect Field Sales with Microsoft Dynamics 365 F&O`,
  paragraphs: [
    $localize`:@@building-materials.integration.paragraph-1:DynaOps extends Microsoft Dynamics 365 Finance & Operations to your building materials sales teams.`,
    $localize`:@@building-materials.integration.paragraph-2:Representatives can access ERP product data, customer pricing, and inventory information while keeping sales orders and collections connected with your core business system.`,
  ],
  allParagraphsOnPhone: true,
};

// The dashboard and the Arabic right cursor are translated, so their paths are localized.
const visibilityDir = $localize`:@@building-materials.visibility.imageDir:/images/industries/building-materials/visibility`;

const VISIBILITY: IndustriesVisibilityCopy = {
  title: $localize`:@@building-materials.visibility.title:Better Visibility Across Your Sales Territories`,
  paragraphs: [
    $localize`:@@building-materials.visibility.paragraph-1:Monitor sales targets, representative performance, customer activity, and order values through DynaOps dashboards.`,
    $localize`:@@building-materials.visibility.paragraph-2:Compare performance across territories and identify customer accounts requiring follow-up, giving managers a clearer view of sales execution.`,
    $localize`:@@building-materials.visibility.paragraph-3:Track productive calls, average order value, and route adherence for every representative, and flag outlets whose order trend is declining.`,
  ],
  lastParagraphDesktopOnly: true,
  image: {
    dashboard: `${visibilityDir}/dashboard.webp`,
    cursorLeft: INDUSTRIES_VISIBILITY_DEFAULTS.image.cursorLeft,
    cursorRight: $localize`:@@building-materials.visibility.cursorRight:/images/industries/visibility/cursor-right.svg`,
    alt: $localize`:@@building-materials.visibility.imageAlt:DynaOps sales by territory dashboard with order values against target and a contractor quote needing follow-up`,
    width: 800,
    height: 598,
    placement: { left: 10, top: 12.75, width: 80 },
  },
};

const FOOTER_CTA: CtaContent = {
  title: $localize`:@@building-materials.cta.title:Bring Your Building Materials Sales Operations Together`,
  description: $localize`:@@building-materials.cta.description:See how DynaOps connects your sales representatives, customer accounts, and approval processes with Microsoft Dynamics 365 F&O`,
  button: INDUSTRIES_HERO_DEFAULTS.cta,
  // Figma crops the photo 22.7% into its height on desktop.
  image: {
    src: '/images/industries/building-materials/footer-cta.webp',
    width: 1200,
    height: 1200,
    coverOffset: 22.7,
  },
};

export const BUILDING_MATERIALS_CONTENT: IndustryPageContent = {
  title: $localize`:@@building-materials.title:Building Materials Field Sales`,
  // Reuses the hero paragraph until the page gets dedicated search copy.
  description: HERO.subtitle,
  hero: HERO,
  features: FEATURES,
  integration: INTEGRATION,
  visibility: VISIBILITY,
  footerCta: FOOTER_CTA,
  footerCtaFormat: {
    englishTitleWidth: 660,
    englishDescriptionWidth: 660,
    englishTabletTextWidth: 660,
    arabicDescriptionOneLine: true,
    arabicNaturalWrapBelowXl: true,
  },
};

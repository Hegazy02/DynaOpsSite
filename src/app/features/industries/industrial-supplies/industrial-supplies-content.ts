import { INDUSTRIES_HERO_DEFAULTS } from '../components/industries-hero/industries-hero-content';
import type { IndustriesHeroCopy } from '../components/industries-hero/industries-hero.model';
import type { IndustriesIntegrationCopy } from '../components/industries-integration/industries-integration.model';
import { INDUSTRIES_VISIBILITY_DEFAULTS } from '../components/industries-visibility/industries-visibility-content';
import type { IndustriesVisibilityCopy } from '../components/industries-visibility/industries-visibility.model';
import { pickFeatureCards } from '../components/industry-features/industry-features-content';
import type { IndustryFeaturesContent } from '../components/industry-features/industry-features.model';
import type { IndustryPageContent } from '../components/industry-page/industry-page.model';
import type { CtaContent } from '../../../shared/ui/cta-container/cta-container.model';

// Copy is English here; src/locale/ar/industries.json carries the Arabic under the same ids.
const HERO: IndustriesHeroCopy = {
  title: $localize`:@@industrial-supplies.hero.title:Keep Industrial Sales Connected with Microsoft Dynamics 365 F&O`,
  subtitle: $localize`:@@industrial-supplies.hero.subtitle:DynaOps SFA helps industrial supplies distributors manage customer accounts, product availability, sales orders, pricing, and collections through a field sales solution integrated with`,
  emphasis: $localize`:@@industrial-supplies.hero.emphasis:Microsoft Dynamics 365 Finance & Operations.`,
  image: {
    src: '/images/industries/industrial-supplies/hero.webp',
    src3x: '/images/industries/industrial-supplies/hero-3x.webp',
    alt: $localize`:@@industrial-supplies.hero.imageAlt:A sales representative with a tablet beside boxed electric motors, drums and a toolbox on a pallet truck`,
    width: 440,
    height: 350,
  },
  tabletWidth: 554,
  arabicTabletWidth: { title: 554, subtitle: 486 },
  englishDesktopSubtitleWidth: 558,
  subtitleRole: 'subtitle',
};

const FEATURES: IndustryFeaturesContent = {
  eyebrow: {
    icon: '/icons/industries/package-sent-brand.svg',
    label: $localize`:@@industrial-supplies.features.eyebrow:Sales force automation for industrial supplies`,
  },
  title: $localize`:@@industrial-supplies.features.title:Built for Industrial Supply Sales`,
  description: $localize`:@@industrial-supplies.features.description:Serving factories, maintenance teams, and industrial businesses requires accurate product information, dependable stock visibility, and effective account management. Product availability, range, and pricing are established priorities for industrial distribution customers.`,
  titleTabletWidth: 640,
  descriptionWidth: { tablet: 640, arabicDesktop: 570 },
  items: pickFeatureCards([
    'customer-management',
    'crm-activity-management',
    'inventory-visibility',
    'sales-order-management',
    'workflow-approvals',
    'collections-management',
  ]),
};

// Figma sets the sentences as one text with line breaks, kept on every width.
// The Arabic copy has two paragraphs, so its third id is empty and dropped here.
const INTEGRATION: IndustriesIntegrationCopy = {
  title: $localize`:@@industrial-supplies.integration.title:Connect Industrial Sales with Microsoft Dynamics 365 F&O`,
  paragraphs: [
    $localize`:@@industrial-supplies.integration.paragraph-1:DynaOps extends Microsoft Dynamics 365 Finance & Operations into your field sales operations.`,
    $localize`:@@industrial-supplies.integration.paragraph-2:Representatives access customer, product, pricing, and inventory information while keeping sales orders and collections connected to the ERP.`,
    $localize`:@@industrial-supplies.integration.paragraph-3:Microsoft Dynamics 365 F&O remains your core business system.`,
  ].filter((paragraph) => paragraph),
  allParagraphsOnPhone: true,
};

// The dashboard and the Arabic right cursor are translated, so their paths are localized.
const visibilityDir = $localize`:@@industrial-supplies.visibility.imageDir:/images/industries/industrial-supplies/visibility`;

const VISIBILITY: IndustriesVisibilityCopy = {
  title: $localize`:@@industrial-supplies.visibility.title:Monitor Industrial Sales Across Accounts & Territories`,
  paragraphs: [
    $localize`:@@industrial-supplies.visibility.paragraph-1:Track sales targets, representative performance, customer activities, and order values through DynaOps dashboards.`,
    $localize`:@@industrial-supplies.visibility.paragraph-2:Compare sales performance across territories and identify industrial accounts requiring follow-up or additional attention.`,
    $localize`:@@industrial-supplies.visibility.paragraph-3:Follow project and contract accounts from quotation to repeat order, and check credit limits and open balances before new orders are approved.`,
  ],
  lastParagraphDesktopOnly: true,
  image: {
    dashboard: `${visibilityDir}/dashboard.webp`,
    cursorLeft: INDUSTRIES_VISIBILITY_DEFAULTS.image.cursorLeft,
    cursorRight: $localize`:@@industrial-supplies.visibility.cursorRight:/images/industries/visibility/cursor-right.svg`,
    alt: $localize`:@@industrial-supplies.visibility.imageAlt:DynaOps account activity dashboard with order value against target, recent activity and an account needing follow-up`,
    width: 800,
    height: 614,
    placement: { left: 10, top: 11.75, width: 80 },
  },
};

const FOOTER_CTA: CtaContent = {
  title: $localize`:@@industrial-supplies.cta.title:Connect Your Industrial Sales Team with DynaOps`,
  description: $localize`:@@industrial-supplies.cta.description:See how DynaOps brings industrial customer accounts, sales orders, and field activities together with Microsoft Dynamics 365 F&O`,
  button: INDUSTRIES_HERO_DEFAULTS.cta,
  // Figma crops the photo 12.6% into its height on desktop.
  image: {
    src: '/images/industries/industrial-supplies/footer-cta.webp',
    width: 1200,
    height: 1200,
    coverOffset: 12.6,
  },
};

export const INDUSTRIAL_SUPPLIES_CONTENT: IndustryPageContent = {
  title: $localize`:@@industrial-supplies.title:Industrial Supplies Sales Software for D365`,
  description: $localize`:@@industrial-supplies.description:Improve industrial supplies sales: manage accounts, product availability, orders, pricing and collections with DynaOps SFA, integrated with Dynamics 365 F&O.`,
  hero: HERO,
  features: FEATURES,
  integration: INTEGRATION,
  visibility: VISIBILITY,
  footerCta: FOOTER_CTA,
  footerCtaFormat: {
    englishTitleWidth: 640,
    englishTabletTextWidth: 640,
    englishDescriptionWidth: 551,
    arabicTitleOneLine: true,
    arabicDescriptionOneLine: true,
    arabicNaturalWrapBelowXl: true,
  },
};

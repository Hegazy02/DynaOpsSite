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
  title: $localize`:@@manufacturing.hero.title:Connect Your Manufacturing Sales Network with Microsoft Dynamics 365 F&O`,
  subtitle: $localize`:@@manufacturing.hero.subtitle:DynaOps SFA helps manufacturers manage distributor relationships, customer orders, product availability, and sales approvals through a field sales solution integrated with`,
  emphasis: $localize`:@@manufacturing.hero.emphasis:Microsoft Dynamics 365 Finance & Operations.`,
  image: {
    src: '/images/industries/manufacturing/hero.webp',
    src3x: '/images/industries/manufacturing/hero-3x.webp',
    alt: $localize`:@@manufacturing.hero.imageAlt:A sales representative with a tablet beside pallets of boxed goods at a factory loading bay`,
    width: 440,
    height: 350,
  },
  tabletWidth: 580,
};

const FEATURES: IndustryFeaturesContent = {
  eyebrow: {
    icon: '/icons/industries/factory-brand.svg',
    label: $localize`:@@manufacturing.features.eyebrow:Sales force automation for Manufacturing`,
  },
  title: $localize`:@@manufacturing.features.title:Built for Manufacturers Selling Through Distribution Networks`,
  description: $localize`:@@manufacturing.features.description:Manufacturers selling finished goods through distributors, dealers, and business customers need coordinated account coverage, accurate product information, and consistent sales processes.`,
  titleTabletWidth: 640,
  descriptionWidth: { tablet: 640, desktop: 780, arabicDesktop: 640 },
  items: pickFeatureCards([
    'customer-management',
    'sales-order-management',
    'inventory-visibility',
    'workflow-approvals',
    'sales-targets-kpis',
    'commission-management',
  ]),
};

const INTEGRATION: IndustriesIntegrationCopy = {
  title: $localize`:@@manufacturing.integration.title:Extend Microsoft Dynamics 365 F&O into Field Sales`,
  paragraphs: [
    $localize`:@@manufacturing.integration.paragraph-1:DynaOps connects your manufacturing sales teams with Microsoft Dynamics 365 Finance & Operations.`,
    $localize`:@@manufacturing.integration.paragraph-2:Representatives access ERP customer, product, pricing, and inventory data while keeping sales orders and collections connected to your core business system.`,
  ],
  allParagraphsOnTablet: true,
};

// The dashboard and the Arabic right cursor are translated, so their paths are localized.
const visibilityDir = $localize`:@@manufacturing.visibility.imageDir:/images/industries/manufacturing/visibility`;

const VISIBILITY: IndustriesVisibilityCopy = {
  title: $localize`:@@manufacturing.visibility.title:Visibility Across Your Sales Channels`,
  paragraphs: [
    $localize`:@@manufacturing.visibility.paragraph-1:Monitor sales targets, order activity, and representative performance through DynaOps dashboards.`,
    $localize`:@@manufacturing.visibility.paragraph-2:Compare results across territories and regions, track distributor account activities, and identify customers requiring follow-up.`,  ],
  image: {
    dashboard: `${visibilityDir}/dashboard.webp`,
    cursorLeft: INDUSTRIES_VISIBILITY_DEFAULTS.image.cursorLeft,
    cursorRight: $localize`:@@manufacturing.visibility.cursorRight:/images/industries/visibility/cursor-right.svg`,
    alt: $localize`:@@manufacturing.visibility.imageAlt:DynaOps sales channels dashboard with revenue by channel, target by region, and a distributor needing follow-up`,
    width: 800,
    height: 624,
    placement: { left: 10, top: 11.04, width: 80 },
  },
};

const FOOTER_CTA: CtaContent = {
  title: $localize`:@@manufacturing.cta.title:Connect Your Manufacturing Sales Operations`,
  description: $localize`:@@manufacturing.cta.description:Discover how DynaOps brings distributor relationships, customer orders, and sales approvals together with Microsoft Dynamics 365 F&O`,
  button: INDUSTRIES_HERO_DEFAULTS.cta,
  // Figma crops the photo 35.8% into its height on desktop.
  image: {
    src: '/images/industries/manufacturing/footer-cta.webp',
    width: 1200,
    height: 1200,
    coverOffset: 35.8,
  },
};

export const MANUFACTURING_CONTENT: IndustryPageContent = {
  title: $localize`:@@manufacturing.title:Manufacturing Sales Software for Dynamics 365`,
  description: $localize`:@@manufacturing.description:Give manufacturers better control of distributor relationships, customer orders, product availability and sales approvals, integrated with Dynamics 365 F&O.`,
  hero: HERO,
  features: FEATURES,
  integration: INTEGRATION,
  visibility: VISIBILITY,
  footerCta: FOOTER_CTA,
  footerCtaFormat: {
    englishTitleOneLine: true,
    englishDescriptionWidth: 588,
    arabicDescriptionOneLine: true,
    arabicNaturalWrapBelowXl: true,
  },
};

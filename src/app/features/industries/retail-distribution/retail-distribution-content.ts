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
  title: $localize`:@@retail-distribution.hero.title:Connect Every Retail Outlet to Your Sales Operations`,
  subtitle: $localize`:@@retail-distribution.hero.subtitle:DynaOps SFA helps retail distributors manage store visits, retailer orders, van sales, and promotions through a field sales solution integrated with`,
  emphasis: $localize`:@@retail-distribution.hero.emphasis:Microsoft Dynamics 365 Finance & Operations.`,
  image: {
    src: '/images/industries/retail-distribution/hero.webp',
    src3x: '/images/industries/retail-distribution/hero-3x.webp',
    alt: $localize`:@@retail-distribution.hero.imageAlt:A sales representative with a tablet at the entrance of a retail store`,
    width: 440,
    height: 350,
  },
};

const FEATURES: IndustryFeaturesContent = {
  eyebrow: {
    icon: '/icons/industries/pie-chart-02-brand.svg',
    label: $localize`:@@retail-distribution.features.eyebrow:Sales force automation for retail distribution`,
  },
  title: $localize`:@@retail-distribution.features.title:Built for Retail Distribution Networks`,
  description: $localize`:@@retail-distribution.features.description:Managing sales across supermarkets, convenience stores, and independent retailers means coordinating frequent store visits, replenishment orders, and promotional offers.`,
  items: pickFeatureCards([
    'visit-planning',
    'route-optimization',
    'gps-tracking',
    'trade-promotions',
    'sales-order-management',
    'van-sales',
  ]),
};

const INTEGRATION: ErpIntegrationCopy = {
  title: $localize`:@@retail-distribution.integration.title:Retail Sales Connected to Microsoft Dynamics 365 F&O`,
  paragraphs: [
    $localize`:@@retail-distribution.integration.paragraph-1:DynaOps connects retail field sales with Microsoft Dynamics 365 Finance & Operations.`,
    $localize`:@@retail-distribution.integration.paragraph-2:Representatives can access customer records, product information, pricing, and inventory while creating sales transactions connected to your ERP.`,
    // English only, as in Figma: the Arabic translation is empty and dropped below.
    $localize`:@@retail-distribution.integration.paragraph-3:Microsoft Dynamics 365 F&O remains your core business system.`,
  ].filter(Boolean),
};

// The dashboard and the Arabic right cursor are translated, so their paths are localized.
const visibilityDir = $localize`:@@retail-distribution.visibility.imageDir:/images/industries/retail-distribution/visibility`;

const VISIBILITY: IndustriesVisibilityCopy = {
  title: $localize`:@@retail-distribution.visibility.title:See How Your Retail Network Is Performing`,
  paragraphs: [
    $localize`:@@retail-distribution.visibility.paragraph-1:Monitor store coverage, completed visits, sales orders, and representative performance through DynaOps dashboards.`,
    $localize`:@@retail-distribution.visibility.paragraph-2:Compare activity across territories, identify outlets that have not been visited, and understand where additional sales attention is needed.`,
    $localize`:@@retail-distribution.visibility.paragraph-3:Combine store visits with shelf and stock checks, and see orders by store, chain, and city to find where sell-out is falling behind.`,
  ],
  image: {
    dashboard: `${visibilityDir}/dashboard.webp`,
    cursorLeft: INDUSTRIES_VISIBILITY_DEFAULTS.image.cursorLeft,
    cursorRight: $localize`:@@retail-distribution.visibility.cursorRight:/images/industries/visibility/cursor-right.svg`,
    alt: $localize`:@@retail-distribution.visibility.imageAlt:DynaOps retail sales dashboard with progress against target and outlet activity`,
    width: 800,
    height: 624,
    placement: { left: 10, top: 11, width: 80 },
  },
};

const FOOTER_CTA: CtaContent = {
  title: $localize`:@@retail-distribution.cta.title:Connect Your Retail Network with DynaOps`,
  description: $localize`:@@retail-distribution.cta.description:Discover how DynaOps brings retail visits, orders, and field sales activities together in one connected solution.`,
  button: INDUSTRIES_HERO_DEFAULTS.cta,
  // Figma crops the photo 33.4% into its height on desktop.
  image: {
    src: '/images/industries/retail-distribution/footer-cta.webp',
    width: 1200,
    height: 1200,
    coverOffset: 33.4,
  },
};

export const RETAIL_DISTRIBUTION_CONTENT: IndustryPageContent = {
  title: $localize`:@@retail-distribution.title:Retail Field Sales Software for Dynamics 365`,
  description: $localize`:@@retail-distribution.description:Streamline retail distribution: manage store visits, retailer orders, van sales and promotions with DynaOps SFA, integrated with Microsoft Dynamics 365 F&O.`,
  hero: HERO,
  features: FEATURES,
  integration: INTEGRATION,
  visibility: VISIBILITY,
  footerCta: FOOTER_CTA,
};

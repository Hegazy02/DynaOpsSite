import { INDUSTRIES_HERO_DEFAULTS } from '../components/industries-hero/industries-hero-content';
import type { IndustriesHeroCopy } from '../components/industries-hero/industries-hero.model';
import type { ErpIntegrationCopy } from '../../../shared/ui/erp-integration/erp-integration.model';
import { INDUSTRIES_VISIBILITY_DEFAULTS } from '../components/industries-visibility/industries-visibility-content';
import type { IndustriesVisibilityCopy } from '../components/industries-visibility/industries-visibility.model';
import { pickFeatureCards } from '../../../shared/ui/feature-card/feature-card-content';
import type { IndustryFeaturesContent } from '../components/industry-features/industry-features.model';
import type { IndustryPageContent } from '../components/industry-page/industry-page.model';
import type { CtaContent } from '../../../shared/ui/cta-container/cta-container.model';

// Copy is English here; src/locale/ar/industries.json carries the Arabic under the same ids.
const HERO: IndustriesHeroCopy = {
  title: $localize`:@@food-beverage.hero.title:Keep Your Distribution Sales Connected with Microsoft Dynamics 365 F&O`,
  subtitle: $localize`:@@food-beverage.hero.subtitle:DynaOps SFA helps food and beverage distributors manage customer visits, recurring orders, van sales, and collections through a connected field sales solution built for`,
  emphasis: $localize`:@@food-beverage.hero.emphasis:Microsoft Dynamics 365 Finance & Operations.`,
  image: {
    src: '/images/industries/food-beverage/hero.webp',
    src3x: '/images/industries/food-beverage/hero-3x.webp',
    alt: $localize`:@@food-beverage.hero.imageAlt:A sales representative using a tablet beside food shelves and beverage fridges`,
    width: 440,
    height: 350,
  },
};

const FEATURES: IndustryFeaturesContent = {
  eyebrow: {
    icon: '/icons/industries/vegetarian-food-brand.svg',
    label: $localize`:@@food-beverage.features.eyebrow:Sales force automation for food and beverage`,
  },
  title: $localize`:@@food-beverage.features.title:Built for the Demands of Food & Beverage Distribution`,
  description: $localize`:@@food-beverage.features.description:From grocery stores and supermarkets to restaurants and wholesalers, food and beverage sales teams manage frequent customer visits, repeat orders, and changing inventory requirements.`,
  items: pickFeatureCards([
    {
      id: 'van-sales',
      title: $localize`:@@food-beverage.features.van-sales.title:Van Sales & Stock`,
      description: $localize`:@@food-beverage.features.van-sales.description:Support direct selling from vehicles with visibility into van inventory and customer sales transactions.`,
    },
    {
      id: 'inventory-visibility',
      title: $localize`:@@food-beverage.features.inventory-visibility.title:Inventory Visibility`,
      description: $localize`:@@food-beverage.features.inventory-visibility.description:View available stock across relevant warehouses to understand where inventory is currently held.`,
    },
    {
      id: 'sales-order-management',
      title: $localize`:@@food-beverage.features.sales-order-management.title:Faster Order Capture`,
      description: $localize`:@@food-beverage.features.sales-order-management.description:Create customer orders during visits with access to product information, pricing, and available inventory from your ERP.`,
    },
    {
      id: 'visit-planning',
      title: $localize`:@@food-beverage.features.visit-planning.title:Visit Planning`,
      description: $localize`:@@food-beverage.features.visit-planning.description:Plan customer visits and optimize sales routes using automated, dynamic, and AI-powered route optimization.`,
    },
    {
      id: 'route-optimization',
      title: $localize`:@@food-beverage.features.route-optimization.title:Smarter Sales Routes`,
      description: $localize`:@@food-beverage.features.route-optimization.description:Plan recurring customer visits and optimize sales routes with AI-powered, automated, and dynamic route optimization.`,
    },
    {
      id: 'collections-management',
      title: $localize`:@@food-beverage.features.collections-management.title:Customer Collections`,
      description: $localize`:@@food-beverage.features.collections-management.description:Record customer payments during field visits and keep collection activities connected with your ERP processes.`,
    },
  ]),
};

const INTEGRATION: ErpIntegrationCopy = {
  title: $localize`:@@food-beverage.integration.title:Your Field Sales, Connected to Microsoft Dynamics 365 F&O`,
  paragraphs: [
    $localize`:@@food-beverage.integration.paragraph-1:DynaOps connects field sales transactions with Microsoft Dynamics 365 Finance & Operations, keeping customer, product, pricing, and inventory information aligned with your ERP processes.`,
    $localize`:@@food-beverage.integration.paragraph-2:Batch tracking and expiry management remain within Microsoft Dynamics 365 F&O, where shelf-life capabilities can be configured for relevant products.`,
  ],
};

// The dashboard and the Arabic right cursor are translated, so their paths are localized.
const visibilityDir = $localize`:@@food-beverage.visibility.imageDir:/images/industries/food-beverage/visibility`;

const VISIBILITY: IndustriesVisibilityCopy = {
  title: $localize`:@@food-beverage.visibility.title:Know What's Happening Across Your Distribution Network`,
  paragraphs: [
    $localize`:@@food-beverage.visibility.paragraph-1:Monitor customer coverage, completed visits, sales orders, collections, and representative performance through DynaOps dashboards.`,
    $localize`:@@food-beverage.visibility.paragraph-2:Identify missed visits and sales activity gaps across routes and territories, giving managers a clearer picture of field execution.`,
    // Arabic only, as in Figma: the English source is empty and dropped below.
    $localize`:@@food-beverage.visibility.paragraph-3:`,
  ].filter(Boolean),
  image: {
    dashboard: `${visibilityDir}/dashboard.webp`,
    cursorLeft: INDUSTRIES_VISIBILITY_DEFAULTS.image.cursorLeft,
    cursorRight: $localize`:@@food-beverage.visibility.cursorRight:/images/industries/visibility/cursor-right.svg`,
    alt: $localize`:@@food-beverage.visibility.imageAlt:DynaOps distribution network dashboard with visits, orders, collections, and customer coverage by territory`,
    width: 800,
    height: 588,
    placement: { left: 10, top: 13.27, width: 80 },
  },
};

const FOOTER_CTA: CtaContent = {
  title: $localize`:@@food-beverage.cta.title:Ready to Connect Your Food & Beverage Sales Operations?`,
  description: $localize`:@@food-beverage.cta.description:See how DynaOps brings customer visits, sales orders, and distribution activities together with Microsoft Dynamics 365 F&O`,
  button: INDUSTRIES_HERO_DEFAULTS.cta,
  image: {
    src: '/images/industries/food-beverage/footer-cta.webp',
    width: 1200,
    height: 1200,
    coverOffset: 13,
  },
};

export const FOOD_BEVERAGE_CONTENT: IndustryPageContent = {
  hero: HERO,
  features: FEATURES,
  integration: INTEGRATION,
  visibility: VISIBILITY,
  footerCta: FOOTER_CTA,
};

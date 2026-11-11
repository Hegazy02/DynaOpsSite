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
  title: $localize`:@@consumer-goods.hero.title:Connect Retail Sales Execution with Microsoft Dynamics 365 F&O`,
  subtitle: $localize`:@@consumer-goods.hero.subtitle:DynaOps SFA helps consumer goods companies manage retailer relationships, field sales orders, pricing, promotions, and territory coverage through a sales automation solution connected to`,
  emphasis: $localize`:@@consumer-goods.hero.emphasis:Microsoft Dynamics 365 Finance & Operations.`,
  image: {
    src: '/images/industries/consumer-goods/hero.webp',
    src3x: '/images/industries/consumer-goods/hero-3x.webp',
    alt: $localize`:@@consumer-goods.hero.imageAlt:A sales representative with a tablet outside a retail store, beside a cart of boxed household products`,
    width: 440,
    height: 350,
  },
  arabicTabletWidth: { title: 554, subtitle: 504 },
  subtitleRole: 'subtitle',
};

const FEATURES: IndustryFeaturesContent = {
  eyebrow: {
    icon: '/icons/shared/safe-delivery-01-brand.svg',
    label: $localize`:@@consumer-goods.features.eyebrow:Sales force automation for consumer goods`,
  },
  title: $localize`:@@consumer-goods.features.title:Built for Consumer Goods Sales & Distribution`,
  description: $localize`:@@consumer-goods.features.description:Managing consumer goods sales across retailers, distributors, and wholesale accounts requires accurate product information, consistent customer coverage, and control over pricing and discounts.`,
  titleTabletWidth: 640,
  titleOneLineFromXl: true,
  descriptionWidth: { tablet: 640, desktop: 840, arabicDesktop: 506 },
  items: pickFeatureCards([
    {
      id: 'trade-promotions',
      title: $localize`:@@consumer-goods.features.trade-promotions.title:Trade Promotions`,
      description: $localize`:@@consumer-goods.features.trade-promotions.description:Make approved promotional offers available to sales representatives during customer sales activities.`,
    },
    {
      id: 'sales-order-management',
      title: $localize`:@@consumer-goods.features.sales-order-management.title:Sales Order Management`,
      description: $localize`:@@consumer-goods.features.sales-order-management.description:Capture retailer and wholesale orders during customer visits, keeping sales transactions connected with your ERP processes.`,
    },
    {
      id: 'customer-management',
      title: $localize`:@@consumer-goods.features.customer-management.title:Customer Management`,
      description: $localize`:@@consumer-goods.features.customer-management.description:Access key account information and customer details needed during sales visits and follow-ups.`,
    },
    {
      id: 'inventory-visibility',
      title: $localize`:@@consumer-goods.features.inventory-visibility.title:Product & Pricing Visibility`,
      description: $localize`:@@consumer-goods.features.inventory-visibility.description:Give representatives access to product information, customer-specific pricing, and available inventory from Microsoft Dynamics 365.`,
    },
    {
      id: 'workflow-approvals',
      title: $localize`:@@consumer-goods.features.workflow-approvals.title:Discount & Order Approvals`,
      description: $localize`:@@consumer-goods.features.workflow-approvals.description:Use configurable workflows to route sales orders and discount requests for approval based on your business rules.`,
    },
    {
      id: 'sales-targets-kpis',
      title: $localize`:@@consumer-goods.features.sales-targets-kpis.title:Sales Targets & KPIs`,
      description: $localize`:@@consumer-goods.features.sales-targets-kpis.description:Track performance against assigned sales targets and follow progress throughout the period.`,
    },
  ]),
};

// Figma sets the two sentences as one text with a line break, kept on every width.
const INTEGRATION: ErpIntegrationCopy = {
  title: $localize`:@@consumer-goods.integration.title:Connected to Microsoft Dynamics 365 Finance & Operations`,
  paragraphs: [
    $localize`:@@consumer-goods.integration.paragraph-1:DynaOps extends your existing ERP into field sales, connecting customer information, product data, pricing, inventory visibility, and sales transactions with Microsoft Dynamics 365 F&O.`,
    $localize`:@@consumer-goods.integration.paragraph-2:Your sales team works through a dedicated field sales solution while Microsoft Dynamics 365 F&O remains your core business system.`,
  ],
  allParagraphsOnPhone: true,
};

// The dashboard and the Arabic right cursor are translated, so their paths are localized.
const visibilityDir = $localize`:@@consumer-goods.visibility.imageDir:/images/industries/consumer-goods/visibility`;

const VISIBILITY: IndustriesVisibilityCopy = {
  title: $localize`:@@consumer-goods.visibility.title:Understand Performance Across Territories`,
  paragraphs: [
    $localize`:@@consumer-goods.visibility.paragraph-1:Track sales targets, representative performance, customer coverage, and order activity through DynaOps dashboards.`,
    $localize`:@@consumer-goods.visibility.paragraph-2:Compare results across territories and regions to identify accounts requiring attention and support more informed sales management decisions.`,
    $localize`:@@consumer-goods.visibility.paragraph-3:See target achievement by region and city, along with fast- and slow-moving SKUs in each territory.`,
  ],
  lastParagraphDesktopOnly: true,
  image: {
    dashboard: `${visibilityDir}/dashboard.webp`,
    cursorLeft: INDUSTRIES_VISIBILITY_DEFAULTS.image.cursorLeft,
    cursorRight: $localize`:@@consumer-goods.visibility.cursorRight:/images/industries/visibility/cursor-right.svg`,
    alt: $localize`:@@consumer-goods.visibility.imageAlt:DynaOps regional performance dashboard with coverage by region and city, and three accounts needing attention`,
    width: 800,
    height: 624,
    placement: { left: 10, top: 11, width: 80 },
  },
};

const FOOTER_CTA: CtaContent = {
  title: $localize`:@@consumer-goods.cta.title:Bring Your Consumer Goods Sales Operations Together`,
  description: $localize`:@@consumer-goods.cta.description:See how DynaOps connects your sales representatives, retail customers, and ERP processes in one field sales solution.`,
  button: INDUSTRIES_HERO_DEFAULTS.cta,
  // Figma centres the photo in the 350px frame, cropping 35.4% off its top on desktop.
  image: {
    src: '/images/industries/consumer-goods/footer-cta.webp',
    width: 1200,
    height: 1200,
    coverOffset: 35.4,
  },
};

export const CONSUMER_GOODS_CONTENT: IndustryPageContent = {
  hero: HERO,
  features: FEATURES,
  integration: INTEGRATION,
  visibility: VISIBILITY,
  footerCta: FOOTER_CTA,
  footerCtaFormat: {
    englishTitleWidth: 660,
    arabicDescriptionOneLine: true,
    arabicNaturalWrapBelowXl: true,
    arabicTabletTitleWidth: 560,
    arabicPhoneDescriptionWidth: 308,
  },
};

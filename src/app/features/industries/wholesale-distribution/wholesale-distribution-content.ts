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
  title: $localize`:@@wholesale-distribution.hero.title:Simplify Wholesale Sales with Microsoft Dynamics 365 F&O`,
  subtitle: $localize`:@@wholesale-distribution.hero.subtitle:DynaOps SFA helps wholesale distributors manage customer accounts, repeat orders, pricing, collections, and sales approvals through a field sales solution connected to`,
  emphasis: $localize`:@@wholesale-distribution.hero.emphasis:Microsoft Dynamics 365 Finance & Operations.`,
  image: {
    src: '/images/industries/wholesale-distribution/hero.webp',
    src3x: '/images/industries/wholesale-distribution/hero-3x.webp',
    alt: $localize`:@@wholesale-distribution.hero.imageAlt:A sales representative with a tablet checking wrapped pallets of stock in a warehouse`,
    width: 440,
    height: 350,
  },
};

const FEATURES: IndustryFeaturesContent = {
  eyebrow: {
    icon: '/icons/industries/radial-brand.svg',
    label: $localize`:@@wholesale-distribution.features.eyebrow:Sales force automation for wholesale distribution`,
  },
  title: $localize`:@@wholesale-distribution.features.title:Built for Wholesale Sales Operations`,
  description: $localize`:@@wholesale-distribution.features.description:Wholesale sales teams manage multiple business accounts, recurring orders, negotiated pricing, and outstanding customer payments.`,
  descriptionWidth: { desktop: 586 },
  items: pickFeatureCards([
    {
      id: 'customer-management',
      title: $localize`:@@wholesale-distribution.features.customer-management.title:Customer Account Management`,
      description: $localize`:@@wholesale-distribution.features.customer-management.description:Access customer information and activity history to prepare for visits, follow up on previous interactions, and manage wholesale relationships.`,
    },
    {
      id: 'sales-order-management',
      title: $localize`:@@wholesale-distribution.features.sales-order-management.title:Wholesale Order Capture`,
      description: $localize`:@@wholesale-distribution.features.sales-order-management.description:Create sales orders directly during customer visits, keeping repeat purchases and new transactions connected with your ERP processes.`,
    },
    {
      id: 'inventory-visibility',
      title: $localize`:@@wholesale-distribution.features.inventory-visibility.title:Customer-Specific Pricing & Inventory`,
      description: $localize`:@@wholesale-distribution.features.inventory-visibility.description:Check account-specific prices, product information, and available stock from Microsoft Dynamics 365 before creating customer orders.`,
    },
    {
      id: 'collections-management',
      title: $localize`:@@wholesale-distribution.features.collections-management.title:Field Collections`,
      description: $localize`:@@wholesale-distribution.features.collections-management.description:Record customer payments during account visits and connect collection transactions with your organization’s financial processes.`,
    },
    {
      id: 'workflow-approvals',
      title: $localize`:@@wholesale-distribution.features.workflow-approvals.title:Sales & Discount Approvals`,
      description: $localize`:@@wholesale-distribution.features.workflow-approvals.description:Route sales orders and discount requests through configurable workflows based on transaction amounts, discount percentages, or other defined business rules.`,
    },
    {
      id: 'crm-activity-management',
      title: $localize`:@@wholesale-distribution.features.crm-activity-management.title:CRM & Activity Management`,
      description: $localize`:@@wholesale-distribution.features.crm-activity-management.description:See visits, activities, sales orders, collections, and customer interactions in one chronological history.`,
    },
  ]),
};

const INTEGRATION: ErpIntegrationCopy = {
  title: $localize`:@@wholesale-distribution.integration.title:Extend Microsoft Dynamics 365 F&O into Wholesale Sales`,
  paragraphs: [
    $localize`:@@wholesale-distribution.integration.paragraph-1:DynaOps connects wholesale field operations with Microsoft Dynamics 365 Finance & Operations.`,
    $localize`:@@wholesale-distribution.integration.paragraph-2:Sales representatives work with ERP customer records, pricing, product information, and inventory visibility while sales orders and collections remain connected with your organization's core business processes.`,
  ],
};

// The dashboard labels are translated, so each language has its own folder.
const visibilityDir = $localize`:@@wholesale-distribution.visibility.imageDir:/images/industries/wholesale-distribution/visibility`;

const VISIBILITY: IndustriesVisibilityCopy = {
  title: $localize`:@@wholesale-distribution.visibility.title:Better Control Over Wholesale Sales Performance`,
  paragraphs: [
    $localize`:@@wholesale-distribution.visibility.paragraph-1:Monitor sales targets, customer activity, orders, collections, and representative performance through DynaOps dashboards.`,
    $localize`:@@wholesale-distribution.visibility.paragraph-2:Gain visibility across territories and customer accounts to identify sales gaps, follow-up opportunities, and areas requiring management attention.`,
    $localize`:@@wholesale-distribution.visibility.paragraph-3:Keep track of customer credit limits, debt aging, and price-list compliance on bulk orders.`,
  ],
  image: {
    dashboard: `${visibilityDir}/dashboard.webp`,
    cursorLeft: INDUSTRIES_VISIBILITY_DEFAULTS.image.cursorLeft,
    cursorRight: INDUSTRIES_VISIBILITY_DEFAULTS.image.cursorRight,
    alt: $localize`:@@wholesale-distribution.visibility.imageAlt:DynaOps sales performance dashboard with progress against target and customer account statuses`,
    width: 800,
    height: 634,
    placement: { left: 10, top: 10.39, width: 80 },
  },
};

const FOOTER_CTA: CtaContent = {
  title: $localize`:@@wholesale-distribution.cta.title:Ready to Connect Your Wholesale Sales Operations?`,
  description: $localize`:@@wholesale-distribution.cta.description:Discover how DynaOps helps your team manage customer accounts, orders, and collections while staying connected with Microsoft Dynamics 365 F&O`,
  button: INDUSTRIES_HERO_DEFAULTS.cta,
  // Figma crops the photo 17.3% into its height on desktop.
  image: {
    src: '/images/industries/wholesale-distribution/footer-cta.webp',
    width: 1200,
    height: 1200,
    coverOffset: 17.3,
  },
};

export const WHOLESALE_DISTRIBUTION_CONTENT: IndustryPageContent = {
  hero: HERO,
  features: FEATURES,
  integration: INTEGRATION,
  visibility: VISIBILITY,
  footerCta: FOOTER_CTA,
};

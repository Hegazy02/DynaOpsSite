import { INDUSTRIES_HERO_DEFAULTS } from '../components/industries-hero/industries-hero-content';
import type { IndustriesHeroCopy } from '../components/industries-hero/industries-hero.model';
import type { IndustriesIntegrationCopy } from '../components/industries-integration/industries-integration.model';
import type { IndustriesVisibilityCopy } from '../components/industries-visibility/industries-visibility.model';
import type { IndustryFeaturesContent } from '../components/industry-features/industry-features.model';
import type { IndustryPageContent } from '../components/industry-page/industry-page.model';
import type { CtaContent } from '../../../shared/ui/cta-container/cta-container.model';

// Copy is English here; src/locale/ar/industries.json carries the Arabic under the same ids.
// The hero call to action comes from the shared hero defaults.
const HERO: IndustriesHeroCopy = {
  title: $localize`:@@fmcg.hero.title:Connect your FMCG field sales team with Microsoft Dynamics 365 F&O`,
  subtitle: $localize`:@@fmcg.hero.subtitle:DynaOps SFA helps FMCG companies manage field sales, customer visits, orders, collections, van sales, promotions, and routes while staying connected with`,
  emphasis: $localize`:@@fmcg.hero.emphasis:Microsoft Dynamics 365 Finance & Operations.`,
  image: {
    src: '/images/industries/hero-field-sales.svg',
    alt: $localize`:@@fmcg.hero.imageAlt:A sales representative checking orders beside a loaded delivery van`,
    width: 440,
    height: 350,
  },
};

// The card artwork contains UI text, so the image path is localized like the copy.
const FEATURES: IndustryFeaturesContent = {
  eyebrow: {
    icon: '/icons/industries/shopping-cart-check-02-brand.svg',
    label: $localize`:@@fmcg.features.eyebrow:Sales force automation for FMCG`,
  },
  title: $localize`:@@fmcg.features.title:Built for fast-moving field sales`,
  description: $localize`:@@fmcg.features.description:FMCG sales teams need to move quickly between customers while always having access to accurate information.`,
  items: [
    {
      title: $localize`:@@fmcg.features.visit-planning.title:Visit Planning`,
      description: $localize`:@@fmcg.features.visit-planning.description:Plan customer visits and optimize sales routes using automated, dynamic, and AI-powered route optimization.`,
      image: $localize`:@@fmcg.features.visit-planning.image:/images/industries/fmcg/features/visit-planning.webp`,
    },
    {
      title: $localize`:@@fmcg.features.route-optimization.title:Route Optimization`,
      description: $localize`:@@fmcg.features.route-optimization.description:Connect customer visits with location information and field activities for better visibility into sales execution.`,
      image: $localize`:@@fmcg.features.route-optimization.image:/images/industries/fmcg/features/route-optimization.webp`,
    },
    {
      title: $localize`:@@fmcg.features.van-sales.title:Van Sales & Van Stock`,
      description: $localize`:@@fmcg.features.van-sales.description:Sell directly from available van inventory during customer visits and keep transactions connected with the stock.`,
      image: $localize`:@@fmcg.features.van-sales.image:/images/industries/fmcg/features/van-sales.webp`,
    },
    {
      title: $localize`:@@fmcg.features.trade-promotions.title:Trade Promotions`,
      description: $localize`:@@fmcg.features.trade-promotions.description:Evaluate the sales context and identify which approved promotions apply to the customer and current transaction.`,
      image: $localize`:@@fmcg.features.trade-promotions.image:/images/industries/fmcg/features/trade-promotions.webp`,
    },
    {
      title: $localize`:@@fmcg.features.sales-order-management.title:Sales Order Management`,
      description: $localize`:@@fmcg.features.sales-order-management.description:Create sales orders directly during customer visits using relevant customer, product, pricing, and inventory information.`,
      image: $localize`:@@fmcg.features.sales-order-management.image:/images/industries/fmcg/features/sales-order-management.webp`,
    },
    {
      title: $localize`:@@fmcg.features.collections-management.title:Collections Management`,
      description: $localize`:@@fmcg.features.collections-management.description:Allow sales representatives to record customer payments and collections directly from the field.`,
      image: $localize`:@@fmcg.features.collections-management.image:/images/industries/fmcg/features/collections-management.webp`,
    },
  ],
};

// The artwork comes from the section defaults.
const INTEGRATION: IndustriesIntegrationCopy = {
  title: $localize`:@@fmcg.integration.title:Built for Microsoft Dynamics 365 Finance & Operations`,
  paragraphs: [
    $localize`:@@fmcg.integration.paragraph-1:DynaOps connects your field sales operation with Microsoft Dynamics 365 F&O, helping your team work with ERP data and processes without creating a disconnected sales system.`,
    $localize`:@@fmcg.integration.paragraph-2:Customers, items, prices, and stock sync in real time, and orders and payments post directly into F&O no middleware, no double entry.`,
  ],
};

// The dashboard artwork comes from the section defaults.
const VISIBILITY: IndustriesVisibilityCopy = {
  title: $localize`:@@fmcg.visibility.title:Better visibility for sales managers`,
  paragraphs: [
    $localize`:@@fmcg.visibility.paragraph-1:Monitor sales performance, customer coverage, routes, visits, orders, and collections through DynaOps dashboards.`,
    $localize`:@@fmcg.visibility.paragraph-2:Identify execution gaps and understand what is happening in the field — not just the final sales numbers.`,
    $localize`:@@fmcg.visibility.paragraph-3:Follow live rep locations, planned versus actual visits on every route, and daily orders and collections in one view, so you can step in while there is still time to act.`,
  ],
};

// The demo button is the one shared by the industry pages.
const FOOTER_CTA: CtaContent = {
  title: $localize`:@@fmcg.cta.title:Ready to improve your FMCG field sales?`,
  description: $localize`:@@fmcg.cta.description:See how DynaOps can connect your sales representatives, managers, and Microsoft Dynamics 365 F&O.`,
  button: INDUSTRIES_HERO_DEFAULTS.cta,
  // Figma shows the band from the van roof down, 29.3% into the photo.
  image: {
    src: '/images/industries/fmcg/footer-cta.webp',
    width: 932,
    height: 830,
    coverOffset: 29.3,
  },
};

export const FMCG_CONTENT: IndustryPageContent = {
  title: $localize`:@@fmcg.title:FMCG Field Sales`,
  // Reuses the hero paragraph until the page gets dedicated search copy.
  description: `${HERO.subtitle} ${HERO.emphasis}`,
  hero: HERO,
  features: FEATURES,
  integration: INTEGRATION,
  visibility: VISIBILITY,
  footerCta: FOOTER_CTA,
};

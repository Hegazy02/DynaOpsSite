import { HEADER_CONTENT } from '../../../layout/header/header-content';
import type { FmcgFeaturesContent } from './components/fmcg-features/fmcg-features.model';
import type { FmcgHeroContent } from './components/fmcg-hero/fmcg-hero.model';
import type { FmcgContent } from './fmcg.model';

// Copy is English here; src/locale/ar/industries.json carries the Arabic under the same ids.
const HERO: FmcgHeroContent = {
  title: $localize`:@@fmcg.hero.title:Connect your FMCG field sales team with Microsoft Dynamics 365 F&O`,
  description: $localize`:@@fmcg.hero.description:DynaOps SFA helps FMCG companies manage field sales, customer visits, orders, collections, van sales, promotions, and routes while staying connected with`,
  emphasis: $localize`:@@fmcg.hero.emphasis:Microsoft Dynamics 365 Finance & Operations.`,
  image: {
    src: '/images/industries/fmcg/hero.svg',
    alt: $localize`:@@fmcg.hero.imageAlt:A sales representative checking orders beside a loaded delivery van`,
    width: 440,
    height: 350,
  },
  cta: HEADER_CONTENT.cta,
};

// The card artwork contains UI text, so the image path is localized like the copy.
const FEATURES: FmcgFeaturesContent = {
  eyebrow: $localize`:@@fmcg.features.eyebrow:Sales force automation for FMCG`,
  title: $localize`:@@fmcg.features.title:Built for fast-moving field sales`,
  description: $localize`:@@fmcg.features.description:FMCG sales teams need to move quickly between customers while always having access to accurate information.`,
  items: [
    {
      title: $localize`:@@fmcg.features.visit-planning.title:Visit Planning`,
      description: $localize`:@@fmcg.features.visit-planning.description:Plan customer visits and optimize sales routes using automated, dynamic, and AI-powered route optimization.`,
      image: $localize`:@@fmcg.features.visit-planning.image:/images/industries/fmcg/features/visit-planning.png`,
    },
    {
      title: $localize`:@@fmcg.features.route-optimization.title:Route Optimization`,
      description: $localize`:@@fmcg.features.route-optimization.description:Connect customer visits with location information and field activities for better visibility into sales execution.`,
      image: $localize`:@@fmcg.features.route-optimization.image:/images/industries/fmcg/features/route-optimization.png`,
    },
    {
      title: $localize`:@@fmcg.features.van-sales.title:Van Sales & Van Stock`,
      description: $localize`:@@fmcg.features.van-sales.description:Sell directly from available van inventory during customer visits and keep transactions connected with the stock.`,
      image: $localize`:@@fmcg.features.van-sales.image:/images/industries/fmcg/features/van-sales.png`,
    },
    {
      title: $localize`:@@fmcg.features.trade-promotions.title:Trade Promotions`,
      description: $localize`:@@fmcg.features.trade-promotions.description:Evaluate the sales context and identify which approved promotions apply to the customer and current transaction.`,
      image: $localize`:@@fmcg.features.trade-promotions.image:/images/industries/fmcg/features/trade-promotions.png`,
    },
    {
      title: $localize`:@@fmcg.features.sales-order-management.title:Sales Order Management`,
      description: $localize`:@@fmcg.features.sales-order-management.description:Create sales orders directly during customer visits using relevant customer, product, pricing, and inventory information.`,
      image: $localize`:@@fmcg.features.sales-order-management.image:/images/industries/fmcg/features/sales-order-management.png`,
    },
    {
      title: $localize`:@@fmcg.features.collections-management.title:Collections Management`,
      description: $localize`:@@fmcg.features.collections-management.description:Allow sales representatives to record customer payments and collections directly from the field.`,
      image: $localize`:@@fmcg.features.collections-management.image:/images/industries/fmcg/features/collections-management.png`,
    },
  ],
};

export const FMCG_CONTENT: FmcgContent = {
  title: $localize`:@@fmcg.title:FMCG Field Sales`,
  // Reuses the hero paragraph until the page gets dedicated search copy.
  description: `${HERO.description} ${HERO.emphasis}`,
  hero: HERO,
  features: FEATURES,
};

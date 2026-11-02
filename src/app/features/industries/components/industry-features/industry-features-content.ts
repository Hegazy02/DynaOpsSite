import type { IndustryFeatureCardContent } from '../industry-feature-card/industry-feature-card.model';
import type { IndustryFeatureId } from './industry-features.model';

// Cards shared by the industry pages; src/locale/ar/industries.json carries the Arabic copy.
// The artwork contains UI text, so the image path is localized like the copy.
export const INDUSTRY_FEATURE_CARDS: Record<IndustryFeatureId, IndustryFeatureCardContent> = {
  'visit-planning': {
    title: $localize`:@@industries.features.visit-planning.title:Visit Planning`,
    description: $localize`:@@industries.features.visit-planning.description:Plan customer visits and optimize sales routes using automated, dynamic, and AI-powered route optimization.`,
    image: $localize`:@@industries.features.visit-planning.image:/images/industries/features/visit-planning.webp`,
  },
  'route-optimization': {
    title: $localize`:@@industries.features.route-optimization.title:Route Optimization`,
    description: $localize`:@@industries.features.route-optimization.description:Connect customer visits with location information and field activities for better visibility into sales execution.`,
    image: $localize`:@@industries.features.route-optimization.image:/images/industries/features/route-optimization.webp`,
  },
  'van-sales': {
    title: $localize`:@@industries.features.van-sales.title:Van Sales & Van Stock`,
    description: $localize`:@@industries.features.van-sales.description:Sell directly from available van inventory during customer visits and keep transactions connected with the stock.`,
    image: $localize`:@@industries.features.van-sales.image:/images/industries/features/van-sales.webp`,
  },
  'inventory-visibility': {
    title: $localize`:@@industries.features.inventory-visibility.title:Inventory Visibility`,
    description: $localize`:@@industries.features.inventory-visibility.description:Support direct sales from vehicles with visibility into available van inventory and customer transactions.`,
    image: $localize`:@@industries.features.inventory-visibility.image:/images/industries/features/inventory-visibility.webp`,
  },
  'trade-promotions': {
    title: $localize`:@@industries.features.trade-promotions.title:Trade Promotions`,
    description: $localize`:@@industries.features.trade-promotions.description:Evaluate the sales context and identify which approved promotions apply to the customer and current transaction.`,
    image: $localize`:@@industries.features.trade-promotions.image:/images/industries/features/trade-promotions.webp`,
  },
  'sales-order-management': {
    title: $localize`:@@industries.features.sales-order-management.title:Sales Order Management`,
    description: $localize`:@@industries.features.sales-order-management.description:Create sales orders directly during customer visits using relevant customer, product, pricing, and inventory information.`,
    image: $localize`:@@industries.features.sales-order-management.image:/images/industries/features/sales-order-management.webp`,
  },
  'collections-management': {
    title: $localize`:@@industries.features.collections-management.title:Collections Management`,
    description: $localize`:@@industries.features.collections-management.description:Allow sales representatives to record customer payments and collections directly from the field.`,
    image: $localize`:@@industries.features.collections-management.image:/images/industries/features/collections-management.webp`,
  },
};

export function pickFeatureCards(ids: IndustryFeatureId[]): IndustryFeatureCardContent[] {
  return ids.map((id) => INDUSTRY_FEATURE_CARDS[id]);
}

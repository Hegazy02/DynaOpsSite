import type { IndustryFeatureCardContent } from '../industry-feature-card/industry-feature-card.model';
import type { IndustryFeatureCardCopy, IndustryFeatureId } from './industry-features.model';

// Each page writes its own card copy; only the artwork is shared.
// The artwork contains UI text, so the image path is localized like the copy.
const INDUSTRY_FEATURE_IMAGES: Record<IndustryFeatureId, string> = {
  'visit-planning': $localize`:@@industries.features.visit-planning.image:/images/industries/features/visit-planning.webp`,
  'route-optimization': $localize`:@@industries.features.route-optimization.image:/images/industries/features/route-optimization.webp`,
  'van-sales': $localize`:@@industries.features.van-sales.image:/images/industries/features/van-sales.webp`,
  'inventory-visibility': $localize`:@@industries.features.inventory-visibility.image:/images/industries/features/inventory-visibility.webp`,
  'trade-promotions': $localize`:@@industries.features.trade-promotions.image:/images/industries/features/trade-promotions.webp`,
  'sales-order-management': $localize`:@@industries.features.sales-order-management.image:/images/industries/features/sales-order-management.webp`,
  'collections-management': $localize`:@@industries.features.collections-management.image:/images/industries/features/collections-management.webp`,
  'customer-management': $localize`:@@industries.features.customer-management.image:/images/industries/features/customer-management.webp`,
  'workflow-approvals': $localize`:@@industries.features.workflow-approvals.image:/images/industries/features/workflow-approvals.webp`,
  'crm-activity-management': $localize`:@@industries.features.crm-activity-management.image:/images/industries/features/crm-activity-management.webp`,
  'gps-tracking': $localize`:@@industries.features.gps-tracking.image:/images/industries/features/gps-tracking.webp`,
  'sales-targets-kpis': $localize`:@@industries.features.sales-targets-kpis.image:/images/industries/features/sales-targets-kpis.webp`,
  'commission-management': $localize`:@@industries.features.commission-management.image:/images/industries/features/commission-management.webp`,
};

export function pickFeatureCards(cards: IndustryFeatureCardCopy[]): IndustryFeatureCardContent[] {
  return cards.map(({ id, ...copy }) => ({ ...copy, image: INDUSTRY_FEATURE_IMAGES[id] }));
}

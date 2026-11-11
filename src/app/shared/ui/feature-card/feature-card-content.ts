import type { FeatureCardContent, FeatureCardCopy, FeatureCardId } from './feature-card.model';

// Each page writes its own card copy; only the artwork is shared.
// The artwork contains UI text, so the image path is localized like the copy; the ids predate the move from the industry pages.
const FEATURE_CARD_IMAGES: Record<FeatureCardId, string> = {
  'visit-planning': $localize`:@@industries.features.visit-planning.image:/images/industries/features/visit-planning.webp`,
  'route-optimization': $localize`:@@industries.features.route-optimization.image:/images/industries/features/route-optimization.webp`,
  'gps-tracking': $localize`:@@industries.features.gps-tracking.image:/images/industries/features/gps-tracking.webp`,
  'offline-mode': $localize`:@@industries.features.offline-mode.image:/images/industries/features/offline-mode.webp`,
  'sales-order-management': $localize`:@@industries.features.sales-order-management.image:/images/industries/features/sales-order-management.webp`,
  'van-sales': $localize`:@@industries.features.van-sales.image:/images/industries/features/van-sales.webp`,
  'trade-promotions': $localize`:@@industries.features.trade-promotions.image:/images/industries/features/trade-promotions.webp`,
  'inventory-visibility': $localize`:@@industries.features.inventory-visibility.image:/images/industries/features/inventory-visibility.webp`,
  'collections-management': $localize`:@@industries.features.collections-management.image:/images/industries/features/collections-management.webp`,
  'workflow-approvals': $localize`:@@industries.features.workflow-approvals.image:/images/industries/features/workflow-approvals.webp`,
  'customer-management': $localize`:@@industries.features.customer-management.image:/images/industries/features/customer-management.webp`,
  'crm-activity-management': $localize`:@@industries.features.crm-activity-management.image:/images/industries/features/crm-activity-management.webp`,
  'sales-targets-kpis': $localize`:@@industries.features.sales-targets-kpis.image:/images/industries/features/sales-targets-kpis.webp`,
  'commission-management': $localize`:@@industries.features.commission-management.image:/images/industries/features/commission-management.webp`,
  'dashboards-analytics': $localize`:@@industries.features.dashboards-analytics.image:/images/industries/features/dashboards-analytics.webp`,
  'dynaops365-ai': $localize`:@@industries.features.dynaops365-ai.image:/images/industries/features/dynaops365-ai.webp`,
};

// `linked` points each card at its feature page, whose route matches the id.
export function pickFeatureCards(cards: FeatureCardCopy[], linked = false): FeatureCardContent[] {
  return cards.map(({ id, ...copy }) => ({
    ...copy,
    image: FEATURE_CARD_IMAGES[id],
    ...(linked ? { href: `/features/${id}` } : {}),
  }));
}

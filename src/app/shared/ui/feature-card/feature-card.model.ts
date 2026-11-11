export interface FeatureCardContent {
  title: string;
  description: string;
  // 2x export of the Figma artwork on the shared 712x560 frame; each language has its own file.
  image: string;
  // Turns the card into a link to the feature page.
  href?: string;
}

// A page's card: its own copy, with the artwork looked up by id.
export interface FeatureCardCopy {
  id: FeatureCardId;
  title: string;
  description: string;
}

// Artwork in the shared catalog; ids match the feature page routes.
export type FeatureCardId =
  | 'visit-planning'
  | 'route-optimization'
  | 'gps-tracking'
  | 'offline-mode'
  | 'sales-order-management'
  | 'van-sales'
  | 'trade-promotions'
  | 'inventory-visibility'
  | 'collections-management'
  | 'workflow-approvals'
  | 'customer-management'
  | 'crm-activity-management'
  | 'sales-targets-kpis'
  | 'commission-management'
  | 'dashboards-analytics'
  | 'dynaops365-ai';

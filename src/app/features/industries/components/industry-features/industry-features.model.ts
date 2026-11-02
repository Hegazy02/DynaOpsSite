import type { IndustryFeatureCardContent } from '../industry-feature-card/industry-feature-card.model';

export interface IndustryFeaturesEyebrow {
  // Root-relative icon path, already in the brand colour.
  icon: string;
  label: string;
}

export interface IndustryFeaturesContent {
  eyebrow: IndustryFeaturesEyebrow;
  title: string;
  description: string;
  // Tablet description box: 430px by default, 492px when the page's Figma frame uses the wider box.
  wideTabletDescription?: boolean;
  items: IndustryFeatureCardContent[];
}

// Cards in the shared catalog; each industry page picks its own set.
export type IndustryFeatureId =
  | 'visit-planning'
  | 'route-optimization'
  | 'van-sales'
  | 'inventory-visibility'
  | 'trade-promotions'
  | 'sales-order-management'
  | 'collections-management'
  | 'customer-management'
  | 'workflow-approvals'
  | 'crm-activity-management';

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
  // English description box from the page's Figma frames; defaults to 430px on tablet, 768px on desktop.
  descriptionWidth?: IndustryFeaturesDescriptionWidth;
  items: IndustryFeatureCardContent[];
}

export interface IndustryFeaturesDescriptionWidth {
  tablet?: 430 | 492;
  desktop?: 492 | 586 | 768;
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
  | 'crm-activity-management'
  | 'gps-tracking';

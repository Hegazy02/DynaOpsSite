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
  // English title box on tablet; defaults to 500px.
  titleTabletWidth?: 640;
  // English description box from the page's Figma frames; defaults to 430px on tablet, 768px on desktop.
  descriptionWidth?: IndustryFeaturesDescriptionWidth;
  items: IndustryFeatureCardContent[];
}

export interface IndustryFeaturesDescriptionWidth {
  tablet?: 430 | 492 | 640;
  desktop?: 492 | 586 | 768 | 780;
  // Arabic copy runs on one line from xl unless the page's Figma frame wraps it in a box.
  arabicDesktop?: 640;
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
  | 'gps-tracking'
  | 'sales-targets-kpis'
  | 'commission-management';

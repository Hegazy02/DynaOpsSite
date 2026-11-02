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
  | 'collections-management';

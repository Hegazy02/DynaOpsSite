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

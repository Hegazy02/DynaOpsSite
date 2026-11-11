import type { FeatureCardContent } from '../../../../../shared/ui/feature-card/feature-card.model';

export interface AllFeaturesGroupContent {
  eyebrow: string;
  title: string;
  description: string;
  // "4 features", written out per language.
  count: string;
  items: FeatureCardContent[];
}

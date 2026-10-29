import type { FmcgFeatureCardContent } from '../fmcg-feature-card/fmcg-feature-card.model';

export interface FmcgFeaturesContent {
  eyebrow: string;
  title: string;
  description: string;
  items: FmcgFeatureCardContent[];
}

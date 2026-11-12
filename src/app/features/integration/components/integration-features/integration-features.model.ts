import type { FeatureCardContent } from '../../../../shared/ui/feature-card/feature-card.model';

// Closing card of the grid: brand gradient, logo watermark and a demo link.
export interface IntegrationBrandCard {
  title: string;
  cta: { label: string; href: string };
  // Root-relative watermark, 288x288.
  mark: string;
}

export interface IntegrationFeaturesContent {
  title: string;
  paragraphs: string[];
  items: FeatureCardContent[];
  brandCard: IntegrationBrandCard;
}

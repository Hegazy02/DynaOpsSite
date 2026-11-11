import type { FeatureCardContent } from '../../../../shared/ui/feature-card/feature-card.model';

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
  // English title stays on one line from xl instead of balancing in 820px.
  titleOneLineFromXl?: boolean;
  // English description box from the page's Figma frames; defaults to 430px on tablet, 768px on desktop.
  descriptionWidth?: IndustryFeaturesDescriptionWidth;
  items: FeatureCardContent[];
}

export interface IndustryFeaturesDescriptionWidth {
  tablet?: 430 | 492 | 640;
  desktop?: 492 | 586 | 768 | 780 | 840;
  // Arabic copy runs on one line from xl unless the page's Figma frame wraps it in a box.
  arabicDesktop?: 506 | 570 | 640;
}

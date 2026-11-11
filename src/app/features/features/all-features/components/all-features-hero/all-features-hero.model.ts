import type { AllFeaturesSlide } from '../all-features-carousel/all-features-carousel.model';

export interface AllFeaturesHeroContent {
  title: string;
  // Part of the title set in the brand colour.
  titleHighlight: string;
  subtitle: string;
  // Bold phrase inside the subtitle.
  subtitleEmphasis: string;
  cta: { label: string; href: string };
  // Scrolls to the element with this id.
  explore: { label: string; targetId: string };
  // Accessible name of the carousel.
  carouselLabel: string;
  slides: AllFeaturesSlide[];
}

export interface AllFeaturesTextParts {
  before: string;
  match: string;
  after: string;
}

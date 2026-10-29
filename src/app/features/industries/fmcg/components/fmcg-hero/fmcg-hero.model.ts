export interface FmcgHeroImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface FmcgHeroContent {
  title: string;
  description: string;
  // Bold closing phrase of the description, usually the product name.
  emphasis?: string;
  image: FmcgHeroImage;
  cta: { label: string; href: string };
}

export interface IndustriesHeroImage {
  // 2x raster export, or an SVG.
  src: string;
  // 3x export for 3x screens (iPhones), where the 2x file is upscaled and looks soft.
  src3x?: string;
  alt: string;
  width: number;
  height: number;
}

export interface IndustriesHeroCta {
  label: string;
  href: string;
}

// What a page supplies; the call to action falls back to the hero default.
export interface IndustriesHeroCopy {
  title: string;
  subtitle: string;
  // Bold closing phrase of the subtitle.
  emphasis?: string;
  // Industry artwork on the shared 440x350 frame; Figma mirrors it in Arabic.
  image: IndustriesHeroImage;
}

export interface IndustriesHeroDefaults {
  cta: IndustriesHeroCta;
}

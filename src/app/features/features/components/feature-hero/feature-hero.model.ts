export interface FeatureHeroImage {
  // 2x export of the product mock; each language has its own file because the UI text is translated.
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface FeatureHeroCta {
  label: string;
  href: string;
}

// What a page supplies; the call to action falls back to the hero default.
export interface FeatureHeroCopy {
  eyebrow: string;
  title: string;
  subtitle: string;
  // Semibold closing phrase of the subtitle.
  emphasis?: string;
  // Second paragraph under the subtitle.
  note?: string;
  // Semibold closing phrase of the note.
  noteEmphasis?: string;
  // Arabic tablet title and subtitle at 629px, where the page's frame fits them on fewer lines.
  wideArabicTabletCopy?: boolean;
  image: FeatureHeroImage;
  cta?: FeatureHeroCta;
}

export interface FeatureHeroDefaults {
  cta: FeatureHeroCta;
}

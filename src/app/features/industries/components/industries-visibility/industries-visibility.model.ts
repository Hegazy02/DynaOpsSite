// Dashboard mock plus the two cursor markers that glide on hover; each language has its own folder.
export interface IndustriesVisibilityImage {
  dashboard: string;
  cursorLeft: string;
  cursorRight: string;
  alt: string;
  // Intrinsic size of the dashboard export.
  width: number;
  height: number;
}

// What a page supplies; the artwork falls back to the section defaults.
export interface IndustriesVisibilityCopy {
  title: string;
  paragraphs: string[];
}

export interface IndustriesVisibilityDefaults {
  image: IndustriesVisibilityImage;
}

// Where the dashboard sits on the 500x400 stage, in percent, so it scales with the stage.
export interface IndustriesVisibilityPlacement {
  left: number;
  top: number;
  width: number;
}

// Dashboard mock plus the two cursor markers that glide on hover; each language has its own files.
export interface IndustriesVisibilityImage {
  dashboard: string;
  cursorLeft: string;
  cursorRight: string;
  alt: string;
  // Intrinsic size of the dashboard export.
  width: number;
  height: number;
  placement: IndustriesVisibilityPlacement;
}

// What a page supplies; without an image the section shows the default dashboard.
export interface IndustriesVisibilityCopy {
  title: string;
  paragraphs: string[];
  image?: IndustriesVisibilityImage;
}

export interface IndustriesVisibilityDefaults {
  image: IndustriesVisibilityImage;
}

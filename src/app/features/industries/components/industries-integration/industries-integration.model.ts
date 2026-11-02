// The artwork is stacked from separate files so the hover lift can move the tiles independently.
export interface IndustriesIntegrationImage {
  // Floor, cards, connectors and the bottom tile; carries the alt text.
  base: string;
  // Drawn over the base in this order; each lifts on hover.
  tileMiddle: string;
  tileTop: string;
  tileTopFace: string;
  alt: string;
  width: number;
  height: number;
}

// What a page supplies; the artwork falls back to the section defaults.
export interface IndustriesIntegrationCopy {
  title: string;
  // Only the first paragraph shows below xl unless allParagraphsOnTablet, as in the tablet and phone frames.
  paragraphs: string[];
  // Shows every paragraph from md when the page's tablet frame keeps them all.
  allParagraphsOnTablet?: boolean;
}

export interface IndustriesIntegrationDefaults {
  image: IndustriesIntegrationImage;
}

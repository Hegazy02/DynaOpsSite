// The artwork is stacked from separate files so the hover lift can move the tiles independently.
export interface ErpIntegrationImage {
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
export interface ErpIntegrationCopy {
  title: string;
  // Only the first paragraph shows below xl unless allParagraphsOnTablet, as in the tablet and phone frames.
  paragraphs: string[];
  // Semibold phrase inside the paragraphs, where the frame sets one.
  emphasis?: string;
  // Shows every paragraph from md when the page's tablet frame keeps them all.
  allParagraphsOnTablet?: boolean;
  // Shows every paragraph at every width when the phone frame keeps them too.
  allParagraphsOnPhone?: boolean;
  // Separate paragraphs 16px apart; the industry frames set them as one text with line breaks.
  spacedParagraphs?: boolean;
  // Copy column from xl; the feature frames widen it to 512px.
  textWidth?: ErpIntegrationTextWidth;
}

export type ErpIntegrationTextWidth = 497 | 512;

export interface ErpIntegrationDefaults {
  image: ErpIntegrationImage;
}

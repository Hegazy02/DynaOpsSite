export interface FeatureShowcaseImage {
  // 2.5x export of the illustration so the tablet frame can stretch it to 704px; each language has its own file.
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface FeatureShowcaseContent {
  title: string;
  paragraphs: string[];
  image: FeatureShowcaseImage;
}

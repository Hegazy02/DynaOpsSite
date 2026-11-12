export interface IntegrationErpImage {
  // 2x export on a 470x406 canvas: the 453x357 diagram plus its shadow.
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface IntegrationErpContent {
  // Line breaks apply on phones and from xl; tablet keeps one line.
  title: string;
  paragraphs: string[];
  image: IntegrationErpImage;
}

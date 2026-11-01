export type CtaImagePosition =
  'top-start' | 'center-start' | 'bottom-start' | 'top-end' | 'center-end' | 'bottom-end';

export interface CtaImage {
  src: string;
  width: number;
  height: number;
  // Percent of the image height cropped off the top from xl, when the image covers the frame.
  coverOffset?: number;
}

// What a page supplies for a call-to-action container.
export interface CtaContent {
  title: string;
  description: string;
  button: { label: string; href: string };
  image: CtaImage;
}

export interface FeatureCapabilityImage {
  // 2x export of the mock; width and height are its CSS size, shadows included.
  src: string;
  width: number;
  height: number;
}

export interface FeatureCapability {
  title: string;
  description: string;
  image: FeatureCapabilityImage;
}

export interface FeatureCapabilitiesContent {
  title: string;
  paragraphs: string[];
  items: FeatureCapability[];
}

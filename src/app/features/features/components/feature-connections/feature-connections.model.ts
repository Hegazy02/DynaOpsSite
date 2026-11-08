export interface FeatureConnectionNode {
  label: string;
  // Root-relative icon path, already in its display colour.
  icon: string;
}

export interface FeatureConnectionsContent {
  title: string;
  paragraphs: string[];
  // Hub hugs its label instead of the fixed 270px pill, where the page's frame does.
  compactHub?: boolean;
  // Pulse fires once every 6s instead of looping every 2s, where the page's frame does.
  spacedPulse?: boolean;
  hub: FeatureConnectionNode;
  // Four or five: the connector curves are drawn for those column counts.
  items: FeatureConnectionNode[];
}

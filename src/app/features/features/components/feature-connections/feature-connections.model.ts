export interface FeatureConnectionNode {
  label: string;
  // Root-relative icon path, already in its display colour.
  icon: string;
}

export interface FeatureConnectionsContent {
  title: string;
  paragraphs: string[];
  hub: FeatureConnectionNode;
  // Exactly five: the connector curves are drawn for five evenly spaced columns.
  items: FeatureConnectionNode[];
}

export interface TabItem {
  id: string;
  label: string;
  href?: string;
  // Toggles a panel instead of navigating; that panel must use the id `nav-panel-<id>`.
  expandable?: boolean;
}

export interface TabPanelContext {
  $implicit: TabItem;
}

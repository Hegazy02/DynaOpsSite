import type { MegaPanelItem, MegaPanelLink } from '../../shared/ui/mega-panel/mega-panel.model';
import type { TabItem } from '../../shared/ui/tabs/tabs.model';

export interface HeaderPanel {
  items: MegaPanelItem[];
  featured?: MegaPanelItem;
  viewAll?: MegaPanelLink;
  gap: 'sm' | 'md';
  wide: boolean;
}

export interface HeaderContent {
  logoAlt: string;
  tabs: TabItem[];
  panels: Record<string, HeaderPanel>;
  language: { label: string; ariaLabel: string };
  cta: MegaPanelLink;
  menu: { open: string; close: string; label: string };
}

export interface MegaPanelItem {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  image?: string;
  href?: string;
  badge?: string;
  comingSoon?: boolean;
}

export interface MegaPanelLink {
  label: string;
  href: string;
}

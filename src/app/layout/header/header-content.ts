import type { MegaPanelItem, MegaPanelLink } from '../../shared/ui/mega-panel/mega-panel';
import type { TabItem } from '../../shared/ui/tabs/tabs';

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

function withRoutes(prefix: string, items: Omit<MegaPanelItem, 'href'>[]): MegaPanelItem[] {
  return items.map((item) => ({ ...item, href: `${prefix}/${item.id}` }));
}

// Copy is English here; src/locale/ar/header.json carries the Arabic under the same ids.
// Rows marked "stand-in" use the closest existing file; the Figma icon has no export yet.
const FEATURE_ITEMS = withRoutes('/features', [
  {
    id: 'customer-management',
    icon: '/icons/features/ai-user.svg',
    title: $localize`:@@header.feature.customer-management.title:Customer Management`,
    description: $localize`:@@header.feature.customer-management.description:Profiles, locations, account activity`,
  },
  {
    id: 'workflow-approvals',
    icon: '/icons/features/workflow-square-05.svg',
    title: $localize`:@@header.feature.workflow-approvals.title:Workflow & Approvals`,
    description: $localize`:@@header.feature.workflow-approvals.description:Configurable multi-level approval flows`,
  },
  {
    id: 'gps-tracking',
    icon: '/icons/features/shipment-tracking.svg',
    title: $localize`:@@header.feature.gps-tracking.title:GPS Tracking`,
    description: $localize`:@@header.feature.gps-tracking.description:Check-in/out and field team visibility`,
  },
  {
    id: 'commission-management',
    icon: '/icons/features/save-money-dollar.svg',
    title: $localize`:@@header.feature.commission-management.title:Commission Management`,
    description: $localize`:@@header.feature.commission-management.description:Flexible incentive schemes`,
  },
  {
    id: 'van-sales',
    icon: '/icons/features/truck-return.svg', // stand-in: delivery-truck-01
    title: $localize`:@@header.feature.van-sales.title:Van Sales & Van Stock`,
    description: $localize`:@@header.feature.van-sales.description:Direct sales with vehicle stock visibility`,
  },
  {
    id: 'sales-order-management',
    icon: '/icons/shared/package-01.svg',
    title: $localize`:@@header.feature.sales-order-management.title:Sales Order Management`,
    description: $localize`:@@header.feature.sales-order-management.description:Products, pricing, order creation`,
  },
  {
    id: 'dashboards-analytics',
    icon: '/icons/shared/analytics-03.svg',
    title: $localize`:@@header.feature.dashboards-analytics.title:Dashboards & Analytics`,
    description: $localize`:@@header.feature.dashboards-analytics.description:Sales, reps, routes and territory insights`,
  },
  {
    id: 'inventory-visibility',
    icon: '/icons/features/warehouse.svg',
    title: $localize`:@@header.feature.inventory-visibility.title:Inventory Visibility`,
    description: $localize`:@@header.feature.inventory-visibility.description:Stock visibility across warehouses`,
  },
  {
    id: 'sales-targets-kpis',
    icon: '/icons/features/target-dollar.svg',
    title: $localize`:@@header.feature.sales-targets-kpis.title:Sales Targets & KPIs`,
    description: $localize`:@@header.feature.sales-targets-kpis.description:Targets, coverage, sales performance`,
  },
  {
    id: 'collections-management',
    icon: '/icons/features/payment-01.svg',
    title: $localize`:@@header.feature.collections-management.title:Collections Management`,
    description: $localize`:@@header.feature.collections-management.description:Cash, cheques, payments and receipts`,
  },
  {
    id: 'crm-activity-management',
    icon: '/icons/features/chart-relationship.svg',
    title: $localize`:@@header.feature.crm-activity-management.title:CRM & Activity Management`,
    description: $localize`:@@header.feature.crm-activity-management.description:Customer timeline, activities, follow-ups`,
  },
  {
    id: 'visit-planning',
    icon: '/icons/features/location-user-03.svg',
    title: $localize`:@@header.feature.visit-planning.title:Visit Planning`,
    description: $localize`:@@header.feature.visit-planning.description:Daily plans and planned vs. actual visits`,
  },
  {
    id: 'route-optimization',
    icon: '/icons/shared/route-02.svg',
    title: $localize`:@@header.feature.route-optimization.title:Route Optimization`,
    description: $localize`:@@header.feature.route-optimization.description:Optimized routes, territories, field coverage`,
  },
  {
    id: 'trade-promotions',
    icon: '/icons/features/trade.svg',
    title: $localize`:@@header.feature.trade-promotions.title:Trade Promotions`,
    description: $localize`:@@header.feature.trade-promotions.description:Approved promotions during customer sales`,
  },
  {
    id: 'offline-mode',
    icon: '/icons/features/no-internet.svg',
    title: $localize`:@@header.feature.offline-mode.title:Offline Mode`,
    description: $localize`:@@header.feature.offline-mode.description:Continue field operations without connectivity`,
  },
]);

const FEATURED_ITEM: MegaPanelItem = {
  id: 'dynaops365-ai',
  image: '/icons/shared/dyna-ai-logo.svg',
  comingSoon: true,
  title: $localize`:@@header.featured.title:DynaOps365 AI`,
  description: $localize`:@@header.featured.description:An evolving AI layer for sales insights, field operations, and decision support`,
};

const INDUSTRY_ITEMS = withRoutes('/industries', [
  {
    id: 'fmcg',
    icon: '/icons/industries/shopping-cart-check-02.svg',
    title: $localize`:@@header.industry.fmcg:FMCG`,
  },
  {
    id: 'food-beverage',
    icon: '/icons/industries/vegetarian-food.svg',
    title: $localize`:@@header.industry.food-beverage:Food & Beverage`,
  },
  {
    id: 'wholesale-distribution',
    icon: '/icons/industries/radial.svg',
    title: $localize`:@@header.industry.wholesale-distribution:Wholesale Distribution`,
  },
  {
    id: 'retail-distribution',
    icon: '/icons/industries/pie-chart-02.svg',
    title: $localize`:@@header.industry.retail-distribution:Retail Distribution`,
  },
  {
    id: 'manufacturing',
    icon: '/icons/industries/factory.svg',
    title: $localize`:@@header.industry.manufacturing:Manufacturing`,
  },
  {
    id: 'pharmaceuticals',
    icon: '/icons/industries/hand-sanitizer.svg',
    title: $localize`:@@header.industry.pharmaceuticals:Pharmaceuticals`,
  },
  {
    id: 'consumer-goods',
    icon: '/icons/shared/safe-delivery-01.svg',
    title: $localize`:@@header.industry.consumer-goods:Consumer Goods`,
  },
  {
    id: 'building-materials',
    icon: '/icons/industries/building-materials.svg',
    title: $localize`:@@header.industry.building-materials:Building Materials`,
  },
  {
    id: 'industrial-supplies',
    icon: '/icons/industries/package-sent.svg',
    title: $localize`:@@header.industry.industrial-supplies:Industrial Supplies`,
  },
]);

// Routes are base-href relative, so the same hrefs resolve to /features and /ar/features.
export const HEADER_CONTENT: HeaderContent = {
  logoAlt: $localize`:@@header.logoAlt:DynaOps365 – Dynamics 365 Ops, in your hands`,
  tabs: [
    { id: 'features', label: $localize`:@@header.tab.features:Features`, expandable: true },
    { id: 'industries', label: $localize`:@@header.tab.industries:Industries`, expandable: true },
    {
      id: 'integration',
      label: $localize`:@@header.tab.integration:Integration`,
      href: '/integration',
    },
    { id: 'blog', label: $localize`:@@header.tab.blog:Blog`, href: '/blog' },
    { id: 'about', label: $localize`:@@header.tab.about:About`, href: '/about' },
  ],
  panels: {
    features: {
      items: FEATURE_ITEMS,
      featured: FEATURED_ITEM,
      viewAll: { label: $localize`:@@header.viewAllFeatures:View All Features`, href: '/features' },
      gap: 'sm',
      wide: true,
    },
    industries: { items: INDUSTRY_ITEMS, gap: 'md', wide: false },
  },
  // Names the other language: the English build shows "عربي", the Arabic build "English".
  language: {
    label: $localize`:@@header.language.label:عربي`,
    ariaLabel: $localize`:@@header.language.ariaLabel:Switch to Arabic`,
  },
  cta: { label: $localize`:@@header.cta:Book a Demo`, href: '/demo' },
  menu: {
    open: $localize`:@@header.menu.open:Open menu`,
    close: $localize`:@@header.menu.close:Close menu`,
    label: $localize`:@@header.menu.label:Site menu`,
  },
};

import type { Lang } from '../../core/i18n/language';
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
  home: string;
  logoAlt: string;
  tabs: TabItem[];
  panels: Record<string, HeaderPanel>;
  language: { label: string; lang: Lang; ariaLabel: string };
  cta: MegaPanelLink;
  menu: { open: string; close: string; label: string };
}

type ItemDef = Pick<MegaPanelItem, 'id' | 'icon' | 'image' | 'href' | 'comingSoon'>;

function withRoutes(prefix: string, defs: ItemDef[]): ItemDef[] {
  return defs.map((def) => ({ ...def, href: `${prefix}/${def.id}` }));
}

// Rows marked "stand-in" use the closest existing file; the Figma icon has no export yet.
const FEATURE_ITEMS = withRoutes('/features', [
  { id: 'customer-management', icon: '/icons/features/ai-user.svg' },
  { id: 'workflow-approvals', icon: '/icons/features/workflow-square-05.svg' },
  { id: 'gps-tracking', icon: '/icons/features/shipment-tracking.svg' },
  { id: 'commission-management', icon: '/icons/features/save-money-dollar.svg' },
  { id: 'van-sales', icon: '/icons/features/truck-return.svg' }, // stand-in: delivery-truck-01
  { id: 'sales-order-management', icon: '/icons/shared/package-01.svg' },
  { id: 'dashboards-analytics', icon: '/icons/shared/analytics-03.svg' },
  { id: 'inventory-visibility', icon: '/icons/features/warehouse.svg' },
  { id: 'sales-targets-kpis', icon: '/icons/features/target-dollar.svg' },
  { id: 'collections-management', icon: '/icons/features/payment-01.svg' },
  { id: 'crm-activity-management', icon: '/icons/features/chart-relationship.svg' },
  { id: 'visit-planning', icon: '/icons/features/location-user-03.svg' },
  { id: 'route-optimization', icon: '/icons/shared/route-02.svg' },
  { id: 'trade-promotions', icon: '/icons/features/trade.svg' },
  { id: 'offline-mode', icon: '/icons/features/no-internet.svg' },
]);

const FEATURED_ITEM: ItemDef = {
  id: 'dynaops365-ai',
  image: '/icons/shared/dyna-ai-logo.svg',
  comingSoon: true,
};

const INDUSTRY_ITEMS = withRoutes('/industries', [
  { id: 'fmcg', icon: '/icons/industries/shopping-cart-check-02.svg' },
  { id: 'food-beverage', icon: '/icons/industries/vegetarian-food.svg' },
  { id: 'wholesale-distribution', icon: '/icons/industries/radial.svg' },
  { id: 'retail-distribution', icon: '/icons/industries/pie-chart-02.svg' },
  { id: 'manufacturing', icon: '/icons/industries/factory.svg' },
  { id: 'pharmaceuticals', icon: '/icons/industries/hand-sanitizer.svg' },
  { id: 'consumer-goods', icon: '/icons/shared/safe-delivery-01.svg' },
  { id: 'building-materials', icon: '/icons/industries/building-materials.svg' },
  { id: 'industrial-supplies', icon: '/icons/industries/package-sent.svg' },
]);

type Copy = Record<string, readonly [title: string, description?: string]>;

interface HeaderStrings {
  logoAlt: string;
  tabs: { features: string; industries: string; integration: string; blog: string; about: string };
  features: Copy;
  featured: readonly [string, string];
  industries: Copy;
  viewAll: string;
  language: { label: string; ariaLabel: string };
  cta: string;
  menu: { open: string; close: string; label: string };
}

const STRINGS: Record<Lang, HeaderStrings> = {
  en: {
    logoAlt: 'DynaOps365 – Dynamics 365 Ops, in your hands',
    tabs: {
      features: 'Features',
      industries: 'Industries',
      integration: 'Integration',
      blog: 'Blog',
      about: 'About',
    },
    features: {
      'customer-management': ['Customer Management', 'Profiles, locations, account activity'],
      'workflow-approvals': ['Workflow & Approvals', 'Configurable multi-level approval flows'],
      'gps-tracking': ['GPS Tracking', 'Check-in/out and field team visibility'],
      'commission-management': ['Commission Management', 'Flexible incentive schemes'],
      'van-sales': ['Van Sales & Van Stock', 'Direct sales with vehicle stock visibility'],
      'sales-order-management': ['Sales Order Management', 'Products, pricing, order creation'],
      'dashboards-analytics': [
        'Dashboards & Analytics',
        'Sales, reps, routes and territory insights',
      ],
      'inventory-visibility': ['Inventory Visibility', 'Stock visibility across warehouses'],
      'sales-targets-kpis': ['Sales Targets & KPIs', 'Targets, coverage, sales performance'],
      'collections-management': ['Collections Management', 'Cash, cheques, payments and receipts'],
      'crm-activity-management': [
        'CRM & Activity Management',
        'Customer timeline, activities, follow-ups',
      ],
      'visit-planning': ['Visit Planning', 'Daily plans and planned vs. actual visits'],
      'route-optimization': ['Route Optimization', 'Optimized routes, territories, field coverage'],
      'trade-promotions': ['Trade Promotions', 'Approved promotions during customer sales'],
      'offline-mode': ['Offline Mode', 'Continue field operations without connectivity'],
    },
    featured: [
      'DynaOps365 AI',
      'An evolving AI layer for sales insights, field operations, and decision support',
    ],
    industries: {
      fmcg: ['FMCG'],
      'food-beverage': ['Food & Beverage'],
      'wholesale-distribution': ['Wholesale Distribution'],
      'retail-distribution': ['Retail Distribution'],
      manufacturing: ['Manufacturing'],
      pharmaceuticals: ['Pharmaceuticals'],
      'consumer-goods': ['Consumer Goods'],
      'building-materials': ['Building Materials'],
      'industrial-supplies': ['Industrial Supplies'],
    },
    viewAll: 'View All Features',
    language: { label: 'عربي', ariaLabel: 'Switch to Arabic' },
    cta: 'Book a Demo',
    menu: { open: 'Open menu', close: 'Close menu', label: 'Site menu' },
  },
  ar: {
    logoAlt: 'DynaOps365 – إدارة عمليات Dynamics 365 بين يديك',
    tabs: {
      features: 'الميزات',
      industries: 'القطاعات',
      integration: 'التكامل',
      blog: 'المدونة',
      about: 'عن الشركة',
    },
    features: {
      'customer-management': ['إدارة العملاء', 'الملفات الشخصية، المواقع، نشاط الحساب'],
      'workflow-approvals': [
        'سير العمل والموافقات',
        'تدفقات موافقة متعددة المستويات قابلة للتكوين',
      ],
      'gps-tracking': ['تتبع GPS', 'تسجيل الدخول/الخروج ورؤية فريق الميدان'],
      'commission-management': ['إدارة العمولة', 'خطط حوافز مرنة'],
      'van-sales': ['مبيعات المركبات ومخزون المركبات', 'المبيعات المباشرة مع رؤية مخزون المركبة'],
      'sales-order-management': ['إدارة أوامر البيع', 'المنتجات، التسعير، إنشاء الطلبات'],
      'dashboards-analytics': [
        'لوحات المعلومات والتحليلات',
        'رؤى المبيعات، المندوبين، المسارات والمناطق',
      ],
      'inventory-visibility': ['رؤية المخزون', 'رؤية المخزون عبر المستودعات'],
      'sales-targets-kpis': ['أهداف المبيعات ومؤشرات الأداء', 'الأهداف، التغطية، أداء المبيعات'],
      'collections-management': ['إدارة التحصيلات', 'النقد، الشيكات، المدفوعات والإيصالات'],
      'crm-activity-management': [
        'إدارة علاقات العملاء والأنشطة',
        'الجدول الزمني للعميل، الأنشطة، المتابعات',
      ],
      'visit-planning': ['تخطيط الزيارات', 'الخطط اليومية والزيارات المخططة مقابل الفعلية'],
      'route-optimization': ['تحسين المسارات', 'مسارات محسّنة، المناطق، تغطية الميدان'],
      'trade-promotions': ['عروض التجارة الترويجية', 'العروض المعتمدة أثناء مبيعات العملاء'],
      'offline-mode': ['الوضع غير المتصل', 'استمرار العمليات الميدانية بدون اتصال'],
    },
    featured: [
      'DynaOps365 AI',
      'طبقة ذكاء اصطناعي متطورة لرؤى المبيعات، العمليات الميدانية، ودعم القرار',
    ],
    industries: {
      fmcg: ['السلع الاستهلاكية سريعة التداول'],
      'food-beverage': ['الأغذية والمشروبات'],
      'wholesale-distribution': ['التوزيع بالجملة'],
      'retail-distribution': ['توزيع التجزئة'],
      manufacturing: ['التصنيع'],
      pharmaceuticals: ['الأدوية'],
      'consumer-goods': ['السلع الاستهلاكية'],
      'building-materials': ['مواد البناء'],
      'industrial-supplies': ['الإمدادات الصناعية'],
    },
    viewAll: 'عرض جميع الميزات',
    language: { label: 'English', ariaLabel: 'التبديل إلى الإنجليزية' },
    cta: 'احجز عرضًا تجريبيًا',
    menu: { open: 'فتح القائمة', close: 'إغلاق القائمة', label: 'قائمة الموقع' },
  },
};

function toItems(defs: ItemDef[], copy: Copy): MegaPanelItem[] {
  return defs.map((def) => {
    const [title, description] = copy[def.id];
    return { ...def, title, description };
  });
}

function build(lang: Lang): HeaderContent {
  const s = STRINGS[lang];
  return {
    home: '/',
    logoAlt: s.logoAlt,
    tabs: [
      { id: 'features', label: s.tabs.features, expandable: true },
      { id: 'industries', label: s.tabs.industries, expandable: true },
      { id: 'integration', label: s.tabs.integration, href: '/integration' },
      { id: 'blog', label: s.tabs.blog, href: '/blog' },
      { id: 'about', label: s.tabs.about, href: '/about' },
    ],
    panels: {
      features: {
        items: toItems(FEATURE_ITEMS, s.features),
        featured: { ...FEATURED_ITEM, title: s.featured[0], description: s.featured[1] },
        viewAll: { label: s.viewAll, href: '/features' },
        gap: 'sm',
        wide: true,
      },
      industries: {
        items: toItems(INDUSTRY_ITEMS, s.industries),
        gap: 'md',
        wide: false,
      },
    },
    language: {
      label: s.language.label,
      lang: lang === 'en' ? 'ar' : 'en',
      ariaLabel: s.language.ariaLabel,
    },
    cta: { label: s.cta, href: '/demo' },
    menu: s.menu,
  };
}

export const HEADER_CONTENT: Record<Lang, HeaderContent> = {
  en: build('en'),
  ar: build('ar'),
};

import { CUSTOMER_MANAGEMENT_CONTENT } from '../customer-management/customer-management-content';
import { FEATURE_HERO_DEFAULTS } from '../components/feature-hero/feature-hero-content';
import { pickFeatureCards } from '../../../shared/ui/feature-card/feature-card-content';
import type { FeatureCardId } from '../../../shared/ui/feature-card/feature-card.model';
import type { CtaContent } from '../../../shared/ui/cta-container/cta-container.model';
import type { ErpIntegrationCopy } from '../../../shared/ui/erp-integration/erp-integration.model';
import type { AllFeaturesCatalog, AllFeaturesContent } from './all-features.model';
import type { AllFeaturesGroupContent } from './components/all-features-group/all-features-group.model';
import type { AllFeaturesHeroContent } from './components/all-features-hero/all-features-hero.model';
import type { AllFeaturesSlide } from './components/all-features-carousel/all-features-carousel.model';

// Copy is English here; src/locale/ar/features.json carries the Arabic under the same ids.
// The carousel mocks carry UI text, so their folder is localized like the copy.
const dir = $localize`:@@all-features.imageDir:/images/features/all-features`;

const GROUPS: AllFeaturesGroupContent[] = [
  {
    eyebrow: $localize`:@@all-features.field-execution.eyebrow:PLAN & EXECUTE`,
    title: $localize`:@@all-features.field-execution.title:Field Execution`,
    description: $localize`:@@all-features.field-execution.description:Plan the day, guide representatives along the best routes, and verify every visit even without a connection.`,
    count: $localize`:@@all-features.field-execution.count:4 features`,
    items: pickFeatureCards([
      {
        id: 'visit-planning',
        title: $localize`:@@all-features.visit-planning.title:Visit Planning`,
        description: $localize`:@@all-features.visit-planning.description:Plan daily customer visits, assign journeys to representatives, and compare planned versus actual visits.`,
      },
      {
        id: 'route-optimization',
        title: $localize`:@@all-features.route-optimization.title:Route Optimization`,
        description: $localize`:@@all-features.route-optimization.description:Build optimized sales routes with automated, dynamic, and AI-powered route optimization across your territories.`,
      },
      {
        id: 'gps-tracking',
        title: $localize`:@@all-features.gps-tracking.title:GPS Tracking`,
        description: $localize`:@@all-features.gps-tracking.description:Verify check-ins and check-outs with GPS and give managers live visibility into field team activity.`,
      },
      {
        id: 'offline-mode',
        title: $localize`:@@all-features.offline-mode.title:Offline Mode`,
        description: $localize`:@@all-features.offline-mode.description:Keep visiting customers, taking orders, and collecting payments without connectivity, then sync automatically.`,
      },
    ]),
  },
  {
    eyebrow: $localize`:@@all-features.sales-orders.eyebrow:SELL & COLLECT`,
    title: $localize`:@@all-features.sales-orders.title:Sales & Orders`,
    description: $localize`:@@all-features.sales-orders.description:Take orders, sell from vans, apply promotions, and collect payments with ERP data at every step.`,
    count: $localize`:@@all-features.sales-orders.count:6 features`,
    items: pickFeatureCards([
      {
        id: 'sales-order-management',
        title: $localize`:@@all-features.sales-order-management.title:Sales Order Management`,
        description: $localize`:@@all-features.sales-order-management.description:Create sales orders during visits using products, customer-specific pricing, and available inventory from your ERP.`,
      },
      {
        id: 'van-sales',
        title: $localize`:@@all-features.van-sales.title:Van Sales & Van Stock`,
        description: $localize`:@@all-features.van-sales.description:Sell directly from vehicles with full visibility into van inventory, loading, and customer transactions.`,
      },
      {
        id: 'trade-promotions',
        title: $localize`:@@all-features.trade-promotions.title:Trade Promotions`,
        description: $localize`:@@all-features.trade-promotions.description:Apply approved trade promotions during the sales process so representatives never miss a relevant offer.`,
      },
      {
        id: 'inventory-visibility',
        title: $localize`:@@all-features.inventory-visibility.title:Inventory Visibility`,
        description: $localize`:@@all-features.inventory-visibility.description:View available stock across warehouses and vans in real time before committing to customer orders.`,
      },
      {
        id: 'collections-management',
        title: $localize`:@@all-features.collections-management.title:Collections Management`,
        description: $localize`:@@all-features.collections-management.description:Record cash, cheques, and payments in the field and keep every collection connected to your financial processes.`,
      },
      {
        id: 'workflow-approvals',
        title: $localize`:@@all-features.workflow-approvals.title:Workflow & Approvals`,
        description: $localize`:@@all-features.workflow-approvals.description:Route discounts and sales orders through configurable, multi-level approval workflows based on your business rules.`,
      },
    ]),
  },
  {
    eyebrow: $localize`:@@all-features.customers-crm.eyebrow:KNOW EVERY ACCOUNT`,
    title: $localize`:@@all-features.customers-crm.title:Customers & CRM`,
    description: $localize`:@@all-features.customers-crm.description:Keep complete customer context in the field, from account details to every past interaction.`,
    count: $localize`:@@all-features.customers-crm.count:2 features`,
    items: pickFeatureCards([
      {
        id: 'customer-management',
        title: $localize`:@@all-features.customer-management.title:Customer Management`,
        description: $localize`:@@all-features.customer-management.description:Access customer profiles, locations, balances, and account activity before and during every visit.`,
      },
      {
        id: 'crm-activity-management',
        title: $localize`:@@all-features.crm-activity-management.title:CRM & Activity Management`,
        description: $localize`:@@all-features.crm-activity-management.description:See visits, activities, orders, collections, and follow-ups for each customer in one chronological timeline.`,
      },
    ]),
  },
  {
    eyebrow: $localize`:@@all-features.performance-insights.eyebrow:MEASURE & IMPROVE`,
    title: $localize`:@@all-features.performance-insights.title:Performance & Insights`,
    description: $localize`:@@all-features.performance-insights.description:Track targets, reward performance, and use analytics and AI to see what is happening in the field.`,
    count: $localize`:@@all-features.performance-insights.count:4 features`,
    items: pickFeatureCards([
      {
        id: 'sales-targets-kpis',
        title: $localize`:@@all-features.sales-targets-kpis.title:Sales Targets & KPIs`,
        description: $localize`:@@all-features.sales-targets-kpis.description:Set sales targets by representative or team and track coverage and performance throughout the period.`,
      },
      {
        id: 'commission-management',
        title: $localize`:@@all-features.commission-management.title:Commission Management`,
        description: $localize`:@@all-features.commission-management.description:Create flexible commission schemes for individual representatives or teams based on how you measure performance.`,
      },
      {
        id: 'dashboards-analytics',
        title: $localize`:@@all-features.dashboards-analytics.title:Dashboards & Analytics`,
        description: $localize`:@@all-features.dashboards-analytics.description:Monitor sales, representatives, routes, and territories with dashboards that turn field data into decisions.`,
      },
      {
        id: 'dynaops365-ai',
        title: $localize`:@@all-features.dynaops365-ai.title:DynaOps AI`,
        description: $localize`:@@all-features.dynaops365-ai.description:An evolving AI layer that delivers sales insights, supports field operations, and helps managers decide faster.`,
      },
    ]),
  },
];

// One slide per card, in the cards' order; each file is named after the feature's route.
const SLIDE_ALTS: Record<FeatureCardId, string> = {
  'visit-planning': $localize`:@@all-features.slide.visit-planning:DynaOps weekly coverage plan for Mohamed Ahmed with planned, completed and missed visits`,
  'route-optimization': $localize`:@@all-features.slide.route-optimization:DynaOps optimized route for Mohamed Ahmed with distance, drive time and the next stops`,
  'gps-tracking': $localize`:@@all-features.slide.gps-tracking:DynaOps live field activity map for North Riyadh with each representative's status`,
  'offline-mode': $localize`:@@all-features.slide.offline-mode:DynaOps team sync status for Riyadh North with online, offline and pending items per representative`,
  'sales-order-management': $localize`:@@all-features.slide.sales-order-management:DynaOps new sales order for Al Noor Markets with order lines, promotion discount and total`,
  'van-sales': $localize`:@@all-features.slide.van-sales:DynaOps van stock for VAN-07 with loaded, sold and available quantities per item`,
  'trade-promotions': $localize`:@@all-features.slide.trade-promotions:DynaOps sales order for Al Rawad Trading with a buy 10 get 1 free promotion applied`,
  'inventory-visibility': $localize`:@@all-features.slide.inventory-visibility:DynaOps product availability for Orange Juice 1L across the Riyadh, Jeddah and Dammam warehouses`,
  'collections-management': $localize`:@@all-features.slide.collections-management:DynaOps collections for Mohamed Ahmed with collected, pending and remaining amounts per customer`,
  'workflow-approvals': $localize`:@@all-features.slide.workflow-approvals:DynaOps discount approval rule with its conditions and two approval levels`,
  'customer-management': $localize`:@@all-features.slide.customer-management:DynaOps customer profile for Alfa Company with credit, balance, last order and suggested actions`,
  'crm-activity-management': $localize`:@@all-features.slide.crm-activity-management:DynaOps customer timeline for Al Noor Markets with visits, orders, collections and follow-ups`,
  'sales-targets-kpis': $localize`:@@all-features.slide.sales-targets-kpis:DynaOps Q4 sales target for Riyadh North with progress per representative`,
  'commission-management': $localize`:@@all-features.slide.commission-management:DynaOps Q4 commission run for Riyadh North with the commission basis and each representative's earnings`,
  'dashboards-analytics': $localize`:@@all-features.slide.dashboards-analytics:DynaOps field execution dashboard for the last 8 weeks with visits, orders and collections`,
  'dynaops365-ai': $localize`:@@all-features.slide.dynaops365-ai:DynaOps AI insights for Riyadh North with suggested route, risk and promotion actions`,
};

const CARDS = GROUPS.flatMap((group) => group.items);
const SLIDES: AllFeaturesSlide[] = Object.entries(SLIDE_ALTS).map(([id, alt], i) => ({
  label: CARDS[i].title,
  src: `${dir}/${id}.webp`,
  alt,
  width: 816,
  height: 840,
}));

const HERO: AllFeaturesHeroContent = {
  title: $localize`:@@all-features.hero.title:Every DynaOps feature, connected to Microsoft Dynamics 365 F&O`,
  titleHighlight: $localize`:@@all-features.hero.titleHighlight:Microsoft Dynamics 365 F&O`,
  subtitle: $localize`:@@all-features.hero.subtitle:Explore the DynaOps SFA features that help your teams plan visits, take orders, sell from vans, collect payments, and track performance with Microsoft Dynamics 365 Finance & Operations as the single source of truth.`,
  subtitleEmphasis: $localize`:@@all-features.hero.subtitleEmphasis:Microsoft Dynamics 365 Finance & Operations`,
  cta: FEATURE_HERO_DEFAULTS.cta,
  explore: {
    label: $localize`:@@all-features.hero.explore:Explore features`,
    targetId: 'features',
  },
  carouselLabel: $localize`:@@all-features.hero.carousel:DynaOps feature previews`,
  slides: SLIDES,
};

const CATALOG: AllFeaturesCatalog = {
  id: HERO.explore.targetId,
  title: $localize`:@@all-features.catalog.title:Everything your field sales team needs`,
  description: $localize`:@@all-features.catalog.description:Explore features organized around the way your field teams work, all running on your Microsoft Dynamics 365 F&O data.`,
  groups: GROUPS,
};

// The artwork comes from the section defaults; every frame keeps both paragraphs, 16px apart.
const INTEGRATION: ErpIntegrationCopy = {
  title: $localize`:@@all-features.integration.title:One ERP.\nOne Connected Sales Process.`,
  paragraphs: [
    $localize`:@@all-features.integration.paragraph-1:Microsoft Dynamics 365 F&O remains responsible for your core ERP data and processes, while DynaOps provides a focused experience for field representatives and sales managers.`,
    $localize`:@@all-features.integration.paragraph-2:This helps extend your existing Dynamics environment into daily field sales operations without introducing a separate sales platform as the new system of record.`,
  ],
  allParagraphsOnPhone: true,
  spacedParagraphs: true,
  textWidth: 485,
};

const FOOTER_CTA: CtaContent = {
  title: $localize`:@@all-features.cta.title:Ready to see every feature in action?`,
  description: $localize`:@@all-features.cta.description:Book a demo to see how DynaOps connects your sales representatives, managers, and Microsoft Dynamics 365 F&O.`,
  button: FEATURE_HERO_DEFAULTS.cta,
  // Figma uses the same device photo across the feature pages.
  image: CUSTOMER_MANAGEMENT_CONTENT.footerCta.image,
};

export const ALL_FEATURES_CONTENT: AllFeaturesContent = {
  hero: HERO,
  catalog: CATALOG,
  integration: INTEGRATION,
  footerCta: FOOTER_CTA,
};

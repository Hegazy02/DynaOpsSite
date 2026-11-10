import { CUSTOMER_MANAGEMENT_CONTENT } from '../customer-management/customer-management-content';
import { FEATURE_HERO_DEFAULTS } from '../components/feature-hero/feature-hero-content';
import type { FeatureHeroCopy } from '../components/feature-hero/feature-hero.model';
import type { FeatureCapabilitiesContent } from '../components/feature-capabilities/feature-capabilities.model';
import type { FeatureConnectionsContent } from '../components/feature-connections/feature-connections.model';
import type { FeaturePageContent } from '../components/feature-page/feature-page.model';
import type { FeatureShowcaseContent } from '../components/feature-showcase/feature-showcase.model';
import type { CtaContent } from '../../../shared/ui/cta-container/cta-container.model';
import type { ErpIntegrationCopy } from '../../../shared/ui/erp-integration/erp-integration.model';

// Copy is English here; src/locale/ar/features.json carries the Arabic under the same ids.
// The mocks carry UI text, so the artwork folder is localized like the copy.
const dir = $localize`:@@dashboards-analytics.imageDir:/images/features/dashboards-analytics`;

// The Arabic tablet frame keeps Van Sales' note; the desktop and phone frames hold the final copy.
const HERO: FeatureHeroCopy = {
  eyebrow: $localize`:@@dashboards-analytics.hero.eyebrow:Dashboards & Analytics for Field Sales`,
  title: $localize`:@@dashboards-analytics.hero.title:See Your Field Sales Operation from One Management View`,
  subtitle: $localize`:@@dashboards-analytics.hero.subtitle:DynaOps brings field sales activity and performance into focused management dashboards.`,
  note: $localize`:@@dashboards-analytics.hero.note:Monitor representatives, customer coverage, visits, routes, territories, orders, and collections to understand what is happening across your sales operation and where management attention is needed.`,
  image: {
    src: `${dir}/hero.webp`,
    alt: $localize`:@@dashboards-analytics.hero.imageAlt:DynaOps field execution dashboard for the last 8 weeks with visits, orders and collections totals, a weekly trend chart and progress by representative`,
    width: 408,
    height: 420,
  },
};

// The English desktop frame keeps Visit Planning's title, and the Arabic tablet frame Van Sales' paragraphs;
// the other frames hold the final copy.
const CAPABILITIES: FeatureCapabilitiesContent = {
  title: $localize`:@@dashboards-analytics.capabilities.title:Turn Field Activity into Management Visibility`,
  paragraphs: [
    $localize`:@@dashboards-analytics.capabilities.paragraph-1:Field sales generates activity across customers, representatives, territories, and transactions every day.`,
    $localize`:@@dashboards-analytics.capabilities.paragraph-2:DynaOps brings that information together so managers can move beyond scattered reports and see the wider picture of sales execution.`,
  ],
  items: [
    {
      title: $localize`:@@dashboards-analytics.capabilities.representatives.title:Representative Performance`,
      description: $localize`:@@dashboards-analytics.capabilities.representatives.description:Monitor sales representative activity and performance across assigned customers and territories.`,
      image: { src: `${dir}/capability-1.webp`, width: 366, height: 259 },
    },
    {
      title: $localize`:@@dashboards-analytics.capabilities.coverage.title:Customer Coverage`,
      description: $localize`:@@dashboards-analytics.capabilities.coverage.description:See how customers are being covered and identify accounts or areas where field activity needs attention.`,
      image: { src: `${dir}/capability-2.webp`, width: 360, height: 259 },
    },
    {
      title: $localize`:@@dashboards-analytics.capabilities.visits.title:Visits & Field Execution`,
      description: $localize`:@@dashboards-analytics.capabilities.visits.description:Track visit activity and understand how planned customer engagement is being executed across the team.`,
      image: { src: `${dir}/capability-3.webp`, width: 360, height: 259 },
    },
    {
      title: $localize`:@@dashboards-analytics.capabilities.routes.title:Routes & Territories`,
      description: $localize`:@@dashboards-analytics.capabilities.routes.description:Compare field activity across routes, territories, and regions to understand differences in execution.`,
      image: { src: `${dir}/capability-4.webp`, width: 360, height: 259 },
    },
    {
      title: $localize`:@@dashboards-analytics.capabilities.orders.title:Sales Orders`,
      description: $localize`:@@dashboards-analytics.capabilities.orders.description:Follow order activity across customers, representatives, and sales areas as part of the broader field sales picture.`,
      image: { src: `${dir}/capability-5.webp`, width: 366, height: 259 },
    },
    {
      title: $localize`:@@dashboards-analytics.capabilities.collections.title:Collections`,
      description: $localize`:@@dashboards-analytics.capabilities.collections.description:Monitor collection activity alongside other customer and sales interactions.`,
      image: { src: `${dir}/capability-6.webp`, width: 360, height: 259 },
    },
  ],
};

const CONNECTIONS: FeatureConnectionsContent = {
  title: $localize`:@@dashboards-analytics.connections.title:See the Story Behind Field Performance`,
  paragraphs: [
    $localize`:@@dashboards-analytics.connections.paragraph-1:A single number rarely explains what is happening in the field.`,
    $localize`:@@dashboards-analytics.connections.paragraph-2:DynaOps lets managers look across customer coverage, visits, routes, sales activity, and collections to understand where execution is strong and where gaps are developing.`,
    $localize`:@@dashboards-analytics.connections.paragraph-3:The goal is not more reports it is a clearer operational picture.`,
  ],
  spacedPulse: true,
  hub: {
    label: $localize`:@@dashboards-analytics.connections.hub:Operational picture`,
    icon: '/icons/features/chart-up-white.svg',
  },
  items: [
    {
      label: $localize`:@@dashboards-analytics.connections.coverage:Customer coverage`,
      icon: '/icons/features/user-circle-02-brand.svg',
    },
    {
      label: $localize`:@@dashboards-analytics.connections.visits:Visits`,
      icon: '/icons/features/calendar-02-brand.svg',
    },
    {
      label: $localize`:@@dashboards-analytics.connections.routes:Routes`,
      icon: '/icons/shared/route-02-brand.svg',
    },
    {
      label: $localize`:@@dashboards-analytics.connections.sales-activity:Sales activity`,
      icon: '/icons/features/package-moving-brand.svg',
    },
    {
      label: $localize`:@@dashboards-analytics.connections.collections:Collections`,
      icon: '/icons/features/save-money-dollar-brand.svg',
    },
  ],
};

const SHOWCASE: FeatureShowcaseContent = {
  title: $localize`:@@dashboards-analytics.showcase.title:One View Across Your Sales Organization`,
  paragraphs: [
    $localize`:@@dashboards-analytics.showcase.paragraph-1:Whether you are reviewing a representative, route, territory, or region, DynaOps provides a consistent management view across the field organization.`,
    $localize`:@@dashboards-analytics.showcase.paragraph-2:This helps sales leaders compare execution across teams and focus attention on the areas that need it most.`,
  ],
  image: {
    src: `${dir}/showcase.webp`,
    alt: $localize`:@@dashboards-analytics.showcase.imageAlt:DynaOps drill-down for the Central region in week 43, from region to territory, route, representative and customer, each with its coverage and orders`,
    width: 560,
    height: 342,
  },
};

const INTEGRATION: ErpIntegrationCopy = {
  title: $localize`:@@dashboards-analytics.integration.title:Connected with Microsoft Dynamics 365 F&O`,
  paragraphs: [
    $localize`:@@dashboards-analytics.integration.paragraph-1:DynaOps combines field execution with the business environment connected to Microsoft Dynamics 365 Finance & Operations.`,
    $localize`:@@dashboards-analytics.integration.paragraph-2:Dynamics 365 remains the core ERP, while DynaOps gives sales managers a focused view of what is happening outside the traditional ERP interface.`,
  ],
  emphasis: $localize`:@@dashboards-analytics.integration.emphasis:Microsoft Dynamics 365 Finance & Operations.`,
  allParagraphsOnPhone: true,
  spacedParagraphs: true,
  textWidth: 512,
};

// The English desktop frame tries a different device photo; the tablet, phone and Arabic frames keep the shared one.
const FOOTER_CTA: CtaContent = {
  title: $localize`:@@dashboards-analytics.cta.title:Turn Field Data into Clearer Sales Decisions`,
  description: $localize`:@@dashboards-analytics.cta.description:See how DynaOps gives managers a connected view of representatives, customers, routes, territories, orders, and collections.`,
  button: FEATURE_HERO_DEFAULTS.cta,
  image: CUSTOMER_MANAGEMENT_CONTENT.footerCta.image,
};

export const DASHBOARDS_ANALYTICS_CONTENT: FeaturePageContent = {
  hero: HERO,
  capabilities: CAPABILITIES,
  connections: CONNECTIONS,
  showcase: SHOWCASE,
  integration: INTEGRATION,
  footerCta: FOOTER_CTA,
};

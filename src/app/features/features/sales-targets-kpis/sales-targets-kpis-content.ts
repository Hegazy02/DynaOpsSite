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
const dir = $localize`:@@sales-targets-kpis.imageDir:/images/features/sales-targets-kpis`;

// The English frames keep Customer Management's eyebrow; this one follows the Arabic frames.
const HERO: FeatureHeroCopy = {
  eyebrow: $localize`:@@sales-targets-kpis.hero.eyebrow:Sales Targets & KPIs for Field Sales`,
  title: $localize`:@@sales-targets-kpis.hero.title:Connect Sales Goals with What’s Happening in the Field`,
  subtitle: $localize`:@@sales-targets-kpis.hero.subtitle:DynaOps brings sales targets and field execution together.`,
  note: $localize`:@@sales-targets-kpis.hero.note:Track target progress alongside customer coverage, visits, orders, collections, and representative performance to understand whether daily sales activity is supporting your commercial goals.`,
  image: {
    src: `${dir}/hero.webp`,
    alt: $localize`:@@sales-targets-kpis.hero.imageAlt:DynaOps Q4 sales target for Riyadh North at SAR 1.84M of SAR 2.60M, 71% achieved and ahead of plan, with progress for each representative`,
    width: 408,
    height: 420,
  },
};

// The two tablet frames swap the Representative Performance mocks, so each language takes the other frame's export.
const CAPABILITIES: FeatureCapabilitiesContent = {
  title: $localize`:@@sales-targets-kpis.capabilities.title:Turn Sales Targets into Actionable Performance`,
  paragraphs: [
    $localize`:@@sales-targets-kpis.capabilities.paragraph-1:A target tells you where you want to go. Field execution shows whether your team is getting there.`,
    $localize`:@@sales-targets-kpis.capabilities.paragraph-2:DynaOps helps sales managers connect both sides and identify where attention is needed during the sales period.`,
  ],
  items: [
    {
      title: $localize`:@@sales-targets-kpis.capabilities.progress.title:Target Progress`,
      description: $localize`:@@sales-targets-kpis.capabilities.progress.description:Track performance against assigned sales targets and follow progress throughout the period.`,
      image: { src: `${dir}/capability-1.webp`, width: 360, height: 268 },
    },
    {
      title: $localize`:@@sales-targets-kpis.capabilities.representatives.title:Representative Performance`,
      description: $localize`:@@sales-targets-kpis.capabilities.representatives.description:Understand how individual sales representatives are performing against their goals and assigned responsibilities.`,
      image: { src: `${dir}/capability-2.webp`, width: 360, height: 268 },
    },
    {
      title: $localize`:@@sales-targets-kpis.capabilities.coverage.title:Customer Coverage`,
      description: $localize`:@@sales-targets-kpis.capabilities.coverage.description:Monitor whether assigned customers are being visited and served as planned across the sales cycle.`,
      image: { src: `${dir}/capability-3.webp`, width: 360, height: 268 },
    },
    {
      title: $localize`:@@sales-targets-kpis.capabilities.territories.title:Territory & Region Performance`,
      description: $localize`:@@sales-targets-kpis.capabilities.territories.description:Compare execution and results across territories and regions to identify performance gaps.`,
      image: { src: `${dir}/capability-4.webp`, width: 360, height: 268 },
    },
    {
      title: $localize`:@@sales-targets-kpis.capabilities.execution.title:Execution KPIs`,
      description: $localize`:@@sales-targets-kpis.capabilities.execution.description:Connect customer visits, sales orders, collections, and other field activities with overall sales performance.`,
      image: { src: `${dir}/capability-5.webp`, width: 384, height: 268 },
    },
  ],
};

const CONNECTIONS: FeatureConnectionsContent = {
  title: $localize`:@@sales-targets-kpis.connections.title:Understand the Gap Between Target and Execution`,
  paragraphs: [
    $localize`:@@sales-targets-kpis.connections.paragraph-1:When performance falls behind, the final sales number does not explain why.`,
    $localize`:@@sales-targets-kpis.connections.paragraph-2:DynaOps gives managers the context behind the result by connecting target achievement with the activities taking place in the field.`,
    $localize`:@@sales-targets-kpis.connections.paragraph-3:See whether the issue is customer coverage, visit execution, order activity, collections, or representative performance and focus management attention where it matters.`,
  ],
  compactHub: true,
  hub: {
    label: $localize`:@@sales-targets-kpis.connections.hub:Target gap`,
    icon: '/icons/features/target-02-white.svg',
  },
  items: [
    {
      label: $localize`:@@sales-targets-kpis.connections.coverage:Customer\ncoverage`,
      icon: '/icons/features/user-circle-02-brand.svg',
    },
    {
      label: $localize`:@@sales-targets-kpis.connections.visits:Visit\nexecution`,
      icon: '/icons/features/calendar-user-brand.svg',
    },
    {
      label: $localize`:@@sales-targets-kpis.connections.orders:Order\nactivity`,
      icon: '/icons/features/add-to-list-brand.svg',
    },
    {
      label: $localize`:@@sales-targets-kpis.connections.collections:Collections`,
      icon: '/icons/features/save-money-dollar-brand.svg',
    },
    {
      label: $localize`:@@sales-targets-kpis.connections.representatives:Rep\nperformance`,
      icon: '/icons/features/analytics-up-brand.svg',
    },
  ],
};

const SHOWCASE: FeatureShowcaseContent = {
  title: $localize`:@@sales-targets-kpis.showcase.title:Keep Goals Visible Across the Sales Team`,
  paragraphs: [
    $localize`:@@sales-targets-kpis.showcase.paragraph-1:DynaOps gives representatives and managers a clearer connection between assigned objectives and daily execution.`,
    $localize`:@@sales-targets-kpis.showcase.paragraph-2:Sales teams understand what they are working toward, while managers can follow progress across representatives, territories, and regions.`,
  ],
  image: {
    src: `${dir}/showcase.webp`,
    alt: $localize`:@@sales-targets-kpis.showcase.imageAlt:DynaOps Riyadh North Q4 team goal of SAR 2.60M shown two ways: Mohamed's own share, visits and collections, and the manager's view of each region`,
    width: 560,
    height: 342,
  },
};

const INTEGRATION: ErpIntegrationCopy = {
  title: $localize`:@@sales-targets-kpis.integration.title:Connected with Microsoft Dynamics 365 F&O`,
  paragraphs: [
    $localize`:@@sales-targets-kpis.integration.paragraph-1:DynaOps combines field execution with the sales environment connected to Microsoft Dynamics 365 Finance & Operations.`,
    $localize`:@@sales-targets-kpis.integration.paragraph-2:Dynamics 365 remains your core ERP, while DynaOps provides a focused layer for managing sales targets, KPIs, and field performance.`,
  ],
  allParagraphsOnPhone: true,
  spacedParagraphs: true,
  textWidth: 512,
};

const FOOTER_CTA: CtaContent = {
  title: $localize`:@@sales-targets-kpis.cta.title:Turn Sales Targets into Better Execution`,
  description: $localize`:@@sales-targets-kpis.cta.description:See how DynaOps helps you connect commercial goals with customer coverage, field activities, and sales performance.`,
  button: FEATURE_HERO_DEFAULTS.cta,
  // Figma uses the same device photo across the feature pages.
  image: CUSTOMER_MANAGEMENT_CONTENT.footerCta.image,
};

export const SALES_TARGETS_KPIS_CONTENT: FeaturePageContent = {
  title: $localize`:@@sales-targets-kpis.title:Sales Targets & KPIs for Field Sales Teams`,
  description: $localize`:@@sales-targets-kpis.description:Track sales targets alongside visits, orders, collections and customer coverage, and see where field execution falls behind across reps and territories.`,
  hero: HERO,
  capabilities: CAPABILITIES,
  connections: CONNECTIONS,
  showcase: SHOWCASE,
  integration: INTEGRATION,
  footerCta: FOOTER_CTA,
};

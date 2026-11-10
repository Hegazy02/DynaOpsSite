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
const dir = $localize`:@@visit-planning.imageDir:/images/features/visit-planning`;

const HERO: FeatureHeroCopy = {
  eyebrow: $localize`:@@visit-planning.hero.eyebrow:Customer Visit Planning for Field Sales`,
  title: $localize`:@@visit-planning.hero.title:Plan Customer Coverage. Track What Actually Happened.`,
  subtitle: $localize`:@@visit-planning.hero.subtitle:DynaOps helps sales managers organize customer visits, define visit frequency, and give every representative a clear field plan.`,
  note: $localize`:@@visit-planning.hero.note:Track planned versus completed visits, identify coverage gaps, and keep every visit connected to the customer and the wider sales process.`,
  image: {
    src: `${dir}/hero.webp`,
    alt: $localize`:@@visit-planning.hero.imageAlt:DynaOps weekly coverage plan for Mohamed Ahmed with planned, completed and coverage totals above each day's planned versus visited progress`,
    width: 408,
    height: 420,
  },
};

// The Arabic desktop frame keeps CRM's first paragraph; the Arabic tablet and phone frames hold the final copy.
const CAPABILITIES: FeatureCapabilitiesContent = {
  title: $localize`:@@visit-planning.capabilities.title:Build a Structured Customer Coverage Plan`,
  paragraphs: [
    $localize`:@@visit-planning.capabilities.paragraph-1:Field sales should not depend on representatives deciding who to visit each day.`,
    $localize`:@@visit-planning.capabilities.paragraph-2:DynaOps helps managers turn customer coverage requirements into clear, repeatable visit plans that guide daily field execution.`,
  ],
  items: [
    {
      title: $localize`:@@visit-planning.capabilities.planning.title:Customer Visit Planning`,
      description: $localize`:@@visit-planning.capabilities.planning.description:Plan the customers each representative is expected to visit and organize daily field activity around assigned accounts.`,
      image: { src: `${dir}/capability-1.webp`, width: 360, height: 259 },
    },
    {
      title: $localize`:@@visit-planning.capabilities.recurring.title:Recurring Visit Plans`,
      description: $localize`:@@visit-planning.capabilities.recurring.description:Create recurring visit schedules for customers that need regular coverage.`,
      image: { src: `${dir}/capability-2.webp`, width: 360, height: 259 },
    },
    {
      title: $localize`:@@visit-planning.capabilities.frequency.title:Visit Frequency`,
      description: $localize`:@@visit-planning.capabilities.frequency.description:Define how often each customer should be visited weekly, multiple times per month, or according to your sales plan.`,
      image: { src: `${dir}/capability-3.webp`, width: 360, height: 259 },
    },
    {
      title: $localize`:@@visit-planning.capabilities.daily.title:Daily Visit Plan`,
      description: $localize`:@@visit-planning.capabilities.daily.description:Give representatives a clear view of the customers and activities scheduled for each working day.`,
      image: { src: `${dir}/capability-4.webp`, width: 360, height: 259 },
    },
    {
      title: $localize`:@@visit-planning.capabilities.planned-actual.title:Planned vs. Actual`,
      description: $localize`:@@visit-planning.capabilities.planned-actual.description:Compare planned visits with completed visits to identify missed customers and execution gaps.`,
      image: { src: `${dir}/capability-5.webp`, width: 360, height: 259 },
    },
    {
      title: $localize`:@@visit-planning.capabilities.history.title:Visit History`,
      description: $localize`:@@visit-planning.capabilities.history.description:Keep completed visits connected to each customer to maintain a clear history of field engagement.`,
      image: { src: `${dir}/capability-6.webp`, width: 360, height: 268 },
    },
  ],
};

// The English tablet and phone frames add a third paragraph from the showcase; the desktop pair is final.
const CONNECTIONS: FeatureConnectionsContent = {
  title: $localize`:@@visit-planning.connections.title:Connect Planning with Field Execution`,
  paragraphs: [
    $localize`:@@visit-planning.connections.paragraph-1:Visit plans work alongside GPS validation, customer management, CRM activities, route optimization, sales orders, and collections.`,
    $localize`:@@visit-planning.connections.paragraph-2:This gives representatives a connected workflow from planned customer coverage through actual sales execution.`,
  ],
  spacedPulse: true,
  hub: {
    label: $localize`:@@visit-planning.connections.hub:Visit plan`,
    icon: '/icons/features/calendar-02-white.svg',
  },
  items: [
    {
      label: $localize`:@@visit-planning.connections.gps:GPS\nvalidation`,
      icon: '/icons/features/maps-search-brand.svg',
    },
    {
      label: $localize`:@@visit-planning.connections.customer-management:Customer\nmanagement`,
      icon: '/icons/features/user-circle-02-brand.svg',
    },
    {
      label: $localize`:@@visit-planning.connections.crm:CRM\nactivities`,
      icon: '/icons/features/chart-relationship-brand.svg',
    },
    {
      label: $localize`:@@visit-planning.connections.route-optimization:Route\noptimization`,
      icon: '/icons/shared/route-02-brand.svg',
    },
    {
      label: $localize`:@@visit-planning.connections.sales-orders:Sales\norders`,
      icon: '/icons/shared/safe-delivery-01-brand.svg',
    },
  ],
};

// The English tablet and phone frames keep CRM's paragraphs here; the desktop copy is final.
const SHOWCASE: FeatureShowcaseContent = {
  title: $localize`:@@visit-planning.showcase.title:Make Customer Coverage Measurable`,
  paragraphs: [
    $localize`:@@visit-planning.showcase.paragraph-1:Knowing that a representative was “in the field” is not enough.`,
    $localize`:@@visit-planning.showcase.paragraph-2:DynaOps shows which customers were planned, which were actually visited, and where coverage gaps remain.`,
    $localize`:@@visit-planning.showcase.paragraph-3:Managers can understand whether high-priority accounts are being visited with the required frequency instead of relying on assumptions or manual follow-up.`,
  ],
  image: {
    src: `${dir}/showcase.webp`,
    alt: $localize`:@@visit-planning.showcase.imageAlt:DynaOps coverage by representative for week 43 in Riyadh North, listing planned, visited and missed visits with a priority flag for each rep`,
    width: 560,
    height: 342,
  },
};

const INTEGRATION: ErpIntegrationCopy = {
  title: $localize`:@@visit-planning.integration.title:Connected with Microsoft Dynamics 365 F&O`,
  paragraphs: [
    $localize`:@@visit-planning.integration.paragraph-1:DynaOps extends customer and sales information from Microsoft Dynamics 365 Finance & Operations into the daily field plan.`,
    $localize`:@@visit-planning.integration.paragraph-2:Dynamics 365 remains your core ERP, while DynaOps helps manage how often, when, and which customers your field teams should visit.`,
  ],
  emphasis: $localize`:@@visit-planning.integration.emphasis:Microsoft Dynamics 365 Finance & Operations`,
  allParagraphsOnPhone: true,
  spacedParagraphs: true,
  textWidth: 512,
};

const FOOTER_CTA: CtaContent = {
  title: $localize`:@@visit-planning.cta.title:Turn Customer Coverage into a Repeatable Sales Process`,
  description: $localize`:@@visit-planning.cta.description:See how DynaOps helps your team plan recurring visits, manage customer frequency, and measure actual execution across the field.`,
  button: FEATURE_HERO_DEFAULTS.cta,
  // Figma uses the same device photo across the feature pages.
  image: CUSTOMER_MANAGEMENT_CONTENT.footerCta.image,
};

export const VISIT_PLANNING_CONTENT: FeaturePageContent = {
  hero: HERO,
  capabilities: CAPABILITIES,
  connections: CONNECTIONS,
  showcase: SHOWCASE,
  integration: INTEGRATION,
  footerCta: FOOTER_CTA,
};

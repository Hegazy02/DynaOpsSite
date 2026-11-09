import { CUSTOMER_MANAGEMENT_CONTENT } from '../customer-management/customer-management-content';
import { FEATURE_HERO_DEFAULTS } from '../components/feature-hero/feature-hero-content';
import type { FeatureHeroCopy } from '../components/feature-hero/feature-hero.model';
import type { FeatureCapabilitiesContent } from '../components/feature-capabilities/feature-capabilities.model';
import type { FeatureConnectionsContent } from '../components/feature-connections/feature-connections.model';
import type { CtaContent } from '../../../shared/ui/cta-container/cta-container.model';
import type { ErpIntegrationCopy } from '../../../shared/ui/erp-integration/erp-integration.model';
import type { FeatureShowcaseContent } from '../components/feature-showcase/feature-showcase.model';
import type { FeaturePageContent } from '../components/feature-page/feature-page.model';

// Copy is English here; src/locale/ar/features.json carries the Arabic under the same ids.
// The mocks carry UI text, so the artwork folder is localized like the copy.
const dir = $localize`:@@route-optimization.imageDir:/images/features/route-optimization`;

const HERO: FeatureHeroCopy = {
  eyebrow: $localize`:@@route-optimization.hero.eyebrow:AI Route Optimization for Field Sales`,
  title: $localize`:@@route-optimization.hero.title:Turn Customer Visit Plans into Smarter Sales Routes`,
  subtitle: $localize`:@@route-optimization.hero.subtitle:DynaOps helps field sales teams plan and optimize daily routes across customers, territories, and sales representatives.`,
  note: $localize`:@@route-optimization.hero.note:Combine AI-powered, automated, and dynamic route optimization with visit planning and field execution to make route management part of the sales process — not a separate planning exercise.`,
  noteEmphasis: $localize`:@@route-optimization.hero.noteEmphasis:AI-powered, automated, and dynamic route`,
  image: {
    src: `${dir}/hero.webp`,
    alt: $localize`:@@route-optimization.hero.imageAlt:DynaOps route optimized for Mohamed Ahmed in Riyadh North: 64 km and 6h 40m across five planned visits, finishing 12 minutes earlier`,
    width: 408,
    height: 420,
  },
};

// The English tablet and phone frames keep Workflow & Approvals' heading, and the English Territory mock lives
// only in the desktop variants; the desktop heading, those variants and the tablet descriptions hold the final copy.
const CAPABILITIES: FeatureCapabilitiesContent = {
  title: $localize`:@@route-optimization.capabilities.title:Plan Routes Around the Way Your Sales Team Works`,
  paragraphs: [
    $localize`:@@route-optimization.capabilities.paragraph-1:Managing a large field sales operation requires more than assigning customers to representatives.`,
    $localize`:@@route-optimization.capabilities.paragraph-2:DynaOps helps turn customer coverage plans into practical routes that sales teams can execute in the field.`,
  ],
  items: [
    {
      title: $localize`:@@route-optimization.capabilities.automated.title:Automated Route Planning`,
      description: $localize`:@@route-optimization.capabilities.automated.description:Build optimized routes from planned customer visits without relying entirely on manual route preparation.`,
      image: { src: `${dir}/capability-1.webp`, width: 361, height: 257 },
    },
    {
      title: $localize`:@@route-optimization.capabilities.dynamic.title:Dynamic Route Optimization`,
      description: $localize`:@@route-optimization.capabilities.dynamic.description:Adjust routes as field plans change, helping teams respond to changing daily requirements.`,
      image: { src: `${dir}/capability-2.webp`, width: 361, height: 268 },
    },
    {
      title: $localize`:@@route-optimization.capabilities.territory.title:Territory-Based Planning`,
      description: $localize`:@@route-optimization.capabilities.territory.description:Organize customers, routes, and representatives around assigned sales territories for clearer field coverage.`,
      image: { src: `${dir}/capability-3.webp`, width: 360, height: 268 },
    },
    {
      title: $localize`:@@route-optimization.capabilities.visits.title:Customer Visit Planning`,
      description: $localize`:@@route-optimization.capabilities.visits.description:Connect route planning directly with customer visit schedules so representatives know where they need to go and what they need to cover.`,
      image: { src: `${dir}/capability-4.webp`, width: 361, height: 268 },
    },
    {
      title: $localize`:@@route-optimization.capabilities.gps.title:GPS-Connected Execution`,
      description: $localize`:@@route-optimization.capabilities.gps.description:Link route execution with GPS-based customer visits to give managers greater visibility into what happened in the field.`,
      image: { src: `${dir}/capability-5.webp`, width: 360, height: 268 },
    },
    {
      title: $localize`:@@route-optimization.capabilities.planned-actual.title:Planned vs. Actual`,
      description: $localize`:@@route-optimization.capabilities.planned-actual.description:Compare planned routes and visits with actual field execution to identify missed customers and coverage gaps.`,
      image: { src: `${dir}/capability-6.webp`, width: 360, height: 257 },
    },
  ],
};

// The English frames break each activity label over two lines; the Arabic ones keep them on one.
const CONNECTIONS: FeatureConnectionsContent = {
  title: $localize`:@@route-optimization.connections.title:From Route Planning to Field Execution`,
  paragraphs: [
    $localize`:@@route-optimization.connections.paragraph-1:A route is only useful if the sales team can execute it.`,
    $localize`:@@route-optimization.connections.paragraph-2:DynaOps connects route optimization with visit planning, GPS activity, customer management, and sales operations.`,
    $localize`:@@route-optimization.connections.paragraph-3:Managers can plan coverage while representatives work from a clear daily journey — with actual execution visible after the visit.`,
  ],
  compactHub: true,
  spacedPulse: true,
  hub: {
    label: $localize`:@@route-optimization.connections.hub:Route optimization`,
    icon: '/icons/shared/route-02-white.svg',
  },
  items: [
    {
      label: $localize`:@@route-optimization.connections.visit-planning:Visit\nplanning`,
      icon: '/icons/features/calendar-02-brand.svg',
    },
    {
      label: $localize`:@@route-optimization.connections.gps-activity:GPS\nactivity`,
      icon: '/icons/features/maps-global-01-brand.svg',
    },
    {
      label: $localize`:@@route-optimization.connections.customer-management:Customer\nmanagement`,
      icon: '/icons/features/user-brand.svg',
    },
    {
      label: $localize`:@@route-optimization.connections.sales-operations:Sales\noperations`,
      icon: '/icons/features/add-to-list-brand.svg',
    },
  ],
};

const SHOWCASE: FeatureShowcaseContent = {
  title: $localize`:@@route-optimization.dashboard.title:Know What's Happening Across Your Distribution Network`,
  paragraphs: [
    $localize`:@@route-optimization.dashboard.paragraph-1:Monitor customer coverage, completed visits, sales orders, collections, and representative performance through DynaOps dashboards.`,
    $localize`:@@route-optimization.dashboard.paragraph-2:Identify missed visits and sales activity gaps across routes and territories, giving managers a clearer picture of field execution.`,
  ],
  image: {
    src: `${dir}/dashboard.webp`,
    alt: $localize`:@@route-optimization.dashboard.imageAlt:DynaOps route execution dashboard with 92% route adherence, 87% customer coverage and 214 of 240 visits completed, plus performance for Riyadh North, Olaya and Al Malaz`,
    width: 560,
    height: 342,
  },
};

const INTEGRATION: ErpIntegrationCopy = {
  title: $localize`:@@route-optimization.integration.title:Connected with Microsoft Dynamics 365 F&O`,
  paragraphs: [
    $localize`:@@route-optimization.integration.paragraph-1:Route planning in DynaOps works alongside customer and sales information connected with Microsoft Dynamics 365 Finance & Operations.`,
    $localize`:@@route-optimization.integration.paragraph-2:Your ERP remains the core business system, while DynaOps provides the field planning and execution experience your sales team needs.`,
  ],
  emphasis: $localize`:@@route-optimization.integration.emphasis:Microsoft Dynamics 365 Finance & Operations.`,
  allParagraphsOnPhone: true,
  spacedParagraphs: true,
  textWidth: 512,
};

const FOOTER_CTA: CtaContent = {
  title: $localize`:@@route-optimization.cta.title:Make Every Sales Route More Purposeful`,
  description: $localize`:@@route-optimization.cta.description:See how DynaOps can help your team plan smarter routes, improve customer coverage, and connect daily journeys with actual field execution.`,
  button: FEATURE_HERO_DEFAULTS.cta,
  // Figma uses the same device photo across the feature pages.
  image: CUSTOMER_MANAGEMENT_CONTENT.footerCta.image,
};

export const ROUTE_OPTIMIZATION_CONTENT: FeaturePageContent = {
  hero: HERO,
  capabilities: CAPABILITIES,
  connections: CONNECTIONS,
  showcase: SHOWCASE,
  integration: INTEGRATION,
  footerCta: FOOTER_CTA,
};

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
const dir = $localize`:@@crm-activity-management.imageDir:/images/features/crm-activity-management`;

const HERO: FeatureHeroCopy = {
  eyebrow: $localize`:@@crm-activity-management.hero.eyebrow:CRM & Activity Management for Field Sales`,
  title: $localize`:@@crm-activity-management.hero.title:Keep Every Customer Interaction Connected`,
  subtitle: $localize`:@@crm-activity-management.hero.subtitle:DynaOps brings customer visits, activities, orders, collections, and field interactions into one continuous customer history.`,
  note: $localize`:@@crm-activity-management.hero.note:Give representatives the context they need before every visit while helping managers maintain a shared view of the customer relationship across the sales team.`,
  image: {
    src: `${dir}/hero.webp`,
    alt: $localize`:@@crm-activity-management.hero.imageAlt:DynaOps customer timeline for Al Noor Markets with visits, orders and collections totals above a list of calls, meetings and tasks`,
    width: 408,
    height: 420,
  },
};

// The English desktop list keeps Collections Management's fifth title, and the Arabic tablet frame its first paragraph;
// the tablet items and the desktop paragraphs hold the final copy.
const CAPABILITIES: FeatureCapabilitiesContent = {
  title: $localize`:@@crm-activity-management.capabilities.title:One Customer Timeline. Every Interaction in Context.`,
  paragraphs: [
    $localize`:@@crm-activity-management.capabilities.paragraph-1:Customer relationships develop across multiple visits and sales activities.`,
    $localize`:@@crm-activity-management.capabilities.paragraph-2:DynaOps keeps those interactions connected so representatives can understand what happened before, what was discussed, and what activity followed.`,
  ],
  items: [
    {
      title: $localize`:@@crm-activity-management.capabilities.timeline.title:Unified Customer Timeline`,
      description: $localize`:@@crm-activity-management.capabilities.timeline.description:See visits, activities, sales orders, collections, and customer interactions in one chronological history.`,
      image: { src: `${dir}/capability-1.webp`, width: 360, height: 268 },
    },
    {
      title: $localize`:@@crm-activity-management.capabilities.capture.title:Field Activity Capture`,
      description: $localize`:@@crm-activity-management.capabilities.capture.description:Record activities directly from the field so every meaningful customer interaction becomes part of the account history.`,
      image: { src: `${dir}/capability-2.webp`, width: 360, height: 268 },
    },
    {
      title: $localize`:@@crm-activity-management.capabilities.visits.title:Visit History & Context`,
      description: $localize`:@@crm-activity-management.capabilities.visits.description:Review previous visits and activities before meeting the customer again, giving representatives better context for the next conversation.`,
      image: { src: `${dir}/capability-3.webp`, width: 360, height: 268 },
    },
    {
      title: $localize`:@@crm-activity-management.capabilities.sales.title:Sales Activity History`,
      description: $localize`:@@crm-activity-management.capabilities.sales.description:Keep commercial interactions connected to the customer account instead of relying on notes scattered across different channels.`,
      image: { src: `${dir}/capability-4.webp`, width: 360, height: 247 },
    },
    {
      title: $localize`:@@crm-activity-management.capabilities.gps.title:GPS-Connected Activities`,
      description: $localize`:@@crm-activity-management.capabilities.gps.description:Connect relevant field activities with visit and location context to provide a clearer picture of what happened in the field.`,
      image: { src: `${dir}/capability-5.webp`, width: 360, height: 268 },
    },
    {
      title: $localize`:@@crm-activity-management.capabilities.shared.title:Shared Customer Knowledge`,
      description: $localize`:@@crm-activity-management.capabilities.shared.description:Give representatives and managers access to the same interaction history, helping maintain continuity across the sales team.`,
      image: { src: `${dir}/capability-6.webp`, width: 366, height: 259 },
    },
  ],
};

// The English tablet frame repeats the showcase copy here; the desktop paragraphs are final.
const CONNECTIONS: FeatureConnectionsContent = {
  title: $localize`:@@crm-activity-management.connections.title:Connect CRM with Real Field Execution`,
  paragraphs: [
    $localize`:@@crm-activity-management.connections.paragraph-1:DynaOps CRM activities work alongside visit planning, GPS tracking, sales orders, collections, workflows, and customer management.`,
    $localize`:@@crm-activity-management.connections.paragraph-2:This connects relationship management with what actually happens in the field rather than keeping CRM activity separate from daily sales execution.`,
  ],
  compactHub: true,
  spacedPulse: true,
  hub: {
    label: $localize`:@@crm-activity-management.connections.hub:CRM activities`,
    icon: '/icons/features/chart-relationship-white.svg',
  },
  items: [
    {
      label: $localize`:@@crm-activity-management.connections.visit-planning:Visit planning`,
      icon: '/icons/features/calendar-02-brand.svg',
    },
    {
      label: $localize`:@@crm-activity-management.connections.gps:GPS tracking`,
      icon: '/icons/features/maps-location-02-brand.svg',
    },
    {
      label: $localize`:@@crm-activity-management.connections.sales-orders:Sales orders`,
      icon: '/icons/shared/safe-delivery-01-brand.svg',
    },
    {
      label: $localize`:@@crm-activity-management.connections.collections:Collections`,
      icon: '/icons/features/save-money-dollar-brand.svg',
    },
    {
      label: $localize`:@@crm-activity-management.connections.workflows:Workflows`,
      icon: '/icons/features/workflow-square-05-brand.svg',
    },
  ],
};

const SHOWCASE: FeatureShowcaseContent = {
  title: $localize`:@@crm-activity-management.showcase.title:Keep Customer Knowledge with the Business Not with One Person`,
  paragraphs: [
    $localize`:@@crm-activity-management.showcase.paragraph-1:Customer relationships should not depend on what one representative remembers.`,
    $localize`:@@crm-activity-management.showcase.paragraph-2:DynaOps keeps customer interactions and field activities connected to the account, giving the business a shared history that continues across visits, representatives, and managers.`,
    $localize`:@@crm-activity-management.showcase.paragraph-3:The next customer conversation starts with context not from zero.`,
  ],
  image: {
    src: `${dir}/showcase.webp`,
    alt: $localize`:@@crm-activity-management.showcase.imageAlt:DynaOps account knowledge for Al Noor Markets: the buyer, agreed pricing, delivery notes, watch-outs and the next planned step, each with who updated it`,
    width: 560,
    height: 342,
  },
};

const INTEGRATION: ErpIntegrationCopy = {
  title: $localize`:@@crm-activity-management.integration.title:Connected with Microsoft Dynamics 365 F&O`,
  paragraphs: [
    $localize`:@@crm-activity-management.integration.paragraph-1:DynaOps extends customer relationship and field activity management around Microsoft Dynamics 365 Finance & Operations.`,
    $localize`:@@crm-activity-management.integration.paragraph-2:Dynamics 365 remains your core ERP, while DynaOps provides sales teams with a focused way to manage customer interactions and field activities.`,
  ],
  emphasis: $localize`:@@crm-activity-management.integration.emphasis:Microsoft Dynamics 365 Finance & Operations.`,
  allParagraphsOnPhone: true,
  spacedParagraphs: true,
  textWidth: 512,
};

const FOOTER_CTA: CtaContent = {
  title: $localize`:@@crm-activity-management.cta.title:Keep Every Customer Relationship Moving Forward`,
  description: $localize`:@@crm-activity-management.cta.description:See how DynaOps helps your sales team maintain customer history, capture field activities, and manage every interaction with better context.`,
  button: FEATURE_HERO_DEFAULTS.cta,
  // Figma uses the same device photo across the feature pages.
  image: CUSTOMER_MANAGEMENT_CONTENT.footerCta.image,
};

export const CRM_ACTIVITY_MANAGEMENT_CONTENT: FeaturePageContent = {
  hero: HERO,
  capabilities: CAPABILITIES,
  connections: CONNECTIONS,
  showcase: SHOWCASE,
  integration: INTEGRATION,
  footerCta: FOOTER_CTA,
};

import { FEATURE_HERO_DEFAULTS } from '../components/feature-hero/feature-hero-content';
import type { FeatureHeroCopy } from '../components/feature-hero/feature-hero.model';
import type { FeatureCapabilitiesContent } from '../components/feature-capabilities/feature-capabilities.model';
import type { FeatureConnectionsContent } from '../components/feature-connections/feature-connections.model';
import type { FeaturePageContent } from '../components/feature-page/feature-page.model';
import type { CtaContent } from '../../../shared/ui/cta-container/cta-container.model';
import type { ErpIntegrationCopy } from '../../../shared/ui/erp-integration/erp-integration.model';

// Copy is English here; src/locale/ar/features.json carries the Arabic under the same ids.
// The mocks carry UI text, so the artwork folder is localized like the copy.
const dir = $localize`:@@customer-management.imageDir:/images/features/customer-management`;

const HERO: FeatureHeroCopy = {
  eyebrow: $localize`:@@customer-management.hero.eyebrow:Customer management for field sales`,
  title: $localize`:@@customer-management.hero.title:Give Every Sales Representative a Complete Customer View`,
  subtitle: $localize`:@@customer-management.hero.subtitle:DynaOps brings customer information, locations, activities, sales history, and relevant ERP data into one field sales experience connected with`,
  emphasis: $localize`:@@customer-management.hero.emphasis:Microsoft Dynamics 365 Finance & Operations.`,
  note: $localize`:@@customer-management.hero.note:Help representatives understand the customer before, during, and after every visit.`,
  image: {
    src: `${dir}/hero.webp`,
    alt: $localize`:@@customer-management.hero.imageAlt:DynaOps customer card for Alfa company with credit, open balance, last order, monthly sales and suggested visit tasks`,
    width: 408,
    height: 420,
  },
};

// Figma's English frames repeat the first description for every capability; the later ones follow the Arabic copy.
const CAPABILITIES: FeatureCapabilitiesContent = {
  title: $localize`:@@customer-management.capabilities.title:Everything Your Sales Team Needs to Know About the Customer`,
  paragraphs: [
    $localize`:@@customer-management.capabilities.paragraph-1:Field sales teams should not need to switch between systems or rely on incomplete information when meeting customers.`,
    $localize`:@@customer-management.capabilities.paragraph-2:DynaOps gives representatives a clear customer view built around their daily sales activities.`,
  ],
  items: [
    {
      title: $localize`:@@customer-management.capabilities.profiles.title:Customer Profiles`,
      description: $localize`:@@customer-management.capabilities.profiles.description:Access key account information and customer details needed during sales visits and follow-ups.`,
      image: { src: `${dir}/capability-1.webp`, width: 361, height: 268 },
    },
    {
      title: $localize`:@@customer-management.capabilities.locations.title:Customer Locations`,
      description: $localize`:@@customer-management.capabilities.locations.description:Manage customer locations and help representatives reach the right account and site for every visit.`,
      image: { src: `${dir}/capability-2.webp`, width: 384, height: 255 },
    },
    {
      title: $localize`:@@customer-management.capabilities.timeline.title:Customer Activity Timeline`,
      description: $localize`:@@customer-management.capabilities.timeline.description:Review previous visits, activities, sales orders, collections, and transactions to understand the history of the customer relationship.`,
      image: { src: `${dir}/capability-3.webp`, width: 360, height: 248 },
    },
    {
      title: $localize`:@@customer-management.capabilities.account.title:Sales & Account Information`,
      description: $localize`:@@customer-management.capabilities.account.description:Give representatives the sales, pricing, and account information linked to the customer in the ERP.`,
      image: { src: `${dir}/capability-4.webp`, width: 368, height: 259 },
    },
    {
      title: $localize`:@@customer-management.capabilities.credit.title:Credit Information Profiles`,
      description: $localize`:@@customer-management.capabilities.credit.description:Make customer credit information available to the sales team according to your Dynamics 365 settings and approved company procedures.`,
      image: { src: `${dir}/capability-5.webp`, width: 360, height: 259 },
    },
  ],
};

const CONNECTIONS: FeatureConnectionsContent = {
  title: $localize`:@@customer-management.connections.title:Turn Customer Information into Better Field Execution`,
  paragraphs: [
    $localize`:@@customer-management.connections.paragraph-1:Customer data becomes more useful when it is connected to daily sales activities.`,
    $localize`:@@customer-management.connections.paragraph-2:DynaOps brings customer information together with visit planning, sales orders, collections, workflows, and field activities, helping representatives work with better context at every stage of the customer relationship.`,
  ],
  hub: {
    label: $localize`:@@customer-management.connections.hub:Customer Information`,
    icon: '/icons/features/user-circle-white.svg',
  },
  items: [
    {
      label: $localize`:@@customer-management.connections.visit-planning:Visit planning`,
      icon: '/icons/features/location-user-03-brand.svg',
    },
    {
      label: $localize`:@@customer-management.connections.sales-orders:Sales orders`,
      icon: '/icons/shared/package-01-brand.svg',
    },
    {
      label: $localize`:@@customer-management.connections.collections:Collections`,
      icon: '/icons/features/save-money-dollar-brand.svg',
    },
    {
      label: $localize`:@@customer-management.connections.workflows:Workflows`,
      icon: '/icons/features/workflow-square-05-brand.svg',
    },
    {
      label: $localize`:@@customer-management.connections.field-activities:Field activities`,
      icon: '/icons/features/location-04-brand.svg',
    },
  ],
};

const INTEGRATION: ErpIntegrationCopy = {
  title: $localize`:@@customer-management.integration.title:Connected to Microsoft Dynamics 365 F&O`,
  paragraphs: [
    $localize`:@@customer-management.integration.paragraph-1:DynaOps extends customer information from Microsoft Dynamics 365 Finance & Operations into the field sales experience.`,
    $localize`:@@customer-management.integration.paragraph-2:Dynamics 365 remains your core ERP, while DynaOps gives sales representatives and managers a focused way to work with customer information outside the traditional ERP interface.`,
  ],
  allParagraphsOnPhone: true,
  spacedParagraphs: true,
  textWidth: 512,
};

const FOOTER_CTA: CtaContent = {
  title: $localize`:@@customer-management.cta.title:Give Your Sales Team Better Customer Context`,
  description: $localize`:@@customer-management.cta.description:See how DynaOps helps your team manage customer relationships, activities, visits, and sales information through one connected field sales solution.`,
  button: FEATURE_HERO_DEFAULTS.cta,
  image: { src: `${dir}/footer-cta.webp`, width: 400, height: 294 },
};

export const CUSTOMER_MANAGEMENT_CONTENT: FeaturePageContent = {
  title: $localize`:@@customer-management.title:Customer Management Software for Dynamics 365`,
  description: $localize`:@@customer-management.description:Give field sales reps a complete customer view: profiles, locations, activity, sales history and credit, connected to Microsoft Dynamics 365 F&O.`,
  hero: HERO,
  capabilities: CAPABILITIES,
  connections: CONNECTIONS,
  integration: INTEGRATION,
  footerCta: FOOTER_CTA,
  // Figma's phone frame ends the Arabic title's first line on "في".
  footerCtaFormat: { arabicPhoneTitleWidth: 316 },
};

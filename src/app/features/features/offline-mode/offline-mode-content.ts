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
const dir = $localize`:@@offline-mode.imageDir:/images/features/offline-mode`;

const HERO: FeatureHeroCopy = {
  eyebrow: $localize`:@@offline-mode.hero.eyebrow:Offline Mode for Field Sales`,
  title: $localize`:@@offline-mode.hero.title:Keep Field Sales Moving When Connectivity Doesn’t`,
  subtitle: $localize`:@@offline-mode.hero.subtitle:Field teams do not always work where reliable internet is available.`,
  note: $localize`:@@offline-mode.hero.note:DynaOps Offline Mode helps representatives continue supported field activities when connectivity is weak or unavailable, then reconnect their work with the wider sales environment once a connection is available again.`,
  image: {
    src: `${dir}/hero.webp`,
    alt: $localize`:@@offline-mode.hero.imageAlt:DynaOps team sync status for Riyadh North with online, offline and pending sync totals above each representative's pending items and sync state`,
    width: 408,
    height: 420,
  },
};

// The English desktop frame keeps Visit Planning's title; the tablet and phone frames hold the final one.
const CAPABILITIES: FeatureCapabilitiesContent = {
  title: $localize`:@@offline-mode.capabilities.title:Built for the Reality of Field Work`,
  paragraphs: [
    $localize`:@@offline-mode.capabilities.paragraph-1:Sales representatives move between customers, territories, warehouses, and locations where network quality can change throughout the day.`,
    $localize`:@@offline-mode.capabilities.paragraph-2:Their ability to work should not depend entirely on having a perfect connection.`,
  ],
  items: [
    {
      title: $localize`:@@offline-mode.capabilities.offline.title:Continue Working Offline`,
      description: $localize`:@@offline-mode.capabilities.offline.description:Allow representatives to continue supported sales activities when internet access is temporarily unavailable.`,
      image: { src: `${dir}/capability-1.webp`, width: 360, height: 259 },
    },
    {
      title: $localize`:@@offline-mode.capabilities.customer-info.title:Customer Information on the Move`,
      description: $localize`:@@offline-mode.capabilities.customer-info.description:Keep the information required for supported field activities available to representatives while they are working away from reliable connectivity.`,
      image: { src: `${dir}/capability-2.webp`, width: 366, height: 259 },
    },
    {
      title: $localize`:@@offline-mode.capabilities.capture.title:Capture Activity in the Field`,
      description: $localize`:@@offline-mode.capabilities.capture.description:Record supported customer and sales activities at the point where the work happens instead of waiting to reconnect later.`,
      image: { src: `${dir}/capability-3.webp`, width: 360, height: 259 },
    },
    {
      title: $localize`:@@offline-mode.capabilities.resume.title:Resume When Connectivity Returns`,
      description: $localize`:@@offline-mode.capabilities.resume.description:Synchronize offline activity with the connected environment when network access becomes available again.`,
      image: { src: `${dir}/capability-4.webp`, width: 360, height: 259 },
    },
    {
      title: $localize`:@@offline-mode.capabilities.continuous.title:One Continuous Field Experience`,
      description: $localize`:@@offline-mode.capabilities.continuous.description:Move between connected and offline working conditions without forcing representatives to switch to spreadsheets, paper, or separate processes.`,
      image: { src: `${dir}/capability-5.webp`, width: 360, height: 259 },
    },
  ],
};

// The phone frames keep labels from other pages ("Customer coverage", the Dashboards hub); desktop and tablet are final.
const CONNECTIONS: FeatureConnectionsContent = {
  title: $localize`:@@offline-mode.connections.title:Designed as Part of the DynaOps Field Experience`,
  paragraphs: [
    $localize`:@@offline-mode.connections.paragraph-1:Offline Mode is not a separate application.`,
    $localize`:@@offline-mode.connections.paragraph-2:It works as part of the DynaOps field sales experience, alongside customer visits, sales activities, and other supported field processes.`,
    $localize`:@@offline-mode.connections.paragraph-3:This gives representatives a more consistent way to work throughout the day, even as connectivity changes.`,
  ],
  compactHub: true,
  spacedPulse: true,
  hub: {
    label: $localize`:@@offline-mode.connections.hub:DynaOps field experience`,
    icon: '/icons/features/computer-phone-sync-white.svg',
  },
  items: [
    {
      label: $localize`:@@offline-mode.connections.visits:Customer visits`,
      icon: '/icons/features/user-circle-brand.svg',
    },
    {
      label: $localize`:@@offline-mode.connections.sales-activities:Sales activities`,
      icon: '/icons/features/package-moving-brand.svg',
    },
    {
      label: $localize`:@@offline-mode.connections.field-processes:Field processes`,
      icon: '/icons/features/delivery-tracking-01-brand.svg',
    },
    {
      label: $localize`:@@offline-mode.connections.offline:Offline Mode`,
      icon: '/icons/features/no-internet-brand.svg',
    },
  ],
};

const SHOWCASE: FeatureShowcaseContent = {
  title: $localize`:@@offline-mode.showcase.title:Don’t Let Connectivity Decide How Your Team Works`,
  paragraphs: [
    $localize`:@@offline-mode.showcase.paragraph-1:A temporary network issue should not turn into a break in the sales process.`,
    $localize`:@@offline-mode.showcase.paragraph-2:DynaOps helps field teams continue their work and capture activities where they happen, reducing the need to remember information and enter it again later.`,
  ],
  image: {
    src: `${dir}/showcase.webp`,
    alt: $localize`:@@offline-mode.showcase.imageAlt:DynaOps offline activity by representative for Thursday 22 October, listing captured, synced and pending items with a sync status for each rep`,
    width: 560,
    height: 342,
  },
};

// Figma bolds the product name in English only; it is bold in both, as on the other pages.
const INTEGRATION: ErpIntegrationCopy = {
  title: $localize`:@@offline-mode.integration.title:Stay Connected to Microsoft Dynamics 365 F&O`,
  paragraphs: [
    $localize`:@@offline-mode.integration.paragraph-1:Microsoft Dynamics 365 Finance & Operations remains the core ERP and business system.`,
    $localize`:@@offline-mode.integration.paragraph-2:DynaOps extends the field experience beyond constant connectivity, helping supported offline activity reconnect with the wider Dynamics environment when communication becomes available again.`,
  ],
  emphasis: $localize`:@@offline-mode.integration.emphasis:Microsoft Dynamics 365 Finance & Operations`,
  allParagraphsOnPhone: true,
  spacedParagraphs: true,
  textWidth: 512,
};

const FOOTER_CTA: CtaContent = {
  title: $localize`:@@offline-mode.cta.title:Keep Your Field Team Working Wherever Sales Happen`,
  description: $localize`:@@offline-mode.cta.description:See how DynaOps helps representatives continue field execution when network conditions are less than ideal.`,
  button: FEATURE_HERO_DEFAULTS.cta,
  // Figma uses the same device photo across the feature pages.
  image: CUSTOMER_MANAGEMENT_CONTENT.footerCta.image,
};

export const OFFLINE_MODE_CONTENT: FeaturePageContent = {
  hero: HERO,
  capabilities: CAPABILITIES,
  connections: CONNECTIONS,
  showcase: SHOWCASE,
  integration: INTEGRATION,
  footerCta: FOOTER_CTA,
};

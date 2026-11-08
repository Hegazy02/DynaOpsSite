import { CUSTOMER_MANAGEMENT_CONTENT } from '../customer-management/customer-management-content';
import { FEATURE_HERO_DEFAULTS } from '../components/feature-hero/feature-hero-content';
import type { FeatureHeroCopy } from '../components/feature-hero/feature-hero.model';
import type { FeatureCapabilitiesContent } from '../components/feature-capabilities/feature-capabilities.model';
import type { FeatureConnectionsContent } from '../components/feature-connections/feature-connections.model';
import type { FeaturePageContent } from '../components/feature-page/feature-page.model';
import type { CtaContent } from '../../../shared/ui/cta-container/cta-container.model';
import type { ErpIntegrationCopy } from '../../../shared/ui/erp-integration/erp-integration.model';

// Copy is English here; src/locale/ar/features.json carries the Arabic under the same ids.
// The mocks carry UI text, so the artwork folder is localized like the copy.
const dir = $localize`:@@gps-tracking.imageDir:/images/features/gps-tracking`;

const HERO: FeatureHeroCopy = {
  eyebrow: $localize`:@@gps-tracking.hero.eyebrow:GPS Tracking for Field Sales Teams`,
  title: $localize`:@@gps-tracking.hero.title:Know Where Field Execution Is Happening`,
  subtitle: $localize`:@@gps-tracking.hero.subtitle:DynaOps connects GPS location data with customer visits and field sales activities, helping managers verify execution and understand what is happening across territories.`,
  wideArabicTabletCopy: true,
  note: $localize`:@@gps-tracking.hero.note:Give sales teams a structured way to check in at customer locations while keeping visit activity connected to the customer record.`,
  image: {
    src: `${dir}/hero.webp`,
    alt: $localize`:@@gps-tracking.hero.imageAlt:DynaOps field activity map for North Riyadh showing four representatives with their live visit status`,
    width: 408,
    height: 420,
  },
};

// Figma's English frames keep the Workflow & Approvals first paragraph; it follows the Arabic copy here.
// The Arabic desktop variants carry stale titles; the tablet frame holds the final capability copy.
const CAPABILITIES: FeatureCapabilitiesContent = {
  title: $localize`:@@gps-tracking.capabilities.title:Connect Every Visit with Location Context`,
  paragraphs: [
    $localize`:@@gps-tracking.capabilities.paragraph-1:A visit on a representative's plan does not necessarily mean it was carried out.`,
    $localize`:@@gps-tracking.capabilities.paragraph-2:DynaOps uses GPS information to connect field activities with customer locations and give managers better visibility into daily sales execution.`,
  ],
  items: [
    {
      title: $localize`:@@gps-tracking.capabilities.check-in.title:GPS-Based Check-In & Check-Out`,
      description: $localize`:@@gps-tracking.capabilities.check-in.description:Allow representatives to record their arrival and departure during customer visits using location information.`,
      image: { src: `${dir}/capability-1.webp`, width: 361, height: 261 },
    },
    {
      title: $localize`:@@gps-tracking.capabilities.validation.title:Visit Validation`,
      description: $localize`:@@gps-tracking.capabilities.validation.description:Compare visit activity with the customer's location to support verification that planned field visits were performed at the expected location.`,
      image: { src: `${dir}/capability-2.webp`, width: 361, height: 257 },
    },
    {
      title: $localize`:@@gps-tracking.capabilities.locations.title:Customer Location Management`,
      description: $localize`:@@gps-tracking.capabilities.locations.description:Maintain customer locations to support visit planning, navigation, and location-based field activities.`,
      image: { src: `${dir}/capability-3.webp`, width: 361, height: 268 },
    },
    {
      title: $localize`:@@gps-tracking.capabilities.planned-actual.title:Planned vs. Actual Visits`,
      description: $localize`:@@gps-tracking.capabilities.planned-actual.description:Compare scheduled visits with completed field activities to understand customer coverage and execution gaps.`,
      image: { src: `${dir}/capability-4.webp`, width: 361, height: 261 },
    },
    {
      title: $localize`:@@gps-tracking.capabilities.history.title:Visit History`,
      description: $localize`:@@gps-tracking.capabilities.history.description:Keep location-related visit activity connected with the customer's timeline and previous field interactions.`,
      image: { src: `${dir}/capability-5.webp`, width: 361, height: 261 },
    },
    {
      title: $localize`:@@gps-tracking.capabilities.territory.title:Territory Visibility`,
      description: $localize`:@@gps-tracking.capabilities.territory.description:Give managers a clearer view of field activity across representatives, routes, customers, and assigned territories.`,
      image: { src: `${dir}/capability-6.webp`, width: 361, height: 255 },
    },
  ],
};

const CONNECTIONS: FeatureConnectionsContent = {
  title: $localize`:@@gps-tracking.connections.title:More Than a Location Pin`,
  paragraphs: [
    $localize`:@@gps-tracking.connections.paragraph-1:GPS becomes more useful when it is connected to the sales process.`,
    $localize`:@@gps-tracking.connections.paragraph-2:DynaOps combines location context with customer visits, activities, orders, collections, and route execution so managers can understand not only where a representative was, but what sales activity took place.`,
  ],
  compactHub: true,
  spacedPulse: true,
  hub: {
    label: $localize`:@@gps-tracking.connections.hub:Location context`,
    icon: '/icons/features/location-01.svg', // stand-in: Figma's glyph in white
  },
  items: [
    {
      label: $localize`:@@gps-tracking.connections.customer-visits:Customer visits`,
      icon: '/icons/features/location-user-03-brand.svg',
    },
    {
      label: $localize`:@@gps-tracking.connections.activities:Activities`,
      icon: '/icons/features/add-to-list.svg', // stand-in: Figma's glyph in brand
    },
    {
      label: $localize`:@@gps-tracking.connections.orders:Orders`,
      icon: '/icons/shared/package-01-brand.svg',
    },
    {
      label: $localize`:@@gps-tracking.connections.collections:Collections`,
      icon: '/icons/features/save-money-dollar-brand.svg',
    },
    {
      label: $localize`:@@gps-tracking.connections.route-execution:Route execution`,
      icon: '/icons/shared/route-02.svg', // stand-in: Figma's glyph in brand
    },
  ],
};

const INTEGRATION: ErpIntegrationCopy = {
  title: $localize`:@@gps-tracking.integration.title:Connected with Your Sales Operations`,
  paragraphs: [
    $localize`:@@gps-tracking.integration.paragraph-1:GPS activity in DynaOps works as part of the broader field sales process connected with Microsoft Dynamics 365 Finance & Operations.`,
    $localize`:@@gps-tracking.integration.paragraph-2:Customer information and sales transactions remain connected to your business environment while DynaOps provides the field execution layer.`,
  ],
  // Only the Arabic frames set the product name in semibold, so the English source is empty.
  emphasis: $localize`:@@gps-tracking.integration.emphasis:`,
  allParagraphsOnPhone: true,
  spacedParagraphs: true,
  textWidth: 512,
};

const FOOTER_CTA: CtaContent = {
  title: $localize`:@@gps-tracking.cta.title:Get Better Visibility into Field Execution`,
  description: $localize`:@@gps-tracking.cta.description:See how DynaOps can help your team validate customer visits, monitor field activity, and connect location data with daily sales operations.`,
  button: FEATURE_HERO_DEFAULTS.cta,
  // Figma uses the same device photo across the feature pages.
  image: CUSTOMER_MANAGEMENT_CONTENT.footerCta.image,
};

export const GPS_TRACKING_CONTENT: FeaturePageContent = {
  title: $localize`:@@gps-tracking.title:GPS Tracking Software for Field Sales Teams`,
  description: $localize`:@@gps-tracking.description:Verify field visits with GPS check-ins, location validation and territory visibility, connected to customer records and Microsoft Dynamics 365 F&O.`,
  hero: HERO,
  capabilities: CAPABILITIES,
  connections: CONNECTIONS,
  integration: INTEGRATION,
  footerCta: FOOTER_CTA,
};

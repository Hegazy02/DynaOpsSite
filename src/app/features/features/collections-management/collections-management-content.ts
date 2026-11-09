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
const dir = $localize`:@@collections-management.imageDir:/images/features/collections-management`;

// The Arabic frames keep CRM & Activity Management's eyebrow; the Arabic translates the English one.
const HERO: FeatureHeroCopy = {
  eyebrow: $localize`:@@collections-management.hero.eyebrow:Collections Management for Field Sales`,
  title: $localize`:@@collections-management.hero.title:Collect in the Field. Keep Finance Connected.`,
  subtitle: $localize`:@@collections-management.hero.subtitle:DynaOps gives field sales representatives the information and tools they need to manage customer collections directly during visits.`,
  note: $localize`:@@collections-management.hero.note:See outstanding balances and aging, record payments, settle invoices, manage receipts, and keep collection transactions connected with Microsoft Dynamics 365 Finance & Operations.`,
  noteEmphasis: $localize`:@@collections-management.hero.noteEmphasis:Microsoft Dynamics 365 Finance & Operations.`,
  image: {
    src: `${dir}/hero.webp`,
    alt: $localize`:@@collections-management.hero.imageAlt:DynaOps collections for Mohamed Ahmed: SAR 71,920 collected across three receipts, a SAR 46,000 cheque pending finance approval and one customer left`,
    width: 408,
    height: 420,
  },
};

// The English desktop frame keeps GPS Tracking's second paragraph; the tablet frame holds the final copy.
const CAPABILITIES: FeatureCapabilitiesContent = {
  title: $localize`:@@collections-management.capabilities.title:Give Your Team the Full Collection Picture`,
  paragraphs: [
    $localize`:@@collections-management.capabilities.paragraph-1:Effective collection starts before the payment is recorded.`,
    $localize`:@@collections-management.capabilities.paragraph-2:DynaOps gives representatives visibility into the customer’s financial position so they can understand what is due and complete the right collection activity while they are with the customer.`,
  ],
  items: [
    {
      title: $localize`:@@collections-management.capabilities.balance.title:Outstanding Balance Visibility`,
      description: $localize`:@@collections-management.capabilities.balance.description:See the customer’s outstanding balance before and during the collection process.`,
      image: { src: `${dir}/capability-1.webp`, width: 360, height: 259 },
    },
    {
      title: $localize`:@@collections-management.capabilities.aging.title:Customer Aging`,
      description: $localize`:@@collections-management.capabilities.aging.description:Review aging information to understand which balances require attention and support more focused collection follow-up.`,
      image: { src: `${dir}/capability-2.webp`, width: 360, height: 268 },
    },
    {
      title: $localize`:@@collections-management.capabilities.field.title:Field Collections`,
      description: $localize`:@@collections-management.capabilities.field.description:Record customer payments directly during visits using the collection methods supported by your business process.`,
      image: { src: `${dir}/capability-3.webp`, width: 360, height: 259 },
    },
    {
      title: $localize`:@@collections-management.capabilities.settlement.title:Invoice Settlement`,
      description: $localize`:@@collections-management.capabilities.settlement.description:Apply collected amounts against the relevant customer invoices as part of the collection process.`,
      image: { src: `${dir}/capability-4.webp`, width: 360, height: 268 },
    },
    {
      title: $localize`:@@collections-management.capabilities.receipts.title:Receipts & Collection Records`,
      description: $localize`:@@collections-management.capabilities.receipts.description:Maintain clear receipt and transaction records for collections completed in the field.`,
      image: { src: `${dir}/capability-5.webp`, width: 360, height: 268 },
    },
    {
      title: $localize`:@@collections-management.capabilities.approvals.title:Workflow & Approvals`,
      description: $localize`:@@collections-management.capabilities.approvals.description:Route collection scenarios that require additional control through configurable approval workflows.`,
      image: { src: `${dir}/capability-6.webp`, width: 360, height: 268 },
    },
  ],
};

const CONNECTIONS: FeatureConnectionsContent = {
  title: $localize`:@@collections-management.connections.title:From Customer Balance to Completed Collection`,
  paragraphs: [
    $localize`:@@collections-management.connections.paragraph-1:DynaOps brings the key steps of field collection into one connected process.`,
    $localize`:@@collections-management.connections.paragraph-2:Representatives can understand what is outstanding, collect the payment, settle the relevant invoices, and complete the transaction without relying on disconnected spreadsheets, messages, or back-office re-entry.`,
  ],
  compactHub: true,
  spacedPulse: true,
  hub: {
    label: $localize`:@@collections-management.connections.hub:Field collection`,
    icon: '/icons/features/save-money-dollar-white.svg',
  },
  items: [
    {
      label: $localize`:@@collections-management.connections.outstanding:Outstanding`,
      icon: '/icons/features/files-01-brand.svg',
    },
    {
      label: $localize`:@@collections-management.connections.payment:Payment`,
      icon: '/icons/features/credit-card-brand.svg',
    },
    {
      label: $localize`:@@collections-management.connections.settlement:Settlement`,
      icon: '/icons/features/text-check-brand.svg',
    },
    {
      label: $localize`:@@collections-management.connections.receipt:Receipt`,
      icon: '/icons/features/receipt-dollar-brand.svg',
    },
    {
      label: $localize`:@@collections-management.connections.posting:Posting`,
      icon: '/icons/features/reload-brand.svg',
    },
  ],
};

// The Arabic frames split the first paragraph after the ERP name; its translation keeps that as a line break.
const INTEGRATION: ErpIntegrationCopy = {
  title: $localize`:@@collections-management.integration.title:Automatic Posting to Microsoft Dynamics 365 F&O`,
  paragraphs: [
    $localize`:@@collections-management.integration.paragraph-1:Collection transactions can be posted to Microsoft Dynamics 365 Finance & Operations, keeping field collection activity connected with your financial processes.`,
    $localize`:@@collections-management.integration.paragraph-2:Dynamics 365 remains your core financial and ERP system, while DynaOps extends the collection experience to the field team.`,
  ],
  emphasis: $localize`:@@collections-management.integration.emphasis:Microsoft Dynamics 365 Finance & Operations`,
  allParagraphsOnPhone: true,
  spacedParagraphs: true,
  textWidth: 512,
};

const FOOTER_CTA: CtaContent = {
  title: $localize`:@@collections-management.cta.title:Give Sales and Finance a More Connected Collection Process`,
  description: $localize`:@@collections-management.cta.description:See how DynaOps helps your team manage balances, aging, payments, settlements, receipts, and approvals from the field while staying connected with Microsoft Dynamics 365.`,
  button: FEATURE_HERO_DEFAULTS.cta,
  // Figma uses the same device photo across the feature pages.
  image: CUSTOMER_MANAGEMENT_CONTENT.footerCta.image,
};

export const COLLECTIONS_MANAGEMENT_CONTENT: FeaturePageContent = {
  hero: HERO,
  capabilities: CAPABILITIES,
  connections: CONNECTIONS,
  integration: INTEGRATION,
  footerCta: FOOTER_CTA,
};

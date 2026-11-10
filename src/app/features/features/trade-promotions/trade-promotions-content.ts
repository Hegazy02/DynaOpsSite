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
const dir = $localize`:@@trade-promotions.imageDir:/images/features/trade-promotions`;

const HERO: FeatureHeroCopy = {
  eyebrow: $localize`:@@trade-promotions.hero.eyebrow:Trade Promotions for Field Sales`,
  title: $localize`:@@trade-promotions.hero.title:Put the Right Promotion in Every Sales Opportunity`,
  subtitle: $localize`:@@trade-promotions.hero.subtitle:DynaOps helps businesses create and manage flexible trade promotions and make them available directly within the field sales process.`,
  note: $localize`:@@trade-promotions.hero.note:Sales representatives can identify applicable offers and apply them while serving customers, without relying on spreadsheets, manual calculations, or disconnected communication.`,
  image: {
    src: `${dir}/hero.webp`,
    alt: $localize`:@@trade-promotions.hero.imageAlt:DynaOps sales order for Al Rawad Trading with a buy 10 get 1 free promotion and a 5% discount applied to the order total`,
    width: 408,
    height: 420,
  },
};

// The English tablet and phone frames keep another page's heading, and the desktop list a stale second title;
// the desktop heading and the tablet items hold the final copy.
const CAPABILITIES: FeatureCapabilitiesContent = {
  title: $localize`:@@trade-promotions.capabilities.title:Flexible Promotions Built Around Your Commercial Strategy`,
  paragraphs: [
    $localize`:@@trade-promotions.capabilities.paragraph-1:Different customers and sales scenarios require different offers.`,
    $localize`:@@trade-promotions.capabilities.paragraph-2:DynaOps gives commercial teams the flexibility to define promotional conditions while keeping execution simple for field representatives.`,
  ],
  items: [
    {
      title: $localize`:@@trade-promotions.capabilities.manage.title:Create & Manage Promotions`,
      description: $localize`:@@trade-promotions.capabilities.manage.description:Build and manage promotional offers directly within DynaOps according to your commercial policies.`,
      image: { src: `${dir}/capability-1.webp`, width: 361, height: 259 },
    },
    {
      title: $localize`:@@trade-promotions.capabilities.eligibility.title:Smart Promotion Eligibility`,
      description: $localize`:@@trade-promotions.capabilities.eligibility.description:DynaOps evaluates the sales context and identifies which approved promotions apply to the customer and current transaction.`,
      image: { src: `${dir}/capability-2.webp`, width: 392, height: 289 },
    },
    {
      title: $localize`:@@trade-promotions.capabilities.point-of-sale.title:Promotions at the Point of Sale`,
      description: $localize`:@@trade-promotions.capabilities.point-of-sale.description:Give representatives visibility into relevant offers while they are discussing and creating customer orders.`,
      image: { src: `${dir}/capability-3.webp`, width: 361, height: 261 },
    },
    {
      title: $localize`:@@trade-promotions.capabilities.automatic.title:Automatic Promotion Application`,
      description: $localize`:@@trade-promotions.capabilities.automatic.description:Eligible promotional benefits can be applied directly during the sales order process, reducing manual calculations and interpretation.`,
      image: { src: `${dir}/capability-4.webp`, width: 361, height: 257 },
    },
    {
      title: $localize`:@@trade-promotions.capabilities.consistent.title:Consistent Promotion Execution`,
      description: $localize`:@@trade-promotions.capabilities.consistent.description:Help every representative execute approved promotions using the same commercial logic across customers, territories, and sales teams.`,
      image: { src: `${dir}/capability-5.webp`, width: 390, height: 264 },
    },
  ],
};

// The English phone frame keeps another page's activity labels; the desktop and tablet ones are final.
const CONNECTIONS: FeatureConnectionsContent = {
  title: $localize`:@@trade-promotions.connections.title:Make Complex Promotions Simple for the Sales Team`,
  paragraphs: [
    $localize`:@@trade-promotions.connections.paragraph-1:Promotional strategies can become complex behind the scenes. The field experience should not.`,
    $localize`:@@trade-promotions.connections.paragraph-2:DynaOps keeps that complexity away from the representative by identifying applicable offers and supporting their application within the sales process.`,
    $localize`:@@trade-promotions.connections.paragraph-3:Your commercial team controls the promotion logic. Your sales team focuses on the customer.`,
  ],
  compactHub: true,
  hub: {
    label: $localize`:@@trade-promotions.connections.hub:Promotion logic`,
    icon: '/icons/features/discount-tag-02-white.svg',
  },
  items: [
    {
      label: $localize`:@@trade-promotions.connections.commercial-team:Commercial team`,
      icon: '/icons/features/user-group-brand.svg',
    },
    {
      label: $localize`:@@trade-promotions.connections.eligible-offers:Eligible offers`,
      icon: '/icons/features/discount-brand.svg',
    },
    {
      label: $localize`:@@trade-promotions.connections.sales-order:Sales order`,
      icon: '/icons/shared/package-01-brand.svg',
    },
    {
      label: $localize`:@@trade-promotions.connections.representative:Representative`,
      icon: '/icons/features/user-ai-brand.svg',
    },
  ],
};

const INTEGRATION: ErpIntegrationCopy = {
  title: $localize`:@@trade-promotions.integration.title:Keep Promotion Execution Connected to Your Business`,
  paragraphs: [
    $localize`:@@trade-promotions.integration.paragraph-1:Trade promotions in DynaOps work alongside customer information, products, pricing, inventory, and sales orders.`,
    $localize`:@@trade-promotions.integration.paragraph-2:The resulting sales process remains connected with Microsoft Dynamics 365 Finance & Operations, allowing promotions to become part of your wider sales operation rather than a separate activity.`,
  ],
  allParagraphsOnPhone: true,
  spacedParagraphs: true,
  textWidth: 512,
};

const FOOTER_CTA: CtaContent = {
  title: $localize`:@@trade-promotions.cta.title:Execute Promotions with More Control and Less Friction`,
  description: $localize`:@@trade-promotions.cta.description:See how DynaOps can help your commercial and field sales teams manage promotions more consistently and make the right offers available when they matter.`,
  button: FEATURE_HERO_DEFAULTS.cta,
  // Figma uses the same device photo across the feature pages.
  image: CUSTOMER_MANAGEMENT_CONTENT.footerCta.image,
};

export const TRADE_PROMOTIONS_CONTENT: FeaturePageContent = {
  hero: HERO,
  capabilities: CAPABILITIES,
  connections: CONNECTIONS,
  integration: INTEGRATION,
  footerCta: FOOTER_CTA,
};

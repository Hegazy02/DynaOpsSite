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
const dir = $localize`:@@sales-order-management.imageDir:/images/features/sales-order-management`;

// The English frames keep Trade Promotions' hero title and repeat the note's first clause;
// the title follows the Arabic frame and the note is set once.
const HERO: FeatureHeroCopy = {
  eyebrow: $localize`:@@sales-order-management.hero.eyebrow:Sales Order Management for Field Sales`,
  title: $localize`:@@sales-order-management.hero.title:Create the Right Order While You Are With the Customer`,
  subtitle: $localize`:@@sales-order-management.hero.subtitle:DynaOps gives sales representatives the information and tools they need to create customer orders directly in the field.`,
  note: $localize`:@@sales-order-management.hero.note:Work with customer data, products, pricing, inventory, promotions, and approval rules while keeping the sales process connected with`,
  noteEmphasis: $localize`:@@sales-order-management.hero.noteEmphasis:Microsoft Dynamics 365 Finance & Operations.`,
  image: {
    src: `${dir}/hero.webp`,
    alt: $localize`:@@sales-order-management.hero.imageAlt:DynaOps sales order for Al Noor Markets with stock checked, a promotion applied and an order total of SAR 7,734.00`,
    width: 408,
    height: 420,
  },
};

// The English phone frame gives the first item Trade Promotions' description; desktop and tablet hold the final copy.
const CAPABILITIES: FeatureCapabilitiesContent = {
  title: $localize`:@@sales-order-management.capabilities.title:Give Sales Reps the Full Context Before They Place an Order`,
  paragraphs: [
    $localize`:@@sales-order-management.capabilities.paragraph-1:Creating an order should not depend on phone calls, spreadsheets, or checking multiple systems.`,
    $localize`:@@sales-order-management.capabilities.paragraph-2:DynaOps brings the information needed for the sales conversation into one connected order experience.`,
  ],
  items: [
    {
      title: $localize`:@@sales-order-management.capabilities.pricing.title:Customer-Specific Pricing`,
      description: $localize`:@@sales-order-management.capabilities.pricing.description:Give representatives access to the pricing relevant to the customer they are serving.`,
      image: { src: `${dir}/capability-1.webp`, width: 361, height: 261 },
    },
    {
      title: $localize`:@@sales-order-management.capabilities.inventory.title:Product & Inventory Visibility`,
      description: $localize`:@@sales-order-management.capabilities.inventory.description:View product information and available inventory while preparing the customer order.`,
      image: { src: `${dir}/capability-2.webp`, width: 361, height: 261 },
    },
    {
      title: $localize`:@@sales-order-management.capabilities.promotions.title:Trade Promotions`,
      description: $localize`:@@sales-order-management.capabilities.promotions.description:Identify and apply eligible promotional offers as part of the sales order process.`,
      image: { src: `${dir}/capability-3.webp`, width: 361, height: 261 },
    },
    {
      title: $localize`:@@sales-order-management.capabilities.field-orders.title:Order Creation in the Field`,
      description: $localize`:@@sales-order-management.capabilities.field-orders.description:Create customer sales orders directly during visits instead of sending order details back to the office for re-entry.`,
      image: { src: `${dir}/capability-4.webp`, width: 360, height: 263 },
    },
    {
      title: $localize`:@@sales-order-management.capabilities.approvals.title:Built-In Approval Control`,
      description: $localize`:@@sales-order-management.capabilities.approvals.description:Route orders or discounts that require review through configurable approval workflows before the transaction moves forward.`,
      image: { src: `${dir}/capability-5.webp`, width: 365, height: 248 },
    },
  ],
};

const CONNECTIONS: FeatureConnectionsContent = {
  title: $localize`:@@sales-order-management.connections.title:Faster Order Entry Without Losing Business Control`,
  paragraphs: [
    $localize`:@@sales-order-management.connections.paragraph-1:Speed in the field should not mean bypassing company policies.`,
    $localize`:@@sales-order-management.connections.paragraph-2:DynaOps combines order creation with pricing, promotions, inventory information, and approval workflows so representatives can move the sale forward while the organization maintains the controls it needs.`,
  ],
  compactHub: true,
  hub: {
    label: $localize`:@@sales-order-management.connections.hub:Order creation`,
    icon: '/icons/shared/safe-delivery-01-white.svg',
  },
  items: [
    {
      label: $localize`:@@sales-order-management.connections.pricing:Pricing`,
      icon: '/icons/features/money-receive-flow-02-brand.svg',
    },
    {
      label: $localize`:@@sales-order-management.connections.promotions:Promotions`,
      icon: '/icons/features/discount-brand.svg',
    },
    {
      label: $localize`:@@sales-order-management.connections.inventory:Inventory`,
      icon: '/icons/shared/package-01-brand.svg',
    },
    {
      label: $localize`:@@sales-order-management.connections.approvals:Approvals`,
      icon: '/icons/features/workflow-square-05-brand.svg',
    },
  ],
};

const INTEGRATION: ErpIntegrationCopy = {
  title: $localize`:@@sales-order-management.integration.title:Connected with Microsoft Dynamics 365 F&O`,
  paragraphs: [
    $localize`:@@sales-order-management.integration.paragraph-1:DynaOps extends your existing Dynamics 365 sales process into the field.`,
    $localize`:@@sales-order-management.integration.paragraph-2:Representatives work through a focused sales experience while customer, product, pricing, inventory, and order information remain connected with your Microsoft Dynamics environment.`,
    $localize`:@@sales-order-management.integration.paragraph-3:Dynamics 365 continues to be your core ERP and system of record.`,
  ],
  allParagraphsOnPhone: true,
  spacedParagraphs: true,
  textWidth: 512,
};

// The English frames keep Trade Promotions' call to action; this copy follows the Arabic frames.
const FOOTER_CTA: CtaContent = {
  title: $localize`:@@sales-order-management.cta.title:Turn Every Visit into a Real Sales Opportunity`,
  description: $localize`:@@sales-order-management.cta.description:Give your team the information it needs to build the customer order during the visit, while keeping sales execution connected to your ERP.`,
  button: FEATURE_HERO_DEFAULTS.cta,
  // Figma uses the same device photo across the feature pages.
  image: CUSTOMER_MANAGEMENT_CONTENT.footerCta.image,
};

export const SALES_ORDER_MANAGEMENT_CONTENT: FeaturePageContent = {
  title: $localize`:@@sales-order-management.title:Sales Order Management for Field Sales`,
  description: $localize`:@@sales-order-management.description:Create sales orders during customer visits with customer pricing, live inventory, promotions and approvals, connected to Microsoft Dynamics 365 F&O.`,
  hero: HERO,
  capabilities: CAPABILITIES,
  connections: CONNECTIONS,
  integration: INTEGRATION,
  footerCta: FOOTER_CTA,
};

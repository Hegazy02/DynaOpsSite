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
const dir = $localize`:@@inventory-visibility.imageDir:/images/features/inventory-visibility`;

const HERO: FeatureHeroCopy = {
  eyebrow: $localize`:@@inventory-visibility.hero.eyebrow:Inventory Visibility for Field Sales`,
  title: $localize`:@@inventory-visibility.hero.title:Know What’s Available Before You Sell`,
  subtitle: $localize`:@@inventory-visibility.hero.subtitle:DynaOps gives field sales representatives access to relevant inventory information while they are serving customers.`,
  note: $localize`:@@inventory-visibility.hero.note:Check product availability across warehouses before or during order creation, while keeping Microsoft Dynamics 365 Finance & Operations as the core source of inventory data.`,
  noteEmphasis: $localize`:@@inventory-visibility.hero.noteEmphasis:Microsoft Dynamics 365 Finance & Operations`,
  image: {
    src: `${dir}/hero.webp`,
    alt: $localize`:@@inventory-visibility.hero.imageAlt:DynaOps product availability for Orange Juice 1L at Al Noor Markets: 1,240 cases in Riyadh WH, low stock in Jeddah and none in Dammam`,
    width: 408,
    height: 420,
  },
};

// The Arabic tablet frame gives the last item another page's credit-limit mock; its own lives in the Arabic capabilities component.
const CAPABILITIES: FeatureCapabilitiesContent = {
  title: $localize`:@@inventory-visibility.capabilities.title:Bring Inventory Information into the Sales Conversation`,
  paragraphs: [
    $localize`:@@inventory-visibility.capabilities.paragraph-1:A sales representative should not need to call the office or switch between systems just to understand whether a product is available.`,
    $localize`:@@inventory-visibility.capabilities.paragraph-2:DynaOps brings inventory visibility into the field sales experience, alongside the customer, pricing, products, and sales order.`,
  ],
  items: [
    {
      title: $localize`:@@inventory-visibility.capabilities.warehouse.title:Stock by Warehouse`,
      description: $localize`:@@inventory-visibility.capabilities.warehouse.description:View available stock across relevant warehouses to understand where inventory is currently held.`,
      image: { src: `${dir}/capability-1.webp`, width: 367, height: 268 },
    },
    {
      title: $localize`:@@inventory-visibility.capabilities.availability.title:Product Availability`,
      description: $localize`:@@inventory-visibility.capabilities.availability.description:Check inventory while discussing products with the customer and preparing the sales order.`,
      image: { src: `${dir}/capability-2.webp`, width: 366, height: 268 },
    },
    {
      title: $localize`:@@inventory-visibility.capabilities.order-entry.title:Inventory During Order Entry`,
      description: $localize`:@@inventory-visibility.capabilities.order-entry.description:Keep stock visibility available during the order creation process so representatives can make more informed selling decisions.`,
      image: { src: `${dir}/capability-3.webp`, width: 366, height: 259 },
    },
    {
      title: $localize`:@@inventory-visibility.capabilities.together.title:Customer, Pricing & Stock Together`,
      description: $localize`:@@inventory-visibility.capabilities.together.description:Work with customer-specific pricing, product information, and inventory visibility within the same sales context.`,
      image: { src: `${dir}/capability-4.webp`, width: 360, height: 268 },
    },
    {
      title: $localize`:@@inventory-visibility.capabilities.decisions.title:Better Field Decisions`,
      description: $localize`:@@inventory-visibility.capabilities.decisions.description:Give representatives clearer information before committing to quantities or discussing product availability with customers.`,
      image: { src: `${dir}/capability-5.webp`, width: 360, height: 259 },
    },
  ],
};

// The English phone frame labels the second activity "Activities"; desktop and tablet hold the final "Pricing".
const CONNECTIONS: FeatureConnectionsContent = {
  title: $localize`:@@inventory-visibility.connections.title:Sell with Better Information`,
  paragraphs: [
    $localize`:@@inventory-visibility.connections.paragraph-1:Inventory visibility is most valuable at the moment a sales decision is being made.`,
    $localize`:@@inventory-visibility.connections.paragraph-2:DynaOps brings stock information closer to the representative, helping reduce unnecessary back-and-forth with the office and giving the sales team better context when discussing orders with customers.`,
  ],
  compactHub: true,
  hub: {
    label: $localize`:@@inventory-visibility.connections.hub:Stock at the moment of sale`,
    icon: '/icons/features/warehouse-white.svg',
  },
  items: [
    {
      label: $localize`:@@inventory-visibility.connections.customer:Customer`,
      icon: '/icons/features/user-group-brand.svg',
    },
    {
      label: $localize`:@@inventory-visibility.connections.pricing:Pricing`,
      icon: '/icons/features/money-receive-flow-02-brand.svg',
    },
    {
      label: $localize`:@@inventory-visibility.connections.products:Products`,
      icon: '/icons/shared/package-01-brand.svg',
    },
    {
      label: $localize`:@@inventory-visibility.connections.sales-order:Sales order`,
      icon: '/icons/shared/safe-delivery-01-brand.svg',
    },
  ],
};

// Only the Arabic frames bold the ERP name here, so the English emphasis is empty.
const INTEGRATION: ErpIntegrationCopy = {
  title: $localize`:@@inventory-visibility.integration.title:Inventory Data Connected to Microsoft Dynamics 365 F&O`,
  paragraphs: [
    $localize`:@@inventory-visibility.integration.paragraph-1:Microsoft Dynamics 365 Finance & Operations remains responsible for your core inventory and warehouse processes.`,
    $localize`:@@inventory-visibility.integration.paragraph-2:DynaOps extends the relevant inventory visibility to your field sales team, allowing representatives to work with stock information without turning DynaOps into a separate inventory management system.`,
  ],
  emphasis: $localize`:@@inventory-visibility.integration.emphasis:`,
  allParagraphsOnPhone: true,
  spacedParagraphs: true,
  textWidth: 512,
};

const FOOTER_CTA: CtaContent = {
  title: $localize`:@@inventory-visibility.cta.title:Put Product Availability in the Hands of Your Sales Team`,
  description: $localize`:@@inventory-visibility.cta.description:See how DynaOps connects inventory visibility with customer information, pricing, and sales orders to support better field sales decisions.`,
  button: FEATURE_HERO_DEFAULTS.cta,
  // Figma uses the same device photo across the feature pages.
  image: CUSTOMER_MANAGEMENT_CONTENT.footerCta.image,
};

export const INVENTORY_VISIBILITY_CONTENT: FeaturePageContent = {
  title: $localize`:@@inventory-visibility.title:Inventory Visibility for Field Sales Teams`,
  description: $localize`:@@inventory-visibility.description:Check stock across warehouses during customer visits and order entry, with inventory data from Microsoft Dynamics 365 F&O right in the field sales app.`,
  hero: HERO,
  capabilities: CAPABILITIES,
  connections: CONNECTIONS,
  integration: INTEGRATION,
  footerCta: FOOTER_CTA,
};

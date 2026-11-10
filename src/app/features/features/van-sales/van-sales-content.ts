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
const dir = $localize`:@@van-sales.imageDir:/images/features/van-sales`;

// Figma bolds the product name in the Arabic subtitle only; it is bold in both, as on the other pages.
const HERO: FeatureHeroCopy = {
  eyebrow: $localize`:@@van-sales.hero.eyebrow:Van Sales & Van Stock Management`,
  title: $localize`:@@van-sales.hero.title:Run Every Sales Van as a Connected Mobile Sales Unit`,
  subtitle: $localize`:@@van-sales.hero.subtitle:DynaOps helps companies manage each sales van as a separate inventory location connected to`,
  emphasis: $localize`:@@van-sales.hero.emphasis:Microsoft Dynamics 365 Finance & Operations.`,
  note: $localize`:@@van-sales.hero.note:Load stock, sell directly from the van, process returns, count inventory, and keep every vehicle’s stock position visible throughout field operations.`,
  image: {
    src: `${dir}/hero.webp`,
    alt: $localize`:@@van-sales.hero.imageAlt:DynaOps van stock for VAN-07 with loaded, sold and available totals above today's stock movements for each product`,
    width: 408,
    height: 420,
  },
};

const CAPABILITIES: FeatureCapabilitiesContent = {
  title: $localize`:@@van-sales.capabilities.title:Control Van Inventory from Loading to Sale`,
  paragraphs: [
    $localize`:@@van-sales.capabilities.paragraph-1:Van sales require more than knowing what is inside the vehicle.`,
    $localize`:@@van-sales.capabilities.paragraph-2:DynaOps connects inventory movement and direct selling so each van can operate with its own controlled stock while remaining part of the company’s wider ERP environment.`,
  ],
  items: [
    {
      title: $localize`:@@van-sales.capabilities.warehouse.title:Van as a Separate Warehouse`,
      description: $localize`:@@van-sales.capabilities.warehouse.description:Manage each sales van as an independent warehouse, with its own stock balance and inventory movements.`,
      image: { src: `${dir}/capability-1.webp`, width: 360, height: 259 },
    },
    {
      title: $localize`:@@van-sales.capabilities.transfers.title:Stock Transfers & Replenishment`,
      description: $localize`:@@van-sales.capabilities.transfers.description:Transfer products from the main warehouse to the van whenever additional stock is required.`,
      image: { src: `${dir}/capability-2.webp`, width: 360, height: 259 },
    },
    {
      title: $localize`:@@van-sales.capabilities.visibility.title:Van Stock Visibility`,
      description: $localize`:@@van-sales.capabilities.visibility.description:Give representatives clear visibility into the products and quantities currently available in their assigned vehicle.`,
      image: { src: `${dir}/capability-3.webp`, width: 360, height: 268 },
    },
    {
      title: $localize`:@@van-sales.capabilities.direct-sales.title:Direct Van Sales`,
      description: $localize`:@@van-sales.capabilities.direct-sales.description:Sell directly from available van inventory during customer visits and keep transactions connected with the van’s stock.`,
      image: { src: `${dir}/capability-4.webp`, width: 360, height: 259 },
    },
    {
      title: $localize`:@@van-sales.capabilities.returns.title:Customer Returns`,
      description: $localize`:@@van-sales.capabilities.returns.description:Process customer returns and bring returned quantities back into the appropriate van inventory.`,
      image: { src: `${dir}/capability-5.webp`, width: 360, height: 268 },
    },
    {
      title: $localize`:@@van-sales.capabilities.counting.title:Van Stock Counting`,
      description: $localize`:@@van-sales.capabilities.counting.description:Count and review vehicle inventory to help maintain accurate stock balances across the field fleet.`,
      image: { src: `${dir}/capability-6.webp`, width: 360, height: 259 },
    },
  ],
};

// The Arabic phone frame keeps Visit Planning's hub label; the desktop and tablet one is final.
const CONNECTIONS: FeatureConnectionsContent = {
  title: $localize`:@@van-sales.connections.title:Connect Van Stock with the Sales Process`,
  paragraphs: [
    $localize`:@@van-sales.connections.paragraph-1:Van Sales in DynaOps works alongside customer pricing, trade promotions, sales orders, collections, GPS, and customer activities.`,
    $localize`:@@van-sales.connections.paragraph-2:The representative can serve the customer using the stock physically available in the vehicle while keeping the sales transaction connected to the wider business process.`,
  ],
  spacedPulse: true,
  hub: {
    label: $localize`:@@van-sales.connections.hub:Van stock`,
    icon: '/icons/features/truck-return-white.svg',
  },
  items: [
    {
      label: $localize`:@@van-sales.connections.pricing:Customer\npricing`,
      icon: '/icons/features/money-receive-flow-01-brand.svg',
    },
    {
      label: $localize`:@@van-sales.connections.promotions:Trade\npromotions`,
      icon: '/icons/features/discount-tag-02-brand.svg',
    },
    {
      label: $localize`:@@van-sales.connections.sales-orders:Sales\norders`,
      icon: '/icons/shared/safe-delivery-01-brand.svg',
    },
    {
      label: $localize`:@@van-sales.connections.collections:Collections`,
      icon: '/icons/features/save-money-dollar-brand.svg',
    },
    {
      label: $localize`:@@van-sales.connections.activities:Customer\nactivities`,
      icon: '/icons/features/add-to-list-brand.svg',
    },
  ],
};

const SHOWCASE: FeatureShowcaseContent = {
  title: $localize`:@@van-sales.showcase.title:Know What Every Van Carries`,
  paragraphs: [
    $localize`:@@van-sales.showcase.paragraph-1:Each vehicle operates with its own inventory position.`,
    $localize`:@@van-sales.showcase.paragraph-2:DynaOps helps the business understand what was transferred to the van, what remains available, what was sold, and what was returned, without treating field inventory as a disconnected process.`,
  ],
  image: {
    src: `${dir}/showcase.webp`,
    alt: $localize`:@@van-sales.showcase.imageAlt:DynaOps stock position by van for Thursday 22 October, listing loaded, sold and returned quantities with a stock status for each van`,
    width: 560,
    height: 342,
  },
};

const INTEGRATION: ErpIntegrationCopy = {
  title: $localize`:@@van-sales.integration.title:Connected with Microsoft Dynamics 365 F&O`,
  paragraphs: [
    $localize`:@@van-sales.integration.paragraph-1:Each van operates as a separate warehouse within the Microsoft Dynamics 365 Finance & Operations inventory structure.`,
    $localize`:@@van-sales.integration.paragraph-2:Dynamics 365 remains the core ERP, while DynaOps gives field teams a simpler way to work with van inventory and direct customer sales.`,
  ],
  emphasis: $localize`:@@van-sales.integration.emphasis:Microsoft Dynamics 365 Finance & Operations`,
  allParagraphsOnPhone: true,
  spacedParagraphs: true,
  textWidth: 512,
};

const FOOTER_CTA: CtaContent = {
  title: $localize`:@@van-sales.cta.title:Take Inventory and Selling Directly to the Customer`,
  description: $localize`:@@van-sales.cta.description:See how DynaOps helps you manage van stock, transfers, direct sales, returns, and inventory counting through one connected field operation.`,
  button: FEATURE_HERO_DEFAULTS.cta,
  // Figma uses the same device photo across the feature pages.
  image: CUSTOMER_MANAGEMENT_CONTENT.footerCta.image,
};

export const VAN_SALES_CONTENT: FeaturePageContent = {
  hero: HERO,
  capabilities: CAPABILITIES,
  connections: CONNECTIONS,
  showcase: SHOWCASE,
  integration: INTEGRATION,
  footerCta: FOOTER_CTA,
};

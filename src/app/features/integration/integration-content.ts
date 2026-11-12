import { pickFeatureCards } from '../../shared/ui/feature-card/feature-card-content';
import type { IntegrationContent } from './integration.model';

// Copy is English here; src/locale/ar/integration.json carries the Arabic under the same ids.
// The ERP diagram carries UI text, so its folder is localized like the copy; the other artwork is shared.
const dir = '/images/integration';
const localizedDir = $localize`:@@integration.imageDir:/images/integration`;
const demo = '/demo';

export const INTEGRATION_CONTENT: IntegrationContent = {
  hero: {
    badge: {
      icon: `${dir}/dynamics-365.svg`,
      label: $localize`:@@integration.hero.badge:Native Dynamics 365 F&O integration`,
    },
    title: $localize`:@@integration.hero.title:Extend D365 Finance & Operations to Your Sales Team`,
    subtitle: $localize`:@@integration.hero.subtitle:DynaOps SFA connects field sales activities with Microsoft Dynamics 365 Finance & Operations, giving representatives access to the business information they need while keeping Dynamics 365 as your core ERP and system of record.`,
    emphasis: $localize`:@@integration.hero.emphasis:Microsoft Dynamics 365 Finance & Operations`,
    cta: { label: $localize`:@@integration.hero.cta:Book a Demo`, href: demo },
    stack: {
      images: {
        tileBottom: `${dir}/tile-bottom.svg`,
        glowLower: `${dir}/glow-lower.svg`,
        tileMiddle: `${dir}/tile-middle.svg`,
        glowUpper: `${dir}/glow-upper.svg`,
        tileTop: `${dir}/tile-top.svg`,
        connector: `${dir}/connector.svg`,
      },
      labels: [
        {
          title: $localize`:@@integration.hero.stack.sfa.title:DynaOps SFA`,
          description: $localize`:@@integration.hero.stack.sfa.description:The features your team uses in the field: customers, orders, inventory, collections and approvals.`,
        },
        {
          title: $localize`:@@integration.hero.stack.integration.title:Integration`,
          description: $localize`:@@integration.hero.stack.integration.description:Direct connection through standard Microsoft APIs. No duplicate databases, no manual sync.`,
        },
        {
          title: $localize`:@@integration.hero.stack.erp.title:Microsoft Dynamics 365 F&O`,
          description: $localize`:@@integration.hero.stack.erp.description:Core ERP data and processes. Your system of record.`,
        },
      ],
    },
  },
  features: {
    title: $localize`:@@integration.features.title:Bring ERP Information into Every Customer Visit`,
    paragraphs: [
      $localize`:@@integration.features.paragraph-1:Your sales representatives should not need to work separately from the information already managed in Microsoft Dynamics 365 F&O.`,
      $localize`:@@integration.features.paragraph-2:DynaOps connects field activities with the ERP data and processes that support your sales operation.`,
    ],
    items: pickFeatureCards([
      {
        id: 'customer-management',
        title: $localize`:@@integration.features.customer-management.title:Customer Information`,
        description: $localize`:@@integration.features.customer-management.description:Give representatives access to relevant customer information and account activity while managing visits and sales interactions.`,
      },
      {
        id: 'inventory-visibility',
        title: $localize`:@@integration.features.inventory-visibility.title:Products, Pricing & Inventory`,
        description: $localize`:@@integration.features.inventory-visibility.description:Provide product information, customer-specific pricing, and inventory visibility when representatives are preparing customer orders.`,
      },
      {
        id: 'sales-order-management',
        title: $localize`:@@integration.features.sales-order-management.title:Sales Orders`,
        description: $localize`:@@integration.features.sales-order-management.description:Create sales orders from the field while keeping sales transactions connected with your Microsoft Dynamics 365 F&O processes.`,
      },
      {
        id: 'collections-management',
        title: $localize`:@@integration.features.collections-management.title:Collections`,
        description: $localize`:@@integration.features.collections-management.description:Record customer payments during visits and connect collection activities with your organization's financial processes.`,
      },
      {
        id: 'workflow-approvals',
        title: $localize`:@@integration.features.workflow-approvals.title:Workflow & Approvals`,
        description: $localize`:@@integration.features.workflow-approvals.description:Control orders, discounts, returns, collections, and customer creation through configurable approval workflows before transactions move forward.`,
      },
    ]),
    brandCard: {
      title: $localize`:@@integration.features.brand.title:Built for Microsoft Dynamics 365 Finance & Operations`,
      cta: { label: $localize`:@@integration.features.brand.cta:Book a Demo`, href: demo },
      mark: `${dir}/brand-mark.svg`,
    },
  },
  erp: {
    title: $localize`:@@integration.erp.title:One ERP.\nOne Connected Sales Process.`,
    paragraphs: [
      $localize`:@@integration.erp.paragraph-1:Microsoft Dynamics 365 F&O remains responsible for your core ERP data and processes, while DynaOps provides a focused experience for field representatives and sales managers.`,
      $localize`:@@integration.erp.paragraph-2:This helps extend your existing Dynamics environment into daily field sales operations without introducing a separate sales platform as the new system of record.`,
    ],
    image: {
      src: `${localizedDir}/erp-diagram.webp`,
      alt: $localize`:@@integration.erp.imageAlt:DynaOps365 and Microsoft Dynamics linked to the field team's customer information, products, pricing, inventory, sales orders, collections and approvals`,
      width: 470,
      height: 406,
    },
  },
  footerCta: {
    title: $localize`:@@integration.cta.title:Connect the Field with Your Microsoft Dynamics 365 F&O Environment`,
    description: $localize`:@@integration.cta.description:Give your sales team access to the information and processes they need outside the traditional ERP interface while keeping your Microsoft Dynamics 365 F&O environment at the center of your operation.`,
    button: { label: $localize`:@@integration.cta.button:Book a Demo`, href: demo },
    image: { src: `${dir}/cta-art.svg`, width: 344, height: 212 },
  },
};

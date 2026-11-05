import { CUSTOMER_MANAGEMENT_CONTENT } from '../customer-management/customer-management-content';
import { FEATURE_HERO_DEFAULTS } from '../components/feature-hero/feature-hero-content';
import type { FeatureHeroCopy } from '../components/feature-hero/feature-hero.model';
import type { FeatureCapabilitiesContent } from '../components/feature-capabilities/feature-capabilities.model';
import type { CtaContent } from '../../../shared/ui/cta-container/cta-container.model';
import type { ErpIntegrationCopy } from '../../../shared/ui/erp-integration/erp-integration.model';
import type { WorkflowExceptionsContent } from './components/workflow-approvals-exceptions/workflow-approvals-exceptions.model';
import type { WorkflowApprovalsContent } from './workflow-approvals.model';

// Copy is English here; src/locale/ar/features.json carries the Arabic under the same ids.
// The mocks carry UI text, so the artwork folder is localized like the copy.
const dir = $localize`:@@workflow-approvals.imageDir:/images/features/workflow-approvals`;

const HERO: FeatureHeroCopy = {
  eyebrow: $localize`:@@workflow-approvals.hero.eyebrow:Workflow & Approvals for field sales`,
  title: $localize`:@@workflow-approvals.hero.title:Keep Field Sales Fast Without Losing Control`,
  subtitle: $localize`:@@workflow-approvals.hero.subtitle:DynaOps gives organizations a configurable approval workflow for field sales transactions, helping teams manage exceptions, discounts, orders, collections, and customer requests before they move forward.`,
  wideArabicTabletCopy: true,
  note: $localize`:@@workflow-approvals.hero.note:Keep sales representatives productive while maintaining the controls your business requires.`,
  image: {
    src: `${dir}/hero.webp`,
    alt: $localize`:@@workflow-approvals.hero.imageAlt:DynaOps discount approval rule routing requests above 10% to a supervisor or area manager, then to the finance team`,
    width: 408,
    height: 420,
  },
};

// The Arabic desktop variants still carry Customer Management titles; the tablet and phone frames hold the final copy.
const CAPABILITIES: FeatureCapabilitiesContent = {
  title: $localize`:@@workflow-approvals.capabilities.title:Put the Right Approval Rules Behind Every Transaction`,
  paragraphs: [
    $localize`:@@workflow-approvals.capabilities.paragraph-1:Not every sales transaction should follow the same path.`,
    $localize`:@@workflow-approvals.capabilities.paragraph-2:DynaOps allows organizations to define approval flows based on the transaction, customer, user, territory, or commercial conditions involved.`,
  ],
  items: [
    {
      title: $localize`:@@workflow-approvals.capabilities.orders.title:Sales Order Approvals`,
      description: $localize`:@@workflow-approvals.capabilities.orders.description:Route selected sales orders for approval before they continue through the required business process.`,
      image: { src: `${dir}/capability-1.webp`, width: 360, height: 259 },
    },
    {
      title: $localize`:@@workflow-approvals.capabilities.discounts.title:Discount Approvals`,
      description: $localize`:@@workflow-approvals.capabilities.discounts.description:Control discount requests based on defined thresholds, customer conditions, or approval authority.`,
      image: { src: `${dir}/capability-2.webp`, width: 361, height: 268 },
    },
    {
      title: $localize`:@@workflow-approvals.capabilities.returns.title:Returns & Collections`,
      description: $localize`:@@workflow-approvals.capabilities.returns.description:Apply approval rules to returns and selected collection scenarios where additional control is required.`,
      image: { src: `${dir}/capability-3.webp`, width: 361, height: 268 },
    },
    {
      title: $localize`:@@workflow-approvals.capabilities.customers.title:Customer Creation`,
      description: $localize`:@@workflow-approvals.capabilities.customers.description:Route new customer requests through the required approval process before the account is created or activated.`,
      image: { src: `${dir}/capability-4.webp`, width: 360, height: 268 },
    },
    {
      title: $localize`:@@workflow-approvals.capabilities.conditions.title:Conditional Approval Rules`,
      description: $localize`:@@workflow-approvals.capabilities.conditions.description:Trigger approvals using conditions such as transaction amount, discount percentage, customer, territory, or user role.`,
      image: { src: `${dir}/capability-5.webp`, width: 361, height: 268 },
    },
    {
      title: $localize`:@@workflow-approvals.capabilities.levels.title:Multi-Level Approval Flows`,
      description: $localize`:@@workflow-approvals.capabilities.levels.description:Configure sequential, parallel, any-one, or all-must-approve scenarios based on your organization's approval structure.`,
      image: { src: `${dir}/capability-6.webp`, width: 361, height: 261 },
    },
  ],
};

const EXCEPTIONS: WorkflowExceptionsContent = {
  title: $localize`:@@workflow-approvals.exceptions.title:Control Exceptions Without Slowing Down Every Sale`,
  paragraphs: [
    $localize`:@@workflow-approvals.exceptions.paragraph-1:DynaOps helps organizations separate standard transactions from those that require additional review.`,
    $localize`:@@workflow-approvals.exceptions.paragraph-2:Routine sales activities can follow the normal process, while exceptions are automatically directed to the appropriate approvers based on the rules you define.`,
  ],
  images: {
    desktop: `${dir}/exceptions-desktop.webp`,
    tablet: `${dir}/exceptions-tablet.webp`,
    phone: `${dir}/exceptions-phone.webp`,
  },
  imageAlt: $localize`:@@workflow-approvals.exceptions.imageAlt:Field transactions pass through DynaOps workflow rules: 6 exceptions are routed for approval and 42 standard transactions continue automatically to Dynamics 365 F&O`,
};

const INTEGRATION: ErpIntegrationCopy = {
  title: $localize`:@@workflow-approvals.integration.title:Connected to Microsoft Dynamics 365`,
  paragraphs: [
    $localize`:@@workflow-approvals.integration.paragraph-1:DynaOps keeps approval decisions connected with your Microsoft Dynamics 365 Finance & Operations sales processes.`,
    $localize`:@@workflow-approvals.integration.paragraph-2:Field transactions can remain under workflow control until the required approvals are completed, helping the organization maintain governance before the transaction moves forward.`,
  ],
  emphasis: 'Microsoft Dynamics 365 Finance & Operations',
  allParagraphsOnPhone: true,
  spacedParagraphs: true,
  textWidth: 512,
};

const FOOTER_CTA: CtaContent = {
  title: $localize`:@@workflow-approvals.cta.title:Bring Control to Field Sales Decisions`,
  description: $localize`:@@workflow-approvals.cta.description:See how DynaOps helps your organization manage approvals across sales orders, discounts, returns, collections, and customer creation through one configurable workflow engine.`,
  button: FEATURE_HERO_DEFAULTS.cta,
  // Figma uses the same device photo on both feature pages.
  image: CUSTOMER_MANAGEMENT_CONTENT.footerCta.image,
};

export const WORKFLOW_APPROVALS_CONTENT: WorkflowApprovalsContent = {
  title: $localize`:@@workflow-approvals.title:Workflow & Approvals for Field Sales Teams`,
  description: $localize`:@@workflow-approvals.description:Keep field sales moving with configurable approval workflows for orders, discounts, returns and collections, connected to Microsoft Dynamics 365 F&O.`,
  hero: HERO,
  capabilities: CAPABILITIES,
  exceptions: EXCEPTIONS,
  integration: INTEGRATION,
  footerCta: FOOTER_CTA,
};

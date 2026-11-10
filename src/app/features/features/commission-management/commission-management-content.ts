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
const dir = $localize`:@@commission-management.imageDir:/images/features/commission-management`;

// Every Arabic frame keeps DynaOps AI's hero copy, so the Arabic hero is translated from this English.
const HERO: FeatureHeroCopy = {
  eyebrow: $localize`:@@commission-management.hero.eyebrow:Sales Commission Management`,
  title: $localize`:@@commission-management.hero.title:Make Commissions Match the Way Your Business Sells`,
  subtitle: $localize`:@@commission-management.hero.subtitle:DynaOps helps organizations define and calculate sales commissions using flexible business rules built around their actual sales model.`,
  note: $localize`:@@commission-management.hero.note:Connect commissions with representatives, teams, customers, products, sales results, and targets instead of relying on spreadsheets or one-size-fits-all formulas.`,
  image: {
    src: `${dir}/hero.webp`,
    alt: $localize`:@@commission-management.hero.imageAlt:DynaOps Q4 commission run for Riyadh North with commission earned against the potential, the commission basis and each representative's earnings`,
    width: 408,
    height: 420,
  },
};

// The English tablet and desktop mocks for item 3 are DynaOps AI's; the phone frame holds the final one.
const CAPABILITIES: FeatureCapabilitiesContent = {
  title: $localize`:@@commission-management.capabilities.title:Build Flexible Commission Rules`,
  paragraphs: [
    $localize`:@@commission-management.capabilities.paragraph-1:Different sales roles, products, customers, and markets may require different incentive structures.`,
    $localize`:@@commission-management.capabilities.paragraph-2:DynaOps lets you define commission rules using the dimensions and conditions that matter to your business.`,
  ],
  items: [
    {
      title: $localize`:@@commission-management.capabilities.individual-team.title:Individual & Team Commissions`,
      description: $localize`:@@commission-management.capabilities.individual-team.description:Create commission structures for individual representatives or sales teams based on how performance is measured.`,
      image: { src: `${dir}/capability-1.webp`, width: 360, height: 259 },
    },
    {
      title: $localize`:@@commission-management.capabilities.value-quantity.title:Sales Value & Quantity`,
      description: $localize`:@@commission-management.capabilities.value-quantity.description:Calculate commissions using sales value, quantity, or other defined sales conditions.`,
      image: { src: `${dir}/capability-2.webp`, width: 360, height: 268 },
    },
    {
      title: $localize`:@@commission-management.capabilities.customer-product.title:Customer & Product Rules`,
      description: $localize`:@@commission-management.capabilities.customer-product.description:Apply different commission logic across customers, customer groups, products, or product groups.`,
      image: { src: `${dir}/capability-3.webp`, width: 360, height: 259 },
    },
    {
      title: $localize`:@@commission-management.capabilities.territory.title:Territory & Sales Channel`,
      description: $localize`:@@commission-management.capabilities.territory.description:Use region, territory, or sales channel as part of the commission rule when your sales model requires it.`,
      image: { src: `${dir}/capability-4.webp`, width: 360, height: 259 },
    },
    {
      title: $localize`:@@commission-management.capabilities.targets.title:Target-Based Incentives`,
      description: $localize`:@@commission-management.capabilities.targets.description:Connect commission outcomes with sales targets and achievement rules to align incentives with commercial objectives.`,
      image: { src: `${dir}/capability-5.webp`, width: 360, height: 259 },
    },
    {
      title: $localize`:@@commission-management.capabilities.combined.title:Combined Business Rules`,
      description: $localize`:@@commission-management.capabilities.combined.description:Use multiple conditions together to build commission logic that reflects real sales scenarios rather than a single fixed percentage.`,
      image: { src: `${dir}/capability-6.webp`, width: 360, height: 259 },
    },
  ],
};

const CONNECTIONS: FeatureConnectionsContent = {
  title: $localize`:@@commission-management.connections.title:One Rule Model for Targets and Commissions`,
  paragraphs: [
    $localize`:@@commission-management.connections.paragraph-1:Targets and commissions should not live in separate systems with separate logic.`,
    $localize`:@@commission-management.connections.paragraph-2:DynaOps allows both to work from the same rule-driven model, helping organizations connect what the sales team is expected to achieve with how performance is rewarded.`,
  ],
  spacedPulse: true,
  hub: {
    label: $localize`:@@commission-management.connections.hub:One rule model`,
    icon: '/icons/features/laptop-phone-sync-white.svg',
  },
  items: [
    {
      label: $localize`:@@commission-management.connections.targets:Sales targets`,
      icon: '/icons/features/target-01-brand.svg',
    },
    {
      label: $localize`:@@commission-management.connections.commissions:Commissions`,
      icon: '/icons/features/discount-tag-01-brand.svg',
    },
    {
      label: $localize`:@@commission-management.connections.representatives:Representatives`,
      icon: '/icons/features/user-group-brand.svg',
    },
    {
      label: $localize`:@@commission-management.connections.teams:Sales teams`,
      icon: '/icons/features/user-switch-brand.svg',
    },
  ],
};

const SHOWCASE: FeatureShowcaseContent = {
  title: $localize`:@@commission-management.showcase.title:Reduce Manual Commission Work`,
  paragraphs: [
    $localize`:@@commission-management.showcase.paragraph-1:Complex commission structures often end up in spreadsheets, manual calculations, and repeated reconciliation.`,
    $localize`:@@commission-management.showcase.paragraph-2:DynaOps brings the calculation logic into the sales platform, making commission rules clearer, more consistent, and easier to manage across representatives and teams.`,
  ],
  image: {
    src: `${dir}/showcase.webp`,
    alt: $localize`:@@commission-management.showcase.imageAlt:DynaOps Q4 commission pool for Riyadh North, split by representative, with what Mohamed sees and what the manager sees`,
    width: 560,
    height: 342,
  },
};

const INTEGRATION: ErpIntegrationCopy = {
  title: $localize`:@@commission-management.integration.title:Connected with Microsoft Dynamics 365 F&O`,
  paragraphs: [
    $localize`:@@commission-management.integration.paragraph-1:DynaOps works around Microsoft Dynamics 365 Finance & Operations, using the connected sales environment as the foundation for commission calculations.`,
    $localize`:@@commission-management.integration.paragraph-2:Dynamics 365 remains the core ERP, while DynaOps adds the sales performance and commission layer needed by the commercial team.`,
  ],
  emphasis: $localize`:@@commission-management.integration.emphasis:Microsoft Dynamics 365 Finance & Operations`,
  allParagraphsOnPhone: true,
  spacedParagraphs: true,
  textWidth: 512,
};

const FOOTER_CTA: CtaContent = {
  title: $localize`:@@commission-management.cta.title:Turn Sales Performance into Clear Incentives`,
  description: $localize`:@@commission-management.cta.description:See how DynaOps helps you connect sales targets, business rules, and commission calculations in one structured sales process.`,
  button: FEATURE_HERO_DEFAULTS.cta,
  // Figma uses the same device photo across the feature pages.
  image: CUSTOMER_MANAGEMENT_CONTENT.footerCta.image,
};

export const COMMISSION_MANAGEMENT_CONTENT: FeaturePageContent = {
  hero: HERO,
  capabilities: CAPABILITIES,
  connections: CONNECTIONS,
  showcase: SHOWCASE,
  integration: INTEGRATION,
  footerCta: FOOTER_CTA,
};

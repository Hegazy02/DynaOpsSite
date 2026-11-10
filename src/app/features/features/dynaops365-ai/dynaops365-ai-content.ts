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
const dir = $localize`:@@dynaops365-ai.imageDir:/images/features/dynaops365-ai`;

const HERO: FeatureHeroCopy = {
  eyebrow: $localize`:@@dynaops365-ai.hero.eyebrow:DynaOps AI for Field Sales`,
  title: $localize`:@@dynaops365-ai.hero.title:Turn Operational Data into Smarter Sales Decisions`,
  subtitle: $localize`:@@dynaops365-ai.hero.subtitle:DynaOps AI brings intelligence into the flow of field sales operations.`,
  note: $localize`:@@dynaops365-ai.hero.note:By working with connected customer, visit, route, order, collection, and performance data, it helps turn everyday operational information into clearer insights, smarter planning, and better-informed decisions.`,
  image: {
    src: `${dir}/hero.webp`,
    alt: $localize`:@@dynaops365-ai.hero.imageAlt:DynaOps AI insights for Riyadh North with today's insights, route savings and at-risk accounts above a list of suggested actions`,
    width: 408,
    height: 420,
  },
};

// The English desktop frame keeps Visit Planning's title, and the Arabic desktop frame Offline Mode's first
// paragraph; the tablet and phone frames hold the final copy.
const CAPABILITIES: FeatureCapabilitiesContent = {
  title: $localize`:@@dynaops365-ai.capabilities.title:Intelligence Built Around Your Sales Operation`,
  paragraphs: [
    $localize`:@@dynaops365-ai.capabilities.paragraph-1:Field sales generates valuable information every day.`,
    $localize`:@@dynaops365-ai.capabilities.paragraph-2:DynaOps AI brings that information together with artificial intelligence to help teams better understand operations, identify what matters, and support smarter execution across the sales organization.`,
  ],
  items: [
    {
      title: $localize`:@@dynaops365-ai.capabilities.insights.title:Intelligent Sales Insights`,
      description: $localize`:@@dynaops365-ai.capabilities.insights.description:Surface relevant information from sales and field activity to help teams understand performance and operational patterns more clearly.`,
      image: { src: `${dir}/capability-1.webp`, width: 360, height: 259 },
    },
    {
      title: $localize`:@@dynaops365-ai.capabilities.routes.title:AI-Powered Route Optimization`,
      description: $localize`:@@dynaops365-ai.capabilities.routes.description:Use AI to support smarter route planning and organize customer visits more effectively across field teams.`,
      image: { src: `${dir}/capability-2.webp`, width: 360, height: 259 },
    },
    {
      title: $localize`:@@dynaops365-ai.capabilities.operations.title:Operational Intelligence`,
      description: $localize`:@@dynaops365-ai.capabilities.operations.description:Bring additional intelligence into customer coverage, field activity, routes, orders, collections, and other operational areas.`,
      image: { src: `${dir}/capability-3.webp`, width: 360, height: 259 },
    },
    {
      title: $localize`:@@dynaops365-ai.capabilities.decisions.title:Decision Support`,
      description: $localize`:@@dynaops365-ai.capabilities.decisions.description:Help managers interpret operational information and focus attention on the areas that require action.`,
      image: { src: `${dir}/capability-4.webp`, width: 360, height: 259 },
    },
    {
      title: $localize`:@@dynaops365-ai.capabilities.embedded.title:Embedded in DynaOps`,
      description: $localize`:@@dynaops365-ai.capabilities.embedded.description:Use AI within the same environment where sales teams already manage customers, visits, orders, collections, and field activities.`,
      image: { src: `${dir}/capability-5.webp`, width: 360, height: 259 },
    },
  ],
};

const CONNECTIONS: FeatureConnectionsContent = {
  title: $localize`:@@dynaops365-ai.connections.title:Intelligence Across the Sales Operation`,
  paragraphs: [
    $localize`:@@dynaops365-ai.connections.paragraph-1:Route optimization is one application of DynaOps AI within a broader intelligence layer.`,
    $localize`:@@dynaops365-ai.connections.paragraph-2:By bringing together customer, sales, and field execution data, DynaOps AI provides a foundation for smarter insights and decision support across different areas of sales operations.`,
    $localize`:@@dynaops365-ai.connections.paragraph-3:The value comes from understanding the operation as a whole not analyzing each activity in isolation.`,
  ],
  spacedPulse: true,
  hub: {
    label: $localize`:@@dynaops365-ai.connections.hub:DynaOps AI`,
    icon: '/icons/features/ai-magic-white.svg',
  },
  items: [
    {
      label: $localize`:@@dynaops365-ai.connections.customer-data:Customer data`,
      icon: '/icons/features/user-circle-02-brand.svg',
    },
    {
      label: $localize`:@@dynaops365-ai.connections.sales-data:Sales data`,
      icon: '/icons/features/catalogue-brand.svg',
    },
    {
      label: $localize`:@@dynaops365-ai.connections.field-execution:Field execution`,
      icon: '/icons/features/location-user-03-brand.svg',
    },
    {
      label: $localize`:@@dynaops365-ai.connections.routes:Routes`,
      icon: '/icons/shared/route-02-brand.svg',
    },
    {
      label: $localize`:@@dynaops365-ai.connections.collections:Collections`,
      icon: '/icons/features/save-money-dollar-brand.svg',
    },
  ],
};

const SHOWCASE: FeatureShowcaseContent = {
  title: $localize`:@@dynaops365-ai.showcase.title:From Data to Action`,
  paragraphs: [
    $localize`:@@dynaops365-ai.showcase.paragraph-1:More data does not automatically lead to better decisions.`,
    $localize`:@@dynaops365-ai.showcase.paragraph-2:DynaOps AI helps transform operational information into useful context that sales teams and managers can act on.`,
    $localize`:@@dynaops365-ai.showcase.paragraph-3:Instead of simply showing what happened, the goal is to make the information behind daily sales execution easier to understand and use.`,
  ],
  image: {
    src: `${dir}/showcase.webp`,
    alt: $localize`:@@dynaops365-ai.showcase.imageAlt:DynaOps AI from data to action for Bin Dawood Al Malaz: the data, the pattern, the insight, the suggestion and the action taken`,
    width: 560,
    height: 342,
  },
};

// Figma bolds the product name in English only; it is bold in both, as on the other pages.
const INTEGRATION: ErpIntegrationCopy = {
  title: $localize`:@@dynaops365-ai.integration.title:Connected with Microsoft Dynamics 365 F&O`,
  paragraphs: [
    $localize`:@@dynaops365-ai.integration.paragraph-1:DynaOps works around Microsoft Dynamics 365 Finance & Operations, keeping your ERP at the center of your business processes.`,
    $localize`:@@dynaops365-ai.integration.paragraph-2:DynaOps AI adds intelligence around the sales and field operations layer, helping teams get more value from the data already connected across the business.`,
  ],
  emphasis: $localize`:@@dynaops365-ai.integration.emphasis:Microsoft Dynamics 365 Finance & Operations`,
  allParagraphsOnPhone: true,
  spacedParagraphs: true,
  textWidth: 512,
};

const FOOTER_CTA: CtaContent = {
  title: $localize`:@@dynaops365-ai.cta.title:Bring Intelligence into Everyday Sales Operations`,
  description: $localize`:@@dynaops365-ai.cta.description:Discover how DynaOps AI can bring smarter insights, planning, and decision support into your field sales operation.`,
  button: FEATURE_HERO_DEFAULTS.cta,
  // Figma uses the same device photo across the feature pages.
  image: CUSTOMER_MANAGEMENT_CONTENT.footerCta.image,
};

export const DYNAOPS_AI_CONTENT: FeaturePageContent = {
  hero: HERO,
  capabilities: CAPABILITIES,
  connections: CONNECTIONS,
  showcase: SHOWCASE,
  integration: INTEGRATION,
  footerCta: FOOTER_CTA,
};

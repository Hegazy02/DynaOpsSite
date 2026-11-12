import type { IntegrationStackContent } from '../integration-stack/integration-stack.model';

export interface IntegrationHeroBadge {
  // Root-relative logo shown on the white tile.
  icon: string;
  label: string;
}

export interface IntegrationHeroCta {
  label: string;
  href: string;
}

export interface IntegrationHeroContent {
  badge: IntegrationHeroBadge;
  title: string;
  subtitle: string;
  // Semibold phrase inside the subtitle.
  emphasis: string;
  cta: IntegrationHeroCta;
  stack: IntegrationStackContent;
}

// The subtitle split around its emphasis.
export interface IntegrationHeroSubtitleParts {
  before: string;
  emphasis: string;
  after: string;
}

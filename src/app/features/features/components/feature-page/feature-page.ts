import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FooterCta } from '../../../../layout/footer/footer-cta.directive';
import { Button } from '../../../../shared/ui/button/button';
import { CtaContainer } from '../../../../shared/ui/cta-container/cta-container';
import { ErpIntegration } from '../../../../shared/ui/erp-integration/erp-integration';
import { FeatureCapabilities } from '../feature-capabilities/feature-capabilities';
import { FeatureConnections } from '../feature-connections/feature-connections';
import { FeatureHero } from '../feature-hero/feature-hero';
import type { FeaturePageContent } from './feature-page.model';

// Layout shared by the feature pages: hero, capabilities, connections, ERP integration and the footer CTA, all from `content`.
@Component({
  selector: 'app-feature-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    FeatureHero,
    FeatureCapabilities,
    FeatureConnections,
    ErpIntegration,
    FooterCta,
    CtaContainer,
    Button,
  ],
  templateUrl: './feature-page.html',
  // Figma stacks the sections 24 / 48 / 64px apart (phone / tablet / desktop), and as far again above the footer.
  host: { class: 'flex flex-col gap-6 pb-6 md:gap-12 md:pb-12 xl:gap-16 xl:pb-16' },
})
export class FeaturePage {
  readonly content = input.required<FeaturePageContent>();

  // Full class names so Tailwind's scanner sees them.
  // A fixed, centred box may spill into the card padding on narrow phones so the first line keeps Figma's break.
  protected readonly ctaTitleClass = computed(() =>
    this.content().footerCtaFormat?.arabicPhoneTitleWidth === 316
      ? 'max-md:rtl:w-79 max-md:rtl:self-center'
      : '',
  );
}

import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FooterCta } from '../../../../layout/footer/footer-cta.directive';
import { Button } from '../../../../shared/ui/button/button';
import { CtaContainer } from '../../../../shared/ui/cta-container/cta-container';
import { IndustriesHero } from '../industries-hero/industries-hero';
import { IndustriesIntegration } from '../industries-integration/industries-integration';
import { IndustriesVisibility } from '../industries-visibility/industries-visibility';
import { IndustryFeatures } from '../industry-features/industry-features';
import type { IndustryPageContent } from './industry-page.model';

// Layout shared by the industry pages: hero, features, integration, visibility and the footer CTA, all from `content`.
// Extra sections project in: `industryAfterHero`, `industryAfterFeatures`, `industryAfterIntegration`, or unmarked after visibility.
@Component({
  selector: 'app-industry-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    IndustriesHero,
    IndustryFeatures,
    IndustriesIntegration,
    IndustriesVisibility,
    FooterCta,
    CtaContainer,
    Button,
  ],
  templateUrl: './industry-page.html',
  host: { class: 'block' },
})
export class IndustryPage {
  readonly content = input.required<IndustryPageContent>();

  // Full class names so Tailwind's scanner sees them.
  protected readonly ctaTextClass = computed(() =>
    this.content().footerCtaFormat?.englishTitleOneLine ? 'xl:ltr:max-w-none' : '',
  );
  protected readonly ctaTitleClass = computed(() =>
    this.content().footerCtaFormat?.arabicNaturalWrapBelowXl ? 'max-xl:rtl:text-wrap' : '',
  );
  protected readonly ctaDescriptionClass = computed(() => {
    const format = this.content().footerCtaFormat;
    return [
      format?.englishDescriptionWidth === 588 ? 'xl:ltr:max-w-147 xl:ltr:text-wrap' : '',
      format?.arabicDescriptionOneLine ? 'xl:rtl:max-w-none' : '',
      format?.arabicNaturalWrapBelowXl ? 'max-xl:rtl:text-wrap' : '',
    ].join(' ');
  });
}

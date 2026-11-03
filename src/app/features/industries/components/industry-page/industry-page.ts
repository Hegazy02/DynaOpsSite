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
  // Figma stacks the sections 24 / 48 / 64px apart (phone / tablet / desktop), and as far again above the footer.
  host: { class: 'flex flex-col gap-6 pb-6 md:gap-12 md:pb-12 xl:gap-16 xl:pb-16' },
})
export class IndustryPage {
  readonly content = input.required<IndustryPageContent>();

  // Full class names so Tailwind's scanner sees them.
  protected readonly ctaTextClass = computed(() =>
    this.content().footerCtaFormat?.englishTitleOneLine ? 'xl:ltr:max-w-none' : '',
  );
  protected readonly ctaTitleClass = computed(() => {
    const format = this.content().footerCtaFormat;
    return [
      format?.englishTitleWidth === 660 ? 'ltr:text-wrap xl:ltr:mx-auto xl:ltr:max-w-165' : '',
      format?.arabicNaturalWrapBelowXl ? 'max-xl:rtl:text-wrap' : '',
      format?.arabicTabletTitleWidth === 560 ? 'md:max-xl:rtl:mx-auto md:max-xl:rtl:max-w-140' : '',
    ].join(' ');
  });
  protected readonly ctaDescriptionClass = computed(() => {
    const format = this.content().footerCtaFormat;
    return [
      format?.englishDescriptionWidth
        ? ENGLISH_DESCRIPTION_WIDTH[format.englishDescriptionWidth]
        : '',
      format?.arabicDescriptionOneLine ? 'xl:rtl:max-w-none' : '',
      format?.arabicNaturalWrapBelowXl ? 'max-xl:rtl:text-wrap' : '',
      format?.arabicPhoneDescriptionWidth === 308 ? 'max-md:rtl:max-w-77' : '',
    ].join(' ');
  });
}

const ENGLISH_DESCRIPTION_WIDTH = {
  588: 'xl:ltr:max-w-147 xl:ltr:text-wrap',
  604: 'xl:ltr:max-w-151 xl:ltr:text-wrap',
} as const;

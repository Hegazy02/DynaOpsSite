import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { IndustryFeatureCard } from '../industry-feature-card/industry-feature-card';
import type { IndustryFeaturesContent } from './industry-features.model';

// Feature grid shared by the industry pages: one column up to lg, three from xl.
@Component({
  selector: 'app-industry-features',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IndustryFeatureCard],
  templateUrl: './industry-features.html',
  host: { class: 'block' },
})
export class IndustryFeatures {
  readonly content = input.required<IndustryFeaturesContent>();

  // Full class names so Tailwind's scanner sees them.
  protected readonly titleWidthClass = computed(() =>
    this.content().titleTabletWidth === 640 ? 'md:max-w-160' : 'md:max-w-125',
  );
  protected readonly descriptionWidthClass = computed(() => {
    const { tablet = 430, desktop = 768, arabicDesktop } = this.content().descriptionWidth ?? {};
    const arabic = arabicDesktop ? ARABIC_DESKTOP_WIDTH[arabicDesktop] : 'xl:rtl:max-w-none';
    return `${TABLET_WIDTH[tablet]} ${DESKTOP_WIDTH[desktop]} ${arabic}`;
  });
}

const TABLET_WIDTH = {
  430: 'md:max-w-107.5',
  492: 'md:max-w-123',
  640: 'md:max-w-160',
} as const;
const DESKTOP_WIDTH = {
  492: 'xl:max-w-123',
  586: 'xl:max-w-146.5',
  768: 'xl:max-w-192',
  780: 'xl:max-w-195',
} as const;
const ARABIC_DESKTOP_WIDTH = { 640: 'xl:rtl:max-w-160' } as const;

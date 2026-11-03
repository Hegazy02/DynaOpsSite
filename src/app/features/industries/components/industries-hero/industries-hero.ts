import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Button } from '../../../../shared/ui/button/button';
import { INDUSTRIES_HERO_DEFAULTS } from './industries-hero-content';
import type {
  IndustriesHeroArabicTabletWidth,
  IndustriesHeroCta,
  IndustriesHeroEnglishTitleWidth,
  IndustriesHeroImage,
  IndustriesHeroSubtitleRole,
  IndustriesHeroTabletWidth,
} from './industries-hero.model';

// Opener of the industry pages: copy beside the artwork from xl, stacked and centred below.
// Each page passes its own artwork; only the call to action is shared.
@Component({
  selector: 'app-industries-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Button],
  templateUrl: './industries-hero.html',
  host: {
    class:
      'block overflow-hidden rounded-b-xl bg-linear-to-b/srgb from-transparent to-brand-500/20',
  },
})
export class IndustriesHero {
  readonly title = input.required<string>();
  readonly subtitle = input.required<string>();
  // Bold closing phrase of the subtitle.
  readonly emphasis = input<string>();
  readonly image = input.required<IndustriesHeroImage>();
  readonly cta = input<IndustriesHeroCta>(INDUSTRIES_HERO_DEFAULTS.cta);
  readonly tabletWidth = input<IndustriesHeroTabletWidth>();
  readonly arabicTabletWidth = input<IndustriesHeroArabicTabletWidth>();
  readonly englishTitleWidth = input<IndustriesHeroEnglishTitleWidth>();
  readonly englishDesktopSubtitleWidth = input<558>();
  readonly subtitleRole = input<IndustriesHeroSubtitleRole>('body');

  // Full class names so Tailwind's scanner sees them; English column and Arabic boxes are set apart.
  protected readonly textWidthClass = computed(() => {
    const width = this.tabletWidth();
    return width ? TABLET_WIDTH[width] : '';
  });
  protected readonly titleClass = computed(() => {
    const english = this.englishTitleWidth();
    return [
      this.arabicTabletWidth() ? 'md:max-xl:rtl:mx-auto md:max-xl:rtl:max-w-138.5' : '',
      english?.tablet === 516 ? 'md:max-xl:ltr:mx-auto md:max-xl:ltr:max-w-129' : '',
      english?.phone === 320 ? 'max-md:ltr:mx-auto max-md:ltr:max-w-80' : '',
    ].join(' ');
  });
  protected readonly subtitleClass = computed(() => {
    const role = this.subtitleRole() === 'subtitle' ? 'text-subtitle' : 'text-body-md';
    const arabic = this.arabicTabletWidth();
    return [
      role,
      arabic ? ARABIC_SUBTITLE_WIDTH[arabic.subtitle] : '',
      this.englishDesktopSubtitleWidth() === 558 ? 'xl:ltr:max-w-139.5' : '',
    ].join(' ');
  });

  // 3x screens pick the larger file; everything else keeps the 2x src.
  protected readonly srcset = computed(() => {
    const { src, src3x } = this.image();
    return src3x ? `${src} 2x, ${src3x} 3x` : null;
  });
}

const TABLET_WIDTH = {
  554: 'md:max-xl:ltr:max-w-138.5',
  580: 'md:max-xl:ltr:max-w-145',
} as const;
const ARABIC_SUBTITLE_WIDTH = {
  486: 'md:max-xl:rtl:mx-auto md:max-xl:rtl:max-w-121.5',
  504: 'md:max-xl:rtl:mx-auto md:max-xl:rtl:max-w-126',
} as const;

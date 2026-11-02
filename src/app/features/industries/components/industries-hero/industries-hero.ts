import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Button } from '../../../../shared/ui/button/button';
import { INDUSTRIES_HERO_DEFAULTS } from './industries-hero-content';
import type {
  IndustriesHeroCta,
  IndustriesHeroImage,
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

  // Full class name so Tailwind's scanner sees it; English only, the Arabic copy keeps 640px.
  protected readonly textWidthClass = computed(() =>
    this.tabletWidth() === 580 ? 'md:max-xl:ltr:max-w-145' : '',
  );

  // 3x screens pick the larger file; everything else keeps the 2x src.
  protected readonly srcset = computed(() => {
    const { src, src3x } = this.image();
    return src3x ? `${src} 2x, ${src3x} 3x` : null;
  });
}

import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Button } from '../../../../shared/ui/button/button';
import { FEATURE_HERO_DEFAULTS } from './feature-hero-content';
import type { FeatureHeroCta, FeatureHeroImage } from './feature-hero.model';

// Opener of the feature pages: copy beside the product mock from xl.
// Below xl the copy column dissolves (`contents`) so the eyebrow can sit above the mock, as in the tablet and phone frames.
@Component({
  selector: 'app-feature-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, RouterLink, Button],
  templateUrl: './feature-hero.html',
  host: {
    class:
      'block overflow-hidden rounded-b-xl bg-linear-to-b/srgb from-transparent to-brand-500/20',
  },
})
export class FeatureHero {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly subtitle = input.required<string>();
  readonly emphasis = input<string>();
  readonly note = input<string>();
  readonly image = input.required<FeatureHeroImage>();
  readonly cta = input<FeatureHeroCta>(FEATURE_HERO_DEFAULTS.cta);
}

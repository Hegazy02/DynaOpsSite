import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Button } from '../../../../../shared/ui/button/button';
import { AllFeaturesCarousel } from '../all-features-carousel/all-features-carousel';
import type { AllFeaturesHeroContent, AllFeaturesTextParts } from './all-features-hero.model';

// Opener of the features overview: copy beside the feature carousel from xl, carousel above centred copy below.
@Component({
  selector: 'app-all-features-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Button, AllFeaturesCarousel],
  templateUrl: './all-features-hero.html',
  host: {
    class:
      'block overflow-hidden rounded-b-xl bg-linear-to-b/srgb from-transparent to-brand-500/20',
  },
})
export class AllFeaturesHero {
  readonly content = input.required<AllFeaturesHeroContent>();

  private readonly document = inject(DOCUMENT);

  protected readonly title = computed(() =>
    split(this.content().title, this.content().titleHighlight),
  );
  protected readonly subtitle = computed(() =>
    split(this.content().subtitle, this.content().subtitleEmphasis),
  );

  protected explore(): void {
    const reduce = this.document.defaultView?.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    this.document
      .getElementById(this.content().explore.targetId)
      ?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  }
}

function split(text: string, match: string): AllFeaturesTextParts {
  const index = text.indexOf(match);
  return index < 0
    ? { before: text, match: '', after: '' }
    : { before: text.slice(0, index), match, after: text.slice(index + match.length) };
}

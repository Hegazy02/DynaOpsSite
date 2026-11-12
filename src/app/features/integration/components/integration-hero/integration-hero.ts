import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Button } from '../../../../shared/ui/button/button';
import { IntegrationStack } from '../integration-stack/integration-stack';
import type {
  IntegrationHeroContent,
  IntegrationHeroSubtitleParts,
} from './integration-hero.model';

// Opener of the Integration page: badge, copy and demo link beside the animated stack from xl, stacked and centred below.
@Component({
  selector: 'app-integration-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Button, IntegrationStack],
  templateUrl: './integration-hero.html',
  host: {
    class:
      'block overflow-hidden rounded-b-xl bg-linear-to-b/srgb from-transparent to-brand-500/20',
  },
})
export class IntegrationHero {
  readonly content = input.required<IntegrationHeroContent>();

  protected readonly subtitle = computed<IntegrationHeroSubtitleParts>(() => {
    const { subtitle, emphasis } = this.content();
    const index = subtitle.indexOf(emphasis);
    return index < 0
      ? { before: subtitle, emphasis: '', after: '' }
      : {
          before: subtitle.slice(0, index),
          emphasis,
          after: subtitle.slice(index + emphasis.length),
        };
  });
}

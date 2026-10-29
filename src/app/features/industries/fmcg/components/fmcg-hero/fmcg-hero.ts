import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Button } from '../../../../../shared/ui/button/button';
import type { FmcgHeroContent } from './fmcg-hero.model';

// Opening section of the FMCG page: artwork above centred copy up to lg, beside it from xl.
@Component({
  selector: 'app-fmcg-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Button],
  templateUrl: './fmcg-hero.html',
  host: {
    class:
      'block overflow-hidden rounded-b-xl bg-linear-to-b/srgb from-transparent to-brand-500/20',
  },
})
export class FmcgHero {
  readonly content = input.required<FmcgHeroContent>();
}

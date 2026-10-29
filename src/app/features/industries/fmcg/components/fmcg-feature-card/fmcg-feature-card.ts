import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { FmcgFeatureCardContent } from './fmcg-feature-card.model';

@Component({
  selector: 'app-fmcg-feature-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './fmcg-feature-card.html',
  host: { class: 'block' },
})
export class FmcgFeatureCard {
  readonly content = input.required<FmcgFeatureCardContent>();
}

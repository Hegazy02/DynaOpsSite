import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { IndustryFeatureCardContent } from './industry-feature-card.model';

@Component({
  selector: 'app-industry-feature-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './industry-feature-card.html',
  host: { class: 'block min-w-0' },
})
export class IndustryFeatureCard {
  readonly content = input.required<IndustryFeatureCardContent>();
}

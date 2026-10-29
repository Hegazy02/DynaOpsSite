import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { FmcgFeatureCard } from '../fmcg-feature-card/fmcg-feature-card';
import type { FmcgFeaturesContent } from './fmcg-features.model';

// Feature grid of the FMCG page: one column up to lg, three from xl.
@Component({
  selector: 'app-fmcg-features',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FmcgFeatureCard],
  templateUrl: './fmcg-features.html',
  host: { class: 'block' },
})
export class FmcgFeatures {
  readonly content = input.required<FmcgFeaturesContent>();
}

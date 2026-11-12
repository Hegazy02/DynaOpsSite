import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FeatureCard } from '../../../../shared/ui/feature-card/feature-card';
import type { IntegrationFeaturesContent } from './integration-features.model';

// The ERP data reps get in the field: five feature cards and a closing brand card, one column up to lg, three from xl.
@Component({
  selector: 'app-integration-features',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, FeatureCard],
  templateUrl: './integration-features.html',
  host: { class: 'block' },
})
export class IntegrationFeatures {
  readonly content = input.required<IntegrationFeaturesContent>();
}

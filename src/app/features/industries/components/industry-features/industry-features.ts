import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { IndustryFeatureCard } from '../industry-feature-card/industry-feature-card';
import type { IndustryFeaturesContent } from './industry-features.model';

// Feature grid shared by the industry pages: one column up to lg, three from xl.
@Component({
  selector: 'app-industry-features',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IndustryFeatureCard],
  templateUrl: './industry-features.html',
  host: { class: 'block' },
})
export class IndustryFeatures {
  readonly content = input.required<IndustryFeaturesContent>();

  // English tablet description box from the page's Figma frame: 430px, or 492px when wide.
  protected readonly tabletDescriptionWidth = computed(() =>
    this.content().wideTabletDescription ? 'md:max-w-123' : 'md:max-w-107.5',
  );
}

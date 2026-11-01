import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IndustriesHero } from '../components/industries-hero/industries-hero';
import { IndustriesIntegration } from '../components/industries-integration/industries-integration';
import { IndustriesVisibility } from '../components/industries-visibility/industries-visibility';
import { IndustryFeatures } from '../components/industry-features/industry-features';
import { FMCG_CONTENT } from './fmcg-content';

@Component({
  selector: 'app-fmcg',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IndustriesHero, IndustryFeatures, IndustriesIntegration, IndustriesVisibility],
  templateUrl: './fmcg.html',
  host: { class: 'block' },
})
export class Fmcg {
  protected readonly content = FMCG_CONTENT;
}

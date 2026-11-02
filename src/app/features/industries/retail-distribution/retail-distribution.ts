import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IndustryPage } from '../components/industry-page/industry-page';
import { RETAIL_DISTRIBUTION_CONTENT } from './retail-distribution-content';

@Component({
  selector: 'app-retail-distribution',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IndustryPage],
  templateUrl: './retail-distribution.html',
  host: { class: 'block' },
})
export class RetailDistribution {
  protected readonly content = RETAIL_DISTRIBUTION_CONTENT;
}

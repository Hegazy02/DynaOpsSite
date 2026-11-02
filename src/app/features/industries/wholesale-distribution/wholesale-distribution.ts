import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IndustryPage } from '../components/industry-page/industry-page';
import { WHOLESALE_DISTRIBUTION_CONTENT } from './wholesale-distribution-content';

@Component({
  selector: 'app-wholesale-distribution',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IndustryPage],
  templateUrl: './wholesale-distribution.html',
  host: { class: 'block' },
})
export class WholesaleDistribution {
  protected readonly content = WHOLESALE_DISTRIBUTION_CONTENT;
}

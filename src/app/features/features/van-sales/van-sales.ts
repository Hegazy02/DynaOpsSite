import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FeaturePage } from '../components/feature-page/feature-page';
import { VAN_SALES_CONTENT } from './van-sales-content';

@Component({
  selector: 'app-van-sales',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FeaturePage],
  templateUrl: './van-sales.html',
  host: { class: 'block' },
})
export class VanSales {
  protected readonly content = VAN_SALES_CONTENT;
}

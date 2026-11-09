import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FeaturePage } from '../components/feature-page/feature-page';
import { SALES_ORDER_MANAGEMENT_CONTENT } from './sales-order-management-content';

@Component({
  selector: 'app-sales-order-management',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FeaturePage],
  templateUrl: './sales-order-management.html',
  host: { class: 'block' },
})
export class SalesOrderManagement {
  protected readonly content = SALES_ORDER_MANAGEMENT_CONTENT;
}

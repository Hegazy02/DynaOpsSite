import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FeaturePage } from '../components/feature-page/feature-page';
import { CUSTOMER_MANAGEMENT_CONTENT } from './customer-management-content';

@Component({
  selector: 'app-customer-management',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FeaturePage],
  templateUrl: './customer-management.html',
  host: { class: 'block' },
})
export class CustomerManagement {
  protected readonly content = CUSTOMER_MANAGEMENT_CONTENT;
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FeaturePage } from '../components/feature-page/feature-page';
import { COMMISSION_MANAGEMENT_CONTENT } from './commission-management-content';

@Component({
  selector: 'app-commission-management',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FeaturePage],
  templateUrl: './commission-management.html',
  host: { class: 'block' },
})
export class CommissionManagement {
  protected readonly content = COMMISSION_MANAGEMENT_CONTENT;
}

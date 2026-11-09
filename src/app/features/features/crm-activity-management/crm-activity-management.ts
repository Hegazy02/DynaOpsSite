import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FeaturePage } from '../components/feature-page/feature-page';
import { CRM_ACTIVITY_MANAGEMENT_CONTENT } from './crm-activity-management-content';

@Component({
  selector: 'app-crm-activity-management',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FeaturePage],
  templateUrl: './crm-activity-management.html',
  host: { class: 'block' },
})
export class CrmActivityManagement {
  protected readonly content = CRM_ACTIVITY_MANAGEMENT_CONTENT;
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FeaturePage } from '../components/feature-page/feature-page';
import { WorkflowApprovalsExceptions } from './components/workflow-approvals-exceptions/workflow-approvals-exceptions';
import { WORKFLOW_APPROVALS_CONTENT } from './workflow-approvals-content';

@Component({
  selector: 'app-workflow-approvals',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FeaturePage, WorkflowApprovalsExceptions],
  templateUrl: './workflow-approvals.html',
  host: { class: 'block' },
})
export class WorkflowApprovals {
  protected readonly content = WORKFLOW_APPROVALS_CONTENT;
}

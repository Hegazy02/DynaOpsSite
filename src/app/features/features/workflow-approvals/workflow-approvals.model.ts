import type { FeaturePageContent } from '../components/feature-page/feature-page.model';
import type { WorkflowExceptionsContent } from './components/workflow-approvals-exceptions/workflow-approvals-exceptions.model';

export interface WorkflowApprovalsContent extends FeaturePageContent {
  exceptions: WorkflowExceptionsContent;
}

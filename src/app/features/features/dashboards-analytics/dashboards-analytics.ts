import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FeaturePage } from '../components/feature-page/feature-page';
import { DASHBOARDS_ANALYTICS_CONTENT } from './dashboards-analytics-content';

@Component({
  selector: 'app-dashboards-analytics',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FeaturePage],
  templateUrl: './dashboards-analytics.html',
  host: { class: 'block' },
})
export class DashboardsAnalytics {
  protected readonly content = DASHBOARDS_ANALYTICS_CONTENT;
}

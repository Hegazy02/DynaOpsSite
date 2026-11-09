import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { RouteOptimizationDashboardContent } from './route-optimization-dashboard.model';

// "Know what's happening" section: copy beside the route execution dashboard from xl, stacked and centred below.
@Component({
  selector: 'app-route-optimization-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './route-optimization-dashboard.html',
  host: { class: 'block' },
})
export class RouteOptimizationDashboard {
  readonly content = input.required<RouteOptimizationDashboardContent>();
}

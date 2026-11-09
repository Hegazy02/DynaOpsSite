import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FeaturePage } from '../components/feature-page/feature-page';
import { ROUTE_OPTIMIZATION_CONTENT } from './route-optimization-content';

@Component({
  selector: 'app-route-optimization',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FeaturePage],
  templateUrl: './route-optimization.html',
  host: { class: 'block' },
})
export class RouteOptimization {
  protected readonly content = ROUTE_OPTIMIZATION_CONTENT;
}

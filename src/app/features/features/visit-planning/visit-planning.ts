import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FeaturePage } from '../components/feature-page/feature-page';
import { VISIT_PLANNING_CONTENT } from './visit-planning-content';

@Component({
  selector: 'app-visit-planning',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FeaturePage],
  templateUrl: './visit-planning.html',
  host: { class: 'block' },
})
export class VisitPlanning {
  protected readonly content = VISIT_PLANNING_CONTENT;
}

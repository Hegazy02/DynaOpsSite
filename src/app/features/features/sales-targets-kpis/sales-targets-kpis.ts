import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FeaturePage } from '../components/feature-page/feature-page';
import { SALES_TARGETS_KPIS_CONTENT } from './sales-targets-kpis-content';

@Component({
  selector: 'app-sales-targets-kpis',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FeaturePage],
  templateUrl: './sales-targets-kpis.html',
  host: { class: 'block' },
})
export class SalesTargetsKpis {
  protected readonly content = SALES_TARGETS_KPIS_CONTENT;
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FeaturePage } from '../components/feature-page/feature-page';
import { GPS_TRACKING_CONTENT } from './gps-tracking-content';

@Component({
  selector: 'app-gps-tracking',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FeaturePage],
  templateUrl: './gps-tracking.html',
  host: { class: 'block' },
})
export class GpsTracking {
  protected readonly content = GPS_TRACKING_CONTENT;
}

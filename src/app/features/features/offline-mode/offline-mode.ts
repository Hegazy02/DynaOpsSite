import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FeaturePage } from '../components/feature-page/feature-page';
import { OFFLINE_MODE_CONTENT } from './offline-mode-content';

@Component({
  selector: 'app-offline-mode',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FeaturePage],
  templateUrl: './offline-mode.html',
  host: { class: 'block' },
})
export class OfflineMode {
  protected readonly content = OFFLINE_MODE_CONTENT;
}

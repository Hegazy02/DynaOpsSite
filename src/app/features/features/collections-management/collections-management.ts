import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FeaturePage } from '../components/feature-page/feature-page';
import { COLLECTIONS_MANAGEMENT_CONTENT } from './collections-management-content';

@Component({
  selector: 'app-collections-management',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FeaturePage],
  templateUrl: './collections-management.html',
  host: { class: 'block' },
})
export class CollectionsManagement {
  protected readonly content = COLLECTIONS_MANAGEMENT_CONTENT;
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FeaturePage } from '../components/feature-page/feature-page';
import { INVENTORY_VISIBILITY_CONTENT } from './inventory-visibility-content';

@Component({
  selector: 'app-inventory-visibility',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FeaturePage],
  templateUrl: './inventory-visibility.html',
  host: { class: 'block' },
})
export class InventoryVisibility {
  protected readonly content = INVENTORY_VISIBILITY_CONTENT;
}

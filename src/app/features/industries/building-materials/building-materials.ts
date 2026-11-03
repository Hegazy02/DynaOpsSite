import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IndustryPage } from '../components/industry-page/industry-page';
import { BUILDING_MATERIALS_CONTENT } from './building-materials-content';

@Component({
  selector: 'app-building-materials',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IndustryPage],
  templateUrl: './building-materials.html',
  host: { class: 'block' },
})
export class BuildingMaterials {
  protected readonly content = BUILDING_MATERIALS_CONTENT;
}

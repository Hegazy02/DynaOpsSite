import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IndustryPage } from '../components/industry-page/industry-page';
import { INDUSTRIAL_SUPPLIES_CONTENT } from './industrial-supplies-content';

@Component({
  selector: 'app-industrial-supplies',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IndustryPage],
  templateUrl: './industrial-supplies.html',
  host: { class: 'block' },
})
export class IndustrialSupplies {
  protected readonly content = INDUSTRIAL_SUPPLIES_CONTENT;
}

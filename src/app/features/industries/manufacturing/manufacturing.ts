import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IndustryPage } from '../components/industry-page/industry-page';
import { MANUFACTURING_CONTENT } from './manufacturing-content';

@Component({
  selector: 'app-manufacturing',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IndustryPage],
  templateUrl: './manufacturing.html',
  host: { class: 'block' },
})
export class Manufacturing {
  protected readonly content = MANUFACTURING_CONTENT;
}

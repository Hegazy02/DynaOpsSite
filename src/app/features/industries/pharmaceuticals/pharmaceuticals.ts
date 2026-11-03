import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IndustryPage } from '../components/industry-page/industry-page';
import { PHARMACEUTICALS_CONTENT } from './pharmaceuticals-content';

@Component({
  selector: 'app-pharmaceuticals',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IndustryPage],
  templateUrl: './pharmaceuticals.html',
  host: { class: 'block' },
})
export class Pharmaceuticals {
  protected readonly content = PHARMACEUTICALS_CONTENT;
}

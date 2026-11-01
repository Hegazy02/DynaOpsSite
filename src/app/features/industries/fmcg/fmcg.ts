import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IndustryPage } from '../components/industry-page/industry-page';
import { FMCG_CONTENT } from './fmcg-content';

@Component({
  selector: 'app-fmcg',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IndustryPage],
  templateUrl: './fmcg.html',
  host: { class: 'block' },
})
export class Fmcg {
  protected readonly content = FMCG_CONTENT;
}

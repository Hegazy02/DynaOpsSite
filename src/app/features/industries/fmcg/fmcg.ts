import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FmcgHero } from './components/fmcg-hero/fmcg-hero';
import { FMCG_CONTENT } from './fmcg-content';

@Component({
  selector: 'app-fmcg',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FmcgHero],
  templateUrl: './fmcg.html',
  host: { class: 'block' },
})
export class Fmcg {
  protected readonly content = FMCG_CONTENT;
}

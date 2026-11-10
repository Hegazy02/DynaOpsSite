import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FeaturePage } from '../components/feature-page/feature-page';
import { DYNAOPS_AI_CONTENT } from './dynaops365-ai-content';

@Component({
  selector: 'app-dynaops365-ai',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FeaturePage],
  templateUrl: './dynaops365-ai.html',
  host: { class: 'block' },
})
export class DynaopsAi {
  protected readonly content = DYNAOPS_AI_CONTENT;
}

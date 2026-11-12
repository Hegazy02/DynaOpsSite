import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { IntegrationStackContent } from './integration-stack.model';

// Hero artwork: the DynaOps, integration and Dynamics 365 tiers spread out, then label themselves one by one, on a loop.
@Component({
  selector: 'app-integration-stack',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  templateUrl: './integration-stack.html',
  styleUrl: './integration-stack.css',
  host: { class: 'block' },
})
export class IntegrationStack {
  readonly content = input.required<IntegrationStackContent>();
}

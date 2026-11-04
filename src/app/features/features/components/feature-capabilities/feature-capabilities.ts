import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';

import { FeatureCapabilityPanel } from '../feature-capability-panel/feature-capability-panel';
import type { FeatureCapabilitiesContent } from './feature-capabilities.model';

// "Everything your team needs" section: from xl a numbered list drives one artwork panel;
// below xl every capability is open with its own panel, as in the tablet and phone frames.
@Component({
  selector: 'app-feature-capabilities',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FeatureCapabilityPanel],
  templateUrl: './feature-capabilities.html',
  styleUrl: './feature-capabilities.css',
  host: { class: 'block' },
})
export class FeatureCapabilities {
  readonly content = input.required<FeatureCapabilitiesContent>();

  protected readonly active = signal(0);
  protected readonly images = computed(() => this.content().items.map((item) => item.image));

  protected select(index: number): void {
    this.active.set(index);
  }

  protected number(index: number): string {
    return String(index + 1).padStart(2, '0');
  }
}

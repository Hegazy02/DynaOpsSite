import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { INDUSTRIES_VISIBILITY_DEFAULTS } from './industries-visibility-content';
import type { IndustriesVisibilityImage } from './industries-visibility.model';

// Sales-manager visibility statement of the industry pages: copy beside the dashboard from xl, stacked below.
// `group`: hovering anywhere over the section glides the two cursors, as the Figma mouse-enter variant does.
@Component({
  selector: 'app-industries-visibility',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './industries-visibility.html',
  styleUrl: './industries-visibility.css',
  host: { class: 'group block' },
})
export class IndustriesVisibility {
  readonly title = input.required<string>();
  readonly paragraphs = input.required<string[]>();
  readonly image = input<IndustriesVisibilityImage>();

  protected readonly art = computed(() => this.image() ?? INDUSTRIES_VISIBILITY_DEFAULTS.image);
}

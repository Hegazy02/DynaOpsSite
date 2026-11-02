import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { INDUSTRIES_INTEGRATION_DEFAULTS } from './industries-integration-content';
import type { IndustriesIntegrationImage } from './industries-integration.model';

// ERP integration statement of the industry pages: artwork beside the copy from xl, stacked below.
// `group`: hovering anywhere over the section lifts the artwork tiles, as the Figma mouse-enter variant does.
@Component({
  selector: 'app-industries-integration',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './industries-integration.html',
  styleUrl: './industries-integration.css',
  host: {
    class:
      'group relative block overflow-hidden rounded-xl bg-linear-15/srgb from-transparent from-23% to-accent/10 to-77%',
  },
})
export class IndustriesIntegration {
  readonly title = input.required<string>();
  readonly paragraphs = input.required<string[]>();
  readonly allParagraphsOnTablet = input(false);
  readonly image = input<IndustriesIntegrationImage>(INDUSTRIES_INTEGRATION_DEFAULTS.image);
}

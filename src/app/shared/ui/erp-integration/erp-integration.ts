import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { ERP_INTEGRATION_DEFAULTS } from './erp-integration-content';
import type { ErpIntegrationImage, ErpIntegrationTextWidth } from './erp-integration.model';

// ERP integration statement of the industry and feature pages: artwork beside the copy from xl, stacked below.
// `group`: hovering anywhere over the section lifts the artwork tiles, as the Figma mouse-enter variant does.
@Component({
  selector: 'app-erp-integration',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './erp-integration.html',
  styleUrl: './erp-integration.css',
  host: {
    class:
      'group relative block overflow-hidden rounded-xl bg-linear-15/srgb from-transparent from-23% to-accent/10 to-77%',
  },
})
export class ErpIntegration {
  readonly title = input.required<string>();
  readonly paragraphs = input.required<string[]>();
  readonly allParagraphsOnTablet = input(false);
  readonly allParagraphsOnPhone = input(false);
  readonly spacedParagraphs = input(false);
  readonly textWidth = input<ErpIntegrationTextWidth>(497);
  readonly image = input<ErpIntegrationImage>(ERP_INTEGRATION_DEFAULTS.image);

  protected readonly textWidthClass = computed(() => TEXT_WIDTH[this.textWidth()]);

  // Full class names so Tailwind's scanner sees them; later paragraphs hide below the frame that keeps them.
  protected readonly paragraphClass = computed(() => {
    if (this.allParagraphsOnPhone()) return '';
    return this.allParagraphsOnTablet()
      ? 'hidden first:block md:block'
      : 'hidden first:block xl:block';
  });
}

const TEXT_WIDTH = { 497: 'xl:max-w-124.25', 512: 'xl:max-w-128' } as const;

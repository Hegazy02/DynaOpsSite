import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { FeatureCapabilityImage } from '../feature-capabilities/feature-capabilities.model';

// Artwork panel of the capabilities section: brand glow, three guide rings and the capability mocks.
// Every mock shares one grid cell so switching `active` cross-fades them, as the Figma variants smart-animate (300ms).
@Component({
  selector: 'app-feature-capability-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'relative grid place-items-center overflow-hidden rounded-lg bg-linear-to-t/srgb from-brand-500/30 to-transparent',
  },
  template: `
    <span
      aria-hidden="true"
      class="absolute inset-0 m-auto size-53.5 rounded-full border border-brand-100"
    ></span>
    <span
      aria-hidden="true"
      class="absolute inset-0 m-auto size-74 rounded-full border border-brand-100"
    ></span>
    <span
      aria-hidden="true"
      class="absolute inset-0 m-auto size-89.75 rounded-full border border-brand-100"
    ></span>
    @for (image of images(); track image.src; let index = $index) {
      <!-- The phone frame scales the mocks to 85% so they fit its 342px panel. -->
      <img
        [src]="image.src"
        alt=""
        loading="lazy"
        [width]="image.width"
        [height]="image.height"
        class="relative col-start-1 row-start-1 max-w-none transition-opacity duration-300 ease-out max-md:scale-85 motion-reduce:transition-none"
        [class.opacity-0]="index !== active()"
      />
    }
  `,
})
export class FeatureCapabilityPanel {
  readonly images = input.required<FeatureCapabilityImage[]>();
  readonly active = input(0);
}

import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

import type { CtaImagePosition } from './cta-container.model';

// From xl: where a positioned image sits in the frame, plus the content padding that keeps the copy clear of it.
const IMAGE_POSITIONS: Record<CtaImagePosition, { layer: string; content: string }> = {
  'top-start': { layer: 'xl:items-start xl:justify-start xl:pt-16', content: 'xl:ps-116' },
  'center-start': { layer: 'xl:items-center xl:justify-start', content: 'xl:ps-116' },
  'bottom-start': { layer: 'xl:items-end xl:justify-start', content: 'xl:ps-116' },
  'top-end': { layer: 'xl:items-start xl:justify-end xl:pt-16', content: 'xl:pe-116' },
  'center-end': { layer: 'xl:items-center xl:justify-end', content: 'xl:pe-116' },
  'bottom-end': { layer: 'xl:items-end xl:justify-end', content: 'xl:pe-116' },
};

// Rounded gradient frame for a call to action, built from three stacked layers: gradient, image,
// content. The image either covers the frame or sits at `imagePosition`, in front of or behind the gradient.
@Component({
  selector: 'app-cta-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'relative isolate flex flex-col overflow-hidden rounded-xl' },
  template: `
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 bg-linear-to-t/srgb from-brand-500/50 to-brand-500"
    ></div>

    @if (image(); as src) {
      <div aria-hidden="true" class="pointer-events-none" [class]="imageLayerClass()">
        <img
          [src]="src"
          alt=""
          [attr.width]="imageWidth()"
          [attr.height]="imageHeight()"
          [class]="imageCover() ? 'size-full object-cover opacity-80' : 'block w-full max-w-110'"
        />
      </div>
    }

    <div
      class="relative flex flex-col items-center gap-8 px-4 pt-8 text-center text-fg-inverse md:px-12 md:pt-16"
      [class]="contentClass()"
    >
      <ng-content />
    </div>
  `,
})
export class CtaContainer {
  readonly image = input<string>();
  readonly imageWidth = input<number>();
  readonly imageHeight = input<number>();
  // Fill the frame with the image instead of placing it at `imagePosition`.
  readonly imageCover = input(false, { transform: booleanAttribute });
  // Paint the gradient over the image rather than under it.
  readonly imageBehindGradient = input(false, { transform: booleanAttribute });
  readonly imagePosition = input<CtaImagePosition>('top-end');

  private readonly positioned = computed(() => !!this.image() && !this.imageCover());

  // A positioned image stacks under the copy up to lg; from xl it moves into the frame and is clipped by it.
  protected readonly imageLayerClass = computed(() => {
    const depth = this.imageBehindGradient() ? '-z-10' : '';
    if (this.imageCover()) {
      return `absolute inset-0 ${depth}`;
    }
    const { layer } = IMAGE_POSITIONS[this.imagePosition()];
    return `relative order-last flex justify-center px-4 md:px-12 xl:absolute xl:inset-0 xl:order-none ${layer} ${depth}`;
  });

  // The copy stays centred unless an image is positioned beside it from xl.
  protected readonly contentClass = computed(() =>
    this.positioned()
      ? `pb-8 xl:items-start xl:pb-16 xl:text-start ${IMAGE_POSITIONS[this.imagePosition()].content}`
      : 'pb-8 md:pb-16',
  );
}

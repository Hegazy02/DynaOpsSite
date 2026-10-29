import { booleanAttribute, ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { ButtonVariant, ButtonSize } from './button.model';

@Component({
  selector: 'button[appButton], a[appButton]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'btn group',
    '[class.btn-primary]': "variant() === 'primary'",
    '[class.btn-secondary]': "variant() === 'secondary'",
    '[class.btn-ghost]': "variant() === 'ghost'",
    '[class.btn-sm]': "size() === 'sm'",
    '[class.btn-md]': "size() === 'md'",
    '[class.btn-lg]': "size() === 'lg'",
    '[class.btn-icon]': 'iconOnly()',
  },
  template: `
    <ng-content />
    @if (icon(); as src) {
      <img
        [src]="src"
        alt=""
        [class.rtl:-scale-x-100]="directionalIcon()"
        [class.group-hover:hidden]="iconHover()"
        [class.group-active:hidden]="iconHover()"
      />
    }
    @if (iconHover(); as src) {
      <img
        [src]="src"
        alt=""
        class="hidden group-hover:block group-active:block"
        [class.rtl:-scale-x-100]="directionalIcon()"
      />
    }
  `,
})
export class Button {
  readonly variant = input<ButtonVariant>('primary');
  readonly size = input<ButtonSize>('md');
  readonly iconOnly = input(false, { transform: booleanAttribute });
  readonly icon = input<string>();
  // Shown while hovered or pressed; colour lives in the file, so this is a second file.
  readonly iconHover = input<string>();
  readonly directionalIcon = input(false, { transform: booleanAttribute });
}

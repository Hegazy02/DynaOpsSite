import { booleanAttribute, ChangeDetectionStrategy, Component, input } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'button[appButton], a[appButton]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'btn',
    '[class.btn-primary]': "variant() === 'primary'",
    '[class.btn-secondary]': "variant() === 'secondary'",
    '[class.btn-ghost]': "variant() === 'ghost'",
    '[class.btn-sm]': "size() === 'sm'",
    '[class.btn-md]': "size() === 'md'",
    '[class.btn-lg]': "size() === 'lg'",
    '[class.btn-icon]': 'iconOnly()',
  },
  template: '<ng-content />',
})
export class Button {
  readonly variant = input<ButtonVariant>('primary');
  readonly size = input<ButtonSize>('md');
  readonly iconOnly = input(false, { transform: booleanAttribute });
}

import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  input,
  output,
  TemplateRef,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import type { TabItem, TabPanelContext } from './tabs.model';

@Component({
  selector: 'app-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet, RouterLink, RouterLinkActive],
  host: { class: 'block' },
  template: `
    <ul
      role="list"
      class="flex"
      [class.flex-col]="vertical()"
      [class.gap-2]="vertical()"
      [class.items-center]="!vertical()"
    >
      @for (tab of tabs(); track tab.id) {
        <li [class]="vertical() ? 'border-b border-line pb-2 last:border-b-0 last:pb-0' : ''">
          @if (tab.expandable) {
            <button
              type="button"
              [class]="tabClass()"
              [class.text-fg-brand]="active() === tab.id"
              [attr.aria-expanded]="active() === tab.id"
              [attr.aria-controls]="'nav-panel-' + tab.id"
              (click)="toggle(tab)"
            >
              <span>{{ tab.label }}</span>
              <img
                [src]="active() === tab.id ? chevronBrand : chevron"
                alt=""
                class="transition-transform group-hover:hidden"
                [class]="vertical() ? 'size-6' : 'size-4'"
                [class.rotate-180]="active() === tab.id"
              />
              <img
                [src]="chevronBrand"
                alt=""
                class="hidden transition-transform group-hover:block"
                [class]="vertical() ? 'size-6' : 'size-4'"
                [class.rotate-180]="active() === tab.id"
              />
            </button>
            @if (vertical()) {
              @if (panel(); as tpl) {
                <div
                  [id]="'nav-panel-' + tab.id"
                  class="reveal"
                  [class.reveal-open]="active() === tab.id"
                  [attr.inert]="active() === tab.id ? null : ''"
                >
                  <div>
                    <ng-container
                      [ngTemplateOutlet]="tpl"
                      [ngTemplateOutletContext]="{ $implicit: tab }"
                    />
                  </div>
                </div>
              }
            }
          } @else {
            <a
              [routerLink]="tab.href"
              routerLinkActive="text-fg-brand"
              [class]="tabClass()"
              (click)="navigate.emit(tab)"
            >
              {{ tab.label }}
            </a>
          }
        </li>
      }
    </ul>
  `,
})
export class Tabs {
  readonly tabs = input.required<TabItem[]>();
  readonly orientation = input<'horizontal' | 'vertical'>('horizontal');
  // Controlled by the parent so the change can be wrapped in a view transition.
  readonly active = input<string | null>(null);
  readonly activeChange = output<string | null>();
  readonly navigate = output<TabItem>();

  protected readonly chevron = '/icons/shared/arrow-down-01-round.svg';
  protected readonly chevronBrand = '/icons/shared/arrow-down-01-round-brand.svg';

  protected readonly panel = contentChild<TemplateRef<TabPanelContext>>('panel');

  protected readonly vertical = computed(() => this.orientation() === 'vertical');

  protected readonly tabClass = computed(() =>
    this.vertical()
      ? 'group flex w-full cursor-pointer items-center justify-between gap-1 rounded-sm px-2 py-4 text-start text-body-lg transition-colors hover:text-fg-brand'
      : 'group inline-flex cursor-pointer items-center gap-1 rounded-sm p-2 text-label-md transition-colors hover:text-fg-brand',
  );

  protected toggle(tab: TabItem): void {
    this.activeChange.emit(this.active() === tab.id ? null : tab.id);
  }
}

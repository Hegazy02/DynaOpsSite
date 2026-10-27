import { NgTemplateOutlet } from '@angular/common';
import { booleanAttribute, ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Button } from '../button/button';

export interface MegaPanelItem {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  image?: string;
  href?: string;
  badge?: string;
  comingSoon?: boolean;
}

export interface MegaPanelLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-mega-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet, RouterLink, Button],
  host: { class: 'block' },
  template: `
    <div [class]="compact() ? '' : 'rounded-xl border border-line-subtle bg-surface p-3 shadow-sm'">
      <ul
        role="list"
        class="grid"
        [class.grid-cols-3]="!compact()"
        [class.gap-1]="gap() === 'sm'"
        [class.gap-3]="gap() === 'md'"
      >
        @for (item of items(); track item.id) {
          <li>
            <ng-container
              [ngTemplateOutlet]="row"
              [ngTemplateOutletContext]="{ $implicit: item }"
            />
          </li>
        }
      </ul>

      @if (featured() || viewAll()) {
        <div class="mt-1 grid items-center gap-1" [class.grid-cols-3]="!compact()">
          @if (featured(); as item) {
            <div [class.col-span-2]="!compact()">
              <ng-container
                [ngTemplateOutlet]="row"
                [ngTemplateOutletContext]="{ $implicit: item }"
              />
            </div>
          }
          @if (viewAll(); as link) {
            <a
              appButton
              variant="ghost"
              class="justify-self-end px-3"
              [class.col-start-3]="!compact()"
              [routerLink]="link.href"
              (click)="viewAllSelect.emit()"
            >
              {{ link.label }}
              <img
                src="/icons/shared/arrow-right-02.svg"
                alt=""
                class="size-4.5 rtl:-scale-x-100"
              />
            </a>
          }
        </div>
      }
    </div>

    <ng-template #row let-item>
      @if (item.href && !item.comingSoon) {
        <a
          [routerLink]="item.href"
          class="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-subtle"
          (click)="itemSelect.emit(item)"
        >
          <ng-container [ngTemplateOutlet]="body" [ngTemplateOutletContext]="{ $implicit: item }" />
        </a>
      } @else {
        <div
          class="flex items-center gap-3 rounded-lg p-2"
          [attr.aria-disabled]="item.comingSoon ? true : null"
        >
          <ng-container [ngTemplateOutlet]="body" [ngTemplateOutletContext]="{ $implicit: item }" />
        </div>
      }
    </ng-template>

    <ng-template #body let-item>
      @if (item.image) {
        <img [src]="item.image" alt="" width="34" height="34" class="size-8.5 shrink-0" />
      } @else if (item.icon) {
        <span
          class="flex size-8.5 shrink-0 items-center justify-center rounded-md border border-line-subtle bg-surface"
        >
          <img [src]="item.icon" alt="" width="20" height="20" class="size-5" />
        </span>
      }
      <span class="flex min-w-0 flex-col gap-1">
        <span class="text-label-md text-fg">
          {{ item.title }}
          @if (item.badge) {
            <span class="badge badge-warning ms-1 align-middle">{{ item.badge }}</span>
          }
        </span>
        @if (item.description) {
          <span class="text-caption text-fg-secondary">{{ item.description }}</span>
        }
      </span>
    </ng-template>
  `,
})
export class MegaPanel {
  readonly items = input.required<MegaPanelItem[]>();
  readonly featured = input<MegaPanelItem | null>(null);
  readonly viewAll = input<MegaPanelLink | null>(null);
  readonly gap = input<'sm' | 'md'>('sm');
  readonly compact = input(false, { transform: booleanAttribute });

  readonly itemSelect = output<MegaPanelItem>();
  readonly viewAllSelect = output<void>();
}

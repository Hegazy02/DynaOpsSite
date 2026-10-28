import {
  afterNextRender,
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  computed,
  DOCUMENT,
  ElementRef,
  inject,
  Injector,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { LanguageService } from '../../core/i18n/language';
import { Button } from '../../shared/ui/button/button';
import { MegaPanel } from '../../shared/ui/mega-panel/mega-panel';
import { Tabs } from '../../shared/ui/tabs/tabs';
import { HEADER_CONTENT } from './header-content';

type ViewTransitionDocument = Document & { startViewTransition?: (update: () => void) => unknown };

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Button, MegaPanel, Tabs],
  templateUrl: './header.html',
  host: {
    class: 'sticky top-0 z-40 block',
    '(document:keydown.escape)': 'closeAll()',
    '(document:click)': 'onDocumentClick($event)',
  },
})
export class Header {
  private readonly language = inject(LanguageService);
  private readonly injector = inject(Injector);
  private readonly appRef = inject(ApplicationRef);
  private readonly document = inject(DOCUMENT) as ViewTransitionDocument;
  // The close control hosts Button, so read the element rather than the component.
  private readonly closeButton = viewChild('closeButton', { read: ElementRef });

  protected readonly content = computed(() => HEADER_CONTENT[this.language.lang()]);

  protected readonly openPanel = signal<string | null>(null);
  protected readonly panel = computed(() => {
    const id = this.openPanel();
    return id === null ? null : (this.content().panels[id] ?? null);
  });

  protected readonly menuOpen = signal(false);
  protected readonly expanded = signal<string | null>(null);

  protected toggleLanguage(): void {
    this.language.toggle();
  }

  protected openMenu(): void {
    this.menuOpen.set(true);
    afterNextRender(() => this.closeButton()?.nativeElement.focus(), { injector: this.injector });
  }

  protected setPanel(id: string | null): void {
    this.animate(() => this.openPanel.set(id));
  }

  protected setExpanded(id: string | null): void {
    this.expanded.set(id);
  }

  protected closeAll(): void {
    this.animate(() => {
      this.openPanel.set(null);
      this.menuOpen.set(false);
      this.expanded.set(null);
    });
  }

  protected onDocumentClick(event: Event): void {
    const target = event.target as Element | null;
    const insidePanelOrTrigger = target?.closest('[aria-controls^="nav-panel-"], app-mega-panel');
    if (this.openPanel() !== null && !insidePanelOrTrigger) {
      this.setPanel(null);
    }
  }

  // Figma "Smart animate": elements with a view-transition-name morph between the two states.
  private animate(update: () => void): void {
    if (!this.document.startViewTransition) {
      update();
      return;
    }
    this.document.startViewTransition(() => {
      update();
      this.appRef.tick();
    });
  }
}

import { computed, DOCUMENT, effect, inject, Injectable, signal } from '@angular/core';

export type Lang = 'en' | 'ar';
export type Dir = 'ltr' | 'rtl';

// Owns <html lang dir>; tokens.css and the logical-property layout follow them.
@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);

  readonly lang = signal<Lang>(
    this.document.documentElement.getAttribute('lang') === 'ar' ? 'ar' : 'en',
  );
  readonly dir = computed<Dir>(() => (this.lang() === 'ar' ? 'rtl' : 'ltr'));
  readonly other = computed<Lang>(() => (this.lang() === 'ar' ? 'en' : 'ar'));

  constructor() {
    effect(() => {
      const html = this.document.documentElement;
      html.setAttribute('lang', this.lang());
      html.setAttribute('dir', this.dir());
    });
  }

  set(lang: Lang): void {
    this.lang.set(lang);
  }

  toggle(): void {
    this.lang.set(this.other());
  }
}

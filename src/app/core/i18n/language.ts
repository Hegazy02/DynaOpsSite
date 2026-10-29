import { Location } from '@angular/common';
import { computed, DOCUMENT, inject, Injectable, LOCALE_ID } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

import type { Lang, Dir } from './language.model';

export const LANGS: readonly Lang[] = ['en', 'ar'];
export const DEFAULT_LANG: Lang = 'en';

// Each build has one LOCALE_ID; anything Arabic ('ar', 'ar-SA') is the Arabic site.
export function langFromLocale(localeId: string): Lang {
  return localeId.startsWith('ar') ? 'ar' : 'en';
}

// Mirrors the i18n sub paths in angular.json: English at the root, Arabic under /ar.
export function localeUrl(path: string, lang: Lang): string {
  if (lang === DEFAULT_LANG) {
    return path;
  }
  return path === '/' ? `/${lang}` : `/${lang}${path}`;
}

// Each language is its own build, so the language is fixed and only the page path moves.
@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);

  readonly lang: Lang = langFromLocale(inject(LOCALE_ID));
  readonly dir: Dir = this.lang === 'ar' ? 'rtl' : 'ltr';
  readonly other: Lang = this.lang === 'ar' ? 'en' : 'ar';

  private readonly url = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.router.url),
    ),
    { initialValue: inject(Location).path() },
  );

  /** Current page path relative to the base href, without query or hash. */
  readonly path = computed(() => this.url().replace(/[?#].*$/, '') || '/');
  /** The current page in the other language, for the switcher link. */
  readonly alternateUrl = computed(() => localeUrl(this.path(), this.other));

  constructor() {
    const html = this.document.documentElement;
    html.setAttribute('lang', this.lang);
    html.setAttribute('dir', this.dir);
  }
}

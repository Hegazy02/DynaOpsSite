import { DOCUMENT, inject, Injectable } from '@angular/core';

import { DEFAULT_LANG, LANGS, localeUrl } from '../i18n/language';
import type { Lang } from '../i18n/language.model';
import { SITE_ORIGIN } from './site-config';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);

  /** Canonical plus one hreflang alternate per language (and x-default) for the current page. */
  setLocaleLinks(path: string, lang: Lang): void {
    const head = this.document.head;
    head
      .querySelectorAll('link[rel="canonical"], link[rel="alternate"][hreflang]')
      .forEach((el) => el.remove());
    this.addLink(head, { rel: 'canonical', href: SITE_ORIGIN + localeUrl(path, lang) });
    for (const l of LANGS) {
      this.addLink(head, { rel: 'alternate', hreflang: l, href: SITE_ORIGIN + localeUrl(path, l) });
    }
    this.addLink(head, {
      rel: 'alternate',
      hreflang: 'x-default',
      href: SITE_ORIGIN + localeUrl(path, DEFAULT_LANG),
    });
  }

  private addLink(head: HTMLHeadElement, attrs: Record<string, string>): void {
    const link = this.document.createElement('link');
    for (const [name, value] of Object.entries(attrs)) {
      link.setAttribute(name, value);
    }
    head.appendChild(link);
  }
}

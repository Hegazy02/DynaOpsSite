import { Location } from '@angular/common';
import { DOCUMENT, inject, Injectable, LOCALE_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { DEFAULT_LANG, LANGS, langFromLocale, localeUrl } from '../i18n/language';
import type { Lang } from '../i18n/language.model';
import type { PageSeo } from './seo.model';
import { SITE_CONFIG } from './site-config';

// Injected by the router's TitleStrategy, so it must not depend on Router or LanguageService.
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly location = inject(Location);
  private readonly lang = langFromLocale(inject(LOCALE_ID));

  /** Title, description and social tags for the current page; canonical and hreflang come from `setLocaleLinks`. */
  update(seo: PageSeo): void {
    const title = this.formatTitle(seo.title, seo.rawTitle);
    const url = this.absolute(localeUrl(this.currentPath(), this.lang));
    const image = this.absolute(seo.image ?? SITE_CONFIG.defaultImage);

    this.title.setTitle(title);
    this.setName('description', seo.description);
    this.setName('robots', seo.robots);

    this.setProperty('og:title', title);
    this.setProperty('og:description', seo.description);
    this.setProperty('og:url', url);
    this.setProperty('og:locale', SITE_CONFIG.ogLocale[this.lang]);
    this.setProperty('og:image', image);
    this.setName('twitter:title', title);
    this.setName('twitter:description', seo.description);
    this.setName('twitter:image', image);
    if (seo.image) {
      // The static size and alt in index.html describe the default image only.
      this.setProperty('og:image:alt', seo.imageAlt);
      this.meta.removeTag('property="og:image:width"');
      this.meta.removeTag('property="og:image:height"');
    }
  }

  /** Title only, for routes that declare just `title`. */
  setTitle(title: string, raw = false): void {
    this.title.setTitle(this.formatTitle(title, raw));
  }

  /** Canonical plus one hreflang alternate per language (and x-default) for the current page. */
  setLocaleLinks(path: string, lang: Lang): void {
    const head = this.document.head;
    head
      .querySelectorAll('link[rel="canonical"], link[rel="alternate"][hreflang]')
      .forEach((el) => el.remove());
    this.addLink(head, { rel: 'canonical', href: this.absolute(localeUrl(path, lang)) });
    for (const l of LANGS) {
      this.addLink(head, {
        rel: 'alternate',
        hreflang: l,
        href: this.absolute(localeUrl(path, l)),
      });
    }
    this.addLink(head, {
      rel: 'alternate',
      hreflang: 'x-default',
      href: this.absolute(localeUrl(path, DEFAULT_LANG)),
    });
  }

  private formatTitle(title: string, raw?: boolean): string {
    return raw ? title : `${title} | ${SITE_CONFIG.name}`;
  }

  private setName(name: string, content: string | undefined): void {
    if (content) {
      this.meta.updateTag({ name, content });
    } else {
      this.meta.removeTag(`name="${name}"`);
    }
  }

  private setProperty(property: string, content: string | undefined): void {
    if (content) {
      this.meta.updateTag({ property, content });
    } else {
      this.meta.removeTag(`property="${property}"`);
    }
  }

  // Path relative to the base href, without query or fragment.
  private currentPath(): string {
    return this.location.path().split(/[?#]/)[0] || '/';
  }

  private absolute(pathOrUrl: string): string {
    return /^https?:\/\//i.test(pathOrUrl) ? pathOrUrl : SITE_CONFIG.origin + pathOrUrl;
  }

  private addLink(head: HTMLHeadElement, attrs: Record<string, string>): void {
    const link = this.document.createElement('link');
    for (const [name, value] of Object.entries(attrs)) {
      link.setAttribute(name, value);
    }
    head.appendChild(link);
  }
}

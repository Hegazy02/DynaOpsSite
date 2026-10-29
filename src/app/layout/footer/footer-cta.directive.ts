import { DestroyRef, Directive, inject, TemplateRef } from '@angular/core';

import { FooterCtaService } from './footer-cta.service';

// Pages declare `<ng-template appFooterCta>…</ng-template>`; the footer renders it as-is and
// drops it when the page is destroyed.
@Directive({ selector: 'ng-template[appFooterCta]' })
export class FooterCta {
  private readonly service = inject(FooterCtaService);
  private readonly template = inject<TemplateRef<unknown>>(TemplateRef);

  constructor() {
    this.service.content.set(this.template);
    inject(DestroyRef).onDestroy(() => {
      if (this.service.content() === this.template) {
        this.service.content.set(null);
      }
    });
  }
}

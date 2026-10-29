import { Injectable, signal, TemplateRef } from '@angular/core';

// Carries the current page's CTA template to the footer, which lives outside the router outlet.
@Injectable({ providedIn: 'root' })
export class FooterCtaService {
  readonly content = signal<TemplateRef<unknown> | null>(null);
}

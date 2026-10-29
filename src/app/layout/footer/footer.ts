import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FOOTER_CONTENT } from './footer-content';
import { FooterCtaService } from './footer-cta.service';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet, RouterLink],
  templateUrl: './footer.html',
  host: { class: 'block' },
})
export class Footer {
  protected readonly content = FOOTER_CONTENT;
  protected readonly cta = inject(FooterCtaService).content;
  protected readonly copyright = FOOTER_CONTENT.copyright(new Date().getFullYear());
}

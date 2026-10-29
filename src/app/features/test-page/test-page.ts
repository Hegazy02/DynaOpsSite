import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { FooterCta } from '../../layout/footer/footer-cta.directive';
import { Button } from '../../shared/ui/button/button';
import { CtaContainer } from '../../shared/ui/cta-container/cta-container';

// Scratch page to preview the header and footer around real content; copy is not localized.
@Component({
  selector: 'app-test-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Button, FooterCta, CtaContainer],
  templateUrl: './test-page.html',
  host: { class: 'block' },
})
export class TestPage {
  // `/cover` previews the full-bleed CTA variant; `/` the positioned one.
  protected readonly cover = toSignal(
    inject(ActivatedRoute).data.pipe(map((data) => data['cta'] === 'cover')),
    { requireSync: true },
  );

  protected readonly cards = [
    {
      eyebrow: 'FIELD SALES',
      title: 'Visit planning',
      body: 'Daily plans, planned versus actual visits and route coverage in one view.',
    },
    {
      eyebrow: 'FINANCE',
      title: 'Collections',
      body: 'Cash, cheques and receipts posted straight into Dynamics 365 F&O.',
    },
    {
      eyebrow: 'INSIGHT',
      title: 'Dashboards',
      body: 'Sales, reps, routes and territory analytics without leaving the app.',
    },
  ];
}

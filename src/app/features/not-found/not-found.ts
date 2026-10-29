import { ChangeDetectionStrategy, Component, inject, RESPONSE_INIT } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Button } from '../../shared/ui/button/button';
import { NOT_FOUND_CONTENT } from './not-found-content';

@Component({
  selector: 'app-not-found',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Button],
  templateUrl: './not-found.html',
  host: { class: 'block' },
})
export class NotFound {
  protected readonly content = NOT_FOUND_CONTENT;

  constructor() {
    // Present on the server only; the browser has no response to set.
    const response = inject(RESPONSE_INIT, { optional: true });
    if (response) {
      response.status = 404;
    }
  }
}

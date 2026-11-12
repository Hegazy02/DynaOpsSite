import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { IntegrationErpContent } from './integration-erp.model';

// "One ERP" statement: copy beside the connection diagram from xl, diagram first below.
@Component({
  selector: 'app-integration-erp',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './integration-erp.html',
  host: {
    class:
      'block overflow-hidden rounded-xl bg-linear-15/srgb from-transparent from-23% to-accent/10 to-77%',
  },
})
export class IntegrationErp {
  readonly content = input.required<IntegrationErpContent>();
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FooterCta } from '../../layout/footer/footer-cta.directive';
import { Button } from '../../shared/ui/button/button';
import { CtaContainer } from '../../shared/ui/cta-container/cta-container';
import { IntegrationErp } from './components/integration-erp/integration-erp';
import { IntegrationFeatures } from './components/integration-features/integration-features';
import { IntegrationHero } from './components/integration-hero/integration-hero';
import { INTEGRATION_CONTENT } from './integration-content';

// Dynamics 365 F&O integration: animated hero, the ERP data reps use in the field, the one-ERP statement and the footer CTA.
@Component({
  selector: 'app-integration',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    IntegrationHero,
    IntegrationFeatures,
    IntegrationErp,
    FooterCta,
    CtaContainer,
    Button,
  ],
  templateUrl: './integration.html',
  // Figma stacks the sections 24 / 48 / 64px apart (phone / tablet / desktop), and as far again above the footer.
  host: { class: 'flex flex-col gap-6 pb-6 md:gap-12 md:pb-12 xl:gap-16 xl:pb-16' },
})
export class Integration {
  protected readonly content = INTEGRATION_CONTENT;
}

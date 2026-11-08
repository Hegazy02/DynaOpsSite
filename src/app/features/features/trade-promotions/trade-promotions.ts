import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FeaturePage } from '../components/feature-page/feature-page';
import { TRADE_PROMOTIONS_CONTENT } from './trade-promotions-content';

@Component({
  selector: 'app-trade-promotions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FeaturePage],
  templateUrl: './trade-promotions.html',
  host: { class: 'block' },
})
export class TradePromotions {
  protected readonly content = TRADE_PROMOTIONS_CONTENT;
}

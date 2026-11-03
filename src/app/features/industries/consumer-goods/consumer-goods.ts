import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IndustryPage } from '../components/industry-page/industry-page';
import { CONSUMER_GOODS_CONTENT } from './consumer-goods-content';

@Component({
  selector: 'app-consumer-goods',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IndustryPage],
  templateUrl: './consumer-goods.html',
  host: { class: 'block' },
})
export class ConsumerGoods {
  protected readonly content = CONSUMER_GOODS_CONTENT;
}

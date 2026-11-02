import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IndustryPage } from '../components/industry-page/industry-page';
import { FOOD_BEVERAGE_CONTENT } from './food-beverage-content';

@Component({
  selector: 'app-food-beverage',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IndustryPage],
  templateUrl: './food-beverage.html',
  host: { class: 'block' },
})
export class FoodBeverage {
  protected readonly content = FOOD_BEVERAGE_CONTENT;
}

import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { FeatureCardContent } from './feature-card.model';

@Component({
  selector: 'app-feature-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet, RouterLink],
  templateUrl: './feature-card.html',
  styleUrl: './feature-card.css',
  host: { class: 'block min-w-0' },
})
export class FeatureCard {
  readonly content = input.required<FeatureCardContent>();

  protected readonly cardClass =
    'card group h-full gap-6 p-2 transition duration-300 ease-out hover:border-line-brand hover:shadow-sm motion-reduce:transition-none';
}

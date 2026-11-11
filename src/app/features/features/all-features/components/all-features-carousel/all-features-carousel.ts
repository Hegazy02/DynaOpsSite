import { NgOptimizedImage } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  input,
  signal,
} from '@angular/core';

import type { AllFeaturesSlide } from './all-features-carousel.model';

// Figma: each slide holds 2.5s, then smart-animates to the next over 0.6s and loops.
const HOLD_MS = 2500;
const FADE_MS = 600;

@Component({
  selector: 'app-all-features-carousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  templateUrl: './all-features-carousel.html',
  host: {
    class: 'block',
    '(mouseenter)': 'paused.set(true)',
    '(mouseleave)': 'paused.set(false)',
    '(focusin)': 'paused.set(true)',
    '(focusout)': 'paused.set(false)',
  },
})
export class AllFeaturesCarousel {
  readonly slides = input.required<AllFeaturesSlide[]>();
  readonly label = input.required<string>();

  protected readonly active = signal(0);
  // Stays opaque under the incoming slide, so the page never shows through mid-fade.
  protected readonly previous = signal(-1);
  protected readonly paused = signal(false);

  private timer?: ReturnType<typeof setInterval>;

  constructor() {
    afterNextRender(() => {
      if (!matchMedia('(prefers-reduced-motion: reduce)').matches) this.startAutoplay();
    });
    inject(DestroyRef).onDestroy(() => clearInterval(this.timer));
  }

  // A dot click restarts the countdown, so autoplay never cuts the fade it just started.
  protected select(index: number): void {
    this.show(index);
    if (this.timer) this.startAutoplay();
  }

  private startAutoplay(): void {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      if (!this.paused()) this.show(this.active() + 1);
    }, HOLD_MS + FADE_MS);
  }

  // The transition lives only on the incoming slide and only on opacity, so z-index never animates.
  protected layerClass(index: number): string {
    if (index === this.active()) {
      return 'z-20 transition-opacity duration-600 ease-in-out motion-reduce:transition-none';
    }
    return index === this.previous() ? 'z-10' : 'opacity-0';
  }

  protected show(index: number): void {
    const next = index % this.slides().length;
    if (next === this.active()) return;
    this.previous.set(this.active());
    this.active.set(next);
  }
}

import { ChangeDetectionStrategy, Component, ElementRef, signal, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FooterCta } from '../../../layout/footer/footer-cta.directive';
import { Button } from '../../../shared/ui/button/button';
import { CtaContainer } from '../../../shared/ui/cta-container/cta-container';
import { ErpIntegration } from '../../../shared/ui/erp-integration/erp-integration';
import { ALL_FEATURES_CONTENT } from './all-features-content';
import { AllFeaturesGroup } from './components/all-features-group/all-features-group';
import { AllFeaturesHero } from './components/all-features-hero/all-features-hero';

// Overview of every feature: hero carousel, the grouped feature cards, ERP integration and the footer CTA.
@Component({
  selector: 'app-all-features',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    AllFeaturesHero,
    AllFeaturesGroup,
    ErpIntegration,
    FooterCta,
    CtaContainer,
    Button,
  ],
  templateUrl: './all-features.html',
  styleUrl: './all-features.css',
  // Figma stacks the sections 24 / 48 / 64px apart (phone / tablet / desktop), and as far again above the footer.
  host: { class: 'flex flex-col gap-6 pb-6 md:gap-12 md:pb-12 xl:gap-16 xl:pb-16' },
})
export class AllFeatures {
  protected readonly content = ALL_FEATURES_CONTENT;

  // One label per pair of cards, e.g. "Sales & Orders 2/3", in the window's scroll order.
  protected readonly rowLabels = this.content.catalog.groups.flatMap((group) => {
    const rows = Math.ceil(group.items.length / 2);
    return Array.from({ length: rows }, (_, i) => `${group.title} ${i + 1}/${rows}`);
  });
  protected readonly activeRow = signal(0);

  private readonly viewport = viewChild.required<ElementRef<HTMLElement>>('viewport');

  protected syncRow(): void {
    const { scrollTop } = this.viewport().nativeElement;
    const tops = this.rowTops();
    const nearest = tops.reduce(
      (best, top, i) => (Math.abs(top - scrollTop) < Math.abs(tops[best] - scrollTop) ? i : best),
      0,
    );
    this.activeRow.set(nearest);
  }

  protected goToRow(index: number): void {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.viewport().nativeElement.scrollTo({
      top: this.rowTops()[index],
      behavior: reduce ? 'auto' : 'smooth',
    });
  }

  // Scroll offset of each card row inside the window, read from the cards so it follows their real heights.
  private rowTops(): number[] {
    const viewport = this.viewport().nativeElement;
    const origin = viewport.getBoundingClientRect().top - viewport.scrollTop;
    const tops = [...viewport.querySelectorAll('app-feature-card')].map((card) =>
      Math.round(card.getBoundingClientRect().top - origin),
    );
    return [...new Set(tops)];
  }
}

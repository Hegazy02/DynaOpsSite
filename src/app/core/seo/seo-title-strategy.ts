import { inject, Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

import { SeoService } from './seo';
import type { RouteSeo } from './seo.model';

// Applies each route's `title` and `data.seo` on every navigation, including the server render.
@Injectable({ providedIn: 'root' })
export class SeoTitleStrategy extends TitleStrategy {
  private readonly seo = inject(SeoService);
  
//after every navigation, including the server render, the router calls its updateTitle method with the new route tree,
  override updateTitle(snapshot: RouterStateSnapshot): void {
    let route = snapshot.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const routeSeo = route.data['seo'] as RouteSeo | undefined;
    const title = this.buildTitle(snapshot);

    if (routeSeo) {
      this.seo.update({ ...routeSeo, title: routeSeo.title ?? title ?? '' });
    } else if (title) {
      this.seo.setTitle(title);
    }
  }
}

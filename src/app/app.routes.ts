import { Routes } from '@angular/router';

import type { RouteSeo } from './core/seo/seo.model';
import { FMCG_CONTENT } from './features/industries/fmcg/fmcg-content';
import { FOOD_BEVERAGE_CONTENT } from './features/industries/food-beverage/food-beverage-content';
import { NOT_FOUND_CONTENT } from './features/not-found/not-found-content';

// Pages are registered once; each language build serves them under its own base href.
// Every public page also needs a Prerender entry in app.routes.server.ts.
export const routes: Routes = [
  { path: '', redirectTo: 'industries/fmcg', pathMatch: 'full' },
  {
    path: 'industries/fmcg',
    loadComponent: () => import('./features/industries/fmcg/fmcg').then((m) => m.Fmcg),
    title: FMCG_CONTENT.title,
    data: { seo: { description: FMCG_CONTENT.description } satisfies RouteSeo },
  },
  {
    path: 'industries/food-beverage',
    loadComponent: () =>
      import('./features/industries/food-beverage/food-beverage').then((m) => m.FoodBeverage),
    title: FOOD_BEVERAGE_CONTENT.title,
    data: { seo: { description: FOOD_BEVERAGE_CONTENT.description } satisfies RouteSeo },
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFound),
    title: NOT_FOUND_CONTENT.title,
    data: {
      seo: { description: NOT_FOUND_CONTENT.description, robots: 'noindex' } satisfies RouteSeo,
    },
  },
];

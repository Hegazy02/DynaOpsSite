import { Routes } from '@angular/router';

import type { RouteSeo } from './core/seo/seo.model';
import { FMCG_CONTENT } from './features/industries/fmcg/fmcg-content';
import { FOOD_BEVERAGE_CONTENT } from './features/industries/food-beverage/food-beverage-content';
import { WHOLESALE_DISTRIBUTION_CONTENT } from './features/industries/wholesale-distribution/wholesale-distribution-content';
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
    path: 'industries/wholesale-distribution',
    loadComponent: () =>
      import('./features/industries/wholesale-distribution/wholesale-distribution').then(
        (m) => m.WholesaleDistribution,
      ),
    title: WHOLESALE_DISTRIBUTION_CONTENT.title,
    data: { seo: { description: WHOLESALE_DISTRIBUTION_CONTENT.description } satisfies RouteSeo },
  },
  // Static copy of NotFound for FTP hosting; the server rules in public/ serve it as the 404 page.
  {
    path: '404',
    loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFound),
    title: NOT_FOUND_CONTENT.title,
    data: {
      seo: { description: NOT_FOUND_CONTENT.description, robots: 'noindex' } satisfies RouteSeo,
    },
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

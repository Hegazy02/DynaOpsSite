import { Routes } from '@angular/router';

import type { RouteSeo } from './core/seo/seo.model';
import { FMCG_CONTENT } from './features/industries/fmcg/fmcg-content';
import { NOT_FOUND_CONTENT } from './features/not-found/not-found-content';

// Pages are registered once; each language build serves them under its own base href.
// Every public page also needs a Prerender entry in app.routes.server.ts.
export const routes: Routes = [
  // Temporary until a home page exists; SSR resolves it per locale base href.
  { path: '', redirectTo: 'industries/fmcg', pathMatch: 'full' },
  {
    path: 'industries/fmcg',
    loadComponent: () => import('./features/industries/fmcg/fmcg').then((m) => m.Fmcg),
    title: FMCG_CONTENT.title,
    data: { seo: { description: FMCG_CONTENT.description } satisfies RouteSeo },
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

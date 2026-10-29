import { Routes } from '@angular/router';

import { TestPage } from './features/test-page/test-page';

// Pages are registered once; each language build serves them under its own base href.
export const routes: Routes = [
  { path: '', component: TestPage, title: 'DynaOps365' },
  // Scratch preview of the full-bleed footer CTA.
  { path: 'cover', component: TestPage, title: 'DynaOps365', data: { cta: 'cover' } },
];

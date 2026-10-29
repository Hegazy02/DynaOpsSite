import { RenderMode, ServerRoute } from '@angular/ssr';

// Mirrors app.routes.ts: public pages are prerendered, anything else renders on request so
// NotFound can answer with a real 404.
export const serverRoutes: ServerRoute[] = [
  { path: 'industries/fmcg', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Server },
];

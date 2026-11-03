import { RenderMode, ServerRoute } from '@angular/ssr';

// Mirrors app.routes.ts: public pages are prerendered, anything else renders on request so
// NotFound can answer with a real 404. /404 is prerendered as the error page for static FTP hosting.
export const serverRoutes: ServerRoute[] = [
  { path: '404', renderMode: RenderMode.Prerender },
  { path: 'industries/fmcg', renderMode: RenderMode.Prerender },
  { path: 'industries/food-beverage', renderMode: RenderMode.Prerender },
  { path: 'industries/wholesale-distribution', renderMode: RenderMode.Prerender },
  { path: 'industries/retail-distribution', renderMode: RenderMode.Prerender },
  { path: 'industries/manufacturing', renderMode: RenderMode.Prerender },
  { path: 'industries/pharmaceuticals', renderMode: RenderMode.Prerender },
  { path: 'industries/consumer-goods', renderMode: RenderMode.Prerender },
  { path: 'industries/building-materials', renderMode: RenderMode.Prerender },
  { path: 'industries/industrial-supplies', renderMode: RenderMode.Prerender },
  { path: 'features/customer-management', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Server },
];

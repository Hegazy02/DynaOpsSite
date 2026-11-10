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
  { path: 'features/workflow-approvals', renderMode: RenderMode.Prerender },
  { path: 'features/gps-tracking', renderMode: RenderMode.Prerender },
  { path: 'features/trade-promotions', renderMode: RenderMode.Prerender },
  { path: 'features/sales-order-management', renderMode: RenderMode.Prerender },
  { path: 'features/route-optimization', renderMode: RenderMode.Prerender },
  { path: 'features/inventory-visibility', renderMode: RenderMode.Prerender },
  { path: 'features/sales-targets-kpis', renderMode: RenderMode.Prerender },
  { path: 'features/collections-management', renderMode: RenderMode.Prerender },
  { path: 'features/crm-activity-management', renderMode: RenderMode.Prerender },
  { path: 'features/visit-planning', renderMode: RenderMode.Prerender },
  { path: 'features/van-sales', renderMode: RenderMode.Prerender },
  { path: 'features/dashboards-analytics', renderMode: RenderMode.Prerender },
  { path: 'features/offline-mode', renderMode: RenderMode.Prerender },
  { path: 'features/dynaops365-ai', renderMode: RenderMode.Prerender },
  { path: 'features/commission-management', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Server },
];

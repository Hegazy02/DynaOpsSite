import { Routes } from '@angular/router';

import type { RouteSeo } from './core/seo/seo.model';
import { CUSTOMER_MANAGEMENT_CONTENT } from './features/features/customer-management/customer-management-content';
import { GPS_TRACKING_CONTENT } from './features/features/gps-tracking/gps-tracking-content';
import { TRADE_PROMOTIONS_CONTENT } from './features/features/trade-promotions/trade-promotions-content';
import { WORKFLOW_APPROVALS_CONTENT } from './features/features/workflow-approvals/workflow-approvals-content';
import { BUILDING_MATERIALS_CONTENT } from './features/industries/building-materials/building-materials-content';
import { CONSUMER_GOODS_CONTENT } from './features/industries/consumer-goods/consumer-goods-content';
import { INDUSTRIAL_SUPPLIES_CONTENT } from './features/industries/industrial-supplies/industrial-supplies-content';
import { FMCG_CONTENT } from './features/industries/fmcg/fmcg-content';
import { FOOD_BEVERAGE_CONTENT } from './features/industries/food-beverage/food-beverage-content';
import { MANUFACTURING_CONTENT } from './features/industries/manufacturing/manufacturing-content';
import { PHARMACEUTICALS_CONTENT } from './features/industries/pharmaceuticals/pharmaceuticals-content';
import { RETAIL_DISTRIBUTION_CONTENT } from './features/industries/retail-distribution/retail-distribution-content';
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
  {
    path: 'industries/retail-distribution',
    loadComponent: () =>
      import('./features/industries/retail-distribution/retail-distribution').then(
        (m) => m.RetailDistribution,
      ),
    title: RETAIL_DISTRIBUTION_CONTENT.title,
    data: { seo: { description: RETAIL_DISTRIBUTION_CONTENT.description } satisfies RouteSeo },
  },
  {
    path: 'industries/manufacturing',
    loadComponent: () =>
      import('./features/industries/manufacturing/manufacturing').then((m) => m.Manufacturing),
    title: MANUFACTURING_CONTENT.title,
    data: { seo: { description: MANUFACTURING_CONTENT.description } satisfies RouteSeo },
  },
  {
    path: 'industries/pharmaceuticals',
    loadComponent: () =>
      import('./features/industries/pharmaceuticals/pharmaceuticals').then(
        (m) => m.Pharmaceuticals,
      ),
    title: PHARMACEUTICALS_CONTENT.title,
    data: { seo: { description: PHARMACEUTICALS_CONTENT.description } satisfies RouteSeo },
  },
  {
    path: 'industries/consumer-goods',
    loadComponent: () =>
      import('./features/industries/consumer-goods/consumer-goods').then((m) => m.ConsumerGoods),
    title: CONSUMER_GOODS_CONTENT.title,
    data: { seo: { description: CONSUMER_GOODS_CONTENT.description } satisfies RouteSeo },
  },
  {
    path: 'industries/building-materials',
    loadComponent: () =>
      import('./features/industries/building-materials/building-materials').then(
        (m) => m.BuildingMaterials,
      ),
    title: BUILDING_MATERIALS_CONTENT.title,
    data: { seo: { description: BUILDING_MATERIALS_CONTENT.description } satisfies RouteSeo },
  },
  {
    path: 'industries/industrial-supplies',
    loadComponent: () =>
      import('./features/industries/industrial-supplies/industrial-supplies').then(
        (m) => m.IndustrialSupplies,
      ),
    title: INDUSTRIAL_SUPPLIES_CONTENT.title,
    data: { seo: { description: INDUSTRIAL_SUPPLIES_CONTENT.description } satisfies RouteSeo },
  },
  {
    path: 'features/customer-management',
    loadComponent: () =>
      import('./features/features/customer-management/customer-management').then(
        (m) => m.CustomerManagement,
      ),
    title: CUSTOMER_MANAGEMENT_CONTENT.title,
    data: { seo: { description: CUSTOMER_MANAGEMENT_CONTENT.description } satisfies RouteSeo },
  },
  {
    path: 'features/workflow-approvals',
    loadComponent: () =>
      import('./features/features/workflow-approvals/workflow-approvals').then(
        (m) => m.WorkflowApprovals,
      ),
    title: WORKFLOW_APPROVALS_CONTENT.title,
    data: { seo: { description: WORKFLOW_APPROVALS_CONTENT.description } satisfies RouteSeo },
  },
  {
    path: 'features/gps-tracking',
    loadComponent: () =>
      import('./features/features/gps-tracking/gps-tracking').then((m) => m.GpsTracking),
    title: GPS_TRACKING_CONTENT.title,
    data: { seo: { description: GPS_TRACKING_CONTENT.description } satisfies RouteSeo },
  },
  {
    path: 'features/trade-promotions',
    loadComponent: () =>
      import('./features/features/trade-promotions/trade-promotions').then(
        (m) => m.TradePromotions,
      ),
    title: TRADE_PROMOTIONS_CONTENT.title,
    data: { seo: { description: TRADE_PROMOTIONS_CONTENT.description } satisfies RouteSeo },
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

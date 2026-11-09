import { Routes } from '@angular/router';

import type { RouteSeo } from './core/seo/seo.model';
import { COLLECTIONS_MANAGEMENT_SEO } from './features/features/collections-management/collections-management-seo';
import { CRM_ACTIVITY_MANAGEMENT_SEO } from './features/features/crm-activity-management/crm-activity-management-seo';
import { CUSTOMER_MANAGEMENT_SEO } from './features/features/customer-management/customer-management-seo';
import { GPS_TRACKING_SEO } from './features/features/gps-tracking/gps-tracking-seo';
import { INVENTORY_VISIBILITY_SEO } from './features/features/inventory-visibility/inventory-visibility-seo';
import { ROUTE_OPTIMIZATION_SEO } from './features/features/route-optimization/route-optimization-seo';
import { SALES_TARGETS_KPIS_SEO } from './features/features/sales-targets-kpis/sales-targets-kpis-seo';
import { SALES_ORDER_MANAGEMENT_SEO } from './features/features/sales-order-management/sales-order-management-seo';
import { TRADE_PROMOTIONS_SEO } from './features/features/trade-promotions/trade-promotions-seo';
import { WORKFLOW_APPROVALS_SEO } from './features/features/workflow-approvals/workflow-approvals-seo';
import { BUILDING_MATERIALS_SEO } from './features/industries/building-materials/building-materials-seo';
import { CONSUMER_GOODS_SEO } from './features/industries/consumer-goods/consumer-goods-seo';
import { INDUSTRIAL_SUPPLIES_SEO } from './features/industries/industrial-supplies/industrial-supplies-seo';
import { FMCG_SEO } from './features/industries/fmcg/fmcg-seo';
import { FOOD_BEVERAGE_SEO } from './features/industries/food-beverage/food-beverage-seo';
import { MANUFACTURING_SEO } from './features/industries/manufacturing/manufacturing-seo';
import { PHARMACEUTICALS_SEO } from './features/industries/pharmaceuticals/pharmaceuticals-seo';
import { RETAIL_DISTRIBUTION_SEO } from './features/industries/retail-distribution/retail-distribution-seo';
import { WHOLESALE_DISTRIBUTION_SEO } from './features/industries/wholesale-distribution/wholesale-distribution-seo';
import { NOT_FOUND_CONTENT } from './features/not-found/not-found-content';

// Pages are registered once; each language build serves them under its own base href.
// Every public page also needs a Prerender entry in app.routes.server.ts.
export const routes: Routes = [
  { path: '', redirectTo: 'industries/fmcg', pathMatch: 'full' },
  {
    path: 'industries/fmcg',
    loadComponent: () => import('./features/industries/fmcg/fmcg').then((m) => m.Fmcg),
    title: FMCG_SEO.title,
    data: { seo: { description: FMCG_SEO.description } satisfies RouteSeo },
  },
  {
    path: 'industries/food-beverage',
    loadComponent: () =>
      import('./features/industries/food-beverage/food-beverage').then((m) => m.FoodBeverage),
    title: FOOD_BEVERAGE_SEO.title,
    data: { seo: { description: FOOD_BEVERAGE_SEO.description } satisfies RouteSeo },
  },
  {
    path: 'industries/wholesale-distribution',
    loadComponent: () =>
      import('./features/industries/wholesale-distribution/wholesale-distribution').then(
        (m) => m.WholesaleDistribution,
      ),
    title: WHOLESALE_DISTRIBUTION_SEO.title,
    data: { seo: { description: WHOLESALE_DISTRIBUTION_SEO.description } satisfies RouteSeo },
  },
  {
    path: 'industries/retail-distribution',
    loadComponent: () =>
      import('./features/industries/retail-distribution/retail-distribution').then(
        (m) => m.RetailDistribution,
      ),
    title: RETAIL_DISTRIBUTION_SEO.title,
    data: { seo: { description: RETAIL_DISTRIBUTION_SEO.description } satisfies RouteSeo },
  },
  {
    path: 'industries/manufacturing',
    loadComponent: () =>
      import('./features/industries/manufacturing/manufacturing').then((m) => m.Manufacturing),
    title: MANUFACTURING_SEO.title,
    data: { seo: { description: MANUFACTURING_SEO.description } satisfies RouteSeo },
  },
  {
    path: 'industries/pharmaceuticals',
    loadComponent: () =>
      import('./features/industries/pharmaceuticals/pharmaceuticals').then(
        (m) => m.Pharmaceuticals,
      ),
    title: PHARMACEUTICALS_SEO.title,
    data: { seo: { description: PHARMACEUTICALS_SEO.description } satisfies RouteSeo },
  },
  {
    path: 'industries/consumer-goods',
    loadComponent: () =>
      import('./features/industries/consumer-goods/consumer-goods').then((m) => m.ConsumerGoods),
    title: CONSUMER_GOODS_SEO.title,
    data: { seo: { description: CONSUMER_GOODS_SEO.description } satisfies RouteSeo },
  },
  {
    path: 'industries/building-materials',
    loadComponent: () =>
      import('./features/industries/building-materials/building-materials').then(
        (m) => m.BuildingMaterials,
      ),
    title: BUILDING_MATERIALS_SEO.title,
    data: { seo: { description: BUILDING_MATERIALS_SEO.description } satisfies RouteSeo },
  },
  {
    path: 'industries/industrial-supplies',
    loadComponent: () =>
      import('./features/industries/industrial-supplies/industrial-supplies').then(
        (m) => m.IndustrialSupplies,
      ),
    title: INDUSTRIAL_SUPPLIES_SEO.title,
    data: { seo: { description: INDUSTRIAL_SUPPLIES_SEO.description } satisfies RouteSeo },
  },
  {
    path: 'features/customer-management',
    loadComponent: () =>
      import('./features/features/customer-management/customer-management').then(
        (m) => m.CustomerManagement,
      ),
    title: CUSTOMER_MANAGEMENT_SEO.title,
    data: { seo: { description: CUSTOMER_MANAGEMENT_SEO.description } satisfies RouteSeo },
  },
  {
    path: 'features/workflow-approvals',
    loadComponent: () =>
      import('./features/features/workflow-approvals/workflow-approvals').then(
        (m) => m.WorkflowApprovals,
      ),
    title: WORKFLOW_APPROVALS_SEO.title,
    data: { seo: { description: WORKFLOW_APPROVALS_SEO.description } satisfies RouteSeo },
  },
  {
    path: 'features/gps-tracking',
    loadComponent: () =>
      import('./features/features/gps-tracking/gps-tracking').then((m) => m.GpsTracking),
    title: GPS_TRACKING_SEO.title,
    data: { seo: { description: GPS_TRACKING_SEO.description } satisfies RouteSeo },
  },
  {
    path: 'features/trade-promotions',
    loadComponent: () =>
      import('./features/features/trade-promotions/trade-promotions').then(
        (m) => m.TradePromotions,
      ),
    title: TRADE_PROMOTIONS_SEO.title,
    data: { seo: { description: TRADE_PROMOTIONS_SEO.description } satisfies RouteSeo },
  },
  {
    path: 'features/sales-order-management',
    loadComponent: () =>
      import('./features/features/sales-order-management/sales-order-management').then(
        (m) => m.SalesOrderManagement,
      ),
    title: SALES_ORDER_MANAGEMENT_SEO.title,
    data: { seo: { description: SALES_ORDER_MANAGEMENT_SEO.description } satisfies RouteSeo },
  },
  {
    path: 'features/route-optimization',
    loadComponent: () =>
      import('./features/features/route-optimization/route-optimization').then(
        (m) => m.RouteOptimization,
      ),
    title: ROUTE_OPTIMIZATION_SEO.title,
    data: { seo: { description: ROUTE_OPTIMIZATION_SEO.description } satisfies RouteSeo },
  },
  {
    path: 'features/inventory-visibility',
    loadComponent: () =>
      import('./features/features/inventory-visibility/inventory-visibility').then(
        (m) => m.InventoryVisibility,
      ),
    title: INVENTORY_VISIBILITY_SEO.title,
    data: { seo: { description: INVENTORY_VISIBILITY_SEO.description } satisfies RouteSeo },
  },
  {
    path: 'features/sales-targets-kpis',
    loadComponent: () =>
      import('./features/features/sales-targets-kpis/sales-targets-kpis').then(
        (m) => m.SalesTargetsKpis,
      ),
    title: SALES_TARGETS_KPIS_SEO.title,
    data: { seo: { description: SALES_TARGETS_KPIS_SEO.description } satisfies RouteSeo },
  },
  {
    path: 'features/collections-management',
    loadComponent: () =>
      import('./features/features/collections-management/collections-management').then(
        (m) => m.CollectionsManagement,
      ),
    title: COLLECTIONS_MANAGEMENT_SEO.title,
    data: { seo: { description: COLLECTIONS_MANAGEMENT_SEO.description } satisfies RouteSeo },
  },
  {
    path: 'features/crm-activity-management',
    loadComponent: () =>
      import('./features/features/crm-activity-management/crm-activity-management').then(
        (m) => m.CrmActivityManagement,
      ),
    title: CRM_ACTIVITY_MANAGEMENT_SEO.title,
    data: { seo: { description: CRM_ACTIVITY_MANAGEMENT_SEO.description } satisfies RouteSeo },
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

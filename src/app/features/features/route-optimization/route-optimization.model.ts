import type { FeaturePageContent } from '../components/feature-page/feature-page.model';
import type { RouteOptimizationDashboardContent } from './components/route-optimization-dashboard/route-optimization-dashboard.model';

export interface RouteOptimizationContent extends FeaturePageContent {
  dashboard: RouteOptimizationDashboardContent;
}

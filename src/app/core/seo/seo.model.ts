export interface PageSeo {
  title: string;
  description: string;
  // Site-relative path or absolute URL; falls back to the site default.
  image?: string;
  imageAlt?: string;
  // e.g. 'noindex'. Omit for indexable pages.
  robots?: string;
  // Use the title as given instead of appending the site name.
  rawTitle?: boolean;
}

// Shape of a route's `data.seo`; the title may come from the route's own `title`.
export type RouteSeo = Omit<PageSeo, 'title'> & { title?: string };

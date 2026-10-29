import type { NotFoundContent } from './not-found.model';

// Copy is English here; src/locale/ar/not-found.json carries the Arabic under the same ids.
export const NOT_FOUND_CONTENT: NotFoundContent = {
  title: $localize`:@@not-found.title:Page not found`,
  description: $localize`:@@not-found.description:The page you were looking for does not exist or has moved.`,
  eyebrow: $localize`:@@not-found.eyebrow:ERROR 404`,
  home: $localize`:@@not-found.home:Go to the home page`,
};

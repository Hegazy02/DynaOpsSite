import type { IndustriesVisibilityDefaults } from './industries-visibility.model';

// The dashboard labels and cursor names are translated, so each language has its own folder.
const dir = $localize`:@@industries.visibility.imageDir:/images/industries/visibility`;

export const INDUSTRIES_VISIBILITY_DEFAULTS: IndustriesVisibilityDefaults = {
  image: {
    dashboard: `${dir}/dashboard.webp`,
    cursorLeft: `${dir}/cursor-left.svg`,
    cursorRight: `${dir}/cursor-right.svg`,
    alt: $localize`:@@industries.visibility.imageAlt:DynaOps field execution dashboard with planned versus visited customers and visits by representative`,
    width: 828,
    height: 682,
    // Export bounds include the dashboard shadow.
    placement: { left: 8.83, top: 7.43, width: 82.77 },
  },
};

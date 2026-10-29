import { HEADER_CONTENT } from '../../../layout/header/header-content';
import type { FmcgHeroContent } from './components/fmcg-hero/fmcg-hero.model';
import type { FmcgContent } from './fmcg.model';

// Copy is English here; src/locale/ar/industries.json carries the Arabic under the same ids.
const HERO: FmcgHeroContent = {
  title: $localize`:@@fmcg.hero.title:Connect your FMCG field sales team with Microsoft Dynamics 365 F&O`,
  description: $localize`:@@fmcg.hero.description:DynaOps SFA helps FMCG companies manage field sales, customer visits, orders, collections, van sales, promotions, and routes while staying connected with`,
  emphasis: $localize`:@@fmcg.hero.emphasis:Microsoft Dynamics 365 Finance & Operations.`,
  image: {
    src: '/images/industries/fmcg-hero.svg',
    alt: $localize`:@@fmcg.hero.imageAlt:A sales representative checking orders beside a loaded delivery van`,
    width: 440,
    height: 350,
  },
  cta: HEADER_CONTENT.cta,
};

export const FMCG_CONTENT: FmcgContent = {
  title: $localize`:@@fmcg.title:FMCG Field Sales`,
  // Reuses the hero paragraph until the page gets dedicated search copy.
  description: `${HERO.description} ${HERO.emphasis}`,
  hero: HERO,
};

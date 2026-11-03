import type { ErpIntegrationDefaults } from './erp-integration.model';

// The label inside the artwork is translated and the composition mirrored, so each language has its own folder.
const dir = $localize`:@@industries.integration.imageDir:/images/industries/erp-integration`;

export const ERP_INTEGRATION_DEFAULTS: ErpIntegrationDefaults = {
  image: {
    base: `${dir}/base.svg`,
    tileMiddle: `${dir}/tile-middle.svg`,
    tileTop: `${dir}/tile-top.svg`,
    tileTopFace: `${dir}/tile-top-face.svg`,
    alt: $localize`:@@industries.integration.imageAlt:Field sales operation tiles linked to Microsoft Dynamics 365 and DynaOps`,
    width: 500,
    height: 343,
  },
};

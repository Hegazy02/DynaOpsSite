import type { MegaPanelItem } from '../../shared/ui/mega-panel/mega-panel.model';
import { HEADER_CONTENT } from '../header/header-content';
import type { FooterLink, FooterContent } from './footer.model';

// Public contact points. The phone and WhatsApp icons appear once a number (E.164) is set.
const CONTACT = {
  linkedin: 'https://www.linkedin.com/company/dyna-system/',
  email: 'dyna@dyna-systems.com',
  phone: '022',
  whatsapp: '022',
};

function pick(items: MegaPanelItem[], ids: readonly string[]): FooterLink[] {
  return ids.flatMap((id) => {
    const item = items.find((candidate) => candidate.id === id);
    return item?.href ? [{ label: item.title, href: item.href }] : [];
  });
}

function tab(id: string): FooterLink {
  const item = HEADER_CONTENT.tabs.find((candidate) => candidate.id === id);
  return { label: item?.label ?? id, href: item?.href ?? `/${id}` };
}

const FEATURES = HEADER_CONTENT.panels['features'].items;
const INDUSTRIES = HEADER_CONTENT.panels['industries'].items;

// Labels and routes come from the header so the two menus cannot drift apart.
export const FOOTER_CONTENT: FooterContent = {
  logoAlt: HEADER_CONTENT.logoAlt,
  columns: {
    features: {
      title: tab('features').label,
      lists: [
        pick(FEATURES, [
          'customer-management',
          'workflow-approvals',
          'gps-tracking',
          'commission-management',
          'sales-order-management',
          'route-optimization',
          'inventory-visibility',
        ]),
        pick(FEATURES, [
          'sales-targets-kpis',
          'collections-management',
          'crm-activity-management',
          'offline-mode',
          'visit-planning',
          'dashboards-analytics',
        ]),
      ],
    },
    industries: {
      title: tab('industries').label,
      lists: [
        pick(INDUSTRIES, [
          'fmcg',
          'food-beverage',
          'wholesale-distribution',
          'retail-distribution',
          'manufacturing',
          'pharmaceuticals',
          'consumer-goods',
          'building-materials',
          'industrial-supplies',
        ]),
      ],
    },
    company: {
      title: $localize`:@@footer.company:Company`,
      lists: [
        [
          tab('integration'),
          tab('about'),
          tab('blog'),
          { label: $localize`:@@footer.contact:Contact us`, href: '/contact' },
        ],
      ],
    },
  },
  social: [
    {
      id: 'linkedin',
      icon: '/icons/shared/linkedin-01-brand.svg',
      label: $localize`:@@footer.social.linkedin:LinkedIn`,
      href: CONTACT.linkedin,
      external: true,
    },
    {
      id: 'email',
      icon: '/icons/shared/mail-01-brand.svg',
      label: $localize`:@@footer.social.email:Email`,
      href: `mailto:${CONTACT.email}`,
    },
    {
      id: 'whatsapp',
      icon: '/icons/shared/whatsapp-brand.svg',
      label: $localize`:@@footer.social.whatsapp:WhatsApp`,
      href: CONTACT.phone && `https://wa.me/${CONTACT.phone.replace(/\D/g, '')}`,
      external: true,
    },
    {
      id: 'phone',
      icon: '/icons/shared/call-02-brand.svg',
      label: $localize`:@@footer.social.phone:Call us`,
      href: CONTACT.phone && `tel:${CONTACT.phone}`,
    },
  ].filter((item) => item.href),
  tagline: $localize`:@@footer.tagline:Dynamics 365 Ops, In your hands`,
  copyright: (year) =>
    $localize`:@@footer.copyright:© ${year}:year: DynaOps365. All rights reserved.`,
};

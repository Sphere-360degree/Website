/**
 * SPHERIONIX — Global Site Configuration & Metadata
 * Single source of truth for SEO, canonical URLs, contact info, and branding.
 */
export const siteConfig = {
  name: 'SPHERIONIX',
  legalName: 'SPHERIONIX LLC',
  url: 'https://www.spherionix.com',
  domain: 'spherionix.com',
  tagline: 'Practical AI, Automation & Business Process Consulting',
  description:
    'Spherionix helps small and mid-sized businesses solve operational bottlenecks with practical AI, simple automation, and clear standard operating procedures. Problem first, technology second.',
  ogImage: 'https://www.spherionix.com/spherionix-logo-dark.svg',
  
  themeColor: '#171717',
  accentColor: '#c2410c',
  
  contact: {
    email: 'info@spherionix.com',
    phone: '+1 (800) 555-SPHERO',
    hours: 'Monday – Friday, 9:00 AM – 6:00 PM EST',
    address: {
      streetAddress: 'Corporate Advisory Services',
      addressLocality: 'Remote & Global Client Delivery',
      addressRegion: 'US',
      postalCode: '10001',
      addressCountry: 'US',
    }
  },

  social: {
    linkedin: 'https://www.linkedin.com/company/spherionix',
    twitter: 'https://twitter.com/spherionix',
    github: 'https://github.com/spherionix',
  },

  navLinks: [
    { label: 'Diagnostic', href: '#assessment' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Process', href: '#how-it-works' },
    { label: 'Philosophy', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

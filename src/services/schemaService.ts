import { siteConfig } from '../config/siteConfig';
import { faqData } from '../data/faqData';
import { allServices } from '../data/servicesData';

/**
 * SchemaService
 * Generates valid Schema.org JSON-LD objects for Google rich snippets.
 */
export class SchemaService {
  /**
   * Organization Schema
   */
  public static getOrganizationSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.legalName,
      alternateName: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/spherionix-logo-dark.svg`,
      description: siteConfig.description,
      email: siteConfig.contact.email,
      telephone: siteConfig.contact.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteConfig.contact.address.addressLocality,
        addressRegion: siteConfig.contact.address.addressRegion,
        postalCode: siteConfig.contact.address.postalCode,
        addressCountry: siteConfig.contact.address.addressCountry,
      },
      sameAs: [
        siteConfig.social.linkedin,
        siteConfig.social.twitter,
        siteConfig.social.github,
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: siteConfig.contact.phone,
        contactType: 'customer support',
        email: siteConfig.contact.email,
        availableLanguage: 'English',
      },
    };
  }

  /**
   * WebSite Schema
   */
  public static getWebSiteSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.tagline,
      publisher: {
        '@id': `${siteConfig.url}/#organization`,
      },
      inLanguage: 'en-US',
    };
  }

  /**
   * WebPage Schema
   */
  public static getWebPageSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/#webpage`,
      url: siteConfig.url,
      name: `${siteConfig.name} — ${siteConfig.tagline}`,
      isPartOf: {
        '@id': `${siteConfig.url}/#website`,
      },
      about: {
        '@id': `${siteConfig.url}/#organization`,
      },
      description: siteConfig.description,
      inLanguage: 'en-US',
    };
  }

  /**
   * Services Catalog Schema
   */
  public static getServicesSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: allServices.slice(0, 4).map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
          provider: {
            '@id': `${siteConfig.url}/#organization`,
          },
          serviceType: service.categoryLabel,
          areaServed: 'Worldwide',
        },
      })),
    };
  }

  /**
   * FAQPage Schema for Google Rich Snippets
   */
  public static getFAQSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqData.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };
  }
}

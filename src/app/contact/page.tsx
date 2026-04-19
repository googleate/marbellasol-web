import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact Us — MARBELLASOL Real Estate',
  description:
    'Get in touch with MARBELLASOL. Request property information, book a consultation, or chat on WhatsApp. Our multilingual team responds within 24 hours.',
  openGraph: {
    title: 'Contact MARBELLASOL — Expert Real Estate Advice',
    description: 'Speak with a property specialist today. WhatsApp, email, or fill in our contact form. Available in English, Spanish, German, Swedish, and French.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact MARBELLASOL',
  description: 'Contact form and office information for MARBELLASOL real estate agency',
  mainEntity: {
    '@type': 'RealEstateAgent',
    name: 'MARBELLASOL',
    telephone: '+34635216787',
    email: 'info@marbellasol.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Marbella',
      addressCountry: 'ES',
    },
  },
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ContactClient />
    </>
  )
}

import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'MARBELLASOL — The Next Gen Real Estate in Costa del Sol',
  description:
    'Find your dream property on the Costa del Sol with MARBELLASOL. Luxury villas, modern apartments, and exclusive new developments in Marbella and beyond.',
  alternates: {
    canonical: 'https://marbellasol.com',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'RealEstateAgent',
      '@id': 'https://marbellasol.com/#organization',
      name: 'MARBELLASOL',
      url: 'https://marbellasol.com',
      logo: 'https://marbellasol.com/logo.jpg',
      description: 'Next-generation real estate agency in Marbella and the Costa del Sol.',
      telephone: '+34635216787',
      email: 'info@marbellasol.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Marbella',
        addressRegion: 'Málaga',
        addressCountry: 'ES',
      },
      areaServed: 'Costa del Sol, Spain',
      knowsLanguage: ['English', 'Spanish', 'German', 'Swedish', 'French'],
    },
    {
      '@type': 'LocalBusiness',
      name: 'MARBELLASOL Real Estate',
      image: 'https://marbellasol.com/logo.jpg',
      telephone: '+34635216787',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Marbella',
        addressCountry: 'ES',
      },
      openingHours: ['Mo-Fr 09:00-19:00', 'Sa 10:00-15:00'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does it cost to buy property in Spain?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The total buying costs in Spain typically add 10–13% on top of the purchase price. This includes transfer tax (ITP) of 7–10% depending on the region, notary fees, land registry fees, and legal fees. For new builds, VAT is 10% instead of ITP.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the Golden Visa in Spain?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Spanish Golden Visa grants residency to non-EU buyers who invest at least €500,000 in Spanish real estate. It provides the right to live and work in Spain and travel freely within the Schengen Area.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the Costa del Sol a good place to invest in property?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The Costa del Sol consistently ranks among Europe\'s top property markets. Strong tourism demand, a growing international population, and limited developable land make it a resilient investment. Marbella in particular sees year-round demand from high-net-worth international buyers.',
          },
        },
      ],
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  )
}

import type { Metadata } from 'next'
import DevelopmentsClient from './DevelopmentsClient'

export const metadata: Metadata = {
  title: 'New Developments — Luxury Property Costa del Sol',
  description:
    'Explore exclusive new developments on the Costa del Sol: Unique Infinity, Etherna Homes II, Nubay, ADAGIO, ABRIL and more. From €540,000. Expert guidance from MARBELLASOL.',
  openGraph: {
    title: 'New Developments — MARBELLASOL Real Estate',
    description: 'Exclusive new-build luxury properties in Marbella, Estepona, and the Costa del Sol. Pre-launch prices and expert guidance.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'MARBELLASOL New Developments',
  description: 'Exclusive new residential developments on the Costa del Sol',
  itemListElement: [
    {
      '@type': 'Accommodation',
      name: 'Unique Infinity',
      description: 'Extraordinary residential development at Higuerón Resort',
      address: { '@type': 'PostalAddress', addressLocality: 'Higuerón', addressCountry: 'ES' },
    },
    {
      '@type': 'Accommodation',
      name: 'Etherna Homes II',
      description: 'Contemporary apartments on the New Golden Mile from €540,000',
      address: { '@type': 'PostalAddress', addressLocality: 'Estepona', addressCountry: 'ES' },
    },
    {
      '@type': 'Accommodation',
      name: 'Nubay',
      description: 'Premium development with smart home technology in Marbella East',
      address: { '@type': 'PostalAddress', addressLocality: 'Marbella', addressCountry: 'ES' },
    },
  ],
}

export default function DevelopmentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DevelopmentsClient />
    </>
  )
}

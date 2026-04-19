import type { Metadata } from 'next'
import AgentsClient from './AgentsClient'

export const metadata: Metadata = {
  title: 'Our Agents — Expert Real Estate Specialists',
  description:
    'Meet the MARBELLASOL team — five multilingual real estate specialists covering the British, German, Nordic, Spanish and international markets on the Costa del Sol.',
  openGraph: {
    title: 'Our Agents — MARBELLASOL Real Estate',
    description: 'Meet five multilingual specialists helping international buyers find their perfect property on the Costa del Sol.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'MARBELLASOL Real Estate Agents',
  itemListElement: [
    { '@type': 'Person', name: 'Luis Seijo', jobTitle: 'Residential Sales Specialist', url: 'https://luisseijo.com' },
    { '@type': 'Person', name: 'Fernando Delpech', jobTitle: 'International Property Advisor', url: 'https://fernandodelpech.com' },
    { '@type': 'Person', name: 'Sofía Verbena', jobTitle: 'Marbella Lifestyle & Investment', url: 'https://sofiaverbena.com' },
    { '@type': 'Person', name: 'Simon Gibbs', jobTitle: 'Senior Broker, British Market Expert', url: 'https://simon-gibbs.com' },
    { '@type': 'Person', name: 'Jutta Eisele', jobTitle: 'German & Nordic Market Specialist' },
  ],
}

export default function AgentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgentsClient />
    </>
  )
}

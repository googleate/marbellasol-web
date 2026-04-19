export interface Development {
  id: string
  name: string
  location: string
  area: string
  tagline: string
  description: string
  priceFrom?: string
  status: 'available' | 'selling-fast' | 'coming-soon'
  badge?: string
  highlights: string[]
  bedrooms?: string
  units?: number
}

export const developments: Development[] = [
  {
    id: 'unique-infinity',
    name: 'Unique Infinity',
    location: 'Higuerón, Costa del Sol',
    area: 'Fuengirola / Higuerón',
    tagline: 'Where infinity meets the Mediterranean',
    description: 'Unique Infinity is an extraordinary residential development set in the prestigious Higuerón Resort. Designed for those who demand the very best, these residences offer breathtaking panoramic sea views, resort-style amenities, and unparalleled access to the Mediterranean lifestyle.',
    status: 'available',
    badge: 'Exclusive Listing',
    highlights: ['Panoramic sea views', 'Resort amenities', 'Private pools', 'Concierge service', 'Beach club access'],
    bedrooms: '2–4',
  },
  {
    id: 'etherna-homes-ii',
    name: 'Etherna Homes II',
    location: 'Costa del Sol',
    area: 'Estepona / New Golden Mile',
    tagline: 'Timeless living on the New Golden Mile',
    description: 'Etherna Homes II continues the success of its predecessor with a refined collection of contemporary apartments and penthouses. Set on the sought-after New Golden Mile, each residence combines modern architecture with natural materials for a truly timeless aesthetic.',
    priceFrom: '€540,000',
    status: 'selling-fast',
    highlights: ['New Golden Mile location', 'Modern architecture', 'Private gardens', 'Underground parking', 'Communal pools'],
    bedrooms: '2–3',
    units: 48,
  },
  {
    id: 'nubay',
    name: 'Nubay',
    location: 'Costa del Sol',
    area: 'Marbella East',
    tagline: 'Living above the clouds',
    description: 'Nubay represents a new benchmark in luxury residential development on the Costa del Sol. Elevated above the coastline, these premium homes deliver spectacular views, smart-home technology, and access to world-class leisure facilities.',
    status: 'available',
    badge: 'Premium Development',
    highlights: ['Smart home systems', 'Infinity pools', 'Gym & spa', 'Landscaped gardens', 'Electric vehicle charging'],
    bedrooms: '3–5',
  },
  {
    id: 'adagio',
    name: 'ADAGIO',
    location: 'Cancelada, Estepona',
    area: 'Estepona West',
    tagline: 'A harmonious way of life in Cancelada',
    description: 'ADAGIO is a boutique development nestled in the tranquil village of Cancelada, just minutes from Estepona\'s beaches. With a limited number of carefully crafted homes, ADAGIO offers privacy, community, and exceptional build quality in equal measure.',
    status: 'available',
    highlights: ['Boutique development', 'Village setting', '5 min to beach', 'High-spec finishes', 'Community garden'],
    bedrooms: '2–4',
  },
  {
    id: 'abril',
    name: 'ABRIL',
    location: 'Casares Costa',
    area: 'Casares / Manilva',
    tagline: 'Bloom where the sun shines brightest',
    description: 'ABRIL brings a breath of fresh air to the Casares Costa with its spring-inspired design philosophy. Thoughtfully planned with nature in mind, this development blends seamlessly into its coastal surroundings while delivering all the comforts of modern luxury living.',
    status: 'coming-soon',
    highlights: ['Nature-inspired design', 'Costa del Sol westernmost point', 'Golf courses nearby', 'Low density', 'Sea & mountain views'],
    bedrooms: '2–3',
  },
]

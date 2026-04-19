export interface Agent {
  id: string
  name: string
  specialty: string
  website?: string
  email?: string
  description: string
  languages: string[]
  photo?: string
  instagram?: string
  youtube?: string
}

export const agents: Agent[] = [
  {
    id: 'santiago-llera',
    name: 'Santiago Llera',
    specialty: 'Founder & CEO, Master Agent',
    website: 'https://www.santiagollera.com',
    email: 'santiago@marbellasol.com',
    description: 'Santiago founded MARBELLASOL with a vision to redefine real estate on the Costa del Sol. With a background in tourism and over a decade of property expertise, he leads a next-generation platform where each agent builds their own brand. Santiago is the architect behind the team\'s success.',
    languages: ['English', 'Spanish'],
    instagram: 'https://www.instagram.com/santiagorealtorcds',
    youtube: 'https://www.youtube.com/@santiagorealtor',
  },
  {
    id: 'luis-seijo',
    name: 'Luis Seijo',
    specialty: 'Residential Sales Specialist',
    website: 'https://www.luisseijo.com',
    email: 'luis@marbellasol.com',
    description: 'Luis brings a decade of residential sales expertise across the Costa del Sol, specialising in luxury villas and apartments in Marbella, Benahavís, and Estepona. His deep market insight helps clients secure the best deals.',
    languages: ['English', 'Spanish'],
    instagram: 'https://www.instagram.com/luiseijo_realtor',
    youtube: 'https://www.youtube.com/@luiseijo_realtor',
  },
  {
    id: 'fernando-delpech',
    name: 'Fernando Delpech',
    specialty: 'International Property Advisor',
    website: 'https://www.fernandodelpech.com',
    email: 'fernando@marbellasol.com',
    description: 'Fernando is a trusted advisor for international buyers seeking both primary residences and investment properties. With clients from across Europe, he specialises in navigating the Spanish purchasing process seamlessly.',
    languages: ['English', 'Spanish', 'French'],
  },
  {
    id: 'sofia-verbena',
    name: 'Sofía Verbena',
    specialty: 'Marbella Lifestyle & Investment',
    website: 'https://www.sofiaverbena.com',
    email: 'sofia@marbellasol.com',
    description: 'Sofía is Marbella\'s lifestyle and investment specialist. Whether you\'re seeking a Golden Mile penthouse or a golf-front villa, she provides curated property experiences aligned with your lifestyle aspirations.',
    languages: ['English', 'Spanish', 'Italian'],
  },
  {
    id: 'simon-gibbs',
    name: 'Simon Gibbs',
    specialty: 'Senior Broker, British Market Expert',
    website: 'https://www.simon-gibbs.com',
    email: 'simon@marbellasol.com',
    description: 'With over 40 years on the Costa del Sol, Simon is the go-to advisor for British and Irish buyers. His encyclopaedic knowledge of the market and unmatched network make him one of the region\'s most trusted brokers.',
    languages: ['English', 'Spanish'],
    instagram: 'https://www.instagram.com/simongibbs_realtor',
    youtube: 'https://www.youtube.com/@simongibbs_realtor',
  },
  {
    id: 'jutta-eisele',
    name: 'Jutta Eisele',
    specialty: 'German & Nordic Market Specialist',
    email: 'jutta@marbellasol.com',
    description: 'Jutta is the bridge between Northern Europe and Costa del Sol living. A native German speaker with extensive Nordic market experience, she guides German, Austrian, Swiss, and Scandinavian clients through every step of their Spanish property journey.',
    languages: ['German', 'English', 'Spanish', 'Swedish'],
  },
]

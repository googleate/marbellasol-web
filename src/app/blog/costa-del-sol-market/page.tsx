import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Costa del Sol Property Market 2024: Prices, Trends & Outlook',
  description:
    'A comprehensive overview of the Costa del Sol real estate market in 2024. Property prices in Marbella, demand trends, international buyer profiles, and expert outlook for the next 12–24 months.',
  openGraph: {
    title: 'Costa del Sol Property Market: 2024 Overview & Outlook',
    description: 'Expert analysis of Costa del Sol real estate: price trends, demand drivers, top areas, and what international buyers should know in 2024.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the average property price in Marbella in 2024?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Average property prices in Marbella in 2024 range from approximately €3,500–€6,000 per square metre for established residential areas, rising to €8,000–€15,000+ per square metre for prime locations like the Golden Mile, Puerto Banús, and Sierra Blanca. New luxury developments frequently exceed €20,000 per square metre.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is now a good time to buy property on the Costa del Sol?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Costa del Sol property market has shown consistent long-term appreciation. Supply of buildable land is constrained, international demand remains high, and tourism infrastructure continues to improve. Most analysts consider it a fundamentally sound market for medium to long-term investment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which are the best areas to buy property on the Costa del Sol?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Top areas for investment include Marbella (Golden Mile, Nueva Andalucía, East Marbella), Benahavís (golf courses, luxury villas), Estepona (New Golden Mile, old town), and emerging areas like Casares and Higuerón Resort near Fuengirola.',
      },
    },
  ],
}

export default function CostaDelSolMarketPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="pt-20 lg:pt-24 min-h-screen bg-white">
        <header
          className="py-16 lg:py-24"
          style={{ background: 'linear-gradient(135deg, #0f2f2f, #1a4a4a)' }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <Link href="/blog" className="text-white/60 hover:text-white text-sm transition-colors">Blog</Link>
              <span className="text-white/30">→</span>
              <span className="text-[#c9a84c] text-sm">Market Analysis</span>
            </div>
            <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest">Market Analysis · 7 min read</span>
            <h1 className="text-3xl lg:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
              Costa del Sol Property Market: 2024 Overview & Outlook
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              A detailed look at price trends, demand drivers, top investment areas, and what&apos;s in store for the Costa del Sol real estate market.
            </p>
            <div className="mt-6 text-white/50 text-sm">By Simon Gibbs · July 2024</div>
          </div>
        </header>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

          <div className="bg-[#f8f9fa] border-l-4 border-[#c9a84c] rounded-r-xl p-6 mb-10">
            <p className="text-[#1a4a4a] font-semibold text-lg mb-2">Key Takeaway</p>
            <p className="text-gray-700">
              The Costa del Sol market continues to demonstrate resilience and long-term appreciation. Supply constraints, strong international demand, and improving infrastructure support a positive medium-term outlook.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#1a4a4a] mt-10 mb-4">Why the Costa del Sol Remains Europe&apos;s Premier Property Market</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Costa del Sol — Spain&apos;s &quot;Sun Coast&quot; stretching from Nerja to Manilva — has attracted international property buyers for over 60 years. What makes it different from other Mediterranean markets is a combination of factors that reinforce each other: exceptional climate (320+ days of sunshine), world-class infrastructure (Málaga Airport connects to 145+ destinations), mature services sector, and a deeply established international community.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The market weathered the 2008–2013 correction and emerged with stronger fundamentals. Since 2015, prices have recovered consistently, driven by Northern European buyers seeking lifestyle properties and high-net-worth individuals seeking both second homes and investment assets.
          </p>

          <h2 className="text-2xl font-bold text-[#1a4a4a] mt-10 mb-4">2024 Price Levels</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1a4a4a] text-white">
                  <th className="text-left p-3 font-semibold">Area</th>
                  <th className="text-left p-3 font-semibold">Price Range (€/m²)</th>
                  <th className="text-left p-3 font-semibold">YoY Change</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Marbella Golden Mile', '€8,000–€20,000+', '+8–12%'],
                  ['Nueva Andalucía', '€4,500–€8,000', '+6–9%'],
                  ['Benahavís', '€3,500–€7,000', '+7–10%'],
                  ['Estepona (New Golden Mile)', '€3,000–€6,000', '+8–12%'],
                  ['Fuengirola / Higuerón', '€2,500–€5,000', '+5–8%'],
                  ['Casares / Manilva', '€2,000–€3,500', '+4–7%'],
                ].map(([area, price, change], i) => (
                  <tr key={area} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f8f9fa]'}>
                    <td className="p-3 font-medium text-gray-800">{area}</td>
                    <td className="p-3 text-gray-600">{price}</td>
                    <td className="p-3 text-emerald-700 font-medium">{change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#1a4a4a] mt-10 mb-4">Who Is Buying?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            International buyers account for <strong>over 30% of all transactions</strong> in the province of Málaga — one of the highest ratios anywhere in Spain. The buyer profile:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {[
              { country: '🇬🇧 British', pct: '18%', note: 'Largest single group post-Brexit' },
              { country: '🇩🇪 German', pct: '14%', note: 'Growing significantly' },
              { country: '🇸🇪 Scandinavian', pct: '12%', note: 'Sweden leads, Norway growing' },
              { country: '🇧🇪 Belgian', pct: '9%', note: 'Stable consistent buyers' },
              { country: '🇫🇷 French', pct: '7%', note: 'Primarily Marbella' },
              { country: '🌍 Other', pct: '40%', note: 'US, Middle East, Latin America' },
            ].map((b) => (
              <div key={b.country} className="bg-[#f8f9fa] rounded-xl p-4 text-center">
                <div className="text-xl mb-1">{b.country.split(' ')[0]}</div>
                <div className="font-bold text-[#1a4a4a]">{b.pct}</div>
                <div className="text-xs text-gray-500 mt-1">{b.note}</div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a4a4a] mt-10 mb-4">Key Demand Drivers in 2024</h2>
          <div className="space-y-4 mb-8">
            {[
              {
                title: 'Remote & Hybrid Working',
                desc: 'The shift to remote work has permanently expanded the buyer pool. Professionals who no longer need to be in a specific city are choosing lifestyle over location — and Marbella consistently wins.',
              },
              {
                title: 'Supply Constraints',
                desc: 'The Costa del Sol is geographically constrained (sea to the south, mountains to the north). Buildable land is finite, and planning regulations have tightened. This structurally limits supply growth.',
              },
              {
                title: 'Inflation Hedge',
                desc: 'Real assets — particularly quality real estate in supply-constrained markets — have attracted capital from high-net-worth individuals seeking to preserve wealth against inflation.',
              },
              {
                title: 'Lifestyle & Climate',
                desc: 'The climate advantage has only grown in importance as summers across Northern Europe become more extreme. 320+ days of sunshine, mild winters, and Mediterranean lifestyle remain unique selling points.',
              },
            ].map((d) => (
              <div key={d.title} className="border-l-4 border-[#c9a84c] pl-5 py-2">
                <div className="font-bold text-[#1a4a4a] mb-1">{d.title}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a4a4a] mt-10 mb-4">Hotspots to Watch: 2024–2026</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            While established prime areas remain strong, value migration is pushing buyers to adjacent areas:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              { area: 'Estepona (New Golden Mile)', reason: 'Better value than Marbella, rapidly improving infrastructure and services. Strong new-build pipeline.' },
              { area: 'Higuerón Resort (Fuengirola)', reason: 'Premium resort development with sea views, 5-star amenities, and 20% lower prices than Marbella.' },
              { area: 'Casares Costa & Manilva', reason: 'The last affordable stretch of quality Costa del Sol coastline. Strong capital growth potential over 3–5 years.' },
              { area: 'Marbella East', reason: 'Quieter, more authentic character. Growing appeal with health-conscious and eco-minded buyers.' },
            ].map((h) => (
              <li key={h.area} className="flex gap-3 p-4 bg-[#f8f9fa] rounded-xl">
                <span className="text-[#c9a84c] font-bold shrink-0">▶</span>
                <div>
                  <div className="font-semibold text-[#1a4a4a] text-sm">{h.area}</div>
                  <div className="text-gray-600 text-sm mt-0.5">{h.reason}</div>
                </div>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-[#1a4a4a] mt-10 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              {
                q: 'Will Costa del Sol property prices fall in 2024–2025?',
                a: 'While no market is immune to macroeconomic shocks, the structural fundamentals — supply constraints, strong international demand, and lifestyle appeal — make a significant price correction unlikely in the near term. A moderation in growth rates is more probable than a decline.',
              },
              {
                q: 'What rental yield can I expect from Costa del Sol property?',
                a: 'Long-term rental yields typically run 4–6% net in Marbella and 5–7% in lower-price areas. Holiday rental yields can be significantly higher (8–12% gross) in high-demand locations, though management costs and seasonality must be factored in.',
              },
              {
                q: 'Are there any restrictions on foreigners buying property in Spain?',
                a: 'No. Spain has no restrictions on foreign ownership of property. Non-EU buyers follow the same process as EU citizens and Spanish nationals, with the addition of requiring a NIE number and the option to apply for the Golden Visa.',
              },
            ].map((faq) => (
              <div key={faq.q} className="border border-gray-100 rounded-xl p-5">
                <h3 className="font-bold text-[#1a4a4a] mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-[#c9a84c] to-[#a8872d] rounded-2xl p-6 lg:p-8">
            <h3 className="text-[#1a4a4a] font-bold text-xl mb-3">Want a Personalised Market Briefing?</h3>
            <p className="text-[#1a4a4a]/80 mb-4">
              Our specialists provide tailored market analysis for your specific requirements, budget, and investment goals.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#1a4a4a] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#0f2f2f] transition-colors"
            >
              Request Market Briefing
            </Link>
          </div>
        </article>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#1a4a4a] hover:text-[#c9a84c] font-semibold transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </div>
    </>
  )
}

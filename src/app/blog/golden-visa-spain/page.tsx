import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Spain Golden Visa 2024: Complete Guide for Property Investors',
  description:
    'Everything you need to know about the Spanish Golden Visa in 2024: eligibility, minimum investment (€500,000), application process, benefits, and what the proposed changes mean for investors.',
  openGraph: {
    title: 'Spain Golden Visa: Residency Through Property Investment',
    description: 'Complete guide to the Spanish Golden Visa for non-EU property buyers. €500,000 minimum, Schengen access, family inclusion, and the path to citizenship.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the minimum investment for the Spain Golden Visa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Spain Golden Visa requires a minimum real estate investment of €500,000. This must be a clean investment — meaning no mortgage can be used for the qualifying portion. The property can be residential or commercial, and the investment can be spread across multiple properties.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can my family also get residency with the Spain Golden Visa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Spain Golden Visa extends to the main applicant\'s spouse or partner, dependent children (of any age if they have a disability), and dependent parents. All family members receive the same residency rights.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to get the Spain Golden Visa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The initial Golden Visa is valid for 2 years. After that, it can be renewed for 5-year periods. The application typically takes 20–30 working days to process once all documents are submitted.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the Spain Golden Visa lead to citizenship?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. After 10 years of legal residency in Spain, you can apply for Spanish citizenship. However, you must actually reside in Spain for the last 5 years before applying. Citizens of certain countries (Latin American nations, Portugal, Philippines, etc.) may qualify after just 2 years of residency.',
      },
    },
  ],
}

export default function GoldenVisaPage() {
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
              <span className="text-[#c9a84c] text-sm">Investment</span>
            </div>
            <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest">Investment · 8 min read</span>
            <h1 className="text-3xl lg:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
              Spain Golden Visa: Residency Through Property Investment
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              A complete guide to obtaining Spanish residency through real estate investment — including eligibility, requirements, benefits, and the application process.
            </p>
            <div className="mt-6 text-white/50 text-sm">By Fernando Delpech · August 2024</div>
          </div>
        </header>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

          <div className="bg-[#f8f9fa] border-l-4 border-[#c9a84c] rounded-r-xl p-6 mb-10">
            <p className="text-[#1a4a4a] font-semibold text-lg mb-2">Quick Answer</p>
            <p className="text-gray-700">
              Spain&apos;s Golden Visa grants residency to non-EU citizens who invest a minimum of <strong>€500,000</strong> in Spanish real estate. It includes family members, allows visa-free travel across the Schengen Area, and can lead to Spanish citizenship after 10 years.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#1a4a4a] mt-10 mb-4">What Is the Spain Golden Visa?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Introduced in 2013 under Spain&apos;s Entrepreneurs Act, the Golden Visa (Visa de Inversor) is a residence-by-investment program designed to attract foreign capital. It grants a renewable residence permit to non-EU investors and their families in exchange for a qualifying investment in Spain.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The most popular route — and the one most relevant to our clients — is the <strong>real estate investment of €500,000 or more</strong>.
          </p>

          <h2 className="text-2xl font-bold text-[#1a4a4a] mt-10 mb-4">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: '🏠', title: 'Spanish Residency', desc: 'Legal right to live and work in Spain' },
              { icon: '✈️', title: 'Schengen Access', desc: 'Visa-free travel across 26 European countries' },
              { icon: '👨‍👩‍👧', title: 'Family Inclusion', desc: 'Spouse, children, and dependent parents included' },
              { icon: '📈', title: 'Investment Return', desc: 'Property can be rented out for income' },
              { icon: '🎓', title: 'Education Access', desc: 'Children access Spanish state education' },
              { icon: '🇪🇺', title: 'Path to Citizenship', desc: 'Eligibility for Spanish citizenship after 10 years' },
            ].map((benefit) => (
              <div key={benefit.title} className="flex gap-3 bg-[#f8f9fa] rounded-xl p-4">
                <span className="text-2xl">{benefit.icon}</span>
                <div>
                  <div className="font-semibold text-[#1a4a4a] text-sm">{benefit.title}</div>
                  <div className="text-gray-600 text-xs mt-0.5">{benefit.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a4a4a] mt-10 mb-4">Investment Requirements</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The real estate route requires:
          </p>
          <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
            <li><strong>Minimum investment: €500,000</strong>, free of all encumbrances (no mortgage on this portion)</li>
            <li>The property can be residential or commercial</li>
            <li>The investment can be across multiple properties totalling €500,000+</li>
            <li>You do not need to live in the property — it can be rented out</li>
            <li>You do not need to spend a minimum number of days in Spain to maintain the visa</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#1a4a4a] mt-10 mb-4">The Application Process</h2>
          <div className="space-y-4 mb-8">
            {[
              { step: '1', title: 'Obtain NIE & Open Spanish Bank Account', desc: 'Your lawyer handles this. A Spanish tax identification number (NIE) and local bank account are required before purchase.' },
              { step: '2', title: 'Complete the Property Purchase', desc: 'Sign the public deed (escritura) before a notary. The property must be fully paid — at least €500,000 free of mortgage.' },
              { step: '3', title: 'Gather Supporting Documents', desc: 'Passport, proof of investment, criminal background check (apostilled), private health insurance for Spain, proof of funds origin.' },
              { step: '4', title: 'Submit the Visa Application', desc: 'Can be done at a Spanish consulate abroad or at the Large Businesses Unit (UGE) in Spain. Processing takes 20–30 working days.' },
              { step: '5', title: 'Collect Your Residence Card', desc: 'Once approved, collect your residence card (TIE) at a police station in Spain. Valid for 2 years initially.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 p-4 border border-gray-100 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-[#1a4a4a] text-[#c9a84c] font-bold text-sm flex items-center justify-center shrink-0">
                  {item.step}
                </div>
                <div>
                  <div className="font-semibold text-[#1a4a4a] mb-1">{item.title}</div>
                  <div className="text-gray-600 text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a4a4a] mt-10 mb-4">Renewal & Path to Permanent Residency</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The initial Golden Visa is valid for <strong>2 years</strong>. After renewal, subsequent permits last <strong>5 years</strong>. To renew, you must maintain the investment.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            After <strong>5 years of continuous legal residency</strong>, you can apply for permanent residency. After <strong>10 years</strong>, you can apply for Spanish citizenship — provided you&apos;ve actually been residing in Spain.
          </p>

          <h2 className="text-2xl font-bold text-[#1a4a4a] mt-10 mb-4">Important: Proposed Changes</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
            <p className="text-amber-800 font-semibold mb-2">⚠️ Stay Informed</p>
            <p className="text-amber-700 text-sm leading-relaxed">
              In April 2024, the Spanish government announced plans to review the Golden Visa programme for residential real estate. As of publication, the visa remains fully operational. We strongly recommend contacting us for the latest status before making investment decisions. Commercial property, business investment, and other qualifying routes remain unaffected.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#1a4a4a] mt-10 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Can I work in Spain with the Golden Visa?', a: 'Yes. The Golden Visa grants full working rights in Spain, unlike some other European investor visas which are purely residency-based.' },
              { q: 'Do I need to live in Spain to keep the Golden Visa?', a: 'No. One of the key advantages is that there is no minimum stay requirement. You can maintain the visa while living primarily elsewhere.' },
              { q: 'Can I rent out my Golden Visa property?', a: 'Yes. The property can be rented out — both long-term and as a holiday rental (subject to local regulations). This makes it an income-generating investment.' },
              { q: 'What is the best area to buy for the Golden Visa on the Costa del Sol?', a: 'Marbella, Estepona, and Benahavís are perennial favourites. Properties in these areas typically hold value well and offer strong rental potential.' },
            ].map((faq) => (
              <div key={faq.q} className="border border-gray-100 rounded-xl p-5">
                <h3 className="font-bold text-[#1a4a4a] mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-[#c9a84c] to-[#a8872d] rounded-2xl p-6 lg:p-8">
            <h3 className="text-[#1a4a4a] font-bold text-xl mb-3">Interested in the Golden Visa?</h3>
            <p className="text-[#1a4a4a]/80 mb-4">
              Our team specialises in helping international investors navigate the Golden Visa process alongside their property purchase on the Costa del Sol.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#1a4a4a] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#0f2f2f] transition-colors"
            >
              Speak to a Specialist
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

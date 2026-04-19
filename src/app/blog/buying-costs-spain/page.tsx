import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Buying Costs in Spain: Complete Guide 2024 — Taxes, Notary & Legal Fees',
  description:
    'How much does it cost to buy property in Spain beyond the purchase price? A complete guide to ITP, IVA, notary fees, land registry, and legal costs for 2024.',
  openGraph: {
    title: 'What Are the Real Costs of Buying Property in Spain?',
    description: 'Complete breakdown of buying costs in Spain: transfer tax, VAT, notary, registry, and legal fees. Everything an international buyer needs to know.',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much are the taxes when buying property in Spain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When buying a resale property in Spain (Andalucía), you pay 7% ITP (Impuesto de Transmisiones Patrimoniales). For new builds, you pay 10% IVA (VAT) plus 1.2% AJD (stamp duty). This is the largest cost beyond the purchase price.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a lawyer to buy property in Spain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While not legally required, hiring a lawyer (abogado) is strongly recommended for foreign buyers in Spain. Legal fees typically run 1–1.5% of the purchase price. A solicitor will carry out due diligence, check planning permissions, and handle the conveyancing process.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the NIE number and do I need it to buy property in Spain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The NIE (Número de Identificación de Extranjero) is a tax identification number required for all property transactions in Spain. Foreign buyers must obtain this before completing a purchase. It can be obtained at a Spanish consulate abroad or at a police station in Spain.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the total buying costs in Spain as a percentage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Total buying costs in Spain typically range from 10% to 13% of the purchase price. This includes 7–10% in transfer tax or VAT, 1–1.5% in notary and land registry fees, and 1–1.5% in legal fees. Budget at least 12% on top of the asking price.',
      },
    },
  ],
}

export default function BuyingCostsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="pt-20 lg:pt-24 min-h-screen bg-white">
        {/* Header */}
        <header
          className="py-16 lg:py-24"
          style={{ background: 'linear-gradient(135deg, #0f2f2f, #1a4a4a)' }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <Link href="/blog" className="text-white/60 hover:text-white text-sm transition-colors">
                Blog
              </Link>
              <span className="text-white/30">→</span>
              <span className="text-[#c9a84c] text-sm">Buying Guide</span>
            </div>
            <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest">Buying Guide · 6 min read</span>
            <h1 className="text-3xl lg:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
              What Are the Real Costs of Buying Property in Spain?
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              A complete breakdown of taxes, notary fees, legal costs, and everything else you need to budget for when buying property in Spain.
            </p>
            <div className="mt-6 text-white/50 text-sm">
              By MARBELLASOL Team · September 2024 · Updated for 2024
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 prose prose-lg prose-slate max-w-none">

          <div className="bg-[#f8f9fa] border-l-4 border-[#c9a84c] rounded-r-xl p-6 mb-10 not-prose">
            <p className="text-[#1a4a4a] font-semibold text-lg mb-2">Quick Answer</p>
            <p className="text-gray-700">
              Budget <strong>10–13% on top of the purchase price</strong> for buying costs in Spain.
              This covers transfer tax (7–10%), notary & registry (1–1.5%), and legal fees (1–1.5%).
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#1a4a4a] mt-10 mb-4">Overview: What Costs to Expect</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Spain is a popular destination for international property buyers, but the total cost of purchase goes well beyond the listing price. Understanding exactly what you&apos;ll pay upfront is essential before making an offer. Here&apos;s a full breakdown.
          </p>

          <div className="overflow-x-auto mb-10 not-prose">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1a4a4a] text-white">
                  <th className="text-left p-3 font-semibold">Cost</th>
                  <th className="text-left p-3 font-semibold">Resale</th>
                  <th className="text-left p-3 font-semibold">New Build</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Transfer Tax (ITP)', '7% (Andalucía)', '—'],
                  ['VAT / IVA', '—', '10%'],
                  ['Stamp Duty (AJD)', '—', '1.2%'],
                  ['Notary Fees', '0.4–0.9%', '0.4–0.9%'],
                  ['Land Registry', '0.2–0.5%', '0.2–0.5%'],
                  ['Legal Fees', '1–1.5%', '1–1.5%'],
                  ['Total (approx.)', '9–11%', '12–14%'],
                ].map(([item, resale, newBuild], i) => (
                  <tr key={item} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f8f9fa]'}>
                    <td className="p-3 font-medium text-gray-800">{item}</td>
                    <td className="p-3 text-gray-600">{resale}</td>
                    <td className="p-3 text-gray-600">{newBuild}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#1a4a4a] mt-10 mb-4">1. Transfer Tax (ITP) — Resale Properties</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you&apos;re buying a resale property (second-hand), you&apos;ll pay <strong>Impuesto de Transmisiones Patrimoniales (ITP)</strong>. In Andalucía — which includes Marbella, Málaga, and the Costa del Sol — the rate is a flat <strong>7%</strong> of the purchase price.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            This is one of the most favourable rates in Spain. Other regions charge 8–10%. ITP is paid directly to the regional government within 30 days of the purchase.
          </p>

          <h2 className="text-2xl font-bold text-[#1a4a4a] mt-10 mb-4">2. VAT (IVA) + Stamp Duty — New Build Properties</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For new developments and first-time sales, the tax structure changes:
          </p>
          <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
            <li><strong>IVA (VAT): 10%</strong> of the purchase price for residential properties</li>
            <li><strong>AJD (Stamp Duty): 1.2%</strong> in Andalucía (this varies by region)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            So for a new build costing €500,000, you&apos;d pay €50,000 in VAT and €6,000 in stamp duty — a total of €56,000 in tax alone.
          </p>

          <h2 className="text-2xl font-bold text-[#1a4a4a] mt-10 mb-4">3. Notary Fees</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            In Spain, property transactions must be formalised before a Notary Public. Notary fees are regulated by the government and calculated on a sliding scale. For a property worth €500,000, expect to pay approximately €1,500–€2,500. These are typically split between buyer and seller, though this is negotiable.
          </p>

          <h2 className="text-2xl font-bold text-[#1a4a4a] mt-10 mb-4">4. Land Registry Fees</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Once the deed is signed at the notary, the property must be registered in the Land Registry (Registro de la Propiedad). Fees are also state-regulated and typically run <strong>0.2–0.5%</strong> of the purchase price.
          </p>

          <h2 className="text-2xl font-bold text-[#1a4a4a] mt-10 mb-4">5. Legal Fees</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            While not legally mandatory, hiring an independent lawyer is strongly recommended — especially for foreign buyers. Your lawyer will:
          </p>
          <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
            <li>Conduct due diligence on the property (checking for debts, planning issues, etc.)</li>
            <li>Review and negotiate the purchase contract</li>
            <li>Handle payments and liaise with the notary</li>
            <li>Ensure the title is clean and transferred correctly</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Legal fees in Spain typically range from <strong>1–1.5% of the purchase price</strong>, with a minimum of around €2,000–€3,000 for low-value properties.
          </p>

          <h2 className="text-2xl font-bold text-[#1a4a4a] mt-10 mb-4">6. NIE Number</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            All foreign buyers must obtain a <strong>NIE (Número de Identificación de Extranjero)</strong> — a Spanish tax identification number. This is required for any financial transaction in Spain, including property purchases. The cost is minimal (around €10), but processing time can take several weeks if done abroad, so obtain it early.
          </p>

          <h2 className="text-2xl font-bold text-[#1a4a4a] mt-10 mb-4">7. Mortgage Costs (If Applicable)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you&apos;re financing your purchase, additional costs apply: mortgage arrangement fee (typically 0.5–1%), property valuation (€300–€600), and mortgage deed registration. Since 2019, Spanish law requires the bank (not the buyer) to pay the mortgage stamp duty.
          </p>

          <div className="bg-[#1a4a4a] rounded-2xl p-6 lg:p-8 mt-10 not-prose">
            <h3 className="text-[#c9a84c] font-bold text-xl mb-3">Real Example: €500,000 Resale Villa in Marbella</h3>
            <div className="space-y-2 text-white/80 text-sm">
              <div className="flex justify-between"><span>Purchase Price</span><span className="font-semibold text-white">€500,000</span></div>
              <div className="flex justify-between"><span>ITP Transfer Tax (7%)</span><span>€35,000</span></div>
              <div className="flex justify-between"><span>Notary Fees</span><span>€2,000</span></div>
              <div className="flex justify-between"><span>Land Registry</span><span>€1,200</span></div>
              <div className="flex justify-between"><span>Legal Fees (1.2%)</span><span>€6,000</span></div>
              <div className="border-t border-white/20 pt-2 mt-2 flex justify-between font-bold text-white">
                <span>Total to Budget</span><span>€544,200</span>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <h2 className="text-2xl font-bold text-[#1a4a4a] mt-12 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Can I negotiate who pays the buying costs?',
                a: 'Taxes (ITP/IVA) are always paid by the buyer. Notary fees can sometimes be split. Legal fees are always the buyer\'s responsibility. Some sellers may offer to contribute to certain costs as part of negotiations, particularly in a buyer\'s market.',
              },
              {
                q: 'Are there ongoing costs after buying?',
                a: 'Yes. Annual costs include IBI (local property tax, typically 0.3–1.1% of cadastral value), community fees (if in a complex), and potentially wealth tax and income tax for non-residents.',
              },
              {
                q: 'Is buying property in Spain a good investment?',
                a: 'The Costa del Sol has shown strong long-term price appreciation. Rental yields in Marbella and surrounding areas typically run 4–6%, with holiday rental potential significantly higher in peak season.',
              },
            ].map((faq) => (
              <div key={faq.q} className="border border-gray-100 rounded-xl p-5">
                <h3 className="font-bold text-[#1a4a4a] mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-[#c9a84c] to-[#a8872d] rounded-2xl p-6 lg:p-8 not-prose">
            <h3 className="text-[#1a4a4a] font-bold text-xl mb-3">Need Help Planning Your Budget?</h3>
            <p className="text-[#1a4a4a]/80 mb-4">
              Our specialists will provide a complete cost breakdown tailored to your target property and help you navigate every step.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#1a4a4a] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#0f2f2f] transition-colors"
            >
              Request Free Consultation
            </Link>
          </div>
        </article>

        {/* Back to blog */}
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

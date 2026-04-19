import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Real Estate Blog — Spain Property Guides & Market Insights',
  description:
    'Expert guides on buying property in Spain, the Spanish Golden Visa, buying costs and taxes, and Costa del Sol market analysis. Optimized for international buyers.',
  openGraph: {
    title: 'Real Estate Blog — MARBELLASOL',
    description: 'In-depth guides and market insights for international buyers of property in Spain and the Costa del Sol.',
  },
}

const posts = [
  {
    slug: 'buying-costs-spain',
    title: 'What Are the Real Costs of Buying Property in Spain?',
    excerpt:
      'Beyond the purchase price, buyers in Spain typically pay 10–13% in taxes, notary, registry, and legal fees. Here\'s a complete, up-to-date breakdown for 2024.',
    category: 'Buying Guide',
    readTime: '6 min read',
    date: '2024-09-15',
    author: 'MARBELLASOL Team',
  },
  {
    slug: 'golden-visa-spain',
    title: 'Spain Golden Visa: Residency Through Property Investment',
    excerpt:
      'The Spanish Golden Visa offers non-EU nationals residency rights in exchange for a minimum €500,000 real estate investment. Here\'s everything you need to know in 2024.',
    category: 'Investment',
    readTime: '8 min read',
    date: '2024-08-20',
    author: 'Fernando Delpech',
  },
  {
    slug: 'costa-del-sol-market',
    title: 'Costa del Sol Property Market: 2024 Overview & Outlook',
    excerpt:
      'The Costa del Sol remains one of Europe\'s most resilient property markets. We analyse current prices, demand drivers, and what to expect for international buyers.',
    category: 'Market Analysis',
    readTime: '7 min read',
    date: '2024-07-10',
    author: 'Simon Gibbs',
  },
]

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'MARBELLASOL Real Estate Blog',
            description: 'Expert guides on buying property in Spain',
            url: 'https://marbellasol.com/blog',
          }),
        }}
      />

      {/* Hero */}
      <section
        className="pt-24 pb-16 lg:pt-32 lg:pb-24"
        style={{ background: 'linear-gradient(135deg, #0f2f2f, #1a4a4a)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Real Estate Blog</h1>
          <div className="w-16 h-1 bg-[#c9a84c] mx-auto mb-6" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            In-depth guides and market insights for international property buyers in Spain.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="border border-gray-100 rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs bg-[#c9a84c]/20 text-[#c9a84c] px-3 py-1 rounded-full font-semibold">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-xs">{post.readTime}</span>
                  <span className="text-gray-400 text-xs">·</span>
                  <time className="text-gray-400 text-xs" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                </div>

                <h2 className="text-2xl font-bold text-[#1a4a4a] mb-3 hover:text-[#c9a84c] transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-gray-600 leading-relaxed mb-5">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {post.author}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-[#1a4a4a] hover:text-[#c9a84c] font-semibold text-sm transition-colors"
                  >
                    Read Article
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

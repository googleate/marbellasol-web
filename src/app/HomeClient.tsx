'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { agents } from '@/data/agents'
import { developments } from '@/data/developments'

const blogPosts = [
  {
    slug: 'buying-costs-spain',
    title: 'What Are the Real Costs of Buying Property in Spain?',
    excerpt: 'Beyond the purchase price, buyers in Spain typically pay 10–13% in taxes, notary, registry, and legal fees. Here\'s a complete breakdown.',
    category: 'Buying Guide',
    readTime: '6 min read',
  },
  {
    slug: 'golden-visa-spain',
    title: 'Spain Golden Visa: Residency Through Property Investment',
    excerpt: 'The Spanish Golden Visa offers non-EU nationals residency rights in exchange for a minimum €500,000 real estate investment. Here\'s everything you need to know.',
    category: 'Investment',
    readTime: '8 min read',
  },
  {
    slug: 'costa-del-sol-market',
    title: 'Costa del Sol Property Market: 2024 Overview & Outlook',
    excerpt: 'The Costa del Sol remains one of Europe\'s most resilient property markets. We analyse current prices, trends, and what to expect for international buyers.',
    category: 'Market Analysis',
    readTime: '7 min read',
  },
]

export default function HomeClient() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero Section */}
      {/* // TODO: replace with team photo */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0d3333 0%, #1a5c3a 40%, #2a6a6a 70%, #1a5c3a 100%)',
        }}
      >
        {/* Decorative overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 30% 50%, #c9a84c 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, #c9a84c 0%, transparent 50%)',
          }}
        />

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 60C240 100 480 20 720 60C960 100 1200 20 1440 60V120H0V60Z"
              fill="white"
              fillOpacity="0.05"
            />
            <path
              d="M0 80C240 40 480 100 720 80C960 60 1200 120 1440 80V120H0V80Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          {/* Tagline badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-[#c9a84c]/30 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-sm font-medium tracking-wider uppercase">
              The Next Gen Real Estate in Costa del Sol
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            {t('hero.headline')}
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t('hero.subheadline')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#c9a84c] hover:bg-[#d4b86a] text-[#1a4a4a] font-bold px-8 py-4 rounded-full text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform"
            >
              {t('hero.cta')}
            </Link>
            <Link
              href="/developments"
              className="border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:bg-white/10"
            >
              {t('hero.ctaSecondary')}
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { value: '6', label: 'Expert Agents' },
              { value: '10+', label: 'Languages Spoken' },
              { value: '500+', label: 'Properties Sold' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-[#c9a84c]">{stat.value}</div>
                <div className="text-white/60 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a4a4a] mb-4">
              {t('valueProps.title')}
            </h2>
            <div className="w-16 h-1 bg-[#c9a84c] mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🌍',
                title: t('valueProps.prop1Title'),
                desc: t('valueProps.prop1Desc'),
              },
              {
                icon: '🏗️',
                title: t('valueProps.prop2Title'),
                desc: t('valueProps.prop2Desc'),
              },
              {
                icon: '🤝',
                title: t('valueProps.prop3Title'),
                desc: t('valueProps.prop3Desc'),
              },
              {
                icon: '🤖',
                title: t('valueProps.prop4Title'),
                desc: t('valueProps.prop4Desc'),
              },
            ].map((prop) => (
              <div
                key={prop.title}
                className="text-center p-6 rounded-2xl bg-[#f8f9fa] hover:bg-[#1a4a4a] group transition-all duration-300"
              >
                <div className="text-4xl mb-4">{prop.icon}</div>
                <h3 className="font-bold text-[#1a4a4a] group-hover:text-[#c9a84c] text-lg mb-3 transition-colors">
                  {prop.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/70 text-sm leading-relaxed transition-colors">
                  {prop.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents Preview */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1a4a4a] mb-2">{t('agents.title')}</h2>
              <p className="text-gray-600">{t('agents.subtitle')}</p>
            </div>
            <Link
              href="/agents"
              className="shrink-0 border-2 border-[#1a4a4a] text-[#1a4a4a] hover:bg-[#1a4a4a] hover:text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all"
            >
              {t('agents.viewAll')}
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {agents.map((agent) => (
              <div key={agent.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                {/* Initials avatar placeholder */}
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: '#1a4a4a' }}
                >
                  <span className="text-xl font-bold text-white">
                    {agent.name.split(' ').map((n) => n[0]).join('').substring(0, 2)}
                  </span>
                </div>
                <h3 className="font-bold text-[#1a4a4a] mb-1">{agent.name}</h3>
                <p className="text-[#c9a84c] text-xs font-medium mb-3 leading-tight">{agent.specialty}</p>
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {agent.languages.slice(0, 2).map((lang) => (
                    <span key={lang} className="text-xs bg-[#f8f9fa] text-gray-600 px-2 py-0.5 rounded-full">
                      {lang}
                    </span>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="block text-xs bg-[#1a4a4a] hover:bg-[#c9a84c] text-white hover:text-[#1a4a4a] py-2 px-4 rounded-full font-semibold transition-all"
                >
                  {t('agents.contact')}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developments Teaser */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1a4a4a] mb-2">{t('developments.title')}</h2>
              <p className="text-gray-600">{t('developments.subtitle')}</p>
            </div>
            <Link
              href="/developments"
              className="shrink-0 border-2 border-[#1a4a4a] text-[#1a4a4a] hover:bg-[#1a4a4a] hover:text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all"
            >
              {t('developments.viewAll')}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developments.slice(0, 3).map((dev) => (
              <article key={dev.id} className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                {/* Image placeholder */}
                <div
                  className="h-52 relative"
                  style={{
                    background: `linear-gradient(135deg, #1a4a4a, #2a6a6a)`,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-5xl mb-2">🏗️</div>
                      <div className="text-lg font-bold">{dev.name}</div>
                    </div>
                  </div>
                  {dev.badge && (
                    <div className="absolute top-4 left-4 bg-[#c9a84c] text-[#1a4a4a] text-xs font-bold px-3 py-1 rounded-full">
                      {dev.badge}
                    </div>
                  )}
                  {dev.status === 'selling-fast' && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Selling Fast
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="text-xs text-[#c9a84c] font-semibold uppercase tracking-wider mb-2">
                    {dev.location}
                  </div>
                  <h3 className="text-xl font-bold text-[#1a4a4a] mb-2">{dev.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">{dev.tagline}</p>
                  {dev.priceFrom && (
                    <p className="text-[#1a4a4a] font-bold mb-4">
                      {t('developments.from')} {dev.priceFrom}
                    </p>
                  )}
                  <Link
                    href="/contact"
                    className="inline-block bg-[#1a4a4a] hover:bg-[#c9a84c] text-white hover:text-[#1a4a4a] px-5 py-2 rounded-full text-sm font-semibold transition-all"
                  >
                    {t('developments.learnMore')}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="py-20 lg:py-28 bg-[#1a4a4a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">{t('blog.title')}</h2>
              <p className="text-white/60">{t('blog.subtitle')}</p>
            </div>
            <Link
              href="/blog"
              className="shrink-0 border-2 border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#1a4a4a] px-6 py-2.5 rounded-full font-semibold text-sm transition-all"
            >
              {t('blog.viewAll')}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs bg-[#c9a84c]/20 text-[#c9a84c] px-3 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                  <span className="text-white/40 text-xs">{post.readTime}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3 leading-tight">{post.title}</h3>
                <p className="text-white/60 text-sm mb-5 leading-relaxed">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[#c9a84c] font-semibold text-sm hover:text-[#d4b86a] transition-colors"
                >
                  {t('blog.readMore')} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#c9a84c] to-[#a8872d]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a4a4a] mb-4">
            Ready to Find Your Property?
          </h2>
          <p className="text-[#1a4a4a]/70 text-lg mb-8">
            Speak with one of our specialists today. No obligation, just expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#1a4a4a] text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-[#0f2f2f] transition-colors shadow-lg"
            >
              {t('hero.cta')}
            </Link>
            <a
              href="https://wa.me/34635216787"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

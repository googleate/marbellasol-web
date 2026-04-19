'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { developments } from '@/data/developments'

const statusColors = {
  available: 'bg-emerald-100 text-emerald-800',
  'selling-fast': 'bg-red-100 text-red-800',
  'coming-soon': 'bg-blue-100 text-blue-800',
}

const statusLabels = {
  available: 'Available Now',
  'selling-fast': 'Selling Fast',
  'coming-soon': 'Coming Soon',
}

export default function DevelopmentsClient() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero */}
      <section
        className="pt-24 pb-16 lg:pt-32 lg:pb-24"
        style={{ background: 'linear-gradient(135deg, #0f2f2f, #1a4a4a)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t('developmentsPage.title')}</h1>
          <div className="w-16 h-1 bg-[#c9a84c] mx-auto mb-6" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto">{t('developmentsPage.subtitle')}</p>
        </div>
      </section>

      {/* Developments Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {developments.map((dev, index) => (
              <article
                key={dev.id}
                className={`rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 ${
                  index === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Image area */}
                <div
                  className={`relative flex items-center justify-center ${index === 0 ? 'h-72' : 'h-56'}`}
                  style={{
                    background: `linear-gradient(${135 + index * 20}deg, #1a4a4a ${index * 10}%, #2a6a6a)`,
                  }}
                >
                  <div className="text-center text-white">
                    <div className="text-6xl mb-3">🏗️</div>
                    <div className="text-2xl font-bold">{dev.name}</div>
                    <div className="text-white/60 text-sm mt-1">{dev.location}</div>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {dev.badge && (
                      <span className="bg-[#c9a84c] text-[#1a4a4a] text-xs font-bold px-3 py-1 rounded-full">
                        {dev.badge}
                      </span>
                    )}
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${statusColors[dev.status]}`}>
                      {statusLabels[dev.status]}
                    </span>
                  </div>
                </div>

                <div className={`p-6 lg:p-8 ${index === 0 ? 'lg:grid lg:grid-cols-2 lg:gap-8' : ''}`}>
                  <div>
                    <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-wider mb-2">{dev.area}</p>
                    <h2 className="text-2xl font-bold text-[#1a4a4a] mb-2">{dev.name}</h2>
                    <p className="text-[#c9a84c] font-medium italic mb-4">{dev.tagline}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{dev.description}</p>
                  </div>

                  <div>
                    {/* Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-[#f8f9fa] rounded-xl p-3">
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{t('developmentsPage.location')}</div>
                        <div className="text-sm font-semibold text-[#1a4a4a]">{dev.location}</div>
                      </div>
                      {dev.bedrooms && (
                        <div className="bg-[#f8f9fa] rounded-xl p-3">
                          <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Bedrooms</div>
                          <div className="text-sm font-semibold text-[#1a4a4a]">{dev.bedrooms} beds</div>
                        </div>
                      )}
                      {dev.priceFrom && (
                        <div className="bg-[#f8f9fa] rounded-xl p-3">
                          <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{t('developmentsPage.price')}</div>
                          <div className="text-sm font-bold text-[#1a4a4a]">{dev.priceFrom}</div>
                        </div>
                      )}
                      {dev.units && (
                        <div className="bg-[#f8f9fa] rounded-xl p-3">
                          <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Units</div>
                          <div className="text-sm font-semibold text-[#1a4a4a]">{dev.units} homes</div>
                        </div>
                      )}
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-1.5 mb-6">
                      {dev.highlights.slice(0, 4).map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="inline-block bg-[#1a4a4a] hover:bg-[#c9a84c] text-white hover:text-[#1a4a4a] px-6 py-3 rounded-full font-semibold text-sm transition-all"
                    >
                      {t('developmentsPage.inquire')}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a4a4a]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Looking for Something Specific?</h2>
          <p className="text-white/60 mb-6">
            Our specialists have access to off-market listings and pre-launch opportunities not published online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#c9a84c] hover:bg-[#d4b86a] text-[#1a4a4a] px-8 py-3.5 rounded-full font-bold transition-all"
            >
              {t('hero.cta')}
            </Link>
            <a
              href="https://wa.me/34635216787"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-full font-bold transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

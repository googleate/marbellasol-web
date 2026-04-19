'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { agents } from '@/data/agents'

export default function AgentsClient() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero */}
      <section
        className="pt-24 pb-16 lg:pt-32 lg:pb-24"
        style={{ background: 'linear-gradient(135deg, #0f2f2f, #1a4a4a)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t('agentsPage.title')}</h1>
          <div className="w-16 h-1 bg-[#c9a84c] mx-auto mb-6" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto">{t('agentsPage.subtitle')}</p>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <article
                key={agent.id}
                className="bg-[#f8f9fa] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Photo area */}
                <div
                  className="h-48 flex items-center justify-center relative"
                  style={{ background: 'linear-gradient(135deg, #1a4a4a, #2a6a6a)' }}
                >
                  {/* Initials avatar */}
                  <div
                    className="w-24 h-24 rounded-full border-4 border-[#c9a84c]/50 flex items-center justify-center"
                    style={{ backgroundColor: '#1a4a4a' }}
                  >
                    <span className="text-3xl font-bold text-white">
                      {agent.name.split(' ').map((n) => n[0]).join('').substring(0, 2)}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex gap-1">
                      {agent.languages.map((lang) => (
                        <span key={lang} className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">
                          {lang.substring(0, 2).toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold text-[#1a4a4a] mb-1">{agent.name}</h2>
                  <p className="text-[#c9a84c] text-sm font-semibold mb-3">{agent.specialty}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{agent.description}</p>

                  {/* Languages */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {agent.languages.map((lang) => (
                      <span
                        key={lang}
                        className="text-xs bg-[#1a4a4a]/10 text-[#1a4a4a] px-3 py-1 rounded-full font-medium"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>

                  {/* Social links */}
                  {(agent.website || agent.instagram || agent.youtube) && (
                    <div className="flex items-center gap-3 mb-5">
                      {agent.website && (
                        <a
                          href={agent.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Website"
                          className="flex items-center gap-1 text-xs text-[#1a4a4a] hover:text-[#c9a84c] transition-colors font-medium"
                        >
                          <span className="text-base">🌐</span>
                          <span className="hidden sm:inline">Website</span>
                        </a>
                      )}
                      {agent.instagram && (
                        <a
                          href={agent.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Instagram"
                          className="flex items-center gap-1 text-xs text-[#1a4a4a] hover:text-[#c9a84c] transition-colors font-medium"
                        >
                          <span className="text-base">📸</span>
                          <span className="hidden sm:inline">Instagram</span>
                        </a>
                      )}
                      {agent.youtube && (
                        <a
                          href={agent.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="YouTube"
                          className="flex items-center gap-1 text-xs text-[#1a4a4a] hover:text-[#c9a84c] transition-colors font-medium"
                        >
                          <span className="text-base">▶️</span>
                          <span className="hidden sm:inline">YouTube</span>
                        </a>
                      )}
                    </div>
                  )}

                  {/* CTAs */}
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/contact"
                      className="block text-center bg-[#1a4a4a] hover:bg-[#c9a84c] text-white hover:text-[#1a4a4a] py-2.5 px-4 rounded-full text-sm font-semibold transition-all"
                    >
                      {t('agents.contact')}
                    </Link>
                    {agent.website && (
                      <a
                        href={agent.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center border-2 border-[#1a4a4a]/30 hover:border-[#1a4a4a] text-[#1a4a4a] py-2.5 px-4 rounded-full text-sm font-semibold transition-all"
                      >
                        {t('agentsPage.visitWebsite')}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#1a4a4a] mb-4">Ready to Talk to an Expert?</h2>
          <p className="text-gray-600 mb-6">Tell us your requirements and we'll match you with the right specialist.</p>
          <Link
            href="/contact"
            className="inline-block bg-[#1a4a4a] hover:bg-[#c9a84c] text-white hover:text-[#1a4a4a] px-8 py-3.5 rounded-full font-bold transition-all"
          >
            {t('hero.cta')}
          </Link>
        </div>
      </section>
    </>
  )
}

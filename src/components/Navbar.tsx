'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage, Locale } from '@/context/LanguageContext'

const languages: { code: Locale; flag: string; label: string }[] = [
  { code: 'en', flag: '🇬🇧', label: 'EN' },
  { code: 'es', flag: '🇪🇸', label: 'ES' },
  { code: 'de', flag: '🇩🇪', label: 'DE' },
  { code: 'sv', flag: '🇸🇪', label: 'SV' },
  { code: 'fr', flag: '🇫🇷', label: 'FR' },
]

export default function Navbar() {
  const { t, locale, setLocale } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  const currentLang = languages.find((l) => l.code === locale) || languages[0]

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/agents', label: t('nav.agents') },
    { href: '/developments', label: t('nav.developments') },
    { href: '/blog', label: t('nav.blog') },
    { href: '/contact', label: t('nav.contact') },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a4a4a]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo-icon.png"
              alt="MARBELLASOL"
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            <span className="text-white font-bold text-lg tracking-wider hidden sm:block">
              MARBELLASOL
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-[#c9a84c] transition-colors text-sm font-medium tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm px-3 py-1.5 rounded-md hover:bg-white/10"
              >
                <span>{currentLang.flag}</span>
                <span>{currentLang.label}</span>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 bg-[#1a4a4a] border border-white/20 rounded-lg shadow-xl overflow-hidden z-50 min-w-[120px]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLocale(lang.code)
                        setLangOpen(false)
                      }}
                      className={`flex items-center gap-2 w-full px-4 py-2.5 text-sm hover:bg-white/10 transition-colors ${
                        locale === lang.code ? 'text-[#c9a84c]' : 'text-white/80'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Agent Login */}
            <a
              href="https://carloscrm.up.railway.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c9a84c] text-[#1a4a4a] px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#d4b86a] transition-colors whitespace-nowrap"
            >
              {t('nav.agentLogin')}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-white/80 hover:text-[#c9a84c] transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-3 flex-wrap">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLocale(lang.code)
                    setMenuOpen(false)
                  }}
                  className={`text-sm px-2 py-1 rounded ${
                    locale === lang.code
                      ? 'bg-[#c9a84c] text-[#1a4a4a] font-semibold'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {lang.flag} {lang.label}
                </button>
              ))}
            </div>
            <a
              href="https://carloscrm.up.railway.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block bg-[#c9a84c] text-[#1a4a4a] px-4 py-2.5 rounded-md text-sm font-semibold text-center hover:bg-[#d4b86a] transition-colors"
            >
              {t('nav.agentLogin')}
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

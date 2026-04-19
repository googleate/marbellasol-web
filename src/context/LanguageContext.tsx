'use client'

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

export type Locale = 'en' | 'es' | 'de' | 'sv' | 'fr'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'en',
  setLocale: () => {},
  t: (key) => key,
})

type TranslationDict = Record<string, unknown>

function getNestedValue(obj: TranslationDict, key: string): string {
  const parts = key.split('.')
  let current: unknown = obj
  for (const part of parts) {
    if (current && typeof current === 'object' && part in (current as TranslationDict)) {
      current = (current as TranslationDict)[part]
    } else {
      return key
    }
  }
  return typeof current === 'string' ? current : key
}

const translations: Record<Locale, TranslationDict> = {
  en: {},
  es: {},
  de: {},
  sv: {},
  fr: {},
}

async function loadLocale(locale: Locale): Promise<TranslationDict> {
  try {
    const res = await fetch(`/locales/${locale}.json`)
    return await res.json()
  } catch {
    return {}
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const stored = (typeof window !== 'undefined' ? localStorage.getItem('locale') : null) as Locale | null
    const initial: Locale = stored && ['en', 'es', 'de', 'sv', 'fr'].includes(stored) ? stored : 'en'
    loadLocale(initial).then((data) => {
      translations[initial] = data
      setLocaleState(initial)
      setLoaded(true)
    })
  }, [])

  const setLocale = useCallback(async (newLocale: Locale) => {
    if (!translations[newLocale] || Object.keys(translations[newLocale]).length === 0) {
      const data = await loadLocale(newLocale)
      translations[newLocale] = data
    }
    localStorage.setItem('locale', newLocale)
    setLocaleState(newLocale)
  }, [])

  const t = useCallback((key: string): string => {
    const val = getNestedValue(translations[locale], key)
    if (val !== key) return val
    // fallback to en
    return getNestedValue(translations['en'], key)
  }, [locale])

  if (!loaded) return null

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

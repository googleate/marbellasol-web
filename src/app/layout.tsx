import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://marbellasol.com'),
  title: {
    default: 'MARBELLASOL — The Next Gen Real Estate in Costa del Sol',
    template: '%s | MARBELLASOL',
  },
  description:
    'MARBELLASOL is a next-generation real estate agency in Marbella and the Costa del Sol. Find luxury villas, apartments, and exclusive new developments with our expert multilingual team.',
  keywords: [
    'real estate Marbella',
    'property Costa del Sol',
    'buy property Spain',
    'luxury villas Marbella',
    'new developments Costa del Sol',
    'international property advisor',
    'Golden Visa Spain',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://marbellasol.com',
    siteName: 'MARBELLASOL',
    title: 'MARBELLASOL — The Next Gen Real Estate in Costa del Sol',
    description:
      'Expert real estate agency in Marbella. Luxury properties, exclusive developments, and multilingual agents serving international buyers.',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'MARBELLASOL Real Estate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MARBELLASOL — The Next Gen Real Estate in Costa del Sol',
    description: 'Expert real estate agency in Marbella with exclusive new developments and multilingual advisors.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}

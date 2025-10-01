import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.kratosintelligence.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Kratos Intelligence – AI that grows your business',
    template: '%s • Kratos Intelligence',
  },
  description:
    'Automate customer interactions, generate qualified leads, and streamline operations with production-ready AI chat, voice, and integrations.',
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Kratos Intelligence – AI that grows your business',
    description:
      'Automate customer interactions, generate qualified leads, and streamline operations with production-ready AI chat, voice, and integrations.',
    siteName: 'Kratos Intelligence',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kratos Intelligence – AI that grows your business',
    description:
      'Automate customer interactions, generate qualified leads, and streamline operations with production-ready AI chat, voice, and integrations.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
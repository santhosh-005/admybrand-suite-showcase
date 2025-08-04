import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'ADmyBRAND AI - Transform Your Marketing with AI',
  description: 'Revolutionize your marketing strategy with ADmyBRAND AI Suite. Intelligent automation, predictive analytics, and personalized campaigns that drive real results.',
  keywords: 'AI marketing, marketing automation, digital marketing, AI campaigns, brand automation, marketing AI suite',
  authors: [{ name: 'ADmyBRAND AI Team' }],
  creator: 'ADmyBRAND AI',
  publisher: 'ADmyBRAND AI',
  openGraph: {
    title: 'ADmyBRAND AI - Transform Your Marketing with AI',
    description: 'Revolutionize your marketing strategy with intelligent automation, predictive analytics, and personalized campaigns.',
    url: 'https://admybrand.ai',
    siteName: 'ADmyBRAND AI',
    images: [
      {
        url: '/hero-dashboard.jpg',
        width: 1200,
        height: 630,
        alt: 'ADmyBRAND AI Dashboard',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADmyBRAND AI - Transform Your Marketing with AI',
    description: 'Revolutionize your marketing strategy with intelligent automation and AI-powered campaigns.',
    images: ['/hero-dashboard.jpg'],
    creator: '@admybrandai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#8b5cf6" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className="dark bg-slate-900 text-white">{children}</body>
    </html>
  )
}

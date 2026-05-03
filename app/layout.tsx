import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Colloqate — Access What Most People Will Never See',
  description:
    'A private institute for the few who refuse to waste another year. Trusted by 6,000+ individuals worldwide. By invitation.',
  keywords: [
    'private institute',
    'exclusive access',
    'fast-track learner',
    'smart-track learner',
    'quick-step integrator',
    'colloqate',
  ],
  openGraph: {
    title: 'Colloqate — Access What Most People Will Never See',
    description:
      'A private institute for the few who refuse to waste another year. By invitation only.',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#0b0b0e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  )
}

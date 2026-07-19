import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const siteTitle = 'Rivas Law Firm, PLLC. | Representing the Rio Grande Valley'
const siteDescription = 'Experienced attorney representing the Rio Grande Valley, providing legal services in personal injury, family law, property law, and criminal defense.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rivaslawrgv.com'),
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Rivas Law Firm, PLLC.',
    url: 'https://www.rivaslawrgv.com',
    title: siteTitle,
    description: siteDescription,
    images: [{ url: '/images/LawFirm.webp', alt: 'Rivas Law Firm, PLLC.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/images/LawFirm.webp'],
  },
}

const legalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  '@id': 'https://www.rivaslawrgv.com/#firm',
  name: 'Rivas Law Firm, PLLC.',
  url: 'https://www.rivaslawrgv.com/',
  telephone: '+1-956-331-8777',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '125 E. Caffery Ave',
    addressLocality: 'Pharr',
    addressRegion: 'TX',
    postalCode: '78577',
    addressCountry: 'US',
  },
  areaServed: [
    'Pharr, TX',
    'McAllen, TX',
    'San Juan, TX',
    'Weslaco, TX',
    'Mission, TX',
    'Rio Grande City, TX',
    'Donna, TX',
    'Alamo, TX',
    'Hidalgo County, TX',
    'Rio Grande Valley, TX',
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00',
  },
  founder: {
    '@type': 'Person',
    name: 'Israel Lee Rivas',
  },
  sameAs: [
    'https://www.facebook.com/irivaslawfirm/',
    'https://www.instagram.com/rivaslawfirm/',
    'https://www.tiktok.com/@rivaslawfirm',
  ],
}

export const viewport: Viewport = {
  themeColor: '#1a2744',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

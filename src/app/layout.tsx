import type { Metadata } from 'next'
import { Montserrat, Oswald, Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-montserrat',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-oswald',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MESSIKA PARIS - Gift Selection',
  description: 'Messika Paris luxury jewelry featuring the moving diamond bangle collection. Discover our exclusive gift selection.',
  keywords: ['Messika', 'Paris', 'Jewelry', 'Luxury', 'Diamonds', 'Gift Selection'],
  openGraph: {
    title: 'MESSIKA PARIS - Gift Selection',
    description: 'Discover Messika Paris exclusive gift selection',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${oswald.variable} ${playfair.variable} ${inter.variable}`}>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}

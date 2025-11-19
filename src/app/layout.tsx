import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MAIA Bespoke - Luxury Stone Furniture',
  description: 'MAIA Bespoke crafts aesthetic and desirable works of art in bespoke stone furniture. Discover an elucidated world of extravagance with incomparable perfection.',
  keywords: ['MAIA Bespoke', 'Bespoke Furniture', 'Stone Furniture', 'Luxury Furniture', 'Custom Furniture', 'Backlit Stone', 'Hard Stone', 'Shell Stone', 'Premium Collections'],
  openGraph: {
    title: 'MAIA Bespoke - Luxury Stone Furniture',
    description: 'Discover bespoke stone furniture crafted to incomparable perfection',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}

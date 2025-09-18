import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Velocity.AI - Accelerate Your Future',
  description: 'Modern AI-powered solutions for the next generation of innovation. Join the velocity revolution.',
  keywords: ['AI', 'Artificial Intelligence', 'Machine Learning', 'Innovation', 'Technology', 'Velocity'],
  authors: [{ name: 'Velocity.AI Team' }],
  metadataBase: new URL('https://velocity-ai.vercel.app'),
  openGraph: {
    title: 'Velocity.AI - Accelerate Your Future',
    description: 'Modern AI-powered solutions for the next generation of innovation.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velocity.AI - Accelerate Your Future',
    description: 'Modern AI-powered solutions for the next generation of innovation.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#667eea',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
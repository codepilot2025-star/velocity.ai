import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Velocity.ai - Accelerate Your AI Journey',
  description: 'Velocity.ai is a cutting-edge AI platform that accelerates innovation and transforms businesses through intelligent automation and machine learning solutions.',
  keywords: 'AI, artificial intelligence, machine learning, automation, velocity, innovation',
  authors: [{ name: 'Velocity.ai Team' }],
  openGraph: {
    title: 'Velocity.ai - Accelerate Your AI Journey',
    description: 'Transform your business with cutting-edge AI solutions',
    url: 'https://velocity.ai',
    siteName: 'Velocity.ai',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velocity.ai - Accelerate Your AI Journey',
    description: 'Transform your business with cutting-edge AI solutions',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
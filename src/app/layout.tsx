import '@/styles/globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { siteConfig } from '@/constant/config'
import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png'
  }
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={cn(fontSans.variable)}>{children}</body>
    </html>
  )
}

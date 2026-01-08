import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { I18nProvider } from "@/lib/i18n"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Duopps | Digital Agency - Web Development, Branding & Performance Ads",
  description:
    "Duopps is a digital agency specializing in custom websites, web apps, e-commerce, automation, branding, and performance advertising. We build digital experiences that convert.",
  keywords: ["digital agency", "web development", "branding", "e-commerce", "automation", "performance marketing"],
  authors: [{ name: "Duopps" }],
  openGraph: {
    title: "Duopps | Digital Agency",
    description:
      "We build digital experiences that convert. Custom websites, web apps, e-commerce, and performance advertising.",
    url: "https://duopps.com",
    siteName: "Duopps",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duopps | Digital Agency",
    description: "We build digital experiences that convert.",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        <div className="noise-overlay" />
        <I18nProvider>{children}</I18nProvider>
        <Analytics />
      </body>
    </html>
  )
}

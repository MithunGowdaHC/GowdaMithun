import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mithun Gowda HC - Digital Marketer & Frontend Developer",
  description:
    "Premium portfolio of Mithun Gowda HC - A creative and data-driven Digital Marketing and Frontend Development professional specializing in Amazon Ads, Google Ads, and React development.",
  keywords: "Digital Marketing, Frontend Development, Amazon Ads, Google Ads, React, Next.js, Portfolio",
  authors: [{ name: "Mithun Gowda HC" }],
  openGraph: {
    title: "Mithun Gowda HC - Digital Marketer & Frontend Developer",
    description: "I turn campaigns into clicks, and code into conversions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mithun Gowda HC - Digital Marketer & Frontend Developer",
    description: "I turn campaigns into clicks, and code into conversions.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

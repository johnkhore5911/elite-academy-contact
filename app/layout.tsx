import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Elite Academy - Support & Help Center",
  description:
    "Get help and support for Elite Academy app. Contact us for any questions about mock tests, courses, or technical issues. We are here to help you succeed in your government exam preparation.",
  keywords: "Elite Academy, support, help, government exams, mock tests, courses, contact",
  authors: [{ name: "Elite Academy Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Elite Academy - Support & Help Center",
    description:
      "Get help and support for Elite Academy app. Contact us for any questions about mock tests, courses, or technical issues.",
    type: "website",
    locale: "en_US",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Elite Academy Support",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

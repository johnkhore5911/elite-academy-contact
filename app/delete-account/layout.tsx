import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Delete Account - Elite Academy",
  description: "Request account deletion for Elite Academy app. Learn about data deletion process and what information is removed when you delete your account.",
  keywords: "Elite Academy, delete account, remove account, data deletion, account removal, privacy",
  authors: [{ name: "Elite Academy Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Delete Account - Elite Academy",
    description: "Request account deletion for Elite Academy app. Learn about data deletion process and what information is removed when you delete your account.",
    type: "website",
    locale: "en_US",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Elite Academy - Delete Account",
  },
  generator: 'v0.dev'
}

export default function DeleteAccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
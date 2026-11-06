import type React from "react"
import type { Metadata, Viewport } from "next"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Terms & Conditions - Elite Academy",
  description: "Elite Academy Terms & Conditions for using our government exam preparation app.",
  robots: "index, follow",
  openGraph: {
    title: "Terms & Conditions - Elite Academy",
    description: "Elite Academy Terms & Conditions for using our government exam preparation app.",
    type: "website",
  },
}

export default function TermLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

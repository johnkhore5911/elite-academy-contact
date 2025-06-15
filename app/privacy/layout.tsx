import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Elite Academy",
  description:
    "Elite Academy Privacy Policy. Learn how we collect, use, and protect your personal information while using our government exam preparation app.",
  keywords: "Elite Academy, privacy policy, data protection, government exams, mock tests",
  robots: "index, follow",
  openGraph: {
    title: "Privacy Policy - Elite Academy",
    description: "Elite Academy Privacy Policy. Learn how we collect, use, and protect your personal information.",
    type: "website",
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

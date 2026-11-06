import Link from "next/link"

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By downloading, registering, or using the Elite Academy app, you agree to these Terms & Conditions. If you do not agree, please do not use the app.",
  },
  {
    title: "2. Use of the App",
    body: "Elite Academy provides mock tests and study material for government exam preparation. You agree to use the app only for lawful, personal, educational purposes and not to copy, share, resell, or misuse any content.",
  },
  {
    title: "3. User Account",
    body: "You are responsible for keeping your login details safe and for all activity under your account. Please provide accurate information when registering.",
  },
  {
    title: "4. Purchases & Subscriptions",
    body: "Purchases, including mock tests and Tracker Premium, are processed through your Apple App Store or Google Play account. Tracker Premium is an auto-renewing subscription that renews unless canceled at least 24 hours before the end of the current period. You can manage or cancel it anytime in your store account settings. Payments are non-refundable except where required by Apple's or Google's refund policies.",
  },
  {
    title: "5. Intellectual Property",
    body: "All content in the app, including questions, tests, text, and design, belongs to Elite Academy and may not be reproduced or distributed without written permission.",
  },
  {
    title: "6. Disclaimer",
    body: "This app is not affiliated with any government entity or official examination authority. Content is provided for educational and exam preparation purposes only, and we do not guarantee any exam result.",
  },
  {
    title: "7. Account Termination",
    body: "We may suspend or terminate accounts that violate these terms. You may delete your account at any time from the Delete Account page.",
  },
  {
    title: "8. Changes to Terms",
    body: "We may update these terms from time to time. Continued use of the app after changes means you accept the updated terms.",
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">EA</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Elite Academy</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/support" className="text-gray-600 hover:text-blue-600 transition-colors">
              Support
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/term" className="text-blue-600 font-medium">
              Terms
            </Link>
          </nav>
        </div>
      </header>

      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-center mb-4" style={{ fontSize: "28px", fontWeight: 700, color: "#1f2937" }}>
            Terms &amp; Conditions
          </h1>
          <p className="text-center mb-10" style={{ fontSize: "16px", color: "#374151", lineHeight: "24px" }}>
            Please read these terms carefully before using Elite Academy.
          </p>

          <div className="space-y-6">
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="mb-2" style={{ fontSize: "20px", fontWeight: 600, color: "#1f2937" }}>
                  {s.title}
                </h2>
                <p style={{ fontSize: "16px", color: "#374151", lineHeight: "24px" }}>{s.body}</p>
              </section>
            ))}
          </div>

          <p className="mt-10 text-center" style={{ fontSize: "16px", color: "#374151" }}>
            Questions?{" "}
            <Link href="/support" className="text-blue-600 font-medium hover:underline">
              Contact Support
            </Link>
          </p>
        </div>
      </main>

      <footer className="bg-white border-t mt-16">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center text-gray-600">
          © 2025 Elite Academy. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

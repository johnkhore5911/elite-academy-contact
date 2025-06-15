import { Shield, Lock, Database, CreditCard, Eye, Home, HelpCircle } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">EA</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">Elite Academy</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/support" className="text-gray-600 hover:text-blue-600 transition-colors">
                Support
              </Link>
              <Link href="/privacy" className="text-blue-600 font-medium">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {/* Title */}
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1
                className="mb-4"
                style={{
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "#1f2937",
                }}
              >
                Privacy Policy
              </h1>
              <p
                style={{
                  fontSize: "16px",
                  color: "#374151",
                  lineHeight: "24px",
                }}
              >
                Welcome to Elite Academy. Your privacy is important to us, and we are committed to protecting your
                personal information.
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-8">
              {/* Information We Collect */}
              <section className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-center mb-4">
                  <Database className="w-6 h-6 text-blue-600 mr-3" />
                  <h2
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "#1f2937",
                    }}
                  >
                    📌 Information We Collect:
                  </h2>
                </div>
                <div
                  className="space-y-4"
                  style={{
                    fontSize: "16px",
                    color: "#374151",
                    lineHeight: "24px",
                  }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <strong>Email Address:</strong> Collected during registration for account creation and
                      communication.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <strong>Password:</strong> Securely stored and encrypted to protect your account.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <strong>Test Data & Results:</strong> We store your mock test attempts, scores, and progress to
                      improve your experience.
                    </p>
                  </div>
                </div>
              </section>

              {/* How We Use Your Data */}
              <section className="bg-green-50 rounded-xl p-6 border border-green-100">
                <div className="flex items-center mb-4">
                  <Eye className="w-6 h-6 text-green-600 mr-3" />
                  <h2
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "#1f2937",
                    }}
                  >
                    📌 How We Use Your Data:
                  </h2>
                </div>
                <div
                  className="space-y-4"
                  style={{
                    fontSize: "16px",
                    color: "#374151",
                    lineHeight: "24px",
                  }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>To manage your account and allow access to purchased mock tests.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>To display your test results and track your progress.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>To notify you about updates, new tests, or important information related to your account.</p>
                  </div>
                </div>
              </section>

              {/* Payments & Refund Policy */}
              <section className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                <div className="flex items-center mb-4">
                  <CreditCard className="w-6 h-6 text-orange-600 mr-3" />
                  <h2
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "#1f2937",
                    }}
                  >
                    📌 Payments & Refund Policy:
                  </h2>
                </div>
                <div
                  className="space-y-4"
                  style={{
                    fontSize: "16px",
                    color: "#374151",
                    lineHeight: "24px",
                  }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>All purchases made within the app, including mock tests, are final and non-refundable.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Please review test details carefully before purchasing.</p>
                  </div>
                </div>
              </section>

              {/* Data Security */}
              <section className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                <div className="flex items-center mb-4">
                  <Lock className="w-6 h-6 text-purple-600 mr-3" />
                  <h2
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "#1f2937",
                    }}
                  >
                    📌 Data Security:
                  </h2>
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    color: "#374151",
                    lineHeight: "24px",
                  }}
                >
                  <p>
                    We take the security of your personal data seriously. Your credentials are securely encrypted, and
                    we do not share your information with any third-party services.
                  </p>
                </div>
              </section>
            </div>

            {/* Contact Section */}
            <div className="mt-12 text-center bg-gray-50 rounded-xl p-8">
              <h3
                className="mb-4"
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#1f2937",
                }}
              >
                Questions About Our Privacy Policy?
              </h3>
              <p
                className="mb-6"
                style={{
                  fontSize: "16px",
                  color: "#374151",
                  lineHeight: "24px",
                }}
              >
                If you have any questions or concerns about our privacy practices, please don't hesitate to contact us.
              </p>
              <Link
                href="/support"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200 hover:shadow-lg"
              >
                <HelpCircle className="w-4 h-4 mr-2" />
                Contact Support
              </Link>
            </div>

            {/* Last Updated */}
            <div className="mt-8 text-center">
              <p
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                }}
              >
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">EA</span>
              </div>
              <span className="text-gray-600">© 2025 Elite Academy. All rights reserved.</span>
            </div>

            <nav className="flex space-x-6">
              <Link
                href="/"
                className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-1"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <Link
                href="/support"
                className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-1"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Support</span>
              </Link>
              <Link href="/privacy" className="text-blue-600 font-medium flex items-center space-x-1">
                <Shield className="w-4 h-4" />
                <span>Privacy Policy</span>
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

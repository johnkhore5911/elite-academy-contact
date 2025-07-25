import { Mail, Phone, Home, Shield, HelpCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SupportPage() {
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
              <Link href="/support" className="text-blue-600 font-medium">
                Support
              </Link>
              <Link href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {/* Title */}
            <h1
              className="text-center mb-8"
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: "#1f2937",
              }}
            >
              📞 Need Help? We're Here for You!
            </h1>

            {/* Body Content */}
            <div
              className="space-y-6 mb-8"
              style={{
                fontSize: "16px",
                color: "#374151",
                lineHeight: "24px",
              }}
            >
              <p>
                At Elite Academy, your learning experience matters to us. If you have any questions, feedback, or face
                any issue while using the app — don't hesitate to reach out.
              </p>

              <p>
                Whether it's about a test, course, result query, or a technical issue — our team is ready to assist you.
              </p>

              {/* Email Section */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <p className="mb-4">📧 Drop us an email anytime at:</p>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <a
                    href="mailto:johnkhore26@gmail.com"
                    className="hover:underline transition-colors"
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#3b82f6",
                    }}
                  >
                    johnkhore26@gmail.com
                  </a>
                </div>
              </div>

              <p className="text-center font-medium">We aim to respond to every query within 24 hours.</p>

              <p className="text-center">Your success is our mission — let's crack those exams together! 💪✨</p>
            </div>

            {/* Contact Button */}
            <div className="text-center">
              <Button
                asChild
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg"
              >
                <a href="mailto:johnkhore26@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </a>
              </Button>
            </div>
          </div>

          {/* Additional Support Options */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
              <HelpCircle className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">FAQ</h3>
              <p className="text-sm text-gray-600">Find quick answers to common questions</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
              <Phone className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Quick Response</h3>
              <p className="text-sm text-gray-600">We respond within 24 hours</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
              <Shield className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Secure</h3>
              <p className="text-sm text-gray-600">Your data is safe with us</p>
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
              <span className="text-gray-600">© 2024 Elite Academy. All rights reserved.</span>
            </div>

            <nav className="flex space-x-6">
              <Link
                href="/"
                className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-1"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <Link href="/support" className="text-blue-600 font-medium flex items-center space-x-1">
                <HelpCircle className="w-4 h-4" />
                <span>Support</span>
              </Link>
              <Link
                href="/privacy"
                className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-1"
              >
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

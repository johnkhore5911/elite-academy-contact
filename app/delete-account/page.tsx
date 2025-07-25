import { Mail, Phone, Home, Shield, HelpCircle, Trash2, AlertTriangle, Clock, Database } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50">
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
              <Link href="/delete-account" className="text-red-600 font-medium">
                Delete Account
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
              🗑️ Delete Your Elite Academy Account
            </h1>

            {/* Warning Notice */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">Important Notice</h3>
                  <p className="text-red-700 text-sm">
                    Account deletion is permanent and cannot be undone. Please make sure you want to proceed before requesting deletion.
                  </p>
                </div>
              </div>
            </div>

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
                We're sorry to see you go! If you wish to delete your Elite Academy account, please follow the steps below to request account deletion.
              </p>

              {/* Steps Section */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2 text-blue-500" />
                  Steps to Delete Your Account:
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Send an email to our support team using the button below</li>
                  <li>Include "Account Deletion Request" in the subject line</li>
                  <li>Provide your registered email address in the message</li>
                  <li>We will process your request within 7 business days</li>
                  <li>You will receive a confirmation email once deletion is complete</li>
                </ol>
              </div>

              {/* Email Section */}
              <div className="bg-red-50 rounded-lg p-6 border border-red-100">
                <p className="mb-4">📧 Send your deletion request to:</p>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-red-500" />
                  <a
                    href="mailto:johnkhore26@gmail.com?subject=Account Deletion Request - Elite Academy"
                    className="hover:underline transition-colors"
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#ef4444",
                    }}
                  >
                    johnkhore26@gmail.com
                  </a>
                </div>
              </div>

              {/* Data Information */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <h3 className="font-semibold text-blue-900 mb-4 flex items-center">
                  <Database className="w-5 h-5 mr-2" />
                  What Data Will Be Deleted:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                  <li>Your personal profile information</li>
                  <li>Test scores and performance history</li>
                  <li>Course progress and completion records</li>
                  <li>App preferences and settings</li>
                  <li>Any uploaded content or files</li>
                </ul>
              </div>

              {/* Retention Information */}
              <div className="bg-amber-50 rounded-lg p-6 border border-amber-100">
                <h3 className="font-semibold text-amber-900 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Data Retention Policy:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-amber-800 text-sm">
                  <li>Account deletion is processed within 7 business days</li>
                  <li>Some anonymized data may be retained for analytics purposes</li>
                  <li>Legal or regulatory required data may be kept as per applicable laws</li>
                  <li>Payment transaction records may be retained for financial compliance</li>
                </ul>
              </div>

              <p className="text-center font-medium">
                Need help with something else? Visit our <Link href="/support" className="text-blue-600 hover:underline">Support Page</Link> instead.
              </p>
            </div>

            {/* Contact Button */}
            <div className="text-center">
              <Button
                asChild
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg"
              >
                <a href="mailto:johnkhore26@gmail.com?subject=Account Deletion Request - Elite Academy&body=Hello Elite Academy Team,%0D%0A%0D%0AI would like to request the deletion of my Elite Academy account.%0D%0A%0D%0ARegistered Email: [Please enter your registered email address here]%0D%0A%0D%0AThank you.">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Request Account Deletion
                </a>
              </Button>
            </div>
          </div>

          {/* Additional Information Cards */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
              <Clock className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Processing Time</h3>
              <p className="text-sm text-gray-600">Account deletion within 7 business days</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
              <Shield className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Secure Process</h3>
              <p className="text-sm text-gray-600">Your data is handled securely during deletion</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
              <HelpCircle className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
              <p className="text-sm text-gray-600">Contact support for any questions</p>
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
              <Link href="/support" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-1">
                <HelpCircle className="w-4 h-4" />
                <span>Support</span>
              </Link>
              <Link href="/delete-account" className="text-red-600 font-medium flex items-center space-x-1">
                <Trash2 className="w-4 h-4" />
                <span>Delete Account</span>
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
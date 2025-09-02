import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const HelpAndSupport = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-12 px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-10">
          Need Help? We’re Here for You
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
          Find answers to common questions or reach out to us directly.  
          Our support team is available 24/7 to assist you.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-white dark:bg-gray-800 shadow">
            <h3 className="font-medium">How do I track my order?</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              You can track your order in the “My Orders” section after logging
              into your account.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-gray-800 shadow">
            <h3 className="font-medium">Can I return a product?</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Yes, products can be returned within 7 days if they are unused and
              in original packaging.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
          <p className="mb-4">
            📍 123 Green Road, Dhaka, Bangladesh  
          </p>
          <p className="mb-2">📞 +880 123 456 789</p>
          <p className="mb-6">✉️ support@agrolink.com</p>
          <button className="px-6 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700 transition">
            Send Message
          </button>
        </div>
      </section>

      {/* Support Channels */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Support Channels
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 text-center">
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow">
            💬 <h3 className="font-medium mt-2">Live Chat</h3>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow">
            📞 <h3 className="font-medium mt-2">Phone Support</h3>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow">
            📧 <h3 className="font-medium mt-2">Email Support</h3>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow">
            📚 <h3 className="font-medium mt-2">Help Center</h3>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">We Value Your Feedback</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Help us improve by sharing your experience.
          </p>
          <textarea
            rows="4"
            className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
            placeholder="Write your feedback..."
          />
          <button className="mt-4 px-6 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700 transition">
            Submit Feedback
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HelpAndSupport;
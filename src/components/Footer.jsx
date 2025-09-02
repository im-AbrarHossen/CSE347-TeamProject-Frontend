import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-200 dark:bg-gray-900 text-base-content dark:text-gray-300">
      <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-green-600 dark:text-green-400">
            AgroLink
          </h2>
          <p className="mt-3 text-sm">
            Empowering Bangladeshi farmers by connecting them directly with
            buyers, ensuring fair pricing and sustainable growth.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-green-600 dark:hover:text-green-400">Home</a></li>
            <li><a href="/about" className="hover:text-green-600 dark:hover:text-green-400">About Us</a></li>
            <li><a href="/marketplace" className="hover:text-green-600 dark:hover:text-green-400">Marketplace</a></li>
            <li><a href="/contact" className="hover:text-green-600 dark:hover:text-green-400">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-600 dark:hover:text-green-400">Farmer Support</a></li>
            <li><a href="#" className="hover:text-green-600 dark:hover:text-green-400">Guides</a></li>
            <li><a href="#" className="hover:text-green-600 dark:hover:text-green-400">Blog</a></li>
            <li><a href="#" className="hover:text-green-600 dark:hover:text-green-400">FAQs</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
          <p className="text-sm mb-3">Subscribe to get the latest updates on agriculture and pricing.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-lg border border-gray-300 dark:border-gray-700 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-4 rounded-r-lg hover:bg-green-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-6">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} AgroLink. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-green-600 dark:hover:text-green-400">Facebook</a>
            <a href="#" className="hover:text-green-600 dark:hover:text-green-400">Twitter</a>
            <a href="#" className="hover:text-green-600 dark:hover:text-green-400">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
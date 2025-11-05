import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Blackwood Method
            </h3>
            <p className="text-gray-400 max-w-md">
              AI-powered workflows and tools designed specifically for digital
              marketing agencies. Save time, increase efficiency, and deliver
              better results for your clients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Services
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/store">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Store
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/demo">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Demo
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <p className="text-gray-400 mb-2">
              Ready to transform your agency with AI?
            </p>
            <Link href="/contact">
              <span className="text-primary hover:text-primary-dark transition-colors cursor-pointer">
                Schedule a Demo →
              </span>
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>
            © {currentYear} Blackwood Method. All rights reserved.
          </p>
          <p className="mt-2 text-gray-600">
            Built by Jaden Varner — empowering agencies to evolve beyond bottlenecks.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Link } from 'wouter';
import { Download, Settings, RefreshCw, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Store() {
  const digitalProducts = [
    {
      title: '10 AI Workflows for Agencies',
      description: 'Ready-to-use automation templates',
      price: '$29',
      icon: Download,
    },
    {
      title: 'Agency Automation Blueprint',
      description: 'Complete guide to AI implementation',
      price: '$24',
      icon: Download,
    },
    {
      title: 'Client Reporting Dashboard Template',
      description: 'Plug-and-play reporting system',
      price: '$19',
      icon: Download,
    },
    {
      title: 'AI-Powered Content Calendar',
      description: '90-day content planning system',
      price: '$14',
      icon: Download,
    },
    {
      title: 'AI Client Onboarding Flow',
      description: 'Automated onboarding process map',
      price: '$19',
      icon: Download,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI Tools & Systems Built for Agencies
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Digital downloads, done-for-you services, and monthly retainers to
            transform your agency operations
          </p>
        </div>
      </section>

      {/* Digital Downloads Section */}
      <section id="downloads" className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">🧠 Digital AI Resources</h2>
            <p className="section-subtitle">
              Tools to Empower Your Agency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {digitalProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <product.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    {product.price}
                  </span>
                  <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-6 rounded-lg transition-colors text-sm">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">⚙️ AI Services for Agencies</h2>
            <p className="section-subtitle">
              Done-For-You Systems That Scale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Campaign Automation Setup
              </h3>
              <p className="text-gray-600 mb-4">
                Turn marketing operations into an autonomous growth engine
              </p>
              <div className="mb-4">
                <div className="text-sm text-gray-500">Starting at</div>
                <div className="text-2xl font-bold text-primary">$1,200</div>
              </div>
              <Link href="/services">
                <button className="btn-primary w-full">
                  Learn More
                </button>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Full Service Package
              </h3>
              <p className="text-gray-600 mb-4">
                Complete AI transformation with all services included
              </p>
              <div className="mb-4">
                <div className="text-sm text-gray-500">Starting at</div>
                <div className="text-2xl font-bold text-primary">$5,000</div>
              </div>
              <Link href="/contact">
                <button className="btn-primary w-full">
                  Get Quote
                </button>
              </Link>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/services">
              <button className="btn-secondary">
                View All AI Services →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Subscriptions Section */}
      <section id="subscriptions" className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">🔁 Monthly AI Retainers</h2>
            <p className="section-subtitle">
              Recurring Solutions for Agencies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                AI Content Pack
              </h3>
              <div className="text-3xl font-bold text-primary mb-4">
                $150/mo
              </div>
              <p className="text-gray-600 mb-6 text-sm">
                15 social posts, 4 video scripts, monthly prompt pack
              </p>
              <button className="btn-primary w-full">
                Subscribe
              </button>
            </div>

            <div className="bg-white border-2 border-primary rounded-xl p-8 shadow-xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Reporting Dashboard
              </h3>
              <div className="text-3xl font-bold text-primary mb-4">
                $200/mo
              </div>
              <p className="text-gray-600 mb-6 text-sm">
                Monthly updated dashboard with automated insights
              </p>
              <button className="btn-primary w-full">
                Subscribe
              </button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Prompt Library
              </h3>
              <div className="text-3xl font-bold text-primary mb-4">
                $75/mo
              </div>
              <p className="text-gray-600 mb-6 text-sm">
                Fresh AI prompts delivered monthly for all use cases
              </p>
              <button className="btn-primary w-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get AI Updates and Agency Tools
          </h2>
          <p className="text-gray-300 mb-8">
            Join the Blackwood List — Get early access to new AI tools, exclusive discounts, and agency growth tips
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

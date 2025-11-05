import { Link } from 'wouter';
import { Zap, BarChart3, Users, FileText, Lightbulb, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Services() {
  const services = [
    {
      icon: Zap,
      title: 'AI Campaign Automation Setup',
      tagline: 'Turn marketing operations into an autonomous growth engine.',
      included: [
        'AI-assisted ad copy & creative generation',
        'Automated A/B testing & performance feedback',
        'Smart audience segmentation workflows',
        'Integration with Google Ads, Meta, or CRM tools',
        'Weekly optimization logic',
      ],
      setup: '$1,200+',
      monthly: '$500/month',
      cta: 'Book Consultation',
      ctaLink: '/contact',
    },
    {
      icon: BarChart3,
      title: 'AI Client Reporting & Insights Dashboard',
      tagline: 'Deliver next-level clarity to your clients — without manual reports.',
      included: [
        'Custom dashboard (Google Data Studio / Notion / Sheets)',
        'Auto-generated insight summaries',
        'Automated email reports (weekly or monthly)',
        'Optional Slack/email integration',
        'Client-ready presentation view',
      ],
      setup: '$2,000+',
      monthly: '$400/month',
      cta: 'Request Demo',
      ctaLink: '/demo',
    },
    {
      icon: Users,
      title: 'AI Lead & Outreach Automation System',
      tagline: 'Generate and qualify leads on autopilot.',
      included: [
        'AI-crafted outreach templates',
        'Automated CRM follow-up sequences',
        'LinkedIn or email lead integration',
        'Prospect tracking dashboard',
        'Lead scoring automation',
      ],
      setup: '$1,500+',
      monthly: '$300–$600/month',
      cta: 'Get a Quote',
      ctaLink: '/contact',
    },
    {
      icon: FileText,
      title: 'AI Content Production Engine',
      tagline: 'Consistent, branded content — powered by automation.',
      included: [
        'Custom AI prompt library & brand tone setup',
        '15–30 AI-generated social posts/month',
        'Blog outlines or ad copy packs',
        'Canva templates for visuals',
        'Scheduling & posting automation',
      ],
      setup: '$800+',
      monthly: '$250/month',
      cta: 'Start Trial',
      ctaLink: '/contact',
    },
    {
      icon: Lightbulb,
      title: 'AI Strategy Blueprint',
      tagline: "Not sure where to begin? We'll design your roadmap.",
      included: [
        '60-minute strategy call',
        'Audit of current systems',
        'Personalized roadmap with tools & automations',
        'Implementation checklist',
      ],
      setup: '$500',
      monthly: null,
      cta: 'Book Strategy Call',
      ctaLink: '/contact',
    },
  ];

  const subscriptions = [
    {
      title: 'AI Content Pack',
      price: '$150/month',
      description: '15 AI-generated social posts, 4 video scripts, monthly prompt pack',
      popular: true,
    },
    {
      title: 'Reporting Dashboard Subscription',
      price: '$200/month',
      description: 'Monthly updated dashboard with automated insights and summaries',
      popular: false,
    },
    {
      title: 'Prompt Library Subscription',
      price: '$75/month',
      description: 'Fresh AI prompts delivered monthly for content, ads, and outreach',
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI-Powered Services for{' '}
              <span className="text-primary">Marketing Agencies</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Transform your agency operations with intelligent automation
              designed specifically for your workflows. Save time, increase
              output, and deliver consistent quality.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Done-For-You AI Services</h2>
            <p className="section-subtitle">
              Premium implementation services with ongoing support
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary hover:shadow-xl transition-all"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.tagline}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        What's Included:
                      </h4>
                      <ul className="space-y-2">
                        {service.included.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-200">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Pricing:</div>
                        <div className="font-bold text-gray-900">
                          Setup: <span className="text-primary">{service.setup}</span>
                        </div>
                        {service.monthly && (
                          <div className="font-semibold text-gray-700 text-sm">
                            Ongoing: {service.monthly}
                          </div>
                        )}
                      </div>

                      <Link href={service.ctaLink}>
                        <button className="btn-primary">
                          {service.cta}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Monthly Retainer Products</h2>
            <p className="section-subtitle">
              Recurring AI solutions delivered every month
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {subscriptions.map((sub, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-8 border-2 ${
                  sub.popular
                    ? 'border-primary shadow-xl'
                    : 'border-gray-200'
                } hover:shadow-xl transition-all relative`}
              >
                {sub.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {sub.title}
                  </h3>
                  <div className="text-3xl font-bold text-primary mb-4">
                    {sub.price}
                  </div>
                  <p className="text-gray-600 mb-6">{sub.description}</p>

                  <Link href="/contact">
                    <button
                      className={
                        sub.popular
                          ? 'btn-primary w-full'
                          : 'btn-secondary w-full'
                      }
                    >
                      Subscribe Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Schedule Your Free AI Efficiency Demo
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let us show you exactly how AI can transform your agency's
            workflows. No obligation, just actionable insights.
          </p>
          <Link href="/contact">
            <button className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg">
              Book Your Free Demo Now
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

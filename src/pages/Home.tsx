import { Link } from 'wouter';
import { Clock, TrendingUp, Target, Zap, BarChart3, Users } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Home() {
  const benefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description:
        'Automate repetitive tasks and reclaim 3-10 hours every week for strategic work that grows your agency.',
    },
    {
      icon: TrendingUp,
      title: 'Increase Client Output',
      description:
        'Deliver more campaigns, reports, and content without adding headcount or burning out your team.',
    },
    {
      icon: Target,
      title: 'Consistent Quality',
      description:
        'AI-powered workflows ensure every deliverable meets your standards, every single time.',
    },
  ];

  const features = [
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate emails, meetings, and reporting tasks',
    },
    {
      icon: BarChart3,
      title: 'Smart Analytics',
      description: 'AI-powered insights and client reporting',
    },
    {
      icon: Users,
      title: 'Team Efficiency',
      description: 'Streamline collaboration and task management',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                AI Solutions for Marketing Agencies
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Helping Digital Marketing Agencies{' '}
                <span className="text-primary">Save Hours Every Week</span> with
                AI-Powered Workflows
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Transform your agency operations with intelligent automation.
                Spend less time on repetitive tasks and more time delivering
                exceptional results for your clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo">
                  <button className="btn-primary">
                    See AI Workflows in Action
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="btn-secondary">
                    Request Free Demo
                  </button>
                </Link>
              </div>
            </div>

            {/* Visual Placeholder */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border-2 border-primary/20">
              <div className="bg-white rounded-lg shadow-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-semibold text-gray-500">
                    AI Workflow Active
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-primary rounded-full w-3/4"></div>
                  <div className="h-2 bg-gray-200 rounded-full"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-5/6"></div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary">8.5 hrs</div>
                    <div className="text-xs text-gray-500">Saved This Week</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary">47</div>
                    <div className="text-xs text-gray-500">Tasks Done</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Blackwood Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black border-y border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Why Blackwood Method?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              Blackwood Method was built to redefine how digital marketing
              agencies use AI — practical systems that save time, enhance client
              results, and scale human creativity.
            </p>
            <p className="text-gray-400 mb-8">
              We're not about hype or buzzwords. We build tools and workflows
              that actually work in the day-to-day chaos of agency life. From
              automating client reports to streamlining content creation, every
              solution is designed by marketers, for marketers.
            </p>
            <Link href="/store">
              <button className="btn-primary">
                See How AI Can Enhance Your Agency →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Why Marketing Agencies Choose Blackwood Method
            </h2>
            <p className="section-subtitle">
              Our AI-powered solutions are built specifically for the unique
              challenges digital marketing agencies face every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Powerful AI Tools at Your Fingertips
            </h2>
            <p className="section-subtitle">
              Everything you need to streamline your agency operations and
              deliver better results faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-primary transition-colors"
              >
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <button className="btn-primary">
                Explore All Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Agency?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of marketing agencies already saving time and
            delivering better results with AI-powered workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg">
                Schedule Free Demo
              </button>
            </Link>
            <Link href="/store">
              <button className="bg-primary-dark hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-lg transition-colors border-2 border-white">
                Browse AI Tools
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

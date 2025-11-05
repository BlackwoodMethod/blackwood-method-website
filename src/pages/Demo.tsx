import { Link } from 'wouter';
import { Upload, Sparkles, FileText, Calendar, Mail, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Demo() {
  const workflowSteps = [
    {
      step: 1,
      icon: Upload,
      title: 'Upload Client Brief',
      description: 'Drop your client brief, campaign goals, or project requirements into the system.',
      detail: 'Supports PDF, Word, or plain text input',
    },
    {
      step: 2,
      icon: Sparkles,
      title: 'AI Analyzes Requirements',
      description: 'Our AI instantly extracts key objectives, target audience, deliverables, and timelines.',
      detail: 'Processes in under 10 seconds',
    },
    {
      step: 3,
      icon: FileText,
      title: 'Generate Content Plan',
      description: 'Receive a complete content strategy with topics, formats, and distribution channels.',
      detail: "Customized to your agency's style",
    },
    {
      step: 4,
      icon: Calendar,
      title: 'Build Workflow Automation',
      description: 'AI creates automated workflows for content creation, approval, and publishing.',
      detail: 'Integrates with your existing tools',
    },
    {
      step: 5,
      icon: Mail,
      title: 'Client Communication',
      description: 'Auto-generate client-ready proposals, status updates, and progress reports.',
      detail: 'White-label ready',
    },
    {
      step: 6,
      icon: CheckCircle,
      title: 'Launch & Track',
      description: 'Deploy your campaign with built-in tracking, reporting, and optimization suggestions.',
      detail: 'Real-time performance monitoring',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-sm font-semibold mb-6 text-primary">
              <Sparkles className="w-4 h-4" />
              See AI in Action
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Watch AI Transform Your{' '}
              <span className="text-primary">Agency Workflow</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              From client brief to complete campaign plan in minutes, not days
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="btn-primary text-lg px-8">
                  Request Personalized Demo
                </button>
              </Link>
              <a href="#workflow">
                <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-colors border border-white/30">
                  See How It Works
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Visualization */}
      <section id="workflow" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">The AI Workflow Process</h2>
            <p className="section-subtitle">
              Watch how Blackwood Method's AI transforms a simple client brief into a complete, actionable campaign
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {workflowSteps.map((step, index) => (
                <div key={step.step} className="relative">
                  {index < workflowSteps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-primary to-transparent hidden md:block"></div>
                  )}

                  <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 md:p-8 hover:border-primary hover:shadow-lg transition-all">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center">
                            <step.icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white">
                            {step.step}
                          </div>
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-lg mb-2">
                          {step.description}
                        </p>
                        <p className="text-primary text-sm font-semibold">
                          {step.detail}
                        </p>
                      </div>

                      {index < workflowSteps.length - 1 && (
                        <div className="hidden lg:block">
                          <ArrowRight className="w-6 h-6 text-primary" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Mockup */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Try It Yourself (Demo)</h2>
              <p className="section-subtitle">
                Upload a sample brief and watch AI create a complete campaign plan
              </p>
            </div>

            <div className="bg-white rounded-xl border-2 border-gray-200 p-8 md:p-12">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-primary transition-all cursor-pointer group">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Upload className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Drop Your Client Brief Here
                </h3>
                <p className="text-gray-600 mb-6">
                  Or click to browse files (PDF, Word, TXT)
                </p>
                <button className="btn-primary">
                  <Upload className="w-4 h-4 mr-2 inline" />
                  Upload Sample Brief
                </button>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      AI Analysis Complete
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Generated in 8.3 seconds
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>30-day content calendar created</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>12 social media posts drafted</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Email campaign sequence generated</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Client proposal ready for review</span>
                  </div>
                </div>
              </div>

              <p className="text-center text-gray-500 text-sm mt-6">
                This is a demonstration interface. For full functionality,{' '}
                <Link href="/contact">
                  <span className="text-primary hover:underline cursor-pointer">
                    request a personalized demo
                  </span>
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to See This in Your Agency?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo and we'll show you exactly how AI can transform your specific workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg">
                Request Personalized Demo
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

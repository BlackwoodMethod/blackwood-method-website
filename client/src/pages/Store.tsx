import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import {
  Workflow,
  BookOpen,
  BarChart3,
  Calendar,
  GitBranch,
  Download,
  CheckCircle,
  Star,
  Sparkles,
  Mail,
  Settings,
  MessageSquare,
  LayoutDashboard,
  Lightbulb,
  RefreshCw,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useState, useEffect } from "react";
import { updatePageSEO } from "@/lib/seo";

export default function Store() {
  useEffect(() => {
    updatePageSEO("store");
  }, []);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  // Scroll to section if hash is present
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmailSubmitted(true);
    setTimeout(() => {
      setEmailSubmitted(false);
      setEmail("");
    }, 3000);
  };

  const digitalProducts = [
    {
      id: "ai-workflows",
      icon: Workflow,
      title: "10 AI Workflows for Marketing Agencies",
      price: "$19",
      description:
        "10-page guide showing exactly how agencies use AI for lead scoring, content creation, ad optimization, and client reporting.",
      features: [
        "10 proven AI workflows",
        "Step-by-step implementation",
        "Visual workflow diagrams",
        "Real agency examples",
      ],
      popular: true,
      gumroadLink: "https://gumroad.com/l/blackwood-ai-workflows",
    },
    {
      id: "automation-blueprint",
      icon: BookOpen,
      title: "Agency Automation Blueprint",
      price: "$29",
      description:
        "15-page editable guide showing agencies how to integrate AI tools into daily processes.",
      features: [
        "15-page comprehensive guide",
        "Editable template included",
        "AI integration strategies",
        "Workflow diagrams",
      ],
      popular: false,
      gumroadLink: "https://gumroad.com/l/blackwood-automation-blueprint",
    },
    {
      id: "reporting-dashboard",
      icon: BarChart3,
      title: "Client Reporting Dashboard",
      price: "$24",
      description:
        "Professional dashboard template for client KPI reports with customizable sections.",
      features: [
        "Visual dashboard layout",
        "Customizable KPI sections",
        "Graph placeholders",
        "HTML + PDF versions",
      ],
      popular: false,
      gumroadLink: "https://gumroad.com/l/blackwood-reporting-dashboard",
    },
    {
      id: "content-calendar",
      icon: Calendar,
      title: "AI-Powered Content Calendar",
      price: "$17",
      description:
        "30-day planner with AI prompt ideas and scheduling for all social platforms.",
      features: [
        "30-day content planner",
        "AI prompt suggestions",
        "Multi-platform scheduling",
        "Editable spreadsheet PDF",
      ],
      popular: false,
      gumroadLink: "https://gumroad.com/l/blackwood-content-calendar",
    },
    {
      id: "onboarding-flow",
      icon: GitBranch,
      title: "AI Client Onboarding Flow",
      price: "$14",
      description:
        "Flowchart mapping automated onboarding from lead to client with AI qualification steps.",
      features: [
        "Complete process flowchart",
        "Automated qualification steps",
        "Visual PDF diagram",
        "Ready to customize",
      ],
      popular: false,
      gumroadLink: "https://gumroad.com/l/blackwood-onboarding-flow",
    },
  ];

  const aiServices = [
    {
      id: "workflow-integration",
      icon: Settings,
      title: "AI Workflow Integration",
      price: "From $1,500",
      description:
        "Complete AI workflow setup customized for your agency. We analyze your processes, implement automation, and train your team.",
      features: [
        "Process analysis & mapping",
        "Custom AI tool integration",
        "Team training sessions",
        "30-day support included",
        "Ongoing optimization",
      ],
      timeline: "2-3 weeks",
      cta: "Book Consultation",
      ctaLink: "/contact",
    },
    {
      id: "communication-automation",
      icon: MessageSquare,
      title: "Client Communication Automation",
      price: "From $1,200",
      description:
        "Automate client emails, status updates, and reporting. Keep clients informed without manual work.",
      features: [
        "Email automation setup",
        "Client portal integration",
        "Automated status updates",
        "Custom templates",
        "CRM integration",
      ],
      timeline: "1-2 weeks",
      cta: "Get Quote",
      ctaLink: "/contact",
    },
    {
      id: "dashboard-development",
      icon: LayoutDashboard,
      title: "Custom Dashboard Development",
      price: "From $2,000",
      description:
        "Build custom client dashboards with real-time data, automated insights, and white-label branding.",
      features: [
        "Custom dashboard design",
        "Real-time data integration",
        "AI-powered insights",
        "White-label branding",
        "Mobile responsive",
      ],
      timeline: "3-4 weeks",
      cta: "Get Quote",
      ctaLink: "/contact",
    },
    {
      id: "strategy-blueprint",
      icon: Lightbulb,
      title: "AI Strategy Blueprint",
      price: "$500",
      description:
        "Comprehensive AI strategy document tailored to your agency with actionable implementation roadmap.",
      features: [
        "1-hour strategy call",
        "Custom AI roadmap",
        "Tool recommendations",
        "ROI projections",
        "Implementation timeline",
      ],
      timeline: "1 week",
      cta: "Book Consultation",
      ctaLink: "/contact",
    },
  ];

  const subscriptionProducts = [
    {
      id: "ai-content-pack",
      icon: RefreshCw,
      title: "AI Content Pack",
      price: "$299/month",
      description:
        "Monthly content templates, AI prompts, and social media calendars delivered to your inbox.",
      features: [
        "30 social media templates",
        "50+ AI content prompts",
        "Monthly content calendar",
        "Email campaign templates",
        "Trend analysis report",
        "Priority email support",
      ],
      deliverables: "Delivered 1st of each month",
      popular: true,
      ctaLink: "/contact",
    },
    {
      id: "reporting-retainer",
      icon: TrendingUp,
      title: "Automated Reporting Retainer",
      price: "$199/month",
      description:
        "Monthly client report templates with AI-generated insights and performance summaries.",
      features: [
        "Custom report templates",
        "AI-generated insights",
        "Performance benchmarks",
        "Trend analysis",
        "White-label ready",
        "Monthly updates",
      ],
      deliverables: "New templates monthly",
      popular: false,
      ctaLink: "/contact",
    },
    {
      id: "workflow-updates",
      icon: Zap,
      title: "Workflow Optimization Service",
      price: "$449/month",
      description:
        "Ongoing AI workflow optimization with monthly check-ins and continuous improvements.",
      features: [
        "Monthly optimization review",
        "New automation suggestions",
        "Tool updates & training",
        "Performance tracking",
        "Priority support",
        "Quarterly strategy calls",
      ],
      deliverables: "Monthly optimization report",
      popular: false,
      ctaLink: "/contact",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm font-semibold mb-6 text-blue-400">
              <Sparkles className="w-4 h-4" />
              Complete AI Solutions for Agencies
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                AI Tools and Systems Built for Agencies
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
              Automate. Scale. Thrive.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <a href="#downloads" className="hover:text-blue-400 transition-colors">
                Digital Downloads
              </a>
              <span>•</span>
              <a href="#services" className="hover:text-blue-400 transition-colors">
                AI Services
              </a>
              <span>•</span>
              <a href="#subscription" className="hover:text-blue-400 transition-colors">
                Monthly Retainers
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Downloads Section */}
      <section id="downloads" className="py-20 bg-black scroll-mt-20">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-3xl md:text-4xl font-bold mb-4">
              <span className="text-4xl">🧠</span>
              <h2 className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Digital AI Resources
              </h2>
            </div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Tools to Empower Your Agency — Download instantly and implement today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalProducts.map((product) => (
              <Card
                key={product.id}
                className={`bg-gradient-to-br from-gray-900 to-gray-800 border-2 hover:shadow-2xl hover:shadow-blue-500/20 transition-all relative group hover:scale-105 ${
                  product.popular
                    ? "border-blue-500 shadow-lg shadow-blue-500/10"
                    : "border-gray-700 hover:border-blue-500/50"
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-1 border-0">
                      <Star className="w-3 h-3 mr-1 inline" />
                      Best Seller
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <product.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-lg mb-2 text-white">
                    {product.title}
                  </CardTitle>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    {product.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4">{product.description}</p>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={product.gumroadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600"
                      size="lg"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Buy Now
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-900 to-black scroll-mt-20">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-3xl md:text-4xl font-bold mb-4">
              <span className="text-4xl">⚙️</span>
              <h2 className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                AI Services for Agencies
              </h2>
            </div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Done-For-You Systems That Scale — Premium implementation services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {aiServices.map((service) => (
              <Card
                key={service.id}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                      {service.timeline}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2 text-white">
                    {service.title}
                  </CardTitle>
                  <div className="text-2xl font-bold text-blue-400 mb-4">
                    {service.price}
                  </div>
                  <p className="text-gray-300">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a href={service.ctaLink}>
                    <Button
                      className="w-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-blue-600 hover:to-blue-500"
                      size="lg"
                    >
                      {service.cta}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription/Retainer Section */}
      <section id="subscription" className="py-20 bg-black scroll-mt-20">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-3xl md:text-4xl font-bold mb-4">
              <span className="text-4xl">🔁</span>
              <h2 className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Monthly AI Retainers
              </h2>
            </div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Recurring Solutions for Agencies — Continuous value delivered monthly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subscriptionProducts.map((product) => (
              <Card
                key={product.id}
                className={`bg-gradient-to-br from-gray-900 to-gray-800 border-2 hover:shadow-2xl hover:shadow-blue-500/20 transition-all relative group hover:scale-105 ${
                  product.popular
                    ? "border-blue-500 shadow-lg shadow-blue-500/10"
                    : "border-gray-700 hover:border-blue-500/50"
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-1 border-0">
                      <Star className="w-3 h-3 mr-1 inline" />
                      Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <product.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2 text-white">
                    {product.title}
                  </CardTitle>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                    {product.price}
                  </div>
                  <p className="text-xs text-gray-500">{product.deliverables}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4">{product.description}</p>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a href={product.ctaLink}>
                    <Button
                      className={`w-full ${
                        product.popular
                          ? "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600"
                          : "bg-gradient-to-r from-gray-700 to-gray-600 hover:from-blue-600 hover:to-blue-500"
                      }`}
                      size="lg"
                    >
                      Subscribe Now
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 border-0 shadow-2xl shadow-blue-500/20">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Join the Blackwood List
                </h2>
                <p className="text-blue-100 text-lg mb-8">
                  Get early access to AI tools, templates, and weekly agency insights.
                </p>

                {emailSubmitted ? (
                  <div className="py-4">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-300" />
                    </div>
                    <p className="text-white font-semibold text-lg">
                      You're on the list!
                    </p>
                    <p className="text-blue-100 text-sm mt-2">
                      Check your email for confirmation.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleEmailSubmit}
                    className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                  >
                    <Input
                      type="email"
                      placeholder="your@agency.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-white"
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
                    >
                      Subscribe
                    </Button>
                  </form>
                )}

                <p className="text-xs text-blue-200 mt-4">
                  No spam. Unsubscribe anytime.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-black border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">
              Trusted by Marketing Agencies Worldwide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border border-gray-700">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <p className="text-gray-300">Agencies Served</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border border-gray-700">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                  $2M+
                </div>
                <p className="text-gray-300">Time Saved (Value)</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border border-gray-700">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                  4.9/5
                </div>
                <p className="text-gray-300">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Agency with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start with a digital download, scale with our services, or subscribe for ongoing support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button
                size="lg"
                className="text-lg px-8 bg-white text-blue-600 hover:bg-gray-100 font-semibold"
              >
                Schedule Consultation
              </Button>
            </a>
            <a href="/demo">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-blue-800"
              >
                See AI Demo
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


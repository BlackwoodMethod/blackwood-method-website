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
} from "lucide-react";
import { useState } from "react";

export default function Store() {
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmailSubmitted(true);
    setTimeout(() => {
      setEmailSubmitted(false);
      setEmail("");
    }, 3000);
  };

  const products = [
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
        "Downloadable PDF",
      ],
      popular: true,
      gumroadLink: "https://gumroad.com/l/blackwood-ai-workflows",
      preview: "10 complete workflows with icons and descriptions",
    },
    {
      id: "automation-blueprint",
      icon: BookOpen,
      title: "Agency Automation Blueprint",
      price: "$29",
      description:
        "15-page editable guide showing agencies how to integrate AI tools into daily processes. Includes workflow diagrams and AI tips.",
      features: [
        "15-page comprehensive guide",
        "Editable template included",
        "AI integration strategies",
        "Workflow diagrams",
        "Cover, TOC, and CTA sections",
      ],
      popular: false,
      gumroadLink: "https://gumroad.com/l/blackwood-automation-blueprint",
      preview: "Ebook with cover, TOC, and actionable content",
    },
    {
      id: "reporting-dashboard",
      icon: BarChart3,
      title: "Client Reporting Dashboard",
      price: "$24",
      description:
        "Professional dashboard template for client KPI reports. Includes logo placement, performance metrics, graphs, and notes sections.",
      features: [
        "Visual dashboard layout",
        "Customizable KPI sections",
        "Graph placeholders",
        "Logo and branding areas",
        "HTML + PDF versions",
      ],
      popular: false,
      gumroadLink: "https://gumroad.com/l/blackwood-reporting-dashboard",
      preview: "Canva-style template with preview",
    },
    {
      id: "content-calendar",
      icon: Calendar,
      title: "AI-Powered Content Calendar",
      price: "$17",
      description:
        "30-day planner with sections for post types, AI prompt ideas, and scheduling. Formatted for all social platforms.",
      features: [
        "30-day content planner",
        "AI prompt suggestions",
        "Multi-platform scheduling",
        "Automation notes included",
        "Editable spreadsheet PDF",
      ],
      popular: false,
      gumroadLink: "https://gumroad.com/l/blackwood-content-calendar",
      preview: "Monthly calendar with AI prompts",
    },
    {
      id: "onboarding-flow",
      icon: GitBranch,
      title: "AI Client Onboarding Flow",
      price: "$14",
      description:
        "Flowchart mapping automated onboarding from lead to client. Includes AI qualification, proposal, payment, and setup steps.",
      features: [
        "Complete process flowchart",
        "Automated qualification steps",
        "Visual PDF diagram",
        "Preview image included",
        "Ready to customize",
      ],
      popular: false,
      gumroadLink: "https://gumroad.com/l/blackwood-onboarding-flow",
      preview: "Process map from lead to client",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm font-semibold mb-6 text-blue-400">
              <Sparkles className="w-4 h-4" />
              Premium AI Tools for Agencies
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Professional AI Resources
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Built for Marketing Agencies
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Download instantly. Implement immediately. Transform your agency
              operations with premium AI templates and workflows.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span>Instant Download</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span>Lifetime Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span>Email Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-black">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className={`bg-gradient-to-br from-gray-900 to-gray-800 border-2 hover:shadow-2xl hover:shadow-blue-500/20 transition-all relative group ${
                  product.popular
                    ? "border-blue-500 shadow-lg shadow-blue-500/10"
                    : "border-gray-700 hover:border-blue-500/50"
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-1 border-0">
                      <Star className="w-3 h-3 mr-1 inline" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2 text-white">
                    {product.title}
                  </CardTitle>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                      {product.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">{product.preview}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">{product.description}</p>

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
                      className={`w-full group-hover:scale-105 transition-transform ${
                        product.popular
                          ? "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600"
                          : "bg-gradient-to-r from-gray-700 to-gray-600 hover:from-blue-600 hover:to-blue-500"
                      }`}
                      size="lg"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Buy & Download Now
                    </Button>
                  </a>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    Instant access • Lifetime updates • Email support
                  </p>
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
                  Get Product Updates
                </h2>
                <p className="text-blue-100 text-lg mb-8">
                  Be the first to know when we release new AI tools and
                  templates. Plus, get exclusive discounts.
                </p>

                {emailSubmitted ? (
                  <div className="py-4">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-300" />
                    </div>
                    <p className="text-white font-semibold text-lg">
                      You're subscribed!
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
                      placeholder="your@email.com"
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
              Why Agencies Choose Blackwood Method
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
                  4.9/5
                </div>
                <p className="text-gray-300">Average Rating</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border border-gray-700">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <p className="text-gray-300">Email Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation and we'll recommend the best products
            for your agency's specific needs.
          </p>
          <a href="/contact">
            <Button
              size="lg"
              className="text-lg px-8 bg-white text-blue-600 hover:bg-gray-100 font-semibold"
            >
              Get Free Consultation
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}


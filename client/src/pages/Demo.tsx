import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import {
  Upload,
  Sparkles,
  FileText,
  Calendar,
  Mail,
  CheckCircle,
  ArrowRight,
  Zap,
  BarChart3,
  Target,
} from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import { updatePageSEO } from "@/lib/seo";

export default function Demo() {
  useEffect(() => {
    updatePageSEO("demo");
  }, []);
  const workflowSteps = [
    {
      step: 1,
      icon: Upload,
      title: "Upload Client Brief",
      description:
        "Drop your client brief, campaign goals, or project requirements into the system.",
      detail: "Supports PDF, Word, or plain text input",
    },
    {
      step: 2,
      icon: Sparkles,
      title: "AI Analyzes Requirements",
      description:
        "Our AI instantly extracts key objectives, target audience, deliverables, and timelines.",
      detail: "Processes in under 10 seconds",
    },
    {
      step: 3,
      icon: FileText,
      title: "Generate Content Plan",
      description:
        "Receive a complete content strategy with topics, formats, and distribution channels.",
      detail: "Customized to your agency's style",
    },
    {
      step: 4,
      icon: Calendar,
      title: "Build Workflow Automation",
      description:
        "AI creates automated workflows for content creation, approval, and publishing.",
      detail: "Integrates with your existing tools",
    },
    {
      step: 5,
      icon: Mail,
      title: "Client Communication",
      description:
        "Auto-generate client-ready proposals, status updates, and progress reports.",
      detail: "White-label ready",
    },
    {
      step: 6,
      icon: CheckCircle,
      title: "Launch & Track",
      description:
        "Deploy your campaign with built-in tracking, reporting, and optimization suggestions.",
      detail: "Real-time performance monitoring",
    },
  ];

  const useCases = [
    {
      icon: Target,
      title: "Campaign Planning",
      description:
        "Turn a 2-page brief into a 30-day campaign plan with content calendar, ad copy, and KPIs in minutes.",
      timeSaved: "Save 8+ hours",
    },
    {
      icon: BarChart3,
      title: "Client Reporting",
      description:
        "Automatically generate branded reports with AI-powered insights and recommendations.",
      timeSaved: "Save 5+ hours/week",
    },
    {
      icon: Zap,
      title: "Content Creation",
      description:
        "From blog posts to social media, AI drafts content aligned with brand voice and goals.",
      timeSaved: "Save 10+ hours/week",
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
              See AI in Action
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Watch AI Transform Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Agency Workflow
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
              From client brief to complete campaign plan in minutes, not days
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="text-lg px-8 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600"
                >
                  Request Personalized Demo
                </Button>
              </Link>
              <a href="#workflow">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-gray-600 text-white hover:bg-gray-800"
                >
                  See How It Works
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Visualization */}
      <section id="workflow" className="py-20 bg-black">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              The AI Workflow Process
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Watch how Blackwood Method's AI transforms a simple client brief into a complete, actionable campaign
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {workflowSteps.map((step, index) => (
                <div key={step.step} className="relative">
                  {/* Connector Line */}
                  {index < workflowSteps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-blue-500 to-transparent hidden md:block"></div>
                  )}

                  <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 hover:border-blue-500/50 transition-all">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        {/* Step Number & Icon */}
                        <div className="flex-shrink-0">
                          <div className="relative">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                              <step.icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-gray-900">
                              {step.step}
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-300 text-lg mb-2">
                            {step.description}
                          </p>
                          <p className="text-blue-400 text-sm font-semibold">
                            {step.detail}
                          </p>
                        </div>

                        {/* Arrow */}
                        {index < workflowSteps.length - 1 && (
                          <div className="hidden lg:block">
                            <ArrowRight className="w-6 h-6 text-blue-500" />
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Real Agency Use Cases
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              See how agencies are using AI workflows to save time and deliver better results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase) => (
              <Card
                key={useCase.title}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all group"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <useCase.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm font-semibold text-blue-400">
                    <Zap className="w-3 h-3" />
                    {useCase.timeSaved}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Mockup */}
      <section className="py-20 bg-black">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Try It Yourself (Demo)
              </h2>
              <p className="text-gray-400 text-lg">
                Upload a sample brief and watch AI create a complete campaign plan
              </p>
            </div>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700">
              <CardContent className="p-8 md:p-12">
                {/* Mock Upload Interface */}
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-12 text-center hover:border-blue-500/50 transition-all cursor-pointer group">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Upload className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Drop Your Client Brief Here
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Or click to browse files (PDF, Word, TXT)
                  </p>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Sample Brief
                  </Button>
                </div>

                {/* Mock Output Preview */}
                <div className="mt-8 p-6 bg-black/50 rounded-lg border border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">
                        AI Analysis Complete
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Generated in 8.3 seconds
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>30-day content calendar created</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>12 social media posts drafted</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Email campaign sequence generated</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Client proposal ready for review</span>
                    </div>
                  </div>
                </div>

                <p className="text-center text-gray-500 text-sm mt-6">
                  This is a demonstration interface. For full functionality,{" "}
                  <Link href="/contact">
                    <span className="text-blue-400 hover:text-blue-300 cursor-pointer underline">
                      request a personalized demo
                    </span>
                  </Link>
                  .
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to See This in Your Agency?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo and we'll show you exactly how AI can transform your specific workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="text-lg px-8 bg-white text-blue-600 hover:bg-gray-100 font-semibold"
              >
                Request Personalized Demo
              </Button>
            </Link>
            <Link href="/store">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-blue-800"
              >
                Browse AI Tools
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


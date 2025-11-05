import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import {
  Zap,
  FileText,
  Target,
  CheckCircle,
  XCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      icon: Zap,
      title: "AI Workflow Automation",
      problem: "Manual Repetitive Tasks Take Hours",
      problemDesc:
        "Your team spends countless hours on routine tasks like email follow-ups, meeting scheduling, status updates, and report generation. This time could be spent on strategic work that actually grows your agency.",
      solution: "AI Automates Key Workflows",
      solutionDesc:
        "Our intelligent automation handles your repetitive tasks automatically. From email campaigns to client reporting, our AI workflows run in the background while your team focuses on high-value activities.",
      result: "Save 3-10 Hours Per Week",
      resultDesc:
        "Agencies using our workflow automation report saving an average of 6.5 hours per week per team member. That's over 300 hours per year to reinvest in growth.",
      features: [
        "Automated email sequences and follow-ups",
        "Smart meeting scheduling and reminders",
        "Automated status reports and updates",
        "Task prioritization and assignment",
      ],
    },
    {
      icon: FileText,
      title: "AI Content & Lead Support",
      problem: "Inconsistent Content & Slow Client Follow-ups",
      problemDesc:
        "Creating quality content for multiple clients is time-consuming, and inconsistent messaging hurts your brand. Meanwhile, leads slip through the cracks due to slow response times.",
      solution: "AI-Generated Content & Lead Templates",
      solutionDesc:
        "Our AI generates on-brand content for social media, blogs, and email campaigns. Pre-built templates and smart prompts ensure consistent quality while our lead support system automates initial outreach and follow-ups.",
      result: "Faster Delivery, Higher Client Satisfaction",
      resultDesc:
        "Deliver content 3x faster while maintaining quality standards. Respond to leads within minutes instead of hours, increasing conversion rates by up to 40%.",
      features: [
        "AI-powered content generation for all channels",
        "Brand-consistent messaging templates",
        "Automated lead capture and nurturing",
        "Smart response suggestions for client queries",
      ],
    },
    {
      icon: Target,
      title: "AI Efficiency Assessment / Demo",
      problem: "Agencies Unsure Where AI Can Help",
      problemDesc:
        "You know AI could help your agency, but you're not sure where to start or which processes would benefit most from automation. Generic solutions don't address your specific workflow challenges.",
      solution: "Personalized Demo Assessing Workflow Automation Opportunities",
      solutionDesc:
        "We analyze your current workflows and identify the highest-impact automation opportunities specific to your agency. Our personalized assessment shows exactly where AI can save time and improve results.",
      result: "Clear Actionable Plan to Save Time and Improve Service",
      resultDesc:
        "Walk away with a customized roadmap showing which processes to automate first, expected time savings, and implementation steps. No guesswork—just a clear path to efficiency.",
      features: [
        "Free 30-minute workflow analysis",
        "Customized automation recommendations",
        "ROI projections for each opportunity",
        "Step-by-step implementation plan",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI-Powered Services for{" "}
              <span className="text-blue-700">Marketing Agencies</span>
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
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-2 hover:border-blue-700 transition-all overflow-hidden"
              >
                <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-blue-700 rounded-lg flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl md:text-3xl">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Problem */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <XCircle className="w-5 h-5 text-red-600" />
                        <h3 className="text-lg font-bold text-gray-900">
                          {service.problem}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-4">
                        {service.problemDesc}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <ArrowRight className="w-5 h-5 text-blue-700" />
                        <h3 className="text-lg font-bold text-gray-900">
                          {service.solution}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-4">
                        {service.solutionDesc}
                      </p>
                    </div>

                    {/* Result */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <h3 className="text-lg font-bold text-gray-900">
                          {service.result}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-4">
                        {service.resultDesc}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      What's Included:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Demo Placeholder */}
                  <div className="mt-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 border-2 border-dashed border-gray-300">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <service.icon className="w-10 h-10 text-blue-700" />
                      </div>
                      <p className="text-gray-600 font-medium">
                        Interactive Demo Coming Soon
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        See this workflow in action with real examples
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Schedule Your Free AI Efficiency Demo
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let us show you exactly how AI can transform your agency's
            workflows. No obligation, just actionable insights.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 bg-white text-blue-700 hover:bg-gray-100"
            >
              Book Your Free Demo Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}


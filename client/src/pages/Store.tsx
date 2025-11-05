import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import {
  Calendar,
  BarChart3,
  Mail,
  Clock,
  CheckCircle,
  Star,
  Sparkles,
} from "lucide-react";

export default function Store() {
  const products = [
    {
      id: "content-calendar",
      icon: Calendar,
      title: "AI Content Calendar & Prompt Pack",
      price: "$39",
      originalPrice: "$79",
      timeSaved: "5-10 hours/week",
      description:
        "Ready-to-use AI content calendar with 100+ proven prompts for blogs, social media, and email campaigns. Never run out of content ideas again.",
      features: [
        "30-day content calendar template",
        "100+ AI prompts for all channels",
        "Social media posting schedule",
        "Email campaign templates",
        "Blog topic generator",
        "Hashtag research guide",
      ],
      popular: true,
      gumroadLink: "https://gumroad.com/l/blackwood-content-calendar", // Replace with actual link
    },
    {
      id: "reporting-dashboard",
      icon: BarChart3,
      title: "AI Client Reporting Dashboard",
      price: "$59",
      originalPrice: "$99",
      timeSaved: "Reporting: hours → 15-30 min",
      description:
        "Editable Notion & Google Sheets templates that auto-generate client reports with AI-assisted summaries. Professional reports in minutes, not hours.",
      features: [
        "Notion & Google Sheets templates",
        "AI-powered summary generator",
        "Customizable KPI dashboards",
        "Automated data visualization",
        "Client-ready report templates",
        "Monthly & quarterly formats",
      ],
      popular: false,
      gumroadLink: "https://gumroad.com/l/blackwood-reporting-dashboard", // Replace with actual link
    },
    {
      id: "lead-outreach",
      icon: Mail,
      title: "AI Lead & Outreach Toolkit",
      price: "$69",
      originalPrice: "$129",
      timeSaved: "3-5 hours/week",
      description:
        "Complete toolkit with AI prompts, email templates, and workflow guides to streamline lead research, qualification, and outreach campaigns.",
      features: [
        "50+ outreach email templates",
        "Lead qualification framework",
        "AI-powered research prompts",
        "Follow-up sequence builder",
        "CRM integration guides",
        "Response rate optimization tips",
      ],
      popular: false,
      gumroadLink: "https://gumroad.com/l/blackwood-lead-toolkit", // Replace with actual link
    },
  ];

  const upsell = {
    icon: Sparkles,
    title: "Custom AI Workflow Setup",
    price: "$299",
    originalPrice: "$499",
    description:
      "Get a fully customized AI workflow designed specifically for your agency. We'll analyze your processes, build custom automations, and train your team.",
    features: [
      "1-hour workflow analysis call",
      "Custom automation setup",
      "Team training session",
      "30-day support included",
      "Integration with your tools",
      "Ongoing optimization tips",
    ],
    calendlyLink: "https://calendly.com/blackwoodmethod/custom-setup", // Replace with actual link
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              Digital Products for Marketing Agencies
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Tools That{" "}
              <span className="text-blue-700">Save You Hours</span> Every Week
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Download instantly and start automating your agency workflows
              today. All products include lifetime updates and email support.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product) => (
              <Card
                key={product.id}
                className={`border-2 hover:shadow-xl transition-all relative ${
                  product.popular
                    ? "border-blue-700 shadow-lg"
                    : "border-gray-200 hover:border-blue-700"
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-700 text-white px-4 py-1">
                      <Star className="w-3 h-3 mr-1 inline" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <product.icon className="w-7 h-7 text-blue-700" />
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {product.title}
                  </CardTitle>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gray-900">
                      {product.price}
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-sm text-green-700 bg-green-50 px-3 py-1 rounded-full w-fit">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">{product.timeSaved}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{product.description}</p>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
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
                      className={`w-full ${
                        product.popular
                          ? "bg-blue-700 hover:bg-blue-800"
                          : "bg-gray-900 hover:bg-gray-800"
                      }`}
                      size="lg"
                    >
                      Buy Now & Download
                    </Button>
                  </a>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    Instant access • Lifetime updates
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Upsell Section */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-blue-700 bg-gradient-to-br from-blue-50 to-white shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-blue-700 rounded-lg flex items-center justify-center">
                    <upsell.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <Badge className="bg-blue-700 text-white mb-2">
                      Premium Service
                    </Badge>
                    <CardTitle className="text-2xl md:text-3xl">
                      {upsell.title}
                    </CardTitle>
                  </div>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-gray-900">
                    {upsell.price}
                  </span>
                  <span className="text-xl text-gray-400 line-through">
                    {upsell.originalPrice}
                  </span>
                  <Badge variant="secondary" className="ml-2">
                    Limited Spots
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 mb-6">
                  {upsell.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {upsell.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={upsell.calendlyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    className="w-full bg-blue-700 hover:bg-blue-800"
                    size="lg"
                  >
                    Schedule Setup Call
                  </Button>
                </a>
                <p className="text-sm text-gray-600 text-center mt-3">
                  Only 5 spots available this month
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Why Agencies Trust Our Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-blue-700 mb-2">
                  500+
                </div>
                <p className="text-gray-600">Agencies Served</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-700 mb-2">
                  4.9/5
                </div>
                <p className="text-gray-600">Average Rating</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-700 mb-2">
                  24/7
                </div>
                <p className="text-gray-600">Email Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Not Sure Which Product Is Right for You?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation and we'll help you choose the best
            tools for your agency's specific needs.
          </p>
          <a href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 bg-white text-blue-700 hover:bg-gray-100"
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


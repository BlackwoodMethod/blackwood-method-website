import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import {
  Clock,
  TrendingUp,
  Target,
  Zap,
  BarChart3,
  Users,
} from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description:
        "Automate repetitive tasks and reclaim 3-10 hours every week for strategic work that grows your agency.",
    },
    {
      icon: TrendingUp,
      title: "Increase Client Output",
      description:
        "Deliver more campaigns, reports, and content without adding headcount or burning out your team.",
    },
    {
      icon: Target,
      title: "Consistent Quality",
      description:
        "AI-powered workflows ensure every deliverable meets your standards, every single time.",
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Automate emails, meetings, and reporting tasks",
    },
    {
      icon: BarChart3,
      title: "Smart Analytics",
      description: "AI-powered insights and client reporting",
    },
    {
      icon: Users,
      title: "Team Efficiency",
      description: "Streamline collaboration and task management",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
                AI Solutions for Marketing Agencies
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Helping Digital Marketing Agencies{" "}
                <span className="text-blue-700">Save Hours Every Week</span>{" "}
                with AI-Powered Workflows
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Transform your agency operations with intelligent automation.
                Spend less time on repetitive tasks and more time delivering
                exceptional results for your clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button
                    size="lg"
                    className="bg-blue-700 hover:bg-blue-800 text-lg px-8"
                  >
                    See AI Workflows in Action
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 border-blue-700 text-blue-700 hover:bg-blue-50"
                  >
                    Request Free Demo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-semibold">
                      AI Workflow Active
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-white/20 rounded-full w-full">
                      <div className="h-2 bg-blue-300 rounded-full w-3/4 animate-pulse"></div>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full w-full">
                      <div className="h-2 bg-blue-300 rounded-full w-1/2 animate-pulse"></div>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full w-full">
                      <div className="h-2 bg-blue-300 rounded-full w-5/6 animate-pulse"></div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-blue-200 text-sm mb-1">Time Saved</p>
                    <p className="text-white text-2xl font-bold">8.5 hrs</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-blue-200 text-sm mb-1">Tasks Done</p>
                    <p className="text-white text-2xl font-bold">47</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Marketing Agencies Choose Blackwood Method
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI-powered solutions are built specifically for the unique
              challenges digital marketing agencies face every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-2 hover:border-blue-700 transition-all hover:shadow-lg"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <benefit.icon className="w-7 h-7 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful AI Tools at Your Fingertips
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to streamline your agency operations and
              deliver better results faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <feature.icon className="w-10 h-10 text-blue-700 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-blue-700 hover:bg-blue-800 text-lg px-8"
              >
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
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
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 bg-white text-blue-700 hover:bg-gray-100"
              >
                Schedule Free Demo
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


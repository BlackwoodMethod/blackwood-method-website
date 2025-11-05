import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Calendar, Mail, MessageSquare, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to your backend or email service
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const benefits = [
    "Free 30-minute workflow analysis",
    "Customized AI recommendations",
    "ROI projections for your agency",
    "No obligation or pressure",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Transform Your Agency{" "}
              <span className="text-blue-700">Together</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Schedule a free demo or send us a message. We'll show you exactly
              how AI can save your team hours every week.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-blue-700" />
                    </div>
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  </div>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-gray-600">
                        We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@agency.com"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="company">Agency Name</Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Agency"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your agency and what you're looking to automate..."
                          className="mt-1 min-h-32"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-blue-700 hover:bg-blue-800"
                        size="lg"
                      >
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>

              {/* Alternative Contact */}
              <Card className="border-2 border-gray-200 mt-6">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="w-5 h-5 text-blue-700" />
                    <h3 className="font-semibold text-gray-900">
                      Email Us Directly
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Prefer email?{" "}
                    <a
                      href="mailto:hello@blackwoodmethod.com"
                      className="text-blue-700 hover:text-blue-800 font-medium"
                    >
                      hello@blackwoodmethod.com
                    </a>
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Schedule Demo */}
            <div>
              <Card className="border-2 border-blue-700 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl">
                      Schedule Free Demo
                    </CardTitle>
                  </div>
                  <p className="text-gray-600">
                    Book a 30-minute call to see AI workflows in action and get
                    personalized recommendations.
                  </p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3 mb-6">
                    {benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Calendly Embed Placeholder */}
                  <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
                    <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-600 font-medium mb-2">
                      Calendly Integration
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      Replace this placeholder with your Calendly embed code
                    </p>
                    <a
                      href="https://calendly.com/blackwoodmethod/demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-blue-700 hover:bg-blue-800">
                        Open Calendly
                      </Button>
                    </a>
                  </div>

                  <div className="text-sm text-gray-600 space-y-2">
                    <p className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Instant confirmation</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Choose your preferred time</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Zoom link sent automatically</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="border-2 border-gray-200 mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Questions?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      How long is the demo?
                    </h4>
                    <p className="text-sm text-gray-600">
                      30 minutes. We'll analyze your workflows and show relevant
                      AI solutions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Is there any cost?
                    </h4>
                    <p className="text-sm text-gray-600">
                      No, the demo and consultation are completely free with no
                      obligation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      What should I prepare?
                    </h4>
                    <p className="text-sm text-gray-600">
                      Just bring questions about your workflows. We'll handle
                      the rest.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Save Hours Every Week?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of marketing agencies already using AI to work smarter,
            not harder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact-form">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 bg-white text-blue-700 hover:bg-gray-100"
              >
                Send Message
              </Button>
            </a>
            <a href="/store">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-blue-800"
              >
                Browse Products
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


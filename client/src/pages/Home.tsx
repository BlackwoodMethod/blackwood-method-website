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
  CheckCircle2,
  XCircle,
  ArrowRight,
  FileText,
  Activity,
  PieChart,
  Briefcase,
  Stethoscope,
  Wrench,
  Building2
} from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import { updatePageSEO } from "@/lib/seo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  useEffect(() => {
    updatePageSEO("home");
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black text-slate-200">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-blue-900/30 border border-blue-800 text-blue-300 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm">
              Automated Client Reporting for Marketing Agencies
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
              Stop Losing Clients Because They <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Don't Understand Your Value</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Automated, branded reports that show high-ticket clients exactly what they're paying for and the ROI they're getting—without you lifting a finger.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 h-14 rounded-full shadow-lg shadow-blue-900/20"
                >
                  See Sample Reports
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 h-14 rounded-full border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  Request Free Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Agitate Section */}
      <section className="py-20 bg-slate-950 border-y border-slate-900">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Your clients care about one thing: <span className="text-blue-500">Results.</span>
              </h2>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                But your monthly reports are scattered across Google Sheets, Meta dashboards, and email threads. When leads drop, they blame you—even when it's seasonal, strategic, or out of your control.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-500 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold">The "Messy Spreadsheet" Problem</h3>
                    <p className="text-slate-500 text-sm">Clients get overwhelmed by raw data and stop reading your reports.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-500 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold">The "Blame Game" Cycle</h3>
                    <p className="text-slate-500 text-sm">Without clear narrative context, clients assume the worst when numbers fluctuate.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-500 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold">The Manual Grind</h3>
                    <p className="text-slate-500 text-sm">Wasting 10+ hours a month manually copy-pasting data instead of optimizing campaigns.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-20 blur-xl"></div>
              <div className="relative bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-slate-500 font-mono">CONFIDENTIAL REPORT</div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-slate-400">Total Spend</div>
                      <div className="text-2xl font-bold text-white">$12,450</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-400">ROAS</div>
                      <div className="text-2xl font-bold text-green-400">4.2x</div>
                    </div>
                  </div>
                  <div className="h-32 bg-slate-800/50 rounded-lg flex items-end justify-between p-2 gap-1">
                    {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                      <div key={i} className="w-full bg-blue-600/80 rounded-t" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                    <div className="text-sm font-semibold text-blue-400 mb-1">AI Insight</div>
                    <p className="text-xs text-slate-300">
                      Despite a 15% drop in traffic due to seasonality, conversion rate improved by 0.8%, maintaining steady lead volume. Recommended shifting budget to Retargeting for Q4.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-slate-800 border border-slate-700 p-4 rounded-lg shadow-xl max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-white font-semibold text-sm">Client Retention Up</span>
                </div>
                <p className="text-xs text-slate-400">"This is the first time I actually understand what you guys are doing for us."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-black">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              We turn your campaign data into client-facing reports that <span className="text-blue-500">prove ROI</span>—automatically.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-900 border-slate-800 hover:border-blue-600/50 transition-all group">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Reduce Client Churn</h3>
                <p className="text-slate-400 leading-relaxed">
                  When clients see your value clearly every month, they stop questioning your fees and start seeing you as a partner.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900 border-slate-800 hover:border-blue-600/50 transition-all group">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Save 10+ Hours/Month</h3>
                <p className="text-slate-400 leading-relaxed">
                  Stop the manual copy-paste grind. Our system pulls data from all your sources and formats it instantly.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900 border-slate-800 hover:border-blue-600/50 transition-all group">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Win More Clients</h3>
                <p className="text-slate-400 leading-relaxed">
                  Premium reporting signals premium service. Use our sample reports in your sales process to close high-ticket deals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Examples Section */}
      <section className="py-20 bg-slate-950 border-y border-slate-900">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built for Agencies Serving Premium Clients
            </h2>
            <p className="text-slate-400">Every report is customized to your client's industry and KPIs.</p>
          </div>

          <Tabs defaultValue="law" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-slate-900 p-1 rounded-xl mb-8">
              <TabsTrigger value="law" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-400">Law Firms</TabsTrigger>
              <TabsTrigger value="medical" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-400">Medical</TabsTrigger>
              <TabsTrigger value="home" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-400">Home Services</TabsTrigger>
              <TabsTrigger value="b2b" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-400">B2B SaaS</TabsTrigger>
            </TabsList>

            {[
              {
                id: "law",
                title: "Johnson & Smith Law - November 2025",
                metrics: [
                  { label: "Personal Injury Leads", value: "42", change: "+12%" },
                  { label: "Cost Per Case", value: "$185", change: "-8%" },
                  { label: "Retainer Value", value: "$125k", change: "+15%" }
                ],
                insight: "Lead quality improved significantly after excluding 'pro bono' keywords. Recommended increasing budget for 'motorcycle accident' campaigns."
              },
              {
                id: "medical",
                title: "Summit Dental Group - November 2025",
                metrics: [
                  { label: "New Patient Bookings", value: "28", change: "+5%" },
                  { label: "Cost Per Booking", value: "$45", change: "-2%" },
                  { label: "Show Rate", value: "92%", change: "+4%" }
                ],
                insight: "Implants campaign is driving the highest ROI. We suggest launching a dedicated landing page for Invisalign to capture Q1 demand."
              },
              {
                id: "home",
                title: "Elite HVAC Solutions - November 2025",
                metrics: [
                  { label: "Service Calls", value: "156", change: "+22%" },
                  { label: "Cost Per Lead", value: "$32", change: "-5%" },
                  { label: "Emergency Jobs", value: "45", change: "+18%" }
                ],
                insight: "Cold snap drove a spike in furnace repair queries. We successfully scaled spend by 30% while maintaining CPA targets."
              },
              {
                id: "b2b",
                title: "TechConsult Partners - November 2025",
                metrics: [
                  { label: "Demo Requests", value: "18", change: "+10%" },
                  { label: "MQL to SQL", value: "35%", change: "+5%" },
                  { label: "Pipeline Value", value: "$450k", change: "+12%" }
                ],
                insight: "LinkedIn Ads are outperforming Google Search for enterprise leads. We're shifting 20% of the budget to LinkedIn Sponsored Content."
              }
            ].map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="mt-0">
                <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/50 rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-900/20 transition-all duration-500 group">
                  <div className="bg-slate-800/40 p-4 border-b border-slate-800/50 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">
                        {tab.title.charAt(0)}
                      </div>
                      <span className="font-semibold text-white">{tab.title}</span>
                    </div>
                    <div className="text-xs text-slate-500">Generated by Blackwood</div>
                  </div>
                  <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      {tab.metrics.map((metric, i) => (
                        <div key={i} className="bg-black/20 p-4 rounded-lg border border-slate-800/50 hover:bg-blue-900/10 transition-colors duration-300">
                          <div className="text-slate-400 text-sm mb-1">{metric.label}</div>
                          <div className="flex items-end gap-2">
                            <div className="text-2xl font-bold text-white">{metric.value}</div>
                            <div className={`text-xs font-medium ${metric.change.startsWith('+') ? 'text-green-400' : 'text-green-400'}`}>
                              {metric.change}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 p-6 rounded-lg backdrop-blur-sm">
                      <div className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
                        <div>
                          <h4 className="text-blue-400 font-semibold mb-1">Executive Summary</h4>
                          <p className="text-slate-300 text-sm leading-relaxed">
                            {tab.insight}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-black">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-slate-400">Three simple steps to automated reporting bliss.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 opacity-30"></div>
            
            <div className="relative text-center">
              <div className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-xl shadow-blue-900/10">
                <span className="text-2xl font-bold text-blue-500">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Connect Your Tools</h3>
              <p className="text-slate-400 text-sm">One-time setup. Link your Meta, Google Ads, and CRM accounts securely.</p>
            </div>
            <div className="relative text-center">
              <div className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-xl shadow-blue-900/10">
                <span className="text-2xl font-bold text-blue-500">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">We Generate Reports</h3>
              <p className="text-slate-400 text-sm">Our AI analyzes the data and writes a narrative summary branded to your agency.</p>
            </div>
            <div className="relative text-center">
              <div className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-xl shadow-blue-900/10">
                <span className="text-2xl font-bold text-blue-500">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Your Clients Stay Happy</h3>
              <p className="text-slate-400 text-sm">They receive clear, value-driven updates. You reduce churn and save time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-slate-400">Scale as you grow. No hidden fees.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
                <div className="text-3xl font-bold text-white mb-6">$500<span className="text-sm text-slate-500 font-normal">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" /> Up to 5 Clients
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" /> Monthly Reports
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" /> Basic Templates
                  </li>
                </ul>
                <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white">Get Started</Button>
              </CardContent>
            </Card>

            {/* Growth */}
            <Card className="bg-slate-900 border-blue-600 relative shadow-2xl shadow-blue-900/20 transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-2">Growth</h3>
                <div className="text-3xl font-bold text-white mb-6">$1,000<span className="text-sm text-slate-500 font-normal">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-white text-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" /> Up to 10 Clients
                  </li>
                  <li className="flex items-center gap-2 text-white text-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" /> Weekly Reports
                  </li>
                  <li className="flex items-center gap-2 text-white text-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" /> Performance Alerts
                  </li>
                  <li className="flex items-center gap-2 text-white text-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" /> Priority Support
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Start Free Trial</Button>
              </CardContent>
            </Card>

            {/* Enterprise */}
            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
                <div className="text-3xl font-bold text-white mb-6">$2,000<span className="text-sm text-slate-500 font-normal">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" /> Custom Client Count
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" /> Custom Reporting
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" /> Quarterly Business Reviews
                  </li>
                </ul>
                <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Stop Losing Clients Over Communication?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join the top 1% of agencies who use transparency as their competitive advantage.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-10 h-14 rounded-full font-bold shadow-xl"
            >
              Schedule Your Demo
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { Shield, Zap, Code2, Lock, RefreshCw, Database } from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    icon: Shield,
    title: "Anti-Bot Bypass",
    description: "Automatically detects and bypasses Cloudflare, Akamai, and other anti-bot systems without manual intervention."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized scraping engine that extracts data 10x faster than traditional methods while avoiding detection."
  },
  {
    icon: Lock,
    title: "CAPTCHA Solving",
    description: "Integrated CAPTCHA solving with support for reCAPTCHA, hCaptcha, and other challenge systems."
  },
  {
    icon: RefreshCw,
    title: "Smart Retry Logic",
    description: "Intelligent retry mechanisms with exponential backoff and IP rotation to ensure data extraction success."
  },
  {
    icon: Code2,
    title: "Custom Selectors",
    description: "Visual selector builder and CSS/XPath support for precise data extraction from any website structure."
  },
  {
    icon: Database,
    title: "Multiple Export Formats",
    description: "Export scraped data to CSV, JSON, Excel, or directly to your database with one click."
  }
];

export function Features() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
            <Shield className="h-4 w-4" />
            <span>Features</span>
          </div>
          <h1 className="mb-6">Powerful Features for Modern Data Extraction</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Everything you need to scrape data from even the most protected websites with industry-leading technology
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-slate-200">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
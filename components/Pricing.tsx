import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Check, DollarSign } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out ScrapeMaster",
    features: [
      "100 scrapes per month",
      "Basic anti-bot bypass",
      "CSV & JSON export",
      "Community support",
      "Single user"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "For professionals and small teams",
    features: [
      "10,000 scrapes per month",
      "Advanced anti-bot bypass",
      "All export formats",
      "Priority support",
      "CAPTCHA solving included",
      "API access",
      "Up to 5 team members"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For large-scale operations",
    features: [
      "Unlimited scrapes",
      "Dedicated infrastructure",
      "Custom anti-bot solutions",
      "24/7 premium support",
      "SLA guarantee",
      "Custom integrations",
      "Unlimited team members",
      "On-premise deployment"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export function Pricing() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
            <DollarSign className="h-4 w-4" />
            <span>Pricing</span>
          </div>
          <h1 className="mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime with no hidden fees
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`p-8 relative ${
                  plan.popular 
                    ? 'border-2 border-blue-500 shadow-xl' 
                    : 'border-slate-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl">{plan.price}</span>
                    {plan.price !== "Custom" && (
                      <span className="text-slate-600 ml-2">/ {plan.period}</span>
                    )}
                  </div>
                  <p className="text-slate-600">{plan.description}</p>
                </div>
                
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-slate-900 hover:bg-slate-800'
                  }`}
                >
                  {plan.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
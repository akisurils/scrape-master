import { Download, MousePointer, Database, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "Install Extension",
    description: "Add ScrapeMaster to Chrome with one click. No configuration needed."
  },
  {
    icon: MousePointer,
    title: "Select Elements",
    description: "Navigate to any website and visually select the data you want to extract."
  },
  {
    icon: Database,
    title: "Extract Data",
    description: "Let our AI-powered engine handle anti-bot systems and extract your data."
  },
  {
    icon: CheckCircle,
    title: "Export & Use",
    description: "Download your data in your preferred format or send it directly to your tools."
  }
];

export function HowItWorks() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6">
            <Database className="h-4 w-4 text-blue-400" />
            <span className="text-blue-300">How It Works</span>
          </div>
          <h1 className="mb-6">Simple 4-Step Process</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Start scraping in minutes with our intuitive workflow designed for both beginners and experts
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-200 to-transparent" />
                    )}
                    <div className="relative">
                      <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white">
                        <Icon className="h-8 w-8" />
                      </div>
                      <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-sm text-blue-600">{index + 1}</span>
                      </div>
                    </div>
                    <h3 className="mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
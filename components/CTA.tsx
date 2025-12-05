import { Button } from "./ui/button";
import { Chrome, ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635686736751-b5fc50365655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBzY3JhcGluZyUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzYyMjEwMTE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-cover bg-center opacity-10" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6 text-4xl md:text-5xl">
            Ready to Scrape Without Limits?
          </h2>
          <p className="mb-10 text-xl text-blue-100">
            Join thousands of developers, researchers, and businesses who trust ScrapeMaster 
            for their data extraction needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 gap-2">
              <Chrome className="h-5 w-5" />
              Install Free Chrome Extension
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
              Schedule Demo
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-blue-200">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}

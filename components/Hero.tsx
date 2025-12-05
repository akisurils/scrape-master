import { Button } from "./ui/button";
import { Chrome, Download } from "lucide-react";

interface HeroProps {
  setCurrentPage: (page: "home" | "downloads") => void;
}

export function Hero({ setCurrentPage }: HeroProps) {
  const handleDownloadClick = () => {
    setCurrentPage("downloads");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617240016072-d92174e44171?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZGF0YSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyMjEwMTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-cover bg-center opacity-10" />
      
      <div className="container relative mx-auto px-4 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 border border-blue-500/20">
            <Chrome className="h-4 w-4 text-blue-400" />
            <span className="text-sm text-blue-300">Chrome Extension</span>
          </div>
          
          <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl tracking-tight">
            Scrape Any Website,
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Even Anti-Bot Protected
            </span>
          </h1>
          
          <p className="mb-10 text-xl text-slate-300 max-w-2xl mx-auto">
            Advanced data extraction that bypasses bot detection, CAPTCHAs, and rate limiting. 
            Extract the data you need without getting blocked.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
              onClick={handleDownloadClick}
            >
              <Download className="h-5 w-5" />
              Add to Chrome - It's Free
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
              View Documentation
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-green-400 rounded-full" />
              <span>100,000+ Active Users</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-green-400 rounded-full" />
              <span>4.9/5 Chrome Store Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-green-400 rounded-full" />
              <span>99.9% Success Rate</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
    </section>
  );
}
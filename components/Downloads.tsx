import { Button } from "./ui/button";
import { Chrome, Download, CheckCircle2, Globe, Music, MessageCircle, Briefcase, ShoppingCart, Youtube, Twitter, Linkedin, Instagram } from "lucide-react";

interface Extension {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  version: string;
  size: string;
  downloads: string;
  rating: number;
  features: string[];
  category: string;
}

const extensions: Extension[] = [
  {
    id: "glassdoor",
    name: "Glassdoor Scraper",
    icon: <Briefcase className="h-8 w-8" />,
    description: "Extract company reviews, salaries, interview questions, and ratings from Glassdoor without triggering anti-bot protection.",
    version: "2.4.1",
    size: "1.2 MB",
    downloads: "15.2K",
    rating: 4.8,
    features: ["Company reviews extraction", "Salary data scraping", "Interview questions", "Rating aggregation"],
    category: "Professional"
  },
  {
    id: "reddit",
    name: "Reddit Scraper",
    icon: <MessageCircle className="h-8 w-8" />,
    description: "Scrape posts, comments, user profiles, and subreddit data from Reddit bypassing rate limits and bot detection.",
    version: "3.1.0",
    size: "980 KB",
    downloads: "28.5K",
    rating: 4.9,
    features: ["Post & comment extraction", "Subreddit analytics", "User profile data", "Thread scraping"],
    category: "Social Media"
  },
  {
    id: "spotify",
    name: "Spotify Scraper",
    icon: <Music className="h-8 w-8" />,
    description: "Extract playlists, track metadata, artist information, and album details from Spotify without API limitations.",
    version: "1.8.3",
    size: "1.5 MB",
    downloads: "12.8K",
    rating: 4.7,
    features: ["Playlist extraction", "Track metadata", "Artist profiles", "Album information"],
    category: "Entertainment"
  },
  {
    id: "linkedin",
    name: "LinkedIn Scraper",
    icon: <Linkedin className="h-8 w-8" />,
    description: "Extract professional profiles, job postings, company data, and connections while avoiding detection mechanisms.",
    version: "2.9.5",
    size: "1.4 MB",
    downloads: "22.1K",
    rating: 4.6,
    features: ["Profile extraction", "Job listings", "Company data", "Connection mining"],
    category: "Professional"
  },
  {
    id: "twitter",
    name: "Twitter/X Scraper",
    icon: <Twitter className="h-8 w-8" />,
    description: "Scrape tweets, user profiles, trends, and engagement metrics from Twitter/X without hitting API limits.",
    version: "3.3.2",
    size: "1.1 MB",
    downloads: "31.7K",
    rating: 4.8,
    features: ["Tweet extraction", "User analytics", "Trend monitoring", "Engagement metrics"],
    category: "Social Media"
  },
  {
    id: "amazon",
    name: "Amazon Scraper",
    icon: <ShoppingCart className="h-8 w-8" />,
    description: "Extract product listings, prices, reviews, and seller information from Amazon while bypassing CAPTCHAs.",
    version: "2.6.0",
    size: "1.3 MB",
    downloads: "19.4K",
    rating: 4.7,
    features: ["Product data extraction", "Price monitoring", "Review scraping", "Seller information"],
    category: "E-commerce"
  },
  {
    id: "youtube",
    name: "YouTube Scraper",
    icon: <Youtube className="h-8 w-8" />,
    description: "Extract video metadata, comments, channel statistics, and engagement data from YouTube without restrictions.",
    version: "2.2.4",
    size: "1.0 MB",
    downloads: "25.9K",
    rating: 4.8,
    features: ["Video metadata", "Comment extraction", "Channel analytics", "Transcript scraping"],
    category: "Entertainment"
  },
  {
    id: "instagram",
    name: "Instagram Scraper",
    icon: <Instagram className="h-8 w-8" />,
    description: "Scrape posts, stories, profiles, and hashtag data from Instagram while evading detection systems.",
    version: "2.0.8",
    size: "1.2 MB",
    downloads: "18.3K",
    rating: 4.5,
    features: ["Post extraction", "Story scraping", "Profile data", "Hashtag analytics"],
    category: "Social Media"
  },
  {
    id: "universal",
    name: "Universal Scraper",
    icon: <Globe className="h-8 w-8" />,
    description: "A versatile scraper that works on any website with customizable rules and advanced anti-bot bypassing capabilities.",
    version: "4.0.1",
    size: "2.1 MB",
    downloads: "45.6K",
    rating: 4.9,
    features: ["Custom scraping rules", "AI-powered detection", "Multi-site support", "Advanced bypass"],
    category: "Universal"
  }
];

const categories = ["All", "Professional", "Social Media", "Entertainment", "E-commerce", "Universal"];

export function Downloads() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredExtensions = selectedCategory === "All" 
    ? extensions 
    : extensions.filter(ext => ext.category === selectedCategory);

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-4">
            <Download className="h-4 w-4" />
            <span>Download Extensions</span>
          </div>
          <h1 className="mb-4">Choose Your Scraping Extension</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Select from our collection of specialized scrapers designed for popular websites. 
            Each extension bypasses anti-bot protection and delivers reliable data extraction.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Extensions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredExtensions.map((extension) => (
            <div
              key={extension.id}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg text-white">
                  {extension.icon}
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-yellow-500 mb-1">
                    <span>★</span>
                    <span className="text-slate-900">{extension.rating}</span>
                  </div>
                  <div className="text-slate-500">{extension.downloads}</div>
                </div>
              </div>

              <h3 className="mb-2">{extension.name}</h3>
              <p className="text-slate-600 mb-4">
                {extension.description}
              </p>

              <div className="space-y-2 mb-4">
                {extension.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 text-slate-500 mb-4 pt-4 border-t border-slate-100">
                <span>v{extension.version}</span>
                <span>•</span>
                <span>{extension.size}</span>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 gap-2">
                <Chrome className="h-4 w-4" />
                Add to Chrome
              </Button>
            </div>
          ))}
        </div>

        {/* Features Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-2">100K+</div>
              <div className="text-blue-100">Total Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">99.9%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>

        {/* Installation Guide */}
        <div className="mt-16">
          <h2 className="text-center mb-8">How to Install</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="mb-2">Click "Add to Chrome"</h3>
              <p className="text-slate-600">Choose your desired extension above</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="mb-2">Confirm Installation</h3>
              <p className="text-slate-600">Accept the permissions in Chrome</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="mb-2">Configure Settings</h3>
              <p className="text-slate-600">Set up your scraping preferences</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="mb-2">Start Scraping</h3>
              <p className="text-slate-600">Begin extracting data instantly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Import React at the top
import * as React from "react";

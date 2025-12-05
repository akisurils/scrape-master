import { Book, Search, ChevronRight, FileText, Code, Zap, Shield, Settings } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

interface DocSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: {
    heading: string;
    text: string;
  }[];
}

const docSections: DocSection[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: <Book className="h-4 w-4" />,
    content: [
      {
        heading: "Introduction",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        heading: "Installation",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
      },
      {
        heading: "Quick Setup",
        text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
      }
    ]
  },
  {
    id: "api-reference",
    title: "API Reference",
    icon: <Code className="h-4 w-4" />,
    content: [
      {
        heading: "Authentication",
        text: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
      },
      {
        heading: "Endpoints",
        text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
      },
      {
        heading: "Rate Limits",
        text: "Et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
      }
    ]
  },
  {
    id: "advanced-usage",
    title: "Advanced Usage",
    icon: <Zap className="h-4 w-4" />,
    content: [
      {
        heading: "Custom Selectors",
        text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet."
      },
      {
        heading: "Proxy Configuration",
        text: "Ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
      },
      {
        heading: "Batch Processing",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
    ]
  },
  {
    id: "security",
    title: "Security",
    icon: <Shield className="h-4 w-4" />,
    content: [
      {
        heading: "Best Practices",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        heading: "Data Privacy",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
      },
      {
        heading: "Compliance",
        text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
      }
    ]
  },
  {
    id: "configuration",
    title: "Configuration",
    icon: <Settings className="h-4 w-4" />,
    content: [
      {
        heading: "Settings Overview",
        text: "Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam."
      },
      {
        heading: "Performance Tuning",
        text: "Nisi ut aliquid ex ea commodi consequatur quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."
      },
      {
        heading: "Custom Rules",
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
      }
    ]
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    icon: <FileText className="h-4 w-4" />,
    content: [
      {
        heading: "Common Issues",
        text: "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit."
      },
      {
        heading: "Error Messages",
        text: "Quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."
      },
      {
        heading: "Support Resources",
        text: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    ]
  }
];

export function Docs() {
  const [activeSection, setActiveSection] = useState("getting-started");
  const [searchQuery, setSearchQuery] = useState("");

  const currentSection = docSections.find(section => section.id === activeSection) || docSections[0];

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-4">
            <Book className="h-4 w-4" />
            <span>Documentation</span>
          </div>
          <h1 className="mb-4">ScrapeMaster Documentation</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about using ScrapeMaster extensions
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Documentation Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-lg border border-slate-200 p-4 sticky top-24">
                <h3 className="mb-4">Contents</h3>
                <nav className="space-y-1">
                  {docSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left ${
                        activeSection === section.id
                          ? "bg-blue-50 text-blue-700"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {section.icon}
                      <span>{section.title}</span>
                      {activeSection === section.id && (
                        <ChevronRight className="h-4 w-4 ml-auto" />
                      )}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg border border-slate-200 p-8">
                {/* Section Title */}
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-200">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    {currentSection.icon}
                  </div>
                  <h2>{currentSection.title}</h2>
                </div>

                {/* Section Content */}
                <div className="space-y-8">
                  {currentSection.content.map((item, index) => (
                    <div key={index}>
                      <h3 className="mb-3">{item.heading}</h3>
                      <p className="text-slate-600 leading-relaxed mb-4">
                        {item.text}
                      </p>
                      
                      {/* Code Example Block */}
                      {index === 0 && (
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-lg mt-4">
                          <code className="text-sm">
                            <span className="text-blue-400">const</span> scraper = <span className="text-blue-400">new</span> <span className="text-green-400">ScrapeMaster</span>({'{'}
                            <br />
                            &nbsp;&nbsp;url: <span className="text-yellow-300">'https://example.com'</span>,
                            <br />
                            &nbsp;&nbsp;selectors: [<span className="text-yellow-300">'.title'</span>, <span className="text-yellow-300">'.content'</span>],
                            <br />
                            &nbsp;&nbsp;bypassAntiBot: <span className="text-purple-400">true</span>
                            <br />
                            {'}'});
                          </code>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Navigation Footer */}
                <div className="flex justify-between items-center pt-8 mt-8 border-t border-slate-200">
                  <Button variant="outline" className="gap-2">
                    Previous Section
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700 gap-2">
                    Next Section
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Quick Links */}
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="bg-white rounded-lg border border-slate-200 p-6">
                  <Book className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="mb-2">Tutorials</h3>
                  <p className="text-slate-600">Step-by-step guides</p>
                </div>
                <div className="bg-white rounded-lg border border-slate-200 p-6">
                  <Code className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="mb-2">Code Examples</h3>
                  <p className="text-slate-600">Ready-to-use snippets</p>
                </div>
                <div className="bg-white rounded-lg border border-slate-200 p-6">
                  <FileText className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="mb-2">API Reference</h3>
                  <p className="text-slate-600">Complete API docs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

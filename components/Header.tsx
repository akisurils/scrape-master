import { Button } from "./ui/button";
import { Chrome, Menu } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  currentPage: "home" | "downloads" | "docs" | "features" | "how-it-works" | "pricing" | "signin";
  setCurrentPage: (page: "home" | "downloads" | "docs" | "features" | "how-it-works" | "pricing" | "signin") => void;
}

export function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (page: "home" | "downloads" | "docs" | "features" | "how-it-works" | "pricing" | "signin") => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => handleNavigation("home")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Chrome className="h-6 w-6 text-blue-600" />
            <span className="text-xl">ScrapeMaster</span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavigation("home")}
              className={`hover:text-blue-600 transition-colors ${currentPage === "home" ? "text-blue-600" : ""}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("downloads")}
              className={`hover:text-blue-600 transition-colors ${currentPage === "downloads" ? "text-blue-600" : ""}`}
            >
              Downloads
            </button>
            <button
              onClick={() => handleNavigation("features")}
              className={`hover:text-blue-600 transition-colors ${currentPage === "features" ? "text-blue-600" : ""}`}
            >
              Features
            </button>
            <button
              onClick={() => handleNavigation("how-it-works")}
              className={`hover:text-blue-600 transition-colors ${currentPage === "how-it-works" ? "text-blue-600" : ""}`}
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavigation("pricing")}
              className={`hover:text-blue-600 transition-colors ${currentPage === "pricing" ? "text-blue-600" : ""}`}
            >
              Pricing
            </button>
            <button
              onClick={() => handleNavigation("docs")}
              className={`hover:text-blue-600 transition-colors ${currentPage === "docs" ? "text-blue-600" : ""}`}
            >
              Docs
            </button>
          </nav>

          <Button onClick={() => handleNavigation("signin")} className="hidden md:block bg-blue-600 hover:bg-blue-700">
            Sign In
          </Button>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => handleNavigation("home")}
                className={`text-left hover:text-blue-600 transition-colors ${currentPage === "home" ? "text-blue-600" : ""}`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("downloads")}
                className={`text-left hover:text-blue-600 transition-colors ${currentPage === "downloads" ? "text-blue-600" : ""}`}
              >
                Downloads
              </button>
              <button
                onClick={() => handleNavigation("features")}
                className={`text-left hover:text-blue-600 transition-colors ${currentPage === "features" ? "text-blue-600" : ""}`}
              >
                Features
              </button>
              <button
                onClick={() => handleNavigation("how-it-works")}
                className={`text-left hover:text-blue-600 transition-colors ${currentPage === "how-it-works" ? "text-blue-600" : ""}`}
              >
                How It Works
              </button>
              <button
                onClick={() => handleNavigation("pricing")}
                className={`text-left hover:text-blue-600 transition-colors ${currentPage === "pricing" ? "text-blue-600" : ""}`}
              >
                Pricing
              </button>
              <button
                onClick={() => handleNavigation("docs")}
                className={`text-left hover:text-blue-600 transition-colors ${currentPage === "docs" ? "text-blue-600" : ""}`}
              >
                Docs
              </button>
              <div className="flex flex-col gap-2 pt-4">
                <Button onClick={() => handleNavigation("signin")} className="w-full bg-blue-600 hover:bg-blue-700">
                  Sign In
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
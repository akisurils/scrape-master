import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Pricing } from "./components/Pricing";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { Downloads } from "./components/Downloads";
import { Docs } from "./components/Docs";
import { SignIn } from "./components/SignIn";
import { useState } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "downloads" | "docs" | "features" | "how-it-works" | "pricing" | "signin">("home");

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {currentPage === "home" && (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <CTA />
          </>
        )}
        {currentPage === "downloads" && <Downloads />}
        {currentPage === "docs" && <Docs />}
        {currentPage === "features" && <Features />}
        {currentPage === "how-it-works" && <HowItWorks />}
        {currentPage === "pricing" && <Pricing />}
        {currentPage === "signin" && <SignIn setCurrentPage={setCurrentPage} />}
      </main>
      <Footer />
    </div>
  );
}
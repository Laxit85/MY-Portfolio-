import { useState, useEffect } from "react";
import { IntroAnimation } from "./components/IntroAnimation";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Clients } from "./components/Clients";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const visited = localStorage.getItem("hasVisitedVoyager");
    if (visited) {
      setShowIntro(false);
      setHasVisited(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setHasVisited(true);
    localStorage.setItem("hasVisitedVoyager", "true");
  };

  return (
    <div className="dark bg-[#0a0a0f] text-white min-h-screen">
      {/* Intro Animation - only on first visit */}
      {showIntro && !hasVisited && (
        <IntroAnimation onComplete={handleIntroComplete} />
      )}

      {/* Main Content */}
      {(!showIntro || hasVisited) && (
        <>
          <Navigation />
          <Hero />
          <About />
          <Projects />
          <Clients />
          <Services />
          <Contact />
        </>
      )}
    </div>
  );
}

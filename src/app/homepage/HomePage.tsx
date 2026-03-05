import React from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { SolutionsSection } from "./components/SolutionsSection";
import { VideoSection } from "./components/VideoSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ConceptSection } from "./components/ConceptSection";
import { Footer } from "./components/Footer";

export function HomePage() {
  return (
    <div className="w-full min-h-screen bg-[#3a2735] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SolutionsSection />
      <VideoSection />
      <ProjectsSection />
      <ConceptSection />
      <Footer />
    </div>
  );
}

import React from "react";
import { HeroSection } from "./components/HeroSection";
import { SolutionsSection } from "./components/SolutionsSection";
import { VideoSection } from "./components/VideoSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ConceptSection } from "./components/ConceptSection";

type HomePageProps = {
  onOpenContact?: () => void;
};

export function HomePage({ onOpenContact }: HomePageProps) {
  return (
    <>
      <HeroSection />
      <SolutionsSection onOpenContact={onOpenContact} />
      <VideoSection />
      <ProjectsSection />
      <ConceptSection onOpenContact={onOpenContact} />
    </>
  );
}

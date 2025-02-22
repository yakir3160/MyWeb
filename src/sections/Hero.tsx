"use client"
import { HeroBackground } from "@/components/HeroBackground";
import { HeroHeader } from "@/components/Hero/HeroHeader";
import { HeroContent } from "@/components/Hero/HeroContent";
import { HeroActions } from "@/components/Hero/HeroActions";

export const HeroSection = () => {
  return (
      <div className="py-32 md:py-40 lg:py-60 2xl:py-80 relative z-0 overflow-x-clip">
        <HeroBackground />
        <div className="container">
          <HeroHeader />
          <HeroContent />
          <HeroActions />
        </div>
      </div>
  );
};

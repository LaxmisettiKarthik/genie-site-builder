
import { useState, useRef } from "react";
import Navigation from "@/components/Navigation";
import FloatingParticles from "@/components/FloatingParticles";
import ProductTaggingHero from "@/components/ProductTaggingHero";
import InteractiveDemo from "@/components/InteractiveDemo";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import AIFeatures from "@/components/AIFeatures";
import ProductTaggingCTA from "@/components/ProductTaggingCTA";

const ProductTagging = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isDemoVisible, setIsDemoVisible] = useState(false);
  const demoSectionRef = useRef<HTMLElement>(null);

  const handleDemoClick = () => {
    setIsDemoVisible(true);
    setTimeout(() => {
      demoSectionRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1117] via-[#161B22] to-[#21262D] relative overflow-hidden font-lexend">
      <FloatingParticles />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <ProductTaggingHero 
        selectedTag={selectedTag} 
        onDemoClick={handleDemoClick} 
      />

      {/* Interactive Demo Section */}
      <InteractiveDemo 
        ref={demoSectionRef}
        isVisible={isDemoVisible}
        onTagClick={setSelectedTag}
      />

      {/* Performance Metrics Section */}
      <PerformanceMetrics />

      {/* AI Features Section */}
      <AIFeatures />

      {/* CTA Section */}
      <ProductTaggingCTA />
    </div>
  );
};

export default ProductTagging;

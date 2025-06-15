
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

interface ProductTaggingHeroProps {
  selectedTag: string | null;
  onDemoClick: () => void;
}

const ProductTaggingHero = ({ selectedTag, onDemoClick }: ProductTaggingHeroProps) => {
  return (
    <section className="px-6 lg:px-8 lg:py-20 relative z-10 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight font-afacad">
            Automated Product
            <span className="bg-gradient-to-r from-[#3BC553] via-green-400 to-emerald-300 bg-clip-text text-transparent animate-pulse"> Tagging </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Watch AI transform your product catalog in real-time. Click, analyze, and see the magic happen instantly.
          </p>
          
          {selectedTag && (
            <div className="mb-6 p-4 bg-[#3BC553]/20 rounded-lg border border-[#3BC553]/30 animate-fade-in">
              <p className="text-[#3BC553] font-semibold">
                🎯 You clicked on: "{selectedTag}" - AI detected this with 99.2% confidence!
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-[#3BC553] hover:bg-green-600 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={onDemoClick} className="border-[#3BC553] text-[#3BC553] hover:bg-[#3BC553] hover:text-white px-8 py-4 text-lg transform hover:scale-105 transition-all group">
              <PlayCircle className="mr-2 w-5 h-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
              Feel It
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTaggingHero;

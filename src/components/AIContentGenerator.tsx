
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Wand2 } from "lucide-react";
import { useState, useEffect } from "react";

const AIContentGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  
  const generationSteps = [
    "Analyzing product image...",
    "Identifying key features...",
    "Generating compelling copy...",
    "Optimizing for conversions..."
  ];

  const generatedContent = {
    title: "Premium Cotton Summer Dress",
    description: "Discover effortless elegance with our premium cotton summer dress. Featuring a flattering A-line silhouette and breathable fabric, this versatile piece transitions seamlessly from casual daywear to evening sophistication.",
    bullets: [
      "Premium 100% organic cotton blend",
      "Flattering A-line cut for all body types",
      "Machine washable for easy care",
      "Available in 5 stunning colors"
    ]
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setCurrentStep(0);
    
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= generationSteps.length - 1) {
          clearInterval(interval);
          setTimeout(() => setIsGenerating(false), 500);
          return prev;
        }
        return prev + 1;
      });
    }, 800);
  };

  return (
    <div className="space-y-4">
      <Card className="bg-gray-900/50 border-gray-700">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">AI Content Generator</h3>
            <Button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className="bg-[#3BC553] hover:bg-green-600"
            >
              <Wand2 className="w-4 h-4 mr-2" />
              {isGenerating ? "Enriching..." : "Enrich the product"}
            </Button>
          </div>

          {isGenerating && (
            <div className="mb-4 p-3 bg-gray-800 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#3BC553] animate-spin" />
                <span className="text-[#3BC553] text-sm font-medium">
                  {generationSteps[currentStep]}
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-[#3BC553] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / generationSteps.length) * 100}%` }}
                ></div>
              </div>
            </div>
          )}

          {!isGenerating && currentStep > 0 && (
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Product Images Section */}
              <div className="space-y-4">
                <label className="text-sm text-gray-400 mb-1 block">Product Images</label>
                <div className="space-y-3">
                  {/* Main product image */}
                  <div className="relative group">
                    <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-[#3BC553]/30 flex items-center justify-center overflow-hidden">
                      <img 
                        src="/placeholder.svg" 
                        alt="Summer Dress - Main View"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Secondary product images */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="relative group">
                      <div className="w-full h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded border border-[#3BC553]/30 flex items-center justify-center overflow-hidden">
                        <img 
                          src="/placeholder.svg" 
                          alt="Summer Dress - Side View"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="relative group">
                      <div className="w-full h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded border border-[#3BC553]/30 flex items-center justify-center overflow-hidden">
                        <img 
                          src="/placeholder.svg" 
                          alt="Summer Dress - Detail View"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="relative group">
                      <div className="w-full h-20 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded border border-[#3BC553]/30 flex items-center justify-center overflow-hidden">
                        <img 
                          src="/placeholder.svg" 
                          alt="Summer Dress - Back View"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Generated Content Section */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-400 mb-1 block">Product Title</label>
                  <div className="p-3 bg-gray-800 rounded border border-[#3BC553]/30">
                    <p className="text-white">{generatedContent.title}</p>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm text-gray-400 mb-1 block">Description</label>
                  <div className="p-3 bg-gray-800 rounded border border-[#3BC553]/30">
                    <p className="text-gray-300 text-sm leading-relaxed">{generatedContent.description}</p>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-1 block">Key Features</label>
                  <div className="p-3 bg-gray-800 rounded border border-[#3BC553]/30">
                    <ul className="space-y-1">
                      {generatedContent.bullets.map((bullet, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#3BC553] rounded-full"></div>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AIContentGenerator;

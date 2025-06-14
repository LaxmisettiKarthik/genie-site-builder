
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Wand2, ChevronLeft, ChevronRight, Tag, Filter, TrendingUp, Star, Image, FileText, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const AIContentGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
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

  const productImages = [
    {
      src: "/placeholder.svg",
      alt: "Summer Dress - Main View",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      src: "/placeholder.svg", 
      alt: "Summer Dress - Side View",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      src: "/placeholder.svg",
      alt: "Summer Dress - Detail View", 
      gradient: "from-green-500/20 to-emerald-500/20"
    }
  ];

  const catalogScores = {
    before: {
      overall: 45,
      image: 30,
      title: 60,
      content: 25,
      seo: 50
    },
    after: {
      overall: 92,
      image: 95,
      title: 90,
      content: 95,
      seo: 88
    }
  };

  const aiFilterTags = [
    { category: "Style", value: "A-Line", confidence: 98 },
    { category: "Sleeve", value: "Sleeveless", confidence: 95 },
    { category: "Length", value: "Midi", confidence: 92 },
    { category: "Neckline", value: "Round Neck", confidence: 89 },
    { category: "Gender", value: "Women", confidence: 99 },
    { category: "Season", value: "Summer", confidence: 96 },
    { category: "Occasion", value: "Casual", confidence: 88 },
    { category: "Fit", value: "Regular", confidence: 91 }
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setCurrentStep(0);
    setCurrentImageIndex(0);
    
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

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 95) return "bg-[#3BC553]";
    if (confidence >= 90) return "bg-blue-500";
    if (confidence >= 85) return "bg-yellow-500";
    return "bg-orange-500";
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-[#3BC553]";
    if (score >= 70) return "text-blue-400";
    if (score >= 50) return "text-yellow-400";
    return "text-orange-400";
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 90) return "bg-[#3BC553]";
    if (score >= 70) return "bg-blue-500";
    if (score >= 50) return "bg-yellow-500";
    return "bg-orange-500";
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
            <div className="space-y-6">
              {/* Product Content and Images Section */}
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Product Image Carousel */}
                <div className="space-y-4">
                  <label className="text-sm text-gray-400 mb-1 block">Product Images</label>
                  <div className="relative group">
                    <div className={`w-full h-64 bg-gradient-to-br ${productImages[currentImageIndex].gradient} rounded-lg border border-[#3BC553]/30 flex items-center justify-center overflow-hidden`}>
                      <img 
                        src={productImages[currentImageIndex].src}
                        alt={productImages[currentImageIndex].alt}
                        className="w-full h-full object-cover transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      
                      {/* Navigation Arrows */}
                      {productImages.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-200 opacity-0 group-hover:opacity-100"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-200 opacity-0 group-hover:opacity-100"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </>
                      )}
                    </div>
                    
                    {/* Image Indicators */}
                    {productImages.length > 1 && (
                      <div className="flex justify-center gap-2 mt-3">
                        {productImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              index === currentImageIndex 
                                ? 'bg-[#3BC553] w-6' 
                                : 'bg-gray-600 hover:bg-gray-500'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* AI Filter Tags - Moved under images */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Filter className="w-4 h-4 text-[#3BC553]" />
                      <span className="text-sm text-[#3BC553] font-medium">AI-Generated Filter Tags</span>
                      <Badge className="bg-[#3BC553]/20 text-[#3BC553] text-xs border-[#3BC553]/30">
                        Auto-detected
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {aiFilterTags.map((tag, index) => (
                        <div
                          key={tag.category}
                          className="group relative p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-[#3BC553]/30 transition-all duration-300 cursor-pointer"
                          style={{ 
                            animationDelay: `${index * 100}ms`,
                            animation: 'fade-in 0.5s ease-out forwards'
                          }}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-gray-400 font-medium">{tag.category}</span>
                            <div className={`w-2 h-2 rounded-full ${getConfidenceColor(tag.confidence)}`}></div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-white font-medium">{tag.value}</span>
                            <span className="text-xs text-gray-500">{tag.confidence}%</span>
                          </div>
                          
                          {/* Hover effect */}
                          <div className="absolute inset-0 bg-[#3BC553]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Tags generated using computer vision AI</span>
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

              {/* Catalog Scoring Section - Moved to bottom */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#3BC553]" />
                  <h4 className="text-lg font-semibold text-white">Catalog Quality Score</h4>
                  <Badge className="bg-[#3BC553]/20 text-[#3BC553] text-xs border-[#3BC553]/30">
                    AI-Powered Analysis
                  </Badge>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Before Score */}
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                    <div className="text-center mb-4">
                      <h5 className="text-sm font-medium text-gray-400 mb-2">Before Enhancement</h5>
                      <div className="relative">
                        <div className={`text-4xl font-bold ${getScoreColor(catalogScores.before.overall)} mb-2`}>
                          {catalogScores.before.overall}
                        </div>
                        <div className="text-sm text-gray-500">Overall Score</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Image className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-300">Image Quality</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-medium ${getScoreColor(catalogScores.before.image)}`}>
                            {catalogScores.before.image}
                          </span>
                          <div className="w-12 bg-gray-700 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${getScoreBgColor(catalogScores.before.image)}`}
                              style={{ width: `${catalogScores.before.image}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Tag className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-300">Title Quality</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-medium ${getScoreColor(catalogScores.before.title)}`}>
                            {catalogScores.before.title}
                          </span>
                          <div className="w-12 bg-gray-700 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${getScoreBgColor(catalogScores.before.title)}`}
                              style={{ width: `${catalogScores.before.title}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-300">Content Quality</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-medium ${getScoreColor(catalogScores.before.content)}`}>
                            {catalogScores.before.content}
                          </span>
                          <div className="w-12 bg-gray-700 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${getScoreBgColor(catalogScores.before.content)}`}
                              style={{ width: `${catalogScores.before.content}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-300">SEO Score</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-medium ${getScoreColor(catalogScores.before.seo)}`}>
                            {catalogScores.before.seo}
                          </span>
                          <div className="w-12 bg-gray-700 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${getScoreBgColor(catalogScores.before.seo)}`}
                              style={{ width: `${catalogScores.before.seo}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* After Score */}
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-[#3BC553]/30">
                    <div className="text-center mb-4">
                      <h5 className="text-sm font-medium text-gray-400 mb-2">After Enhancement</h5>
                      <div className="relative">
                        <div className={`text-4xl font-bold ${getScoreColor(catalogScores.after.overall)} mb-2`}>
                          {catalogScores.after.overall}
                        </div>
                        <div className="text-sm text-gray-500">Overall Score</div>
                        <div className="absolute -top-2 -right-2">
                          <div className="flex items-center gap-1 bg-[#3BC553] px-2 py-1 rounded-full">
                            <TrendingUp className="w-3 h-3 text-white" />
                            <span className="text-xs text-white font-medium">
                              +{catalogScores.after.overall - catalogScores.before.overall}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Image className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-300">Image Quality</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-medium ${getScoreColor(catalogScores.after.image)}`}>
                            {catalogScores.after.image}
                          </span>
                          <div className="w-12 bg-gray-700 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${getScoreBgColor(catalogScores.after.image)}`}
                              style={{ width: `${catalogScores.after.image}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Tag className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-300">Title Quality</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-medium ${getScoreColor(catalogScores.after.title)}`}>
                            {catalogScores.after.title}
                          </span>
                          <div className="w-12 bg-gray-700 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${getScoreBgColor(catalogScores.after.title)}`}
                              style={{ width: `${catalogScores.after.title}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-300">Content Quality</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-medium ${getScoreColor(catalogScores.after.content)}`}>
                            {catalogScores.after.content}
                          </span>
                          <div className="w-12 bg-gray-700 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${getScoreBgColor(catalogScores.after.content)}`}
                              style={{ width: `${catalogScores.after.content}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-300">SEO Score</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-medium ${getScoreColor(catalogScores.after.seo)}`}>
                            {catalogScores.after.seo}
                          </span>
                          <div className="w-12 bg-gray-700 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${getScoreBgColor(catalogScores.after.seo)}`}
                              style={{ width: `${catalogScores.after.seo}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Product Tagging Description - Moved to bottom */}
              <div className="bg-gray-800/30 rounded-lg p-4 border border-[#3BC553]/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#3BC553]/20 rounded-lg flex items-center justify-center">
                    <Tag className="w-5 h-5 text-[#3BC553]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">AI Product Tagging</h4>
                    <p className="text-gray-400 text-sm">
                      Our AI instantly identifies and tags your products with relevant categories, attributes, and metadata.
                    </p>
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
